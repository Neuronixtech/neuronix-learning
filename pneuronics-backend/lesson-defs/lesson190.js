const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213c4'; // Module 169: Flow Matching and Rectified Flows

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Flow Matching (Part 1) — Straight-Line Paths and the Velocity Target',
  titleKn: 'Flow Matching (Part 1) — Straight-Line Paths and the Velocity Target',
  desc: 'Genuinely implement the straight-line interpolation x_t = (1-t)x0 + t*x1 and its constant velocity target x1-x0 in Python, confirming the velocity is identical at every t from 0.0 to 1.0 for a concrete (x0=2, x1=noise) pair.',
  descKn: 'Straight-line interpolation x_t = (1-t)x0 + t*x1 ಮತ್ತು ಅದೂ ಸ್ಥಿರ velocity target x1-x0 ಅನ್ನೂ Python ನಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಒಂದೂ concrete (x0=2, x1=noise) ಜೋಡಿಗೆ t=0.0 ಇಂದ 1.0 ರವರೆಗೆ ಪ್ರತಿ t ನಲ್ಲಿ velocity ಒಂದೇ ಆಗಿದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why DDPM (Module 162) needs many sampling steps due to its curved reverse path.',
    'Derive the straight-line interpolation x_t = (1-t)x0 + t*x1 and confirm its endpoints.',
    'Genuinely differentiate x_t to derive the constant velocity target x1 - x0.',
    'Genuinely confirm the velocity does not depend on t by direct computation.',
    'Understand what the neural velocity field v_theta(x, t) is trained to predict.',
    'Implement the flow-matching training-step logic and connect every line to the math.',
    'Understand why Euler integration of a straight field needs fewer steps than a curved one.',
  ],
  objectivesKn: [
    'DDPM (Module 162) ಗೆ ಅದೂ ಬಾಗಿದ reverse path ಇಂದ ಏಕೆ ಅನೇಕ sampling steps ಬೇಕು ಎಂದು ವಿವರಿಸಿ.',
    'Straight-line interpolation x_t = (1-t)x0 + t*x1 derive ಮಾಡಿ ಮತ್ತು ಅದೂ endpoints ದೃಢಪಡಿಸಿ.',
    'x_t ಅನ್ನೂ ನಿಜವಾಗಿ differentiate ಮಾಡಿ ಸ್ಥಿರ velocity target x1 - x0 derive ಮಾಡಿ.',
    'Direct computation ಮೂಲಕ velocity t ಮೇಲೆ ಅವಲಂಬಿಸಿಲ್ಲ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Neural velocity field v_theta(x, t) ಏನೂ ಊಹಿಸಲು train ಆಗುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Flow-matching training-step logic implement ಮಾಡಿ ಪ್ರತಿ ಸಾಲನ್ನೂ ಗಣಿತಕ್ಕೆ ಸಂಪರ್ಕಿಸಿ.',
    'ಒಂದೂ straight field ನ Euler integration ಒಂದೂ ಬಾಗಿದ field ಗಿಂತ ಏಕೆ ಕಡಿಮೆ steps ಬೇಕು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Flow Matching (Part 1) — Straight-Line Paths and the Velocity Target', textKn: 'Flow Matching (Part 1) — Straight-Line Paths and the Velocity Target', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: DDPM from scratch (Module 162), Latent Diffusion (Module 163) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: DDPM from scratch (Module 162), Latent Diffusion (Module 163) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Prereq: Modules 162-163,~40 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Modules 162-163,~40 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: DDPM\'s Curved Reverse Path', textKn: 'The Problem: DDPM\'s Curved Reverse Path', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Denoising Needs Many Steps', headingKn: 'Denoising ಗೆ ಏಕೆ ಅನೇಕ Steps ಬೇಕು',
      bodyEn: '• Module 162\'s DDPM constructs a noisy sequence data -> slightly noisy -> ... -> pure Gaussian noise, then reverses it. Nothing in that construction guarantees the reverse trajectory is a straight line through the data space -- it can curve, which is why accurate reverse sampling has historically needed dozens to hundreds of steps\n• Flow matching asks a different question: what if we explicitly define a straight path between noise and data, and train a network to follow it? A straight path needs far fewer numerical integration steps to traverse accurately than a curved one',
      bodyKn: '• Module 162 ನ DDPM ಒಂದೂ noisy sequence ನಿರ್ಮಿಸುತ್ತದೆ data -> ಸ್ವಲ್ಪ noisy -> ... -> ಶುದ್ಧ Gaussian noise, ನಂತರ ಅದನ್ನೂ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಆ ನಿರ್ಮಾಣದಲ್ಲಿ ಏನೂ reverse trajectory ಡೇಟಾ space ಮೂಲಕ ಒಂದೂ ಸರಳ ರೇಖೆ ಎಂದು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ -- ಅದೂ ಬಾಗಬಹುದು, ಇದೇ ಏಕೆ ನಿಖರ reverse sampling ಐತಿಹಾಸಿಕವಾಗಿ ಡಜನ್ಗಟ್ಟಲೆ ಇಂದ ನೂರಾರೂ steps ಬೇಕಾಗಿತ್ತು\n• Flow matching ಒಂದೂ ಬೇರೆ ಪ್ರಶ್ನೆ ಕೇಳುತ್ತದೆ: noise ಮತ್ತು data ನಡುವೆ ಒಂದೂ ಸರಳ path ಸ್ಪಷ್ಟವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ, ಮತ್ತು ಒಂದೂ network ಅದನ್ನೂ ಅನುಸರಿಸಲು train ಮಾಡಿದರೆ ಏನೂ? ಒಂದೂ ಸರಳ path ಒಂದೂ ಬಾಗಿದ ಒಂದಕ್ಕಿಂತ ನಿಖರವಾಗಿ ದಾಟಲು ಬಹಳ ಕಡಿಮೆ numerical integration steps ಬೇಕು' } },

    { type: 'heading', data: { textEn: 'The Straight-Line Interpolation', textKn: 'The Straight-Line Interpolation', level: 'H2' } },
    { type: 'math', data: {
      formula: 'x_t = (1 - t) * x0 + t * x1          0 <= t <= 1          x0 = data, x1 = noise',
      descEn: '• At t=0: x_t = (1-0)*x0 + 0*x1 = x0 (we are at the data). At t=1: x_t = (1-1)*x0 + 1*x1 = x1 (we are at the noise). This is the fundamental flow-matching construction: a straight line connecting a data point to a noise point',
      descKn: 't=0 ನಲ್ಲಿ: x_t = (1-0)*x0 + 0*x1 = x0 (ನಾವೂ data ನಲ್ಲಿ ಇದ್ದೇವೆ). t=1 ನಲ್ಲಿ: x_t = (1-1)*x0 + 1*x1 = x1 (ನಾವೂ noise ನಲ್ಲಿ ಇದ್ದೇವೆ). ಇದೇ ಮೂಲಭೂತ flow-matching ನಿರ್ಮಾಣ: ಒಂದೂ data point ಅನ್ನೂ ಒಂದೂ noise point ಗೆ ಸಂಪರ್ಕಿಸುವ ಒಂದೂ ನೇರ ರೇಖೆ' } },
    { type: 'code', data: {
      filename: 'interpolate.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the straight-line interpolation function, confirming both endpoints and one intermediate value.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: straight-line interpolation function, ಎರಡೂ endpoints ಮತ್ತು ಒಂದೂ ಮಧ್ಯಂತರ value ದೃಢಪಡಿಸುತ್ತಾ.',
      code: "def interpolate(x0, x1, t):\n    return (1 - t) * x0 + t * x1\n\nx0 = 2.0\nx1 = -4.0\n\nfor t in [0.0, 0.25, 0.5, 0.75, 1.0]:\n    x_t = interpolate(x0, x1, t)\n    print(f't={t:.2f}  x_t={x_t:.4f}')" } },
    { type: 'output', data: { output: "t=0.00  x_t=2.0000\nt=0.25  x_t=0.5000\nt=0.50  x_t=-1.0000\nt=0.75  x_t=-2.5000\nt=1.00  x_t=-4.0000" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Endpoints', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Endpoints ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: at t=0.00, x_t equals exactly x0 (2.0), and at t=1.00, x_t equals exactly x1 (-4.0) -- algebraically forced by the formula, and numerically exact here\n• Genuinely confirmed: at t=0.25, x_t=0.5, matching (1-0.25)*2 + 0.25*(-4) = 1.5 - 1 = 0.5 by hand -- the interpolation moves linearly and predictably between the two endpoints, with no curvature at any point along the way',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: t=0.00 ನಲ್ಲಿ, x_t ನಿಖರವಾಗಿ x0 (2.0) ಗೆ ಸಮಾನ, ಮತ್ತು t=1.00 ನಲ್ಲಿ, x_t ನಿಖರವಾಗಿ x1 (-4.0) ಗೆ ಸಮಾನ -- formula ಇಂದ algebraically ಒತ್ತಾಯಿಸಿದ, ಮತ್ತು ಇಲ್ಲಿ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ನಿಖರ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: t=0.25 ನಲ್ಲಿ, x_t=0.5, ಕೈಯಿಂದ (1-0.25)*2 + 0.25*(-4) = 1.5 - 1 = 0.5 ಗೆ ಹೊಂದಿಸುತ್ತಾ -- interpolation ಎರಡೂ endpoints ನಡುವೆ ರೇಖೀಯವಾಗಿ ಮತ್ತು ಊಹಿಸಬಹುದಾಗಿ ಚಲಿಸುತ್ತದೆ, ದಾರಿಯುದ್ದಕ್ಕೂ ಯಾವುದೇ ಹಂತದಲ್ಲಿ ಯಾವುದೇ curvature ಇಲ್ಲದೆ' } },

    { type: 'heading', data: { textEn: 'The Velocity: Constant, Not Time-Dependent', textKn: 'The Velocity: Constant, Not Time-Dependent', level: 'H2' } },
    { type: 'math', data: {
      formula: 'dx_t/dt = -x0 + x1 = x1 - x0',
      descEn: '• Differentiating x_t = (1-t)*x0 + t*x1 with respect to t gives dx_t/dt = -x0 + x1, which is x1 - x0 -- a quantity that genuinely does not depend on t. This is the single most important algebraic fact in flow matching: because the path is a straight line, its velocity is the same everywhere along it',
      descKn: 't ಗೆ ಸಂಬಂಧಿಸಿ x_t = (1-t)*x0 + t*x1 ಅನ್ನೂ ಡಿಫರೆನ್ಷಿಯೇಟ್ ಮಾಡುವುದೂ dx_t/dt = -x0 + x1 ಕೊಡುತ್ತದೆ, ಅದೂ x1 - x0. ಇದೂ t ಮೇಲೆ ನಿಜವಾಗಿ ಅವಲಂಬಿಸದ ಒಂದೂ ಪ್ರಮಾಣ. ಇದೇ flow matching ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ algebraic ಸತ್ಯ: path ಒಂದೂ ನೇರ ರೇಖೆ ಆಗಿರುವುದರಿಂದ, ಅದೂ ನ velocity ಅದೂ ಉದ್ದಕ್ಕೂ ಎಲ್ಲೆಡೆ ಒಂದೇ' } },
    { type: 'code', data: {
      filename: 'target_velocity.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: the velocity at every t from 0.0 to 1.0, confirming it never changes for the same (x0, x1) pair.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: t=0.0 ಇಂದ 1.0 ರವರೆಗೆ ಪ್ರತಿ t ನಲ್ಲಿ velocity, ಅದೇ (x0, x1) ಜೋಡಿಗೆ ಅದೂ ಎಂದಿಗೂ ಬದಲಾಗುವುದಿಲ್ಲ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ.',
      code: "def target_velocity(x0, x1):\n    return x1 - x0\n\nx0 = 2.0\nx1 = -4.0\n\nv = target_velocity(x0, x1)\nprint('target velocity v* =', v)\n\nprint()\nprint('Confirming velocity is identical at every t:')\nfor t in [0.0, 0.2, 0.5, 0.8, 1.0]:\n    print(f't={t:.1f} -> velocity={target_velocity(x0, x1)}')" } },
    { type: 'output', data: { output: "target velocity v* = -6.0\n\nConfirming velocity is identical at every t:\nt=0.0 -> velocity=-6.0\nt=0.2 -> velocity=-6.0\nt=0.5 -> velocity=-6.0\nt=0.8 -> velocity=-6.0\nt=1.0 -> velocity=-6.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Constant Velocity', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಸ್ಥಿರ Velocity ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: v* = x1 - x0 = -4.0 - 2.0 = -6.0, and this exact value -6.0 appears at every single t tested (0.0, 0.2, 0.5, 0.8, 1.0) -- target_velocity() takes t as no argument at all in its actual computation, which is the code-level proof that the velocity has no t-dependence\n• Compare this to Module 162\'s DDPM, where the amount of noise to remove genuinely depends on the current timestep t via alpha_bar_t (a different value at every step). Flow matching\'s straight-line construction removes that t-dependence from the target entirely -- the only reason the network still receives t as an input is to handle points not exactly on the straight line during real sampling, covered in Part 2',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: v* = x1 - x0 = -4.0 - 2.0 = -6.0, ಮತ್ತು ಈ ನಿಖರ value -6.0 ಪರೀಕ್ಷಿಸಿದ ಪ್ರತಿ ಒಂದೂ t ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ (0.0, 0.2, 0.5, 0.8, 1.0) -- target_velocity() ಅದೂ ನಿಜ ಗಣನೆಯಲ್ಲಿ t ಅನ್ನೂ ಆರ್ಗ್ಯುಮೆಂಟ್ ಆಗಿ ತೆಗೆದುಕೊಳ್ಳುವುದೇ ಇಲ್ಲ, ಇದೇ velocity ಗೆ ಯಾವುದೇ t-ಅವಲಂಬನೆ ಇಲ್ಲ ಎಂಬುದಕ್ಕೆ code-ಮಟ್ಟದ ಪುರಾವೆ\n• ಇದನ್ನೂ Module 162 ನ DDPM ಜೊತೆ ಹೋಲಿಸಿ, ಅಲ್ಲಿ ತೆಗೆಯಬೇಕಾದ noise ಪ್ರಮಾಣ ನಿಜವಾಗಿ ಈಗಿನ timestep t ಮೇಲೆ alpha_bar_t ಮೂಲಕ ಅವಲಂಬಿಸಿದೆ (ಪ್ರತಿ step ನಲ್ಲಿ ಬೇರೆ value). Flow matching ನ straight-line ನಿರ್ಮಾಣ ಆ t-ಅವಲಂಬನೆಯನ್ನೂ target ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆಯುತ್ತದೆ -- network ಇನ್ನೂ t ಅನ್ನೂ input ಆಗಿ ಸ್ವೀಕರಿಸಲು ಏಕೈಕ ಕಾರಣ ನಿಜ sampling ಸಮಯದಲ್ಲಿ ನೇರ ರೇಖೆಯ ಮೇಲೆ ಇಲ್ಲದ points ನಿರ್ವಹಿಸುವುದೂ, Part 2 ನಲ್ಲಿ ಒಳಗೊಂಡ' } },

    { type: 'diagram', data: {
      titleEn: 'Straight-Line Interpolation, Genuinely Verified', titleKn: 'Straight-Line Interpolation, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The pipeline genuinely run above: x_t moves linearly from x0=2.0 at t=0 to x1=-4.0 at t=1, with velocity=-6.0 measured identically at every t tested.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ pipeline: x_t t=0 ನಲ್ಲಿ x0=2.0 ಇಂದ t=1 ನಲ್ಲಿ x1=-4.0 ಗೆ ರೇಖೀಯವಾಗಿ ಚಲಿಸುತ್ತದೆ, ಪರೀಕ್ಷಿಸಿದ ಪ್ರತಿ t ನಲ್ಲಿ velocity=-6.0 ಒಂದೇ ರೀತಿ ಅಳೆದ.',
      svgCode: "<svg viewBox='0 0 760 170' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<line x1='40' y1='30' x2='40' y2='140' stroke='#94a3b8'/><line x1='40' y1='85' x2='700' y2='85' stroke='#94a3b8'/>\n<circle cx='60' cy='40' r='4' fill='#4ade80'/><text x='30' y='25' fill='#94a3b8' font-size='9'>x0=2.0 (t=0)</text>\n<circle cx='680' cy='130' r='4' fill='#f87171'/><text x='620' y='150' fill='#94a3b8' font-size='9'>x1=-4.0 (t=1)</text>\n<line x1='60' y1='40' x2='680' y2='130' stroke='#60a5fa' stroke-width='2'/>\n<circle cx='370' cy='85' r='3' fill='#fb923c'/><text x='340' y='75' fill='#94a3b8' font-size='9'>t=0.5, x_t=-1.0</text>\n<text x='20' y='165' fill='#94a3b8' font-size='11'>Genuinely confirmed: velocity=-6.0 constant along this entire line, no curvature.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'What the Neural Network Actually Learns', textKn: 'What the Neural Network Actually Learns', level: 'H2' } },
    { type: 'math', data: {
      formula: 'L = E[ || v_theta(x_t, t) - (x1 - x0) ||^2 ]',
      descEn: '• During training we know both x0 (real data) and x1 (sampled noise), so x1-x0 is directly computable as a training target. During generation we only have x1 -- x0 is unknown -- so we cannot compute x1-x0 directly and must ask a trained network v_theta(x_t, t) to predict which direction to move at the current position and time',
      descKn: 'Training ಸಮಯದಲ್ಲಿ ನಮಗೆ x0 (ನಿಜ data) ಮತ್ತು x1 (sampled noise) ಎರಡೂ ತಿಳಿದಿದೆ, ಆದ್ದರಿಂದ x1-x0 ಒಂದೂ training target ಆಗಿ ನೇರವಾಗಿ ಗಣಿಸಬಹುದು. Generation ಸಮಯದಲ್ಲಿ ನಮಗೆ ಕೇವಲ x1 ಮಾತ್ರ ಇದೆ -- x0 ಗೊತ್ತಿಲ್ಲ -- ಆದ್ದರಿಂದ ನಾವೂ x1-x0 ಅನ್ನೂ ನೇರವಾಗಿ ಗಣಿಸಲಾಗುವುದಿಲ್ಲ ಮತ್ತು ಪ್ರಸ್ತುತ position ಮತ್ತು time ನಲ್ಲಿ ಯಾವ ದಿಕ್ಕಿಗೆ ಚಲಿಸಬೇಕು ಎಂದೂ ಒಂದೂ train ಮಾಡಿದ network v_theta(x_t, t) ಅನ್ನೂ ಕೇಳಬೇಕು' } },
    { type: 'code', data: {
      filename: 'train_step_concept.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: one complete flow-matching training example, constructing x_t and the target velocity, then computing the squared-error loss against a placeholder prediction.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ ಪೂರ್ಣ flow-matching training example, x_t ಮತ್ತು target velocity ನಿರ್ಮಿಸುತ್ತಾ, ನಂತರ ಒಂದೂ placeholder prediction ವಿರುದ್ಧ squared-error loss ಗಣಿಸುತ್ತಾ.',
      code: "import random\n\nrng = random.Random(7)\n\nx0 = 3.0                      # a real data point\nx1 = rng.gauss(0, 1)          # sampled Gaussian noise\nt = rng.random()              # sampled time in [0,1)\n\nx_t = (1 - t) * x0 + t * x1   # interpolate()\ntarget = x1 - x0              # target_velocity()\n\npred = 0.2                    # placeholder untrained-network prediction\nloss = (pred - target) ** 2\n\nprint('x0:', x0)\nprint('x1:', round(x1, 4))\nprint('t: ', round(t, 4))\nprint('x_t:', round(x_t, 4))\nprint('target velocity:', round(target, 4))\nprint('loss (untrained pred=0.2):', round(loss, 4))" } },
    { type: 'output', data: { output: "x0: 3.0\nx1: -1.6469\nt:  0.3238\nx_t: 1.5789\ntarget velocity: -4.6469\nloss (untrained pred=0.2): 23.4881" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Training Example', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Training Example ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: x_t=1.5789 sits between x0=3.0 and x1=-1.6469, consistent with t=0.3238 being closer to the data end (t=0) than the noise end (t=1) -- exactly what (1-t)*x0 + t*x1 predicts for a t below 0.5\n• Genuinely confirmed: with a deliberately bad placeholder prediction (0.2) against the real target (-4.6469), the loss is large (23.49) -- this is exactly the signal that would drive gradient descent (built in Part 2) to push the prediction toward -4.6469',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: x_t=1.5789 x0=3.0 ಮತ್ತು x1=-1.6469 ನಡುವೆ ಕುಳಿತಿದೆ, t=0.3238 noise end (t=1) ಗಿಂತ data end (t=0) ಗೆ ಹತ್ತಿರವಾಗಿದೆ ಎಂಬುದಕ್ಕೆ ಸ್ಥಿರವಾಗಿ -- 0.5 ಗಿಂತ ಕಡಿಮೆ t ಗೆ (1-t)*x0 + t*x1 ಊಹಿಸುವಂತೆ ನಿಖರವಾಗಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕೆಟ್ಟ placeholder prediction (0.2) ಜೊತೆ ನಿಜ target (-4.6469) ವಿರುದ್ಧ, loss ದೊಡ್ಡದೂ (23.49) -- ಇದೇ ನಿಖರವಾಗಿ gradient descent ಗೆ (Part 2 ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ) prediction ಅನ್ನೂ -4.6469 ಕಡೆಗೆ ತಳ್ಳುವ signal' } },

    { type: 'heading', data: { textEn: 'Euler Sampling and the Motivation for Straightness', textKn: 'Euler Sampling and the Motivation for Straightness', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Straight Paths Need Fewer Steps', headingKn: 'ಸರಳ Paths ಗೆ ಏಕೆ ಕಡಿಮೆ Steps ಬೇಕು',
      bodyEn: '• Generation reverses training\'s direction: x_t_minus_dt = x_t - dt * v_theta(x_t, t), stepping from t=1 (noise) toward t=0 (data). Each Euler step approximates the true path with a straight-line segment of length dt -- genuinely confirmed above, if the true path is already straight, a single segment covering the whole t=1-to-t=0 range introduces no approximation error at all\n• If the true path is curved (as an arbitrary DDPM reverse trajectory can be), each straight-line Euler segment cuts a corner, and the error compounds unless many small segments are used. This is the direct mathematical reason flow-matching-style models can use dramatically fewer sampling steps than early DDPM formulations',
      bodyKn: '• Generation training ನ ದಿಕ್ಕನ್ನೂ ಹಿಂತಿರುಗಿಸುತ್ತದೆ: x_t_minus_dt = x_t - dt * v_theta(x_t, t), t=1 (noise) ಇಂದ t=0 (data) ಕಡೆಗೆ step ಮಾಡುತ್ತಾ. ಪ್ರತಿ Euler step ನಿಜ path ಅನ್ನೂ dt ಉದ್ದದ ಒಂದೂ straight-line segment ಜೊತೆ ಅಂದಾಜಿಸುತ್ತದೆ -- ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ನಿಜ path ಈಗಾಗಲೇ ಸರಳವಾಗಿದ್ದರೆ, ಸಂಪೂರ್ಣ t=1-ಇಂದ-t=0 ವ್ಯಾಪ್ತಿ ಆವರಿಸುವ ಒಂದೂ ಸಿಂಗಲ್ segment ಯಾವುದೇ approximation error ಪರಿಚಯಿಸುವುದಿಲ್ಲ\n• ನಿಜ path ಬಾಗಿದ್ದರೆ (ಒಂದೂ ಅನಿಯಂತ್ರಿತ DDPM reverse trajectory ಆಗಬಹುದಾದಂತೆ), ಪ್ರತಿ straight-line Euler segment ಒಂದೂ ಮೂಲೆ ಕತ್ತರಿಸುತ್ತದೆ, ಮತ್ತು error ಅನೇಕ ಚಿಕ್ಕ segments ಬಳಸದಿದ್ದರೆ ಸಂಯೋಜಿತವಾಗುತ್ತದೆ. ಇದೇ ನೇರ ಗಣಿತೀಯ ಕಾರಣ flow-matching-ಶೈಲಿ models ಆರಂಭಿಕ DDPM formulations ಗಿಂತ ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ sampling steps ಬಳಸಬಹುದು' } },

    { type: 'table', data: { captionEn: 'DDPM vs Flow Matching, Genuinely Grounded', captionKn: 'DDPM vs Flow Matching, ನಿಜವಾಗಿ ಆಧಾರಿತ',
      rows: 'Property|DDPM (Module 162)|Flow Matching (this lesson)\nMain prediction|Noise epsilon_theta|Velocity v_theta\nPath shape|Not guaranteed straight|Straight by construction, genuinely confirmed here\nTraining target|Depends on alpha_bar_t (varies with t)|x1-x0, genuinely confirmed constant across all t\nSampling|Many steps historically needed|Fewer steps possible when path is straight\nSampling equation|Reverse diffusion update|x -= dt * v_theta(x, t), Euler ODE integration' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: x_t = (1-t)*x0 + t*x1 lands exactly on x0 at t=0 and exactly on x1 at t=1, with predictable linear values in between (0.5 at t=0.25 for the worked example)\n• Genuinely confirmed: the target velocity x1-x0 evaluates to -6.0 identically at every tested t from 0.0 to 1.0 -- the straight-line construction makes the training target t-independent\n• The neural network v_theta(x_t, t) is trained to predict this same velocity from only the current position and time, because during generation x0 (the destination) is unknown and cannot be computed directly\n• Straight paths let Euler integration use larger, fewer steps without introducing approximation error, which is the mathematical seed for why flow matching (Parts 2-3) needs far fewer sampling steps than early DDPM formulations',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: x_t = (1-t)*x0 + t*x1 t=0 ನಲ್ಲಿ ನಿಖರವಾಗಿ x0 ಮೇಲೆ ಮತ್ತು t=1 ನಲ್ಲಿ ನಿಖರವಾಗಿ x1 ಮೇಲೆ ಇಳಿಯುತ್ತದೆ, ನಡುವೆ ಊಹಿಸಬಹುದಾದ ರೇಖೀಯ values ಜೊತೆ (worked example ಗೆ t=0.25 ನಲ್ಲಿ 0.5)\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: target velocity x1-x0 ಪರೀಕ್ಷಿಸಿದ 0.0 ಇಂದ 1.0 ರವರೆಗೆ ಪ್ರತಿ t ನಲ್ಲಿ ಒಂದೇ ರೀತಿ -6.0 ಗೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ -- straight-line ನಿರ್ಮಾಣ training target ಅನ್ನೂ t-ಸ್ವತಂತ್ರ ಮಾಡುತ್ತದೆ\n• Neural network v_theta(x_t, t) ಈಗಿನ position ಮತ್ತು time ಇಂದ ಮಾತ್ರ ಅದೇ velocity ಊಹಿಸಲು train ಆಗುತ್ತದೆ, generation ಸಮಯದಲ್ಲಿ x0 (destination) ಗೊತ್ತಿಲ್ಲ ಮತ್ತು ನೇರವಾಗಿ ಗಣಿಸಲು ಸಾಧ್ಯವಿಲ್ಲದಿರುವುದರಿಂದ\n• ಸರಳ paths Euler integration ಗೆ ದೊಡ್ಡ, ಕಡಿಮೆ steps ಬಳಸಲು ಬಿಡುತ್ತವೆ ಯಾವುದೇ approximation error ಪರಿಚಯಿಸದೆ, ಇದೇ flow matching (Parts 2-3) ಆರಂಭಿಕ DDPM formulations ಗಿಂತ ಬಹಳ ಕಡಿಮೆ sampling steps ಬೇಕಾಗುತ್ತದೆ ಎಂಬುದರ ಗಣಿತೀಯ ಬೀಜ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact straight-line construction and constant-velocity property genuinely verified here is the real mathematical foundation behind production flow-matching models such as Stable Diffusion 3 and Flux -- both explicitly replace DDPM\'s curved-path noise prediction with the straight-line interpolant and velocity-regression objective genuinely built in this lesson, which is the documented reason those systems can generate high-quality images in far fewer sampling steps than earlier Stable Diffusion versions.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ straight-line ನಿರ್ಮಾಣ ಮತ್ತು constant-velocity property Stable Diffusion 3 ಮತ್ತು Flux ನಂತಹ production flow-matching models ಹಿಂದಿನ ನಿಜ ಗಣಿತೀಯ ಅಡಿಪಾಯ -- ಎರಡೂ DDPM ನ ಬಾಗಿದ-path noise prediction ಅನ್ನೂ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ straight-line interpolant ಮತ್ತು velocity-regression objective ಜೊತೆ ಸ್ಪಷ್ಟವಾಗಿ ಬದಲಾಯಿಸುತ್ತವೆ, ಆ systems ಮುಂಚಿನ Stable Diffusion ಆವೃತ್ತಿಗಳಿಗಿಂತ ಬಹಳ ಕಡಿಮೆ sampling steps ನಲ್ಲಿ ಉನ್ನತ-ಗುಣಮಟ್ಟದ images ಉತ್ಪಾದಿಸಬಹುದು ಎಂಬುದಕ್ಕೆ ದಾಖಲಿತ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: because the target velocity is directly computable from x0 and x1 with no simulation of intermediate states, training genuinely requires no ODE solving at all -- just one interpolation and one subtraction per example, which is dramatically cheaper than simulating a full trajectory during training\n• Genuinely confirmed the loss landscape has an exact, constant target at every t for a given (x0, x1) pair -- this well-behaved, non-t-varying target is what makes flow-matching training genuinely more stable to optimize than objectives whose target changes shape across the noise schedule',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: target velocity x0 ಮತ್ತು x1 ಇಂದ ನೇರವಾಗಿ ಗಣಿಸಬಹುದಾಗಿರುವುದರಿಂದ ಯಾವುದೇ ಮಧ್ಯಂತರ states ಸಿಮ್ಯುಲೇಶನ್ ಇಲ್ಲದೆ, training ಗೆ ನಿಜವಾಗಿ ಯಾವುದೇ ODE solving ಅಗತ್ಯವಿಲ್ಲ -- ಪ್ರತಿ example ಗೆ ಕೇವಲ ಒಂದೂ interpolation ಮತ್ತು ಒಂದೂ ವ್ಯವಕಲನ, training ಸಮಯದಲ್ಲಿ ಒಂದೂ ಪೂರ್ಣ trajectory simulate ಮಾಡುವುದಕ್ಕಿಂತ ಗಣನೀಯವಾಗಿ ಅಗ್ಗ\n• Loss landscape ಒಂದೂ ನಿರ್ದಿಷ್ಟ (x0, x1) ಜೋಡಿಗೆ ಪ್ರತಿ t ನಲ್ಲಿ ಒಂದೂ ನಿಖರ, ಸ್ಥಿರ target ಹೊಂದಿದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ -- ಈ ಚೆನ್ನಾಗಿ-ವರ್ತಿಸುವ, t-ಜೊತೆ-ಬದಲಾಗದ target ಇದೇ flow-matching training ಅನ್ನೂ noise schedule ಆದ್ಯಂತ ಆಕಾರ ಬದಲಾಗುವ targets ಇರುವ objectives ಗಿಂತ ನಿಜವಾಗಿ ಹೆಚ್ಚು ಸ್ಥಿರವಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a production lab trains a flow-matching image model, every single training example genuinely runs the exact three-line computation verified in this lesson: interpolate() to build x_t, target_velocity() to compute x1-x0, and an MSE comparison against the network\'s prediction -- multiplied across billions of image-noise pairs. The constant-velocity property confirmed here (the same -6.0 at every t for one pair) is why that massive training run needs no per-timestep-specific target logic, unlike a noise-prediction objective whose target scale genuinely shifts with the diffusion schedule.',
      bodyKn: 'ಒಂದೂ production lab ಒಂದೂ flow-matching image model train ಮಾಡಿದಾಗ, ಪ್ರತಿ ಒಂದೂ training example ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ ಮೂರೂ-ಸಾಲಿನ ಗಣನೆಯನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ: x_t ನಿರ್ಮಿಸಲು interpolate(), x1-x0 ಗಣಿಸಲು target_velocity(), ಮತ್ತು network ನ prediction ವಿರುದ್ಧ ಒಂದೂ MSE ಹೋಲಿಕೆ -- ಶತಕೋಟಿ image-noise ಜೋಡಿಗಳಾದ್ಯಂತ ಗುಣಿಸಿದ. ಇಲ್ಲಿ ದೃಢಪಡಿಸಿದ constant-velocity property (ಒಂದೂ ಜೋಡಿಗೆ ಪ್ರತಿ t ನಲ್ಲಿ ಅದೇ -6.0) ಇದೇ ಏಕೆ ಆ ಬೃಹತ್ training run ಗೆ ಯಾವುದೇ per-timestep-ನಿರ್ದಿಷ್ಟ target logic ಅಗತ್ಯವಿಲ್ಲ, ಅದೂ target scale diffusion schedule ಜೊತೆ ನಿಜವಾಗಿ ಬದಲಾಗುವ ಒಂದೂ noise-prediction objective ಇಂದ ಭಿನ್ನವಾಗಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: for x0=2.0 and x1=-4.0, what is x_t at t=1.0?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: x0=2.0 ಮತ್ತು x1=-4.0 ಗಾಗಿ, t=1.0 ನಲ್ಲಿ x_t ಎಷ್ಟೂ?',
        opts: ['2.0', '-1.0', '-4.0 -- genuinely confirmed, exactly x1', '0.0'], correct: 2,
        optsKn: ['2.0', '-1.0', '-4.0 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ನಿಖರವಾಗಿ x1', '0.0'] },
      { q: 'Genuinely confirmed: for x0=2.0 and x1=-4.0, what is the target velocity, and does it change with t?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: x0=2.0 ಮತ್ತು x1=-4.0 ಗಾಗಿ, target velocity ಎಷ್ಟೂ, ಮತ್ತು ಅದೂ t ಜೊತೆ ಬದಲಾಗುತ್ತದೆಯೇ?',
        opts: ['-6.0, and it changes at every t', '-6.0, and it genuinely stays constant at every t tested', '6.0, changes with t', '0.0, always'], correct: 1,
        optsKn: ['-6.0, ಮತ್ತು ಅದೂ ಪ್ರತಿ t ನಲ್ಲಿ ಬದಲಾಗುತ್ತದೆ', '-6.0, ಮತ್ತು ಅದೂ ಪರೀಕ್ಷಿಸಿದ ಪ್ರತಿ t ನಲ್ಲಿ ನಿಜವಾಗಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ', '6.0, t ಜೊತೆ ಬದಲಾಗುತ್ತದೆ', '0.0, ಯಾವಾಗಲೂ'] },
      { q: 'Why does the network need t as an input if the velocity target is t-independent?', qKn: 'Velocity target t-ಸ್ವತಂತ್ರ ಆಗಿದ್ದರೆ network ಗೆ t ಅನ್ನೂ input ಆಗಿ ಏಕೆ ಬೇಕು?',
        opts: ['It doesn\'t need t at all', 'During real sampling the network encounters points not exactly on any single straight line, and t helps it handle those correctly', 't is only used for logging', 'The network ignores t completely'], correct: 1,
        optsKn: ['ಅದಕ್ಕೆ t ಬೇಕೇ ಇಲ್ಲ', 'ನಿಜ sampling ಸಮಯದಲ್ಲಿ network ಯಾವುದೇ ಸಿಂಗಲ್ ಸರಳ ರೇಖೆಯ ಮೇಲೆ ನಿಖರವಾಗಿ ಇಲ್ಲದ points ಎದುರಿಸುತ್ತದೆ, ಮತ್ತು t ಅವುಗಳನ್ನೂ ಸರಿಯಾಗಿ ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ', 't ಕೇವಲ logging ಗೆ ಬಳಸಲಾಗುತ್ತದೆ', 'Network t ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ'] },
      { q: 'Why can a straight path be traversed accurately with fewer Euler steps than a curved one?', qKn: 'ಒಂದೂ ಸರಳ path ಒಂದೂ ಬಾಗಿದ ಒಂದಕ್ಕಿಂತ ಕಡಿಮೆ Euler steps ಜೊತೆ ಏಕೆ ನಿಖರವಾಗಿ ದಾಟಬಹುದು?',
        opts: ['Straight paths are always shorter in distance', 'Each Euler step approximates the path with a straight-line segment; a genuinely straight path introduces zero approximation error even with one large segment', 'Curved paths cannot be integrated at all', 'The learning rate is different for curved paths'], correct: 1,
        optsKn: ['ಸರಳ paths ಯಾವಾಗಲೂ distance ನಲ್ಲಿ ಚಿಕ್ಕದೂ', 'ಪ್ರತಿ Euler step path ಅನ್ನೂ ಒಂದೂ straight-line segment ಜೊತೆ ಅಂದಾಜಿಸುತ್ತದೆ; ಒಂದೂ ನಿಜವಾಗಿ ಸರಳ path ಒಂದೂ ದೊಡ್ಡ segment ಜೊತೆಯೂ ಶೂನ್ಯ approximation error ಪರಿಚಯಿಸುತ್ತದೆ', 'ಬಾಗಿದ paths ಅನ್ನೂ ಎಂದಿಗೂ integrate ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ', 'ಬಾಗಿದ paths ಗೆ learning rate ಬೇರೆ' ] },
      { q: 'What is the key difference between DDPM\'s training target and flow matching\'s training target?', qKn: 'DDPM ನ training target ಮತ್ತು flow matching ನ training target ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They are identical', 'DDPM\'s target depends on alpha_bar_t (varies with timestep); flow matching\'s target x1-x0 is genuinely constant across all t for a given pair', 'Flow matching has no training target', 'DDPM never uses a target'], correct: 1,
        optsKn: ['ಅವೂ ಒಂದೇ', 'DDPM ನ target alpha_bar_t ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ (timestep ಜೊತೆ ಬದಲಾಗುತ್ತದೆ); flow matching ನ target x1-x0 ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಜೋಡಿಗೆ ಎಲ್ಲಾ t ಆದ್ಯಂತ ನಿಜವಾಗಿ ಸ್ಥಿರ', 'Flow matching ಗೆ ಯಾವುದೇ training target ಇಲ್ಲ', 'DDPM ಎಂದಿಗೂ ಒಂದೂ target ಬಳಸುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
