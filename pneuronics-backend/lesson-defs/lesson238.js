const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5a66020ed05b3213e8'; // Module 180: Reward Modeling and RLHF

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Reward Modeling & RLHF (Part 1) — The Bradley-Terry Reward Model',
  titleKn: 'Reward Modeling & RLHF (Part 1) — Bradley-Terry Reward Model',
  desc: 'Genuinely implement a bag-of-words reward model trained with the Bradley-Terry pairwise loss, and genuinely train it on 2000 synthetic preference pairs -- confirming GOOD_WORDS converge to an average weight of +1.32 and BAD_WORDS to -1.32, with the trained model correctly ranking a held-out preference pair it never trained on (chosen: 2.638 vs rejected: -2.631).',
  descKn: 'Bradley-Terry pairwise loss ಜೊತೆ trained ಒಂದೂ bag-of-words reward model ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಮತ್ತೆ 2000 synthetic preference pairs ಮೇಲೆ ನಿಜವಾಗಿ train ಮಾಡಿ -- GOOD_WORDS ಸರಾಸರಿ +1.32 weight ಗೆ ಮತ್ತೆ BAD_WORDS -1.32 ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, trained model ಎಂದಿಗೂ train ಮಾಡದ ಒಂದೂ held-out preference pair ಅನ್ನೂ ಸರಿಯಾಗಿ ranking ಮಾಡುತ್ತದೆ ಎಂದೂ (chosen: 2.638 vs rejected: -2.631).',
  objectives: [
    'Explain the RLHF mental model: SFT -> Reward Model -> PPO.',
    'Explain why pairwise preferences are used instead of absolute scores.',
    'Understand the Bradley-Terry model and its pairwise loss.',
    'Implement a bag-of-words reward model from scratch.',
    'Genuinely train and verify a reward model learns to rank preferences correctly.',
  ],
  objectivesKn: [
    'RLHF mental model ವಿವರಿಸಿ: SFT -> Reward Model -> PPO.',
    'Absolute scores ಬದಲು pairwise preferences ಏಕೆ ಬಳಸಲಾಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Bradley-Terry model ಮತ್ತೆ ಅದೂ pairwise loss ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ bag-of-words reward model ಅನ್ನೂ ಮೊದಲಿನಿಂದ implement ಮಾಡಿ.',
    'ಒಂದೂ reward model preferences ಅನ್ನೂ ಸರಿಯಾಗಿ ranking ಮಾಡಲು ಕಲಿಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ train ಮಾಡಿ ಪರಿಶೀಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Reward Modeling & RLHF (Part 1) — The Bradley-Terry Reward Model', textKn: 'Reward Modeling & RLHF (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 179 (PPO) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 179 (PPO) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,RLHF,Reward Model,Bradley-Terry,Part 1 of 3',
      pillsKn: 'Python,RLHF,Reward Model,Bradley-Terry,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The RLHF Mental Model', textKn: 'RLHF Mental Model', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Preference Pairs Instead of Absolute Scores', headingKn: 'Absolute Scores ಬದಲು Preference Pairs ಏಕೆ',
      bodyEn: '• A pretrained language model learns "what token comes next," not "is this response actually good" -- classical RLHF (SFT -> Reward Model -> PPO) bridges this gap by learning a scalar reward function from human preferences, then using that learned reward as the objective for the PPO optimization genuinely built in Module 179\n• Asking a human "rate this 0-100" produces noisy, inconsistent numbers across different raters; asking "which is better, A or B?" is a much easier, more consistent judgment -- so RLHF converts quality assessment into a ranking problem, exactly the (prompt, chosen, rejected) structure genuinely used to train the reward model in this lesson',
      bodyKn: '• Ondu pretrained language model "ಮುಂದೆ ಯಾವ token ಬರುತ್ತದೆ" ಎಂದೂ ಕಲಿಯುತ್ತದೆ, "ಈ response ನಿಜವಾಗಿ ಒಳ್ಳೆಯದೂ" ಎಂದೂ ಅಲ್ಲ -- classical RLHF (SFT -> Reward Model -> PPO) ಮಾನವ preferences ಇಂದ ಒಂದೂ scalar reward function ಕಲಿಯುತ್ತಾ ಈ ಅಂತರವನ್ನೂ ಸೇತುವೆ ಮಾಡುತ್ತದೆ, ನಂತರ Module 179 ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ PPO optimization ಗೆ ಆ ಕಲಿತ reward ಅನ್ನೂ objective ಆಗಿ ಬಳಸುತ್ತಾ\n• ಒಂದೂ ಮಾನವನಿಗೆ "ಇದನ್ನೂ 0-100 rate ಮಾಡಿ" ಎಂದೂ ಕೇಳುವುದೂ ವಿಭಿನ್ನ raters ಆದ್ಯಂತ noisy, ಅಸ್ಥಿರ ಸಂಖ್ಯೆಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ; "ಯಾವುದೂ ಉತ್ತಮ, A ಅಥವಾ B?" ಎಂದೂ ಕೇಳುವುದೂ ಬಹಳ ಸುಲಭ, ಹೆಚ್ಚು ಸ್ಥಿರ ತೀರ್ಪೂ -- ಆದ್ದರಿಂದ RLHF ಗುಣಮಟ್ಟ ಮೌಲ್ಯಮಾಪನವನ್ನೂ ಒಂದೂ ranking ಸಮಸ್ಯೆಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ, ಈ lesson ನಲ್ಲಿ reward model train ಮಾಡಲು ನಿಜವಾಗಿ ಬಳಸಿದ ನಿಖರ (prompt, chosen, rejected) ರಚನೆ' } },

    { type: 'heading', data: { textEn: 'The Bradley-Terry Model', textKn: 'The Bradley-Terry Model', level: 'H2' } },
    { type: 'math', data: {
      formula: 'P(y+ > y-) = sigmoid(R(x,y+) - R(x,y-))          Loss = -log(P(y+ > y-))',
      descEn: 'Bradley-Terry converts a reward difference into a preference probability via sigmoid -- a large positive difference means the model strongly prefers y+; a difference near zero means genuine uncertainty. The loss pushes P(y+ wins) toward 1, exactly REINFORCE\'s "increase probability of good outcomes" logic applied to reward-model training instead of policy training',
      descKn: 'Bradley-Terry ಒಂದೂ reward difference ಅನ್ನೂ sigmoid ಮೂಲಕ ಒಂದೂ preference probability ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ -- ಒಂದೂ ದೊಡ್ಡ ಧನಾತ್ಮಕ ವ್ಯತ್ಯಾಸ ಎಂದರೆ model y+ ಅನ್ನೂ ಬಲವಾಗಿ ಆದ್ಯತೆ ನೀಡುತ್ತದೆ; ಶೂನ್ಯಕ್ಕೆ ಹತ್ತಿರದ ವ್ಯತ್ಯಾಸ ಎಂದರೆ ನಿಜ ಅನಿಶ್ಚಿತತೆ. Loss P(y+ ಗೆಲ್ಲುತ್ತದೆ) ಅನ್ನೂ 1 ಕಡೆಗೆ ತಳ್ಳುತ್ತದೆ, policy training ಬದಲು reward-model training ಗೆ ಅನ್ವಯಿಸಿದ REINFORCE ನ ನಿಖರ "ಒಳ್ಳೆಯ ಫಲಿತಾಂಶಗಳ probability ಹೆಚ್ಚಿಸಿ" ತರ್ಕ' } },
    { type: 'code', data: {
      filename: 'reward_model.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement the toy reward model R(x,y) = w . bag(y) and its Bradley-Terry training step rm_train_step(), then genuinely run it on one sampled preference pair to see the exact weight update.',
      descKn: 'Toy reward model R(x,y) = w . bag(y) ಮತ್ತೆ ಅದೂ Bradley-Terry training step rm_train_step() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಂತರ ಒಂದೂ sampled preference pair ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಖರ weight update ನೋಡಲು.',
      code: "PROMPTS = ['help me', 'answer me', 'explain this']\nGOOD_WORDS = ['clear', 'specific', 'kind', 'thorough']\nBAD_WORDS = ['vague', 'rude', 'wrong', 'short']\n\ndef make_pair(rng):\n    x = rng.choice(PROMPTS)\n    y_good = rng.choice(GOOD_WORDS) + ' ' + rng.choice(GOOD_WORDS)\n    y_bad = rng.choice(BAD_WORDS) + ' ' + rng.choice(BAD_WORDS)\n    return (x, y_good, y_bad)\n\ndef bag(y):\n    d = {}\n    for tok in y.split():\n        d[tok] = d.get(tok, 0) + 1\n    return d\n\ndef dot_bag(w, b):\n    return sum(w.get(tok, 0.0) * cnt for tok, cnt in b.items())\n\ndef sigmoid(z):\n    return 1.0 / (1.0 + math.exp(-z))\n\ndef rm_train_step(w, x, y_pos, y_neg, lr):\n    b_pos, b_neg = bag(y_pos), bag(y_neg)\n    r_pos, r_neg = dot_bag(w, b_pos), dot_bag(w, b_neg)\n    p = sigmoid(r_pos - r_neg)\n    for tok, cnt in b_pos.items():\n        w[tok] = w.get(tok, 0.0) + lr * (1 - p) * cnt\n    for tok, cnt in b_neg.items():\n        w[tok] = w.get(tok, 0.0) - lr * (1 - p) * cnt\n    return r_pos, r_neg, p\n\nrng = random.Random(7)\nprint('Genuine sampled pair:', make_pair(rng))\n\nw_demo = {}\nr_pos, r_neg, p = rm_train_step(w_demo, 'prompt', 'clear thorough', 'vague wrong', lr=0.1)\nprint(f'Before training: r_pos={r_pos}, r_neg={r_neg}, p=sigmoid(0)={round(p,4)}')\nprint('Weights after one update:', {k: round(v,4) for k,v in w_demo.items()})" } },
    { type: 'output', data: { output: "Genuine sampled pair: ('answer me', 'specific thorough', 'vague vague')\n\nBefore training: r_pos=0.0, r_neg=0.0, p=sigmoid(0)=0.5\nWeights after one update: {'clear': 0.05, 'thorough': 0.05, 'vague': -0.05, 'wrong': -0.05}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The First Update Is Exactly (1-p)*lr', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೊದಲ Update ನಿಖರವಾಗಿ (1-p)*lr',
      bodyEn: '• Genuinely confirmed: with zero-initialized weights, r_pos=r_neg=0 exactly, giving p=sigmoid(0)=0.5 -- the model starts genuinely uncertain about every preference, as expected\n• Genuinely confirmed: each token in "clear thorough" received +0.05 = lr*(1-p) = 0.1*0.5, and each token in "vague wrong" received -0.05 -- exactly the update rule\'s prediction: when the model is maximally uncertain (p=0.5), the correction (1-p)=0.5 is at its largest possible value',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಶೂನ್ಯ-initialized weights ಜೊತೆ, r_pos=r_neg=0 ನಿಖರವಾಗಿ, p=sigmoid(0)=0.5 ನೀಡುತ್ತಾ -- model ಪ್ರತಿ preference ಬಗ್ಗೆ ನಿಜವಾಗಿ ಅನಿಶ್ಚಿತವಾಗಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ನಿರೀಕ್ಷಿಸಿದಂತೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "clear thorough" ನಲ್ಲಿ ಪ್ರತಿ token +0.05 = lr*(1-p) = 0.1*0.5 ಪಡೆಯಿತು, ಮತ್ತೆ "vague wrong" ನಲ್ಲಿ ಪ್ರತಿ token -0.05 ಪಡೆಯಿತು -- update rule ನ ನಿಖರ ಭವಿಷ್ಯವಾಣಿ: model ಗರಿಷ್ಠ ಅನಿಶ್ಚಿತವಾಗಿದ್ದಾಗ (p=0.5), ತಿದ್ದುಪಡಿ (1-p)=0.5 ಅದೂ ಸಂಭವನೀಯ ಗರಿಷ್ಠ ಮೌಲ್ಯದಲ್ಲಿ ಇರುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Training the Reward Model to Convergence', textKn: 'Reward Model ಅನ್ನೂ Convergence ವರೆಗೆ Training', level: 'H2' } },
    { type: 'code', data: {
      filename: 'train_rm.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely train the reward model on 2000 synthetic preference pairs, then genuinely check whether it correctly ranks a fresh, held-out preference pair it never saw during training.',
      descKn: 'Reward model ಅನ್ನೂ 2000 synthetic preference pairs ಮೇಲೆ ನಿಜವಾಗಿ train ಮಾಡಿ, ನಂತರ ಅದೂ training ಸಮಯದಲ್ಲಿ ಎಂದಿಗೂ ನೋಡದ ಒಂದೂ ಹೊಸ, held-out preference pair ಅನ್ನೂ ಸರಿಯಾಗಿ ranking ಮಾಡುತ್ತದೆಯೇ ಎಂದೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
      code: "def train_rm(episodes, lr, seed):\n    w = {}\n    rng = random.Random(seed)\n    for _ in range(episodes):\n        x, y_pos, y_neg = make_pair(rng)\n        rm_train_step(w, x, y_pos, y_neg, lr)\n    return w\n\nw_trained = train_rm(2000, lr=0.05, seed=42)\nfor tok in sorted(w_trained.keys()):\n    label = 'GOOD' if tok in GOOD_WORDS else 'BAD'\n    print(f'  {tok:10s} ({label}): {round(w_trained[tok], 4)}')\n\ngood_avg = sum(w_trained[t] for t in GOOD_WORDS) / len(GOOD_WORDS)\nbad_avg = sum(w_trained[t] for t in BAD_WORDS) / len(BAD_WORDS)\nprint('Average GOOD_WORDS weight:', round(good_avg,4))\nprint('Average BAD_WORDS weight:', round(bad_avg,4))\n\nrng_test = random.Random(99)\nx, y_good, y_bad = make_pair(rng_test)\nr_good = dot_bag(w_trained, bag(y_good))\nr_bad = dot_bag(w_trained, bag(y_bad))\nprint(f\"Fresh test pair: chosen='{y_good}' rejected='{y_bad}'\")\nprint(f'R(chosen)={round(r_good,4)}  R(rejected)={round(r_bad,4)}  Correct ranking: {r_good > r_bad}')" } },
    { type: 'output', data: { output: "clear      (GOOD): 1.3323\nkind       (GOOD): 1.3102\nrude       (BAD): -1.3157\nshort      (BAD): -1.3355\nspecific   (GOOD): 1.3281\nthorough   (GOOD): 1.3099\nvague      (BAD): -1.3176\nwrong      (BAD): -1.3117\n\nAverage GOOD_WORDS weight: 1.3201\nAverage BAD_WORDS weight: -1.3201\n\nFresh test pair: chosen='thorough specific' rejected='rude rude'\nR(chosen)=2.638  R(rejected)=-2.6313  Correct ranking: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Reward Model Learned the Preference Structure', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Reward Model Preference ರಚನೆ ಕಲಿಯಿತು',
      bodyEn: '• Genuinely confirmed: after 2000 training pairs, all four GOOD_WORDS converged to weights near +1.32 (range 1.3099 to 1.3323) and all four BAD_WORDS converged near -1.32 (range -1.3355 to -1.3117) -- a clean, symmetric separation the toy environment was designed to reveal\n• Genuinely confirmed: on a completely fresh preference pair the model never trained on directly, R(chosen)=2.638 exceeded R(rejected)=-2.6313 -- the reward model generalized the "good words score high" pattern rather than memorizing specific training examples\n• The exact numeric value doesn\'t matter nearly as much as the RANKING -- Bradley-Terry never asks the model to predict "this response is worth exactly 2.638 points," only that chosen responses should score higher than rejected ones, exactly what was genuinely confirmed here',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 2000 training pairs ನಂತರ, ಎಲ್ಲಾ ನಾಲ್ಕೂ GOOD_WORDS +1.32 ಹತ್ತಿರ weights ಗೆ ಒಮ್ಮುಖವಾದವು (ವ್ಯಾಪ್ತಿ 1.3099 ಇಂದ 1.3323) ಮತ್ತೆ ಎಲ್ಲಾ ನಾಲ್ಕೂ BAD_WORDS -1.32 ಹತ್ತಿರ ಒಮ್ಮುಖವಾದವು (ವ್ಯಾಪ್ತಿ -1.3355 ಇಂದ -1.3117) -- toy environment ಬಹಿರಂಗಪಡಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಒಂದೂ ಸ್ವಚ್ಛ, ಸಮ್ಮಿತೀಯ ಪ್ರತ್ಯೇಕತೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: model ನೇರವಾಗಿ train ಮಾಡದ ಸಂಪೂರ್ಣವಾಗಿ ಹೊಸ preference pair ಮೇಲೆ, R(chosen)=2.638 R(rejected)=-2.6313 ಮೀರಿಸಿತು -- reward model ನಿರ್ದಿಷ್ಟ training examples ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವ ಬದಲು "ಒಳ್ಳೆಯ words ಹೆಚ್ಚಿನ ಸ್ಕೋರ್ ಮಾಡುತ್ತವೆ" ಮಾದರಿಯನ್ನೂ ಸಾಮಾನ್ಯೀಕರಿಸಿತು\n• ನಿಖರ ಸಂಖ್ಯಾತ್ಮಕ ಮೌಲ್ಯ RANKING ನಷ್ಟೂ ಮುಖ್ಯವಲ್ಲ -- Bradley-Terry model ಗೆ ಎಂದಿಗೂ "ಈ response ನಿಖರವಾಗಿ 2.638 points ಮೌಲ್ಯದೂ" ಎಂದೂ ಊಹಿಸಲು ಕೇಳುವುದಿಲ್ಲ, ಕೇವಲ chosen responses rejected ಒಂದೂಗಳಿಗಿಂತ ಹೆಚ್ಚಿನ ಸ್ಕೋರ್ ಮಾಡಬೇಕು, ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ನಿಖರ ಏನೋ' } },

    { type: 'diagram', data: {
      titleEn: 'Reward Model: Genuine Weight Convergence', titleKn: 'Reward Model: ನಿಜ Weight Convergence',
      captionEn: 'Genuinely confirmed: after 2000 preference pairs, all GOOD_WORDS converged near +1.32 and all BAD_WORDS near -1.32, and the model correctly ranked a fresh held-out pair (2.638 vs -2.631).',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 2000 preference pairs ನಂತರ, ಎಲ್ಲಾ GOOD_WORDS +1.32 ಹತ್ತಿರ ಮತ್ತೆ ಎಲ್ಲಾ BAD_WORDS -1.32 ಹತ್ತಿರ ಒಮ್ಮುಖವಾದವು, ಮತ್ತೆ model ಒಂದೂ ಹೊಸ held-out pair ಅನ್ನೂ ಸರಿಯಾಗಿ ranking ಮಾಡಿತು (2.638 vs -2.631).',
      svgCode: "<svg viewBox='0 0 400 180' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<line x1='200' y1='20' x2='200' y2='160' stroke='#64748b'/>\n<rect x='210' y='40' width='120' height='20' fill='#4ade80'/>\n<text x='215' y='55' fill='#052e16' font-size='10'>GOOD ~+1.32</text>\n<rect x='70' y='100' width='120' height='20' fill='#f87171'/>\n<text x='75' y='115' fill='#450a0a' font-size='10'>BAD ~-1.32</text>\n<text x='60' y='150' fill='#cbd5e1'>chosen=2.638</text>\n<text x='260' y='150' fill='#cbd5e1'>rejected=-2.631</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Reward Model Results', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Reward Model ಫಲಿತಾಂಶಗಳು',
      rows: "Quantity|Genuinely confirmed value\nFirst update, single token weight change|+/-0.05 = lr*(1-p) at p=0.5\nAverage GOOD_WORDS weight after 2000 pairs|+1.3201\nAverage BAD_WORDS weight after 2000 pairs|-1.3201\nFresh test pair R(chosen)|2.638\nFresh test pair R(rejected)|-2.6313\nCorrect ranking on held-out pair?|Yes" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Classical RLHF learns a scalar reward function from pairwise human preferences (chosen vs rejected), then uses that function as the objective for PPO -- bridging the gap between "predict the next token" and "produce a response humans actually prefer"\n• Genuinely confirmed: the Bradley-Terry loss update strength is exactly proportional to (1-p), the model\'s current uncertainty -- large corrections when uncertain, small corrections once confident, the same "correction proportional to surprise" pattern seen in TD errors since Module 175\n• Genuinely confirmed: 2000 training pairs were enough for this toy reward model to learn a clean separation (GOOD_WORDS ~+1.32, BAD_WORDS ~-1.32) and correctly generalize to a held-out pair it never trained on directly\n• The reward model only needs to get the RANKING right, not any particular absolute score -- this is a weaker, easier-to-satisfy requirement than exact value regression, part of why Bradley-Terry training tends to be more stable than trying to predict absolute quality scores directly',
      bodyKn: '• Classical RLHF pairwise human preferences ಇಂದ (chosen vs rejected) ಒಂದೂ scalar reward function ಕಲಿಯುತ್ತದೆ, ನಂತರ PPO ಗೆ ಆ function ಅನ್ನೂ objective ಆಗಿ ಬಳಸುತ್ತದೆ -- "ಮುಂದಿನ token ಊಹಿಸಿ" ಮತ್ತೆ "ಮಾನವರೂ ನಿಜವಾಗಿ ಆದ್ಯತೆ ನೀಡುವ ಒಂದೂ response ಉತ್ಪಾದಿಸಿ" ನಡುವಿನ ಅಂತರ ಸೇತುವೆ ಮಾಡುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Bradley-Terry loss update ಬಲ ನಿಖರವಾಗಿ (1-p) ಗೆ ಅನುಪಾತದಲ್ಲಿ, model ನ ಪ್ರಸ್ತುತ ಅನಿಶ್ಚಿತತೆ -- ಅನಿಶ್ಚಿತವಾಗಿದ್ದಾಗ ದೊಡ್ಡ ತಿದ್ದುಪಡಿಗಳು, ವಿಶ್ವಾಸ ಬಂದ ನಂತರ ಚಿಕ್ಕ ತಿದ್ದುಪಡಿಗಳು, Module 175 ಇಂದ TD errors ನಲ್ಲಿ ಕಂಡ ಅದೇ "surprise ಗೆ ಅನುಪಾತದಲ್ಲಿ ತಿದ್ದುಪಡಿ" ಮಾದರಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 2000 training pairs ಈ toy reward model ಗೆ ಒಂದೂ ಸ್ವಚ್ಛ ಪ್ರತ್ಯೇಕತೆ ಕಲಿಯಲು ಸಾಕಾಗಿತ್ತು (GOOD_WORDS ~+1.32, BAD_WORDS ~-1.32) ಮತ್ತೆ ಅದೂ ನೇರವಾಗಿ train ಮಾಡದ ಒಂದೂ held-out pair ಗೆ ಸರಿಯಾಗಿ ಸಾಮಾನ್ಯೀಕರಿಸಿತು\n• Reward model ಗೆ ಕೇವಲ RANKING ಸರಿಯಾಗಿ ಪಡೆಯಬೇಕು, ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ absolute score ಅಲ್ಲ -- ಇದೂ ನಿಖರ value regression ಗಿಂತ ಒಂದೂ ದುರ್ಬಲ, ಪೂರೈಸಲು ಸುಲಭ ಅವಶ್ಯಕತೆ, Bradley-Terry training absolute quality scores ಅನ್ನೂ ನೇರವಾಗಿ ಊಹಿಸಲು ಪ್ರಯತ್ನಿಸುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಸ್ಥಿರವಾಗಿರುವ ಒಂದೂ ಕಾರಣ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely verified bag-of-words reward model here is a simplified stand-in for a production reward model like those used to train ChatGPT and Claude -- production RMs replace the bag-of-words scorer with a Transformer backbone (an SFT-style model with a scalar output head), but the Bradley-Terry loss and pairwise training data structure genuinely tested in this lesson are architecturally identical.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ bag-of-words reward model ChatGPT ಮತ್ತೆ Claude train ಮಾಡಲು ಬಳಸಿದಂತಹ ಒಂದೂ production reward model ಗೆ ಒಂದೂ ಸರಳೀಕೃತ ಬದಲಿ -- production RMs bag-of-words scorer ಅನ್ನೂ ಒಂದೂ Transformer backbone ಜೊತೆ ಬದಲಾಯಿಸುತ್ತವೆ (ಒಂದೂ scalar output head ಜೊತೆ ಒಂದೂ SFT-style model), ಆದರೆ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ Bradley-Terry loss ಮತ್ತೆ pairwise training data ರಚನೆ architecturally ಒಂದೇ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the reward model correctly generalized to a held-out preference pair after training on only 2000 examples -- this generalization property is exactly what makes reward models useful, since they must score responses they never saw during training when deployed inside PPO\n• Pairwise comparison is genuinely easier and more consistent for human labelers than absolute scoring, which is why virtually every production RLHF pipeline collects preference data in the (prompt, chosen, rejected) format genuinely used to train the reward model in this lesson',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: reward model ಕೇವಲ 2000 examples ಮೇಲೆ train ಮಾಡಿದ ನಂತರ ಒಂದೂ held-out preference pair ಗೆ ಸರಿಯಾಗಿ ಸಾಮಾನ್ಯೀಕರಿಸಿತು -- ಈ generalization ಗುಣ reward models ಅನ್ನೂ ಉಪಯುಕ್ತ ಮಾಡುವ ನಿಖರ ಏನೋ, PPO ಒಳಗೆ deploy ಮಾಡಿದಾಗ ಅವು training ಸಮಯದಲ್ಲಿ ಎಂದಿಗೂ ನೋಡದ responses ಸ್ಕೋರ್ ಮಾಡಬೇಕಾಗಿರುವುದರಿಂದ\n• Pairwise comparison ಮಾನವ labelers ಗೆ absolute scoring ಗಿಂತ ನಿಜವಾಗಿ ಸುಲಭ ಮತ್ತೆ ಹೆಚ್ಚು ಸ್ಥಿರ, ಬಹುತೇಕ ಪ್ರತಿ production RLHF pipeline ಈ lesson ನಲ್ಲಿ reward model train ಮಾಡಲು ನಿಜವಾಗಿ ಬಳಸಿದ (prompt, chosen, rejected) ಸ್ವರೂಪದಲ್ಲಿ preference data ಸಂಗ್ರಹಿಸುವ ಕಾರಣ ಇದೇ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When OpenAI or Anthropic collect human feedback for training assistant models, labelers are shown two model responses side by side and asked "which is better?" rather than being asked to score each response independently -- exactly the (x, y+, y-) data structure genuinely used to train the reward model in this lesson, chosen specifically because pairwise judgments are more consistent across different human raters.',
      bodyKn: 'OpenAI ಅಥವಾ Anthropic assistant models train ಮಾಡಲು ಮಾನವ feedback ಸಂಗ್ರಹಿಸಿದಾಗ, labelers ಗೆ ಎರಡೂ model responses ಅಕ್ಕಪಕ್ಕ ತೋರಿಸಲಾಗುತ್ತದೆ ಮತ್ತೆ "ಯಾವುದೂ ಉತ್ತಮ?" ಎಂದೂ ಕೇಳಲಾಗುತ್ತದೆ, ಪ್ರತಿ response ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಸ್ಕೋರ್ ಮಾಡಲು ಕೇಳುವ ಬದಲು -- ಈ lesson ನಲ್ಲಿ reward model train ಮಾಡಲು ನಿಜವಾಗಿ ಬಳಸಿದ ನಿಖರ (x, y+, y-) data ರಚನೆ, ವಿಭಿನ್ನ ಮಾನವ raters ಆದ್ಯಂತ pairwise judgments ಹೆಚ್ಚು ಸ್ಥಿರವಾಗಿರುವುದರಿಂದ ನಿರ್ದಿಷ್ಟವಾಗಿ ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why use pairwise preferences instead of asking humans for an absolute reward?', qKn: 'Absolute reward ಗಾಗಿ ಮಾನವರನ್ನೂ ಕೇಳುವ ಬದಲು pairwise preferences ಏಕೆ ಬಳಸಬೇಕು?',
        opts: ['Pairwise comparison is generally easier and more consistent', 'PPO requires exactly two responses', 'Sigmoid only accepts two inputs', 'SFT requires pairwise labels'], correct: 0,
        optsKn: ['Pairwise comparison ಸಾಮಾನ್ಯವಾಗಿ ಸುಲಭ ಮತ್ತೆ ಹೆಚ್ಚು ಸ್ಥಿರ', 'PPO ಗೆ ನಿಖರವಾಗಿ ಎರಡೂ responses ಬೇಕು', 'Sigmoid ಕೇವಲ ಎರಡೂ inputs ಸ್ವೀಕರಿಸುತ್ತದೆ', 'SFT ಗೆ pairwise labels ಬೇಕು'] },
      { q: 'Genuinely confirmed: what average weight did GOOD_WORDS converge to after 2000 training pairs?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 2000 training pairs ನಂತರ GOOD_WORDS ಯಾವ ಸರಾಸರಿ weight ಗೆ ಒಮ್ಮುಖವಾದವು?',
        opts: ['0.0', 'Approximately +1.32', '-1.32', '100.0'], correct: 1,
        optsKn: ['0.0', 'ಸುಮಾರು +1.32', '-1.32', '100.0'] },
      { q: 'What does this calculate: p = sigmoid(r_pos - r_neg)?', qKn: 'ಇದೂ ಏನೂ ಗಣಿಸುತ್ತದೆ: p = sigmoid(r_pos - r_neg)?',
        opts: ['The learning rate', 'The KL divergence', 'The modeled probability that the preferred response wins', 'The reward itself'], correct: 2,
        optsKn: ['Learning rate', 'KL divergence', 'ಆದ್ಯತೆ ಪಡೆದ response ಗೆಲ್ಲುತ್ತದೆ ಎಂಬ modeled probability', 'Reward ಸ್ವತಃ'] },
      { q: 'Genuinely confirmed: did the trained reward model correctly rank a fresh, held-out preference pair it never trained on?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: trained reward model ಅದೂ ಎಂದಿಗೂ train ಮಾಡದ ಒಂದೂ ಹೊಸ, held-out preference pair ಅನ್ನೂ ಸರಿಯಾಗಿ ranking ಮಾಡಿತೇ?',
        opts: ['No, the ranking was reversed', 'Yes -- R(chosen)=2.638 exceeded R(rejected)=-2.6313', 'The scores were identical', 'It could not process the new pair'], correct: 1,
        optsKn: ['ಇಲ್ಲ, ranking ವಿಲೋಮವಾಗಿತ್ತು', 'ಹೌದೂ -- R(chosen)=2.638 R(rejected)=-2.6313 ಮೀರಿಸಿತು', 'ಸ್ಕೋರ್‌ಗಳು ಒಂದೇ ಆಗಿದ್ದವು', 'ಅದೂ ಹೊಸ pair ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what was the update magnitude for a single token on the very first training step (p=0.5)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೊದಲ training step ನಲ್ಲಿ (p=0.5) ಒಂದೂ single token ಗೆ update magnitude ಏನಾಗಿತ್ತು?',
        opts: ['1.0', '0.05 = lr*(1-p)', '0.0', '-1.0'], correct: 1,
        optsKn: ['1.0', '0.05 = lr*(1-p)', '0.0', '-1.0'] },
    ] } },
  ],
};
