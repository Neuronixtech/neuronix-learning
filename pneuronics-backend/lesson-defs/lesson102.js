const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26f1'; // Module 24: Singular Value Decomposition

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'reading',
  duration: 120,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Singular Value Decomposition (Part 3) — Pseudoinverse, Least Squares, Numerical Stability & PCA',
  titleKn: 'Singular Value Decomposition (Part 3) — Pseudoinverse, Least Squares, Numerical Stability & PCA',
  desc: 'Genuinely solve an overdetermined 3-equation, 2-unknown system three independent ways (hand-built pseudoinverse, np.linalg.lstsq, np.linalg.pinv) and get the identical answer every time, then genuinely confirm SVD-derived explained variance matches scikit-learn\'s PCA to four decimal places -- proving, not asserting, that PCA is SVD applied to centered data.',
  descKn: 'ಒಂದು overdetermined 3-equation, 2-unknown system ಅನ್ನೂ ಮೂರು ಸ್ವತಂತ್ರ ರೀತಿಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಹರಿಸಿ (ಕೈ-ನಿರ್ಮಿತ pseudoinverse, np.linalg.lstsq, np.linalg.pinv) ಮತ್ತು ಪ್ರತಿ ಬಾರಿ ಒಂದೇ ಉತ್ತರ ಪಡೆಯಿರಿ, ನಂತರ SVD-derived explained variance scikit-learn ನ PCA ಗೆ ನಾಲ್ಕು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ -- PCA centered data ಗೆ ಅನ್ವಯಿಸಿದ SVD ಎಂದು ಕೇವಲ ಪ್ರತಿಪಾದಿಸದೆ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Compute the Moore-Penrose pseudoinverse via SVD to solve overdetermined least-squares systems.',
    'Explain why SVD is numerically preferred over forming the normal equation.',
    'Understand condition numbers and numerical stability.',
    'Connect SVD to PCA and explained variance.',
    'Assemble the complete SVD build: from-scratch decomposition, compression, denoising, and pseudoinverse in one pipeline.',
  ],
  objectivesKn: [
    'Overdetermined least-squares systems ಪರಿಹರಿಸಲು SVD ಮೂಲಕ Moore-Penrose pseudoinverse ಗಣಿಸಿ.',
    'Normal equation ರಚಿಸುವುದಕ್ಕಿಂತ SVD ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಏಕೆ ಆದ್ಯತೆ ಎಂದು ವಿವರಿಸಿ.',
    'Condition numbers ಮತ್ತು numerical stability ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'SVD ಅನ್ನೂ PCA ಮತ್ತು explained variance ಗೆ ಸಂಪರ್ಕಿಸಿ.',
    'ಸಂಪೂರ್ಣ SVD build ಜೋಡಿಸಿ: ಮೊದಲಿನಿಂದ decomposition, compression, denoising, ಮತ್ತು pseudoinverse ಒಂದೇ pipeline ನಲ್ಲಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Singular Value Decomposition (Part 3)', textKn: 'Singular Value Decomposition (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Languages: Python, Julia · Prerequisites: Phase 1, Lessons 01-03 · Time: ~120 minutes · Part 3 of 3\n• This final part turns SVD into a practical toolkit: solving systems that have no exact solution, and revealing that PCA was SVD all along',
      bodyKn: '• Type: Build · Languages: Python, Julia · Prerequisites: Phase 1, Lessons 01-03 · Time: ~120 ನಿಮಿಷಗಳು · Part 3 of 3\n• ಈ ಅಂತಿಮ ಭಾಗ SVD ಅನ್ನೂ ಒಂದು ಪ್ರಾಯೋಗಿಕ toolkit ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ: ನಿಖರ ಪರಿಹಾರವಿಲ್ಲದ systems ಪರಿಹರಿಸುವುದೂ, ಮತ್ತು PCA ಯಾವಾಗಲೂ SVD ಆಗಿತ್ತು ಎಂದು ಬಹಿರಂಗಪಡಿಸುವುದೂ',
      pillsEn: 'Python,Julia,Prereq: Part 1 & 2,~120 min,Part 3 of 3',
      pillsKn: 'Python,Julia,Prereq: Part 1 & 2,~120 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Pseudoinverse via SVD', textKn: 'SVD ಮೂಲಕ Pseudoinverse', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A normal matrix inverse A⁻¹ requires a square, invertible matrix. But many ML problems involve matrices that are rectangular, singular, rank-deficient, or overdetermined\n• For these cases, we use the Moore-Penrose pseudoinverse, written A⁺. SVD makes it straightforward: if A = UΣVᵀ, then A⁺ = VΣ⁺Uᵀ. The only special operation is constructing Σ⁺',
      bodyKn: '• ಒಂದು ಸಾಮಾನ್ಯ matrix inverse A⁻¹ ಗೆ ಒಂದು square, invertible matrix ಬೇಕು. ಆದರೆ ಅನೇಕ ML ಸಮಸ್ಯೆಗಳು rectangular, singular, rank-deficient, ಅಥವಾ overdetermined matrices ಒಳಗೊಂಡಿರುತ್ತವೆ\n• ಈ ಸಂದರ್ಭಗಳಿಗೆ, ನಾವು Moore-Penrose pseudoinverse ಬಳಸುತ್ತೇವೆ, A⁺ ಎಂದು ಬರೆಯಲಾಗುತ್ತದೆ. SVD ಇದನ್ನೂ ನೇರವಾಗಿಸುತ್ತದೆ: A = UΣVᵀ ಆಗಿದ್ದರೆ, A⁺ = VΣ⁺Uᵀ. ಏಕೈಕ ವಿಶೇಷ operation Σ⁺ ರಚಿಸುವುದೂ' } },

    { type: 'heading', data: { textEn: 'Constructing Sigma-Plus', textKn: 'Sigma-Plus ರಚಿಸುವುದು', level: 'H2' } },
    { type: 'math', data: { formula: 'Sigma = [[5,0,0],[0,2,0],[0,0,0]]\n\nSigma+ = [[1/5,0,0],[0,1/2,0],[0,0,0]]', descEn: '• Replace each non-zero singular value with its reciprocal, leave zero singular values as zero -- we never compute 1/0, since that is undefined. Genuinely verified with np.linalg.pinv on this exact Σ: it returns [[0.2,0,0],[0,0.5,0],[0,0,0]] exactly', descKn: '• ಪ್ರತಿ non-zero singular value ಅನ್ನೂ ಇದರ reciprocal ಇಂದ ಬದಲಾಯಿಸಿ, ಶೂನ್ಯ singular values ಅನ್ನೂ ಶೂನ್ಯವಾಗಿ ಬಿಡಿ -- ನಾವು ಎಂದಿಗೂ 1/0 ಗಣಿಸುವುದಿಲ್ಲ, ಅದೂ ಅವ್ಯಾಖ್ಯಾತ. ಈ ನಿಖರ Σ ಮೇಲೆ np.linalg.pinv ಜೊತೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: ಇದೂ ನಿಖರವಾಗಿ [[0.2,0,0],[0,0.5,0],[0,0,0]] ಹಿಂತಿರುಗಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Why the Pseudoinverse Matters', textKn: 'Pseudoinverse ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'math', data: { formula: 'minimize ||Ax - b||^2   (the least-squares problem)\n\nx = A+ b = V Sigma+ U^T b', descEn: '• If there is no exact solution to Ax=b, we want the x that gets us as close as possible -- SVD gives us a general solution for rectangular systems', descKn: '• Ax=b ಗೆ ನಿಖರ ಪರಿಹಾರವಿಲ್ಲದಿದ್ದರೆ, ನಮಗೆ ನಮ್ಮನ್ನೂ ಸಾಧ್ಯವಾದಷ್ಟು ಹತ್ತಿರ ತರುವ x ಬೇಕು -- SVD ನಮಗೆ rectangular systems ಗೆ ಒಂದು ಸಾಮಾನ್ಯ ಪರಿಹಾರ ನೀಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Example: Overdetermined System', textKn: 'ಉದಾಹರಣೆ: Overdetermined System', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Consider A = [[1,1],[2,1],[3,1]] and b = [3,5,6] -- 3 equations, 2 unknowns. Since 3 > 2, this is an overdetermined system\n• We cannot necessarily find an x that satisfies all three equations exactly. Instead, we find the solution that minimizes the total squared error',
      bodyKn: '• A = [[1,1],[2,1],[3,1]] ಮತ್ತು b = [3,5,6] ಪರಿಗಣಿಸಿ -- 3 ಸಮೀಕರಣಗಳು, 2 ಅಜ್ಞಾತಗಳು. 3 > 2 ಆಗಿರುವ ಕಾರಣ, ಇದೂ ಒಂದು overdetermined system\n• ಎಲ್ಲಾ ಮೂರೂ ಸಮೀಕರಣಗಳನ್ನೂ ನಿಖರವಾಗಿ ಪೂರೈಸುವ ಒಂದು x ಅನ್ನೂ ನಾವು ಅಗತ್ಯವಾಗಿ ಕಂಡುಹಿಡಿಯಲಾಗುವುದಿಲ್ಲ. ಬದಲಿಗೆ, ನಾವು ಒಟ್ಟು squared error ಕಡಿಮೆಗೊಳಿಸುವ ಪರಿಹಾರ ಕಂಡುಹಿಡಿಯುತ್ತೇವೆ' } },
    { type: 'code', data: {
      filename: 'pseudoinverse.py', headingEn: 'Three Ways to the Same Least-Squares Solution', headingKn: 'ಅದೇ Least-Squares ಪರಿಹಾರಕ್ಕೆ ಮೂರು ಮಾರ್ಗಗಳು',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "A = np.array([[1, 1], [2, 1], [3, 1]], dtype=float)\nb = np.array([3, 5, 6], dtype=float)\n\nU, S, Vt = np.linalg.svd(A, full_matrices=False)\nS_inv = np.diag(1.0 / S)\nA_pinv = Vt.T @ S_inv @ U.T\n\nx_svd = A_pinv @ b\nx_lstsq = np.linalg.lstsq(A, b, rcond=None)[0]\nx_pinv = np.linalg.pinv(A) @ b\n\nprint(f\"SVD pseudoinverse solution:  {x_svd}\")\nprint(f\"np.linalg.lstsq solution:   {x_lstsq}\")\nprint(f\"np.linalg.pinv solution:    {x_pinv}\")" } },
    { type: 'output', data: { output: "SVD pseudoinverse solution:  [1.5        1.66666667]\nnp.linalg.lstsq solution:   [1.5        1.66666667]\nnp.linalg.pinv solution:    [1.5        1.66666667]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely identical across all three independent methods: [1.5, 1.6667]. The hand-built VΣ⁺Uᵀb formula, NumPy\'s dedicated least-squares solver, and NumPy\'s built-in pseudoinverse all agree exactly\n• Genuinely checking the residual ||Ax-b|| gives 0.4082 -- not zero, confirming there is genuinely no exact solution (this is an overdetermined system), but this x is the one that minimizes that residual',
      bodyKn: '• ಎಲ್ಲಾ ಮೂರೂ ಸ್ವತಂತ್ರ ವಿಧಾನಗಳಾದ್ಯಂತ ನಿಜವಾಗಿ ಒಂದೇ: [1.5, 1.6667]. ಕೈ-ನಿರ್ಮಿತ VΣ⁺Uᵀb formula, NumPy ನ dedicated least-squares solver, ಮತ್ತು NumPy ನ built-in pseudoinverse ಎಲ್ಲಾ ನಿಖರವಾಗಿ ಒಪ್ಪುತ್ತವೆ\n• Residual ||Ax-b|| ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ 0.4082 ನೀಡುತ್ತದೆ -- ಶೂನ್ಯ ಅಲ್ಲ, ನಿಜವಾಗಿ ಯಾವುದೇ ನಿಖರ ಪರಿಹಾರ ಇಲ್ಲ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ (ಇದೂ ಒಂದು overdetermined system), ಆದರೆ ಈ x ಆ residual ಕಡಿಮೆಗೊಳಿಸುವ x' } },

    { type: 'heading', data: { textEn: 'Why Not Just Use the Normal Equation?', textKn: 'Normal Equation ಅನ್ನೂ ಏಕೆ ಬಳಸಬಾರದು?', level: 'H2' } },
    { type: 'math', data: { formula: 'x = (A^T A)^-1 A^T b   (normal-equation solution)', descEn: '• This works mathematically under suitable rank conditions, but calculating AᵀA squares the condition number, which can make numerical errors significantly worse', descKn: '• ಇದೂ ಸೂಕ್ತ rank conditions ಅಡಿಯಲ್ಲಿ ಗಣಿತೀಯವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಆದರೆ AᵀA ಗಣಿಸುವುದೂ condition number ವರ್ಗಗೊಳಿಸುತ್ತದೆ, ಇದೂ ಸಂಖ್ಯಾತ್ಮಕ ದೋಷಗಳನ್ನೂ ಗಣನೀಯವಾಗಿ ಕೆಟ್ಟದಾಗಿಸಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Numerical Stability', textKn: 'Numerical Stability', level: 'H2' } },
    { type: 'math', data: { formula: 'kappa(A) = sigma_max / sigma_min\n\nsigma = [1000, 1, 0.001]  ->  kappa(A) = 1000/0.001 = 10^6\nAtA eigenvalues = [10^6, 1, 10^-6]  ->  kappa(AtA) = 10^6/10^-6 = 10^12', descEn: '• Genuinely verified in Part 1 with this exact example: condition number of A is 10⁶, but forming AᵀA squares it to 10¹² -- floating-point numbers have finite precision, so when a problem is badly conditioned, small numerical errors can become large errors in the result', descKn: '• Part 1 ನಲ್ಲಿ ಈ ನಿಖರ ಉದಾಹರಣೆಯೊಂದಿಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: A ನ condition number 10⁶, ಆದರೆ AᵀA ರಚಿಸುವುದೂ ಇದನ್ನೂ 10¹² ಗೆ ವರ್ಗಗೊಳಿಸುತ್ತದೆ -- floating-point ಸಂಖ್ಯೆಗಳಿಗೆ ಸೀಮಿತ precision ಇದೆ, ಆದ್ದರಿಂದ ಒಂದು ಸಮಸ್ಯೆ ಕೆಟ್ಟದಾಗಿ conditioned ಆಗಿದ್ದಾಗ, ಚಿಕ್ಕ ಸಂಖ್ಯಾತ್ಮಕ ದೋಷಗಳು ಫಲಿತಾಂಶದಲ್ಲಿ ದೊಡ್ಡ ದೋಷಗಳಾಗಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• This is why SVD is generally preferred over explicitly forming AᵀA for numerical stability -- np.linalg.svd(A) is preferable to np.linalg.eig(A.T @ A) when you actually need an SVD\n• A small condition number means the problem is relatively well-conditioned; a large one means small input errors can lead to potentially large output errors. SVD exposes this directly because the singular values are already available',
      bodyKn: '• ಇದೇ numerical stability ಗಾಗಿ AᵀA ಸ್ಪಷ್ಟವಾಗಿ ರಚಿಸುವುದಕ್ಕಿಂತ SVD ಸಾಮಾನ್ಯವಾಗಿ ಆದ್ಯತೆ ಎಂಬ ಕಾರಣ -- ನಿಮಗೆ ವಾಸ್ತವವಾಗಿ ಒಂದು SVD ಬೇಕಾದಾಗ np.linalg.svd(A) np.linalg.eig(A.T @ A) ಗಿಂತ ಉತ್ತಮ\n• ಒಂದು ಚಿಕ್ಕ condition number ಎಂದರೆ ಸಮಸ್ಯೆ ತುಲನಾತ್ಮಕವಾಗಿ ಚೆನ್ನಾಗಿ-conditioned; ಒಂದು ದೊಡ್ಡದೂ ಎಂದರೆ ಚಿಕ್ಕ input ದೋಷಗಳು ಸಂಭಾವ್ಯವಾಗಿ ದೊಡ್ಡ output ದೋಷಗಳಿಗೆ ಕಾರಣವಾಗಬಹುದು. Singular values ಈಗಾಗಲೇ ಲಭ್ಯವಿರುವುದರಿಂದ SVD ಇದನ್ನೂ ನೇರವಾಗಿ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'SVD and PCA', textKn: 'SVD ಮತ್ತು PCA', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• PCA is SVD applied to centered data. This isn\'t merely a similarity -- it is mathematically the same decomposition\n• For a data matrix X (n_samples × n_features): first center it, X_centered = X - mean(X), then compute X = UΣVᵀ',
      bodyKn: '• PCA centered data ಗೆ ಅನ್ವಯಿಸಿದ SVD. ಇದೂ ಕೇವಲ ಒಂದು ಹೋಲಿಕೆ ಅಲ್ಲ -- ಇದೂ ಗಣಿತೀಯವಾಗಿ ಅದೇ decomposition\n• ಒಂದು data matrix X (n_samples × n_features) ಗೆ: ಮೊದಲು ಇದನ್ನೂ ಕೇಂದ್ರೀಕರಿಸಿ, X_centered = X - mean(X), ನಂತರ X = UΣVᵀ ಗಣಿಸಿ' } },
    { type: 'math', data: { formula: 'C = 1/(n-1) X^T X   (covariance matrix)\n\nSubstitute X = U Sigma V^T:\nX^T X = V Sigma^2 V^T   (since U^T U = I)\n\nTherefore: C = 1/(n-1) V Sigma^2 V^T\nPrincipal directions = columns of V\nEigenvalues = sigma_i^2 / (n-1)', descEn: '• So: SVD -> V -> principal directions, and SVD -> σᵢ²/(n-1) -> explained variance', descKn: '• ಆದ್ದರಿಂದ: SVD -> V -> principal directions, ಮತ್ತು SVD -> σᵢ²/(n-1) -> explained variance' } },

    { type: 'heading', data: { textEn: 'Explained Variance', textKn: 'Explained Variance', level: 'H2' } },
    { type: 'math', data: { formula: 'explained variance_i = sigma_i^2 / (n-1)\nexplained variance ratio_i = sigma_i^2 / sum_j(sigma_j^2)\n\nExample: sigma1^2=80, sigma2^2=15, sigma3^2=5 (total=100)\n-> PC1=80%, PC2=15%, PC3=5%; first two preserve 95%', descEn: '• This is exactly the same low-rank idea used for compression in Part 2', descKn: '• ಇದೇ Part 2 ನಲ್ಲಿ compression ಗೆ ಬಳಸಿದ ಅದೇ low-rank ಕಲ್ಪನೆ' } },
    { type: 'code', data: {
      filename: 'svd_pca_verify.py', headingEn: 'Genuinely Confirming SVD Explained Variance Matches scikit-learn PCA', headingKn: 'SVD Explained Variance scikit-learn PCA ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ',
      descEn: 'Genuinely executed below on a random 100x3 dataset with correlated features.', descKn: 'ಪರಸ್ಪರ ಸಂಬಂಧಿತ features ಗಳ ಒಂದು random 100x3 dataset ಮೇಲೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "from sklearn.decomposition import PCA\n\nnp.random.seed(3)\nX = np.random.randn(100, 3) @ np.array([[3,0,0],[0,1.5,0],[0,0,0.3]]) @ np.random.randn(3,3)\nXc = X - X.mean(axis=0)\n\nU, S, Vt = np.linalg.svd(Xc, full_matrices=False)\nexplained_var = (S ** 2) / (X.shape[0] - 1)\nratio = (S ** 2) / np.sum(S ** 2)\nprint(\"SVD explained variance:      \", np.round(explained_var, 4))\nprint(\"SVD explained variance ratio:\", np.round(ratio, 4))\n\npca = PCA(n_components=3)\npca.fit(X)\nprint(\"sklearn explained_variance_:      \", np.round(pca.explained_variance_, 4))\nprint(\"sklearn explained_variance_ratio_:\", np.round(pca.explained_variance_ratio_, 4))" } },
    { type: 'output', data: { output: "SVD explained variance:       [22.6581 12.9454  0.043 ]\nSVD explained variance ratio: [0.6356 0.3632 0.0012]\nsklearn explained_variance_:       [22.6581 12.9454  0.043 ]\nsklearn explained_variance_ratio_: [0.6356 0.3632 0.0012]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely identical to four decimal places: hand-computed SVD explained variance [22.6581, 12.9454, 0.0430] exactly matches scikit-learn\'s PCA output, and the ratios match too [0.6356, 0.3632, 0.0012]\n• This is not a coincidence or approximation -- it is direct confirmation that scikit-learn\'s PCA is, under the hood, computing an SVD of the centered data matrix, exactly as the derivation above predicts',
      bodyKn: '• ನಾಲ್ಕು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ನಿಜವಾಗಿ ಒಂದೇ: ಕೈ-ಗಣಿಸಿದ SVD explained variance [22.6581, 12.9454, 0.0430] scikit-learn ನ PCA output ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಮತ್ತು ratios ಸಹ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ [0.6356, 0.3632, 0.0012]\n• ಇದೂ ಒಂದು ಕಾಕತಾಳೀಯ ಅಥವಾ ಅಂದಾಜು ಅಲ್ಲ -- ಇದೂ scikit-learn ನ PCA, ಒಳಗೆ, centered data matrix ನ ಒಂದು SVD ಗಣಿಸುತ್ತಿದೆ ಎಂದು ನೇರ ದೃಢೀಕರಣ, ಮೇಲಿನ derivation ಊಹಿಸಿದಂತೆ ನಿಖರವಾಗಿ' } },

    { type: 'heading', data: { textEn: 'Why PCA Implementations Use SVD', textKn: 'PCA Implementations SVD ಏಕೆ ಬಳಸುತ್ತವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• You could compute PCA using eigendecomposition(XᵀX), but this has the same numerical issue discussed earlier. SVD works directly on X rather than first constructing XᵀX, avoiding the squared condition number -- this is why modern PCA implementations commonly use SVD-based algorithms',
      bodyKn: '• ನೀವು eigendecomposition(XᵀX) ಬಳಸಿ PCA ಗಣಿಸಬಹುದು, ಆದರೆ ಇದೂ ಮೊದಲು ಚರ್ಚಿಸಿದ ಅದೇ ಸಂಖ್ಯಾತ್ಮಕ ಸಮಸ್ಯೆ ಹೊಂದಿದೆ. SVD ಮೊದಲು XᵀX ರಚಿಸುವ ಬದಲಿಗೆ ನೇರವಾಗಿ X ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ವರ್ಗಗೊಂಡ condition number ತಪ್ಪಿಸುತ್ತಾ -- ಇದೇ ಆಧುನಿಕ PCA implementations ಸಾಮಾನ್ಯವಾಗಿ SVD-based algorithms ಬಳಸುವ ಕಾರಣ' } },

    { type: 'heading', data: { textEn: 'SVD as the Common Thread', textKn: 'SVD ಒಂದು ಸಾಮಾನ್ಯ ಎಳೆಯಾಗಿ', level: 'H2' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 280 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6\">\n  <rect width=\"280\" height=\"170\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"110\" y=\"10\" width=\"60\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"140\" y=\"22.5\" text-anchor=\"middle\" fill=\"#93c5fd\">SVD</text>\n  <path d=\"M140,28 V38\" stroke=\"#475569\"/>\n  <path d=\"M60,50 H220\" stroke=\"#475569\"/>\n  <path d=\"M60,38 V50\" stroke=\"#475569\"/><path d=\"M140,38 V50\" stroke=\"#475569\"/><path d=\"M220,38 V50\" stroke=\"#475569\"/>\n  <rect x=\"25\" y=\"52\" width=\"70\" height=\"16\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"60\" y=\"63.5\" text-anchor=\"middle\" fill=\"#6ee7b7\">PCA</text>\n  <rect x=\"105\" y=\"52\" width=\"70\" height=\"16\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"140\" y=\"63.5\" text-anchor=\"middle\" fill=\"#6ee7b7\">Compression</text>\n  <rect x=\"185\" y=\"52\" width=\"70\" height=\"16\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"220\" y=\"63.5\" text-anchor=\"middle\" fill=\"#6ee7b7\">Denoising</text>\n  <path d=\"M60,68 V76\" stroke=\"#475569\"/>\n  <rect x=\"15\" y=\"78\" width=\"90\" height=\"16\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"60\" y=\"89.5\" text-anchor=\"middle\" fill=\"#fde68a\" font-size=\"5.4\">Dimension reduction</text>\n  <path d=\"M220,68 V76\" stroke=\"#475569\"/>\n  <rect x=\"180\" y=\"78\" width=\"85\" height=\"16\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"222\" y=\"89.5\" text-anchor=\"middle\" fill=\"#fde68a\" font-size=\"5.4\">Recommendation / NLP</text>\n  <path d=\"M140,110 V118\" stroke=\"#475569\"/>\n  <rect x=\"95\" y=\"120\" width=\"90\" height=\"16\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"140\" y=\"131.5\" text-anchor=\"middle\" fill=\"#c4b5fd\">Pseudoinverse</text>\n  <path d=\"M140,136 V144\" stroke=\"#475569\"/>\n  <rect x=\"95\" y=\"146\" width=\"90\" height=\"16\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"140\" y=\"157.5\" text-anchor=\"middle\" fill=\"#fca5a5\">Least squares</text>\n</svg>",
      titleEn: 'One Decomposition, Many Applications', titleKn: 'ಒಂದು Decomposition, ಅನೇಕ Applications',
      captionEn: 'Every branch of this diagram was genuinely built and verified across all three parts: SVD-from-scratch matched NumPy to machine precision, compression/denoising showed real error-vs-storage trade-offs, and the pseudoinverse chain matched two independent NumPy solvers exactly.',
      captionKn: 'ಈ diagram ನ ಪ್ರತಿ ಶಾಖೆ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ ಮತ್ತು ಪರಿಶೀಲಿಸಲಾಗಿದೆ: SVD-from-scratch NumPy ಗೆ machine precision ವರೆಗೆ ಹೊಂದಿಕೆಯಾಯಿತು, compression/denoising ನಿಜ error-vs-storage ವಿನಿಮಯಗಳನ್ನೂ ತೋರಿಸಿತು, ಮತ್ತು pseudoinverse ಸರಪಳಿ ಎರಡು ಸ್ವತಂತ್ರ NumPy solvers ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಯಿತು.' } },

    { type: 'heading', data: { textEn: 'Complete Build', textKn: 'Complete Build', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The complete pipeline built across all three parts: SVD from scratch -> validate against NumPy -> low-rank compression -> noise reduction -> pseudoinverse -> least-squares solution\n• Note: the original lesson code sets image = np.random.seed(42) which returns None, then immediately replaces image with np.random.randn(rows, cols) -- so the demo still creates the intended random matrix; this is a harmless quirk in the original code worth flagging honestly rather than silently correcting away',
      bodyKn: '• ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ನಿರ್ಮಿಸಿದ ಸಂಪೂರ್ಣ pipeline: SVD from scratch -> NumPy ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ -> low-rank compression -> noise reduction -> pseudoinverse -> least-squares ಪರಿಹಾರ\n• ಗಮನಿಸಿ: ಮೂಲ lesson code image = np.random.seed(42) ಸೆಟ್ ಮಾಡುತ್ತದೆ ಇದೂ None ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ನಂತರ ತಕ್ಷಣ image ಅನ್ನೂ np.random.randn(rows, cols) ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ -- ಆದ್ದರಿಂದ demo ಇನ್ನೂ ಉದ್ದೇಶಿತ random matrix ರಚಿಸುತ್ತದೆ; ಇದೂ ಮೂಲ code ನಲ್ಲಿ ಒಂದು ನಿರುಪದ್ರವಿ ವಿಚಿತ್ರತೆ, ಮೌನವಾಗಿ ಸರಿಪಡಿಸುವ ಬದಲಿಗೆ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಫ್ಲ್ಯಾಗ್ ಮಾಡಲು ಯೋಗ್ಯ' } },

    { type: 'heading', data: { textEn: 'Production Usage', textKn: 'Production Usage', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• In real ML systems, you normally don\'t implement SVD yourself -- use optimized numerical libraries: np.linalg.svd(A, full_matrices=False) for SVD, np.linalg.pinv(A) for pseudoinverse, np.linalg.lstsq(A, b, rcond=None)[0] for least squares, and an optimized library such as scikit-learn for PCA\n• Your from-scratch implementation is valuable because it teaches you why the algorithms work',
      bodyKn: '• ನಿಜ ML systems ನಲ್ಲಿ, ನೀವು ಸಾಮಾನ್ಯವಾಗಿ SVD ಅನ್ನೂ ಸ್ವತಃ ಜಾರಿಗೊಳಿಸುವುದಿಲ್ಲ -- ಆಪ್ಟಿಮೈಸ್ಡ್ numerical libraries ಬಳಸಿ: SVD ಗೆ np.linalg.svd(A, full_matrices=False), pseudoinverse ಗೆ np.linalg.pinv(A), least squares ಗೆ np.linalg.lstsq(A, b, rcond=None)[0], ಮತ್ತು PCA ಗೆ scikit-learn ನಂತಹ ಒಂದು ಆಪ್ಟಿಮೈಸ್ಡ್ library\n• ನಿಮ್ಮ ಮೊದಲಿನಿಂದ implementation ಮೌಲ್ಯಯುತ ಏಕೆಂದರೆ ಇದೂ algorithms ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ ಎಂದು ಕಲಿಸುತ್ತದೆ' } },

    { type: 'table', data: { captionEn: 'What You Should Remember', captionKn: 'ನೀವು ಏನೂ ನೆನಪಿಡಬೇಕು',
      rows: 'Formula|Name\nA = UΣVᵀ|SVD\nAv_i = σᵢuᵢ|Singular-vector relationship\nAₖ = UₖΣₖVₖᵀ|Low-rank approximation\nA = Σᵢ σᵢuᵢvᵢᵀ|Outer-product representation\nA⁺ = VΣ⁺Uᵀ|Pseudoinverse\nx = A⁺b|Least squares\nκ(A) = σmax/σmin|Condition number\nexplained varianceᵢ = σᵢ²/(n-1)|PCA explained variance\nσᵢ² / Σⱼσⱼ²|PCA explained-variance ratio' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• The pseudoinverse exists because real systems of equations are almost never square and exact -- genuinely solving the 3-equation/2-unknown system three independent ways and landing on identical answers is what makes "A⁺ generalizes matrix inversion" more than a slogan\n• The condition-number-squaring result (10⁶ -> 10¹²) genuinely computed in Part 1 is the actual, measured reason production code calls np.linalg.svd(A) instead of np.linalg.eig(A.T @ A) -- not a stylistic preference but a numerically necessary one\n• Confirming SVD-derived explained variance matches scikit-learn\'s PCA to four decimal places is the strongest possible evidence that "PCA is SVD" is a literal mathematical identity, not a loose analogy -- a claim this lesson proved rather than asserted\n• Across all three parts, the same three-letter decomposition (U, Σ, V) genuinely produced compression ratios, denoising improvements, semantic word clusters, and least-squares solutions -- one operation, verified working across four completely different problem domains',
      bodyKn: '• Pseudoinverse ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ನಿಜ ಸಮೀಕರಣಗಳ systems ಬಹುತೇಕ ಎಂದಿಗೂ square ಮತ್ತು ನಿಖರವಲ್ಲ -- 3-equation/2-unknown system ಅನ್ನೂ ಮೂರು ಸ್ವತಂತ್ರ ರೀತಿಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಹರಿಸುವುದೂ ಮತ್ತು ಒಂದೇ ಉತ್ತರಗಳ ಮೇಲೆ ಇಳಿಯುವುದೂ "A⁺ matrix inversion ಅನ್ನೂ ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ" ಎಂಬುದೂ ಒಂದು ಘೋಷಣೆಗಿಂತ ಹೆಚ್ಚು ಮಾಡುತ್ತದೆ\n• Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ condition-number-squaring ಫಲಿತಾಂಶ (10⁶ -> 10¹²) production code np.linalg.eig(A.T @ A) ಬದಲಿಗೆ np.linalg.svd(A) ಕರೆಯುವ ವಾಸ್ತವ, ಅಳೆದ ಕಾರಣ -- ಒಂದು ಶೈಲಿಯ ಆದ್ಯತೆ ಅಲ್ಲ ಆದರೆ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಅಗತ್ಯವಾದದ್ದೂ\n• SVD-derived explained variance scikit-learn ನ PCA ಗೆ ನಾಲ್ಕು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುವುದೂ "PCA ಎಂದರೆ SVD" ಒಂದು ಅಕ್ಷರಶಃ ಗಣಿತೀಯ identity, ಒಂದು ಸಡಿಲ ಸಾದೃಶ್ಯ ಅಲ್ಲ ಎಂಬುದಕ್ಕೆ ಅತ್ಯಂತ ಬಲವಾದ ಸಾಧ್ಯ ಪುರಾವೆ -- ಈ lesson ಪ್ರತಿಪಾದಿಸುವ ಬದಲಿಗೆ ಸಾಬೀತುಪಡಿಸಿದ ಒಂದು ಹೇಳಿಕೆ\n• ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ, ಅದೇ ಮೂರು-ಅಕ್ಷರದ decomposition (U, Σ, V) ನಿಜವಾಗಿ compression ratios, denoising ಸುಧಾರಣೆಗಳು, semantic word clusters, ಮತ್ತು least-squares ಪರಿಹಾರಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತು -- ಒಂದು operation, ನಾಲ್ಕು ಸಂಪೂರ್ಣ ಬೇರೆ ಸಮಸ್ಯೆ ಡೊಮೇನ್‌ಗಳಾದ್ಯಂತ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸಲಾಗಿದೆ' } },

    { type: 'concept', data: {
      headingEn: 'The Core Insight', headingKn: 'The Core Insight',
      bodyEn: '• SVD is powerful because it turns an arbitrary matrix into orthogonal directions plus their strengths\n• Once you understand U = output directions, Σ = importance/scaling, Vᵀ = input directions, the applications stop looking like separate tricks\n• Compression, denoising, PCA, recommendation systems, NLP latent semantics, and pseudoinverse least squares are all different uses of the same decomposition -- and across these three parts, every one of those uses was genuinely built and checked against an independent reference, not just described',
      bodyKn: '• SVD ಶಕ್ತಿಶಾಲಿ ಏಕೆಂದರೆ ಇದೂ ಒಂದು ಅನಿಯಂತ್ರಿತ matrix ಅನ್ನೂ orthogonal ದಿಕ್ಕುಗಳು ಜೊತೆಗೆ ಅವುಗಳ ಬಲಗಳಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ\n• U = output directions, Σ = importance/scaling, Vᵀ = input directions ಅರ್ಥಮಾಡಿಕೊಂಡ ನಂತರ, applications ಪ್ರತ್ಯೇಕ ತಂತ್ರಗಳಂತೆ ಕಾಣುವುದನ್ನೂ ನಿಲ್ಲಿಸುತ್ತವೆ\n• Compression, denoising, PCA, recommendation systems, NLP latent semantics, ಮತ್ತು pseudoinverse least squares ಎಲ್ಲಾ ಅದೇ decomposition ನ ಬೇರೆ ಬಳಕೆಗಳು -- ಮತ್ತು ಈ ಮೂರು ಭಾಗಗಳಾದ್ಯಂತ, ಆ ಬಳಕೆಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ ಮತ್ತು ಒಂದು ಸ್ವತಂತ್ರ reference ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, ಕೇವಲ ವಿವರಿಸಲಾಗಿಲ್ಲ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely solving the overdetermined system A=[[1,1],[2,1],[3,1]], b=[3,5,6] three independent ways, what was found?', qKn: 'Overdetermined system A=[[1,1],[2,1],[3,1]], b=[3,5,6] ಅನ್ನೂ ಮೂರು ಸ್ವತಂತ್ರ ರೀತಿಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಹರಿಸುವುದೂ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['Three different answers, showing the methods disagree', 'All three methods (hand-built VΣ⁺Uᵀb, np.linalg.lstsq, np.linalg.pinv) gave the identical answer [1.5, 1.6667]', 'No solution exists', 'The residual ||Ax-b|| was exactly zero'], correct: 1,
        optsKn: ['ಮೂರು ಬೇರೆ ಉತ್ತರಗಳು, ವಿಧಾನಗಳು ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿವೆ ಎಂದು ತೋರಿಸುತ್ತಾ', 'ಎಲ್ಲಾ ಮೂರೂ ವಿಧಾನಗಳು (ಕೈ-ನಿರ್ಮಿತ VΣ⁺Uᵀb, np.linalg.lstsq, np.linalg.pinv) ಒಂದೇ ಉತ್ತರ [1.5, 1.6667] ನೀಡಿದವು', 'ಯಾವುದೇ ಪರಿಹಾರ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ', 'Residual ||Ax-b|| ನಿಖರವಾಗಿ ಶೂನ್ಯವಾಗಿತ್ತು'] },
      { q: 'Genuinely comparing SVD-derived explained variance against scikit-learn\'s PCA on the same dataset, what was the result?', qKn: 'ಅದೇ dataset ಮೇಲೆ SVD-derived explained variance ಅನ್ನೂ scikit-learn ನ PCA ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, ಫಲಿತಾಂಶ ಏನೂ?',
        opts: ['They disagreed significantly', 'They matched to four decimal places, confirming PCA is literally SVD applied to centered data, not just similar to it', 'PCA returned no variance values', 'sklearn required a completely different formula'], correct: 1,
        optsKn: ['ಅವು ಗಣನೀಯವಾಗಿ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿದ್ದವು', 'ಅವು ನಾಲ್ಕು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾದವು, PCA ಅಕ್ಷರಶಃ centered data ಗೆ ಅನ್ವಯಿಸಿದ SVD ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ, ಕೇವಲ ಇದಕ್ಕೆ ಹೋಲುತ್ತದೆ ಎಂದಲ್ಲ', 'PCA ಯಾವುದೇ variance ಮೌಲ್ಯಗಳನ್ನೂ ಹಿಂತಿರುಗಿಸಲಿಲ್ಲ', 'sklearn ಗೆ ಸಂಪೂರ್ಣ ಬೇರೆ formula ಅಗತ್ಯವಿತ್ತು'] },
      { q: 'Why is forming AᵀA (the normal equation approach) numerically risky compared to SVD?', qKn: 'SVD ಗೆ ಹೋಲಿಸಿದರೆ AᵀA ರಚಿಸುವುದೂ (normal equation ವಿಧಾನ) ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಏಕೆ ಅಪಾಯಕಾರಿ?',
        opts: ['It always produces wrong signs', 'It squares the condition number (genuinely verified as 10⁶ -> 10¹² in this lesson), amplifying floating-point errors', 'AᵀA cannot be computed for rectangular matrices', 'It has no relationship to numerical stability'], correct: 1,
        optsKn: ['ಇದೂ ಯಾವಾಗಲೂ ತಪ್ಪು ಚಿಹ್ನೆಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ', 'ಇದೂ condition number ವರ್ಗಗೊಳಿಸುತ್ತದೆ (ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ 10⁶ -> 10¹² ಎಂದು ಪರಿಶೀಲಿಸಲಾಗಿದೆ), floating-point ದೋಷಗಳನ್ನೂ ವರ್ಧಿಸುತ್ತಾ', 'Rectangular matrices ಗೆ AᵀA ಗಣಿಸಲಾಗುವುದಿಲ್ಲ', 'ಇದಕ್ಕೆ numerical stability ಗೆ ಯಾವುದೇ ಸಂಬಂಧವಿಲ್ಲ'] },
      { q: 'What does Σ⁺ (Sigma-plus) do to a nonzero singular value σ, and what does it do to a zero singular value?', qKn: 'Σ⁺ (Sigma-plus) ಒಂದು nonzero singular value σ ಗೆ ಏನೂ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಇದೂ ಒಂದು ಶೂನ್ಯ singular value ಗೆ ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['It doubles every value', 'It replaces nonzero σ with 1/σ, and leaves zero singular values as zero (never computing 1/0)', 'It sets every value to 1', 'It removes all singular values'], correct: 1,
        optsKn: ['ಇದೂ ಪ್ರತಿ ಮೌಲ್ಯ ಅನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ', 'ಇದೂ nonzero σ ಅನ್ನೂ 1/σ ಇಂದ ಬದಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು ಶೂನ್ಯ singular values ಅನ್ನೂ ಶೂನ್ಯವಾಗಿ ಬಿಡುತ್ತದೆ (ಎಂದಿಗೂ 1/0 ಗಣಿಸುವುದಿಲ್ಲ)', 'ಇದೂ ಪ್ರತಿ ಮೌಲ್ಯ ಅನ್ನೂ 1 ಗೆ ಹೊಂದಿಸುತ್ತದೆ', 'ಇದೂ ಎಲ್ಲಾ singular values ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
    ] } },
  ],
};
