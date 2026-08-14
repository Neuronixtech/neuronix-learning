const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5766020ed05b321370'; // Module 142: Self-Attention from Scratch

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 55,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Self-Attention from Scratch (Part 3) — Multi-Head Attention & Causal Masking',
  titleKn: 'Self-Attention from Scratch (Part 3) — Multi-Head Attention & Causal Masking',
  desc: 'Genuinely run PyTorch\'s nn.MultiheadAttention on a real 6-token input and confirm every claimed shape, then genuinely build and apply a causal mask -- confirming a masked position gets exactly 0.0 attention weight and that softmax([2.0,1.0,-inf]) exactly matches the lesson\'s own numbers, while also catching a real nuance the lesson glosses over: the returned weights tensor is averaged across heads by default.',
  descKn: 'PyTorch ನ nn.MultiheadAttention ಅನ್ನೂ ಒಂದೂ ನಿಜ 6-token input ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಪ್ರತಿಪಾದಿಸಿದ ಪ್ರತಿ shape ಅನ್ನೂ ದೃಢಪಡಿಸಿ, ನಂತರ ಒಂದೂ causal mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಅನ್ವಯಿಸಿ -- ಒಂದೂ masked ಸ್ಥಾನ ನಿಖರವಾಗಿ 0.0 attention weight ಪಡೆಯುತ್ತದೆ ಮತ್ತು softmax([2.0,1.0,-inf]) lesson ನ ಸ್ವಂತ ಸಂಖ್ಯೆಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ಜೊತೆಗೆ lesson ಗ್ಲಾಸ್ ಮಾಡುವ ಒಂದೂ ನಿಜ ಸೂಕ್ಷ್ಮತೆ ಹಿಡಿಯುತ್ತಾ: ಹಿಂತಿರುಗಿಸಿದ weights tensor ಡೀಫಾಲ್ಟ್ ಆಗಿ heads ಆದ್ಯಂತ ಸರಾಸರಿಗೊಳಿಸಲ್ಪಟ್ಟಿದೆ.',
  objectives: [
    'Explain why Transformers use multiple attention heads.',
    'Understand how nn.MultiheadAttention implements the Q/K/V mechanism from Part 2.',
    'Match the PyTorch code to Q/K/V projections, head splitting, scaled dot-product attention, softmax, weighted Values, and concatenation.',
    'Understand why different heads can learn different relationships.',
    'Understand causal masking.',
    'Explain why causal masking is required for autoregressive generation.',
    'Connect the complete code back to the attention formula.',
  ],
  objectivesKn: [
    'Transformers ಬಹು attention heads ಏಕೆ ಬಳಸುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.',
    'nn.MultiheadAttention Part 2 ಇಂದ Q/K/V mechanism ಹೇಗೆ implement ಮಾಡುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'PyTorch code ಅನ್ನೂ Q/K/V projections, head splitting, scaled dot-product attention, softmax, weighted Values, ಮತ್ತು concatenation ಗೆ ಹೊಂದಿಸಿ.',
    'ಬೇರೆ heads ಬೇರೆ ಸಂಬಂಧಗಳನ್ನೂ ಏಕೆ ಕಲಿಯಬಹುದು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Causal masking ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Autoregressive generation ಗಾಗಿ causal masking ಏಕೆ ಅಗತ್ಯ ಎಂದು ವಿವರಿಸಿ.',
    'ಸಂಪೂರ್ಣ code ಅನ್ನೂ attention formula ಗೆ ಮತ್ತೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multi-Head Attention & Causal Masking', textKn: 'Multi-Head Attention & Causal Masking', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Coding · Language: Python (PyTorch) · Prerequisite: Part 2 -- the NumPy attention pipeline · Time: ~55 minutes · Part 3 of 3',
      bodyKn: '• Type: Coding · Language: Python (PyTorch) · Prerequisite: Part 2 -- NumPy attention pipeline · Time: ~55 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,PyTorch,Prereq: Part 2,~55 min,Part 3 of 3',
      pillsKn: 'Python,PyTorch,Prereq: Part 2,~55 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Why Multiple Heads?', textKn: 'Why Multiple Heads?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Attention Distribution Cannot Hold Everything', headingKn: 'ಒಂದೂ Attention Distribution ಎಲ್ಲವನ್ನೂ ಹಿಡಿಯಲಾಗುವುದಿಲ್ಲ',
      bodyEn: '• Part 2\'s SelfAttention had exactly one set of Wq/Wk/Wv, producing exactly one (6,6) attention matrix -- every relationship a sentence contains (subject-verb, pronoun-noun, adjacent-word, long-range) has to compete for space in that single distribution\n• Multiple heads give each relationship type its own learned Q/K/V subspace, computed in parallel and combined afterward -- an architectural point, not a claim about what any specific untrained head will learn',
      bodyKn: '• Part 2 ನ SelfAttention ನಿಖರವಾಗಿ ಒಂದೂ Wq/Wk/Wv ಸೆಟ್ ಹೊಂದಿತ್ತು, ನಿಖರವಾಗಿ ಒಂದೂ (6,6) attention matrix ಉತ್ಪಾದಿಸಿತು -- ಒಂದೂ ವಾಕ್ಯ ಒಳಗೊಂಡ ಪ್ರತಿ ಸಂಬಂಧ (subject-verb, pronoun-noun, adjacent-word, long-range) ಆ ಒಂದೇ distribution ನಲ್ಲಿ ಜಾಗಕ್ಕಾಗಿ ಸ್ಪರ್ಧಿಸಬೇಕು\n• ಬಹು heads ಪ್ರತಿ ಸಂಬಂಧ ಪ್ರಕಾರಕ್ಕೂ ತನ್ನ ಸ್ವಂತ ಕಲಿತ Q/K/V subspace ನೀಡುತ್ತವೆ, ಸಮಾನಾಂತರವಾಗಿ ಗಣಿಸಲ್ಪಟ್ಟು ನಂತರ ಸಂಯೋಜಿಸಲ್ಪಡುತ್ತವೆ -- ಒಂದೂ architectural ಅಂಶ, ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ತರಬೇತಿಯಿಲ್ಲದ head ಏನೂ ಕಲಿಯುತ್ತದೆ ಎಂಬ ಹಕ್ಕಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Building Multi-Head Attention in PyTorch', textKn: 'Building Multi-Head Attention in PyTorch', level: 'H2' } },
    { type: 'code', data: {
      filename: 'multihead_attention.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "import torch\nimport torch.nn as nn\n\ntorch.manual_seed(42)\n\nd_model = 8\nn_heads = 2\nseq_len = 6\nbatch_size = 1\n\nmha = nn.MultiheadAttention(\n    embed_dim=d_model,\n    num_heads=n_heads,\n    batch_first=True\n)\n\nX = torch.randn(batch_size, seq_len, d_model)\n\noutput, weights = mha(X, X, X)\n\nprint(\"Input shape: \", X.shape)\nprint(\"Output shape:\", output.shape)\nprint(\"Weights shape:\", weights.shape)\nprint(\"d_head:\", d_model // n_heads)" } },
    { type: 'output', data: { output: "Input shape:  torch.Size([1, 6, 8])\nOutput shape: torch.Size([1, 6, 8])\nWeights shape: torch.Size([1, 6, 6])\nd_head: 4" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: Input shape (1,6,8) and Output shape (1,6,8) match exactly, and d_head = d_model // n_heads = 8 // 2 = 4 as claimed\n• Worth an honest nuance the lesson does not mention: the returned weights tensor has shape (1,6,6), not (1,2,6,6) -- by default, nn.MultiheadAttention\'s average_attn_weights=True averages the per-head attention matrices into a single (batch, seq, seq) tensor before returning it. Each head genuinely does compute its own (6,6) attention pattern internally (as the lesson\'s diagrams describe), but you only get to inspect those individual per-head matrices if you explicitly pass average_attn_weights=False when calling mha(...)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: Input shape (1,6,8) ಮತ್ತು Output shape (1,6,8) ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ, ಮತ್ತು d_head = d_model // n_heads = 8 // 2 = 4 ಪ್ರತಿಪಾದಿಸುವಂತೆ\n• lesson ಉಲ್ಲೇಖಿಸದ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ ಸೂಕ್ಷ್ಮತೆ ಯೋಗ್ಯ: ಹಿಂತಿರುಗಿಸಿದ weights tensor shape (1,6,6) ಹೊಂದಿದೆ, (1,2,6,6) ಅಲ್ಲ -- ಡೀಫಾಲ್ಟ್ ಆಗಿ, nn.MultiheadAttention ನ average_attn_weights=True per-head attention matrices ಅನ್ನೂ ಹಿಂತಿರುಗಿಸುವ ಮೊದಲು ಒಂದೂ (batch, seq, seq) tensor ಆಗಿ ಸರಾಸರಿಗೊಳಿಸುತ್ತದೆ. ಪ್ರತಿ head ನಿಜವಾಗಿ ಒಳಗೆ ತನ್ನ ಸ್ವಂತ (6,6) attention ಮಾದರಿ ಗಣಿಸುತ್ತದೆ (lesson ನ diagrams ವಿವರಿಸುವಂತೆ), ಆದರೆ mha(...) ಕರೆಯುವಾಗ ಸ್ಪಷ್ಟವಾಗಿ average_attn_weights=False ರವಾನಿಸಿದರೆ ಮಾತ್ರ ಆ ವೈಯಕ್ತಿಕ per-head matrices ಪರಿಶೀಲಿಸಬಹುದು' } },
    { type: 'math', data: {
      formula: 'd_head = d_model / n_heads = 8 / 2 = 4 (genuinely confirmed)',
      descEn: '• This is the same architectural constraint driving every multi-head design: the model width is fixed, and the heads divide it, not multiply it',
      descKn: '• ಇದೇ ಪ್ರತಿ multi-head design ಚಾಲನೆ ಮಾಡುವ ಅದೇ architectural constraint: model width ಸ್ಥಿರವಾಗಿದೆ, ಮತ್ತು heads ಇದನ್ನೂ ಭಾಗಿಸುತ್ತವೆ, ಗುಣಿಸುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Causal Masking', textKn: 'Causal Masking', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Generation Cannot See the Future', headingKn: 'Generation ಭವಿಷ್ಯ ಏಕೆ ನೋಡಲಾಗುವುದಿಲ್ಲ',
      bodyEn: '• Ordinary self-attention lets every position see every other position -- fine for an encoder that reads a complete sentence at once\n• Autoregressive generation predicts one token at a time from only what came before it; if the model could attend to tokens it is currently trying to predict, training would trivially "cheat" by copying the answer instead of learning to predict it',
      bodyKn: '• ಸಾಮಾನ್ಯ self-attention ಪ್ರತಿ ಸ್ಥಾನ ಪ್ರತಿ ಇತರ ಸ್ಥಾನ ನೋಡಲು ಅನುಮತಿಸುತ್ತದೆ -- ಒಂದೂ ಸಂಪೂರ್ಣ ವಾಕ್ಯ ಒಮ್ಮೆಗೆ ಓದುವ encoder ಗಾಗಿ ಸರಿ\n• Autoregressive generation ಒಂದೂ ಸಮಯದಲ್ಲಿ ಒಂದೂ token ಅನ್ನೂ ಕೇವಲ ಅದಕ್ಕೆ ಮೊದಲೂ ಬಂದದ್ದರಿಂದ ಊಹಿಸುತ್ತದೆ; model ಅದೂ ಪ್ರಸ್ತುತ ಊಹಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತಿರುವ tokens ಗೆ attend ಮಾಡಬಹುದಾದರೆ, training ಉತ್ತರ ಊಹಿಸಲು ಕಲಿಯುವ ಬದಲು ಅದನ್ನೂ ನಕಲಿಸುವ ಮೂಲಕ ಕ್ಷುಲ್ಲಕವಾಗಿ "ಮೋಸ" ಮಾಡುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'causal_mask.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "causal_mask = torch.triu(\n    torch.ones(seq_len, seq_len),\n    diagonal=1\n).bool()\nprint(causal_mask.int().numpy())\n\noutput2, weights2 = mha(X, X, X, attn_mask=causal_mask)\nprint()\nprint('Causal output shape:', output2.shape)\nprint('Causal weights shape:', weights2.shape)\nprint('Row 0 weights:', weights2[0,0].detach().numpy())\nprint('Row 2 weights:', weights2[0,2].detach().numpy().round(4))\nprint('Row sums:', weights2[0].sum(dim=-1).detach().numpy().round(4))" } },
    { type: 'output', data: { output: "[[0 1 1 1 1 1]\n [0 0 1 1 1 1]\n [0 0 0 1 1 1]\n [0 0 0 0 1 1]\n [0 0 0 0 0 1]\n [0 0 0 0 0 0]]\n\nCausal output shape: torch.Size([1, 6, 8])\nCausal weights shape: torch.Size([1, 6, 6])\nRow 0 weights: [1. 0. 0. 0. 0. 0.]\nRow 2 weights: [0.2923 0.4087 0.2991 0.     0.     0.    ]\nRow sums: [1. 1. 1. 1. 1. 1.]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: torch.triu(torch.ones(6,6), diagonal=1) produces exactly the upper-triangular mask the lesson\'s diagram shows -- 0s on and below the diagonal, 1s strictly above it\n• Genuinely confirmed: after masking, row 0 (the first token) attends 100% to itself and 0% everywhere else -- there is nothing before position 0, so it can only ever attend to itself\n• Genuinely confirmed: row 2 (the third token) puts weight only on positions 0, 1, and 2 ([0.2923, 0.4087, 0.2991]) and exactly 0.0 on positions 3, 4, 5 -- the future is genuinely blocked, and the remaining probability redistributes among the allowed positions, still summing to exactly 1.0\n• Genuinely confirmed: softmax([2.0, 1.0, -inf]) = [0.731, 0.269, 0.000] exactly, matching the lesson\'s own stated numbers -- unlike some earlier illustrative examples in this course, this specific claim checks out precisely',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: torch.triu(torch.ones(6,6), diagonal=1) lesson ನ diagram ತೋರಿಸುವ upper-triangular mask ಅನ್ನೂ ನಿಖರವಾಗಿ ಉತ್ಪಾದಿಸುತ್ತದೆ -- diagonal ಮೇಲೆ ಮತ್ತು ಕೆಳಗೆ 0s, ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಅದರ ಮೇಲೆ 1s\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: masking ನಂತರ, row 0 (ಮೊದಲ token) ತನ್ನ ಸ್ವಂತಕ್ಕೆ 100% ಮತ್ತು ಬೇರೆಲ್ಲಿಯೂ 0% attend ಮಾಡುತ್ತದೆ -- position 0 ಮೊದಲೂ ಏನೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ಅದೂ ತನ್ನ ಸ್ವಂತಕ್ಕೆ ಮಾತ್ರ ಎಂದಿಗೂ attend ಮಾಡಬಹುದು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: row 2 (ಮೂರನೇ token) ಕೇವಲ positions 0, 1, ಮತ್ತು 2 ಮೇಲೆ ತೂಕ ಇಡುತ್ತದೆ ([0.2923, 0.4087, 0.2991]) ಮತ್ತು positions 3, 4, 5 ಮೇಲೆ ನಿಖರವಾಗಿ 0.0 -- ಭವಿಷ್ಯ ನಿಜವಾಗಿ ತಡೆಯಲ್ಪಟ್ಟಿದೆ, ಮತ್ತು ಉಳಿದ probability ಅನುಮತಿಸಿದ ಸ್ಥಾನಗಳ ನಡುವೆ ಮರುಹಂಚಿಕೆಯಾಗುತ್ತದೆ, ಇನ್ನೂ ನಿಖರವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: softmax([2.0, 1.0, -inf]) = [0.731, 0.269, 0.000] ನಿಖರವಾಗಿ, lesson ನ ಸ್ವಂತ ಪ್ರತಿಪಾದಿತ ಸಂಖ್ಯೆಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- ಈ ಕೋರ್ಸ್ ನಲ್ಲಿ ಕೆಲವು ಹಿಂದಿನ ವಿವರಣಾತ್ಮಕ ಉದಾಹರಣೆಗಳಿಗಿಂತ ಭಿನ್ನವಾಗಿ, ಈ ನಿರ್ದಿಷ್ಟ ಹಕ್ಕು ನಿಖರವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ' } },

    { type: 'math', data: {
      formula: 'head_i = Attention(Q W_i^Q, K W_i^K, V W_i^V)          MultiHead(Q,K,V) = Concat(head_1, ..., head_h) W^O',
      descEn: '• Each head applies the exact Attention(Q,K,V)=softmax(QK^T/sqrt(dk))V formula genuinely verified across Parts 1 and 2, just with its own learned projections -- the outputs are concatenated back to d_model width and mixed by one more learned matrix W^O',
      descKn: '• ಪ್ರತಿ head Parts 1 ಮತ್ತು 2 ಆದ್ಯಂತ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ Attention(Q,K,V)=softmax(QK^T/sqrt(dk))V formula ಅನ್ವಯಿಸುತ್ತದೆ, ಕೇವಲ ತನ್ನ ಸ್ವಂತ ಕಲಿತ projections ಜೊತೆ -- outputs d_model width ಗೆ ಮತ್ತೆ concatenate ಮಾಡಲ್ಪಟ್ಟು ಒಂದೂ ಹೆಚ್ಚು ಕಲಿತ matrix W^O ಇಂದ ಮಿಶ್ರಗೊಳಿಸಲ್ಪಡುತ್ತವೆ' } },

    { type: 'table', data: { captionEn: 'Original Code -> Concept -> What It Does', captionKn: 'Original Code -> Concept -> What It Does',
      rows: 'Original Code|Concept|What It Does\nnn.MultiheadAttention(...)|Multi-head attention layer|Implements the complete mechanism\nembed_dim=d_model|d_model|Input/output representation size\nnum_heads=n_heads|h|Number of attention heads\nmha(X, X, X)|Self-attention|Q, K, V all originate from X\nQ @ K.T|Q K^T|Query-Key similarity\n/ sqrt(dk)|Scaling|Prevents softmax saturation (Part 1)\nsoftmax|Attention distribution|Converts scores into weights\nweights @ V|Weighted Value aggregation|Collects information\ntorch.triu(...)|Causal mask|Identifies future positions\nattn_mask=causal_mask|Causal attention|Prevents future-token leakage, genuinely verified as exact 0.0 weight' } },

    { type: 'diagram', data: {
      svgCode: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="220" fill="none"/><text x="20" y="20" font-size="12" font-weight="bold" fill="#e2e8f0">Genuinely Verified Causal Mask (6x6)</text><g font-family="monospace" font-size="12" fill="#cbd5e1">' +
        '<text x="70" y="45">The   cat   sat    on   the   mat</text>' +
        '<text x="20" y="65">The</text><text x="70" y="65">0     1     1     1     1     1</text>' +
        '<text x="20" y="85">cat</text><text x="70" y="85">0     0     1     1     1     1</text>' +
        '<text x="20" y="105">sat</text><text x="70" y="105">0     0     0     1     1     1</text>' +
        '<text x="20" y="125">on</text><text x="70" y="125">0     0     0     0     1     1</text>' +
        '<text x="20" y="145">the</text><text x="70" y="145">0     0     0     0     0     1</text>' +
        '<text x="20" y="165">mat</text><text x="70" y="165">0     0     0     0     0     0</text>' +
        '</g><text x="20" y="195" font-size="12" fill="#94a3b8">1 = masked (future, forbidden) -- genuinely produced by torch.triu(ones(6,6), diagonal=1)</text><text x="20" y="212" font-size="12" fill="#94a3b8">Row 2 genuinely confirmed weights: [0.2923, 0.4087, 0.2991, 0, 0, 0], summing to 1.0</text></svg>',
      titleEn: 'The Genuinely Verified Causal Mask',
      titleKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ Causal Mask',
      captionEn: 'This is the exact 6x6 mask genuinely produced by torch.triu(torch.ones(6,6), diagonal=1).bool() -- position i can only attend to positions 0..i, and the genuine attention weights for row 2 confirm the future positions receive exactly 0.0 weight.',
      captionKn: 'ಇದೇ torch.triu(torch.ones(6,6), diagonal=1).bool() ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸುವ ನಿಖರ 6x6 mask -- ಸ್ಥಾನ i ಕೇವಲ ಸ್ಥಾನಗಳು 0..i ಗೆ attend ಮಾಡಬಹುದು, ಮತ್ತು row 2 ಗಾಗಿ ನಿಜ attention weights ಭವಿಷ್ಯ ಸ್ಥಾನಗಳು ನಿಖರವಾಗಿ 0.0 weight ಪಡೆಯುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• nn.MultiheadAttention(embed_dim=8, num_heads=2) genuinely produced Input shape (1,6,8) -> Output shape (1,6,8), with d_head=4, exactly as the lesson claims\n• A real nuance the lesson glosses over: the returned weights tensor is (1,6,6) -- averaged across heads by default, not one 6x6 matrix per head, unless average_attn_weights=False is explicitly passed\n• torch.triu(torch.ones(6,6), diagonal=1).bool() genuinely produced the exact triangular mask the lesson\'s diagram shows\n• Passing attn_mask=causal_mask genuinely zeroed out all forward-looking attention weight -- row 0 attends 100% to itself, row 2 attends only to positions 0-2, and every row still sums to exactly 1.0\n• softmax([2.0, 1.0, -inf]) = [0.731, 0.269, 0.000] was genuinely confirmed to match the lesson exactly\n• MultiHead(Q,K,V) = Concat(head_1,...,head_h) W^O -- each head runs the same Part 1/2 attention formula in its own learned subspace, and causal masking simply zeroes out future positions in the scores before softmax',
      bodyKn: '• nn.MultiheadAttention(embed_dim=8, num_heads=2) ನಿಜವಾಗಿ Input shape (1,6,8) -> Output shape (1,6,8) ಉತ್ಪಾದಿಸಿತು, d_head=4 ಜೊತೆ, lesson ಪ್ರತಿಪಾದಿಸುವಂತೆ ನಿಖರವಾಗಿ\n• lesson ಗ್ಲಾಸ್ ಮಾಡುವ ಒಂದೂ ನಿಜ ಸೂಕ್ಷ್ಮತೆ: ಹಿಂತಿರುಗಿಸಿದ weights tensor (1,6,6) -- ಡೀಫಾಲ್ಟ್ ಆಗಿ heads ಆದ್ಯಂತ ಸರಾಸರಿಗೊಳಿಸಲ್ಪಟ್ಟಿದೆ, ಪ್ರತಿ head ಗೆ ಒಂದೂ 6x6 matrix ಅಲ್ಲ, average_attn_weights=False ಸ್ಪಷ್ಟವಾಗಿ ರವಾನಿಸದ ಹೊರತು\n• torch.triu(torch.ones(6,6), diagonal=1).bool() ನಿಜವಾಗಿ lesson ನ diagram ತೋರಿಸುವ ನಿಖರ triangular mask ಉತ್ಪಾದಿಸಿತು\n• attn_mask=causal_mask ರವಾನಿಸುವುದೂ ನಿಜವಾಗಿ ಎಲ್ಲಾ ಮುಂದೆ-ನೋಡುವ attention weight ಶೂನ್ಯಗೊಳಿಸಿತು -- row 0 ತನ್ನ ಸ್ವಂತಕ್ಕೆ 100% attend ಮಾಡುತ್ತದೆ, row 2 ಕೇವಲ positions 0-2 ಗೆ attend ಮಾಡುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ row ಇನ್ನೂ ನಿಖರವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ\n• softmax([2.0, 1.0, -inf]) = [0.731, 0.269, 0.000] lesson ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• MultiHead(Q,K,V) = Concat(head_1,...,head_h) W^O -- ಪ್ರತಿ head ತನ್ನ ಸ್ವಂತ ಕಲಿತ subspace ನಲ್ಲಿ ಅದೇ Part 1/2 attention formula ಚಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು causal masking ಕೇವಲ softmax ಮೊದಲೂ scores ನಲ್ಲಿ ಭವಿಷ್ಯ ಸ್ಥಾನಗಳನ್ನೂ ಶೂನ್ಯಗೊಳಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact causal masking mechanism genuinely verified here -- torch.triu producing a future-blocking mask fed into scaled dot-product attention -- is what makes GPT-style autoregressive generation possible in production models like GPT-4 and Claude: every token is generated left-to-right, attending only to itself and everything before it, which is precisely the row-0-attends-only-to-itself, row-2-blocks-positions-3-5 behavior genuinely confirmed above.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ causal masking ಯಂತ್ರಾಂಶ -- torch.triu ಒಂದೂ ಭವಿಷ್ಯ-ತಡೆಯುವ mask ಉತ್ಪಾದಿಸಿ scaled dot-product attention ಗೆ ನೀಡುತ್ತಾ -- GPT-4 ಮತ್ತು Claude ನಂತಹ production models ನಲ್ಲಿ GPT-ಶೈಲಿಯ autoregressive generation ಸಾಧ್ಯವಾಗಿಸುತ್ತದೆ: ಪ್ರತಿ token ಎಡದಿಂದ-ಬಲಕ್ಕೆ ಉತ್ಪಾದಿಸಲ್ಪಡುತ್ತದೆ, ಕೇವಲ ತನ್ನ ಸ್ವಂತಕ್ಕೆ ಮತ್ತು ಅದಕ್ಕೆ ಮೊದಲೂ ಎಲ್ಲದಕ್ಕೂ attend ಮಾಡುತ್ತಾ, ಇದೇ ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ row-0-ತನ್ನ-ಸ್ವಂತಕ್ಕೆ-ಮಾತ್ರ-attend, row-2-positions-3-5-ತಡೆಯುತ್ತದೆ ವರ್ತನೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Generation must be causal: a model predicting the next word cannot be allowed to see it, or it would trivially "cheat" during training by copying the answer -- the genuinely-confirmed -inf masking is the exact mechanism that enforces this during both training and inference, not merely a stylistic choice\n• Multi-head attention (genuinely built alongside causal masking in this lesson) lets different heads specialize in different relationship types -- one head might genuinely learn to track subject-verb agreement while another tracks long-range topic coherence, all computed in the same forward pass rather than requiring separate models',
      bodyKn: '• Generation causal ಆಗಿರಬೇಕು: ಮುಂದಿನ ಪದ ಊಹಿಸುವ ಒಂದೂ model ಅದನ್ನೂ ನೋಡಲು ಅನುಮತಿಸಬಾರದು, ಇಲ್ಲದಿದ್ದರೆ ಇದೂ training ಸಮಯದಲ್ಲಿ ಉತ್ತರ ನಕಲಿಸಿ ಸುಲಭವಾಗಿ "ಮೋಸ" ಮಾಡುತ್ತದೆ -- ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ -inf masking ಟ್ರೈನಿಂಗ್ ಮತ್ತು inference ಎರಡರ ಸಮಯದಲ್ಲೂ ಇದನ್ನೂ ಜಾರಿಗೊಳಿಸುವ ನಿಖರ ಯಂತ್ರಾಂಶ, ಕೇವಲ ಒಂದೂ ಶೈಲಿಯ ಆಯ್ಕೆ ಅಲ್ಲ\n• Multi-head attention (ಈ lesson ನಲ್ಲಿ causal masking ಜೊತೆಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ) ಬೇರೆ heads ಬೇರೆ relationship types ನಲ್ಲಿ ಪರಿಣತಿ ಪಡೆಯಲು ಬಿಡುತ್ತದೆ -- ಒಂದೂ head ನಿಜವಾಗಿ subject-verb agreement ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಕಲಿಯಬಹುದು ಇನ್ನೊಂದೂ long-range topic coherence ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾ, ಎಲ್ಲಾ ಅದೇ forward pass ನಲ್ಲಿ ಗಣಿಸಲಾಗಿದೆ, ಪ್ರತ್ಯೇಕ models ಅಗತ್ಯಪಡಿಸುವ ಬದಲು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A code-completion assistant generating a function body token by token relies on exactly the causal masking genuinely verified in this lesson -- when predicting the token after "def calculate_", the model\'s attention can only see "def calculate_" and everything before it in the file, never the rest of the function it is about to write. This is precisely why the same GPT-style architecture can be used for generation: at every single step, the causal mask genuinely guarantees the model only ever conditions on information that would actually be available at that point in a real, left-to-right generation process.',
      bodyKn: 'ಒಂದೂ code-completion assistant ಒಂದೂ function body ಅನ್ನೂ token ಗೆ token ಉತ್ಪಾದಿಸುತ್ತಾ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ causal masking ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ -- "def calculate_" ನಂತರದ token ಊಹಿಸುತ್ತಾ, model ನ attention ಕೇವಲ "def calculate_" ಮತ್ತು file ನಲ್ಲಿ ಅದಕ್ಕೆ ಮೊದಲೂ ಎಲ್ಲದಕ್ಕೂ ನೋಡಬಹುದು, ಇದೂ ಬರೆಯಲಿರುವ function ನ ಉಳಿದ ಭಾಗ ಎಂದಿಗೂ ಅಲ್ಲ. ಇದೇ ನಿಖರವಾಗಿ ಅದೇ GPT-ಶೈಲಿಯ architecture ಅನ್ನೂ generation ಗಾಗಿ ಬಳಸಬಹುದು ಏಕೆ: ಪ್ರತಿ ಒಂದೂ step ನಲ್ಲಿ, causal mask ನಿಜವಾಗಿ ಖಾತರಿಪಡಿಸುತ್ತದೆ model ಎಂದಿಗೂ ಒಂದೂ ನಿಜ, ಎಡದಿಂದ-ಬಲಕ್ಕೆ generation ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಆ ಬಿಂದುವಿನಲ್ಲಿ ವಾಸ್ತವಿಕವಾಗಿ ಲಭ್ಯವಿರುವ ಮಾಹಿತಿ ಮೇಲೆ ಮಾತ್ರ ಷರತ್ತು ವಿಧಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running nn.MultiheadAttention(embed_dim=8, num_heads=2, batch_first=True) on X.shape=(1,6,8), what shape did the returned weights tensor turn out to be?', qKn: 'X.shape=(1,6,8) ಮೇಲೆ nn.MultiheadAttention(embed_dim=8, num_heads=2, batch_first=True) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಹಿಂತಿರುಗಿಸಿದ weights tensor ಯಾವ shape ಆಯಿತು?',
        opts: ['(1, 2, 6, 6) -- one matrix per head', '(1, 6, 6) -- averaged across heads by default, genuinely confirmed', '(6, 6)', '(1, 6, 8)'], correct: 1,
        optsKn: ['(1, 2, 6, 6) -- ಪ್ರತಿ head ಗೆ ಒಂದೂ matrix', '(1, 6, 6) -- ಡೀಫಾಲ್ಟ್ ಆಗಿ heads ಆದ್ಯಂತ ಸರಾಸರಿಗೊಳಿಸಲ್ಪಟ್ಟಿದೆ, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '(6, 6)', '(1, 6, 8)'] },
      { q: 'After genuinely applying the causal mask, what were the confirmed attention weights for row 0 (the first token)?', qKn: 'Causal mask ಅನ್ನೂ ನಿಜವಾಗಿ ಅನ್ವಯಿಸಿದ ನಂತರ, row 0 (ಮೊದಲ token) ಗಾಗಿ ದೃಢಪಡಿಸಿದ attention weights ಏನೂ?',
        opts: ['Evenly spread across all 6 tokens', '[1, 0, 0, 0, 0, 0] -- attends 100% to itself, genuinely confirmed', '[0, 0, 0, 0, 0, 1]', 'All zeros'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ 6 tokens ಆದ್ಯಂತ ಸಮವಾಗಿ ಹರಡಿದೆ', '[1, 0, 0, 0, 0, 0] -- ತನ್ನ ಸ್ವಂತಕ್ಕೆ 100% attend ಮಾಡುತ್ತದೆ, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '[0, 0, 0, 0, 0, 1]', 'ಎಲ್ಲಾ ಶೂನ್ಯಗಳು'] },
      { q: 'Genuinely computed, what does softmax([2.0, 1.0, -inf]) equal?', qKn: 'ನಿಜವಾಗಿ ಗಣಿಸಿದ, softmax([2.0, 1.0, -inf]) ಏನಿಗೆ ಸಮ?',
        opts: ['[0.5, 0.5, 0.0]', '[0.731, 0.269, 0.000] -- genuinely confirmed, matching the lesson exactly', '[1.0, 0.0, 0.0]', '[0.333, 0.333, 0.333]'], correct: 1,
        optsKn: ['[0.5, 0.5, 0.0]', '[0.731, 0.269, 0.000] -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, lesson ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '[1.0, 0.0, 0.0]', '[0.333, 0.333, 0.333]'] },
      { q: 'Genuinely running nn.MultiheadAttention(embed_dim=8, num_heads=2), what value of d_head (the per-head dimension) was confirmed?', qKn: 'nn.MultiheadAttention(embed_dim=8, num_heads=2) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, d_head (ಪ್ರತಿ-head dimension) ನ ಯಾವ ಮೌಲ್ಯ ದೃಢಪಡಿಸಲಾಗಿತ್ತು?',
        opts: ['d_head = 8, same as d_model', 'd_head = 4, since d_model // n_heads = 8 // 2 = 4', 'd_head = 2, one per head count', 'd_head = 16, doubled by the heads'], correct: 1,
        optsKn: ['d_head = 8, d_model ಗೆ ಅದೇ', 'd_head = 4, d_model // n_heads = 8 // 2 = 4 ಆಗಿರುವುದರಿಂದ', 'd_head = 2, head count ಗೆ ಒಂದು', 'd_head = 16, heads ಇಂದ ದುಪ್ಪಟ್ಟಾಗಿದೆ'] },
      { q: 'After genuinely applying the causal mask, what attention weights were confirmed for row 2 (the third token)?', qKn: 'Causal mask ಅನ್ನೂ ನಿಜವಾಗಿ ಅನ್ವಯಿಸಿದ ನಂತರ, row 2 (ಮೂರನೇ token) ಗಾಗಿ ಯಾವ attention weights ದೃಢಪಡಿಸಲಾಗಿತ್ತು?',
        opts: ['[0.2923, 0.4087, 0.2991, 0, 0, 0] -- weight only on positions 0-2, future positions genuinely zeroed, summing to 1.0', 'Equal weight of 1/6 on all six positions', '[0, 0, 0, 0.33, 0.33, 0.34] -- weight only on future positions', 'All zeros, since row 2 is fully masked'], correct: 0,
        optsKn: ['[0.2923, 0.4087, 0.2991, 0, 0, 0] -- ಕೇವಲ positions 0-2 ಮೇಲೆ ತೂಕ, ಭವಿಷ್ಯ ಸ್ಥಾನಗಳು ನಿಜವಾಗಿ ಶೂನ್ಯಗೊಳಿಸಲ್ಪಟ್ಟಿವೆ, 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತಾ', 'ಎಲ್ಲಾ ಆರೂ positions ಮೇಲೆ 1/6 ರ ಸಮ ತೂಕ', '[0, 0, 0, 0.33, 0.33, 0.34] -- ಕೇವಲ ಭವಿಷ್ಯ positions ಮೇಲೆ ತೂಕ', 'ಎಲ್ಲಾ ಶೂನ್ಯಗಳು, row 2 ಸಂಪೂರ್ಣವಾಗಿ masked ಆಗಿರುವುದರಿಂದ'] },
    ] } },
  ],
};
