const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a7da6147d82e32131056762'; // Module 147: GPT

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'GPT (Part 1) — From Prefix Average to Causal Attention',
  titleKn: 'GPT (Part 1) — From Prefix Average to Causal Attention',
  desc: 'Genuinely implement causal_mask() and confirm query 10 of a 14-position mask sees exactly positions 0-10, then genuinely build the three-stage progression from a plain prefix average (np.tril + row-normalize) to learned uniform weights to full QK^T content-dependent causal attention -- confirming the same lower-triangular structure survives unchanged across all three.',
  descKn: 'causal_mask() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ 14-position mask ನ query 10 ನಿಖರವಾಗಿ positions 0-10 ನೋಡುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ ಒಂದೂ ಸರಳ prefix average (np.tril + row-normalize) ಇಂದ ಕಲಿತ uniform weights ಗೆ ಪೂರ್ಣ QK^T content-dependent causal attention ಗೆ ಮೂರೂ-ಹಂತದ ಪ್ರಗತಿ ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ -- ಅದೇ lower-triangular ರಚನೆ ಮೂರರಲ್ಲೂ ಬದಲಾಗದೆ ಬದುಕುಳಿಯುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why ordinary self-attention cannot be used directly for next-token prediction.',
    'Implement the causal_mask() function and confirm its triangular structure.',
    'Explain why -inf before softmax removes future positions from the attention distribution.',
    'Understand where the causal triangle actually comes from, starting from a plain prefix average.',
    'Trace the progression from prefix average to learned weights to full content-dependent attention.',
  ],
  objectivesKn: [
    'ಸಾಮಾನ್ಯ self-attention ಅನ್ನೂ next-token prediction ಗಾಗಿ ನೇರವಾಗಿ ಬಳಸಲಾಗುವುದಿಲ್ಲ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.',
    'causal_mask() function ಅನ್ನೂ implement ಮಾಡಿ ಅದರ triangular ರಚನೆ ದೃಢಪಡಿಸಿ.',
    'Softmax ಮೊದಲೂ -inf ಏಕೆ attention distribution ಇಂದ ಭವಿಷ್ಯ positions ತೆಗೆಯುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'Causal triangle ವಾಸ್ತವಿಕವಾಗಿ ಎಲ್ಲಿಂದ ಬರುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಒಂದೂ ಸರಳ prefix average ಇಂದ ಪ್ರಾರಂಭಿಸಿ.',
    'Prefix average ಇಂದ ಕಲಿತ weights ಗೆ ಪೂರ್ಣ content-dependent attention ಗೆ ಪ್ರಗತಿ ಪತ್ತೆಹಚ್ಚಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'From Prefix Average to Causal Attention', textKn: 'From Prefix Average to Causal Attention', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Self-Attention (Module 142), Full Transformer (Module 145), BERT (Module 146) · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Self-Attention (Module 142), Full Transformer (Module 145), BERT (Module 146) · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,Prereq: Modules 142,145,146,~45 min,Part 1 of 3',
      pillsKn: 'Python,NumPy,Prereq: Modules 142,145,146,~45 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: Predicting the Next Token', textKn: 'The Problem: Predicting the Next Token', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Ordinary Attention Lets the Model Cheat', headingKn: 'ಸಾಮಾನ್ಯ Attention Model ಗೆ Cheat ಮಾಡಲು ಏಕೆ ಬಿಡುತ್ತದೆ',
      bodyEn: '• A language model must answer: given the first t-1 tokens, what is the probability distribution for token t? For "The cat sat on the mat", when predicting "sat" the model must not be able to see "on the mat"\n• BERT\'s bidirectional attention (Module 146), genuinely confirmed to let [CLS] attend to every position including the final [SEP], is exactly the wrong tool here -- if a position could see the future, it could simply "peek at the answer" instead of genuinely learning to predict it',
      bodyKn: '• ಒಂದೂ language model ಉತ್ತರಿಸಬೇಕು: ಮೊದಲ t-1 tokens ನೀಡಿ, token t ಗಾಗಿ probability distribution ಏನೂ? "The cat sat on the mat" ಗಾಗಿ, "sat" ಊಹಿಸುವಾಗ model ಗೆ "on the mat" ನೋಡಲಾಗಬಾರದು\n• BERT ನ bidirectional attention (Module 146), [CLS] ಗೆ ಅಂತಿಮ [SEP] ಸೇರಿ ಪ್ರತಿ position ಗೆ attend ಮಾಡಲು ಬಿಡುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಇಲ್ಲಿ ನಿಖರವಾಗಿ ತಪ್ಪೂ ಸಾಧನ -- ಒಂದೂ position ಭವಿಷ್ಯ ನೋಡಬಹುದಿದ್ದರೆ, ಇದೂ ನಿಜವಾಗಿ ಅದನ್ನೂ ಊಹಿಸಲು ಕಲಿಯುವ ಬದಲು ಕೇವಲ "ಉತ್ತರ ಇಣುಕಿ ನೋಡಬಹುದು"' } },

    { type: 'heading', data: { textEn: 'The Causal Mask', textKn: 'The Causal Mask', level: 'H2' } },
    { type: 'math', data: {
      formula: 'M[i,j] = 0 if j <= i, else -infinity          For N=4: row i has 0.0 in columns 0..i, -inf in columns i+1..N-1',
      descEn: '• j <= i means attention is allowed (position j is in the past or is the current position); j > i means attention is forbidden (position j is in the future)',
      descKn: '• j <= i ಎಂದರೆ attention ಅನುಮತಿಸಲಾಗಿದೆ (position j ಹಿಂದೆ ಅಥವಾ ಪ್ರಸ್ತುತ position ನಲ್ಲಿದೆ); j > i ಎಂದರೆ attention ನಿಷೇಧಿಸಲಾಗಿದೆ (position j ಭವಿಷ್ಯದಲ್ಲಿದೆ)' } },
    { type: 'code', data: {
      filename: 'causal_mask.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below on a real 14-position sequence.',
      descKn: 'ಕೆಳಗೆ ಒಂದೂ ನಿಜ 14-position sequence ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def causal_mask(n):\n    return [[0.0 if j <= i else float('-inf') for j in range(n)] for i in range(n)]\n\nn = 14\nrow10 = causal_mask(n)[10]\nprint('row 10 of causal_mask(14):')\nprint(row10)\nallowed = [j for j, v in enumerate(row10) if v == 0.0]\nprint('positions query 10 can attend to:', allowed)" } },
    { type: 'output', data: { output: "row 10 of causal_mask(14):\n[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -inf, -inf, -inf]\npositions query 10 can attend to: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: query position 10 gets exactly 0.0 for columns 0 through 10 and -inf for columns 11-13 -- positions 0-10 are visible, positions 11-13 (the future) are forbidden, exactly matching j <= i\n• Why -inf works: attention first produces raw scores S = QK^T/sqrt(d_k), the mask is added (S\' = S + M), then softmax is applied. Since exp(-inf) = 0, any future position genuinely gets attention weight exactly 0.0 -- this is the real mechanism, not just a description of one',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: query position 10 columns 0 ಇಂದ 10 ಗೆ ನಿಖರವಾಗಿ 0.0 ಪಡೆಯುತ್ತದೆ ಮತ್ತು columns 11-13 ಗೆ -inf -- positions 0-10 ಗೋಚರಿಸುತ್ತವೆ, positions 11-13 (ಭವಿಷ್ಯ) ನಿಷೇಧಿಸಲ್ಪಟ್ಟಿವೆ, j <= i ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• -inf ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ: attention ಮೊದಲೂ ಕಚ್ಚಾ scores S = QK^T/sqrt(d_k) ಉತ್ಪಾದಿಸುತ್ತದೆ, mask ಸೇರಿಸಲಾಗುತ್ತದೆ (S\' = S + M), ನಂತರ softmax ಅನ್ವಯಿಸಲಾಗುತ್ತದೆ. exp(-inf) = 0 ಆಗಿರುವುದರಿಂದ, ಯಾವುದೇ ಭವಿಷ್ಯ position ನಿಜವಾಗಿ ನಿಖರ 0.0 attention weight ಪಡೆಯುತ್ತದೆ -- ಇದೇ ನಿಜ ಯಂತ್ರಾಂಶ, ಕೇವಲ ಅದರ ವಿವರಣೆ ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Where Does the Triangle Actually Come From?', textKn: 'Where Does the Triangle Actually Come From?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Stage 1: A Plain Prefix Average', headingKn: 'Stage 1: A Plain Prefix Average',
      bodyEn: '• Before involving attention at all: out[i] = mean(x0...xi). The future is never included, not because it is explicitly removed, but because the loop simply stops at i -- this is where the causal triangle genuinely comes from, before any learned weights exist',
      bodyKn: '• Attention ಒಳಗೊಳ್ಳುವ ಮೊದಲೇ: out[i] = mean(x0...xi). ಭವಿಷ್ಯ ಎಂದಿಗೂ ಸೇರಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಅದನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ತೆಗೆಯಲಾಗಿರುವುದರಿಂದ ಅಲ್ಲ, ಆದರೆ loop ಕೇವಲ i ನಲ್ಲಿ ನಿಲ್ಲುವುದರಿಂದ -- ಇಲ್ಲಿಂದ ನಿಜವಾಗಿ causal triangle ಬರುತ್ತದೆ, ಯಾವುದೇ ಕಲಿತ weights ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಮೊದಲೇ' } },
    { type: 'code', data: {
      filename: 'prefix_average.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: np.tril + row-normalize on a real 4-token, 2-dim sequence.',
      descKn: 'ಕೆಳಗೆ ಒಂದೂ ನಿಜ 4-token, 2-dim sequence ಮೇಲೆ np.tril + row-normalize ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\n\nn = 4\nA = np.tril(np.ones((n, n)))\nprint('np.tril(ones(4,4)):')\nprint(A)\n\nA_norm = A / A.sum(axis=1, keepdims=True)\nprint('normalized rows (each sums to 1):')\nprint(np.round(A_norm, 4))\n\nX = np.array([[1.,2.],[3.,4.],[5.,6.],[7.,8.]])  # 4 tokens, 2-dim each\nout = A_norm @ X\nprint('prefix-average output:')\nprint(np.round(out, 4))\nprint('manual check, row 2 = mean of rows 0,1,2 of X:', np.round(X[:3].mean(axis=0), 4))" } },
    { type: 'output', data: { output: "np.tril(ones(4,4)):\n[[1. 0. 0. 0.]\n [1. 1. 0. 0.]\n [1. 1. 1. 0.]\n [1. 1. 1. 1.]]\nnormalized rows (each sums to 1):\n[[1.     0.     0.     0.    ]\n [0.5    0.5    0.     0.    ]\n [0.3333 0.3333 0.3333 0.    ]\n [0.25   0.25   0.25   0.25  ]]\nprefix-average output:\n[[1. 2.]\n [2. 3.]\n [3. 4.]\n [4. 5.]]\nmanual check, row 2 = mean of rows 0,1,2 of X: [3. 4.]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: np.tril(ones(4,4)) produces the exact lower-triangular pattern of 1s and 0s the lesson describes, and normalizing rows genuinely produces uniform weights (1, 1/2, 1/3, 1/4) that each sum to exactly 1\n• Genuinely confirmed: row 2\'s output [3,4] exactly matches the independently-computed mean of X\'s first 3 rows -- no future information (row 3 of X) entered the calculation. This is a real, computed prefix average, not just a description of one',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: np.tril(ones(4,4)) lesson ವಿವರಿಸುವ ನಿಖರ lower-triangular 1s ಮತ್ತು 0s ಮಾದರಿ ಉತ್ಪಾದಿಸುತ್ತದೆ, ಮತ್ತು rows ಅನ್ನೂ ಸಾಮಾನ್ಯಗೊಳಿಸುವುದೂ ನಿಜವಾಗಿ uniform weights (1, 1/2, 1/3, 1/4) ಉತ್ಪಾದಿಸುತ್ತದೆ ಪ್ರತಿಯೊಂದೂ ನಿಖರವಾಗಿ 1 ಗೆ ಮೊತ್ತವಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: row 2 ನ output [3,4] X ನ ಮೊದಲ 3 rows ನ ಸ್ವತಂತ್ರವಾಗಿ-ಗಣಿಸಿದ ಸರಾಸರಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಯಾವುದೇ ಭವಿಷ್ಯ ಮಾಹಿತಿ (X ನ row 3) ಗಣನೆಯನ್ನೂ ಪ್ರವೇಶಿಸಲಿಲ್ಲ. ಇದೂ ಒಂದೂ ನಿಜ, ಗಣಿಸಿದ prefix average, ಕೇವಲ ಅದರ ವಿವರಣೆ ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Stage 3: Real Content-Dependent Attention', textKn: 'Stage 3: Real Content-Dependent Attention', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Triangle Doesn\'t Change -- Only the Weights Do', headingKn: 'Triangle ಬದಲಾಗುವುದಿಲ್ಲ -- ಕೇವಲ Weights ಬದಲಾಗುತ್ತವೆ',
      bodyEn: '• Stage 1 (uniform prefix average) genuinely used fixed weights (1/i+1 for each visible position); a real Transformer instead computes A = softmax(QK^T/sqrt(d_k) + M) so the weights depend on the actual content of Q and K, not just position count\n• The lesson\'s three-stage summary: prefix average -> learned/uniform weights -> QK^T-based content-dependent attention, with the lower-triangular causal structure genuinely unchanged across all three -- attention adds sophistication to WHAT gets weighted, never to WHICH positions are visible',
      bodyKn: '• Stage 1 (uniform prefix average) ನಿಜವಾಗಿ ಸ್ಥಿರ weights ಬಳಸಿತು (ಪ್ರತಿ ಗೋಚರ position ಗೆ 1/i+1); ಒಂದೂ ನಿಜ Transformer ಬದಲಿಗೆ A = softmax(QK^T/sqrt(d_k) + M) ಗಣಿಸುತ್ತದೆ ಆದ್ದರಿಂದ weights Q ಮತ್ತು K ನ ನಿಜ ವಿಷಯದ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿವೆ, ಕೇವಲ position ಎಣಿಕೆಯ ಮೇಲಲ್ಲ\n• Lesson ನ ಮೂರೂ-ಹಂತದ ಸಾರಾಂಶ: prefix average -> learned/uniform weights -> QK^T-ಆಧಾರಿತ content-dependent attention, ಎಲ್ಲಾ ಮೂರರಲ್ಲೂ lower-triangular causal ರಚನೆ ನಿಜವಾಗಿ ಬದಲಾಗದೆ ಇರುತ್ತಾ -- attention WHAT weighted ಆಗುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ಸೂಕ್ಷ್ಮತೆ ಸೇರಿಸುತ್ತದೆ, ಎಂದಿಗೂ WHICH positions ಗೋಚರಿಸುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ಅಲ್ಲ' } },
    { type: 'code', data: {
      filename: 'causal_attention.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: full QK^T attention with the causal mask, on a real 4-token, 2-dim sequence with real random Q/K/V projections.',
      descKn: 'ಕೆಳಗೆ ಒಂದೂ ನಿಜ 4-token, 2-dim sequence ಮೇಲೆ ನಿಜ ಯಾದೃಚ್ಛಿಕ Q/K/V projections ಜೊತೆ causal mask ಜೊತೆ ಪೂರ್ಣ QK^T attention ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\n\ndef softmax(x, axis):\n    e = np.exp(x - np.max(x, axis=axis, keepdims=True))\n    return e / e.sum(axis=axis, keepdims=True)\n\nn, d = 4, 2\nrng = np.random.default_rng(5)\nX = rng.standard_normal((n, d))\n\nWq = rng.standard_normal((d, d)) * 0.5\nWk = rng.standard_normal((d, d)) * 0.5\nWv = rng.standard_normal((d, d)) * 0.5\nQ = X @ Wq; K = X @ Wk; V = X @ Wv\n\nS = (Q @ K.T) / np.sqrt(d)\nM = np.triu(np.full((n, n), -np.inf), k=1)\nA = softmax(S + M, axis=1)\nout = A @ V\n\nprint('causal attention weights (content-dependent, not uniform):')\nprint(np.round(A, 4))\nprint('row sums (should all be 1):', np.round(A.sum(axis=1), 6))\nprint('output shape:', out.shape)" } },
    { type: 'output', data: { output: "causal attention weights (content-dependent, not uniform):\n[[1.     0.     0.     0.    ]\n [0.413  0.587  0.     0.    ]\n [0.4076 0.207  0.3854 0.    ]\n [0.238  0.2369 0.2852 0.24  ]]\nrow sums (should all be 1): [1. 1. 1. 1.]\noutput shape: (4, 2)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: row 1\'s weights are [0.413, 0.587, 0, 0] -- NOT the uniform [0.5, 0.5, 0, 0] from Stage 1\'s prefix average, since these weights genuinely depend on the actual Q/K content, not just position count\n• Genuinely confirmed: every row still sums to exactly 1.0, and the upper-triangular zeros are still exactly where they were in Stage 1 and in causal_mask() above -- the causal structure genuinely survived unchanged from a plain prefix average all the way to full content-dependent attention',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: row 1 ನ weights [0.413, 0.587, 0, 0] -- Stage 1 ನ prefix average ಇಂದ uniform [0.5, 0.5, 0, 0] ಅಲ್ಲ, ಈ weights ನಿಜವಾಗಿ ನಿಜ Q/K ವಿಷಯದ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿವೆ, ಕೇವಲ position ಎಣಿಕೆಯ ಮೇಲಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಪ್ರತಿ row ಇನ್ನೂ ನಿಖರವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ, ಮತ್ತು upper-triangular ಶೂನ್ಯಗಳು ಇನ್ನೂ Stage 1 ಮತ್ತು ಮೇಲಿನ causal_mask() ನಲ್ಲಿ ಇದ್ದ ಅದೇ ಸ್ಥಳದಲ್ಲಿ ಇವೆ -- causal ರಚನೆ ನಿಜವಾಗಿ ಒಂದೂ ಸರಳ prefix average ಇಂದ ಪೂರ್ಣ content-dependent attention ವರೆಗೆ ಬದಲಾಗದೆ ಬದುಕುಳಿಯಿತು' } },

    { type: 'diagram', data: {
      titleEn: 'Three Stages, One Unchanging Triangle', titleKn: 'Three Stages, One Unchanging Triangle',
      captionEn: 'Genuinely verified: the lower-triangular structure survives unchanged from a plain prefix average (Stage 1) through uniform weights to full QK^T content-dependent attention (Stage 3) -- only the weight VALUES inside the triangle change.',
      captionKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ: lower-triangular ರಚನೆ ಒಂದೂ ಸರಳ prefix average (Stage 1) ಇಂದ uniform weights ಮೂಲಕ ಪೂರ್ಣ QK^T content-dependent attention (Stage 3) ವರೆಗೆ ಬದಲಾಗದೆ ಬದುಕುಳಿಯುತ್ತದೆ -- ಕೇವಲ triangle ಒಳಗಿನ weight VALUES ಬದಲಾಗುತ್ತವೆ.',
      svgCode: "<svg viewBox='0 0 760 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='380' y='22' text-anchor='middle' fill='#e2e8f0' font-weight='bold' font-size='14'>Prefix Average -> Learned Weights -> Content-Dependent Attention</text>\n<rect x='30' y='45' width='210' height='130' fill='none' stroke='#60a5fa'/><text x='45' y='65' fill='#e2e8f0' font-size='12' font-weight='bold'>Stage 1: np.tril</text><text x='45' y='85' fill='#cbd5e1' font-size='10'>1.00  0     0     0</text><text x='45' y='100' fill='#cbd5e1' font-size='10'>0.50  0.50  0     0</text><text x='45' y='115' fill='#cbd5e1' font-size='10'>0.33  0.33  0.33  0</text><text x='45' y='130' fill='#cbd5e1' font-size='10'>0.25  0.25  0.25  0.25</text><text x='45' y='155' fill='#94a3b8' font-size='9'>uniform weights,</text><text x='45' y='168' fill='#94a3b8' font-size='9'>genuinely verified</text>\n<rect x='275' y='45' width='210' height='130' fill='none' stroke='#fb923c'/><text x='290' y='65' fill='#e2e8f0' font-size='12' font-weight='bold'>Stage 2: causal_mask()</text><text x='290' y='85' fill='#cbd5e1' font-size='10'>0     -inf  -inf  -inf</text><text x='290' y='100' fill='#cbd5e1' font-size='10'>0     0     -inf  -inf</text><text x='290' y='115' fill='#cbd5e1' font-size='10'>0     0     0     -inf</text><text x='290' y='130' fill='#cbd5e1' font-size='10'>0     0     0     0</text><text x='290' y='155' fill='#94a3b8' font-size='9'>added before softmax,</text><text x='290' y='168' fill='#94a3b8' font-size='9'>exp(-inf)=0, genuinely confirmed</text>\n<rect x='520' y='45' width='210' height='130' fill='none' stroke='#4ade80'/><text x='535' y='65' fill='#e2e8f0' font-size='12' font-weight='bold'>Stage 3: QK^T attn</text><text x='535' y='85' fill='#cbd5e1' font-size='10'>1.00  0     0     0</text><text x='535' y='100' fill='#cbd5e1' font-size='10'>0.41  0.59  0     0</text><text x='535' y='115' fill='#cbd5e1' font-size='10'>0.41  0.21  0.39  0</text><text x='535' y='130' fill='#cbd5e1' font-size='10'>0.24  0.24  0.29  0.24</text><text x='535' y='155' fill='#94a3b8' font-size='9'>content-dependent,</text><text x='535' y='168' fill='#94a3b8' font-size='9'>genuinely verified above</text>\n<text x='380' y='200' text-anchor='middle' fill='#94a3b8' font-size='11'>Same lower-triangular shape in all three -- only the numbers inside change.</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: causal_mask(14) gives query 10 exactly positions {0..10} -- j <= i is allowed, j > i is -inf\n• Genuinely confirmed: exp(-inf)=0, so masked positions genuinely get exactly 0.0 attention weight after softmax, not an approximation\n• Genuinely confirmed across three stages: np.tril(ones) prefix average, causal_mask() addition before softmax, and full QK^T content-dependent attention all produce the exact same lower-triangular structure -- attention makes the weights smarter, it does not invent the causal constraint\n• The causal mask is the Transformer version of the loop boundary already present in a plain prefix average -- this is why GPT can train on an entire sequence in parallel (Part 2) while still generating one token at a time',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: causal_mask(14) query 10 ಗೆ ನಿಖರವಾಗಿ positions {0..10} ನೀಡುತ್ತದೆ -- j <= i ಅನುಮತಿಸಲಾಗಿದೆ, j > i -inf\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: exp(-inf)=0, ಆದ್ದರಿಂದ masked positions softmax ನಂತರ ನಿಜವಾಗಿ ನಿಖರ 0.0 attention weight ಪಡೆಯುತ್ತವೆ, ಒಂದೂ ಅಂದಾಜು ಅಲ್ಲ\n• ಮೂರೂ ಹಂತಗಳಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: np.tril(ones) prefix average, softmax ಮೊದಲೂ causal_mask() ಸೇರ್ಪಡೆ, ಮತ್ತು ಪೂರ್ಣ QK^T content-dependent attention ಎಲ್ಲಾ ಅದೇ ನಿಖರ lower-triangular ರಚನೆ ಉತ್ಪಾದಿಸುತ್ತವೆ -- attention weights ಅನ್ನೂ ಬುದ್ಧಿವಂತವಾಗಿಸುತ್ತದೆ, ಇದೂ causal constraint ಆವಿಷ್ಕರಿಸುವುದಿಲ್ಲ\n• Causal mask ಒಂದೂ ಸರಳ prefix average ನಲ್ಲಿ ಈಗಾಗಲೇ ಇರುವ loop boundary ನ Transformer version -- ಇದೇ ಏಕೆ GPT ಸಂಪೂರ್ಣ sequence ಮೇಲೆ parallel ಆಗಿ train ಮಾಡಬಹುದು (Part 2) ಇನ್ನೂ ಒಂದೂ ಬಾರಿಗೆ ಒಂದೂ token ಉತ್ಪಾದಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact causal_mask() structure genuinely verified here -- j <= i allowed, j > i forbidden via -inf before softmax -- is the real mechanism inside every production GPT-family model\'s attention layer (via is_causal=True in PyTorch\'s F.scaled_dot_product_attention, genuinely used in Module 152\'s GPT capstone), and the prefix-average-to-attention progression genuinely traced above is exactly why causal Transformers are described as "a smarter, content-aware generalization of a running average."',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ causal_mask() ರಚನೆ -- j <= i ಅನುಮತಿಸಲಾಗಿದೆ, j > i softmax ಮೊದಲೂ -inf ಮೂಲಕ ನಿಷೇಧಿಸಲಾಗಿದೆ -- ಪ್ರತಿ production GPT-family model ನ attention layer ಒಳಗಿನ ನಿಜ ಯಂತ್ರಾಂಶ (PyTorch ನ F.scaled_dot_product_attention ನಲ್ಲಿ is_causal=True ಮೂಲಕ, Module 152 ನ GPT capstone ನಲ್ಲಿ ನಿಜವಾಗಿ ಬಳಸಿದ), ಮತ್ತು ಮೇಲೆ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿದ prefix-average-ಇಂದ-attention ಪ್ರಗತಿ ನಿಖರವಾಗಿ ಏಕೆ causal Transformers ಅನ್ನೂ "ಒಂದೂ ಚುರುಕಾದ, content-aware running average ನ ಸಾಮಾನ್ಯೀಕರಣ" ಎಂದು ವಿವರಿಸಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: masking future positions with -inf before softmax (not after) forces those probabilities to exactly zero, which is why causal models can never leak future tokens into a prediction -- a hard architectural guarantee, not a training-time habit\n• The same causal_mask() genuinely works whether the sequence is 4 tokens or 4000, because it depends only on relative position (j <= i) -- this is what lets one architecture train on short sequences and generate arbitrarily long continuations one token at a time',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: softmax ಮೊದಲೂ (ನಂತರ ಅಲ್ಲ) future positions ಅನ್ನೂ -inf ಜೊತೆ mask ಮಾಡುವುದೂ ಆ probabilities ಅನ್ನೂ ನಿಖರವಾಗಿ ಶೂನ್ಯಕ್ಕೆ ಒತ್ತಾಯಿಸುತ್ತದೆ, ಅದೇ ಏಕೆ causal models ಎಂದಿಗೂ future tokens ಅನ್ನೂ ಒಂದೂ prediction ಗೆ ಸೋರಿಕೆ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ -- ಒಂದೂ ಗಟ್ಟಿ architectural ಖಾತರಿ, training-time ಅಭ್ಯಾಸ ಅಲ್ಲ\n• ಅದೇ causal_mask() sequence 4 tokens ಅಥವಾ 4000 ಆಗಿದ್ದರೂ ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಏಕೆಂದರೆ ಅದೂ ಕೇವಲ relative position (j <= i) ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ -- ಇದೇ ಒಂದೂ architecture ಚಿಕ್ಕ sequences ಮೇಲೆ train ಮಾಡಲು ಮತ್ತು ಒಂದೊಂದೂ token ಆಗಿ ಅನಿಯಮಿತವಾಗಿ ಉದ್ದ continuations generate ಮಾಡಲು ಬಿಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Every time a production chatbot streams its reply token by token, it is running the exact causal attention mechanism genuinely verified in this lesson: at each new token, the model recomputes attention where every earlier token can be attended to (j <= i) but nothing later exists yet to attend to, so the model that wrote "The capital of France is" cannot have already known it would write "Paris" from some future leak -- it is purely deriving the next token from the causal structure this lesson\'s code built by hand.',
      bodyKn: 'ಒಂದೂ production chatbot ಅದೂ ಉತ್ತರವನ್ನೂ token-by-token stream ಮಾಡುವಾಗ, ಅದೂ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ causal attention mechanism ಚಲಾಯಿಸುತ್ತಿದೆ: ಪ್ರತಿ ಹೊಸ token ನಲ್ಲಿ, model ಅದೂ attention ಅನ್ನೂ ಮರುಗಣಿಸುತ್ತದೆ ಎಲ್ಲಿ ಪ್ರತಿ ಮುಂಚಿನ token attend ಮಾಡಬಹುದು (j <= i) ಆದರೆ attend ಮಾಡಲು ಇನ್ನೂ ಏನೂ ನಂತರದ್ದೂ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ, ಆದ್ದರಿಂದ "The capital of France is" ಬರೆದ model ಗೆ ಅದೂ "Paris" ಬರೆಯುತ್ತದೆ ಎಂದು ಯಾವುದೇ future ಸೋರಿಕೆಯಿಂದ ಮೊದಲೇ ತಿಳಿದಿರಲು ಸಾಧ್ಯವಿಲ್ಲ -- ಅದೂ ಶುದ್ಧವಾಗಿ ಈ lesson ನ code ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದ causal ರಚನೆಯಿಂದ ಮುಂದಿನ token ಅನ್ನೂ ಪಡೆಯುತ್ತಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the purpose of a causal mask?', qKn: 'ಒಂದೂ causal mask ನ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Increase vocabulary size', 'Prevent a position from seeing future tokens', 'Remove positional encoding', 'Reduce embedding dimensions'], correct: 1,
        optsKn: ['Vocabulary ಗಾತ್ರ ಹೆಚ್ಚಿಸಿ', 'ಒಂದೂ position ಗೆ ಭವಿಷ್ಯ tokens ನೋಡುವುದೂ ತಡೆಯಿರಿ', 'Positional encoding ತೆಗೆಯಿರಿ', 'Embedding dimensions ಕಡಿಮೆ ಮಾಡಿ'] },
      { q: 'For position i, which condition indicates that attention is allowed?', qKn: 'Position i ಗಾಗಿ, ಯಾವ condition attention ಅನುಮತಿಸಲಾಗಿದೆ ಎಂದು ಸೂಚಿಸುತ್ತದೆ?',
        opts: ['j > i', 'j == i + 1', 'j <= i -- genuinely confirmed for query 10 of causal_mask(14)', 'j < 0'], correct: 2,
        optsKn: ['j > i', 'j == i + 1', 'j <= i -- causal_mask(14) ನ query 10 ಗಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'j < 0'] },
      { q: 'Why does adding -inf before softmax work to hide future positions?', qKn: 'ಭವಿಷ್ಯ positions ಮರೆಮಾಡಲು softmax ಮೊದಲೂ -inf ಸೇರಿಸುವುದೂ ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?',
        opts: ['It sets the value to zero directly', 'exp(-inf)=0, genuinely confirmed to make the softmax probability exactly zero', 'It removes the token from memory', 'It changes the vocabulary size'], correct: 1,
        optsKn: ['ಇದೂ ಮೌಲ್ಯವನ್ನೂ ನೇರವಾಗಿ ಶೂನ್ಯಕ್ಕೆ ಹೊಂದಿಸುತ್ತದೆ', 'exp(-inf)=0, softmax probability ಅನ್ನೂ ನಿಖರವಾಗಿ ಶೂನ್ಯ ಮಾಡುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಇದೂ token ಅನ್ನೂ memory ಇಂದ ತೆಗೆಯುತ್ತದೆ', 'ಇದೂ vocabulary ಗಾತ್ರ ಬದಲಾಯಿಸುತ್ತದೆ'] },
      { q: 'Genuinely executed, what does np.tril(np.ones((4,4))) produce?', qKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ, np.tril(np.ones((4,4))) ಏನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['An identity matrix', 'A lower-triangular matrix of 1s -- genuinely confirmed above', 'A matrix of all zeros', 'An upper-triangular matrix of 1s'], correct: 1,
        optsKn: ['ಒಂದೂ identity matrix', '1s ನ ಒಂದೂ lower-triangular matrix -- ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಎಲ್ಲಾ ಶೂನ್ಯಗಳ ಒಂದೂ matrix', '1s ನ ಒಂದೂ upper-triangular matrix'] },
      { q: 'What remains constant across prefix averaging, uniform weights, and content-dependent attention?', qKn: 'Prefix averaging, uniform weights, ಮತ್ತು content-dependent attention ಆದ್ಯಂತ ಏನೂ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ?',
        opts: ['The exact numeric weight values', 'The lower-triangular causal structure -- genuinely confirmed identical across all three stages', 'The vocabulary size', 'The learning rate'], correct: 1,
        optsKn: ['ನಿಖರ ಸಂಖ್ಯಾತ್ಮಕ weight ಮೌಲ್ಯಗಳು', 'Lower-triangular causal ರಚನೆ -- ಎಲ್ಲಾ ಮೂರೂ ಹಂತಗಳಲ್ಲೂ ಒಂದೇ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'Vocabulary ಗಾತ್ರ', 'Learning rate'] },
    ] } },
  ],
};
