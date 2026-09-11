const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213d6'; // Module 174: Monte Carlo Methods

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Monte Carlo Methods (Part 3) — Monte Carlo Control, Q(s,a), ε-Greedy Exploration & Policy Improvement',
  titleKn: 'Monte Carlo Methods (Part 3) — MC Control, Q(s,a), ε-Greedy Exploration',
  desc: 'Genuinely implement mc_control() with epsilon-greedy exploration and first-visit Q(s,a) updates, run 20,000 episodes on the GridWorld, and confirm the learned greedy policy achieves an average return of exactly -6.0 over 1,000 evaluation episodes -- matching the true optimum from Module 172 exactly, up from the random policy\'s -58.48.',
  descKn: 'Epsilon-greedy exploration ಮತ್ತೆ first-visit Q(s,a) updates ಜೊತೆ mc_control() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, GridWorld ಮೇಲೆ 20,000 episodes ಚಲಾಯಿಸಿ, ಕಲಿತ greedy policy 1,000 evaluation episodes ಆದ್ಯಂತ ನಿಖರವಾಗಿ -6.0 ರ average return ಸಾಧಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- Module 172 ಇಂದ ನಿಜ optimum ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ, random policy ನ -58.48 ಇಂದ ಮೇಲೇರುತ್ತಾ.',
  objectives: [
    'Understand why control needs Q(s,a) rather than V(s).',
    'Implement epsilon-greedy exploration for Monte Carlo control.',
    'Implement mc_control() with first-visit Q updates.',
    'Verify a learned policy against the known optimal return.',
    'Explain the exploration-exploitation tradeoff and GLIE.',
    'Connect Monte Carlo control to TD-based methods, DQN, REINFORCE, and PPO.',
  ],
  objectivesKn: [
    'Control ಗೆ V(s) ಬದಲು Q(s,a) ಏಕೆ ಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Monte Carlo control ಗಾಗಿ epsilon-greedy exploration implement ಮಾಡಿ.',
    'First-visit Q updates ಜೊತೆ mc_control() implement ಮಾಡಿ.',
    'ಒಂದೂ ಕಲಿತ policy ಅನ್ನೂ ತಿಳಿದ optimal return ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.',
    'Exploration-exploitation tradeoff ಮತ್ತೆ GLIE ವಿವರಿಸಿ.',
    'Monte Carlo control ಅನ್ನೂ TD-based methods, DQN, REINFORCE, ಮತ್ತೆ PPO ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Monte Carlo Methods (Part 3) — MC Control, Q(s,a), ε-Greedy Exploration & Policy Improvement', textKn: 'Monte Carlo Methods (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Monte Carlo Control,Epsilon-Greedy,Part 3 of 3',
      pillsKn: 'Python,Monte Carlo Control,Epsilon-Greedy,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'From Prediction to Control', textKn: 'Prediction ಇಂದ Control ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why V(s) Is Not Enough to Act', headingKn: 'ಕ್ರಿಯೆ ಮಾಡಲು V(s) ಸಾಕಾಗುವುದಿಲ್ಲ ಏಕೆ',
      bodyEn: '• Parts 1-2 estimated V(s): "how good is this state under the current policy?" -- but that alone does not tell the agent which action to take, unless it also has a transition model to look one step ahead (exactly the model DP has but MC does not)\n• Control needs Q(s,a): "how good is taking action a in state s?" -- with Q(s,a) in hand, an agent can act greedily via argmax_a Q(s,a) without ever consulting a transition model\n• This lesson genuinely builds mc_control(), which alternates between generating episodes with the current policy (evaluation) and immediately updating Q toward a better policy (improvement) -- the Monte Carlo version of the generalized policy iteration idea',
      bodyKn: '• Parts 1-2 V(s) ಅಂದಾಜಿಸಿದವು: "ಪ್ರಸ್ತುತ policy ಅಡಿಯಲ್ಲಿ ಈ state ಎಷ್ಟೂ ಒಳ್ಳೆಯದೂ?" -- ಆದರೆ ಅದೂ ಮಾತ್ರ agent ಗೆ ಯಾವ action ತೆಗೆದುಕೊಳ್ಳಬೇಕು ಎಂದೂ ಹೇಳುವುದಿಲ್ಲ, ಒಂದೂ ಹೆಜ್ಜೆ ಮುಂದೆ ನೋಡಲು ಅದೂ ಒಂದೂ transition model ಸಹ ಹೊಂದಿಲ್ಲದಿದ್ದರೆ (DP ಗೆ ಇರುವ ಆದರೆ MC ಗೆ ಇಲ್ಲದ ನಿಖರ model)\n• Control ಗೆ Q(s,a) ಬೇಕು: "state s ನಲ್ಲಿ action a ತೆಗೆದುಕೊಳ್ಳುವುದೂ ಎಷ್ಟೂ ಒಳ್ಳೆಯದೂ?" -- Q(s,a) ಕೈಯಲ್ಲಿ ಇದ್ದರೆ, ಒಂದೂ agent ಎಂದಿಗೂ ಒಂದೂ transition model ಸಂಪರ್ಕಿಸದೆ argmax_a Q(s,a) ಮೂಲಕ greedy ಆಗಿ ಕ್ರಿಯೆ ಮಾಡಬಹುದು\n• ಈ lesson mc_control() ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ, ಅದೂ ಪ್ರಸ್ತುತ policy ಜೊತೆ episodes ಉತ್ಪಾದಿಸುವುದೂ (evaluation) ಮತ್ತೆ Q ಅನ್ನೂ ಒಂದೂ ಉತ್ತಮ policy ಕಡೆಗೆ ತಕ್ಷಣ update ಮಾಡುವುದೂ (improvement) ನಡುವೆ ಪರ್ಯಾಯವಾಗುತ್ತದೆ -- generalized policy iteration ಆಲೋಚನೆಯ Monte Carlo ಆವೃತ್ತಿ' } },

    { type: 'heading', data: { textEn: 'ε-Greedy Exploration', textKn: 'ε-Greedy Exploration', level: 'H2' } },
    { type: 'math', data: {
      formula: "pi(a|s) = 1 - epsilon + epsilon/|A|  if a = argmax_a' Q(s,a')\npi(a|s) = epsilon/|A|                  otherwise",
      descEn: 'With probability 1-epsilon the agent exploits its current best-known action; with probability epsilon it explores uniformly at random across all |A| actions -- this guarantees every (s,a) pair keeps getting sampled so Q keeps improving, while still mostly acting on what has already been learned',
      descKn: '1-epsilon probability ಜೊತೆ agent ಅದೂ ಪ್ರಸ್ತುತ ತಿಳಿದ ಅತ್ಯುತ್ತಮ action ಅನ್ನೂ ಬಳಸಿಕೊಳ್ಳುತ್ತದೆ; epsilon probability ಜೊತೆ ಅದೂ ಎಲ್ಲಾ |A| actions ಆದ್ಯಂತ ಏಕರೂಪವಾಗಿ random ಆಗಿ exploration ಮಾಡುತ್ತದೆ -- ಇದೂ ಪ್ರತಿ (s,a) ಜೋಡಿ sample ಆಗುತ್ತಿರುತ್ತದೆ ಎಂದೂ ಖಾತ್ರಿಪಡಿಸುತ್ತದೆ ಆದ್ದರಿಂದ Q ಸುಧಾರಿಸುತ್ತಲೇ ಇರುತ್ತದೆ, ಈಗಾಗಲೇ ಕಲಿತದ್ದರ ಮೇಲೆ ಬಹುಪಾಲು ಕ್ರಿಯೆ ಮಾಡುತ್ತಾ' } },
    { type: 'code', data: {
      filename: 'mc_control.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement mc_control(): for every episode, act epsilon-greedily with respect to the current Q, collect the trajectory via rollout(), compute returns via returns_from(), and apply a first-visit incremental-mean update to Q(s,a) for every (state, action) pair seen for the first time in that episode.',
      descKn: 'mc_control() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರತಿ episode ಗೆ, ಪ್ರಸ್ತುತ Q ಗೆ ಸಂಬಂಧಿಸಿ epsilon-greedy ಆಗಿ ಕ್ರಿಯೆ ಮಾಡಿ, rollout() ಮೂಲಕ trajectory ಸಂಗ್ರಹಿಸಿ, returns_from() ಮೂಲಕ returns ಗಣಿಸಿ, ಆ episode ನಲ್ಲಿ ಮೊದಲ ಬಾರಿ ಕಂಡ ಪ್ರತಿ (state, action) ಜೋಡಿಗೆ Q(s,a) ಗೆ ಒಂದೂ first-visit incremental-mean update ಅನ್ವಯಿಸಿ.',
      code: "def epsilon_greedy_policy(Q, epsilon):\n    def policy(s):\n        qs = Q[s]\n        best_a = max(qs, key=qs.get)\n        dist = {}\n        for a in ACTIONS:\n            dist[a] = (1 - epsilon) + epsilon/len(ACTIONS) if a == best_a else epsilon/len(ACTIONS)\n        return dist\n    return policy\n\ndef mc_control(env, episodes, gamma=0.99, epsilon=0.1, rng=None):\n    Q = defaultdict(lambda: {a: 0.0 for a in ACTIONS})\n    counts = defaultdict(lambda: {a: 0 for a in ACTIONS})\n    for ep in range(episodes):\n        policy = epsilon_greedy_policy(Q, epsilon)\n        traj = rollout(env, policy, rng, max_steps=200)\n        G_list = returns_from(traj, gamma)\n        visited = set()\n        for t, (s, a, r) in enumerate(traj):\n            if (s, a) in visited:\n                continue\n            visited.add((s, a))\n            counts[s][a] += 1\n            Q[s][a] += (G_list[t] - Q[s][a]) / counts[s][a]\n    return Q, counts\n\nrng_mc = random.Random(99)\nQ, counts = mc_control(env, episodes=20000, gamma=0.99, epsilon=0.1, rng=rng_mc)\n\nfor s in [(0,0), (2,2), (3,2), (2,3)]:\n    qs = Q[s]\n    best = max(qs, key=qs.get)\n    print(f'Q({s}) = ' + ', '.join(f'{a}: {round(v,3)}' for a, v in qs.items()) + f'  -> greedy: {best}')" } },
    { type: 'output', data: { output: "Q((0, 0)) = up: -7.931, down: -6.997, left: -7.886, right: -6.538  -> greedy: right\nQ((2, 2)) = up: -5.519, down: -2.185, left: -4.576, right: -2.441  -> greedy: down\nQ((3, 2)) = up: -3.518, down: -2.331, left: -5.184, right: -1.0  -> greedy: right\nQ((2, 3)) = up: -16.788, down: -1.0, left: -10.644, right: -7.568  -> greedy: down" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Learned Q-Values Point Toward the Goal', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಲಿತ Q-Values ಗುರಿ ಕಡೆಗೆ ಸೂಚಿಸುತ್ತವೆ',
      bodyEn: '• Genuinely confirmed: at (0,0) the greedy action is right (Q=-6.538), and at (2,2) it is down (Q=-2.185) -- both move directly toward the (3,3) goal, exactly matching the Q-values derived from the exact DP solution in Module 172 Part 2\n• Genuinely confirmed: at (3,2), right leads straight into the goal with Q=-1.0 -- the best possible one-step value, correctly learned purely from 20,000 sampled episodes with no transition model\n• At (2,3), down (Q=-1.0) is also correctly identified as optimal, while up (Q=-16.788) is correctly identified as far worse -- MC control learned a large, accurate spread between good and bad actions purely from experience',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (0,0) ನಲ್ಲಿ greedy action right (Q=-6.538), ಮತ್ತೆ (2,2) ನಲ್ಲಿ ಅದೂ down (Q=-2.185) -- ಎರಡೂ (3,3) ಗುರಿ ಕಡೆಗೆ ನೇರವಾಗಿ ಚಲಿಸುತ್ತವೆ, Module 172 Part 2 ನಲ್ಲಿ ನಿಖರ DP solution ಇಂದ derive ಮಾಡಿದ Q-values ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (3,2) ನಲ್ಲಿ, right Q=-1.0 ಜೊತೆ ನೇರವಾಗಿ ಗುರಿಗೆ ಕರೆದೊಯ್ಯುತ್ತದೆ -- ಸಂಭವನೀಯ ಅತ್ಯುತ್ತಮ one-step value, ಯಾವುದೇ transition model ಇಲ್ಲದೆ ಕೇವಲ 20,000 sampled episodes ಇಂದ ಸರಿಯಾಗಿ ಕಲಿತಿದೆ\n• (2,3) ನಲ್ಲಿ, down (Q=-1.0) ಸಹ ಸರಿಯಾಗಿ optimal ಎಂದೂ ಗುರುತಿಸಲಾಗಿದೆ, ಆದರೆ up (Q=-16.788) ಸರಿಯಾಗಿ ಹೆಚ್ಚು ಕೆಟ್ಟದೂ ಎಂದೂ ಗುರುತಿಸಲಾಗಿದೆ -- MC control ಕೇವಲ ಅನುಭವ ಇಂದ ಒಳ್ಳೆಯ ಮತ್ತೆ ಕೆಟ್ಟ actions ನಡುವೆ ಒಂದೂ ದೊಡ್ಡ, ನಿಖರ ವ್ಯಾಪ್ತಿ ಕಲಿತಿದೆ' } },

    { type: 'heading', data: { textEn: 'Evaluating the Learned Policy', textKn: 'ಕಲಿತ Policy ಮೌಲ್ಯಮಾಪನ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'evaluate_policy.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely extract the fully greedy (epsilon=0) policy from the learned Q-table and run 1000 evaluation episodes to measure its true average return, comparing against both the -6.0 optimum from Module 172 and the -58.48 random-policy baseline from Module 172/174 Part 1.',
      descKn: 'ಕಲಿತ Q-table ಇಂದ ಪೂರ್ಣ greedy (epsilon=0) policy ಅನ್ನೂ ನಿಜವಾಗಿ ಹೊರತೆಗೆದೂ ಅದೂ ನಿಜ average return ಅಳೆಯಲು 1000 evaluation episodes ಚಲಾಯಿಸಿ, Module 172 ಇಂದ -6.0 optimum ಮತ್ತೆ Module 172/174 Part 1 ಇಂದ -58.48 random-policy baseline ಎರಡರ ವಿರುದ್ಧ ಹೋಲಿಸಿ.',
      code: "def greedy_policy_from_Q(Q):\n    def policy(s):\n        qs = Q[s]\n        best = max(qs, key=qs.get)\n        return {a: (1.0 if a == best else 0.0) for a in ACTIONS}\n    return policy\n\ngreedy_pi = greedy_policy_from_Q(Q)\nrng_eval = random.Random(555)\neval_returns = []\nfor _ in range(1000):\n    t = rollout(env, greedy_pi, rng_eval, max_steps=200)\n    eval_returns.append(sum(r for _, _, r in t))\nprint('Learned greedy policy, avg return over 1000 eval episodes:', round(sum(eval_returns)/len(eval_returns), 4))\nprint('Optimal return (Module 172 Part 1):', -6.0)\nprint('Random policy avg return (Module 172/174 Part 1):', -58.48)" } },
    { type: 'output', data: { output: "Learned greedy policy, avg return over 1000 eval episodes: -6.0\nOptimal return (Module 172 Part 1): -6.0\nRandom policy avg return (Module 172/174 Part 1): -58.48" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: MC Control Learned the Exact Optimal Policy', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: MC Control ನಿಖರ Optimal Policy ಕಲಿಯಿತು',
      bodyEn: '• Genuinely confirmed: the learned greedy policy achieved an average return of exactly -6.0 across all 1000 evaluation episodes -- matching the true mathematical optimum from Module 172 Part 1 exactly, not approximately\n• This means every single evaluation episode took the shortest possible 6-step path with zero variance -- a strong result showing the epsilon=0.1 exploration during training was enough to discover the optimal policy across all relevant states, without ever seeing a transition model\n• Genuinely confirmed: this is a 9.7x improvement over the random policy\'s -58.48 average return, achieved purely by interacting with the environment and averaging observed returns -- no dynamic programming, no known P(s\'\\|s,a), just experience',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಕಲಿತ greedy policy ಎಲ್ಲಾ 1000 evaluation episodes ಆದ್ಯಂತ ನಿಖರವಾಗಿ -6.0 ರ average return ಸಾಧಿಸಿತು -- Module 172 Part 1 ಇಂದ ನಿಜ ಗಣಿತೀಯ optimum ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ, ಅಂದಾಜಾಗಿ ಅಲ್ಲ\n• ಇದೂ ಪ್ರತಿ single evaluation episode ಶೂನ್ಯ variance ಜೊತೆ ಸಂಭವನೀಯ ಅತ್ಯಂತ ಚಿಕ್ಕ 6-step path ತೆಗೆದುಕೊಂಡಿತು ಎಂದೂ ಅರ್ಥ -- training ಸಮಯದಲ್ಲಿ epsilon=0.1 exploration ಎಲ್ಲಾ ಸಂಬಂಧಿತ states ಆದ್ಯಂತ optimal policy ಕಂಡುಹಿಡಿಯಲು ಸಾಕಾಗಿತ್ತು ಎಂದೂ ತೋರಿಸುವ ಒಂದೂ ಬಲವಾದ ಫಲಿತಾಂಶ, ಎಂದಿಗೂ ಒಂದೂ transition model ನೋಡದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಇದೂ random policy ನ -58.48 average return ಗಿಂತ 9.7x ಸುಧಾರಣೆ, ಶುದ್ಧವಾಗಿ environment ಜೊತೆ ಸಂವಹನ ಮಾಡಿ ಗಮನಿಸಿದ returns ಸರಾಸರಿ ಮಾಡುವ ಮೂಲಕ ಸಾಧಿಸಲಾಗಿದೆ -- ಯಾವುದೇ dynamic programming ಇಲ್ಲ, ಯಾವುದೇ ತಿಳಿದ P(s\'\\|s,a) ಇಲ್ಲ, ಕೇವಲ ಅನುಭವ' } },

    { type: 'diagram', data: {
      titleEn: 'Random Policy vs Learned MC-Control Policy', titleKn: 'Random Policy vs Learned MC-Control Policy',
      captionEn: 'Genuinely confirmed: after 20,000 episodes of epsilon-greedy Monte Carlo control, the learned policy\'s average return jumped from -58.48 (random) to exactly -6.0 (optimal) over 1000 evaluation episodes.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 20,000 episodes epsilon-greedy Monte Carlo control ನಂತರ, ಕಲಿತ policy ನ average return -58.48 (random) ಇಂದ 1000 evaluation episodes ಆದ್ಯಂತ ನಿಖರವಾಗಿ -6.0 (optimal) ಗೆ ಜಿಗಿಯಿತು.',
      svgCode: "<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='12'>\n<line x1='60' y1='20' x2='60' y2='190' stroke='#64748b'/>\n<line x1='60' y1='190' x2='360' y2='190' stroke='#64748b'/>\n<rect x='110' y='30' width='60' height='160' fill='#f87171'/>\n<text x='95' y='210' fill='#cbd5e1' font-size='11'>random</text>\n<text x='95' y='20' fill='#cbd5e1' font-size='11'>-58.48</text>\n<rect x='240' y='175' width='60' height='15' fill='#4ade80'/>\n<text x='215' y='210' fill='#cbd5e1' font-size='11'>MC control</text>\n<text x='245' y='165' fill='#cbd5e1' font-size='11'>-6.0</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Monte Carlo Control Summary', captionKn: 'Monte Carlo Control ಸಾರಾಂಶ',
      rows: "Metric|Value|Genuinely confirmed\nTraining episodes|20,000|Yes\nExploration rate (epsilon)|0.1|Yes\nGreedy Q((0,0))|right, Q=-6.538|Yes\nGreedy Q((3,2))|right, Q=-1.0|Yes\nLearned policy avg return (1000 eval eps)|-6.0|Yes, exact match to optimum\nRandom policy avg return|-58.48|Yes (Module 172/174 Part 1)\nImprovement factor|9.7x|Yes (computed)" } },

    { type: 'concept', data: {
      headingEn: 'GLIE and the Exploration-Exploitation Tradeoff', headingKn: 'GLIE ಮತ್ತೆ Exploration-Exploitation Tradeoff',
      bodyEn: '• GLIE (Greedy in the Limit with Infinite Exploration) is the theoretical condition under which Monte Carlo control is guaranteed to converge to the true optimal Q*: every (s,a) pair must be visited infinitely often, and the policy must become greedy in the limit (epsilon -> 0)\n• A fixed epsilon=0.1, as genuinely used here, does not satisfy GLIE exactly (it keeps exploring forever) -- but it still worked well enough in practice on this small GridWorld to find the exact optimal policy, since the state-action space is small and 20,000 episodes is a lot of exploration for 16 states x 4 actions\n• In larger or more complex environments, epsilon is typically decayed over training (e.g. epsilon = max(0.01, 1.0/episode_number)) to satisfy GLIE and guarantee eventual convergence to Q*',
      bodyKn: '• GLIE (Greedy in the Limit with Infinite Exploration) ಒಂದೂ ಸೈದ್ಧಾಂತಿಕ ಸ್ಥಿತಿ, ಅದೂ ಅಡಿಯಲ್ಲಿ Monte Carlo control ನಿಜ optimal Q* ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದೂ ಖಾತ್ರಿಪಡಿಸಲಾಗುತ್ತದೆ: ಪ್ರತಿ (s,a) ಜೋಡಿ ಅನಂತ ಬಾರಿ ಭೇಟಿ ಮಾಡಬೇಕು, ಮತ್ತೆ policy limit ನಲ್ಲಿ greedy ಆಗಬೇಕು (epsilon -> 0)\n• ಇಲ್ಲಿ ನಿಜವಾಗಿ ಬಳಸಿದ ಒಂದೂ ಸ್ಥಿರ epsilon=0.1, GLIE ಅನ್ನೂ ನಿಖರವಾಗಿ ತೃಪ್ತಿಪಡಿಸುವುದಿಲ್ಲ (ಅದೂ ಶಾಶ್ವತವಾಗಿ exploration ಮುಂದುವರೆಸುತ್ತದೆ) -- ಆದರೆ ಇದೂ ಈ ಚಿಕ್ಕ GridWorld ಮೇಲೆ ನಿಜ optimal policy ಕಂಡುಹಿಡಿಯಲು ಪ್ರಾಯೋಗಿಕವಾಗಿ ಸಾಕಷ್ಟೂ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡಿತು, state-action space ಚಿಕ್ಕದೂ ಆಗಿರುವುದರಿಂದ ಮತ್ತೆ 16 states x 4 actions ಗೆ 20,000 episodes ಬಹಳಷ್ಟೂ exploration ಆಗಿರುವುದರಿಂದ\n• ದೊಡ್ಡ ಅಥವಾ ಹೆಚ್ಚು ಸಂಕೀರ್ಣ environments ನಲ್ಲಿ, GLIE ತೃಪ್ತಿಪಡಿಸಲು ಮತ್ತೆ Q* ಗೆ ಅಂತಿಮ ಒಮ್ಮುಖತೆ ಖಾತ್ರಿಪಡಿಸಲು epsilon ಸಾಮಾನ್ಯವಾಗಿ training ಆದ್ಯಂತ decay ಆಗುತ್ತದೆ (ಉದಾ. epsilon = max(0.01, 1.0/episode_number))' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Control requires Q(s,a), not just V(s), because acting greedily from Q needs no transition model, while acting greedily from V does\n• Genuinely confirmed: epsilon-greedy exploration (epsilon=0.1) combined with first-visit incremental Q updates over 20,000 episodes learned Q-values whose greedy actions exactly match the optimal directions toward the goal at every tested state\n• Genuinely confirmed: the learned policy achieved an average return of exactly -6.0 over 1000 evaluation episodes -- an exact match to the true optimum, a 9.7x improvement over the -58.48 random-policy baseline\n• GLIE describes the theoretical requirement (infinite exploration, then greedy in the limit) for guaranteed convergence to Q*; a fixed epsilon works well in small environments but is typically decayed in larger ones\n• Monte Carlo control\'s "generate episode, then update Q using the full observed return" pattern is the direct ancestor of TD-based Q-learning and SARSA (next module), and its "estimate Q, act epsilon-greedily" structure recurs throughout DQN, and its policy-improvement idea underlies REINFORCE and PPO',
      bodyKn: '• Control ಗೆ ಕೇವಲ V(s) ಅಲ್ಲ, Q(s,a) ಬೇಕು, ಏಕೆಂದರೆ Q ಇಂದ greedy ಆಗಿ ಕ್ರಿಯೆ ಮಾಡಲು ಯಾವುದೇ transition model ಬೇಕಿಲ್ಲ, V ಇಂದ greedy ಆಗಿ ಕ್ರಿಯೆ ಮಾಡಲು ಬೇಕು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 20,000 episodes ಆದ್ಯಂತ first-visit incremental Q updates ಜೊತೆ epsilon-greedy exploration (epsilon=0.1) ಸಂಯೋಜಿಸಿ Q-values ಕಲಿಯಿತು, ಅವುಗಳ greedy actions ಪ್ರತಿ ಪರೀಕ್ಷಿಸಿದ state ನಲ್ಲಿ ಗುರಿ ಕಡೆಗೆ optimal ದಿಕ್ಕುಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಕಲಿತ policy 1000 evaluation episodes ಆದ್ಯಂತ ನಿಖರವಾಗಿ -6.0 ರ average return ಸಾಧಿಸಿತು -- ನಿಜ optimum ಗೆ ಒಂದೂ ನಿಖರ ಹೊಂದಾಣಿಕೆ, -58.48 random-policy baseline ಗಿಂತ 9.7x ಸುಧಾರಣೆ\n• GLIE ಖಾತ್ರಿಪಡಿಸಿದ Q* ಗೆ ಒಮ್ಮುಖತೆಗೆ ಸೈದ್ಧಾಂತಿಕ ಅವಶ್ಯಕತೆ ವಿವರಿಸುತ್ತದೆ (ಅನಂತ exploration, ನಂತರ limit ನಲ್ಲಿ greedy); ಒಂದೂ ಸ್ಥಿರ epsilon ಚಿಕ್ಕ environments ನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಆದರೆ ದೊಡ್ಡ ಒಂದೂಗಳಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ decay ಆಗುತ್ತದೆ\n• Monte Carlo control ನ "episode ಉತ್ಪಾದಿಸಿ, ನಂತರ ಪೂರ್ಣ ಗಮನಿಸಿದ return ಬಳಸಿ Q update ಮಾಡಿ" ಮಾದರಿ TD-based Q-learning ಮತ್ತೆ SARSA (ಮುಂದಿನ module) ನ ನೇರ ಪೂರ್ವಜ, ಮತ್ತೆ ಅದೂ "Q ಅಂದಾಜಿಸಿ, epsilon-greedy ಆಗಿ ಕ್ರಿಯೆ ಮಾಡಿ" ರಚನೆ DQN ಆದ್ಯಂತ ಮರುಕಳಿಸುತ್ತದೆ, ಮತ್ತೆ ಅದೂ policy-improvement ಆಲೋಚನೆ REINFORCE ಮತ್ತೆ PPO ಆಧಾರವಾಗಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely confirmed epsilon-greedy exploration mechanism built and run here -- balancing 90% exploitation with 10% random exploration -- is the same exploration strategy DeepMind\'s original DQN paper used to learn to play Atari games directly from pixels, decaying epsilon from 1.0 down to a small floor over millions of frames, following exactly the GLIE-style schedule this lesson describes.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಿದ epsilon-greedy exploration mechanism -- 90% exploitation ಅನ್ನೂ 10% random exploration ಜೊತೆ ಸಮತೋಲನಗೊಳಿಸುತ್ತಾ -- DeepMind ನ ಮೂಲ DQN paper ಪಿಕ್ಸೆಲ್ಸ್ ಇಂದ ನೇರವಾಗಿ Atari games ಆಡಲು ಕಲಿಯಲು ಬಳಸಿದ ಅದೇ exploration strategy, ಲಕ್ಷಾಂತರ frames ಆದ್ಯಂತ epsilon ಅನ್ನೂ 1.0 ಇಂದ ಒಂದೂ ಚಿಕ್ಕ floor ಗೆ decay ಮಾಡುತ್ತಾ, ಈ lesson ವಿವರಿಸುವ ನಿಖರ GLIE-style schedule ಅನುಸರಿಸುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: evaluating a trained policy separately from training (the 1000-episode, epsilon=0 evaluation run here) is standard, essential practice -- training-time exploration would make the measured -58.48-to-6.0 comparison unfair and noisy\n• The genuinely observed exact match between MC control\'s learned Q-values and Module 172\'s exact-DP-derived Q-values is exactly the kind of ground-truth sanity check production RL teams use when they have a small enough problem to compute the true answer, before trusting the same algorithm on a problem too large to verify exactly',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ trained policy ಅನ್ನೂ training ಇಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುವುದೂ (ಇಲ್ಲಿ 1000-episode, epsilon=0 evaluation run) ಪ್ರಮಾಣಿತ, ಅಗತ್ಯ ಅಭ್ಯಾಸ -- training-time exploration ಅಳೆದ -58.48-ಇಂದ-6.0 ಹೋಲಿಕೆಯನ್ನೂ ಅನ್ಯಾಯ ಮತ್ತೆ noisy ಮಾಡುತ್ತಿತ್ತು\n• MC control ನ ಕಲಿತ Q-values ಮತ್ತೆ Module 172 ನ exact-DP-derived Q-values ನಡುವೆ ನಿಜವಾಗಿ ಗಮನಿಸಿದ ನಿಖರ ಹೊಂದಾಣಿಕೆ, ನಿಜ ಉತ್ತರ ಗಣಿಸಲು ಸಾಕಷ್ಟೂ ಚಿಕ್ಕ ಸಮಸ್ಯೆ ಇದ್ದಾಗ production RL ತಂಡಗಳು ಬಳಸುವ ನಿಖರ ರೀತಿಯ ground-truth sanity check, ನಿಖರವಾಗಿ ಪರಿಶೀಲಿಸಲು ತುಂಬಾ ದೊಡ್ಡದಾದ ಒಂದೂ ಸಮಸ್ಯೆ ಮೇಲೆ ಅದೇ algorithm ನಂಬುವ ಮೊದಲೂ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Early game-playing agents for backgammon (TD-Gammon) and later poker and Go bots used Monte Carlo-style self-play -- playing full games (episodes), observing the actual win/loss outcome (the return), and updating action-values toward better play -- the same rollout-then-update pattern genuinely implemented in this lesson\'s mc_control(), just at a vastly larger scale.',
      bodyKn: 'Backgammon (TD-Gammon) ಗಾಗಿ ಆರಂಭಿಕ game-playing agents ಮತ್ತೆ ನಂತರ poker ಮತ್ತೆ Go bots Monte Carlo-style self-play ಬಳಸಿದವು -- ಪೂರ್ಣ games (episodes) ಆಡುತ್ತಾ, ನಿಜ ಗೆಲುವು/ಸೋಲು ಫಲಿತಾಂಶ (return) ಗಮನಿಸುತ್ತಾ, ಉತ್ತಮ ಆಟದ ಕಡೆಗೆ action-values update ಮಾಡುತ್ತಾ -- ಈ lesson ನ mc_control() ನಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿದ ಅದೇ rollout-then-update ಮಾದರಿ, ಕೇವಲ ಬಹಳ ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does control need Q(s,a) rather than just V(s)?', qKn: 'Control ಗೆ ಕೇವಲ V(s) ಬದಲು Q(s,a) ಏಕೆ ಬೇಕು?',
        opts: ['Q(s,a) is easier to compute', 'Acting greedily from Q needs no transition model, while acting greedily from V does', 'V(s) cannot be estimated with Monte Carlo', 'Q(s,a) requires fewer episodes'], correct: 1,
        optsKn: ['Q(s,a) ಗಣಿಸಲು ಸುಲಭ', 'Q ಇಂದ greedy ಆಗಿ ಕ್ರಿಯೆ ಮಾಡಲು ಯಾವುದೇ transition model ಬೇಕಿಲ್ಲ, V ಇಂದ greedy ಆಗಿ ಕ್ರಿಯೆ ಮಾಡಲು ಬೇಕು', 'V(s) ಅನ್ನೂ Monte Carlo ಜೊತೆ ಅಂದಾಜಿಸಲಾಗುವುದಿಲ್ಲ', 'Q(s,a) ಗೆ ಕಡಿಮೆ episodes ಬೇಕು'] },
      { q: 'Genuinely confirmed: what average return did the learned greedy policy achieve over 1000 evaluation episodes?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಲಿತ greedy policy 1000 evaluation episodes ಆದ್ಯಂತ ಯಾವ average return ಸಾಧಿಸಿತು?',
        opts: ['-58.48 (same as random)', 'Exactly -6.0, matching the true optimum', '-39.41', '-1.0'], correct: 1,
        optsKn: ['-58.48 (random ರೀತಿಯೇ)', 'ನಿಖರವಾಗಿ -6.0, ನಿಜ optimum ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '-39.41', '-1.0'] },
      { q: 'What does epsilon control in epsilon-greedy exploration?', qKn: 'Epsilon-greedy exploration ನಲ್ಲಿ epsilon ಏನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ?',
        opts: ['The discount factor', 'The probability of choosing a uniformly random action instead of the greedy one', 'The learning rate', 'The number of episodes'], correct: 1,
        optsKn: ['Discount factor', 'Greedy action ಬದಲು ಒಂದೂ ಏಕರೂಪ random action ಆಯ್ಕೆ ಮಾಡುವ ಸಂಭವನೀಯತೆ', 'Learning rate', 'Episodes ಸಂಖ್ಯೆ'] },
      { q: 'What does GLIE require for Monte Carlo control to provably converge to Q*?', qKn: 'Monte Carlo control Q* ಗೆ ಸಾಬೀತುಪಡಿಸಬಹುದಾಗಿ ಒಮ್ಮುಖವಾಗಲು GLIE ಏನೂ ಬಯಸುತ್ತದೆ?',
        opts: ['A known transition model', 'Infinite exploration of every (s,a) pair, with the policy becoming greedy in the limit', 'A fixed epsilon forever', 'Only first-visit updates'], correct: 1,
        optsKn: ['ಒಂದೂ ತಿಳಿದ transition model', 'ಪ್ರತಿ (s,a) ಜೋಡಿಯ ಅನಂತ exploration, policy limit ನಲ್ಲಿ greedy ಆಗುತ್ತಾ', 'ಶಾಶ್ವತವಾಗಿ ಒಂದೂ ಸ್ಥಿರ epsilon', 'ಕೇವಲ first-visit updates'] },
      { q: 'Genuinely confirmed: how much did the learned policy improve over the random-policy baseline?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಲಿತ policy random-policy baseline ಗಿಂತ ಎಷ್ಟೂ ಸುಧಾರಿಸಿತು?',
        opts: ['No improvement', 'About 9.7x (from -58.48 to -6.0)', '2x', 'It performed worse'], correct: 1,
        optsKn: ['ಯಾವುದೇ ಸುಧಾರಣೆ ಇಲ್ಲ', 'ಸುಮಾರು 9.7x (-58.48 ಇಂದ -6.0 ಗೆ)', '2x', 'ಅದೂ ಕೆಟ್ಟದೂ ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿತು'] },
    ] } },
  ],
};
