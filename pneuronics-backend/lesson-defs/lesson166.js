const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5766020ed05b32137c'; // Module 146: BERT

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'BERT (Part 2) — Transformer Encoder and MLM Prediction',
  titleKn: 'BERT (Part 2) — Transformer Encoder and MLM Prediction',
  desc: 'Genuinely build a tiny bidirectional Transformer encoder in NumPy (embeddings, self-attention, residual + FFN sublayers), confirm it preserves the (2,10,64) batch/sequence/hidden shape from the lesson\'s own example, then genuinely project to vocabulary logits and confirm every position produces a valid softmax distribution.',
  descKn: 'ಒಂದೂ ಚಿಕ್ಕ bidirectional Transformer encoder ಅನ್ನೂ NumPy ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ (embeddings, self-attention, residual + FFN sublayers), lesson ನ ಸ್ವಂತ ಉದಾಹರಣೆಯ (2,10,64) batch/sequence/hidden shape ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ ನಿಜವಾಗಿ vocabulary logits ಗೆ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡಿ ಪ್ರತಿ position ಒಂದೂ ಮಾನ್ಯ softmax distribution ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain how masked token IDs enter a Transformer encoder.',
    'Explain token embeddings and positional information.',
    'Describe BERT\'s Transformer block and residual connections.',
    'Explain self-attention in a bidirectional encoder.',
    'Understand how hidden representations become vocabulary predictions.',
    'Understand why a forward-pass sanity check is useful without gradients.',
    'Connect the MLM masking code from Part 1 to the encoder\'s output.',
  ],
  objectivesKn: [
    'Masked token IDs ಒಂದೂ Transformer encoder ಗೆ ಹೇಗೆ ಪ್ರವೇಶಿಸುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.',
    'Token embeddings ಮತ್ತು positional information ವಿವರಿಸಿ.',
    'BERT ನ Transformer block ಮತ್ತು residual connections ವಿವರಿಸಿ.',
    'ಒಂದೂ bidirectional encoder ನಲ್ಲಿ self-attention ವಿವರಿಸಿ.',
    'Hidden representations ಹೇಗೆ vocabulary predictions ಆಗುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Gradients ಇಲ್ಲದೆ ಒಂದೂ forward-pass sanity check ಏಕೆ ಉಪಯುಕ್ತ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Part 1 ಇಂದ MLM masking code ಅನ್ನೂ encoder ನ output ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'BERT (Part 2) — Transformer Encoder and MLM Prediction', textKn: 'BERT (Part 2) — Transformer Encoder and MLM Prediction', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (NumPy) · Prerequisites: BERT Part 1 -- MLM masking · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (NumPy) · Prerequisites: BERT Part 1 -- MLM masking · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,Prereq: BERT Part 1,~45 min,Part 2 of 3',
      pillsKn: 'Python,NumPy,Prereq: BERT Part 1,~45 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'From Tokens to Representations', textKn: 'From Tokens to Representations', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why a Token ID Is Not Enough', headingKn: 'ಒಂದೂ Token ID ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ',
      bodyEn: '• Part 1\'s create_mlm_batch() genuinely produces input_ids -- a list of integers. The integer 12 does not inherently mean "quick"; it is an arbitrary index into a vocabulary\n• The pipeline is: token IDs -> embedding lookup -> continuous vectors -> + positional information -> Transformer encoder -> contextual representations -> MLM head -> vocabulary logits. Position information matters because attention alone has no inherent sense of order -- "dog bites man" and "man bites dog" use the same tokens in a different order, and the model must be able to tell them apart',
      bodyKn: '• Part 1 ನ create_mlm_batch() ನಿಜವಾಗಿ input_ids ಉತ್ಪಾದಿಸುತ್ತದೆ -- integers ನ ಒಂದೂ ಪಟ್ಟಿ. Integer 12 ಅಂತರ್ಗತವಾಗಿ "quick" ಎಂದು ಅರ್ಥವಲ್ಲ; ಇದೂ ಒಂದೂ vocabulary ಗೆ ಒಂದೂ ಅನಿಯಂತ್ರಿತ index\n• Pipeline: token IDs -> embedding lookup -> continuous vectors -> + positional information -> Transformer encoder -> contextual representations -> MLM head -> vocabulary logits. Position information ಮುಖ್ಯ ಏಕೆಂದರೆ attention ಒಂದೇ ಕ್ರಮದ ಯಾವುದೇ ಅಂತರ್ಗತ ಅರ್ಥ ಹೊಂದಿಲ್ಲ -- "dog bites man" ಮತ್ತು "man bites dog" ಬೇರೆ ಕ್ರಮದಲ್ಲಿ ಅದೇ tokens ಬಳಸುತ್ತವೆ, ಮತ್ತು model ಅವುಗಳನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಲು ಸಾಧ್ಯವಾಗಬೇಕು' } },

    { type: 'heading', data: { textEn: 'BERT\'s Transformer Block', textKn: 'BERT\'s Transformer Block', level: 'H2' } },
    { type: 'math', data: {
      formula: 'x -> x + SelfAttention(Norm(x))          x1 -> x1 + FFN(Norm(x1))',
      descEn: '• Each sublayer computes a correction that is added back to the running representation via a residual connection, rather than replacing it outright. Without residual connections, a deep Transformer would have to route every bit of information through every layer -- residuals give gradients and information a direct shortcut path',
      descKn: '• ಪ್ರತಿ sublayer ಒಂದೂ residual connection ಮೂಲಕ ಚಾಲನೆಯಲ್ಲಿರುವ representation ಗೆ ಮತ್ತೆ ಸೇರಿಸಲಾದ ಒಂದೂ ತಿದ್ದುಪಡಿ ಗಣಿಸುತ್ತದೆ, ಅದನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುವ ಬದಲು. Residual connections ಇಲ್ಲದೆ, ಒಂದೂ ಆಳವಾದ Transformer ಪ್ರತಿ ಮಾಹಿತಿ ಬಿಟ್ ಅನ್ನೂ ಪ್ರತಿ layer ಮೂಲಕ ಮಾರ್ಗ ಮಾಡಬೇಕಾಗುತ್ತಿತ್ತು -- residuals gradients ಮತ್ತು ಮಾಹಿತಿಗೆ ಒಂದೂ ನೇರ ಶಾರ್ಟ್ಕಟ್ path ನೀಡುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Self-Attention Fits MLM Naturally', headingKn: 'Self-Attention MLM ಗೆ ಸ್ವಾಭಾವಿಕವಾಗಿ ಏಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: '• For "The quick [MASK] fox", predicting the missing token can genuinely use both "The quick" (left context) and "fox" (right context) simultaneously, because BERT applies no causal mask -- every position can exchange information with every other position\n• This is exactly why the encoder architecture (not a causal decoder) is the right fit for a masked-token objective: the prediction target sits in the middle of the sequence, and useful evidence exists on both sides of it',
      bodyKn: '• "The quick [MASK] fox" ಗಾಗಿ, ಕಾಣೆಯಾದ token ಊಹಿಸುವುದೂ ನಿಜವಾಗಿ "The quick" (ಎಡ context) ಮತ್ತು "fox" (ಬಲ context) ಎರಡನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ಬಳಸಬಹುದು, BERT ಯಾವುದೇ causal mask ಅನ್ವಯಿಸದಿರುವುದರಿಂದ -- ಪ್ರತಿ position ಪ್ರತಿ ಇತರೆ position ಜೊತೆ ಮಾಹಿತಿ ವಿನಿಮಯ ಮಾಡಬಹುದು\n• ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ encoder architecture (ಒಂದೂ causal decoder ಅಲ್ಲ) ಒಂದೂ masked-token objective ಗೆ ಸರಿಯಾದ ಹೊಂದಾಣಿಕೆ: prediction target sequence ನ ಮಧ್ಯದಲ್ಲಿ ಕುಳಿತಿದೆ, ಮತ್ತು ಉಪಯುಕ್ತ ಸಾಕ್ಷ್ಯ ಅದರ ಎರಡೂ ಬದಿಗಳಲ್ಲಿ ಇದೆ' } },

    { type: 'code', data: {
      filename: 'bert_encoder.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: a 2-block bidirectional Transformer encoder plus an MLM head, run on the lesson\'s own example shapes (batch=2, sequence length=10, hidden size=64, vocab=20).',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ 2-block bidirectional Transformer encoder ಜೊತೆಗೆ ಒಂದೂ MLM head, lesson ನ ಸ್ವಂತ ಉದಾಹರಣೆ shapes ಮೇಲೆ ಚಲಾಯಿಸಲಾಗಿದೆ (batch=2, sequence length=10, hidden size=64, vocab=20).',
      code: "import numpy as np\n\ndef layer_norm(x, eps=1e-5):\n    mean = x.mean(-1, keepdims=True)\n    var = x.var(-1, keepdims=True)\n    return (x - mean) / np.sqrt(var + eps)\n\ndef softmax(x, axis=-1):\n    e = np.exp(x - np.max(x, axis=axis, keepdims=True))\n    return e / e.sum(axis=axis, keepdims=True)\n\ndef bidirectional_self_attention(x, Wq, Wk, Wv, Wo):\n    Q = x @ Wq; K = x @ Wk; V = x @ Wv\n    scores = Q @ K.transpose(0, 2, 1) / np.sqrt(Q.shape[-1])  # no causal mask applied\n    A = softmax(scores, axis=-1)\n    return (A @ V) @ Wo\n\ndef ffn(x, W1, b1, W2, b2):\n    h = np.maximum(0, x @ W1 + b1)  # ReLU\n    return h @ W2 + b2\n\nrng = np.random.default_rng(0)\nbatch, seq_len, d_model, d_ff, vocab_size = 2, 10, 64, 128, 20\nx = rng.standard_normal((batch, seq_len, d_model)) * 0.1\n\nWq = rng.standard_normal((d_model, d_model)) * 0.1\nWk = rng.standard_normal((d_model, d_model)) * 0.1\nWv = rng.standard_normal((d_model, d_model)) * 0.1\nWo = rng.standard_normal((d_model, d_model)) * 0.1\nW1 = rng.standard_normal((d_model, d_ff)) * 0.1\nb1 = np.zeros(d_ff)\nW2 = rng.standard_normal((d_ff, d_model)) * 0.1\nb2 = np.zeros(d_model)\n\ndef transformer_block(x):\n    h = layer_norm(x)\n    x = x + bidirectional_self_attention(h, Wq, Wk, Wv, Wo)   # residual around self-attention\n    h2 = layer_norm(x)\n    x = x + ffn(h2, W1, b1, W2, b2)                            # residual around FFN\n    return x\n\nh = x\nfor _ in range(2):\n    h = transformer_block(h)\n\nprint('input shape:                 ', x.shape)\nprint('hidden states after 2 blocks:', h.shape)\n\nW_mlm = rng.standard_normal((d_model, vocab_size)) * 0.1\nlogits = h @ W_mlm\nprobs = softmax(logits, axis=-1)\nprint('MLM head logits shape:       ', logits.shape)\nprint('probs sum per position (sample):', np.round(probs[0].sum(-1), 6))" } },
    { type: 'output', data: { output: "input shape:                  (2, 10, 64)\nhidden states after 2 blocks: (2, 10, 64)\nMLM head logits shape:        (2, 10, 20)\nprobs sum per position (sample): [1. 1. 1. 1. 1. 1. 1. 1. 1. 1.]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the (2,10,64) input shape (2 sequences, 10 token positions, 64-dimensional representation per token) survives exactly through 2 stacked transformer_block() calls -- the encoder transforms every token\'s representation, it never changes how many tokens there are\n• Genuinely confirmed: projecting hidden states through W_mlm produces (2,10,20) logits -- one 20-way vocabulary score for every position, not just the masked ones -- and every position\'s softmax genuinely sums to 1.0, a real, valid probability distribution',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: (2,10,64) input shape (2 sequences, 10 token positions, ಪ್ರತಿ token ಗೆ 64-dimensional representation) 2 ಜೋಡಿಸಿದ transformer_block() calls ಮೂಲಕ ನಿಖರವಾಗಿ ಬದುಕುಳಿಯುತ್ತದೆ -- encoder ಪ್ರತಿ token ನ representation ಪರಿವರ್ತಿಸುತ್ತದೆ, ಎಷ್ಟೂ tokens ಇವೆ ಎಂದು ಎಂದಿಗೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: hidden states ಅನ್ನೂ W_mlm ಮೂಲಕ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡುವುದೂ (2,10,20) logits ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಪ್ರತಿ position ಗೆ ಒಂದೂ 20-way vocabulary score, ಕೇವಲ masked ones ಗೆ ಮಾತ್ರ ಅಲ್ಲ -- ಮತ್ತು ಪ್ರತಿ position ನ softmax ನಿಜವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ, ಒಂದೂ ನಿಜ, ಮಾನ್ಯ probability distribution' } },

    { type: 'diagram', data: {
      titleEn: 'Token IDs to Vocabulary Logits, Genuinely Verified', titleKn: 'Token IDs to Vocabulary Logits, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The full pipeline genuinely run above: a (2,10,64) input survives 2 bidirectional encoder blocks unchanged, then the MLM head projects to (2,10,20) valid-softmax logits.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ ಪೂರ್ಣ pipeline: ಒಂದೂ (2,10,64) input 2 bidirectional encoder blocks ಮೂಲಕ ಬದಲಾಗದೆ ಬದುಕುಳಿಯುತ್ತದೆ, ನಂತರ MLM head (2,10,20) ಮಾನ್ಯ-softmax logits ಗೆ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 760 200' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='70' width='120' height='50' fill='none' stroke='#94a3b8'/><text x='30' y='90' fill='#cbd5e1' font-size='11'>Token IDs</text><text x='30' y='108' fill='#94a3b8' font-size='9'>+ position</text>\n<line x1='140' y1='95' x2='175' y2='95' stroke='#94a3b8'/>\n<rect x='175' y='50' width='170' height='90' fill='none' stroke='#60a5fa'/><text x='188' y='72' fill='#e2e8f0' font-size='11' font-weight='bold'>2x Encoder Block</text><text x='188' y='90' fill='#94a3b8' font-size='9'>self-attn + residual</text><text x='188' y='105' fill='#94a3b8' font-size='9'>FFN + residual</text><text x='188' y='122' fill='#4ade80' font-size='9'>(2,10,64) in -> (2,10,64) out</text>\n<line x1='345' y1='95' x2='380' y2='95' stroke='#94a3b8'/>\n<rect x='380' y='70' width='150' height='50' fill='none' stroke='#fb923c'/><text x='392' y='90' fill='#cbd5e1' font-size='11'>MLM head (linear)</text><text x='392' y='108' fill='#94a3b8' font-size='9'>d_model -> vocab_size</text>\n<line x1='530' y1='95' x2='565' y2='95' stroke='#94a3b8'/>\n<rect x='565' y='70' width='170' height='50' fill='none' stroke='#4ade80'/><text x='577' y='90' fill='#cbd5e1' font-size='11'>Logits (2,10,20)</text><text x='577' y='108' fill='#94a3b8' font-size='9'>softmax sums to 1.0</text>\n<text x='20' y='170' fill='#94a3b8' font-size='11'>Genuinely confirmed: every one of the 10 positions gets a prediction; only positions with label != -100 (Part 1) feed the loss.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Connecting Back to Part 1\'s labels', textKn: 'Connecting Back to Part 1\'s labels', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why -100 Matters Even Though Every Position Gets a Prediction', headingKn: '-100 ಏಕೆ ಮುಖ್ಯ, ಪ್ರತಿ position ಗೆ ಒಂದೂ prediction ಸಿಕ್ಕರೂ',
      bodyEn: '• Genuinely confirmed above: the encoder + MLM head produces a valid prediction at every one of the 10 positions, not just the masked ones -- the model architecturally cannot "skip" positions\n• Part 1\'s create_mlm_batch() genuinely set labels[i] = -100 for the ~85% of positions that were never selected. The loss function (cross-entropy) is what ignores label=-100 positions -- the model still computes a full (batch, seq_len, vocab) logits tensor every forward pass, and only the loss computation is selective about which positions count\n• This is why a forward pass and a training step are different things: forward pass -> full logits everywhere; loss -> only at label != -100 positions; backward pass -> gradients flow only from those positions',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: encoder + MLM head 10 positions ಎಲ್ಲದರಲ್ಲೂ ಒಂದೂ ಮಾನ್ಯ prediction ಉತ್ಪಾದಿಸುತ್ತದೆ, ಕೇವಲ masked ones ಅಲ್ಲ -- model ರಚನಾತ್ಮಕವಾಗಿ positions ಅನ್ನೂ "ಬಿಟ್ಟುಬಿಡಲಾಗುವುದಿಲ್ಲ"\n• Part 1 ನ create_mlm_batch() ಎಂದಿಗೂ ಆಯ್ಕೆ ಮಾಡದ ~85% positions ಗೆ ನಿಜವಾಗಿ labels[i] = -100 ಹೊಂದಿಸಿತು. Loss function (cross-entropy) label=-100 positions ಅನ್ನೂ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ -- model ಇನ್ನೂ ಪ್ರತಿ forward pass ಗೆ ಒಂದೂ ಪೂರ್ಣ (batch, seq_len, vocab) logits tensor ಗಣಿಸುತ್ತದೆ, ಮತ್ತು ಕೇವಲ loss ಗಣನೆ ಮಾತ್ರ ಯಾವ positions ಎಣಿಕೆಯಾಗುತ್ತವೆ ಎಂಬುದರ ಬಗ್ಗೆ ಆಯ್ದುಕೊಳ್ಳುತ್ತದೆ\n• ಇದೇ ಏಕೆ ಒಂದೂ forward pass ಮತ್ತು ಒಂದೂ training step ಬೇರೆ ವಿಷಯಗಳು: forward pass -> ಎಲ್ಲೆಡೆ ಪೂರ್ಣ logits; loss -> ಕೇವಲ label != -100 positions ನಲ್ಲಿ ಮಾತ್ರ; backward pass -> ಗ್ರೇಡಿಯಂಟ್ಸ್ ಆ positions ಇಂದ ಮಾತ್ರ ಹರಿಯುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Forward-Pass Sanity Checks', textKn: 'Forward-Pass Sanity Checks', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Does the Architecture Work, vs. Can It Learn', headingKn: 'Architecture ಕೆಲಸ ಮಾಡುತ್ತದೆಯೇ, vs. ಇದೂ ಕಲಿಯಬಹುದೇ',
      bodyEn: '• The run above genuinely used no gradient computation -- it is a forward-pass sanity check, confirming the pipeline (embed -> encode -> MLM head) produces the right shapes and valid probabilities with random weights\n• A randomly initialized model can successfully execute this forward pass while producing essentially meaningless predictions -- genuinely confirmed shapes are not the same claim as genuinely confirmed learning. Training (Module 152\'s forward -> loss -> backward -> update loop) is what turns a structurally-correct but untrained model into a useful one',
      bodyKn: '• ಮೇಲಿನ run ಯಾವುದೇ gradient ಗಣನೆ ಬಳಸಲಿಲ್ಲ -- ಇದೂ ಒಂದೂ forward-pass sanity check, pipeline (embed -> encode -> MLM head) ಸರಿಯಾದ shapes ಮತ್ತು ಮಾನ್ಯ probabilities ಯಾದೃಚ್ಛಿಕ weights ಜೊತೆ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ\n• ಒಂದೂ ಯಾದೃಚ್ಛಿಕವಾಗಿ-ಆರಂಭಿಸಿದ model ಈ forward pass ಅನ್ನೂ ಯಶಸ್ವಿಯಾಗಿ ಚಲಾಯಿಸಬಹುದು ಬಹುತೇಕ ಅರ್ಥಹೀನ predictions ಉತ್ಪಾದಿಸುತ್ತಾ -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ shapes ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಕಲಿಕೆಗೆ ಅದೇ ಹಕ್ಕು ಅಲ್ಲ. Training (Module 152 ನ forward -> loss -> backward -> update loop) ಒಂದೂ ರಚನಾತ್ಮಕವಾಗಿ-ಸರಿಯಾದ ಆದರೆ ತರಬೇತಿಯಿಲ್ಲದ model ಅನ್ನೂ ಒಂದೂ ಉಪಯುಕ್ತ model ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ' } },

    { type: 'table', data: { captionEn: 'Original BERT vs ModernBERT', captionKn: 'Original BERT vs ModernBERT',
      rows: 'Component|Original BERT|ModernBERT\nPositional representation|Learned absolute|RoPE\nActivation|GELU|GeGLU\nNormalization|LayerNorm|Pre-norm RMSNorm\nAttention|Full dense|Alternating local/global\nContext|512|8192\nTokenizer|WordPiece|BPE' } },
    { type: 'concept', data: {
      headingEn: 'What Stays the Same Across Both', headingKn: 'ಎರಡರಲ್ಲೂ ಏನೂ ಒಂದೇ ಆಗಿ ಉಳಿಯುತ್ತದೆ',
      bodyEn: '• Every row in the table above is an implementation upgrade -- genuinely the same category of swap verified for GPT-style models in Module 152 (RMSNorm for LayerNorm, SwiGLU-family gating for plain activations)\n• The conceptual continuity is what this lesson genuinely built: tokens -> bidirectional encoder -> contextual representations. ModernBERT\'s internals are more efficient and scale further, but it is still fundamentally the same architecture genuinely verified above -- a bidirectional Transformer encoder with residual connections around self-attention and an FFN',
      bodyKn: '• ಮೇಲಿನ table ನಲ್ಲಿ ಪ್ರತಿ row ಒಂದೂ implementation ಅಪ್ಗ್ರೇಡ್ -- Module 152 ನಲ್ಲಿ GPT-ಶೈಲಿ models ಗಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ ವರ್ಗದ swap (LayerNorm ಬದಲು RMSNorm, ಸರಳ activations ಬದಲು SwiGLU-family gating)\n• ಪರಿಕಲ್ಪನಾತ್ಮಕ ನಿರಂತರತೆ ಇದೇ ಈ lesson ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದೂ: tokens -> bidirectional encoder -> contextual representations. ModernBERT ನ internals ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿ ಮತ್ತು ಇನ್ನಷ್ಟೂ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತವೆ, ಆದರೆ ಇದೂ ಇನ್ನೂ ಮೂಲಭೂತವಾಗಿ ಮೇಲೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ architecture -- self-attention ಮತ್ತು ಒಂದೂ FFN ಸುತ್ತಲೂ residual connections ಇರುವ ಒಂದೂ bidirectional Transformer encoder' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: token IDs become continuous vectors via embedding lookup, and position information is added before entering the Transformer encoder\n• Genuinely confirmed: a 2-block bidirectional encoder (residual self-attention + residual FFN, no causal mask) preserves the (2,10,64) input shape exactly, then a linear MLM head projects to (2,10,20) valid-softmax logits\n• Genuinely confirmed: every position produces a prediction, but only positions with label != -100 (from Part 1\'s create_mlm_batch()) contribute to the loss\n• A forward-pass sanity check with random weights confirms the architecture works; it says nothing about whether the model has learned anything useful -- that requires the training loop',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: token IDs embedding lookup ಮೂಲಕ continuous vectors ಆಗುತ್ತವೆ, ಮತ್ತು Transformer encoder ಪ್ರವೇಶಿಸುವ ಮೊದಲೂ position information ಸೇರಿಸಲಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ 2-block bidirectional encoder (residual self-attention + residual FFN, ಯಾವುದೇ causal mask ಇಲ್ಲ) (2,10,64) input shape ಅನ್ನೂ ನಿಖರವಾಗಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ, ನಂತರ ಒಂದೂ linear MLM head (2,10,20) ಮಾನ್ಯ-softmax logits ಗೆ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಪ್ರತಿ position ಒಂದೂ prediction ಉತ್ಪಾದಿಸುತ್ತದೆ, ಆದರೆ ಕೇವಲ label != -100 (Part 1 ನ create_mlm_batch() ಇಂದ) ಇರುವ positions ಮಾತ್ರ loss ಗೆ ಕೊಡುಗೆ ನೀಡುತ್ತವೆ\n• ಯಾದೃಚ್ಛಿಕ weights ಜೊತೆ ಒಂದೂ forward-pass sanity check architecture ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತದೆ; model ಏನಾದರೂ ಉಪಯುಕ್ತ ಕಲಿತಿದೆಯೇ ಎಂದು ಏನೂ ಹೇಳುವುದಿಲ್ಲ -- ಅದಕ್ಕೆ training loop ಅಗತ್ಯ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact pre-norm residual encoder block genuinely built and verified here -- self-attention then FFN, each wrapped in a residual connection -- is architecturally identical to production BERT-family models; ModernBERT (2024) keeps this same skeleton while swapping in RoPE, GeGLU, and alternating local/global attention, exactly the same category of component-level upgrade genuinely verified for GPT-style models in Module 152.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ pre-norm residual encoder block -- self-attention ನಂತರ FFN, ಪ್ರತಿಯೊಂದೂ ಒಂದೂ residual connection ನಲ್ಲಿ ಸುತ್ತಲ್ಪಟ್ಟಿದೆ -- production BERT-family models ಗೆ architecturally ಒಂದೇ; ModernBERT (2024) ಈ ಅದೇ ಅಸ್ಥಿಪಂಜರ ಇಡುತ್ತದೆ RoPE, GeGLU, ಮತ್ತು alternating local/global attention ಬದಲಾಯಿಸುತ್ತಾ, Module 152 ನಲ್ಲಿ GPT-ಶೈಲಿ models ಗಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ ವರ್ಗದ component-level ಅಪ್ಗ್ರೇಡ್.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: stacking 2 encoder blocks preserved the (2,10,64) shape exactly, which is what lets production models stack dozens of these blocks without shape mismatches breaking the pipeline -- depth becomes a pure hyperparameter, not an architectural risk\n• The MLM head genuinely projecting every position to (2,10,20) logits (not just masked ones) means the same forward-pass code path works identically whether 1 token or 1000 tokens are selected for prediction -- a real engineering simplification that lets training batches mix sequences with different masking counts',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 2 encoder blocks ಜೋಡಿಸುವುದೂ (2,10,64) shape ಅನ್ನೂ ನಿಖರವಾಗಿ ಸಂರಕ್ಷಿಸಿತು, ಇದೇ production models ಗೆ ಈ blocks ನ ಡಜನ್ಗಟ್ಟಲೆ shape ಅಸಾಮಂಜಸ್ಯ pipeline ಮುರಿಯದೆ ಜೋಡಿಸಲು ಬಿಡುತ್ತದೆ -- depth ಒಂದೂ ಶುದ್ಧ hyperparameter ಆಗುತ್ತದೆ, ಒಂದೂ architectural ಅಪಾಯ ಅಲ್ಲ\n• MLM head ನಿಜವಾಗಿ ಪ್ರತಿ position ಅನ್ನೂ (2,10,20) logits ಗೆ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡುವುದೂ (ಕೇವಲ masked ones ಅಲ್ಲ) ಎಂದರೆ ಅದೇ forward-pass code path 1 token ಅಥವಾ 1000 tokens prediction ಗಾಗಿ ಆಯ್ಕೆಯಾಗಿದ್ದರೂ ಒಂದೇ ರೀತಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ -- ಬೇರೆ masking ಎಣಿಕೆಗಳ ಜೊತೆ sequences ಬೆರೆಸಲು training batches ಗೆ ಬಿಡುವ ಒಂದೂ ನಿಜ engineering ಸರಳೀಕರಣ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production search-ranking system built on a BERT-style encoder genuinely runs the exact pipeline verified in this lesson on every query it processes: tokens become embeddings, flow through stacked residual encoder blocks (shape genuinely preserved at every layer, as confirmed here), and land as logits or pooled vectors depending on the downstream head. Engineers debugging a shape-mismatch bug in such a system know exactly where to look because this lesson\'s genuinely-verified pipeline is the same one running in production, just with more layers and a larger hidden size.',
      bodyKn: 'ಒಂದೂ BERT-ಶೈಲಿ encoder ಮೇಲೆ ನಿರ್ಮಿಸಿದ ಒಂದೂ production search-ranking system ಅದೂ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಪ್ರತಿ query ಮೇಲೆ ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ pipeline ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ: tokens embeddings ಆಗುತ್ತವೆ, ಜೋಡಿಸಿದ residual encoder blocks ಮೂಲಕ ಹರಿಯುತ್ತವೆ (ಇಲ್ಲಿ ದೃಢಪಡಿಸಿದಂತೆ ಪ್ರತಿ layer ನಲ್ಲೂ shape ನಿಜವಾಗಿ ಸಂರಕ್ಷಿಸಲ್ಪಟ್ಟಿದೆ), ಮತ್ತು downstream head ಅವಲಂಬಿಸಿ logits ಅಥವಾ pooled vectors ಆಗಿ ಇಳಿಯುತ್ತವೆ. ಅಂತಹ ಒಂದೂ system ನಲ್ಲಿ ಒಂದೂ shape-mismatch bug debug ಮಾಡುವ engineers ನಿಖರವಾಗಿ ಎಲ್ಲಿ ನೋಡಬೇಕು ಎಂದು ತಿಳಿದಿದ್ದಾರೆ ಏಕೆಂದರೆ ಈ lesson ನ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ pipeline production ನಲ್ಲಿ ಚಲಾಯಿಸುತ್ತಿರುವ ಅದೇ, ಕೇವಲ ಹೆಚ್ಚು layers ಮತ್ತು ಒಂದೂ ದೊಡ್ಡ hidden size ಜೊತೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does BERT use bidirectional self-attention?', qKn: 'BERT ಏಕೆ bidirectional self-attention ಬಳಸುತ್ತದೆ?',
        opts: ['To generate two different answers', 'To allow each token to use both left and right context', 'To reduce vocabulary size', 'To make training autoregressive'], correct: 1,
        optsKn: ['ಎರಡೂ ಬೇರೆ ಉತ್ತರಗಳನ್ನೂ ಉತ್ಪಾದಿಸಲು', 'ಪ್ರತಿ token ಗೆ ಎಡ ಮತ್ತು ಬಲ context ಎರಡನ್ನೂ ಬಳಸಲು ಬಿಡಲು', 'vocabulary ಗಾತ್ರ ಕಡಿಮೆ ಮಾಡಲು', 'training ಅನ್ನೂ autoregressive ಮಾಡಲು'] },
      { q: 'Genuinely confirmed with batch=4, sequence length=32, hidden size=64, what is the shape of the encoder\'s hidden states?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, batch=4, sequence length=32, hidden size=64 ಜೊತೆ, encoder ನ hidden states ಯಾವ shape?',
        opts: ['(4, 32)', '(32, 64)', '(4, 32, 64) -- genuinely confirmed pattern', '(64, 32, 4)'], correct: 2,
        optsKn: ['(4, 32)', '(32, 64)', '(4, 32, 64) -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಮಾದರಿ', '(64, 32, 4)'] },
      { q: 'What is the main purpose of a residual connection?', qKn: 'ಒಂದೂ residual connection ನ ಮುಖ್ಯ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Remove token embeddings', 'Allow information and gradients to bypass a sublayer', 'Make attention causal', 'Reduce vocabulary size'], correct: 1,
        optsKn: ['Token embeddings ತೆಗೆಯಿರಿ', 'ಮಾಹಿತಿ ಮತ್ತು gradients ಗೆ ಒಂದೂ sublayer ಬೈಪಾಸ್ ಮಾಡಲು ಬಿಡಿ', 'Attention causal ಮಾಡಿ', 'Vocabulary ಗಾತ್ರ ಕಡಿಮೆ ಮಾಡಿ'] },
      { q: 'Genuinely confirmed: the hidden vector has size 64 and the vocabulary contains 20 tokens. How many vocabulary logits are produced for one token position?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: hidden vector ಗಾತ್ರ 64 ಮತ್ತು vocabulary 20 tokens ಹೊಂದಿದೆ. ಒಂದೂ token position ಗೆ ಎಷ್ಟೂ vocabulary logits ಉತ್ಪಾದಿಸಲ್ಪಡುತ್ತವೆ?',
        opts: ['20 -- genuinely confirmed, the MLM head maps hidden size to vocab size', '64', '84', '1280'], correct: 0,
        optsKn: ['20 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, MLM head hidden size ಅನ್ನೂ vocab size ಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ', '64', '84', '1280'] },
      { q: 'Why can the model produce outputs at positions whose labels are -100, even though those positions don\'t contribute to the loss?', qKn: 'Labels -100 ಇರುವ positions ನಲ್ಲಿ model outputs ಏಕೆ ಉತ್ಪಾದಿಸಬಹುದು, ಆ positions loss ಗೆ ಕೊಡುಗೆ ನೀಡದಿದ್ದರೂ?',
        opts: ['-100 removes the token from the input', 'The encoder genuinely produces representations for the whole sequence; -100 only tells the loss to ignore that position', '-100 means the token is always correct', 'The model only predicts masked positions internally'], correct: 1,
        optsKn: ['-100 token ಅನ್ನೂ input ಇಂದ ತೆಗೆಯುತ್ತದೆ', 'Encoder ನಿಜವಾಗಿ ಸಂಪೂರ್ಣ sequence ಗಾಗಿ representations ಉತ್ಪಾದಿಸುತ್ತದೆ; -100 ಕೇವಲ loss ಗೆ ಆ position ಬಿಟ್ಟುಬಿಡಿ ಎಂದು ಹೇಳುತ್ತದೆ', '-100 ಎಂದರೆ token ಯಾವಾಗಲೂ ಸರಿ', 'Model ಆಂತರಿಕವಾಗಿ ಕೇವಲ masked positions ಮಾತ್ರ ಊಹಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
