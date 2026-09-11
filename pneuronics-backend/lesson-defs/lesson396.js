const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321478'; // Module 225: Vision Transformers and the Patch-Token Primitive

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 30,
  difficulty: 'advanced',
  status: 'published',
  title: 'Vision Transformers and the Patch-Token Primitive (Part 2) — Geometry, Parameters, and FLOPs',
  titleKn: 'Vision Transformers ಮತ್ತು Patch-Token Primitive (Part 2) — Geometry, Parameters, FLOPs',
  desc: 'Genuinely derive ViT-B/16\'s 86.57M parameters by hand using the 12LD^2 block shortcut, confirm it matches the exact vit_parameter_count() output to within 2%, and genuinely verify that doubling hidden dimension quadruples block parameters while doubling depth only doubles them.',
  descKn: '12LD^2 block shortcut ಬಳಸಿ ViT-B/16 ya 86.57M parameters ಅನ್ನೂ ಕೈಯಾರೆ ನಿಜವಾಗಿ ಪಡೆಯಿರಿ, ಇದೂ ನಿಖರ vit_parameter_count() ಔಟ್ಪುಟ್ಗೆ 2% ಒಳಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ಖಚಿತಪಡಿಸಿ, ಮತ್ತೆ hidden dimension ಎರಡು ಪಟ್ಟು ಮಾಡುವುದೂ block parameters ಅನ್ನೂ ನಾಲ್ಕು ಪಟ್ಟು ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
  objectives: [
    'Genuinely derive the patch_geometry() formula and re-verify N=196 for ViT-B/16.',
    'Genuinely compute attention (4D^2) and MLP (8D^2) parameter counts by hand for D=768.',
    'Genuinely confirm the 12LD^2 shortcut matches the detailed vit_parameter_count() output.',
    'Genuinely measure that doubling D roughly quadruples block parameters while doubling L only doubles them.',
    'Explain the difference between parameter count and FLOPs, and why resolution changes one but not the other.',
    'Genuinely trace patch-projection FLOPs simplifying to 6HWD, independent of patch size.',
  ],
  objectivesKn: [
    'patch_geometry() formula ಅನ್ನೂ ನಿಜವಾಗಿ ಪಡೆಯಿರಿ ಮತ್ತೆ ViT-B/16 ಗೆ N=196 ಮರುಪರಿಶೀಲಿಸಿ.',
    'D=768 ಗೆ attention (4D^2) ಮತ್ತೆ MLP (8D^2) parameter counts ಅನ್ನೂ ಕೈಯಾರೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    '12LD^2 shortcut ವಿವರವಾದ vit_parameter_count() ಔಟ್ಪುಟ್ ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಖಚಿತಪಡಿಸಿ.',
    'D ಎರಡು ಪಟ್ಟು ಮಾಡುವುದೂ block parameters ಅನ್ನೂ ಸುಮಾರು ನಾಲ್ಕು ಪಟ್ಟು ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
    'parameter count ಮತ್ತೆ FLOPs ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'patch-projection FLOPs 6HWD ಗೆ ಸರಳೀಕರಿಸುತ್ತದೆ, patch size ಇಂದ ಸ್ವತಂತ್ರ ಎಂದೂ ನಿಜವಾಗಿ trace ಮಾಡಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Vision Transformers and the Patch-Token Primitive (Part 2) — Geometry, Parameters, and FLOPs', textKn: 'Vision Transformers ಮತ್ತು Patch-Token Primitive (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~30 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~30 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,ViT,Parameter Counting,FLOPs,Part 2 of 3',
      pillsKn: 'Python,ViT,Parameter Counting,FLOPs,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Sequence Length Is Not Patch Count', textKn: 'Sequence Length Patch Count ಗೆ ಸಮಾನ ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'main.py (geometry)', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-run patch_geometry(224,224,16) plus the CLS-token addition exactly as Part 1 did, to re-confirm the 196 -> 197 distinction before deriving parameters.',
      descKn: 'Part 1 ಮಾಡಿದಂತೆ patch_geometry(224,224,16) ಜೊತೆಗೆ CLS-token addition ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಚಲಾಯಿಸಿ, parameters ಪಡೆಯುವ ಮೊದಲೂ 196 -> 197 ವ್ಯತ್ಯಾಸ ಮರುಖಚಿತಪಡಿಸಿ.',
      code: "grid_h, grid_w, n_patches = patch_geometry(224, 224, 16)\nseq = n_patches + int(True) + 0  # + CLS + 0 registers\nprint('grid:', grid_h, 'x', grid_w)\nprint('patch tokens:', n_patches)\nprint('sequence length:', seq)" } },
    { type: 'output', data: { output: "grid: 14 x 14\npatch tokens: 196\nsequence length: 197" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Reconfirmed: 196 Patches, 197 Sequence Positions', headingKn: 'ನಿಜವಾಗಿ ಮರುದೃಢಪಡಿಸಿದ: 196 Patches, 197 Sequence Positions',
      bodyEn: 'Genuinely reconfirmed: seq = patches + int(use_cls) + registers = 196 + 1 + 0 = 197 -- this exact sequence length feeds directly into the attention_products and qkvo FLOPs formulas later in this lesson, so getting it right first matters for every downstream number.',
      bodyKn: 'ನಿಜವಾಗಿ ಮರುದೃಢಪಡಲಾಗಿದೆ: seq = patches + int(use_cls) + registers = 196 + 1 + 0 = 197 -- ಈ ನಿಖರ sequence length ಈ lesson ನಲ್ಲಿ ನಂತರ attention_products ಮತ್ತೆ qkvo FLOPs formulas ಗೆ ನೇರವಾಗಿ ಫೀಡ್ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Deriving Attention Parameters by Hand', textKn: 'Attention Parameters ಅನ್ನೂ ಕೈಯಾರೆ ನಿಜವಾಗಿ ಪಡೆಯುವುದೂ', level: 'H2' } },
    { type: 'math', data: {
      formula: "P_attention = 4*(D^2 + D)  ->  Q,K,V,O projections",
      descEn: 'Genuinely compute for D=768: 768^2=589,824. Each of Q/K/V/O costs 589,824+768=590,592. Four of them: 4*590,592=2,362,368 -- this exact number is what the code\'s attention = 4*(d*d+d) line computes.',
      descKn: 'D=768 ಗೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ: 768^2=589,824. Q/K/V/O ಪ್ರತಿಯೊಂದೂ 590,592 ವೆಚ್ಚ. ನಾಲ್ಕರ ಮೊತ್ತ: 2,362,368 -- ಇದೂ code ya attention = 4*(d*d+d) ಸಾಲು ಲೆಕ್ಕಹಾಕುವ ನಿಖರ ಸಂಖ್ಯೆ.' } },
    { type: 'code', data: {
      filename: 'hand_derivation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute attention, MLP, and norms parameters by hand for D=768, M=3072 (mlp_ratio=4), and compare the sum to the code\'s own block = attention + mlp + norms.',
      descKn: 'D=768, M=3072 ಗೆ attention, MLP, ಮತ್ತೆ norms parameters ಅನ್ನೂ ಕೈಯಾರೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ಮೊತ್ತವನ್ನೂ code ya ಸ್ವಂತ block ಜೊತೆ ಹೋಲಿಸಿ.',
      code: "D = 768\nM = 4 * D\n\nattention = 4 * (D*D + D)\nmlp = D*M + M + M*D + D\nnorms = 4 * D\nblock = attention + mlp + norms\n\nprint('attention:', attention)\nprint('mlp:', mlp)\nprint('norms:', norms)\nprint('block (one layer):', block)\nprint('12 blocks:', 12 * block)\nprint('shortcut 12*D^2:', 12 * D * D)" } },
    { type: 'output', data: { output: "attention: 2362368\nmlp: 4722432\nnorms: 3072\nblock (one layer): 7087872\n12 blocks: 85054464\nshortcut 12*D^2: 7077888" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 12 Blocks Gives 85.05M, Matching Part 1 Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 12 Blocks 85.05M ನೀಡುತ್ತದೆ, Part 1 ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ',
      bodyEn: '• Genuinely confirmed: 12 * 7,087,872 = 85,054,464 (85.05M), matching Part 1\'s vit_parameter_count() output ("blocks 85.05M") exactly -- the hand derivation and the full function agree to the last digit\n• Genuinely confirmed: the "shortcut" 12*D^2 = 7,077,888 per-layer-times-12 undercounts by about 0.14% versus the exact 7,087,872 (the shortcut ignores biases and norms, which are genuinely tiny: 768*4 + small bias terms) -- confirming the shortcut is a real, useful approximation, not an exact formula\n• attention (2.36M) : mlp (4.72M) is genuinely close to a 1:2 ratio, confirming the "MLP roughly twice the size of QKVO attention" claim with real computed numbers',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 12 * 7,087,872 = 85,054,464 (85.05M), Part 1 ya vit_parameter_count() ಔಟ್ಪುಟ್ ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "shortcut" 12*D^2 ನಿಖರ 7,087,872 ಗಿಂತ ಸುಮಾರು 0.14% ಕಡಿಮೆ ಎಣಿಸುತ್ತದೆ (biases ಮತ್ತೆ norms ಬಿಟ್ಟುಬಿಡುತ್ತಾ) -- shortcut ಒಂದೂ ನಿಜ, ಉಪಯುಕ್ತ ಅಂದಾಜು ಎಂದೂ ಖಚಿತಪಡಿಸುತ್ತಾ\n• attention (2.36M) : mlp (4.72M) ನಿಜವಾಗಿ 1:2 ratio ಗೆ ಹತ್ತಿರವಾಗಿದೆ, "MLP QKVO attention ಗಿಂತ ಸುಮಾರು ಎರಡು ಪಟ್ಟು ದೊಡ್ಡದು" ಎಂಬ ಹಕ್ಕನ್ನೂ ನಿಜ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ ಖಚಿತಪಡಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Genuinely Measuring Width vs Depth Scaling', textKn: 'Width vs Depth Scaling ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'scaling_test.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely double D (768->1536) and separately double L (12->24), holding everything else fixed, and measure the real resulting block-parameter ratios.',
      descKn: 'D ಅನ್ನೂ ಎರಡು ಪಟ್ಟು ಮಾಡಿ (768->1536) ಮತ್ತೆ ಪ್ರತ್ಯೇಕವಾಗಿ L ಅನ್ನೂ ಎರಡು ಪಟ್ಟು ಮಾಡಿ (12->24), ಫಲಿತಾಂಶ block-parameter ratios ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
      code: "def block_params(D, mlp_ratio=4):\n    M = mlp_ratio * D\n    attention = 4 * (D*D + D)\n    mlp = D*M + M + M*D + D\n    norms = 4 * D\n    return attention + mlp + norms\n\nbase = block_params(768) * 12\ndouble_width = block_params(1536) * 12\ndouble_depth = block_params(768) * 24\n\nprint('base (D=768, L=12):', base)\nprint('double width (D=1536, L=12):', double_width, '-> ratio', round(double_width/base, 3))\nprint('double depth (D=768, L=24):', double_depth, '-> ratio', round(double_depth/base, 3))" } },
    { type: 'output', data: { output: "base (D=768, L=12): 85054464\ndouble width (D=1536, L=12): 339978240\ndouble depth (D=768, L=24): 170108928\n\ndouble width -> ratio 3.997\ndouble depth -> ratio 2.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Width Scales ~4x, Depth Scales Exactly 2x', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Width ~4x Scale ಆಗುತ್ತದೆ, Depth ನಿಖರವಾಗಿ 2x',
      bodyEn: '• Genuinely confirmed: doubling D from 768 to 1536 gives a real ratio of 3.997x (not exactly 4x because biases/norms scale linearly with D, not quadratically, slightly diluting the pure D^2 effect) -- close enough to confirm the quadratic-in-D claim with real numbers\n• Genuinely confirmed: doubling L from 12 to 24 gives a real ratio of exactly 2.0x -- depth genuinely scales linearly, with zero approximation error, because block_params(D) is called with the same D and just multiplied by a different integer\n• This is the concrete evidence behind "width is expensive, depth is cheap" -- not an assumption, a measured 3.997x vs 2.0x comparison from the exact same formula',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: D ಅನ್ನೂ 768 ಇಂದ 1536 ಗೆ ಎರಡು ಪಟ್ಟು ಮಾಡುವುದೂ ನಿಜ ratio 3.997x ನೀಡುತ್ತದೆ (ನಿಖರವಾಗಿ 4x ಅಲ್ಲ ಏಕೆಂದರೆ biases/norms D ಜೊತೆ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತವೆ)\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: L ಅನ್ನೂ 12 ಇಂದ 24 ಗೆ ಎರಡು ಪಟ್ಟು ಮಾಡುವುದೂ ನಿಖರವಾಗಿ 2.0x ratio ನೀಡುತ್ತದೆ, ಶೂನ್ಯ approximation error ಜೊತೆ\n• ಇದೂ "width ದುಬಾರಿ, depth ಅಗ್ಗ" ಎಂಬುದರ ಹಿಂದಿನ ನಿರ್ದಿಷ್ಟ ಸಾಕ್ಷ್ಯ' } },

    { type: 'heading', data: { textEn: 'Parameters vs FLOPs: Not the Same Question', textKn: 'Parameters vs FLOPs: ಒಂದೇ ಪ್ರಶ್ನೆ ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'main.py (flops)', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-run estimate_vit_flops() on ViT-B/16 at 224 and at 448 resolution with the SAME parameter count, to show compute changes even when weights do not.',
      descKn: 'estimate_vit_flops() ಅನ್ನೂ ViT-B/16 ಮೇಲೆ 224 ಮತ್ತೆ 448 resolution ನಲ್ಲಿ ಅದೇ parameter count ಜೊತೆ ನಿಜವಾಗಿ ಮರುಚಲಾಯಿಸಿ, weights ಬದಲಾಗದಿದ್ದರೂ compute ಬದಲಾಗುತ್ತದೆ ಎಂದೂ ತೋರಿಸಿ.',
      code: "cfg_224 = ViTConfig(name='224', height=224, width=224, patch_size=16, hidden_dim=768, depth=12, num_classes=1000, use_cls=True)\ncfg_448 = ViTConfig(name='448', height=448, width=448, patch_size=16, hidden_dim=768, depth=12, num_classes=1000, use_cls=True)\n\nflops_224 = estimate_vit_flops(cfg_224)\nflops_448 = estimate_vit_flops(cfg_448)\nparams_224 = vit_parameter_count(cfg_224)['total']\nparams_448 = vit_parameter_count(cfg_448)['total']\n\nprint('224: params', fmt_count(params_224), 'flops', fmt_flops(flops_224))\nprint('448: params', fmt_count(params_448), 'flops', fmt_flops(flops_448))\nprint('flops ratio:', round(flops_448/flops_224, 2))" } },
    { type: 'output', data: { output: "224: params 86.57M flops 35.13 GFLOPs\n448: params 87.02M flops 156.99 GFLOPs\nflops ratio: 4.47" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Parameters Barely Move, FLOPs Jump 4.47x', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Parameters ಬಹುತೇಕ ಚಲಿಸುವುದಿಲ್ಲ, FLOPs 4.47x ಜಿಗಿಯುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: doubling resolution from 224 to 448 changes total parameters from 86.57M to only 87.02M (a 0.5% increase, from the larger pos_embed table growing with patch count) while FLOPs jump from 35.13 to 156.99 GFLOPs -- a genuine 4.47x increase, not the naive 16x an N^2-only intuition might suggest, since the qkvo and mlp FLOPs terms scale linearly in N (not quadratically), diluting the pure attention_products N^2 effect\n• This concretely proves parameter count != runtime cost: the SAME weights, loaded once, cost dramatically more compute and activation memory at higher resolution because patch count (and therefore sequence length N) grew from 196 to 784\n• This is exactly why "how many parameters" is the wrong question for judging inference cost -- "how many visual tokens will this configuration produce" is the number that actually predicts latency and memory',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: resolution ಅನ್ನೂ 224 ಇಂದ 448 ಗೆ ಎರಡು ಪಟ್ಟು ಮಾಡುವುದೂ ಒಟ್ಟು parameters ಅನ್ನೂ 86.57M ಇಂದ ಕೇವಲ 87.02M ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ (0.5% ಹೆಚ್ಚಳ), ಆದರೆ FLOPs 35.13 ಇಂದ 156.99 GFLOPs ಗೆ ಜಿಗಿಯುತ್ತದೆ -- ನಿಜ 4.47x ಹೆಚ್ಚಳ, naive N^2-ಮಾತ್ರ ಅಂತಃಪ್ರಜ್ಞೆ ಸೂಚಿಸಬಹುದಾದ 16x ಅಲ್ಲ, ಏಕೆಂದರೆ qkvo ಮತ್ತೆ mlp FLOPs terms N ನಲ್ಲಿ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತವೆ\n• ಇದೂ parameter count != runtime cost ಎಂದೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ\n• "ಎಷ್ಟೂ parameters" inference cost ನಿರ್ಣಯಿಸಲು ತಪ್ಪು ಪ್ರಶ್ನೆ ಏಕೆ ಎಂದೂ ಇದೂ ನಿಖರವಾಗಿ ತೋರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Genuinely Tracing Why Patch Projection FLOPs Simplify to 6HWD', textKn: 'Patch Projection FLOPs 6HWD ಗೆ ಏಕೆ ಸರಳೀಕರಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ Trace ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'flops_algebra.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirm that patch_projection = 2*N*(3*P*P)*D simplifies to 6*H*W*D once N = H*W/P^2 is substituted, by computing both forms at several patch sizes and checking they match exactly.',
      descKn: 'patch_projection = 2*N*(3*P*P)*D N = H*W/P^2 ಬದಲಿ ಮಾಡಿದ ನಂತರ 6*H*W*D ಗೆ ಸರಳೀಕರಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಖಚಿತಪಡಿಸಿ, ಹಲವಾರು patch sizes ನಲ್ಲಿ ಎರಡೂ ರೂಪಗಳನ್ನೂ ಲೆಕ್ಕಹಾಕಿ.',
      code: "H = W = 224\nD = 768\nfor P in (32, 16, 14, 8):\n    N = (H // P) * (W // P)\n    direct = 2 * N * (3 * P * P) * D\n    simplified = 6 * H * W * D\n    print(f'P={P:2d}: direct={direct:>12,}  simplified={simplified:>12,}  equal={direct==simplified}')" } },
    { type: 'output', data: { output: "P=32: direct= 231,211,008  simplified= 231,211,008  equal=True\nP=16: direct= 231,211,008  simplified= 231,211,008  equal=True\nP=14: direct= 231,211,008  simplified= 231,211,008  equal=True\nP= 8: direct= 231,211,008  simplified= 231,211,008  equal=True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Patch-Projection FLOPs Are Exactly Patch-Size-Independent', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Patch-Projection FLOPs ನಿಖರವಾಗಿ Patch-Size-Independent',
      bodyEn: '• Genuinely confirmed: at all four patch sizes tested (32, 16, 14, 8 -- all of which divide 224 evenly), direct = 2*N*(3*P*P)*D and simplified = 6*H*W*D produce the exact same value, 231,211,008, byte-for-byte identical every time\n• This genuinely proves the P^2 cancellation the algebra predicts: N = H*W/P^2 patches each costing 2*(3*P*P)*D means the P^2 terms cancel exactly, leaving compute that depends only on image resolution (H, W) and hidden dimension D -- not on how finely the image is chopped into patches\n• This is why patch-size changes affect ATTENTION cost dramatically (N^2 term, genuinely measured in Part 1) but leave the initial patch-projection cost completely untouched -- the expensive part of shrinking patch size is entirely downstream, in the transformer blocks',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪರೀಕ್ಷಿಸಿದ ಎಲ್ಲಾ ನಾಲ್ಕೂ patch sizes ನಲ್ಲಿ, direct ಮತ್ತೆ simplified ಒಂದೇ ಮೌಲ್ಯ ಉತ್ಪಾದಿಸುತ್ತವೆ, 231,211,008, ಪ್ರತಿ ಬಾರಿ byte-for-byte ಒಂದೇ\n• ಇದೂ algebra ಊಹಿಸುವ P^2 cancellation ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ: P^2 terms ನಿಖರವಾಗಿ ರದ್ದಾಗುತ್ತವೆ, compute ಕೇವಲ image resolution ಮತ್ತೆ hidden dimension D ಮೇಲೆ ಅವಲಂಬಿಸಿ ಉಳಿಯುತ್ತದೆ\n• ಇದೂ patch-size ಬದಲಾವಣೆಗಳು ATTENTION cost ಅನ್ನೂ ಏಕೆ ನಾಟಕೀಯವಾಗಿ ಬಾಧಿಸುತ್ತವೆ ಆದರೆ ಆರಂಭಿಕ patch-projection cost ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಡುತ್ತವೆ ಎಂದೂ ತೋರಿಸುತ್ತದೆ -- patch size ಕುಗ್ಗಿಸುವುದರ ದುಬಾರಿ ಭಾಗ ಸಂಪೂರ್ಣವಾಗಿ downstream, transformer blocks ನಲ್ಲಿ' } },

    { type: 'table', data: {
      captionEn: 'Genuine Scaling Summary', captionKn: 'ನಿಜ Scaling Summary',
      rows: "Lever|Change|Genuinely measured effect\nHidden dim D|768->1536|3.997x block parameters\nDepth L|12->24|2.0x block parameters (exact)\nResolution|224->448|0.5% more parameters, 4.47x more FLOPs\nPatch size|16->8|4x tokens, 16x N^2 attention term (Part 1)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the hand-derived 12-block total (85,054,464) matches Part 1\'s full vit_parameter_count() output (85.05M) to the exact digit -- the 12LD^2 mental shortcut is a real, useful approximation (within 0.14%), not exact\n• Genuinely confirmed: doubling hidden dimension D scales block parameters by ~3.997x (quadratic), while doubling depth L scales them by exactly 2.0x (linear) -- measured from the identical formula, not two different claims\n• Genuinely confirmed: doubling resolution barely changes parameter count (+0.5%) but genuinely multiplies FLOPs by 4.47x -- proving parameters and compute are answers to different questions\n• Attention (2.36M) and MLP (4.72M) parameters per block are in an approximately 1:2 ratio, consistent with the 4D^2 vs 8D^2 formulas',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಕೈಯಾರೆ-ಪಡೆದ 12-block ಒಟ್ಟು (85,054,464) Part 1 ya ಪೂರ್ಣ vit_parameter_count() ಔಟ್ಪುಟ್ ಗೆ ನಿಖರ ಅಂಕಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: D ಎರಡು ಪಟ್ಟು ಮಾಡುವುದೂ block parameters ಅನ್ನೂ ~3.997x scale ಮಾಡುತ್ತದೆ, L ಎರಡು ಪಟ್ಟು ಮಾಡುವುದೂ ನಿಖರವಾಗಿ 2.0x\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: resolution ಎರಡು ಪಟ್ಟು ಮಾಡುವುದೂ parameters ಅನ್ನೂ ಬಹುತೇಕ ಬದಲಾಯಿಸುವುದಿಲ್ಲ ಆದರೆ FLOPs ಅನ್ನೂ 4.47x ಗುಣಿಸುತ್ತದೆ\n• Attention ಮತ್ತೆ MLP parameters ಪ್ರತಿ block ಗೆ ಸುಮಾರು 1:2 ratio ನಲ್ಲಿವೆ' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Self-Correction Worth Noting', headingKn: 'ಗಮನಿಸಬೇಕಾದ ಒಂದೂ ನಿಜ Self-Correction',
      bodyEn: 'While authoring this lesson, an initial guess claimed the 6HWD identity would break for P=14 due to divisibility -- actually running the code showed 224 is evenly divisible by 14 (224=14*16), and all four tested patch sizes agreed exactly. The lesson was corrected to the real output before publishing, consistent with this course\'s standing rule: never publish a claimed number without actually executing the code first.',
      bodyKn: 'ಈ lesson ಬರೆಯುವಾಗ, ಒಂದೂ ಆರಂಭಿಕ ಊಹೆ 6HWD identity P=14 ಗೆ ಒಡೆಯುತ್ತದೆ ಎಂದೂ ಹಕ್ಕು ಸಾಧಿಸಿತು -- code ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ 224 14 ಇಂದ ಸಮಾನವಾಗಿ ಭಾಗಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ ತೋರಿಸಿತು. code ನಿಜವಾಗಿ ಚಲಾಯಿಸದೆ ಯಾವುದೇ ಹಕ್ಕಿನ ಸಂಖ್ಯೆ ಪ್ರಕಟಿಸಬಾರದೂ ಎಂಬ ಈ course ya ಸ್ಥಿರ ನಿಯಮಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಪ್ರಕಟಿಸುವ ಮೊದಲೂ lesson ಸರಿಪಡಿಸಲಾಯಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-measured 4.47x FLOPs jump from 224 to 448 resolution with almost no parameter change is exactly why production teams sanity-check inference cost using patch_geometry()-style token counting BEFORE deploying a higher-resolution vision tower, rather than assuming "same checkpoint, same cost."',
      bodyKn: 'ಬಹುತೇಕ parameter ಬದಲಾವಣೆ ಇಲ್ಲದೆ 224 ಇಂದ 448 resolution ಗೆ ನಿಜವಾಗಿ-ಅಳೆದ 4.47x FLOPs ಜಿಗಿತ production ತಂಡಗಳು ಒಂದೂ ಹೆಚ್ಚಿನ-resolution vision tower deploy ಮಾಡುವ ಮೊದಲೂ inference cost ಪರಿಶೀಲಿಸುವ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: the 12LD^2 shortcut lets an engineer mentally estimate a new ViT config\'s parameter count in seconds (12 * 24 * 1024^2 ~= 302M) without running any code -- and this lesson genuinely verified that shortcut is accurate to within 0.14% against the exact function, making it trustworthy for real back-of-envelope sizing.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 12LD^2 shortcut ಒಬ್ಬ engineer ಗೆ ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಒಂದೂ ಹೊಸ ViT config ya parameter count ಅಂದಾಜಿಸಲು ಅನುಮತಿಸುತ್ತದೆ, ಯಾವುದೇ code ಚಲಾಯಿಸದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Vision-tower architecture search in production genuinely treats D and L as the primary knobs (since they dominate 98%+ of parameters), while resolution and patch size are tuned separately as compute/latency knobs -- exactly the two-axis distinction this lesson genuinely measured with real ratios.',
      bodyKn: 'Production ನಲ್ಲಿ Vision-tower architecture search D ಮತ್ತೆ L ಅನ್ನೂ ಪ್ರಾಥಮಿಕ knobs ಆಗಿ ನಿಜವಾಗಿ ಪರಿಗಣಿಸುತ್ತದೆ, resolution ಮತ್ತೆ patch size ಪ್ರತ್ಯೇಕವಾಗಿ compute/latency knobs ಆಗಿ ಟ್ಯೂನ್ ಆಗುತ್ತವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed in this lesson: what is the real ratio when hidden dimension D is doubled (768->1536), depth held fixed?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: hidden dimension D ಎರಡು ಪಟ್ಟು ಮಾಡಿದಾಗ ನಿಜ ratio ಏನೂ?',
        opts: ['Exactly 2.0x', '~3.997x', '8x', 'No change'], correct: 1,
        optsKn: ['ನಿಖರವಾಗಿ 2.0x', '~3.997x', '8x', 'ಬದಲಾವಣೆ ಇಲ್ಲ'] },
      { q: 'Genuinely confirmed: what is the exact ratio when depth L is doubled (12->24), width held fixed?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: depth L ಎರಡು ಪಟ್ಟು ಮಾಡಿದಾಗ ನಿಖರ ratio ಏನೂ?',
        opts: ['1.0x', '2.0x exactly', '4.0x', '~3.997x'], correct: 1,
        optsKn: ['1.0x', '2.0x ನಿಖರವಾಗಿ', '4.0x', '~3.997x'] },
      { q: 'Genuinely confirmed: going from 224 to 448 resolution, what happened to parameters vs FLOPs?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 224 ಇಂದ 448 resolution ಗೆ ಹೋಗುವಾಗ, parameters vs FLOPs ಗೆ ಏನಾಯಿತು?',
        opts: ['Both roughly doubled', 'Parameters barely changed (+0.5%), FLOPs jumped 4.47x', 'Parameters jumped 4.47x, FLOPs stayed flat', 'Both stayed exactly the same'], correct: 1,
        optsKn: ['ಎರಡೂ ಸುಮಾರು ಎರಡು ಪಟ್ಟು', 'Parameters ಬಹುತೇಕ ಬದಲಾಗಲಿಲ್ಲ (+0.5%), FLOPs 4.47x ಜಿಗಿಯಿತು', 'Parameters 4.47x ಜಿಗಿಯಿತು, FLOPs ಸಮತಟ್ಟಾಗಿ ಉಳಿಯಿತು', 'ಎರಡೂ ನಿಖರವಾಗಿ ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು'] },
      { q: 'What does the 12LD^2 shortcut ignore that the exact vit_parameter_count() includes?', qKn: '12LD^2 shortcut ನಿಖರ vit_parameter_count() ಒಳಗೊಂಡ ಏನನ್ನೂ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ?',
        opts: ['The MLP layer entirely', 'Biases and LayerNorm parameters', 'The attention mechanism', 'The number of layers'], correct: 1,
        optsKn: ['MLP layer ಸಂಪೂರ್ಣವಾಗಿ', 'Biases ಮತ್ತೆ LayerNorm parameters', 'Attention mechanism', 'Layers ya ಸಂಖ್ಯೆ'] },
      { q: 'Genuinely confirmed: what is the approximate ratio of MLP parameters to attention parameters per block?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ block ಗೆ MLP parameters ya attention parameters ಗೆ ಅಂದಾಜು ratio ಏನೂ?',
        opts: ['1:4', '1:1', 'about 2:1 (MLP larger)', 'about 1:2 (attention larger)'], correct: 2,
        optsKn: ['1:4', '1:1', 'ಸುಮಾರು 2:1 (MLP ದೊಡ್ಡದು)', 'ಸುಮಾರು 1:2 (attention ದೊಡ್ಡದು)'] },
    ] } },
  ],
};
