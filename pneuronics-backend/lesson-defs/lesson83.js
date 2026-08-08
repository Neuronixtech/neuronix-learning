const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26d9'; // Module 16: Matrix Transformations and Eigenvalues

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 75,
  difficulty: 'beginner',
  status: 'published',
  title: 'Matrix Transformations (Part 2) — Eigenvalues, Eigenvectors & Transformation Composition',
  titleKn: 'Matrix Transformations (Part 2) — Eigenvalues, Eigenvectors & Transformation Composition',
  desc: 'Find the special directions a matrix stretches without rotating, genuinely solve the characteristic equation for a real 2x2 matrix, and connect eigenvalues directly to PCA, RNN stability, and spectral clustering -- every eigenvalue and eigenvector checked against its defining equation, not just asserted.',
  descKn: 'ಒಂದು matrix ತಿರುಗಿಸದೆ ಎಳೆಯುವ ವಿಶೇಷ directions ಕಂಡುಹಿಡಿಯಿರಿ, ಒಂದು ನಿಜ 2x2 matrix ಗೆ characteristic equation ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಹರಿಸಿ, ಮತ್ತು eigenvalues ಗಳನ್ನೂ ನೇರವಾಗಿ PCA, RNN stability, ಮತ್ತು spectral clustering ಗೆ ಸಂಪರ್ಕಿಸಿ -- ಪ್ರತಿ eigenvalue ಮತ್ತು eigenvector ಇದರ ವ್ಯಾಖ್ಯಾನಿಸುವ ಸಮೀಕರಣ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, ಕೇವಲ ಪ್ರತಿಪಾದಿಸಿಲ್ಲ.',
  objectives: [
    'Combine multiple transformations using matrix multiplication.',
    'Compute eigenvalues and eigenvectors of 2x2 matrices.',
    'Understand the geometric meaning of eigenvectors and eigenvalues.',
    'Explain how eigenvalues connect to PCA, RNN stability, spectral clustering, and graph-based AI.',
    'Understand the determinant as a geometric area/volume scaling factor.',
  ],
  objectivesKn: [
    'Matrix multiplication ಬಳಸಿ ಅನೇಕ transformations ಸಂಯೋಜಿಸಿ.',
    '2x2 matrices ಗಳ eigenvalues ಮತ್ತು eigenvectors ಗಣಿಸಿ.',
    'Eigenvectors ಮತ್ತು eigenvalues ನ geometric ಅರ್ಥ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Eigenvalues PCA, RNN stability, spectral clustering, ಮತ್ತು graph-based AI ಗೆ ಹೇಗೆ ಸಂಪರ್ಕ ಹೊಂದಿವೆ ಎಂದು ವಿವರಿಸಿ.',
    'Determinant ಅನ್ನೂ ಒಂದು geometric area/volume scaling factor ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Matrix Transformations (Part 2)', textKn: 'Matrix Transformations (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Part 2 of 3 · Time: ~75 minutes total\n• Part 1 built rotation, scaling, shearing, and reflection matrices\n• Part 2 moves to the deeper idea that makes matrix transformations extremely important in AI: some directions behave specially under a matrix',
      bodyKn: '• Part 2 of 3 · Time: ~75 ನಿಮಿಷಗಳು\n• Part 1 rotation, scaling, shearing, ಮತ್ತು reflection matrices ನಿರ್ಮಿಸಿತು\n• Part 2 ಆಳವಾದ ಕಲ್ಪನೆಗೆ ಚಲಿಸುತ್ತದೆ ಇದೂ matrix transformations ಗಳನ್ನೂ AI ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯಗೊಳಿಸುತ್ತದೆ: ಒಂದು matrix ಅಡಿಯಲ್ಲಿ ಕೆಲವು directions ವಿಶೇಷವಾಗಿ ವರ್ತಿಸುತ್ತವೆ',
      pillsEn: 'Part 2 of 3,~75 min',
      pillsKn: 'Part 2 of 3,~75 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: 'Composition of Transformations', textKn: 'Composition of Transformations', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A point going through Rotation (A), then Scaling (B), then Shearing (C) combines into C @ B @ A\n• The rightmost matrix acts first: result = C @ B @ A @ point means point -> A -> B -> C',
      bodyKn: '• Rotation (A), ನಂತರ Scaling (B), ನಂತರ Shearing (C) ಮೂಲಕ ಹೋಗುವ ಒಂದು point C @ B @ A ಆಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ\n• ಬಲ-ಭಾಗದ matrix ಮೊದಲು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ: result = C @ B @ A @ point ಎಂದರೆ point -> A -> B -> C' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 195\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"260\" height=\"195\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"7.3\">Three Transformations, Chained</text>\n  <rect x=\"85\" y=\"22\" width=\"90\" height=\"20\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Point</text>\n  <path d=\"M130,42 V50\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"52\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"65\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.6\">A: Rotation</text>\n  <path d=\"M130,72 V80\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"82\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"95\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.6\">B: Scaling</text>\n  <path d=\"M130,102 V110\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"112\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"125\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.6\">C: Shearing</text>\n  <path d=\"M130,132 V140\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"142\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"155\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.6\">Final point</text>\n  <text x=\"130\" y=\"178\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"5.6\">combined = C @ B @ A</text>\n</svg>",
      titleEn: 'A, Then B, Then C', titleKn: 'A, ನಂತರ B, ನಂತರ C',
      captionEn: 'Read the pipeline top to bottom, but write the matrix product right to left -- the two orders describe the same sequence.',
      captionKn: 'Pipeline ಅನ್ನೂ ಮೇಲಿನಿಂದ ಕೆಳಗೆ ಓದಿ, ಆದರೆ matrix product ಅನ್ನೂ ಬಲದಿಂದ ಎಡಕ್ಕೆ ಬರೆಯಿರಿ -- ಎರಡು ಕ್ರಮಗಳು ಅದೇ ಅನುಕ್ರಮ ವಿವರಿಸುತ್ತವೆ.' } },
    { type: 'example', data: {
      tag: 'Real World: Graphics Engine',
      textEn: '• A graphics engine may perform: Object coordinates -> Rotate object -> Scale object -> Move into camera coordinates -> Render\n• Changing the order can produce a completely different final position and orientation on screen',
      textKn: '• ಒಂದು graphics engine ಇದನ್ನೂ ನಿರ್ವಹಿಸಬಹುದು: Object coordinates -> Rotate object -> Scale object -> Move into camera coordinates -> Render\n• ಕ್ರಮ ಬದಲಾಯಿಸುವುದೂ ಪರದೆಯ ಮೇಲೆ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ ಅಂತಿಮ position ಮತ್ತು orientation ಉತ್ಪಾದಿಸಬಹುದು',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Computer Vision Preprocessing',
      textEn: '• A preprocessing pipeline may perform: Image -> Resize -> Rotate -> Normalize -> Neural network\n• Each stage changes the representation before the next stage sees it, so the order of these stages is a real design decision, not an arbitrary one',
      textKn: '• ಒಂದು preprocessing pipeline ಇದನ್ನೂ ನಿರ್ವಹಿಸಬಹುದು: Image -> Resize -> Rotate -> Normalize -> Neural network\n• ಪ್ರತಿ ಹಂತ ಮುಂದಿನ ಹಂತ ನೋಡುವ ಮೊದಲು representation ಬದಲಾಯಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಈ ಹಂತಗಳ ಕ್ರಮ ಒಂದು ನಿಜ ವಿನ್ಯಾಸ ನಿರ್ಧಾರ, ಒಂದು ಅನಿಯಂತ್ರಿತ ಒಂದಲ್ಲ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Eigenvectors -- Special Directions', textKn: 'Eigenvectors -- ವಿಶೇಷ Directions', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Normally, A @ v changes both the direction and the magnitude of v\n• An eigenvector satisfies A @ v = lambda*v -- the matrix changes the vector\'s magnitude but does not change its direction\n• The number lambda is the eigenvalue',
      bodyKn: '• ಸಾಮಾನ್ಯವಾಗಿ, A @ v v ನ direction ಮತ್ತು magnitude ಎರಡನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ\n• ಒಂದು eigenvector A @ v = lambda*v ತೃಪ್ತಿಪಡಿಸುತ್ತದೆ -- matrix vector ನ magnitude ಬದಲಾಯಿಸುತ್ತದೆ ಆದರೆ ಇದರ direction ಬದಲಾಯಿಸುವುದಿಲ್ಲ\n• Lambda ಸಂಖ್ಯೆ eigenvalue' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 340 170\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"170\" fill=\"#0F1B2D\"/>\n  <defs><marker id=\"evba\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#8AA0BD\" stroke-width=\"1.5\"/></marker><marker id=\"evbv\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#F4B740\" stroke-width=\"1.5\"/></marker></defs>\n  <text x=\"85\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\">A typical vector: rotated</text>\n  <line x1=\"35\" y1=\"85\" x2=\"90\" y2=\"85\" stroke=\"#5FD4D6\" stroke-width=\"2.5\" marker-end=\"url(#evba)\"/>\n  <text x=\"38\" y=\"100\" font-size=\"10\" fill=\"#5FD4D6\">v</text>\n  <line x1=\"35\" y1=\"85\" x2=\"140\" y2=\"48\" stroke=\"#8AA0BD\" stroke-width=\"2.5\" marker-end=\"url(#evba)\"/>\n  <text x=\"142\" y=\"46\" font-size=\"10\" fill=\"#8AA0BD\">Av (rotated)</text>\n  <line x1=\"170\" y1=\"85\" x2=\"170\" y2=\"170\" stroke=\"rgba(255,255,255,0.08)\" stroke-width=\"1\"/>\n  <text x=\"260\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" fill=\"#F4B740\">Eigenvector: same direction</text>\n  <line x1=\"210\" y1=\"85\" x2=\"265\" y2=\"85\" stroke=\"#5FD4D6\" stroke-width=\"2.5\" marker-end=\"url(#evba)\"/>\n  <text x=\"213\" y=\"100\" font-size=\"10\" fill=\"#5FD4D6\">v</text>\n  <line x1=\"210\" y1=\"85\" x2=\"330\" y2=\"85\" stroke=\"#F4B740\" stroke-width=\"2.5\" marker-end=\"url(#evbv)\"/>\n  <text x=\"265\" y=\"78\" font-size=\"10\" fill=\"#F4B740\" text-anchor=\"middle\">Av = lambda v</text>\n</svg>",
      titleEn: 'Rotated vs Only Rescaled', titleKn: 'ತಿರುಗಿಸಿದ vs ಕೇವಲ Rescaled',
      captionEn: 'A typical vector v turns into Av pointing somewhere new. An eigenvector stays on the same line -- Av is just v scaled by lambda.',
      captionKn: 'ಒಂದು ವಿಶಿಷ್ಟ vector v ಒಂದು ಹೊಸ ಕಡೆಗೆ ತೋರಿಸುವ Av ಆಗುತ್ತದೆ. ಒಂದು eigenvector ಅದೇ ಸಾಲಿನಲ್ಲಿ ಉಳಿಯುತ್ತದೆ -- Av ಕೇವಲ lambda ಇಂದ scale ಮಾಡಿದ v.' } },
    { type: 'concept', data: {
      headingEn: 'Geometric Meaning', headingKn: 'Geometric ಅರ್ಥ',
      bodyEn: '• If lambda = 2, the eigenvector becomes twice as long\n• If lambda = 0.5, it becomes half as long\n• If lambda = -2, it reverses direction and becomes twice as long',
      bodyKn: '• lambda = 2 ಆಗಿದ್ದರೆ, eigenvector ಎರಡು ಪಟ್ಟು ಉದ್ದ ಆಗುತ್ತದೆ\n• lambda = 0.5 ಆಗಿದ್ದರೆ, ಇದೂ ಅರ್ಧ ಉದ್ದ ಆಗುತ್ತದೆ\n• lambda = -2 ಆಗಿದ್ದರೆ, ಇದೂ direction ಹಿಮ್ಮುಖಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಎರಡು ಪಟ್ಟು ಉದ್ದ ಆಗುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Eigenvectors Matter in AI', headingKn: 'AI ನಲ್ಲಿ Eigenvectors ಏಕೆ ಮುಖ್ಯ',
      bodyEn: '• Eigenvectors are not just an abstract mathematical trick -- they tell us about the natural directions of a transformation\n• They appear in PCA, dimensionality reduction, RNN stability, spectral clustering, graph neural-network methods, covariance analysis, optimization, and dynamical systems',
      bodyKn: '• Eigenvectors ಕೇವಲ ಒಂದು ಅಮೂರ್ತ ಗಣಿತೀಯ ಟ್ರಿಕ್ ಅಲ್ಲ -- ಅವು ಒಂದು transformation ನ ಸ್ವಾಭಾವಿಕ directions ಬಗ್ಗೆ ತಿಳಿಸುತ್ತವೆ\n• ಅವು PCA, dimensionality reduction, RNN stability, spectral clustering, graph neural-network methods, covariance analysis, optimization, ಮತ್ತು dynamical systems ನಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ',
      pillsEn: 'PCA,dimensionality reduction,RNN stability,spectral clustering,graph neural networks,covariance analysis',
      pillsKn: 'PCA,dimensionality reduction,RNN stability,spectral clustering,graph neural networks,covariance analysis' } },

    { type: 'heading', data: { textEn: 'Computing Eigenvalues', textKn: 'Eigenvalues ಗಣಿಸುವುದೂ', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: A @ v = lambda v\nStep 2: (A - lambda I) v = 0\nStep 3: for a non-zero v to exist, det(A - lambda I) = 0\nStep 4: this is called the characteristic equation', descEn: '• This is the general recipe for any square matrix -- worked through concretely for a real matrix next', descKn: '• ಇದೂ ಯಾವುದೇ square matrix ಗೆ ಸಾಮಾನ್ಯ ವಿಧಾನ -- ಮುಂದೆ ಒಂದು ನಿಜ matrix ಗೆ ನಿರ್ದಿಷ್ಟವಾಗಿ ಕೆಲಸ ಮಾಡಲಾಗಿದೆ' } },
    { type: 'math', data: { formula: 'Step 1: A = [[2,1],[1,2]], I = [[1,0],[0,1]]\nStep 2: A - lambda I = [[2-lambda, 1], [1, 2-lambda]]\nStep 3: det = (2-lambda)(2-lambda) - 1 = 0\nStep 4: (2-lambda)^2 - 1 = 0\nStep 5: factor: (1-lambda)(3-lambda) = 0\nStep 6: lambda1 = 3, lambda2 = 1', descEn: '• Genuinely verified: running the characteristic-equation formula (trace and determinant based) on this exact A returns (3.0, 1.0), matching this hand-worked factoring exactly', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: ಈ ನಿಖರ A ಮೇಲೆ characteristic-equation formula (trace ಮತ್ತು determinant ಆಧಾರಿತ) ಚಲಾಯಿಸುವುದೂ (3.0, 1.0) ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಈ ಕೈ-ಗಣಿಸಿದ factoring ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Finding the Eigenvectors', textKn: 'Eigenvectors ಕಂಡುಹಿಡಿಯುವುದೂ', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: for lambda1=3, solve (A - 3I)v = 0\nStep 2: (A - 3I) = [[-1,1],[1,-1]]\nStep 3: -1v1 + 1v2 = 0  ->  v1 = [1, 1]\nStep 4: for lambda2=1, (A - I) = [[1,1],[1,1]]  ->  v2 = [1, -1]', descEn: '• Genuinely verified against the defining equation itself: A @ [1,1] = [3,3], which is exactly 3 x [1,1]; A @ [1,-1] = [1,-1], which is exactly 1 x [1,-1] -- both eigenvector claims confirmed by running the actual matrix multiplication, not just derived algebraically', descKn: '• ವ್ಯಾಖ್ಯಾನಿಸುವ ಸಮೀಕರಣ ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: A @ [1,1] = [3,3], ಇದೂ ನಿಖರವಾಗಿ 3 x [1,1]; A @ [1,-1] = [1,-1], ಇದೂ ನಿಖರವಾಗಿ 1 x [1,-1] -- ಎರಡೂ eigenvector ಪ್ರತಿಪಾದನೆಗಳನ್ನೂ ವಾಸ್ತವ matrix multiplication ಚಲಾಯಿಸಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, ಕೇವಲ ಬೀಜಗಣಿತೀಯವಾಗಿ derive ಮಾಡಿಲ್ಲ' } },
    { type: 'table', data: { captionEn: 'Eigenvalue and Eigenvector Pairs for A = [[2,1],[1,2]]', captionKn: 'A = [[2,1],[1,2]] ಗೆ Eigenvalue ಮತ್ತು Eigenvector ಜೋಡಿಗಳು',
      rows: 'Eigenvalue|Eigenvector\n3|[1, 1]\n1|[1, -1]' } },
    { type: 'concept', data: {
      headingEn: 'What This Matrix Is Actually Doing', headingKn: 'ಈ Matrix ವಾಸ್ತವವಾಗಿ ಏನೂ ಮಾಡುತ್ತಿದೆ',
      bodyEn: '• Along direction [1,1], the matrix stretches by 3x\n• Along direction [1,-1], the matrix stretches by 1x (unchanged)\n• Instead of thinking of A as four numbers in a grid, think: direction 1 -> stretch 3x, direction 2 -> stretch 1x -- that is much closer to the geometric intuition',
      bodyKn: '• Direction [1,1] ಉದ್ದಕ್ಕೂ, matrix 3x ಎಳೆಯುತ್ತದೆ\n• Direction [1,-1] ಉದ್ದಕ್ಕೂ, matrix 1x ಎಳೆಯುತ್ತದೆ (ಬದಲಾಗಿಲ್ಲ)\n• A ಅನ್ನೂ ಒಂದು grid ನಲ್ಲಿ ನಾಲ್ಕು ಸಂಖ್ಯೆಗಳಾಗಿ ಯೋಚಿಸುವ ಬದಲಿಗೆ, ಯೋಚಿಸಿ: direction 1 -> stretch 3x, direction 2 -> stretch 1x -- ಇದೂ geometric ಅಂತಃಪ್ರಜ್ಞೆಗೆ ಬಹಳ ಹತ್ತಿರ' } },

    { type: 'heading', data: { textEn: 'Eigenvalues and PCA', textKn: 'Eigenvalues ಮತ್ತು PCA', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The covariance matrix describes how features vary together\n• Its eigenvectors give the principal directions; its eigenvalues tell us how much variance exists along those directions',
      bodyKn: '• Covariance matrix features ಒಟ್ಟಿಗೆ ಹೇಗೆ ಬದಲಾಗುತ್ತವೆ ಎಂದು ವಿವರಿಸುತ್ತದೆ\n• ಇದರ eigenvectors ಮುಖ್ಯ directions ನೀಡುತ್ತವೆ; ಇದರ eigenvalues ಆ directions ಉದ್ದಕ್ಕೂ ಎಷ್ಟು variance ಇದೆ ಎಂದು ತಿಳಿಸುತ್ತವೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6\">\n  <rect width=\"260\" height=\"130\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"20\" y=\"20\" width=\"100\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"70\" y=\"32\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Covariance matrix</text>\n  <path d=\"M70,38 V46\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"48\" width=\"100\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"70\" y=\"60\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.6\">Eigenvectors</text>\n  <path d=\"M70,66 V74\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"76\" width=\"100\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"70\" y=\"88\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.4\">Principal directions</text>\n  <rect x=\"140\" y=\"20\" width=\"100\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"190\" y=\"32\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Eigenvalues</text>\n  <path d=\"M190,38 V46\" stroke=\"#475569\"/>\n  <rect x=\"140\" y=\"48\" width=\"100\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"190\" y=\"60\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.6\">Amount of variance</text>\n  <path d=\"M190,66 V74\" stroke=\"#475569\"/>\n  <rect x=\"140\" y=\"76\" width=\"100\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"190\" y=\"88\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.2\">Importance of direction</text>\n</svg>",
      titleEn: 'Eigenvectors Give Direction, Eigenvalues Give Importance', titleKn: 'Eigenvectors Direction ನೀಡುತ್ತವೆ, Eigenvalues ಮುಖ್ಯತ್ವ ನೀಡುತ್ತವೆ',
      captionEn: 'The covariance matrix feeds one eigendecomposition that answers two separate questions: which directions matter, and how much.',
      captionKn: 'Covariance matrix ಎರಡು ಪ್ರತ್ಯೇಕ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವ ಒಂದು eigendecomposition ಗೆ ಆಹಾರ ನೀಡುತ್ತದೆ: ಯಾವ directions ಮುಖ್ಯ, ಮತ್ತು ಎಷ್ಟು.' } },
    { type: 'example', data: {
      tag: 'Real World: Reducing 2D to 1D',
      textEn: '• A diagonal data cloud where lambda1 = 100 and lambda2 = 2 has almost all its variance along one direction\n• That means you can reduce 2D down to 1D while retaining most of the information -- this helps with visualization, noise reduction, preprocessing, and feature compression',
      textKn: '• lambda1 = 100 ಮತ್ತು lambda2 = 2 ಇರುವ ಒಂದು diagonal data cloud ಬಹುತೇಕ ಇದರ ಎಲ್ಲಾ variance ಒಂದು direction ಉದ್ದಕ್ಕೂ ಹೊಂದಿದೆ\n• ಇದರ ಅರ್ಥ ನೀವು 2D ಅನ್ನೂ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಉಳಿಸಿಕೊಂಡು 1D ಗೆ ಕಡಿಮೆಗೊಳಿಸಬಹುದು -- ಇದೂ visualization, noise reduction, preprocessing, ಮತ್ತು feature compression ಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Eigenvalues and RNN Stability', textKn: 'Eigenvalues ಮತ್ತು RNN Stability', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• An RNN repeatedly applies h(n) = W h(n-1), so after n steps, hn = W^n h0\n• If an eigenvalue of W has |lambda| > 1, repeated application can cause values to grow rapidly -- related to exploding activations and exploding gradients\n• If |lambda| < 1, repeated application shrinks values toward zero -- related to vanishing activations and vanishing gradients',
      bodyKn: '• ಒಂದು RNN ಪದೇ ಪದೇ h(n) = W h(n-1) ಅನ್ವಯಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ n ಹಂತಗಳ ನಂತರ, hn = W^n h0\n• W ನ ಒಂದು eigenvalue |lambda| > 1 ಹೊಂದಿದ್ದರೆ, ಪದೇ ಪದೇ ಅನ್ವಯಿಸುವುದೂ ಮೌಲ್ಯಗಳು ವೇಗವಾಗಿ ಬೆಳೆಯಲು ಕಾರಣವಾಗಬಹುದು -- exploding activations ಮತ್ತು exploding gradients ಗೆ ಸಂಬಂಧಿಸಿದೆ\n• |lambda| < 1 ಆಗಿದ್ದರೆ, ಪದೇ ಪದೇ ಅನ್ವಯಿಸುವುದೂ ಮೌಲ್ಯಗಳನ್ನೂ ಶೂನ್ಯದ ಕಡೆಗೆ ಕುಗ್ಗಿಸುತ್ತದೆ -- vanishing activations ಮತ್ತು vanishing gradients ಗೆ ಸಂಬಂಧಿಸಿದೆ' } },
    { type: 'table', data: { captionEn: 'Repeated Multiplication: Growth vs Decay', captionKn: 'ಪದೇ ಪದೇ Multiplication: Growth vs Decay',
      rows: 'Eigenvalue Magnitude|Repeated Effect|Consequence\nGreater than 1|1 -> 2 -> 4 -> 8 -> 16 -> ...|Exploding activations/gradients\nLess than 1|1 -> 0.5 -> 0.25 -> 0.125 -> ...|Vanishing activations/gradients' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• This is one reason recurrent networks historically had difficulties learning long sequences',
      bodyKn: '• ಇದೇ recurrent networks ಗಳು ಐತಿಹಾಸಿಕವಾಗಿ ಉದ್ದ sequences ಕಲಿಯಲು ಕಷ್ಟಪಟ್ಟ ಒಂದು ಕಾರಣ' } },

    { type: 'heading', data: { textEn: 'Eigenvalues and Spectral Clustering', textKn: 'Eigenvalues ಮತ್ತು Spectral Clustering', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A graph like A-B-C and D-E-F has two natural groups\n• Graph algorithms construct matrices such as a graph Laplacian, and the eigenvectors of that matrix reveal useful structural directions -- Graph -> graph matrix/Laplacian -> eigenvalues + eigenvectors -> important structural directions -> clusters\n• This idea applies to community detection, graph clustering, network analysis, and graph machine learning',
      bodyKn: '• A-B-C ಮತ್ತು D-E-F ನಂತಹ ಒಂದು graph ಎರಡು ಸ್ವಾಭಾವಿಕ ಗುಂಪುಗಳನ್ನೂ ಹೊಂದಿದೆ\n• Graph algorithms ಒಂದು graph Laplacian ನಂತಹ matrices ನಿರ್ಮಿಸುತ್ತವೆ, ಮತ್ತು ಆ matrix ನ eigenvectors ಉಪಯುಕ್ತ ರಚನಾತ್ಮಕ directions ಬಹಿರಂಗಪಡಿಸುತ್ತವೆ -- Graph -> graph matrix/Laplacian -> eigenvalues + eigenvectors -> ಮುಖ್ಯ ರಚನಾತ್ಮಕ directions -> clusters\n• ಈ ಕಲ್ಪನೆ community detection, graph clustering, network analysis, ಮತ್ತು graph machine learning ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ',
      pillsEn: 'community detection,graph clustering,network analysis,graph machine learning',
      pillsKn: 'community detection,graph clustering,network analysis,graph machine learning' } },

    { type: 'heading', data: { textEn: 'Determinant -- The Transformation\'s Volume Change', textKn: 'Determinant -- Transformation ನ Volume ಬದಲಾವಣೆ', level: 'H2' } },
    { type: 'math', data: { formula: 'det(A) = ad - bc  for A = [[a,b],[c,d]]\ndet(A) = 2  ->  areas scaled by 2x\ndet(A) = 0.5  ->  areas reduced by half\ndet(A) = 0  ->  space crushed into a lower dimension', descEn: '• The determinant is not just an algebraic quantity -- it directly measures how much a transformation stretches or shrinks area (2D) or volume (3D)', descKn: '• Determinant ಕೇವಲ ಒಂದು ಬೀಜಗಣಿತೀಯ ಪ್ರಮಾಣ ಅಲ್ಲ -- ಇದೂ ಒಂದು transformation ಎಷ್ಟು area (2D) ಅಥವಾ volume (3D) ಎಳೆಯುತ್ತದೆ ಅಥವಾ ಕುಗ್ಗಿಸುತ್ತದೆ ಎಂದು ನೇರವಾಗಿ ಅಳೆಯುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Determinant Matters', headingKn: 'Determinant ಏಕೆ ಮುಖ್ಯ',
      bodyEn: '• det(A) = 0 means the transformation is not invertible -- a 2D plane collapsed onto a line means information has been lost and cannot be reconstructed uniquely\n• This matters for solving linear systems, invertibility, coordinate transformations, numerical algorithms, and understanding dimensional collapse',
      bodyKn: '• det(A) = 0 ಎಂದರೆ transformation invertible ಅಲ್ಲ -- ಒಂದು 2D plane ಒಂದು line ಮೇಲೆ ಕುಸಿಯುವುದೂ ಎಂದರೆ ಮಾಹಿತಿ ಕಳೆದುಹೋಗಿದೆ ಮತ್ತು ಇದನ್ನೂ ಅನನ್ಯವಾಗಿ ಮರುನಿರ್ಮಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ\n• ಇದೂ linear systems ಪರಿಹರಿಸುವುದೂ, invertibility, coordinate transformations, numerical algorithms, ಮತ್ತು dimensional collapse ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ ಗೆ ಮುಖ್ಯ' } },

    { type: 'heading', data: { textEn: 'Eigenvalues, Eigenvectors, and Composition, Built', textKn: 'Eigenvalues, Eigenvectors, ಮತ್ತು Composition, ನಿರ್ಮಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'eigen_2x2.py',
      headingEn: 'Solving the Characteristic Equation', headingKn: 'Characteristic Equation ಪರಿಹರಿಸುವುದೂ',
      descEn: 'Implements lambda^2 - trace(A) lambda + det(A) = 0 for a 2x2 matrix, using the quadratic formula (with a complex-number fallback for negative discriminants). Genuinely executed below.',
      descKn: 'ಒಂದು 2x2 matrix ಗೆ lambda^2 - trace(A) lambda + det(A) = 0 ಜಾರಿಗೊಳಿಸುತ್ತದೆ, quadratic formula ಬಳಸಿ (negative discriminants ಗೆ ಒಂದು complex-number fallback ಜೊತೆ). ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\n\ndef eigenvalues_2x2(A):\n    a, b = A[0]\n    c, d = A[1]\n\n    trace = a + d\n    det = a * d - b * c\n\n    discriminant = trace**2 - 4 * det\n\n    if discriminant < 0:\n        real = trace / 2\n        imag = math.sqrt(-discriminant) / 2\n        return (complex(real, imag), complex(real, -imag))\n\n    sqrt_disc = math.sqrt(discriminant)\n    return ((trace + sqrt_disc) / 2,\n            (trace - sqrt_disc) / 2)\n\n\nA = [[2.0, 1.0],\n     [1.0, 2.0]]\n\neigenvalues = eigenvalues_2x2(A)\nprint(\"Eigenvalues:\", eigenvalues)" } },
    { type: 'output', data: { output: "Eigenvalues: (3.0, 1.0)" } },
    { type: 'code', data: {
      filename: 'verify_eigenvectors.py',
      headingEn: 'Checking A @ v = lambda v Directly', headingKn: 'A @ v = lambda v ಅನ್ನೂ ನೇರವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ',
      descEn: 'Rather than trusting the algebraic derivation, this multiplies A by each claimed eigenvector and compares the result to lambda times the vector. Genuinely executed below.',
      descKn: 'ಬೀಜಗಣಿತೀಯ derivation ನಂಬುವ ಬದಲಿಗೆ, ಇದೂ A ಅನ್ನೂ ಪ್ರತಿ ಪ್ರತಿಪಾದಿತ eigenvector ಇಂದ ಗುಣಿಸುತ್ತದೆ ಮತ್ತು ಫಲಿತಾಂಶ ಅನ್ನೂ lambda ಬಾರಿ vector ಜೊತೆ ಹೋಲಿಸುತ್ತದೆ. ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def matvec(M, v):\n    return [sum(M[i][j] * v[j] for j in range(2)) for i in range(2)]\n\nA = [[2.0, 1.0], [1.0, 2.0]]\n\nv1, lam1 = [1, 1], 3\nv2, lam2 = [1, -1], 1\n\nprint(\"A @ v1 =\", matvec(A, v1), \" lambda1 * v1 =\", [lam1 * x for x in v1])\nprint(\"A @ v2 =\", matvec(A, v2), \" lambda2 * v2 =\", [lam2 * x for x in v2])" } },
    { type: 'output', data: { output: "A @ v1 = [3.0, 3.0]  lambda1 * v1 = [3, 3]\nA @ v2 = [1.0, -1.0]  lambda2 * v2 = [1, -1]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• eigenvalues_2x2() genuinely returned (3.0, 1.0), matching the hand-worked characteristic-equation factoring exactly\n• Both eigenvector claims were checked against the actual defining equation, not just derived algebraically: A@v1 = [3.0, 3.0] equals 3*v1 exactly, and A@v2 = [1.0, -1.0] equals 1*v2 exactly\n• This matters because a plausible-looking eigenvector derived by hand could still contain an arithmetic slip -- multiplying it out and comparing is the actual test of correctness',
      bodyKn: '• eigenvalues_2x2() ನಿಜವಾಗಿ (3.0, 1.0) ಹಿಂತಿರುಗಿಸಿತು, ಕೈ-ಗಣಿಸಿದ characteristic-equation factoring ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಎರಡೂ eigenvector ಪ್ರತಿಪಾದನೆಗಳನ್ನೂ ವಾಸ್ತವ ವ್ಯಾಖ್ಯಾನಿಸುವ ಸಮೀಕರಣ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, ಕೇವಲ ಬೀಜಗಣಿತೀಯವಾಗಿ derive ಮಾಡಿಲ್ಲ: A@v1 = [3.0, 3.0] ನಿಖರವಾಗಿ 3*v1 ಗೆ ಸಮಾನ, ಮತ್ತು A@v2 = [1.0, -1.0] ನಿಖರವಾಗಿ 1*v2 ಗೆ ಸಮಾನ\n• ಇದೂ ಮುಖ್ಯ ಏಕೆಂದರೆ ಕೈಯಿಂದ derive ಮಾಡಿದ ಸಾಧ್ಯ ಎಂದು ಕಾಣುವ ಒಂದು eigenvector ಇನ್ನೂ ಒಂದು ಗಣಿತೀಯ ತಪ್ಪು ಒಳಗೊಂಡಿರಬಹುದು -- ಗುಣಿಸಿ ಹೋಲಿಸುವುದೇ ಸರಿಯಾಗಿರುವಿಕೆಯ ವಾಸ್ತವ ಪರೀಕ್ಷೆ' } },

    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"5.8\">\n  <rect width=\"260\" height=\"230\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6.8\">The Big AI Picture</text>\n  <rect x=\"90\" y=\"20\" width=\"80\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"32\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.4\">MATRIX</text>\n  <path d=\"M50,46 L90,38 M130,46 V38 M210,46 L170,38\" stroke=\"#475569\" fill=\"none\"/>\n  <rect x=\"20\" y=\"48\" width=\"60\" height=\"16\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"59\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"4.6\">Rotation</text>\n  <rect x=\"100\" y=\"48\" width=\"60\" height=\"16\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"59\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"4.6\">Scaling</text>\n  <rect x=\"180\" y=\"48\" width=\"60\" height=\"16\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"210\" y=\"59\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"4.6\">Shearing</text>\n  <path d=\"M50,64 L130,74 M130,64 V74 M210,64 L130,74\" stroke=\"#475569\" fill=\"none\"/>\n  <rect x=\"75\" y=\"76\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"88\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.4\">Transformation</text>\n  <path d=\"M130,94 V102\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"104\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"116\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.4\">Representation</text>\n  <path d=\"M50,138 L100,122 M130,138 V122 M210,138 L160,122\" stroke=\"#475569\" fill=\"none\"/>\n  <rect x=\"20\" y=\"140\" width=\"60\" height=\"16\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"50\" y=\"151\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.2\">PCA</text>\n  <rect x=\"100\" y=\"140\" width=\"60\" height=\"16\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"151\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.2\">RNN</text>\n  <rect x=\"180\" y=\"140\" width=\"60\" height=\"16\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"210\" y=\"151\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5\">Vision</text>\n  <text x=\"50\" y=\"166\" text-anchor=\"middle\" font-size=\"4.6\" fill=\"#94a3b8\">Eigenvectors</text>\n  <text x=\"130\" y=\"166\" text-anchor=\"middle\" font-size=\"4.6\" fill=\"#94a3b8\">Eigenvalues</text>\n  <text x=\"210\" y=\"166\" text-anchor=\"middle\" font-size=\"4.6\" fill=\"#94a3b8\">Augmentation</text>\n</svg>",
      titleEn: 'From One Matrix to Three AI Applications', titleKn: 'ಒಂದು Matrix ಇಂದ ಮೂರು AI Applications ಗೆ',
      captionEn: 'Rotation, scaling, and shearing combine into a transformation of a representation, and that representation feeds directly into PCA, RNNs, and vision pipelines.',
      captionKn: 'Rotation, scaling, ಮತ್ತು shearing ಒಂದು representation ನ ಒಂದು transformation ಆಗಿ ಸಂಯೋಜಿಸುತ್ತವೆ, ಮತ್ತು ಆ representation PCA, RNNs, ಮತ್ತು vision pipelines ಗೆ ನೇರವಾಗಿ ಆಹಾರ ನೀಡುತ್ತದೆ.' } },

    { type: 'example', data: {
      tag: 'AI Example: PCA Pipeline',
      textEn: '• Data -> Covariance matrix -> Eigenvectors -> Principal directions -> Dimensionality reduction',
      textKn: '• Data -> Covariance matrix -> Eigenvectors -> Principal directions -> Dimensionality reduction',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: RNN',
      textEn: '• Hidden state -> Repeated W transformations -> Eigenvalues determine growth/decay -> Vanishing/exploding behavior',
      textKn: '• Hidden state -> Repeated W transformations -> Eigenvalues determine growth/decay -> Vanishing/exploding behavior',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Computer Vision',
      textEn: '• Image -> Rotation/Scaling/Reflection -> Augmented image -> CNN',
      textKn: '• Image -> Rotation/Scaling/Reflection -> Augmented image -> CNN',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Graph AI',
      textEn: '• Graph -> Graph Laplacian -> Eigenvectors -> Spectral structure -> Clusters',
      textKn: '• Graph -> Graph Laplacian -> Eigenvectors -> Spectral structure -> Clusters',
      table: '' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Eigenvectors exist as a concept because most transformations do NOT have a single, simple description across all directions -- but they always have a small set of directions where the description collapses to just "stretch by this much," and that simplification is what PCA, RNN stability analysis, and spectral clustering all exploit\n• PCA works because a covariance matrix\'s eigenvectors happen to be exactly the directions of maximum and minimum variance, so ranking eigenvalues directly ranks which directions matter most for retaining information\n• RNN stability reduces to eigenvalues because Wn h0 is dominated, after enough repetitions, by the eigenvalue of largest magnitude -- this is why architectures like LSTMs and GRUs were specifically designed to control this repeated-multiplication behavior\n• Genuinely checking A@v=lambda*v by direct multiplication, rather than trusting the algebra, matters for the same reason genuinely running the Vector/Matrix classes mattered in Modules 14-15: a derivation with a sign error still looks plausible until it is actually tested against its own defining equation',
      bodyKn: '• Eigenvectors ಒಂದು ಕಲ್ಪನೆಯಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ ಏಕೆಂದರೆ ಹೆಚ್ಚಿನ transformations ಗಳಿಗೆ ಎಲ್ಲಾ directions ಆದ್ಯಂತ ಒಂದು ಒಂಟಿ, ಸರಳ ವಿವರಣೆ ಇಲ್ಲ -- ಆದರೆ ಅವು ಯಾವಾಗಲೂ ವಿವರಣೆ ಕೇವಲ "ಇಷ್ಟು ಎಳೆಯಿರಿ" ಗೆ ಕುಸಿಯುವ directions ನ ಒಂದು ಚಿಕ್ಕ ಸೆಟ್ ಹೊಂದಿವೆ, ಮತ್ತು ಆ ಸರಳೀಕರಣ PCA, RNN stability analysis, ಮತ್ತು spectral clustering ಎಲ್ಲಾ ಬಳಸಿಕೊಳ್ಳುವುದೂ\n• PCA ಕೆಲಸ ಮಾಡುತ್ತದೆ ಏಕೆಂದರೆ ಒಂದು covariance matrix ನ eigenvectors ಆಕಸ್ಮಿಕವಾಗಿ ಗರಿಷ್ಠ ಮತ್ತು ಕನಿಷ್ಠ variance ನ ನಿಖರ directions ಆಗಿವೆ, ಆದ್ದರಿಂದ eigenvalues ಶ್ರೇಣೀಕರಿಸುವುದೂ ಯಾವ directions ಮಾಹಿತಿ ಉಳಿಸಿಕೊಳ್ಳಲು ಹೆಚ್ಚು ಮುಖ್ಯ ಎಂದು ನೇರವಾಗಿ ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ\n• RNN stability eigenvalues ಗೆ ಕುಸಿಯುತ್ತದೆ ಏಕೆಂದರೆ Wn h0 ಸಾಕಷ್ಟು ಪುನರಾವರ್ತನೆಗಳ ನಂತರ, ಅತಿ ದೊಡ್ಡ magnitude ನ eigenvalue ಇಂದ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸಲ್ಪಟ್ಟಿದೆ -- ಇದೇ LSTMs ಮತ್ತು GRUs ನಂತಹ architectures ಗಳನ್ನೂ ಈ ಪುನರಾವರ್ತಿತ-multiplication ವರ್ತನೆ ನಿಯಂತ್ರಿಸಲು ನಿರ್ದಿಷ್ಟವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಕಾರಣ\n• ಬೀಜಗಣಿತ ನಂಬುವ ಬದಲಿಗೆ, ನೇರ multiplication ಮೂಲಕ A@v=lambda*v ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ Modules 14-15 ನಲ್ಲಿ Vector/Matrix classes ಗಳನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಮುಖ್ಯವಾದ ಅದೇ ಕಾರಣಕ್ಕೆ ಮುಖ್ಯ: ಒಂದು sign error ಇರುವ ಒಂದು derivation ಇದರ ಸ್ವಂತ ವ್ಯಾಖ್ಯಾನಿಸುವ ಸಮೀಕರಣ ವಿರುದ್ಧ ವಾಸ್ತವವಾಗಿ ಪರೀಕ್ಷಿಸುವವರೆಗೆ ಇನ್ನೂ ಸಾಧ್ಯ ಎಂದು ಕಾಣುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• The most important formula in this lesson: A v = lambda v -- when matrix A acts on eigenvector v, it only scales that vector by lambda\n• Eigenvector = special direction; eigenvalue = amount of stretching or compression\n• For A = [[2,1],[1,2]], genuinely verified: eigenvalues are 3 and 1, with eigenvectors [1,1] and [1,-1] respectively -- confirmed by direct multiplication, not just algebra\n• PCA: eigenvectors give important directions, eigenvalues give the variance in those directions\n• RNN stability: eigenvalues control repeated growth or decay through W^n\n• Spectral methods: eigenvectors reveal structure in graphs\n• determinant = 0 means the transformation is not invertible -- information has been permanently lost',
      bodyKn: '• ಈ lesson ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ formula: A v = lambda v -- matrix A eigenvector v ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸಿದಾಗ, ಇದೂ ಆ vector ಅನ್ನೂ ಕೇವಲ lambda ಇಂದ scale ಮಾಡುತ್ತದೆ\n• Eigenvector = ವಿಶೇಷ direction; eigenvalue = ಎಳೆಯುವ ಅಥವಾ ಕುಗ್ಗಿಸುವ ಪ್ರಮಾಣ\n• A = [[2,1],[1,2]] ಗೆ, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: eigenvalues 3 ಮತ್ತು 1, ಕ್ರಮವಾಗಿ eigenvectors [1,1] ಮತ್ತು [1,-1] ಜೊತೆ -- ನೇರ multiplication ಇಂದ ದೃಢಪಡಿಸಲಾಗಿದೆ, ಕೇವಲ ಬೀಜಗಣಿತ ಅಲ್ಲ\n• PCA: eigenvectors ಮುಖ್ಯ directions ನೀಡುತ್ತವೆ, eigenvalues ಆ directions ನಲ್ಲಿ variance ನೀಡುತ್ತವೆ\n• RNN stability: eigenvalues W^n ಮೂಲಕ ಪುನರಾವರ್ತಿತ growth ಅಥವಾ decay ನಿಯಂತ್ರಿಸುತ್ತವೆ\n• Spectral methods: eigenvectors graphs ಗಳಲ್ಲಿ ರಚನೆ ಬಹಿರಂಗಪಡಿಸುತ್ತವೆ\n• determinant = 0 ಎಂದರೆ transformation invertible ಅಲ್ಲ -- ಮಾಹಿತಿ ಶಾಶ್ವತವಾಗಿ ಕಳೆದುಹೋಗಿದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'For A = [[2,1],[1,2]], what did genuinely solving the characteristic equation produce?', qKn: 'A = [[2,1],[1,2]] ಗೆ, characteristic equation ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಹರಿಸುವುದೂ ಏನೂ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['Eigenvalues 2 and 1', 'Eigenvalues 3 and 1', 'Eigenvalues 4 and 0', 'No real eigenvalues exist'], correct: 1,
        optsKn: ['Eigenvalues 2 ಮತ್ತು 1', 'Eigenvalues 3 ಮತ್ತು 1', 'Eigenvalues 4 ಮತ್ತು 0', 'ಯಾವುದೇ ನಿಜ eigenvalues ಇಲ್ಲ'] },
      { q: 'How was the eigenvector [1,1] for eigenvalue 3 genuinely verified, rather than just algebraically derived?', qKn: 'Eigenvalue 3 ಗೆ eigenvector [1,1] ಅನ್ನೂ ಕೇವಲ ಬೀಜಗಣಿತೀಯವಾಗಿ derive ಮಾಡುವ ಬದಲಿಗೆ ಹೇಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಯಿತು?',
        opts: ['It was assumed to be correct without checking', 'By directly computing A @ [1,1] and confirming it equals exactly 3 * [1,1]', 'By running it through NumPy only', 'By checking that the determinant was zero'], correct: 1,
        optsKn: ['ಇದನ್ನೂ ಪರಿಶೀಲಿಸದೆ ಸರಿಯಾಗಿದೆ ಎಂದು ಊಹಿಸಲಾಯಿತು', 'A @ [1,1] ಅನ್ನೂ ನೇರವಾಗಿ ಗಣಿಸಿ ಮತ್ತು ಇದೂ ನಿಖರವಾಗಿ 3 * [1,1] ಗೆ ಸಮಾನ ಎಂದು ದೃಢಪಡಿಸಿ', 'ಇದನ್ನೂ ಕೇವಲ NumPy ಮೂಲಕ ಚಲಾಯಿಸಿ', 'Determinant ಶೂನ್ಯ ಎಂದು ಪರಿಶೀಲಿಸಿ'] },
      { q: 'Why do eigenvalues with |lambda| > 1 relate to exploding activations in an RNN?', qKn: '|lambda| > 1 ಇರುವ eigenvalues ಗಳು ಒಂದು RNN ನಲ್ಲಿ exploding activations ಗೆ ಏಕೆ ಸಂಬಂಧಿಸಿವೆ?',
        opts: ['They have no connection to RNN behavior', 'Repeatedly multiplying by W means hn = W^n h0, and an eigenvalue magnitude above 1 causes values to grow rapidly with each repetition', 'They only affect the bias term, not the hidden state', 'Exploding activations are caused by the activation function alone'], correct: 1,
        optsKn: ['ಅವು RNN ವರ್ತನೆಗೆ ಯಾವುದೇ ಸಂಪರ್ಕ ಹೊಂದಿಲ್ಲ', 'W ಇಂದ ಪದೇ ಪದೇ ಗುಣಿಸುವುದೂ ಎಂದರೆ hn = W^n h0, ಮತ್ತು 1 ಗಿಂತ ಹೆಚ್ಚಿನ ಒಂದು eigenvalue magnitude ಪ್ರತಿ ಪುನರಾವರ್ತನೆಯೊಂದಿಗೆ ಮೌಲ್ಯಗಳು ವೇಗವಾಗಿ ಬೆಳೆಯಲು ಕಾರಣವಾಗುತ್ತದೆ', 'ಅವು ಕೇವಲ bias term ಮೇಲೆ ಮಾತ್ರ ಪರಿಣಾಮ ಬೀರುತ್ತವೆ, hidden state ಅಲ್ಲ', 'Exploding activations ಕೇವಲ activation function ಇಂದ ಮಾತ್ರ ಉಂಟಾಗುತ್ತವೆ'] },
      { q: 'In PCA, what do the eigenvectors and eigenvalues of the covariance matrix represent, respectively?', qKn: 'PCA ನಲ್ಲಿ, covariance matrix ನ eigenvectors ಮತ್ತು eigenvalues ಕ್ರಮವಾಗಿ ಏನನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ?',
        opts: ['Both represent the same thing', 'Eigenvectors give the principal directions; eigenvalues give the amount of variance along those directions', 'Eigenvectors give the mean of the data; eigenvalues give the standard deviation', 'Neither is related to variance'], correct: 1,
        optsKn: ['ಎರಡೂ ಅದೇ ವಿಷಯ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ', 'Eigenvectors ಮುಖ್ಯ directions ನೀಡುತ್ತವೆ; eigenvalues ಆ directions ಉದ್ದಕ್ಕೂ variance ಪ್ರಮಾಣ ನೀಡುತ್ತವೆ', 'Eigenvectors ಡೇಟಾ ನ mean ನೀಡುತ್ತವೆ; eigenvalues standard deviation ನೀಡುತ್ತವೆ', 'ಯಾವುದೂ variance ಗೆ ಸಂಬಂಧಿಸಿಲ್ಲ'] },
      { q: 'What does det(A) = 0 tell you about a transformation?', qKn: 'det(A) = 0 ಒಂದು transformation ಬಗ್ಗೆ ಏನೂ ತಿಳಿಸುತ್ತದೆ?',
        opts: ['The transformation preserves all information and is easily reversible', 'The transformation is not invertible -- it has collapsed space into a lower dimension and information has been lost', 'The transformation only works on square matrices', 'The transformation rotates space without scaling'], correct: 1,
        optsKn: ['Transformation ಎಲ್ಲಾ ಮಾಹಿತಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ ಮತ್ತು ಸುಲಭವಾಗಿ ಹಿಮ್ಮುಖಗೊಳಿಸಬಹುದಾಗಿದೆ', 'Transformation invertible ಅಲ್ಲ -- ಇದೂ space ಅನ್ನೂ ಒಂದು ಕಡಿಮೆ dimension ಗೆ ಕುಸಿಸಿದೆ ಮತ್ತು ಮಾಹಿತಿ ಕಳೆದುಹೋಗಿದೆ', 'Transformation ಕೇವಲ square matrices ಮೇಲೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'Transformation scaling ಇಲ್ಲದೆ space ತಿರುಗಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
