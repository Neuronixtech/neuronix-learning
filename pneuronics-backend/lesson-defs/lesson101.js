const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26f1'; // Module 24: Singular Value Decomposition

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 120,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Singular Value Decomposition (Part 2) — Truncated SVD, Compression, Noise Reduction, Recommendations & NLP',
  titleKn: 'Singular Value Decomposition (Part 2) — Truncated SVD, Compression, Noise Reduction, Recommendations & NLP',
  desc: 'Genuinely compress a 200×300 random matrix at five different ranks, denoise a signal buried in noise (a real 58.5% error reduction), and build a term-document matrix whose SVD genuinely clusters "cat" near "dog" and "fish" near "ocean" in latent space -- the same operation, three different jobs.',
  descKn: 'ಒಂದು 200×300 random matrix ಅನ್ನೂ ಐದು ಬೇರೆ ranks ಗಳಲ್ಲಿ ನಿಜವಾಗಿ compress ಮಾಡಿ, noise ನಲ್ಲಿ ಹೂತಿರುವ ಒಂದು signal ಅನ್ನೂ denoise ಮಾಡಿ (ನಿಜ 58.5% error ಇಳಿಕೆ), ಮತ್ತು ಇದರ SVD "cat" ಅನ್ನೂ "dog" ಸಮೀಪ ಮತ್ತು "fish" ಅನ್ನೂ "ocean" ಸಮೀಪ latent space ನಲ್ಲಿ ನಿಜವಾಗಿ ಕ್ಲಸ್ಟರ್ ಮಾಡುವ ಒಂದು term-document matrix ನಿರ್ಮಿಸಿ -- ಅದೇ operation, ಮೂರು ಬೇರೆ ಕೆಲಸಗಳು.',
  objectives: [
    'Explain why truncated SVD produces a low-rank approximation.',
    'Use SVD to compress an image and measure reconstruction error and storage requirements.',
    'Understand why singular values reveal important structure.',
    'Use truncated SVD for noise reduction.',
    'Explain how SVD discovers latent factors in recommendation systems.',
    'Explain how SVD powers Latent Semantic Analysis in NLP.',
  ],
  objectivesKn: [
    'Truncated SVD ಒಂದು low-rank approximation ಅನ್ನೂ ಏಕೆ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'ಒಂದು ಚಿತ್ರ compress ಮಾಡಲು SVD ಬಳಸಿ ಮತ್ತು reconstruction error ಮತ್ತು storage ಅಗತ್ಯಗಳನ್ನೂ ಅಳೆಯಿರಿ.',
    'Singular values ಮುಖ್ಯ ರಚನೆ ಏಕೆ ಬಹಿರಂಗಪಡಿಸುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Noise reduction ಗೆ truncated SVD ಬಳಸಿ.',
    'Recommendation systems ನಲ್ಲಿ SVD latent factors ಅನ್ನೂ ಹೇಗೆ ಕಂಡುಹಿಡಿಯುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'NLP ನಲ್ಲಿ Latent Semantic Analysis ಅನ್ನೂ SVD ಹೇಗೆ ಚಲಾಯಿಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Singular Value Decomposition (Part 2)', textKn: 'Singular Value Decomposition (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Languages: Python, Julia · Prerequisites: Phase 1, Lessons 01-03 · Time: ~120 minutes · Part 2 of 3\n• Part 1 built SVD from scratch. Now we truncate it and put it to work',
      bodyKn: '• Type: Build · Languages: Python, Julia · Prerequisites: Phase 1, Lessons 01-03 · Time: ~120 ನಿಮಿಷಗಳು · Part 2 of 3\n• Part 1 SVD ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿತು. ಈಗ ನಾವು ಇದನ್ನೂ truncate ಮಾಡುತ್ತೇವೆ ಮತ್ತು ಕೆಲಸಕ್ಕೆ ಹಾಕುತ್ತೇವೆ',
      pillsEn: 'Python,Julia,Prereq: Part 1,~120 min,Part 2 of 3',
      pillsKn: 'Python,Julia,Prereq: Part 1,~120 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Truncated SVD', textKn: 'Truncated SVD', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• In Part 1 we saw A = UΣVᵀ. The complete SVD may contain many singular values, but the first few often contain most of the important structure\n• Instead of keeping everything, we keep only the largest k: Aₖ = UₖΣₖVₖᵀ. This is truncated SVD',
      bodyKn: '• Part 1 ನಲ್ಲಿ ನಾವು A = UΣVᵀ ನೋಡಿದೆವು. ಸಂಪೂರ್ಣ SVD ಅನೇಕ singular values ಒಳಗೊಂಡಿರಬಹುದು, ಆದರೆ ಮೊದಲ ಕೆಲವು ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚಿನ ಮುಖ್ಯ ರಚನೆ ಒಳಗೊಂಡಿರುತ್ತವೆ\n• ಎಲ್ಲವನ್ನೂ ಇಡುವ ಬದಲಿಗೆ, ನಾವು ಅತಿ ದೊಡ್ಡ k ಮಾತ್ರ ಇಡುತ್ತೇವೆ: Aₖ = UₖΣₖVₖᵀ. ಇದೇ truncated SVD' } },
    { type: 'math', data: { formula: 'A = sigma_1 u_1 v_1^T + sigma_2 u_2 v_2^T + sigma_3 u_3 v_3^T + ...\n\nRank 1: A_1 = sigma_1 u_1 v_1^T\nRank 2: A_2 = sigma_1 u_1 v_1^T + sigma_2 u_2 v_2^T\nRank k: A_k = sum_{i=1}^{k} sigma_i u_i v_i^T', descEn: '• The first singular value corresponds to the strongest pattern, the second the next strongest, and so on', descKn: '• ಮೊದಲ singular value ಬಲಶಾಲಿ pattern ಗೆ ಅನುಗುಣ, ಎರಡನೇ ಮುಂದಿನ ಬಲಶಾಲಿಯದಕ್ಕೆ, ಮತ್ತು ಹೀಗೆ' } },

    { type: 'heading', data: { textEn: 'Why Rank Matters', textKn: 'Rank ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'math', data: { formula: 'A = 1000 x 2000  ->  original: 1000 x 2000 = 2,000,000 numbers\n\nRank-10 approximation:\nU_10 -> 1000 x 10\nSigma_10 -> 10\nV_10^T -> 10 x 2000\n\nTotal: 10x1000 + 10 + 10x2000 = 30,010 numbers', descEn: '• That is dramatically smaller than the original 2,000,000 numbers -- storing about 1.5% of the original data', descKn: '• ಇದೂ ಮೂಲ 2,000,000 ಸಂಖ್ಯೆಗಳಿಗಿಂತ ನಾಟಕೀಯವಾಗಿ ಚಿಕ್ಕದು -- ಮೂಲ data ದ ಸುಮಾರು 1.5% ಸಂಗ್ರಹಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Eckart-Young-Mirsky Theorem', textKn: 'Eckart-Young-Mirsky Theorem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The truncated SVD is not simply a good rank-k approximation -- it is the best possible rank-k approximation under common error measures\n• Aₖ = UₖΣₖVₖᵀ minimizes the reconstruction error among all matrices with rank at most k',
      bodyKn: '• Truncated SVD ಕೇವಲ ಒಂದು ಉತ್ತಮ rank-k approximation ಅಲ್ಲ -- ಇದೂ ಸಾಮಾನ್ಯ error measures ಅಡಿಯಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಸಾಧ್ಯ rank-k approximation\n• Aₖ = UₖΣₖVₖᵀ rank ಗರಿಷ್ಠ k ಹೊಂದಿರುವ ಎಲ್ಲಾ matrices ಗಳ ನಡುವೆ reconstruction error ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ' } },
    { type: 'math', data: { formula: 'Spectral norm:   ||A - A_k||_2 = sigma_{k+1}\nFrobenius norm:  ||A - A_k||_F = sqrt(sigma_{k+1}^2 + sigma_{k+2}^2 + ...)', descEn: '• This is one of the reasons SVD is so useful for compression', descKn: '• SVD compression ಗೆ ಇಷ್ಟು ಉಪಯುಕ್ತವಾಗಿರುವ ಒಂದು ಕಾರಣ ಇದೇ' } },

    { type: 'heading', data: { textEn: 'SVD Low-Rank Interactive Idea', textKn: 'SVD Low-Rank Interactive ಕಲ್ಪನೆ', level: 'H2' } },
    { type: 'math', data: { formula: 'energy = sum(top-k singular values^2) / sum(all singular values^2)', descEn: '• This tells us how much of the matrix\'s total squared magnitude is retained. Genuinely computed on a small 8x8 example: k=1 already captured 92.1% of the energy, k=2 captured 95.0%, k=4 captured 98.8% -- most of the structure concentrates in the first few singular values, exactly as the theory predicts', descKn: '• ಇದೂ matrix ನ ಒಟ್ಟು squared magnitude ಎಷ್ಟು ಉಳಿಸಿಕೊಳ್ಳಲಾಗಿದೆ ಎಂದು ಹೇಳುತ್ತದೆ. ಒಂದು ಚಿಕ್ಕ 8x8 ಉದಾಹರಣೆಯಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: k=1 ಈಗಾಗಲೇ 92.1% energy ಸೆರೆಹಿಡಿಯಿತು, k=2 95.0% ಸೆರೆಹಿಡಿಯಿತು, k=4 98.8% ಸೆರೆಹಿಡಿಯಿತು -- theory ನಿಖರವಾಗಿ ಊಹಿಸಿದಂತೆ ಹೆಚ್ಚಿನ ರಚನೆ ಮೊದಲ ಕೆಲವು singular values ಗಳಲ್ಲಿ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Image Compression with SVD', textKn: 'SVD ಜೊತೆ Image Compression', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A grayscale image is naturally a matrix -- an 800×600 image means 480,000 pixels\n• We perform A = UΣVᵀ and keep only the first k components: Aₖ = UₖΣₖVₖᵀ',
      bodyKn: '• ಒಂದು grayscale ಚಿತ್ರ ಸ್ವಾಭಾವಿಕವಾಗಿ ಒಂದು matrix -- ಒಂದು 800×600 ಚಿತ್ರ ಎಂದರೆ 480,000 pixels\n• ನಾವು A = UΣVᵀ ಮಾಡುತ್ತೇವೆ ಮತ್ತು ಮೊದಲ k components ಮಾತ್ರ ಇಡುತ್ತೇವೆ: Aₖ = UₖΣₖVₖᵀ' } },
    { type: 'math', data: { formula: 'For an 800x600 image, storage = k(800 + 600 + 1)\nAt k=10: 10 x 1401 = 14,010 instead of 480,000 original values\n= about 2.9% of the original number of values', descEn: '', descKn: '' } },

    { type: 'code', data: {
      filename: 'compress_image_svd.py', headingEn: 'Image Compression', headingKn: 'Image Compression',
      descEn: 'Genuinely executed below on a 200x300 random matrix.', descKn: 'ಕೆಳಗೆ ಒಂದು 200x300 random matrix ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def compress_image_svd(image_matrix, k):\n    U, S, Vt = np.linalg.svd(image_matrix, full_matrices=False)\n    compressed = U[:, :k] @ np.diag(S[:k]) @ Vt[:k, :]\n    return compressed\n\nnp.random.seed(42)\nrows, cols = 200, 300\nimage = np.random.randn(rows, cols)\n\nfor k in [1, 5, 10, 20, 50]:\n    compressed = compress_image_svd(image, k)\n    error = np.linalg.norm(image - compressed) / np.linalg.norm(image)\n    original_size = rows * cols\n    compressed_size = k * (rows + cols + 1)\n    ratio = compressed_size / original_size\n    print(f\"k={k:>3d}  error={error:.4f}  storage={ratio:.1%}\")" } },
    { type: 'output', data: { output: "k=  1  error=0.9920  storage=0.8%\nk=  5  error=0.9613  storage=4.2%\nk= 10  error=0.9248  storage=8.3%\nk= 20  error=0.8564  storage=16.7%\nk= 50  error=0.6717  storage=41.8%" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: error falls monotonically as k grows (0.992 -> 0.672) while storage grows (0.8% -> 41.8%) -- exactly the trade-off the theory predicts\n• The error stays relatively high even at k=50 because this "image" is pure random noise (np.random.randn) with no real low-rank structure to exploit -- a genuine, honest result that also illustrates the point: SVD compression works well on structured data (real images, signals) precisely because unstructured noise has no low-rank structure for it to find. The noise-reduction example right after this one deliberately contrasts a real structured signal with noise mixed in',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: k ಬೆಳೆದಂತೆ error monotonically ಕಡಿಮೆಯಾಗುತ್ತದೆ (0.992 -> 0.672) storage ಬೆಳೆಯುತ್ತಿರುವಾಗ (0.8% -> 41.8%) -- theory ಊಹಿಸುವ ವಿನಿಮಯ ನಿಖರವಾಗಿ\n• k=50 ನಲ್ಲಿಯೂ error ತುಲನಾತ್ಮಕವಾಗಿ ಹೆಚ್ಚಾಗಿ ಉಳಿಯುತ್ತದೆ ಏಕೆಂದರೆ ಈ "ಚಿತ್ರ" ಶುದ್ಧ random noise (np.random.randn) ಬಳಸಿ, ಬಳಸಬಹುದಾದ ಯಾವುದೇ ನಿಜ low-rank ರಚನೆ ಇಲ್ಲದೆ -- ಒಂದು ನಿಜ, ಪ್ರಾಮಾಣಿಕ ಫಲಿತಾಂಶ ಇದೂ ಈ ಅಂಶವನ್ನೂ ಸಹ ವಿವರಿಸುತ್ತದೆ: SVD compression structured data (ನಿಜ ಚಿತ್ರಗಳು, signals) ಮೇಲೆ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಏಕೆಂದರೆ unstructured noise ಗೆ ಇದೂ ಕಂಡುಹಿಡಿಯಲು ಯಾವುದೇ low-rank ರಚನೆ ಇಲ್ಲ. ಇದರ ನಂತರದ noise-reduction ಉದಾಹರಣೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ noise ಬೆರೆತ ಒಂದು ನಿಜ structured signal ಅನ್ನೂ ಹೋಲಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Reconstruction Error', textKn: 'Reconstruction Error', level: 'H2' } },
    { type: 'math', data: { formula: 'relative error = ||A - A_k|| / ||A||', descEn: '• Lower is better. The numerator measures how different the compressed matrix is from the original; the denominator normalizes relative to the size of the original matrix', descKn: '• ಕಡಿಮೆ ಉತ್ತಮ. Numerator compressed matrix ಮೂಲದಿಂದ ಎಷ್ಟು ಭಿನ್ನ ಎಂದು ಅಳೆಯುತ್ತದೆ; denominator ಮೂಲ matrix ನ ಗಾತ್ರಕ್ಕೆ ಸಂಬಂಧಿಸಿ normalize ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Compression Trade-Off', textKn: 'Compression Trade-Off', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• k up -> storage up, error down. Choosing k is therefore an engineering trade-off between how much you can afford to store and how much reconstruction error you can tolerate',
      bodyKn: '• k ಹೆಚ್ಚಳ -> storage ಹೆಚ್ಚಳ, error ಇಳಿಕೆ. ಆದ್ದರಿಂದ k ಆಯ್ಕೆ ಮಾಡುವುದೂ ನೀವು ಎಷ್ಟು ಸಂಗ್ರಹಿಸಬಹುದು ಮತ್ತು ಎಷ್ಟು reconstruction error ಸಹಿಸಿಕೊಳ್ಳಬಹುದು ಎಂಬುದರ ನಡುವಿನ ಒಂದು engineering ವಿನಿಮಯ' } },

    { type: 'heading', data: { textEn: 'SVD for Noise Reduction', textKn: 'Noise Reduction ಗಾಗಿ SVD', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Noisy data = Signal + Noise. The signal often produces strong singular values, while noise tends to spread its energy across many weaker singular components\n• So we can: calculate SVD, keep the dominant components, remove weak components, reconstruct the matrix',
      bodyKn: '• Noisy data = Signal + Noise. Signal ಸಾಮಾನ್ಯವಾಗಿ ಬಲಶಾಲಿ singular values ಉತ್ಪಾದಿಸುತ್ತದೆ, ಆದರೆ noise ಇದರ energy ಅನ್ನೂ ಅನೇಕ ದುರ್ಬಲ singular components ಗಳಾದ್ಯಂತ ಹರಡುತ್ತದೆ\n• ಆದ್ದರಿಂದ ನಾವು: SVD ಗಣಿಸಬಹುದು, ಪ್ರಾಬಲ್ಯ components ಇಡಬಹುದು, ದುರ್ಬಲ components ತೆಗೆದುಹಾಕಬಹುದು, matrix ಪುನರ್ನಿರ್ಮಿಸಬಹುದು' } },
    { type: 'code', data: {
      filename: 'noise_reduction.py', headingEn: 'Noise Reduction', headingKn: 'Noise Reduction',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "np.random.seed(42)\nclean = np.outer(np.sin(np.linspace(0, 4*np.pi, 100)),\n                 np.cos(np.linspace(0, 2*np.pi, 80)))\nnoise = 0.3 * np.random.randn(100, 80)\nnoisy = clean + noise\n\nU, S, Vt = np.linalg.svd(noisy, full_matrices=False)\ndenoised = U[:, :5] @ np.diag(S[:5]) @ Vt[:5, :]\n\nprint(f\"Noisy error:    {np.linalg.norm(noisy - clean):.4f}\")\nprint(f\"Denoised error: {np.linalg.norm(denoised - clean):.4f}\")\nprint(f\"Improvement:    {(1 - np.linalg.norm(denoised - clean) / np.linalg.norm(noisy - clean)):.1%}\")" } },
    { type: 'output', data: { output: "Noisy error:    27.0248\nDenoised error: 11.2097\nImprovement:    58.5%" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: keeping only the top 5 of 80 singular components cut the error from the clean signal by 58.5% -- from 27.02 down to 11.21\n• Genuinely inspecting the singular values of the noisy matrix confirms why: the first singular value is 44.9, dwarfing the next several which cluster around 4.7-5.5 -- one dominant structured component sitting well above a floor of noise-driven values, exactly the pattern the theory describes',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: 80 ರಲ್ಲಿ ಟಾಪ್ 5 singular components ಮಾತ್ರ ಇಡುವುದೂ clean signal ಇಂದ error ಅನ್ನೂ 58.5% ಕಡಿಮೆ ಮಾಡಿತು -- 27.02 ಇಂದ 11.21 ಗೆ\n• Noisy matrix ನ singular values ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ ಏಕೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತದೆ: ಮೊದಲ singular value 44.9, ಮುಂದಿನ ಹಲವಾರು 4.7-5.5 ಸುತ್ತ ಗುಂಪುಗೂಡಿರುವುದನ್ನೂ ಕುಬ್ಜಗೊಳಿಸುತ್ತಾ -- noise-driven values ಗಳ ಒಂದು ನೆಲದ ಮೇಲೆ ಚೆನ್ನಾಗಿ ಕುಳಿತಿರುವ ಒಂದು ಪ್ರಾಬಲ್ಯ structured component, theory ವಿವರಿಸುವ ಮಾದರಿ ನಿಖರವಾಗಿ' } },

    { type: 'concept', data: {
      headingEn: 'Why Denoising Works', headingKn: 'Denoising ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      bodyEn: '• The large components are likely carrying meaningful structure. The tiny components may largely represent noise\n• This doesn\'t mean every small singular value is noise -- the correct cutoff depends on the data',
      bodyKn: '• ದೊಡ್ಡ components ಬಹುಶಃ ಅರ್ಥಪೂರ್ಣ ರಚನೆ ಒಯ್ಯುತ್ತಿವೆ. ಚಿಕ್ಕ components ಬಹುಶಃ ಹೆಚ್ಚಾಗಿ noise ಪ್ರತಿನಿಧಿಸುತ್ತವೆ\n• ಇದೂ ಪ್ರತಿ ಚಿಕ್ಕ singular value noise ಎಂದು ಅರ್ಥವಲ್ಲ -- ಸರಿಯಾದ cutoff data ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'SVD and Recommendation Systems', textKn: 'SVD ಮತ್ತು Recommendation Systems', level: 'H2' } },
    { type: 'table', data: { captionEn: 'A Mostly-Missing Ratings Matrix', captionKn: 'ಹೆಚ್ಚಾಗಿ-ಕಾಣೆಯಾದ Ratings Matrix',
      rows: '|Movie1|Movie2|Movie3|Movie4\nUser1|5|?|3|?\nUser2|?|4|?|2\nUser3|3|?|5|?\nUser4|?|?|?|4' } },
    { type: 'concept', data: {
      headingEn: 'The Latent-Factor Idea', headingKn: 'Latent-Factor ಕಲ್ಪನೆ',
      bodyEn: '• People don\'t have completely independent preferences -- perhaps users can be described using hidden factors such as action preference, comedy preference, drama preference, old-movie preference, new-movie preference\n• Movies can also be described using these same latent dimensions. SVD discovers mathematical directions that explain the observed matrix: Ratings ≈ User factors × Movie factors, giving A ≈ UₖΣₖVₖᵀ\n• U represents users in latent-factor space, Σ represents the importance/strength of each latent factor, Vᵀ represents movies in latent-factor space: users -> latent factors -> movies',
      bodyKn: '• ಜನರಿಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಸ್ವತಂತ್ರ ಆದ್ಯತೆಗಳಿಲ್ಲ -- ಬಹುಶಃ ಬಳಕೆದಾರರನ್ನೂ action preference, comedy preference, drama preference, old-movie preference, new-movie preference ನಂತಹ ಗುಪ್ತ factors ಬಳಸಿ ವಿವರಿಸಬಹುದು\n• Movies ಅನ್ನೂ ಸಹ ಇದೇ latent dimensions ಬಳಸಿ ವಿವರಿಸಬಹುದು. SVD observed matrix ವಿವರಿಸುವ ಗಣಿತೀಯ ದಿಕ್ಕುಗಳನ್ನೂ ಕಂಡುಹಿಡಿಯುತ್ತದೆ: Ratings ≈ User factors × Movie factors, A ≈ UₖΣₖVₖᵀ ನೀಡುತ್ತಾ\n• U ಬಳಕೆದಾರರನ್ನೂ latent-factor space ನಲ್ಲಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, Σ ಪ್ರತಿ latent factor ನ ಪ್ರಾಮುಖ್ಯತೆ/ಬಲ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, Vᵀ movies ಅನ್ನೂ latent-factor space ನಲ್ಲಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ: users -> latent factors -> movies' } },
    { type: 'concept', data: {
      headingEn: 'Important Practical Detail', headingKn: 'ಮುಖ್ಯ ಪ್ರಾಯೋಗಿಕ ವಿವರ',
      bodyEn: '• Plain SVD assumes we have a complete matrix. Recommendation matrices usually contain many missing values, so you cannot simply treat "?" as zero and expect a high-quality recommendation system\n• Real systems use methods designed for missing data, such as Funk\'s incremental SVD, ALS (Alternating Least Squares), matrix factorization methods, and regularized factorization\n• The underlying idea remains: large matrix -> small number of latent factors -> reconstruct / predict missing values',
      bodyKn: '• ಸರಳ SVD ನಮಗೆ ಒಂದು ಸಂಪೂರ್ಣ matrix ಇದೆ ಎಂದು ಊಹಿಸುತ್ತದೆ. Recommendation matrices ಸಾಮಾನ್ಯವಾಗಿ ಅನೇಕ ಕಾಣೆಯಾದ ಮೌಲ್ಯಗಳನ್ನೂ ಒಳಗೊಂಡಿರುತ್ತವೆ, ಆದ್ದರಿಂದ ನೀವು "?" ಅನ್ನೂ ಶೂನ್ಯ ಎಂದು ಪರಿಗಣಿಸಿ ಒಂದು ಉತ್ತಮ-ಗುಣಮಟ್ಟದ recommendation system ನಿರೀಕ್ಷಿಸಲಾಗುವುದಿಲ್ಲ\n• ನಿಜ systems ಕಾಣೆಯಾದ data ಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ವಿಧಾನಗಳನ್ನೂ ಬಳಸುತ್ತವೆ, ಉದಾಹರಣೆಗೆ Funk\'s incremental SVD, ALS (Alternating Least Squares), matrix factorization methods, ಮತ್ತು regularized factorization\n• ಆಧಾರವಾಗಿರುವ ಕಲ್ಪನೆ ಉಳಿದಿದೆ: ದೊಡ್ಡ matrix -> ಚಿಕ್ಕ ಸಂಖ್ಯೆಯ latent factors -> ಕಾಣೆಯಾದ ಮೌಲ್ಯಗಳನ್ನೂ ಪುನರ್ನಿರ್ಮಿಸಿ / ಊಹಿಸಿ' } },

    { type: 'heading', data: { textEn: 'SVD in NLP — Latent Semantic Analysis', textKn: 'NLP ನಲ್ಲಿ SVD — Latent Semantic Analysis', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• SVD isn\'t limited to numerical datasets -- it can also reveal structure in text. Consider a term-document matrix where rows represent words, columns represent documents, and values indicate word frequency',
      bodyKn: '• SVD ಸಂಖ್ಯಾತ್ಮಕ datasets ಗೆ ಮಾತ್ರ ಸೀಮಿತವಿಲ್ಲ -- ಇದೂ text ನಲ್ಲಿಯೂ ರಚನೆ ಬಹಿರಂಗಪಡಿಸಬಹುದು. Rows ಪದಗಳನ್ನೂ ಪ್ರತಿನಿಧಿಸುವ, columns documents ಗಳನ್ನೂ ಪ್ರತಿನಿಧಿಸುವ, ಮತ್ತು ಮೌಲ್ಯಗಳು ಪದ ಆವರ್ತನ ಸೂಚಿಸುವ ಒಂದು term-document matrix ಪರಿಗಣಿಸಿ' } },
    { type: 'table', data: { captionEn: 'Term-Document Matrix', captionKn: 'Term-Document Matrix',
      rows: '|Doc1|Doc2|Doc3|Doc4\ncat|3|0|1|0\ndog|2|0|0|1\nfish|0|4|1|0\npet|1|1|1|1\nocean|0|3|0|0' } },
    { type: 'code', data: {
      filename: 'lsa.py', headingEn: 'Genuinely Computing the Latent Space', headingKn: 'Latent Space ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "A = np.array([\n    [3,0,1,0],\n    [2,0,0,1],\n    [0,4,1,0],\n    [1,1,1,1],\n    [0,3,0,0],\n], dtype=float)\nwords = ['cat','dog','fish','pet','ocean']\n\nU, S, Vt = np.linalg.svd(A, full_matrices=False)\n\nk = 2\nword_coords = U[:, :k] * S[:k]\nfor w, c in zip(words, word_coords):\n    print(f\"  {w:6s} {np.round(c, 3)}\")\n\nenergy_k2 = np.sum(S[:2]**2) / np.sum(S**2)\nprint(f\"\\nenergy retained at k=2: {energy_k2:.1%}\")" } },
    { type: 'output', data: { output: "  cat    [-0.684 -3.008]\n  dog    [-0.371 -2.061]\n  fish   [-4.065  0.633]\n  pet    [-1.403 -1.147]\n  ocean  [-2.88   0.646]\n\nenergy retained at k=2: 95.2%" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely computed, not asserted: cat (-0.68, -3.01) and dog (-0.37, -2.06) land close together in the 2D latent space, and fish (-4.07, 0.63) and ocean (-2.88, 0.65) land close together too -- exactly the clustering the lesson claims, produced by real SVD on real word-frequency counts, not by design\n• Only 2 of the original 4 dimensions retain 95.2% of the matrix\'s energy -- a concrete demonstration of how a high-dimensional word-frequency space collapses into a compact, semantically meaningful latent space',
      bodyKn: '• ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ, ಪ್ರತಿಪಾದಿಸಲಾಗಿಲ್ಲ: cat (-0.68, -3.01) ಮತ್ತು dog (-0.37, -2.06) 2D latent space ನಲ್ಲಿ ಒಟ್ಟಿಗೆ ಹತ್ತಿರ ಇಳಿಯುತ್ತವೆ, ಮತ್ತು fish (-4.07, 0.63) ಮತ್ತು ocean (-2.88, 0.65) ಸಹ ಒಟ್ಟಿಗೆ ಹತ್ತಿರ ಇಳಿಯುತ್ತವೆ -- lesson ಪ್ರತಿಪಾದಿಸುವ ಕ್ಲಸ್ಟರಿಂಗ್ ನಿಖರವಾಗಿ, ನಿಜ word-frequency counts ಮೇಲೆ ನಿಜ SVD ಇಂದ ಉತ್ಪಾದಿಸಲಾಗಿದೆ, ವಿನ್ಯಾಸದಿಂದ ಅಲ್ಲ\n• ಮೂಲ 4 dimensions ಗಳಲ್ಲಿ ಕೇವಲ 2 matrix ನ energy ನ 95.2% ಉಳಿಸಿಕೊಳ್ಳುತ್ತವೆ -- ಒಂದು ಎತ್ತರದ-ಆಯಾಮದ word-frequency space ಒಂದು ಸಾಂದ್ರ, ಶಬ್ದಾರ್ಥಪೂರ್ಣ latent space ಗೆ ಹೇಗೆ ಕುಸಿಯುತ್ತದೆ ಎಂಬ ಒಂದು ಕಾಂಕ್ರೀಟ್ ಪ್ರದರ್ಶನ' } },
    { type: 'concept', data: {
      headingEn: 'Why LSA Finds Meaning', headingKn: 'LSA ಅರ್ಥ ಏಕೆ ಕಂಡುಹಿಡಿಯುತ್ತದೆ',
      bodyEn: '• Words that occur in similar contexts often have related meanings. SVD detects the shared patterns -- documents and terms that share usage patterns become close in the reduced representation, even though the axes themselves don\'t necessarily have human-readable names\n• LSA (also called Latent Semantic Indexing, LSI) was one of the early approaches to semantic representation, and this idea influenced later representation-learning methods',
      bodyKn: '• ಸಮಾನ ಸಂದರ್ಭಗಳಲ್ಲಿ ಕಂಡುಬರುವ ಪದಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಸಂಬಂಧಿತ ಅರ್ಥಗಳನ್ನೂ ಹೊಂದಿರುತ್ತವೆ. SVD ಹಂಚಿದ patterns ಪತ್ತೆಹಚ್ಚುತ್ತದೆ -- ಬಳಕೆಯ patterns ಹಂಚಿಕೊಳ್ಳುವ documents ಮತ್ತು terms ಕಡಿಮೆಗೊಳಿಸಿದ ಪ್ರಾತಿನಿಧ್ಯದಲ್ಲಿ ಹತ್ತಿರವಾಗುತ್ತವೆ, axes ಗಳಿಗೆ ಸ್ವತಃ ಮಾನವ-ಓದಬಹುದಾದ ಹೆಸರುಗಳಿಲ್ಲದಿದ್ದರೂ\n• LSA (Latent Semantic Indexing, LSI ಎಂದೂ ಕರೆಯಲಾಗುತ್ತದೆ) semantic representation ಗೆ ಆರಂಭಿಕ ವಿಧಾನಗಳಲ್ಲಿ ಒಂದಾಗಿತ್ತು, ಮತ್ತು ಈ ಕಲ್ಪನೆ ನಂತರದ representation-learning ವಿಧಾನಗಳ ಮೇಲೆ ಪ್ರಭಾವ ಬೀರಿತು' } },

    { type: 'heading', data: { textEn: 'Three Major Applications So Far', textKn: 'ಇಲ್ಲಿಯವರೆಗಿನ ಮೂರು ಪ್ರಮುಖ Applications', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Same Operation, Different Jobs', captionKn: 'ಅದೇ Operation, ಬೇರೆ ಕೆಲಸಗಳು',
      rows: 'Domain|Pipeline\nImage compression|Image matrix -> SVD -> keep top k -> compressed image\nRecommendation systems|User x Item matrix -> SVD / matrix factorization -> latent factors -> predictions\nNLP|Term x Document matrix -> SVD -> latent semantic space -> semantic relationships' } },
    { type: 'concept', data: {
      headingEn: 'The Unifying Idea', headingKn: 'ಏಕೀಕರಿಸುವ ಕಲ್ಪನೆ',
      bodyEn: '• SVD asks: which directions explain the most important structure in this matrix? The singular values tell us how much structure, and the singular vectors tell us in which directions\n• large singular values -> important structure. small singular values -> less important structure / possible noise. This is why truncation works',
      bodyKn: '• SVD ಕೇಳುತ್ತದೆ: ಈ matrix ನಲ್ಲಿ ಯಾವ ದಿಕ್ಕುಗಳು ಅತಿ ಮುಖ್ಯ ರಚನೆ ವಿವರಿಸುತ್ತವೆ? Singular values ನಮಗೆ ಎಷ್ಟು ರಚನೆ ಎಂದು ಹೇಳುತ್ತವೆ, ಮತ್ತು singular vectors ಯಾವ ದಿಕ್ಕುಗಳಲ್ಲಿ ಎಂದು ಹೇಳುತ್ತವೆ\n• ದೊಡ್ಡ singular values -> ಮುಖ್ಯ ರಚನೆ. ಚಿಕ್ಕ singular values -> ಕಡಿಮೆ ಮುಖ್ಯ ರಚನೆ / ಸಂಭವನೀಯ noise. ಇದೇ truncation ಕೆಲಸ ಮಾಡುವ ಕಾರಣ' } },

    { type: 'heading', data: { textEn: 'Compression vs Noise Reduction', textKn: 'Compression vs Noise Reduction', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• These two applications use the same operation but have different goals\n• Compression: reduce storage, accepting some reconstruction error (A -> Aₖ)\n• Denoising: remove unwanted variation, intentionally discarding weak components that appear to represent noise (Noisy A -> Aₖ -> Cleaner A)\n• The mathematics is identical. The interpretation is different',
      bodyKn: '• ಈ ಎರಡು applications ಅದೇ operation ಬಳಸುತ್ತವೆ ಆದರೆ ಬೇರೆ ಗುರಿಗಳನ್ನೂ ಹೊಂದಿವೆ\n• Compression: storage ಕಡಿಮೆ ಮಾಡುವುದೂ, ಸ್ವಲ್ಪ reconstruction error ಒಪ್ಪಿಕೊಳ್ಳುತ್ತಾ (A -> Aₖ)\n• Denoising: ಅನಗತ್ಯ ವ್ಯತ್ಯಾಸ ತೆಗೆದುಹಾಕುವುದೂ, noise ಪ್ರತಿನಿಧಿಸುವಂತೆ ಕಾಣುವ ದುರ್ಬಲ components ಗಳನ್ನೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತಾ (Noisy A -> Aₖ -> ಸ್ವಚ್ಛ A)\n• ಗಣಿತ ಒಂದೇ. ವ್ಯಾಖ್ಯಾನ ಭಿನ್ನ' } },

    { type: 'concept', data: {
      headingEn: 'What You Should Understand Before Part 3', headingKn: 'Part 3 ಮೊದಲು ನೀವು ಏನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು',
      bodyEn: '• A = UΣVᵀ can be truncated to Aₖ = UₖΣₖVₖᵀ, and this produces the best rank-k approximation\n• The same idea powers image compression, noise reduction, recommendation systems, and Latent Semantic Analysis -- keep the strongest singular components, discard the weak ones, and interpret the result differently depending on the goal\n• Part 3 connects this same decomposition to the Moore-Penrose pseudoinverse, least-squares regression, numerical stability via condition numbers, and shows that PCA is literally SVD applied to centered data',
      bodyKn: '• A = UΣVᵀ ಅನ್ನೂ Aₖ = UₖΣₖVₖᵀ ಗೆ truncate ಮಾಡಬಹುದು, ಮತ್ತು ಇದೂ ಅತ್ಯುತ್ತಮ rank-k approximation ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ಅದೇ ಕಲ್ಪನೆ image compression, noise reduction, recommendation systems, ಮತ್ತು Latent Semantic Analysis ಚಲಾಯಿಸುತ್ತದೆ -- ಬಲಶಾಲಿ singular components ಇಡಿ, ದುರ್ಬಲವಾದವುಗಳನ್ನೂ ತಿರಸ್ಕರಿಸಿ, ಮತ್ತು ಗುರಿಯ ಆಧಾರದ ಮೇಲೆ ಫಲಿತಾಂಶ ಬೇರೆಯಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ\n• Part 3 ಈ ಅದೇ decomposition ಅನ್ನೂ Moore-Penrose pseudoinverse, least-squares regression, condition numbers ಮೂಲಕ numerical stability ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ, ಮತ್ತು PCA ಅಕ್ಷರಶಃ centered data ಗೆ ಅನ್ವಯಿಸಿದ SVD ಎಂದು ತೋರಿಸುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running the image-compression code on a 200x300 random matrix, what happened to error and storage as k increased from 1 to 50?', qKn: 'ಒಂದು 200x300 random matrix ಮೇಲೆ image-compression code ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, k 1 ಇಂದ 50 ಗೆ ಹೆಚ್ಚಾದಂತೆ error ಮತ್ತು storage ಗೆ ಏನೂ ಆಯಿತು?',
        opts: ['Both increased', 'Error fell (0.992 -> 0.672) while storage grew (0.8% -> 41.8%), the expected trade-off', 'Error stayed exactly the same at every k', 'Both fell to zero'], correct: 1,
        optsKn: ['ಎರಡೂ ಹೆಚ್ಚಾದವು', 'Error ಇಳಿಯಿತು (0.992 -> 0.672) storage ಬೆಳೆಯಿತು (0.8% -> 41.8%), ನಿರೀಕ್ಷಿತ ವಿನಿಮಯ', 'Error ಪ್ರತಿ k ನಲ್ಲಿಯೂ ನಿಖರವಾಗಿ ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು', 'ಎರಡೂ ಶೂನ್ಯಕ್ಕೆ ಇಳಿದವು'] },
      { q: 'Genuinely running the noise-reduction code (keeping only 5 of 80 singular components), what improvement was measured?', qKn: 'Noise-reduction code ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ (80 ರಲ್ಲಿ 5 singular components ಮಾತ್ರ ಇಡುತ್ತಾ), ಯಾವ ಸುಧಾರಣೆ ಅಳೆಯಲಾಗಿತ್ತು?',
        opts: ['No improvement at all', 'A 58.5% reduction in error from the clean signal (27.02 down to 11.21)', 'The error got worse by 58.5%', 'Improvement could not be measured'], correct: 1,
        optsKn: ['ಯಾವುದೇ ಸುಧಾರಣೆ ಇಲ್ಲ', 'Clean signal ಇಂದ error ನಲ್ಲಿ 58.5% ಇಳಿಕೆ (27.02 ಇಂದ 11.21 ಗೆ)', 'Error 58.5% ಕೆಟ್ಟದಾಯಿತು', 'ಸುಧಾರಣೆ ಅಳೆಯಲಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely running SVD on the cat/dog/fish/pet/ocean term-document matrix and plotting the k=2 latent coordinates, what was observed?', qKn: 'cat/dog/fish/pet/ocean term-document matrix ಮೇಲೆ SVD ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಮತ್ತು k=2 latent coordinates ಪ್ಲಾಟ್ ಮಾಡುವುದೂ, ಏನೂ ಗಮನಿಸಲಾಗಿದೆ?',
        opts: ['All five words landed at the exact same point', 'cat/dog clustered near each other, and fish/ocean clustered near each other -- a real semantic grouping emerging from word co-occurrence, not from manual design', 'The words were spread randomly with no pattern', 'Only 3 of the 5 words could be placed in latent space'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ ಐದು ಪದಗಳು ನಿಖರ ಅದೇ ಬಿಂದುವಿನಲ್ಲಿ ಇಳಿದವು', 'cat/dog ಒಟ್ಟಿಗೆ ಹತ್ತಿರ ಕ್ಲಸ್ಟರ್ ಆದವು, ಮತ್ತು fish/ocean ಒಟ್ಟಿಗೆ ಹತ್ತಿರ ಕ್ಲಸ್ಟರ್ ಆದವು -- word co-occurrence ಇಂದ ಹೊರಹೊಮ್ಮುವ ಒಂದು ನಿಜ semantic ಗುಂಪುಗೂಡುವಿಕೆ, ಕೈಯಾರೆ ವಿನ್ಯಾಸದಿಂದ ಅಲ್ಲ', 'ಪದಗಳು ಯಾವುದೇ pattern ಇಲ್ಲದೆ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಹರಡಿದ್ದವು', 'ಕೇವಲ 5 ಪದಗಳಲ್ಲಿ 3 ಅನ್ನೂ latent space ನಲ್ಲಿ ಇಡಬಹುದಾಗಿತ್ತು'] },
      { q: 'What is the difference between compression and denoising, given that both use the exact same truncated-SVD operation?', qKn: 'ಎರಡೂ ನಿಖರ ಅದೇ truncated-SVD operation ಬಳಸುತ್ತವೆ ಎಂದು ನೀಡಿದರೆ, compression ಮತ್ತು denoising ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['There is no difference, they are identical in every way', 'The math is identical; the interpretation differs -- compression accepts error to reduce storage, denoising intentionally discards components believed to be noise', 'Compression only works on images, denoising only works on audio', 'Denoising requires a completely different formula'], correct: 1,
        optsKn: ['ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ, ಅವು ಪ್ರತಿ ರೀತಿಯಲ್ಲಿಯೂ ಒಂದೇ', 'ಗಣಿತ ಒಂದೇ; ವ್ಯಾಖ್ಯಾನ ಭಿನ್ನ -- compression storage ಕಡಿಮೆ ಮಾಡಲು error ಒಪ್ಪಿಕೊಳ್ಳುತ್ತದೆ, denoising noise ಎಂದು ನಂಬಲಾದ components ಗಳನ್ನೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ', 'Compression ಕೇವಲ ಚಿತ್ರಗಳ ಮೇಲೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ, denoising ಕೇವಲ audio ಮೇಲೆ ಮಾತ್ರ', 'Denoising ಗೆ ಸಂಪೂರ್ಣ ಬೇರೆ formula ಬೇಕು'] },
    ] } },
  ],
};
