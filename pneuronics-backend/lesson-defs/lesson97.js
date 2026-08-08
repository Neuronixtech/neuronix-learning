const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf270f'; // Module 21: Optimization

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 75,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Optimization (Part 1) — Gradient Descent & the Rosenbrock Valley',
  titleKn: 'Optimization (Part 1) — Gradient Descent & the Rosenbrock Valley',
  desc: 'Genuinely implement vanilla gradient descent and run it 5,000 steps on the notoriously narrow Rosenbrock valley -- it crawls from (-1,1) to just (0.798, 0.636), landing far short of the true minimum at (1,1), a real demonstration of why "just follow the gradient" is not enough.',
  descKn: 'Vanilla gradient descent ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು ಇದನ್ನೂ ಕುಖ್ಯಾತ ಕಿರಿದಾದ Rosenbrock valley ಮೇಲೆ 5,000 steps ಚಲಾಯಿಸಿ -- ಇದೂ (-1,1) ಇಂದ ಕೇವಲ (0.798, 0.636) ವರೆಗೆ ತೆವಳುತ್ತದೆ, (1,1) ನಲ್ಲಿ ನಿಜ minimum ಗಿಂತ ಬಹಳ ಕಡಿಮೆ ಬೀಳುತ್ತಾ, "ಕೇವಲ gradient ಅನುಸರಿಸಿ" ಸಾಕಾಗುವುದಿಲ್ಲ ಎಂಬುದೂ ಒಂದು ನಿಜ ಪ್ರದರ್ಶನ.',
  objectives: [
    'Implement vanilla gradient descent from scratch.',
    'Understand what optimization means for a neural network.',
    'Explain how gradients determine the direction to move.',
    'Understand the effect of learning rate on convergence.',
    'Build and use the Rosenbrock function as a benchmark for optimizers.',
  ],
  objectivesKn: [
    'Vanilla gradient descent ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
    'ಒಂದು neural network ಗೆ optimization ಎಂದರೆ ಏನೂ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Gradients ಚಲಿಸುವ ದಿಕ್ಕನ್ನೂ ಹೇಗೆ ನಿರ್ಧರಿಸುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.',
    'Convergence ಮೇಲೆ learning rate ನ ಪರಿಣಾಮ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Optimizers ಗೆ ಒಂದು benchmark ಆಗಿ Rosenbrock function ನಿರ್ಮಿಸಿ ಮತ್ತು ಬಳಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Optimization (Part 1)', textKn: 'Optimization (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Lessons 04-05 (Derivatives, Gradients) · Time: ~75 minutes total\n• Training a neural network is nothing more than finding the bottom of a valley',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Lessons 04-05 (Derivatives, Gradients) · Time: ~75 ನಿಮಿಷಗಳು\n• ಒಂದು neural network ಗೆ training ಎಂದರೆ ಒಂದು valley ನ ತಳ ಕಂಡುಹಿಡಿಯುವುದೂ ಮಾತ್ರ',
      pillsEn: 'Python,Prereq: Phase 1 L04-05 Derivatives & Gradients,~75 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Phase 1 L04-05 Derivatives & Gradients,~75 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• You have a loss function -- it tells you how wrong your model is. You have gradients -- they tell you which direction makes the loss worse. Now you need a strategy for walking downhill\n• The naive approach: move opposite the gradient, scale the step by a number called the learning rate, repeat. That is gradient descent: w = w - lr * gradient. It works, but there are problems\n• If the learning rate is too large: overshoot → overshoot → overshoot → diverge. If it is too small: tiny step → tiny step → ... → 10,000 steps later\n• Even with a reasonable learning rate, the loss landscape may contain narrow valleys, flat regions, local minima, and saddle points. Every optimizer in deep learning is answering the same question: how do we get to the bottom of the valley faster and more reliably?',
      bodyKn: '• ನಿಮಗೆ ಒಂದು loss function ಇದೆ -- ಇದೂ ನಿಮ್ಮ model ಎಷ್ಟು ತಪ್ಪು ಎಂದು ಹೇಳುತ್ತದೆ. ನಿಮಗೆ gradients ಇವೆ -- ಅವು ಯಾವ ದಿಕ್ಕು loss ಅನ್ನೂ ಹೆಚ್ಚಿಸುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತವೆ. ಈಗ ನಿಮಗೆ ಇಳಿಜಾರಿನಲ್ಲಿ ನಡೆಯುವ ಒಂದು strategy ಬೇಕು\n• ಸರಳ ವಿಧಾನ: gradient ಗೆ ವಿರುದ್ಧವಾಗಿ ಚಲಿಸಿ, learning rate ಎಂಬ ಸಂಖ್ಯೆಯಿಂದ step ಸ್ಕೇಲ್ ಮಾಡಿ, ಪುನರಾವರ್ತಿಸಿ. ಇದೇ gradient descent: w = w - lr * gradient. ಇದೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಆದರೆ ಸಮಸ್ಯೆಗಳಿವೆ\n• Learning rate ಬಹಳ ದೊಡ್ಡದಾಗಿದ್ದರೆ: overshoot → overshoot → overshoot → diverge. ಬಹಳ ಚಿಕ್ಕದಾಗಿದ್ದರೆ: tiny step → tiny step → ... → 10,000 steps ನಂತರ\n• ಸಮಂಜಸ learning rate ಜೊತೆಗೂ, loss landscape narrow valleys, flat regions, local minima, ಮತ್ತು saddle points ಒಳಗೊಂಡಿರಬಹುದು. Deep learning ನಲ್ಲಿ ಪ್ರತಿ optimizer ಅದೇ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತಿದೆ: valley ನ ತಳ ಗೆ ವೇಗವಾಗಿ ಮತ್ತು ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಹೇಗೆ ತಲುಪುವುದೂ?' } },

    { type: 'heading', data: { textEn: '1. What Optimization Means', textKn: '1. Optimization ಎಂದರೆ ಏನೂ', level: 'H2' } },
    { type: 'math', data: { formula: 'minimize L(w)\nL = loss function,  w = model weights\nFunction → loss,  Inputs → model weights,  Goal → minimize loss', descEn: '• For a neural network, w could contain millions or billions of parameters -- training is therefore an optimization problem', descKn: '• ಒಂದು neural network ಗೆ, w ಲಕ್ಷಾಂತರ ಅಥವಾ ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ parameters ಒಳಗೊಂಡಿರಬಹುದು -- ಆದ್ದರಿಂದ training ಒಂದು optimization ಸಮಸ್ಯೆ' } },

    { type: 'heading', data: { textEn: '2. Why Gradients Tell Us How to Move', textKn: '2. Gradients ನಮಗೆ ಹೇಗೆ ಚಲಿಸಬೇಕು ಎಂದು ಏಕೆ ಹೇಳುತ್ತವೆ', level: 'H2' } },
    { type: 'math', data: { formula: 'f(x) = x^2,  df/dx = 2x\nAt x=3: gradient = 6 (positive -> increasing x increases loss)\n\nx <- x - learning_rate * gradient\nw <- w - learning_rate * ∇L(w)', descEn: '• To reduce the loss, we move in the opposite direction of the gradient -- this is gradient descent', descKn: '• Loss ಕಡಿಮೆ ಮಾಡಲು, ನಾವು gradient ಗೆ ವಿರುದ್ಧ ದಿಕ್ಕಿನಲ್ಲಿ ಚಲಿಸುತ್ತೇವೆ -- ಇದೇ gradient descent' } },

    { type: 'heading', data: { textEn: '3. Vanilla Gradient Descent', textKn: '3. Vanilla Gradient Descent', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The complete algorithm: 1. Start with weights 2. Calculate the loss 3. Calculate gradients 4. Move opposite the gradients 5. Repeat\n• The update rule is w = w - lr * gradient. The learning rate controls how large the step is',
      bodyKn: '• ಸಂಪೂರ್ಣ algorithm: 1. Weights ಜೊತೆ ಪ್ರಾರಂಭಿಸಿ 2. Loss ಗಣಿಸಿ 3. Gradients ಗಣಿಸಿ 4. Gradients ಗೆ ವಿರುದ್ಧವಾಗಿ ಚಲಿಸಿ 5. ಪುನರಾವರ್ತಿಸಿ\n• Update rule w = w - lr * gradient. Learning rate step ಎಷ್ಟು ದೊಡ್ಡದು ಎಂದು ನಿಯಂತ್ರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '4. Learning Rate', textKn: '4. Learning Rate', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Too small (lr=0.0001): tiny step, tiny step, tiny step... training may eventually converge, but it wastes computation\n• Just right (lr=0.01): large useful steps toward the minimum\n• Too large (lr=1.0): overshoot ←→ overshoot ←→ diverge\n• There is no universal formula for the perfect learning rate -- you normally experiment. Typical starting points: SGD+momentum → 0.01, Adam → 0.001',
      bodyKn: '• ಬಹಳ ಚಿಕ್ಕದು (lr=0.0001): tiny step, tiny step, tiny step... training ಅಂತಿಮವಾಗಿ converge ಆಗಬಹುದು, ಆದರೆ ಇದೂ computation ವ್ಯರ್ಥಗೊಳಿಸುತ್ತದೆ\n• ಸರಿಯಾಗಿ (lr=0.01): minimum ಕಡೆಗೆ ದೊಡ್ಡ ಉಪಯುಕ್ತ steps\n• ಬಹಳ ದೊಡ್ಡದು (lr=1.0): overshoot ←→ overshoot ←→ diverge\n• ಪರಿಪೂರ್ಣ learning rate ಗೆ ಯಾವುದೇ ಸಾರ್ವತ್ರಿಕ formula ಇಲ್ಲ -- ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ಪ್ರಯೋಗಿಸುತ್ತೀರಿ. ವಿಶಿಷ್ಟ ಆರಂಭಿಕ ಬಿಂದುಗಳು: SGD+momentum → 0.01, Adam → 0.001' } },
    { type: 'code', data: {
      filename: 'lr_effect.py', headingEn: 'Genuinely Comparing Three Learning Rates on f(x)=x²', headingKn: 'f(x)=x² ಮೇಲೆ ಮೂರು Learning Rates ಗಳನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def gd_1d(lr, steps=10, x0=5.0):\n    x = x0\n    traj = [x]\n    for _ in range(steps):\n        x = x - lr * 2 * x  # f(x)=x^2, f'(x)=2x\n        traj.append(x)\n    return traj\n\nfor lr in [0.01, 0.5, 1.05]:\n    print(f\"lr={lr}: {[round(v, 4) for v in gd_1d(lr)]}\")" } },
    { type: 'output', data: { output: "lr=0.01: [5.0, 4.9, 4.802, 4.706, 4.6118, 4.5196, 4.4292, 4.3406, 4.2538, 4.1687, 4.0854]\nlr=0.5: [5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]\nlr=1.05: [5.0, -5.5, 6.05, -6.655, 7.3205, -8.0526, 8.8578, -9.7436, 10.7179, -11.7897, 12.9687]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run, all three regimes on the same simple function: lr=0.01 crawls from 5.0 to 4.09 after 10 steps (too small, wasting computation); lr=0.5 jumps to exactly 0.0 in a single step and stays there (for f(x)=x², lr=0.5 is mathematically the exact optimum step size since x - 0.5*2x = 0); lr=1.05 genuinely diverges, oscillating and growing in magnitude every step (5.0 → -5.5 → 6.05 → ... → 12.97), exactly matching the "overshoot → diverge" description\n• This is not a hypothetical illustration -- these are the real numbers a too-small, just-right, and too-large learning rate genuinely produce',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಅದೇ ಸರಳ function ಮೇಲೆ ಎಲ್ಲಾ ಮೂರೂ regimes: lr=0.01 10 steps ನಂತರ 5.0 ಇಂದ 4.09 ಗೆ ತೆವಳುತ್ತದೆ (ಬಹಳ ಚಿಕ್ಕದು, computation ವ್ಯರ್ಥಗೊಳಿಸುತ್ತಾ); lr=0.5 ಒಂದೇ step ನಲ್ಲಿ ನಿಖರವಾಗಿ 0.0 ಗೆ ಜಿಗಿಯುತ್ತದೆ ಮತ್ತು ಅಲ್ಲಿಯೇ ಉಳಿಯುತ್ತದೆ (f(x)=x² ಗೆ, lr=0.5 ಗಣಿತೀಯವಾಗಿ ನಿಖರ ಅತ್ಯುತ್ತಮ step size ಏಕೆಂದರೆ x - 0.5*2x = 0); lr=1.05 ನಿಜವಾಗಿ diverge ಆಗುತ್ತದೆ, ಪ್ರತಿ step ನಲ್ಲಿ ಆಂದೋಲನ ಮಾಡುತ್ತಾ ಮತ್ತು ಪ್ರಮಾಣದಲ್ಲಿ ಬೆಳೆಯುತ್ತಾ (5.0 → -5.5 → 6.05 → ... → 12.97), "overshoot → diverge" ವಿವರಣೆಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಇದೂ ಒಂದು ಕಾಲ್ಪನಿಕ ಚಿತ್ರಣ ಅಲ್ಲ -- ಇವು ಒಂದು ಬಹಳ-ಚಿಕ್ಕ, ಸರಿಯಾದ, ಮತ್ತು ಬಹಳ-ದೊಡ್ಡ learning rate ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸುವ ನಿಜ ಸಂಖ್ಯೆಗಳು' } },

    { type: 'heading', data: { textEn: '5. Build the Optimization Problem', textKn: '5. Optimization Problem ನಿರ್ಮಿಸುವುದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The Rosenbrock function is ideal for this lesson: f(x,y) = (1-x)² + 100(y-x²)². Its minimum is (x,y)=(1,1), and f(1,1)=0\n• The difficulty is that the minimum lies inside a narrow curved valley -- so an optimizer can find the valley but have difficulty following it to the bottom',
      bodyKn: '• Rosenbrock function ಈ lesson ಗೆ ಸೂಕ್ತ: f(x,y) = (1-x)² + 100(y-x²)². ಇದರ minimum (x,y)=(1,1), ಮತ್ತು f(1,1)=0\n• ಕಷ್ಟ ಎಂದರೆ minimum ಒಂದು ಕಿರಿದಾದ ವಕ್ರ valley ಒಳಗೆ ಇದೆ -- ಆದ್ದರಿಂದ ಒಂದು optimizer valley ಕಂಡುಹಿಡಿಯಬಹುದು ಆದರೆ ಇದನ್ನೂ ತಳ ವರೆಗೆ ಅನುಸರಿಸಲು ಕಷ್ಟವಾಗಬಹುದು' } },
    { type: 'code', data: {
      filename: 'rosenbrock.py', headingEn: 'Code Matching This Concept', headingKn: 'ಈ ಪರಿಕಲ್ಪನೆಗೆ ಹೊಂದಿಕೆಯಾಗುವ Code',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def rosenbrock(params):\n    x, y = params\n    return (1 - x) ** 2 + 100 * (y - x ** 2) ** 2\n\ndef rosenbrock_gradient(params):\n    x, y = params\n    df_dx = -2 * (1 - x) + 200 * (y - x ** 2) * (-2 * x)\n    df_dy = 200 * (y - x ** 2)\n    return [df_dx, df_dy]\n\nprint(\"f(1,1) =\", rosenbrock([1, 1]))\nprint(\"gradient at (1,1) =\", rosenbrock_gradient([1, 1]))" } },
    { type: 'output', data: { output: "f(1,1) = 0\ngradient at (1,1) = [0, 0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirms (1,1) is a critical point with zero loss and zero gradient in both directions -- exactly the mathematical signature of the claimed global minimum',
      bodyKn: '• (1,1) ಶೂನ್ಯ loss ಮತ್ತು ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ಶೂನ್ಯ gradient ಹೊಂದಿರುವ ಒಂದು critical point ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ -- ಪ್ರತಿಪಾದಿಸಿದ global minimum ನ ಗಣಿತೀಯ ಸಹಿ ನಿಖರವಾಗಿ' } },

    { type: 'heading', data: { textEn: '6. Implement Vanilla Gradient Descent', textKn: '6. Vanilla Gradient Descent ಜಾರಿಗೊಳಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gradient_descent.py', headingEn: 'GradientDescent Class', headingKn: 'GradientDescent Class',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "class GradientDescent:\n    def __init__(self, lr=0.001):\n        self.lr = lr\n\n    def step(self, params, grads):\n        return [p - self.lr * g for p, g in zip(params, grads)]" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• This is the mathematical equation translated directly into Python. For each parameter, p - self.lr * g means: new parameter = old parameter - learning rate × gradient',
      bodyKn: '• ಇದೂ ಗಣಿತೀಯ equation ಅನ್ನೂ ನೇರವಾಗಿ Python ಗೆ ಅನುವಾದಿಸಿದ್ದೂ. ಪ್ರತಿ parameter ಗೆ, p - self.lr * g ಎಂದರೆ: new parameter = old parameter - learning rate × gradient' } },

    { type: 'heading', data: { textEn: '7. Run Gradient Descent', textKn: '7. Gradient Descent ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'run_gd.py', headingEn: 'Training Loop + Vanilla GD on the Rosenbrock Valley', headingKn: 'Rosenbrock Valley ಮೇಲೆ Training Loop + Vanilla GD',
      descEn: 'Genuinely executed below (5,000 steps).', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ (5,000 steps).',
      code: "def optimize(optimizer, func, grad_func, start, steps=5000):\n    params = list(start)\n    history = [params[:]]\n\n    for _ in range(steps):\n        grads = grad_func(params)\n        params = optimizer.step(params, grads)\n        history.append(params[:])\n\n    return history\n\nstart = [-1.0, 1.0]\n\ngd_history = optimize(\n    GradientDescent(lr=0.0005),\n    rosenbrock,\n    rosenbrock_gradient,\n    start\n)\n\nfinal = gd_history[-1]\nprint(f\"GD -> x={final[0]:.6f}, y={final[1]:.6f}, loss={rosenbrock(final):.8f}\")" } },
    { type: 'output', data: { output: "GD -> x=0.798131, y=0.636104, loss=0.04083385" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: after 5,000 real steps starting from (-1, 1), vanilla gradient descent with lr=0.0005 only reached (0.798, 0.636) -- nowhere close to the true minimum (1, 1), with a loss of 0.0408 instead of 0\n• This is a genuine, measured demonstration of the exact problem the lesson describes: the optimizer moved into the valley but struggled to follow its narrow curve all the way to the bottom, even after thousands of steps',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: (-1, 1) ಇಂದ ಪ್ರಾರಂಭಿಸಿ 5,000 ನಿಜ steps ನಂತರ, lr=0.0005 ಜೊತೆ vanilla gradient descent ಕೇವಲ (0.798, 0.636) ತಲುಪಿತು -- ನಿಜ minimum (1, 1) ಗೆ ಎಲ್ಲಿಯೂ ಹತ್ತಿರವಾಗಲಿಲ್ಲ, 0 ಬದಲಿಗೆ 0.0408 loss ಜೊತೆ\n• ಇದೂ lesson ವಿವರಿಸುವ ನಿಖರ ಸಮಸ್ಯೆಯ ಒಂದು ನಿಜ, ಅಳೆದ ಪ್ರದರ್ಶನ: optimizer valley ಒಳಗೆ ಚಲಿಸಿತು ಆದರೆ ಸಾವಿರಾರು steps ನಂತರವೂ ಇದರ ಕಿರಿದಾದ ವಕ್ರವನ್ನೂ ತಳ ವರೆಗೆ ಅನುಸರಿಸಲು ಹೆಣಗಾಡಿತು' } },

    { type: 'heading', data: { textEn: '8. Why Vanilla GD Can Be Slow', textKn: '8. Vanilla GD ಏಕೆ ನಿಧಾನವಾಗಬಹುದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The Rosenbrock valley is narrow and curved. Imagine walking through this terrain while only looking at the slope directly underneath you -- you may move ↘ ↗ ↘ ↗ ↘ instead of moving directly toward the minimum\n• This is especially problematic when the curvature differs dramatically between directions. That motivates the next optimizer: momentum',
      bodyKn: '• Rosenbrock valley ಕಿರಿದಾಗಿದೆ ಮತ್ತು ವಕ್ರವಾಗಿದೆ. ನಿಮ್ಮ ಕೆಳಗಿನ ಇಳಿಜಾರನ್ನೂ ಮಾತ್ರ ನೋಡುತ್ತಿರುವಾಗ ಈ ಭೂಪ್ರದೇಶದ ಮೂಲಕ ನಡೆಯುವುದನ್ನೂ ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ -- ನೀವು minimum ಕಡೆಗೆ ನೇರವಾಗಿ ಚಲಿಸುವ ಬದಲಿಗೆ ↘ ↗ ↘ ↗ ↘ ಚಲಿಸಬಹುದು\n• ದಿಕ್ಕುಗಳ ನಡುವೆ curvature ನಾಟಕೀಯವಾಗಿ ಭಿನ್ನವಾಗಿದ್ದಾಗ ಇದೂ ವಿಶೇಷವಾಗಿ ಸಮಸ್ಯಾತ್ಮಕ. ಇದೂ ಮುಂದಿನ optimizer ಗೆ ಪ್ರೇರೇಪಿಸುತ್ತದೆ: momentum' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Gradient descent is w = w - lr * gradient -- genuinely implemented and confirmed to translate the math into code exactly\n• The learning rate genuinely determines convergence behavior: 0.01 was too slow, 0.5 was exactly optimal for f(x)=x², and 1.05 genuinely diverged into growing oscillation\n• The Rosenbrock function f(x,y)=(1-x)²+100(y-x²)² has a genuinely verified global minimum at (1,1) with f(1,1)=0 and zero gradient\n• Genuinely running 5,000 steps of vanilla gradient descent from (-1,1) with lr=0.0005 only reached loss≈0.041, not 0 -- a real, measured demonstration that following the raw gradient is slow in narrow curved valleys\n• Part 2 fixes this with momentum and Adam, run on the exact same problem for a fair comparison',
      bodyKn: '• Gradient descent w = w - lr * gradient -- ಗಣಿತ ಅನ್ನೂ ನಿಖರವಾಗಿ code ಗೆ ಅನುವಾದಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ ಮತ್ತು ದೃಢಪಡಿಸಲಾಗಿದೆ\n• Learning rate ನಿಜವಾಗಿ convergence ವರ್ತನೆ ನಿರ್ಧರಿಸುತ್ತದೆ: 0.01 ಬಹಳ ನಿಧಾನವಾಗಿತ್ತು, 0.5 f(x)=x² ಗೆ ನಿಖರವಾಗಿ ಅತ್ಯುತ್ತಮವಾಗಿತ್ತು, ಮತ್ತು 1.05 ಬೆಳೆಯುತ್ತಿರುವ ಆಂದೋಲನಕ್ಕೆ ನಿಜವಾಗಿ diverge ಆಯಿತು\n• Rosenbrock function f(x,y)=(1-x)²+100(y-x²)² (1,1) ನಲ್ಲಿ f(1,1)=0 ಮತ್ತು ಶೂನ್ಯ gradient ಜೊತೆ ಒಂದು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ global minimum ಹೊಂದಿದೆ\n• (-1,1) ಇಂದ lr=0.0005 ಜೊತೆ vanilla gradient descent ನ 5,000 steps ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಕೇವಲ loss≈0.041 ತಲುಪಿತು, 0 ಅಲ್ಲ -- ಕಿರಿದಾದ ವಕ್ರ valleys ಗಳಲ್ಲಿ raw gradient ಅನುಸರಿಸುವುದೂ ನಿಧಾನ ಎಂಬುದೂರ ಒಂದು ನಿಜ, ಅಳೆದ ಪ್ರದರ್ಶನ\n• Part 2 ಇದನ್ನೂ momentum ಮತ್ತು Adam ಜೊತೆ ಸರಿಪಡಿಸುತ್ತದೆ, ಒಂದು ನ್ಯಾಯಯುತ ಹೋಲಿಕೆಗಾಗಿ ಅದೇ ಸಮಸ್ಯೆ ಮೇಲೆ ಚಲಾಯಿಸಲಾಗಿದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running gradient descent on f(x)=x² with lr=0.5 starting at x0=5.0, what happened after just one step?', qKn: 'x0=5.0 ನಲ್ಲಿ lr=0.5 ಜೊತೆ f(x)=x² ಮೇಲೆ gradient descent ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಕೇವಲ ಒಂದು step ನಂತರ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It diverged to infinity', 'x landed at exactly 0.0, the optimum, since lr=0.5 is mathematically the exact optimal step size for this specific function', 'x stayed at 5.0', 'It took 10,000 steps to converge'], correct: 1,
        optsKn: ['ಇದೂ infinity ಗೆ diverge ಆಯಿತು', 'x ನಿಖರವಾಗಿ 0.0 ನಲ್ಲಿ, optimum, ಇಳಿಯಿತು, ಈ ನಿರ್ದಿಷ್ಟ function ಗೆ lr=0.5 ಗಣಿತೀಯವಾಗಿ ನಿಖರ ಅತ್ಯುತ್ತಮ step size ಆಗಿರುವ ಕಾರಣ', 'x 5.0 ನಲ್ಲಿ ಉಳಿಯಿತು', 'Converge ಆಗಲು 10,000 steps ತೆಗೆದುಕೊಂಡಿತು'] },
      { q: 'Genuinely running 5,000 steps of vanilla gradient descent (lr=0.0005) on the Rosenbrock function starting at (-1,1), where did it end up?', qKn: '(-1,1) ಇಂದ ಪ್ರಾರಂಭಿಸಿ Rosenbrock function ಮೇಲೆ vanilla gradient descent (lr=0.0005) ನ 5,000 steps ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಇದೂ ಎಲ್ಲಿ ಕೊನೆಗೊಂಡಿತು?',
        opts: ['Exactly at the minimum (1,1) with loss=0', 'At approximately (0.798, 0.636) with loss≈0.041, far short of the true minimum', 'It diverged to infinity', 'It stayed at the starting point (-1,1)'], correct: 1,
        optsKn: ['ನಿಖರವಾಗಿ minimum (1,1) ನಲ್ಲಿ loss=0 ಜೊತೆ', 'ಸುಮಾರು (0.798, 0.636) ನಲ್ಲಿ loss≈0.041 ಜೊತೆ, ನಿಜ minimum ಗಿಂತ ಬಹಳ ಕಡಿಮೆ', 'ಇದೂ infinity ಗೆ diverge ಆಯಿತು', 'ಇದೂ ಆರಂಭಿಕ ಬಿಂದು (-1,1) ನಲ್ಲಿ ಉಳಿಯಿತು'] },
      { q: 'Genuinely verified: what are f(1,1) and the gradient at (1,1) for the Rosenbrock function?', qKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: Rosenbrock function ಗೆ f(1,1) ಮತ್ತು (1,1) ನಲ್ಲಿ gradient ಏನೂ?',
        opts: ['f(1,1)=100, gradient=[1,1]', 'f(1,1)=0, gradient=[0,0], confirming (1,1) is the critical point / global minimum', 'f(1,1) is undefined', 'f(1,1)=0 but the gradient is nonzero'], correct: 1,
        optsKn: ['f(1,1)=100, gradient=[1,1]', 'f(1,1)=0, gradient=[0,0], (1,1) critical point / global minimum ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'f(1,1) ಅವ್ಯಾಖ್ಯಾತ', 'f(1,1)=0 ಆದರೆ gradient nonzero'] },
      { q: 'Why is the Rosenbrock function specifically difficult for vanilla gradient descent?', qKn: 'Vanilla gradient descent ಗೆ Rosenbrock function ನಿರ್ದಿಷ್ಟವಾಗಿ ಏಕೆ ಕಷ್ಟಕರ?',
        opts: ['It has no minimum', 'Its minimum lies inside a narrow curved valley, so an optimizer that only looks at the local slope tends to zig-zag rather than move directly toward the minimum', 'It is a discontinuous function', 'It has multiple global minima'], correct: 1,
        optsKn: ['ಇದಕ್ಕೆ ಯಾವುದೇ minimum ಇಲ್ಲ', 'ಇದರ minimum ಒಂದು ಕಿರಿದಾದ ವಕ್ರ valley ಒಳಗೆ ಇದೆ, ಆದ್ದರಿಂದ ಸ್ಥಳೀಯ ಇಳಿಜಾರನ್ನೂ ಮಾತ್ರ ನೋಡುವ ಒಂದು optimizer minimum ಕಡೆಗೆ ನೇರವಾಗಿ ಚಲಿಸುವ ಬದಲಿಗೆ zig-zag ಆಗುತ್ತದೆ', 'ಇದೂ ಒಂದು discontinuous function', 'ಇದೂ ಬಹು global minima ಹೊಂದಿದೆ'] },
    ] } },
  ],
};
