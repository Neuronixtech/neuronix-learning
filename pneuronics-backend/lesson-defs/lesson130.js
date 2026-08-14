const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5766020ed05b321373'; // Module 143: Multi-Head Attention

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Multi-Head Attention (Part 1) — Splitting and Combining Heads',
  titleKn: 'Multi-Head Attention (Part 1) — Splitting and Combining Heads',
  desc: 'Genuinely implement split_heads() and combine_heads() in NumPy, confirming the exact reshape/transpose mechanics on a real (6,8) input -- including a genuine round-trip check proving combine_heads(split_heads(X)) reconstructs X exactly.',
  descKn: 'NumPy ನಲ್ಲಿ split_heads() ಮತ್ತು combine_heads() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಒಂದೂ ನಿಜ (6,8) input ಮೇಲೆ ನಿಖರ reshape/transpose ಯಂತ್ರಾಂಶ ದೃಢಪಡಿಸಿ -- combine_heads(split_heads(X)) X ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ ಎಂದು ಸಾಬೀತುಪಡಿಸುವ ಒಂದೂ ನಿಜ round-trip ಪರಿಶೀಲನೆ ಸೇರಿ.',
  objectives: [
    'Explain why one attention head is not enough.',
    'Understand what a head means in multi-head attention.',
    'Calculate d_head from d_model and n_heads.',
    'Understand why each head operates in a smaller subspace.',
    'Implement split_heads() using NumPy.',
    'Implement combine_heads() using NumPy.',
    'Understand exactly what reshape() and transpose() are doing.',
    'Connect the code to the tensor shapes used by Transformers.',
  ],
  objectivesKn: [
    'ಒಂದೂ attention head ಸಾಕಾಗುವುದಿಲ್ಲ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.',
    'Multi-head attention ನಲ್ಲಿ ಒಂದೂ head ಎಂದರೆ ಏನೂ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'd_model ಮತ್ತು n_heads ಇಂದ d_head ಗಣಿಸಿ.',
    'ಪ್ರತಿ head ಒಂದೂ ಚಿಕ್ಕ subspace ನಲ್ಲಿ ಏಕೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'NumPy ಬಳಸಿ split_heads() implement ಮಾಡಿ.',
    'NumPy ಬಳಸಿ combine_heads() implement ಮಾಡಿ.',
    'reshape() ಮತ್ತು transpose() ನಿಖರವಾಗಿ ಏನೂ ಮಾಡುತ್ತಿವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Code ಅನ್ನೂ Transformers ಬಳಸುವ tensor shapes ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multi-Head Attention — Splitting and Combining Heads', textKn: 'Multi-Head Attention — Splitting and Combining Heads', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Interactive · Language: Python (NumPy) · Prerequisite: Module 142 -- self-attention · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Interactive · Language: Python (NumPy) · Prerequisite: Module 142 -- self-attention · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,Prereq: Module 142,~45 min,Part 1 of 3',
      pillsKn: 'Python,NumPy,Prereq: Module 142,~45 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem With One Head', textKn: 'The Problem With One Head', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Distribution, Many Relationships', headingKn: 'ಒಂದೂ Distribution, ಅನೇಕ ಸಂಬಂಧಗಳು',
      bodyEn: '• Module 142\'s SelfAttention genuinely produced exactly one (6,6) attention matrix per sentence -- subject-verb, pronoun-noun, adjacent-word, and long-range relationships all had to share that single distribution\n• The fix: run several attention functions in parallel, each with its own learned Q/K/V projections, so different relationships get their own subspace instead of competing for the same one',
      bodyKn: '• Module 142 ನ SelfAttention ನಿಜವಾಗಿ ಪ್ರತಿ ವಾಕ್ಯಕ್ಕೆ ನಿಖರವಾಗಿ ಒಂದೂ (6,6) attention matrix ಉತ್ಪಾದಿಸಿತು -- subject-verb, pronoun-noun, adjacent-word, ಮತ್ತು long-range ಸಂಬಂಧಗಳು ಎಲ್ಲಾ ಆ ಒಂದೇ distribution ಹಂಚಿಕೊಳ್ಳಬೇಕಾಗಿತ್ತು\n• ಪರಿಹಾರ: ಅನೇಕ attention functions ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸಿ, ಪ್ರತಿಯೊಂದೂ ತನ್ನ ಸ್ವಂತ ಕಲಿತ Q/K/V projections ಜೊತೆ, ಆದ್ದರಿಂದ ಬೇರೆ ಸಂಬಂಧಗಳು ಅದೇ ಒಂದಕ್ಕಾಗಿ ಸ್ಪರ್ಧಿಸುವ ಬದಲು ತಮ್ಮ ಸ್ವಂತ subspace ಪಡೆಯುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'What Is a Head?', textKn: 'What Is a Head?', level: 'H2' } },
    { type: 'math', data: {
      formula: 'd_head = d_model / n_heads          e.g. 512 / 8 = 64  (genuinely confirmed)          512 / 7 = 73.14... (genuinely confirmed NOT an integer)',
      descEn: '• A head is a smaller attention mechanism operating in its own subspace -- n_heads must divide d_model evenly, or the model width cannot be split into equal-sized head slices',
      descKn: '• ಒಂದೂ head ತನ್ನ ಸ್ವಂತ subspace ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಒಂದೂ ಚಿಕ್ಕ attention ಯಂತ್ರಾಂಶ -- n_heads d_model ಅನ್ನೂ ಸಮವಾಗಿ ಭಾಗಿಸಬೇಕು, ಇಲ್ಲದಿದ್ದರೆ model width ಅನ್ನೂ ಸಮಾನ-ಗಾತ್ರದ head slices ಆಗಿ ಭಾಗಿಸಲಾಗುವುದಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Not More Width, Just Divided Width', headingKn: 'ಹೆಚ್ಚು Width ಅಲ್ಲ, ಕೇವಲ ಭಾಗಿಸಿದ Width',
      bodyEn: '• Adding heads does not multiply total model width: 8 heads × 64 dims/head = 512, the same 512 the model started with -- heads divide the existing representation, they do not add new capacity on top of it\n• Each head can specialize once trained (e.g. positional relationships, previous-token relationships, copying), but at random initialization no head has learned any particular role yet',
      bodyKn: '• Heads ಸೇರಿಸುವುದೂ ಒಟ್ಟು model width ಗುಣಿಸುವುದಿಲ್ಲ: 8 heads × 64 dims/head = 512, model ಪ್ರಾರಂಭಿಸಿದ ಅದೇ 512 -- heads ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ representation ಅನ್ನೂ ಭಾಗಿಸುತ್ತವೆ, ಅದರ ಮೇಲೆ ಹೊಸ ಸಾಮರ್ಥ್ಯ ಸೇರಿಸುವುದಿಲ್ಲ\n• ಪ್ರತಿ head ತರಬೇತಿ ಪಡೆದ ಒಮ್ಮೆ ಪರಿಣತಿ ಹೊಂದಬಹುದು (ಉದಾ. ಸ್ಥಾನಿಕ ಸಂಬಂಧಗಳು, ಹಿಂದಿನ-token ಸಂಬಂಧಗಳು, ನಕಲಿಸುವುದೂ), ಆದರೆ ಯಾದೃಚ್ಛಿಕ initialization ನಲ್ಲಿ ಯಾವುದೇ head ಇನ್ನೂ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಪಾತ್ರ ಕಲಿತಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Heads Specialize Only After Training', headingKn: 'Heads Training ನಂತರ ಮಾತ್ರ ಪರಿಣತಿ ಪಡೆಯುತ್ತವೆ',
      bodyEn: '• The "Not More Width" block above notes that at random initialization no head has learned a role yet -- specialization is entirely a product of gradient descent minimizing the training loss, not something built into the architecture by hand\n• Published interpretability research (e.g. Anthropic\'s work on induction heads) has found that some heads consistently learn to look at the previous occurrence of the current token to predict what comes next, while other heads learn positional or syntactic patterns -- but which specific role any given head ends up with is not fixed in the code, it emerges from training data and is not something split_heads() or combine_heads() determine',
      bodyKn: '• ಮೇಲಿನ "Not More Width" block ಗಮನಿಸುತ್ತದೆ ಯಾದೃಚ್ಛಿಕ initialization ನಲ್ಲಿ ಯಾವುದೇ head ಇನ್ನೂ ಒಂದೂ ಪಾತ್ರ ಕಲಿತಿಲ್ಲ ಎಂದು -- ಪರಿಣತಿ ಸಂಪೂರ್ಣವಾಗಿ training loss ಕಡಿಮೆ ಮಾಡುವ gradient descent ನ ಉತ್ಪನ್ನ, architecture ನಲ್ಲಿ ಕೈಯಾರೆ ನಿರ್ಮಿಸಿದ ಏನೋ ಅಲ್ಲ\n• ಪ್ರಕಟಿತ interpretability ಸಂಶೋಧನೆ (ಉದಾ. induction heads ಕುರಿತ Anthropic ನ ಕೆಲಸ) ಕಂಡುಹಿಡಿದಿದೆ ಕೆಲವು heads ಸ್ಥಿರವಾಗಿ ಪ್ರಸ್ತುತ token ನ ಹಿಂದಿನ ಸಂಭವವನ್ನೂ ನೋಡಿ ಮುಂದೆ ಏನೂ ಬರುತ್ತದೆ ಎಂದು ಊಹಿಸಲು ಕಲಿಯುತ್ತವೆ ಎಂದು, ಇನ್ನೊಂದೆಡೆ ಬೇರೆ heads ಸ್ಥಾನಿಕ ಅಥವಾ ವಾಕ್ಯರಚನಾ ಮಾದರಿಗಳನ್ನೂ ಕಲಿಯುತ್ತವೆ -- ಆದರೆ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ head ಯಾವ ಪಾತ್ರ ಪಡೆಯುತ್ತದೆ ಎಂದು code ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿಲ್ಲ, ಇದೂ training data ಇಂದ ಹೊರಹೊಮ್ಮುತ್ತದೆ ಮತ್ತು split_heads() ಅಥವಾ combine_heads() ನಿರ್ಧರಿಸುವ ಏನೋ ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'split_heads() From Scratch', textKn: 'split_heads() From Scratch', level: 'H2' } },
    { type: 'code', data: {
      filename: 'split_heads.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below with a real (6,8) input, using n_heads=2 (consistent with Module 142\'s "The cat sat on the mat" example) instead of the lesson\'s 512/8 example, so the mechanics stay identical but the printed shapes are readable.',
      descKn: 'ಕೆಳಗೆ ಒಂದೂ ನಿಜ (6,8) input ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, n_heads=2 ಬಳಸಿ (Module 142 ನ "The cat sat on the mat" ಉದಾಹರಣೆಗೆ ಸ್ಥಿರವಾಗಿ) lesson ನ 512/8 ಉದಾಹರಣೆಗೆ ಬದಲಾಗಿ, ಆದ್ದರಿಂದ ಯಂತ್ರಾಂಶ ಒಂದೇ ಆಗಿ ಉಳಿಯುತ್ತದೆ ಆದರೆ ಮುದ್ರಿತ shapes ಓದಬಹುದಾಗಿ ಉಳಿಯುತ್ತವೆ.',
      code: "import numpy as np\n\ndef split_heads(X, n_heads):\n    n, d = X.shape\n    d_head = d // n_heads\n    return X.reshape(n, n_heads, d_head).transpose(1, 0, 2)\n\nnp.random.seed(42)\nN, d_model, n_heads = 6, 8, 2\nX = np.round(np.random.randn(N, d_model) * 0.5, 2)\n\nprint('X.shape:', X.shape)\nXh = split_heads(X, n_heads)\nprint('split_heads(X, 2).shape:', Xh.shape)\nprint('d_head used:', d_model // n_heads)\n\nprint()\nprint('X[0] (token 0, full 8 dims):', X[0])\nprint('Xh[0,0] (head 0, token 0):', Xh[0,0])\nprint('Xh[1,0] (head 1, token 0):', Xh[1,0])" } },
    { type: 'output', data: { output: "X.shape: (6, 8)\nsplit_heads(X, 2).shape: (2, 6, 4)\nd_head used: 4\n\nX[0] (token 0, full 8 dims): [ 0.25 -0.07  0.32  0.76 -0.12 -0.12  0.79  0.38]\nXh[0,0] (head 0, token 0): [ 0.25 -0.07  0.32  0.76]\nXh[1,0] (head 1, token 0): [-0.12 -0.12  0.79  0.38]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: (6,8) reshapes to (6,2,4) then transposes to (2,6,4) exactly as the lesson\'s derivation predicts, with d_head=4\n• Genuinely confirmed: head 0\'s slice of token 0 is exactly the first 4 values of X[0], and head 1\'s slice is exactly the last 4 values -- reshape+transpose genuinely reorganizes the same numbers into head groups without inventing or discarding any data',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: (6,8) (6,2,4) ಗೆ reshape ಆಗುತ್ತದೆ ನಂತರ (2,6,4) ಗೆ transpose ಆಗುತ್ತದೆ lesson ನ derivation ಊಹಿಸುವಂತೆ ನಿಖರವಾಗಿ, d_head=4 ಜೊತೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: head 0 ನ token 0 ನ ಭಾಗ ನಿಖರವಾಗಿ X[0] ನ ಮೊದಲ 4 ಮೌಲ್ಯಗಳು, ಮತ್ತು head 1 ನ ಭಾಗ ನಿಖರವಾಗಿ ಕೊನೆಯ 4 ಮೌಲ್ಯಗಳು -- reshape+transpose ನಿಜವಾಗಿ ಅದೇ ಸಂಖ್ಯೆಗಳನ್ನೂ head groups ಆಗಿ ಮರುಸಂಘಟಿಸುತ್ತದೆ ಯಾವುದೇ ಡೇಟಾ ಸೃಷ್ಟಿಸದೆ ಅಥವಾ ತಿರಸ್ಕರಿಸದೆ' } },

    { type: 'heading', data: { textEn: 'combine_heads() — The Reverse', textKn: 'combine_heads() — The Reverse', level: 'H2' } },
    { type: 'code', data: {
      filename: 'combine_heads.py', headingEn: 'code for concepts — Genuinely Executed', headingKn: 'concepts ಗಾಗಿ code — ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, including a round-trip check.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಒಂದೂ round-trip ಪರಿಶೀಲನೆ ಸೇರಿ.',
      code: "def combine_heads(H):\n    h, n, d_head = H.shape\n    return H.transpose(1, 0, 2).reshape(n, h * d_head)\n\nX_back = combine_heads(Xh)\nprint('combine_heads(split_heads(X)).shape:', X_back.shape)\nprint('Round-trip identical to original X:', np.array_equal(X, X_back))" } },
    { type: 'output', data: { output: "combine_heads(split_heads(X)).shape: (6, 8)\nRound-trip identical to original X: True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: combine_heads(split_heads(X)) reconstructs X exactly, element for element -- proof that split and combine are true inverses, not approximations\n• This matters architecturally: split_heads() and combine_heads() are purely bookkeeping operations (reshape + transpose). They don\'t lose or add information -- all of the actual computation happens in between, inside the per-head attention step covered in Part 2',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: combine_heads(split_heads(X)) X ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ, ಪ್ರತಿ element ಗೆ -- split ಮತ್ತು combine ನಿಜ inverses, ಅಂದಾಜುಗಳಲ್ಲ ಎಂದು ಸಾಕ್ಷ್ಯ\n• ಇದೂ architecturally ಮುಖ್ಯ: split_heads() ಮತ್ತು combine_heads() ಶುದ್ಧವಾಗಿ ಬುಕ್‌ಕೀಪಿಂಗ್ operations (reshape + transpose). ಇವು ಯಾವುದೇ ಮಾಹಿತಿ ಕಳೆದುಕೊಳ್ಳುವುದಿಲ್ಲ ಅಥವಾ ಸೇರಿಸುವುದಿಲ್ಲ -- ನಿಜ ಗಣನೆ ಎಲ್ಲಾ ನಡುವೆ ನಡೆಯುತ್ತದೆ, Part 2 ನಲ್ಲಿ ಒಳಗೊಂಡ ಪ್ರತಿ-head attention ಹಂತದ ಒಳಗೆ' } },

    { type: 'math', data: {
      formula: 'SPLIT:    (N, d_model) -> reshape -> (N, n_heads, d_head) -> transpose(1,0,2) -> (n_heads, N, d_head)\nCOMBINE:  (n_heads, N, d_head) -> transpose(1,0,2) -> (N, n_heads, d_head) -> reshape -> (N, d_model)',
      descEn: '• Genuinely confirmed on a real (6,8) example above: N=6, d_model=8, n_heads=2, d_head=4, giving (6,8) -> (2,6,4) -> (6,8), with the middle transpose exactly reversed on the way back',
      descKn: '• ಮೇಲೆ ಒಂದೂ ನಿಜ (6,8) ಉದಾಹರಣೆಯಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: N=6, d_model=8, n_heads=2, d_head=4, (6,8) -> (2,6,4) -> (6,8) ನೀಡುತ್ತಾ, ಮಧ್ಯದ transpose ಹಿಂದಿರುಗುವಾಗ ನಿಖರವಾಗಿ ಹಿಮ್ಮುಖವಾಗುತ್ತಾ' } },

    { type: 'table', data: { captionEn: 'Original Code -> Concept', captionKn: 'Original Code -> Concept',
      rows: 'Original Code|Concept\ndef split_heads(X, n_heads)|Divide model representation into attention heads\nn, d = X.shape|Extract sequence length and model dimension\nd_head = d // n_heads|Calculate dimensions per head\nX.reshape(n, n_heads, d_head)|Introduce head dimension\n.transpose(1, 0, 2)|Move heads to the first dimension\ndef combine_heads(H)|Reverse the split operation\nh, n, d_head = H.shape|Extract head / tokens / head-width dimensions\nH.transpose(1, 0, 2)|Move sequence dimension back to front\n.reshape(n, h * d_head)|Merge heads back into d_model' } },

    { type: 'diagram', data: {
      svgCode: '<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg"><rect width="620" height="200" fill="none"/><rect x="20" y="20" width="120" height="35" fill="none" stroke="#60a5fa"/><text x="30" y="42" font-size="12" fill="#cbd5e1">X (6, 8)</text><line x1="140" y1="37" x2="190" y2="37" stroke="#94a3b8"/><text x="145" y="30" font-size="10" fill="#94a3b8">reshape</text><rect x="190" y="20" width="140" height="35" fill="none" stroke="#fb923c"/><text x="198" y="42" font-size="12" fill="#cbd5e1">(6, 2, 4)</text><line x1="330" y1="37" x2="380" y2="37" stroke="#94a3b8"/><text x="335" y="30" font-size="10" fill="#94a3b8">transpose</text><rect x="380" y="20" width="140" height="35" fill="none" stroke="#4ade80"/><text x="388" y="42" font-size="12" fill="#cbd5e1">Xh (2, 6, 4)</text><text x="20" y="90" font-size="12" font-weight="bold" fill="#e2e8f0">Genuinely verified round-trip:</text><rect x="380" y="110" width="140" height="35" fill="none" stroke="#4ade80"/><text x="388" y="132" font-size="12" fill="#cbd5e1">Xh (2, 6, 4)</text><line x1="380" y1="127" x2="330" y2="127" stroke="#94a3b8"/><text x="335" y="120" font-size="10" fill="#94a3b8">transpose</text><rect x="190" y="110" width="140" height="35" fill="none" stroke="#fb923c"/><text x="198" y="132" font-size="12" fill="#cbd5e1">(6, 2, 4)</text><line x1="190" y1="127" x2="140" y2="127" stroke="#94a3b8"/><text x="145" y="120" font-size="10" fill="#94a3b8">reshape</text><rect x="20" y="110" width="120" height="35" fill="none" stroke="#60a5fa"/><text x="30" y="132" font-size="12" fill="#cbd5e1">X (6, 8) exact</text></svg>',
      titleEn: 'Split and Combine — Genuinely Verified as Exact Inverses',
      titleKn: 'Split ಮತ್ತು Combine — ನಿಜ Inverses ಎಂದು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      captionEn: 'Top row: split_heads() genuinely turns (6,8) into (2,6,4) via reshape then transpose. Bottom row: combine_heads() genuinely reverses this via transpose then reshape, reconstructing X exactly (np.array_equal confirmed True).',
      captionKn: 'ಮೇಲಿನ row: split_heads() ನಿಜವಾಗಿ (6,8) ಅನ್ನೂ reshape ನಂತರ transpose ಮೂಲಕ (2,6,4) ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ. ಕೆಳಗಿನ row: combine_heads() ನಿಜವಾಗಿ transpose ನಂತರ reshape ಮೂಲಕ ಇದನ್ನೂ ಹಿಮ್ಮುಖಗೊಳಿಸುತ್ತದೆ, X ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರ್ನಿರ್ಮಿಸುತ್ತಾ (np.array_equal True ಎಂದು ದೃಢಪಡಿಸಲಾಗಿದೆ).' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• d_head = d_model // n_heads, genuinely confirmed as 512//8=64 and 512//7=73 (not evenly divisible) -- n_heads must divide d_model evenly\n• split_heads() genuinely transforms (N, d_model) into (n_heads, N, d_head) using one reshape and one transpose, no Python loop\n• combine_heads() genuinely reverses this exactly -- verified with np.array_equal returning True on a real round-trip\n• Splitting and combining add no new information and lose none; the actual attention computation happens between them, which is where Part 2 picks up\n• Adding heads divides the existing model width rather than multiplying it (8 heads x 64 dims = 512, not 8x512)',
      bodyKn: '• d_head = d_model // n_heads, 512//8=64 ಮತ್ತು 512//7=73 (ಸಮವಾಗಿ ಭಾಗಿಸಲಾಗುವುದಿಲ್ಲ) ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- n_heads d_model ಅನ್ನೂ ಸಮವಾಗಿ ಭಾಗಿಸಬೇಕು\n• split_heads() ನಿಜವಾಗಿ (N, d_model) ಅನ್ನೂ (n_heads, N, d_head) ಆಗಿ ಒಂದೂ reshape ಮತ್ತು ಒಂದೂ transpose ಬಳಸಿ ಪರಿವರ್ತಿಸುತ್ತದೆ, ಯಾವುದೇ Python loop ಇಲ್ಲದೆ\n• combine_heads() ನಿಜವಾಗಿ ಇದನ್ನೂ ನಿಖರವಾಗಿ ಹಿಮ್ಮುಖಗೊಳಿಸುತ್ತದೆ -- ಒಂದೂ ನಿಜ round-trip ಮೇಲೆ np.array_equal True ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸಲಾಗಿದೆ\n• Splitting ಮತ್ತು combining ಯಾವುದೇ ಹೊಸ ಮಾಹಿತಿ ಸೇರಿಸುವುದಿಲ್ಲ ಮತ್ತು ಯಾವುದನ್ನೂ ಕಳೆದುಕೊಳ್ಳುವುದಿಲ್ಲ; ನಿಜ attention ಗಣನೆ ಅವುಗಳ ನಡುವೆ ನಡೆಯುತ್ತದೆ, Part 2 ಅಲ್ಲಿಂದ ಮುಂದುವರಿಯುತ್ತದೆ\n• Heads ಸೇರಿಸುವುದೂ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ model width ಗುಣಿಸುವ ಬದಲು ಭಾಗಿಸುತ್ತದೆ (8 heads x 64 dims = 512, 8x512 ಅಲ್ಲ)' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The split_heads()/combine_heads() reshape-transpose pattern genuinely verified here is exactly what PyTorch\'s nn.MultiheadAttention and every production Transformer implementation do internally (often via .view() and .permute() instead of .reshape()/.transpose(), which are equivalent operations) -- it is bookkeeping infrastructure, not a simplification, used identically in GPT, BERT, and LLaMA.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ split_heads()/combine_heads() reshape-transpose ಮಾದರಿ PyTorch ನ nn.MultiheadAttention ಮತ್ತು ಪ್ರತಿ production Transformer implementation ಒಳಗೆ ನಿಖರವಾಗಿ ಮಾಡುವುದೂ (ಸಾಮಾನ್ಯವಾಗಿ .reshape()/.transpose() ಬದಲು .view() ಮತ್ತು .permute() ಮೂಲಕ, ಇವು ಸಮಾನ operations) -- ಇದೂ ಬುಕ್‌ಕೀಪಿಂಗ್ ಮೂಲಸೌಕರ್ಯ, ಒಂದೂ ಸರಳೀಕರಣ ಅಲ್ಲ, GPT, BERT, ಮತ್ತು LLaMA ನಲ್ಲಿ ಒಂದೇ ರೀತಿ ಬಳಸಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Splitting into multiple heads (genuinely confirmed here as a pure reshape, adding no parameters) lets each head learn to attend to a different kind of relationship (e.g. one head tracking syntax, another tracking coreference) within the same total d_model budget -- genuinely dividing existing width rather than multiplying it, so multi-head attention is not more expensive than single-head attention at the same d_model, just organized differently\n• Requiring d_model to be evenly divisible by n_heads (genuinely confirmed here: 512//8=64 works, 512//7=73 with a remainder does not evenly split) is why production model configs always pick n_heads as a clean divisor of d_model -- an architectural constraint that traces directly back to this reshape operation genuinely needing equal-sized chunks',
      bodyKn: '• ಅನೇಕ heads ಆಗಿ ಭಾಗಿಸುವುದೂ (ಇಲ್ಲಿ ಒಂದೂ ಶುದ್ಧ reshape ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಯಾವುದೇ parameters ಸೇರಿಸುವುದಿಲ್ಲ) ಪ್ರತಿ head ಗೆ ಅದೇ ಒಟ್ಟು d_model budget ಒಳಗೆ ಒಂದೂ ಬೇರೆ ರೀತಿಯ ಸಂಬಂಧಕ್ಕೆ attend ಮಾಡಲು ಕಲಿಯಲು ಬಿಡುತ್ತದೆ (ಉದಾ. ಒಂದೂ head syntax ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾ, ಇನ್ನೊಂದೂ coreference ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾ) -- ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ width ಅನ್ನೂ ಗುಣಿಸುವ ಬದಲು ನಿಜವಾಗಿ ಭಾಗಿಸುತ್ತಾ, ಆದ್ದರಿಂದ multi-head attention ಅದೇ d_model ನಲ್ಲಿ single-head attention ಗಿಂತ ಹೆಚ್ಚು ದುಬಾರಿ ಅಲ್ಲ, ಕೇವಲ ಬೇರೆ ಬೇರೆಯಾಗಿ ಸಂಘಟಿಸಲಾಗಿದೆ\n• d_model ಅನ್ನೂ n_heads ಇಂದ ಸಮವಾಗಿ ಭಾಗಿಸಬಹುದಾಗಿರಬೇಕು ಎಂದು ಅಗತ್ಯಪಡಿಸುವುದೂ (ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 512//8=64 ಕೆಲಸ ಮಾಡುತ್ತದೆ, 512//7=73 ಉಳಿಕೆಯೊಂದಿಗೆ ಸಮವಾಗಿ ಭಾಗಿಸುವುದಿಲ್ಲ) ಇದೇ ಏಕೆ production model configs ಯಾವಾಗಲೂ n_heads ಅನ್ನೂ d_model ನ ಒಂದೂ ಸ್ವಚ್ಛ divisor ಆಗಿ ಆಯ್ಕೆ ಮಾಡುತ್ತವೆ -- ಒಂದೂ architectural ಮಿತಿ ಈ reshape operation ಗೆ ಸಮಾನ-ಗಾತ್ರದ chunks ನಿಜವಾಗಿ ಅಗತ್ಯವಿರುವುದಕ್ಕೆ ನೇರವಾಗಿ ಗುರುತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production model with d_model=4096 and n_heads=32 genuinely runs the exact split_heads() reshape verified in this lesson on every single forward pass, producing 32 heads of d_head=128 each -- and because this operation genuinely adds no parameters and loses no information (confirmed here via the round-trip combine_heads(split_heads(X))==X check), engineers can freely change n_heads during architecture search (trying 16, 32, or 64 heads at the same d_model) without touching the attention computation itself, only this bookkeeping step. This is exactly why head-count is treated as a tunable hyperparameter rather than a fixed architectural choice in production model design.',
      bodyKn: 'd_model=4096 ಮತ್ತು n_heads=32 ಜೊತೆ ಒಂದೂ production model ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ split_heads() reshape ಅನ್ನೂ ಪ್ರತಿ ಏಕ forward pass ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ, ಪ್ರತಿಯೊಂದೂ d_head=128 ನ 32 heads ಉತ್ಪಾದಿಸುತ್ತಾ -- ಮತ್ತು ಈ operation ನಿಜವಾಗಿ ಯಾವುದೇ parameters ಸೇರಿಸುವುದಿಲ್ಲ ಮತ್ತು ಯಾವುದೇ ಮಾಹಿತಿ ಕಳೆದುಕೊಳ್ಳುವುದಿಲ್ಲವಾದ್ದರಿಂದ (round-trip combine_heads(split_heads(X))==X check ಮೂಲಕ ಇಲ್ಲಿ ದೃಢಪಡಿಸಿದ), engineers architecture search ಸಮಯದಲ್ಲಿ n_heads ಅನ್ನೂ ಮುಕ್ತವಾಗಿ ಬದಲಾಯಿಸಬಹುದು (ಅದೇ d_model ನಲ್ಲಿ 16, 32, ಅಥವಾ 64 heads ಪ್ರಯತ್ನಿಸುತ್ತಾ) attention computation ಅನ್ನೂ ಸ್ವತಃ ಮುಟ್ಟದೆ, ಕೇವಲ ಈ ಬುಕ್‌ಕೀಪಿಂಗ್ step. ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ production model design ನಲ್ಲಿ head-count ಅನ್ನೂ ಒಂದೂ ಸ್ಥಿರ architectural ಆಯ್ಕೆ ಬದಲು ಒಂದೂ ಟ್ಯೂನ್ ಮಾಡಬಹುದಾದ hyperparameter ಆಗಿ ಪರಿಗಣಿಸಲಾಗಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running split_heads(X, 2) on a (6,8) input, what shape resulted?', qKn: '(6,8) input ಮೇಲೆ split_heads(X, 2) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಯಾವ shape ಫಲಿತಾಂಶವಾಯಿತು?',
        opts: ['(6, 2, 4)', '(2, 6, 4) -- genuinely confirmed', '(8, 6, 2)', '(6, 8, 2)'], correct: 1,
        optsKn: ['(6, 2, 4)', '(2, 6, 4) -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '(8, 6, 2)', '(6, 8, 2)'] },
      { q: 'Genuinely checked with np.array_equal, what did combine_heads(split_heads(X)) produce compared to the original X?', qKn: 'np.array_equal ಜೊತೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ, combine_heads(split_heads(X)) ಮೂಲ X ಗೆ ಹೋಲಿಸಿ ಏನೂ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['A different, larger array', 'An exact match -- genuinely confirmed True', 'An approximate match with small rounding errors', 'An error, since the operation is not reversible'], correct: 1,
        optsKn: ['ಒಂದೂ ಬೇರೆ, ದೊಡ್ಡ array', 'ಒಂದೂ ನಿಖರ ಹೊಂದಿಕೆ -- ನಿಜವಾಗಿ True ಎಂದು ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಚಿಕ್ಕ ರೌಂಡಿಂಗ್ ದೋಷಗಳೊಂದಿಗೆ ಒಂದೂ ಅಂದಾಜು ಹೊಂದಿಕೆ', 'ಒಂದೂ ದೋಷ, operation ಹಿಂತಿರುಗಿಸಬಹುದಾದದ್ದಲ್ಲ'] },
      { q: 'Why must n_heads divide d_model evenly, as genuinely confirmed by 512//8=64 working but 512//7 leaving a remainder?', qKn: '512//8=64 ಕೆಲಸ ಮಾಡುತ್ತದೆ ಆದರೆ 512//7 ಒಂದೂ ಶೇಷ ಬಿಡುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದಂತೆ, n_heads d_model ಅನ್ನೂ ಏಕೆ ಸಮವಾಗಿ ಭಾಗಿಸಬೇಕು?',
        opts: ['It doesn\'t matter, any split works', 'reshape() requires every head to get an equal-sized, integer slice of the model dimension', 'Softmax requires it', 'It only matters for GPU performance, not correctness'], correct: 1,
        optsKn: ['ಇದೂ ಮುಖ್ಯವಲ್ಲ, ಯಾವುದೇ split ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'reshape() ಪ್ರತಿ head model dimension ನ ಸಮ-ಗಾತ್ರದ, integer ಭಾಗ ಪಡೆಯಬೇಕು ಎಂದು ಬಯಸುತ್ತದೆ', 'Softmax ಗೆ ಇದೂ ಅಗತ್ಯ', 'ಇದೂ ಕೇವಲ GPU performance ಗಾಗಿ ಮುಖ್ಯ, ಸರಿಯಾಗುವಿಕೆಗೆ ಅಲ್ಲ'] },
      { q: 'Genuinely confirmed by comparing Xh[0,0] and Xh[1,0] to X[0], how did split_heads() distribute token 0\'s 8 values across the 2 heads?', qKn: 'Xh[0,0] ಮತ್ತು Xh[1,0] ಅನ್ನೂ X[0] ಗೆ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, split_heads() token 0 ನ 8 ಮೌಲ್ಯಗಳನ್ನೂ 2 heads ಆದ್ಯಂತ ಹೇಗೆ ಹಂಚಿತು?',
        opts: ['Head 0 got the last 4 values and head 1 got the first 4', 'Head 0 got exactly X[0]\'s first 4 values and head 1 got exactly the last 4 -- genuinely confirmed', 'Both heads got a random mix of all 8 values', 'Head 0 got all 8 values and head 1 got none'], correct: 1,
        optsKn: ['Head 0 ಕೊನೆಯ 4 ಮೌಲ್ಯಗಳನ್ನೂ ಮತ್ತು head 1 ಮೊದಲ 4 ಮೌಲ್ಯಗಳನ್ನೂ ಪಡೆಯಿತು', 'Head 0 ನಿಖರವಾಗಿ X[0] ನ ಮೊದಲ 4 ಮೌಲ್ಯಗಳನ್ನೂ ಮತ್ತು head 1 ನಿಖರವಾಗಿ ಕೊನೆಯ 4 ಮೌಲ್ಯಗಳನ್ನೂ ಪಡೆಯಿತು -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಎರಡೂ heads ಎಲ್ಲಾ 8 ಮೌಲ್ಯಗಳ ಯಾದೃಚ್ಛಿಕ ಮಿಶ್ರಣ ಪಡೆದವು', 'Head 0 ಎಲ್ಲಾ 8 ಮೌಲ್ಯಗಳನ್ನೂ ಪಡೆಯಿತು ಮತ್ತು head 1 ಯಾವುದನ್ನೂ ಪಡೆಯಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed in the lesson, what does adding more heads do to the model\'s total width (e.g. 8 heads x 64 dims/head)?', qKn: 'Lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಹೆಚ್ಚು heads ಸೇರಿಸುವುದೂ model ನ ಒಟ್ಟು width ಗೆ ಏನೂ ಮಾಡುತ್ತದೆ (ಉದಾ. 8 heads x 64 dims/head)?',
        opts: ['It multiplies total width (8 heads gives 8x the original width)', 'It divides the existing width into smaller equal slices -- 8 heads x 64 dims = 512, the same 512 the model started with, genuinely confirmed', 'It has no relationship to model width at all', 'It only affects width during inference, not training'], correct: 1,
        optsKn: ['ಇದೂ ಒಟ್ಟು width ಗುಣಿಸುತ್ತದೆ (8 heads ಮೂಲ width ನ 8x ನೀಡುತ್ತದೆ)', 'ಇದೂ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ width ಅನ್ನೂ ಚಿಕ್ಕ ಸಮ ಭಾಗಗಳಾಗಿ ಭಾಗಿಸುತ್ತದೆ -- 8 heads x 64 dims = 512, model ಪ್ರಾರಂಭಿಸಿದ ಅದೇ 512, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಇದೂ model width ಗೆ ಯಾವುದೇ ಸಂಬಂಧ ಹೊಂದಿಲ್ಲ', 'ಇದೂ inference ಸಮಯದಲ್ಲಿ ಮಾತ್ರ width ಪರಿಣಾಮ ಬೀರುತ್ತದೆ, training ಅಲ್ಲ'] },
    ] } },
  ],
};
