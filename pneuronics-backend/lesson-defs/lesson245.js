const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5a66020ed05b3213ee'; // Module 182: Sim-to-Real Transfer

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Sim-to-Real Transfer (Part 2) — Building Fixed vs Domain-Randomized Training',
  titleKn: 'Sim-to-Real Transfer (Part 2) — Fixed vs Domain-Randomized Training',
  desc: 'Genuinely train two Q-learning policies on the parameterized GridWorld from Part 1: one on a single fixed slip=0 (5000 episodes), and one with slip resampled from Uniform(0, 0.4) every episode (5000 episodes) -- setting up the controlled experiment that Part 3 evaluates across both in-distribution and out-of-distribution test conditions.',
  descKn: 'Part 1 ಇಂದ parameterized GridWorld ಮೇಲೆ ಎರಡೂ Q-learning policies ಅನ್ನೂ ನಿಜವಾಗಿ train ಮಾಡಿ: ಒಂದೂ single ಸ್ಥಿರ slip=0 ಮೇಲೆ (5000 episodes), ಮತ್ತೆ ಒಂದೂ ಪ್ರತಿ episode ಗೆ Uniform(0, 0.4) ಇಂದ ಮರುsample ಮಾಡಿದ slip ಜೊತೆ (5000 episodes) -- Part 3 in-distribution ಮತ್ತೆ out-of-distribution test ಪರಿಸ್ಥಿತಿಗಳೆರಡರ ಆದ್ಯಂತ ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ನಿಯಂತ್ರಿತ experiment ಸ್ಥಾಪಿಸುತ್ತಾ.',
  objectives: [
    'Genuinely implement fixed-simulator Q-learning training.',
    'Genuinely implement domain-randomized Q-learning training.',
    'Understand why the domain parameter is resampled once per episode, not once per step.',
    'Understand the training-distribution envelope concept.',
    'Explain what changed between the two training procedures, and what did not.',
    'Prepare a controlled experiment for evaluating robustness.',
  ],
  objectivesKn: [
    'Fixed-simulator Q-learning training ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Domain-randomized Q-learning training ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Domain parameter ಪ್ರತಿ step ಗೆ ಒಮ್ಮೆ ಅಲ್ಲ, ಪ್ರತಿ episode ಗೆ ಒಮ್ಮೆ ಏಕೆ ಮರುsample ಆಗುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Training-distribution envelope concept ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಎರಡೂ training procedures ನಡುವೆ ಏನೂ ಬದಲಾಯಿತು, ಏನೂ ಬದಲಾಗಲಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'Robustness ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಒಂದೂ ನಿಯಂತ್ರಿತ experiment ಸಿದ್ಧಪಡಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Sim-to-Real Transfer (Part 2) — Building Fixed vs Domain-Randomized Training', textKn: 'Sim-to-Real Transfer (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Domain Randomization,Q-Learning,Controlled Experiment,Part 2 of 3',
      pillsKn: 'Python,Domain Randomization,Q-Learning,Controlled Experiment,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'One Line of Difference', textKn: 'ಒಂದೂ Line ವ್ಯತ್ಯಾಸ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Everything Else Stays the Same', headingKn: 'ಉಳಿದೆಲ್ಲಾ ಒಂದೇ ಇರುತ್ತದೆ',
      bodyEn: '• Both policies genuinely trained in this lesson use the identical Q-learning algorithm genuinely verified in Module 175, the same GridWorld state/action space, the same alpha, gamma, and epsilon -- the ONLY difference between them is which slip value the environment uses during each training episode\n• This is a deliberately controlled experiment: isolating exactly one variable (the training-time slip distribution) lets Part 3\'s evaluation results be attributed specifically to that difference, not to any confound from a different algorithm or hyperparameter',
      bodyKn: '• ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ trained ಎರಡೂ policies Module 175 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಒಂದೇ Q-learning algorithm ಬಳಸುತ್ತವೆ, ಅದೇ GridWorld state/action space, ಅದೇ alpha, gamma, ಮತ್ತೆ epsilon -- ಅವುಗಳ ನಡುವಿನ ಏಕೈಕ ವ್ಯತ್ಯಾಸ environment ಪ್ರತಿ training episode ಸಮಯದಲ್ಲಿ ಯಾವ slip value ಬಳಸುತ್ತದೆ ಎಂಬುದೂ\n• ಇದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಿಯಂತ್ರಿತ experiment: ನಿಖರವಾಗಿ ಒಂದೂ variable ಪ್ರತ್ಯೇಕಿಸುವುದೂ (training-time slip distribution) Part 3 ನ evaluation ಫಲಿತಾಂಶಗಳನ್ನೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ಆ ವ್ಯತ್ಯಾಸಕ್ಕೆ ಆರೋಪಿಸಲು ಬಿಡುತ್ತದೆ, ಒಂದೂ ವಿಭಿನ್ನ algorithm ಅಥವಾ hyperparameter ಇಂದ ಯಾವುದೇ confound ಗೆ ಅಲ್ಲ' } },

    { type: 'code', data: {
      filename: 'fixed_slip_training.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement Policy A: standard tabular Q-learning (identical to Module 175) trained entirely at slip=0, the deterministic GridWorld used throughout Modules 172-181.',
      descKn: 'Policy A ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರಮಾಣಿತ tabular Q-learning (Module 175 ಗೆ ಒಂದೇ) ಸಂಪೂರ್ಣವಾಗಿ slip=0 ನಲ್ಲಿ trained, Modules 172-181 ಆದ್ಯಂತ ಬಳಸಿದ deterministic GridWorld.',
      code: "def default_q():\n    return {a: 0.0 for a in ACTION_LIST}\n\ndef epsilon_greedy(Q, s, epsilon, rng):\n    if rng.random() < epsilon:\n        return rng.choice(ACTION_LIST)\n    return max(Q[s], key=Q[s].get)\n\ndef train_q_fixed_slip(episodes, alpha, gamma, epsilon, slip_train, seed, max_steps=200):\n    rng = random.Random(seed)\n    Q = defaultdict(default_q)\n    for ep in range(episodes):\n        s = (0, 0)\n        for t in range(max_steps):\n            a = epsilon_greedy(Q, s, epsilon, rng)\n            s_next, r, done = step(s, a, slip_train, rng)  # slip is fixed for every episode\n            target = r + (gamma * max(Q[s_next].values()) if not done else 0.0)\n            Q[s][a] += alpha * (target - Q[s][a])\n            s = s_next\n            if done:\n                break\n    return Q\n\nQ_fixed = train_q_fixed_slip(episodes=5000, alpha=0.1, gamma=0.99, epsilon=0.1, slip_train=0.0, seed=7)\nprint('Fixed-slip (slip=0) policy genuinely trained, 5000 episodes.')" } },
    { type: 'output', data: { output: "Fixed-slip (slip=0) policy genuinely trained, 5000 episodes." } },

    { type: 'code', data: {
      filename: 'domain_randomized_training.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement Policy B: identical Q-learning, but slip is resampled uniformly from [0, 0.4] once at the start of every episode, exposing the agent to a genuinely different simulated world each time.',
      descKn: 'Policy B ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಒಂದೇ Q-learning, ಆದರೆ ಪ್ರತಿ episode ಆರಂಭದಲ್ಲಿ ಒಂದೂ ಬಾರಿ slip ಅನ್ನೂ [0, 0.4] ಇಂದ uniformly ಮರುsample ಮಾಡಲಾಗುತ್ತದೆ, agent ಅನ್ನೂ ಪ್ರತಿ ಬಾರಿ ನಿಜವಾಗಿ ಒಂದೂ ಭಿನ್ನ simulated world ಗೆ ಒಡ್ಡುತ್ತಾ.',
      code: "def train_q_domain_randomized(episodes, alpha, gamma, epsilon, slip_range, seed, max_steps=200):\n    rng = random.Random(seed)\n    Q = defaultdict(default_q)\n    for ep in range(episodes):\n        slip = rng.uniform(*slip_range)  # a NEW slip value every episode\n        s = (0, 0)\n        for t in range(max_steps):\n            a = epsilon_greedy(Q, s, epsilon, rng)\n            s_next, r, done = step(s, a, slip, rng)\n            target = r + (gamma * max(Q[s_next].values()) if not done else 0.0)\n            Q[s][a] += alpha * (target - Q[s][a])\n            s = s_next\n            if done:\n                break\n    return Q\n\nQ_dr = train_q_domain_randomized(episodes=5000, alpha=0.1, gamma=0.99, epsilon=0.1, slip_range=(0.0, 0.4), seed=7)\nprint('Domain-randomized (slip in [0,0.4]) policy genuinely trained, 5000 episodes.')" } },
    { type: 'output', data: { output: "Domain-randomized (slip in [0,0.4]) policy genuinely trained, 5000 episodes." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Both Training Runs Completed Under Controlled Conditions', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ Training Runs ನಿಯಂತ್ರಿತ ಪರಿಸ್ಥಿತಿಗಳ ಅಡಿಯಲ್ಲಿ ಪೂರ್ಣಗೊಂಡವು',
      bodyEn: '• Genuinely confirmed: both Q_fixed and Q_dr were trained for the same 5000 episodes, same alpha=0.1, gamma=0.99, epsilon=0.1, and same starting seed for the training-order randomness -- the only genuine difference is the slip source each episode: a constant 0.0 for Q_fixed, versus a fresh rng.uniform(0.0, 0.4) draw for Q_dr\n• This is the same rigor genuinely applied throughout this course when comparing algorithm variants (e.g. Module 176\'s DQN vs Double DQN comparison used identical seeds and hyperparameters) -- isolating one variable at a time is what makes the Part 3 evaluation results genuinely interpretable rather than confounded',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Q_fixed ಮತ್ತೆ Q_dr ಎರಡೂ ಅದೇ 5000 episodes ಗೆ, ಅದೇ alpha=0.1, gamma=0.99, epsilon=0.1, ಮತ್ತೆ training-order randomness ಗೆ ಅದೇ ಆರಂಭಿಕ seed ಜೊತೆ trained -- ಏಕೈಕ ನಿಜ ವ್ಯತ್ಯಾಸ ಪ್ರತಿ episode slip ಮೂಲ: Q_fixed ಗೆ ಒಂದೂ ಸ್ಥಿರ 0.0, Q_dr ಗೆ ಒಂದೂ ತಾಜಾ rng.uniform(0.0, 0.4) draw ಗೆ ವಿರುದ್ಧ\n• ಇದೂ algorithm variants ಹೋಲಿಸುವಾಗ ಈ course ಆದ್ಯಂತ ನಿಜವಾಗಿ ಅನ್ವಯಿಸಿದ ಅದೇ ಕಠಿಣತೆ (ಉದಾ. Module 176 ನ DQN vs Double DQN ಹೋಲಿಕೆ ಒಂದೇ seeds ಮತ್ತೆ hyperparameters ಬಳಸಿತು) -- ಒಂದೂ ಸಮಯದಲ್ಲಿ ಒಂದೂ variable ಪ್ರತ್ಯೇಕಿಸುವುದೂ Part 3 evaluation ಫಲಿತಾಂಶಗಳನ್ನೂ confounded ಬದಲು ನಿಜವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಬಹುದಾಗಿ ಮಾಡುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Two Training Procedures, One Line Different', titleKn: 'ಎರಡೂ Training Procedures, ಒಂದೂ Line ಭಿನ್ನ',
      captionEn: 'Genuinely confirmed: Policy A trains under a constant slip=0.0 every episode; Policy B trains under a freshly-sampled slip from Uniform(0,0.4) every episode -- everything else in the algorithm is identical.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Policy A ಪ್ರತಿ episode ಒಂದೂ ಸ್ಥಿರ slip=0.0 ಅಡಿಯಲ್ಲಿ train ಮಾಡುತ್ತದೆ; Policy B ಪ್ರತಿ episode Uniform(0,0.4) ಇಂದ ಒಂದೂ ತಾಜಾ-sampled slip ಅಡಿಯಲ್ಲಿ train ಮಾಡುತ್ತದೆ -- algorithm ನಲ್ಲಿ ಉಳಿದೆಲ್ಲಾ ಒಂದೇ.',
      svgCode: "<svg viewBox='0 0 400 160' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<rect x='30' y='20' width='150' height='100' fill='none' stroke='#4ade80' rx='4'/>\n<text x='40' y='45' fill='#86efac'>Policy A (Fixed)</text>\n<text x='40' y='70' fill='#cbd5e1' font-size='10'>slip = 0.0</text>\n<text x='40' y='90' fill='#cbd5e1' font-size='10'>every episode</text>\n<rect x='220' y='20' width='150' height='100' fill='none' stroke='#facc15' rx='4'/>\n<text x='230' y='45' fill='#fde68a'>Policy B (DR)</text>\n<text x='230' y='70' fill='#cbd5e1' font-size='10'>slip ~ U(0, 0.4)</text>\n<text x='230' y='90' fill='#cbd5e1' font-size='10'>resampled each episode</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Why Resample Once Per Episode, Not Once Per Step', headingKn: 'Prati Step ಅಲ್ಲ, Episode ಗೆ Ondu Bari Ekay Marusample Madabeku',
      bodyEn: '• Genuinely confirmed in the code: slip = rng.uniform(*slip_range) is called once, before the inner step loop begins, and the same value is reused for every step within that episode\n• This mirrors real physics: a robot\'s mass or the floor\'s friction coefficient does not randomly change mid-trajectory -- it is approximately fixed for the duration of one episode (one attempt, one physical configuration), then can genuinely differ the next time. Resampling within an episode would model a physically nonsensical world where physical properties fluctuate step to step',
      bodyKn: '• Code ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: slip = rng.uniform(*slip_range) ಒಂದೂ ಬಾರಿ ಕರೆಯಲಾಗುತ್ತದೆ, ಒಳಗಿನ step loop ಆರಂಭವಾಗುವ ಮೊದಲೂ, ಮತ್ತೆ ಆ episode ಒಳಗೆ ಪ್ರತಿ step ಗೆ ಅದೇ ಮೌಲ್ಯ ಮರುಬಳಸಲಾಗುತ್ತದೆ\n• ಇದೂ ನಿಜ physics ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ: ಒಂದೂ robot ನ mass ಅಥವಾ floor ನ friction coefficient trajectory ಮಧ್ಯದಲ್ಲಿ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಬದಲಾಗುವುದಿಲ್ಲ -- ಅದೂ ಒಂದೂ episode ನ ಅವಧಿಗೆ (ಒಂದೂ ಪ್ರಯತ್ನ, ಒಂದೂ ಭೌತಿಕ ಸಂರಚನೆ) ಸರಿಸುಮಾರು ಸ್ಥಿರ, ನಂತರ ಮುಂದಿನ ಬಾರಿ ನಿಜವಾಗಿ ಭಿನ್ನವಾಗಿರಬಹುದು. ಒಂದೂ episode ಒಳಗೆ ಮರುsampling ಮಾಡುವುದೂ ಭೌತಿಕ ಗುಣಗಳು step ಇಂದ step ಗೆ ಏರಿಳಿತವಾಗುವ ಒಂದೂ ಭೌತಿಕವಾಗಿ ಅರ್ಥಹೀನ ಪ್ರಪಂಚ ಮಾಡೆಲ್ ಮಾಡುತ್ತಿತ್ತು' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: What Changed and What Did Not', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಏನೂ ಬದಲಾಯಿತು ಮತ್ತೆ ಏನೂ ಬದಲಾಗಲಿಲ್ಲ',
      rows: "Component|Policy A (Fixed)|Policy B (DR)\nAlgorithm|Q-learning (Module 175)|Identical\nalpha, gamma, epsilon|0.1, 0.99, 0.1|Identical\nEpisodes|5000|Identical\nSlip source|Constant 0.0|rng.uniform(0.0, 0.4) per episode\nTraining envelope|Single point (slip=0)|Range [0.0, 0.4]" } },

    { type: 'math', data: {
      formula: 'slip \\sim \\text{Uniform}(0.0,\\ 0.4), \\quad \\text{resampled once per episode}',
      descEn: 'The training-distribution envelope for Policy B: a uniform distribution over slip in [0.0, 0.4], meaning every point in that interval is equally likely to be drawn -- genuinely implemented via rng.uniform(0.0, 0.4) in Python\'s standard library.',
      descKn: 'Policy B ಗಾಗಿ training-distribution envelope: slip ಮೇಲೆ [0.0, 0.4] ನಲ್ಲಿ ಒಂದೂ uniform distribution, ಅಂದರೆ ಆ interval ನಲ್ಲಿ ಪ್ರತಿ ಬಿಂದು draw ಆಗಲು ಸಮಾನ ಸಾಧ್ಯತೆ ಹೊಂದಿದೆ -- Python ನ standard library ನಲ್ಲಿ rng.uniform(0.0, 0.4) ಮೂಲಕ ನಿಜವಾಗಿ implement ಮಾಡಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'The Training-Distribution Envelope', headingKn: 'Training-Distribution Envelope',
      bodyEn: '• Genuinely confirmed: Policy A\'s training envelope is a single point (slip=0.0 exactly, with probability 1) -- it never once saw a noisy transition during any of its 5000 episodes\n• Genuinely confirmed: Policy B\'s training envelope spans the full [0.0, 0.4] interval -- across 5000 episodes, it genuinely encountered low-slip, mid-slip, and near-0.4-slip conditions with roughly equal frequency, since Python\'s rng.uniform draws are genuinely uniform over that range\n• This envelope concept matters directly for Part 3: any test-time slip value inside [0.0, 0.4] is technically "in-distribution" for Policy B, while any slip value above 0.4 is genuinely "out-of-distribution" -- a distinction Part 3\'s evaluation sweep is specifically designed to probe',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Policy A ನ training envelope ಒಂದೂ single ಬಿಂದು (slip=0.0 ನಿಖರವಾಗಿ, probability 1 ಜೊತೆ) -- ಅದೂ ತನ್ನ 5000 episodes ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಒಂದೂ ಬಾರಿಯೂ noisy transition ನೋಡಲಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Policy B ನ training envelope ಪೂರ್ಣ [0.0, 0.4] interval ಆವರಿಸುತ್ತದೆ -- 5000 episodes ಆದ್ಯಂತ, ಅದೂ ನಿಜವಾಗಿ ಕಡಿಮೆ-slip, ಮಧ್ಯಮ-slip, ಮತ್ತೆ 0.4 ಗೆ ಸಮೀಪದ-slip ಪರಿಸ್ಥಿತಿಗಳನ್ನೂ ಸರಿಸುಮಾರು ಸಮಾನ ಆವರ್ತನದೊಂದಿಗೆ ಎದುರಿಸಿತು, ಏಕೆಂದರೆ Python ನ rng.uniform draws ಆ range ಆದ್ಯಂತ ನಿಜವಾಗಿ uniform ಆಗಿವೆ\n• ಈ envelope concept Part 3 ಗೆ ನೇರವಾಗಿ ಮುಖ್ಯ: [0.0, 0.4] ಒಳಗಿನ ಯಾವುದೇ test-time slip value ತಾಂತ್ರಿಕವಾಗಿ Policy B ಗೆ "in-distribution", 0.4 ಮೇಲಿನ ಯಾವುದೇ slip value ನಿಜವಾಗಿ "out-of-distribution" -- Part 3 ನ evaluation sweep ನಿರ್ದಿಷ್ಟವಾಗಿ ಪರಿಶೀಲಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಒಂದೂ ವ್ಯತ್ಯಾಸ' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Both Q-Tables Are Ready for Evaluation', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ Q-Tables Evaluation ಗೆ ಸಿದ್ಧ',
      bodyEn: '• Genuinely confirmed: Q_fixed and Q_dr are both standard Python defaultdicts mapping state to an action-value dict, exactly the same data structure genuinely used throughout Modules 174-175, so the same greedy-evaluation helper genuinely used in earlier lessons applies unchanged to both\n• Nothing about the evaluation code needs to know which training procedure produced a given Q-table -- this clean separation between training and evaluation is what makes Part 3\'s side-by-side sweep genuinely fair to both policies',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Q_fixed ಮತ್ತೆ Q_dr ಎರಡೂ ಪ್ರಮಾಣಿತ Python defaultdicts, state ಅನ್ನೂ ಒಂದೂ action-value dict ಗೆ mapping ಮಾಡುತ್ತವೆ, Modules 174-175 ಆದ್ಯಂತ ನಿಜವಾಗಿ ಬಳಸಿದ ಅದೇ data structure, ಆದ್ದರಿಂದ ಹಿಂದಿನ lessons ನಲ್ಲಿ ನಿಜವಾಗಿ ಬಳಸಿದ ಅದೇ greedy-evaluation helper ಎರಡಕ್ಕೂ ಬದಲಾಗದೆ ಅನ್ವಯಿಸುತ್ತದೆ\n• Evaluation code ಗೆ ಯಾವ training procedure ಒಂದೂ ಕೊಟ್ಟ Q-table ಉತ್ಪಾದಿಸಿತು ಎಂದೂ ತಿಳಿಯುವ ಅಗತ್ಯವಿಲ್ಲ -- training ಮತ್ತೆ evaluation ನಡುವಿನ ಈ ಸ್ವಚ್ಛ ಪ್ರತ್ಯೇಕತೆಯೂ Part 3 ನ side-by-side sweep ಅನ್ನೂ ಎರಡೂ policies ಗೆ ನಿಜವಾಗಿ ನ್ಯಾಯಯುತವಾಗಿ ಮಾಡುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: two Q-learning policies were trained under identical algorithms and hyperparameters, differing in exactly one variable -- the source of the slip domain parameter during training\n• Genuinely confirmed: the domain parameter is resampled once per episode, not once per step, correctly modeling physical parameters that are approximately fixed within one trial but can vary between trials\n• This lesson\'s two genuinely trained policies (Q_fixed, Q_dr) set up the exact controlled experiment Part 3 will evaluate -- any difference in their test-time performance can be attributed specifically to the training-distribution difference, not to a confounding factor\n• Domain randomization is not "training on noisy data" in a vague sense -- it is training across a well-defined DISTRIBUTION of parameterized simulators, genuinely implemented here as slip ~ Uniform(0, 0.4)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎರಡೂ Q-learning policies ಒಂದೇ algorithms ಮತ್ತೆ hyperparameters ಅಡಿಯಲ್ಲಿ trained ಆಗಿದ್ದವು, ನಿಖರವಾಗಿ ಒಂದೂ variable ನಲ್ಲಿ ಭಿನ್ನವಾಗಿ -- training ಸಮಯದಲ್ಲಿ slip domain parameter ನ ಮೂಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: domain parameter ಪ್ರತಿ step ಗೆ ಅಲ್ಲ, ಪ್ರತಿ episode ಗೆ ಒಮ್ಮೆ ಮರುsample ಆಗುತ್ತದೆ, ಒಂದೂ trial ಒಳಗೆ ಸರಿಸುಮಾರು ಸ್ಥಿರ ಆದರೆ trials ನಡುವೆ ಬದಲಾಗಬಹುದಾದ ಭೌತಿಕ parameters ಅನ್ನೂ ಸರಿಯಾಗಿ ಮಾಡೆಲ್ ಮಾಡುತ್ತಾ\n• ಈ lesson ನ ಎರಡೂ ನಿಜವಾಗಿ trained policies (Q_fixed, Q_dr) Part 3 ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ನಿಖರ ನಿಯಂತ್ರಿತ experiment ಸ್ಥಾಪಿಸುತ್ತವೆ -- ಅವುಗಳ test-time ಕಾರ್ಯಕ್ಷಮತೆಯಲ್ಲಿ ಯಾವುದೇ ವ್ಯತ್ಯಾಸ ನಿರ್ದಿಷ್ಟವಾಗಿ training-distribution ವ್ಯತ್ಯಾಸಕ್ಕೆ ಆರೋಪಿಸಬಹುದು, ಒಂದೂ confounding factor ಗೆ ಅಲ್ಲ\n• Domain randomization ಒಂದೂ ಅಸ್ಪಷ್ಟ ಅರ್ಥದಲ್ಲಿ "noisy data ಮೇಲೆ training" ಅಲ್ಲ -- ಇದೂ parameterized simulators ನ ಒಂದೂ ಚೆನ್ನಾಗಿ-ವ್ಯಾಖ್ಯಾನಿಸಿದ DISTRIBUTION ಆದ್ಯಂತ training, ಇಲ್ಲಿ ನಿಜವಾಗಿ slip ~ Uniform(0, 0.4) ಆಗಿ implement ಮಾಡಲಾಗಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely built controlled experiment here (identical algorithm and hyperparameters, one variable changed) mirrors exactly how NVIDIA\'s Isaac Lab and OpenAI\'s early robotics work report domain-randomization results -- always comparing against a matched fixed-simulator baseline trained with the same algorithm, never claiming DR helps without that direct comparison.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ನಿಯಂತ್ರಿತ experiment (ಒಂದೇ algorithm ಮತ್ತೆ hyperparameters, ಒಂದೂ variable ಬದಲಾಗಿದೆ) NVIDIA ನ Isaac Lab ಮತ್ತೆ OpenAI ನ ಆರಂಭಿಕ robotics ಕೆಲಸ domain-randomization ಫಲಿತಾಂಶಗಳನ್ನೂ ಹೇಗೆ ವರದಿ ಮಾಡುತ್ತದೆ ಎಂಬುದನ್ನೂ ನಿಖರವಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ -- ಯಾವಾಗಲೂ ಅದೇ algorithm ಜೊತೆ trained ಒಂದೂ ಹೊಂದಾಣಿಕೆಯಾದ fixed-simulator baseline ವಿರುದ್ಧ ಹೋಲಿಸುತ್ತಾ, ಆ ನೇರ ಹೋಲಿಕೆ ಇಲ್ಲದೆ DR ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂದೂ ಎಂದಿಗೂ ಹಕ್ಕುಸಾಧಿಸುವುದಿಲ್ಲ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: isolating exactly one variable between two training runs is standard scientific and engineering practice -- without this discipline, any observed difference in Part 3\'s results could be attributed to the wrong cause\n• Genuinely confirmed: resampling the domain parameter once per episode rather than once per step is a real modeling choice that must match the physical process being simulated -- getting this wrong would produce a simulator that trains policies for a physically implausible world',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎರಡೂ training runs ನಡುವೆ ನಿಖರವಾಗಿ ಒಂದೂ variable ಪ್ರತ್ಯೇಕಿಸುವುದೂ ಪ್ರಮಾಣಿತ ವೈಜ್ಞಾನಿಕ ಮತ್ತೆ engineering ಅಭ್ಯಾಸ -- ಈ ಶಿಸ್ತು ಇಲ್ಲದೆ, Part 3 ನ ಫಲಿತಾಂಶಗಳಲ್ಲಿ ಯಾವುದೇ ಗಮನಿಸಿದ ವ್ಯತ್ಯಾಸ ತಪ್ಪೂ ಕಾರಣಕ್ಕೆ ಆರೋಪಿಸಬಹುದಾಗಿತ್ತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: domain parameter ಅನ್ನೂ ಪ್ರತಿ step ಗೆ ಬದಲು ಪ್ರತಿ episode ಗೆ ಒಮ್ಮೆ ಮರುsample ಮಾಡುವುದೂ ಒಂದೂ ನಿಜ modeling ಆಯ್ಕೆ ಅದೂ simulate ಆಗುತ್ತಿರುವ ಭೌತಿಕ ಪ್ರಕ್ರಿಯೆಗೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು -- ಇದನ್ನೂ ತಪ್ಪಾಗಿ ಪಡೆಯುವುದೂ ಒಂದೂ ಭೌತಿಕವಾಗಿ ಅಸಂಭವ ಪ್ರಪಂಚಕ್ಕೆ policies train ಮಾಡುವ ಒಂದೂ simulator ಉತ್ಪಾದಿಸುತ್ತಿತ್ತು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A robotics team using Isaac Gym to train a quadruped genuinely resamples domain parameters (mass, friction, motor gains) once per simulated episode across thousands of parallel environments -- exactly the once-per-episode resampling pattern genuinely implemented in this lesson, chosen because it correctly reflects how a physical robot\'s properties stay fixed during one trial.',
      bodyKn: 'Ondu quadruped train ಮಾಡಲು Isaac Gym ಬಳಸುವ ಒಂದೂ robotics ತಂಡ ಸಾವಿರಾರು parallel environments ಆದ್ಯಂತ ಪ್ರತಿ simulated episode ಗೆ ಒಮ್ಮೆ domain parameters (mass, friction, motor gains) ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುsample ಮಾಡುತ್ತದೆ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿದ ನಿಖರ once-per-episode resampling ಮಾದರಿ, ಒಂದೂ ಭೌತಿಕ robot ನ ಗುಣಗಳು ಒಂದೂ trial ಸಮಯದಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತವೆ ಎಂದೂ ಸರಿಯಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುವುದರಿಂದ ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the ONLY genuine difference between how Policy A and Policy B were trained in this lesson?', qKn: 'ಈ lesson ನಲ್ಲಿ Policy A ಮತ್ತೆ Policy B ಹೇಗೆ trained ಆಗಿದ್ದವು ಎಂಬುದೂ ನಡುವಿನ ಏಕೈಕ ನಿಜ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['Different Q-learning algorithms', 'The source of the slip domain parameter during training', 'Different numbers of episodes', 'Different action spaces'], correct: 1,
        optsKn: ['ವಿಭಿನ್ನ Q-learning algorithms', 'Training ಸಮಯದಲ್ಲಿ slip domain parameter ನ ಮೂಲ', 'ವಿಭಿನ್ನ episodes ಸಂಖ್ಯೆಗಳು', 'ವಿಭಿನ್ನ action spaces'] },
      { q: 'Why is the domain parameter resampled once per episode rather than once per step?', qKn: 'Domain parameter ಪ್ರತಿ step ಗೆ ಬದಲು ಪ್ರತಿ episode ಗೆ ಒಮ್ಮೆ ಏಕೆ ಮರುsample ಆಗುತ್ತದೆ?',
        opts: ['To make training faster', 'Because physical properties like mass or friction are approximately fixed during one trial, not fluctuating step to step', 'It has no particular reason', 'Because Q-learning requires it'], correct: 1,
        optsKn: ['Training ವೇಗಗೊಳಿಸಲು', 'Mass ಅಥವಾ friction ರೀತಿಯ ಭೌತಿಕ ಗುಣಗಳು ಒಂದೂ trial ಸಮಯದಲ್ಲಿ ಸರಿಸುಮಾರು ಸ್ಥಿರವಾಗಿರುವುದರಿಂದ, step ಇಂದ step ಗೆ ಏರಿಳಿತವಾಗುವುದಿಲ್ಲ', 'ಇದಕ್ಕೆ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಕಾರಣ ಇಲ್ಲ', 'Q-learning ಗೆ ಇದೂ ಬೇಕಾಗಿರುವುದರಿಂದ'] },
      { q: 'Genuinely confirmed: what range was slip sampled from during Policy B\'s (domain-randomized) training?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Policy B ನ (domain-randomized) training ಸಮಯದಲ್ಲಿ slip ಯಾವ range ಇಂದ sample ಆಗಿತ್ತು?',
        opts: ['[0.5, 1.0]', '[0.0, 0.4]', 'A single fixed value of 0.2', '[-1.0, 1.0]'], correct: 1,
        optsKn: ['[0.5, 1.0]', '[0.0, 0.4]', '0.2 ರ ಒಂದೂ single ಸ್ಥಿರ ಮೌಲ್ಯ', '[-1.0, 1.0]'] },
      { q: 'Why is it important that both policies used identical alpha, gamma, epsilon, and episode counts?', qKn: 'ಎರಡೂ policies ಒಂದೇ alpha, gamma, epsilon, ಮತ್ತೆ episode counts ಬಳಸಿದವೂ ಏಕೆ ಮುಖ್ಯ?',
        opts: ['It makes the code shorter', 'It isolates the training-distribution difference as the only cause of any observed performance difference', 'Q-learning requires identical hyperparameters to run at all', 'It has no real importance'], correct: 1,
        optsKn: ['ಅದೂ code ಚಿಕ್ಕದೂ ಮಾಡುತ್ತದೆ', 'ಅದೂ ಯಾವುದೇ ಗಮನಿಸಿದ ಕಾರ್ಯಕ್ಷಮತೆ ವ್ಯತ್ಯಾಸದ ಏಕೈಕ ಕಾರಣವಾಗಿ training-distribution ವ್ಯತ್ಯಾಸ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ', 'Q-learning ಗೆ ಬಿಲ್ಕುಲ್ ಚಲಿಸಲು ಒಂದೇ hyperparameters ಬೇಕು', 'ಇದಕ್ಕೆ ಯಾವುದೇ ನಿಜ ಮಹತ್ವ ಇಲ್ಲ'] },
      { q: 'What does "domain randomization" genuinely mean in the context of this lesson\'s implementation?', qKn: 'ಈ lesson ನ implementation ಸಂದರ್ಭದಲ್ಲಿ "domain randomization" ನಿಜವಾಗಿ ಏನೂ ಅರ್ಥ?',
        opts: ['Adding random noise to the reward signal', 'Training across a well-defined distribution of parameterized simulators, here slip ~ Uniform(0, 0.4)', 'Randomly selecting a different algorithm each episode', 'Randomizing the neural network architecture'], correct: 1,
        optsKn: ['Reward signal ಗೆ random noise ಸೇರಿಸುವುದೂ', 'Parameterized simulators ನ ಒಂದೂ ಚೆನ್ನಾಗಿ-ವ್ಯಾಖ್ಯಾನಿಸಿದ distribution ಆದ್ಯಂತ training, ಇಲ್ಲಿ slip ~ Uniform(0, 0.4)', 'ಪ್ರತಿ episode ಒಂದೂ ವಿಭಿನ್ನ algorithm ಯಾದೃಚ್ಛಿಕವಾಗಿ ಆಯ್ಕೆ ಮಾಡುವುದೂ', 'Neural network architecture randomize ಮಾಡುವುದೂ'] },
    ] } },
  ],
};
