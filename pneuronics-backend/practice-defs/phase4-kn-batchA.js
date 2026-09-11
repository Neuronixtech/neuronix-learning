const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations

const m14 = '6a4febd4795ffc51a8bf26d3';
const m15 = '6a4febd4795ffc51a8bf26d6';
const m16 = '6a4febd4795ffc51a8bf26d9';
const m17 = '6a4febd4795ffc51a8bf26dc';
const m18 = '6a4febd4795ffc51a8bf26df';

const l14_1 = '6a4ff1d6b9a3b0965f8c0483';
const l14_2 = '6a4ff6d5c66262c169ca8edc';
const l14_3 = '6a4ff896cf80925be05fba0b';
const l15_1 = '6a4ff9a40668ae577c510c56';
const l15_2 = '6a4ffb7916db1e4d073394ac';
const l16_1 = '6a510e1cd7fbd4c77db27e05';
const l16_2 = '6a510e1e4efa69c5c07bcea9';
const l17_1 = '6a511354184d7db1434db536';
const l17_2 = '6a511570de4d13a730ae143b';
const l18_1 = '6a51188193ba69fcf1acc393';

module.exports = [
  // Module 14, Lesson 1
  { phaseId, moduleId: m14, lessonId: l14_1, order: 0, difficulty: 'beginner',
    title: 'Vector Arithmetic and Normalization',
    titleKn: 'Vector Arithmetic ಮತ್ತು Normalization',
    problem: "Given vectors a = [2, -1, 3] and b = [-1, 4, 0]:\n\n1. Compute a + b\n2. Compute 2a − b\n3. Compute the L2 norm (magnitude) of a: ||a|| = sqrt(Σ aᵢ²)\n4. Normalize a to a unit vector: a_hat = a / ||a||\n5. Verify ||a_hat|| = 1\n\nWrite pure Python functions (no NumPy) for each operation and test them.",
    problemKn: "vectors a = [2, -1, 3] ಮತ್ತು b = [-1, 4, 0] ನೀಡಿದಾಗ:\n\n1. a + b ಲೆಕ್ಕಹಾಕಿ\n2. 2a − b ಲೆಕ್ಕಹಾಕಿ\n3. a ya L2 norm (magnitude) ಲೆಕ್ಕಹಾಕಿ: ||a|| = sqrt(Σ aᵢ²)\n4. a ಅನ್ನೂ ಒಂದು unit vector ಗೆ normalize ಮಾಡಿ: a_hat = a / ||a||\n5. ||a_hat|| = 1 ಎಂದು ಖಚಿತಪಡಿಸಿ\n\nಪ್ರತಿ operation ಗೆ pure Python functions ಬರೆಯಿರಿ (NumPy ಇಲ್ಲದೆ) ಮತ್ತು ಅವುಗಳನ್ನೂ ಪರೀಕ್ಷಿಸಿ." },
  { phaseId, moduleId: m14, lessonId: l14_1, order: 1, difficulty: 'intermediate',
    title: 'Word Vector Arithmetic',
    titleKn: 'Word Vector Arithmetic',
    problem: "Word embeddings encode meaning as vectors:\n  king  = [0.9, 0.1, 0.2]\n  queen = [0.8, 0.9, 0.2]\n  man   = [0.9, 0.1, 0.1]\n  woman = [0.8, 0.9, 0.1]\n\n1. Compute king − man + woman\n2. Compute Euclidean distance from your result to queen\n3. Compute cosine similarity between your result and queen: dot(a,b)/(||a||×||b||)\n4. Does king − man + woman ≈ queen? What does this tell you about how embeddings encode relationships?\n5. Write Python to verify (no NumPy).",
    problemKn: "Word embeddings ಅರ್ಥವನ್ನೂ vectors ಆಗಿ encode ಮಾಡುತ್ತವೆ:\n  king  = [0.9, 0.1, 0.2]\n  queen = [0.8, 0.9, 0.2]\n  man   = [0.9, 0.1, 0.1]\n  woman = [0.8, 0.9, 0.1]\n\n1. king − man + woman ಲೆಕ್ಕಹಾಕಿ\n2. ನಿಮ್ಮ ಫಲಿತಾಂಶ ಇಂದ queen ಗೆ Euclidean distance ಲೆಕ್ಕಹಾಕಿ\n3. ನಿಮ್ಮ ಫಲಿತಾಂಶ ಮತ್ತು queen ನಡುವೆ cosine similarity ಲೆಕ್ಕಹಾಕಿ\n4. king − man + woman ≈ queen ಆಗಿದೆಯೇ? ಇದು embeddings ಸಂಬಂಧಗಳನ್ನೂ ಹೇಗೆ encode ಮಾಡುತ್ತವೆ ಎಂಬುದರ ಬಗ್ಗೆ ಏನನ್ನೂ ಹೇಳುತ್ತದೆ?\n5. ಪರಿಶೀಲಿಸಲು Python ಬರೆಯಿರಿ (NumPy ಇಲ್ಲದೆ)." },
  { phaseId, moduleId: m14, lessonId: l14_1, order: 2, difficulty: 'advanced',
    title: 'Direction vs Magnitude',
    titleKn: 'Direction vs Magnitude',
    problem: "Two documents as term-frequency vectors (vocab: [AI, ML, food, sport]):\n  doc_a = [3, 1, 0, 2]\n  doc_b = [6, 2, 0, 4]  ← same document, twice as long\n\n1. Euclidean distance between doc_a and doc_b\n2. Normalize both. Euclidean distance of normalized versions.\n3. Cosine similarity of doc_a and doc_b\n4. Euclidean says they're far; cosine says identical. Which is correct for topic similarity?\n5. A search engine uses cosine similarity for this reason. Implement a search_rank(query, corpus) function that returns documents sorted by cosine similarity to the query.",
    problemKn: "term-frequency vectors ಆಗಿ ಎರಡು documents (vocab: [AI, ML, food, sport]):\n  doc_a = [3, 1, 0, 2]\n  doc_b = [6, 2, 0, 4]  ← ಅದೇ document, ಎರಡು ಪಟ್ಟು ಉದ್ದ\n\n1. doc_a ಮತ್ತು doc_b ನಡುವೆ Euclidean distance\n2. ಎರಡನ್ನೂ normalize ಮಾಡಿ. normalized versions ya Euclidean distance.\n3. doc_a ಮತ್ತು doc_b ya cosine similarity\n4. Euclidean ಅವು ದೂರ ಎಂದು ಹೇಳುತ್ತದೆ; cosine ಒಂದೇ ಎಂದು ಹೇಳುತ್ತದೆ. topic similarity ಗೆ ಯಾವುದೂ ಸರಿ?\n5. ಈ ಕಾರಣಕ್ಕಾಗಿ ಒಂದು search engine cosine similarity ಬಳಸುತ್ತದೆ. query ಗೆ cosine similarity ಪ್ರಕಾರ ಜೋಡಿಸಿದ documents ಹಿಂತಿರುಗಿಸುವ ಒಂದು search_rank(query, corpus) function ಜಾರಿಗೊಳಿಸಿ." },

  // Module 14, Lesson 2
  { phaseId, moduleId: m14, lessonId: l14_2, order: 0, difficulty: 'beginner',
    title: 'Matrix Multiplication by Hand',
    titleKn: 'Matrix Multiplication ಅನ್ನೂ ಕೈಯಾರೆ',
    problem: "A = [[1,2],[3,4]]  B = [[5,0],[1,3]]\n\n1. Compute A × B (show the dot product for each cell)\n2. Compute B × A\n3. Is A×B == B×A? What does this mean for neural network layer ordering?\n4. Compute A² = A × A\n5. Write a matrix_multiply(A, B) function in pure Python and verify your answers.",
    problemKn: "A = [[1,2],[3,4]]  B = [[5,0],[1,3]]\n\n1. A × B ಲೆಕ್ಕಹಾಕಿ (ಪ್ರತಿ cell ಗೆ dot product ತೋರಿಸಿ)\n2. B × A ಲೆಕ್ಕಹಾಕಿ\n3. A×B == B×A ಆಗಿದೆಯೇ? ಇದು neural network layer ordering ಗೆ ಏನನ್ನೂ ಅರ್ಥೈಸುತ್ತದೆ?\n4. A² = A × A ಲೆಕ್ಕಹಾಕಿ\n5. pure Python ನಲ್ಲಿ ಒಂದು matrix_multiply(A, B) function ಬರೆಯಿರಿ ಮತ್ತು ನಿಮ್ಮ ಉತ್ತರಗಳನ್ನೂ ಪರಿಶೀಲಿಸಿ." },
  { phaseId, moduleId: m14, lessonId: l14_2, order: 1, difficulty: 'intermediate',
    title: 'Neural Network Forward Pass',
    titleKn: 'Neural Network Forward Pass',
    problem: "Linear layer: W (2×3), b (2,), input X (2×3 batch)\n  W = [[0.5, -0.3, 0.8],[0.1, 0.9, -0.2]]\n  b = [0.1, -0.1]\n  X = [[1.0, 0.5, -1.0],[0.0, 2.0, 0.5]]\n\n1. Compute Y = X × Wᵀ + b  (shape 2×2)\n2. Apply ReLU: clip negatives to 0\n3. Write pure Python code for this forward pass\n4. What does each element Y[i][j] represent — which sample, which neuron?\n5. How would you add a second layer of shape (1×2) to produce a single output per sample?",
    problemKn: "Linear layer: W (2×3), b (2,), input X (2×3 batch)\n  W = [[0.5, -0.3, 0.8],[0.1, 0.9, -0.2]]\n  b = [0.1, -0.1]\n  X = [[1.0, 0.5, -1.0],[0.0, 2.0, 0.5]]\n\n1. Y = X × Wᵀ + b ಲೆಕ್ಕಹಾಕಿ (shape 2×2)\n2. ReLU ಅನ್ವಯಿಸಿ: negatives ಅನ್ನೂ 0 ಗೆ clip ಮಾಡಿ\n3. ಈ forward pass ಗೆ pure Python code ಬರೆಯಿರಿ\n4. ಪ್ರತಿ element Y[i][j] ಏನನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ — ಯಾವ sample, ಯಾವ neuron?\n5. ಪ್ರತಿ sample ಗೆ ಒಂದೇ output ಉತ್ಪಾದಿಸಲು (1×2) shape ya ಒಂದು ಎರಡನೇ layer ಅನ್ನೂ ಹೇಗೆ ಸೇರಿಸುತ್ತೀರಿ?" },
  { phaseId, moduleId: m14, lessonId: l14_2, order: 2, difficulty: 'advanced',
    title: 'Transformation Composition',
    titleKn: 'Transformation Composition',
    problem: "Scale 2×: S = [[2,0],[0,2]]   Rotate 90° CCW: R = [[0,-1],[1,0]]\n\n1. Apply S then R to p=[1,0]: compute (R × S) × p\n2. Apply R then S to p=[1,0]: compute (S × R) × p\n3. Are results the same? Why does order matter in matrix multiplication?\n4. To encode translation [tx, ty] into a matrix, use homogeneous coordinates (3×3 matrix):\n   T = [[1,0,tx],[0,1,ty],[0,0,1]]\n   Extend p to [1,0,1] and compute T × p. Does it translate correctly?\n5. Write a compose(*transforms) function that multiplies a sequence of 3×3 homogeneous transform matrices.",
    problemKn: "Scale 2×: S = [[2,0],[0,2]]   Rotate 90° CCW: R = [[0,-1],[1,0]]\n\n1. p=[1,0] ಗೆ S ನಂತರ R ಅನ್ವಯಿಸಿ: (R × S) × p ಲೆಕ್ಕಹಾಕಿ\n2. p=[1,0] ಗೆ R ನಂತರ S ಅನ್ವಯಿಸಿ: (S × R) × p ಲೆಕ್ಕಹಾಕಿ\n3. ಫಲಿತಾಂಶಗಳು ಒಂದೇ ಆಗಿವೆಯೇ? matrix multiplication ನಲ್ಲಿ order ಏಕೆ ಮುಖ್ಯ?\n4. [tx, ty] translation ಅನ್ನೂ ಒಂದು matrix ಗೆ encode ಮಾಡಲು, homogeneous coordinates (3×3 matrix) ಬಳಸಿ:\n   T = [[1,0,tx],[0,1,ty],[0,0,1]]\n   p ಅನ್ನೂ [1,0,1] ಗೆ ವಿಸ್ತರಿಸಿ ಮತ್ತು T × p ಲೆಕ್ಕಹಾಕಿ. ಇದು ಸರಿಯಾಗಿ translate ಮಾಡುತ್ತದೆಯೇ?\n5. 3×3 homogeneous transform matrices ya ಒಂದು ಅನುಕ್ರಮವನ್ನೂ ಗುಣಿಸುವ compose(*transforms) function ಬರೆಯಿರಿ." },

  // Module 14, Lesson 3
  { phaseId, moduleId: m14, lessonId: l14_3, order: 0, difficulty: 'beginner',
    title: 'Vector Projection',
    titleKn: 'Vector Projection',
    problem: "u = [3, 4],  v = [1, 0]\n\n1. Scalar projection of u onto v: proj_scalar = (u·v) / ||v||\n2. Vector projection: proj_vec = ((u·v) / ||v||²) × v\n3. Component of u perpendicular to v: u_perp = u − proj_vec\n4. Verify: proj_vec + u_perp = u\n5. Now project u = [2,3] onto v = [1,1]. Interpret geometrically: what axis does v=[1,1] represent?",
    problemKn: "u = [3, 4],  v = [1, 0]\n\n1. u ya v ಮೇಲಿನ scalar projection: proj_scalar = (u·v) / ||v||\n2. Vector projection: proj_vec = ((u·v) / ||v||²) × v\n3. v ಗೆ ಲಂಬವಾದ u ya component: u_perp = u − proj_vec\n4. ಖಚಿತಪಡಿಸಿ: proj_vec + u_perp = u\n5. ಈಗ u = [2,3] ಅನ್ನೂ v = [1,1] ಮೇಲೆ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡಿ. ಜ್ಯಾಮಿತೀಯವಾಗಿ ಅರ್ಥೈಸಿ: v=[1,1] ಯಾವ axis ಪ್ರತಿನಿಧಿಸುತ್ತದೆ?" },
  { phaseId, moduleId: m14, lessonId: l14_3, order: 1, difficulty: 'intermediate',
    title: 'Gram-Schmidt Orthogonalization',
    titleKn: 'Gram-Schmidt Orthogonalization',
    problem: "Turn v1=[1,1,0] and v2=[1,0,1] into an orthonormal basis:\n\n1. e1 = v1 / ||v1||\n2. u2 = v2 − (v2·e1)e1   (remove component along e1)\n3. e2 = u2 / ||u2||\n4. Verify: e1·e2 = 0 (orthogonal) and ||e1|| = ||e2|| = 1 (unit)\n5. Write Python for all steps. Explain: why is an orthonormal basis ideal for PCA principal components?",
    problemKn: "v1=[1,1,0] ಮತ್ತು v2=[1,0,1] ಅನ್ನೂ ಒಂದು orthonormal basis ಆಗಿ ಪರಿವರ್ತಿಸಿ:\n\n1. e1 = v1 / ||v1||\n2. u2 = v2 − (v2·e1)e1   (e1 ಉದ್ದಕ್ಕೂ component ತೆಗೆದುಹಾಕಿ)\n3. e2 = u2 / ||u2||\n4. ಖಚಿತಪಡಿಸಿ: e1·e2 = 0 (orthogonal) ಮತ್ತು ||e1|| = ||e2|| = 1 (unit)\n5. ಎಲ್ಲಾ ಹಂತಗಳಿಗೆ Python ಬರೆಯಿರಿ. ವಿವರಿಸಿ: PCA principal components ಗೆ ಒಂದು orthonormal basis ಏಕೆ ಆದರ್ಶಪ್ರಾಯ?" },
  { phaseId, moduleId: m14, lessonId: l14_3, order: 2, difficulty: 'advanced',
    title: 'Change of Basis via Projection',
    titleKn: 'Projection ಮೂಲಕ Change of Basis',
    problem: "PCA principal component: pc1 = [1/√2, 1/√2]\nData: X = [[2,0],[-2,0],[0,1],[0,-1]]\n\n1. Project all 4 points onto pc1: coords = [x·pc1 for x in X]\n2. Reconstruct from pc1 only: x_hat = coord × pc1\n3. Reconstruction error for each point: ||x - x_hat||²\n4. What fraction of total variance does pc1 capture? (Var of coords / Total var in X)\n5. Add pc2 = [-1/√2, 1/√2]. Project all points onto both PCs. Is reconstruction error now 0? Why?",
    problemKn: "PCA principal component: pc1 = [1/√2, 1/√2]\nData: X = [[2,0],[-2,0],[0,1],[0,-1]]\n\n1. ಎಲ್ಲಾ 4 ಬಿಂದುಗಳನ್ನೂ pc1 ಮೇಲೆ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡಿ: coords = [x·pc1 for x in X]\n2. ಕೇವಲ pc1 ಇಂದ ಮರುನಿರ್ಮಿಸಿ: x_hat = coord × pc1\n3. ಪ್ರತಿ ಬಿಂದುಗೆ Reconstruction error: ||x - x_hat||²\n4. pc1 ಒಟ್ಟು variance ya ಯಾವ ಭಾಗ ಸೆರೆಹಿಡಿಯುತ್ತದೆ?\n5. pc2 = [-1/√2, 1/√2] ಸೇರಿಸಿ. ಎಲ್ಲಾ ಬಿಂದುಗಳನ್ನೂ ಎರಡೂ PCs ಮೇಲೆ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡಿ. Reconstruction error ಈಗ 0 ಆಗಿದೆಯೇ? ಏಕೆ?" },

  // Module 15, Lesson 1
  { phaseId, moduleId: m15, lessonId: l15_1, order: 0, difficulty: 'beginner',
    title: 'Implement a Mini Linear Layer',
    titleKn: 'ಒಂದು Mini Linear Layer ಜಾರಿಗೊಳಿಸುವುದೂ',
    problem: "Implement a linear layer in pure Python:\n\n  class LinearLayer:\n      def __init__(self, W, b): self.W = W; self.b = b\n      def forward(self, x): pass  # compute W@x + b\n\nTest:\n  W = [[1,2,3],[4,5,6]]   # 2×3\n  b = [0.5, -0.5]\n  x = [1.0, 0.0, -1.0]\n  # Expected: [1×1 + 0×2 + (-1)×3 + 0.5, 1×4 + 0×5 + (-1)×6 - 0.5] = [-1.5, -2.5]\n\nAlso implement a matrix_vector_multiply(M, v) helper function.",
    problemKn: "pure Python ನಲ್ಲಿ ಒಂದು linear layer ಜಾರಿಗೊಳಿಸಿ:\n\n  class LinearLayer:\n      def __init__(self, W, b): self.W = W; self.b = b\n      def forward(self, x): pass  # W@x + b ಲೆಕ್ಕಹಾಕಿ\n\nಪರೀಕ್ಷಿಸಿ:\n  W = [[1,2,3],[4,5,6]]   # 2×3\n  b = [0.5, -0.5]\n  x = [1.0, 0.0, -1.0]\n  # ನಿರೀಕ್ಷಿತ: [-1.5, -2.5]\n\nಒಂದು matrix_vector_multiply(M, v) helper function ಸಹ ಜಾರಿಗೊಳಿಸಿ." },
  { phaseId, moduleId: m15, lessonId: l15_1, order: 1, difficulty: 'intermediate',
    title: 'Batch Operations',
    titleKn: 'Batch Operations',
    problem: "Batch of 4 sentence embeddings (4×3):\n  batch = [[0.2,0.8,0.1],[0.5,0.3,0.9],[0.1,0.6,0.4],[0.7,0.2,0.3]]\n  W = [[1.0,0.0],[0.0,1.0],[0.5,0.5]]   # 3×2 projection\n\n1. Compute batch @ W (result 4×2) — no NumPy\n2. Column means of batch (mean per feature across 4 samples)\n3. Which sample has the highest L2 norm?\n4. Center the batch by subtracting column means from each row\n5. Why is centering important before PCA?",
    problemKn: "4 sentence embeddings ya batch (4×3):\n  batch = [[0.2,0.8,0.1],[0.5,0.3,0.9],[0.1,0.6,0.4],[0.7,0.2,0.3]]\n  W = [[1.0,0.0],[0.0,1.0],[0.5,0.5]]   # 3×2 projection\n\n1. batch @ W ಲೆಕ್ಕಹಾಕಿ (ಫಲಿತಾಂಶ 4×2) — NumPy ಇಲ್ಲದೆ\n2. batch ya column means\n3. ಯಾವ sample ಗರಿಷ್ಠ L2 norm ಹೊಂದಿದೆ?\n4. ಪ್ರತಿ ಸಾಲಿಂದ column means ಕಳೆಯುವ ಮೂಲಕ batch ಅನ್ನೂ center ಮಾಡಿ\n5. PCA ಮೊದಲು centering ಏಕೆ ಮುಖ್ಯ?" },
  { phaseId, moduleId: m15, lessonId: l15_1, order: 2, difficulty: 'advanced',
    title: 'Attention Score Matrix',
    titleKn: 'Attention Score Matrix',
    problem: "Q = [[1,0],[0,1],[1,1]]  (3 tokens × 2-dim queries)\nK = [[1,1],[1,0],[0,1]]  (3 tokens × 2-dim keys)\nd_k = 2\n\n1. Compute Kᵀ (2×3)\n2. Compute scores = Q @ Kᵀ / sqrt(d_k)  (3×3)\n3. Apply softmax row-wise to get attention weights\n4. V = [[1,0,0,0],[0,1,0,0],[1,1,0,0]]  (3×4 values)\n   Compute output = softmax_scores @ V  (3×4)\n5. Each output row is a weighted combination of value vectors. Which token attends most uniformly? Which most sharply?",
    problemKn: "Q = [[1,0],[0,1],[1,1]]  (3 tokens × 2-dim queries)\nK = [[1,1],[1,0],[0,1]]  (3 tokens × 2-dim keys)\nd_k = 2\n\n1. Kᵀ ಲೆಕ್ಕಹಾಕಿ (2×3)\n2. scores = Q @ Kᵀ / sqrt(d_k) ಲೆಕ್ಕಹಾಕಿ (3×3)\n3. attention weights ಪಡೆಯಲು row-wise softmax ಅನ್ವಯಿಸಿ\n4. V = [[1,0,0,0],[0,1,0,0],[1,1,0,0]]  (3×4 values)\n   output = softmax_scores @ V ಲೆಕ್ಕಹಾಕಿ (3×4)\n5. ಪ್ರತಿ output ಸಾಲು value vectors ya ಒಂದು weighted ಸಂಯೋಜನೆ. ಯಾವ token ಅತ್ಯಂತ ಏಕರೂಪವಾಗಿ attend ಮಾಡುತ್ತದೆ? ಯಾವುದೂ ಅತ್ಯಂತ ತೀಕ್ಷ್ಣವಾಗಿ?" },

  // Module 15, Lesson 2
  { phaseId, moduleId: m15, lessonId: l15_2, order: 0, difficulty: 'beginner',
    title: 'Activation Functions Element-wise',
    titleKn: 'Activation Functions Element-wise',
    problem: "z = [2.5, -1.2, 0.0, 3.8, -0.5]\n\n1. ReLU: relu(z_i) = max(0, z_i)\n2. Sigmoid: sigma(z_i) = 1 / (1 + exp(-z_i))\n3. Tanh: tanh(z_i) = (exp(z_i) - exp(-z_i)) / (exp(z_i) + exp(-z_i))\n4. Which squashes to [0,1]? Which to [-1,1]? Which clips negatives to 0?\n5. Write Python functions for all three. Which is most numerically stable for large |z|? (Hint: what happens to exp(1000)?)",
    problemKn: "z = [2.5, -1.2, 0.0, 3.8, -0.5]\n\n1. ReLU: relu(z_i) = max(0, z_i)\n2. Sigmoid: sigma(z_i) = 1 / (1 + exp(-z_i))\n3. Tanh: tanh(z_i) = (exp(z_i) - exp(-z_i)) / (exp(z_i) + exp(-z_i))\n4. ಯಾವುದೂ [0,1] ಗೆ squash ಮಾಡುತ್ತದೆ? ಯಾವುದೂ [-1,1] ಗೆ? ಯಾವುದೂ negatives ಅನ್ನೂ 0 ಗೆ clip ಮಾಡುತ್ತದೆ?\n5. ಮೂರಕ್ಕೂ Python functions ಬರೆಯಿರಿ. ದೊಡ್ಡ |z| ಗೆ ಯಾವುದೂ ಅತ್ಯಂತ numerically stable?" },
  { phaseId, moduleId: m15, lessonId: l15_2, order: 1, difficulty: 'intermediate',
    title: 'Broadcasting Simulation',
    titleKn: 'Broadcasting Simulation',
    problem: "batch_scores = [[2.1,0.3,1.5],[0.8,2.9,0.1],[1.0,0.7,2.3]]  (3×3)\nclass_weights = [1.0, 0.5, 2.0]  (3,)\nbias = [0.1, 0.2, 0.3]  (3,)\n\n1. Scale each row by class_weights (element-wise broadcast across rows)\n2. Add bias to each row\n3. Subtract row-max from each row (numerically stable softmax prep)\n4. Apply softmax row-wise: exp(x_i) / sum(exp(x_j))\n5. Verify each row of softmax sums to 1. Without NumPy throughout.",
    problemKn: "batch_scores = [[2.1,0.3,1.5],[0.8,2.9,0.1],[1.0,0.7,2.3]]  (3×3)\nclass_weights = [1.0, 0.5, 2.0]  (3,)\nbias = [0.1, 0.2, 0.3]  (3,)\n\n1. class_weights ಇಂದ ಪ್ರತಿ ಸಾಲನ್ನೂ scale ಮಾಡಿ\n2. ಪ್ರತಿ ಸಾಲಿಗೆ bias ಸೇರಿಸಿ\n3. ಪ್ರತಿ ಸಾಲಿಂದ row-max ಕಳೆಯಿರಿ (numerically stable softmax ಗಾಗಿ)\n4. row-wise softmax ಅನ್ವಯಿಸಿ\n5. softmax ya ಪ್ರತಿ ಸಾಲು 1 ಗೆ ಸೇರುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸಿ. NumPy ಇಲ್ಲದೆ." },
  { phaseId, moduleId: m15, lessonId: l15_2, order: 2, difficulty: 'advanced',
    title: 'Choosing the Right Operation',
    titleKn: 'ಸರಿಯಾದ Operation ಆಯ್ಕೆ ಮಾಡುವುದೂ',
    problem: "a = [1,2,3]  b = [4,5,6]  W = [[1,0],[0,1],[1,1]]  x = [1,-1]\n\nFor each scenario, identify the operation and compute:\n1. LSTM forget gate — element-wise: a ⊙ b\n2. Attention energy — dot product: a · b\n3. Correlation matrix — outer product: a ⊗ b (result 3×3)\n4. Linear transform — matrix-vector: W @ x (result 3,)\n5. For each: what shape would the wrong operation produce? Implement all four from scratch and include shape assertions (raise ValueError if shapes are incompatible).",
    problemKn: "a = [1,2,3]  b = [4,5,6]  W = [[1,0],[0,1],[1,1]]  x = [1,-1]\n\nಪ್ರತಿ ಸನ್ನಿವೇಶಕ್ಕೆ, operation ಗುರುತಿಸಿ ಮತ್ತು ಲೆಕ್ಕಹಾಕಿ:\n1. LSTM forget gate — element-wise: a ⊙ b\n2. Attention energy — dot product: a · b\n3. Correlation matrix — outer product: a ⊗ b (ಫಲಿತಾಂಶ 3×3)\n4. Linear transform — matrix-vector: W @ x (ಫಲಿತಾಂಶ 3,)\n5. ಪ್ರತಿಯೊಂದಕ್ಕೂ: ತಪ್ಪು operation ಯಾವ shape ಉತ್ಪಾದಿಸುತ್ತಿತ್ತು? ಎಲ್ಲಾ ನಾಲ್ಕನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು shape assertions ಸೇರಿಸಿ." },

  // Module 16, Lesson 1
  { phaseId, moduleId: m16, lessonId: l16_1, order: 0, difficulty: 'beginner',
    title: '2D Rotation Matrix',
    titleKn: '2D Rotation Matrix',
    problem: "Rotation by θ: R(θ) = [[cos θ, -sin θ],[sin θ, cos θ]]\n\n1. Build R(90°) and R(45°) using math.cos, math.sin\n2. Apply R(90°) to [1,0], [0,1], [1,1]\n3. Apply R(45°) to [1,0]. Is the result a unit vector?\n4. Show R(45°) @ R(45°) = R(90°) (matrix multiplication = composition of rotations)\n5. Apply R(30°) five times to [1,0]. Do you get back to [1,0] after R(300°)? Why?",
    problemKn: "θ ಇಂದ Rotation: R(θ) = [[cos θ, -sin θ],[sin θ, cos θ]]\n\n1. math.cos, math.sin ಬಳಸಿ R(90°) ಮತ್ತು R(45°) ನಿರ್ಮಿಸಿ\n2. R(90°) ಅನ್ನೂ [1,0], [0,1], [1,1] ಗೆ ಅನ್ವಯಿಸಿ\n3. R(45°) ಅನ್ನೂ [1,0] ಗೆ ಅನ್ವಯಿಸಿ. ಫಲಿತಾಂಶ ಒಂದು unit vector ಆಗಿದೆಯೇ?\n4. R(45°) @ R(45°) = R(90°) ಎಂದು ತೋರಿಸಿ\n5. R(30°) ಅನ್ನೂ [1,0] ಗೆ ಐದು ಬಾರಿ ಅನ್ವಯಿಸಿ. R(300°) ನಂತರ ನೀವು [1,0] ಗೆ ಹಿಂತಿರುಗುತ್ತೀರಾ? ಏಕೆ?" },
  { phaseId, moduleId: m16, lessonId: l16_1, order: 1, difficulty: 'intermediate',
    title: 'Determinant and Inverse',
    titleKn: 'Determinant ಮತ್ತು Inverse',
    problem: "A = [[3,1],[5,2]]  B = [[2,4],[1,2]]\n\nFor 2×2 [[a,b],[c,d]]: det = ad - bc, inverse = (1/det)×[[d,-b],[-c,a]]\n\n1. det(A), det(B) — which is singular?\n2. For non-singular matrices, compute the inverse\n3. Verify: A @ A⁻¹ = I (identity)\n4. What does det = 0 mean geometrically? (Think about what the transformation does to area)\n5. Compute the 3×3 determinant of [[1,2,0],[3,1,2],[0,1,3]] using cofactor expansion along row 1.",
    problemKn: "A = [[3,1],[5,2]]  B = [[2,4],[1,2]]\n\n2×2 [[a,b],[c,d]] ಗೆ: det = ad - bc, inverse = (1/det)×[[d,-b],[-c,a]]\n\n1. det(A), det(B) — ಯಾವುದೂ singular?\n2. non-singular matrices ಗೆ, inverse ಲೆಕ್ಕಹಾಕಿ\n3. ಖಚಿತಪಡಿಸಿ: A @ A⁻¹ = I (identity)\n4. det = 0 ಜ್ಯಾಮಿತೀಯವಾಗಿ ಏನನ್ನೂ ಅರ್ಥೈಸುತ್ತದೆ?\n5. row 1 ಉದ್ದಕ್ಕೂ cofactor expansion ಬಳಸಿ [[1,2,0],[3,1,2],[0,1,3]] ya 3×3 determinant ಲೆಕ್ಕಹಾಕಿ." },
  { phaseId, moduleId: m16, lessonId: l16_1, order: 2, difficulty: 'advanced',
    title: 'Transformation Pipeline',
    titleKn: 'Transformation Pipeline',
    problem: "Build a 2D graphics transformation pipeline using 3×3 homogeneous matrices.\n\nTranslate by (tx,ty):  T = [[1,0,tx],[0,1,ty],[0,0,1]]\nScale by (sx,sy):      S = [[sx,0,0],[0,sy,0],[0,0,1]]\nRotate by θ:           R = [[cosθ,-sinθ,0],[sinθ,cosθ,0],[0,0,1]]\n\n1. Implement compose(*mats) that multiplies a list of 3×3 matrices\n2. Build a transform: first translate to origin (-cx,-cy), then rotate 45°, then scale 2×, then translate back\n3. Apply to a unit square: corners at (0,0),(1,0),(1,1),(0,1). What are the transformed corners?\n4. The inverse of compose(T1,T2,T3) is compose(T3_inv, T2_inv, T1_inv). Verify this on your pipeline.\n5. What is the determinant of a rotation matrix? What does that tell you about area preservation?",
    problemKn: "3×3 homogeneous matrices ಬಳಸಿ ಒಂದು 2D graphics transformation pipeline ನಿರ್ಮಿಸಿ.\n\nTranslate by (tx,ty):  T = [[1,0,tx],[0,1,ty],[0,0,1]]\nScale by (sx,sy):      S = [[sx,0,0],[0,sy,0],[0,0,1]]\nRotate by θ:           R = [[cosθ,-sinθ,0],[sinθ,cosθ,0],[0,0,1]]\n\n1. 3×3 matrices ya ಒಂದು list ಗುಣಿಸುವ compose(*mats) ಜಾರಿಗೊಳಿಸಿ\n2. ಒಂದು transform ನಿರ್ಮಿಸಿ: ಮೊದಲು origin ಗೆ translate, ನಂತರ 45° rotate, ನಂತರ 2× scale, ನಂತರ ಮತ್ತೆ translate\n3. ಒಂದು unit square ಗೆ ಅನ್ವಯಿಸಿ. ಪರಿವರ್ತಿತ ಮೂಲೆಗಳು ಏನು?\n4. compose(T1,T2,T3) ya inverse compose(T3_inv, T2_inv, T1_inv) ಆಗಿದೆ. ನಿಮ್ಮ pipeline ಮೇಲೆ ಇದನ್ನೂ ಖಚಿತಪಡಿಸಿ.\n5. ಒಂದು rotation matrix ya determinant ಏನು? ಇದು area preservation ಬಗ್ಗೆ ಏನನ್ನೂ ಹೇಳುತ್ತದೆ?" },

  // Module 16, Lesson 2
  { phaseId, moduleId: m16, lessonId: l16_2, order: 0, difficulty: 'beginner',
    title: 'Verify Eigenvectors',
    titleKn: 'Eigenvectors ಪರಿಶೀಲಿಸುವುದೂ',
    problem: "A = [[2,1],[1,2]]  eigenvalues: λ₁=3, λ₂=1  eigenvectors: v1=[1,1], v2=[1,-1]\n\n1. Verify: A @ v1 = λ₁ × v1\n2. Verify: A @ v2 = λ₂ × v2\n3. Normalize v1 and v2 to unit vectors e1, e2\n4. Verify e1 · e2 = 0 (orthogonal eigenvectors of a symmetric matrix)\n5. Express w = [3, 1] as a linear combination of v1 and v2. Then compute A @ w using eigendecomposition.",
    problemKn: "A = [[2,1],[1,2]]  eigenvalues: λ₁=3, λ₂=1  eigenvectors: v1=[1,1], v2=[1,-1]\n\n1. ಖಚಿತಪಡಿಸಿ: A @ v1 = λ₁ × v1\n2. ಖಚಿತಪಡಿಸಿ: A @ v2 = λ₂ × v2\n3. v1 ಮತ್ತು v2 ಅನ್ನೂ unit vectors e1, e2 ಗೆ normalize ಮಾಡಿ\n4. ಖಚಿತಪಡಿಸಿ e1 · e2 = 0\n5. w = [3, 1] ಅನ್ನೂ v1 ಮತ್ತು v2 ya ಒಂದು linear combination ಆಗಿ ವ್ಯಕ್ತಪಡಿಸಿ. ನಂತರ eigendecomposition ಬಳಸಿ A @ w ಲೆಕ್ಕಹಾಕಿ." },
  { phaseId, moduleId: m16, lessonId: l16_2, order: 1, difficulty: 'intermediate',
    title: 'Covariance Eigendecomposition',
    titleKn: 'Covariance Eigendecomposition',
    problem: "Centered data: X = [[2,1],[-2,-1],[1,2],[-1,-2]]\n\n1. Compute covariance matrix: C = (1/n) × Xᵀ @ X\n2. Eigenvalues of C: λ₁=5, λ₂=1 — verify: tr(C)=λ₁+λ₂ and det(C)=λ₁×λ₂\n3. First PC: v1=[1/√2, 1/√2] — project all 4 points onto v1\n4. Variance explained = λ₁/(λ₁+λ₂) — what percentage does pc1 capture?\n5. Project onto both PCs (v2=[1/√2,-1/√2]). Show that the projected coordinates are uncorrelated (covariance ≈ 0).",
    problemKn: "Centered data: X = [[2,1],[-2,-1],[1,2],[-1,-2]]\n\n1. Covariance matrix ಲೆಕ್ಕಹಾಕಿ: C = (1/n) × Xᵀ @ X\n2. C ya eigenvalues: λ₁=5, λ₂=1 — ಖಚಿತಪಡಿಸಿ: tr(C)=λ₁+λ₂ ಮತ್ತು det(C)=λ₁×λ₂\n3. ಮೊದಲ PC: v1=[1/√2, 1/√2] — ಎಲ್ಲಾ 4 ಬಿಂದುಗಳನ್ನೂ v1 ಮೇಲೆ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡಿ\n4. Variance explained = λ₁/(λ₁+λ₂) — pc1 ಎಷ್ಟು ಶೇಕಡಾವಾರು ಸೆರೆಹಿಡಿಯುತ್ತದೆ?\n5. ಎರಡೂ PCs ಮೇಲೆ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡಿ. ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡಿದ coordinates uncorrelated ಎಂದು ತೋರಿಸಿ." },
  { phaseId, moduleId: m16, lessonId: l16_2, order: 2, difficulty: 'advanced',
    title: 'Power Iteration',
    titleKn: 'Power Iteration',
    problem: "Power iteration finds the dominant eigenvector iteratively:\n  v_{k+1} = A @ v_k / ||A @ v_k||\n\nApply to A = [[4,1],[2,3]] starting from v0 = [1.0, 0.0]:\n\n1. Run 15 iterations. Print v and estimated λ = (A@v)·v / (v·v) every 3 steps\n2. Does v converge? To what direction?\n3. Estimate the dominant eigenvalue λ₁\n4. To find λ₂: deflate A' = A − λ₁×v₁v₁ᵀ and run power iteration on A'\n5. Verify: λ₁+λ₂ = tr(A) = 7 and λ₁×λ₂ = det(A) = 10",
    problemKn: "Power iteration ಪುನರಾವರ್ತಿತವಾಗಿ dominant eigenvector ಕಂಡುಹಿಡಿಯುತ್ತದೆ:\n  v_{k+1} = A @ v_k / ||A @ v_k||\n\nA = [[4,1],[2,3]] ಗೆ v0 = [1.0, 0.0] ಇಂದ ಪ್ರಾರಂಭಿಸಿ ಅನ್ವಯಿಸಿ:\n\n1. 15 iterations ಚಲಾಯಿಸಿ. ಪ್ರತಿ 3 ಹಂತಗಳಿಗೆ v ಮತ್ತು ಅಂದಾಜು λ ಪ್ರಿಂಟ್ ಮಾಡಿ\n2. v ಒಮ್ಮುಖವಾಗುತ್ತದೆಯೇ? ಯಾವ direction ಗೆ?\n3. dominant eigenvalue λ₁ ಅಂದಾಜಿಸಿ\n4. λ₂ ಕಂಡುಹಿಡಿಯಲು: A' = A − λ₁×v₁v₁ᵀ deflate ಮಾಡಿ ಮತ್ತು A' ಮೇಲೆ power iteration ಚಲಾಯಿಸಿ\n5. ಖಚಿತಪಡಿಸಿ: λ₁+λ₂ = tr(A) = 7 ಮತ್ತು λ₁×λ₂ = det(A) = 10" },

  // Module 17, Lesson 1
  { phaseId, moduleId: m17, lessonId: l17_1, order: 0, difficulty: 'beginner',
    title: 'Numerical Gradient Check',
    titleKn: 'Numerical Gradient Check',
    problem: "Centered difference approximation: f'(x) ≈ (f(x+h) - f(x-h)) / (2h),  h=1e-5\n\n1. f(x) = x³ − 3x + 2 — compute f'(x) numerically at x=0, 1, 2. Compare to analytic 3x²-3.\n2. f(x) = exp(x) at x=0 — should give 1.0\n3. f(x) = log(x) at x=1, x=2 — should give 1/x\n4. Minimize f(x) = (x−3)² with gradient descent: x₀=0, lr=0.1, 30 steps. Print x every 5 steps.\n5. Why does the centered difference (using h on both sides) give better accuracy than the forward difference (f(x+h)-f(x))/h?",
    problemKn: "Centered difference approximation: f'(x) ≈ (f(x+h) - f(x-h)) / (2h),  h=1e-5\n\n1. f(x) = x³ − 3x + 2 — x=0, 1, 2 ನಲ್ಲಿ f'(x) ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಲೆಕ್ಕಹಾಕಿ. analytic 3x²-3 ಜೊತೆ ಹೋಲಿಸಿ.\n2. x=0 ನಲ್ಲಿ f(x) = exp(x) — 1.0 ನೀಡಬೇಕು\n3. x=1, x=2 ನಲ್ಲಿ f(x) = log(x) — 1/x ನೀಡಬೇಕು\n4. gradient descent ಜೊತೆ f(x) = (x−3)² ಕಡಿಮೆ ಮಾಡಿ: x₀=0, lr=0.1, 30 ಹಂತಗಳು.\n5. centered difference ಏಕೆ forward difference ಗಿಂತ ಉತ್ತಮ ನಿಖರತೆ ನೀಡುತ್ತದೆ?" },
  { phaseId, moduleId: m17, lessonId: l17_1, order: 1, difficulty: 'intermediate',
    title: 'Linear Regression via GD',
    titleKn: 'GD ಮೂಲಕ Linear Regression',
    problem: "Model: y_pred = w×x + b.  MSE loss: L = mean((y_pred - y_true)²)\nData: [(1,2), (2,4), (3,5)]\n\n1. L at w=1.5, b=0.0\n2. Gradient: ∂L/∂w = (2/n)×Σ(y_pred-y_true)×x,   ∂L/∂b = (2/n)×Σ(y_pred-y_true)\n3. Starting from w=0, b=0, run 100 GD steps with lr=0.05. Print w, b, L every 20 steps.\n4. What is the analytical solution? (For linear regression: w = cov(x,y)/var(x))\n5. Does GD converge to the analytical solution?",
    problemKn: "Model: y_pred = w×x + b.  MSE loss: L = mean((y_pred - y_true)²)\nData: [(1,2), (2,4), (3,5)]\n\n1. w=1.5, b=0.0 ನಲ್ಲಿ L\n2. Gradient: ∂L/∂w = (2/n)×Σ(y_pred-y_true)×x,   ∂L/∂b = (2/n)×Σ(y_pred-y_true)\n3. w=0, b=0 ಇಂದ ಪ್ರಾರಂಭಿಸಿ, lr=0.05 ಜೊತೆ 100 GD ಹಂತಗಳು ಚಲಾಯಿಸಿ.\n4. analytical solution ಏನು?\n5. GD analytical solution ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆಯೇ?" },
  { phaseId, moduleId: m17, lessonId: l17_1, order: 2, difficulty: 'advanced',
    title: 'Optimizer Comparison',
    titleKn: 'Optimizer Comparison',
    problem: "Minimize f(w) = w[0]² + 10×w[1]² starting from w=[5.0, 5.0], 100 steps.\n\nThis has very different curvature in each direction — challenging for vanilla GD.\n\nImplement:\n1. SGD (lr=0.1): w = w - lr×grad\n2. Momentum (lr=0.1, γ=0.9): v = γv + grad; w = w - lr×v\n3. RMSProp (lr=0.01, β=0.9, ε=1e-8): G = βG + (1-β)grad²; w = w - lr×grad/√(G+ε)\n\nFor each: print w and f(w) every 20 steps. Which converges fastest? Which handles the curvature imbalance best? Explain why using the concept of per-parameter step sizes.",
    problemKn: "w=[5.0, 5.0] ಇಂದ ಪ್ರಾರಂಭಿಸಿ, 100 ಹಂತಗಳಲ್ಲಿ f(w) = w[0]² + 10×w[1]² ಕಡಿಮೆ ಮಾಡಿ.\n\nಇದು ಪ್ರತಿ direction ನಲ್ಲಿ ಬಹಳ ಭಿನ್ನ curvature ಹೊಂದಿದೆ.\n\nಜಾರಿಗೊಳಿಸಿ:\n1. SGD (lr=0.1)\n2. Momentum (lr=0.1, γ=0.9)\n3. RMSProp (lr=0.01, β=0.9, ε=1e-8)\n\nಪ್ರತಿಯೊಂದಕ್ಕೂ: ಪ್ರತಿ 20 ಹಂತಗಳಿಗೆ w ಮತ್ತು f(w) ಪ್ರಿಂಟ್ ಮಾಡಿ. ಯಾವುದೂ ಅತ್ಯಂತ ವೇಗವಾಗಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ? ಯಾವುದೂ curvature imbalance ಅನ್ನೂ ಅತ್ಯುತ್ತಮವಾಗಿ ನಿಭಾಯಿಸುತ್ತದೆ?" },

  // Module 17, Lesson 2
  { phaseId, moduleId: m17, lessonId: l17_2, order: 0, difficulty: 'beginner',
    title: 'Taylor Approximation',
    titleKn: 'Taylor Approximation',
    problem: "For f(x) = exp(x), Taylor series around x=0:\n  1st order: 1 + h\n  2nd order: 1 + h + h²/2\n  3rd order: 1 + h + h²/2 + h³/6\n\n1. Compare all three approximations against true exp(h) at h=0.1, 0.5, 1.0, 2.0\n2. At what h does the 2nd-order approximation have >5% error?\n3. For f(x) = sin(x) around x=0: 1st order = x, 3rd order = x - x³/6. Compare at x=π/4, π/2, π.\n4. Why does gradient descent implicitly rely on a 1st-order Taylor approximation?\n5. Newton's method uses 2nd order: w ← w - f'(w)/f''(w). Apply to f(w)=(w-3)² and verify it converges in 1 step.",
    problemKn: "f(x) = exp(x) ಗೆ, x=0 ಸುತ್ತ Taylor series:\n  1st order: 1 + h\n  2nd order: 1 + h + h²/2\n  3rd order: 1 + h + h²/2 + h³/6\n\n1. h=0.1, 0.5, 1.0, 2.0 ನಲ್ಲಿ ಮೂರೂ approximations ಅನ್ನೂ ನಿಜ exp(h) ವಿರುದ್ಧ ಹೋಲಿಸಿ\n2. ಯಾವ h ನಲ್ಲಿ 2nd-order approximation >5% error ಹೊಂದಿದೆ?\n3. f(x) = sin(x) ಗೆ, x=π/4, π/2, π ನಲ್ಲಿ ಹೋಲಿಸಿ.\n4. gradient descent ಏಕೆ ಒಂದು 1st-order Taylor approximation ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ?\n5. Newton's method 2nd order ಬಳಸುತ್ತದೆ. f(w)=(w-3)² ಗೆ ಅನ್ವಯಿಸಿ ಮತ್ತು ಇದು 1 ಹಂತದಲ್ಲಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸಿ." },
  { phaseId, moduleId: m17, lessonId: l17_2, order: 1, difficulty: 'intermediate',
    title: 'Numerical Hessian',
    titleKn: 'Numerical Hessian',
    problem: "f(w) = w[0]² + 2×w[1]² + w[0]×w[1]\n\n1. Compute the Hessian analytically: H = [[∂²f/∂w₀², ∂²f/∂w₀∂w₁],[∂²f/∂w₁∂w₀, ∂²f/∂w₁²]]\n2. Numerically estimate H[i,j] ≈ (f(w+h×eᵢ+h×eⱼ)-f(w+h×eᵢ)-f(w+h×eⱼ)+f(w))/h²  at w=[1,1], h=1e-4\n3. Compute eigenvalues of H: characteristic polynomial det(H-λI)=0\n4. The max eigenvalue L gives the max stable learning rate: lr < 2/L. What is the max lr here?\n5. Run GD from w=[2,2] with lr=0.1 (stable), lr = 1/(L) (boundary), lr = 0.7 (unstable). Which diverges?",
    problemKn: "f(w) = w[0]² + 2×w[1]² + w[0]×w[1]\n\n1. Hessian ಅನ್ನೂ analytically ಲೆಕ್ಕಹಾಕಿ\n2. w=[1,1], h=1e-4 ನಲ್ಲಿ H[i,j] ಅನ್ನೂ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಅಂದಾಜಿಸಿ\n3. H ya eigenvalues ಲೆಕ್ಕಹಾಕಿ\n4. ಗರಿಷ್ಠ eigenvalue L ಗರಿಷ್ಠ ಸ್ಥಿರ learning rate ನೀಡುತ್ತದೆ: lr < 2/L. ಇಲ್ಲಿ ಗರಿಷ್ಠ lr ಏನು?\n5. w=[2,2] ಇಂದ 3 ವಿಭಿನ್ನ lr ಜೊತೆ GD ಚಲಾಯಿಸಿ. ಯಾವುದೂ ಬೇರೆಯಾಗುತ್ತದೆ?" },
  { phaseId, moduleId: m17, lessonId: l17_2, order: 2, difficulty: 'advanced',
    title: 'Newton vs Gradient Descent',
    titleKn: 'Newton vs Gradient Descent',
    problem: "Minimize f(w) = log(1 + exp(-w)) (negative log-likelihood for binary classification, w is the logit).\n\nGD: w ← w - lr × f'(w)\nNewton: w ← w - f'(w)/f''(w)  (no lr needed)\n\n1. Derive f'(w) = -sigma(-w) = -(1/(1+exp(w))) analytically\n2. Derive f''(w) = sigma(w)×(1-sigma(w)) where sigma(w)=1/(1+exp(-w))\n3. Starting from w=-5, run GD (lr=0.5) and Newton for 10 steps each. Print w and f(w).\n4. Which converges faster to the minimum at w=+∞ (approaches 0)? Why?\n5. Newton's method can overshoot for non-convex functions. Show this by applying it to f(w) = w⁴ - 4w² starting from w=0.5 (saddle region). Does it find a minimum or diverge?",
    problemKn: "f(w) = log(1 + exp(-w)) ಕಡಿಮೆ ಮಾಡಿ (binary classification ಗಾಗಿ negative log-likelihood).\n\nGD: w ← w - lr × f'(w)\nNewton: w ← w - f'(w)/f''(w)\n\n1. f'(w) ಅನ್ನೂ analytically ಪಡೆಯಿರಿ\n2. f''(w) ಅನ್ನೂ ಪಡೆಯಿರಿ\n3. w=-5 ಇಂದ ಪ್ರಾರಂಭಿಸಿ, GD ಮತ್ತು Newton ಎರಡನ್ನೂ 10 ಹಂತಗಳಿಗೆ ಚಲಾಯಿಸಿ.\n4. w=+∞ ನಲ್ಲಿ minimum ಗೆ ಯಾವುದೂ ವೇಗವಾಗಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ? ಏಕೆ?\n5. Newton's method non-convex functions ಗೆ overshoot ಮಾಡಬಹುದು. f(w) = w⁴ - 4w² ಗೆ w=0.5 ಇಂದ ಅನ್ವಯಿಸಿ ಇದನ್ನೂ ತೋರಿಸಿ." },

  // Module 18, Lesson 1
  { phaseId, moduleId: m18, lessonId: l18_1, order: 0, difficulty: 'beginner',
    title: 'Chain Rule Step by Step',
    titleKn: 'Chain Rule ಹಂತ ಹಂತವಾಗಿ',
    problem: "f(x) = sigmoid(2x + 1) where sigmoid(z) = 1/(1+exp(-z))\n\nDefine: a = 2x+1, b = sigmoid(a) = f(x)\n\n1. Compute da/dx\n2. Compute db/da — sigmoid derivative: sigma(a)×(1-sigma(a))\n3. df/dx by chain rule = (db/da)×(da/dx)\n4. Evaluate at x=1.0: compute f(1.0), then df/dx at x=1.0\n5. Numerically verify: (f(1.0+1e-5) - f(1.0-1e-5)) / (2e-5) ≈ your analytic answer",
    problemKn: "f(x) = sigmoid(2x + 1) ಇಲ್ಲಿ sigmoid(z) = 1/(1+exp(-z))\n\nವ್ಯಾಖ್ಯಾನಿಸಿ: a = 2x+1, b = sigmoid(a) = f(x)\n\n1. da/dx ಲೆಕ್ಕಹಾಕಿ\n2. db/da ಲೆಕ್ಕಹಾಕಿ\n3. chain rule ಮೂಲಕ df/dx = (db/da)×(da/dx)\n4. x=1.0 ನಲ್ಲಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ\n5. ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಪರಿಶೀಲಿಸಿ: (f(1.0+1e-5) - f(1.0-1e-5)) / (2e-5) ≈ ನಿಮ್ಮ analytic ಉತ್ತರ" },
  { phaseId, moduleId: m18, lessonId: l18_1, order: 1, difficulty: 'intermediate',
    title: 'Backprop Through 2 Layers',
    titleKn: '2 Layers ಮೂಲಕ Backprop',
    problem: "Forward pass:\n  x=[1.0,0.5],  y_true=2.0\n  W1=[[0.5,-0.3],[0.2,0.8]], b1=[0.1,-0.1]\n  W2=[[1.0,-1.0]], b2=[0.0]\n\n  z1 = W1@x + b1\n  a1 = ReLU(z1)\n  z2 = W2@a1 + b2\n  loss = (z2[0] - y_true)²\n\nBackward pass (compute each gradient):\n  1. dL/dz2 = 2×(z2[0]-y_true)\n  2. dL/dW2 = dL/dz2 × a1ᵀ\n  3. dL/da1 = W2ᵀ × dL/dz2\n  4. dL/dz1 = dL/da1 × (z1>0)  [ReLU gradient]\n  5. dL/dW1 = dL/dz1 × xᵀ\n\nVerify each gradient numerically (perturb each weight by 1e-5).",
    problemKn: "Forward pass:\n  x=[1.0,0.5],  y_true=2.0\n  W1=[[0.5,-0.3],[0.2,0.8]], b1=[0.1,-0.1]\n  W2=[[1.0,-1.0]], b2=[0.0]\n\n  z1 = W1@x + b1\n  a1 = ReLU(z1)\n  z2 = W2@a1 + b2\n  loss = (z2[0] - y_true)²\n\nBackward pass (ಪ್ರತಿ gradient ಲೆಕ್ಕಹಾಕಿ):\n  1. dL/dz2\n  2. dL/dW2\n  3. dL/da1\n  4. dL/dz1 [ReLU gradient]\n  5. dL/dW1\n\nಪ್ರತಿ gradient ಅನ್ನೂ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಪರಿಶೀಲಿಸಿ (ಪ್ರತಿ weight ಅನ್ನೂ 1e-5 ಇಂದ perturb ಮಾಡಿ)." },
  { phaseId, moduleId: m18, lessonId: l18_1, order: 2, difficulty: 'advanced',
    title: 'Scalar Autograd Engine',
    titleKn: 'Scalar Autograd Engine',
    problem: "Build a minimal autograd engine for scalar values.\n\nclass Value:\n    def __init__(self, data):\n        self.data = data\n        self.grad = 0.0\n        self._backward = lambda: None\n        self._prev = []\n\n    def __add__(self, other):   # implement forward + backward\n    def __mul__(self, other):   # implement forward + backward\n    def relu(self):             # implement forward + backward\n    def backward(self):         # topological sort then call _backward in reverse\n\nRules:\n  add: grad passes equally to both inputs\n  mul: d(a×b)/da = b, d(a×b)/db = a\n  relu: gradient = 1 if data>0, else 0\n\nTest: compute d/dx [(2x+1)² + relu(x-3)] at x=2. Verify against numerical gradient.",
    problemKn: "scalar ಮೌಲ್ಯಗಳಿಗೆ ಒಂದು ಕನಿಷ್ಠ autograd engine ನಿರ್ಮಿಸಿ.\n\nclass Value:\n    def __init__(self, data):\n        self.data = data\n        self.grad = 0.0\n        self._backward = lambda: None\n        self._prev = []\n\n    def __add__(self, other):   # forward + backward ಜಾರಿಗೊಳಿಸಿ\n    def __mul__(self, other):   # forward + backward ಜಾರಿಗೊಳಿಸಿ\n    def relu(self):             # forward + backward ಜಾರಿಗೊಳಿಸಿ\n    def backward(self):         # topological sort ನಂತರ _backward ಹಿಮ್ಮುಖವಾಗಿ ಕರೆ ಮಾಡಿ\n\nನಿಯಮಗಳು:\n  add: grad ಎರಡೂ inputs ಗೆ ಸಮಾನವಾಗಿ ಹಾದುಹೋಗುತ್ತದೆ\n  mul: d(a×b)/da = b, d(a×b)/db = a\n  relu: gradient = 1 if data>0, else 0\n\nಪರೀಕ್ಷಿಸಿ: x=2 ನಲ್ಲಿ d/dx [(2x+1)² + relu(x-3)] ಲೆಕ್ಕಹಾಕಿ. numerical gradient ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ." },
];
