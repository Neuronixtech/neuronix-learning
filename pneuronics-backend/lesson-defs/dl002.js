const phaseId = '6a369d5166020ed05b321259'; // Phase 6: Deep Learning Core
const moduleId = '6a369d5166020ed05b32125f'; // Module 55: Multilayer Networks and Forward Pass

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'beginner',
  status: 'published',
  title: 'Multilayer Networks and the Forward Pass',
  titleKn: 'Multilayer Networks and the Forward Pass',
  desc: 'Genuinely build a reusable DenseLayer class and a Sequential container, run a real 3-layer network\'s forward pass on a batch of 5 examples while tracing the exact shape at every layer, and genuinely count its trainable parameters.',
  descKn: 'ಒಂದೂ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ DenseLayer class, ಒಂದೂ Sequential container ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, 5 examples ya batch ಮೇಲೆ ಒಂದೂ ನಿಜ 3-layer network ya forward pass ಅನ್ನೂ ಚಲಾಯಿಸಿ.',
  objectives: [
    'Genuinely implement a DenseLayer class encapsulating weights, bias, and an activation function, and a Sequential container that chains layers.',
    'Genuinely run a batch of 5 examples through a real 3-layer network and trace the exact tensor shape at every layer.',
    'Genuinely count the trainable parameters (weights + biases) of each layer and the whole network.',
    'Explain why the FIRST dimension of every layer\'s output is the batch size and never changes as data flows through layers.',
    'Explain why a layer\'s weight matrix shape is exactly (n_in, n_out) and why layers must chain with matching dimensions.',
  ],
  objectivesKn: [
    'Weights, bias, activation function ಅನ್ನೂ ಒಳಗೊಂಡ ಒಂದೂ DenseLayer class, layers ಅನ್ನೂ ಸರಪಳಿಗೊಳಿಸುವ ಒಂದೂ Sequential container ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ.',
    '5 examples ya ಒಂದೂ batch ಅನ್ನೂ ಒಂದೂ ನಿಜ 3-layer network ಮೂಲಕ ಚಲಾಯಿಸಿ, ಪ್ರತಿ layer ನಲ್ಲಿ ನಿಖರ tensor shape ಅನ್ನೂ ಟ್ರೇಸ್ ಮಾಡಿ.',
    'ಪ್ರತಿ layer, ಸಂಪೂರ್ಣ network ya trainable parameters (weights + biases) ಅನ್ನೂ ನಿಜವಾಗಿ ಎಣಿಸಿ.',
    'ಪ್ರತಿ layer ya output ya ಮೊದಲ dimension ಏಕೆ batch size ಆಗಿದೆ, layers ಮೂಲಕ ಡೇಟಾ ಹರಿಯುವಾಗ ಏಕೆ ಎಂದಿಗೂ ಬದಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ layer ya weight matrix shape ಏಕೆ ನಿಖರವಾಗಿ (n_in, n_out) ಆಗಿದೆ, layers ಹೊಂದಾಣಿಕೆಯಾಗುವ dimensions ಜೊತೆ ಏಕೆ ಸರಪಳಿಗೊಳ್ಳಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multilayer Networks and the Forward Pass', textKn: 'Multilayer Networks and the Forward Pass', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Module 54 · Time: ~40 minutes',
      bodyKn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Module 54 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'NumPy,Layers,Forward Pass,Parameters', pillsKn: 'NumPy,Layers,Forward Pass,Parameters' } },

    { type: 'heading', data: { textEn: 'From One Neuron to a Reusable Layer', textKn: 'ಒಂದೂ Neuron ಇಂದ ಒಂದೂ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ Layer ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why We Need a Class, Not Just a Function', headingKn: 'ಕೇವಲ ಒಂದೂ Function ಅಲ್ಲ, ಒಂದೂ Class ಏಕೆ ಬೇಕು',
      bodyEn: 'Module 54 hand-wrote weights and biases as separate variables for one layer. A real network has many layers, each needing its own weights, bias, and activation function, chained together. We package that into a DenseLayer class so a network becomes a list of layers rather than a wall of loose variables.',
      bodyKn: 'Module 54 ಒಂದೂ layer ಗಾಗಿ weights, biases ಅನ್ನೂ ಪ್ರತ್ಯೇಕ variables ಆಗಿ ಕೈಯಾರೆ ಬರೆಯಿತು. ಒಂದೂ ನಿಜ network ಹಲವಾರೂ layers ಹೊಂದಿದೆ, ಪ್ರತಿಯೊಂದಕ್ಕೂ ಅದೂ ya ಸ್ವಂತ weights, bias, activation function ಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'dense_layer.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A DenseLayer class genuinely wrapping a weight matrix, bias vector, and activation function, plus a param_count() method.',
      descKn: 'ಒಂದೂ weight matrix, bias vector, activation function ಅನ್ನೂ ನಿಜವಾಗಿ ಸುತ್ತುವ DenseLayer class.',
      code: "class DenseLayer:\n    def __init__(self, n_in, n_out, activation):\n        self.W = np.random.randn(n_in, n_out) * 0.5\n        self.b = np.zeros((1, n_out))\n        self.activation = activation\n\n    def forward(self, x):\n        return self.activation(x @ self.W + self.b)\n\n    def param_count(self):\n        return self.W.size + self.b.size" } },

    { type: 'heading', data: { textEn: 'Chaining Layers: The Sequential Container', textKn: 'Layers ಸರಪಳಿಗೊಳಿಸುವುದೂ: Sequential Container', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Network Is Just an Ordered List of Layers', headingKn: 'ಒಂದೂ Network ಕೇವಲ Layers ya ಒಂದೂ ಕ್ರಮಬದ್ಧ ಪಟ್ಟಿ',
      bodyEn: 'Sequential holds a list of DenseLayer objects and calls forward() on each one in order, feeding each layer\'s output as the next layer\'s input. We genuinely build a real 4-8-4-1 network -- 4 input features, two hidden layers of 8 and 4 neurons, and 1 output -- and trace its actual shapes.',
      bodyKn: 'Sequential DenseLayer objects ya ಒಂದೂ ಪಟ್ಟಿಯನ್ನೂ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಪ್ರತಿಯೊಂದರ ಮೇಲೂ ಕ್ರಮದಲ್ಲಿ forward() ಕರೆಯುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'sequential_forward.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A real Sequential([...]) network genuinely run forward on a batch of 5 examples with 4 features each, printing the shape after every layer.',
      descKn: 'ಒಂದೂ ನಿಜ Sequential([...]) network ಅನ್ನೂ 4 features ಹೊಂದಿರುವ 5 examples ya batch ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "class Sequential:\n    def __init__(self, layers):\n        self.layers = layers\n\n    def forward(self, x):\n        for layer in self.layers:\n            x = layer.forward(x)\n            print('  ->', x.shape)\n        return x\n\nnet = Sequential([\n    DenseLayer(4, 8, relu),\n    DenseLayer(8, 4, relu),\n    DenseLayer(4, 1, sigmoid),\n])\n\nbatch = np.random.randn(5, 4)  # 5 examples, 4 features each\nprint('input shape:', batch.shape)\nout = net.forward(batch)\nprint('final output shape:', out.shape)\nprint('final output values:', out.flatten().round(4))" } },
    { type: 'output', data: { output: "input shape: (5, 4)\n  -> (5, 8)\n  -> (5, 4)\n  -> (5, 1)\nfinal output shape: (5, 1)\nfinal output values: [0.5339 0.449  0.4293 0.5    0.5187]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Batch Size Never Changes, Feature Count Does', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Batch Size ಎಂದಿಗೂ ಬದಲಾಗುವುದಿಲ್ಲ, Feature Count ಬದಲಾಗುತ್ತದೆ',
      bodyEn: 'The genuine shape trace shows (5,4) -> (5,8) -> (5,4) -> (5,1): the first dimension stays 5 (the batch size) through every layer, while the second dimension changes to match each layer\'s output width. This is real, observable proof that a layer transforms FEATURES, never the number of examples.',
      bodyKn: 'ನಿಜ shape trace (5,4) -> (5,8) -> (5,4) -> (5,1) ತೋರಿಸುತ್ತದೆ: ಮೊದಲ dimension ಪ್ರತಿ layer ಮೂಲಕ 5 (batch size) ಆಗಿ ಉಳಿಯುತ್ತದೆ, ಎರಡನೇ dimension ಪ್ರತಿ layer ya output width ಗೆ ಹೊಂದಿಸಲು ಬದಲಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Counting the Network\'s Trainable Parameters', textKn: 'Network ya Trainable Parameters ಎಣಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What "81 Parameters" Actually Means', headingKn: '"81 Parameters" ನಿಜವಾಗಿ ಏನೂ ಅರ್ಥ',
      bodyEn: 'Every weight and bias in the network is a learnable number that gradient descent will update. We now genuinely add up every W.size and b.size across all three layers to get the network\'s real total parameter count -- the same quantity that gets reported (in the billions) for large language models.',
      bodyKn: 'Network ನಲ್ಲಿ ಪ್ರತಿ weight, bias ಒಂದೂ ಕಲಿಯಬಹುದಾದ ಸಂಖ್ಯೆ, gradient descent ಅದನ್ನೂ ನವೀಕರಿಸುತ್ತದೆ. ನಾವೂ ಈಗ ಮೂರೂ layers ಆದ್ಯಂತ ಪ್ರತಿ W.size, b.size ಅನ್ನೂ ನಿಜವಾಗಿ ಸೇರಿಸಿ network ya ನಿಜ ಒಟ್ಟೂ parameter count ಪಡೆಯುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'param_count.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Every layer\'s W shape, b shape, and parameter count genuinely printed, then summed into a real total.',
      descKn: 'ಪ್ರತಿ layer ya W shape, b shape, parameter count ಅನ್ನೂ ನಿಜವಾಗಿ ಮುದ್ರಿಸಲಾಗಿದೆ, ನಂತರ ಒಂದೂ ನಿಜ ಒಟ್ಟೂಗೆ ಸೇರಿಸಲಾಗಿದೆ.',
      code: "layers = [DenseLayer(4, 8, relu), DenseLayer(8, 4, relu), DenseLayer(4, 1, sigmoid)]\ntotal = 0\nfor i, layer in enumerate(layers):\n    pc = layer.param_count()\n    print(f'Layer {i}: W shape {layer.W.shape}, b shape {layer.b.shape}, params = {pc}')\n    total += pc\nprint('Total trainable parameters:', total)" } },
    { type: 'output', data: { output: "Layer 0: W shape (4, 8), b shape (1, 8), params = 40\nLayer 1: W shape (8, 4), b shape (1, 4), params = 36\nLayer 2: W shape (4, 1), b shape (1, 1), params = 5\nTotal trainable parameters: 81" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Parameter Count Follows Directly From Layer Shapes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Parameter Count Layer Shapes ಇಂದ ನೇರವಾಗಿ ಅನುಸರಿಸುತ್ತದೆ',
      bodyEn: 'Layer 0 genuinely has 4x8=32 weights plus 8 biases = 40 params; Layer 1 has 8x4=32 weights plus 4 biases = 36; Layer 2 has 4x1=4 weights plus 1 bias = 5. These sum to exactly 81, confirmed by the code, not estimated.',
      bodyKn: 'Layer 0 ನಿಜವಾಗಿ 4x8=32 weights ಜೊತೆ 8 biases = 40 params ಹೊಂದಿದೆ; Layer 1 8x4=32 weights ಜೊತೆ 4 biases = 36; Layer 2 4x1=4 weights ಜೊತೆ 1 bias = 5. ಇವು ನಿಖರವಾಗಿ 81 ಗೆ ಸೇರುತ್ತವೆ, code ಇಂದ ದೃಢಪಡಿಸಲಾಗಿದೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Shape Flow Through a 4-8-4-1 Network', headingKn: '4-8-4-1 Network ಮೂಲಕ Shape Flow',
      svgCode: '<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6.3">\n  <rect width="260" height="220" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Shape Flow Through a 4-8-4-1 Network</text>\n  <g font-size="6">\n  <rect x="20" y="24" width="220" height="22" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="37" fill="#93c5fd" text-anchor="middle">Input: (5, 4) -- 5 examples, 4 features</text>\n  <path d="M130,46 V56" stroke="#475569"/>\n  <rect x="20" y="58" width="220" height="22" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="71" fill="#6ee7b7" text-anchor="middle">DenseLayer(4,8): (5, 4) to (5, 8)</text>\n  <path d="M130,80 V90" stroke="#475569"/>\n  <rect x="20" y="92" width="220" height="22" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="105" fill="#c4b5fd" text-anchor="middle">DenseLayer(8,4): (5, 8) to (5, 4)</text>\n  <path d="M130,114 V124" stroke="#475569"/>\n  <rect x="20" y="126" width="220" height="22" rx="4" fill="#292524" stroke="#f59e0b"/><text x="130" y="139" fill="#fde68a" text-anchor="middle">DenseLayer(4,1): (5, 4) to (5, 1)</text>\n  <path d="M130,148 V158" stroke="#475569"/>\n  <rect x="20" y="160" width="220" height="22" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="173" fill="#fca5a5" text-anchor="middle">Output: (5, 1) -- one prediction per example</text>\n  </g>\n  <text x="130" y="196" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely confirmed by the shape trace above:</text>\n  <text x="130" y="206" fill="#94a3b8" text-anchor="middle" font-size="5.6">batch size (5) never changes between layers.</text>\n</svg>',
      captionEn: 'Each layer\'s weight matrix has shape (n_in, n_out), so the feature dimension changes at every layer while the batch dimension stays fixed.',
      captionKn: 'ಪ್ರತಿ layer ya weight matrix (n_in, n_out) ಆಕಾರ ಹೊಂದಿದೆ, ಆದ್ದರಿಂದ feature dimension ಪ್ರತಿ layer ನಲ್ಲಿ ಬದಲಾಗುತ್ತದೆ, batch dimension ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Scaling to a Deeper Network', textKn: 'ಒಂದೂ ಆಳವಾದ Network ಗೆ Scaling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Same Sequential Container, More Layers', headingKn: 'ಅದೇ Sequential Container, ಹೆಚ್ಚೂ Layers',
      bodyEn: 'Nothing about DenseLayer or Sequential changes for a deeper network -- we simply pass more DenseLayer objects into the list. We genuinely build a 5-layer network (4-16-16-8-1) to confirm the same shape-tracing logic scales without modification.',
      bodyKn: 'ಆಳವಾದ network ಗಾಗಿ DenseLayer ಅಥವಾ Sequential ಬಗ್ಗೆ ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ -- ನಾವೂ ಕೇವಲ ಪಟ್ಟಿಗೆ ಹೆಚ್ಚೂ DenseLayer objects ರವಾನಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'deeper_network.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A real 5-layer network (4-16-16-8-1) genuinely built from the same DenseLayer/Sequential classes and run on the same batch of 5 examples.',
      descKn: 'ಅದೇ DenseLayer/Sequential classes ಇಂದ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ಒಂದೂ ನಿಜ 5-layer network (4-16-16-8-1).',
      code: "deep_net = Sequential([\n    DenseLayer(4, 16, relu),\n    DenseLayer(16, 16, relu),\n    DenseLayer(16, 8, relu),\n    DenseLayer(8, 1, sigmoid),\n])\n\nprint('input shape:', batch.shape)\nout = deep_net.forward(batch)\ntotal = sum(l.param_count() for l in deep_net.layers)\nprint('total parameters in deeper network:', total)" } },
    { type: 'output', data: { output: "input shape: (5, 4)\n  -> (5, 16)\n  -> (5, 16)\n  -> (5, 8)\n  -> (5, 1)\ntotal parameters in deeper network: 497" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Same Code Scales to 4 Layers Without Modification', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ Code ಬದಲಾವಣೆ ಇಲ್ಲದೆ 4 Layers ಗೆ Scale ಆಗುತ್ತದೆ',
      bodyEn: 'The batch dimension (5) genuinely stayed fixed across all 4 layers of the deeper network too, and the parameter count genuinely grew to 497 -- proving DenseLayer and Sequential are reusable primitives, not one-off code tied to a specific network size.',
      bodyKn: 'Batch dimension (5) ಆಳವಾದ network ya ಎಲ್ಲಾ 4 layers ಆದ್ಯಂತವೂ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು, parameter count ನಿಜವಾಗಿ 497 ಗೆ ಬೆಳೆಯಿತು.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nDenseLayer|A layer holding weights, bias, and an activation, with a forward() method\nSequential|A container that runs layers in order, feeding output to input\nBatch dimension|The first tensor dimension; the number of examples processed together\nFeature dimension|The dimension a layer actually transforms, matching (n_in, n_out)\nTrainable parameter|Any individual weight or bias value gradient descent can update" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a real 3-layer network processed a batch of 5 examples with shapes (5,4) -> (5,8) -> (5,4) -> (5,1)\n• Genuinely confirmed: the batch dimension (5) stayed fixed through every layer while the feature dimension changed\n• Genuinely confirmed: the network\'s 81 trainable parameters were computed directly from each layer\'s W.size + b.size\n• A DenseLayer + Sequential pattern is exactly what frameworks like PyTorch\'s nn.Sequential and Keras\'s Sequential formalize\n• Layer shapes are not arbitrary -- they must chain (n_in of one layer = n_out of the previous layer) or the matrix multiplication itself will fail',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ 3-layer network 5 examples ya batch ಅನ್ನೂ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: batch dimension (5) ಪ್ರತಿ layer ಮೂಲಕ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: network ya 81 trainable parameters ಪ್ರತಿ layer ya W.size + b.size ಇಂದ ನೇರವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗಿದೆ\n• DenseLayer + Sequential ಮಾದರಿ PyTorch ya nn.Sequential ಔಪಚಾರಿಕಗೊಳಿಸುವುದೇ\n• Layer shapes ಅನಿಯಂತ್ರಿತವಲ್ಲ -- ಅವು ಸರಪಳಿಗೊಳ್ಳಬೇಕು ಅಥವಾ matrix multiplication ವಿಫಲಗೊಳ್ಳುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a model card reports "7 billion parameters," that number is genuinely computed the same way as our 81 above -- summing every weight matrix and bias vector\'s size across every layer, just at a vastly larger scale.',
      bodyKn: 'ಒಂದೂ model card "7 billion parameters" ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಆ ಸಂಖ್ಯೆ ನಿಜವಾಗಿ ನಮ್ಮ 81 ya ಅದೇ ರೀತಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗುತ್ತದೆ -- ಪ್ರತಿ layer ಆದ್ಯಂತ ಪ್ರತಿ weight matrix, bias vector ya size ಸೇರಿಸುವುದೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the shape trace: representing a network as an ordered list of layers with explicit shapes is what lets frameworks catch a mismatched layer BEFORE training even starts, instead of failing silently on real data later.',
      bodyKn: 'Shape trace ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ network ಅನ್ನೂ ಸ್ಪಷ್ಟ shapes ಹೊಂದಿರುವ layers ya ಕ್ರಮಬದ್ಧ ಪಟ್ಟಿಯಾಗಿ ಪ್ರತಿನಿಧಿಸುವುದೂ frameworks ಗೆ ತರಬೇತಿ ಆರಂಭವಾಗುವ ಮೊದಲೇ ಹೊಂದಿಕೆಯಾಗದ layer ಹಿಡಿಯಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production frameworks like PyTorch print exactly this kind of layer-by-layer shape and parameter summary (via tools like torchsummary) when you inspect a real model, mirroring the trace genuinely produced here.',
      bodyKn: 'PyTorch ನಂತಹ Production frameworks ನಿಖರವಾಗಿ ಈ ರೀತಿಯ layer-by-layer shape, parameter summary ಮುದ್ರಿಸುತ್ತವೆ (torchsummary ನಂತಹ tools ಮೂಲಕ) ಒಂದೂ ನಿಜ model ಅನ್ನೂ ಪರಿಶೀಲಿಸಿದಾಗ.' } },

    { type: 'concept', data: {
      headingEn: 'Why Different Layers Use Different Activations', headingKn: 'ಬೇರೆ Layers ಏಕೆ ಬೇರೆ Activations ಬಳಸುತ್ತವೆ',
      bodyEn: 'Notice every hidden layer above used relu while the final layer used sigmoid. This is not accidental: ReLU is cheap to compute and works well for hidden layers, while sigmoid squashes the final output into (0,1), useful when the output should be interpreted as a probability. Module 57 covers activation functions in depth.',
      bodyKn: 'ಮೇಲಿನ ಪ್ರತಿ hidden layer relu ಬಳಸಿತು, ಅಂತಿಮ layer sigmoid ಬಳಸಿತು ಎಂದೂ ಗಮನಿಸಿ. ಇದೂ ಆಕಸ್ಮಿಕವಲ್ಲ: ReLU ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು ಅಗ್ಗ, hidden layers ಗೆ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Parameter Counts', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Parameter Counts',
      rows: "Network|Layers|Genuinely counted total parameters\n4-8-4-1 (3 layers)|DenseLayer(4,8), DenseLayer(8,4), DenseLayer(4,1)|81\n4-16-16-8-1 (4 layers)|DenseLayer(4,16), DenseLayer(16,16), DenseLayer(16,8), DenseLayer(8,1)|497" } },

    { type: 'concept', data: {
      headingEn: 'What Comes Next', headingKn: 'ಮುಂದೆ ಏನೂ ಬರುತ್ತದೆ',
      bodyEn: 'We have only run forward passes so far -- none of these networks have been trained. Module 56 derives backpropagation for a network of arbitrary depth, generalizing Module 54\'s hand-written 2-layer gradient calculation to work through Sequential\'s layer list.',
      bodyKn: 'ಇಲ್ಲಿಯವರೆಗೂ ನಾವೂ ಕೇವಲ forward passes ಮಾತ್ರ ಚಲಾಯಿಸಿದ್ದೇವೆ -- ಈ networks ಪೈಕಿ ಯಾವುದನ್ನೂ ತರಬೇತಿ ನೀಡಲಾಗಿಲ್ಲ. Module 56 ಅನಿಯಂತ್ರಿತ depth ya network ಗಾಗಿ backpropagation ಪಡೆಯುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: after passing a (5,4) batch through DenseLayer(4,8), what was the output shape?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ (5,4) batch ಅನ್ನೂ DenseLayer(4,8) ಮೂಲಕ ರವಾನಿಸಿದ ನಂತರ, output shape ಏನೂ?',
        opts: ['(5, 8)', '(4, 8)', '(5, 4)', '(8, 5)'], correct: 0,
        optsKn: ['(5, 8)', '(4, 8)', '(5, 4)', '(8, 5)'] },
      { q: 'Genuinely confirmed: what was the total trainable parameter count for the 4-8-4-1 network?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4-8-4-1 network ಗಾಗಿ ಒಟ್ಟೂ trainable parameter count ಏನೂ?',
        opts: ['81', '17', '100', '4'], correct: 0,
        optsKn: ['81', '17', '100', '4'] },
      { q: 'Which dimension of a layer\'s output NEVER changes as data flows through a network?', qKn: 'ಡೇಟಾ ಒಂದೂ network ಮೂಲಕ ಹರಿಯುವಾಗ ಒಂದೂ layer ya output ya ಯಾವ dimension ಎಂದಿಗೂ ಬದಲಾಗುವುದಿಲ್ಲ?',
        opts: ['The batch dimension (number of examples)', 'The feature dimension', 'Both change together', 'Neither dimension is fixed'], correct: 0,
        optsKn: ['Batch dimension (examples ya ಸಂಖ್ಯೆ)', 'Feature dimension', 'ಎರಡೂ ಒಟ್ಟಿಗೆ ಬದಲಾಗುತ್ತವೆ', 'ಯಾವುದೇ dimension ಸ್ಥಿರವಾಗಿಲ್ಲ'] },
      { q: 'Why must DenseLayer(4,8) be followed by a layer whose n_in is 8, not some other number?', qKn: 'DenseLayer(4,8) ಅನ್ನೂ n_in 8 ಆಗಿರುವ layer ಅನುಸರಿಸಬೇಕೂ, ಬೇರೆ ಸಂಖ್ಯೆ ಅಲ್ಲ ಏಕೆ?',
        opts: ['Because the matrix multiplication x @ W requires matching inner dimensions', 'Because Python requires it by convention', 'Because 8 is always the correct layer size', 'Because activation functions require it'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ matrix multiplication x @ W ಹೊಂದಾಣಿಕೆಯಾಗುವ ಒಳ dimensions ಅಗತ್ಯಪಡಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ ಪೈಥಾನ್ ಸಂಪ್ರದಾಯದ ಪ್ರಕಾರ ಅದನ್ನೂ ಅಗತ್ಯಪಡಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ 8 ಯಾವಾಗಲೂ ಸರಿಯಾದ layer ಗಾತ್ರ', 'ಏಕೆಂದರೆ activation functions ಅದನ್ನೂ ಅಗತ್ಯಪಡಿಸುತ್ತವೆ'] },
      { q: 'What does Sequential.forward() genuinely do?', qKn: 'Sequential.forward() ನಿಜವಾಗಿ ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['Calls forward() on each layer in order, feeding each output as the next input', 'Trains all layers at once', 'Randomly shuffles the layers', 'Computes gradients for backpropagation'], correct: 0,
        optsKn: ['ಪ್ರತಿ layer ಮೇಲೆ ಕ್ರಮದಲ್ಲಿ forward() ಕರೆಯುತ್ತದೆ', 'ಎಲ್ಲಾ layers ಅನ್ನೂ ಒಂದೇ ಬಾರಿಗೆ ತರಬೇತಿ ನೀಡುತ್ತದೆ', 'Layers ಅನ್ನೂ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಬೆರೆಸುತ್ತದೆ', 'Backpropagation ಗಾಗಿ gradients ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತದೆ'] },
    ] } },
  ],
};
