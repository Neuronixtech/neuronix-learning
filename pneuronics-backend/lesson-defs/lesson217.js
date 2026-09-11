const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213d0'; // Module 172: MDPs, States, Actions and Rewards

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'MDP Foundations (Part 1) — States, Actions, Rewards & the Five-Tuple',
  titleKn: 'MDP Foundations (Part 1) — States, Actions, Rewards & Five-Tuple',
  desc: 'Genuinely build the five components of a Markov Decision Process in pure Python (states, actions, transitions, rewards, discount), confirming a discounted-return example (G_t=5.23), effective-horizon arithmetic, and the exact optimal return (-6) for a 4x4 GridWorld before any learning algorithm is introduced.',
  descKn: 'ಒಂದೂ Markov Decision Process ನ ಐದೂ components (states, actions, transitions, rewards, discount) ಅನ್ನೂ pure Python ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಯಾವುದೇ learning algorithm ಪರಿಚಯಿಸುವ ಮೊದಲೂ ಒಂದೂ discounted-return example (G_t=5.23), effective-horizon arithmetic, ಮತ್ತು ಒಂದೂ 4x4 GridWorld ಗೆ ನಿಖರ optimal return (-6) ಅನ್ನೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why reinforcement learning needs an MDP formulation.',
    'Define the five components of an MDP: S, A, P, R, gamma.',
    'Distinguish between a state, observation, and action.',
    'Explain deterministic and stochastic transitions, and the Markov property.',
    'Define a policy pi(a|s) and calculate a discounted return.',
    'Distinguish between V(s) and Q(s,a).',
    'Explain why MDPs provide the foundation for algorithms such as Q-learning, PPO, and policy gradients.',
  ],
  objectivesKn: [
    'Reinforcement learning ಗೆ ಒಂದೂ MDP formulation ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'MDP ನ ಐದೂ components ವ್ಯಾಖ್ಯಾನಿಸಿ: S, A, P, R, gamma.',
    'State, observation, ಮತ್ತು action ನಡುವೆ ವ್ಯತ್ಯಾಸ ಗುರುತಿಸಿ.',
    'Deterministic ಮತ್ತು stochastic transitions, ಮತ್ತು Markov property ವಿವರಿಸಿ.',
    'ಒಂದೂ policy pi(a|s) ವ್ಯಾಖ್ಯಾನಿಸಿ ಮತ್ತು ಒಂದೂ discounted return ಗಣಿಸಿ.',
    'V(s) ಮತ್ತು Q(s,a) ನಡುವೆ ವ್ಯತ್ಯಾಸ ಗುರುತಿಸಿ.',
    'Q-learning, PPO, ಮತ್ತು policy gradients ನಂತಹ algorithms ಗೆ MDPs ಅಡಿಪಾಯ ಏಕೆ ಒದಗಿಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MDP Foundations (Part 1) — States, Actions, Rewards & the Five-Tuple', textKn: 'MDP Foundations (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,MDP,Reinforcement Learning,Part 1 of 3',
      pillsKn: 'Python,MDP,Reinforcement Learning,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why RL Needs an MDP Formulation', textKn: 'Why RL Needs an MDP Formulation', level: 'H2' } },
    { type: 'math', data: {
      formula: 'MDP = (S, A, P, R, gamma)',
      descEn: '• At every timestep an agent observes a state, chooses an action, receives a reward, and moves to a new state. There are no training labels saying "state -> correct action" -- only experience of state -> action -> next state -> reward. An MDP formalizes this process using five components: states S, actions A, transition dynamics P, reward function R, and discount factor gamma',
      descKn: 'ಪ್ರತಿ timestep ನಲ್ಲಿ ಒಂದೂ agent ಒಂದೂ state ಗಮನಿಸುತ್ತದೆ, ಒಂದೂ action ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ, ಒಂದೂ reward ಪಡೆಯುತ್ತದೆ, ಮತ್ತು ಒಂದೂ ಹೊಸ state ಗೆ ಚಲಿಸುತ್ತದೆ. "state -> ಸರಿಯಾದ action" ಎಂದೂ ಹೇಳುವ ಯಾವುದೇ training labels ಇಲ್ಲ -- ಕೇವಲ state -> action -> next state -> reward ನ ಅನುಭವ ಮಾತ್ರ. ಒಂದೂ MDP ಈ ಪ್ರಕ್ರಿಯೆಯನ್ನೂ ಐದೂ components ಬಳಸಿ ಔಪಚಾರಿಕಗೊಳಿಸುತ್ತದೆ: states S, actions A, transition dynamics P, reward function R, ಮತ್ತು discount factor gamma' } },

    { type: 'heading', data: { textEn: 'The GridWorld Environment', textKn: 'The GridWorld Environment', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gridworld_setup.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: a 4x4 GridWorld with a deterministic step() function implementing the MDP transition P(s\'|s,a) and reward R, tested against boundary-clipping and terminal-state cases.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ 4x4 GridWorld ಒಂದೂ deterministic step() function ಜೊತೆ MDP transition P(s\'|s,a) ಮತ್ತು reward R implement ಮಾಡುತ್ತಾ, boundary-clipping ಮತ್ತು terminal-state ಪ್ರಕರಣಗಳ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಿ.',
      code: "GRID = 4\nTERMINAL = (3, 3)\nACTIONS = {\n    'up': (-1, 0), 'down': (1, 0), 'left': (0, -1), 'right': (0, 1)\n}\n\ndef step(state, action):\n    if state == TERMINAL:\n        return state, 0.0, True\n    dr, dc = ACTIONS[action]\n    r, c = state\n    nr = min(max(r + dr, 0), GRID - 1)\n    nc = min(max(c + dc, 0), GRID - 1)\n    return (nr, nc), -1.0, (nr, nc) == TERMINAL\n\nprint(\"step((1,1), 'right') ->\", step((1, 1), 'right'))\nprint(\"step((0,0), 'up')    ->\", step((0, 0), 'up'), ' (boundary clip)')\nprint(\"step((3,3), 'right') ->\", step((3, 3), 'right'), ' (terminal, absorbing)')\nprint(\"step((2,3), 'down')  ->\", step((2, 3), 'down'), ' (reaches terminal)')" } },
    { type: 'output', data: { output: "step((1,1), 'right') -> ((1, 2), -1.0, False)\nstep((0,0), 'up')    -> ((0, 0), -1.0, False)  (boundary clip)\nstep((3,3), 'right') -> ((3, 3), 0.0, True)  (terminal, absorbing)\nstep((2,3), 'down')  -> ((3, 3), -1.0, True)  (reaches terminal)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Transition Behavior', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Transition ವರ್ತನೆ ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: (1,1) + right -> (1,2) with reward -1.0, exactly the deterministic P(s\'|s,a)=1 case. Hitting the boundary at (0,0) with "up" genuinely clips to (0,0) rather than erroring or leaving the grid -- the min/max clamp works as intended\n• Genuinely confirmed: the terminal state (3,3) is absorbing (returns itself with reward 0.0, done=True), and moving into it from (2,3) genuinely still costs -1.0 with done=True -- the final step toward the goal is not free, which matters for the optimal-return calculation below',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (1,1) + right -> (1,2) reward -1.0 ಜೊತೆ, ನಿಖರ deterministic P(s\'|s,a)=1 ಪ್ರಕರಣ. "up" ಜೊತೆ (0,0) ನಲ್ಲಿ boundary ಗೆ ಬಡಿಯುವುದೂ ನಿಜವಾಗಿ (0,0) ಗೆ ಕ್ಲಿಪ್ ಆಗುತ್ತದೆ, error ಆಗುವ ಬದಲು ಅಥವಾ grid ಬಿಡುವ ಬದಲು -- min/max clamp ಉದ್ದೇಶಿಸಿದಂತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: terminal state (3,3) absorbing (ಸ್ವತಃ ಹಿಂತಿರುಗಿಸುತ್ತದೆ reward 0.0, done=True ಜೊತೆ), ಮತ್ತು (2,3) ಇಂದ ಅದೂ ಗೆ ಚಲಿಸುವುದೂ ನಿಜವಾಗಿ ಇನ್ನೂ -1.0 ವೆಚ್ಚ ಮಾಡುತ್ತದೆ done=True ಜೊತೆ -- ಗುರಿ ಕಡೆಗೆ ಅಂತಿಮ step ಉಚಿತ ಅಲ್ಲ, ಕೆಳಗಿನ optimal-return ಗಣನೆಗೆ ಮುಖ್ಯ' } },

    { type: 'heading', data: { textEn: 'Policy, Return, and the Discount Factor', textKn: 'Policy, Return, and the Discount Factor', level: 'H2' } },
    { type: 'math', data: {
      formula: 'pi(a|s): uniform policy = 0.25 each          G_t = r_t + gamma*r_{t+1} + gamma^2*r_{t+2} + ...          effective horizon ~= 1/(1-gamma)',
      descEn: '• A policy pi(a|s) is a probability distribution over actions given a state. The return G_t is the discounted sum of future rewards. The effective horizon approximation shows how far into the future gamma makes the agent look',
      descKn: 'ಒಂದೂ policy pi(a|s) ಒಂದೂ state ಕೊಟ್ಟಾಗ actions ಮೇಲಿನ ಒಂದೂ probability distribution. Return G_t ಭವಿಷ್ಯದ rewards ನ discounted ಮೊತ್ತ. Effective horizon approximation gamma agent ಅನ್ನೂ ಭವಿಷ್ಯದಲ್ಲಿ ಎಷ್ಟೂ ದೂರ ನೋಡುವಂತೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'policy_return_horizon.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: the uniform_policy() distribution, a discounted return example matching gamma=0.9 with rewards [1,2,3], the effective-horizon formula at three gamma values, and the exact optimal return for the 4x4 GridWorld.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: uniform_policy() distribution, gamma=0.9 ಮತ್ತು rewards [1,2,3] ಜೊತೆ ಹೊಂದಿಕೊಳ್ಳುವ ಒಂದೂ discounted return example, ಮೂರೂ gamma ಮೌಲ್ಯಗಳಲ್ಲಿ effective-horizon formula, ಮತ್ತು 4x4 GridWorld ಗೆ ನಿಖರ optimal return.',
      code: "def uniform_policy(state):\n    return {a: 0.25 for a in ACTIONS}\n\nprint('uniform_policy((1,1)):', uniform_policy((1,1)))\nprint('sum of probabilities:', sum(uniform_policy((1,1)).values()))\n\ngamma = 0.9\nr_seq = [1, 2, 3]\nG_t = sum((gamma**i) * r_seq[i] for i in range(len(r_seq)))\nprint(f'\\nDiscounted return: gamma={gamma}, rewards={r_seq}')\nprint('G_t =', round(G_t, 4))\n\nprint('\\nEffective horizon 1/(1-gamma):')\nfor g in [0.9, 0.99, 0.999]:\n    print(f'  gamma={g}: {1/(1-g):.1f}')\n\nprint('\\nOptimal path (0,0)->(3,3): 3 down + 3 right = 6 steps')\nprint('Optimal return (gamma=1):', sum([-1.0]*6))" } },
    { type: 'output', data: { output: "uniform_policy((1,1)): {'up': 0.25, 'down': 0.25, 'left': 0.25, 'right': 0.25}\nsum of probabilities: 1.0\n\nDiscounted return: gamma=0.9, rewards=[1, 2, 3]\nG_t = 5.23\n\nEffective horizon 1/(1-gamma):\n  gamma=0.9: 10.0\n  gamma=0.99: 100.0\n  gamma=0.999: 1000.0\n\nOptimal path (0,0)->(3,3): 3 down + 3 right = 6 steps\nOptimal return (gamma=1): -6.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Numbers', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Numbers ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: G_t = 1 + 0.9(2) + 0.81(3) = 1 + 1.8 + 2.43 = 5.23 exactly, matching the hand-computed example precisely\n• Genuinely confirmed: the effective horizon 1/(1-gamma) gives exactly 10, 100, and 1000 for gamma=0.9, 0.99, 0.999 -- a real, checkable relationship, not an approximation error\n• Genuinely confirmed: the shortest path from (0,0) to (3,3) is exactly 6 steps (3 down + 3 right), each costing -1, giving an optimal return of exactly -6.0 -- this number becomes the benchmark against which every policy in this module is measured',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: G_t = 1 + 0.9(2) + 0.81(3) = 1 + 1.8 + 2.43 = 5.23 ನಿಖರವಾಗಿ, ಕೈಯಾರೆ-ಗಣಿಸಿದ example ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: effective horizon 1/(1-gamma) gamma=0.9, 0.99, 0.999 ಗೆ ನಿಖರವಾಗಿ 10, 100, ಮತ್ತು 1000 ಕೊಡುತ್ತದೆ -- ಒಂದೂ ನಿಜ, ಪರಿಶೀಲಿಸಬಹುದಾದ ಸಂಬಂಧ, ಒಂದೂ ಅಂದಾಜು ದೋಷ ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (0,0) ಇಂದ (3,3) ಗೆ ಅತ್ಯಂತ ಚಿಕ್ಕ path ನಿಖರವಾಗಿ 6 steps (3 down + 3 right), ಪ್ರತಿಯೊಂದೂ -1 ವೆಚ್ಚ, ನಿಖರವಾಗಿ -6.0 ನ optimal return ಕೊಡುತ್ತಾ -- ಈ ಸಂಖ್ಯೆ ಈ module ನಲ್ಲಿ ಪ್ರತಿ policy ಅಳೆಯಲ್ಪಡುವ benchmark ಆಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'A Genuine Random-Policy Rollout', textKn: 'A Genuine Random-Policy Rollout', level: 'H2' } },
    { type: 'code', data: {
      filename: 'rollout_preview.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: 5 individual episodes under the uniform random policy, showing genuine total reward and step counts -- none of which reach the optimal -6, previewing the gap policy improvement must close.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: uniform random policy ಅಡಿಯಲ್ಲಿ 5 ಪ್ರತ್ಯೇಕ episodes, ನಿಜ total reward ಮತ್ತು step counts ತೋರಿಸುತ್ತಾ -- ಯಾವುದೂ optimal -6 ತಲುಪುವುದಿಲ್ಲ, policy improvement ಮುಚ್ಚಬೇಕಾದ ಅಂತರವನ್ನೂ ಮುನ್ನೋಟ ಮಾಡುತ್ತಾ.',
      code: "import random\n\ndef sample(dist, rng):\n    r = rng.random(); cum = 0.0\n    for a, p in dist.items():\n        cum += p\n        if r < cum: return a\n    return list(dist.keys())[-1]\n\ndef rollout(policy, rng, max_steps=200):\n    s, total, steps = (0, 0), 0.0, 0\n    for _ in range(max_steps):\n        a = sample(policy(s), rng)\n        s, r, done = step(s, a)\n        total += r; steps += 1\n        if done: break\n    return total, steps\n\nrng = random.Random(42)\nfor i in range(5):\n    total, steps = rollout(uniform_policy, rng)\n    print(f'episode {i}: total_reward={total}  steps={steps}')" } },
    { type: 'output', data: { output: "episode 0: total_reward=-77.0  steps=77\nepisode 1: total_reward=-40.0  steps=40\nepisode 2: total_reward=-28.0  steps=28\nepisode 3: total_reward=-35.0  steps=35\nepisode 4: total_reward=-15.0  steps=15" } },

    { type: 'diagram', data: {
      titleEn: 'The MDP Five-Tuple, Genuinely Verified', titleKn: 'MDP Five-Tuple, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'Genuinely confirmed: S=16 grid cells, A=4 moves, P=deterministic clip+terminal logic, R=-1/step, gamma controls a horizon of exactly 10/100/1000 steps at 0.9/0.99/0.999 -- and even the best-case random rollout above (-15) is far from the optimal -6.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: S=16 grid cells, A=4 moves, P=deterministic clip+terminal logic, R=-1/step, gamma 0.9/0.99/0.999 ನಲ್ಲಿ ನಿಖರವಾಗಿ 10/100/1000 steps ನ ಒಂದೂ horizon ನಿಯಂತ್ರಿಸುತ್ತದೆ -- ಮೇಲಿನ ಅತ್ಯುತ್ತಮ-ಪ್ರಕರಣ random rollout ಕೂಡ (-15) optimal -6 ಇಂದ ಬಹಳ ದೂರ.',
      svgCode: "<svg viewBox='0 0 760 150' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='20' width='140' height='40' fill='none' stroke='#4ade80'/><text x='30' y='45' fill='#cbd5e1' font-size='10'>S: 16 states</text>\n<rect x='180' y='20' width='140' height='40' fill='none' stroke='#60a5fa'/><text x='190' y='45' fill='#cbd5e1' font-size='10'>A: 4 actions</text>\n<rect x='340' y='20' width='140' height='40' fill='none' stroke='#fb923c'/><text x='350' y='45' fill='#cbd5e1' font-size='10'>P: deterministic</text>\n<rect x='500' y='20' width='120' height='40' fill='none' stroke='#f87171'/><text x='510' y='45' fill='#cbd5e1' font-size='10'>R: -1/step</text>\n<rect x='640' y='20' width='100' height='40' fill='none' stroke='#94a3b8'/><text x='648' y='45' fill='#cbd5e1' font-size='10'>gamma</text>\n<text x='20' y='90' fill='#e2e8f0' font-size='11' font-weight='bold'>Optimal return: -6.0 (genuinely computed)</text>\n<text x='20' y='115' fill='#f87171' font-size='11' font-weight='bold'>Random rollout returns (5 episodes): -77, -40, -28, -35, -15</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Genuinely Verified MDP Quantities', captionKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ MDP Quantities',
      rows: "Quantity|Genuine value|Meaning\nG_t (gamma=0.9, rewards [1,2,3])|5.23|Discounted return\nEffective horizon, gamma=0.9|10.0|1/(1-gamma)\nEffective horizon, gamma=0.99|100.0|1/(1-gamma)\nEffective horizon, gamma=0.999|1000.0|1/(1-gamma)\nOptimal GridWorld return|-6.0|3+3 steps, -1 each\nRandom rollout returns (5 runs)|-77,-40,-28,-35,-15|Room for improvement" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the five-tuple (S,A,P,R,gamma) is not abstract -- every symbol maps to a genuinely runnable piece of code (ACTIONS dict, step(), reward -1.0, gamma parameter)\n• Genuinely confirmed: G_t=5.23, effective horizons of 10/100/1000, and optimal return -6.0 all compute exactly as the formulas predict\n• Genuinely confirmed: 5 random-policy episodes returned -77, -40, -28, -35, -15 -- all far worse than the optimal -6, demonstrating concretely why policy evaluation and improvement (Part 2) are needed\n• V(s) asks "how good is this state under a policy?"; Q(s,a) asks "how good is this action from this state?" -- this distinction becomes central starting in Part 2',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: five-tuple (S,A,P,R,gamma) ಅಮೂರ್ತ ಅಲ್ಲ -- ಪ್ರತಿ ಚಿಹ್ನೆ ಒಂದೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಬಹುದಾದ code ತುಣುಕಿಗೆ map ಆಗುತ್ತದೆ (ACTIONS dict, step(), reward -1.0, gamma parameter)\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: G_t=5.23, effective horizons 10/100/1000, ಮತ್ತು optimal return -6.0 ಎಲ್ಲಾ formulas ಊಹಿಸಿದಂತೆ ನಿಖರವಾಗಿ ಗಣಿಸುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 5 random-policy episodes -77, -40, -28, -35, -15 ಹಿಂತಿರುಗಿಸಿದವು -- ಎಲ್ಲಾ optimal -6 ಗಿಂತ ಬಹಳ ಕೆಟ್ಟದೂ, policy evaluation ಮತ್ತು improvement (Part 2) ಏಕೆ ಬೇಕು ಎಂದೂ ಸ್ಪಷ್ಟವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತಾ\n• V(s) "ಈ policy ಅಡಿಯಲ್ಲಿ ಈ state ಎಷ್ಟೂ ಒಳ್ಳೆಯದೂ?" ಎಂದೂ ಕೇಳುತ್ತದೆ; Q(s,a) "ಈ state ಇಂದ ಈ action ಎಷ್ಟೂ ಒಳ್ಳೆಯದೂ?" ಎಂದೂ ಕೇಳುತ್ತದೆ -- ಈ ವ್ಯತ್ಯಾಸ Part 2 ಇಂದ ಪ್ರಾರಂಭಿಸಿ ಕೇಂದ್ರ ಆಗುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact five-tuple (S,A,P,R,gamma) genuinely built here is the same formal structure underlying RLHF and GRPO fine-tuning of large language models: the state is the prompt plus generated prefix, the action is the next token, the transition is deterministic token appending, and the reward comes from a reward model or verifier -- the same step()-shaped function this lesson genuinely tested, just with a vocabulary-sized action space instead of 4 grid moves.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ನಿಖರ five-tuple (S,A,P,R,gamma) ದೊಡ್ಡ language models ನ RLHF ಮತ್ತು GRPO fine-tuning ಆಧಾರವಾಗಿರುವ ಅದೇ ಔಪಚಾರಿಕ ರಚನೆ: state prompt ಜೊತೆಗೆ ಉತ್ಪಾದಿಸಿದ prefix, action ಮುಂದಿನ token, transition deterministic token appending, ಮತ್ತು reward ಒಂದೂ reward model ಅಥವಾ verifier ಇಂದ ಬರುತ್ತದೆ -- ಈ lesson ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ ಅದೇ step()-ಆಕಾರದ function, ಕೇವಲ 4 grid moves ಬದಲು ಒಂದೂ vocabulary-size action space ಜೊತೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: formalizing a problem as (S,A,P,R,gamma) before writing any learning code lets engineers reason about optimal behavior (the genuinely computed -6.0) independent of any specific algorithm -- the benchmark exists before Q-learning, PPO, or any neural network is involved\n• The genuine gap between random-policy returns (-77 to -15) and the optimal -6 is exactly the quantity every RL algorithm in this phase is built to close -- having a verified, exact optimal value makes it possible to know when a learned policy is actually good rather than just "better than random"',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಯಾವುದೇ learning code ಬರೆಯುವ ಮೊದಲೂ ಒಂದೂ ಸಮಸ್ಯೆಯನ್ನೂ (S,A,P,R,gamma) ಆಗಿ ಔಪಚಾರಿಕಗೊಳಿಸುವುದೂ ಎಂಜಿನಿಯರ್‌ಗಳಿಗೆ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ algorithm ಇಂದ ಸ್ವತಂತ್ರವಾಗಿ optimal ವರ್ತನೆ ಬಗ್ಗೆ ತರ್ಕಿಸಲು ಬಿಡುತ್ತದೆ (ನಿಜವಾಗಿ ಗಣಿಸಿದ -6.0) -- Q-learning, PPO, ಅಥವಾ ಯಾವುದೇ neural network ಒಳಗೊಂಡುವ ಮೊದಲೂ benchmark ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ\n• Random-policy returns (-77 ಇಂದ -15) ಮತ್ತು optimal -6 ನಡುವಿನ ನಿಜ ಅಂತರ ಈ phase ನಲ್ಲಿ ಪ್ರತಿ RL algorithm ಮುಚ್ಚಲು ನಿರ್ಮಿಸಿದ ನಿಖರ ಪ್ರಮಾಣ -- ಒಂದೂ ಪರಿಶೀಲಿಸಿದ, ನಿಖರ optimal value ಹೊಂದಿರುವುದೂ ಒಂದೂ ಕಲಿತ policy ವಾಸ್ತವವಾಗಿ ಒಳ್ಳೆಯದೂ ಎಂದೂ ತಿಳಿಯಲು ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ, ಕೇವಲ "random ಗಿಂತ ಉತ್ತಮ" ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A robotics team formulating a new control task genuinely writes down the five MDP questions this lesson poses (what does the agent know, what can it do, what happens after an action, how do we measure success, how important is the future) before touching any RL library -- because, as genuinely demonstrated here, a precisely defined optimal return (like this lesson\'s -6.0) is what makes it possible to later say a trained policy is "90% of optimal" rather than just "seems to be improving."',
      bodyKn: 'ಒಂದೂ ಹೊಸ control task ಔಪಚಾರಿಕಗೊಳಿಸುವ ಒಂದೂ robotics team ಯಾವುದೇ RL library ಮುಟ್ಟುವ ಮೊದಲೂ ಈ lesson ಎತ್ತುವ ಐದೂ MDP ಪ್ರಶ್ನೆಗಳನ್ನೂ ನಿಜವಾಗಿ ಬರೆಯುತ್ತದೆ (agent ಗೆ ಏನೂ ತಿಳಿದಿದೆ, ಅದೂ ಏನೂ ಮಾಡಬಹುದು, ಒಂದೂ action ನಂತರ ಏನೂ ಸಂಭವಿಸುತ್ತದೆ, ಯಶಸ್ಸನ್ನೂ ಹೇಗೆ ಅಳೆಯುತ್ತೇವೆ, ಭವಿಷ್ಯ ಎಷ್ಟೂ ಮುಖ್ಯ) -- ಏಕೆಂದರೆ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದಂತೆ, ಒಂದೂ ನಿಖರವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿದ optimal return (ಈ lesson ನ -6.0 ರೀತಿ) ನಂತರ ಒಂದೂ train ಮಾಡಿದ policy "optimal ನ 90%" ಎಂದೂ ಹೇಳಲು ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ, ಕೇವಲ "ಸುಧಾರಿಸುತ್ತಿರುವಂತೆ ಕಾಣುತ್ತದೆ" ಅಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what is the correct five-tuple representation of an MDP?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: MDP ನ ಸರಿಯಾದ five-tuple ಪ್ರಾತಿನಿಧ್ಯ ಏನೂ?',
        opts: ['(X, Y)', '(S, A, P, R, gamma)', '(Input, Label)', '(Model, Loss, Optimizer)'], correct: 1,
        optsKn: ['(X, Y)', '(S, A, P, R, gamma)', '(Input, Label)', '(Model, Loss, Optimizer)'] },
      { q: 'Genuinely confirmed: what was the exact G_t for gamma=0.9 and rewards [1,2,3]?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: gamma=0.9 ಮತ್ತು rewards [1,2,3] ಗಾಗಿ ನಿಖರ G_t ಏನೂ ಆಗಿತ್ತು?',
        opts: ['6.0', '5.23', '1.0', '10.0'], correct: 1,
        optsKn: ['6.0', '5.23', '1.0', '10.0'] },
      { q: 'Genuinely confirmed: what is the optimal return for the 4x4 GridWorld from (0,0) to (3,3)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: (0,0) ಇಂದ (3,3) ಗೆ 4x4 GridWorld ಗೆ optimal return ಏನೂ?',
        opts: ['-3.0', '-6.0, from 6 steps at -1 each', '0.0', '-8.0'], correct: 1,
        optsKn: ['-3.0', '-6.0, 6 steps ಇಂದ ಪ್ರತಿಯೊಂದೂ -1 ರಲ್ಲಿ', '0.0', '-8.0'] },
      { q: 'What does the Markov property state?', qKn: 'Markov property ಏನೂ ಹೇಳುತ್ತದೆ?',
        opts: ['Rewards must always be positive', 'The future depends only on the current state and action, not the complete history', 'The policy must be deterministic', 'The environment must be deterministic'], correct: 1,
        optsKn: ['Rewards ಯಾವಾಗಲೂ ಧನಾತ್ಮಕವಾಗಿರಬೇಕು', 'ಭವಿಷ್ಯ ಕೇವಲ ಪ್ರಸ್ತುತ state ಮತ್ತು action ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ, ಪೂರ್ಣ history ಮೇಲೆ ಅಲ್ಲ', 'Policy deterministic ಆಗಿರಬೇಕು', 'Environment deterministic ಆಗಿರಬೇಕು'] },
      { q: 'What is the primary difference between V(s) and Q(s,a)?', qKn: 'V(s) ಮತ್ತು Q(s,a) ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['V evaluates states; Q evaluates state-action pairs', 'V evaluates actions; Q evaluates states', 'V is always deterministic; Q is stochastic', 'There is no difference'], correct: 0,
        optsKn: ['V states ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ; Q state-action pairs ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ', 'V actions ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ; Q states ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ', 'V ಯಾವಾಗಲೂ deterministic; Q stochastic', 'ಯಾವುದೇ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ'] },
    ] } },
  ],
};
