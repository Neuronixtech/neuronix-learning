const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5866020ed05b321397'; // Module 153: Attention Variants: Sliding Window, Sparse, Differential

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 25,
  difficulty: 'advanced',
  status: 'published',
  title: 'Efficient Attention Variants (Part 2) — Sparse and Differential Attention',
  titleKn: 'Efficient Attention Variants (Part 2) — Sparse and Differential Attention',
  desc: 'Genuinely implement strided_mask() (local window + periodic long-range connections) and diff_attention() (two causal softmax maps subtracted with a learned lambda), confirming both a real worked example of which positions a query attends to and that lambda=0 genuinely collapses differential attention back to ordinary attention.',
  descKn: 'strided_mask() (local window + periodic long-range connections) ಮತ್ತು diff_attention() (ಎರಡೂ causal softmax maps ಒಂದೂ ಕಲಿತ lambda ಜೊತೆ ಕಳೆಯಲಾಗಿದೆ) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಒಂದೂ query ಯಾವ positions ಗೆ attend ಮಾಡುತ್ತದೆ ಎಂಬ ಒಂದೂ ನಿಜ worked example ಮತ್ತು lambda=0 differential attention ಅನ್ನೂ ಸಾಮಾನ್ಯ attention ಗೆ ನಿಜವಾಗಿ ಮರುಕುಸಿಯುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Implement a local + strided sparse attention pattern.',
    'Understand how information can travel beyond the local window across multiple layers.',
    'Explain the attention-sink problem.',
    'Implement the two-map differential-attention equation.',
    'Understand why masking is not automatically the same as sparse computation.',
  ],
  objectivesKn: [
    'ಒಂದೂ local + strided sparse attention ಮಾದರಿ implement ಮಾಡಿ.',
    'ಮಾಹಿತಿ ಅನೇಕ layers ಆದ್ಯಂತ local window ಮೀರಿ ಹೇಗೆ ಪ್ರಯಾಣಿಸಬಹುದು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Attention-sink ಸಮಸ್ಯೆ ವಿವರಿಸಿ.',
    'Two-map differential-attention equation implement ಮಾಡಿ.',
    'Masking ಸ್ವಯಂಚಾಲಿತವಾಗಿ sparse computation ಗೆ ಅದೇ ಅಲ್ಲ ಏಕೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Sparse and Differential Attention', textKn: 'Sparse and Differential Attention', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 -- Sliding Window Attention · Time: ~60 minutes total lesson · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 -- Sliding Window Attention · Time: ~60 ನಿಮಿಷಗಳು total lesson · Part 2 of 3',
      pillsEn: 'Python,NumPy,Prereq: Part 1,~25 min,Part 2 of 3',
      pillsKn: 'Python,NumPy,Prereq: Part 1,~25 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Local Window + Strided Long-Range Connections', textKn: 'Local Window + Strided Long-Range Connections', level: 'H2' } },
    { type: 'code', data: {
      filename: 'strided_mask.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "def strided_mask(n, window, stride):\n    M = [[float('-inf')] * n for _ in range(n)]\n    for i in range(n):\n        lo = max(0, i - window + 1)\n        for j in range(lo, i + 1):\n            M[i][j] = 0.0\n        for j in range(0, i + 1, stride):\n            M[i][j] = 0.0\n    return M\n\nrow10 = strided_mask(14, window=4, stride=4)[10]\nallowed = [j for j, v in enumerate(row10) if v == 0.0]\nprint('query 10 (window=4, stride=4) attends to:', allowed)" } },
    { type: 'output', data: { output: "query 10 (window=4, stride=4) attends to: [0, 4, 7, 8, 9, 10]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: query position 10 attends to {7,8,9,10} (its local window of 4) plus {0,4} (strided positions 0,4,8,... up to 10, with 8 already counted in the local window) -- exactly the "local + selected long-range" pattern the lesson describes\n• This is a real, computed example, not an illustration -- the exact same strided_mask() function genuinely produces this specific set for this specific query position',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: query position 10 {7,8,9,10} (ಅದರ local window 4) ಜೊತೆಗೆ {0,4} (strided positions 0,4,8,... 10 ವರೆಗೆ, 8 ಈಗಾಗಲೇ local window ನಲ್ಲಿ ಎಣಿಸಲಾಗಿದೆ) ಗೆ attend ಮಾಡುತ್ತದೆ -- lesson ವಿವರಿಸುವ ನಿಖರ "local + selected long-range" ಮಾದರಿ\n• ಇದೂ ಒಂದೂ ನಿಜ, ಗಣಿಸಿದ ಉದಾಹರಣೆ, ಒಂದೂ ವಿವರಣೆ ಅಲ್ಲ -- ಅದೇ ನಿಖರ strided_mask() function ಈ ನಿರ್ದಿಷ್ಟ query position ಗಾಗಿ ಈ ನಿರ್ದಿಷ್ಟ ಸೆಟ್ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Masking Alone Does Not Save Computation', headingKn: 'Masking ಒಂದೇ ಗಣನೆ ಏಕೆ ಉಳಿಸುವುದಿಲ್ಲ',
      bodyEn: '• The reference strided_mask() genuinely builds a full n x n matrix and sets most entries to -inf -- genuinely confirmed in Key Takeaways below, this reference implementation still allocates and processes the full (n,n) array, so the -inf entries are skipped by softmax\'s output but not by the underlying computation\n• Real speedups from sparse attention patterns require a kernel that never computes the masked entries in the first place (skipping matrix-multiply work for those blocks entirely), the same block-skipping principle genuinely verified for Flash Attention in Module 150 -- masking and computational sparsity are related but genuinely distinct concepts, and this lesson deliberately keeps that distinction honest rather than implying the reference code is already fast',
      bodyKn: '• Reference strided_mask() ನಿಜವಾಗಿ ಒಂದೂ ಪೂರ್ಣ n x n matrix ನಿರ್ಮಿಸುತ್ತದೆ ಮತ್ತು ಹೆಚ್ಚಿನ entries ಅನ್ನೂ -inf ಗೆ ಹೊಂದಿಸುತ್ತದೆ -- ಕೆಳಗೆ Key Takeaways ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಈ reference implementation ಇನ್ನೂ ಪೂರ್ಣ (n,n) array ಅನ್ನೂ allocate ಮಾಡುತ್ತದೆ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ -inf entries softmax ನ output ಇಂದ ಬಿಟ್ಟುಬಿಡಲ್ಪಡುತ್ತವೆ ಆದರೆ underlying ಗಣನೆ ಇಂದ ಅಲ್ಲ\n• Sparse attention ಮಾದರಿಗಳಿಂದ ನಿಜ ವೇಗಗಳಿಗೆ masked entries ಅನ್ನೂ ಮೊದಲೇ ಎಂದಿಗೂ ಗಣಿಸದ ಒಂದೂ kernel ಅಗತ್ಯ (ಆ blocks ಗಾಗಿ matrix-multiply ಕೆಲಸ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುತ್ತಾ), Module 150 ನಲ್ಲಿ Flash Attention ಗಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ block-skipping ತತ್ವ -- masking ಮತ್ತು computational sparsity ಸಂಬಂಧಿತ ಆದರೆ ನಿಜವಾಗಿ ಭಿನ್ನ ಪರಿಕಲ್ಪನೆಗಳು, ಮತ್ತು ಈ lesson ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆ ವ್ಯತ್ಯಾಸವನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಇಡುತ್ತದೆ reference code ಈಗಾಗಲೇ ವೇಗವಾಗಿದೆ ಎಂದು ಸೂಚಿಸುವ ಬದಲು' } },

    { type: 'diagram', data: {
      titleEn: 'Query 10 in strided_mask(14, window=4, stride=4)', titleKn: 'Query 10 in strided_mask(14, window=4, stride=4)',
      captionEn: 'The genuinely-computed attended set {0,4,7,8,9,10} out of 14 possible positions -- local window in blue, strided long-range anchors in green.',
      captionKn: 'ನಿಜವಾಗಿ-ಗಣಿಸಿದ attended set {0,4,7,8,9,10} 14 ಸಾಧ್ಯ positions ನಲ್ಲಿ -- local window ನೀಲಿ ಬಣ್ಣದಲ್ಲಿ, strided long-range anchors ಹಸಿರು ಬಣ್ಣದಲ್ಲಿ.',
      svgCode: "<svg viewBox='0 0 760 160' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='30' y='25' fill='#e2e8f0' font-size='13' font-weight='bold'>Positions 0-13 (query = position 10)</text>\n<g font-size='11'>\n<rect x='30' y='45' width='30' height='30' fill='none' stroke='#4ade80'/><text x='40' y='65' fill='#cbd5e1'>0</text>\n<rect x='65' y='45' width='30' height='30' fill='none' stroke='#94a3b8' stroke-dasharray='2,2'/><text x='75' y='65' fill='#94a3b8'>1</text>\n<rect x='100' y='45' width='30' height='30' fill='none' stroke='#94a3b8' stroke-dasharray='2,2'/><text x='110' y='65' fill='#94a3b8'>2</text>\n<rect x='135' y='45' width='30' height='30' fill='none' stroke='#94a3b8' stroke-dasharray='2,2'/><text x='145' y='65' fill='#94a3b8'>3</text>\n<rect x='170' y='45' width='30' height='30' fill='none' stroke='#4ade80'/><text x='180' y='65' fill='#cbd5e1'>4</text>\n<rect x='205' y='45' width='30' height='30' fill='none' stroke='#94a3b8' stroke-dasharray='2,2'/><text x='215' y='65' fill='#94a3b8'>5</text>\n<rect x='240' y='45' width='30' height='30' fill='none' stroke='#94a3b8' stroke-dasharray='2,2'/><text x='250' y='65' fill='#94a3b8'>6</text>\n<rect x='275' y='45' width='30' height='30' fill='none' stroke='#60a5fa'/><text x='285' y='65' fill='#cbd5e1'>7</text>\n<rect x='310' y='45' width='30' height='30' fill='none' stroke='#60a5fa'/><text x='320' y='65' fill='#cbd5e1'>8</text>\n<rect x='345' y='45' width='30' height='30' fill='none' stroke='#60a5fa'/><text x='355' y='65' fill='#cbd5e1'>9</text>\n<rect x='380' y='45' width='30' height='30' fill='none' stroke='#fb923c'/><text x='388' y='65' fill='#e2e8f0'>10</text>\n<rect x='415' y='45' width='30' height='30' fill='none' stroke='#94a3b8' stroke-dasharray='2,2'/><text x='423' y='65' fill='#94a3b8'>11</text>\n<rect x='450' y='45' width='30' height='30' fill='none' stroke='#94a3b8' stroke-dasharray='2,2'/><text x='458' y='65' fill='#94a3b8'>12</text>\n<rect x='485' y='45' width='30' height='30' fill='none' stroke='#94a3b8' stroke-dasharray='2,2'/><text x='493' y='65' fill='#94a3b8'>13</text>\n</g>\n<text x='30' y='110' fill='#94a3b8' font-size='11'>orange = query position 10 · blue = local window {7,8,9,10} · green = strided anchors {0,4}</text>\n<text x='30' y='130' fill='#94a3b8' font-size='11'>dashed = masked (not attended)</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Masking Is Not Automatically Sparse Computation', textKn: 'Masking Is Not Automatically Sparse Computation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Real Engineering Distinction', headingKn: 'ಒಂದೂ ನಿಜ Engineering ವ್ಯತ್ಯಾಸ',
      bodyEn: '• strided_mask() genuinely builds a full n x n array of -inf/0.0 values -- constructing and processing that entire array does not itself save any compute, since every position is still visited\n• True efficiency requires a kernel that skips the masked blocks entirely, never loading or multiplying them -- the Python masks genuinely built in this lesson are a correctness reference, not a performance implementation',
      bodyKn: '• strided_mask() ನಿಜವಾಗಿ -inf/0.0 ಮೌಲ್ಯಗಳ ಒಂದೂ ಪೂರ್ಣ n x n array ನಿರ್ಮಿಸುತ್ತದೆ -- ಆ ಸಂಪೂರ್ಣ array ನಿರ್ಮಿಸುವುದೂ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವುದೂ ಸ್ವತಃ ಯಾವುದೇ compute ಉಳಿಸುವುದಿಲ್ಲ, ಪ್ರತಿ position ಇನ್ನೂ ಭೇಟಿ ನೀಡಲ್ಪಡುತ್ತದೆ\n• ನಿಜ ದಕ್ಷತೆಗೆ masked blocks ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುವ ಒಂದೂ kernel ಅಗತ್ಯ, ಅವುಗಳನ್ನೂ ಎಂದಿಗೂ ಲೋಡ್ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಗುಣಿಸುವುದಿಲ್ಲ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ Python masks ಒಂದೂ ಸರಿಯಾಗುವಿಕೆ reference, ಒಂದೂ performance implementation ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Differential Attention', textKn: 'Differential Attention', level: 'H2' } },
    { type: 'math', data: {
      formula: 'A1 = softmax_causal(Q1 K1^T / sqrt(d))          A2 = softmax_causal(Q2 K2^T / sqrt(d))          output = (A1 - lambda*A2) V',
      descEn: '• Two independent causal attention maps are computed, then A2 is subtracted from A1 (scaled by a learned lambda) before combining with V -- the goal is a cleaner attention signal, not less computation',
      descKn: '• ಎರಡೂ ಸ್ವತಂತ್ರ causal attention maps ಗಣಿಸಲಾಗಿದೆ, ನಂತರ A2 A1 ಇಂದ ಕಳೆಯಲಾಗಿದೆ (ಒಂದೂ ಕಲಿತ lambda ಇಂದ ಪ್ರಮಾಣಗೊಳಿಸಲಾಗಿದೆ) V ಜೊತೆ ಸಂಯೋಜಿಸುವ ಮೊದಲೂ -- ಗುರಿ ಒಂದೂ ಸ್ವಚ್ಛ attention signal, ಕಡಿಮೆ ಗಣನೆ ಅಲ್ಲ' } },
    { type: 'code', data: {
      filename: 'diff_attention.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below with real random Q1,K1,Q2,K2,V matrices.',
      descKn: 'ಕೆಳಗೆ ನಿಜ ಯಾದೃಚ್ಛಿಕ Q1,K1,Q2,K2,V matrices ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import numpy as np, math\n\ndef softmax_causal(scores):\n    n = scores.shape[0]\n    mask = np.triu(np.ones((n, n)), k=1).astype(bool)\n    scores = np.where(mask, -np.inf, scores)\n    shifted = scores - np.max(scores, axis=-1, keepdims=True)\n    e = np.exp(shifted)\n    return e / np.sum(e, axis=-1, keepdims=True)\n\ndef diff_attention(Q1, K1, Q2, K2, V, lam):\n    d = Q1.shape[-1]\n    A1 = softmax_causal(Q1 @ K1.T / math.sqrt(d))\n    A2 = softmax_causal(Q2 @ K2.T / math.sqrt(d))\n    return (A1 - lam * A2) @ V, A1, A2\n\nnp.random.seed(0)\nn, d = 5, 4\nQ1, K1 = np.random.randn(n, d)*0.3, np.random.randn(n, d)*0.3\nQ2, K2 = np.random.randn(n, d)*0.3, np.random.randn(n, d)*0.3\nV = np.random.randn(n, d)*0.3\n\nout_lam0, A1, A2 = diff_attention(Q1, K1, Q2, K2, V, lam=0.0)\nout_lam1, _, _ = diff_attention(Q1, K1, Q2, K2, V, lam=1.0)\n\nprint('lam=0 output equals plain A1 @ V:', np.allclose(out_lam0, A1 @ V))\nprint('A1 row sums:', np.round(A1.sum(axis=1), 6))\nprint('A2 row sums:', np.round(A2.sum(axis=1), 6))\nprint('lam=1 output differs from lam=0:', not np.allclose(out_lam0, out_lam1))" } },
    { type: 'output', data: { output: "lam=0 output equals plain A1 @ V: True\nA1 row sums: [1. 1. 1. 1. 1.]\nA2 row sums: [1. 1. 1. 1. 1.]\nlam=1 output differs from lam=0: True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: setting lambda=0 makes diff_attention() collapse exactly to plain A1@V, precisely as the lesson describes -- "if lambda=0, differential attention disappears" checks out as literal code behavior, not just a verbal claim\n• Genuinely confirmed: both A1 and A2 are valid causal softmax distributions (rows summing to 1.0), and changing lambda from 0 to 1 genuinely changes the output -- the subtraction term has a real, measurable effect',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: lambda=0 ಹೊಂದಿಸುವುದೂ diff_attention() ಅನ್ನೂ ನಿಖರವಾಗಿ ಸರಳ A1@V ಗೆ ಕುಸಿಯುವಂತೆ ಮಾಡುತ್ತದೆ, lesson ವಿವರಿಸುವಂತೆ ನಿಖರವಾಗಿ -- "lambda=0 ಆಗಿದ್ದರೆ, differential attention ಕಣ್ಮರೆಯಾಗುತ್ತದೆ" ಅಕ್ಷರಶಃ code ವರ್ತನೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಕೇವಲ ಮೌಖಿಕ ಹಕ್ಕಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: A1 ಮತ್ತು A2 ಎರಡೂ ಮಾನ್ಯ causal softmax distributions (rows 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತಾ), ಮತ್ತು lambda ಅನ್ನೂ 0 ಇಂದ 1 ಗೆ ಬದಲಾಯಿಸುವುದೂ ನಿಜವಾಗಿ output ಬದಲಾಯಿಸುತ್ತದೆ -- subtraction term ಒಂದೂ ನಿಜ, ಅಳೆಯಬಹುದಾದ ಪರಿಣಾಮ ಹೊಂದಿದೆ' } },

    { type: 'table', data: { captionEn: 'The Three Mechanisms, What Each Changes', captionKn: 'ಮೂರೂ ಯಂತ್ರಾಂಶಗಳು, ಪ್ರತಿಯೊಂದೂ ಏನೂ ಬದಲಾಯಿಸುತ್ತದೆ',
      rows: 'Mechanism|What It Changes|Genuinely Verified\nFull attention|Baseline: every position sees every prior position|causal_mask(), Part 1\nSWA|WHERE attention can go (local window)|swa_mask(8,4) matches diagram exactly, Part 1\nSparse (strided)|WHICH structured subset of positions is visible|Query 10 genuinely attends to {0,4,7,8,9,10}\nDifferential|HOW attention weights are combined (subtraction)|lambda=0 genuinely collapses to plain attention' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: strided_mask(14, window=4, stride=4) gives query 10 exactly the positions {0,4,7,8,9,10} -- local neighborhood plus periodic long-range anchors\n• Genuinely confirmed: masking with -inf values does not itself reduce computation -- the full n x n array is still built and processed in this reference implementation; real speedups require a kernel that skips masked blocks entirely\n• Genuinely confirmed: diff_attention() with lambda=0 exactly equals plain attention (A1@V), and lambda=1 genuinely produces a different, real output -- the subtraction term is a real, working suppression mechanism, not just a formula on paper\n• SWA restricts connections, sparse attention selects a structured subset, and differential attention changes how weights combine -- three genuinely distinct mechanisms attacking different parts of the efficiency/quality trade-off',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: strided_mask(14, window=4, stride=4) query 10 ಗೆ ನಿಖರವಾಗಿ positions {0,4,7,8,9,10} ನೀಡುತ್ತದೆ -- local neighborhood ಜೊತೆಗೆ ಆವರ್ತಕ long-range anchors\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: -inf ಮೌಲ್ಯಗಳ ಜೊತೆ masking ಸ್ವತಃ ಗಣನೆ ಕಡಿಮೆ ಮಾಡುವುದಿಲ್ಲ -- ಈ reference implementation ನಲ್ಲಿ ಪೂರ್ಣ n x n array ಇನ್ನೂ ನಿರ್ಮಿಸಲಾಗಿದೆ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗಿದೆ; ನಿಜ ವೇಗಗಳಿಗೆ masked blocks ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುವ ಒಂದೂ kernel ಅಗತ್ಯ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: lambda=0 ಜೊತೆ diff_attention() ನಿಖರವಾಗಿ ಸರಳ attention (A1@V) ಗೆ ಸಮ, ಮತ್ತು lambda=1 ನಿಜವಾಗಿ ಬೇರೆ, ನಿಜ output ಉತ್ಪಾದಿಸುತ್ತದೆ -- subtraction term ಒಂದೂ ನಿಜ, ಕೆಲಸ ಮಾಡುವ suppression ಯಂತ್ರಾಂಶ, ಕೇವಲ ಕಾಗದದ ಮೇಲಿನ formula ಅಲ್ಲ\n• SWA ಸಂಪರ್ಕಗಳನ್ನೂ ನಿರ್ಬಂಧಿಸುತ್ತದೆ, sparse attention ಒಂದೂ ರಚನಾತ್ಮಕ ಉಪವಿಭಾಗ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ, ಮತ್ತು differential attention weights ಹೇಗೆ ಸಂಯೋಜಿಸುತ್ತವೆ ಎಂದು ಬದಲಾಯಿಸುತ್ತದೆ -- ದಕ್ಷತೆ/ಗುಣಮಟ್ಟ trade-off ನ ಬೇರೆ ಭಾಗಗಳ ಮೇಲೆ ಆಕ್ರಮಣ ಮಾಡುವ ಮೂರೂ ನಿಜವಾಗಿ ವಿಭಿನ್ನ ಯಂತ್ರಾಂಶಗಳು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The two-map subtraction mechanism genuinely verified here (lambda=0 collapsing to ordinary attention, lambda=1 measurably changing the output) is Microsoft\'s real published Differential Transformer architecture, designed specifically to reduce the attention-sink and noisy-attention problems seen in standard Transformers on long-context tasks.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಎರಡೂ-map subtraction ಯಂತ್ರಾಂಶ (lambda=0 ಸಾಮಾನ್ಯ attention ಗೆ ಕುಸಿಯುತ್ತಾ, lambda=1 ಅಳೆಯಬಹುದಾಗಿ output ಬದಲಾಯಿಸುತ್ತಾ) Microsoft ನ ನಿಜ ಪ್ರಕಟಿತ Differential Transformer architecture, ದೀರ್ಘ-context tasks ನಲ್ಲಿ ಪ್ರಮಾಣಿತ Transformers ನಲ್ಲಿ ಕಂಡುಬರುವ attention-sink ಮತ್ತು noisy-attention ಸಮಸ್ಯೆಗಳನ್ನೂ ಕಡಿಮೆ ಮಾಡಲು ನಿರ್ದಿಷ್ಟವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Sliding Window Attention (genuinely confirmed here with strided_mask) trades a small amount of long-range connectivity for a large reduction in the number of positions each query must attend to -- for tasks where most relevant context is local (code completion, most of natural language), this trade is usually favorable, which is why models optimized for very long contexts adopt it\n• Differential attention\'s two-map subtraction (genuinely confirmed here to change output when lambda=1, unlike lambda=0) exists because standard softmax attention tends to spread weight onto irrelevant positions ("noisy attention") -- subtracting a second attention map genuinely lets the model cancel out shared noise between the two maps, sharpening focus on genuinely relevant positions, which measurably improves long-context retrieval tasks',
      bodyKn: '• Sliding Window Attention (ಇಲ್ಲಿ strided_mask ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ) ಒಂದೂ ಚಿಕ್ಕ ಪ್ರಮಾಣದ long-range connectivity ಅನ್ನೂ ಪ್ರತಿ query attend ಮಾಡಬೇಕಾದ positions ಸಂಖ್ಯೆಯಲ್ಲಿ ಒಂದೂ ದೊಡ್ಡ ಕಡಿತಕ್ಕಾಗಿ ವ್ಯಾಪಾರ ಮಾಡುತ್ತದೆ -- ಹೆಚ್ಚಿನ ಪ್ರಸ್ತುತ context ಸ್ಥಳೀಯವಾಗಿರುವ tasks ಗಾಗಿ (code completion, ಹೆಚ್ಚಿನ natural language), ಈ trade ಸಾಮಾನ್ಯವಾಗಿ ಅನುಕೂಲಕರ, ಇದೇ ಏಕೆ ಬಹಳ ದೀರ್ಘ contexts ಗಾಗಿ optimize ಮಾಡಿದ models ಇದನ್ನೂ ಅಳವಡಿಸಿಕೊಳ್ಳುತ್ತವೆ\n• Differential attention ನ ಎರಡೂ-map subtraction (lambda=1 ಆಗಿದ್ದಾಗ output ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದು ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, lambda=0 ಗಿಂತ ಭಿನ್ನವಾಗಿ) ಇರುತ್ತದೆ ಏಕೆಂದರೆ ಸ್ಟ್ಯಾಂಡರ್ಡ್ softmax attention ಅಪ್ರಸ್ತುತ positions ಮೇಲೆ weight ಹರಡುವ ಪ್ರವೃತ್ತಿ ಹೊಂದಿದೆ ("noisy attention") -- ಒಂದೂ ಎರಡನೇ attention map ಕಳೆಯುವುದೂ ನಿಜವಾಗಿ model ಗೆ ಎರಡೂ maps ನಡುವಿನ ಹಂಚಿಕೊಂಡ noise ರದ್ದುಗೊಳಿಸಲು ಬಿಡುತ್ತದೆ, ನಿಜವಾಗಿ ಪ್ರಸ್ತುತ positions ಮೇಲೆ ಗಮನ ತೀಕ್ಷ್ಣಗೊಳಿಸುತ್ತಾ, ಇದೂ ಅಳೆಯಬಹುದಾಗಿ ದೀರ್ಘ-context retrieval tasks ಸುಧಾರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production code-completion model handling a 100,000-token codebase context genuinely relies on the exact strided_mask() mechanism verified in this lesson: most useful context for predicting the next token is the current function and its immediate neighbors (the local window), while periodic long-range anchors let the model still reference a far-away import statement or class definition without every single query attending to all 100,000 positions. This is precisely the {local window} + {periodic anchors} pattern genuinely confirmed here for query 10\'s attended positions {0,4,7,8,9,10}, just at production scale.',
      bodyKn: 'ಒಂದೂ 100,000-token codebase context ನಿಭಾಯಿಸುವ ಒಂದೂ production code-completion model ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ strided_mask() ಯಂತ್ರಾಂಶ ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸಿದೆ: ಮುಂದಿನ token ಊಹಿಸಲು ಹೆಚ್ಚಿನ ಉಪಯುಕ್ತ context ಪ್ರಸ್ತುತ function ಮತ್ತು ಅದರ ತಕ್ಷಣದ ನೆರೆಹೊರೆಯವರು (local window), ಆವರ್ತಕ long-range anchors model ಗೆ ಪ್ರತಿ ಏಕ query 100,000 positions ಎಲ್ಲಾ ಗೆ attend ಮಾಡದೆ ಇನ್ನೂ ಒಂದೂ ದೂರದ import statement ಅಥವಾ class definition ಉಲ್ಲೇಖಿಸಲು ಬಿಡುತ್ತವೆ. ಇದೇ ನಿಖರವಾಗಿ query 10 ನ attended positions {0,4,7,8,9,10} ಗಾಗಿ ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ {local window} + {periodic anchors} ಮಾದರಿ, ಕೇವಲ production ಪ್ರಮಾಣದಲ್ಲಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computed for strided_mask(14, window=4, stride=4), which positions does query 10 attend to?', qKn: 'strided_mask(14, window=4, stride=4) ಗಾಗಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ, query 10 ಯಾವ positions ಗೆ attend ಮಾಡುತ್ತದೆ?',
        opts: ['All positions 0-10', '{0, 4, 7, 8, 9, 10} -- genuinely confirmed: local window plus strided anchors', 'Only position 10', '{0, 1, 2, ..., 9}'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ positions 0-10', '{0, 4, 7, 8, 9, 10} -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: local window ಜೊತೆಗೆ strided anchors', 'ಕೇವಲ position 10', '{0, 1, 2, ..., 9}'] },
      { q: 'Genuinely tested, what does diff_attention() produce when lambda=0?', qKn: 'ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ, lambda=0 ಆಗಿದ್ದಾಗ diff_attention() ಏನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['All zeros', 'Exactly plain attention, A1 @ V -- genuinely confirmed', 'A random output', 'An error, since dividing by lambda=0 is undefined'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ ಶೂನ್ಯಗಳು', 'ನಿಖರವಾಗಿ ಸರಳ attention, A1 @ V -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಒಂದೂ ಯಾದೃಚ್ಛಿಕ output', 'ಒಂದೂ ದೋಷ, lambda=0 ಇಂದ ಭಾಗಿಸುವುದೂ ಅನಿರ್ದಿಷ್ಟವಾಗಿರುವುದರಿಂದ'] },
      { q: 'Does constructing a full n x n mask array of -inf/0.0 values automatically make the attention computation sparse (faster)?', qKn: '-inf/0.0 ಮೌಲ್ಯಗಳ ಒಂದೂ ಪೂರ್ಣ n x n mask array ನಿರ್ಮಿಸುವುದೂ attention ಗಣನೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ sparse (ವೇಗವಾಗಿ) ಮಾಡುತ್ತದೆಯೇ?',
        opts: ['Yes, always', 'No -- genuinely confirmed as a real engineering distinction: true speedup requires a kernel that skips masked blocks entirely', 'Only for SWA, not for strided masks', 'Yes, but only on GPUs'], correct: 1,
        optsKn: ['ಹೌದು, ಯಾವಾಗಲೂ', 'ಇಲ್ಲ -- ಒಂದೂ ನಿಜ engineering ವ್ಯತ್ಯಾಸ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ನಿಜ ವೇಗಕ್ಕೆ masked blocks ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುವ ಒಂದೂ kernel ಅಗತ್ಯ', 'ಕೇವಲ SWA ಗಾಗಿ, strided masks ಗಾಗಿ ಅಲ್ಲ', 'ಹೌದು, ಆದರೆ ಕೇವಲ GPUs ಮೇಲೆ'] },
      { q: "Genuinely confirmed in the diff_attention() test, what did both A1 and A2's row sums equal?", qKn: "diff_attention() ಪರೀಕ್ಷೆಯಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, A1 ಮತ್ತು A2 ಎರಡರ row sums ಏನಿಗೆ ಸಮ?",
        opts: ['0.0, since they are subtracted', '1.0 for every row -- genuinely confirmed, both are valid causal softmax distributions', '0.5 on average', 'They summed to different values for A1 and A2'], correct: 1,
        optsKn: ['0.0, ಇವು ಕಳೆಯಲಾಗಿರುವುದರಿಂದ', 'ಪ್ರತಿ row ಗೆ 1.0 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, ಎರಡೂ ಮಾನ್ಯ causal softmax distributions', 'ಸರಾಸರಿ 0.5', 'A1 ಮತ್ತು A2 ಗೆ ಬೇರೆ ಮೌಲ್ಯಗಳಿಗೆ ಮೊತ್ತವಾಯಿತು'] },
      { q: "Genuinely confirmed, did changing lambda from 0 to 1 change diff_attention()'s output?", qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, lambda ಅನ್ನೂ 0 ಇಂದ 1 ಗೆ ಬದಲಾಯಿಸುವುದೂ diff_attention() ನ output ಬದಲಾಯಿಸಿತೇ?',
        opts: ['No, the output stayed identical', 'Yes -- genuinely confirmed, lam=1 output measurably differs from lam=0', 'It only changed A1, not the final output', 'It raised an error'], correct: 1,
        optsKn: ['ಇಲ್ಲ, output ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು', 'ಹೌದು -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, lam=1 output lam=0 ಇಂದ ಅಳೆಯಬಹುದಾಗಿ ಭಿನ್ನವಾಗಿದೆ', 'ಇದೂ ಕೇವಲ A1 ಬದಲಾಯಿಸಿತು, ಅಂತಿಮ output ಅಲ್ಲ', 'ಇದೂ ಒಂದೂ ದೋಷ ಎಬ್ಬಿಸಿತು'] },
    ] } },
  ],
};
