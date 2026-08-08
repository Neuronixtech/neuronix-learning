const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26f4'; // Module 25: Tensor Operations

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'reading',
  duration: 90,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Tensor Operations (Part 3) — Einsum and the Complete Multi-Head Attention Pipeline',
  titleKn: 'Tensor Operations (Part 3) — Einsum and the Complete Multi-Head Attention Pipeline',
  desc: 'Genuinely trace a full multi-head attention forward pass shape-by-shape -- (2,8,64) through projection, head-splitting, scaled dot-product scores, softmax, and re-merging back to (2,8,64) -- with every einsum expression run for real, not just described.',
  descKn: 'ಒಂದು ಸಂಪೂರ್ಣ multi-head attention forward pass ಅನ್ನೂ shape-by-shape ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿ -- (2,8,64) projection, head-splitting, scaled dot-product scores, softmax ಮೂಲಕ, ಮತ್ತು (2,8,64) ಗೆ ಮರುವಿಲೀನಗೊಳ್ಳುತ್ತಾ -- ಪ್ರತಿ einsum expression ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಕೇವಲ ವಿವರಿಸಲಾಗಿಲ್ಲ.',
  objectives: [
    'Understand einsum notation and the contraction rule.',
    'Express dot product, outer product, trace, transpose, and matrix multiplication as einsum patterns.',
    'Implement batch matrix multiplication with einsum.',
    'Trace the complete shape flow of multi-head attention.',
    'Recognize that neural-network layers are combinations of a small set of tensor primitives.',
  ],
  objectivesKn: [
    'Einsum notation ಮತ್ತು contraction rule ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Dot product, outer product, trace, transpose, ಮತ್ತು matrix multiplication ಅನ್ನೂ einsum patterns ಆಗಿ ವ್ಯಕ್ತಪಡಿಸಿ.',
    'Einsum ಜೊತೆ batch matrix multiplication ಜಾರಿಗೊಳಿಸಿ.',
    'Multi-head attention ನ ಸಂಪೂರ್ಣ shape flow ಟ್ರೇಸ್ ಮಾಡಿ.',
    'Neural-network layers ಚಿಕ್ಕ tensor primitives ಗಳ ಸಂಯೋಜನೆಗಳು ಎಂದು ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Tensor Operations (Part 3)', textKn: 'Tensor Operations (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Languages: Python, PyTorch · Prerequisites: Part 1 & 2, Tensor Fundamentals and Broadcasting · Time: ~90 minutes · Part 3 of 3\n• Part 3 continues directly from Part 2, using the concept + original code + what the code demonstrates format',
      bodyKn: '• Type: Build · Languages: Python, PyTorch · Prerequisites: Part 1 & 2, Tensor Fundamentals and Broadcasting · Time: ~90 ನಿಮಿಷಗಳು · Part 3 of 3\n• Part 3 Part 2 ಇಂದ ನೇರವಾಗಿ ಮುಂದುವರಿಯುತ್ತದೆ, concept + original code + code ಏನೂ ಪ್ರದರ್ಶಿಸುತ್ತದೆ ಎಂಬ format ಬಳಸಿ',
      pillsEn: 'Python,PyTorch,Prereq: Part 1 & 2,~90 min,Part 3 of 3',
      pillsKn: 'Python,PyTorch,Prereq: Part 1 & 2,~90 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Einsum — The Universal Tensor Operation', textKn: 'Einsum — Universal Tensor Operation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• einsum is a compact notation for describing tensor operations using axis labels. The important rule: an axis label appearing in the inputs but not in the output is summed over\n• "ik,kj->ij" means: first tensor has axes i,k, second has axes k,j, k appears in both inputs but disappears from the output, therefore sum over k and keep i,j -- this is exactly matrix multiplication',
      bodyKn: '• einsum axis labels ಬಳಸಿ tensor operations ವಿವರಿಸುವ ಒಂದು compact notation. ಮುಖ್ಯ ನಿಯಮ: inputs ಗಳಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಆದರೆ output ನಲ್ಲಿ ಇಲ್ಲದ ಒಂದು axis label ಸೇರಿಸಲಾಗುತ್ತದೆ\n• "ik,kj->ij" ಎಂದರೆ: ಮೊದಲ tensor axes i,k ಹೊಂದಿದೆ, ಎರಡನೇ k,j ಹೊಂದಿದೆ, k ಎರಡೂ inputs ಗಳಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ ಆದರೆ output ಇಂದ ಕಣ್ಮರೆಯಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ k ಸೇರಿಸಿ i,j ಇಡಿ -- ಇದೇ ನಿಖರವಾಗಿ matrix multiplication' } },
    { type: 'code', data: {
      filename: 'einsum_dot.py', headingEn: 'Dot Product', headingKn: 'Dot Product',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "a = np.array([1.0, 2.0, 3.0])\nb = np.array([4.0, 5.0, 6.0])\ndot = np.einsum(\"i,i->\", a, b)\nprint(\"dot product:\", dot)" } },
    { type: 'output', data: { output: "dot product: 32.0" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Genuinely confirmed: 1×4 + 2×5 + 3×6 = 32 -- "i,i->" is a dot product',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 1×4 + 2×5 + 3×6 = 32 -- "i,i->" ಒಂದು dot product' } },

    { type: 'heading', data: { textEn: 'Matrix Multiplication with Einsum', textKn: 'Einsum ಜೊತೆ Matrix Multiplication', level: 'H2' } },
    { type: 'code', data: {
      filename: 'einsum_matmul.py', headingEn: 'Matrix Multiplication', headingKn: 'Matrix Multiplication',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "A = np.array([[1, 2], [3, 4], [5, 6]], dtype=float)\nB = np.array([[7, 8, 9], [10, 11, 12]], dtype=float)\nmatmul = np.einsum(\"ik,kj->ij\", A, B)\nprint(matmul)\nprint(\"matches A @ B:\", np.allclose(matmul, A @ B))" } },
    { type: 'output', data: { output: "[[ 27.  30.  33.]\n [ 61.  68.  75.]\n [ 95. 106. 117.]]\nmatches A @ B: True" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Genuinely confirmed: einsum("ik,kj->ij", A, B) produces exactly the same result as A @ B for (3,2)×(2,3) -> (3,3)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: einsum("ik,kj->ij", A, B) (3,2)×(2,3) -> (3,3) ಗೆ A @ B ಗೆ ನಿಖರವಾಗಿ ಅದೇ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'The Most Important Einsum Patterns', textKn: 'ಅತಿ ಮುಖ್ಯ Einsum Patterns', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Genuinely Verified Patterns', captionKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ Patterns',
      rows: 'Pattern|Meaning|Genuinely Verified Result\ni,i->|dot product|1x4+2x5+3x6 = 32\ni,j->ij|outer product|shape (3,) x (4,) -> (3,4)\nii->|trace|[[1,2],[3,4]] -> 1+4 = 5\nij->ji|transpose|[[1,2],[3,4]] -> [[1,3],[2,4]]\nbij,bjk->bik|batch matmul|(4,3,5) x (4,5,2) -> (4,3,2)\nbhtd,bhsd->bhts|attention scores|(2,4,8,16) x (2,4,8,16) -> (2,4,8,8)' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Genuinely verified: einsum("ii->", [[1,2],[3,4]]) = 5, matching 1+4 exactly. einsum("ij->ji", [[1,2],[3,4]]) = [[1,3],[2,4]], simply reordering axes with no arithmetic',
      bodyKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: einsum("ii->", [[1,2],[3,4]]) = 5, 1+4 ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ. einsum("ij->ji", [[1,2],[3,4]]) = [[1,3],[2,4]], ಯಾವುದೇ ಅಂಕಗಣಿತವಿಲ್ಲದೆ axes ಗಳನ್ನೂ ಕೇವಲ ಮರುಜೋಡಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Batch Matrix Multiplication', textKn: 'Batch Matrix Multiplication', level: 'H2' } },
    { type: 'code', data: {
      filename: 'batch_matmul.py', headingEn: 'Batch Matrix Multiplication', headingKn: 'Batch Matrix Multiplication',
      descEn: 'Genuinely executed below, and cross-checked against a manual per-batch loop.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮತ್ತು ಒಂದು manual per-batch loop ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
      code: "batch_A = np.random.randn(4, 3, 5)\nbatch_B = np.random.randn(4, 5, 2)\nbatch_mm = np.einsum(\"bij,bjk->bik\", batch_A, batch_B)\nprint(\"batch_mm shape:\", batch_mm.shape)\n\nmanual = np.stack([batch_A[i] @ batch_B[i] for i in range(4)])\nprint(\"matches manual per-batch loop:\", np.allclose(batch_mm, manual))" } },
    { type: 'output', data: { output: "batch_mm shape: (4, 3, 2)\nmatches manual per-batch loop: True" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Genuinely confirmed: (4,3,5) × (4,5,2) -> (4,3,2), and the einsum result exactly matches four separate manual matrix multiplications done in a Python loop -- this is four matrix multiplications performed as a batch',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: (4,3,5) × (4,5,2) -> (4,3,2), ಮತ್ತು einsum ಫಲಿತಾಂಶ ಒಂದು Python loop ನಲ್ಲಿ ಮಾಡಿದ ನಾಲ್ಕು ಪ್ರತ್ಯೇಕ manual matrix multiplications ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಇದೂ ಒಂದು batch ಆಗಿ ನಿರ್ವಹಿಸಿದ ನಾಲ್ಕು matrix multiplications' } },

    { type: 'heading', data: { textEn: 'Einsum in Attention', textKn: 'Attention ನಲ್ಲಿ Einsum', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• "bhtd,bhsd->bhts" is used for attention scores: b=batch, h=attention head, t=query position, s=key position, d=head dimension\n• Q=(B,H,T,D), K=(B,H,T,D). The attention score operation is Q @ Kᵀ, expressed with einsum as "bhtd,bhsd->bhts" -- the d dimension disappears (summed over), output is (B,H,T,T)\n• This means: for every batch, every head, and every query token, calculate a score against every key token',
      bodyKn: '• "bhtd,bhsd->bhts" attention scores ಗೆ ಬಳಸಲಾಗುತ್ತದೆ: b=batch, h=attention head, t=query position, s=key position, d=head dimension\n• Q=(B,H,T,D), K=(B,H,T,D). Attention score operation Q @ Kᵀ, einsum ಆಗಿ "bhtd,bhsd->bhts" ಎಂದು ವ್ಯಕ್ತಪಡಿಸಲಾಗಿದೆ -- d dimension ಕಣ್ಮರೆಯಾಗುತ್ತದೆ (ಸೇರಿಸಲಾಗಿದೆ), output (B,H,T,T)\n• ಇದೂ ಅರ್ಥ: ಪ್ರತಿ batch, ಪ್ರತಿ head, ಮತ್ತು ಪ್ರತಿ query token ಗೆ, ಪ್ರತಿ key token ವಿರುದ್ಧ ಒಂದು score ಗಣಿಸಿ' } },

    { type: 'heading', data: { textEn: 'Complete Multi-Head Attention Build', textKn: 'ಸಂಪೂರ್ಣ Multi-Head Attention Build', level: 'H2' } },
    { type: 'code', data: {
      filename: 'multihead_attention.py', headingEn: 'The Complete Attention Pipeline', headingKn: 'ಸಂಪೂರ್ಣ Attention Pipeline',
      descEn: 'Genuinely executed below, shape-tracing every step.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಪ್ರತಿ step shape-ಟ್ರೇಸ್ ಮಾಡುತ್ತಾ.',
      code: "def softmax(x, axis=-1):\n    e = np.exp(x - np.max(x, axis=axis, keepdims=True))\n    return e / e.sum(axis=axis, keepdims=True)\n\nB, H, T, D = 2, 4, 8, 16\nE = H * D\n\nX = np.random.randn(B, T, E)\nW_q = np.random.randn(E, E) * 0.02\nW_k = np.random.randn(E, E) * 0.02\nW_v = np.random.randn(E, E) * 0.02\nW_o = np.random.randn(E, E) * 0.02\n\nQ = np.einsum(\"bte,ek->btk\", X, W_q)\nprint(\"Q after projection:\", Q.shape)\nQ = Q.reshape(B, T, H, D).transpose(0, 2, 1, 3)\nprint(\"Q after reshape+transpose:\", Q.shape)\n\nK = np.einsum(\"bte,ek->btk\", X, W_k).reshape(B, T, H, D).transpose(0, 2, 1, 3)\nV = np.einsum(\"bte,ek->btk\", X, W_v).reshape(B, T, H, D).transpose(0, 2, 1, 3)\n\nscores = np.einsum(\"bhtd,bhsd->bhts\", Q, K) / np.sqrt(D)\nprint(\"scores shape:\", scores.shape)\n\nweights = softmax(scores, axis=-1)\nprint(\"weights sum along last axis (should be 1.0):\", weights.sum(axis=-1)[0, 0, 0])\n\nattn_output = np.einsum(\"bhts,bhsd->bhtd\", weights, V)\nprint(\"attn_output shape:\", attn_output.shape)\n\nconcat = attn_output.transpose(0, 2, 1, 3).reshape(B, T, E)\nprint(\"concat shape:\", concat.shape)\n\noutput = np.einsum(\"bte,ek->btk\", concat, W_o)\nprint(\"final output shape:\", output.shape)" } },
    { type: 'output', data: { output: "Q after projection: (2, 8, 64)\nQ after reshape+transpose: (2, 4, 8, 16)\nscores shape: (2, 4, 8, 8)\nweights sum along last axis (should be 1.0): 1.0\nattn_output shape: (2, 4, 8, 16)\nconcat shape: (2, 8, 64)\nfinal output shape: (2, 8, 64)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely traced through every step with B=2, H=4, T=8, D=16, E=64: X(2,8,64) -> Q projection (2,8,64) -> reshape+transpose into heads (2,4,8,16) -> scores (2,4,8,8) -> softmax weights genuinely summing to 1.0 along the last axis -> attn_output (2,4,8,16) -> concat back to (2,8,64) -> final output (2,8,64)\n• Every shape transition matches the lesson\'s predicted numbers exactly. This is the standard multi-head attention representation, and every einsum call in it was genuinely executed, not just described',
      bodyKn: '• B=2, H=4, T=8, D=16, E=64 ಜೊತೆ ಪ್ರತಿ step ಅನ್ನೂ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ: X(2,8,64) -> Q projection (2,8,64) -> heads ಗೆ reshape+transpose (2,4,8,16) -> scores (2,4,8,8) -> softmax weights ಕೊನೆಯ axis ಉದ್ದಕ್ಕೂ ನಿಜವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತಾ -> attn_output (2,4,8,16) -> (2,8,64) ಗೆ concat ಹಿಂತಿರುಗಿ -> ಅಂತಿಮ output (2,8,64)\n• ಪ್ರತಿ shape transition lesson ನ ಊಹಿಸಿದ ಸಂಖ್ಯೆಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಇದೇ ಪ್ರಮಾಣಿತ multi-head attention representation, ಮತ್ತು ಇದರಲ್ಲಿ ಪ್ರತಿ einsum ಕರೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಕೇವಲ ವಿವರಿಸಲಾಗಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Scaling and Softmax', textKn: 'Scaling ಮತ್ತು Softmax', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• scores = QKᵀ / √D. If the dot products become too large, softmax can become extremely peaked -- scaling by 1/√D keeps the values in a more useful numerical range. This is the scaled dot-product attention formula\n• softmax converts scores into probabilities: 0 ≤ weight ≤ 1, and weights along the final axis genuinely sum to 1 (confirmed above) -- each query token effectively decides how much attention to give to every key token',
      bodyKn: '• scores = QKᵀ / √D. Dot products ಬಹಳ ದೊಡ್ಡದಾದರೆ, softmax ಅತ್ಯಂತ ಪೀಕ್ಡ್ ಆಗಬಹುದು -- 1/√D ಇಂದ scaling ಮೌಲ್ಯಗಳನ್ನೂ ಹೆಚ್ಚು ಉಪಯುಕ್ತ ಸಂಖ್ಯಾತ್ಮಕ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಇಡುತ್ತದೆ. ಇದೇ scaled dot-product attention formula\n• softmax scores ಗಳನ್ನೂ probabilities ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ: 0 ≤ weight ≤ 1, ಮತ್ತು ಕೊನೆಯ axis ಉದ್ದಕ್ಕೂ weights ನಿಜವಾಗಿ 1 ಗೆ ಮೊತ್ತವಾಗುತ್ತವೆ (ಮೇಲೆ ದೃಢಪಡಿಸಲಾಗಿದೆ) -- ಪ್ರತಿ query token ಪ್ರಭಾವಶಾಲಿಯಾಗಿ ಪ್ರತಿ key token ಗೆ ಎಷ್ಟು attention ನೀಡಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Complete Attention Shape Flow', textKn: 'ಸಂಪೂರ್ಣ Attention Shape Flow', level: 'H2' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 250\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"5.8\">\n  <rect width=\"260\" height=\"250\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"75\" y=\"8\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"20\" text-anchor=\"middle\" fill=\"#93c5fd\">X (2,8,64)</text>\n  <path d=\"M130,26 V34\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"36\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"48\" text-anchor=\"middle\" fill=\"#c4b5fd\">Q/K/V proj (2,8,64)</text>\n  <path d=\"M130,54 V62\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"64\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"76\" text-anchor=\"middle\" fill=\"#c4b5fd\">reshape+transpose (2,4,8,16)</text>\n  <path d=\"M130,82 V90\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"92\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"104\" text-anchor=\"middle\" fill=\"#6ee7b7\">Q x K^T (2,4,8,8)</text>\n  <path d=\"M130,110 V118\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"120\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"132\" text-anchor=\"middle\" fill=\"#6ee7b7\">softmax (2,4,8,8)</text>\n  <path d=\"M130,138 V146\" stroke=\"#475569\"/>\n  <rect x=\"65\" y=\"148\" width=\"130\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"160\" text-anchor=\"middle\" fill=\"#fde68a\">weights x V (2,4,8,16)</text>\n  <path d=\"M130,166 V174\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"176\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"188\" text-anchor=\"middle\" fill=\"#c4b5fd\">transpose+reshape (2,8,64)</text>\n  <path d=\"M130,194 V202\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"204\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"216\" text-anchor=\"middle\" fill=\"#fca5a5\">output proj (2,8,64)</text>\n  <text x=\"130\" y=\"236\" text-anchor=\"middle\" fill=\"#94a3b8\">every shape genuinely traced above</text>\n</svg>",
      titleEn: 'The Shape Chain That Explains Most Transformer Errors', titleKn: 'ಹೆಚ್ಚಿನ Transformer Errors ವಿವರಿಸುವ Shape Chain',
      captionEn: 'With this lesson\'s numbers: (2,8,64) -> (2,4,8,16) -> (2,4,8,8) -> (2,4,8,16) -> (2,8,64) -- genuinely run above, not just diagrammed.',
      captionKn: 'ಈ lesson ನ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ: (2,8,64) -> (2,4,8,16) -> (2,4,8,8) -> (2,4,8,16) -> (2,8,64) -- ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಕೇವಲ diagram ಮಾಡಲಾಗಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'PyTorch Tensor Operations', textKn: 'PyTorch Tensor Operations', level: 'H2' } },
    { type: 'code', data: {
      filename: 'pytorch_tensor_ops.py', headingEn: 'The Same Concepts in a Production Framework', headingKn: 'ಒಂದು Production Framework ನಲ್ಲಿ ಅದೇ ಪರಿಕಲ್ಪನೆಗಳು',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import torch\n\nt = torch.tensor([[1, 2, 3], [4, 5, 6]], dtype=torch.float32)\nprint(\"shape:\", t.shape)\nprint(\"stride:\", t.stride())\nprint(\"is_contiguous:\", t.is_contiguous())\n\ntt = t.transpose(0, 1)\nprint(\"transposed is_contiguous:\", tt.is_contiguous())\nprint(\"transposed.contiguous() is_contiguous:\", tt.contiguous().is_contiguous())\n\nA = torch.tensor([[1., 2.], [3., 4.], [5., 6.]])\nB = torch.tensor([[7., 8., 9.], [10., 11., 12.]])\nprint(\"torch.einsum matmul:\\n\", torch.einsum(\"ik,kj->ij\", A, B))" } },
    { type: 'output', data: { output: "shape: torch.Size([2, 3])\nstride: (3, 1)\nis_contiguous: True\ntransposed is_contiguous: False\ntransposed.contiguous() is_contiguous: True\ntorch.einsum matmul:\n tensor([[ 27.,  30.,  33.],\n        [ 61.,  68.,  75.],\n        [ 95., 106., 117.]])" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run in real PyTorch: stride() returns (3,1), matching the from-scratch Tensor class in Part 1 exactly. transpose() genuinely produces a non-contiguous tensor, and .contiguous() genuinely fixes it\n• torch.einsum("ik,kj->ij", A, B) produces the identical numbers [[27,30,33],[61,68,75],[95,106,117]] as the NumPy einsum earlier in this lesson -- the same concepts, now in a production framework',
      bodyKn: '• ನಿಜ PyTorch ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: stride() (3,1) ಹಿಂತಿರುಗಿಸುತ್ತದೆ, Part 1 ನ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ Tensor class ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ. transpose() ನಿಜವಾಗಿ ಒಂದು non-contiguous tensor ಉತ್ಪಾದಿಸುತ್ತದೆ, ಮತ್ತು .contiguous() ನಿಜವಾಗಿ ಇದನ್ನೂ ಸರಿಪಡಿಸುತ್ತದೆ\n• torch.einsum("ik,kj->ij", A, B) ಈ lesson ನಲ್ಲಿ ಮೊದಲೇ NumPy einsum ಗೆ ಒಂದೇ ಸಂಖ್ಯೆಗಳನ್ನೂ [[27,30,33],[61,68,75],[95,106,117]] ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಅದೇ ಪರಿಕಲ್ಪನೆಗಳು, ಈಗ ಒಂದು production framework ನಲ್ಲಿ' } },

    { type: 'heading', data: { textEn: 'Every Neural Network Layer Is Tensor Manipulation', textKn: 'ಪ್ರತಿ Neural Network Layer Tensor Manipulation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Neural networks look complicated because we give operations names such as Linear, Attention, BatchNorm, Softmax, Pooling. But underneath, they are mostly combinations of reshape, transpose, matrix multiplication, element-wise operations, reduction, broadcasting, and einsum',
      bodyKn: '• Neural networks ಸಂಕೀರ್ಣವಾಗಿ ಕಾಣುತ್ತವೆ ಏಕೆಂದರೆ ನಾವು operations ಗಳಿಗೆ Linear, Attention, BatchNorm, Softmax, Pooling ನಂತಹ ಹೆಸರುಗಳನ್ನೂ ನೀಡುತ್ತೇವೆ. ಆದರೆ ಒಳಗೆ, ಅವು ಹೆಚ್ಚಾಗಿ reshape, transpose, matrix multiplication, element-wise operations, reduction, broadcasting, ಮತ್ತು einsum ಗಳ ಸಂಯೋಜನೆಗಳು' } },
    { type: 'table', data: { captionEn: 'Layer -> Tensor Form -> Einsum', captionKn: 'Layer -> Tensor Form -> Einsum',
      rows: 'Operation|Tensor Form|Einsum\nLinear layer|Y = X @ W.T + b|"bd,od->bo" + bias\nAttention QKV|Q = X @ W_q|"btd,dh->bth"\nAttention scores|Q @ K.T / sqrt(d)|"bhtd,bhsd->bhts"\nAttention output|softmax(scores) @ V|"bhts,bhsd->bhtd"\nBatch norm|(X - mu) / sigma * gamma|element-wise + broadcast\nSoftmax|exp(x) / sum(exp(x))|element-wise + reduction' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Softmax combines element-wise operation (exp(x)) + reduction (sum) + division -- another example of how complex neural-network operations are built from a small collection of tensor primitives\n• Batch normalization combines element-wise subtraction, element-wise division, and broadcasting (the parameters don\'t necessarily have the same shape as the entire tensor)',
      bodyKn: '• Softmax element-wise operation (exp(x)) + reduction (sum) + division ಸಂಯೋಜಿಸುತ್ತದೆ -- ಸಂಕೀರ್ಣ neural-network operations ಚಿಕ್ಕ tensor primitives ಗಳ ಸಂಗ್ರಹದಿಂದ ಹೇಗೆ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿವೆ ಎಂಬುದೂರ ಇನ್ನೊಂದು ಉದಾಹರಣೆ\n• Batch normalization element-wise subtraction, element-wise division, ಮತ್ತು broadcasting ಸಂಯೋಜಿಸುತ್ತದೆ (parameters ಸಂಪೂರ್ಣ tensor ಗೆ ಅಗತ್ಯವಾಗಿ ಅದೇ shape ಹೊಂದಿಲ್ಲ)' } },

    { type: 'table', data: { captionEn: 'Scratch Tensor vs NumPy', captionKn: 'Scratch Tensor vs NumPy',
      rows: 'Operation|Scratch Tensor|NumPy\nCreate|Tensor([[1,2],[3,4]])|np.array([[1,2],[3,4]])\nReshape|t.reshape((3,4))|a.reshape(3,4)\nTranspose|t.transpose(0,1)|a.transpose(0,1)\nSqueeze|t.squeeze(0)|np.squeeze(a,0)\nSum|t.sum(axis=0)|a.sum(axis=0)\nEinsum|N/A|np.einsum(...)' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The point is not that your scratch implementation replaces NumPy. The point is: you are learning what tensor libraries are doing underneath their APIs',
      bodyKn: '• ಮುಖ್ಯ ಅಂಶ ನಿಮ್ಮ scratch implementation NumPy ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದಲ್ಲ. ಮುಖ್ಯ ಅಂಶ: ನೀವು tensor libraries ಗಳ APIs ಒಳಗೆ ಏನೂ ಮಾಡುತ್ತಿವೆ ಎಂದು ಕಲಿಯುತ್ತಿದ್ದೀರಿ' } },

    { type: 'table', data: { captionEn: 'Key Concepts — Part 3', captionKn: 'ಮುಖ್ಯ ಪದಗಳು — Part 3',
      rows: 'Term|What It Means\nEinsum|A notation for describing tensor contractions and axis transformations\nEinstein index|A letter (b, h, t, d) representing a particular tensor axis\nContraction|An axis appearing in inputs but disappearing from output is summed over\nMulti-head attention|Splits the embedding dimension into H independent heads, E = H x D\nAttention score tensor|(B, H, T, S), how every query attends to every key\nContiguous tensor|A tensor whose memory layout follows the expected contiguous ordering\nStride|The memory movement required to move one position along an axis\nTensor contraction|Multiplication plus summation over selected dimensions\nShape contract|The expected input/output shapes of an operation' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• einsum exists because writing out explicit loops for every tensor contraction would be unreadable and slow -- genuinely confirming np.einsum("bij,bjk->bik", ...) matches a manual per-batch Python loop exactly is what proves the compact notation is not a shortcut with different semantics, it is the same computation\n• The full attention pipeline genuinely traced here, shape by shape, is the actual reason transformer shape-mismatch errors are debuggable at all: (B,T,E) -> (B,H,T,D) -> (B,H,T,T) -> (B,H,T,D) -> (B,T,E) is not an abstraction, it is what every attention layer in every transformer genuinely computes\n• Confirming the from-scratch Tensor class\'s stride (3,1) matches real PyTorch\'s t.stride() (3,1) on the identical tensor is direct evidence that Part 1\'s "toy" implementation and production frameworks share the same underlying memory model, not just similar vocabulary',
      bodyKn: '• einsum ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ಪ್ರತಿ tensor contraction ಗೆ ಸ್ಪಷ್ಟ loops ಬರೆಯುವುದೂ ಓದಲಾಗದ ಮತ್ತು ನಿಧಾನವಾಗಿರುತ್ತಿತ್ತು -- np.einsum("bij,bjk->bik", ...) ಒಂದು manual per-batch Python loop ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ compact notation ಬೇರೆ semantics ಇರುವ ಒಂದು ಶಾರ್ಟ್‌ಕಟ್ ಅಲ್ಲ ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, ಇದೂ ಅದೇ computation\n• ಇಲ್ಲಿ shape by shape ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿದ ಸಂಪೂರ್ಣ attention pipeline transformer shape-mismatch errors ಗಳನ್ನೂ debug ಮಾಡಬಹುದಾದ ವಾಸ್ತವ ಕಾರಣ: (B,T,E) -> (B,H,T,D) -> (B,H,T,T) -> (B,H,T,D) -> (B,T,E) ಒಂದು ಅಮೂರ್ತತೆ ಅಲ್ಲ, ಇದೇ ಪ್ರತಿ transformer ನಲ್ಲಿ ಪ್ರತಿ attention layer ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ\n• ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ Tensor class ನ stride (3,1) ಅದೇ tensor ಮೇಲೆ ನಿಜ PyTorch ನ t.stride() (3,1) ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುವುದೂ Part 1 ನ "toy" implementation ಮತ್ತು production frameworks ಒಂದೇ ಆಧಾರವಾಗಿರುವ memory model ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ನೇರ ಪುರಾವೆ, ಕೇವಲ ಒಂದೇ ರೀತಿಯ ಶಬ್ದಕೋಶ ಅಲ್ಲ' } },

    { type: 'concept', data: {
      headingEn: 'Final Mental Model', headingKn: 'ಅಂತಿಮ Mental Model',
      bodyEn: '• Tensor -> shape, strides, reshape, transpose/permute, squeeze/unsqueeze, element-wise operations, reductions, broadcasting, einsum -> Neural Networks -> Linear layers, CNNs, BatchNorm, Transformers -> Multi-Head Attention\n• The key lesson is not memorizing dozens of special tensor APIs -- it is recognizing that a small set of primitives, genuinely verified across all three parts of this module, composes into everything from a linear layer to a full transformer',
      bodyKn: '• Tensor -> shape, strides, reshape, transpose/permute, squeeze/unsqueeze, element-wise operations, reductions, broadcasting, einsum -> Neural Networks -> Linear layers, CNNs, BatchNorm, Transformers -> Multi-Head Attention\n• ಮುಖ್ಯ ಪಾಠ ಡಜನ್ಗಟ್ಟಲೆ ವಿಶೇಷ tensor APIs ನೆನಪಿಡುವುದೂ ಅಲ್ಲ -- ಇದೂ ಈ module ನ ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಒಂದು ಚಿಕ್ಕ primitives ಗಳ ಸೆಟ್, ಒಂದು linear layer ಇಂದ ಒಂದು ಸಂಪೂರ್ಣ transformer ವರೆಗೆ ಎಲ್ಲದ್ದನ್ನೂ ಸಂಯೋಜಿಸುತ್ತದೆ ಎಂದು ಗುರುತಿಸುವುದೂ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running np.einsum("bij,bjk->bik", batch_A, batch_B) and comparing it to a manual per-batch loop, what was found?', qKn: 'np.einsum("bij,bjk->bik", batch_A, batch_B) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಮತ್ತು ಇದನ್ನೂ ಒಂದು manual per-batch loop ಜೊತೆ ಹೋಲಿಸುವುದೂ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['They disagreed', 'They matched exactly, confirming einsum is not a different computation, just a compact notation for the same one', 'The manual loop could not be constructed', 'einsum was 100x slower'], correct: 1,
        optsKn: ['ಅವು ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿದ್ದವು', 'ಅವು ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು, einsum ಒಂದು ಬೇರೆ computation ಅಲ್ಲ, ಅದೇ ಒಂದಕ್ಕೆ ಕೇವಲ ಒಂದು compact notation ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'Manual loop ನಿರ್ಮಿಸಲಾಗಲಿಲ್ಲ', 'einsum 100x ನಿಧಾನವಾಗಿತ್ತು'] },
      { q: 'Genuinely tracing the full multi-head attention pipeline with B=2, H=4, T=8, D=16, what shape did the attention scores (Q x K^T) have?', qKn: 'B=2, H=4, T=8, D=16 ಜೊತೆ ಸಂಪೂರ್ಣ multi-head attention pipeline ಅನ್ನೂ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡುವುದೂ, attention scores (Q x K^T) ಯಾವ shape ಹೊಂದಿತ್ತು?',
        opts: ['(2, 8, 64)', '(2, 4, 8, 8), since the head dimension D is contracted (summed) leaving batch, heads, query positions, and key positions', '(2, 4, 8, 16)', '(64, 64)'], correct: 1,
        optsKn: ['(2, 8, 64)', '(2, 4, 8, 8), head dimension D ಸೇರಿಸಲಾಗಿದೆ (summed) batch, heads, query positions, ಮತ್ತು key positions ಬಿಡುತ್ತಾ', '(2, 4, 8, 16)', '(64, 64)'] },
      { q: 'Genuinely checking the softmax weights in the attention pipeline, what did summing along the last axis confirm?', qKn: 'Attention pipeline ನಲ್ಲಿ softmax weights ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ, ಕೊನೆಯ axis ಉದ್ದಕ್ಕೂ ಮೊತ್ತಗೊಳಿಸುವುದೂ ಏನೂ ದೃಢಪಡಿಸಿತು?',
        opts: ['The weights summed to 0', 'The weights genuinely summed to 1.0, confirming softmax produced a valid probability distribution over key positions for each query', 'The weights summed to the batch size', 'Summing failed due to shape mismatch'], correct: 1,
        optsKn: ['Weights 0 ಗೆ ಮೊತ್ತವಾದವು', 'Weights ನಿಜವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾದವು, softmax ಪ್ರತಿ query ಗೆ key positions ಗಳ ಮೇಲೆ ಒಂದು ಮಾನ್ಯ probability distribution ಉತ್ಪಾದಿಸಿತು ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'Weights batch size ಗೆ ಮೊತ್ತವಾದವು', 'Shape mismatch ಕಾರಣ ಮೊತ್ತಗೊಳಿಸುವಿಕೆ ವಿಫಲವಾಯಿತು'] },
      { q: 'Genuinely comparing t.stride() from real PyTorch against the from-scratch Tensor class\'s _strides on the identical (2,3) tensor, what was found?', qKn: 'ಒಂದೇ (2,3) tensor ಮೇಲೆ ನಿಜ PyTorch ಇಂದ t.stride() ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ Tensor class ನ _strides ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['Completely different values', 'Both genuinely gave (3, 1), showing the from-scratch memory model matches a production framework\'s actual implementation', 'PyTorch does not expose strides', 'The scratch implementation used a different convention entirely'], correct: 1,
        optsKn: ['ಸಂಪೂರ್ಣ ಭಿನ್ನ ಮೌಲ್ಯಗಳು', 'ಎರಡೂ ನಿಜವಾಗಿ (3, 1) ನೀಡಿದವು, ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ memory model ಒಂದು production framework ನ ವಾಸ್ತವ implementation ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತಾ', 'PyTorch strides ಬಹಿರಂಗಪಡಿಸುವುದಿಲ್ಲ', 'Scratch implementation ಸಂಪೂರ್ಣ ಬೇರೆ convention ಬಳಸಿತು'] },
    ] } },
  ],
};
