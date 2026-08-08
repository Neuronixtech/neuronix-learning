const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf270f'; // Module 21: Optimization

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 75,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Optimization (Part 2) — Momentum and Adam',
  titleKn: 'Optimization (Part 2) — Momentum and Adam',
  desc: 'Genuinely race three optimizers on the identical Rosenbrock problem: vanilla GD stalls at loss=0.0408, SGD+Momentum reaches loss=0.0036, and Adam nearly nails it at loss=0.0000041 -- the same starting point, the same gradient, only the optimizer changed.',
  descKn: 'ಒಂದೇ Rosenbrock ಸಮಸ್ಯೆ ಮೇಲೆ ಮೂರು optimizers ಗಳನ್ನೂ ನಿಜವಾಗಿ ಸ್ಪರ್ಧಿಸಿ: vanilla GD loss=0.0408 ನಲ್ಲಿ ನಿಂತಿತು, SGD+Momentum loss=0.0036 ತಲುಪಿತು, ಮತ್ತು Adam loss=0.0000041 ಜೊತೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಹೊಡೆಯಿತು -- ಅದೇ ಆರಂಭಿಕ ಬಿಂದು, ಅದೇ gradient, ಕೇವಲ optimizer ಬದಲಾಯಿತು.',
  objectives: [
    'Distinguish batch, stochastic, and mini-batch gradient descent.',
    'Implement SGD with momentum from scratch.',
    'Implement Adam from scratch, including first/second moments and bias correction.',
    'Compare optimizer convergence on the Rosenbrock function.',
    'Explain why Adam adapts per-weight learning rates.',
  ],
  objectivesKn: [
    'Batch, stochastic, ಮತ್ತು mini-batch gradient descent ಪ್ರತ್ಯೇಕಿಸಿ.',
    'SGD with momentum ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
    'First/second moments ಮತ್ತು bias correction ಸೇರಿದಂತೆ Adam ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
    'Rosenbrock function ಮೇಲೆ optimizer convergence ಹೋಲಿಸಿ.',
    'Adam per-weight learning rates ಅನ್ನೂ ಏಕೆ ಅಡಾಪ್ಟ್ ಮಾಡುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Optimization (Part 2)', textKn: 'Optimization (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1, Vanilla Gradient Descent · Time: ~75 minutes total\n• Part 1 showed vanilla GD getting stuck in the Rosenbrock valley -- this part fixes that with momentum and Adam',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1, Vanilla Gradient Descent · Time: ~75 ನಿಮಿಷಗಳು\n• Part 1 vanilla GD Rosenbrock valley ನಲ್ಲಿ ಸಿಲುಕಿಕೊಳ್ಳುವುದನ್ನೂ ತೋರಿಸಿತು -- ಈ ಭಾಗ momentum ಮತ್ತು Adam ಜೊತೆ ಇದನ್ನೂ ಸರಿಪಡಿಸುತ್ತದೆ',
      pillsEn: 'Python,Prereq: Part 1 Vanilla GD,~75 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Part 1 Vanilla GD,~75 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: '9. SGD, Batch GD, and Mini-Batch GD', textKn: '9. SGD, Batch GD, ಮತ್ತು Mini-Batch GD', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Batch Gradient Descent uses the entire dataset: Dataset → calculate exact gradient → update weights. Advantages: stable gradient, low noise. Disadvantages: expensive, slow for large datasets\n• Stochastic Gradient Descent uses one sample: fast but extremely noisy\n• Mini-Batch Gradient Descent uses a small batch (32/64/128/256 samples) -- this is what is normally meant by SGD in modern deep learning',
      bodyKn: '• Batch Gradient Descent ಸಂಪೂರ್ಣ dataset ಬಳಸುತ್ತದೆ: Dataset → ನಿಖರ gradient ಗಣಿಸಿ → weights ಅಪ್‌ಡೇಟ್ ಮಾಡಿ. ಅನುಕೂಲಗಳು: ಸ್ಥಿರ gradient, ಕಡಿಮೆ noise. ಅನನುಕೂಲಗಳು: ದುಬಾರಿ, ದೊಡ್ಡ datasets ಗೆ ನಿಧಾನ\n• Stochastic Gradient Descent ಒಂದು sample ಬಳಸುತ್ತದೆ: ವೇಗ ಆದರೆ ಅತ್ಯಂತ noisy\n• Mini-Batch Gradient Descent ಒಂದು ಚಿಕ್ಕ batch ಬಳಸುತ್ತದೆ (32/64/128/256 samples) -- ಆಧುನಿಕ deep learning ನಲ್ಲಿ SGD ಎಂದರೆ ಸಾಮಾನ್ಯವಾಗಿ ಇದೇ' } },
    { type: 'table', data: { captionEn: 'Batch Size vs Noise', captionKn: 'Batch Size vs Noise',
      rows: 'Method|Batch|Noise\nBatch GD|Entire dataset|None\nSGD|1|High\nMini-batch|32-256|Moderate' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The noise is not necessarily bad -- it can help the optimizer escape shallow minima, flat regions, and saddle points',
      bodyKn: '• Noise ಅಗತ್ಯವಾಗಿ ಕೆಟ್ಟದ್ದಲ್ಲ -- ಇದೂ optimizer ಗೆ shallow minima, flat regions, ಮತ್ತು saddle points ಇಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡಬಹುದು' } },

    { type: 'heading', data: { textEn: '10. Momentum', textKn: '10. Momentum', level: 'H2' } },
    { type: 'math', data: { formula: 'v = βv + gradient\nw = w - lr × v', descEn: '• Vanilla gradient descent only considers the current gradient, which can cause zig-zagging in narrow valleys. Momentum introduces a velocity -- think of a ball rolling downhill, building up speed instead of forgetting its previous movement after every step\n• If gradients consistently point the same direction, velocity grows. If gradients alternate, momentum smooths the movement', descKn: '• Vanilla gradient descent ಕೇವಲ ಪ್ರಸ್ತುತ gradient ಪರಿಗಣಿಸುತ್ತದೆ, ಇದೂ ಕಿರಿದಾದ valleys ಗಳಲ್ಲಿ zig-zagging ಗೆ ಕಾರಣವಾಗಬಹುದು. Momentum ಒಂದು velocity ಪರಿಚಯಿಸುತ್ತದೆ -- ಪ್ರತಿ step ನಂತರ ಇದರ ಹಿಂದಿನ ಚಲನೆ ಮರೆಯುವ ಬದಲಿಗೆ ವೇಗ ಬೆಳೆಸಿಕೊಳ್ಳುವ ಇಳಿಜಾರಿನಲ್ಲಿ ಉರುಳುವ ಒಂದು ಚೆಂಡು ಎಂದು ಯೋಚಿಸಿ\n• Gradients ಸ್ಥಿರವಾಗಿ ಅದೇ ದಿಕ್ಕಿಗೆ ತೋರಿಸಿದರೆ, velocity ಬೆಳೆಯುತ್ತದೆ. Gradients ಪರ್ಯಾಯವಾಗಿದ್ದರೆ, momentum ಚಲನೆಯನ್ನೂ ಸುಗಮಗೊಳಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '11. Implement SGD with Momentum', textKn: '11. SGD with Momentum ಜಾರಿಗೊಳಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'sgd_momentum.py', headingEn: 'SGDMomentum Class', headingKn: 'SGDMomentum Class',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "class SGDMomentum:\n    def __init__(self, lr=0.001, momentum=0.9):\n        self.lr = lr\n        self.momentum = momentum\n        self.velocity = None\n\n    def step(self, params, grads):\n        if self.velocity is None:\n            self.velocity = [0.0] * len(params)\n\n        self.velocity = [\n            self.momentum * v + g\n            for v, g in zip(self.velocity, grads)\n        ]\n\n        return [\n            p - self.lr * v\n            for p, v in zip(params, self.velocity)\n        ]" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Notice the direct mapping: concept v = beta*v + gradient becomes code self.momentum * v + g; concept w = w - lr*v becomes code p - self.lr * v',
      bodyKn: '• ನೇರ mapping ಗಮನಿಸಿ: ಪರಿಕಲ್ಪನೆ v = beta*v + gradient code self.momentum * v + g ಆಗುತ್ತದೆ; ಪರಿಕಲ್ಪನೆ w = w - lr*v code p - self.lr * v ಆಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '13. Adam', textKn: '13. Adam', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Momentum solves: how do we use information from previous gradients? Adam asks another question: what if every parameter needs a different effective step size?\n• Suppose one parameter consistently receives huge gradients (10, 12, 15, 11, 14) while another receives tiny gradients (0.001, 0.002, 0.001, 0.003). Giving both the same raw learning rate may not be ideal -- Adam adapts the update per parameter',
      bodyKn: '• Momentum ಪರಿಹರಿಸುತ್ತದೆ: ನಾವು ಹಿಂದಿನ gradients ಗಳಿಂದ ಮಾಹಿತಿ ಹೇಗೆ ಬಳಸುತ್ತೇವೆ? Adam ಇನ್ನೊಂದು ಪ್ರಶ್ನೆ ಕೇಳುತ್ತದೆ: ಪ್ರತಿ parameter ಗೆ ಒಂದು ಬೇರೆ effective step size ಬೇಕಿದ್ದರೆ?\n• ಒಂದು parameter ಸ್ಥಿರವಾಗಿ ಬೃಹತ್ gradients ಪಡೆಯುತ್ತದೆ (10, 12, 15, 11, 14) ಆದರೆ ಇನ್ನೊಂದು ಚಿಕ್ಕ gradients ಪಡೆಯುತ್ತದೆ (0.001, 0.002, 0.001, 0.003) ಎಂದು ಭಾವಿಸಿ. ಎರಡಕ್ಕೂ ಅದೇ raw learning rate ನೀಡುವುದೂ ಆದರ್ಶವಾಗಿಲ್ಲದಿರಬಹುದು -- Adam ಪ್ರತಿ parameter ಗೆ update ಅಡಾಪ್ಟ್ ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '14. Adam\'s First Moment', textKn: '14. Adam ನ First Moment', level: 'H2' } },
    { type: 'math', data: { formula: 'm = β₁m + (1 - β₁)gradient', descEn: '• The running average of gradients -- behaves somewhat like momentum, telling Adam the direction of recent gradients', descKn: '• Gradients ನ running average -- ಸ್ವಲ್ಪ momentum ನಂತೆ ವರ್ತಿಸುತ್ತದೆ, ಇತ್ತೀಚಿನ gradients ದಿಕ್ಕು Adam ಗೆ ಹೇಳುತ್ತಾ' } },

    { type: 'heading', data: { textEn: '15. Adam\'s Second Moment', textKn: '15. Adam ನ Second Moment', level: 'H2' } },
    { type: 'math', data: { formula: 'v = β₂v + (1 - β₂)gradient²', descEn: '• The running average of squared gradients -- tracks gradient magnitude. Large gradients produce larger v, small gradients produce smaller v', descKn: '• Squared gradients ನ running average -- gradient magnitude ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ. ದೊಡ್ಡ gradients ದೊಡ್ಡ v ಉತ್ಪಾದಿಸುತ್ತವೆ, ಚಿಕ್ಕ gradients ಚಿಕ್ಕ v ಉತ್ಪಾದಿಸುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: '16. Bias Correction', textKn: '16. Bias Correction', level: 'H2' } },
    { type: 'math', data: { formula: 'm_hat = m / (1 - β₁ᵗ)\nv_hat = v / (1 - β₂ᵗ)\nw = w - lr × m_hat / (sqrt(v_hat) + epsilon)', descEn: '• Both m and v start at zero, biased toward zero during the first few steps -- bias correction fixes this. The crucial component m_hat/sqrt(v_hat): large gradient magnitude -> sqrt(v_hat) up -> effective step down; small gradient magnitude -> sqrt(v_hat) down -> effective step up. Adam gives each parameter an adaptive effective learning rate', descKn: '• m ಮತ್ತು v ಎರಡೂ ಶೂನ್ಯದಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತವೆ, ಮೊದಲ ಕೆಲವು steps ನಲ್ಲಿ ಶೂನ್ಯದ ಕಡೆಗೆ ಪಕ್ಷಪಾತಿ -- bias correction ಇದನ್ನೂ ಸರಿಪಡಿಸುತ್ತದೆ. ನಿರ್ಣಾಯಕ ಘಟಕ m_hat/sqrt(v_hat): ದೊಡ್ಡ gradient magnitude -> sqrt(v_hat) ಹೆಚ್ಚಳ -> effective step ಇಳಿಕೆ; ಚಿಕ್ಕ gradient magnitude -> sqrt(v_hat) ಇಳಿಕೆ -> effective step ಹೆಚ್ಚಳ. Adam ಪ್ರತಿ parameter ಗೆ ಒಂದು adaptive effective learning rate ನೀಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '17. Implement Adam', textKn: '17. Adam ಜಾರಿಗೊಳಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'adam.py', headingEn: 'Adam Class', headingKn: 'Adam Class',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "class Adam:\n    def __init__(\n        self,\n        lr=0.001,\n        beta1=0.9,\n        beta2=0.999,\n        epsilon=1e-8\n    ):\n        self.lr = lr\n        self.beta1 = beta1\n        self.beta2 = beta2\n        self.epsilon = epsilon\n        self.m = None\n        self.v = None\n        self.t = 0\n\n    def step(self, params, grads):\n        if self.m is None:\n            self.m = [0.0] * len(params)\n            self.v = [0.0] * len(params)\n\n        self.t += 1\n\n        self.m = [\n            self.beta1 * m + (1 - self.beta1) * g\n            for m, g in zip(self.m, grads)\n        ]\n\n        self.v = [\n            self.beta2 * v + (1 - self.beta2) * g ** 2\n            for v, g in zip(self.v, grads)\n        ]\n\n        m_hat = [\n            m / (1 - self.beta1 ** self.t)\n            for m in self.m\n        ]\n\n        v_hat = [\n            v / (1 - self.beta2 ** self.t)\n            for v in self.v\n        ]\n\n        return [\n            p - self.lr * mh / (vh ** 0.5 + self.epsilon)\n            for p, mh, vh in zip(params, m_hat, v_hat)\n        ]" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Now every part of Adam\'s mathematical definition has a corresponding piece of code',
      bodyKn: '• ಈಗ Adam ನ ಗಣಿತೀಯ ವ್ಯಾಖ್ಯಾನದ ಪ್ರತಿ ಭಾಗ ಒಂದು ಅನುಗುಣ code ತುಣುಕು ಹೊಂದಿದೆ' } },

    { type: 'heading', data: { textEn: '18. Compare the Three Optimizers', textKn: '18. ಮೂರೂ Optimizers ಹೋಲಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'compare_optimizers.py', headingEn: 'Same Problem, Same Start, Three Optimizers', headingKn: 'ಅದೇ Problem, ಅದೇ Start, ಮೂರು Optimizers',
      descEn: 'Genuinely executed below, all three on the identical Rosenbrock problem for 5,000 steps each.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಎಲ್ಲಾ ಮೂರೂ ಒಂದೇ Rosenbrock problem ಮೇಲೆ ಪ್ರತಿ 5,000 steps ಗೆ.',
      code: "start = [-1.0, 1.0]\n\ngd_history = optimize(\n    GradientDescent(lr=0.0005),\n    rosenbrock,\n    rosenbrock_gradient,\n    start\n)\n\nsgd_history = optimize(\n    SGDMomentum(lr=0.0001, momentum=0.9),\n    rosenbrock,\n    rosenbrock_gradient,\n    start\n)\n\nadam_history = optimize(\n    Adam(lr=0.01),\n    rosenbrock,\n    rosenbrock_gradient,\n    start\n)\n\nfor name, history in [\n    (\"GD\", gd_history),\n    (\"SGD+M\", sgd_history),\n    (\"Adam\", adam_history)\n]:\n    final = history[-1]\n    loss = rosenbrock(final)\n\n    print(\n        f\"{name:6s} -> \"\n        f\"x={final[0]:.6f}, \"\n        f\"y={final[1]:.6f}, \"\n        f\"loss={loss:.8f}\"\n    )" } },
    { type: 'output', data: { output: "GD     -> x=0.798131, y=0.636104, loss=0.04083385\nSGD+M  -> x=0.940412, y=0.884127, loss=0.00355685\nAdam   -> x=0.999875, y=0.999547, loss=0.00000412" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run, same starting point (-1,1), same gradient function, same step count (5,000) -- only the optimizer changed, making this a fair, controlled comparison\n• Vanilla GD: loss=0.0408 (same result as Part 1, reproduced exactly). SGD+Momentum: loss=0.00356, roughly 11x closer to zero than vanilla GD. Adam: loss=0.0000041, landing at (0.999875, 0.999547) -- visually indistinguishable from the true minimum (1,1)\n• This genuinely confirms the expected ordering: Adam converges fastest, SGD+Momentum is solid middle ground, vanilla GD struggles most in this narrow curved valley -- exactly the "fast convergence / smooth movement, good convergence / slow progress, difficulty following narrow valley" pattern the lesson describes, now with real numbers behind each claim',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಅದೇ ಆರಂಭಿಕ ಬಿಂದು (-1,1), ಅದೇ gradient function, ಅದೇ step count (5,000) -- ಕೇವಲ optimizer ಬದಲಾಯಿತು, ಇದನ್ನೂ ಒಂದು ನ್ಯಾಯಯುತ, ನಿಯಂತ್ರಿತ ಹೋಲಿಕೆ ಮಾಡುತ್ತಾ\n• Vanilla GD: loss=0.0408 (Part 1 ಗೆ ಅದೇ ಫಲಿತಾಂಶ, ನಿಖರವಾಗಿ ಮರುಉತ್ಪಾದಿಸಲಾಗಿದೆ). SGD+Momentum: loss=0.00356, vanilla GD ಗಿಂತ ಸುಮಾರು 11x ಶೂನ್ಯಕ್ಕೆ ಹತ್ತಿರ. Adam: loss=0.0000041, (0.999875, 0.999547) ನಲ್ಲಿ ಇಳಿಯುತ್ತಾ -- ನಿಜ minimum (1,1) ಇಂದ ದೃಷ್ಟಿಗೋಚರವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಲಾಗದೂ\n• ಇದೂ ನಿರೀಕ್ಷಿತ ಕ್ರಮ ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: Adam ವೇಗವಾಗಿ converge ಆಗುತ್ತದೆ, SGD+Momentum ಒಂದು ಘನ ಮಧ್ಯಮ ನೆಲೆ, vanilla GD ಈ ಕಿರಿದಾದ ವಕ್ರ valley ನಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಹೆಣಗಾಡುತ್ತದೆ -- lesson ವಿವರಿಸುವ "fast convergence / smooth movement, good convergence / slow progress, difficulty following narrow valley" ಮಾದರಿ ನಿಖರವಾಗಿ, ಈಗ ಪ್ರತಿ ಪ್ರತಿಪಾದನೆಯ ಹಿಂದೆ ನಿಜ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Batch, SGD, and mini-batch gradient descent trade off gradient stability against computational cost -- mini-batch (32-256 samples) is what "SGD" usually means in practice\n• Momentum (v=βv+gradient, w=w-lr×v) accumulates a velocity across steps, smoothing zig-zagging in narrow valleys\n• Adam maintains a first moment (direction) and second moment (magnitude) of gradients, with bias correction for the early steps, giving every parameter its own adaptive effective learning rate\n• Genuinely racing all three optimizers on the identical Rosenbrock problem, same start, same steps: GD landed at loss=0.0408, SGD+Momentum at loss=0.00356, Adam at loss=0.0000041 -- a real, reproducible confirmation that Adam converges fastest on this benchmark\n• Part 3 explains how to further improve training with learning-rate schedules, and what the loss landscape actually looks like in high dimensions',
      bodyKn: '• Batch, SGD, ಮತ್ತು mini-batch gradient descent gradient stability ಅನ್ನೂ computational cost ವಿರುದ್ಧ ವಿನಿಮಯ ಮಾಡುತ್ತವೆ -- mini-batch (32-256 samples) ಪ್ರಾಯೋಗಿಕವಾಗಿ "SGD" ಸಾಮಾನ್ಯವಾಗಿ ಅರ್ಥೈಸುವುದೂ ಇದೇ\n• Momentum (v=βv+gradient, w=w-lr×v) steps ಗಳಾದ್ಯಂತ ಒಂದು velocity ಸಂಚಯಿಸುತ್ತದೆ, ಕಿರಿದಾದ valleys ಗಳಲ್ಲಿ zig-zagging ಸುಗಮಗೊಳಿಸುತ್ತಾ\n• Adam gradients ನ ಒಂದು first moment (ದಿಕ್ಕು) ಮತ್ತು second moment (ಪ್ರಮಾಣ) ನಿರ್ವಹಿಸುತ್ತದೆ, ಆರಂಭಿಕ steps ಗಾಗಿ bias correction ಜೊತೆ, ಪ್ರತಿ parameter ಗೆ ಇದರ ಸ್ವಂತ adaptive effective learning rate ನೀಡುತ್ತಾ\n• ಒಂದೇ Rosenbrock problem, ಅದೇ start, ಅದೇ steps ಮೇಲೆ ಎಲ್ಲಾ ಮೂರೂ optimizers ಗಳನ್ನೂ ನಿಜವಾಗಿ ಸ್ಪರ್ಧಿಸುವುದೂ: GD loss=0.0408 ನಲ್ಲಿ ಇಳಿಯಿತು, SGD+Momentum loss=0.00356 ನಲ್ಲಿ, Adam loss=0.0000041 ನಲ್ಲಿ -- ಈ benchmark ಮೇಲೆ Adam ಅತಿ ವೇಗವಾಗಿ converge ಆಗುತ್ತದೆ ಎಂಬುದೂರ ಒಂದು ನಿಜ, ಪುನರುತ್ಪಾದನೀಯ ದೃಢೀಕರಣ\n• Part 3 learning-rate schedules ಜೊತೆ training ಅನ್ನೂ ಹೇಗೆ ಇನ್ನಷ್ಟು ಸುಧಾರಿಸುವುದೂ, ಮತ್ತು high dimensions ನಲ್ಲಿ loss landscape ವಾಸ್ತವವಾಗಿ ಹೇಗೆ ಕಾಣುತ್ತದೆ ಎಂದು ವಿವರಿಸುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely racing GD, SGD+Momentum, and Adam on the identical Rosenbrock problem (same start, same 5,000 steps), which optimizer reached the lowest loss?', qKn: 'ಒಂದೇ Rosenbrock problem ಮೇಲೆ (ಅದೇ start, ಅದೇ 5,000 steps) GD, SGD+Momentum, ಮತ್ತು Adam ಅನ್ನೂ ನಿಜವಾಗಿ ಸ್ಪರ್ಧಿಸುವುದೂ, ಯಾವ optimizer ಅತಿ ಕಡಿಮೆ loss ತಲುಪಿತು?',
        opts: ['Vanilla GD (loss=0.0408)', 'SGD+Momentum (loss=0.00356)', 'Adam (loss=0.0000041), landing essentially at the true minimum', 'All three reached identical loss'], correct: 2,
        optsKn: ['Vanilla GD (loss=0.0408)', 'SGD+Momentum (loss=0.00356)', 'Adam (loss=0.0000041), ಬಹುತೇಕ ನಿಜ minimum ನಲ್ಲಿ ಇಳಿಯುತ್ತಾ', 'ಎಲ್ಲಾ ಮೂರೂ ಒಂದೇ loss ತಲುಪಿದವು'] },
      { q: 'What does Adam\'s second moment (v) track, and how does it affect the effective step size?', qKn: 'Adam ನ second moment (v) ಏನೂ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಇದೂ effective step size ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ?',
        opts: ['It tracks the sign of the gradient only', 'It tracks the running average of squared gradients -- large gradient magnitude increases sqrt(v_hat), which decreases the effective step for that parameter', 'It has no effect on the step size', 'It only matters for the first step'], correct: 1,
        optsKn: ['ಇದೂ ಕೇವಲ gradient ನ ಚಿಹ್ನೆ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ', 'ಇದೂ squared gradients ನ running average ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ -- ದೊಡ್ಡ gradient magnitude sqrt(v_hat) ಹೆಚ್ಚಿಸುತ್ತದೆ, ಇದೂ ಆ parameter ಗೆ effective step ಕಡಿಮೆ ಮಾಡುತ್ತದೆ', 'ಇದೂ step size ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ', 'ಇದೂ ಕೇವಲ ಮೊದಲ step ಗೆ ಮಾತ್ರ ಮುಖ್ಯ'] },
      { q: 'Why does bias correction (m_hat = m/(1-β₁ᵗ)) matter for Adam?', qKn: 'Adam ಗೆ bias correction (m_hat = m/(1-β₁ᵗ)) ಏಕೆ ಮುಖ್ಯ?',
        opts: ['It has no real effect', 'Both m and v start at zero and are biased toward zero during the first few steps -- bias correction compensates for that cold start', 'It replaces the learning rate entirely', 'It is only needed when training diverges'], correct: 1,
        optsKn: ['ಇದಕ್ಕೆ ಯಾವುದೇ ನಿಜ ಪರಿಣಾಮವಿಲ್ಲ', 'm ಮತ್ತು v ಎರಡೂ ಶೂನ್ಯದಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತವೆ ಮತ್ತು ಮೊದಲ ಕೆಲವು steps ನಲ್ಲಿ ಶೂನ್ಯದ ಕಡೆಗೆ ಪಕ್ಷಪಾತಿ -- bias correction ಆ cold start ಗೆ ಸರಿದೂಗಿಸುತ್ತದೆ', 'ಇದೂ learning rate ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ training diverge ಆದಾಗ ಮಾತ್ರ ಅಗತ್ಯ'] },
      { q: 'Why can mini-batch noise (as opposed to full batch gradient descent) sometimes be beneficial?', qKn: 'Mini-batch noise (full batch gradient descent ಗೆ ವಿರುದ್ಧವಾಗಿ) ಕೆಲವೊಮ್ಮೆ ಏಕೆ ಪ್ರಯೋಜನಕಾರಿಯಾಗಬಹುದು?',
        opts: ['It always slows down training with no benefit', 'It can help the optimizer escape shallow minima, flat regions, and saddle points', 'It removes the need for a learning rate', 'It guarantees convergence to the global minimum'], correct: 1,
        optsKn: ['ಇದೂ ಯಾವುದೇ ಪ್ರಯೋಜನವಿಲ್ಲದೆ ಯಾವಾಗಲೂ training ನಿಧಾನಗೊಳಿಸುತ್ತದೆ', 'ಇದೂ optimizer ಗೆ shallow minima, flat regions, ಮತ್ತು saddle points ಇಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡಬಹುದು', 'ಇದೂ learning rate ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ global minimum ಗೆ convergence ಖಾತರಿಪಡಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
