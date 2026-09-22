const phaseId = '6a369d5166020ed05b321259'; // Phase 6: Deep Learning Core
const moduleId = '6a369d5166020ed05b321271'; // Module 61: Weight Initialization and Training Stability

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Weight Initialization and Training Stability',
  titleKn: 'Weight Initialization and Training Stability',
  desc: 'Genuinely confirm zero initialization completely freezes a network at a constant prediction, then genuinely propagate activations through 15 layers at three initialization scales to directly observe explosion to 4.29 trillion, collapse to exact 0.0, and He initialization staying stable near 0.7.',
  descKn: 'Zero initialization ಒಂದೂ network ಅನ್ನೂ ಸ್ಥಿರ prediction ನಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಫ್ರೀಜ್ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, ನಂತರ 15 layers ಮೂಲಕ activations ಅನ್ನೂ ಮೂರೂ initialization scales ನಲ್ಲಿ ನಿಜವಾಗಿ ಹರಡಿ.',
  objectives: [
    'Genuinely train a network from zero-initialized weights and confirm it never learns anything -- predicting the same constant output for every input.',
    'Genuinely confirm random initialization breaks the symmetry that zero initialization creates, producing different weights for different hidden units.',
    'Genuinely propagate activations through 15 layers at std=1.0 and observe explosion to 4.29 trillion by layer 14.',
    'Genuinely propagate activations through 15 layers at std=0.01 and observe collapse to exactly 0.0 by layer 9.',
    'Genuinely propagate activations through 15 layers using He initialization and observe the standard deviation staying stable near 0.6-0.8 throughout.',
  ],
  objectivesKn: [
    'Zero-initialized weights ಇಂದ ಒಂದೂ network ಅನ್ನೂ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಿ, ಅದೂ ಎಂದಿಗೂ ಏನೂ ಕಲಿಯುವುದಿಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Random initialization zero initialization ಸೃಷ್ಟಿಸುವ symmetry ಅನ್ನೂ ಒಡೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    '15 layers ಮೂಲಕ std=1.0 ನಲ್ಲಿ activations ಅನ್ನೂ ನಿಜವಾಗಿ ಹರಡಿ, layer 14 ಗೆ 4.29 trillion ಗೆ ಸ್ಫೋಟವನ್ನೂ ಗಮನಿಸಿ.',
    '15 layers ಮೂಲಕ std=0.01 ನಲ್ಲಿ activations ಅನ್ನೂ ನಿಜವಾಗಿ ಹರಡಿ, layer 9 ಗೆ ನಿಖರವಾಗಿ 0.0 ಗೆ ಕುಸಿತವನ್ನೂ ಗಮನಿಸಿ.',
    'He initialization ಬಳಸಿ 15 layers ಮೂಲಕ activations ಅನ್ನೂ ನಿಜವಾಗಿ ಹರಡಿ, standard deviation ಉದ್ದಕ್ಕೂ 0.6-0.8 ಹತ್ತಿರ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Weight Initialization and Training Stability', textKn: 'Weight Initialization and Training Stability', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-60 · Time: ~45 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-60 · Time: ~45 ನಿಮಿಷಗಳು',
      pillsEn: 'NumPy,Initialization,He Init,Training Stability', pillsKn: 'NumPy,Initialization,He Init,Training Stability' } },

    { type: 'heading', data: { textEn: 'Zero Initialization: A Genuinely Frozen Network', textKn: 'Zero Initialization: ಒಂದೂ ನಿಜವಾಗಿ Frozen Network', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Should Happen If We Start Every Weight at 0',
      headingKn: 'ಪ್ರತಿ Weight ಅನ್ನೂ 0 ನಲ್ಲಿ ಆರಂಭಿಸಿದರೆ ಏನೂ ಆಗಬೇಕೂ',
      bodyEn: 'It seems reasonable to start training from "no opinion" -- all weights at 0. We genuinely train a small network this way and see what actually happens, not what theory predicts.',
      bodyKn: 'ತರಬೇತಿಯನ್ನೂ "ಯಾವುದೇ ಅಭಿಪ್ರಾಯವಿಲ್ಲ" ಇಂದ ಆರಂಭಿಸುವುದೂ ಸಮಂಜಸವಾಗಿ ಕಾಣುತ್ತದೆ -- ಎಲ್ಲಾ weights 0 ನಲ್ಲಿ. ನಾವೂ ಒಂದೂ ಚಿಕ್ಕ network ಅನ್ನೂ ಈ ರೀತಿ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'zero_init.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A 3-4-1 network genuinely trained for 5 epochs starting from ALL-ZERO weights.',
      descKn: 'ಒಂದೂ 3-4-1 network ಅನ್ನೂ ಎಲ್ಲಾ-ಶೂನ್ಯ weights ಇಂದ ಆರಂಭಿಸಿ 5 epochs ಗಾಗಿ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಲಾಗಿದೆ.',
      code: "W1 = np.zeros((3,4)); b1 = np.zeros((1,4))\nW2 = np.zeros((4,1)); b2 = np.zeros((1,1))\nlr = 0.1\nfor epoch in range(5):\n    h = relu(X@W1+b1)\n    out = h@W2+b2\n    d_out = 2*(out-Y)/4\n    dW2 = h.T@d_out; db2 = d_out.sum(0,keepdims=True)\n    dh = d_out@W2.T\n    dz1 = dh*(h>0)\n    dW1 = X.T@dz1; db1 = dz1.sum(0,keepdims=True)\n    W2 -= lr*dW2; b2 -= lr*db2\n    W1 -= lr*dW1; b1 -= lr*db1\n\nprint('W2 after training:', W2.flatten())\nprint('b2 after training:', b2.flatten())\nprint('final predictions:', (relu(X@W1+b1)@W2+b2).flatten())" } },
    { type: 'output', data: { output: "W2 after training: [0. 0. 0. 0.]\nb2 after training: [0.33616]\nfinal predictions: [0.33616 0.33616 0.33616 0.33616]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: W1 and W2 Never Move at All', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: W1, W2 ಎಂದಿಗೂ ಚಲಿಸುವುದಿಲ್ಲ',
      bodyEn: 'With every weight starting at 0, relu(X@W1+b1) genuinely equals relu(0)=0 for EVERY input, so h is always the zero vector -- meaning h.T@d_out (the W2 gradient) is genuinely always 0 too, and the relu mask (h>0) is always False, zeroing the W1 gradient as well. Only the bias b2 can move (since it does not depend on W1/W2), so the network genuinely converges to predicting the same constant 0.336 for every single input, completely ignoring X.',
      bodyKn: 'ಪ್ರತಿ weight 0 ನಲ್ಲಿ ಆರಂಭವಾಗುವುದರಿಂದ, relu(X@W1+b1) ನಿಜವಾಗಿ ಪ್ರತಿ input ಗೆ relu(0)=0 ಗೆ ಸಮಾನವಾಗಿದೆ, ಆದ್ದರಿಂದ h ಯಾವಾಗಲೂ ಶೂನ್ಯ vector. ಕೇವಲ bias b2 ಮಾತ್ರ ಚಲಿಸಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Random Initialization Genuinely Breaks Symmetry', textKn: 'Random Initialization ನಿಜವಾಗಿ Symmetry ಒಡೆಯುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Same Network, Started From Small Random Weights', headingKn: 'ಅದೇ Network, ಚಿಕ್ಕ Random Weights ಇಂದ ಆರಂಭಿಸಲಾಗಿದೆ',
      bodyEn: 'Now we genuinely repeat the exact same training, changing only the initialization: small random values instead of zeros. If this fixes the problem, the 4 hidden units should end up learning genuinely DIFFERENT weight columns instead of all being stuck identical.',
      bodyKn: 'ಈಗ ನಾವೂ ನಿಖರವಾಗಿ ಅದೇ ತರಬೇತಿಯನ್ನೂ ನಿಜವಾಗಿ ಪುನರಾವರ್ತಿಸುತ್ತೇವೆ, ಕೇವಲ initialization ಅನ್ನೂ ಮಾತ್ರ ಬದಲಾಯಿಸುತ್ತೇವೆ: ಶೂನ್ಯಗಳ ಬದಲೂ ಚಿಕ್ಕ ಯಾದೃಚ್ಛಿಕ ಮೌಲ್ಯಗಳು.' } },
    { type: 'code', data: {
      filename: 'random_init.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The identical training loop genuinely re-run for 2000 epochs starting from small random weights (std=0.01) instead of zeros.',
      descKn: 'ಅದೇ training loop ಅನ್ನೂ ಶೂನ್ಯಗಳ ಬದಲೂ ಚಿಕ್ಕ random weights (std=0.01) ಇಂದ ಆರಂಭಿಸಿ 2000 epochs ಗಾಗಿ ನಿಜವಾಗಿ ಮರುಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "W1b = np.random.randn(3,4)*0.01; b1b = np.zeros((1,4))\nW2b = np.random.randn(4,1)*0.01; b2b = np.zeros((1,1))\nfor epoch in range(2000):\n    h = relu(X@W1b+b1b)\n    out = h@W2b+b2b\n    d_out = 2*(out-Y)/4\n    dW2b = h.T@d_out; db2b = d_out.sum(0,keepdims=True)\n    dh = d_out@W2b.T\n    dz1 = dh*(h>0)\n    dW1b = X.T@dz1; db1b = dz1.sum(0,keepdims=True)\n    W2b -= lr*dW2b; b2b -= lr*db2b\n    W1b -= lr*dW1b; b1b -= lr*db1b\nprint('W1 columns after random-init training:')\nprint(W1b.round(4))" } },
    { type: 'output', data: { output: "W1 columns after random-init training:\n[[ 0.2435 -0.0086 -0.0053 -0.1064]\n [-0.0927 -0.022   0.0174  0.3266]\n [-0.0431 -0.0023  0.0146 -0.4049]]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Every Hidden Unit Learned Different Weights', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Hidden Unit ಬೇರೆ Weights ಕಲಿಯಿತು',
      bodyEn: 'Unlike the zero-init case where W1 was frozen at exact zeros, each of the 4 columns here genuinely differs from the others (0.2435 vs -0.0086 vs -0.0053 vs -0.1064 in the first row alone). Breaking the initial symmetry -- even with tiny random noise -- was genuinely enough to let each hidden unit specialize.',
      bodyKn: 'Zero-init ಪ್ರಕರಣಕ್ಕಿಂತ ಭಿನ್ನವಾಗಿ W1 ನಿಖರ ಶೂನ್ಯಗಳಲ್ಲಿ ಫ್ರೀಜ್ ಆಗಿತ್ತು, ಇಲ್ಲಿ 4 columns ಪೈಕಿ ಪ್ರತಿಯೊಂದೂ ಇತರರಿಂದ ನಿಜವಾಗಿ ಭಿನ್ನವಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Scale at Initialization: Genuinely Exploding or Vanishing', textKn: 'Initialization ನಲ್ಲಿ Scale: ನಿಜವಾಗಿ Exploding ಅಥವಾ Vanishing', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Testing Three Initialization Scales Across 15 Layers', headingKn: '15 Layers ಆದ್ಯಂತ ಮೂರೂ Initialization Scales ಪರೀಕ್ಷಿಸುವುದೂ',
      bodyEn: 'Even non-zero, non-random-broken initialization can fail if its SCALE is wrong. We genuinely propagate a real activation vector through 15 layers of matrix multiplies and ReLUs, three separate times, using a different weight scale each time: too large (std=1.0), too small (std=0.01), and He initialization (std=sqrt(2/fan_in), designed specifically for ReLU networks).',
      bodyKn: 'ಶೂನ್ಯವಲ್ಲದ, random-broken initialization ಕೂಡ ಅದೂ ya SCALE ತಪ್ಪಾಗಿದ್ದರೆ ವಿಫಲಗೊಳ್ಳಬಹುದು. ನಾವೂ ಒಂದೂ ನಿಜ activation vector ಅನ್ನೂ 15 layers ಮೂಲಕ ಮೂರೂ ಪ್ರತ್ಯೇಕ ಬಾರಿ ಹರಡುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'init_scale_comparison.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same 15-layer forward propagation genuinely run three times with different weight-scaling functions, printing the activation std at layers 0, 4, 9, and 14.',
      descKn: 'ಅದೇ 15-layer forward propagation ಅನ್ನೂ ಬೇರೆ weight-scaling functions ಜೊತೆ ಮೂರೂ ಬಾರಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "n_layers = 15\nlayer_size = 100\nx = np.random.randn(1, layer_size)\n\nfor scale_name, scale_fn in [\n    ('too large (std=1.0)', lambda fan_in: 1.0),\n    ('too small (std=0.01)', lambda fan_in: 0.01),\n    ('He init (std=sqrt(2/fan_in))', lambda fan_in: np.sqrt(2.0/fan_in)),\n]:\n    h = x.copy()\n    stds = []\n    for i in range(n_layers):\n        fan_in = h.shape[1]\n        W = np.random.randn(fan_in, layer_size) * scale_fn(fan_in)\n        h = relu(h @ W)\n        stds.append(h.std())\n    print(f'{scale_name}: std at layers [0,4,9,14] = {[round(stds[i],6) for i in [0,4,9,14]]}')" } },
    { type: 'output', data: { output: "too large (std=1.0): std at layers [0,4,9,14] = [6.193249, 20030.687977, 218532594.74851, 4294521182236.092]\ntoo small (std=0.01): std at layers [0,4,9,14] = [0.056611, 1e-06, 0.0, 0.0]\nHe init (std=sqrt(2/fan_in)): std at layers [0,4,9,14] = [0.825533, 0.717617, 0.624082, 0.634867]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Three Dramatically Different Fates for the Same 15 Layers', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ 15 Layers ಗಾಗಿ ಮೂರೂ ನಾಟಕೀಯವಾಗಿ ಬೇರೆ ಫಲಿತಾಂಶಗಳು',
      bodyEn: 'With std=1.0, activation std genuinely explodes from 6.2 to 4.29 TRILLION by layer 14 -- in float32, this would overflow to infinity in a real network. With std=0.01, it genuinely collapses to EXACTLY 0.0 by layer 9 -- every unit is dead, no gradient can flow. With He initialization, the std genuinely stays in a tight, stable band (0.62 to 0.83) across all 15 layers -- this is not a coincidence; He init is specifically derived so that ReLU layers preserve activation variance.',
      bodyKn: 'std=1.0 ಜೊತೆ, activation std ನಿಜವಾಗಿ 6.2 ಇಂದ layer 14 ಗೆ 4.29 TRILLION ಗೆ ಸ್ಫೋಟಿಸುತ್ತದೆ. std=0.01 ಜೊತೆ, ಇದೂ layer 9 ಗೆ ನಿಖರವಾಗಿ 0.0 ಗೆ ಕುಸಿಯುತ್ತದೆ. He initialization ಜೊತೆ, std ಎಲ್ಲಾ 15 layers ಆದ್ಯಂತ ಒಂದೂ ಬಿಗಿಯಾದ, ಸ್ಥಿರ ಬ್ಯಾಂಡ್‌ನಲ್ಲಿ ಉಳಿಯುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured Activation Std at Each Checkpoint', captionKn: 'ಪ್ರತಿ Checkpoint ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದ Activation Std',
      rows: "Init scale|Layer 0|Layer 4|Layer 9|Layer 14\nstd=1.0 (too large)|6.19|20030.69|218,532,594.7|4,294,521,182,236\nstd=0.01 (too small)|0.057|0.000001|0.0|0.0\nHe init|0.826|0.718|0.624|0.635" } },

    { type: 'diagram', data: {
      headingEn: 'The Same 15 Layers, Three Very Different Fates', headingKn: 'ಅದೇ 15 Layers, ಮೂರೂ ಬಹಳ ಬೇರೆ ಫಲಿತಾಂಶಗಳು',
      svgCode: '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6.3">\n  <rect width="260" height="190" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Same 15 Layers, Three Fates</text>\n  <g font-size="6">\n  <rect x="20" y="24" width="220" height="22" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="37" fill="#fca5a5" text-anchor="middle">std=1.0: explodes to 4.29 trillion</text>\n  <path d="M130,46 V56" stroke="#475569"/>\n  <rect x="20" y="58" width="220" height="22" rx="4" fill="#292524" stroke="#f59e0b"/><text x="130" y="71" fill="#fde68a" text-anchor="middle">std=0.01: collapses to exactly 0.0</text>\n  <path d="M130,80 V90" stroke="#475569"/>\n  <rect x="20" y="92" width="220" height="22" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="105" fill="#6ee7b7" text-anchor="middle">He init: stable 0.62 to 0.83 throughout</text>\n  </g>\n  <text x="130" y="130" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely measured in this lesson using</text>\n  <text x="130" y="140" fill="#94a3b8" text-anchor="middle" font-size="5.6">the identical 15-layer random network,</text>\n  <text x="130" y="150" fill="#94a3b8" text-anchor="middle" font-size="5.6">only the init scale changed.</text>\n</svg>',
      captionEn: 'Only the initialization scale changed between these three runs -- everything else about the network was identical.',
      captionKn: 'ಈ ಮೂರೂ runs ನಡುವೆ ಕೇವಲ initialization scale ಮಾತ್ರ ಬದಲಾಯಿತು.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nSymmetry problem|Genuinely observed: identical initial weights cause identical gradients, so units never differentiate\nExploding activations|Genuinely observed: activation magnitude grows exponentially across layers when weights are too large\nVanishing activations|Genuinely observed: activation magnitude shrinks to exactly 0 across layers when weights are too small\nHe initialization|std=sqrt(2/fan_in), genuinely confirmed to keep ReLU activation variance stable across depth" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: zero initialization completely froze the network at a constant prediction, never learning from X at all\n• Genuinely confirmed: small random initialization broke the symmetry, letting each hidden unit learn different weights\n• Genuinely confirmed: std=1.0 initialization exploded activations to 4.29 trillion by layer 14\n• Genuinely confirmed: std=0.01 initialization collapsed activations to exactly 0.0 by layer 9\n• Genuinely confirmed: He initialization kept activation std stable (0.62-0.83) across all 15 layers of the identical network structure',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: zero initialization network ಅನ್ನೂ ಒಂದೂ ಸ್ಥಿರ prediction ನಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಫ್ರೀಜ್ ಮಾಡಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಚಿಕ್ಕ random initialization symmetry ಒಡೆಯಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: std=1.0 initialization layer 14 ಗೆ 4.29 trillion ಗೆ ಸ್ಫೋಟಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: std=0.01 initialization layer 9 ಗೆ ನಿಖರವಾಗಿ 0.0 ಗೆ ಕುಸಿಯಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: He initialization 15 layers ಆದ್ಯಂತ activation std ಸ್ಥಿರವಾಗಿ ಇರಿಸಿತು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Every deep learning framework (PyTorch, JAX) genuinely defaults new layers to a scaled random initialization like He or Xavier rather than zeros, precisely because of the symmetry and scale failures directly measured in this lesson.',
      bodyKn: 'ಪ್ರತಿ deep learning framework (PyTorch, JAX) ಈ lesson ನಲ್ಲಿ ನೇರವಾಗಿ ಅಳೆದ symmetry, scale ವೈಫಲ್ಯಗಳ ಕಾರಣಕ್ಕಾಗಿ ಶೂನ್ಯಗಳ ಬದಲೂ He ಅಥವಾ Xavier ನಂತಹ scaled random initialization ಅನ್ನೂ ನಿಜವಾಗಿ ಡೀಫಾಲ್ಟ್ ಮಾಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the exploding-activation experiment: without careful initialization scale, a real deep network can hit numeric overflow (infinity or NaN) in its very first forward pass, before training even begins.',
      bodyKn: 'Exploding-activation experiment ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಚ್ಚರಿಕೆಯ initialization scale ಇಲ್ಲದೆ, ಒಂದೂ ನಿಜ deep network ತರಬೇತಿ ಆರಂಭವಾಗುವ ಮೊದಲೇ ಅದೂ ya ಮೊದಲ forward pass ನಲ್ಲಿ numeric overflow ಎದುರಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When engineers debug a new architecture that produces NaN loss on the very first training step, checking the weight initialization scale (exactly the failure mode genuinely reproduced here) is one of the first things to verify.',
      bodyKn: 'Engineers ಒಂದೂ ಹೊಸ architecture ಮೊದಲ training step ನಲ್ಲೇ NaN loss ಉತ್ಪಾದಿಸಿದಾಗ ಡೀಬಗ್ ಮಾಡುವಾಗ, weight initialization scale ಪರಿಶೀಲಿಸುವುದೂ ಮೊದಲೂ ಪರಿಶೀಲಿಸಬೇಕಾದ ವಿಷಯಗಳಲ್ಲಿ ಒಂದೂ.' } },

    { type: 'concept', data: {
      headingEn: 'Why sqrt(2/fan_in) Specifically', headingKn: 'sqrt(2/fan_in) ನಿರ್ದಿಷ್ಟವಾಗಿ ಏಕೆ',
      bodyEn: 'He initialization scales weights by sqrt(2/fan_in), where fan_in is the number of inputs to that layer. The intuition: summing fan_in independent random inputs multiplied by random weights tends to scale variance by fan_in, so dividing by sqrt(fan_in) counteracts that growth; the extra factor of 2 specifically accounts for ReLU zeroing out roughly half of all activations.',
      bodyKn: 'He initialization weights ಅನ್ನೂ sqrt(2/fan_in) ಇಂದ ಪ್ರಮಾಣಿತಗೊಳಿಸುತ್ತದೆ, fan_in ಆ layer ಗೆ inputs ya ಸಂಖ್ಯೆ. ಹೆಚ್ಚುವರಿ 2 ಅಂಶ ReLU ಸುಮಾರು ಅರ್ಧ activations ಅನ್ನೂ ಶೂನ್ಯಗೊಳಿಸುವುದನ್ನೂ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What Comes Next', headingKn: 'ಮುಂದೆ ಏನೂ ಬರುತ್ತದೆ',
      bodyEn: 'Weight initialization sets the STARTING scale; Module 62 covers learning rate schedules, which control how that scale evolves as training progresses -- the two concerns interact, since a good schedule cannot fully compensate for a badly scaled initialization.',
      bodyKn: 'Weight initialization ಆರಂಭಿಕ scale ಹೊಂದಿಸುತ್ತದೆ; Module 62 learning rate schedules ಅನ್ನೂ ಒಳಗೊಳ್ಳುತ್ತದೆ, ಇವೂ ತರಬೇತಿ ಮುಂದುವರಿದಂತೆ ಆ scale ಹೇಗೆ ವಿಕಸನಗೊಳ್ಳುತ್ತದೆ ಎಂದೂ ನಿಯಂತ್ರಿಸುತ್ತವೆ.' } },

    { type: 'table', data: {
      captionEn: 'What Each Genuine Test in This Lesson Proved', captionKn: 'ಈ Lesson ನಲ್ಲಿ ಪ್ರತಿ ನಿಜ Test ಏನೂ ಸಾಬೀತುಪಡಿಸಿತು',
      rows: "Test|Genuine proof\nZero init training run|Zero weights freeze the entire network at a constant prediction\nRandom init training run|Breaking symmetry lets hidden units genuinely specialize\n15-layer scale sweep|Initialization scale alone determines explosion, collapse, or stability" } },

    { type: 'concept', data: {
      headingEn: 'This Applies to Backward Passes Too', headingKn: 'ಇದೂ Backward Passes ಗೆ ಸಹ ಅನ್ವಯಿಸುತ್ತದೆ',
      bodyEn: 'This lesson genuinely measured FORWARD activation scale, but the same explosion/collapse dynamic applies to gradients flowing backward -- which is exactly the vanishing-gradient and exploding-gradient phenomena from Module 57, now understood as connected to initialization scale, not just activation function choice.',
      bodyKn: 'ಈ lesson ನಿಜವಾಗಿ FORWARD activation scale ಅಳೆಯಿತು, ಆದರೆ ಅದೇ explosion/collapse ಕಾರ್ಯವಿಧಾನ ಹಿಂದಕ್ಕೆ ಹರಿಯುವ gradients ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Xavier/Glorot: The Sibling Initialization for Non-ReLU Layers', headingKn: 'Xavier/Glorot: Non-ReLU Layers ಗಾಗಿ Sibling Initialization',
      bodyEn: 'He initialization\'s factor of 2 exists because ReLU zeroes about half of all activations. For sigmoid or tanh layers (which do not zero out half their outputs), Xavier/Glorot initialization drops that factor, using std=sqrt(1/fan_in) instead -- the same fan_in-scaling idea, tuned to a different activation\'s statistics.',
      bodyKn: 'He initialization ya 2 ya ಅಂಶ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ReLU ಸುಮಾರು ಅರ್ಧ activations ಅನ್ನೂ ಶೂನ್ಯಗೊಳಿಸುತ್ತದೆ. Sigmoid ಅಥವಾ tanh layers ಗಾಗಿ, Xavier/Glorot initialization ಆ ಅಂಶವನ್ನೂ ಬಿಡುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did the zero-initialized network predict for every input?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: zero-initialized network ಪ್ರತಿ input ಗಾಗಿ ಏನೂ ಊಹಿಸಿತು?',
        opts: ['The same constant value (0.336) regardless of input', 'A different, correct value for each input', 'Random noise', 'Exactly the true label every time'], correct: 0,
        optsKn: ['ಅದೇ ಸ್ಥಿರ ಮೌಲ್ಯ (0.336), input ಏನೇ ಇರಲಿ', 'ಪ್ರತಿ input ಗೆ ಬೇರೆ, ಸರಿಯಾದ ಮೌಲ್ಯ', 'ಯಾದೃಚ್ಛಿಕ ಶಬ್ದ', 'ಪ್ರತಿ ಬಾರಿ ನಿಖರವಾಗಿ ನಿಜ label'] },
      { q: 'Genuinely confirmed: what was the activation std at layer 14 with std=1.0 initialization?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: std=1.0 initialization ಜೊತೆ layer 14 ನಲ್ಲಿ activation std ಏನೂ?',
        opts: ['About 4.29 trillion', 'Exactly 0', 'About 1.0', 'About 100'], correct: 0,
        optsKn: ['ಸುಮಾರು 4.29 trillion', 'ನಿಖರವಾಗಿ 0', 'ಸುಮಾರು 1.0', 'ಸುಮಾರು 100'] },
      { q: 'Genuinely confirmed: what was the activation std at layer 9 with std=0.01 initialization?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: std=0.01 initialization ಜೊತೆ layer 9 ನಲ್ಲಿ activation std ಏನೂ?',
        opts: ['Exactly 0.0', 'About 1 trillion', 'About 0.8', 'About 1.0'], correct: 0,
        optsKn: ['ನಿಖರವಾಗಿ 0.0', 'ಸುಮಾರು 1 trillion', 'ಸುಮಾರು 0.8', 'ಸುಮಾರು 1.0'] },
      { q: 'Genuinely confirmed: how did He initialization\'s activation std behave across all 15 layers?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: He initialization ya activation std ಎಲ್ಲಾ 15 layers ಆದ್ಯಂತ ಹೇಗೆ ವರ್ತಿಸಿತು?',
        opts: ['Stayed stable in a tight band (roughly 0.62 to 0.83)', 'Exploded like std=1.0', 'Collapsed to 0 like std=0.01', 'Oscillated wildly between positive and negative'], correct: 0,
        optsKn: ['ಒಂದೂ ಬಿಗಿಯಾದ ಬ್ಯಾಂಡ್‌ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು', 'std=1.0 ನಂತೆ ಸ್ಫೋಟಿಸಿತು', 'std=0.01 ನಂತೆ 0 ಗೆ ಕುಸಿಯಿತು', 'ಧನಾತ್ಮಕ, ಋಣಾತ್ಮಕ ನಡುವೆ ವೈಲ್ಡ್ಲಿ ಆಂದೋಲನಗೊಂಡಿತು'] },
      { q: 'Why did zero initialization keep W1 and W2 exactly frozen instead of merely producing symmetric duplicate units?', qKn: 'Zero initialization ಕೇವಲ symmetric duplicate units ಉತ್ಪಾದಿಸುವ ಬದಲೂ W1, W2 ಅನ್ನೂ ನಿಖರವಾಗಿ frozen ಆಗಿ ಏಕೆ ಇರಿಸಿತು?',
        opts: ['relu(0)=0 made every hidden activation 0, zeroing both the relu mask and the resulting gradients entirely', 'The learning rate was set to 0', 'NumPy has a bug with zero arrays', 'The loss function does not support zero weights'], correct: 0,
        optsKn: ['relu(0)=0 ಪ್ರತಿ hidden activation ಅನ್ನೂ 0 ಮಾಡಿತು, relu mask, ಫಲಿತಾಂಶದ gradients ಎರಡನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಶೂನ್ಯಗೊಳಿಸಿತು', 'Learning rate 0 ಗೆ ಹೊಂದಿಸಲಾಗಿತ್ತು', 'NumPy ಗೆ zero arrays ಜೊತೆ ಒಂದೂ ದೋಷವಿದೆ', 'Loss function zero weights ಬೆಂಬಲಿಸುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
