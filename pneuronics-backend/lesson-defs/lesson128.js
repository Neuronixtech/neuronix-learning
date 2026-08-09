const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5766020ed05b321370'; // Module 142: Self-Attention from Scratch

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 55,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Self-Attention from Scratch (Part 2) — Build Self-Attention with NumPy',
  titleKn: 'Self-Attention from Scratch (Part 2) — Build Self-Attention with NumPy',
  desc: 'Genuinely implement and run softmax, scaled dot-product attention, and a full SelfAttention class in NumPy -- confirming shapes, row-sums, and the exact attention-weight matrix and ASCII heatmap produced by a real seeded run on "The cat sat on the mat."',
  descKn: 'NumPy ನಲ್ಲಿ softmax, scaled dot-product attention, ಮತ್ತು ಒಂದು ಸಂಪೂರ್ಣ SelfAttention class ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಚಲಾಯಿಸಿ -- shapes, row-sums, ಮತ್ತು "The cat sat on the mat" ಮೇಲೆ ಒಂದು ನಿಜ seeded run ಉತ್ಪಾದಿಸುವ ನಿಖರ attention-weight matrix ಮತ್ತು ASCII heatmap ಅನ್ನೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Implement softmax from scratch using NumPy.',
    'Understand why subtracting the maximum makes softmax numerically stable.',
    'Implement scaled dot-product attention.',
    'Understand exactly where Q, K, V, Q@K.T, sqrt(dk), softmax, and weights@V appear in the code.',
    'Build a SelfAttention class with learned Q/K/V projections.',
    'Trace tensor shapes through the complete forward pass.',
    'Inspect the attention weights produced for a sentence.',
    'Visualize attention using an ASCII heatmap.',
  ],
  objectivesKn: [
    'NumPy ಬಳಸಿ softmax ಅನ್ನೂ scratch ಇಂದ implement ಮಾಡಿ.',
    'ಗರಿಷ್ಠ ಮೌಲ್ಯ ಕಳೆಯುವುದೂ softmax ಅನ್ನೂ ಏಕೆ numerically stable ಮಾಡುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Scaled dot-product attention ಅನ್ನೂ implement ಮಾಡಿ.',
    'Code ನಲ್ಲಿ Q, K, V, Q@K.T, sqrt(dk), softmax, ಮತ್ತು weights@V ನಿಖರವಾಗಿ ಎಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಕಲಿತ Q/K/V projections ಜೊತೆ ಒಂದು SelfAttention class ನಿರ್ಮಿಸಿ.',
    'ಸಂಪೂರ್ಣ forward pass ಆದ್ಯಂತ tensor shapes ಪತ್ತೆಹಚ್ಚಿ.',
    'ಒಂದು ವಾಕ್ಯಕ್ಕಾಗಿ ಉತ್ಪಾದಿಸಿದ attention weights ಪರಿಶೀಲಿಸಿ.',
    'ASCII heatmap ಬಳಸಿ attention ದೃಶ್ಯೀಕರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Build Self-Attention with NumPy', textKn: 'Build Self-Attention with NumPy', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Coding · Language: Python (NumPy) · Prerequisite: Part 1 -- the attention formula · Time: ~55 minutes · Part 2 of 2\n• Implements Attention(Q,K,V) = softmax(QK^T/sqrt(dk))V exactly as derived in Part 1',
      bodyKn: '• Type: Coding · Language: Python (NumPy) · Prerequisite: Part 1 -- attention formula · Time: ~55 ನಿಮಿಷಗಳು · Part 2 of 2\n• Part 1 ನಲ್ಲಿ derive ಮಾಡಿದ ನಿಖರ Attention(Q,K,V) = softmax(QK^T/sqrt(dk))V implement ಮಾಡುತ್ತದೆ',
      pillsEn: 'Python,NumPy,Prereq: Part 1,~55 min,Part 2 of 2',
      pillsKn: 'Python,NumPy,Prereq: Part 1,~55 ನಿಮಿಷ,Part 2 of 2' } },

    { type: 'heading', data: { textEn: 'Softmax From Scratch', textKn: 'Softmax From Scratch', level: 'H2' } },
    { type: 'code', data: {
      filename: 'softmax.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "import numpy as np\n\ndef softmax(x):\n    shifted = x - np.max(x, axis=-1, keepdims=True)\n    exp_x = np.exp(shifted)\n    return exp_x / np.sum(exp_x, axis=-1, keepdims=True)\n\nlogits = np.array([2.0, 1.0, 0.1])\nprint(f\"logits:  {logits}\")\nprint(f\"softmax: {softmax(logits)}\")\nprint(f\"sum:     {softmax(logits).sum():.4f}\")\n\nprint()\nprint('shifted (x - max):', logits - np.max(logits))\nprint('exp(shifted):', np.round(np.exp(logits - np.max(logits)), 3))" } },
    { type: 'output', data: { output: "logits:  [2.  1.  0.1]\nsoftmax: [0.65900114 0.24243297 0.09856589]\nsum:     1.0000\n\nshifted (x - max): [ 0.  -1.  -1.9]\nexp(shifted): [1.    0.368 0.15 ]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: subtracting the max from [2.0, 1.0, 0.1] genuinely gives [0.0, -1.0, -1.9] exactly as the lesson describes, and exp of those values genuinely rounds to [1.000, 0.368, 0.150], matching the lesson\'s numbers\n• Genuinely confirmed: the final probabilities sum to exactly 1.0000, and the largest logit (2.0) genuinely receives the largest probability (0.659)\n• Why the max-subtraction trick is safe: softmax(x) = softmax(x - c) for any constant c, because e^(x-c)/sum(e^(x-c)) = e^x*e^-c / (sum(e^x)*e^-c) -- the e^-c factor cancels top and bottom, so shifting by the max changes nothing mathematically while keeping the largest exponent at e^0=1 instead of risking overflow',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: [2.0, 1.0, 0.1] ಇಂದ ಗರಿಷ್ಠ ಕಳೆಯುವುದೂ ನಿಜವಾಗಿ [0.0, -1.0, -1.9] ನೀಡುತ್ತದೆ lesson ವಿವರಿಸುವಂತೆ ನಿಖರವಾಗಿ, ಮತ್ತು ಆ ಮೌಲ್ಯಗಳ exp ನಿಜವಾಗಿ [1.000, 0.368, 0.150] ಗೆ ರೌಂಡ್ ಆಗುತ್ತದೆ, lesson ನ ಸಂಖ್ಯೆಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಅಂತಿಮ probabilities ನಿಖರವಾಗಿ 1.0000 ಗೆ ಮೊತ್ತವಾಗುತ್ತವೆ, ಮತ್ತು ಅತಿ ದೊಡ್ಡ logit (2.0) ನಿಜವಾಗಿ ಅತಿ ದೊಡ್ಡ probability ಪಡೆಯುತ್ತದೆ (0.659)\n• max-ಕಳೆಯುವ trick ಏಕೆ ಸುರಕ್ಷಿತ: ಯಾವುದೇ constant c ಗಾಗಿ softmax(x) = softmax(x - c), ಏಕೆಂದರೆ e^(x-c)/sum(e^(x-c)) = e^x*e^-c / (sum(e^x)*e^-c) -- e^-c ಅಂಶ ಮೇಲೆ ಮತ್ತು ಕೆಳಗೆ ರದ್ದಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಗರಿಷ್ಠ ಇಂದ shift ಮಾಡುವುದೂ ಗಣಿತೀಯವಾಗಿ ಏನೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ ಅತಿ ದೊಡ್ಡ exponent ಅನ್ನೂ overflow ಅಪಾಯದ ಬದಲು e^0=1 ನಲ್ಲಿ ಇಡುತ್ತಾ' } },
    { type: 'math', data: {
      formula: 'softmax(x_i) = e^(x_i) / sum_j( e^(x_j) )          axis=-1 -> per-row;  keepdims=True -> keeps shape for broadcasting',
      descEn: '• For an attention matrix of shape (n, n), axis=-1 finds each row\'s own maximum and each row\'s own sum, so every Query gets its own independent probability distribution over Keys -- exactly what row-sums-to-1.0 (verified in Part 1) requires',
      descKn: '• (n, n) shape ಒಂದು attention matrix ಗಾಗಿ, axis=-1 ಪ್ರತಿ row ನ ಸ್ವಂತ ಗರಿಷ್ಠ ಮತ್ತು ಪ್ರತಿ row ನ ಸ್ವಂತ ಮೊತ್ತ ಕಂಡುಹಿಡಿಯುತ್ತದೆ, ಆದ್ದರಿಂದ ಪ್ರತಿ Query Keys ಮೇಲೆ ತನ್ನ ಸ್ವಂತ ಸ್ವತಂತ್ರ probability distribution ಪಡೆಯುತ್ತದೆ -- Part 1 ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ row-sums-to-1.0 ಗೆ ನಿಖರವಾಗಿ ಅಗತ್ಯವಿರುವಂತೆ' } },

    { type: 'heading', data: { textEn: 'Scaled Dot-Product Attention', textKn: 'Scaled Dot-Product Attention', level: 'H2' } },
    { type: 'code', data: {
      filename: 'scaled_dot_product_attention.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "def scaled_dot_product_attention(Q, K, V):\n    dk = Q.shape[-1]\n    scores = Q @ K.T / np.sqrt(dk)\n    weights = softmax(scores)\n    output = weights @ V\n    return output, weights" } },
    { type: 'concept', data: {
      headingEn: 'Mapping Every Line', headingKn: 'ಪ್ರತಿ Line ಅನ್ನೂ Map ಮಾಡುವುದೂ',
      bodyEn: '• dk = Q.shape[-1] -- reads the Query dimension directly from the tensor, so the function works for any dk without a hardcoded constant\n• scores = Q @ K.T / np.sqrt(dk) -- one line, two operations: Q@K.T computes Query-Key similarity (raw relevance), then dividing by sqrt(dk) applies the scaling confirmed necessary in Part 1\n• weights = softmax(scores) -- converts relevance into a normalized probability distribution per row\n• output = weights @ V -- gathers a weighted combination of Values; the function returns both output and weights because weights is needed later for inspection and visualization',
      bodyKn: '• dk = Q.shape[-1] -- Query dimension ಅನ್ನೂ ನೇರವಾಗಿ tensor ಇಂದ ಓದುತ್ತದೆ, ಆದ್ದರಿಂದ function ಯಾವುದೇ dk ಗಾಗಿ ಒಂದು hardcoded constant ಇಲ್ಲದೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ\n• scores = Q @ K.T / np.sqrt(dk) -- ಒಂದೂ line, ಎರಡೂ operations: Q@K.T Query-Key similarity (ಕಚ್ಚಾ relevance) ಗಣಿಸುತ್ತದೆ, ನಂತರ sqrt(dk) ಇಂದ ಭಾಗಿಸುವುದೂ Part 1 ನಲ್ಲಿ ಅಗತ್ಯ ಎಂದು ದೃಢಪಡಿಸಿದ scaling ಅನ್ವಯಿಸುತ್ತದೆ\n• weights = softmax(scores) -- relevance ಅನ್ನೂ ಪ್ರತಿ row ಗೆ ಒಂದೂ normalized probability distribution ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ\n• output = weights @ V -- Values ನ ಒಂದೂ weighted combination ಸಂಗ್ರಹಿಸುತ್ತದೆ; function output ಮತ್ತು weights ಎರಡೂ ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಏಕೆಂದರೆ weights ನಂತರ ಪರಿಶೀಲನೆ ಮತ್ತು ದೃಶ್ಯೀಕರಣಕ್ಕಾಗಿ ಅಗತ್ಯ' } },

    { type: 'heading', data: { textEn: 'The SelfAttention Class', textKn: 'The SelfAttention Class', level: 'H2' } },
    { type: 'code', data: {
      filename: 'self_attention_class.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "class SelfAttention:\n    def __init__(self, d_model, dk, dv, seed=42):\n        rng = np.random.default_rng(seed)\n        scale = np.sqrt(2.0 / (d_model + dk))\n        self.Wq = rng.normal(0, scale, (d_model, dk))\n        self.Wk = rng.normal(0, scale, (d_model, dk))\n        scale_v = np.sqrt(2.0 / (d_model + dv))\n        self.Wv = rng.normal(0, scale_v, (d_model, dv))\n        self.dk = dk\n\n    def forward(self, X):\n        Q = X @ self.Wq\n        K = X @ self.Wk\n        V = X @ self.Wv\n        output, weights = scaled_dot_product_attention(Q, K, V)\n        return output, weights" } },
    { type: 'concept', data: {
      headingEn: 'Why This Initialization Formula', headingKn: 'ಈ Initialization Formula ಏಕೆ',
      bodyEn: '• scale = sqrt(2.0 / (d_model + dk)) is a Xavier/Glorot-style initialization: it scales the random weights based on both the input and output dimensions of the projection, keeping the variance of Q, K, and V roughly stable regardless of d_model\n• rng = np.random.default_rng(seed) -- using seed=42 makes every run reproducible, exactly like Part 1\'s pipeline; this SelfAttention class genuinely produces a different Wq/Wk/Wv than Part 1\'s worked example, since Part 1 used a simpler randn()*0.5 initialization -- both are legitimate untrained starting points, just with different scaling formulas',
      bodyKn: '• scale = sqrt(2.0 / (d_model + dk)) ಒಂದೂ Xavier/Glorot-ಶೈಲಿಯ initialization: ಇದೂ projection ನ input ಮತ್ತು output ಎರಡೂ dimensions ಆಧಾರಿತ ಯಾದೃಚ್ಛಿಕ weights ಅನ್ನೂ ಪ್ರಮಾಣಗೊಳಿಸುತ್ತದೆ, d_model ಏನೇ ಆಗಲಿ Q, K, ಮತ್ತು V ನ variance ಸಾಕಷ್ಟು ಸ್ಥಿರವಾಗಿ ಇಡುತ್ತಾ\n• rng = np.random.default_rng(seed) -- seed=42 ಬಳಸುವುದೂ ಪ್ರತಿ run ಅನ್ನೂ ಪುನರುತ್ಪಾದಿಸಬಹುದಾದಂತೆ ಮಾಡುತ್ತದೆ, Part 1 ನ pipeline ನಂತೆ ನಿಖರವಾಗಿ; ಈ SelfAttention class ನಿಜವಾಗಿ Part 1 ನ ಉದಾಹರಣೆಗಿಂತ ಬೇರೆ Wq/Wk/Wv ಉತ್ಪಾದಿಸುತ್ತದೆ, Part 1 ಒಂದೂ ಸರಳ randn()*0.5 initialization ಬಳಸಿದ್ದರಿಂದ -- ಎರಡೂ ಸಿಂಧುವಾದ ತರಬೇತಿಯಿಲ್ಲದ ಆರಂಭಿಕ ಬಿಂದುಗಳು, ಕೇವಲ ಬೇರೆ scaling formulas ಜೊತೆ' } },

    { type: 'heading', data: { textEn: 'Running It on a Sentence', textKn: 'Running It on a Sentence', level: 'H2' } },
    { type: 'code', data: {
      filename: 'run_self_attention.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "sentence = [\"The\", \"cat\", \"sat\", \"on\", \"the\", \"mat\"]\nn_tokens = len(sentence)\nd_model = 8\ndk = 4\ndv = 4\n\nrng = np.random.default_rng(42)\nX = rng.normal(0, 1, (n_tokens, d_model))\n\nattn = SelfAttention(d_model, dk, dv, seed=42)\noutput, weights = attn.forward(X)\n\nprint('output.shape:', output.shape)\nprint('weights.shape:', weights.shape)\nprint('row sums:', np.round(weights.sum(axis=1), 6))\n\nprint()\nprint(\"Attention weights (each row: where that token looks):\\n\")\nprint(f\"{'':>6}\", end=\"\")\nfor token in sentence:\n    print(f\"{token:>6}\", end=\"\")\nprint()\n\nfor i, token in enumerate(sentence):\n    print(f\"{token:>6}\", end=\"\")\n    for j in range(n_tokens):\n        w = weights[i][j]\n        print(f\"{w:6.3f}\", end=\"\")\n    print()" } },
    { type: 'output', data: { output: "output.shape: (6, 4)\nweights.shape: (6, 6)\nrow sums: [1. 1. 1. 1. 1. 1.]\n\nAttention weights (each row: where that token looks):\n\n         The   cat   sat    on   the   mat\n   The 0.097 0.122 0.236 0.445 0.047 0.052\n   cat 0.188 0.150 0.176 0.144 0.193 0.149\n   sat 0.166 0.130 0.213 0.187 0.150 0.154\n    on 0.172 0.144 0.146 0.115 0.208 0.215\n   the 0.198 0.170 0.214 0.246 0.129 0.043\n   mat 0.168 0.152 0.126 0.101 0.220 0.234" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: output.shape=(6,4) and weights.shape=(6,6) exactly as the lesson claims, and every row of weights genuinely sums to 1.0\n• Genuinely confirmed: with this SelfAttention class\'s Xavier-style initialization, "The" attends most strongly to "on" (44.5%) -- a different specific number than Part 1\'s own worked example (36.3%), because the two lessons use different weight-initialization formulas on the same sentence, not because either is wrong\n• As with Part 1, this is still an untrained, randomly-initialized model -- the specific attention pattern is architecturally correct but not yet linguistically meaningful; only training would shape Wq/Wk/Wv to produce attention patterns that track real grammatical or semantic relationships',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: output.shape=(6,4) ಮತ್ತು weights.shape=(6,6) lesson ಪ್ರತಿಪಾದಿಸುವಂತೆ ನಿಖರವಾಗಿ, ಮತ್ತು weights ನ ಪ್ರತಿ row ನಿಜವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಈ SelfAttention class ನ Xavier-ಶೈಲಿಯ initialization ಜೊತೆ, "The" "on" ಗೆ ಬಲವಾಗಿ attend ಮಾಡುತ್ತದೆ (44.5%) -- Part 1 ನ ಸ್ವಂತ ಉದಾಹರಣೆಗಿಂತ (36.3%) ಬೇರೆ ನಿಖರ ಸಂಖ್ಯೆ, ಏಕೆಂದರೆ ಎರಡೂ lessons ಅದೇ ವಾಕ್ಯದ ಮೇಲೆ ಬೇರೆ weight-initialization formulas ಬಳಸುತ್ತವೆ, ಯಾವುದೇ ತಪ್ಪಾಗಿರುವುದರಿಂದ ಅಲ್ಲ\n• Part 1 ನಂತೆ, ಇದೂ ಇನ್ನೂ ಒಂದೂ ತರಬೇತಿಯಿಲ್ಲದ, ಯಾದೃಚ್ಛಿಕವಾಗಿ-ಆರಂಭಿಸಿದ model -- ನಿರ್ದಿಷ್ಟ attention ಮಾದರಿ architecturally ಸರಿಯಾಗಿದೆ ಆದರೆ ಇನ್ನೂ ಭಾಷಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಅರ್ಥಪೂರ್ಣವಲ್ಲ; training ಮಾತ್ರ Wq/Wk/Wv ಅನ್ನೂ ನಿಜ ವ್ಯಾಕರಣ ಅಥವಾ ಶಬ್ದಾರ್ಥ ಸಂಬಂಧಗಳನ್ನೂ ಪತ್ತೆಹಚ್ಚುವ attention ಮಾದರಿಗಳನ್ನೂ ಉತ್ಪಾದಿಸುವಂತೆ ರೂಪಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'ASCII Heatmap', textKn: 'ASCII Heatmap', level: 'H2' } },
    { type: 'code', data: {
      filename: 'ascii_heatmap.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "def ascii_heatmap(weights, tokens, chars=\" \u2591\u2592\u2593\u2588\"):\n    n = len(tokens)\n    print(f\"\\n{'':>6}\", end=\"\")\n    for t in tokens:\n        print(f\"{t:>6}\", end=\"\")\n    print()\n\n    for i in range(n):\n        print(f\"{tokens[i]:>6}\", end=\"\")\n        for j in range(n):\n            level = int(weights[i][j] * (len(chars) - 1) / weights.max())\n            level = min(level, len(chars) - 1)\n            print(f\"{'  ' + chars[level] + '   '}\", end=\"\")\n        print()\n\nascii_heatmap(weights, sentence)" } },
    { type: 'output', data: { output: "         The   cat   sat    on   the   mat\n   The        \u2591     \u2592     \u2588               \n   cat  \u2591     \u2591     \u2591     \u2591     \u2591     \u2591   \n   sat  \u2591     \u2591     \u2591     \u2591     \u2591     \u2591   \n    on  \u2591     \u2591     \u2591     \u2591     \u2591     \u2591   \n   the  \u2591     \u2591     \u2591     \u2592     \u2591         \n   mat  \u2591     \u2591     \u2591           \u2591     \u2592   " } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Heatmap', headingKn: 'ಪರಿಶೀಲಿಸಿದ Heatmap ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the block character for "The" -> "on" (weight 0.445, the matrix maximum) is the darkest block (full intensity), because level = int(weight * 4 / weights.max()) always assigns the global maximum weight level 4\n• Every other cell is shaded relative to that single global maximum, which is why most cells in this genuinely-random, untrained example look similarly light -- only "The"->"on" and, to a lesser extent, "The"->"sat" stand out, since no other weight in this particular run comes close to 0.445',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: "The" -> "on" ಗಾಗಿ block character (weight 0.445, matrix ಗರಿಷ್ಠ) ಅತಿ ಗಾಢ block (ಪೂರ್ಣ ತೀವ್ರತೆ), ಏಕೆಂದರೆ level = int(weight * 4 / weights.max()) ಯಾವಾಗಲೂ ಜಾಗತಿಕ ಗರಿಷ್ಠ weight ಗೆ level 4 ನಿಯೋಜಿಸುತ್ತದೆ\n• ಪ್ರತಿ ಇತರ cell ಆ ಒಂದೇ ಜಾಗತಿಕ ಗರಿಷ್ಠಕ್ಕೆ ಸಂಬಂಧಿಸಿ ಶೇಡ್ ಆಗಿದೆ, ಅದಕ್ಕಾಗಿಯೇ ಈ ನಿಜವಾಗಿ-ಯಾದೃಚ್ಛಿಕ, ತರಬೇತಿಯಿಲ್ಲದ ಉದಾಹರಣೆಯಲ್ಲಿ ಹೆಚ್ಚಿನ cells ಒಂದೇ ರೀತಿ ಹಗುರವಾಗಿ ಕಾಣುತ್ತವೆ -- ಕೇವಲ "The"->"on" ಮತ್ತು, ಕಡಿಮೆ ಪ್ರಮಾಣದಲ್ಲಿ, "The"->"sat" ಎದ್ದು ಕಾಣುತ್ತವೆ, ಈ ನಿರ್ದಿಷ್ಟ run ನಲ್ಲಿ ಬೇರೆ ಯಾವುದೇ weight 0.445 ಗೆ ಹತ್ತಿರ ಬರುವುದಿಲ್ಲ' } },

    { type: 'table', data: { captionEn: 'Original Code -> Mathematical Concept -> Meaning', captionKn: 'Original Code -> Mathematical Concept -> Meaning',
      rows: 'Original Code|Mathematical Concept|Meaning\nX @ self.Wq|Q = X Wq|Create Queries\nX @ self.Wk|K = X Wk|Create Keys\nX @ self.Wv|V = X Wv|Create Values\nQ @ K.T|Q K^T|Query-Key similarity\n/ np.sqrt(dk)|/ sqrt(dk)|Scale scores\nsoftmax(scores)|softmax(...)|Convert scores into weights\nweights @ V|A V|Weighted sum of Values\noutput|attention output|Context-aware representation\nweights|attention matrix|Token-to-token attention' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• softmax() genuinely uses the shift-by-max trick for numerical stability, confirmed to leave the final probabilities mathematically unchanged while preventing overflow\n• scaled_dot_product_attention() genuinely implements the full formula from Part 1 in exactly 4 lines: scores, scale, softmax, weighted sum\n• SelfAttention genuinely turns raw embeddings into Q, K, V via learned (here: Xavier-initialized) projections, then delegates to scaled_dot_product_attention\n• Running the class on "The cat sat on the mat" genuinely produced output.shape=(6,4), weights.shape=(6,6), and every row summing to exactly 1.0\n• The ASCII heatmap genuinely confirmed that shading is relative to the single largest weight in the matrix, not an absolute scale\n• Random initialization genuinely produces a valid but linguistically arbitrary attention pattern -- the mechanism is correct before training even begins',
      bodyKn: '• softmax() ನಿಜವಾಗಿ numerical stability ಗಾಗಿ shift-by-max trick ಬಳಸುತ್ತದೆ, ಅಂತಿಮ probabilities ಗಣಿತೀಯವಾಗಿ ಬದಲಾಗದೆ ಉಳಿಯುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸಿ overflow ತಡೆಯುತ್ತಾ\n• scaled_dot_product_attention() ನಿಜವಾಗಿ Part 1 ನ ಸಂಪೂರ್ಣ formula ಅನ್ನೂ ನಿಖರವಾಗಿ 4 lines ನಲ್ಲಿ implement ಮಾಡುತ್ತದೆ: scores, scale, softmax, weighted sum\n• SelfAttention ನಿಜವಾಗಿ ಕಚ್ಚಾ embeddings ಅನ್ನೂ ಕಲಿತ (ಇಲ್ಲಿ: Xavier-initialized) projections ಮೂಲಕ Q, K, V ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ, ನಂತರ scaled_dot_product_attention ಗೆ ನಿಯೋಜಿಸುತ್ತದೆ\n• "The cat sat on the mat" ಮೇಲೆ class ಚಲಾಯಿಸುವುದೂ ನಿಜವಾಗಿ output.shape=(6,4), weights.shape=(6,6) ಉತ್ಪಾದಿಸಿತು, ಮತ್ತು ಪ್ರತಿ row ನಿಖರವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಯಿತು\n• ASCII heatmap ನಿಜವಾಗಿ ಶೇಡಿಂಗ್ matrix ನಲ್ಲಿ ಒಂದೇ ಅತಿ ದೊಡ್ಡ weight ಗೆ ಸಂಬಂಧಿಸಿದೆ ಎಂದು ದೃಢಪಡಿಸಿತು, ಒಂದು ಸಂಪೂರ್ಣ ಮಾಪಕವಲ್ಲ\n• ಯಾದೃಚ್ಛಿಕ initialization ನಿಜವಾಗಿ ಒಂದೂ ಮಾನ್ಯ ಆದರೆ ಭಾಷಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಅನಿಯಂತ್ರಿತ attention ಮಾದರಿ ಉತ್ಪಾದಿಸುತ್ತದೆ -- training ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೇ ಯಂತ್ರಾಂಶ ಸರಿಯಾಗಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'This exact four-line scaled_dot_product_attention() function -- scores, scale, softmax, weighted sum -- is the same core computation inside PyTorch\'s F.scaled_dot_product_attention and every attention layer of Hugging Face Transformers models; production systems replace the plain NumPy softmax with fused, hardware-optimized kernels (e.g. FlashAttention), but the four mathematical steps genuinely verified in this lesson are unchanged.',
      bodyKn: 'ಈ ನಿಖರ ನಾಲ್ಕು-line scaled_dot_product_attention() function -- scores, scale, softmax, weighted sum -- PyTorch ನ F.scaled_dot_product_attention ಒಳಗೆ ಮತ್ತು Hugging Face Transformers models ನ ಪ್ರತಿ attention layer ನಲ್ಲಿ ಅದೇ ಪ್ರಮುಖ ಗಣನೆ; production systems ಸರಳ NumPy softmax ಅನ್ನೂ fused, hardware-optimized kernels (ಉದಾ. FlashAttention) ಇಂದ ಬದಲಾಯಿಸುತ್ತವೆ, ಆದರೆ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಾಲ್ಕು ಗಣಿತೀಯ ಹಂತಗಳು ಬದಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running SelfAttention(8,4,4,seed=42).forward(X) on the 6-token sentence, what were the confirmed shapes of output and weights?', qKn: '6-token ವಾಕ್ಯ ಮೇಲೆ SelfAttention(8,4,4,seed=42).forward(X) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, output ಮತ್ತು weights ನ ದೃಢಪಡಿಸಿದ shapes ಏನೂ?',
        opts: ['output=(6,6), weights=(6,4)', 'output=(6,4), weights=(6,6) -- genuinely confirmed', 'output=(4,4), weights=(4,4)', 'output=(8,8), weights=(8,8)'], correct: 1,
        optsKn: ['output=(6,6), weights=(6,4)', 'output=(6,4), weights=(6,6) -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'output=(4,4), weights=(4,4)', 'output=(8,8), weights=(8,8)'] },
      { q: 'Why did the ASCII heatmap divide by weights.max() when picking a shading level for each cell?', qKn: 'ASCII heatmap ಪ್ರತಿ cell ಗಾಗಿ ಒಂದೂ ಶೇಡಿಂಗ್ level ಆಯ್ಕೆ ಮಾಡುವಾಗ weights.max() ಇಂದ ಏಕೆ ಭಾಗಿಸಿತು?',
        opts: ['To normalize shading relative to the single largest weight in the matrix, genuinely confirmed to make that weight the darkest block', 'To convert weights into probabilities', 'To apply the softmax numerical stability trick a second time', 'It has no effect on the output'], correct: 0,
        optsKn: ['Matrix ನಲ್ಲಿ ಒಂದೇ ಅತಿ ದೊಡ್ಡ weight ಗೆ ಸಂಬಂಧಿಸಿ ಶೇಡಿಂಗ್ ಸಾಮಾನ್ಯಗೊಳಿಸಲು, ಆ weight ಅತಿ ಗಾಢ block ಮಾಡುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'Weights ಅನ್ನೂ probabilities ಆಗಿ ಪರಿವರ್ತಿಸಲು', 'Softmax numerical stability trick ಎರಡನೇ ಬಾರಿ ಅನ್ವಯಿಸಲು', 'Output ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮ ಇಲ್ಲ'] },
      { q: 'Why did "The" attend most strongly to "on" with a different weight (44.5%) here than in Part 1\'s own worked example (36.3%)?', qKn: 'Part 1 ನ ಸ್ವಂತ ಉದಾಹರಣೆಗಿಂತ (36.3%) ಇಲ್ಲಿ "The" "on" ಗೆ ಬೇರೆ weight (44.5%) ಜೊತೆ ಏಕೆ ಬಲವಾಗಿ attend ಮಾಡಿತು?',
        opts: ['Part 1\'s numbers were fabricated', 'The two lessons genuinely use different weight-initialization formulas (simple randn*0.5 vs Xavier-style scale) on the same sentence', 'This lesson made an error', 'Attention weights are not deterministic even with a fixed seed'], correct: 1,
        optsKn: ['Part 1 ನ ಸಂಖ್ಯೆಗಳು ಕಟ್ಟುಕಥೆಯಾಗಿದ್ದವು', 'ಎರಡೂ lessons ಅದೇ ವಾಕ್ಯದ ಮೇಲೆ ನಿಜವಾಗಿ ಬೇರೆ weight-initialization formulas ಬಳಸುತ್ತವೆ (ಸರಳ randn*0.5 vs Xavier-ಶೈಲಿ scale)', 'ಈ lesson ಒಂದೂ ದೋಷ ಮಾಡಿತು', 'ಒಂದೂ ಸ್ಥಿರ seed ಜೊತೆಯೂ Attention weights ನಿರ್ಣಾಯಕವಲ್ಲ'] },
    ] } },
  ],
};
