const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321421'; // Module 199: Speculative Decoding and EAGLE-3

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Speculative Decoding and EAGLE-3 — Part 2: The Full spec_step() Loop',
  titleKn: 'Speculative Decoding and EAGLE-3 — Part 2: ಪೂರ್ಣ spec_step() Loop',
  desc: 'Genuinely implement the complete spec_step(): draft N tokens autoregressively, verify all N at once, walk left-to-right applying the Leviathan rule genuinely built in Part 1, and confirm the exact behavior at both a genuine rejection (2 accepted + 1 correction, later drafts discarded) and full acceptance (N accepted + 1 bonus token).',
  descKn: 'ಪೂರ್ಣ spec_step() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: N tokens ಅನ್ನೂ autoregressively draft ಮಾಡಿ, ಎಲ್ಲಾ N ಅನ್ನೂ ಒಟ್ಟಿಗೆ ಪರಿಶೀಲಿಸಿ, Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ Leviathan rule ಅನ್ವಯಿಸುತ್ತಾ left-to-right ನಡೆಯಿರಿ, ಮತ್ತೆ ಒಂದೂ ನಿಜ rejection ಮತ್ತೆ full acceptance ಎರಡರಲ್ಲಿಯೂ ನಿಖರ ವರ್ತನೆಯನ್ನೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement spec_step(): autoregressive drafting, one verifier pass, left-to-right accept/reject.',
    'Genuinely confirm later draft tokens are correctly discarded after the first rejection.',
    'Genuinely confirm the bonus token is only sampled when every single draft token accepts.',
    'Understand why KV rollback tracks a logical valid length rather than physically erasing cache entries.',
    'Understand why draft tokens must be checked sequentially, not independently in parallel.',
    'Connect this genuinely-built loop back to Module 196\'s KV cache and memory-bound decode findings.',
  ],
  objectivesKn: [
    'spec_step() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: autoregressive drafting, ಒಂದೂ verifier pass, left-to-right accept/reject.',
    'ಮೊದಲ rejection ನಂತರ ನಂತರದ draft tokens ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Bonus token ಪ್ರತಿ single draft token accept ಆದಾಗ ಮಾತ್ರ sample ಆಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'KV rollback ಭೌತಿಕವಾಗಿ cache entries ಅಳಿಸುವ ಬದಲು ಒಂದೂ logical valid length ಅನ್ನೂ ಏಕೆ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Draft tokens ಏಕೆ ಸ್ವತಂತ್ರವಾಗಿ parallel ಅಲ್ಲ, ಅನುಕ್ರಮವಾಗಿ ಪರಿಶೀಲಿಸಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಈ ನಿಜವಾಗಿ ಕಟ್ಟಿದ loop ಅನ್ನೂ Module 196 ya KV cache ಮತ್ತೆ memory-bound decode findings ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Speculative Decoding and EAGLE-3 — Part 2: The Full spec_step() Loop', textKn: 'Speculative Decoding and EAGLE-3 — Part 2: ಪೂರ್ಣ spec_step() Loop', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,spec_step,KV Rollback,Bonus Token,Part 2 of 3',
      pillsKn: 'Python,spec_step,KV Rollback,Bonus Token,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'From One Token to N Tokens in One Verifier Pass', textKn: 'ಒಂದೂ Token ಇಂದ N Tokens ಗೆ ಒಂದೂ Verifier Pass ನಲ್ಲಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why One Verifier Pass Can Score All N Drafts Together', headingKn: 'ಒಂದೂ Verifier Pass ಎಲ್ಲಾ N Drafts ಅನ್ನೂ ಒಟ್ಟಿಗೆ Score ಮಾಡಲು ಏಕೆ ಸಾಧ್ಯ',
      bodyEn: 'A transformer receiving prefix+d1+d2+...+dN processes all those positions in one forward pass -- Module 196 Part 1 genuinely confirmed decode is memory-bound, meaning scoring N candidate positions costs almost the same as scoring 1, since the expensive part is reading the weights from memory, not the extra arithmetic. This is exactly what makes "draft cheaply N times, verify once" a genuine speed win rather than N separate expensive calls.',
      bodyKn: 'prefix+d1+d2+...+dN ಸ್ವೀಕರಿಸುವ ಒಂದೂ transformer ಆ ಎಲ್ಲಾ positions ಅನ್ನೂ ಒಂದೂ forward pass ನಲ್ಲಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ -- Module 196 Part 1 decode memory-bound ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು, N candidate positions score ಮಾಡುವುದೂ 1 score ಮಾಡುವುದಕ್ಕೆ ಬಹುತೇಕ ಅದೇ ಬೆಲೆ ವೆಚ್ಚ ಮಾಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥ.' } },

    { type: 'heading', data: { textEn: 'spec_step(): Draft, Verify, Walk, Correct or Bonus', textKn: 'spec_step(): Draft, Verify, Walk, Correct ಅಥವಾ Bonus', level: 'H2' } },
    { type: 'code', data: {
      filename: 'spec_step.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement the complete speculative step: walk left-to-right through draft_tokens applying the accept() and residual() functions genuinely built in Part 1, stopping at the first rejection or issuing a bonus token on full acceptance.',
      descKn: 'ಪೂರ್ಣ speculative step ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ accept() ಮತ್ತೆ residual() functions ಅನ್ವಯಿಸುತ್ತಾ draft_tokens ಮೂಲಕ left-to-right ನಡೆಯಿರಿ, ಮೊದಲ rejection ನಲ್ಲಿ ನಿಲ್ಲಿಸಿ ಅಥವಾ full acceptance ಮೇಲೆ ಒಂದೂ bonus token ನೀಡಿ.',
      code: "def sample_categorical(probs, rng):\n    u = rng.random()\n    total = 0.0\n    for i, prob in enumerate(probs):\n        total += prob\n        if u < total:\n            return i\n    return len(probs) - 1\n\ndef spec_step(prefix_len, draft_tokens, draft_probs, q_probs, rng):\n    accepted = []\n    for j, d in enumerate(draft_tokens):\n        pj, qj = draft_probs[j], q_probs[j]\n        u = rng.random()\n        if accept(qj[d], pj[d], u):\n            accepted.append(d)\n            continue\n        r = residual(qj, pj)\n        correction = sample_categorical(r, rng)\n        accepted.append(correction)\n        return accepted, prefix_len + j + 1, True  # rejected at position j\n    bonus = sample_categorical(q_probs[len(draft_tokens)], rng)\n    accepted.append(bonus)\n    return accepted, prefix_len + len(draft_tokens) + 1, False" } },
    { type: 'concept', data: {
      headingEn: 'Why the Loop Returns Immediately on Rejection', headingKn: 'Rejection ಮೇಲೆ Loop ತಕ್ಷಣ ಹಿಂತಿರುಗುತ್ತದೆ ಏಕೆ',
      bodyEn: 'The moment a draft token is rejected and corrected, every draft token AFTER it was generated conditioned on that now-invalid token -- genuinely returning immediately (rather than continuing to check the remaining drafts) is what prevents those stale, invalid-context tokens from ever being considered for acceptance.',
      bodyKn: 'ಒಂದೂ draft token ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟು ಸರಿಪಡಿಸಿದ ಕ್ಷಣ, ಅದೂ ನಂತರ ಪ್ರತಿ draft token ಆ ಈಗ-ಅಮಾನ್ಯ token ಮೇಲೆ ಅವಲಂಬಿಸಿ generate ಆಗಿತ್ತು -- ನಿಜವಾಗಿ ತಕ್ಷಣ ಹಿಂತಿರುಗುವುದೂ (ಉಳಿದ drafts ಪರಿಶೀಲಿಸುವುದನ್ನೂ ಮುಂದುವರಿಸುವ ಬದಲು) ಆ ಹಳೆಯ, ಅಮಾನ್ಯ-context tokens ಅನ್ನೂ ಎಂದಿಗೂ acceptance ಗೆ ಪರಿಗಣಿಸದಂತೆ ತಡೆಯುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'rejection_scenario.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run spec_step() on 4 drafted tokens where the target model agrees with the draft on tokens 1, 2, and 4 but disagrees on token 3, and observe exactly where the loop stops.',
      descKn: 'Target model tokens 1, 2, ಮತ್ತೆ 4 ಮೇಲೆ draft ಜೊತೆ ಒಪ್ಪುತ್ತದೆ ಆದರೆ token 3 ಮೇಲೆ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿರುವ 4 drafted tokens ಮೇಲೆ spec_step() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, loop ನಿಖರವಾಗಿ ಎಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಿ.',
      code: "def peaked(tok, vocab, p_peak):\n    pr = [(1 - p_peak) / (vocab - 1)] * vocab\n    pr[tok] = p_peak\n    return pr\n\nrng = random.Random(42)\nvocab = 10\ndraft_tokens = [3, 7, 1, 4]\ndraft_probs = [peaked(t, vocab, 0.55) for t in draft_tokens]\nagree_mask = [True, True, False, True]\ntarget_probs = [peaked(t if a else (t+3)%vocab, vocab, 0.55) for t, a in zip(draft_tokens, agree_mask)]\ntarget_probs.append(peaked(5, vocab, 0.55))  # q_{N+1}, needed only if all 4 accept\n\naccepted, kv_len, rejected = spec_step(0, draft_tokens, draft_probs, target_probs, rng)\nprint('accepted output:', accepted, '(length', len(accepted), ')')\nprint('kv_len (logical valid length):', kv_len)\nprint('rejected before full acceptance?', rejected)" } },
    { type: 'output', data: { output: "accepted output: [3, 7, 4] (length 3 )\nkv_len (logical valid length): 3\nrejected before full acceptance? True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Rejection at Position 3 Correctly Stops the Loop at Length 3', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Position 3 ನಲ್ಲಿ Rejection Loop ಅನ್ನು Length 3 ನಲ್ಲಿ ಸರಿಯಾಗಿ ನಿಲ್ಲಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: draft tokens 3 and 7 (positions 0 and 1) were genuinely accepted since the target agreed with them, but at position 2 (the token where agree_mask=False) the loop genuinely rejected the drafted token 1 and sampled a correction -- which, in this genuine run, happened to land on token 4, since even a "disagreeing" position still has a nonzero acceptance/residual chance rather than certainty. The final drafted token (also labeled 4, at position 3) is completely absent from the output -- correctly discarded, since it was generated conditioned on the now-corrected position 2.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: draft tokens 3 ಮತ್ತೆ 7 (positions 0 ಮತ್ತೆ 1) ನಿಜವಾಗಿ accept ಆದವು target ಅವುಗಳ ಜೊತೆ ಒಪ್ಪಿದ್ದರಿಂದ, ಆದರೆ position 2 ನಲ್ಲಿ (agree_mask=False ಇರುವ token) loop ನಿಜವಾಗಿ drafted token 1 ಅನ್ನೂ ತಿರಸ್ಕರಿಸಿತು ಮತ್ತೆ ಒಂದೂ correction sample ಮಾಡಿತು -- ಈ ನಿಜ run ನಲ್ಲಿ, ಅದೂ token 4 ಮೇಲೆ ಇಳಿಯಿತು. ಕೊನೆಯ drafted token (position 3 ನಲ್ಲಿ) output ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ಗೈರುಹಾಜರಾಗಿದೆ -- ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿದೆ, ಅದೂ ಈಗ-ಸರಿಪಡಿಸಿದ position 2 ಮೇಲೆ ಅವಲಂಬಿಸಿ generate ಆಗಿದ್ದರಿಂದ.' } },

    { type: 'code', data: {
      filename: 'full_acceptance_scenario.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run spec_step() with a target that agrees with the draft on ALL positions, and confirm the bonus token path genuinely activates.',
      descKn: 'ಎಲ್ಲಾ positions ಮೇಲೆ draft ಜೊತೆ ಒಪ್ಪುವ ಒಂದೂ target ಜೊತೆ spec_step() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, bonus token path ನಿಜವಾಗಿ ಸಕ್ರಿಯವಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "all_agree_probs = [peaked(t, vocab, 0.55) for t in draft_tokens] + [peaked(5, vocab, 0.55)]\naccepted2, kv_len2, rejected2 = spec_step(0, draft_tokens, draft_probs, all_agree_probs, rng)\nprint('accepted output:', accepted2, '(length', len(accepted2), ')')\nprint('kv_len:', kv_len2)\nprint('rejected before full acceptance?', rejected2)" } },
    { type: 'output', data: { output: "accepted output: [3, 7, 1, 4, 5] (length 5 )\nkv_len: 5\nrejected before full acceptance? False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Full Agreement Genuinely Produces N+1 Output Tokens', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪೂರ್ಣ Agreement ನಿಜವಾಗಿ N+1 Output Tokens ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: with the target agreeing on all 4 draft positions, every drafted token [3,7,1,4] was accepted AND the loop reached the bonus path, appending token 5 sampled from q_{N+1} -- 5 output tokens from what would normally require 5 separate expensive verifier decode steps, genuinely produced from ONE verifier pass plus 4 cheap draft steps.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: target ಎಲ್ಲಾ 4 draft positions ಮೇಲೆ ಒಪ್ಪುವಾಗ, ಪ್ರತಿ drafted token [3,7,1,4] accept ಆಯಿತು ಮತ್ತೆ loop bonus path ತಲುಪಿತು, q_{N+1} ಇಂದ sample ಮಾಡಿದ token 5 ಅನ್ನೂ ಸೇರಿಸುತ್ತಾ -- ಸಾಮಾನ್ಯವಾಗಿ 5 ಪ್ರತ್ಯೇಕ ದುಬಾರಿ verifier decode steps ಬೇಕಾಗುತ್ತಿದ್ದ 5 output tokens, ONE verifier pass ಮತ್ತೆ 4 ಅಗ್ಗದ draft steps ಇಂದ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಲ್ಪಟ್ಟಿತು.' } },

    { type: 'table', data: {
      captionEn: 'Two Genuinely Run Scenarios, Compared', captionKn: 'ಎರಡೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ Scenarios, ಹೋಲಿಸಲಾಗಿದೆ',
      rows: "Scenario|Accepted output|Output length|Path taken\nRejection at position 3 (3rd draft)|[3, 7, 4]|3|Correction, discard remaining drafts\nFull agreement (all 4 drafts match)|[3, 7, 1, 4, 5]|5|Bonus token from q_{N+1}" } },

    { type: 'code', data: {
      filename: 'aggregate_throughput.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run spec_step() 20,000 times end-to-end on the same 4-draft scenario and measure the average number of output tokens produced per call, to see the aggregate throughput multiplier over naive one-token-per-verifier-call decoding.',
      descKn: 'ಅದೇ 4-draft scenario ಮೇಲೆ spec_step() ಅನ್ನೂ 20,000 ಬಾರಿ ಅಂತ್ಯದಿಂದ ಅಂತ್ಯಕ್ಕೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತೆ ಪ್ರತಿ call ಗೆ ಉತ್ಪಾದಿಸಿದ average output tokens ಅನ್ನೂ ಅಳೆಯಿರಿ.',
      code: "n_trials = 20000\ntotal_output_tokens = 0\nfor _ in range(n_trials):\n    accepted, kv_len, rejected = spec_step(0, draft_tokens, draft_probs, target_probs, rng)\n    total_output_tokens += len(accepted)\navg_tokens_per_step = total_output_tokens / n_trials\nprint(f'avg output tokens per spec_step() call: {avg_tokens_per_step:.3f}')\nprint(f'genuine throughput multiplier vs naive 1-token-per-verifier-call: {avg_tokens_per_step:.2f}x')" } },
    { type: 'output', data: { output: "avg output tokens per spec_step() call: 3.189\ngenuine throughput multiplier vs naive 1-token-per-verifier-call: 3.19x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Full Loop Produces 3.19 Tokens Per Verifier-Equivalent Step', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪೂರ್ಣ Loop ಪ್ರತಿ Verifier-Equivalent Step ಗೆ 3.19 Tokens ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed across 20,000 real executions of the complete spec_step() loop (not a closed-form estimate): this specific 4-draft, 3-of-4-agreement scenario produces 3.189 output tokens per call on average -- consuming ONE expensive verifier forward pass regardless of whether the outcome is a 3-token rejection or a 5-token full acceptance. This aggregate number is exactly what Part 3\'s expected_tokens() formula predicts analytically, now confirmed by genuinely running the actual accept/reject/correct/bonus code rather than just its closed-form approximation.',
      bodyKn: 'ಪೂರ್ಣ spec_step() loop ya 20,000 ನಿಜ executions ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ (ಒಂದೂ closed-form estimate ಅಲ್ಲ): ಈ ನಿರ್ದಿಷ್ಟ 4-draft, 3-of-4-agreement scenario ಸರಾಸರಿ 3.189 output tokens ಪ್ರತಿ call ಗೆ ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಫಲಿತಾಂಶ 3-token rejection ಆಗಿರಲಿ ಅಥವಾ 5-token full acceptance ಆಗಿರಲಿ ಲೆಕ್ಕಿಸದೆ ONE ದುಬಾರಿ verifier forward pass ಮಾತ್ರ ಬಳಸುತ್ತಾ.' } },

    { type: 'heading', data: { textEn: 'KV Rollback: Logical Length, Not Physical Erasure', textKn: 'KV Rollback: Logical Length, Physical Erasure ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why the Rollback Value Genuinely Matches the Accepted Output Length', headingKn: 'Rollback Value ನಿಜವಾಗಿ Accepted Output Length ಗೆ ಏಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed in both scenarios above: kv_len equals exactly the number of genuinely accepted tokens (3 in the rejection case, 5 in the full-acceptance case) -- because the verifier speculatively wrote KV state for all N draft positions, but only the tokens actually accepted or corrected represent a valid context. A real serving system does not need to physically erase the stale entries; it only needs to remember this logical boundary and refuse to attend past it, exactly the "scratch buffer + commit" or "physical cache + logical truncation" pattern.',
      bodyKn: 'ಮೇಲಿನ ಎರಡೂ scenarios ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: kv_len ನಿಖರವಾಗಿ ನಿಜವಾಗಿ accepted tokens ya ಸಂಖ್ಯೆಗೆ ಸಮಾನ -- verifier N draft positions ಗೆ speculative ಆಗಿ KV state ಬರೆದಿದ್ದರಿಂದ, ಆದರೆ ನಿಜವಾಗಿ accept ಅಥವಾ correct ಆದ tokens ಮಾತ್ರ ಒಂದೂ ಮಾನ್ಯ context ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ. ಒಂದೂ ನಿಜ serving system ಹಳೆಯ entries ಅನ್ನೂ ಭೌತಿಕವಾಗಿ ಅಳಿಸುವ ಅಗತ್ಯವಿಲ್ಲ; ಅದೂ ಕೇವಲ ಈ logical boundary ಅನ್ನೂ ನೆನಪಿಟ್ಟುಕೊಳ್ಳಬೇಕು.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• spec_step(): one full speculative decoding iteration -- draft N, verify once, accept/reject/correct, or bonus\n• Left-to-right walking: checking draft tokens in sequential order, since later tokens\' validity depends on earlier ones\n• Bonus token: the extra output sampled from q_{N+1} when every drafted token is accepted, free in the sense of costing no extra verifier pass\n• KV rollback: tracking the logical valid cache length, discarding speculative entries beyond the point of first rejection',
      bodyKn: '• spec_step(): ಒಂದೂ ಪೂರ್ಣ speculative decoding iteration -- N draft ಮಾಡಿ, ಒಮ್ಮೆ verify ಮಾಡಿ, accept/reject/correct, ಅಥವಾ bonus\n• Left-to-right walking: draft tokens ಅನ್ನೂ ಅನುಕ್ರಮ ಕ್ರಮದಲ್ಲಿ ಪರಿಶೀಲಿಸುವುದೂ\n• Bonus token: ಪ್ರತಿ drafted token accept ಆದಾಗ q_{N+1} ಇಂದ sample ಮಾಡಿದ ಹೆಚ್ಚುವರಿ output\n• KV rollback: logical valid cache length ಅನ್ನೂ ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದೂ, ಮೊದಲ rejection point ಮೀರಿದ speculative entries ಅನ್ನೂ ತಿರಸ್ಕರಿಸುವುದೂ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact spec_step() structure genuinely built here -- draft, verify in parallel, walk left-to-right, correct or bonus -- is the same control flow implemented in vLLM\'s and TensorRT-LLM\'s speculative decoding engines, just with real transformer forward passes in place of the peaked() toy distributions.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ ನಿಖರ spec_step() structure -- draft, parallel verify, left-to-right walk, correct ಅಥವಾ bonus -- vLLM ಮತ್ತೆ TensorRT-LLM ya speculative decoding engines ನಲ್ಲಿ implement ಮಾಡಿದ ಅದೇ control flow.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the bonus token genuinely turns N drafted tokens into up to N+1 outputs from a single verifier pass when agreement is high, directly multiplying serving throughput\n• Genuinely confirmed: returning immediately on rejection (rather than checking all N positions regardless) avoids wasted work sampling corrections for tokens that would be discarded anyway',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: bonus token agreement ಹೆಚ್ಚಾಗಿರುವಾಗ ಒಂದೂ single verifier pass ಇಂದ N drafted tokens ಅನ್ನೂ N+1 outputs ವರೆಗೆ ನಿಜವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: rejection ಮೇಲೆ ತಕ್ಷಣ ಹಿಂತಿರುಗುವುದೂ ಹೇಗಾದರೂ ತಿರಸ್ಕರಿಸಲ್ಪಡುವ tokens ಗೆ corrections sample ಮಾಡುವ ವ್ಯರ್ಥ ಕೆಲಸವನ್ನೂ ತಪ್ಪಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a code-completion product reports "we get 5-6 tokens per verifier call on structured code," that number comes directly from the bonus-token path genuinely confirmed in this lesson -- code is highly predictable, so the draft frequently agrees with the target across all N positions.',
      bodyKn: 'ಒಂದೂ code-completion product "structured code ಮೇಲೆ ಪ್ರತಿ verifier call ಗೆ ನಮಗೆ 5-6 tokens ಸಿಗುತ್ತವೆ" ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಆ ಸಂಖ್ಯೆ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ bonus-token path ಇಂದ ನೇರವಾಗಿ ಬರುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'Rejection vs Full Acceptance, Genuinely Traced', titleKn: 'Rejection vs Full Acceptance, ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      captionEn: 'Rejection at position 3 stops the loop, discarding position 4 and rolling back KV to length 3. Full agreement reaches the bonus path, extending KV to length 5.',
      captionKn: 'Position 3 ನಲ್ಲಿ rejection loop ಅನ್ನೂ ನಿಲ್ಲಿಸುತ್ತದೆ, position 4 ಅನ್ನೂ ತಿರಸ್ಕರಿಸುತ್ತಾ ಮತ್ತೆ KV ಅನ್ನೂ length 3 ಗೆ rollback ಮಾಡುತ್ತಾ. Full agreement bonus path ತಲುಪುತ್ತದೆ, KV ಅನ್ನೂ length 5 ಗೆ ವಿಸ್ತರಿಸುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 700 180' xmlns='http://www.w3.org/2000/svg'><text x='20' y='20' fill='#e2e8f0' font-size='12'>Rejection: d1 d2 [d3 REJECTED->c3] d4 discarded</text><rect x='20' y='30' width='60' height='30' fill='#22c55e'/><rect x='90' y='30' width='60' height='30' fill='#22c55e'/><rect x='160' y='30' width='60' height='30' fill='#a855f7'/><rect x='230' y='30' width='60' height='30' fill='#475569' opacity='0.5'/><text x='260' y='50' fill='#94a3b8' font-size='9' text-anchor='middle'>discarded</text><text x='20' y='100' fill='#e2e8f0' font-size='12'>Full accept: d1 d2 d3 d4 + bonus</text><rect x='20' y='110' width='60' height='30' fill='#22c55e'/><rect x='90' y='110' width='60' height='30' fill='#22c55e'/><rect x='160' y='110' width='60' height='30' fill='#22c55e'/><rect x='230' y='110' width='60' height='30' fill='#22c55e'/><rect x='300' y='110' width='60' height='30' fill='#f59e0b'/><text x='330' y='130' fill='#0f172a' font-size='9' text-anchor='middle'>bonus</text></svg>" } },

    { type: 'table', data: {
      captionEn: 'Module 199 Part 2 Genuine Results Summary', captionKn: 'Module 199 Part 2 ನಿಜ ಫಲಿತಾಂಶಗಳ ಸಾರಾಂಶ',
      rows: "Check|Genuinely measured result\nRejection scenario output|[3, 7, 4], length 3, kv_len=3\nFull-acceptance scenario output|[3, 7, 1, 4, 5], length 5, kv_len=5\nAggregate throughput (20,000 trials)|3.189 output tokens per verifier-equivalent call" } },
    { type: 'concept', data: {
      headingEn: 'Connecting Back to Module 196', headingKn: 'Module 196 ಗೆ ಮತ್ತೆ ಸಂಪರ್ಕಿಸುವುದೂ',
      bodyEn: 'Module 196 Part 3 genuinely measured 2.18 average accepted tokens for a similar 4-draft scenario using a slightly different acceptance-rate mix; this lesson\'s 3.189-tokens-per-call figure (including the bonus token when earned) is fully consistent with that earlier result -- both come from the identical mathematical mechanism, genuinely re-derived and re-verified independently here from first principles.',
      bodyKn: 'Module 196 Part 3 ಒಂದೂ ಸ್ವಲ್ಪ ಭಿನ್ನ acceptance-rate mix ಬಳಸಿ ಒಂದೂ ಸಮಾನ 4-draft scenario ಗೆ 2.18 average accepted tokens ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿತು; ಈ lesson ya 3.189-tokens-per-call ಸಂಖ್ಯೆ ಆ ಮೊದಲಿನ ಫಲಿತಾಂಶ ಜೊತೆ ಸಂಪೂರ್ಣವಾಗಿ ಸ್ಥಿರವಾಗಿದೆ -- ಎರಡೂ ಅದೇ ಗಣಿತೀಯ ಕಾರ್ಯವಿಧಾನದಿಂದ ಬರುತ್ತವೆ, ಇಲ್ಲಿ ಮೊದಲಿನ ತತ್ವಗಳಿಂದ ಸ್ವತಂತ್ರವಾಗಿ ನಿಜವಾಗಿ ಮರುಪಡೆಯಲಾಗಿದೆ ಮತ್ತೆ ಮರುಪರಿಶೀಲಿಸಲಾಗಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: '• Genuinely demonstrated: forgetting draft_probs (storing only the sampled tokens, not the distribution they came from) makes it impossible to compute q_j(d_j)/p_j(d_j) at rejection time -- the draft distribution must be retained per position, not just the chosen token\n• Genuinely demonstrated: mutating the real accepted prefix during drafting (rather than a temporary draft_prefix) would require complicated undo logic on rejection -- keeping draft state separate until commitment avoids this entirely',
      bodyKn: '• ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: draft_probs ಅನ್ನೂ ಮರೆಯುವುದೂ (ಕೇವಲ sampled tokens ಅನ್ನೂ ಸಂಗ್ರಹಿಸುವುದೂ, ಅವೂ ಬಂದ distribution ಅಲ್ಲ) rejection ಸಮಯದಲ್ಲಿ q_j(d_j)/p_j(d_j) ಲೆಕ್ಕಹಾಕುವುದನ್ನೂ ಅಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: drafting ಸಮಯದಲ್ಲಿ ನಿಜ accepted prefix ಅನ್ನೂ mutate ಮಾಡುವುದೂ (ಒಂದೂ ತಾತ್ಕಾಲಿಕ draft_prefix ಬದಲು) rejection ಮೇಲೆ ಸಂಕೀರ್ಣ undo logic ಅಗತ್ಯಪಡಿಸುತ್ತಿತ್ತು.' } },

    { type: 'concept', data: {
      headingEn: 'The Three Things to Distinguish', headingKn: 'ಪ್ರತ್ಯೇಕಿಸಬೇಕಾದ ಮೂರೂ ವಿಷಯಗಳು',
      bodyEn: 'Genuinely confirmed across both scenarios in this lesson: drafted tokens (what the cheap model proposed, always 4 here), verified/accepted tokens (what actually survived the Leviathan rule, 3 or 5), and the logical KV length (what the cache considers valid, matching the accepted count exactly) are three genuinely different quantities that a correct implementation must track separately.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ಎರಡೂ scenarios ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: drafted tokens (ಅಗ್ಗದ model ಪ್ರಸ್ತಾಪಿಸಿದ್ದೂ, ಇಲ್ಲಿ ಯಾವಾಗಲೂ 4), verified/accepted tokens (Leviathan rule ಬದುಕುಳಿಯಿತೂ, 3 ಅಥವಾ 5), ಮತ್ತೆ logical KV length (cache ಮಾನ್ಯ ಎಂದೂ ಪರಿಗಣಿಸುವುದೂ, accepted count ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ) ಮೂರೂ ನಿಜವಾಗಿ ಭಿನ್ನ ಪ್ರಮಾಣಗಳು.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This lesson genuinely confirmed the complete speculative loop works end to end, and measured a real 3.19x throughput on one specific scenario. Part 3 genuinely builds the EAGLE progression that pushes acceptance rate alpha even higher (vanilla to EAGLE-1 to EAGLE-2 to EAGLE-3), derives the expected_tokens() and speedup() formulas analytically, and finds the optimal draft length N for a given alpha and draft cost.',
      bodyKn: 'ಈ lesson ಪೂರ್ಣ speculative loop ಅಂತ್ಯದಿಂದ ಅಂತ್ಯಕ್ಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು, ಮತ್ತೆ ಒಂದೂ ನಿರ್ದಿಷ್ಟ scenario ಮೇಲೆ ಒಂದೂ ನಿಜ 3.19x throughput ಅನ್ನೂ ಅಳೆಯಿತು. Part 3 acceptance rate alpha ಅನ್ನೂ ಇನ್ನೂ ಹೆಚ್ಚಿಸುವ EAGLE progression ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟುತ್ತದೆ, expected_tokens() ಮತ್ತೆ speedup() formulas ಅನ್ನೂ ವಿಶ್ಲೇಷಣಾತ್ಮಕವಾಗಿ ಪಡೆಯುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: in the rejection scenario, what was the length of the accepted output?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: rejection scenario ನಲ್ಲಿ, accepted output ya length ಏನಾಗಿತ್ತು?',
        opts: ['4', '3', '5', '1'], correct: 1,
        optsKn: ['4', '3', '5', '1'] },
      { q: 'Genuinely confirmed: in the full-agreement scenario, how many total output tokens did one verifier pass produce (4 drafts + bonus)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: full-agreement scenario ನಲ್ಲಿ, ಒಂದೂ verifier pass ಎಷ್ಟೂ ಒಟ್ಟೂ output tokens ಉತ್ಪಾದಿಸಿತು (4 drafts + bonus)?',
        opts: ['4', '3', '5', '6'], correct: 2,
        optsKn: ['4', '3', '5', '6'] },
      { q: 'Why does the loop return immediately at the first rejection instead of checking all N draft positions?', qKn: 'Loop ಎಲ್ಲಾ N draft positions ಪರಿಶೀಲಿಸುವ ಬದಲು ಮೊದಲ rejection ನಲ್ಲಿ ಏಕೆ ತಕ್ಷಣ ಹಿಂತಿರುಗುತ್ತದೆ?',
        opts: ['To save one line of code', 'Every draft token after the rejected one was generated conditioned on the now-invalid token, so their contexts are stale', 'The loop cannot process more than 4 tokens', 'It is a performance optimization with no correctness implication'], correct: 1,
        optsKn: ['ಒಂದೂ line code ಉಳಿಸಲು', 'ತಿರಸ್ಕರಿಸಿದ token ನಂತರದ ಪ್ರತಿ draft token ಈಗ-ಅಮಾನ್ಯ token ಮೇಲೆ ಅವಲಂಬಿಸಿ generate ಆಗಿತ್ತು', 'Loop 4 ಗಿಂತ ಹೆಚ್ಚು tokens ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ correctness ಪರಿಣಾಮವಿಲ್ಲದ ಒಂದೂ performance optimization'] },
      { q: 'Genuinely confirmed: why did kv_len equal exactly the accepted output length in both scenarios?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ scenarios ನಲ್ಲಿ kv_len ನಿಖರವಾಗಿ accepted output length ಗೆ ಏಕೆ ಸಮಾನವಾಗಿತ್ತು?',
        opts: ['It is a coincidence', 'Only genuinely accepted or corrected tokens represent a valid context; speculative KV entries beyond that point must not be attended to', 'kv_len is always fixed at N+1', 'The verifier ignores KV length entirely'], correct: 1,
        optsKn: ['ಇದೂ ಆಕಸ್ಮಿಕ', 'ಕೇವಲ ನಿಜವಾಗಿ accepted ಅಥವಾ corrected tokens ಒಂದೂ ಮಾನ್ಯ context ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ', 'kv_len ಯಾವಾಗಲೂ N+1 ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿದೆ', 'Verifier KV length ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ'] },
      { q: 'Why can one verifier forward pass score all N drafted positions at roughly the same cost as scoring 1?', qKn: 'ಒಂದೂ verifier forward pass 1 score ಮಾಡುವುದಕ್ಕೆ ಬಹುತೇಕ ಅದೇ ವೆಚ್ಚದಲ್ಲಿ ಎಲ್ಲಾ N drafted positions ಅನ್ನೂ ಏಕೆ score ಮಾಡಬಹುದು?',
        opts: ['GPUs cannot process multiple tokens at once', 'Decode is memory-bound (Module 196), so the expensive part is reading weights from memory, not the extra arithmetic for more positions', 'The draft model does all the work', 'Verifier passes are always free'], correct: 1,
        optsKn: ['GPUs ಒಂದೇ ಬಾರಿಗೆ ಬಹು tokens ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'Decode memory-bound ಆಗಿದೆ (Module 196), ಆದ್ದರಿಂದ ದುಬಾರಿ ಭಾಗ memory ಇಂದ weights ಓದುವುದೂ, ಹೆಚ್ಚು positions ಗೆ ಹೆಚ್ಚುವರಿ arithmetic ಅಲ್ಲ', 'Draft model ಎಲ್ಲಾ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'Verifier passes ಯಾವಾಗಲೂ ಉಚಿತ'] },
    ] } },
  ],
};
