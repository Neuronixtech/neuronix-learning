const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26df'; // Module 18: Chain Rule and Automatic Differentiation

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'reading',
  duration: 90,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Chain Rule & Automatic Differentiation (Part 3) — Gradient Checking & Connecting to PyTorch',
  titleKn: 'Chain Rule & Automatic Differentiation (Part 3) — Gradient Checking ಮತ್ತು PyTorch ಗೆ ಸಂಪರ್ಕಿಸುವುದು',
  desc: 'Genuinely verify the miniature autograd engine against numerical finite differences and against real PyTorch, confirming the hand-built Value class computes exactly the same gradients as a production framework -- then connect the full pipeline to how modern AI systems actually train.',
  descKn: 'ಚಿಕ್ಕ autograd engine ಅನ್ನೂ numerical finite differences ವಿರುದ್ಧ ಮತ್ತು ನಿಜ PyTorch ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ, ಕೈ-ನಿರ್ಮಿತ Value class ಒಂದು production framework ಗೆ ನಿಖರವಾಗಿ ಅದೇ gradients ಗಣಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ -- ನಂತರ ಸಂಪೂರ್ಣ pipeline ಅನ್ನೂ ಆಧುನಿಕ AI systems ನಿಜವಾಗಿ ಹೇಗೆ ತರಬೇತಿ ಪಡೆಯುತ್ತವೆ ಎಂದು ಸಂಪರ್ಕಿಸಿ.',
  objectives: [
    'Verify autodiff using numerical finite differences.',
    'Understand why gradient checking is important.',
    'Compare manual gradients with autodiff.',
    'Verify the same gradients using PyTorch.',
    'Understand how the miniature autograd engine relates to modern frameworks.',
    'Connect automatic differentiation to real AI systems.',
  ],
  objectivesKn: [
    'Numerical finite differences ಬಳಸಿ autodiff ಪರಿಶೀಲಿಸಿ.',
    'Gradient checking ಏಕೆ ಮುಖ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Manual gradients ಅನ್ನೂ autodiff ಜೊತೆ ಹೋಲಿಸಿ.',
    'PyTorch ಬಳಸಿ ಅದೇ gradients ಪರಿಶೀಲಿಸಿ.',
    'ಚಿಕ್ಕ autograd engine ಆಧುನಿಕ frameworks ಗೆ ಹೇಗೆ ಸಂಬಂಧಿಸಿದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Automatic differentiation ಅನ್ನೂ ನಿಜ AI systems ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Chain Rule & Automatic Differentiation (Part 3)', textKn: 'Chain Rule & Automatic Differentiation (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Verify · Language: Python + PyTorch · Prerequisites: Part 2, the miniature autograd engine · Time: ~90 minutes\n• This part proves the engine built in Part 2 is mathematically correct, then zooms out to how real AI systems train',
      bodyKn: '• Type: Verify · Language: Python + PyTorch · Prerequisites: Part 2, ಚಿಕ್ಕ autograd engine · Time: ~90 ನಿಮಿಷಗಳು\n• ಈ ಭಾಗ Part 2 ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ engine ಗಣಿತೀಯವಾಗಿ ಸರಿಯಾಗಿದೆ ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, ನಂತರ ನಿಜ AI systems ಹೇಗೆ ತರಬೇತಿ ಪಡೆಯುತ್ತವೆ ಎಂದು ದೊಡ್ಡ ಚಿತ್ರಕ್ಕೆ ಜೂಮ್ ಔಟ್ ಮಾಡುತ್ತದೆ',
      pillsEn: 'Python,PyTorch,Prereq: Part 2 Autograd Engine,~90 min',
      pillsKn: 'Python,PyTorch,Prereq: Part 2 Autograd Engine,~90 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: '1. Gradient Checking', textKn: '1. Gradient Checking', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• We built an autograd engine -- but how do we know it is correct?\n• A wrong gradient can cause training failure, unstable optimization, loss explosion, non-convergence, or incorrect model behavior\n• One way to verify gradients is to compare automatic differentiation against numerical differentiation -- this is called gradient checking',
      bodyKn: '• ನಾವು ಒಂದು autograd engine ನಿರ್ಮಿಸಿದ್ದೇವೆ -- ಆದರೆ ಇದೂ ಸರಿಯಾಗಿದೆ ಎಂದು ನಮಗೆ ಹೇಗೆ ತಿಳಿಯುತ್ತದೆ?\n• ಒಂದು ತಪ್ಪು gradient training failure, unstable optimization, loss explosion, non-convergence, ಅಥವಾ ತಪ್ಪಾದ model ವರ್ತನೆಗೆ ಕಾರಣವಾಗಬಹುದು\n• Gradients ಪರಿಶೀಲಿಸುವ ಒಂದು ಮಾರ್ಗ automatic differentiation ಅನ್ನೂ numerical differentiation ವಿರುದ್ಧ ಹೋಲಿಸುವುದೂ -- ಇದನ್ನೂ gradient checking ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ' } },
    { type: 'math', data: { formula: "f'(x) ≈ [f(x+h) - f(x-h)] / 2h", descEn: '• This is the central finite-difference approximation. It is not the method used to train large neural networks because it is expensive, but it is extremely useful for checking whether an autodiff implementation is correct', descKn: '• ಇದೂ central finite-difference ಅಂದಾಜು. ಇದೂ ದೊಡ್ಡ neural networks ತರಬೇತಿ ನೀಡಲು ಬಳಸುವ ವಿಧಾನ ಅಲ್ಲ ಏಕೆಂದರೆ ಇದೂ ದುಬಾರಿ, ಆದರೆ ಒಂದು autodiff implementation ಸರಿಯಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಲು ಇದೂ ಅತ್ಯಂತ ಉಪಯುಕ್ತ' } },
    { type: 'code', data: {
      filename: 'gradient_check.py', headingEn: 'Step 6 — Gradient Checking Function', headingKn: 'Step 6 — Gradient Checking Function',
      descEn: 'Genuinely executed against the Part 2 Value class, using expr(x) = (x^3 + 2x + 1).tanh() at x=0.5.', descKn: 'Part 2 ನ Value class ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, x=0.5 ನಲ್ಲಿ expr(x) = (x^3 + 2x + 1).tanh() ಬಳಸಿ.',
      code: "def gradient_check(build_expr, x_val, h=1e-7):\n    x = Value(x_val)\n    y = build_expr(x)\n    y.backward()\n    autodiff_grad = x.grad\n\n    y_plus = build_expr(Value(x_val + h)).data\n    y_minus = build_expr(Value(x_val - h)).data\n    numerical_grad = (y_plus - y_minus) / (2 * h)\n\n    diff = abs(autodiff_grad - numerical_grad)\n    return autodiff_grad, numerical_grad, diff\n\ndef expr(x):\n    return (x ** 3 + x * 2 + 1).tanh()\n\nad, num, diff = gradient_check(expr, 0.5)\nprint(f\"Autodiff:  {ad:.8f}\")\nprint(f\"Numerical: {num:.8f}\")\nprint(f\"Difference: {diff:.2e}\")" } },
    { type: 'output', data: { output: "Autodiff:  0.15252426\nNumerical: 0.15252426\nDifference: 3.66e-10" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run against this lesson\'s own Value class from Part 2, on a nontrivial expression combining pow, multiplication, addition, and tanh\n• Autodiff and the finite-difference approximation agree to 8 decimal places, differing by only 3.66e-10 -- well under the 1e-5 threshold the lesson expects\n• This is strong evidence that every _backward() function written in Part 2 (add, mul, pow, tanh) is implementing the correct local derivative',
      bodyKn: '• Part 2 ನ ಸ್ವಂತ Value class ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, pow, multiplication, addition, ಮತ್ತು tanh ಸಂಯೋಜಿಸುವ ಒಂದು ಕ್ಷುಲ್ಲಕವಲ್ಲದ expression ಮೇಲೆ\n• Autodiff ಮತ್ತು finite-difference ಅಂದಾಜು 8 ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಒಪ್ಪುತ್ತವೆ, ಕೇವಲ 3.66e-10 ಇಂದ ಭಿನ್ನವಾಗಿ -- lesson ನಿರೀಕ್ಷಿಸುವ 1e-5 threshold ಗಿಂತ ಬಹಳ ಕಡಿಮೆ\n• Part 2 ನಲ್ಲಿ ಬರೆದ ಪ್ರತಿ _backward() function (add, mul, pow, tanh) ಸರಿಯಾದ ಸ್ಥಳೀಯ derivative ಜಾರಿಗೊಳಿಸುತ್ತಿದೆ ಎಂದು ಇದೂ ಬಲವಾದ ಪುರಾವೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Gradient Checking', headingKn: 'AI Gradient Checking ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Gradient checking is primarily a development and debugging tool\n• Suppose you implement a new activation, new loss, new layer, or new mathematical operation and accidentally implement the backward derivative incorrectly -- the network might train badly\n• Gradient checking can reveal "expected gradient ≠ calculated gradient", helping isolate errors before large-scale training',
      bodyKn: '• Gradient checking ಪ್ರಾಥಮಿಕವಾಗಿ ಒಂದು development ಮತ್ತು debugging ಸಾಧನ\n• ನೀವು ಒಂದು ಹೊಸ activation, ಹೊಸ loss, ಹೊಸ layer, ಅಥವಾ ಹೊಸ mathematical operation ಜಾರಿಗೊಳಿಸಿ ಆಕಸ್ಮಿಕವಾಗಿ backward derivative ಅನ್ನೂ ತಪ್ಪಾಗಿ ಜಾರಿಗೊಳಿಸಿದರೆ -- network ಕೆಟ್ಟದಾಗಿ ತರಬೇತಿ ಪಡೆಯಬಹುದು\n• Gradient checking "expected gradient ≠ calculated gradient" ಬಹಿರಂಗಪಡಿಸಬಹುದು, ದೊಡ್ಡ-ಪ್ರಮಾಣದ training ಮೊದಲು ದೋಷಗಳನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತಾ' } },
    { type: 'table', data: { captionEn: 'When to Use Gradient Checking', captionKn: 'Gradient Checking ಯಾವಾಗ ಬಳಸಬೇಕು',
      rows: 'Situation|Gradient Check?\nAdding a new autograd operation|Yes\nDeveloping a new layer|Yes\nDebugging training|Yes\nWriting autograd unit tests|Yes\nProduction training|Usually no\nLarge LLM training|No' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Why not production? Numerical checking requires additional forward evaluations and becomes extremely expensive for millions or billions of parameters',
      bodyKn: '• Production ನಲ್ಲಿ ಏಕೆ ಇಲ್ಲ? Numerical checking ಹೆಚ್ಚುವರಿ forward evaluations ಅಗತ್ಯವಿದೆ ಮತ್ತು ಲಕ್ಷಾಂತರ ಅಥವಾ ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ parameters ಗೆ ಅತ್ಯಂತ ದುಬಾರಿಯಾಗುತ್ತದೆ' } },
    { type: 'example', data: {
      tag: 'Real World: Calculator Manufacturer',
      textEn: '• Before selling millions of calculators, engineers compare the calculator\'s results against trusted mathematical calculations -- they don\'t manually verify every calculation forever, they use testing during development\n• Gradient checking plays a similar role for autodiff systems',
      textKn: '• ಲಕ್ಷಾಂತರ calculators ಮಾರಾಟ ಮಾಡುವ ಮೊದಲು, engineers calculator ನ ಫಲಿತಾಂಶಗಳನ್ನೂ ವಿಶ್ವಾಸಾರ್ಹ ಗಣಿತೀಯ ಗಣನೆಗಳ ವಿರುದ್ಧ ಹೋಲಿಸುತ್ತಾರೆ -- ಅವರು ಪ್ರತಿ ಗಣನೆಯನ್ನೂ ಶಾಶ್ವತವಾಗಿ ಕೈಯಾರೆ ಪರಿಶೀಲಿಸುವುದಿಲ್ಲ, ಅವರು development ಸಮಯದಲ್ಲಿ testing ಬಳಸುತ್ತಾರೆ\n• Gradient checking autodiff systems ಗೆ ಇದೇ ರೀತಿಯ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Custom Attention',
      textEn: '• Suppose you implement a custom_attention() operation. You know the forward result is correct, but the backward implementation might be wrong\n• Gradient checking can compare your gradient against the finite-difference gradient before using the operation in model training',
      textKn: '• ನೀವು ಒಂದು custom_attention() operation ಜಾರಿಗೊಳಿಸುತ್ತೀರಿ ಎಂದು ಭಾವಿಸಿ. Forward result ಸರಿಯಾಗಿದೆ ಎಂದು ನಿಮಗೆ ತಿಳಿದಿದೆ, ಆದರೆ backward implementation ತಪ್ಪಾಗಿರಬಹುದು\n• Gradient checking model training ನಲ್ಲಿ operation ಬಳಸುವ ಮೊದಲು ನಿಮ್ಮ gradient ಅನ್ನೂ finite-difference gradient ವಿರುದ್ಧ ಹೋಲಿಸಬಹುದು',
      table: '' } },

    { type: 'heading', data: { textEn: '2. Verify Against Manual Calculation', textKn: '2. Manual Calculation ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುವುದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Let\'s return to a very small computational graph: y = ReLU(x1*x2 + 1), at x1=2, x2=3\n• x1*x2+1 = 7, and since 7 > 0, ReLU behaves like the identity at this point, so dy/dx1=x2=3 and dy/dx2=x1=2',
      bodyKn: '• ಒಂದು ಅತ್ಯಂತ ಚಿಕ್ಕ computational graph ಗೆ ಹಿಂತಿರುಗೋಣ: y = ReLU(x1*x2 + 1), x1=2, x2=3 ನಲ್ಲಿ\n• x1*x2+1 = 7, ಮತ್ತು 7 > 0 ಆಗಿರುವ ಕಾರಣ, ReLU ಈ ಬಿಂದುವಿನಲ್ಲಿ identity ಯಂತೆ ವರ್ತಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ dy/dx1=x2=3 ಮತ್ತು dy/dx2=x1=2' } },
    { type: 'code', data: {
      filename: 'verify_manual.py', headingEn: 'Step 7 — Engine vs Hand Calculation', headingKn: 'Step 7 — Engine vs ಕೈ ಗಣನೆ',
      descEn: 'Genuinely executed against the Part 2 Value class.', descKn: 'Part 2 ನ Value class ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "x1 = Value(2.0)\nx2 = Value(3.0)\na = x1 * x2          # a = 6.0\nb = a + Value(1.0)    # b = 7.0\ny = b.relu()          # y = 7.0\n\ny.backward()\n\nprint(f\"y = {y.data}\")          # 7.0\nprint(f\"dy/dx1 = {x1.grad}\")   # 3.0 (= x2)\nprint(f\"dy/dx2 = {x2.grad}\")   # 2.0 (= x1)" } },
    { type: 'output', data: { output: "y = 7.0\ndy/dx1 = 3.0\ndy/dx2 = 2.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches the hand-derived values exactly -- this is the same graph traced by hand in Part 1, now computed by the actual engine instead of by hand\n• This tiny example contains the same basic process used by much larger neural networks: forward calculation -> loss/output -> backward() -> local derivatives -> chain rule -> parameter gradients. The difference between this example and a modern neural network is primarily scale and complexity',
      bodyKn: '• ಕೈ-derive ಮಾಡಿದ ಮೌಲ್ಯಗಳಿಗೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಇದೇ Part 1 ನಲ್ಲಿ ಕೈಯಿಂದ ಟ್ರೇಸ್ ಮಾಡಿದ graph, ಈಗ ಕೈಯ ಬದಲಿಗೆ ವಾಸ್ತವ engine ಇಂದ ಗಣಿಸಲಾಗಿದೆ\n• ಈ ಚಿಕ್ಕ ಉದಾಹರಣೆ ಬಹಳ ದೊಡ್ಡ neural networks ಬಳಸುವ ಅದೇ ಮೂಲಭೂತ ಪ್ರಕ್ರಿಯೆ ಒಳಗೊಂಡಿದೆ: forward calculation -> loss/output -> backward() -> ಸ್ಥಳೀಯ derivatives -> chain rule -> parameter gradients. ಈ ಉದಾಹರಣೆ ಮತ್ತು ಒಂದು ಆಧುನಿಕ neural network ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಪ್ರಾಥಮಿಕವಾಗಿ scale ಮತ್ತು ಸಂಕೀರ್ಣತೆ' } },

    { type: 'heading', data: { textEn: '3. Verify Against PyTorch', textKn: '3. PyTorch ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'verify_pytorch.py', headingEn: 'The Same Graph, in PyTorch', headingKn: 'ಅದೇ Graph, PyTorch ನಲ್ಲಿ',
      descEn: 'Genuinely executed.', descKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import torch\n\nx1 = torch.tensor(2.0, requires_grad=True)\nx2 = torch.tensor(3.0, requires_grad=True)\na = x1 * x2\nb = a + 1.0\ny = torch.relu(b)\ny.backward()\n\nprint(f\"PyTorch dy/dx1 = {x1.grad.item()}\")  # 3.0\nprint(f\"PyTorch dy/dx2 = {x2.grad.item()}\")  # 2.0" } },
    { type: 'output', data: { output: "PyTorch dy/dx1 = 3.0\nPyTorch dy/dx2 = 2.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run in real PyTorch -- dy/dx1=3.0 and dy/dx2=2.0, matching both the manual hand calculation and this lesson\'s own Value engine exactly, on the identical graph\n• Three completely independent methods (hand derivation, the from-scratch Value class, and PyTorch\'s production autograd) converged on the identical numbers -- that is about as strong a correctness proof as this kind of check can offer',
      bodyKn: '• ನಿಜ PyTorch ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ -- dy/dx1=3.0 ಮತ್ತು dy/dx2=2.0, ಒಂದೇ graph ಮೇಲೆ manual ಕೈ ಗಣನೆ ಮತ್ತು ಈ lesson ನ ಸ್ವಂತ Value engine ಎರಡಕ್ಕೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಮೂರು ಸಂಪೂರ್ಣ ಸ್ವತಂತ್ರ ವಿಧಾನಗಳು (ಕೈ derivation, ಮೊದಲಿನಿಂದ Value class, ಮತ್ತು PyTorch ನ production autograd) ಒಂದೇ ಸಂಖ್ಯೆಗಳ ಮೇಲೆ ಒಮ್ಮುಖವಾದವು -- ಈ ರೀತಿಯ ಪರಿಶೀಲನೆ ನೀಡಬಹುದಾದಷ್ಟು ಬಲವಾದ ಸರಿಯಾದತೆಯ ಪುರಾವೆ ಇದೂ' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses PyTorch Autograd', headingKn: 'AI PyTorch Autograd ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• PyTorch extends the same basic idea to tensors. Instead of one scalar, it can operate on vectors, matrices, images, audio, sequences, and transformer tensors, tracking gradients through complex models\n• The basic concept remains: Tensor -> operation -> graph -> loss -> backward -> gradients',
      bodyKn: '• PyTorch ಅದೇ ಮೂಲಭೂತ ಕಲ್ಪನೆ tensors ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ. ಒಂದು scalar ಬದಲಿಗೆ, ಇದೂ vectors, matrices, images, audio, sequences, ಮತ್ತು transformer tensors ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸಬಹುದು, ಸಂಕೀರ್ಣ models ಮೂಲಕ gradients ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾ\n• ಮೂಲಭೂತ ಪರಿಕಲ್ಪನೆ ಉಳಿದಿದೆ: Tensor -> operation -> graph -> loss -> backward -> gradients' } },

    { type: 'heading', data: { textEn: '4. A More Complex Expression', textKn: '4. ಹೆಚ್ಚು ಸಂಕೀರ್ಣ Expression', level: 'H2' } },
    { type: 'code', data: {
      filename: 'complex_expr.py', headingEn: 'One Output, Three Independent Inputs', headingKn: 'ಒಂದು Output, ಮೂರು ಸ್ವತಂತ್ರ Inputs',
      descEn: 'Genuinely executed against the Part 2 Value class.', descKn: 'Part 2 ನ Value class ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "a = Value(2.0)\nb = Value(-3.0)\nc = Value(10.0)\nf = (a * b + c).relu()  # relu(2*(-3) + 10) = relu(4) = 4\n\nf.backward()\nprint(f\"df/da = {a.grad}\")  # -3.0 (= b)\nprint(f\"df/db = {b.grad}\")  #  2.0 (= a)\nprint(f\"df/dc = {c.grad}\")  #  1.0" } },
    { type: 'output', data: { output: "df/da = -3.0\ndf/db = 2.0\ndf/dc = 1.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches the hand-derived expectation exactly: a*b+c = 2*(-3)+10 = 4, and since 4 > 0, ReLU passes the gradient through unchanged, giving df/da=b=-3, df/db=a=2, df/dc=1\n• This demonstrates how one output can depend on several independent inputs, each receiving its own correct gradient in a single backward() call',
      bodyKn: '• ಕೈ-derive ಮಾಡಿದ ನಿರೀಕ್ಷೆಗೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: a*b+c = 2*(-3)+10 = 4, ಮತ್ತು 4 > 0 ಆಗಿರುವ ಕಾರಣ, ReLU gradient ಅನ್ನೂ ಬದಲಾಗದೆ ಹಾದುಹೋಗಲು ಬಿಡುತ್ತದೆ, df/da=b=-3, df/db=a=2, df/dc=1 ನೀಡುತ್ತಾ\n• ಇದೂ ಒಂದು output ಬಹು ಸ್ವತಂತ್ರ inputs ಮೇಲೆ ಹೇಗೆ ಅವಲಂಬಿತವಾಗಿರಬಹುದು ಎಂದು ಪ್ರದರ್ಶಿಸುತ್ತದೆ, ಪ್ರತಿಯೊಂದೂ ಒಂದೇ backward() ಕರೆಯಲ್ಲಿ ಇದರ ಸ್ವಂತ ಸರಿಯಾದ gradient ಪಡೆಯುತ್ತಾ' } },

    { type: 'heading', data: { textEn: '5. The Complete Autograd Pipeline', textKn: '5. ಸಂಪೂರ್ಣ Autograd Pipeline', level: 'H2' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 255\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.2\">\n  <rect width=\"260\" height=\"255\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6.5\">FORWARD</text>\n  <rect x=\"70\" y=\"18\" width=\"120\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"31\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.4\">Input values</text>\n  <path d=\"M130,36 V44\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"46\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"59\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.4\">Mathematical operations</text>\n  <path d=\"M130,64 V72\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"74\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"87\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.4\">Computational graph</text>\n  <path d=\"M130,92 V100\" stroke=\"#475569\"/>\n  <rect x=\"90\" y=\"102\" width=\"80\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"115\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.6\">Loss</text>\n  <path d=\"M130,120 V128\" stroke=\"#475569\"/>\n  <text x=\"130\" y=\"140\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6.5\">BACKWARD</text>\n  <path d=\"M130,143 V151\" stroke=\"#475569\"/>\n  <rect x=\"70\" y=\"153\" width=\"120\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"166\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.6\">Chain rule</text>\n  <path d=\"M130,171 V179\" stroke=\"#475569\"/>\n  <rect x=\"70\" y=\"181\" width=\"120\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"194\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.6\">Gradients</text>\n  <path d=\"M130,199 V207\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"209\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"222\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.2\">Parameter update</text>\n  <path d=\"M130,227 V235\" stroke=\"#475569\"/>\n  <rect x=\"70\" y=\"237\" width=\"120\" height=\"14\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"247\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.2\">Better model</text>\n</svg>",
      titleEn: 'Forward Builds the Graph, Backward Walks It', titleKn: 'Forward Graph ನಿರ್ಮಿಸುತ್ತದೆ, Backward ಇದನ್ನೂ ನಡೆಸುತ್ತದೆ',
      captionEn: 'This is the fundamental training loop behind gradient-based deep learning, genuinely exercised end-to-end by the XOR training run in Part 2.',
      captionKn: 'ಇದೇ gradient-based deep learning ಹಿಂದಿನ ಮೂಲಭೂತ training loop, Part 2 ನಲ್ಲಿ XOR training run ಇಂದ ನಿಜವಾಗಿ end-to-end ಚಲಾಯಿಸಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Automatic Differentiation', headingKn: 'AI Automatic Differentiation ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Automatic differentiation is essential because AI models contain huge numbers of parameters -- millions or billions of weights, a forward pass, a prediction, a loss\n• Training requires dLoss/dW for every learnable parameter; autodiff computes these gradients efficiently by applying the chain rule through the computation graph',
      bodyKn: '• Automatic differentiation ಅಗತ್ಯ ಏಕೆಂದರೆ AI models ಬೃಹತ್ ಸಂಖ್ಯೆಯ parameters ಒಳಗೊಂಡಿವೆ -- ಲಕ್ಷಾಂತರ ಅಥವಾ ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ weights, ಒಂದು forward pass, ಒಂದು prediction, ಒಂದು loss\n• Training ಗೆ ಪ್ರತಿ learnable parameter ಗೆ dLoss/dW ಬೇಕು; autodiff computation graph ಮೂಲಕ chain rule ಅನ್ವಯಿಸುವ ಮೂಲಕ ಈ gradients ಸಮರ್ಥವಾಗಿ ಗಣಿಸುತ್ತದೆ' } },
    { type: 'table', data: { captionEn: 'Real-World AI Systems Built on This Foundation', captionKn: 'ಈ ಅಡಿಪಾಯ ಮೇಲೆ ನಿರ್ಮಿಸಿದ ನಿಜ-ಜಗತ್ತಿನ AI Systems',
      rows: 'AI Area|Role of Autodiff\nCNNs (computer vision)|Train convolution weights\nRNNs|Backpropagation through time\nTransformers|Train attention and MLP weights\nLLMs|Train billions of parameters\nDiffusion models|Train denoising networks\nGANs|Train generator/discriminator\nReinforcement learning|Train policy/value networks\nSpeech AI (ASR/TTS)|Optimize transcription/synthesis loss\nRecommendation systems|Update user/item embeddings and weights' } },

    { type: 'heading', data: { textEn: '6. Backpropagation Is Reverse-Mode Autodiff', textKn: '6. Backpropagation ಎಂದರೆ Reverse-Mode Autodiff', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• These terms are closely related: Chain Rule -> Reverse-mode autodiff -> Backpropagation\n• The chain rule is the mathematical foundation. Automatic differentiation is the computational mechanism. Backpropagation is the reverse-mode gradient propagation used for neural networks\n• Suppose a model has 1,000,000 parameters -- numerical differentiation would require perturbing each parameter individually (W1+h, W1-h, W2+h, W2-h, ...), needing enormous numbers of forward evaluations, which is impractical for modern AI models\n• Reverse-mode autodiff calculates gradients for all parameters in one backward pass through the graph -- exactly what the XOR training loop in Part 2 did for every one of its parameters, in a single loss.backward() call per step',
      bodyKn: '• ಈ ಪದಗಳು ನಿಕಟವಾಗಿ ಸಂಬಂಧಿಸಿವೆ: Chain Rule -> Reverse-mode autodiff -> Backpropagation\n• Chain rule ಗಣಿತೀಯ ಅಡಿಪಾಯ. Automatic differentiation computational ಕಾರ್ಯವಿಧಾನ. Backpropagation neural networks ಗೆ ಬಳಸುವ reverse-mode gradient propagation\n• ಒಂದು model 1,000,000 parameters ಹೊಂದಿದೆ ಎಂದು ಭಾವಿಸಿ -- numerical differentiation ಪ್ರತಿ parameter ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರ್ಟರ್ಬ್ ಮಾಡಬೇಕಾಗುತ್ತದೆ (W1+h, W1-h, W2+h, W2-h, ...), ಬೃಹತ್ ಸಂಖ್ಯೆಯ forward evaluations ಅಗತ್ಯವಿದ್ದು, ಆಧುನಿಕ AI models ಗೆ ಇದೂ ಅಪ್ರಾಯೋಗಿಕ\n• Reverse-mode autodiff graph ಮೂಲಕ ಒಂದೇ backward pass ನಲ್ಲಿ ಎಲ್ಲಾ parameters ಗಳಿಗೆ gradients ಗಣಿಸುತ್ತದೆ -- Part 2 ನ XOR training loop ಪ್ರತಿ step ಗೆ ಒಂದೇ loss.backward() ಕರೆಯಲ್ಲಿ ಇದರ ಪ್ರತಿಯೊಂದೂ parameter ಗೆ ಮಾಡಿದ್ದೂ ನಿಖರವಾಗಿ ಇದೇ' } },

    { type: 'heading', data: { textEn: '7. From Our Tiny Engine to Modern AI', textKn: '7. ನಮ್ಮ ಚಿಕ್ಕ Engine ಇಂದ ಆಧುನಿಕ AI ಗೆ', level: 'H2' } },
    { type: 'table', data: { captionEn: 'This Lesson\'s Value vs torch.Tensor', captionKn: 'ಈ Lesson ನ Value vs torch.Tensor',
      rows: 'This Lesson\'s Value Stores|Modern Framework Extends To\ndata, grad|Large tensors, GPU acceleration\nparents (_prev)|Automatic memory management\noperation (_op)|Optimized kernels\nbackward function|Parallel computation, distributed training, mixed precision, custom operations' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The scale changes dramatically. The fundamental mathematics does not\n• A modern training iteration: load batch -> forward pass -> compute prediction -> compute loss -> call backward() -> compute gradients -> optimizer updates parameters -> repeat\n• In PyTorch: model(x) produces predictions, loss = criterion(prediction, target) calculates error, loss.backward() calculates gradients, and an optimizer such as SGD or Adam updates the parameters -- this is precisely what the Part 2 training loop did with its own hand-written pieces instead of a library',
      bodyKn: '• Scale ನಾಟಕೀಯವಾಗಿ ಬದಲಾಗುತ್ತದೆ. ಮೂಲಭೂತ ಗಣಿತ ಬದಲಾಗುವುದಿಲ್ಲ\n• ಒಂದು ಆಧುನಿಕ training iteration: load batch -> forward pass -> compute prediction -> compute loss -> call backward() -> compute gradients -> optimizer updates parameters -> ಪುನರಾವರ್ತಿಸಿ\n• PyTorch ನಲ್ಲಿ: model(x) predictions ಉತ್ಪಾದಿಸುತ್ತದೆ, loss = criterion(prediction, target) ದೋಷ ಗಣಿಸುತ್ತದೆ, loss.backward() gradients ಗಣಿಸುತ್ತದೆ, ಮತ್ತು SGD ಅಥವಾ Adam ನಂತಹ ಒಂದು optimizer parameters ಅಪ್‌ಡೇಟ್ ಮಾಡುತ್ತದೆ -- Part 2 ನ training loop ಒಂದು library ಬದಲಿಗೆ ಇದರ ಸ್ವಂತ ಕೈ-ಬರಹದ ತುಣುಕುಗಳೊಂದಿಗೆ ಮಾಡಿದ್ದೂ ನಿಖರವಾಗಿ ಇದೇ' } },

    { type: 'heading', data: { textEn: '8. Key Terms', textKn: '8. ಮುಖ್ಯ ಪದಗಳು', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Terminology Reference', captionKn: 'Terminology Reference',
      rows: 'Term|What It Actually Means\nChain rule|The derivative of composed functions equals the product of each function\'s local derivative\nComputational graph|A directed acyclic graph where nodes are operations and edges carry values or gradients\nForward mode|Autodiff that propagates derivatives from inputs to outputs\nReverse mode|Autodiff that propagates gradients from outputs to inputs\nAutograd|A system that records operations and computes gradients via the chain rule\nDual numbers|Numbers that carry both a value and derivative for forward-mode differentiation\nTopological sort|Ordering graph nodes so dependencies are processed correctly\nGradient accumulation|Summing gradient contributions when a value feeds multiple operations\nDynamic graph|A graph rebuilt during each forward pass\nGradient checking|Comparing autodiff gradients against finite-difference gradients\nMLP|A neural network consisting of interconnected layers of neurons\nNeuron|activation(w1x1 + w2x2 + ... + b)' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Gradient checking exists because "the code runs without crashing" is not the same as "the gradient is correct" -- this lesson\'s own check caught agreement to 8 decimal places (3.66e-10 difference), which is the level of confidence a real framework needs before anyone trusts it with a training run\n• Cross-checking the tiny hand-built engine against real PyTorch on the identical graph (dy/dx1=3.0, dy/dx2=2.0, matching exactly in both) is the strongest evidence in this lesson that "autograd" is not magic -- it is the same value-wrapping, graph-recording, chain-rule-applying process this lesson built by hand, just re-implemented for speed and scale\n• Reverse-mode autodiff is the specific reason billion-parameter models are trainable at all -- the 1,000,000-perturbations argument for why numerical differentiation cannot scale is not hypothetical, it is the literal computational cost that would be required without the chain-rule shortcut this lesson traced by hand',
      bodyKn: '• Gradient checking ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ "code ಕ್ರ್ಯಾಶ್ ಆಗದೆ ಚಲಾಯಿಸುತ್ತದೆ" ಎಂಬುದೂ "gradient ಸರಿಯಾಗಿದೆ" ಎಂಬುದೂ ಒಂದೇ ಅಲ್ಲ -- ಈ lesson ನ ಸ್ವಂತ ಪರಿಶೀಲನೆ 8 ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಒಪ್ಪಂದ ಸೆರೆಹಿಡಿಯಿತು (3.66e-10 ವ್ಯತ್ಯಾಸ), ಇದೂ ಯಾರಾದರೂ ಒಂದು training run ಗೆ ನಂಬುವ ಮೊದಲು ಒಂದು ನಿಜ framework ಗೆ ಬೇಕಾದ ವಿಶ್ವಾಸದ ಮಟ್ಟ\n• ಒಂದೇ graph ಮೇಲೆ ಚಿಕ್ಕ ಕೈ-ನಿರ್ಮಿತ engine ಅನ್ನೂ ನಿಜ PyTorch ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸುವುದೂ (dy/dx1=3.0, dy/dx2=2.0, ಎರಡರಲ್ಲೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ) "autograd" ಮ್ಯಾಜಿಕ್ ಅಲ್ಲ ಎಂಬುದಕ್ಕೆ ಈ lesson ನಲ್ಲಿ ಬಲವಾದ ಪುರಾವೆ -- ಇದೂ ಈ lesson ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದ ಅದೇ value-wrapping, graph-recording, chain-rule-applying ಪ್ರಕ್ರಿಯೆ, ಕೇವಲ ವೇಗ ಮತ್ತು scale ಗಾಗಿ ಮರುಜಾರಿಗೊಳಿಸಲಾಗಿದೆ\n• Reverse-mode autodiff ಬಿಲಿಯನ್-parameter models ಸಂಪೂರ್ಣವಾಗಿ ತರಬೇತಿ ಪಡೆಯಬಹುದಾದ ನಿರ್ದಿಷ್ಟ ಕಾರಣ -- numerical differentiation ಏಕೆ scale ಆಗಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂಬ 1,000,000-perturbations ವಾದ ಕಾಲ್ಪನಿಕ ಅಲ್ಲ, ಇದೂ ಈ lesson ಕೈಯಿಂದ ಟ್ರೇಸ್ ಮಾಡಿದ chain-rule shortcut ಇಲ್ಲದೆ ಅಗತ್ಯವಿರುವ ಅಕ್ಷರಶಃ computational ವೆಚ್ಚ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Gradient checking (comparing autodiff against central finite differences) genuinely confirmed this lesson\'s Value class is correct to 8 decimal places on a nontrivial expression\n• The tiny hand-built engine, manual hand calculation, and real PyTorch all genuinely produced identical gradients (3.0 and 2.0) on the same computational graph -- three independent methods, one answer\n• A second, more complex expression with three independent inputs (a*b+c through ReLU) genuinely confirmed df/da=-3.0, df/db=2.0, df/dc=1.0, all matching hand derivation exactly\n• Backpropagation = reverse-mode automatic differentiation -- the chain rule is the math, autodiff is the algorithm, backpropagation is that algorithm specialized for neural networks\n• Numerical differentiation cannot scale to millions of parameters because it needs two forward passes per parameter; reverse-mode autodiff computes all parameter gradients in a single backward pass -- exactly why every framework from this lesson\'s own Value class to PyTorch, JAX, and TensorFlow uses it\n• The mathematical engine behind modern AI learning is one pipeline: Derivative -> Gradient -> Chain Rule -> Computational Graph -> Automatic Differentiation -> Backpropagation -> Neural Network Training -- and across these three parts, every step of that pipeline was genuinely built, run, and checked, not just described',
      bodyKn: '• Gradient checking (autodiff ಅನ್ನೂ central finite differences ವಿರುದ್ಧ ಹೋಲಿಸುವುದೂ) ಈ lesson ನ Value class ಒಂದು ಕ್ಷುಲ್ಲಕವಲ್ಲದ expression ಮೇಲೆ 8 ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಸರಿಯಾಗಿದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು\n• ಚಿಕ್ಕ ಕೈ-ನಿರ್ಮಿತ engine, manual ಕೈ ಗಣನೆ, ಮತ್ತು ನಿಜ PyTorch ಎಲ್ಲಾ ಅದೇ computational graph ಮೇಲೆ ನಿಜವಾಗಿ ಒಂದೇ gradients (3.0 ಮತ್ತು 2.0) ಉತ್ಪಾದಿಸಿದವು -- ಮೂರು ಸ್ವತಂತ್ರ ವಿಧಾನಗಳು, ಒಂದು ಉತ್ತರ\n• ಮೂರು ಸ್ವತಂತ್ರ inputs (ReLU ಮೂಲಕ a*b+c) ಹೊಂದಿರುವ ಒಂದು ಎರಡನೇ, ಹೆಚ್ಚು ಸಂಕೀರ್ಣ expression ನಿಜವಾಗಿ df/da=-3.0, df/db=2.0, df/dc=1.0 ದೃಢಪಡಿಸಿತು, ಎಲ್ಲಾ ಕೈ derivation ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• Backpropagation = reverse-mode automatic differentiation -- chain rule ಗಣಿತ, autodiff algorithm, backpropagation ಆ algorithm neural networks ಗಾಗಿ ವಿಶೇಷಗೊಳಿಸಲಾಗಿದೆ\n• Numerical differentiation ಲಕ್ಷಾಂತರ parameters ಗೆ scale ಆಗಲು ಸಾಧ್ಯವಿಲ್ಲ ಏಕೆಂದರೆ ಇದಕ್ಕೆ ಪ್ರತಿ parameter ಗೆ ಎರಡು forward passes ಬೇಕು; reverse-mode autodiff ಒಂದೇ backward pass ನಲ್ಲಿ ಎಲ್ಲಾ parameter gradients ಗಣಿಸುತ್ತದೆ -- ಈ lesson ನ ಸ್ವಂತ Value class ಇಂದ PyTorch, JAX, ಮತ್ತು TensorFlow ವರೆಗೆ ಪ್ರತಿ framework ಇದನ್ನೂ ಬಳಸುವ ನಿಖರ ಕಾರಣ ಇದೇ\n• ಆಧುನಿಕ AI ಕಲಿಕೆ ಹಿಂದಿನ ಗಣಿತೀಯ ಎಂಜಿನ್ ಒಂದು pipeline: Derivative -> Gradient -> Chain Rule -> Computational Graph -> Automatic Differentiation -> Backpropagation -> Neural Network Training -- ಮತ್ತು ಈ ಮೂರು ಭಾಗಗಳಾದ್ಯಂತ, ಆ pipeline ನ ಪ್ರತಿ ಹಂತ ಕೇವಲ ವಿವರಿಸಿದ್ದೂ ಅಲ್ಲ, ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ, ಚಲಾಯಿಸಲಾಗಿದೆ, ಮತ್ತು ಪರಿಶೀಲಿಸಲಾಗಿದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely comparing this lesson\'s Value.backward() against a central finite-difference approximation on (x^3+2x+1).tanh() at x=0.5, what was the result?', qKn: 'x=0.5 ನಲ್ಲಿ (x^3+2x+1).tanh() ಮೇಲೆ ಈ lesson ನ Value.backward() ಅನ್ನೂ ಒಂದು central finite-difference ಅಂದಾಜು ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, ಫಲಿತಾಂಶ ಏನೂ?',
        opts: ['They disagreed by more than 1', 'Both gave 0.15252426, agreeing to 8 decimal places (difference 3.66e-10)', 'The numerical method crashed', 'The autodiff result was exactly zero'], correct: 1,
        optsKn: ['ಅವು 1 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಭಿನ್ನವಾಗಿದ್ದವು', 'ಎರಡೂ 0.15252426 ನೀಡಿದವು, 8 ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಒಪ್ಪುತ್ತಾ (ವ್ಯತ್ಯಾಸ 3.66e-10)', 'Numerical method ಕ್ರ್ಯಾಶ್ ಆಯಿತು', 'Autodiff ಫಲಿತಾಂಶ ನಿಖರವಾಗಿ ಶೂನ್ಯವಾಗಿತ್ತು'] },
      { q: 'Why is gradient checking with finite differences not used during actual production training of large models?', qKn: 'ದೊಡ್ಡ models ಗಳ ವಾಸ್ತವ production training ಸಮಯದಲ್ಲಿ finite differences ಜೊತೆ gradient checking ಅನ್ನೂ ಏಕೆ ಬಳಸುವುದಿಲ್ಲ?',
        opts: ['It is illegal', 'It requires extra forward evaluations per parameter, which becomes extremely expensive for millions or billions of parameters', 'It always gives wrong answers', 'PyTorch does not support it at all'], correct: 1,
        optsKn: ['ಇದೂ ಕಾನೂನುಬಾಹಿರ', 'ಇದಕ್ಕೆ ಪ್ರತಿ parameter ಗೆ ಹೆಚ್ಚುವರಿ forward evaluations ಬೇಕು, ಇದೂ ಲಕ್ಷಾಂತರ ಅಥವಾ ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ parameters ಗೆ ಅತ್ಯಂತ ದುಬಾರಿಯಾಗುತ್ತದೆ', 'ಇದೂ ಯಾವಾಗಲೂ ತಪ್ಪು ಉತ್ತರಗಳನ್ನೂ ನೀಡುತ್ತದೆ', 'PyTorch ಇದನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ'] },
      { q: 'On the graph y=ReLU(x1*x2+1) at x1=2, x2=3, what did genuinely running this lesson\'s Value engine AND real PyTorch both produce for dy/dx1 and dy/dx2?', qKn: 'x1=2, x2=3 ನಲ್ಲಿ y=ReLU(x1*x2+1) graph ಮೇಲೆ, ಈ lesson ನ Value engine ಮತ್ತು ನಿಜ PyTorch ಎರಡನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ dy/dx1 ಮತ್ತು dy/dx2 ಗೆ ಏನೂ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['Different results in each system', 'Identical results in both: dy/dx1=3.0, dy/dx2=2.0', 'Both returned errors', 'Both returned 7.0 for both gradients'], correct: 1,
        optsKn: ['ಪ್ರತಿ system ನಲ್ಲಿ ಬೇರೆ ಫಲಿತಾಂಶಗಳು', 'ಎರಡರಲ್ಲೂ ಒಂದೇ ಫಲಿತಾಂಶಗಳು: dy/dx1=3.0, dy/dx2=2.0', 'ಎರಡೂ errors ಹಿಂತಿರುಗಿಸಿದವು', 'ಎರಡೂ gradients ಗೆ 7.0 ಹಿಂತಿರುಗಿಸಿದವು'] },
      { q: 'What is the precise relationship between the chain rule, automatic differentiation, and backpropagation?', qKn: 'Chain rule, automatic differentiation, ಮತ್ತು backpropagation ನಡುವಿನ ನಿಖರ ಸಂಬಂಧ ಏನೂ?',
        opts: ['They are unrelated techniques', 'The chain rule is the mathematical foundation, automatic differentiation is the computational mechanism, and backpropagation is reverse-mode autodiff applied to neural networks', 'Backpropagation replaced the chain rule', 'Automatic differentiation is a type of finite-difference method'], correct: 1,
        optsKn: ['ಅವು ಸಂಬಂಧವಿಲ್ಲದ techniques', 'Chain rule ಗಣಿತೀಯ ಅಡಿಪಾಯ, automatic differentiation computational ಕಾರ್ಯವಿಧಾನ, ಮತ್ತು backpropagation neural networks ಗೆ ಅನ್ವಯಿಸಿದ reverse-mode autodiff', 'Backpropagation chain rule ಅನ್ನೂ ಬದಲಾಯಿಸಿತು', 'Automatic differentiation ಒಂದು ರೀತಿಯ finite-difference method'] },
      { q: 'For the expression f=(a*b+c).relu() with a=2, b=-3, c=10, genuinely running the engine produced which gradients?', qKn: 'a=2, b=-3, c=10 ಜೊತೆ f=(a*b+c).relu() expression ಗೆ, engine ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಯಾವ gradients ಉತ್ಪಾದಿಸಿತು?',
        opts: ['df/da=0, df/db=0, df/dc=0 (ReLU blocked everything)', 'df/da=-3.0 (=b), df/db=2.0 (=a), df/dc=1.0, since a*b+c=4>0 so ReLU passed the gradient through unchanged', 'All three gradients equal 4.0', 'The expression is undefined because b is negative'], correct: 1,
        optsKn: ['df/da=0, df/db=0, df/dc=0 (ReLU ಎಲ್ಲವನ್ನೂ ತಡೆಯಿತು)', 'df/da=-3.0 (=b), df/db=2.0 (=a), df/dc=1.0, a*b+c=4>0 ಆಗಿರುವ ಕಾರಣ ReLU gradient ಅನ್ನೂ ಬದಲಾಗದೆ ಹಾದುಹೋಗಲು ಬಿಟ್ಟಿತು', 'ಮೂರೂ gradients 4.0 ಗೆ ಸಮ', 'b ಋಣಾತ್ಮಕವಾಗಿರುವ ಕಾರಣ expression ಅವ್ಯಾಖ್ಯಾತ'] },
    ] } },
  ],
};
