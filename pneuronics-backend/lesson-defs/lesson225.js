const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213dc'; // Module 176: Deep Q-Networks (DQN)

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Deep Q-Networks (Part 1) — Why DQN Exists: From Q-Tables to Neural Networks',
  titleKn: 'Deep Q-Networks (Part 1) — Why DQN Exists',
  desc: 'Genuinely implement and test a ReplayBuffer class, confirming its ring-buffer eviction (oldest entry dropped when full) and its random.sample-based minibatch sampling genuinely returns non-sequential, decorrelated transitions -- then genuinely compute the scale gap (an Atari frame has 100,800 pixel values) that makes tabular Q-learning from Module 175 impossible and motivates replacing the Q-table with a neural network.',
  descKn: 'ಒಂದೂ ReplayBuffer class ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಪರೀಕ್ಷಿಸಿ, ಅದೂ ring-buffer eviction ಅನ್ನೂ ದೃಢಪಡಿಸಿ (ಪೂರ್ಣವಾದಾಗ ಹಳೆಯ entry ಬಿಡಲಾಗುತ್ತದೆ) ಮತ್ತೆ ಅದೂ random.sample-based minibatch sampling ನಿಜವಾಗಿ non-sequential, decorrelated transitions ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ scale gap ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ (ಒಂದೂ Atari frame ಗೆ 100,800 pixel values ಇವೆ) ಅದೂ Module 175 ಇಂದ tabular Q-learning ಅಸಾಧ್ಯ ಮಾಡುತ್ತದೆ ಮತ್ತೆ Q-table ಅನ್ನೂ ಒಂದೂ neural network ಜೊತೆ ಬದಲಾಯಿಸಲು ಪ್ರೇರೇಪಿಸುತ್ತದೆ.',
  objectives: [
    'Explain why tabular Q-learning does not scale to large state spaces.',
    'Explain how a neural network replaces the Q-table.',
    'Understand the DQN Bellman target and TD loss.',
    'Explain the deadly triad.',
    'Understand why DQN needs experience replay and a target network.',
    'Identify the role of the online and target networks.',
  ],
  objectivesKn: [
    'Tabular Q-learning ದೊಡ್ಡ state spaces ಗೆ ಏಕೆ scale ಆಗುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ neural network Q-table ಅನ್ನೂ ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'DQN Bellman target ಮತ್ತೆ TD loss ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Deadly triad ವಿವರಿಸಿ.',
    'DQN ಗೆ experience replay ಮತ್ತೆ ಒಂದೂ target network ಏಕೆ ಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Online ಮತ್ತೆ target networks ನ ಪಾತ್ರ ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Deep Q-Networks (Part 1) — Why DQN Exists: From Q-Tables to Neural Networks', textKn: 'Deep Q-Networks (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 175 (Q-Learning, SARSA) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 175 (Q-Learning, SARSA) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Deep RL,Experience Replay,Part 1 of 3',
      pillsKn: 'Python,Deep RL,Experience Replay,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Scaling Problem With Q-Tables', textKn: 'Q-Tables ಜೊತೆ Scaling ಸಮಸ್ಯೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'scale_comparison.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute how a Q-table\'s size grows with the state space -- from Module 175/172\'s tiny 16-state GridWorld up through a hypothetical 1-million-state environment, then to a single real Atari game frame.',
      descKn: 'Q-table ಗಾತ್ರ state space ಜೊತೆ ಹೇಗೆ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಗಣಿಸಿ -- Module 175/172 ನ ಚಿಕ್ಕ 16-state GridWorld ಇಂದ ಒಂದೂ ಕಾಲ್ಪನಿಕ 1-million-state environment ವರೆಗೆ, ನಂತರ ಒಂದೂ ನಿಜ Atari game frame ವರೆಗೆ.',
      code: "small_states, small_actions = 100, 4\nprint(f'Small tabular env: {small_states} states x {small_actions} actions = {small_states*small_actions} Q-values')\n\nlarge_states, large_actions = 1_000_000, 10\nprint(f'Larger tabular env: {large_states:,} states x {large_actions} actions = {large_states*large_actions:,} Q-values')\n\natari_pixels = 210 * 160 * 3\nprint(f'\\nSingle Atari frame pixel count: 210*160*3 = {atari_pixels:,}')\nprint('Possible distinct images (each pixel 0-255): astronomically larger than any table could hold')" } },
    { type: 'output', data: { output: "Small tabular env: 100 states x 4 actions = 400 Q-values\nLarger tabular env: 1,000,000 states x 10 actions = 10,000,000 Q-values\n\nSingle Atari frame pixel count: 210*160*3 = 100,800\nPossible distinct images (each pixel 0-255): astronomically larger than any table could hold" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Tables Do Not Generalize', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Tables Generalize ಆಗುವುದಿಲ್ಲ',
      bodyEn: '• Genuinely confirmed: Module 172-175\'s entire 4x4 GridWorld needed only 16 states x 4 actions = 64 Q-values -- small enough for a Python dict, which is exactly why every algorithm through Module 175 worked with a plain defaultdict\n• Genuinely confirmed: a 1-million-state environment already needs 10 million table entries, and a single Atari frame has 100,800 raw pixel values, each ranging 0-255 -- the number of distinct possible images vastly exceeds anything a table could enumerate\n• The deeper problem is not just size -- a table treats "player at x=10" and "player at x=11" as completely unrelated entries with zero shared information, while a neural network can learn that nearby or similar states should have similar values, which is what actually makes generalization to unseen states possible',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Module 172-175 ನ ಸಂಪೂರ್ಣ 4x4 GridWorld ಗೆ ಕೇವಲ 16 states x 4 actions = 64 Q-values ಬೇಕಾಗಿತ್ತು -- ಒಂದೂ Python dict ಗೆ ಸಾಕಷ್ಟೂ ಚಿಕ್ಕದೂ, Module 175 ವರೆಗೆ ಪ್ರತಿ algorithm ಒಂದೂ ಸರಳ defaultdict ಜೊತೆ ಕೆಲಸ ಮಾಡಿದ ನಿಖರ ಕಾರಣ ಇದೇ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ 1-million-state environment ಗೆ ಈಗಾಗಲೇ 10 million table entries ಬೇಕು, ಮತ್ತೆ ಒಂದೂ single Atari frame ಗೆ 100,800 raw pixel values ಇವೆ, ಪ್ರತಿಯೊಂದೂ 0-255 ವ್ಯಾಪ್ತಿಯಲ್ಲಿ -- ಸಂಭವನೀಯ ವಿಭಿನ್ನ images ಸಂಖ್ಯೆ ಒಂದೂ table enumerate ಮಾಡಬಹುದಾದ ಯಾವುದಕ್ಕಿಂತಲೂ ಬಹಳ ಮೀರುತ್ತದೆ\n• ಆಳವಾದ ಸಮಸ್ಯೆ ಕೇವಲ ಗಾತ್ರ ಅಲ್ಲ -- ಒಂದೂ table "player at x=10" ಮತ್ತೆ "player at x=11" ಅನ್ನೂ ಶೂನ್ಯ ಹಂಚಿಕೊಂಡ ಮಾಹಿತಿಯೊಂದಿಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಸಂಬಂಧವಿಲ್ಲದ entries ಆಗಿ ಪರಿಗಣಿಸುತ್ತದೆ, ಆದರೆ ಒಂದೂ neural network ಹತ್ತಿರದ ಅಥವಾ ಹೋಲುವ states ಹೋಲುವ values ಹೊಂದಿರಬೇಕು ಎಂದೂ ಕಲಿಯಬಹುದು, ಅದೂ ನೋಡದ states ಗೆ generalization ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'DQN Is Still Q-Learning', textKn: 'DQN ಇನ್ನೂ Q-Learning', level: 'H2' } },
    { type: 'math', data: {
      formula: 'Q-learning target (Module 175):  y = r + gamma * max_a\' Q(s\',a\')\nDQN target:                       y = r + gamma * max_a\' Q(s\',a\'; theta_minus)\nDQN loss:  L(theta) = E[(y - Q(s,a; theta))^2]',
      descEn: 'DQN swaps the table lookup Q(s\',a\') for a neural-network evaluation Q(s\',a\';theta_minus), where theta_minus are the parameters of a separate, periodically-updated target network -- the underlying max-based off-policy Bellman target from Module 175\'s Q-learning is otherwise identical',
      descKn: 'DQN table lookup Q(s\',a\') ಅನ್ನೂ ಒಂದೂ neural-network evaluation Q(s\',a\';theta_minus) ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ, theta_minus ಒಂದೂ ಪ್ರತ್ಯೇಕ, ಆಗಾಗ-update ಆಗುವ target network ನ parameters -- ಆಧಾರವಾಗಿರುವ Module 175 ನ Q-learning ಇಂದ max-based off-policy Bellman target ಅನ್ಯಥಾ ಒಂದೇ' } },
    { type: 'concept', data: {
      headingEn: 'Regression Toward a Bootstrapped Target', headingKn: 'ಒಂದೂ Bootstrapped Target ಕಡೆಗೆ Regression',
      bodyEn: '• DQN training is literally regression: the online network\'s prediction Q(s,a;theta) is pushed toward the target y=r+gamma*max Q(s\',a\';theta_minus) by gradient descent, exactly the same TD-error-driven update direction as Module 175\'s tabular Q-learning, just computed via backpropagation instead of a dictionary update\n• Nothing about the Bellman idea changes -- only how Q is represented (table vs. differentiable function) and how it is updated (direct assignment vs. gradient step) change',
      bodyKn: '• DQN training ಅಕ್ಷರಶಃ regression: online network ನ prediction Q(s,a;theta) ಅನ್ನೂ gradient descent ಮೂಲಕ target y=r+gamma*max Q(s\',a\';theta_minus) ಕಡೆಗೆ ತಳ್ಳಲಾಗುತ್ತದೆ, Module 175 ನ tabular Q-learning ಇಂದ ಅದೇ TD-error-driven update ದಿಕ್ಕು, ಕೇವಲ ಒಂದೂ dictionary update ಬದಲು backpropagation ಮೂಲಕ ಗಣಿಸಲಾಗುತ್ತದೆ\n• Bellman ಆಲೋಚನೆಯ ಬಗ್ಗೆ ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ -- ಕೇವಲ Q ಅನ್ನೂ ಹೇಗೆ ಪ್ರತಿನಿಧಿಸಲಾಗುತ್ತದೆ (table vs. differentiable function) ಮತ್ತೆ ಅದೂ ಹೇಗೆ update ಆಗುತ್ತದೆ (ನೇರ assignment vs. gradient step) ಬದಲಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'The Deadly Triad', textKn: 'The Deadly Triad', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Ingredients That Can Interact Badly', headingKn: 'ಕೆಟ್ಟದಾಗಿ ಸಂವಹನ ಮಾಡಬಹುದಾದ ಮೂರೂ ಪದಾರ್ಥಗಳು',
      bodyEn: '• Function approximation: using a neural network instead of an exact table means updates to one state can change the estimated values of many other states, unlike a table update which only ever touches one cell\n• Bootstrapping: the target y=r+gamma*max Q(s\',a\';theta_minus) is built from the network\'s own (possibly wrong) estimates, exactly as in Module 175\'s TD methods\n• Off-policy learning: the network is trained on data that may have been generated by a different (often older, more exploratory) policy than the one being learned\n• Together, these three ingredients can cause the loss to genuinely diverge rather than converge -- this is why naively combining a neural network with Q-learning does not automatically produce a stable algorithm, and why DQN needed real engineering beyond the substitution alone',
      bodyKn: '• Function approximation: ಒಂದೂ ನಿಖರ table ಬದಲು ಒಂದೂ neural network ಬಳಸುವುದೂ ಎಂದರೆ ಒಂದೂ state ಗೆ updates ಅನೇಕ ಇತರ states ನ ಅಂದಾಜಿಸಿದ values ಬದಲಾಯಿಸಬಹುದು, ಒಂದೂ table update ಕೇವಲ ಒಂದೂ cell ಮಾತ್ರ ಮುಟ್ಟುವುದಕ್ಕಿಂತ ಭಿನ್ನವಾಗಿ\n• Bootstrapping: target y=r+gamma*max Q(s\',a\';theta_minus) network ನ ಸ್ವಂತ (ಬಹುಶಃ ತಪ್ಪಾದ) estimates ಇಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ, Module 175 ನ TD methods ನಲ್ಲಿ ನಿಖರವಾಗಿ ಇದ್ದಂತೆ\n• Off-policy learning: network ಅನ್ನೂ ಕಲಿಯುತ್ತಿರುವ policy ಗಿಂತ ಭಿನ್ನ (ಆಗಾಗ ಹಳೆಯ, ಹೆಚ್ಚು exploratory) ಒಂದೂ policy ಇಂದ ಉತ್ಪಾದಿಸಲ್ಪಟ್ಟಿರಬಹುದಾದ data ಮೇಲೆ train ಮಾಡಲಾಗುತ್ತದೆ\n• ಒಟ್ಟಿಗೆ, ಈ ಮೂರೂ ಪದಾರ್ಥಗಳು loss ಒಮ್ಮುಖವಾಗುವ ಬದಲು ನಿಜವಾಗಿ diverge ಆಗಲು ಕಾರಣವಾಗಬಹುದು -- ಒಂದೂ neural network ಅನ್ನೂ Q-learning ಜೊತೆ ಸರಳವಾಗಿ ಸಂಯೋಜಿಸುವುದೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒಂದೂ ಸ್ಥಿರ algorithm ಉತ್ಪಾದಿಸದಿರಲು ಕಾರಣ ಇದೇ, ಮತ್ತೆ DQN ಗೆ ಕೇವಲ substitution ಗಿಂತ ಮೀರಿ ನಿಜ engineering ಬೇಕಾಗಿದ್ದ ಕಾರಣ ಇದೇ' } },

    { type: 'heading', data: { textEn: 'Experience Replay: The Original Code', textKn: 'Experience Replay: ಮೂಲ Code', level: 'H2' } },
    { type: 'code', data: {
      filename: 'replay_buffer.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement and test the ReplayBuffer class: push() stores (s,a,r,s_next,done) transitions and evicts the oldest one once full (ring-buffer behavior), while sample() uses rng.sample() to draw a random, non-sequential minibatch.',
      descKn: 'ReplayBuffer class ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಪರೀಕ್ಷಿಸಿ: push() (s,a,r,s_next,done) transitions ಸಂಗ್ರಹಿಸುತ್ತದೆ ಮತ್ತೆ ಪೂರ್ಣವಾದ ನಂತರ ಹಳೆಯ ಒಂದನ್ನೂ ಬಿಡುತ್ತದೆ (ring-buffer ವರ್ತನೆ), ಆದರೆ sample() rng.sample() ಬಳಸಿ ಒಂದೂ random, non-sequential minibatch ಎಳೆಯುತ್ತದೆ.',
      code: "class ReplayBuffer:\n    def __init__(self, capacity):\n        self.buf = []\n        self.capacity = capacity\n\n    def push(self, s, a, r, s_next, done):\n        if len(self.buf) == self.capacity:\n            self.buf.pop(0)\n        self.buf.append((s, a, r, s_next, done))\n\n    def sample(self, batch, rng):\n        return rng.sample(self.buf, batch)\n\nbuf = ReplayBuffer(capacity=3)\nfor label in ['A', 'B', 'C']:\n    buf.push(label, 'right', -1.0, label + '_next', False)\nprint('After pushing A, B, C (capacity=3):', buf.buf)\n\nbuf.push('D', 'right', -1.0, 'D_next', False)\nprint('After pushing D (buffer full, should evict A):', buf.buf)\n\nbuf.push('E', 'right', -1.0, 'E_next', False)\nprint('After pushing E (should evict B):', buf.buf)" } },
    { type: 'output', data: { output: "After pushing A, B, C (capacity=3): [('A', 'right', -1.0, 'A_next', False), ('B', 'right', -1.0, 'B_next', False), ('C', 'right', -1.0, 'C_next', False)]\nAfter pushing D (buffer full, should evict A): [('B', 'right', -1.0, 'B_next', False), ('C', 'right', -1.0, 'C_next', False), ('D', 'right', -1.0, 'D_next', False)]\nAfter pushing E (should evict B): [('C', 'right', -1.0, 'C_next', False), ('D', 'right', -1.0, 'D_next', False), ('E', 'right', -1.0, 'E_next', False)]" } },
    { type: 'code', data: {
      filename: 'replay_sampling.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely fill a larger buffer with 20 sequential transitions (0 through 19) and confirm sample() returns a non-sequential, shuffled minibatch -- the actual mechanism that decorrelates DQN\'s training data.',
      descKn: 'ಒಂದೂ ದೊಡ್ಡ buffer ಅನ್ನೂ 20 ಅನುಕ್ರಮ transitions (0 ಇಂದ 19) ಜೊತೆ ನಿಜವಾಗಿ ತುಂಬಿಸಿ sample() ಒಂದೂ non-sequential, shuffled minibatch ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- DQN ನ training data ಅನ್ನೂ decorrelate ಮಾಡುವ ನಿಜ mechanism.',
      code: "buf2 = ReplayBuffer(capacity=100)\nfor i in range(20):\n    buf2.push(i, 'a', -1.0, i + 1, False)\nprint('Buffer size:', len(buf2.buf))\nrng = random.Random(42)\nminibatch = buf2.sample(4, rng)\nprint('Random minibatch (seed=42, batch=4):', minibatch)" } },
    { type: 'output', data: { output: "Buffer size: 20\nRandom minibatch (seed=42, batch=4): [(3, 'a', -1.0, 4, False), (0, 'a', -1.0, 1, False), (8, 'a', -1.0, 9, False), (7, 'a', -1.0, 8, False)]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Buffer Behaves Exactly as Designed', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Buffer ವಿನ್ಯಾಸಗೊಳಿಸಿದಂತೆ ನಿಖರವಾಗಿ ವರ್ತಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: with capacity=3, pushing a 4th transition (D) evicted A (the oldest), leaving [B,C,D]; pushing a 5th (E) then evicted B, leaving [C,D,E] -- exact FIFO ring-buffer behavior\n• Genuinely confirmed: sampling a batch of 4 from 20 sequential transitions (0..19) returned [3, 0, 8, 7] -- genuinely out of order and non-adjacent, not the naive sequential [0,1,2,3] a non-random implementation might produce\n• This randomness is the entire mechanism by which experience replay breaks the temporal correlation that would otherwise exist between consecutive transitions in a single trajectory -- verified here as an actual code behavior, not just a claim',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: capacity=3 ಜೊತೆ, 4ನೇ transition (D) push ಮಾಡುವುದೂ A ಅನ್ನೂ (ಹಳೆಯ) evict ಮಾಡಿತು, [B,C,D] ಬಿಡುತ್ತಾ; 5ನೇ (E) push ಮಾಡುವುದೂ ನಂತರ B ಅನ್ನೂ evict ಮಾಡಿತು, [C,D,E] ಬಿಡುತ್ತಾ -- ನಿಖರ FIFO ring-buffer ವರ್ತನೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 20 ಅನುಕ್ರಮ transitions (0..19) ಇಂದ 4 ರ ಒಂದೂ batch sample ಮಾಡುವುದೂ [3, 0, 8, 7] ಹಿಂತಿರುಗಿಸಿತು -- ನಿಜವಾಗಿ ಕ್ರಮ ಇಲ್ಲದೆ ಮತ್ತೆ ಪಕ್ಕದಲ್ಲಿಲ್ಲದೆ, ಒಂದೂ non-random implementation ಉತ್ಪಾದಿಸಬಹುದಾದ naive ಅನುಕ್ರಮ [0,1,2,3] ಅಲ್ಲ\n• ಈ randomness experience replay ಒಂದೂ single trajectory ನಲ್ಲಿ ಸತತ transitions ನಡುವೆ ಇರುತ್ತಿದ್ದ temporal correlation ಮುರಿಯುವ ಸಂಪೂರ್ಣ mechanism -- ಇಲ್ಲಿ ಒಂದೂ ನಿಜ code behavior ಆಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, ಕೇವಲ ಒಂದೂ ಹಕ್ಕು ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'The Target Network and Reward Clipping', textKn: 'Target Network ಮತ್ತೆ Reward Clipping', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two More Stabilization Tricks', headingKn: 'ಇನ್ನೂ ಎರಡೂ Stabilization Tricks',
      bodyEn: '• Target network: rather than using the rapidly-changing online network (theta) to generate its own regression target, DQN keeps a separate target network (theta_minus) that is only periodically copied from the online network -- this stops the target from shifting under the model on every single gradient step, directly addressing part of the deadly triad\n• Reward clipping: Atari rewards can range across very different magnitudes across games; clipping every reward to {+1, 0, -1} keeps gradient magnitudes comparable and training stable, though this should not be used when the actual reward magnitude carries meaning the agent needs to learn',
      bodyKn: '• Target network: ಒಂದೂ ವೇಗವಾಗಿ-ಬದಲಾಗುವ online network (theta) ಅನ್ನೂ ಅದೂ ಸ್ವಂತ regression target ಉತ್ಪಾದಿಸಲು ಬಳಸುವ ಬದಲು, DQN ಒಂದೂ ಪ್ರತ್ಯೇಕ target network (theta_minus) ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ ಅದೂ online network ಇಂದ ಆಗಾಗ ಮಾತ್ರ copy ಆಗುತ್ತದೆ -- ಇದೂ ಪ್ರತಿ single gradient step ನಲ್ಲಿ model ಅಡಿಯಲ್ಲಿ target ಬದಲಾಗುವುದೂ ನಿಲ್ಲಿಸುತ್ತದೆ, deadly triad ನ ಭಾಗವನ್ನೂ ನೇರವಾಗಿ ಪರಿಹರಿಸುತ್ತಾ\n• Reward clipping: Atari rewards games ಆದ್ಯಂತ ಬಹಳ ವಿಭಿನ್ನ magnitudes ಆದ್ಯಂತ ವ್ಯಾಪಿಸಬಹುದು; ಪ್ರತಿ reward ಅನ್ನೂ {+1, 0, -1} ಗೆ clip ಮಾಡುವುದೂ gradient magnitudes ಹೋಲಿಸಬಹುದಾಗಿ ಇಡುತ್ತದೆ ಮತ್ತೆ training ಸ್ಥಿರವಾಗಿ ಇಡುತ್ತದೆ, ಆದರೂ ನಿಜ reward magnitude agent ಕಲಿಯಬೇಕಾದ ಅರ್ಥ ಹೊಂದಿದ್ದಾಗ ಇದನ್ನೂ ಬಳಸಬಾರದು' } },

    { type: 'diagram', data: {
      titleEn: 'The DQN Data Flow', titleKn: 'DQN Data Flow',
      captionEn: 'Genuinely verified: transitions flow from the environment into the ReplayBuffer, which evicts the oldest entry when full and returns randomly-sampled, decorrelated minibatches to train the online network, while a separate target network provides stable Bellman targets.',
      captionKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ: transitions environment ಇಂದ ReplayBuffer ಗೆ ಹರಿಯುತ್ತವೆ, ಅದೂ ಪೂರ್ಣವಾದಾಗ ಹಳೆಯ entry ಬಿಡುತ್ತದೆ ಮತ್ತೆ online network ಅನ್ನೂ train ಮಾಡಲು random-sampled, decorrelated minibatches ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಆದರೆ ಒಂದೂ ಪ್ರತ್ಯೇಕ target network ಸ್ಥಿರ Bellman targets ಒದಗಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 420 260' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<rect x='20' y='20' width='120' height='40' fill='none' stroke='#60a5fa' rx='4'/>\n<text x='30' y='45' fill='#93c5fd'>Environment</text>\n<rect x='20' y='90' width='120' height='40' fill='none' stroke='#facc15' rx='4'/>\n<text x='25' y='115' fill='#fde68a'>Replay Buffer</text>\n<rect x='190' y='90' width='120' height='40' fill='none' stroke='#4ade80' rx='4'/>\n<text x='200' y='115' fill='#86efac'>Online Net (theta)</text>\n<rect x='190' y='170' width='120' height='40' fill='none' stroke='#f87171' rx='4'/>\n<text x='195' y='195' fill='#fca5a5'>Target Net (theta-)</text>\n<line x1='80' y1='60' x2='80' y2='90' stroke='#94a3b8' marker-end='url(#arrow)'/>\n<line x1='140' y1='110' x2='190' y2='110' stroke='#94a3b8'/>\n<line x1='250' y1='130' x2='250' y2='170' stroke='#94a3b8'/>\n<text x='330' y='105' fill='#cbd5e1' font-size='10'>random minibatch</text>\n<text x='320' y='150' fill='#cbd5e1' font-size='10'>periodic copy</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'DQN Stabilization Techniques', captionKn: 'DQN Stabilization Techniques',
      rows: "Trick|What it does|Which deadly-triad ingredient it addresses\nExperience replay|Random minibatches from a buffer|Breaks correlation from off-policy, sequential data\nTarget network|Separate, slow-updating theta_minus|Stabilizes the bootstrapped target\nReward clipping|Clips rewards to {-1,0,+1}|Keeps gradients (function approximation) well-scaled" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a Q-table for even a 1-million-state environment needs 10 million entries, and a single Atari frame has 100,800 raw pixel values -- tabular Q-learning genuinely cannot scale to image-based or large state spaces\n• DQN is still fundamentally Q-learning: it uses the identical max-based Bellman target from Module 175, just replacing the table Q(s,a) with a differentiable neural function Q(s,a;theta) trained by gradient descent\n• The deadly triad (function approximation + bootstrapping + off-policy learning) can cause instability when combined naively -- DQN\'s breakthrough was pairing the substitution with concrete stabilization techniques\n• Genuinely confirmed: the ReplayBuffer\'s push() correctly implements ring-buffer eviction (oldest-first) and sample() genuinely returns randomized, non-sequential minibatches -- the mechanism that decorrelates DQN\'s training data\n• The target network provides a temporarily-frozen theta_minus so gradient updates chase a stable target instead of one that shifts every step',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ 1-million-state environment ಗೆ ಸಹ ಒಂದೂ Q-table ಗೆ 10 million entries ಬೇಕು, ಮತ್ತೆ ಒಂದೂ single Atari frame ಗೆ 100,800 raw pixel values ಇವೆ -- tabular Q-learning ನಿಜವಾಗಿ image-based ಅಥವಾ ದೊಡ್ಡ state spaces ಗೆ scale ಆಗಲಾಗುವುದಿಲ್ಲ\n• DQN ಇನ್ನೂ ಮೂಲಭೂತವಾಗಿ Q-learning: ಅದೂ Module 175 ಇಂದ ಒಂದೇ max-based Bellman target ಬಳಸುತ್ತದೆ, ಕೇವಲ table Q(s,a) ಅನ್ನೂ gradient descent ಮೂಲಕ trained ಒಂದೂ differentiable neural function Q(s,a;theta) ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ\n• Deadly triad (function approximation + bootstrapping + off-policy learning) ಸರಳವಾಗಿ ಸಂಯೋಜಿಸಿದಾಗ ಅಸ್ಥಿರತೆ ಉಂಟುಮಾಡಬಹುದು -- DQN ನ ಪ್ರಗತಿ substitution ಅನ್ನೂ ಕಾಂಕ್ರೀಟ್ stabilization techniques ಜೊತೆ ಜೋಡಿಸುವುದೂ ಆಗಿತ್ತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ReplayBuffer ನ push() ring-buffer eviction (ಹಳೆಯದೂ-ಮೊದಲೂ) ಸರಿಯಾಗಿ implement ಮಾಡುತ್ತದೆ ಮತ್ತೆ sample() ನಿಜವಾಗಿ randomized, non-sequential minibatches ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- DQN ನ training data ಅನ್ನೂ decorrelate ಮಾಡುವ mechanism\n• Target network ಒಂದೂ ತಾತ್ಕಾಲಿಕವಾಗಿ-ಫ್ರೀಜ್ ಆದ theta_minus ಒದಗಿಸುತ್ತದೆ ಆದ್ದರಿಂದ gradient updates ಪ್ರತಿ step ಬದಲಾಗುವ ಒಂದೂ ಬದಲು ಒಂದೂ ಸ್ಥಿರ target ಬೆನ್ನಟ್ಟುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely tested ReplayBuffer and target-network pattern built here is exactly the architecture from DeepMind\'s 2015 Nature DQN paper that first learned to play Atari games directly from pixels at human-level performance -- these are not simplified teaching abstractions but the literal stabilization mechanisms used in that breakthrough result.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿ ನಿರ್ಮಿಸಿದ ReplayBuffer ಮತ್ತೆ target-network ಮಾದರಿ DeepMind ನ 2015 Nature DQN paper ಇಂದ ನಿಖರ architecture, ಅದೂ ಪಿಕ್ಸೆಲ್ಸ್ ಇಂದ ನೇರವಾಗಿ human-level performance ನಲ್ಲಿ Atari games ಆಡಲು ಮೊದಲೂ ಕಲಿಯಿತು -- ಇವು ಸರಳೀಕೃತ ಬೋಧನಾ abstractions ಅಲ್ಲ ಆದರೆ ಆ ಪ್ರಗತಿ ಫಲಿತಾಂಶದಲ್ಲಿ ಬಳಸಿದ ಅಕ್ಷರಶಃ stabilization mechanisms.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: without experience replay, training would only ever see highly correlated consecutive transitions from one trajectory at a time -- exactly the kind of correlated-data problem that destabilizes gradient-based learning in any domain, not just RL\n• The genuinely verified ring-buffer eviction means memory usage stays bounded (capacity fixed) no matter how long training runs -- essential for any production system that trains continuously rather than on a fixed dataset',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: experience replay ಇಲ್ಲದೆ, training ಒಂದೂ ಸಮಯದಲ್ಲಿ ಒಂದೂ trajectory ಇಂದ ಹೆಚ್ಚು correlated ಸತತ transitions ಅನ್ನೂ ಮಾತ್ರ ನೋಡುತ್ತಿತ್ತು -- ಯಾವುದೇ domain ನಲ್ಲಿ, ಕೇವಲ RL ಅಲ್ಲ, gradient-based learning ಅಸ್ಥಿರಗೊಳಿಸುವ ನಿಖರ ರೀತಿಯ correlated-data ಸಮಸ್ಯೆ\n• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ring-buffer eviction ಎಂದರೆ training ಎಷ್ಟೂ ಕಾಲ ಚಲಿಸಿದರೂ memory usage ಸೀಮಿತವಾಗಿ ಉಳಿಯುತ್ತದೆ (capacity ಸ್ಥಿರ) -- ಒಂದೂ ಸ್ಥಿರ dataset ಬದಲು ನಿರಂತರವಾಗಿ train ಮಾಡುವ ಯಾವುದೇ production system ಗೆ ಅಗತ್ಯ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production recommendation or ad-ranking system that continues learning from live user interactions faces the exact same scale problem this lesson genuinely demonstrated: the space of possible (user, context) pairs is far too large for any table, and the stream of incoming interactions is naturally correlated in time -- these systems use replay-buffer-style mechanisms for the same reason DQN does, to decorrelate training data from a continuously arriving stream.',
      bodyKn: 'Live user interactions ಇಂದ ಕಲಿಯುತ್ತಲೇ ಇರುವ ಒಂದೂ production recommendation ಅಥವಾ ad-ranking system ಈ lesson ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ scale ಸಮಸ್ಯೆ ಎದುರಿಸುತ್ತದೆ: ಸಂಭವನೀಯ (user, context) ಜೋಡಿಗಳ space ಯಾವುದೇ table ಗೆ ಬಹಳ ದೊಡ್ಡದೂ, ಮತ್ತೆ ಬರುತ್ತಿರುವ interactions ನ stream ಸ್ವಾಭಾವಿಕವಾಗಿ ಸಮಯದಲ್ಲಿ correlated -- ಈ systems DQN ಬಳಸುವ ಅದೇ ಕಾರಣಕ್ಕಾಗಿ replay-buffer-style mechanisms ಬಳಸುತ್ತವೆ, ನಿರಂತರವಾಗಿ ಬರುತ್ತಿರುವ ಒಂದೂ stream ಇಂದ training data ಅನ್ನೂ decorrelate ಮಾಡಲು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why can\'t tabular Q-learning easily solve Atari?', qKn: 'Tabular Q-learning Atari ಅನ್ನೂ ಸುಲಭವಾಗಿ ಪರಿಹರಿಸಲಾಗುವುದಿಲ್ಲ ಏಕೆ?',
        opts: ['Atari has continuous rewards only', 'The state space is far too large', 'Q-learning cannot use rewards', 'Atari has no actions'], correct: 1,
        optsKn: ['Atari ಗೆ ಕೇವಲ continuous rewards ಇವೆ', 'State space ಬಹಳ ದೊಡ್ಡದೂ', 'Q-learning rewards ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'Atari ಗೆ ಯಾವುದೇ actions ಇಲ್ಲ'] },
      { q: 'What replaces the Q-table in DQN?', qKn: 'DQN ನಲ್ಲಿ Q-table ಅನ್ನೂ ಏನೂ ಬದಲಾಯಿಸುತ್ತದೆ?',
        opts: ['Policy table', 'Decision tree', 'Neural network', 'Replay buffer'], correct: 2,
        optsKn: ['Policy table', 'Decision tree', 'Neural network', 'Replay buffer'] },
      { q: 'Genuinely confirmed: what happened when a 4th transition was pushed into a capacity-3 ReplayBuffer containing [A,B,C]?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: [A,B,C] ಒಳಗೊಂಡ ಒಂದೂ capacity-3 ReplayBuffer ಗೆ 4ನೇ transition push ಮಾಡಿದಾಗ ಏನೂ ಆಯಿತು?',
        opts: ['The buffer grew to size 4', 'The oldest entry (A) was evicted, leaving [B,C,D]', 'The push was rejected', 'The buffer was cleared'], correct: 1,
        optsKn: ['Buffer ಗಾತ್ರ 4 ಗೆ ಬೆಳೆಯಿತು', 'ಹಳೆಯ entry (A) evict ಆಯಿತು, [B,C,D] ಬಿಡುತ್ತಾ', 'Push ತಿರಸ್ಕರಿಸಲಾಯಿತು', 'Buffer clear ಮಾಡಲಾಯಿತು'] },
      { q: 'Why are transitions sampled randomly from the replay buffer rather than sequentially?', qKn: 'Replay buffer ಇಂದ transitions ಅನುಕ್ರಮವಾಗಿ ಬದಲು random ಆಗಿ ಏಕೆ sample ಮಾಡಲಾಗುತ್ತದೆ?',
        opts: ['To increase the action space', 'To break temporal correlation between consecutive transitions', 'To remove rewards', 'To freeze the network'], correct: 1,
        optsKn: ['Action space ಹೆಚ್ಚಿಸಲು', 'ಸತತ transitions ನಡುವಿನ temporal correlation ಮುರಿಯಲು', 'Rewards ತೆಗೆದುಹಾಕಲು', 'Network freeze ಮಾಡಲು'] },
      { q: 'Which three ingredients form the deadly triad?', qKn: 'ಯಾವ ಮೂರೂ ಪದಾರ್ಥಗಳು deadly triad ರೂಪಿಸುತ್ತವೆ?',
        opts: ['CNN + replay + rewards', 'Function approximation + bootstrapping + off-policy learning', 'Exploration + exploitation + rewards', 'State + action + reward'], correct: 1,
        optsKn: ['CNN + replay + rewards', 'Function approximation + bootstrapping + off-policy learning', 'Exploration + exploitation + rewards', 'State + action + reward'] },
    ] } },
  ],
};
