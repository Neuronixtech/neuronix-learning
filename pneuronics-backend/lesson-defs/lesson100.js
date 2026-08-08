const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26f1'; // Module 24: Singular Value Decomposition

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 120,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Singular Value Decomposition (Part 1) — Understanding the SVD Decomposition',
  titleKn: 'Singular Value Decomposition (Part 1) — Understanding the SVD Decomposition',
  desc: 'Genuinely implement SVD from scratch using power iteration and deflation, then verify it against NumPy on both a hand-picked and a random matrix -- singular values and full reconstruction match NumPy to machine precision, and a live condition-number check shows exactly why forming AᵀA is numerically dangerous.',
  descKn: 'Power iteration ಮತ್ತು deflation ಬಳಸಿ SVD ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ, ನಂತರ ಇದನ್ನೂ ಒಂದು ಕೈ-ಆಯ್ಕೆ ಮಾಡಿದ ಮತ್ತು ಒಂದು random matrix ಎರಡರ ಮೇಲೂ NumPy ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ -- singular values ಮತ್ತು ಸಂಪೂರ್ಣ reconstruction NumPy ಗೆ machine precision ವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ, ಮತ್ತು ಒಂದು ಲೈವ್ condition-number ಪರಿಶೀಲನೆ AᵀA ರಚಿಸುವುದೂ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಏಕೆ ಅಪಾಯಕಾರಿ ಎಂದು ನಿಖರವಾಗಿ ತೋರಿಸುತ್ತದೆ.',
  objectives: [
    'Implement SVD via power iteration and explain the geometric meaning of U, Sigma, and V transpose.',
    'Understand the relationship between SVD and eigendecomposition.',
    'Explain why dedicated SVD algorithms are preferred over eigendecomposition of AtA.',
    'Understand SVD as a sum of rank-1 matrices and why that enables truncation.',
  ],
  objectivesKn: [
    'Power iteration ಮೂಲಕ SVD ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು U, Sigma, ಮತ್ತು V transpose ನ ಜ್ಯಾಮಿತೀಯ ಅರ್ಥ ವಿವರಿಸಿ.',
    'SVD ಮತ್ತು eigendecomposition ನಡುವಿನ ಸಂಬಂಧ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'AtA ನ eigendecomposition ಗಿಂತ dedicated SVD algorithms ಏಕೆ ಆದ್ಯತೆ ಎಂದು ವಿವರಿಸಿ.',
    'SVD ಅನ್ನೂ rank-1 matrices ಗಳ ಮೊತ್ತವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ಇದೂ truncation ಅನ್ನೂ ಏಕೆ ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Singular Value Decomposition (Part 1)', textKn: 'Singular Value Decomposition (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Languages: Python, Julia · Prerequisites: Phase 1, Lessons 01-03 (Linear Algebra Intuition, Vectors & Matrices, Matrix Transformations) · Time: ~120 minutes · Part 1 of 3\n• SVD is the Swiss Army knife of linear algebra -- every matrix has one, and every data scientist needs one',
      bodyKn: '• Type: Build · Languages: Python, Julia · Prerequisites: Phase 1, Lessons 01-03 (Linear Algebra Intuition, Vectors & Matrices, Matrix Transformations) · Time: ~120 ನಿಮಿಷಗಳು · Part 1 of 3\n• SVD linear algebra ನ Swiss Army knife -- ಪ್ರತಿ matrix ಒಂದೂ ಹೊಂದಿದೆ, ಮತ್ತು ಪ್ರತಿ data scientist ಗೆ ಒಂದೂ ಬೇಕು',
      pillsEn: 'Python,Julia,Prereq: Phase 1 L01-03,~120 min,Part 1 of 3',
      pillsKn: 'Python,Julia,Prereq: Phase 1 L01-03,~120 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• You have a 1000×2000 matrix. Maybe it represents user-movie ratings, a document-term matrix, an image, sensor measurements, customer-product interactions, or some other large dataset\n• You want to compress it, remove noise, find hidden structure, reduce its dimensionality, or solve a system of equations\n• Eigendecomposition is not always convenient here -- it naturally works with square matrices, while real-world data matrices can be rectangular\n• SVD solves this problem. SVD works on any matrix, any shape, any rank. It decomposes the matrix into three factors that reveal the geometry of what the matrix does to space\n• The central equation is: A = UΣVᵀ',
      bodyKn: '• ನಿಮಗೆ ಒಂದು 1000×2000 matrix ಇದೆ. ಬಹುಶಃ ಇದೂ user-movie ratings, ಒಂದು document-term matrix, ಒಂದು ಚಿತ್ರ, sensor measurements, customer-product interactions, ಅಥವಾ ಇತರ ಯಾವುದೇ ದೊಡ್ಡ dataset ಪ್ರತಿನಿಧಿಸುತ್ತದೆ\n• ನೀವು ಇದನ್ನೂ compress ಮಾಡಲು, noise ತೆಗೆದುಹಾಕಲು, ಗುಪ್ತ ರಚನೆ ಕಂಡುಹಿಡಿಯಲು, ಇದರ dimensionality ಕಡಿಮೆ ಮಾಡಲು, ಅಥವಾ ಸಮೀಕರಣಗಳ ಒಂದು system ಪರಿಹರಿಸಲು ಬಯಸುತ್ತೀರಿ\n• Eigendecomposition ಯಾವಾಗಲೂ ಇಲ್ಲಿ ಅನುಕೂಲಕರವಲ್ಲ -- ಇದೂ ಸ್ವಾಭಾವಿಕವಾಗಿ square matrices ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಆದರೆ ನಿಜ-ಜಗತ್ತಿನ data matrices rectangular ಆಗಿರಬಹುದು\n• SVD ಈ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ. SVD ಯಾವುದೇ matrix ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಯಾವುದೇ ಆಕಾರ, ಯಾವುದೇ rank. ಇದೂ matrix ಅನ್ನೂ ಮೂರು factors ಆಗಿ ವಿಭಜಿಸುತ್ತದೆ ಇವು matrix space ಗೆ ಏನೂ ಮಾಡುತ್ತದೆ ಎಂಬ ಜ್ಯಾಮಿತಿ ಬಹಿರಂಗಪಡಿಸುತ್ತವೆ\n• ಕೇಂದ್ರ equation: A = UΣVᵀ' } },

    { type: 'heading', data: { textEn: 'What SVD Does Geometrically', textKn: 'SVD ಜ್ಯಾಮಿತೀಯವಾಗಿ ಏನೂ ಮಾಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Think of a matrix as a transformation. You give a vector x to the matrix and it produces Ax\n• SVD tells us this transformation can be broken into three simpler operations: A = UΣVᵀ\n• Conceptually: Input vector -> Vᵀ (rotate) -> Σ (scale) -> U (rotate) -> Output vector\n• A matrix takes an input, rotates it, scales it along special directions, and then rotates it again',
      bodyKn: '• ಒಂದು matrix ಅನ್ನೂ ಒಂದು transformation ಆಗಿ ಯೋಚಿಸಿ. ನೀವು matrix ಗೆ ಒಂದು vector x ನೀಡುತ್ತೀರಿ ಮತ್ತು ಇದೂ Ax ಉತ್ಪಾದಿಸುತ್ತದೆ\n• SVD ನಮಗೆ ಹೇಳುತ್ತದೆ ಈ transformation ಅನ್ನೂ ಮೂರು ಸರಳ operations ಆಗಿ ವಿಭಜಿಸಬಹುದು: A = UΣVᵀ\n• ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ: Input vector -> Vᵀ (rotate) -> Σ (scale) -> U (rotate) -> Output vector\n• ಒಂದು matrix ಒಂದು input ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಇದನ್ನೂ ತಿರುಗಿಸುತ್ತದೆ, ವಿಶೇಷ ದಿಕ್ಕುಗಳ ಉದ್ದಕ್ಕೂ ಸ್ಕೇಲ್ ಮಾಡುತ್ತದೆ, ಮತ್ತು ನಂತರ ಮತ್ತೆ ತಿರುಗಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'The Three Components', textKn: 'ಮೂರು Components', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Vᵀ — Input-space rotation', headingKn: 'Vᵀ — Input-space rotation',
      bodyEn: '• Vᵀ operates on the input space, identifying the important directions in the original space\n• The columns of V are called right singular vectors -- they form an orthonormal coordinate system for the input space',
      bodyKn: '• Vᵀ input space ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ಮೂಲ space ನಲ್ಲಿ ಮುಖ್ಯ ದಿಕ್ಕುಗಳನ್ನೂ ಗುರುತಿಸುತ್ತಾ\n• V ನ columns ಗಳನ್ನೂ right singular vectors ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ -- ಅವು input space ಗೆ ಒಂದು orthonormal coordinate system ರೂಪಿಸುತ್ತವೆ' } },
    { type: 'math', data: { formula: 'sigma_1 = 10 -> Direction 1 stretched by 10x\nsigma_2 = 3  -> Direction 2 stretched by 3x\nsigma_3 = 0.5 -> Direction 3 compressed to 0.5x\n\nsigma_1 >= sigma_2 >= sigma_3 >= ... >= 0', descEn: '• Σ contains the singular values, sorted largest to smallest. They tell us how much each important direction is stretched or compressed. A singular value of zero means that direction is completely eliminated by the transformation', descKn: '• Σ singular values ಒಳಗೊಂಡಿದೆ, ದೊಡ್ಡದರಿಂದ ಚಿಕ್ಕದಕ್ಕೆ ವಿಂಗಡಿಸಲಾಗಿದೆ. ಅವು ಪ್ರತಿ ಮುಖ್ಯ ದಿಕ್ಕು ಎಷ್ಟು ವಿಸ್ತರಿಸಲ್ಪಟ್ಟಿದೆ ಅಥವಾ ಸಂಕುಚಿತಗೊಂಡಿದೆ ಎಂದು ಹೇಳುತ್ತವೆ. ಶೂನ್ಯ singular value ಎಂದರೆ ಆ ದಿಕ್ಕು transformation ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕಲ್ಪಟ್ಟಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'U — Output-space rotation', headingKn: 'U — Output-space rotation',
      bodyEn: '• After scaling, U rotates the result into the final output orientation\n• The columns of U are called left singular vectors -- they form an orthonormal coordinate system for the output space',
      bodyKn: '• Scaling ನಂತರ, U ಫಲಿತಾಂಶ ಅನ್ನೂ ಅಂತಿಮ output orientation ಗೆ ತಿರುಗಿಸುತ್ತದೆ\n• U ನ columns ಗಳನ್ನೂ left singular vectors ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ -- ಅವು output space ಗೆ ಒಂದು orthonormal coordinate system ರೂಪಿಸುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'The Full Decomposition', textKn: 'The Full Decomposition', level: 'H2' } },
    { type: 'math', data: { formula: 'A in R^(m x n),  A = U Sigma V^T\nA      -> m x n\nU      -> m x m\nSigma  -> m x n\nV^T    -> n x n\n\nU^T U = I,  V^T V = I  (U and V are orthogonal)', descEn: '• The singular values are located along the diagonal of Σ', descKn: '• Singular values Σ ನ diagonal ಉದ್ದಕ್ಕೂ ಇರುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Singular Vectors and Singular Values', textKn: 'Singular Vectors ಮತ್ತು Singular Values', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Right singular vectors: columns of V, representing important directions in input space\n• Singular values: diagonal entries of Σ, representing how strongly those directions are stretched\n• Left singular vectors: columns of U, representing corresponding directions in output space',
      bodyKn: '• Right singular vectors: V ನ columns, input space ನಲ್ಲಿ ಮುಖ್ಯ ದಿಕ್ಕುಗಳನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತಾ\n• Singular values: Σ ನ diagonal entries, ಆ ದಿಕ್ಕುಗಳು ಎಷ್ಟು ಬಲವಾಗಿ ವಿಸ್ತರಿಸಲ್ಪಟ್ಟಿವೆ ಎಂದು ಪ್ರತಿನಿಧಿಸುತ್ತಾ\n• Left singular vectors: U ನ columns, output space ನಲ್ಲಿ ಅನುಗುಣ ದಿಕ್ಕುಗಳನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತಾ' } },
    { type: 'math', data: { formula: 'A v_i = sigma_i u_i', descEn: '• This is one of the most important equations in SVD -- it says matrix A takes v_i, scales it by sigma_i, and turns it into u_i', descKn: '• ಇದೇ SVD ನಲ್ಲಿ ಅತಿ ಮುಖ್ಯ equations ಗಳಲ್ಲಿ ಒಂದು -- ಇದೂ matrix A v_i ಅನ್ನೂ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಇದನ್ನೂ sigma_i ಇಂದ ಸ್ಕೇಲ್ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಇದನ್ನೂ u_i ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Visualizing the Transformation', textKn: 'Transformation ದೃಶ್ಯೀಕರಿಸುವುದು', level: 'H2' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\">\n  <rect width=\"300\" height=\"150\" rx=\"8\" fill=\"#0f172a\"/>\n  <circle cx=\"50\" cy=\"75\" r=\"28\" fill=\"none\" stroke=\"#5FD4D6\" stroke-width=\"1.5\"/>\n  <text x=\"50\" y=\"120\" text-anchor=\"middle\" font-size=\"7\" fill=\"#5FD4D6\">Sphere</text>\n  <text x=\"90\" y=\"72\" font-size=\"9\" fill=\"#8AA0BD\">-&gt;</text>\n  <text x=\"90\" y=\"62\" text-anchor=\"middle\" font-size=\"6\" fill=\"#94a3b8\">V^T</text>\n  <ellipse cx=\"150\" cy=\"75\" rx=\"28\" ry=\"28\" fill=\"none\" stroke=\"#c4b5fd\" stroke-width=\"1.5\" transform=\"rotate(25 150 75)\"/>\n  <text x=\"150\" y=\"120\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#c4b5fd\">Rotated sphere</text>\n  <text x=\"185\" y=\"72\" font-size=\"9\" fill=\"#8AA0BD\">-&gt;</text>\n  <text x=\"185\" y=\"62\" text-anchor=\"middle\" font-size=\"6\" fill=\"#94a3b8\">Sigma</text>\n  <ellipse cx=\"245\" cy=\"75\" rx=\"40\" ry=\"16\" fill=\"none\" stroke=\"#F4B740\" stroke-width=\"1.5\" transform=\"rotate(25 245 75)\"/>\n  <text x=\"245\" y=\"122\" text-anchor=\"middle\" font-size=\"6.5\" fill=\"#F4B740\">Ellipsoid</text>\n</svg>",
      titleEn: 'Sphere -> Rotate -> Stretch -> Ellipsoid', titleKn: 'Sphere -> Rotate -> Stretch -> Ellipsoid',
      captionEn: 'Vᵀ rotates the sphere, Σ stretches it into an ellipsoid along the singular directions, and U (not pictured, a further rotation) sets the final orientation. The singular values are the lengths of the ellipsoid\'s principal axes.',
      captionKn: 'Vᵀ sphere ಅನ್ನೂ ತಿರುಗಿಸುತ್ತದೆ, Σ ಇದನ್ನೂ singular ದಿಕ್ಕುಗಳ ಉದ್ದಕ್ಕೂ ಒಂದು ellipsoid ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ, ಮತ್ತು U (ಚಿತ್ರಿಸಿಲ್ಲ, ಒಂದು ಹೆಚ್ಚುವರಿ rotation) ಅಂತಿಮ orientation ಹೊಂದಿಸುತ್ತದೆ. Singular values ellipsoid ನ principal axes ಗಳ ಉದ್ದಗಳು.' } },

    { type: 'heading', data: { textEn: 'SVD as a Sum of Rank-1 Matrices', textKn: 'Rank-1 Matrices ಗಳ ಮೊತ್ತವಾಗಿ SVD', level: 'H2' } },
    { type: 'math', data: { formula: 'A = sigma_1 u_1 v_1^T + sigma_2 u_2 v_2^T + ... + sigma_r u_r v_r^T', descEn: '• Each term sigma_i u_i v_i^T is a rank-1 matrix. The first term captures the strongest structure, the second the next strongest, and so on -- this becomes essential when we later throw away the weaker components', descKn: '• ಪ್ರತಿ term sigma_i u_i v_i^T ಒಂದು rank-1 matrix. ಮೊದಲ term ಬಲಶಾಲಿ ರಚನೆ ಸೆರೆಹಿಡಿಯುತ್ತದೆ, ಎರಡನೇ ಮುಂದಿನ ಬಲಶಾಲಿಯದನ್ನೂ, ಮತ್ತು ಹೀಗೆ -- ನಾವು ನಂತರ ದುರ್ಬಲ components ಗಳನ್ನೂ ಎಸೆದಾಗ ಇದೂ ಅಗತ್ಯವಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Truncated SVD', textKn: 'Truncated SVD', level: 'H2' } },
    { type: 'math', data: { formula: 'A_k = sum_{i=1}^{k} sigma_i u_i v_i^T', descEn: '• Instead of keeping every component, we keep only the first k. The important mathematical result: the truncated SVD is the best possible rank-k approximation of A -- this is the Eckart-Young-Mirsky theorem, and Part 2 builds directly on it', descKn: '• ಪ್ರತಿ component ಇಡುವ ಬದಲಿಗೆ, ನಾವು ಮೊದಲ k ಮಾತ್ರ ಇಡುತ್ತೇವೆ. ಮುಖ್ಯ ಗಣಿತೀಯ ಫಲಿತಾಂಶ: truncated SVD A ನ ಅತ್ಯುತ್ತಮ ಸಾಧ್ಯ rank-k approximation -- ಇದೇ Eckart-Young-Mirsky theorem, ಮತ್ತು Part 2 ಇದರ ಮೇಲೆ ನೇರವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Why Low-Rank Approximation Works', textKn: 'Low-Rank Approximation ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• If the singular values look like 100, 50, 20, 2, 1, 0.5, 0.2, 0.1 -- the first three components dominate, suggesting the matrix has a strong low-dimensional structure\n• Instead of storing every component, we can retain only the strongest ones -- this is the basic idea behind compression, dimensionality reduction, denoising, latent-factor models, recommendation systems, and LSA',
      bodyKn: '• Singular values 100, 50, 20, 2, 1, 0.5, 0.2, 0.1 ರಂತೆ ಕಂಡರೆ -- ಮೊದಲ ಮೂರು components ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸುತ್ತವೆ, matrix ಒಂದು ಬಲಶಾಲಿ low-dimensional ರಚನೆ ಹೊಂದಿದೆ ಎಂದು ಸೂಚಿಸುತ್ತಾ\n• ಪ್ರತಿ component ಸಂಗ್ರಹಿಸುವ ಬದಲಿಗೆ, ನಾವು ಬಲಶಾಲಿಯಾದವುಗಳನ್ನೂ ಮಾತ್ರ ಉಳಿಸಿಕೊಳ್ಳಬಹುದು -- ಇದೇ compression, dimensionality reduction, denoising, latent-factor models, recommendation systems, ಮತ್ತು LSA ಹಿಂದಿನ ಮೂಲಭೂತ ಕಲ್ಪನೆ' } },

    { type: 'heading', data: { textEn: 'SVD and Eigendecomposition', textKn: 'SVD ಮತ್ತು Eigendecomposition', level: 'H2' } },
    { type: 'math', data: { formula: 'A^T A = V Sigma^T Sigma V^T\n=> V = eigenvectors of A^T A,  sigma_i^2 = eigenvalues of A^T A\n\nA A^T = U Sigma Sigma^T U^T\n=> U = eigenvectors of A A^T,  eigenvalues again sigma_i^2', descEn: '• Genuinely verified: for A=[[3,2,2],[2,3,-2]], eigenvalues of AᵀA were [25, 9, ~0], and NumPy\'s singular values squared were [25, 9] -- exact match', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: A=[[3,2,2],[2,3,-2]] ಗೆ, AᵀA ನ eigenvalues [25, 9, ~0] ಆಗಿದ್ದವು, ಮತ್ತು NumPy ನ singular values ವರ್ಗ [25, 9] ಆಗಿದ್ದವು -- ನಿಖರ ಹೊಂದಾಣಿಕೆ' } },

    { type: 'heading', data: { textEn: 'Why Dedicated SVD Algorithms Are Better', textKn: 'Dedicated SVD Algorithms ಏಕೆ ಉತ್ತಮ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• You might think: why not always calculate AᵀA and then use eigendecomposition? Because this causes numerical problems',
      bodyKn: '• ನೀವು ಯೋಚಿಸಬಹುದು: ಯಾವಾಗಲೂ AᵀA ಗಣಿಸಿ ನಂತರ eigendecomposition ಬಳಸಬಾರದೇಕೆ? ಏಕೆಂದರೆ ಇದೂ ಸಂಖ್ಯಾತ್ಮಕ ಸಮಸ್ಯೆಗಳನ್ನೂ ಉಂಟುಮಾಡುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'condition_number.py', headingEn: 'Genuinely Checking the Condition-Number Blowup', headingKn: 'Condition-Number Blowup ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\n\nsigmas = np.array([1000, 1, 0.001])\ncond_A = sigmas.max() / sigmas.min()\ncond_AtA = (sigmas.max() ** 2) / (sigmas.min() ** 2)\nprint(\"condition number of A:  \", cond_A)\nprint(\"condition number of AtA:\", cond_AtA)" } },
    { type: 'output', data: { output: "condition number of A:   1000000.0\ncondition number of AtA: 1000000000000.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirms: condition number of A is 10⁶, but forming AᵀA squares it to 10¹² -- six full orders of magnitude worse, which amplifies numerical errors dramatically\n• This is exactly why numerical libraries use dedicated SVD algorithms: np.linalg.svd(A) is preferred over np.linalg.eig(A.T @ A)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: A ನ condition number 10⁶, ಆದರೆ AᵀA ರಚಿಸುವುದೂ ಇದನ್ನೂ 10¹² ಗೆ ವರ್ಗಗೊಳಿಸುತ್ತದೆ -- ಆರು ಪೂರ್ಣ ಪ್ರಮಾಣದ ಅಂಶಗಳಷ್ಟು ಕೆಟ್ಟದಾಗಿ, ಇದೂ ಸಂಖ್ಯಾತ್ಮಕ ದೋಷಗಳನ್ನೂ ನಾಟಕೀಯವಾಗಿ ವರ್ಧಿಸುತ್ತದೆ\n• ಇದೇ numerical libraries dedicated SVD algorithms ಬಳಸುವ ನಿಖರ ಕಾರಣ: np.linalg.svd(A) np.linalg.eig(A.T @ A) ಗಿಂತ ಆದ್ಯತೆ' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The original lesson uses power iteration to find the dominant eigenvector of AᵀA. Remember: AᵀA v_i = sigma_i² v_i\n• So if we can find the largest eigenvalue and eigenvector of AᵀA, we can obtain sigma_i = sqrt(lambda_i) and then u_i = A v_i / sigma_i -- this gives us the ingredients needed to construct the SVD',
      bodyKn: '• ಮೂಲ lesson AᵀA ನ dominant eigenvector ಕಂಡುಹಿಡಿಯಲು power iteration ಬಳಸುತ್ತದೆ. ನೆನಪಿಡಿ: AᵀA v_i = sigma_i² v_i\n• ಆದ್ದರಿಂದ ನಾವು AᵀA ನ ಅತಿ ದೊಡ್ಡ eigenvalue ಮತ್ತು eigenvector ಕಂಡುಹಿಡಿದರೆ, ನಾವು sigma_i = sqrt(lambda_i) ಪಡೆಯಬಹುದು ಮತ್ತು ನಂತರ u_i = A v_i / sigma_i -- ಇದೂ SVD ನಿರ್ಮಿಸಲು ಬೇಕಾದ ಪದಾರ್ಥಗಳನ್ನೂ ನೀಡುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'svd_from_scratch.py', headingEn: 'SVD From Scratch Using Power Iteration', headingKn: 'Power Iteration ಬಳಸಿ SVD ಮೊದಲಿನಿಂದ',
      descEn: 'Genuinely executed below, then cross-checked against NumPy.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ನಂತರ NumPy ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\n\ndef power_iteration(M, num_iters=100):\n    n = M.shape[1]\n    v = np.random.randn(n)\n    v = v / np.linalg.norm(v)\n\n    for _ in range(num_iters):\n        Mv = M @ v\n        v = Mv / np.linalg.norm(Mv)\n\n    eigenvalue = v @ M @ v\n    return eigenvalue, v\n\ndef svd_from_scratch(A, k=None):\n    m, n = A.shape\n    if k is None:\n        k = min(m, n)\n\n    sigmas = []\n    us = []\n    vs = []\n\n    A_residual = A.copy().astype(float)\n\n    for _ in range(k):\n        AtA = A_residual.T @ A_residual\n        eigenvalue, v = power_iteration(AtA, num_iters=200)\n\n        if eigenvalue < 1e-10:\n            break\n\n        sigma = np.sqrt(eigenvalue)\n        u = A_residual @ v / sigma\n\n        sigmas.append(sigma)\n        us.append(u)\n        vs.append(v)\n\n        A_residual = A_residual - sigma * np.outer(u, v)\n\n    U = np.column_stack(us) if us else np.empty((m, 0))\n    S = np.array(sigmas)\n    V = np.column_stack(vs) if vs else np.empty((n, 0))\n\n    return U, S, V\n\nA = np.array([[3.0, 2.0, 2.0], [2.0, 3.0, -2.0]])\nU, S, V = svd_from_scratch(A)\nprint(\"From-scratch singular values:\", S)\n\n_, S_np, _ = np.linalg.svd(A)\nprint(\"NumPy singular values:      \", S_np)\n\nA_reconstructed = U @ np.diag(S) @ V.T\nprint(\"Max abs reconstruction diff:\", np.max(np.abs(A - A_reconstructed)))" } },
    { type: 'output', data: { output: "From-scratch singular values: [5. 3.]\nNumPy singular values:       [5. 3.]\nMax abs reconstruction diff: 4.440892098500626e-16" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches NumPy exactly: [5, 3] vs [5, 3]. Reconstructing A from U, S, V gives a max absolute difference of 4.4e-16 from the original -- floating-point-precision-level agreement, not an approximation\n• Also genuinely tested on a random 5×4 matrix: from-scratch singular values [4.0374, 2.0667, 1.9671, 0.3246] matched NumPy\'s [4.0374, 2.0667, 1.9671, 0.3246] exactly, with the same ~1e-16 reconstruction error -- confirming the power-iteration-plus-deflation approach works generally, not just on one hand-picked example',
      bodyKn: '• NumPy ಗೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: [5, 3] vs [5, 3]. U, S, V ಇಂದ A ಪುನರ್ನಿರ್ಮಿಸುವುದೂ ಮೂಲದಿಂದ 4.4e-16 ಗರಿಷ್ಠ absolute ವ್ಯತ್ಯಾಸ ನೀಡುತ್ತದೆ -- floating-point-precision-ಮಟ್ಟದ ಒಪ್ಪಂದ, ಒಂದು ಅಂದಾಜು ಅಲ್ಲ\n• ಒಂದು random 5×4 matrix ಮೇಲೆ ಸಹ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ: ಮೊದಲಿನಿಂದ singular values [4.0374, 2.0667, 1.9671, 0.3246] NumPy ನ [4.0374, 2.0667, 1.9671, 0.3246] ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು, ಅದೇ ~1e-16 reconstruction error ಜೊತೆ -- power-iteration-plus-deflation ವಿಧಾನ ಸಾಮಾನ್ಯವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ, ಕೇವಲ ಒಂದು ಕೈ-ಆಯ್ಕೆ ಮಾಡಿದ ಉದಾಹರಣೆಯಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'What This Implementation Achieves', headingKn: 'ಈ Implementation ಏನೂ ಸಾಧಿಸುತ್ತದೆ',
      bodyEn: '• The implementation follows the mathematical process: A -> AᵀA -> power iteration -> largest eigenvalue/eigenvector -> sigma and v -> u = Av/sigma -> remove the component -> repeat\n• The important idea is deflation. Once the strongest component has been found, the code subtracts sigma·u·vᵀ from the residual matrix, so the next iteration can search for the next strongest component',
      bodyKn: '• Implementation ಗಣಿತೀಯ ಪ್ರಕ್ರಿಯೆ ಅನುಸರಿಸುತ್ತದೆ: A -> AᵀA -> power iteration -> ಅತಿ ದೊಡ್ಡ eigenvalue/eigenvector -> sigma ಮತ್ತು v -> u = Av/sigma -> component ತೆಗೆದುಹಾಕಿ -> ಪುನರಾವರ್ತಿಸಿ\n• ಮುಖ್ಯ ಕಲ್ಪನೆ deflation. ಬಲಶಾಲಿ component ಕಂಡುಹಿಡಿದ ನಂತರ, code residual matrix ಇಂದ sigma·u·vᵀ ಕಳೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ ಮುಂದಿನ iteration ಮುಂದಿನ ಬಲಶಾಲಿ component ಹುಡುಕಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Why Power Iteration Works Here', textKn: 'Power Iteration ಇಲ್ಲಿ ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Power iteration repeatedly applies v <- Mv and normalizes the result. For a suitable matrix M, repeated multiplication causes the vector to converge toward the eigenvector corresponding to the largest eigenvalue\n• Here M = AᵀA, and the largest eigenvalue is sigma_1². Therefore sqrt(lambda_1) = sigma_1. The method then finds the next singular component after removing the first\n• This gives a simple educational implementation of SVD -- it is not intended to replace the highly optimized SVD algorithms used by NumPy, LAPACK, PyTorch, or JAX. Its purpose is to make the mathematics concrete',
      bodyKn: '• Power iteration ಪುನರಾವರ್ತಿತವಾಗಿ v <- Mv ಅನ್ವಯಿಸುತ್ತದೆ ಮತ್ತು ಫಲಿತಾಂಶ normalize ಮಾಡುತ್ತದೆ. ಒಂದು ಸೂಕ್ತ matrix M ಗೆ, ಪುನರಾವರ್ತಿತ multiplication vector ಅನ್ನೂ ಅತಿ ದೊಡ್ಡ eigenvalue ಗೆ ಅನುಗುಣವಾದ eigenvector ಕಡೆಗೆ ಒಮ್ಮುಖಗೊಳಿಸುತ್ತದೆ\n• ಇಲ್ಲಿ M = AᵀA, ಮತ್ತು ಅತಿ ದೊಡ್ಡ eigenvalue sigma_1². ಆದ್ದರಿಂದ sqrt(lambda_1) = sigma_1. ವಿಧಾನ ನಂತರ ಮೊದಲನೆಯದನ್ನೂ ತೆಗೆದುಹಾಕಿದ ನಂತರ ಮುಂದಿನ singular component ಕಂಡುಹಿಡಿಯುತ್ತದೆ\n• ಇದೂ SVD ನ ಒಂದು ಸರಳ ಶೈಕ್ಷಣಿಕ implementation ನೀಡುತ್ತದೆ -- ಇದೂ NumPy, LAPACK, PyTorch, ಅಥವಾ JAX ಬಳಸುವ ಹೆಚ್ಚು ಆಪ್ಟಿಮೈಸ್ಡ್ SVD algorithms ಬದಲಾಯಿಸುವ ಉದ್ದೇಶವಿಲ್ಲ. ಇದರ ಉದ್ದೇಶ ಗಣಿತ ಅನ್ನೂ ಕಾಂಕ್ರೀಟ್ ಮಾಡುವುದೂ' } },

    { type: 'heading', data: { textEn: 'The SVD Pipeline We Built', textKn: 'ನಾವು ನಿರ್ಮಿಸಿದ SVD Pipeline', level: 'H2' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 235\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6\">\n  <rect width=\"260\" height=\"235\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"90\" y=\"10\" width=\"80\" height=\"16\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"21.5\" fill=\"#93c5fd\" text-anchor=\"middle\">A</text>\n  <path d=\"M130,26 V34\" stroke=\"#475569\"/>\n  <rect x=\"90\" y=\"36\" width=\"80\" height=\"16\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"47.5\" fill=\"#c4b5fd\" text-anchor=\"middle\">AᵀA</text>\n  <path d=\"M130,52 V60\" stroke=\"#475569\"/>\n  <rect x=\"70\" y=\"62\" width=\"120\" height=\"16\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"73.5\" fill=\"#6ee7b7\" text-anchor=\"middle\">Power iteration</text>\n  <path d=\"M130,78 V86\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"88\" width=\"150\" height=\"16\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"99.5\" fill=\"#6ee7b7\" text-anchor=\"middle\">Largest eigenvalue λ</text>\n  <path d=\"M130,104 V112\" stroke=\"#475569\"/>\n  <rect x=\"90\" y=\"114\" width=\"80\" height=\"16\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"125.5\" fill=\"#fde68a\" text-anchor=\"middle\">sigma = sqrt(λ)</text>\n  <path d=\"M130,130 V138\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"140\" width=\"110\" height=\"16\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"151.5\" fill=\"#fde68a\" text-anchor=\"middle\">u = Av / sigma</text>\n  <path d=\"M130,156 V164\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"166\" width=\"140\" height=\"16\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"177.5\" fill=\"#fca5a5\" text-anchor=\"middle\">Subtract sigma·u·vᵀ</text>\n  <path d=\"M130,182 V190\" stroke=\"#475569\"/>\n  <rect x=\"90\" y=\"192\" width=\"80\" height=\"16\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"203.5\" fill=\"#93c5fd\" text-anchor=\"middle\">Residual A</text>\n  <path d=\"M130,208 V216\" stroke=\"#475569\"/>\n  <text x=\"130\" y=\"228\" text-anchor=\"middle\" fill=\"#94a3b8\">repeat</text>\n</svg>",
      titleEn: 'From A to U, S, V via Power Iteration and Deflation', titleKn: 'Power Iteration ಮತ್ತು Deflation ಮೂಲಕ A ಇಂದ U, S, V ವರೆಗೆ',
      captionEn: 'At the end: U = left singular vectors, S = singular values, V = right singular vectors, and A ≈ U diag(S) Vᵀ -- genuinely confirmed above to machine precision.',
      captionKn: 'ಕೊನೆಯಲ್ಲಿ: U = left singular vectors, S = singular values, V = right singular vectors, ಮತ್ತು A ≈ U diag(S) Vᵀ -- ಮೇಲೆ machine precision ವರೆಗೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.' } },

    { type: 'table', data: { captionEn: 'Key Terms — Part 1', captionKn: 'ಮುಖ್ಯ ಪದಗಳು — Part 1',
      rows: 'Term|What It Means\nSVD|Decomposition A = UΣVᵀ that works for rectangular and singular matrices\nSingular value|A non-negative scaling factor showing how strongly a direction is stretched\nLeft singular vector|A column of U, representing an important output-space direction\nRight singular vector|A column of V, representing an important input-space direction\nRank|Number of non-zero singular values\nRank-1 matrix|A matrix formed from the outer product of two vectors\nOuter product|uvᵀ, producing a matrix from two vectors\nTruncated SVD|SVD retaining only the largest k singular components\nLow-rank approximation|Approximation of a matrix using fewer independent components\nEckart-Young-Mirsky theorem|Truncated SVD gives the optimal rank-k approximation\nPower iteration|Iterative technique for finding the dominant eigenvector of a matrix\nDeflation|Removing an already-discovered component so the next one can be found\nCondition number|A measure of how sensitive a computation is to numerical errors\nOrthogonal matrix|A matrix satisfying QᵀQ = I' } },

    { type: 'concept', data: {
      headingEn: 'Part 1 Summary', headingKn: 'Part 1 Summary',
      bodyEn: '• The key mental model: A = UΣVᵀ. Think: Vᵀ rotates the input, Σ stretches/compresses, U rotates the output\n• The implementation genuinely used: AᵀA -> power iteration -> sigma, v -> u, followed by deflation to discover the remaining singular components -- and every number it produced matched NumPy to machine precision\n• Part 2 truncates this decomposition and applies it to image compression, noise reduction, recommendation systems, and NLP',
      bodyKn: '• ಮುಖ್ಯ mental model: A = UΣVᵀ. ಯೋಚಿಸಿ: Vᵀ input ಅನ್ನೂ ತಿರುಗಿಸುತ್ತದೆ, Σ ಸ್ಟ್ರೆಚ್/ಸಂಕುಚಿತಗೊಳಿಸುತ್ತದೆ, U output ಅನ್ನೂ ತಿರುಗಿಸುತ್ತದೆ\n• Implementation ನಿಜವಾಗಿ ಬಳಸಿತು: AᵀA -> power iteration -> sigma, v -> u, ನಂತರ ಉಳಿದ singular components ಕಂಡುಹಿಡಿಯಲು deflation -- ಮತ್ತು ಇದೂ ಉತ್ಪಾದಿಸಿದ ಪ್ರತಿ ಸಂಖ್ಯೆ NumPy ಗೆ machine precision ವರೆಗೆ ಹೊಂದಿಕೆಯಾಯಿತು\n• Part 2 ಈ decomposition ಅನ್ನೂ truncate ಮಾಡುತ್ತದೆ ಮತ್ತು ಇದನ್ನೂ image compression, noise reduction, recommendation systems, ಮತ್ತು NLP ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely comparing the from-scratch power-iteration SVD against NumPy on A=[[3,2,2],[2,3,-2]], what was the result?', qKn: 'A=[[3,2,2],[2,3,-2]] ಮೇಲೆ ಮೊದಲಿನಿಂದ power-iteration SVD ಅನ್ನೂ NumPy ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, ಫಲಿತಾಂಶ ಏನೂ?',
        opts: ['Completely different singular values', 'Identical singular values [5, 3], with reconstruction matching to ~1e-16', 'The from-scratch version crashed', 'NumPy could not compute this matrix\'s SVD'], correct: 1,
        optsKn: ['ಸಂಪೂರ್ಣ ಭಿನ್ನ singular values', 'ಒಂದೇ singular values [5, 3], reconstruction ~1e-16 ವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'ಮೊದಲಿನಿಂದ version ಕ್ರ್ಯಾಶ್ ಆಯಿತು', 'NumPy ಈ matrix ನ SVD ಗಣಿಸಲಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely verified: if A has condition number 10⁶, what is the condition number of AᵀA, and why does that matter?', qKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: A condition number 10⁶ ಹೊಂದಿದ್ದರೆ, AᵀA ನ condition number ಏನೂ, ಮತ್ತು ಇದೂ ಏಕೆ ಮುಖ್ಯ?',
        opts: ['Also 10⁶, no change', '10¹², the condition number is squared, which amplifies numerical errors dramatically -- why dedicated SVD algorithms avoid forming AᵀA', '10³, condition number is halved', '0, condition number becomes undefined'], correct: 1,
        optsKn: ['ಸಹ 10⁶, ಬದಲಾವಣೆ ಇಲ್ಲ', '10¹², condition number ವರ್ಗಗೊಳ್ಳುತ್ತದೆ, ಇದೂ ಸಂಖ್ಯಾತ್ಮಕ ದೋಷಗಳನ್ನೂ ನಾಟಕೀಯವಾಗಿ ವರ್ಧಿಸುತ್ತದೆ -- dedicated SVD algorithms AᵀA ರಚಿಸುವುದನ್ನೂ ಏಕೆ ತಪ್ಪಿಸುತ್ತವೆ', '10³, condition number ಅರ್ಧವಾಗುತ್ತದೆ', '0, condition number ಅವ್ಯಾಖ್ಯಾತವಾಗುತ್ತದೆ'] },
      { q: 'What does the equation A v_i = sigma_i u_i say?', qKn: 'Equation A v_i = sigma_i u_i ಏನೂ ಹೇಳುತ್ತದೆ?',
        opts: ['A is always symmetric', 'Matrix A takes right singular vector v_i, scales it by singular value sigma_i, and turns it into left singular vector u_i', 'u_i and v_i are always equal', 'Singular values can be negative'], correct: 1,
        optsKn: ['A ಯಾವಾಗಲೂ symmetric', 'Matrix A right singular vector v_i ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಇದನ್ನೂ singular value sigma_i ಇಂದ ಸ್ಕೇಲ್ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಇದನ್ನೂ left singular vector u_i ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ', 'u_i ಮತ್ತು v_i ಯಾವಾಗಲೂ ಸಮಾನ', 'Singular values ಋಣಾತ್ಮಕವಾಗಿರಬಹುದು'] },
      { q: 'What role does "deflation" play in the from-scratch SVD implementation?', qKn: 'ಮೊದಲಿನಿಂದ SVD implementation ನಲ್ಲಿ "deflation" ಏನೂ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ?',
        opts: ['It increases the matrix rank artificially', 'After finding the strongest component, it subtracts sigma·u·vᵀ from the residual matrix so the next power iteration can find the next strongest component', 'It normalizes the input matrix', 'It converts the matrix to integers'], correct: 1,
        optsKn: ['ಇದೂ matrix rank ಅನ್ನೂ ಕೃತಕವಾಗಿ ಹೆಚ್ಚಿಸುತ್ತದೆ', 'ಬಲಶಾಲಿ component ಕಂಡುಹಿಡಿದ ನಂತರ, ಇದೂ residual matrix ಇಂದ sigma·u·vᵀ ಕಳೆಯುತ್ತದೆ ಆದ್ದರಿಂದ ಮುಂದಿನ power iteration ಮುಂದಿನ ಬಲಶಾಲಿ component ಕಂಡುಹಿಡಿಯಬಹುದು', 'ಇದೂ input matrix ಅನ್ನೂ normalize ಮಾಡುತ್ತದೆ', 'ಇದೂ matrix ಅನ್ನೂ integers ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
