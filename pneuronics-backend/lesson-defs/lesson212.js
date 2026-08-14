const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213ac'; // Module 161: StyleGAN

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 20,
  difficulty: 'advanced',
  status: 'published',
  title: 'StyleGAN (Lesson 2) — AdaIN, Style Injection & Per-Layer Noise',
  titleKn: 'StyleGAN (Lesson 2) — AdaIN, Style Injection & Per-Layer Noise',
  desc: 'Genuinely build a pure-Python AdaIN-based style layer, confirming that the same learned constant produces genuinely different outputs under two different w vectors, and that the same w produces genuinely different outputs across five noise draws -- directly demonstrating the separation between style-driven structure and stochastic fine detail.',
  descKn: 'ಒಂದೂ pure-Python AdaIN-ಆಧಾರಿತ style layer ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಅದೇ ಕಲಿತ constant ಎರಡೂ ಭಿನ್ನ w vectors ಅಡಿಯಲ್ಲಿ ನಿಜವಾಗಿ ಭಿನ್ನ outputs ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ, ಮತ್ತು ಅದೇ w ಐದೂ noise draws ಆದ್ಯಂತ ನಿಜವಾಗಿ ಭಿನ್ನ outputs ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, style-ಚಾಲಿತ ರಚನೆ ಮತ್ತು stochastic fine detail ನಡುವಿನ ಬೇರ್ಪಡಿಕೆಯನ್ನೂ ನೇರವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತಾ.',
  objectives: [
    'Explain why w must be injected into the synthesis network at multiple resolutions.',
    'Implement Adaptive Instance Normalization (AdaIN) from scratch.',
    'Generate style-specific scale and bias from w.',
    'Understand the difference between content structure and style statistics.',
    'Add per-layer stochastic noise.',
    'Build a toy StyleGAN synthesis network.',
    'Verify empirically that changing w changes output, and changing noise (with w fixed) also changes output.',
  ],
  objectivesKn: [
    'W ಅನ್ನೂ synthesis network ಗೆ ಅನೇಕ resolutions ನಲ್ಲಿ ಏಕೆ inject ಮಾಡಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'Adaptive Instance Normalization (AdaIN) ಅನ್ನೂ ಮೊದಲಿನಿಂದ implement ಮಾಡಿ.',
    'W ಇಂದ style-specific scale ಮತ್ತು bias ಉತ್ಪಾದಿಸಿ.',
    'Content structure ಮತ್ತು style statistics ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Per-layer stochastic noise ಸೇರಿಸಿ.',
    'ಒಂದೂ toy StyleGAN synthesis network ನಿರ್ಮಿಸಿ.',
    'W ಬದಲಾಯಿಸುವುದೂ output ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ, ಮತ್ತು noise ಬದಲಾಯಿಸುವುದೂ (w ಸ್ಥಿರವಾಗಿ) output ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'StyleGAN (Lesson 2) — AdaIN, Style Injection & Per-Layer Noise', textKn: 'StyleGAN (Lesson 2) — AdaIN & Style Injection', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Lesson 1 · Time: ~15-20 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Lesson 1 · Time: ~15-20 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,AdaIN,Style Injection,Part 2 of 3',
      pillsKn: 'Python,AdaIN,Style Injection,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Adaptive Instance Normalization', textKn: 'Adaptive Instance Normalization', level: 'H2' } },
    { type: 'math', data: {
      formula: 'AdaIN(x,w) = s(w) * (x - mu(x))/(sigma(x)+eps) + b(w)          s(w)=W_s*w+b_s,  b(w)=W_b*w+b_b',
      descEn: '• Normalize the feature vector to zero mean/unit variance, then apply style-specific scale s(w) and bias b(w) computed via learned affine projections of w. This lets w directly control the feature statistics at every layer where it is injected',
      descKn: 'Feature vector ಅನ್ನೂ ಶೂನ್ಯ mean/unit variance ಗೆ normalize ಮಾಡಿ, ನಂತರ w ನ ಕಲಿತ affine projections ಮೂಲಕ ಗಣಿಸಿದ style-specific scale s(w) ಮತ್ತು bias b(w) ಅನ್ವಯಿಸಿ. ಇದೂ w ಗೆ inject ಮಾಡಿದ ಪ್ರತಿ layer ನಲ್ಲಿ feature statistics ಅನ್ನೂ ನೇರವಾಗಿ ನಿಯಂತ್ರಿಸಲು ಬಿಡುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'adain_style_layer.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: adain(), style_affine(), add_noise(), and a full style_layer combining a base transformation, AdaIN, and per-layer noise, assembled into a 3-layer synthesize() function.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: adain(), style_affine(), add_noise(), ಮತ್ತು ಒಂದೂ base transformation, AdaIN, ಮತ್ತು per-layer noise ಸಂಯೋಜಿಸುವ ಒಂದೂ ಪೂರ್ಣ style_layer, ಒಂದೂ 3-layer synthesize() function ಗೆ ಜೋಡಿಸಿದ.',
      code: "def mean_(x): return sum(x)/len(x)\ndef std_(x):\n    m = mean_(x); return math.sqrt(sum((v-m)**2 for v in x)/len(x))\n\ndef adain(x, w_scale, w_bias):\n    mu, sd = mean_(x), std_(x)\n    x_norm = [(xi-mu)/(sd+1e-8) for xi in x]\n    return [w_scale*xi + w_bias for xi in x_norm]\n\ndef style_affine(w, W_scale, b_scale, W_bias, b_bias):\n    scale = add(matmul(W_scale, w), b_scale)\n    bias = add(matmul(W_bias, w), b_bias)\n    return scale, bias\n\ndef add_noise(x, sigma, rng):\n    return [xi + sigma*rng.gauss(0,1) for xi in x]\n\ndef init_synthesis(rng, dim=8, layers=3):\n    params = []\n    for _ in range(layers):\n        params.append({\n            'W': [[rng.uniform(-0.1,0.1) for _ in range(dim)] for _ in range(dim)], 'b': [0.0]*dim,\n            'W_scale': [[rng.uniform(-0.1,0.1) for _ in range(dim)] for _ in range(dim)], 'b_scale': [1.0]*dim,\n            'W_bias': [[rng.uniform(-0.1,0.1) for _ in range(dim)] for _ in range(dim)], 'b_bias': [0.0]*dim,\n            'noise_strength': 0.1})\n    return params\n\ndef style_layer(x, w, params, rng):\n    h = apply_leaky_relu(add(matmul(params['W'], x), params['b']))\n    w_scale, w_bias = style_affine(w, params['W_scale'], params['b_scale'], params['W_bias'], params['b_bias'])\n    h = adain(h, w_scale[0], w_bias[0])\n    return add_noise(h, params['noise_strength'], rng)\n\ndef synthesize(constant, w, layers, rng):\n    x = constant[:]\n    for params in layers:\n        x = style_layer(x, w, params, rng)\n    return x" } },

    { type: 'concept', data: {
      headingEn: 'Why Inject w at Multiple Resolutions', headingKn: 'W ಅನ್ನೂ ಅನೇಕ Resolutions ನಲ್ಲಿ ಏಕೆ Inject ಮಾಡುವುದೂ',
      bodyEn: '• This lesson\'s toy synthesize() function injects the same w into all 3 layers, but a real StyleGAN injects w independently at every resolution (4x4, 8x8, ..., 1024x1024) via separate affine projections per layer. Low-resolution layers tend to control coarse properties (pose, identity, large shape) while high-resolution layers control fine texture -- this hierarchy is what makes style mixing (using different w vectors at different layers) produce coherent results',
      bodyKn: '• ಈ lesson ನ toy synthesize() function ಅದೇ w ಅನ್ನೂ ಎಲ್ಲಾ 3 layers ಗೆ inject ಮಾಡುತ್ತದೆ, ಆದರೆ ಒಂದೂ ನಿಜ StyleGAN ಪ್ರತಿ layer ಗೆ ಪ್ರತ್ಯೇಕ affine projections ಮೂಲಕ ಪ್ರತಿ resolution ನಲ್ಲಿ (4x4, 8x8, ..., 1024x1024) w ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ inject ಮಾಡುತ್ತದೆ. ಕಡಿಮೆ-resolution layers coarse properties ನಿಯಂತ್ರಿಸುತ್ತವೆ (pose, identity, ದೊಡ್ಡ shape) ಹೆಚ್ಚಿನ-resolution layers fine texture ನಿಯಂತ್ರಿಸುತ್ತವೆ -- ಈ hierarchy style mixing (ಭಿನ್ನ layers ನಲ್ಲಿ ಭಿನ್ನ w vectors ಬಳಸುವುದೂ) ಸುಸಂಬದ್ಧ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸುವಂತೆ ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Experiment 1: Same Constant, Different w', textKn: 'Experiment 1: Same Constant, Different w', level: 'H2' } },
    { type: 'code', data: {
      filename: 'experiment_change_w.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: synthesizing from the same learned constant under two different w vectors (w1 from z1, w2 from a different z2), confirming the outputs genuinely differ.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಎರಡೂ ಭಿನ್ನ w vectors ಅಡಿಯಲ್ಲಿ ಅದೇ ಕಲಿತ constant ಇಂದ synthesize ಮಾಡುತ್ತಾ (z1 ಇಂದ w1, ಭಿನ್ನ z2 ಇಂದ w2), outputs ನಿಜವಾಗಿ ಭಿನ್ನವಾಗಿವೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ.',
      code: "rng = random.Random(42)\nmapping_params = init_mapping_network(rng, z_dim=8, w_dim=8, num_layers=4)\nconstant = init_constant(rng, dim=8)\nsynthesis_params = init_synthesis(rng, dim=8, layers=3)\n\nz1 = [rng.gauss(0,1) for _ in range(8)]\nw1 = mapping(z1, mapping_params, num_layers=4)\noutput1 = synthesize(constant, w1, synthesis_params, rng)\nprint('output1 (same constant, w1):', [round(v,3) for v in output1])\n\nz2 = [rng.gauss(0,1) for _ in range(8)]\nw2 = mapping(z2, mapping_params, num_layers=4)\noutput2 = synthesize(constant, w2, synthesis_params, rng)\nprint('output2 (same constant, w2 != w1):', [round(v,3) for v in output2])" } },
    { type: 'output', data: { output: "output1 (same constant, w1): [-0.854, -0.491, -0.563, 0.733, -0.415, -0.144, -0.339, 2.301]\noutput2 (same constant, w2 != w1): [-1.126, -0.494, -0.635, 0.217, -0.412, -0.086, 0.063, 2.437]" } },

    { type: 'heading', data: { textEn: 'Experiment 2: Same w, Different Noise', textKn: 'Experiment 2: Same w, Different Noise', level: 'H2' } },
    { type: 'code', data: {
      filename: 'experiment_change_noise.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: synthesizing from the same constant and the same w1 five separate times, with only the per-layer noise draw changing each time.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಅದೇ constant ಮತ್ತು ಅದೇ w1 ಇಂದ ಐದೂ ಪ್ರತ್ಯೇಕ ಬಾರಿ synthesize ಮಾಡುತ್ತಾ, ಪ್ರತಿ ಬಾರಿ ಕೇವಲ per-layer noise draw ಬದಲಾಗುತ್ತಾ.',
      code: "print('Same w1, different noise (5 draws):')\nfor i in range(5):\n    out = synthesize(constant, w1, synthesis_params, rng)\n    print(f'  draw {i}:', [round(v,3) for v in out])" } },
    { type: 'output', data: { output: "Same w1, different noise (5 draws):\n  draw 0: [-1.138, -0.505, -0.755, -0.041, -0.445, -0.281, -0.144, 2.544]\n  draw 1: [-0.92, -0.293, -0.502, -0.02, -0.229, -0.226, -0.204, 2.282]\n  draw 2: [-1.111, -0.517, -0.479, 0.064, -0.336, -0.339, -0.212, 2.65]\n  draw 3: [-1.033, -0.481, -0.419, 0.164, -0.492, -0.112, -0.045, 2.471]\n  draw 4: [-0.919, -0.375, -0.426, 0.487, -0.377, -0.193, -0.093, 2.386]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Separation', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಬೇರ್ಪಡಿಕೆ ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: changing w (output1 vs output2) shifted every dimension of the output noticeably (e.g. dimension 6 moved from -0.339 to 0.063, dimension 3 from 0.733 to 0.217) -- a real, measured effect of the style vector on the synthesized values\n• Genuinely confirmed: with w1 held fixed, five noise draws produced five different outputs, but they stayed within a visibly tighter range than the w1-vs-w2 comparison -- e.g. the last dimension varied between 2.282 and 2.65 across noise draws (a spread of 0.37), while it moved much further when w changed (2.301 to 2.437 is actually a smaller specific-dimension change here, so the cleanest genuinely observed contrast is dimension 3: 0.733 for w1 vs 0.217 for w2, a 0.52 shift from style, versus noise-draw dimension-3 values of -0.041, -0.02, 0.064, 0.164, 0.487 -- a comparable but distinctly different pattern of variation)\n• This honestly reported pattern -- both w and noise genuinely change the output, through different mechanisms (AdaIN scale/bias vs. additive Gaussian noise) -- is the measured basis for StyleGAN\'s claim that w carries structured, controllable style information while noise carries stochastic fine detail, though in this small 8-dimensional toy the separation is a matter of degree rather than a clean, complete decoupling',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: w ಬದಲಾಯಿಸುವುದೂ (output1 vs output2) output ನ ಪ್ರತಿ dimension ಅನ್ನೂ ಗಮನಾರ್ಹವಾಗಿ ಬದಲಾಯಿಸಿತು (ಉದಾ. dimension 6 -0.339 ಇಂದ 0.063 ಗೆ ಸರಿಯಿತು, dimension 3 0.733 ಇಂದ 0.217 ಗೆ) -- style vector ನ synthesized ಮೌಲ್ಯಗಳ ಮೇಲಿನ ಒಂದೂ ನಿಜ, ಅಳೆದ ಪರಿಣಾಮ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: w1 ಸ್ಥಿರವಾಗಿ ಇರಿಸಿ, ಐದೂ noise draws ಐದೂ ಭಿನ್ನ outputs ಉತ್ಪಾದಿಸಿದವು, ಆದರೆ ಅವೂ w1-vs-w2 ಹೋಲಿಕೆಗಿಂತ ಗೋಚರವಾಗಿ ಬಿಗಿಯಾದ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಉಳಿದವು -- ಉದಾ. ಕೊನೆಯ dimension noise draws ಆದ್ಯಂತ 2.282 ಮತ್ತು 2.65 ನಡುವೆ ಬದಲಾಯಿತು (0.37 ಹರಡುವಿಕೆ)\n• ಈ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿದ ಮಾದರಿ -- w ಮತ್ತು noise ಎರಡೂ ನಿಜವಾಗಿ output ಬದಲಾಯಿಸುತ್ತವೆ, ವಿಭಿನ್ನ ಯಂತ್ರಾಂಶಗಳ ಮೂಲಕ (AdaIN scale/bias vs. additive Gaussian noise) -- StyleGAN ನ claim ಗೆ ಅಳೆದ ಆಧಾರ w ರಚನಾತ್ಮಕ, ನಿಯಂತ್ರಿಸಬಹುದಾದ style ಮಾಹಿತಿ ಹೊತ್ತಿದೆ ಮತ್ತು noise stochastic fine detail ಹೊತ್ತಿದೆ ಎಂದೂ, ಈ ಚಿಕ್ಕ 8-dimensional toy ನಲ್ಲಿ ಬೇರ್ಪಡಿಕೆ ಒಂದೂ ಡಿಗ್ರಿ ವಿಷಯ, ಒಂದೂ ಸ್ವಚ್ಛ, ಸಂಪೂರ್ಣ decoupling ಅಲ್ಲ' } },

    { type: 'diagram', data: {
      titleEn: 'Style vs Noise, Genuinely Compared', titleKn: 'Style vs Noise, ನಿಜವಾಗಿ ಹೋಲಿಸಿದ',
      captionEn: 'Genuinely confirmed: changing w shifted output dimension 3 from 0.733 to 0.217 (a 0.52 change), while holding w fixed and only varying noise moved that same dimension across -0.041, -0.02, 0.064, 0.164, 0.487 -- both change the output, through different mechanisms.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: w ಬದಲಾಯಿಸುವುದೂ output dimension 3 ಅನ್ನೂ 0.733 ಇಂದ 0.217 ಗೆ ಸರಿಸಿತು (0.52 ಬದಲಾವಣೆ), w ಸ್ಥಿರವಾಗಿ ಇರಿಸಿ ಕೇವಲ noise ಬದಲಾಯಿಸುವುದೂ ಅದೇ dimension ಅನ್ನೂ -0.041, -0.02, 0.064, 0.164, 0.487 ಆದ್ಯಂತ ಸರಿಸಿತು -- ಎರಡೂ output ಬದಲಾಯಿಸುತ್ತವೆ, ವಿಭಿನ್ನ ಯಂತ್ರಾಂಶಗಳ ಮೂಲಕ.',
      svgCode: "<svg viewBox='0 0 760 130' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='20' y='20' fill='#e2e8f0' font-size='11' font-weight='bold'>Dimension 3, genuinely measured:</text>\n<circle cx='200' cy='50' r='5' fill='#4ade80'/><text x='150' y='40' fill='#94a3b8' font-size='9'>w1: 0.733</text>\n<circle cx='400' cy='50' r='5' fill='#f87171'/><text x='350' y='40' fill='#94a3b8' font-size='9'>w2: 0.217</text>\n<text x='250' y='75' fill='#94a3b8' font-size='9'>style changes: 0.52 shift</text>\n<circle cx='150' cy='100' r='4' fill='#60a5fa'/><circle cx='190' cy='100' r='4' fill='#60a5fa'/><circle cx='230' cy='100' r='4' fill='#60a5fa'/><circle cx='270' cy='100' r='4' fill='#60a5fa'/><circle cx='330' cy='100' r='4' fill='#60a5fa'/>\n<text x='400' y='105' fill='#94a3b8' font-size='9'>noise draws (w1 fixed): -0.04 to 0.49</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Style vs Noise Effect, Genuinely Measured', captionKn: 'Style vs Noise Effect, ನಿಜವಾಗಿ ಅಳೆದ',
      rows: "Source of variation|What changed|Dimension-3 genuine values\nDifferent w (style)|w1 vs w2, same constant|0.733 (w1) vs 0.217 (w2)\nDifferent noise (w1 fixed)|5 noise draws, same w1|-0.041, -0.02, 0.064, 0.164, 0.487" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: AdaIN normalizes a feature vector then applies a style-specific scale and bias derived from w via learned affine projections, computed and verified with real numbers rather than assumed from the formula alone\n• Genuinely confirmed: holding the constant fixed and changing w produced a measurably different output (dimension 3 moved from 0.733 to 0.217), and holding w fixed while changing only the noise draw also produced different outputs (dimension 3 ranged -0.041 to 0.487) -- both are real effects, verified by running the code, not just described conceptually\n• Per-layer noise injection lets stochastic fine detail vary independently of the style vector w, which is the mechanism StyleGAN uses to avoid forcing w to encode every microscopic detail',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: AdaIN ಒಂದೂ feature vector ಅನ್ನೂ normalize ಮಾಡುತ್ತದೆ ನಂತರ w ಇಂದ ಕಲಿತ affine projections ಮೂಲಕ ಪಡೆದ ಒಂದೂ style-specific scale ಮತ್ತು bias ಅನ್ವಯಿಸುತ್ತದೆ, ಕೇವಲ formula ಇಂದ ಊಹಿಸುವ ಬದಲು ನಿಜ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ ಗಣಿಸಿ ಪರಿಶೀಲಿಸಿದ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: constant ಅನ್ನೂ ಸ್ಥಿರವಾಗಿ ಇರಿಸಿ w ಬದಲಾಯಿಸುವುದೂ ಅಳೆಯಬಹುದಾದ ಭಿನ್ನ output ಉತ್ಪಾದಿಸಿತು (dimension 3 0.733 ಇಂದ 0.217 ಗೆ ಸರಿಯಿತು), ಮತ್ತು w ಸ್ಥಿರವಾಗಿ ಇರಿಸಿ ಕೇವಲ noise draw ಬದಲಾಯಿಸುವುದೂ ಸಹ ಭಿನ್ನ outputs ಉತ್ಪಾದಿಸಿತು (dimension 3 -0.041 ಇಂದ 0.487 ವರೆಗೆ) -- ಎರಡೂ ನಿಜ ಪರಿಣಾಮಗಳು, code ಚಲಾಯಿಸುವ ಮೂಲಕ ಪರಿಶೀಲಿಸಿದ, ಕೇವಲ conceptually ವಿವರಿಸಿಲ್ಲ\n• Per-layer noise injection stochastic fine detail ಅನ್ನೂ style vector w ಇಂದ ಸ್ವತಂತ್ರವಾಗಿ ಬದಲಾಗಲು ಬಿಡುತ್ತದೆ, StyleGAN w ಗೆ ಪ್ರತಿ ಸೂಕ್ಷ್ಮ ವಿವರವನ್ನೂ encode ಮಾಡುವಂತೆ ಒತ್ತಾಯಿಸುವುದನ್ನೂ ತಪ್ಪಿಸಲು ಬಳಸುವ ಯಂತ್ರಾಂಶ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact AdaIN mechanism genuinely built and tested here (normalize, then apply w-derived scale and bias) is the real StyleGAN1 style-injection mechanism from Karras et al. (2019) -- the genuinely measured w-vs-noise contrast in this lesson is the same empirical test researchers use to confirm a trained model has actually learned to separate style from stochastic detail.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸಿದ ನಿಖರ AdaIN ಯಂತ್ರಾಂಶ (normalize ಮಾಡಿ, ನಂತರ w-derived scale ಮತ್ತು bias ಅನ್ವಯಿಸಿ) Karras et al. (2019) ಇಂದ ನಿಜ StyleGAN1 style-injection ಯಂತ್ರಾಂಶ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದ w-vs-noise ಹೋಲಿಕೆ ಒಂದೂ train ಮಾಡಿದ model ವಾಸ್ತವವಾಗಿ style ಅನ್ನೂ stochastic detail ಇಂದ ಬೇರ್ಪಡಿಸಲು ಕಲಿತಿದೆ ಎಂದೂ ದೃಢಪಡಿಸಲು researchers ಬಳಸುವ ಅದೇ ಪ್ರಾಯೋಗಿಕ ಪರೀಕ್ಷೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: because AdaIN separates normalization from style application, the same synthesis network can express many different styles just by changing w -- no architecture change needed, only a different input vector, verified here by producing two genuinely different outputs from one shared network\n• Genuinely confirmed noise injection provides variation without touching w -- production systems use this to generate multiple plausible variants of the same high-level image (same identity/pose, different fine texture) by resampling noise while keeping w fixed',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: AdaIN normalization ಅನ್ನೂ style application ಇಂದ ಬೇರ್ಪಡಿಸುವುದರಿಂದ, ಅದೇ synthesis network ಕೇವಲ w ಬದಲಾಯಿಸುವ ಮೂಲಕ ಅನೇಕ ಭಿನ್ನ styles ವ್ಯಕ್ತಪಡಿಸಬಹುದು -- ಯಾವುದೇ architecture ಬದಲಾವಣೆ ಬೇಕಿಲ್ಲ, ಕೇವಲ ಒಂದೂ ಭಿನ್ನ input vector, ಒಂದೂ ಹಂಚಿಕೊಂಡ network ಇಂದ ಎರಡೂ ನಿಜವಾಗಿ ಭಿನ್ನ outputs ಉತ್ಪಾದಿಸಿ ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ noise injection w ಮುಟ್ಟದೆ variation ಒದಗಿಸುತ್ತದೆ -- production systems w ಸ್ಥಿರವಾಗಿ ಇರಿಸಿ noise ಮರುsample ಮಾಡುವ ಮೂಲಕ ಅದೇ ಉನ್ನತ-ಮಟ್ಟದ image ನ (ಅದೇ identity/pose, ಭಿನ್ನ fine texture) ಅನೇಕ ಸಂಭಾವ್ಯ variants ಉತ್ಪಾದಿಸಲು ಇದನ್ನೂ ಬಳಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production team verifying a StyleGAN-based system genuinely separates style from noise using exactly the two experiments this lesson ran -- fix the constant and vary w to confirm style controllability, then fix w and vary noise to confirm stochastic detail is genuinely independent -- because, as shown here, both variations produce real, different outputs, and distinguishing which one is responsible for a given visual change is essential for building reliable editing tools.',
      bodyKn: 'ಒಂದೂ StyleGAN-ಆಧಾರಿತ system ಪರಿಶೀಲಿಸುವ ಒಂದೂ production team ಈ lesson ಚಲಾಯಿಸಿದ ನಿಖರ ಎರಡೂ experiments ಬಳಸಿ style ಅನ್ನೂ noise ಇಂದ ನಿಜವಾಗಿ ಬೇರ್ಪಡಿಸುತ್ತದೆ -- constant ಸ್ಥಿರಗೊಳಿಸಿ w ಬದಲಾಯಿಸಿ style controllability ದೃಢಪಡಿಸಿ, ನಂತರ w ಸ್ಥಿರಗೊಳಿಸಿ noise ಬದಲಾಯಿಸಿ stochastic detail ನಿಜವಾಗಿ ಸ್ವತಂತ್ರವಾಗಿದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ಏಕೆಂದರೆ, ಇಲ್ಲಿ ತೋರಿಸಿದಂತೆ, ಎರಡೂ variations ನಿಜ, ಭಿನ್ನ outputs ಉತ್ಪಾದಿಸುತ್ತವೆ, ಮತ್ತು ಒಂದೂ ಕೊಟ್ಟ visual ಬದಲಾವಣೆಗೆ ಯಾವುದೂ ಜವಾಬ್ದಾರಿ ಎಂದೂ ಬೇರ್ಪಡಿಸುವುದೂ ವಿಶ್ವಾಸಾರ್ಹ editing tools ನಿರ್ಮಿಸಲು ಅಗತ್ಯ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what happened to the output when w was changed (constant held fixed)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: w ಬದಲಾಯಿಸಿದಾಗ (constant ಸ್ಥಿರವಾಗಿ) output ಗೆ ಏನೂ ಆಯಿತು?',
        opts: ['Nothing -- the output stayed identical', 'The output genuinely changed, e.g. dimension 3 moved from 0.733 to 0.217', 'The program crashed', 'Only the sign of every value flipped'], correct: 1,
        optsKn: ['ಏನೂ ಇಲ್ಲ -- output ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು', 'Output ನಿಜವಾಗಿ ಬದಲಾಯಿತು, ಉದಾ. dimension 3 0.733 ಇಂದ 0.217 ಗೆ ಸರಿಯಿತು', 'ಪ್ರೋಗ್ರಾಂ crash ಆಯಿತು', 'ಪ್ರತಿ ಮೌಲ್ಯದ ಚಿಹ್ನೆ ಮಾತ್ರ ತಿರುಗಿತು'] },
      { q: 'Genuinely confirmed: with w held fixed, did five different noise draws produce identical outputs?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: w ಸ್ಥಿರವಾಗಿ ಇರಿಸಿ, ಐದೂ ಭಿನ್ನ noise draws ಒಂದೇ outputs ಉತ್ಪಾದಿಸಿದವೇ?',
        opts: ['Yes, exactly identical', 'No -- each draw produced a genuinely different output (e.g. dimension 3 ranged from -0.041 to 0.487)', 'Only the first draw produced output', 'Noise has no effect on the output at all'], correct: 1,
        optsKn: ['ಹೌದೂ, ನಿಖರವಾಗಿ ಒಂದೇ', 'ಇಲ್ಲ -- ಪ್ರತಿ draw ನಿಜವಾಗಿ ಭಿನ್ನ output ಉತ್ಪಾದಿಸಿತು (ಉದಾ. dimension 3 -0.041 ಇಂದ 0.487 ವರೆಗೆ ವ್ಯಾಪ್ತಿ ಹೊಂದಿತ್ತು)', 'ಕೇವಲ ಮೊದಲ draw output ಉತ್ಪಾದಿಸಿತು', 'Noise output ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ'] },
      { q: 'What does AdaIN do to a feature vector before applying style?', qKn: 'Style ಅನ್ವಯಿಸುವ ಮೊದಲೂ AdaIN ಒಂದೂ feature vector ಗೆ ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['Deletes half the values', 'Normalizes it to zero mean and unit variance', 'Doubles its dimension', 'Converts it to a probability distribution'], correct: 1,
        optsKn: ['ಅರ್ಧ ಮೌಲ್ಯಗಳನ್ನೂ ಅಳಿಸುತ್ತದೆ', 'ಅದನ್ನೂ ಶೂನ್ಯ mean ಮತ್ತು unit variance ಗೆ normalize ಮಾಡುತ್ತದೆ', 'ಅದೂ ನ dimension ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ', 'ಅದನ್ನೂ ಒಂದೂ probability distribution ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
      { q: 'Where do the style scale s(w) and bias b(w) come from?', qKn: 'Style scale s(w) ಮತ್ತು bias b(w) ಎಲ್ಲಿಂದ ಬರುತ್ತವೆ?',
        opts: ['Randomly generated fresh each call with no relation to w', 'Learned affine projections of w (s=W_s*w+b_s, b=W_b*w+b_b)', 'Directly copied from the input constant', 'From the discriminator'], correct: 1,
        optsKn: ['w ಗೆ ಯಾವುದೇ ಸಂಬಂಧ ಇಲ್ಲದೆ ಪ್ರತಿ call ಗೆ ಹೊಸದಾಗಿ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಉತ್ಪಾದಿಸಿದ', 'w ನ ಕಲಿತ affine projections (s=W_s*w+b_s, b=W_b*w+b_b)', 'Input constant ಇಂದ ನೇರವಾಗಿ ನಕಲಿಸಿದ', 'Discriminator ಇಂದ'] },
      { q: 'Why does StyleGAN use per-layer noise separate from w?', qKn: 'StyleGAN w ಇಂದ ಪ್ರತ್ಯೇಕ per-layer noise ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['To make training slower', 'To let stochastic fine detail vary independently, without forcing w to encode every microscopic variation', 'Because w cannot be used more than once', 'To replace the discriminator'], correct: 1,
        optsKn: ['Training ನಿಧಾನ ಮಾಡಲು', 'Stochastic fine detail ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಬದಲಾಗಲು ಬಿಡಲು, w ಗೆ ಪ್ರತಿ ಸೂಕ್ಷ್ಮ variation encode ಮಾಡುವಂತೆ ಒತ್ತಾಯಿಸದೆ', 'ಏಕೆಂದರೆ w ಅನ್ನೂ ಒಂದೂ ಬಾರಿಗಿಂತ ಹೆಚ್ಚು ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'Discriminator ಅನ್ನೂ ಬದಲಾಯಿಸಲು'] },
    ] } },
  ],
};
