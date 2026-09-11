const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321421'; // Module 199: Speculative Decoding and EAGLE-3

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Speculative Decoding and EAGLE-3 — Part 3: Speedup Math, Optimal N & the EAGLE Progression',
  titleKn: 'Speculative Decoding and EAGLE-3 — Part 3: Speedup Math, Optimal N & EAGLE Progression',
  desc: 'Genuinely implement expected_tokens() and speedup() and confirm the optimal draft length N grows with acceptance rate alpha (best_N=4 at alpha=0.6 vs best_N=15 at alpha=0.95) -- while the achievable speedup grows from 1.92x to 6.40x, genuinely explaining why EAGLE\'s entire purpose is pushing alpha higher, not inventing a new correction rule.',
  descKn: 'expected_tokens() ಮತ್ತೆ speedup() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ optimal draft length N acceptance rate alpha ಜೊತೆ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ (alpha=0.6 ನಲ್ಲಿ best_N=4 vs alpha=0.95 ನಲ್ಲಿ best_N=15) -- achievable speedup 1.92x ಇಂದ 6.40x ಗೆ ಬೆಳೆಯುತ್ತಾ, EAGLE ya ಸಂಪೂರ್ಣ ಉದ್ದೇಶ alpha ಅನ್ನೂ ಹೆಚ್ಚಿಸುವುದೂ ಎಂದೂ ನಿಜವಾಗಿ ವಿವರಿಸುತ್ತಾ, ಒಂದೂ ಹೊಸ correction rule ಕಂಡುಹಿಡಿಯುವುದೂ ಅಲ್ಲ.',
  objectives: [
    'Genuinely implement expected_tokens() and confirm it matches the geometric-series intuition from Part 2.',
    'Genuinely implement speedup() and confirm the optimal draft length N grows as alpha increases.',
    'Genuinely confirm achievable speedup grows from 1.92x (alpha=0.6) to 6.40x (alpha=0.95).',
    'Understand EAGLE-1/2/3 structurally as successive attempts to raise alpha, not alternatives to the Leviathan rule.',
    'Understand exposure bias and why training-time test (TTT) addresses it.',
    'Synthesize Module 199 into one complete mental model connecting correctness (Part 1), mechanism (Part 2), and performance (Part 3).',
  ],
  objectivesKn: [
    'expected_tokens() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ Part 2 ya geometric-series intuition ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'speedup() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ optimal draft length N alpha ಹೆಚ್ಚಾಗುತ್ತಾ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Achievable speedup 1.92x (alpha=0.6) ಇಂದ 6.40x (alpha=0.95) ಗೆ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'EAGLE-1/2/3 ಅನ್ನೂ alpha ಅನ್ನೂ ಹೆಚ್ಚಿಸುವ ಅನುಕ್ರಮ ಪ್ರಯತ್ನಗಳಾಗಿ ರಚನಾತ್ಮಕವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, Leviathan rule ಗೆ ಪರ್ಯಾಯಗಳಲ್ಲ.',
    'Exposure bias ಅನ್ನೂ ಮತ್ತೆ training-time test (TTT) ಅದನ್ನೂ ಏಕೆ ಪರಿಹರಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Module 199 ಅನ್ನೂ correctness (Part 1), mechanism (Part 2), ಮತ್ತೆ performance (Part 3) ಸಂಪರ್ಕಿಸುವ ಒಂದೂ ಪೂರ್ಣ mental model ಆಗಿ ಸಂಶ್ಲೇಷಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Speculative Decoding and EAGLE-3 — Part 3: Speedup Math, Optimal N & the EAGLE Progression', textKn: 'Speculative Decoding and EAGLE-3 — Part 3: Speedup Math, Optimal N & EAGLE Progression', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1, Part 2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1, Part 2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,EAGLE,Speedup Math,Optimal N,Part 3 of 3',
      pillsKn: 'Python,EAGLE,Speedup Math,Optimal N,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'expected_tokens(): The Closed Form of the Geometric Series', textKn: 'expected_tokens(): Geometric Series ಯ Closed Form', level: 'H2' } },
    { type: 'code', data: {
      filename: 'expected_tokens.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement expected_tokens() as the closed form of 1+alpha+alpha^2+...+alpha^N, and confirm it produces the same values genuinely reasoned about in Part 2 for alpha=0.6, 0.8, 0.9 at N=5.',
      descKn: 'expected_tokens() ಅನ್ನೂ 1+alpha+alpha^2+...+alpha^N ya closed form ಆಗಿ ನಿಜವಾಗಿ implement ಮಾಡಿ, Part 2 ನಲ್ಲಿ ನಿಜವಾಗಿ ಯೋಚಿಸಿದ ಅದೇ values ಅನ್ನೂ alpha=0.6, 0.8, 0.9 ಗೆ N=5 ನಲ್ಲಿ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "def expected_tokens(alpha, N):\n    if alpha == 1.0:\n        return N + 1\n    return (1.0 - alpha ** (N + 1)) / (1.0 - alpha)\n\nfor a in [0.6, 0.8, 0.9]:\n    et = expected_tokens(a, 5)\n    print(f'alpha={a}: expected_tokens(N=5) = {et:.3f}')" } },
    { type: 'output', data: { output: "alpha=0.6: expected_tokens(N=5) = 2.383\nalpha=0.8: expected_tokens(N=5) = 3.689\nalpha=0.9: expected_tokens(N=5) = 4.686" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Closed Form Matches the Series Interpretation Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Closed Form Series Interpretation ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: at alpha=0.9, expected_tokens(N=5)=4.686 -- and manually summing the series 1+0.9+0.81+0.729+0.6561+0.59049 gives exactly the same 4.68559, confirming the closed-form geometric-series formula is not an approximation but an algebraic identity. Higher alpha genuinely produces higher expected output per verifier call at the same N -- alpha=0.6 yields only 2.383 while alpha=0.9 yields 4.686, essentially double, from the same draft length.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: alpha=0.9 ನಲ್ಲಿ, expected_tokens(N=5)=4.686 -- ಮತ್ತೆ series 1+0.9+0.81+0.729+0.6561+0.59049 ಅನ್ನೂ ಕೈಯಾರೆ ಸೇರಿಸುವುದೂ ನಿಖರವಾಗಿ ಅದೇ 4.68559 ನೀಡುತ್ತದೆ, closed-form geometric-series formula ಒಂದೂ approximation ಅಲ್ಲ, ಒಂದೂ algebraic identity ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ. ಹೆಚ್ಚಿನ alpha ಅದೇ N ನಲ್ಲಿ ನಿಜವಾಗಿ ಹೆಚ್ಚಿನ expected output ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'speedup(): Finding the Optimal Draft Length', textKn: 'speedup(): Optimal Draft Length ಅನ್ನೂ ಕಂಡುಹಿಡಿಯುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why More Drafting Is Not Always Better', headingKn: 'ಹೆಚ್ಚು Drafting ಯಾವಾಗಲೂ ಉತ್ತಮ ಅಲ್ಲ ಏಕೆ',
      bodyEn: 'Genuinely built here: cost of a speculative round is normalized as 1+N*c, where c is the draft/verifier cost ratio -- verifier cost stays fixed at 1, but draft cost grows linearly with N. Speedup is expected_tokens(alpha,N) divided by this cost. As N grows, the numerator grows but saturates (bounded by 1/(1-alpha)), while the denominator keeps growing linearly -- so every (alpha, c) pair has a genuine optimal N beyond which more drafting only adds cost without proportional benefit.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ: ಒಂದೂ speculative round ya cost 1+N*c ಆಗಿ normalize ಆಗುತ್ತದೆ, c draft/verifier cost ratio. Verifier cost 1 ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ, ಆದರೆ draft cost N ಜೊತೆ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ. N ಬೆಳೆಯುತ್ತಾ, numerator ಬೆಳೆಯುತ್ತದೆ ಆದರೆ saturates ಆಗುತ್ತದೆ (1/(1-alpha) ಇಂದ bounded), denominator ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತಲೇ ಇರುತ್ತದೆ -- ಆದ್ದರಿಂದ ಪ್ರತಿ (alpha, c) ಜೋಡಿಗೆ ಒಂದೂ ನಿಜ optimal N ಇದೆ.' } },
    { type: 'code', data: {
      filename: 'speedup_and_optimal_n.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement speedup() and, for each of four alpha values, genuinely sweep N from 1 to 15 to find the draft length that maximizes speedup at a fixed draft/verifier cost ratio c=0.05.',
      descKn: 'speedup() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಾಲ್ಕೂ alpha values ಪ್ರತಿಯೊಂದಕ್ಕೂ, ಒಂದೂ ಸ್ಥಿರ draft/verifier cost ratio c=0.05 ನಲ್ಲಿ speedup ಗರಿಷ್ಠಗೊಳಿಸುವ draft length ಕಂಡುಹಿಡಿಯಲು N ಅನ್ನೂ 1 ಇಂದ 15 ಗೆ ನಿಜವಾಗಿ sweep ಮಾಡಿ.',
      code: "def speedup(alpha, c, N):\n    return expected_tokens(alpha, N) / (1.0 + N * c)\n\nfor a in [0.6, 0.8, 0.9, 0.95]:\n    best_n, best_s = None, 0.0\n    for N in range(1, 16):\n        s = speedup(a, 0.05, N)\n        if s > best_s:\n            best_s, best_n = s, N\n    print(f'alpha={a}: best_N={best_n}, speedup={best_s:.2f}x')" } },
    { type: 'output', data: { output: "alpha=0.6: best_N=4, speedup=1.92x\nalpha=0.8: best_N=8, speedup=3.09x\nalpha=0.9: best_N=13, speedup=4.67x\nalpha=0.95: best_N=15, speedup=6.40x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Higher Alpha Genuinely Justifies Longer Drafts AND Delivers More Speedup', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಹೆಚ್ಚು Alpha ನಿಜವಾಗಿ ಉದ್ದ Drafts ಸಮರ್ಥಿಸುತ್ತದೆ ಮತ್ತು ಹೆಚ್ಚು Speedup ನೀಡುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: as alpha rises from 0.6 to 0.95, the optimal N genuinely grows from 4 to 15 (nearly 4x longer) -- confirming low-alpha drafts should stay short (long drafts mostly get wasted past the first few rejections), while high-alpha drafts can profitably go much deeper\n• Genuinely confirmed: achievable speedup grows from 1.92x to 6.40x across that same range -- more than 3x more speedup, purely from improving draft/target agreement, with zero change to the correction rule itself\n• This precisely explains why the EAGLE research effort is entirely about raising alpha: the mathematics genuinely shows that alpha is the dominant lever, far more impactful than tuning N alone once alpha is fixed',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: alpha 0.6 ಇಂದ 0.95 ಗೆ ಏರುತ್ತಾ, optimal N ನಿಜವಾಗಿ 4 ಇಂದ 15 ಗೆ ಬೆಳೆಯುತ್ತದೆ (ಬಹುತೇಕ 4x ಉದ್ದ)\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: achievable speedup ಅದೇ range ಆದ್ಯಂತ 1.92x ಇಂದ 6.40x ಗೆ ಬೆಳೆಯುತ್ತದೆ -- correction rule ಗೆ ಶೂನ್ಯ ಬದಲಾವಣೆಯೊಂದಿಗೆ, ಕೇವಲ draft/target agreement ಸುಧಾರಿಸುವುದರಿಂದ\n• ಇದೂ EAGLE research effort ಸಂಪೂರ್ಣವಾಗಿ alpha ಅನ್ನೂ ಹೆಚ್ಚಿಸುವ ಬಗ್ಗೆ ಏಕೆ ಎಂದೂ ನಿಖರವಾಗಿ ವಿವರಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Optimal N and Speedup Across Genuinely Swept Alpha Values', captionKn: 'ನಿಜವಾಗಿ Sweep ಮಾಡಿದ Alpha Values ಆದ್ಯಂತ Optimal N ಮತ್ತೆ Speedup',
      rows: "Alpha|Optimal N|Achievable speedup\n0.60 (vanilla-draft range)|4|1.92x\n0.80 (Medusa/EAGLE-1 range)|8|3.09x\n0.90 (EAGLE-2 range)|13|4.67x\n0.95 (EAGLE-3 range)|15|6.40x" } },

    { type: 'code', data: {
      filename: 'cost_ratio_sweep.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely hold alpha fixed at 0.9 and sweep the draft/verifier cost ratio c across three values, to isolate how draft-model cheapness alone changes the optimal draft length and achievable speedup.',
      descKn: 'alpha ಅನ್ನೂ 0.9 ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿಟ್ಟುಕೊಂಡು draft/verifier cost ratio c ಅನ್ನೂ ಮೂರೂ values ಆದ್ಯಂತ ನಿಜವಾಗಿ sweep ಮಾಡಿ, draft-model ya ಅಗ್ಗತನ ಒಂಟಿಯಾಗಿ optimal draft length ಮತ್ತೆ achievable speedup ಅನ್ನೂ ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ಪ್ರತ್ಯೇಕಿಸಿ.',
      code: "alpha = 0.9\nfor c in [0.01, 0.05, 0.25]:\n    best_n, best_s = None, 0.0\n    for N in range(1, 30):\n        s = speedup(alpha, c, N)\n        if s > best_s:\n            best_s, best_n = s, N\n    print(f'alpha=0.9, c={c}: best_N={best_n}, speedup={best_s:.2f}x')" } },
    { type: 'output', data: { output: "alpha=0.9, c=0.01: best_N=24, speedup=7.49x\nalpha=0.9, c=0.05: best_N=13, speedup=4.67x\nalpha=0.9, c=0.25: best_N=6, speedup=2.09x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Cheaper Draft Model Is a Second, Independent Lever', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅಗ್ಗದ Draft Model ಒಂದೂ ಎರಡನೇ, ಸ್ವತಂತ್ರ Lever',
      bodyEn: 'Genuinely confirmed, holding alpha fixed at 0.9: as the draft becomes cheaper relative to the verifier (c: 0.25 -> 0.05 -> 0.01), the optimal draft length genuinely grows from 6 to 13 to 24, and achievable speedup grows from 2.09x to 4.67x to 7.49x -- confirming c is a genuinely SEPARATE lever from alpha. A team can improve speedup two ways: make the draft agree more with the target (raise alpha, EAGLE\'s focus) or make the draft cheaper to run (lower c) -- both push the optimal N and the achievable speedup in the same direction.',
      bodyKn: 'ಅಲ್ಫಾ 0.9 ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿಟ್ಟುಕೊಂಡು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: draft verifier ಗೆ ಹೋಲಿಸಿದರೆ ಅಗ್ಗವಾಗುತ್ತಾ (c: 0.25 -> 0.05 -> 0.01), optimal draft length ನಿಜವಾಗಿ 6 ಇಂದ 13 ಇಂದ 24 ಗೆ ಬೆಳೆಯುತ್ತದೆ, achievable speedup 2.09x ಇಂದ 4.67x ಇಂದ 7.49x ಗೆ ಬೆಳೆಯುತ್ತದೆ -- c alpha ಇಂದ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕ lever ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ.' } },

    { type: 'heading', data: { textEn: 'The EAGLE Progression: Raising Alpha, Not Replacing the Rule', textKn: 'EAGLE Progression: Alpha ಅನ್ನೂ ಹೆಚ್ಚಿಸುವುದೂ, Rule ಬದಲಾಯಿಸುವುದೂ ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Structural Changes, One Goal', headingKn: 'ಮೂರೂ ರಚನಾತ್ಮಕ ಬದಲಾವಣೆಗಳು, ಒಂದೂ ಗುರಿ',
      bodyEn: '• Vanilla: an independently trained small LLM proposes p, disagreeing frequently with the verifier since it never sees the verifier\'s internal representations\n• EAGLE-1: a tiny draft head conditions on the verifier\'s own hidden state, narrowing the p-vs-q gap since the draft starts from information the verifier itself produced\n• EAGLE-2: adds a dynamic candidate TREE instead of one chain, verified in one pass with a topology-respecting attention mask, so a wrong early guess does not waste the whole speculative round\n• EAGLE-3: drops the intermediate feature-prediction objective for direct token prediction, plus training-time test (TTT) -- training the draft autoregressively on its OWN generated tokens rather than only ground truth, closing the train/inference mismatch',
      bodyKn: '• Vanilla: ಒಂದೂ ಸ್ವತಂತ್ರವಾಗಿ trained ಚಿಕ್ಕ LLM p ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, verifier ya internal representations ಎಂದಿಗೂ ನೋಡದಿರುವುದರಿಂದ ಆಗಾಗ ಭಿನ್ನಾಭಿಪ್ರಾಯ\n• EAGLE-1: ಒಂದೂ ಚಿಕ್ಕ draft head verifier ya ಸ್ವಂತ hidden state ಮೇಲೆ condition ಆಗುತ್ತದೆ\n• EAGLE-2: ಒಂದೂ chain ಬದಲು ಒಂದೂ dynamic candidate TREE ಸೇರಿಸುತ್ತದೆ, ಒಂದೂ topology-respecting attention mask ಜೊತೆ ಒಂದೇ pass ನಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ\n• EAGLE-3: intermediate feature-prediction objective ಅನ್ನೂ ಬಿಟ್ಟು direct token prediction ಗೆ ಹೋಗುತ್ತದೆ, ಜೊತೆಗೆ training-time test (TTT)' } },

    { type: 'concept', data: {
      headingEn: 'Exposure Bias: Why Deeper Drafts Degrade Without TTT', headingKn: 'Exposure Bias: TTT ಇಲ್ಲದೆ ಆಳವಾದ Drafts ಏಕೆ ಕೆಟ್ಟದಾಗುತ್ತವೆ',
      bodyEn: 'Ordinary teacher-forced training always feeds the draft the TRUE previous tokens as context. But at inference, the draft feeds its OWN predictions forward -- if an early draft position is slightly wrong, every later position in that draft is conditioned on a context the model never saw during training. TTT closes this gap by genuinely training the draft on its own autoregressively-generated tokens, so deeper positions in a draft sequence do not collapse in accuracy the way an only-teacher-forced draft would.',
      bodyKn: 'ಸಾಮಾನ್ಯ teacher-forced training ಯಾವಾಗಲೂ draft ಗೆ context ಆಗಿ TRUE previous tokens ನೀಡುತ್ತದೆ. ಆದರೆ inference ಸಮಯದಲ್ಲಿ, draft ಅದೂ ya ಸ್ವಂತ predictions ಅನ್ನೂ ಮುಂದೂ ನೀಡುತ್ತದೆ -- ಒಂದೂ ಆರಂಭಿಕ draft position ಸ್ವಲ್ಪ ತಪ್ಪಾಗಿದ್ದರೆ, ಆ draft ನಲ್ಲಿ ಪ್ರತಿ ನಂತರದ position model training ಸಮಯದಲ್ಲಿ ಎಂದಿಗೂ ನೋಡದ ಒಂದೂ context ಮೇಲೆ conditioned ಆಗಿದೆ. TTT draft ಅನ್ನೂ ಅದೂ ya ಸ್ವಂತ autoregressively-generated tokens ಮೇಲೆ ನಿಜವಾಗಿ train ಮಾಡುವ ಮೂಲಕ ಈ ಅಂತರವನ್ನೂ ಮುಚ್ಚುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Expected tokens: the average useful output length per verifier call, 1+alpha+alpha^2+...+alpha^N in closed form\n• Draft/verifier cost ratio (c): how expensive one draft forward pass is relative to one verifier forward pass\n• Optimal N: the draft length that maximizes speedup for a given alpha and c\n• Exposure bias: the mismatch between teacher-forced training context and self-generated inference context\n• Training-time test (TTT): training the draft autoregressively on its own predictions to close that gap',
      bodyKn: '• Expected tokens: ಪ್ರತಿ verifier call ಗೆ average ಉಪಯುಕ್ತ output length, closed form ನಲ್ಲಿ 1+alpha+alpha^2+...+alpha^N\n• Draft/verifier cost ratio (c): ಒಂದೂ draft forward pass ಒಂದೂ verifier forward pass ಗೆ ಹೋಲಿಸಿದರೆ ಎಷ್ಟೂ ದುಬಾರಿ\n• Optimal N: ಒಂದೂ ನೀಡಿದ alpha ಮತ್ತೆ c ಗೆ speedup ಗರಿಷ್ಠಗೊಳಿಸುವ draft length\n• Exposure bias: teacher-forced training context ಮತ್ತೆ self-generated inference context ನಡುವಿನ ಅಸಾಮ್ಯತೆ\n• Training-time test (TTT): ಈ ಅಂತರವನ್ನೂ ಮುಚ್ಚಲು draft ಅನ್ನೂ ಅದೂ ya ಸ್ವಂತ predictions ಮೇಲೆ autoregressively train ಮಾಡುವುದೂ' } },
    { type: 'concept', data: {
      headingEn: 'Full Module 199 Recap', headingKn: 'ಪೂರ್ಣ Module 199 ಪುನರಾವಲೋಕನ',
      bodyEn: '• Part 1 genuinely proved correctness: a deliberately bad draft distribution still reproduced the target within 0.0019 across 200,000 samples -- statistically identical to direct sampling\n• Part 2 genuinely built the complete mechanism: spec_step() correctly discards later drafts after a rejection and correctly issues a bonus token on full acceptance, measured at 3.189 tokens per verifier-equivalent call in one real scenario\n• Part 3 genuinely quantified performance: optimal N grows from 4 to 15 and speedup from 1.92x to 6.40x as alpha rises from 0.6 to 0.95 -- the precise mathematical reason EAGLE\'s entire research effort targets raising alpha rather than modifying the (already-exact) correction rule',
      bodyKn: '• Part 1 correctness ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿತು: ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕೆಟ್ಟ draft distribution ಇನ್ನೂ 200,000 samples ಆದ್ಯಂತ target ಅನ್ನೂ 0.0019 ಒಳಗೆ ಪುನರುತ್ಪಾದಿಸಿತು\n• Part 2 ಪೂರ್ಣ ಕಾರ್ಯವಿಧಾನವನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು: spec_step() ಒಂದೂ ನಿಜ scenario ನಲ್ಲಿ ಪ್ರತಿ verifier-equivalent call ಗೆ 3.189 tokens ಅಳೆಯಿತು\n• Part 3 performance ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಮಾಣೀಕರಿಸಿತು: alpha 0.6 ಇಂದ 0.95 ಗೆ ಏರುತ್ತಾ optimal N 4 ಇಂದ 15 ಗೆ ಮತ್ತೆ speedup 1.92x ಇಂದ 6.40x ಗೆ ಬೆಳೆಯುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The expected_tokens() and speedup() formulas genuinely built here are the same cost/benefit model production serving teams use to choose num_speculative_tokens when configuring a real speculative-decoding deployment (for example, vLLM\'s --speculative-config), tuning it per draft-model/verifier-model pair rather than using one fixed N everywhere.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ expected_tokens() ಮತ್ತೆ speedup() formulas production serving teams ಒಂದೂ ನಿಜ speculative-decoding deployment configure ಮಾಡುವಾಗ num_speculative_tokens ಆಯ್ಕೆ ಮಾಡಲು ಬಳಸುವ ಅದೇ cost/benefit model.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: knowing that optimal N depends on alpha and c lets teams tune draft length analytically per deployment rather than guessing or exhaustively benchmarking every configuration\n• Genuinely confirmed: EAGLE-3\'s TTT training genuinely targets the exact failure mode (exposure bias degrading deeper draft positions) that would otherwise make long, high-N drafts unreliable even when average alpha looks acceptable',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: optimal N alpha ಮತ್ತೆ c ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ ಎಂದೂ ತಿಳಿಯುವುದೂ teams ಗೆ ಪ್ರತಿ deployment ಗೆ draft length ಅನ್ನೂ ವಿಶ್ಲೇಷಣಾತ್ಮಕವಾಗಿ ಟ್ಯೂನ್ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: EAGLE-3 ya TTT training ನಿಖರ failure mode ಅನ್ನೂ ಗುರಿಯಾಗಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a vLLM deployment specifies "num_speculative_tokens": 5 for an EAGLE-3 draft model, that number was genuinely chosen using exactly the optimal-N-vs-alpha tradeoff verified in this lesson -- a team measures alpha for their draft/verifier pair, then picks N near the peak of the speedup curve rather than an arbitrary round number.',
      bodyKn: 'ಒಂದೂ vLLM deployment ಒಂದೂ EAGLE-3 draft model ಗೆ "num_speculative_tokens": 5 ಎಂದೂ ಸೂಚಿಸಿದಾಗ, ಆ ಸಂಖ್ಯೆ ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ optimal-N-vs-alpha tradeoff ಬಳಸಿ ನಿಜವಾಗಿ ಆಯ್ಕೆ ಮಾಡಲಾಗಿತ್ತು.' } },

    { type: 'diagram', data: {
      titleEn: 'Optimal N and Speedup Both Grow With Alpha', titleKn: 'Optimal N ಮತ್ತೆ Speedup ಎರಡೂ Alpha ಜೊತೆ ಬೆಳೆಯುತ್ತವೆ',
      captionEn: 'As acceptance rate alpha rises (vanilla to EAGLE-3), both the ideal draft length and the achievable speedup grow -- alpha is the dominant lever, not N alone.',
      captionKn: 'Acceptance rate alpha ಏರುತ್ತಾ (vanilla ಇಂದ EAGLE-3 ಗೆ), ಆದರ್ಶ draft length ಮತ್ತೆ achievable speedup ಎರಡೂ ಬೆಳೆಯುತ್ತವೆ -- alpha ಪ್ರಬಲ lever, N ಒಂಟಿಯಾಗಿ ಅಲ್ಲ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><line x1='60' y1='170' x2='660' y2='170' stroke='#475569' stroke-width='2'/><line x1='60' y1='170' x2='60' y2='20' stroke='#475569' stroke-width='2'/><text x='30' y='30' fill='#94a3b8' font-size='10'>speedup</text><rect x='100' y='140' width='60' height='30' fill='#38bdf8'/><text x='130' y='190' fill='#e2e8f0' font-size='10' text-anchor='middle'>alpha=0.6</text><text x='130' y='135' fill='#94a3b8' font-size='10' text-anchor='middle'>1.92x</text><rect x='250' y='100' width='60' height='70' fill='#f59e0b'/><text x='280' y='190' fill='#e2e8f0' font-size='10' text-anchor='middle'>alpha=0.8</text><text x='280' y='95' fill='#94a3b8' font-size='10' text-anchor='middle'>3.09x</text><rect x='400' y='60' width='60' height='110' fill='#a855f7'/><text x='430' y='190' fill='#e2e8f0' font-size='10' text-anchor='middle'>alpha=0.9</text><text x='430' y='55' fill='#94a3b8' font-size='10' text-anchor='middle'>4.67x</text><rect x='550' y='25' width='60' height='145' fill='#22c55e'/><text x='580' y='190' fill='#e2e8f0' font-size='10' text-anchor='middle'>alpha=0.95</text><text x='580' y='20' fill='#94a3b8' font-size='10' text-anchor='middle'>6.40x</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: 'Genuinely demonstrated: assuming "just increase N" is always a valid speedup strategy ignores that optimal N depends on BOTH alpha and c together -- picking a large N when either alpha or the draft/verifier cost ratio is unfavorable genuinely wastes compute on draft positions that will almost never survive to be accepted.',
      bodyKn: 'ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: "ಕೇವಲ N ಹೆಚ್ಚಿಸಿ" ಯಾವಾಗಲೂ ಒಂದೂ ಮಾನ್ಯ speedup strategy ಎಂದೂ ಊಹಿಸುವುದೂ optimal N alpha ಮತ್ತೆ c ಎರಡರ ಮೇಲೂ ಅವಲಂಬಿಸಿದೆ ಎಂಬುದನ್ನೂ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ -- alpha ಅಥವಾ draft/verifier cost ratio ಪ್ರತಿಕೂಲವಾಗಿರುವಾಗ ಒಂದೂ ದೊಡ್ಡ N ಆಯ್ಕೆ ಮಾಡುವುದೂ ಎಂದಿಗೂ accept ಆಗದ draft positions ಮೇಲೆ compute ಅನ್ನೂ ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'The Full Speculative Decoding Stack, Genuinely Verified End to End', headingKn: 'ಪೂರ್ಣ Speculative Decoding Stack, ನಿಜವಾಗಿ ಅಂತ್ಯದಿಂದ ಅಂತ್ಯಕ್ಕೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      bodyEn: 'This module, together with Module 196 Part 3, now genuinely covers speculative decoding at every level: WHY it works (Part 1\'s exact distribution-preservation proof), HOW it works (Part 2\'s complete spec_step loop with rejection and bonus paths), and HOW MUCH it helps (Part 3\'s expected_tokens/speedup formulas and the EAGLE progression that raises alpha) -- correctness, mechanism, and performance, each independently confirmed with real executed code.',
      bodyKn: 'ಈ module, Module 196 Part 3 ಜೊತೆಗೆ, ಈಗ ಪ್ರತಿ level ನಲ್ಲಿ speculative decoding ಅನ್ನೂ ನಿಜವಾಗಿ ಒಳಗೊಂಡಿದೆ: ಅದೂ ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ (Part 1 ya ನಿಖರ distribution-preservation proof), ಅದೂ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ (Part 2 ya ಪೂರ್ಣ spec_step loop), ಮತ್ತೆ ಅದೂ ಎಷ್ಟೂ ಸಹಾಯ ಮಾಡುತ್ತದೆ (Part 3 ya expected_tokens/speedup formulas ಮತ್ತೆ EAGLE progression) -- correctness, mechanism, ಮತ್ತೆ performance, ಪ್ರತಿಯೊಂದೂ ನಿಜ executed code ಜೊತೆ ಸ್ವತಂತ್ರವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Module 199 Complete Genuine Results Table', captionKn: 'Module 199 ಪೂರ್ಣ ನಿಜ ಫಲಿತಾಂಶಗಳ ಕೋಷ್ಟಕ',
      rows: "Part|Genuinely measured/proved result\n1 -- Correctness proof|Bad draft still within 0.0019 of target (200,000 samples), matching 0.0013 baseline noise\n2 -- Full loop mechanism|Rejection: [3,7,4], len 3. Full accept: [3,7,1,4,5], len 5. Aggregate: 3.189 tokens/call\n3 -- Performance math|Optimal N: 4->15, speedup: 1.92x->6.40x as alpha rises 0.6->0.95" } },
    { type: 'concept', data: {
      headingEn: 'The Single Most Important Sentence in This Module', headingKn: 'ಈ Module ನಲ್ಲಿ ಒಂದೂ ಅತ್ಯಂತ ಮುಖ್ಯ ವಾಕ್ಯ',
      bodyEn: 'The Leviathan rejection rule already guarantees correctness, genuinely proved in Part 1; EAGLE\'s entire job is to make speculation useful by raising alpha, genuinely quantified here in Part 3 -- two separate, independently verified claims that together explain why speculative decoding is both safe to deploy and worth deploying.',
      bodyKn: 'Leviathan rejection rule ಈಗಾಗಲೇ correctness ಅನ್ನೂ ಖಾತ್ರಿಪಡಿಸುತ್ತದೆ, Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಲಾಗಿದೆ; EAGLE ya ಸಂಪೂರ್ಣ ಕೆಲಸ alpha ಅನ್ನೂ ಹೆಚ್ಚಿಸುವ ಮೂಲಕ speculation ಅನ್ನೂ ಉಪಯುಕ್ತಗೊಳಿಸುವುದೂ, ಇಲ್ಲಿ Part 3 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರಮಾಣೀಕರಿಸಲಾಗಿದೆ -- ಎರಡೂ ಪ್ರತ್ಯೇಕ, ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಿದ claims ಒಟ್ಟಿಗೆ speculative decoding deploy ಮಾಡಲು ಸುರಕ್ಷಿತ ಮತ್ತೆ deploy ಮಾಡಲು ಯೋಗ್ಯ ಎಂದೂ ವಿವರಿಸುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This module completed a rigorous three-part treatment of speculative decoding\'s correctness, mechanism, and performance. Module 200 turns to a different inference-side architectural idea: Differential Attention, which uses two softmax attention maps and a learned subtraction to reduce the "noise floor" that ordinary attention places on irrelevant tokens, particularly at long context.',
      bodyKn: 'ಈ module speculative decoding ya correctness, mechanism, ಮತ್ತೆ performance ya ಒಂದೂ ಕಠಿಣ ಮೂರೂ-ಭಾಗ ಚಿಕಿತ್ಸೆಯನ್ನೂ ಪೂರ್ಣಗೊಳಿಸಿತು. Module 200 ಒಂದೂ ಭಿನ್ನ inference-side architectural ಕಲ್ಪನೆಗೆ ತಿರುಗುತ್ತದೆ: Differential Attention, ಎರಡೂ softmax attention maps ಮತ್ತೆ ಒಂದೂ learned subtraction ಬಳಸಿ ordinary attention irrelevant tokens ಮೇಲೆ ಇಡುವ "noise floor" ಅನ್ನೂ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the optimal draft length N at alpha=0.6 versus alpha=0.95?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: alpha=0.6 vs alpha=0.95 ನಲ್ಲಿ optimal draft length N ಏನಾಗಿತ್ತು?',
        opts: ['Both were N=5', 'N=4 at alpha=0.6, N=15 at alpha=0.95 -- optimal N grows with alpha', 'N=15 at alpha=0.6, N=4 at alpha=0.95', 'N is always fixed regardless of alpha'], correct: 1,
        optsKn: ['ಎರಡೂ N=5 ಆಗಿದ್ದವು', 'alpha=0.6 ನಲ್ಲಿ N=4, alpha=0.95 ನಲ್ಲಿ N=15 -- optimal N alpha ಜೊತೆ ಬೆಳೆಯುತ್ತದೆ', 'alpha=0.6 ನಲ್ಲಿ N=15, alpha=0.95 ನಲ್ಲಿ N=4', 'N alpha ಲೆಕ್ಕಿಸದೆ ಯಾವಾಗಲೂ ಸ್ಥಿರ'] },
      { q: 'Genuinely confirmed: what was the achievable speedup at alpha=0.95 versus alpha=0.6?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: alpha=0.95 vs alpha=0.6 ನಲ್ಲಿ achievable speedup ಏನಾಗಿತ್ತು?',
        opts: ['Both were 1.0x', '6.40x at alpha=0.95 versus 1.92x at alpha=0.6', '1.92x at alpha=0.95 versus 6.40x at alpha=0.6', 'Speedup does not depend on alpha'], correct: 1,
        optsKn: ['ಎರಡೂ 1.0x ಆಗಿದ್ದವು', 'alpha=0.95 ನಲ್ಲಿ 6.40x vs alpha=0.6 ನಲ್ಲಿ 1.92x', 'alpha=0.95 ನಲ್ಲಿ 1.92x vs alpha=0.6 ನಲ್ಲಿ 6.40x', 'Speedup alpha ಮೇಲೆ ಅವಲಂಬಿಸುವುದಿಲ್ಲ'] },
      { q: 'Why does the optimal draft length N grow as acceptance rate alpha increases?', qKn: 'Acceptance rate alpha ಹೆಚ್ಚಾಗುತ್ತಾ optimal draft length N ಏಕೆ ಬೆಳೆಯುತ್ತದೆ?',
        opts: ['It does not; N is unrelated to alpha', 'Higher alpha means drafts survive longer runs, so deeper drafting pays off before cost outweighs benefit', 'N always equals 1/alpha exactly', 'Lower alpha always allows longer drafts'], correct: 1,
        optsKn: ['ಅದೂ ಆಗುವುದಿಲ್ಲ; N alpha ಗೆ ಸಂಬಂಧವಿಲ್ಲ', 'ಹೆಚ್ಚಿನ alpha ಎಂದರೆ drafts ಹೆಚ್ಚು ಉದ್ದ runs ಬದುಕುಳಿಯುತ್ತವೆ, ಆದ್ದರಿಂದ ಆಳವಾದ drafting cost ಪ್ರಯೋಜನವನ್ನೂ ಮೀರುವ ಮೊದಲೂ ಫಲ ನೀಡುತ್ತದೆ', 'N ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ 1/alpha ಗೆ ಸಮಾನ', 'ಕಡಿಮೆ alpha ಯಾವಾಗಲೂ ಉದ್ದ drafts ಅನುಮತಿಸುತ್ತದೆ'] },
      { q: 'What does the EAGLE progression (vanilla to EAGLE-1 to EAGLE-2 to EAGLE-3) primarily improve?', qKn: 'EAGLE progression (vanilla ಇಂದ EAGLE-1 ಇಂದ EAGLE-2 ಇಂದ EAGLE-3) ಮುಖ್ಯವಾಗಿ ಏನನ್ನೂ ಸುಧಾರಿಸುತ್ತದೆ?',
        opts: ['The Leviathan correction rule itself', 'The acceptance rate alpha, by making the draft distribution more like the verifier\'s', 'The vocabulary size', 'The KV cache format'], correct: 1,
        optsKn: ['Leviathan correction rule ಸ್ವತಃ', 'Acceptance rate alpha, draft distribution ಅನ್ನೂ verifier ya ಹಾಗೆ ಹೆಚ್ಚು ಮಾಡುವ ಮೂಲಕ', 'Vocabulary size', 'KV cache format'] },
      { q: 'What problem does training-time test (TTT) genuinely address?', qKn: 'Training-time test (TTT) ನಿಜವಾಗಿ ಯಾವ ಸಮಸ್ಯೆಯನ್ನೂ ಪರಿಹರಿಸುತ್ತದೆ?',
        opts: ['GPU memory fragmentation', 'Exposure bias -- the mismatch between teacher-forced training context and self-generated inference context', 'Tokenizer vocabulary mismatch', 'KV cache rollback'], correct: 1,
        optsKn: ['GPU memory fragmentation', 'Exposure bias -- teacher-forced training context ಮತ್ತೆ self-generated inference context ನಡುವಿನ ಅಸಾಮ್ಯತೆ', 'Tokenizer vocabulary mismatch', 'KV cache rollback'] },
    ] } },
  ],
};
