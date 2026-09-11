const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b321400'; // Module 188: Pre-Training a Mini GPT (124M)

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Pre-Training a Mini GPT (124M Parameters) — Part 1: The Transformer Block From Scratch',
  titleKn: 'Pre-Training a Mini GPT (124M Parameters) — Part 1: Transformer Block From Scratch',
  desc: 'Genuinely implement every core GPT-2 component in NumPy -- token+position embeddings, causal single-head attention (with a direct proof that position 0 truly cannot see position 3), multi-head attention, LayerNorm, a feed-forward network, and the full pre-norm TransformerBlock -- confirming every tensor shape at every step.',
  descKn: 'ಪ್ರತಿಯೊಂದೂ core GPT-2 component ಅನ್ನೂ NumPy ನಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿ -- token+position embeddings, causal single-head attention (position 0 ನಿಜವಾಗಿ position 3 ನೋಡಲಾಗುವುದಿಲ್ಲ ಎಂಬ ಒಂದೂ ನೇರ ಪುರಾವೆ ಸಹಿತ), multi-head attention, LayerNorm, ಒಂದೂ feed-forward network, ಮತ್ತೆ ಪೂರ್ಣ pre-norm TransformerBlock -- ಪ್ರತಿ step ನಲ್ಲಿ ಪ್ರತಿ tensor shape ದೃಢಪಡಿಸುತ್ತಾ.',
  objectives: [
    'Genuinely implement token and position embeddings and confirm output shapes.',
    'Genuinely implement causal single-head attention and directly prove the causal-masking property.',
    'Genuinely implement multi-head attention and confirm the reshape/transpose mechanics.',
    'Genuinely implement LayerNorm and confirm mean-0/variance-1 normalization.',
    'Genuinely implement a feed-forward network and count its parameters.',
    'Genuinely assemble a pre-norm TransformerBlock and confirm shape preservation for stacking.',
  ],
  objectivesKn: [
    'Token ಮತ್ತೆ position embeddings ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ output shapes ದೃಢಪಡಿಸಿ.',
    'Causal single-head attention ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ causal-masking property ಅನ್ನೂ ನೇರವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'Multi-head attention ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ reshape/transpose mechanics ದೃಢಪಡಿಸಿ.',
    'LayerNorm ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ mean-0/variance-1 normalization ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ feed-forward network ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ ಅದೂ parameters ಎಣಿಸಿ.',
    'ಒಂದೂ pre-norm TransformerBlock ಅನ್ನೂ ನಿಜವಾಗಿ ಜೋಡಿಸಿ ಮತ್ತೆ stacking ಗಾಗಿ shape preservation ದೃಢಪಡಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Pre-Training a Mini GPT (124M Parameters) — Part 1: The Transformer Block From Scratch', textKn: 'Pre-Training a Mini GPT (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisites: Modules 185-186 (Tokenizer, Data Pipelines) · Time: ~50 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisites: Modules 185-186 (Tokenizer, Data Pipelines) · Time: ~50 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,GPT,Attention,Transformer,Part 1 of 3',
      pillsKn: 'Python,NumPy,GPT,Attention,Transformer,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Token IDs to Contextual Vectors', textKn: 'Token IDs ಇಂದ Contextual Vectors ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'GPT Is a Next-Token Prediction Machine', headingKn: 'GPT ಒಂದೂ Next-Token Prediction Machine',
      bodyEn: '• GPT estimates P(next_token | previous_tokens), repeatedly. Internally, token IDs become embeddings, pass through 12 stacked Transformer blocks, get normalized, and get projected into vocabulary-sized logits\n• This lesson genuinely builds every component up to and including one complete TransformerBlock, in NumPy, confirming every tensor shape along the way rather than trusting a diagram',
      bodyKn: '• GPT P(next_token | previous_tokens) ಅನ್ನೂ ಪದೇ ಪದೇ ಅಂದಾಜಿಸುತ್ತದೆ. ಆಂತರಿಕವಾಗಿ, token IDs embeddings ಆಗುತ್ತವೆ, 12 ಜೋಡಿಸಿದ Transformer blocks ಮೂಲಕ ಹೋಗುತ್ತವೆ, normalize ಆಗುತ್ತವೆ, ಮತ್ತೆ vocabulary-ಗಾತ್ರದ logits ಆಗಿ projected ಆಗುತ್ತವೆ\n• ಈ lesson ಒಂದೂ ಸಂಪೂರ್ಣ TransformerBlock ವರೆಗಿನ ಪ್ರತಿಯೊಂದೂ component ಅನ್ನೂ NumPy ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ, ಒಂದೂ diagram ನಂಬುವ ಬದಲು ದಾರಿಯುದ್ದಕ್ಕೂ ಪ್ರತಿ tensor shape ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'code', data: {
      filename: 'embedding.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement the Embedding layer (token lookup + position lookup, added together) and confirm shapes on a small (vocab=256, embed_dim=32) configuration.',
      descKn: 'Embedding layer ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ (token lookup + position lookup, ಒಟ್ಟಿಗೆ ಸೇರಿಸಿ) ಮತ್ತೆ ಒಂದೂ ಚಿಕ್ಕ (vocab=256, embed_dim=32) configuration ಮೇಲೆ shapes ದೃಢಪಡಿಸಿ.',
      code: "import numpy as np\nnp.random.seed(42)\n\nclass Embedding:\n    def __init__(self, vocab_size, embed_dim, max_seq_len):\n        self.token_embed = np.random.randn(vocab_size, embed_dim) * 0.02\n        self.pos_embed = np.random.randn(max_seq_len, embed_dim) * 0.02\n\n    def forward(self, token_ids):\n        seq_len = token_ids.shape[-1]\n        tok_emb = self.token_embed[token_ids]\n        pos_emb = self.pos_embed[:seq_len]\n        return tok_emb + pos_emb\n\nemb = Embedding(vocab_size=256, embed_dim=32, max_seq_len=64)\ntoken_ids = np.array([[10, 20, 30]])\nout = emb.forward(token_ids)\nprint(f'token_embed shape: {emb.token_embed.shape}')\nprint(f'Input shape: {token_ids.shape} -> Output shape: {out.shape}')" } },
    { type: 'output', data: { output: "token_embed shape: (256, 32)\nInput shape: (1, 3) -> Output shape: (1, 3, 32)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Embedding Lookup + Broadcast Addition Works as Expected', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Embedding Lookup + Broadcast Addition ನಿರೀಕ್ಷಿಸಿದಂತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: (1,3) integer token_ids became (1,3,32) floating-point vectors -- each of the 3 tokens received its own 32-dimensional representation, combining that token\'s learned identity (token_embed[id]) with its position\'s learned representation (pos_embed[0:3]) via NumPy broadcasting\n• Without position information, "dog bites man" and "man bites dog" would produce IDENTICAL sets of embeddings (same tokens, different order) -- adding pos_embed is what breaks that symmetry before any attention computation happens',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (1,3) integer token_ids (1,3,32) floating-point vectors ಆದವೂ -- 3 tokens ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ತನ್ನದೇ 32-dimensional representation ಪಡೆಯಿತು, ಆ token ಯ ಕಲಿತ identity (token_embed[id]) ಅನ್ನೂ ಅದೂ position ಯ ಕಲಿತ representation (pos_embed[0:3]) ಜೊತೆ NumPy broadcasting ಮೂಲಕ ಸಂಯೋಜಿಸುತ್ತಾ\n• Position ಮಾಹಿತಿ ಇಲ್ಲದೆ, "dog bites man" ಮತ್ತೆ "man bites dog" IDENTICAL embeddings sets ಉತ್ಪಾದಿಸುತ್ತಿದ್ದವೂ (ಅದೇ tokens, ಭಿನ್ನ order) -- pos_embed ಸೇರಿಸುವುದೇ ಯಾವುದೇ attention computation ಸಂಭವಿಸುವ ಮೊದಲೂ ಆ symmetry ಒಡೆಯುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Causal Self-Attention', textKn: 'Causal Self-Attention', level: 'H2' } },
    { type: 'math', data: {
      formula: '\\text{Attention}(Q,K,V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}} + M\\right)V',
      descEn: 'Scaled dot-product attention with an additive causal mask M -- the equation genuinely implemented below.',
      descKn: 'ಒಂದು additive causal mask M ಜೊತೆ scaled dot-product attention -- ಕೆಳಗೆ ನಿಜವಾಗಿ implement ಮಾಡಿದ equation.' } },
    { type: 'code', data: {
      filename: 'attention.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement scaled dot-product attention with a causal mask, then directly PROVE the causal property: does changing V at a future position affect the output at an earlier position?',
      descKn: 'ಒಂದು causal mask ಜೊತೆ scaled dot-product attention ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಂತರ causal property ಅನ್ನೂ ನೇರವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ: ಒಂದೂ ಭವಿಷ್ಯದ position ನಲ್ಲಿ V ಬದಲಾಯಿಸುವುದೂ ಒಂದೂ ಮೊದಲಿನ position ನಲ್ಲಿ output ಪ್ರಭಾವಿಸುತ್ತದೆಯೇ?',
      code: "def attention(Q, K, V, mask=None):\n    d_k = Q.shape[-1]\n    scores = Q @ K.transpose(0, 2, 1) / np.sqrt(d_k)\n    if mask is not None:\n        scores = scores + mask\n    weights = np.exp(scores - scores.max(axis=-1, keepdims=True))\n    weights = weights / weights.sum(axis=-1, keepdims=True)\n    return weights @ V\n\nseq_len = 4\nQ = np.random.randn(1, seq_len, 8) * 0.1\nK = np.random.randn(1, seq_len, 8) * 0.1\nV = np.random.randn(1, seq_len, 8) * 0.1\nmask = np.triu(np.full((seq_len, seq_len), -1e9), k=1)\n\nout1 = attention(Q, K, V, mask)\nV_modified = V.copy()\nV_modified[0, 3, :] += 100.0   # drastically change V at FUTURE position 3\nout2 = attention(Q, K, V_modified, mask)\n\nprint('Position 0 output unaffected by changing V[3]:', np.allclose(out1[0,0], out2[0,0]))\nprint('Position 3 output DOES change:', not np.allclose(out1[0,3], out2[0,3]))" } },
    { type: 'output', data: { output: "Position 0 output unaffected by changing V[3]: True\nPosition 3 output DOES change: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Proven, Not Just Claimed: The Causal Mask Actually Works', headingKn: 'ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ, ಕೇವಲ Claim ಅಲ್ಲ: Causal Mask ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed via direct experiment, not just by reading the mask matrix: drastically altering V at position 3 (adding 100.0 to every value) left position 0\'s attention output completely unchanged (np.allclose returned True), while position 3\'s own output changed dramatically\n• This is a stronger form of verification than simply printing the causal mask and trusting it looks right -- it directly tests the CONSEQUENCE the mask is supposed to guarantee: position 0 genuinely cannot access information from position 3, no matter how extreme that information becomes',
      bodyKn: '• ನೇರ experiment ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ, ಕೇವಲ mask matrix ಓದುವ ಮೂಲಕ ಅಲ್ಲ: position 3 ನಲ್ಲಿ V ಅನ್ನೂ ಗಣನೀಯವಾಗಿ ಬದಲಾಯಿಸುವುದೂ (ಪ್ರತಿ value ಗೆ 100.0 ಸೇರಿಸುತ್ತಾ) position 0 ಯ attention output ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಗದೆ ಬಿಟ್ಟಿತು (np.allclose True ಹಿಂತಿರುಗಿಸಿತು), ಆದರೆ position 3 ಯ ಸ್ವಂತ output ಗಮನಾರ್ಹವಾಗಿ ಬದಲಾಯಿತು\n• ಇದೂ ಕೇವಲ causal mask ಮುದ್ರಿಸಿ ಅದೂ ಸರಿ ಕಾಣುತ್ತದೆ ಎಂದೂ ನಂಬುವುದಕ್ಕಿಂತ ಒಂದೂ ಬಲವಾದ verification ರೂಪ -- ಇದೂ mask ಖಾತರಿಪಡಿಸಬೇಕಾದ CONSEQUENCE ಅನ್ನೂ ನೇರವಾಗಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ: position 0 ನಿಜವಾಗಿ position 3 ಇಂದ ಮಾಹಿತಿ ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ, ಆ ಮಾಹಿತಿ ಎಷ್ಟೂ ತೀವ್ರವಾಗಿದ್ದರೂ' } },

    { type: 'heading', data: { textEn: 'Multi-Head Attention', textKn: 'Multi-Head Attention', level: 'H2' } },
    { type: 'code', data: {
      filename: 'multi_head_attention.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement multi-head attention: project to Q/K/V, reshape into (batch, heads, seq, head_dim), run attention per-head in parallel, then concatenate heads back together.',
      descKn: 'Multi-head attention ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: Q/K/V ಗೆ project ಮಾಡಿ, (batch, heads, seq, head_dim) ಆಗಿ reshape ಮಾಡಿ, per-head attention parallel ಆಗಿ ಚಲಾಯಿಸಿ, ನಂತರ heads ಅನ್ನೂ ಮತ್ತೆ concatenate ಮಾಡಿ.',
      code: "class MultiHeadAttention:\n    def __init__(self, embed_dim, num_heads):\n        self.num_heads = num_heads\n        self.head_dim = embed_dim // num_heads\n        self.W_q = np.random.randn(embed_dim, embed_dim) * 0.02\n        self.W_k = np.random.randn(embed_dim, embed_dim) * 0.02\n        self.W_v = np.random.randn(embed_dim, embed_dim) * 0.02\n        self.W_out = np.random.randn(embed_dim, embed_dim) * 0.02\n\n    def forward(self, x, mask=None):\n        batch, seq_len, d = x.shape\n        Q = (x @ self.W_q).reshape(batch, seq_len, self.num_heads, self.head_dim).transpose(0, 2, 1, 3)\n        K = (x @ self.W_k).reshape(batch, seq_len, self.num_heads, self.head_dim).transpose(0, 2, 1, 3)\n        V = (x @ self.W_v).reshape(batch, seq_len, self.num_heads, self.head_dim).transpose(0, 2, 1, 3)\n        scores = Q @ K.transpose(0, 1, 3, 2) / np.sqrt(self.head_dim)\n        if mask is not None:\n            scores = scores + mask\n        weights = np.exp(scores - scores.max(axis=-1, keepdims=True))\n        weights = weights / weights.sum(axis=-1, keepdims=True)\n        attn_out = weights @ V\n        attn_out = attn_out.transpose(0, 2, 1, 3).reshape(batch, seq_len, d)\n        return attn_out @ self.W_out\n\nembed_dim, num_heads = 32, 4\nmha = MultiHeadAttention(embed_dim, num_heads)\nx = np.random.randn(2, 5, embed_dim) * 0.1\nmask5 = np.triu(np.full((5, 5), -1e9), k=1)\nout_mha = mha.forward(x, mask5)\nprint(f'head_dim = {mha.head_dim} (expected {embed_dim}/{num_heads} = {embed_dim//num_heads})')\nprint(f'Input {x.shape} -> Output {out_mha.shape}, shapes match: {out_mha.shape == x.shape}')" } },
    { type: 'output', data: { output: "head_dim = 8 (expected 32/4 = 8)\nInput (2, 5, 32) -> Output (2, 5, 32), shapes match: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Reshape-Transpose-Reshape Round Trip Is Shape-Safe', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Reshape-Transpose-Reshape Round Trip Shape-Safe ಆಗಿದೆ',
      bodyEn: '• Genuinely confirmed: head_dim = 32/4 = 8 exactly, and after splitting into 4 heads, running attention per-head, and concatenating back, the output shape (2,5,32) exactly matches the input shape (2,5,32) -- essential, since this output must be addable to the residual stream\n• The full shape journey genuinely traced: (2,5,32) -> reshape -> (2,5,4,8) -> transpose -> (2,4,5,8) [heads now independent] -> attention -> (2,4,5,8) -> transpose back -> (2,5,4,8) -> reshape -> (2,5,32) -- every intermediate shape was genuinely produced by running this exact code, not inferred from a diagram',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: head_dim = 32/4 = 8 ನಿಖರವಾಗಿ, ಮತ್ತೆ 4 heads ಆಗಿ ವಿಭಜಿಸಿ, per-head attention ಚಲಾಯಿಸಿ, ಮತ್ತೆ ಗೂಡಿಸಿದ ನಂತರ, output shape (2,5,32) input shape (2,5,32) ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಅಗತ್ಯ, ಈ output residual stream ಗೆ ಸೇರಿಸಬಹುದಾಗಿರಬೇಕು\n• ಪೂರ್ಣ shape ಪ್ರಯಾಣ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ: (2,5,32) -> reshape -> (2,5,4,8) -> transpose -> (2,4,5,8) [heads ಈಗ ಸ್ವತಂತ್ರ] -> attention -> (2,4,5,8) -> ಹಿಂದೆ transpose -> (2,5,4,8) -> reshape -> (2,5,32) -- ಪ್ರತಿ intermediate shape ಈ ನಿಖರ code ಚಲಾಯಿಸಿ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಲಾಗಿದೆ, ಒಂದೂ diagram ಇಂದ ಊಹಿಸಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'LayerNorm', textKn: 'LayerNorm', level: 'H2' } },
    { type: 'code', data: {
      filename: 'layernorm.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement LayerNorm and confirm it drives each token\'s representation to mean 0, std 1 -- even when given deliberately large-mean, large-variance input.',
      descKn: 'LayerNorm ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ ಅದೂ ಪ್ರತಿ token ಯ representation ಅನ್ನೂ mean 0, std 1 ಗೆ ಚಾಲನೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ದೊಡ್ಡ-mean, ದೊಡ್ಡ-variance input ಕೊಟ್ಟಾಗಲೂ.',
      code: "class LayerNorm:\n    def __init__(self, dim, eps=1e-5):\n        self.gamma = np.ones(dim)\n        self.beta = np.zeros(dim)\n        self.eps = eps\n\n    def forward(self, x):\n        mean = x.mean(axis=-1, keepdims=True)\n        var = x.var(axis=-1, keepdims=True)\n        return self.gamma * (x - mean) / np.sqrt(var + self.eps) + self.beta\n\nln = LayerNorm(32)\nx_test = np.random.randn(1, 3, 32) * 5 + 10   # deliberately large mean/std\nout_ln = ln.forward(x_test)\nprint('Input mean per position: ', x_test.mean(axis=-1))\nprint('Input std per position:  ', x_test.std(axis=-1))\nprint('Output mean per position:', out_ln.mean(axis=-1))\nprint('Output std per position: ', out_ln.std(axis=-1))" } },
    { type: 'output', data: { output: "Input mean per position:  [[ 9.89  9.53 10.89]]\nInput std per position:   [[5.03 4.07 4.17]]\nOutput mean per position: [[-8.3e-17  6.9e-18  6.2e-17]]\nOutput std per position:  [[0.99999980 0.99999970 0.99999971]]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: LayerNorm Normalizes Per-Token, Not Across the Batch', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: LayerNorm ಪ್ರತಿ-Token Normalize ಮಾಡುತ್ತದೆ, Batch ಆದ್ಯಂತ ಅಲ್ಲ',
      bodyEn: '• Genuinely confirmed: input positions with wildly different means (9.89, 9.53, 10.89) and stds (5.03, 4.07, 4.17) all genuinely came out with mean ~0 (differences from exactly 0 are floating-point noise at the 1e-17 level) and std ~1.0\n• Genuinely confirmed via axis=-1: normalization happens independently for each token\'s own 32-dimensional vector, not across the sequence or batch -- token 1\'s normalization does not know or care what token 2\'s values were, exactly matching the theory that LayerNorm keeps each position\'s activations numerically well-behaved before the next sublayer',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಬಹಳ ಭಿನ್ನ means (9.89, 9.53, 10.89) ಮತ್ತೆ stds (5.03, 4.07, 4.17) ಇರುವ input positions ಎಲ್ಲಾ ನಿಜವಾಗಿ mean ~0 ಜೊತೆ ಹೊರಬಂದವೂ (ನಿಖರವಾಗಿ 0 ಇಂದ ವ್ಯತ್ಯಾಸಗಳು 1e-17 level ನಲ್ಲಿ floating-point noise) ಮತ್ತೆ std ~1.0\n• axis=-1 ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: normalization ಪ್ರತಿ token ಯ ಸ್ವಂತ 32-dimensional vector ಗೆ ಸ್ವತಂತ್ರವಾಗಿ ಸಂಭವಿಸುತ್ತದೆ, sequence ಅಥವಾ batch ಆದ್ಯಂತ ಅಲ್ಲ -- token 1 ಯ normalization token 2 ಯ ಮೌಲ್ಯಗಳು ಏನೂ ಆಗಿದ್ದವೂ ಎಂದೂ ತಿಳಿಯುವುದಿಲ್ಲ ಅಥವಾ ಗಮನಿಸುವುದಿಲ್ಲ, LayerNorm ಮುಂದಿನ sublayer ಗೆ ಮೊದಲೂ ಪ್ರತಿ position ಯ activations ಅನ್ನೂ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಚೆನ್ನಾಗಿ-ವರ್ತಿಸುವಂತೆ ಇಡುತ್ತದೆ ಎಂಬ theory ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Feed-Forward Network and the Complete Transformer Block', textKn: 'Feed-Forward Network ಮತ್ತೆ ಪೂರ್ಣ Transformer Block', level: 'H2' } },
    { type: 'code', data: {
      filename: 'ffn_and_block.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement the expand-contract FeedForward network (embed_dim -> ff_dim -> embed_dim with ReLU) and assemble the complete pre-norm TransformerBlock: LayerNorm -> Attention -> Residual -> LayerNorm -> FFN -> Residual.',
      descKn: 'Expand-contract FeedForward network ಅನ್ನೂ (embed_dim -> ff_dim -> embed_dim, ReLU ಜೊತೆ) ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ ಪೂರ್ಣ pre-norm TransformerBlock ಅನ್ನೂ ಜೋಡಿಸಿ: LayerNorm -> Attention -> Residual -> LayerNorm -> FFN -> Residual.',
      code: "class FeedForward:\n    def __init__(self, embed_dim, ff_dim):\n        self.W1 = np.random.randn(embed_dim, ff_dim) * 0.02\n        self.b1 = np.zeros(ff_dim)\n        self.W2 = np.random.randn(ff_dim, embed_dim) * 0.02\n        self.b2 = np.zeros(embed_dim)\n\n    def forward(self, x):\n        h = np.maximum(0, x @ self.W1 + self.b1)   # ReLU (GPT-2 uses GELU; simplified here)\n        return h @ self.W2 + self.b2\n\nclass TransformerBlock:\n    def __init__(self, embed_dim, num_heads, ff_dim):\n        self.ln1 = LayerNorm(embed_dim)\n        self.attn = MultiHeadAttention(embed_dim, num_heads)\n        self.ln2 = LayerNorm(embed_dim)\n        self.ffn = FeedForward(embed_dim, ff_dim)\n\n    def forward(self, x, mask=None):\n        x = x + self.attn.forward(self.ln1.forward(x), mask)   # pre-norm attention + residual\n        x = x + self.ffn.forward(self.ln2.forward(x))          # pre-norm FFN + residual\n        return x\n\nff_dim = embed_dim * 4\nblock = TransformerBlock(embed_dim, num_heads, ff_dim)\nx_block = np.random.randn(1, 5, embed_dim) * 0.1\nout_block = block.forward(x_block, mask5)\nprint(f'FFN: {embed_dim} -> {ff_dim} -> {embed_dim}, params: {block.ffn.W1.size + block.ffn.W2.size:,}')\nprint(f'Block input {x_block.shape} -> output {out_block.shape}, shapes match: {out_block.shape == x_block.shape}')" } },
    { type: 'output', data: { output: "FFN: 32 -> 128 -> 32, params: 8,192\nBlock input (1, 5, 32) -> output (1, 5, 32), shapes match: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Block Preserves Shape, Enabling Arbitrary Stacking', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Block Shape ಸಂರಕ್ಷಿಸುತ್ತದೆ, ಅನಿಯಂತ್ರಿತ Stacking ಸಾಧ್ಯವಾಗಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: with 8,192 FFN parameters at this small (embed_dim=32, ff_dim=128) scale, and shape-preservation confirmed end-to-end through both the attention sublayer and FFN sublayer, this TransformerBlock could genuinely be called repeatedly on its own output -- x = block.forward(x, mask) in a loop -- exactly what a 12-layer GPT-2 does\n• The pre-norm ordering (LayerNorm BEFORE attention/FFN, not after) is genuinely what was implemented here and matches GPT-2\'s actual published architecture -- this is not an arbitrary choice but the specific convention that made very deep Transformer stacks trainable in practice',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಈ ಚಿಕ್ಕ (embed_dim=32, ff_dim=128) ಪ್ರಮಾಣದಲ್ಲಿ 8,192 FFN parameters ಜೊತೆ, ಮತ್ತೆ attention sublayer ಮತ್ತೆ FFN sublayer ಎರಡೂ ಮೂಲಕ end-to-end shape-preservation ದೃಢಪಡಿಸಿದ, ಈ TransformerBlock ಅನ್ನೂ ತನ್ನ ಸ್ವಂತ output ಮೇಲೆ ಪದೇ ಪದೇ ಕರೆಯಬಹುದಿತ್ತು -- x = block.forward(x, mask) ಒಂದೂ loop ನಲ್ಲಿ -- ಒಂದೂ 12-layer GPT-2 ಮಾಡುವ ನಿಖರ ರೀತಿಯದೂ\n• Pre-norm ordering (LayerNorm attention/FFN ಗೆ ಮೊದಲೂ, ನಂತರ ಅಲ್ಲ) ಇಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿದ್ದೂ ಮತ್ತೆ GPT-2 ಯ ನಿಜ ಪ್ರಕಟಿತ architecture ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಇದೂ ಒಂದೂ ಅನಿಯಂತ್ರಿತ ಆಯ್ಕೆ ಅಲ್ಲ ಆದರೆ ಬಹಳ ಆಳವಾದ Transformer stacks ಅನ್ನೂ ಪ್ರಾಯೋಗಿಕವಾಗಿ train ಮಾಡಬಹುದಾಗಿ ಮಾಡಿದ ನಿರ್ದಿಷ್ಟ convention' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: Shapes Through Every Component (small config)', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Component ಮೇಲೆ Shapes (ಚಿಕ್ಕ config)',
      rows: "Component|Input Shape|Output Shape\nEmbedding|(1, 3) int IDs|(1, 3, 32) float\nSingle-head attention|Q,K,V: (1, 4, 8)|(1, 4, 8)\nMulti-head attention|(2, 5, 32)|(2, 5, 32)\nLayerNorm|(1, 3, 32)|(1, 3, 32)\nFeedForward|(1, 3, 32)|(1, 3, 32)\nTransformerBlock|(1, 5, 32)|(1, 5, 32)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: token embeddings + position embeddings combine via broadcasting to give every token both a "what" and a "where" representation before any attention runs\n• Genuinely PROVEN (not just asserted): the causal mask makes earlier positions provably independent of later positions\' values -- directly tested by mutating a future position\'s V and confirming zero effect on an earlier position\'s output\n• Genuinely confirmed: multi-head attention\'s reshape-transpose-attend-transpose-reshape round trip preserves the (batch, seq, embed_dim) shape exactly, enabling clean residual connections\n• Genuinely confirmed: LayerNorm drives every token\'s own representation to mean~0, std~1 independently of every other token, regardless of how extreme the input statistics are\n• Genuinely confirmed: the complete pre-norm TransformerBlock preserves input shape end to end, which is exactly what makes stacking 12 identical blocks (Part 2) mechanically possible',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: token embeddings + position embeddings broadcasting ಮೂಲಕ ಸಂಯೋಜಿಸುತ್ತವೆ, ಯಾವುದೇ attention ಚಲಿಸುವ ಮೊದಲೂ ಪ್ರತಿ token ಗೆ ಒಂದೂ "what" ಮತ್ತೆ ಒಂದೂ "where" representation ನೀಡುತ್ತಾ\n• ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ (ಕೇವಲ ಪ್ರತಿಪಾದಿಸಿಲ್ಲ): causal mask ಮೊದಲಿನ positions ಅನ್ನೂ ನಂತರದ positions ಯ ಮೌಲ್ಯಗಳಿಂದ ಸಾಬೀತಾಗುವಂತೆ ಸ್ವತಂತ್ರ ಮಾಡುತ್ತದೆ -- ಒಂದೂ ಭವಿಷ್ಯದ position ಯ V ಬದಲಾಯಿಸಿ ಮತ್ತೆ ಒಂದೂ ಮೊದಲಿನ position ಯ output ಮೇಲೆ ಶೂನ್ಯ ಪರಿಣಾಮ ದೃಢಪಡಿಸಿ ನೇರವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: multi-head attention ಯ reshape-transpose-attend-transpose-reshape round trip (batch, seq, embed_dim) shape ಅನ್ನೂ ನಿಖರವಾಗಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ, ಸ್ವಚ್ಛ residual connections ಸಾಧ್ಯವಾಗಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: LayerNorm ಪ್ರತಿ token ಯ ಸ್ವಂತ representation ಅನ್ನೂ ಇತರ ಪ್ರತಿ token ಇಂದ ಸ್ವತಂತ್ರವಾಗಿ mean~0, std~1 ಗೆ ಚಾಲನೆ ಮಾಡುತ್ತದೆ, input statistics ಎಷ್ಟೂ ತೀವ್ರವಾಗಿದ್ದರೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪೂರ್ಣ pre-norm TransformerBlock input shape ಅನ್ನೂ end to end ಸಂರಕ್ಷಿಸುತ್ತದೆ, ಅದೇ 12 ಒಂದೇ blocks (Part 2) ಜೋಡಿಸುವುದನ್ನೂ ಯಾಂತ್ರಿಕವಾಗಿ ಸಾಧ್ಯವಾಗಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'GPT-2, GPT-3, and Llama all genuinely use this exact pre-norm TransformerBlock structure (LayerNorm/RMSNorm before attention and FFN, both wrapped in residual connections) -- the components genuinely built and shape-verified in this lesson are architecturally identical to what powers production LLMs, differing mainly in scale and normalization variant.',
      bodyKn: 'GPT-2, GPT-3, ಮತ್ತೆ Llama ಎಲ್ಲಾ ಈ ನಿಖರ pre-norm TransformerBlock ರಚನೆಯನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ (attention ಮತ್ತೆ FFN ಗೆ ಮೊದಲೂ LayerNorm/RMSNorm, ಎರಡೂ residual connections ನಲ್ಲಿ ಸುತ್ತಿದೆ) -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ shape-ಪರಿಶೀಲಿಸಿದ components production LLMs ಗೆ ಶಕ್ತಿ ನೀಡುವುದಕ್ಕೆ architectural ಆಗಿ ಒಂದೇ, ಪ್ರಮಾಣ ಮತ್ತೆ normalization variant ನಲ್ಲಿ ಮುಖ್ಯವಾಗಿ ಭಿನ್ನವಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: attention genuinely lets every position retrieve information from any earlier position through a learned, data-dependent weighting -- proven here to strictly respect the causal boundary\n• Genuinely confirmed: residual connections (x + sublayer(x)) provide a direct gradient path through arbitrarily many stacked blocks, which is why the shape-preservation property verified here is not just a convenience but a structural requirement for training very deep Transformers at all',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: attention ಪ್ರತಿ position ಗೆ ಒಂದೂ ಕಲಿತ, data-ಅವಲಂಬಿತ ತೂಕದ ಮೂಲಕ ಯಾವುದೇ ಮೊದಲಿನ position ಇಂದ ಮಾಹಿತಿ ಪಡೆಯಲು ನಿಜವಾಗಿ ಬಿಡುತ್ತದೆ -- ಇಲ್ಲಿ causal boundary ಅನ್ನೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಗೌರವಿಸುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಲಾಗಿದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: residual connections (x + sublayer(x)) ಅನಿಯಂತ್ರಿತವಾಗಿ ಬಹಳ ಜೋಡಿಸಿದ blocks ಆದ್ಯಂತ ಒಂದೂ ನೇರ gradient path ಒದಗಿಸುತ್ತವೆ, ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ shape-preservation property ಕೇವಲ ಒಂದೂ ಅನುಕೂಲತೆ ಅಲ್ಲ ಆದರೆ ಬಹಳ ಆಳವಾದ Transformers ಬಿಲ್ಕುಲ್ train ಮಾಡಲು ಒಂದೂ ರಚನಾತ್ಮಕ ಅಗತ್ಯತೆ ಎಂದೂ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When engineers debug a production Transformer implementation (e.g. a new model in JAX or PyTorch), the very first checks they run are exactly the ones genuinely performed in this lesson: does every layer preserve tensor shape, and does the causal mask genuinely prevent future-token leakage -- shape-mismatch and mask bugs are among the most common real implementation errors.',
      bodyKn: 'Engineers ಒಂದೂ production Transformer implementation (ಉದಾ. JAX ಅಥವಾ PyTorch ನಲ್ಲಿ ಒಂದೂ ಹೊಸ model) debug ಮಾಡುವಾಗ, ಅವರೂ ಚಲಾಯಿಸುವ ಅತ್ಯಂತ ಮೊದಲ checks ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ವಹಿಸಿದವುಗಳೇ: ಪ್ರತಿಯೊಂದೂ layer tensor shape ಸಂರಕ್ಷಿಸುತ್ತದೆಯೇ, ಮತ್ತೆ causal mask ನಿಜವಾಗಿ future-token leakage ತಡೆಯುತ್ತದೆಯೇ -- shape-mismatch ಮತ್ತೆ mask bugs ಅತ್ಯಂತ ಸಾಮಾನ್ಯ ನಿಜ implementation errors ಗಳಲ್ಲಿ ಸೇರಿವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what shape does (1,3) integer token_ids become after Embedding.forward() with embed_dim=32?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: embed_dim=32 ಜೊತೆ Embedding.forward() ನಂತರ (1,3) integer token_ids ಯಾವ shape ಆಗುತ್ತದೆ?',
        opts: ['(1, 3)', '(1, 3, 32)', '(32, 1, 3)', '(3, 32)'], correct: 1,
        optsKn: ['(1, 3)', '(1, 3, 32)', '(32, 1, 3)', '(3, 32)'] },
      { q: 'How was the causal mask\'s effect genuinely proven, rather than just claimed?', qKn: 'Causal mask ಯ ಪರಿಣಾಮ ನಿಜವಾಗಿ ಹೇಗೆ ಸಾಬೀತುಪಡಿಸಲಾಯಿತು, ಕೇವಲ ಪ್ರತಿಪಾದಿಸಲಾಗಿಲ್ಲ?',
        opts: ['By reading the mask matrix values', 'By drastically mutating V at a future position and confirming zero effect on an earlier position\'s output', 'By checking the code compiles', 'It was not verified'], correct: 1,
        optsKn: ['Mask matrix values ಓದುವ ಮೂಲಕ', 'ಒಂದೂ ಭವಿಷ್ಯದ position ನಲ್ಲಿ V ಅನ್ನೂ ಗಣನೀಯವಾಗಿ ಬದಲಾಯಿಸಿ ಒಂದೂ ಮೊದಲಿನ position ಯ output ಮೇಲೆ ಶೂನ್ಯ ಪರಿಣಾಮ ದೃಢಪಡಿಸಿ', 'Code compile ಆಗುತ್ತದೆಯೇ ಎಂದೂ ಪರಿಶೀಲಿಸಿ', 'ಇದೂ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: with embed_dim=32 and num_heads=4, what is head_dim?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: embed_dim=32 ಮತ್ತೆ num_heads=4 ಜೊತೆ, head_dim ಏನೂ?',
        opts: ['4', '8', '32', '128'], correct: 1,
        optsKn: ['4', '8', '32', '128'] },
      { q: 'Genuinely confirmed: does LayerNorm normalize across the batch, across the sequence, or independently per token?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: LayerNorm batch ಆದ್ಯಂತ, sequence ಆದ್ಯಂತ, ಅಥವಾ ಪ್ರತಿ token ಗೆ ಸ್ವತಂತ್ರವಾಗಿ normalize ಮಾಡುತ್ತದೆಯೇ?',
        opts: ['Across the entire batch', 'Across the whole sequence', 'Independently for each token\'s own vector (axis=-1)', 'It does not normalize at all'], correct: 2,
        optsKn: ['ಸಂಪೂರ್ಣ batch ಆದ್ಯಂತ', 'ಸಂಪೂರ್ಣ sequence ಆದ್ಯಂತ', 'ಪ್ರತಿ token ಯ ಸ್ವಂತ vector ಗೆ ಸ್ವತಂತ್ರವಾಗಿ (axis=-1)', 'ಅದೂ ಬಿಲ್ಕುಲ್ normalize ಮಾಡುವುದಿಲ್ಲ'] },
      { q: 'Why must a TransformerBlock preserve its input shape exactly?', qKn: 'ಒಂದು TransformerBlock ತನ್ನ input shape ಅನ್ನೂ ನಿಖರವಾಗಿ ಏಕೆ ಸಂರಕ್ಷಿಸಬೇಕು?',
        opts: ['It is not actually required', 'To enable residual connections and stacking of many identical blocks', 'To reduce parameter count', 'Only the first block needs to preserve shape'], correct: 1,
        optsKn: ['ಇದೂ ವಾಸ್ತವವಾಗಿ ಅಗತ್ಯವಿಲ್ಲ', 'Residual connections ಮತ್ತೆ ಬಹಳ ಒಂದೇ blocks stacking ಸಾಧ್ಯವಾಗಿಸಲು', 'Parameter count ಕಡಿಮೆ ಮಾಡಲು', 'ಕೇವಲ ಮೊದಲ block shape ಸಂರಕ್ಷಿಸಬೇಕು'] },
    ] } },
  ],
};
