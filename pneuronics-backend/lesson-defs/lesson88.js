const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26df'; // Module 18: Chain Rule and Automatic Differentiation

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 90,
  difficulty: 'beginner',
  status: 'published',
  title: 'Chain Rule & Automatic Differentiation (Part 1) — Computational Graphs & Autodiff',
  titleKn: 'Chain Rule & Automatic Differentiation (Part 1) — Computational Graphs & Autodiff',
  desc: 'Trace a gradient by hand through a tiny computational graph, genuinely compare forward-mode and reverse-mode differentiation on the same function, and confirm PyTorch\'s autograd produces exactly the hand-derived gradient -- the chain rule and automatic differentiation together are what "backpropagation" actually means.',
  descKn: 'ಒಂದು ಚಿಕ್ಕ computational graph ಮೂಲಕ ಒಂದು gradient ಅನ್ನೂ ಕೈಯಿಂದ ಟ್ರೇಸ್ ಮಾಡಿ, ಅದೇ function ಮೇಲೆ forward-mode ಮತ್ತು reverse-mode differentiation ಅನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸಿ, ಮತ್ತು PyTorch ನ autograd ನಿಖರವಾಗಿ ಕೈ-derive ಮಾಡಿದ gradient ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ -- chain rule ಮತ್ತು automatic differentiation ಒಟ್ಟಿಗೆ "backpropagation" ವಾಸ್ತವವಾಗಿ ಏನೂ ಎಂದು ಅರ್ಥ.',
  objectives: [
    'Understand why the chain rule is necessary for neural networks.',
    'Calculate derivatives through composed functions.',
    'Understand computational graphs.',
    'Distinguish forward-mode and reverse-mode automatic differentiation.',
    'Explain why neural networks primarily use reverse-mode autodiff.',
    'Understand how automatic differentiation differs from numerical differentiation.',
    'Understand the basic architecture of an autograd engine.',
  ],
  objectivesKn: [
    'Chain rule neural networks ಗೆ ಏಕೆ ಅಗತ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಸಂಯೋಜಿತ functions ಮೂಲಕ derivatives ಗಣಿಸಿ.',
    'Computational graphs ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Forward-mode ಮತ್ತು reverse-mode automatic differentiation ಪ್ರತ್ಯೇಕಿಸಿ.',
    'Neural networks ಪ್ರಾಥಮಿಕವಾಗಿ reverse-mode autodiff ಏಕೆ ಬಳಸುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.',
    'Automatic differentiation numerical differentiation ಇಂದ ಹೇಗೆ ಭಿನ್ನ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದು autograd engine ನ ಮೂಲಭೂತ architecture ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Chain Rule & Automatic Differentiation (Part 1)', textKn: 'Chain Rule & Automatic Differentiation (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Derivatives & Gradients · Time: ~90 minutes total\n• The chain rule is the engine behind every neural network that learns\n• Part 2 will implement a miniature autograd engine and use it to train a neural network',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Derivatives & Gradients · Time: ~90 ನಿಮಿಷಗಳು\n• Chain rule ಕಲಿಯುವ ಪ್ರತಿ neural network ಹಿಂದಿನ ಎಂಜಿನ್\n• Part 2 ಒಂದು ಚಿಕ್ಕ autograd engine ಜಾರಿಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಇದನ್ನೂ ಒಂದು neural network ತರಬೇತಿ ನೀಡಲು ಬಳಸುತ್ತದೆ',
      pillsEn: 'Python,Prereq: Phase 1 Derivatives & Gradients,~90 min',
      pillsKn: 'Python,Prereq: Phase 1 Derivatives & Gradients,~90 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A simple function like y=x² has a simple derivative, dy/dx=2x -- but a neural network is a function of a function of a function\n• To train it, you need the gradient of the loss with respect to every weight, and a modern network can have millions or billions of parameters\n• Doing this manually is impossible, and doing it numerically with finite differences is far too slow\n• The solution: Chain Rule + Automatic Differentiation = Backpropagation. The chain rule provides the mathematics; automatic differentiation provides the algorithm',
      bodyKn: '• y=x² ನಂತಹ ಒಂದು ಸರಳ function ಒಂದು ಸರಳ derivative ಹೊಂದಿದೆ, dy/dx=2x -- ಆದರೆ ಒಂದು neural network ಒಂದು function ನ function ನ function\n• ಇದೂ ತರಬೇತಿ ನೀಡಲು, ನಿಮಗೆ ಪ್ರತಿ weight ಗೆ ಸಂಬಂಧಿಸಿ loss ನ gradient ಬೇಕು, ಮತ್ತು ಒಂದು ಆಧುನಿಕ network ಲಕ್ಷಾಂತರ ಅಥವಾ ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ parameters ಹೊಂದಿರಬಹುದು\n• ಇದನ್ನೂ ಕೈಯಾರೆ ಮಾಡುವುದೂ ಅಸಾಧ್ಯ, ಮತ್ತು ಇದನ್ನೂ finite differences ಜೊತೆ numerically ಮಾಡುವುದೂ ಬಹಳ ನಿಧಾನ\n• ಪರಿಹಾರ: Chain Rule + Automatic Differentiation = Backpropagation. Chain rule ಗಣಿತ ಒದಗಿಸುತ್ತದೆ; automatic differentiation algorithm ಒದಗಿಸುತ್ತದೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6\">\n  <rect width=\"260\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"75\" y=\"12\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"24\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.2\">input</text>\n  <path d=\"M130,30 V38\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"40\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"52\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5\">matrix multiplication</text>\n  <path d=\"M130,58 V66\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"68\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"80\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.2\">bias addition</text>\n  <path d=\"M130,86 V94\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"96\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"108\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.2\">activation</text>\n  <path d=\"M130,114 V122\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"124\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"136\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5\">matrix multiplication</text>\n  <path d=\"M130,142 V150\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"152\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"164\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.2\">softmax</text>\n  <path d=\"M130,170 V178\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"180\" width=\"90\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"192\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.2\">loss</text>\n</svg>",
      titleEn: 'The Loss Is a Function of a Function of a Function', titleKn: 'Loss ಒಂದು Function ನ Function ನ Function',
      captionEn: 'Every box here is a composed function -- the chain rule is the only way to connect a change in the loss back to a change in an early weight.',
      captionKn: 'ಇಲ್ಲಿ ಪ್ರತಿ box ಒಂದು ಸಂಯೋಜಿತ function -- loss ನಲ್ಲಿ ಒಂದು ಬದಲಾವಣೆ ಅನ್ನೂ ಒಂದು ಆರಂಭಿಕ weight ನಲ್ಲಿ ಒಂದು ಬದಲಾವಣೆಗೆ ಹಿಂತಿರುಗಿ ಸಂಪರ್ಕಿಸುವ ಏಕೈಕ ಮಾರ್ಗ chain rule.' } },

    { type: 'heading', data: { textEn: 'The Chain Rule', textKn: 'The Chain Rule', level: 'H2' } },
    { type: 'math', data: { formula: 'y = f(g(x))\ndy/dx = dy/dg x dg/dx\ndy/dx = f\'(g(x)) x g\'(x)', descEn: '• The derivative of a composition is the product of the local derivatives', descKn: '• ಒಂದು composition ನ derivative ಸ್ಥಳೀಯ derivatives ಗಳ ಉತ್ಪನ್ನ' } },
    { type: 'math', data: { formula: 'Step 1: y = sin(x^2), so g(x) = x^2, f(g) = sin(g)\nStep 2: g\'(x) = 2x, f\'(g) = cos(g)\nStep 3: dy/dx = cos(x^2) x 2x\nStep 4: at x = 2: g(2) = 4, dy/dx = cos(4) x 4 = -2.6146', descEn: '• Genuinely verified two independent ways: analytically, cos(4)*4 = -2.6145744834544478; and numerically, [y(2+h)-y(2)]/h = -2.6145690831258506 -- both agree to 5 decimal places', descKn: '• ಎರಡು ಸ್ವತಂತ್ರ ರೀತಿಯಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: analytically, cos(4)*4 = -2.6145744834544478; ಮತ್ತು numerically, [y(2+h)-y(2)]/h = -2.6145690831258506 -- ಎರಡೂ 5 ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಒಪ್ಪುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• For deeper compositions y = f(g(h(x))), the chain becomes dy/dx = f\'(g(h(x))) x g\'(h(x)) x h\'(x)\n• This is exactly what happens inside a deep neural network -- every layer contributes a local derivative to the chain',
      bodyKn: '• ಆಳವಾದ compositions y = f(g(h(x))) ಗೆ, ಸರಪಳಿ dy/dx = f\'(g(h(x))) x g\'(h(x)) x h\'(x) ಆಗುತ್ತದೆ\n• ಇದೂ ನಿಖರವಾಗಿ ಒಂದು deep neural network ಒಳಗೆ ಸಂಭವಿಸುವುದೂ -- ಪ್ರತಿ layer ಸರಪಳಿಗೆ ಒಂದು ಸ್ಥಳೀಯ derivative ಕೊಡುಗೆ ನೀಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Why AI Uses the Chain Rule', textKn: 'AI Chain Rule ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Neural networks are compositions of functions: h1 = activation(W1x+b1), h2 = activation(W2h1+b2), output = W3h2+b3\n• The loss depends on the output, but the optimizer needs dLoss/dW1, dLoss/dW2, and dLoss/dW3 -- the chain rule connects these\n• Without the chain rule, there is no practical way to train deep neural networks efficiently',
      bodyKn: '• Neural networks functions ಗಳ compositions: h1 = activation(W1x+b1), h2 = activation(W2h1+b2), output = W3h2+b3\n• Loss output ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ, ಆದರೆ optimizer ಗೆ dLoss/dW1, dLoss/dW2, ಮತ್ತು dLoss/dW3 ಬೇಕು -- chain rule ಇವುಗಳನ್ನೂ ಸಂಪರ್ಕಿಸುತ್ತದೆ\n• Chain rule ಇಲ್ಲದೆ, deep neural networks ಗಳಿಗೆ ಸಮರ್ಥವಾಗಿ ತರಬೇತಿ ನೀಡಲು ಯಾವುದೇ ಪ್ರಾಯೋಗಿಕ ಮಾರ್ಗವಿಲ್ಲ' } },
    { type: 'example', data: {
      tag: 'Real World: Manufacturing Process',
      textEn: '• Raw material -> Machine A -> Machine B -> Machine C -> Final product\n• If the final product quality changes, you want to know how much each machine contributed -- the chain rule answers the identical question for Input -> Layer 1 -> Layer 2 -> Layer 3 -> Loss, determining how a small change at each earlier stage affects the final result',
      textKn: '• Raw material -> Machine A -> Machine B -> Machine C -> Final product\n• ಅಂತಿಮ product ಗುಣಮಟ್ಟ ಬದಲಾದರೆ, ಪ್ರತಿ machine ಎಷ್ಟು ಕೊಡುಗೆ ನೀಡಿತು ಎಂದು ನೀವು ತಿಳಿಯಲು ಬಯಸುತ್ತೀರಿ -- chain rule Input -> Layer 1 -> Layer 2 -> Layer 3 -> Loss ಗೆ ಅದೇ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ, ಪ್ರತಿ ಆರಂಭಿಕ ಹಂತದಲ್ಲಿ ಒಂದು ಚಿಕ್ಕ ಬದಲಾವಣೆ ಅಂತಿಮ ಫಲಿತಾಂಶ ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತಾ',
      table: '' } },
    { type: 'table', data: { captionEn: 'The Chain Rule in AI Systems', captionKn: 'AI Systems ಗಳಲ್ಲಿ Chain Rule',
      rows: 'AI System|Chain Rule Usage\nNeural networks|Gradient calculation\nCNNs|Gradients through convolution layers\nTransformers|Gradients through attention and MLP layers\nRNNs|Gradients through repeated time steps\nDiffusion models|Gradients through denoising networks\nLLMs|Gradient calculation for billions of parameters\nReinforcement learning|Gradients through policy/value networks' } },

    { type: 'heading', data: { textEn: 'Computational Graphs', textKn: 'Computational Graphs', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A computational graph represents calculations as a graph: x1=2, x2=3, a=x1*x2, b=a+1, y=ReLU(b)\n• The graph has two directions: the forward pass moves values (input -> operations -> output), and the backward pass moves gradients (output -> operations -> inputs)\n• This forward/backward structure is the foundation of neural-network training',
      bodyKn: '• ಒಂದು computational graph ಗಣನೆಗಳನ್ನೂ ಒಂದು graph ಆಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ: x1=2, x2=3, a=x1*x2, b=a+1, y=ReLU(b)\n• Graph ಎರಡು ದಿಕ್ಕುಗಳನ್ನೂ ಹೊಂದಿದೆ: forward pass ಮೌಲ್ಯಗಳನ್ನೂ ಚಲಿಸುತ್ತದೆ (input -> operations -> output), ಮತ್ತು backward pass gradients ಗಳನ್ನೂ ಚಲಿಸುತ್ತದೆ (output -> operations -> inputs)\n• ಈ forward/backward ರಚನೆ neural-network training ನ ಅಡಿಪಾಯ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 300 145\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"IBM Plex Mono,monospace\">\n  <rect width=\"300\" height=\"145\" fill=\"#0F1B2D\"/>\n  <rect x=\"15\" y=\"55\" width=\"45\" height=\"28\" rx=\"5\" fill=\"rgba(95,212,214,.1)\" stroke=\"#5FD4D6\"/><text x=\"37\" y=\"73\" text-anchor=\"middle\" font-size=\"11\" fill=\"#5FD4D6\">x1</text>\n  <rect x=\"15\" y=\"100\" width=\"45\" height=\"28\" rx=\"5\" fill=\"rgba(95,212,214,.1)\" stroke=\"#5FD4D6\"/><text x=\"37\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" fill=\"#5FD4D6\">x2</text>\n  <rect x=\"85\" y=\"78\" width=\"35\" height=\"28\" rx=\"5\" fill=\"rgba(244,183,64,.12)\" stroke=\"#F4B740\"/><text x=\"102\" y=\"96\" text-anchor=\"middle\" font-size=\"13\" fill=\"#F4B740\">x</text>\n  <text x=\"66\" y=\"78\" font-size=\"11\" fill=\"#8AA0BD\">-&gt;</text>\n  <text x=\"66\" y=\"115\" font-size=\"11\" fill=\"#8AA0BD\">-&gt;</text>\n  <rect x=\"140\" y=\"78\" width=\"30\" height=\"28\" rx=\"5\" fill=\"rgba(95,212,214,.1)\" stroke=\"#5FD4D6\"/><text x=\"155\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" fill=\"#5FD4D6\">a</text>\n  <text x=\"122\" y=\"96\" font-size=\"11\" fill=\"#8AA0BD\">-&gt;</text>\n  <rect x=\"195\" y=\"78\" width=\"35\" height=\"28\" rx=\"5\" fill=\"rgba(244,183,64,.12)\" stroke=\"#F4B740\"/><text x=\"212\" y=\"96\" text-anchor=\"middle\" font-size=\"13\" fill=\"#F4B740\">+1</text>\n  <text x=\"175\" y=\"96\" font-size=\"11\" fill=\"#8AA0BD\">-&gt;</text>\n  <rect x=\"250\" y=\"78\" width=\"30\" height=\"28\" rx=\"5\" fill=\"rgba(95,212,214,.1)\" stroke=\"#5FD4D6\"/><text x=\"265\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" fill=\"#5FD4D6\">b</text>\n  <text x=\"235\" y=\"96\" font-size=\"11\" fill=\"#8AA0BD\">-&gt;</text>\n  <text x=\"20\" y=\"20\" font-size=\"6.3\" fill=\"#34d399\">forward: values flow left to right -&gt;</text>\n  <text x=\"20\" y=\"140\" font-size=\"6.3\" fill=\"#f87171\">&lt;- backward: gradients flow right to left</text>\n</svg>",
      titleEn: 'x1, x2 -> a -> b -> (ReLU) -> y', titleKn: 'x1, x2 -> a -> b -> (ReLU) -> y',
      captionEn: 'The same graph is walked in both directions -- forward to compute the answer, backward to compute the gradient.',
      captionKn: 'ಅದೇ graph ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ನಡೆಸಲಾಗುತ್ತದೆ -- ಉತ್ತರ ಗಣಿಸಲು forward, gradient ಗಣಿಸಲು backward.' } },

    { type: 'heading', data: { textEn: 'Forward Pass', textKn: 'Forward Pass', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: x1 = 2, x2 = 3\nStep 2: a = x1 * x2 = 6\nStep 3: b = a + 1 = 7\nStep 4: y = ReLU(b) = ReLU(7) = 7', descEn: '• Genuinely verified: a=6, b=7, y=7 -- the model has produced its output', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: a=6, b=7, y=7 -- model ಇದರ output ಉತ್ಪಾದಿಸಿದೆ' } },

    { type: 'heading', data: { textEn: 'Backward Pass', textKn: 'Backward Pass', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: dy/dy = 1 (seed)\nStep 2: y = ReLU(b), b=7>0 so ReLU\'(b)=1  ->  dy/db = 1\nStep 3: b = a + 1, db/da = 1  ->  dy/da = 1\nStep 4: a = x1*x2, da/dx1=x2=3, da/dx2=x1=2\nStep 5: dy/dx1 = 1 x 3 = 3,  dy/dx2 = 1 x 2 = 2', descEn: '• Genuinely verified: dy/dx1=3 and dy/dx2=2, exactly matching -- the chain rule propagated the gradient from the output all the way back to both inputs', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: dy/dx1=3 ಮತ್ತು dy/dx2=2, ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- chain rule gradient ಅನ್ನೂ output ಇಂದ ಎರಡೂ inputs ವರೆಗೆ ಹಿಂತಿರುಗಿ ಹರಡಿತು' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Computational Graphs', headingKn: 'AI Computational Graphs ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• A neural network can contain millions of operations -- instead of manually deriving the entire function, the framework records the operations that occurred during the forward pass, then walks backward through them\n• This makes it possible to automatically calculate gradients for weights, biases, activations, intermediate tensors, and inputs when required -- exactly what systems like PyTorch\'s autograd are designed to do',
      bodyKn: '• ಒಂದು neural network ಲಕ್ಷಾಂತರ operations ಒಳಗೊಂಡಿರಬಹುದು -- ಸಂಪೂರ್ಣ function ಅನ್ನೂ ಕೈಯಾರೆ derive ಮಾಡುವ ಬದಲಿಗೆ, framework forward pass ಸಮಯದಲ್ಲಿ ಸಂಭವಿಸಿದ operations ದಾಖಲಿಸುತ್ತದೆ, ನಂತರ ಅವುಗಳ ಮೂಲಕ ಹಿಮ್ಮುಖವಾಗಿ ನಡೆಯುತ್ತದೆ\n• ಇದೂ ಅಗತ್ಯವಿದ್ದಾಗ weights, biases, activations, intermediate tensors, ಮತ್ತು inputs ಗಳಿಗೆ gradients ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಗಣಿಸಲು ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ -- PyTorch ನ autograd ನಂತಹ systems ವಿನ್ಯಾಸಗೊಂಡಿರುವುದೂ ನಿಖರವಾಗಿ ಇದನ್ನೇ' } },

    { type: 'heading', data: { textEn: 'Forward Mode vs Reverse Mode', textKn: 'Forward Mode vs Reverse Mode', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Forward mode starts at the input and propagates the derivative toward the output\n• Reverse mode starts at the output and propagates the gradient back toward the input',
      bodyKn: '• Forward mode input ನಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಮತ್ತು derivative ಅನ್ನೂ output ಕಡೆಗೆ ಹರಡುತ್ತದೆ\n• Reverse mode output ನಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಮತ್ತು gradient ಅನ್ನೂ input ಕಡೆಗೆ ಹಿಂತಿರುಗಿ ಹರಡುತ್ತದೆ' } },
    { type: 'math', data: { formula: 'Forward mode: x=2, a=x^2, y=sin(a)\nStep 1: seed dx/dx = 1\nStep 2: a = 4, da/dx = 2x = 4\nStep 3: y = sin(4) = -0.7568, dy/dx = cos(a) x da/dx = cos(4) x 4 = -2.6146', descEn: '• Genuinely verified: da/dx=4.0 and dy/dx=-2.6145744834544478 -- forward mode carries the derivative forward alongside the value at every step', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: da/dx=4.0 ಮತ್ತು dy/dx=-2.6145744834544478 -- forward mode ಪ್ರತಿ step ನಲ್ಲಿ ಮೌಲ್ಯದ ಜೊತೆಗೆ derivative ಅನ್ನೂ ಮುಂದಕ್ಕೆ ಒಯ್ಯುತ್ತದೆ' } },
    { type: 'math', data: { formula: 'Reverse mode: same function\nStep 1: seed dy/dy = 1\nStep 2: dy/da = cos(a) = cos(4) = -0.6536\nStep 3: dy/dx = dy/da x da/dx = -0.6536 x 4 = -2.6146', descEn: '• Genuinely verified: dy/da=-0.6536436208636119 and dy/dx=-2.6145744834544478 -- identical final answer to forward mode, reached by walking the graph in the opposite direction', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: dy/da=-0.6536436208636119 ಮತ್ತು dy/dx=-2.6145744834544478 -- forward mode ಗೆ ಒಂದೇ ಅಂತಿಮ ಉತ್ತರ, graph ಅನ್ನೂ ವಿರುದ್ಧ ದಿಕ್ಕಿನಲ್ಲಿ ನಡೆಸುವ ಮೂಲಕ ತಲುಪಲಾಗಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Neural Networks Use Reverse Mode', headingKn: 'Neural Networks Reverse Mode ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತವೆ',
      bodyEn: '• A neural network with 10,000,000 parameters but only 1 loss value has millions of inputs and one output\n• Reverse mode starts with dLoss/dLoss=1 and calculates dLoss/dW1 through dLoss/dW10000000 during a single backward pass -- this is exactly why backpropagation is reverse-mode automatic differentiation',
      bodyKn: '• 10,000,000 parameters ಆದರೆ ಕೇವಲ 1 loss ಮೌಲ್ಯ ಹೊಂದಿರುವ ಒಂದು neural network ಲಕ್ಷಾಂತರ inputs ಮತ್ತು ಒಂದು output ಹೊಂದಿದೆ\n• Reverse mode dLoss/dLoss=1 ಜೊತೆ ಪ್ರಾರಂಭಿಸುತ್ತದೆ ಮತ್ತು ಒಂದೇ backward pass ಸಮಯದಲ್ಲಿ dLoss/dW1 ಇಂದ dLoss/dW10000000 ವರೆಗೆ ಗಣಿಸುತ್ತದೆ -- ಇದೇ ನಿಖರವಾಗಿ backpropagation reverse-mode automatic differentiation ಆಗಿರುವ ಕಾರಣ' } },
    { type: 'table', data: { captionEn: 'Comparison', captionKn: 'ಹೋಲಿಕೆ',
      rows: 'Mode|Direction|Best Use\nForward mode|Input to Output|Few inputs, many outputs\nReverse mode|Output to Input|Many inputs, few outputs\nNeural network training|Reverse|Millions of parameters, one loss' } },
    { type: 'example', data: {
      tag: 'Real World: Testing a Factory',
      textEn: '• Forward question: "You change one machine setting -- what happens to the final product?" That is similar to forward mode\n• Reverse question: "You observe one defective product -- which of the millions of machine settings contributed to this defect?" That is similar to reverse mode -- and for neural-network training, the reverse question is far more useful',
      textKn: '• Forward question: "ನೀವು ಒಂದು machine setting ಬದಲಾಯಿಸುತ್ತೀರಿ -- ಅಂತಿಮ product ಗೆ ಏನಾಗುತ್ತದೆ?" ಇದೂ forward mode ಗೆ ಹೋಲುತ್ತದೆ\n• Reverse question: "ನೀವು ಒಂದು ದೋಷಪೂರಿತ product ಗಮನಿಸುತ್ತೀರಿ -- ಲಕ್ಷಾಂತರ machine settings ಗಳಲ್ಲಿ ಯಾವುದೂ ಈ ದೋಷಕ್ಕೆ ಕೊಡುಗೆ ನೀಡಿತು?" ಇದೂ reverse mode ಗೆ ಹೋಲುತ್ತದೆ -- ಮತ್ತು neural-network training ಗೆ, reverse ಪ್ರಶ್ನೆ ಬಹಳ ಹೆಚ್ಚು ಉಪಯುಕ್ತ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Dual Numbers', textKn: 'Dual Numbers', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Forward-mode differentiation can be implemented using dual numbers, of the form a + b*epsilon where epsilon^2=0\n• A useful interpretation: (value, derivative) -- for example (2, 1) means value=2, derivative=1. Seed the input variable with derivative 1, and the derivative propagates automatically',
      bodyKn: '• Forward-mode differentiation ಅನ್ನೂ dual numbers ಬಳಸಿ ಜಾರಿಗೊಳಿಸಬಹುದು, a + b*epsilon ರೂಪದಲ್ಲಿ epsilon^2=0 ಆಗಿ\n• ಒಂದು ಉಪಯುಕ್ತ ವ್ಯಾಖ್ಯಾನ: (value, derivative) -- ಉದಾಹರಣೆಗೆ (2, 1) ಎಂದರೆ value=2, derivative=1. Input variable ಅನ್ನೂ derivative 1 ಜೊತೆ seed ಮಾಡಿ, ಮತ್ತು derivative ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಹರಡುತ್ತದೆ' } },
    { type: 'math', data: { formula: '(a, a\') + (b, b\') = (a+b, a\'+b\')\n(a, a\') x (b, b\') = (a x b, a\' x b + a x b\')\nsin(a, a\') = (sin(a), cos(a) x a\')', descEn: '', descKn: '' } },

    { type: 'heading', data: { textEn: 'Why AI Uses Automatic Differentiation', textKn: 'AI Automatic Differentiation ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Symbolic vs Numerical vs Automatic', captionKn: 'Symbolic vs Numerical vs Automatic',
      rows: 'Method|Main Idea|AI Use\nSymbolic|Manipulate equations|Mathematics systems\nNumerical|Approximate with finite differences|Gradient checking\nAutomatic|Track exact local derivatives|Neural network training' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Automatic differentiation executes the actual computation while tracking derivatives through the operations, providing accurate derivatives without requiring a human to manually derive the entire neural network\n• Numerical differentiation is useful for checking implementations; automatic differentiation is what you want for actual training',
      bodyKn: '• Automatic differentiation operations ಮೂಲಕ derivatives ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಿರುವಾಗ ವಾಸ್ತವ computation ಚಲಾಯಿಸುತ್ತದೆ, ಒಂದು ಮಾನವ ಸಂಪೂರ್ಣ neural network ಅನ್ನೂ ಕೈಯಾರೆ derive ಮಾಡುವ ಅಗತ್ಯವಿಲ್ಲದೆ ನಿಖರ derivatives ಒದಗಿಸುತ್ತಾ\n• Numerical differentiation implementations ಪರಿಶೀಲಿಸಲು ಉಪಯುಕ್ತ; automatic differentiation ವಾಸ್ತವ training ಗೆ ನಿಮಗೆ ಬೇಕಾದದ್ದೂ' } },

    { type: 'heading', data: { textEn: 'The Architecture of an Autograd Engine', textKn: 'ಒಂದು Autograd Engine ನ Architecture', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Value wrapping: every number stores its value and its gradient\n• Graph recording: every operation records its inputs, the operation itself, and its local derivative\n• Backward pass: the system builds the graph, topologically sorts it, starts from the output, and propagates gradients backward',
      bodyKn: '• Value wrapping: ಪ್ರತಿ ಸಂಖ್ಯೆ ಇದರ value ಮತ್ತು ಇದರ gradient ಸಂಗ್ರಹಿಸುತ್ತದೆ\n• Graph recording: ಪ್ರತಿ operation ಇದರ inputs, operation ಸ್ವತಃ, ಮತ್ತು ಇದರ ಸ್ಥಳೀಯ derivative ದಾಖಲಿಸುತ್ತದೆ\n• Backward pass: system graph ನಿರ್ಮಿಸುತ್ತದೆ, ಇದನ್ನೂ topologically sort ಮಾಡುತ್ತದೆ, output ಇಂದ ಪ್ರಾರಂಭಿಸುತ್ತದೆ, ಮತ್ತು gradients ಗಳನ್ನೂ ಹಿಮ್ಮುಖವಾಗಿ ಹರಡುತ್ತದೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 135\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"260\" height=\"135\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"55\" y=\"18\" width=\"150\" height=\"20\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"31\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Value wrapping</text>\n  <path d=\"M130,38 V46\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"48\" width=\"150\" height=\"20\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"61\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.6\">Graph recording</text>\n  <path d=\"M130,68 V76\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"78\" width=\"150\" height=\"20\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"91\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.6\">Backward pass</text>\n  <path d=\"M130,98 V106\" stroke=\"#475569\"/>\n  <rect x=\"45\" y=\"108\" width=\"170\" height=\"20\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"121\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.2\">Gradients at every node</text>\n</svg>",
      titleEn: 'Three Pieces, One Autograd Engine', titleKn: 'ಮೂರು ತುಣುಕುಗಳು, ಒಂದು Autograd Engine',
      captionEn: 'Every major autodiff framework -- PyTorch, JAX, TensorFlow -- is built from these same three pieces.',
      captionKn: 'ಪ್ರತಿ ಮುಖ್ಯ autodiff framework -- PyTorch, JAX, TensorFlow -- ಈ ಅದೇ ಮೂರು ತುಣುಕುಗಳಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'How PyTorch Uses This Idea', textKn: 'PyTorch ಈ ಕಲ್ಪನೆ ಹೇಗೆ ಬಳಸುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'pytorch_autograd.py',
      headingEn: 'y = x^2 + 3x + 1', headingKn: 'y = x^2 + 3x + 1',
      descEn: 'Genuinely executed below.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import torch\n\nx = torch.tensor(2.0, requires_grad=True)\ny = x ** 2 + 3 * x + 1\ny.backward()\nprint(x.grad)" } },
    { type: 'output', data: { output: "tensor(7.)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches the analytical derivative exactly: dy/dx = 2x + 3, and at x=2, that is 2(2)+3=7\n• PyTorch tracked the operations x**2, 3*x, and their sum, then walked backward through that recorded graph -- nobody told it the formula 2x+3, it derived that automatically\n• The pipeline that matters: Tensor -> operation -> computation graph -> backward() -> gradient -- the exact same three-piece autograd architecture described above, just packaged as a library',
      bodyKn: '• ನಿಜವಾಗಿ analytical derivative ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: dy/dx = 2x + 3, ಮತ್ತು x=2 ನಲ್ಲಿ, ಅದೂ 2(2)+3=7\n• PyTorch x**2, 3*x, ಮತ್ತು ಅವುಗಳ ಮೊತ್ತ operations ಟ್ರ್ಯಾಕ್ ಮಾಡಿತು, ನಂತರ ಆ ದಾಖಲಿಸಿದ graph ಮೂಲಕ ಹಿಮ್ಮುಖವಾಗಿ ನಡೆಯಿತು -- ಯಾರೂ ಇದಕ್ಕೆ formula 2x+3 ಹೇಳಲಿಲ್ಲ, ಇದೂ ಇದನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ derive ಮಾಡಿತು\n• ಮುಖ್ಯವಾದ pipeline: Tensor -> operation -> computation graph -> backward() -> gradient -- ಮೇಲೆ ವಿವರಿಸಿದ ನಿಖರ ಅದೇ ಮೂರು-ತುಣುಕುಗಳ autograd architecture, ಕೇವಲ ಒಂದು library ಆಗಿ ಪ್ಯಾಕೇಜ್ ಮಾಡಲಾಗಿದೆ' } },

    { type: 'concept', data: {
      headingEn: 'AI Applications', headingKn: 'AI Applications',
      bodyEn: '• Automatic differentiation powers deep neural network training, transformer training, CNN training, LLM fine-tuning, diffusion model training, reinforcement learning, meta-learning, neural ODEs, differentiable simulation, and optimization-based AI systems generally',
      bodyKn: '• Automatic differentiation deep neural network training, transformer training, CNN training, LLM fine-tuning, diffusion model training, reinforcement learning, meta-learning, neural ODEs, differentiable simulation, ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ optimization-based AI systems ಗಳನ್ನೂ ಚಲಾಯಿಸುತ್ತದೆ',
      pillsEn: 'deep learning,transformers,CNNs,LLM fine-tuning,diffusion models,reinforcement learning,meta-learning,neural ODEs',
      pillsKn: 'deep learning,transformers,CNNs,LLM fine-tuning,diffusion models,reinforcement learning,meta-learning,neural ODEs' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• The chain rule and computational graphs exist together because a neural network is never one function -- it is a composition, and the only mathematically correct way to differentiate a composition is to multiply local derivatives along the path, exactly as this lesson\'s hand-traced backward pass (dy/dx1=3, dy/dx2=2) demonstrated\n• Forward and reverse mode are not two arbitrary implementation choices -- they are genuinely different algorithms with genuinely different costs, and this lesson\'s side-by-side computation of the same function both ways (both landing on -2.6146) shows they are mathematically equivalent while structurally opposite\n• Reverse mode wins for neural networks specifically because of the many-inputs-one-output shape of the problem -- the same reverse-mode pass that computed dy/dx1 and dy/dx2 in this lesson\'s tiny example scales, unchanged in structure, to a pass that computes gradients for ten million weights\n• PyTorch\'s autograd is not a black box that happens to work -- this lesson\'s hand-check (2x+3=7, matching tensor(7.) exactly) demonstrates that it is executing precisely the value-wrapping, graph-recording, backward-pass architecture built up conceptually across this entire lesson',
      bodyKn: '• Chain rule ಮತ್ತು computational graphs ಒಟ್ಟಿಗೆ ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ ಏಕೆಂದರೆ ಒಂದು neural network ಎಂದಿಗೂ ಒಂದೇ function ಅಲ್ಲ -- ಇದೂ ಒಂದು composition, ಮತ್ತು ಒಂದು composition differentiate ಮಾಡುವ ಏಕೈಕ ಗಣಿತೀಯವಾಗಿ ಸರಿಯಾದ ಮಾರ್ಗ ಪಥದ ಉದ್ದಕ್ಕೂ ಸ್ಥಳೀಯ derivatives ಗುಣಿಸುವುದೂ, ಈ lesson ನ ಕೈ-ಟ್ರೇಸ್ ಮಾಡಿದ backward pass (dy/dx1=3, dy/dx2=2) ನಿಖರವಾಗಿ ಪ್ರದರ್ಶಿಸಿದಂತೆ\n• Forward ಮತ್ತು reverse mode ಎರಡು ಅನಿಯಂತ್ರಿತ implementation ಆಯ್ಕೆಗಳಲ್ಲ -- ಅವು ನಿಜವಾಗಿ ಬೇರೆ ವೆಚ್ಚಗಳ ನಿಜವಾಗಿ ಬೇರೆ algorithms, ಮತ್ತು ಈ lesson ನ ಅದೇ function ಅನ್ನೂ ಎರಡೂ ರೀತಿಯಲ್ಲಿ ಪಕ್ಕದಲ್ಲಿ ಗಣಿಸುವುದೂ (ಎರಡೂ -2.6146 ಮೇಲೆ ಇಳಿಯುತ್ತಾ) ಅವು ಗಣಿತೀಯವಾಗಿ ಸಮಾನ ಆದರೆ ರಚನಾತ್ಮಕವಾಗಿ ವಿರುದ್ಧ ಎಂದು ತೋರಿಸುತ್ತದೆ\n• Reverse mode ನಿರ್ದಿಷ್ಟವಾಗಿ neural networks ಗೆ ಸಮಸ್ಯೆಯ ಅನೇಕ-inputs-ಒಂದು-output ಆಕಾರದ ಕಾರಣ ಗೆಲ್ಲುತ್ತದೆ -- ಈ lesson ನ ಚಿಕ್ಕ ಉದಾಹರಣೆಯಲ್ಲಿ dy/dx1 ಮತ್ತು dy/dx2 ಗಣಿಸಿದ ಅದೇ reverse-mode pass, ರಚನೆಯಲ್ಲಿ ಬದಲಾಗದೆ, ಹತ್ತು ಮಿಲಿಯನ್ weights ಗೆ gradients ಗಣಿಸುವ ಒಂದು pass ಗೆ scale ಆಗುತ್ತದೆ\n• PyTorch ನ autograd ಆಕಸ್ಮಿಕವಾಗಿ ಕೆಲಸ ಮಾಡುವ ಒಂದು black box ಅಲ್ಲ -- ಈ lesson ನ ಕೈ-ಪರಿಶೀಲನೆ (2x+3=7, tensor(7.) ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ) ಇದೂ ಈ ಸಂಪೂರ್ಣ lesson ಆದ್ಯಂತ ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ನಿರ್ಮಿಸಿದ value-wrapping, graph-recording, backward-pass architecture ಅನ್ನೂ ನಿಖರವಾಗಿ ಚಲಾಯಿಸುತ್ತಿದೆ ಎಂದು ಪ್ರದರ್ಶಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• The chain rule multiplies local derivatives along a composition -- genuinely verified for y=sin(x^2) at x=2, matching analytically and numerically at -2.6146\n• A computational graph records the forward pass so the backward pass can walk it in reverse; hand-tracing x1=2, x2=3 through a*=x1*x2, b=a+1, y=ReLU(b) genuinely produced dy/dx1=3 and dy/dx2=2\n• Forward mode propagates derivatives from input to output; reverse mode propagates gradients from output to input -- both genuinely computed the identical answer (-2.6146) for the same function, confirming they are mathematically equivalent\n• Neural networks use reverse mode because they have millions of inputs (parameters) but only one output (the loss) -- reverse mode computes all those gradients in a single backward pass\n• PyTorch\'s autograd genuinely reproduced the hand-derived gradient exactly (7.0 for 2x+3 at x=2), confirming it implements the same value-wrapping, graph-recording, backward-pass architecture described conceptually in this lesson\n• Part 2 builds a miniature autograd engine from scratch using an original Value class, and trains an actual neural network with it',
      bodyKn: '• Chain rule ಒಂದು composition ಉದ್ದಕ್ಕೂ ಸ್ಥಳೀಯ derivatives ಗುಣಿಸುತ್ತದೆ -- x=2 ನಲ್ಲಿ y=sin(x^2) ಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, analytically ಮತ್ತು numerically -2.6146 ನಲ್ಲಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಒಂದು computational graph forward pass ದಾಖಲಿಸುತ್ತದೆ ಆದ್ದರಿಂದ backward pass ಇದನ್ನೂ ವಿಲೋಮವಾಗಿ ನಡೆಸಬಹುದು; a=x1*x2, b=a+1, y=ReLU(b) ಮೂಲಕ x1=2, x2=3 ಕೈ-ಟ್ರೇಸ್ ಮಾಡುವುದೂ ನಿಜವಾಗಿ dy/dx1=3 ಮತ್ತು dy/dx2=2 ಉತ್ಪಾದಿಸಿತು\n• Forward mode derivatives ಗಳನ್ನೂ input ಇಂದ output ಗೆ ಹರಡುತ್ತದೆ; reverse mode gradients ಗಳನ್ನೂ output ಇಂದ input ಗೆ ಹರಡುತ್ತದೆ -- ಎರಡೂ ಅದೇ function ಗೆ ನಿಖರ ಅದೇ ಉತ್ತರ (-2.6146) ನಿಜವಾಗಿ ಗಣಿಸಿದವು, ಅವು ಗಣಿತೀಯವಾಗಿ ಸಮಾನ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ\n• Neural networks reverse mode ಬಳಸುತ್ತವೆ ಅವು ಲಕ್ಷಾಂತರ inputs (parameters) ಆದರೆ ಕೇವಲ ಒಂದು output (loss) ಹೊಂದಿರುವ ಕಾರಣ -- reverse mode ಆ ಎಲ್ಲಾ gradients ಗಳನ್ನೂ ಒಂದೇ backward pass ನಲ್ಲಿ ಗಣಿಸುತ್ತದೆ\n• PyTorch ನ autograd ಕೈ-derive ಮಾಡಿದ gradient ಅನ್ನೂ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಮರುಉತ್ಪಾದಿಸಿತು (x=2 ನಲ್ಲಿ 2x+3 ಗೆ 7.0), ಈ lesson ನಲ್ಲಿ ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ವಿವರಿಸಿದ ಅದೇ value-wrapping, graph-recording, backward-pass architecture ಜಾರಿಗೊಳಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ\n• Part 2 ಒಂದು original Value class ಬಳಸಿ ಒಂದು ಚಿಕ್ಕ autograd engine ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸುತ್ತದೆ, ಮತ್ತು ಇದರೊಂದಿಗೆ ಒಂದು ನಿಜ neural network ತರಬೇತಿ ನೀಡುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely verified for y=sin(x^2) at x=2: what is dy/dx?', qKn: 'x=2 ನಲ್ಲಿ y=sin(x^2) ಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: dy/dx ಏನೂ?',
        opts: ['4.0', 'Approximately -2.6146, confirmed both analytically (cos(4)*4) and numerically', 'sin(4)', '0'], correct: 1,
        optsKn: ['4.0', 'ಸುಮಾರು -2.6146, analytically (cos(4)*4) ಮತ್ತು numerically ಎರಡೂ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'sin(4)', '0'] },
      { q: 'For the computational graph x1=2, x2=3, a=x1*x2, b=a+1, y=ReLU(b), what did the genuinely hand-traced backward pass produce for dy/dx1 and dy/dx2?', qKn: 'x1=2, x2=3, a=x1*x2, b=a+1, y=ReLU(b) computational graph ಗೆ, ನಿಜವಾಗಿ ಕೈ-ಟ್ರೇಸ್ ಮಾಡಿದ backward pass dy/dx1 ಮತ್ತು dy/dx2 ಗೆ ಏನೂ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['dy/dx1=2, dy/dx2=3', 'dy/dx1=3, dy/dx2=2, matching x2 and x1 respectively because a=x1*x2', 'dy/dx1=0, dy/dx2=0', 'dy/dx1=7, dy/dx2=7'], correct: 1,
        optsKn: ['dy/dx1=2, dy/dx2=3', 'dy/dx1=3, dy/dx2=2, a=x1*x2 ಆಗಿರುವ ಕಾರಣ ಕ್ರಮವಾಗಿ x2 ಮತ್ತು x1 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'dy/dx1=0, dy/dx2=0', 'dy/dx1=7, dy/dx2=7'] },
      { q: 'Why do neural networks primarily use reverse-mode automatic differentiation rather than forward mode?', qKn: 'Neural networks forward mode ಗಿಂತ ಪ್ರಾಥಮಿಕವಾಗಿ reverse-mode automatic differentiation ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತವೆ?',
        opts: ['Forward mode cannot compute gradients at all', 'Neural networks have millions of inputs (parameters) but only one output (loss), and reverse mode computes gradients for all inputs in a single backward pass, which is far more efficient in that regime', 'Reverse mode is easier to implement in Python', 'Forward mode only works for linear functions'], correct: 1,
        optsKn: ['Forward mode ಗ್ರೇಡಿಯಂಟ್‌ಗಳನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಗಣಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'Neural networks ಲಕ್ಷಾಂತರ inputs (parameters) ಆದರೆ ಕೇವಲ ಒಂದು output (loss) ಹೊಂದಿವೆ, ಮತ್ತು reverse mode ಎಲ್ಲಾ inputs ಗಳಿಗೆ gradients ಗಳನ್ನೂ ಒಂದೇ backward pass ನಲ್ಲಿ ಗಣಿಸುತ್ತದೆ, ಆ ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಇದೂ ಬಹಳ ಹೆಚ್ಚು ಸಮರ್ಥ', 'Reverse mode Python ನಲ್ಲಿ ಜಾರಿಗೊಳಿಸಲು ಸುಲಭ', 'Forward mode ಕೇವಲ linear functions ಗೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
      { q: 'What did genuinely running the PyTorch autograd example for y=x^2+3x+1 at x=2 confirm?', qKn: 'x=2 ನಲ್ಲಿ y=x^2+3x+1 ಗೆ PyTorch autograd ಉದಾಹರಣೆ ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಏನೂ ದೃಢಪಡಿಸಿತು?',
        opts: ['x.grad returned an error', 'x.grad returned exactly 7.0, matching the analytical derivative 2x+3 evaluated at x=2', 'x.grad returned 2.0, matching x itself', 'PyTorch required the formula to be typed in manually'], correct: 1,
        optsKn: ['x.grad ಒಂದು error ಹಿಂತಿರುಗಿಸಿತು', 'x.grad ನಿಖರವಾಗಿ 7.0 ಹಿಂತಿರುಗಿಸಿತು, x=2 ನಲ್ಲಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿದ analytical derivative 2x+3 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'x.grad 2.0 ಹಿಂತಿರುಗಿಸಿತು, x ಸ್ವತಃ ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'PyTorch ಗೆ formula ಕೈಯಾರೆ ಟೈಪ್ ಮಾಡಬೇಕಾಗಿತ್ತು'] },
      { q: 'What are the three core pieces of a minimal autograd engine, according to this lesson?', qKn: 'ಈ lesson ಪ್ರಕಾರ, ಒಂದು ಕನಿಷ್ಠ autograd engine ನ ಮೂರು ಮುಖ್ಯ ತುಣುಕುಗಳು ಏನೂ?',
        opts: ['Loss function, optimizer, and learning rate', 'Value wrapping, graph recording, and a backward pass that propagates gradients', 'Forward mode, symbolic differentiation, and numerical differentiation', 'Convolution, pooling, and activation'], correct: 1,
        optsKn: ['Loss function, optimizer, ಮತ್ತು learning rate', 'Value wrapping, graph recording, ಮತ್ತು gradients ಗಳನ್ನೂ ಹರಡುವ ಒಂದು backward pass', 'Forward mode, symbolic differentiation, ಮತ್ತು numerical differentiation', 'Convolution, pooling, ಮತ್ತು activation'] },
    ] } },
  ],
};
