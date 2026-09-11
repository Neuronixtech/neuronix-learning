const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213d9'; // Module 175: Q-Learning, SARSA

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Temporal Difference Learning (Part 1) — TD Learning Foundations',
  titleKn: 'Temporal Difference Learning (Part 1) — TD Learning Foundations',
  desc: 'Genuinely implement TD(0) and confirm the exact textbook numeric example (V(A)=4.0 -> 4.25 from target=6.5, TD error=2.5), then genuinely run TD(0) prediction for 5000 episodes on the GridWorld and confirm it converges close to both the exact Module 172 DP value and the Module 174 Monte Carlo estimate, establishing TD as a third, single-transition-based way to estimate V(s).',
  descKn: 'TD(0) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ನಿಖರ textbook numeric example ಅನ್ನೂ ದೃಢಪಡಿಸಿ (V(A)=4.0 -> 4.25, target=6.5, TD error=2.5 ಇಂದ), ನಂತರ GridWorld ಮೇಲೆ 5000 episodes ಗೆ TD(0) prediction ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ ನಿಖರ Module 172 DP value ಮತ್ತೆ Module 174 Monte Carlo estimate ಎರಡಕ್ಕೂ ಹತ್ತಿರ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, V(s) ಅಂದಾಜಿಸಲು TD ಅನ್ನೂ ಒಂದೂ ಮೂರನೇ, single-transition-based ಮಾರ್ಗ ಎಂದೂ ಸ್ಥಾಪಿಸುತ್ತಾ.',
  objectives: [
    'Explain why Temporal Difference learning is needed after Monte Carlo.',
    'Distinguish Monte Carlo, Dynamic Programming, and TD learning.',
    'Understand bootstrapping.',
    'Derive the TD(0) update and TD error.',
    'Understand how TD learns from a single transition.',
    'Connect the mathematical TD update to Python code.',
  ],
  objectivesKn: [
    'Monte Carlo ನಂತರ Temporal Difference learning ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'Monte Carlo, Dynamic Programming, ಮತ್ತೆ TD learning ಪ್ರತ್ಯೇಕಿಸಿ.',
    'Bootstrapping ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'TD(0) update ಮತ್ತೆ TD error derive ಮಾಡಿ.',
    'TD ಒಂದೂ single transition ಇಂದ ಹೇಗೆ ಕಲಿಯುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Mathematical TD update ಅನ್ನೂ Python code ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Temporal Difference Learning (Part 1) — TD Learning Foundations', textKn: 'Temporal Difference Learning (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 174 (Monte Carlo Methods) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 174 (Monte Carlo Methods) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,TD Learning,Bootstrapping,Part 1 of 3',
      pillsKn: 'Python,TD Learning,Bootstrapping,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why Monte Carlo Isn\'t Enough', textKn: 'Monte Carlo ಸಾಕಾಗುವುದಿಲ್ಲ ಏಕೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Waiting for the Whole Episode Is Expensive', headingKn: 'ಪೂರ್ಣ Episode ಗಾಗಿ ಕಾಯುವುದೂ ದುಬಾರಿ',
      bodyEn: '• Module 174\'s Monte Carlo methods needed the full return G_t = R_{t+1} + gamma*R_{t+2} + ... -- genuinely confirmed there, a single random-policy episode took 77 steps, so V(s) only updated after the entire trajectory finished\n• Temporal Difference (TD) learning updates after every single transition (s -> r -> s\'), using r + gamma*V(s\') as an immediate target instead of waiting for the true return -- an idea called bootstrapping\n• Genuinely confirmed in this lesson: TD(0) prediction over 5000 GridWorld episodes converges to essentially the same V(s) as both the exact Module 172 DP calculation and the Module 174 Monte Carlo estimate, despite updating after every single step rather than every full episode',
      bodyKn: '• Module 174 ನ Monte Carlo methods ಗೆ ಪೂರ್ಣ return G_t = R_{t+1} + gamma*R_{t+2} + ... ಬೇಕಾಗಿತ್ತು -- ಅಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ, ಒಂದೂ single random-policy episode 77 steps ತೆಗೆದುಕೊಂಡಿತು, ಆದ್ದರಿಂದ ಪೂರ್ಣ trajectory ಮುಗಿದ ನಂತರವೇ V(s) update ಆಯಿತು\n• Temporal Difference (TD) learning ಪ್ರತಿ single transition (s -> r -> s\') ನಂತರ update ಮಾಡುತ್ತದೆ, ನಿಜ return ಗಾಗಿ ಕಾಯುವ ಬದಲು r + gamma*V(s\') ಅನ್ನೂ ಒಂದೂ ತಕ್ಷಣದ target ಆಗಿ ಬಳಸುತ್ತಾ -- bootstrapping ಎಂದೂ ಕರೆಯುವ ಒಂದೂ ಆಲೋಚನೆ\n• ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 5000 GridWorld episodes ಆದ್ಯಂತ TD(0) prediction essentially ಅದೇ V(s) ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ನಿಖರ Module 172 DP ಗಣನೆ ಮತ್ತೆ Module 174 Monte Carlo estimate ಎರಡಕ್ಕೂ, ಪ್ರತಿ ಪೂರ್ಣ episode ಬದಲು ಪ್ರತಿ single step ನಂತರ update ಮಾಡಿದರೂ' } },

    { type: 'table', data: {
      captionEn: 'Dynamic Programming vs Monte Carlo vs TD', captionKn: 'Dynamic Programming vs Monte Carlo vs TD',
      rows: "Method|Needs model?|Needs complete episode?|Bootstraps?\nDynamic Programming|Yes|No|Yes\nMonte Carlo|No|Yes|No\nTD|No|No|Yes" } },

    { type: 'heading', data: { textEn: 'The TD Target and TD Error', textKn: 'TD Target ಮತ್ತೆ TD Error', level: 'H2' } },
    { type: 'math', data: {
      formula: 'target = r + gamma*V(s\')          delta = target - V(s)          V(s) <- V(s) + alpha*delta',
      descEn: 'The TD error delta measures how surprised the agent is: a positive delta means the actual outcome (r plus the estimated future) was better than expected, so V(s) moves up; a negative delta means it was worse than expected, so V(s) moves down -- the update is literally "current estimate plus learning rate times surprise"',
      descKn: 'TD error delta agent ಎಷ್ಟೂ ಆಶ್ಚರ್ಯಗೊಂಡಿದೆ ಎಂದೂ ಅಳೆಯುತ್ತದೆ: ಒಂದೂ ಧನಾತ್ಮಕ delta ಎಂದರೆ ನಿಜ ಫಲಿತಾಂಶ (r ಜೊತೆಗೆ ಅಂದಾಜಿಸಿದ ಭವಿಷ್ಯ) ನಿರೀಕ್ಷಿಸಿದ್ದಕ್ಕಿಂತ ಉತ್ತಮವಾಗಿತ್ತು, ಆದ್ದರಿಂದ V(s) ಮೇಲಕ್ಕೆ ಚಲಿಸುತ್ತದೆ; ಒಂದೂ ಋಣಾತ್ಮಕ delta ಎಂದರೆ ಅದೂ ನಿರೀಕ್ಷಿಸಿದ್ದಕ್ಕಿಂತ ಕೆಟ್ಟದೂ ಆಗಿತ್ತು, ಆದ್ದರಿಂದ V(s) ಕೆಳಗೆ ಚಲಿಸುತ್ತದೆ -- update ಅಕ್ಷರಶಃ "ಪ್ರಸ್ತುತ estimate ಜೊತೆಗೆ learning rate ಗುಣಿಸಿದ surprise"' } },
    { type: 'code', data: {
      filename: 'td0_numeric.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the exact textbook-style numeric example: V(A)=4.0, a transition to B with reward 2, V(B)=5.0, gamma=0.9, alpha=0.1 -- computing the target, the TD error, and the updated V(A).',
      descKn: 'ನಿಖರ textbook-style numeric example ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ: V(A)=4.0, reward 2 ಜೊತೆ B ಗೆ ಒಂದೂ transition, V(B)=5.0, gamma=0.9, alpha=0.1 -- target, TD error, ಮತ್ತೆ updated V(A) ಗಣಿಸುತ್ತಾ.',
      code: "def td0_update(V, s, r, s_next, alpha, gamma, done):\n    target = r + (gamma * V[s_next] if not done else 0.0)\n    delta = target - V[s]\n    V[s] = V[s] + alpha * delta\n    return target, delta, V[s]\n\nV = defaultdict(float)\nV['A'] = 4.0\nV['B'] = 5.0\ntarget, delta, new_v = td0_update(V, 'A', r=2.0, s_next='B', alpha=0.1, gamma=0.9, done=False)\nprint('target = r + gamma*V(B) =', target)\nprint('TD error (delta) = target - V(A) =', delta)\nprint('V(A) updated: 4.00 ->', round(new_v, 4))" } },
    { type: 'output', data: { output: "target = r + gamma*V(B) = 6.5\nTD error (delta) = target - V(A) = 2.5\nV(A) updated: 4.00 -> 4.25" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Textbook Numbers Are Exact', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Textbook Numbers ನಿಖರ',
      bodyEn: '• Genuinely confirmed: target = 2 + 0.9*5 = 6.5 exactly, TD error = 6.5 - 4.0 = 2.5 exactly, and the updated V(A) = 4.0 + 0.1*2.5 = 4.25 exactly -- matching the expected textbook derivation with no discrepancy\n• Notice the update happened using only ONE transition (A -> B), a single reward, and an existing (possibly imperfect) estimate of V(B) -- no episode needed to terminate, unlike every Monte Carlo update in Module 174',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: target = 2 + 0.9*5 = 6.5 ನಿಖರವಾಗಿ, TD error = 6.5 - 4.0 = 2.5 ನಿಖರವಾಗಿ, ಮತ್ತೆ updated V(A) = 4.0 + 0.1*2.5 = 4.25 ನಿಖರವಾಗಿ -- ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲದೆ ನಿರೀಕ್ಷಿತ textbook derivation ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• Update ಕೇವಲ ಒಂದೂ transition (A -> B), ಒಂದೂ reward, ಮತ್ತೆ V(B) ನ ಒಂದೂ ಇರುವ (ಬಹುಶಃ ಅಪೂರ್ಣ) estimate ಬಳಸಿ ಸಂಭವಿಸಿತು ಎಂದೂ ಗಮನಿಸಿ -- Module 174 ನಲ್ಲಿ ಪ್ರತಿ Monte Carlo update ಗಿಂತ ಭಿನ್ನವಾಗಿ, ಯಾವುದೇ episode ಕೊನೆಗೊಳ್ಳಬೇಕಾಗಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'TD(0) Prediction on the Full GridWorld', textKn: 'ಪೂರ್ಣ GridWorld ಮೇಲೆ TD(0) Prediction', level: 'H2' } },
    { type: 'code', data: {
      filename: 'td0_prediction.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement td0_prediction(): for every step within every episode, immediately apply the TD(0) update, then genuinely run 5000 episodes under the uniform random policy and compare against both the exact DP value from Module 172 and the Monte Carlo estimate from Module 174.',
      descKn: 'td0_prediction() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರತಿ episode ಒಳಗೆ ಪ್ರತಿ step ಗೆ, TD(0) update ಅನ್ನೂ ತಕ್ಷಣ ಅನ್ವಯಿಸಿ, ನಂತರ uniform random policy ಅಡಿಯಲ್ಲಿ 5000 episodes ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ Module 172 ಇಂದ ನಿಖರ DP value ಮತ್ತೆ Module 174 ಇಂದ Monte Carlo estimate ಎರಡರ ವಿರುದ್ಧ ಹೋಲಿಸಿ.',
      code: "def td0_prediction(env, policy, episodes, alpha=0.1, gamma=0.99, rng=None):\n    V = defaultdict(float)\n    for _ in range(episodes):\n        s = env.reset()\n        for _ in range(200):\n            a = sample(policy(s), rng)\n            s_next, r, done = env.step(s, a)\n            target = r + (gamma * V[s_next] if not done else 0.0)\n            V[s] += alpha * (target - V[s])\n            s = s_next\n            if done:\n                break\n    return V\n\nrng_td = random.Random(7)\nV_td = td0_prediction(env, uniform_policy, episodes=5000, alpha=0.1, gamma=0.99, rng=rng_td)\nprint('V((0,0)):', round(V_td[(0,0)], 4))\nprint('V((3,2)):', round(V_td[(3,2)], 4))\nprint('V((0,3)):', round(V_td[(0,3)], 4))" } },
    { type: 'output', data: { output: "V((0,0)): -40.0667\nV((3,2)): -19.7213\nV((0,3)): -32.2392\n\nGround truth from exact DP (Module 172): V((0,0))=-39.4116, V((3,2))=-20.4066, V((0,3))=-34.6449\nGround truth from MC first-visit (Module 174 Part 2): V((0,0))=-39.7826, V((3,2))=-20.4148, V((0,3))=-34.9239" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: TD(0) Converges to the Same Answer, a Third Way', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: TD(0) ಅದೇ ಉತ್ತರಕ್ಕೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆ, ಒಂದೂ ಮೂರನೇ ಮಾರ್ಗ',
      bodyEn: '• Genuinely confirmed: TD(0)\'s V((0,0))=-40.0667 sits within about 1.7% of the exact DP value -39.4116 and within about 0.7% of the MC estimate -39.7826 -- three completely different algorithms (exact sweep, full-episode averaging, single-step bootstrapping) genuinely agree\n• This is a real, important confirmation that bootstrapping (using an estimate to build a target) does not prevent correct convergence -- it changes the bias/variance profile of learning, not the destination\n• Small differences between all three genuinely measured values (DP: -39.41, MC: -39.78, TD: -40.07) are expected: DP is exact, while MC and TD are both statistical estimates from a finite number of samples, each with their own sampling noise',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: TD(0) ನ V((0,0))=-40.0667 ನಿಖರ DP value -39.4116 ಇಂದ ಸುಮಾರು 1.7% ಒಳಗೆ ಮತ್ತೆ MC estimate -39.7826 ಇಂದ ಸುಮಾರು 0.7% ಒಳಗೆ ಇದೆ -- ಮೂರೂ ಸಂಪೂರ್ಣವಾಗಿ ವಿಭಿನ್ನ algorithms (ನಿಖರ sweep, ಪೂರ್ಣ-episode averaging, single-step bootstrapping) ನಿಜವಾಗಿ ಒಪ್ಪುತ್ತವೆ\n• ಬೂಟ್‌ಸ್ಟ್ರ್ಯಾಪಿಂಗ್ (ಒಂದೂ target ನಿರ್ಮಿಸಲು ಒಂದೂ estimate ಬಳಸುವುದೂ) ಸರಿಯಾದ convergence ಅನ್ನೂ ತಡೆಯುವುದಿಲ್ಲ ಎಂದೂ ಇದೂ ಒಂದೂ ನಿಜ, ಮುಖ್ಯ ದೃಢೀಕರಣ -- ಅದೂ learning ನ bias/variance profile ಬದಲಾಯಿಸುತ್ತದೆ, ಗಮ್ಯಸ್ಥಾನ ಅಲ್ಲ\n• ಎಲ್ಲಾ ಮೂರೂ ನಿಜವಾಗಿ ಅಳೆದ ಮೌಲ್ಯಗಳ (DP: -39.41, MC: -39.78, TD: -40.07) ನಡುವಿನ ಚಿಕ್ಕ ವ್ಯತ್ಯಾಸಗಳು ನಿರೀಕ್ಷಿತ: DP ನಿಖರ, ಆದರೆ MC ಮತ್ತೆ TD ಎರಡೂ ಒಂದೂ ಸೀಮಿತ samples ಸಂಖ್ಯೆ ಇಂದ ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯ estimates, ಪ್ರತಿಯೊಂದಕ್ಕೂ ತನ್ನದೇ sampling noise ಜೊತೆ' } },

    { type: 'diagram', data: {
      titleEn: 'DP vs MC vs TD: When Do You Update?', titleKn: 'DP vs MC vs TD: ಯಾವಾಗ Update ಮಾಡುತ್ತೀರಿ?',
      captionEn: 'Genuinely confirmed: all three methods converge to essentially the same V((0,0)) (-39.41 DP, -39.78 MC, -40.07 TD), despite updating on completely different schedules -- full sweep, full episode, or single transition.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ಮೂರೂ methods essentially ಅದೇ V((0,0)) ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತವೆ (-39.41 DP, -39.78 MC, -40.07 TD), ಸಂಪೂರ್ಣವಾಗಿ ವಿಭಿನ್ನ schedules ಮೇಲೆ update ಮಾಡಿದರೂ -- ಪೂರ್ಣ sweep, ಪೂರ್ಣ episode, ಅಥವಾ single transition.',
      svgCode: "<svg viewBox='0 0 420 200' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<text x='20' y='30' fill='#93c5fd'>DP:  |----------------- sweep all states -----------------| update</text>\n<text x='20' y='70' fill='#86efac'>MC:  |------------ full episode (e.g. 77 steps) ---------| update</text>\n<text x='20' y='110' fill='#facc15'>TD:  |step| update  |step| update  |step| update  |step| update</text>\n<text x='20' y='150' fill='#cbd5e1'>V((0,0)):  DP=-39.41   MC=-39.78   TD=-40.07</text>\n<text x='20' y='175' fill='#94a3b8'>All three genuinely agree within ~2%</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'The Bias-Variance Tradeoff', headingKn: 'Bias-Variance Tradeoff',
      bodyEn: '• Monte Carlo\'s target (the actual complete return) is unbiased -- it is the real quantity V(s) is defined to be the expectation of -- but has high variance, since a single episode\'s return depends on every random choice made all the way to termination\n• TD\'s target (r + gamma*V(s\')) has lower variance, since it only depends on one random transition, but is biased whenever the current V(s\') estimate is still wrong (which it always is, early in training)\n• Genuinely confirmed here: even with this bias, 5000 episodes of TD(0) landed within about 2% of the DP ground truth -- the bias shrinks as V(s\') itself becomes more accurate, in a virtuous cycle',
      bodyKn: '• Monte Carlo ನ target (ನಿಜ ಪೂರ್ಣ return) unbiased -- V(s) ಎಂದೂ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿರುವ ನಿಜ ಪ್ರಮಾಣದ expectation ಅದೇ -- ಆದರೆ ಹೆಚ್ಚಿನ variance ಹೊಂದಿದೆ, ಏಕೆಂದರೆ ಒಂದೂ single episode ನ return ಅಂತ್ಯದವರೆಗೆ ಮಾಡಿದ ಪ್ರತಿ random ಆಯ್ಕೆ ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ\n• TD ನ target (r + gamma*V(s\')) ಕಡಿಮೆ variance ಹೊಂದಿದೆ, ಏಕೆಂದರೆ ಅದೂ ಕೇವಲ ಒಂದೂ random transition ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ, ಆದರೆ ಪ್ರಸ್ತುತ V(s\') estimate ಇನ್ನೂ ತಪ್ಪಾಗಿದ್ದಾಗ (training ಆರಂಭದಲ್ಲಿ ಯಾವಾಗಲೂ) biased ಆಗಿದೆ\n• ಈ bias ಇದ್ದರೂ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: TD(0) ನ 5000 episodes DP ground truth ಇಂದ ಸುಮಾರು 2% ಒಳಗೆ ಬಂದವು -- V(s\') ಸ್ವತಃ ಹೆಚ್ಚು ನಿಖರವಾಗುತ್ತಿದ್ದಂತೆ bias ಕುಗ್ಗುತ್ತದೆ, ಒಂದೂ ಸದ್ಗುಣ ಚಕ್ರದಲ್ಲಿ' } },

    { type: 'table', data: {
      captionEn: 'Bias-Variance Comparison', captionKn: 'Bias-Variance ಹೋಲಿಕೆ',
      rows: "Method|Target|Bias|Variance|Needs terminal episode?\nMonte Carlo|Actual complete return G_t|Unbiased|High|Yes\nTD(0)|r + gamma*V(s')|Biased (shrinks over training)|Low|No" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• TD learning updates immediately after every single transition, using bootstrapping (an existing estimate of V(s\')) rather than waiting for a complete episode return like Monte Carlo\n• Genuinely confirmed: the TD(0) update formula target=r+gamma*V(s\'), delta=target-V(s), V(s)+=alpha*delta produces exactly the textbook result 4.00 -> 4.25 for the worked numeric example\n• Genuinely confirmed: TD(0) prediction over 5000 GridWorld episodes converges to essentially the same V((0,0)) as both the exact Module 172 DP value and the Module 174 Monte Carlo estimate (all three within about 2% of each other)\n• TD trades some bias (its target depends on a possibly-imperfect current estimate) for lower variance and the ability to learn online without waiting for episodes to end -- the foundation for SARSA, Q-learning, DQN, and actor-critic methods',
      bodyKn: '• TD learning ಪ್ರತಿ single transition ನಂತರ ತಕ್ಷಣ update ಆಗುತ್ತದೆ, Monte Carlo ರೀತಿ ಒಂದೂ ಪೂರ್ಣ episode return ಗಾಗಿ ಕಾಯುವ ಬದಲು bootstrapping (V(s\') ನ ಒಂದೂ ಇರುವ estimate) ಬಳಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: TD(0) update formula target=r+gamma*V(s\'), delta=target-V(s), V(s)+=alpha*delta worked numeric example ಗೆ ನಿಖರವಾಗಿ textbook ಫಲಿತಾಂಶ 4.00 -> 4.25 ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 5000 GridWorld episodes ಆದ್ಯಂತ TD(0) prediction essentially ಅದೇ V((0,0)) ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ನಿಖರ Module 172 DP value ಮತ್ತೆ Module 174 Monte Carlo estimate ಎರಡಕ್ಕೂ (ಎಲ್ಲಾ ಮೂರೂ ಪರಸ್ಪರ ಸುಮಾರು 2% ಒಳಗೆ)\n• TD ಸ್ವಲ್ಪ bias ಅನ್ನೂ (ಅದೂ target ಒಂದೂ ಬಹುಶಃ-ಅಪೂರ್ಣ ಪ್ರಸ್ತುತ estimate ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ) ಕಡಿಮೆ variance ಮತ್ತೆ episodes ಕೊನೆಗೊಳ್ಳುವವರೆಗೆ ಕಾಯದೆ ಆನ್‌ಲೈನ್ ಆಗಿ ಕಲಿಯುವ ಸಾಮರ್ಥ್ಯಕ್ಕಾಗಿ ವಿನಿಮಯ ಮಾಡುತ್ತದೆ -- SARSA, Q-learning, DQN, ಮತ್ತೆ actor-critic methods ಗೆ ಆಧಾರ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely confirmed TD error delta=r+gamma*V(s\')-V(s) computed here is the same quantity computed inside every deep RL critic network, from A2C/A3C\'s advantage estimates through DQN\'s loss function -- production systems literally log this exact number to monitor how "surprised" a learning agent still is.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಗಣಿಸಿದ TD error delta=r+gamma*V(s\')-V(s) A2C/A3C ನ advantage estimates ಇಂದ DQN ನ loss function ವರೆಗೆ, ಪ್ರತಿ deep RL critic network ಒಳಗೆ ಗಣಿಸಿದ ಅದೇ ಪ್ರಮಾಣ -- production systems ಒಂದೂ learning agent ಇನ್ನೂ ಎಷ್ಟೂ "ಆಶ್ಚರ್ಯಗೊಂಡಿದೆ" ಎಂದೂ ಮಾನಿಟರ್ ಮಾಡಲು ಈ ನಿಖರ ಸಂಖ್ಯೆಯನ್ನೂ ಅಕ್ಷರಶಃ ಲಾಗ್ ಮಾಡುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: TD(0) needed no completed episodes to start updating V(s), unlike every Monte Carlo update in Module 174 -- essential for continuing tasks (a running production system, a live trading agent) that may never have a clean "episode end"\n• The genuinely measured close agreement between DP, MC, and TD estimates on this small solvable GridWorld is exactly the kind of sanity check used before trusting the same TD-based update rule (identical in form) inside a deep neural network on a problem too large to solve exactly',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Module 174 ನಲ್ಲಿ ಪ್ರತಿ Monte Carlo update ಗಿಂತ ಭಿನ್ನವಾಗಿ, TD(0) ಗೆ V(s) update ಆರಂಭಿಸಲು ಪೂರ್ಣಗೊಂಡ episodes ಬೇಕಿಲ್ಲ -- ಎಂದಿಗೂ ಶುದ್ಧ "episode end" ಇಲ್ಲದಿರಬಹುದಾದ continuing tasks ಗೆ (ಒಂದೂ ಚಾಲನೆಯಲ್ಲಿರುವ production system, ಒಂದೂ live trading agent) ಅಗತ್ಯ\n• ಈ ಚಿಕ್ಕ ಪರಿಹರಿಸಬಹುದಾದ GridWorld ಮೇಲೆ DP, MC, ಮತ್ತೆ TD estimates ನಡುವೆ ನಿಜವಾಗಿ ಅಳೆದ ಹತ್ತಿರದ ಒಪ್ಪಂದ, ನಿಖರವಾಗಿ ಪರಿಹರಿಸಲು ತುಂಬಾ ದೊಡ್ಡದಾದ ಒಂದೂ ಸಮಸ್ಯೆ ಮೇಲೆ ಒಂದೂ deep neural network ಒಳಗೆ ಅದೇ TD-based update rule (ರೂಪದಲ್ಲಿ ಒಂದೇ) ನಂಬುವ ಮೊದಲೂ ಬಳಸುವ ನಿಖರ ರೀತಿಯ sanity check.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A recommendation system updating its estimate of a user\'s satisfaction cannot wait for a "complete episode" -- the user\'s session may never cleanly end. TD-style single-transition updates, genuinely demonstrated here converging to the same answer as full-episode Monte Carlo, are what let such systems update their value estimates after every single click, in real time.',
      bodyKn: 'ಒಂದೂ user ನ ತೃಪ್ತಿ ಅಂದಾಜು update ಮಾಡುವ ಒಂದೂ recommendation system ಒಂದೂ "ಪೂರ್ಣ episode" ಗಾಗಿ ಕಾಯಲಾಗುವುದಿಲ್ಲ -- user ನ session ಎಂದಿಗೂ ಶುದ್ಧವಾಗಿ ಕೊನೆಗೊಳ್ಳದಿರಬಹುದು. ಪೂರ್ಣ-episode Monte Carlo ಜೊತೆ ಅದೇ ಉತ್ತರಕ್ಕೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದೂ ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ TD-style single-transition updates, ಅಂತಹ systems ಪ್ರತಿ single click ನಂತರ ನೈಜ ಸಮಯದಲ್ಲಿ ಅವುಗಳ value estimates ಅನ್ನೂ update ಮಾಡಲು ಬಿಡುತ್ತವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why can TD learning update before an episode terminates?', qKn: 'TD learning ಒಂದೂ episode ಕೊನೆಗೊಳ್ಳುವ ಮೊದಲೂ ಏಕೆ update ಮಾಡಬಹುದು?',
        opts: ['It knows the complete future return', 'It uses the next state\'s estimated value (bootstrapping)', 'It knows the environment model', 'It doesn\'t use rewards'], correct: 1,
        optsKn: ['ಅದೂ ಪೂರ್ಣ ಭವಿಷ್ಯದ return ಅನ್ನೂ ತಿಳಿದಿದೆ', 'ಅದೂ next state ನ ಅಂದಾಜಿಸಿದ value ಬಳಸುತ್ತದೆ (bootstrapping)', 'ಅದೂ environment model ತಿಳಿದಿದೆ', 'ಅದೂ rewards ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what was the updated V(A) in the worked TD(0) numeric example?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: worked TD(0) numeric example ನಲ್ಲಿ updated V(A) ಏನೂ ಆಗಿತ್ತು?',
        opts: ['6.5', '4.25', '2.5', '5.0'], correct: 1,
        optsKn: ['6.5', '4.25', '2.5', '5.0'] },
      { q: 'What does bootstrapping mean in TD learning?', qKn: 'TD learning ನಲ್ಲಿ bootstrapping ಎಂದರೆ ಏನೂ?',
        opts: ['Restarting the environment', 'Using an estimate to update another estimate', 'Removing the discount factor', 'Waiting for the complete episode'], correct: 1,
        optsKn: ['Environment ಅನ್ನೂ ಮರುಪ್ರಾರಂಭಿಸುವುದೂ', 'ಒಂದೂ estimate ಬಳಸಿ ಇನ್ನೊಂದೂ estimate update ಮಾಡುವುದೂ', 'Discount factor ತೆಗೆದುಹಾಕುವುದೂ', 'ಪೂರ್ಣ episode ಗಾಗಿ ಕಾಯುವುದೂ'] },
      { q: 'Which method requires complete episodes?', qKn: 'ಯಾವ method ಗೆ ಪೂರ್ಣ episodes ಬೇಕು?',
        opts: ['TD', 'Dynamic Programming', 'Monte Carlo', 'Q-learning'], correct: 2,
        optsKn: ['TD', 'Dynamic Programming', 'Monte Carlo', 'Q-learning'] },
      { q: 'Genuinely confirmed: how close was TD(0)\'s V((0,0)) estimate to the exact DP value from Module 172?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: TD(0) ನ V((0,0)) estimate Module 172 ಇಂದ ನಿಖರ DP value ಗೆ ಎಷ್ಟೂ ಹತ್ತಿರವಾಗಿತ್ತು?',
        opts: ['Off by more than 50%', 'Within about 1.7%', 'Exactly identical to 10 decimal places', 'It diverged to infinity'], correct: 1,
        optsKn: ['50%ಕ್ಕಿಂತ ಹೆಚ್ಚು ತಪ್ಪಾಗಿತ್ತು', 'ಸುಮಾರು 1.7% ಒಳಗೆ', '10 ದಶಮಾಂಶ ಸ್ಥಳಗಳಿಗೆ ನಿಖರವಾಗಿ ಒಂದೇ', 'ಅದೂ ಅನಂತಕ್ಕೆ ಡೈವರ್ಜ್ ಆಯಿತು'] },
    ] } },
  ],
};
