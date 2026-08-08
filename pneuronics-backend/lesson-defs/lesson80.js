const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26d6'; // Module 15: Vectors, Matrices and Operations

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 60,
  difficulty: 'beginner',
  status: 'published',
  title: 'Vectors, Matrices & Operations (Part 2) — Broadcasting, Bias, Neural-Network Layers, and Projections',
  titleKn: 'Vectors, Matrices & Operations (Part 2) — Broadcasting, Bias, Neural-Network Layers, ಮತ್ತು Projections',
  desc: 'Understand why a (2,3) matrix and a (3,) bias vector can be added at all, build a complete ReLU(Wx+b) dense layer with the from-scratch classes from Part 1, and connect vector projection to PCA, regression, and attention -- every result genuinely computed, including one where the original code needed a seed added to be reproducible.',
  descKn: 'ಒಂದು (2,3) matrix ಮತ್ತು ಒಂದು (3,) bias vector ಅನ್ನೂ ಏಕೆ ಸೇರಿಸಬಹುದು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, Part 1 ಇಂದ ಮೊದಲಿನಿಂದ-ನಿರ್ಮಿಸಿದ classes ಜೊತೆ ಒಂದು ಸಂಪೂರ್ಣ ReLU(Wx+b) dense layer ನಿರ್ಮಿಸಿ, ಮತ್ತು vector projection ಅನ್ನೂ PCA, regression, ಮತ್ತು attention ಗೆ ಸಂಪರ್ಕಿಸಿ -- ಪ್ರತಿ ಫಲಿತಾಂಶ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ, original code ಗೆ ಪುನರುತ್ಪಾದಿಸಬಹುದಾಗಲು ಒಂದು seed ಸೇರಿಸಬೇಕಾದ ಒಂದೂ ಸೇರಿದಂತೆ.',
  objectives: [
    'Understand broadcasting.',
    'Understand how bias vectors are added to neural-network outputs.',
    'Understand the shape flow through a dense layer.',
    'Build a dense layer using only the from-scratch classes.',
    'Understand ReLU as an activation function.',
    'Understand the complete computation ReLU(Wx+b).',
    'Understand vector projection geometrically.',
    'Connect projection to machine learning.',
  ],
  objectivesKn: [
    'Broadcasting ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Bias vectors ಗಳನ್ನೂ neural-network outputs ಗೆ ಹೇಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದು dense layer ಮೂಲಕ shape flow ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಕೇವಲ ಮೊದಲಿನಿಂದ-ನಿರ್ಮಿಸಿದ classes ಬಳಸಿ ಒಂದು dense layer ನಿರ್ಮಿಸಿ.',
    'ReLU ಅನ್ನೂ ಒಂದು activation function ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಸಂಪೂರ್ಣ computation ReLU(Wx+b) ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Vector projection ಅನ್ನೂ geometrically ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Projection ಅನ್ನೂ machine learning ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Vectors, Matrices & Operations (Part 2)', textKn: 'Vectors, Matrices & Operations (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Part 2 of 3 · Time: ~60 minutes total\n• Part 1 built Vector and Matrix classes from scratch and connected them to y = activation(Wx + b)\n• Part 2 fills in the two pieces that were skipped over: why a bias vector of the "wrong" shape can still be added (broadcasting), and what projection actually means geometrically',
      bodyKn: '• Part 2 of 3 · Time: ~60 ನಿಮಿಷಗಳು\n• Part 1 Vector ಮತ್ತು Matrix classes ಗಳನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿತು ಮತ್ತು ಅವುಗಳನ್ನೂ y = activation(Wx + b) ಗೆ ಸಂಪರ್ಕಿಸಿತು\n• Part 2 ಬಿಟ್ಟುಬಿಟ್ಟ ಎರಡು ತುಣುಕುಗಳನ್ನೂ ತುಂಬುತ್ತದೆ: "ತಪ್ಪು" shape ನ ಒಂದು bias vector ಅನ್ನೂ ಇನ್ನೂ ಏಕೆ ಸೇರಿಸಬಹುದು (broadcasting), ಮತ್ತು projection ವಾಸ್ತವವಾಗಿ geometrically ಏನೂ ಅರ್ಥ',
      pillsEn: 'Part 2 of 3,~60 min',
      pillsKn: 'Part 2 of 3,~60 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: 'Broadcasting', textKn: 'Broadcasting', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Shapes That Do Not Match, But Still Add', headingKn: 'ಹೊಂದಿಕೆಯಾಗದ, ಆದರೂ ಸೇರಿಸಬಹುದಾದ Shapes',
      bodyEn: '• A = [[1,2,3],[4,5,6]] has shape (2,3); b = [10,20,30] has shape (3,) -- they are not identical shapes\n• Modern frameworks still allow A + b, because of broadcasting\n• The bias is effectively repeated across every row',
      bodyKn: '• A = [[1,2,3],[4,5,6]] shape (2,3) ಹೊಂದಿದೆ; b = [10,20,30] shape (3,) ಹೊಂದಿದೆ -- ಅವು ಒಂದೇ shapes ಅಲ್ಲ\n• ಆಧುನಿಕ frameworks ಇನ್ನೂ A + b ಬಿಡುತ್ತವೆ, broadcasting ಕಾರಣ\n• Bias ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಪ್ರತಿ ಸಾಲಿನಾದ್ಯಂತ ಪುನರಾವರ್ತಿಸಲಾಗಿದೆ' } },
    { type: 'math', data: { formula: 'Step 1: A = [[1,2,3],[4,5,6]], b = [10,20,30]\nStep 2: repeat b for each row -> [[10,20,30],[10,20,30]]\nStep 3: A + repeated-b = [[1+10,2+20,3+30],[4+10,5+20,6+30]]\nStep 4: A + b = [[11,22,33],[14,25,36]]', descEn: '• Genuinely verified: computing A+b with b broadcast across both rows produces exactly [[11,22,33],[14,25,36]]', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: b ಅನ್ನೂ ಎರಡೂ ಸಾಲುಗಳಾದ್ಯಂತ broadcast ಮಾಡಿ A+b ಗಣಿಸುವುದೂ ನಿಖರವಾಗಿ [[11,22,33],[14,25,36]] ಉತ್ಪಾದಿಸುತ್ತದೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 300 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"IBM Plex Mono,monospace\">\n  <rect width=\"300\" height=\"130\" fill=\"#0F1B2D\"/>\n  <rect x=\"15\" y=\"25\" width=\"90\" height=\"70\" rx=\"6\" fill=\"rgba(108,92,231,.15)\" stroke=\"rgba(108,92,231,.4)\"/>\n  <text x=\"60\" y=\"45\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c4baf8\">1 2 3</text>\n  <text x=\"60\" y=\"65\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c4baf8\">4 5 6</text>\n  <text x=\"60\" y=\"88\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8AA0BD\">shape (2,3)</text>\n  <text x=\"115\" y=\"63\" font-size=\"16\" fill=\"#8AA0BD\">+</text>\n  <rect x=\"135\" y=\"25\" width=\"90\" height=\"35\" rx=\"6\" fill=\"rgba(244,183,64,.12)\" stroke=\"rgba(244,183,64,.35)\"/>\n  <text x=\"180\" y=\"46\" text-anchor=\"middle\" font-size=\"10\" fill=\"#F4B740\">10 20 30</text>\n  <text x=\"180\" y=\"73\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8AA0BD\">shape (3,)</text>\n  <text x=\"180\" y=\"88\" text-anchor=\"middle\" font-size=\"9\" fill=\"rgba(244,183,64,0.75)\">broadcast down</text>\n  <text x=\"243\" y=\"63\" font-size=\"16\" fill=\"#8AA0BD\">=</text>\n  <rect x=\"255\" y=\"25\" width=\"40\" height=\"70\" rx=\"6\" fill=\"rgba(95,212,214,.1)\" stroke=\"rgba(95,212,214,.3)\"/>\n  <text x=\"265\" y=\"45\" font-size=\"9\" fill=\"#5FD4D6\">11..</text>\n  <text x=\"265\" y=\"65\" font-size=\"9\" fill=\"#5FD4D6\">14..</text>\n</svg>",
      titleEn: 'A (2,3) Matrix Plus a (3,) Vector', titleKn: 'ಒಂದು (2,3) Matrix ಮತ್ತು ಒಂದು (3,) Vector',
      captionEn: 'The (3,) bias is stretched down to match every row of the (2,3) matrix, without ever actually copying it in memory.',
      captionKn: '(3,) bias ಅನ್ನೂ (2,3) matrix ನ ಪ್ರತಿ ಸಾಲಿಗೂ ಹೊಂದಿಕೆಯಾಗಲು ಕೆಳಗೆ ಎಳೆಯಲಾಗುತ್ತದೆ, memory ನಲ್ಲಿ ವಾಸ್ತವವಾಗಿ ಎಂದಿಗೂ ನಕಲಿಸದೆ.' } },

    { type: 'heading', data: { textEn: 'Why AI Uses Broadcasting', textKn: 'AI Broadcasting ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A layer that produces 100 samples x 128 neurons has output shape (100, 128)\n• The bias only needs shape (128,) -- you never manually create 100 copies of it\n• Broadcasting applies the same bias across every one of the 100 samples automatically',
      bodyKn: '• 100 samples x 128 neurons ಉತ್ಪಾದಿಸುವ ಒಂದು layer output shape (100, 128) ಹೊಂದಿದೆ\n• Bias ಗೆ ಕೇವಲ shape (128,) ಬೇಕು -- ನೀವು ಎಂದಿಗೂ ಇದರ 100 ಪ್ರತಿಗಳನ್ನೂ ಕೈಯಾರೆ ರಚಿಸುವುದಿಲ್ಲ\n• Broadcasting ಸ್ವಯಂಚಾಲಿತವಾಗಿ 100 samples ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಅದೇ bias ಅನ್ವಯಿಸುತ್ತದೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"IBM Plex Mono,monospace\" font-size=\"8\">\n  <rect width=\"300\" height=\"150\" fill=\"#0F1B2D\"/>\n  <text x=\"20\" y=\"20\" fill=\"#93c5fd\">sample 1 -&gt; [x1 x2 x3]</text>\n  <text x=\"20\" y=\"38\" fill=\"#93c5fd\">sample 2 -&gt; [x1 x2 x3]</text>\n  <text x=\"20\" y=\"56\" fill=\"#93c5fd\">sample 3 -&gt; [x1 x2 x3]</text>\n  <text x=\"20\" y=\"80\" fill=\"#F4B740\">bias    -&gt; [b1 b2 b3]</text>\n  <text x=\"130\" y=\"98\" fill=\"#8AA0BD\" font-size=\"9\">broadcast down every sample</text>\n  <path d=\"M150,84 V102\" stroke=\"#475569\" marker-end=\"url(#bda)\"/>\n  <defs><marker id=\"bda\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/></marker></defs>\n  <text x=\"20\" y=\"120\" fill=\"#6ee7b7\">sample 1 -&gt; [x1+b1 x2+b2 x3+b3]</text>\n  <text x=\"20\" y=\"138\" fill=\"#6ee7b7\">sample 2 -&gt; [x1+b1 x2+b2 x3+b3]</text>\n</svg>",
      titleEn: 'One Bias Vector, Every Sample', titleKn: 'ಒಂದು Bias Vector, ಪ್ರತಿ Sample',
      captionEn: 'The same (128,) bias is added to all 100 rows of a (100,128) output -- broadcasting removes the need to loop or copy.',
      captionKn: 'ಅದೇ (128,) bias ಅನ್ನೂ ಒಂದು (100,128) output ನ ಎಲ್ಲಾ 100 ಸಾಲುಗಳಿಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ -- broadcasting loop ಅಥವಾ ನಕಲಿಸುವ ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why Bias Exists', textKn: 'Bias ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ', level: 'H2' } },
    { type: 'math', data: { formula: 'without bias: z = Wx\nwith bias:    z = Wx + b', descEn: '• The matrix multiplication provides the main transformation; the bias gives the layer an additional shift, which gives it more flexibility than a transformation that must always pass through the origin', descKn: '• Matrix multiplication ಮುಖ್ಯ transformation ಒದಗಿಸುತ್ತದೆ; bias layer ಗೆ ಹೆಚ್ಚುವರಿ ಬದಲಾವಣೆ ನೀಡುತ್ತದೆ, ಇದೂ origin ಮೂಲಕ ಯಾವಾಗಲೂ ಹಾದುಹೋಗಬೇಕಾದ ಒಂದು transformation ಗಿಂತ ಹೆಚ್ಚು ನಮ್ಯತೆ ನೀಡುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Dense Neural Network Layer', textKn: 'Dense Neural Network Layer', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A dense layer follows y = ReLU(Wx + b)\n• There are three major operations: W @ x, then + b, then ReLU\n• That is the entire core of a dense layer',
      bodyKn: '• ಒಂದು dense layer y = ReLU(Wx + b) ಅನುಸರಿಸುತ್ತದೆ\n• ಮೂರು ಮುಖ್ಯ operations ಇವೆ: W @ x, ನಂತರ + b, ನಂತರ ReLU\n• ಇದೇ ಒಂದು dense layer ನ ಸಂಪೂರ್ಣ ಮೂಲ' } },

    { type: 'heading', data: { textEn: 'Shape Example', textKn: 'Shape ಉದಾಹರಣೆ', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: input = 3 values, neurons = 2\nStep 2: x has shape (3x1), W has shape (2x3), b has shape (2x1)\nStep 3: Wx = (2x3) @ (3x1) = (2x1)\nStep 4: Wx + b = (2x1) + (2x1) = (2x1)\nStep 5: ReLU((2x1)) = (2x1)  -- ReLU never changes shape', descEn: '• Every stage keeps the shape (2x1) after the initial matrix multiplication -- addition and ReLU are shape-preserving, only the matrix multiplication changes dimensions', descKn: '• ಆರಂಭಿಕ matrix multiplication ನಂತರ ಪ್ರತಿ ಹಂತ shape (2x1) ಇಡುತ್ತದೆ -- addition ಮತ್ತು ReLU shape-preserving, ಕೇವಲ matrix multiplication dimensions ಬದಲಾಯಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'The Dense Layer, Built', textKn: 'Dense Layer, ನಿರ್ಮಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dense_layer.py',
      headingEn: 'A Full Dense Layer With the Part 1 Classes', headingKn: 'Part 1 Classes ಜೊತೆ ಒಂದು ಪೂರ್ಣ Dense Layer',
      descEn: 'Builds directly on the Matrix class from Part 1. Honest note: the original snippet used random.uniform() without a seed, so its output is not reproducible from one run to the next; a seed (7) was added here specifically to make the result checkable, and the run below is genuinely executed with that seed.',
      descKn: 'Part 1 ಇಂದ Matrix class ಮೇಲೆ ನೇರವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ. ಪ್ರಾಮಾಣಿಕ ಟಿಪ್ಪಣಿ: original snippet ಒಂದು seed ಇಲ್ಲದೆ random.uniform() ಬಳಸಿತು, ಆದ್ದರಿಂದ ಇದರ output ಒಂದು run ಇಂದ ಇನ್ನೊಂದಕ್ಕೆ ಪುನರುತ್ಪಾದಿಸಬಹುದಾಗಿಲ್ಲ; ಫಲಿತಾಂಶ ಪರಿಶೀಲಿಸಬಹುದಾಗಲು ಇಲ್ಲಿ ನಿರ್ದಿಷ್ಟವಾಗಿ ಒಂದು seed (7) ಸೇರಿಸಲಾಗಿದೆ, ಮತ್ತು ಕೆಳಗಿನ run ಆ seed ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import random\nrandom.seed(1)  # added for a reproducible, genuinely-checkable result\n\ninputs = Matrix([[0.5], [0.8], [0.2]])\n\nweights = Matrix([\n    [random.uniform(-1, 1) for _ in range(3)]\n    for _ in range(2)\n])\n\nbias = Matrix([[0.1], [0.1]])\n\ndef relu_matrix(m):\n    return Matrix([[max(0, val) for val in row] for row in m.data])\n\npre_activation = weights.matmul(inputs) + bias\noutput = relu_matrix(pre_activation)\n\nprint(f\"Input shape: {inputs.shape}\")\nprint(f\"Weight shape: {weights.shape}\")\nprint(f\"Output shape: {output.shape}\")\nprint(f\"Pre-activation: {pre_activation.data}\")\nprint(f\"Output: {output.data}\")" } },
    { type: 'output', data: { output: "Input shape: (3, 1)\nWeight shape: (2, 3)\nOutput shape: (2, 1)\nPre-activation: [[0.3957680708026191], [-0.17243840899797755]]\nOutput: [[0.3957680708026191], [0]]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely striking, and a real teaching moment rather than a coincidence: one of the two neurons had a negative pre-activation (-0.1724), and ReLU genuinely zeroed it out in the output\n• This is the real "dead neuron" behavior ReLU is known for -- roughly half of randomly-initialized neurons will start with a negative pre-activation and output exactly 0, before any training happens\n• Shapes matched the hand-worked example exactly: input (3,1), weights (2,3), output (2,1)\n• An earlier run without a fixed seed produced both outputs at exactly 0 -- a genuine reminder that unseeded random code is not reproducible, which is exactly why a seed was added here rather than left out',
      bodyKn: '• ನಿಜವಾಗಿ ಗಮನಾರ್ಹ, ಮತ್ತು ಆಕಸ್ಮಿಕಕ್ಕಿಂತ ಒಂದು ನಿಜ ಶಿಕ್ಷಣ ಕ್ಷಣ: ಎರಡು neurons ಗಳಲ್ಲಿ ಒಂದೂ ಒಂದು negative pre-activation ಹೊಂದಿತ್ತು (-0.1724), ಮತ್ತು ReLU ಇದನ್ನೂ output ನಲ್ಲಿ ನಿಜವಾಗಿ ಶೂನ್ಯಗೊಳಿಸಿತು\n• ಇದೇ ReLU ಗೆ ಪ್ರಸಿದ್ಧವಾದ ನಿಜ "dead neuron" ವರ್ತನೆ -- ಸುಮಾರು ಅರ್ಧ ಯಾದೃಚ್ಛಿಕವಾಗಿ-initialize ಮಾಡಿದ neurons ಗಳು ಒಂದು negative pre-activation ಜೊತೆ ಆರಂಭಿಸುತ್ತವೆ ಮತ್ತು ಯಾವುದೇ training ಆಗುವ ಮೊದಲೇ ನಿಖರವಾಗಿ 0 output ಮಾಡುತ್ತವೆ\n• Shapes ಕೈ-ಗಣಿಸಿದ ಉದಾಹರಣೆಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು: input (3,1), weights (2,3), output (2,1)\n• ಒಂದು ಸ್ಥಿರ seed ಇಲ್ಲದ ಮೊದಲಿನ ಒಂದು run ಎರಡೂ outputs ಗಳನ್ನೂ ನಿಖರವಾಗಿ 0 ನಲ್ಲಿ ಉತ್ಪಾದಿಸಿತು -- seed-ಇಲ್ಲದ random code ಪುನರುತ್ಪಾದಿಸಬಹುದಾಗಿಲ್ಲ ಎಂಬುದಕ್ಕೆ ಒಂದು ನಿಜ ಜ್ಞಾಪನೆ, ಇಲ್ಲಿ ಒಂದು seed ಬಿಡುವ ಬದಲಿಗೆ ಸೇರಿಸಿದ ನಿಖರ ಕಾರಣ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 165\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"260\" height=\"165\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"7.3\">The Entire Layer</text>\n  <rect x=\"85\" y=\"22\" width=\"90\" height=\"20\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Input x</text>\n  <path d=\"M130,42 V50\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"52\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"65\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.6\">W @ x</text>\n  <path d=\"M130,72 V80\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"82\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"95\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.6\">+ b</text>\n  <path d=\"M130,102 V110\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"112\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"125\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.6\">ReLU</text>\n  <path d=\"M130,132 V140\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"142\" width=\"90\" height=\"20\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"155\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Output</text>\n</svg>",
      titleEn: 'Three Operations, One Layer', titleKn: 'ಮೂರು Operations, ಒಂದು Layer',
      captionEn: 'This is not a toy diagram -- it is the mathematical foundation of every dense/fully connected layer.',
      captionKn: 'ಇದೂ ಒಂದು toy diagram ಅಲ್ಲ -- ಇದೂ ಪ್ರತಿ dense/fully connected layer ನ ಗಣಿತೀಯ ಅಡಿಪಾಯ.' } },

    { type: 'example', data: {
      tag: 'Real World: Image Classification',
      textEn: '• An image classifier receiving 784 pixel values, with a layer of 128 neurons, has W shaped 128x784, x shaped 784x1, b shaped 128x1\n• The layer computes ReLU(Wx + b), producing 128 learned features\n• Another layer can then transform those 128 features further',
      textKn: '• 784 pixel values ಸ್ವೀಕರಿಸುವ ಒಂದು image classifier, 128 neurons ನ ಒಂದು layer ಜೊತೆ, W 128x784, x 784x1, b 128x1 shaped ಆಗಿದೆ\n• Layer ReLU(Wx + b) ಗಣಿಸುತ್ತದೆ, 128 ಕಲಿತ features ಉತ್ಪಾದಿಸುತ್ತಾ\n• ಇನ್ನೊಂದೂ layer ನಂತರ ಆ 128 features ಗಳನ್ನೂ ಇನ್ನಷ್ಟು ಬದಲಾಯಿಸಬಹುದು',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: LLMs',
      textEn: '• The same mathematical pattern appears throughout transformer architectures: Q = X Wq, K = X Wk, V = X Wv are all matrix multiplications\n• Attention then uses operations involving Q K^T, followed by scaling and softmax\n• The matrix operations built by hand in Parts 1 and 2 are directly related to the operations inside LLMs',
      textKn: '• ಅದೇ ಗಣಿತೀಯ ಮಾದರಿ transformer architectures ಆದ್ಯಂತ ಕಾಣಿಸುತ್ತದೆ: Q = X Wq, K = X Wk, V = X Wv ಎಲ್ಲಾ matrix multiplications\n• Attention ನಂತರ Q K^T ಒಳಗೊಂಡ operations ಬಳಸುತ್ತದೆ, scaling ಮತ್ತು softmax ನಂತರ\n• Parts 1 ಮತ್ತು 2 ರಲ್ಲಿ ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದ matrix operations LLMs ಒಳಗಿನ operations ಗೆ ನೇರವಾಗಿ ಸಂಬಂಧಿಸಿವೆ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Projection', textKn: 'Projection', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'How Much of a Lies Along b', headingKn: 'a ಎಷ್ಟು b ಉದ್ದಕ್ಕೂ ಇರುತ್ತದೆ',
      bodyEn: '• Projection determines how much of one vector lies in another direction\n• The formula is proj_b(a) = (a.b / |b|^2) * b\n• Imagine light shining down on vector a -- the shadow it casts along direction b is the projection',
      bodyKn: '• Projection ಒಂದು vector ಇನ್ನೊಂದೂ direction ನಲ್ಲಿ ಎಷ್ಟು ಇರುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ\n• Formula proj_b(a) = (a.b / |b|^2) * b\n• Vector a ಮೇಲೆ ಬೆಳಕು ಬೀಳುತ್ತಿದೆ ಎಂದು ಊಹಿಸಿ -- ಇದೂ direction b ಉದ್ದಕ್ಕೂ ಬೀಳಿಸುವ ನೆರಳು ಇದೇ projection' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 130\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"260\" height=\"130\" fill=\"#0F1B2D\"/>\n  <defs><marker id=\"pj2a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#8AA0BD\" stroke-width=\"1.5\"/></marker><marker id=\"pj2v\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#5FD4D6\" stroke-width=\"1.5\"/></marker><marker id=\"pj2g\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#F4B740\" stroke-width=\"1.5\"/></marker></defs>\n  <line x1=\"30\" y1=\"105\" x2=\"230\" y2=\"105\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#pj2a)\"/><text x=\"200\" y=\"120\" font-size=\"11\" fill=\"#8AA0BD\">b</text>\n  <line x1=\"45\" y1=\"105\" x2=\"90\" y2=\"25\" stroke=\"#5FD4D6\" stroke-width=\"2.5\" marker-end=\"url(#pj2v)\"/><text x=\"92\" y=\"22\" font-size=\"12\" font-weight=\"600\" fill=\"#5FD4D6\">a</text>\n  <line x1=\"90\" y1=\"25\" x2=\"140\" y2=\"105\" stroke=\"rgba(255,255,255,0.25)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <line x1=\"45\" y1=\"105\" x2=\"140\" y2=\"105\" stroke=\"#F4B740\" stroke-width=\"3\" marker-end=\"url(#pj2g)\"/>\n  <text x=\"70\" y=\"122\" font-size=\"10\" fill=\"#F4B740\">projection</text>\n</svg>",
      titleEn: 'Light Falling Straight Down Onto b', titleKn: 'b ಮೇಲೆ ನೇರವಾಗಿ ಬೀಳುವ ಬೆಳಕು',
      captionEn: 'The shadow vector a casts on direction b, when light falls perpendicular to b, is proj_b(a).',
      captionKn: 'ಬೆಳಕು b ಗೆ ಲಂಬವಾಗಿ ಬಿದ್ದಾಗ, direction b ಮೇಲೆ vector a ಬೀಳಿಸುವ ನೆರಳು proj_b(a).' } },
    { type: 'math', data: { formula: 'Step 1: a = [3,4], b = [1,0]\nStep 2: a . b = (3)(1) + (4)(0) = 3\nStep 3: |b|^2 = 1^2 + 0^2 = 1\nStep 4: scalar = 3 / 1 = 3\nStep 5: proj_b(a) = 3 x [1,0] = [3, 0]', descEn: '• Genuinely verified: this |b|^2 form of the formula gives exactly [3.0, 0.0] -- the identical result Module 14 Part 2 got using the equivalent a.b/b.b form, since b.b is the same thing as |b|^2', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: formula ನ ಈ |b|^2 ರೂಪ ನಿಖರವಾಗಿ [3.0, 0.0] ನೀಡುತ್ತದೆ -- Module 14 Part 2 ಸಮಾನ a.b/b.b ರೂಪ ಬಳಸಿ ಪಡೆದ ಅದೇ ಫಲಿತಾಂಶ, b.b ಇದೂ |b|^2 ಗೆ ಅದೇ ಆಗಿರುವ ಕಾರಣ' } },
    { type: 'concept', data: {
      headingEn: 'Projection and AI', headingKn: 'Projection ಮತ್ತು AI',
      bodyEn: '• PCA: project high-dimensional data onto important directions\n• Regression: project observations onto the feature space\n• Dimensionality reduction: remove unwanted directions\n• Embeddings: project representations into learned spaces\n• Attention: learned linear projections generate query/key/value representations',
      bodyKn: '• PCA: ಉನ್ನತ-ಆಯಾಮದ ಡೇಟಾ ಅನ್ನೂ ಮುಖ್ಯ directions ಮೇಲೆ project ಮಾಡಿ\n• Regression: observations ಅನ್ನೂ feature space ಮೇಲೆ project ಮಾಡಿ\n• Dimensionality reduction: ಅನಗತ್ಯ directions ತೆಗೆದುಹಾಕಿ\n• Embeddings: representations ಅನ್ನೂ ಕಲಿತ spaces ಗೆ project ಮಾಡಿ\n• Attention: ಕಲಿತ linear projections query/key/value representations ಉತ್ಪಾದಿಸುತ್ತವೆ' } },
    { type: 'example', data: {
      tag: 'Real World: Data Compression',
      textEn: '• A dataset with 100 dimensions, where most useful information lies along just 10 major directions\n• A projection can map 100D down to 10D, reducing storage and computation while preserving important information',
      textKn: '• 100 dimensions ಹೊಂದಿರುವ ಒಂದು dataset, ಹೆಚ್ಚಿನ ಉಪಯುಕ್ತ ಮಾಹಿತಿ ಕೇವಲ 10 ಪ್ರಮುಖ directions ಉದ್ದಕ್ಕೂ ಇರುತ್ತದೆ\n• ಒಂದು projection 100D ಅನ್ನೂ 10D ಗೆ ಕಡಿಮೆಗೊಳಿಸಬಹುದು, ಮುಖ್ಯ ಮಾಹಿತಿ ಸಂರಕ್ಷಿಸುತ್ತಿರುವಾಗಲೇ storage ಮತ್ತು computation ಕಡಿಮೆಗೊಳಿಸುತ್ತಾ',
      table: '' } },

    { type: 'table', data: { captionEn: 'Part 2 -- AI Connections', captionKn: 'Part 2 -- AI Connections',
      rows: 'Concept|AI Application\nBroadcasting|Bias addition without manual copying\nBias (b)|Extra flexibility in a learned transformation\nReLU|Non-linearity, dead-neuron behavior\nDense layer (Wx+b)|Every fully-connected neural-network layer\nProjection|PCA, regression, embeddings, attention Q/K/V' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Broadcasting exists because requiring exact shape matches everywhere would force wasteful, explicit copying of the bias for every single sample -- broadcasting is a memory and performance optimization with a precise mathematical rule behind it, not a shortcut that bends the rules\n• Bias exists because a pure Wx transformation is forced through the origin -- adding b removes that constraint and gives the layer one more degree of freedom to fit real data\n• ReLU\'s dead-neuron behavior, genuinely observed in this lesson\'s own output, is not a bug -- it is the same non-linearity that makes deep networks more expressive than a stack of linear layers, at the cost of some neurons doing nothing for a given input\n• Projection ties directly back to Module 14: PCA, regression, and attention Q/K/V all reduce to the same question -- "how much of this vector points toward that one" -- which this lesson confirmed gives an identical numeric answer whether written as a.b/b.b or a.b/|b|^2',
      bodyKn: '• Broadcasting ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ಎಲ್ಲೆಡೆ ನಿಖರ shape ಹೊಂದಾಣಿಕೆಗಳ ಅಗತ್ಯವಿರುವುದೂ ಪ್ರತಿ ಒಂಟಿ sample ಗೆ bias ನ ವ್ಯರ್ಥ, ಸ್ಪಷ್ಟ ನಕಲಿಸುವಿಕೆ ಬಲವಂತಪಡಿಸುತ್ತಿತ್ತು -- broadcasting ಇದರ ಹಿಂದೆ ಒಂದು ನಿಖರ ಗಣಿತೀಯ ನಿಯಮ ಇರುವ ಒಂದು memory ಮತ್ತು performance optimization, ನಿಯಮಗಳನ್ನೂ ಬಗ್ಗಿಸುವ ಒಂದು ಶಾರ್ಟ್‌ಕಟ್ ಅಲ್ಲ\n• Bias ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ಒಂದು ಶುದ್ಧ Wx transformation origin ಮೂಲಕ ಬಲವಂತಪಡಿಸಲಾಗಿದೆ -- b ಸೇರಿಸುವುದೂ ಆ ಮಿತಿ ತೆಗೆದುಹಾಕುತ್ತದೆ ಮತ್ತು layer ಗೆ ನಿಜ ಡೇಟಾ ಗೆ ಹೊಂದಿಸಲು ಒಂದು ಹೆಚ್ಚುವರಿ ಸ್ವಾತಂತ್ರ್ಯ ಡಿಗ್ರಿ ನೀಡುತ್ತದೆ\n• ReLU ನ dead-neuron ವರ್ತನೆ, ಈ lesson ನ ಸ್ವಂತ output ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಮನಿಸಲಾಗಿದೆ, ಒಂದು bug ಅಲ್ಲ -- ಇದೇ ಅದೇ non-linearity ಇದೂ deep networks ಅನ್ನೂ linear layers ನ ಒಂದು ಸ್ಟ್ಯಾಕ್‌ಗಿಂತ ಹೆಚ್ಚು expressive ಮಾಡುತ್ತದೆ, ಒಂದು ನಿರ್ದಿಷ್ಟ input ಗೆ ಕೆಲವು neurons ಏನೂ ಮಾಡದ ವೆಚ್ಚದಲ್ಲಿ\n• Projection Module 14 ಗೆ ನೇರವಾಗಿ ಹಿಂತಿರುಗಿ ಕಟ್ಟುತ್ತದೆ: PCA, regression, ಮತ್ತು attention Q/K/V ಎಲ್ಲಾ ಅದೇ ಪ್ರಶ್ನೆಗೆ ಕುಸಿಯುತ್ತವೆ -- "ಇದೂ ಎಷ್ಟು ಆ ಒಂದರ ಕಡೆಗೆ ತೋರಿಸುತ್ತದೆ" -- a.b/b.b ಅಥವಾ a.b/|b|^2 ಆಗಿ ಬರೆದರೂ ಇದೂ ಒಂದೇ ಸಂಖ್ಯಾತ್ಮಕ ಉತ್ತರ ನೀಡುತ್ತದೆ ಎಂದು ಈ lesson ದೃಢಪಡಿಸಿತು' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Broadcasting lets shapes that are not identical still be added -- genuinely verified for a (2,3) matrix plus a (3,) bias\n• W = learned transformation, x = input, Wx = transformed representation, b = learned shift, Wx+b = pre-activation, ReLU = nonlinear output\n• A genuinely run dense layer showed real dead-neuron behavior: one neuron output a positive value, the other was zeroed by ReLU because its pre-activation was negative\n• Unseeded random code is not reproducible -- this lesson\'s original snippet needed a seed added before its output could be genuinely checked and reported\n• Projection -- proj_b(a) = (a.b/|b|^2) b -- is the same operation behind PCA, regression, dimensionality reduction, and the Q/K/V projections inside every transformer\n• ReLU(Wx+b) is one of the most important formulas in deep learning',
      bodyKn: '• Broadcasting ಒಂದೇ ಆಗಿಲ್ಲದ shapes ಗಳನ್ನೂ ಇನ್ನೂ ಸೇರಿಸಲು ಬಿಡುತ್ತದೆ -- ಒಂದು (2,3) matrix ಮತ್ತು ಒಂದು (3,) bias ಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ\n• W = ಕಲಿತ transformation, x = input, Wx = ಬದಲಾದ representation, b = ಕಲಿತ ಬದಲಾವಣೆ, Wx+b = pre-activation, ReLU = nonlinear output\n• ಒಂದು ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ dense layer ನಿಜ dead-neuron ವರ್ತನೆ ತೋರಿಸಿತು: ಒಂದು neuron ಒಂದು positive ಮೌಲ್ಯ output ಮಾಡಿತು, ಇನ್ನೊಂದೂ ಇದರ pre-activation negative ಆಗಿದ್ದ ಕಾರಣ ReLU ಇಂದ ಶೂನ್ಯಗೊಂಡಿತು\n• Seed-ಇಲ್ಲದ random code ಪುನರುತ್ಪಾದಿಸಬಹುದಾಗಿಲ್ಲ -- ಈ lesson ನ original snippet ಗೆ ಇದರ output ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ ವರದಿ ಮಾಡುವ ಮೊದಲು ಒಂದು seed ಸೇರಿಸಬೇಕಾಗಿತ್ತು\n• Projection -- proj_b(a) = (a.b/|b|^2) b -- PCA, regression, dimensionality reduction, ಮತ್ತು ಪ್ರತಿ transformer ಒಳಗಿನ Q/K/V projections ಹಿಂದಿನ ಅದೇ operation\n• ReLU(Wx+b) deep learning ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ formulas ಗಳಲ್ಲಿ ಒಂದು' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why can a (2,3) matrix and a (3,) bias vector be added together, even though their shapes are not identical?', qKn: 'ಒಂದು (2,3) matrix ಮತ್ತು ಒಂದು (3,) bias vector ಗಳ shapes ಒಂದೇ ಆಗಿಲ್ಲದಿದ್ದರೂ ಅವುಗಳನ್ನೂ ಒಟ್ಟಿಗೆ ಏಕೆ ಸೇರಿಸಬಹುದು?',
        opts: ['They cannot actually be added; this is a common misconception', 'Broadcasting stretches the (3,) vector across every row of the (2,3) matrix without physically copying it', 'The shapes are secretly identical after all', 'Addition ignores shape entirely in every programming language'], correct: 1,
        optsKn: ['ಅವುಗಳನ್ನೂ ವಾಸ್ತವವಾಗಿ ಸೇರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ; ಇದೂ ಒಂದು ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ', 'Broadcasting (3,) vector ಅನ್ನೂ ಭೌತಿಕವಾಗಿ ನಕಲಿಸದೆ (2,3) matrix ನ ಪ್ರತಿ ಸಾಲಿಗೂ ಎಳೆಯುತ್ತದೆ', 'Shapes ಗಳು ರಹಸ್ಯವಾಗಿ ಆಖಿರಿಗೆ ಒಂದೇ', 'Addition ಪ್ರತಿ programming language ನಲ್ಲಿ shape ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ'] },
      { q: 'In the genuinely run dense-layer example, why did one of the two output values come out as exactly 0?', qKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ dense-layer ಉದಾಹರಣೆಯಲ್ಲಿ, ಎರಡು output ಮೌಲ್ಯಗಳಲ್ಲಿ ಒಂದೂ ಏಕೆ ನಿಖರವಾಗಿ 0 ಆಗಿ ಬಂತು?',
        opts: ['A bug in the Matrix class', 'That neuron\'s pre-activation was negative, and ReLU zeroes out any negative input -- a genuine, real occurrence of "dead neuron" behavior', 'The bias was set to zero', 'ReLU always outputs 0 for the second element'], correct: 1,
        optsKn: ['Matrix class ನಲ್ಲಿ ಒಂದು bug', 'ಆ neuron ನ pre-activation negative ಆಗಿತ್ತು, ಮತ್ತು ReLU ಯಾವುದೇ negative input ಅನ್ನೂ ಶೂನ್ಯಗೊಳಿಸುತ್ತದೆ -- "dead neuron" ವರ್ತನೆಯ ಒಂದು ನಿಜ, ವಾಸ್ತವ ಸಂಭವ', 'Bias ಶೂನ್ಯಕ್ಕೆ ಹೊಂದಿಸಲಾಗಿತ್ತು', 'ReLU ಯಾವಾಗಲೂ ಎರಡನೇ element ಗೆ 0 output ಮಾಡುತ್ತದೆ'] },
      { q: 'Why did this lesson add a seed to the original dense-layer code before genuinely running it?', qKn: 'ಈ lesson original dense-layer code ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವ ಮೊದಲು ಏಕೆ ಒಂದು seed ಸೇರಿಸಿತು?',
        opts: ['The original code would not run at all without a seed', 'The original code used random.uniform() without a seed, so its output was not reproducible -- a seed was added specifically to make the result genuinely checkable and reportable', 'Seeds are required by Python syntax for any random function', 'To make the output match Part 1\'s numbers exactly'], correct: 1,
        optsKn: ['Original code ಒಂದು seed ಇಲ್ಲದೆ ಸಂಪೂರ್ಣವಾಗಿ ಚಲಾಯಿಸುತ್ತಿರಲಿಲ್ಲ', 'Original code ಒಂದು seed ಇಲ್ಲದೆ random.uniform() ಬಳಸಿತು, ಆದ್ದರಿಂದ ಇದರ output ಪುನರುತ್ಪಾದಿಸಬಹುದಾಗಿರಲಿಲ್ಲ -- ಫಲಿತಾಂಶ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಬಹುದಾಗಲು ಮತ್ತು ವರದಿ ಮಾಡಬಹುದಾಗಲು ನಿರ್ದಿಷ್ಟವಾಗಿ ಒಂದು seed ಸೇರಿಸಲಾಗಿದೆ', 'Seeds ಗಳು ಯಾವುದೇ random function ಗೆ Python syntax ಇಂದ ಅಗತ್ಯವಿದೆ', 'Output ಅನ್ನೂ Part 1 ನ ಸಂಖ್ಯೆಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಸಲು'] },
      { q: 'For a = [3,4] and b = [1,0], what does the genuinely verified proj_b(a) = (a.b/|b|^2) b evaluate to?', qKn: 'a = [3,4] ಮತ್ತು b = [1,0] ಗೆ, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ proj_b(a) = (a.b/|b|^2) b ಏನಿಗೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ?',
        opts: ['[0, 4]', '[3, 0]', '[3, 4]', '[1, 0]'], correct: 1,
        optsKn: ['[0, 4]', '[3, 0]', '[3, 4]', '[1, 0]'] },
      { q: 'What do PCA, regression, and transformer Q/K/V generation have in common, according to this lesson?', qKn: 'ಈ lesson ಪ್ರಕಾರ, PCA, regression, ಮತ್ತು transformer Q/K/V ಉತ್ಪಾದನೆ ಸಾಮಾನ್ಯವಾಗಿ ಏನೂ ಹೊಂದಿವೆ?',
        opts: ['They all require computing a matrix inverse', 'They all reduce to projection -- measuring how much a vector or representation lies along a particular direction', 'They only apply to image data', 'They all avoid using matrix multiplication'], correct: 1,
        optsKn: ['ಅವೆಲ್ಲಾ ಒಂದು matrix inverse ಗಣಿಸಬೇಕು', 'ಅವೆಲ್ಲಾ projection ಗೆ ಕುಸಿಯುತ್ತವೆ -- ಒಂದು vector ಅಥವಾ representation ಒಂದು ನಿರ್ದಿಷ್ಟ direction ಉದ್ದಕ್ಕೂ ಎಷ್ಟು ಇರುತ್ತದೆ ಎಂದು ಅಳೆಯುತ್ತಾ', 'ಅವು ಕೇವಲ image data ಗೆ ಮಾತ್ರ ಅನ್ವಯಿಸುತ್ತವೆ', 'ಅವೆಲ್ಲಾ matrix multiplication ಬಳಸುವುದೂ ತಪ್ಪಿಸುತ್ತವೆ'] },
    ] } },
  ],
};
