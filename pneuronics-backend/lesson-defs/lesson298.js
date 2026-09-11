const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321424'; // Module 200: Differential Attention

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Differential Attention — Part 1: The Noise Floor & the Two-Softmax Subtraction',
  titleKn: 'Differential Attention — Part 1: Noise Floor & Two-Softmax Subtraction',
  desc: 'Genuinely implement standard softmax attention and differential attention (A1 - lambda*A2) side by side, and confirm the differential weights genuinely sum to exactly 1-lambda (not 1.0) and can go negative -- then genuinely verify a hand-worked example where subtraction cleanly cancels shared background attention while preserving the signal.',
  descKn: 'ಪ್ರಮಾಣಿತ softmax attention ಮತ್ತೆ differential attention (A1 - lambda*A2) ಅನ್ನೂ ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿ, differential weights ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 1-lambda ಗೆ ಸೇರುತ್ತವೆ (1.0 ಅಲ್ಲ) ಮತ್ತೆ negative ಆಗಬಹುದು ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ subtraction ಹಂಚಿದ background attention ಅನ್ನೂ ಸ್ವಚ್ಛವಾಗಿ ರದ್ದುಗೊಳಿಸುತ್ತಾ signal ಅನ್ನೂ ಸಂರಕ್ಷಿಸುವ ಒಂದೂ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ example ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
  objectives: [
    'Understand why ordinary softmax attention places positive mass on every token, creating an aggregate noise floor at long context.',
    'Genuinely implement standard_attention() and differential_attention() using two separate softmax branches.',
    'Genuinely confirm differential weights sum to exactly 1-lambda, not 1.0, and can be negative.',
    'Genuinely verify a hand-worked example where subtraction cancels shared background while preserving the differing signal.',
    'Understand the learnable lambda parameterization and why it can be negative.',
    'Distinguish differential attention from a naive "subtract the scores before softmax" approach.',
  ],
  objectivesKn: [
    'ಸಾಮಾನ್ಯ softmax attention ಪ್ರತಿ token ಮೇಲೆ positive mass ಇಡುತ್ತದೆ ಎಂದೂ, ದೀರ್ಘ context ನಲ್ಲಿ ಒಂದೂ ಸಂಚಿತ noise floor ಸೃಷ್ಟಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಎರಡೂ ಪ್ರತ್ಯೇಕ softmax branches ಬಳಸಿ standard_attention() ಮತ್ತೆ differential_attention() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Differential weights ನಿಖರವಾಗಿ 1-lambda ಗೆ ಸೇರುತ್ತವೆ, 1.0 ಅಲ್ಲ, ಮತ್ತೆ negative ಆಗಬಹುದು ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Subtraction ಹಂಚಿದ background ಅನ್ನೂ ರದ್ದುಗೊಳಿಸುತ್ತಾ ಭಿನ್ನ signal ಅನ್ನೂ ಸಂರಕ್ಷಿಸುವ ಒಂದೂ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ example ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
    'Learnable lambda parameterization ಅನ್ನೂ ಮತ್ತೆ ಅದೂ negative ಆಗಬಹುದು ಏಕೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Differential attention ಅನ್ನೂ ಒಂದೂ naive "softmax ಮೊದಲೂ scores ಕಳೆಯುವುದೂ" ವಿಧಾನದಿಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Differential Attention — Part 1: The Noise Floor & the Two-Softmax Subtraction', textKn: 'Differential Attention — Part 1: Noise Floor & Two-Softmax Subtraction', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Module 196 (long-context inference) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Module 196 (long-context inference) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Differential Attention,Noise Floor,Rejection Sampling,Part 1 of 3',
      pillsKn: 'Python,Differential Attention,Noise Floor,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Noise Floor: Softmax Never Gives Exact Zero', textKn: 'Noise Floor: Softmax ಎಂದಿಗೂ ನಿಖರ Zero ನೀಡುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Long Context Amplifies a Small-Looking Problem', headingKn: 'ದೀರ್ಘ Context ಚಿಕ್ಕ-ಕಾಣುವ ಸಮಸ್ಯೆಯನ್ನೂ ಏಕೆ ಬೆಳೆಸುತ್ತದೆ',
      bodyEn: 'For any finite score, softmax(x_i) = e^{x_i}/sum_j(e^{x_j}) is strictly positive -- even a wildly irrelevant token gets some tiny nonzero weight. With 1 relevant token among 128,000 irrelevant ones, each irrelevant token might contribute only ~O(1/N), but summed across O(N) positions, that aggregate background mass can remain O(1) -- comparable in scale to the signal itself. This is exactly the class of problem Module 196\'s KV-cache and Module 198\'s sliding-window discussions were built around: long context creates new failure modes invisible at short context.',
      bodyKn: 'ಯಾವುದೇ finite score ಗೆ, softmax(x_i) = e^{x_i}/sum_j(e^{x_j}) ಕಟ್ಟುನಿಟ್ಟಾಗಿ positive -- ಒಂದೂ ಸಂಪೂರ್ಣ ಅಸಂಬದ್ಧ token ಸಹ ಸ್ವಲ್ಪ nonzero weight ಪಡೆಯುತ್ತದೆ. 128,000 ಅಸಂಬದ್ಧ tokens ಆದ್ಯಂತ 1 ಸಂಬಂಧಿತ token ಜೊತೆ, ಪ್ರತಿ ಅಸಂಬದ್ಧ token ಕೇವಲ ~O(1/N) ಕೊಡುಗೆ ನೀಡಬಹುದು, ಆದರೆ O(N) positions ಆದ್ಯಂತ ಸೇರಿಸಿದಾಗ, ಆ ಸಂಚಿತ background mass O(1) ಆಗಿ ಉಳಿಯಬಹುದು -- signal ya ಸ್ವಂತ scale ಗೆ ಹೋಲಿಸಬಹುದಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Standard Attention: One Softmax Map', textKn: 'Standard Attention: ಒಂದೂ Softmax ನಕ್ಷೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'standard_attention.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement standard_attention(): scaled dot-product scores, a numerically stable softmax, and a weighted sum over values -- the ordinary Module 188-style attention mechanism.',
      descKn: 'standard_attention() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: scaled dot-product scores, ಒಂದೂ numerically stable softmax, ಮತ್ತೆ values ಮೇಲೆ ಒಂದೂ weighted sum.',
      code: "import math\n\ndef dot(a, b):\n    return sum(x * y for x, y in zip(a, b))\n\ndef softmax(row):\n    m = max(row)\n    exps = [math.exp(x - m) for x in row]\n    s = sum(exps)\n    return [e / s for e in exps]\n\ndef weighted_sum(weights, values):\n    d_v = len(values[0])\n    return [sum(w * v[j] for w, v in zip(weights, values)) for j in range(d_v)]\n\ndef standard_attention(query, keys, values):\n    d = len(query)\n    scale = math.sqrt(d)\n    scores = [dot(query, key) / scale for key in keys]\n    weights = softmax(scores)\n    return weighted_sum(weights, values), weights" } },

    { type: 'heading', data: { textEn: 'Differential Attention: Two Softmax Maps, One Subtraction', textKn: 'Differential Attention: ಎರಡೂ Softmax ನಕ್ಷೆಗಳು, ಒಂದೂ Subtraction', level: 'H2' } },
    { type: 'math', data: {
      formula: "\\text{DiffAttn} = \\left[\\text{softmax}\\left(\\frac{Q_1 K_1^T}{\\sqrt{d}}\\right) - \\lambda \\cdot \\text{softmax}\\left(\\frac{Q_2 K_2^T}{\\sqrt{d}}\\right)\\right] V",
      descEn: 'Split Q and K into two branches, run each through its own independently normalized softmax, then subtract the second (scaled by a learned lambda) from the first before multiplying by V.',
      descKn: 'Q ಮತ್ತೆ K ಅನ್ನೂ ಎರಡೂ branches ಗೆ ವಿಭಜಿಸಿ, ಪ್ರತಿಯೊಂದನ್ನೂ ಅದೂ ya ಸ್ವಂತ ಸ್ವತಂತ್ರವಾಗಿ normalized softmax ಮೂಲಕ ಚಲಾಯಿಸಿ, ನಂತರ V ಇಂದ ಗುಣಿಸುವ ಮೊದಲೂ ಮೊದಲನೆಯದೂ ಇಂದ ಎರಡನೆಯದೂ (learned lambda ಇಂದ scaled) ಕಳೆಯಿರಿ.' } },
    { type: 'code', data: {
      filename: 'differential_attention.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement differential_attention(): split query/keys into halves (the V1-style pedagogical split), run two independent softmaxes, and combine with A1 - lambda*A2.',
      descKn: 'differential_attention() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: query/keys ಅನ್ನೂ ಅರ್ಧಗಳಾಗಿ ವಿಭಜಿಸಿ, ಎರಡೂ ಸ್ವತಂತ್ರ softmaxes ಚಲಾಯಿಸಿ, A1 - lambda*A2 ಜೊತೆ ಸಂಯೋಜಿಸಿ.',
      code: "def differential_attention(query, keys, values, lam=0.8):\n    d = len(query)\n    half = d // 2\n    q1, q2 = query[:half], query[half:]\n    K1 = [key[:half] for key in keys]\n    K2 = [key[half:] for key in keys]\n    scale = math.sqrt(half)\n    A1 = softmax([dot(q1, k1) / scale for k1 in K1])\n    A2 = softmax([dot(q2, k2) / scale for k2 in K2])\n    diff_weights = [a1 - lam * a2 for a1, a2 in zip(A1, A2)]\n    return weighted_sum(diff_weights, values), A1, A2, diff_weights" } },

    { type: 'heading', data: { textEn: 'Differential Weights Are Not a Probability Distribution', textKn: 'Differential Weights ಒಂದೂ Probability Distribution ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'weight_sum_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirm A1 and A2 each sum to 1.0 (ordinary softmax outputs), but the combined diff_weights sum to exactly 1-lambda, on a large synthetic 1024-key sequence.',
      descKn: 'A1 ಮತ್ತೆ A2 ಪ್ರತಿಯೊಂದೂ 1.0 ಗೆ ಸೇರುತ್ತವೆ (ಸಾಮಾನ್ಯ softmax outputs) ಎಂದೂ, ಆದರೆ ಸಂಯೋಜಿತ diff_weights ನಿಖರವಾಗಿ 1-lambda ಗೆ ಸೇರುತ್ತವೆ ಎಂದೂ ಒಂದೂ ದೊಡ್ಡ synthetic 1024-key sequence ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
      code: "# query/keys/values genuinely built as an 8-dim, 1024-token synthetic sequence (Part 3 covers construction)\n_, A1, A2, diff_weights = differential_attention(query, keys, values, lam=0.8)\nprint('sum(A1):', round(sum(A1), 6), ' sum(A2):', round(sum(A2), 6))\nprint('sum(diff_weights):', round(sum(diff_weights), 6), ' expected 1-lambda =', round(1 - 0.8, 6))" } },
    { type: 'output', data: { output: "sum(A1): 1.0  sum(A2): 1.0\nsum(diff_weights): 0.2  expected 1-lambda = 0.2" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Combined Weights Sum to Exactly 1-lambda, Not 1.0', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಂಯೋಜಿತ Weights ನಿಖರವಾಗಿ 1-lambda ಗೆ ಸೇರುತ್ತವೆ, 1.0 ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed over 1024 real keys: A1 and A2 individually sum to exactly 1.0 each (they are genuine softmax outputs), but diff_weights sums to exactly 0.2 -- precisely 1-0.8. Since sum(A1)=1 and sum(A2)=1, sum(A1-lam*A2)=1-lam algebraically, and the code genuinely reproduces this identity to six decimal places. This is the first concrete proof that differential weights are not an ordinary probability distribution.',
      bodyKn: '1024 ನಿಜ keys ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: A1 ಮತ್ತೆ A2 ಪ್ರತ್ಯೇಕವಾಗಿ ಪ್ರತಿಯೊಂದೂ ನಿಖರವಾಗಿ 1.0 ಗೆ ಸೇರುತ್ತವೆ, ಆದರೆ diff_weights ನಿಖರವಾಗಿ 0.2 ಗೆ ಸೇರುತ್ತದೆ -- ನಿಖರವಾಗಿ 1-0.8. sum(A1)=1 ಮತ್ತೆ sum(A2)=1 ಆಗಿರುವುದರಿಂದ, sum(A1-lam*A2)=1-lam ಬೀಜಗಣಿತೀಯವಾಗಿ, code ಈ identity ಅನ್ನೂ ಆರೂ decimal places ಗೆ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'A Hand-Worked Example: Clean Noise Cancellation', textKn: 'ಒಂದೂ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ Example: ಸ್ವಚ್ಛ Noise Cancellation', level: 'H2' } },
    { type: 'code', data: {
      filename: 'hand_worked_example.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute A1 - 0.5*A2 for two hand-picked distributions where A2 represents shared background structure similar across positions 1 and 2, but A1 and A2 differ sharply at the informative position 3.',
      descKn: 'A2 positions 1 ಮತ್ತೆ 2 ಆದ್ಯಂತ ಸಮಾನವಾದ ಹಂಚಿದ background structure ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸುವ, ಆದರೆ A1 ಮತ್ತೆ A2 informative position 3 ನಲ್ಲಿ ತೀವ್ರವಾಗಿ ಭಿನ್ನವಾಗಿರುವ ಎರಡೂ ಕೈ-ಆಯ್ಕೆ ಮಾಡಿದ distributions ಗೆ A1 - 0.5*A2 ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "A1 = [0.10, 0.15, 0.60, 0.15]\nA2 = [0.20, 0.20, 0.20, 0.40]\nlam = 0.5\ndiff = [a1 - lam * a2 for a1, a2 in zip(A1, A2)]\nprint('A1:', A1)\nprint('A2:', A2)\nprint(f'diff (lambda={lam}):', [round(v, 4) for v in diff])" } },
    { type: 'output', data: { output: "A1: [0.1, 0.15, 0.6, 0.15]\nA2: [0.2, 0.2, 0.2, 0.4]\ndiff (lambda=0.5): [0.0, 0.05, 0.5, -0.05]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Signal Position Survives, Negative Weights Genuinely Appear', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Signal Position ಬದುಕುಳಿಯುತ್ತದೆ, Negative Weights ನಿಜವಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ',
      bodyEn: '• Genuinely confirmed: position 3 (A1=0.60, A2=0.20) retains 0.5 after subtraction -- the position where A1 and A2 disagree most survives nearly intact\n• Genuinely confirmed: position 4 (A1=0.15, A2=0.40) genuinely goes negative (-0.05) -- A2 over-weighted this position relative to A1, and the subtraction correctly produces a signed correction rather than clamping at zero\n• This hand-worked example demonstrates the mechanism working AS INTENDED -- Part 3 will show the honest, more complicated reality when A1 and A2 come from an untrained random split rather than a hand-picked, deliberately divergent pair',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: position 3 (A1=0.60, A2=0.20) subtraction ನಂತರ 0.5 ಅನ್ನೂ ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ -- A1 ಮತ್ತೆ A2 ಅತಿ ಹೆಚ್ಚು ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿರುವ position ಬಹುತೇಕ ಅಖಂಡವಾಗಿ ಉಳಿಯುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: position 4 (A1=0.15, A2=0.40) ನಿಜವಾಗಿ negative ಆಗುತ್ತದೆ (-0.05) -- A2 A1 ಗೆ ಹೋಲಿಸಿದರೆ ಈ position ಅನ್ನೂ over-weight ಮಾಡಿತ್ತು\n• ಈ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ example ಕಾರ್ಯವಿಧಾನ ಉದ್ದೇಶಿಸಿದಂತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ಪ್ರದರ್ಶಿಸುತ್ತದೆ -- Part 3 A1 ಮತ್ತೆ A2 ಒಂದೂ untrained random split ಇಂದ ಬಂದಾಗ ಪ್ರಾಮಾಣಿಕ, ಹೆಚ್ಚು ಸಂಕೀರ್ಣ ವಾಸ್ತವತೆಯನ್ನೂ ತೋರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Learnable Lambda Parameterization', textKn: 'Learnable Lambda ಪ್ಯಾರಾಮೀಟರೀಕರಣ', level: 'H2' } },
    { type: 'math', data: {
      formula: "\\lambda = \\exp(\\lambda_{q1}\\cdot\\lambda_{k1}) - \\exp(\\lambda_{q2}\\cdot\\lambda_{k2}) + \\lambda_{init}",
      descEn: 'Lambda is not a manually fixed constant -- it is the difference of two exponentials of learned dot products, plus an initialization offset. Because it is a DIFFERENCE of two positive exponential terms, the result can be negative.',
      descKn: 'Lambda ಒಂದೂ ಕೈಯಾರೆ ಸ್ಥಿರ constant ಅಲ್ಲ -- ಇದೂ learned dot products ya ಎರಡೂ exponentials ya ವ್ಯತ್ಯಾಸ, ಜೊತೆಗೆ ಒಂದೂ initialization offset. ಇದೂ ಎರಡೂ positive exponential terms ya ಒಂದೂ DIFFERENCE ಆಗಿರುವುದರಿಂದ, ಫಲಿತಾಂಶ negative ಆಗಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'compute_lambda.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement compute_lambda() and test two cases: one where the first exponential term is smaller (lambda goes negative) and one where it dominates (lambda exceeds 1.0).',
      descKn: 'compute_lambda() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಎರಡೂ cases test ಮಾಡಿ: ಒಂದೂ ಮೊದಲನೆಯ exponential term ಚಿಕ್ಕದೂ ಆಗಿರುವಾಗ (lambda negative ಆಗುತ್ತದೆ) ಮತ್ತೆ ಒಂದೂ ಅದೂ ಪ್ರಾಬಲ್ಯ ಹೊಂದಿರುವಾಗ (lambda 1.0 ಮೀರುತ್ತದೆ).',
      code: "def compute_lambda(lambda_q1, lambda_k1, lambda_q2, lambda_k2, lambda_init):\n    term1 = math.exp(dot(lambda_q1, lambda_k1))\n    term2 = math.exp(dot(lambda_q2, lambda_k2))\n    return term1 - term2 + lambda_init\n\nlam_a = compute_lambda([0.1, 0.2], [0.1, 0.2], [0.5, 0.6], [0.5, 0.6], lambda_init=0.1)\nprint('lambda (term1 < term2 case):', round(lam_a, 4))\n\nlam_b = compute_lambda([0.8, 0.9], [0.8, 0.9], [0.1, 0.1], [0.1, 0.1], lambda_init=0.1)\nprint('lambda (term1 > term2 case):', round(lam_b, 4))" } },
    { type: 'output', data: { output: "lambda (term1 < term2 case): -0.6892\nlambda (term1 > term2 case): 3.3429" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Parameterization Genuinely Spans Negative and Above-1 Values', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Parameterization ನಿಜವಾಗಿ Negative ಮತ್ತು Above-1 Values ವ್ಯಾಪಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: with lambda_q2/lambda_k2 dot product larger than lambda_q1/lambda_k1\'s, compute_lambda() genuinely produces -0.6892 -- a real negative lambda, which would make the differential formula A1 - lambda*A2 = A1 + 0.6892*A2, effectively ADDING the second branch instead of subtracting it. With the terms reversed, lambda genuinely reaches 3.3429, far above 1.0, allowing aggressive over-subtraction. Neither a fixed 0-1 range NOR a sigmoid-bounded parameterization could express this -- the difference-of-exponentials form genuinely gives the model this full flexibility.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: lambda_q2/lambda_k2 dot product lambda_q1/lambda_k1 ಗಿಂತ ದೊಡ್ಡದಾಗಿರುವಾಗ, compute_lambda() ನಿಜವಾಗಿ -0.6892 ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಒಂದೂ ನಿಜ negative lambda. Terms ಹಿಮ್ಮುಖಗೊಂಡಾಗ, lambda ನಿಜವಾಗಿ 3.3429 ತಲುಪುತ್ತದೆ, 1.0 ಗಿಂತ ಬಹಳ ಹೆಚ್ಚು. ಒಂದೂ ಸ್ಥಿರ 0-1 range ಅಥವಾ ಒಂದೂ sigmoid-bounded parameterization ಇದನ್ನೂ ವ್ಯಕ್ತಪಡಿಸಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Why sigmoid(lambda) Was Not Chosen Instead', headingKn: 'ಬದಲಿಗೆ sigmoid(lambda) ಏಕೆ ಆಯ್ಕೆ ಮಾಡಲಿಲ್ಲ',
      bodyEn: 'A sigmoid parameterization would force lambda into (0,1) -- excluding both the negative-lambda case (which effectively adds rather than subtracts branch 2) and the above-1 case (aggressive over-subtraction) genuinely confirmed above. The difference-of-exponentials form deliberately trades that guaranteed bound for a wider expressive range, letting training discover whatever subtraction strength actually helps.',
      bodyKn: 'ಒಂದೂ sigmoid parameterization lambda ಅನ್ನೂ (0,1) ಗೆ ಒತ್ತಾಯಿಸುತ್ತಿತ್ತು -- ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ negative-lambda case ಮತ್ತೆ above-1 case ಎರಡನ್ನೂ ಹೊರಗಿಡುತ್ತಾ. Difference-of-exponentials form ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆ ಖಾತ್ರಿಪಡಿಸಿದ bound ಅನ್ನೂ ಹೆಚ್ಚು ವಿಶಾಲ expressive range ಗಾಗಿ ವ್ಯಾಪಾರ ಮಾಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This lesson genuinely confirmed the subtraction math and a hand-worked case where it cleanly cancels shared background. Part 2 genuinely explains why the naive V1 implementation of this idea hurt decode speed in practice, and how the V2 redesign fixes it by changing where the extra query capacity goes -- reusing Module 196\'s memory-bound-decode and KV-cache findings directly.',
      bodyKn: 'ಈ lesson subtraction math ಅನ್ನೂ ಮತ್ತೆ ಅದೂ ಹಂಚಿದ background ಅನ್ನೂ ಸ್ವಚ್ಛವಾಗಿ ರದ್ದುಗೊಳಿಸುವ ಒಂದೂ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ case ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು. Part 2 ಈ ಕಲ್ಪನೆ ya naive V1 implementation ಪ್ರಾಯೋಗಿಕವಾಗಿ decode speed ಅನ್ನೂ ಏಕೆ ಹಾನಿಗೊಳಿಸಿತು ಎಂದೂ ನಿಜವಾಗಿ ವಿವರಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Noise floor: the small positive attention mass ordinary softmax places on every irrelevant token, which accumulates at long context\n• Differential attention: computing two independently normalized softmax attention maps and subtracting a scaled second from the first\n• Lambda: the learnable subtraction strength, parameterized so it can range beyond [0,1] including negative values\n• Common-mode structure: attention patterns shared similarly across both branches, which subtraction can cancel',
      bodyKn: '• Noise floor: ಸಾಮಾನ್ಯ softmax ಪ್ರತಿ ಅಸಂಬದ್ಧ token ಮೇಲೆ ಇಡುವ ಚಿಕ್ಕ positive attention mass, ದೀರ್ಘ context ನಲ್ಲಿ ಸಂಚಿತಗೊಳ್ಳುತ್ತದೆ\n• Differential attention: ಎರಡೂ ಸ್ವತಂತ್ರವಾಗಿ normalized softmax attention maps ಲೆಕ್ಕಹಾಕಿ ಮೊದಲನೆಯದೂ ಇಂದ scaled ಎರಡನೆಯದೂ ಕಳೆಯುವುದೂ\n• Lambda: learnable subtraction strength, [0,1] ಮೀರಿ negative values ಸೇರಿ ವ್ಯಾಪ್ತಿಗೊಳ್ಳುವಂತೆ parameterize ಆಗಿದೆ\n• Common-mode structure: ಎರಡೂ branches ಆದ್ಯಂತ ಸಮಾನವಾಗಿ ಹಂಚಿದ attention patterns, subtraction ರದ್ದುಗೊಳಿಸಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The two-softmax subtraction genuinely implemented here is the exact mechanism from Microsoft Research\'s Differential Transformer paper -- the noise-cancelling-headphones analogy is theirs: two "microphones" (attention maps) both pick up correlated background structure, which subtraction removes while a differing signal survives.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿದ two-softmax subtraction Microsoft Research ya Differential Transformer paper ಇಂದ ನಿಖರ ಕಾರ್ಯವಿಧಾನ -- noise-cancelling-headphones analogy ಅವರದೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the hand-worked example shows subtraction can sharpen contrast between a genuinely differing signal position and shared background, when the two branches learn to diverge appropriately\n• Genuinely confirmed: allowing negative weights (rather than clamping) lets the model express "actively suppress this position\'s contribution", a strictly larger expressive range than ordinary non-negative softmax attention',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ branches ಸೂಕ್ತವಾಗಿ ಭಿನ್ನವಾಗಲು ಕಲಿತಾಗ, ಕೈ-ಲೆಕ್ಕಹಾಕಿದ example subtraction ಒಂದೂ ನಿಜವಾಗಿ ಭಿನ್ನ signal position ಮತ್ತೆ ಹಂಚಿದ background ನಡುವಿನ contrast ಅನ್ನೂ ತೀಕ್ಷ್ಣಗೊಳಿಸಬಹುದು ಎಂದೂ ತೋರಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: negative weights ಅನುಮತಿಸುವುದೂ (clamp ಮಾಡುವ ಬದಲು) model ಗೆ "ಈ position ya ಕೊಡುಗೆಯನ್ನೂ ಸಕ್ರಿಯವಾಗಿ ನಿಗ್ರಹಿಸಿ" ಎಂದೂ ವ್ಯಕ್ತಪಡಿಸಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a RAG system must find one relevant paragraph among 300 retrieved documents, the noise-floor problem genuinely described here is exactly why long-context retrieval quality can degrade -- differential attention is proposed specifically to sharpen the model\'s ability to isolate a needle in that haystack.',
      bodyKn: 'ಒಂದೂ RAG system 300 retrieved documents ಆದ್ಯಂತ ಒಂದೂ relevant paragraph ಕಂಡುಹಿಡಿಯಬೇಕಾದಾಗ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ವಿವರಿಸಿದ noise-floor ಸಮಸ್ಯೆ ದೀರ್ಘ-context retrieval quality ಏಕೆ ಹದಗೆಡಬಹುದು ಎಂದೂ ನಿಖರವಾಗಿ ವಿವರಿಸುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'Noise-Cancelling Headphones Analogy', titleKn: 'Noise-Cancelling Headphones Analogy',
      captionEn: 'Two microphones both pick up shared background noise plus a differing signal. Subtracting one from the other cancels the correlated noise while the differing signal survives.',
      captionKn: 'ಎರಡೂ microphones ಎರಡೂ ಹಂಚಿದ background noise ಜೊತೆ ಒಂದೂ ಭಿನ್ನ signal ಅನ್ನೂ ಸೆರೆಹಿಡಿಯುತ್ತವೆ. ಒಂದೂ ಇಂದ ಇನ್ನೊಂದೂ ಕಳೆಯುವುದೂ correlated noise ಅನ್ನೂ ರದ್ದುಗೊಳಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 160' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='30' width='160' height='40' fill='#1e293b' stroke='#38bdf8'/><text x='100' y='55' fill='#e2e8f0' font-size='12' text-anchor='middle'>Mic 1: signal + noise</text><rect x='20' y='90' width='160' height='40' fill='#1e293b' stroke='#f59e0b'/><text x='100' y='115' fill='#e2e8f0' font-size='12' text-anchor='middle'>Mic 2: signal2 + noise</text><rect x='280' y='60' width='60' height='40' fill='#a855f7'/><text x='310' y='85' fill='#0f172a' font-size='16' text-anchor='middle'>&minus;</text><rect x='450' y='60' width='200' height='40' fill='#22c55e'/><text x='550' y='85' fill='#0f172a' font-size='12' text-anchor='middle'>signal - signal2 (noise cancels)</text><line x1='180' y1='50' x2='278' y2='75' stroke='#64748b' stroke-width='2'/><line x1='180' y1='110' x2='278' y2='85' stroke='#64748b' stroke-width='2'/><line x1='340' y1='80' x2='448' y2='80' stroke='#64748b' stroke-width='2' marker-end='url(#ahd1)'/><defs><marker id='ahd1' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6' fill='#64748b'/></marker></defs></svg>" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did sum(diff_weights) equal for lambda=0.8, on the 1024-key sequence?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 1024-key sequence ಮೇಲೆ lambda=0.8 ಗೆ sum(diff_weights) ಏನಿಗೆ ಸಮಾನವಾಗಿತ್ತು?',
        opts: ['1.0', '0.8', 'Exactly 0.2 (1-lambda)', '0.0'], correct: 2,
        optsKn: ['1.0', '0.8', 'ನಿಖರವಾಗಿ 0.2 (1-lambda)', '0.0'] },
      { q: 'Genuinely confirmed: in the hand-worked example with A1=[0.10,0.15,0.60,0.15], A2=[0.20,0.20,0.20,0.40], lambda=0.5, what was the diff weight at position 4?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: A1=[0.10,0.15,0.60,0.15], A2=[0.20,0.20,0.20,0.40], lambda=0.5 ಇರುವ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ example ನಲ್ಲಿ, position 4 ನಲ್ಲಿ diff weight ಏನಾಗಿತ್ತು?',
        opts: ['0.15', '0.40', '-0.05 (negative)', '0.0'], correct: 2,
        optsKn: ['0.15', '0.40', '-0.05 (negative)', '0.0'] },
      { q: 'Why does softmax never assign exactly zero attention to an irrelevant token?', qKn: 'Softmax ಒಂದೂ ಅಸಂಬದ್ಧ token ಗೆ ಎಂದಿಗೂ ನಿಖರವಾಗಿ ಶೂನ್ಯ attention ಏಕೆ ನಿಗದಿಪಡಿಸುವುದಿಲ್ಲ?',
        opts: ['It is a bug in the softmax formula', 'e^x is strictly positive for any finite x, so every score maps to a positive weight', 'Softmax only works for exactly 2 tokens', 'It depends on the value dimension'], correct: 1,
        optsKn: ['ಇದೂ softmax formula ನಲ್ಲಿ ಒಂದೂ bug', 'ಯಾವುದೇ finite x ಗೆ e^x ಕಟ್ಟುನಿಟ್ಟಾಗಿ positive, ಆದ್ದರಿಂದ ಪ್ರತಿ score ಒಂದೂ positive weight ಗೆ map ಆಗುತ್ತದೆ', 'Softmax ಕೇವಲ ನಿಖರವಾಗಿ 2 tokens ಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'ಅದೂ value dimension ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ'] },
      { q: 'Why is differential attention NOT the same as softmax(S1 - lambda*S2) computed on the raw scores before normalization?', qKn: 'Differential attention normalization ಮೊದಲೂ raw scores ಮೇಲೆ ಲೆಕ್ಕಹಾಕಿದ softmax(S1 - lambda*S2) ಗೆ ಏಕೆ ಸಮಾನವಲ್ಲ?',
        opts: ['They are mathematically identical', 'Softmax is nonlinear, so softmax(x-y) does not equal softmax(x)-softmax(y) in general', 'Raw scores cannot be subtracted', 'Lambda only applies after normalization by definition'], correct: 1,
        optsKn: ['ಅವೂ ಗಣಿತೀಯವಾಗಿ identical', 'Softmax nonlinear ಆಗಿದೆ, ಆದ್ದರಿಂದ softmax(x-y) ಸಾಮಾನ್ಯವಾಗಿ softmax(x)-softmax(y) ಗೆ ಸಮಾನವಲ್ಲ', 'Raw scores ಕಳೆಯಲಾಗುವುದಿಲ್ಲ', 'Lambda ವ್ಯಾಖ್ಯಾನದ ಪ್ರಕಾರ ಕೇವಲ normalization ನಂತರ ಅನ್ವಯಿಸುತ್ತದೆ'] },
      { q: 'What is the "noise floor" this lesson genuinely describes?', qKn: 'ಈ lesson ನಿಜವಾಗಿ ವಿವರಿಸುವ "noise floor" ಏನೂ?',
        opts: ['A hardware limitation of GPUs', 'The aggregate positive attention mass ordinary softmax places on irrelevant tokens, which can become significant at long context', 'A bug specific to differential attention', 'The minimum vocabulary size'], correct: 1,
        optsKn: ['GPUs ya ಒಂದೂ hardware ಮಿತಿ', 'ಸಾಮಾನ್ಯ softmax ಅಸಂಬದ್ಧ tokens ಮೇಲೆ ಇಡುವ ಸಂಚಿತ positive attention mass, ದೀರ್ಘ context ನಲ್ಲಿ ಮಹತ್ವದೂ ಆಗಬಹುದು', 'Differential attention ಗೆ ನಿರ್ದಿಷ್ಟ ಒಂದೂ bug', 'ಕನಿಷ್ಠ vocabulary size'] },
    ] } },
  ],
};
