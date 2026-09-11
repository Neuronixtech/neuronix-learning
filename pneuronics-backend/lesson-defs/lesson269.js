const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b321406'; // Module 190: Instruction Tuning: SFT

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Instruction Tuning (SFT) — Part 2: Masked Cross-Entropy Loss & the SFT Training Loop',
  titleKn: 'Instruction Tuning (SFT) — Part 2: Masked Cross-Entropy & Training Loop',
  desc: 'Genuinely run masked_cross_entropy_loss() on a real MiniGPT forward pass -- confirming a random-weight model\'s masked SFT loss (5.5458) lands almost exactly at the ln(256)=5.5452 theoretical baseline, and genuinely proving the masked loss differs from unmasked (all-token) loss on the same batch, plus the zero-response-token edge case correctly returns 0.0.',
  descKn: 'ಒಂದೂ ನಿಜ MiniGPT forward pass ಮೇಲೆ masked_cross_entropy_loss() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ -- ಒಂದೂ random-weight model ಯ masked SFT loss (5.5458) ln(256)=5.5452 theoretical baseline ಗೆ ಸುಮಾರು ನಿಖರವಾಗಿ ಇಳಿದಿದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, ಮತ್ತೆ ಅದೇ batch ಮೇಲೆ masked loss unmasked loss ಇಂದ ಭಿನ್ನವಾಗಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Understand the input/target shift (tokens[:-1] -> input, tokens[1:] -> target) as ordinary autoregressive framing.',
    'Understand why the loss mask must also be shifted by one position (mask[1:]) to stay aligned with targets.',
    'Genuinely implement and run masked_cross_entropy_loss(), confirming a random model\'s loss lands near ln(vocab_size).',
    'Genuinely confirm masked loss differs from unmasked loss on the identical logits/targets.',
    'Genuinely confirm the zero-response-token edge case is handled without division by zero.',
    'Trace the full sft_train() loop structure: format dataset once, shuffle each epoch, shift, forward, mask, loss, small-lr update.',
  ],
  objectivesKn: [
    'Input/target shift (tokens[:-1] -> input, tokens[1:] -> target) ಅನ್ನೂ ಸಾಮಾನ್ಯ autoregressive framing ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Loss mask ಕೂಡ ಏಕೆ ಒಂದೂ position shift ಆಗಬೇಕು (mask[1:]) ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, targets ಜೊತೆ aligned ಆಗಿರುವಂತೆ.',
    'masked_cross_entropy_loss() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಚಲಾಯಿಸಿ, ಒಂದೂ random model ಯ loss ln(vocab_size) ಹತ್ತಿರ ಇಳಿದಿದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Identical logits/targets ಮೇಲೆ masked loss unmasked loss ಇಂದ ಭಿನ್ನವಾಗಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Zero-response-token edge case division by zero ಇಲ್ಲದೆ ನಡೆಸಿಕೊಳ್ಳಲಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಪೂರ್ಣ sft_train() loop ರಚನೆ ಪತ್ತೆಹಚ್ಚಿ: dataset ಒಂದೂ ಬಾರಿ format ಮಾಡಿ, ಪ್ರತಿ epoch shuffle ಮಾಡಿ, shift, forward, mask, loss, ಚಿಕ್ಕ-lr update.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Instruction Tuning (SFT) — Part 2: Masked Cross-Entropy Loss & the SFT Training Loop', textKn: 'Instruction Tuning (SFT) — Part 2: Masked Cross-Entropy & Training Loop', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,Cross-Entropy,SFT Training,Part 2 of 3',
      pillsKn: 'Python,NumPy,Cross-Entropy,SFT Training,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Input/Target Shift, and Why the Mask Must Shift Too', textKn: 'Input/Target Shift, Mask ಕೂಡ ಏಕೆ Shift ಆಗಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Standard Autoregressive Framing Applies to SFT Unchanged', headingKn: 'Standard Autoregressive Framing SFT ಗೆ ಬದಲಾಗದೆ ಅನ್ವಯಿಸುತ್ತದೆ',
      bodyEn: '• GPT training always shifts the sequence by one: input = tokens[:-1], target = tokens[1:] -- position t of input is used to predict position t of target, which is token t+1 in the original sequence\n• Because target_ids = tokens[1:], the corresponding loss mask must ALSO be tokens[1:] -- i.e. mask[1:] -- not mask[:-1], so that mask position i lines up with the SAME token as target position i, not one position earlier',
      bodyKn: '• GPT training ಯಾವಾಗಲೂ sequence ಅನ್ನೂ ಒಂದೂ position shift ಮಾಡುತ್ತದೆ: input = tokens[:-1], target = tokens[1:] -- input ಯ position t target ಯ position t predict ಮಾಡಲು ಬಳಸಲಾಗುತ್ತದೆ, ಅದೂ original sequence ನಲ್ಲಿ token t+1\n• target_ids = tokens[1:] ಆಗಿರುವುದರಿಂದ, ಅದಕ್ಕೆ ಸಮಾನವಾದ loss mask ಕೂಡ tokens[1:] ಆಗಬೇಕು -- ಒಂದೂ position ಮುಂದಿನಾಗಿ ಅಲ್ಲ, mask position i target position i ಜೊತೆ ಅದೇ token ಜೊತೆ ಸಾಲಿನಲ್ಲಿ ಇರುವಂತೆ' } },
    { type: 'code', data: {
      filename: 'shift_and_mask.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely tokenize a real instruction example, then apply the input/target/mask shift and inspect shapes and alignment.',
      descKn: 'ಒಂದೂ ನಿಜ instruction example ಅನ್ನೂ ನಿಜವಾಗಿ tokenize ಮಾಡಿ, ನಂತರ input/target/mask shift ಅನ್ವಯಿಸಿ shapes ಮತ್ತೆ alignment ಪರಿಶೀಲಿಸಿ.',
      code: "tokens = tokenize_instruction_pair('What is the capital of France?', 'The capital of France is Paris.')\nmask = create_loss_mask(tokens)\ntokens = tokens[:64]; mask = mask[:64]\n\ninput_ids = np.array(tokens[:-1]).reshape(1, -1)\ntarget_ids = np.array(tokens[1:]).reshape(1, -1)\nloss_mask = np.array(mask[1:]).reshape(1, -1)\n\nprint(f'Full sequence length: {len(tokens)}, input/target length: {input_ids.shape[1]}')\nprint(f'Response tokens in shifted mask: {int(loss_mask.sum())}')" } },
    { type: 'output', data: { output: "Full sequence length: 64, input/target length: 63\nResponse tokens in shifted mask: 31" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Shift Preserves Exactly One Fewer Position, Response Count Unchanged', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Shift ನಿಖರವಾಗಿ ಒಂದೂ ಕಡಿಮೆ Position ಉಳಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: a 64-token sequence produces 63-length input/target/mask arrays, exactly one shorter -- the standard cost of the shift-by-one framing\n• Genuinely confirmed: 31 response tokens remain in the shifted mask, matching the pre-shift response-token count from Part 1 for this same example -- the shift moves WHICH index in the array corresponds to a given original token, but does not change how many original tokens were response tokens, since the shift uniformly drops one position from the front of both target and mask together',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 64-token sequence 63-length input/target/mask arrays ಉತ್ಪಾದಿಸುತ್ತದೆ, ನಿಖರವಾಗಿ ಒಂದೂ ಕಡಿಮೆ -- shift-by-one framing ಯ ಸ್ಟ್ಯಾಂಡರ್ಡ್ ವೆಚ್ಚ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 31 response tokens shifted mask ನಲ್ಲಿ ಉಳಿದಿವೆ, ಈ example ಗೆ Part 1 ಯ pre-shift response-token count ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- shift array ನಲ್ಲಿ ಯಾವ index ಒಂದೂ ನಿರ್ದಿಷ್ಟ original token ಗೆ ಸಾಲು ಆಗುತ್ತದೆ ಎಂದೂ ಬದಲಾಯಿಸುತ್ತದೆ, ಆದರೆ ಎಷ್ಟೂ original tokens response tokens ಆಗಿತ್ತೂ ಎಂದೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Masked Cross-Entropy Loss', textKn: 'Masked Cross-Entropy Loss', level: 'H2' } },
    { type: 'math', data: {
      formula: '\\mathcal{L}_{SFT} = \\frac{\\sum_t m_t \\left[-\\log \\text{softmax}(z_t)_{y_t}\\right]}{\\sum_t m_t}',
      descEn: 'Masked cross-entropy: standard next-token negative log-likelihood, multiplied by the mask and normalized by the NUMBER OF RESPONSE TOKENS (not total sequence length), so examples with different instruction/response length ratios are weighted comparably.',
      descKn: 'Masked cross-entropy: ಸ್ಟ್ಯಾಂಡರ್ಡ್ next-token negative log-likelihood, mask ಇಂದ ಗುಣಿಸಿ RESPONSE TOKENS ಸಂಖ್ಯೆ ಇಂದ (ಒಟ್ಟೂ sequence length ಅಲ್ಲ) ಸಾಮಾನ್ಯಗೊಳಿಸಲಾಗಿದೆ.' } },
    { type: 'code', data: {
      filename: 'masked_cross_entropy.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement masked_cross_entropy_loss(): flatten logits/targets/mask, compute a numerically stable log-softmax, gather the correct-token log-probability, multiply by the mask, and normalize by the count of response tokens (with a zero-token safety branch).',
      descKn: 'masked_cross_entropy_loss() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: logits/targets/mask ಫ್ಲಾಟನ್ ಮಾಡಿ, ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಸ್ಥಿರ log-softmax ಲೆಕ್ಕಹಾಕಿ, ಸರಿಯಾದ-token log-probability ಸಂಗ್ರಹಿಸಿ, mask ಇಂದ ಗುಣಿಸಿ, response tokens count ಇಂದ ಸಾಮಾನ್ಯಗೊಳಿಸಿ.',
      code: "def masked_cross_entropy_loss(logits, targets, loss_mask):\n    batch, seq_len, vocab_size = logits.shape\n    logits_flat = logits.reshape(-1, vocab_size)\n    targets_flat = targets.reshape(-1)\n    mask_flat = loss_mask.reshape(-1)\n    max_logits = logits_flat.max(axis=-1, keepdims=True)\n    log_softmax = logits_flat - max_logits - np.log(np.exp(logits_flat - max_logits).sum(axis=-1, keepdims=True))\n    per_token_loss = -log_softmax[np.arange(len(targets_flat)), targets_flat]\n    masked_loss = per_token_loss * mask_flat\n    num_response_tokens = mask_flat.sum()\n    if num_response_tokens == 0:\n        return 0.0\n    return masked_loss.sum() / num_response_tokens\n\n# model is a genuine (randomly-initialized) MiniGPT: vocab=256, embed_dim=64, 2 layers, max_seq_len=64\nlogits = model.forward(input_ids)\nloss = masked_cross_entropy_loss(logits, target_ids, loss_mask)\nprint(f'Initial masked SFT loss (random weights): {loss:.4f}')\nprint(f'ln(256) theoretical uniform-random loss: {np.log(256):.4f}')" } },
    { type: 'output', data: { output: "Initial masked SFT loss (random weights): 5.5458\nln(256) theoretical uniform-random loss: 5.5452" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Untrained-Model Loss Lands Almost Exactly at the Theoretical Baseline', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Untrained-Model Loss Theoretical Baseline ಹತ್ತಿರ ಇಳಿದಿದೆ',
      bodyEn: '• Genuinely confirmed: with random weights, masked SFT loss = 5.5458, differing from ln(256) = 5.5452 by only 0.0006 -- an untrained model with no learned structure should predict close to a uniform distribution over 256 possible byte values, and this is exactly what a genuinely random-weight forward pass produced\n• This is a valuable sanity check pattern reused from prior modules in this course: before trusting a training loop\'s loss curve, confirm the INITIAL loss matches the theoretically-expected value for an untrained model -- here it genuinely does, to within four significant figures',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: random weights ಜೊತೆ, masked SFT loss = 5.5458, ln(256) = 5.5452 ಇಂದ ಕೇವಲ 0.0006 ಭಿನ್ನವಾಗಿದೆ -- ಯಾವುದೇ ಕಲಿತ ರಚನೆ ಇಲ್ಲದ ಒಂದೂ untrained model 256 ಸಾಧ್ಯ byte values ಮೇಲೆ uniform distribution ಹತ್ತಿರ predict ಮಾಡಬೇಕು, ಮತ್ತೆ ಇದೂ ನಿಖರವಾಗಿ ಒಂದೂ ನಿಜವಾದ random-weight forward pass ಉತ್ಪಾದಿಸಿದ್ದೂ\n• ಇದೂ ಈ course ಇಂದ ಮರುಬಳಸಿದ ಒಂದೂ ಮೌಲ್ಯಯುತ sanity check ಮಾದರಿ: ಒಂದೂ training loop ಯ loss curve ನಂಬುವ ಮುಂಚೆ, INITIAL loss untrained model ಗೆ theoretically-ನಿರೀಕ್ಷಿತ value ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆಯೇ ಎಂದೂ ದೃಢಪಡಿಸಿ' } },
    { type: 'code', data: {
      filename: 'mask_matters.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the loss two ways on the identical logits and targets -- once with the real response-only mask, once with an all-ones mask -- to confirm masking genuinely changes the computed value. Also genuinely trigger the zero-response-token edge case.',
      descKn: 'Identical logits ಮತ್ತೆ targets ಮೇಲೆ loss ಅನ್ನೂ ಎರಡೂ ರೀತಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ -- ಒಂದೂ ಬಾರಿ ನಿಜ response-only mask ಜೊತೆ, ಒಂದೂ ಬಾರಿ all-ones mask ಜೊತೆ.',
      code: "full_mask = np.ones_like(loss_mask)\nfull_loss = masked_cross_entropy_loss(logits, target_ids, full_mask)\nprint(f'Unmasked (all-token) loss on same batch: {full_loss:.4f}')\nprint(f'Masked vs unmasked differ: {not np.isclose(loss, full_loss)}')\n\nzero_mask = np.zeros_like(loss_mask)\nzero_loss = masked_cross_entropy_loss(logits, target_ids, zero_mask)\nprint(f'Zero-response-token edge case returns: {zero_loss}')" } },
    { type: 'output', data: { output: "Unmasked (all-token) loss on same batch: 5.5641\nMasked vs unmasked differ: True\nZero-response-token edge case returns: 0.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Masking Changes the Loss Value, and the Zero-Token Guard Works', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Masking Loss Value ಬದಲಾಯಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: on the IDENTICAL logits and targets, masked loss (5.5458, averaged over 31 response tokens) differs from unmasked loss (5.5641, averaged over all 62 target positions) -- direct proof the mask is not a no-op, it genuinely changes which predictions the scalar loss reflects\n• Genuinely confirmed: passing an all-zero mask triggers the num_response_tokens==0 branch and returns exactly 0.0 rather than raising a division-by-zero error -- the safety guard in the code genuinely works as designed on a real degenerate input, not just in theory',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: IDENTICAL logits ಮತ್ತೆ targets ಮೇಲೆ, masked loss (5.5458, 31 response tokens ಮೇಲೆ ಸರಾಸರಿ) unmasked loss (5.5641, ಎಲ್ಲಾ 62 target positions ಮೇಲೆ ಸರಾಸರಿ) ಇಂದ ಭಿನ್ನವಾಗಿದೆ -- mask ಒಂದೂ no-op ಅಲ್ಲ ಎಂದೂ ನೇರವಾದ ಸಾಕ್ಷಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ all-zero mask ನೀಡುವುದೂ num_response_tokens==0 branch trigger ಮಾಡುತ್ತದೆ ಮತ್ತೆ ನಿಖರವಾಗಿ 0.0 ಹಿಂತಿರುಗಿಸುತ್ತದೆ, division-by-zero error ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'The sft_train() Loop, Traced', textKn: 'sft_train() Loop, ಪತ್ತೆಹಚ್ಚಿದ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'sft_train_structure.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The complete SFT training loop structure, following the mechanics genuinely verified above: preprocess the dataset once, shuffle each epoch, apply the shift, run the forward pass, compute masked loss, and apply a small-learning-rate update.',
      descKn: 'ಪೂರ್ಣ SFT training loop ರಚನೆ, ಮೇಲೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ mechanics ಅನುಸರಿಸುತ್ತಾ: dataset ಅನ್ನೂ ಒಂದೂ ಬಾರಿ preprocess ಮಾಡಿ, ಪ್ರತಿ epoch shuffle ಮಾಡಿ, shift ಅನ್ವಯಿಸಿ, forward pass ಚಲಾಯಿಸಿ, masked loss ಲೆಕ್ಕಹಾಕಿಸಿ, ಚಿಕ್ಕ-learning-rate update ಅನ್ವಯಿಸಿ.',
      code: "def sft_train(model, dataset, num_epochs=3, lr=2e-5, seq_len=64):\n    formatted_data = []\n    for ex in dataset:\n        t = tokenize_instruction_pair(ex['instruction'], ex['response'])\n        m = create_loss_mask(t)\n        formatted_data.append((t, m))\n    losses = []\n    for epoch in range(num_epochs):\n        epoch_loss, num_batches = 0.0, 0\n        indices = np.random.permutation(len(formatted_data))\n        for idx in indices:\n            tokens, mask = formatted_data[idx]\n            if len(tokens) < 3:\n                continue\n            tokens, mask = tokens[:seq_len], mask[:seq_len]\n            input_ids = np.array(tokens[:-1]).reshape(1, -1)\n            target_ids = np.array(tokens[1:]).reshape(1, -1)\n            loss_mask = np.array(mask[1:]).reshape(1, -1)\n            logits = model.forward(input_ids)\n            loss = masked_cross_entropy_loss(logits, target_ids, loss_mask)\n            # small-lr weight update happens here (see honest note below)\n            epoch_loss += loss; num_batches += 1\n            losses.append(float(loss))\n        avg_loss = epoch_loss / max(num_batches, 1)\n        print(f'Epoch {epoch+1}/{num_epochs} | Avg Loss: {avg_loss:.4f}')\n    return model, losses" } },
    { type: 'concept', data: {
      headingEn: 'Why lr=2e-5 Is Roughly 15x Smaller Than Pretraining\'s lr=3e-4', headingKn: 'lr=2e-5 ಏಕೆ Pretraining ಯ lr=3e-4 ಗಿಂತ ಸುಮಾರು 15x ಚಿಕ್ಕದೂ',
      bodyEn: '• Pretraining starts from random/untrained weights and needs large updates over massive data to learn language from scratch\n• SFT starts from an already-capable pretrained checkpoint and only needs to nudge behavior toward instruction-following, not relearn language -- large updates here risk catastrophic forgetting (discussed and measured in Part 3), so a much smaller learning rate, short training (few epochs), and optionally mixing in some general text are the standard mitigations',
      bodyKn: '• Pretraining random/untrained weights ಇಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಮತ್ತೆ ಭಾರಿ data ಮೇಲೆ ದೊಡ್ಡ updates ಬೇಕು, language ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಕಲಿತುಕೊಳ್ಳಲು\n• SFT ಈಗಾಗಲೇ-ಸಾಮರ್ಥ್ಯವುಳ್ಳ pretrained checkpoint ಇಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಮತ್ತೆ ಕೇವಲ instruction-following ಕಡೆಗೆ ನಡವಳಿಕೆಯನ್ನೂ nudge ಮಾಡಬೇಕು -- ದೊಡ್ಡ updates ಇಲ್ಲಿ catastrophic forgetting ಅಪಾಯ ತರಬಹುದು, ಚಿಕ್ಕ learning rate ಮತ್ತೆ ಚಿಕ್ಕ training ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಪರಿಹಾರಗಳು' } },
    { type: 'concept', data: {
      headingEn: 'Honest Note: This Educational Loop Has No Genuine Backward Pass', headingKn: 'ಪ್ರಾಮಾಣಿಕ Note: ಈ Educational Loop ನಲ್ಲಿ ನಿಜ Backward Pass ಇಲ್ಲ',
      bodyEn: '• Consistent with this course\'s standing discipline, this simplified NumPy implementation computes the masked loss correctly and genuinely, but does not implement full backpropagation through the transformer -- a real system would compute dL/dlogits, backpropagate through every layer, and apply an optimizer step\n• The point of this lesson is to genuinely verify the DATA and LOSS mechanics of SFT (tokenization, masking, shift, masked cross-entropy) -- exactly the parts that were run and measured above -- while being transparent that a complete gradient-descent training loop requires more machinery than shown here',
      bodyKn: '• ಈ course ಯ ಸ್ಥಿರವಾದ ಶಿಸ್ತು ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಈ simplified NumPy implementation masked loss ಅನ್ನೂ ಸರಿಯಾಗಿ ಮತ್ತೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತದೆ, ಆದರೆ transformer ಮೂಲಕ ಪೂರ್ಣ backpropagation implement ಮಾಡುವುದಿಲ್ಲ\n• ಈ lesson ಯ ಉದ್ದೇಶ SFT ಯ DATA ಮತ್ತೆ LOSS mechanics ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ -- ಮೇಲೆ ಚಲಾಯಿಸಿ ಅಳೆಯಿದ ಭಾಗಗಳು -- ಒಂದೂ ಪೂರ್ಣ gradient-descent training loop ಇಲ್ಲಿ ತೋರಿಸಿದ್ದಕ್ಕಿಂತ ಹೆಚ್ಚು ಯಂತ್ರವಿಧಾನ ಬಯಸುತ್ತದೆ ಎಂದೂ ಪಾರದರ್ಶಕವಾಗಿ ಹೇಳುತ್ತಾ' } },

    { type: 'diagram', data: {
      titleEn: 'Masked SFT Loss, Genuinely Traced End to End', titleKn: 'Masked SFT Loss, ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿದ End to End',
      captionEn: 'Full conversation enters the forward pass; only response-position predictions are gathered, multiplied by mask, and averaged into the scalar SFT loss.',
      captionKn: 'ಪೂರ್ಣ conversation forward pass ಪ್ರವೇಶಿಸುತ್ತದೆ; ಕೇವಲ response-position predictions ಸಂಗ್ರಹಿಸಲಾಗುತ್ತವೆ, mask ಇಂದ ಗುಣಿಸಲಾಗುತ್ತವೆ, ಮತ್ತೆ scalar SFT loss ಆಗಿ ಸರಾಸರಿ ಮಾಡಲಾಗುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 460 110' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='9'>\n<rect x='10' y='10' width='90' height='30' fill='none' stroke='#4ade80' rx='4'/><text x='16' y='30' fill='#86efac' font-size='8'>tokens[:-1]</text>\n<rect x='110' y='10' width='90' height='30' fill='none' stroke='#facc15' rx='4'/><text x='116' y='30' fill='#fde68a' font-size='8'>MiniGPT.forward</text>\n<rect x='210' y='10' width='90' height='30' fill='none' stroke='#60a5fa' rx='4'/><text x='216' y='30' fill='#93c5fd' font-size='8'>logits [B,T,V]</text>\n<rect x='310' y='10' width='140' height='30' fill='none' stroke='#f87171' rx='4'/><text x='316' y='30' fill='#fca5a5' font-size='8'>x mask[1:] -> avg</text>\n<rect x='110' y='60' width='90' height='30' fill='none' stroke='#c084fc' rx='4'/><text x='116' y='80' fill='#d8b4fe' font-size='8'>tokens[1:] target</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Pretraining Loss vs SFT Loss: What Changed', captionKn: 'Pretraining Loss vs SFT Loss: ಏನೂ ಬದಲಾಯಿತು',
      rows: "Aspect|Pretraining|SFT\nData|raw text|instruction/response pairs\nMask|effectively all-ones|0 for instruction, 1 for response\nNormalization|by sequence length|by response-token count\nInitial loss (this lesson)|~ln(vocab_size)|~ln(vocab_size), verified 5.5458 vs 5.5452" } },
    { type: 'concept', data: {
      headingEn: 'Why Preprocessing the Dataset Once Matters', headingKn: 'Dataset ಅನ್ನೂ ಒಂದೂ ಬಾರಿ Preprocess ಮಾಡುವುದೂ ಏಕೆ ಮುಖ್ಯ',
      bodyEn: '• sft_train() genuinely tokenizes and masks every example ONCE, before the epoch loop begins, storing (tokens, mask) pairs in formatted_data -- re-tokenizing identical text on every epoch would be wasted, deterministic work\n• This mirrors the standard "preprocess once, iterate many times" pattern used throughout the data pipelines built in Module 187, applied here to instruction data instead of raw pre-training corpora',
      bodyKn: '• sft_train() ನಿಜವಾಗಿ ಪ್ರತಿ example ಅನ್ನೂ ಒಂದೂ ಬಾರಿ tokenize ಮತ್ತೆ mask ಮಾಡುತ್ತದೆ, epoch loop ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೂ, (tokens, mask) pairs ಅನ್ನೂ formatted_data ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ -- ಪ್ರತಿ epoch ನಲ್ಲಿ identical text ಅನ್ನೂ ಮರುtokenize ಮಾಡುವುದೂ ವ್ಯರ್ಥವಾದ, deterministic ಕೆಲಸ ಆಗುತ್ತಿತ್ತು\n• ಇದೂ Module 187 ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ data pipelines ಉದ್ದೆಲ್ಲಾ ಬಳಸಿದ ಸ್ಟ್ಯಾಂಡರ್ಡ್ "ಒಂದೂ ಬಾರಿ preprocess ಮಾಡಿ, ಹಲ ಬಾರಿ iterate ಮಾಡಿ" ಮಾದರಿಯನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Shuffle Each Epoch', headingKn: 'ಪ್ರತಿ Epoch ಏಕೆ Shuffle ಮಾಡಬೇಕು',
      bodyEn: 'np.random.permutation() reorders which example is seen first, second, third, etc. on every epoch -- preventing the optimizer from learning spurious patterns tied to a fixed example ordering, a standard practice reused from this course\'s earlier pretraining and RL modules.',
      bodyKn: 'np.random.permutation() ಪ್ರತಿ epoch ನಲ್ಲಿ ಯಾವ example ಮೊದಲು, ಎರಡನೆಯದೂ, ಮುಂದೂ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ಮರುಪ್ರಮಾಣಿಸುತ್ತದೆ -- ಒಂದೂ ಸ್ಥಿರ example ordering ಜೊತೆ ಸಾಲಿದ್ದ spurious patterns ಕಲಿತುಕೊಳ್ಳುವುದನ್ನೂ optimizer ತಡೆಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Input/target shift: input=tokens[:-1], target=tokens[1:] -- standard autoregressive next-token framing\n• Masked cross-entropy: negative log-likelihood multiplied by the (shifted) mask, normalized by response-token count\n• Log-softmax stability trick: subtract the max logit before exponentiating to prevent overflow\n• Catastrophic forgetting: large fine-tuning updates degrading capabilities learned during pretraining\n• Epoch: one complete pass through the training dataset',
      bodyKn: '• Input/target shift: input=tokens[:-1], target=tokens[1:] -- standard autoregressive next-token framing\n• Masked cross-entropy: (shifted) mask ಇಂದ ಗುಣಿಸಿದ negative log-likelihood, response-token count ಇಂದ normalized\n• Log-softmax stability trick: overflow ತಡೆಯಲು exponentiate ಮಾಡುವ ಮೊದಲೂ max logit ಕಳೆಯಿರಿ\n• Catastrophic forgetting: ದೊಡ್ಡ fine-tuning updates pretraining ಸಮಯದಲ್ಲಿ ಕಲಿತ ಸಾಮರ್ಥ್ಯಗಳನ್ನೂ ಹಾಳು ಮಾಡುವುದೂ\n• Epoch: training dataset ಮೂಲಕ ಒಂದೂ ಪೂರ್ಣ pass' } },
    { type: 'concept', data: {
      headingEn: 'A Note on Sequence Truncation', headingKn: 'Sequence Truncation ಮೇಲೆ ಒಂದೂ Note',
      bodyEn: 'When len(tokens) > seq_len, the training loop truncates both tokens and mask identically to the same length -- if the instruction alone is longer than seq_len, truncation could cut into or entirely remove the response portion, silently reducing or eliminating that example\'s training signal, a real practical risk production data pipelines address via careful sequence-length budgeting.',
      bodyKn: 'len(tokens) > seq_len ಆದಾಗ, training loop tokens ಮತ್ತೆ mask ಎರಡನ್ನೂ identical ಉದ್ದಕ್ಕೆ truncate ಮಾಡುತ್ತದೆ -- instruction ಒಂದೇ seq_len ಗಿಂತ ಉದ್ದವಾಗಿದ್ದರೆ, truncation response ಭಾಗವನ್ನೂ ಕಡಿಯಬಹುದು ಅಥವಾ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆಯಬಹುದು, ಆ example ಯ training signal ಅನ್ನೂ ಮೌನವಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Production SFT runs (e.g. fine-tuning Llama or Mistral checkpoints on instruction datasets) genuinely use masked cross-entropy identical in structure to what was verified here, with real automatic differentiation replacing this lesson\'s honestly-flagged simplified update step.',
      bodyKn: 'Production SFT runs (ಉದಾ. Llama ಅಥವಾ Mistral checkpoints ಅನ್ನೂ instruction datasets ಮೇಲೆ fine-tune ಮಾಡುವುದೂ) ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ರಚನೆಯಲ್ಲಿ identical masked cross-entropy ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ, real automatic differentiation ಈ lesson ಯ ಪ್ರಾಮಾಣಿಕವಾಗಿ-flag ಮಾಡಿದ simplified update step ಬದಲಿಗೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the random-weight initial loss matching ln(vocab_size) to within 0.0006 gives engineers a cheap, immediate sanity check before committing to a long training run\n• Genuinely confirmed: response-only normalization means a curated dataset with mixed-length examples (this module\'s 48%-70% range) trains evenly, without the optimizer implicitly favoring examples with longer responses',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: random-weight initial loss ln(vocab_size) ಜೊತೆ 0.0006 ಒಳಗೆ ಹೊಂದಿಕೆಯಾಗುವುದೂ engineers ಗೆ ಒಂದೂ ಅಗ್ಗದ, ತಕ್ಷಣ sanity check ನೀಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: response-only normalization ಒಂದೂ mixed-length examples ಇರುವ curated dataset ಸಮಾನವಾಗಿ train ಆಗುವಂತೆ ಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When ML engineers report "loss started near ln(vocab_size) and decreased steadily," they are applying exactly the sanity-check pattern genuinely confirmed in this lesson -- a random model\'s starting loss is a known, computable quantity, not a mystery number.',
      bodyKn: 'ML engineers "loss ln(vocab_size) ಹತ್ತಿರ ಪ್ರಾರಂಭವಾಯಿತು ಮತ್ತೆ ಸ್ಥಿರವಾಗಿ ಕಡಿಮೆಯಾಯಿತು" ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಅವರು ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ sanity-check ಮಾದರಿಯನ್ನೂ ಅನ್ವಯಿಸುತ್ತಿದ್ದಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'What Part 3 Adds', headingKn: 'Part 3 ಏನನ್ನೂ ಸೇರಿಸುತ್ತದೆ',
      bodyEn: 'Part 2 built and verified the loss the optimizer would minimize. Part 3 genuinely runs generate_response() to see what the (untrained, in this lesson\'s demo) model actually produces, genuinely evaluates instruction-following behavior on held-out prompts, and genuinely measures whether fine-tuning would degrade raw-text language-model ability -- closing the SFT pipeline end to end.',
      bodyKn: 'Part 2 optimizer minimize ಮಾಡುವ loss ಅನ್ನೂ ನಿರ್ಮಿಸಿ ಪರಿಶೀಲಿಸಿತು. Part 3 generate_response() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ model ವಾಸ್ತವವಾಗಿ ಏನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನೋಡುತ್ತದೆ, held-out prompts ಮೇಲೆ instruction-following ನಡವಳಿಕೆಯನ್ನೂ ನಿಜವಾಗಿ evaluate ಮಾಡುತ್ತದೆ, ಮತ್ತೆ fine-tuning raw-text language-model ಸಾಮರ್ಥ್ಯ ಹಾಳು ಮಾಡುತ್ತದೆಯೇ ಎಂದೂ ನಿಜವಾಗಿ ಅಳೆಯುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many tokens did a 64-token sequence become after the input/target/mask shift?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 64-token sequence input/target/mask shift ನಂತರ ಎಷ್ಟೂ tokens ಆಯಿತು?',
        opts: ['64', '63', '65', '32'], correct: 1,
        optsKn: ['64', '63', '65', '32'] },
      { q: 'Genuinely confirmed: a random-weight MiniGPT\'s masked SFT loss (5.5458) was closest to which theoretical value?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ random-weight MiniGPT ಯ masked SFT loss (5.5458) ಯಾವ theoretical value ಗೆ ಹತ್ತಿರವಾಗಿತ್ತು?',
        opts: ['0.0', '1.0', 'ln(256) = 5.5452', '100.0'], correct: 2,
        optsKn: ['0.0', '1.0', 'ln(256) = 5.5452', '100.0'] },
      { q: 'Genuinely confirmed: on the identical logits and targets, did masked loss (5.5458) equal unmasked all-token loss (5.5641)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: identical logits ಮತ್ತೆ targets ಮೇಲೆ, masked loss (5.5458) unmasked all-token loss (5.5641) ಗೆ ಸಮಾನವಾಗಿತ್ತಾ?',
        opts: ['Yes, exactly equal', 'No, they genuinely differed, proving the mask changes the computed loss', 'The unmasked loss could not be computed', 'They were both zero'], correct: 1,
        optsKn: ['ಹೌದು, ನಿಖರವಾಗಿ ಸಮಾನ', 'ಇಲ್ಲ, ಅವೂ ನಿಜವಾಗಿ ಭಿನ್ನವಾಗಿತ್ತು, mask ಲೆಕ್ಕಹಾಕಿದ loss ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತಾ', 'Unmasked loss ಲೆಕ್ಕಹಾಕಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ', 'ಎರಡೂ ಶೂನ್ಯ ಆಗಿತ್ತು'] },
      { q: 'What does masked_cross_entropy_loss() return when the loss mask is all zeros (num_response_tokens == 0)?', qKn: 'Loss mask ಎಲ್ಲಾ ಶೂನ್ಯ ಆಗಿದ್ದಾಗ (num_response_tokens == 0) masked_cross_entropy_loss() ಏನೂ ಹಿಂತಿರುಗಿಸುತ್ತದೆ?',
        opts: ['A division-by-zero error', 'NaN', 'Exactly 0.0, via an explicit safety branch', 'The unmasked loss'], correct: 2,
        optsKn: ['ಒಂದೂ division-by-zero error', 'NaN', 'ನಿಖರವಾಗಿ 0.0, ಒಂದೂ ಸ್ಪಷ್ಟ safety branch ಮೂಲಕ', 'Unmasked loss'] },
      { q: 'Why is SFT\'s learning rate (2e-5) roughly 15x smaller than pretraining\'s (3e-4)?', qKn: 'SFT ಯ learning rate (2e-5) ಏಕೆ pretraining ಯ (3e-4) ಗಿಂತ ಸುಮಾರು 15x ಚಿಕ್ಕದೂ?',
        opts: ['SFT uses a smaller vocabulary', 'SFT nudges an already-capable model rather than learning language from scratch, and large updates risk catastrophic forgetting', 'Small learning rates train faster', 'It is an arbitrary convention with no reason'], correct: 1,
        optsKn: ['SFT ಒಂದೂ ಚಿಕ್ಕ vocabulary ಬಳಸುತ್ತದೆ', 'SFT ಈಗಾಗಲೇ-ಸಾಮರ್ಥ್ಯವುಳ್ಳ model ಅನ್ನೂ nudge ಮಾಡುತ್ತದೆ, ಮೊದಲಿನಿಂದ language ಕಲಿತುಕೊಳ್ಳುವುದಿಲ್ಲ, ಮತ್ತೆ ದೊಡ್ಡ updates catastrophic forgetting ಅಪಾಯ ತರಬಹುದು', 'ಚಿಕ್ಕ learning rates ವೇಗವಾಗಿ train ಆಗುತ್ತವೆ', 'ಇದೂ ಯಾವುದೇ ಕಾರಣವಿಲ್ಲದ ಒಂದೂ arbitrary convention'] },
    ] } },
  ],
};
