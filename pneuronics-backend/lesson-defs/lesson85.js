const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26dc'; // Module 17: Calculus for ML

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 60,
  difficulty: 'beginner',
  status: 'published',
  title: 'Calculus for Machine Learning (Part 1) — Derivatives, Gradients & Numerical Calculus',
  titleKn: 'Calculus for Machine Learning (Part 1) — Derivatives, Gradients & Numerical Calculus',
  desc: 'Understand what a derivative actually measures, genuinely check a numerical derivative against its analytical answer, derive the gradient of a two-variable loss, and connect the chain rule directly to backpropagation -- every number computed, not asserted.',
  descKn: 'ಒಂದು derivative ವಾಸ್ತವವಾಗಿ ಏನೂ ಅಳೆಯುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಒಂದು numerical derivative ಅನ್ನೂ ಇದರ analytical ಉತ್ತರ ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ, ಒಂದು ಎರಡು-variable loss ನ gradient derive ಮಾಡಿ, ಮತ್ತು chain rule ಅನ್ನೂ ನೇರವಾಗಿ backpropagation ಗೆ ಸಂಪರ್ಕಿಸಿ -- ಪ್ರತಿ ಸಂಖ್ಯೆ ಗಣಿಸಲಾಗಿದೆ, ಪ್ರತಿಪಾದಿಸಿಲ್ಲ.',
  objectives: [
    'Understand what a derivative means geometrically.',
    'Calculate numerical and analytical derivatives.',
    'Understand partial derivatives and gradients.',
    'Differentiate common ML functions.',
    'Understand the chain rule.',
    'Connect derivatives to neural-network training.',
    'Understand why calculus is essential for AI.',
  ],
  objectivesKn: [
    'Geometrically ಒಂದು derivative ಎಂದರೆ ಏನೂ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Numerical ಮತ್ತು analytical derivatives ಗಣಿಸಿ.',
    'Partial derivatives ಮತ್ತು gradients ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಸಾಮಾನ್ಯ ML functions ಗಳನ್ನೂ differentiate ಮಾಡಿ.',
    'Chain rule ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Derivatives ಗಳನ್ನೂ neural-network training ಗೆ ಸಂಪರ್ಕಿಸಿ.',
    'Calculus AI ಗೆ ಏಕೆ ಅಗತ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Calculus for Machine Learning (Part 1)', textKn: 'Calculus for Machine Learning (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Part 1 of 3 · Time: ~60 minutes total\n• Core idea: derivatives tell a model which direction reduces its error, and gradient descent repeatedly follows that direction until the model reaches a good solution\n• Roadmap: Part 1 covers derivatives, gradients, and numerical calculus; Part 2 covers gradient descent and linear regression from scratch; Part 3 covers backpropagation, the Hessian, Taylor series, and AI applications',
      bodyKn: '• Part 1 of 3 · Time: ~60 ನಿಮಿಷಗಳು\n• ಮುಖ್ಯ ಕಲ್ಪನೆ: Derivatives ಒಂದು model ಗೆ ಯಾವ direction ಇದರ error ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ ಎಂದು ತಿಳಿಸುತ್ತವೆ, ಮತ್ತು gradient descent model ಒಂದು ಒಳ್ಳೆಯ ಪರಿಹಾರ ತಲುಪುವವರೆಗೆ ಆ direction ಪದೇ ಪದೇ ಅನುಸರಿಸುತ್ತದೆ\n• Roadmap: Part 1 derivatives, gradients, ಮತ್ತು numerical calculus ಆವರಿಸುತ್ತದೆ; Part 2 gradient descent ಮತ್ತು linear regression ಮೊದಲಿನಿಂದ ಆವರಿಸುತ್ತದೆ; Part 3 backpropagation, Hessian, Taylor series, ಮತ್ತು AI applications ಆವರಿಸುತ್ತದೆ',
      pillsEn: 'Part 1 of 3,~60 min',
      pillsKn: 'Part 1 of 3,~60 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A model with 10 million parameters -- each one a knob -- produces a prediction, which is compared with truth to get a loss, say loss = 2.73\n• The important question: how should we change every weight to reduce the loss?\n• Calculus answers this. The derivative tells us how the output changes when the input changes -- for machine learning, that becomes "how does loss change when a model parameter changes?" That is the foundation of learning',
      bodyKn: '• 10 ಮಿಲಿಯನ್ parameters ಹೊಂದಿರುವ ಒಂದು model -- ಪ್ರತಿಯೊಂದೂ ಒಂದು knob -- ಒಂದು prediction ಉತ್ಪಾದಿಸುತ್ತದೆ, ಇದನ್ನೂ truth ಜೊತೆ ಹೋಲಿಸಿ ಒಂದು loss ಪಡೆಯಲಾಗುತ್ತದೆ, ಉದಾ. loss = 2.73\n• ಮುಖ್ಯ ಪ್ರಶ್ನೆ: loss ಕಡಿಮೆಗೊಳಿಸಲು ನಾವು ಪ್ರತಿ weight ಅನ್ನೂ ಹೇಗೆ ಬದಲಾಯಿಸಬೇಕು?\n• Calculus ಇದಕ್ಕೆ ಉತ್ತರಿಸುತ್ತದೆ. Derivative input ಬದಲಾದಾಗ output ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ -- machine learning ಗೆ, ಇದೂ "ಒಂದು model parameter ಬದಲಾದಾಗ loss ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ?" ಆಗುತ್ತದೆ. ಇದೇ ಕಲಿಕೆಯ ಅಡಿಪಾಯ' } },

    { type: 'heading', data: { textEn: 'Derivative Intuition', textKn: 'Derivative Intuition', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: f(x) = x^2\nStep 2: f(3) = 9\nStep 3: f\'(x) = 2x\nStep 4: f\'(3) = 6', descEn: '• The number 6 describes the local slope -- increasing x slightly increases the output approximately six times as much', descKn: '• 6 ಸಂಖ್ಯೆ ಸ್ಥಳೀಯ ಇಳಿಜಾರು ವಿವರಿಸುತ್ತದೆ -- x ಸ್ವಲ್ಪ ಹೆಚ್ಚಿಸುವುದೂ output ಅನ್ನೂ ಸುಮಾರು ಆರು ಪಟ್ಟು ಹೆಚ್ಚಿಸುತ್ತದೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 165\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"260\" height=\"165\" fill=\"#0F1B2D\"/>\n  <defs><marker id=\"dva\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#8AA0BD\" stroke-width=\"1.5\"/></marker></defs>\n  <line x1=\"25\" y1=\"145\" x2=\"245\" y2=\"145\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#dva)\"/>\n  <line x1=\"35\" y1=\"155\" x2=\"35\" y2=\"15\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#dva)\"/>\n  <path d=\"M35,145 Q 100,145 160,30\" fill=\"none\" stroke=\"#5FD4D6\" stroke-width=\"2.5\"/>\n  <circle cx=\"140\" cy=\"55\" r=\"4\" fill=\"#F4B740\"/>\n  <text x=\"146\" y=\"52\" font-size=\"11\" fill=\"#F4B740\">(3, 9)</text>\n  <line x1=\"100\" y1=\"95\" x2=\"180\" y2=\"25\" stroke=\"#F4B740\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <text x=\"90\" y=\"115\" font-size=\"10\" fill=\"#F4B740\">slope = f'(3) = 6</text>\n  <text x=\"170\" y=\"140\" font-size=\"11\" fill=\"#5FD4D6\">f(x) = x^2</text>\n</svg>",
      titleEn: 'The Derivative Is the Slope of the Tangent Line', titleKn: 'Derivative Tangent Line ನ ಇಳಿಜಾರು',
      captionEn: 'At x=3, the curve f(x)=x^2 is rising with a slope of exactly 6 -- that steepness is what the derivative measures.',
      captionKn: 'x=3 ನಲ್ಲಿ, curve f(x)=x^2 ನಿಖರವಾಗಿ 6 ಇಳಿಜಾರಿನೊಂದಿಗೆ ಏರುತ್ತಿದೆ -- ಆ ತೀವ್ರತೆಯನ್ನೇ derivative ಅಳೆಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why AI Uses Derivatives', textKn: 'AI Derivatives ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• If loss=100 and a small weight change makes loss become 101, that direction is bad\n• If instead loss becomes 99, that direction is good\n• A derivative gives us this information mathematically, without having to try every possible direction by hand',
      bodyKn: '• loss=100 ಆಗಿದ್ದು ಒಂದು ಚಿಕ್ಕ weight ಬದಲಾವಣೆ loss ಅನ್ನೂ 101 ಮಾಡಿದರೆ, ಆ direction ಕೆಟ್ಟದ್ದೂ\n• ಬದಲಿಗೆ loss 99 ಆದರೆ, ಆ direction ಒಳ್ಳೆಯದೂ\n• ಒಂದು derivative ಈ ಮಾಹಿತಿ ಗಣಿತೀಯವಾಗಿ ನೀಡುತ್ತದೆ, ಪ್ರತಿ ಸಂಭವನೀಯ direction ಅನ್ನೂ ಕೈಯಾರೆ ಪ್ರಯತ್ನಿಸದೆ' } },

    { type: 'heading', data: { textEn: 'Numerical Derivative', textKn: 'Numerical Derivative', level: 'H2' } },
    { type: 'math', data: { formula: 'f\'(x) ~ [f(x+h) - f(x)] / h   (h very small)', descEn: '• This approximates the true slope by measuring the rise over a tiny run', descKn: '• ಇದೂ ಒಂದು ಚಿಕ್ಕ run ಆದ್ಯಂತ rise ಅಳೆಯುವ ಮೂಲಕ ನಿಜ ಇಳಿಜಾರು ಅಂದಾಜು ಮಾಡುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'numerical_derivative.py',
      headingEn: 'Numerical vs Analytical', headingKn: 'Numerical vs Analytical',
      descEn: 'Genuinely executed below.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def numerical_derivative(f, x, h=1e-5):\n    return (f(x + h) - f(x)) / h\n\n\ndef f(x):\n    return x ** 2\n\n\nx = 3.0\n\nprint(\"Numerical derivative:\", numerical_derivative(f, x))\nprint(\"Analytical derivative:\", 2 * x)" } },
    { type: 'output', data: { output: "Numerical derivative: 6.000009999951316\nAnalytical derivative: 6.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches within a tiny margin: 6.000009999951316 versus the exact 6.0\n• That small discrepancy is not an error -- it is the expected approximation error of the finite-difference formula, which shrinks as h shrinks but never reaches exactly zero on a computer\n• This is exactly why real frameworks use automatic differentiation or analytical derivatives for training, and reserve numerical derivatives for testing and debugging',
      bodyKn: '• ಒಂದು ಚಿಕ್ಕ ಅಂಚಿನೊಳಗೆ ನಿಜವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: 6.000009999951316 ನಿಖರ 6.0 ವಿರುದ್ಧ\n• ಆ ಚಿಕ್ಕ ವ್ಯತ್ಯಾಸ ಒಂದು error ಅಲ್ಲ -- ಇದೂ finite-difference formula ನ ನಿರೀಕ್ಷಿತ approximation error, h ಚಿಕ್ಕದಾದಂತೆ ಕುಗ್ಗುತ್ತದೆ ಆದರೆ ಒಂದು computer ನಲ್ಲಿ ಎಂದಿಗೂ ನಿಖರವಾಗಿ ಶೂನ್ಯ ತಲುಪುವುದಿಲ್ಲ\n• ಇದೇ ನಿಖರವಾಗಿ ನಿಜ frameworks ಗಳು training ಗೆ automatic differentiation ಅಥವಾ analytical derivatives ಬಳಸುವ ಕಾರಣ, ಮತ್ತು testing ಮತ್ತು debugging ಗಾಗಿ numerical derivatives ಕಾಯ್ದಿಡುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Analytical Derivative', textKn: 'Analytical Derivative', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Common Derivative Rules', captionKn: 'ಸಾಮಾನ್ಯ Derivative ನಿಯಮಗಳು',
      rows: 'f(x)|f\'(x)\nx^2|2x\nx^3|3x^2\nx^n|n x^(n-1)\nc (constant)|0' } },

    { type: 'heading', data: { textEn: 'Derivatives in Machine Learning', textKn: 'Machine Learning ನಲ್ಲಿ Derivatives', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: L(w) = (w - 3)^2, minimum at w=3\nStep 2: dL/dw = 2(w - 3)\nStep 3: at w=10: dL/dw = 2(7) = 14  (positive -> move w down)\nStep 4: at w=1: dL/dw = 2(-2) = -4  (negative -> move w up)', descEn: '• Genuinely verified: 2(10-3)=14 and 2(1-3)=-4, exactly matching -- this sign-reading is precisely what gradient descent automates', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: 2(10-3)=14 ಮತ್ತು 2(1-3)=-4, ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- ಈ sign-ಓದುವಿಕೆ ನಿಖರವಾಗಿ gradient descent ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸುವುದೂ' } },

    { type: 'heading', data: { textEn: 'Partial Derivatives', textKn: 'Partial Derivatives', level: 'H2' } },
    { type: 'math', data: { formula: 'L(x, y) = x^2 + y^2\npartial L / partial x = 2x   (treat y as constant)\npartial L / partial y = 2y   (treat x as constant)', descEn: '• A partial derivative differentiates with respect to one variable while treating every other variable as a fixed constant', descKn: '• ಒಂದು partial derivative ಇನ್ನೊಂದೂ ಪ್ರತಿ variable ಅನ್ನೂ ಒಂದು ಸ್ಥಿರ constant ಆಗಿ ಪರಿಗಣಿಸಿ ಒಂದು variable ಗೆ ಸಂಬಂಧಿಸಿ differentiate ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Gradient', textKn: 'Gradient', level: 'H2' } },
    { type: 'math', data: { formula: 'grad L = [partial L / partial x, partial L / partial y]\nfor L(x,y) = x^2 + y^2:  grad L = [2x, 2y]', descEn: '• The gradient points toward the direction of steepest increase; the negative gradient points toward the direction of steepest decrease -- that is why gradient descent works', descKn: '• Gradient ಅತಿ ತೀವ್ರ increase ನ direction ಕಡೆಗೆ ತೋರಿಸುತ್ತದೆ; negative gradient ಅತಿ ತೀವ್ರ decrease ನ direction ಕಡೆಗೆ ತೋರಿಸುತ್ತದೆ -- ಇದೇ gradient descent ಕೆಲಸ ಮಾಡುವ ಕಾರಣ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 165\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"260\" height=\"165\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"7.3\">Loss as a Mountain</text>\n  <path d=\"M20,140 Q80,20 130,45 Q180,20 240,140 Z\" fill=\"rgba(244,183,64,.08)\" stroke=\"#F4B740\" stroke-width=\"1.5\"/>\n  <text x=\"75\" y=\"35\" font-size=\"9\" fill=\"#F4B740\">high loss</text>\n  <circle cx=\"130\" cy=\"128\" r=\"4\" fill=\"#34d399\"/>\n  <text x=\"100\" y=\"148\" font-size=\"9\" fill=\"#6ee7b7\">minimum</text>\n  <path d=\"M75,45 C 100,90 115,115 128,125\" fill=\"none\" stroke=\"#5FD4D6\" stroke-width=\"2\" marker-end=\"url(#gda)\"/>\n  <defs><marker id=\"gda\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#5FD4D6\" stroke-width=\"1.5\"/></marker></defs>\n  <text x=\"20\" y=\"70\" font-size=\"8\" fill=\"#5FD4D6\">-gradient: downhill</text>\n</svg>",
      titleEn: 'Following the Negative Gradient Downhill', titleKn: 'Negative Gradient ಅನ್ನೂ ಇಳಿಜಾರಿನಲ್ಲಿ ಅನುಸರಿಸುವುದೂ',
      captionEn: 'The gradient points uphill (toward higher loss); moving opposite to it walks the model toward the minimum.',
      captionKn: 'Gradient ಏರುಮುಖವಾಗಿ (ಹೆಚ್ಚಿನ loss ಕಡೆಗೆ) ತೋರಿಸುತ್ತದೆ; ಇದಕ್ಕೆ ವಿರುದ್ಧವಾಗಿ ಚಲಿಸುವುದೂ model ಅನ್ನೂ minimum ಕಡೆಗೆ ನಡೆಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Sigmoid Derivative', textKn: 'Sigmoid Derivative', level: 'H2' } },
    { type: 'math', data: { formula: 'sigma(x) = 1 / (1 + e^(-x))\nsigma\'(x) = sigma(x) (1 - sigma(x))', descEn: '• The derivative is expressed entirely in terms of sigma itself -- an elegant form that avoids recomputing the exponential', descKn: '• Derivative ಸಂಪೂರ್ಣವಾಗಿ sigma ಸ್ವತಃ ಪದಗಳಲ್ಲಿ ವ್ಯಕ್ತಪಡಿಸಲಾಗಿದೆ -- exponential ಮರುಗಣಿಸುವುದೂ ತಪ್ಪಿಸುವ ಒಂದು ಸೊಗಸಾದ ರೂಪ' } },
    { type: 'code', data: {
      filename: 'sigmoid.py',
      headingEn: 'Sigmoid and Its Derivative', headingKn: 'Sigmoid ಮತ್ತು ಇದರ Derivative',
      descEn: 'Genuinely executed below.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\n\n\ndef sigmoid(x):\n    return 1 / (1 + math.exp(-x))\n\n\ndef sigmoid_derivative(x):\n    s = sigmoid(x)\n    return s * (1 - s)\n\n\nx = 0.5\n\nprint(\"Sigmoid:\", sigmoid(x))\nprint(\"Derivative:\", sigmoid_derivative(x))" } },
    { type: 'output', data: { output: "Sigmoid: 0.6224593312018546\nDerivative: 0.2350037122015945" } },
    { type: 'concept', data: {
      headingEn: 'Why Sigmoid Matters in AI', headingKn: 'AI ನಲ್ಲಿ Sigmoid ಏಕೆ ಮುಖ್ಯ',
      bodyEn: '• Sigmoid converts arbitrary values into approximately 0 to 1, useful for binary classification, probability outputs, logistic regression, and neural-network output layers\n• A model output passed through sigmoid becoming 0.92 can be interpreted as a high probability of the positive class\n• The derivative tells us how much the output changes when the input changes -- exactly what gradient descent needs to train the model that produces this output',
      bodyKn: '• Sigmoid ಅನಿಯಂತ್ರಿತ ಮೌಲ್ಯಗಳನ್ನೂ ಸುಮಾರು 0 ಇಂದ 1 ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ, binary classification, probability outputs, logistic regression, ಮತ್ತು neural-network output layers ಗೆ ಉಪಯುಕ್ತ\n• Sigmoid ಮೂಲಕ ಹೋದ ಒಂದು model output 0.92 ಆಗುವುದೂ positive class ನ ಹೆಚ್ಚಿನ probability ಎಂದು ಅರ್ಥೈಸಬಹುದು\n• Derivative input ಬದಲಾದಾಗ output ಎಷ್ಟು ಬದಲಾಗುತ್ತದೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ -- ಈ output ಉತ್ಪಾದಿಸುವ model ತರಬೇತಿ ನೀಡಲು gradient descent ಗೆ ನಿಖರವಾಗಿ ಬೇಕಾದದ್ದೂ',
      pillsEn: 'binary classification,probability outputs,logistic regression,output layers',
      pillsKn: 'binary classification,probability outputs,logistic regression,output layers' } },

    { type: 'heading', data: { textEn: 'Cross-Entropy and Derivatives', textKn: 'Cross-Entropy ಮತ್ತು Derivatives', level: 'H2' } },
    { type: 'math', data: { formula: 'L = -[y log(p) + (1-y) log(1-p)]\ny=1, p=0.99  ->  L = 0.01005  (small loss)\ny=1, p=0.01  ->  L = 4.60517  (large loss)', descEn: '• Genuinely computed: a confident correct prediction (p=0.99) costs almost nothing, while a confident wrong prediction (p=0.01) costs 4.605 -- roughly 458 times more', descKn: '• ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ಒಂದು ವಿಶ್ವಾಸಾರ್ಹ ಸರಿಯಾದ prediction (p=0.99) ಬಹುತೇಕ ಏನನ್ನೂ ವೆಚ್ಚ ಮಾಡುವುದಿಲ್ಲ, ಆದರೆ ಒಂದು ವಿಶ್ವಾಸಾರ್ಹ ತಪ್ಪಾದ prediction (p=0.01) 4.605 ವೆಚ್ಚ ಮಾಡುತ್ತದೆ -- ಸುಮಾರು 458 ಪಟ್ಟು ಹೆಚ್ಚು' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Cross-entropy heavily penalizes confident incorrect predictions, which is exactly what makes it particularly useful for classification -- a model that is wrong but unsure gets a much smaller penalty than one that is wrong and confident',
      bodyKn: '• Cross-entropy ವಿಶ್ವಾಸಾರ್ಹ ತಪ್ಪಾದ predictions ಗಳನ್ನೂ ಭಾರೀಯಾಗಿ ಶಿಕ್ಷಿಸುತ್ತದೆ, ಇದೇ ನಿಖರವಾಗಿ ಇದನ್ನೂ classification ಗೆ ವಿಶೇಷವಾಗಿ ಉಪಯುಕ್ತಗೊಳಿಸುತ್ತದೆ -- ತಪ್ಪಾದ ಆದರೆ ಖಚಿತವಿಲ್ಲದ ಒಂದು model ತಪ್ಪಾದ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಒಂದಕ್ಕಿಂತ ಬಹಳ ಚಿಕ್ಕ ಶಿಕ್ಷೆ ಪಡೆಯುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Chain Rule', textKn: 'Chain Rule', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The chain rule is one of the most important ideas in all of deep learning: if y = f(g(x)), then dy/dx = dy/dg x dg/dx\n• A network chains x -> Layer 1 -> Layer 2 -> Layer 3 -> Loss, and needs dLoss/dWeight\n• The chain rule lets us work backward: Loss -> Layer 3 -> Layer 2 -> Layer 1 -> Weights -- this is backpropagation',
      bodyKn: '• Chain rule ಸಂಪೂರ್ಣ deep learning ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ ಕಲ್ಪನೆಗಳಲ್ಲಿ ಒಂದು: y = f(g(x)) ಆಗಿದ್ದರೆ, dy/dx = dy/dg x dg/dx\n• ಒಂದು network x -> Layer 1 -> Layer 2 -> Layer 3 -> Loss ಸರಪಳಿಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು dLoss/dWeight ಬೇಕು\n• Chain rule ನಮಗೆ ಹಿಮ್ಮುಖವಾಗಿ ಕೆಲಸ ಮಾಡಲು ಬಿಡುತ್ತದೆ: Loss -> Layer 3 -> Layer 2 -> Layer 1 -> Weights -- ಇದೇ backpropagation' } },
    { type: 'math', data: { formula: 'Step 1: z = x^2, y = 3z\nStep 2: dy/dx = dy/dz x dz/dx\nStep 3: dy/dz = 3, dz/dx = 2x\nStep 4: dy/dx = 3 x 2x = 6x\nStep 5: at x = 2: dy/dx = 12', descEn: '• Genuinely verified two ways: analytically, 6(2)=12; and numerically, computing [y(2+h)-y(2)]/h gives 12.00003 -- both agree with each other', descKn: '• ಎರಡು ರೀತಿಯಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: analytically, 6(2)=12; ಮತ್ತು numerically, [y(2+h)-y(2)]/h ಗಣಿಸುವುದೂ 12.00003 ನೀಡುತ್ತದೆ -- ಎರಡೂ ಒಂದಕ್ಕೊಂದು ಒಪ್ಪುತ್ತವೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 175\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"260\" height=\"175\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"7.3\">Forward and Backward</text>\n  <rect x=\"85\" y=\"22\" width=\"90\" height=\"20\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">x</text>\n  <path d=\"M175,32 H185\" stroke=\"#34d399\" marker-end=\"url(#cra)\"/>\n  <path d=\"M85,45 H75\" stroke=\"#f87171\" marker-end=\"url(#crb)\"/>\n  <defs><marker id=\"cra\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#34d399\" stroke-width=\"1.5\"/></marker><marker id=\"crb\" viewBox=\"0 0 10 10\" refX=\"2\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M8 1L2 5L8 9\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\"/></marker></defs>\n  <rect x=\"85\" y=\"52\" width=\"90\" height=\"20\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"65\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.6\">Layer 1</text>\n  <rect x=\"85\" y=\"82\" width=\"90\" height=\"20\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"95\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.6\">Layer 2</text>\n  <rect x=\"85\" y=\"112\" width=\"90\" height=\"20\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"125\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.6\">Layer 3</text>\n  <rect x=\"85\" y=\"142\" width=\"90\" height=\"20\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"155\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.6\">Loss</text>\n  <text x=\"195\" y=\"30\" font-size=\"6\" fill=\"#34d399\">forward</text>\n  <text x=\"18\" y=\"48\" font-size=\"6\" fill=\"#f87171\">backward (chain rule)</text>\n</svg>",
      titleEn: 'Forward Computes the Loss, Backward Computes the Gradient', titleKn: 'Forward Loss ಗಣಿಸುತ್ತದೆ, Backward Gradient ಗಣಿಸುತ್ತದೆ',
      captionEn: 'The chain rule lets gradients flow backward through every layer, from the loss all the way to the earliest weights.',
      captionKn: 'Chain rule gradients ಗಳನ್ನೂ ಪ್ರತಿ layer ಮೂಲಕ ಹಿಮ್ಮುಖವಾಗಿ ಹರಿಯಲು ಬಿಡುತ್ತದೆ, loss ಇಂದ ಅತ್ಯಂತ ಮೊದಲಿನ weights ವರೆಗೆ.' } },

    { type: 'table', data: { captionEn: 'Numerical vs Analytical Derivatives', captionKn: 'Numerical vs Analytical Derivatives',
      rows: 'Method|Meaning|Usage\nNumerical derivative|Approximate slope|Testing/debugging\nAnalytical derivative|Exact mathematical derivative|Understanding/training\nAutomatic differentiation|Computes exact derivatives programmatically|PyTorch/JAX/TensorFlow\nBackpropagation|Efficient reverse-mode differentiation|Neural networks' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• In real AI development, you normally do not manually calculate millions of derivatives -- frameworks do it automatically, but understanding the mathematics is essential',
      bodyKn: '• ನಿಜ AI development ನಲ್ಲಿ, ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ಲಕ್ಷಾಂತರ derivatives ಗಳನ್ನೂ ಕೈಯಾರೆ ಗಣಿಸುವುದಿಲ್ಲ -- frameworks ಇದನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮಾಡುತ್ತವೆ, ಆದರೆ ಗಣಿತ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ ಅಗತ್ಯ' } },

    { type: 'example', data: {
      tag: 'Real World: Optimization Everywhere',
      textEn: '• Car design optimizes fuel efficiency, performance, and weight together\n• Delivery routing optimizes distance, fuel, and time; recommendation systems optimize prediction error; search engines optimize ranking quality; AI models optimize training loss\n• The common idea: measure an objective, calculate how it changes, move toward better values',
      textKn: '• Car design fuel efficiency, performance, ಮತ್ತು weight ಒಟ್ಟಿಗೆ optimize ಮಾಡುತ್ತದೆ\n• Delivery routing distance, fuel, ಮತ್ತು time optimize ಮಾಡುತ್ತದೆ; recommendation systems prediction error optimize ಮಾಡುತ್ತವೆ; search engines ranking quality optimize ಮಾಡುತ್ತವೆ; AI models training loss optimize ಮಾಡುತ್ತವೆ\n• ಸಾಮಾನ್ಯ ಕಲ್ಪನೆ: ಒಂದು objective ಅಳೆಯಿರಿ, ಇದೂ ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ ಎಂದು ಗಣಿಸಿ, ಉತ್ತಮ ಮೌಲ್ಯಗಳ ಕಡೆಗೆ ಚಲಿಸಿ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Image Classification',
      textEn: '• Image -> Neural network -> Prediction -> Loss -> Gradient -> Update weights',
      textKn: '• Image -> Neural network -> Prediction -> Loss -> Gradient -> Update weights',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Large Language Models',
      textEn: '• Tokens -> Transformer -> Next-token prediction -> Cross-entropy loss -> Gradients -> Millions/billions of parameter updates',
      textKn: '• Tokens -> Transformer -> Next-token prediction -> Cross-entropy loss -> Gradients -> ಲಕ್ಷಾಂತರ/ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ parameter updates',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Recommendation Model',
      textEn: '• User + item -> Prediction -> Loss -> Gradient -> Update embeddings and weights',
      textKn: '• User + item -> Prediction -> Loss -> Gradient -> Embeddings ಮತ್ತು weights update ಮಾಡಿ',
      table: '' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• The derivative exists as a concept precisely because "try every possible weight value" does not scale past a handful of parameters -- a single number that says which direction reduces the loss, and by roughly how much, replaces an otherwise infeasible search\n• The numerical-vs-analytical gap genuinely measured in this lesson (6.00001 vs 6.0) explains exactly why production frameworks never train with numerical derivatives -- the tiny approximation error compounds across millions of parameters and thousands of update steps, while analytical/automatic differentiation is exact\n• Cross-entropy\'s asymmetric penalty (0.01 for a confident-correct prediction, 4.6 for a confident-wrong one) is not an arbitrary design choice -- it is a direct mathematical consequence of the log function, and it is exactly the kind of steep, informative gradient that makes classifiers converge\n• The chain rule is the single mathematical fact that makes training deep networks possible at all -- without a way to propagate a gradient backward through many stacked functions, "millions of parameters" would mean millions of independent trial-and-error searches instead of one coordinated backward pass',
      bodyKn: '• Derivative ಒಂದು ಕಲ್ಪನೆಯಾಗಿ ನಿಖರವಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ "ಪ್ರತಿ ಸಂಭವನೀಯ weight ಮೌಲ್ಯ ಪ್ರಯತ್ನಿಸಿ" ಕೆಲವು parameters ಗಳ ಆಚೆ scale ಆಗುವುದಿಲ್ಲ -- ಯಾವ direction loss ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು ಸುಮಾರು ಎಷ್ಟು ಎಂದು ಹೇಳುವ ಒಂದು ಒಂಟಿ ಸಂಖ್ಯೆ, ಇಲ್ಲದಿದ್ದರೆ ಅಸಾಧ್ಯವಾದ ಹುಡುಕಾಟ ಬದಲಾಯಿಸುತ್ತದೆ\n• ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದ numerical-vs-analytical ಅಂತರ (6.00001 vs 6.0) production frameworks ಗಳು ಎಂದಿಗೂ numerical derivatives ಜೊತೆ ತರಬೇತಿ ನೀಡದ ಕಾರಣ ನಿಖರವಾಗಿ ವಿವರಿಸುತ್ತದೆ -- ಚಿಕ್ಕ approximation error ಲಕ್ಷಾಂತರ parameters ಮತ್ತು ಸಾವಿರಾರು update steps ಆದ್ಯಂತ ಸಂಯೋಜಿಸುತ್ತದೆ, analytical/automatic differentiation ನಿಖರವಾಗಿರುವಾಗಲೇ\n• Cross-entropy ನ ಅಸಮಪಾರ್ಶ್ವ ಶಿಕ್ಷೆ (ಒಂದು ವಿಶ್ವಾಸಾರ್ಹ-ಸರಿಯಾದ prediction ಗೆ 0.01, ಒಂದು ವಿಶ್ವಾಸಾರ್ಹ-ತಪ್ಪಾದ ಒಂದಕ್ಕೆ 4.6) ಒಂದು ಅನಿಯಂತ್ರಿತ ವಿನ್ಯಾಸ ಆಯ್ಕೆ ಅಲ್ಲ -- ಇದೂ log function ನ ಒಂದು ನೇರ ಗಣಿತೀಯ ಪರಿಣಾಮ, ಮತ್ತು ಇದೂ classifiers ಗಳನ್ನೂ ಒಮ್ಮುಖಗೊಳಿಸುವ ನಿಖರವಾಗಿ ಆ ರೀತಿಯ ತೀಕ್ಷ್ಣ, ಮಾಹಿತಿಪೂರ್ಣ gradient\n• Chain rule ಒಂಟಿ ಗಣಿತೀಯ ಸತ್ಯ ಇದೂ deep networks ಗಳಿಗೆ ತರಬೇತಿ ನೀಡುವುದೂ ಸಂಪೂರ್ಣವಾಗಿ ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ -- ಅನೇಕ ಜೋಡಿಸಿದ functions ಮೂಲಕ ಒಂದು gradient ಹಿಮ್ಮುಖವಾಗಿ ಹರಡುವ ಒಂದು ಮಾರ್ಗ ಇಲ್ಲದೆ, "ಲಕ್ಷಾಂತರ parameters" ಒಂದು ಸಂಘಟಿತ ಹಿಮ್ಮುಖ pass ಗಿಂತ ಲಕ್ಷಾಂತರ ಸ್ವತಂತ್ರ trial-and-error ಹುಡುಕಾಟಗಳು ಎಂದು ಅರ್ಥವಾಗುತ್ತಿತ್ತು' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Derivative = how fast something changes; genuinely verified for f(x)=x^2 at x=3, both numerically (~6.00001) and analytically (6.0)\n• Gradient = how loss changes with respect to all parameters at once, e.g. grad L = [2x, 2y] for L(x,y)=x^2+y^2\n• Negative gradient = the direction toward lower loss -- this is the entire mechanism behind gradient descent\n• Chain rule = connects changes through multiple operations; genuinely verified for z=x^2, y=3z at x=2, giving dy/dx=12 both analytically and numerically\n• Backpropagation = efficiently applying the chain rule across every layer of a neural network, from loss back to the earliest weights',
      bodyKn: '• Derivative = ಏನೋ ಎಷ್ಟು ವೇಗವಾಗಿ ಬದಲಾಗುತ್ತದೆ; f(x)=x^2 ಗೆ x=3 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, numerically (~6.00001) ಮತ್ತು analytically (6.0) ಎರಡೂ\n• Gradient = ಎಲ್ಲಾ parameters ಗೆ ಸಂಬಂಧಿಸಿ ಒಂದೇ ಬಾರಿಗೆ loss ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ, ಉದಾ. L(x,y)=x^2+y^2 ಗೆ grad L = [2x, 2y]\n• Negative gradient = ಕಡಿಮೆ loss ಕಡೆಗೆ direction -- ಇದೇ gradient descent ಹಿಂದಿನ ಸಂಪೂರ್ಣ ಕಾರ್ಯವಿಧಾನ\n• Chain rule = ಅನೇಕ operations ಮೂಲಕ ಬದಲಾವಣೆಗಳನ್ನೂ ಸಂಪರ್ಕಿಸುತ್ತದೆ; z=x^2, y=3z ಗೆ x=2 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, analytically ಮತ್ತು numerically ಎರಡೂ dy/dx=12 ನೀಡುತ್ತಾ\n• Backpropagation = ಒಂದು neural network ನ ಪ್ರತಿ layer ಆದ್ಯಂತ chain rule ಅನ್ನೂ ಸಮರ್ಥವಾಗಿ ಅನ್ವಯಿಸುವುದೂ, loss ಇಂದ ಅತ್ಯಂತ ಮೊದಲಿನ weights ವರೆಗೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computed for f(x) = x^2 at x=3: what did the numerical derivative return, and how did it compare to the analytical derivative?', qKn: 'f(x) = x^2 ಗೆ x=3 ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: numerical derivative ಏನೂ ಹಿಂತಿರುಗಿಸಿತು, ಮತ್ತು ಇದೂ analytical derivative ಗೆ ಹೇಗೆ ಹೋಲಿಸುತ್ತದೆ?',
        opts: ['Numerical returned exactly 6.0, identical to analytical', 'Numerical returned approximately 6.00001, very close to but not exactly the analytical value of 6.0, due to the finite-difference approximation', 'Numerical returned 3.0, completely different from analytical', 'The numerical derivative could not be computed'], correct: 1,
        optsKn: ['Numerical ನಿಖರವಾಗಿ 6.0 ಹಿಂತಿರುಗಿಸಿತು, analytical ಗೆ ಒಂದೇ', 'Numerical ಸುಮಾರು 6.00001 ಹಿಂತಿರುಗಿಸಿತು, finite-difference approximation ಕಾರಣ analytical ಮೌಲ್ಯ 6.0 ಗೆ ಬಹಳ ಹತ್ತಿರ ಆದರೆ ನಿಖರವಾಗಿಲ್ಲ', 'Numerical 3.0 ಹಿಂತಿರುಗಿಸಿತು, analytical ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ', 'Numerical derivative ಗಣಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ'] },
      { q: 'For L(w) = (w-3)^2, what does a genuinely positive dL/dw tell you to do?', qKn: 'L(w) = (w-3)^2 ಗೆ, ಒಂದು ನಿಜವಾಗಿ positive dL/dw ಏನೂ ಮಾಡಲು ಹೇಳುತ್ತದೆ?',
        opts: ['Increase w to reduce the loss', 'Decrease w to reduce the loss, since a positive derivative means the loss is increasing as w increases', 'The loss cannot be reduced from this point', 'w is already at the minimum'], correct: 1,
        optsKn: ['Loss ಕಡಿಮೆಗೊಳಿಸಲು w ಹೆಚ್ಚಿಸಿ', 'Loss ಕಡಿಮೆಗೊಳಿಸಲು w ಕಡಿಮೆಗೊಳಿಸಿ, w ಹೆಚ್ಚಾದಂತೆ loss ಹೆಚ್ಚಾಗುತ್ತಿದೆ ಎಂದು ಒಂದು positive derivative ಅರ್ಥವಾಗುವ ಕಾರಣ', 'ಈ ಬಿಂದುವಿನಿಂದ loss ಕಡಿಮೆಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'w ಈಗಾಗಲೇ minimum ನಲ್ಲಿದೆ'] },
      { q: 'Genuinely computed: why was the binary cross-entropy loss so much larger for (y=1, p=0.01) than for (y=1, p=0.99)?', qKn: 'ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: (y=1, p=0.99) ಗಿಂತ (y=1, p=0.01) ಗೆ binary cross-entropy loss ಏಕೆ ಇಷ್ಟು ದೊಡ್ಡದಾಗಿತ್ತು?',
        opts: ['It was a computational error', 'Cross-entropy heavily penalizes confident incorrect predictions -- p=0.01 is a highly confident wrong prediction when the true label is 1', 'The formula treats all predictions equally regardless of confidence', 'p=0.01 was simply a typo in the calculation'], correct: 1,
        optsKn: ['ಇದೂ ಒಂದು ಗಣನಾ error ಆಗಿತ್ತು', 'Cross-entropy ವಿಶ್ವಾಸಾರ್ಹ ತಪ್ಪಾದ predictions ಗಳನ್ನೂ ಭಾರೀಯಾಗಿ ಶಿಕ್ಷಿಸುತ್ತದೆ -- ನಿಜ label 1 ಆಗಿದ್ದಾಗ p=0.01 ಒಂದು ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹ ತಪ್ಪಾದ prediction', 'Formula ವಿಶ್ವಾಸ ಲೆಕ್ಕಿಸದೆ ಎಲ್ಲಾ predictions ಗಳನ್ನೂ ಸಮಾನವಾಗಿ ಪರಿಗಣಿಸುತ್ತದೆ', 'p=0.01 ಗಣನೆಯಲ್ಲಿ ಕೇವಲ ಒಂದು ಟೈಪೋ ಆಗಿತ್ತು'] },
      { q: 'For z = x^2, y = 3z, genuinely verified both analytically and numerically at x=2, what is dy/dx?', qKn: 'z = x^2, y = 3z ಗೆ, x=2 ನಲ್ಲಿ analytically ಮತ್ತು numerically ಎರಡೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, dy/dx ಏನೂ?',
        opts: ['3', '4', '12', '6'], correct: 2,
        optsKn: ['3', '4', '12', '6'] },
      { q: 'Why is the chain rule described as essential for training deep neural networks?', qKn: 'Chain rule ಅನ್ನೂ deep neural networks ತರಬೇತಿ ನೀಡಲು ಏಕೆ ಅಗತ್ಯ ಎಂದು ವಿವರಿಸಲಾಗಿದೆ?',
        opts: ['It is only used for computing the loss value, not gradients', 'It allows gradients to propagate backward through every stacked layer, connecting dLoss/dWeight for weights buried deep inside the network', 'It replaces the need for a loss function entirely', 'It only applies to networks with a single layer'], correct: 1,
        optsKn: ['ಇದೂ ಕೇವಲ loss ಮೌಲ್ಯ ಗಣಿಸಲು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ, gradients ಅಲ್ಲ', 'ಇದೂ gradients ಗಳನ್ನೂ ಪ್ರತಿ ಜೋಡಿಸಿದ layer ಮೂಲಕ ಹಿಮ್ಮುಖವಾಗಿ ಹರಡಲು ಬಿಡುತ್ತದೆ, network ಒಳಗೆ ಆಳವಾಗಿ ಹೂತಿರುವ weights ಗಳಿಗೆ dLoss/dWeight ಸಂಪರ್ಕಿಸುತ್ತಾ', 'ಇದೂ ಒಂದು loss function ಅಗತ್ಯ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ ಕೇವಲ ಒಂದೇ layer ಇರುವ networks ಗೆ ಮಾತ್ರ ಅನ್ವಯಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
