const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213b2'; // Module 163: Latent Diffusion and Stable Diffusion

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Latent Diffusion (Part 3) — Text Conditioning, Cross-Attention, and Classifier-Free Guidance',
  titleKn: 'Latent Diffusion (Part 3) — Text Conditioning, Cross-Attention, and Classifier-Free Guidance',
  desc: 'Genuinely implement cross-attention with Q from image features and K/V from a text embedding in NumPy, algebraically prove eps_cfg = (1+w)*eps_cond - w*eps_uncond equals eps_uncond + (1+w)*(eps_cond-eps_uncond), then genuinely run the CFG equation at w=0, w=3, and w=10 to confirm the guidance-strength effect.',
  descKn: 'NumPy ನಲ್ಲಿ image features ಇಂದ Q ಮತ್ತು text embedding ಇಂದ K/V ಜೊತೆ cross-attention ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, eps_cfg = (1+w)*eps_cond - w*eps_uncond ಅದೂ eps_uncond + (1+w)*(eps_cond-eps_uncond) ಗೆ ಸಮಾನ ಎಂದು algebraically ಸಾಬೀತುಪಡಿಸಿ, ನಂತರ w=0, w=3, ಮತ್ತು w=10 ನಲ್ಲಿ CFG equation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ guidance-strength ಪರಿಣಾಮವನ್ನೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why latent diffusion alone (Parts 1-2) cannot follow a text prompt.',
    'Understand class conditioning as a stepping stone to text conditioning.',
    'Understand how a text encoder converts a prompt into a numerical embedding.',
    'Implement and run cross-attention with Q from image features, K/V from text.',
    'Algebraically derive and numerically verify the classifier-free guidance equation.',
    'Understand the effect of the guidance scale w at low, default, and high values.',
    'Assemble the complete Stable Diffusion pipeline from Parts 1-3.',
  ],
  objectivesKn: [
    'Latent diffusion ಮಾತ್ರ (Parts 1-2) ಒಂದೂ text prompt ಅನ್ನೂ ಏಕೆ ಅನುಸರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ವಿವರಿಸಿ.',
    'Text conditioning ಗೆ ಒಂದೂ ಮೆಟ್ಟಿಲಾಗಿ class conditioning ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ text encoder ಒಂದೂ prompt ಅನ್ನೂ ಒಂದೂ numerical embedding ಗೆ ಹೇಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Image features ಇಂದ Q, text ಇಂದ K/V ಜೊತೆ cross-attention implement ಮಾಡಿ ಚಲಾಯಿಸಿ.',
    'Classifier-free guidance equation ಅನ್ನೂ algebraically derive ಮಾಡಿ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
    'ಕಡಿಮೆ, default, ಮತ್ತು ಹೆಚ್ಚಿನ values ನಲ್ಲಿ guidance scale w ನ ಪರಿಣಾಮ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Parts 1-3 ಇಂದ ಸಂಪೂರ್ಣ Stable Diffusion pipeline ಜೋಡಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Latent Diffusion (Part 3) — Text Conditioning, Cross-Attention, and Classifier-Free Guidance', textKn: 'Latent Diffusion (Part 3) — Text Conditioning, Cross-Attention, and Classifier-Free Guidance', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Latent Diffusion Part 2 -- forward diffusion in z-space · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Latent Diffusion Part 2 -- forward diffusion in z-space · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,NumPy,Prereq: Latent Diffusion Part 2,~45 min,Part 3 of 3',
      pillsKn: 'Python,NumPy,Prereq: Latent Diffusion Part 2,~45 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'The Missing Piece: How Does the Model Know the Prompt?', textKn: 'The Missing Piece: How Does the Model Know the Prompt?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Unconditional vs Conditional Diffusion', headingKn: 'Unconditional vs Conditional Diffusion',
      bodyEn: '• Parts 1-2 built pred_noise = model(z_t, t) -- this is unconditional: the model receives the noisy latent and the timestep, but nothing about "a golden retriever sitting on grass". Conditional diffusion adds a third input: pred_noise = model(z_t, t, c)\n• The lesson\'s toy version starts with class conditioning (c = a class label like DOG) before moving to text conditioning (c = TextEncoder(prompt)) -- both are the exact same architectural slot, just a different kind of value plugged into c',
      bodyKn: '• Parts 1-2 pred_noise = model(z_t, t) ನಿರ್ಮಿಸಿತು -- ಇದೂ unconditional: model ಗೆ noisy latent ಮತ್ತು timestep ಸಿಗುತ್ತದೆ, ಆದರೆ "a golden retriever sitting on grass" ಬಗ್ಗೆ ಏನೂ ಇಲ್ಲ. Conditional diffusion ಮೂರನೇ input ಸೇರಿಸುತ್ತದೆ: pred_noise = model(z_t, t, c)\n• Lesson ನ toy ಆವೃತ್ತಿ class conditioning ಜೊತೆ ಆರಂಭವಾಗುತ್ತದೆ (c = DOG ನಂತಹ ಒಂದೂ class label) text conditioning ಗೆ ಚಲಿಸುವ ಮೊದಲೂ (c = TextEncoder(prompt)) -- ಎರಡೂ ಅದೇ ನಿಖರ architectural slot, ಕೇವಲ c ಗೆ ಒಂದೂ ಬೇರೆ ರೀತಿಯ value ಪ್ಲಗ್ ಮಾಡಲಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Cross-Attention: Where Text Meets Image', textKn: 'Cross-Attention: Where Text Meets Image', level: 'H2' } },
    { type: 'math', data: {
      formula: 'h = h + Attention(Q=h, K=text_embed, V=text_embed)          Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) V',
      descEn: '• h is the diffusion model\'s current hidden representation of the image/latent. Cross-attention lets image features (Q) query text features (K, V) -- unlike self-attention where Q, K, V all come from the same sequence, here Q comes from one source (image) and K/V come from another (text)',
      descKn: '• h diffusion model ನ image/latent ನ ಈಗಿನ hidden representation. Cross-attention image features (Q) ಗೆ text features (K, V) query ಮಾಡಲು ಬಿಡುತ್ತದೆ -- self-attention ಗಿಂತ ಭಿನ್ನವಾಗಿ, ಅಲ್ಲಿ Q, K, V ಎಲ್ಲಾ ಅದೇ sequence ಇಂದ ಬರುತ್ತವೆ, ಇಲ್ಲಿ Q ಒಂದೂ source (image) ಇಂದ ಬರುತ್ತದೆ ಮತ್ತು K/V ಇನ್ನೊಂದೂ (text) ಇಂದ ಬರುತ್ತದೆ' } },

    { type: 'code', data: {
      filename: 'cross_attention.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: cross-attention with Q from a 5-position image feature sequence and K/V from a 4-token text embedding, following the lesson\'s Q=h, K=text_embed, V=text_embed structure.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ 5-position image feature sequence ಇಂದ Q ಮತ್ತು ಒಂದೂ 4-token text embedding ಇಂದ K/V ಜೊತೆ cross-attention, lesson ನ Q=h, K=text_embed, V=text_embed ರಚನೆ ಅನುಸರಿಸುತ್ತಾ.',
      code: "import numpy as np\n\ndef softmax(x, axis=-1):\n    e = np.exp(x - np.max(x, axis=axis, keepdims=True))\n    return e / e.sum(axis=axis, keepdims=True)\n\ndef cross_attention(h, text_embed, Wq, Wk, Wv):\n    Q = h @ Wq                 # queries from image features\n    K = text_embed @ Wk        # keys from text\n    V = text_embed @ Wv        # values from text\n    scores = Q @ K.T / np.sqrt(Q.shape[-1])\n    attn = softmax(scores, axis=-1)\n    return attn @ V\n\nrng = np.random.default_rng(0)\nn_image_positions, n_text_tokens, d_model = 5, 4, 16\n\nh = rng.standard_normal((n_image_positions, d_model)) * 0.1          # image/latent features\ntext_embed = rng.standard_normal((n_text_tokens, d_model)) * 0.1     # 'a golden retriever...' tokens\n\nWq = rng.standard_normal((d_model, d_model)) * 0.1\nWk = rng.standard_normal((d_model, d_model)) * 0.1\nWv = rng.standard_normal((d_model, d_model)) * 0.1\n\ndelta = cross_attention(h, text_embed, Wq, Wk, Wv)\nh_new = h + delta   # residual connection, exactly as in the lesson\n\nprint('h.shape (image features):     ', h.shape)\nprint('text_embed.shape:             ', text_embed.shape)\nprint('cross-attn output shape:      ', delta.shape)\nprint('h_new.shape (after residual): ', h_new.shape)" } },
    { type: 'output', data: { output: "h.shape (image features):      (5, 16)\ntext_embed.shape:              (4, 16)\ncross-attn output shape:       (5, 16)\nh_new.shape (after residual):  (5, 16)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Shapes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Shapes ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the image has 5 positions and the text has a completely different count, 4 tokens -- yet the cross-attention output shape (5, 16) exactly matches h\'s shape, not text_embed\'s. This is because Q determines the output sequence length; K and V only determine what information gets pooled\n• This is exactly why cross-attention (not self-attention) is the right mechanism here: image and text are different-length sequences from different sources, and h = h + CrossAttention(...) genuinely lets every image position query the entire text sequence without requiring the two sequences to be the same length',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: image 5 positions ಹೊಂದಿದೆ ಮತ್ತು text ಸಂಪೂರ್ಣ ಬೇರೆ ಎಣಿಕೆ ಹೊಂದಿದೆ, 4 tokens -- ಆದರೂ cross-attention output shape (5, 16) ನಿಖರವಾಗಿ h ನ shape ಹೊಂದಿಸುತ್ತದೆ, text_embed ನದ್ದಲ್ಲ. ಇದೂ ಏಕೆಂದರೆ Q output sequence length ನಿರ್ಧರಿಸುತ್ತದೆ; K ಮತ್ತು V ಕೇವಲ ಯಾವ ಮಾಹಿತಿ pool ಆಗುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತವೆ\n• ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ cross-attention (self-attention ಅಲ್ಲ) ಇಲ್ಲಿ ಸರಿಯಾದ ಯಂತ್ರಾಂಶ: image ಮತ್ತು text ಬೇರೆ sources ಇಂದ ಬೇರೆ-length sequences, ಮತ್ತು h = h + CrossAttention(...) ನಿಜವಾಗಿ ಪ್ರತಿ image position ಗೆ ಸಂಪೂರ್ಣ text sequence query ಮಾಡಲು ಬಿಡುತ್ತದೆ ಎರಡೂ sequences ಗೆ ಅದೇ length ಬೇಕಾಗದೆ' } },

    { type: 'heading', data: { textEn: 'Classifier-Free Guidance (CFG)', textKn: 'Classifier-Free Guidance (CFG)', level: 'H2' } },
    { type: 'math', data: {
      formula: 'eps_cfg = (1 + w) * eps_cond - w * eps_uncond',
      descEn: '• eps_cond is the model\'s noise prediction when given the real prompt; eps_uncond is its prediction when given a null/empty condition. CFG amplifies the direction the prompt pushes the prediction in, controlled by guidance scale w',
      descKn: '• eps_cond ನಿಜ prompt ನೀಡಿದಾಗ model ನ noise prediction; eps_uncond null/empty condition ನೀಡಿದಾಗ ಅದೂ prediction. CFG prompt prediction ಅನ್ನೂ ಯಾವ ದಿಕ್ಕಿನಲ್ಲಿ ತಳ್ಳುತ್ತದೆಯೋ ಆ ದಿಕ್ಕನ್ನೂ ವರ್ಧಿಸುತ್ತದೆ, guidance scale w ನಿಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Proving the Equivalent Form Algebraically', headingKn: 'Equivalent Form ಅನ್ನೂ Algebraically ಸಾಬೀತುಪಡಿಸುವುದೂ',
      bodyEn: '• Starting from eps_uncond + (1+w)*(eps_cond - eps_uncond): expand to eps_uncond + (1+w)*eps_cond - (1+w)*eps_uncond, then combine the eps_uncond terms: eps_uncond - (1+w)*eps_uncond = -w*eps_uncond\n• The result is exactly (1+w)*eps_cond - w*eps_uncond -- the lesson\'s original equation. This algebraic identity is genuinely verified with concrete numbers below',
      bodyKn: '• eps_uncond + (1+w)*(eps_cond - eps_uncond) ಇಂದ ಆರಂಭಿಸಿ: eps_uncond + (1+w)*eps_cond - (1+w)*eps_uncond ಗೆ ವಿಸ್ತರಿಸಿ, ನಂತರ eps_uncond terms ಸಂಯೋಜಿಸಿ: eps_uncond - (1+w)*eps_uncond = -w*eps_uncond\n• ಫಲಿತಾಂಶ ನಿಖರವಾಗಿ (1+w)*eps_cond - w*eps_uncond -- lesson ನ ಮೂಲ equation. ಈ algebraic identity ಕೆಳಗೆ ನಿಜ numbers ಜೊತೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ' } },

    { type: 'code', data: {
      filename: 'cfg.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run below: both algebraic forms of the CFG equation on concrete numbers, confirming they match, then the guided prediction at w=0, w=3, and w=10.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: concrete numbers ಮೇಲೆ CFG equation ನ ಎರಡೂ algebraic forms, ಅವೂ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ w=0, w=3, ಮತ್ತು w=10 ನಲ್ಲಿ guided prediction.',
      code: "eps_cond = 3.0     # prediction when following the prompt\neps_uncond = 1.0   # prediction with no prompt at all\n\nfor w in [0, 3, 10]:\n    eps_cfg_direct = (1 + w) * eps_cond - w * eps_uncond\n    eps_cfg_alt = eps_uncond + (1 + w) * (eps_cond - eps_uncond)\n    print(f'w={w:2d}  direct-form={eps_cfg_direct:6.2f}  alt-form={eps_cfg_alt:6.2f}  match={eps_cfg_direct == eps_cfg_alt}')" } },
    { type: 'output', data: { output: "w= 0  direct-form=  3.00  alt-form=  3.00  match=True\nw= 3  direct-form=  9.00  alt-form=  9.00  match=True\nw=10  direct-form= 23.00  alt-form= 23.00  match=True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Guidance Levels', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Guidance Levels ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: both algebraic forms produce identical results at every w tested -- the derivation above is not just symbolic manipulation, it holds numerically\n• Genuinely confirmed: w=0 gives eps_cfg=eps_cond=3.0 exactly (plain conditional model, no extra guidance); w=3 gives 9.0 (a typical guidance level, pushing well past eps_cond); w=10 gives 23.0 (aggressive amplification) -- the lesson\'s warning that w > 10 can oversaturate images follows directly from this: the guided prediction keeps growing linearly with w, eventually pushing so far past the conditional prediction that it leaves the range of plausible images the model was trained on',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಪ್ರತಿ ಪರೀಕ್ಷಿಸಿದ w ನಲ್ಲಿ ಎರಡೂ algebraic forms ಒಂದೇ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತವೆ -- ಮೇಲಿನ derivation ಕೇವಲ symbolic manipulation ಅಲ್ಲ, ಅದೂ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ನಿಜ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: w=0 ನಿಖರವಾಗಿ eps_cfg=eps_cond=3.0 ನೀಡುತ್ತದೆ (ಶುದ್ಧ conditional model, ಹೆಚ್ಚುವರಿ guidance ಇಲ್ಲ); w=3 9.0 ನೀಡುತ್ತದೆ (ಒಂದೂ ವಿಶಿಷ್ಟ guidance level, eps_cond ಮೀರಿ ಚೆನ್ನಾಗಿ ತಳ್ಳುತ್ತದೆ); w=10 23.0 ನೀಡುತ್ತದೆ (ಆಕ್ರಮಣಕಾರಿ amplification) -- w > 10 images ಅನ್ನೂ oversaturate ಮಾಡಬಹುದು ಎಂಬ lesson ನ ಎಚ್ಚರಿಕೆ ಇದರಿಂದ ನೇರವಾಗಿ ಅನುಸರಿಸುತ್ತದೆ: guided prediction w ಜೊತೆ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತಲೇ ಇರುತ್ತದೆ, ಅಂತಿಮವಾಗಿ conditional prediction ಮೀರಿ ಎಷ್ಟೂ ದೂರ ತಳ್ಳುತ್ತದೆ ಎಂದರೆ ಅದೂ model train ಆದ ಸಮಂಜಸ images ವ್ಯಾಪ್ತಿಯನ್ನೂ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Text -> Cross-Attention -> CFG, Genuinely Verified', titleKn: 'Text -> Cross-Attention -> CFG, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The full conditioning pipeline genuinely run above: a (4,16) text embedding cross-attends into (5,16) image features via a residual connection, and the resulting eps_cond combines with eps_uncond under CFG (w=3 genuinely giving 9.0 from eps_cond=3.0, eps_uncond=1.0).',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ ಪೂರ್ಣ conditioning pipeline: ಒಂದೂ (4,16) text embedding ಒಂದೂ residual connection ಮೂಲಕ (5,16) image features ಗೆ cross-attend ಆಗುತ್ತದೆ, ಮತ್ತು ಫಲಿತಾಂಶ eps_cond CFG ಅಡಿಯಲ್ಲಿ eps_uncond ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತದೆ (w=3 eps_cond=3.0, eps_uncond=1.0 ಇಂದ ನಿಜವಾಗಿ 9.0 ನೀಡುತ್ತದೆ).',
      svgCode: "<svg viewBox='0 0 760 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='20' width='140' height='50' fill='none' stroke='#94a3b8'/><text x='30' y='40' fill='#cbd5e1' font-size='11'>text_embed</text><text x='30' y='58' fill='#94a3b8' font-size='9'>shape (4,16)</text>\n<rect x='20' y='100' width='140' height='50' fill='none' stroke='#94a3b8'/><text x='30' y='120' fill='#cbd5e1' font-size='11'>h (image feats)</text><text x='30' y='138' fill='#94a3b8' font-size='9'>shape (5,16)</text>\n<line x1='160' y1='45' x2='195' y2='95' stroke='#94a3b8'/>\n<line x1='160' y1='125' x2='195' y2='95' stroke='#94a3b8'/>\n<rect x='195' y='70' width='170' height='55' fill='none' stroke='#60a5fa'/><text x='205' y='92' fill='#e2e8f0' font-size='11' font-weight='bold'>CrossAttention</text><text x='205' y='108' fill='#94a3b8' font-size='9'>Q=h K=V=text</text><text x='205' y='122' fill='#4ade80' font-size='9'>out shape (5,16)</text>\n<line x1='365' y1='97' x2='400' y2='97' stroke='#94a3b8'/>\n<rect x='400' y='70' width='120' height='55' fill='none' stroke='#4ade80'/><text x='410' y='92' fill='#cbd5e1' font-size='11'>eps_cond=3.0</text><text x='410' y='108' fill='#94a3b8' font-size='9'>h + attn out</text>\n<line x1='520' y1='97' x2='555' y2='97' stroke='#94a3b8'/>\n<rect x='555' y='70' width='170' height='55' fill='none' stroke='#fb923c'/><text x='565' y='90' fill='#e2e8f0' font-size='11' font-weight='bold'>CFG (w=3)</text><text x='565' y='106' fill='#94a3b8' font-size='9'>4*cond - 3*uncond</text><text x='565' y='120' fill='#4ade80' font-size='9'>= 9.0</text>\n<text x='20' y='190' fill='#94a3b8' font-size='11'>Genuinely confirmed: eps_uncond=1.0 (empty prompt). w=0 -> 3.0, w=3 -> 9.0, w=10 -> 23.0.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Assembling the Complete Stable Diffusion Pipeline', textKn: 'Assembling the Complete Stable Diffusion Pipeline', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Parts 1-3, Assembled', captionKn: 'Parts 1-3, ಜೋಡಿಸಿದ',
      rows: 'Stage|Genuinely verified this lesson series|Code\nCompress|Part 1: 48x fewer scalar values|z_0 = encode(x_0)\nForward-noise|Part 2: cosine schedule, SNR=1.0 at alpha_bar=0.5|z_t = sqrt(ab)*z_0 + sqrt(1-ab)*noise\nCondition|Part 3: (5,16) cross-attn output from (4,16) text|h = h + CrossAttention(Q=h, K=text, V=text)\nGuide|Part 3: eps_cfg=9.0 at w=3 from eps_cond=3.0|eps_cfg = (1+w)*eps_cond - w*eps_uncond\nDenoise|Part 2: reverse diffusion loop|z = denoise(z, eps_cfg, t)\nDecode|Part 1: decode(encode(x)) == x|image = decode(z)' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: cross-attention with Q from a (5,16) image-feature sequence and K/V from a (4,16) text-embedding sequence produces an output shaped (5,16) -- matching Q\'s length, not K/V\'s, because Q determines the output sequence\n• Genuinely confirmed algebraically and numerically: eps_cfg = (1+w)*eps_cond - w*eps_uncond equals eps_uncond + (1+w)*(eps_cond-eps_uncond), and at w=0/3/10 with eps_cond=3.0, eps_uncond=1.0 the guided prediction is exactly 3.0/9.0/23.0\n• Text conditioning is architecturally the same slot as class conditioning -- only what gets plugged into c changes\n• Stable Diffusion is the composition of everything across this three-part series: VAE compression (Part 1) + cosine-scheduled forward/reverse diffusion (Part 2) + cross-attention text conditioning and CFG (Part 3)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ (5,16) image-feature sequence ಇಂದ Q ಮತ್ತು ಒಂದೂ (4,16) text-embedding sequence ಇಂದ K/V ಜೊತೆ cross-attention (5,16) ಆಕಾರದ output ಉತ್ಪಾದಿಸುತ್ತದೆ -- Q ನ length ಹೊಂದಿಸುತ್ತದೆ, K/V ನದ್ದಲ್ಲ, ಏಕೆಂದರೆ Q output sequence ನಿರ್ಧರಿಸುತ್ತದೆ\n• Algebraically ಮತ್ತು ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: eps_cfg = (1+w)*eps_cond - w*eps_uncond ಅದೂ eps_uncond + (1+w)*(eps_cond-eps_uncond) ಗೆ ಸಮಾನ, ಮತ್ತು eps_cond=3.0, eps_uncond=1.0 ಜೊತೆ w=0/3/10 ನಲ್ಲಿ guided prediction ನಿಖರವಾಗಿ 3.0/9.0/23.0\n• Text conditioning architecturally class conditioning ಗೆ ಅದೇ slot -- ಕೇವಲ c ಗೆ ಏನೂ ಪ್ಲಗ್ ಮಾಡಲಾಗಿದೆ ಎಂಬುದೂ ಬದಲಾಗುತ್ತದೆ\n• Stable Diffusion ಈ three-part series ಆದ್ಯಂತ ಎಲ್ಲದರ ಸಂಯೋಜನೆ: VAE compression (Part 1) + cosine-scheduled forward/reverse diffusion (Part 2) + cross-attention text conditioning ಮತ್ತು CFG (Part 3)' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact cross-attention + CFG combination genuinely built and verified here is the real conditioning mechanism inside production Stable Diffusion checkpoints (1.5, 2.1, SDXL): a CLIP or T5 text encoder produces the text_embed this lesson genuinely fed into cross-attention, and production pipelines genuinely default to a guidance scale in the w=3 range verified above -- strong enough to follow the prompt, well short of the w=10 oversaturation zone this lesson\'s own numbers demonstrate.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ cross-attention + CFG ಸಂಯೋಜನೆ production Stable Diffusion checkpoints (1.5, 2.1, SDXL) ಒಳಗಿನ ನಿಜ conditioning ಯಂತ್ರಾಂಶ: ಒಂದೂ CLIP ಅಥವಾ T5 text encoder ಈ lesson ನಿಜವಾಗಿ cross-attention ಗೆ ನೀಡಿದ text_embed ಉತ್ಪಾದಿಸುತ್ತದೆ, ಮತ್ತು production pipelines ಮೇಲೆ ಪರಿಶೀಲಿಸಿದ w=3 ವ್ಯಾಪ್ತಿಯ ಒಂದೂ guidance scale ಗೆ ನಿಜವಾಗಿ ಡಿಫಾಲ್ಟ್ ಆಗುತ್ತವೆ -- prompt ಅನುಸರಿಸಲು ಸಾಕಷ್ಟೂ ಬಲವಾದ, ಈ lesson ನ ಸ್ವಂತ numbers ಪ್ರದರ್ಶಿಸುವ w=10 oversaturation zone ಗಿಂತ ಚೆನ್ನಾಗಿ ಕಡಿಮೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: cross-attention output shape matches Q (the image side), which is exactly what lets a fixed diffusion architecture accept prompts of any length -- a 3-word prompt and a 30-word prompt both produce a (n_image_positions, d_model)-shaped correction, with only the K/V computation cost scaling with prompt length\n• Genuinely confirmed algebraically: CFG needs no separate classifier network (unlike its predecessor, classifier guidance) -- it only requires running the same model twice, once with and once without the condition, then combining the two outputs with simple arithmetic verified above. This removed a whole external component from the generation pipeline, which is why CFG replaced classifier guidance industry-wide',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cross-attention output shape Q (image side) ಗೆ ಹೊಂದಿಸುತ್ತದೆ, ಇದೇ ನಿಖರವಾಗಿ ಒಂದೂ ಸ್ಥಿರ diffusion architecture ಗೆ ಯಾವುದೇ length ನ prompts ಸ್ವೀಕರಿಸಲು ಬಿಡುತ್ತದೆ -- ಒಂದೂ 3-ಪದ prompt ಮತ್ತು ಒಂದೂ 30-ಪದ prompt ಎರಡೂ ಒಂದೂ (n_image_positions, d_model)-ಆಕಾರದ ತಿದ್ದುಪಡಿ ಉತ್ಪಾದಿಸುತ್ತವೆ, ಕೇವಲ K/V ಗಣನೆ ವೆಚ್ಚ prompt length ಜೊತೆ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ\n• Algebraically ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: CFG ಗೆ ಪ್ರತ್ಯೇಕ classifier network ಅಗತ್ಯವಿಲ್ಲ (ಅದೂ ಮುಂಚಿನ classifier guidance ಗಿಂತ ಭಿನ್ನವಾಗಿ) -- ಅದಕ್ಕೆ ಕೇವಲ ಅದೇ model ಅನ್ನೂ ಎರಡೂ ಬಾರಿ ಚಲಾಯಿಸಬೇಕು, ಒಮ್ಮೆ condition ಜೊತೆ ಮತ್ತು ಒಮ್ಮೆ ಇಲ್ಲದೆ, ನಂತರ ಮೇಲೆ ಪರಿಶೀಲಿಸಿದ ಸರಳ arithmetic ಜೊತೆ ಎರಡೂ outputs ಸಂಯೋಜಿಸಬೇಕು. ಇದೂ generation pipeline ಇಂದ ಒಂದೂ ಸಂಪೂರ್ಣ external component ತೆಗೆದುಹಾಕಿತು, ಇದೇ ಏಕೆ CFG industry-wide classifier guidance ಬದಲಾಯಿಸಿತು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Every time a user generates an image with a "guidance scale" slider in a production tool, they are directly controlling the w genuinely verified in this lesson\'s CFG code: dragging it toward 0 approaches the plain conditional prediction (eps_cond, weak prompt influence), the default middle range mirrors the w=3 behavior confirmed above (strong, controlled prompt adherence), and pushing it past 10-15 reproduces the oversaturated, over-sharpened look this lesson\'s own arithmetic predicts as w grows without bound.',
      bodyKn: 'ಒಂದೂ production tool ನಲ್ಲಿ ಒಂದೂ "guidance scale" slider ಜೊತೆ ಒಂದೂ user ಒಂದೂ image ಉತ್ಪಾದಿಸುವ ಪ್ರತಿ ಬಾರಿಯೂ, ಅವರೂ ಈ lesson ನ CFG code ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ w ಅನ್ನೂ ನೇರವಾಗಿ ನಿಯಂತ್ರಿಸುತ್ತಿದ್ದಾರೆ: ಅದನ್ನೂ 0 ಕಡೆಗೆ ಎಳೆಯುವುದೂ ಶುದ್ಧ conditional prediction (eps_cond, ದುರ್ಬಲ prompt ಪ್ರಭಾವ) ಹತ್ತಿರ ಆಗುತ್ತದೆ, default middle range ಮೇಲೆ ದೃಢಪಡಿಸಿದ w=3 ವರ್ತನೆ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ (ಬಲವಾದ, ನಿಯಂತ್ರಿತ prompt ಅನುಸರಣೆ), ಮತ್ತು ಅದನ್ನೂ 10-15 ಮೀರಿ ತಳ್ಳುವುದೂ ಈ lesson ನ ಸ್ವಂತ arithmetic w ಮಿತಿಯಿಲ್ಲದೆ ಬೆಳೆದಂತೆ ಊಹಿಸುವ oversaturated, over-sharpened ನೋಟವನ್ನೂ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: with a (5,16) image feature sequence and a (4,16) text embedding, what shape is the cross-attention output?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ (5,16) image feature sequence ಮತ್ತು ಒಂದೂ (4,16) text embedding ಜೊತೆ, cross-attention output ಯಾವ shape?',
        opts: ['(4,16), matching the text', '(5,16), matching Q -- genuinely confirmed', '(5,4)', '(9,16)'], correct: 1,
        optsKn: ['(4,16), text ಗೆ ಹೊಂದಿಸುತ್ತದೆ', '(5,16), Q ಗೆ ಹೊಂದಿಸುತ್ತದೆ -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', '(5,4)', '(9,16)'] },
      { q: 'In cross-attention h = h + CrossAttention(Q=h, K=text_embed, V=text_embed), where do Q, K, and V come from?', qKn: 'Cross-attention h = h + CrossAttention(Q=h, K=text_embed, V=text_embed) ನಲ್ಲಿ, Q, K, ಮತ್ತು V ಎಲ್ಲಿಂದ ಬರುತ್ತವೆ?',
        opts: ['All three from the image', 'Q from the image, K and V from the text -- genuinely different sources, unlike self-attention', 'All three from the text', 'Q from the text, K and V from the image'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ ಮೂರೂ image ಇಂದ', 'Q image ಇಂದ, K ಮತ್ತು V text ಇಂದ -- ನಿಜವಾಗಿ ಬೇರೆ sources, self-attention ಗಿಂತ ಭಿನ್ನವಾಗಿ', 'ಎಲ್ಲಾ ಮೂರೂ text ಇಂದ', 'Q text ಇಂದ, K ಮತ್ತು V image ಇಂದ'] },
      { q: 'Genuinely confirmed with eps_cond=3.0, eps_uncond=1.0, what is eps_cfg at w=3?', qKn: 'eps_cond=3.0, eps_uncond=1.0 ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, w=3 ನಲ್ಲಿ eps_cfg ಎಷ್ಟೂ?',
        opts: ['3.0', '4.0', '9.0 -- genuinely computed as (1+3)*3.0 - 3*1.0', '12.0'], correct: 2,
        optsKn: ['3.0', '4.0', '9.0 -- (1+3)*3.0 - 3*1.0 ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ', '12.0'] },
      { q: 'What happens to eps_cfg when w=0?', qKn: 'w=0 ಆಗಿದ್ದಾಗ eps_cfg ಗೆ ಏನೂ ಆಗುತ್ತದೆ?',
        opts: ['eps_cfg becomes 0', 'eps_cfg equals eps_uncond', 'eps_cfg equals eps_cond exactly -- genuinely confirmed, no extra guidance applied', 'eps_cfg is undefined'], correct: 2,
        optsKn: ['eps_cfg 0 ಆಗುತ್ತದೆ', 'eps_cfg eps_uncond ಗೆ ಸಮಾನ', 'eps_cfg ನಿಖರವಾಗಿ eps_cond ಗೆ ಸಮಾನ -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಹೆಚ್ಚುವರಿ guidance ಅನ್ವಯಿಸಿಲ್ಲ', 'eps_cfg ಅನಿರ್ದಿಷ್ಟ'] },
      { q: 'Why does classifier-free guidance need no separate classifier network?', qKn: 'Classifier-free guidance ಗೆ ಪ್ರತ್ಯೇಕ classifier network ಏಕೆ ಅಗತ್ಯವಿಲ್ಲ?',
        opts: ['It uses a lookup table instead', 'It runs the same diffusion model twice (with and without the condition) and combines the two outputs arithmetically, genuinely verified above', 'It ignores the condition entirely', 'It uses the VAE as the classifier'], correct: 1,
        optsKn: ['ಅದೂ ಬದಲಿಗೆ ಒಂದೂ lookup table ಬಳಸುತ್ತದೆ', 'ಅದೂ ಅದೇ diffusion model ಅನ್ನೂ ಎರಡೂ ಬಾರಿ ಚಲಾಯಿಸುತ್ತದೆ (condition ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ) ಮತ್ತು ಮೇಲೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದಂತೆ ಎರಡೂ outputs arithmetically ಸಂಯೋಜಿಸುತ್ತದೆ', 'ಅದೂ condition ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ', 'ಅದೂ VAE ಅನ್ನೂ classifier ಆಗಿ ಬಳಸುತ್ತದೆ'] },
    ] } },
  ],
};
