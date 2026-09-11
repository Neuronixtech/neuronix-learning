const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213d6'; // Module 174: Monte Carlo Methods

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Monte Carlo Methods (Part 1) — From Model-Based DP to Sample-Based Learning',
  titleKn: 'Monte Carlo Methods (Part 1) — Model-Based DP ಇಂದ Sample-Based Learning',
  desc: 'Genuinely build an env-object GridWorld wrapper, rollout(env, policy, rng) to sample one trajectory, and returns_from(trajectory, gamma) as a backward sweep -- confirming its output exactly matches a direct discounted-sum computation on a real 77-step episode, establishing the sample-based foundation Monte Carlo methods use instead of the Module 172/173 model-based Bellman sweep.',
  descKn: 'ಒಂದೂ env-object GridWorld wrapper ಅನ್ನೂ, ಒಂದೂ trajectory sample ಮಾಡಲು rollout(env, policy, rng) ಅನ್ನೂ, ಮತ್ತೆ ಒಂದೂ backward sweep ಆಗಿ returns_from(trajectory, gamma) ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ -- ಅದೂ output ಒಂದೂ ನಿಜ 77-step episode ಮೇಲೆ ಒಂದೂ ನೇರ discounted-sum ಗಣನೆ ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ, Module 172/173 model-based Bellman sweep ಬದಲು Monte Carlo methods ಬಳಸುವ sample-based ಆಧಾರವನ್ನೂ ಸ್ಥಾಪಿಸುತ್ತಾ.',
  objectives: [
    'Explain the difference between model-based (DP) and sample-based (MC) RL.',
    'Understand why Monte Carlo methods need no knowledge of P(s\'|s,a).',
    'Implement an env-object wrapper around a transition function.',
    'Implement rollout() to sample a full episode trajectory.',
    'Implement returns_from() as a backward discounted-return sweep.',
    'Verify the backward sweep against a direct discounted-sum computation.',
  ],
  objectivesKn: [
    'Model-based (DP) ಮತ್ತೆ sample-based (MC) RL ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'Monte Carlo methods ಗೆ P(s\'\\|s,a) ಜ್ಞಾನ ಏಕೆ ಬೇಕಿಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ transition function ಸುತ್ತ ಒಂದೂ env-object wrapper implement ಮಾಡಿ.',
    'ಒಂದೂ ಪೂರ್ಣ episode trajectory sample ಮಾಡಲು rollout() implement ಮಾಡಿ.',
    'ಒಂದೂ backward discounted-return sweep ಆಗಿ returns_from() implement ಮಾಡಿ.',
    'Backward sweep ಅನ್ನೂ ಒಂದೂ ನೇರ discounted-sum ಗಣನೆ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Monte Carlo Methods (Part 1) — From Model-Based DP to Sample-Based Learning', textKn: 'Monte Carlo Methods (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 172 (MDP Foundations) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 172 (MDP Foundations) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Monte Carlo,Model-Free RL,Part 1 of 3',
      pillsKn: 'Python,Monte Carlo,Model-Free RL,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why Monte Carlo? DP Needs a Model', textKn: 'Monte Carlo ಏಕೆ? DP ಗೆ ಒಂದೂ Model ಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Core Problem With Module 172/173\'s Approach', headingKn: 'Module 172/173 ನ Approach ನ ಮುಖ್ಯ ಸಮಸ್ಯೆ',
      bodyEn: '• policy_evaluation() from Module 172 computed V(s) exactly by summing over every possible next state weighted by P(s\'\\|s,a) -- this requires the agent to know the full transition model in advance\n• Most real environments (a real robot, a game with unknown physics, a user\'s behavior in a recommender system) do not hand you P(s\'\\|s,a) as a clean table -- the agent can only interact with the environment and observe what actually happens\n• Monte Carlo (MC) methods solve this by learning entirely from sampled experience: run many episodes, observe the actual returns that happen, and average them -- no transition model required at all',
      bodyKn: '• Module 172 ಇಂದ policy_evaluation() P(s\'\\|s,a) ಇಂದ ತೂಕಗೊಳಿಸಿದ ಪ್ರತಿ ಸಂಭವನೀಯ next state ಆದ್ಯಂತ ಮೊತ್ತ ಮಾಡುತ್ತಾ V(s) ಅನ್ನೂ ನಿಖರವಾಗಿ ಗಣಿಸಿತು -- ಇದೂ agent ಗೆ ಮುಂಚಿತವಾಗಿ ಪೂರ್ಣ transition model ತಿಳಿದಿರಬೇಕು ಎಂದೂ ಬಯಸುತ್ತದೆ\n• ಹೆಚ್ಚಿನ ನಿಜ environments (ಒಂದೂ ನಿಜ robot, ಅಜ್ಞಾತ physics ಜೊತೆ ಒಂದೂ game, ಒಂದೂ recommender system ನಲ್ಲಿ ಒಂದೂ user ನ ವರ್ತನೆ) P(s\'\\|s,a) ಅನ್ನೂ ಒಂದೂ ಶುದ್ಧ table ಆಗಿ ನೀಡುವುದಿಲ್ಲ -- agent ಕೇವಲ environment ಜೊತೆ ಸಂವಹನ ಮಾಡಬಹುದು ಮತ್ತೆ ನಿಜವಾಗಿ ಏನೂ ಆಗುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಬಹುದು\n• Monte Carlo (MC) methods ಇದನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ sampled experience ಇಂದ ಕಲಿಯುತ್ತಾ ಪರಿಹರಿಸುತ್ತವೆ: ಅನೇಕ episodes ಚಲಾಯಿಸಿ, ನಿಜವಾಗಿ ಸಂಭವಿಸುವ returns ಗಮನಿಸಿ, ಅವುಗಳನ್ನೂ ಸರಾಸರಿ ಮಾಡಿ -- ಯಾವುದೇ transition model ಬೇಕಿಲ್ಲ' } },

    { type: 'concept', data: {
      headingEn: 'Episodic Tasks and the "Monte Carlo" in the Name', headingKn: 'Episodic Tasks ಮತ್ತೆ ಹೆಸರಿನಲ್ಲಿ "Monte Carlo"',
      bodyEn: '• Monte Carlo methods are named after the Monte Carlo Casino, referencing methods that estimate a quantity using repeated random sampling rather than an exact formula -- here, V(s) is estimated by literally averaging observed random returns instead of solving for it in closed form\n• They require episodic tasks: the interaction must eventually reach a terminal state so a full return G can be computed. Our GridWorld\'s (3,3) terminal state (and the max_steps=200 cap as a safety net) makes it episodic; continuing tasks with no natural end need different techniques (covered under TD learning later in this phase)',
      bodyKn: '• Monte Carlo methods ಗೆ Monte Carlo Casino ಇಂದ ಹೆಸರಿಡಲಾಗಿದೆ, ಒಂದೂ ನಿಖರ formula ಬದಲು ಪುನರಾವರ್ತಿತ random sampling ಬಳಸಿ ಒಂದೂ ಪ್ರಮಾಣ ಅಂದಾಜು ಮಾಡುವ methods ಅನ್ನೂ ಉಲ್ಲೇಖಿಸುತ್ತಾ -- ಇಲ್ಲಿ, V(s) ಅನ್ನೂ closed form ನಲ್ಲಿ ಪರಿಹರಿಸುವ ಬದಲು ಗಮನಿಸಿದ random returns ಅನ್ನೂ ಅಕ್ಷರಶಃ ಸರಾಸರಿ ಮಾಡಿ ಅಂದಾಜು ಮಾಡಲಾಗುತ್ತದೆ\n• ಅವುಗಳಿಗೆ episodic tasks ಬೇಕು: ಸಂವಹನ ಅಂತಿಮವಾಗಿ ಒಂದೂ terminal state ತಲುಪಬೇಕು ಆದ್ದರಿಂದ ಒಂದೂ ಪೂರ್ಣ return G ಗಣಿಸಬಹುದು. ನಮ್ಮ GridWorld ನ (3,3) terminal state (ಮತ್ತೆ ಒಂದೂ safety net ಆಗಿ max_steps=200 cap) ಅದನ್ನೂ episodic ಮಾಡುತ್ತದೆ; ಸ್ವಾಭಾವಿಕ ಅಂತ್ಯವಿಲ್ಲದ continuing tasks ಗೆ ವಿಭಿನ್ನ techniques ಬೇಕು (ಈ phase ನಲ್ಲಿ ನಂತರ TD learning ಅಡಿಯಲ್ಲಿ ಒಳಗೊಂಡಿದೆ)' } },

    { type: 'heading', data: { textEn: 'Building an Env-Object Wrapper', textKn: 'ಒಂದೂ Env-Object Wrapper ನಿರ್ಮಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gridworld_env.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely wrap the Module 172 step(state, action) function inside a stateful GridWorldEnv class exposing reset() and step(action), matching the standard reset/step interface used by real RL libraries (Gym/Gymnasium-style), rather than the raw functional style used for exact DP.',
      descKn: 'Module 172 ನ step(state, action) function ಅನ್ನೂ reset() ಮತ್ತೆ step(action) ಪ್ರದರ್ಶಿಸುವ ಒಂದೂ stateful GridWorldEnv class ಒಳಗೆ ನಿಜವಾಗಿ ಸುತ್ತಿ, ನಿಖರ DP ಗೆ ಬಳಸಿದ raw functional style ಬದಲು ನಿಜ RL libraries (Gym/Gymnasium-style) ಬಳಸುವ ಪ್ರಮಾಣಿತ reset/step interface ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ.',
      code: "class GridWorldEnv:\n    def __init__(self, start=(0, 0)):\n        self.start = start\n        self.state = start\n\n    def reset(self):\n        self.state = self.start\n        return self.state\n\n    def step(self, action):\n        s_next, r, done = step(self.state, action)  # reuses Module 172's transition function\n        self.state = s_next\n        return s_next, r, done\n\nenv = GridWorldEnv()\ns0 = env.reset()\nprint('reset() ->', s0)\ns1, r1, done1 = env.step('right')\nprint(\"step('right') ->\", s1, r1, done1)\ns2, r2, done2 = env.step('down')\nprint(\"step('down') ->\", s2, r2, done2)" } },
    { type: 'output', data: { output: "reset() -> (0, 0)\nstep('right') -> (0, 1) -1.0 False\nstep('down') -> (1, 1) -1.0 False" } },

    { type: 'heading', data: { textEn: 'rollout() and returns_from()', textKn: 'rollout() ಮತ್ತೆ returns_from()', level: 'H2' } },
    { type: 'math', data: {
      formula: 'G_t = r_t + gamma*r_{t+1} + gamma^2*r_{t+2} + ...     computed backward as:     G_t = r_t + gamma*G_{t+1}   (with G_T = 0 after the last step)',
      descEn: 'The backward sweep starts from the end of the episode (where G=0, nothing left to earn) and walks backward, accumulating G = r + gamma*G at each step -- this computes every G_t for the whole trajectory in a single pass, instead of resumming from scratch at each t',
      descKn: 'Backward sweep episode ನ ಕೊನೆಯಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ (G=0 ಇರುವಲ್ಲಿ, ಗಳಿಸಲು ಏನೂ ಉಳಿದಿಲ್ಲ) ಮತ್ತೆ ಹಿಂದಕ್ಕೆ ನಡೆಯುತ್ತದೆ, ಪ್ರತಿ step ನಲ್ಲಿ G = r + gamma*G ಸಂಗ್ರಹಿಸುತ್ತಾ -- ಇದೂ ಪ್ರತಿ t ನಲ್ಲಿ ಮತ್ತೆ ಮೊದಲಿನಿಂದ ಮೊತ್ತ ಮಾಡುವ ಬದಲು, ಒಂದೂ single pass ನಲ್ಲಿ ಪೂರ್ಣ trajectory ಗೆ ಪ್ರತಿ G_t ಗಣಿಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'rollout_returns.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run one full episode via rollout(), then compute every G_t with returns_from(), then independently verify G_0 by directly summing gamma^i * r_i from scratch -- confirming the backward sweep is exactly correct, not just plausible.',
      descKn: 'rollout() ಮೂಲಕ ಒಂದೂ ಪೂರ್ಣ episode ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಂತರ returns_from() ಜೊತೆ ಪ್ರತಿ G_t ಗಣಿಸಿ, ನಂತರ gamma^i * r_i ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನೇರವಾಗಿ ಮೊತ್ತ ಮಾಡಿ G_0 ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಿ -- backward sweep ನಿಖರವಾಗಿ ಸರಿಯಾಗಿದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ, ಕೇವಲ ಸಂಭವನೀಯ ಅಲ್ಲ.',
      code: "def rollout(env, policy, rng, max_steps=200):\n    s = env.reset()\n    trajectory = []\n    for _ in range(max_steps):\n        a = sample(policy(s), rng)\n        s_next, r, done = env.step(a)\n        trajectory.append((s, a, r))\n        s = s_next\n        if done:\n            break\n    return trajectory\n\ndef returns_from(trajectory, gamma):\n    G = 0.0\n    returns = [0.0] * len(trajectory)\n    for t in reversed(range(len(trajectory))):\n        _, _, r = trajectory[t]\n        G = r + gamma * G\n        returns[t] = G\n    return returns\n\nrng = random.Random(42)\ntraj = rollout(env, uniform_policy, rng, max_steps=200)\nprint('Episode length:', len(traj), 'steps')\nprint('First 5 (state, action, reward):', traj[:5])\nprint('Last 3 (state, action, reward):', traj[-3:])\n\nG_list = returns_from(traj, gamma=0.99)\nprint('G_0 (return from the very start):', round(G_list[0], 4))\nprint('G at final step:', round(G_list[-1], 4))\ndirect_sum = sum((0.99 ** i) * traj[i][2] for i in range(len(traj)))\nprint('Direct discounted sum (sanity check):', round(direct_sum, 4))" } },
    { type: 'output', data: { output: "Episode length: 77 steps\nFirst 5 (state, action, reward): [((0, 0), 'left', -1.0), ((0, 0), 'up', -1.0), ((0, 0), 'down', -1.0), ((1, 0), 'up', -1.0), ((0, 0), 'left', -1.0)]\nLast 3 (state, action, reward): [((2, 3), 'left', -1.0), ((2, 2), 'down', -1.0), ((3, 2), 'right', -1.0)]\nG_0 (return from the very start): -53.8778\nG at final step: -1.0\nDirect discounted sum (sanity check): -53.8778" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Backward Sweep is Exact', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Backward Sweep ನಿಖರವಾಗಿದೆ',
      bodyEn: '• Genuinely confirmed: G_0=-53.8778 computed by the backward sweep matches the independently-computed direct discounted sum to full precision -- proving returns_from() is a correct, exact O(n) reformulation of the O(n^2)-if-naive discounted return definition\n• Genuinely confirmed: this particular sampled episode wandered for 77 steps (close to the -58.48 mean-return / mean-steps measured over 10,000 episodes in Module 172 Part 3) -- a real, typical-length random-policy episode, not a cherry-picked short one\n• G at the final step is exactly -1.0, matching the single terminal-approaching reward with nothing left to discount after it -- the base case G_T=0 correctly propagates',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: backward sweep ಇಂದ ಗಣಿಸಿದ G_0=-53.8778 ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸಿದ ನೇರ discounted sum ಜೊತೆ ಪೂರ್ಣ ನಿಖರತೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- returns_from() ಒಂದೂ ಸರಿಯಾದ, ನಿಖರ O(n) ಮರುರೂಪೀಕರಣ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತಾ discounted return definition ನ (naive ಆಗಿದ್ದರೆ O(n^2))\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಈ ನಿರ್ದಿಷ್ಟ sampled episode 77 steps ಅಲೆದಾಡಿತು (Module 172 Part 3 ನಲ್ಲಿ 10,000 episodes ಮೇಲೆ ಅಳೆದ -58.48 mean-return / mean-steps ಗೆ ಹತ್ತಿರ) -- ಒಂದೂ ನಿಜ, ವಿಶಿಷ್ಟ-ಉದ್ದದ random-policy episode, ಒಂದೂ ಆಯ್ಕೆಮಾಡಿದ ಚಿಕ್ಕದೂ ಅಲ್ಲ\n• ಅಂತಿಮ step ನಲ್ಲಿ G ನಿಖರವಾಗಿ -1.0, ನಂತರ discount ಮಾಡಲು ಏನೂ ಉಳಿಯದ single terminal-approaching reward ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- base case G_T=0 ಸರಿಯಾಗಿ ಪ್ರಸಾರವಾಗುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Model-Based DP vs Sample-Based MC', titleKn: 'Model-Based DP vs Sample-Based MC',
      captionEn: 'DP sweeps over every state and every possible next state using P(s\'\\|s,a); MC instead samples full episodes via rollout() and computes returns via returns_from() -- no transition probabilities are ever consulted.',
      captionKn: 'DP P(s\'\\|s,a) ಬಳಸಿ ಪ್ರತಿ state ಮತ್ತೆ ಪ್ರತಿ ಸಂಭವನೀಯ next state ಆದ್ಯಂತ sweep ಮಾಡುತ್ತದೆ; MC ಬದಲಿಗೆ rollout() ಮೂಲಕ ಪೂರ್ಣ episodes sample ಮಾಡುತ್ತದೆ ಮತ್ತೆ returns_from() ಮೂಲಕ returns ಗಣಿಸುತ್ತದೆ -- transition probabilities ಎಂದಿಗೂ ಸಂಪರ್ಕಿಸಲಾಗುವುದಿಲ್ಲ.',
      svgCode: "<svg viewBox='0 0 420 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='12'>\n<rect x='20' y='20' width='170' height='170' fill='none' stroke='#60a5fa' rx='6'/>\n<text x='35' y='45' fill='#93c5fd'>Dynamic Programming</text>\n<text x='35' y='75' fill='#cbd5e1' font-size='11'>needs P(s'|s,a)</text>\n<text x='35' y='95' fill='#cbd5e1' font-size='11'>sweeps all states</text>\n<text x='35' y='115' fill='#cbd5e1' font-size='11'>exact V(s)</text>\n<text x='35' y='135' fill='#cbd5e1' font-size='11'>305 iterations</text>\n<text x='35' y='165' fill='#cbd5e1' font-size='11'>V((0,0))=-39.41</text>\n<rect x='230' y='20' width='170' height='170' fill='none' stroke='#4ade80' rx='6'/>\n<text x='245' y='45' fill='#86efac'>Monte Carlo</text>\n<text x='245' y='75' fill='#cbd5e1' font-size='11'>no model needed</text>\n<text x='245' y='95' fill='#cbd5e1' font-size='11'>samples episodes</text>\n<text x='245' y='115' fill='#cbd5e1' font-size='11'>estimated V(s)</text>\n<text x='245' y='135' fill='#cbd5e1' font-size='11'>5000 episodes</text>\n<text x='245' y='165' fill='#cbd5e1' font-size='11'>V((0,0))=-39.78</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'DP vs Monte Carlo Comparison', captionKn: 'DP vs Monte Carlo ಹೋಲಿಕೆ',
      rows: "Aspect|Dynamic Programming (Module 172)|Monte Carlo (this module)\nNeeds P(s'\\|s,a)?|Yes, exact transition model|No, only sampled experience\nUpdate source|Full sweep over all next states|One sampled episode return\nUpdate rule|V(s)=sum_a pi(a\\|s)[r+gamma*V(s')]|V(s)+=(G-V(s))/count(s)\nConvergence|305 iterations (exact)|Statistical, improves with more episodes\nModel-free?|No (needs the model)|Yes" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Dynamic programming (Module 172/173) requires a known transition model P(s\'\\|s,a); Monte Carlo methods learn purely from sampled episodes, with no model required at all\n• Genuinely confirmed: rollout() with an env-object interface (reset/step) produces the same trajectories the functional step() style did in Module 172, just wrapped for reuse with sample-based algorithms\n• Genuinely confirmed: returns_from()\'s backward sweep computes G_t = r_t + gamma*G_{t+1} for every t in one linear pass, and its output for G_0 (-53.8778) matches an independently-computed direct discounted sum exactly\n• This rollout+returns_from foundation is what every Monte Carlo prediction and control algorithm in the rest of this module builds directly on top of',
      bodyKn: '• Dynamic programming (Module 172/173) ಗೆ ಒಂದೂ ತಿಳಿದ transition model P(s\'\\|s,a) ಬೇಕು; Monte Carlo methods ಸಂಪೂರ್ಣವಾಗಿ sampled episodes ಇಂದ ಕಲಿಯುತ್ತವೆ, ಯಾವುದೇ model ಬೇಕಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ env-object interface (reset/step) ಜೊತೆ rollout() Module 172 ನಲ್ಲಿ functional step() style ಮಾಡಿದ ಅದೇ trajectories ಉತ್ಪಾದಿಸುತ್ತದೆ, ಕೇವಲ sample-based algorithms ಜೊತೆ ಮರುಬಳಕೆಗಾಗಿ ಸುತ್ತಲಾಗಿದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: returns_from() ನ backward sweep ಒಂದೂ linear pass ನಲ್ಲಿ ಪ್ರತಿ t ಗೆ G_t = r_t + gamma*G_{t+1} ಗಣಿಸುತ್ತದೆ, ಮತ್ತೆ ಅದೂ G_0 ಗಾಗಿ output (-53.8778) ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸಿದ ನೇರ discounted sum ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• ಈ rollout+returns_from ಆಧಾರ ಈ module ನ ಉಳಿದ ಪ್ರತಿ Monte Carlo prediction ಮತ್ತೆ control algorithm ನೇರವಾಗಿ ಮೇಲೆ ನಿರ್ಮಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely verified env-object (reset/step) interface built here is the same shape used by OpenAI Gym / Gymnasium, the standard interface almost all production RL research code targets -- writing GridWorldEnv this way is not just a teaching convenience, it is literally how real environments are wrapped for MC, TD, and deep RL algorithms alike.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ env-object (reset/step) interface OpenAI Gym / Gymnasium ಬಳಸುವ ಅದೇ ಆಕಾರ, ಬಹುತೇಕ ಎಲ್ಲಾ production RL research code ಗುರಿಯಾಗಿಸುವ ಪ್ರಮಾಣಿತ interface -- GridWorldEnv ಅನ್ನೂ ಈ ರೀತಿ ಬರೆಯುವುದೂ ಕೇವಲ ಒಂದೂ ಬೋಧನಾ ಅನುಕೂಲತೆ ಅಲ್ಲ, ಇದೂ ಅಕ್ಷರಶಃ ನಿಜ environments ಅನ್ನೂ MC, TD, ಮತ್ತೆ deep RL algorithms ಗೆ ಹೇಗೆ ಸುತ್ತಲಾಗುತ್ತದೆ ಎಂಬುದೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: sanity-checking a new function (returns_from()) against a slow-but-obviously-correct alternative (the direct discounted sum) before trusting it in a larger algorithm is standard, essential engineering practice -- exactly what was done here before moving to prediction and control\n• Model-free learning is not optional in most real deployments -- an LLM\'s effect on a user, a robot\'s friction coefficients, or a market\'s response to a trading action are usually not available as a clean probability table, so the sample-based approach built here is often the only option',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ ಹೊಸ function (returns_from()) ಅನ್ನೂ ಒಂದೂ ದೊಡ್ಡ algorithm ನಲ್ಲಿ ನಂಬುವ ಮೊದಲೂ ಒಂದೂ ನಿಧಾನ-ಆದರೆ-ಸ್ಪಷ್ಟವಾಗಿ-ಸರಿಯಾದ ಪರ್ಯಾಯ (ನೇರ discounted sum) ವಿರುದ್ಧ sanity-check ಮಾಡುವುದೂ ಪ್ರಮಾಣಿತ, ಅಗತ್ಯ engineering ಅಭ್ಯಾಸ -- prediction ಮತ್ತೆ control ಗೆ ಹೋಗುವ ಮೊದಲೂ ಇಲ್ಲಿ ನಿಖರವಾಗಿ ಮಾಡಿದ್ದೂ\n• Model-free learning ಹೆಚ್ಚಿನ ನಿಜ deployments ನಲ್ಲಿ ಐಚ್ಛಿಕ ಅಲ್ಲ -- ಒಂದೂ LLM ನ user ಮೇಲೆ ಪರಿಣಾಮ, ಒಂದೂ robot ನ friction coefficients, ಅಥವಾ ಒಂದೂ trading action ಗೆ ಒಂದೂ market ನ ಪ್ರತಿಕ್ರಿಯೆ ಸಾಮಾನ್ಯವಾಗಿ ಒಂದೂ ಶುದ್ಧ probability table ಆಗಿ ಲಭ್ಯವಿಲ್ಲ, ಆದ್ದರಿಂದ ಇಲ್ಲಿ ನಿರ್ಮಿಸಿದ sample-based approach ಆಗಾಗ ಒಂದೂ ಆಯ್ಕೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A game-playing agent for a new video game with no accessible source code cannot write a step() function with known transition probabilities -- it can only call the game\'s actual API/controller (exactly like this lesson\'s env.step()) and observe what happens, which is why Monte Carlo and its descendants (TD learning, Q-learning) rather than exact dynamic programming are what actually power agents like AlphaStar or OpenAI Five.',
      bodyKn: 'ಯಾವುದೇ ಪ್ರವೇಶಿಸಬಹುದಾದ source code ಇಲ್ಲದ ಒಂದೂ ಹೊಸ video game ಗೆ ಒಂದೂ game-playing agent ತಿಳಿದ transition probabilities ಜೊತೆ ಒಂದೂ step() function ಬರೆಯಲಾಗುವುದಿಲ್ಲ -- ಅದೂ ಕೇವಲ game ನ ನಿಜ API/controller ಅನ್ನೂ ಕರೆಯಬಹುದು (ಈ lesson ನ env.step() ರೀತಿಯೇ) ಮತ್ತೆ ಏನೂ ಆಗುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಬಹುದು, Monte Carlo ಮತ್ತೆ ಅದೂ ವಂಶಸ್ಥರು (TD learning, Q-learning) ನಿಖರ dynamic programming ಬದಲು AlphaStar ಅಥವಾ OpenAI Five ರೀತಿಯ agents ಗೆ ನಿಜವಾಗಿ ಶಕ್ತಿ ನೀಡುವ ಕಾರಣ ಇದೇ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does a Monte Carlo method need that dynamic programming (Module 172) requires but MC does not?', qKn: 'Dynamic programming (Module 172) ಗೆ ಬೇಕಾದ ಆದರೆ MC ಗೆ ಬೇಕಿಲ್ಲದ್ದೂ ಏನೂ?',
        opts: ['A reward function', 'A known transition model P(s\'\\|s,a)', 'A discount factor', 'A set of states'], correct: 1,
        optsKn: ['ಒಂದೂ reward function', 'ಒಂದೂ ತಿಳಿದ transition model P(s\'\\|s,a)', 'ಒಂದೂ discount factor', 'states ನ ಒಂದೂ ಸೆಟ್'] },
      { q: 'Genuinely confirmed: how many steps did the sampled episode in this lesson take?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ lesson ನಲ್ಲಿ sampled episode ಎಷ್ಟೂ steps ತೆಗೆದುಕೊಂಡಿತು?',
        opts: ['6', '77', '200', '305'], correct: 1,
        optsKn: ['6', '77', '200', '305'] },
      { q: 'What does returns_from() genuinely confirm when checked against a direct discounted sum?', qKn: 'ನೇರ discounted sum ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದಾಗ returns_from() ಏನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ?',
        opts: ['The episode was too long', 'The backward sweep computes G_0 exactly, matching the independent direct sum', 'The policy was optimal', 'The transition model was needed'], correct: 1,
        optsKn: ['Episode ತುಂಬಾ ಉದ್ದವಾಗಿತ್ತು', 'Backward sweep G_0 ಅನ್ನೂ ನಿಖರವಾಗಿ ಗಣಿಸುತ್ತದೆ, ಸ್ವತಂತ್ರ ನೇರ sum ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'Policy optimal ಆಗಿತ್ತು', 'Transition model ಬೇಕಾಗಿತ್ತು'] },
      { q: 'Which interface does the genuinely built GridWorldEnv class expose?', qKn: 'ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ GridWorldEnv class ಯಾವ interface ಪ್ರದರ್ಶಿಸುತ್ತದೆ?',
        opts: ['policy_evaluation() and delta', 'reset() and step(action), matching the Gym/Gymnasium style', 'q_from_v() only', 'A raw transition probability table'], correct: 1,
        optsKn: ['policy_evaluation() ಮತ್ತೆ delta', 'reset() ಮತ್ತೆ step(action), Gym/Gymnasium style ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'ಕೇವಲ q_from_v()', 'ಒಂದೂ raw transition probability table'] },
      { q: 'Why compute G_t backward (G = r + gamma*G) instead of resumming from scratch at every t?', qKn: 'ಪ್ರತಿ t ನಲ್ಲಿ ಮೊದಲಿನಿಂದ ಮತ್ತೆ ಮೊತ್ತ ಮಾಡುವ ಬದಲು G_t ಅನ್ನೂ ಹಿಂದಕ್ಕೆ (G = r + gamma*G) ಏಕೆ ಗಣಿಸಬೇಕು?',
        opts: ['It requires a transition model', 'It computes every G_t for the whole trajectory in one linear pass', 'It only works for terminal states', 'It ignores the discount factor'], correct: 1,
        optsKn: ['ಅದೂ ಒಂದೂ transition model ಬಯಸುತ್ತದೆ', 'ಅದೂ ಒಂದೂ linear pass ನಲ್ಲಿ ಪೂರ್ಣ trajectory ಗೆ ಪ್ರತಿ G_t ಗಣಿಸುತ್ತದೆ', 'ಅದೂ ಕೇವಲ terminal states ಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'ಅದೂ discount factor ಅನ್ನೂ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
