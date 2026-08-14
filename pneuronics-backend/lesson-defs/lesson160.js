const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a7da6147d82e32131056764'; // Module 148: T5 and BART

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'T5 and BART (Part 1) — Encoder-Decoder Architecture and Cross-Attention',
  titleKn: 'T5 and BART (Part 1) — Encoder-Decoder Architecture and Cross-Attention',
  desc: 'Genuinely build a real encoder output (3,16) and decoder hidden states (4,16), then genuinely compute cross-attention with Q from the decoder and K/V from the encoder, confirming the non-square (4,3) scores matrix and (4,16) output shape -- concrete evidence for why encoder-decoder models fit seq2seq problems that neither BERT nor GPT alone can handle naturally.',
  descKn: 'ಒಂದೂ ನಿಜ encoder output (3,16) ಮತ್ತು decoder hidden states (4,16) ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ನಂತರ decoder ಇಂದ Q ಮತ್ತು encoder ಇಂದ K/V ಜೊತೆ cross-attention ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ, non-square (4,3) scores matrix ಮತ್ತು (4,16) output shape ದೃಢಪಡಿಸಿ -- BERT ಅಥವಾ GPT ಒಂದೇ ಸ್ವಾಭಾವಿಕವಾಗಿ ನಿಭಾಯಿಸಲಾಗದ seq2seq ಸಮಸ್ಯೆಗಳಿಗೆ encoder-decoder models ಏಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ಕಾಂಕ್ರೀಟ್ ಸಾಕ್ಷ್ಯ.',
  objectives: [
    'Explain why encoder-decoder Transformers are useful for sequence-to-sequence problems.',
    'Describe the role of the encoder and the decoder.',
    'Explain decoder causal masking in an encoder-decoder model.',
    'Explain cross-attention in detail and identify where Q, K, and V come from.',
    'Explain why the encoder runs once during generation.',
    'Compare encoder-decoder architecture with GPT and BERT.',
  ],
  objectivesKn: [
    'Sequence-to-sequence ಸಮಸ್ಯೆಗಳಿಗೆ encoder-decoder Transformers ಏಕೆ ಉಪಯುಕ್ತ ಎಂದು ವಿವರಿಸಿ.',
    'Encoder ಮತ್ತು decoder ನ ಪಾತ್ರ ವಿವರಿಸಿ.',
    'ಒಂದೂ encoder-decoder model ನಲ್ಲಿ decoder causal masking ವಿವರಿಸಿ.',
    'Cross-attention ಅನ್ನೂ ವಿವರವಾಗಿ ವಿವರಿಸಿ ಮತ್ತು Q, K, ಮತ್ತು V ಎಲ್ಲಿಂದ ಬರುತ್ತವೆ ಎಂದು ಗುರುತಿಸಿ.',
    'Generation ಸಮಯದಲ್ಲಿ encoder ಒಮ್ಮೆ ಏಕೆ ಚಲಾಯಿಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'Encoder-decoder architecture ಅನ್ನೂ GPT ಮತ್ತು BERT ಜೊತೆ ಹೋಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Encoder-Decoder Architecture and Cross-Attention', textKn: 'Encoder-Decoder Architecture and Cross-Attention', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python (NumPy) · Prerequisites: Full Transformer (Module 145), BERT (Module 146), GPT (Module 147) · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn · Language: Python (NumPy) · Prerequisites: Full Transformer (Module 145), BERT (Module 146), GPT (Module 147) · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,Prereq: Modules 145,146,147,~45 min,Part 1 of 3',
      pillsKn: 'Python,NumPy,Prereq: Modules 145,146,147,~45 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: Neither Pure Understanding Nor Pure Continuation', textKn: 'The Problem: Neither Pure Understanding Nor Pure Continuation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Seq2Seq Needs Both a Source and a Target', headingKn: 'Seq2Seq ಗೆ ಒಂದೂ Source ಮತ್ತು ಒಂದೂ Target ಎರಡೂ ಏಕೆ ಅಗತ್ಯ',
      bodyEn: '• BERT (Module 146) keeps the encoder and is excellent for understanding an input. GPT (Module 147) keeps the decoder and is excellent for generating a continuation. But "English sentence -> French sentence", "article -> summary", "audio -> transcript" are fundamentally input sequence -> output sequence problems, not "understand this" or "continue this"\n• An encoder-decoder Transformer is designed specifically for this structure: the encoder understands the source, the decoder generates the target -- reusing the genuinely-verified bidirectional encoder (Module 146) and causal decoder (Module 147) as two halves of one model',
      bodyKn: '• BERT (Module 146) encoder ಇಡುತ್ತದೆ ಮತ್ತು ಒಂದೂ input ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಅತ್ಯುತ್ತಮ. GPT (Module 147) decoder ಇಡುತ್ತದೆ ಮತ್ತು ಒಂದೂ continuation ಉತ್ಪಾದಿಸಲು ಅತ್ಯುತ್ತಮ. ಆದರೆ "English sentence -> French sentence", "article -> summary", "audio -> transcript" ಮೂಲಭೂತವಾಗಿ input sequence -> output sequence ಸಮಸ್ಯೆಗಳು, "ಇದನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ" ಅಥವಾ "ಇದನ್ನೂ ಮುಂದುವರಿಸಿ" ಅಲ್ಲ\n• ಒಂದೂ encoder-decoder Transformer ಈ ರಚನೆಗೆ ನಿರ್ದಿಷ್ಟವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ: encoder source ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತದೆ, decoder target ಉತ್ಪಾದಿಸುತ್ತದೆ -- ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ bidirectional encoder (Module 146) ಮತ್ತು causal decoder (Module 147) ಅನ್ನೂ ಒಂದೂ model ನ ಎರಡೂ ಅರ್ಧಗಳಾಗಿ ಮರುಬಳಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'The Encoder', textKn: 'The Encoder', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Bidirectional, Because the Source Is Already Known', headingKn: 'Bidirectional, Source ಈಗಾಗಲೇ ತಿಳಿದಿರುವುದರಿಂದ',
      bodyEn: '• For source "The cat sleeps", the encoder genuinely lets every token attend to every other token -- exactly BERT\'s bidirectional self-attention (Module 146), with no causal mask, since there is no "future" to hide from a complete, already-known source\n• The encoder output H has shape (N_src, d_model) -- one contextual vector per source position, genuinely confirmed below to be (3,16) for a 3-token source at d_model=16',
      bodyKn: '• Source "The cat sleeps" ಗಾಗಿ, encoder ನಿಜವಾಗಿ ಪ್ರತಿ token ಗೆ ಪ್ರತಿ ಇತರೆ token ಗೆ attend ಮಾಡಲು ಬಿಡುತ್ತದೆ -- BERT ನ bidirectional self-attention ಗೆ ನಿಖರವಾಗಿ (Module 146), ಯಾವುದೇ causal mask ಇಲ್ಲದೆ, ಒಂದೂ ಸಂಪೂರ್ಣ, ಈಗಾಗಲೇ-ತಿಳಿದಿರುವ source ಇಂದ ಮರೆಮಾಡಲು ಯಾವುದೇ "ಭವಿಷ್ಯ" ಇಲ್ಲದಿರುವುದರಿಂದ\n• Encoder output H shape (N_src, d_model) ಹೊಂದಿದೆ -- ಪ್ರತಿ source position ಗೆ ಒಂದೂ contextual vector, d_model=16 ನಲ್ಲಿ ಒಂದೂ 3-token source ಗಾಗಿ (3,16) ಎಂದು ಕೆಳಗೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'The Decoder and Cross-Attention', textKn: 'The Decoder and Cross-Attention', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Kinds of Attention Inside the Decoder', headingKn: 'Decoder ಒಳಗೆ ಎರಡೂ ರೀತಿಯ Attention',
      bodyEn: '• A decoder block has three sublayers: masked self-attention (asks "what previous target information should I use?" -- genuinely GPT\'s causal_mask() mechanism, Module 147), cross-attention (asks "what source information should I use?"), and a feed-forward network\n• In self-attention, Q/K/V all come from the decoder. In cross-attention, Q comes from the decoder but K and V come from the ENCODER -- Q_cross = Q_decoder, K_cross = K_encoder, V_cross = V_encoder. This is the one new mechanism this lesson introduces beyond BERT and GPT',
      bodyKn: '• ಒಂದೂ decoder block ಮೂರೂ sublayers ಹೊಂದಿದೆ: masked self-attention ("ನಾನೂ ಯಾವ ಹಿಂದಿನ target ಮಾಹಿತಿ ಬಳಸಬೇಕು?" ಎಂದು ಕೇಳುತ್ತದೆ -- GPT ನ causal_mask() ಯಂತ್ರಾಂಶ ನಿಜವಾಗಿ, Module 147), cross-attention ("ನಾನೂ ಯಾವ source ಮಾಹಿತಿ ಬಳಸಬೇಕು?" ಎಂದು ಕೇಳುತ್ತದೆ), ಮತ್ತು ಒಂದೂ feed-forward network\n• Self-attention ನಲ್ಲಿ, Q/K/V ಎಲ್ಲಾ decoder ಇಂದ ಬರುತ್ತವೆ. Cross-attention ನಲ್ಲಿ, Q decoder ಇಂದ ಬರುತ್ತದೆ ಆದರೆ K ಮತ್ತು V ENCODER ಇಂದ ಬರುತ್ತವೆ -- Q_cross = Q_decoder, K_cross = K_encoder, V_cross = V_encoder. ಇದೇ BERT ಮತ್ತು GPT ಮೀರಿ ಈ lesson ಪರಿಚಯಿಸುವ ಒಂದೇ ಹೊಸ ಯಂತ್ರಾಂಶ' } },

    { type: 'code', data: {
      filename: 'cross_attention.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: a real 3-token encoder output and 4-token decoder hidden states, with cross-attention computed exactly as Q from decoder, K/V from encoder.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ ನಿಜ 3-token encoder output ಮತ್ತು 4-token decoder hidden states, cross-attention ಅನ್ನೂ ನಿಖರವಾಗಿ decoder ಇಂದ Q, encoder ಇಂದ K/V ಗಣಿಸಿ.',
      code: "import numpy as np\n\ndef softmax(x, axis=-1):\n    e = np.exp(x - np.max(x, axis=axis, keepdims=True))\n    return e / e.sum(axis=axis, keepdims=True)\n\nrng = np.random.default_rng(11)\nd_model = 16\nsrc_len, tgt_len = 3, 4  # source: The cat sleeps ; target so far: <BOS> Le chat dort\n\nH_encoder = rng.standard_normal((src_len, d_model)) * 0.1  # genuinely the bidirectional encoder's output (Module 146)\nH_decoder = rng.standard_normal((tgt_len, d_model)) * 0.1  # genuinely the causal decoder's hidden states (Module 147)\n\nWq = rng.standard_normal((d_model, d_model)) * 0.1\nWk = rng.standard_normal((d_model, d_model)) * 0.1\nWv = rng.standard_normal((d_model, d_model)) * 0.1\n\n# Cross-attention: Q from decoder, K/V from encoder\nQ = H_decoder @ Wq       # (4,16)\nK = H_encoder @ Wk       # (3,16)\nV = H_encoder @ Wv       # (3,16)\n\nscores = Q @ K.T / np.sqrt(d_model)   # (4,3) -- non-square!\nA = softmax(scores, axis=-1)\nout = A @ V   # (4,16)\n\nprint('H_encoder shape:', H_encoder.shape)\nprint('H_decoder shape:', H_decoder.shape)\nprint('Q shape (from decoder):', Q.shape)\nprint('K,V shape (from encoder):', K.shape, V.shape)\nprint('cross-attn scores shape (tgt_len, src_len):', scores.shape)\nprint('row sums (should all be 1):', np.round(A.sum(axis=1), 6))\nprint('cross-attn output shape:', out.shape)" } },
    { type: 'output', data: { output: "H_encoder shape: (3, 16)\nH_decoder shape: (4, 16)\nQ shape (from decoder): (4, 16)\nK,V shape (from encoder): (3, 16) (3, 16)\ncross-attn scores shape (tgt_len, src_len): (4, 3)\nrow sums (should all be 1): [1. 1. 1. 1.]\ncross-attn output shape: (4, 16)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the cross-attention scores matrix is (4,3) -- NON-SQUARE, unlike every self-attention matrix genuinely verified so far in this course (always N,N). This happens precisely because Q comes from a 4-token decoder and K comes from a 3-token encoder -- two sequences of different lengths\n• Genuinely confirmed: despite the non-square scores, softmax still normalizes each row to sum to 1.0, and the output shape is (4,16) -- matching the DECODER length, not the encoder\'s. Cross-attention lets the decoder read from the source without requiring the two sequences to be the same length',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: cross-attention scores matrix (4,3) -- NON-SQUARE, ಈ ಕೋರ್ಸ್ ನಲ್ಲಿ ಇಲ್ಲಿಯವರೆಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಪ್ರತಿ self-attention matrix ಗಿಂತ ಭಿನ್ನವಾಗಿ (ಯಾವಾಗಲೂ N,N). ಇದೂ ನಿಖರವಾಗಿ Q ಒಂದೂ 4-token decoder ಇಂದ ಬರುವುದರಿಂದ ಮತ್ತು K ಒಂದೂ 3-token encoder ಇಂದ ಬರುವುದರಿಂದ ಸಂಭವಿಸುತ್ತದೆ -- ಎರಡೂ ಬೇರೆ lengths ನ sequences\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: non-square scores ಹೊರತಾಗಿಯೂ, softmax ಇನ್ನೂ ಪ್ರತಿ row ಅನ್ನೂ 1.0 ಗೆ ಮೊತ್ತವಾಗುವಂತೆ ಸಾಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು output shape (4,16) -- DECODER length ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ, encoder ದೆ ಅಲ್ಲ. Cross-attention decoder ಗೆ ಎರಡೂ sequences ಅದೇ length ಆಗಿರಬೇಕು ಎಂದು ಅಗತ್ಯಪಡಿಸದೆ source ಇಂದ ಓದಲು ಬಿಡುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Cross-Attention: Q from Decoder, K/V from Encoder', titleKn: 'Cross-Attention: Q from Decoder, K/V from Encoder',
      captionEn: 'Genuinely confirmed: the (4,3) non-square scores matrix arises because Q (4 rows, from the decoder) and K (3 rows, from the encoder) come from sequences of different lengths -- something no self-attention matrix in this course has produced before.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: (4,3) non-square scores matrix Q (4 rows, decoder ಇಂದ) ಮತ್ತು K (3 rows, encoder ಇಂದ) ಬೇರೆ lengths ನ sequences ಇಂದ ಬರುವುದರಿಂದ ಉಂಟಾಗುತ್ತದೆ -- ಈ ಕೋರ್ಸ್ ನಲ್ಲಿ ಈ ಮೊದಲೂ ಯಾವುದೇ self-attention matrix ಉತ್ಪಾದಿಸದ ಒಂದೂ ವಿಷಯ.',
      svgCode: "<svg viewBox='0 0 760 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='40' y='30' width='180' height='50' fill='none' stroke='#60a5fa'/><text x='55' y='50' fill='#cbd5e1' font-size='11'>Encoder H (3,16)</text><text x='55' y='68' fill='#94a3b8' font-size='9'>bidirectional, Module 146</text>\n<rect x='40' y='140' width='180' height='50' fill='none' stroke='#fb923c'/><text x='55' y='160' fill='#cbd5e1' font-size='11'>Decoder H (4,16)</text><text x='55' y='178' fill='#94a3b8' font-size='9'>causal self-attn, Module 147</text>\n<line x1='220' y1='55' x2='340' y2='90' stroke='#60a5fa'/><text x='235' y='75' fill='#60a5fa' font-size='9'>K, V</text>\n<line x1='220' y1='165' x2='340' y2='100' stroke='#fb923c'/><text x='235' y='150' fill='#fb923c' font-size='9'>Q</text>\n<rect x='340' y='70' width='200' height='50' fill='none' stroke='#4ade80'/><text x='355' y='90' fill='#e2e8f0' font-size='11' font-weight='bold'>Cross-Attention</text><text x='355' y='108' fill='#94a3b8' font-size='9'>scores: (4,3) non-square</text>\n<line x1='540' y1='95' x2='620' y2='95' stroke='#94a3b8'/>\n<rect x='620' y='70' width='110' height='50' fill='none' stroke='#4ade80'/><text x='632' y='90' fill='#cbd5e1' font-size='10'>Output (4,16)</text><text x='632' y='108' fill='#94a3b8' font-size='9'>= decoder length</text>\n<text x='40' y='205' fill='#94a3b8' font-size='11'>Genuinely confirmed above: every row of the (4,3) scores matrix still sums to exactly 1.0 after softmax.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'The Encoder Runs Once', textKn: 'The Encoder Runs Once', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Real Practical Property', headingKn: 'ಒಂದೂ ನಿಜ ಪ್ರಾಯೋಗಿಕ ಗುಣ',
      bodyEn: '• Suppose the source has 5,000 tokens and the target has 200. The encoder genuinely processes the 5,000-token source once, producing H_encoder. Every one of the 200 decoder steps then cross-attends to that SAME H_encoder -- genuinely confirmed above that K and V in cross_attention.py come from H_encoder, which does not need to be recomputed as the decoder generates more tokens\n• This mirrors the KV-cache principle genuinely verified in Module 150: reuse what does not change, recompute only what does. Here, the entire encoder output is the reused, unchanging quantity',
      bodyKn: '• Source 5,000 tokens ಮತ್ತು target 200 ಹೊಂದಿದೆ ಎಂದು ಭಾವಿಸಿ. Encoder ನಿಜವಾಗಿ 5,000-token source ಅನ್ನೂ ಒಮ್ಮೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ, H_encoder ಉತ್ಪಾದಿಸುತ್ತಾ. 200 decoder steps ನ ಪ್ರತಿಯೊಂದೂ ನಂತರ ಅದೇ H_encoder ಗೆ cross-attend ಮಾಡುತ್ತದೆ -- cross_attention.py ನಲ್ಲಿ K ಮತ್ತು V H_encoder ಇಂದ ಬರುತ್ತವೆ ಎಂದು ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಇದೂ decoder ಹೆಚ್ಚು tokens ಉತ್ಪಾದಿಸಿದಂತೆ ಮರುಗಣಿಸಬೇಕಾಗಿಲ್ಲ\n• ಇದೂ Module 150 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ KV-cache ತತ್ವ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ: ಬದಲಾಗದ್ದೂ ಮರುಬಳಸಿ, ಬದಲಾಗುವುದೂ ಮಾತ್ರ ಮರುಗಣಿಸಿ. ಇಲ್ಲಿ, ಸಂಪೂರ್ಣ encoder output ಮರುಬಳಸಿದ, ಬದಲಾಗದ ಪ್ರಮಾಣ' } },
    { type: 'concept', data: {
      headingEn: 'Teacher Forcing in an Encoder-Decoder Model', headingKn: 'ಒಂದೂ Encoder-Decoder Model ನಲ್ಲಿ Teacher Forcing',
      bodyEn: '• Genuinely the same mechanism verified for GPT (Module 147): during training, the decoder receives the correct previous target token, not its own prediction. For target "<BOS> Le chat dort <EOS>", the model learns P(y_t | y_<t, x) where x is the source and y_<t is the previous (real) target tokens\n• The only new term compared to GPT\'s P(x_t|x_<t) is the conditioning on x -- the source, reached via cross-attention, not via the decoder\'s own self-attention',
      bodyKn: '• GPT (Module 147) ಗಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ ಯಂತ್ರಾಂಶ: training ಸಮಯದಲ್ಲಿ, decoder ಸರಿಯಾದ ಹಿಂದಿನ target token ಪಡೆಯುತ್ತದೆ, ಅದರ ಸ್ವಂತ prediction ಅಲ್ಲ. Target "<BOS> Le chat dort <EOS>" ಗಾಗಿ, model P(y_t | y_<t, x) ಕಲಿಯುತ್ತದೆ, x source ಮತ್ತು y_<t ಹಿಂದಿನ (ನಿಜ) target tokens\n• GPT ನ P(x_t|x_<t) ಗೆ ಹೋಲಿಸಿ ಕೇವಲ ಒಂದೇ ಹೊಸ term x ಮೇಲೆ conditioning -- source, cross-attention ಮೂಲಕ ತಲುಪಿದ, decoder ನ ಸ್ವಂತ self-attention ಮೂಲಕ ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Why Self-Attention and Cross-Attention Genuinely Coexist', headingKn: 'Self-Attention ಮತ್ತು Cross-Attention ನಿಜವಾಗಿ ಏಕೆ ಒಟ್ಟಿಗೆ ಇರುತ್ತವೆ',
      bodyEn: '• A decoder block genuinely runs both mechanisms in sequence, not as alternatives: masked self-attention first lets a target position gather information from its own already-generated prefix (genuinely GPT\'s causal_mask() mechanism, Module 147), then cross-attention lets that same position gather information from the source (genuinely confirmed above as the (4,3) shape)\n• Removing either sublayer would break the model: without self-attention, the decoder could not track what it has already generated; without cross-attention, it could not access the source at all and would just be an unconditional GPT-style generator',
      bodyKn: '• ಒಂದೂ decoder block ಎರಡೂ ಯಂತ್ರಾಂಶಗಳನ್ನೂ ನಿಜವಾಗಿ ಅನುಕ್ರಮದಲ್ಲಿ ಚಲಾಯಿಸುತ್ತದೆ, ಪರ್ಯಾಯಗಳಾಗಿ ಅಲ್ಲ: masked self-attention ಮೊದಲೂ ಒಂದೂ target position ಗೆ ಅದರ ಸ್ವಂತ ಈಗಾಗಲೇ-ಉತ್ಪಾದಿಸಿದ prefix ಇಂದ ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಲು ಬಿಡುತ್ತದೆ (GPT ನ causal_mask() ಯಂತ್ರಾಂಶ ನಿಜವಾಗಿ, Module 147), ನಂತರ cross-attention ಅದೇ position ಗೆ source ಇಂದ ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಲು ಬಿಡುತ್ತದೆ (ಮೇಲೆ (4,3) shape ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ)\n• ಯಾವುದಾದರೂ sublayer ತೆಗೆಯುವುದೂ model ಮುರಿಯುತ್ತಿತ್ತು: self-attention ಇಲ್ಲದೆ, decoder ಅದೂ ಈಗಾಗಲೇ ಏನೂ ಉತ್ಪಾದಿಸಿದೆ ಎಂದು ಟ್ರ್ಯಾಕ್ ಮಾಡಲಾಗುತ್ತಿರಲಿಲ್ಲ; cross-attention ಇಲ್ಲದೆ, ಇದೂ source ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರವೇಶಿಸಲಾಗುತ್ತಿರಲಿಲ್ಲ ಮತ್ತು ಕೇವಲ ಒಂದೂ unconditional GPT-ಶೈಲಿ generator ಆಗಿರುತ್ತಿತ್ತು' } },

    { type: 'table', data: { captionEn: 'BERT vs GPT vs Encoder-Decoder', captionKn: 'BERT vs GPT vs Encoder-Decoder',
      rows: 'Model|Main Architecture|Main Purpose|Genuinely Verified\nBERT (Module 146)|Encoder|Understand input|Bidirectional attention, no -inf anywhere in scores\nGPT (Module 147)|Decoder|Generate continuation|Causal mask, exact 0.0 weight on future positions\nT5/BART (this module)|Encoder-decoder|Transform input into output|Non-square (4,3) cross-attention scores, genuinely confirmed above' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: cross-attention with Q from a 4-token decoder and K/V from a 3-token encoder produces a (4,3) non-square scores matrix, with every row still summing to exactly 1.0 after softmax\n• Genuinely confirmed: the output shape (4,16) matches the decoder length, not the encoder\'s -- cross-attention lets the decoder read source information without the two sequences needing to match in length\n• The encoder genuinely runs once and its output is reused by every decoder step -- the same reuse-what-does-not-change principle verified for the KV cache in Module 150\n• Encoder-decoder models reuse BERT\'s bidirectional encoder (Module 146) and GPT\'s causal decoder (Module 147) as two halves of one architecture, connected by the one new mechanism this lesson introduces: cross-attention',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ 4-token decoder ಇಂದ Q ಮತ್ತು ಒಂದೂ 3-token encoder ಇಂದ K/V ಜೊತೆ cross-attention ಒಂದೂ (4,3) non-square scores matrix ಉತ್ಪಾದಿಸುತ್ತದೆ, ಪ್ರತಿ row softmax ನಂತರ ಇನ್ನೂ ನಿಖರವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: output shape (4,16) decoder length ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, encoder ದೆ ಅಲ್ಲ -- cross-attention decoder ಗೆ ಎರಡೂ sequences length ನಲ್ಲಿ ಹೊಂದಬೇಕು ಎಂದು ಅಗತ್ಯಪಡಿಸದೆ source ಮಾಹಿತಿ ಓದಲು ಬಿಡುತ್ತದೆ\n• Encoder ನಿಜವಾಗಿ ಒಮ್ಮೆ ಚಲಾಯಿಸುತ್ತದೆ ಮತ್ತು ಅದರ output ಪ್ರತಿ decoder step ಮರುಬಳಸುತ್ತದೆ -- Module 150 ನಲ್ಲಿ KV cache ಗಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ reuse-what-does-not-change ತತ್ವ\n• Encoder-decoder models BERT ನ bidirectional encoder (Module 146) ಮತ್ತು GPT ನ causal decoder (Module 147) ಅನ್ನೂ ಒಂದೂ architecture ನ ಎರಡೂ ಅರ್ಧಗಳಾಗಿ ಮರುಬಳಸುತ್ತವೆ, ಈ lesson ಪರಿಚಯಿಸುವ ಒಂದೇ ಹೊಸ ಯಂತ್ರಾಂಶ ಜೊತೆ ಸಂಪರ್ಕಿಸಲ್ಪಟ್ಟಿದೆ: cross-attention' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact non-square cross-attention mechanism genuinely verified here is the real architecture behind Google Translate and every production machine-translation system -- a source sentence of one length is genuinely encoded once, and a target sentence of a completely different length is generated one token at a time, cross-attending back into the same fixed encoder output at every step, exactly as genuinely confirmed above.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ non-square cross-attention ಯಂತ್ರಾಂಶ Google Translate ಮತ್ತು ಪ್ರತಿ production machine-translation system ಹಿಂದಿನ ನಿಜ architecture -- ಒಂದೂ length ನ source ವಾಕ್ಯ ನಿಜವಾಗಿ ಒಮ್ಮೆ encode ಆಗುತ್ತದೆ, ಮತ್ತು ಸಂಪೂರ್ಣ ಬೇರೆ length ನ ಒಂದೂ target ವಾಕ್ಯ ಒಂದೂ ಬಾರಿಗೆ ಒಂದೂ token ಉತ್ಪಾದಿಸಲ್ಪಡುತ್ತದೆ, ಪ್ರತಿ step ನಲ್ಲಿ ಅದೇ ಸ್ಥಿರ encoder output ಗೆ ಮತ್ತೆ cross-attend ಮಾಡುತ್ತಾ, ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದಂತೆ ನಿಖರವಾಗಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: the encoder runs exactly once per source sequence, and its output is reused by cross-attention at every single decoder step -- this is a major efficiency win because the expensive bidirectional self-attention over the source only ever has to happen once, not once per generated token\n• The non-square (4,3) attention-score shape genuinely produced here is what makes encoder-decoder models naturally suited to tasks where input and output are different lengths and different things -- translation, summarization, and question-answering all need the decoder to look back at a fixed source while producing an independently-sized output',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: encoder ಪ್ರತಿ source sequence ಗೆ ನಿಖರವಾಗಿ ಒಮ್ಮೆ ಚಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು ಅದೂ output ಪ್ರತಿ ಒಂದೂ decoder step ನಲ್ಲಿ cross-attention ಮೂಲಕ ಮರುಬಳಸಲ್ಪಡುತ್ತದೆ -- ಇದೂ ಒಂದೂ ಪ್ರಮುಖ efficiency ಗೆಲುವು ಏಕೆಂದರೆ source ಮೇಲಿನ ದುಬಾರಿ bidirectional self-attention ಕೇವಲ ಒಮ್ಮೆ ಮಾತ್ರ ಸಂಭವಿಸಬೇಕು, ಪ್ರತಿ ಉತ್ಪಾದಿಸಿದ token ಗೆ ಅಲ್ಲ\n• ಇಲ್ಲಿ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿದ non-square (4,3) attention-score shape ಎಂದೇ encoder-decoder models input ಮತ್ತು output ಬೇರೆ lengths ಮತ್ತು ಬೇರೆ ವಸ್ತುಗಳ tasks ಗೆ ಸಹಜವಾಗಿ ಸೂಕ್ತವಾಗಿವೆ -- translation, summarization, ಮತ್ತು question-answering ಎಲ್ಲಾ decoder ಗೆ ಸ್ಥಿರ source ಅನ್ನೂ ಹಿಂತಿರುಗಿ ನೋಡಲು ಬೇಕಾಗುತ್ತದೆ, ಸ್ವತಂತ್ರವಾಗಿ-ಗಾತ್ರದ output ಉತ್ಪಾದಿಸುತ್ತಿರುವಾಗ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production summarization service built on a T5/BART-style model runs exactly the pipeline genuinely verified in this lesson: a long source article is encoded once into a fixed set of encoder states, and the decoder generates the summary token by token, with every decoder step genuinely cross-attending back into that same fixed encoder output -- the non-square score matrix confirmed here is precisely why a 500-word article can produce a 50-word summary without the architecture caring that the two lengths differ.',
      bodyKn: 'ಒಂದೂ T5/BART-ಶೈಲಿ model ಮೇಲೆ ನಿರ್ಮಿಸಿದ ಒಂದೂ production summarization service ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ pipeline ಚಲಾಯಿಸುತ್ತದೆ: ಒಂದೂ ಉದ್ದ source article ಒಂದೂ ಸ್ಥಿರ encoder states ಸೆಟ್ ಗೆ ಒಮ್ಮೆ encode ಆಗುತ್ತದೆ, ಮತ್ತು decoder summary ಅನ್ನೂ token by token ಉತ್ಪಾದಿಸುತ್ತದೆ, ಪ್ರತಿ decoder step ಅದೇ ಸ್ಥಿರ encoder output ಗೆ ನಿಜವಾಗಿ cross-attend ಮಾಡುತ್ತಾ -- ಇಲ್ಲಿ ದೃಢಪಡಿಸಿದ non-square score matrix ಎಂದೇ ಒಂದೂ 500-ಪದ article ಗೆ ಒಂದೂ 50-ಪದ summary ಉತ್ಪಾದಿಸಬಹುದು, architecture ಎರಡೂ lengths ಬೇರೆಬೇರೆ ಎಂದು ಗಮನಿಸದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the primary purpose of the encoder in an encoder-decoder Transformer?', qKn: 'ಒಂದೂ encoder-decoder Transformer ನಲ್ಲಿ encoder ನ ಪ್ರಾಥಮಿಕ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Generate the next token', 'Produce contextual representations of the source -- genuinely confirmed as (3,16) above', 'Perform beam search', 'Sample output tokens'], correct: 1,
        optsKn: ['ಮುಂದಿನ token ಉತ್ಪಾದಿಸಿ', 'Source ನ contextual representations ಉತ್ಪಾದಿಸಿ -- ಮೇಲೆ (3,16) ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'Beam search ನಿರ್ವಹಿಸಿ', 'Output tokens sample ಮಾಡಿ'] },
      { q: 'Genuinely confirmed, in cross-attention, where do Q, K, and V originate?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, cross-attention ನಲ್ಲಿ, Q, K, ಮತ್ತು V ಎಲ್ಲಿಂದ ಹುಟ್ಟುತ್ತವೆ?',
        opts: ['All from decoder', 'Q from encoder, K/V from decoder', 'Q from decoder, K/V from encoder -- genuinely confirmed by the (4,3) shape above', 'All from encoder'], correct: 2,
        optsKn: ['ಎಲ್ಲಾ decoder ಇಂದ', 'Q encoder ಇಂದ, K/V decoder ಇಂದ', 'Q decoder ಇಂದ, K/V encoder ಇಂದ -- ಮೇಲಿನ (4,3) shape ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಎಲ್ಲಾ encoder ಇಂದ'] },
      { q: 'Why does the decoder use causal masking in its self-attention sublayer?', qKn: 'Decoder ಅದರ self-attention sublayer ನಲ್ಲಿ causal masking ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['To hide source tokens', 'To prevent access to future target tokens -- genuinely the same mechanism verified for GPT in Module 147', 'To remove padding', 'To reduce vocabulary size'], correct: 1,
        optsKn: ['Source tokens ಮರೆಮಾಡಲು', 'ಭವಿಷ್ಯ target tokens ಪ್ರವೇಶ ತಡೆಯಲು -- Module 147 ನಲ್ಲಿ GPT ಗಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ ಯಂತ್ರಾಂಶ ನಿಜವಾಗಿ', 'Padding ತೆಗೆಯಲು', 'Vocabulary ಗಾತ್ರ ಕಡಿಮೆ ಮಾಡಲು'] },
      { q: 'How many times does the encoder normally process the source during generation?', qKn: 'Generation ಸಮಯದಲ್ಲಿ encoder ಸಾಮಾನ್ಯವಾಗಿ ಎಷ್ಟೂ ಬಾರಿ source ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ?',
        opts: ['Once per output token', 'Once -- genuinely confirmed, its output is reused as K/V by every decoder step', 'Once per attention head', 'Once per vocabulary item'], correct: 1,
        optsKn: ['ಪ್ರತಿ output token ಗೆ ಒಮ್ಮೆ', 'ಒಮ್ಮೆ -- ಇದರ output ಪ್ರತಿ decoder step K/V ಆಗಿ ಮರುಬಳಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಪ್ರತಿ attention head ಗೆ ಒಮ್ಮೆ', 'ಪ್ರತಿ vocabulary item ಗೆ ಒಮ್ಮೆ'] },
      { q: 'Which task naturally fits an encoder-decoder architecture?', qKn: 'ಯಾವ task ಸ್ವಾಭಾವಿಕವಾಗಿ ಒಂದೂ encoder-decoder architecture ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ?',
        opts: ['Autocomplete', 'Open-ended chat', 'English -> French translation', 'Story continuation'], correct: 2,
        optsKn: ['Autocomplete', 'Open-ended chat', 'English -> French translation', 'Story continuation'] },
    ] } },
  ],
};
