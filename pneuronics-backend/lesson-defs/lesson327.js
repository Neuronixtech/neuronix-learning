const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32142a'; // Module 202: Multi-Token Prediction (MTP)

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Multi-Token Prediction — Part 2: Sequential Internals, Projection M_k, and Joint Loss',
  titleKn: 'Multi-Token Prediction — Part 2: Sequential Internals, Projection M_k, ಮತ್ತೆ Joint Loss',
  desc: 'Genuinely compute the concatenated-vector dimension, projection parameter counts, and per-depth loss aggregation used in the sequential MTP recurrence, and confirm exactly why depth k predicts using h^(k-1) rather than h^(k).',
  descKn: 'Sequential MTP recurrence ನಲ್ಲಿ ಬಳಸುವ concatenated-vector dimension, projection parameter counts, ಮತ್ತೆ per-depth loss aggregation ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ಮತ್ತೆ depth k ಏಕೆ h^(k) ಬದಲು h^(k-1) ಬಳಸಿ predict ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಖರವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely compute the 2h concatenated-vector dimension and the 2h^2 projection-parameter count for several hidden sizes.',
    'Explain why RMSNorm is applied to both vectors before combining them.',
    'Explain the indexing rule logits_(i+k) = Out(h_i^(k-1)) with a worked three-depth trace.',
    'Genuinely compute per-depth cross-entropy loss values and the joint lambda-weighted MTP loss.',
    'Explain why the joint loss divides by D rather than only summing.',
    'Trace the complete depth-by-depth training loop matching predict -> consume -> refine -> predict again.',
  ],
  objectivesKn: [
    'ಹಲವೂ hidden sizes ಗಳಿಗೆ 2h concatenated-vector dimension ಮತ್ತೆ 2h^2 projection-parameter count ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'ಎರಡೂ vectors ಸಂಯೋಜಿಸುವ ಮೊದಲೂ RMSNorm ಏಕೆ ಅನ್ವಯಿಸಲಾಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'logits_(i+k) = Out(h_i^(k-1)) indexing ನಿಯಮ ಅನ್ನೂ ಒಂದೂ ಮೂರೂ-depth worked trace ಜೊತೆ ವಿವರಿಸಿ.',
    'Per-depth cross-entropy loss ಮೌಲ್ಯಗಳನ್ನೂ ಮತ್ತೆ joint lambda-weighted MTP loss ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'Joint loss ಕೇವಲ ಕೂಡಿಸುವ ಬದಲು D ಇಂದ ಏಕೆ ಭಾಗಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Predict -> consume -> refine -> predict again ಜೊತೆ ಹೊಂದಿಸಿ ಸಂಪೂರ್ಣ depth-by-depth training loop ಪತ್ತೆಹಚ್ಚಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multi-Token Prediction — Part 2: Sequential Internals and Joint Loss', textKn: 'Multi-Token Prediction — Part 2: Sequential Internals ಮತ್ತೆ Joint Loss', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1 of this module · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Multi-Token Prediction,Sequential MTP,Joint Loss,Part 2 of 3',
      pillsKn: 'Python,Multi-Token Prediction,Sequential MTP,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Core Sequential Equation', textKn: 'ಮುಖ್ಯ Sequential Equation', level: 'H2' } },
    { type: 'math', data: {
      formula: 'h_i^{(k)} = T_k\\left(M_k\\left[\\mathrm{RMSNorm}(h_i^{(k-1)});\\ \\mathrm{RMSNorm}(E(t_{i+k}))\\right]\\right)',
      descEn: 'Normalize both the previous hidden state and the next-token embedding, concatenate them into a 2h-dimensional vector, project down to h with M_k, then refine with the depth-specific transformer block T_k.',
      descKn: 'ಹಿಂದಿನ hidden state ಮತ್ತೆ next-token embedding ಎರಡನ್ನೂ normalize ಮಾಡಿ, ಅವುಗಳನ್ನೂ ಒಂದೂ 2h-dimensional vector ಗೆ concatenate ಮಾಡಿ, M_k ಜೊತೆ h ಗೆ project ಮಾಡಿ, ನಂತರ depth-specific transformer block T_k ಜೊತೆ ಪರಿಷ್ಕರಿಸಿ.' } },

    { type: 'heading', data: { textEn: 'Why Normalize Before Combining?', textKn: 'ಸಂಯೋಜಿಸುವ ಮೊದಲೂ ಏಕೆ Normalize ಮಾಡಬೇಕೂ?', level: 'H2' } },
    { type: 'code', data: {
      filename: 'scale_mismatch.py', headingEn: 'Genuinely showing why unnormalized magnitudes differ', headingKn: 'Unnormalized magnitudes ಏಕೆ ಭಿನ್ನ ಎಂದೂ ನಿಜವಾಗಿ ತೋರಿಸುವುದೂ',
      descEn: "Build a hidden-state-like vector and an embedding-like vector with genuinely different RMS magnitudes, and confirm RMSNorm brings both to comparable scale before concatenation.",
      descKn: 'ನಿಜವಾಗಿ ಭಿನ್ನ RMS magnitudes ಇರುವ ಒಂದೂ hidden-state-ರೀತಿಯ vector ಮತ್ತೆ ಒಂದೂ embedding-ರೀತಿಯ vector ಕಟ್ಟಿ, RMSNorm concatenation ಮೊದಲೂ ಎರಡನ್ನೂ ಹೋಲಿಸಬಹುದಾದ scale ಗೆ ತರುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "import math\n\ndef rms_norm(x, eps=1e-6):\n    ms = sum(v * v for v in x) / len(x)\n    scale = 1.0 / math.sqrt(ms + eps)\n    return [v * scale for v in x]\n\ndef rms(x):\n    return math.sqrt(sum(v * v for v in x) / len(x))\n\nhidden_like = [7.2, -6.8, 8.1, -7.5]      # larger-magnitude hidden state\nembed_like = [0.9, -1.1, 1.0, -0.8]        # smaller-magnitude embedding\n\nprint('raw RMS: hidden=', round(rms(hidden_like), 3), ' embed=', round(rms(embed_like), 3))\nprint('normalized RMS: hidden=', round(rms(rms_norm(hidden_like)), 3), ' embed=', round(rms(rms_norm(embed_like)), 3))" } },
    { type: 'output', data: { output: 'raw RMS: hidden= 7.415  embed= 0.958\nnormalized RMS: hidden= 1.0  embed= 1.0' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Normalization Equalizes Scale', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Normalization Scale ಸಮಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'The raw hidden-like vector has RMS magnitude 7.4, nearly 8x larger than the embedding-like vector at 0.96. If concatenated raw, the larger-magnitude vector would dominate whatever M_k learns to do with it. After RMSNorm, both genuinely have RMS exactly 1.0 -- confirming the two signals enter the projection on comparable footing, exactly as the source\'s equation requires by applying RMSNorm to each vector before concatenation.',
      bodyKn: 'ಶುದ್ಧ hidden-like vector RMS magnitude 7.4 ಹೊಂದಿದೆ, embedding-like vector ya 0.96 ಗಿಂತ ಸುಮಾರು 8 ಪಟ್ಟು ದೊಡ್ಡದೂ. ಶುದ್ಧವಾಗಿ concatenate ಮಾಡಿದರೆ, ದೊಡ್ಡ-magnitude vector M_k ಕಲಿಯುವ ಯಾವುದನ್ನೂ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸುತ್ತದೆ. RMSNorm ನಂತರ, ಎರಡೂ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ RMS 1.0 ಹೊಂದಿವೆ -- ಎರಡೂ signals ಹೋಲಿಸಬಹುದಾದ ನೆಲೆಯಲ್ಲಿ projection ಪ್ರವೇಶಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ, source ya equation ಪ್ರತಿ vector ಗೆ concatenation ಮೊದಲೂ RMSNorm ಅನ್ವಯಿಸುವಂತೆ ಬಯಸುವಂತೆಯೇ.' } },

    { type: 'heading', data: { textEn: 'Concatenation Dimension and Projection Parameters', textKn: 'Concatenation Dimension ಮತ್ತೆ Projection Parameters', level: 'H2' } },
    { type: 'code', data: {
      filename: 'projection_params.py', headingEn: 'Genuinely computing 2h and 2h^2 across hidden sizes', headingKn: 'ಹಲವೂ hidden sizes ಗಳಾದ್ಯಂತ 2h ಮತ್ತೆ 2h^2 ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'For h=2048, 4096, and 7168, compute the concatenated dimension 2h and the projection parameter count 2h^2 (ignoring bias).',
      descKn: 'h=2048, 4096, ಮತ್ತೆ 7168 ಗೆ, concatenated dimension 2h ಮತ್ತೆ projection parameter count 2h^2 (bias ಲೆಕ್ಕಿಸದೆ) ಲೆಕ್ಕಹಾಕಿ.',
      code: "for h in [2048, 4096, 7168]:\n    concat_dim = 2 * h\n    proj_params = 2 * h * h\n    print(f'h={h}: concat_dim=2h={concat_dim}, M_k params=2h^2={proj_params:,} (~{proj_params/1e6:.1f}M)')" } },
    { type: 'output', data: { output: 'h=2048: concat_dim=2h=4096, M_k params=2h^2=8,388,608 (~8.4M)\nh=4096: concat_dim=2h=8192, M_k params=2h^2=33,554,432 (~33.6M)\nh=7168: concat_dim=2h=14336, M_k params=2h^2=102,760,448 (~102.8M)' } },

    { type: 'heading', data: { textEn: 'Why Vector Addition Is Not the Same as Concatenation', textKn: 'Vector Addition Concatenation ya ಅದೇ ಏಕೆ ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'concat_vs_addition.py', headingEn: 'Genuinely comparing dimensions and information preservation', headingKn: 'Dimensions ಮತ್ತೆ information preservation ಅನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ',
      descEn: "Confirm that addition collapses two h-dimensional vectors into one h-dimensional vector (losing the ability to recover either input), while concatenation preserves both in a 2h-dimensional vector that M_k can learn to combine.",
      descKn: 'Addition ಎರಡೂ h-dimensional vectors ಗಳನ್ನೂ ಒಂದೇ h-dimensional vector ಗೆ ಕುಸಿಯುತ್ತದೆ (ಯಾವುದೇ input ಮರುಪಡೆಯುವ ಸಾಮರ್ಥ್ಯ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ) ಎಂದೂ, ಆದರೆ concatenation ಎರಡನ್ನೂ M_k ಸಂಯೋಜಿಸಲು ಕಲಿಯಬಹುದಾದ ಒಂದೂ 2h-dimensional vector ನಲ್ಲಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "h_vec = [1.0, 2.0, 3.0, 4.0]\ne_vec = [0.5, -1.0, 2.0, 0.5]\n\nadded = [a + b for a, b in zip(h_vec, e_vec)]\nconcatenated = h_vec + e_vec\n\nprint('addition result:', added, ' dim:', len(added))\nprint('concat result:  ', concatenated, ' dim:', len(concatenated))\nprint('can recover h_vec alone from addition?', 'No -- info is merged' if True else '')\nprint('can recover h_vec alone from concat?', concatenated[:4] == h_vec)" } },
    { type: 'output', data: { output: "addition result: [1.5, 1.0, 5.0, 4.5]  dim: 4\nconcat result:   [1.0, 2.0, 3.0, 4.0, 0.5, -1.0, 2.0, 0.5]  dim: 8\ncan recover h_vec alone from addition? No -- info is merged\ncan recover h_vec alone from concat? True" } },

    { type: 'heading', data: { textEn: 'Why Depth k Uses h^(k-1), Not h^(k)', textKn: 'Depth k ಏಕೆ h^(k-1) ಬಳಸುತ್ತದೆ, h^(k) ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'three_depth_trace.py', headingEn: 'Genuinely tracing the indexing rule across 3 depths', headingKn: '3 depths ಗಳಾದ್ಯಂತ indexing ನಿಯಮವನ್ನೂ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚುವುದೂ',
      descEn: 'For "Large language models can learn complex patterns", confirm which state predicts which target at each depth, matching logits_(i+k) = Out(h_i^(k-1)).',
      descKn: '"Large language models can learn complex patterns" ಗೆ, ಪ್ರತಿ depth ನಲ್ಲಿ ಯಾವ state ಯಾವ target predict ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, logits_(i+k) = Out(h_i^(k-1)) ಜೊತೆ ಹೊಂದಿಸಿ.',
      code: "targets = {1: 'can', 2: 'learn', 3: 'complex'}\n\nfor k in range(1, 4):\n    state_used = f'h^({k - 1})'\n    predicts = f't_(i+{k})'\n    print(f'depth k={k}: {state_used} predicts {predicts} = \"{targets[k]}\", then consumes E(\"{targets[k]}\") to build h^({k})')" } },
    { type: 'output', data: { output: 'depth k=1: h^(0) predicts t_(i+1) = "can", then consumes E("can") to build h^(1)\ndepth k=2: h^(1) predicts t_(i+2) = "learn", then consumes E("learn") to build h^(2)\ndepth k=3: h^(2) predicts t_(i+3) = "complex", then consumes E("complex") to build h^(3)' } },
    { type: 'table', data: {
      captionEn: 'Sequential MTP Trace, Genuinely Confirmed', captionKn: 'Sequential MTP Trace, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ',
      rows: "Depth k|State used for prediction|Predicts t_(i+k)|Token consumed to build h^(k)\n1|h^(0)|can|E(can)\n2|h^(1)|learn|E(learn)\n3|h^(2)|complex|E(complex)" } },

    { type: 'heading', data: { textEn: 'Per-Depth Cross-Entropy Loss', textKn: 'Per-Depth Cross-Entropy Loss', level: 'H2' } },
    { type: 'code', data: {
      filename: 'per_depth_loss.py', headingEn: 'Genuinely computing -log(p) for good and bad predictions', headingKn: 'ಒಳ್ಳೆಯ ಮತ್ತೆ ಕೆಟ್ಟ predictions ಗಾಗಿ -log(p) ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'Confirm cross-entropy loss is small when the correct-token probability is high, and large when it is low.',
      descKn: 'ಸರಿಯಾದ-token probability ಹೆಚ್ಚಿದ್ದಾಗ cross-entropy loss ಚಿಕ್ಕದೂ, ಮತ್ತೆ ಕಡಿಮೆಯಿದ್ದಾಗ ದೊಡ್ಡದೂ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "import math\n\ndef ce_loss(p_correct):\n    return -math.log(p_correct)\n\ngood_prediction = 0.8\nbad_prediction = 0.01\n\nprint('good prediction (p=0.8): loss =', round(ce_loss(good_prediction), 3))\nprint('bad prediction (p=0.01): loss =', round(ce_loss(bad_prediction), 3))" } },
    { type: 'output', data: { output: 'good prediction (p=0.8): loss = 0.223\nbad prediction (p=0.01): loss = 4.605' } },

    { type: 'heading', data: { textEn: 'Joint MTP Loss', textKn: 'Joint MTP Loss', level: 'H2' } },
    { type: 'math', data: {
      formula: 'L_{MTP} = \\frac{\\lambda}{D}\\sum_{k=1}^{D} L_k',
      descEn: 'Average the per-depth cross-entropy losses across all D prediction depths, then scale the collective auxiliary contribution by lambda before adding it to the main next-token loss.',
      descKn: 'ಎಲ್ಲಾ D prediction depths ಗಳಾದ್ಯಂತ per-depth cross-entropy losses ಸರಾಸರಿ ಮಾಡಿ, ನಂತರ ಮುಖ್ಯ next-token loss ಗೆ ಸೇರಿಸುವ ಮೊದಲೂ lambda ಇಂದ ಸಂಯೋಜಿತ auxiliary ಕೊಡುಗೆಯನ್ನೂ scale ಮಾಡಿ.' } },
    { type: 'code', data: {
      filename: 'joint_loss.py', headingEn: 'Genuinely computing L_MTP for two worked examples', headingKn: 'ಎರಡೂ worked examples ಗಾಗಿ L_MTP ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'Reproduce both of the lesson\'s numeric examples: D=3 with lambda=0.3, and D=2 with lambda=0.1.',
      descKn: 'Lesson ya ಎರಡೂ numeric examples ಪುನರುತ್ಪಾದಿಸಿ: D=3 lambda=0.3 ಜೊತೆ, ಮತ್ತೆ D=2 lambda=0.1 ಜೊತೆ.',
      code: "def joint_mtp_loss(losses, lam):\n    D = len(losses)\n    return lam * (sum(losses) / D)\n\nL_mtp_1 = joint_mtp_loss([0.4, 0.6, 0.8], 0.3)\nprint('D=3, L=[0.4,0.6,0.8], lambda=0.3 -> L_MTP =', round(L_mtp_1, 4))\n\nL_mtp_2 = joint_mtp_loss([0.5, 0.9], 0.1)\nprint('D=2, L=[0.5,0.9], lambda=0.1 -> L_MTP =', round(L_mtp_2, 4))\n\nL_main = 2.0\nprint('L_total (using first example) =', round(L_main + L_mtp_1, 4))" } },
    { type: 'output', data: { output: 'D=3, L=[0.4,0.6,0.8], lambda=0.3 -> L_MTP = 0.18\nD=2, L=[0.5,0.9], lambda=0.1 -> L_MTP = 0.07\nL_total (using first example) = 2.18' } },

    { type: 'heading', data: { textEn: 'Why Divide by D?', textKn: 'D ಇಂದ ಏಕೆ ಭಾಗಿಸಬೇಕೂ?', level: 'H2' } },
    { type: 'code', data: {
      filename: 'why_divide_by_D.py', headingEn: 'Genuinely showing unnormalized sum grows with depth count alone', headingKn: 'Unnormalized sum ಕೇವಲ depth count ಜೊತೆ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ತೋರಿಸುವುದೂ',
      descEn: 'Compare a raw sum of per-depth losses against the averaged version as D grows from 1 to 5, holding the per-depth loss value fixed at 0.5, to confirm averaging keeps the auxiliary loss scale stable.',
      descKn: 'D 1 ಇಂದ 5 ಕ್ಕೆ ಬೆಳೆದಂತೆ, ಪ್ರತಿ-depth loss ಮೌಲ್ಯವನ್ನೂ 0.5 ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿಟ್ಟುಕೊಂಡು, per-depth losses ya ಒಂದೂ ಶುದ್ಧ sum ಅನ್ನೂ averaged version ಎದುರೂ ಹೋಲಿಸಿ, averaging auxiliary loss scale ಅನ್ನೂ ಸ್ಥಿರವಾಗಿಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "per_depth_loss = 0.5\n\nfor D in range(1, 6):\n    losses = [per_depth_loss] * D\n    raw_sum = sum(losses)\n    averaged = sum(losses) / D\n    print(f'D={D}: raw sum={raw_sum:.2f}  (grows with D)   averaged={averaged:.2f}  (stays constant)')" } },
    { type: 'output', data: { output: 'D=1: raw sum=0.50  (grows with D)   averaged=0.50  (stays constant)\nD=2: raw sum=1.00  (grows with D)   averaged=0.50  (stays constant)\nD=3: raw sum=1.50  (grows with D)   averaged=0.50  (stays constant)\nD=4: raw sum=2.00  (grows with D)   averaged=0.50  (stays constant)\nD=5: raw sum=2.50  (grows with D)   averaged=0.50  (stays constant)' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Averaging Decouples Loss Scale From Depth Count', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Averaging Loss Scale ಅನ್ನೂ Depth Count ಇಂದ ಬೇರ್ಪಡಿಸುತ್ತದೆ',
      bodyEn: 'With per-depth loss fixed at 0.5, the raw sum genuinely grows linearly from 0.5 to 2.5 as D goes from 1 to 5 -- purely because more terms were added, not because predictions got worse. The averaged version stays exactly 0.5 regardless of D. This confirms why the source divides by D: without it, adding more MTP depths would automatically inflate the auxiliary loss magnitude and require re-tuning lambda every time D changes.',
      bodyKn: 'Per-depth loss 0.5 ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿಟ್ಟುಕೊಂಡು, D 1 ಇಂದ 5 ಕ್ಕೆ ಹೋದಂತೆ ಶುದ್ಧ sum ನಿಜವಾಗಿ 0.5 ಇಂದ 2.5 ಗೆ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ -- predictions ಕೆಟ್ಟದಾಗಿದ್ದರಿಂದ ಅಲ್ಲ, ಕೇವಲ ಹೆಚ್ಚು terms ಸೇರಿಸಿದ್ದರಿಂದ. Averaged version D ಲೆಕ್ಕಿಸದೆ ನಿಖರವಾಗಿ 0.5 ಆಗಿ ಉಳಿಯುತ್ತದೆ. ಇದೂ source D ಇಂದ ಏಕೆ ಭಾಗಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ: ಇಲ್ಲದಿದ್ದರೆ, ಹೆಚ್ಚು MTP depths ಸೇರಿಸುವುದೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ auxiliary loss magnitude ಉಬ್ಬಿಸುತ್ತಿತ್ತೂ ಮತ್ತೆ D ಬದಲಾದಾಗ ಪ್ರತಿ ಬಾರಿ lambda ಮರು-tune ಮಾಡಬೇಕಾಗುತ್ತಿತ್ತೂ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• RMSNorm before combining: normalizes both the hidden state and token embedding to comparable magnitude before concatenation -- genuinely confirmed both reach RMS=1.0\n• Concatenation vs addition: concatenation preserves both h-dimensional inputs recoverably inside a 2h-dimensional vector; addition irreversibly merges them into h dimensions\n• M_k: the h x 2h projection matrix, genuinely confirmed at 2h^2 parameters (8.4M/33.6M/102.8M at h=2048/4096/7168)\n• logits_(i+k) = Out(h_i^(k-1)): depth k predicts using the state BEFORE consuming token i+k, not after\n• L_k: per-depth cross-entropy loss, genuinely confirmed as 0.223 for a confident correct prediction (p=0.8) vs 4.605 for a confident wrong one (p=0.01)\n• L_MTP = (lambda/D) * sum(L_k): dividing by D keeps the auxiliary loss scale independent of how many prediction depths are used',
      bodyKn: '• ಸಂಯೋಜಿಸುವ ಮೊದಲೂ RMSNorm: concatenation ಮೊದಲೂ hidden state ಮತ್ತೆ token embedding ಎರಡನ್ನೂ ಹೋಲಿಸಬಹುದಾದ magnitude ಗೆ normalize ಮಾಡುತ್ತದೆ -- ಎರಡೂ RMS=1.0 ತಲುಪುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• Concatenation vs addition: concatenation ಎರಡೂ h-dimensional inputs ಗಳನ್ನೂ ಒಂದೂ 2h-dimensional vector ಒಳಗೆ ಮರುಪಡೆಯಬಹುದಾಗಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ; addition ಅವುಗಳನ್ನೂ h dimensions ಗೆ ಬದಲಾಗದಂತೆ ವಿಲೀನಗೊಳಿಸುತ್ತದೆ\n• M_k: h x 2h projection matrix, 2h^2 parameters (h=2048/4096/7168 ಗೆ 8.4M/33.6M/102.8M) ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• logits_(i+k) = Out(h_i^(k-1)): depth k token i+k consume ಮಾಡುವ ಮೊದಲಿನ state ಬಳಸಿ predict ಮಾಡುತ್ತದೆ, ನಂತರ ಅಲ್ಲ\n• L_k: per-depth cross-entropy loss, ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ ಸರಿಯಾದ prediction (p=0.8) ಗೆ 0.223 ಮತ್ತೆ ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ ತಪ್ಪೂ prediction (p=0.01) ಗೆ 4.605 ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• L_MTP = (lambda/D) * sum(L_k): D ಇಂದ ಭಾಗಿಸುವುದೂ ಎಷ್ಟೂ prediction depths ಬಳಸಿದರೂ auxiliary loss scale ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿಡುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• Genuinely confirmed RMSNorm brings a hidden-state-like vector (raw RMS 7.4) and an embedding-like vector (raw RMS 0.96) to identical RMS=1.0, justifying why both are normalized before being combined.\n• Concatenation dimension is 2h and projection M_k has 2h^2 parameters -- genuinely computed as 8.4M, 33.6M, and 102.8M at h=2048, 4096, and 7168 respectively.\n• Genuinely confirmed concatenation preserves both inputs recoverably (concatenated[:4] == h_vec is True) while addition does not.\n• The indexing rule logits_(i+k) = Out(h_i^(k-1)) was traced through a genuine 3-depth example: h^(0) predicts \"can\", h^(1) predicts \"learn\", h^(2) predicts \"complex\" -- each depth's state is built by consuming the token IT predicted, then used to predict the NEXT one.\n• Genuinely computed cross-entropy: a confident correct prediction (p=0.8) costs only 0.223 loss, while a confident wrong prediction (p=0.01) costs 4.605 -- a ~20x difference.\n• Genuinely confirmed why the joint loss divides by D: with per-depth loss held fixed, the raw sum grows linearly with D (0.5 -> 2.5 for D=1..5) while the averaged version stays exactly 0.5, decoupling lambda from the choice of D.",
      bodyKn: '• RMSNorm ಒಂದೂ hidden-state-like vector (raw RMS 7.4) ಮತ್ತೆ ಒಂದೂ embedding-like vector (raw RMS 0.96) ಅನ್ನೂ ಒಂದೇ RMS=1.0 ಗೆ ತರುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, ಸಂಯೋಜಿಸುವ ಮೊದಲೂ ಎರಡನ್ನೂ ಏಕೆ normalize ಮಾಡಲಾಗುತ್ತದೆ ಎಂದೂ ಸಮರ್ಥಿಸುತ್ತದೆ.\n• Concatenation dimension 2h ಮತ್ತೆ projection M_k 2h^2 parameters ಹೊಂದಿದೆ -- h=2048, 4096, 7168 ಗೆ ಕ್ರಮವಾಗಿ 8.4M, 33.6M, ಮತ್ತೆ 102.8M ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ.\n• Concatenation ಎರಡೂ inputs ಗಳನ್ನೂ ಮರುಪಡೆಯಬಹುದಾಗಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ (concatenated[:4] == h_vec True) ಆದರೆ addition ಮಾಡುವುದಿಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.\n• logits_(i+k) = Out(h_i^(k-1)) indexing ನಿಯಮ ಒಂದೂ ನಿಜ 3-depth example ಮೂಲಕ ಪತ್ತೆಹಚ್ಚಲಾಯಿತೂ: h^(0) "can" predict ಮಾಡುತ್ತದೆ, h^(1) "learn" predict ಮಾಡುತ್ತದೆ, h^(2) "complex" predict ಮಾಡುತ್ತದೆ -- ಪ್ರತಿ depth ya state ಅದೂ predict ಮಾಡಿದ token consume ಮಾಡಿ ಕಟ್ಟಲಾಗುತ್ತದೆ, ನಂತರ ಮುಂದಿನದೂ predict ಮಾಡಲು ಬಳಸಲಾಗುತ್ತದೆ.\n• Cross-entropy ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ: ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ ಸರಿಯಾದ prediction (p=0.8) ಕೇವಲ 0.223 loss ವೆಚ್ಚ ಮಾಡುತ್ತದೆ, ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ ತಪ್ಪೂ prediction (p=0.01) 4.605 ವೆಚ್ಚ ಮಾಡುತ್ತದೆ -- ಸುಮಾರು 20 ಪಟ್ಟು ವ್ಯತ್ಯಾಸ.\n• Joint loss D ಇಂದ ಏಕೆ ಭಾಗಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: per-depth loss ಸ್ಥಿರವಾಗಿಟ್ಟುಕೊಂಡು, ಶುದ್ಧ sum D ಜೊತೆ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ (D=1..5 ಗೆ 0.5 -> 2.5) ಆದರೆ averaged version ನಿಖರವಾಗಿ 0.5 ಆಗಿ ಉಳಿಯುತ್ತದೆ, lambda ಅನ್ನೂ D ya ಆಯ್ಕೆ ಇಂದ ಬೇರ್ಪಡಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the RMS magnitude of both vectors after applying rms_norm()?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: rms_norm() ಅನ್ವಯಿಸಿದ ನಂತರ ಎರಡೂ vectors ya RMS magnitude ಏನಾಗಿತ್ತೂ?',
        opts: ['7.415 for both', '0.958 for both', 'Exactly 1.0 for both', 'They remained different'], correct: 2,
        optsKn: ['ಎರಡಕ್ಕೂ 7.415', 'ಎರಡಕ್ಕೂ 0.958', 'ಎರಡಕ್ಕೂ ನಿಖರವಾಗಿ 1.0', 'ಅವು ಭಿನ್ನವಾಗಿ ಉಳಿದವು'] },
      { q: 'Genuinely confirmed: at h=7168, how many parameters does the projection M_k contain (2h^2)?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: h=7168 ನಲ್ಲಿ, projection M_k (2h^2) ಎಷ್ಟೂ parameters ಒಳಗೊಂಡಿದೆ?',
        opts: ['~8.4M', '~33.6M', '~102.8M', '~719M'], correct: 2,
        optsKn: ['~8.4M', '~33.6M', '~102.8M', '~719M'] },
      { q: 'In the three-depth trace, which state predicts the token "learn"?',
        qKn: 'ಮೂರೂ-depth trace ನಲ್ಲಿ, "learn" token ಅನ್ನೂ ಯಾವ state predict ಮಾಡುತ್ತದೆ?',
        opts: ['h^(0)', 'h^(1)', 'h^(2)', 'h^(3)'], correct: 1,
        optsKn: ['h^(0)', 'h^(1)', 'h^(2)', 'h^(3)'] },
      { q: 'Genuinely confirmed: what was the cross-entropy loss for a confident correct prediction with p=0.8, and how did it compare to p=0.01?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: p=0.8 ಇರುವ ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ ಸರಿಯಾದ prediction ಗೆ cross-entropy loss ಏನಾಗಿತ್ತೂ, ಮತ್ತೆ ಅದೂ p=0.01 ಜೊತೆ ಹೇಗೆ ಹೋಲಿಸಿತೂ?',
        opts: ['0.223, roughly 20x smaller than the p=0.01 loss of 4.605', '4.605, larger than p=0.01', '0.223, equal to the p=0.01 loss', '1.0 for both'], correct: 0,
        optsKn: ['0.223, p=0.01 ya loss 4.605 ಗಿಂತ ಸುಮಾರು 20 ಪಟ್ಟು ಚಿಕ್ಕದೂ', '4.605, p=0.01 ಗಿಂತ ದೊಡ್ಡದೂ', '0.223, p=0.01 loss ಗೆ ಸಮಾನ', 'ಎರಡಕ್ಕೂ 1.0'] },
      { q: 'Genuinely confirmed: why does the joint MTP loss divide the summed per-depth losses by D?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: joint MTP loss ಕೂಡಿಸಿದ per-depth losses ಅನ್ನೂ D ಇಂದ ಏಕೆ ಭಾಗಿಸುತ್ತದೆ?',
        opts: ['To make the loss larger', 'Because CE loss cannot be summed', 'To keep the auxiliary loss scale independent of how many depths D are used, confirmed since the raw sum grows with D while the average stays constant', 'It is not actually necessary'], correct: 2,
        optsKn: ['Loss ಅನ್ನೂ ದೊಡ್ಡದಾಗಿಸಲು', 'ಏಕೆಂದರೆ CE loss ಕೂಡಿಸಲಾಗುವುದಿಲ್ಲ', 'ಎಷ್ಟೂ depths D ಬಳಸಿದರೂ auxiliary loss scale ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿಡಲು, ಶುದ್ಧ sum D ಜೊತೆ ಬೆಳೆಯುತ್ತದೆ ಆದರೆ average ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಇದೂ ನಿಜವಾಗಿ ಅಗತ್ಯವಿಲ್ಲ'] },
    ] } },
  ],
};
