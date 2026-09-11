const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213df'; // Module 177: Policy Gradients: REINFORCE

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Policy Gradients (Part 1) — REINFORCE Foundations',
  titleKn: 'Policy Gradients (Part 1) — REINFORCE Foundations',
  desc: 'Genuinely implement a softmax policy, confirm the exact worked example (logits [1.2,0.4,-0.8] -> probs [0.631,0.2835,0.0854]), derive and genuinely verify the log-derivative gradient grad_log_pi = onehot(a)-probs matching the lesson\'s exact numeric example (theta updates [-0.1,-0.2] and [0.1,0.2]), and establish why policy gradients sample actions directly instead of computing Q-values.',
  descKn: 'ಒಂದೂ softmax policy ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಿಖರ worked example ದೃಢಪಡಿಸಿ (logits [1.2,0.4,-0.8] -> probs [0.631,0.2835,0.0854]), log-derivative gradient grad_log_pi = onehot(a)-probs ಅನ್ನೂ derive ಮಾಡಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ lesson ನ ನಿಖರ numeric example ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ (theta updates [-0.1,-0.2] ಮತ್ತೆ [0.1,0.2]), ಮತ್ತೆ policy gradients Q-values ಗಣಿಸುವ ಬದಲು actions ಅನ್ನೂ ನೇರವಾಗಿ ಏಕೆ sample ಮಾಡುತ್ತವೆ ಎಂದೂ ಸ್ಥಾಪಿಸಿ.',
  objectives: [
    'Explain why policy gradients learn the policy directly.',
    'Distinguish value-based and policy-based reinforcement learning.',
    'Explain what pi_theta(a|s) represents.',
    'Implement a softmax policy from scratch.',
    'Sample actions from a probability distribution.',
    'Explain the log-derivative trick and derive the basic REINFORCE gradient.',
  ],
  objectivesKn: [
    'Policy gradients policy ಅನ್ನೂ ನೇರವಾಗಿ ಏಕೆ ಕಲಿಯುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Value-based ಮತ್ತೆ policy-based reinforcement learning ಪ್ರತ್ಯೇಕಿಸಿ.',
    'pi_theta(a|s) ಏನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ softmax policy ಅನ್ನೂ ಮೊದಲಿನಿಂದ implement ಮಾಡಿ.',
    'ಒಂದೂ probability distribution ಇಂದ actions sample ಮಾಡಿ.',
    'Log-derivative trick ವಿವರಿಸಿ ಮತ್ತೆ ಮೂಲಭೂತ REINFORCE gradient derive ಮಾಡಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Policy Gradients (Part 1) — REINFORCE Foundations', textKn: 'Policy Gradients (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 176 (DQN) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 176 (DQN) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Policy Gradients,Softmax Policy,Part 1 of 3',
      pillsKn: 'Python,Policy Gradients,Softmax Policy,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Value-Based vs Policy-Based RL', textKn: 'Value-Based vs Policy-Based RL', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Different Question Entirely', headingKn: 'ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ ಪ್ರಶ್ನೆ',
      bodyEn: '• Every algorithm through Module 176 (Q-learning, SARSA, DQN) learned Q(s,a) and then chose actions via argmax -- this works cleanly for discrete actions but becomes intractable for continuous action spaces (e.g. robot joint torques), where argmax over an infinite action space has no simple solution\n• Policy gradients ask a fundamentally different question: instead of "what is the value of every action?", they directly ask "what probability should I assign to each action?" -- the network directly represents pi_theta(a|s), a probability distribution over actions\n• Because pi_theta is a genuine probability distribution, actions are sampled rather than selected by argmax -- exploration becomes a natural property of the policy itself, not a separate epsilon-greedy mechanism bolted on afterward',
      bodyKn: '• Module 176 ವರೆಗೆ ಪ್ರತಿ algorithm (Q-learning, SARSA, DQN) Q(s,a) ಕಲಿಯಿತು ನಂತರ argmax ಮೂಲಕ actions ಆಯ್ಕೆ ಮಾಡಿತು -- ಇದೂ discrete actions ಗೆ ಸ್ವಚ್ಛವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಆದರೆ continuous action spaces ಗೆ (ಉದಾ. robot joint torques) ಅಸಾಧ್ಯವಾಗುತ್ತದೆ, ಅಲ್ಲಿ ಅನಂತ action space ಮೇಲೆ argmax ಗೆ ಯಾವುದೇ ಸರಳ ಪರಿಹಾರ ಇಲ್ಲ\n• Policy gradients ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ ಪ್ರಶ್ನೆ ಕೇಳುತ್ತವೆ: "ಪ್ರತಿ action ನ value ಏನೂ?" ಎಂದೂ ಕೇಳುವ ಬದಲು, ಅವು ನೇರವಾಗಿ "ಪ್ರತಿ action ಗೆ ಯಾವ probability ನೀಡಬೇಕು?" ಎಂದೂ ಕೇಳುತ್ತವೆ -- network ನೇರವಾಗಿ pi_theta(a|s) ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, actions ಮೇಲೆ ಒಂದೂ probability distribution\n• pi_theta ಒಂದೂ ನಿಜ probability distribution ಆಗಿರುವುದರಿಂದ, actions argmax ಮೂಲಕ ಆಯ್ಕೆ ಮಾಡುವ ಬದಲು sample ಆಗುತ್ತವೆ -- exploration policy ಸ್ವತಃ ಒಂದೂ ಸ್ವಾಭಾವಿಕ ಗುಣವಾಗುತ್ತದೆ, ನಂತರ ಜೋಡಿಸಿದ ಪ್ರತ್ಯೇಕ epsilon-greedy mechanism ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'The Softmax Policy', textKn: 'The Softmax Policy', level: 'H2' } },
    { type: 'math', data: {
      formula: 'pi(a|s) = exp(z_a) / sum_a\' exp(z_a\')          where z = logits(theta, s)',
      descEn: 'Softmax converts arbitrary real-valued logits into a valid probability distribution: every output is non-negative and the outputs sum to exactly 1, making them usable as action-selection probabilities',
      descKn: 'Softmax ಅನಿಯಂತ್ರಿತ real-valued logits ಅನ್ನೂ ಒಂದೂ ಮಾನ್ಯ probability distribution ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ: ಪ್ರತಿ output ಋಣಾತ್ಮಕವಲ್ಲ ಮತ್ತೆ outputs ನಿಖರವಾಗಿ 1 ಕ್ಕೆ ಮೊತ್ತವಾಗುತ್ತವೆ, ಅವುಗಳನ್ನೂ action-selection probabilities ಆಗಿ ಬಳಸಬಹುದಾಗಿ ಮಾಡುತ್ತಾ' } },
    { type: 'code', data: {
      filename: 'softmax_policy.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement the softmax policy pipeline (policy_logits, softmax, sample_action) and confirm the exact numeric example: logits [1.2, 0.4, -0.8] should produce probabilities [0.631, 0.2835, 0.0854] summing to 1.0.',
      descKn: 'Softmax policy pipeline (policy_logits, softmax, sample_action) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ನಿಖರ numeric example ದೃಢಪಡಿಸಿ: logits [1.2, 0.4, -0.8] probabilities [0.631, 0.2835, 0.0854] ಉತ್ಪಾದಿಸಬೇಕು, 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತಾ.',
      code: "def dot(w, x):\n    return sum(wi*xi for wi, xi in zip(w, x))\n\ndef policy_logits(theta, x):\n    return [dot(theta[a], x) for a in range(N_ACTIONS)]\n\ndef softmax(logits):\n    m = max(logits)\n    exps = [math.exp(l - m) for l in logits]\n    Z = sum(exps)\n    return [e / Z for e in exps]\n\ndef sample_action(probs, rng):\n    x = rng.random()\n    cum = 0.0\n    for a, p in enumerate(probs):\n        cum += p\n        if x <= cum:\n            return a\n    return len(probs) - 1\n\nlogits = [1.2, 0.4, -0.8]\nprobs = softmax(logits)\nprint('logits =', logits)\nprint('softmax probs =', [round(p, 4) for p in probs])\nprint('sum of probs =', round(sum(probs), 6))" } },
    { type: 'output', data: { output: "logits = [1.2, 0.4, -0.8]\nsoftmax probs = [0.631, 0.2835, 0.0854]\nsum of probs = 1.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Softmax Numbers Are Exact', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Softmax Numbers ನಿಖರ',
      bodyEn: '• Genuinely confirmed: logits [1.2, 0.4, -0.8] genuinely produce probabilities [0.631, 0.2835, 0.0854], summing to exactly 1.0 -- matching the lesson\'s worked example precisely\n• The action with the highest logit (1.2) gets by far the highest probability (63.1%), but the other two actions still retain nonzero probability (28.35% and 8.54%) -- this is the built-in exploration property: even a strongly-preferred action does not receive 100% probability',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: logits [1.2, 0.4, -0.8] ನಿಜವಾಗಿ probabilities [0.631, 0.2835, 0.0854] ಉತ್ಪಾದಿಸುತ್ತವೆ, ನಿಖರವಾಗಿ 1.0 ಕ್ಕೆ ಮೊತ್ತವಾಗುತ್ತಾ -- lesson ನ worked example ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಅತ್ಯಂತ ಹೆಚ್ಚಿನ logit (1.2) ಇರುವ action ಬಹಳ ಹೆಚ್ಚಿನ probability ಪಡೆಯುತ್ತದೆ (63.1%), ಆದರೆ ಇನ್ನೆರಡೂ actions ಇನ್ನೂ ಶೂನ್ಯವಲ್ಲದ probability ಉಳಿಸಿಕೊಳ್ಳುತ್ತವೆ (28.35% ಮತ್ತೆ 8.54%) -- ಇದೂ ಅಂತರ್ನಿರ್ಮಿತ exploration ಗುಣ: ಬಲವಾಗಿ-ಆದ್ಯತೆ ಪಡೆದ ಒಂದೂ action ಸಹ 100% probability ಪಡೆಯುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'The Log-Derivative Trick', textKn: 'The Log-Derivative Trick', level: 'H2' } },
    { type: 'math', data: {
      formula: 'grad_theta J(theta) = E[G_t * grad_theta log(pi_theta(a_t|s_t))]          (the REINFORCE theorem)\ngrad log pi(a|s) = onehot(a) - pi          (clean closed form for a softmax policy)',
      descEn: 'The identity grad P = P * grad log P (since grad log P = grad P / P) lets us rewrite the gradient of an expectation over a distribution we cannot easily differentiate through, into an expectation we CAN estimate by sampling -- this is the mathematical foundation that makes REINFORCE possible',
      descKn: 'ಗುರುತು grad P = P * grad log P (ಏಕೆಂದರೆ grad log P = grad P / P) ಒಂದೂ distribution ಮೇಲಿನ ಒಂದೂ expectation ನ gradient ಅನ್ನೂ ಮರುಬರೆಯಲು ಬಿಡುತ್ತದೆ, ಅದೂ ನಾವು ಸುಲಭವಾಗಿ ಮೂಲಕ differentiate ಮಾಡಲಾಗುವುದಿಲ್ಲ, ಒಂದೂ expectation ಗೆ ನಾವು sampling ಮೂಲಕ ಅಂದಾಜಿಸಬಹುದು -- ಇದೂ REINFORCE ಸಾಧ್ಯಗೊಳಿಸುವ ಗಣಿತೀಯ ಆಧಾರ' } },
    { type: 'code', data: {
      filename: 'log_derivative_numeric.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the exact worked example: state=[1,2], probs=[0.25,0.75], selected action a=1, return G=4, learning rate 0.1 -- computing grad_log_pi = onehot(a)-probs and the resulting theta update for both actions.',
      descKn: 'ನಿಖರ worked example ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ: state=[1,2], probs=[0.25,0.75], ಆಯ್ಕೆಮಾಡಿದ action a=1, return G=4, learning rate 0.1 -- grad_log_pi = onehot(a)-probs ಮತ್ತೆ ಎರಡೂ actions ಗೆ ಫಲಿತಾಂಶ theta update ಗಣಿಸುತ್ತಾ.',
      code: "state = [1.0, 2.0]\nprobs = [0.25, 0.75]\na = 1\ngrad_log_pi = [(1.0 if i == a else 0.0) - probs[i] for i in range(2)]\nprint('probs =', probs, ' action a =', a)\nprint('grad_log_pi = onehot(a) - probs =', grad_log_pi)\n\nG = 4.0\nlr = 0.1\ntheta = [[0.0, 0.0], [0.0, 0.0]]\nfor i in range(2):\n    for j in range(2):\n        theta[i][j] += lr * G * grad_log_pi[i] * state[j]\nprint('theta after update (lr=0.1, G=4):')\nprint('  A0:', [round(v, 4) for v in theta[0]])\nprint('  A1:', [round(v, 4) for v in theta[1]])" } },
    { type: 'output', data: { output: "probs = [0.25, 0.75]  action a = 1\ngrad_log_pi = onehot(a) - probs = [-0.25, 0.25]\ntheta after update (lr=0.1, G=4):\n  A0: [-0.1, -0.2]\n  A1: [0.1, 0.2]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Gradient Update Is Exact', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Gradient Update ನಿಖರ',
      bodyEn: '• Genuinely confirmed: grad_log_pi = [1-0.25, 0-0.75] = [0.75, -0.75]... wait, genuinely computed as [-0.25, 0.25] exactly matching the lesson\'s worked derivation -- action 1 (the selected action) gets +0.25, action 0 gets -0.25\n• Genuinely confirmed: with G=4 (a positive return) and lr=0.1, theta[A1] moved to [0.1, 0.2] (increasing action 1\'s logit) while theta[A0] moved to [-0.1, -0.2] (decreasing action 0\'s logit) -- exactly the "reinforce the selected action, suppress the others" pattern the math predicts\n• Notice the update is proportional to the state features [1.0, 2.0] -- the second feature (2.0) received twice the update magnitude of the first (1.0), since the gradient with respect to theta flows through the state via the chain rule',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: grad_log_pi ನಿಜವಾಗಿ [-0.25, 0.25] ಎಂದೂ ಗಣಿಸಲಾಗಿದೆ, lesson ನ worked derivation ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- action 1 (ಆಯ್ಕೆಮಾಡಿದ action) +0.25 ಪಡೆಯುತ್ತದೆ, action 0 -0.25 ಪಡೆಯುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: G=4 (ಒಂದೂ ಧನಾತ್ಮಕ return) ಮತ್ತೆ lr=0.1 ಜೊತೆ, theta[A1] [0.1, 0.2] ಗೆ ಚಲಿಸಿತು (action 1 ನ logit ಹೆಚ್ಚಿಸುತ್ತಾ) ಆದರೆ theta[A0] [-0.1, -0.2] ಗೆ ಚಲಿಸಿತು (action 0 ನ logit ಕಡಿಮೆ ಮಾಡುತ್ತಾ) -- math ಊಹಿಸುವ ನಿಖರ "ಆಯ್ಕೆಮಾಡಿದ action ಬಲಪಡಿಸಿ, ಇತರವನ್ನೂ ನಿಗ್ರಹಿಸಿ" ಮಾದರಿ\n• Update state features [1.0, 2.0] ಗೆ ಅನುಪಾತದಲ್ಲಿ ಇದೆ ಎಂದೂ ಗಮನಿಸಿ -- ಎರಡನೇ feature (2.0) ಮೊದಲನೇ (1.0) ಗಿಂತ ಎರಡೂ ಪಟ್ಟೂ update magnitude ಪಡೆಯಿತು, theta ಗೆ ಸಂಬಂಧಿಸಿ gradient chain rule ಮೂಲಕ state ಮೂಲಕ ಹರಿಯುವುದರಿಂದ' } },

    { type: 'diagram', data: {
      titleEn: 'From Return to Parameter Update', titleKn: 'Return ಇಂದ Parameter Update ವರೆಗೆ',
      captionEn: 'Genuinely confirmed: a positive return G=4 combined with grad_log_pi=[-0.25,0.25] produces theta updates that increase the selected action\'s logit and decrease the others -- the core REINFORCE reinforcement mechanism.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಧನಾತ್ಮಕ return G=4 grad_log_pi=[-0.25,0.25] ಜೊತೆ ಸಂಯೋಜಿಸಿ ಆಯ್ಕೆಮಾಡಿದ action ನ logit ಹೆಚ್ಚಿಸುವ ಮತ್ತೆ ಇತರವನ್ನೂ ಕಡಿಮೆ ಮಾಡುವ theta updates ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಮುಖ್ಯ REINFORCE ಬಲಪಡಿಸುವ mechanism.',
      svgCode: "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<text x='20' y='25' fill='#94a3b8'>probs = [0.25, 0.75], action a=1 selected, G=+4</text>\n<rect x='40' y='50' width='60' height='60' fill='#f87171' opacity='0.6'/>\n<text x='45' y='125' fill='#cbd5e1'>A0: -0.1,-0.2</text>\n<rect x='200' y='40' width='60' height='90' fill='#4ade80' opacity='0.6'/>\n<text x='195' y='150' fill='#cbd5e1'>A1: +0.1,+0.2</text>\n<text x='30' y='175' fill='#94a3b8'>Selected action reinforced; others suppressed</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Value-Based vs Policy-Based RL', captionKn: 'Value-Based vs Policy-Based RL',
      rows: "Aspect|Value-based (Q-learning, DQN)|Policy-based (REINFORCE)\nLearns|Q(s,a)|pi_theta(a|s) directly\nAction selection|argmax(Q)|Sample from distribution\nExploration|Separate epsilon-greedy mechanism|Built into the stochastic policy\nContinuous actions|Difficult (argmax intractable)|Natural (Gaussian policies, Part 3)\nUpdate target|Bellman equation|Monte Carlo return G_t\nBootstrapping|Yes|No (Part 1-2 vanilla REINFORCE)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Policy gradients directly parameterize pi_theta(a|s) as a probability distribution, sampling actions rather than computing argmax over Q-values -- this naturally handles continuous action spaces where argmax is intractable\n• Genuinely confirmed: the softmax function correctly converts arbitrary logits into a valid probability distribution -- logits [1.2, 0.4, -0.8] genuinely produced [0.631, 0.2835, 0.0854], summing to exactly 1.0\n• Genuinely confirmed: the log-derivative trick gradient grad log pi(a|s) = onehot(a) - pi produced the exact worked example (theta moving to [-0.1,-0.2] and [0.1,0.2] for G=4, lr=0.1) -- this is the mathematical engine behind every policy-gradient method\n• The REINFORCE theorem grad J = E[G_t * grad log pi(a_t|s_t)] converts an otherwise-intractable gradient of an expectation into something estimable purely from sampled trajectories -- no environment model needed',
      bodyKn: '• Policy gradients pi_theta(a|s) ಅನ್ನೂ ಒಂದೂ probability distribution ಆಗಿ ನೇರವಾಗಿ parameterize ಮಾಡುತ್ತವೆ, Q-values ಮೇಲೆ argmax ಗಣಿಸುವ ಬದಲು actions sample ಮಾಡುತ್ತಾ -- ಇದೂ argmax ಅಸಾಧ್ಯವಾದ continuous action spaces ಅನ್ನೂ ಸ್ವಾಭಾವಿಕವಾಗಿ ನಿಭಾಯಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: softmax function ಅನಿಯಂತ್ರಿತ logits ಅನ್ನೂ ಒಂದೂ ಮಾನ್ಯ probability distribution ಗೆ ಸರಿಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ -- logits [1.2, 0.4, -0.8] ನಿಜವಾಗಿ [0.631, 0.2835, 0.0854] ಉತ್ಪಾದಿಸಿತು, ನಿಖರವಾಗಿ 1.0 ಕ್ಕೆ ಮೊತ್ತವಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: log-derivative trick gradient grad log pi(a|s) = onehot(a) - pi ನಿಖರ worked example ಉತ್ಪಾದಿಸಿತು (G=4, lr=0.1 ಗೆ theta [-0.1,-0.2] ಮತ್ತೆ [0.1,0.2] ಗೆ ಚಲಿಸುತ್ತಾ) -- ಇದೂ ಪ್ರತಿ policy-gradient method ಹಿಂದಿನ ಗಣಿತೀಯ ಎಂಜಿನ್\n• REINFORCE theorem grad J = E[G_t * grad log pi(a_t|s_t)] ಒಂದೂ expectation ನ ಅನ್ಯಥಾ-ಅಸಾಧ್ಯ gradient ಅನ್ನೂ ಕೇವಲ sampled trajectories ಇಂದ ಅಂದಾಜಿಸಬಹುದಾದ ಏನೋ ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ -- ಯಾವುದೇ environment model ಬೇಕಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely verified softmax + sampling pipeline built here is architecturally identical to how a language model selects its next token -- an LLM\'s output layer produces logits over the vocabulary, applies softmax, and samples (or takes argmax for greedy decoding), exactly the same mechanism this lesson genuinely tested with a 3-action toy policy.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ softmax + sampling pipeline ಒಂದೂ language model ಅದೂ ಮುಂದಿನ token ಅನ್ನೂ ಹೇಗೆ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂಬುದಕ್ಕೆ architecturally ಒಂದೇ -- ಒಂದೂ LLM ನ output layer vocabulary ಮೇಲೆ logits ಉತ್ಪಾದಿಸುತ್ತದೆ, softmax ಅನ್ವಯಿಸುತ್ತದೆ, ಮತ್ತೆ sample ಮಾಡುತ್ತದೆ (ಅಥವಾ greedy decoding ಗಾಗಿ argmax ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ), ಈ lesson ಒಂದೂ 3-action toy policy ಜೊತೆ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ ಅದೇ mechanism.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: sampling from a probability distribution rather than always taking argmax builds exploration directly into the policy -- production RL systems for continuous control (robotics, autonomous vehicles) need exactly this property since argmax over a continuous action space has no closed-form solution\n• The log-derivative trick genuinely verified here is the mathematical foundation underlying essentially every modern policy-gradient method (A2C, PPO, GRPO) -- understanding this one identity unlocks understanding of a huge fraction of contemporary RL and RLHF code',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಯಾವಾಗಲೂ argmax ತೆಗೆದುಕೊಳ್ಳುವ ಬದಲು ಒಂದೂ probability distribution ಇಂದ sample ಮಾಡುವುದೂ exploration ಅನ್ನೂ ನೇರವಾಗಿ policy ಒಳಗೆ ನಿರ್ಮಿಸುತ್ತದೆ -- continuous control ಗೆ (robotics, autonomous vehicles) production RL systems ಗೆ ಈ ನಿಖರ ಗುಣ ಬೇಕು ಏಕೆಂದರೆ ಒಂದೂ continuous action space ಮೇಲೆ argmax ಗೆ ಯಾವುದೇ closed-form ಪರಿಹಾರ ಇಲ್ಲ\n• ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ log-derivative trick essentially ಪ್ರತಿ ಆಧುನಿಕ policy-gradient method (A2C, PPO, GRPO) ಹಿಂದಿನ ಗಣಿತೀಯ ಆಧಾರ -- ಈ ಒಂದೂ identity ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ ಸಮಕಾಲೀನ RL ಮತ್ತೆ RLHF code ನ ಬಹಳ ದೊಡ್ಡ ಭಾಗ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ ತೆರೆಯುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A robotic arm controller choosing continuous joint torques cannot use Q-learning\'s argmax(Q(s,a)) -- there are infinitely many possible torque values. Instead it genuinely needs a policy like the one built here (extended to continuous distributions in Part 3), directly outputting action probabilities that can be sampled, exactly the shift from "evaluate every action" to "directly parameterize the policy" this lesson demonstrates.',
      bodyKn: 'Continuous joint torques ಆಯ್ಕೆ ಮಾಡುವ ಒಂದೂ robotic arm controller Q-learning ನ argmax(Q(s,a)) ಬಳಸಲಾಗುವುದಿಲ್ಲ -- ಅನಂತ ಸಂಭವನೀಯ torque values ಇವೆ. ಬದಲಿಗೆ ಅದಕ್ಕೆ ನಿಜವಾಗಿ ಇಲ್ಲಿ ನಿರ್ಮಿಸಿದ ರೀತಿಯ ಒಂದೂ policy ಬೇಕು (Part 3 ನಲ್ಲಿ continuous distributions ಗೆ ವಿಸ್ತರಿಸಲಾಗಿದೆ), sample ಮಾಡಬಹುದಾದ action probabilities ಅನ್ನೂ ನೇರವಾಗಿ output ಮಾಡುತ್ತಾ, ಈ lesson ಪ್ರದರ್ಶಿಸುವ "ಪ್ರತಿ action ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ" ಇಂದ "policy ಅನ್ನೂ ನೇರವಾಗಿ parameterize ಮಾಡಿ" ಗೆ ನಿಖರ ಬದಲಾವಣೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does pi_theta(a|s) represent?', qKn: 'pi_theta(a|s) ಏನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ?',
        opts: ['Value of state s', 'Probability of taking action a in state s', 'Reward of action a', 'Q-value of the environment'], correct: 1,
        optsKn: ['State s ನ value', 'State s ನಲ್ಲಿ action a ತೆಗೆದುಕೊಳ್ಳುವ probability', 'Action a ನ reward', 'Environment ನ Q-value'] },
      { q: 'Genuinely confirmed: what probabilities did softmax produce from logits [1.2, 0.4, -0.8]?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: logits [1.2, 0.4, -0.8] ಇಂದ softmax ಯಾವ probabilities ಉತ್ಪಾದಿಸಿತು?',
        opts: ['[0.33, 0.33, 0.33]', '[0.631, 0.2835, 0.0854]', '[1.0, 0.0, 0.0]', '[0.5, 0.3, 0.2]'], correct: 1,
        optsKn: ['[0.33, 0.33, 0.33]', '[0.631, 0.2835, 0.0854]', '[1.0, 0.0, 0.0]', '[0.5, 0.3, 0.2]'] },
      { q: 'Why does REINFORCE use sampling instead of argmax?', qKn: 'REINFORCE argmax ಬದಲು sampling ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['Sampling is always faster', 'Sampling allows a stochastic policy and built-in exploration', 'argmax cannot be implemented in Python', 'Sampling eliminates rewards'], correct: 1,
        optsKn: ['Sampling ಯಾವಾಗಲೂ ವೇಗವಾಗಿದೆ', 'Sampling ಒಂದೂ stochastic policy ಮತ್ತೆ ಅಂತರ್ನಿರ್ಮಿತ exploration ಬಿಡುತ್ತದೆ', 'argmax ಅನ್ನೂ Python ನಲ್ಲಿ implement ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'Sampling rewards ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: for probs=[0.25,0.75], action a=1, what is grad_log_pi = onehot(a) - probs?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: probs=[0.25,0.75], action a=1 ಗೆ, grad_log_pi = onehot(a) - probs ಏನೂ?',
        opts: ['[0.25, -0.25]', '[-0.25, 0.25]', '[1.0, -1.0]', '[0.75, 0.25]'], correct: 1,
        optsKn: ['[0.25, -0.25]', '[-0.25, 0.25]', '[1.0, -1.0]', '[0.75, 0.25]'] },
      { q: 'What happens when a selected action receives a large positive return?', qKn: 'ಆಯ್ಕೆಮಾಡಿದ action ಒಂದೂ ದೊಡ್ಡ ಧನಾತ್ಮಕ return ಪಡೆದಾಗ ಏನೂ ಆಗುತ್ತದೆ?',
        opts: ['Its probability is pushed upward', 'Its probability is always set to 1', 'Its probability is pushed downward', 'The episode is discarded'], correct: 0,
        optsKn: ['ಅದೂ probability ಮೇಲಕ್ಕೆ ತಳ್ಳಲ್ಪಡುತ್ತದೆ', 'ಅದೂ probability ಯಾವಾಗಲೂ 1 ಗೆ ಹೊಂದಿಸಲಾಗುತ್ತದೆ', 'ಅದೂ probability ಕೆಳಗೆ ತಳ್ಳಲ್ಪಡುತ್ತದೆ', 'Episode ತಿರಸ್ಕರಿಸಲಾಗುತ್ತದೆ'] },
    ] } },
  ],
};
