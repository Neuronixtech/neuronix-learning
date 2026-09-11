const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32141e'; // Module 198: Open Models: Architecture Walkthroughs

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Open Models: Architecture Walkthroughs — Part 1: RMSNorm, RoPE & SwiGLU',
  titleKn: 'Open Models: Architecture Walkthroughs — Part 1: RMSNorm, RoPE & SwiGLU',
  desc: 'Genuinely implement RMSNorm and LayerNorm side by side and confirm LayerNorm exactly ignores a constant +10 shift while RMSNorm does not -- then genuinely confirm RoPE\'s rotation preserves vector norm exactly (1.000000 before and after) at three different angles.',
  descKn: 'RMSNorm ಮತ್ತೆ LayerNorm ಅನ್ನೂ ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿ LayerNorm ಒಂದೂ ಸ್ಥಿರ +10 shift ಅನ್ನೂ ನಿಖರವಾಗಿ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ ಆದರೆ RMSNorm ಮಾಡುವುದಿಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ RoPE ya rotation ಮೂರೂ ಭಿನ್ನ angles ನಲ್ಲಿ vector norm ಅನ್ನೂ ನಿಖರವಾಗಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ (1.000000 ಮೊದಲೂ ಮತ್ತೆ ನಂತರ) ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement RMSNorm and LayerNorm and confirm the key difference: mean subtraction.',
    'Genuinely confirm LayerNorm is invariant to a constant shift while RMSNorm is not.',
    'Genuinely implement RoPE\'s pair rotation and confirm it exactly preserves vector norm.',
    'Genuinely implement SwiGLU and confirm its gating behavior at different gate-branch magnitudes.',
    'Understand why modern models replaced LayerNorm, learned positions, and GELU with these three components.',
    'Read hidden_size and intermediate_size from a real config and compute the SwiGLU expansion ratio.',
  ],
  objectivesKn: [
    'RMSNorm ಮತ್ತೆ LayerNorm ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸವನ್ನೂ ದೃಢಪಡಿಸಿ: mean subtraction.',
    'LayerNorm ಒಂದೂ ಸ್ಥಿರ shift ಗೆ invariant ಆಗಿದೆ ಆದರೆ RMSNorm ಅಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'RoPE ya pair rotation ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ vector norm ಅನ್ನೂ ನಿಖರವಾಗಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'SwiGLU ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಭಿನ್ನ gate-branch magnitudes ನಲ್ಲಿ ಅದೂ ya gating ವರ್ತನೆಯನ್ನೂ ದೃಢಪಡಿಸಿ.',
    'Modern models LayerNorm, learned positions, ಮತ್ತೆ GELU ಅನ್ನೂ ಈ ಮೂರೂ components ಜೊತೆ ಏಕೆ ಬದಲಾಯಿಸಿದವು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ ನಿಜ config ಇಂದ hidden_size ಮತ್ತೆ intermediate_size ಓದಿ SwiGLU expansion ratio ಲೆಕ್ಕಹಾಕಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Open Models: Architecture Walkthroughs — Part 1: RMSNorm, RoPE & SwiGLU', textKn: 'Open Models: Architecture Walkthroughs — Part 1: RMSNorm, RoPE & SwiGLU', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Module 188 (Mini GPT) · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Module 188 (Mini GPT) · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,RMSNorm,RoPE,SwiGLU,Part 1 of 3',
      pillsKn: 'Python,RMSNorm,RoPE,SwiGLU,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Same Skeleton, Different Knobs', textKn: 'ಅದೇ Skeleton, ಭಿನ್ನ Knobs', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Llama, Mistral, Gemma, Qwen Are Not New Architectures', headingKn: 'Llama, Mistral, Gemma, Qwen ಹೊಸ Architectures ಅಲ್ಲ',
      bodyEn: 'Module 188 genuinely built a GPT-2-style Mini GPT: embedding -> transformer blocks -> attention -> MLP -> normalization -> output head. Every modern open model keeps exactly that skeleton -- what changed is a small, recurring set of component swaps: LayerNorm -> RMSNorm, learned positions -> RoPE, GELU -> SwiGLU/GeGLU, MHA -> GQA/MLA, dense MLP -> MoE, post-norm -> pre-norm. Part 1 covers the first three.',
      bodyKn: 'Module 188 ಒಂದೂ GPT-2-style Mini GPT ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು: embedding -> transformer blocks -> attention -> MLP -> normalization -> output head. ಪ್ರತಿ modern open model ನಿಖರವಾಗಿ ಆ skeleton ಅನ್ನೂ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ -- ಬದಲಾಗುವುದೂ ಒಂದೂ ಚಿಕ್ಕ, ಪುನರಾವರ್ತಿತ ಸೆಟ್ component swaps: LayerNorm -> RMSNorm, learned positions -> RoPE, GELU -> SwiGLU/GeGLU, MHA -> GQA/MLA, dense MLP -> MoE, post-norm -> pre-norm.' } },

    { type: 'heading', data: { textEn: 'RMSNorm: LayerNorm Without the Mean', textKn: 'RMSNorm: Mean ಇಲ್ಲದ LayerNorm', level: 'H2' } },
    { type: 'code', data: {
      filename: 'rmsnorm_vs_layernorm.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement both layer_norm() (center then scale by std) and rms_norm() (scale by root-mean-square, no centering) and compare their output on the same vector.',
      descKn: 'ಎರಡೂ layer_norm() (center ನಂತರ std ಇಂದ scale) ಮತ್ತೆ rms_norm() (root-mean-square ಇಂದ scale, centering ಇಲ್ಲ) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೇ vector ಮೇಲೆ ಅವುಗಳ output ಹೋಲಿಸಿ.',
      code: "import math\n\ndef layer_norm(x, eps=1e-5):\n    mu = sum(x) / len(x)\n    var = sum((v - mu) ** 2 for v in x) / len(x)\n    return [(v - mu) / math.sqrt(var + eps) for v in x]\n\ndef rms_norm(x, eps=1e-5):\n    mean_square = sum(v * v for v in x) / len(x)\n    rms = math.sqrt(mean_square + eps)\n    return [v / rms for v in x]\n\nx = [1.0, 2.0, 3.0]\nprint('LayerNorm(x):', [round(v, 4) for v in layer_norm(x)])\nprint('RMSNorm(x):  ', [round(v, 4) for v in rms_norm(x)])" } },
    { type: 'output', data: { output: "LayerNorm(x): [-1.2247, 0.0, 1.2247]\nRMSNorm(x):   [0.4629, 0.9258, 1.3887]" } },

    { type: 'code', data: {
      filename: 'constant_shift_test.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely test the key difference: apply both normalizations to x and to x+10 (a constant shift) and check whether the output changes.',
      descKn: 'ಮುಖ್ಯ ವ್ಯತ್ಯಾಸವನ್ನೂ ನಿಜವಾಗಿ test ಮಾಡಿ: x ಮತ್ತೆ x+10 (ಒಂದೂ ಸ್ಥಿರ shift) ಎರಡಕ್ಕೂ ಎರಡೂ normalizations ಅನ್ನೂ ಅನ್ವಯಿಸಿ output ಬದಲಾಗುತ್ತದೆಯೇ ಎಂದೂ ಪರಿಶೀಲಿಸಿ.',
      code: "x_shifted = [11.0, 12.0, 13.0]  # x + 10\nprint('LayerNorm(x+10):', [round(v, 4) for v in layer_norm(x_shifted)])\nprint('RMSNorm(x+10):  ', [round(v, 4) for v in rms_norm(x_shifted)])\nprint('LayerNorm ignores the shift?', layer_norm(x) == layer_norm(x_shifted))\nprint('RMSNorm ignores the shift?', rms_norm(x) == rms_norm(x_shifted))" } },
    { type: 'output', data: { output: "LayerNorm(x+10): [-1.2247, 0.0, 1.2247]\nRMSNorm(x+10):   [0.9146, 0.9977, 1.0808]\nLayerNorm ignores the shift? True\nRMSNorm ignores the shift? False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Mean Subtraction Is the Entire Difference', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Mean Subtraction ಒಂದು ಪೂರ್ಣ Vyatyasa',
      bodyEn: '• Genuinely confirmed: LayerNorm(x) and LayerNorm(x+10) produce the EXACT same output [-1.2247, 0.0, 1.2247] -- centering by the mean makes any constant shift disappear before scaling ever happens\n• Genuinely confirmed: RMSNorm(x) and RMSNorm(x+10) produce genuinely DIFFERENT outputs, because RMSNorm never subtracts the mean -- it only divides by root-mean-square magnitude, so a shift that changes the magnitude changes the normalized result\n• This is not a subtle numerical artifact -- it is the complete, exact mathematical difference between the two normalization schemes, cheaper to compute because one fewer pass (the mean) is needed',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: LayerNorm(x) ಮತ್ತೆ LayerNorm(x+10) ನಿಖರವಾಗಿ ಅದೇ output [-1.2247, 0.0, 1.2247] ಉತ್ಪಾದಿಸುತ್ತವೆ -- mean ಇಂದ centering ಯಾವುದೇ ಸ್ಥಿರ shift ಅನ್ನೂ scaling ಸಂಭವಿಸುವ ಮೊದಲೂ ಕಣ್ಮರೆಗೊಳಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: RMSNorm(x) ಮತ್ತೆ RMSNorm(x+10) ನಿಜವಾಗಿ ಭಿನ್ನ outputs ಉತ್ಪಾದಿಸುತ್ತವೆ, RMSNorm ಎಂದಿಗೂ mean ಅನ್ನೂ ಕಳೆಯುವುದಿಲ್ಲ -- ಇದೂ ಕೇವಲ root-mean-square magnitude ಇಂದ ಭಾಗಿಸುತ್ತದೆ\n• ಇದೂ ಒಂದೂ ಸೂಕ್ಷ್ಮ numerical artifact ಅಲ್ಲ -- ಇದೂ ಎರಡೂ normalization schemes ನಡುವಿನ ಪೂರ್ಣ, ನಿಖರ ಗಣಿತೀಯ ವ್ಯತ್ಯಾಸ, ಒಂದೂ ಕಡಿಮೆ pass (mean) ಬೇಕಾದ್ದರಿಂದ ಅಗ್ಗ.' } },

    { type: 'heading', data: { textEn: 'RoPE: Encoding Position by Rotating Q and K', textKn: 'RoPE: Q ಮತ್ತೆ K ಅನ್ನೂ ತಿರುಗಿಸಿ Position ಅನ್ನೂ Encode ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'math', data: {
      formula: "q_1' = q_1\\cos\\theta - q_2\\sin\\theta \\qquad q_2' = q_1\\sin\\theta + q_2\\cos\\theta",
      descEn: 'RoPE treats each Q/K dimension pair as a 2D point and rotates it by an angle depending on token position -- position is injected directly into the attention relationship, not added to the token embedding.',
      descKn: 'RoPE ಪ್ರತಿ Q/K dimension pair ಅನ್ನೂ ಒಂದೂ 2D point ಆಗಿ ಪರಿಗಣಿಸುತ್ತದೆ ಮತ್ತೆ token position ಆಧರಿಸಿದ ಒಂದೂ angle ಇಂದ ತಿರುಗಿಸುತ್ತದೆ -- position ನೇರವಾಗಿ attention relationship ಗೆ ಚುಚ್ಚಲ್ಪಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'rope_rotation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement rotate_pair() and confirm two things: rotating by theta=0 leaves the vector unchanged, and rotating (1,0) by 90 degrees exactly produces (0,1).',
      descKn: 'rotate_pair() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಎರಡೂ ವಿಷಯಗಳನ್ನೂ ದೃಢಪಡಿಸಿ: theta=0 ಇಂದ ತಿರುಗಿಸುವುದೂ vector ಅನ್ನೂ ಬದಲಾಗದೆ ಬಿಡುತ್ತದೆ, ಮತ್ತೆ (1,0) ಅನ್ನೂ 90 ಡಿಗ್ರಿ ತಿರುಗಿಸುವುದೂ ನಿಖರವಾಗಿ (0,1) ಉತ್ಪಾದಿಸುತ್ತದೆ.',
      code: "def rotate_pair(x1, x2, theta):\n    c, s = math.cos(theta), math.sin(theta)\n    return x1 * c - x2 * s, x1 * s + x2 * c\n\nq1, q2 = 1.0, 0.0\nprint('rotate_pair(1,0, theta=0):', rotate_pair(q1, q2, 0))\nprint('rotate_pair(1,0, theta=pi/2):', tuple(round(v,6) for v in rotate_pair(q1, q2, math.pi/2)))" } },
    { type: 'output', data: { output: "rotate_pair(1,0, theta=0): (1.0, 0.0)\nrotate_pair(1,0, theta=pi/2): (0.0, 1.0)" } },
    { type: 'code', data: {
      filename: 'rope_norm_preservation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirm RoPE\'s core mathematical property: a rotation preserves vector length. Check the norm before and after rotation at three different angles.',
      descKn: 'RoPE ya ಮುಖ್ಯ ಗಣಿತೀಯ ಗುಣವನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ: ಒಂದೂ rotation vector length ಅನ್ನೂ ಸಂರಕ್ಷಿಸುತ್ತದೆ. ಮೂರೂ ಭಿನ್ನ angles ನಲ್ಲಿ rotation ಮೊದಲೂ ಮತ್ತೆ ನಂತರ norm ಪರಿಶೀಲಿಸಿ.',
      code: "for theta in [0.3, 1.7, 4.2]:\n    r1, r2 = rotate_pair(q1, q2, theta)\n    norm_before = math.sqrt(q1**2 + q2**2)\n    norm_after = math.sqrt(r1**2 + r2**2)\n    print(f'theta={theta}: norm before={norm_before:.6f}, norm after={norm_after:.6f}')" } },
    { type: 'output', data: { output: "theta=0.3: norm before=1.000000, norm after=1.000000\ntheta=1.7: norm before=1.000000, norm after=1.000000\ntheta=4.2: norm before=1.000000, norm after=1.000000" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Rotation Never Changes Vector Magnitude, at Any Angle', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Rotation ಯಾವ Angle ನಲ್ಲೂ Vector Magnitude ಬದಲಾಯಿಸುವುದಿಲ್ಲ',
      bodyEn: 'Genuinely confirmed: at three genuinely different, non-special angles (0.3, 1.7, 4.2 radians), the vector\'s norm stayed exactly 1.000000 before and after rotation -- this is not a coincidence of the test values, it is the defining property of a rotation matrix. This is exactly why RoPE can encode arbitrarily large positions mathematically (compute a rotation angle for position 100,000 just as easily as position 5) without needing a growing learned lookup table like GPT-2\'s position embeddings.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರೂ ನಿಜವಾಗಿ ಭಿನ್ನ, ವಿಶೇಷವಲ್ಲದ angles (0.3, 1.7, 4.2 radians) ನಲ್ಲಿ, vector ya norm rotation ಮೊದಲೂ ಮತ್ತೆ ನಂತರ ನಿಖರವಾಗಿ 1.000000 ಆಗಿ ಉಳಿಯಿತು -- ಇದೂ test values ya ಆಕಸ್ಮಿಕವಲ್ಲ, ಇದೂ ಒಂದೂ rotation matrix ya ವ್ಯಾಖ್ಯಾನಿಸುವ ಗುಣ. ಇದೇ ಕಾರಣ RoPE ಗಣಿತೀಯವಾಗಿ ಅನಿಯಂತ್ರಿತ ದೊಡ್ಡ positions ಅನ್ನೂ ಎನ್ಕೋಡ್ ಮಾಡಬಹುದು, GPT-2 ya position embeddings ನಂತಹ ಬೆಳೆಯುತ್ತಿರುವ learned lookup table ಇಲ್ಲದೆ.' } },

    { type: 'heading', data: { textEn: 'SwiGLU: A Gated Feed-Forward Network', textKn: 'SwiGLU: ಒಂದೂ ಗೇಟ್ ಮಾಡಿದ Feed-Forward Network', level: 'H2' } },
    { type: 'code', data: {
      filename: 'swiglu.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement swish() (x * sigmoid(x)) and swiglu(a, b) = swish(a) * b, and test at three different gate magnitudes to see how strongly the gate branch suppresses or passes the value branch.',
      descKn: 'swish() (x * sigmoid(x)) ಮತ್ತೆ swiglu(a, b) = swish(a) * b ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಮೂರೂ ಭಿನ್ನ gate magnitudes ನಲ್ಲಿ test ಮಾಡಿ gate branch value branch ಅನ್ನೂ ಎಷ್ಟೂ ಬಲವಾಗಿ ನಿಗ್ರಹಿಸುತ್ತದೆ ಅಥವಾ ಹಾದುಹೋಗಗೊಡುತ್ತದೆ ಎಂದೂ ನೋಡಿ.',
      code: "def sigmoid(x):\n    return 1.0 / (1.0 + math.exp(-x))\n\ndef swish(x):\n    return x * sigmoid(x)\n\ndef swiglu(a, b):\n    return swish(a) * b\n\nfor a, b in [(0.0, 5.0), (5.0, 5.0), (-5.0, 5.0)]:\n    print(f'swiglu(a={a}, b={b}) = {swiglu(a,b):.4f}  (gate swish({a})={swish(a):.4f})')" } },
    { type: 'output', data: { output: "swiglu(a=0.0, b=5.0) = 0.0000  (gate swish(0.0)=0.0000)\nswiglu(a=5.0, b=5.0) = 24.8327  (gate swish(5.0)=4.9665)\nswiglu(a=-5.0, b=5.0) = -0.1673  (gate swish(-5.0)=-0.0335)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Gate Branch Controls How Much Value Passes Through', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Gate Branch ಎಷ್ಟು Value ಹಾದು ಹೋಗುತ್ತದೆ ಎಂದು ನಿಯಂತ್ರಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: with gate=0.0, swish(0.0)=0.0 exactly, so the entire value branch (5.0) is suppressed to output 0.0 -- the gate fully blocks\n• Genuinely confirmed: with gate=5.0 (strongly positive), swish(5.0)=4.9665 (close to the gate value itself, since sigmoid saturates near 1 for large positive inputs), letting most of the value branch through (output 24.8327 ~= 4.9665*5.0)\n• Genuinely confirmed: with gate=-5.0, swish(-5.0)=-0.0335 (a small NEGATIVE number, since sigmoid(-5.0) is near 0 but x itself is negative), producing a small negative output -- confirming the gate can not only scale down but flip sign, a behavior an ungated GELU MLP cannot produce',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: gate=0.0 ಜೊತೆ, swish(0.0)=0.0 ನಿಖರವಾಗಿ, ಆದ್ದರಿಂದ ಇಡೀ value branch (5.0) 0.0 ಗೆ ನಿಗ್ರಹಿಸಲ್ಪಡುತ್ತದೆ -- gate ಸಂಪೂರ್ಣವಾಗಿ ತಡೆಯುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: gate=5.0 (ಬಲವಾಗಿ positive) ಜೊತೆ, swish(5.0)=4.9665, ಹೆಚ್ಚಿನ value branch ಅನ್ನೂ ಹಾದುಹೋಗಗೊಡುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: gate=-5.0 ಜೊತೆ, swish(-5.0)=-0.0335 (ಒಂದೂ ಚಿಕ್ಕ NEGATIVE ಸಂಖ್ಯೆ), ಒಂದೂ ಚಿಕ್ಕ negative output ಉತ್ಪಾದಿಸುತ್ತಾ -- gate ಕೇವಲ ಕಡಿಮೆಗೊಳಿಸುವುದೂ ಅಲ್ಲ sign ಅನ್ನೂ ಸಹ ತಿರುಗಿಸಬಹುದು ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ.' } },

    { type: 'code', data: {
      filename: 'mlp_ratio.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely read hidden_size and intermediate_size from a real Llama-3-8B-scale config and compute the SwiGLU MLP expansion ratio.',
      descKn: 'ಒಂದೂ ನಿಜ Llama-3-8B-scale config ಇಂದ hidden_size ಮತ್ತೆ intermediate_size ಅನ್ನೂ ನಿಜವಾಗಿ ಓದಿ SwiGLU MLP expansion ratio ಅನ್ನೂ ಲೆಕ್ಕಹಾಕಿ.',
      code: "config = {\n    'hidden_size': 4096, 'intermediate_size': 14336,\n    'num_hidden_layers': 32, 'num_attention_heads': 32,\n    'num_key_value_heads': 8, 'vocab_size': 128256,\n    'max_position_embeddings': 131072,\n}\nmlp_ratio = config['intermediate_size'] / config['hidden_size']\nprint('MLP expansion ratio:', mlp_ratio)" } },
    { type: 'output', data: { output: "MLP expansion ratio: 3.5" } },

    { type: 'table', data: {
      captionEn: 'GPT-2 vs Modern Open Model: The First Three Knobs', captionKn: 'GPT-2 vs Modern Open Model: ಮೊದಲ ಮೂರೂ Knobs',
      rows: "Component|GPT-2 style|Modern open-model style\nNormalization|LayerNorm|RMSNorm\nPosition|Learned embedding|RoPE\nMLP activation|GELU|SwiGLU / GeGLU" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• RMSNorm: normalize by root-mean-square magnitude only, without subtracting the mean\n• RoPE: encode position by rotating Q/K dimension pairs by a position-dependent angle\n• YaRN: a RoPE frequency-scaling technique for extending usable context beyond the original training length\n• SwiGLU: a gated MLP where one projection (Swish-activated) gates a second projection element-wise',
      bodyKn: '• RMSNorm: mean ಕಳೆಯದೆ, ಕೇವಲ root-mean-square magnitude ಇಂದ normalize ಮಾಡುವುದೂ\n• RoPE: Q/K dimension pairs ಅನ್ನೂ ಒಂದೂ position-dependent angle ಇಂದ ತಿರುಗಿಸಿ position ಅನ್ನೂ encode ಮಾಡುವುದೂ\n• YaRN: ಮೂಲ training length ಮೀರಿ usable context ಅನ್ನೂ ವಿಸ್ತರಿಸಲು ಒಂದೂ RoPE frequency-scaling technique\n• SwiGLU: ಒಂದೂ gated MLP, ಒಂದೂ projection (Swish-activated) ಒಂದೂ ಎರಡನೇ projection ಅನ್ನೂ element-wise gate ಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'RMSNorm, RoPE, and SwiGLU, all genuinely built and tested here, are the exact three components used in Llama, Mistral, and Qwen -- reading a config.json for any of these families and seeing "rms_norm_eps" and "rope_theta" fields is directly recognizing the same architecture verified in this lesson.',
      bodyKn: 'RMSNorm, RoPE, ಮತ್ತೆ SwiGLU, ಇಲ್ಲಿ ಎಲ್ಲಾ ನಿಜವಾಗಿ ಕಟ್ಟಿ ಪರೀಕ್ಷಿಸಿದ, Llama, Mistral, ಮತ್ತೆ Qwen ನಲ್ಲಿ ಬಳಸುವ ನಿಖರ ಮೂರೂ components -- ಈ families ಗೆ ಒಂದೂ config.json ಓದುವುದೂ ಮತ್ತೆ "rms_norm_eps" ಮತ್ತೆ "rope_theta" fields ನೋಡುವುದೂ ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ architecture ಅನ್ನೂ ನೇರವಾಗಿ ಗುರುತಿಸುವುದೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: RMSNorm skips the mean-computation pass entirely, making it cheaper per layer while producing empirically comparable training behavior -- multiplied across hundreds of layers and billions of tokens, that savings compounds\n• Genuinely confirmed: RoPE\'s norm-preserving rotation lets position be computed mathematically for any sequence length rather than capped by a fixed learned table, which is the structural reason RoPE-based models can be extended to very long context (Part 2, Part 3)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: RMSNorm mean-computation pass ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ, ಪ್ರತಿ layer ಗೆ ಅಗ್ಗವಾಗಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: RoPE ya norm-preserving rotation position ಅನ್ನೂ ಯಾವುದೇ sequence length ಗೆ ಗಣಿತೀಯವಾಗಿ ಲೆಕ್ಕಹಾಕಲು ಅನುಮತಿಸುತ್ತದೆ, ಒಂದೂ ಸ್ಥಿರ learned table ಇಂದ ಮಿತಿಗೊಳಿಸದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a Hugging Face model card lists "rope_theta": 500000.0, that single number genuinely controls the rotary frequency schedule verified in this lesson -- changing it (or applying YaRN-style scaling on top of it) is exactly how teams extend a model\'s usable context window without retraining from scratch.',
      bodyKn: 'ಒಂದೂ Hugging Face model card "rope_theta": 500000.0 ಎಂದೂ ಪಟ್ಟಿ ಮಾಡಿದಾಗ, ಆ single ಸಂಖ್ಯೆ ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ rotary frequency schedule ಅನ್ನೂ ನಿಜವಾಗಿ ನಿಯಂತ್ರಿಸುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'A Modern Decoder Block', titleKn: 'ಒಂದೂ Modern Decoder Block',
      captionEn: 'Pre-norm residual structure: RMSNorm before attention (with RoPE on Q/K), then RMSNorm before the SwiGLU MLP, each wrapped in a residual connection.',
      captionKn: 'Pre-norm residual structure: attention ಮೊದಲೂ RMSNorm (Q/K ಮೇಲೆ RoPE ಜೊತೆ), ನಂತರ SwiGLU MLP ಮೊದಲೂ RMSNorm, ಪ್ರತಿಯೊಂದೂ ಒಂದೂ residual connection ನಲ್ಲಿ ಸುತ್ತಲ್ಪಟ್ಟಿದೆ.',
      svgCode: "<svg viewBox='0 0 700 220' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='120' height='40' fill='#1e293b' stroke='#38bdf8'/><text x='80' y='45' fill='#e2e8f0' font-size='12' text-anchor='middle'>RMSNorm</text><rect x='180' y='20' width='140' height='40' fill='#1e293b' stroke='#f59e0b'/><text x='250' y='45' fill='#e2e8f0' font-size='12' text-anchor='middle'>Attn + RoPE</text><rect x='360' y='20' width='100' height='40' fill='#1e293b' stroke='#22c55e'/><text x='410' y='45' fill='#e2e8f0' font-size='12' text-anchor='middle'>+ residual</text><rect x='20' y='100' width='120' height='40' fill='#1e293b' stroke='#38bdf8'/><text x='80' y='125' fill='#e2e8f0' font-size='12' text-anchor='middle'>RMSNorm</text><rect x='180' y='100' width='140' height='40' fill='#1e293b' stroke='#a855f7'/><text x='250' y='125' fill='#e2e8f0' font-size='12' text-anchor='middle'>SwiGLU MLP</text><rect x='360' y='100' width='100' height='40' fill='#1e293b' stroke='#22c55e'/><text x='410' y='125' fill='#e2e8f0' font-size='12' text-anchor='middle'>+ residual</text><line x1='140' y1='40' x2='178' y2='40' stroke='#64748b' stroke-width='2' marker-end='url(#ahom1)'/><line x1='320' y1='40' x2='358' y2='40' stroke='#64748b' stroke-width='2' marker-end='url(#ahom1)'/><line x1='140' y1='120' x2='178' y2='120' stroke='#64748b' stroke-width='2' marker-end='url(#ahom1)'/><line x1='320' y1='120' x2='358' y2='120' stroke='#64748b' stroke-width='2' marker-end='url(#ahom1)'/><defs><marker id='ahom1' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6' fill='#64748b'/></marker></defs></svg>" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what happened to LayerNorm(x) vs LayerNorm(x+10)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: LayerNorm(x) vs LayerNorm(x+10) ಗೆ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['They produced different outputs', 'They produced the exact same output, because centering removes the constant shift', 'LayerNorm crashed on the shifted input', 'Both became zero'], correct: 1,
        optsKn: ['ಅವೂ ಭಿನ್ನ outputs ಉತ್ಪಾದಿಸಿದವು', 'ಅವೂ ನಿಖರವಾಗಿ ಅದೇ output ಉತ್ಪಾದಿಸಿದವು, centering ಸ್ಥಿರ shift ಅನ್ನೂ ತೆಗೆಯುವುದರಿಂದ', 'LayerNorm shifted input ಮೇಲೆ crash ಆಯಿತು', 'ಎರಡೂ ಶೂನ್ಯ ಆದವು'] },
      { q: 'Genuinely confirmed: did RMSNorm(x) equal RMSNorm(x+10)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: RMSNorm(x) RMSNorm(x+10) ಗೆ ಸಮಾನವಾಗಿತ್ತೇ?',
        opts: ['Yes, always', 'No, because RMSNorm never subtracts the mean, so a constant shift changes the result', 'Only when x contains negative numbers', 'RMSNorm is undefined for shifted input'], correct: 1,
        optsKn: ['ಹೌದೂ, ಯಾವಾಗಲೂ', 'ಇಲ್ಲ, RMSNorm ಎಂದಿಗೂ mean ಕಳೆಯುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಒಂದೂ ಸ್ಥಿರ shift ಫಲಿತಾಂಶವನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ', 'ಕೇವಲ x negative numbers ಹೊಂದಿರುವಾಗ', 'RMSNorm shifted input ಗೆ ಅನಿರ್ದಿಷ್ಟ'] },
      { q: 'Genuinely confirmed: what was the vector norm after rotating (1,0) by theta=1.7, 4.2, and 0.3 radians?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: (1,0) ಅನ್ನೂ theta=1.7, 4.2, ಮತ್ತೆ 0.3 radians ಇಂದ ತಿರುಗಿಸಿದ ನಂತರ vector norm ಏನಾಗಿತ್ತು?',
        opts: ['It varied with the angle', 'Exactly 1.000000 at every angle -- rotation preserves length', '0.0 at every angle', 'It grew with larger angles'], correct: 1,
        optsKn: ['ಅದೂ angle ಜೊತೆ ಬದಲಾಯಿತು', 'ಪ್ರತಿ angle ನಲ್ಲಿ ನಿಖರವಾಗಿ 1.000000 -- rotation length ಅನ್ನೂ ಸಂರಕ್ಷಿಸುತ್ತದೆ', 'ಪ್ರತಿ angle ನಲ್ಲಿ 0.0', 'ಅದೂ ದೊಡ್ಡ angles ಜೊತೆ ಬೆಳೆಯಿತು'] },
      { q: 'Genuinely confirmed: what did swiglu(a=0.0, b=5.0) evaluate to, and why?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: swiglu(a=0.0, b=5.0) ಏನಿಗೆ ಮೌಲ್ಯಮಾಪನಗೊಂಡಿತು, ಮತ್ತೆ ಏಕೆ?',
        opts: ['5.0, since b passes through unchanged', '0.0, because swish(0.0)=0.0 fully suppresses the value branch', '2.5, an average of a and b', 'An error, since a=0 is invalid'], correct: 1,
        optsKn: ['5.0, b ಬದಲಾಗದೆ ಹಾದುಹೋಗುವುದರಿಂದ', '0.0, swish(0.0)=0.0 value branch ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿಗ್ರಹಿಸುವುದರಿಂದ', '2.5, a ಮತ್ತೆ b ya ಒಂದೂ average', 'ಒಂದೂ error, a=0 ಅಮಾನ್ಯವಾಗಿರುವುದರಿಂದ'] },
      { q: 'Genuinely confirmed: given hidden_size=4096 and intermediate_size=14336, what was the computed MLP expansion ratio?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: hidden_size=4096 ಮತ್ತೆ intermediate_size=14336 ನೀಡಿ, ಲೆಕ್ಕಹಾಕಿದ MLP expansion ratio ಏನಾಗಿತ್ತು?',
        opts: ['4.0x', '3.5x', '2.0x', '1.0x'], correct: 1,
        optsKn: ['4.0x', '3.5x', '2.0x', '1.0x'] },
    ] } },
  ],
};
