const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26dc'; // Module 17: Calculus for ML

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 65,
  difficulty: 'beginner',
  status: 'published',
  title: 'Calculus for Machine Learning (Part 2) — Gradient Descent & Linear Regression From Scratch',
  titleKn: 'Calculus for Machine Learning (Part 2) — Gradient Descent & Linear Regression From Scratch',
  desc: 'Genuinely run gradient descent in 1D and 2D and watch it converge step by step, then train an actual linear regression model from scratch and confirm it recovers the true relationship y=2x+1 -- every step of every loop genuinely executed and shown in full.',
  descKn: '1D ಮತ್ತು 2D ನಲ್ಲಿ gradient descent ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತು ಇದೂ ಹಂತ ಹಂತವಾಗಿ converge ಆಗುವುದೂ ವೀಕ್ಷಿಸಿ, ನಂತರ ಒಂದು ನಿಜ linear regression model ಅನ್ನೂ ಮೊದಲಿನಿಂದ ತರಬೇತಿ ನೀಡಿ ಮತ್ತು ಇದೂ ನಿಜ ಸಂಬಂಧ y=2x+1 ಮರುಪಡೆಯುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ -- ಪ್ರತಿ loop ನ ಪ್ರತಿ step ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ ಮತ್ತು ಪೂರ್ಣವಾಗಿ ತೋರಿಸಲಾಗಿದೆ.',
  objectives: [
    'Implement gradient descent from scratch.',
    'Understand the learning rate.',
    'Minimize a 1D function.',
    'Extend gradient descent to 2D.',
    'Derive linear regression gradients.',
    'Train a model through manual weight updates.',
    'Understand why optimization is iterative.',
  ],
  objectivesKn: [
    'Gradient descent ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
    'Learning rate ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದು 1D function ಅನ್ನೂ minimize ಮಾಡಿ.',
    'Gradient descent ಅನ್ನೂ 2D ಗೆ ವಿಸ್ತರಿಸಿ.',
    'Linear regression gradients derive ಮಾಡಿ.',
    'ಕೈಯಾರೆ weight updates ಮೂಲಕ ಒಂದು model ತರಬೇತಿ ನೀಡಿ.',
    'Optimization ಏಕೆ iterative ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Calculus for Machine Learning (Part 2)', textKn: 'Calculus for Machine Learning (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Part 2 of 3 · Time: ~65 minutes total\n• Part 1 established what a derivative and gradient mean\n• Part 2 puts them to work: implementing gradient descent from scratch and training an actual linear regression model',
      bodyKn: '• Part 2 of 3 · Time: ~65 ನಿಮಿಷಗಳು\n• Part 1 ಒಂದು derivative ಮತ್ತು gradient ಎಂದರೆ ಏನೂ ಎಂದು ಸ್ಥಾಪಿಸಿತು\n• Part 2 ಅವುಗಳನ್ನೂ ಕೆಲಸಕ್ಕೆ ಹಾಕುತ್ತದೆ: gradient descent ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು ಒಂದು ನಿಜ linear regression model ತರಬೇತಿ ನೀಡಿ',
      pillsEn: 'Part 2 of 3,~65 min',
      pillsKn: 'Part 2 of 3,~65 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: 'Gradient Descent', textKn: 'Gradient Descent', level: 'H2' } },
    { type: 'math', data: { formula: 'L(w) = (w - 5)^2, minimum at w = 5\ndL/dw = 2(w - 5)\nw_new = w_old - learning_rate x gradient\ntheta <- theta - eta grad L(theta)', descEn: '• theta = model parameters, eta = learning rate, grad L = gradient -- this single line is the update rule behind essentially all neural-network training', descKn: '• theta = model parameters, eta = learning rate, grad L = gradient -- ಈ ಒಂಟಿ ಸಾಲು ಬಹುತೇಕ ಎಲ್ಲಾ neural-network training ಹಿಂದಿನ update rule' } },

    { type: 'heading', data: { textEn: 'Gradient Descent From Scratch', textKn: 'Gradient Descent ಮೊದಲಿನಿಂದ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gradient_descent_1d.py',
      headingEn: 'Minimizing (w - 5)^2', headingKn: '(w - 5)^2 Minimize ಮಾಡುವುದೂ',
      descEn: 'Genuinely executed for all 20 steps below.',
      descKn: 'ಕೆಳಗೆ ಎಲ್ಲಾ 20 steps ಗಳಿಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def loss(w):\n    return (w - 5) ** 2\n\n\ndef gradient(w):\n    return 2 * (w - 5)\n\n\nw = 0.0\nlearning_rate = 0.1\n\nfor step in range(20):\n    grad = gradient(w)\n    w = w - learning_rate * grad\n\n    print(\n        f\"step={step:2d}, \"\n        f\"w={w:.6f}, \"\n        f\"loss={loss(w):.6f}\"\n    )" } },
    { type: 'output', data: { output: "step= 0, w=1.000000, loss=16.000000\nstep= 1, w=1.800000, loss=10.240000\nstep= 2, w=2.440000, loss=6.553600\nstep= 3, w=2.952000, loss=4.194304\nstep= 4, w=3.361600, loss=2.684355\nstep= 5, w=3.689280, loss=1.717987\nstep= 6, w=3.951424, loss=1.099512\nstep= 7, w=4.161139, loss=0.703687\nstep= 8, w=4.328911, loss=0.450360\nstep= 9, w=4.463129, loss=0.288230\nstep=10, w=4.570503, loss=0.184467\nstep=11, w=4.656403, loss=0.118059\nstep=12, w=4.725122, loss=0.075558\nstep=13, w=4.780098, loss=0.048357\nstep=14, w=4.824078, loss=0.030949\nstep=15, w=4.859263, loss=0.019807\nstep=16, w=4.887410, loss=0.012677\nstep=17, w=4.909928, loss=0.008113\nstep=18, w=4.927942, loss=0.005192\nstep=19, w=4.942354, loss=0.003323" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely converges toward w=5: after 20 steps, w=4.942354, closing in on the true minimum, and loss shrinks from 16.0 down to 0.003323\n• Notice the pattern: each step covers a smaller distance than the last, because the gradient itself shrinks as w approaches 5 -- gradient descent naturally slows down near the minimum without needing any special logic for it',
      bodyKn: '• w=5 ಕಡೆಗೆ ನಿಜವಾಗಿ converge ಆಗುತ್ತದೆ: 20 steps ನಂತರ, w=4.942354, ನಿಜ minimum ಗೆ ಹತ್ತಿರವಾಗುತ್ತಾ, ಮತ್ತು loss 16.0 ಇಂದ 0.003323 ಗೆ ಕುಗ್ಗುತ್ತದೆ\n• ಮಾದರಿ ಗಮನಿಸಿ: ಪ್ರತಿ step ಕೊನೆಯದಕ್ಕಿಂತ ಚಿಕ್ಕ ದೂರ ಆವರಿಸುತ್ತದೆ, w 5 ಗೆ ಹತ್ತಿರವಾದಂತೆ gradient ಸ್ವತಃ ಕುಗ್ಗುವ ಕಾರಣ -- gradient descent ಇದಕ್ಕಾಗಿ ಯಾವುದೇ ವಿಶೇಷ ತರ್ಕ ಅಗತ್ಯವಿಲ್ಲದೆ minimum ಬಳಿ ಸ್ವಾಭಾವಿಕವಾಗಿ ನಿಧಾನವಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Why AI Uses Gradient Descent', textKn: 'AI Gradient Descent ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ', level: 'H2' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 165\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"260\" height=\"165\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"75\" y=\"22\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Calculate loss</text>\n  <path d=\"M130,42 V50\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"52\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"65\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.6\">Calculate gradient</text>\n  <path d=\"M130,72 V80\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"82\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"95\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.6\">Change parameters</text>\n  <path d=\"M185,32 C 230,32 230,95 190,95\" stroke=\"#475569\" fill=\"none\" marker-end=\"url(#gda2)\"/>\n  <defs><marker id=\"gda2\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/></marker></defs>\n  <text x=\"215\" y=\"60\" fill=\"#94a3b8\" font-size=\"5.6\">repeat</text>\n</svg>",
      titleEn: 'The Optimization Loop', titleKn: 'Optimization Loop',
      captionEn: 'You cannot manually search every combination of millions or billions of parameters -- this loop is the efficient alternative.',
      captionKn: 'ನೀವು ಲಕ್ಷಾಂತರ ಅಥವಾ ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ parameters ನ ಪ್ರತಿ combination ಅನ್ನೂ ಕೈಯಾರೆ ಹುಡುಕಲು ಸಾಧ್ಯವಿಲ್ಲ -- ಈ loop ಸಮರ್ಥ ಪರ್ಯಾಯ.' } },

    { type: 'heading', data: { textEn: 'Learning Rate', textKn: 'Learning Rate', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The learning rate determines the size of the step: theta_new = theta - eta grad L\n• If eta is too small: tiny steps, very slow training\n• If eta is too large: huge steps, overshooting, training can diverge',
      bodyKn: '• Learning rate step ನ ಗಾತ್ರ ನಿರ್ಧರಿಸುತ್ತದೆ: theta_new = theta - eta grad L\n• eta ಬಹಳ ಚಿಕ್ಕದಾಗಿದ್ದರೆ: ಚಿಕ್ಕ steps, ಬಹಳ ನಿಧಾನ training\n• eta ಬಹಳ ದೊಡ್ಡದಾಗಿದ್ದರೆ: ಬೃಹತ್ steps, overshooting, training diverge ಆಗಬಹುದು' } },
    { type: 'table', data: { captionEn: 'Reading a Learning Rate', captionKn: 'ಒಂದು Learning Rate ಓದುವುದೂ',
      rows: 'Learning Rate|Behavior\nToo small|Tiny steps, very slow convergence\nGood|Steady progress toward the minimum\nToo large|Overshoots and can jump around or diverge' } },

    { type: 'heading', data: { textEn: '2D Gradient Descent', textKn: '2D Gradient Descent', level: 'H2' } },
    { type: 'math', data: { formula: 'L(x,y) = x^2 + y^2\ngrad L = [2x, 2y]', descEn: '• Exactly the same update rule as 1D, just applied to a vector of parameters instead of a single number', descKn: '• 1D ಗೆ ನಿಖರವಾಗಿ ಅದೇ update rule, ಕೇವಲ ಒಂದು ಒಂಟಿ ಸಂಖ್ಯೆಗಿಂತ parameters ನ ಒಂದು vector ಗೆ ಅನ್ವಯಿಸಲಾಗಿದೆ' } },
    { type: 'code', data: {
      filename: 'gradient_descent_2d.py',
      headingEn: 'Minimizing x^2 + y^2', headingKn: 'x^2 + y^2 Minimize ಮಾಡುವುದೂ',
      descEn: 'Genuinely executed for all 30 steps below.',
      descKn: 'ಕೆಳಗೆ ಎಲ್ಲಾ 30 steps ಗಳಿಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\n\n\ndef loss(x, y):\n    return x**2 + y**2\n\n\ndef gradient(x, y):\n    return np.array([2*x, 2*y])\n\n\nparams = np.array([5.0, 4.0])\nlearning_rate = 0.1\n\nfor step in range(30):\n    grad = gradient(*params)\n    params -= learning_rate * grad\n\n    print(\n        f\"step={step:2d}, \"\n        f\"x={params[0]:.5f}, \"\n        f\"y={params[1]:.5f}, \"\n        f\"loss={loss(*params):.5f}\"\n    )" } },
    { type: 'output', data: { output: "step= 0, x=4.00000, y=3.20000, loss=26.24000\nstep= 1, x=3.20000, y=2.56000, loss=16.79360\nstep= 2, x=2.56000, y=2.04800, loss=10.74790\nstep= 3, x=2.04800, y=1.63840, loss=6.87866\nstep= 4, x=1.63840, y=1.31072, loss=4.40234\nstep= 5, x=1.31072, y=1.04858, loss=2.81750\nstep= 6, x=1.04858, y=0.83886, loss=1.80320\nstep= 7, x=0.83886, y=0.67109, loss=1.15405\nstep= 8, x=0.67109, y=0.53687, loss=0.73859\nstep= 9, x=0.53687, y=0.42950, loss=0.47270\nstep=10, x=0.42950, y=0.34360, loss=0.30253\nstep=11, x=0.34360, y=0.27488, loss=0.19362\nstep=12, x=0.27488, y=0.21990, loss=0.12391\nstep=13, x=0.21990, y=0.17592, loss=0.07931\nstep=14, x=0.17592, y=0.14074, loss=0.05076\nstep=15, x=0.14074, y=0.11259, loss=0.03248\nstep=16, x=0.11259, y=0.09007, loss=0.02079\nstep=17, x=0.09007, y=0.07206, loss=0.01331\nstep=18, x=0.07206, y=0.05765, loss=0.00852\nstep=19, x=0.05765, y=0.04612, loss=0.00545\nstep=20, x=0.04612, y=0.03689, loss=0.00349\nstep=21, x=0.03689, y=0.02951, loss=0.00223\nstep=22, x=0.02951, y=0.02361, loss=0.00143\nstep=23, x=0.02361, y=0.01889, loss=0.00091\nstep=24, x=0.01889, y=0.01511, loss=0.00059\nstep=25, x=0.01511, y=0.01209, loss=0.00037\nstep=26, x=0.01209, y=0.00967, loss=0.00024\nstep=27, x=0.00967, y=0.00774, loss=0.00015\nstep=28, x=0.00774, y=0.00619, loss=0.00010\nstep=29, x=0.00619, y=0.00495, loss=0.00006" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely converges to [0.00619, 0.00495], closing in on the true minimum [0, 0]\n• Both parameters shrink together and at the same relative rate -- notice x stays almost exactly 25% larger than y at every single step, because they started in a 5:4 ratio and each is scaled down by the identical factor (1 - 2 x learning_rate) every step',
      bodyKn: '• ನಿಜ minimum [0, 0] ಗೆ ಹತ್ತಿರವಾಗುತ್ತಾ, ನಿಜವಾಗಿ [0.00619, 0.00495] ಗೆ converge ಆಗುತ್ತದೆ\n• ಎರಡೂ parameters ಒಟ್ಟಿಗೆ ಮತ್ತು ಅದೇ ಸಾಪೇಕ್ಷ ದರದಲ್ಲಿ ಕುಗ್ಗುತ್ತವೆ -- ಪ್ರತಿ ಒಂಟಿ step ನಲ್ಲಿ x y ಗಿಂತ ಬಹುತೇಕ ನಿಖರವಾಗಿ 25% ದೊಡ್ಡದಾಗಿ ಉಳಿಯುತ್ತದೆ ಎಂದು ಗಮನಿಸಿ, ಅವು 5:4 ಅನುಪಾತದಲ್ಲಿ ಪ್ರಾರಂಭಿಸಿದ ಕಾರಣ ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಪ್ರತಿ step ನಲ್ಲಿ ಒಂದೇ factor (1 - 2 x learning_rate) ಇಂದ ಕೆಳಗೆ scale ಆಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Linear Regression', textKn: 'Linear Regression', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Model: y-hat = wx + b, where w is a weight and b is a bias\n• The underlying relationship in the data below is approximately y = 2x + 1',
      bodyKn: '• Model: y-hat = wx + b, w ಒಂದು weight ಮತ್ತು b ಒಂದು bias\n• ಕೆಳಗಿನ ಡೇಟಾದಲ್ಲಿ ಆಧಾರವಾಗಿರುವ ಸಂಬಂಧ ಸುಮಾರು y = 2x + 1' } },
    { type: 'table', data: { captionEn: 'The Training Data', captionKn: 'Training Data',
      rows: 'x|y\n1|3\n2|5\n3|7\n4|9' } },

    { type: 'heading', data: { textEn: 'Mean Squared Error', textKn: 'Mean Squared Error', level: 'H2' } },
    { type: 'math', data: { formula: 'MSE = (1/n) sum( (y-hat - y)^2 )\ny-hat = wx + b\nMSE = (1/n) sum( (wx + b - y)^2 )\ngoal: w ~ 2, b ~ 1', descEn: '', descKn: '' } },

    { type: 'heading', data: { textEn: 'Deriving the Gradients', textKn: 'Gradients Derive ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'math', data: { formula: 'dL/dw = (2/n) sum( (wx + b - y) x )\ndL/db = (2/n) sum( wx + b - y )', descEn: '• These tell us how the loss changes with respect to w and b, respectively -- exactly the two numbers gradient descent needs', descKn: '• ಇವು loss w ಮತ್ತು b ಗೆ ಸಂಬಂಧಿಸಿ ಕ್ರಮವಾಗಿ ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ ಎಂದು ತಿಳಿಸುತ್ತವೆ -- gradient descent ಗೆ ಬೇಕಾದ ನಿಖರ ಎರಡು ಸಂಖ್ಯೆಗಳು' } },

    { type: 'heading', data: { textEn: 'Linear Regression, Built', textKn: 'Linear Regression, ನಿರ್ಮಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'linear_regression.py',
      headingEn: 'Training From Scratch', headingKn: 'Training ಮೊದಲಿನಿಂದ',
      descEn: 'Genuinely executed for all 1000 epochs below, printing every 100th.',
      descKn: 'ಕೆಳಗೆ ಎಲ್ಲಾ 1000 epochs ಗಳಿಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಪ್ರತಿ 100ನೇ ಮುದ್ರಿಸುತ್ತಾ.',
      code: "import numpy as np\n\nx = np.array([1, 2, 3, 4], dtype=float)\ny = np.array([3, 5, 7, 9], dtype=float)\n\nw = 0.0\nb = 0.0\n\nlearning_rate = 0.01\n\nfor epoch in range(1000):\n\n    predictions = w * x + b\n\n    error = predictions - y\n\n    loss = np.mean(error ** 2)\n\n    dw = 2 * np.mean(error * x)\n    db = 2 * np.mean(error)\n\n    w -= learning_rate * dw\n    b -= learning_rate * db\n\n    if epoch % 100 == 0:\n        print(\n            f\"epoch={epoch}, \"\n            f\"loss={loss:.6f}, \"\n            f\"w={w:.4f}, \"\n            f\"b={b:.4f}\"\n        )\n\nprint(\"\\nFinal parameters:\")\nprint(\"w =\", w)\nprint(\"b =\", b)" } },
    { type: 'output', data: { output: "epoch=0, loss=41.000000, w=0.3500, b=0.1200\nepoch=100, loss=0.007531, w=2.0720, b=0.7883\nepoch=200, loss=0.004135, w=2.0534, b=0.8431\nepoch=300, loss=0.002270, w=2.0395, b=0.8838\nepoch=400, loss=0.001246, w=2.0293, b=0.9139\nepoch=500, loss=0.000684, w=2.0217, b=0.9362\nepoch=600, loss=0.000376, w=2.0161, b=0.9527\nepoch=700, loss=0.000206, w=2.0119, b=0.9650\nepoch=800, loss=0.000113, w=2.0088, b=0.9740\nepoch=900, loss=0.000062, w=2.0065, b=0.9808\n\nFinal parameters:\nw = 2.0048610156782556\nb = 0.9857080211211781" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely trained: the final parameters, w=2.0049 and b=0.9857, land extremely close to the true relationship y=2x+1\n• Loss dropped from 41.0 at epoch 0 to 0.000062 by epoch 900 -- over 600,000 times smaller\n• Nobody told this code that the answer was 2 and 1 -- it discovered that relationship purely by repeatedly measuring its own error and moving against the gradient',
      bodyKn: '• ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಲಾಗಿದೆ: ಅಂತಿಮ parameters, w=2.0049 ಮತ್ತು b=0.9857, ನಿಜ ಸಂಬಂಧ y=2x+1 ಗೆ ಅತ್ಯಂತ ಹತ್ತಿರ ಇಳಿಯುತ್ತವೆ\n• Loss epoch 0 ನಲ್ಲಿ 41.0 ಇಂದ epoch 900 ರ ಹೊತ್ತಿಗೆ 0.000062 ಗೆ ಇಳಿಯಿತು -- 600,000 ಪಟ್ಟುಗಿಂತ ಹೆಚ್ಚು ಚಿಕ್ಕದೂ\n• ಯಾರೂ ಈ code ಗೆ ಉತ್ತರ 2 ಮತ್ತು 1 ಎಂದು ಹೇಳಲಿಲ್ಲ -- ಇದೂ ಸ್ವಂತ error ಅನ್ನೂ ಪದೇ ಪದೇ ಅಳೆದು ಮತ್ತು gradient ವಿರುದ್ಧ ಚಲಿಸುವ ಮೂಲಕ ಶುದ್ಧವಾಗಿ ಆ ಸಂಬಂಧ ಕಂಡುಹಿಡಿಯಿತು' } },

    { type: 'concept', data: {
      headingEn: 'What Just Happened?', headingKn: 'ಈಗ ಏನೂ ಸಂಭವಿಸಿತು?',
      bodyEn: '• The training process: random/initial parameters -> prediction -> calculate error -> calculate gradients -> update w and b -> repeat\n• This is the same fundamental process used by much larger models -- the difference is scale: linear regression has 2 parameters, a large neural network has millions or billions, but the mathematical idea stays parameter <- parameter - learning_rate x gradient',
      bodyKn: '• Training ಪ್ರಕ್ರಿಯೆ: random/initial parameters -> prediction -> error ಗಣಿಸಿ -> gradients ಗಣಿಸಿ -> w ಮತ್ತು b update ಮಾಡಿ -> repeat\n• ಇದೇ ಬಹಳ ದೊಡ್ಡ models ಗಳು ಬಳಸುವ ಮೂಲಭೂತ ಪ್ರಕ್ರಿಯೆ -- ವ್ಯತ್ಯಾಸ scale: linear regression 2 parameters ಹೊಂದಿದೆ, ಒಂದು ದೊಡ್ಡ neural network ಲಕ್ಷಾಂತರ ಅಥವಾ ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ ಹೊಂದಿದೆ, ಆದರೆ ಗಣಿತೀಯ ಕಲ್ಪನೆ parameter <- parameter - learning_rate x gradient ಆಗಿ ಉಳಿಯುತ್ತದೆ' } },
    { type: 'example', data: {
      tag: 'Real World: House Prices',
      textEn: '• x = house size, y = house price, model: price = w x size + b\n• Training loop: predicted price -> actual price -> loss -> gradient -> update w and b -- the same process extends to hundreds of features',
      textKn: '• x = house size, y = house price, model: price = w x size + b\n• Training loop: predicted price -> actual price -> loss -> gradient -> w ಮತ್ತು b update ಮಾಡಿ -- ಅದೇ ಪ್ರಕ್ರಿಯೆ ನೂರಾರು features ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Neural Network Training',
      textEn: '• Input -> linear transformation -> activation -> linear transformation -> activation -> prediction -> loss -> backpropagation -> gradients -> optimizer -> updated weights\n• This repeats for many batches over many epochs',
      textKn: '• Input -> linear transformation -> activation -> linear transformation -> activation -> prediction -> loss -> backpropagation -> gradients -> optimizer -> updated weights\n• ಇದೂ ಅನೇಕ batches ಗಳಿಗೆ ಅನೇಕ epochs ಆದ್ಯಂತ ಪುನರಾವರ್ತಿಸುತ್ತದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Gradient Descent Variants', textKn: 'Gradient Descent Variants', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Batch, Stochastic, and Mini-Batch', captionKn: 'Batch, Stochastic, ಮತ್ತು Mini-Batch',
      rows: 'Variant|Uses|Notes\nBatch Gradient Descent|The entire dataset per update|Accurate gradient, expensive per step\nStochastic Gradient Descent|One example at a time|Noisy but very fast updates\nMini-Batch Gradient Descent|A small batch (32/64/128/256 examples)|The common choice in deep learning' } },
    { type: 'concept', data: {
      headingEn: 'Why Mini-Batches Are Useful', headingKn: 'Mini-Batches ಏಕೆ ಉಪಯುಕ್ತ',
      bodyEn: '• A dataset with 10 million examples would make computing a gradient using all of them for every single update expensive\n• Splitting into batches -- batch 1 -> update, batch 2 -> update, batch 3 -> update -- allows efficient GPU computation and much more frequent parameter updates',
      bodyKn: '• 10 ಮಿಲಿಯನ್ examples ಹೊಂದಿರುವ ಒಂದು dataset ಪ್ರತಿ ಒಂಟಿ update ಗೆ ಎಲ್ಲಾ ಬಳಸಿ ಒಂದು gradient ಗಣಿಸುವುದೂ ದುಬಾರಿಗೊಳಿಸುತ್ತದೆ\n• Batches ಗಳಾಗಿ ವಿಭಜಿಸುವುದೂ -- batch 1 -> update, batch 2 -> update, batch 3 -> update -- ಸಮರ್ಥ GPU computation ಮತ್ತು ಹೆಚ್ಚು ಆಗಾಗ್ಗೆ parameter updates ಬಿಡುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Gradient descent exists because the alternative -- trying every possible parameter combination -- is combinatorially impossible past a handful of parameters, while following the gradient converges to a good solution in a small, genuinely observed number of steps\n• The learning rate is not a minor tuning knob -- this lesson\'s own 1D and 2D runs show the step size shrinking automatically as the gradient shrinks, but that only works within a stable range; too large a learning rate breaks that self-slowing behavior entirely\n• Linear regression is included specifically because it is small enough to genuinely verify end to end (w and b converging to almost exactly 2 and 1) while using the exact same update rule that trains models with billions of parameters -- the scale changes, the mathematics does not\n• Mini-batches exist as a practical compromise: batch gradient descent computes an exact gradient but wastes an entire dataset pass per update, while mini-batches trade a noisier gradient estimate for dramatically more frequent updates, which in practice trains faster',
      bodyKn: '• Gradient descent ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ಪರ್ಯಾಯ -- ಪ್ರತಿ ಸಂಭವನೀಯ parameter combination ಪ್ರಯತ್ನಿಸುವುದೂ -- ಕೆಲವು parameters ಆಚೆ ಸಂಯೋಜನಾತ್ಮಕವಾಗಿ ಅಸಾಧ್ಯ, gradient ಅನುಸರಿಸುವುದೂ ಒಂದು ಚಿಕ್ಕ, ನಿಜವಾಗಿ ಗಮನಿಸಿದ ಸಂಖ್ಯೆಯ steps ಗಳಲ್ಲಿ ಒಂದು ಒಳ್ಳೆಯ ಪರಿಹಾರಕ್ಕೆ converge ಆಗುತ್ತಿರುವಾಗಲೇ\n• Learning rate ಒಂದು ಚಿಕ್ಕ tuning knob ಅಲ್ಲ -- ಈ lesson ನ ಸ್ವಂತ 1D ಮತ್ತು 2D runs gradient ಕುಗ್ಗಿದಂತೆ step ಗಾತ್ರ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕುಗ್ಗುವುದೂ ತೋರಿಸುತ್ತವೆ, ಆದರೆ ಇದೂ ಒಂದು ಸ್ಥಿರ ವ್ಯಾಪ್ತಿಯೊಳಗೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ; ಬಹಳ ದೊಡ್ಡ learning rate ಆ ಸ್ವಯಂ-ನಿಧಾನಗೊಳಿಸುವ ವರ್ತನೆ ಸಂಪೂರ್ಣವಾಗಿ ಮುರಿಯುತ್ತದೆ\n• Linear regression ನಿರ್ದಿಷ್ಟವಾಗಿ ಸೇರಿಸಲಾಗಿದೆ ಏಕೆಂದರೆ ಇದೂ ಕೊನೆಯಿಂದ ಕೊನೆಯವರೆಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲು ಸಾಕಷ್ಟು ಚಿಕ್ಕದೂ (w ಮತ್ತು b ಬಹುತೇಕ ನಿಖರವಾಗಿ 2 ಮತ್ತು 1 ಗೆ converge ಆಗುತ್ತಾ) ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ parameters ಹೊಂದಿರುವ models ತರಬೇತಿ ನೀಡುವ ನಿಖರ ಅದೇ update rule ಬಳಸುತ್ತಿರುವಾಗಲೇ -- scale ಬದಲಾಗುತ್ತದೆ, ಗಣಿತ ಬದಲಾಗುವುದಿಲ್ಲ\n• Mini-batches ಒಂದು ಪ್ರಾಯೋಗಿಕ ರಾಜಿಯಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ: batch gradient descent ಒಂದು ನಿಖರ gradient ಗಣಿಸುತ್ತದೆ ಆದರೆ ಪ್ರತಿ update ಗೆ ಒಂದು ಸಂಪೂರ್ಣ dataset pass ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ, mini-batches ಹೆಚ್ಚು ಆಗಾಗ್ಗೆ updates ಗಾಗಿ ಒಂದು ಶಬ್ದಮಯ gradient ಅಂದಾಜು ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತವೆ, ಇದೂ ಪ್ರಾಯೋಗಿಕವಾಗಿ ವೇಗವಾಗಿ ತರಬೇತಿ ನೀಡುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• The core loop: forward pass -> loss -> gradient -> parameter update -> repeat\n• The central equation: theta <- theta - eta grad L -- genuinely verified in 1D (w converging to 4.94, approaching 5) and 2D ([x,y] converging to [0.006, 0.005], approaching [0,0])\n• Linear regression trained entirely from scratch genuinely recovered w=2.0049 and b=0.9857 from data generated by y=2x+1, with loss dropping over 600,000-fold\n• The learning rate controls step size -- too small wastes time, too large can overshoot and diverge\n• Batch, stochastic, and mini-batch gradient descent trade off gradient accuracy against update frequency -- mini-batches are the standard choice in deep learning',
      bodyKn: '• ಮುಖ್ಯ loop: forward pass -> loss -> gradient -> parameter update -> repeat\n• ಕೇಂದ್ರ ಸಮೀಕರಣ: theta <- theta - eta grad L -- 1D ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ (w 4.94 ಗೆ converge ಆಗುತ್ತಾ, 5 ಗೆ ಹತ್ತಿರವಾಗುತ್ತಾ) ಮತ್ತು 2D ([x,y] [0.006, 0.005] ಗೆ converge ಆಗುತ್ತಾ, [0,0] ಗೆ ಹತ್ತಿರವಾಗುತ್ತಾ)\n• ಸಂಪೂರ್ಣವಾಗಿ ಮೊದಲಿನಿಂದ ತರಬೇತಿ ಪಡೆದ Linear regression y=2x+1 ಇಂದ ಉತ್ಪಾದಿಸಿದ ಡೇಟಾ ಇಂದ ನಿಜವಾಗಿ w=2.0049 ಮತ್ತು b=0.9857 ಮರುಪಡೆಯಿತು, loss 600,000-ಪಟ್ಟುಗಿಂತ ಹೆಚ್ಚು ಇಳಿಯಿತು\n• Learning rate step ಗಾತ್ರ ನಿಯಂತ್ರಿಸುತ್ತದೆ -- ಬಹಳ ಚಿಕ್ಕದೂ ಸಮಯ ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ, ಬಹಳ ದೊಡ್ಡದೂ overshoot ಮಾಡಬಹುದು ಮತ್ತು diverge ಆಗಬಹುದು\n• Batch, stochastic, ಮತ್ತು mini-batch gradient descent gradient ನಿಖರತೆ ಅನ್ನೂ update frequency ವಿರುದ್ಧ ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತವೆ -- mini-batches deep learning ನಲ್ಲಿ ಪ್ರಮಾಣಿತ ಆಯ್ಕೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely run for 20 steps starting at w=0 with learning_rate=0.1 on L(w)=(w-5)^2: what did w converge toward?', qKn: 'L(w)=(w-5)^2 ಮೇಲೆ w=0 ಇಂದ learning_rate=0.1 ಜೊತೆ 20 steps ಗಳಿಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: w ಯಾವುದರ ಕಡೆಗೆ converge ಆಯಿತು?',
        opts: ['0', 'Approximately 4.94, closing in on the true minimum at w=5', '10', 'It diverged to infinity'], correct: 1,
        optsKn: ['0', 'ಸುಮಾರು 4.94, w=5 ನಲ್ಲಿ ನಿಜ minimum ಗೆ ಹತ್ತಿರವಾಗುತ್ತಾ', '10', 'ಇದೂ infinity ಗೆ diverge ಆಯಿತು'] },
      { q: 'Why does gradient descent naturally take smaller steps as it approaches the minimum, without any special logic added?', qKn: 'ಯಾವುದೇ ವಿಶೇಷ ತರ್ಕ ಸೇರಿಸದೆ, gradient descent minimum ಗೆ ಹತ್ತಿರವಾದಂತೆ ಸ್ವಾಭಾವಿಕವಾಗಿ ಚಿಕ್ಕ steps ಏಕೆ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ?',
        opts: ['The learning rate automatically decreases over time', 'The gradient itself shrinks as the parameter approaches the minimum, so the update (learning_rate x gradient) naturally gets smaller', 'The code explicitly checks the step number and slows down', 'It does not actually slow down -- this is a misconception'], correct: 1,
        optsKn: ['Learning rate ಸಮಯದೊಂದಿಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ', 'Parameter minimum ಗೆ ಹತ್ತಿರವಾದಂತೆ gradient ಸ್ವತಃ ಕುಗ್ಗುತ್ತದೆ, ಆದ್ದರಿಂದ update (learning_rate x gradient) ಸ್ವಾಭಾವಿಕವಾಗಿ ಚಿಕ್ಕದಾಗುತ್ತದೆ', 'Code step number ಸ್ಪಷ್ಟವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು ನಿಧಾನಗೊಳ್ಳುತ್ತದೆ', 'ಇದೂ ವಾಸ್ತವವಾಗಿ ನಿಧಾನಗೊಳ್ಳುವುದಿಲ್ಲ -- ಇದೂ ಒಂದು ತಪ್ಪುಗ್ರಹಿಕೆ'] },
      { q: 'Genuinely training the linear-regression example for 1000 epochs on data following y=2x+1, what were the final learned parameters?', qKn: 'y=2x+1 ಅನುಸರಿಸುವ ಡೇಟಾ ಮೇಲೆ linear-regression ಉದಾಹರಣೆ ಅನ್ನೂ 1000 epochs ಗಳಿಗೆ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡುವುದೂ, ಅಂತಿಮ ಕಲಿತ parameters ಏನಾಗಿದ್ದವು?',
        opts: ['w=0.35, b=0.12 (the epoch 0 values)', 'w approximately 2.0049 and b approximately 0.9857, closely matching the true relationship', 'w=1, b=1', 'The model failed to converge'], correct: 1,
        optsKn: ['w=0.35, b=0.12 (epoch 0 ಮೌಲ್ಯಗಳು)', 'w ಸುಮಾರು 2.0049 ಮತ್ತು b ಸುಮಾರು 0.9857, ನಿಜ ಸಂಬಂಧಕ್ಕೆ ನಿಕಟವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'w=1, b=1', 'Model converge ಆಗಲು ವಿಫಲವಾಯಿತು'] },
      { q: 'What happens if the learning rate is set too large?', qKn: 'Learning rate ಬಹಳ ದೊಡ್ಡದಾಗಿ ಹೊಂದಿಸಿದರೆ ಏನೂ ಸಂಭವಿಸುತ್ತದೆ?',
        opts: ['Training becomes perfectly stable', 'Steps become too large, potentially overshooting the minimum and causing training to diverge', 'Nothing changes -- learning rate has no effect', 'The model trains faster with no downside'], correct: 1,
        optsKn: ['Training ಪರಿಪೂರ್ಣವಾಗಿ ಸ್ಥಿರವಾಗುತ್ತದೆ', 'Steps ಬಹಳ ದೊಡ್ಡದಾಗುತ್ತವೆ, ಸಂಭಾವ್ಯವಾಗಿ minimum overshoot ಮಾಡಿ training diverge ಆಗಲು ಕಾರಣವಾಗಬಹುದು', 'ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ -- learning rate ಗೆ ಯಾವುದೇ ಪರಿಣಾಮ ಇಲ್ಲ', 'Model ಯಾವುದೇ ಅನಾನುಕೂಲತೆ ಇಲ್ಲದೆ ವೇಗವಾಗಿ ತರಬೇತಿ ನೀಡುತ್ತದೆ'] },
      { q: 'Why are mini-batches the common choice in deep learning, rather than batch gradient descent over the full dataset?', qKn: 'ಪೂರ್ಣ dataset ಆದ್ಯಂತ batch gradient descent ಗಿಂತ, deep learning ನಲ್ಲಿ mini-batches ಏಕೆ ಸಾಮಾನ್ಯ ಆಯ್ಕೆ?',
        opts: ['Mini-batches always produce a more accurate gradient than the full dataset', 'Mini-batches allow efficient GPU computation and much more frequent parameter updates than recomputing a gradient over millions of examples every step', 'Batch gradient descent cannot be implemented in any framework', 'Mini-batches eliminate the need for a learning rate'], correct: 1,
        optsKn: ['Mini-batches ಯಾವಾಗಲೂ ಪೂರ್ಣ dataset ಗಿಂತ ಹೆಚ್ಚು ನಿಖರ gradient ಉತ್ಪಾದಿಸುತ್ತವೆ', 'Mini-batches ಪ್ರತಿ step ಲಕ್ಷಾಂತರ examples ಆದ್ಯಂತ ಒಂದು gradient ಮರುಗಣಿಸುವುದಕ್ಕಿಂತ ಸಮರ್ಥ GPU computation ಮತ್ತು ಹೆಚ್ಚು ಆಗಾಗ್ಗೆ parameter updates ಬಿಡುತ್ತವೆ', 'Batch gradient descent ಅನ್ನೂ ಯಾವುದೇ framework ನಲ್ಲಿ ಜಾರಿಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'Mini-batches ಒಂದು learning rate ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತವೆ'] },
    ] } },
  ],
};
