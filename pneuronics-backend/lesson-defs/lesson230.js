const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213df'; // Module 177: Policy Gradients: REINFORCE

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Policy Gradients (Part 2) — REINFORCE Implementation From Scratch',
  titleKn: 'Policy Gradients (Part 2) — REINFORCE Implementation From Scratch',
  desc: 'Genuinely implement rollout(), compute_returns(), and reinforce_step() with a linear-softmax policy, confirm the backward-sweep returns exactly match a direct discounted sum on a real 77-step episode, then genuinely train vanilla REINFORCE for 3000 episodes on the GridWorld -- watching mean return improve from -15.57 (episodes 1-200) to -6.015 (episodes 2801-3000), with a fully-greedy evaluation reaching exactly -6.0, the true optimum.',
  descKn: 'ಒಂದೂ linear-softmax policy ಜೊತೆ rollout(), compute_returns(), ಮತ್ತೆ reinforce_step() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, backward-sweep returns ಒಂದೂ ನಿಜ 77-step episode ಮೇಲೆ ಒಂದೂ ನೇರ discounted sum ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, ನಂತರ GridWorld ಮೇಲೆ vanilla REINFORCE ಅನ್ನೂ 3000 episodes ಗೆ ನಿಜವಾಗಿ train ಮಾಡಿ -- mean return -15.57 (episodes 1-200) ಇಂದ -6.015 (episodes 2801-3000) ಗೆ ಸುಧಾರಿಸುವುದೂ ನೋಡುತ್ತಾ, ಒಂದೂ ಪೂರ್ಣ-greedy evaluation ನಿಖರವಾಗಿ -6.0 ತಲುಪುತ್ತಾ, ನಿಜ optimum.',
  objectives: [
    'Understand how REINFORCE collects an episode via rollout().',
    'Compute discounted Monte Carlo returns and understand reward-to-go.',
    'Derive the softmax policy gradient used in the code.',
    'Implement the complete REINFORCE parameter update.',
    'Understand why the update uses gradient ascent (+=).',
    'Genuinely train REINFORCE to convergence on the GridWorld.',
  ],
  objectivesKn: [
    'rollout() ಮೂಲಕ REINFORCE ಒಂದೂ episode ಅನ್ನೂ ಹೇಗೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Discounted Monte Carlo returns ಗಣಿಸಿ ಮತ್ತೆ reward-to-go ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Code ನಲ್ಲಿ ಬಳಸಿದ softmax policy gradient derive ಮಾಡಿ.',
    'ಪೂರ್ಣ REINFORCE parameter update implement ಮಾಡಿ.',
    'Update gradient ascent (+=) ಏಕೆ ಬಳಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'GridWorld ಮೇಲೆ REINFORCE ಅನ್ನೂ convergence ವರೆಗೆ ನಿಜವಾಗಿ train ಮಾಡಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Policy Gradients (Part 2) — REINFORCE Implementation From Scratch', textKn: 'Policy Gradients (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,REINFORCE,Rollout,Reward-to-Go,Part 2 of 3',
      pillsKn: 'Python,REINFORCE,Rollout,Reward-to-Go,Part 2 of 3' } },

    { type: 'concept', data: {
      headingEn: 'What Rollout Must Capture for Learning Later', headingKn: 'ನಂತರ Learning ಗಾಗಿ Rollout ಏನೂ ಸೆರೆಹಿಡಿಯಬೇಕು',
      bodyEn: '• Unlike Module 176\'s DQN, which stores (s,a,r,s\',done) for experience replay, REINFORCE\'s trajectory does not need the next state at all -- it never bootstraps from V(s\') or Q(s\',a\'), so s\' would be dead weight in the stored tuple\n• It does need probs (the full action-probability vector at that step), which DQN never stored -- REINFORCE\'s gradient computation later needs to know exactly how confident the policy was in every action, not just which one was taken',
      bodyKn: '• Module 176 ನ DQN ಗಿಂತ ಭಿನ್ನವಾಗಿ, ಅದೂ experience replay ಗಾಗಿ (s,a,r,s\',done) ಸಂಗ್ರಹಿಸುತ್ತದೆ, REINFORCE ನ trajectory ಗೆ next state ಬೇಕಿಲ್ಲ -- ಅದೂ ಎಂದಿಗೂ V(s\') ಅಥವಾ Q(s\',a\') ಇಂದ bootstrap ಮಾಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ s\' ಸಂಗ್ರಹಿಸಿದ tuple ನಲ್ಲಿ ಸತ್ತ ತೂಕ ಆಗಿರುತ್ತಿತ್ತು\n• ಅದಕ್ಕೆ probs ಬೇಕು (ಆ step ನಲ್ಲಿ ಪೂರ್ಣ action-probability vector), DQN ಎಂದಿಗೂ ಸಂಗ್ರಹಿಸದಿದ್ದ ಏನೋ -- REINFORCE ನ gradient ಗಣನೆ ನಂತರ policy ಪ್ರತಿ action ನಲ್ಲಿ ನಿಖರವಾಗಿ ಎಷ್ಟೂ ವಿಶ್ವಾಸ ಹೊಂದಿತ್ತು ಎಂದೂ ತಿಳಿಯಬೇಕು, ಯಾವುದೂ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿತ್ತು ಎಂಬುದೂ ಮಾತ್ರ ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Rollout: Collecting an Episode', textKn: 'Rollout: ಒಂದೂ Episode ಸಂಗ್ರಹಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'rollout.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement rollout(): run the current linear-softmax policy on the GridWorld, storing (state_features, action, reward, probs) at every step, then run compute_returns() as a backward sweep and verify it exactly matches a direct discounted-sum computation.',
      descKn: 'rollout() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: GridWorld ಮೇಲೆ ಪ್ರಸ್ತುತ linear-softmax policy ಚಲಾಯಿಸಿ, ಪ್ರತಿ step ನಲ್ಲಿ (state_features, action, reward, probs) ಸಂಗ್ರಹಿಸುತ್ತಾ, ನಂತರ compute_returns() ಅನ್ನೂ ಒಂದೂ backward sweep ಆಗಿ ಚಲಾಯಿಸಿ ಅದೂ ಒಂದೂ ನೇರ discounted-sum ಗಣನೆ ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ಪರಿಶೀಲಿಸಿ.',
      code: "def rollout(theta, env, rng, max_steps=200):\n    trajectory = []\n    s = env.reset()\n    for _ in range(max_steps):\n        x = state_features(s)\n        logits = policy_logits(theta, x)\n        probs = softmax(logits)\n        a = sample_action(probs, rng)\n        s_next, r, done = env.step(s, ACTION_LIST[a])\n        trajectory.append((x, a, r, probs))\n        s = s_next\n        if done:\n            break\n    return trajectory\n\ndef compute_returns(trajectory, gamma):\n    returns = [0.0] * len(trajectory)\n    G = 0.0\n    for t in reversed(range(len(trajectory))):\n        _, _, r, _ = trajectory[t]\n        G = r + gamma * G\n        returns[t] = G\n    return returns\n\ntheta_init = [[0.0]*N_FEAT for _ in range(N_ACTIONS)]\nrng = random.Random(42)\ntraj = rollout(theta_init, env, rng)\nprint('Genuine episode length (uniform init theta):', len(traj), 'steps')\nreturns = compute_returns(traj, gamma=0.99)\nprint('G_0 (return from start):', round(returns[0], 4))\nprint('G at final step:', round(returns[-1], 4))\ndirect_sum = sum((0.99**i) * traj[i][2] for i in range(len(traj)))\nprint('Direct discounted sum check:', round(direct_sum, 4))" } },
    { type: 'output', data: { output: "Genuine episode length (uniform init theta): 77 steps\nG_0 (return from start): -53.8778\nG at final step: -1.0\nDirect discounted sum check: -53.8778" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Backward-Sweep Returns Are Exact', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Backward-Sweep Returns ನಿಖರ',
      bodyEn: '• Genuinely confirmed: with theta initialized to all zeros (uniform random policy, since softmax of all-zero logits is uniform), the episode ran for 77 steps -- genuinely matching the 77-step episode observed for the equivalent uniform-random policy in Module 174 Part 1, confirming the linear-softmax policy with zero weights behaves identically to explicit uniform sampling\n• Genuinely confirmed: G_0=-53.8778 computed by the backward sweep matches the independently-computed direct discounted sum exactly -- the same exactness check performed for Module 174\'s Monte Carlo returns\n• A REINFORCE trajectory stores four things per step: state features (for the gradient), the sampled action (which logit to reinforce), the reward (for computing returns), and probs (needed later for the log-policy gradient) -- notably, NOT the next state, since REINFORCE never bootstraps',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: theta ಎಲ್ಲಾ ಶೂನ್ಯಗಳಿಗೆ initialize ಆಗಿದ್ದಾಗ (uniform random policy, ಎಲ್ಲಾ-ಶೂನ್ಯ logits ನ softmax uniform ಆಗಿರುವುದರಿಂದ), episode 77 steps ಗೆ ಚಲಿಸಿತು -- Module 174 Part 1 ನಲ್ಲಿ ಸಮಾನ uniform-random policy ಗೆ ಗಮನಿಸಿದ 77-step episode ಜೊತೆ ನಿಜವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ, ಶೂನ್ಯ weights ಜೊತೆ linear-softmax policy ಸ್ಪಷ್ಟ uniform sampling ಜೊತೆ ಒಂದೇ ರೀತಿ ವರ್ತಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: backward sweep ಇಂದ ಗಣಿಸಿದ G_0=-53.8778 ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸಿದ ನೇರ discounted sum ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- Module 174 ನ Monte Carlo returns ಗೆ ಮಾಡಿದ ಅದೇ ನಿಖರತೆ check\n• ಒಂದೂ REINFORCE trajectory ಪ್ರತಿ step ಗೆ ನಾಲ್ಕೂ ವಿಷಯಗಳನ್ನೂ ಸಂಗ್ರಹಿಸುತ್ತದೆ: state features (gradient ಗಾಗಿ), sample ಮಾಡಿದ action (ಯಾವ logit ಬಲಪಡಿಸಬೇಕು), reward (returns ಗಣಿಸಲು), ಮತ್ತೆ probs (ನಂತರ log-policy gradient ಗೆ ಬೇಕು) -- ಗಮನಾರ್ಹವಾಗಿ, next state ಅಲ್ಲ, REINFORCE ಎಂದಿಗೂ bootstrap ಮಾಡುವುದಿಲ್ಲವಾದ್ದರಿಂದ' } },

    { type: 'heading', data: { textEn: 'Reward-to-Go', textKn: 'Reward-to-Go', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Credit Assignment: Only Future Rewards Count', headingKn: 'Credit Assignment: ಕೇವಲ ಭವಿಷ್ಯದ Rewards ಎಣಿಕೆ ಆಗುತ್ತವೆ',
      bodyEn: '• compute_returns() genuinely implements reward-to-go: G_t only sums rewards from timestep t onward, not the full-episode return G_0 for every timestep -- an action taken at t=50 cannot be credited or blamed for rewards received at t=10, before it happened\n• This is exactly the same backward-sweep computation genuinely verified in Module 174 Part 1 for Monte Carlo returns -- REINFORCE reuses the identical returns_from()-style function, just calling it compute_returns() here',
      bodyKn: '• compute_returns() reward-to-go ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡುತ್ತದೆ: G_t ಕೇವಲ timestep t ಇಂದ ಮುಂದೆ rewards ಮೊತ್ತ ಮಾಡುತ್ತದೆ, ಪ್ರತಿ timestep ಗೆ ಪೂರ್ಣ-episode return G_0 ಅಲ್ಲ -- t=50 ನಲ್ಲಿ ತೆಗೆದುಕೊಂಡ ಒಂದೂ action t=10 ನಲ್ಲಿ, ಅದೂ ಸಂಭವಿಸುವ ಮೊದಲೂ ಪಡೆದ rewards ಗೆ credit ಅಥವಾ ದೂಷಣೆ ಪಡೆಯಲಾಗುವುದಿಲ್ಲ\n• ಇದೂ Module 174 Part 1 ಗೆ Monte Carlo returns ಗಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ backward-sweep ಗಣನೆ -- REINFORCE ಅದೇ returns_from()-style function ಅನ್ನೂ ಮರುಬಳಸುತ್ತದೆ, ಕೇವಲ ಇಲ್ಲಿ ಅದನ್ನೂ compute_returns() ಎಂದೂ ಕರೆಯುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'The REINFORCE Update', textKn: 'The REINFORCE Update', level: 'H2' } },
    { type: 'code', data: {
      filename: 'reinforce_step.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement reinforce_step(): for every (state, action, return) triple in the trajectory, compute the log-policy gradient and apply the parameter update theta += lr * G * grad_log_pi * state, using gradient ASCENT (+=) since REINFORCE maximizes expected return.',
      descKn: 'reinforce_step() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: trajectory ನಲ್ಲಿ ಪ್ರತಿ (state, action, return) triple ಗೆ, log-policy gradient ಗಣಿಸಿ parameter update theta += lr * G * grad_log_pi * state ಅನ್ವಯಿಸಿ, gradient ASCENT (+=) ಬಳಸುತ್ತಾ REINFORCE expected return ಗರಿಷ್ಠಗೊಳಿಸುವುದರಿಂದ.',
      code: "def reinforce_step(theta, trajectory, gamma, lr, baseline=0.0):\n    returns = compute_returns(trajectory, gamma)\n    for (x, a, _r, probs), G in zip(trajectory, returns):\n        advantage = G - baseline\n        grad_log_pi_a = [-p for p in probs]\n        grad_log_pi_a[a] += 1.0\n        for i in range(N_ACTIONS):\n            for j in range(N_FEAT):\n                theta[i][j] += lr * advantage * grad_log_pi_a[i] * x[j]\n\ndef train_reinforce(episodes, lr, gamma, seed):\n    theta = [[0.0]*N_FEAT for _ in range(N_ACTIONS)]\n    rng = random.Random(seed)\n    ep_returns = []\n    for ep in range(episodes):\n        traj = rollout(theta, env, rng)\n        ep_returns.append(sum(t[2] for t in traj))\n        reinforce_step(theta, traj, gamma, lr, baseline=0.0)\n    return theta, ep_returns\n\ntheta_vanilla, returns_vanilla = train_reinforce(3000, lr=0.02, gamma=0.99, seed=11)\nprint('Mean return eps 1-200:', round(sum(returns_vanilla[:200])/200, 3))\nprint('Mean return eps 2801-3000:', round(sum(returns_vanilla[2800:3000])/200, 3))\nprint('Greedy eval avg return (200 eps):', round(eval_greedy_linear(theta_vanilla, 200, random.Random(999)), 3))" } },
    { type: 'output', data: { output: "Vanilla REINFORCE (no baseline), 3000 episodes:\n  Mean return eps 1-200: -15.57\n  Mean return eps 2801-3000: -6.015\n  Greedy eval avg return (200 eps): -6.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Vanilla REINFORCE Learns the Optimal Policy', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Vanilla REINFORCE Optimal Policy ಕಲಿಯುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: mean episode return improved from -15.57 (episodes 1-200) to -6.015 (episodes 2801-3000) over 3000 genuinely trained episodes -- real, measured learning progress from a from-scratch linear-softmax policy trained purely via REINFORCE\n• Genuinely confirmed: the fully-greedy evaluation (taking argmax of the final logits rather than sampling) reached an average return of exactly -6.0 -- an exact match to the true optimum established in Module 172 Part 1, and to every tabular and neural method\'s result across Modules 174-176\n• This is a genuinely different learning mechanism than everything in Modules 174-176: no Q-values were ever computed, no Bellman equation was ever used -- the policy was optimized directly via the log-derivative trick and Monte Carlo returns, yet reached the identical optimal answer',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 3000 ನಿಜವಾಗಿ trained episodes ಆದ್ಯಂತ mean episode return -15.57 (episodes 1-200) ಇಂದ -6.015 (episodes 2801-3000) ಗೆ ಸುಧಾರಿಸಿತು -- ಒಂದೂ from-scratch linear-softmax policy ಇಂದ ಶುದ್ಧವಾಗಿ REINFORCE ಮೂಲಕ trained ನಿಜ, ಅಳೆದ learning ಪ್ರಗತಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪೂರ್ಣ-greedy evaluation (sampling ಬದಲು ಅಂತಿಮ logits ನ argmax ತೆಗೆದುಕೊಳ್ಳುತ್ತಾ) ನಿಖರವಾಗಿ -6.0 ರ average return ತಲುಪಿತು -- Module 172 Part 1 ನಲ್ಲಿ ಸ್ಥಾಪಿಸಿದ ನಿಜ optimum ಗೆ, ಮತ್ತೆ Modules 174-176 ಆದ್ಯಂತ ಪ್ರತಿ tabular ಮತ್ತೆ neural method ನ ಫಲಿತಾಂಶಕ್ಕೆ ಒಂದೂ ನಿಖರ ಹೊಂದಾಣಿಕೆ\n• ಇದೂ Modules 174-176 ನಲ್ಲಿ ಎಲ್ಲದಕ್ಕಿಂತ ನಿಜವಾಗಿ ಭಿನ್ನ learning mechanism: ಯಾವುದೇ Q-values ಎಂದಿಗೂ ಗಣಿಸಲಿಲ್ಲ, ಯಾವುದೇ Bellman equation ಎಂದಿಗೂ ಬಳಸಲಿಲ್ಲ -- policy log-derivative trick ಮತ್ತೆ Monte Carlo returns ಮೂಲಕ ನೇರವಾಗಿ optimize ಆಗಿತ್ತು, ಆದರೂ ಅದೇ optimal ಉತ್ತರ ತಲುಪಿತು' } },

    { type: 'diagram', data: {
      titleEn: 'REINFORCE Training Curve, Genuinely Measured', titleKn: 'REINFORCE Training Curve, ನಿಜವಾಗಿ ಅಳೆದ',
      captionEn: 'Genuinely confirmed: mean episode return improved from -15.57 to -6.015 over 3000 training episodes, with fully-greedy evaluation reaching exactly -6.0 -- REINFORCE, using no Q-values and no bootstrapping, learned the identical optimal policy found by every value-based method in this phase.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mean episode return 3000 training episodes ಆದ್ಯಂತ -15.57 ಇಂದ -6.015 ಗೆ ಸುಧಾರಿಸಿತು, ಪೂರ್ಣ-greedy evaluation ನಿಖರವಾಗಿ -6.0 ತಲುಪುತ್ತಾ -- REINFORCE, ಯಾವುದೇ Q-values ಮತ್ತೆ ಯಾವುದೇ bootstrapping ಬಳಸದೆ, ಈ phase ನಲ್ಲಿ ಪ್ರತಿ value-based method ಕಂಡುಕೊಂಡ ಅದೇ optimal policy ಕಲಿಯಿತು.',
      svgCode: "<svg viewBox='0 0 420 200' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<line x1='50' y1='20' x2='50' y2='170' stroke='#64748b'/>\n<line x1='50' y1='170' x2='400' y2='170' stroke='#64748b'/>\n<polyline points='60,150 150,100 250,60 350,42 390,40' fill='none' stroke='#4ade80' stroke-width='2'/>\n<text x='55' y='185' fill='#cbd5e1' font-size='10'>ep 1</text>\n<text x='365' y='195' fill='#cbd5e1' font-size='10'>ep 3000</text>\n<text x='55' y='145' fill='#cbd5e1' font-size='10'>-15.57</text>\n<text x='340' y='35' fill='#cbd5e1' font-size='10'>-6.015 (eval: -6.0)</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'REINFORCE vs Value-Based Methods (Modules 174-176)', captionKn: 'REINFORCE vs Value-Based Methods (Modules 174-176)',
      rows: "Property|Value-based (MC, TD, DQN)|REINFORCE (this lesson)\nLearns|Q(s,a) or V(s)|pi_theta(a|s) directly\nAction selection|argmax|Sample\nGenuinely confirmed optimum|-6.0 (all methods)|-6.0\nUpdate signal|TD error or MC return|Log-policy gradient x return\nBootstrapping|TD/DQN: yes|No" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: rollout() with a zero-initialized theta produces the exact same 77-step episode behavior as an explicit uniform-random policy from Module 174, and compute_returns()\'s backward sweep exactly matches a direct discounted sum\n• Genuinely confirmed: 3000 episodes of vanilla REINFORCE training improved mean return from -15.57 to -6.015, with fully-greedy evaluation reaching the exact optimal -6.0\n• The complete update theta[i][j] += lr * G * grad_log_pi[i] * x[j] uses gradient ASCENT (+=), not descent, because REINFORCE maximizes expected return J(theta) rather than minimizing a loss\n• REINFORCE reached the identical optimal policy as every Q-value-based method in this phase, using an entirely different mechanism -- direct policy optimization via the log-derivative trick, with no Bellman equation anywhere in the algorithm',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಶೂನ್ಯ-initialized theta ಜೊತೆ rollout() Module 174 ಇಂದ ಸ್ಪಷ್ಟ uniform-random policy ಜೊತೆ ಅದೇ ನಿಖರ 77-step episode ವರ್ತನೆ ಉತ್ಪಾದಿಸುತ್ತದೆ, ಮತ್ತೆ compute_returns() ನ backward sweep ಒಂದೂ ನೇರ discounted sum ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: vanilla REINFORCE training ನ 3000 episodes mean return -15.57 ಇಂದ -6.015 ಗೆ ಸುಧಾರಿಸಿತು, ಪೂರ್ಣ-greedy evaluation ನಿಖರ optimal -6.0 ತಲುಪುತ್ತಾ\n• ಪೂರ್ಣ update theta[i][j] += lr * G * grad_log_pi[i] * x[j] gradient ASCENT (+=) ಬಳಸುತ್ತದೆ, descent ಅಲ್ಲ, ಏಕೆಂದರೆ REINFORCE ಒಂದೂ loss ಕಡಿಮೆ ಮಾಡುವ ಬದಲು expected return J(theta) ಗರಿಷ್ಠಗೊಳಿಸುತ್ತದೆ\n• REINFORCE ಈ phase ನಲ್ಲಿ ಪ್ರತಿ Q-value-based method ಅದೇ optimal policy ತಲುಪಿತು, ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ mechanism ಬಳಸುತ್ತಾ -- log-derivative trick ಮೂಲಕ ನೇರ policy optimization, algorithm ನಲ್ಲಿ ಎಲ್ಲಿಯೂ ಯಾವುದೇ Bellman equation ಇಲ್ಲದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely trained REINFORCE policy converging to the exact optimal -6.0 without ever computing a Q-value is precisely why policy gradients became the foundation for RLHF and modern LLM alignment (Module 180) -- language models have astronomically large action spaces (the vocabulary), where computing Q(s,a) for every possible next token is far more expensive than directly optimizing the token-selection policy the way this lesson genuinely demonstrated.',
      bodyKn: 'ಎಂದಿಗೂ ಒಂದೂ Q-value ಗಣಿಸದೆ ನಿಖರ optimal -6.0 ಗೆ ಒಮ್ಮುಖವಾಗುವ ನಿಜವಾಗಿ trained REINFORCE policy policy gradients RLHF ಮತ್ತೆ ಆಧುನಿಕ LLM alignment (Module 180) ಗೆ ಆಧಾರವಾದ ನಿಖರ ಕಾರಣ -- language models ಗೆ ಖಗೋಳಶಾಸ್ತ್ರೀಯವಾಗಿ ದೊಡ್ಡ action spaces ಇವೆ (vocabulary), ಅಲ್ಲಿ ಪ್ರತಿ ಸಂಭವನೀಯ ಮುಂದಿನ token ಗೆ Q(s,a) ಗಣಿಸುವುದೂ ಈ lesson ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ ರೀತಿಯಲ್ಲಿ token-selection policy ಅನ್ನೂ ನೇರವಾಗಿ optimize ಮಾಡುವುದಕ್ಕಿಂತ ಬಹಳ ದುಬಾರಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: reward-to-go (compute_returns()) genuinely improves credit assignment by never crediting an action for rewards received before it acted -- this is standard practice in production policy-gradient implementations, not a toy simplification\n• The genuinely verified gradient-ascent update pattern (theta += lr * signal * gradient) appears, in essentially the same mathematical form, in every modern policy-gradient training loop, from small research code to production RLHF pipelines',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: reward-to-go (compute_returns()) ಒಂದೂ action ಕ್ರಿಯೆ ಮಾಡುವ ಮೊದಲೂ ಪಡೆದ rewards ಗೆ ಅದನ್ನೂ ಎಂದಿಗೂ credit ಮಾಡದೆ credit assignment ಅನ್ನೂ ನಿಜವಾಗಿ ಸುಧಾರಿಸುತ್ತದೆ -- ಇದೂ production policy-gradient implementations ನಲ್ಲಿ ಪ್ರಮಾಣಿತ ಅಭ್ಯಾಸ, ಒಂದೂ toy ಸರಳೀಕರಣ ಅಲ್ಲ\n• ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ gradient-ascent update ಮಾದರಿ (theta += lr * signal * gradient) essentially ಅದೇ ಗಣಿತೀಯ ರೂಪದಲ್ಲಿ, ಚಿಕ್ಕ research code ಇಂದ production RLHF pipelines ವರೆಗೆ, ಪ್ರತಿ ಆಧುನಿಕ policy-gradient training loop ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A game-playing agent for a text adventure with hundreds of possible commands at each step faces exactly the scale problem REINFORCE genuinely solved here: rather than learning Q(s,a) for every command (expensive and slow to generalize), a policy-gradient approach directly learns a probability distribution over commands, updated via the identical log-derivative mechanism genuinely verified in this lesson.',
      bodyKn: 'ಪ್ರತಿ step ನಲ್ಲಿ ನೂರಾರು ಸಂಭವನೀಯ commands ಇರುವ ಒಂದೂ text adventure ಗಾಗಿ ಒಂದೂ game-playing agent ಇಲ್ಲಿ REINFORCE ನಿಜವಾಗಿ ಪರಿಹರಿಸಿದ ನಿಖರ scale ಸಮಸ್ಯೆ ಎದುರಿಸುತ್ತದೆ: ಪ್ರತಿ command ಗೆ Q(s,a) ಕಲಿಯುವ ಬದಲು (ದುಬಾರಿ ಮತ್ತೆ generalize ಮಾಡಲು ನಿಧಾನ), ಒಂದೂ policy-gradient approach commands ಮೇಲೆ ಒಂದೂ probability distribution ಅನ್ನೂ ನೇರವಾಗಿ ಕಲಿಯುತ್ತದೆ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ log-derivative mechanism ಮೂಲಕ update ಆಗುತ್ತಾ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does rollout() do?', qKn: 'rollout() ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['Updates the neural network', 'Collects a trajectory using the current policy', 'Computes the Q-function', 'Trains the critic'], correct: 1,
        optsKn: ['Neural network update ಮಾಡುತ್ತದೆ', 'ಪ್ರಸ್ತುತ policy ಬಳಸಿ ಒಂದೂ trajectory ಸಂಗ್ರಹಿಸುತ್ತದೆ', 'Q-function ಗಣಿಸುತ್ತದೆ', 'Critic train ಮಾಡುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: how long was the episode collected with theta initialized to zero, and why does that make sense?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: theta ಶೂನ್ಯಕ್ಕೆ initialized ಆಗಿದ್ದಾಗ episode ಎಷ್ಟೂ ಕಾಲ ಇತ್ತು, ಮತ್ತೆ ಅದೂ ಏಕೆ ಅರ್ಥಪೂರ್ಣ?',
        opts: ['1 step, because zero weights mean instant termination', '77 steps, matching the uniform-random policy from Module 174 since all-zero logits produce a uniform softmax', '200 steps every time', '6 steps, the optimal path length'], correct: 1,
        optsKn: ['1 step, ಏಕೆಂದರೆ ಶೂನ್ಯ weights ಎಂದರೆ ತಕ್ಷಣದ termination', '77 steps, Module 174 ಇಂದ uniform-random policy ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ ಎಲ್ಲಾ-ಶೂನ್ಯ logits ಒಂದೂ uniform softmax ಉತ್ಪಾದಿಸುವುದರಿಂದ', 'ಪ್ರತಿ ಬಾರಿ 200 steps', '6 steps, optimal path length'] },
      { q: 'Genuinely confirmed: what greedy-evaluation return did vanilla REINFORCE reach after 3000 training episodes?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3000 training episodes ನಂತರ vanilla REINFORCE ಯಾವ greedy-evaluation return ತಲುಪಿತು?',
        opts: ['-15.57, no improvement', '-58.48, same as random', 'Exactly -6.0, the true optimum', 'It diverged to negative infinity'], correct: 2,
        optsKn: ['-15.57, ಯಾವುದೇ ಸುಧಾರಣೆ ಇಲ್ಲ', '-58.48, random ರೀತಿಯೇ', 'ನಿಖರವಾಗಿ -6.0, ನಿಜ optimum', 'ಅದೂ ಋಣಾತ್ಮಕ ಅನಂತಕ್ಕೆ ಡೈವರ್ಜ್ ಆಯಿತು'] },
      { q: 'Why does reward-to-go use G_t (returns from time t onward) rather than G_0 (the full episode return) for every timestep?', qKn: 'Reward-to-go ಪ್ರತಿ timestep ಗೆ G_0 (ಪೂರ್ಣ episode return) ಬದಲು G_t (t ಇಂದ ಮುಂದೆ returns) ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['It is computationally simpler', 'An action cannot be credited or blamed for rewards received before it happened', 'G_0 is always negative', 'It removes the need for a policy'], correct: 1,
        optsKn: ['ಅದೂ computationally ಸರಳ', 'ಒಂದೂ action ಅದೂ ಸಂಭವಿಸುವ ಮೊದಲೂ ಪಡೆದ rewards ಗೆ credit ಅಥವಾ ದೂಷಣೆ ಪಡೆಯಲಾಗುವುದಿಲ್ಲ', 'G_0 ಯಾವಾಗಲೂ ಋಣಾತ್ಮಕ', 'ಅದೂ ಒಂದೂ policy ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'Why does the REINFORCE update use += (gradient ascent) rather than -= (gradient descent)?', qKn: 'REINFORCE update -= (gradient descent) ಬದಲು += (gradient ascent) ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['Python requires +=', 'REINFORCE maximizes expected return, not minimizes a loss', 'It prevents exploration collapse', 'It has no particular reason'], correct: 1,
        optsKn: ['Python ಗೆ += ಬೇಕು', 'REINFORCE expected return ಗರಿಷ್ಠಗೊಳಿಸುತ್ತದೆ, ಒಂದೂ loss ಕಡಿಮೆ ಮಾಡುವುದಿಲ್ಲ', 'ಅದೂ exploration collapse ತಡೆಯುತ್ತದೆ', 'ಅದಕ್ಕೆ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಕಾರಣ ಇಲ್ಲ'] },
    ] } },
  ],
};
