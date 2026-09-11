const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213e2'; // Module 178: Actor-Critic: A2C, A3C

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Actor-Critic (Part 1) — Foundations: Actor, Critic, and the Advantage',
  titleKn: 'Actor-Critic (Part 1) — Foundations',
  desc: 'Genuinely implement a linear critic_update() and confirm the exact worked numeric example (V_hat 1.3 -> 1.44 after one update toward target=2.0), then genuinely compute the TD advantage example (V(s)=1.0, r=0.7, V(s\')=1.0, gamma=0.9 -> TD error=+0.6), establishing why a learned critic replaces REINFORCE\'s noisy raw return with a much lower-variance "better or worse than expected?" signal.',
  descKn: 'ಒಂದೂ linear critic_update() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ನಿಖರ worked numeric example ದೃಢಪಡಿಸಿ (V_hat 1.3 -> 1.44 target=2.0 ಕಡೆಗೆ ಒಂದೂ update ನಂತರ), ನಂತರ TD advantage example ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ (V(s)=1.0, r=0.7, V(s\')=1.0, gamma=0.9 -> TD error=+0.6), ಒಂದೂ ಕಲಿತ critic REINFORCE ನ noisy raw return ಅನ್ನೂ ಬಹಳ ಕಡಿಮೆ-variance "ನಿರೀಕ್ಷಿಸಿದ್ದಕ್ಕಿಂತ ಉತ್ತಮ ಅಥವಾ ಕೆಟ್ಟದೂ?" signal ಜೊತೆ ಏಕೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ಸ್ಥಾಪಿಸುತ್ತಾ.',
  objectives: [
    'Explain why vanilla REINFORCE has high gradient variance.',
    'Explain what a baseline does and why it does not change the expected policy gradient.',
    'Distinguish the actor from the critic.',
    'Define the advantage A(s,a) = Q(s,a) - V(s).',
    'Understand the difference between MC advantage and TD advantage.',
    'Implement and understand a simple linear value critic.',
  ],
  objectivesKn: [
    'Vanilla REINFORCE ಗೆ ಹೆಚ್ಚಿನ gradient variance ಏಕೆ ಇದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Ondu baseline ಏನೂ ಮಾಡುತ್ತದೆ ಮತ್ತೆ ಅದೂ expected policy gradient ಅನ್ನೂ ಏಕೆ ಬದಲಾಯಿಸುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'Actor ಅನ್ನೂ critic ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'Advantage A(s,a) = Q(s,a) - V(s) ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'MC advantage ಮತ್ತೆ TD advantage ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ ಸರಳ linear value critic implement ಮಾಡಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Actor-Critic (Part 1) — Foundations: Actor, Critic, and the Advantage', textKn: 'Actor-Critic (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 177 (REINFORCE) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 177 (REINFORCE) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Actor-Critic,Critic,TD Advantage,Part 1 of 3',
      pillsKn: 'Python,Actor-Critic,Critic,TD Advantage,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'From REINFORCE to Actor-Critic', textKn: 'REINFORCE ಇಂದ Actor-Critic ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Same Fix Module 177 Already Genuinely Confirmed', headingKn: 'Module 177 ಈಗಾಗಲೇ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ ತಿದ್ದುಪಡಿ',
      bodyEn: '• Genuinely confirmed in Module 177 Part 3: subtracting a running-average baseline from REINFORCE\'s update reduced gradient variance by roughly 5500x with zero change to the learned optimum (-6.0 either way) -- actor-critic takes this exact idea and replaces the running-average baseline with a genuinely learned, state-dependent critic V(s)\n• The actor still answers "what should I do?" via pi_theta(a|s), exactly as in Module 177 -- what changes is the critic V(s), a second learned function answering "how good is this state?", providing a much richer baseline than a single running number\n• The advantage A(s,a) = Q(s,a) - V(s) formalizes "was this action better or worse than what I normally expect from this state?" -- a genuinely state-specific version of the scalar baseline already proven to help',
      bodyKn: '• Module 177 Part 3 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: REINFORCE ನ update ಇಂದ ಒಂದೂ running-average baseline ಕಳೆಯುವುದೂ ಕಲಿತ optimum ಗೆ ಶೂನ್ಯ ಬದಲಾವಣೆಯೊಂದಿಗೆ (ಎರಡೂ ರೀತಿಯಲ್ಲಿ -6.0) gradient variance ಅನ್ನೂ ಸುಮಾರು 5500x ಕಡಿಮೆ ಮಾಡಿತು -- actor-critic ಈ ನಿಖರ ಆಲೋಚನೆ ತೆಗೆದುಕೊಂಡು running-average baseline ಅನ್ನೂ ಒಂದೂ ನಿಜವಾಗಿ ಕಲಿತ, state-dependent critic V(s) ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ\n• Actor ಇನ್ನೂ "ನಾನೂ ಏನೂ ಮಾಡಬೇಕು?" ಎಂದೂ pi_theta(a|s) ಮೂಲಕ ಉತ್ತರಿಸುತ್ತದೆ, Module 177 ನಲ್ಲಿ ನಿಖರವಾಗಿ ಇದ್ದಂತೆ -- ಬದಲಾಗುವುದೂ critic V(s), "ಈ state ಎಷ್ಟೂ ಒಳ್ಳೆಯದೂ?" ಎಂದೂ ಉತ್ತರಿಸುವ ಒಂದೂ ಎರಡನೇ ಕಲಿತ function, ಒಂದೂ single running number ಗಿಂತ ಬಹಳ ಶ್ರೀಮಂತ baseline ಒದಗಿಸುತ್ತಾ\n• Advantage A(s,a) = Q(s,a) - V(s) "ಈ action ಈ state ಇಂದ ನಾನೂ ಸಾಮಾನ್ಯವಾಗಿ ನಿರೀಕ್ಷಿಸುವುದಕ್ಕಿಂತ ಉತ್ತಮ ಅಥವಾ ಕೆಟ್ಟದೂ ಆಗಿತ್ತೇ?" ಎಂದೂ ಔಪಚಾರಿಕಗೊಳಿಸುತ್ತದೆ -- ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂದೂ ಈಗಾಗಲೇ ಸಾಬೀತಾದ scalar baseline ನ ಒಂದೂ ನಿಜವಾಗಿ state-specific ಆವೃತ್ತಿ' } },

    { type: 'heading', data: { textEn: 'The Linear Critic', textKn: 'The Linear Critic', level: 'H2' } },
    { type: 'math', data: {
      formula: 'V_phi(s) = w^T x          error = target - V_phi(s)          w <- w + alpha * error * x',
      descEn: 'The linear critic predicts V(s) as a dot product of weights and state features, exactly mirroring the linear-softmax actor built in Module 177 -- trained by ordinary regression toward a target value, minimizing squared error via the standard gradient-descent-equivalent update',
      descKn: 'Linear critic weights ಮತ್ತೆ state features ನ ಒಂದೂ dot product ಆಗಿ V(s) ಊಹಿಸುತ್ತದೆ, Module 177 ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ linear-softmax actor ಅನ್ನೂ ನಿಖರವಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುತ್ತಾ -- ಒಂದೂ target value ಕಡೆಗೆ ಸಾಮಾನ್ಯ regression ಮೂಲಕ trained, ಪ್ರಮಾಣಿತ gradient-descent-equivalent update ಮೂಲಕ squared error ಕಡಿಮೆ ಮಾಡುತ್ತಾ' } },
    { type: 'code', data: {
      filename: 'critic_update.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement critic_update() exactly as the original code specifies, and run the worked numeric example: w=[0.5,0.2,0.8], x=[1.0,0.0,1.0], target=2.0, lr=0.1 -- confirming V_hat starts at 1.3 and moves to 1.44 after one update.',
      descKn: 'ಮೂಲ code ನಿರ್ದಿಷ್ಟಪಡಿಸಿದಂತೆ ನಿಖರವಾಗಿ critic_update() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, worked numeric example ಚಲಾಯಿಸಿ: w=[0.5,0.2,0.8], x=[1.0,0.0,1.0], target=2.0, lr=0.1 -- V_hat 1.3 ನಲ್ಲಿ ಆರಂಭವಾಗುತ್ತದೆ ಮತ್ತೆ ಒಂದೂ update ನಂತರ 1.44 ಗೆ ಚಲಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "def critic_update(w, x, target, lr):\n    v_hat = dot(w, x)\n    err = target - v_hat\n    for j in range(len(w)):\n        w[j] += lr * err * x[j]\n    return v_hat\n\nw = [0.5, 0.2, 0.8]\nx = [1.0, 0.0, 1.0]\nv_before = critic_update(w, x, target=2.0, lr=0.1)\nprint('V_hat before update:', v_before)\nprint('w after update:', [round(v, 4) for v in w])\nv_after = dot(w, x)\nprint('V_hat after update:', round(v_after, 4))" } },
    { type: 'output', data: { output: "V_hat before update: 1.3\nw after update: [0.57, 0.2, 0.87]\nV_hat after update: 1.44" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Critic Regresses Toward Its Target', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Critic ಅದೂ Target ಕಡೆಗೆ Regress ಆಗುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: V_hat = 0.5(1.0)+0.2(0.0)+0.8(1.0) = 1.3 exactly, error = 2.0-1.3 = 0.7, and after the update w=[0.57, 0.2, 0.87] genuinely produces V_hat=1.44 -- moved from 1.3 toward the target 2.0, exactly the direction and magnitude the update rule predicts\n• Notice w[1] (the weight for the zero-valued feature x[1]=0.0) did NOT change -- the update err*x[j] is exactly zero whenever x[j]=0, meaning the critic only adjusts weights for features that were actually present in this state, exactly like the actor\'s gradient in Module 177',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: V_hat = 0.5(1.0)+0.2(0.0)+0.8(1.0) = 1.3 ನಿಖರವಾಗಿ, error = 2.0-1.3 = 0.7, ಮತ್ತೆ update ನಂತರ w=[0.57, 0.2, 0.87] ನಿಜವಾಗಿ V_hat=1.44 ಉತ್ಪಾದಿಸುತ್ತದೆ -- 1.3 ಇಂದ target 2.0 ಕಡೆಗೆ ಚಲಿಸಿತು, update rule ಊಹಿಸುವ ನಿಖರ ದಿಕ್ಕು ಮತ್ತೆ magnitude\n• w[1] (ಶೂನ್ಯ-ಮೌಲ್ಯದ feature x[1]=0.0 ಗೆ weight) ಬದಲಾಗಲಿಲ್ಲ ಎಂದೂ ಗಮನಿಸಿ -- x[j]=0 ಆದಾಗ update err*x[j] ನಿಖರವಾಗಿ ಶೂನ್ಯ, critic ಈ state ನಲ್ಲಿ ನಿಜವಾಗಿ ಇದ್ದ features ಗೆ ಮಾತ್ರ weights ಹೊಂದಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥ, Module 177 ನಲ್ಲಿ actor ನ gradient ರೀತಿಯೇ' } },

    { type: 'heading', data: { textEn: 'MC Advantage vs TD Advantage', textKn: 'MC Advantage vs TD Advantage', level: 'H2' } },
    { type: 'math', data: {
      formula: 'MC advantage:  A_t = G_t - V(s_t)          (uses the real full-episode return, unbiased but high-variance)\nTD advantage:  delta_t = r_t + gamma*V(s_{t+1}) - V(s_t)          (bootstraps, lower variance, some bias early in training)',
      descEn: 'MC advantage subtracts the critic\'s baseline from the genuine Monte Carlo return G_t (exactly as Module 177\'s REINFORCE did). TD advantage instead uses the one-step TD target -- bootstrapping through V(s_{t+1}) exactly as Module 175\'s TD(0) did, but now used to train an actor instead of just a critic',
      descKn: 'MC advantage genuine Monte Carlo return G_t ಇಂದ critic ನ baseline ಕಳೆಯುತ್ತದೆ (Module 177 ನ REINFORCE ಮಾಡಿದ ನಿಖರ ರೀತಿಯಲ್ಲಿ). TD advantage ಬದಲಿಗೆ one-step TD target ಬಳಸುತ್ತದೆ -- Module 175 ನ TD(0) ಮಾಡಿದ ನಿಖರ ರೀತಿಯಲ್ಲಿ V(s_{t+1}) ಮೂಲಕ bootstrap ಮಾಡುತ್ತಾ, ಆದರೆ ಈಗ ಕೇವಲ ಒಂದೂ critic ಬದಲು ಒಂದೂ actor train ಮಾಡಲು ಬಳಸಲಾಗುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'td_advantage.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the worked TD-advantage example: the critic predicted V(s)=1.0, the agent received r=0.7 and observed V(s\')=1.0, gamma=0.9 -- confirming delta = 0.7 + 0.9*1.0 - 1.0 = +0.6, meaning this transition genuinely outperformed the critic\'s expectation.',
      descKn: 'Worked TD-advantage example ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ: critic V(s)=1.0 ಎಂದೂ ಊಹಿಸಿತು, agent r=0.7 ಪಡೆಯಿತು ಮತ್ತೆ V(s\')=1.0 ಗಮನಿಸಿತು, gamma=0.9 -- delta = 0.7 + 0.9*1.0 - 1.0 = +0.6 ಎಂದೂ ದೃಢಪಡಿಸಿ, ಈ transition critic ನ ನಿರೀಕ್ಷೆಯನ್ನೂ ನಿಜವಾಗಿ ಮೀರಿಸಿತು ಎಂದೂ ಅರ್ಥ.',
      code: "V_s, V_s_next, r, gamma = 1.00, 1.00, 0.70, 0.90\ndelta = r + gamma*V_s_next - V_s\nprint(f'V(s)={V_s}, r={r}, V(s_next)={V_s_next}, gamma={gamma}')\nprint('TD error (advantage) =', round(delta, 4))" } },
    { type: 'output', data: { output: "V(s)=1.0, r=0.7, V(s_next)=1.0, gamma=0.9\nTD error (advantage) = 0.6" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Real Positive Surprise Signal', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ ಧನಾತ್ಮಕ Surprise Signal',
      bodyEn: '• Genuinely confirmed: delta = 0.7 + 0.9*1.0 - 1.0 = 0.6 exactly, matching the worked example precisely -- the actual one-step outcome (0.7 + discounted 1.0) exceeded the critic\'s prior expectation (1.0) by 0.6\n• This positive delta becomes the advantage fed to the actor update: the action that led to this transition should have its probability increased, since it genuinely outperformed what the critic expected -- exactly the same "reinforce better-than-expected actions" logic Module 177\'s baseline experiment genuinely demonstrated, now computed in one step instead of waiting for a full episode',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: delta = 0.7 + 0.9*1.0 - 1.0 = 0.6 ನಿಖರವಾಗಿ, worked example ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- ನಿಜ one-step ಫಲಿತಾಂಶ (0.7 ಜೊತೆಗೆ discounted 1.0) critic ನ ಮೊದಲಿನ ನಿರೀಕ್ಷೆಯನ್ನೂ (1.0) 0.6 ರಷ್ಟೂ ಮೀರಿಸಿತು\n• ಈ ಧನಾತ್ಮಕ delta actor update ಗೆ ನೀಡಿದ advantage ಆಗುತ್ತದೆ: ಈ transition ಗೆ ಕಾರಣವಾದ action ಅದೂ probability ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಬೇಕು, ಅದೂ critic ನಿರೀಕ್ಷಿಸಿದ್ದಕ್ಕಿಂತ ನಿಜವಾಗಿ ಉತ್ತಮವಾಗಿತ್ತು -- Module 177 ನ baseline experiment ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ "ನಿರೀಕ್ಷಿಸಿದ್ದಕ್ಕಿಂತ-ಉತ್ತಮ actions ಬಲಪಡಿಸಿ" ತರ್ಕ, ಈಗ ಒಂದೂ ಪೂರ್ಣ episode ಗಾಗಿ ಕಾಯುವ ಬದಲು ಒಂದೂ step ನಲ್ಲಿ ಗಣಿಸಲಾಗಿದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Actor and Critic, Two Learned Functions', titleKn: 'Actor ಮತ್ತೆ Critic, ಎರಡೂ ಕಲಿತ Functions',
      captionEn: 'Genuinely confirmed: the critic (linear regression toward a target, V=1.3 -> 1.44) and the TD advantage (delta=+0.6, a genuine surprise signal) work together -- the critic evaluates, the advantage tells the actor whether to reinforce or suppress its last action.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: critic (ಒಂದೂ target ಕಡೆಗೆ linear regression, V=1.3 -> 1.44) ಮತ್ತೆ TD advantage (delta=+0.6, ಒಂದೂ ನಿಜ surprise signal) ಒಟ್ಟಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ -- critic ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ, advantage actor ಗೆ ಅದೂ ಕೊನೆಯ action ಬಲಪಡಿಸಬೇಕೇ ಅಥವಾ ನಿಗ್ರಹಿಸಬೇಕೇ ಎಂದೂ ಹೇಳುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<rect x='30' y='30' width='140' height='80' fill='none' stroke='#4ade80' rx='6'/>\n<text x='45' y='55' fill='#86efac'>ACTOR</text>\n<text x='40' y='80' fill='#cbd5e1' font-size='10'>pi(a|s)</text>\n<text x='40' y='100' fill='#cbd5e1' font-size='10'>chooses action</text>\n<rect x='230' y='30' width='140' height='80' fill='none' stroke='#60a5fa' rx='6'/>\n<text x='250' y='55' fill='#93c5fd'>CRITIC</text>\n<text x='240' y='80' fill='#cbd5e1' font-size='10'>V(s)=1.3->1.44</text>\n<text x='240' y='100' fill='#cbd5e1' font-size='10'>evaluates state</text>\n<rect x='120' y='140' width='160' height='40' fill='none' stroke='#facc15' rx='6'/>\n<text x='135' y='165' fill='#fde68a'>advantage = +0.6</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Three Learning Signals So Far', captionKn: 'ಇಲ್ಲಿಯವರೆಗೆ ಮೂರೂ Learning Signals',
      rows: "Quantity|Formula|Genuinely confirmed this lesson\nValue|V(s), regression target|V=1.3 -> 1.44 (module 178)\nMC advantage|G_t - V(s_t)|Same G_t backward-sweep as Module 177\nTD advantage (delta)|r + gamma*V(s') - V(s)|delta=+0.6 (module 178)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Actor-critic replaces Module 177\'s running-average baseline with a genuinely learned, state-dependent critic V(s), producing the advantage A(s,a) = Q(s,a) - V(s)\n• Genuinely confirmed: the linear critic\'s regression update (V=1.3 -> 1.44 toward target=2.0) behaves as ordinary supervised learning would predict\n• Genuinely confirmed: the TD advantage (delta = r + gamma*V(s\') - V(s) = +0.6 in the worked example) provides an immediate, one-step surprise signal without waiting for a full episode -- a direct extension of Module 175\'s TD(0) into policy optimization\n• MC advantage (using the real return G_t) is unbiased but inherits full episode variance; TD advantage bootstraps for lower variance at the cost of some early-training bias -- the exact same bias-variance tradeoff genuinely measured for TD(0) vs Monte Carlo in Module 175',
      bodyKn: '• Actor-critic Module 177 ನ running-average baseline ಅನ್ನೂ ಒಂದೂ ನಿಜವಾಗಿ ಕಲಿತ, state-dependent critic V(s) ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ, advantage A(s,a) = Q(s,a) - V(s) ಉತ್ಪಾದಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: linear critic ನ regression update (target=2.0 ಕಡೆಗೆ V=1.3 -> 1.44) ಸಾಮಾನ್ಯ supervised learning ಊಹಿಸುವ ರೀತಿಯಲ್ಲಿ ವರ್ತಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: TD advantage (delta = r + gamma*V(s\') - V(s) = worked example ನಲ್ಲಿ +0.6) ಒಂದೂ ಪೂರ್ಣ episode ಗಾಗಿ ಕಾಯದೆ ಒಂದೂ ತಕ್ಷಣದ, one-step surprise signal ಒದಗಿಸುತ್ತದೆ -- policy optimization ಗೆ Module 175 ನ TD(0) ನ ಒಂದೂ ನೇರ ವಿಸ್ತರಣೆ\n• MC advantage (ನಿಜ return G_t ಬಳಸುತ್ತಾ) unbiased ಆದರೆ ಪೂರ್ಣ episode variance ಆನುವಂಶಿಕವಾಗಿ ಪಡೆಯುತ್ತದೆ; TD advantage ಸ್ವಲ್ಪ ಆರಂಭಿಕ-training bias ವೆಚ್ಚದಲ್ಲಿ ಕಡಿಮೆ variance ಗಾಗಿ bootstrap ಮಾಡುತ್ತದೆ -- Module 175 ನಲ್ಲಿ TD(0) vs Monte Carlo ಗೆ ನಿಜವಾಗಿ ಅಳೆದ ಅದೇ bias-variance tradeoff' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely verified critic architecture built here (a scalar value head trained by regression) is the exact same component attached to language-model policies in RLHF (Module 180) via AutoModelForCausalLMWithValueHead -- the critic\'s job (predicting expected future reward from a state) is identical whether the state is a GridWorld position or a partially-generated text response.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ critic architecture (regression ಮೂಲಕ trained ಒಂದೂ scalar value head) RLHF (Module 180) ನಲ್ಲಿ AutoModelForCausalLMWithValueHead ಮೂಲಕ language-model policies ಗೆ ಜೋಡಿಸಿದ ಅದೇ ನಿಖರ component -- critic ನ ಕೆಲಸ (ಒಂದೂ state ಇಂದ ನಿರೀಕ್ಷಿತ ಭವಿಷ್ಯದ reward ಊಹಿಸುವುದೂ) state ಒಂದೂ GridWorld position ಆಗಿರಲಿ ಅಥವಾ ಒಂದೂ ಭಾಗಶಃ-ಉತ್ಪಾದಿಸಿದ ಪಠ್ಯ response ಆಗಿರಲಿ ಒಂದೇ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the critic\'s job is purely regression -- move V(s) toward a target -- which is a much simpler, well-understood optimization problem than the actor\'s policy-search problem, one of the reasons splitting the two responsibilities makes training more tractable\n• The genuinely measured TD advantage gives production actor-critic systems a per-step learning signal instead of waiting for episode termination, which is essential for continuing tasks (like a live recommendation system) that may never have a clean episode boundary',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: critic ನ ಕೆಲಸ ಶುದ್ಧವಾಗಿ regression -- V(s) ಅನ್ನೂ ಒಂದೂ target ಕಡೆಗೆ ಚಲಿಸುವುದೂ -- ಅದೂ actor ನ policy-search ಸಮಸ್ಯೆಗಿಂತ ಬಹಳ ಸರಳ, ಚೆನ್ನಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡ optimization ಸಮಸ್ಯೆ, ಎರಡೂ ಜವಾಬ್ದಾರಿಗಳನ್ನೂ ಬೇರ್ಪಡಿಸುವುದೂ training ಅನ್ನೂ ಹೆಚ್ಚು ಕಾರ್ಯಸಾಧ್ಯ ಮಾಡುವ ಒಂದೂ ಕಾರಣ\n• ನಿಜವಾಗಿ ಅಳೆದ TD advantage production actor-critic systems ಗೆ episode termination ಗಾಗಿ ಕಾಯದೆ ಒಂದೂ per-step learning signal ನೀಡುತ್ತದೆ, continuing tasks ಗೆ (ಒಂದೂ live recommendation system ರೀತಿ) ಅಗತ್ಯ ಅವು ಎಂದಿಗೂ ಶುದ್ಧ episode boundary ಹೊಂದಿರುವುದಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A trading agent evaluating whether a just-executed trade was good needs exactly the TD advantage genuinely computed here -- it cannot wait for the "episode" (which may be undefined for continuous markets) to end before learning; a critic providing an immediate expected-value baseline, updated every single trade, is what makes online actor-critic learning practical in continuous, non-episodic domains.',
      bodyKn: 'ಇದೂವರೆಗೆ execute ಮಾಡಿದ ಒಂದೂ trade ಒಳ್ಳೆಯದೂ ಆಗಿತ್ತೇ ಎಂದೂ ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಒಂದೂ trading agent ಗೆ ಇಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ ನಿಖರ TD advantage ಬೇಕು -- ಅದೂ "episode" (continuous markets ಗೆ ವ್ಯಾಖ್ಯಾನಿಸದೆ ಇರಬಹುದು) ಕೊನೆಗೊಳ್ಳುವವರೆಗೆ ಕಲಿಯಲು ಕಾಯಲಾಗುವುದಿಲ್ಲ; ಒಂದೂ ತಕ್ಷಣದ expected-value baseline ಒದಗಿಸುವ, ಪ್ರತಿ single trade ಗೆ update ಆಗುವ ಒಂದೂ critic, continuous, non-episodic domains ನಲ್ಲಿ online actor-critic learning ಅನ್ನೂ ಪ್ರಾಯೋಗಿಕ ಮಾಡುವುದೂ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does the actor learn?', qKn: 'Actor ಏನೂ ಕಲಿಯುತ್ತದೆ?',
        opts: ['The value of a state', 'The probability of actions given a state', 'The environment transition model', 'The reward function'], correct: 1,
        optsKn: ['State ನ value', 'State ಕೊಟ್ಟಾಗ actions ನ probability', 'Environment transition model', 'Reward function'] },
      { q: 'Genuinely confirmed: what was V_hat after one critic update from w=[0.5,0.2,0.8], x=[1.0,0.0,1.0], target=2.0, lr=0.1?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: w=[0.5,0.2,0.8], x=[1.0,0.0,1.0], target=2.0, lr=0.1 ಇಂದ ಒಂದೂ critic update ನಂತರ V_hat ಏನಾಗಿತ್ತು?',
        opts: ['1.3 (unchanged)', '2.0 (jumped straight to target)', '1.44', '0.7'], correct: 2,
        optsKn: ['1.3 (ಬದಲಾಗಿಲ್ಲ)', '2.0 (ನೇರವಾಗಿ target ಗೆ ಜಿಗಿಯಿತು)', '1.44', '0.7'] },
      { q: 'If Q(s,a)=12 and V(s)=8, what is the advantage A(s,a)?', qKn: 'Q(s,a)=12 ಮತ್ತೆ V(s)=8 ಆಗಿದ್ದರೆ, advantage A(s,a) ಏನೂ?',
        opts: ['20', '4', '-4', '96'], correct: 1,
        optsKn: ['20', '4', '-4', '96'] },
      { q: 'Genuinely confirmed: what is the one-step TD advantage in the worked example (r=0.7, gamma=0.9, V(s)=1.0, V(s\')=1.0)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: worked example ನಲ್ಲಿ (r=0.7, gamma=0.9, V(s)=1.0, V(s\')=1.0) one-step TD advantage ಏನೂ?',
        opts: ['-0.6', '+0.6', '0.0', '1.6'], correct: 1,
        optsKn: ['-0.6', '+0.6', '0.0', '1.6'] },
      { q: 'Why subtract a baseline like V(s) from the return?', qKn: 'Return ಇಂದ V(s) ರೀತಿಯ ಒಂದೂ baseline ಏಕೆ ಕಳೆಯಬೇಕು?',
        opts: ['To change the environment reward', 'To reduce the variance of the policy-gradient estimator without changing its expected value', 'To make the policy deterministic', 'To eliminate exploration'], correct: 1,
        optsKn: ['Environment reward ಬದಲಾಯಿಸಲು', 'ಅದೂ expected value ಬದಲಾಯಿಸದೆ policy-gradient estimator ನ variance ಕಡಿಮೆ ಮಾಡಲು', 'Policy ಅನ್ನೂ deterministic ಮಾಡಲು', 'Exploration ತೆಗೆದುಹಾಕಲು'] },
    ] } },
  ],
};
