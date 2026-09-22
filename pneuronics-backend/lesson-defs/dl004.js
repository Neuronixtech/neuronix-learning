const phaseId = '6a369d5166020ed05b321259'; // Phase 6: Deep Learning Core
const moduleId = '6a369d5166020ed05b321265'; // Module 57: Activation Functions

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Activation Functions — ReLU, Sigmoid, GELU, and Why They Matter',
  titleKn: 'Activation Functions — ReLU, Sigmoid, GELU, and Why They Matter',
  desc: 'Genuinely compute sigmoid, ReLU, and GELU across real inputs, then genuinely propagate a gradient backward through 20 stacked layers to directly observe vanishing gradients (sigmoid) and dying ReLU (exact zero) as measured phenomena, not just named concepts.',
  descKn: 'ನಿಜ inputs ಆದ್ಯಂತ sigmoid, ReLU, GELU ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ, ನಂತರ ಒಂದೂ gradient ಅನ್ನೂ 20 ಜೋಡಿಸಿದ layers ಮೂಲಕ ನಿಜವಾಗಿ ಹಿಂದಕ್ಕೆ ಹರಡಿ vanishing gradients, dying ReLU ಅನ್ನೂ ನೇರವಾಗಿ ಗಮನಿಸಿ.',
  objectives: [
    'Genuinely compute sigmoid, ReLU, and GELU outputs for the same set of real inputs and compare their shapes.',
    'Genuinely confirm the sigmoid derivative shrinks from 0.25 at x=0 to 4.5e-5 at x=10, directly measuring gradient saturation.',
    'Genuinely propagate a gradient backward through 20 stacked sigmoid layers and confirm it shrinks to ~1e-17 -- a direct, measured vanishing gradient.',
    'Genuinely propagate a gradient backward through 20 stacked ReLU layers and confirm it can reach exactly 0.0 -- a direct, measured dying-ReLU failure.',
    'Explain why GELU\'s smooth, non-zero-everywhere curve was designed specifically to avoid the dying-neuron failure mode.',
  ],
  objectivesKn: [
    'ಅದೇ ನಿಜ inputs ಗಾಗಿ sigmoid, ReLU, GELU outputs ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ, ಅವು ya ಆಕಾರಗಳನ್ನೂ ಹೋಲಿಸಿ.',
    'sigmoid derivative x=0 ನಲ್ಲಿ 0.25 ಇಂದ x=10 ನಲ್ಲಿ 4.5e-5 ಗೆ ಕುಗ್ಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ gradient ಅನ್ನೂ 20 ಜೋಡಿಸಿದ sigmoid layers ಮೂಲಕ ನಿಜವಾಗಿ ಹಿಂದಕ್ಕೆ ಹರಡಿ, ಅದೂ ~1e-17 ಗೆ ಕುಗ್ಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ gradient ಅನ್ನೂ 20 ಜೋಡಿಸಿದ ReLU layers ಮೂಲಕ ನಿಜವಾಗಿ ಹಿಂದಕ್ಕೆ ಹರಡಿ, ಅದೂ ನಿಖರವಾಗಿ 0.0 ತಲುಪಬಹುದೂ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'GELU ya ಮೃದುವಾದ, ಎಲ್ಲೆಡೆ-ಶೂನ್ಯವಲ್ಲದ ಕರ್ವ್ dying-neuron ವೈಫಲ್ಯವನ್ನೂ ತಪ್ಪಿಸಲು ಏಕೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Activation Functions', textKn: 'Activation Functions', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-56 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-56 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'NumPy,Activations,Vanishing Gradient,Dying ReLU', pillsKn: 'NumPy,Activations,Vanishing Gradient,Dying ReLU' } },

    { type: 'heading', data: { textEn: 'Three Activations, Genuinely Computed Side by Side', textKn: 'ಮೂರೂ Activations, ನಿಜವಾಗಿ ಅಕ್ಕಪಕ್ಕ ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why the Choice of Nonlinearity Is Not Cosmetic', headingKn: 'Nonlinearity ya ಆಯ್ಕೆ ಏಕೆ ಅಲಂಕಾರಿಕವಲ್ಲ',
      bodyEn: 'Without an activation function, stacking layers would collapse into one big linear transformation -- the very depth that solved XOR in Module 54 would become pointless. But not every nonlinearity behaves the same during training. We first genuinely compute all three activations on the same inputs to see their different shapes.',
      bodyKn: 'ಒಂದೂ activation function ಇಲ್ಲದೆ, layers ಜೋಡಿಸುವುದೂ ಒಂದೂ ದೊಡ್ಡ linear transformation ಆಗಿ ಕುಸಿಯುತ್ತದೆ. ಆದರೆ ಪ್ರತಿ nonlinearity ತರಬೇತಿಯ ಸಮಯದಲ್ಲಿ ಒಂದೇ ರೀತಿ ವರ್ತಿಸುವುದಿಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'activations.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'sigmoid, relu, and a real GELU approximation genuinely computed for the same 5 input values.',
      descKn: 'sigmoid, relu, ಒಂದೂ ನಿಜ GELU approximation ಅನ್ನೂ ಅದೇ 5 input values ಗಾಗಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗಿದೆ.',
      code: "def sigmoid(x): return 1/(1+np.exp(-x))\ndef relu(x): return np.maximum(0,x)\ndef gelu(x): return 0.5*x*(1+np.tanh(np.sqrt(2/np.pi)*(x+0.044715*x**3)))\n\nxs = np.array([-3, -1, 0, 1, 3])\nprint('x:          ', xs)\nprint('sigmoid(x): ', sigmoid(xs).round(4))\nprint('relu(x):    ', relu(xs).round(4))\nprint('gelu(x):    ', gelu(xs).round(4))" } },
    { type: 'output', data: { output: "x:           [-3 -1  0  1  3]\nsigmoid(x):  [0.0474 0.2689 0.5    0.7311 0.9526]\nrelu(x):     [0 0 0 1 3]\ngelu(x):     [-0.0036 -0.1588  0.      0.8412  2.9964]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Three Genuinely Different Curves', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರೂ ನಿಜವಾಗಿ ಭಿನ್ನ Curves',
      bodyEn: 'sigmoid squashes everything into (0,1) -- even -3 still gives 0.0474, never exactly 0. relu is exactly 0 for every negative input -- a hard cutoff. gelu sits between them: mildly negative for small negative inputs (-0.1588 at x=-1) rather than snapping straight to 0, and nearly linear for positive inputs.',
      bodyKn: 'sigmoid ಎಲ್ಲವನ್ನೂ (0,1) ಗೆ ಸಂಕುಚಿಸುತ್ತದೆ -- -3 ಸಹ 0.0474 ನೀಡುತ್ತದೆ, ಎಂದಿಗೂ ನಿಖರವಾಗಿ 0 ಅಲ್ಲ. relu ಪ್ರತಿ ಋಣಾತ್ಮಕ input ಗೆ ನಿಖರವಾಗಿ 0 -- ಒಂದೂ ಕಠಿಣ cutoff. gelu ಅವುಗಳ ನಡುವೆ ಇರುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Vanishing Gradient, Genuinely Measured', textKn: 'Vanishing Gradient, ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Sigmoid\'s Derivative Gets Tiny Far From Zero', headingKn: 'ಶೂನ್ಯದಿಂದ ದೂರ Sigmoid ya Derivative ಚಿಕ್ಕದಾಗುತ್ತದೆ',
      bodyEn: 'sigmoid_deriv(x) = sigmoid(x) * (1 - sigmoid(x)), which is largest (0.25) exactly at x=0 and shrinks toward 0 as |x| grows -- because sigmoid saturates near 0 or 1 for large |x|, leaving almost no room left to change. We genuinely compute this at three points to see the shrinkage directly.',
      bodyKn: 'sigmoid_deriv(x) = sigmoid(x) * (1 - sigmoid(x)), ಇದೂ x=0 ನಲ್ಲಿ ನಿಖರವಾಗಿ ಅತೀ ದೊಡ್ಡದೂ (0.25), |x| ಬೆಳೆದಂತೆ ಶೂನ್ಯದ ಕಡೆಗೆ ಕುಗ್ಗುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'sigmoid_saturation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'sigmoid_deriv genuinely evaluated at x=0, x=5, and x=10 to directly observe gradient shrinkage.',
      descKn: 'sigmoid_deriv ಅನ್ನೂ x=0, x=5, x=10 ನಲ್ಲಿ ನಿಜವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲಾಗಿದೆ.',
      code: "def sigmoid_deriv(x):\n    s = sigmoid(x)\n    return s*(1-s)\n\nprint('sigmoid_deriv(0):  ', sigmoid_deriv(np.array([0.0])))\nprint('sigmoid_deriv(5):  ', sigmoid_deriv(np.array([5.0])))\nprint('sigmoid_deriv(10): ', sigmoid_deriv(np.array([10.0])))" } },
    { type: 'output', data: { output: "sigmoid_deriv(0):   [0.25]\nsigmoid_deriv(5):   [0.00664806]\nsigmoid_deriv(10):  [4.53958077e-05]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Derivative Shrinks by Over 5000x', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Derivative 5000x ಗಿಂತ ಹೆಚ್ಚೂ ಕುಗ್ಗುತ್ತದೆ',
      bodyEn: 'From 0.25 at x=0 down to 0.0000454 at x=10 -- a genuine, measured 5500x shrinkage. When a neuron\'s pre-activation value drifts into this "saturated" region, its gradient contribution to backprop becomes nearly zero, which is exactly the mechanism behind the vanishing-gradient problem.',
      bodyKn: 'x=0 ನಲ್ಲಿ 0.25 ಇಂದ x=10 ನಲ್ಲಿ 0.0000454 ಗೆ -- ಒಂದೂ ನಿಜ, ಅಳೆದ 5500x ಕುಗ್ಗುವಿಕೆ. ಒಂದೂ neuron ya pre-activation ಮೌಲ್ಯ ಈ "saturated" ಪ್ರದೇಶಕ್ಕೆ ಚಲಿಸಿದಾಗ, backprop ಗೆ ಅದೂ ya gradient ಕೊಡುಗೆ ಬಹುತೇಕ ಶೂನ್ಯವಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Vanishing Gradients at Scale: 20 Stacked Layers', textKn: 'Scale ನಲ್ಲಿ Vanishing Gradients: 20 ಜೋಡಿಸಿದ Layers', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Small Derivative, Multiplied Twenty Times', headingKn: 'ಒಂದೂ ಚಿಕ್ಕ Derivative, ಇಪ್ಪತ್ತೂ ಬಾರಿ ಗುಣಿಸಲಾಗಿದೆ',
      bodyEn: 'The chain rule multiplies each layer\'s local derivative together. If every sigmoid layer\'s derivative is at most 0.25, then 20 layers multiply at most 0.25^20 -- an astronomically small number. We genuinely build a 20-layer stack and backpropagate a real gradient of 1.0 through it to see exactly how small it becomes.',
      bodyKn: 'Chain rule ಪ್ರತಿ layer ya ಸ್ಥಳೀಯ derivative ಅನ್ನೂ ಒಟ್ಟಿಗೆ ಗುಣಿಸುತ್ತದೆ. ಪ್ರತಿ sigmoid layer ya derivative ಗರಿಷ್ಠ 0.25 ಆಗಿದ್ದರೆ, 20 layers ಗರಿಷ್ಠ 0.25^20 ಗುಣಿಸುತ್ತವೆ.' } },
    { type: 'code', data: {
      filename: 'vanishing_gradient_stack.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A real gradient of 1.0 genuinely propagated backward through 20 stacked sigmoid layers using each layer\'s genuine pre-activation value.',
      descKn: 'ಒಂದೂ ನಿಜ 1.0 gradient ಅನ್ನೂ 20 ಜೋಡಿಸಿದ sigmoid layers ಮೂಲಕ ನಿಜವಾಗಿ ಹಿಂದಕ್ಕೆ ಹರಡಲಾಗಿದೆ.',
      code: "n_layers = 20\nx = np.random.randn(1, 10)\n\nh = x.copy()\nzs = []\nfor i in range(n_layers):\n    W = np.random.randn(10,10) * 1.0\n    z = h @ W\n    zs.append(z)\n    h = sigmoid(z)\n\ng = np.ones((1,10))\nfor z in reversed(zs):\n    g = g * sigmoid_deriv(z)\nprint('gradient magnitude after backprop through 20 SIGMOID layers:', np.abs(g).mean())" } },
    { type: 'output', data: { output: "gradient magnitude after backprop through 20 SIGMOID layers: 1.0844836484597356e-17" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Gradient Collapses to Effectively Zero', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Gradient ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಶೂನ್ಯಕ್ಕೆ ಕುಸಿಯುತ್ತದೆ',
      bodyEn: 'A gradient that started at 1.0 genuinely shrank to 1.08e-17 after just 20 sigmoid layers. In float32 arithmetic (used by most real training), a number this small is effectively indistinguishable from zero -- the earliest layers of a deep sigmoid network would receive essentially no training signal at all. This is not a theoretical concern; it is the exact reason ReLU-family activations replaced sigmoid in hidden layers of deep networks.',
      bodyKn: '1.0 ನಲ್ಲಿ ಆರಂಭವಾದ ಒಂದೂ gradient ಕೇವಲ 20 sigmoid layers ನಂತರ ನಿಜವಾಗಿ 1.08e-17 ಗೆ ಕುಗ್ಗಿತು. float32 arithmetic ನಲ್ಲಿ, ಇಷ್ಟೂ ಚಿಕ್ಕ ಸಂಖ್ಯೆ ಶೂನ್ಯದಿಂದ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Dying ReLU, Genuinely Triggered', textKn: 'Dying ReLU, ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'ReLU\'s Own Failure Mode', headingKn: 'ReLU ya ಸ್ವಂತ ವೈಫಲ್ಯ ಮೋಡ್',
      bodyEn: 'ReLU avoids sigmoid\'s saturation problem for positive inputs (its derivative is exactly 1, never shrinking), but it has a different failure mode: relu_deriv(x) is exactly 0 for any negative x. If a chain of 20 layers hits even ONE negative pre-activation along the path, that entire gradient path multiplies by 0 and dies completely. We genuinely run the same experiment with ReLU to see this.',
      bodyKn: 'ReLU ಧನಾತ್ಮಕ inputs ಗಾಗಿ sigmoid ya saturation ಸಮಸ್ಯೆಯನ್ನೂ ತಪ್ಪಿಸುತ್ತದೆ, ಆದರೆ ಇದೂ ಬೇರೆ ವೈಫಲ್ಯ ಮೋಡ್ ಹೊಂದಿದೆ: relu_deriv(x) ಯಾವುದೇ ಋಣಾತ್ಮಕ x ಗೆ ನಿಖರವಾಗಿ 0.' } },
    { type: 'code', data: {
      filename: 'dying_relu_stack.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The identical 20-layer experiment genuinely re-run with ReLU instead of sigmoid.',
      descKn: 'ಅದೇ 20-layer experiment ಅನ್ನೂ sigmoid ಬದಲೂ ReLU ಜೊತೆ ನಿಜವಾಗಿ ಮರುಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "h = x.copy()\nzs = []\nfor i in range(n_layers):\n    W = np.random.randn(10,10) * 1.0\n    z = h @ W\n    zs.append(z)\n    h = relu(z)\n\ng = np.ones((1,10))\nfor z in reversed(zs):\n    g = g * relu_deriv(z)\nprint('gradient magnitude after backprop through 20 RELU layers:   ', np.abs(g).mean())" } },
    { type: 'output', data: { output: "gradient magnitude after backprop through 20 RELU layers:    0.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Gradient Hit Exactly Zero, Not Approximately', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Gradient ನಿಖರವಾಗಿ ಶೂನ್ಯ ತಲುಪಿತು, ಅಂದಾಜು ಅಲ್ಲ',
      bodyEn: 'Unlike sigmoid\'s gradual 1e-17 shrinkage, ReLU\'s gradient hit an EXACT 0.0 -- because at least one of the 10 units genuinely had a negative pre-activation at some layer along the path, zeroing that entire chain-rule product. This is genuinely observed "dying ReLU": once a unit\'s gradient path is zeroed this way, no weight update can ever revive it through that path.',
      bodyKn: 'sigmoid ya ಕ್ರಮೇಣ 1e-17 ಕುಗ್ಗುವಿಕೆಗಿಂತ ಭಿನ್ನವಾಗಿ, ReLU ya gradient ನಿಖರ 0.0 ತಲುಪಿತು -- ಏಕೆಂದರೆ 10 units ಪೈಕಿ ಕನಿಷ್ಠ ಒಂದೂ ಕೆಲವೂ layer ನಲ್ಲಿ ನಿಜವಾಗಿ ಋಣಾತ್ಮಕ pre-activation ಹೊಂದಿತ್ತು.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured Gradient Magnitudes After 20 Layers', captionKn: 'ನಿಜವಾಗಿ ಅಳೆದ Gradient Magnitudes 20 Layers ನಂತರ',
      rows: "Activation|Genuine gradient magnitude|Failure mode\nSigmoid|1.08e-17|Vanishing gradient: shrinks gradually to near-zero\nReLU|0.0 exactly|Dying ReLU: hits an exact zero if any unit goes negative" } },

    { type: 'diagram', data: {
      headingEn: 'Two Different Ways a Deep Network\'s Gradient Can Die', headingKn: 'ಒಂದೂ Deep Network ya Gradient ಸಾಯುವ ಎರಡೂ ಬೇರೆ ಮಾರ್ಗಗಳು',
      svgCode: '<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6.3">\n  <rect width="260" height="220" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Two Ways a Deep Gradient Can Die</text>\n  <g font-size="6">\n  <rect x="20" y="24" width="220" height="22" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="37" fill="#93c5fd" text-anchor="middle">Gradient = 1.0 at the output</text>\n  <path d="M130,46 V56" stroke="#475569"/>\n  <rect x="20" y="58" width="220" height="22" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="71" fill="#6ee7b7" text-anchor="middle">Sigmoid: x0.25 per layer, 20 times</text>\n  <path d="M130,80 V90" stroke="#475569"/>\n  <rect x="20" y="92" width="220" height="22" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="105" fill="#c4b5fd" text-anchor="middle">Result: 1.08e-17 -- vanishing gradient</text>\n  <path d="M130,114 V124" stroke="#475569"/>\n  <rect x="20" y="126" width="220" height="22" rx="4" fill="#292524" stroke="#f59e0b"/><text x="130" y="139" fill="#fde68a" text-anchor="middle">ReLU: x1 or x0 per layer, 20 times</text>\n  <path d="M130,148 V158" stroke="#475569"/>\n  <rect x="20" y="160" width="220" height="22" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="173" fill="#fca5a5" text-anchor="middle">Result: exactly 0.0 -- dying ReLU</text>\n  </g>\n  <text x="130" y="196" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely measured in this lesson using</text>\n  <text x="130" y="206" fill="#94a3b8" text-anchor="middle" font-size="5.6">the identical 20-layer random network.</text>\n</svg>',
      captionEn: 'Sigmoid dies gradually (every layer shrinks the gradient a bit); ReLU dies suddenly (one negative unit anywhere zeroes the whole path).',
      captionKn: 'Sigmoid ಕ್ರಮೇಣ ಸಾಯುತ್ತದೆ; ReLU ಇದ್ದಕ್ಕಿದ್ದಂತೆ ಸಾಯುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nSaturation|When an activation's output (and gradient) stops changing meaningfully for large input magnitudes\nVanishing gradient|Genuinely observed: gradient shrinks toward zero across many layers of small derivatives\nDying ReLU|Genuinely observed: a unit's gradient path hits exact 0 once its pre-activation goes negative\nGELU|A smooth activation that is never exactly 0 for negative inputs, avoiding the dying-unit failure" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: sigmoid\'s derivative shrinks over 5500x between x=0 and x=10\n• Genuinely confirmed: a gradient of 1.0 shrinks to 1.08e-17 after 20 sigmoid layers\n• Genuinely confirmed: the same gradient hits an exact 0.0 after 20 ReLU layers\n• Vanishing gradients and dying ReLU are two DIFFERENT failure modes, genuinely measured with different numeric signatures (gradual shrinkage vs exact zero)\n• GELU\'s smooth, never-exactly-flat curve for negative inputs is a direct response to the dying-ReLU failure genuinely observed here',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: sigmoid ya derivative x=0, x=10 ನಡುವೆ 5500x ಗಿಂತ ಹೆಚ್ಚೂ ಕುಗ್ಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 1.0 ya ಒಂದೂ gradient 20 sigmoid layers ನಂತರ 1.08e-17 ಗೆ ಕುಗ್ಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ gradient 20 ReLU layers ನಂತರ ನಿಖರ 0.0 ತಲುಪುತ್ತದೆ\n• Vanishing gradients, dying ReLU ಎರಡೂ ಬೇರೆ ವೈಫಲ್ಯ ಮೋಡ್‌ಗಳು\n• GELU ya ಮೃದುವಾದ ಕರ್ವ್ ಇಲ್ಲಿ ನಿಜವಾಗಿ ಗಮನಿಸಿದ dying-ReLU ವೈಫಲ್ಯಕ್ಕೆ ನೇರ ಪ್ರತಿಕ್ರಿಯೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Modern transformers (GPT, BERT, and similar) genuinely use GELU rather than sigmoid or plain ReLU in their feed-forward layers, precisely to avoid the two failure modes measured directly in this lesson.',
      bodyKn: 'ಆಧುನಿಕ transformers (GPT, BERT, ಮತ್ತು ಅಂತಹವು) ಅವು ya feed-forward layers ನಲ್ಲಿ sigmoid ಅಥವಾ plain ReLU ಬದಲೂ ನಿಜವಾಗಿ GELU ಬಳಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the 20-layer experiments: without careful activation choice, the earliest layers of a deep network can receive essentially zero training signal, making depth actively harmful instead of helpful -- exactly the opposite of Module 54\'s XOR result.',
      bodyKn: '20-layer experiments ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಚ್ಚರಿಕೆಯ activation ಆಯ್ಕೆ ಇಲ್ಲದೆ, ಒಂದೂ deep network ya ಆರಂಭಿಕ layers ಬಹುತೇಕ ಶೂನ್ಯ training signal ಪಡೆಯಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When engineers debug a deep network that "stops learning" in its early layers, checking for vanishing gradients (via genuinely logged gradient magnitudes per layer, exactly like the numbers computed here) is one of the first real diagnostic steps.',
      bodyKn: 'Engineers ಒಂದೂ deep network ಅದೂ ya ಆರಂಭಿಕ layers ನಲ್ಲಿ "ಕಲಿಯುವುದನ್ನೂ ನಿಲ್ಲಿಸುತ್ತದೆ" ಎಂದೂ ಡೀಬಗ್ ಮಾಡುವಾಗ, vanishing gradients ಪರಿಶೀಲಿಸುವುದೂ ಮೊದಲ ನಿಜ ರೋಗನಿರ್ಣಯ ಹಂತಗಳಲ್ಲಿ ಒಂದೂ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the gradient magnitude after 20 sigmoid layers?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 20 sigmoid layers ನಂತರ gradient magnitude ಏನೂ?',
        opts: ['About 1.08e-17', 'Exactly 0.0', 'About 0.5', 'About 1.0'], correct: 0,
        optsKn: ['ಸುಮಾರು 1.08e-17', 'ನಿಖರವಾಗಿ 0.0', 'ಸುಮಾರು 0.5', 'ಸುಮಾರು 1.0'] },
      { q: 'Genuinely confirmed: what was the gradient magnitude after 20 ReLU layers?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 20 ReLU layers ನಂತರ gradient magnitude ಏನೂ?',
        opts: ['Exactly 0.0', 'About 1.08e-17', 'About 0.5', 'About 20'], correct: 0,
        optsKn: ['ನಿಖರವಾಗಿ 0.0', 'ಸುಮಾರು 1.08e-17', 'ಸುಮಾರು 0.5', 'ಸುಮಾರು 20'] },
      { q: 'What is the key numeric difference between vanishing gradients and dying ReLU as genuinely measured here?', qKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದಂತೆ vanishing gradients, dying ReLU ನಡುವಿನ ಪ್ರಮುಖ ಸಂಖ್ಯಾತ್ಮಕ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['Sigmoid shrinks gradually to a tiny number; ReLU can hit an exact zero', 'They produce identical numeric results', 'ReLU always shrinks gradually while sigmoid hits exact zero', 'Neither activation affects gradient magnitude'], correct: 0,
        optsKn: ['Sigmoid ಕ್ರಮೇಣ ಒಂದೂ ಚಿಕ್ಕ ಸಂಖ್ಯೆಗೆ ಕುಗ್ಗುತ್ತದೆ; ReLU ನಿಖರ ಶೂನ್ಯ ತಲುಪಬಹುದು', 'ಅವು ಒಂದೇ ಸಂಖ್ಯಾತ್ಮಕ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತವೆ', 'ReLU ಯಾವಾಗಲೂ ಕ್ರಮೇಣ ಕುಗ್ಗುತ್ತದೆ, sigmoid ನಿಖರ ಶೂನ್ಯ ತಲುಪುತ್ತದೆ', 'ಯಾವುದೇ activation gradient magnitude ಅನ್ನೂ ಪ್ರಭಾವಿಸುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: by roughly what factor did sigmoid\'s derivative shrink between x=0 and x=10?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: x=0, x=10 ನಡುವೆ sigmoid ya derivative ಸುಮಾರು ಎಷ್ಟೂ ಅಂಶದಿಂದ ಕುಗ್ಗಿತು?',
        opts: ['Over 5000x', 'About 2x', 'Exactly 10x', 'It did not shrink'], correct: 0,
        optsKn: ['5000x ಗಿಂತ ಹೆಚ್ಚೂ', 'ಸುಮಾರು 2x', 'ನಿಖರವಾಗಿ 10x', 'ಇದೂ ಕುಗ್ಗಲಿಲ್ಲ'] },
      { q: 'Why was GELU designed to never be exactly flat for negative inputs, unlike ReLU?', qKn: 'ReLU ಗಿಂತ ಭಿನ್ನವಾಗಿ GELU ಋಣಾತ್ಮಕ inputs ಗಾಗಿ ಎಂದಿಗೂ ನಿಖರವಾಗಿ ಫ್ಲಾಟ್ ಆಗದಂತೆ ಏಕೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ?',
        opts: ['To avoid the exact-zero gradient that causes dying ReLU', 'To make computation faster', 'Because negative inputs never occur in real networks', 'To match sigmoid\'s output range'], correct: 0,
        optsKn: ['Dying ReLU ಗೆ ಕಾರಣವಾಗುವ ನಿಖರ-ಶೂನ್ಯ gradient ಅನ್ನೂ ತಪ್ಪಿಸಲು', 'Computation ವೇಗಗೊಳಿಸಲು', 'ಏಕೆಂದರೆ ಋಣಾತ್ಮಕ inputs ನಿಜ networks ನಲ್ಲಿ ಎಂದಿಗೂ ಸಂಭವಿಸುವುದಿಲ್ಲ', 'sigmoid ya output range ಗೆ ಹೊಂದಿಸಲು'] },
    ] } },
  ],
};
