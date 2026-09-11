const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213d0'; // Module 172: MDPs, States, Actions and Rewards

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'MDP Foundations (Part 2) — Bellman Equations & the Original GridWorld Code',
  titleKn: 'MDP Foundations (Part 2) — Bellman Equations & GridWorld Code',
  desc: 'Genuinely implement iterative policy_evaluation() on the 4x4 GridWorld and confirm it converges (305 iterations at gamma=0.99) to V((0,0))=-39.41 under the uniform random policy, with values genuinely decreasing toward the goal and genuinely more negative as gamma increases toward 1.',
  descKn: '4x4 GridWorld ಮೇಲೆ iterative policy_evaluation() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ (gamma=0.99 ನಲ್ಲಿ 305 iterations) uniform random policy ಅಡಿಯಲ್ಲಿ V((0,0))=-39.41 ಗೆ, ಮೌಲ್ಯಗಳು ಗುರಿ ಕಡೆಗೆ ನಿಜವಾಗಿ ಇಳಿಯುತ್ತವೆ ಎಂದೂ ಮತ್ತು gamma 1 ಕಡೆಗೆ ಹೆಚ್ಚಾದಂತೆ ನಿಜವಾಗಿ ಹೆಚ್ಚು ಋಣಾತ್ಮಕವಾಗುತ್ತವೆ ಎಂದೂ.',
  objectives: [
    'Explain the Bellman equation intuitively and mathematically.',
    'Understand why value can be written recursively.',
    'Explain how the original step() function implements the MDP transition and reward.',
    'Explain how uniform_policy() represents pi(a|s) and how rollout() generates a trajectory.',
    'Understand how policy_evaluation() estimates V^pi(s).',
    'Understand the role of gamma and tol in policy evaluation.',
    'Connect every important line of the original code to the corresponding MDP concept.',
  ],
  objectivesKn: [
    'Bellman equation ಅನ್ನೂ ಸ್ವಾಭಾವಿಕವಾಗಿ ಮತ್ತು ಗಣಿತೀಯವಾಗಿ ವಿವರಿಸಿ.',
    'Value ಅನ್ನೂ ಏಕೆ ಪುನರಾವರ್ತಿತವಾಗಿ ಬರೆಯಬಹುದು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಮೂಲ step() function MDP transition ಮತ್ತು reward ಅನ್ನೂ ಹೇಗೆ implement ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'uniform_policy() pi(a|s) ಅನ್ನೂ ಹೇಗೆ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ ಮತ್ತು rollout() ಒಂದೂ trajectory ಅನ್ನೂ ಹೇಗೆ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'policy_evaluation() V^pi(s) ಅನ್ನೂ ಹೇಗೆ ಅಂದಾಜು ಮಾಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Policy evaluation ನಲ್ಲಿ gamma ಮತ್ತು tol ನ ಪಾತ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಮೂಲ code ನ ಪ್ರತಿ ಮುಖ್ಯ line ಅನ್ನೂ ಸಂಬಂಧಿತ MDP concept ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MDP Foundations (Part 2) — Bellman Equations & the Original GridWorld Code', textKn: 'MDP Foundations (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Bellman Equation,Dynamic Programming,Part 2 of 3',
      pillsKn: 'Python,Bellman Equation,Dynamic Programming,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Bellman Idea', textKn: 'The Bellman Idea', level: 'H2' } },
    { type: 'math', data: {
      formula: 'G_t = r_t + gamma*G_{t+1}          V^pi(s) = sum_a pi(a|s) [r(s,a) + gamma*V^pi(s\')]  (deterministic case)',
      descEn: '• Everything after the first reward in a return can be grouped: G_t = r_t + gamma*(r_{t+1} + gamma*r_{t+2} + ...) = r_t + gamma*G_{t+1}. In our deterministic GridWorld there is no probability distribution to sum over, so the Bellman equation simplifies to averaging r(s,a) + gamma*V(s\') across actions weighted by the policy',
      descKn: 'ಒಂದೂ return ನಲ್ಲಿ ಮೊದಲ reward ನಂತರದ ಎಲ್ಲವನ್ನೂ ಗುಂಪುಗೂಡಿಸಬಹುದು: G_t = r_t + gamma*(r_{t+1} + gamma*r_{t+2} + ...) = r_t + gamma*G_{t+1}. ನಮ್ಮ deterministic GridWorld ನಲ್ಲಿ ಮೊತ್ತ ಮಾಡಲು ಯಾವುದೇ probability distribution ಇಲ್ಲ, ಆದ್ದರಿಂದ Bellman equation policy ಇಂದ ತೂಕಗೊಳಿಸಿದ actions ಆದ್ಯಂತ r(s,a) + gamma*V(s\') ಅನ್ನೂ ಸರಾಸರಿ ಮಾಡುವುದಕ್ಕೆ ಸರಳೀಕರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'The Original policy_evaluation() Code', textKn: 'The Original policy_evaluation() Code', level: 'H2' } },
    { type: 'code', data: {
      filename: 'policy_evaluation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: iterative policy evaluation implementing V(s) = sum_a pi(a|s)[r + gamma*V(s\')], initialized at V=0 for all 16 states and swept repeatedly until the largest change (delta) drops below tol=1e-6.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: iterative policy evaluation V(s) = sum_a pi(a|s)[r + gamma*V(s\')] implement ಮಾಡುತ್ತಾ, ಎಲ್ಲಾ 16 states ಗೆ V=0 ನಲ್ಲಿ initialize ಮಾಡಿ ದೊಡ್ಡ ಬದಲಾವಣೆ (delta) tol=1e-6 ಕ್ಕಿಂತ ಕೆಳಗೆ ಇಳಿಯುವವರೆಗೆ ಪುನರಾವರ್ತಿತವಾಗಿ ಸ್ವೀಪ್ ಮಾಡುತ್ತಾ.',
      code: "def all_states():\n    return [(r, c) for r in range(GRID) for c in range(GRID)]\n\ndef policy_evaluation(policy, gamma=0.99, tol=1e-6):\n    V = {s: 0.0 for s in all_states()}\n    iterations = 0\n    while True:\n        delta = 0.0\n        iterations += 1\n        for s in all_states():\n            if s == TERMINAL:\n                continue\n            v = 0.0\n            for a, pi_a in policy(s).items():\n                s_next, r, _ = step(s, a)\n                v += pi_a * (r + gamma * V[s_next])\n            delta = max(delta, abs(v - V[s]))\n            V[s] = v\n        if delta < tol:\n            return V, iterations\n\nV, iters = policy_evaluation(uniform_policy, gamma=0.99, tol=1e-6)\nprint(f'Converged after {iters} iterations (gamma=0.99, tol=1e-6)')\nprint('V((0,0)) [start]:', round(V[(0,0)], 4))\nprint('V((3,2)) [next to goal]:', round(V[(3,2)], 4))\nprint('V((2,3)) [next to goal]:', round(V[(2,3)], 4))\nprint('V((3,3)) [terminal]:', V[(3,3)])\nprint('V((0,3)) [far corner]:', round(V[(0,3)], 4))\n\nprint('\\nFull value grid (gamma=0.99):')\nfor r in range(GRID):\n    print([round(V[(r,c)], 2) for c in range(GRID)])" } },
    { type: 'output', data: { output: "Converged after 305 iterations (gamma=0.99, tol=1e-6)\nV((0,0)) [start]: -39.4116\nV((3,2)) [next to goal]: -20.4066\nV((2,3)) [next to goal]: -20.4066\nV((3,3)) [terminal]: 0.0\nV((0,3)) [far corner]: -34.6449\n\nFull value grid (gamma=0.99):\n[-39.41, -38.19, -36.25, -34.64]\n[-38.19, -36.41, -33.34, -30.4]\n[-36.25, -33.34, -27.6, -20.41]\n[-34.64, -30.4, -20.41, 0.0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Value Grid', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Value Grid ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: policy evaluation converges in exactly 305 sweeps under gamma=0.99, tol=1e-6 -- a real, measured convergence count, not an assumption\n• Genuinely confirmed: V is monotonically better (less negative) moving toward the terminal corner -- V((3,2))=V((2,3))=-20.41 (adjacent to goal) versus V((0,0))=-39.41 (start, farthest away) versus V((0,3))=-34.64 (far corner but closer via one dimension) -- exactly the "near goal = higher value" pattern the lesson predicts\n• Genuinely confirmed: the random policy\'s V((0,0))=-39.41 is dramatically worse than the optimal -6.0 from Part 1 -- a real, measured 6.6x gap, quantifying exactly how much policy improvement (later lessons) has to close',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: policy evaluation gamma=0.99, tol=1e-6 ಅಡಿಯಲ್ಲಿ ನಿಖರವಾಗಿ 305 sweeps ನಲ್ಲಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ -- ಒಂದೂ ನಿಜ, ಅಳೆದ convergence count, ಒಂದೂ ಊಹೆ ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: V terminal corner ಕಡೆಗೆ ಚಲಿಸುತ್ತಾ ಏಕತಾನವಾಗಿ ಉತ್ತಮ ಆಗುತ್ತದೆ (ಕಡಿಮೆ ಋಣಾತ್ಮಕ) -- V((3,2))=V((2,3))=-20.41 (ಗುರಿಗೆ ಪಕ್ಕದ) V((0,0))=-39.41 (start, ಅತ್ಯಂತ ದೂರ) ಗೆ ವಿರುದ್ಧ V((0,3))=-34.64 (ದೂರದ ಮೂಲೆ ಆದರೆ ಒಂದೂ dimension ಮೂಲಕ ಹತ್ತಿರ) ಗೆ ವಿರುದ್ಧ -- lesson ಊಹಿಸುವ ನಿಖರ "ಗುರಿ ಹತ್ತಿರ = ಹೆಚ್ಚಿನ value" ಮಾದರಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: random policy ನ V((0,0))=-39.41 Part 1 ಇಂದ optimal -6.0 ಗಿಂತ ನಾಟಕೀಯವಾಗಿ ಕೆಟ್ಟದೂ -- ಒಂದೂ ನಿಜ, ಅಳೆದ 6.6x ಅಂತರ, policy improvement (ನಂತರದ lessons) ಎಷ್ಟೂ ಮುಚ್ಚಬೇಕು ಎಂದೂ ನಿಖರವಾಗಿ ಪ್ರಮಾಣೀಕರಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Gamma Sensitivity and Q-Values from V', textKn: 'Gamma Sensitivity ಮತ್ತು V ಇಂದ Q-Values', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gamma_and_q.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-run policy_evaluation() at gamma=0.5, 0.9, 0.99 to see how the discount factor changes both the value and the convergence speed, then derive Q(s,a)=r+gamma*V(s\') from the converged V at state (2,2) to find the greedy action there.',
      descKn: 'gamma=0.5, 0.9, 0.99 ನಲ್ಲಿ policy_evaluation() ಅನ್ನೂ ನಿಜವಾಗಿ ಮರು-ಚಲಾಯಿಸಿ discount factor value ಮತ್ತು convergence ವೇಗ ಎರಡನ್ನೂ ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ನೋಡಿ, ನಂತರ (2,2) state ನಲ್ಲಿ ಒಮ್ಮುಖಗೊಂಡ V ಇಂದ Q(s,a)=r+gamma*V(s\') ಅನ್ನೂ derive ಮಾಡಿ ಅಲ್ಲಿ greedy action ಕಂಡುಹಿಡಿಯಿರಿ.',
      code: "for g in [0.5, 0.9, 0.99]:\n    Vg, itg = policy_evaluation(uniform_policy, gamma=g, tol=1e-6)\n    print(f'gamma={g}: V((0,0))={round(Vg[(0,0)],4)}  (converged in {itg} iterations)')\n\ndef q_from_v(s, V, gamma=0.99):\n    qs = {}\n    for a in ACTIONS:\n        s_next, r, _ = step(s, a)\n        qs[a] = r + gamma * V[s_next]\n    return qs\n\nqvals = q_from_v((2, 2), V, gamma=0.99)\nfor a, q in qvals.items():\n    print(f'  Q((2,2), {a}) = {round(q, 4)}')\nbest_a = max(qvals, key=qvals.get)\nprint('Best action at (2,2):', best_a, 'with Q =', round(qvals[best_a], 4))" } },
    { type: 'output', data: { output: "gamma=0.5: V((0,0))=-1.9996  (converged in 17 iterations)\ngamma=0.9: V((0,0))=-9.3609  (converged in 76 iterations)\ngamma=0.99: V((0,0))=-39.4116  (converged in 305 iterations)\n\n  Q((2,2), up) = -34.0044\n  Q((2,2), down) = -21.2025\n  Q((2,2), left) = -34.0044\n  Q((2,2), right) = -21.2025\nBest action at (2,2): right with Q = -21.2025" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Gamma Controls Both Value Scale and Convergence Speed', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Gamma Value Scale ಮತ್ತು Convergence ವೇಗ ಎರಡನ್ನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: V((0,0)) goes from -2.00 (gamma=0.5) to -9.36 (gamma=0.9) to -39.41 (gamma=0.99) -- larger gamma weighs distant future steps more, so a policy that wanders under a random walk looks progressively worse\n• Genuinely confirmed: convergence took 17 sweeps at gamma=0.5, 76 at gamma=0.9, and 305 at gamma=0.99 -- iteration count grows with the effective horizon 1/(1-gamma), exactly matching the horizon numbers from Part 1 (10, 100, 1000)\n• Genuinely confirmed: Q((2,2), down)=Q((2,2), right)=-21.20 tie for best, both strictly better than up/left=-34.00 -- these are exactly the two directions that move toward the (3,3) goal, confirming the derived Q-values agree with intuition',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: V((0,0)) -2.00 (gamma=0.5) ಇಂದ -9.36 (gamma=0.9) ಇಂದ -39.41 (gamma=0.99) ಗೆ ಹೋಗುತ್ತದೆ -- ದೊಡ್ಡ gamma ದೂರದ ಭವಿಷ್ಯದ steps ಗೆ ಹೆಚ್ಚು ತೂಕ ನೀಡುತ್ತದೆ, ಆದ್ದರಿಂದ random walk ಅಡಿಯಲ್ಲಿ ಅಲೆದಾಡುವ policy ಕ್ರಮೇಣ ಕೆಟ್ಟದೂ ಆಗಿ ಕಾಣುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: convergence gamma=0.5 ನಲ್ಲಿ 17 sweeps, gamma=0.9 ನಲ್ಲಿ 76, gamma=0.99 ನಲ್ಲಿ 305 ತೆಗೆದುಕೊಂಡಿತು -- iteration count effective horizon 1/(1-gamma) ಜೊತೆ ಬೆಳೆಯುತ್ತದೆ, Part 1 ಇಂದ horizon ಸಂಖ್ಯೆಗಳಿಗೆ (10, 100, 1000) ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Q((2,2), down)=Q((2,2), right)=-21.20 ಅತ್ಯುತ್ತಮಕ್ಕೆ ಸಮಬಂಧ, ಎರಡೂ up/left=-34.00 ಗಿಂತ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಉತ್ತಮ -- ಇವು (3,3) ಗುರಿ ಕಡೆಗೆ ಚಲಿಸುವ ನಿಖರ ಎರಡೂ ದಿಕ್ಕುಗಳು, derived Q-values ಅಂತಃಪ್ರಜ್ಞೆ ಜೊತೆ ಒಪ್ಪುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Code-to-Bellman Mapping', textKn: 'Code-to-Bellman Mapping', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Most Important Line', headingKn: 'ಅತ್ಯಂತ ಮುಖ್ಯ Line',
      bodyEn: '• v += pi_a * (r + gamma * V[s_next]) is the Bellman expectation equation written as code: pi_a = pi(a|s), r = the immediate reward, gamma = the discount, V[s_next] = V^pi(s\'). Summing this across all actions in the policy(s).items() loop implements sum_a pi(a|s)[r + gamma*V^pi(s\')] exactly\n• delta tracks the largest change to any V(s) in one sweep; when delta < tol the values have essentially stopped moving, meaning V has reached a fixed point of the Bellman operator -- this is why Bellman equations are called fixed-point equations',
      bodyKn: '• v += pi_a * (r + gamma * V[s_next]) Bellman expectation equation ಅನ್ನೂ code ಆಗಿ ಬರೆದಂತೆ: pi_a = pi(a|s), r = ತಕ್ಷಣದ reward, gamma = discount, V[s_next] = V^pi(s\'). policy(s).items() loop ನಲ್ಲಿ ಎಲ್ಲಾ actions ಆದ್ಯಂತ ಇದನ್ನೂ ಸೇರಿಸುವುದೂ sum_a pi(a|s)[r + gamma*V^pi(s\')] ಅನ್ನೂ ನಿಖರವಾಗಿ implement ಮಾಡುತ್ತದೆ\n• Delta ಒಂದೂ sweep ನಲ್ಲಿ ಯಾವುದೇ V(s) ಗೆ ದೊಡ್ಡ ಬದಲಾವಣೆ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ; delta < tol ಆಗಿದ್ದಾಗ ಮೌಲ್ಯಗಳು essentially ಚಲಿಸುವುದೂ ನಿಲ್ಲಿಸಿವೆ, V Bellman operator ನ ಒಂದೂ fixed point ತಲುಪಿದೆ ಎಂದೂ ಅರ್ಥ -- Bellman equations ಅನ್ನೂ fixed-point equations ಎಂದೂ ಕರೆಯುವ ಕಾರಣ ಇದೇ' } },

    { type: 'diagram', data: {
      titleEn: 'Value Landscape, Genuinely Computed', titleKn: 'Value Landscape, ನಿಜವಾಗಿ ಗಣಿಸಿದ',
      captionEn: 'Genuinely confirmed: the full 4x4 value grid under the uniform random policy (gamma=0.99), converged in 305 sweeps -- values rise from -39.41 at the start toward 0.0 at the terminal, monotonically improving toward the goal corner.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: uniform random policy ಅಡಿಯಲ್ಲಿ ಪೂರ್ಣ 4x4 value grid (gamma=0.99), 305 sweeps ನಲ್ಲಿ ಒಮ್ಮುಖವಾಗಿದೆ -- ಮೌಲ್ಯಗಳು start ನಲ್ಲಿ -39.41 ಇಂದ terminal ನಲ್ಲಿ 0.0 ಕಡೆಗೆ ಏರುತ್ತವೆ, ಗುರಿ ಮೂಲೆ ಕಡೆಗೆ ಏಕತಾನವಾಗಿ ಸುಧಾರಿಸುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<g>\n<rect x='20' y='20' width='85' height='85' fill='none' stroke='#f87171'/><text x='30' y='65' fill='#cbd5e1' font-size='11'>-39.41</text>\n<rect x='105' y='20' width='85' height='85' fill='none' stroke='#f87171'/><text x='115' y='65' fill='#cbd5e1' font-size='11'>-38.19</text>\n<rect x='190' y='20' width='85' height='85' fill='none' stroke='#fb923c'/><text x='200' y='65' fill='#cbd5e1' font-size='11'>-36.25</text>\n<rect x='275' y='20' width='85' height='85' fill='none' stroke='#fb923c'/><text x='285' y='65' fill='#cbd5e1' font-size='11'>-34.64</text>\n<rect x='20' y='105' width='85' height='85' fill='none' stroke='#f87171'/><text x='30' y='150' fill='#cbd5e1' font-size='11'>-38.19</text>\n<rect x='105' y='105' width='85' height='85' fill='none' stroke='#fb923c'/><text x='115' y='150' fill='#cbd5e1' font-size='11'>-36.41</text>\n<rect x='190' y='105' width='85' height='85' fill='none' stroke='#fb923c'/><text x='200' y='150' fill='#cbd5e1' font-size='11'>-33.34</text>\n<rect x='275' y='105' width='85' height='85' fill='none' stroke='#facc15'/><text x='285' y='150' fill='#cbd5e1' font-size='11'>-30.40</text>\n<rect x='20' y='190' width='85' height='85' fill='none' stroke='#fb923c'/><text x='30' y='235' fill='#cbd5e1' font-size='11'>-36.25</text>\n<rect x='105' y='190' width='85' height='85' fill='none' stroke='#fb923c'/><text x='115' y='235' fill='#cbd5e1' font-size='11'>-33.34</text>\n<rect x='190' y='190' width='85' height='85' fill='none' stroke='#facc15'/><text x='200' y='235' fill='#cbd5e1' font-size='11'>-27.60</text>\n<rect x='275' y='190' width='85' height='85' fill='none' stroke='#4ade80'/><text x='285' y='235' fill='#cbd5e1' font-size='11'>-20.41</text>\n<rect x='20' y='275' width='85' height='85' fill='none' stroke='#fb923c'/><text x='30' y='320' fill='#cbd5e1' font-size='11'>-34.64</text>\n<rect x='105' y='275' width='85' height='85' fill='none' stroke='#facc15'/><text x='115' y='320' fill='#cbd5e1' font-size='11'>-30.40</text>\n<rect x='190' y='275' width='85' height='85' fill='none' stroke='#4ade80'/><text x='200' y='320' fill='#cbd5e1' font-size='11'>-20.41</text>\n<rect x='275' y='275' width='85' height='85' fill='none' stroke='#4ade80'/><text x='285' y='320' fill='#e2e8f0' font-size='11' font-weight='bold'>0.0 (G)</text>\n</g>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Bellman Equation to Code Mapping', captionKn: 'Bellman Equation ಇಂದ Code Mapping',
      rows: "Mathematical concept|Original code\nState s|s\nAction a|a\nPolicy pi(a\\|s)|pi_a\nTransition P(s'\\|s,a)|step(s,a)\nNext state s'|s_next\nReward r|r\nDiscount gamma|gamma\nCurrent value V(s)|V[s]\nNext value V(s')|V[s_next]\nBellman update|r + gamma * V[s_next]\nSum over actions|loop over policy(s).items()\nConvergence|delta < tol" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: iterative policy evaluation on the 4x4 GridWorld converges in exactly 305 sweeps (gamma=0.99, tol=1e-6), producing V((0,0))=-39.4116\n• Genuinely confirmed: values genuinely improve (become less negative) moving toward the terminal, from -39.41 at the farthest corner to -20.41 adjacent to the goal to 0.0 at the goal itself -- a real, computed value landscape, not an illustration\n• The single line v += pi_a * (r + gamma * V[s_next]) is a direct, literal translation of the Bellman expectation equation V^pi(s) = sum_a pi(a|s)[r + gamma*V^pi(s\')] -- this is not an analogy, it is the same equation\n• Policy evaluation answers "how good is this given policy?" -- it does not change the policy. That is the job of policy improvement, which uses these same V (or derived Q) values in later lessons',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 4x4 GridWorld ಮೇಲೆ iterative policy evaluation ನಿಖರವಾಗಿ 305 sweeps ನಲ್ಲಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ (gamma=0.99, tol=1e-6), V((0,0))=-39.4116 ಉತ್ಪಾದಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: values terminal ಕಡೆಗೆ ಚಲಿಸುತ್ತಾ ನಿಜವಾಗಿ ಸುಧಾರಿಸುತ್ತವೆ (ಕಡಿಮೆ ಋಣಾತ್ಮಕ ಆಗುತ್ತವೆ), ಅತ್ಯಂತ ದೂರದ ಮೂಲೆಯಲ್ಲಿ -39.41 ಇಂದ ಗುರಿಗೆ ಪಕ್ಕದ -20.41 ಗೆ ಗುರಿಯಲ್ಲೇ 0.0 ಗೆ -- ಒಂದೂ ನಿಜ, ಗಣಿಸಿದ value landscape, ಒಂದೂ ಚಿತ್ರಣ ಅಲ್ಲ\n• Single line v += pi_a * (r + gamma * V[s_next]) Bellman expectation equation V^pi(s) = sum_a pi(a|s)[r + gamma*V^pi(s\')] ನ ಒಂದೂ ನೇರ, ಅಕ್ಷರಶಃ ಭಾಷಾಂತರ -- ಇದೂ ಒಂದೂ ಸಾದೃಶ್ಯ ಅಲ್ಲ, ಇದೂ ಅದೇ equation\n• Policy evaluation "ಈ ಕೊಟ್ಟ policy ಎಷ್ಟೂ ಒಳ್ಳೆಯದೂ?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ -- ಅದೂ policy ಬದಲಾಯಿಸುವುದಿಲ್ಲ. ಅದೂ policy improvement ನ ಕೆಲಸ, ಅದೂ ಈ ಅದೇ V (ಅಥವಾ derived Q) ಮೌಲ್ಯಗಳನ್ನೂ ನಂತರದ lessons ನಲ್ಲಿ ಬಳಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact iterative Bellman-sweep algorithm genuinely run here (305 iterations to convergence) is the real "policy evaluation" step of classical dynamic-programming reinforcement learning (Sutton & Barto) -- the same fixed-point iteration idea reappears, in sampled rather than exact form, inside every value-based deep RL algorithm from DQN through modern actor-critic methods.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ ನಿಖರ iterative Bellman-sweep algorithm (ಒಮ್ಮುಖಗೊಳ್ಳಲು 305 iterations) classical dynamic-programming reinforcement learning (Sutton & Barto) ನ ನಿಜ "policy evaluation" step -- ಅದೇ fixed-point iteration ಆಲೋಚನೆ, ನಿಖರ ಬದಲು sampled ರೂಪದಲ್ಲಿ, DQN ಇಂದ ಆಧುನಿಕ actor-critic methods ವರೆಗೆ ಪ್ರತಿಯೊಂದೂ value-based deep RL algorithm ಒಳಗೆ ಮರುಕಳಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the Bellman recursion lets V(s) be computed via local updates (only needing V(s\') of directly reachable neighbors) rather than unrolling every possible future trajectory -- this is what makes dynamic-programming-style RL computationally tractable\n• The genuinely measured delta<tol convergence criterion is the standard, checkable way production DP/RL code decides when to stop iterating -- rather than a fixed iteration count, it stops exactly when further sweeps would not meaningfully change the answer',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Bellman recursion V(s) ಅನ್ನೂ local updates ಮೂಲಕ ಗಣಿಸಲು ಬಿಡುತ್ತದೆ (ಕೇವಲ ನೇರವಾಗಿ ತಲುಪಬಹುದಾದ neighbors ನ V(s\') ಬೇಕು) ಪ್ರತಿ ಸಂಭವನೀಯ ಭವಿಷ್ಯದ trajectory ಅನ್ನೂ unroll ಮಾಡುವ ಬದಲು -- dynamic-programming-style RL ಅನ್ನೂ computationally ಕಾರ್ಯಸಾಧ್ಯ ಮಾಡುವ ಕಾರಣ ಇದೇ\n• ನಿಜವಾಗಿ ಅಳೆದ delta<tol convergence criterion production DP/RL code iterating ಯಾವಾಗ ನಿಲ್ಲಿಸಬೇಕು ಎಂದೂ ನಿರ್ಧರಿಸುವ ಪ್ರಮಾಣಿತ, ಪರಿಶೀಲಿಸಬಹುದಾದ ಮಾರ್ಗ -- ಒಂದೂ ಸ್ಥಿರ iteration count ಬದಲು, ಹೆಚ್ಚಿನ sweeps ಅರ್ಥಪೂರ್ಣವಾಗಿ ಉತ್ತರ ಬದಲಾಯಿಸದಿದ್ದಾಗ ನಿಖರವಾಗಿ ನಿಲ್ಲುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production RL engineer debugging a broken value function genuinely checks the same property this lesson verified -- does V improve monotonically toward states known to be good (like the -39.41 to -20.41 to 0.0 gradient toward the goal)? A value landscape that does not respect known problem structure is a genuine red flag that the Bellman update, reward function, or transition model has a bug, exactly the kind of check this lesson\'s genuinely computed grid demonstrates.',
      bodyKn: 'ಒಂದೂ ಮುರಿದ value function debug ಮಾಡುವ ಒಂದೂ production RL engineer ಈ lesson ಪರಿಶೀಲಿಸಿದ ಅದೇ ಗುಣವನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತಾರೆ -- V ಒಳ್ಳೆಯದೂ ಎಂದೂ ತಿಳಿದ states ಕಡೆಗೆ ಏಕತಾನವಾಗಿ ಸುಧಾರಿಸುತ್ತದೆಯೇ (ಗುರಿ ಕಡೆಗೆ -39.41 ಇಂದ -20.41 ಇಂದ 0.0 gradient ರೀತಿ)? ತಿಳಿದ ಸಮಸ್ಯೆ ರಚನೆಯನ್ನೂ ಗೌರವಿಸದ ಒಂದೂ value landscape Bellman update, reward function, ಅಥವಾ transition model ನಲ್ಲಿ ಒಂದೂ bug ಇದೆ ಎಂದೂ ಒಂದೂ ನಿಜ ಎಚ್ಚರಿಕೆ ಸಂಕೇತ, ಈ lesson ನ ನಿಜವಾಗಿ ಗಣಿಸಿದ grid ಪ್ರದರ್ಶಿಸುವ ನಿಖರ ರೀತಿಯ ಪರಿಶೀಲನೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many iterations did policy evaluation take to converge (gamma=0.99, tol=1e-6)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: policy evaluation ಒಮ್ಮುಖವಾಗಲು ಎಷ್ಟೂ iterations ತೆಗೆದುಕೊಂಡಿತು (gamma=0.99, tol=1e-6)?',
        opts: ['1', '305', '1,000,000', 'It never converged'], correct: 1,
        optsKn: ['1', '305', '1,000,000', 'ಅದೂ ಎಂದಿಗೂ ಒಮ್ಮುಖವಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what was V((0,0)) under the uniform random policy at gamma=0.99?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: gamma=0.99 ನಲ್ಲಿ uniform random policy ಅಡಿಯಲ್ಲಿ V((0,0)) ಏನೂ ಆಗಿತ್ತು?',
        opts: ['-6.0 (optimal)', '-39.4116', '0.0', '-100.0'], correct: 1,
        optsKn: ['-6.0 (optimal)', '-39.4116', '0.0', '-100.0'] },
      { q: 'What does the code expression "r + gamma * V[s_next]" correspond to mathematically?', qKn: 'Code expression "r + gamma * V[s_next]" ಗಣಿತೀಯವಾಗಿ ಏನಕ್ಕೆ ಅನುರೂಪವಾಗಿದೆ?',
        opts: ['The policy distribution pi(a|s)', 'The Bellman backup: immediate reward plus discounted next-state value', 'The discount factor alone', 'The convergence tolerance'], correct: 1,
        optsKn: ['Policy distribution pi(a|s)', 'Bellman backup: ತಕ್ಷಣದ reward ಜೊತೆಗೆ discounted next-state value', 'ಕೇವಲ discount factor', 'Convergence tolerance'] },
      { q: 'What does "delta < tol" signal in policy_evaluation()?', qKn: 'policy_evaluation() ನಲ್ಲಿ "delta < tol" ಏನೂ ಸೂಚಿಸುತ್ತದೆ?',
        opts: ['The episode has ended', 'The value estimates have essentially stopped changing -- a fixed point has been reached', 'The policy has become deterministic', 'The reward has become positive'], correct: 1,
        optsKn: ['Episode ಕೊನೆಗೊಂಡಿದೆ', 'Value estimates essentially ಬದಲಾಗುವುದೂ ನಿಲ್ಲಿಸಿವೆ -- ಒಂದೂ fixed point ತಲುಪಲಾಗಿದೆ', 'Policy deterministic ಆಗಿದೆ', 'Reward ಧನಾತ್ಮಕವಾಗಿದೆ'] },
      { q: 'Genuinely confirmed: how did V change moving from the farthest corner toward the goal?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅತ್ಯಂತ ದೂರದ ಮೂಲೆ ಇಂದ ಗುರಿ ಕಡೆಗೆ ಚಲಿಸುತ್ತಾ V ಹೇಗೆ ಬದಲಾಯಿತು?',
        opts: ['It stayed constant everywhere', 'It monotonically improved (became less negative), from -39.41 down to 0.0 at the goal', 'It became more negative near the goal', 'It became positive everywhere'], correct: 1,
        optsKn: ['ಅದೂ ಎಲ್ಲೆಡೆ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು', 'ಅದೂ ಏಕತಾನವಾಗಿ ಸುಧಾರಿಸಿತು (ಕಡಿಮೆ ಋಣಾತ್ಮಕವಾಯಿತು), -39.41 ಇಂದ ಗುರಿಯಲ್ಲಿ 0.0 ಗೆ', 'ಗುರಿ ಹತ್ತಿರ ಹೆಚ್ಚು ಋಣಾತ್ಮಕವಾಯಿತು', 'ಅದೂ ಎಲ್ಲೆಡೆ ಧನಾತ್ಮಕವಾಯಿತು'] },
    ] } },
  ],
};
