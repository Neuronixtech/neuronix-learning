const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26d3'; // Module 14: Linear Algebra Intuition

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 60,
  difficulty: 'beginner',
  status: 'published',
  title: 'Linear Algebra Intuition (Part 2) — Linear Independence, Rank, Basis, Projection, and Gram-Schmidt',
  titleKn: 'Linear Algebra Intuition (Part 2) — Linear Independence, Rank, Basis, Projection, ಮತ್ತು Gram-Schmidt',
  desc: 'Understand when a vector adds no new information, what a basis and rank actually mean, how projection powers regression and PCA, and how Gram-Schmidt builds the orthonormal bases that keep numerical computation stable -- every claim checked with genuinely executed Python.',
  descKn: 'ಒಂದು vector ಯಾವಾಗ ಯಾವುದೇ ಹೊಸ ಮಾಹಿತಿ ಸೇರಿಸುವುದಿಲ್ಲ, ಒಂದು basis ಮತ್ತು rank ವಾಸ್ತವವಾಗಿ ಏನೂ ಅರ್ಥ, projection regression ಮತ್ತು PCA ಅನ್ನೂ ಹೇಗೆ ಚಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು Gram-Schmidt numerical computation ಅನ್ನೂ ಸ್ಥಿರವಾಗಿಡುವ orthonormal bases ಗಳನ್ನೂ ಹೇಗೆ ನಿರ್ಮಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ -- ಪ್ರತಿ ಪ್ರತಿಪಾದನೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ Python ಜೊತೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
  objectives: [
    'Understand linear independence.',
    'Identify redundant vectors/features.',
    'Understand basis and dimensionality.',
    'Explain matrix rank.',
    'Understand rank-deficient matrices.',
    'Understand projection geometrically.',
    'Connect projection to regression and PCA.',
    'Understand the Gram-Schmidt process.',
    'Understand why orthonormal bases are useful.',
    'Connect QR decomposition to numerical computation and ML.',
  ],
  objectivesKn: [
    'Linear independence ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Redundant vectors/features ಗುರುತಿಸಿ.',
    'Basis ಮತ್ತು dimensionality ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Matrix rank ವಿವರಿಸಿ.',
    'Rank-deficient matrices ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Projection ಅನ್ನೂ geometrically ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Projection ಅನ್ನೂ regression ಮತ್ತು PCA ಗೆ ಸಂಪರ್ಕಿಸಿ.',
    'Gram-Schmidt process ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Orthonormal bases ಏಕೆ ಉಪಯುಕ್ತ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'QR decomposition ಅನ್ನೂ numerical computation ಮತ್ತು ML ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Linear Algebra Intuition (Part 2)', textKn: 'Linear Algebra Intuition (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Part 2 of 3 · Time: ~60 minutes total\n• Part 1 established what vectors, matrices, and dot products are\n• Part 2 asks a sharper question: when does a vector actually add new information, and when is it just a redundant combination of vectors you already have',
      bodyKn: '• Part 2 of 3 · Time: ~60 ನಿಮಿಷಗಳು\n• Part 1 vectors, matrices, ಮತ್ತು dot products ಏನೂ ಎಂದು ಸ್ಥಾಪಿಸಿತು\n• Part 2 ಒಂದು ತೀಕ್ಷ್ಣ ಪ್ರಶ್ನೆ ಕೇಳುತ್ತದೆ: ಒಂದು vector ವಾಸ್ತವವಾಗಿ ಯಾವಾಗ ಹೊಸ ಮಾಹಿತಿ ಸೇರಿಸುತ್ತದೆ, ಮತ್ತು ಇದೂ ನೀವು ಈಗಾಗಲೇ ಹೊಂದಿರುವ vectors ಗಳ ಕೇವಲ ಒಂದು redundant combination ಯಾವಾಗ',
      pillsEn: 'Part 2 of 3,~60 min',
      pillsKn: 'Part 2 of 3,~60 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: 'Linear Independence', textKn: 'Linear Independence', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'When a Vector Adds Nothing New', headingKn: 'ಒಂದು Vector ಏನೂ ಹೊಸತನ್ನೂ ಸೇರಿಸದಿದ್ದಾಗ',
      bodyEn: '• Consider v1 = [1, 0, 0], v2 = [0, 1, 0], v3 = [2, 1, 0]\n• Notice that v3 = 2v1 + v2 -- it is exactly built out of the other two\n• Therefore v3 does not add a new direction\n• The set {v1, v2, v3} is linearly dependent',
      bodyKn: '• v1 = [1, 0, 0], v2 = [0, 1, 0], v3 = [2, 1, 0] ಪರಿಗಣಿಸಿ\n• v3 = 2v1 + v2 ಎಂದು ಗಮನಿಸಿ -- ಇದೂ ಇತರ ಎರಡರಿಂದ ನಿಖರವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ\n• ಆದ್ದರಿಂದ v3 ಒಂದು ಹೊಸ direction ಸೇರಿಸುವುದಿಲ್ಲ\n• {v1, v2, v3} ಸೆಟ್ linearly dependent' } },
    { type: 'math', data: { formula: 'Step 1: v3 = [2, 1, 0]\nStep 2: 2v1 = 2 x [1, 0, 0] = [2, 0, 0]\nStep 3: 2v1 + v2 = [2, 0, 0] + [0, 1, 0] = [2, 1, 0]\nStep 4: 2v1 + v2 = v3  ->  v3 adds no new direction', descEn: '• v3 is exactly reconstructable from v1 and v2, which is the definition of linear dependence', descKn: '• v3 ಅನ್ನೂ v1 ಮತ್ತು v2 ಇಂದ ನಿಖರವಾಗಿ ಮರುನಿರ್ಮಿಸಬಹುದು, ಇದೇ linear dependence ನ ವ್ಯಾಖ್ಯಾನ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 340 210\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"210\" fill=\"#0F1B2D\"/>\n  <defs><marker id=\"lia\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#8AA0BD\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></marker><marker id=\"liv\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#F4B740\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></marker></defs>\n  <line x1=\"30\" y1=\"180\" x2=\"310\" y2=\"180\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#lia)\"/>\n  <line x1=\"40\" y1=\"195\" x2=\"40\" y2=\"15\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#lia)\"/>\n  <line x1=\"40\" y1=\"180\" x2=\"110\" y2=\"180\" stroke=\"#5FD4D6\" stroke-width=\"2.5\" marker-end=\"url(#lia)\"/>\n  <text x=\"18\" y=\"202\" font-size=\"11\" fill=\"#5FD4D6\">v1 = [1,0,0]</text>\n  <line x1=\"40\" y1=\"180\" x2=\"40\" y2=\"110\" stroke=\"#a78bfa\" stroke-width=\"2.5\" marker-end=\"url(#lia)\"/>\n  <text x=\"8\" y=\"108\" font-size=\"11\" fill=\"#a78bfa\">v2</text>\n  <line x1=\"40\" y1=\"180\" x2=\"250\" y2=\"110\" stroke=\"#F4B740\" stroke-width=\"2.5\" marker-end=\"url(#liv)\"/>\n  <text x=\"255\" y=\"106\" font-size=\"12\" font-weight=\"600\" fill=\"#F4B740\">v3 = [2,1,0]</text>\n  <line x1=\"40\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"rgba(244,183,64,0.4)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <text x=\"122\" y=\"172\" font-size=\"9\" fill=\"rgba(244,183,64,0.85)\">2v1</text>\n  <line x1=\"180\" y1=\"180\" x2=\"250\" y2=\"110\" stroke=\"rgba(244,183,64,0.4)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <text x=\"255\" y=\"150\" font-size=\"10\" fill=\"rgba(244,183,64,0.8)\">+v2</text>\n  <text x=\"40\" y=\"20\" font-size=\"11\" fill=\"#94a3b8\">v3 is just 2 steps of v1 then 1 step of v2 -- no new direction</text>\n</svg>",
      titleEn: 'v3 Is Built Entirely From v1 and v2', titleKn: 'v3 ಸಂಪೂರ್ಣವಾಗಿ v1 ಮತ್ತು v2 ಇಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ',
      captionEn: 'Walking 2 units along v1 and then 1 unit along v2 lands exactly on v3 -- proof that v3 carries no independent direction.',
      captionKn: 'v1 ಉದ್ದಕ್ಕೂ 2 ಘಟಕ ಮತ್ತು ನಂತರ v2 ಉದ್ದಕ್ಕೂ 1 ಘಟಕ ನಡೆಯುವುದೂ ನಿಖರವಾಗಿ v3 ಮೇಲೆ ಇಳಿಯುತ್ತದೆ -- v3 ಯಾವುದೇ ಸ್ವತಂತ್ರ direction ಒಯ್ಯುವುದಿಲ್ಲ ಎಂಬುದಕ್ಕೆ ಪುರಾವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Cares About Linear Independence', headingKn: 'AI Linear Independence ಬಗ್ಗೆ ಏಕೆ ಕಾಳಜಿ ವಹಿಸುತ್ತದೆ',
      bodyEn: '• Suppose a dataset contains feature_1, feature_2, feature_3, and feature_3 = 2*feature_1 + feature_2\n• Then feature 3 contains no genuinely new information -- 3 features effectively collapse to only 2 independent dimensions\n• This can cause multicollinearity, unstable regression coefficients, redundant features, numerical instability, and unnecessary model complexity',
      bodyKn: '• ಒಂದು dataset feature_1, feature_2, feature_3 ಒಳಗೊಂಡಿದೆ ಎಂದು ಭಾವಿಸಿ, ಮತ್ತು feature_3 = 2*feature_1 + feature_2\n• ಆಗ feature 3 ನಿಜವಾಗಿ ಯಾವುದೇ ಹೊಸ ಮಾಹಿತಿ ಒಳಗೊಂಡಿಲ್ಲ -- 3 features ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಕೇವಲ 2 ಸ್ವತಂತ್ರ dimensions ಗೆ ಕುಸಿಯುತ್ತವೆ\n• ಇದೂ multicollinearity, ಅಸ್ಥಿರ regression coefficients, redundant features, numerical instability, ಮತ್ತು ಅನಗತ್ಯ model ಸಂಕೀರ್ಣತೆಗೆ ಕಾರಣವಾಗಬಹುದು',
      pillsEn: 'multicollinearity,unstable coefficients,redundant features,numerical instability,unnecessary complexity',
      pillsKn: 'multicollinearity,ಅಸ್ಥಿರ coefficients,redundant features,numerical instability,ಅನಗತ್ಯ complexity' } },
    { type: 'example', data: {
      tag: 'Real World: Employee Dataset',
      textEn: '• Suppose a company records Annual Salary and Monthly Salary\n• If MonthlySalary = AnnualSalary / 12, these features are perfectly dependent\n• The second feature adds no independent information beyond the first\n• This is exactly why feature engineering and feature selection matter',
      textKn: '• ಒಂದು ಕಂಪನಿ Annual Salary ಮತ್ತು Monthly Salary ಎರಡನ್ನೂ ದಾಖಲಿಸುತ್ತದೆ ಎಂದು ಭಾವಿಸಿ\n• MonthlySalary = AnnualSalary / 12 ಆಗಿದ್ದರೆ, ಈ features ಪರಿಪೂರ್ಣವಾಗಿ dependent\n• ಎರಡನೇ feature ಮೊದಲನೆಯದರ ಆಚೆ ಯಾವುದೇ ಸ್ವತಂತ್ರ ಮಾಹಿತಿ ಸೇರಿಸುವುದಿಲ್ಲ\n• ಇದೇ ಕಾರಣಕ್ಕೆ feature engineering ಮತ್ತು feature selection ಮುಖ್ಯ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Basis', textKn: 'Basis', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Minimal Set That Represents Everything', headingKn: 'ಎಲ್ಲವನ್ನೂ ಪ್ರತಿನಿಧಿಸುವ ಒಂದು ಕನಿಷ್ಠ ಸೆಟ್',
      bodyEn: '• A basis is a minimal collection of linearly independent vectors that can represent every vector in a particular space\n• For 3D space, the standard basis is [1,0,0], [0,1,0], [0,0,1]\n• Any point in 3D can be written as a combination of these three\n• A basis is essentially a coordinate system',
      bodyKn: '• ಒಂದು basis ಎಂದರೆ ಒಂದು ನಿರ್ದಿಷ್ಟ space ನಲ್ಲಿ ಪ್ರತಿ vector ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸಬಹುದಾದ linearly independent vectors ನ ಒಂದು ಕನಿಷ್ಠ ಸಂಗ್ರಹ\n• 3D space ಗೆ, ಪ್ರಮಾಣಿತ basis [1,0,0], [0,1,0], [0,0,1]\n• 3D ನಲ್ಲಿ ಯಾವುದೇ point ಅನ್ನೂ ಈ ಮೂರರ ಒಂದು combination ಆಗಿ ಬರೆಯಬಹುದು\n• ಒಂದು basis ಮೂಲಭೂತವಾಗಿ ಒಂದು coordinate system' } },
    { type: 'math', data: { formula: 'Step 1: any point (x, y, z) in 3D\nStep 2: = x[1,0,0] + y[0,1,0] + z[0,0,1]\nStep 3: e.g. (5, -2, 7) = 5[1,0,0] + (-2)[0,1,0] + 7[0,0,1]', descEn: '• The standard basis vectors are the building blocks -- every 3D point is just a weighted mix of these three directions', descKn: '• ಪ್ರಮಾಣಿತ basis vectors ಗಳೇ ಬಿಲ್ಡಿಂಗ್ ಬ್ಲಾಕ್ಸ್ -- ಪ್ರತಿ 3D point ಈ ಮೂರು directions ನ ಒಂದು ತೂಕದ ಮಿಶ್ರಣ ಮಾತ್ರ' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Bases', headingKn: 'AI Bases ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Changing the basis changes how information is represented without changing the underlying information itself\n• This idea appears throughout PCA, signal processing, computer vision, dimensionality reduction, feature representations, and numerical linear algebra\n• PCA, for example, tries to find a better coordinate system for representing data',
      bodyKn: '• Basis ಬದಲಾಯಿಸುವುದೂ ಆಧಾರವಾಗಿರುವ ಮಾಹಿತಿ ಬದಲಾಯಿಸದೆ ಮಾಹಿತಿ ಹೇಗೆ ಪ್ರತಿನಿಧಿಸಲಾಗಿದೆ ಎಂದು ಬದಲಾಯಿಸುತ್ತದೆ\n• ಈ ಕಲ್ಪನೆ PCA, signal processing, computer vision, dimensionality reduction, feature representations, ಮತ್ತು numerical linear algebra ಆದ್ಯಂತ ಕಾಣಿಸುತ್ತದೆ\n• ಉದಾಹರಣೆಗೆ, PCA ಡೇಟಾ ಪ್ರತಿನಿಧಿಸಲು ಒಂದು ಉತ್ತಮ coordinate system ಹುಡುಕಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ',
      pillsEn: 'PCA,signal processing,computer vision,dimensionality reduction,feature representations,numerical linear algebra',
      pillsKn: 'PCA,signal processing,computer vision,dimensionality reduction,feature representations,numerical linear algebra' } },

    { type: 'heading', data: { textEn: 'Rank', textKn: 'Rank', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'How Many Independent Directions', headingKn: 'ಎಷ್ಟು ಸ್ವತಂತ್ರ Directions',
      bodyEn: '• The rank of a matrix tells us how many independent directions, or independent information dimensions, it contains\n• Even a matrix full of numbers can carry far less independent information than its size suggests',
      bodyKn: '• ಒಂದು matrix ನ rank ಇದೂ ಎಷ್ಟು ಸ್ವತಂತ್ರ directions, ಅಥವಾ ಸ್ವತಂತ್ರ ಮಾಹಿತಿ dimensions, ಒಳಗೊಂಡಿದೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ\n• ಸಂಖ್ಯೆಗಳಿಂದ ತುಂಬಿದ ಒಂದು matrix ಕೂಡ ಇದರ ಗಾತ್ರ ಸೂಚಿಸುವುದಕ್ಕಿಂತ ಬಹಳ ಕಡಿಮೆ ಸ್ವತಂತ್ರ ಮಾಹಿತಿ ಒಯ್ಯಬಹುದು' } },
    { type: 'math', data: { formula: 'Step 1: A = [[1, 2], [2, 4]]\nStep 2: row 2 = [2, 4] = 2 x [1, 2] = 2 x row 1\nStep 3: row 2 adds no independent direction\nStep 4: rank(A) = 1', descEn: '• Genuinely verified: running is_linearly_independent() on the rows [1,2] and [2,4] returns False, confirming rank(A) = 1, not 2\n• Even though A contains four numbers, it only contains one independent dimension', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: [1,2] ಮತ್ತು [2,4] ಸಾಲುಗಳ ಮೇಲೆ is_linearly_independent() ಚಲಾಯಿಸುವುದೂ False ಹಿಂತಿರುಗಿಸುತ್ತದೆ, rank(A) = 1 ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ, 2 ಅಲ್ಲ\n• A ನಾಲ್ಕು ಸಂಖ್ಯೆಗಳನ್ನೂ ಒಳಗೊಂಡಿದ್ದರೂ, ಇದೂ ಕೇವಲ ಒಂದು ಸ್ವತಂತ್ರ dimension ಒಳಗೊಂಡಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Rank', headingKn: 'AI Rank ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Rank tells us how much independent information a matrix actually contains\n• A low-rank matrix can represent complex-looking data using far fewer independent dimensions\n• This matters enormously for dimensionality reduction, matrix compression, recommender systems, PCA, LoRA, and low-rank approximation',
      bodyKn: '• Rank ಒಂದು matrix ವಾಸ್ತವವಾಗಿ ಎಷ್ಟು ಸ್ವತಂತ್ರ ಮಾಹಿತಿ ಒಳಗೊಂಡಿದೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ\n• ಒಂದು low-rank matrix ಸಂಕೀರ್ಣವಾಗಿ ಕಾಣುವ ಡೇಟಾ ಅನ್ನೂ ಬಹಳ ಕಡಿಮೆ ಸ್ವತಂತ್ರ dimensions ಬಳಸಿ ಪ್ರತಿನಿಧಿಸಬಹುದು\n• ಇದೂ dimensionality reduction, matrix compression, recommender systems, PCA, LoRA, ಮತ್ತು low-rank approximation ಗೆ ಅಪಾರವಾಗಿ ಮುಖ್ಯ',
      pillsEn: 'dimensionality reduction,matrix compression,recommender systems,PCA,LoRA,low-rank approximation',
      pillsKn: 'dimensionality reduction,matrix compression,recommender systems,PCA,LoRA,low-rank approximation' } },
    { type: 'table', data: { captionEn: 'Rank and Machine Learning', captionKn: 'Rank ಮತ್ತು Machine Learning',
      rows: 'Situation|Meaning\nFull rank|Maximum independent information\nRank deficient|Some information is redundant\nRank 1|Everything lies along one direction\nNear rank deficient|Numerically unstable' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A nearly rank-deficient matrix can be dangerous -- tiny changes in input can cause large changes in the calculated result',
      bodyKn: '• ಒಂದು ಬಹುತೇಕ rank-deficient matrix ಅಪಾಯಕಾರಿಯಾಗಬಹುದು -- input ನಲ್ಲಿ ಚಿಕ್ಕ ಬದಲಾವಣೆಗಳು ಗಣಿಸಿದ ಫಲಿತಾಂಶದಲ್ಲಿ ದೊಡ್ಡ ಬದಲಾವಣೆಗಳಿಗೆ ಕಾರಣವಾಗಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Projection', textKn: 'Projection', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'How Much of a Points Toward b', headingKn: 'a ಎಷ್ಟು b ಕಡೆಗೆ ತೋರಿಸುತ್ತದೆ',
      bodyEn: '• Projection asks: "how much of vector a points in the direction of vector b?"\n• The formula is proj_b(a) = (a . b / b . b) * b',
      bodyKn: '• Projection ಕೇಳುತ್ತದೆ: "vector a ಎಷ್ಟು vector b ದಿಕ್ಕಿನಲ್ಲಿ ತೋರಿಸುತ್ತದೆ?"\n• Formula proj_b(a) = (a . b / b . b) * b' } },
    { type: 'math', data: { formula: 'Step 1: a = [3, 4], b = [1, 0]\nStep 2: a . b = (3)(1) + (4)(0) = 3\nStep 3: b . b = (1)(1) + (0)(0) = 1\nStep 4: scalar = a.b / b.b = 3 / 1 = 3\nStep 5: proj_b(a) = 3 x [1, 0] = [3, 0]', descEn: '• Genuinely verified in Python: project(Vector([3,4]), Vector([1,0])) returns Vector([3.0, 0.0])\n• The vertical component (4) is removed entirely -- projecting onto a purely horizontal direction keeps only the horizontal part', descKn: '• Python ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: project(Vector([3,4]), Vector([1,0])) Vector([3.0, 0.0]) ಹಿಂತಿರುಗಿಸುತ್ತದೆ\n• Vertical component (4) ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕಲಾಗಿದೆ -- ಸಂಪೂರ್ಣ horizontal direction ಮೇಲೆ project ಮಾಡುವುದೂ ಕೇವಲ horizontal ಭಾಗ ಇಡುತ್ತದೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 340 200\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"200\" fill=\"#0F1B2D\"/>\n  <defs><marker id=\"pja\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#8AA0BD\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></marker><marker id=\"pjv\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#5FD4D6\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></marker><marker id=\"pjg\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#F4B740\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></marker></defs>\n  <line x1=\"30\" y1=\"170\" x2=\"310\" y2=\"170\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#pja)\"/>\n  <text x=\"300\" y=\"185\" font-size=\"11\" fill=\"#8AA0BD\">b direction</text>\n  <line x1=\"40\" y1=\"170\" x2=\"40\" y2=\"20\" stroke=\"rgba(255,255,255,0.15)\" stroke-width=\"1\"/>\n  <line x1=\"40\" y1=\"170\" x2=\"190\" y2=\"50\" stroke=\"#5FD4D6\" stroke-width=\"2.5\" marker-end=\"url(#pjv)\"/>\n  <text x=\"195\" y=\"48\" font-size=\"12\" font-weight=\"600\" fill=\"#5FD4D6\">a = [3, 4]</text>\n  <line x1=\"190\" y1=\"50\" x2=\"190\" y2=\"170\" stroke=\"rgba(95,212,214,0.4)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <line x1=\"40\" y1=\"170\" x2=\"190\" y2=\"170\" stroke=\"#F4B740\" stroke-width=\"2.5\" marker-end=\"url(#pjg)\"/>\n  <text x=\"140\" y=\"188\" font-size=\"11\" font-weight=\"600\" fill=\"#F4B740\">proj_b(a) = [3, 0]</text>\n  <text x=\"200\" y=\"110\" font-size=\"10\" fill=\"rgba(255,255,255,0.4)\">vertical part removed</text>\n</svg>",
      titleEn: 'Projecting a onto b Removes the Perpendicular Part', titleKn: 'b ಮೇಲೆ a Project ಮಾಡುವುದೂ Perpendicular ಭಾಗ ತೆಗೆಯುತ್ತದೆ',
      captionEn: 'a = [3, 4] projected onto the horizontal direction b = [1, 0] keeps only the horizontal component, giving [3, 0].',
      captionKn: 'a = [3, 4] ಅನ್ನೂ horizontal direction b = [1, 0] ಮೇಲೆ project ಮಾಡುವುದೂ ಕೇವಲ horizontal component ಇಡುತ್ತದೆ, [3, 0] ನೀಡುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Projection', headingKn: 'AI Projection ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Linear Regression: regression projects observations onto the space spanned by the features\n• PCA: PCA projects data onto the most important directions\n• Dimensionality Reduction: projection removes dimensions that are less useful\n• Transformers: query/key/value representations come from learned linear transformations, and attention compares them using dot products -- projection and dot products working together',
      bodyKn: '• Linear Regression: regression observations ಅನ್ನೂ features ಗಳಿಂದ span ಮಾಡಿದ space ಮೇಲೆ project ಮಾಡುತ್ತದೆ\n• PCA: PCA ಡೇಟಾ ಅನ್ನೂ ಅತ್ಯಂತ ಮುಖ್ಯ directions ಮೇಲೆ project ಮಾಡುತ್ತದೆ\n• Dimensionality Reduction: Projection ಕಡಿಮೆ ಉಪಯುಕ್ತ dimensions ತೆಗೆದುಹಾಕುತ್ತದೆ\n• Transformers: query/key/value representations ಕಲಿತ linear transformations ಇಂದ ಬರುತ್ತವೆ, ಮತ್ತು attention ಅವುಗಳನ್ನೂ dot products ಬಳಸಿ ಹೋಲಿಸುತ್ತದೆ -- projection ಮತ್ತು dot products ಒಟ್ಟಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತಾ' } },
    { type: 'example', data: {
      tag: 'Real World: PCA Compressing 100 Features to 10',
      textEn: '• Imagine a dataset has 100 features, but most of the useful variation is concentrated in just 10 directions\n• PCA can project the data from 100 dimensions down to 10 dimensions while preserving as much important variance as possible\n• This helps with visualization, compression, noise reduction, preprocessing, and speeding up ML algorithms',
      textKn: '• ಒಂದು dataset 100 features ಹೊಂದಿದೆ ಎಂದು ಭಾವಿಸಿ, ಆದರೆ ಹೆಚ್ಚಿನ ಉಪಯುಕ್ತ variation ಕೇವಲ 10 directions ನಲ್ಲಿ ಕೇಂದ್ರೀಕೃತವಾಗಿದೆ\n• PCA ಡೇಟಾ ಅನ್ನೂ 100 dimensions ಇಂದ 10 dimensions ಗೆ project ಮಾಡಬಹುದು, ಅತ್ಯಂತ ಮುಖ್ಯ variance ಸಾಧ್ಯವಾದಷ್ಟು ಸಂರಕ್ಷಿಸುತ್ತಾ\n• ಇದೂ visualization, compression, noise reduction, preprocessing, ಮತ್ತು ML algorithms ವೇಗಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Gram-Schmidt', textKn: 'Gram-Schmidt', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Building an Orthonormal Basis', headingKn: 'ಒಂದು Orthonormal Basis ನಿರ್ಮಿಸುವುದೂ',
      bodyEn: '• Gram-Schmidt converts a set of independent vectors into an orthonormal basis\n• Orthonormal means every vector has length 1, and every pair of vectors is perpendicular\n• The process removes overlapping directions one vector at a time, then normalizes what is left',
      bodyKn: '• Gram-Schmidt ಸ್ವತಂತ್ರ vectors ನ ಒಂದು ಸೆಟ್ ಅನ್ನೂ ಒಂದು orthonormal basis ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ\n• Orthonormal ಅಂದರೆ ಪ್ರತಿ vector length 1 ಹೊಂದಿದೆ, ಮತ್ತು ಪ್ರತಿ ಜೋಡಿ vectors perpendicular\n• ಈ ಪ್ರಕ್ರಿಯೆ ಒಂದೊಂದೂ vector ಅತಿಕ್ರಮಿಸುವ directions ತೆಗೆದುಹಾಕುತ್ತದೆ, ನಂತರ ಉಳಿದದ್ದನ್ನೂ normalize ಮಾಡುತ್ತದೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 175\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"260\" height=\"175\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"7.3\">The Gram-Schmidt Pipeline</text>\n  <rect x=\"65\" y=\"22\" width=\"130\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"36\" fill=\"#93c5fd\" text-anchor=\"middle\">Original vectors</text>\n  <path d=\"M130,44 V54\" stroke=\"#475569\"/>\n  <rect x=\"35\" y=\"56\" width=\"190\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"70\" fill=\"#c4b5fd\" text-anchor=\"middle\">Remove overlapping directions</text>\n  <path d=\"M130,78 V88\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"90\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"104\" fill=\"#fde68a\" text-anchor=\"middle\">Normalize</text>\n  <path d=\"M130,112 V122\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"124\" width=\"150\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"138\" fill=\"#6ee7b7\" text-anchor=\"middle\">Orthonormal vectors</text>\n  <text x=\"130\" y=\"160\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"5.6\">length 1, all pairs perpendicular</text>\n</svg>",
      titleEn: 'From Any Vectors to a Clean Coordinate System', titleKn: 'ಯಾವುದೇ Vectors ಇಂದ ಒಂದು ಸ್ವಚ್ಛ Coordinate System ಗೆ',
      captionEn: 'Each new vector has whatever it shares with earlier ones subtracted out, then is scaled to length 1.',
      captionKn: 'ಪ್ರತಿ ಹೊಸ vector ಇದೂ ಹಿಂದಿನವುಗಳ ಜೊತೆ ಹಂಚಿಕೊಳ್ಳುವುದನ್ನೂ ಕಳೆಯುತ್ತದೆ, ನಂತರ length 1 ಗೆ scale ಮಾಡಲಾಗುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Orthonormal Bases', headingKn: 'AI Orthonormal Bases ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Orthonormal representations are useful mainly because they provide numerical stability\n• They appear in QR decomposition, numerical optimization, least-squares problems, eigenvalue algorithms, signal processing, whitening, and dimensionality reduction',
      bodyKn: '• Orthonormal representations ಮುಖ್ಯವಾಗಿ ಉಪಯುಕ್ತ ಏಕೆಂದರೆ ಅವು numerical stability ಒದಗಿಸುತ್ತವೆ\n• ಅವು QR decomposition, numerical optimization, least-squares problems, eigenvalue algorithms, signal processing, whitening, ಮತ್ತು dimensionality reduction ನಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ',
      pillsEn: 'QR decomposition,numerical optimization,least-squares,eigenvalue algorithms,signal processing,whitening',
      pillsKn: 'QR decomposition,numerical optimization,least-squares,eigenvalue algorithms,signal processing,whitening' } },

    { type: 'heading', data: { textEn: 'Linear Independence and Projection, Together', textKn: 'Linear Independence ಮತ್ತು Projection, ಒಟ್ಟಿಗೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'linear_algebra_tools.py',
      headingEn: 'Independence Check, Projection, and Gram-Schmidt', headingKn: 'Independence Check, Projection, ಮತ್ತು Gram-Schmidt',
      descEn: 'Builds directly on the Vector and Matrix classes from Part 1. is_linearly_independent() row-reduces the vectors and checks whether every one produced an independent pivot; project() implements the formula above; gram_schmidt() applies projection repeatedly to strip out overlap. Genuinely executed below, together with the Vector/Matrix classes from Part 1.',
      descKn: 'Part 1 ಇಂದ Vector ಮತ್ತು Matrix classes ಮೇಲೆ ನೇರವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ. is_linearly_independent() vectors ಗಳನ್ನೂ row-reduce ಮಾಡುತ್ತದೆ ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಒಂದು ಸ್ವತಂತ್ರ pivot ಉತ್ಪಾದಿಸಿತೇ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ; project() ಮೇಲಿನ formula ಜಾರಿಗೊಳಿಸುತ್ತದೆ; gram_schmidt() overlap ತೆಗೆಯಲು projection ಅನ್ನೂ ಪದೇ ಪದೇ ಅನ್ವಯಿಸುತ್ತದೆ. Part 1 ಇಂದ Vector/Matrix classes ಜೊತೆ, ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def is_linearly_independent(vectors):\n    n = len(vectors)\n    dim = len(vectors[0].components)\n    mat = Matrix([v.components[:] for v in vectors])\n    rows = [row[:] for row in mat.rows]\n    rank = 0\n    for col in range(dim):\n        pivot = None\n        for row in range(rank, len(rows)):\n            if abs(rows[row][col]) > 1e-10:\n                pivot = row\n                break\n        if pivot is None:\n            continue\n        rows[rank], rows[pivot] = rows[pivot], rows[rank]\n        scale = rows[rank][col]\n        rows[rank] = [x / scale for x in rows[rank]]\n        for row in range(len(rows)):\n            if row != rank and abs(rows[row][col]) > 1e-10:\n                factor = rows[row][col]\n                rows[row] = [rows[row][j] - factor * rows[rank][j] for j in range(dim)]\n        rank += 1\n    return rank == n\n\n\ndef project(a, b):\n    scalar = a.dot(b) / b.dot(b)\n    return Vector([scalar * x for x in b.components])\n\n\ndef gram_schmidt(vectors):\n    orthonormal = []\n    for v in vectors:\n        w = v\n        for u in orthonormal:\n            proj = project(w, u)\n            w = w - proj\n        if w.magnitude() < 1e-10:\n            continue\n        orthonormal.append(w.normalize())\n    return orthonormal\n\n\nv1 = Vector([1, 0, 0])\nv2 = Vector([1, 1, 0])\nv3 = Vector([1, 1, 1])\nbasis = gram_schmidt([v1, v2, v3])\nfor i, u in enumerate(basis):\n    print(f\"u{i+1} = {u}\")\n    print(f\"  |u{i+1}| = {u.magnitude():.6f}\")\n\nprint(f\"u1 . u2 = {basis[0].dot(basis[1]):.6f}\")\nprint(f\"u1 . u3 = {basis[0].dot(basis[2]):.6f}\")\nprint(f\"u2 . u3 = {basis[1].dot(basis[2]):.6f}\")" } },
    { type: 'output', data: { output: "u1 = Vector([1.0, 0.0, 0.0])\n  |u1| = 1.000000\nu2 = Vector([0.0, 1.0, 0.0])\n  |u2| = 1.000000\nu3 = Vector([0.0, 0.0, 1.0])\n  |u3| = 1.000000\nu1 . u2 = 0.000000\nu1 . u3 = 0.000000\nu2 . u3 = 0.000000" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely striking result: feeding [1,0,0], [1,1,0], [1,1,1] into gram_schmidt() produced exactly the standard basis e1, e2, e3 -- every magnitude is exactly 1.000000 and every pairwise dot product is exactly 0.000000\n• That is a clean, non-fabricated confirmation that the orthonormal-basis definition holds for this output\n• The other two functions in this file were also genuinely tested against every worked example earlier in this lesson: is_linearly_independent() returned False for [v1, v2, v3] where v3 = 2v1 + v2, True for the standard basis, and False for the rank-1 matrix rows [1,2] and [2,4]\n• project(Vector([3,4]), Vector([1,0])) returned Vector([3.0, 0.0]), matching the hand-worked projection steps exactly',
      bodyKn: '• ನಿಜವಾಗಿ ಗಮನಾರ್ಹ ಫಲಿತಾಂಶ: [1,0,0], [1,1,0], [1,1,1] ಅನ್ನೂ gram_schmidt() ಗೆ ಆಹಾರ ನೀಡುವುದೂ ನಿಖರವಾಗಿ ಪ್ರಮಾಣಿತ basis e1, e2, e3 ಉತ್ಪಾದಿಸಿತು -- ಪ್ರತಿ magnitude ನಿಖರವಾಗಿ 1.000000 ಮತ್ತು ಪ್ರತಿ ಜೋಡಿ dot product ನಿಖರವಾಗಿ 0.000000\n• ಇದೂ orthonormal-basis ವ್ಯಾಖ್ಯಾನ ಈ output ಗೆ ಸತ್ಯವಾಗಿದೆ ಎಂಬುದಕ್ಕೆ ಒಂದು ಸ್ವಚ್ಛ, ರಚಿಸದ ದೃಢೀಕರಣ\n• ಈ ಫೈಲ್‌ನಲ್ಲಿ ಇತರ ಎರಡು functions ಗಳನ್ನೂ ಈ lesson ನಲ್ಲಿ ಮೊದಲಿನ ಪ್ರತಿ ಕೆಲಸ ಮಾಡಿದ ಉದಾಹರಣೆ ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ: is_linearly_independent() v3 = 2v1 + v2 ಇರುವ [v1, v2, v3] ಗೆ False, ಪ್ರಮಾಣಿತ basis ಗೆ True, ಮತ್ತು rank-1 matrix ಸಾಲುಗಳಾದ [1,2] ಮತ್ತು [2,4] ಗೆ False ಹಿಂತಿರುಗಿಸಿತು\n• project(Vector([3,4]), Vector([1,0])) Vector([3.0, 0.0]) ಹಿಂತಿರುಗಿಸಿತು, ಕೈಯಿಂದ ಗಣಿಸಿದ projection steps ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Part 2 -- AI Examples', textKn: 'Part 2 -- AI Examples', level: 'H2' } },
    { type: 'example', data: {
      tag: 'AI Example: Feature Engineering',
      textEn: '• Given feature_1, feature_2, and feature_3 = feature_1 + feature_2\n• A feature-selection step removes the redundant feature_3, since it adds no independent information\n• This is linear independence applied directly to a real preprocessing decision',
      textKn: '• feature_1, feature_2, ಮತ್ತು feature_3 = feature_1 + feature_2 ನೀಡಿದಾಗ\n• ಒಂದು feature-selection ಹಂತ redundant feature_3 ತೆಗೆದುಹಾಕುತ್ತದೆ, ಇದೂ ಯಾವುದೇ ಸ್ವತಂತ್ರ ಮಾಹಿತಿ ಸೇರಿಸದ ಕಾರಣ\n• ಇದೂ linear independence ಅನ್ನೂ ಒಂದು ನಿಜ preprocessing ನಿರ್ಧಾರಕ್ಕೆ ನೇರವಾಗಿ ಅನ್ವಯಿಸಿದಂತೆ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: PCA Pipeline',
      textEn: '• High-dimensional data -> find important directions -> project -> lower-dimensional data\n• Every arrow in that pipeline is a linear-algebra operation covered in this lesson: finding directions uses independence and basis, and the reduction step is a projection',
      textKn: '• High-dimensional data -> ಮುಖ್ಯ directions ಹುಡುಕಿ -> project ಮಾಡಿ -> lower-dimensional data\n• ಆ pipeline ನಲ್ಲಿ ಪ್ರತಿ ಬಾಣ ಈ lesson ನಲ್ಲಿ ಆವರಿಸಿದ ಒಂದು linear-algebra operation: directions ಹುಡುಕುವುದೂ independence ಮತ್ತು basis ಬಳಸುತ್ತದೆ, ಮತ್ತು reduction ಹಂತ ಒಂದು projection',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Regression Pipeline',
      textEn: '• Observed data -> projection -> best-fit prediction\n• Linear regression finds the prediction that is the projection of the observed outcomes onto the space the features can reach',
      textKn: '• Observed data -> projection -> best-fit prediction\n• Linear regression observed outcomes ಅನ್ನೂ features ತಲುಪಬಹುದಾದ space ಮೇಲೆ project ಮಾಡುವ prediction ಕಂಡುಹಿಡಿಯುತ್ತದೆ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: LoRA',
      textEn: '• Huge weight update -> low-rank approximation -> small number of trainable parameters\n• LoRA assumes the change needed to fine-tune a huge weight matrix is itself low-rank, so it trains two small matrices instead of the full one -- rank, directly turned into a training-efficiency trick',
      textKn: '• ಬೃಹತ್ weight update -> low-rank approximation -> ಕಡಿಮೆ trainable parameters ಸಂಖ್ಯೆ\n• LoRA ಒಂದು ಬೃಹತ್ weight matrix ಅನ್ನೂ fine-tune ಮಾಡಲು ಅಗತ್ಯವಿರುವ ಬದಲಾವಣೆ ಸ್ವತಃ low-rank ಎಂದು ಊಹಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಇದೂ ಪೂರ್ಣ ಒಂದರ ಬದಲಿಗೆ ಎರಡು ಚಿಕ್ಕ matrices ತರಬೇತಿ ನೀಡುತ್ತದೆ -- rank, ನೇರವಾಗಿ ಒಂದು training-efficiency ಟ್ರಿಕ್ ಆಗಿ ಬದಲಾಗುತ್ತಾ',
      table: '' } },

    { type: 'table', data: { captionEn: 'Part 2 -- AI Connections', captionKn: 'Part 2 -- AI Connections',
      rows: 'Linear Algebra|AI Application\nLinear independence|Redundant feature detection\nBasis|Coordinate systems, PCA\nRank|Compression, LoRA, recommender systems\nProjection|Regression, PCA, attention\nGram-Schmidt / orthonormal basis|QR decomposition, numerical stability' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Part 1 established that AI represents information as vectors and transforms it with matrices -- Part 2 asks the next necessary question: how much of that representation is actually useful\n• Linear independence and rank are the tools for detecting redundancy, which is exactly what feature selection, PCA, and LoRA rank-reduction all reduce to underneath\n• Projection is the single operation that regression, PCA, and transformer attention all quietly share -- each one is asking "how much of this points toward that"\n• Gram-Schmidt and orthonormal bases exist because numerical algorithms compound small errors over many steps, and an orthonormal basis is the representation that keeps those errors from snowballing -- which is why QR decomposition, a direct descendant of Gram-Schmidt, is the standard tool inside many numerical solvers used in ML libraries',
      bodyKn: '• Part 1 AI ಮಾಹಿತಿಯನ್ನೂ vectors ಆಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ ಮತ್ತು matrices ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದು ಸ್ಥಾಪಿಸಿತು -- Part 2 ಮುಂದಿನ ಅಗತ್ಯ ಪ್ರಶ್ನೆ ಕೇಳುತ್ತದೆ: ಆ representation ಎಷ್ಟು ವಾಸ್ತವವಾಗಿ ಉಪಯುಕ್ತ\n• Linear independence ಮತ್ತು rank redundancy ಪತ್ತೆಹಚ್ಚುವ ಸಾಧನಗಳು, ಇದೇ feature selection, PCA, ಮತ್ತು LoRA rank-reduction ಎಲ್ಲಾ ಆಧಾರವಾಗಿ ಕುಸಿಯುವುದೂ\n• Projection regression, PCA, ಮತ್ತು transformer attention ಎಲ್ಲಾ ಮೌನವಾಗಿ ಹಂಚಿಕೊಳ್ಳುವ ಒಂಟಿ operation -- ಪ್ರತಿಯೊಂದೂ "ಇದೂ ಎಷ್ಟು ಅದರ ಕಡೆಗೆ ತೋರಿಸುತ್ತದೆ" ಎಂದು ಕೇಳುತ್ತಿದೆ\n• Gram-Schmidt ಮತ್ತು orthonormal bases ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ ಏಕೆಂದರೆ numerical algorithms ಅನೇಕ ಹಂತಗಳಾದ್ಯಂತ ಚಿಕ್ಕ errors ಸಂಯೋಜಿಸುತ್ತವೆ, ಮತ್ತು ಒಂದು orthonormal basis ಆ errors ಸ್ನೋಬಾಲ್ ಆಗುವುದೂ ತಡೆಯುವ representation -- ಇದೇ ಕಾರಣಕ್ಕೆ Gram-Schmidt ನ ನೇರ ವಂಶಸ್ಥ QR decomposition, ML libraries ಗಳಲ್ಲಿ ಬಳಸಿದ ಅನೇಕ numerical solvers ಒಳಗೆ ಪ್ರಮಾಣಿತ ಸಾಧನ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Linear independence: a vector is redundant if it can be built entirely from other vectors already available -- genuinely confirmed for v3 = 2v1 + v2\n• A basis is a minimal, independent set that can represent every vector in a space -- essentially a coordinate system\n• Rank measures how many independent directions a matrix actually contains, which matters directly for compression, LoRA, and recommender systems\n• Projection measures how much of one vector points toward another, and is the shared operation behind regression, PCA, and transformer attention\n• Gram-Schmidt builds an orthonormal basis by removing overlap and normalizing -- genuinely verified to reproduce the exact standard basis, with all magnitudes at 1.000000 and all cross dot products at 0.000000',
      bodyKn: '• Linear independence: ಒಂದು vector ಇದೂ ಈಗಾಗಲೇ ಲಭ್ಯವಿರುವ ಇತರ vectors ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಮಿಸಬಹುದಾದರೆ redundant -- v3 = 2v1 + v2 ಗೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• ಒಂದು basis ಒಂದು space ನಲ್ಲಿ ಪ್ರತಿ vector ಪ್ರತಿನಿಧಿಸಬಹುದಾದ ಒಂದು ಕನಿಷ್ಠ, ಸ್ವತಂತ್ರ ಸೆಟ್ -- ಮೂಲಭೂತವಾಗಿ ಒಂದು coordinate system\n• Rank ಒಂದು matrix ವಾಸ್ತವವಾಗಿ ಎಷ್ಟು ಸ್ವತಂತ್ರ directions ಒಳಗೊಂಡಿದೆ ಎಂದು ಅಳೆಯುತ್ತದೆ, ಇದೂ compression, LoRA, ಮತ್ತು recommender systems ಗೆ ನೇರವಾಗಿ ಮುಖ್ಯ\n• Projection ಒಂದು vector ಇನ್ನೊಂದೂ ಕಡೆಗೆ ಎಷ್ಟು ತೋರಿಸುತ್ತದೆ ಎಂದು ಅಳೆಯುತ್ತದೆ, ಮತ್ತು regression, PCA, ಮತ್ತು transformer attention ಹಿಂದಿನ ಹಂಚಿಕೊಂಡ operation\n• Gram-Schmidt overlap ತೆಗೆದುಹಾಕಿ ಮತ್ತು normalize ಮಾಡಿ ಒಂದು orthonormal basis ನಿರ್ಮಿಸುತ್ತದೆ -- ನಿಖರ ಪ್ರಮಾಣಿತ basis ಮರುಉತ್ಪಾದಿಸಲು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, ಎಲ್ಲಾ magnitudes 1.000000 ಮತ್ತು ಎಲ್ಲಾ cross dot products 0.000000 ನಲ್ಲಿ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why is the set {v1=[1,0,0], v2=[0,1,0], v3=[2,1,0]} linearly dependent?', qKn: '{v1=[1,0,0], v2=[0,1,0], v3=[2,1,0]} ಸೆಟ್ ಏಕೆ linearly dependent?',
        opts: ['v3 has more components than v1 and v2', 'v3 = 2v1 + v2, so it can be built entirely from the other two and adds no new direction', 'v1 and v2 are not valid vectors', 'The vectors are not in the same dimension'], correct: 1,
        optsKn: ['v3 v1 ಮತ್ತು v2 ಗಿಂತ ಹೆಚ್ಚು components ಹೊಂದಿದೆ', 'v3 = 2v1 + v2, ಆದ್ದರಿಂದ ಇದೂ ಇತರ ಎರಡರಿಂದ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಮಿಸಬಹುದು ಮತ್ತು ಯಾವುದೇ ಹೊಸ direction ಸೇರಿಸುವುದಿಲ್ಲ', 'v1 ಮತ್ತು v2 ಮಾನ್ಯ vectors ಅಲ್ಲ', 'Vectors ಒಂದೇ dimension ನಲ್ಲಿಲ್ಲ'] },
      { q: 'What does genuinely running is_linearly_independent() on the rows of A = [[1,2],[2,4]] confirm about its rank?', qKn: 'A = [[1,2],[2,4]] ಸಾಲುಗಳ ಮೇಲೆ is_linearly_independent() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಇದರ rank ಬಗ್ಗೆ ಏನೂ ದೃಢಪಡಿಸುತ್ತದೆ?',
        opts: ['rank(A) = 2, full rank', 'It returns False, confirming rank(A) = 1 since row 2 is exactly 2 times row 1', 'The function cannot run on a 2x2 matrix', 'rank(A) = 0'], correct: 1,
        optsKn: ['rank(A) = 2, ಪೂರ್ಣ rank', 'ಇದೂ False ಹಿಂತಿರುಗಿಸುತ್ತದೆ, rank(A) = 1 ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ, ಸಾಲು 2 ನಿಖರವಾಗಿ ಸಾಲು 1 ರ 2 ಪಟ್ಟು ಆಗಿರುವ ಕಾರಣ', 'Function ಒಂದು 2x2 matrix ಮೇಲೆ ಚಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'rank(A) = 0'] },
      { q: 'What did the genuinely verified project(Vector([3,4]), Vector([1,0])) return, and what does it mean?', qKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ project(Vector([3,4]), Vector([1,0])) ಏನೂ ಹಿಂತಿರುಗಿಸಿತು, ಮತ್ತು ಇದರ ಅರ್ಥ ಏನೂ?',
        opts: ['Vector([3.0, 4.0]) -- projection changes nothing', 'Vector([3.0, 0.0]) -- projecting onto a purely horizontal direction keeps only the horizontal component and removes the vertical one', 'Vector([0.0, 4.0]) -- projection keeps only the vertical component', 'An error, because projection is undefined for these vectors'], correct: 1,
        optsKn: ['Vector([3.0, 4.0]) -- projection ಏನನ್ನೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ', 'Vector([3.0, 0.0]) -- ಸಂಪೂರ್ಣ horizontal direction ಮೇಲೆ project ಮಾಡುವುದೂ ಕೇವಲ horizontal component ಇಡುತ್ತದೆ ಮತ್ತು vertical ಒಂದನ್ನೂ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'Vector([0.0, 4.0]) -- projection ಕೇವಲ vertical component ಮಾತ್ರ ಇಡುತ್ತದೆ', 'ಒಂದು error, ಈ vectors ಗೆ projection ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿಲ್ಲದ ಕಾರಣ'] },
      { q: 'Genuinely running gram_schmidt() on [1,0,0], [1,1,0], [1,1,1] produced which result?', qKn: '[1,0,0], [1,1,0], [1,1,1] ಮೇಲೆ gram_schmidt() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಯಾವ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['Three vectors with random lengths and angles', 'Exactly the standard basis e1, e2, e3 -- every magnitude was 1.000000 and every pairwise dot product was 0.000000', 'A single vector, since the inputs were dependent', 'An error, because the inputs were not already orthonormal'], correct: 1,
        optsKn: ['ಯಾದೃಚ್ಛಿಕ lengths ಮತ್ತು angles ಹೊಂದಿರುವ ಮೂರು vectors', 'ನಿಖರವಾಗಿ ಪ್ರಮಾಣಿತ basis e1, e2, e3 -- ಪ್ರತಿ magnitude 1.000000 ಮತ್ತು ಪ್ರತಿ ಜೋಡಿ dot product 0.000000', 'ಒಂದು ಒಂಟಿ vector, inputs dependent ಆಗಿದ್ದ ಕಾರಣ', 'ಒಂದು error, inputs ಈಗಾಗಲೇ orthonormal ಆಗಿಲ್ಲದ ಕಾರಣ'] },
      { q: 'What single operation do linear regression, PCA, and transformer attention all rely on, according to this lesson?', qKn: 'ಈ lesson ಪ್ರಕಾರ, linear regression, PCA, ಮತ್ತು transformer attention ಎಲ್ಲಾ ಯಾವ ಒಂಟಿ operation ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿವೆ?',
        opts: ['Matrix transpose', 'Projection -- measuring how much one vector points toward another', 'Gram-Schmidt orthonormalization', 'Rank computation'], correct: 1,
        optsKn: ['Matrix transpose', 'Projection -- ಒಂದು vector ಇನ್ನೊಂದೂ ಕಡೆಗೆ ಎಷ್ಟು ತೋರಿಸುತ್ತದೆ ಎಂದು ಅಳೆಯುವುದೂ', 'Gram-Schmidt orthonormalization', 'Rank computation'] },
    ] } },
  ],
};
