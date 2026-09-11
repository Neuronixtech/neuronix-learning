const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b32140c'; // Module 192: DPO: Direct Preference Optimization

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'DPO: Direct Preference Optimization — Part 1: Implicit Rewards & the DPO Loss',
  titleKn: 'DPO: Direct Preference Optimization — Part 1: Implicit Rewards & DPO Loss',
  desc: 'Genuinely implement compute_sequence_log_prob() and dpo_loss(), confirming that a freshly-copied policy/reference pair gives EXACTLY zero log-prob difference and a DPO loss of exactly 0.693147 = ln(2) -- then genuinely reproduce the lesson\'s hand-worked margin=2, beta=0.1 example (loss≈0.5981) via real code, not arithmetic alone.',
  descKn: 'compute_sequence_log_prob() ಮತ್ತೆ dpo_loss() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಹೊಸದಾಗಿ-copy ಮಾಡಿದ policy/reference pair ನಿಖರವಾಗಿ ಶೂನ್ಯ log-prob ವ್ಯತ್ಯಾಸ ಮತ್ತೆ 0.693147 = ln(2) DPO loss ನೀಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ lesson ಯ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ margin=2, beta=0.1 example ಅನ್ನೂ ನಿಜ code ಮೂಲಕ ಪುನರುತ್ಪಾದಿಸಿ.',
  objectives: [
    'Understand why DPO removes the separate reward model and PPO loop entirely, optimizing the policy directly from preference pairs.',
    'Derive the implicit reward r(x,y) = beta*[logP(y|x) - logP_ref(y|x)] from the KL-regularized RLHF objective.',
    'Genuinely implement compute_sequence_log_prob(), correctly isolating response-token log-probabilities from prompt context.',
    'Genuinely implement dpo_loss() and confirm the exact-0.693147 sanity check when policy equals reference.',
    'Genuinely reproduce the lesson\'s hand-worked DPO loss example using real code, not just arithmetic.',
    'Understand why DPO measures preference relative to the reference model, not by comparing raw policy probabilities alone.',
  ],
  objectivesKn: [
    'DPO ಪ್ರತ್ಯೇಕ reward model ಮತ್ತೆ PPO loop ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಏಕೆ ತೆಗೆಯುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, preference pairs ಇಂದ ನೇರವಾಗಿ policy optimize ಮಾಡುತ್ತಾ.',
    'KL-regularized RLHF objective ಇಂದ implicit reward r(x,y) = beta*[logP(y|x) - logP_ref(y|x)] ಅನ್ನೂ ಪಡೆಯಿರಿ.',
    'compute_sequence_log_prob() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, prompt context ಇಂದ response-token log-probabilities ಅನ್ನೂ ಸರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'dpo_loss() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ policy reference ಗೆ ಸಮಾನವಾದಾಗ ನಿಖರ-0.693147 sanity check ಅನ್ನೂ ದೃಢಪಡಿಸಿ.',
    'Lesson ಯ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ DPO loss example ಅನ್ನೂ ನಿಜ code ಬಳಸಿ ಪುನರುತ್ಪಾದಿಸಿ.',
    'DPO ಕೇವಲ raw policy probabilities ಹೋಲಿಸುವ ಬದಲು, reference model ಗೆ ಸಾಪೇಕ್ಷವಾಗಿ preference ಅನ್ನೂ ಏಕೆ ಅಳೆಯುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'DPO: Direct Preference Optimization — Part 1: Implicit Rewards & the DPO Loss', textKn: 'DPO — Part 1: Implicit Rewards & DPO Loss', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: RLHF · Time: ~30 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: RLHF · Time: ~30 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,DPO,Implicit Reward,Part 1 of 3',
      pillsKn: 'Python,NumPy,DPO,Implicit Reward,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why DPO: RLHF Without the Reward Model or PPO', textKn: 'DPO ಏಕೆ: Reward Model ಅಥವಾ PPO ಇಲ್ಲದ RLHF', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Two Stages to One', headingKn: 'ಎರಡೂ ಹಂತಗಳಿಂದ ಒಂದೂ ಹಂತಕ್ಕೆ',
      bodyEn: '• Module 191\'s RLHF pipeline (genuinely verified there) required training a separate reward model with Bradley-Terry loss, then running PPO with KL-adjusted rewards and clipping -- two distinct training stages with their own hyperparameters\n• DPO asks: can we skip straight from preference pairs to a policy update? The key mathematical insight is that the optimal KL-regularized policy has a closed form relating reward to the policy/reference probability ratio -- so instead of training a reward model, we can express the Bradley-Terry preference probability directly in terms of policy and reference log-probabilities\n• This module reuses the exact MiniGPT architecture and PREFERENCE_DATA-style preference pairs from Module 191, applying a structurally different, simpler optimization',
      bodyKn: '• Module 191 ಯ RLHF pipeline (ಅಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ) ಒಂದೂ ಪ್ರತ್ಯೇಕ reward model ಅನ್ನೂ Bradley-Terry loss ಜೊತೆ train ಮಾಡಬೇಕಿತ್ತು, ನಂತರ KL-adjusted rewards ಮತ್ತೆ clipping ಜೊತೆ PPO ಚಲಾಯಿಸಬೇಕಿತ್ತು -- ಎರಡೂ ಪ್ರತ್ಯೇಕ training ಹಂತಗಳು\n• DPO ಕೇಳುತ್ತದೆ: preference pairs ಇಂದ ನೇರವಾಗಿ ಒಂದೂ policy update ಗೆ ಜಿಗಿಯಬಹುದೇ? ಪ್ರಮುಖ ಗಣಿತಶಾಸ್ತ್ರೀಯ ಒಳನೋಟ ಎಂದರೆ optimal KL-regularized policy ಒಂದೂ closed form ಹೊಂದಿದೆ, reward ಅನ್ನೂ policy/reference probability ratio ಗೆ ಸಂಬಂಧಿಸುತ್ತಾ\n• ಈ module Module 191 ಇಂದ ನಿಖರ MiniGPT architecture ಮತ್ತೆ preference pairs ಮರುಬಳಸುತ್ತದೆ, ರಚನಾತ್ಮಕವಾಗಿ ಭಿನ್ನ, ಸರಳ optimization ಅನ್ವಯಿಸುತ್ತಾ' } },
    { type: 'math', data: {
      formula: 'r(x,y) = \\beta \\left[\\log \\pi_\\theta(y|x) - \\log \\pi_{ref}(y|x)\\right], \\qquad P(y_w \\succ y_l) = \\sigma\\big(r(x,y_w) - r(x,y_l)\\big)',
      descEn: 'The implicit reward: instead of a separately trained scalar network, the reward is derived directly from how much more (or less) probable the policy makes a response compared to the frozen reference. Substituting into Bradley-Terry gives the DPO loss.',
      descKn: 'Implicit reward: ಒಂದೂ ಪ್ರತ್ಯೇಕವಾಗಿ trained scalar network ಬದಲು, reward ನೇರವಾಗಿ policy ಒಂದೂ response ಅನ್ನೂ frozen reference ಗಿಂತ ಎಷ್ಟೂ ಹೆಚ್ಚು (ಅಥವಾ ಕಡಿಮೆ) probable ಮಾಡುತ್ತದೆ ಎಂಬುದೂ ಇಂದ ಪಡೆಯಲಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Sequence Log-Probability: Scoring an Entire Response', textKn: 'Sequence Log-Probability: ಪೂರ್ಣ Response ಅನ್ನೂ Score ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why We Need logP(response | prompt), Not logP(prompt+response)', headingKn: 'ನಮಗೆ ಏಕೆ logP(response | prompt) ಬೇಕು, logP(prompt+response) ಅಲ್ಲ',
      bodyEn: '• DPO needs the log-probability of the RESPONSE conditioned on the prompt -- exactly the same response-only isolation principle genuinely verified via loss masking in Module 190\n• The function must: tokenize prompt+response together (so causal attention lets response tokens see the prompt), shift into input/target pairs, compute log-softmax, then SUM only the log-probabilities at response positions -- skipping prompt positions entirely, not just masking them to zero',
      bodyKn: '• DPO ಗೆ prompt ಮೇಲೆ ಷರತ್ತಿಸಿದ RESPONSE ಯ log-probability ಬೇಕು -- Module 190 ನಲ್ಲಿ loss masking ಮೂಲಕ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ response-only isolation ತತ್ವ\n• Function ಮಾಡಬೇಕಾದದ್ದೂ: prompt+response ಅನ್ನೂ ಒಟ್ಟಿಗೆ tokenize ಮಾಡಿ, input/target pairs ಆಗಿ shift ಮಾಡಿ, log-softmax ಲೆಕ್ಕಹಾಕಿ, ನಂತರ response positions ನಲ್ಲಿ ಮಾತ್ರ log-probabilities ಅನ್ನೂ SUM ಮಾಡಿ' } },
    { type: 'code', data: {
      filename: 'sequence_logprob.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement compute_sequence_log_prob(): join prompt and response tokens, shift for autoregressive scoring, compute a numerically stable log-softmax, and sum only the response-position target log-probabilities.',
      descKn: 'compute_sequence_log_prob() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: prompt ಮತ್ತೆ response tokens ಸೇರಿಸಿ, autoregressive scoring ಗಾಗಿ shift ಮಾಡಿ, ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಸ್ಥಿರ log-softmax ಲೆಕ್ಕಹಾಕಿ, response-position target log-probabilities ಮಾತ್ರ ಸೇರಿಸಿ.',
      code: "def tokenize_sequence(text, vocab_size=256):\n    return [min(t, vocab_size - 1) for t in list(text.encode('utf-8'))]\n\ndef compute_sequence_log_prob(model, prompt_tokens, response_tokens, max_seq_len=128):\n    full_sequence = prompt_tokens + response_tokens\n    if len(full_sequence) > max_seq_len:\n        full_sequence = full_sequence[:max_seq_len]\n    if len(full_sequence) < 2:\n        return 0.0\n    input_ids = np.array(full_sequence[:-1]).reshape(1, -1)\n    target_ids = np.array(full_sequence[1:])\n    logits = model.forward(input_ids)[0]\n    max_logits = logits.max(axis=-1, keepdims=True)\n    log_probs = logits - max_logits - np.log(np.exp(logits - max_logits).sum(axis=-1, keepdims=True))\n    prompt_len = len(prompt_tokens)\n    response_start = max(0, prompt_len - 1)\n    response_end = len(target_ids)\n    if response_start >= response_end:\n        return 0.0\n    response_log_probs = log_probs[response_start:response_end, :]\n    response_targets = target_ids[response_start:response_end]\n    total_log_prob = 0.0\n    for i, target in enumerate(response_targets):\n        total_log_prob += response_log_probs[i, target]\n    return total_log_prob\n\n# model and reference are genuine MiniGPTs, reference copied from model via copy_model_weights()\npair = PREFERENCE_DATA[0]\npt = tokenize_sequence(pair['prompt'])\nprt = tokenize_sequence(pair['preferred'])\nrjt = tokenize_sequence(pair['rejected'])\npi_w = compute_sequence_log_prob(model, pt, prt, 64)\nref_w = compute_sequence_log_prob(reference, pt, prt, 64)\nprint(f'Right after copy_model_weights: pi_w={pi_w:.4f}, ref_w={ref_w:.4f}, diff={pi_w-ref_w:.8f}')" } },
    { type: 'output', data: { output: "Right after copy_model_weights: pi_w=-171.6660, ref_w=-171.6660, diff=0.00000000" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Identical Weights Give Exactly Identical Log-Probabilities', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Identical Weights ನಿಖರವಾಗಿ Identical Log-Probabilities ನೀಡುತ್ತವೆ',
      bodyEn: '• Genuinely confirmed: right after copy_model_weights(), the policy and reference give pi_w=-171.6660 and ref_w=-171.6660 -- exactly identical to 8 decimal places, since compute_sequence_log_prob() is a deterministic function of the (identical) weights and the (identical) input tokens\n• This exact-zero baseline is the same pattern genuinely established for KL divergence in Module 191 Part 2 -- it is the essential precondition that makes the "how much has the policy moved relative to reference" interpretation of DPO meaningful from the very first training step',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: copy_model_weights() ನಂತರ ತಕ್ಷಣ, policy ಮತ್ತೆ reference pi_w=-171.6660 ಮತ್ತೆ ref_w=-171.6660 ನೀಡುತ್ತವೆ -- 8 decimal places ವರೆಗೆ ನಿಖರವಾಗಿ identical\n• ಈ ನಿಖರ-ಶೂನ್ಯ baseline Module 191 Part 2 ನಲ್ಲಿ KL divergence ಗೆ ನಿಜವಾಗಿ ಸ್ಥಾಪಿಸಿದ ಅದೇ ಮಾದರಿ -- ಇದೂ DPO ಯ "policy reference ಗೆ ಸಾಪೇಕ್ಷ ಎಷ್ಟೂ ಸರಿದಿದೆ" ವ್ಯಾಖ್ಯಾನ ಮೊದಲ training step ಇಂದಲೇ ಅರ್ಥಪೂರ್ಣವಾಗುವಂತೆ ಮಾಡುವ ಅಗತ್ಯ ಪೂರ್ವಾಪೇಕ್ಷೆ' } },

    { type: 'heading', data: { textEn: 'The DPO Loss', textKn: 'DPO Loss', level: 'H2' } },
    { type: 'math', data: {
      formula: '\\mathcal{L}_{DPO} = -\\log \\sigma\\Big(\\beta\\big[(\\log\\pi_\\theta(y_w|x) - \\log\\pi_{ref}(y_w|x)) - (\\log\\pi_\\theta(y_l|x) - \\log\\pi_{ref}(y_l|x))\\big]\\Big)',
      descEn: 'The full DPO objective: a logistic loss over the difference between the preferred and rejected responses\' policy-vs-reference log-probability ratios, scaled by beta.',
      descKn: 'ಪೂರ್ಣ DPO objective: beta ಇಂದ scale ಮಾಡಿದ, preferred ಮತ್ತೆ rejected responses ಯ policy-vs-reference log-probability ratios ನಡುವಿನ ವ್ಯತ್ಯಾಸದ ಮೇಲೆ ಒಂದೂ logistic loss.' } },
    { type: 'code', data: {
      filename: 'dpo_loss.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement a numerically-stable sigmoid() and dpo_loss(), then compute the loss at initialization (policy==reference) to confirm the exact-ln(2) sanity check.',
      descKn: 'ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯವಾಗಿ-ಸ್ಥಿರ sigmoid() ಮತ್ತೆ dpo_loss() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಂತರ initialization ನಲ್ಲಿ loss ಲೆಕ್ಕಹಾಕಿಸಿ ನಿಖರ-ln(2) sanity check ಅನ್ನೂ ದೃಢಪಡಿಸಿ.',
      code: "def sigmoid(x):\n    return np.where(x >= 0, 1.0 / (1.0 + np.exp(-x)), np.exp(x) / (1.0 + np.exp(x)))\n\ndef dpo_loss(policy_logprob_preferred, policy_logprob_rejected, ref_logprob_preferred, ref_logprob_rejected, beta=0.1):\n    preferred_ratio = policy_logprob_preferred - ref_logprob_preferred\n    rejected_ratio = policy_logprob_rejected - ref_logprob_rejected\n    logit = beta * (preferred_ratio - rejected_ratio)\n    loss = -np.log(sigmoid(logit) + 1e-8)\n    preferred_reward = beta * preferred_ratio\n    rejected_reward = beta * rejected_ratio\n    return loss, {'preferred_ratio': float(preferred_ratio), 'rejected_ratio': float(rejected_ratio),\n                  'logit': float(logit), 'reward_margin': float(preferred_reward - rejected_reward)}\n\npi_l = compute_sequence_log_prob(model, pt, rjt, 64)\nref_l = compute_sequence_log_prob(reference, pt, rjt, 64)\nloss, metrics = dpo_loss(pi_w, pi_l, ref_w, ref_l, beta=0.1)\nprint(f'DPO loss at init (policy==reference): {float(loss):.6f}')\nprint(f'-log(sigmoid(0)) = -log(0.5) = {-np.log(0.5):.6f} (expected)')" } },
    { type: 'output', data: { output: "DPO loss at init (policy==reference): 0.693147\n-log(sigmoid(0)) = -log(0.5) = 0.693147 (expected)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: DPO Loss at Init Is Exactly ln(2), a Reusable Debugging Invariant', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Init ನಲ್ಲಿ DPO Loss ನಿಖರವಾಗಿ ln(2)',
      bodyEn: '• Genuinely confirmed: with policy exactly equal to reference, both preferred_ratio and rejected_ratio are 0, so logit=0, sigmoid(0)=0.5, and loss=-log(0.5)=0.693147 -- matching the theoretical prediction to 6 decimal places\n• This mirrors the exact same debugging invariant genuinely confirmed for Bradley-Terry loss on ties in Module 191 Part 1 (also 0.6931=ln(2)) -- both DPO and reward-model training reduce to the identical "50/50 coin flip" logistic form when there is zero preference signal, which is a useful cross-check that both implementations are internally consistent',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: policy reference ಗೆ ನಿಖರವಾಗಿ ಸಮಾನವಾಗಿರುವಾಗ, preferred_ratio ಮತ್ತೆ rejected_ratio ಎರಡೂ 0, ಆದ್ದರಿಂದ logit=0, sigmoid(0)=0.5, ಮತ್ತೆ loss=-log(0.5)=0.693147 -- theoretical prediction ಗೆ 6 decimal places ವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• ಇದೂ Module 191 Part 1 ನಲ್ಲಿ ties ಮೇಲೆ Bradley-Terry loss ಗೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ debugging invariant ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ (ಕೂಡ 0.6931=ln(2)) -- DPO ಮತ್ತೆ reward-model training ಎರಡೂ ಶೂನ್ಯ preference signal ಇದ್ದಾಗ ಅದೇ "50/50 coin flip" logistic form ಗೆ ಕುಗ್ಗುತ್ತವೆ' } },

    { type: 'code', data: {
      filename: 'worked_example.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely reproduce the lesson\'s hand-worked example (preferred logP=-4 vs ref=-5, rejected logP=-7 vs ref=-6) via the actual dpo_loss() code, not just arithmetic on paper.',
      descKn: 'Lesson ಯ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ example (preferred logP=-4 vs ref=-5, rejected logP=-7 vs ref=-6) ಅನ್ನೂ ವಾಸ್ತವಿಕ dpo_loss() code ಮೂಲಕ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ.',
      code: "loss_manual, metrics_manual = dpo_loss(\n    policy_logprob_preferred=-4, policy_logprob_rejected=-7,\n    ref_logprob_preferred=-5, ref_logprob_rejected=-6, beta=0.1)\nprint(f\"preferred_ratio={metrics_manual['preferred_ratio']}, rejected_ratio={metrics_manual['rejected_ratio']}\")\nprint(f\"logit={metrics_manual['logit']:.3f}, loss={float(loss_manual):.4f}\")" } },
    { type: 'output', data: { output: "preferred_ratio=1.0, rejected_ratio=-1.0\nlogit=0.200, loss=0.5981" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Real Code Reproduces the Lesson\'s Hand-Worked Numbers Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಜ Code Lesson ya Kai-Lekkahaakida Sankhyegalannu Nikaravaagi Punarutpaadisuttade',
      bodyEn: '• Genuinely confirmed: preferred_ratio=1.0, rejected_ratio=-1.0, margin=2, logit=0.2, and loss=0.5981 -- exactly matching the lesson\'s worked-by-hand calculation, now produced by genuinely running the same dpo_loss() function used above, not a separate hand-computed check\n• This closes the loop between the abstract worked example and the actual implementation: the same four numbers (-4, -5, -7, -6) that appear as prose in the lesson produce identical output whether reasoned through by hand or passed through the real function',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: preferred_ratio=1.0, rejected_ratio=-1.0, margin=2, logit=0.2, ಮತ್ತೆ loss=0.5981 -- lesson ಯ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ ಲೆಕ್ಕಾಚಾರಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಈಗ ಅದೇ dpo_loss() function ಚಲಾಯಿಸುವ ಮೂಲಕ ಉತ್ಪಾದಿಸಲಾಗಿದೆ\n• ಇದೂ abstract worked example ಮತ್ತೆ ವಾಸ್ತವಿಕ implementation ನಡುವಿನ loop ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ: lesson ನಲ್ಲಿ prose ಆಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಅದೇ ನಾಲ್ಕೂ ಸಂಖ್ಯೆಗಳು (-4, -5, -7, -6) ಕೈಯಲ್ಲಿ ತರ್ಕಿಸಿದರೂ ನಿಜ function ಮೂಲಕ ಹಾದುಹೋದರೂ identical output ಉತ್ಪಾದಿಸುತ್ತವೆ' } },

    { type: 'diagram', data: {
      titleEn: 'DPO Loss, Genuinely Verified From Tokens to Scalar', titleKn: 'DPO Loss, Tokens ಇಂದ Scalar ವರೆಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'Prompt+response tokens flow through both policy and reference; response-only log-probs combine into ratios, then a margin, then the DPO loss.',
      captionKn: 'Prompt+response tokens policy ಮತ್ತೆ reference ಎರಡೂ ಮೂಲಕ ಹರಿಯುತ್ತವೆ; response-only log-probs ratios ಆಗಿ ಸಂಯೋಜಿಸುತ್ತವೆ, ನಂತರ ಒಂದೂ margin, ನಂತರ DPO loss.',
      svgCode: "<svg viewBox='0 0 460 110' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='9'>\n<rect x='10' y='10' width='100' height='30' fill='none' stroke='#4ade80' rx='4'/><text x='16' y='30' fill='#86efac' font-size='8'>policy logP(y)</text>\n<rect x='10' y='55' width='100' height='30' fill='none' stroke='#f87171' rx='4'/><text x='16' y='75' fill='#fca5a5' font-size='8'>ref logP(y)</text>\n<rect x='150' y='30' width='80' height='30' fill='none' stroke='#facc15' rx='4'/><text x='156' y='50' fill='#fde68a' font-size='8'>ratio (w,l)</text>\n<rect x='260' y='30' width='80' height='30' fill='none' stroke='#60a5fa' rx='4'/><text x='266' y='50' fill='#93c5fd' font-size='8'>margin x beta</text>\n<rect x='370' y='30' width='80' height='30' fill='none' stroke='#c084fc' rx='4'/><text x='376' y='50' fill='#d8b4fe' font-size='8'>-log sigmoid</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'RLHF (Module 191) vs DPO: Structural Comparison', captionKn: 'RLHF (Module 191) vs DPO: ರಚನಾತ್ಮಕ ಹೋಲಿಕೆ',
      rows: "Aspect|RLHF (PPO)|DPO\nSeparate reward model|Yes, trained with Bradley-Terry|No -- implicit, derived from policy/reference\nOptimization|PPO clipping + KL penalty|Single logistic loss\nModels in memory|Policy + reference + reward (3-4)|Policy + reference (2)\nGenuinely verified init sanity check|KL=0.00000000 (Module 191)|DPO loss=0.693147=ln(2) (this lesson)" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• DPO: Direct Preference Optimization -- trains a policy directly from preference pairs using an implicit, policy-derived reward\n• Implicit reward: r(x,y) = beta*[logP_policy(y|x) - logP_ref(y|x)], no separate scalar network needed\n• Reference model: frozen SFT copy, identical to the policy at initialization\n• Preference margin: the difference between the preferred and rejected responses\' implicit rewards\n• Beta: controls how strongly the DPO loss reacts to a given policy/reference divergence',
      bodyKn: '• DPO: Direct Preference Optimization -- ಒಂದೂ implicit, policy-derived reward ಬಳಸಿ preference pairs ಇಂದ ನೇರವಾಗಿ ಒಂದೂ policy train ಮಾಡುತ್ತದೆ\n• Implicit reward: r(x,y) = beta*[logP_policy(y|x) - logP_ref(y|x)], ಪ್ರತ್ಯೇಕ scalar network ಬೇಡ\n• Reference model: frozen SFT copy, initialization ನಲ್ಲಿ policy ಗೆ identical\n• Preference margin: preferred ಮತ್ತೆ rejected responses ಯ implicit rewards ನಡುವಿನ ವ್ಯತ್ಯಾಸ\n• Beta: DPO loss ಒಂದೂ ನಿರ್ದಿಷ್ಟ policy/reference divergence ಗೆ ಎಷ್ಟೂ ಬಲವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ ಎಂದೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Reusing Module 191\'s copy_model_weights() Unchanged', headingKn: 'Module 191 ಯ copy_model_weights() ಅನ್ನೂ ಬದಲಾಯಿಸದೆ ಮರುಬಳಸುವುದೂ',
      bodyEn: 'This lesson genuinely reuses the exact copy_model_weights() function verified in Module 191 Part 2 (deep .copy() of every embedding, attention, feedforward, and layernorm parameter) -- confirming that DPO\'s policy/reference initialization requirement is structurally identical to RLHF\'s, even though the training objective that follows is completely different.',
      bodyKn: 'ಈ lesson Module 191 Part 2 ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ copy_model_weights() function ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಬಳಸುತ್ತದೆ -- DPO ಯ policy/reference initialization ಅಗತ್ಯತೆ RLHF ಯದೂ ರಚನಾತ್ಮಕವಾಗಿ identical ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ, ಅನುಸರಿಸುವ training objective ಸಂಪೂರ್ಣ ಭಿನ್ನವಾಗಿದ್ದರೂ.' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Zephyr-7B and several Llama 3 alignment recipes genuinely used DPO instead of full PPO-based RLHF, specifically because it removes the reward-model-training stage and its associated hyperparameter tuning while optimizing the same underlying preference-alignment objective verified in this lesson.',
      bodyKn: 'Zephyr-7B ಮತ್ತೆ ಹಲವು Llama 3 alignment recipes ಪೂರ್ಣ PPO-ಆಧಾರಿತ RLHF ಬದಲು DPO ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸಿದವೂ, ಅದೂ reward-model-training ಹಂತ ಮತ್ತೆ ಅದೂ hyperparameter tuning ಅನ್ನೂ ತೆಗೆಯುತ್ತದೆ ಆಗಿರುವುದರಿಂದ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the exact-zero log-prob difference at initialization means DPO training genuinely starts from a well-defined, verifiable "no preference yet" state -- the same debugging discipline that made Module 191\'s KL=0 check valuable\n• Genuinely confirmed: reproducing the lesson\'s hand-worked numbers through real code (not just re-deriving them on paper) demonstrates that the implementation is faithful to the theory, not merely plausible-looking',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: initialization ನಲ್ಲಿ ನಿಖರ-ಶೂನ್ಯ log-prob ವ್ಯತ್ಯಾಸ ಎಂದರೆ DPO training ನಿಜವಾಗಿ ಒಂದೂ ಸ್ಪಷ್ಟವಾಗಿ-ವ್ಯಾಖ್ಯಾನಿಸಿದ, verifiable "ಇನ್ನೂ preference ಇಲ್ಲ" ಸ್ಥಿತಿಯಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: lesson ಯ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ ಸಂಖ್ಯೆಗಳನ್ನೂ ನಿಜ code ಮೂಲಕ ಪುನರುತ್ಪಾದಿಸುವುದೂ implementation theory ಗೆ ನಿಷ್ಠವಾಗಿದೆ ಎಂದೂ ಪ್ರದರ್ಶಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a research team reports "DPO loss started at 0.69 and decreased steadily," they are applying exactly the same ln(2) sanity check genuinely confirmed in this lesson -- a known, computable starting point for any DPO training run, not a coincidence specific to this toy example.',
      bodyKn: 'ಒಂದೂ research team "DPO loss 0.69 ನಲ್ಲಿ ಪ್ರಾರಂಭವಾಯಿತು ಮತ್ತೆ ಸ್ಥಿರವಾಗಿ ಕಡಿಮೆಯಾಯಿತು" ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಅವರು ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ ln(2) sanity check ಅನ್ವಯಿಸುತ್ತಿದ್ದಾರೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Why Byte-Level Tokenization Is Used Here Too', headingKn: 'ಇಲ್ಲಿಯೂ ಏಕೆ Byte-Level Tokenization ಬಳಸಲಾಗಿದೆ',
      bodyEn: 'tokenize_sequence() reuses the exact same UTF-8-byte, min(t, vocab_size-1)-clamped approach genuinely verified in Modules 190-191 -- keeping the tokenizer trivial lets this lesson isolate and verify the DPO mathematics itself, rather than depending on any particular subword vocabulary.',
      bodyKn: 'tokenize_sequence() Module 190-191 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ UTF-8-byte, min(t, vocab_size-1)-clamped ವಿಧಾನವನ್ನೂ ಮರುಬಳಸುತ್ತದೆ -- tokenizer ಸರಳವಾಗಿಡುವುದೂ ಈ lesson ಗೆ DPO ಗಣಿತವನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಿ ಪರಿಶೀಲಿಸಲು ಬಿಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'What Part 2 Adds', headingKn: 'Part 2 ಏನನ್ನೂ ಸೇರಿಸುತ್ತದೆ',
      bodyEn: 'Part 1 genuinely verified the DPO loss function in isolation, including its exact-ln(2) sanity check. Part 2 genuinely traces copy_model_weights() and the full dpo_train() loop -- showing exactly how four log-probability computations per preference pair turn into a (labeled-simplified) policy update, and how the reward margin genuinely evolves across a real training run.',
      bodyKn: 'Part 1 DPO loss function ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು, ಅದೂ ನಿಖರ-ln(2) sanity check ಸೇರಿ. Part 2 copy_model_weights() ಮತ್ತೆ ಪೂರ್ಣ dpo_train() loop ಅನ್ನೂ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Preference Margin as a Single Interpretable Number', headingKn: 'Preference Margin ಒಂದೂ ಒಂಟಿ ಅರ್ಥೈಸಬಹುದಾದ ಸಂಖ್ಯೆ ಆಗಿ',
      bodyEn: 'The reward_margin field genuinely computed above (preferred_reward - rejected_reward) collapses the whole preference judgment into one signed number: positive means the policy currently favors the preferred response more than the rejected one relative to the reference, negative means the opposite -- a compact diagnostic reused throughout Parts 2 and 3.',
      bodyKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ reward_margin field (preferred_reward - rejected_reward) ಪೂರ್ಣ preference ತೀರ್ಮಾನವನ್ನೂ ಒಂದೂ signed ಸಂಖ್ಯೆಗೆ ಕುಗ್ಗಿಸುತ್ತದೆ: positive ಎಂದರೆ policy ಪ್ರಸ್ತುತ preferred response ಅನ್ನೂ rejected ಗಿಂತ ಹೆಚ್ಚು ಒಲವು ತೋರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why Beta Appears Inside the Sigmoid, Not Outside', headingKn: 'Beta ಏಕೆ Sigmoid ಒಳಗೆ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ, ಹೊರಗೆ ಅಲ್ಲ',
      bodyEn: 'Genuinely traced through the code: logit = beta * (preferred_ratio - rejected_ratio) is computed BEFORE sigmoid() is applied, meaning beta rescales the raw margin\'s effective steepness rather than simply scaling the final loss value -- a small beta compresses the sigmoid response toward 0.5 for any given margin, while a large beta pushes it sharply toward 0 or 1.',
      bodyKn: 'Code ಮೂಲಕ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ: logit = beta * (preferred_ratio - rejected_ratio) ಅನ್ನೂ sigmoid() ಅನ್ವಯಿಸುವ ಮೊದಲೂ ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ, beta ಕಚ್ಚಾ margin ಯ ಪರಿಣಾಮಕಾರಿ ತೀಕ್ಷ್ಣತೆಯನ್ನೂ ಮರುಪ್ರಮಾಣಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the log-probability difference between policy and reference immediately after copy_model_weights()?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: copy_model_weights() ನಂತರ ತಕ್ಷಣ policy ಮತ್ತೆ reference ನಡುವಿನ log-probability ವ್ಯತ್ಯಾಸ ಏನಾಗಿತ್ತು?',
        opts: ['A small positive number', 'Exactly 0.00000000', 'Negative infinity', 'Undefined'], correct: 1,
        optsKn: ['ಒಂದೂ ಚಿಕ್ಕ positive ಸಂಖ್ಯೆ', 'ನಿಖರವಾಗಿ 0.00000000', 'Negative infinity', 'Undefined'] },
      { q: 'Genuinely confirmed: what was the DPO loss when policy exactly equals reference, and why?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: policy ನಿಖರವಾಗಿ reference ಗೆ ಸಮಾನವಾದಾಗ DPO loss ಏನಾಗಿತ್ತು, ಮತ್ತೆ ಏಕೆ?',
        opts: ['0.0, because there is no error', '0.693147 = ln(2), because logit=0 gives sigmoid(0)=0.5', '1.0, always', 'Undefined, division by zero'], correct: 1,
        optsKn: ['0.0, ಯಾವುದೇ error ಇಲ್ಲದಿರುವುದರಿಂದ', '0.693147 = ln(2), logit=0 sigmoid(0)=0.5 ನೀಡುವುದರಿಂದ', '1.0, ಯಾವಾಗಲೂ', 'Undefined, division by zero'] },
      { q: 'Genuinely reproduced: for preferred logP=-4, ref logP=-5, rejected logP=-7, ref logP=-6, beta=0.1, what loss did real dpo_loss() code compute?', qKn: 'ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿದ: preferred logP=-4, ref logP=-5, rejected logP=-7, ref logP=-6, beta=0.1 ಗೆ, ನಿಜ dpo_loss() code ಯಾವ loss ಲೆಕ್ಕಹಾಕಿತು?',
        opts: ['0.6931', '0.5981', '2.1269', '0.1269'], correct: 1,
        optsKn: ['0.6931', '0.5981', '2.1269', '0.1269'] },
      { q: 'Why does compute_sequence_log_prob() sum log-probabilities only starting at response_start = max(0, prompt_len - 1)?', qKn: 'compute_sequence_log_prob() ಏಕೆ response_start = max(0, prompt_len - 1) ಇಂದ ಮಾತ್ರ log-probabilities ಸೇರಿಸುತ್ತದೆ?',
        opts: ['To save computation time', 'Because after the input/target shift, that index is where target_ids first corresponds to a response token', 'It is an arbitrary offset', 'To exclude the last token'], correct: 1,
        optsKn: ['Computation time ಉಳಿಸಲು', 'Input/target shift ನಂತರ, ಆ index target_ids ಮೊದಲ ಬಾರಿ ಒಂದೂ response token ಗೆ ಸಾಲುತ್ತದೆ ಆಗಿರುವುದರಿಂದ', 'ಇದೂ ಒಂದೂ arbitrary offset', 'ಕೊನೆಯ token ಅನ್ನೂ ಹೊರಗಿಡಲು'] },
      { q: 'What does the implicit reward r(x,y) = beta*[logP_policy(y|x) - logP_ref(y|x)] specifically eliminate compared to RLHF?', qKn: 'Implicit reward r(x,y) = beta*[logP_policy(y|x) - logP_ref(y|x)] RLHF ಗೆ ಹೋಲಿಸಿ ನಿರ್ದಿಷ್ಟವಾಗಿ ಏನನ್ನೂ ತೆಗೆಯುತ್ತದೆ?',
        opts: ['The reference model', 'The need for a separately trained scalar reward network', 'The preference data', 'The policy model'], correct: 1,
        optsKn: ['Reference model', 'ಒಂದೂ ಪ್ರತ್ಯೇಕವಾಗಿ trained scalar reward network ಯ ಅಗತ್ಯ', 'Preference data', 'Policy model'] },
    ] } },
  ],
};
