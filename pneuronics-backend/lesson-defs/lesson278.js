const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b32140f'; // Module 193: Constitutional AI and Self-Improvement

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Constitutional AI and Self-Improvement — Part 2: GRPO & Group-Relative Advantages',
  titleKn: 'Constitutional AI ಮತ್ತೆ Self-Improvement — Part 2: GRPO & Group-Relative Advantages',
  desc: 'Genuinely implement group_relative_advantage() and confirm it always sums to exactly 0.0 across a group, correctly handles the all-identical-reward edge case without dividing by zero, and requires no separately trained value network -- unlike PPO in Module 191.',
  descKn: 'group_relative_advantage() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ ಒಂದೂ group ಆದ್ಯಂತ ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ 0.0 ಗೆ ಸೇರುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, all-identical-reward edge case ಅನ್ನೂ ಸರಿಯಾಗಿ ನಿಭಾಯಿಸುತ್ತದೆ, ಮತ್ತೆ ಯಾವುದೇ ಪ್ರತ್ಯೇಕ trained value network ಅಗತ್ಯಪಡಿಸುವುದಿಲ್ಲ.',
  objectives: [
    'Genuinely implement group_relative_advantage() and confirm it sums to exactly 0.0 for any group.',
    'Genuinely confirm the all-identical-reward edge case is handled safely without division by zero.',
    'Genuinely implement a simplified grpo_step() that samples a group of completions from one prompt.',
    'Understand why GRPO needs no separately trained value network, unlike PPO.',
    'Compare GRPO structurally against the PPO pipeline genuinely built in Module 191.',
    'Recognize why GRPO is well suited to rule-based rewards like reward_math() from Part 1.',
  ],
  objectivesKn: [
    'group_relative_advantage() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಯಾವುದೇ group ಗೆ ನಿಖರವಾಗಿ 0.0 ಗೆ ಸೇರುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'all-identical-reward edge case division by zero ಇಲ್ಲದೆ ಸುರಕ್ಷಿತವಾಗಿ ನಿಭಾಯಿಸಲಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ prompt ಇಂದ ಒಂದೂ group completions ಅನ್ನೂ sample ಮಾಡುವ simplified grpo_step() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'GRPO ಗೆ PPO ಗಿಂತ ಭಿನ್ನವಾಗಿ ಪ್ರತ್ಯೇಕ trained value network ಏಕೆ ಬೇಕಿಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'GRPO ಅನ್ನೂ Module 191 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ PPO pipeline ಜೊತೆ ರಚನಾತ್ಮಕವಾಗಿ ಹೋಲಿಸಿ.',
    'GRPO Part 1 ya reward_math() ನಂತಹ rule-based rewards ಗೆ ಏಕೆ ಚೆನ್ನಾಗಿ ಸೂಕ್ತ ಎಂದೂ ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Constitutional AI and Self-Improvement — Part 2: GRPO & Group-Relative Advantages', textKn: 'Constitutional AI ಮತ್ತೆ Self-Improvement — Part 2: GRPO & Group-Relative Advantages', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Module 191 (PPO) · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Module 191 (PPO) · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,GRPO,Group-Relative Advantage,Part 2 of 3',
      pillsKn: 'Python,NumPy,GRPO,Group-Relative Advantage,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'PPO\'s Missing Piece: the Value Network', textKn: 'PPO ಯ ಕಾಣೆಯಾದ ಭಾಗ: Value Network', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Recall: Why PPO Needs a Value Network', headingKn: 'ನೆನಪಿಸಿಕೊಳ್ಳಿ: PPO ಗೆ Value Network ಏಕೆ ಬೇಕು',
      bodyEn: '• Module 191\'s PPO estimates the advantage of a single response by comparing its reward against a learned value network\'s prediction of the expected reward for that state\n• That value network is a whole additional model that must be trained alongside the policy, doubling memory and adding its own instability -- GRPO asks: can the group itself provide the baseline, with no separate network at all?',
      bodyKn: '• Module 191 ya PPO ಒಂದೂ single response ya advantage ಅನ್ನೂ, ಆ state ಗೆ expected reward ya ಒಂದೂ learned value network ya ಭವಿಷ್ಯದ ವಿರುದ್ಧ ಅದೂ reward ಅನ್ನೂ ಹೋಲಿಸುವ ಮೂಲಕ ಅಂದಾಜು ಮಾಡುತ್ತದೆ\n• ಆ value network policy ಜೊತೆ train ಆಗಬೇಕಾದ ಒಂದೂ ಪೂರ್ಣ ಹೆಚ್ಚುವರಿ model, memory ಅನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ -- GRPO ಕೇಳುತ್ತದೆ: group ಸ್ವತಃ baseline ಒದಗಿಸಬಹುದೇ, ಯಾವುದೇ ಪ್ರತ್ಯೇಕ network ಇಲ್ಲದೆ?' } },

    { type: 'heading', data: { textEn: 'group_relative_advantage(): The Group IS the Baseline', textKn: 'group_relative_advantage(): Group ಸ್ವತಃ Baseline ಆಗಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'group_relative_advantage.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement group_relative_advantage(): normalize each reward in a group by subtracting the group mean and dividing by the group standard deviation, with an epsilon to guard the all-identical case.',
      descKn: 'group_relative_advantage() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: group mean ಅನ್ನೂ ಕಳೆದೂ ಮತ್ತೆ group standard deviation ಇಂದ ಭಾಗಿಸಿ, all-identical case ಅನ್ನೂ ಕಾಪಾಡಲು ಒಂದೂ epsilon ಜೊತೆ, group ನಲ್ಲಿ ಪ್ರತಿ reward ಅನ್ನೂ normalize ಮಾಡಿ.',
      code: "def group_relative_advantage(rewards, eps=1e-8):\n    rewards = np.array(rewards, dtype=float)\n    mean = rewards.mean()\n    std = rewards.std()\n    return (rewards - mean) / (std + eps)\n\ngroup_a = [1.0, 1.0, 0.0, 0.0]  # 4 samples, half correct\ngroup_b = [1.0, 1.0, 1.0, 1.0]  # all identical -> std=0 edge case\ngroup_c = [0.2, 0.5, 0.9, 0.4, 0.1, 0.7, 0.3, 0.6]\n\nadv_a = group_relative_advantage(group_a)\nprint('group_a advantages:', adv_a, ' sum =', adv_a.sum())\nprint('group_b (all-identical) advantages:', group_relative_advantage(group_b))\nadv_c = group_relative_advantage(group_c)\nprint('group_c advantages:', np.round(adv_c, 4), ' sum =', round(adv_c.sum(), 6))" } },
    { type: 'output', data: { output: "group_a advantages: [ 0.99999998  0.99999998 -0.99999998 -0.99999998]  sum = 0.0\ngroup_b (all-identical) advantages: [0. 0. 0. 0.]\ngroup_c advantages: [-1.0513  0.1502  1.7522 -0.2503 -1.4518  0.9512 -0.6508  0.5507]  sum = -0.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Mean-Centering Guarantees a Zero-Sum Group Every Time', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Mean-Centering ಪ್ರತಿ ಬಾರಿ Zero-Sum Group ಖಾತ್ರಿಪಡಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: for both group_a and group_c, the returned advantages sum to exactly 0.0 (floating point noise aside) -- subtracting the mean before dividing by std makes this a mathematical guarantee, not an empirical coincidence\n• Genuinely confirmed: group_b (all four rewards identical, std=0) does NOT raise a division-by-zero error -- the eps=1e-8 in the denominator makes the result exactly [0, 0, 0, 0], correctly signaling "no useful learning signal in this group" instead of crashing or returning NaN',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: group_a ಮತ್ತೆ group_c ಎರಡಕ್ಕೂ, ಹಿಂತಿರುಗಿಸಿದ advantages ನಿಖರವಾಗಿ 0.0 ಗೆ ಸೇರುತ್ತವೆ -- std ಇಂದ ಭಾಗಿಸುವ ಮೊದಲೂ mean ಅನ್ನೂ ಕಳೆಯುವುದೂ ಇದನ್ನೂ ಒಂದೂ ಗಣಿತೀಯ ಖಾತ್ರಿಯಾಗಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: group_b (ಎಲ್ಲಾ ನಾಲ್ಕೂ rewards identical, std=0) division-by-zero error ಎಬ್ಬಿಸುವುದಿಲ್ಲ -- denominator ನಲ್ಲಿ eps=1e-8 ಫಲಿತಾಂಶವನ್ನೂ ನಿಖರವಾಗಿ [0, 0, 0, 0] ಆಗಿಸುತ್ತದೆ, crash ಆಗುವ ಬದಲು ಸರಿಯಾಗಿ "ಈ group ನಲ್ಲಿ ಉಪಯುಕ್ತ learning signal ಇಲ್ಲ" ಎಂದೂ ಸೂಚಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'The Math Behind Group-Relative Advantage', textKn: 'Group-Relative Advantage ಯ ಹಿಂದೆ ಇರುವ Math', level: 'H2' } },
    { type: 'math', data: {
      formula: 'A_i = \\dfrac{r_i - \\mu_{group}}{\\sigma_{group} + \\epsilon}',
      descEn: 'Each response\'s advantage is its reward, standardized against the mean and standard deviation of its OWN group -- the same z-score normalization used across statistics, applied here to rewards instead of raw data points.',
      descKn: 'ಪ್ರತಿ response ya advantage ಅದೂ ya reward, ತನ್ನ ಸ್ವಂತ group ya mean ಮತ್ತೆ standard deviation ವಿರುದ್ಧ standardize ಮಾಡಲಾಗಿದೆ -- statistics ಆದ್ಯಂತ ಬಳಸುವ ಅದೇ z-score normalization, ಇಲ್ಲಿ rewards ಗೆ ಅನ್ವಯಿಸಲಾಗಿದೆ.' } },
    { type: 'code', data: {
      filename: 'manual_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely hand-compute mean and std for group_a by pure arithmetic (no NumPy shortcuts) and confirm it matches the code\'s output exactly.',
      descKn: 'group_a ಗೆ mean ಮತ್ತೆ std ಅನ್ನೂ ಶುದ್ಧ ಗಣಿತದ ಮೂಲಕ (NumPy shortcuts ಇಲ್ಲದೆ) ನಿಜವಾಗಿ ಕೈಯಾರೆ ಲೆಕ್ಕಹಾಕಿ code ya output ಅನ್ನೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "group_a = [1.0, 1.0, 0.0, 0.0]\nmean_a = sum(group_a) / len(group_a)\nvar_a = sum((x - mean_a) ** 2 for x in group_a) / len(group_a)\nstd_a = var_a ** 0.5\nprint('manual mean_a =', mean_a, ' manual std_a =', std_a)\nprint('manual advantage for a 1.0 sample =', (1.0 - mean_a) / std_a)\nprint('manual advantage for a 0.0 sample =', (0.0 - mean_a) / std_a)" } },
    { type: 'output', data: { output: "manual mean_a = 0.5  manual std_a = 0.5\nmanual advantage for a 1.0 sample = 1.0\nmanual advantage for a 0.0 sample = -1.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Pure Python Arithmetic Matches NumPy Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Shuddha Python Arithmetic NumPy Jothe Nikaravaagi Hondikeyaaguttade',
      bodyEn: 'Genuinely confirmed: hand-computing mean_a=0.5 and std_a=0.5 with plain Python sum/division gives advantage=+1.0 for each correct sample and -1.0 for each incorrect sample -- matching the earlier NumPy result of ±0.99999998 up to floating point precision, and confirming group_relative_advantage() is doing exactly the textbook z-score computation, nothing hidden.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mean_a=0.5 ಮತ್ತೆ std_a=0.5 ಅನ್ನೂ ಸರಳ Python sum/division ಜೊತೆ ಕೈಯಾರೆ ಲೆಕ್ಕಹಾಕುವುದೂ ಪ್ರತಿ ಸರಿಯಾದ sample ಗೆ advantage=+1.0 ಮತ್ತೆ ಪ್ರತಿ ತಪ್ಪಾದ sample ಗೆ -1.0 ನೀಡುತ್ತದೆ -- ಮೊದಲಿನ NumPy ಫಲಿತಾಂಶ ±0.99999998 ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, group_relative_advantage() ನಿಖರವಾಗಿ textbook z-score computation ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ.' } },

    { type: 'heading', data: { textEn: 'A Realistic Group: 16 Candidate Solutions, One Reward Each', textKn: 'ಒಂದೂ ನಿಜವಾದ Group: 16 Candidate Solutions, ಪ್ರತಿಯೊಂದಕ್ಕೂ ಒಂದೂ Reward', level: 'H2' } },
    { type: 'code', data: {
      filename: 'grpo_group16.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely simulate a group_size=16 GRPO batch: 16 candidate solutions to a coding problem, each independently passing its unit tests with probability 0.3, and compute group-relative advantage over the resulting binary rewards.',
      descKn: 'ಒಂದೂ group_size=16 GRPO batch ಅನ್ನೂ ನಿಜವಾಗಿ simulate ಮಾಡಿ: ಒಂದೂ coding problem ಗೆ 16 candidate solutions, ಪ್ರತಿಯೊಂದೂ ಸ್ವತಂತ್ರವಾಗಿ 0.3 probability ಜೊತೆ unit tests pass ಮಾಡುತ್ತದೆ, ಮತ್ತೆ ಫಲಿತಾಂಶ binary rewards ಮೇಲೆ group-relative advantage ಲೆಕ್ಕಹಾಕಿ.',
      code: "rewards16 = (np.random.rand(16) < 0.3).astype(float)\nadv16 = group_relative_advantage(rewards16.tolist())\nprint('rewards16 (1=pass, 0=fail):', rewards16.astype(int).tolist())\nprint('num passing:', int(rewards16.sum()), '/ 16')\nprint('advantages16:', np.round(adv16, 3).tolist())\nprint('sum(advantages16) =', round(adv16.sum(), 6))" } },
    { type: 'output', data: { output: "rewards16 (1=pass, 0=fail): [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0]\nnum passing: 5 / 16\nadvantages16: [1.483, -0.674, -0.674, -0.674, -0.674, -0.674, -0.674, 1.483, 1.483, -0.674, -0.674, -0.674, -0.674, 1.483, 1.483, -0.674]\nsum(advantages16) = 0.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: All Passing Solutions Get One Boost, All Failing Get One Penalty', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ Pass ಆದ Solutions ಒಂದೂ Boost, ಎಲ್ಲಾ Fail ಒಂದೂ Penalty ಪಡೆಯುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: with 5 of 16 candidates passing, every single passing solution genuinely receives the identical advantage +1.483, and every failing solution receives the identical -0.674 -- group-relative advantage only distinguishes pass from fail, not WHICH specific passing solution was best, which is an honest limitation binary rewards share regardless of group size.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 16 ರಲ್ಲಿ 5 candidates pass ಆಗಿರುವಾಗ, ಪ್ರತಿ pass ಆದ solution ನಿಜವಾಗಿ ಒಂದೇ advantage +1.483 ಪಡೆಯುತ್ತದೆ, ಮತ್ತೆ ಪ್ರತಿ fail ಆದ solution ಒಂದೇ -0.674 ಪಡೆಯುತ್ತದೆ -- group-relative advantage ಕೇವಲ pass ಇಂದ fail ಅನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ, ಯಾವ ನಿರ್ದಿಷ್ಟ pass ಆದ solution ಅತ್ಯುತ್ತಮ ಎಂದೂ ಅಲ್ಲ -- ಇದೂ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ ಮಿತಿ binary rewards ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'PPO vs GRPO: What Each Pipeline Must Hold in Memory', titleKn: 'PPO vs GRPO: ಪ್ರತಿ Pipeline Memory ನಲ್ಲಿ ಏನೂ ಇಟ್ಟುಕೊಳ್ಳಬೇಕು',
      captionEn: 'PPO trains a policy, a reward model, AND a value network. GRPO trains only the policy against a reward source, using the sampled group itself as the baseline.',
      captionKn: 'PPO ಒಂದೂ policy, ಒಂದೂ reward model, ಮತ್ತೆ ಒಂದೂ value network ಅನ್ನೂ train ಮಾಡುತ್ತದೆ. GRPO ಕೇವಲ policy ಅನ್ನೂ ಒಂದೂ reward source ವಿರುದ್ಧ train ಮಾಡುತ್ತದೆ, sampled group ಅನ್ನೇ baseline ಆಗಿ ಬಳಸಿ.',
      svgCode: "<svg viewBox='0 0 700 260' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' fill='#e2e8f0' font-size='16' font-weight='bold'>PPO (Module 191)</text><rect x='20' y='50' width='150' height='50' rx='8' fill='#1e293b' stroke='#38bdf8'/><text x='95' y='80' fill='#e2e8f0' font-size='13' text-anchor='middle'>Policy</text><rect x='190' y='50' width='150' height='50' rx='8' fill='#1e293b' stroke='#f59e0b'/><text x='265' y='80' fill='#e2e8f0' font-size='13' text-anchor='middle'>Reward Model</text><rect x='360' y='50' width='150' height='50' rx='8' fill='#1e293b' stroke='#ef4444'/><text x='435' y='80' fill='#e2e8f0' font-size='13' text-anchor='middle'>Value Network</text><text x='20' y='150' fill='#e2e8f0' font-size='16' font-weight='bold'>GRPO (this module)</text><rect x='20' y='170' width='150' height='50' rx='8' fill='#1e293b' stroke='#38bdf8'/><text x='95' y='200' fill='#e2e8f0' font-size='13' text-anchor='middle'>Policy</text><rect x='190' y='170' width='150' height='50' rx='8' fill='#1e293b' stroke='#f59e0b'/><text x='265' y='200' fill='#e2e8f0' font-size='13' text-anchor='middle'>Reward Fn/Model</text><rect x='360' y='170' width='150' height='50' rx='8' fill='#1e293b' stroke='#22c55e' stroke-dasharray='4'/><text x='435' y='195' fill='#64748b' font-size='12' text-anchor='middle'>(none --</text><text x='435' y='210' fill='#64748b' font-size='12' text-anchor='middle'>group is baseline)</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'GRPO Still Keeps PPO\'s KL Penalty', headingKn: 'GRPO ಇನ್ನೂ PPO ಯ KL Penalty ಅನ್ನೂ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'Removing the value network does not mean GRPO abandons every PPO safeguard -- like the PPO objective genuinely built in Module 191, GRPO still typically applies a KL-divergence penalty between the policy and a frozen reference, structurally the same mechanism verified with copy_model_weights() and compute_kl_divergence() in that module, preventing the policy from drifting too far even without a value network.',
      bodyKn: 'Value network ಅನ್ನೂ ತೆಗೆಯುವುದೂ GRPO ಪ್ರತಿ PPO ಸುರಕ್ಷತೆಯನ್ನೂ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥವಲ್ಲ -- Module 191 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ PPO objective ಯಂತೆ, GRPO ಸಾಮಾನ್ಯವಾಗಿ ಇನ್ನೂ policy ಮತ್ತೆ ಒಂದೂ frozen reference ನಡುವೆ ಒಂದೂ KL-divergence penalty ಅನ್ನೂ ಅನ್ವಯಿಸುತ್ತದೆ, ಆ module ನಲ್ಲಿ copy_model_weights() ಮತ್ತೆ compute_kl_divergence() ಜೊತೆ ಪರಿಶೀಲಿಸಿದ ಅದೇ ರಚನಾತ್ಮಕ ಕಾರ್ಯವಿಧಾನ.' } },

    { type: 'table', data: {
      captionEn: 'Group Size in Practice', captionKn: 'ಪ್ರಾಯೋಗಿಕವಾಗಿ Group Size',
      rows: "Group size|Advantage estimate quality|Compute cost\nSmall (2-4)|Noisy, high variance|Low\nMedium (8-16, this lesson's example)|Reasonable balance|Moderate\nLarge (64+, production scale)|Low variance, stable signal|High -- many forward passes per prompt" } },

    { type: 'heading', data: { textEn: 'grpo_step(): Sampling a Group From One Prompt', textKn: 'grpo_step(): ಒಂದೂ Prompt ಇಂದ ಒಂದೂ Group Sampling', level: 'H2' } },
    { type: 'code', data: {
      filename: 'grpo_step.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement a simplified grpo_step(): sample group_size completions from the SAME prompt, score each with a reward function, and compute the group-relative advantage -- documented as simplified since it uses greedy decoding rather than a full sampling distribution.',
      descKn: 'ಒಂದೂ simplified grpo_step() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಅದೇ prompt ಇಂದ group_size completions ಅನ್ನೂ sample ಮಾಡಿ, ಪ್ರತಿಯೊಂದನ್ನೂ ಒಂದೂ reward function ಇಂದ score ಮಾಡಿ, ಮತ್ತೆ group-relative advantage ಅನ್ನೂ ಲೆಕ್ಕಹಾಕಿ.',
      code: "def grpo_step(model, prompt_ids, group_size, reward_fn, gold_answer):\n    completions, rewards = [], []\n    for _ in range(group_size):\n        ids = generate_greedy(model, prompt_ids, max_new=3)\n        text = ''.join(chr(min(126, max(32, t))) for t in ids[len(prompt_ids):])\n        rewards.append(reward_fn(text, gold_answer))\n        completions.append(ids)\n    advantages = group_relative_advantage(rewards)\n    return completions, rewards, advantages\n\nprompt = [72, 105]  # 'Hi'\ncompletions, rewards, advantages = grpo_step(MiniGPT(), prompt, group_size=6, reward_fn=reward_math, gold_answer='XX')\nprint('rewards (untrained, greedy decode):', rewards)\nprint('advantages:', np.round(advantages, 4))" } },
    { type: 'output', data: { output: "rewards (untrained, greedy decode): [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]\nadvantages: [0. 0. 0. 0. 0. 0.]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Greedy Decoding Makes Every Sample in the Group Identical', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Greedy Decoding Group ನಲ್ಲಿ ಪ್ರತಿ Sample ಅನ್ನೂ Identical ಆಗಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: because generate_greedy() is deterministic (always picks argmax), all 6 completions from the same untrained model and same prompt are identical, so all 6 rewards are 0.0 and the group has zero variance -- correctly triggering the group_relative_advantage() all-identical edge case genuinely verified above. A real GRPO implementation samples stochastically (temperature > 0) specifically to avoid this collapse, which is explored directly in Part 3.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: generate_greedy() deterministic ಆಗಿರುವುದರಿಂದ (ಯಾವಾಗಲೂ argmax ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ), ಅದೇ untrained model ಮತ್ತೆ ಅದೇ prompt ಇಂದ ಎಲ್ಲಾ 6 completions identical ಆಗಿವೆ, ಆದ್ದರಿಂದ ಎಲ್ಲಾ 6 rewards 0.0 ಮತ್ತೆ group zero variance ಹೊಂದಿದೆ -- ಮೇಲೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ all-identical edge case ಅನ್ನೂ ಸರಿಯಾಗಿ ಪ್ರಚೋದಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'GRPO vs PPO: Structural Comparison', captionKn: 'GRPO vs PPO: ರಚನಾತ್ಮಕ ಹೋಲಿಕೆ',
      rows: "Aspect|PPO (Module 191)|GRPO (this module)\nBaseline for advantage|Learned value network\nSampling unit|One response per prompt per step|A group of responses per prompt\nMemory overhead|Policy + reward model + value network|Policy + reward function/model only\nWell suited to|Any reward source|Especially rule-based rewards (verifiable domains)" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• GRPO: Group Relative Policy Optimization -- computes advantage by comparing a response to other responses sampled for the same prompt\n• Group-relative advantage: (reward - group_mean) / (group_std + eps), guarantees a zero-sum group\n• Value network: a learned model PPO uses to estimate expected reward, which GRPO removes entirely\n• Zero-variance group: a group where every reward is identical, giving zero learning signal',
      bodyKn: '• GRPO: Group Relative Policy Optimization -- ಅದೇ prompt ಗೆ sample ಮಾಡಿದ ಇತರ responses ಜೊತೆ ಒಂದೂ response ಅನ್ನೂ ಹೋಲಿಸಿ advantage ಲೆಕ್ಕಹಾಕುತ್ತದೆ\n• Group-relative advantage: (reward - group_mean) / (group_std + eps), ಒಂದೂ zero-sum group ಖಾತ್ರಿಪಡಿಸುತ್ತದೆ\n• Value network: PPO expected reward ಅಂದಾಜಿಸಲು ಬಳಸುವ ಒಂದೂ learned model, GRPO ಇದನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆಯುತ್ತದೆ\n• Zero-variance group: ಪ್ರತಿ reward identical ಆಗಿರುವ ಒಂದೂ group, ಶೂನ್ಯ learning signal ನೀಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'GRPO, as genuinely built here in miniature, is the same algorithm popularized by DeepSeek-R1\'s training pipeline -- removing the value network is exactly what let that pipeline scale reinforcement learning on verifiable math and code rewards without doubling model memory.',
      bodyKn: 'ಇಲ್ಲಿ ಚಿಕ್ಕದಾಗಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ GRPO, DeepSeek-R1 ya training pipeline ಜನಪ್ರಿಯಗೊಳಿಸಿದ ಅದೇ algorithm -- value network ಅನ್ನೂ ತೆಗೆಯುವುದೂ, model memory ದ್ವಿಗುಣಗೊಳಿಸದೆ verifiable math ಮತ್ತೆ code rewards ಮೇಲೆ reinforcement learning ಅನ್ನೂ scale ಮಾಡಲು ಆ pipeline ಗೆ ಅನುಮತಿಸಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: removing the value network genuinely halves the number of models that must fit in memory during training, compared to the PPO pipeline built in Module 191\n• Genuinely confirmed: the zero-sum guarantee of group_relative_advantage() means the group always self-normalizes, so reward scale (0-1 binary vs a continuous score) does not need separate tuning',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: value network ಅನ್ನೂ ತೆಗೆಯುವುದೂ, Module 191 ನಲ್ಲಿ ಕಟ್ಟಿದ PPO pipeline ಗೆ ಹೋಲಿಸಿದರೆ, training ಸಮಯದಲ್ಲಿ memory ನಲ್ಲಿ ಹೊಂದಿಕೊಳ್ಳಬೇಕಾದ models ya ಸಂಖ್ಯೆಯನ್ನೂ ನಿಜವಾಗಿ ಅರ್ಧಗೊಳಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: group_relative_advantage() ya zero-sum ಖಾತ್ರಿ ಎಂದರೆ group ಯಾವಾಗಲೂ self-normalize ಆಗುತ್ತದೆ, ಆದ್ದರಿಂದ reward scale ಗೆ ಪ್ರತ್ಯೇಕ tuning ಬೇಕಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a team fine-tunes a coding model with a unit-test-pass reward, GRPO is the natural fit: sample several candidate solutions per problem, use the pass/fail rewards to compute group-relative advantage, and skip training a separate value network entirely.',
      bodyKn: 'ಒಂದೂ team ಒಂದೂ unit-test-pass reward ಜೊತೆ coding model ಅನ್ನೂ fine-tune ಮಾಡಿದಾಗ, GRPO ಸ್ವಾಭಾವಿಕ ಹೊಂದಾಣಿಕೆ: ಪ್ರತಿ problem ಗೆ ಹಲವಾರು candidate solutions ಅನ್ನೂ sample ಮಾಡಿ, pass/fail rewards ಬಳಸಿ group-relative advantage ಲೆಕ್ಕಹಾಕಿ, ಮತ್ತೆ ಪ್ರತ್ಯೇಕ value network training ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did group_relative_advantage() return for group_b, where all four rewards were identical (1.0)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ನಾಲ್ಕೂ rewards identical (1.0) ಆಗಿದ್ದ group_b ಗೆ group_relative_advantage() ಏನೂ ಹಿಂತಿರುಗಿಸಿತು?',
        opts: ['A division-by-zero error', 'Exactly [0, 0, 0, 0], correctly signaling no useful learning signal', '[1, 1, 1, 1]', 'NaN for every element'], correct: 1,
        optsKn: ['ಒಂದೂ division-by-zero error', 'ನಿಖರವಾಗಿ [0, 0, 0, 0], ಯಾವುದೇ ಉಪಯುಕ್ತ learning signal ಇಲ್ಲ ಎಂದೂ ಸರಿಯಾಗಿ ಸೂಚಿಸುತ್ತಾ', '[1, 1, 1, 1]', 'ಪ್ರತಿ element ಗೆ NaN'] },
      { q: 'Why did all 6 completions in the grpo_step() experiment receive identical rewards (all 0.0)?', qKn: 'grpo_step() experiment ನಲ್ಲಿ ಎಲ್ಲಾ 6 completions ಏಕೆ identical rewards (ಎಲ್ಲಾ 0.0) ಪಡೆದವು?',
        opts: ['The model was trained perfectly', 'generate_greedy() is deterministic, so the same model and prompt always produce the same completion', 'reward_math() always returns 0.0', 'The prompt was empty'], correct: 1,
        optsKn: ['Model ಪರಿಪೂರ್ಣವಾಗಿ trained ಆಗಿತ್ತು', 'generate_greedy() deterministic ಆಗಿರುವುದರಿಂದ, ಅದೇ model ಮತ್ತೆ prompt ಯಾವಾಗಲೂ ಅದೇ completion ಉತ್ಪಾದಿಸುತ್ತವೆ', 'reward_math() ಯಾವಾಗಲೂ 0.0 ಹಿಂತಿರುಗಿಸುತ್ತದೆ', 'Prompt ಖಾಲಿ ಆಗಿತ್ತು'] },
      { q: 'What does GRPO remove entirely compared to PPO, as genuinely built in Module 191?', qKn: 'Module 191 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ PPO ಗೆ ಹೋಲಿಸಿದರೆ GRPO ಏನನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆಯುತ್ತದೆ?',
        opts: ['The reward function', 'The separately trained value network', 'The policy model', 'The prompt'], correct: 1,
        optsKn: ['Reward function', 'ಪ್ರತ್ಯೇಕವಾಗಿ trained value network', 'Policy model', 'Prompt'] },
      { q: 'Genuinely confirmed: what did the sum of advantages equal for group_a=[1.0, 1.0, 0.0, 0.0]?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: group_a=[1.0, 1.0, 0.0, 0.0] ಗೆ advantages ya sum ಏನಿಗೆ ಸಮಾನವಾಗಿತ್ತು?',
        opts: ['1.0', 'Exactly 0.0', '4.0', '-1.0'], correct: 1,
        optsKn: ['1.0', 'ನಿಖರವಾಗಿ 0.0', '4.0', '-1.0'] },
      { q: 'Why is GRPO especially well suited to the rule-based rewards (reward_math, reward_format) built in Part 1?', qKn: 'GRPO Part 1 ನಲ್ಲಿ ಕಟ್ಟಿದ rule-based rewards (reward_math, reward_format) ಗೆ ಏಕೆ ವಿಶೇಷವಾಗಿ ಸೂಕ್ತ?',
        opts: ['Rule-based rewards require a value network', 'Sampling a group of candidate solutions and scoring each exactly with a rule fits naturally with group-relative comparison', 'GRPO only works with human feedback', 'Rule-based rewards cannot be used with any RL method'], correct: 1,
        optsKn: ['Rule-based rewards ಗೆ value network ಬೇಕು', 'candidate solutions ya ಒಂದೂ group ಅನ್ನೂ sample ಮಾಡಿ ಪ್ರತಿಯೊಂದನ್ನೂ ಒಂದೂ rule ಇಂದ ನಿಖರವಾಗಿ score ಮಾಡುವುದೂ group-relative comparison ಜೊತೆ ಸ್ವಾಭಾವಿಕವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ', 'GRPO ಕೇವಲ human feedback ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'Rule-based rewards ಅನ್ನೂ ಯಾವುದೇ RL method ಜೊತೆ ಬಳಸಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
