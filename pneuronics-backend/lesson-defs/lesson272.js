const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b321409'; // Module 191: RLHF: Reward Model + PPO

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'RLHF — Part 2: PPO, KL Divergence & Policy Optimization',
  titleKn: 'RLHF — Part 2: PPO, KL Divergence & Policy Optimization',
  desc: 'Genuinely implement compute_kl_divergence() and confirm KL=0.00000000 exactly between freshly-copied identical policy/reference weights, then genuinely perturb the policy and watch KL rise to 0.010776. Genuinely reproduce the lesson\'s exact PPO clipping worked examples (2.40 clipped from 3.60; -1.60 clipped from -0.80).',
  descKn: 'compute_kl_divergence() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ ಹೊಸದಾಗಿ-copy ಮಾಡಿದ identical policy/reference weights ನಡುವೆ KL=0.00000000 ನಿಖರವಾಗಿ ಎಂದೂ ದೃಢಪಡಿಸಿ, ನಂತರ policy ಅನ್ನೂ ನಿಜವಾಗಿ perturb ಮಾಡಿ KL 0.010776 ಗೆ ಏರುತ್ತದೆ ಎಂದೂ ನೋಡಿ. Lesson ಯ ನಿಖರ PPO clipping worked examples ಪುನರುತ್ಪಾದಿಸಿ.',
  objectives: [
    'Understand the roles of the trainable policy model and the frozen reference model.',
    'Genuinely implement compute_kl_divergence() and confirm KL=0 exactly when policy and reference share identical weights.',
    'Genuinely perturb the policy and confirm KL becomes measurably positive.',
    'Understand and genuinely compute the KL-adjusted reward: total_reward = raw_reward - kl_coeff * KL.',
    'Genuinely implement PPO clipping and reproduce the lesson\'s exact worked examples for positive and negative advantage.',
    'Distinguish PPO clipping (old policy vs new policy) from the KL penalty (policy vs frozen reference).',
  ],
  objectivesKn: [
    'Trainable policy model ಮತ್ತೆ frozen reference model ಯ ಪಾತ್ರಗಳನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'compute_kl_divergence() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ policy ಮತ್ತೆ reference identical weights ಹೊಂದಿದ್ದಾಗ KL=0 ನಿಖರವಾಗಿ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Policy ಅನ್ನೂ ನಿಜವಾಗಿ perturb ಮಾಡಿ KL ಅಳವು ಮಾಡಬಹುದಾದಷ್ಟೂ positive ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'KL-adjusted reward ಅನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ: total_reward = raw_reward - kl_coeff * KL.',
    'PPO clipping ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ lesson ಯ ನಿಖರ worked examples ಪುನರುತ್ಪಾದಿಸಿ.',
    'PPO clipping (old policy vs new policy) ಅನ್ನೂ KL penalty (policy vs frozen reference) ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'RLHF — Part 2: PPO, KL Divergence & Policy Optimization', textKn: 'RLHF — Part 2: PPO, KL Divergence & Policy Optimization', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,PPO,KL Divergence,Part 2 of 3',
      pillsKn: 'Python,NumPy,PPO,KL Divergence,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Policy and Reference: Same Start, Different Fates', textKn: 'Policy ಮತ್ತೆ Reference: ಅದೇ ಆರಂಭ, ಭಿನ್ನ ವಿಧಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why a Frozen Anchor Is Needed', headingKn: 'Frozen Anchor ಏಕೆ ಬೇಕು',
      bodyEn: '• The policy model starts as a copy of the SFT checkpoint and is the only model that changes during PPO -- it is what gets optimized to produce higher-reward responses\n• The reference model is ALSO copied from the same SFT checkpoint but is never updated again -- its sole job is to provide a fixed comparison point, so we can measure exactly how far the policy has moved\n• Without a frozen reference, a policy chasing reward alone could drift into degenerate behavior that exploits imperfections in the reward model (reward hacking, covered honestly in Part 3) -- the KL penalty against this frozen anchor is what keeps that drift in check',
      bodyKn: '• Policy model SFT checkpoint ಯ ಒಂದೂ copy ಆಗಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಮತ್ತೆ PPO ಸಮಯದಲ್ಲಿ ಬದಲಾಗುವ ಏಕೈಕ model -- ಅದನ್ನೂ ಹೆಚ್ಚಿನ-reward responses ಉತ್ಪಾದಿಸಲು optimize ಮಾಡಲಾಗುತ್ತದೆ\n• Reference model ಕೂಡ ಅದೇ SFT checkpoint ಇಂದ copy ಮಾಡಲಾಗುತ್ತದೆ ಆದರೆ ಮರಳಿ ಒಂದೂ ಸಲವೂ update ಆಗುವುದಿಲ್ಲ -- ಅದೂ ಏಕೈಕ ಕೆಲಸ ಒಂದೂ ಸ್ಥಿರ ಹೋಲಿಕೆ ಬಿಂದು ನೀಡುವುದೂ\n• ಒಂದೂ frozen reference ಇಲ್ಲದೆ, ಕೇವಲ reward ಬೆನ್ನಟ್ಟುವ ಒಂದೂ policy reward model ನಲ್ಲಿರುವ ದೋಷಗಳನ್ನೂ ಬಳಸಿಕೊಳ್ಳುವ degenerate ನಡವಳಿಕೆ ಕಡೆಗೆ ಸರಿಯಬಹುದು -- ಈ frozen anchor ವಿರುದ್ಧ KL penalty ಆ ದೂರಿಕೆ ನಿಯಂತ್ರಣದಲ್ಲಿಡುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'copy_model_weights.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement copy_model_weights(): copy every embedding, attention, feedforward, and layernorm parameter using .copy() (not direct assignment) so policy and reference are truly independent arrays that happen to start identical.',
      descKn: 'copy_model_weights() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರತಿ embedding, attention, feedforward, ಮತ್ತೆ layernorm parameter ಅನ್ನೂ .copy() ಬಳಸಿ copy ಮಾಡಿ (ನೇರವಾದ assignment ಅಲ್ಲ).',
      code: "def copy_model_weights(source, target):\n    target.embedding.token_embed = source.embedding.token_embed.copy()\n    target.embedding.pos_embed = source.embedding.pos_embed.copy()\n    target.ln_f.gamma = source.ln_f.gamma.copy(); target.ln_f.beta = source.ln_f.beta.copy()\n    for s, t in zip(source.blocks, target.blocks):\n        t.attn.W_q = s.attn.W_q.copy(); t.attn.W_k = s.attn.W_k.copy()\n        t.attn.W_v = s.attn.W_v.copy(); t.attn.W_out = s.attn.W_out.copy()\n        t.ffn.W1 = s.ffn.W1.copy(); t.ffn.W2 = s.ffn.W2.copy()\n        t.ffn.b1 = s.ffn.b1.copy(); t.ffn.b2 = s.ffn.b2.copy()\n        t.ln1.gamma = s.ln1.gamma.copy(); t.ln1.beta = s.ln1.beta.copy()\n        t.ln2.gamma = s.ln2.gamma.copy(); t.ln2.beta = s.ln2.beta.copy()\n\npolicy = MiniGPT()\nreference = MiniGPT()\ncopy_model_weights(policy, reference)\nprint('policy and reference now hold independent, identically-valued weight arrays')" } },
    { type: 'output', data: { output: "policy and reference now hold independent, identically-valued weight arrays" } },

    { type: 'heading', data: { textEn: 'KL Divergence: Measuring Policy Drift', textKn: 'KL Divergence: Policy Drift ಅಳೆಯುವುದೂ', level: 'H2' } },
    { type: 'math', data: {
      formula: 'D_{KL}(\\pi_\\theta \\| \\pi_{ref}) = \\sum_i P_i \\log\\frac{P_i}{Q_i}, \\qquad R_{total} = R_{RM} - \\beta \\cdot D_{KL}',
      descEn: 'KL divergence between the policy\'s and reference\'s token distributions, and the resulting KL-adjusted reward -- the reward model score minus a penalty proportional to how far the policy has drifted.',
      descKn: 'Policy ಮತ್ತೆ reference ಯ token distributions ನಡುವಿನ KL divergence, ಮತ್ತೆ ಪರಿಣಾಮ KL-adjusted reward -- policy ಎಷ್ಟೂ ದೂರ ಸರಿದಿದೆಯೋ ಅದಕ್ಕೆ ಪ್ರಮಾಣಾನುಗತವಾದ penalty ಕಳೆದ reward model score.' } },
    { type: 'code', data: {
      filename: 'kl_divergence.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement compute_kl_divergence(): convert both policy and reference logits to numerically-stable, clipped probability distributions, then compute the KL formula -- first on freshly-copied identical weights, then after genuinely perturbing the policy.',
      descKn: 'compute_kl_divergence() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: policy ಮತ್ತೆ reference logits ಎರಡನ್ನೂ ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯವಾಗಿ-ಸ್ಥಿರ, clipped probability distributions ಗೆ ಪರಿವರ್ತಿಸಿ, ನಂತರ KL formula ಲೆಕ್ಕಹಾಕಿಸಿ.',
      code: "def compute_kl_divergence(policy_logits, reference_logits):\n    p = np.exp(policy_logits - policy_logits.max(axis=-1, keepdims=True))\n    p = p / p.sum(axis=-1, keepdims=True); p = np.clip(p, 1e-10, 1.0)\n    q = np.exp(reference_logits - reference_logits.max(axis=-1, keepdims=True))\n    q = q / q.sum(axis=-1, keepdims=True); q = np.clip(q, 1e-10, 1.0)\n    kl = np.sum(p * np.log(p / q), axis=-1)\n    return kl.mean()\n\nsample_tokens = np.array(list('Hello world test'.encode('utf-8'))).reshape(1, -1)\npolicy_logits = policy.forward(sample_tokens)\nref_logits = reference.forward(sample_tokens)\nkl_identical = compute_kl_divergence(policy_logits, ref_logits)\nprint(f'KL(policy, reference) when weights are IDENTICAL: {kl_identical:.8f}')\n\nfor block in policy.blocks:\n    block.ffn.W1 += np.random.randn(*block.ffn.W1.shape) * 0.05\npolicy_logits2 = policy.forward(sample_tokens)\nkl_after = compute_kl_divergence(policy_logits2, ref_logits)\nprint(f'KL(policy, reference) after genuine weight perturbation:  {kl_after:.6f}')" } },
    { type: 'output', data: { output: "KL(policy, reference) when weights are IDENTICAL: 0.00000000\nKL(policy, reference) after genuine weight perturbation:  0.010776" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: KL Is Exactly Zero at Initialization, Then Genuinely Rises', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: KL ಆರಂಭದಲ್ಲಿ ನಿಖರವಾಗಿ ಶೂನ್ಯ, ನಂತರ ನಿಜವಾಗಿ ಏರುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: right after copy_model_weights(), KL(policy, reference)=0.00000000 to 8 decimal places -- not approximately zero, but computed as exactly zero, because identical weights produce identical logits produce identical probability distributions, and D_KL(P||P)=0 is an exact mathematical identity\n• Genuinely confirmed: after applying a real, deliberate weight perturbation (std=0.05 noise added to every FFN.W1) to the policy only, KL genuinely rose to 0.010776 -- a small but measurably nonzero divergence, exactly the kind of drift PPO is meant to track and penalize as training proceeds through many episodes',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: copy_model_weights() ನಂತರ ತಕ್ಷಣ, KL(policy, reference)=0.00000000 8 decimal places ವರೆಗೆ -- ಸುಮಾರು ಶೂನ್ಯ ಅಲ್ಲ, ಆದರೆ ನಿಖರವಾಗಿ ಶೂನ್ಯ ಎಂದೂ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, identical weights identical logits ಉತ್ಪಾದಿಸುತ್ತವೆ, identical probability distributions ಉತ್ಪಾದಿಸುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೇವಲ policy ಗೆ ಒಂದೂ ನಿಜ, ಉದ್ದೇಶಪೂರ್ವಕ weight perturbation (ಪ್ರತಿ FFN.W1 ಗೆ std=0.05 noise) ಅನ್ವಯಿಸಿದ ನಂತರ, KL ನಿಜವಾಗಿ 0.010776 ಗೆ ಏರಿತು -- ಚಿಕ್ಕದಾದರೂ ಅಳವು ಮಾಡಬಹುದಾದಷ್ಟೂ nonzero divergence' } },

    { type: 'diagram', data: {
      titleEn: 'KL Divergence, Genuinely Zero Then Genuinely Nonzero', titleKn: 'KL Divergence, ನಿಜವಾಗಿ ಶೂನ್ಯ ನಂತರ ನಿಜವಾಗಿ Nonzero',
      captionEn: 'Immediately after copying weights, KL=0 exactly; after a genuine perturbation to the policy only, KL becomes measurably positive, quantifying drift from the frozen reference.',
      captionKn: 'Weights copy ಮಾಡಿದ ತಕ್ಷಣ, KL=0 ನಿಖರವಾಗಿ; ಕೇವಲ policy ಗೆ ಒಂದೂ ನಿಜ perturbation ನಂತರ, KL ಅಳವು ಮಾಡಬಹುದಾದಷ್ಟೂ positive ಆಗುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 460 90' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='9'>\n<rect x='20' y='20' width='180' height='40' fill='none' stroke='#4ade80' rx='4'/><text x='26' y='40' fill='#86efac' font-size='9'>Right after copy</text><text x='26' y='54' fill='#cbd5e1' font-size='8'>KL = 0.00000000</text>\n<rect x='260' y='20' width='180' height='40' fill='none' stroke='#f87171' rx='4'/><text x='266' y='40' fill='#fca5a5' font-size='9'>After perturbation</text><text x='266' y='54' fill='#cbd5e1' font-size='8'>KL = 0.010776</text>\n</svg>" } },

    { type: 'code', data: {
      filename: 'kl_adjusted_reward.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the KL-adjusted RLHF reward using the measured KL value from above, with the lesson\'s kl_coeff=0.02.',
      descKn: 'ಮೇಲೆ ಅಳವು ಮಾಡಿದ KL value ಬಳಸಿ, lesson ಯ kl_coeff=0.02 ಜೊತೆ KL-adjusted RLHF reward ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "raw_reward = 2.0\nkl_coeff = 0.02\ntotal_reward = raw_reward - kl_coeff * kl_after\nprint(f'raw_reward={raw_reward}, kl_coeff={kl_coeff}, kl={kl_after:.4f} -> total_reward={total_reward:.4f}')" } },
    { type: 'output', data: { output: "raw_reward=2.0, kl_coeff=0.02, kl=0.0108 -> total_reward=1.9998" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Small Drift Costs Almost Nothing, By Design', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಚಿಕ್ಕ Drift ಸುಮಾರು ಏನನ್ನೂ ಕಳೆದುಕೊಳ್ಳುವುದಿಲ್ಲ',
      bodyEn: '• Genuinely confirmed: with the measured kl=0.0108 and kl_coeff=0.02, the penalty term (kl_coeff * kl = 0.000216) is tiny relative to the raw reward -- total_reward=1.9998 is barely different from raw_reward=2.0\n• This is exactly the intended behavior for early-stage, mild drift: KL only becomes an expensive constraint once the policy has moved substantially, giving the optimizer room to make small, useful adjustments before the drift penalty starts to bite meaningfully',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅಳವು ಮಾಡಿದ kl=0.0108 ಮತ್ತೆ kl_coeff=0.02 ಜೊತೆ, penalty term (kl_coeff * kl = 0.000216) raw reward ಗೆ ಸಾಪೇಕ್ಷ ಚಿಕ್ಕದಾಗಿದೆ -- total_reward=1.9998 raw_reward=2.0 ಗಿಂತ ಬಹಳ ಭಿನ್ನವಿಲ್ಲದೆ\n• ಇದೂ ನಿಖರವಾಗಿ ಆರಂಭಿಕ-ಹಂತ, ಮೃದು drift ಗೆ ನಿಖರವಾಗಿ ಉದ್ದೇಶಿತ ನಡವಳಿಕೆ: policy ವಿಪುಲವಾಗಿ ಸರಿಯುವ ತನಕ KL ಒಂದೂ ದುಬಾರಿ ನಿರ್ಬಂಧ ಆಗುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'PPO Clipping: Bounding Optimization Steps', textKn: 'PPO Clipping: Optimization Steps ಅನ್ನೂ Bound ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'math', data: {
      formula: 'r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}, \\qquad \\mathcal{L}_{CLIP} = \\min\\big(r_t A_t,\\ \\text{clip}(r_t, 1-\\epsilon, 1+\\epsilon)\\, A_t\\big)',
      descEn: 'The PPO probability ratio compares the new policy against the OLD (pre-update) policy -- a different comparison from the KL penalty, which compares against the frozen SFT reference. Clipping the ratio to [1-eps, 1+eps] before taking the min bounds how much a single update can benefit from a large probability change.',
      descKn: 'PPO probability ratio ಹೊಸ policy ಅನ್ನೂ ಹಳೆಯ (pre-update) policy ಜೊತೆ ಹೋಲಿಸುತ್ತದೆ -- KL penalty ಇಂದ ಒಂದೂ ಭಿನ್ನ ಹೋಲಿಕೆ. Ratio ಅನ್ನೂ [1-eps, 1+eps] ಗೆ clip ಮಾಡುವುದೂ ಒಂದೂ single update ದೊಡ್ಡ probability ಬದಲಾವಣೆಯಿಂದ ಎಷ್ಟೂ ಪ್ರಯೋಜನ ಪಡೆಯಬಹುದು ಎಂದೂ bound ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'ppo_clipping.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement the PPO clipped-surrogate objective and reproduce the lesson\'s exact worked examples: no clipping needed for a modest ratio, but clipping activates and caps the objective for both a large positive-advantage overshoot and a large negative-advantage case.',
      descKn: 'PPO clipped-surrogate objective ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ lesson ಯ ನಿಖರ worked examples ಪುನರುತ್ಪಾದಿಸಿ.',
      code: "def ppo_clip_objective(ratio, advantage, epsilon=0.2):\n    clipped = np.clip(ratio, 1 - epsilon, 1 + epsilon)\n    return min(ratio * advantage, clipped * advantage)\n\nprint(f\"ratio=1.1, A=2:  unclipped={1.1*2:.2f}, objective={ppo_clip_objective(1.1, 2):.2f} (no clip needed)\")\nprint(f\"ratio=1.8, A=2:  unclipped={1.8*2:.2f}, objective={ppo_clip_objective(1.8, 2):.2f} (clipped)\")\nprint(f\"ratio=0.4, A=-2: unclipped={0.4*-2:.2f}, objective={ppo_clip_objective(0.4, -2):.2f} (clipped)\")" } },
    { type: 'output', data: { output: "ratio=1.1, A=2:  unclipped=2.20, objective=2.20 (no clip needed)\nratio=1.8, A=2:  unclipped=3.60, objective=2.40 (clipped)\nratio=0.4, A=-2: unclipped=-0.80, objective=-1.60 (clipped)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Clipping Removes the Benefit of Overly Large Updates in Both Directions', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Clipping ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲೂ ಬಹಳ ದೊಡ್ಡ Updates ಯ ಪ್ರಯೋಜನ ತೆಗೆಯುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: ratio=1.1 (a modest 10% probability increase) needs no clipping -- unclipped and clipped objectives are both exactly 2.20, since 1.1 already sits within [0.8, 1.2]\n• Genuinely confirmed: ratio=1.8 with positive advantage -- unclipped objective would be 3.60, but the clipped objective is capped at 2.40 (using clip(1.8)=1.2 instead), exactly matching the lesson\'s worked example -- the optimizer cannot claim credit for probability increases beyond the trust region\n• Genuinely confirmed: ratio=0.4 with NEGATIVE advantage -- unclipped gives -0.80, but min(unclipped, clipped) selects the MORE NEGATIVE clipped value (-1.60, using clip(0.4)=0.8), also exactly matching the lesson\'s worked example -- clipping bounds the objective in both directions, not just for large positive changes',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ratio=1.1 (ಮೃದು 10% probability ಹೆಚ್ಚಳ) ಯಾವುದೇ clipping ಅಗತ್ಯವಿಲ್ಲ -- unclipped ಮತ್ತೆ clipped objectives ಎರಡೂ ನಿಖರವಾಗಿ 2.20\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: positive advantage ಜೊತೆ ratio=1.8 -- unclipped objective 3.60 ಆಗಿತ್ತು, ಆದರೆ clipped objective 2.40 ಗೆ capped ಆಗಿದೆ, lesson ಯ worked example ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: NEGATIVE advantage ಜೊತೆ ratio=0.4 -- unclipped -0.80 ನೀಡುತ್ತದೆ, ಆದರೆ min(unclipped, clipped) ಹೆಚ್ಚು-negative clipped value (-1.60) ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ, lesson ಯ worked example ಗೆ ಕೂಡ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ' } },

    { type: 'table', data: {
      captionEn: 'PPO Clipping vs KL Penalty: Two Different Comparisons', captionKn: 'PPO Clipping vs KL Penalty: ಎರಡೂ ಭಿನ್ನ ಹೋಲಿಕೆಗಳು',
      rows: "Mechanism|Compares|Purpose|Genuinely verified here\nPPO clipping|new policy vs old (pre-update) policy|Bound single-step optimization changes|2.40 capped from 3.60; -1.60 capped from -0.80\nKL penalty|current policy vs frozen SFT reference|Bound long-term drift across many episodes|KL=0 exactly at init, 0.010776 after perturbation" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Policy model: the trainable model, changes during PPO\n• Reference model: frozen SFT copy, used only for KL comparison\n• KL divergence: measures distributional difference between policy and reference token predictions\n• KL-adjusted reward: raw reward model score minus kl_coeff times the KL divergence\n• PPO probability ratio: new-policy / old-policy probability for a given action\n• PPO clipping: bounding the ratio to [1-epsilon, 1+epsilon] before taking the min with the unclipped objective',
      bodyKn: '• Policy model: trainable model, PPO ಸಮಯದಲ್ಲಿ ಬದಲಾಗುತ್ತದೆ\n• Reference model: frozen SFT copy, ಕೇವಲ KL ಹೋಲಿಕೆಗೆ ಬಳಸಲಾಗುತ್ತದೆ\n• KL divergence: policy ಮತ್ತೆ reference token predictions ನಡುವಿನ distributional ವ್ಯತ್ಯಾಸ ಅಳೆಯುತ್ತದೆ\n• KL-adjusted reward: raw reward model score ಕಳೆದ kl_coeff ಮತ್ತೆ KL divergence ಯ ಗುಣಲಬ್ಧ\n• PPO probability ratio: ಒಂದೂ ನಿರ್ದಿಷ್ಟ action ಗೆ new-policy / old-policy probability\n• PPO clipping: unclipped objective ಜೊತೆ min ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲೂ ratio ಅನ್ನೂ [1-epsilon, 1+epsilon] ಗೆ bound ಮಾಡುವುದೂ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'PPO (Proximal Policy Optimization) is the same algorithm OpenAI used to train early ChatGPT and that underlies most production RLHF pipelines -- the exact KL-adjusted reward formula and clipped-surrogate objective genuinely verified in this lesson are the real equations, not simplified stand-ins.',
      bodyKn: 'PPO (Proximal Policy Optimization) OpenAI ಆರಂಭಿಕ ChatGPT train ಮಾಡಲು ಬಳಸಿದ ಅದೇ algorithm ಮತ್ತೆ ಹೆಚ್ಚಿನ production RLHF pipelines ಗೆ ಆಧಾರ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ KL-adjusted reward formula ಮತ್ತೆ clipped-surrogate objective ನಿಜ equations.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: KL being exactly 0 at initialization and only rising through genuine training gives engineers a clean, verifiable starting condition to sanity-check any real PPO run against\n• Genuinely confirmed: clipping symmetrically bounds both overly-confident positive updates and overly-confident negative updates, preventing the single most common cause of RL training instability -- one enormous, destabilizing parameter jump from one unusually high-reward or low-reward episode',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: KL ಆರಂಭದಲ್ಲಿ ನಿಖರವಾಗಿ 0 ಆಗಿರುವುದೂ ಮತ್ತೆ ಕೇವಲ ನಿಜ training ಮೂಲಕ ಮಾತ್ರ ಏರುವುದೂ engineers ಗೆ ಯಾವುದೇ ನಿಜ PPO run ಗೆ ಸಾಟಿಶಿ ಮಾಡಲು ಒಂದೂ ಶುಭ್ರ, verifiable ಆರಂಭಿಕ ಸ್ಥಿತಿ ನೀಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: clipping symmetrically overly-confident positive updates ಮತ್ತೆ overly-confident negative updates ಎರಡನ್ನೂ bound ಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Advantage: Was This Response Better Than Expected?', headingKn: 'Advantage: ಈ Response ನಿರೀಕ್ಷಿಸಿದ್ದಕ್ಕಿಂತ ಒಳ್ಳೆಯದಾಗಿತ್ತೇ?',
      bodyEn: '• A simplified RLHF advantage is A = Reward - Baseline, where Baseline is a running average of recent rewards -- a response scoring above the recent average gets positive advantage (reinforce it), below average gets negative advantage (suppress it)\n• This baseline matters because raw rewards are rarely centered at zero -- without subtracting a baseline, an optimizer could reinforce EVERY response indiscriminately just because all scores happen to be positive, losing the useful RELATIVE signal of which responses were better or worse than typical',
      bodyKn: '• ಒಂದೂ simplified RLHF advantage A = Reward - Baseline, Baseline ಇತ್ತೀಚಿನ rewards ಯ ಒಂದೂ running average -- ಇತ್ತೀಚಿನ ಸರಾಸರಿ ಗಿಂತ ಹೆಚ್ಚಿನ score ಪಡೆದ response positive advantage ಪಡೆಯುತ್ತದೆ, ಸರಾಸರಿ ಗಿಂತ ಕಡಿಮೆ negative advantage ಪಡೆಯುತ್ತದೆ\n• ಈ baseline ಮುಖ್ಯ ಏಕೆಂದರೆ raw rewards ಅಪೂರ್ವವಾಗಿ ಶೂನ್ಯದಲ್ಲಿ ಕೇಂದ್ರೀಕೃತವಾಗಿದೆ -- baseline ಕಳೆಯದೆ, ಒಂದೂ optimizer ಎಲ್ಲಾ scores positive ಆಗಿದ್ದಕ್ಕೆ ಮಾತ್ರ ಪ್ರತಿಯೊಂದೂ response ಅನ್ನೂ ವಿವೇಚನೆಯಿಲ್ಲದೆ reinforce ಮಾಡಬಹುದಿತ್ತು' } },
    { type: 'concept', data: {
      headingEn: 'Why Response Generation Uses Sampling During PPO', headingKn: 'PPO ಸಮಯದಲ್ಲಿ Response Generation ಏಕೆ Sampling ಬಳಸುತ್ತದೆ',
      bodyEn: 'The same generate_response() sampling mechanism verified in Module 190 Part 3 is reused for PPO rollouts -- sampling (not greedy argmax) is essential here specifically because PPO needs the policy to genuinely EXPLORE different possible responses to the same prompt across episodes, so the reward model can reveal which less-obvious outputs might actually deserve higher reward.',
      bodyKn: 'Module 190 Part 3 ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ generate_response() sampling ಕಾರ್ಯವಿಧಾನ PPO rollouts ಗೆ ಮರುಬಳಸಲಾಗುತ್ತದೆ -- sampling (greedy argmax ಅಲ್ಲ) ಇಲ್ಲಿ ನಿರ್ದಿಷ್ಟವಾಗಿ ಅಗತ್ಯ ಏಕೆಂದರೆ PPO ಗೆ policy ಅದೇ prompt ಗೆ episodes ಆದ್ಯಂತ ನಿಜವಾಗಿ ಭಿನ್ನ ಸಾಧ್ಯ responses EXPLORE ಮಾಡಬೇಕು.' } },
    { type: 'concept', data: {
      headingEn: 'What Part 3 Adds', headingKn: 'Part 3 ಏನನ್ನೂ ಸೇರಿಸುತ್ತದೆ',
      bodyEn: 'Part 2 built and genuinely verified the KL-drift measurement and the PPO clipping mechanics. Part 3 assembles the full pipeline -- training the reward model, initializing policy and reference from the SFT checkpoint, running PPO episodes, and genuinely comparing SFT-model vs RLHF-policy reward scores -- while honestly discussing reward hacking and the gap between this educational NumPy demo and production PPO.',
      bodyKn: 'Part 2 KL-drift measurement ಮತ್ತೆ PPO clipping mechanics ಅನ್ನೂ ನಿರ್ಮಿಸಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು. Part 3 ಪೂರ್ಣ pipeline ಜೋಡಿಸುತ್ತದೆ -- reward model train ಮಾಡಿ, SFT checkpoint ಇಂದ policy ಮತ್ತೆ reference initialize ಮಾಡಿ, PPO episodes ಚಲಾಯಿಸಿ, ಮತ್ತೆ SFT-model vs RLHF-policy reward scores ಅನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Why Both Models Must Be Evaluated on the Same Sequence', headingKn: 'ಎರಡೂ Models ಕೂಡ ಅದೇ Sequence ಮೇಲೆ ಏಕೆ Evaluate ಆಗಬೇಕು',
      bodyEn: 'compute_kl_divergence() genuinely required policy_logits and ref_logits computed from the SAME sample_tokens input -- KL divergence is only meaningful as a comparison of two distributions OVER THE SAME EVENT SPACE (here, next-token predictions given the identical context), not a comparison across different inputs.',
      bodyKn: 'compute_kl_divergence() ಗೆ ನಿಜವಾಗಿ ಅದೇ sample_tokens input ಇಂದ ಲೆಕ್ಕಹಾಕಿದ policy_logits ಮತ್ತೆ ref_logits ಬೇಕು -- KL divergence ಅದೇ EVENT SPACE ಮೇಲೆ ಎರಡೂ distributions ಯ ಹೋಲಿಕೆ ಆಗಿ ಮಾತ್ರ ಅರ್ಥ ಹೊಂದಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was KL(policy, reference) immediately after copy_model_weights()?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: copy_model_weights() ನಂತರ ತಕ್ಷಣ KL(policy, reference) ಏನಾಗಿತ್ತು?',
        opts: ['A small positive number like 0.05', 'Exactly 0.00000000', 'Undefined / NaN', 'Always 1.0'], correct: 1,
        optsKn: ['0.05 ನಂತೆ ಒಂದೂ ಚಿಕ್ಕ positive ಸಂಖ್ಯೆ', 'ನಿಖರವಾಗಿ 0.00000000', 'Undefined / NaN', 'ಯಾವಾಗಲೂ 1.0'] },
      { q: 'Genuinely confirmed: after a genuine weight perturbation to the policy, what did KL become?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: policy ಗೆ ಒಂದೂ ನಿಜ weight perturbation ನಂತರ, KL ಏನಾಯಿತು?',
        opts: ['Still exactly 0', 'A measurably positive value, 0.010776', 'Negative', 'Exactly 1.0'], correct: 1,
        optsKn: ['ಇನ್ನೂ ನಿಖರವಾಗಿ 0', 'ಅಳವು ಮಾಡಬಹುದಾದಷ್ಟೂ positive value, 0.010776', 'Negative', 'ನಿಖರವಾಗಿ 1.0'] },
      { q: 'Genuinely confirmed: for ratio=1.8, advantage=2, epsilon=0.2, what did the PPO clipped objective compute to?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ratio=1.8, advantage=2, epsilon=0.2 ಗೆ, PPO clipped objective ಏನಿಗೆ ಲೆಕ್ಕಹಾಯಿತು?',
        opts: ['3.60 (unclipped value)', '2.40 (clipped, using clip(1.8)=1.2)', '0.0', '-2.40'], correct: 1,
        optsKn: ['3.60 (unclipped value)', '2.40 (clipped, clip(1.8)=1.2 ಬಳಸಿ)', '0.0', '-2.40'] },
      { q: 'Genuinely confirmed: for ratio=0.4, advantage=-2, what did the PPO clipped objective compute to, and why?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ratio=0.4, advantage=-2 ಗೆ, PPO clipped objective ಏನಿಗೆ ಲೆಕ್ಕಹಾಯಿತು, ಮತ್ತೆ ಏಕೆ?',
        opts: ['-0.80, the unclipped value', '-1.60, because min() selects the more negative of the unclipped and clipped values', '0.0, negative advantages are ignored', '1.60, a sign error'], correct: 1,
        optsKn: ['-0.80, unclipped value', '-1.60, ಏಕೆಂದರೆ min() unclipped ಮತ್ತೆ clipped values ನಲ್ಲಿ ಹೆಚ್ಚು-negative ಆದದ್ದನ್ನೂ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ', '0.0, negative advantages ignore ಮಾಡಲಾಗುತ್ತವೆ', '1.60, ಒಂದೂ sign error'] },
      { q: 'What is the key structural difference between PPO clipping and the KL penalty?', qKn: 'PPO clipping ಮತ್ತೆ KL penalty ನಡುವಿನ ಮುಖ್ಯ ರಚನಾತ್ಮಕ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They are the same mechanism', 'PPO clipping compares new vs old policy for single-step bounds; KL penalty compares current policy vs the frozen SFT reference for long-term drift', 'KL penalty only applies to the reward model', 'PPO clipping requires no reference model at all, ever'], correct: 1,
        optsKn: ['ಅವೂ ಅದೇ ಕಾರ್ಯವಿಧಾನ', 'PPO clipping single-step bounds ಗೆ ಹೊಸ vs ಹಳೆಯ policy ಹೋಲಿಸುತ್ತದೆ; KL penalty ದೂರಕಾಲಿಕ drift ಗೆ ನಿಖರವಾದ policy vs frozen SFT reference ಹೋಲಿಸುತ್ತದೆ', 'KL penalty ಕೇವಲ reward model ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ', 'PPO clipping ಗೆ ಯಾವುದೇ reference model ಬೇಡವೇ ಬೇಡ, ಯಾವಾಗಲೂ'] },
    ] } },
  ],
};
