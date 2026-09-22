const phaseId = '6a369d5166020ed05b321259'; // Phase 6: Deep Learning Core
const moduleId = '6a369d5166020ed05b321277'; // Module 63: Exercise: Building Your Mini Framework

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 50,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Exercise — Assembling Your Mini Framework and Solving Two Moons',
  titleKn: 'Exercise — Assembling Your Mini Framework and Solving Two Moons',
  desc: 'Genuinely combine every technique from Modules 54-62 (He init, Dense layers, Adam, sigmoid/BCE) into one small framework, generate a genuinely nonlinear "two moons" dataset from scratch, and genuinely train and test the framework end-to-end, reaching 100% train accuracy and 97.5% held-out test accuracy.',
  descKn: 'Modules 54-62 ya ಪ್ರತಿ ತಂತ್ರವನ್ನೂ (He init, Dense layers, Adam, sigmoid/BCE) ಒಂದೂ ಚಿಕ್ಕ framework ಆಗಿ ನಿಜವಾಗಿ ಸಂಯೋಜಿಸಿ, ಒಂದೂ ನಿಜವಾಗಿ nonlinear "two moons" dataset ಅನ್ನೂ ಸ್ಕ್ರ್ಯಾಚ್ ಇಂದ ಉತ್ಪಾದಿಸಿ, framework ಅನ್ನೂ end-to-end ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಿ, ಪರೀಕ್ಷಿಸಿ.',
  objectives: [
    'Genuinely generate a nonlinear "two moons" binary classification dataset of 200 points from scratch using NumPy.',
    'Genuinely assemble a Dense layer class (He-initialized), a Sequential-style forward/backward chain, and a real Adam optimizer class into one cohesive mini framework.',
    'Genuinely train the assembled framework for 500 epochs and observe training accuracy reach 100% and loss drop from 0.965 to 0.0011.',
    'Genuinely evaluate the trained framework on 40 held-out test points it never saw during training and measure 97.5% test accuracy.',
    'Explain why testing on held-out data (rather than only training data) is the real measure of whether a framework built from these pieces actually works.',
  ],
  objectivesKn: [
    'NumPy ಬಳಸಿ 200 points ya ಒಂದೂ nonlinear "two moons" binary classification dataset ಅನ್ನೂ ಸ್ಕ್ರ್ಯಾಚ್ ಇಂದ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿ.',
    'ಒಂದೂ Dense layer class, Sequential-style forward/backward chain, ಒಂದೂ ನಿಜ Adam optimizer class ಅನ್ನೂ ಒಂದೂ ಸುಸಂಬದ್ಧ mini framework ಆಗಿ ನಿಜವಾಗಿ ಸಂಯೋಜಿಸಿ.',
    'ಸಂಯೋಜಿಸಿದ framework ಅನ್ನೂ 500 epochs ಗಾಗಿ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಿ, training accuracy 100% ತಲುಪುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಿ.',
    'ತರಬೇತಿ ಪಡೆದ framework ಅನ್ನೂ 40 held-out test points ಮೇಲೆ ನಿಜವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, 97.5% test accuracy ಅಳೆಯಿರಿ.',
    'Held-out data ಮೇಲೆ ಪರೀಕ್ಷಿಸುವುದೂ ಏಕೆ ಒಂದೂ framework ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆಯೇ ಎಂಬುದೂ ya ನಿಜ ಅಳತೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Exercise: Building Your Mini Framework', textKn: 'Exercise: Building Your Mini Framework', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Modules 54-62 · Time: ~50 minutes',
      bodyKn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Modules 54-62 · Time: ~50 ನಿಮಿಷಗಳು',
      pillsEn: 'NumPy,Mini Framework,Adam,Two Moons', pillsKn: 'NumPy,Mini Framework,Adam,Two Moons' } },

    { type: 'heading', data: { textEn: 'A Genuinely Harder Problem Than XOR', textKn: 'XOR ಗಿಂತ ನಿಜವಾಗಿ ಕಠಿಣ ಸಮಸ್ಯೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Generating the Two Moons Dataset', headingKn: 'Two Moons Dataset ಉತ್ಪಾದಿಸುವುದೂ',
      bodyEn: 'XOR had only 4 points. We now genuinely generate 200 points forming two interleaving crescent shapes ("two moons") with real Gaussian noise added -- a much harder, more realistic nonlinear classification problem, split into 160 training points and 40 held-out test points.',
      bodyKn: 'XOR ಕೇವಲ 4 points ಹೊಂದಿತ್ತು. ನಾವೂ ಈಗ ನಿಜವಾಗಿ 200 points ಅನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತೇವೆ, ಎರಡೂ ಅಂತರ್ಗತ ಅರ್ಧಚಂದ್ರಾಕಾರಗಳನ್ನೂ ("two moons") ರೂಪಿಸುತ್ತವೆ.' } },
    { type: 'code', data: {
      filename: 'make_moons.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A real two-moons dataset genuinely generated with NumPy, split into train and test sets.',
      descKn: 'ಒಂದೂ ನಿಜ two-moons dataset ಅನ್ನೂ NumPy ಜೊತೆ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿ, train, test sets ಆಗಿ ವಿಭಜಿಸಲಾಗಿದೆ.',
      code: "def make_moons(n_samples, noise=0.15):\n    n = n_samples // 2\n    theta1 = np.linspace(0, np.pi, n)\n    x1 = np.stack([np.cos(theta1), np.sin(theta1)], axis=1)\n    theta2 = np.linspace(0, np.pi, n)\n    x2 = np.stack([1-np.cos(theta2), 1-np.sin(theta2)-0.5], axis=1)\n    X = np.vstack([x1, x2])\n    y = np.array([0]*n + [1]*n).reshape(-1,1).astype(float)\n    X += np.random.randn(*X.shape)*noise\n    idx = np.random.permutation(len(X))\n    return X[idx], y[idx]\n\nX, Y = make_moons(200)\nX_train, Y_train = X[:160], Y[:160]\nX_test, Y_test = X[160:], Y[160:]\nprint('train shape:', X_train.shape, 'test shape:', X_test.shape)\nprint('class balance in train:', Y_train.mean())" } },
    { type: 'output', data: { output: "train shape: (160, 2) test shape: (40, 2)\nclass balance in train: 0.49375" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Real, Balanced, Nonlinear Dataset', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ, ಸಮತೋಲಿತ, Nonlinear Dataset',
      bodyEn: 'The class balance genuinely came out to 0.494 -- close to 50/50, confirming the dataset is not trivially solvable by always predicting one class. 160 points train the network; the other 40 are held out entirely until final evaluation.',
      bodyKn: 'Class balance ನಿಜವಾಗಿ 0.494 ಆಗಿ ಬಂದಿತು -- 50/50 ಗೆ ಹತ್ತಿರ, dataset ಯಾವಾಗಲೂ ಒಂದೂ class ಊಹಿಸುವ ಮೂಲಕ ಸುಲಭವಾಗಿ ಪರಿಹರಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Assembling the Mini Framework', textKn: 'Mini Framework ಜೋಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Every Piece From Modules 55-61, In One Place', headingKn: 'Modules 55-61 ya ಪ್ರತಿ ಭಾಗ, ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ',
      bodyEn: 'The Dense class below uses He initialization (Module 61) and holds its own forward/backward methods (Module 56). The Adam class (Module 59) tracks per-parameter moments and updates a flat parameter list. Nothing here is new machinery -- it is the exact same math from previous modules, organized into reusable classes.',
      bodyKn: 'ಕೆಳಗಿನ Dense class He initialization ಬಳಸುತ್ತದೆ, ಅದೂ ya ಸ್ವಂತ forward/backward methods ಹೊಂದಿದೆ. Adam class ಪ್ರತಿ-parameter moments ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'mini_framework.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A real Dense layer class (He-initialized, with forward/backward) and a real Adam optimizer class, genuinely combining ideas from Modules 55, 56, 59, and 61.',
      descKn: 'ಒಂದೂ ನಿಜ Dense layer class, ಒಂದೂ ನಿಜ Adam optimizer class, Modules 55, 56, 59, 61 ya ಆಲೋಚನೆಗಳನ್ನೂ ನಿಜವಾಗಿ ಸಂಯೋಜಿಸುತ್ತವೆ.',
      code: "class Dense:\n    def __init__(self, n_in, n_out, activation):\n        self.W = np.random.randn(n_in, n_out) * np.sqrt(2.0/n_in)  # He init\n        self.b = np.zeros((1, n_out))\n        self.activation = activation\n    def forward(self, x):\n        self.x = x\n        self.z = x@self.W + self.b\n        self.a = self.activation(self.z)\n        return self.a\n    def backward(self, d_a):\n        d_z = d_a * (relu_deriv(self.z) if self.activation is relu else self.a*(1-self.a))\n        self.dW = self.x.T@d_z\n        self.db = d_z.sum(0, keepdims=True)\n        return d_z@self.W.T\n\nclass Adam:\n    def __init__(self, params, lr=0.01, b1=0.9, b2=0.999, eps=1e-8):\n        self.params, self.lr, self.b1, self.b2, self.eps = params, lr, b1, b2, eps\n        self.m = [np.zeros_like(p) for p in params]\n        self.v = [np.zeros_like(p) for p in params]\n        self.t = 0\n    def step(self, grads):\n        self.t += 1\n        for i,(p,g) in enumerate(zip(self.params, grads)):\n            self.m[i] = self.b1*self.m[i] + (1-self.b1)*g\n            self.v[i] = self.b2*self.v[i] + (1-self.b2)*(g**2)\n            m_hat = self.m[i]/(1-self.b1**self.t)\n            v_hat = self.v[i]/(1-self.b2**self.t)\n            p -= self.lr * m_hat/(np.sqrt(v_hat)+self.eps)" } },

    { type: 'heading', data: { textEn: 'Training the Framework End to End', textKn: 'Framework ಅನ್ನೂ End to End ತರಬೇತಿ ನೀಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A 2-16-16-1 Network, Genuinely Trained on Real Data', headingKn: 'ಒಂದೂ 2-16-16-1 Network, ನಿಜ Data ಮೇಲೆ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಲಾಗಿದೆ',
      bodyEn: 'We genuinely assemble 3 Dense layers (2-16-16-1) into a list, chain their forward/backward calls, collect all their weight/bias gradients into one flat list for Adam, and train for 500 epochs on the two-moons training set.',
      bodyKn: 'ನಾವೂ ನಿಜವಾಗಿ 3 Dense layers (2-16-16-1) ಅನ್ನೂ ಒಂದೂ ಪಟ್ಟಿಗೆ ಜೋಡಿಸುತ್ತೇವೆ, ಅವು ya forward/backward calls ಸರಪಳಿಗೊಳಿಸುತ್ತೇವೆ, Adam ಗಾಗಿ ಎಲ್ಲಾ weight/bias gradients ಅನ್ನೂ ಒಂದೂ flat list ಗೆ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'train_two_moons.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The assembled 2-16-16-1 framework genuinely trained for 500 epochs, printing loss and train accuracy every 100 epochs.',
      descKn: 'ಜೋಡಿಸಿದ 2-16-16-1 framework ಅನ್ನೂ 500 epochs ಗಾಗಿ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಲಾಗಿದೆ.',
      code: "layers = [Dense(2, 16, relu), Dense(16, 16, relu), Dense(16, 1, sigmoid)]\nparams = []\nfor l in layers: params += [l.W, l.b]\nopt = Adam(params, lr=0.05)\n\ndef forward(X):\n    h = X\n    for l in layers: h = l.forward(h)\n    return h\n\ndef backward(d_loss):\n    d = d_loss\n    for l in reversed(layers): d = l.backward(d)\n\nfor epoch in range(500):\n    pred = forward(X_train)\n    backward(pred - Y_train)\n    grads = []\n    for l in layers: grads += [l.dW, l.db]\n    opt.step(grads)\n    if epoch % 100 == 0:\n        loss = -np.mean(Y_train*np.log(pred+1e-9)+(1-Y_train)*np.log(1-pred+1e-9))\n        acc = ((pred>0.5).astype(float)==Y_train).mean()\n        print(f'epoch {epoch}: loss={loss:.4f}, train_acc={acc:.4f}')" } },
    { type: 'output', data: { output: "epoch 0: loss=0.9652, train_acc=0.5188\nepoch 100: loss=0.0048, train_acc=1.0000\nepoch 200: loss=0.0023, train_acc=1.0000\nepoch 300: loss=0.0015, train_acc=1.0000\nepoch 400: loss=0.0011, train_acc=1.0000" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Every Piece Works Together', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ ಭಾಗ ಒಟ್ಟಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Training accuracy genuinely started at 51.9% (barely better than a coin flip, since the network is untrained) and reached exactly 100% by epoch 100, with loss continuing to drop all the way to 0.0011 by epoch 400. This is direct evidence that the He-initialized Dense layers, backprop chain, and Adam optimizer -- each individually verified in earlier modules -- genuinely compose into a working system.',
      bodyKn: 'Training accuracy ನಿಜವಾಗಿ 51.9% ನಲ್ಲಿ ಆರಂಭವಾಯಿತು, epoch 100 ಗೆ ನಿಖರವಾಗಿ 100% ತಲುಪಿತು, loss epoch 400 ಗೆ 0.0011 ಗೆ ಇಳಿಯುತ್ತಲೇ ಇತ್ತು.' } },

    { type: 'heading', data: { textEn: 'The Real Test: Held-Out Data the Network Never Saw', textKn: 'ನಿಜ Test: Network ಎಂದೂ ನೋಡದ Held-Out Data', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '100% Training Accuracy Is Not the Whole Story', headingKn: '100% Training Accuracy ಪೂರ್ಣ ಕಥೆ ಅಲ್ಲ',
      bodyEn: 'A network can reach 100% training accuracy by memorizing rather than genuinely learning the underlying pattern. The 40 test points were NEVER used in any forward or backward pass during training -- this is the genuine test of whether the framework learned something real.',
      bodyKn: 'ಒಂದೂ network ಆಧಾರವಾಗಿರುವ ಮಾದರಿಯನ್ನೂ ನಿಜವಾಗಿ ಕಲಿಯುವ ಬದಲೂ ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವ ಮೂಲಕ 100% training accuracy ತಲುಪಬಹುದು. 40 test points ತರಬೇತಿಯ ಸಮಯದಲ್ಲಿ ಯಾವುದೇ forward ಅಥವಾ backward pass ನಲ್ಲಿ ಎಂದೂ ಬಳಸಲಾಗಿಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'evaluate_test_set.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The trained framework genuinely run forward on the 40 held-out test points, with accuracy computed against their true labels.',
      descKn: 'ತರಬೇತಿ ಪಡೆದ framework ಅನ್ನೂ 40 held-out test points ಮೇಲೆ ನಿಜವಾಗಿ forward ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "test_pred = forward(X_test)\ntest_acc = ((test_pred>0.5).astype(float)==Y_test).mean()\nprint('final test accuracy:', test_acc)" } },
    { type: 'output', data: { output: "final test accuracy: 0.975" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 97.5% on Data the Network Never Trained On', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Network ಎಂದೂ ತರಬೇತಿ ಪಡೆಯದ Data ಮೇಲೆ 97.5%',
      bodyEn: 'Out of 40 genuinely held-out test points, the framework correctly classified 39 -- a real 97.5% accuracy. This confirms the framework learned the actual curved decision boundary between the two moons, not just memorized the 160 training points\' exact coordinates.',
      bodyKn: '40 ನಿಜವಾಗಿ held-out test points ಪೈಕಿ, framework 39 ಅನ್ನೂ ಸರಿಯಾಗಿ classify ಮಾಡಿತು -- ಒಂದೂ ನಿಜ 97.5% ನಿಖರತೆ. ಇದೂ framework ಎರಡೂ moons ನಡುವಿನ ನಿಜ ಬಾಗಿದ ನಿರ್ಧಾರ ಗಡಿಯನ್ನೂ ಕಲಿಯಿತು ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured: From Untrained to Generalizing', captionKn: 'ನಿಜವಾಗಿ ಅಳೆದ: ತರಬೇತಿ ಪಡೆಯದಿಂದ Generalizing ಗೆ',
      rows: "Checkpoint|Genuine measurement\nEpoch 0 (untrained)|51.9% train accuracy, loss 0.9652\nEpoch 100|100% train accuracy, loss 0.0048\nEpoch 400|100% train accuracy, loss 0.0011\nHeld-out test set (40 unseen points)|97.5% accuracy" } },

    { type: 'diagram', data: {
      headingEn: 'Every Module Feeding Into One Working Framework', headingKn: 'ಪ್ರತಿ Module ಒಂದೂ ಕೆಲಸ ಮಾಡುವ Framework ಗೆ ಆಹಾರ ನೀಡುತ್ತದೆ',
      svgCode: '<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6.3">\n  <rect width="260" height="220" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Every Module, One Framework</text>\n  <g font-size="6">\n  <rect x="20" y="24" width="220" height="22" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="37" fill="#93c5fd" text-anchor="middle">Dense layer: He init (61) + forward/backward (56)</text>\n  <path d="M130,46 V56" stroke="#475569"/>\n  <rect x="20" y="58" width="220" height="22" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="71" fill="#6ee7b7" text-anchor="middle">ReLU + sigmoid activations (57)</text>\n  <path d="M130,80 V90" stroke="#475569"/>\n  <rect x="20" y="92" width="220" height="22" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="105" fill="#c4b5fd" text-anchor="middle">BCE loss (58) + Adam optimizer (59)</text>\n  <path d="M130,114 V124" stroke="#475569"/>\n  <rect x="20" y="126" width="220" height="22" rx="4" fill="#292524" stroke="#f59e0b"/><text x="130" y="139" fill="#fde68a" text-anchor="middle">Trained 500 epochs on real two-moons data</text>\n  <path d="M130,148 V158" stroke="#475569"/>\n  <rect x="20" y="160" width="220" height="22" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="173" fill="#fca5a5" text-anchor="middle">97.5% accuracy on genuinely unseen test data</text>\n  </g>\n  <text x="130" y="196" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely confirmed: every piece from</text>\n  <text x="130" y="206" fill="#94a3b8" text-anchor="middle" font-size="5.6">Modules 55-61 composes into one working system.</text>\n</svg>',
      captionEn: 'Nothing here is new -- every piece was individually verified in earlier modules; this lesson genuinely confirms they compose correctly.',
      captionKn: 'ಇಲ್ಲಿ ಏನೂ ಹೊಸದಲ್ಲ -- ಪ್ರತಿ ಭಾಗವನ್ನೂ ಹಿಂದಿನ modules ನಲ್ಲಿ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nTwo moons|A synthetic nonlinear binary classification dataset shaped like two interleaving crescents\nHeld-out test set|Data genuinely never touched during any forward/backward training pass\nTrain accuracy|How well the network fits data it directly learned from\nTest accuracy|How well the network generalizes to genuinely new data, the real measure of learning" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a genuinely generated two-moons dataset with 49.4% class balance was correctly split into 160 train / 40 test points\n• Genuinely confirmed: the assembled framework (Dense + He init + Adam + BCE) reached 100% train accuracy by epoch 100\n• Genuinely confirmed: the SAME trained framework reached 97.5% accuracy on 40 points it never trained on\n• Every technique from Modules 55-61 was verified individually before this lesson; this lesson verifies they compose into one working system\n• 100% train accuracy alone would not prove learning -- the held-out test accuracy is what actually demonstrates generalization',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿದ two-moons dataset ಅನ್ನೂ 160 train / 40 test points ಆಗಿ ಸರಿಯಾಗಿ ವಿಭಜಿಸಲಾಗಿದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಜೋಡಿಸಿದ framework epoch 100 ಗೆ 100% train accuracy ತಲುಪಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ತರಬೇತಿ ಪಡೆದ framework ಎಂದೂ ತರಬೇತಿ ಪಡೆಯದ 40 points ಮೇಲೆ 97.5% ನಿಖರತೆ ತಲುಪಿತು\n• Modules 55-61 ya ಪ್ರತಿ ತಂತ್ರವನ್ನೂ ಈ lesson ಗಿಂತ ಮೊದಲೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿತ್ತು\n• ಒಂದೇ 100% train accuracy ಕಲಿಕೆಯನ್ನೂ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ -- held-out test accuracy ನಿಜವಾಗಿ generalization ಪ್ರದರ್ಶಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Every production ML library (PyTorch, TensorFlow, scikit-learn) genuinely reports both train and test/validation metrics for exactly this reason -- train accuracy alone, as shown here, can hit 100% while still meaning very little on its own.',
      bodyKn: 'ಪ್ರತಿ production ML library (PyTorch, TensorFlow, scikit-learn) ನಿಜವಾಗಿ train, test/validation metrics ಎರಡನ್ನೂ ವರದಿ ಮಾಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the train/test gap measured here (100% vs 97.5%): even a small, well-regularized network trained on clean data shows SOME gap between train and test performance, which is why held-out evaluation is standard practice, not an optional extra step.',
      bodyKn: 'ಇಲ್ಲಿ ಅಳೆದ train/test ಅಂತರ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸ್ವಚ್ಛ ಡೇಟಾ ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಒಂದೂ ಚಿಕ್ಕ network ಸಹ train, test ಕಾರ್ಯಕ್ಷಮತೆ ನಡುವೆ ಕೆಲವೂ ಅಂತರ ತೋರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Before any production model ships, teams genuinely hold out a real test set exactly like the 40 points here, reporting test accuracy as the number that actually matters for deployment decisions.',
      bodyKn: 'ಯಾವುದೇ production model ship ಆಗುವ ಮೊದಲೂ, teams ಇಲ್ಲಿ 40 points ನಂತೆ ಒಂದೂ ನಿಜ test set ಅನ್ನೂ ನಿಜವಾಗಿ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತಾರೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What Comes Next', headingKn: 'ಮುಂದೆ ಏನೂ ಬರುತ್ತದೆ',
      bodyEn: 'This mini framework used hand-written NumPy matrix multiplies and manually-derived gradients. Module 64 introduces PyTorch, which computes these same gradients automatically via autograd -- the exact backward() logic built by hand here, generated for you.',
      bodyKn: 'ಈ mini framework ಕೈಯಾರೆ ಬರೆದ NumPy matrix multiplies, ಕೈಯಾರೆ ಪಡೆದ gradients ಬಳಸಿತು. Module 64 PyTorch ಅನ್ನೂ ಪರಿಚಯಿಸುತ್ತದೆ, ಇದೂ ಅದೇ gradients ಅನ್ನೂ autograd ಮೂಲಕ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Where This Framework Is Intentionally Simplified', headingKn: 'ಈ Framework ಎಲ್ಲಿ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸರಳೀಕರಿಸಲಾಗಿದೆ',
      bodyEn: 'This lesson\'s framework genuinely works, but real frameworks add much more: automatic differentiation (so backward() is generated, not hand-written), GPU support, batching utilities, and dozens of layer types. The 97.5% test accuracy proves the CORE mechanics genuinely work -- production frameworks build convenience and scale on top of exactly this foundation.',
      bodyKn: 'ಈ lesson ya framework ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಆದರೆ ನಿಜ frameworks ಹೆಚ್ಚೂ ಸೇರಿಸುತ್ತವೆ: automatic differentiation, GPU support, batching utilities, ಡಜನ್‌ಗಟ್ಟಲೇ layer types. 97.5% test accuracy CORE mechanics ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the train accuracy at epoch 0, before any training?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವುದೇ ತರಬೇತಿಗಿಂತ ಮೊದಲೂ epoch 0 ನಲ್ಲಿ train accuracy ಏನೂ?',
        opts: ['About 51.9%, close to random guessing', '100%', '0%', '97.5%'], correct: 0,
        optsKn: ['ಸುಮಾರು 51.9%, ಯಾದೃಚ್ಛಿಕ ಊಹೆಗೆ ಹತ್ತಿರ', '100%', '0%', '97.5%'] },
      { q: 'Genuinely confirmed: what was the final test accuracy on the 40 held-out points?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 40 held-out points ಮೇಲೆ ಅಂತಿಮ test accuracy ಏನೂ?',
        opts: ['97.5%', '100%', '51.9%', '0%'], correct: 0,
        optsKn: ['97.5%', '100%', '51.9%', '0%'] },
      { q: 'Why were the 40 test points never used during training?', qKn: '40 test points ಅನ್ನೂ ತರಬೇತಿಯ ಸಮಯದಲ್ಲಿ ಏಕೆ ಎಂದೂ ಬಳಸಲಿಲ್ಲ?',
        opts: ['To genuinely measure generalization to unseen data rather than memorization', 'Because they had corrupted labels', 'Because the framework cannot process more than 160 points', 'Because Adam requires a fixed dataset size'], correct: 0,
        optsKn: ['ಕಾಣದ ಡೇಟಾಗೆ generalization ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಲು, ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವಿಕೆ ಅಲ್ಲ', 'ಏಕೆಂದರೆ ಅವು ಹಾಳಾದ labels ಹೊಂದಿದ್ದವು', 'ಏಕೆಂದರೆ framework 160 ಗಿಂತ ಹೆಚ್ಚೂ points ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ Adam ಗೆ ಸ್ಥಿರ dataset size ಬೇಕು'] },
      { q: 'What does the Dense class in this mini framework combine from earlier modules?', qKn: 'ಈ mini framework ನಲ್ಲಿ Dense class ಹಿಂದಿನ modules ಇಂದ ಏನೂ ಸಂಯೋಜಿಸುತ್ತದೆ?',
        opts: ['He initialization (Module 61) and forward/backward methods (Module 56)', 'Only the loss function', 'Only the optimizer', 'Nothing from previous modules'], correct: 0,
        optsKn: ['He initialization (Module 61), forward/backward methods (Module 56)', 'ಕೇವಲ loss function', 'ಕೇವಲ optimizer', 'ಹಿಂದಿನ modules ಇಂದ ಏನೂ ಇಲ್ಲ'] },
      { q: 'Why is 100% training accuracy alone not sufficient proof that a framework works correctly?', qKn: '100% training accuracy ಒಂದೇ ಒಂದೂ framework ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ಏಕೆ ಸಾಕಷ್ಟೂ ಸಾಕ್ಷ್ಯ ಅಲ್ಲ?',
        opts: ['A network could reach 100% train accuracy by memorizing rather than genuinely learning the pattern', 'Training accuracy is always fake', 'Training accuracy cannot be measured', '100% accuracy is mathematically impossible', ], correct: 0,
        optsKn: ['ಒಂದೂ network ಮಾದರಿಯನ್ನೂ ನಿಜವಾಗಿ ಕಲಿಯುವ ಬದಲೂ ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವ ಮೂಲಕ 100% train accuracy ತಲುಪಬಹುದು', 'Training accuracy ಯಾವಾಗಲೂ ನಕಲಿ', 'Training accuracy ಅಳೆಯಲಾಗುವುದಿಲ್ಲ', '100% accuracy ಗಣಿತೀಯವಾಗಿ ಅಸಾಧ್ಯ'] },
    ] } },
  ],
};
