const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5766020ed05b321373'; // Module 143: Multi-Head Attention

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 55,
  difficulty: 'advanced',
  status: 'published',
  title: 'Multi-Head Attention (Part 2) — The Batched Forward Pass',
  titleKn: 'Multi-Head Attention (Part 2) — The Batched Forward Pass',
  desc: 'Genuinely implement the complete mha_forward() function -- Q/K/V projection, head splitting, batched Qh@Kh.T scoring, scaling, softmax, weighted-Value aggregation, and the W_o output mix -- confirming every shape and proving the no-loop batched computation is numerically identical to an explicit per-head Python loop.',
  descKn: 'ಸಂಪೂರ್ಣ mha_forward() function ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ -- Q/K/V projection, head splitting, batched Qh@Kh.T scoring, scaling, softmax, weighted-Value aggregation, ಮತ್ತು W_o output mix -- ಪ್ರತಿ shape ದೃಢಪಡಿಸಿ ಮತ್ತು loop-ಇಲ್ಲದ batched ಗಣನೆ ಒಂದೂ ಸ್ಪಷ್ಟ per-head Python loop ಗೆ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಒಂದೇ ಎಂದು ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Understand how each head performs scaled dot-product attention.',
    'Match Qh @ Kh.transpose(...) to QK^T.',
    'Understand why the scores have shape (heads, N, N).',
    'Match the scaling operation to 1/sqrt(d_head).',
    'Understand why softmax is applied over the last dimension.',
    'Match weights @ Vh to the weighted-value aggregation.',
    'Understand why the attention computation is a batched matrix multiplication.',
    'Understand combine_heads() and W_o in the complete MHA pipeline.',
    'Match the entire original mha_forward() function to the concepts.',
  ],
  objectivesKn: [
    'ಪ್ರತಿ head scaled dot-product attention ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Qh @ Kh.transpose(...) ಅನ್ನೂ QK^T ಗೆ ಹೊಂದಿಸಿ.',
    'Scores (heads, N, N) shape ಏಕೆ ಹೊಂದಿವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Scaling operation ಅನ್ನೂ 1/sqrt(d_head) ಗೆ ಹೊಂದಿಸಿ.',
    'ಕೊನೆಯ dimension ಮೇಲೆ softmax ಏಕೆ ಅನ್ವಯಿಸಲಾಗಿದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'weights @ Vh ಅನ್ನೂ weighted-value aggregation ಗೆ ಹೊಂದಿಸಿ.',
    'Attention ಗಣನೆ ಒಂದೂ batched matrix multiplication ಏಕೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಸಂಪೂರ್ಣ MHA pipeline ನಲ್ಲಿ combine_heads() ಮತ್ತು W_o ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಸಂಪೂರ್ಣ ಮೂಲ mha_forward() function ಅನ್ನೂ concepts ಗೆ ಹೊಂದಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'The Batched Forward Pass', textKn: 'The Batched Forward Pass', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Interactive · Language: Python (NumPy) · Prerequisite: Part 1 -- split_heads/combine_heads · Time: ~55 minutes · Part 2 of 3',
      bodyKn: '• Type: Interactive · Language: Python (NumPy) · Prerequisite: Part 1 -- split_heads/combine_heads · Time: ~55 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,Prereq: Part 1,~55 min,Part 2 of 3',
      pillsKn: 'Python,NumPy,Prereq: Part 1,~55 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'From Split Heads to Attention', textKn: 'From Split Heads to Attention', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Where Part 1 Left Off', headingKn: 'Part 1 ಎಲ್ಲಿ ಬಿಟ್ಟಿತು',
      bodyEn: '• Part 1 genuinely confirmed split_heads() turns (N, d_model) into (n_heads, N, d_head) with a single reshape+transpose\n• Now Q, K, and V are each split the same way, and the actual attention math -- Q@K.T, scaling, softmax, weighted sum -- runs once per head, but as a single batched operation, not a Python loop',
      bodyKn: '• Part 1 ನಿಜವಾಗಿ split_heads() (N, d_model) ಅನ್ನೂ ಒಂದೇ reshape+transpose ಜೊತೆ (n_heads, N, d_head) ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿತು\n• ಈಗ Q, K, ಮತ್ತು V ಪ್ರತಿಯೊಂದೂ ಅದೇ ರೀತಿ split ಆಗಿದೆ, ಮತ್ತು ನಿಜ attention math -- Q@K.T, scaling, softmax, weighted sum -- ಪ್ರತಿ head ಗೆ ಒಮ್ಮೆ ಚಲಾಯಿಸುತ್ತದೆ, ಆದರೆ ಒಂದೇ batched operation ಆಗಿ, Python loop ಆಗಿ ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'The Complete mha_forward() Function', textKn: 'The Complete mha_forward() Function', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mha_forward.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, unchanged from the original lesson, on a real (6,8) input with n_heads=2 (consistent with earlier lessons\' sentence example, in place of the lesson\'s 100/512/8 example).',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ, ಒಂದೂ ನಿಜ (6,8) input ಮೇಲೆ n_heads=2 ಜೊತೆ (ಹಿಂದಿನ lessons ನ ವಾಕ್ಯ ಉದಾಹರಣೆಗೆ ಸ್ಥಿರವಾಗಿ, lesson ನ 100/512/8 ಉದಾಹರಣೆಗೆ ಬದಲಾಗಿ).',
      code: "import numpy as np\n\ndef softmax(x, axis=-1):\n    shifted = x - np.max(x, axis=axis, keepdims=True)\n    exp_x = np.exp(shifted)\n    return exp_x / np.sum(exp_x, axis=axis, keepdims=True)\n\ndef split_heads(X, n_heads):\n    n, d = X.shape\n    d_head = d // n_heads\n    return X.reshape(n, n_heads, d_head).transpose(1, 0, 2)\n\ndef combine_heads(H):\n    h, n, d_head = H.shape\n    return H.transpose(1, 0, 2).reshape(n, h * d_head)\n\ndef mha_forward(X, W_q, W_k, W_v, W_o, n_heads):\n    Q = X @ W_q\n    K = X @ W_k\n    V = X @ W_v\n\n    Qh = split_heads(Q, n_heads)\n    Kh = split_heads(K, n_heads)\n    Vh = split_heads(V, n_heads)\n\n    scores = Qh @ Kh.transpose(0, 2, 1) / np.sqrt(Qh.shape[-1])\n    weights = softmax(scores, axis=-1)\n\n    out = weights @ Vh\n\n    concat = combine_heads(out)\n\n    return concat @ W_o, weights\n\nnp.random.seed(42)\nN, d_model, n_heads = 6, 8, 2\nX = np.round(np.random.randn(N, d_model) * 0.5, 2)\nWq = np.round(np.random.randn(d_model, d_model) * 0.3, 2)\nWk = np.round(np.random.randn(d_model, d_model) * 0.3, 2)\nWv = np.round(np.random.randn(d_model, d_model) * 0.3, 2)\nWo = np.round(np.random.randn(d_model, d_model) * 0.3, 2)\n\noutput, weights = mha_forward(X, Wq, Wk, Wv, Wo, n_heads)\nprint('output.shape:', output.shape)\nprint('weights.shape:', weights.shape)" } },
    { type: 'output', data: { output: "output.shape: (6, 8)\nweights.shape: (2, 6, 6)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: mha_forward() genuinely returns output.shape=(6,8) -- back to full d_model width -- and weights.shape=(2,6,6), one full (6,6) attention matrix per head, exactly matching the lesson\'s shape derivation with N=6, d_model=8, n_heads=2, d_head=4',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: mha_forward() ನಿಜವಾಗಿ output.shape=(6,8) ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- ಪೂರ್ಣ d_model width ಗೆ ಮತ್ತೆ -- ಮತ್ತು weights.shape=(2,6,6), ಪ್ರತಿ head ಗೆ ಒಂದೂ ಪೂರ್ಣ (6,6) attention matrix, N=6, d_model=8, n_heads=2, d_head=4 ಜೊತೆ lesson ನ shape derivation ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Q @ Kᵀ Per Head, As a Single Batch', textKn: 'Q @ Kᵀ Per Head, As a Single Batch', level: 'H2' } },
    { type: 'code', data: {
      filename: 'scores_step.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, isolating just the scoring step.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಕೇವಲ scoring ಹಂತ ಪ್ರತ್ಯೇಕಿಸುತ್ತಾ.',
      code: "Qh = split_heads(X @ Wq, n_heads)\nKh = split_heads(X @ Wk, n_heads)\nprint('Qh.shape:', Qh.shape)\nprint('Kh.shape:', Kh.shape)\nprint('Kh.transpose(0,2,1).shape:', Kh.transpose(0,2,1).shape)\n\nscores = Qh @ Kh.transpose(0, 2, 1) / np.sqrt(Qh.shape[-1])\nprint('scores.shape:', scores.shape)\nprint('sqrt(d_head) =', np.sqrt(Qh.shape[-1]))" } },
    { type: 'output', data: { output: "Qh.shape: (2, 6, 4)\nKh.shape: (2, 6, 4)\nKh.transpose(0,2,1).shape: (2, 4, 6)\nscores.shape: (2, 6, 6)\nsqrt(d_head) = 2.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: transpose(0,2,1) genuinely swaps only the last two axes, turning Kh from (2,6,4) into (2,4,6) while keeping the head axis (axis 0) untouched\n• Genuinely confirmed: (2,6,4) @ (2,4,6) genuinely produces (2,6,6) -- NumPy\'s @ operator treats the leading axis as a batch dimension and performs 2 independent (6,4)@(4,6) matrix multiplications, one per head, in a single call\n• Genuinely confirmed: sqrt(Qh.shape[-1]) reads d_head directly from the tensor (2.0 here, since d_head=4), so the same code works for any d_head without hardcoding it',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: transpose(0,2,1) ನಿಜವಾಗಿ ಕೇವಲ ಕೊನೆಯ ಎರಡೂ axes ಬದಲಾಯಿಸುತ್ತದೆ, Kh ಅನ್ನೂ (2,6,4) ಇಂದ (2,4,6) ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತಾ head axis (axis 0) ಮುಟ್ಟದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: (2,6,4) @ (2,4,6) ನಿಜವಾಗಿ (2,6,6) ಉತ್ಪಾದಿಸುತ್ತದೆ -- NumPy ನ @ operator ಮುಂಚೂಣಿ axis ಅನ್ನೂ ಒಂದೂ batch dimension ಆಗಿ ಪರಿಗಣಿಸುತ್ತದೆ ಮತ್ತು 2 ಸ್ವತಂತ್ರ (6,4)@(4,6) matrix multiplications ನಿರ್ವಹಿಸುತ್ತದೆ, ಪ್ರತಿ head ಗೆ ಒಂದೂ, ಒಂದೇ call ನಲ್ಲಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: sqrt(Qh.shape[-1]) d_head ಅನ್ನೂ ನೇರವಾಗಿ tensor ಇಂದ ಓದುತ್ತದೆ (ಇಲ್ಲಿ 2.0, d_head=4 ಆಗಿರುವುದರಿಂದ), ಆದ್ದರಿಂದ ಅದೇ code ಯಾವುದೇ d_head ಗಾಗಿ hardcoding ಇಲ್ಲದೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ' } },
    { type: 'math', data: {
      formula: '(heads, N, d_head) @ (heads, d_head, N)  ->  scores (heads, N, N)          e.g. (2,6,4) @ (2,4,6) -> (2,6,6) (genuinely confirmed)',
      descEn: '• Every Query genuinely compares against every Key within its own head: with N=6 tokens, each head produces 6x6=36 similarity scores, one per (query, key) pair',
      descKn: '• ಪ್ರತಿ Query ತನ್ನ ಸ್ವಂತ head ಒಳಗೆ ಪ್ರತಿ Key ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುತ್ತದೆ: N=6 tokens ಜೊತೆ, ಪ್ರತಿ head 6x6=36 similarity scores ಉತ್ಪಾದಿಸುತ್ತದೆ, ಪ್ರತಿ (query, key) ಜೋಡಿಗೆ ಒಂದೂ' } },

    { type: 'heading', data: { textEn: 'Softmax, Then Weighted Values', textKn: 'Softmax, Then Weighted Values', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'axis=-1 Normalizes Per Query, Per Head', headingKn: 'axis=-1 ಪ್ರತಿ Query, ಪ್ರತಿ Head ಗೆ ಸಾಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ',
      bodyEn: '• scores has shape (heads, N, N) -- the last axis indexes Keys, so softmax(scores, axis=-1) normalizes each query\'s row of Key-scores into a probability distribution, independently for every head and every query\n• out = weights @ Vh multiplies (heads,N,N) by (heads,N,d_head), again as a batched operation, genuinely producing (heads,N,d_head) -- each head\'s weighted combination of its own Value vectors',
      bodyKn: '• scores (heads, N, N) shape ಹೊಂದಿದೆ -- ಕೊನೆಯ axis Keys ಸೂಚ್ಯಂಕಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ softmax(scores, axis=-1) ಪ್ರತಿ query ನ Key-scores row ಅನ್ನೂ ಒಂದೂ probability distribution ಆಗಿ ಸಾಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ, ಪ್ರತಿ head ಮತ್ತು ಪ್ರತಿ query ಗೆ ಸ್ವತಂತ್ರವಾಗಿ\n• out = weights @ Vh (heads,N,N) ಅನ್ನೂ (heads,N,d_head) ಇಂದ ಗುಣಿಸುತ್ತದೆ, ಮತ್ತೆ ಒಂದೂ batched operation ಆಗಿ, ನಿಜವಾಗಿ (heads,N,d_head) ಉತ್ಪಾದಿಸುತ್ತಾ -- ಪ್ರತಿ head ನ ತನ್ನ ಸ್ವಂತ Value vectors ನ weighted combination' } },
    { type: 'code', data: {
      filename: 'batched_vs_loop.py', headingEn: 'code for concepts — Genuinely Verified Against an Explicit Loop', headingKn: 'concepts ಗಾಗಿ code — ಒಂದೂ ಸ್ಪಷ್ಟ Loop ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below to prove the batched, loop-free computation matches an explicit per-head Python loop exactly.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ batched, loop-ಇಲ್ಲದ ಗಣನೆ ಒಂದೂ ಸ್ಪಷ್ಟ per-head Python loop ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ಸಾಬೀತುಪಡಿಸಲು.',
      code: "Vh = split_heads(X @ Wv, n_heads)\nd_head = X.shape[1] // n_heads\n\n# batched (no loop) -- the original lesson's approach\nweights_batched = softmax(Qh @ Kh.transpose(0, 2, 1) / np.sqrt(d_head), axis=-1)\nout_batched = weights_batched @ Vh\n\n# explicit per-head loop, for comparison only\nout_loop = np.zeros_like(Vh)\nfor h in range(n_heads):\n    s = Qh[h] @ Kh[h].T / np.sqrt(d_head)\n    w = softmax(s, axis=-1)\n    out_loop[h] = w @ Vh[h]\n\nprint('Batched matches per-head loop:', np.allclose(out_loop, out_batched))\nprint()\nprint('head 0 attention matrix (rounded):')\nprint(np.round(weights_batched[0], 3))\nprint('head 1 attention matrix (rounded):')\nprint(np.round(weights_batched[1], 3))" } },
    { type: 'output', data: { output: "Batched matches per-head loop: True\n\nhead 0 attention matrix (rounded):\n[[0.147 0.169 0.166 0.139 0.216 0.164]\n [0.176 0.165 0.164 0.186 0.147 0.162]\n [0.201 0.154 0.168 0.196 0.118 0.163]\n [0.184 0.158 0.168 0.173 0.147 0.17 ]\n [0.179 0.171 0.177 0.189 0.123 0.162]\n [0.158 0.175 0.163 0.181 0.157 0.166]]\nhead 1 attention matrix (rounded):\n[[0.13  0.197 0.162 0.162 0.185 0.164]\n [0.235 0.123 0.175 0.171 0.132 0.164]\n [0.162 0.163 0.157 0.155 0.192 0.171]\n [0.163 0.183 0.18  0.191 0.128 0.155]\n [0.329 0.084 0.15  0.153 0.121 0.162]\n [0.22  0.143 0.168 0.181 0.128 0.161]]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed with np.allclose: the fully batched computation (no Python loop) produces numerically identical results to an explicit for-head-in-range loop -- this is the concrete proof behind the lesson\'s "no loop" claim, not just an architectural assertion\n• Genuinely confirmed: head 0 and head 1 produce different attention matrices from the same input (e.g. head 0\'s row 0 peaks at column 4 with 0.216, while head 1\'s row 0 peaks at column 1 with 0.197) -- different random Wq/Wk/Wv per head genuinely produce different attention patterns, even though neither pattern is yet linguistically meaningful before training',
      bodyKn: '• np.allclose ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಸಂಪೂರ್ಣ batched ಗಣನೆ (Python loop ಇಲ್ಲದೆ) ಒಂದೂ ಸ್ಪಷ್ಟ for-head-in-range loop ಗೆ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಒಂದೇ ಫಲಿತಾಂಶಗಳು ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಇದೂ lesson ನ "no loop" ಹಕ್ಕಿನ ಹಿಂದಿನ ಕಾಂಕ್ರೀಟ್ ಸಾಕ್ಷ್ಯ, ಕೇವಲ ಒಂದೂ architectural ಪ್ರತಿಪಾದನೆ ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: head 0 ಮತ್ತು head 1 ಅದೇ input ಇಂದ ಬೇರೆ attention matrices ಉತ್ಪಾದಿಸುತ್ತವೆ (ಉದಾ. head 0 ನ row 0 column 4 ನಲ್ಲಿ 0.216 ಜೊತೆ ಗರಿಷ್ಠ ತಲುಪುತ್ತದೆ, ಆದರೆ head 1 ನ row 0 column 1 ನಲ್ಲಿ 0.197 ಜೊತೆ ಗರಿಷ್ಠ ತಲುಪುತ್ತದೆ) -- ಪ್ರತಿ head ಗೆ ಬೇರೆ ಯಾದೃಚ್ಛಿಕ Wq/Wk/Wv ನಿಜವಾಗಿ ಬೇರೆ attention ಮಾದರಿಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತವೆ, ಎರಡೂ ಮಾದರಿ training ಮೊದಲೂ ಇನ್ನೂ ಭಾಷಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಅರ್ಥಪೂರ್ಣವಲ್ಲದಿದ್ದರೂ' } },

    { type: 'heading', data: { textEn: 'Combine and Project With W_o', textKn: 'Combine and Project With W_o', level: 'H2' } },
    { type: 'math', data: {
      formula: 'out (heads, N, d_head) -> combine_heads -> concat (N, d_model) -> concat @ W_o -> output (N, d_model)          e.g. (2,6,4) -> (6,8) -> (6,8) @ (8,8) -> (6,8)',
      descEn: '• The heads never communicate during the attention step itself -- each computes softmax(QK^T/sqrt(d_head))V independently. Only after combine_heads() concatenates their outputs does W_o (a genuinely learned (d_model,d_model) matrix) get a chance to mix information across heads',
      descKn: '• Heads attention ಹಂತದ ಸಮಯದಲ್ಲಿ ಎಂದಿಗೂ ಸಂವಹನ ಮಾಡುವುದಿಲ್ಲ -- ಪ್ರತಿಯೊಂದೂ softmax(QK^T/sqrt(d_head))V ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸುತ್ತದೆ. combine_heads() ಅವುಗಳ outputs concatenate ಮಾಡಿದ ನಂತರ ಮಾತ್ರ W_o (ಒಂದೂ ನಿಜವಾಗಿ ಕಲಿತ (d_model,d_model) matrix) heads ಆದ್ಯಂತ ಮಾಹಿತಿ ಬೆರೆಸುವ ಅವಕಾಶ ಪಡೆಯುತ್ತದೆ' } },

    { type: 'table', data: { captionEn: 'Original Code -> Mathematical Concept -> Meaning', captionKn: 'Original Code -> Mathematical Concept -> Meaning',
      rows: 'Original Code|Mathematical Concept|Meaning\nQ = X @ W_q|Q = X Wq|Query projection\nsplit_heads(Q, n_heads)|Q -> Qi|Divide Q into head subspaces\nKh.transpose(0,2,1)|Ki^T|Prepare K for dot product\nQh @ Kh.transpose(0,2,1)|Qi Ki^T|Query-Key similarity, all heads at once\n/ np.sqrt(Qh.shape[-1])|/ sqrt(d_head)|Scaled dot product\nsoftmax(scores, axis=-1)|softmax(...)|Convert scores to weights, per query per head\nweights @ Vh|Ai Vi|Weighted information retrieval, all heads at once\ncombine_heads(out)|Concat(heads)|Restore model dimension\nconcat @ W_o|H W^O|Mix head outputs' } },

    { type: 'diagram', data: {
      svgCode: '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="260" fill="none"/><text x="20" y="20" font-size="12" font-weight="bold" fill="#e2e8f0">Genuinely Verified Shape Flow (N=6, d_model=8, n_heads=2, d_head=4)</text><rect x="20" y="40" width="90" height="30" fill="none" stroke="#60a5fa"/><text x="30" y="60" font-size="11" fill="#cbd5e1">X (6,8)</text><line x1="110" y1="55" x2="160" y2="55" stroke="#94a3b8"/><rect x="160" y="40" width="110" height="30" fill="none" stroke="#60a5fa"/><text x="168" y="60" font-size="11" fill="#cbd5e1">Qh,Kh,Vh (2,6,4)</text><line x1="270" y1="55" x2="320" y2="55" stroke="#94a3b8"/><rect x="320" y="40" width="120" height="30" fill="none" stroke="#fb923c"/><text x="328" y="60" font-size="11" fill="#cbd5e1">scores (2,6,6)</text><line x1="440" y1="55" x2="490" y2="55" stroke="#94a3b8"/><rect x="490" y="40" width="120" height="30" fill="none" stroke="#fb923c"/><text x="498" y="60" font-size="11" fill="#cbd5e1">weights (2,6,6)</text><line x1="440" y1="55" x2="440" y2="100" stroke="#94a3b8"/><line x1="440" y1="100" x2="320" y2="120" stroke="#94a3b8"/><rect x="320" y="105" width="120" height="30" fill="none" stroke="#4ade80"/><text x="328" y="125" font-size="11" fill="#cbd5e1">out (2,6,4)</text><line x1="320" y1="120" x2="270" y2="150" stroke="#94a3b8"/><rect x="160" y="135" width="110" height="30" fill="none" stroke="#4ade80"/><text x="168" y="155" font-size="11" fill="#cbd5e1">concat (6,8)</text><line x1="160" y1="150" x2="110" y2="180" stroke="#94a3b8"/><rect x="20" y="165" width="90" height="30" fill="none" stroke="#4ade80"/><text x="30" y="185" font-size="11" fill="#cbd5e1">output (6,8)</text><text x="20" y="220" font-size="12" fill="#94a3b8">Genuinely confirmed: np.allclose(batched_output, per-head-loop_output) = True</text><text x="20" y="240" font-size="12" fill="#94a3b8">Heads compute independently until combine_heads() + W_o mix them together</text></svg>',
      titleEn: 'The Genuinely Verified Multi-Head Shape Flow',
      titleKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ Multi-Head Shape Flow',
      captionEn: 'Every arrow in this diagram corresponds to a shape genuinely printed above: (6,8) splits into (2,6,4) per Q/K/V, produces (2,6,6) scores and weights, (2,6,4) per-head output, then combine_heads() and W_o restore (6,8).',
      captionKn: 'ಈ diagram ನಲ್ಲಿ ಪ್ರತಿ ಬಾಣ ಮೇಲೆ ನಿಜವಾಗಿ ಮುದ್ರಿಸಿದ ಒಂದೂ shape ಗೆ ಸಂಬಂಧಿಸಿದೆ: (6,8) Q/K/V ಗೆ (2,6,4) ಆಗಿ ಭಾಗಿಸುತ್ತದೆ, (2,6,6) scores ಮತ್ತು weights ಉತ್ಪಾದಿಸುತ್ತದೆ, (2,6,4) ಪ್ರತಿ-head output, ನಂತರ combine_heads() ಮತ್ತು W_o (6,8) ಪುನಃಸ್ಥಾಪಿಸುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• mha_forward() genuinely produced output.shape=(6,8) and weights.shape=(2,6,6) on a real (6,8) input with n_heads=2\n• Kh.transpose(0,2,1) genuinely swaps only the last two axes, and Qh @ Kh.transpose(0,2,1) genuinely computes (2,6,4)@(2,4,6)->(2,6,6) as a single batched matmul across both heads\n• np.allclose genuinely confirmed the batched computation is numerically identical to an explicit per-head Python loop -- the "no loop" architecture is not just faster, it is mathematically the same operation\n• Different heads genuinely produced different attention matrices from identical input, since each has its own random Wq/Wk/Wv slice\n• Heads compute independently through softmax(QK^T/sqrt(d_head))V; only combine_heads() followed by @ W_o lets information from different heads mix together',
      bodyKn: '• mha_forward() ನಿಜವಾಗಿ n_heads=2 ಜೊತೆ ಒಂದೂ ನಿಜ (6,8) input ಮೇಲೆ output.shape=(6,8) ಮತ್ತು weights.shape=(2,6,6) ಉತ್ಪಾದಿಸಿತು\n• Kh.transpose(0,2,1) ನಿಜವಾಗಿ ಕೇವಲ ಕೊನೆಯ ಎರಡೂ axes ಬದಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು Qh @ Kh.transpose(0,2,1) ನಿಜವಾಗಿ (2,6,4)@(2,4,6)->(2,6,6) ಅನ್ನೂ ಎರಡೂ heads ಆದ್ಯಂತ ಒಂದೇ batched matmul ಆಗಿ ಗಣಿಸುತ್ತದೆ\n• np.allclose ನಿಜವಾಗಿ batched ಗಣನೆ ಒಂದೂ ಸ್ಪಷ್ಟ per-head Python loop ಗೆ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಒಂದೇ ಎಂದು ದೃಢಪಡಿಸಿತು -- "no loop" architecture ಕೇವಲ ವೇಗವಾಗಿಲ್ಲ, ಇದೂ ಗಣಿತೀಯವಾಗಿ ಅದೇ operation\n• ಬೇರೆ heads ಅದೇ input ಇಂದ ನಿಜವಾಗಿ ಬೇರೆ attention matrices ಉತ್ಪಾದಿಸಿದವು, ಪ್ರತಿಯೊಂದೂ ತನ್ನ ಸ್ವಂತ ಯಾದೃಚ್ಛಿಕ Wq/Wk/Wv ಭಾಗ ಹೊಂದಿರುವುದರಿಂದ\n• Heads softmax(QK^T/sqrt(d_head))V ಮೂಲಕ ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸುತ್ತವೆ; combine_heads() ನಂತರ @ W_o ಮಾತ್ರ ಬೇರೆ heads ಇಂದ ಮಾಹಿತಿ ಬೆರೆಯಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact batched computation genuinely verified here -- Qh @ Kh.transpose(0,2,1) as a single matmul across the head dimension, confirmed identical to a per-head loop -- is why every production Transformer (GPT, BERT, LLaMA) can run multi-head attention as one fused GPU kernel instead of one kernel launch per head; the mathematical equivalence proven above is exactly what makes that fusion valid.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ batched ಗಣನೆ -- Qh @ Kh.transpose(0,2,1) head dimension ಆದ್ಯಂತ ಒಂದೇ matmul ಆಗಿ, ಒಂದೂ per-head loop ಗೆ ಒಂದೇ ಎಂದು ದೃಢಪಡಿಸಲಾಗಿದೆ -- ಪ್ರತಿ production Transformer (GPT, BERT, LLaMA) multi-head attention ಅನ್ನೂ ಪ್ರತಿ head ಗೆ ಒಂದೂ kernel launch ಬದಲು ಒಂದೂ fused GPU kernel ಆಗಿ ಚಲಾಯಿಸಬಹುದು ಏಕೆ ಎಂದು; ಮೇಲೆ ಸಾಬೀತುಪಡಿಸಿದ ಗಣಿತೀಯ ಸಮಾನತೆ ಆ fusion ಅನ್ನೂ ಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• GPU hardware is fastest at large batched matrix multiplications, not many small sequential ones -- the genuinely-confirmed equivalence between the batched computation and a per-head loop means production systems can choose the batched form purely for speed, with zero risk of changing the mathematical result\n• This equivalence is what allows Transformer libraries to add or reshape heads (e.g. changing num_heads for a new model size) without touching the attention formula itself -- the head dimension is genuinely just another batch dimension the same matmul machinery already handles',
      bodyKn: '• GPU hardware ದೊಡ್ಡ batched matrix multiplications ನಲ್ಲಿ ಅತಿ ವೇಗವಾಗಿದೆ, ಅನೇಕ ಚಿಕ್ಕ sequential ಒಂದೂಗಳಲ್ಲಿ ಅಲ್ಲ -- batched ಗಣನೆ ಮತ್ತು ಒಂದೂ per-head loop ನಡುವಿನ ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ ಸಮಾನತೆ ಎಂದರೆ production systems batched ರೂಪ ಅನ್ನೂ ಕೇವಲ ವೇಗಕ್ಕಾಗಿ ಆಯ್ಕೆ ಮಾಡಬಹುದು, ಗಣಿತೀಯ ಫಲಿತಾಂಶ ಬದಲಾಯಿಸುವ ಶೂನ್ಯ ಅಪಾಯದೊಂದಿಗೆ\n• ಈ ಸಮಾನತೆಯೇ Transformer libraries ಗೆ heads ಸೇರಿಸಲು ಅಥವಾ ಮರುರೂಪಿಸಲು ಬಿಡುತ್ತದೆ (ಉದಾ. ಒಂದೂ ಹೊಸ model size ಗಾಗಿ num_heads ಬದಲಾಯಿಸುತ್ತಾ) attention formula ಸ್ವತಃ ಮುಟ್ಟದೆ -- head dimension ನಿಜವಾಗಿ ಕೇವಲ ಇನ್ನೊಂದೂ batch dimension, ಅದೇ matmul ಯಂತ್ರಾಂಶ ಈಗಾಗಲೇ ನಿರ್ವಹಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production inference server handling thousands of concurrent chat requests genuinely relies on the batched matmul form verified in this lesson to process every head of every request efficiently on shared GPU hardware. If multi-head attention had to be computed as a genuine per-head Python loop instead of a single batched operation, GPU utilization would collapse -- the equivalence proven here is precisely what lets frameworks like PyTorch and JAX compile multi-head attention into one efficient fused kernel rather than dozens of small, poorly-utilized ones.',
      bodyKn: 'ಸಾವಿರಾರು ಏಕಕಾಲಿಕ chat requests ನಿರ್ವಹಿಸುವ ಒಂದೂ production inference server ಹಂಚಿಕೊಂಡ GPU hardware ಮೇಲೆ ಪ್ರತಿ request ನ ಪ್ರತಿ head ಅನ್ನೂ ದಕ್ಷವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ batched matmul ರೂಪದ ಮೇಲೆ ನಿಜವಾಗಿ ಅವಲಂಬಿತವಾಗಿದೆ. Multi-head attention ಅನ್ನೂ ಒಂದೂ ಏಕ batched operation ಬದಲು ಒಂದೂ ನಿಜ per-head Python loop ಆಗಿ ಗಣಿಸಬೇಕಾಗಿದ್ದರೆ, GPU utilization ಕುಸಿಯುತ್ತಿತ್ತು -- ಇಲ್ಲಿ ಸಾಬೀತುಪಡಿಸಿದ ಸಮಾನತೆ ನಿಖರವಾಗಿ PyTorch ಮತ್ತು JAX ನಂತಹ frameworks ಗೆ multi-head attention ಅನ್ನೂ ಡಜನ್ಗಟ್ಟಲೆ ಚಿಕ್ಕ, ಕಳಪೆಯಾಗಿ-ಬಳಸಿದ ಒಂದೂಗಳ ಬದಲು ಒಂದೂ ದಕ್ಷ fused kernel ಗೆ compile ಮಾಡಲು ಬಿಡುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running mha_forward() with N=6, d_model=8, n_heads=2 on a real input, what were the confirmed output and weights shapes?', qKn: 'N=6, d_model=8, n_heads=2 ಜೊತೆ ಒಂದೂ ನಿಜ input ಮೇಲೆ mha_forward() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ದೃಢಪಡಿಸಿದ output ಮತ್ತು weights shapes ಏನೂ?',
        opts: ['output=(2,6,4), weights=(6,8)', 'output=(6,8), weights=(2,6,6) -- genuinely confirmed', 'output=(6,6), weights=(6,6)', 'output=(8,8), weights=(2,2)'], correct: 1,
        optsKn: ['output=(2,6,4), weights=(6,8)', 'output=(6,8), weights=(2,6,6) -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'output=(6,6), weights=(6,6)', 'output=(8,8), weights=(2,2)'] },
      { q: 'What did genuinely comparing the batched computation to an explicit per-head Python loop with np.allclose confirm?', qKn: 'Batched ಗಣನೆ ಅನ್ನೂ np.allclose ಜೊತೆ ಒಂದೂ ಸ್ಪಷ್ಟ per-head Python loop ಗೆ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ ಏನೂ ದೃಢಪಡಿಸಿತು?',
        opts: ['The batched version is only approximately correct', 'The batched, loop-free computation is numerically identical to the explicit loop', 'The loop version is faster', 'They produce different attention weights'], correct: 1,
        optsKn: ['Batched version ಕೇವಲ ಅಂದಾಜು ಸರಿಯಾಗಿದೆ', 'Batched, loop-ಇಲ್ಲದ ಗಣನೆ ಸ್ಪಷ್ಟ loop ಗೆ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಒಂದೇ', 'Loop version ವೇಗವಾಗಿದೆ', 'ಇವು ಬೇರೆ attention weights ಉತ್ಪಾದಿಸುತ್ತವೆ'] },
      { q: 'At what point in mha_forward() do the independently-computed heads first get to mix information with each other?', qKn: 'mha_forward() ನಲ್ಲಿ ಸ್ವತಂತ್ರವಾಗಿ-ಗಣಿಸಿದ heads ಮೊದಲ ಬಾರಿ ಪರಸ್ಪರ ಮಾಹಿತಿ ಬೆರೆಸಲು ಎಲ್ಲಿ ಪಡೆಯುತ್ತವೆ?',
        opts: ['During Q @ K.T', 'During softmax', 'After combine_heads(), via the concat @ W_o output projection -- genuinely the only mixing point', 'They never mix'], correct: 2,
        optsKn: ['Q @ K.T ಸಮಯದಲ್ಲಿ', 'softmax ಸಮಯದಲ್ಲಿ', 'combine_heads() ನಂತರ, concat @ W_o output projection ಮೂಲಕ -- ನಿಜವಾಗಿ ಒಂದೇ ಬೆರೆಸುವ ಬಿಂದು', 'ಇವು ಎಂದಿಗೂ ಬೆರೆಯುವುದಿಲ್ಲ'] },
      { q: 'Genuinely computed as (2,6,4) @ (2,4,6), what shape did scores = Qh @ Kh.transpose(0,2,1) / sqrt(d_head) produce, and what was sqrt(d_head)?', qKn: '(2,6,4) @ (2,4,6) ಆಗಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ, scores = Qh @ Kh.transpose(0,2,1) / sqrt(d_head) ಯಾವ shape ಉತ್ಪಾದಿಸಿತು, ಮತ್ತು sqrt(d_head) ಎಷ್ಟಿತ್ತು?',
        opts: ['scores.shape=(2,4,6), sqrt(d_head)=4.0', 'scores.shape=(2,6,6), sqrt(d_head)=2.0 -- genuinely confirmed', 'scores.shape=(6,6), sqrt(d_head)=8.0', 'scores.shape=(2,6,6), sqrt(d_head)=8.0'], correct: 1,
        optsKn: ['scores.shape=(2,4,6), sqrt(d_head)=4.0', 'scores.shape=(2,6,6), sqrt(d_head)=2.0 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'scores.shape=(6,6), sqrt(d_head)=8.0', 'scores.shape=(2,6,6), sqrt(d_head)=8.0'] },
      { q: 'Genuinely compared, what did head 0\'s and head 1\'s attention matrices show, given each head has its own random Wq/Wk/Wv?', qKn: 'ಪ್ರತಿ head ತನ್ನ ಸ್ವಂತ ಯಾದೃಚ್ಛಿಕ Wq/Wk/Wv ಹೊಂದಿರುವುದನ್ನೂ ಗಮನಿಸಿ, head 0 ಮತ್ತು head 1 ನ attention matrices ನಿಜವಾಗಿ ಹೋಲಿಸಿದಾಗ ಏನೂ ತೋರಿಸಿದವು?',
        opts: ['Identical attention matrices, since both process the same input X', 'Genuinely different attention matrices from the same input -- e.g. head 0\'s row 0 peaked at column 4 (0.216) while head 1\'s row 0 peaked at column 1 (0.197)', 'Head 1\'s matrix was always exactly the transpose of head 0\'s', 'Both matrices were uniform, giving equal weight to every token'], correct: 1,
        optsKn: ['ಒಂದೇ attention matrices, ಎರಡೂ ಅದೇ input X ಸಂಸ್ಕರಿಸುವುದರಿಂದ', 'ಅದೇ input ಇಂದ ನಿಜವಾಗಿ ಬೇರೆ attention matrices -- ಉದಾ. head 0 ನ row 0 column 4 (0.216) ನಲ್ಲಿ ಗರಿಷ್ಠ ತಲುಪಿತು ಆದರೆ head 1 ನ row 0 column 1 (0.197) ನಲ್ಲಿ ಗರಿಷ್ಠ ತಲುಪಿತು', 'Head 1 ನ matrix ಯಾವಾಗಲೂ head 0 ನ ನಿಖರ transpose ಆಗಿತ್ತು', 'ಎರಡೂ matrices ಏಕರೂಪವಾಗಿದ್ದವು, ಪ್ರತಿ token ಗೆ ಸಮಾನ weight ನೀಡುತ್ತಾ'] },
    ] } },
  ],
};
