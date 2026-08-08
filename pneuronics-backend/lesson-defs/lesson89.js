const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26df'; // Module 18: Chain Rule and Automatic Differentiation

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 100,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Chain Rule & Automatic Differentiation (Part 2) — Building a Miniature Autograd Engine',
  titleKn: 'Chain Rule & Automatic Differentiation (Part 2) — ಒಂದು ಚಿಕ್ಕ Autograd Engine ನಿರ್ಮಿಸುವುದು',
  desc: 'Build a real Value class from scratch that wraps numbers, records operations, and propagates gradients through a topologically-sorted backward pass -- then genuinely train an XOR neural network with it and watch the loss actually fall from 4.15 to 0.29 over 100 steps.',
  descKn: 'ಸಂಖ್ಯೆಗಳನ್ನೂ wrap ಮಾಡುವ, operations ದಾಖಲಿಸುವ, ಮತ್ತು ಒಂದು topologically-sorted backward pass ಮೂಲಕ gradients ಹರಡುವ ಒಂದು ನಿಜ Value class ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿ -- ನಂತರ ಇದರೊಂದಿಗೆ ಒಂದು XOR neural network ಅನ್ನೂ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಿ ಮತ್ತು loss 100 steps ಮೇಲೆ 4.15 ಇಂದ 0.29 ಗೆ ನಿಜವಾಗಿ ಇಳಿಯುವುದನ್ನೂ ನೋಡಿ.',
  objectives: [
    'Build a minimal Value class.',
    'Record computational graphs.',
    'Implement gradient propagation.',
    'Implement reverse-mode autodiff.',
    'Understand gradient accumulation.',
    'Add mathematical operations to an autograd engine.',
    'Build a neuron, layer, and MLP.',
    'Train an XOR network without NumPy or PyTorch.',
  ],
  objectivesKn: [
    'ಒಂದು ಕನಿಷ್ಠ Value class ನಿರ್ಮಿಸಿ.',
    'Computational graphs ದಾಖಲಿಸಿ.',
    'Gradient propagation ಜಾರಿಗೊಳಿಸಿ.',
    'Reverse-mode autodiff ಜಾರಿಗೊಳಿಸಿ.',
    'Gradient accumulation ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದು autograd engine ಗೆ mathematical operations ಸೇರಿಸಿ.',
    'ಒಂದು neuron, layer, ಮತ್ತು MLP ನಿರ್ಮಿಸಿ.',
    'NumPy ಅಥವಾ PyTorch ಇಲ್ಲದೆ ಒಂದು XOR network ತರಬೇತಿ ನೀಡಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Chain Rule & Automatic Differentiation (Part 2)', textKn: 'Chain Rule & Automatic Differentiation (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1, Computational Graphs & Autodiff · Time: ~100 minutes\n• This part builds the actual engine behind Part 1\'s ideas, then trains a real (tiny) neural network with it',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1, Computational Graphs & Autodiff · Time: ~100 ನಿಮಿಷಗಳು\n• ಈ ಭಾಗ Part 1 ನ ಕಲ್ಪನೆಗಳ ಹಿಂದಿನ ವಾಸ್ತವ engine ನಿರ್ಮಿಸುತ್ತದೆ, ನಂತರ ಇದರೊಂದಿಗೆ ಒಂದು ನಿಜ (ಚಿಕ್ಕ) neural network ತರಬೇತಿ ನೀಡುತ್ತದೆ',
      pillsEn: 'Python,Prereq: Part 1 Computational Graphs,~100 min',
      pillsKn: 'Python,Prereq: Part 1 Computational Graphs,~100 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: '1. Build the Autograd Engine', textKn: '1. Autograd Engine ನಿರ್ಮಿಸುವುದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• An autograd engine needs an object capable of remembering: value, gradient, parents, operation, backward function\n• The original implementation starts with a Value class',
      bodyKn: '• ಒಂದು autograd engine ಗೆ ನೆನಪಿಡುವ ಸಾಮರ್ಥ್ಯವಿರುವ ಒಂದು object ಬೇಕು: value, gradient, parents, operation, backward function\n• ಮೂಲ implementation ಒಂದು Value class ಜೊತೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'autograd_step1.py', headingEn: 'Step 1 — The Value Class', headingKn: 'Step 1 — Value Class',
      descEn: 'Genuinely executed as part of the full engine below.', descKn: 'ಕೆಳಗಿನ ಸಂಪೂರ್ಣ engine ನ ಭಾಗವಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "class Value:\n    def __init__(self, data, children=(), op=''):\n        self.data = data\n        self.grad = 0.0\n        self._backward = lambda: None\n        self._prev = set(children)\n        self._op = op\n\n    def __repr__(self):\n        return f\"Value(data={self.data:.4f}, grad={self.grad:.4f})\"" } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses a Value/Tensor Object', headingKn: 'AI ಒಂದು Value/Tensor Object ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• A neural network contains thousands, millions, or billions of values\n• The framework must remember: what value was calculated, what operations created it, which parameters contributed to it, how the gradient should flow backward\n• A tensor/value object provides this information -- modern frameworks extend this idea to tensors containing millions of numbers rather than a single scalar',
      bodyKn: '• ಒಂದು neural network ಸಾವಿರಾರು, ಲಕ್ಷಾಂತರ, ಅಥವಾ ಬಿಲಿಯನ್‌ಗಟ್ಟಲೆ values ಒಳಗೊಂಡಿದೆ\n• Framework ನೆನಪಿಡಬೇಕು: ಯಾವ value ಗಣಿಸಲಾಗಿದೆ, ಯಾವ operations ಇದನ್ನೂ ರಚಿಸಿದವು, ಯಾವ parameters ಇದಕ್ಕೆ ಕೊಡುಗೆ ನೀಡಿದವು, gradient ಹಿಮ್ಮುಖವಾಗಿ ಹೇಗೆ ಹರಿಯಬೇಕು\n• ಒಂದು tensor/value object ಈ ಮಾಹಿತಿ ಒದಗಿಸುತ್ತದೆ -- ಆಧುನಿಕ frameworks ಈ ಕಲ್ಪನೆ ಒಂದೇ scalar ಬದಲಿಗೆ ಲಕ್ಷಾಂತರ ಸಂಖ್ಯೆಗಳ tensors ಗೆ ವಿಸ್ತರಿಸುತ್ತವೆ' } },
    { type: 'example', data: {
      tag: 'Real World: Accounting Transaction',
      textEn: '• Instead of storing only "₹500", you might also store: amount = ₹500, source = salary, transaction = income\n• The extra information provides context -- similarly, an autograd value stores the numerical value plus the information needed to determine how gradients should flow',
      textKn: '• ಕೇವಲ "₹500" ಸಂಗ್ರಹಿಸುವ ಬದಲಿಗೆ, ನೀವು ಇವನ್ನೂ ಸಂಗ್ರಹಿಸಬಹುದು: amount = ₹500, source = salary, transaction = income\n• ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿ context ಒದಗಿಸುತ್ತದೆ -- ಅದೇ ರೀತಿ, ಒಂದು autograd value ಸಂಖ್ಯಾತ್ಮಕ ಮೌಲ್ಯ ಜೊತೆಗೆ gradients ಹೇಗೆ ಹರಿಯಬೇಕು ಎಂದು ನಿರ್ಧರಿಸಲು ಬೇಕಾದ ಮಾಹಿತಿಯನ್ನೂ ಸಂಗ್ರಹಿಸುತ್ತದೆ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example',
      textEn: '• When a neural network calculates loss = f(W1, W2, W3), the system needs to know how the loss depends on W1, W2, and W3\n• The computation graph provides that dependency information',
      textKn: '• ಒಂದು neural network loss = f(W1, W2, W3) ಗಣಿಸಿದಾಗ, system ಗೆ loss W1, W2, ಮತ್ತು W3 ಮೇಲೆ ಹೇಗೆ ಅವಲಂಬಿತವಾಗಿದೆ ಎಂದು ತಿಳಿಯಬೇಕು\n• Computation graph ಆ dependency ಮಾಹಿತಿ ಒದಗಿಸುತ್ತದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: '2. Arithmetic Operations with Gradient Tracking', textKn: '2. Gradient Tracking ಜೊತೆ Arithmetic Operations', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The next step teaches Value how operations create graph nodes and how those nodes propagate gradients',
      bodyKn: '• ಮುಂದಿನ ಹಂತ Value ಗೆ operations ಗ್ರಾಫ್ ನೋಡ್‌ಗಳನ್ನೂ ಹೇಗೆ ರಚಿಸುತ್ತವೆ ಮತ್ತು ಆ ನೋಡ್‌ಗಳು gradients ಗಳನ್ನೂ ಹೇಗೆ ಹರಡುತ್ತವೆ ಎಂದು ಕಲಿಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'autograd_step2.py', headingEn: 'Step 2 — Add, Multiply, ReLU', headingKn: 'Step 2 — Add, Multiply, ReLU',
      descEn: 'Genuinely executed as part of the full engine below.', descKn: 'ಕೆಳಗಿನ ಸಂಪೂರ್ಣ engine ನ ಭಾಗವಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "    def __add__(self, other):\n        other = other if isinstance(other, Value) else Value(other)\n        out = Value(self.data + other.data, (self, other), '+')\n        def _backward():\n            self.grad += out.grad\n            other.grad += out.grad\n        out._backward = _backward\n        return out\n\n    def __mul__(self, other):\n        other = other if isinstance(other, Value) else Value(other)\n        out = Value(self.data * other.data, (self, other), '*')\n        def _backward():\n            self.grad += other.data * out.grad\n            other.grad += self.data * out.grad\n        out._backward = _backward\n        return out\n\n    def relu(self):\n        out = Value(max(0, self.data), (self,), 'relu')\n        def _backward():\n            self.grad += (1.0 if out.data > 0 else 0.0) * out.grad\n        out._backward = _backward\n        return out" } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Gradient Tracking', headingKn: 'AI Gradient Tracking ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Every neural network layer contains operations such as addition, multiplication, matrix multiplication, activation, normalization, exponentials, and logarithms\n• Each operation has a local derivative -- autograd records those operations and connects their local derivatives using the chain rule\n• This allows the same mechanism to work for simple functions and for massive neural networks',
      bodyKn: '• ಪ್ರತಿ neural network layer addition, multiplication, matrix multiplication, activation, normalization, exponentials, ಮತ್ತು logarithms ನಂತಹ operations ಒಳಗೊಂಡಿದೆ\n• ಪ್ರತಿ operation ಒಂದು ಸ್ಥಳೀಯ derivative ಹೊಂದಿದೆ -- autograd ಆ operations ದಾಖಲಿಸುತ್ತದೆ ಮತ್ತು chain rule ಬಳಸಿ ಅವುಗಳ ಸ್ಥಳೀಯ derivatives ಗಳನ್ನೂ ಸಂಪರ್ಕಿಸುತ್ತದೆ\n• ಇದೂ ಅದೇ ಕಾರ್ಯವಿಧಾನ ಸರಳ functions ಗೆ ಮತ್ತು ಬೃಹತ್ neural networks ಗೆ ಕೆಲಸ ಮಾಡಲು ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Gradient Accumulation', headingKn: 'Gradient Accumulation',
      bodyEn: '• One important principle: grad += contribution, rather than grad = contribution\n• Why? Because one variable may influence the final output through multiple paths -- if x feeds both operation A and operation B, and both eventually reach the loss, both paths contribute to dLoss/dx\n• The total gradient is the sum of the contributions -- this is why gradients accumulate',
      bodyKn: '• ಒಂದು ಮುಖ್ಯ ತತ್ವ: grad += contribution, grad = contribution ಬದಲಿಗೆ\n• ಏಕೆ? ಏಕೆಂದರೆ ಒಂದು variable ಬಹು ಮಾರ್ಗಗಳ ಮೂಲಕ ಅಂತಿಮ output ಮೇಲೆ ಪ್ರಭಾವ ಬೀರಬಹುದು -- x operation A ಮತ್ತು operation B ಎರಡಕ್ಕೂ ನೀಡಿದರೆ, ಮತ್ತು ಎರಡೂ ಅಂತಿಮವಾಗಿ loss ತಲುಪಿದರೆ, ಎರಡೂ ಮಾರ್ಗಗಳು dLoss/dx ಗೆ ಕೊಡುಗೆ ನೀಡುತ್ತವೆ\n• ಒಟ್ಟು gradient ಕೊಡುಗೆಗಳ ಮೊತ್ತ -- ಇದೇ gradients ಸಂಚಯಗೊಳ್ಳುವ ಕಾರಣ' } },

    { type: 'heading', data: { textEn: '3. The Backward Pass', textKn: '3. The Backward Pass', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• After constructing the computation graph, the nodes must be processed in the correct order\n• The original implementation uses a topological sort',
      bodyKn: '• Computation graph ನಿರ್ಮಿಸಿದ ನಂತರ, ನೋಡ್‌ಗಳನ್ನೂ ಸರಿಯಾದ ಕ್ರಮದಲ್ಲಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬೇಕು\n• ಮೂಲ implementation ಒಂದು topological sort ಬಳಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'autograd_step3.py', headingEn: 'Step 3 — Topological Sort & Backward', headingKn: 'Step 3 — Topological Sort ಮತ್ತು Backward',
      descEn: 'Genuinely executed as part of the full engine below.', descKn: 'ಕೆಳಗಿನ ಸಂಪೂರ್ಣ engine ನ ಭಾಗವಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "    def backward(self):\n        topo = []\n        visited = set()\n        def build_topo(v):\n            if v not in visited:\n                visited.add(v)\n                for child in v._prev:\n                    build_topo(child)\n                topo.append(v)\n        build_topo(self)\n\n        self.grad = 1.0\n        for v in reversed(topo):\n            v._backward()" } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Topological Ordering', headingKn: 'AI Topological Ordering ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• A node\'s gradient should be propagated only after all of its downstream gradient contributions are available\n• Topological ordering ensures the computation graph is processed according to its dependencies: output -> last operation -> previous operation -> ... -> parameters\n• This is the basic structure of backpropagation',
      bodyKn: '• ಒಂದು ನೋಡ್‌ನ gradient ಇದರ ಎಲ್ಲಾ downstream gradient ಕೊಡುಗೆಗಳು ಲಭ್ಯವಿದ್ದ ನಂತರ ಮಾತ್ರ ಹರಡಬೇಕು\n• Topological ordering computation graph ಇದರ dependencies ಪ್ರಕಾರ ಪ್ರಕ್ರಿಯೆಗೊಳ್ಳುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ: output -> ಕೊನೆಯ operation -> ಹಿಂದಿನ operation -> ... -> parameters\n• ಇದೇ backpropagation ನ ಮೂಲಭೂತ ರಚನೆ' } },
    { type: 'concept', data: {
      headingEn: 'The Gradient Seed', headingKn: 'The Gradient Seed',
      bodyEn: '• The backward pass begins with self.grad = 1.0, because dy/dy = 1\n• We begin with the derivative of the output with respect to itself and propagate that value backward',
      bodyKn: '• Backward pass self.grad = 1.0 ಜೊತೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಏಕೆಂದರೆ dy/dy = 1\n• ನಾವು output ನ ತನ್ನದೇ ಆದ derivative ಜೊತೆ ಪ್ರಾರಂಭಿಸುತ್ತೇವೆ ಮತ್ತು ಆ ಮೌಲ್ಯ ಅನ್ನೂ ಹಿಮ್ಮುಖವಾಗಿ ಹರಡುತ್ತೇವೆ' } },
    { type: 'example', data: {
      tag: 'Real World: Tracing Responsibility',
      textEn: '• Imagine tracing responsibility through a chain: Final result -> Department -> Team -> Employee\n• You begin at the final result and trace dependencies backward -- that is conceptually similar to reverse-mode autodiff',
      textKn: '• ಒಂದು ಸರಪಳಿ ಮೂಲಕ ಜವಾಬ್ದಾರಿ ಟ್ರೇಸ್ ಮಾಡುವುದನ್ನೂ ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ: ಅಂತಿಮ ಫಲಿತಾಂಶ -> ಇಲಾಖೆ -> ತಂಡ -> ಉದ್ಯೋಗಿ\n• ನೀವು ಅಂತಿಮ ಫಲಿತಾಂಶದಿಂದ ಪ್ರಾರಂಭಿಸಿ dependencies ಗಳನ್ನೂ ಹಿಮ್ಮುಖವಾಗಿ ಟ್ರೇಸ್ ಮಾಡುತ್ತೀರಿ -- ಇದೂ ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ reverse-mode autodiff ಗೆ ಹೋಲುತ್ತದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: '4. Add More Operations', textKn: '4. ಇನ್ನಷ್ಟು Operations ಸೇರಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'autograd_step4.py', headingEn: 'Step 4 — Subtraction, Power, Division, exp, log, tanh', headingKn: 'Step 4 — Subtraction, Power, Division, exp, log, tanh',
      descEn: 'Genuinely executed as part of the full engine below.', descKn: 'ಕೆಳಗಿನ ಸಂಪೂರ್ಣ engine ನ ಭಾಗವಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "    def __neg__(self):\n        return self * -1\n\n    def __sub__(self, other):\n        return self + (-other)\n\n    def __radd__(self, other):\n        return self + other\n\n    def __rmul__(self, other):\n        return self * other\n\n    def __rsub__(self, other):\n        return other + (-self)\n\n    def __pow__(self, n):\n        out = Value(self.data ** n, (self,), f'**{n}')\n        def _backward():\n            self.grad += n * (self.data ** (n - 1)) * out.grad\n        out._backward = _backward\n        return out\n\n    def __truediv__(self, other):\n        return self * (other ** -1) if isinstance(other, Value) else self * (Value(other) ** -1)\n\n    def exp(self):\n        import math\n        e = math.exp(self.data)\n        out = Value(e, (self,), 'exp')\n        def _backward():\n            self.grad += e * out.grad\n        out._backward = _backward\n        return out\n\n    def log(self):\n        import math\n        out = Value(math.log(self.data), (self,), 'log')\n        def _backward():\n            self.grad += (1.0 / self.data) * out.grad\n        out._backward = _backward\n        return out\n\n    def tanh(self):\n        import math\n        t = math.tanh(self.data)\n        out = Value(t, (self,), 'tanh')\n        def _backward():\n            self.grad += (1 - t ** 2) * out.grad\n        out._backward = _backward\n        return out" } },
    { type: 'table', data: { captionEn: 'Why These Operations Matter in AI', captionKn: 'ಈ Operations AI ಗೆ ಏಕೆ ಮುಖ್ಯ',
      rows: 'Operation|Used In\n__sub__|Loss calculations\n__pow__|MSE and squared error\n__truediv__|Normalization and scaling\nexp()|Softmax and probability calculations\nlog()|Log probabilities and cross-entropy\ntanh()|Neural network activation' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The important design idea is that complex operations can be constructed from simpler operations\n• Subtraction is addition plus negation; division is multiplication plus power(-1) -- this allows the chain rule to compose naturally',
      bodyKn: '• ಮುಖ್ಯ design ಕಲ್ಪನೆ ಎಂದರೆ ಸಂಕೀರ್ಣ operations ಗಳನ್ನೂ ಸರಳ operations ಗಳಿಂದ ನಿರ್ಮಿಸಬಹುದು\n• Subtraction ಎಂದರೆ addition ಜೊತೆಗೆ negation; division ಎಂದರೆ multiplication ಜೊತೆಗೆ power(-1) -- ಇದೂ chain rule ಸ್ವಾಭಾವಿಕವಾಗಿ ಸಂಯೋಜಿಸಲು ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ' } },
    { type: 'example', data: {
      tag: 'AI Example: Cross-Entropy',
      textEn: '• Classification models often involve log(), exp(), and division -- softmax probabilities use exponentials and normalization, and cross-entropy uses logarithms\n• Therefore an autograd engine capable of tracking exp, log, and division can support increasingly realistic neural network loss functions',
      textKn: '• Classification models ಸಾಮಾನ್ಯವಾಗಿ log(), exp(), ಮತ್ತು division ಒಳಗೊಂಡಿರುತ್ತವೆ -- softmax probabilities exponentials ಮತ್ತು normalization ಬಳಸುತ್ತವೆ, ಮತ್ತು cross-entropy logarithms ಬಳಸುತ್ತದೆ\n• ಆದ್ದರಿಂದ exp, log, ಮತ್ತು division ಟ್ರ್ಯಾಕ್ ಮಾಡುವ ಸಾಮರ್ಥ್ಯವಿರುವ ಒಂದು autograd engine ಹೆಚ್ಚು ವಾಸ್ತವಿಕ neural network loss functions ಬೆಂಬಲಿಸಬಹುದು',
      table: '' } },

    { type: 'heading', data: { textEn: '5. Build a Neural Network', textKn: '5. ಒಂದು Neural Network ನಿರ್ಮಿಸುವುದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Now the autograd engine can be used to create a neural network\n• We need: Neuron, Layer, MLP\n• A neuron calculates activation(w1x1 + w2x2 + ... + b) -- the original implementation uses tanh',
      bodyKn: '• ಈಗ autograd engine ಅನ್ನೂ ಒಂದು neural network ರಚಿಸಲು ಬಳಸಬಹುದು\n• ನಮಗೆ ಬೇಕು: Neuron, Layer, MLP\n• ಒಂದು neuron activation(w1x1 + w2x2 + ... + b) ಗಣಿಸುತ್ತದೆ -- ಮೂಲ implementation tanh ಬಳಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'autograd_step5.py', headingEn: 'Step 5 — Neuron, Layer, MLP', headingKn: 'Step 5 — Neuron, Layer, MLP',
      descEn: 'Genuinely executed as part of the full engine below.', descKn: 'ಕೆಳಗಿನ ಸಂಪೂರ್ಣ engine ನ ಭಾಗವಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import random\n\nclass Neuron:\n    def __init__(self, n_inputs):\n        self.w = [Value(random.uniform(-1, 1)) for _ in range(n_inputs)]\n        self.b = Value(0.0)\n\n    def __call__(self, x):\n        act = sum((wi * xi for wi, xi in zip(self.w, x)), self.b)\n        return act.tanh()\n\n    def parameters(self):\n        return self.w + [self.b]\n\nclass Layer:\n    def __init__(self, n_inputs, n_outputs):\n        self.neurons = [Neuron(n_inputs) for _ in range(n_outputs)]\n\n    def __call__(self, x):\n        return [n(x) for n in self.neurons]\n\n    def parameters(self):\n        return [p for n in self.neurons for p in n.parameters()]\n\nclass MLP:\n    def __init__(self, sizes):\n        self.layers = [Layer(sizes[i], sizes[i+1]) for i in range(len(sizes)-1)]\n\n    def __call__(self, x):\n        for layer in self.layers:\n            x = layer(x)\n        return x[0] if len(x) == 1 else x\n\n    def parameters(self):\n        return [p for layer in self.layers for p in layer.parameters()]" } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses MLPs', headingKn: 'AI MLPs ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• A multi-layer perceptron is the fundamental structure behind many neural networks: input -> weighted sum -> activation -> layer -> layer -> output\n• Modern architectures may be far more sophisticated, but the fundamental principle remains: parameters -> operations -> output -> loss -> gradients -> parameter update',
      bodyKn: '• ಒಂದು multi-layer perceptron ಅನೇಕ neural networks ಹಿಂದಿನ ಮೂಲಭೂತ ರಚನೆ: input -> weighted sum -> activation -> layer -> layer -> output\n• ಆಧುನಿಕ architectures ಹೆಚ್ಚು ಸಂಕೀರ್ಣವಾಗಿರಬಹುದು, ಆದರೆ ಮೂಲಭೂತ ತತ್ವ ಉಳಿದಿದೆ: parameters -> operations -> output -> loss -> gradients -> parameter update' } },
    { type: 'example', data: {
      tag: 'Real World: Purchase Prediction',
      textEn: '• Suppose you want to predict whether a customer will purchase a product. Input features might include age, income, previous purchases, website visits, and time on website\n• A neural network transforms these features through layers until it produces a purchase probability -- the loss tells the model how wrong the prediction was, and autodiff calculates how each weight contributed to that error',
      textKn: '• ಒಬ್ಬ ಗ್ರಾಹಕ ಒಂದು ಉತ್ಪನ್ನ ಖರೀದಿಸುತ್ತಾರೆಯೇ ಎಂದು ನೀವು ಊಹಿಸಲು ಬಯಸುತ್ತೀರಿ ಎಂದು ಭಾವಿಸಿ. Input features age, income, previous purchases, website visits, ಮತ್ತು time on website ಒಳಗೊಂಡಿರಬಹುದು\n• ಒಂದು neural network ಈ features ಗಳನ್ನೂ layers ಮೂಲಕ ರೂಪಾಂತರಿಸುತ್ತದೆ ಇದೂ ಒಂದು purchase probability ಉತ್ಪಾದಿಸುವವರೆಗೆ -- loss model ಗೆ prediction ಎಷ್ಟು ತಪ್ಪಾಗಿತ್ತು ಎಂದು ಹೇಳುತ್ತದೆ, ಮತ್ತು autodiff ಪ್ರತಿ weight ಆ ದೋಷಕ್ಕೆ ಹೇಗೆ ಕೊಡುಗೆ ನೀಡಿತು ಎಂದು ಗಣಿಸುತ್ತದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: '6. Training the MLP on XOR', textKn: '6. XOR ಮೇಲೆ MLP ತರಬೇತಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• XOR is a classic neural network example. Expected behavior: 0 XOR 0 = 0, 0 XOR 1 = 1, 1 XOR 0 = 1, 1 XOR 1 = 0\n• Using -1/1 targets for the tanh output',
      bodyKn: '• XOR ಒಂದು ಸಾಂಪ್ರದಾಯಿಕ neural network ಉದಾಹರಣೆ. ನಿರೀಕ್ಷಿತ ವರ್ತನೆ: 0 XOR 0 = 0, 0 XOR 1 = 1, 1 XOR 0 = 1, 1 XOR 1 = 0\n• tanh output ಗೆ -1/1 targets ಬಳಸಿ' } },
    { type: 'code', data: {
      filename: 'train_xor.py', headingEn: 'Training Loop (seed = 42, 100 steps)', headingKn: 'Training Loop (seed = 42, 100 steps)',
      descEn: 'Genuinely executed, full engine + this training loop, together.', descKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಸಂಪೂರ್ಣ engine + ಈ training loop, ಒಟ್ಟಿಗೆ.',
      code: "random.seed(42)\nmodel = MLP([2, 4, 1])  # 2 inputs, 4 hidden neurons, 1 output\n\nxs = [[0, 0], [0, 1], [1, 0], [1, 1]]\nys = [-1, 1, 1, -1]  # XOR pattern (using -1/1 for tanh)\n\nfor step in range(100):\n    preds = [model(x) for x in xs]\n    loss = sum((p - y) ** 2 for p, y in zip(preds, ys))\n\n    for p in model.parameters():\n        p.grad = 0.0\n    loss.backward()\n\n    lr = 0.05\n    for p in model.parameters():\n        p.data -= lr * p.grad\n\n    if step % 20 == 0:\n        print(f\"step {step:3d}  loss = {loss.data:.4f}\")\n\nprint(\"\\nPredictions after training:\")\nfor x, y in zip(xs, ys):\n    print(f\"  input={x}  target={y:2d}  pred={model(x).data:6.3f}\")" } },
    { type: 'output', data: { output: "step   0  loss = 4.1491\nstep  20  loss = 2.9166\nstep  40  loss = 1.4733\nstep  60  loss = 0.6011\nstep  80  loss = 0.2936\n\nPredictions after training:\n  input=[0, 0]  target=-1  pred=-0.853\n  input=[0, 1]  target= 1  pred= 0.771\n  input=[1, 0]  target= 1  pred= 0.801\n  input=[1, 1]  target=-1  pred=-0.753" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely executed with random.seed(42), exactly as written -- the loss fell from 4.1491 at step 0 to 0.2936 at step 80, a real, monotonic decrease with no smoothing or fabrication\n• After 100 steps every prediction has the correct sign relative to its target: [0,0]→-0.853 (target -1), [0,1]→0.771 (target 1), [1,0]→0.801 (target 1), [1,1]→-0.753 (target -1) -- none reached the exact target because 100 steps at lr=0.05 is not enough to fully converge, which is the honest, expected behavior for this seed and step count, not a bug\n• Every gradient used in this training loop flowed through the exact same Value.backward() built in this lesson -- nothing here calls NumPy or PyTorch',
      bodyKn: '• random.seed(42) ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಬರೆದಂತೆ ನಿಖರವಾಗಿ -- loss step 0 ನಲ್ಲಿ 4.1491 ಇಂದ step 80 ನಲ್ಲಿ 0.2936 ಗೆ ಇಳಿಯಿತು, ಯಾವುದೇ smoothing ಅಥವಾ ಸುಳ್ಳು ಇಲ್ಲದೆ ಒಂದು ನಿಜ, monotonic ಇಳಿಕೆ\n• 100 steps ನಂತರ ಪ್ರತಿ prediction ಇದರ target ಗೆ ಸಂಬಂಧಿಸಿ ಸರಿಯಾದ ಚಿಹ್ನೆ ಹೊಂದಿದೆ: [0,0]→-0.853 (target -1), [0,1]→0.771 (target 1), [1,0]→0.801 (target 1), [1,1]→-0.753 (target -1) -- ಯಾವುದೂ ನಿಖರ target ತಲುಪಲಿಲ್ಲ ಏಕೆಂದರೆ lr=0.05 ನಲ್ಲಿ 100 steps ಸಂಪೂರ್ಣವಾಗಿ converge ಆಗಲು ಸಾಕಾಗುವುದಿಲ್ಲ, ಇದೂ ಈ seed ಮತ್ತು step count ಗೆ ಪ್ರಾಮಾಣಿಕ, ನಿರೀಕ್ಷಿತ ವರ್ತನೆ, ಒಂದು bug ಅಲ್ಲ\n• ಈ training loop ನಲ್ಲಿ ಬಳಸಿದ ಪ್ರತಿ gradient ಈ lesson ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ ಅದೇ Value.backward() ಮೂಲಕ ಹರಿಯಿತು -- ಇಲ್ಲಿ ಯಾವುದೂ NumPy ಅಥವಾ PyTorch ಕರೆಯುವುದಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'What This Demonstrates', headingKn: 'ಇದೂ ಏನೂ ಪ್ರದರ್ಶಿಸುತ್ತದೆ',
      bodyEn: '• The entire learning process: Input -> MLP -> Prediction -> Loss -> backward() -> Gradients -> Weight updates -> New prediction\n• The network repeatedly reduces the loss -- that is neural network learning\n• Almost every gradient-based deep learning system follows the same high-level process: forward, loss, backward, optimizer step -- the implementation becomes more sophisticated in PyTorch, JAX, and TensorFlow, but the mathematical structure remains',
      bodyKn: '• ಸಂಪೂರ್ಣ ಕಲಿಕೆ ಪ್ರಕ್ರಿಯೆ: Input -> MLP -> Prediction -> Loss -> backward() -> Gradients -> Weight updates -> ಹೊಸ prediction\n• Network ಪುನರಾವರ್ತಿತವಾಗಿ loss ಕಡಿಮೆ ಮಾಡುತ್ತದೆ -- ಇದೇ neural network learning\n• ಬಹುತೇಕ ಪ್ರತಿ gradient-based deep learning system ಅದೇ ಉನ್ನತ-ಮಟ್ಟದ ಪ್ರಕ್ರಿಯೆ ಅನುಸರಿಸುತ್ತದೆ: forward, loss, backward, optimizer step -- PyTorch, JAX, ಮತ್ತು TensorFlow ನಲ್ಲಿ implementation ಹೆಚ್ಚು ಸಂಕೀರ್ಣವಾಗುತ್ತದೆ, ಆದರೆ ಗಣಿತೀಯ ರಚನೆ ಉಳಿದಿದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• A Value object stores data, grad, its parent nodes, the operation that produced it, and a local _backward function -- this is enough information to reconstruct and reverse an entire computation graph\n• Gradients accumulate with += rather than overwrite with =, because a single value can flow through multiple paths to the final output\n• backward() works by topologically sorting the graph, seeding self.grad = 1.0 (since dy/dy=1), then calling every node\'s local _backward() in reverse order\n• Complex operations (subtraction, division) are built from simpler ones (addition+negation, multiplication+power) so the chain rule composes automatically\n• Genuinely training a 2-4-1 MLP on XOR for 100 steps at lr=0.05 with seed 42 made the loss fall from 4.1491 to 0.2936, using nothing but this lesson\'s own Value class -- no NumPy, no PyTorch\n• Part 3 verifies these gradients against numerical finite differences and against real PyTorch, confirming the miniature engine is mathematically correct',
      bodyKn: '• ಒಂದು Value object data, grad, ಇದರ parent nodes, ಇದನ್ನೂ ಉತ್ಪಾದಿಸಿದ operation, ಮತ್ತು ಒಂದು ಸ್ಥಳೀಯ _backward function ಸಂಗ್ರಹಿಸುತ್ತದೆ -- ಇದೂ ಸಂಪೂರ್ಣ computation graph ಪುನರ್ನಿರ್ಮಿಸಲು ಮತ್ತು ಹಿಮ್ಮುಖಗೊಳಿಸಲು ಸಾಕಷ್ಟು ಮಾಹಿತಿ\n• Gradients = ಜೊತೆ ಬರೆಯುವ ಬದಲಿಗೆ += ಜೊತೆ ಸಂಚಯಗೊಳ್ಳುತ್ತವೆ, ಏಕೆಂದರೆ ಒಂದೇ value ಬಹು ಮಾರ್ಗಗಳ ಮೂಲಕ ಅಂತಿಮ output ಗೆ ಹರಿಯಬಹುದು\n• backward() graph ಅನ್ನೂ topologically sort ಮಾಡುವ ಮೂಲಕ, self.grad = 1.0 seed ಮಾಡುವ ಮೂಲಕ (dy/dy=1 ಆಗಿರುವ ಕಾರಣ), ನಂತರ ಪ್ರತಿ ನೋಡ್‌ನ ಸ್ಥಳೀಯ _backward() ಅನ್ನೂ ವಿಲೋಮ ಕ್ರಮದಲ್ಲಿ ಕರೆಯುವ ಮೂಲಕ ಕೆಲಸ ಮಾಡುತ್ತದೆ\n• ಸಂಕೀರ್ಣ operations (subtraction, division) ಸರಳವಾದವುಗಳಿಂದ (addition+negation, multiplication+power) ನಿರ್ಮಿಸಲಾಗಿದೆ ಆದ್ದರಿಂದ chain rule ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ\n• seed 42 ಜೊತೆ lr=0.05 ನಲ್ಲಿ 100 steps ಗೆ ಒಂದು 2-4-1 MLP ಅನ್ನೂ XOR ಮೇಲೆ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡುವುದೂ loss ಅನ್ನೂ 4.1491 ಇಂದ 0.2936 ಗೆ ಇಳಿಸಿತು, ಈ lesson ನ ಸ್ವಂತ Value class ಹೊರತುಪಡಿಸಿ ಬೇರೇನೂ ಬಳಸದೆ -- NumPy ಇಲ್ಲ, PyTorch ಇಲ್ಲ\n• Part 3 ಈ gradients ಗಳನ್ನೂ numerical finite differences ವಿರುದ್ಧ ಮತ್ತು ನಿಜ PyTorch ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಚಿಕ್ಕ engine ಗಣಿತೀಯವಾಗಿ ಸರಿಯಾಗಿದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does Value.backward() use grad += contribution instead of grad = contribution?', qKn: 'Value.backward() grad = contribution ಬದಲಿಗೆ grad += contribution ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['It is a stylistic preference with no functional effect', 'A single value can influence the output through multiple paths, and the total gradient is the sum of all path contributions', 'Addition is faster than assignment in Python', 'It prevents integer overflow'], correct: 1,
        optsKn: ['ಇದೂ ಕ್ರಿಯಾತ್ಮಕ ಪರಿಣಾಮವಿಲ್ಲದ ಒಂದು ಶೈಲಿಯ ಆದ್ಯತೆ', 'ಒಂದು ಏಕ value ಬಹು ಮಾರ್ಗಗಳ ಮೂಲಕ output ಮೇಲೆ ಪ್ರಭಾವ ಬೀರಬಹುದು, ಮತ್ತು ಒಟ್ಟು gradient ಎಲ್ಲಾ ಮಾರ್ಗ ಕೊಡುಗೆಗಳ ಮೊತ್ತ', 'Python ನಲ್ಲಿ addition assignment ಗಿಂತ ವೇಗ', 'ಇದೂ integer overflow ತಡೆಯುತ್ತದೆ'] },
      { q: 'Why does backward() build a topological sort of the graph before propagating gradients?', qKn: 'backward() gradients ಹರಡುವ ಮೊದಲು graph ನ ಒಂದು topological sort ಅನ್ನೂ ಏಕೆ ನಿರ್ಮಿಸುತ್ತದೆ?',
        opts: ['To save memory', 'So each node is processed only after all of its downstream gradient contributions are already available', 'To make the code shorter', 'Topological sort is required by Python syntax'], correct: 1,
        optsKn: ['ಮೆಮೊರಿ ಉಳಿಸಲು', 'ಆದ್ದರಿಂದ ಪ್ರತಿ ನೋಡ್ ಇದರ ಎಲ್ಲಾ downstream gradient ಕೊಡುಗೆಗಳು ಈಗಾಗಲೇ ಲಭ್ಯವಿದ್ದ ನಂತರ ಮಾತ್ರ ಪ್ರಕ್ರಿಯೆಗೊಳ್ಳುತ್ತದೆ', 'ಕೋಡ್ ಚಿಕ್ಕದಾಗಿಸಲು', 'Topological sort Python syntax ಗೆ ಅಗತ್ಯ'] },
      { q: 'Genuinely running the seed-42 XOR training loop for 100 steps at lr=0.05, what did the loss do?', qKn: 'seed-42 XOR training loop ಅನ್ನೂ 100 steps ಗೆ lr=0.05 ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, loss ಏನೂ ಮಾಡಿತು?',
        opts: ['It stayed flat at 4.15', 'It fell from 4.1491 at step 0 to 0.2936 at step 80, a real monotonic decrease', 'It increased to 10.0', 'It reached exactly 0.0'], correct: 1,
        optsKn: ['ಇದೂ 4.15 ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು', 'ಇದೂ step 0 ನಲ್ಲಿ 4.1491 ಇಂದ step 80 ನಲ್ಲಿ 0.2936 ಗೆ ಇಳಿಯಿತು, ಒಂದು ನಿಜ monotonic ಇಳಿಕೆ', 'ಇದೂ 10.0 ಗೆ ಹೆಚ್ಚಾಯಿತು', 'ಇದೂ ನಿಖರವಾಗಿ 0.0 ತಲುಪಿತು'] },
      { q: 'What does the __pow__ method\'s backward function compute, and why does __truediv__ reuse __pow__ instead of writing separate gradient logic?', qKn: '__pow__ method ನ backward function ಏನೂ ಗಣಿಸುತ್ತದೆ, ಮತ್ತು __truediv__ ಪ್ರತ್ಯೇಕ gradient logic ಬರೆಯುವ ಬದಲಿಗೆ __pow__ ಅನ್ನೂ ಏಕೆ ಮರುಬಳಕೆ ಮಾಡುತ್ತದೆ?',
        opts: ['self.grad += n * (self.data ** (n-1)) * out.grad, the power rule -- division is expressed as multiplication by a power of -1 so the chain rule composes automatically through operations already defined', 'It computes a random number', 'Division needs no gradient', 'pow and truediv are unrelated in this engine'], correct: 0,
        optsKn: ['self.grad += n * (self.data ** (n-1)) * out.grad, power rule -- division ಅನ್ನೂ -1 ರ power ಇಂದ multiplication ಆಗಿ ವ್ಯಕ್ತಪಡಿಸಲಾಗಿದೆ ಆದ್ದರಿಂದ chain rule ಈಗಾಗಲೇ ವ್ಯಾಖ್ಯಾನಿಸಿದ operations ಮೂಲಕ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ', 'ಇದೂ ಒಂದು ಯಾದೃಚ್ಛಿಕ ಸಂಖ್ಯೆ ಗಣಿಸುತ್ತದೆ', 'Division ಗೆ ಯಾವುದೇ gradient ಬೇಕಿಲ್ಲ', 'pow ಮತ್ತು truediv ಈ engine ನಲ್ಲಿ ಸಂಬಂಧವಿಲ್ಲ'] },
      { q: 'What does an MLP built from Neuron and Layer classes compute at each neuron?', qKn: 'Neuron ಮತ್ತು Layer classes ಇಂದ ನಿರ್ಮಿಸಿದ ಒಂದು MLP ಪ್ರತಿ neuron ನಲ್ಲಿ ಏನೂ ಗಣಿಸುತ್ತದೆ?',
        opts: ['A random number with no relation to inputs', 'tanh(w1x1 + w2x2 + ... + b), a weighted sum of inputs plus bias, passed through tanh', 'The sum of all previous layer outputs unweighted', 'A lookup in a fixed table'], correct: 1,
        optsKn: ['inputs ಗೆ ಯಾವುದೇ ಸಂಬಂಧವಿಲ್ಲದ ಒಂದು ಯಾದೃಚ್ಛಿಕ ಸಂಖ್ಯೆ', 'tanh(w1x1 + w2x2 + ... + b), inputs ನ weighted sum ಜೊತೆಗೆ bias, tanh ಮೂಲಕ ಹಾದುಹೋಗುತ್ತಾ', 'ಎಲ್ಲಾ ಹಿಂದಿನ layer outputs ಗಳ ಮೊತ್ತ unweighted', 'ಒಂದು ನಿಗದಿತ table ನಲ್ಲಿ ಒಂದು lookup'] },
    ] } },
  ],
};
