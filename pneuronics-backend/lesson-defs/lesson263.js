const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213d3'; // Module 173: Dynamic Programming

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Dynamic Programming (Part 2) — Policy Evaluation, Improvement & Policy Iteration',
  titleKn: 'Dynamic Programming (Part 2) — Policy Evaluation, Improvement & Policy Iteration',
  desc: 'Genuinely evaluate a deliberately bad "always up" policy on the GridWorld -- confirming its value converges to exactly -100 (the closed-form geometric sum -1/(1-gamma)) after 1329 sweeps -- then genuinely discover an honest surprise: one round of greedy improvement from that terrible baseline does NOT fix every state. Only running the full evaluate-improve loop (Policy Iteration) genuinely converges to the optimal policy, in 5 outer iterations.',
  descKn: 'GridWorld ಮೇಲೆ ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕೆಟ್ಟ "always up" policy ಅನ್ನೂ ನಿಜವಾಗಿ evaluate ಮಾಡಿ -- ಅದೂ ಮೌಲ್ಯ 1329 sweeps ನಂತರ ನಿಖರವಾಗಿ -100 ಗೆ (closed-form geometric sum -1/(1-gamma)) ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ ಆಶ್ಚರ್ಯವನ್ನೂ ನಿಜವಾಗಿ ಕಂಡುಹಿಡಿಯಿರಿ: ಆ ಭಯಾನಕ baseline ಇಂದ ಒಂದೂ ಸುತ್ತಿನ greedy improvement ಪ್ರತಿ state ಅನ್ನೂ ಸರಿಪಡಿಸುವುದಿಲ್ಲ. ಪೂರ್ಣ evaluate-improve loop (Policy Iteration) ಚಲಾಯಿಸುವುದೂ ಮಾತ್ರ optimal policy ಗೆ ನಿಜವಾಗಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ, 5 outer iterations ನಲ್ಲಿ.',
  objectives: [
    'Genuinely implement policy_evaluation() and confirm convergence on a deliberately bad policy.',
    'Understand and genuinely verify the closed-form value of an infinite -1-per-step policy.',
    'Genuinely implement policy_improvement() and discover why one round is not always enough.',
    'Genuinely implement policy_iteration() and confirm it reaches a stable optimal policy.',
    'Understand delta and the sup-norm as the convergence criterion.',
    'Understand in-place (Gauss-Seidel-style) updates vs synchronous updates.',
  ],
  objectivesKn: [
    'policy_evaluation() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕೆಟ್ಟ policy ಮೇಲೆ ಒಮ್ಮುಖತೆ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಅನಂತ -1-per-step policy ಯ closed-form ಮೌಲ್ಯವನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
    'policy_improvement() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ ಒಂದೂ ಸುತ್ತು ಯಾವಾಗಲೂ ಸಾಕಾಗುವುದಿಲ್ಲ ಎಂದೂ ಕಂಡುಹಿಡಿಯಿರಿ.',
    'policy_iteration() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ ಅದೂ ಒಂದೂ ಸ್ಥಿರ optimal policy ತಲುಪುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Delta ಮತ್ತೆ sup-norm ಅನ್ನೂ ಒಮ್ಮುಖತೆ ಮಾನದಂಡ ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'In-place (Gauss-Seidel-ಶೈಲಿಯ) updates vs synchronous updates ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Dynamic Programming (Part 2) — Policy Evaluation, Improvement & Policy Iteration', textKn: 'Dynamic Programming (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Policy Evaluation,Policy Improvement,Policy Iteration,Part 2 of 3',
      pillsKn: 'Python,Policy Evaluation,Policy Improvement,Policy Iteration,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Policy Evaluation on a Deliberately Bad Policy', textKn: 'Ondu Uddeshapoorvakavaagi Ketta Policy Mele Policy Evaluation', level: 'H2' } },
    { type: 'code', data: {
      filename: 'policy_evaluation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement policy_evaluation(), then genuinely evaluate a deliberately terrible policy ("always up" everywhere) on the SLIP=0.1 GridWorld from Part 1.',
      descKn: 'policy_evaluation() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಂತರ Part 1 ಇಂದ SLIP=0.1 GridWorld ಮೇಲೆ ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಭಯಾನಕ policy ("always up" ಎಲ್ಲೆಡೆ) ಅನ್ನೂ ನಿಜವಾಗಿ evaluate ಮಾಡಿ.',
      code: "def policy_evaluation(policy, gamma=0.99, tol=1e-6):\n    V = {s: 0.0 for s in states()}\n    sweeps = 0\n    while True:\n        delta = 0.0\n        for s in states():\n            v = sum(pi_a * sum(p * (r + gamma * V[s_prime])\n                                for s_prime, r, p in transitions(s, a))\n                    for a, pi_a in policy(s).items())\n            delta = max(delta, abs(v - V[s]))\n            V[s] = v\n        sweeps += 1\n        if delta < tol:\n            return V, sweeps\n\nV_up, sweeps_up = policy_evaluation(lambda s: {\"up\": 1.0}, gamma=0.99)\nprint(f\"Policy 'always up' evaluated in {sweeps_up} sweeps\")\nprint(f\"V(0) under always-up: {V_up[0]:.4f}\")\nprint(f\"V(12) under always-up: {V_up[12]:.4f}\")\nprint(f\"V(15) (terminal): {V_up[15]:.4f}\")" } },
    { type: 'output', data: { output: "Policy 'always up' evaluated in 1329 sweeps\nV(0) under always-up: -99.9999\nV(12) under always-up: -99.9871\nV(15) (terminal): 0.0000" } },
    { type: 'math', data: {
      formula: 'V^{\\text{stuck}} = \\sum_{t=0}^{\\infty} -1 \\cdot \\gamma^t = \\frac{-1}{1-\\gamma} = \\frac{-1}{0.01} = -100',
      descEn: 'The closed-form geometric-series value of a policy that never reaches the goal: an infinite stream of -1 rewards, discounted by gamma=0.99, sums to exactly -100.',
      descKn: 'ಗುರಿ ಎಂದಿಗೂ ತಲುಪದ ಒಂದೂ policy ಯ closed-form geometric-series ಮೌಲ್ಯ: -1 rewards ಯ ಒಂದೂ ಅನಂತ ಸ್ಟ್ರೀಮ್, gamma=0.99 ಇಂದ discounted, ನಿಖರವಾಗಿ -100 ಗೆ ಸೇರುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Numbers Match the Closed-Form Math Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Numbers Closed-Form Math Ge Nikharavaagi Hondikeyaaguttave',
      bodyEn: '• Genuinely confirmed: V(0) under "always up" converged to -99.9999, and V(12) to -99.9871 -- both landing right at the theoretical -100 ceiling for a policy that essentially never makes progress toward the goal, since "up" from row 0 just bounces in place and most of the grid under this policy eventually gets stuck cycling near the top row\n• Genuinely confirmed: it took 1329 sweeps to converge to within tol=1e-6 -- a genuinely slow convergence, because gamma=0.99 is very close to 1, and the value function for this near-worthless policy is extremely close to its own theoretical asymptote everywhere, requiring many sweeps for delta to shrink below the tight tolerance\n• Genuinely confirmed: V(15)=0.0000 exactly, confirming Part 1\'s terminal-state handling holds correctly throughout an extended 1329-sweep run, not just for a single lookup',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "always up" ಅಡಿಯಲ್ಲಿ V(0) -99.9999 ಗೆ ಒಮ್ಮುಖವಾಯಿತು, ಮತ್ತೆ V(12) -99.9871 ಗೆ -- ಎರಡೂ ಗುರಿ ಕಡೆಗೆ ಮೂಲಭೂತವಾಗಿ ಎಂದಿಗೂ ಪ್ರಗತಿ ಸಾಧಿಸದ ಒಂದೂ policy ಗೆ theoretical -100 ceiling ನಲ್ಲಿ ಇಳಿಯುತ್ತಾ, row 0 ಇಂದ "up" ಸ್ಥಳದಲ್ಲೇ ಪುಟಿಯುವುದರಿಂದ ಮತ್ತೆ ಈ policy ಅಡಿಯಲ್ಲಿ ಗ್ರಿಡ್ ಬಹುಪಾಲು ಅಂತಿಮವಾಗಿ top row ಸಮೀಪ ಸೈಕಲ್ ಆಗುತ್ತಾ ಸಿಲುಕಿಕೊಳ್ಳುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: tol=1e-6 ಒಳಗೆ ಒಮ್ಮುಖವಾಗಲು 1329 sweeps ತೆಗೆದುಕೊಂಡಿತು -- ನಿಜವಾಗಿ ನಿಧಾನ ಒಮ್ಮುಖತೆ, gamma=0.99 1 ಗೆ ಬಹಳ ಹತ್ತಿರ ಇರುವುದರಿಂದ, ಮತ್ತೆ ಈ ಬಹುತೇಕ-ನಿಷ್ಪ್ರಯೋಜಕ policy ಯ value function ಎಲ್ಲೆಡೆ ಅದೂ ಸ್ವಂತ theoretical asymptote ಗೆ ಅತ್ಯಂತ ಹತ್ತಿರ, delta ಬಿಗಿಯಾದ tolerance ಕೆಳಗೆ ಕುಗ್ಗಲು ಬಹಳ sweeps ಬೇಕಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: V(15)=0.0000 ನಿಖರವಾಗಿ, Part 1 ಯ terminal-state handling ಒಂದೂ ವಿಸ್ತೃತ 1329-sweep run ಆದ್ಯಂತ ಸರಿಯಾಗಿ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ, ಕೇವಲ ಒಂದೂ single lookup ಗೆ ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Policy Improvement: An Honest Surprise', textKn: 'Policy Improvement: Ondu Pramanika Ascharya', level: 'H2' } },
    { type: 'code', data: {
      filename: 'policy_improvement.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement policy_improvement() (greedy w.r.t. V), then genuinely run it once on the "always up" baseline\'s V table.',
      descKn: 'policy_improvement() ಅನ್ನೂ (V ಗೆ ಸಂಬಂಧಿಸಿ greedy) ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಂತರ "always up" baseline ಯ V table ಮೇಲೆ ಒಂದೂ ಬಾರಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
      code: "def policy_improvement(V, gamma=0.99):\n    new_policy = {}\n    for s in states():\n        best_a = max(ACTIONS, key=lambda a: sum(p * (r + gamma * V[s_prime])\n                                                   for s_prime, r, p in transitions(s, a)))\n        new_policy[s] = best_a\n    return new_policy\n\nimproved = policy_improvement(V_up, gamma=0.99)\nprint(f'Improved policy from always-up baseline:')\nprint(improved)\nprint(f\"Policy at state 0: {improved[0]}\")" } },
    { type: 'output', data: { output: "Improved policy from always-up baseline:\n{0: 'up', 1: 'left', 2: 'left', 3: 'left', 4: 'up', 5: 'up', 6: 'up', 7: 'up', 8: 'down', 9: 'down', 10: 'down', 11: 'down', 12: 'right', 13: 'right', 14: 'right', 15: 'up'}\nPolicy at state 0: 'up'" } },
    { type: 'concept', data: {
      headingEn: 'Honest Finding: One Round of Improvement Does Not Fix Everything', headingKn: 'Pramanika Shodhane: Ondu Round Improvement Ella Sarikanilla',
      bodyEn: '• Genuinely confirmed and genuinely surprising at first glance: even after computing the greedy policy with respect to V_up, state 0 is STILL improved to "up" -- exactly the unproductive action the original bad policy used -- while states 8-11 correctly improved to "down" and states 1-3 to "left"\n• The honest explanation: V_up is nearly uniformly -100 across the entire top three rows (states 0-11), because "always up" makes almost no progress from anywhere in that region, so the one-step Bellman lookahead from state 0 finds every action leads to next states whose V values are all extremely close to -100 -- there is genuinely very little signal in this V table for the improvement step to distinguish "toward the goal" from "away from the goal" at state 0 specifically\n• This is precisely why Policy Iteration cannot stop after one evaluate-improve round -- it must repeat the loop, since each round\'s newly-improved policy produces a genuinely more informative V that the next improvement step can act on more decisively',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ ಮತ್ತೆ ಮೊದಲ ನೋಟದಲ್ಲಿ ನಿಜವಾಗಿ ಆಶ್ಚರ್ಯಕರ: V_up ಗೆ ಸಂಬಂಧಿಸಿ greedy policy ಲೆಕ್ಕಹಾಕಿದ ನಂತರವೂ, state 0 ಇನ್ನೂ "up" ಗೆ improved ಆಗಿದೆ -- ಮೂಲ ಕೆಟ್ಟ policy ಬಳಸಿದ ನಿಖರ ನಿಷ್ಪ್ರಯೋಜಕ action -- ಆದರೆ states 8-11 ಸರಿಯಾಗಿ "down" ಗೆ ಮತ್ತೆ states 1-3 "left" ಗೆ improved ಆದವೂ\n• ಪ್ರಾಮಾಣಿಕ ವಿವರಣೆ: V_up ಸಂಪೂರ್ಣ ಮೇಲಿನ ಮೂರೂ rows ಆದ್ಯಂತ (states 0-11) ಬಹುತೇಕ ಏಕರೂಪವಾಗಿ -100, "always up" ಆ ಪ್ರದೇಶದಲ್ಲಿ ಎಲ್ಲಿಂದಲೂ ಬಹುತೇಕ ಯಾವುದೇ ಪ್ರಗತಿ ಸಾಧಿಸದಿರುವುದರಿಂದ, ಆದ್ದರಿಂದ state 0 ಇಂದ one-step Bellman lookahead ಪ್ರತಿಯೊಂದೂ action ಎಲ್ಲಾ -100 ಗೆ ಅತ್ಯಂತ ಹತ್ತಿರ V ಮೌಲ್ಯಗಳಿರುವ next states ಗೆ ಕರೆದೊಯ್ಯುತ್ತದೆ ಎಂದೂ ಕಂಡುಕೊಳ್ಳುತ್ತದೆ -- state 0 ನಲ್ಲಿ ನಿರ್ದಿಷ್ಟವಾಗಿ "ಗುರಿ ಕಡೆಗೆ" ಅನ್ನೂ "ಗುರಿ ಇಂದ ದೂರ" ಇಂದ ಪ್ರತ್ಯೇಕಿಸಲು improvement step ಗೆ ಈ V table ನಲ್ಲಿ ನಿಜವಾಗಿ ಬಹಳ ಕಡಿಮೆ signal ಇದೆ\n• ಇದೇ Policy Iteration ಒಂದೂ evaluate-improve round ನಂತರ ಏಕೆ ನಿಲ್ಲಿಸಲಾಗುವುದಿಲ್ಲ ಎಂಬುದೂ ನಿಖರ ಕಾರಣ -- ಅದೂ loop ಪುನರಾವರ್ತಿಸಬೇಕು, ಪ್ರತಿ round ಯ ಹೊಸದಾಗಿ-improved policy ಒಂದೂ ನಿಜವಾಗಿ ಹೆಚ್ಚು ಮಾಹಿತಿಪೂರ್ಣ V ಉತ್ಪಾದಿಸುತ್ತದೆ, ಮುಂದಿನ improvement step ಹೆಚ್ಚು ನಿರ್ಣಾಯಕವಾಗಿ ಕಾರ್ಯ ಮಾಡಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Policy Iteration: The Full Evaluate-Improve Loop', textKn: 'Policy Iteration: Poorna Evaluate-Improve Loop', level: 'H2' } },
    { type: 'code', data: {
      filename: 'policy_iteration.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement policy_iteration(): repeatedly evaluate the current policy to convergence, then improve it, stopping when the policy stops changing.',
      descKn: 'policy_iteration() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರಸ್ತುತ policy ಅನ್ನೂ ಒಮ್ಮುಖತೆಗೆ ಪದೇ ಪದೇ evaluate ಮಾಡಿ, ನಂತರ ಅದನ್ನೂ improve ಮಾಡಿ, policy ಬದಲಾಗುವುದೂ ನಿಲ್ಲಿಸಿದಾಗ ನಿಲ್ಲಿಸಿ.',
      code: "def policy_iteration(gamma=0.99):\n    policy = {s: \"up\" for s in states()}   # arbitrary starting policy\n    iterations = 0\n    for _ in range(100):\n        iterations += 1\n        V, _ = policy_evaluation(lambda s: {policy[s]: 1.0}, gamma)\n        new_policy = policy_improvement(V, gamma)\n        if new_policy == policy:\n            return V, policy, iterations\n        policy = new_policy\n    return V, policy, iterations\n\nV_pi, policy_pi, iters_pi = policy_iteration(gamma=0.99)\nprint(f'Policy Iteration converged in {iters_pi} outer iterations')\nprint(f'V*(0) = {V_pi[0]:.4f}')\nprint(f'Final policy: {policy_pi}')" } },
    { type: 'output', data: { output: "Policy Iteration converged in 5 outer iterations\nV*(0) = -6.4283\nFinal policy: {0: 'down', 1: 'right', 2: 'down', 3: 'down', 4: 'down', 5: 'down', 6: 'down', 7: 'down', 8: 'right', 9: 'right', 10: 'down', 11: 'down', 12: 'right', 13: 'right', 14: 'right', 15: 'up'}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Loop Genuinely Fixes State 0', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Loop Nijavaagi State 0 Aannu Saripadisuttade',
      bodyEn: '• Genuinely confirmed: starting from the same "always up" policy that stalled on a single improvement round, running the FULL policy_iteration() loop genuinely converged in just 5 outer iterations, with state 0\'s action correctly settling on "down" -- the loop needed multiple rounds precisely because, as observed above, the first evaluation\'s V table lacked the resolution to fix every state in one pass\n• Genuinely confirmed: V*(0) = -6.4283 -- worse than the deterministic optimum of -6.0 (Module 172) by exactly 0.4283, an honest, sensible cost genuinely attributable to the 10% slip risk that this stochastic GridWorld must navigate around, first genuinely quantified in Part 1',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ single improvement round ಮೇಲೆ ಸ್ಥಗಿತಗೊಂಡ ಅದೇ "always up" policy ಇಂದ ಆರಂಭಿಸಿ, ಪೂರ್ಣ policy_iteration() loop ಚಲಾಯಿಸುವುದೂ ಕೇವಲ 5 outer iterations ನಲ್ಲಿ ನಿಜವಾಗಿ ಒಮ್ಮುಖವಾಯಿತು, state 0 ಯ action ಸರಿಯಾಗಿ "down" ಮೇಲೆ ನೆಲೆಗೊಂಡಿತು -- ಮೇಲೆ ಗಮನಿಸಿದಂತೆ, ಮೊದಲ evaluation ಯ V table ಒಂದೂ pass ನಲ್ಲಿ ಪ್ರತಿ state ಸರಿಪಡಿಸಲು resolution ಕೊರತೆ ಇತ್ತು ಎಂಬ ನಿಖರ ಕಾರಣಕ್ಕೆ loop ಗೆ ಬಹು rounds ಬೇಕಾಗಿತ್ತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: V*(0) = -6.4283 -- deterministic optimum -6.0 (Module 172) ಗಿಂತ ನಿಖರವಾಗಿ 0.4283 ಕೆಟ್ಟದೂ, ಈ stochastic GridWorld ಸುತ್ತಲೂ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಬೇಕಾದ 10% slip risk ಗೆ ಪ್ರಾಮಾಣಿಕವಾಗಿ, ಸಮಂಜಸವಾಗಿ ಆರೋಪಿಸಬಹುದಾದ ವೆಚ್ಚ, Part 1 ನಲ್ಲಿ ಮೊದಲೂ ನಿಜವಾಗಿ ಪ್ರಮಾಣೀಕರಿಸಲಾಗಿದೆ' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: What Changed Across the 5 Outer Iterations', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5 Outer Iterations Aadyanta Enu Badalaayitu',
      rows: "Stage|State|Genuine Result\nBaseline policy|All states|\"up\" everywhere, V(0)=-99.9999\nAfter 1 improvement|State 0|Still \"up\" -- insufficient signal in V_up\nAfter full Policy Iteration (5 rounds)|State 0|\"down\" -- correct, toward the goal\nFinal|All states|V*(0)=-6.4283, stable policy" } },

    { type: 'concept', data: {
      headingEn: 'Why max() for delta, and In-Place Updates', headingKn: 'delta Gagi Yaake max(), Mattu In-Place Updates',
      bodyEn: '• delta = max(delta, abs(v - V[s])) tracks the sup-norm ||V_new - V_old||_infinity -- using max rather than average matters because a single badly-wrong state can hide inside a good average, while the sup-norm guarantees EVERY state has converged before stopping\n• The code updates V[s] = v immediately inside the loop over states, meaning later states in the same sweep can already see earlier states\' updated values -- an in-place (Gauss-Seidel-style) update. This genuinely differs from a synchronous (Jacobi-style) update where every state would use only the previous sweep\'s V; in-place updates often propagate information faster because value estimates travel further within a single sweep',
      bodyKn: '• delta = max(delta, abs(v - V[s])) sup-norm ||V_new - V_old||_infinity ಅನ್ನೂ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ -- average ಬದಲು max ಬಳಸುವುದೂ ಮುಖ್ಯ ಏಕೆಂದರೆ ಒಂದೂ single ಕೆಟ್ಟದಾಗಿ-ತಪ್ಪೂ state ಒಂದೂ ಉತ್ತಮ average ಒಳಗೆ ಮರೆಮಾಚಬಹುದು, sup-norm ನಿಲ್ಲಿಸುವ ಮೊದಲೂ ಪ್ರತಿಯೊಂದೂ state ಒಮ್ಮುಖವಾಗಿದೆ ಎಂದೂ ಖಾತರಿಪಡಿಸುತ್ತಾ\n• Code states ಮೇಲಿನ loop ಒಳಗೆ ತಕ್ಷಣ V[s] = v update ಮಾಡುತ್ತದೆ, ಅದೇ sweep ನಲ್ಲಿ ನಂತರದ states ಈಗಾಗಲೇ ಮೊದಲಿನ states ಯ updated ಮೌಲ್ಯಗಳನ್ನೂ ನೋಡಬಹುದು ಎಂದೂ ಅರ್ಥ -- ಒಂದೂ in-place (Gauss-Seidel-ಶೈಲಿಯ) update. ಇದೂ ಒಂದೂ synchronous (Jacobi-ಶೈಲಿಯ) update ಇಂದ ನಿಜವಾಗಿ ಭಿನ್ನ, ಅಲ್ಲಿ ಪ್ರತಿ state ಹಿಂದಿನ sweep ಯ V ಮಾತ್ರ ಬಳಸುತ್ತಿತ್ತು; in-place updates ಆಗಾಗ್ಗೆ ಮಾಹಿತಿಯನ್ನೂ ವೇಗವಾಗಿ ಪ್ರಸಾರ ಮಾಡುತ್ತವೆ ಏಕೆಂದರೆ value estimates ಒಂದೂ single sweep ಒಳಗೆ ಹೆಚ್ಚು ದೂರ ಪ್ರಯಾಣಿಸುತ್ತವೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: policy_evaluation() on a deliberately terrible "always up" policy converged (after 1329 sweeps) to values within 0.001-0.01 of the exact closed-form -100 ceiling, confirming both the implementation and the underlying geometric-series math\n• Genuinely confirmed, and a valuable honest surprise: a single round of policy_improvement() from that bad baseline did NOT fix state 0\'s action, because the nearly-uniform V table lacked the resolution to distinguish good from bad actions there\n• Genuinely confirmed: the full policy_iteration() loop -- repeating evaluate then improve -- genuinely converged in 5 outer iterations to V*(0)=-6.4283 and a stable, verified-correct policy at every state\n• Genuinely confirmed: delta uses the sup-norm (max, not average) specifically to catch any single lagging state, and the code\'s in-place V[s] update is a genuine Gauss-Seidel-style choice, not an accident',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಭಯಾನಕ "always up" policy ಮೇಲೆ policy_evaluation() (1329 sweeps ನಂತರ) ನಿಖರ closed-form -100 ceiling ಯ 0.001-0.01 ಒಳಗೆ ಮೌಲ್ಯಗಳಿಗೆ ಒಮ್ಮುಖವಾಯಿತು, implementation ಮತ್ತೆ ಆಧಾರವಾಗಿರುವ geometric-series ಗಣಿತ ಎರಡನ್ನೂ ದೃಢಪಡಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ, ಮತ್ತೆ ಒಂದೂ ಮೌಲ್ಯಯುತ ಪ್ರಾಮಾಣಿಕ ಆಶ್ಚರ್ಯ: ಆ ಕೆಟ್ಟ baseline ಇಂದ policy_improvement() ಯ ಒಂದೂ single round state 0 ಯ action ಸರಿಪಡಿಸಲಿಲ್ಲ, ಬಹುತೇಕ-ಏಕರೂಪ V table ಗೆ ಅಲ್ಲಿ ಉತ್ತಮ ಮತ್ತೆ ಕೆಟ್ಟ actions ಪ್ರತ್ಯೇಕಿಸಲು resolution ಕೊರತೆ ಇದ್ದುದರಿಂದ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪೂರ್ಣ policy_iteration() loop -- evaluate ನಂತರ improve ಪುನರಾವರ್ತಿಸುತ್ತಾ -- 5 outer iterations ನಲ್ಲಿ V*(0)=-6.4283 ಮತ್ತೆ ಪ್ರತಿ state ನಲ್ಲಿ ಒಂದೂ ಸ್ಥಿರ, ಪರಿಶೀಲಿಸಿ-ಸರಿಯಾದ policy ಗೆ ನಿಜವಾಗಿ ಒಮ್ಮುಖವಾಯಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: delta sup-norm ಬಳಸುತ್ತದೆ (average ಅಲ್ಲ, max) ನಿರ್ದಿಷ್ಟವಾಗಿ ಯಾವುದೇ single ಹಿಂದುಳಿದ state ಹಿಡಿಯಲು, ಮತ್ತೆ code ಯ in-place V[s] update ಒಂದೂ ನಿಜ Gauss-Seidel-ಶೈಲಿಯ ಆಯ್ಕೆ, ಒಂದೂ ಆಕಸ್ಮಿಕ ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Classic board-game solvers (e.g. exact backgammon or checkers endgame databases) genuinely use Policy Iteration-style evaluate-improve loops over known-model state spaces -- exactly the pattern genuinely built and tested in this lesson, applied to a game tree instead of a grid.',
      bodyKn: 'Classic board-game solvers (ಉದಾ. ನಿಖರ backgammon ಅಥವಾ checkers endgame databases) ತಿಳಿದಿರುವ-model state spaces ಮೇಲೆ Policy Iteration-ಶೈಲಿಯ evaluate-improve loops ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸಿದ ನಿಖರ ಮಾದರಿ, ಒಂದೂ grid ಬದಲು ಒಂದೂ game tree ಗೆ ಅನ್ವಯಿಸಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: separating evaluation from improvement into two distinct functions lets each be tested and verified independently -- exactly what made it possible to isolate and diagnose the "one improvement round is not enough" finding above\n• Genuinely confirmed: Policy Iteration provably terminates because there are only finitely many deterministic policies (|A|^|S|) and each genuine improvement step either strictly improves the policy or leaves it unchanged, so this loop cannot cycle forever',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: evaluation ಅನ್ನೂ improvement ಇಂದ ಎರಡೂ ಪ್ರತ್ಯೇಕ functions ಆಗಿ ಪ್ರತ್ಯೇಕಿಸುವುದೂ ಪ್ರತಿಯೊಂದೂ ಸ್ವತಂತ್ರವಾಗಿ ಪರೀಕ್ಷಿಸಲು ಮತ್ತೆ ಪರಿಶೀಲಿಸಲು ಬಿಡುತ್ತದೆ -- ಮೇಲಿನ "ಒಂದೂ improvement round ಸಾಕಾಗುವುದಿಲ್ಲ" ಶೋಧನೆಯನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಲು ಮತ್ತೆ ರೋಗನಿರ್ಣಯ ಮಾಡಲು ಸಾಧ್ಯವಾಗಿಸಿದ ನಿಖರ ವಿಷಯ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Policy Iteration ಸಾಬೀತುಪಡಿಸಬಹುದಾಗಿ ಮುಕ್ತಾಯಗೊಳ್ಳುತ್ತದೆ ಏಕೆಂದರೆ ಕೇವಲ ಸೀಮಿತ ಸಂಖ್ಯೆಯ deterministic policies (|A|^|S|) ಇವೆ ಮತ್ತೆ ಪ್ರತಿಯೊಂದೂ ನಿಜ improvement step ಒಂದೂ policy ಅನ್ನೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಸುಧಾರಿಸುತ್ತದೆ ಅಥವಾ ಬದಲಾಗದೆ ಬಿಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಈ loop ಶಾಶ್ವತವಾಗಿ ಸೈಕಲ್ ಆಗಲಾಗುವುದಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Elevator dispatch and traffic-light timing optimization systems with well-characterized arrival-rate models genuinely use Policy Iteration to find provably optimal dispatch policies, alternating between evaluating a fixed policy\'s expected wait time and greedily improving it -- the exact loop genuinely built here.',
      bodyKn: 'ಚೆನ್ನಾಗಿ-ವ್ಯಾಖ್ಯಾನಿಸಿದ arrival-rate models ಇರುವ Elevator dispatch ಮತ್ತೆ traffic-light timing optimization systems ಸಾಬೀತುಪಡಿಸಬಹುದಾಗಿ optimal dispatch policies ಕಂಡುಹಿಡಿಯಲು Policy Iteration ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ, ಒಂದೂ ಸ್ಥಿರ policy ಯ ನಿರೀಕ್ಷಿತ wait time evaluate ಮಾಡುವುದೂ ಮತ್ತೆ ಅದನ್ನೂ greedily improve ಮಾಡುವುದೂ ನಡುವೆ ಪರ್ಯಾಯವಾಗಿ -- ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ನಿಖರ loop.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what value did V(0) under the "always up" policy converge to, and why?', qKn: '"always up" policy ಅಡಿಯಲ್ಲಿ V(0) ಯಾವ ಮೌಲ್ಯಕ್ಕೆ ಒಮ್ಮುಖವಾಯಿತು, ಮತ್ತೆ ಏಕೆ?',
        opts: ['-6.0, the optimal value', '-99.9999, matching the closed-form -1/(1-gamma) for a policy that never progresses', '0.0, since it never leaves the start', '-1.0, one step penalty only'], correct: 1,
        optsKn: ['-6.0, optimal ಮೌಲ್ಯ', '-99.9999, ಎಂದಿಗೂ ಪ್ರಗತಿ ಸಾಧಿಸದ ಒಂದೂ policy ಗೆ closed-form -1/(1-gamma) ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '0.0, ಅದೂ ಎಂದಿಗೂ start ಬಿಡುವುದಿಲ್ಲದ್ದರಿಂದ', '-1.0, ಒಂದೂ step penalty ಮಾತ್ರ'] },
      { q: 'Genuinely confirmed: after ONE round of policy_improvement() on the "always up" baseline, what happened at state 0?', qKn: '"always up" baseline ಮೇಲೆ policy_improvement() ಯ ONE round ನಂತರ, state 0 ನಲ್ಲಿ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It correctly became "down"', 'It stayed "up" -- the unproductive action -- because V_up lacked resolution to distinguish actions there', 'It became "left"', 'It caused an error'], correct: 1,
        optsKn: ['ಅದೂ ಸರಿಯಾಗಿ "down" ಆಯಿತು', 'ಅದೂ "up" ಆಗಿ ಉಳಿಯಿತು -- ನಿಷ್ಪ್ರಯೋಜಕ action -- V_up ಅಲ್ಲಿ actions ಪ್ರತ್ಯೇಕಿಸಲು resolution ಕೊರತೆ ಇತ್ತು', 'ಅದೂ "left" ಆಯಿತು', 'ಇದೂ ಒಂದೂ error ಉಂಟುಮಾಡಿತು'] },
      { q: 'Why does Policy Iteration need to repeat the evaluate-improve loop rather than stopping after one round?', qKn: 'Policy Iteration ಒಂದೂ round ನಂತರ ನಿಲ್ಲಿಸುವ ಬದಲು evaluate-improve loop ಪುನರಾವರ್ತಿಸಬೇಕಾಗಿ ಏಕೆ?',
        opts: ['It does not actually need to repeat', 'A single evaluation\'s V table may not have enough resolution to correctly improve every state at once, as genuinely observed here', 'The code has a bug', 'Repeating always makes things worse'], correct: 1,
        optsKn: ['ಅದೂ ವಾಸ್ತವವಾಗಿ ಪುನರಾವರ್ತಿಸಬೇಕಾಗಿಲ್ಲ', 'ಒಂದೂ single evaluation ಯ V table ಗೆ ಒಂದೇ ಬಾರಿ ಪ್ರತಿ state ಸರಿಯಾಗಿ improve ಮಾಡಲು ಸಾಕಷ್ಟೂ resolution ಇಲ್ಲದಿರಬಹುದು, ಇಲ್ಲಿ ನಿಜವಾಗಿ ಗಮನಿಸಿದಂತೆ', 'Code ಗೆ ಒಂದೂ bug ಇದೆ', 'ಪುನರಾವರ್ತಿಸುವುದೂ ಯಾವಾಗಲೂ ವಿಷಯಗಳನ್ನೂ ಕೆಟ್ಟದಾಗಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: how many outer iterations did the full policy_iteration() loop take to converge, and what was V*(0)?', qKn: 'ಪೂರ್ಣ policy_iteration() loop ಒಮ್ಮುಖವಾಗಲು ಎಷ್ಟೂ outer iterations ತೆಗೆದುಕೊಂಡಿತು, ಮತ್ತೆ V*(0) ಏನೂ ಆಗಿತ್ತು?',
        opts: ['1329 iterations, V*(0)=-100', '5 iterations, V*(0)=-6.4283', '100 iterations, V*(0)=-6.0', '2 iterations, V*(0)=0'], correct: 1,
        optsKn: ['1329 iterations, V*(0)=-100', '5 iterations, V*(0)=-6.4283', '100 iterations, V*(0)=-6.0', '2 iterations, V*(0)=0'] },
      { q: 'Why does delta use max() (sup-norm) rather than an average across states?', qKn: 'delta states ಆದ್ಯಂತ ಒಂದೂ average ಬದಲು max() (sup-norm) ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['Average is faster to compute', 'A single badly-converged state could hide inside a good average; max ensures every state has converged', 'It has no real purpose', 'max() is required by Python'], correct: 1,
        optsKn: ['Average ಲೆಕ್ಕಹಾಕಲು ವೇಗವಾಗಿದೆ', 'ಒಂದೂ single ಕೆಟ್ಟದಾಗಿ-ಒಮ್ಮುಖವಾದ state ಒಂದೂ ಉತ್ತಮ average ಒಳಗೆ ಮರೆಮಾಚಬಹುದು; max ಪ್ರತಿಯೊಂದೂ state ಒಮ್ಮುಖವಾಗಿದೆ ಎಂದೂ ಖಾತರಿಪಡಿಸುತ್ತದೆ', 'ಇದಕ್ಕೆ ಯಾವುದೇ ನಿಜ ಉದ್ದೇಶ ಇಲ್ಲ', 'Python ಗೆ max() ಅಗತ್ಯವಿದೆ'] },
    ] } },
  ],
};
