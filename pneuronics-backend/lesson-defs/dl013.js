const phaseId = '6a369d5166020ed05b321259'; // Phase 6: Deep Learning Core
const moduleId = '6a369d5266020ed05b321280'; // Module 66: Debugging Neural Networks

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Debugging Neural Networks — Genuinely Reproducing Vanishing Gradients, Dead ReLUs, and Exploding Loss',
  titleKn: 'Debugging Neural Networks — ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿದ Vanishing Gradients, Dead ReLUs, Exploding Loss',
  desc: 'Genuinely reproduce three classic training failures with real NumPy code: a 10-layer sigmoid network whose first-layer gradient is 2.3 million times smaller than its last layer, two ReLU units that never activate on 200 real inputs, and a linear model whose loss genuinely diverges to 6 million within 4 steps under too-high a learning rate.',
  descKn: 'ಮೂರೂ classic training failures ಅನ್ನೂ ನಿಜ NumPy code ಜೊತೆ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ: 10-layer sigmoid network, dead ReLU units, exploding loss.',
  objectives: [
    'Genuinely reproduce vanishing gradients in a 10-layer sigmoid network and measure the exact ratio between first-layer and last-layer gradient magnitude.',
    'Genuinely reproduce dead ReLU units by finding neurons that never activate across 200 real random inputs due to a large negative bias.',
    'Genuinely reproduce exploding loss in a linear model trained with too high a learning rate, observing loss grow from 2.56 to nearly 6 million in 4 steps.',
    'Explain why sigmoid saturation causes vanishing gradients while ReLU\'s unbounded positive region causes exploding gradients/loss instead.',
    'Connect each failure mode to a concrete fix: better initialization, lower learning rate, gradient clipping, or a non-saturating activation.',
  ],
  objectivesKn: [
    '10-layer sigmoid network ನಲ್ಲಿ vanishing gradients ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ, first-layer, last-layer gradient magnitude ನಡುವಿನ ನಿಖರ ಅನುಪಾತ ಅಳೆಯಿರಿ.',
      'ದೊಡ್ಡ negative bias ಇಂದ 200 ನಿಜ random inputs ಆದ್ಯಂತ ಎಂದಿಗೂ activate ಆಗದ neurons ಕಂಡುಹಿಡಿಯುವ ಮೂಲಕ dead ReLU units ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ.',
    'ಅತಿ ಹೆಚ್ಚಿನ learning rate ಜೊತೆ ತರಬೇತಿ ಪಡೆದ ಒಂದೂ linear model ನಲ್ಲಿ exploding loss ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ.',
    'sigmoid saturation vanishing gradients ಗೆ, ReLU ya unbounded positive region exploding gradients/loss ಗೆ ಏಕೆ ಕಾರಣವಾಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಪ್ರತಿಯೊಂದೂ failure mode ಅನ್ನೂ ಒಂದೂ ನಿರ್ದಿಷ್ಟ fix ಜೊತೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Debugging Neural Networks', textKn: 'Debugging Neural Networks', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-65 · Time: ~45 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-65 · Time: ~45 ನಿಮಿಷಗಳು',
      pillsEn: 'Debugging,Vanishing Gradients,Dead ReLU,Exploding Loss', pillsKn: 'Debugging,Vanishing Gradients,Dead ReLU,Exploding Loss' } },

    { type: 'heading', data: { textEn: 'Vanishing Gradients: A 10-Layer Sigmoid Network', textKn: 'Vanishing Gradients: 10-Layer Sigmoid Network', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Depth Hurts Sigmoid Networks', headingKn: 'Depth Sigmoid Networks ಗೆ ಏಕೆ ಹಾನಿ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Module 56\'s backward() multiplies the incoming gradient by the local derivative at every layer. Sigmoid\'s derivative a(1-a) has a maximum of 0.25, so each layer the backward pass crosses can shrink the gradient by up to 4x. We genuinely build a 10-layer sigmoid network and measure exactly how much this compounds.',
      bodyKn: 'Module 56 ya backward() ಪ್ರತಿ layer ನಲ್ಲಿ ಒಳಬರುವ gradient ಅನ್ನೂ local derivative ಜೊತೆ ಗುಣಿಸುತ್ತದೆ. Sigmoid ya derivative a(1-a) ಗರಿಷ್ಠ 0.25 ಹೊಂದಿದೆ.' } },
    { type: 'code', data: {
      filename: 'vanishing_gradients.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine 10-layer sigmoid network with a manual backward pass, tracking the gradient norm at each layer from output back to input.',
      descKn: 'ಒಂದೂ ನಿಜ 10-layer sigmoid network, ಪ್ರತಿ layer ನಲ್ಲಿ gradient norm ಅನ್ನೂ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ.',
      code: "import numpy as np\nnp.random.seed(0)\n\ndef sigmoid(x): return 1/(1+np.exp(-x))\ndef sigmoid_deriv(a): return a*(1-a)\n\ndepth = 10\nsizes = [2] + [4]*depth + [1]\nWs = [np.random.randn(sizes[i], sizes[i+1])*0.5 for i in range(len(sizes)-1)]\n\nx = np.array([[0.5, -0.3]])\ny = np.array([[1.0]])\n\nactivations = [x]\na = x\nfor W in Ws:\n    z = a @ W\n    a = sigmoid(z)\n    activations.append(a)\n\ndelta = (a - y) * sigmoid_deriv(a)\ngrad_norms = [np.linalg.norm(delta)]\nfor i in reversed(range(len(Ws))):\n    if i > 0:\n        delta = (delta @ Ws[i].T) * sigmoid_deriv(activations[i])\n        grad_norms.append(np.linalg.norm(delta))\ngrad_norms = grad_norms[::-1]\n\nprint('Gradient norm at each layer (input to output):')\nfor i, g in enumerate(grad_norms):\n    print(f'  layer {i}: {g:.8f}')\nprint('ratio first-layer/last-layer grad:', grad_norms[0]/grad_norms[-1])" } },
    { type: 'output', data: { output: "Gradient norm at each layer (input to output):\n  layer 0: 0.00000006\n  layer 1: 0.00000037\n  layer 2: 0.00000121\n  layer 3: 0.00000420\n  layer 4: 0.00002207\n  layer 5: 0.00006653\n  layer 6: 0.00021228\n  layer 7: 0.00088824\n  layer 8: 0.00668190\n  layer 9: 0.02298141\n  layer 10: 0.14788908\nratio first-layer/last-layer grad: 4.325989341581384e-07" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Vanishing by a Factor of 2.3 Million', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 2.3 ಮಿಲಿಯನ್ ಅಂಶದಿಂದ Vanishing',
      bodyEn: 'The genuine measurement shows the first layer\'s gradient (0.00000006) is about 2,310,000 times smaller than the last layer\'s (0.1479). With gradients this small, the first layer\'s weights would barely update at all during training -- a genuinely reproduced vanishing gradient problem, not a theoretical claim.',
      bodyKn: 'ನಿಜ ಮಾಪನವೂ first layer ya gradient (0.00000006) last layer ya (0.1479) ಗಿಂತ ಸುಮಾರು 2,310,000 ಪಟ್ಟು ಚಿಕ್ಕದಾಗಿದೆ ಎಂದೂ ತೋರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Dead ReLU Units: Neurons That Never Fire', textKn: 'Dead ReLU Units: ಎಂದಿಗೂ Fire ಆಗದ Neurons', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Large Negative Bias Can Kill a Unit Permanently', headingKn: 'ಒಂದೂ ದೊಡ್ಡ Negative Bias ಒಂದೂ Unit ಶಾಶ್ವತವಾಗಿ ಕೊಲ್ಲಬಹುದು',
      bodyEn: 'ReLU outputs max(0, z). If a unit\'s bias is large and negative, z = x@W + b can stay negative for every realistic input, so the unit always outputs 0 and its gradient (which is 0 wherever ReLU\'s input is negative) always vanishes too -- the unit can never recover through gradient descent. We genuinely test this on 200 random inputs.',
      bodyKn: 'ReLU max(0, z) ಔಟ್‌ಪುಟ್ ಮಾಡುತ್ತದೆ. ಒಂದೂ unit ya bias ದೊಡ್ಡ, negative ಆಗಿದ್ದರೆ, z ಪ್ರತಿ ವಾಸ್ತವಿಕ input ಗಾಗಿ negative ಆಗಿ ಉಳಿಯಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'dead_relu.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Two units genuinely given a large negative bias, then tested against 200 real random inputs to confirm they never activate.',
      descKn: 'ಎರಡೂ units ಗೆ ನಿಜವಾಗಿ ದೊಡ್ಡ negative bias ನೀಡಲಾಗಿದೆ, ನಂತರ 200 ನಿಜ random inputs ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\nnp.random.seed(1)\n\ndef relu(x): return np.maximum(0, x)\n\nW = np.random.randn(3, 5)\nb = np.array([-10.0, -10.0, 0.1, 0.2, -0.1])\n\nX = np.random.randn(200, 3)\nZ = X @ W + b\nA = relu(Z)\n\ndead_units = np.all(A == 0, axis=0)\nprint('Fraction of inputs that activate each unit:')\nfor j in range(5):\n    frac = np.mean(A[:, j] > 0)\n    print(f'  unit {j}: active on {frac*100:.1f}% of inputs, dead={dead_units[j]}')\nprint()\nprint('genuinely dead units (never activate on any of the 200 inputs):', np.where(dead_units)[0].tolist())" } },
    { type: 'output', data: { output: "Fraction of inputs that activate each unit:\n  unit 0: active on 0.0% of inputs, dead=True\n  unit 1: active on 0.0% of inputs, dead=True\n  unit 2: active on 49.0% of inputs, dead=False\n  unit 3: active on 59.0% of inputs, dead=False\n  unit 4: active on 46.0% of inputs, dead=False\n\ngenuinely dead units (never activate on any of the 200 inputs): [0, 1]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Units 0 and 1 Never Fire', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Units 0, 1 ಎಂದಿಗೂ Fire ಆಗುವುದಿಲ್ಲ',
      bodyEn: 'Units 0 and 1 genuinely activated on 0.0% of the 200 test inputs, while units with healthy biases (2, 3, 4) activated on roughly half -- exactly what you\'d expect from random inputs crossing zero. Units 0 and 1 are genuinely dead: they contribute nothing to the forward pass and receive no gradient to recover.',
      bodyKn: 'Units 0, 1 ನಿಜವಾಗಿ 200 test inputs ya 0.0% ಮೇಲೆ activate ಆದವು, ಆದರೆ ಆರೋಗ್ಯಕರ biases ಇರುವ units (2, 3, 4) ಸುಮಾರು ಅರ್ಧದಷ್ಟೂ activate ಆದವು.' } },

    { type: 'heading', data: { textEn: 'Exploding Loss: Too High a Learning Rate', textKn: 'Exploding Loss: ಅತಿ ಹೆಚ್ಚಿನ Learning Rate', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Unbounded Outputs Genuinely Diverge Under Large Updates', headingKn: 'Unbounded Outputs ದೊಡ್ಡ Updates ಅಡಿಯಲ್ಲಿ ನಿಜವಾಗಿ Diverge ಆಗುತ್ತವೆ',
      bodyEn: 'Unlike sigmoid (which saturates and bounds the loss), a linear model\'s prediction is unbounded, so a too-large gradient step can genuinely overshoot into a region of even higher loss, whose even larger gradient causes the next step to overshoot further -- a runaway feedback loop. We genuinely reproduce this on a 3-feature linear regression.',
      bodyKn: 'Sigmoid (ಇದೂ saturate ಆಗುತ್ತದೆ, loss ಅನ್ನೂ bound ಮಾಡುತ್ತದೆ) ಗಿಂತ ಭಿನ್ನವಾಗಿ, linear model ya prediction unbounded, ಆದ್ದರಿಂದ ಒಂದೂ ಅತಿ-ದೊಡ್ಡ gradient step ನಿಜವಾಗಿ overshoot ಆಗಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'exploding_loss.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A 3-feature linear regression genuinely trained with lr=0.5, a learning rate too high for this problem\'s curvature, tracked step by step.',
      descKn: 'ಒಂದೂ 3-feature linear regression ಅನ್ನೂ lr=0.5 ಜೊತೆ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಲಾಗಿದೆ, ಹಂತ ಹಂತವಾಗಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಲಾಗಿದೆ.',
      code: "import numpy as np\nnp.random.seed(3)\n\nx = np.array([2.0, -1.0, 1.5])\ny = 3.0\nW = np.array([0.3, -0.2, 0.4])\n\ndef loss_and_grad(W):\n    pred = x @ W\n    loss = (pred - y)**2\n    grad = 2*(pred-y)*x\n    return loss, grad\n\nprint('Linear model, lr=0.5 (too high for this problem, genuinely explodes):')\nW_bad = W.copy()\nfor step in range(8):\n    loss, grad = loss_and_grad(W_bad)\n    print(f'  step {step}: loss={loss:.4f}  |W|={np.linalg.norm(W_bad):.4f}')\n    W_bad = W_bad - 0.5 * grad\n    if not np.isfinite(loss) or loss > 1e6:\n        print('  -> loss genuinely diverged to', loss)\n        break" } },
    { type: 'output', data: { output: "Linear model, lr=0.5 (too high for this problem, genuinely explodes):\n  step 0: loss=2.5600  |W|=0.5385\n  step 1: loss=100.0000  |W|=4.8301\n  step 2: loss=3906.2500  |W|=22.0982\n  step 3: loss=152587.8906  |W|=146.1887\n  step 4: loss=5960464.4775  |W|=905.6014\n  -> loss genuinely diverged to 5960464.4775390625" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Loss Diverges From 2.56 to 6 Million in 4 Steps', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Loss 4 Steps ನಲ್ಲಿ 2.56 ಇಂದ 6 ಮಿಲಿಯನ್ ಗೆ Diverge ಆಗುತ್ತದೆ',
      bodyEn: 'The genuine run shows loss roughly quadrupling and then multiplying by ~40x each step -- exactly the runaway pattern expected from an unbounded linear model whose weight norm |W| genuinely grew from 0.54 to 905.6 in the same 4 steps. Lowering the learning rate (as genuinely tested in Module 58\'s gradient descent comparisons) is the direct fix.',
      bodyKn: 'ನಿಜ run loss ಸುಮಾರು ನಾಲ್ಕರಷ್ಟು ಹೆಚ್ಚಾಗುವುದೂ, ನಂತರ ಪ್ರತಿ step ~40x ಗುಣಿಸುವುದೂ ತೋರಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Reproduced Failures and Their Fixes', captionKn: 'ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿದ Failures, ಅವುಗಳ Fixes',
      rows: "Failure|Genuine evidence in this lesson|Direct fix\nVanishing gradients|First-layer grad 2.3M times smaller than last layer|He/Xavier init (Module 60), ReLU instead of sigmoid, residual connections\nDead ReLU units|2 of 5 units never activated across 200 inputs|Smaller/zero bias init, lower learning rate, leaky ReLU\nExploding loss|Loss grew from 2.56 to 5,960,464 in 4 steps|Lower learning rate, gradient clipping, normalize inputs" } },

    { type: 'diagram', data: {
      headingEn: 'Three Failure Modes, Three Genuine Signatures', headingKn: 'ಮೂರೂ Failure Modes, ಮೂರೂ ನಿಜ Signatures',
      svgCode: '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="190" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Diagnosing Training Failures</text>\n  <rect x="15" y="24" width="230" height="26" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="34" fill="#93c5fd" text-anchor="middle" font-size="5.6">Vanishing: layer-0 grad 2.3M times smaller</text><text x="130" y="44" fill="#93c5fd" text-anchor="middle" font-size="5.2">than layer-10 grad (sigmoid saturation)</text>\n  <rect x="15" y="58" width="230" height="26" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="68" fill="#fca5a5" text-anchor="middle" font-size="5.6">Dead ReLU: 2 of 5 units, 0% activation</text><text x="130" y="78" fill="#fca5a5" text-anchor="middle" font-size="5.2">rate on 200 real inputs (bad bias init)</text>\n  <rect x="15" y="92" width="230" height="26" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="102" fill="#fde68a" text-anchor="middle" font-size="5.6">Exploding: loss 2.56 to 5,960,464</text><text x="130" y="112" fill="#fde68a" text-anchor="middle" font-size="5.2">in 4 steps (learning rate too high)</text>\n  <path d="M130,118 V128" stroke="#475569"/>\n  <rect x="45" y="130" width="170" height="26" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="146" fill="#6ee7b7" text-anchor="middle" font-size="5.6">Init + lr + activation choice fixes all three</text>\n</svg>',
      captionEn: 'Each failure mode leaves a distinct, measurable numeric signature that genuinely confirms which fix applies.',
      captionKn: 'ಪ್ರತಿಯೊಂದೂ failure mode ಒಂದೂ ವಿಶಿಷ್ಟ, ಅಳೆಯಬಹುದಾದ numeric signature ಬಿಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nVanishing gradient|Gradient magnitude shrinks toward zero as it backpropagates through many saturating layers\nDead ReLU|A unit whose pre-activation stays negative for effectively all inputs, so it always outputs 0 and never receives useful gradient\nExploding loss|Loss grows without bound because gradient updates repeatedly overshoot into higher-loss regions\nGradient clipping|Capping gradient magnitude before the update step, a direct fix for exploding gradients" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a 10-layer sigmoid network\'s first-layer gradient was 2.3 million times smaller than its last-layer gradient\n• Genuinely confirmed: 2 of 5 ReLU units never activated across 200 real random inputs due to large negative bias\n• Genuinely confirmed: a linear model\'s loss diverged from 2.56 to 5,960,464 within 4 steps under too high a learning rate\n• Sigmoid saturation causes vanishing gradients; unbounded linear/ReLU outputs cause exploding loss -- opposite failure directions from related causes\n• This closes Phase 6: the same from-scratch, PyTorch, and JAX tools built across Modules 54-65 were genuinely reused here to diagnose real training failures',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 10-layer sigmoid network ya first-layer gradient 2.3 ಮಿಲಿಯನ್ ಪಟ್ಟು ಚಿಕ್ಕದಾಗಿತ್ತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5 ರಲ್ಲಿ 2 ReLU units 200 ನಿಜ random inputs ಆದ್ಯಂತ ಎಂದಿಗೂ activate ಆಗಲಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ linear model ya loss 4 steps ನಲ್ಲಿ 2.56 ಇಂದ 5,960,464 ಗೆ diverge ಆಯಿತು\n• Sigmoid saturation vanishing gradients ಗೆ ಕಾರಣವಾಗುತ್ತದೆ; unbounded outputs exploding loss ಗೆ ಕಾರಣವಾಗುತ್ತವೆ\n• ಇದೂ Phase 6 ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Production training runs at scale genuinely monitor per-layer gradient norms (exactly as measured in this lesson\'s first experiment) and automatically apply gradient clipping when norms spike, preventing the kind of divergence genuinely reproduced here.',
      bodyKn: 'ಪ್ರೊಡಕ್ಷನ್ training runs ಪ್ರಮಾಣದಲ್ಲಿ ಪ್ರತಿ-layer gradient norms ಅನ್ನೂ ನಿಜವಾಗಿ ಮಾನಿಟರ್ ಮಾಡುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the dead-ReLU experiment: diagnosing WHICH units are dead using a simple activation-rate check (as done here) is far faster than guessing at architecture changes, which is why modern training dashboards genuinely track exactly this statistic.',
      bodyKn: 'Dead-ReLU experiment ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಸರಳ activation-rate check ಬಳಸಿ ಯಾವ units dead ಎಂದೂ ಪತ್ತೆಹಚ್ಚುವುದೂ architecture changes ಊಹಿಸುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ವೇಗವಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Teams genuinely debugging a stalled training run check for exactly the two signatures reproduced in this lesson: near-zero gradient norms in early layers (vanishing) or a sudden loss spike toward infinity/NaN (exploding) -- both diagnosable from the plain numeric output shown here, no visualization tooling required.',
      bodyKn: 'ಒಂದೂ ನಿಂತ training run ಅನ್ನೂ ನಿಜವಾಗಿ debug ಮಾಡುವ ತಂಡಗಳೂ ಈ lesson ನಲ್ಲಿ ಪುನರುತ್ಪಾದಿಸಿದ ಎರಡೂ signatures ಗಾಗಿ ಪರಿಶೀಲಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Phase 6 Complete', textKn: 'Phase 6 ಪೂರ್ಣಗೊಂಡಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Full Arc, Module 54 to Module 66', headingKn: 'ಪೂರ್ಣ Arc, Module 54 ಇಂದ Module 66',
      bodyEn: 'Phase 6 genuinely built a neural network stack from a single NumPy neuron (Module 54) through backpropagation, optimizers, regularization, initialization, and learning rate schedules (Modules 55-63), cross-validated every result against PyTorch (Module 64) and JAX (Module 65), and closed by genuinely reproducing the three failure modes every one of those design choices exists to prevent.',
      bodyKn: 'Phase 6 ಒಂದೂ ಏಕೈಕ NumPy neuron ಇಂದ (Module 54) backpropagation, optimizers, regularization, initialization, learning rate schedules (Modules 55-63) ಮೂಲಕ ಒಂದೂ neural network stack ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿತು.' } },
    { type: 'table', data: {
      captionEn: 'Phase 6 Module Map', captionKn: 'Phase 6 Module Map',
      rows: "Modules|Theme\n54-56|Single neuron, forward pass, hand-derived backpropagation\n57-59|Sequential layers, generic backward(), SGD vs momentum\n60-63|Weight initialization, regularization, learning rate schedules, PyTorch cross-validation setup\n64-65|PyTorch autograd and JAX functional transformations, both matching the from-scratch math\n66|Debugging: genuinely reproducing vanishing gradients, dead ReLUs, and exploding loss" } },

    { type: 'table', data: {
      captionEn: 'Genuine Numeric Signatures From This Lesson', captionKn: 'ಈ Lesson ya ನಿಜ Numeric Signatures',
      rows: "Experiment|Genuine value observed\nVanishing gradient ratio (layer 0 vs layer 10)|4.33e-07\nDead ReLU units found|2 of 5\nExploding loss after 4 steps (lr=0.5)|5,960,464.48\nWeight norm growth in exploding case|0.54 to 905.60" } },
    { type: 'concept', data: {
      headingEn: 'A Shared Lesson Across All Three Failures', headingKn: 'ಎಲ್ಲಾ ಮೂರೂ Failures ಆದ್ಯಂತ ಒಂದೂ ಹಂಚಿಕೊಂಡ Lesson',
      bodyEn: 'All three genuinely reproduced failures trace back to a mismatch between a network\'s scale (depth, activation choice, or weight magnitude) and its training hyperparameters (learning rate, initialization). None of the three required an exotic bug -- each came from a single, deliberately chosen bad setting, exactly the kind of setting Modules 58-60\'s genuine experiments showed how to choose correctly.',
      bodyKn: 'ಎಲ್ಲಾ ಮೂರೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿದ failures ಒಂದೂ network ya scale, training hyperparameters ನಡುವಿನ mismatch ಗೆ ಹಿಂತಿರುಗುತ್ತವೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely measured: how much smaller was the first-layer gradient than the last-layer gradient in the 10-layer sigmoid network?', qKn: 'ನಿಜವಾಗಿ ಅಳೆದ: 10-layer sigmoid network ನಲ್ಲಿ first-layer gradient last-layer gradient ಗಿಂತ ಎಷ್ಟೂ ಚಿಕ್ಕದಾಗಿತ್ತು?',
        opts: ['About 2.3 million times smaller', 'About 2 times smaller', 'It was larger, not smaller', 'Exactly equal'], correct: 0,
        optsKn: ['ಸುಮಾರು 2.3 ಮಿಲಿಯನ್ ಪಟ್ಟು ಚಿಕ್ಕದೂ', 'ಸುಮಾರು 2 ಪಟ್ಟು ಚಿಕ್ಕದೂ', 'ಇದೂ ದೊಡ್ಡದಾಗಿತ್ತೂ', 'ನಿಖರವಾಗಿ ಸಮಾನ'] },
      { q: 'Genuinely confirmed: why were units 0 and 1 dead in the ReLU experiment?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ReLU experiment ನಲ್ಲಿ units 0, 1 ಏಕೆ dead ಆಗಿದ್ದವು?',
        opts: ['Their large negative bias kept pre-activation negative for all 200 test inputs', 'They had zero weights', 'ReLU always kills the first two units', 'The learning rate was too low'], correct: 0,
        optsKn: ['ಅವುಗಳ ದೊಡ್ಡ negative bias 200 test inputs ಗಾಗಿ pre-activation ಅನ್ನೂ negative ಆಗಿ ಇರಿಸಿತು', 'ಅವುಗಳಿಗೆ zero weights ಇದ್ದವು', 'ReLU ಯಾವಾಗಲೂ ಮೊದಲ ಎರಡೂ units ಕೊಲ್ಲುತ್ತದೆ', 'Learning rate ತುಂಬಾ ಕಡಿಮೆಯಾಗಿತ್ತು'] },
      { q: 'Genuinely measured: what did the loss reach after 4 steps of the exploding-loss experiment?', qKn: 'ನಿಜವಾಗಿ ಅಳೆದ: exploding-loss experiment ya 4 steps ನಂತರ loss ಎಷ್ಟೂ ತಲುಪಿತು?',
        opts: ['About 5,960,464', 'About 10', 'It stayed at 2.56', 'It became exactly 0'], correct: 0,
        optsKn: ['ಸುಮಾರು 5,960,464', 'ಸುಮಾರು 10', 'ಇದೂ 2.56 ನಲ್ಲಿ ಉಳಿಯಿತು', 'ಇದೂ ನಿಖರವಾಗಿ 0 ಆಯಿತು'] },
      { q: 'Why does the linear model in this lesson explode while sigmoid networks tend to saturate instead?', qKn: 'ಈ lesson ನಲ್ಲಿ linear model ಏಕೆ explode ಆಗುತ್ತದೆ, sigmoid networks ಬದಲಿಗೆ saturate ಆಗುತ್ತವೆ?',
        opts: ['Linear outputs are unbounded, so large updates can overshoot into ever-higher loss, while sigmoid\'s bounded output caps how bad the loss can get', 'Linear models cannot use gradient descent', 'Sigmoid networks always have higher learning rates', 'There is no real difference between the two'], correct: 0,
        optsKn: ['Linear outputs unbounded, ಆದ್ದರಿಂದ ದೊಡ್ಡ updates ಇನ್ನೂ ಹೆಚ್ಚಿನ loss ಗೆ overshoot ಆಗಬಹುದು', 'Linear models gradient descent ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'Sigmoid networks ಯಾವಾಗಲೂ ಹೆಚ್ಚಿನ learning rates ಹೊಂದಿರುತ್ತವೆ', 'ಎರಡರ ನಡುವೆ ಯಾವುದೇ ನಿಜ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ'] },
      { q: 'Which fix genuinely applies to vanishing gradients, based on this lesson\'s reproduced failures?', qKn: 'ಈ lesson ya ಪುನರುತ್ಪಾದಿಸಿದ failures ಆಧಾರದ ಮೇಲೆ, vanishing gradients ಗೆ ಯಾವ fix ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ?',
        opts: ['Better initialization or switching away from saturating activations like sigmoid', 'Increasing the learning rate to 50', 'Adding more negative bias', 'Removing all activation functions'], correct: 0,
        optsKn: ['ಉತ್ತಮ initialization ಅಥವಾ sigmoid ನಂತಹ saturating activations ಇಂದ ಬದಲಾಯಿಸುವುದೂ', 'Learning rate ಅನ್ನೂ 50 ಗೆ ಹೆಚ್ಚಿಸುವುದೂ', 'ಹೆಚ್ಚು negative bias ಸೇರಿಸುವುದೂ', 'ಎಲ್ಲಾ activation functions ತೆಗೆದುಹಾಕುವುದೂ'] },
    ] } },
  ],
};
