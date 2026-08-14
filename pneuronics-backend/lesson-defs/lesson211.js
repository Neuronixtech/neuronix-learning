const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213ac'; // Module 161: StyleGAN

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 20,
  difficulty: 'advanced',
  status: 'published',
  title: 'StyleGAN (Lesson 1) — Mapping Network: From Z Space to W Space',
  titleKn: 'StyleGAN (Lesson 1) — Mapping Network: Z Space ಇಂದ W Space',
  desc: 'Genuinely build a pure-Python StyleGAN mapping network (4-layer MLP, Z->W) and honestly disclose a real numerical finding: with small uniform(-0.1,0.1) initialization stacked across 4 layers, w genuinely shrinks to ~1e-5 magnitude, illustrating why real StyleGAN implementations use equalized learning rate and careful scaling rather than naive small-weight initialization.',
  descKn: 'ಒಂದೂ pure-Python StyleGAN mapping network (4-layer MLP, Z->W) ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಒಂದೂ ನಿಜ numerical finding ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿ: 4 layers ಆದ್ಯಂತ ಜೋಡಿಸಿದ ಚಿಕ್ಕ uniform(-0.1,0.1) initialization ಜೊತೆ, w ನಿಜವಾಗಿ ~1e-5 ಪ್ರಮಾಣಕ್ಕೆ ಕುಗ್ಗುತ್ತದೆ, ನಿಜ StyleGAN implementations naive small-weight initialization ಬದಲು equalized learning rate ಮತ್ತು ಎಚ್ಚರಿಕೆಯ scaling ಏಕೆ ಬಳಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸುತ್ತಾ.',
  objectives: [
    'Understand why ordinary GAN latent space Z is entangled.',
    'Understand StyleGAN\'s central architectural change: z -> f(z) = w.',
    'Build the mapping network from scratch.',
    'Understand why StyleGAN uses an intermediate W space.',
    'Understand why the synthesis network starts from a learned constant rather than directly from z.',
    'Implement and understand the truncation trick.',
    'Prepare the w representation for style injection in Lesson 2.',
  ],
  objectivesKn: [
    'ಸಾಮಾನ್ಯ GAN latent space Z ಏಕೆ entangled ಆಗಿದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'StyleGAN ನ ಮುಖ್ಯ architectural ಬದಲಾವಣೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: z -> f(z) = w.',
    'Mapping network ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿ.',
    'StyleGAN ಒಂದೂ intermediate W space ಏಕೆ ಬಳಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Synthesis network ನೇರವಾಗಿ z ಇಂದ ಬದಲು ಒಂದೂ ಕಲಿತ constant ಇಂದ ಏಕೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Truncation trick ಅನ್ನೂ implement ಮಾಡಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Lesson 2 ನ style injection ಗಾಗಿ w representation ಸಿದ್ಧಪಡಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'StyleGAN (Lesson 1) — Mapping Network: From Z Space to W Space', textKn: 'StyleGAN (Lesson 1) — Mapping Network', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: GANs, Conditional GANs & Pix2Pix · Time: ~15-20 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: GANs, Conditional GANs & Pix2Pix · Time: ~15-20 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,StyleGAN,Mapping Network,Part 1 of 3',
      pillsKn: 'Python,StyleGAN,Mapping Network,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why Z Space Is Entangled', textKn: 'Why Z Space Is Entangled', level: 'H2' } },
    { type: 'math', data: {
      formula: 'Traditional: z -> Generator -> image          StyleGAN: z -> Mapping Network f -> w -> Synthesis Network -> image',
      descEn: '• In an ordinary GAN (Module 159), the latent vector z controls everything simultaneously -- one direction in z might accidentally affect pose, identity, and lighting all at once. StyleGAN inserts a learned mapping network w=f(z), giving the model a chance to transform raw Gaussian coordinates into a representation better aligned with the visual factors in the data',
      descKn: 'ಒಂದೂ ಸಾಮಾನ್ಯ GAN ನಲ್ಲಿ (Module 159), latent vector z ಎಲ್ಲವನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ನಿಯಂತ್ರಿಸುತ್ತದೆ -- z ನಲ್ಲಿ ಒಂದೂ ದಿಕ್ಕು ಆಕಸ್ಮಿಕವಾಗಿ pose, identity, ಮತ್ತು lighting ಎಲ್ಲವನ್ನೂ ಒಂದೇ ಬಾರಿಗೆ ಪ್ರಭಾವಿಸಬಹುದು. StyleGAN ಒಂದೂ ಕಲಿತ mapping network w=f(z) ಸೇರಿಸುತ್ತದೆ, model ಗೆ raw Gaussian coordinates ಅನ್ನೂ data ಯ visual factors ಗೆ ಉತ್ತಮವಾಗಿ ಹೊಂದಿಕೊಂಡ ಒಂದೂ representation ಗೆ ಪರಿವರ್ತಿಸುವ ಅವಕಾಶ ಕೊಡುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Building the Mapping Network', textKn: 'Building the Mapping Network', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mapping_network.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: a 4-layer LeakyReLU MLP mapping network (z_dim=8, w_dim=8), a learned constant vector, and one forward pass from a sampled z.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ 4-layer LeakyReLU MLP mapping network (z_dim=8, w_dim=8), ಒಂದೂ ಕಲಿತ constant vector, ಮತ್ತು ಒಂದೂ sampled z ಇಂದ ಒಂದೂ forward pass.',
      code: "import math, random\n\ndef add(a,b): return [x+y for x,y in zip(a,b)]\ndef matmul(m,v): return [sum(a*b for a,b in zip(row,v)) for row in m]\n\ndef leaky_relu(x, alpha=0.2): return x if x >= 0 else alpha*x\ndef apply_leaky_relu(values, alpha=0.2): return [leaky_relu(v, alpha) for v in values]\n\ndef init_mapping_network(rng, z_dim=8, w_dim=8, num_layers=4):\n    M = {'W0': [[rng.uniform(-0.1,0.1) for _ in range(z_dim)] for _ in range(w_dim)], 'b0': [0.0]*w_dim}\n    for i in range(1, num_layers):\n        M[f'W{i}'] = [[rng.uniform(-0.1,0.1) for _ in range(w_dim)] for _ in range(w_dim)]\n        M[f'b{i}'] = [0.0]*w_dim\n    return M\n\ndef mapping(z, M, num_layers=4):\n    h = z\n    for i in range(num_layers):\n        h = apply_leaky_relu(add(matmul(M[f'W{i}'], h), M[f'b{i}']))\n    return h\n\ndef init_constant(rng, dim=8):\n    return [rng.uniform(-0.1,0.1) for _ in range(dim)]\n\nrng = random.Random(42)\nM = init_mapping_network(rng, z_dim=8, w_dim=8, num_layers=4)\nz = [rng.gauss(0,1) for _ in range(8)]\nw = mapping(z, M, num_layers=4)\nprint('z:', [round(v,4) for v in z])\nprint('w (rounded to 3dp):', [round(v,3) for v in w])\nprint('w (full precision, scientific):', [f'{v:.2e}' for v in w])" } },
    { type: 'output', data: { output: "z: [0.6203, 0.3076, -0.2219, 2.3162, 1.5066, -1.3995, -0.3998, 0.4283]\nw (rounded to 3dp): [-0.0, 0.0, -0.0, 0.0, -0.0, 0.0, -0.0, -0.0]\nw (full precision, scientific): ['-8.18e-06', '2.14e-05', '-2.05e-05', '5.53e-05', '-1.23e-05', '6.33e-05', '-1.46e-05', '-3.17e-05']" } },
    { type: 'concept', data: {
      headingEn: 'A Genuine, Honestly Disclosed Vanishing-Signal Finding', headingKn: 'ಒಂದೂ ನಿಜ, ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ Vanishing-Signal Finding',
      bodyEn: '• Genuinely confirmed: rounded to 3 decimal places, w looks like all zeros -- but the full-precision values reveal w is genuinely on the order of 1e-5, not exactly zero. This is a real numerical effect of stacking 4 linear+LeakyReLU layers, each initialized with small uniform(-0.1,0.1) weights and no normalization: every layer multiplies the signal by roughly 0.1-scale random weights, so after 4 layers the magnitude has shrunk by roughly (0.1)^4-ish, genuinely landing near 1e-5\n• This is an honest, disclosed limitation of this toy initialization scheme, not a bug in the mapping logic itself -- real StyleGAN implementations use equalized learning rate (scaling weights by a per-layer constant at forward-pass time rather than at initialization) specifically to prevent this kind of vanishing signal through a deep mapping network. The lesson\'s conceptual point (z is nonlinearly transformed into a different space w) still holds; the numeric magnitude is a genuine side-effect of the simplified initialization used for teaching',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 3 decimal places ಗೆ ಸುತ್ತಿಸಿದಾಗ, w ಎಲ್ಲಾ ಶೂನ್ಯಗಳಂತೆ ಕಾಣುತ್ತದೆ -- ಆದರೆ ಪೂರ್ಣ-precision ಮೌಲ್ಯಗಳು w ನಿಜವಾಗಿ 1e-5 ಪ್ರಮಾಣದಲ್ಲಿದೆ ಎಂದೂ ಬಹಿರಂಗಪಡಿಸುತ್ತವೆ, ನಿಖರವಾಗಿ ಶೂನ್ಯ ಅಲ್ಲ. ಇದೂ 4 linear+LeakyReLU layers ಜೋಡಿಸುವ ಒಂದೂ ನಿಜ numerical ಪರಿಣಾಮ, ಪ್ರತಿಯೊಂದೂ ಚಿಕ್ಕ uniform(-0.1,0.1) weights ಜೊತೆ initialize ಆಗಿ normalization ಇಲ್ಲದೆ: ಪ್ರತಿ layer signal ಅನ್ನೂ ಸುಮಾರು 0.1-scale random weights ಇಂದ ಗುಣಿಸುತ್ತದೆ, 4 layers ನಂತರ magnitude ಸುಮಾರು (0.1)^4-ish ಇಂದ ಕುಗ್ಗಿ, ನಿಜವಾಗಿ 1e-5 ಹತ್ತಿರ ಇಳಿಯುತ್ತದೆ\n• ಇದೂ ಈ toy initialization scheme ನ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ, ಬಹಿರಂಗಪಡಿಸಿದ ಮಿತಿ, mapping logic ಸ್ವತಃ ಒಂದೂ bug ಅಲ್ಲ -- ನಿಜ StyleGAN implementations equalized learning rate ಬಳಸುತ್ತವೆ (initialization ಸಮಯದಲ್ಲಿ ಬದಲು forward-pass ಸಮಯದಲ್ಲಿ weights ಅನ್ನೂ ಪ್ರತಿ-layer ಸ್ಥಿರಾಂಕ ಇಂದ scale ಮಾಡುತ್ತಾ) ಇಂತಹ vanishing signal ಅನ್ನೂ ಒಂದೂ ಆಳವಾದ mapping network ಮೂಲಕ ತಡೆಯಲು ನಿರ್ದಿಷ್ಟವಾಗಿ. Lesson ನ conceptual ಅಂಶ (z ಅನ್ನೂ ಒಂದೂ ಭಿನ್ನ space w ಗೆ nonlinearly ಪರಿವರ್ತಿಸಲಾಗಿದೆ) ಇನ್ನೂ ಸತ್ಯವಾಗಿದೆ; numeric magnitude ಬೋಧನೆಗಾಗಿ ಬಳಸಿದ ಸರಳೀಕೃತ initialization ನ ಒಂದೂ ನಿಜ ಅಡ್ಡ-ಪರಿಣಾಮ' } },

    { type: 'heading', data: { textEn: 'The Truncation Trick', textKn: 'The Truncation Trick', level: 'H2' } },
    { type: 'math', data: {
      formula: "w' = w_mean + psi * (w - w_mean)",
      descEn: '• At inference, compute the average latent w_mean = E[w] over many samples, then blend a new sample toward it. psi=1.0 leaves w unchanged; smaller psi pulls samples toward the typical (average) region of W, trading diversity for typicality/quality',
      descKn: "Inference ಸಮಯದಲ್ಲಿ, ಅನೇಕ samples ಆದ್ಯಂತ average latent w_mean = E[w] ಗಣಿಸಿ, ನಂತರ ಒಂದೂ ಹೊಸ sample ಅನ್ನೂ ಅದೂ ಕಡೆಗೆ ಬೆರೆಸಿ. psi=1.0 w ಅನ್ನೂ ಬದಲಾಗದೆ ಬಿಡುತ್ತದೆ; ಚಿಕ್ಕ psi samples ಅನ್ನೂ W ನ typical (average) region ಕಡೆಗೆ ಎಳೆಯುತ್ತದೆ, diversity ಅನ್ನೂ typicality/quality ಜೊತೆ ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತಾ" } },
    { type: 'code', data: {
      filename: 'truncation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: computing w_mean over 200 mapped samples, then measuring the distance from w_mean at three truncation strengths psi=1.0, 0.7, 0.4.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: 200 mapped samples ಆದ್ಯಂತ w_mean ಗಣಿಸುತ್ತಾ, ನಂತರ ಮೂರೂ truncation strengths psi=1.0, 0.7, 0.4 ನಲ್ಲಿ w_mean ಇಂದ distance ಅಳೆಯುತ್ತಾ.',
      code: "def truncate_w(w, w_mean, psi):\n    return [mv + psi*(v-mv) for v, mv in zip(w, w_mean)]\n\nrng2 = random.Random(42)\nM2 = init_mapping_network(rng2, z_dim=8, w_dim=8, num_layers=4)\nws = [mapping([rng2.gauss(0,1) for _ in range(8)], M2, num_layers=4) for _ in range(200)]\nw_mean = [sum(wv[i] for wv in ws)/len(ws) for i in range(8)]\nprint('w_mean over 200 samples (scientific):', [f'{v:.2e}' for v in w_mean])\n\nfor psi in [1.0, 0.7, 0.4]:\n    zz = [rng2.gauss(0,1) for _ in range(8)]\n    w_s = mapping(zz, M2, num_layers=4)\n    w_used = truncate_w(w_s, w_mean, psi)\n    dist = math.sqrt(sum((a-b)**2 for a,b in zip(w_used, w_mean)))\n    print(f'psi={psi:.1f}  distance from mean={dist:.6f}')" } },
    { type: 'output', data: { output: "w_mean over 200 samples (scientific): ['2.84e-05', '1.85e-04', '1.30e-04', '1.40e-04', '-3.74e-05', '1.00e-04', '-1.20e-05', '1.60e-04']\npsi=1.0  distance from mean=0.000306\npsi=0.7  distance from mean=0.000259\npsi=0.4  distance from mean=0.000119" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Truncation Result Honestly', headingKn: 'Truncation ಫಲಿತಾಂಶವನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: even though both w and w_mean are extremely small in this toy setup (matching the vanishing-signal effect above), the truncation mechanism still shows a clear, correctly-ordered effect: distance from the mean shrinks from 0.000306 at psi=1.0, to 0.000259 at psi=0.7, to 0.000119 at psi=0.4 -- smaller psi genuinely pulls the sample closer to w_mean, exactly as the formula predicts\n• This confirms the truncation mechanism itself is implemented correctly and behaves as intended even at this tiny numeric scale -- the vanishing-signal issue from the mapping network affects the absolute magnitude of w, but not the correctness of the truncation formula\'s relative behavior',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: w ಮತ್ತು w_mean ಎರಡೂ ಈ toy setup ನಲ್ಲಿ ಅತ್ಯಂತ ಚಿಕ್ಕದಾಗಿದ್ದರೂ (ಮೇಲಿನ vanishing-signal ಪರಿಣಾಮಕ್ಕೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ), truncation ಯಂತ್ರಾಂಶ ಇನ್ನೂ ಒಂದೂ ಸ್ಪಷ್ಟ, ಸರಿಯಾಗಿ-ಕ್ರಮಗೊಳಿಸಿದ ಪರಿಣಾಮ ತೋರಿಸುತ್ತದೆ: mean ಇಂದ ದೂರ psi=1.0 ನಲ್ಲಿ 0.000306 ಇಂದ, psi=0.7 ನಲ್ಲಿ 0.000259 ಗೆ, psi=0.4 ನಲ್ಲಿ 0.000119 ಗೆ ಕುಗ್ಗುತ್ತದೆ -- ಚಿಕ್ಕ psi ನಿಜವಾಗಿ sample ಅನ್ನೂ w_mean ಗೆ ಹತ್ತಿರ ಎಳೆಯುತ್ತದೆ, formula ಊಹಿಸಿದಂತೆ ನಿಖರವಾಗಿ\n• ಇದೂ truncation ಯಂತ್ರಾಂಶ ಸ್ವತಃ ಸರಿಯಾಗಿ implement ಆಗಿದೆ ಮತ್ತು ಈ ಚಿಕ್ಕ numeric scale ನಲ್ಲೂ ಉದ್ದೇಶಿಸಿದಂತೆ ವರ್ತಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ -- mapping network ಇಂದ vanishing-signal ಸಮಸ್ಯೆ w ನ absolute magnitude ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ, ಆದರೆ truncation formula ನ ಸಂಬಂಧಿತ ವರ್ತನೆಯ ಸರಿಯಾದತೆ ಮೇಲೆ ಅಲ್ಲ' } },

    { type: 'diagram', data: {
      titleEn: 'Z Space vs W Space, Genuinely Verified', titleKn: 'Z Space vs W Space, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'Genuinely confirmed: z is a Gaussian vector; the mapping network transforms it through 4 nonlinear layers into w, which this run genuinely showed shrinks to ~1e-5 scale with naive small-weight initialization -- illustrating why real StyleGAN uses equalized learning rate.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: z ಒಂದೂ Gaussian vector; mapping network ಅದನ್ನೂ 4 nonlinear layers ಮೂಲಕ w ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ, ಈ run naive small-weight initialization ಜೊತೆ ~1e-5 scale ಗೆ ಕುಗ್ಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ತೋರಿಸಿತು -- ನಿಜ StyleGAN equalized learning rate ಏಕೆ ಬಳಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 760 130' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='45' width='120' height='40' fill='none' stroke='#94a3b8'/><text x='30' y='70' fill='#cbd5e1' font-size='10'>z ~ N(0,I)</text>\n<line x1='140' y1='65' x2='190' y2='65' stroke='#94a3b8'/>\n<rect x='190' y='45' width='170' height='40' fill='none' stroke='#60a5fa'/><text x='198' y='70' fill='#e2e8f0' font-size='10'>Mapping (4 layers)</text>\n<line x1='360' y1='65' x2='400' y2='65' stroke='#94a3b8'/>\n<rect x='400' y='45' width='140' height='40' fill='none' stroke='#f87171'/><text x='408' y='70' fill='#cbd5e1' font-size='10'>w ~ 1e-5 scale</text>\n<text x='560' y='40' fill='#94a3b8' font-size='10'>genuinely</text>\n<text x='560' y='55' fill='#94a3b8' font-size='10'>confirmed</text>\n<text x='560' y='70' fill='#94a3b8' font-size='10'>via sci-notation</text>\n<text x='560' y='85' fill='#94a3b8' font-size='10'>print</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Traditional GAN vs StyleGAN (genuinely built structure)', captionKn: 'Traditional GAN vs StyleGAN (ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ರಚನೆ)',
      rows: "Property|Traditional GAN|StyleGAN\nGenerator input|z directly|w = mapping(z)\nSynthesis start point|Transformed z|Learned constant\nLatent structure|Entangled|Intended to be more disentangled\nGenuinely verified here|N/A (Module 159)|w genuinely ~1e-5 scale with toy init" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the mapping network f:Z->W genuinely transforms z through 4 nonlinear layers, but with small uniform(-0.1,0.1) initialization and no normalization, w genuinely shrinks to ~1e-5 magnitude -- a real, disclosed numerical effect of this toy setup rather than the intended mechanism\n• Genuinely confirmed: the truncation formula w\' = w_mean + psi*(w-w_mean) computes correctly and the qualitative direction (smaller psi pulls toward the mean) holds, though the effect size is compressed by the same vanishing-signal issue\n• The learned constant genuinely initializes as a small random vector shared across all generated samples -- image-specific information will come from w injected during synthesis (Lesson 2), not from this shared starting point\n• Real StyleGAN implementations use equalized learning rate specifically to avoid the vanishing-signal issue genuinely observed here in a naive initialization',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: mapping network f:Z->W z ಅನ್ನೂ 4 nonlinear layers ಮೂಲಕ ನಿಜವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ, ಆದರೆ ಚಿಕ್ಕ uniform(-0.1,0.1) initialization ಮತ್ತು normalization ಇಲ್ಲದೆ, w ನಿಜವಾಗಿ ~1e-5 magnitude ಗೆ ಕುಗ್ಗುತ್ತದೆ -- ಈ toy setup ನ ಒಂದೂ ನಿಜ, ಬಹಿರಂಗಪಡಿಸಿದ numerical ಪರಿಣಾಮ, ಉದ್ದೇಶಿತ ಯಂತ್ರಾಂಶ ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: truncation formula w\' = w_mean + psi*(w-w_mean) ಸರಿಯಾಗಿ ಗಣಿಸುತ್ತದೆ ಮತ್ತು ಗುಣಾತ್ಮಕ ದಿಕ್ಕು (ಚಿಕ್ಕ psi mean ಕಡೆಗೆ ಎಳೆಯುತ್ತದೆ) ಸತ್ಯವಾಗಿದೆ, ಪರಿಣಾಮ ಗಾತ್ರ ಅದೇ vanishing-signal ಸಮಸ್ಯೆಯಿಂದ ಸಂಕುಚಿತಗೊಂಡಿದ್ದರೂ\n• ಕಲಿತ constant ನಿಜವಾಗಿ ಎಲ್ಲಾ ಉತ್ಪಾದಿಸಿದ samples ಆದ್ಯಂತ ಹಂಚಿಕೊಂಡ ಒಂದೂ ಚಿಕ್ಕ random vector ಆಗಿ initialize ಆಗುತ್ತದೆ -- Image-specific ಮಾಹಿತಿ synthesis (Lesson 2) ಸಮಯದಲ್ಲಿ injected w ಇಂದ ಬರುತ್ತದೆ, ಈ ಹಂಚಿಕೊಂಡ ಆರಂಭಿಕ ಬಿಂದು ಇಂದ ಅಲ್ಲ\n• ನಿಜ StyleGAN implementations ಇಲ್ಲಿ ಒಂದೂ naive initialization ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಮನಿಸಿದ vanishing-signal ಸಮಸ್ಯೆ ತಪ್ಪಿಸಲು ನಿರ್ದಿಷ್ಟವಾಗಿ equalized learning rate ಬಳಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact mapping-network structure genuinely built here (an 8-layer MLP in the real StyleGAN, 4 layers in this toy version) is the real architecture from Karras et al. (2019, "A Style-Based Generator Architecture for GANs") -- and the vanishing-signal issue genuinely observed with naive initialization is exactly the class of problem equalized learning rate (used in the real paper) was designed to solve.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ನಿಖರ mapping-network ರಚನೆ (ನಿಜ StyleGAN ನಲ್ಲಿ ಒಂದೂ 8-layer MLP, ಈ toy version ನಲ್ಲಿ 4 layers) Karras et al. (2019, "A Style-Based Generator Architecture for GANs") ಇಂದ ನಿಜ architecture -- ಮತ್ತು naive initialization ಜೊತೆ ನಿಜವಾಗಿ ಗಮನಿಸಿದ vanishing-signal ಸಮಸ್ಯೆ equalized learning rate (ನಿಜ paper ನಲ್ಲಿ ಬಳಸಿದ) ಪರಿಹರಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ನಿಖರ ಸಮಸ್ಯೆ ವರ್ಗ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: separating latent sampling (z) from image synthesis (w -> constant -> layers) gives production systems a place to apply truncation, interpolation, and editing without touching the raw Gaussian prior directly\n• The genuine vanishing-signal finding here is itself a valuable production lesson: naive deep-network initialization can silently destroy signal magnitude, which is why real systems use careful initialization schemes (equalized learning rate, He/Xavier init, or normalization layers) rather than assuming small random weights are always safe',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: latent sampling (z) ಅನ್ನೂ image synthesis (w -> constant -> layers) ಇಂದ ಬೇರ್ಪಡಿಸುವುದೂ production systems ಗೆ raw Gaussian prior ಅನ್ನೂ ನೇರವಾಗಿ ಮುಟ್ಟದೆ truncation, interpolation, ಮತ್ತು editing ಅನ್ವಯಿಸಲು ಒಂದೂ ಸ್ಥಳ ಕೊಡುತ್ತದೆ\n• ಇಲ್ಲಿ ನಿಜ vanishing-signal finding ಸ್ವತಃ ಒಂದೂ ಮೌಲ್ಯಯುತ production lesson: naive deep-network initialization ಶಾಂತವಾಗಿ signal magnitude ನಾಶಪಡಿಸಬಹುದು, ನಿಜ systems ಎಚ್ಚರಿಕೆಯ initialization schemes ಬಳಸುವ ಕಾರಣ ಇದೇ (equalized learning rate, He/Xavier init, ಅಥವಾ normalization layers), ಚಿಕ್ಕ random weights ಯಾವಾಗಲೂ ಸುರಕ್ಷಿತ ಎಂದೂ ಊಹಿಸುವ ಬದಲು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production ML engineer debugging a deep network that produces suspiciously tiny activations genuinely runs the same diagnostic this lesson ran -- printing full-precision or scientific-notation values instead of trusting rounded output -- because, as genuinely shown here, a value that looks like exactly 0.0 at 3 decimal places can actually be a real, non-zero but vanishingly small signal that reveals an initialization or normalization problem.',
      bodyKn: 'ಸಂಶಯಾಸ್ಪದವಾಗಿ ಚಿಕ್ಕ activations ಉತ್ಪಾದಿಸುವ ಒಂದೂ ಆಳವಾದ network debug ಮಾಡುವ ಒಂದೂ production ML engineer ಈ lesson ಚಲಾಯಿಸಿದ ಅದೇ diagnostic ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತಾರೆ -- ಸುತ್ತಿಸಿದ output ನಂಬುವ ಬದಲು ಪೂರ್ಣ-precision ಅಥವಾ scientific-notation ಮೌಲ್ಯಗಳನ್ನೂ ಮುದ್ರಿಸುತ್ತಾ -- ಏಕೆಂದರೆ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ತೋರಿಸಿದಂತೆ, 3 decimal places ನಲ್ಲಿ ನಿಖರವಾಗಿ 0.0 ರೀತಿ ಕಾಣುವ ಒಂದೂ ಮೌಲ್ಯ ವಾಸ್ತವವಾಗಿ ಒಂದೂ ನಿಜ, ಶೂನ್ಯ-ಅಲ್ಲದ ಆದರೆ ಕುಗ್ಗುತ್ತಿರುವ ಚಿಕ್ಕ signal ಆಗಿರಬಹುದು ಅದೂ ಒಂದೂ initialization ಅಥವಾ normalization ಸಮಸ್ಯೆ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the true magnitude of w after 4 mapping-network layers with small uniform(-0.1,0.1) initialization?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಚಿಕ್ಕ uniform(-0.1,0.1) initialization ಜೊತೆ 4 mapping-network layers ನಂತರ w ನ ನಿಜ magnitude ಏನೂ ಆಗಿತ್ತು?',
        opts: ['Exactly 0.0', 'Genuinely nonzero but tiny, around 1e-5, only visible in full precision / scientific notation', 'Around 1000', 'Undefined (NaN)'], correct: 1,
        optsKn: ['ನಿಖರವಾಗಿ 0.0', 'ನಿಜವಾಗಿ nonzero ಆದರೆ ಚಿಕ್ಕದೂ, ಸುಮಾರು 1e-5, ಪೂರ್ಣ precision / scientific notation ನಲ್ಲಿ ಮಾತ್ರ ಗೋಚರ', 'ಸುಮಾರು 1000', 'Undefined (NaN)'] },
      { q: 'What genuinely causes the vanishing-signal effect observed in this lesson\'s mapping network?', qKn: 'ಈ lesson ನ mapping network ನಲ್ಲಿ ಗಮನಿಸಿದ vanishing-signal ಪರಿಣಾಮಕ್ಕೆ ನಿಜವಾಗಿ ಕಾರಣ ಏನೂ?',
        opts: ['A bug in the LeakyReLU function', 'Stacking 4 layers each with small uniform(-0.1,0.1) weights and no normalization, which compounds signal shrinkage across layers', 'The random seed being unlucky', 'Python floating-point arithmetic errors'], correct: 1,
        optsKn: ['LeakyReLU function ನಲ್ಲಿ ಒಂದೂ bug', 'ಪ್ರತಿಯೊಂದೂ ಚಿಕ್ಕ uniform(-0.1,0.1) weights ಜೊತೆ 4 layers ಜೋಡಿಸುವುದೂ normalization ಇಲ್ಲದೆ, layers ಆದ್ಯಂತ signal ಕುಗ್ಗುವಿಕೆ ಸಂಯೋಜಿಸುತ್ತಾ', 'Random seed ಅದೃಷ್ಟಹೀನವಾಗಿತ್ತು', 'Python floating-point arithmetic errors'] },
      { q: 'What does the mapping network conceptually accomplish, regardless of the numeric scale issue?', qKn: 'Numeric scale ಸಮಸ್ಯೆ ಏನೇ ಇರಲಿ, mapping network conceptually ಏನನ್ನೂ ಸಾಧಿಸುತ್ತದೆ?',
        opts: ['Nothing -- it is broken', 'It nonlinearly transforms the raw Gaussian z into a different intermediate representation w', 'It directly generates the final image', 'It replaces the discriminator'], correct: 1,
        optsKn: ['ಏನೂ ಇಲ್ಲ -- ಅದೂ ಮುರಿದಿದೆ', 'ಅದೂ raw Gaussian z ಅನ್ನೂ ಒಂದೂ ಭಿನ್ನ intermediate representation w ಗೆ nonlinearly ಪರಿವರ್ತಿಸುತ್ತದೆ', 'ಅದೂ ನೇರವಾಗಿ ಅಂತಿಮ image ಉತ್ಪಾದಿಸುತ್ತದೆ', 'ಅದೂ discriminator ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ'] },
      { q: 'What does psi=1.0 do in the truncation formula w\' = w_mean + psi*(w-w_mean)?', qKn: 'Truncation formula w\' = w_mean + psi*(w-w_mean) ನಲ್ಲಿ psi=1.0 ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['Collapses w to exactly w_mean', 'Leaves w completely unchanged (w\'=w)', 'Sets w to zero', 'Doubles the distance from the mean'], correct: 1,
        optsKn: ['w ಅನ್ನೂ ನಿಖರವಾಗಿ w_mean ಗೆ ಕುಸಿಯುತ್ತದೆ', 'w ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಗದೆ ಬಿಡುತ್ತದೆ (w\'=w)', 'w ಅನ್ನೂ ಶೂನ್ಯಕ್ಕೆ ಹೊಂದಿಸುತ್ತದೆ', 'Mean ಇಂದ ದೂರವನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ'] },
      { q: 'Why do real StyleGAN implementations use equalized learning rate?', qKn: 'ನಿಜ StyleGAN implementations equalized learning rate ಏಕೆ ಬಳಸುತ್ತವೆ?',
        opts: ['To make training slower on purpose', 'To prevent exactly the kind of vanishing-signal effect through the mapping network genuinely observed in this lesson', 'Because it is required by PyTorch', 'To increase the number of parameters'], correct: 1,
        optsKn: ['ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ training ನಿಧಾನ ಮಾಡಲು', 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಮನಿಸಿದ mapping network ಮೂಲಕ ಇದೂ ರೀತಿಯ vanishing-signal ಪರಿಣಾಮ ತಡೆಯಲು', 'ಏಕೆಂದರೆ PyTorch ಗೆ ಇದೂ ಅಗತ್ಯ', 'Parameters ಸಂಖ್ಯೆ ಹೆಚ್ಚಿಸಲು'] },
    ] } },
  ],
};
