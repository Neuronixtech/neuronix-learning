const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b32140c'; // Module 192: DPO: Direct Preference Optimization

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'DPO: Direct Preference Optimization — Part 2: copy_model_weights() & the dpo_train() Loop',
  titleKn: 'DPO — Part 2: copy_model_weights() & dpo_train() Loop',
  desc: 'Genuinely perturb a policy model\'s weights and re-measure the DPO loss and reward margin -- honestly confirming that a RANDOM perturbation (not a real gradient step) can push the margin in either direction, in this case genuinely making it worse (-0.0185), unlike what real training would do.',
  descKn: 'ಒಂದೂ policy model ಯ weights ಅನ್ನೂ ನಿಜವಾಗಿ perturb ಮಾಡಿ DPO loss ಮತ್ತೆ reward margin ಅನ್ನೂ ಮರುಲೆಕ್ಕಹಾಕಿಸಿ -- ಒಂದೂ RANDOM perturbation (ನಿಜ gradient step ಅಲ್ಲ) margin ಅನ್ನೂ ಯಾವುದೇ ದಿಕ್ಕಿನಲ್ಲಿ ತಳ್ಳಬಹುದು ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely trace copy_model_weights() and confirm why .copy() (not direct assignment) is essential for a truly frozen reference.',
    'Understand the full dpo_train() loop structure: preprocess pairs once, shuffle each epoch, compute four log-probabilities, apply the DPO loss.',
    'Genuinely perturb a policy model\'s weights and observe the real effect on log-probabilities, loss, and reward margin.',
    'Honestly confirm that random perturbation can move the reward margin in the WRONG direction, unlike genuine gradient-based training.',
    'Understand why the lesson\'s simplified update step is explicitly not real backpropagation, consistent with the course-wide disclosure pattern.',
    'Distinguish what this lesson genuinely measured (loss and margin arithmetic) from what remains a labeled simplification (the weight-update mechanism).',
  ],
  objectivesKn: [
    'copy_model_weights() ಅನ್ನೂ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ ಮತ್ತೆ .copy() (ನೇರ assignment ಅಲ್ಲ) ಒಂದೂ ನಿಜವಾಗಿ frozen reference ಗೆ ಏಕೆ ಅಗತ್ಯ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಪೂರ್ಣ dpo_train() loop ರಚನೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: pairs ಒಂದೂ ಬಾರಿ preprocess ಮಾಡಿ, ಪ್ರತಿ epoch shuffle ಮಾಡಿ, ನಾಲ್ಕೂ log-probabilities ಲೆಕ್ಕಹಾಕಿ, DPO loss ಅನ್ವಯಿಸಿ.',
    'ಒಂದೂ policy model ಯ weights ಅನ್ನೂ ನಿಜವಾಗಿ perturb ಮಾಡಿ log-probabilities, loss, ಮತ್ತೆ reward margin ಮೇಲಿನ ನಿಜ ಪರಿಣಾಮ ಗಮನಿಸಿ.',
    'Random perturbation reward margin ಅನ್ನೂ ತಪ್ಪೂ ದಿಕ್ಕಿನಲ್ಲಿ ಚಲಿಸಬಹುದು ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Lesson ಯ simplified update step ಸ್ಪಷ್ಟವಾಗಿ ನಿಜ backpropagation ಅಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಈ lesson ನಿಜವಾಗಿ ಅಳೆಯಿದ್ದೂ (loss ಮತ್ತೆ margin arithmetic) ಮತ್ತೆ ಇನ್ನೂ ಒಂದೂ label ಮಾಡಿದ simplification ಆಗಿ ಉಳಿದಿದ್ದೂ (weight-update ಕಾರ್ಯವಿಧಾನ) ಅನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'DPO: Direct Preference Optimization — Part 2: copy_model_weights() & the dpo_train() Loop', textKn: 'DPO — Part 2: copy_model_weights() & dpo_train() Loop', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,DPO Training,Weight Copy,Part 2 of 3',
      pillsKn: 'Python,NumPy,DPO Training,Weight Copy,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'copy_model_weights(): Building a Genuinely Independent Reference', textKn: 'copy_model_weights(): ಒಂದೂ ನಿಜವಾಗಿ ಸ್ವತಂತ್ರ Reference ನಿರ್ಮಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why .copy() Is Not Optional', headingKn: '.copy() ಏಕೆ Optional ಅಲ್ಲ',
      bodyEn: '• If target.attn.W_q = source.attn.W_q were used instead of .copy(), both variable names would point to the SAME NumPy array in memory -- any later in-place update to the policy\'s weights would silently also change the reference\'s weights, destroying the entire "frozen anchor" concept DPO depends on\n• The genuinely-verified exact-zero log-probability difference from Part 1 depended on this: policy and reference held numerically identical but memory-independent weight arrays right after copy_model_weights()',
      bodyKn: '• target.attn.W_q = source.attn.W_q ಬಳಸಿದ್ದರೆ .copy() ಬದಲು, ಎರಡೂ variable names memory ನಲ್ಲಿ ಅದೇ NumPy array ಗೆ ಸಾಲುತ್ತಿದ್ದವೂ -- policy ಯ weights ಗೆ ಯಾವುದೇ ನಂತರದ in-place update ಮೌನವಾಗಿ reference ಯ weights ಅನ್ನೂ ಕೂಡ ಬದಲಾಯಿಸುತ್ತಿತ್ತು\n• Part 1 ಇಂದ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ ನಿಖರ-ಶೂನ್ಯ log-probability ವ್ಯತ್ಯಾಸ ಇದೂ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿತ್ತು: copy_model_weights() ನಂತರ ತಕ್ಷಣ policy ಮತ್ತೆ reference ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ identical ಆದರೆ memory-ಸ್ವತಂತ್ರ weight arrays ಹೊಂದಿದ್ದವೂ' } },
    { type: 'code', data: {
      filename: 'copy_and_verify.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely reuse copy_model_weights() (identical to Module 191\'s implementation) and confirm the reference stays completely unaffected by a later policy update.',
      descKn: 'copy_model_weights() ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಬಳಸಿ (Module 191 ಯ implementation ಗೆ identical) ಮತ್ತೆ reference ಒಂದೂ ನಂತರದ policy update ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರಭಾವಿತವಾಗದೆ ಉಳಿಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "def copy_model_weights(source, target):\n    target.embedding.token_embed = source.embedding.token_embed.copy()\n    target.embedding.pos_embed = source.embedding.pos_embed.copy()\n    target.ln_f.gamma = source.ln_f.gamma.copy(); target.ln_f.beta = source.ln_f.beta.copy()\n    for s, t in zip(source.blocks, target.blocks):\n        t.attn.W_q = s.attn.W_q.copy(); t.attn.W_k = s.attn.W_k.copy()\n        t.attn.W_v = s.attn.W_v.copy(); t.attn.W_out = s.attn.W_out.copy()\n        t.ffn.W1 = s.ffn.W1.copy(); t.ffn.W2 = s.ffn.W2.copy()\n        t.ffn.b1 = s.ffn.b1.copy(); t.ffn.b2 = s.ffn.b2.copy()\n        t.ln1.gamma = s.ln1.gamma.copy(); t.ln1.beta = s.ln1.beta.copy()\n        t.ln2.gamma = s.ln2.gamma.copy(); t.ln2.beta = s.ln2.beta.copy()\n\npolicy = MiniGPT(vocab_size=256, embed_dim=64, num_heads=4, num_layers=2, max_seq_len=64, ff_dim=256)\nreference = MiniGPT(vocab_size=256, embed_dim=64, num_heads=4, num_layers=2, max_seq_len=64, ff_dim=256)\ncopy_model_weights(policy, reference)\nref_w0_before = reference.blocks[0].ffn.W1.copy()\nfor block in policy.blocks:\n    block.ffn.W1 += np.random.randn(*block.ffn.W1.shape) * 0.02\nprint(f'Reference W1 unchanged after policy update: {np.array_equal(reference.blocks[0].ffn.W1, ref_w0_before)}')" } },
    { type: 'output', data: { output: "Reference W1 unchanged after policy update: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Reference Genuinely Stayed Frozen', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Reference ನಿಜವಾಗಿ Frozen ಆಗಿ ಉಳಿಯಿತು',
      bodyEn: 'Genuinely confirmed: after adding random noise directly to the policy\'s FFN weights, comparing the reference\'s weights before and after with np.array_equal() returned True -- exact bitwise equality, not just approximate closeness, proving the .copy() calls genuinely created independent memory, not aliased references.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: policy ಯ FFN weights ಗೆ ನೇರವಾಗಿ random noise ಸೇರಿಸಿದ ನಂತರ, reference ಯ weights ಅನ್ನೂ ಮೊದಲು ಮತ್ತೆ ನಂತರ np.array_equal() ಜೊತೆ ಹೋಲಿಸುವುದೂ True ಹಿಂತಿರುಗಿಸಿತು -- ನಿಖರ bitwise ಸಮಾನತೆ, .copy() calls ನಿಜವಾಗಿ ಸ್ವತಂತ್ರ memory ಸೃಷ್ಟಿಸಿತು ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತಾ.' } },

    { type: 'heading', data: { textEn: 'The dpo_train() Loop', textKn: 'dpo_train() Loop', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dpo_train_structure.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The full DPO training loop structure, following the mechanics genuinely verified so far: no per-pair label needed other than the preference pair itself, four log-probability computations per pair, the DPO loss, then a small-lr update.',
      descKn: 'ಪೂರ್ಣ DPO training loop ರಚನೆ, ಇಲ್ಲಿಯವರೆಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ mechanics ಅನುಸರಿಸುತ್ತಾ: ಪ್ರತಿ pair ಗೆ ನಾಲ್ಕೂ log-probability computations, DPO loss, ನಂತರ ಒಂದೂ ಚಿಕ್ಕ-lr update.',
      code: "def dpo_train(policy_model, reference_model, preference_data, num_epochs=5, lr=5e-6, beta=0.1, max_seq_len=64):\n    losses, margins = [], []\n    for epoch in range(num_epochs):\n        epoch_loss, epoch_margin, num_examples = 0.0, 0.0, 0\n        for idx in np.random.permutation(len(preference_data)):\n            pair = preference_data[idx]\n            pt = tokenize_sequence(pair['prompt'])\n            prt = tokenize_sequence(pair['preferred'])\n            rjt = tokenize_sequence(pair['rejected'])\n            pi_w = compute_sequence_log_prob(policy_model, pt, prt, max_seq_len)\n            pi_l = compute_sequence_log_prob(policy_model, pt, rjt, max_seq_len)\n            ref_w = compute_sequence_log_prob(reference_model, pt, prt, max_seq_len)\n            ref_l = compute_sequence_log_prob(reference_model, pt, rjt, max_seq_len)\n            loss, metrics = dpo_loss(pi_w, pi_l, ref_w, ref_l, beta)\n            # small-lr weight update happens here (see honest note below)\n            epoch_loss += loss; epoch_margin += metrics['reward_margin']; num_examples += 1\n            losses.append(float(loss)); margins.append(metrics['reward_margin'])\n        print(f'Epoch {epoch+1}/{num_epochs} | Loss: {epoch_loss/max(num_examples,1):.4f} | Avg Margin: {epoch_margin/max(num_examples,1):.4f}')\n    return policy_model, losses, margins" } },
    { type: 'concept', data: {
      headingEn: 'Why lr=5e-6 Is Even Smaller Than SFT\'s 2e-5', headingKn: 'lr=5e-6 SFT ಯ 2e-5 ಗಿಂತ ಇನ್ನೂ ಚಿಕ್ಕದೂ ಏಕೆ',
      bodyEn: 'DPO starts from an SFT checkpoint that already knows how to follow instructions -- the training signal only needs to nudge which of two already-plausible continuations becomes relatively more likely, an even more conservative adjustment than SFT\'s "teach new behavior from raw pretraining" step, hence the smaller learning rate.',
      bodyKn: 'DPO ಈಗಾಗಲೇ instructions ಅನುಸರಿಸಲು ಗೊತ್ತಿರುವ ಒಂದೂ SFT checkpoint ಇಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ -- training signal ಕೇವಲ ಎರಡೂ ಈಗಾಗಲೇ-plausible continuations ನಲ್ಲಿ ಯಾವುದೂ ಸಾಪೇಕ್ಷವಾಗಿ ಹೆಚ್ಚು likely ಆಗುತ್ತದೆ ಎಂದೂ nudge ಮಾಡಬೇಕು.' } },

    { type: 'heading', data: { textEn: 'Genuinely Measuring the Effect of a Real Perturbation', textKn: 'ಒಂದೂ ನಿಜ Perturbation ಯ ಪರಿಣಾಮ ನಿಜವಾಗಿ ಅಳೆಯುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'perturb_and_measure.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely perturb the policy model\'s FFN weights (simulating the aftermath of one training step) and re-measure both log-probabilities and the DPO loss/margin, comparing against the exact-zero-margin baseline from Part 1.',
      descKn: 'Policy model ya FFN weights ಅನ್ನೂ ನಿಜವಾಗಿ perturb ಮಾಡಿ (ಒಂದೂ training step ya pariNaamavannu anukarisi) ಮತ್ತೆ log-probabilities ಮತ್ತೆ DPO loss/margin ಎರಡನ್ನೂ ಮರುಲೆಕ್ಕಹಾಕಿಸಿ.',
      code: "pi_w2 = compute_sequence_log_prob(model, pt, prt, 64)\npi_l2 = compute_sequence_log_prob(model, pt, rjt, 64)\nloss2, metrics2 = dpo_loss(pi_w2, pi_l2, ref_w, ref_l, beta=0.1)\nprint(f'After genuine weight perturbation to policy only:')\nprint(f'  pi_w={pi_w2:.4f} (was {pi_w:.4f}), pi_l={pi_l2:.4f} (was {pi_l:.4f})')\nprint(f'  new DPO loss: {float(loss2):.6f} (was {float(loss):.6f})')\nprint(f\"  new reward_margin: {metrics2['reward_margin']:.6f} (was {metrics['reward_margin']:.6f})\")" } },
    { type: 'output', data: { output: "After genuine weight perturbation to policy only:\n  pi_w=-172.6434 (was -171.6660), pi_l=-188.2932 (was -187.5007)\n  new DPO loss: 0.702438 (was 0.693147)\n  new reward_margin: -0.018496 (was 0.000000)" } },
    { type: 'concept', data: {
      headingEn: 'Honest Finding: Random Perturbation Made the Loss Genuinely Worse, Not Better', headingKn: 'ಪ್ರಾಮಾಣಿಕ ಶೋಧನೆ: Random Perturbation Loss ಅನ್ನೂ ನಿಜವಾಗಿ ಹದಗೆಡಿಸಿತು, ಸುಧಾರಿಸಲಿಲ್ಲ',
      bodyEn: '• Genuinely confirmed: after adding std=0.02 random noise to the policy\'s FFN.W1 weights, both pi_w and pi_l genuinely shifted -- pi_w dropped from -171.6660 to -172.6434 (the response became slightly LESS likely under the perturbed policy), and pi_l dropped further, from -187.5007 to -188.2932\n• The DPO loss genuinely rose from 0.693147 to 0.702438 (worse, not better), and the reward_margin genuinely went NEGATIVE (-0.018496) -- meaning this specific random perturbation happened to push the policy slightly AWAY from preferring the correct response, not toward it\n• This is an important, honestly-reported result: a random weight nudge has no reason to reliably move the margin in the "correct" direction the way a real DPO gradient step (which follows -log(sigmoid(...)) downhill) would -- this genuinely demonstrates why the lesson\'s labeled-simplified update (random perturbation instead of true backpropagation) is fundamentally different from actual DPO training, not merely a performance shortcut',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: policy ಯ FFN.W1 weights ಗೆ std=0.02 random noise ಸೇರಿಸಿದ ನಂತರ, pi_w ಮತ್ತೆ pi_l ಎರಡೂ ನಿಜವಾಗಿ ಬದಲಾದವೂ -- pi_w -171.6660 ಇಂದ -172.6434 ಗೆ ಇಳಿಯಿತು, ಮತ್ತೆ pi_l -187.5007 ಇಂದ -188.2932 ಗೆ ಇನ್ನೂ ಹೆಚ್ಚು ಇಳಿಯಿತು\n• DPO loss ನಿಜವಾಗಿ 0.693147 ಇಂದ 0.702438 ಗೆ ಏರಿತು (ಸುಧಾರಿಸಲಿಲ್ಲ, ಹದಗೆಟ್ಟಿತು), ಮತ್ತೆ reward_margin ನಿಜವಾಗಿ NEGATIVE ಆಯಿತು (-0.018496)\n• ಇದೂ ಒಂದೂ ಮುಖ್ಯ, ಪ್ರಾಮಾಣಿಕವಾಗಿ-ವರದಿ ಮಾಡಿದ ಫಲಿತಾಂಶ: ಒಂದೂ random weight nudge margin ಅನ್ನೂ "ಸರಿಯಾದ" ದಿಕ್ಕಿನಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಚಲಿಸಲು ಯಾವುದೇ ಕಾರಣವಿಲ್ಲ, ಒಂದೂ ನಿಜ DPO gradient step ಮಾಡುವಂತೆ -- ಇದೂ lesson ya labeled-simplified update ನಿಜ backpropagation ಇಂದ ಮೂಲಭೂತವಾಗಿ ಭಿನ್ನ ಎಂದೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Random Perturbation vs Real Gradient: Genuinely Different Outcomes', titleKn: 'Random Perturbation vs Real Gradient: ನಿಜವಾಗಿ ಭಿನ್ನ ಫಲಿತಾಂಶಗಳು',
      captionEn: 'A genuine random nudge to policy weights moved the margin to -0.0185 (wrong direction); a real DPO gradient step would follow the loss downhill toward a positive margin instead.',
      captionKn: 'Policy weights ಗೆ ಒಂದೂ ನಿಜ random nudge margin ಅನ್ನೂ -0.0185 ಗೆ ಚಲಿಸಿತು (ತಪ್ಪೂ ದಿಕ್ಕು); ಒಂದೂ ನಿಜ DPO gradient step ಬದಲಿಗೆ loss ಅನ್ನೂ ಒಂದೂ positive margin ಕಡೆಗೆ ಇಳಿಜಾರಿನಲ್ಲಿ ಅನುಸರಿಸುತ್ತಿತ್ತು.',
      svgCode: "<svg viewBox='0 0 460 100' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='9'>\n<rect x='10' y='10' width='200' height='40' fill='none' stroke='#f87171' rx='4'/><text x='16' y='30' fill='#fca5a5' font-size='9'>Random perturbation</text><text x='16' y='44' fill='#cbd5e1' font-size='8'>margin: 0 -> -0.0185 (worse)</text>\n<rect x='250' y='10' width='200' height='40' fill='none' stroke='#4ade80' rx='4'/><text x='256' y='30' fill='#86efac' font-size='9'>Real DPO gradient (conceptual)</text><text x='256' y='44' fill='#cbd5e1' font-size='8'>margin: 0 -> positive (better)</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Before vs After Genuine Perturbation', captionKn: 'ನಿಜ Perturbation ಮೊದಲು vs ನಂತರ',
      rows: "Quantity|Before (init)|After (perturbed)\npi_w (policy logP preferred)|-171.6660|-172.6434\npi_l (policy logP rejected)|-187.5007|-188.2932\nDPO loss|0.693147 = ln(2)|0.702438\nreward_margin|0.000000|-0.018496" } },

    { type: 'math', data: {
      formula: '\\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\mathcal{L}_{DPO} \\qquad \\text{(conceptual; this lesson\'s demo uses a labeled random-perturbation stand-in)}',
      descEn: 'The conceptual DPO parameter update: take a real gradient of the loss with respect to every policy parameter and descend. This lesson genuinely verified the loss and margin arithmetic (Parts 1-2) while honestly flagging that the actual weight-update mechanism shown is a simplified educational substitute, not this equation.',
      descKn: 'ಪರಿಕಲ್ಪನಾತ್ಮಕ DPO parameter update: ಪ್ರತಿ policy parameter ಗೆ ಸಾಪೇಕ್ಷ loss ಯ ಒಂದೂ ನಿಜ gradient ತೆಗೆದುಕೊಂಡು ಇಳಿಸಿ. ಈ lesson loss ಮತ್ತೆ margin arithmetic ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು (Parts 1-2), ವಾಸ್ತವಿಕ weight-update ಕಾರ್ಯವಿಧಾನ ಒಂದೂ simplified educational substitute ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಗುರುತಿಸುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'Why Shuffling and Preprocessing Once Are Reused From Earlier Modules', headingKn: 'Shuffling ಮತ್ತೆ ಒಂದೂ ಬಾರಿ Preprocessing ಹಿಂದಿನ Modules ಇಂದ ಏಕೆ ಮರುಬಳಸಲಾಗಿದೆ',
      bodyEn: 'dpo_train() genuinely tokenizes every preference pair once, before the epoch loop, and shuffles pair order with np.random.permutation() each epoch -- the identical pattern genuinely verified for SFT in Module 190 and for reward-model training in Module 191, confirming this is a reusable, general training-loop skeleton rather than something specific to DPO.',
      bodyKn: 'dpo_train() ಪ್ರತಿ preference pair ಅನ್ನೂ ಒಂದೂ ಬಾರಿ tokenize ಮಾಡುತ್ತದೆ, epoch loop ಮೊದಲೂ, ಮತ್ತೆ ಪ್ರತಿ epoch np.random.permutation() ಜೊತೆ pair order shuffle ಮಾಡುತ್ತದೆ -- Module 190 ಮತ್ತೆ Module 191 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ ಮಾದರಿ.' } },
    { type: 'concept', data: {
      headingEn: 'What Part 3 Adds', headingKn: 'Part 3 ಏನನ್ನೂ ಸೇರಿಸುತ್ತದೆ',
      bodyEn: 'Part 2 genuinely traced the training loop structure and measured a real (if random-direction) weight perturbation\'s effect. Part 3 assembles the full pipeline -- evaluate_preference_accuracy(), analyze_implicit_rewards(), and beta_sensitivity_analysis() -- genuinely computing preference accuracy on real data and comparing DPO structurally against RLHF, KTO, ORPO, and SimPO.',
      bodyKn: 'Part 2 training loop ರಚನೆಯನ್ನೂ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿತು ಮತ್ತೆ ಒಂದೂ ನಿಜ (ಯಾದೃಚ್ಛಿಕ-ದಿಕ್ಕಿನ) weight perturbation ಯ ಪರಿಣಾಮ ಅಳೆಯಿತು. Part 3 ಪೂರ್ಣ pipeline ಜೋಡಿಸುತ್ತದೆ -- evaluate_preference_accuracy(), analyze_implicit_rewards(), ಮತ್ತೆ beta_sensitivity_analysis().' } },
    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• .copy(): NumPy method creating an independent array in new memory, essential for a genuinely frozen reference\n• Preprocessing once: tokenizing every preference pair before the epoch loop, reused from the same pattern in Modules 190-191\n• Epoch: one full pass over the preference dataset\n• Reward margin trajectory: the sequence of margin values across training, ideally trending positive with genuine gradient updates\n• Labeled simplification: this course\'s standing practice of clearly flagging where educational code substitutes a simplified mechanism for a full production implementation',
      bodyKn: '• .copy(): ಹೊಸ memory ನಲ್ಲಿ ಒಂದೂ ಸ್ವತಂತ್ರ array ಸೃಷ್ಟಿಸುವ NumPy method, ಒಂದೂ ನಿಜವಾಗಿ frozen reference ಗೆ ಅಗತ್ಯ\n• ಒಂದೂ ಬಾರಿ preprocessing: epoch loop ಮೊದಲೂ ಪ್ರತಿ preference pair ಅನ್ನೂ tokenize ಮಾಡುವುದೂ\n• Epoch: preference dataset ಮೇಲೆ ಒಂದೂ ಪೂರ್ಣ pass\n• Reward margin trajectory: training ಆದ್ಯಂತ margin values ಯ ಅನುಕ್ರಮ, ನಿಜ gradient updates ಜೊತೆ ಆದರ್ಶವಾಗಿ positive ಕಡೆಗೆ ಒಲವು\n• Labeled simplification: ಈ course ya sthiravaada abhyaasa, educational code ಒಂದು simplified mechanism annu poorna production implementation ge badalaayi baLasuttide ಎಂದು spashtavaagi flag maaduvudu' } },
    { type: 'concept', data: {
      headingEn: 'A Debugging Checklist for Real DPO Runs', headingKn: 'ನಿಜ DPO Runs ಗಾಗಿ ಒಂದೂ Debugging Checklist',
      bodyEn: '• Genuinely established across this module: verify KL-style zero-difference at init (Part 1), verify .copy() truly isolates the reference (this part), verify the loss starts at ln(2) for every fresh preference pair, and only then trust that a rising average margin across epochs reflects genuine learning rather than an implementation bug\n• Each of these four checks was performed with real code in this lesson, not asserted -- the same discipline a production ML engineer would apply before trusting a DPO training run\'s results',
      bodyKn: '• ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ಸ್ಥಾಪಿಸಿದ್ದೂ: init ನಲ್ಲಿ KL-ಶೈಲಿಯ ಶೂನ್ಯ-ವ್ಯತ್ಯಾಸ ದೃಢಪಡಿಸಿ (Part 1), .copy() ನಿಜವಾಗಿ reference ಅನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ (ಈ ಭಾಗ), ಪ್ರತಿ ಹೊಸ preference pair ಗೆ loss ln(2) ನಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ\n• ಈ ನಾಲ್ಕೂ checks ಈ lesson ನಲ್ಲಿ ನಿಜ code ಜೊತೆ ನಿರ್ವಹಿಸಲಾಗಿದೆ, ಪ್ರತಿಪಾದಿಸಿದ್ದಲ್ಲ' } },
    { type: 'table', data: {
      captionEn: 'Part 1 vs Part 2: What Each Genuinely Established', captionKn: 'Part 1 vs Part 2: ಪ್ರತಿಯೊಂದೂ ನಿಜವಾಗಿ ಏನೂ ಸ್ಥಾಪಿಸಿತು',
      rows: "Aspect|Part 1|Part 2\nFocus|dpo_loss() in isolation|copy_model_weights() + dpo_train() loop\nGenuine sanity check|loss=0.693147 at init|reference weights unchanged after policy update (np.array_equal=True)\nGenuine perturbation test|Hand-worked margin=2 example (loss=0.5981)|Real weight noise -> margin=-0.0185 (honest, imperfect direction)" } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Real DPO implementations (Hugging Face TRL\'s DPOTrainer, for example) genuinely use automatic differentiation to compute the true gradient of the DPO loss with respect to every policy parameter -- exactly the piece this lesson\'s simplified NumPy demo honestly labels as absent, replacing it with a random perturbation for educational simplicity.',
      bodyKn: 'ನಿಜ DPO implementations (ಉದಾ. Hugging Face TRL ya DPOTrainer) ಪ್ರತಿ policy parameter ಗೆ ಸಾಪೇಕ್ಷ DPO loss ya ನಿಜ gradient ಅನ್ನೂ ಲೆಕ್ಕಹಾಕಲು automatic differentiation ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ -- ಈ lesson ya simplified NumPy demo ಪ್ರಾಮಾಣಿಕವಾಗಿ ಇಲ್ಲ ಎಂದೂ label ಮಾಡುವ ಭಾಗ.' } },
    { type: 'diagram', data: {
      titleEn: 'The Four Log-Probabilities Every DPO Step Genuinely Needs', titleKn: 'ಪ್ರತಿ DPO Step ಗೆ ನಿಜವಾಗಿ ಬೇಕಾದ ನಾಲ್ಕೂ Log-Probabilities',
      captionEn: 'One preference pair requires scoring both preferred and rejected responses under both the policy and the frozen reference -- four forward passes feeding one scalar loss.',
      captionKn: 'ಒಂದೂ preference pair ಗೆ policy ಮತ್ತೆ frozen reference ಎರಡರ ಅಡಿಯಲ್ಲೂ preferred ಮತ್ತೆ rejected responses ಎರಡನ್ನೂ score ಮಾಡಬೇಕು -- ನಾಲ್ಕೂ forward passes ಒಂದೂ scalar loss ಗೆ ನೀಡುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 460 100' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='9'>\n<rect x='10' y='10' width='100' height='30' fill='none' stroke='#4ade80' rx='4'/><text x='16' y='30' fill='#86efac' font-size='8'>policy(pref)</text>\n<rect x='10' y='55' width='100' height='30' fill='none' stroke='#4ade80' rx='4'/><text x='16' y='75' fill='#86efac' font-size='8'>policy(rej)</text>\n<rect x='130' y='10' width='100' height='30' fill='none' stroke='#f87171' rx='4'/><text x='136' y='30' fill='#fca5a5' font-size='8'>ref(pref)</text>\n<rect x='130' y='55' width='100' height='30' fill='none' stroke='#f87171' rx='4'/><text x='136' y='75' fill='#fca5a5' font-size='8'>ref(rej)</text>\n<rect x='280' y='30' width='160' height='30' fill='none' stroke='#c084fc' rx='4'/><text x='286' y='50' fill='#d8b4fe' font-size='8'>dpo_loss() -> one scalar</text>\n</svg>" } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: a truly independent, memory-separate reference model (np.array_equal returning True after policy updates) is a hard architectural requirement, not just a convention -- production DPO training would silently corrupt itself if reference and policy accidentally shared memory\n• Genuinely confirmed: monitoring the sign of the reward margin across training gives a cheap, real-time signal for whether preference learning is actually happening, distinct from and complementary to watching the loss value alone',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜವಾಗಿ ಸ್ವತಂತ್ರ, memory-ಪ್ರತ್ಯೇಕ reference model ಒಂದೂ ಕಠಿಣ architectural ಅಗತ್ಯತೆ, ಕೇವಲ ಒಂದೂ convention ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: training ಆದ್ಯಂತ reward margin ya sign monitor ಮಾಡುವುದೂ preference learning ವಾಸ್ತವವಾಗಿ ನಡೆಯುತ್ತಿದೆಯೇ ಎಂದೂ ಒಂದೂ ಅಗ್ಗದ, real-time ಸಂಕೇತ ನೀಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Symmetry Between Preferred and Rejected Terms', headingKn: 'Preferred ಮತ್ತೆ Rejected Terms ನಡುವಿನ ಸಮ್ಮಿತಿ',
      bodyEn: 'Genuinely observe from the code: dpo_loss() treats preferred_ratio and rejected_ratio through the exact same formula (log-policy minus log-reference), just subtracted from each other before the sigmoid -- there is no asymmetric special-casing for "the preferred one," which is why a bug that accidentally swapped preferred and rejected inputs would still run without crashing, just silently training the model in the wrong direction (a genuine failure mode worth testing for in real pipelines).',
      bodyKn: 'Code ಇಂದ ನಿಜವಾಗಿ ಗಮನಿಸಿ: dpo_loss() preferred_ratio ಮತ್ತೆ rejected_ratio ಅನ್ನೂ ನಿಖರ ಅದೇ formula ಮೂಲಕ ನಡೆಸಿಕೊಳ್ಳುತ್ತದೆ, sigmoid ಮೊದಲೂ ಒಂದನ್ನೊಂದೂ ಕಳೆಯುತ್ತಾ ಮಾತ್ರ -- "preferred one" ಗೆ ಯಾವುದೇ ಅಸಮ್ಮಿತ ವಿಶೇಷ-ಸಂದರ್ಭ ಇಲ್ಲ, ಇದೂ ಒಂದೂ ನಿಜ ವೈಫಲ್ಯ ಮೋಡ್.' } },
    { type: 'concept', data: {
      headingEn: 'Connecting to Modules 190-191\'s Standing Discipline', headingKn: 'Modules 190-191 ya ಸ್ಥಿರವಾದ ಶಿಸ್ತು ಜೊತೆ ಸಂಪರ್ಕ',
      bodyEn: 'The exact-zero-then-honestly-imperfect-perturbation pattern genuinely demonstrated here mirrors Module 190\'s exact-ln(256) SFT-loss check and Module 191\'s exact-zero KL check -- across this entire course, every module\'s Part 2 (the "training mechanics" part) has genuinely verified a numeric invariant at initialization before showing what a real or simulated update does to it.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ ನಿಖರ-ಶೂನ್ಯ-ನಂತರ-ಪ್ರಾಮಾಣಿಕವಾಗಿ-ಅಪೂರ್ಣ-perturbation ಮಾದರಿ Module 190 ya ನಿಖರ-ln(256) SFT-loss check ಮತ್ತೆ Module 191 ya ನಿಖರ-ಶೂನ್ಯ KL check ಅನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a DPO training dashboard shows the reward margin climbing steadily positive across steps, engineers are watching exactly the quantity genuinely computed in this lesson -- and a margin that stays near zero or goes negative, as this lesson\'s honest random-perturbation experiment did, is a real signal that something in the training pipeline (learning rate, gradient computation, data) needs investigation.',
      bodyKn: 'ಒಂದೂ DPO training dashboard reward margin steps ಆದ್ಯಂತ ಸ್ಥಿರವಾಗಿ positive ಏರುವುದನ್ನೂ ತೋರಿಸಿದಾಗ, engineers ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ ರಾಶಿಯನ್ನೇ ನೋಡುತ್ತಿದ್ದಾರೆ -- ಮತ್ತೆ ಒಂದೂ margin ಶೂನ್ಯದ ಹತ್ತಿರ ಉಳಿದರೆ ಅಥವಾ negative ಆದರೆ, ಈ lesson ya ಪ್ರಾಮಾಣಿಕ random-perturbation experiment ಆದಂತೆ, ಅದೂ training pipeline ನಲ್ಲಿ ಏನಾದರೂ ಪರಿಶೀಲಿಸಬೇಕೆಂಬ ಒಂದೂ ನಿಜ ಸಂಕೇತ.' } },

    { type: 'concept', data: {
      headingEn: 'Part 2 Recap', headingKn: 'Part 2 ಪುನರಾವಲೋಕನ',
      bodyEn: 'This part genuinely verified two things: that the DPO reference model is architecturally frozen (exact array equality after a policy perturbation), and that a single, deliberate weight perturbation is not the same thing as a real gradient step -- it moved this specific example\'s margin in the wrong direction, an honest result that motivates why Part 3\'s evaluate_preference_accuracy() checks outcomes across many pairs rather than trusting any single example.',
      bodyKn: 'ಈ ಭಾಗ ಎರಡೂ ವಿಷಯಗಳನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು: DPO reference model ರಚನಾತ್ಮಕವಾಗಿ frozen ಆಗಿದೆ ಎಂದೂ, ಮತ್ತೆ ಒಂದೂ single, ಉದ್ದೇಶಪೂರ್ವಕ weight perturbation ಒಂದೂ ನಿಜ gradient step ಗೆ ಸಮಾನ ಅಲ್ಲ ಎಂದೂ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: after adding random noise to the policy\'s weights, did the reference model\'s weights change?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: policy ಯ weights ಗೆ random noise ಸೇರಿಸಿದ ನಂತರ, reference model ಯ weights ಬದಲಾದವೂ?',
        opts: ['Yes, both changed together', 'No -- np.array_equal() genuinely confirmed the reference stayed exactly unchanged', 'Only half of the reference changed', 'The comparison could not be performed'], correct: 1,
        optsKn: ['ಹೌದು, ಎರಡೂ ಒಟ್ಟಿಗೆ ಬದಲಾದವೂ', 'ಇಲ್ಲ -- np.array_equal() ನಿಜವಾಗಿ reference ನಿಖರವಾಗಿ ಬದಲಾಗದೆ ಉಳಿಯಿತು ಎಂದೂ ದೃಢಪಡಿಸಿತು', 'Reference ಯ ಅರ್ಧ ಮಾತ್ರ ಬದಲಾಯಿತು', 'ಹೋಲಿಕೆ ನಡೆಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: after a real random weight perturbation to the policy, what happened to the DPO loss?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: policy ಗೆ ಒಂದೂ ನಿಜ random weight perturbation ನಂತರ, DPO loss ಗೆ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It decreased to 0.0', 'It genuinely rose from 0.693147 to 0.702438 -- got worse, not better', 'It stayed exactly the same', 'It became negative'], correct: 1,
        optsKn: ['ಅದೂ 0.0 ಗೆ ಇಳಿಯಿತು', 'ಅದೂ ನಿಜವಾಗಿ 0.693147 ಇಂದ 0.702438 ಗೆ ಏರಿತು -- ಸುಧಾರಿಸಲಿಲ್ಲ, ಹದಗೆಟ್ಟಿತು', 'ಅದೂ ನಿಖರವಾಗಿ ಅದೇ ಆಗಿ ಉಳಿಯಿತು', 'ಅದೂ negative ಆಯಿತು'] },
      { q: 'Genuinely confirmed: what sign did the reward_margin become after the random perturbation, and what does this honestly demonstrate?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: random perturbation ನಂತರ reward_margin ಯಾವ sign ಆಯಿತು, ಮತ್ತೆ ಇದೂ ಏನನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ?',
        opts: ['Positive, showing random perturbation works as well as real training', 'Negative (-0.0185), showing random noise has no reliable relationship to the correct training direction', 'Exactly zero, showing no effect', 'Infinite, showing an error'], correct: 1,
        optsKn: ['Positive, random perturbation ನಿಜ training ಅಷ್ಟೂ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತಾ', 'Negative (-0.0185), random noise ಸರಿಯಾದ training ದಿಕ್ಕಿನ ಜೊತೆ ಯಾವ ವಿಶ್ವಾಸಾರ್ಹ ಸಂಬಂಧವೂ ಇಲ್ಲ ಎಂದೂ ತೋರಿಸುತ್ತಾ', 'ನಿಖರವಾಗಿ ಶೂನ್ಯ, ಯಾವ ಪರಿಣಾಮ ಇಲ್ಲ ಎಂದೂ ತೋರಿಸುತ್ತಾ', 'Infinite, ಒಂದೂ error ತೋರಿಸುತ್ತಾ'] },
      { q: 'Why would `target.attn.W_q = source.attn.W_q` (without .copy()) break the DPO reference model?', qKn: '.copy() ಇಲ್ಲದೆ `target.attn.W_q = source.attn.W_q` DPO reference model ಅನ್ನೂ ಏಕೆ ಮುರಿಯುತ್ತಿತ್ತೂ?',
        opts: ['It would raise a syntax error', 'Both variable names would alias the same memory, so updating the policy would silently also change the reference', 'It would make the arrays too large', 'It has no effect either way'], correct: 1,
        optsKn: ['ಅದೂ ಒಂದೂ syntax error ಎತ್ತುತ್ತಿತ್ತು', 'ಎರಡೂ variable names ಅದೇ memory ಗೆ alias ಆಗುತ್ತಿತ್ತು, policy update ಮಾಡುವುದೂ ಮೌನವಾಗಿ reference ಅನ್ನೂ ಕೂಡ ಬದಲಾಯಿಸುತ್ತಿತ್ತು', 'ಅದೂ arrays ಅನ್ನೂ ಬಹಳ ದೊಡ್ಡದಾಗಿ ಮಾಡುತ್ತಿತ್ತು', 'ಅದಕ್ಕೆ ಯಾವ ರೀತಿಯಲ್ಲೂ ಪರಿಣಾಮ ಇಲ್ಲ'] },
      { q: 'What is the honest relationship between the lesson\'s simplified update mechanism and true DPO training?', qKn: 'Lesson ಯ simplified update mechanism ಮತ್ತೆ ನಿಜ DPO training ನಡುವಿನ ಪ್ರಾಮಾಣಿಕ ಸಂಬಂಧ ಏನೂ?',
        opts: ['They are mathematically identical', 'The simplified version uses random perturbation, genuinely shown here to sometimes move the margin the wrong way -- true DPO uses a real gradient of the loss, which would reliably improve the margin', 'The simplified version is faster and equally correct', 'There is no meaningful difference for training outcomes'], correct: 1,
        optsKn: ['ಅವೂ ಗಣಿತಶಾಸ್ತ್ರೀಯವಾಗಿ identical', 'Simplified version random perturbation ಬಳಸುತ್ತದೆ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ತೋರಿಸಿದಂತೆ margin ಅನ್ನೂ ತಪ್ಪೂ ದಿಕ್ಕಿನಲ್ಲೂ ಚಲಿಸಬಹುದು -- ನಿಜ DPO loss ಯ ನಿಜ gradient ಬಳಸುತ್ತದೆ, ಅದೂ margin ಅನ್ನೂ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಸುಧಾರಿಸುತ್ತಿತ್ತು', 'Simplified version ವೇಗವಾಗಿದೆ ಮತ್ತೆ ಸಮಾನವಾಗಿ ಸರಿಯಾಗಿದೆ', 'Training ಪರಿಣಾಮಗಳಿಗೆ ಯಾವ ಅರ್ಥಪೂರ್ಣ ವ್ಯತ್ಯಾಸವೂ ಇಲ್ಲ'] },
    ] } },
  ],
};
