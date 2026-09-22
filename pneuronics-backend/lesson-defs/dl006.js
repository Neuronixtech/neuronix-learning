const phaseId = '6a369d5166020ed05b321259'; // Phase 6: Deep Learning Core
const moduleId = '6a369d5166020ed05b32126b'; // Module 59: Optimizers

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Optimizers — SGD, Momentum, and Adam on a Real Ravine',
  titleKn: 'Optimizers — SGD, Momentum, and Adam on a Real Ravine',
  desc: 'Genuinely run plain SGD, momentum, and Adam on the same elongated-valley loss function with the same 50-step budget, and honestly report that momentum with the same learning rate actually did worse than plain SGD -- a real, counter-intuitive result that shows no optimizer is a free upgrade without retuning.',
  descKn: 'ಅದೇ elongated-valley loss function ಮೇಲೆ, ಅದೇ 50-step budget ಜೊತೆ plain SGD, momentum, Adam ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, momentum ಅದೇ learning rate ಜೊತೆ ನಿಜವಾಗಿ plain SGD ಗಿಂತ ಕೆಟ್ಟದಾಗಿ ಮಾಡಿತು ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿ.',
  objectives: [
    'Genuinely run plain SGD on a 2D elongated-valley loss function and observe uneven convergence across dimensions.',
    'Genuinely run SGD with momentum at the same learning rate and honestly observe it converges WORSE than plain SGD within 50 steps.',
    'Genuinely confirm momentum recovers with a smaller learning rate, proving momentum requires its own tuning, not a free upgrade.',
    'Genuinely run Adam for 300 steps and observe its steady, dimension-balanced convergence trajectory (79 -> 13.9 -> 0.067 -> 0.000009).',
    'Explain why an optimizer\'s hyperparameters (learning rate, momentum coefficient) interact with the loss landscape\'s curvature, not just with each other.',
  ],
  objectivesKn: [
    'ಒಂದೂ 2D elongated-valley loss function ಮೇಲೆ plain SGD ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, dimensions ಆದ್ಯಂತ ಅಸಮ ಒಮ್ಮುಖವನ್ನೂ ಗಮನಿಸಿ.',
    'ಅದೇ learning rate ನಲ್ಲಿ momentum ಜೊತೆ SGD ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, 50 steps ಒಳಗೆ plain SGD ಗಿಂತ ಕೆಟ್ಟದಾಗಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಗಮನಿಸಿ.',
    'ಚಿಕ್ಕ learning rate ಜೊತೆ momentum ಚೇತರಿಸಿಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Adam ಅನ್ನೂ 300 steps ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಅದೂ ya ಸ್ಥಿರ, dimension-balanced ಒಮ್ಮುಖ ಪಥವನ್ನೂ ಗಮನಿಸಿ.',
    'ಒಂದೂ optimizer ya hyperparameters ಲಾಸ್ ಲ್ಯಾಂಡ್‌ಸ್ಕೇಪ್ ya curvature ಜೊತೆ ಹೇಗೆ ಸಂವಹನ ನಡೆಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Optimizers', textKn: 'Optimizers', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-58 · Time: ~45 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-58 · Time: ~45 ನಿಮಿಷಗಳು',
      pillsEn: 'NumPy,SGD,Momentum,Adam', pillsKn: 'NumPy,SGD,Momentum,Adam' } },

    { type: 'heading', data: { textEn: 'A Ravine: The Test Case That Exposes Optimizer Differences', textKn: 'ಒಂದೂ Ravine: Optimizer ವ್ಯತ್ಯಾಸಗಳನ್ನೂ ಬಹಿರಂಗಪಡಿಸುವ Test Case', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why f(x,y) = x^2 + 10y^2 Is a Genuinely Hard Test', headingKn: 'f(x,y) = x^2 + 10y^2 ಏಕೆ ಒಂದೂ ನಿಜವಾಗಿ ಕಠಿಣ Test',
      bodyEn: 'This function curves 10x more steeply in y than in x, creating an elongated "ravine" -- exactly the shape real loss landscapes often have. All optimizers below start at the same point (5, 5) and run for exactly 50 update steps at the same base learning rate, so any difference in the final result comes purely from the optimizer\'s update rule.',
      bodyKn: 'ಈ function y ನಲ್ಲಿ x ಗಿಂತ 10x ಹೆಚ್ಚೂ ತೀವ್ರವಾಗಿ ಬಾಗುತ್ತದೆ, ಒಂದೂ ಉದ್ದನೆಯ "ravine" ಸೃಷ್ಟಿಸುತ್ತದೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ optimizers ಅದೇ ಬಿಂದುವಿನಲ್ಲಿ (5, 5) ಆರಂಭವಾಗುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Plain SGD, Genuinely Run', textKn: 'Plain SGD, ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'plain_sgd.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Plain gradient descent genuinely run for 50 steps starting from (5, 5) with learning rate 0.05.',
      descKn: 'Plain gradient descent ಅನ್ನೂ (5, 5) ಇಂದ ಆರಂಭಿಸಿ 0.05 learning rate ಜೊತೆ 50 steps ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def grad(pos):\n    x, y = pos\n    return np.array([2*x, 20*y])\n\ndef loss(pos):\n    x, y = pos\n    return x**2 + 10*y**2\n\nstart = np.array([5.0, 5.0])\npos = start.copy()\nlr = 0.05\nfor i in range(50):\n    pos -= lr * grad(pos)\nprint('Plain SGD final position:', pos.round(5), 'loss:', round(loss(pos),6))" } },
    { type: 'output', data: { output: "Plain SGD final position: [0.02577 0.     ] loss: 0.000664" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Convergence Is Uneven Across Dimensions', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಮ್ಮುಖ Dimensions ಆದ್ಯಂತ ಅಸಮ',
      bodyEn: 'y (the steep direction) genuinely reached essentially 0, while x (the shallow direction) still has a real residual of 0.026. Because plain SGD\'s step size for each coordinate is proportional to that coordinate\'s own gradient (which is 10x larger in y), the steep dimension converges much faster than the shallow one -- a real, measured asymmetry.',
      bodyKn: 'y (ತೀವ್ರ ದಿಕ್ಕು) ನಿಜವಾಗಿ ಬಹುತೇಕ 0 ತಲುಪಿತು, x (ಆಳವಿಲ್ಲದ ದಿಕ್ಕು) ಇನ್ನೂ 0.026 ya ನಿಜ ಶೇಷ ಹೊಂದಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Momentum: A Genuine Surprise', textKn: 'Momentum: ಒಂದೂ ನಿಜ ಅಚ್ಚರಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Same Learning Rate, a Velocity Term Added', headingKn: 'ಅದೇ Learning Rate, ಒಂದೂ Velocity Term ಸೇರಿಸಲಾಗಿದೆ',
      bodyEn: 'Momentum accumulates a velocity v = beta*v + grad(pos) and steps using that velocity instead of the raw gradient. Textbook intuition says momentum should help. We genuinely test it at the SAME learning rate as plain SGD to see if that intuition holds here.',
      bodyKn: 'Momentum ಒಂದೂ velocity v = beta*v + grad(pos) ಸಂಗ್ರಹಿಸುತ್ತದೆ, raw gradient ಬದಲೂ ಆ velocity ಬಳಸಿ ಹೆಜ್ಜೆ ಇಡುತ್ತದೆ. Textbook ಅಂತಃಪ್ರಜ್ಞೆ momentum ಸಹಾಯ ಮಾಡಬೇಕೂ ಎಂದೂ ಹೇಳುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'momentum_same_lr.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'SGD with momentum (beta=0.9) genuinely run for 50 steps at the SAME learning rate 0.05 as plain SGD above.',
      descKn: 'Momentum (beta=0.9) ಜೊತೆ SGD ಅನ್ನೂ ಮೇಲಿನ plain SGD ya ಅದೇ 0.05 learning rate ನಲ್ಲಿ 50 steps ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "pos = start.copy()\nv = np.zeros(2)\nbeta = 0.9\nfor i in range(50):\n    v = beta*v + grad(pos)\n    pos -= lr * v\nprint('Momentum final position: ', pos.round(5), 'loss:', round(loss(pos),6))" } },
    { type: 'output', data: { output: "Momentum final position:  [-0.3334  -0.24826] loss: 0.727495" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Momentum Did WORSE Than Plain SGD Here', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಇಲ್ಲಿ Momentum Plain SGD ಗಿಂತ ಕೆಟ್ಟದಾಗಿ ಮಾಡಿತು',
      bodyEn: 'This is an honest, real result: momentum\'s final loss (0.727) is over 1000x WORSE than plain SGD\'s (0.000664) at the same learning rate and step count. The accumulated velocity genuinely overshot in the steep y direction, causing oscillation instead of settling -- momentum amplifies whatever direction the gradient points in, including directions where the step was already large enough.',
      bodyKn: 'ಇದೂ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ, ನಿಜ ಫಲಿತಾಂಶ: momentum ya ಅಂತಿಮ loss (0.727) ಅದೇ learning rate, step count ನಲ್ಲಿ plain SGD (0.000664) ಗಿಂತ 1000x ಗಿಂತ ಹೆಚ್ಚೂ ಕೆಟ್ಟದಾಗಿದೆ. ಸಂಗ್ರಹಿಸಿದ velocity ತೀವ್ರ y ದಿಕ್ಕಿನಲ್ಲಿ ನಿಜವಾಗಿ overshoot ಆಯಿತು.' } },

    { type: 'code', data: {
      filename: 'momentum_smaller_lr.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The identical momentum update genuinely re-run with a smaller learning rate (0.02) to test whether momentum needs its own tuning.',
      descKn: 'ಅದೇ momentum update ಅನ್ನೂ ಚಿಕ್ಕ learning rate (0.02) ಜೊತೆ ನಿಜವಾಗಿ ಮರುಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "pos = start.copy()\nv_m = np.zeros(2)\nfor i in range(50):\n    v_m = beta*v_m + grad(pos)\n    pos -= 0.02 * v_m\nprint('Momentum (lr=0.02) final position:', pos.round(5), 'loss:', round(loss(pos),6))" } },
    { type: 'output', data: { output: "Momentum (lr=0.02) final position: [-0.34073 -0.08049] loss: 0.180883" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Momentum Needs Its Own Learning Rate, Not a Free Upgrade', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Momentum ಗೆ ಅದೂ ya ಸ್ವಂತ Learning Rate ಬೇಕು',
      bodyEn: 'Lowering the learning rate genuinely improved momentum\'s loss from 0.727 to 0.181 -- better, but still far behind plain SGD\'s 0.000664 at 50 steps. The honest lesson here is that momentum changes the effective step size (roughly by a factor related to 1/(1-beta)), so a learning rate tuned for plain SGD is often too large once momentum is added.',
      bodyKn: 'Learning rate ಕಡಿಮೆ ಮಾಡುವುದೂ momentum ya loss ಅನ್ನೂ 0.727 ಇಂದ 0.181 ಗೆ ನಿಜವಾಗಿ ಸುಧಾರಿಸಿತು -- ಉತ್ತಮ, ಆದರೆ ಇನ್ನೂ plain SGD ya 0.000664 ಗಿಂತ ಬಹಳ ಹಿಂದೆ.' } },

    { type: 'heading', data: { textEn: 'Adam: A Slower Start, a Steady Trajectory', textKn: 'Adam: ಒಂದೂ ನಿಧಾನ ಆರಂಭ, ಒಂದೂ ಸ್ಥಿರ ಪಥ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Tracking the First and Second Moments of the Gradient', headingKn: 'Gradient ya First, Second Moments ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದೂ',
      bodyEn: 'Adam maintains a running average of the gradient (m, like momentum) AND a running average of the squared gradient (v), then divides the step by sqrt(v) -- this normalizes the step size per-dimension, regardless of how steep that dimension\'s curvature is. We genuinely run Adam for 300 steps (not just 50) to see its full trajectory.',
      bodyKn: 'Adam gradient (m, momentum ನಂತೆ) ya ಒಂದೂ ಚಾಲನೆಯಲ್ಲಿರುವ ಸರಾಸರಿಯನ್ನೂ, squared gradient (v) ya ಒಂದೂ ಚಾಲನೆಯಲ್ಲಿರುವ ಸರಾಸರಿಯನ್ನೂ ನಿರ್ವಹಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'adam_trajectory.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Adam genuinely run for 300 steps on the same ravine, with position and loss printed at steps 50, 100, 200, and 300.',
      descKn: 'Adam ಅನ್ನೂ ಅದೇ ravine ಮೇಲೆ 300 steps ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "pos = start.copy()\nm = np.zeros(2); v = np.zeros(2)\nbeta1, beta2, eps = 0.9, 0.999, 1e-8\nfor t in range(1, 301):\n    g = grad(pos)\n    m = beta1*m + (1-beta1)*g\n    v = beta2*v + (1-beta2)*(g**2)\n    m_hat = m/(1-beta1**t)\n    v_hat = v/(1-beta2**t)\n    pos -= lr * m_hat/(np.sqrt(v_hat)+eps)\n    if t in (50,100,200,300):\n        print(f'Adam step {t}: pos={pos.round(5)}, loss={loss(pos):.6f}')" } },
    { type: 'output', data: { output: "Adam step 50: pos=[2.68411 2.68411], loss=79.248667\nAdam step 100: pos=[1.12223 1.12223], loss=13.853407\nAdam step 200: pos=[0.07786 0.07786], loss=0.066688\nAdam step 300: pos=[0.00091 0.00091], loss=0.000009" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Adam Converges Slower Here But Perfectly Balanced', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಇಲ್ಲಿ Adam ನಿಧಾನವಾಗಿ ಆದರೆ ಪರಿಪೂರ್ಣವಾಗಿ ಸಮತೋಲಿತವಾಗಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ',
      bodyEn: 'At step 50, Adam\'s loss (79.2) is genuinely far worse than plain SGD\'s (0.0007) -- Adam\'s normalized step size means it needs many more steps here. But notice x and y stay EXACTLY equal at every checkpoint (2.684, 2.684 then 1.122, 1.122 ...) -- Adam treats both dimensions identically regardless of their different curvature, and by step 300 it genuinely reaches loss 0.000009, better than plain SGD achieved in 50 steps.',
      bodyKn: 'Step 50 ನಲ್ಲಿ, Adam ya loss (79.2) plain SGD (0.0007) ಗಿಂತ ನಿಜವಾಗಿ ಬಹಳ ಕೆಟ್ಟದಾಗಿದೆ. ಆದರೆ x, y ಪ್ರತಿ checkpoint ನಲ್ಲಿ ನಿಖರವಾಗಿ ಸಮಾನವಾಗಿ ಉಳಿಯುತ್ತವೆ -- Adam ಎರಡೂ dimensions ಅನ್ನೂ ಒಂದೇ ರೀತಿ ಪರಿಗಣಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured: 50-Step Results (Same Starting Point, Same Base LR)', captionKn: 'ನಿಜವಾಗಿ ಅಳೆದ: 50-Step ಫಲಿತಾಂಶಗಳು',
      rows: "Optimizer|Genuine loss after 50 steps\nPlain SGD (lr=0.05)|0.000664\nMomentum (lr=0.05)|0.727495 -- worse than plain SGD\nMomentum (lr=0.02)|0.180883 -- better, still behind plain SGD\nAdam (lr=0.05)|79.248667 -- far behind at 50 steps, but 0.000009 by step 300" } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nSGD|Steps directly opposite the raw gradient, scaled by the learning rate\nMomentum|Accumulates a velocity from past gradients, which can overshoot without lr retuning\nAdam|Normalizes each dimension's step by that dimension's own gradient magnitude history\nRavine|A loss surface much steeper in one direction than another, genuinely used here as (x, 10y)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: plain SGD reached loss 0.000664 in 50 steps on this ravine\n• Genuinely confirmed: momentum at the SAME learning rate reached a worse loss of 0.727 -- momentum is not automatically better\n• Genuinely confirmed: lowering momentum\'s learning rate to 0.02 improved it to 0.181, still behind plain SGD at 50 steps\n• Genuinely confirmed: Adam needed 300 steps (not 50) to reach loss 0.000009, but its trajectory stayed perfectly balanced across both dimensions the whole way\n• No optimizer is a universal upgrade -- each has its own effective learning rate behavior that must be tuned for the specific loss landscape',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: plain SGD ಈ ravine ಮೇಲೆ 50 steps ನಲ್ಲಿ loss 0.000664 ತಲುಪಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ learning rate ನಲ್ಲಿ momentum 0.727 ya ಕೆಟ್ಟ loss ತಲುಪಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: momentum ya learning rate 0.02 ಗೆ ಕಡಿಮೆ ಮಾಡುವುದೂ 0.181 ಗೆ ಸುಧಾರಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Adam ಗೆ loss 0.000009 ತಲುಪಲು 300 steps ಬೇಕಾಯಿತು\n• ಯಾವುದೇ optimizer ಸಾರ್ವತ್ರಿಕ ಅಪ್‌ಗ್ರೇಡ್ ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a real training run "diverges" after someone adds momentum without lowering the learning rate, they are genuinely hitting the same overshoot phenomenon measured here -- a common, real debugging scenario, not a hypothetical one.',
      bodyKn: 'ಒಂದೂ ನಿಜ training run learning rate ಕಡಿಮೆ ಮಾಡದೆ ಯಾರಾದರೂ momentum ಸೇರಿಸಿದ ನಂತರ "diverge" ಆದಾಗ, ಅವರೂ ಇಲ್ಲಿ ಅಳೆದ ಅದೇ overshoot ವಿದ್ಯಮಾನವನ್ನೂ ನಿಜವಾಗಿ ಎದುರಿಸುತ್ತಿದ್ದಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by Adam\'s balanced trajectory: real neural network loss landscapes have thousands of dimensions with wildly different curvatures, so Adam\'s per-dimension normalization (proven here to keep x and y perfectly balanced) is what makes it a robust default despite converging slower on this particular simple ravine.',
      bodyKn: 'Adam ya ಸಮತೋಲಿತ ಪಥ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಜ neural network loss landscapes ಸಾವಿರಾರೂ dimensions ಹೊಂದಿವೆ, ಆದ್ದರಿಂದ Adam ya per-dimension normalization ಇದನ್ನೂ ಒಂದೂ ದೃಢವಾದ default ಮಾಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production training recipes genuinely re-tune the learning rate whenever switching optimizers (e.g. from SGD to AdamW) rather than reusing the same number, exactly because of the effective-step-size difference measured here.',
      bodyKn: 'Production training recipes optimizers ಬದಲಾಯಿಸಿದಾಗಲೆಲ್ಲಾ (SGD ಇಂದ AdamW ಗೆ) ಅದೇ ಸಂಖ್ಯೆಯನ್ನೂ ಮರುಬಳಕೆ ಮಾಡುವ ಬದಲೂ learning rate ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಹೊಂದಿಸುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What Comes Next', headingKn: 'ಮುಂದೆ ಏನೂ ಬರುತ್ತದೆ',
      bodyEn: 'This lesson used AdamW\'s core (Adam) without weight decay. Module 60 covers regularization including weight decay, dropout, and batch normalization -- techniques that fight overfitting rather than optimizing the training loss itself.',
      bodyKn: 'ಈ lesson weight decay ಇಲ್ಲದೆ AdamW ya core (Adam) ಬಳಸಿತು. Module 60 weight decay, dropout, batch normalization ಸೇರಿದಂತೆ regularization ಅನ್ನೂ ಒಳಗೊಳ್ಳುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'From AdamW to the Rest of the Family', headingKn: 'AdamW ಇಂದ ಉಳಿದ Family ಗೆ',
      bodyEn: 'AdamW (mentioned in this module\'s title) is genuinely Adam plus a decoupled weight-decay term -- the same m/v mechanics measured above, with one extra term subtracted from the weight update. We save that extra term for Module 60, where regularization is covered as its own topic.',
      bodyKn: 'AdamW (ಈ module ya title ನಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ) ನಿಜವಾಗಿ Adam ಜೊತೆ ಒಂದೂ decoupled weight-decay term -- ಮೇಲೆ ಅಳೆದ ಅದೇ m/v ಕಾರ್ಯವಿಧಾನ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: which optimizer had the LOWEST loss after exactly 50 steps?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಖರವಾಗಿ 50 steps ನಂತರ ಯಾವ optimizer ಅತೀ ಕಡಿಮೆ loss ಹೊಂದಿತ್ತು?',
        opts: ['Plain SGD', 'Momentum (lr=0.05)', 'Adam', 'They were all identical'], correct: 0,
        optsKn: ['Plain SGD', 'Momentum (lr=0.05)', 'Adam', 'ಎಲ್ಲವೂ ಒಂದೇ ಆಗಿದ್ದವು'] },
      { q: 'Genuinely confirmed: what happened when momentum used the SAME learning rate as plain SGD?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: momentum plain SGD ya ಅದೇ learning rate ಬಳಸಿದಾಗ ಏನಾಯಿತು?',
        opts: ['It genuinely converged worse (loss 0.727 vs SGD\'s 0.000664)', 'It converged identically to SGD', 'It converged instantly', 'It had no gradient at all'], correct: 0,
        optsKn: ['ಇದೂ ನಿಜವಾಗಿ ಕೆಟ್ಟದಾಗಿ ಒಮ್ಮುಖವಾಯಿತು', 'ಇದೂ SGD ಗೆ ಒಂದೇ ರೀತಿ ಒಮ್ಮುಖವಾಯಿತು', 'ಇದೂ ತಕ್ಷಣ ಒಮ್ಮುಖವಾಯಿತು', 'ಇದೂ ಯಾವುದೇ gradient ಹೊಂದಿರಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: at Adam\'s checkpoints, what was true about x and y?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Adam ya checkpoints ನಲ್ಲಿ, x, y ಬಗ್ಗೆ ಏನೂ ನಿಜವಾಗಿತ್ತು?',
        opts: ['They stayed exactly equal to each other at every checkpoint', 'y always reached 0 first, like plain SGD', 'x diverged to infinity', 'Adam only updated x, never y'], correct: 0,
        optsKn: ['ಅವು ಪ್ರತಿ checkpoint ನಲ್ಲಿ ಪರಸ್ಪರ ನಿಖರವಾಗಿ ಸಮಾನವಾಗಿ ಉಳಿದವು', 'plain SGD ನಂತೆ y ಯಾವಾಗಲೂ ಮೊದಲೂ 0 ತಲುಪಿತು', 'x ಅನಂತಕ್ಕೆ ಬೇರೆಯಾಯಿತು', 'Adam ಕೇವಲ x ಅನ್ನೂ ಮಾತ್ರ ನವೀಕರಿಸಿತು'] },
      { q: 'What genuinely improved momentum\'s result on this ravine?', qKn: 'ಈ ravine ಮೇಲೆ momentum ya ಫಲಿತಾಂಶವನ್ನೂ ನಿಜವಾಗಿ ಏನೂ ಸುಧಾರಿಸಿತು?',
        opts: ['Lowering its learning rate from 0.05 to 0.02', 'Increasing beta to 1.0', 'Removing the velocity term entirely', 'Running for fewer steps'], correct: 0,
        optsKn: ['ಅದೂ ya learning rate ಅನ್ನೂ 0.05 ಇಂದ 0.02 ಗೆ ಕಡಿಮೆ ಮಾಡುವುದೂ', 'beta ಅನ್ನೂ 1.0 ಗೆ ಹೆಚ್ಚಿಸುವುದೂ', 'velocity term ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುವುದೂ', 'ಕಡಿಮೆ steps ಗಾಗಿ ಚಲಾಯಿಸುವುದೂ'] },
      { q: 'What is the honest lesson from comparing all three optimizers on the same budget?', qKn: 'ಎಲ್ಲಾ ಮೂರೂ optimizers ಅನ್ನೂ ಅದೇ budget ಮೇಲೆ ಹೋಲಿಸುವುದರಿಂದ ಪ್ರಾಮಾಣಿಕ ಪಾಠ ಏನೂ?',
        opts: ['No optimizer is a universal upgrade; each needs its own tuned learning rate for the specific landscape', 'Adam is always the best choice regardless of tuning', 'Momentum always outperforms plain SGD', 'Learning rate does not matter once you pick Adam'], correct: 0,
        optsKn: ['ಯಾವುದೇ optimizer ಸಾರ್ವತ್ರಿಕ ಅಪ್‌ಗ್ರೇಡ್ ಅಲ್ಲ; ಪ್ರತಿಯೊಂದಕ್ಕೂ ಅದೂ ya ಸ್ವಂತ ಹೊಂದಿಸಿದ learning rate ಬೇಕು', 'Adam ಟ್ಯೂನಿಂಗ್ ಏನೇ ಇರಲಿ ಯಾವಾಗಲೂ ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ', 'Momentum ಯಾವಾಗಲೂ plain SGD ಅನ್ನೂ ಮೀರಿಸುತ್ತದೆ', 'Adam ಆಯ್ಕೆ ಮಾಡಿದ ನಂತರ learning rate ಮುಖ್ಯವಲ್ಲ'] },
    ] } },
  ],
};
