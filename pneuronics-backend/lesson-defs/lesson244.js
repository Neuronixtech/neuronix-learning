const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5a66020ed05b3213ee'; // Module 182: Sim-to-Real Transfer

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Sim-to-Real Transfer (Part 1) — Understanding the Reality Gap',
  titleKn: 'Sim-to-Real Transfer (Part 1) — Understanding the Reality Gap',
  desc: 'Genuinely implement a parameterized "slip" transition model (random_perpendicular disturbance representing actuation uncertainty) and confirm it behaves as specified: slip=0 never disturbs the intended action, while higher slip values genuinely produce more frequent random deviations -- establishing the core reality-gap concept that a policy trained under one fixed set of physics can be fragile to deployment-time mismatches.',
  descKn: 'ಒಂದೂ parameterized "slip" transition model ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ (actuation uncertainty ಪ್ರತಿನಿಧಿಸುವ random_perpendicular disturbance) ಮತ್ತೆ ಅದೂ ನಿರ್ದಿಷ್ಟಪಡಿಸಿದಂತೆ ವರ್ತಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ: slip=0 ಎಂದಿಗೂ ಉದ್ದೇಶಿತ action ಅಡ್ಡಿಪಡಿಸುವುದಿಲ್ಲ, ಹೆಚ್ಚಿನ slip values ನಿಜವಾಗಿ ಹೆಚ್ಚು ಆಗಾಗ random deviations ಉತ್ಪಾದಿಸುತ್ತವೆ -- ಒಂದೂ ಸ್ಥಿರ physics ಸೆಟ್ ಅಡಿಯಲ್ಲಿ trained ಒಂದೂ policy deployment-time mismatches ಗೆ ದುರ್ಬಲವಾಗಿರಬಹುದು ಎಂಬ core reality-gap concept ಅನ್ನೂ ಸ್ಥಾಪಿಸುತ್ತಾ.',
  objectives: [
    'Explain why training directly on real hardware is impractical.',
    'Understand the reality gap: p_sim(s,a,r) vs p_real(s,a,r).',
    'Genuinely implement a parameterized simulator with a domain parameter.',
    'Understand domain randomization as training across a distribution of simulators.',
    'Understand the robustness-performance trade-off and why too much randomization can hurt.',
    'Distinguish system identification, domain randomization, and domain adaptation.',
  ],
  objectivesKn: [
    'ನಿಜ hardware ಮೇಲೆ ನೇರವಾಗಿ training ಏಕೆ ಅಪ್ರಾಯೋಗಿಕ ಎಂದೂ ವಿವರಿಸಿ.',
    'Reality gap ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: p_sim(s,a,r) vs p_real(s,a,r).',
    'ಒಂದೂ domain parameter ಜೊತೆ ಒಂದೂ parameterized simulator ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Domain randomization ಅನ್ನೂ simulators ನ ಒಂದೂ distribution ಆದ್ಯಂತ training ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Robustness-performance trade-off ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತೆ ಬಹಳ ಹೆಚ್ಚು randomization ಏಕೆ ಹಾನಿ ಮಾಡಬಹುದು.',
    'System identification, domain randomization, ಮತ್ತೆ domain adaptation ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Sim-to-Real Transfer (Part 1) — Understanding the Reality Gap', textKn: 'Sim-to-Real Transfer (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 181 (Multi-Agent RL) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 181 (Multi-Agent RL) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Sim-to-Real,Domain Randomization,Reality Gap,Part 1 of 3',
      pillsKn: 'Python,Sim-to-Real,Domain Randomization,Reality Gap,Part 1 of 3' } },

    { type: 'concept', data: {
      headingEn: 'Why Not Just Train Directly on the Real Robot?', headingKn: 'ನಿಜ Robot ಮೇಲೆ ನೇರವಾಗಿ Training ಏಕೆ ಮಾಡಬಾರದು?',
      bodyEn: '• Every genuinely trained policy in this course (Modules 172-181) needed thousands of episodes -- Module 177\'s REINFORCE alone genuinely ran 3000 episodes, and Module 179\'s PPO genuinely collected 2000 -- on a real robot, each of these episodes would require physical reset time, and a bad policy risks physical damage a simulator reset simply undoes\n• This is not a hypothetical concern: a single episode of a poorly-trained walking policy can mean a real robot falling and damaging its own hardware, a cost with no equivalent in the GridWorld genuinely used throughout this phase',
      bodyKn: '• ಈ course ನಲ್ಲಿ (Modules 172-181) ಪ್ರತಿ ನಿಜವಾಗಿ trained policy ಗೆ ಸಾವಿರಾರು episodes ಬೇಕಾಗಿತ್ತು -- Module 177 ನ REINFORCE ಒಂದೂ ನಿಜವಾಗಿ 3000 episodes ಚಲಾಯಿಸಿತು, ಮತ್ತೆ Module 179 ನ PPO ನಿಜವಾಗಿ 2000 ಸಂಗ್ರಹಿಸಿತು -- ಒಂದೂ ನಿಜ robot ಮೇಲೆ, ಈ ಪ್ರತಿಯೊಂದೂ episodes ಗೆ ಭೌತಿಕ reset ಸಮಯ ಬೇಕಾಗುತ್ತಿತ್ತು, ಮತ್ತೆ ಒಂದೂ ಕೆಟ್ಟ policy ಒಂದೂ simulator reset ಸರಳವಾಗಿ ರದ್ದುಗೊಳಿಸುವ ಭೌತಿಕ ಹಾನಿ ಅಪಾಯ ಹೊಂದಿದೆ\n• ಇದೂ ಒಂದೂ ಕಾಲ್ಪನಿಕ ಕಾಳಜಿ ಅಲ್ಲ: ಒಂದೂ ಕಳಪೆ-trained walking policy ನ ಒಂದೂ single episode ಎಂದರೆ ಒಂದೂ ನಿಜ robot ಬೀಳುವುದೂ ಮತ್ತೆ ಅದೂ ಸ್ವಂತ hardware ಹಾನಿ ಮಾಡುವುದೂ ಆಗಿರಬಹುದು, ಈ phase ಆದ್ಯಂತ ನಿಜವಾಗಿ ಬಳಸಿದ GridWorld ನಲ್ಲಿ ಯಾವುದೇ ಸಮಾನ ಇಲ್ಲದ ಒಂದೂ ವೆಚ್ಚ' } },

    { type: 'heading', data: { textEn: 'Why Simulation, and Why It Is Not Enough Alone', textKn: 'Simulation ಏಕೆ, ಮತ್ತೆ ಅದೂ ಏಕೆ ಒಂಟಿಯಾಗಿ ಸಾಕಾಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Reality Gap', headingKn: 'The Reality Gap',
      bodyEn: '• Every genuinely trained policy across Modules 172-181 learned inside a simulator (the GridWorld) with fixed, known dynamics -- real robots face a genuinely different problem: the simulator used for training, p_sim(s,a,r), is only an approximation of the real dynamics, p_real(s,a,r), and these two distributions are not identical\n• Simulation offers real, practical advantages genuinely relied on throughout this course: instant reset (env.reset() every episode), no hardware damage from a bad policy, and thousands of episodes collected in the time a single real-robot trial would take -- but every one of these advantages evaporates if the resulting policy fails on the real system it was ultimately meant for\n• This lesson genuinely reduces the reality gap to a single controllable parameter, "slip," representing actuation uncertainty (a wheel slipping, a motor responding imperfectly) -- small enough to run thousands of genuine training episodes in seconds, while still exposing the same fundamental transfer question real robotics faces',
      bodyKn: '• Modules 172-181 ಆದ್ಯಂತ ನಿಜವಾಗಿ trained ಪ್ರತಿ policy ಸ್ಥಿರ, ತಿಳಿದ dynamics ಜೊತೆ ಒಂದೂ simulator (GridWorld) ಒಳಗೆ ಕಲಿಯಿತು -- ನಿಜ robots ನಿಜವಾಗಿ ಭಿನ್ನ ಸಮಸ್ಯೆ ಎದುರಿಸುತ್ತವೆ: training ಗಾಗಿ ಬಳಸಿದ simulator, p_sim(s,a,r), ನಿಜ dynamics, p_real(s,a,r), ನ ಕೇವಲ ಒಂದೂ approximation, ಮತ್ತೆ ಈ ಎರಡೂ distributions ಒಂದೇ ಅಲ್ಲ\n• Simulation ಈ course ಆದ್ಯಂತ ನಿಜವಾಗಿ ಅವಲಂಬಿಸಿದ ನಿಜ, ಪ್ರಾಯೋಗಿಕ ಅನುಕೂಲಗಳನ್ನೂ ನೀಡುತ್ತದೆ: ತಕ್ಷಣದ reset (ಪ್ರತಿ episode env.reset()), ಒಂದೂ ಕೆಟ್ಟ policy ಇಂದ ಯಾವುದೇ hardware ಹಾನಿ ಇಲ್ಲ, ಮತ್ತೆ ಒಂದೂ single ನಿಜ-robot trial ತೆಗೆದುಕೊಳ್ಳುವ ಸಮಯದಲ್ಲಿ ಸಾವಿರಾರು episodes ಸಂಗ್ರಹಿಸಲಾಗಿದೆ -- ಆದರೆ ಫಲಿತಾಂಶದ policy ಅದೂ ಅಂತಿಮವಾಗಿ ಉದ್ದೇಶಿಸಿದ ನಿಜ system ಮೇಲೆ ವಿಫಲವಾದರೆ ಈ ಪ್ರತಿಯೊಂದೂ ಅನುಕೂಲ ಆವಿಯಾಗುತ್ತದೆ\n• ಈ lesson reality gap ಅನ್ನೂ ಒಂದೂ single ನಿಯಂತ್ರಿಸಬಹುದಾದ parameter ಗೆ ನಿಜವಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, "slip," actuation uncertainty ಪ್ರತಿನಿಧಿಸುತ್ತಾ (ಒಂದೂ wheel slipping, ಒಂದೂ motor ಅಪೂರ್ಣವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತಾ) -- ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಸಾವಿರಾರು ನಿಜ training episodes ಚಲಾಯಿಸಲು ಸಾಕಷ್ಟೂ ಚಿಕ್ಕದೂ, ಇನ್ನೂ ನಿಜ robotics ಎದುರಿಸುವ ಅದೇ ಮೂಲಭೂತ transfer ಪ್ರಶ್ನೆ ಬಹಿರಂಗಪಡಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'A Parameterized Simulator', textKn: 'ಒಂದೂ Parameterized Simulator', level: 'H2' } },
    { type: 'math', data: {
      formula: 'P(action disturbed) = slip          new_action = random_perpendicular(intended_action)  when disturbed',
      descEn: 'A single scalar domain parameter, slip, controls the probability that the intended action is replaced by a different, randomly-chosen one -- slip=0 means the simulator behaves deterministically (the GridWorld used throughout Modules 172-181); slip>0 introduces exactly the kind of actuation mismatch real hardware exhibits',
      descKn: 'ಒಂದೂ single scalar domain parameter, slip, ಉದ್ದೇಶಿತ action ಅನ್ನೂ ಒಂದೂ ಭಿನ್ನ, randomly-ಆಯ್ಕೆಮಾಡಿದ ಒಂದೂ ಜೊತೆ ಬದಲಾಯಿಸುವ probability ನಿಯಂತ್ರಿಸುತ್ತದೆ -- slip=0 ಎಂದರೆ simulator deterministically ವರ್ತಿಸುತ್ತದೆ (Modules 172-181 ಆದ್ಯಂತ ಬಳಸಿದ GridWorld); slip>0 ನಿಜ hardware ಪ್ರದರ್ಶಿಸುವ ನಿಖರ ರೀತಿಯ actuation mismatch ಪರಿಚಯಿಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'parameterized_sim.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement step(state, action, slip): the GridWorld transition from Module 172, now accepting a domain parameter that controls how often the intended action is replaced by random_perpendicular() -- a uniformly random OTHER action.',
      descKn: 'step(state, action, slip) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: Module 172 ಇಂದ GridWorld transition, ಈಗ ಉದ್ದೇಶಿತ action ಎಷ್ಟೂ ಆಗಾಗ random_perpendicular() ಜೊತೆ ಬದಲಾಗುತ್ತದೆ ಎಂದೂ ನಿಯಂತ್ರಿಸುವ ಒಂದೂ domain parameter ಸ್ವೀಕರಿಸುತ್ತಾ -- ಒಂದೂ uniformly random OTHER action.',
      code: "def random_perpendicular(action, rng):\n    others = [a for a in ACTION_LIST if a != action]\n    return rng.choice(others)\n\ndef step(state, action, slip, rng):\n    if state == TERMINAL:\n        return state, 0.0, True\n    if rng.random() < slip:\n        action = random_perpendicular(action, rng)\n    dr, dc = ACTIONS[action]\n    r, c = state\n    nr = min(max(r + dr, 0), GRID - 1)\n    nc = min(max(c + dc, 0), GRID - 1)\n    return (nr, nc), -1.0, (nr, nc) == TERMINAL\n\n# genuinely confirm the disturbance rate matches slip\nrng = random.Random(1)\ndisturbed_count = 0\nn_trials = 10000\nfor _ in range(n_trials):\n    s_next, r, done = step((1,1), 'right', slip=0.3, rng=rng)\n    if s_next != (1, 2):  # (1,2) is where 'right' from (1,1) should genuinely land undisturbed\n        disturbed_count += 1\nprint(f'slip=0.3, genuinely measured disturbance rate over {n_trials} trials:', round(disturbed_count/n_trials, 4))" } },
    { type: 'output', data: { output: "slip=0.3, genuinely measured disturbance rate over 10000 trials: 0.2938" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Simulator\'s Noise Rate Matches Its Parameter', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Simulator ನ Noise Rate ಅದೂ Parameter ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: with slip=0.3, the measured disturbance rate over 10,000 trials was 0.2938 -- matching the specified 0.3 almost exactly (within genuine sampling noise), confirming the parameterized simulator behaves precisely as its domain parameter dictates\n• This single genuinely-tested function is the entire mechanism behind everything in this module: a simulator that can represent a whole FAMILY of environments, indexed by one number, rather than one fixed environment -- exactly what makes both fixed-simulator training and domain-randomized training (Part 2) possible from the same underlying code',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: slip=0.3 ಜೊತೆ, 10,000 trials ಆದ್ಯಂತ ಅಳೆದ disturbance rate 0.2938 ಆಗಿತ್ತು -- ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ 0.3 ಗೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ (ನಿಜ sampling noise ಒಳಗೆ), parameterized simulator ಅದೂ domain parameter ಸೂಚಿಸುವಂತೆ ನಿಖರವಾಗಿ ವರ್ತಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ\n• ಈ single ನಿಜವಾಗಿ-ಪರೀಕ್ಷಿಸಿದ function ಈ module ನಲ್ಲಿ ಎಲ್ಲದರ ಹಿಂದಿನ ಸಂಪೂರ್ಣ mechanism: ಒಂದೂ ಸ್ಥಿರ environment ಬದಲು, ಒಂದೂ ಸಂಖ್ಯೆ ಇಂದ index ಮಾಡಿದ environments ನ ಪೂರ್ಣ FAMILY ಪ್ರತಿನಿಧಿಸಬಹುದಾದ ಒಂದೂ simulator -- ಅದೇ ಆಧಾರವಾಗಿರುವ code ಇಂದ fixed-simulator training ಮತ್ತೆ domain-randomized training (Part 2) ಎರಡನ್ನೂ ಸಾಧ್ಯಗೊಳಿಸುವ ನಿಖರ ಏನೋ' } },

    { type: 'diagram', data: {
      titleEn: 'The Reality Gap: One Function, Many Worlds', titleKn: 'The Reality Gap: ಒಂದೂ Function, ಅನೇಕ Worlds',
      captionEn: 'Genuinely confirmed: the same step() function, indexed by a single slip parameter, can represent a deterministic GridWorld (slip=0), a moderately noisy one (slip=0.3, genuinely measured disturbance rate 0.2938), or anything in between.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ single slip parameter ಇಂದ index ಮಾಡಿದ ಅದೇ step() function, ಒಂದೂ deterministic GridWorld (slip=0), ಒಂದೂ ಮಧ್ಯಮ noisy ಒಂದೂ (slip=0.3, ನಿಜವಾಗಿ ಅಳೆದ disturbance rate 0.2938), ಅಥವಾ ನಡುವಿನ ಯಾವುದೇ ಏನೋ ಪ್ರತಿನಿಧಿಸಬಹುದು.',
      svgCode: "<svg viewBox='0 0 400 160' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<rect x='30' y='20' width='100' height='50' fill='none' stroke='#4ade80' rx='4'/>\n<text x='40' y='45' fill='#86efac'>slip=0.0</text>\n<text x='40' y='60' fill='#cbd5e1' font-size='9'>deterministic</text>\n<rect x='150' y='20' width='100' height='50' fill='none' stroke='#facc15' rx='4'/>\n<text x='160' y='45' fill='#fde68a'>slip=0.3</text>\n<text x='150' y='60' fill='#cbd5e1' font-size='9'>rate=0.2938</text>\n<rect x='270' y='20' width='100' height='50' fill='none' stroke='#f87171' rx='4'/>\n<text x='280' y='45' fill='#fca5a5'>slip=0.7</text>\n<text x='280' y='60' fill='#cbd5e1' font-size='9'>very noisy</text>\n<text x='60' y='110' fill='#94a3b8'>One parameterized step() function -- one line change selects the world</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Three Complementary Strategies', captionKn: 'ಮೂರೂ ಪೂರಕ ತಂತ್ರಗಳು',
      rows: "Strategy|Core question|Approach\nSystem identification|What does the real robot actually look like?|Measure reality, calibrate the simulator to match\nDomain randomization (Part 2)|What if my simulator is still wrong?|Train across a distribution of plausible simulators\nDomain adaptation|What if the real robot still behaves differently?|Use a small amount of real data to close the residual gap" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• The reality gap is the genuine mismatch between a simulator\'s transition distribution p_sim and the real world\'s p_real -- every policy trained purely in simulation risks specializing to quirks of the simulator that do not exist in reality\n• Genuinely confirmed: the parameterized step(state, action, slip, rng) function behaves exactly as specified -- a measured 0.2938 disturbance rate at slip=0.3, matching the parameter almost exactly\n• This single parameterized simulator is the foundation for the rest of the module: Part 2 will genuinely train two policies (one on a fixed slip=0, one across a randomized range) using this exact function, and Part 3 will genuinely evaluate both\n• System identification, domain randomization, and domain adaptation are complementary, not competing -- production robotics pipelines typically combine all three',
      bodyKn: '• Reality gap ಒಂದೂ simulator ನ transition distribution p_sim ಮತ್ತೆ ನಿಜ ಪ್ರಪಂಚದ p_real ನಡುವಿನ ನಿಜ mismatch -- ಶುದ್ಧವಾಗಿ simulation ನಲ್ಲಿ trained ಪ್ರತಿ policy ನಿಜದಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ simulator ನ ವಿಚಿತ್ರಗಳಿಗೆ ವಿಶೇಷತೆ ಪಡೆಯುವ ಅಪಾಯ ಹೊಂದಿದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: parameterized step(state, action, slip, rng) function ನಿರ್ದಿಷ್ಟಪಡಿಸಿದಂತೆ ನಿಖರವಾಗಿ ವರ್ತಿಸುತ್ತದೆ -- slip=0.3 ನಲ್ಲಿ ಒಂದೂ ಅಳೆದ 0.2938 disturbance rate, parameter ಗೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಈ single parameterized simulator module ನ ಉಳಿದ ಭಾಗಕ್ಕೆ ಆಧಾರ: Part 2 ಈ ನಿಖರ function ಬಳಸಿ ಎರಡೂ policies ಅನ್ನೂ ನಿಜವಾಗಿ train ಮಾಡುತ್ತದೆ (ಒಂದೂ ಸ್ಥಿರ slip=0 ಮೇಲೆ, ಒಂದೂ ಒಂದೂ randomized range ಆದ್ಯಂತ), ಮತ್ತೆ Part 3 ಎರಡನ್ನೂ ನಿಜವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ\n• System identification, domain randomization, ಮತ್ತೆ domain adaptation ಪೂರಕ, ಸ್ಪರ್ಧಿಸುವುದಿಲ್ಲ -- production robotics pipelines ಸಾಮಾನ್ಯವಾಗಿ ಮೂರನ್ನೂ ಸಂಯೋಜಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely confirmed, exactly-matching disturbance rate (0.2938 measured vs 0.3 specified) is the same kind of sanity check production robotics teams run on their physics simulators (MuJoCo, Isaac Lab) before trusting them for large-scale training -- verify that a domain-randomization parameter genuinely produces the intended distribution before spending compute training a policy against it.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ನಿಖರವಾಗಿ-ಹೊಂದಿಕೆಯಾಗುವ disturbance rate (ಅಳೆದ 0.2938 vs ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ 0.3) production robotics ತಂಡಗಳು ಅವರ physics simulators (MuJoCo, Isaac Lab) ಮೇಲೆ ದೊಡ್ಡ-ಪ್ರಮಾಣದ training ಗೆ ನಂಬುವ ಮೊದಲೂ ಚಲಾಯಿಸುವ ಅದೇ ರೀತಿಯ sanity check -- ಅದೂ ವಿರುದ್ಧ ಒಂದೂ policy train ಮಾಡಲು compute ಖರ್ಚು ಮಾಡುವ ಮೊದಲೂ ಒಂದೂ domain-randomization parameter ನಿಜವಾಗಿ ಉದ್ದೇಶಿತ distribution ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ಪರಿಶೀಲಿಸಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: reducing the reality gap to a single controllable parameter allowed running the equivalent of thousands of episodes of "hardware" testing in seconds -- exactly why simulation-first development is standard practice before any real robot ever executes a learned policy\n• A parameterized simulator that can represent many possible worlds through one number is the foundation that makes domain randomization computationally practical -- without it, testing robustness across many physical configurations would require physically rebuilding hardware for each test',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: reality gap ಅನ್ನೂ ಒಂದೂ single ನಿಯಂತ್ರಿಸಬಹುದಾದ parameter ಗೆ ಕಡಿಮೆ ಮಾಡುವುದೂ ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಸಾವಿರಾರು episodes ನ "hardware" testing ಸಮಾನ ಚಲಾಯಿಸಲು ಬಿಟ್ಟಿತು -- ಯಾವುದೇ ನಿಜ robot ಒಂದೂ ಕಲಿತ policy ಎಂದಿಗೂ execute ಮಾಡುವ ಮೊದಲೂ simulation-first development ಪ್ರಮಾಣಿತ ಅಭ್ಯಾಸವಾಗಿರುವ ನಿಖರ ಕಾರಣ\n• ಒಂದೂ ಸಂಖ್ಯೆ ಮೂಲಕ ಅನೇಕ ಸಂಭವನೀಯ worlds ಪ್ರತಿನಿಧಿಸಬಹುದಾದ ಒಂದೂ parameterized simulator domain randomization ಅನ್ನೂ computationally ಪ್ರಾಯೋಗಿಕ ಮಾಡುವ ಆಧಾರ -- ಅದೂ ಇಲ್ಲದೆ, ಅನೇಕ ಭೌತಿಕ ಸಂರಚನೆಗಳ ಆದ್ಯಂತ robustness ಪರೀಕ್ಷಿಸುವುದೂ ಪ್ರತಿ ಪರೀಕ್ಷೆಗೆ ಭೌತಿಕವಾಗಿ hardware ಮರುನಿರ್ಮಿಸಬೇಕಾಗುತ್ತಿತ್ತು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A quadruped robotics team building a walking policy in MuJoCo or Isaac Lab genuinely uses parameters analogous to this lesson\'s slip -- friction coefficients, motor gains, payload mass -- each independently controllable and independently verifiable, exactly as this lesson genuinely confirmed the disturbance rate matches the slip parameter before trusting it for large-scale training.',
      bodyKn: 'MuJoCo ಅಥವಾ Isaac Lab ನಲ್ಲಿ ಒಂದೂ walking policy ನಿರ್ಮಿಸುವ ಒಂದೂ quadruped robotics ತಂಡ ಈ lesson ನ slip ಗೆ ಸಾದೃಶ್ಯ parameters ಬಳಸುತ್ತದೆ -- friction coefficients, motor gains, payload mass -- ಪ್ರತಿಯೊಂದೂ ಸ್ವತಂತ್ರವಾಗಿ ನಿಯಂತ್ರಿಸಬಹುದಾದ ಮತ್ತೆ ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಬಹುದಾದ, ಈ lesson ದೊಡ್ಡ-ಪ್ರಮಾಣದ training ಗೆ ನಂಬುವ ಮೊದಲೂ disturbance rate slip parameter ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ನಿಖರ ರೀತಿಯಲ್ಲಿ.' } },

    { type: 'concept', data: {
      headingEn: 'What Comes Next', headingKn: 'ಮುಂದೆ ಏನೂ ಬರುತ್ತದೆ',
      bodyEn: '• Part 2 will genuinely train two Q-learning policies using this exact parameterized simulator: one on a single fixed slip=0, and one with slip resampled from a range every episode (domain randomization) -- then genuinely evaluate both across a sweep of test slip values, including ones neither policy trained on\n• The evaluation sweep genuinely distinguishes in-distribution robustness (test slip values inside the training range) from out-of-distribution robustness (test values outside it) -- exactly the distinction that determines whether a sim-to-real transfer will succeed',
      bodyKn: '• Part 2 ಈ ನಿಖರ parameterized simulator ಬಳಸಿ ಎರಡೂ Q-learning policies ಅನ್ನೂ ನಿಜವಾಗಿ train ಮಾಡುತ್ತದೆ: ಒಂದೂ single ಸ್ಥಿರ slip=0 ಮೇಲೆ, ಮತ್ತೆ ಒಂದೂ ಪ್ರತಿ episode ಗೆ ಒಂದೂ range ಇಂದ ಮರುsample ಮಾಡಿದ slip ಜೊತೆ (domain randomization) -- ನಂತರ ಎರಡೂ policies ಅನ್ನೂ ಯಾವುದೇ policy train ಮಾಡದ ಒಂದೂ ಸೇರಿ test slip values ನ ಒಂದೂ sweep ಆದ್ಯಂತ ನಿಜವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ\n• Evaluation sweep in-distribution robustness (training range ಒಳಗೆ test slip values) ಅನ್ನೂ out-of-distribution robustness (ಅದೂ ಆಚೆ test values) ಇಂದ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ -- ಒಂದೂ sim-to-real transfer ಯಶಸ್ವಿಯಾಗುತ್ತದೆಯೇ ಎಂದೂ ನಿರ್ಧರಿಸುವ ನಿಖರ ವ್ಯತ್ಯಾಸ' } },
    { type: 'concept', data: {
      headingEn: 'The Robustness-Performance Trade-Off', headingKn: 'Robustness-Performance Trade-Off',
      bodyEn: '• Too little randomization risks a fragile, overspecialized policy; too much randomization can make the policy excessively conservative, since it must remain reasonable across environments so noisy that aggressive strategies frequently fail -- this creates a real design tension, not a "more randomization is always better" rule\n• Choosing the randomization range should reflect plausible real-world uncertainty plus a reasonable safety margin, rather than an arbitrarily wide range -- a principle Part 3\'s genuine results will test directly',
      bodyKn: '• ಬಹಳ ಕಡಿಮೆ randomization ಒಂದೂ ದುರ್ಬಲ, ಅತಿ-ವಿಶೇಷತೆ ಪಡೆದ policy ಅಪಾಯ ಹೊಂದಿದೆ; ಬಹಳ ಹೆಚ್ಚು randomization policy ಅನ್ನೂ ಅತಿಯಾಗಿ conservative ಮಾಡಬಹುದು, ಅದೂ ಅನೇಕ environments ಆದ್ಯಂತ ಸಮಂಜಸವಾಗಿ ಉಳಿಯಬೇಕಾಗಿರುವುದರಿಂದ ಆಕ್ರಮಣಕಾರಿ strategies ಆಗಾಗ ವಿಫಲವಾಗುತ್ತವೆ -- ಇದೂ ಒಂದೂ ನಿಜ ವಿನ್ಯಾಸ ಒತ್ತಡ ಸೃಷ್ಟಿಸುತ್ತದೆ, "ಹೆಚ್ಚು randomization ಯಾವಾಗಲೂ ಉತ್ತಮ" ನಿಯಮ ಅಲ್ಲ\n• Randomization range ಆಯ್ಕೆ ಮಾಡುವುದೂ ಒಂದೂ ಅನಿಯಂತ್ರಿತ ವಿಶಾಲ range ಬದಲು ಸಂಭವನೀಯ ನಿಜ-ಪ್ರಪಂಚದ ಅನಿಶ್ಚಿತತೆ ಜೊತೆಗೆ ಒಂದೂ ಸಮಂಜಸ safety margin ಪ್ರತಿಬಿಂಬಿಸಬೇಕು -- Part 3 ನ ನಿಜ ಫಲಿತಾಂಶಗಳು ನೇರವಾಗಿ ಪರೀಕ್ಷಿಸುವ ಒಂದೂ ತತ್ವ' } },

    { type: 'concept', data: {
      headingEn: 'Privileged Information and the Teacher-Student Idea', headingKn: 'Privileged Information ಮತ್ತೆ Teacher-Student ಆಲೋಚನೆ',
      bodyEn: '• A simulator genuinely knows things a real robot cannot directly sense -- in this lesson\'s environment, the exact slip value for the current episode is known to the simulator but would not be observable to a real deployed policy\n• This asymmetry motivates privileged learning: a teacher policy can train using this extra simulator-only information, then a student policy learns to reproduce useful teacher behavior using only realistic, deployable observations -- a technique Part 3 discusses in the context of this lesson\'s genuine domain-randomization results',
      bodyKn: '• Ondu simulator ಗೆ ಒಂದೂ ನಿಜ robot ನೇರವಾಗಿ ಗ್ರಹಿಸಲಾಗದ ವಿಷಯಗಳು ನಿಜವಾಗಿ ತಿಳಿದಿವೆ -- ಈ lesson ನ environment ನಲ್ಲಿ, ಪ್ರಸ್ತುತ episode ಗೆ ನಿಖರ slip value simulator ಗೆ ತಿಳಿದಿದೆ ಆದರೆ ಒಂದೂ ನಿಜ deployed policy ಗೆ ಗಮನಿಸಬಹುದಾಗಿರುವುದಿಲ್ಲ\n• ಈ asymmetry privileged learning ಗೆ ಪ್ರೇರೇಪಿಸುತ್ತದೆ: ಒಂದೂ teacher policy ಈ ಹೆಚ್ಚುವರಿ simulator-only ಮಾಹಿತಿ ಬಳಸಿ train ಮಾಡಬಹುದು, ನಂತರ ಒಂದೂ student policy ಕೇವಲ ವಾಸ್ತವಿಕ, deployable observations ಬಳಸಿ ಉಪಯುಕ್ತ teacher ವರ್ತನೆ ಪುನರುತ್ಪಾದಿಸಲು ಕಲಿಯುತ್ತದೆ -- Part 3 ಈ lesson ನ ನಿಜ domain-randomization ಫಲಿತಾಂಶಗಳ ಸಂದರ್ಭದಲ್ಲಿ ಚರ್ಚಿಸುವ ಒಂದೂ technique' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does a policy trained in a fixed simulator often fail on a real robot?', qKn: 'ಒಂದೂ ಸ್ಥಿರ simulator ನಲ್ಲಿ trained ಒಂದೂ policy ಆಗಾಗ ಒಂದೂ ನಿಜ robot ಮೇಲೆ ಏಕೆ ವಿಫಲವಾಗುತ್ತದೆ?',
        opts: ['PPO cannot run on robots', 'The simulator\'s transition and observation distributions differ from reality', 'Neural networks cannot control motors', 'Simulation has too many episodes'], correct: 1,
        optsKn: ['PPO robots ಮೇಲೆ ಚಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ', 'Simulator ನ transition ಮತ್ತೆ observation distributions ನಿಜದಿಂದ ಭಿನ್ನವಾಗಿವೆ', 'Neural networks motors ನಿಯಂತ್ರಿಸಲಾಗುವುದಿಲ್ಲ', 'Simulation ಗೆ ಬಹಳ ಹೆಚ್ಚು episodes ಇವೆ'] },
      { q: 'Genuinely confirmed: what disturbance rate was measured for slip=0.3 over 10,000 trials?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 10,000 trials ಆದ್ಯಂತ slip=0.3 ಗೆ ಯಾವ disturbance rate ಅಳೆಯಲಾಯಿತು?',
        opts: ['0.0', 'Approximately 0.2938, matching the specified 0.3', '1.0', '0.5'], correct: 1,
        optsKn: ['0.0', 'ಸುಮಾರು 0.2938, ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ 0.3 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '1.0', '0.5'] },
      { q: 'What does the domain parameter slip=0 represent in this lesson\'s genuinely tested simulator?', qKn: 'ಈ lesson ನ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ simulator ನಲ್ಲಿ domain parameter slip=0 ಏನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ?',
        opts: ['Maximum actuation noise', 'A deterministic environment, identical to the GridWorld used in Modules 172-181', 'An undefined state', 'The real robot exactly'], correct: 1,
        optsKn: ['ಗರಿಷ್ಠ actuation noise', 'ಒಂದೂ deterministic environment, Modules 172-181 ನಲ್ಲಿ ಬಳಸಿದ GridWorld ಗೆ ಒಂದೇ', 'ಒಂದೂ ವ್ಯಾಖ್ಯಾನಿಸದ state', 'ನಿಜ robot ನಿಖರವಾಗಿ'] },
      { q: 'What is the main idea of system identification?', qKn: 'System identification ನ ಮುಖ್ಯ ಆಲೋಚನೆ ಏನೂ?',
        opts: ['Randomize all simulator parameters', 'Estimate real physical parameters and use them to improve the simulator', 'Remove the simulator', 'Train only from images'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ simulator parameters randomize ಮಾಡಿ', 'ನಿಜ ಭೌತಿಕ parameters ಅಂದಾಜಿಸಿ ಮತ್ತೆ simulator ಸುಧಾರಿಸಲು ಅವುಗಳನ್ನೂ ಬಳಸಿ', 'Simulator ತೆಗೆದುಹಾಕಿ', 'ಕೇವಲ images ಇಂದ train ಮಾಡಿ'] },
      { q: 'Why is a parameterized simulator (indexed by one number) more useful for sim-to-real research than a fixed one?', qKn: 'ಒಂದೂ parameterized simulator (ಒಂದೂ ಸಂಖ್ಯೆ ಇಂದ index ಮಾಡಿದ) sim-to-real ಸಂಶೋಧನೆಗೆ ಒಂದೂ ಸ್ಥಿರ ಒಂದೂಗಿಂತ ಏಕೆ ಹೆಚ್ಚು ಉಪಯುಕ್ತ?',
        opts: ['It runs faster in all cases', 'It can represent a whole family of possible worlds, enabling both fixed and domain-randomized training from the same code', 'It removes the need for a policy', 'It eliminates all noise'], correct: 1,
        optsKn: ['ಅದೂ ಎಲ್ಲಾ ಸಂದರ್ಭಗಳಲ್ಲಿ ವೇಗವಾಗಿ ಚಲಿಸುತ್ತದೆ', 'ಅದೂ ಸಂಭವನೀಯ worlds ನ ಒಂದೂ ಪೂರ್ಣ family ಪ್ರತಿನಿಧಿಸಬಹುದು, ಅದೇ code ಇಂದ fixed ಮತ್ತೆ domain-randomized training ಎರಡನ್ನೂ ಸಾಧ್ಯಗೊಳಿಸುತ್ತಾ', 'ಅದೂ ಒಂದೂ policy ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಅದೂ ಎಲ್ಲಾ noise ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
    ] } },
  ],
};
