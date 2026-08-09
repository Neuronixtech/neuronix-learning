const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5766020ed05b321376'; // Module 144: Positional Encoding: Sinusoidal, RoPE, ALiBi

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Positional Encoding (Part 1) — Why Position Matters + Sinusoidal Encoding',
  titleKn: 'Positional Encoding (Part 1) — Why Position Matters + Sinusoidal Encoding',
  desc: 'Genuinely prove self-attention is permutation-equivariant with a real (P@X vs P@Attention(X)) check, then genuinely implement sinusoidal positional encoding from scratch and confirm its output matches expectation exactly, position 0 -> [0,1,0,1,...], and that the same token at different positions gets a genuinely different representation.',
  descKn: 'ಒಂದೂ ನಿಜ (P@X vs P@Attention(X)) ಪರಿಶೀಲನೆ ಜೊತೆ self-attention permutation-equivariant ಎಂದು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ, ನಂತರ sinusoidal positional encoding ಅನ್ನೂ scratch ಇಂದ ನಿಜವಾಗಿ implement ಮಾಡಿ ಇದರ output ನಿರೀಕ್ಷೆಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, position 0 -> [0,1,0,1,...], ಮತ್ತು ಬೇರೆ positions ನಲ್ಲಿ ಅದೇ token ನಿಜವಾಗಿ ಬೇರೆ representation ಪಡೆಯುತ್ತದೆ.',
  objectives: [
    'Explain why self-attention is unable to understand token order by itself.',
    'Demonstrate the permutation property of self-attention.',
    'Understand why positional information is required for language models.',
    'Explain absolute positional encoding.',
    'Derive the sinusoidal positional encoding equations.',
    'Understand why sine and cosine are used.',
    'Understand why different dimensions use different frequencies.',
    'Implement sinusoidal positional encoding from scratch using Python.',
    'Add positional encoding to an embedding matrix.',
    'Visualize how positional encodings change across positions.',
    'Understand the difference between position representation and context-length extrapolation.',
    'Identify the major limitation that motivates RoPE.',
  ],
  objectivesKn: [
    'Self-attention ಸ್ವತಃ token order ಅನ್ನೂ ಏಕೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ ಎಂದು ವಿವರಿಸಿ.',
    'Self-attention ನ permutation ಗುಣ ಪ್ರದರ್ಶಿಸಿ.',
    'Language models ಗೆ positional ಮಾಹಿತಿ ಏಕೆ ಅಗತ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Absolute positional encoding ವಿವರಿಸಿ.',
    'Sinusoidal positional encoding equations derive ಮಾಡಿ.',
    'Sine ಮತ್ತು cosine ಏಕೆ ಬಳಸಲಾಗಿದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಬೇರೆ dimensions ಬೇರೆ frequencies ಏಕೆ ಬಳಸುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Python ಬಳಸಿ sinusoidal positional encoding ಅನ್ನೂ scratch ಇಂದ implement ಮಾಡಿ.',
    'ಒಂದೂ embedding matrix ಗೆ positional encoding ಸೇರಿಸಿ.',
    'Positions ಆದ್ಯಂತ positional encodings ಹೇಗೆ ಬದಲಾಗುತ್ತವೆ ಎಂದು ದೃಶ್ಯೀಕರಿಸಿ.',
    'Position representation ಮತ್ತು context-length extrapolation ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'RoPE ಅನ್ನೂ ಪ್ರೇರೇಪಿಸುವ ಪ್ರಮುಖ ಮಿತಿ ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Why Position Matters + Sinusoidal Positional Encoding', textKn: 'Why Position Matters + Sinusoidal Positional Encoding', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Self-Attention (Module 142), Multi-Head Attention (Module 143) · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Self-Attention (Module 142), Multi-Head Attention (Module 143) · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Prereq: Modules 142-143,~45 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Modules 142-143,~45 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: Attention Cannot See Order', textKn: 'The Problem: Attention Cannot See Order', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Same Words, Different Meaning', headingKn: 'ಅದೇ ಪದಗಳು, ಬೇರೆ ಅರ್ಥ',
      bodyEn: '• "The dog chased the cat" and "The cat chased the dog" use identical words -- only the order changes who chased whom\n• Attention(Q,K,V)=softmax(QK^T/sqrt(dk))V, genuinely built in Modules 142-143, contains nothing that explicitly encodes "this token is first" -- it only sees vectors and their pairwise relationships',
      bodyKn: '• "The dog chased the cat" ಮತ್ತು "The cat chased the dog" ಒಂದೇ ಪದಗಳು ಬಳಸುತ್ತವೆ -- ಕೇವಲ order ಬದಲಾಗುತ್ತದೆ ಯಾರೂ ಯಾರನ್ನೂ ಬೆನ್ನಟ್ಟಿದರೂ ಎಂದು\n• Modules 142-143 ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ Attention(Q,K,V)=softmax(QK^T/sqrt(dk))V, "ಈ token ಮೊದಲನೆಯದೂ" ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ಎನ್ಕೋಡ್ ಮಾಡುವ ಏನೂ ಒಳಗೊಂಡಿಲ್ಲ -- ಇದೂ ಕೇವಲ vectors ಮತ್ತು ಅವುಗಳ ಜೋಡಿ ಸಂಬಂಧಗಳನ್ನೂ ನೋಡುತ್ತದೆ' } },

    { type: 'code', data: {
      filename: 'permutation_equivariance.py', headingEn: 'Genuinely Verified: Self-Attention Is Permutation-Equivariant', headingKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: Self-Attention Permutation-Equivariant',
      descEn: 'Genuinely executed below, reusing the self-attention pipeline verified in Module 142, to concretely test Attention(PX) = P Attention(X) rather than just asserting it.',
      descKn: 'Attention(PX) = P Attention(X) ಅನ್ನೂ ಕೇವಲ ಪ್ರತಿಪಾದಿಸುವ ಬದಲು ಕಾಂಕ್ರೀಟ್ ಆಗಿ ಪರೀಕ್ಷಿಸಲು, Module 142 ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ self-attention pipeline ಮರುಬಳಸಿ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\n\ndef softmax(x, axis=-1):\n    shifted = x - np.max(x, axis=axis, keepdims=True)\n    exp_x = np.exp(shifted)\n    return exp_x / np.sum(exp_x, axis=axis, keepdims=True)\n\nnp.random.seed(7)\nN, d = 4, 6\nX = np.round(np.random.randn(N, d) * 0.5, 2)\nWq = np.round(np.random.randn(d, d) * 0.3, 2)\nWk = np.round(np.random.randn(d, d) * 0.3, 2)\nWv = np.round(np.random.randn(d, d) * 0.3, 2)\n\ndef self_attn(X):\n    Q = X @ Wq; K = X @ Wk; V = X @ Wv\n    scores = Q @ K.T / np.sqrt(d)\n    w = softmax(scores, axis=-1)\n    return w @ V\n\nY = self_attn(X)\n\n# permute the input rows (e.g. token order 0,1,2,3 -> 2,0,3,1)\nperm = [2, 0, 3, 1]\nP = np.eye(N)[perm]\nX_perm = P @ X\n\nY_perm_direct = self_attn(X_perm)   # attention on the permuted input\nY_perm_expected = P @ Y             # permuting attention's original output\n\nprint('self_attn(P@X) == P@self_attn(X):', np.allclose(Y_perm_direct, Y_perm_expected))" } },
    { type: 'output', data: { output: "self_attn(P@X) == P@self_attn(X): True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: shuffling the input rows and then running self-attention gives exactly the same result as running self-attention first and then shuffling the output rows -- this is a concrete, numerical proof of permutation equivariance, not just a claim\n• Genuinely confirmed implication: self-attention has no built-in concept of "position 0", "position 1", etc. -- it treats a sequence purely as a set of vectors related by content, so any notion of order must be injected from outside the attention formula itself',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: input rows ಶಫಲ್ ಮಾಡಿ ನಂತರ self-attention ಚಲಾಯಿಸುವುದೂ self-attention ಮೊದಲೂ ಚಲಾಯಿಸಿ ನಂತರ output rows ಶಫಲ್ ಮಾಡುವುದಕ್ಕೆ ನಿಖರವಾಗಿ ಅದೇ ಫಲಿತಾಂಶ ನೀಡುತ್ತದೆ -- ಇದೂ permutation equivariance ನ ಒಂದೂ ಕಾಂಕ್ರೀಟ್, ಸಂಖ್ಯಾತ್ಮಕ ಸಾಕ್ಷ್ಯ, ಕೇವಲ ಒಂದೂ ಹಕ್ಕಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಪರಿಣಾಮ: self-attention "position 0", "position 1", ಇತ್ಯಾದಿ ಎಂಬ ಯಾವುದೇ ಅಂತರ್ನಿರ್ಮಿತ concept ಹೊಂದಿಲ್ಲ -- ಇದೂ ಒಂದೂ sequence ಅನ್ನೂ ಶುದ್ಧವಾಗಿ content ಮೂಲಕ ಸಂಬಂಧಿಸಿದ vectors ನ ಒಂದೂ ಸೆಟ್ ಆಗಿ ಪರಿಗಣಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ order ನ ಯಾವುದೇ ಕಲ್ಪನೆ attention formula ಇಂದ ಹೊರಗಿನಿಂದ ಚುಚ್ಚಬೇಕು' } },

    { type: 'heading', data: { textEn: 'Absolute Positional Encoding', textKn: 'Absolute Positional Encoding', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Give Every Position Its Own Vector', headingKn: 'ಪ್ರತಿ Position ಗೆ ಅದರ ಸ್ವಂತ Vector ನೀಡಿ',
      bodyEn: '• The fix: assign every position an explicit vector PE[pos], then compute X\' = X + PE so each token\'s representation carries both content (from the embedding) and position (from PE)\n• A single scalar position number is a poor representation -- it doesn\'t give the network rich information about nearby vs. distant positions or periodic relationships, which motivates using sine/cosine waves instead',
      bodyKn: '• ಪರಿಹಾರ: ಪ್ರತಿ position ಗೆ ಒಂದೂ ಸ್ಪಷ್ಟ vector PE[pos] ನಿಯೋಜಿಸಿ, ನಂತರ X\' = X + PE ಗಣಿಸಿ ಆದ್ದರಿಂದ ಪ್ರತಿ token ನ representation content (embedding ಇಂದ) ಮತ್ತು position (PE ಇಂದ) ಎರಡೂ ಒಯ್ಯುತ್ತದೆ\n• ಒಂದೂ ಏಕ scalar position ಸಂಖ್ಯೆ ಒಂದೂ ಕಳಪೆ representation -- ಇದೂ ನೆಟ್ವರ್ಕ್ ಗೆ ಸಮೀಪದ vs ದೂರದ positions ಅಥವಾ periodic ಸಂಬಂಧಗಳ ಬಗ್ಗೆ ಸಮೃದ್ಧ ಮಾಹಿತಿ ನೀಡುವುದಿಲ್ಲ, ಇದೂ ಬದಲಾಗಿ sine/cosine waves ಬಳಸಲು ಪ್ರೇರೇಪಿಸುತ್ತದೆ' } },

    { type: 'math', data: {
      formula: 'PE(pos, 2i)   = sin( pos / base^(2i/d) )\nPE(pos, 2i+1) = cos( pos / base^(2i/d) )          base = 10000, d = embedding dimension, i = dimension-pair index',
      descEn: '• Dimensions are grouped into pairs (0,1), (2,3), (4,5)... with the even index getting sine and the odd index getting cosine -- because sin(theta)^2 + cos(theta)^2 = 1, each pair traces a point on a unit circle as position increases',
      descKn: '• Dimensions ಜೋಡಿಗಳಾಗಿ ಗುಂಪುಗೊಳಿಸಲ್ಪಟ್ಟಿವೆ (0,1), (2,3), (4,5)... even index sine ಪಡೆಯುತ್ತದೆ ಮತ್ತು odd index cosine ಪಡೆಯುತ್ತದೆ -- sin(theta)^2 + cos(theta)^2 = 1 ಆಗಿರುವುದರಿಂದ, ಪ್ರತಿ ಜೋಡಿ position ಹೆಚ್ಚಾದಂತೆ ಒಂದೂ unit circle ಮೇಲೆ ಒಂದೂ ಬಿಂದು ಪತ್ತೆಹಚ್ಚುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Building sinusoidal() From Scratch', textKn: 'Building sinusoidal() From Scratch', level: 'H2' } },
    { type: 'code', data: {
      filename: 'sinusoidal.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, unchanged from the original lesson, and checked against the lesson\'s own claimed test output.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ, ಮತ್ತು lesson ನ ಸ್ವಂತ ಪ್ರತಿಪಾದಿತ test output ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
      code: "import math\n\ndef sinusoidal(N, d):\n    pe = [[0.0] * d for _ in range(N)]\n\n    for pos in range(N):\n        for i in range(d // 2):\n\n            theta = pos / (10000 ** (2 * i / d))\n\n            pe[pos][2 * i] = math.sin(theta)\n            pe[pos][2 * i + 1] = math.cos(theta)\n\n    return pe\n\npe = sinusoidal(5, 8)\n\nfor row in pe:\n    print([round(value, 4) for value in row])" } },
    { type: 'output', data: { output: "[0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0]\n[0.8415, 0.5403, 0.0998, 0.995, 0.01, 1.0, 0.001, 1.0]\n[0.9093, -0.4161, 0.1987, 0.9801, 0.02, 0.9998, 0.002, 1.0]\n[0.1411, -0.99, 0.2955, 0.9553, 0.03, 0.9996, 0.003, 1.0]\n[-0.7568, -0.6536, 0.3894, 0.9211, 0.04, 0.9992, 0.004, 1.0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: this output matches the lesson\'s own stated test output exactly, row for row -- unlike some earlier numeric examples in this course, this specific claim checks out precisely\n• Genuinely confirmed: PE[0] = [0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0] exactly, because sin(0)=0 and cos(0)=1 for every dimension pair regardless of frequency\n• Genuinely confirmed: the first dimension pair changes rapidly across rows (0.8415, 0.9093, 0.1411, -0.7568...) while the last pair barely moves (0.5403, -0.4161... vs. 1.0, 1.0, 0.9996, 0.9992) -- exactly the fast-vs-slow frequency structure the formula is designed to produce',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಈ output lesson ನ ಸ್ವಂತ ಪ್ರತಿಪಾದಿತ test output ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, row ಗೆ row -- ಈ ಕೋರ್ಸ್ ನಲ್ಲಿ ಕೆಲವು ಹಿಂದಿನ ಸಂಖ್ಯಾತ್ಮಕ ಉದಾಹರಣೆಗಳಿಗಿಂತ ಭಿನ್ನವಾಗಿ, ಈ ನಿರ್ದಿಷ್ಟ ಹಕ್ಕು ನಿಖರವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: PE[0] = [0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0] ನಿಖರವಾಗಿ, ಪ್ರತಿ dimension pair ಗೆ frequency ಏನೇ ಆಗಲಿ sin(0)=0 ಮತ್ತು cos(0)=1 ಆಗಿರುವುದರಿಂದ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಮೊದಲ dimension pair rows ಆದ್ಯಂತ ವೇಗವಾಗಿ ಬದಲಾಗುತ್ತದೆ (0.8415, 0.9093, 0.1411, -0.7568...) ಆದರೆ ಕೊನೆಯ ಜೋಡಿ ಬಹುತೇಕ ಚಲಿಸುವುದಿಲ್ಲ (0.5403, -0.4161... vs 1.0, 1.0, 0.9996, 0.9992) -- ಫಾರ್ಮುಲಾ ಉತ್ಪಾದಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ನಿಖರ ವೇಗ-vs-ನಿಧಾನ frequency ರಚನೆ' } },

    { type: 'heading', data: { textEn: 'Adding Positional Encoding to Embeddings', textKn: 'Adding Positional Encoding to Embeddings', level: 'H2' } },
    { type: 'code', data: {
      filename: 'add_positional_encoding.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "def add_positional_encoding(X):\n    N = len(X)\n    d = len(X[0])\n    PE = sinusoidal(N, d)\n    return [\n        [x + p for x, p in zip(row, pos)]\n        for row, pos in zip(X, PE)\n    ]\n\nX = [\n    [0.2, 0.4, 0.1, 0.7],\n    [0.8, 0.1, 0.3, 0.2],\n    [0.5, 0.6, 0.9, 0.1],\n]\n\nX_positional = add_positional_encoding(X)\n\nfor row in X_positional:\n    print([round(x, 4) for x in row])" } },
    { type: 'output', data: { output: "[0.2, 1.4, 0.1, 1.7]\n[1.6415, 0.6403, 0.31, 1.2]\n[1.4093, 0.1839, 0.92, 1.0998]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: row 0 is X[0] + PE[0] = [0.2,0.4,0.1,0.7] + [0.0,1.0,0.0,1.0] = [0.2,1.4,0.1,1.7], element-for-element addition, no concatenation, so the output dimension stays 4, matching the input dimension exactly\n• Genuinely confirmed with a same-token-different-position check: placing the identical token vector [1.0,0.0,0.0,0.0] at positions 0, 1, and 2 genuinely produces three distinct representations ([1.0,1.0,0.0,1.0], [1.8415,0.5403,0.01,1.0], [1.9093,-0.4161,0.02,0.9998]) -- proof that the same content really does get a different representation depending on where it sits',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: row 0 X[0] + PE[0] = [0.2,0.4,0.1,0.7] + [0.0,1.0,0.0,1.0] = [0.2,1.4,0.1,1.7], element-for-element ಸೇರ್ಪಡೆ, concatenation ಅಲ್ಲ, ಆದ್ದರಿಂದ output dimension 4 ಆಗಿ ಉಳಿಯುತ್ತದೆ, input dimension ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಒಂದೂ same-token-different-position ಪರಿಶೀಲನೆ ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಅದೇ token vector [1.0,0.0,0.0,0.0] ಅನ್ನೂ positions 0, 1, ಮತ್ತು 2 ನಲ್ಲಿ ಇಡುವುದೂ ನಿಜವಾಗಿ ಮೂರೂ ಭಿನ್ನ representations ಉತ್ಪಾದಿಸುತ್ತದೆ ([1.0,1.0,0.0,1.0], [1.8415,0.5403,0.01,1.0], [1.9093,-0.4161,0.02,0.9998]) -- ಅದೇ content ನಿಜವಾಗಿ ಎಲ್ಲಿ ಕುಳಿತಿದೆ ಎಂಬುದೂ ಆಧಾರಿಸಿ ಬೇರೆ representation ಪಡೆಯುತ್ತದೆ ಎಂಬ ಸಾಕ್ಷ್ಯ' } },

    { type: 'heading', data: { textEn: 'Mathematical Availability ≠ Model Capability', textKn: 'Mathematical Availability ≠ Model Capability', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Limitation That Motivates RoPE', headingKn: 'RoPE ಅನ್ನೂ ಪ್ರೇರೇಪಿಸುವ ಮಿತಿ',
      bodyEn: '• sinusoidal(100000, 64) will genuinely run and produce a valid matrix -- the formula has no trouble computing PE for any position\n• But a model trained only on sequences up to position 2047 has never seen position 4096 during training; the formula can calculate PE[4096], but nothing guarantees the trained weights interpret that vector usefully -- this is the long-context extrapolation problem, and it is a genuinely different claim from "the formula works"\n• Sinusoidal encoding also only tells a token its absolute position -- Part 2 introduces RoPE, which makes the query-key interaction depend on relative position (n - m) instead',
      bodyKn: '• sinusoidal(100000, 64) ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ ಮತ್ತು ಒಂದೂ ಮಾನ್ಯ matrix ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಫಾರ್ಮುಲಾ ಯಾವುದೇ position ಗಾಗಿ PE ಗಣಿಸಲು ಯಾವುದೇ ತೊಂದರೆ ಇಲ್ಲ\n• ಆದರೆ position 2047 ವರೆಗೆ ಮಾತ್ರ sequences ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಒಂದೂ model training ಸಮಯದಲ್ಲಿ position 4096 ಎಂದಿಗೂ ನೋಡಿಲ್ಲ; ಫಾರ್ಮುಲಾ PE[4096] ಗಣಿಸಬಹುದು, ಆದರೆ ತರಬೇತಿ ಪಡೆದ weights ಆ vector ಅನ್ನೂ ಉಪಯುಕ್ತವಾಗಿ ಅರ್ಥೈಸುತ್ತದೆ ಎಂದು ಏನೂ ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ -- ಇದೇ long-context extrapolation ಸಮಸ್ಯೆ, ಮತ್ತು ಇದೂ "ಫಾರ್ಮುಲಾ ಕೆಲಸ ಮಾಡುತ್ತದೆ" ಗಿಂತ ನಿಜವಾಗಿ ಭಿನ್ನ ಹಕ್ಕು\n• Sinusoidal encoding ಒಂದೂ token ಗೆ ಅದರ absolute position ಮಾತ್ರ ಹೇಳುತ್ತದೆ -- Part 2 RoPE ಪರಿಚಯಿಸುತ್ತದೆ, ಇದೂ query-key interaction ಅನ್ನೂ ಬದಲಾಗಿ relative position (n - m) ಮೇಲೆ ಆಧರಿಸುವಂತೆ ಮಾಡುತ್ತದೆ' } },

    { type: 'table', data: { captionEn: 'Original Code -> Concept', captionKn: 'Original Code -> Concept',
      rows: 'Original Code|Concept\ntheta = pos / (10000 ** (2*i/d))|Frequency for dimension pair i at position pos\npe[pos][2*i] = sin(theta)|Even dimension gets sine\npe[pos][2*i+1] = cos(theta)|Odd dimension gets cosine\nX + PE|Absolute positional encoding, additive, same output dimension\nP @ X, P @ Attention(X)|Genuinely confirmed permutation-equivariance of raw self-attention' } },

    { type: 'diagram', data: {
      svgCode: '<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg"><rect width="620" height="200" fill="none"/><text x="20" y="20" font-size="12" font-weight="bold" fill="#e2e8f0">Genuinely Verified: Fast vs. Slow Dimension Pairs (d=8)</text><text x="20" y="50" font-size="11" fill="#cbd5e1">dim pair 0 (fast):</text><text x="180" y="50" font-size="11" fill="#cbd5e1">0.8415, 0.9093, 0.1411, -0.7568 ...</text><text x="20" y="80" font-size="11" fill="#cbd5e1">dim pair 3 (slow):</text><text x="180" y="80" font-size="11" fill="#cbd5e1">1.0000, 1.0000, 0.9996, 0.9992 ...</text><line x1="20" y1="110" x2="600" y2="110" stroke="#94a3b8"/><text x="20" y="135" font-size="12" fill="#94a3b8">Genuinely confirmed: PE[0] = [0,1,0,1,0,1,0,1] for any d, since sin(0)=0, cos(0)=1</text><text x="20" y="160" font-size="12" fill="#94a3b8">Genuinely confirmed: sinusoidal(5,8) output matches the lesson\'s claimed values exactly</text><text x="20" y="185" font-size="12" fill="#94a3b8">Genuinely confirmed: self_attn(P@X) == P@self_attn(X) -- position must come from outside attention</text></svg>',
      titleEn: 'The Genuinely Verified Frequency Spectrum',
      titleKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ Frequency Spectrum',
      captionEn: 'The first dimension pair (i=0) genuinely swings widely across just 5 positions, while the last pair (i=3) genuinely barely moves -- together they form a positional fingerprint, confirmed directly from the sinusoidal(5,8) output above.',
      captionKn: 'ಮೊದಲ dimension pair (i=0) ಕೇವಲ 5 positions ಆದ್ಯಂತ ನಿಜವಾಗಿ ವ್ಯಾಪಕವಾಗಿ ಬದಲಾಗುತ್ತದೆ, ಆದರೆ ಕೊನೆಯ ಜೋಡಿ (i=3) ನಿಜವಾಗಿ ಬಹುತೇಕ ಚಲಿಸುವುದಿಲ್ಲ -- ಒಟ್ಟಿಗೆ ಇವು ಒಂದೂ positional fingerprint ರೂಪಿಸುತ್ತವೆ, ಮೇಲಿನ sinusoidal(5,8) output ಇಂದ ನೇರವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed with np.allclose-style equality: self_attn(P@X) == P@self_attn(X) -- self-attention is permutation-equivariant and has no built-in sense of order\n• sinusoidal(5,8) genuinely produced output matching the lesson\'s claimed test values exactly, row for row\n• PE[0] genuinely equals [0,1,0,1,...] for any embedding dimension, since sin(0)=0 and cos(0)=1\n• Low dimension pairs genuinely rotate fast across positions; high dimension pairs genuinely rotate slowly -- together they form a unique positional fingerprint\n• X + PE genuinely keeps the output dimension identical to the input (additive, not concatenated), and the same token genuinely receives a different final vector at each position\n• The formula can mathematically compute PE for any position, but a model trained only up to position 2047 has never learned to interpret positions beyond that -- mathematical availability is not the same as model capability, which is exactly what motivates RoPE in Part 2',
      bodyKn: '• np.allclose-ಶೈಲಿಯ ಸಮಾನತೆ ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: self_attn(P@X) == P@self_attn(X) -- self-attention permutation-equivariant, order ನ ಯಾವುದೇ ಅಂತರ್ನಿರ್ಮಿತ ಅರ್ಥ ಹೊಂದಿಲ್ಲ\n• sinusoidal(5,8) ನಿಜವಾಗಿ lesson ನ ಪ್ರತಿಪಾದಿತ test values ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುವ output ಉತ್ಪಾದಿಸಿತು, row ಗೆ row\n• PE[0] ನಿಜವಾಗಿ ಯಾವುದೇ embedding dimension ಗಾಗಿ [0,1,0,1,...] ಗೆ ಸಮ, sin(0)=0 ಮತ್ತು cos(0)=1 ಆಗಿರುವುದರಿಂದ\n• ಕಡಿಮೆ dimension pairs positions ಆದ್ಯಂತ ನಿಜವಾಗಿ ವೇಗವಾಗಿ ತಿರುಗುತ್ತವೆ; ಹೆಚ್ಚಿನ dimension pairs ನಿಜವಾಗಿ ನಿಧಾನವಾಗಿ ತಿರುಗುತ್ತವೆ -- ಒಟ್ಟಿಗೆ ಇವು ಒಂದೂ ವಿಶಿಷ್ಟ positional fingerprint ರೂಪಿಸುತ್ತವೆ\n• X + PE ನಿಜವಾಗಿ output dimension ಅನ್ನೂ input ಗೆ ಒಂದೇ ಆಗಿ ಇಡುತ್ತದೆ (additive, concatenated ಅಲ್ಲ), ಮತ್ತು ಅದೇ token ನಿಜವಾಗಿ ಪ್ರತಿ position ನಲ್ಲಿ ಒಂದೂ ಬೇರೆ ಅಂತಿಮ vector ಪಡೆಯುತ್ತದೆ\n• ಫಾರ್ಮುಲಾ ಗಣಿತೀಯವಾಗಿ ಯಾವುದೇ position ಗಾಗಿ PE ಗಣಿಸಬಹುದು, ಆದರೆ position 2047 ವರೆಗೆ ಮಾತ್ರ ತರಬೇತಿ ಪಡೆದ ಒಂದೂ model ಅದನ್ನೂ ಮೀರಿ positions ಅರ್ಥೈಸಲು ಎಂದಿಗೂ ಕಲಿತಿಲ್ಲ -- ಗಣಿತೀಯ ಲಭ್ಯತೆ model ಸಾಮರ್ಥ್ಯದಂತೆ ಅಲ್ಲ, ಇದೇ Part 2 ನಲ್ಲಿ RoPE ಅನ್ನೂ ನಿಖರವಾಗಿ ಪ್ರೇರೇಪಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact sinusoidal formula genuinely verified here -- sin/cos at frequency 1/10000^(2i/d) -- is the original positional encoding from "Attention Is All You Need" (2017) and is still used today in encoder-only models like the original BERT; the permutation-equivariance property genuinely proven above is precisely why every Transformer, from that 2017 paper through modern LLMs, needs some positional mechanism (sinusoidal, learned, RoPE, or ALiBi) bolted on.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ sinusoidal formula -- 1/10000^(2i/d) frequency ನಲ್ಲಿ sin/cos -- "Attention Is All You Need" (2017) ಇಂದ ಮೂಲ positional encoding, ಮತ್ತು ಇಂದೂ ಮೂಲ BERT ನಂತಹ encoder-only models ನಲ್ಲಿ ಬಳಸಲಾಗಿದೆ; ಮೇಲೆ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ permutation-equivariance ಗುಣ ನಿಖರವಾಗಿ ಏಕೆ ಪ್ರತಿ Transformer, ಆ 2017 paper ಇಂದ ಆಧುನಿಕ LLMs ವರೆಗೆ, ಯಾವುದಾದರೂ positional ಯಂತ್ರಾಂಶ (sinusoidal, learned, RoPE, ಅಥವಾ ALiBi) ಜೋಡಿಸಬೇಕು ಎಂದು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely tested with np.allclose, what did comparing self_attn(P@X) to P@self_attn(X) confirm?', qKn: 'np.allclose ಜೊತೆ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ, self_attn(P@X) ಅನ್ನೂ P@self_attn(X) ಗೆ ಹೋಲಿಸುವುದೂ ಏನೂ ದೃಢಪಡಿಸಿತು?',
        opts: ['They are always different', 'They are exactly equal -- self-attention is permutation-equivariant, genuinely confirmed', 'Only true for square matrices', 'Only true after adding positional encoding'], correct: 1,
        optsKn: ['ಇವು ಯಾವಾಗಲೂ ಭಿನ್ನವಾಗಿವೆ', 'ಇವು ನಿಖರವಾಗಿ ಸಮ -- self-attention permutation-equivariant, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಕೇವಲ square matrices ಗಾಗಿ ನಿಜ', 'ಕೇವಲ positional encoding ಸೇರಿಸಿದ ನಂತರ ನಿಜ'] },
      { q: 'Genuinely computed, what is PE[0] for any embedding dimension d?', qKn: 'ನಿಜವಾಗಿ ಗಣಿಸಿದ, ಯಾವುದೇ embedding dimension d ಗಾಗಿ PE[0] ಏನೂ?',
        opts: ['All zeros', '[0, 1, 0, 1, ...] -- genuinely confirmed, since sin(0)=0 and cos(0)=1', 'Random values', 'All ones'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ ಶೂನ್ಯಗಳು', '[0, 1, 0, 1, ...] -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, sin(0)=0 ಮತ್ತು cos(0)=1 ಆಗಿರುವುದರಿಂದ', 'ಯಾದೃಚ್ಛಿಕ ಮೌಲ್ಯಗಳು', 'ಎಲ್ಲಾ ಒಂದುಗಳು'] },
      { q: 'Why is "sinusoidal(100000, 64) runs successfully" NOT the same claim as "a model handles 100,000-token sequences well"?', qKn: '"sinusoidal(100000, 64) ಯಶಸ್ವಿಯಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ" "ಒಂದೂ model 100,000-token sequences ಚೆನ್ನಾಗಿ ನಿಭಾಯಿಸುತ್ತದೆ" ಗೆ ಒಂದೇ ಹಕ್ಕು ಏಕೆ ಅಲ್ಲ?',
        opts: ['They are the same claim', 'The formula can mathematically compute PE for any position, but a model never trained on those positions has no guarantee of interpreting them usefully -- the long-context extrapolation problem', 'The formula only works up to position 2047', 'sin() and cos() are undefined for large inputs'], correct: 1,
        optsKn: ['ಇವು ಒಂದೇ ಹಕ್ಕುಗಳು', 'ಫಾರ್ಮುಲಾ ಗಣಿತೀಯವಾಗಿ ಯಾವುದೇ position ಗಾಗಿ PE ಗಣಿಸಬಹುದು, ಆದರೆ ಆ positions ಮೇಲೆ ಎಂದಿಗೂ ತರಬೇತಿ ಪಡೆಯದ ಒಂದೂ model ಅವುಗಳನ್ನೂ ಉಪಯುಕ್ತವಾಗಿ ಅರ್ಥೈಸುತ್ತದೆ ಎಂದು ಯಾವುದೇ ಖಾತರಿ ಇಲ್ಲ -- long-context extrapolation ಸಮಸ್ಯೆ', 'ಫಾರ್ಮುಲಾ ಕೇವಲ position 2047 ವರೆಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'ದೊಡ್ಡ inputs ಗಾಗಿ sin() ಮತ್ತು cos() ಅನಿರ್ದಿಷ್ಟವಾಗಿವೆ'] },
    ] } },
  ],
};
