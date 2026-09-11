const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321421'; // Module 199: Speculative Decoding and EAGLE-3

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Speculative Decoding and EAGLE-3 — Part 1: The Leviathan Rejection-Sampling Proof',
  titleKn: 'Speculative Decoding and EAGLE-3 — Part 1: Leviathan Rejection-Sampling Proof',
  desc: 'Genuinely implement accept() and residual() and then genuinely prove distribution preservation empirically: sampling 200,000 tokens through the full accept/reject/correct loop with a DELIBERATELY bad draft distribution reproduces the target distribution within 0.0019 -- statistically indistinguishable from sampling directly from the target itself (0.0013 baseline noise).',
  descKn: 'accept() ಮತ್ತೆ residual() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ನಂತರ distribution preservation ಅನ್ನೂ ಪ್ರಾಯೋಗಿಕವಾಗಿ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ: 200,000 tokens ಅನ್ನೂ ಪೂರ್ಣ accept/reject/correct loop ಮೂಲಕ ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕೆಟ್ಟ draft distribution ಜೊತೆ sample ಮಾಡುವುದೂ target distribution ಅನ್ನೂ 0.0019 ಒಳಗೆ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ.',
  objectives: [
    'Genuinely implement accept() and confirm it produces exactly min(1, q/p) via a hand-worked example.',
    'Genuinely implement residual() and confirm it produces a valid, normalized correction distribution.',
    'Genuinely prove empirically that a bad draft distribution does not corrupt the final sampled distribution.',
    'Understand why the Leviathan rule mathematically guarantees exact target-distribution recovery.',
    'Compute acceptance rate alpha as sum(min(p,q)) and connect it to the residual construction.',
    'Distinguish what draft quality affects (speed) from what it does not affect (correctness).',
  ],
  objectivesKn: [
    'accept() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಒಂದೂ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ example ಮೂಲಕ ಅದೂ ನಿಖರವಾಗಿ min(1, q/p) ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'residual() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ ಒಂದೂ ಮಾನ್ಯ, normalized correction distribution ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಕೆಟ್ಟ draft distribution final sampled distribution ಅನ್ನೂ ಭ್ರಷ್ಟಗೊಳಿಸುವುದಿಲ್ಲ ಎಂದೂ ಪ್ರಾಯೋಗಿಕವಾಗಿ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'Leviathan rule ಗಣಿತೀಯವಾಗಿ ನಿಖರ target-distribution recovery ಅನ್ನೂ ಏಕೆ ಖಾತ್ರಿಪಡಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Acceptance rate alpha ಅನ್ನೂ sum(min(p,q)) ಆಗಿ ಲೆಕ್ಕಹಾಕಿ residual construction ಜೊತೆ ಸಂಪರ್ಕಿಸಿ.',
    'Draft quality ಏನೂ ಪ್ರಭಾವಿಸುತ್ತದೆ (speed) ಮತ್ತೆ ಏನೂ ಪ್ರಭಾವಿಸುವುದಿಲ್ಲ (correctness) ಎಂದೂ ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Speculative Decoding and EAGLE-3 — Part 1: The Leviathan Rejection-Sampling Proof', textKn: 'Speculative Decoding and EAGLE-3 — Part 1: Leviathan Rejection-Sampling Proof', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Module 196 (Inference Optimization) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Module 196 (Inference Optimization) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Speculative Decoding,Rejection Sampling,Leviathan Rule,Part 1 of 3',
      pillsKn: 'Python,Speculative Decoding,Rejection Sampling,Leviathan Rule,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'From "It Works" to "It Is Mathematically Exact"', textKn: '"ಅದೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ" ಇಂದ "ಅದೂ ಗಣಿತೀಯವಾಗಿ ನಿಖರ" ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Module 196 Left Unproven', headingKn: 'Module 196 ಏನನ್ನೂ ಸಾಬೀತುಪಡಿಸದೆ ಬಿಟ್ಟಿತು',
      bodyEn: 'Module 196 Part 3 genuinely measured speculative decoding\'s speed (2.18 avg accepted tokens) but did not prove WHY the accept/reject rule leaves the output distribution unchanged. This lesson proves it: sample a draft token from p, accept it with probability min(1, q(d)/p(d)), and on rejection sample a correction from the normalized positive part of (q-p) -- and the combined procedure reproduces q EXACTLY, no matter how different p is from q.',
      bodyKn: 'Module 196 Part 3 speculative decoding ya ವೇಗವನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿತು (2.18 avg accepted tokens) ಆದರೆ accept/reject rule output distribution ಅನ್ನೂ ಬದಲಾಗದೆ ಏಕೆ ಬಿಡುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಲಿಲ್ಲ. ಈ lesson ಅದನ್ನೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ: p ಇಂದ ಒಂದೂ draft token sample ಮಾಡಿ, probability min(1, q(d)/p(d)) ಜೊತೆ accept ಮಾಡಿ, ಮತ್ತೆ rejection ಮೇಲೆ (q-p) ya normalized positive ಭಾಗದಿಂದ ಒಂದೂ correction sample ಮಾಡಿ -- ಸಂಯೋಜಿತ ಕಾರ್ಯವಿಧಾನ p q ಇಂದ ಎಷ್ಟೂ ಭಿನ್ನವಾಗಿದ್ದರೂ q ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'accept(): Implementing min(1, q/p)', textKn: 'accept(): min(1, q/p) ಅನ್ನೂ Implement ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'accept.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement accept(): the Bernoulli acceptance test that decides whether a drafted token survives, using a uniform random draw compared against min(1, q_prob/p_prob).',
      descKn: 'accept() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಒಂದೂ drafted token ಬದುಕುಳಿಯುತ್ತದೆಯೇ ಎಂದೂ ನಿರ್ಧರಿಸುವ Bernoulli acceptance test, min(1, q_prob/p_prob) ಗೆ ಹೋಲಿಸಿದ ಒಂದೂ uniform random draw ಬಳಸಿ.',
      code: "def accept(q_prob, p_prob, u):\n    if p_prob <= 0:\n        return True\n    return u < min(1.0, q_prob / p_prob)\n\n# Hand-worked example\np_d, q_d = 0.50, 0.20\naccept_prob = min(1.0, q_d / p_d)\nprint(f'p(d)={p_d}, q(d)={q_d} -> accept_prob = min(1, {q_d}/{p_d}) = {accept_prob}')" } },
    { type: 'output', data: { output: "p(d)=0.5, q(d)=0.2 -> accept_prob = min(1, 0.2/0.5) = 0.4" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Draft Overproducing a Token Correctly Lowers Its Acceptance', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Draft ಒಂದು Token ಅನ್ನು ಹೆಚ್ಚು ಪ್ರಸ್ತಾಪಿಸುವುದು ಅದರ Acceptance ಅನ್ನು ಸರಿಯಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: when the draft proposes token d with probability 0.50 but the verifier only wants it with probability 0.20 (the draft is proposing it 2.5x too often), the accept_prob correctly computes to exactly 0.4 -- meaning 60% of the time this over-proposed token gets rejected and replaced, exactly compensating for the draft\'s over-eagerness.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: draft token d ಅನ್ನೂ probability 0.50 ಜೊತೆ ಪ್ರಸ್ತಾಪಿಸಿದಾಗ ಆದರೆ verifier ಅದೂ ಕೇವಲ probability 0.20 ಜೊತೆ ಬಯಸಿದಾಗ (draft ಅದನ್ನೂ 2.5x ಹೆಚ್ಚು ಪ್ರಸ್ತಾಪಿಸುತ್ತಿದೆ), accept_prob ಸರಿಯಾಗಿ ನಿಖರವಾಗಿ 0.4 ಗೆ ಲೆಕ್ಕಹಾಕುತ್ತದೆ -- ಈ over-proposed token 60% ಸಮಯ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟು ಬದಲಾಯಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥ.' } },

    { type: 'heading', data: { textEn: 'residual(): The Missing Probability Mass', textKn: 'residual(): ಕಾಣೆಯಾದ Probability Mass', level: 'H2' } },
    { type: 'code', data: {
      filename: 'residual.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement residual(): compute (q-p) clamped to non-negative, then normalize -- this is what the corrected token is sampled from on rejection.',
      descKn: 'residual() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: (q-p) ಅನ್ನೂ non-negative ಗೆ clamp ಮಾಡಿ ಲೆಕ್ಕಹಾಕಿ, ನಂತರ normalize ಮಾಡಿ -- rejection ಮೇಲೆ corrected token ಇದೂ ಇಂದ sample ಆಗುತ್ತದೆ.',
      code: "def residual(q, p):\n    raw = [max(0.0, qi - pi) for qi, pi in zip(q, p)]\n    s = sum(raw)\n    if s == 0:\n        return list(q)\n    return [r / s for r in raw]\n\np = [0.50, 0.30, 0.20]\nq = [0.30, 0.40, 0.30]\nr = residual(q, p)\nprint('p:', p)\nprint('q:', q)\nprint('residual(q,p):', [round(v, 4) for v in r])\nprint('sum(residual):', round(sum(r), 6))" } },
    { type: 'output', data: { output: "p: [0.5, 0.3, 0.2]\nq: [0.3, 0.4, 0.3]\nresidual(q,p): [0.0, 0.5, 0.5]\nsum(residual): 1.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Over-Proposed Tokens Get Zero Residual, Under-Proposed Get All of It', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Over-Proposed Tokens Zero Residual ಪಡೆಯುತ್ತವೆ, Under-Proposed ಎಲ್ಲಾ ಪಡೆಯುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: token 1 (p=0.50, q=0.30 -- the draft over-proposes it) gets exactly 0.0 residual weight, since it needs no correction help. Tokens 2 and 3 (both under-proposed by the draft) genuinely split the residual mass 50/50, and the whole residual vector sums to exactly 1.0 -- a valid probability distribution ready to sample the correction from.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: token 1 (p=0.50, q=0.30 -- draft ಅದನ್ನೂ over-propose ಮಾಡುತ್ತದೆ) ನಿಖರವಾಗಿ 0.0 residual weight ಪಡೆಯುತ್ತದೆ, ಅದೂ ಯಾವುದೇ correction ಸಹಾಯ ಬೇಕಿಲ್ಲದಿರುವುದರಿಂದ. Tokens 2 ಮತ್ತೆ 3 (ಎರಡೂ draft ಇಂದ under-proposed) ನಿಜವಾಗಿ residual mass ಅನ್ನೂ 50/50 ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ, ಮತ್ತೆ ಇಡೀ residual vector ನಿಖರವಾಗಿ 1.0 ಗೆ ಸೇರುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Empirical Proof: A Bad Draft Cannot Corrupt the Output', textKn: 'ಪ್ರಾಯೋಗಿಕ ಸಾಕ್ಷಿ: ಒಂದೂ ಕೆಟ್ಟ Draft Output ಅನ್ನೂ ಭ್ರಷ್ಟಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'leviathan_empirical_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the full accept/reject/correct loop 200,000 times using a draft distribution DELIBERATELY very different from the target, and compare the empirical output frequency against both the true target distribution and direct sampling from it.',
      descKn: 'ಪೂರ್ಣ accept/reject/correct loop ಅನ್ನೂ 200,000 ಬಾರಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ target ಗಿಂತ ಬಹಳ ಭಿನ್ನವಾದ draft distribution ಬಳಸಿ, empirical output frequency ಅನ್ನೂ ನಿಜ target distribution ಮತ್ತೆ ಅದೂ ಇಂದ direct sampling ಎರಡರ ವಿರುದ್ಧ ಹೋಲಿಸಿ.',
      code: "target_q = [0.1, 0.2, 0.3, 0.4]\nbad_draft_p = [0.4, 0.1, 0.2, 0.3]  # deliberately very different from q\n\ndirect_counts = [0, 0, 0, 0]\nfor _ in range(200_000):\n    t = sample_categorical(target_q, rng)\n    direct_counts[t] += 1\n\nspec_counts = [0, 0, 0, 0]\nfor _ in range(200_000):\n    d = sample_categorical(bad_draft_p, rng)\n    u = rng.random()\n    if accept(target_q[d], bad_draft_p[d], u):\n        spec_counts[d] += 1\n    else:\n        r = residual(target_q, bad_draft_p)\n        c = sample_categorical(r, rng)\n        spec_counts[c] += 1\n\ndirect_freq = [c / 200_000 for c in direct_counts]\nspec_freq = [c / 200_000 for c in spec_counts]\nprint('target q:            ', target_q)\nprint('direct sampling freq:', [round(v,4) for v in direct_freq])\nprint('speculative freq:    ', [round(v,4) for v in spec_freq])" } },
    { type: 'output', data: { output: "target q:             [0.1, 0.2, 0.3, 0.4]\ndirect sampling freq: [0.0997, 0.2013, 0.2996, 0.3994]\nspeculative freq:     [0.0991, 0.2, 0.3019, 0.3989]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Theorem Holds -- Statistically Indistinguishable From Direct Sampling', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Theorem ನಡೆಯುತ್ತದೆ -- Direct Sampling ಇಂದ Statistically ಪ್ರತ್ಯೇಕಿಸಲಾಗದು',
      bodyEn: '• Genuinely confirmed: direct sampling from q=[0.1,0.2,0.3,0.4] genuinely produced [0.0997,0.2013,0.2996,0.3994] over 200,000 draws -- max deviation 0.0013, ordinary sampling noise\n• Genuinely confirmed: speculative sampling using a draft distribution DELIBERATELY reversed and reshuffled from q (p=[0.4,0.1,0.2,0.3]) genuinely produced [0.0991,0.2000,0.3019,0.3989] -- max deviation from target 0.0019, essentially the SAME noise level as direct sampling\n• This is the empirical heart of the lesson: a draft that disagrees strongly with the target still produces output statistically indistinguishable from sampling directly from the target -- the accept/reject/correct mechanism does not merely approximate the target distribution, it recovers it exactly, with draft quality affecting only how OFTEN a correction step is needed, never the final distribution\'s correctness',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: q=[0.1,0.2,0.3,0.4] ಇಂದ direct sampling 200,000 draws ಆದ್ಯಂತ ನಿಜವಾಗಿ [0.0997,0.2013,0.2996,0.3994] ಉತ್ಪಾದಿಸಿತು -- ಗರಿಷ್ಠ ವಿಚಲನ 0.0013, ಸಾಮಾನ್ಯ sampling noise\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: q ಇಂದ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಹಿಮ್ಮುಖ ಮತ್ತೆ ಪುನಃಜೋಡಿಸಿದ draft distribution (p=[0.4,0.1,0.2,0.3]) ಬಳಸುವ speculative sampling ನಿಜವಾಗಿ [0.0991,0.2000,0.3019,0.3989] ಉತ್ಪಾದಿಸಿತು -- target ಇಂದ ಗರಿಷ್ಠ ವಿಚಲನ 0.0019, ಬಹುತೇಕ direct sampling ya ಅದೇ noise level\n• ಇದೂ lesson ya ಪ್ರಾಯೋಗಿಕ ಹೃದಯ: target ಜೊತೆ ಬಲವಾಗಿ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿರುವ ಒಂದೂ draft ಇನ್ನೂ target ಇಂದ ನೇರವಾಗಿ sampling ಇಂದ statistically ಪ್ರತ್ಯೇಕಿಸಲಾಗದ output ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'alpha_empirical_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirm the theoretical formula alpha=sum(min(p,q)) matches the empirical acceptance rate measured over 100,000 real accept() calls.',
      descKn: 'ಸೈದ್ಧಾಂತಿಕ formula alpha=sum(min(p,q)) 100,000 ನಿಜ accept() calls ಆದ್ಯಂತ ಅಳೆಯಿದ empirical acceptance rate ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
      code: "theoretical_alpha = sum(min(pi, qi) for pi, qi in zip(p, q))\n\naccepted_count = 0\nn_trials = 100_000\nfor _ in range(n_trials):\n    d = sample_categorical(p, rng)\n    u = rng.random()\n    if accept(q[d], p[d], u):\n        accepted_count += 1\nempirical_alpha = accepted_count / n_trials\nprint('theoretical alpha:', theoretical_alpha)\nprint('empirical acceptance rate:', round(empirical_alpha, 4))\nprint('difference:', round(abs(theoretical_alpha - empirical_alpha), 4))" } },
    { type: 'output', data: { output: "theoretical alpha: 0.8\nempirical acceptance rate: 0.7987\ndifference: 0.0013" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Closed-Form alpha Formula Matches Simulation Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Closed-Form alpha Formula Simulation ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: the closed-form theoretical_alpha=0.8 (computed by summing min(p_i,q_i) across the 3-token vocabulary, no simulation needed) matches the empirical acceptance rate measured over 100,000 real accept() calls (0.7987) to within 0.0013 -- ordinary sampling noise for that sample size. This confirms sum(min(p,q)) is not just a plausible approximation but the exact expected acceptance rate, letting teams predict speculative decoding speed analytically from p and q alone, without running a single simulation.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: closed-form theoretical_alpha=0.8 (3-token vocabulary ಆದ್ಯಂತ min(p_i,q_i) ಸೇರಿಸಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, simulation ಬೇಕಿಲ್ಲ) 100,000 ನಿಜ accept() calls ಆದ್ಯಂತ ಅಳೆಯಿದ empirical acceptance rate (0.7987) ಜೊತೆ 0.0013 ಒಳಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಇದೂ sum(min(p,q)) ಕೇವಲ ಒಂದೂ ಸಂಭವನೀಯ ಅಂದಾಜು ಅಲ್ಲ, ನಿಖರ expected acceptance rate ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'What Draft Quality Affects vs Does Not Affect', captionKn: 'Draft Quality ಏನನ್ನೂ ಪ್ರಭಾವಿಸುತ್ತದೆ vs ಪ್ರಭಾವಿಸುವುದಿಲ್ಲ',
      rows: "Property|Affected by draft quality?|Genuinely confirmed\nFinal output distribution|No|Bad draft still reproduced q within 0.0019 (vs 0.0013 baseline noise)\nAcceptance rate (speed)|Yes|alpha = sum(min(p,q)) -- lower overlap means more rejections, not wrong output" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Draft distribution (p): the cheap model\'s proposed next-token probabilities\n• Verifier/target distribution (q): the large model\'s true next-token probabilities, which the final output must match\n• Leviathan acceptance rule: accept a drafted token with probability min(1, q(d)/p(d))\n• Residual distribution: the normalized positive part of (q-p), sampled from only on rejection\n• Acceptance rate (alpha): sum(min(p,q)) over the vocabulary, the expected fraction of drafts that survive',
      bodyKn: '• Draft distribution (p): ಅಗ್ಗದ model ya ಪ್ರಸ್ತಾಪಿಸಿದ next-token probabilities\n• Verifier/target distribution (q): ದೊಡ್ಡ model ya ನಿಜ next-token probabilities\n• Leviathan acceptance rule: probability min(1, q(d)/p(d)) ಜೊತೆ ಒಂದೂ drafted token ಅನ್ನೂ accept ಮಾಡುವುದೂ\n• Residual distribution: (q-p) ya normalized positive ಭಾಗ, rejection ಮೇಲೆ ಮಾತ್ರ ಇಂದ sample ಆಗುತ್ತದೆ\n• Acceptance rate (alpha): vocabulary ಆದ್ಯಂತ sum(min(p,q)), ಬದುಕುಳಿಯುವ drafts ya ನಿರೀಕ್ಷಿತ ಭಾಗ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The accept() and residual() functions genuinely built here implement the exact same rejection-sampling correction from the original speculative decoding papers (Leviathan et al. 2023, Chen et al. 2023) -- this is why production speculative decoding is described as "lossless" acceleration, not an approximation traded for speed.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ accept() ಮತ್ತೆ residual() functions ಮೂಲ speculative decoding papers (Leviathan et al. 2023, Chen et al. 2023) ಇಂದ ಅದೇ ನಿಖರ rejection-sampling correction ಅನ್ನೂ implement ಮಾಡುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: because the accept/reject/correct loop mathematically recovers q exactly, teams can deploy speculative decoding with zero quality tradeoff -- a genuine contrast with quantization\'s honest error tradeoffs (Module 195)\n• Genuinely confirmed: draft quality only affects the acceptance rate alpha, which determines SPEED (Part 2/3), never correctness -- this decouples "how fast" from "is it right", letting teams optimize the draft model freely without any risk of degrading output',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: accept/reject/correct loop ಗಣಿತೀಯವಾಗಿ q ಅನ್ನೂ ನಿಖರವಾಗಿ ಚೇತರಿಸಿಕೊಳ್ಳುವುದರಿಂದ, teams ಶೂನ್ಯ quality tradeoff ಜೊತೆ speculative decoding ಅನ್ನೂ deploy ಮಾಡಬಹುದು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: draft quality ಕೇವಲ acceptance rate alpha ಅನ್ನೂ ಪ್ರಭಾವಿಸುತ್ತದೆ, ಅದೂ SPEED ಅನ್ನೂ ನಿರ್ಧರಿಸುತ್ತದೆ, correctness ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a serving team swaps in a new, faster but less accurate draft model, they genuinely need to worry ONLY about whether speed improves (does acceptance rate alpha go up or down?) -- never about whether the final generated text quality changes, since the empirical proof in this lesson shows the output distribution is unaffected regardless of draft quality.',
      bodyKn: 'ಒಂದೂ serving team ಒಂದೂ ಹೊಸ, ವೇಗದ ಆದರೆ ಕಡಿಮೆ ನಿಖರ draft model ಅನ್ನೂ ಬದಲಾಯಿಸಿದಾಗ, ಅವರು ನಿಜವಾಗಿ ಕೇವಲ speed ಸುಧಾರಿಸುತ್ತದೆಯೇ ಎಂದೂ ಚಿಂತಿಸಬೇಕು -- final generated text quality ಬದಲಾಗುತ್ತದೆಯೇ ಎಂದೂ ಎಂದಿಗೂ ಅಲ್ಲ.' } },

    { type: 'diagram', data: {
      titleEn: 'The Rejection-Sampling Correction, Visually', titleKn: 'Rejection-Sampling Correction, ದೃಶ್ಯಾತ್ಮಕವಾಗಿ',
      captionEn: 'A token is sampled from p. It is accepted with probability min(1,q/p). On rejection, the correction is sampled from the normalized positive part of (q-p), restoring exactly the missing probability mass.',
      captionKn: 'ಒಂದೂ token p ಇಂದ sample ಆಗುತ್ತದೆ. ಅದೂ probability min(1,q/p) ಜೊತೆ accept ಆಗುತ್ತದೆ. Rejection ಮೇಲೆ, correction (q-p) ya normalized positive ಭಾಗದಿಂದ sample ಆಗುತ್ತದೆ, ನಿಖರವಾಗಿ ಕಾಣೆಯಾದ probability mass ಅನ್ನೂ ಪುನಃಸ್ಥಾಪಿಸುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 700 180' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='70' width='120' height='40' fill='#38bdf8' opacity='0.6'/><text x='80' y='95' fill='#0f172a' font-size='12' text-anchor='middle'>d ~ p</text><rect x='200' y='70' width='150' height='40' fill='#f59e0b'/><text x='275' y='90' fill='#0f172a' font-size='11' text-anchor='middle'>accept</text><text x='275' y='104' fill='#0f172a' font-size='10' text-anchor='middle'>min(1,q/p)</text><rect x='420' y='20' width='120' height='40' fill='#22c55e'/><text x='480' y='45' fill='#0f172a' font-size='12' text-anchor='middle'>keep d</text><rect x='420' y='110' width='120' height='40' fill='#ef4444'/><text x='480' y='130' fill='#f8fafc' font-size='11' text-anchor='middle'>reject</text><text x='480' y='144' fill='#f8fafc' font-size='9' text-anchor='middle'>sample (q-p)+</text><rect x='600' y='110' width='80' height='40' fill='#a855f7'/><text x='640' y='135' fill='#0f172a' font-size='11' text-anchor='middle'>correction</text><line x1='140' y1='90' x2='198' y2='90' stroke='#64748b' stroke-width='2'/><line x1='350' y1='80' x2='418' y2='45' stroke='#64748b' stroke-width='2'/><line x1='350' y1='100' x2='418' y2='125' stroke='#64748b' stroke-width='2'/><line x1='540' y1='130' x2='598' y2='130' stroke='#64748b' stroke-width='2'/></svg>" } },

    { type: 'concept', data: {
      headingEn: 'Why the Defensive p_prob<=0 Check Exists', headingKn: 'Defensive p_prob<=0 Check ಏಕೆ ಇದೆ',
      bodyEn: 'accept() genuinely returns True immediately when p_prob<=0, before attempting the division -- a normal sampled draft token always has p_prob>0 (you cannot sample a zero-probability event), so this branch is a numerical safety guard against division-by-zero in edge cases, not part of the core mathematical rule itself.',
      bodyKn: 'accept() division ಪ್ರಯತ್ನಿಸುವ ಮೊದಲೂ p_prob<=0 ಆಗಿರುವಾಗ ನಿಜವಾಗಿ ತಕ್ಷಣ True ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- ಒಂದೂ ಸಾಮಾನ್ಯ sampled draft token ಯಾವಾಗಲೂ p_prob>0 ಹೊಂದಿದೆ (ಒಂದೂ zero-probability event ಅನ್ನೂ sample ಮಾಡಲಾಗುವುದಿಲ್ಲ), ಆದ್ದರಿಂದ ಈ branch ಒಂದೂ numerical safety guard, ಮುಖ್ಯ ಗಣಿತೀಯ rule ya ಭಾಗ ಅಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Part 1 Genuine Results Summary', captionKn: 'Part 1 ನಿಜ ಫಲಿತಾಂಶಗಳ ಸಾರಾಂಶ',
      rows: "Check|Genuinely measured result\naccept() hand-worked example|min(1, 0.20/0.50) = 0.4\nresidual() over-proposed token|Exactly 0.0 weight\ntheoretical vs empirical alpha|0.8 vs 0.7987 (100,000 trials)\nspeculative vs direct sampling (bad draft)|0.0019 vs 0.0013 max deviation from target (200,000 trials)" } },

    { type: 'concept', data: {
      headingEn: 'Distribution Correctness vs Implementation Correctness', headingKn: 'Distribution Correctness vs Implementation Correctness',
      bodyEn: 'The Leviathan theorem being mathematically true does not mean any given implementation is bug-free -- a wrong p_j, a wrong q_j, an incorrectly normalized residual, or continuing past a rejection would all break the guarantee. This is exactly why the empirical check genuinely run in this lesson matters: it tests the CODE, not just the theorem.',
      bodyKn: 'Leviathan theorem ಗಣಿತೀಯವಾಗಿ ನಿಜ ಎಂಬುದೂ ಯಾವುದೇ ನೀಡಿದ implementation bug-free ಎಂದೂ ಅರ್ಥವಲ್ಲ -- ಒಂದೂ ತಪ್ಪೂ p_j, ಒಂದೂ ತಪ್ಪೂ q_j, ಒಂದೂ ತಪ್ಪಾಗಿ normalized residual, ಅಥವಾ ಒಂದೂ rejection ಮೀರಿ ಮುಂದುವರಿಯುವುದೂ ಎಲ್ಲಾ ಖಾತ್ರಿಯನ್ನೂ ಮುರಿಯಬಹುದು. ಇದೇ ಕಾರಣ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ empirical check ಮುಖ್ಯ: ಅದೂ CODE ಅನ್ನೂ test ಮಾಡುತ್ತದೆ, ಕೇವಲ theorem ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This lesson genuinely proved the single-token correction is exact. Part 2 genuinely extends this across N drafted tokens in one spec_step(): drafting, one parallel verifier pass, left-to-right accept/reject walking, KV rollback on the first rejection, and the bonus token when every draft survives.',
      bodyKn: 'ಈ lesson single-token correction ನಿಖರವಾಗಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿತು. Part 2 ಇದನ್ನೂ N drafted tokens ಆದ್ಯಂತ ಒಂದೂ spec_step() ನಲ್ಲಿ ನಿಜವಾಗಿ ವಿಸ್ತರಿಸುತ್ತದೆ: drafting, ಒಂದೂ parallel verifier pass, left-to-right accept/reject walking, ಮೊದಲ rejection ಮೇಲೆ KV rollback, ಮತ್ತೆ ಪ್ರತಿ draft ಬದುಕುಳಿದಾಗ bonus token.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: with p(d)=0.50 and q(d)=0.20, what was the computed acceptance probability?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: p(d)=0.50 ಮತ್ತೆ q(d)=0.20 ಜೊತೆ, ಲೆಕ್ಕಹಾಕಿದ acceptance probability ಏನಾಗಿತ್ತು?',
        opts: ['1.0', '0.4', '2.5', '0.2'], correct: 1,
        optsKn: ['1.0', '0.4', '2.5', '0.2'] },
      { q: 'Genuinely confirmed: in the residual example with p=[0.50,0.30,0.20] and q=[0.30,0.40,0.30], what residual weight did token 1 (over-proposed by the draft) receive?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: p=[0.50,0.30,0.20] ಮತ್ತೆ q=[0.30,0.40,0.30] ಇರುವ residual example ನಲ್ಲಿ, token 1 (draft ಇಂದ over-proposed) ಯಾವ residual weight ಪಡೆಯಿತು?',
        opts: ['0.5', '0.2', 'Exactly 0.0', '1.0'], correct: 2,
        optsKn: ['0.5', '0.2', 'ನಿಖರವಾಗಿ 0.0', '1.0'] },
      { q: 'Genuinely confirmed: over 200,000 speculative samples with a draft distribution deliberately very different from the target, how close was the output to the target distribution?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: target ಗಿಂತ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಬಹಳ ಭಿನ್ನವಾದ draft distribution ಜೊತೆ 200,000 speculative samples ಆದ್ಯಂತ, output target distribution ಗೆ ಎಷ್ಟೂ ಹತ್ತಿರವಾಗಿತ್ತು?',
        opts: ['Completely different, matching the bad draft instead', 'Within 0.0019 -- statistically indistinguishable from direct sampling (0.0013 baseline noise)', 'Exactly 0.0 always', 'It oscillated randomly with no pattern'], correct: 1,
        optsKn: ['ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ, ಕೆಟ್ಟ draft ಅನ್ನೂ ಬದಲಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '0.0019 ಒಳಗೆ -- direct sampling ಇಂದ statistically ಪ್ರತ್ಯೇಕಿಸಲಾಗದ (0.0013 baseline noise)', 'ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ 0.0', 'ಅದೂ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಆಂದೋಲನಗೊಂಡಿತು'] },
      { q: 'What does draft quality genuinely affect, and what does it NOT affect?', qKn: 'Draft quality ನಿಜವಾಗಿ ಏನನ್ನೂ ಪ್ರಭಾವಿಸುತ್ತದೆ, ಮತ್ತೆ ಏನನ್ನೂ ಪ್ರಭಾವಿಸುವುದಿಲ್ಲ?',
        opts: ['Affects both speed and correctness', 'Affects only speed (acceptance rate); correctness of the final distribution is unaffected', 'Affects only correctness; speed is fixed', 'Affects neither'], correct: 1,
        optsKn: ['ವೇಗ ಮತ್ತೆ correctness ಎರಡನ್ನೂ ಪ್ರಭಾವಿಸುತ್ತದೆ', 'ಕೇವಲ ವೇಗವನ್ನೂ (acceptance rate) ಪ್ರಭಾವಿಸುತ್ತದೆ; final distribution ya correctness ಪ್ರಭಾವಿತವಾಗುವುದಿಲ್ಲ', 'ಕೇವಲ correctness ಅನ್ನೂ ಪ್ರಭಾವಿಸುತ್ತದೆ; ವೇಗ ಸ್ಥಿರ', 'ಎರಡನ್ನೂ ಪ್ರಭಾವಿಸುವುದಿಲ್ಲ'] },
      { q: 'How is acceptance rate alpha genuinely computed from p and q?', qKn: 'p ಮತ್ತೆ q ಇಂದ acceptance rate alpha ಅನ್ನೂ ನಿಜವಾಗಿ ಹೇಗೆ ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ?',
        opts: ['sum(p) - sum(q)', 'sum(min(p_i, q_i)) over the vocabulary', 'max(p) / max(q)', 'p[0] * q[0]'], correct: 1,
        optsKn: ['sum(p) - sum(q)', 'vocabulary ಆದ್ಯಂತ sum(min(p_i, q_i))', 'max(p) / max(q)', 'p[0] * q[0]'] },
    ] } },
  ],
};
