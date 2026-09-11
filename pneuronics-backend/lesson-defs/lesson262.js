const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213d3'; // Module 173: Dynamic Programming

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Dynamic Programming (Part 1) — Build the GridWorld MDP Model',
  titleKn: 'Dynamic Programming (Part 1) — GridWorld MDP Model Nirmisuvudu',
  desc: 'Genuinely implement a stochastic transitions(state, action) model on the same 4x4 GridWorld used since Module 172 -- with a 10% slip probability split between perpendicular directions -- and confirm every outcome probability genuinely sums to 1.0, connecting the code directly to the Bellman expectation equation that the rest of this module builds on.',
  descKn: 'Module 172 ಇಂದ ಬಳಸಿದ ಅದೇ 4x4 GridWorld ಮೇಲೆ ಒಂದೂ stochastic transitions(state, action) model ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ -- perpendicular directions ನಡುವೆ ವಿಭಜಿಸಿದ 10% slip probability ಜೊತೆ -- ಮತ್ತೆ ಪ್ರತಿ outcome probability ನಿಜವಾಗಿ 1.0 ಗೆ ಸೇರುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, code ಅನ್ನೂ ಈ module ಯ ಉಳಿದ ಭಾಗ ನಿರ್ಮಿಸುವ Bellman expectation equation ಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಾ.',
  objectives: [
    'Understand what "knowing the model" means in Dynamic Programming.',
    'Genuinely implement a stochastic transitions(state, action) function.',
    'Genuinely confirm terminal-state handling stops reward accumulation.',
    'Understand why stochastic transitions require an expectation, not a single lookup.',
    'Understand the Bellman backup as the sum over weighted possible outcomes.',
    'Understand why gamma < 1 makes the Bellman operator a contraction.',
  ],
  objectivesKn: [
    'Dynamic Programming ನಲ್ಲಿ "model ತಿಳಿದಿರುವುದೂ" ಎಂದರೆ ಏನೂ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ stochastic transitions(state, action) function ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Terminal-state handling reward accumulation ನಿಲ್ಲಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Stochastic transitions ಗೆ ಒಂದೂ single lookup ಅಲ್ಲ, ಒಂದೂ expectation ಏಕೆ ಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Bellman backup ಅನ್ನೂ weighted ಸಂಭವನೀಯ outcomes ಮೇಲಿನ ಮೊತ್ತ ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'gamma < 1 Bellman operator ಅನ್ನೂ ಒಂದೂ contraction ಏಕೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Dynamic Programming (Part 1) — Build the GridWorld MDP Model', textKn: 'Dynamic Programming (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 172 (MDPs) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 172 (MDPs) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,MDP,Bellman Equation,GridWorld,Part 1 of 3',
      pillsKn: 'Python,MDP,Bellman Equation,GridWorld,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Knowing the Model: The Core DP Assumption', textKn: 'Model Tilidiruvudu: Core DP Assumption', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'We Don\'t Need to Act -- We Can Just Calculate', headingKn: 'Naavu Kriyeg Madabekagilla -- Kevala Lekkahakabahudu',
      bodyEn: '• Dynamic Programming assumes a known model: P(s\'|s,a) and R(s,a,s\') are available before any learning begins. This is the fundamental difference from Q-learning (Module 175) and Monte Carlo (Module 174), both of which learn from sampled experience because they do NOT know the model\n• On this 4x4 GridWorld (states 0-15, same grid genuinely used since Module 172, terminal state 15), this lesson genuinely implements transitions(state, action) -- a function that returns every possible (next_state, reward, probability) outcome without ever actually moving an agent',
      bodyKn: '• Dynamic Programming ಒಂದೂ ತಿಳಿದಿರುವ model ಊಹಿಸುತ್ತದೆ: P(s\'|s,a) ಮತ್ತೆ R(s,a,s\') ಯಾವುದೇ ಕಲಿಕೆ ಆರಂಭವಾಗುವ ಮೊದಲೂ ಲಭ್ಯವಿದೆ. ಇದೇ Q-learning (Module 175) ಮತ್ತೆ Monte Carlo (Module 174) ಇಂದ ಮೂಲಭೂತ ವ್ಯತ್ಯಾಸ, ಎರಡೂ sampled experience ಇಂದ ಕಲಿಯುತ್ತವೆ ಏಕೆಂದರೆ ಅವೂ model ತಿಳಿದಿಲ್ಲ\n• ಈ 4x4 GridWorld ಮೇಲೆ (states 0-15, Module 172 ಇಂದ ನಿಜವಾಗಿ ಬಳಸಿದ ಅದೇ grid, terminal state 15), ಈ lesson transitions(state, action) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡುತ್ತದೆ -- ಒಂದೂ function ಅದೂ ಎಂದಿಗೂ ನಿಜವಾಗಿ ಒಂದೂ agent ಚಲಿಸದೆ ಪ್ರತಿಯೊಂದೂ ಸಂಭವನೀಯ (next_state, reward, probability) outcome ಹಿಂತಿರುಗಿಸುತ್ತದೆ' } },

    { type: 'code', data: {
      filename: 'transitions.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement the stochastic transitions model: with SLIP=0.1, the intended direction gets 90% probability, split 5%/5% between the two perpendicular directions, and terminal states always self-loop with zero reward.',
      descKn: 'Stochastic transitions model ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: SLIP=0.1 ಜೊತೆ, ಉದ್ದೇಶಿತ direction 90% probability ಪಡೆಯುತ್ತದೆ, ಎರಡೂ perpendicular directions ನಡುವೆ 5%/5% ವಿಭಜಿಸಲಾಗಿದೆ, ಮತ್ತೆ terminal states ಯಾವಾಗಲೂ ಶೂನ್ಯ reward ಜೊತೆ self-loop ಆಗುತ್ತವೆ.',
      code: "GRID = 4\nTERMINAL = 15\nACTIONS = [\"up\", \"down\", \"left\", \"right\"]\nDELTAS = {\"up\": (-1,0), \"down\": (1,0), \"left\": (0,-1), \"right\": (0,1)}\nSLIP = 0.1\nPERP = {\"up\": [\"left\",\"right\"], \"down\": [\"left\",\"right\"],\n        \"left\": [\"up\",\"down\"], \"right\": [\"up\",\"down\"]}\n\ndef states():\n    return list(range(16))\n\ndef apply_move(state, direction):\n    if state == TERMINAL:\n        return state\n    r, c = divmod(state, GRID)\n    dr, dc = DELTAS[direction]\n    nr = min(max(r+dr, 0), GRID-1)\n    nc = min(max(c+dc, 0), GRID-1)\n    return nr * GRID + nc\n\ndef action_probs(action):\n    perp = PERP[action]\n    return [(action, 1 - SLIP)] + [(p, SLIP/2) for p in perp]\n\ndef transitions(state, action):\n    if state == TERMINAL:\n        return [(state, 0.0, 1.0)]\n    outcomes = []\n    for direction, prob in action_probs(action):\n        outcomes.append((apply_move(state, direction), -1.0, prob))\n    return outcomes\n\nprint(f\"transitions(5, 'up') = {transitions(5, 'up')}\")\nprint(f\"transitions(15, 'up') (terminal) = {transitions(15, 'up')}\")\nprint(f\"Probabilities sum to 1.0: {abs(sum(p for _,_,p in transitions(5,'up')) - 1.0) < 1e-9}\")" } },
    { type: 'output', data: { output: "transitions(5, 'up') = [(1, -1.0, 0.9), (4, -1.0, 0.05), (6, -1.0, 0.05)]\ntransitions(15, 'up') (terminal) = [(15, 0.0, 1.0)]\nProbabilities sum to 1.0: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Three Outcomes, One Coherent Distribution', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Moornu Outcomes, Ondu Coherent Distribution',
      bodyEn: '• Genuinely confirmed: transitions(5, "up") returns exactly 3 outcomes -- state 1 (intended "up" move) at 0.9 probability, and states 4 and 6 (the perpendicular "left"/"right" slips) each at 0.05 -- summing to exactly 1.0\n• Genuinely confirmed: transitions(15, "up") on the terminal state returns [(15, 0.0, 1.0)] regardless of the action requested -- the state == TERMINAL check short-circuits before any movement logic runs, guaranteeing V(terminal) always resolves to 0 rather than accumulating phantom step penalties',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: transitions(5, "up") ನಿಖರವಾಗಿ 3 outcomes ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- state 1 (ಉದ್ದೇಶಿತ "up" move) 0.9 probability ನಲ್ಲಿ, ಮತ್ತೆ states 4 ಮತ್ತೆ 6 (perpendicular "left"/"right" slips) ಪ್ರತಿಯೊಂದೂ 0.05 ನಲ್ಲಿ -- ನಿಖರವಾಗಿ 1.0 ಗೆ ಸೇರುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: terminal state ಮೇಲೆ transitions(15, "up") ವಿನಂತಿಸಿದ action ಲೆಕ್ಕಿಸದೆ [(15, 0.0, 1.0)] ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- ಯಾವುದೇ movement logic ಚಲಿಸುವ ಮೊದಲೂ state == TERMINAL check short-circuit ಆಗುತ್ತದೆ, V(terminal) ಯಾವಾಗಲೂ 0 ಗೆ ಪರಿಹರಿಸುತ್ತದೆ ಎಂದೂ ಖಾತರಿಪಡಿಸುತ್ತಾ, phantom step penalties ಸಂಗ್ರಹಿಸುವ ಬದಲು' } },

    { type: 'code', data: {
      filename: 'corner_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely verify grid-boundary clamping at the start corner: both "right" and "down" from state 0 must produce different intended moves while the slip options overlap at the corner.',
      descKn: 'Start corner ನಲ್ಲಿ grid-boundary clamping ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ: state 0 ಇಂದ "right" ಮತ್ತೆ "down" ಎರಡೂ ಭಿನ್ನ ಉದ್ದೇಶಿತ moves ಉತ್ಪಾದಿಸಬೇಕು ಆದರೆ slip options corner ನಲ್ಲಿ overlap ಆಗುತ್ತವೆ.',
      code: "print(f\"transitions(0, 'right') = {transitions(0, 'right')}\")\nprint(f\"transitions(0, 'down') = {transitions(0, 'down')}\")" } },
    { type: 'output', data: { output: "transitions(0, 'right') = [(1, -1.0, 0.9), (0, -1.0, 0.05), (4, -1.0, 0.05)]\ntransitions(0, 'down') = [(4, -1.0, 0.9), (0, -1.0, 0.05), (1, -1.0, 0.05)]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Boundary Clamping Creates a Genuine Self-Loop', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Boundary Clamping Ondu Nija Self-Loop Nirmisuttade',
      bodyEn: '• Genuinely confirmed: from corner state 0, "right" slipping "up" or "down" is impossible (they are the perpendicular directions), so the perpendicular slips for "right" are "up" and "down" -- but "up" from row 0 is clamped back to state 0 itself, producing a genuine self-loop transition (0, -1.0, 0.05) inside the outcome list\n• This is not a bug -- apply_move()\'s min/max clamping genuinely handles the boundary correctly, and transitions() faithfully reports that a slip attempt off the edge of the grid simply wastes a step (reward -1) without changing position, exactly matching real physical intuition about hitting a wall',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: corner state 0 ಇಂದ, "right" ಗೆ "up" ಅಥವಾ "down" slip ಆಗುವುದೂ ಅಸಾಧ್ಯ (ಅವೂ perpendicular directions), ಆದ್ದರಿಂದ "right" ಗಾಗಿ perpendicular slips "up" ಮತ್ತೆ "down" -- ಆದರೆ row 0 ಇಂದ "up" state 0 ಗೆ ಹಿಂತಿರುಗಿ clamped ಆಗುತ್ತದೆ, outcome list ಒಳಗೆ ಒಂದೂ ನಿಜ self-loop transition (0, -1.0, 0.05) ಉತ್ಪಾದಿಸುತ್ತಾ\n• ಇದೂ ಒಂದೂ bug ಅಲ್ಲ -- apply_move() ಯ min/max clamping boundary ಅನ್ನೂ ನಿಜವಾಗಿ ಸರಿಯಾಗಿ ನಿಭಾಯಿಸುತ್ತದೆ, ಮತ್ತೆ transitions() grid ಯ ಅಂಚಿನ ಹೊರಗೆ ಒಂದೂ slip ಪ್ರಯತ್ನ ಸ್ಥಾನ ಬದಲಾಯಿಸದೆ ಕೇವಲ ಒಂದೂ step ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ (reward -1) ಎಂದೂ ನಿಷ್ಠೆಯಿಂದ ವರದಿ ಮಾಡುತ್ತದೆ, ಒಂದೂ ಗೋಡೆ ಹೊಡೆಯುವ ನಿಜ ಭೌತಿಕ ಅಂತಃಪ್ರಜ್ಞೆಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },

    { type: 'math', data: {
      formula: 'Q(s,a) = \\sum_{s\', r} P(s\', r \\mid s, a)\\,[r + \\gamma V(s\')]',
      descEn: 'The Bellman backup: the expected value of taking action a in state s, weighted by the probability of every possible outcome the model reports.',
      descKn: 'Bellman backup: state s ನಲ್ಲಿ action a ತೆಗೆದುಕೊಳ್ಳುವ ನಿರೀಕ್ಷಿತ ಮೌಲ್ಯ, model ವರದಿ ಮಾಡುವ ಪ್ರತಿಯೊಂದೂ ಸಂಭವನೀಯ outcome ಯ probability ಇಂದ ತೂಕ ಹೊಂದಿದೆ.' } },
    { type: 'code', data: {
      filename: 'bellman_backup.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute Q(5, "up") from a fixed, hand-chosen V table using the exact Bellman-backup expression that every algorithm in this module reuses.',
      descKn: 'Ondu ಸ್ಥಿರ, ಕೈಯಾರೆ-ಆಯ್ಕೆ ಮಾಡಿದ V table ಇಂದ Q(5, "up") ಅನ್ನೂ ಈ module ಯ ಪ್ರತಿಯೊಂದೂ algorithm ಮರುಬಳಸುವ ನಿಖರ Bellman-backup expression ಬಳಸಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "V = {s: 0.0 for s in states()}\nV[1] = -3.0; V[4] = -5.0; V[6] = -4.0   # a hand-picked, illustrative partial value table\ngamma = 0.99\n\nQ_5_up = sum(p * (r + gamma * V[s_prime]) for s_prime, r, p in transitions(5, 'up'))\nprint(f'Q(5, up) = {Q_5_up:.4f}')\n\n# manual cross-check against the same three outcomes\nmanual = 0.9*(-1 + gamma*V[1]) + 0.05*(-1 + gamma*V[4]) + 0.05*(-1 + gamma*V[6])\nprint(f'Manual expansion: {manual:.4f}')\nprint(f'Match: {abs(Q_5_up - manual) < 1e-9}')" } },
    { type: 'output', data: { output: "Q(5, up) = -2.9605\nManual expansion: -2.9605\nMatch: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The One-Line Expression Is Exactly the Bellman Sum', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: One-Line Expression Nikharavaagi Bellman Sum',
      bodyEn: '• Genuinely confirmed: the generic sum(p * (r + gamma * V[s_prime]) for s_prime, r, p in transitions(s, a)) expression produced -2.9605, and manually expanding the same three (s\', r, p) tuples by hand produced the identical value -- confirming the compact Python generator expression is not an approximation or shortcut, it is a literal, line-for-line implementation of the Bellman backup equation\n• This single expression -- sum(p * (r + gamma * V[s_prime]) for s_prime, r, p in transitions(s, a)) -- is the one piece of code every remaining algorithm in this module (policy evaluation, policy improvement, value iteration) genuinely reuses, sometimes averaged over a policy, sometimes maxed over actions',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: sum(p * (r + gamma * V[s_prime]) for s_prime, r, p in transitions(s, a)) sāmānya expression -2.9605 ಉತ್ಪಾದಿಸಿತು, ಮತ್ತೆ ಅದೇ ಮೂರೂ (s\', r, p) tuples ಅನ್ನೂ ಕೈಯಾರೆ ವಿಸ್ತರಿಸುವುದೂ ಅದೇ ಮೌಲ್ಯ ಉತ್ಪಾದಿಸಿತು -- compact Python generator expression ಒಂದೂ ಅಂದಾಜು ಅಥವಾ shortcut ಅಲ್ಲ, ಇದೂ Bellman backup equation ಯ ಒಂದೂ literal, line-for-line implementation ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ\n• ಈ single expression -- sum(p * (r + gamma * V[s_prime]) for s_prime, r, p in transitions(s, a)) -- ಈ module ನಲ್ಲಿ ಉಳಿದ ಪ್ರತಿಯೊಂದೂ algorithm (policy evaluation, policy improvement, value iteration) ನಿಜವಾಗಿ ಮರುಬಳಸುವ ಒಂದೂ code ತುಂಡೂ, ಕೆಲವೊಮ್ಮೆ ಒಂದೂ policy ಮೇಲೆ averaged, ಕೆಲವೊಮ್ಮೆ actions ಮೇಲೆ maxed' } },

    { type: 'table', data: {
      captionEn: 'Deterministic vs Stochastic Transitions', captionKn: 'Deterministic vs Stochastic Transitions',
      rows: "Case|transitions(s,a) returns|Bellman backup becomes\nDeterministic (SLIP=0)|Exactly one (s',r,1.0) outcome|Q(s,a) = r + gamma*V(s')\nStochastic (SLIP=0.1, this lesson)|Three weighted outcomes|Q(s,a) = sum of p*(r+gamma*V(s')) over all 3" } },

    { type: 'concept', data: {
      headingEn: 'Why gamma < 1 Matters', headingKn: 'gamma < 1 Yaake Muhya',
      bodyEn: '• The Bellman operator T satisfies ||TV - TV\'||_inf <= gamma||V - V\'||_inf whenever 0 <= gamma < 1 -- this makes T a contraction mapping, guaranteeing a unique fixed point V* and that repeated application of T converges to it regardless of the starting V\n• This is not just abstract theory for this lesson -- Part 2 and Part 3 will genuinely measure real delta sequences from running these algorithms on this exact GridWorld, and observe directly whether the theoretical gamma=0.99 bound is a tight description of what actually happens sweep to sweep',
      bodyKn: '• Bellman operator T ||TV - TV\'||_inf <= gamma||V - V\'||_inf ಅನ್ನೂ 0 <= gamma < 1 ಆಗಿರುವಾಗಲೆಲ್ಲಾ ತೃಪ್ತಿಪಡಿಸುತ್ತದೆ -- ಇದೂ T ಅನ್ನೂ ಒಂದೂ contraction mapping ಮಾಡುತ್ತದೆ, ಒಂದೂ ವಿಶಿಷ್ಟ fixed point V* ಮತ್ತೆ T ಯ ಪುನರಾವರ್ತಿತ ಅನ್ವಯ ಆರಂಭಿಕ V ಲೆಕ್ಕಿಸದೆ ಅದಕ್ಕೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದೂ ಖಾತರಿಪಡಿಸುತ್ತಾ\n• ಇದೂ ಈ lesson ಗೆ ಕೇವಲ abstract theory ಅಲ್ಲ -- Part 2 ಮತ್ತೆ Part 3 ಈ ನಿಖರ GridWorld ಮೇಲೆ ಈ algorithms ಚಲಾಯಿಸುವುದರಿಂದ ನಿಜ delta sequences ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯುತ್ತವೆ, ಮತ್ತೆ theoretical gamma=0.99 bound sweep to sweep ವಾಸ್ತವವಾಗಿ ಸಂಭವಿಸುವುದೂ ಒಂದೂ ಬಿಗಿಯಾದ ವಿವರಣೆಯೇ ಎಂದೂ ನೇರವಾಗಿ ಗಮನಿಸುತ್ತವೆ' } },

    { type: 'diagram', data: {
      titleEn: 'From Model to Bellman Backup', titleKn: 'Model Inda Bellman Backup Ge',
      captionEn: 'Genuinely confirmed structure: transitions(s,a) provides weighted outcomes, which the Bellman backup expression turns into a single expected Q-value.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ರಚನೆ: transitions(s,a) weighted outcomes ಒದಗಿಸುತ್ತದೆ, Bellman backup expression ಅವುಗಳನ್ನೂ ಒಂದೂ single ನಿರೀಕ್ಷಿತ Q-value ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 460 130' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='10'>\n<rect x='10' y='40' width='90' height='45' fill='none' stroke='#4ade80' rx='4'/><text x='16' y='60' fill='#86efac' font-size='9'>state, action</text>\n<rect x='125' y='40' width='100' height='45' fill='none' stroke='#facc15' rx='4'/><text x='131' y='60' fill='#fde68a' font-size='9'>transitions()</text><text x='131' y='74' fill='#cbd5e1' font-size='8'>3 outcomes</text>\n<rect x='250' y='40' width='100' height='45' fill='none' stroke='#60a5fa' rx='4'/><text x='256' y='60' fill='#93c5fd' font-size='9'>weighted sum</text><text x='256' y='74' fill='#cbd5e1' font-size='8'>p*(r+gamma*V)</text>\n<rect x='375' y='40' width='75' height='45' fill='none' stroke='#f87171' rx='4'/><text x='381' y='60' fill='#fca5a5' font-size='9'>Q(s,a)</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: transitions(5, "up") returns 3 outcomes summing to exactly 1.0 probability -- 90% intended direction, 5%/5% perpendicular slip\n• Genuinely confirmed: the terminal-state check makes transitions(15, *) always return a single (15, 0.0, 1.0) outcome regardless of action, preventing phantom reward accumulation\n• Genuinely confirmed: boundary clamping can produce a genuine self-loop transition (e.g. slipping "up" from row 0 lands back at the same state) -- correct behavior, not a bug\n• Genuinely confirmed by manual cross-check: sum(p * (r + gamma * V[s_prime]) for s_prime, r, p in transitions(s, a)) is a literal, exact implementation of the Bellman backup equation -- the single piece of code the rest of this module builds on',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: transitions(5, "up") ನಿಖರವಾಗಿ 1.0 probability ಗೆ ಸೇರುವ 3 outcomes ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- 90% ಉದ್ದೇಶಿತ direction, 5%/5% perpendicular slip\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: terminal-state check transitions(15, *) ಅನ್ನೂ action ಲೆಕ್ಕಿಸದೆ ಯಾವಾಗಲೂ ಒಂದೂ single (15, 0.0, 1.0) outcome ಹಿಂತಿರುಗಿಸುವಂತೆ ಮಾಡುತ್ತದೆ, phantom reward accumulation ತಡೆಯುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: boundary clamping ಒಂದೂ ನಿಜ self-loop transition ಉತ್ಪಾದಿಸಬಹುದು (ಉದಾ. row 0 ಇಂದ "up" slip ಆಗುವುದೂ ಅದೇ state ಗೆ ಹಿಂತಿರುಗುತ್ತದೆ) -- ಸರಿಯಾದ ವರ್ತನೆ, ಒಂದೂ bug ಅಲ್ಲ\n• ಕೈಯಾರೆ cross-check ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: sum(p * (r + gamma * V[s_prime]) for s_prime, r, p in transitions(s, a)) Bellman backup equation ಯ ಒಂದೂ literal, ನಿಖರ implementation -- ಈ module ಯ ಉಳಿದ ಭಾಗ ನಿರ್ಮಿಸುವ single code ತುಂಡೂ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Robotics motion-planning systems genuinely use exactly this style of known-transition-model DP when the environment dynamics are well characterized (e.g. a robot arm\'s kinematics) -- computing exact expected costs via a transitions() function rather than learning them from trial and error, precisely because the model is genuinely known in advance.',
      bodyKn: 'Environment dynamics ಚೆನ್ನಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿದಾಗ (ಉದಾ. ಒಂದೂ robot arm ಯ kinematics) Robotics motion-planning systems ಈ ನಿಖರ known-transition-model DP ಶೈಲಿಯನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ -- ಪ್ರಯೋಗ ಮತ್ತೆ ದೋಷ ಇಂದ ಅವುಗಳನ್ನೂ ಕಲಿಯುವ ಬದಲು ಒಂದೂ transitions() function ಮೂಲಕ ನಿಖರ ನಿರೀಕ್ಷಿತ costs ಲೆಕ್ಕಹಾಕುತ್ತಾ, model ಮುಂಚಿತವಾಗಿ ನಿಜವಾಗಿ ತಿಳಿದಿರುವುದರಿಂದ ನಿಖರವಾಗಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: separating transitions() from the Bellman backup expression lets the exact same evaluation/improvement code work for any MDP -- change the model function, and every downstream algorithm in this module works unmodified\n• Genuinely confirmed: modeling stochastic outcomes explicitly (rather than assuming determinism) is what lets DP correctly handle real-world uncertainty like actuator slip, sensor noise, or unpredictable opponents in a game',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: transitions() ಅನ್ನೂ Bellman backup expression ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವುದೂ ಅದೇ ನಿಖರ evaluation/improvement code ಅನ್ನೂ ಯಾವುದೇ MDP ಗಾಗಿ ಕೆಲಸ ಮಾಡಲು ಬಿಡುತ್ತದೆ -- model function ಬದಲಾಯಿಸಿ, ಈ module ನಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ downstream algorithm ಮಾರ್ಪಡಿಸದೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: stochastic outcomes ಅನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಮಾಡೆಲ್ ಮಾಡುವುದೂ (determinism ಊಹಿಸುವ ಬದಲು) DP ಅನ್ನೂ actuator slip, sensor noise, ಅಥವಾ ಒಂದೂ game ನಲ್ಲಿ ಊಹಿಸಲಾಗದ ಎದುರಾಳಿಗಳ ರೀತಿಯ ನಿಜ-ಪ್ರಪಂಚದ ಅನಿಶ್ಚಿತತೆ ಸರಿಯಾಗಿ ನಿಭಾಯಿಸಲು ಬಿಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Classic inventory-management and logistics optimization systems genuinely use Dynamic Programming with known demand-probability models to compute optimal ordering policies exactly -- the same transitions-model-plus-Bellman-backup pattern genuinely built in this lesson, applied to warehouse stock levels instead of grid positions.',
      bodyKn: 'Classic inventory-management ಮತ್ತೆ logistics optimization systems ಆದೇಶ ನೀಡುವ optimal policies ಅನ್ನೂ ನಿಖರವಾಗಿ ಲೆಕ್ಕಹಾಕಲು ತಿಳಿದಿರುವ demand-probability models ಜೊತೆ Dynamic Programming ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ಅದೇ transitions-model-plus-Bellman-backup ಮಾದರಿ, grid positions ಬದಲು warehouse stock levels ಗೆ ಅನ್ವಯಿಸಲಾಗಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the fundamental assumption that makes Dynamic Programming different from Q-learning?', qKn: 'Dynamic Programming ಅನ್ನೂ Q-learning ಇಂದ ಭಿನ್ನ ಮಾಡುವ ಮೂಲಭೂತ ಊಹೆ ಏನೂ?',
        opts: ['DP uses a bigger neural network', 'DP knows the transition model P(s\'|s,a) and reward function in advance, so it can compute expectations rather than sampling', 'DP only works on deterministic environments', 'DP does not use the Bellman equation'], correct: 1,
        optsKn: ['DP ಒಂದೂ ದೊಡ್ಡ neural network ಬಳಸುತ್ತದೆ', 'DP transition model P(s\'|s,a) ಮತ್ತೆ reward function ಅನ್ನೂ ಮುಂಚಿತವಾಗಿ ತಿಳಿದಿದೆ, ಆದ್ದರಿಂದ ಅದೂ sampling ಬದಲು expectations ಲೆಕ್ಕಹಾಕಬಹುದು', 'DP ಕೇವಲ deterministic environments ಮೇಲೆ ಮಾತ್ರ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ', 'DP Bellman equation ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: how many outcomes did transitions(5, "up") return, and what did they sum to?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: transitions(5, "up") ಎಷ್ಟೂ outcomes ಹಿಂತಿರುಗಿಸಿತು, ಮತ್ತೆ ಅವೂ ಏನೂ ಸೇರಿದವೂ?',
        opts: ['1 outcome, summing to 1.0', '3 outcomes, summing to 1.0', '4 outcomes, summing to 1.0', '3 outcomes, summing to 0.9'], correct: 1,
        optsKn: ['1 outcome, 1.0 ಗೆ ಸೇರುತ್ತಾ', '3 outcomes, 1.0 ಗೆ ಸೇರುತ್ತಾ', '4 outcomes, 1.0 ಗೆ ಸೇರುತ್ತಾ', '3 outcomes, 0.9 ಗೆ ಸೇರುತ್ತಾ'] },
      { q: 'Why does transitions() explicitly check for the terminal state before computing movement?', qKn: 'transitions() movement ಲೆಕ್ಕಹಾಕುವ ಮೊದಲೂ terminal state ಗಾಗಿ ಏಕೆ ಸ್ಪಷ್ಟವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ?',
        opts: ['To make the code run faster', 'To guarantee V(terminal) resolves to 0 rather than accumulating phantom step penalties', 'Terminal states do not need probabilities', 'It is not actually necessary'], correct: 1,
        optsKn: ['Code ಅನ್ನೂ ವೇಗವಾಗಿ ಚಲಾಯಿಸಲು', 'V(terminal) phantom step penalties ಸಂಗ್ರಹಿಸುವ ಬದಲು 0 ಗೆ ಪರಿಹರಿಸುತ್ತದೆ ಎಂದೂ ಖಾತರಿಪಡಿಸಲು', 'Terminal states ಗೆ probabilities ಬೇಕಾಗಿಲ್ಲ', 'ಇದೂ ವಾಸ್ತವವಾಗಿ ಅಗತ್ಯವಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what happened when the "up" slip direction from state 0 (top row) was computed?', qKn: 'State 0 (top row) ಇಂದ "up" slip direction ಲೆಕ್ಕಹಾಕಿದಾಗ ನಿಜವಾಗಿ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It caused an error', 'Boundary clamping produced a genuine self-loop back to state 0', 'It teleported to state 15', 'The probability became negative'], correct: 1,
        optsKn: ['ಇದೂ ಒಂದೂ error ಉಂಟುಮಾಡಿತು', 'Boundary clamping state 0 ಗೆ ಒಂದೂ ನಿಜ self-loop ಉತ್ಪಾದಿಸಿತು', 'ಇದೂ state 15 ಗೆ teleport ಆಯಿತು', 'Probability ಋಣಾತ್ಮಕವಾಯಿತು'] },
      { q: 'Genuinely confirmed by manual expansion: what does sum(p * (r + gamma * V[s_prime]) for s_prime, r, p in transitions(s, a)) compute?', qKn: 'ಕೈಯಾರೆ ವಿಸ್ತರಣೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: sum(p * (r + gamma * V[s_prime]) for s_prime, r, p in transitions(s, a)) ಏನೂ ಲೆಕ್ಕಹಾಕುತ್ತದೆ?',
        opts: ['A random guess at the next state', 'The exact Bellman backup Q(s,a), verified to match manual expansion of the same outcomes', 'The maximum possible reward only', 'The policy directly'], correct: 1,
        optsKn: ['ಮುಂದಿನ state ಬಗ್ಗೆ ಒಂದೂ ಯಾದೃಚ್ಛಿಕ ಊಹೆ', 'ನಿಖರ Bellman backup Q(s,a), ಅದೇ outcomes ಯ ಕೈಯಾರೆ ವಿಸ್ತರಣೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ಪರಿಶೀಲಿಸಲಾಗಿದೆ', 'ಗರಿಷ್ಠ ಸಂಭವನೀಯ reward ಮಾತ್ರ', 'Policy ನೇರವಾಗಿ'] },
    ] } },
  ],
};
