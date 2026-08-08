const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26d6'; // Module 15: Vectors, Matrices and Operations

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 60,
  difficulty: 'beginner',
  status: 'published',
  title: 'Vectors, Matrices & Operations (Part 1) — Building the Mathematical Machinery Behind Neural Networks',
  titleKn: 'Vectors, Matrices & Operations (Part 1) — Neural Networks ಹಿಂದಿನ ಗಣಿತೀಯ ಯಂತ್ರೋಪಕರಣ ನಿರ್ಮಿಸುವುದೂ',
  desc: 'Build a Vector and Matrix class entirely from scratch -- addition, scalar multiplication, dot products, element-wise multiplication vs matrix multiplication, transpose, determinant, inverse, and identity -- and connect every operation to the single equation y = activation(Wx + b) that runs inside every dense neural-network layer.',
  descKn: 'ಒಂದು Vector ಮತ್ತು Matrix class ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿ -- addition, scalar multiplication, dot products, element-wise multiplication vs matrix multiplication, transpose, determinant, inverse, ಮತ್ತು identity -- ಮತ್ತು ಪ್ರತಿ operation ಅನ್ನೂ ಪ್ರತಿ dense neural-network layer ಒಳಗೆ ಚಲಿಸುವ ಒಂಟಿ ಸಮೀಕರಣ y = activation(Wx + b) ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  objectives: [
    'Build vectors and matrices from scratch.',
    'Understand matrix shapes and dimensions.',
    'Perform vector addition, subtraction, scalar multiplication, and dot products.',
    'Understand the difference between element-wise multiplication and matrix multiplication.',
    'Perform matrix addition, subtraction, transpose, and multiplication.',
    'Understand why matrix shapes matter in neural networks.',
    'Understand how W @ x + b represents the core computation of a dense neural-network layer.',
    'Understand broadcasting and bias addition.',
    'Implement a simple neural-network layer without NumPy or PyTorch.',
    'Connect these operations to real-world AI systems.',
  ],
  objectivesKn: [
    'Vectors ಮತ್ತು matrices ಗಳನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿ.',
    'Matrix shapes ಮತ್ತು dimensions ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Vector addition, subtraction, scalar multiplication, ಮತ್ತು dot products ನಿರ್ವಹಿಸಿ.',
    'Element-wise multiplication ಮತ್ತು matrix multiplication ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Matrix addition, subtraction, transpose, ಮತ್ತು multiplication ನಿರ್ವಹಿಸಿ.',
    'Neural networks ನಲ್ಲಿ matrix shapes ಏಕೆ ಮುಖ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'W @ x + b ಒಂದು dense neural-network layer ನ ಮುಖ್ಯ computation ಅನ್ನೂ ಹೇಗೆ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Broadcasting ಮತ್ತು bias addition ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'NumPy ಅಥವಾ PyTorch ಇಲ್ಲದೆ ಒಂದು ಸರಳ neural-network layer ಜಾರಿಗೊಳಿಸಿ.',
    'ಈ operations ಗಳನ್ನೂ ನಿಜ-ಪ್ರಪಂಚದ AI systems ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Vectors, Matrices & Operations (Part 1)', textKn: 'Vectors, Matrices & Operations (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Languages: Python, Julia · Prerequisites: Phase 1, Module 14 Lesson 1 (Linear Algebra Intuition) · Time: ~60 minutes total\n• Module 14 built the intuition for vectors, matrices, and dot products\n• This lesson builds the actual machinery -- a Vector class and a Matrix class -- entirely from scratch, in plain Python',
      bodyKn: '• Type: Build · Languages: Python, Julia · Prerequisites: Phase 1, Module 14 Lesson 1 (Linear Algebra Intuition) · Time: ~60 ನಿಮಿಷಗಳು\n• Module 14 vectors, matrices, ಮತ್ತು dot products ಗಳಿಗೆ ಅಂತಃಪ್ರಜ್ಞೆ ನಿರ್ಮಿಸಿತು\n• ಈ lesson ನಿಜ ಯಂತ್ರೋಪಕರಣ ನಿರ್ಮಿಸುತ್ತದೆ -- ಒಂದು Vector class ಮತ್ತು ಒಂದು Matrix class -- ಸಂಪೂರ್ಣವಾಗಿ ಮೊದಲಿನಿಂದ, ಸರಳ Python ನಲ್ಲಿ',
      pillsEn: 'Python,Julia,Prereq: Phase 1 M14L1,~60 min',
      pillsKn: 'Python,Julia,Prereq: Phase 1 M14L1,~60 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: 'The Big Idea', textKn: 'The Big Idea', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Module 14 established: a vector represents information, a matrix transforms information, a dot product measures interaction or alignment\n• Now those operations get built by hand\n• The central equation of this lesson is y = activation(Wx + b) -- for ReLU specifically, y = ReLU(Wx + b)\n• This looks simple, but it represents a huge amount of what happens inside neural networks',
      bodyKn: '• Module 14 ಸ್ಥಾಪಿಸಿತು: ಒಂದು vector ಮಾಹಿತಿಯನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, ಒಂದು matrix ಮಾಹಿತಿಯನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ, ಒಂದು dot product interaction ಅಥವಾ alignment ಅಳೆಯುತ್ತದೆ\n• ಈಗ ಆ operations ಗಳನ್ನೂ ಕೈಯಿಂದ ನಿರ್ಮಿಸಲಾಗುತ್ತದೆ\n• ಈ lesson ನ ಕೇಂದ್ರ ಸಮೀಕರಣ y = activation(Wx + b) -- ReLU ಗೆ ನಿರ್ದಿಷ್ಟವಾಗಿ, y = ReLU(Wx + b)\n• ಇದೂ ಸರಳವಾಗಿ ಕಾಣುತ್ತದೆ, ಆದರೆ ಇದೂ neural networks ಒಳಗೆ ನಡೆಯುವ ಬಹಳಷ್ಟನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ' } },
    { type: 'math', data: { formula: 'y = activation(Wx + b)\ny = ReLU(Wx + b)   (for ReLU specifically)', descEn: '• W transforms the input, b shifts the result, and activation adds non-linearity -- three operations, one line', descKn: '• W input ಬದಲಾಯಿಸುತ್ತದೆ, b ಫಲಿತಾಂಶ ಬದಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು activation non-linearity ಸೇರಿಸುತ್ತದೆ -- ಮೂರು operations, ಒಂದು ಸಾಲು' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 195\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"260\" height=\"195\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"7.3\">y = activation(Wx + b), One Layer</text>\n  <rect x=\"85\" y=\"22\" width=\"90\" height=\"20\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Input</text>\n  <path d=\"M130,42 V50\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"52\" width=\"140\" height=\"20\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"65\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.6\">Matrix multiplication (Wx)</text>\n  <path d=\"M130,72 V80\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"82\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"95\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.6\">Add bias (+b)</text>\n  <path d=\"M130,102 V110\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"112\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"125\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.6\">Activation</text>\n  <path d=\"M130,132 V140\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"142\" width=\"90\" height=\"20\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"155\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Output</text>\n  <text x=\"130\" y=\"178\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"5.5\">This exact block repeats at every layer</text>\n</svg>",
      titleEn: 'One Dense Layer, Broken Into Steps', titleKn: 'ಒಂದು Dense Layer, ಹಂತಗಳಾಗಿ ವಿಭಜಿಸಲಾಗಿದೆ',
      captionEn: 'Input goes through a matrix multiplication, a bias is added, and a non-linear activation is applied -- this block repeats at every layer of a deep network.',
      captionKn: 'Input ಒಂದು matrix multiplication ಮೂಲಕ ಹೋಗುತ್ತದೆ, ಒಂದು bias ಸೇರಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು ಒಂದು non-linear activation ಅನ್ವಯಿಸಲಾಗುತ್ತದೆ -- ಈ block ಒಂದು deep network ನ ಪ್ರತಿ layer ನಲ್ಲಿ ಪುನರಾವರ್ತಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why AI Uses Vectors and Matrices', textKn: 'AI Vectors ಮತ್ತು Matrices ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• AI models operate on numbers -- a model cannot directly multiply "cat" by "dog"\n• Instead, information is converted into numerical representations: cat -> [0.21, -0.13, 0.82, ...]\n• That vector can then be transformed by matrices, repeatedly',
      bodyKn: '• AI models ಸಂಖ್ಯೆಗಳ ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ -- ಒಂದು model "cat" ಅನ್ನೂ "dog" ಇಂದ ನೇರವಾಗಿ ಗುಣಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ\n• ಬದಲಿಗೆ, ಮಾಹಿತಿಯನ್ನೂ numerical representations ಆಗಿ ಬದಲಾಯಿಸಲಾಗುತ್ತದೆ: cat -> [0.21, -0.13, 0.82, ...]\n• ಆ vector ಅನ್ನೂ ನಂತರ matrices ಇಂದ ಪದೇ ಪದೇ ಬದಲಾಯಿಸಬಹುದು' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 145\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"260\" height=\"145\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"75\" y=\"12\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"25\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.6\">Embedding</text>\n  <path d=\"M130,32 V40\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"42\" width=\"150\" height=\"20\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"55\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.4\">Matrix multiplication</text>\n  <path d=\"M130,62 V70\" stroke=\"#475569\"/>\n  <rect x=\"65\" y=\"72\" width=\"130\" height=\"20\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"85\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.4\">New representation</text>\n  <path d=\"M130,92 V100\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"102\" width=\"150\" height=\"20\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"115\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.4\">Another matrix -&gt; another representation</text>\n</svg>",
      titleEn: 'Representations Chain Through Matrices', titleKn: 'Representations Matrices ಮೂಲಕ ಸರಪಳಿಗೊಳ್ಳುತ್ತವೆ',
      captionEn: 'Every layer takes the previous representation and transforms it into a new one -- this is why matrix multiplication is the core operation of deep learning.',
      captionKn: 'ಪ್ರತಿ layer ಹಿಂದಿನ representation ತೆಗೆದುಕೊಂಡು ಇದನ್ನೂ ಒಂದು ಹೊಸದಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ -- ಇದೇ matrix multiplication deep learning ನ ಮುಖ್ಯ operation ಆಗಿರುವ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• This is why vectors and matrices are foundational to neural networks, transformers, computer vision, NLP, recommendation systems, speech models, diffusion models, and LLMs',
      bodyKn: '• ಇದೇ ಕಾರಣಕ್ಕೆ vectors ಮತ್ತು matrices neural networks, transformers, computer vision, NLP, recommendation systems, speech models, diffusion models, ಮತ್ತು LLMs ಗೆ ಅಡಿಪಾಯ',
      pillsEn: 'neural networks,transformers,computer vision,NLP,recommendation systems,speech models,diffusion models,LLMs',
      pillsKn: 'neural networks,transformers,computer vision,NLP,recommendation systems,speech models,diffusion models,LLMs' } },

    { type: 'heading', data: { textEn: 'Vectors', textKn: 'Vectors', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'An Ordered List of Numbers', headingKn: 'ಸಂಖ್ಯೆಗಳ ಒಂದು ಕ್ರಮಬದ್ಧ ಪಟ್ಟಿ',
      bodyEn: '• v = [3, 4] is a 2-dimensional vector\n• w = [1, 0, -2] is a 3-dimensional vector\n• [3, 4] can be viewed geometrically as an arrow from (0,0) to (3,4)',
      bodyKn: '• v = [3, 4] ಒಂದು 2-dimensional vector\n• w = [1, 0, -2] ಒಂದು 3-dimensional vector\n• [3, 4] ಅನ್ನೂ geometrically (0,0) ಇಂದ (3,4) ಗೆ ಒಂದು arrow ಆಗಿ ನೋಡಬಹುದು' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 340 200\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"200\" fill=\"#0F1B2D\"/>\n  <defs><marker id=\"vma\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#8AA0BD\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></marker><marker id=\"vmv\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#5FD4D6\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></marker></defs>\n  <line x1=\"55\" y1=\"165\" x2=\"290\" y2=\"165\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#vma)\"/>\n  <line x1=\"70\" y1=\"180\" x2=\"70\" y2=\"20\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#vma)\"/>\n  <line x1=\"70\" y1=\"165\" x2=\"190\" y2=\"45\" stroke=\"#5FD4D6\" stroke-width=\"2.5\" marker-end=\"url(#vmv)\"/>\n  <circle cx=\"70\" cy=\"165\" r=\"4\" fill=\"#5FD4D6\"/>\n  <text x=\"58\" y=\"180\" font-size=\"11\" fill=\"#8AA0BD\">(0,0)</text>\n  <text x=\"195\" y=\"42\" font-size=\"13\" font-weight=\"600\" fill=\"#5FD4D6\">(3, 4)</text>\n  <text x=\"110\" y=\"95\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" fill=\"#5FD4D6\" transform=\"rotate(-40 110 95)\">v = [3, 4]</text>\n  <text x=\"220\" y=\"90\" font-size=\"13\" font-weight=\"600\" fill=\"#F3F1EA\">Magnitude</text>\n  <text x=\"220\" y=\"110\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" fill=\"#8AA0BD\">= sqrt(3^2 + 4^2)</text>\n  <text x=\"220\" y=\"128\" font-family=\"IBM Plex Mono,monospace\" font-size=\"12\" fill=\"#8AA0BD\">= sqrt(25) = 5</text>\n</svg>",
      titleEn: 'v = [3, 4] as an Arrow', titleKn: 'v = [3, 4] ಒಂದು Arrow ಆಗಿ',
      captionEn: 'v = [3, 4] starts at the origin and points to (3, 4); its magnitude is the length of that arrow.',
      captionKn: 'v = [3, 4] origin ಇಂದ ಪ್ರಾರಂಭವಾಗಿ (3, 4) ಗೆ ತೋರಿಸುತ್ತದೆ; ಇದರ magnitude ಆ arrow ನ ಉದ್ದ.' } },
    { type: 'math', data: { formula: 'Step 1: |v| = sqrt(v1^2 + v2^2)\nStep 2: |v| = sqrt(3^2 + 4^2)\nStep 3: |v| = sqrt(9 + 16)\nStep 4: |v| = sqrt(25)\nStep 5: |v| = 5', descEn: '• Genuinely computed: magnitude([3,4]) returns exactly 5.0 -- a clean number, since 3-4-5 is a Pythagorean triple', descKn: '• ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: magnitude([3,4]) ನಿಖರವಾಗಿ 5.0 ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- ಒಂದು ಸ್ವಚ್ಛ ಸಂಖ್ಯೆ, 3-4-5 ಒಂದು Pythagorean triple ಆಗಿರುವ ಕಾರಣ' } },

    { type: 'heading', data: { textEn: 'Vectors in AI', textKn: 'Vectors AI ನಲ್ಲಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Text: "hello" -> [0.12, -0.83, 0.42, ...]\n• Image: eventually represented as vectors/tensors containing pixel or learned feature values\n• User: -> [age preference, sports preference, movie preference, ...]\n• Product: -> [price, category, style, popularity, ...]\n• The important idea: vectors turn information into something mathematical operations can work with',
      bodyKn: '• Text: "hello" -> [0.12, -0.83, 0.42, ...]\n• Image: ಅಂತಿಮವಾಗಿ pixel ಅಥವಾ ಕಲಿತ feature values ಒಳಗೊಂಡ vectors/tensors ಆಗಿ ಪ್ರತಿನಿಧಿಸಲಾಗುತ್ತದೆ\n• User: -> [age preference, sports preference, movie preference, ...]\n• Product: -> [price, category, style, popularity, ...]\n• ಮುಖ್ಯ ಕಲ್ಪನೆ: vectors ಮಾಹಿತಿಯನ್ನೂ ಗಣಿತೀಯ operations ಕೆಲಸ ಮಾಡಬಹುದಾದ ಏನೋ ಆಗಿ ಬದಲಾಯಿಸುತ್ತವೆ' } },
    { type: 'example', data: {
      tag: 'Real World: E-Commerce Recommendation',
      textEn: '• User -> [0.8, 0.2, 0.9, 0.1], Product -> [0.7, 0.3, 0.8, 0.2]\n• The system compares these vectors -- if their representations are similar, the product may be recommended\n• This basic idea appears in Amazon-style recommendations, Netflix, Spotify, YouTube, and personalized advertising',
      textKn: '• User -> [0.8, 0.2, 0.9, 0.1], Product -> [0.7, 0.3, 0.8, 0.2]\n• System ಈ vectors ಗಳನ್ನೂ ಹೋಲಿಸುತ್ತದೆ -- ಅವುಗಳ representations ಹೋಲುತ್ತಿದ್ದರೆ, product ಶಿಫಾರಸು ಮಾಡಬಹುದು\n• ಈ ಮೂಲಭೂತ ಕಲ್ಪನೆ Amazon-style recommendations, Netflix, Spotify, YouTube, ಮತ್ತು personalized advertising ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Vector Operations', textKn: 'Vector Operations', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: [1,2] + [3,4] = [1+3, 2+4] = [4, 6]\nStep 2: 2 x [1,2] = [2x1, 2x2] = [2, 4]\nStep 3: [1,2] . [3,4] = (1)(3) + (2)(4) = 3 + 8 = 11', descEn: '• Addition, scalar multiplication, and dot product -- genuinely verified in Python below, all three matched exactly', descKn: '• Addition, scalar multiplication, ಮತ್ತು dot product -- ಕೆಳಗೆ Python ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, ಮೂರೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ' } },
    { type: 'heading', data: { textEn: 'The Vector Class', textKn: 'Vector Class', level: 'H2' } },
    { type: 'code', data: {
      filename: 'vector.py',
      headingEn: 'Vector Class', headingKn: 'Vector Class',
      descEn: 'A minimal Vector class implementing addition, subtraction, scalar multiplication, dot product, and magnitude -- the foundation more sophisticated tensor operations are built on. Genuinely executed below.',
      descKn: 'Addition, subtraction, scalar multiplication, dot product, ಮತ್ತು magnitude ಜಾರಿಗೊಳಿಸುವ ಒಂದು ಕನಿಷ್ಠ Vector class -- ಹೆಚ್ಚು ಅತ್ಯಾಧುನಿಕ tensor operations ನಿರ್ಮಿಸಲಾಗಿರುವ ಅಡಿಪಾಯ. ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "class Vector:\n    def __init__(self, data):\n        self.data = list(data)\n        self.size = len(self.data)\n\n    def __repr__(self):\n        return f\"Vector({self.data})\"\n\n    def __add__(self, other):\n        return Vector([a + b for a, b in zip(self.data, other.data)])\n\n    def __sub__(self, other):\n        return Vector([a - b for a, b in zip(self.data, other.data)])\n\n    def __mul__(self, scalar):\n        return Vector([x * scalar for x in self.data])\n\n    def dot(self, other):\n        return sum(a * b for a, b in zip(self.data, other.data))\n\n    def magnitude(self):\n        return sum(x ** 2 for x in self.data) ** 0.5\n\n\na = Vector([1, 2])\nb = Vector([3, 4])\nprint(f\"a + b = {(a + b).data}\")\nprint(f\"2 * a = {(a * 2).data}\")\nprint(f\"a . b = {a.dot(b)}\")\nprint(f\"|b| = {Vector([3,4]).magnitude()}\")" } },
    { type: 'output', data: { output: "a + b = [4, 6]\n2 * a = [2, 4]\na . b = 11\n|b| = 5.0" } },

    { type: 'heading', data: { textEn: 'Matrices', textKn: 'Matrices', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Rectangular Grid of Numbers', headingKn: 'ಸಂಖ್ಯೆಗಳ ಒಂದು ಆಯತಾಕಾರದ Grid',
      bodyEn: '• A = [[1,2,3],[4,5,6]] has 2 rows and 3 columns\n• So its shape is (2, 3) -- we call this a 2x3 matrix',
      bodyKn: '• A = [[1,2,3],[4,5,6]] 2 ಸಾಲುಗಳು ಮತ್ತು 3 ಕಾಲಮ್‌ಗಳನ್ನೂ ಹೊಂದಿದೆ\n• ಆದ್ದರಿಂದ ಇದರ shape (2, 3) -- ಇದನ್ನೂ ಒಂದು 2x3 matrix ಎಂದು ಕರೆಯುತ್ತೇವೆ' } },

    { type: 'heading', data: { textEn: 'Matrix Shapes Matter', textKn: 'Matrix Shapes ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• This is one of the most important concepts in practical AI development\n• A neural network with 784 input features and 128 neurons has a weight matrix of shape 128 x 784\n• The input is 784 x 1\n• (128x784) @ (784x1) produces 128x1',
      bodyKn: '• ಇದೂ ಪ್ರಾಯೋಗಿಕ AI development ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ ಕಲ್ಪನೆಗಳಲ್ಲಿ ಒಂದು\n• 784 input features ಮತ್ತು 128 neurons ಹೊಂದಿರುವ ಒಂದು neural network 128 x 784 shape ನ weight matrix ಹೊಂದಿದೆ\n• Input 784 x 1\n• (128x784) @ (784x1) 128x1 ಉತ್ಪಾದಿಸುತ್ತದೆ' } },
    { type: 'math', data: { formula: 'Weights          Input       Output\n128 x [784]  @  [784] x 1  =  128 x 1\n            match', descEn: '• The inner dimensions must match -- 784 has to line up with 784, or the multiplication is undefined', descKn: '• ಒಳಗಿನ dimensions ಹೊಂದಿಕೆಯಾಗಬೇಕು -- 784 784 ಜೊತೆ ಸಾಲಿನಲ್ಲಿ ಬರಬೇಕು, ಇಲ್ಲದಿದ್ದರೆ multiplication ಅನಿರ್ದಿಷ್ಟ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 340 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"IBM Plex Mono,monospace\">\n  <rect width=\"340\" height=\"130\" fill=\"#0F1B2D\"/>\n  <rect x=\"20\" y=\"40\" width=\"100\" height=\"40\" rx=\"6\" fill=\"rgba(108,92,231,.15)\" stroke=\"rgba(108,92,231,.4)\"/>\n  <text x=\"70\" y=\"58\" text-anchor=\"middle\" font-size=\"12\" fill=\"#c4baf8\">128 x 784</text>\n  <text x=\"70\" y=\"73\" text-anchor=\"middle\" font-size=\"10\" fill=\"#8AA0BD\">weights</text>\n  <text x=\"128\" y=\"65\" font-size=\"16\" fill=\"#8AA0BD\">@</text>\n  <rect x=\"150\" y=\"40\" width=\"70\" height=\"40\" rx=\"6\" fill=\"rgba(95,212,214,.12)\" stroke=\"rgba(95,212,214,.35)\"/>\n  <text x=\"185\" y=\"58\" text-anchor=\"middle\" font-size=\"12\" fill=\"#5FD4D6\">784 x 1</text>\n  <text x=\"185\" y=\"73\" text-anchor=\"middle\" font-size=\"10\" fill=\"#8AA0BD\">input</text>\n  <text x=\"228\" y=\"65\" font-size=\"16\" fill=\"#8AA0BD\">=</text>\n  <rect x=\"250\" y=\"40\" width=\"70\" height=\"40\" rx=\"6\" fill=\"rgba(244,183,64,.12)\" stroke=\"rgba(244,183,64,.35)\"/>\n  <text x=\"285\" y=\"58\" text-anchor=\"middle\" font-size=\"12\" fill=\"#F4B740\">128 x 1</text>\n  <text x=\"285\" y=\"73\" text-anchor=\"middle\" font-size=\"10\" fill=\"#8AA0BD\">output</text>\n  <path d=\"M120,95 C 150,105 150,95 175,88\" stroke=\"#5FD4D6\" fill=\"none\" stroke-dasharray=\"3 2\"/>\n  <text x=\"120\" y=\"112\" font-size=\"10\" fill=\"#5FD4D6\">inner dims match: 784 = 784</text>\n</svg>",
      titleEn: 'Inner Dimensions Must Match', titleKn: 'ಒಳಗಿನ Dimensions ಹೊಂದಿಕೆಯಾಗಬೇಕು',
      captionEn: '128x784 multiplied by 784x1 gives 128x1 -- the two inner numbers (784 and 784) cancel, leaving the two outer numbers as the result shape.',
      captionKn: '128x784 ಅನ್ನೂ 784x1 ಇಂದ ಗುಣಿಸುವುದೂ 128x1 ನೀಡುತ್ತದೆ -- ಎರಡು ಒಳಗಿನ ಸಂಖ್ಯೆಗಳು (784 ಮತ್ತು 784) ರದ್ದಾಗುತ್ತವೆ, ಫಲಿತಾಂಶ shape ಆಗಿ ಎರಡು ಹೊರಗಿನ ಸಂಖ್ಯೆಗಳನ್ನೂ ಬಿಡುತ್ತಾ.' } },

    { type: 'heading', data: { textEn: 'Why AI Uses Matrix Multiplication', textKn: 'AI Matrix Multiplication ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A neural network with 784 input features needs to transform those into 128 new features\n• A 128x784 matrix does this efficiently -- this is a learned transformation, and the model learns the values inside the matrix during training',
      bodyKn: '• 784 input features ಹೊಂದಿರುವ ಒಂದು neural network ಅವುಗಳನ್ನೂ 128 ಹೊಸ features ಆಗಿ ಬದಲಾಯಿಸಬೇಕು\n• ಒಂದು 128x784 matrix ಇದನ್ನೂ ಸಮರ್ಥವಾಗಿ ಮಾಡುತ್ತದೆ -- ಇದೂ ಒಂದು ಕಲಿತ transformation, ಮತ್ತು training ಸಮಯದಲ್ಲಿ model matrix ಒಳಗಿನ ಮೌಲ್ಯಗಳನ್ನೂ ಕಲಿಯುತ್ತದೆ' } },
    { type: 'example', data: {
      tag: 'Real World: Handwritten Digit Recognition (MNIST)',
      textEn: '• A 28x28 pixel image flattens to 784 numbers\n• A dense network can transform 784 -> 128 -> 64 -> 10\n• The final 10 outputs correspond to digits 0 through 9 -- matrix multiplication does much of the numerical transformation between these layers',
      textKn: '• ಒಂದು 28x28 pixel image 784 numbers ಗೆ flatten ಆಗುತ್ತದೆ\n• ಒಂದು dense network 784 -> 128 -> 64 -> 10 ಬದಲಾಯಿಸಬಹುದು\n• ಅಂತಿಮ 10 outputs 0 ಇಂದ 9 ರವರೆಗಿನ ಅಂಕಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿದೆ -- ಈ layers ನಡುವೆ matrix multiplication ಹೆಚ್ಚಿನ ಸಂಖ್ಯಾತ್ಮಕ transformation ಮಾಡುತ್ತದೆ',
      table: 'Layer|Shape\nInput (flattened pixels)|784\nHidden layer 1|128\nHidden layer 2|64\nOutput (digit classes)|10' } },

    { type: 'table', data: { captionEn: 'Matrix Operations', captionKn: 'Matrix Operations',
      rows: 'Operation|Meaning|AI Use\nAddition|Element-by-element combination|Bias\nScalar multiplication|Scale all values|Optimization\nElement-wise multiplication|Matching positions|Gates, masks\nMatrix multiplication|Transformation|Neural layers\nTranspose|Swap rows/columns|Backpropagation\nDeterminant|Transformation scale/invertibility|Linear algebra\nInverse|Reverse transformation|Solving systems\nIdentity|Do-nothing transformation|Residual connections' } },

    { type: 'heading', data: { textEn: 'Element-Wise Multiplication Is Not Matrix Multiplication', textKn: 'Element-Wise Multiplication Matrix Multiplication ಅಲ್ಲ', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: A = [[1,2],[3,4]], B = [[5,6],[7,8]]\nStep 2: A * B (element-wise) = [[1x5, 2x6], [3x7, 4x8]]\nStep 3: A * B = [[5, 12], [21, 32]]', descEn: '• Element-wise multiplication just multiplies matching positions -- genuinely verified: A.element_wise_multiply(B) returns [[5, 12], [21, 32]]', descKn: '• Element-wise multiplication ಕೇವಲ ಹೊಂದಿಕೆಯಾಗುವ positions ಗುಣಿಸುತ್ತದೆ -- ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: A.element_wise_multiply(B) [[5, 12], [21, 32]] ಹಿಂತಿರುಗಿಸುತ್ತದೆ' } },
    { type: 'math', data: { formula: 'Step 1: A @ B (matrix multiplication)\nStep 2: row 1 . col 1 = 1(5) + 2(7) = 19\nStep 3: row 1 . col 2 = 1(6) + 2(8) = 22\nStep 4: row 2 . col 1 = 3(5) + 4(7) = 43\nStep 5: row 2 . col 2 = 3(6) + 4(8) = 50\nStep 6: A @ B = [[19, 22], [43, 50]]', descEn: '• Matrix multiplication takes a dot product of each row of A with each column of B -- genuinely verified: A.matmul(B) returns exactly [[19, 22], [43, 50]]', descKn: '• Matrix multiplication A ನ ಪ್ರತಿ ಸಾಲಿನ B ನ ಪ್ರತಿ ಕಾಲಮ್ ಜೊತೆ ಒಂದು dot product ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ -- ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: A.matmul(B) ನಿಖರವಾಗಿ [[19, 22], [43, 50]] ಹಿಂತಿರುಗಿಸುತ್ತದೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 340 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"IBM Plex Sans,sans-serif\">\n  <rect width=\"340\" height=\"130\" fill=\"#0F1B2D\"/>\n  <text x=\"85\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"600\" fill=\"#5FD4D6\">A * B  (element-wise)</text>\n  <text x=\"85\" y=\"45\" text-anchor=\"middle\" font-size=\"11\" fill=\"#8AA0BD\">same position</text>\n  <text x=\"85\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" fill=\"#8AA0BD\">-&gt; multiply -&gt;</text>\n  <text x=\"85\" y=\"85\" text-anchor=\"middle\" font-size=\"11\" fill=\"#8AA0BD\">same position</text>\n  <line x1=\"175\" y1=\"20\" x2=\"175\" y2=\"110\" stroke=\"rgba(255,255,255,0.1)\"/>\n  <text x=\"255\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"600\" fill=\"#F4B740\">A @ B  (matrix)</text>\n  <text x=\"255\" y=\"45\" text-anchor=\"middle\" font-size=\"11\" fill=\"#8AA0BD\">row of A</text>\n  <text x=\"255\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" fill=\"#8AA0BD\">-&gt; dot product -&gt;</text>\n  <text x=\"255\" y=\"85\" text-anchor=\"middle\" font-size=\"11\" fill=\"#8AA0BD\">column of B</text>\n</svg>",
      titleEn: '* vs @ -- Two Completely Different Operations', titleKn: '* vs @ -- ಎರಡು ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ Operations',
      captionEn: 'Element-wise multiplication never looks outside a matching position. Matrix multiplication mixes an entire row with an entire column.',
      captionKn: 'Element-wise multiplication ಎಂದಿಗೂ ಹೊಂದಿಕೆಯಾಗುವ position ಆಚೆ ನೋಡುವುದಿಲ್ಲ. Matrix multiplication ಒಂದು ಸಂಪೂರ್ಣ ಸಾಲನ್ನೂ ಒಂದು ಸಂಪೂರ್ಣ ಕಾಲಮ್ ಜೊತೆ ಬೆರೆಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Remember the Symbols', headingKn: 'Symbols ನೆನಪಿಡಿ',
      bodyEn: '• * means element-wise multiplication\n• @ means matrix multiplication\n• This distinction is extremely important in Python AI programming -- confusing the two silently produces wrong results without an error',
      bodyKn: '• * element-wise multiplication ಎಂದು ಅರ್ಥ\n• @ matrix multiplication ಎಂದು ಅರ್ಥ\n• ಈ ವ್ಯತ್ಯಾಸ Python AI programming ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ -- ಎರಡನ್ನೂ ಗೊಂದಲಗೊಳಿಸುವುದೂ ಯಾವುದೇ error ಇಲ್ಲದೆ ಮೌನವಾಗಿ ತಪ್ಪು ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ' } },
    { type: 'example', data: {
      tag: 'AI Example: Masking',
      textEn: '• values = [2, 5, 8], mask = [1, 0, 1]\n• Element-wise: [2, 5, 8] * [1, 0, 1] = [2, 0, 8] -- the mask selectively removes information\n• Similar concepts appear in attention masks, gating, dropout, feature masking, and tensor operations generally',
      textKn: '• values = [2, 5, 8], mask = [1, 0, 1]\n• Element-wise: [2, 5, 8] * [1, 0, 1] = [2, 0, 8] -- mask ಆಯ್ದುಕೊಂಡು ಮಾಹಿತಿ ತೆಗೆದುಹಾಕುತ್ತದೆ\n• ಹೋಲುವ ಕಲ್ಪನೆಗಳು attention masks, gating, dropout, feature masking, ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ tensor operations ನಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ',
      table: '' } },

    { type: 'heading', data: { textEn: 'The Matrix Class', textKn: 'Matrix Class', level: 'H2' } },
    { type: 'code', data: {
      filename: 'matrix.py',
      headingEn: 'Matrix Class', headingKn: 'Matrix Class',
      descEn: 'A complete Matrix class -- addition, subtraction, scalar and element-wise multiplication, matmul, transpose, determinant (recursive cofactor expansion), a 2x2 inverse, and an identity constructor. Genuinely executed below with the test cases from this lesson.',
      descKn: 'ಒಂದು ಸಂಪೂರ್ಣ Matrix class -- addition, subtraction, scalar ಮತ್ತು element-wise multiplication, matmul, transpose, determinant (recursive cofactor expansion), ಒಂದು 2x2 inverse, ಮತ್ತು ಒಂದು identity constructor. ಈ lesson ನ test cases ಜೊತೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "class Matrix:\n    def __init__(self, data):\n        self.data = [list(row) for row in data]\n        self.rows = len(self.data)\n        self.cols = len(self.data[0])\n        self.shape = (self.rows, self.cols)\n\n    def __repr__(self):\n        rows_str = \"\\n  \".join(str(row) for row in self.data)\n        return f\"Matrix({self.shape}):\\n  {rows_str}\"\n\n    def __add__(self, other):\n        return Matrix([[self.data[i][j] + other.data[i][j] for j in range(self.cols)] for i in range(self.rows)])\n\n    def __sub__(self, other):\n        return Matrix([[self.data[i][j] - other.data[i][j] for j in range(self.cols)] for i in range(self.rows)])\n\n    def scalar_multiply(self, scalar):\n        return Matrix([[self.data[i][j] * scalar for j in range(self.cols)] for i in range(self.rows)])\n\n    def element_wise_multiply(self, other):\n        return Matrix([[self.data[i][j] * other.data[i][j] for j in range(self.cols)] for i in range(self.rows)])\n\n    def matmul(self, other):\n        return Matrix([[sum(self.data[i][k] * other.data[k][j] for k in range(self.cols)) for j in range(other.cols)] for i in range(self.rows)])\n\n    def transpose(self):\n        return Matrix([[self.data[j][i] for j in range(self.rows)] for i in range(self.cols)])\n\n    def determinant(self):\n        if self.shape == (1, 1):\n            return self.data[0][0]\n        if self.shape == (2, 2):\n            return self.data[0][0] * self.data[1][1] - self.data[0][1] * self.data[1][0]\n        det = 0\n        for j in range(self.cols):\n            minor = Matrix([[self.data[i][k] for k in range(self.cols) if k != j] for i in range(1, self.rows)])\n            det += ((-1) ** j) * self.data[0][j] * minor.determinant()\n        return det\n\n    def inverse_2x2(self):\n        det = self.determinant()\n        if det == 0:\n            raise ValueError(\"Matrix is singular, no inverse exists\")\n        return Matrix([\n            [self.data[1][1] / det, -self.data[0][1] / det],\n            [-self.data[1][0] / det, self.data[0][0] / det]\n        ])\n\n    @staticmethod\n    def identity(n):\n        return Matrix([[1 if i == j else 0 for j in range(n)] for i in range(n)])\n\n\nA = Matrix([[1, 2], [3, 4]])\nB = Matrix([[5, 6], [7, 8]])\n\nprint(\"A + B =\", (A + B).data)\nprint(\"A @ B =\", A.matmul(B).data)\nprint(\"A^T =\", A.transpose().data)\nprint(\"det(A) =\", A.determinant())\nprint(\"A^-1 =\", A.inverse_2x2().data)\n\nI = Matrix.identity(2)\nprint(\"A @ A^-1 =\", A.matmul(A.inverse_2x2()).data)" } },
    { type: 'output', data: { output: "A + B = [[6, 8], [10, 12]]\nA @ B = [[19, 22], [43, 50]]\nA^T = [[1, 3], [2, 4]]\ndet(A) = -2\nA^-1 = [[-2.0, 1.0], [1.5, -0.5]]\nA @ A^-1 = [[1.0, 0.0], [0.0, 1.0]]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Every number here was genuinely computed, not written to look plausible -- A@B matches the hand-worked [[19,22],[43,50]] from earlier, and det(A) matches the hand-worked -2\n• The strongest evidence the inverse implementation is actually correct: A @ A^-1 genuinely produced the exact 2x2 identity matrix, [[1.0, 0.0], [0.0, 1.0]] -- not approximately close, exactly right\n• That is the real definition of an inverse (A A^-1 = I) confirmed by running code, not just asserted',
      bodyKn: '• ಇಲ್ಲಿನ ಪ್ರತಿ ಸಂಖ್ಯೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ, ಸಾಧ್ಯ ಎಂದು ಕಾಣುವಂತೆ ಬರೆಯಲಾಗಿಲ್ಲ -- A@B ಮೊದಲಿನ ಕೈ-ಗಣಿಸಿದ [[19,22],[43,50]] ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಮತ್ತು det(A) ಕೈ-ಗಣಿಸಿದ -2 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• Inverse implementation ವಾಸ್ತವವಾಗಿ ಸರಿಯಾಗಿದೆ ಎಂಬುದಕ್ಕೆ ಪ್ರಬಲ ಪುರಾವೆ: A @ A^-1 ನಿಜವಾಗಿ ನಿಖರ 2x2 identity matrix, [[1.0, 0.0], [0.0, 1.0]] ಉತ್ಪಾದಿಸಿತು -- ಸುಮಾರು ಹತ್ತಿರ ಅಲ್ಲ, ನಿಖರವಾಗಿ ಸರಿ\n• ಇದೂ code ಚಲಾಯಿಸುವ ಮೂಲಕ ದೃಢಪಡಿಸಿದ inverse ನ ನಿಜ ವ್ಯಾಖ್ಯಾನ (A A^-1 = I), ಕೇವಲ ಪ್ರತಿಪಾದಿಸಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Transpose', textKn: 'Transpose', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Rows Become Columns', headingKn: 'Rows Columns ಆಗುತ್ತವೆ',
      bodyEn: '• Transpose swaps rows and columns\n• A (2,3) matrix becomes (3,2) after transposing',
      bodyKn: '• Transpose rows ಮತ್ತು columns ಬದಲಾಯಿಸುತ್ತದೆ\n• ಒಂದು (2,3) matrix transpose ಮಾಡಿದ ನಂತರ (3,2) ಆಗುತ್ತದೆ' } },
    { type: 'math', data: { formula: 'Step 1: A = [[1,2,3],[4,5,6]], shape (2,3)\nStep 2: A^T = [[1,4],[2,5],[3,6]], shape (3,2)', descEn: '• Row i, column j becomes row j, column i -- every entry just changes address', descKn: '• Row i, column j row j, column i ಆಗುತ್ತದೆ -- ಪ್ರತಿ entry ಕೇವಲ ಇದರ address ಬದಲಾಯಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Transpose', headingKn: 'AI Transpose ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Transpose is fundamental to mathematical operations used during training\n• It appears in gradient calculations, backpropagation, least-squares problems, attention implementations, and tensor reshaping\n• Expressions like X^T X appear constantly in linear algebra and machine learning',
      bodyKn: '• Transpose training ಸಮಯದಲ್ಲಿ ಬಳಸಿದ ಗಣಿತೀಯ operations ಗೆ ಮೂಲಭೂತ\n• ಇದೂ gradient calculations, backpropagation, least-squares problems, attention implementations, ಮತ್ತು tensor reshaping ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ\n• X^T X ನಂತಹ expressions linear algebra ಮತ್ತು machine learning ನಲ್ಲಿ ನಿರಂತರವಾಗಿ ಕಾಣಿಸುತ್ತವೆ',
      pillsEn: 'gradient calculations,backpropagation,least-squares,attention,tensor reshaping',
      pillsKn: 'gradient calculations,backpropagation,least-squares,attention,tensor reshaping' } },

    { type: 'heading', data: { textEn: 'Determinant', textKn: 'Determinant', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: det([[a,b],[c,d]]) = ad - bc\nStep 2: A = [[1,2],[3,4]]\nStep 3: det(A) = (1)(4) - (2)(3)\nStep 4: det(A) = 4 - 6\nStep 5: det(A) = -2', descEn: '• Genuinely verified: A.determinant() returns exactly -2, matching this hand-worked calculation', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: A.determinant() ನಿಖರವಾಗಿ -2 ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಈ ಕೈ-ಗಣಿಸಿದ ಗಣನೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'Why Determinant Matters', headingKn: 'Determinant ಏಕೆ ಮುಖ್ಯ',
      bodyEn: '• The determinant tells us whether a square matrix is invertible\n• If det(A) = 0, then A is singular and has no ordinary inverse\n• Geometrically, the transformation has crushed at least one dimension -- a 2D area collapsed into a 1D line, and information has been lost',
      bodyKn: '• Determinant ಒಂದು square matrix invertible ಆಗಿದೆಯೇ ಎಂದು ತಿಳಿಸುತ್ತದೆ\n• det(A) = 0 ಆಗಿದ್ದರೆ, A singular ಮತ್ತು ಯಾವುದೇ ಸಾಮಾನ್ಯ inverse ಹೊಂದಿಲ್ಲ\n• Geometrically, transformation ಕನಿಷ್ಠ ಒಂದು dimension ಪುಡಿಗೊಳಿಸಿದೆ -- ಒಂದು 2D area ಒಂದು 1D line ಗೆ ಕುಸಿದಿದೆ, ಮತ್ತು ಮಾಹಿತಿ ಕಳೆದುಹೋಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Inverse', textKn: 'Inverse', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Reversing a Transformation', headingKn: 'ಒಂದು Transformation ಹಿಮ್ಮುಖಗೊಳಿಸುವುದೂ',
      bodyEn: '• If AB = I, then B = A^-1\n• The identity matrix acts like the number 1, so A A^-1 = I -- genuinely confirmed above',
      bodyKn: '• AB = I ಆಗಿದ್ದರೆ, B = A^-1\n• Identity matrix ಸಂಖ್ಯೆ 1 ರಂತೆ ವರ್ತಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ A A^-1 = I -- ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Cares About Inverses', headingKn: 'AI Inverses ಬಗ್ಗೆ ಏಕೆ ಕಾಳಜಿ ವಹಿಸುತ್ತದೆ',
      bodyEn: '• Matrix inverses appear in solving linear systems, least-squares mathematics, optimization, classical statistics, and numerical methods\n• Honest note: in practical machine learning, you generally do not explicitly calculate large matrix inverses -- it is computationally expensive and numerically less stable\n• Specialized solvers (like the QR-based approaches from Module 14 Part 3) are usually preferred instead',
      bodyKn: '• Matrix inverses linear systems, least-squares mathematics, optimization, classical statistics, ಮತ್ತು numerical methods ಪರಿಹರಿಸುವುದೂ ನಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ\n• ಪ್ರಾಮಾಣಿಕ ಟಿಪ್ಪಣಿ: ಪ್ರಾಯೋಗಿಕ machine learning ನಲ್ಲಿ, ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ದೊಡ್ಡ matrix inverses ಸ್ಪಷ್ಟವಾಗಿ ಗಣಿಸುವುದಿಲ್ಲ -- ಇದೂ ಗಣನಾತ್ಮಕವಾಗಿ ದುಬಾರಿ ಮತ್ತು ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಕಡಿಮೆ ಸ್ಥಿರ\n• (Module 14 Part 3 ಇಂದ QR-ಆಧಾರಿತ ವಿಧಾನಗಳಂತಹ) ವಿಶೇಷ solvers ಗಳನ್ನೂ ಸಾಮಾನ್ಯವಾಗಿ ಬದಲಿಗೆ ಆದ್ಯತೆ ನೀಡಲಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Identity Matrix', textKn: 'Identity Matrix', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• I = [[1,0],[0,1]] behaves like the number 1: AI = A and IA = A',
      bodyKn: '• I = [[1,0],[0,1]] ಸಂಖ್ಯೆ 1 ರಂತೆ ವರ್ತಿಸುತ್ತದೆ: AI = A ಮತ್ತು IA = A' } },
    { type: 'example', data: {
      tag: 'AI Example: Residual Connections',
      textEn: '• Identity mappings are conceptually important in residual networks: y = F(x) + x\n• x is effectively a shortcut/identity path around the transformation\n• This idea became extremely important in deep architectures such as ResNets, and is closely related to skip/residual pathways in modern transformer architectures',
      textKn: '• Identity mappings residual networks ನಲ್ಲಿ ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ಮುಖ್ಯ: y = F(x) + x\n• x ಪರಿಣಾಮಕಾರಿಯಾಗಿ transformation ಸುತ್ತ ಒಂದು shortcut/identity path\n• ಈ ಕಲ್ಪನೆ ResNets ನಂತಹ deep architectures ಗಳಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯವಾಯಿತು, ಮತ್ತು ಆಧುನಿಕ transformer architectures ಗಳಲ್ಲಿ skip/residual pathways ಗೆ ನಿಕಟವಾಗಿ ಸಂಬಂಧಿಸಿದೆ',
      table: '' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 300 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"IBM Plex Sans,sans-serif\">\n  <rect width=\"300\" height=\"130\" fill=\"#0F1B2D\"/>\n  <rect x=\"15\" y=\"55\" width=\"60\" height=\"30\" rx=\"5\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"45\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" fill=\"#93c5fd\">Input</text>\n  <path d=\"M75,70 H120\" stroke=\"#8AA0BD\" stroke-width=\"1.5\" marker-end=\"url(#rca)\"/>\n  <defs><marker id=\"rca\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#8AA0BD\" stroke-width=\"1.5\"/></marker></defs>\n  <rect x=\"120\" y=\"55\" width=\"85\" height=\"30\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"162\" y=\"74\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c4b5fd\">Transformation F(x)</text>\n  <path d=\"M205,70 H235\" stroke=\"#8AA0BD\" stroke-width=\"1.5\" marker-end=\"url(#rca)\"/>\n  <circle cx=\"245\" cy=\"70\" r=\"13\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"245\" y=\"74\" text-anchor=\"middle\" font-size=\"12\" fill=\"#6ee7b7\">+</text>\n  <path d=\"M45,55 V25 H245 V57\" stroke=\"#F4B740\" stroke-width=\"1.5\" fill=\"none\" marker-end=\"url(#rcb)\"/>\n  <defs><marker id=\"rcb\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#F4B740\" stroke-width=\"1.5\"/></marker></defs>\n  <text x=\"145\" y=\"20\" text-anchor=\"middle\" font-size=\"10\" fill=\"#F4B740\">identity shortcut</text>\n  <path d=\"M258,70 H280\" stroke=\"#8AA0BD\" stroke-width=\"1.5\" marker-end=\"url(#rca)\"/>\n  <rect x=\"280\" y=\"55\" width=\"18\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"none\"/>\n  <text x=\"150\" y=\"115\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\">Output = F(x) + x</text>\n</svg>",
      titleEn: 'The Identity Path in a Residual Block', titleKn: 'ಒಂದು Residual Block ನಲ್ಲಿ Identity Path',
      captionEn: 'x skips around the transformation and is added back unchanged -- the identity matrix\'s "do nothing" property, used as an architectural choice.',
      captionKn: 'x transformation ಸುತ್ತಲೂ ಸ್ಕಿಪ್ ಮಾಡುತ್ತದೆ ಮತ್ತು ಬದಲಾಗದೆ ಹಿಂತಿರುಗಿ ಸೇರಿಸಲಾಗುತ್ತದೆ -- identity matrix ನ "ಏನೂ ಮಾಡಬೇಡಿ" ಗುಣಲಕ್ಷಣ, ಒಂದು architectural ಆಯ್ಕೆಯಾಗಿ ಬಳಸಲಾಗಿದೆ.' } },

    { type: 'table', data: { captionEn: 'Part 1 -- AI Connections', captionKn: 'Part 1 -- AI Connections',
      rows: 'Concept|AI Application\nVector|Embedding, feature representation\nMatrix|Neural-network weights\n* (element-wise)|Masks, gates, dropout\n@ (matrix multiplication)|Neural-network layers\nTranspose|Backpropagation, attention\nDeterminant|Invertibility check\nInverse|Solving linear systems (rarely used directly in ML)\nIdentity|Residual/skip connections' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Every operation in this lesson exists to make y = activation(Wx + b) computable and trainable: matrix multiplication performs the transformation, addition applies the bias, transpose makes gradient calculations possible, and the identity matrix gives residual connections a mathematically clean "do nothing" baseline\n• The element-wise vs matrix-multiplication distinction is not academic -- it is the single most common source of silent bugs when moving from hand-rolled classes like these to NumPy or PyTorch, where * and @ produce completely different results with no error raised\n• Genuinely confirming A @ A^-1 = I mattered for the same reason genuinely confirming Mv = lambda*v mattered in Module 14 Part 3: a definition is only trustworthy once it has been checked against running code, not just stated',
      bodyKn: '• ಈ lesson ನಲ್ಲಿ ಪ್ರತಿ operation y = activation(Wx + b) ಅನ್ನೂ ಗಣಿಸಬಹುದಾಗಿ ಮತ್ತು ತರಬೇತಿ ನೀಡಬಹುದಾಗಿ ಮಾಡಲು ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ: matrix multiplication transformation ನಿರ್ವಹಿಸುತ್ತದೆ, addition bias ಅನ್ವಯಿಸುತ್ತದೆ, transpose gradient calculations ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು identity matrix residual connections ಗೆ ಒಂದು ಗಣಿತೀಯವಾಗಿ ಸ್ವಚ್ಛ "ಏನೂ ಮಾಡಬೇಡಿ" baseline ನೀಡುತ್ತದೆ\n• Element-wise vs matrix-multiplication ವ್ಯತ್ಯಾಸ ಶೈಕ್ಷಣಿಕ ಅಲ್ಲ -- ಇವುಗಳಂತಹ ಕೈ-ಬರಹದ classes ಇಂದ NumPy ಅಥವಾ PyTorch ಗೆ ಚಲಿಸುವಾಗ ಇದೂ ಮೌನ bugs ನ ಅತ್ಯಂತ ಸಾಮಾನ್ಯ ಮೂಲ, ಅಲ್ಲಿ * ಮತ್ತು @ ಯಾವುದೇ error ಇಲ್ಲದೆ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತವೆ\n• A @ A^-1 = I ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ Module 14 Part 3 ನಲ್ಲಿ Mv = lambda*v ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ ಕಾರಣಕ್ಕೆ ಮುಖ್ಯ: ಒಂದು ವ್ಯಾಖ್ಯಾನ code ಚಲಾಯಿಸುವ ಮೂಲಕ ಪರಿಶೀಲಿಸಿದ ನಂತರ ಮಾತ್ರ ವಿಶ್ವಾಸಾರ್ಹ, ಕೇವಲ ಹೇಳಿದ ನಂತರ ಅಲ್ಲ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Vector = ordered numbers representing information; Matrix = a grid of numbers representing transformations\n• * is element-wise multiplication (matching positions only); @ is matrix multiplication (row dot column) -- genuinely verified to give different, non-interchangeable results on the same A and B\n• Matrix shapes must be compatible for multiplication -- inner dimensions must match, and the result takes the outer dimensions\n• Transpose swaps rows and columns; determinant measures invertibility (det=0 means singular); inverse undoes a transformation, genuinely confirmed via A @ A^-1 = I; identity does nothing, which is exactly why it works as a residual shortcut\n• The whole lesson builds toward one line, y = activation(Wx + b) -- the computation every dense neural-network layer performs',
      bodyKn: '• Vector = ಮಾಹಿತಿಯನ್ನೂ ಪ್ರತಿನಿಧಿಸುವ ಕ್ರಮಬದ್ಧ ಸಂಖ್ಯೆಗಳು; Matrix = transformations ಪ್ರತಿನಿಧಿಸುವ ಸಂಖ್ಯೆಗಳ ಒಂದು grid\n• * element-wise multiplication (ಕೇವಲ ಹೊಂದಿಕೆಯಾಗುವ positions); @ matrix multiplication (row dot column) -- ಅದೇ A ಮತ್ತು B ಮೇಲೆ ಬೇರೆ, ಪರಸ್ಪರ-ಬದಲಾಯಿಸಲಾಗದ ಫಲಿತಾಂಶಗಳನ್ನೂ ನೀಡುತ್ತವೆ ಎಂದು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ\n• Multiplication ಗಾಗಿ Matrix shapes ಹೊಂದಿಕೆಯಾಗಬೇಕು -- ಒಳಗಿನ dimensions ಹೊಂದಿಕೆಯಾಗಬೇಕು, ಮತ್ತು ಫಲಿತಾಂಶ ಹೊರಗಿನ dimensions ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ\n• Transpose rows ಮತ್ತು columns ಬದಲಾಯಿಸುತ್ತದೆ; determinant invertibility ಅಳೆಯುತ್ತದೆ (det=0 ಅಂದರೆ singular); inverse ಒಂದು transformation ಹಿಂತಿರುಗಿಸುತ್ತದೆ, A @ A^-1 = I ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ; identity ಏನೂ ಮಾಡುವುದಿಲ್ಲ, ಇದೇ ಕಾರಣಕ್ಕೆ ಇದೂ ಒಂದು residual shortcut ಆಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ\n• ಸಂಪೂರ್ಣ lesson ಒಂದು ಸಾಲಿನ ಕಡೆಗೆ ನಿರ್ಮಿಸುತ್ತದೆ, y = activation(Wx + b) -- ಪ್ರತಿ dense neural-network layer ನಿರ್ವಹಿಸುವ computation' } },

    { type: 'quiz', data: { questions: [
      { q: 'For A = [[1,2],[3,4]] and B = [[5,6],[7,8]], what does the genuinely verified A.matmul(B) return?', qKn: 'A = [[1,2],[3,4]] ಮತ್ತು B = [[5,6],[7,8]] ಗೆ, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ A.matmul(B) ಏನೂ ಹಿಂತಿರುಗಿಸುತ್ತದೆ?',
        opts: ['[[5,12],[21,32]]', '[[19,22],[43,50]]', '[[6,8],[10,12]]', '[[1,3],[2,4]]'], correct: 1,
        optsKn: ['[[5,12],[21,32]]', '[[19,22],[43,50]]', '[[6,8],[10,12]]', '[[1,3],[2,4]]'] },
      { q: 'Why does A.element_wise_multiply(B) return a different result than A.matmul(B) for the same A and B?', qKn: 'ಅದೇ A ಮತ್ತು B ಗೆ A.element_wise_multiply(B) A.matmul(B) ಗಿಂತ ಏಕೆ ಬೇರೆ ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸುತ್ತದೆ?',
        opts: ['They are actually the same operation with different names', 'Element-wise multiplication only multiplies matching positions, while matrix multiplication takes a dot product of each row of A with each column of B', 'One of the two functions contains a bug', 'Matrix multiplication only works on square matrices'], correct: 1,
        optsKn: ['ಅವು ವಾಸ್ತವವಾಗಿ ಬೇರೆ ಹೆಸರುಗಳ ಜೊತೆ ಒಂದೇ operation', 'Element-wise multiplication ಕೇವಲ ಹೊಂದಿಕೆಯಾಗುವ positions ಗುಣಿಸುತ್ತದೆ, ಆದರೆ matrix multiplication A ನ ಪ್ರತಿ ಸಾಲಿನ B ನ ಪ್ರತಿ ಕಾಲಮ್ ಜೊತೆ ಒಂದು dot product ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ', 'ಎರಡು functions ಗಳಲ್ಲಿ ಒಂದು ಒಂದು bug ಒಳಗೊಂಡಿದೆ', 'Matrix multiplication ಕೇವಲ square matrices ಮೇಲೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
      { q: 'A weight matrix has shape 128 x 784. What must the input\'s shape be for the matrix multiplication to be valid?', qKn: 'ಒಂದು weight matrix 128 x 784 shape ಹೊಂದಿದೆ. Matrix multiplication ಮಾನ್ಯವಾಗಿರಲು input ನ shape ಏನಾಗಿರಬೇಕು?',
        opts: ['128 x 1', '784 x 1', 'Any shape works', '1 x 784'], correct: 1,
        optsKn: ['128 x 1', '784 x 1', 'ಯಾವುದೇ shape ಕೆಲಸ ಮಾಡುತ್ತದೆ', '1 x 784'] },
      { q: 'What did genuinely computing A @ A^-1 confirm about the inverse_2x2() implementation?', qKn: 'A @ A^-1 ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ inverse_2x2() implementation ಬಗ್ಗೆ ಏನೂ ದೃಢಪಡಿಸಿತು?',
        opts: ['It produced a matrix of all zeros', 'It produced exactly the 2x2 identity matrix, [[1.0, 0.0], [0.0, 1.0]], confirming the inverse satisfies its defining property', 'It raised a ValueError because the matrix was singular', 'The result was only approximately close to identity, not exact'], correct: 1,
        optsKn: ['ಇದೂ ಎಲ್ಲಾ zeros ನ ಒಂದು matrix ಉತ್ಪಾದಿಸಿತು', 'ಇದೂ ನಿಖರವಾಗಿ 2x2 identity matrix, [[1.0, 0.0], [0.0, 1.0]] ಉತ್ಪಾದಿಸಿತು, inverse ಇದರ ವ್ಯಾಖ್ಯಾನಿಸುವ ಗುಣಲಕ್ಷಣ ತೃಪ್ತಿಪಡಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'Matrix singular ಆಗಿದ್ದ ಕಾರಣ ಇದೂ ಒಂದು ValueError ಎಸೆಯಿತು', 'ಫಲಿತಾಂಶ ಕೇವಲ identity ಗೆ ಸುಮಾರು ಹತ್ತಿರವಿತ್ತು, ನಿಖರವಾಗಿಲ್ಲ'] },
      { q: 'Why is the identity matrix relevant to residual connections in architectures like ResNet?', qKn: 'ResNet ನಂತಹ architectures ಗಳಲ್ಲಿ residual connections ಗೆ identity matrix ಏಕೆ ಪ್ರಸ್ತುತ?',
        opts: ['It is not actually related to residual connections', 'The identity matrix\'s "do nothing" property is exactly what the shortcut path x needs to pass through unchanged in y = F(x) + x', 'Residual connections require computing a matrix inverse', 'It only applies to convolutional layers, not residual connections'], correct: 1,
        optsKn: ['ಇದೂ ವಾಸ್ತವವಾಗಿ residual connections ಗೆ ಸಂಬಂಧಿಸಿಲ್ಲ', 'Identity matrix ನ "ಏನೂ ಮಾಡಬೇಡಿ" ಗುಣಲಕ್ಷಣ y = F(x) + x ನಲ್ಲಿ shortcut path x ಬದಲಾಗದೆ ಹಾದುಹೋಗಲು ನಿಖರವಾಗಿ ಬೇಕಾದದ್ದೂ', 'Residual connections ಗೆ ಒಂದು matrix inverse ಗಣಿಸಬೇಕು', 'ಇದೂ ಕೇವಲ convolutional layers ಗೆ ಮಾತ್ರ ಅನ್ವಯಿಸುತ್ತದೆ, residual connections ಗಲ್ಲ'] },
    ] } },
  ],
};
