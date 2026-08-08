const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf270f'; // Module 21: Optimization

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'reading',
  duration: 75,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Optimization (Part 3) — Learning-Rate Schedules, Loss Landscapes & Production Optimizers',
  titleKn: 'Optimization (Part 3) — Learning-Rate Schedules, Loss Landscapes & Production Optimizers',
  desc: 'Genuinely compute a cosine-annealing schedule end to end (0.01 down to 0.0001) and prove a saddle point is real, not descriptive: f(x,y)=x²-y² has zero gradient at the origin yet genuinely curves upward along x and downward along y at the exact same point.',
  descKn: 'ಒಂದು cosine-annealing schedule ಅನ್ನೂ end to end ನಿಜವಾಗಿ ಗಣಿಸಿ (0.01 ಇಂದ 0.0001 ಗೆ) ಮತ್ತು ಒಂದು saddle point ನಿಜ, ಕೇವಲ ವಿವರಣಾತ್ಮಕ ಅಲ್ಲ ಎಂದು ಸಾಬೀತುಪಡಿಸಿ: f(x,y)=x²-y² origin ನಲ್ಲಿ ಶೂನ್ಯ gradient ಹೊಂದಿದೆ ಆದರೂ ಅದೇ ನಿಖರ ಬಿಂದುವಿನಲ್ಲಿ x ಉದ್ದಕ್ಕೂ ಮೇಲ್ಮುಖವಾಗಿ ಮತ್ತು y ಉದ್ದಕ್ಕೂ ಕೆಳಮುಖವಾಗಿ ನಿಜವಾಗಿ ವಕ್ರವಾಗುತ್ತದೆ.',
  objectives: [
    'Configure learning-rate schedules including step decay, cosine annealing, and warmup.',
    'Distinguish convex from non-convex loss landscapes.',
    'Explain the role of saddle points in high-dimensional optimization.',
    'Understand sharp vs flat minima and their connection to generalization.',
    'Use production optimizer implementations in PyTorch.',
  ],
  objectivesKn: [
    'Step decay, cosine annealing, ಮತ್ತು warmup ಸೇರಿದಂತೆ learning-rate schedules ಕಾನ್ಫಿಗರ್ ಮಾಡಿ.',
    'Convex ಅನ್ನೂ non-convex loss landscapes ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'High-dimensional optimization ನಲ್ಲಿ saddle points ನ ಪಾತ್ರ ವಿವರಿಸಿ.',
    'Sharp vs flat minima ಮತ್ತು generalization ಗೆ ಅವುಗಳ ಸಂಪರ್ಕ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'PyTorch ನಲ್ಲಿ production optimizer implementations ಬಳಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Optimization (Part 3)', textKn: 'Optimization (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + PyTorch · Prerequisites: Part 1 & 2, Gradient Descent, Momentum, Adam · Time: ~75 minutes total\n• We move from how to optimize to what the loss landscape actually looks like, and how to change the learning rate over the course of training',
      bodyKn: '• Type: Build · Language: Python + PyTorch · Prerequisites: Part 1 & 2, Gradient Descent, Momentum, Adam · Time: ~75 ನಿಮಿಷಗಳು\n• ನಾವು ಹೇಗೆ optimize ಮಾಡುವುದೂ ಇಂದ loss landscape ವಾಸ್ತವವಾಗಿ ಹೇಗೆ ಕಾಣುತ್ತದೆ ಎಂದು, ಮತ್ತು training ಸಮಯದಲ್ಲಿ learning rate ಹೇಗೆ ಬದಲಾಯಿಸುವುದೂ ಎಂದು ಚಲಿಸುತ್ತೇವೆ',
      pillsEn: 'Python,PyTorch,Prereq: Part 1 & 2,~75 min,Part 3 of 3',
      pillsKn: 'Python,PyTorch,Prereq: Part 1 & 2,~75 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: '19. Why Change the Learning Rate?', textKn: '19. Learning Rate ಏಕೆ ಬದಲಾಯಿಸುವುದೂ?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A fixed learning rate is a compromise. At the beginning of training (far from minimum) we want relatively large steps. Later (near minimum) we want smaller steps\n• large lr → fast progress → smaller lr → fine tuning. This is a learning-rate schedule',
      bodyKn: '• ಒಂದು ಸ್ಥಿರ learning rate ಒಂದು compromise. Training ಆರಂಭದಲ್ಲಿ (minimum ಇಂದ ದೂರ) ನಮಗೆ ತುಲನಾತ್ಮಕವಾಗಿ ದೊಡ್ಡ steps ಬೇಕು. ನಂತರ (minimum ಸಮೀಪ) ನಮಗೆ ಚಿಕ್ಕ steps ಬೇಕು\n• ದೊಡ್ಡ lr → ವೇಗ ಪ್ರಗತಿ → ಚಿಕ್ಕ lr → fine tuning. ಇದೇ ಒಂದು learning-rate schedule' } },

    { type: 'heading', data: { textEn: '20. Step Decay', textKn: '20. Step Decay', level: 'H2' } },
    { type: 'math', data: { formula: 'lr = lr × factor  (every N epochs)\n\ninitial lr = 0.01\nepoch 10 -> 0.001\nepoch 20 -> 0.0001\nepoch 30 -> 0.00001', descEn: '• Genuinely verified: multiplying lr by 0.1 at epochs 10/20/30 produces exactly 0.001, 0.0001, 0.00001 -- simple and predictable', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: epochs 10/20/30 ನಲ್ಲಿ lr ಅನ್ನೂ 0.1 ಇಂದ ಗುಣಿಸುವುದೂ ನಿಖರವಾಗಿ 0.001, 0.0001, 0.00001 ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಸರಳ ಮತ್ತು ಊಹಿಸಬಹುದಾದ' } },

    { type: 'heading', data: { textEn: '21. Cosine Annealing', textKn: '21. Cosine Annealing', level: 'H2' } },
    { type: 'math', data: { formula: 'lr = lr_min + 0.5 × (lr_max - lr_min) × (1 + cos(πt/T))', descEn: '• Common in modern deep-learning training. The important idea: high learning rate → smooth reduction → low learning rate', descKn: '• ಆಧುನಿಕ deep-learning training ನಲ್ಲಿ ಸಾಮಾನ್ಯ. ಮುಖ್ಯ ಕಲ್ಪನೆ: ಹೆಚ್ಚಿನ learning rate → ಸುಗಮ ಇಳಿಕೆ → ಕಡಿಮೆ learning rate' } },
    { type: 'code', data: {
      filename: 'cosine_annealing.py', headingEn: 'Genuinely Computing the Cosine Schedule', headingKn: 'Cosine Schedule ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ',
      descEn: 'Genuinely executed below with lr_min=0.0001, lr_max=0.01, T=100.', descKn: 'lr_min=0.0001, lr_max=0.01, T=100 ಜೊತೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\n\ndef cosine_lr(lr_min, lr_max, t, T):\n    return lr_min + 0.5 * (lr_max - lr_min) * (1 + math.cos(math.pi * t / T))\n\nfor t in [0, 25, 50, 75, 100]:\n    print(f\"t={t}: lr={cosine_lr(0.0001, 0.01, t, 100):.6f}\")" } },
    { type: 'output', data: { output: "t=0: lr=0.010000\nt=25: lr=0.008550\nt=50: lr=0.005050\nt=75: lr=0.001550\nt=100: lr=0.000100" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: the schedule starts at exactly lr_max=0.01 (t=0), passes through the midpoint 0.00505 at t=50 (the arithmetic mean of lr_min and lr_max, as expected from a cosine curve\'s halfway point), and ends at exactly lr_min=0.0001 (t=100)\n• The decrease is smooth and non-linear -- notice it drops relatively slowly at first (0.01 → 0.00855 over the first quarter) and speeds up in the middle, the signature shape of a cosine curve rather than a straight line',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: schedule ನಿಖರವಾಗಿ lr_max=0.01 (t=0) ನಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, t=50 ನಲ್ಲಿ midpoint 0.00505 ಮೂಲಕ ಹಾದುಹೋಗುತ್ತದೆ (lr_min ಮತ್ತು lr_max ನ arithmetic mean, ಒಂದು cosine curve ನ ಅರ್ಧದಾರಿ ಬಿಂದುವಿನಿಂದ ನಿರೀಕ್ಷಿಸಿದಂತೆ), ಮತ್ತು ನಿಖರವಾಗಿ lr_min=0.0001 (t=100) ನಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ\n• ಇಳಿಕೆ ಸುಗಮ ಮತ್ತು non-linear -- ಮೊದಲು ಇದೂ ತುಲನಾತ್ಮಕವಾಗಿ ನಿಧಾನವಾಗಿ ಇಳಿಯುತ್ತದೆ (ಮೊದಲ ಕಾಲುಭಾಗದಲ್ಲಿ 0.01 → 0.00855) ಮತ್ತು ಮಧ್ಯದಲ್ಲಿ ವೇಗಗೊಳ್ಳುತ್ತದೆ ಎಂದು ಗಮನಿಸಿ, ಒಂದು ನೇರ ರೇಖೆಗಿಂತ ಒಂದು cosine curve ನ ವಿಶಿಷ್ಟ ಆಕಾರ' } },

    { type: 'heading', data: { textEn: '22. Warmup', textKn: '22. Warmup', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Large models can be unstable at the beginning of training. Instead of immediately using the full learning rate (0 → small → medium → full learning rate), we gradually increase it -- this is called warmup\n• A common schedule: warmup → peak learning rate → cosine decay. Warmup is particularly useful for large Transformer-style models',
      bodyKn: '• ದೊಡ್ಡ models training ಆರಂಭದಲ್ಲಿ ಅಸ್ಥಿರವಾಗಿರಬಹುದು. ಸಂಪೂರ್ಣ learning rate ಅನ್ನೂ ತಕ್ಷಣ ಬಳಸುವ ಬದಲಿಗೆ (0 → ಚಿಕ್ಕ → ಮಧ್ಯಮ → ಸಂಪೂರ್ಣ learning rate), ನಾವು ಇದನ್ನೂ ಕ್ರಮೇಣ ಹೆಚ್ಚಿಸುತ್ತೇವೆ -- ಇದನ್ನೂ warmup ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ\n• ಒಂದು ಸಾಮಾನ್ಯ schedule: warmup → peak learning rate → cosine decay. ದೊಡ್ಡ Transformer-style models ಗೆ warmup ವಿಶೇಷವಾಗಿ ಉಪಯುಕ್ತ' } },

    { type: 'heading', data: { textEn: '23. Convex vs Non-Convex Optimization', textKn: '23. Convex vs Non-Convex Optimization', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A convex function has a single global minimum -- for example f(x)=x² has only one valley. If gradient descent converges, it reaches the global minimum\n• Neural-network loss landscapes are non-convex -- they can contain local minima, saddle points, flat regions, sharp valleys, and multiple valleys. There is no simple guarantee that gradient descent finds a unique global minimum',
      bodyKn: '• ಒಂದು convex function ಒಂದೇ global minimum ಹೊಂದಿದೆ -- ಉದಾಹರಣೆಗೆ f(x)=x² ಕೇವಲ ಒಂದು valley ಹೊಂದಿದೆ. Gradient descent converge ಆದರೆ, ಇದೂ global minimum ತಲುಪುತ್ತದೆ\n• Neural-network loss landscapes non-convex -- ಅವು local minima, saddle points, flat regions, sharp valleys, ಮತ್ತು ಬಹು valleys ಒಳಗೊಂಡಿರಬಹುದು. Gradient descent ಒಂದು ಅನನ್ಯ global minimum ಕಂಡುಹಿಡಿಯುತ್ತದೆ ಎಂಬ ಯಾವುದೇ ಸರಳ ಖಾತರಿ ಇಲ್ಲ' } },

    { type: 'heading', data: { textEn: '25. Saddle Points', textKn: '25. Saddle Points', level: 'H2' } },
    { type: 'math', data: { formula: 'f(x, y) = x² - y²\n\nAt (0,0): gradient = (2x, -2y) = (0, 0)\nAlong x: x² curves upward\nAlong y: -y² curves downward\n=> minimum in one direction, maximum in another = saddle', descEn: '', descKn: '' } },
    { type: 'code', data: {
      filename: 'saddle_point.py', headingEn: 'Genuinely Confirming the Saddle', headingKn: 'Saddle ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def f(x, y):\n    return x ** 2 - y ** 2\n\ndef grad(x, y):\n    return (2 * x, -2 * y)\n\nprint(\"f(0,0) =\", f(0, 0), \" grad(0,0) =\", grad(0, 0))\nprint(\"f(0.1, 0) =\", f(0.1, 0))    # moving along x\nprint(\"f(0, 0.1) =\", f(0, 0.1))    # moving along y" } },
    { type: 'output', data: { output: "f(0,0) = 0  grad(0,0) = (0, 0)\nf(0.1, 0) = 0.010000000000000002\nf(0, 0.1) = -0.010000000000000002" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirms both halves of the saddle-point claim at the exact same point (0,0): the gradient is genuinely (0,0), so a gradient-based optimizer could get stuck there thinking it found a critical point -- but moving slightly along x genuinely increases the loss (0 → 0.01), while moving slightly along y genuinely decreases it (0 → -0.01)\n• This is not a description of a saddle point, it is a live demonstration of one -- the same location is simultaneously a local minimum along one axis and a local maximum along the other. In high-dimensional neural networks, saddle points can be much more important than local minima, and mini-batch noise and momentum can help move the optimizer away from such regions',
      bodyKn: '• ಅದೇ ನಿಖರ ಬಿಂದುವಿನಲ್ಲಿ (0,0) saddle-point ಪ್ರತಿಪಾದನೆಯ ಎರಡೂ ಭಾಗಗಳನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: gradient ನಿಜವಾಗಿ (0,0), ಆದ್ದರಿಂದ ಒಂದು gradient-based optimizer ಇದೂ ಒಂದು critical point ಕಂಡುಹಿಡಿಯಿತು ಎಂದು ಭಾವಿಸಿ ಅಲ್ಲಿ ಸಿಲುಕಿಕೊಳ್ಳಬಹುದು -- ಆದರೆ x ಉದ್ದಕ್ಕೂ ಸ್ವಲ್ಪ ಚಲಿಸುವುದೂ ನಿಜವಾಗಿ loss ಹೆಚ್ಚಿಸುತ್ತದೆ (0 → 0.01), y ಉದ್ದಕ್ಕೂ ಸ್ವಲ್ಪ ಚಲಿಸುವುದೂ ಇದನ್ನೂ ನಿಜವಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ (0 → -0.01)\n• ಇದೂ ಒಂದು saddle point ನ ವಿವರಣೆ ಅಲ್ಲ, ಇದೂ ಒಂದರ ಲೈವ್ ಪ್ರದರ್ಶನ -- ಅದೇ ಸ್ಥಳ ಏಕಕಾಲದಲ್ಲಿ ಒಂದು ಅಕ್ಷದ ಉದ್ದಕ್ಕೂ ಒಂದು local minimum ಮತ್ತು ಇನ್ನೊಂದರ ಉದ್ದಕ್ಕೂ ಒಂದು local maximum. High-dimensional neural networks ನಲ್ಲಿ, saddle points local minima ಗಿಂತ ಬಹಳ ಹೆಚ್ಚು ಮುಖ್ಯವಾಗಬಹುದು, ಮತ್ತು mini-batch noise ಮತ್ತು momentum optimizer ಅನ್ನೂ ಅಂತಹ regions ಗಳಿಂದ ದೂರ ಚಲಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು' } },

    { type: 'heading', data: { textEn: '26. Loss Landscape', textKn: '26. Loss Landscape', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A neural network with one million parameters has a loss function living in a space with roughly 1,000,000 dimensions -- we cannot directly visualize that\n• Instead, we select two directions in parameter space and examine the loss along those directions: 1,000,000-dimensional landscape → choose 2 directions → 2D slice → visualize terrain. This lets us inspect valleys, barriers, saddle regions, sharp minima, and flat minima',
      bodyKn: '• ಒಂದು ಮಿಲಿಯನ್ parameters ಹೊಂದಿರುವ ಒಂದು neural network ಸುಮಾರು 1,000,000 dimensions ಹೊಂದಿರುವ ಒಂದು space ನಲ್ಲಿ ವಾಸಿಸುವ ಒಂದು loss function ಹೊಂದಿದೆ -- ನಾವು ಇದನ್ನೂ ನೇರವಾಗಿ ದೃಶ್ಯೀಕರಿಸಲಾಗುವುದಿಲ್ಲ\n• ಬದಲಿಗೆ, ನಾವು parameter space ನಲ್ಲಿ ಎರಡು ದಿಕ್ಕುಗಳನ್ನೂ ಆಯ್ಕೆ ಮಾಡುತ್ತೇವೆ ಮತ್ತು ಆ ದಿಕ್ಕುಗಳ ಉದ್ದಕ್ಕೂ loss ಪರೀಕ್ಷಿಸುತ್ತೇವೆ: 1,000,000-dimensional landscape → 2 ದಿಕ್ಕುಗಳನ್ನೂ ಆಯ್ಕೆ ಮಾಡಿ → 2D slice → terrain ದೃಶ್ಯೀಕರಿಸಿ. ಇದೂ ನಮಗೆ valleys, barriers, saddle regions, sharp minima, ಮತ್ತು flat minima ಪರಿಶೀಲಿಸಲು ಅನುಮತಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '27. Sharp vs Flat Minima', textKn: '27. Sharp vs Flat Minima', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A sharp minimum changes loss dramatically when weights move slightly (narrow). A flat minimum changes loss slowly (wide)\n• A common practical observation is that SGD with momentum can sometimes find solutions with better generalization than Adam, although this is not a universal rule',
      bodyKn: '• Weights ಸ್ವಲ್ಪ ಚಲಿಸಿದಾಗ ಒಂದು sharp minimum loss ನಾಟಕೀಯವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ (ಕಿರಿದಾದ). ಒಂದು flat minimum loss ನಿಧಾನವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ (ಅಗಲ)\n• ಒಂದು ಸಾಮಾನ್ಯ ಪ್ರಾಯೋಗಿಕ ಅವಲೋಕನ ಎಂದರೆ SGD with momentum ಕೆಲವೊಮ್ಮೆ Adam ಗಿಂತ ಉತ್ತಮ generalization ಹೊಂದಿರುವ ಪರಿಹಾರಗಳನ್ನೂ ಕಂಡುಹಿಡಿಯಬಹುದು, ಇದೂ ಒಂದು ಸಾರ್ವತ್ರಿಕ ನಿಯಮವಲ್ಲದಿದ್ದರೂ' } },

    { type: 'heading', data: { textEn: '29. Production Optimizers', textKn: '29. Production Optimizers', level: 'H2' } },
    { type: 'code', data: {
      filename: 'pytorch_optimizers.py', headingEn: 'The Concepts You Implemented, Now in PyTorch', headingKn: 'ನೀವು ಜಾರಿಗೊಳಿಸಿದ ಪರಿಕಲ್ಪನೆಗಳು, ಈಗ PyTorch ನಲ್ಲಿ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import torch\n\nmodel = torch.nn.Linear(784, 10)\n\nsgd = torch.optim.SGD(\n    model.parameters(),\n    lr=0.01,\n    momentum=0.9\n)\n\nadam = torch.optim.Adam(\n    model.parameters(),\n    lr=0.001\n)\n\nadamw = torch.optim.AdamW(\n    model.parameters(),\n    lr=0.001,\n    weight_decay=0.01\n)\n\nprint(sgd)\nprint(adam)\nprint(adamw)" } },
    { type: 'output', data: { output: "SGD (\nParameter Group 0\n    dampening: 0\n    differentiable: False\n    foreach: None\n    fused: None\n    lr: 0.01\n    maximize: False\n    momentum: 0.9\n    nesterov: False\n    weight_decay: 0\n)\nAdam (\nParameter Group 0\n    amsgrad: False\n    betas: (0.9, 0.999)\n    capturable: False\n    decoupled_weight_decay: False\n    differentiable: False\n    eps: 1e-08\n    foreach: None\n    fused: None\n    lr: 0.001\n    maximize: False\n    weight_decay: 0\n)\nAdamW (\nParameter Group 0\n    amsgrad: False\n    betas: (0.9, 0.999)\n    capturable: False\n    decoupled_weight_decay: True\n    differentiable: False\n    eps: 1e-08\n    foreach: None\n    fused: None\n    lr: 0.001\n    maximize: False\n    weight_decay: 0.01\n)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely instantiated on a real torch.nn.Linear(784, 10) layer -- notice torch.optim.Adam\'s printed defaults, betas: (0.9, 0.999), match exactly the beta1=0.9, beta2=0.999 defaults used in this lesson\'s from-scratch Adam class\n• AdamW shows weight_decay: 0.01 as a separate field from the adaptive update, confirming the lesson\'s claim that AdamW decouples weight decay from Adam\'s moment-based update -- the concepts you implemented yourself are now visibly the same knobs the framework exposes',
      bodyKn: '• ಒಂದು ನಿಜ torch.nn.Linear(784, 10) layer ಮೇಲೆ ನಿಜವಾಗಿ instantiate ಮಾಡಲಾಗಿದೆ -- torch.optim.Adam ನ ಮುದ್ರಿತ defaults, betas: (0.9, 0.999), ಈ lesson ನ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ Adam class ನಲ್ಲಿ ಬಳಸಿದ beta1=0.9, beta2=0.999 defaults ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ಗಮನಿಸಿ\n• AdamW weight_decay: 0.01 ಅನ್ನೂ adaptive update ಇಂದ ಪ್ರತ್ಯೇಕ field ಆಗಿ ತೋರಿಸುತ್ತದೆ, AdamW Adam ನ moment-based update ಇಂದ weight decay ಅನ್ನೂ decouple ಮಾಡುತ್ತದೆ ಎಂಬ lesson ನ ಪ್ರತಿಪಾದನೆ ದೃಢಪಡಿಸುತ್ತಾ -- ನೀವು ಸ್ವತಃ ಜಾರಿಗೊಳಿಸಿದ ಪರಿಕಲ್ಪನೆಗಳು ಈಗ framework ಬಹಿರಂಗಪಡಿಸುವ ಅದೇ knobs ಆಗಿ ಗೋಚರವಾಗಿವೆ' } },

    { type: 'heading', data: { textEn: '30. Cosine Annealing in PyTorch', textKn: '30. PyTorch ನಲ್ಲಿ Cosine Annealing', level: 'H2' } },
    { type: 'code', data: {
      filename: 'pytorch_scheduler.py', headingEn: 'CosineAnnealingLR', headingKn: 'CosineAnnealingLR',
      descEn: '', descKn: '',
      code: "scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(\n    adam,\n    T_max=100\n)" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• During training, the scheduler adjusts the learning rate according to the cosine schedule genuinely computed by hand earlier in this lesson',
      bodyKn: '• Training ಸಮಯದಲ್ಲಿ, scheduler ಈ lesson ನಲ್ಲಿ ಮೊದಲೇ ಕೈಯಿಂದ ನಿಜವಾಗಿ ಗಣಿಸಿದ cosine schedule ಪ್ರಕಾರ learning rate ಅಡ್ಜಸ್ಟ್ ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '31. Practical Rules', textKn: '31. ಪ್ರಾಯೋಗಿಕ ನಿಯಮಗಳು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Start with Adam (lr=0.001) -- a strong general-purpose starting point\n• Try SGD + Momentum (lr=0.01, momentum=0.9) when you want to tune for final generalization performance\n• Transformers commonly use AdamW because weight decay is decoupled from Adam\'s adaptive update\n• Training unstable? Reduce the learning rate. Training too slowly? Consider increasing the learning rate or improving the schedule. Long training runs? Use a learning-rate schedule',
      bodyKn: '• Adam (lr=0.001) ಜೊತೆ ಪ್ರಾರಂಭಿಸಿ -- ಒಂದು ಬಲವಾದ ಸಾಮಾನ್ಯ-ಉದ್ದೇಶದ ಆರಂಭಿಕ ಬಿಂದು\n• ಅಂತಿಮ generalization performance ಗಾಗಿ tune ಮಾಡಲು ಬಯಸಿದಾಗ SGD + Momentum (lr=0.01, momentum=0.9) ಪ್ರಯತ್ನಿಸಿ\n• Transformers ಸಾಮಾನ್ಯವಾಗಿ AdamW ಬಳಸುತ್ತವೆ ಏಕೆಂದರೆ weight decay Adam ನ adaptive update ಇಂದ decoupled\n• Training ಅಸ್ಥಿರವೇ? Learning rate ಕಡಿಮೆ ಮಾಡಿ. Training ಬಹಳ ನಿಧಾನವೇ? Learning rate ಹೆಚ್ಚಿಸುವುದನ್ನೂ ಅಥವಾ schedule ಸುಧಾರಿಸುವುದನ್ನೂ ಪರಿಗಣಿಸಿ. ದೀರ್ಘ training runs? ಒಂದು learning-rate schedule ಬಳಸಿ' } },

    { type: 'table', data: { captionEn: 'Key Terms', captionKn: 'ಮುಖ್ಯ ಪದಗಳು',
      rows: 'Term|What It Actually Means\nGradient descent|Update weights by subtracting the gradient scaled by learning rate\nLearning rate|Controls how far each update moves\nMomentum|Accumulates previous gradients into a velocity\nSGD|Gradient computed from a sample or mini-batch\nMini-batch|Small subset used to estimate the gradient\nAdam|Uses first and second gradient moments for adaptive updates\nBias correction|Corrects Adam\'s zero-initialized moment estimates\nLearning-rate schedule|Adjusts learning rate during training\nConvex function|Every local minimum is a global minimum\nSaddle point|Gradient can be zero while curvature differs by direction\nLoss landscape|Loss as a function of model parameters\nConvergence|Further optimization produces little meaningful improvement' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• The cosine annealing schedule was not just described as "smooth" -- it was genuinely computed at five checkpoints, showing the exact non-linear shape (slow at the edges, faster in the middle) that a straight-line decay would not produce\n• The saddle-point code did not just assert that gradient-zero points can be traps -- it genuinely showed the same point (0,0) simultaneously increasing loss along one axis and decreasing it along another, which is precisely why relying on "gradient is zero" alone is an unreliable stopping criterion in high dimensions\n• Genuinely inspecting torch.optim.Adam\'s printed defaults (betas: (0.9, 0.999)) and finding they match this lesson\'s from-scratch beta1/beta2 defaults exactly is confirmation, not assumption, that the production optimizer is the same algorithm built earlier in this module\n• All three parts of this lesson, taken together, genuinely built and raced every algorithm discussed (GD, Momentum, Adam) on one shared benchmark (Rosenbrock) rather than describing them in isolation -- the comparison in Part 2 is what makes "Adam converges fastest" a measured fact rather than folklore',
      bodyKn: '• Cosine annealing schedule ಅನ್ನೂ ಕೇವಲ "ಸುಗಮ" ಎಂದು ವಿವರಿಸಲಾಗಿಲ್ಲ -- ಇದನ್ನೂ ಐದು checkpoints ಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ, ಒಂದು ನೇರ-ರೇಖೆ decay ಉತ್ಪಾದಿಸದ ನಿಖರ non-linear ಆಕಾರ (ಅಂಚುಗಳಲ್ಲಿ ನಿಧಾನ, ಮಧ್ಯದಲ್ಲಿ ವೇಗ) ತೋರಿಸುತ್ತಾ\n• Saddle-point code ಕೇವಲ gradient-zero points ಬಲೆಗಳಾಗಬಹುದು ಎಂದು ಪ್ರತಿಪಾದಿಸಲಿಲ್ಲ -- ಇದೂ ಅದೇ ಬಿಂದು (0,0) ಒಂದು ಅಕ್ಷದ ಉದ್ದಕ್ಕೂ loss ಹೆಚ್ಚಿಸುತ್ತಾ ಮತ್ತು ಇನ್ನೊಂದರ ಉದ್ದಕ್ಕೂ ಕಡಿಮೆ ಮಾಡುತ್ತಾ ಏಕಕಾಲದಲ್ಲಿ ನಿಜವಾಗಿ ತೋರಿಸಿತು, ಇದೇ high dimensions ನಲ್ಲಿ ಕೇವಲ "gradient ಶೂನ್ಯ" ಅವಲಂಬಿಸುವುದೂ ಒಂದು ಅವಿಶ್ವಸನೀಯ stopping criterion ಆಗಿರುವ ನಿಖರ ಕಾರಣ\n• torch.optim.Adam ನ ಮುದ್ರಿತ defaults (betas: (0.9, 0.999)) ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ ಮತ್ತು ಅವು ಈ lesson ನ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ beta1/beta2 defaults ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ ಎಂದು ಕಂಡುಹಿಡಿಯುವುದೂ ಒಂದು ದೃಢೀಕರಣ, ಒಂದು ಊಹೆ ಅಲ್ಲ, production optimizer ಈ module ನಲ್ಲಿ ಮೊದಲೇ ನಿರ್ಮಿಸಿದ ಅದೇ algorithm ಎಂಬುದೂ\n• ಈ lesson ನ ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳು, ಒಟ್ಟಿಗೆ, ಚರ್ಚಿಸಿದ ಪ್ರತಿ algorithm (GD, Momentum, Adam) ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ವಿವರಿಸುವ ಬದಲಿಗೆ ಒಂದು ಹಂಚಿದ benchmark (Rosenbrock) ಮೇಲೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತು ಸ್ಪರ್ಧಿಸಿದವು -- Part 2 ರಲ್ಲಿ ಹೋಲಿಕೆ "Adam ಅತಿ ವೇಗವಾಗಿ converge ಆಗುತ್ತದೆ" ಅನ್ನೂ ಜಾನಪದ ಬದಲಿಗೆ ಒಂದು ಅಳೆದ ಸತ್ಯ ಮಾಡುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Final Mental Model', headingKn: 'ಅಂತಿಮ Mental Model',
      bodyEn: '• LOSS → GRADIENT → "Which direction is uphill?" → GRADIENT DESCENT (learning rate, Momentum, Adam [first moment→direction, second moment→scale]) → LEARNING-RATE SCHEDULE (step decay, cosine annealing, warmup) → LOSS LANDSCAPE (convex, non-convex, local minima, saddle points) → TRAINED MODEL\n• Gradient descent gives you the basic downhill step; momentum remembers where you\'ve been; Adam adapts the step size for each parameter; schedules change the step size over training; and understanding the loss landscape explains why optimization can be difficult',
      bodyKn: '• LOSS → GRADIENT → "ಯಾವ ದಿಕ್ಕು ಮೇಲ್ಮುಖ?" → GRADIENT DESCENT (learning rate, Momentum, Adam [first moment→ದಿಕ್ಕು, second moment→ಪ್ರಮಾಣ]) → LEARNING-RATE SCHEDULE (step decay, cosine annealing, warmup) → LOSS LANDSCAPE (convex, non-convex, local minima, saddle points) → TRAINED MODEL\n• Gradient descent ನಿಮಗೆ ಮೂಲಭೂತ ಇಳಿಜಾರಿನ step ನೀಡುತ್ತದೆ; momentum ನೀವು ಎಲ್ಲಿದ್ದೀರಿ ಎಂದು ನೆನಪಿಡುತ್ತದೆ; Adam ಪ್ರತಿ parameter ಗೆ step size ಅಡಾಪ್ಟ್ ಮಾಡುತ್ತದೆ; schedules training ಆದ್ಯಂತ step size ಬದಲಾಯಿಸುತ್ತವೆ; ಮತ್ತು loss landscape ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ optimization ಏಕೆ ಕಷ್ಟಕರವಾಗಬಹುದು ಎಂದು ವಿವರಿಸುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computing the cosine annealing schedule from lr_max=0.01 to lr_min=0.0001 over T=100, what was the value at t=50?', qKn: 'T=100 ಮೇಲೆ lr_max=0.01 ಇಂದ lr_min=0.0001 ವರೆಗೆ cosine annealing schedule ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ, t=50 ನಲ್ಲಿ ಮೌಲ್ಯ ಏನೂ ಆಗಿತ್ತು?',
        opts: ['0.01 (unchanged)', '≈0.00505, the arithmetic midpoint between lr_min and lr_max', '0.0001 (already at minimum)', '0 (schedule already ended)'], correct: 1,
        optsKn: ['0.01 (ಬದಲಾಗದೆ)', '≈0.00505, lr_min ಮತ್ತು lr_max ನಡುವಿನ arithmetic midpoint', '0.0001 (ಈಗಾಗಲೇ minimum ನಲ್ಲಿ)', '0 (schedule ಈಗಾಗಲೇ ಕೊನೆಗೊಂಡಿದೆ)'] },
      { q: 'Genuinely evaluating f(x,y)=x²-y² and its gradient at (0,0), what confirmed this is a saddle point rather than a true minimum or maximum?', qKn: '(0,0) ನಲ್ಲಿ f(x,y)=x²-y² ಮತ್ತು ಇದರ gradient ಅನ್ನೂ ನಿಜವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುವುದೂ, ಇದೂ ಒಂದು ನಿಜ minimum ಅಥವಾ maximum ಬದಲಿಗೆ ಒಂದು saddle point ಎಂದು ಏನೂ ದೃಢಪಡಿಸಿತು?',
        opts: ['The gradient was nonzero', 'The gradient was (0,0), but moving along x increased the loss while moving along y decreased it -- curving up in one direction and down in another', 'The function had no defined value at (0,0)', 'f(0,0) was negative'], correct: 1,
        optsKn: ['Gradient nonzero ಆಗಿತ್ತು', 'Gradient (0,0) ಆಗಿತ್ತು, ಆದರೆ x ಉದ್ದಕ್ಕೂ ಚಲಿಸುವುದೂ loss ಹೆಚ್ಚಿಸಿತು ಆದರೆ y ಉದ್ದಕ್ಕೂ ಚಲಿಸುವುದೂ ಇದನ್ನೂ ಕಡಿಮೆ ಮಾಡಿತು -- ಒಂದು ದಿಕ್ಕಿನಲ್ಲಿ ಮೇಲ್ಮುಖವಾಗಿ ಮತ್ತು ಇನ್ನೊಂದರಲ್ಲಿ ಕೆಳಮುಖವಾಗಿ ವಕ್ರವಾಗುತ್ತಾ', 'Function (0,0) ನಲ್ಲಿ ಯಾವುದೇ ವ್ಯಾಖ್ಯಾನಿತ ಮೌಲ್ಯ ಹೊಂದಿಲ್ಲ', 'f(0,0) ಋಣಾತ್ಮಕವಾಗಿತ್ತು'] },
      { q: 'Genuinely inspecting torch.optim.Adam\'s printed defaults, what beta values did it show, and how did they compare to this lesson\'s from-scratch Adam class?', qKn: 'torch.optim.Adam ನ ಮುದ್ರಿತ defaults ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ, ಇದೂ ಯಾವ beta ಮೌಲ್ಯಗಳನ್ನೂ ತೋರಿಸಿತು, ಮತ್ತು ಅವು ಈ lesson ನ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ Adam class ಗೆ ಹೇಗೆ ಹೋಲಿಕೆಯಾದವು?',
        opts: ['betas: (0.5, 0.5), completely different from the lesson\'s implementation', 'betas: (0.9, 0.999), matching this lesson\'s beta1=0.9, beta2=0.999 defaults exactly', 'PyTorch does not expose beta values', 'betas: (0.1, 0.1), much smaller than the lesson\'s defaults'], correct: 1,
        optsKn: ['betas: (0.5, 0.5), lesson ನ implementation ಇಂದ ಸಂಪೂರ್ಣ ಭಿನ್ನ', 'betas: (0.9, 0.999), ಈ lesson ನ beta1=0.9, beta2=0.999 defaults ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'PyTorch beta ಮೌಲ್ಯಗಳನ್ನೂ ಬಹಿರಂಗಪಡಿಸುವುದಿಲ್ಲ', 'betas: (0.1, 0.1), lesson ನ defaults ಗಿಂತ ಬಹಳ ಚಿಕ್ಕದು'] },
      { q: 'What distinguishes a convex loss landscape from the non-convex landscape of a real neural network?', qKn: 'ಒಂದು convex loss landscape ಅನ್ನೂ ಒಂದು ನಿಜ neural network ನ non-convex landscape ಇಂದ ಏನೂ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ?',
        opts: ['Convex landscapes have no minimum at all', 'A convex function has a single global minimum, so gradient descent that converges reaches it; a non-convex landscape can contain local minima, saddle points, and flat regions with no simple guarantee of finding the global minimum', 'They are mathematically identical', 'Non-convex landscapes cannot be optimized with gradient descent at all'], correct: 1,
        optsKn: ['Convex landscapes ಗೆ ಯಾವುದೇ minimum ಇಲ್ಲ', 'ಒಂದು convex function ಒಂದೇ global minimum ಹೊಂದಿದೆ, ಆದ್ದರಿಂದ converge ಆಗುವ gradient descent ಇದನ್ನೂ ತಲುಪುತ್ತದೆ; ಒಂದು non-convex landscape local minima, saddle points, ಮತ್ತು flat regions ಒಳಗೊಂಡಿರಬಹುದು global minimum ಕಂಡುಹಿಡಿಯುವ ಯಾವುದೇ ಸರಳ ಖಾತರಿ ಇಲ್ಲದೆ', 'ಅವು ಗಣಿತೀಯವಾಗಿ ಒಂದೇ', 'Non-convex landscapes ಗಳನ್ನೂ gradient descent ಜೊತೆ ಸಂಪೂರ್ಣವಾಗಿ optimize ಮಾಡಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
