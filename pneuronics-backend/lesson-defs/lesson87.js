const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26dc'; // Module 17: Calculus for ML

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'reading',
  duration: 65,
  difficulty: 'beginner',
  status: 'published',
  title: 'Calculus for Machine Learning (Part 3) — Backpropagation, Hessian, Taylor Series & Modern AI',
  titleKn: 'Calculus for Machine Learning (Part 3) — Backpropagation, Hessian, Taylor Series & Modern AI',
  desc: 'Watch PyTorch compute a real gradient automatically and confirm it matches hand-derived calculus exactly, understand why deep learning avoids full Hessians at scale, and connect every idea in this module to backpropagation, Newton\'s method, and the training loop behind modern LLMs.',
  descKn: 'PyTorch ಒಂದು ನಿಜ gradient ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಗಣಿಸುವುದೂ ವೀಕ್ಷಿಸಿ ಮತ್ತು ಇದೂ ಕೈ-derive ಮಾಡಿದ calculus ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, deep learning ಏಕೆ ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ ಪೂರ್ಣ Hessians ತಪ್ಪಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಮತ್ತು ಈ module ನಲ್ಲಿ ಪ್ರತಿ ಕಲ್ಪನೆಯನ್ನೂ backpropagation, Newton ನ method, ಮತ್ತು ಆಧುನಿಕ LLMs ಹಿಂದಿನ training loop ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  objectives: [
    'Understand backpropagation as reverse-mode differentiation.',
    'Understand Jacobians and Hessians.',
    'Understand curvature.',
    'Understand Taylor approximations.',
    'Explain why Newton\'s method differs from gradient descent.',
    'Connect calculus to modern deep learning.',
    'Understand how autodiff frameworks calculate gradients.',
  ],
  objectivesKn: [
    'Backpropagation ಅನ್ನೂ reverse-mode differentiation ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Jacobians ಮತ್ತು Hessians ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Curvature ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Taylor approximations ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Newton ನ method gradient descent ಇಂದ ಏಕೆ ಭಿನ್ನ ಎಂದು ವಿವರಿಸಿ.',
    'Calculus ಅನ್ನೂ ಆಧುನಿಕ deep learning ಗೆ ಸಂಪರ್ಕಿಸಿ.',
    'Autodiff frameworks gradients ಗಳನ್ನೂ ಹೇಗೆ ಗಣಿಸುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Calculus for Machine Learning (Part 3)', textKn: 'Calculus for Machine Learning (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Part 3 of 3 · Time: ~65 minutes total\n• Parts 1 and 2 built derivatives, gradients, and gradient descent by hand\n• Part 3 formalizes backpropagation, introduces second-derivative tools (Jacobian, Hessian, Taylor series), and connects everything to how modern deep learning is actually trained',
      bodyKn: '• Part 3 of 3 · Time: ~65 ನಿಮಿಷಗಳು\n• Parts 1 ಮತ್ತು 2 derivatives, gradients, ಮತ್ತು gradient descent ಅನ್ನೂ ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದವು\n• Part 3 backpropagation ಔಪಚಾರಿಕಗೊಳಿಸುತ್ತದೆ, second-derivative ಸಾಧನಗಳನ್ನೂ ಪರಿಚಯಿಸುತ್ತದೆ (Jacobian, Hessian, Taylor series), ಮತ್ತು ಎಲ್ಲವನ್ನೂ ಆಧುನಿಕ deep learning ಅನ್ನೂ ವಾಸ್ತವವಾಗಿ ಹೇಗೆ ತರಬೇತಿ ನೀಡಲಾಗುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ',
      pillsEn: 'Part 3 of 3,~65 min',
      pillsKn: 'Part 3 of 3,~65 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: 'Backpropagation', textKn: 'Backpropagation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Consider x -> z=wx -> a=ReLU(z) -> prediction -> loss\n• We want dLoss/dw. The chain rule gives: dLoss/dw = dLoss/da x da/dz x dz/dw\n• This chained application of the chain rule, all the way back from the loss to a specific weight, is backpropagation',
      bodyKn: '• x -> z=wx -> a=ReLU(z) -> prediction -> loss ಪರಿಗಣಿಸಿ\n• ನಮಗೆ dLoss/dw ಬೇಕು. Chain rule ನೀಡುತ್ತದೆ: dLoss/dw = dLoss/da x da/dz x dz/dw\n• Chain rule ನ ಈ ಸರಪಳಿಗೊಂಡ ಅನ್ವಯ, loss ಇಂದ ಒಂದು ನಿರ್ದಿಷ್ಟ weight ವರೆಗೆ ಹಿಂತಿರುಗಿ, ಇದೇ backpropagation' } },

    { type: 'heading', data: { textEn: 'Why AI Uses Backpropagation', textKn: 'AI Backpropagation ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A neural network with 1 billion parameters needs dL/dw for every single one of those billion weights\n• Computing each derivative independently would be extremely inefficient\n• Backpropagation reuses intermediate calculations across the whole network -- that is what makes training large neural networks practical at all',
      bodyKn: '• 1 ಬಿಲಿಯನ್ parameters ಹೊಂದಿರುವ ಒಂದು neural network ಆ ಬಿಲಿಯನ್ weights ಗಳಲ್ಲಿ ಪ್ರತಿ ಒಂಟಿ ಒಂದಕ್ಕೆ dL/dw ಬೇಕು\n• ಪ್ರತಿ derivative ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸುವುದೂ ಅತ್ಯಂತ ಅಸಮರ್ಥವಾಗಿರುತ್ತಿತ್ತು\n• Backpropagation ಸಂಪೂರ್ಣ network ಆದ್ಯಂತ ಮಧ್ಯಂತರ ಗಣನೆಗಳನ್ನೂ ಮರುಬಳಸುತ್ತದೆ -- ಇದೇ ದೊಡ್ಡ neural networks ತರಬೇತಿ ನೀಡುವುದೂ ಪ್ರಾಯೋಗಿಕವಾಗಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Automatic Differentiation', textKn: 'Automatic Differentiation', level: 'H2' } },
    { type: 'code', data: {
      filename: 'autodiff_basic.py',
      headingEn: 'PyTorch Computes dy/dx Automatically', headingKn: 'PyTorch dy/dx ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಗಣಿಸುತ್ತದೆ',
      descEn: 'Genuinely executed below.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import torch\n\nx = torch.tensor(3.0, requires_grad=True)\n\ny = x ** 2\n\ny.backward()\n\nprint(\"x =\", x.item())\nprint(\"y =\", y.item())\nprint(\"dy/dx =\", x.grad.item())" } },
    { type: 'output', data: { output: "x = 3.0\ny = 9.0\ndy/dx = 6.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches Part 1\'s hand-computed result exactly: dy/dx = 2x = 2(3) = 6\n• The important difference: nobody typed the formula 2x into this code -- PyTorch tracked every operation performed on x and derived the gradient automatically when .backward() was called',
      bodyKn: '• Part 1 ನ ಕೈ-ಗಣಿಸಿದ ಫಲಿತಾಂಶಕ್ಕೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: dy/dx = 2x = 2(3) = 6\n• ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ: ಈ code ನಲ್ಲಿ ಯಾರೂ 2x formula ಟೈಪ್ ಮಾಡಲಿಲ್ಲ -- PyTorch x ಮೇಲೆ ನಿರ್ವಹಿಸಿದ ಪ್ರತಿ operation ಟ್ರ್ಯಾಕ್ ಮಾಡಿತು ಮತ್ತು .backward() ಕರೆದಾಗ gradient ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ derive ಮಾಡಿತು' } },

    { type: 'heading', data: { textEn: 'Neural Network Gradient Example', textKn: 'Neural Network Gradient ಉದಾಹರಣೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'nn_gradient.py',
      headingEn: 'Autodiff on a Tiny Linear Layer', headingKn: 'ಒಂದು ಚಿಕ್ಕ Linear Layer ಮೇಲೆ Autodiff',
      descEn: 'Genuinely executed below.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import torch\n\nx = torch.tensor([[1.0, 2.0]])\n\nw = torch.tensor(\n    [[0.5],\n     [0.8]],\n    requires_grad=True\n)\n\nb = torch.tensor([0.1], requires_grad=True)\n\ny_true = torch.tensor([[2.0]])\n\nprediction = x @ w + b\n\nloss = (prediction - y_true).pow(2).mean()\n\nloss.backward()\n\nprint(\"Prediction:\", prediction.item())\nprint(\"Loss:\", loss.item())\n\nprint(\"Gradient w:\")\nprint(w.grad)\n\nprint(\"Gradient b:\")\nprint(b.grad)" } },
    { type: 'output', data: { output: "Prediction: 2.1999998092651367\nLoss: 0.03999992460012436\nGradient w:\ntensor([[0.4000],\n        [0.8000]])\nGradient b:\ntensor([0.4000])" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output -- Checked by Hand', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ -- ಕೈಯಿಂದ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      bodyEn: '• Genuinely computed by hand alongside PyTorch, and both agree: prediction = 1(0.5) + 2(0.8) + 0.1 = 2.2, matching PyTorch\'s 2.1999998 (tiny floating-point residue, not an error)\n• loss = (2.2 - 2.0)^2 = 0.04, matching PyTorch\'s 0.03999992\n• dLoss/dw = 2(prediction - y_true) x x = 0.4 x [1, 2] = [0.4, 0.8], exactly matching the printed gradient\n• dLoss/db = 2(prediction - y_true) = 0.4, exactly matching the printed gradient -- every number PyTorch produced automatically was independently reproducible by hand',
      bodyKn: '• PyTorch ಜೊತೆ ಕೈಯಿಂದ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ, ಮತ್ತು ಎರಡೂ ಒಪ್ಪುತ್ತವೆ: prediction = 1(0.5) + 2(0.8) + 0.1 = 2.2, PyTorch ನ 2.1999998 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ (ಚಿಕ್ಕ floating-point ಶೇಷ, ಒಂದು error ಅಲ್ಲ)\n• loss = (2.2 - 2.0)^2 = 0.04, PyTorch ನ 0.03999992 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• dLoss/dw = 2(prediction - y_true) x x = 0.4 x [1, 2] = [0.4, 0.8], ಮುದ್ರಿಸಿದ gradient ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• dLoss/db = 2(prediction - y_true) = 0.4, ಮುದ್ರಿಸಿದ gradient ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- PyTorch ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಉತ್ಪಾದಿಸಿದ ಪ್ರತಿ ಸಂಖ್ಯೆ ಕೈಯಿಂದ ಸ್ವತಂತ್ರವಾಗಿ ಮರುಉತ್ಪಾದಿಸಬಹುದಾಗಿತ್ತು' } },

    { type: 'heading', data: { textEn: 'Jacobian', textKn: 'Jacobian', level: 'H2' } },
    { type: 'math', data: { formula: 'f: R^2 -> R^2\nf(x,y) = [x^2 + y, x + y^2]\nJ = [[df1/dx, df1/dy], [df2/dx, df2/dy]]', descEn: '• A derivative of a scalar function gives one value; when there are multiple outputs and inputs, the derivative becomes a matrix -- the Jacobian -- important for understanding how vector-valued functions change locally', descKn: '• ಒಂದು scalar function ನ derivative ಒಂದು ಮೌಲ್ಯ ನೀಡುತ್ತದೆ; ಅನೇಕ outputs ಮತ್ತು inputs ಇದ್ದಾಗ, derivative ಒಂದು matrix ಆಗುತ್ತದೆ -- Jacobian -- vector-valued functions ಸ್ಥಳೀಯವಾಗಿ ಹೇಗೆ ಬದಲಾಗುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮುಖ್ಯ' } },

    { type: 'heading', data: { textEn: 'Hessian', textKn: 'Hessian', level: 'H2' } },
    { type: 'math', data: { formula: 'H = [[d2L/dx2, d2L/dxdy], [d2L/dydx, d2L/dy2]]\nGradient -> direction\nHessian -> shape/curvature', descEn: '• The gradient contains first derivatives; the Hessian contains second derivatives and describes curvature', descKn: '• Gradient first derivatives ಒಳಗೊಂಡಿದೆ; Hessian second derivatives ಒಳಗೊಂಡಿದೆ ಮತ್ತು curvature ವಿವರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses the Hessian', headingKn: 'AI Hessian ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• The gradient tells you which direction is downhill; the Hessian tells you how sharply the landscape curves\n• Two locations can have similar gradients but very different curvature -- a flat valley versus a sharp valley -- and that distinction matters for how confidently and how far an optimizer should step',
      bodyKn: '• Gradient ಯಾವ direction ಇಳಿಜಾರು ಎಂದು ತಿಳಿಸುತ್ತದೆ; Hessian landscape ಎಷ್ಟು ತೀಕ್ಷ್ಣವಾಗಿ ಬಾಗುತ್ತದೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ\n• ಎರಡು ಸ್ಥಳಗಳು ಹೋಲುವ gradients ಆದರೆ ಬಹಳ ಭಿನ್ನ curvature ಹೊಂದಿರಬಹುದು -- ಒಂದು ಸಮತಟ್ಟಾದ valley ವಿರುದ್ಧ ಒಂದು ತೀಕ್ಷ್ಣ valley -- ಮತ್ತು ಆ ವ್ಯತ್ಯಾಸ ಒಂದು optimizer ಎಷ್ಟು ವಿಶ್ವಾಸದಿಂದ ಮತ್ತು ಎಷ್ಟು ದೂರ step ತೆಗೆದುಕೊಳ್ಳಬೇಕು ಎಂಬುದಕ್ಕೆ ಮುಖ್ಯ' } },

    { type: 'heading', data: { textEn: 'Taylor Series', textKn: 'Taylor Series', level: 'H2' } },
    { type: 'math', data: { formula: 'first-order: f(x+h) ~ f(x) + f\'(x) h\nsecond-order: f(x+h) ~ f(x) + f\'(x) h + (1/2) f\'\'(x) h^2', descEn: '• The first-order approximation is exactly what explains gradient descent -- it only uses the slope; the second-order approximation adds curvature information from the Hessian', descKn: '• First-order approximation ನಿಖರವಾಗಿ gradient descent ವಿವರಿಸುತ್ತದೆ -- ಇದೂ ಕೇವಲ ಇಳಿಜಾರು ಮಾತ್ರ ಬಳಸುತ್ತದೆ; second-order approximation Hessian ಇಂದ curvature ಮಾಹಿತಿ ಸೇರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Gradient Descent vs Newton\'s Method', textKn: 'Gradient Descent vs Newton ನ Method', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Comparing the Two Update Rules', captionKn: 'ಎರಡು Update Rules ಹೋಲಿಸುವುದೂ',
      rows: 'Method|Update Rule|Uses\nGradient descent|theta_new = theta - eta grad L|Direction only\nNewton\'s method|theta_new = theta - H_inverse grad L|Direction plus curvature' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Newton\'s method can converge much faster near a solution because it accounts for curvature, but calculating and storing Hessians can be extremely expensive for large neural networks',
      bodyKn: '• Newton ನ method ಒಂದು ಪರಿಹಾರ ಬಳಿ ಬಹಳ ವೇಗವಾಗಿ converge ಆಗಬಹುದು ಇದೂ curvature ಗಣನೆಗೆ ತೆಗೆದುಕೊಳ್ಳುವ ಕಾರಣ, ಆದರೆ Hessians ಗಣಿಸುವುದೂ ಮತ್ತು ಸಂಗ್ರಹಿಸುವುದೂ ದೊಡ್ಡ neural networks ಗೆ ಅತ್ಯಂತ ದುಬಾರಿಯಾಗಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Why Deep Learning Usually Doesn\'t Use Full Hessians', textKn: 'Deep Learning ಸಾಮಾನ್ಯವಾಗಿ ಪೂರ್ಣ Hessians ಬಳಸದಿರುವುದೂ ಏಕೆ', level: 'H2' } },
    { type: 'math', data: { formula: '1 billion parameters\nHessian size ~ 1 billion x 1 billion entries', descEn: '• That is enormous -- far beyond what can be stored or computed for any real model, which is why modern deep learning relies on first-order methods or specialized approximations instead', descKn: '• ಇದೂ ಬೃಹತ್ -- ಯಾವುದೇ ನಿಜ model ಗೆ ಸಂಗ್ರಹಿಸಬಹುದಾದ ಅಥವಾ ಗಣಿಸಬಹುದಾದದ್ದಕ್ಕಿಂತ ಬಹಳ ಮೀರಿ, ಇದೇ ಆಧುನಿಕ deep learning ಬದಲಿಗೆ first-order methods ಅಥವಾ ವಿಶೇಷ approximations ಅವಲಂಬಿಸುವ ಕಾರಣ' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Common optimizers include SGD, Adam, and AdamW',
      bodyKn: '• ಸಾಮಾನ್ಯ optimizers ಗಳಲ್ಲಿ SGD, Adam, ಮತ್ತು AdamW ಸೇರಿವೆ',
      pillsEn: 'SGD,Adam,AdamW',
      pillsKn: 'SGD,Adam,AdamW' } },

    { type: 'heading', data: { textEn: 'Adam', textKn: 'Adam', level: 'H2' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 135\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6\">\n  <rect width=\"260\" height=\"135\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"75\" y=\"18\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"30\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.4\">Gradient</text>\n  <path d=\"M130,36 V44\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"46\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"58\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.2\">Track average direction</text>\n  <path d=\"M130,64 V72\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"74\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"86\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.2\">Track gradient magnitude</text>\n  <path d=\"M130,92 V100\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"102\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"114\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.2\">Adaptive parameter update</text>\n</svg>",
      titleEn: 'What Adam Tracks Beyond the Raw Gradient', titleKn: 'Adam ಕಚ್ಚಾ Gradient ಆಚೆ ಏನೂ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ',
      captionEn: 'Adam combines the gradient with running statistics of past gradients -- but the underlying foundation is still loss -> gradient -> parameter update.',
      captionKn: 'Adam gradient ಅನ್ನೂ ಹಿಂದಿನ gradients ನ running statistics ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತದೆ -- ಆದರೆ ಆಧಾರವಾಗಿರುವ ಅಡಿಪಾಯ ಇನ್ನೂ loss -> gradient -> parameter update.' } },

    { type: 'example', data: {
      tag: 'Real World: Training a Large Language Model',
      textEn: '• Given "The capital of France is ___", a model predicts London but the target is Paris\n• Input tokens -> Transformer -> Probability distribution -> Cross-entropy loss -> Backpropagation -> Gradients -> Optimizer -> Updated parameters, repeated across enormous amounts of training data\n• Calculus is the mechanism that tells the optimizer how the parameters should change',
      textKn: '• "The capital of France is ___" ನೀಡಿದಾಗ, ಒಂದು model London ಎಂದು ಊಹಿಸುತ್ತದೆ ಆದರೆ target Paris\n• Input tokens -> Transformer -> Probability distribution -> Cross-entropy loss -> Backpropagation -> Gradients -> Optimizer -> Updated parameters, ಬೃಹತ್ ಪ್ರಮಾಣದ training data ಆದ್ಯಂತ ಪುನರಾವರ್ತಿಸಲಾಗಿದೆ\n• Calculus optimizer ಗೆ parameters ಹೇಗೆ ಬದಲಾಗಬೇಕು ಎಂದು ತಿಳಿಸುವ ಕಾರ್ಯವಿಧಾನ',
      table: '' } },
    { type: 'example', data: {
      tag: 'Real World: Image Recognition',
      textEn: '• A model sees a dog image but predicts cat=0.80, dog=0.20 -- the loss is high\n• Backpropagation determines how the model parameters contributed to this error, and after many training iterations the model reaches cat=0.02, dog=0.97',
      textKn: '• ಒಂದು model ಒಂದು dog image ನೋಡುತ್ತದೆ ಆದರೆ cat=0.80, dog=0.20 ಊಹಿಸುತ್ತದೆ -- loss ಹೆಚ್ಚಿದೆ\n• Backpropagation model parameters ಈ error ಗೆ ಹೇಗೆ ಕೊಡುಗೆ ನೀಡಿದವು ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ, ಮತ್ತು ಅನೇಕ training iterations ನಂತರ model cat=0.02, dog=0.97 ತಲುಪುತ್ತದೆ',
      table: '' } },
    { type: 'example', data: {
      tag: 'Real World: Recommendation Systems',
      textEn: '• A model predicts a user will rate a movie 2.1, but the actual rating is 4.8\n• The error produces a loss; gradients then adjust the user embedding, the movie embedding, and the model weights so future predictions become more accurate',
      textKn: '• ಒಂದು model ಒಬ್ಬ ಬಳಕೆದಾರರು ಒಂದು ಚಿತ್ರಕ್ಕೆ 2.1 rate ಮಾಡುತ್ತಾರೆ ಎಂದು ಊಹಿಸುತ್ತದೆ, ಆದರೆ ನಿಜ rating 4.8\n• Error ಒಂದು loss ಉತ್ಪಾದಿಸುತ್ತದೆ; gradients ನಂತರ user embedding, movie embedding, ಮತ್ತು model weights ಅನ್ನೂ ಸರಿಹೊಂದಿಸುತ್ತವೆ ಆದ್ದರಿಂದ ಭವಿಷ್ಯದ predictions ಹೆಚ್ಚು ನಿಖರವಾಗುತ್ತವೆ',
      table: '' } },

    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 280\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"5.8\">\n  <rect width=\"260\" height=\"280\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6.8\">The Complete AI Learning Loop</text>\n  <rect x=\"75\" y=\"20\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"32\" fill=\"#93c5fd\" text-anchor=\"middle\">Input data</text>\n  <path d=\"M130,38 V46\" stroke=\"#475569\"/>\n  <rect x=\"65\" y=\"48\" width=\"130\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"60\" fill=\"#c4b5fd\" text-anchor=\"middle\">Neural network</text>\n  <path d=\"M130,66 V74\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"76\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"88\" fill=\"#93c5fd\" text-anchor=\"middle\">Prediction</text>\n  <path d=\"M130,94 V102\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"104\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"116\" fill=\"#fca5a5\" text-anchor=\"middle\">Loss</text>\n  <path d=\"M130,122 V130\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"132\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"144\" fill=\"#fde68a\" text-anchor=\"middle\">Backpropagation</text>\n  <path d=\"M130,150 V158\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"160\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"172\" fill=\"#6ee7b7\" text-anchor=\"middle\">Gradient</text>\n  <path d=\"M130,178 V186\" stroke=\"#475569\"/>\n  <rect x=\"65\" y=\"188\" width=\"130\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"200\" fill=\"#c4b5fd\" text-anchor=\"middle\">Optimizer</text>\n  <path d=\"M130,206 V214\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"216\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"228\" fill=\"#6ee7b7\" text-anchor=\"middle\">Updated parameters</text>\n  <path d=\"M185,29 C 230,29 230,225 190,225\" stroke=\"#475569\" fill=\"none\" marker-end=\"url(#cll)\"/>\n  <defs><marker id=\"cll\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/></marker></defs>\n  <text x=\"215\" y=\"130\" fill=\"#94a3b8\" font-size=\"5.4\">next step</text>\n  <text x=\"130\" y=\"250\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"5.4\">Underneath: derivative -&gt; partial derivative -&gt;</text>\n  <text x=\"130\" y=\"262\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"5.4\">gradient -&gt; chain rule -&gt; backprop -&gt; optimizer</text>\n</svg>",
      titleEn: 'Every Concept From This Module, One Loop', titleKn: 'ಈ Module ಇಂದ ಪ್ರತಿ ಕಲ್ಪನೆ, ಒಂದು Loop',
      captionEn: 'This loop repeats millions or billions of times during training -- every single pass through it relies on the calculus built across this three-part lesson.',
      captionKn: 'Training ಸಮಯದಲ್ಲಿ ಈ loop ಲಕ್ಷಾಂತರ ಅಥವಾ ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ ಬಾರಿ ಪುನರಾವರ್ತಿಸುತ್ತದೆ -- ಇದರ ಮೂಲಕ ಪ್ರತಿ ಒಂಟಿ pass ಈ ಮೂರು-ಭಾಗಗಳ lesson ಆದ್ಯಂತ ನಿರ್ಮಿಸಿದ calculus ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ.' } },

    { type: 'table', data: { captionEn: 'Key Terms', captionKn: 'ಮುಖ್ಯ Terms',
      rows: 'Term|Meaning|AI Usage\nDerivative|Rate of change|Understand parameter sensitivity\nPartial derivative|Derivative with one variable changing|Multi-parameter models\nGradient|Vector of derivatives|Optimization\nGradient descent|Move opposite the gradient|Model training\nLearning rate|Size of update|Controls training speed\nChain rule|Derivatives through compositions|Backpropagation\nJacobian|Matrix of first derivatives|Vector functions\nHessian|Matrix of second derivatives|Curvature\nTaylor series|Local function approximation|Optimization theory\nBackpropagation|Efficient gradient calculation|Neural networks\nAutomatic differentiation|Programmatic derivative calculation|PyTorch/JAX\nIntegral|Accumulation over a range|Probability and expectations' } },

    { type: 'table', data: { captionEn: 'Practical AI Connection Map', captionKn: 'ಪ್ರಾಯೋಗಿಕ AI Connection Map',
      rows: 'Calculus Concept|Where It Appears in AI\nDerivative|Loss sensitivity\nGradient|Neural-network weight updates\nChain rule|Backpropagation\nGradient descent|Training\nPartial derivatives|Individual parameters\nJacobian|Vector transformations\nHessian|Curvature and advanced optimization\nTaylor series|Optimization analysis\nIntegral|Probability distributions\nNumerical derivative|Gradient checking\nAutomatic differentiation|PyTorch/JAX\nCross-entropy derivative|Classification training' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Backpropagation exists because computing dL/dw independently for a billion weights would mean redoing the same intermediate work a billion times -- the chain rule, applied systematically backward through the computation graph, reuses every intermediate result exactly once\n• This lesson\'s hand-verification of PyTorch\'s autodiff output (matching the hand-derived 0.4 and [0.4, 0.8] exactly) is the whole point of learning the calculus first: autodiff is not magic, it is the same chain rule this module built by hand, just applied automatically and systematically across an arbitrarily large computation graph\n• The Hessian is mathematically more informative than the gradient alone, but this lesson\'s own arithmetic (1 billion squared) shows precisely why it is infeasible at scale -- Adam\'s compromise, tracking cheap running statistics instead of the full curvature matrix, exists specifically to approximate some of that benefit without the impossible cost\n• Every real-world example in this lesson -- an LLM predicting the wrong word, a vision model misclassifying an image, a recommender missing a rating -- reduces to the exact same five-step loop: prediction, loss, gradient, update, repeat. Scale is the only thing that changes between a 2-parameter linear regression and a billion-parameter language model',
      bodyKn: '• Backpropagation ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ಒಂದು ಬಿಲಿಯನ್ weights ಗೆ ಸ್ವತಂತ್ರವಾಗಿ dL/dw ಗಣಿಸುವುದೂ ಅದೇ ಮಧ್ಯಂತರ ಕೆಲಸ ಒಂದು ಬಿಲಿಯನ್ ಬಾರಿ ಮರುಮಾಡುವುದೂ ಎಂದು ಅರ್ಥ -- computation graph ಮೂಲಕ ವ್ಯವಸ್ಥಿತವಾಗಿ ಹಿಮ್ಮುಖವಾಗಿ ಅನ್ವಯಿಸಿದ chain rule, ಪ್ರತಿ ಮಧ್ಯಂತರ ಫಲಿತಾಂಶ ಅನ್ನೂ ನಿಖರವಾಗಿ ಒಮ್ಮೆ ಮರುಬಳಸುತ್ತದೆ\n• PyTorch ನ autodiff output ಅನ್ನೂ ಈ lesson ನ ಕೈ-ಪರಿಶೀಲನೆ (ಕೈ-derive ಮಾಡಿದ 0.4 ಮತ್ತು [0.4, 0.8] ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ) calculus ಅನ್ನೂ ಮೊದಲು ಕಲಿಯುವುದರ ಸಂಪೂರ್ಣ ಉದ್ದೇಶ: autodiff ಮ್ಯಾಜಿಕ್ ಅಲ್ಲ, ಇದೂ ಈ module ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದ ಅದೇ chain rule, ಕೇವಲ ಒಂದು ಅನಿಯಂತ್ರಿತವಾಗಿ ದೊಡ್ಡ computation graph ಆದ್ಯಂತ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮತ್ತು ವ್ಯವಸ್ಥಿತವಾಗಿ ಅನ್ವಯಿಸಲಾಗಿದೆ\n• Hessian ಕೇವಲ gradient ಗಿಂತ ಗಣಿತೀಯವಾಗಿ ಹೆಚ್ಚು ಮಾಹಿತಿಪೂರ್ಣ, ಆದರೆ ಈ lesson ನ ಸ್ವಂತ ಗಣಿತ (1 ಬಿಲಿಯನ್ ಸ್ಕ್ವೇರ್ಡ್) ಇದೂ ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ ಏಕೆ ಅಸಾಧ್ಯ ಎಂದು ನಿಖರವಾಗಿ ತೋರಿಸುತ್ತದೆ -- Adam ನ ರಾಜಿ, ಪೂರ್ಣ curvature matrix ಗಿಂತ ಅಗ್ಗದ running statistics ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದೂ, ಅಸಾಧ್ಯ ವೆಚ್ಚ ಇಲ್ಲದೆ ಆ ಪ್ರಯೋಜನದ ಕೆಲವನ್ನೂ ಅಂದಾಜು ಮಾಡಲು ನಿರ್ದಿಷ್ಟವಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ\n• ಈ lesson ನಲ್ಲಿ ಪ್ರತಿ ನಿಜ-ಪ್ರಪಂಚದ ಉದಾಹರಣೆ -- ಒಂದು LLM ತಪ್ಪಾದ ಪದ ಊಹಿಸುತ್ತಾ, ಒಂದು vision model ಒಂದು image ತಪ್ಪಾಗಿ ವರ್ಗೀಕರಿಸುತ್ತಾ, ಒಂದು recommender ಒಂದು rating ತಪ್ಪಿಸುತ್ತಾ -- ನಿಖರ ಅದೇ ಐದು-ಹಂತದ loop ಗೆ ಕುಸಿಯುತ್ತದೆ: prediction, loss, gradient, update, repeat. ಒಂದು 2-parameter linear regression ಮತ್ತು ಒಂದು ಬಿಲಿಯನ್-parameter language model ನಡುವೆ Scale ಮಾತ್ರ ಬದಲಾಗುವುದೂ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Backpropagation is the chain rule applied systematically backward through a network, reusing intermediate calculations -- genuinely confirmed against PyTorch, whose autodiff output matched hand-computed gradients exactly (dy/dx=6.0, and [0.4,0.8]/0.4 for the tiny linear layer)\n• Jacobian = matrix of first derivatives for vector-valued functions; Hessian = matrix of second derivatives, describing curvature\n• Newton\'s method uses the Hessian for faster convergence near a solution, but a full Hessian for a billion-parameter model would need roughly a billion squared entries -- infeasible, which is why deep learning relies on first-order methods like SGD, Adam, and AdamW instead\n• Taylor series explains gradient descent as a first-order local approximation, and Newton\'s method as adding second-order curvature information\n• The entire lesson reduces to one loop: prediction -> loss -> gradient -> parameter update -> repeat, and one equation: theta <- theta - eta grad L(theta)\n• Calculus turns "the model is wrong" into "here is exactly how to change its parameters to make it less wrong" -- that is why calculus is fundamental to machine learning',
      bodyKn: '• Backpropagation ಒಂದು network ಮೂಲಕ ವ್ಯವಸ್ಥಿತವಾಗಿ ಹಿಮ್ಮುಖವಾಗಿ ಅನ್ವಯಿಸಿದ chain rule, ಮಧ್ಯಂತರ ಗಣನೆಗಳನ್ನೂ ಮರುಬಳಸುತ್ತಾ -- PyTorch ವಿರುದ್ಧ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, ಇದರ autodiff output ಕೈ-ಗಣಿಸಿದ gradients ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಯಿತು (dy/dx=6.0, ಮತ್ತು ಚಿಕ್ಕ linear layer ಗೆ [0.4,0.8]/0.4)\n• Jacobian = vector-valued functions ಗಳಿಗೆ first derivatives ನ matrix; Hessian = second derivatives ನ matrix, curvature ವಿವರಿಸುತ್ತಾ\n• Newton ನ method ಒಂದು ಪರಿಹಾರ ಬಳಿ ವೇಗವಾದ convergence ಗಾಗಿ Hessian ಬಳಸುತ್ತದೆ, ಆದರೆ ಒಂದು ಬಿಲಿಯನ್-parameter model ಗೆ ಒಂದು ಪೂರ್ಣ Hessian ಗೆ ಸುಮಾರು ಒಂದು ಬಿಲಿಯನ್ ಸ್ಕ್ವೇರ್ಡ್ entries ಬೇಕಾಗುತ್ತದೆ -- ಅಸಾಧ್ಯ, ಇದೇ deep learning SGD, Adam, ಮತ್ತು AdamW ನಂತಹ first-order methods ಬದಲಿಗೆ ಅವಲಂಬಿಸುವ ಕಾರಣ\n• Taylor series gradient descent ಅನ್ನೂ ಒಂದು first-order ಸ್ಥಳೀಯ approximation ಆಗಿ, ಮತ್ತು Newton ನ method ಅನ್ನೂ second-order curvature ಮಾಹಿತಿ ಸೇರಿಸುವುದೂ ಆಗಿ ವಿವರಿಸುತ್ತದೆ\n• ಸಂಪೂರ್ಣ lesson ಒಂದು loop ಗೆ ಕುಸಿಯುತ್ತದೆ: prediction -> loss -> gradient -> parameter update -> repeat, ಮತ್ತು ಒಂದು ಸಮೀಕರಣ: theta <- theta - eta grad L(theta)\n• Calculus "model ತಪ್ಪಾಗಿದೆ" ಅನ್ನೂ "ಇದನ್ನೂ ಕಡಿಮೆ ತಪ್ಪಾಗಿಸಲು ಇದರ parameters ಅನ್ನೂ ನಿಖರವಾಗಿ ಹೇಗೆ ಬದಲಾಯಿಸಬೇಕು" ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ -- ಇದೇ calculus machine learning ಗೆ ಮೂಲಭೂತ ಆಗಿರುವ ಕಾರಣ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely verified: for the tiny linear layer example, what gradient did PyTorch compute for w, and how was it confirmed?', qKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: ಚಿಕ್ಕ linear layer ಉದಾಹರಣೆಗೆ, PyTorch w ಗೆ ಯಾವ gradient ಗಣಿಸಿತು, ಮತ್ತು ಇದೂ ಹೇಗೆ ದೃಢಪಡಿಸಲಾಯಿತು?',
        opts: ['[0.0, 0.0], confirmed by assumption', '[0.4, 0.8], confirmed by independently computing 2(prediction-y_true) x x by hand and getting the identical result', '[1.0, 2.0], confirmed by checking the input x', 'PyTorch could not compute this gradient'], correct: 1,
        optsKn: ['[0.0, 0.0], ಊಹೆಯಿಂದ ದೃಢಪಡಿಸಲಾಗಿದೆ', '[0.4, 0.8], 2(prediction-y_true) x x ಅನ್ನೂ ಕೈಯಿಂದ ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸಿ ಮತ್ತು ಅದೇ ಫಲಿತಾಂಶ ಪಡೆದು ದೃಢಪಡಿಸಲಾಗಿದೆ', '[1.0, 2.0], input x ಪರಿಶೀಲಿಸಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'PyTorch ಈ gradient ಗಣಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ'] },
      { q: 'What does the Hessian describe that the gradient alone does not?', qKn: 'Gradient ಮಾತ್ರ ವಿವರಿಸದ ಏನನ್ನೂ Hessian ವಿವರಿಸುತ್ತದೆ?',
        opts: ['The direction of steepest descent', 'The curvature of the loss landscape -- how sharply it bends, not just which way is downhill', 'The learning rate to use', 'The total number of parameters in the model'], correct: 1,
        optsKn: ['ಅತ್ಯಂತ ತೀವ್ರ descent ನ direction', 'Loss landscape ನ curvature -- ಇದೂ ಎಷ್ಟು ತೀಕ್ಷ್ಣವಾಗಿ ಬಾಗುತ್ತದೆ, ಕೇವಲ ಯಾವ ದಾರಿ ಇಳಿಜಾರು ಎಂದಲ್ಲ', 'ಬಳಸಬೇಕಾದ learning rate', 'Model ನಲ್ಲಿ ಒಟ್ಟು parameters ಸಂಖ್ಯೆ'] },
      { q: 'Why does deep learning typically avoid computing a full Hessian for large models?', qKn: 'Deep learning ಸಾಮಾನ್ಯವಾಗಿ ದೊಡ್ಡ models ಗೆ ಒಂದು ಪೂರ್ಣ Hessian ಗಣಿಸುವುದೂ ಏಕೆ ತಪ್ಪಿಸುತ್ತದೆ?',
        opts: ['The Hessian provides no useful information', 'For a model with 1 billion parameters, the Hessian would need roughly 1 billion squared entries, which is computationally infeasible to store or compute', 'The Hessian can only be computed for linear regression', 'Newton\'s method is illegal to use in production'], correct: 1,
        optsKn: ['Hessian ಯಾವುದೇ ಉಪಯುಕ್ತ ಮಾಹಿತಿ ಒದಗಿಸುವುದಿಲ್ಲ', '1 ಬಿಲಿಯನ್ parameters ಹೊಂದಿರುವ ಒಂದು model ಗೆ, Hessian ಗೆ ಸುಮಾರು 1 ಬಿಲಿಯನ್ ಸ್ಕ್ವೇರ್ಡ್ entries ಬೇಕಾಗುತ್ತದೆ, ಇದೂ ಸಂಗ್ರಹಿಸಲು ಅಥವಾ ಗಣಿಸಲು ಗಣನಾತ್ಮಕವಾಗಿ ಅಸಾಧ್ಯ', 'Hessian ಅನ್ನೂ ಕೇವಲ linear regression ಗೆ ಮಾತ್ರ ಗಣಿಸಬಹುದು', 'Newton ನ method production ನಲ್ಲಿ ಬಳಸುವುದೂ ಕಾನೂನುಬಾಹಿರ'] },
      { q: 'What is the key difference between the update rules for gradient descent and Newton\'s method?', qKn: 'Gradient descent ಮತ್ತು Newton ನ method ಗೆ update rules ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They are exactly the same equation', 'Gradient descent uses only the gradient (direction); Newton\'s method also uses the inverse Hessian (direction plus curvature)', 'Newton\'s method does not use derivatives at all', 'Gradient descent is always faster than Newton\'s method'], correct: 1,
        optsKn: ['ಅವು ನಿಖರವಾಗಿ ಅದೇ ಸಮೀಕರಣ', 'Gradient descent ಕೇವಲ gradient (direction) ಬಳಸುತ್ತದೆ; Newton ನ method inverse Hessian ಕೂಡ ಬಳಸುತ್ತದೆ (direction ಜೊತೆ curvature)', 'Newton ನ method derivatives ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಳಸುವುದಿಲ್ಲ', 'Gradient descent ಯಾವಾಗಲೂ Newton ನ method ಗಿಂತ ವೇಗ'] },
      { q: 'According to this lesson, what is the single loop that every AI training example -- LLMs, vision models, recommenders -- reduces to?', qKn: 'ಈ lesson ಪ್ರಕಾರ, ಪ್ರತಿ AI training ಉದಾಹರಣೆ -- LLMs, vision models, recommenders -- ಯಾವ ಒಂಟಿ loop ಗೆ ಕುಸಿಯುತ್ತದೆ?',
        opts: ['Input -> output, with no intermediate steps', 'Prediction -> loss -> gradient -> parameter update -> repeat', 'Random search over all possible parameter values', 'Manual inspection of each individual weight'], correct: 1,
        optsKn: ['Input -> output, ಯಾವುದೇ ಮಧ್ಯಂತರ ಹಂತಗಳಿಲ್ಲದೆ', 'Prediction -> loss -> gradient -> parameter update -> repeat', 'ಎಲ್ಲಾ ಸಂಭವನೀಯ parameter ಮೌಲ್ಯಗಳ ಮೇಲೆ ಯಾದೃಚ್ಛಿಕ ಹುಡುಕಾಟ', 'ಪ್ರತಿ ಪ್ರತ್ಯೇಕ weight ನ ಕೈಯಾರೆ ಪರೀಕ್ಷೆ'] },
    ] } },
  ],
};
