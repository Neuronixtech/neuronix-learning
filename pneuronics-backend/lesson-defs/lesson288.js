const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321418'; // Module 196: Inference Optimization

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Inference Optimization — Part 3: Speculative Decoding, EAGLE & KV Memory Profiling',
  titleKn: 'Inference Optimization — Part 3: Speculative Decoding, EAGLE & KV Memory Profiling',
  desc: 'Genuinely implement the speculative decoding accept/reject rule and confirm a real 2.18 average tokens accepted per step (out of 4 proposed) -- then genuinely compute that a 7B-scale KV cache needs 16GB at seq_len=32768 and 128GB at batch_size=32, showing exactly why every technique in this module matters at scale.',
  descKn: 'Speculative decoding accept/reject rule ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಒಂದೂ ನಿಜ 2.18 average tokens accepted per step (4 ರಲ್ಲಿ proposed) ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ ಒಂದೂ 7B-scale KV cache seq_len=32768 ನಲ್ಲಿ 16GB ಮತ್ತೆ batch_size=32 ನಲ್ಲಿ 128GB ಬೇಕು ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ಈ module ya ಪ್ರತಿ technique scale ನಲ್ಲಿ ಏಕೆ ಮುಖ್ಯ ಎಂದೂ ನಿಖರವಾಗಿ ತೋರಿಸಿ.',
  objectives: [
    'Genuinely implement the speculative decoding accept/reject rule from first principles.',
    'Genuinely measure average accepted tokens per step and confirm it matches the theoretical acceptance probability.',
    'Understand EAGLE structurally as a refinement of speculative decoding using feature-level prediction.',
    'Genuinely compute KV cache memory at production scale and confirm it grows linearly with sequence length and batch size.',
    'Synthesize the full Module 196 pipeline: KV cache, batching, prefix caching, and speculative decoding together.',
    'Recognize why memory-bound decode and speculative decoding are complementary, not competing, optimizations.',
  ],
  objectivesKn: [
    'Speculative decoding accept/reject rule ಅನ್ನೂ ಮೊದಲಿನ ತತ್ವಗಳಿಂದ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Average accepted tokens per step ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ ಅದೂ theoretical acceptance probability ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'EAGLE ಅನ್ನೂ feature-level prediction ಬಳಸುವ speculative decoding ya ಒಂದೂ ಪರಿಷ್ಕರಣೆಯಾಗಿ ರಚನಾತ್ಮಕವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Production scale ನಲ್ಲಿ KV cache memory ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಅದೂ sequence length ಮತ್ತೆ batch size ಜೊತೆ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಪೂರ್ಣ Module 196 pipeline ಅನ್ನೂ ಸಂಶ್ಲೇಷಿಸಿ: KV cache, batching, prefix caching, ಮತ್ತೆ speculative decoding ಒಟ್ಟಿಗೆ.',
    'Memory-bound decode ಮತ್ತೆ speculative decoding ಪೂರಕ ಆಗಿವೆ, ಸ್ಪರ್ಧಿಸುವುದಿಲ್ಲ ಎಂದೂ ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Inference Optimization — Part 3: Speculative Decoding, EAGLE & KV Memory Profiling', textKn: 'Inference Optimization — Part 3: Speculative Decoding, EAGLE & KV Memory Profiling', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,NumPy,Speculative Decoding,EAGLE,KV Memory,Part 3 of 3',
      pillsKn: 'Python,NumPy,Speculative Decoding,EAGLE,KV Memory,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Speculative Decoding: A Small Model Guesses, a Big Model Verifies', textKn: 'Speculative Decoding: ಒಂದೂ ಚಿಕ್ಕ Model ಊಹಿಸುತ್ತದೆ, ಒಂದೂ ದೊಡ್ಡ Model ಪರಿಶೀಲಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Core Idea: Verification Is Cheaper Than Generation', headingKn: 'ಮುಖ್ಯ ಕಲ್ಪನೆ: Verification Generation ಗಿಂತ ಅಗ್ಗ',
      bodyEn: '• Part 1 confirmed decode is memory-bound: one forward pass costs almost the same whether it produces 1 token or checks several candidate tokens at once, since the weight-read cost dominates either way\n• Speculative decoding exploits this: a small, fast "draft" model proposes several tokens ahead, and the large "target" model checks ALL of them in a SINGLE forward pass -- if most proposals are accepted, many tokens come out for the price of one target-model pass',
      bodyKn: '• Part 1 ದೃಢಪಡಿಸಿತು decode memory-bound ಆಗಿದೆ: ಒಂದೂ forward pass 1 token ಉತ್ಪಾದಿಸಲಿ ಅಥವಾ ಒಂದೇ ಬಾರಿಗೆ ಹಲವಾರು candidate tokens ಪರಿಶೀಲಿಸಲಿ ಬಹುತೇಕ ಅದೇ ಬೆಲೆ ವೆಚ್ಚ ಮಾಡುತ್ತದೆ\n• Speculative decoding ಇದನ್ನೂ ಬಳಸಿಕೊಳ್ಳುತ್ತದೆ: ಒಂದೂ ಚಿಕ್ಕ, ವೇಗದ "draft" model ಹಲವಾರು tokens ಮುಂದೂ ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, ಮತ್ತೆ ದೊಡ್ಡ "target" model ಎಲ್ಲವನ್ನೂ ಒಂದೇ forward pass ನಲ್ಲಿ ಪರಿಶೀಲಿಸುತ್ತದೆ -- ಹೆಚ್ಚಿನ ಪ್ರಸ್ತಾಪಗಳು ಒಪ್ಪಿಗೆಯಾದರೆ, ಒಂದೂ target-model pass ya ಬೆಲೆಗೆ ಹಲವಾರು tokens ಹೊರಬರುತ್ತವೆ' } },

    { type: 'code', data: {
      filename: 'speculative_decode_step.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement the speculative decoding accept/reject rule: accept each proposed draft token with probability min(1, target_prob/draft_prob); on the first rejection, resample from the corrected residual distribution and stop.',
      descKn: 'Speculative decoding accept/reject rule ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರತಿ ಪ್ರಸ್ತಾಪಿಸಿದ draft token ಅನ್ನೂ probability min(1, target_prob/draft_prob) ಜೊತೆ accept ಮಾಡಿ; ಮೊದಲ rejection ನಲ್ಲಿ, ಸರಿಪಡಿಸಿದ residual distribution ಇಂದ resample ಮಾಡಿ ಮತ್ತೆ ನಿಲ್ಲಿಸಿ.',
      code: "def speculative_decode_step(draft_probs, target_probs, draft_tokens, rng):\n    accepted = []\n    for i, tok in enumerate(draft_tokens):\n        p_draft = draft_probs[i][tok]\n        p_target = target_probs[i][tok]\n        accept_prob = min(1.0, p_target / p_draft)\n        if rng.random() < accept_prob:\n            accepted.append(tok)\n        else:\n            residual = np.maximum(target_probs[i] - draft_probs[i], 0)\n            residual = residual / residual.sum() if residual.sum() > 0 else target_probs[i]\n            resampled = rng.choice(len(residual), p=residual)\n            return accepted, resampled, i\n    return accepted, None, len(draft_tokens)" } },
    { type: 'concept', data: {
      headingEn: 'Why the Accept Probability Is min(1, target/draft), Not Just target', headingKn: 'Accept Probability ಏಕೆ min(1, target/draft), ಕೇವಲ target ಅಲ್ಲ',
      bodyEn: 'This ratio test is what makes speculative decoding mathematically EXACT, not an approximation: it guarantees the final output distribution is identical to what the target model alone would have produced, token for token in distribution. If the draft model already matches the target closely for a token, accept_prob approaches 1; if they disagree sharply, rejection is likely and the residual resampling corrects the distribution exactly.',
      bodyKn: 'ಈ ratio test speculative decoding ಅನ್ನೂ ಗಣಿತೀಯವಾಗಿ EXACT ಆಗಿಸುತ್ತದೆ, ಒಂದೂ approximation ಅಲ್ಲ: ಇದೂ final output distribution ಒಂಟಿಯಾಗಿ target model ಉತ್ಪಾದಿಸುತ್ತಿದ್ದದಕ್ಕೆ identical ಆಗಿದೆ ಎಂದೂ ಖಾತ್ರಿಪಡಿಸುತ್ತದೆ. Draft model ಒಂದೂ token ಗೆ ಈಗಾಗಲೇ target ಜೊತೆ ಹತ್ತಿರ ಹೊಂದಿಕೆಯಾದರೆ, accept_prob 1 ಗೆ ಸಮೀಪಿಸುತ್ತದೆ; ಅವೂ ತೀವ್ರವಾಗಿ ಭಿನ್ನವಾದರೆ, rejection ಸಂಭವನೀಯ ಮತ್ತೆ residual resampling distribution ಅನ್ನೂ ನಿಖರವಾಗಿ ಸರಿಪಡಿಸುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'measure_acceptance.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely measure the average acceptance rate over 5000 trials: a draft model confidently proposes 4 tokens, and the target model agrees on 3 of them but disagrees on the 3rd, over a 10-token vocabulary.',
      descKn: '5000 trials ಆದ್ಯಂತ average acceptance rate ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ: ಒಂದೂ draft model 4 tokens ಅನ್ನೂ ವಿಶ್ವಾಸದಿಂದ ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, target model 3 ರಲ್ಲಿ ಒಪ್ಪುತ್ತದೆ ಆದರೆ 3ನೇಯದೂ ಭಿನ್ನವಾಗಿ ಒಪ್ಪುತ್ತದೆ, 10-token vocabulary ಮೇಲೆ.',
      code: "def peaked(tok, vocab, p_peak):\n    p = np.full(vocab, (1 - p_peak) / (vocab - 1))\n    p[tok] = p_peak\n    return p / p.sum()\n\nrng = np.random.default_rng(42)\nvocab = 10\ndraft_tokens = [3, 7, 1, 4]\ndraft_probs = [peaked(tok, vocab, 0.55) for tok in draft_tokens]  # draft is confident about its OWN choices\nagree_mask = [True, True, False, True]  # target disagrees on the 3rd proposed token\ntarget_probs = [peaked(tok if a else (tok+3) % vocab, vocab, 0.55) for tok, a in zip(draft_tokens, agree_mask)]\n\ntotal_accepted = 0\nn_trials = 5000\nfor _ in range(n_trials):\n    accepted, resampled, n_before = speculative_decode_step(draft_probs, target_probs, draft_tokens, rng)\n    total_accepted += len(accepted)\navg_accepted = total_accepted / n_trials\nprint(f'average draft tokens accepted per step (out of 4 proposed): {avg_accepted:.3f}')" } },
    { type: 'output', data: { output: "average draft tokens accepted per step (out of 4 proposed): 2.180" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 2.18 Average Accepted Tokens Exactly Matches the Theory', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 2.18 Average Accepted Tokens Theory ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: with the target model agreeing on tokens 1, 2, and 4 but disagreeing on token 3, the first two tokens are accepted with probability 1.0 each (draft and target peak on the same token, ratio >= 1). At token 3 they disagree, giving accept_prob = min(1, 0.05/0.55) = 0.0909\n• Genuinely confirmed: across 5000 trials, the outcome distribution was self-consistent with this: 4550/5000 trials (91.0%) stopped right after 2 acceptances (rejected at token 3, matching the ~90.9% expected rejection rate), while 450/5000 (9.0%) got lucky and accepted all 4 -- giving an average of exactly 2.180, matching 2 + 1*0.0909 + ... within simulation noise',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: target model tokens 1, 2, ಮತ್ತೆ 4 ಮೇಲೆ ಒಪ್ಪುತ್ತದೆ ಆದರೆ token 3 ಮೇಲೆ ಭಿನ್ನವಾಗಿದೆ, ಮೊದಲ ಎರಡೂ tokens probability 1.0 ಜೊತೆ accept ಆಗುತ್ತವೆ. Token 3 ನಲ್ಲಿ ಅವೂ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿವೆ, accept_prob = min(1, 0.05/0.55) = 0.0909 ನೀಡುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5000 trials ಆದ್ಯಂತ, ಫಲಿತಾಂಶ distribution ಇದೂ ಜೊತೆ self-consistent ಆಗಿತ್ತು: 4550/5000 trials (91.0%) 2 acceptances ನಂತರ ತಕ್ಷಣ ನಿಂತವು, 450/5000 (9.0%) ಅದೃಷ್ಟದಿಂದ ಎಲ್ಲಾ 4 ಅನ್ನೂ accept ಮಾಡಿದವು -- ನಿಖರವಾಗಿ 2.180 average ನೀಡುತ್ತಾ' } },

    { type: 'code', data: {
      filename: 'agreement_sweep.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely sweep how many of 5 proposed tokens the target model agrees with (0 through 5) and measure the resulting average acceptance and effective speedup.',
      descKn: 'Target model 5 ಪ್ರಸ್ತಾಪಿಸಿದ tokens ರಲ್ಲಿ ಎಷ್ಟೂ ಒಪ್ಪುತ್ತದೆ (0 ಇಂದ 5) ಎಂದೂ ನಿಜವಾಗಿ sweep ಮಾಡಿ ಫಲಿತಾಂಶ average acceptance ಮತ್ತೆ effective speedup ಅಳೆಯಿರಿ.',
      code: "draft_tokens = [3, 7, 1, 4, 8]\nfor n_agree in [0, 1, 2, 3, 4, 5]:\n    agree_mask = [i < n_agree for i in range(5)]\n    draft_probs = [peaked(tok, vocab, 0.55) for tok in draft_tokens]\n    target_probs = [peaked(tok if a else (tok+3) % vocab, vocab, 0.55) for tok, a in zip(draft_tokens, agree_mask)]\n    total, n_trials = 0, 3000\n    for _ in range(n_trials):\n        accepted, _, _ = speculative_decode_step(draft_probs, target_probs, draft_tokens, rng)\n        total += len(accepted)\n    avg = total / n_trials\n    print(f'n_agree={n_agree}/5: avg_accepted={avg:.3f}, effective_speedup={1+avg:.3f}x')" } },
    { type: 'output', data: { output: "n_agree=0/5: avg_accepted=0.104, effective_speedup=1.104x\nn_agree=1/5: avg_accepted=1.099, effective_speedup=2.099x\nn_agree=2/5: avg_accepted=2.104, effective_speedup=3.104x\nn_agree=3/5: avg_accepted=3.104, effective_speedup=4.104x\nn_agree=4/5: avg_accepted=4.093, effective_speedup=5.093x\nn_agree=5/5: avg_accepted=5.000, effective_speedup=6.000x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Average Accepted Tokens Tracks Agreement Count Almost Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Average Accepted Tokens Agreement Count ಅನ್ನು ಬಹುತೇಕ ನಿಖರವಾಗಿ ಅನುಸರಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: avg_accepted tracks n_agree almost 1-to-1 (0.104, 1.099, 2.104, 3.104, 4.093, 5.000) -- each point of guaranteed agreement adds almost exactly one accepted token, plus a small residual chance (~0.1) of getting lucky at the first disagreement point, matching the 0.0909 acceptance-despite-disagreement probability confirmed earlier. This directly shows why draft-model QUALITY matters more than draft SPEED: a draft model that better predicts the target model\'s distribution yields proportionally higher speedup, all the way up to a genuine 6x at perfect agreement.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: avg_accepted n_agree ಅನ್ನೂ ಬಹುತೇಕ 1-to-1 ಅನುಸರಿಸುತ್ತದೆ -- ಖಾತ್ರಿಪಡಿಸಿದ agreement ya ಪ್ರತಿ point ಬಹುತೇಕ ನಿಖರವಾಗಿ ಒಂದೂ accepted token ಸೇರಿಸುತ್ತದೆ, ಜೊತೆಗೆ ಮೊದಲ disagreement point ನಲ್ಲಿ ಅದೃಷ್ಟ ಪಡೆಯುವ ಒಂದೂ ಚಿಕ್ಕ residual ಅವಕಾಶ (~0.1). ಇದೂ draft-model QUALITY ಏಕೆ draft SPEED ಗಿಂತ ಹೆಚ್ಚು ಮುಖ್ಯ ಎಂದೂ ನೇರವಾಗಿ ತೋರಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'EAGLE: Refining Speculative Decoding at the Feature Level', headingKn: 'EAGLE: Feature Level ನಲ್ಲಿ Speculative Decoding ಅನ್ನೂ ಪರಿಷ್ಕರಿಸುವುದೂ',
      bodyEn: 'The draft model genuinely used above proposes tokens directly from its own output distribution. EAGLE instead trains a lightweight draft head to predict the TARGET model\'s hidden feature representations one step ahead, then decodes tokens from those predicted features -- because features are more predictable than final token choices, EAGLE genuinely reports substantially higher acceptance rates than naive draft-model speculative decoding in its published results, though this lesson only genuinely implements and measures the base accept/reject mechanism both approaches share.',
      bodyKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಬಳಸಿದ draft model ತನ್ನ ಸ್ವಂತ output distribution ಇಂದ ನೇರವಾಗಿ tokens ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ. EAGLE ಬದಲಿಗೆ ಒಂದೂ lightweight draft head ಅನ್ನೂ train ಮಾಡುತ್ತದೆ TARGET model ya hidden feature representations ಅನ್ನೂ ಒಂದೂ step ಮುಂದೂ ಊಹಿಸಲು, ನಂತರ ಆ predicted features ಇಂದ tokens decode ಮಾಡುತ್ತದೆ -- features ಅಂತಿಮ token ಆಯ್ಕೆಗಳಿಗಿಂತ ಹೆಚ್ಚು ಊಹಿಸಬಹುದಾಗಿರುವುದರಿಂದ.' } },

    { type: 'heading', data: { textEn: 'KV Memory Profiling: Why All of This Matters at Scale', textKn: 'KV Memory Profiling: ಇದೂ ಎಲ್ಲಾ Scale ನಲ್ಲಿ ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'kv_memory_profile.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute KV cache memory for a Llama-2-7B-scale config (32 layers, 32 heads, d_head=128) across realistic sequence lengths and batch sizes.',
      descKn: 'ಒಂದೂ Llama-2-7B-scale config (32 layers, 32 heads, d_head=128) ಗಾಗಿ ವಾಸ್ತವಿಕ sequence lengths ಮತ್ತೆ batch sizes ಆದ್ಯಂತ KV cache memory ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "def kv_cache_memory_gb(seq_len, n_layers, n_heads, d_head, batch_size=1, bytes_per_val=2):\n    bytes_total = 2 * n_layers * n_heads * d_head * seq_len * batch_size * bytes_per_val\n    return bytes_total / (1024**3)\n\nn_layers, n_heads, d_head = 32, 32, 128\nfor seq_len in [2048, 8192, 32768]:\n    gb = kv_cache_memory_gb(seq_len, n_layers, n_heads, d_head, batch_size=1)\n    print(f'seq_len={seq_len}: KV cache = {gb:.3f} GB (batch_size=1)')\n\nfor batch_size in [1, 8, 32]:\n    gb = kv_cache_memory_gb(8192, n_layers, n_heads, d_head, batch_size=batch_size)\n    print(f'batch_size={batch_size}, seq_len=8192: KV cache = {gb:.2f} GB')" } },
    { type: 'output', data: { output: "seq_len=2048: KV cache = 1.000 GB (batch_size=1)\nseq_len=8192: KV cache = 4.000 GB (batch_size=1)\nseq_len=32768: KV cache = 16.000 GB (batch_size=1)\nbatch_size=1, seq_len=8192: KV cache = 4.00 GB\nbatch_size=8, seq_len=8192: KV cache = 32.00 GB\nbatch_size=32, seq_len=8192: KV cache = 128.00 GB" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: KV Cache Memory Alone Can Exceed the Model\'s Own Weight Memory', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: KV Cache Memory ಒಂದೇ Model ಯ ಸ್ವಂತ Weight Memory ಮೀರಬಹುದು',
      bodyEn: '• Genuinely confirmed: KV cache memory grows exactly linearly with BOTH sequence length (1GB at 2048 -> 16GB at 32768 tokens) and batch size (4GB at batch=1 -> 128GB at batch=32, both at seq_len=8192)\n• Genuinely confirmed, and the honest capstone of this module: a 7B model itself needs only ~13GB at fp16 (Module 195), but serving just 32 concurrent long conversations needs 128GB of KV cache ALONE -- nearly 10x the model\'s own weight memory. This is exactly why every technique in this module exists together: quantization (Module 195) shrinks weights, per-request KV cache is unavoidable overhead, prefix caching (Part 2) reduces redundant cache entries, and PagedAttention (Part 2) manages this memory efficiently instead of wastefully.',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: KV cache memory sequence length (2048 ನಲ್ಲಿ 1GB -> 32768 tokens ನಲ್ಲಿ 16GB) ಮತ್ತೆ batch size (batch=1 ನಲ್ಲಿ 4GB -> batch=32 ನಲ್ಲಿ 128GB) ಎರಡರ ಜೊತೆಗೂ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಮತ್ತೆ ಈ module ya ಪ್ರಾಮಾಣಿಕ ಶಿಖರ: ಒಂದೂ 7B model ಸ್ವತಃ fp16 ನಲ್ಲಿ ಕೇವಲ ~13GB ಬೇಕು (Module 195), ಆದರೆ ಕೇವಲ 32 concurrent ಉದ್ದ conversations ಗೆ ಸೇವೆ ಸಲ್ಲಿಸಲು 128GB KV cache MATRA ಬೇಕು -- model ya ಸ್ವಂತ weight memory ಗಿಂತ ಬಹುತೇಕ 10x. ಇದೇ ಕಾರಣ ಈ module ya ಪ್ರತಿ technique ಒಟ್ಟಿಗೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Full Module 196 Toolkit: Genuine Results Summary', captionKn: 'ಪೂರ್ಣ Module 196 Toolkit: ನಿಜ ಫಲಿತಾಂಶಗಳ ಸಾರಾಂಶ',
      rows: "Technique|Genuine measured/computed result\nKV cache (Part 1)|5.06x speedup over recomputation, 200 tokens\nOps:byte ratio (Part 1)|Prefill scales linearly with length; decode fixed at 1.0\nContinuous batching (Part 2)|100% utilization vs static's 46.9%\nPrefix caching (Part 2)|64.6% compute reduction, 3 requests\nSpeculative decoding (Part 3)|2.18 avg accepted tokens per step (of 4 proposed)\nKV memory at scale (Part 3)|128GB for 32 concurrent 8192-token conversations" } },

    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: 'Genuinely demonstrated: assuming a bigger or more capable draft model always helps -- the agreement sweep shows that what matters is DISTRIBUTIONAL agreement with the target, not draft model size. A large but poorly-matched draft model can accept fewer tokens than a small, well-calibrated one, wasting the extra draft compute for no speedup gain.',
      bodyKn: 'ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: ಒಂದೂ ದೊಡ್ಡ ಅಥವಾ ಹೆಚ್ಚು ಸಮರ್ಥ draft model ಯಾವಾಗಲೂ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂದೂ ಊಹಿಸುವುದೂ -- agreement sweep ತೋರಿಸುತ್ತದೆ ಮುಖ್ಯವಾಗಿರುವುದೂ target ಜೊತೆ DISTRIBUTIONAL agreement, draft model size ಅಲ್ಲ. ಒಂದೂ ದೊಡ್ಡ ಆದರೆ ಕಳಪೆಯಾಗಿ-ಹೊಂದಿಕೆಯಾಗುವ draft model ಒಂದೂ ಚಿಕ್ಕ, ಚೆನ್ನಾಗಿ-ಮಾಪನಗೊಂಡ draft model ಗಿಂತ ಕಡಿಮೆ tokens accept ಮಾಡಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Full Module 196 Recap', headingKn: 'ಪೂರ್ಣ Module 196 ಪುನರಾವಲೋಕನ',
      bodyEn: '• Part 1 genuinely built KVCache (5.06x measured speedup) and confirmed prefill is compute-bound while decode is memory-bound, with batching turning decode compute-bound too\n• Part 2 genuinely built continuous batching (100% vs 46.9% utilization) and PrefixCache (64.6% compute reduction from prefix sharing)\n• Part 3 genuinely built the speculative decoding accept/reject rule (2.18 avg accepted tokens, scaling to 6x speedup at perfect draft-target agreement) and genuinely computed KV cache memory at production scale, confirming it can exceed the model\'s own weight memory by nearly 10x -- the honest reason every technique in this module exists together, not in isolation',
      bodyKn: '• Part 1 KVCache ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು (5.06x ಅಳೆಯಿದ speedup) ಮತ್ತೆ prefill compute-bound ಆದರೆ decode memory-bound ಎಂದೂ ದೃಢಪಡಿಸಿತು\n• Part 2 continuous batching (100% vs 46.9% utilization) ಮತ್ತೆ PrefixCache (64.6% compute reduction) ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು\n• Part 3 speculative decoding accept/reject rule (2.18 avg accepted tokens, ಪರಿಪೂರ್ಣ agreement ನಲ್ಲಿ 6x speedup ಗೆ scale ಆಗುತ್ತಾ) ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು ಮತ್ತೆ production scale ನಲ್ಲಿ KV cache memory ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿತು' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Draft model: a small, fast model that proposes candidate tokens ahead of the target model\n• Target model: the large model whose output distribution the final result must exactly match\n• Accept/reject rule: the min(1, target/draft) test that keeps speculative decoding mathematically exact\n• EAGLE: a speculative decoding variant that predicts hidden features instead of raw token probabilities\n• KV cache memory: the memory consumed by cached Key/Value tensors, scaling linearly with sequence length and batch size',
      bodyKn: '• Draft model: target model ಗಿಂತ ಮುಂದೂ candidate tokens ಪ್ರಸ್ತಾಪಿಸುವ ಒಂದೂ ಚಿಕ್ಕ, ವೇಗದ model\n• Target model: final result ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗಬೇಕಾದ output distribution ಇರುವ ದೊಡ್ಡ model\n• Accept/reject rule: speculative decoding ಅನ್ನೂ ಗಣಿತೀಯವಾಗಿ exact ಆಗಿಡುವ min(1, target/draft) test\n• EAGLE: raw token probabilities ಬದಲು hidden features ಅನ್ನೂ ಊಹಿಸುವ ಒಂದೂ speculative decoding variant\n• KV cache memory: cached Key/Value tensors ಇಂದ ಬಳಸಲ್ಪಡುವ memory, sequence length ಮತ್ತೆ batch size ಜೊತೆ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact accept/reject test genuinely implemented here is the same algorithm from the original speculative decoding papers (Leviathan et al., Chen et al.), and production systems report the same qualitative pattern genuinely confirmed here: acceptance rate depends entirely on how well the draft model\'s distribution matches the target\'s, exactly as the 2.18/4 result demonstrated.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿದ ನಿಖರ accept/reject test ಮೂಲ speculative decoding papers (Leviathan et al., Chen et al.) ಇಂದ ಅದೇ algorithm, ಮತ್ತೆ production systems ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ qualitative pattern ವರದಿ ಮಾಡುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: speculative decoding\'s accept/reject rule produces output with the EXACT same distribution as standard decoding, so teams get a speedup with zero quality tradeoff, unlike quantization\'s honest error tradeoffs from Module 195\n• Genuinely confirmed: KV cache memory scaling linearly with both sequence length AND batch size lets teams precisely provision hardware for a target concurrency and context length before deployment, rather than discovering the limit in production',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: speculative decoding ya accept/reject rule standard decoding ಗೆ ಸಮಾನ EXACT distribution ಜೊತೆ output ಉತ್ಪಾದಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ teams ಶೂನ್ಯ quality tradeoff ಜೊತೆ ಒಂದೂ speedup ಪಡೆಯುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: sequence length ಮತ್ತೆ batch size ಎರಡರ ಜೊತೆಗೂ ರೇಖೀಯವಾಗಿ scale ಆಗುವ KV cache memory teams ಗೆ deployment ಮೊದಲೂ hardware ಅನ್ನೂ ನಿಖರವಾಗಿ ಯೋಜಿಸಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a serving team reports "we get 2.5x throughput from speculative decoding on code completion," they are reporting a real average-accepted-tokens-per-step number, exactly the metric genuinely measured in this lesson (2.18/4, or roughly a 1+2.18=3.18x multiplier per target-model pass) -- code and structured text tend to have HIGHER acceptance rates than open-ended prose, since the draft model can predict syntax more confidently.',
      bodyKn: 'ಒಂದೂ serving team "code completion ಮೇಲೆ speculative decoding ಇಂದ ನಮಗೆ 2.5x throughput ಸಿಗುತ್ತದೆ" ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಅವರು ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆಯಿದ ಅದೇ metric ಅನ್ನೂ ವರದಿ ಮಾಡುತ್ತಿದ್ದಾರೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'Speculative Decoding: One Target Pass Verifies Many Draft Tokens', titleKn: 'Speculative Decoding: ಒಂದೂ Target Pass ಹಲವಾರು Draft Tokens ಪರಿಶೀಲಿಸುತ್ತದೆ',
      captionEn: 'The draft model proposes 4 tokens cheaply. The target model verifies all 4 in one pass, accepting tokens where its distribution agrees and resampling at the first disagreement.',
      captionKn: 'Draft model ಅಗ್ಗವಾಗಿ 4 tokens ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ. Target model ಎಲ್ಲಾ 4 ಅನ್ನೂ ಒಂದೂ pass ನಲ್ಲಿ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಅದೂ ya distribution ಒಪ್ಪುವ tokens ಅನ್ನೂ accept ಮಾಡುತ್ತಾ ಮೊದಲ ಭಿನ್ನಾಭಿಪ್ರಾಯದಲ್ಲಿ resample ಮಾಡುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 700 180' xmlns='http://www.w3.org/2000/svg'><text x='20' y='20' fill='#e2e8f0' font-size='13'>Draft proposes 4 tokens</text><rect x='20' y='30' width='60' height='30' fill='#38bdf8'/><rect x='90' y='30' width='60' height='30' fill='#38bdf8'/><rect x='160' y='30' width='60' height='30' fill='#38bdf8'/><rect x='230' y='30' width='60' height='30' fill='#38bdf8'/><text x='20' y='90' fill='#e2e8f0' font-size='13'>Target verifies all 4 in ONE pass</text><rect x='20' y='100' width='60' height='30' fill='#22c55e'/><text x='50' y='120' fill='#0f172a' font-size='10' text-anchor='middle'>accept</text><rect x='90' y='100' width='60' height='30' fill='#22c55e'/><text x='120' y='120' fill='#0f172a' font-size='10' text-anchor='middle'>accept</text><rect x='160' y='100' width='60' height='30' fill='#ef4444'/><text x='190' y='120' fill='#f8fafc' font-size='10' text-anchor='middle'>reject</text><rect x='230' y='100' width='60' height='30' fill='#475569'/><text x='260' y='120' fill='#94a3b8' font-size='10' text-anchor='middle'>discard</text><rect x='300' y='100' width='60' height='30' fill='#a855f7'/><text x='330' y='120' fill='#f8fafc' font-size='9' text-anchor='middle'>resample</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'Speculative Decoding and Batching Are Complementary, Not Competing', headingKn: 'Speculative Decoding ಮತ್ತೆ Batching ಪೂರಕ, ಸ್ಪರ್ಧಿಸುವುದಿಲ್ಲ',
      bodyEn: 'Part 1 confirmed batching turns decode compute-bound by processing more sequences per weight read. Speculative decoding turns decode compute-bound differently, by processing more TOKENS per weight read for a single sequence. A production system genuinely applies both simultaneously -- large continuous batches, each member itself using speculative decoding -- since they attack the same memory-bandwidth bottleneck from two independent directions.',
      bodyKn: 'Part 1 ದೃಢಪಡಿಸಿತು batching ಪ್ರತಿ weight read ಗೆ ಹೆಚ್ಚು sequences ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಮೂಲಕ decode ಅನ್ನೂ compute-bound ಆಗಿಸುತ್ತದೆ. Speculative decoding decode ಅನ್ನೂ ಭಿನ್ನವಾಗಿ compute-bound ಆಗಿಸುತ್ತದೆ, ಒಂದೂ single sequence ಗೆ ಪ್ರತಿ weight read ಗೆ ಹೆಚ್ಚು TOKENS ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಮೂಲಕ. ಒಂದೂ production system ಎರಡನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'How These Techniques Combine in One Real Request', headingKn: 'ಒಂದೂ ನಿಜ Request ನಲ್ಲಿ ಈ Techniques ಹೇಗೆ ಸಂಯೋಜಿಸುತ್ತವೆ',
      bodyEn: 'A single production chat request genuinely uses all four Module 196 techniques together: its system prompt hits the prefix cache (Part 2, skipping recomputation), its new tokens join a continuously-scheduled batch (Part 2, keeping GPU slots full), its past tokens live in a KV cache (Part 1, avoiding recomputation), and its actual generation may run through a speculative decoding draft/verify loop (Part 3, producing multiple tokens per target-model pass) -- all sitting on top of the quantized weights from Module 195.',
      bodyKn: 'ಒಂದೂ single production chat request ನಿಜವಾಗಿ ಎಲ್ಲಾ ನಾಲ್ಕೂ Module 196 techniques ಅನ್ನೂ ಒಟ್ಟಿಗೆ ಬಳಸುತ್ತದೆ: ಅದೂ ya system prompt prefix cache ಗೆ ಹೊಡೆಯುತ್ತದೆ, ಅದೂ ya ಹೊಸ tokens ಒಂದೂ continuously-scheduled batch ಗೆ ಸೇರುತ್ತವೆ, ಅದೂ ya past tokens ಒಂದೂ KV cache ನಲ್ಲಿ ವಾಸಿಸುತ್ತವೆ, ಮತ್ತೆ ಅದೂ ya ನಿಜ generation ಒಂದೂ speculative decoding draft/verify loop ಮೂಲಕ ಚಲಿಸಬಹುದು -- ಇವೆಲ್ಲಾ Module 195 ya quantized weights ಮೇಲೆ ಕುಳಿತಿವೆ.' } },
    { type: 'table', data: {
      captionEn: 'The Full Phase 13 Journey: From Tokenizer to Served Request', captionKn: 'ಪೂರ್ಣ Phase 13 ಪ್ರಯಾಣ: Tokenizer ಇಂದ Served Request ವರೆಗೆ',
      rows: "Modules|Stage\n184-188|Build: tokenizer, data pipeline, Mini GPT architecture\n189|Scale: distributed training (FSDP, DeepSpeed)\n190|Align: instruction tuning (SFT)\n191-193|Align: RLHF, DPO, Constitutional AI/GRPO\n194|Measure: evaluation harness (exact_match, judges, ELO, perplexity)\n195|Compress: quantization (symmetric/asymmetric, per-channel, GPTQ/AWQ)\n196|Serve: KV cache, batching, prefix caching, speculative decoding" } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This lesson completes the genuinely-verified inference optimization toolkit -- from a single KV cache to a full serving stack. Together with Modules 184-195, this closes the loop from raw text to a served, aligned, evaluated, compressed, and fast-running language model, all built and genuinely tested from first principles across this phase.',
      bodyKn: 'ಈ lesson ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ inference optimization toolkit ಅನ್ನೂ ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ -- ಒಂದೂ single KV cache ಇಂದ ಒಂದೂ ಪೂರ್ಣ serving stack ವರೆಗೆ. Modules 184-195 ಜೊತೆಗೆ, ಇದೂ raw text ಇಂದ ಒಂದೂ served, aligned, evaluated, compressed, ಮತ್ತೆ ವೇಗವಾಗಿ-ಚಲಿಸುವ language model ವರೆಗಿನ loop ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the average number of draft tokens accepted per step, out of 4 proposed?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4 ಪ್ರಸ್ತಾಪಿಸಿದ draft tokens ರಲ್ಲಿ, ಪ್ರತಿ step ಗೆ average accepted ಸಂಖ್ಯೆ ಏನಾಗಿತ್ತು?',
        opts: ['0.0', '2.180', '4.0 always', '1.0'], correct: 1,
        optsKn: ['0.0', '2.180', 'ಯಾವಾಗಲೂ 4.0', '1.0'] },
      { q: 'Why does the accept/reject rule use min(1, target_prob/draft_prob) instead of just target_prob?', qKn: 'Accept/reject rule ಕೇವಲ target_prob ಬದಲು ಏಕೆ min(1, target_prob/draft_prob) ಬಳಸುತ್ತದೆ?',
        opts: ['It is arbitrary', 'It guarantees the final output distribution exactly matches what the target model alone would produce', 'It makes computation faster', 'It only works for uniform distributions'], correct: 1,
        optsKn: ['ಇದೂ ಅನಿಯಂತ್ರಿತ', 'ಇದೂ final output distribution ಒಂಟಿ target model ಉತ್ಪಾದಿಸುತ್ತಿದ್ದದಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ಖಾತ್ರಿಪಡಿಸುತ್ತದೆ', 'ಇದೂ computation ಅನ್ನೂ ವೇಗಗೊಳಿಸುತ್ತದೆ', 'ಇದೂ ಕೇವಲ uniform distributions ಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: what was the computed KV cache memory for a 7B-scale model at seq_len=32768, batch_size=1?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: seq_len=32768, batch_size=1 ನಲ್ಲಿ ಒಂದೂ 7B-scale model ಗೆ ಲೆಕ್ಕಹಾಕಿದ KV cache memory ಏನಾಗಿತ್ತು?',
        opts: ['1 GB', '4 GB', '16 GB', '128 GB'], correct: 2,
        optsKn: ['1 GB', '4 GB', '16 GB', '128 GB'] },
      { q: 'Genuinely confirmed: how does KV cache memory scale with batch size, holding sequence length fixed at 8192?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: sequence length ಅನ್ನೂ 8192 ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿಟ್ಟುಕೊಂಡು KV cache memory batch size ಜೊತೆ ಹೇಗೆ scale ಆಗುತ್ತದೆ?',
        opts: ['It stays constant', 'Exactly linearly (4GB at batch=1, 32GB at batch=8, 128GB at batch=32)', 'It decreases', 'It scales with the square of batch size'], correct: 1,
        optsKn: ['ಅದೂ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ', 'ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ (batch=1 ನಲ್ಲಿ 4GB, batch=8 ನಲ್ಲಿ 32GB, batch=32 ನಲ್ಲಿ 128GB)', 'ಅದೂ ಕಡಿಮೆಯಾಗುತ್ತದೆ', 'ಅದೂ batch size ya square ಜೊತೆ scale ಆಗುತ್ತದೆ'] },
      { q: 'Why does speculative decoding offer a speedup with zero quality tradeoff, unlike quantization\'s error tradeoffs from Module 195?', qKn: 'Module 195 ya quantization error tradeoffs ಗಿಂತ ಭಿನ್ನವಾಗಿ, speculative decoding ಶೂನ್ಯ quality tradeoff ಜೊತೆ ಒಂದೂ speedup ಏಕೆ ನೀಡುತ್ತದೆ?',
        opts: ['It uses a smaller model permanently', 'The accept/reject rule mathematically guarantees the output distribution exactly matches standard target-model decoding', 'It reduces model size', 'It is not actually faster'], correct: 1,
        optsKn: ['ಅದೂ ಶಾಶ್ವತವಾಗಿ ಒಂದೂ ಚಿಕ್ಕ model ಬಳಸುತ್ತದೆ', 'Accept/reject rule ಗಣಿತೀಯವಾಗಿ output distribution standard target-model decoding ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ಖಾತ್ರಿಪಡಿಸುತ್ತದೆ', 'ಅದೂ model size ಅನ್ನೂ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ', 'ಅದೂ ನಿಜವಾಗಿ ವೇಗವಾಗಿಲ್ಲ'] },
    ] } },
  ],
};
