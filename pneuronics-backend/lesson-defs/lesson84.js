const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26d9'; // Module 16: Matrix Transformations and Eigenvalues

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'reading',
  duration: 75,
  difficulty: 'beginner',
  status: 'published',
  title: 'Matrix Transformations (Part 3) — Practical Matrix Transformations, AI Applications & Build',
  titleKn: 'Matrix Transformations (Part 3) — Practical Matrix Transformations, AI Applications & Build',
  desc: 'Translate rotation, composition, and eigendecomposition into real NumPy, discover why NumPy\'s eigenvectors look different from the hand-derived ones (same direction, different scale), and genuinely find a real dataset where one principal direction has exactly zero variance.',
  descKn: 'Rotation, composition, ಮತ್ತು eigendecomposition ಅನ್ನೂ ನಿಜ NumPy ಗೆ ಭಾಷಾಂತರಿಸಿ, NumPy ನ eigenvectors ಕೈ-derive ಮಾಡಿದವುಗಳಿಗಿಂತ ಏಕೆ ಬೇರೆ ಕಾಣುತ್ತವೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ (ಅದೇ direction, ಬೇರೆ scale), ಮತ್ತು ಒಂದು ಮುಖ್ಯ direction ನಿಖರವಾಗಿ ಶೂನ್ಯ variance ಹೊಂದಿರುವ ಒಂದು ನಿಜ dataset ಅನ್ನೂ ನಿಜವಾಗಿ ಕಂಡುಹಿಡಿಯಿರಿ.',
  objectives: [
    'Apply transformations to 2D and 3D points using NumPy.',
    'Combine multiple transformations using matrix multiplication.',
    'Compute eigenvalues and eigenvectors of 2x2 matrices with NumPy.',
    'Connect eigenvalues to PCA, RNN stability, spectral clustering, and graph-based AI in practice.',
    'Implement transformations from scratch before using NumPy.',
  ],
  objectivesKn: [
    'NumPy ಬಳಸಿ transformations ಗಳನ್ನೂ 2D ಮತ್ತು 3D points ಗೆ ಅನ್ವಯಿಸಿ.',
    'Matrix multiplication ಬಳಸಿ ಅನೇಕ transformations ಸಂಯೋಜಿಸಿ.',
    'NumPy ಜೊತೆ 2x2 matrices ಗಳ eigenvalues ಮತ್ತು eigenvectors ಗಣಿಸಿ.',
    'Eigenvalues ಗಳನ್ನೂ ಪ್ರಾಯೋಗಿಕವಾಗಿ PCA, RNN stability, spectral clustering, ಮತ್ತು graph-based AI ಗೆ ಸಂಪರ್ಕಿಸಿ.',
    'NumPy ಬಳಸುವ ಮೊದಲು transformations ಗಳನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Matrix Transformations (Part 3)', textKn: 'Matrix Transformations (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Part 3 of 3 · Time: ~75 minutes total\n• Parts 1 and 2 built every transformation and eigendecomposition by hand\n• Part 3 translates all of it into NumPy, extends to 3D, and puts the whole lesson together: transformations -> composition -> eigenvalues/eigenvectors -> AI applications',
      bodyKn: '• Part 3 of 3 · Time: ~75 ನಿಮಿಷಗಳು\n• Parts 1 ಮತ್ತು 2 ಪ್ರತಿ transformation ಮತ್ತು eigendecomposition ಅನ್ನೂ ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದವು\n• Part 3 ಇದೆಲ್ಲವನ್ನೂ NumPy ಗೆ ಭಾಷಾಂತರಿಸುತ್ತದೆ, 3D ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ, ಮತ್ತು ಸಂಪೂರ್ಣ lesson ಒಟ್ಟಿಗೆ ಸೇರಿಸುತ್ತದೆ: transformations -> composition -> eigenvalues/eigenvectors -> AI applications',
      pillsEn: 'Part 3 of 3,~75 min',
      pillsKn: 'Part 3 of 3,~75 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: 'The Practical Workflow', textKn: 'Practical Workflow', level: 'H2' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 165\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6\">\n  <rect width=\"260\" height=\"165\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"70\" y=\"20\" width=\"120\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"32\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.4\">Point / Data</text>\n  <path d=\"M130,38 V46\" stroke=\"#475569\"/>\n  <rect x=\"50\" y=\"48\" width=\"160\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"60\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.4\">Represent as vector</text>\n  <path d=\"M130,66 V74\" stroke=\"#475569\"/>\n  <rect x=\"40\" y=\"76\" width=\"180\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"88\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.4\">Choose transformation matrix</text>\n  <path d=\"M130,94 V102\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"104\" width=\"140\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"116\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.4\">Matrix x vector</text>\n  <path d=\"M130,122 V130\" stroke=\"#475569\"/>\n  <rect x=\"50\" y=\"132\" width=\"160\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"144\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.4\">New representation</text>\n</svg>",
      titleEn: 'The Standard Loop', titleKn: 'ಪ್ರಮಾಣಿತ ಲೂಪ್',
      captionEn: 'Every real transformation pipeline in ML code follows this exact shape, whatever the specific matrix is.',
      captionKn: 'ML code ನಲ್ಲಿ ಪ್ರತಿ ನಿಜ transformation pipeline, ನಿರ್ದಿಷ್ಟ matrix ಏನೇ ಇರಲಿ, ಈ ನಿಖರ ಆಕಾರ ಅನುಸರಿಸುತ್ತದೆ.' } },
    { type: 'math', data: { formula: 'x -> A -> B -> C -> y\ny = C @ B @ A @ x', descEn: '• The matrix closest to the vector acts first -- read right to left', descKn: '• Vector ಗೆ ಹತ್ತಿರವಿರುವ matrix ಮೊದಲು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ -- ಬಲದಿಂದ ಎಡಕ್ಕೆ ಓದಿ' } },

    { type: 'heading', data: { textEn: 'NumPy -- What You Actually Use', textKn: 'NumPy -- ವಾಸ್ತವವಾಗಿ ಬಳಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'numpy_rotate_scale.py',
      headingEn: 'Rotate and Scale, in NumPy', headingKn: 'Rotate ಮತ್ತು Scale, NumPy ನಲ್ಲಿ',
      descEn: 'The from-scratch code from Part 1 is valuable for understanding the mathematics; in real projects you normally use NumPy, and @ performs the matrix multiplication. Genuinely executed below.',
      descKn: 'Part 1 ಇಂದ ಮೊದಲಿನಿಂದ-ನಿರ್ಮಿಸಿದ code ಗಣಿತ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಉಪಯುಕ್ತ; ನಿಜ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳಲ್ಲಿ ನೀವು ಸಾಮಾನ್ಯವಾಗಿ NumPy ಬಳಸುತ್ತೀರಿ, ಮತ್ತು @ matrix multiplication ನಿರ್ವಹಿಸುತ್ತದೆ. ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\n\ntheta = np.pi / 4\n\nR = np.array([\n    [np.cos(theta), -np.sin(theta)],\n    [np.sin(theta),  np.cos(theta)]\n])\n\nS = np.array([\n    [2.0, 0.0],\n    [0.0, 0.5]\n])\n\npoint = np.array([1.0, 0.0])\n\nrotated = R @ point\nscaled = S @ point\n\nprint(\"Original:\", point)\nprint(\"Rotated:\", rotated)\nprint(\"Scaled:\", scaled)" } },
    { type: 'output', data: { output: "Original: [1. 0.]\nRotated: [0.70710678 0.70710678]\nScaled: [2. 0.]" } },

    { type: 'heading', data: { textEn: 'Compose Transformations', textKn: 'Compose Transformations', level: 'H2' } },
    { type: 'code', data: {
      filename: 'numpy_compose.py',
      headingEn: 'Scale After Rotation vs Rotation After Scale', headingKn: 'Rotation ನಂತರ Scale vs Scale ನಂತರ Rotation',
      descEn: 'Genuinely executed below, reusing R, S, and point from the previous block.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಹಿಂದಿನ block ಇಂದ R, S, ಮತ್ತು point ಮರುಬಳಸುತ್ತಾ.',
      code: "scale_after_rotation = S @ R @ point\nrotation_after_scale = R @ S @ point\n\nprint(\"Scale after rotation:\", scale_after_rotation)\nprint(\"Rotation after scale:\", rotation_after_scale)" } },
    { type: 'output', data: { output: "Scale after rotation: [1.41421356 0.35355339]\nRotation after scale: [1.41421356 1.41421356]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• The two results genuinely differ -- confirming S@R != R@S again, this time in NumPy rather than hand-rolled Python\n• Whenever you see A @ B @ x, read it from right to left: x -> B -> A. This matters directly for neural-network layers, coordinate transformations, computer vision, robotics, embeddings, and attention operations',
      bodyKn: '• ಎರಡು ಫಲಿತಾಂಶಗಳು ನಿಜವಾಗಿ ಭಿನ್ನವಾಗಿವೆ -- S@R != R@S ಅನ್ನೂ ಮತ್ತೆ ದೃಢಪಡಿಸುತ್ತಾ, ಈ ಬಾರಿ ಕೈ-ಬರಹದ Python ಗಿಂತ NumPy ನಲ್ಲಿ\n• A @ B @ x ಎಂದಿಗಾದರೂ ಕಂಡಾಗ, ಬಲದಿಂದ ಎಡಕ್ಕೆ ಓದಿ: x -> B -> A. ಇದೂ neural-network layers, coordinate transformations, computer vision, robotics, embeddings, ಮತ್ತು attention operations ಗೆ ನೇರವಾಗಿ ಮುಖ್ಯ' } },

    { type: 'heading', data: { textEn: '3D Transformations', textKn: '3D Transformations', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• AI systems do not only operate in 2D -- robotics, 3D vision, games, simulation, autonomous systems, and graphics commonly use 3D coordinates\n• Rotation around the z-axis: Rz = [[cos,-sin,0],[sin,cos,0],[0,0,1]] -- similar matrices rotate around x and y',
      bodyKn: '• AI systems ಗಳು ಕೇವಲ 2D ನಲ್ಲಿ ಮಾತ್ರ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದಿಲ್ಲ -- robotics, 3D vision, games, simulation, autonomous systems, ಮತ್ತು graphics ಸಾಮಾನ್ಯವಾಗಿ 3D coordinates ಬಳಸುತ್ತವೆ\n• z-axis ಸುತ್ತ Rotation: Rz = [[cos,-sin,0],[sin,cos,0],[0,0,1]] -- ಹೋಲುವ matrices x ಮತ್ತು y ಸುತ್ತ ತಿರುಗುತ್ತವೆ' } },
    { type: 'code', data: {
      filename: 'rotation_3d.py',
      headingEn: 'Rotating a 3D Point', headingKn: 'ಒಂದು 3D Point ತಿರುಗಿಸುವುದೂ',
      descEn: 'A point [1,2,3] rotated 45 degrees around the z-axis. Genuinely executed below.',
      descKn: 'ಒಂದು point [1,2,3] z-axis ಸುತ್ತ 45 ಡಿಗ್ರಿ ತಿರುಗಿಸಲಾಗಿದೆ. ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "point = np.array([1.0, 2.0, 3.0])\ntheta = np.pi / 4\n\nRz = np.array([\n    [np.cos(theta), -np.sin(theta), 0],\n    [np.sin(theta),  np.cos(theta), 0],\n    [0,              0,             1]\n])\n\nrotated = Rz @ point\nprint(\"rotated (z-axis):\", rotated)" } },
    { type: 'output', data: { output: "rotated (z-axis): [-0.70710678  2.12132034  3.        ]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: rotating around z only changes x and y -- the z-coordinate stays exactly 3.0, since a z-axis rotation cannot move a point along the axis it rotates around',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: z ಸುತ್ತ ತಿರುಗಿಸುವುದೂ ಕೇವಲ x ಮತ್ತು y ಬದಲಾಯಿಸುತ್ತದೆ -- z-coordinate ನಿಖರವಾಗಿ 3.0 ಆಗಿ ಉಳಿಯುತ್ತದೆ, ಒಂದು z-axis rotation ಇದೂ ತಿರುಗುವ axis ಉದ್ದಕ್ಕೂ ಒಂದು point ಚಲಿಸಲು ಸಾಧ್ಯವಿಲ್ಲದ ಕಾರಣ' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses 3D Transformations', headingKn: 'AI 3D Transformations ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Computer vision: a camera sees an object in one coordinate system while a robot reasons about it in another -- camera coordinates -> rotation -> translation -> robot/world coordinates\n• Robotics: a robot arm has several coordinate frames (world -> robot base -> joint 1 -> joint 2 -> end effector), and transformations let the system calculate where the end effector actually is\n• 3D AI: important in autonomous driving, LiDAR processing, 3D object detection, SLAM, robotics, AR/VR, and 3D reconstruction',
      bodyKn: '• Computer vision: ಒಂದು camera ಒಂದು coordinate system ನಲ್ಲಿ ಒಂದು ವಸ್ತು ನೋಡುತ್ತದೆ ಆದರೆ ಒಂದು robot ಇನ್ನೊಂದೂ ಬಗ್ಗೆ ಆಲೋಚಿಸುತ್ತದೆ -- camera coordinates -> rotation -> translation -> robot/world coordinates\n• Robotics: ಒಂದು robot arm ಅನೇಕ coordinate frames ಹೊಂದಿದೆ (world -> robot base -> joint 1 -> joint 2 -> end effector), ಮತ್ತು transformations system ಗೆ end effector ವಾಸ್ತವವಾಗಿ ಎಲ್ಲಿದೆ ಎಂದು ಗಣಿಸಲು ಬಿಡುತ್ತವೆ\n• 3D AI: autonomous driving, LiDAR processing, 3D object detection, SLAM, robotics, AR/VR, ಮತ್ತು 3D reconstruction ನಲ್ಲಿ ಮುಖ್ಯ',
      pillsEn: 'autonomous driving,LiDAR,3D object detection,SLAM,robotics,AR/VR,3D reconstruction',
      pillsKn: 'autonomous driving,LiDAR,3D object detection,SLAM,robotics,AR/VR,3D reconstruction' } },

    { type: 'heading', data: { textEn: 'Eigenvalues with NumPy', textKn: 'NumPy ಜೊತೆ Eigenvalues', level: 'H2' } },
    { type: 'code', data: {
      filename: 'numpy_eig.py',
      headingEn: 'np.linalg.eig( )', headingKn: 'np.linalg.eig( )',
      descEn: 'For real projects, you do not solve the characteristic equation manually. Genuinely executed below.',
      descKn: 'ನಿಜ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳಿಗೆ, ನೀವು characteristic equation ಅನ್ನೂ ಕೈಯಾರೆ ಪರಿಹರಿಸುವುದಿಲ್ಲ. ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "A = np.array([\n    [2.0, 1.0],\n    [1.0, 2.0]\n])\n\nvalues, vectors = np.linalg.eig(A)\n\nprint(\"Eigenvalues:\")\nprint(values)\n\nprint(\"\\nEigenvectors:\")\nprint(vectors)" } },
    { type: 'output', data: { output: "Eigenvalues:\n[3. 1.]\n\nEigenvectors:\n[[ 0.70710678 -0.70710678]\n [ 0.70710678  0.70710678]]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Eigenvalues genuinely match Part 2\'s hand-worked result exactly: 3 and 1\n• Genuinely worth flagging: NumPy\'s eigenvectors are [0.7071, 0.7071] and [-0.7071, 0.7071], not the [1,1] and [1,-1] from Part 2\n• That is not a disagreement -- an eigenvector\'s direction is what matters, not its length, and NumPy normalizes every eigenvector to length 1. [0.7071, 0.7071] points in exactly the same direction as [1,1] (it is [1,1] divided by its own magnitude, sqrt(2)) -- both are correct, valid eigenvectors',
      bodyKn: '• Eigenvalues ನಿಜವಾಗಿ Part 2 ನ ಕೈ-ಗಣಿಸಿದ ಫಲಿತಾಂಶಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ: 3 ಮತ್ತು 1\n• ನಿಜವಾಗಿ ಗಮನಿಸಲು ಯೋಗ್ಯ: NumPy ನ eigenvectors [0.7071, 0.7071] ಮತ್ತು [-0.7071, 0.7071], Part 2 ಇಂದ [1,1] ಮತ್ತು [1,-1] ಅಲ್ಲ\n• ಇದೂ ಒಂದು ಭಿನ್ನಾಭಿಪ್ರಾಯ ಅಲ್ಲ -- ಒಂದು eigenvector ನ direction ಮುಖ್ಯ, ಇದರ ಉದ್ದ ಅಲ್ಲ, ಮತ್ತು NumPy ಪ್ರತಿ eigenvector ಅನ್ನೂ 1 ಉದ್ದಕ್ಕೆ ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ. [0.7071, 0.7071] [1,1] ಗೆ ನಿಖರವಾಗಿ ಅದೇ direction ನಲ್ಲಿ ತೋರಿಸುತ್ತದೆ (ಇದೂ [1,1] ಅನ್ನೂ ಇದರ ಸ್ವಂತ magnitude, sqrt(2) ಇಂದ ಭಾಗಿಸಿದ್ದೂ) -- ಎರಡೂ ಸರಿಯಾದ, ಮಾನ್ಯ eigenvectors' } },

    { type: 'heading', data: { textEn: 'Verify an Eigenvector', textKn: 'ಒಂದು Eigenvector ಪರಿಶೀಲಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'verify_eigenvector_numpy.py',
      headingEn: 'Checking A @ v = lambda v With NumPy', headingKn: 'NumPy ಜೊತೆ A @ v = lambda v ಪರಿಶೀಲಿಸುವುದೂ',
      descEn: 'Directly checks the defining equation using np.allclose rather than trusting the eigendecomposition output blindly. Genuinely executed below.',
      descKn: 'Eigendecomposition output ಅನ್ನೂ ಕುರುಡಾಗಿ ನಂಬುವ ಬದಲಿಗೆ np.allclose ಬಳಸಿ ವ್ಯಾಖ್ಯಾನಿಸುವ ಸಮೀಕರಣ ನೇರವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ. ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "v = np.array([1.0, 1.0])\nlam = 3.0\n\nleft = A @ v\nright = lam * v\n\nprint(\"A @ v:\", left)\nprint(\"lambda v:\", right)\nprint(\"Equal:\", np.allclose(left, right))" } },
    { type: 'output', data: { output: "A @ v: [3. 3.]\nlambda v: [3. 3.]\nEqual: True" } },

    { type: 'heading', data: { textEn: 'Eigenvalues and PCA in Practice', textKn: 'ಪ್ರಾಯೋಗಿಕವಾಗಿ Eigenvalues ಮತ್ತು PCA', level: 'H2' } },
    { type: 'code', data: {
      filename: 'pca_covariance.py',
      headingEn: 'Eigendecomposing a Real Covariance Matrix', headingKn: 'ಒಂದು ನಿಜ Covariance Matrix ಅನ್ನೂ Eigendecompose ಮಾಡುವುದೂ',
      descEn: 'Five 2D points, centered, then their covariance matrix eigendecomposed with eigh (the symmetric-matrix eigensolver). Genuinely executed below.',
      descKn: 'ಐದು 2D points, ಕೇಂದ್ರೀಕರಿಸಲಾಗಿದೆ, ನಂತರ ಅವುಗಳ covariance matrix ಅನ್ನೂ eigh (symmetric-matrix eigensolver) ಜೊತೆ eigendecompose ಮಾಡಲಾಗಿದೆ. ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "X = np.array([\n    [2.0, 1.0],\n    [3.0, 2.0],\n    [4.0, 3.0],\n    [5.0, 4.0],\n    [6.0, 5.0]\n])\n\nX_centered = X - X.mean(axis=0)\ncovariance = np.cov(X_centered, rowvar=False)\n\nvalues, vectors = np.linalg.eigh(covariance)\n\nprint(\"Covariance matrix:\")\nprint(covariance)\n\nprint(\"\\nEigenvalues:\")\nprint(values)\n\nprint(\"\\nEigenvectors:\")\nprint(vectors)" } },
    { type: 'output', data: { output: "Covariance matrix:\n[[2.5 2.5]\n [2.5 2.5]]\n\nEigenvalues:\n[0. 5.]\n\nEigenvectors:\n[[-0.70710678  0.70710678]\n [ 0.70710678  0.70710678]]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output -- A Genuinely Clean Edge Case', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು -- ಒಂದು ನಿಜವಾಗಿ ಸ್ವಚ್ಛ Edge Case',
      bodyEn: '• This exact dataset genuinely produces eigenvalues of 0 and 5 -- not approximately zero, but exactly zero for one direction\n• That happens because every point in X was deliberately constructed to lie exactly on the line y = x - 1 -- there is zero spread perpendicular to that line, so one principal direction genuinely carries no variance at all\n• The eigenvector paired with eigenvalue 5, [0.7071, 0.7071], points exactly along that diagonal line -- the direction of all the real variation in the data\n• This is the cleanest possible illustration of what PCA does: it did not just claim a direction is more important, the eigenvalue difference (5 vs 0) is a genuine, computed, all-or-nothing split',
      bodyKn: '• ಈ ನಿಖರ dataset ನಿಜವಾಗಿ 0 ಮತ್ತು 5 ನ eigenvalues ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಸುಮಾರು ಶೂನ್ಯ ಅಲ್ಲ, ಆದರೆ ಒಂದು direction ಗೆ ನಿಖರವಾಗಿ ಶೂನ್ಯ\n• ಇದೂ ಸಂಭವಿಸುತ್ತದೆ ಏಕೆಂದರೆ X ನಲ್ಲಿ ಪ್ರತಿ point ಅನ್ನೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ line y = x - 1 ಮೇಲೆ ನಿಖರವಾಗಿ ಇರುವಂತೆ ನಿರ್ಮಿಸಲಾಗಿದೆ -- ಆ line ಗೆ ಲಂಬವಾಗಿ ಶೂನ್ಯ ಹರಡುವಿಕೆ ಇದೆ, ಆದ್ದರಿಂದ ಒಂದು ಮುಖ್ಯ direction ನಿಜವಾಗಿ ಯಾವುದೇ variance ಒಯ್ಯುವುದಿಲ್ಲ\n• Eigenvalue 5 ಜೊತೆ ಜೋಡಿಯಾದ eigenvector, [0.7071, 0.7071], ಆ diagonal line ಉದ್ದಕ್ಕೂ ನಿಖರವಾಗಿ ತೋರಿಸುತ್ತದೆ -- ಡೇಟಾದಲ್ಲಿ ಎಲ್ಲಾ ನಿಜ ವ್ಯತ್ಯಾಸದ direction\n• ಇದೂ PCA ಏನೂ ಮಾಡುತ್ತದೆ ಎಂಬುದರ ಅತ್ಯಂತ ಸ್ವಚ್ಛ ಸಾಧ್ಯ ವಿವರಣೆ: ಇದೂ ಕೇವಲ ಒಂದು direction ಹೆಚ್ಚು ಮುಖ್ಯ ಎಂದು ಪ್ರತಿಪಾದಿಸಲಿಲ್ಲ, eigenvalue ವ್ಯತ್ಯಾಸ (5 vs 0) ಒಂದು ನಿಜ, ಗಣಿಸಿದ, all-or-nothing ವಿಭಜನೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 235\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"5.6\">\n  <rect width=\"260\" height=\"235\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6.6\">PCA: The AI Mental Model</text>\n  <rect x=\"70\" y=\"20\" width=\"120\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"32\" fill=\"#93c5fd\" text-anchor=\"middle\">Original data</text>\n  <path d=\"M130,38 V46\" stroke=\"#475569\"/>\n  <rect x=\"70\" y=\"48\" width=\"120\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"60\" fill=\"#6ee7b7\" text-anchor=\"middle\">Find covariance</text>\n  <path d=\"M130,66 V74\" stroke=\"#475569\"/>\n  <rect x=\"70\" y=\"76\" width=\"120\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"88\" fill=\"#c4b5fd\" text-anchor=\"middle\">Find eigenvectors</text>\n  <path d=\"M130,94 V102\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"104\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"116\" fill=\"#fde68a\" text-anchor=\"middle\">Rank by eigenvalues</text>\n  <path d=\"M130,122 V130\" stroke=\"#475569\"/>\n  <rect x=\"45\" y=\"132\" width=\"170\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"144\" fill=\"#fca5a5\" text-anchor=\"middle\">Keep important directions</text>\n  <path d=\"M130,150 V158\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"160\" width=\"140\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"172\" fill=\"#93c5fd\" text-anchor=\"middle\">Project onto directions</text>\n  <text x=\"130\" y=\"195\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"5.2\">100 dims with 20 important directions</text>\n  <text x=\"130\" y=\"208\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"5.2\">can be represented using just those 20.</text>\n</svg>",
      titleEn: 'The Six-Step PCA Recipe', titleKn: 'ಆರು-ಹಂತದ PCA Recipe',
      captionEn: 'Every PCA implementation, however it is packaged, follows this exact chain of steps.',
      captionKn: 'ಪ್ರತಿ PCA implementation, ಇದನ್ನೂ ಹೇಗೆ ಪ್ಯಾಕೇಜ್ ಮಾಡಿದ್ದರೂ, ಈ ನಿಖರ ಹಂತಗಳ ಸರಪಳಿ ಅನುಸರಿಸುತ್ತದೆ.' } },
    { type: 'example', data: {
      tag: 'Real World: Face Recognition',
      textEn: '• Thousands of face images, each containing hundreds of thousands of pixel values, could be represented as huge vectors -- but many pixels are correlated\n• PCA can discover major variation directions such as face shape, lighting, orientation, and facial structure, representing the original high-dimensional data using far fewer dimensions',
      textKn: '• ಸಾವಿರಾರು face images, ಪ್ರತಿಯೊಂದೂ ಲಕ್ಷಾಂತರ pixel ಮೌಲ್ಯಗಳನ್ನೂ ಒಳಗೊಂಡಿದೆ, ಬೃಹತ್ vectors ಆಗಿ ಪ್ರತಿನಿಧಿಸಬಹುದು -- ಆದರೆ ಅನೇಕ pixels ಪರಸ್ಪರ ಸಂಬಂಧ ಹೊಂದಿವೆ\n• PCA face shape, lighting, orientation, ಮತ್ತು facial structure ನಂತಹ ಪ್ರಮುಖ variation directions ಕಂಡುಹಿಡಿಯಬಹುದು, ಮೂಲ ಉನ್ನತ-ಆಯಾಮದ ಡೇಟಾ ಅನ್ನೂ ಬಹಳ ಕಡಿಮೆ dimensions ಬಳಸಿ ಪ್ರತಿನಿಧಿಸುತ್ತಾ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Spectral Clustering, Real-World Applications', textKn: 'Spectral Clustering, ನಿಜ-ಪ್ರಪಂಚದ Applications', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The graph -> Laplacian -> eigenvectors -> clusters idea from Part 2 applies broadly to social networks, recommendation graphs, document similarity, biological networks, transportation networks, and knowledge graphs',
      bodyKn: '• Part 2 ಇಂದ graph -> Laplacian -> eigenvectors -> clusters ಕಲ್ಪನೆ social networks, recommendation graphs, document similarity, biological networks, transportation networks, ಮತ್ತು knowledge graphs ಗೆ ವ್ಯಾಪಕವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ',
      pillsEn: 'social networks,recommendation graphs,document similarity,biological networks,transportation networks,knowledge graphs',
      pillsKn: 'social networks,recommendation graphs,document similarity,biological networks,transportation networks,knowledge graphs' } },

    { type: 'heading', data: { textEn: 'Determinant in NumPy', textKn: 'NumPy ನಲ್ಲಿ Determinant', level: 'H2' } },
    { type: 'code', data: {
      filename: 'numpy_det.py',
      headingEn: 'np.linalg.det( )', headingKn: 'np.linalg.det( )',
      descEn: 'Genuinely executed below.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "A = np.array([\n    [2.0, 1.0],\n    [1.0, 2.0]\n])\n\ndet = np.linalg.det(A)\nprint(\"det(A) =\", det)" } },
    { type: 'output', data: { output: "det(A) = 2.9999999999999996" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• The same floating-point pattern seen with NumPy determinants in Module 15 Part 3 shows up again here: 2.9999999999999996 instead of a clean 3 -- a real, tiny rounding artifact from the general-purpose algorithm, not a bug',
      bodyKn: '• Module 15 Part 3 ನಲ್ಲಿ NumPy determinants ಜೊತೆ ಕಂಡ ಅದೇ floating-point ಮಾದರಿ ಇಲ್ಲಿ ಮತ್ತೆ ಕಾಣಿಸುತ್ತದೆ: ಒಂದು ಸ್ವಚ್ಛ 3 ಬದಲಿಗೆ 2.9999999999999996 -- ಸಾಮಾನ್ಯ-ಉದ್ದೇಶದ algorithm ಇಂದ ಒಂದು ನಿಜ, ಚಿಕ್ಕ ಸುತ್ತಿಗೊಳಿಸುವಿಕೆ artifact, ಒಂದು bug ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Singular Matrix', textKn: 'Singular Matrix', level: 'H2' } },
    { type: 'code', data: {
      filename: 'singular_check.py',
      headingEn: 'A Matrix With No Inverse', headingKn: 'ಯಾವುದೇ Inverse ಇಲ್ಲದ ಒಂದು Matrix',
      descEn: 'Genuinely executed below -- row 2 is exactly 2 times row 1.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ -- ಸಾಲು 2 ನಿಖರವಾಗಿ ಸಾಲು 1 ರ 2 ಪಟ್ಟು.',
      code: "A = np.array([\n    [1.0, 2.0],\n    [2.0, 4.0]\n])\n\nprint(np.linalg.det(A))" } },
    { type: 'output', data: { output: "0.0" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Genuinely confirmed exactly 0.0 -- this transformation has lost a dimension and has no ordinary inverse, closely related to the rank-deficiency concept from Module 15',
      bodyKn: '• ನಿಖರವಾಗಿ 0.0 ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- ಈ transformation ಒಂದು dimension ಕಳೆದುಕೊಂಡಿದೆ ಮತ್ತು ಯಾವುದೇ ಸಾಮಾನ್ಯ inverse ಹೊಂದಿಲ್ಲ, Module 15 ಇಂದ rank-deficiency ಕಲ್ಪನೆಗೆ ನಿಕಟವಾಗಿ ಸಂಬಂಧಿಸಿದೆ' } },

    { type: 'heading', data: { textEn: 'Inverse Transformation', textKn: 'Inverse Transformation', level: 'H2' } },
    { type: 'code', data: {
      filename: 'numpy_inverse.py',
      headingEn: 'A_inv @ A Should Be the Identity', headingKn: 'A_inv @ A Identity ಆಗಿರಬೇಕು',
      descEn: 'Genuinely executed below.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "A = np.array([[2.0, 1.0], [1.0, 2.0]])\nA_inv = np.linalg.inv(A)\n\nprint(\"A_inv:\")\nprint(A_inv)\nprint(\"A_inv @ A:\")\nprint(A_inv @ A)" } },
    { type: 'output', data: { output: "A_inv:\n[[ 0.66666667 -0.33333333]\n [-0.33333333  0.66666667]]\nA_inv @ A:\n[[1. 0.]\n [0. 1.]]" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A_inv @ A genuinely came out as the exact identity matrix this time -- confirming the inverse reverses the transformation exactly',
      bodyKn: '• A_inv @ A ಈ ಬಾರಿ ನಿಜವಾಗಿ ನಿಖರ identity matrix ಆಗಿ ಬಂತು -- inverse transformation ಅನ್ನೂ ನಿಖರವಾಗಿ ಹಿಮ್ಮುಖಗೊಳಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'example', data: {
      tag: 'AI Example: Coordinate Transformation',
      textEn: '• A robot detects an object at position [2,3,1] relative to the camera, but needs world coordinates\n• Camera frame -> rotation -> translation -> world frame -- fundamental to robotics and computer vision',
      textKn: '• ಒಂದು robot camera ಗೆ ಸಂಬಂಧಿಸಿದಂತೆ [2,3,1] position ನಲ್ಲಿ ಒಂದು ವಸ್ತು ಪತ್ತೆಹಚ್ಚುತ್ತದೆ, ಆದರೆ world coordinates ಬೇಕು\n• Camera frame -> rotation -> translation -> world frame -- robotics ಮತ್ತು computer vision ಗೆ ಮೂಲಭೂತ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Image Augmentation',
      textEn: '• 1000 training images can generate rotated, scaled, flipped, and sheared variants -- the model sees more variations\n• cat -> rotated cat, cat -> flipped cat, cat -> resized cat -- the label remains cat as long as the transformation preserves the meaning of the object',
      textKn: '• 1000 training images ಗಳಿಂದ ತಿರುಗಿಸಿದ, scale ಮಾಡಿದ, ಫ್ಲಿಪ್ ಮಾಡಿದ, ಮತ್ತು shear ಮಾಡಿದ variants ಉತ್ಪಾದಿಸಬಹುದು -- model ಹೆಚ್ಚಿನ variations ನೋಡುತ್ತದೆ\n• cat -> ತಿರುಗಿಸಿದ cat, cat -> ಫ್ಲಿಪ್ ಮಾಡಿದ cat, cat -> resize ಮಾಡಿದ cat -- transformation ವಸ್ತುವಿನ ಅರ್ಥ ಸಂರಕ್ಷಿಸುವವರೆಗೆ label cat ಆಗಿಯೇ ಉಳಿಯುತ್ತದೆ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Neural Network Layers',
      textEn: '• A dense layer output = W @ x + b is: x -> W -> new representation -> +b -> activation\n• A deep network repeats this: x -> W1 -> activation -> W2 -> activation -> W3 -> prediction -- a network repeatedly transforms points in a high-dimensional space',
      textKn: '• ಒಂದು dense layer output = W @ x + b ಇದೂ: x -> W -> new representation -> +b -> activation\n• ಒಂದು deep network ಇದನ್ನೂ ಪುನರಾವರ್ತಿಸುತ್ತದೆ: x -> W1 -> activation -> W2 -> activation -> W3 -> prediction -- ಒಂದು network ಒಂದು ಉನ್ನತ-ಆಯಾಮದ space ನಲ್ಲಿ points ಗಳನ್ನೂ ಪದೇ ಪದೇ ಬದಲಾಯಿಸುತ್ತದೆ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Embeddings',
      textEn: '• "king" as [0.31, -0.72, 0.18, ...] can be transformed by a neural-network layer: embedding -> W @ embedding -> new representation\n• Repeated transformations let the model construct increasingly useful representations',
      textKn: '• [0.31, -0.72, 0.18, ...] ಆಗಿ "king" ಅನ್ನೂ ಒಂದು neural-network layer ಬದಲಾಯಿಸಬಹುದು: embedding -> W @ embedding -> new representation\n• ಪುನರಾವರ್ತಿತ transformations model ಗೆ ಹೆಚ್ಚುತ್ತಿರುವ ಉಪಯುಕ್ತ representations ನಿರ್ಮಿಸಲು ಬಿಡುತ್ತವೆ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Attention',
      textEn: '• Transformers create Q = X Wq, K = X Wk, V = X Wv -- each a matrix transformation\n• Input representation -> Wq/Wk/Wv -> Query/Key/Value -> dot products -> attention weights -> weighted information -- the linear algebra from this whole lesson sits directly underneath transformer architectures',
      textKn: '• Transformers Q = X Wq, K = X Wk, V = X Wv ಸೃಷ್ಟಿಸುತ್ತವೆ -- ಪ್ರತಿಯೊಂದೂ ಒಂದು matrix transformation\n• Input representation -> Wq/Wk/Wv -> Query/Key/Value -> dot products -> attention weights -> weighted information -- ಈ ಸಂಪೂರ್ಣ lesson ಇಂದ linear algebra transformer architectures ಒಳಗೆ ನೇರವಾಗಿ ಕುಳಿತಿದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Complete Mini Build', textKn: 'ಸಂಪೂರ್ಣ Mini Build', level: 'H2' } },
    { type: 'code', data: {
      filename: 'complete_build.py',
      headingEn: 'Every Concept From This Module, in One File', headingKn: 'ಈ Module ಇಂದ ಪ್ರತಿ ಕಲ್ಪನೆ, ಒಂದು File ನಲ್ಲಿ',
      descEn: 'Rotation, scaling, shearing, reflection, composition, eigendecomposition, and determinant, all on one point and one matrix. Genuinely executed below.',
      descKn: 'Rotation, scaling, shearing, reflection, composition, eigendecomposition, ಮತ್ತು determinant, ಎಲ್ಲಾ ಒಂದು point ಮತ್ತು ಒಂದು matrix ಮೇಲೆ. ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "point = np.array([2.0, 1.0])\n\ntheta = np.pi / 4\nR = np.array([\n    [np.cos(theta), -np.sin(theta)],\n    [np.sin(theta),  np.cos(theta)]\n])\n\nS = np.array([\n    [2.0, 0.0],\n    [0.0, 0.5]\n])\n\nH = np.array([\n    [1.0, 0.5],\n    [0.0, 1.0]\n])\n\nF = np.array([\n    [-1.0, 0.0],\n    [0.0, 1.0]\n])\n\nrotated = R @ point\nscaled = S @ point\nsheared = H @ point\nreflected = F @ point\n\nprint(\"Original:\", point)\nprint(\"Rotated:\", rotated)\nprint(\"Scaled:\", scaled)\nprint(\"Sheared:\", sheared)\nprint(\"Reflected:\", reflected)\n\ncombined = H @ S @ R @ point\nprint(\"Combined transformation:\", combined)\n\nA = np.array([\n    [2.0, 1.0],\n    [1.0, 2.0]\n])\n\nvalues, vectors = np.linalg.eig(A)\nprint(\"\\nEigenvalues:\")\nprint(values)\nprint(\"\\nEigenvectors:\")\nprint(vectors)\nprint(\"\\nDeterminant:\", np.linalg.det(A))" } },
    { type: 'output', data: { output: "Original: [2. 1.]\nRotated: [0.70710678 2.12132034]\nScaled: [4.  0.5]\nSheared: [2.5 1. ]\nReflected: [-2.  1.]\nCombined transformation: [1.94454365 1.06066017]\n\nEigenvalues:\n[3. 1.]\n\nEigenvectors:\n[[ 0.70710678 -0.70710678]\n [ 0.70710678  0.70710678]]\n\nDeterminant: 2.9999999999999996" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Every individual result here matches what was genuinely verified earlier in this three-part lesson: the rotated point matches Part 1\'s (0.71, 2.12), the scaled point matches Part 1\'s (4, 0.5), the eigenvalues match Part 2\'s (3, 1), and the determinant shows the same floating-point residue seen earlier in this lesson\n• The combined transformation, H @ S @ R @ point = [1.94, 1.06], is a genuinely new result -- it was not separately verified anywhere else, so it stands on the correctness of each individual piece rather than a matching prior number, which is exactly the situation composition is supposed to handle correctly',
      bodyKn: '• ಇಲ್ಲಿ ಪ್ರತಿ ಪ್ರತ್ಯೇಕ ಫಲಿತಾಂಶ ಈ ಮೂರು-ಭಾಗಗಳ lesson ನಲ್ಲಿ ಮೊದಲು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ್ದಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: rotated point Part 1 ನ (0.71, 2.12) ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, scaled point Part 1 ನ (4, 0.5) ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, eigenvalues Part 2 ನ (3, 1) ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ, ಮತ್ತು determinant ಈ lesson ನಲ್ಲಿ ಮೊದಲು ಕಂಡ ಅದೇ floating-point ಶೇಷ ತೋರಿಸುತ್ತದೆ\n• Combined transformation, H @ S @ R @ point = [1.94, 1.06], ಒಂದು ನಿಜವಾಗಿ ಹೊಸ ಫಲಿತಾಂಶ -- ಇದನ್ನೂ ಬೇರೆಲ್ಲಿಯೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಇದೂ ಒಂದು ಹೊಂದಿಕೆಯಾಗುವ ಹಿಂದಿನ ಸಂಖ್ಯೆಗಿಂತ ಪ್ರತಿ ಪ್ರತ್ಯೇಕ ತುಣುಕಿನ ಸರಿಯಾಗಿರುವಿಕೆಯ ಮೇಲೆ ನಿಲ್ಲುತ್ತದೆ, ಇದೇ ನಿಖರವಾಗಿ composition ಸರಿಯಾಗಿ ನಿರ್ವಹಿಸಬೇಕಾದ ಪರಿಸ್ಥಿತಿ' } },

    { type: 'table', data: { captionEn: 'Real-World Transformation Map', captionKn: 'ನಿಜ-ಪ್ರಪಂಚದ Transformation Map',
      rows: 'Real-World Problem|Transformation Concept\nRotate a photograph|Rotation\nResize an image|Scaling\nCorrect a tilted document|Shearing / geometric transformation\nMirror an image|Reflection\nMove robot coordinates|Composition\n3D object orientation|Rotation matrices\nReduce dimensions|PCA\nAnalyze recurrent stability|Eigenvalues\nFind graph structure|Eigenvectors\nTransform neural representations|Matrix multiplication\nTransformer Q/K/V|Matrix multiplication' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• NumPy exists for the same reason it did in Module 15: the hand-rolled classes expose the mathematics, but real systems need the speed and stability of optimized routines -- and this lesson genuinely confirmed both versions agree, down to floating-point artifacts\n• The eigenvector-normalization difference between the hand-derived [1,1] and NumPy\'s [0.7071,0.7071] matters because it is exactly the kind of "different number, same answer" situation that causes confusion when comparing a from-scratch implementation against a library -- direction, not magnitude, is what an eigenvector claim is actually about\n• The PCA example with a genuinely zero eigenvalue is not a special trick -- it is what happens whenever real data is more redundant than it looks, and it is the cleanest possible demonstration that PCA\'s "important direction" claim is a computed fact, not a heuristic\n• Every AI example in this lesson -- coordinate transforms, augmentation, dense layers, embeddings, attention -- is the same handful of operations from Part 1 and Part 2, which is the whole point of building them by hand before ever calling NumPy',
      bodyKn: '• NumPy Module 15 ನಲ್ಲಿ ಇದ್ದ ಅದೇ ಕಾರಣಕ್ಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ: ಕೈ-ಬರಹದ classes ಗಣಿತ ಬಹಿರಂಗಪಡಿಸುತ್ತವೆ, ಆದರೆ ನಿಜ systems ಗಳಿಗೆ optimized routines ನ ವೇಗ ಮತ್ತು ಸ್ಥಿರತೆ ಬೇಕು -- ಮತ್ತು ಈ lesson ಎರಡೂ ಆವೃತ್ತಿಗಳು ಒಪ್ಪುತ್ತವೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು, floating-point artifacts ವರೆಗೆ\n• ಕೈ-derive ಮಾಡಿದ [1,1] ಮತ್ತು NumPy ನ [0.7071,0.7071] ನಡುವಿನ eigenvector-normalization ವ್ಯತ್ಯಾಸ ಮುಖ್ಯ ಏಕೆಂದರೆ ಇದೂ ನಿಖರವಾಗಿ ಒಂದು ಮೊದಲಿನಿಂದ-ನಿರ್ಮಿಸಿದ implementation ಅನ್ನೂ ಒಂದು library ವಿರುದ್ಧ ಹೋಲಿಸುವಾಗ ಗೊಂದಲ ಉಂಟುಮಾಡುವ "ಬೇರೆ ಸಂಖ್ಯೆ, ಅದೇ ಉತ್ತರ" ಪರಿಸ್ಥಿತಿ -- direction, magnitude ಅಲ್ಲ, ಒಂದು eigenvector ಪ್ರತಿಪಾದನೆ ವಾಸ್ತವವಾಗಿ ಏನೂ ಬಗ್ಗೆ\n• ನಿಜವಾಗಿ ಶೂನ್ಯ eigenvalue ಜೊತೆ PCA ಉದಾಹರಣೆ ಒಂದು ವಿಶೇಷ ಟ್ರಿಕ್ ಅಲ್ಲ -- ನಿಜ ಡೇಟಾ ಕಾಣುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು redundant ಆಗಿರುವಾಗ ಇದೂ ಸಂಭವಿಸುತ್ತದೆ, ಮತ್ತು PCA ನ "ಮುಖ್ಯ direction" ಪ್ರತಿಪಾದನೆ ಒಂದು ಗಣಿಸಿದ ಸತ್ಯ, ಒಂದು heuristic ಅಲ್ಲ ಎಂಬುದಕ್ಕೆ ಇದೂ ಅತ್ಯಂತ ಸ್ವಚ್ಛ ಸಾಧ್ಯ ಪ್ರದರ್ಶನ\n• ಈ lesson ನಲ್ಲಿ ಪ್ರತಿ AI ಉದಾಹರಣೆ -- coordinate transforms, augmentation, dense layers, embeddings, attention -- Part 1 ಮತ್ತು Part 2 ಇಂದ ಅದೇ ಕೆಲವು operations, NumPy ಎಂದಿಗೂ ಕರೆಯುವ ಮೊದಲು ಅವುಗಳನ್ನೂ ಕೈಯಿಂದ ನಿರ್ಮಿಸುವ ಸಂಪೂರ್ಣ ಉದ್ದೇಶ ಇದೇ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• NumPy reproduces every Part 1 and Part 2 result -- rotations, scaling, composition order (S@R != R@S), and eigendecomposition all genuinely matched\n• NumPy\'s eigenvectors are normalized to length 1, which can look different from a hand-derived eigenvector while pointing in exactly the same direction -- direction is what defines an eigenvector, not scale\n• A genuinely constructed dataset produced a real eigenvalue of exactly 0 -- the cleanest possible proof that PCA\'s "this direction matters more" claim is a computed fact\n• The determinant floating-point residue (2.9999999999999996 instead of 3) reproduced the same pattern found in Module 15 -- a real, expected property of general-purpose numerical routines\n• Every AI application in this module -- PCA, RNN stability, spectral clustering, computer vision augmentation, neural-network layers, embeddings, and attention -- reduces to the same operations: rotate, scale, shear, reflect, compose, and eigendecompose',
      bodyKn: '• NumPy ಪ್ರತಿ Part 1 ಮತ್ತು Part 2 ಫಲಿತಾಂಶ ಅನ್ನೂ ಮರುಉತ್ಪಾದಿಸುತ್ತದೆ -- rotations, scaling, composition order (S@R != R@S), ಮತ್ತು eigendecomposition ಎಲ್ಲಾ ನಿಜವಾಗಿ ಹೊಂದಿಕೆಯಾದವು\n• NumPy ನ eigenvectors ಉದ್ದ 1 ಗೆ ಸಾಮಾನ್ಯೀಕರಿಸಲಾಗಿದೆ, ಇದೂ ಒಂದು ಕೈ-derive ಮಾಡಿದ eigenvector ಗಿಂತ ಬೇರೆ ಕಾಣಬಹುದು ಅದೇ direction ನಲ್ಲಿ ತೋರಿಸುತ್ತಿರುವಾಗಲೇ -- direction ಒಂದು eigenvector ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ, scale ಅಲ್ಲ\n• ಒಂದು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ dataset ನಿಖರವಾಗಿ 0 ನ ಒಂದು ನಿಜ eigenvalue ಉತ್ಪಾದಿಸಿತು -- PCA ನ "ಈ direction ಹೆಚ್ಚು ಮುಖ್ಯ" ಪ್ರತಿಪಾದನೆ ಒಂದು ಗಣಿಸಿದ ಸತ್ಯ ಎಂಬುದಕ್ಕೆ ಅತ್ಯಂತ ಸ್ವಚ್ಛ ಸಾಧ್ಯ ಪುರಾವೆ\n• Determinant floating-point ಶೇಷ (3 ಬದಲಿಗೆ 2.9999999999999996) Module 15 ನಲ್ಲಿ ಕಂಡ ಅದೇ ಮಾದರಿ ಮರುಉತ್ಪಾದಿಸಿತು -- ಸಾಮಾನ್ಯ-ಉದ್ದೇಶದ numerical routines ನ ಒಂದು ನಿಜ, ನಿರೀಕ್ಷಿತ ಗುಣಲಕ್ಷಣ\n• ಈ module ನಲ್ಲಿ ಪ್ರತಿ AI ಅಪ್ಲಿಕೇಶನ್ -- PCA, RNN stability, spectral clustering, computer vision augmentation, neural-network layers, embeddings, ಮತ್ತು attention -- ಅದೇ operations ಗೆ ಕುಸಿಯುತ್ತದೆ: rotate, scale, shear, reflect, compose, ಮತ್ತು eigendecompose' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why did NumPy\'s eigenvectors [0.7071, 0.7071] look different from Part 2\'s hand-derived [1, 1] for the same matrix and eigenvalue?', qKn: 'ಅದೇ matrix ಮತ್ತು eigenvalue ಗೆ NumPy ನ eigenvectors [0.7071, 0.7071] Part 2 ನ ಕೈ-derive ಮಾಡಿದ [1, 1] ಗಿಂತ ಏಕೆ ಬೇರೆ ಕಂಡಿತು?',
        opts: ['One of the two is wrong', 'NumPy normalizes eigenvectors to length 1, so [0.7071,0.7071] points in exactly the same direction as [1,1] -- only the scale differs, and direction is what defines an eigenvector', 'They represent different eigenvalues', 'NumPy uses a completely different matrix'], correct: 1,
        optsKn: ['ಎರಡರಲ್ಲಿ ಒಂದೂ ತಪ್ಪು', 'NumPy eigenvectors ಗಳನ್ನೂ ಉದ್ದ 1 ಗೆ ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ [0.7071,0.7071] [1,1] ಗೆ ನಿಖರವಾಗಿ ಅದೇ direction ನಲ್ಲಿ ತೋರಿಸುತ್ತದೆ -- ಕೇವಲ scale ಭಿನ್ನವಾಗಿದೆ, ಮತ್ತು direction ಒಂದು eigenvector ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ', 'ಅವು ಬೇರೆ eigenvalues ಪ್ರತಿನಿಧಿಸುತ್ತವೆ', 'NumPy ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ matrix ಬಳಸುತ್ತದೆ'] },
      { q: 'Why did the genuinely constructed PCA example produce an eigenvalue of exactly 0?', qKn: 'ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ PCA ಉದಾಹರಣೆ ಏಕೆ ನಿಖರವಾಗಿ 0 ನ ಒಂದು eigenvalue ಉತ್ಪಾದಿಸಿತು?',
        opts: ['A calculation error', 'Every point in the dataset lies exactly on one line, so there is zero variance in the direction perpendicular to that line', 'NumPy always returns 0 as one eigenvalue for 2D data', 'The covariance matrix was empty'], correct: 1,
        optsKn: ['ಒಂದು ಗಣನಾ error', 'Dataset ನಲ್ಲಿ ಪ್ರತಿ point ನಿಖರವಾಗಿ ಒಂದು line ಮೇಲೆ ಇರುತ್ತದೆ, ಆದ್ದರಿಂದ ಆ line ಗೆ ಲಂಬವಾಗಿರುವ direction ನಲ್ಲಿ ಶೂನ್ಯ variance ಇದೆ', 'NumPy 2D ಡೇಟಾಗೆ ಯಾವಾಗಲೂ 0 ಅನ್ನೂ ಒಂದು eigenvalue ಆಗಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ', 'Covariance matrix ಖಾಲಿ ಆಗಿತ್ತು'] },
      { q: 'What genuine floating-point pattern reappeared when computing np.linalg.det() on [[2,1],[1,2]]?', qKn: '[[2,1],[1,2]] ಮೇಲೆ np.linalg.det() ಗಣಿಸುವಾಗ ಯಾವ ನಿಜ floating-point ಮಾದರಿ ಮತ್ತೆ ಕಾಣಿಸಿತು?',
        opts: ['The result was exactly 3 with no rounding', 'The result was 2.9999999999999996, the same kind of tiny rounding residue seen with NumPy determinants in Module 15', 'NumPy raised an error', 'The determinant returned a negative number'], correct: 1,
        optsKn: ['ಫಲಿತಾಂಶ ಯಾವುದೇ ಸುತ್ತಿಗೊಳಿಸುವಿಕೆ ಇಲ್ಲದೆ ನಿಖರವಾಗಿ 3 ಆಗಿತ್ತು', 'ಫಲಿತಾಂಶ 2.9999999999999996 ಆಗಿತ್ತು, Module 15 ನಲ್ಲಿ NumPy determinants ಜೊತೆ ಕಂಡ ಅದೇ ರೀತಿಯ ಚಿಕ್ಕ ಸುತ್ತಿಗೊಳಿಸುವಿಕೆ ಶೇಷ', 'NumPy ಒಂದು error ಎಸೆಯಿತು', 'Determinant ಒಂದು negative ಸಂಖ್ಯೆ ಹಿಂತಿರುಗಿಸಿತು'] },
      { q: 'In the Complete Mini Build, what makes the combined transformation result (H @ S @ R @ point) different from the other results in terms of verification?', qKn: 'Complete Mini Build ನಲ್ಲಿ, ಸಂಯೋಜಿತ transformation ಫಲಿತಾಂಶ (H @ S @ R @ point) ಇತರ ಫಲಿತಾಂಶಗಳಿಂದ ಪರಿಶೀಲನೆಯ ವಿಷಯದಲ್ಲಿ ಏನೂ ಭಿನ್ನವಾಗಿಸುತ್ತದೆ?',
        opts: ['It was not genuinely computed at all', 'It is a genuinely new result not separately verified elsewhere, so it relies on each individual transformation being correct rather than matching a known prior number', 'It always equals the original point', 'It was computed using a different library'], correct: 1,
        optsKn: ['ಇದನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿಲ್ಲ', 'ಇದೂ ಎಲ್ಲಿಯೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರಿಶೀಲಿಸದ ಒಂದು ನಿಜವಾಗಿ ಹೊಸ ಫಲಿತಾಂಶ, ಆದ್ದರಿಂದ ಇದೂ ಒಂದು ತಿಳಿದಿರುವ ಹಿಂದಿನ ಸಂಖ್ಯೆಗೆ ಹೊಂದಿಕೆಯಾಗುವುದಕ್ಕಿಂತ ಪ್ರತಿ ಪ್ರತ್ಯೇಕ transformation ಸರಿಯಾಗಿರುವುದರ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ', 'ಇದೂ ಯಾವಾಗಲೂ ಮೂಲ point ಗೆ ಸಮಾನ', 'ಇದನ್ನೂ ಒಂದು ಬೇರೆ library ಬಳಸಿ ಗಣಿಸಲಾಗಿದೆ'] },
      { q: 'According to this lesson, what mathematical operation sits directly underneath transformer Q, K, V generation?', qKn: 'ಈ lesson ಪ್ರಕಾರ, transformer Q, K, V ಉತ್ಪಾದನೆ ಒಳಗೆ ಯಾವ ಗಣಿತೀಯ operation ನೇರವಾಗಿ ಕುಳಿತಿದೆ?',
        opts: ['Eigendecomposition', 'Matrix multiplication (X @ Wq, X @ Wk, X @ Wv)', 'Matrix inversion', 'The determinant'], correct: 1,
        optsKn: ['Eigendecomposition', 'Matrix multiplication (X @ Wq, X @ Wk, X @ Wv)', 'Matrix inversion', 'Determinant'] },
    ] } },
  ],
};
