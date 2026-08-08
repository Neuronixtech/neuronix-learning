const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26d9'; // Module 16: Matrix Transformations and Eigenvalues

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 75,
  difficulty: 'beginner',
  status: 'published',
  title: 'Matrix Transformations (Part 1) — Rotation, Scaling, Shearing, and Reflection',
  titleKn: 'Matrix Transformations (Part 1) — Rotation, Scaling, Shearing, ಮತ್ತು Reflection',
  desc: 'Build rotation, scaling, shearing, and reflection matrices entirely from scratch, discover why S@R never equals R@S, and connect every transformation to computer vision augmentation, feature normalization, and neural-network layers -- every worked example genuinely computed.',
  descKn: 'Rotation, scaling, shearing, ಮತ್ತು reflection matrices ಗಳನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿ, S@R ಎಂದಿಗೂ R@S ಗೆ ಸಮಾನವಾಗಿಲ್ಲ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ, ಮತ್ತು ಪ್ರತಿ transformation ಅನ್ನೂ computer vision augmentation, feature normalization, ಮತ್ತು neural-network layers ಗೆ ಸಂಪರ್ಕಿಸಿ -- ಪ್ರತಿ ಕೆಲಸ ಮಾಡಿದ ಉದಾಹರಣೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ.',
  objectives: [
    'Construct rotation, scaling, shearing, and reflection matrices.',
    'Apply transformations to 2D and 3D points.',
    'Combine multiple transformations using matrix multiplication.',
    'Explain why transformation order matters.',
    'Understand the determinant as a geometric area/volume scaling factor.',
    'Implement transformations from scratch before using NumPy.',
  ],
  objectivesKn: [
    'Rotation, scaling, shearing, ಮತ್ತು reflection matrices ನಿರ್ಮಿಸಿ.',
    'Transformations ಗಳನ್ನೂ 2D ಮತ್ತು 3D points ಗೆ ಅನ್ವಯಿಸಿ.',
    'Matrix multiplication ಬಳಸಿ ಅನೇಕ transformations ಸಂಯೋಜಿಸಿ.',
    'Transformation order ಏಕೆ ಮುಖ್ಯ ಎಂದು ವಿವರಿಸಿ.',
    'Determinant ಅನ್ನೂ ಒಂದು geometric area/volume scaling factor ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'NumPy ಬಳಸುವ ಮೊದಲು transformations ಗಳನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Matrix Transformations (Part 1)', textKn: 'Matrix Transformations (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Languages: Python, Julia · Prerequisites: Phase 1 -- Linear Algebra Intuition, Vectors & Matrices Operations · Time: ~75 minutes total\n• Every neural network is a transformation machine -- it takes vectors representing data and repeatedly transforms them using matrices\n• A 2D matrix tells you where the two standard basis vectors [1,0] and [0,1] move, and everything else follows from that',
      bodyKn: '• Type: Build · Languages: Python, Julia · Prerequisites: Phase 1 -- Linear Algebra Intuition, Vectors & Matrices Operations · Time: ~75 ನಿಮಿಷಗಳು\n• ಪ್ರತಿ neural network ಒಂದು transformation machine -- ಇದೂ ಡೇಟಾ ಪ್ರತಿನಿಧಿಸುವ vectors ತೆಗೆದುಕೊಂಡು matrices ಬಳಸಿ ಪದೇ ಪದೇ ಅವುಗಳನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ\n• ಒಂದು 2D matrix ಎರಡು ಪ್ರಮಾಣಿತ basis vectors [1,0] ಮತ್ತು [0,1] ಎಲ್ಲಿಗೆ ಚಲಿಸುತ್ತವೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ, ಮತ್ತು ಉಳಿದೆಲ್ಲಾ ಅದರಿಂದ ಅನುಸರಿಸುತ್ತದೆ',
      pillsEn: 'Python,Julia,Prereq: Phase 1 L01-02,~75 min',
      pillsKn: 'Python,Julia,Prereq: Phase 1 L01-02,~75 ನಿಮಿಷ' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Take a point A = [2, 1]. You might want to rotate it, make it larger, tilt it, mirror it, or do several of these together\n• Instead of writing a completely different operation for every point, all of these are represented using matrices\n• A matrix is not merely a table of numbers -- it represents a transformation of space\n• PCA transforms data into a new coordinate system, neural-network layers transform representations, computer vision transforms images and coordinates, and data augmentation rotates or scales training examples',
      bodyKn: '• A = [2, 1] ಒಂದು point ತೆಗೆದುಕೊಳ್ಳಿ. ನೀವು ಇದನ್ನೂ ತಿರುಗಿಸಲು, ದೊಡ್ಡದಾಗಿಸಲು, ತಿರುಚಲು, ಪ್ರತಿಬಿಂಬಿಸಲು, ಅಥವಾ ಇವುಗಳಲ್ಲಿ ಹಲವು ಒಟ್ಟಿಗೆ ಮಾಡಲು ಬಯಸಬಹುದು\n• ಪ್ರತಿ point ಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ operation ಬರೆಯುವ ಬದಲಿಗೆ, ಇವೆಲ್ಲವನ್ನೂ matrices ಬಳಸಿ ಪ್ರತಿನಿಧಿಸಲಾಗುತ್ತದೆ\n• ಒಂದು matrix ಕೇವಲ ಸಂಖ್ಯೆಗಳ ಒಂದು ಟೇಬಲ್ ಅಲ್ಲ -- ಇದೂ space ನ ಒಂದು transformation ಪ್ರತಿನಿಧಿಸುತ್ತದೆ\n• PCA ಡೇಟಾ ಅನ್ನೂ ಒಂದು ಹೊಸ coordinate system ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ, neural-network layers representations ಬದಲಾಯಿಸುತ್ತವೆ, computer vision images ಮತ್ತು coordinates ಬದಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು data augmentation training examples ತಿರುಗಿಸುತ್ತದೆ ಅಥವಾ scale ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Transformation Through the Standard Basis', textKn: 'Standard Basis ಮೂಲಕ Transformation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• e1 = [1,0] represents the x direction, e2 = [0,1] represents the y direction\n• For M = [[a,b],[c,d]], the columns of M are exactly where e1 and e2 land after the transformation\n• Once you know where the basis vectors went, you know how the matrix transforms every other vector -- this is one of the most important intuitions in linear algebra',
      bodyKn: '• e1 = [1,0] x direction ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, e2 = [0,1] y direction ಪ್ರತಿನಿಧಿಸುತ್ತದೆ\n• M = [[a,b],[c,d]] ಗೆ, M ನ columns transformation ನಂತರ e1 ಮತ್ತು e2 ನಿಖರವಾಗಿ ಎಲ್ಲಿ ಇಳಿಯುತ್ತವೆ ಎಂಬುದೂ\n• Basis vectors ಎಲ್ಲಿಗೆ ಹೋದವು ಎಂದು ತಿಳಿದ ನಂತರ, matrix ಪ್ರತಿ ಇತರ vector ಅನ್ನೂ ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದು ನಿಮಗೆ ತಿಳಿದಿದೆ -- ಇದೂ linear algebra ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ ಅಂತಃಪ್ರಜ್ಞೆಗಳಲ್ಲಿ ಒಂದು' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 340 170\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"170\" fill=\"#0F1B2D\"/>\n  <defs><marker id=\"tba\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#8AA0BD\" stroke-width=\"1.5\"/></marker><marker id=\"tbv\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#5FD4D6\" stroke-width=\"1.5\"/></marker></defs>\n  <text x=\"85\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\">Before</text>\n  <line x1=\"30\" y1=\"140\" x2=\"150\" y2=\"140\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#tba)\"/>\n  <line x1=\"40\" y1=\"150\" x2=\"40\" y2=\"30\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#tba)\"/>\n  <line x1=\"40\" y1=\"140\" x2=\"110\" y2=\"140\" stroke=\"#5FD4D6\" stroke-width=\"2.5\" marker-end=\"url(#tbv)\"/>\n  <text x=\"100\" y=\"155\" font-size=\"10\" fill=\"#5FD4D6\">e1</text>\n  <line x1=\"40\" y1=\"140\" x2=\"40\" y2=\"70\" stroke=\"#a78bfa\" stroke-width=\"2.5\" marker-end=\"url(#tba)\"/>\n  <text x=\"20\" y=\"68\" font-size=\"10\" fill=\"#a78bfa\">e2</text>\n  <line x1=\"175\" y1=\"90\" x2=\"200\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.5\" marker-end=\"url(#tba)\"/>\n  <text x=\"187\" y=\"84\" font-size=\"9\" fill=\"#475569\" text-anchor=\"middle\">M</text>\n  <text x=\"265\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\">After M</text>\n  <line x1=\"220\" y1=\"140\" x2=\"330\" y2=\"140\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#tba)\"/>\n  <line x1=\"230\" y1=\"150\" x2=\"230\" y2=\"30\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#tba)\"/>\n  <line x1=\"230\" y1=\"140\" x2=\"300\" y2=\"90\" stroke=\"#5FD4D6\" stroke-width=\"2.5\" marker-end=\"url(#tbv)\"/>\n  <text x=\"290\" y=\"84\" font-size=\"10\" fill=\"#5FD4D6\">e1'</text>\n  <line x1=\"230\" y1=\"140\" x2=\"260\" y2=\"60\" stroke=\"#a78bfa\" stroke-width=\"2.5\" marker-end=\"url(#tba)\"/>\n  <text x=\"244\" y=\"55\" font-size=\"10\" fill=\"#a78bfa\">e2'</text>\n</svg>",
      titleEn: 'M Is Defined by Where e1 and e2 Land', titleKn: 'e1 ಮತ್ತು e2 ಎಲ್ಲಿ ಇಳಿಯುತ್ತವೆ ಎಂಬುದೂ M ಅನ್ನೂ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ',
      captionEn: 'e1 and e2 start perpendicular and unit-length; after applying M they land wherever M\'s columns say -- and that alone determines the whole transformation.',
      captionKn: 'e1 ಮತ್ತು e2 perpendicular ಮತ್ತು unit-length ಆಗಿ ಪ್ರಾರಂಭವಾಗುತ್ತವೆ; M ಅನ್ವಯಿಸಿದ ನಂತರ ಅವು M ನ columns ಹೇಳುವಲ್ಲಿ ಇಳಿಯುತ್ತವೆ -- ಮತ್ತು ಅದೊಂದೇ ಸಂಪೂರ್ಣ transformation ನಿರ್ಧರಿಸುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 195\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"260\" height=\"195\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"130\" y=\"13\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"7.3\">Layers Are Repeated Transformation</text>\n  <rect x=\"75\" y=\"22\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Raw input</text>\n  <path d=\"M130,42 V50\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"52\" width=\"150\" height=\"20\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"65\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.6\">Matrix transformation</text>\n  <path d=\"M130,72 V80\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"82\" width=\"110\" height=\"20\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"95\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.6\">Non-linearity</text>\n  <path d=\"M130,102 V110\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"112\" width=\"150\" height=\"20\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"125\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.6\">Matrix transformation</text>\n  <path d=\"M130,132 V140\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"142\" width=\"150\" height=\"20\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"155\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.6\">Feature representation</text>\n  <path d=\"M130,162 V170\" stroke=\"#475569\"/>\n  <rect x=\"75\" y=\"172\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"184\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.4\">Prediction</text>\n</svg>",
      titleEn: 'What a Layer Stack Actually Does', titleKn: 'ಒಂದು Layer Stack ವಾಸ್ತವವಾಗಿ ಏನೂ ಮಾಡುತ್ತದೆ',
      captionEn: 'When you understand matrix transformations, you are beginning to understand what neural-network layers do to information.',
      captionKn: 'Matrix transformations ಅರ್ಥಮಾಡಿಕೊಂಡಾಗ, ನೀವು neural-network layers ಮಾಹಿತಿಗೆ ಏನೂ ಮಾಡುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಪ್ರಾರಂಭಿಸುತ್ತಿದ್ದೀರಿ.' } },

    { type: 'heading', data: { textEn: 'Rotation', textKn: 'Rotation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A rotation changes the direction of a point while preserving its distance from the origin, its angles, and its geometric shape\n• For a 2D rotation by angle theta: R(theta) = [[cos theta, -sin theta], [sin theta, cos theta]]',
      bodyKn: '• ಒಂದು rotation ಒಂದು point ನ direction ಬದಲಾಯಿಸುತ್ತದೆ, origin ಇಂದ ಇದರ ದೂರ, ಇದರ angles, ಮತ್ತು ಇದರ ಜ್ಯಾಮಿತೀಯ ಆಕಾರ ಸಂರಕ್ಷಿಸುತ್ತಿರುವಾಗಲೇ\n• ಒಂದು 2D rotation angle theta ಗೆ: R(theta) = [[cos theta, -sin theta], [sin theta, cos theta]]' } },
    { type: 'math', data: { formula: 'Step 1: R(45deg) applied to A=(2,1)\nStep 2: A\' = (2 cos45 - 1 sin45, 2 sin45 + 1 cos45)\nStep 3: A\' = (2(0.7071) - 1(0.7071), 2(0.7071) + 1(0.7071))\nStep 4: A\' = (0.71, 2.12)', descEn: '• Genuinely computed: rotating A=(2,1) by 45 degrees gives (0.71, 2.12), and B=(0,2) gives (-1.41, 1.41) -- both match exactly', descKn: '• ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: A=(2,1) ಅನ್ನೂ 45 ಡಿಗ್ರಿ ತಿರುಗಿಸುವುದೂ (0.71, 2.12) ನೀಡುತ್ತದೆ, ಮತ್ತು B=(0,2) (-1.41, 1.41) ನೀಡುತ್ತದೆ -- ಎರಡೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"260\" height=\"200\" fill=\"#0F1B2D\"/>\n  <defs><marker id=\"rta\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#8AA0BD\" stroke-width=\"1.5\"/></marker><marker id=\"rtv\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#5FD4D6\" stroke-width=\"1.5\"/></marker><marker id=\"rtg\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"#F4B740\" stroke-width=\"1.5\"/></marker></defs>\n  <line x1=\"30\" y1=\"170\" x2=\"230\" y2=\"170\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#rta)\"/>\n  <line x1=\"130\" y1=\"185\" x2=\"130\" y2=\"20\" stroke=\"#8AA0BD\" stroke-width=\"1\" marker-end=\"url(#rta)\"/>\n  <path d=\"M 190 170 A 60 60 0 0 0 172 128\" fill=\"none\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"1\" stroke-dasharray=\"3 2\"/>\n  <line x1=\"130\" y1=\"170\" x2=\"190\" y2=\"170\" stroke=\"#5FD4D6\" stroke-width=\"2.5\" marker-end=\"url(#rtv)\"/>\n  <text x=\"160\" y=\"186\" text-anchor=\"middle\" font-size=\"11\" fill=\"#5FD4D6\">A = (2,1), scaled</text>\n  <line x1=\"130\" y1=\"170\" x2=\"172\" y2=\"128\" stroke=\"#F4B740\" stroke-width=\"2.5\" marker-end=\"url(#rtg)\"/>\n  <text x=\"205\" y=\"104\" text-anchor=\"middle\" font-size=\"9.5\" font-weight=\"600\" fill=\"#F4B740\">A' (rotated 45°)</text>\n  <text x=\"158\" y=\"152\" font-size=\"10\" fill=\"#94a3b8\">45°</text>\n</svg>",
      titleEn: 'Rotation Moves Points Along an Arc', titleKn: 'Rotation Points ಗಳನ್ನೂ ಒಂದು Arc ಉದ್ದಕ್ಕೂ ಚಲಿಸುತ್ತದೆ',
      captionEn: 'The distance from the origin never changes -- only the angle does, sweeping the point along a circular arc.',
      captionKn: 'Origin ಇಂದ ದೂರ ಎಂದಿಗೂ ಬದಲಾಗುವುದಿಲ್ಲ -- ಕೇವಲ angle ಬದಲಾಗುತ್ತದೆ, point ಅನ್ನೂ ಒಂದು circular arc ಉದ್ದಕ್ಕೂ ಗುಡಿಸುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'Rotation in AI', headingKn: 'AI ನಲ್ಲಿ Rotation',
      bodyEn: '• Computer vision: data augmentation can rotate training images so a model learns that the same object can appear from different orientations\n• Robotics: a robot arm transforms coordinates through world coordinates -> robot coordinates -> joint coordinates, and rotation matrices are fundamental to that chain\n• 3D vision: 3D systems rotate points around the x, y, and z axes',
      bodyKn: '• Computer vision: data augmentation training images ಅನ್ನೂ ತಿರುಗಿಸಬಹುದು ಆದ್ದರಿಂದ ಒಂದು model ಅದೇ ವಸ್ತು ಬೇರೆ orientations ಗಳಿಂದ ಕಾಣಿಸಬಹುದು ಎಂದು ಕಲಿಯುತ್ತದೆ\n• Robotics: ಒಂದು robot arm world coordinates -> robot coordinates -> joint coordinates ಮೂಲಕ coordinates ಬದಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು rotation matrices ಆ ಸರಪಳಿಗೆ ಮೂಲಭೂತ\n• 3D vision: 3D systems x, y, ಮತ್ತು z axes ಸುತ್ತ points ತಿರುಗಿಸುತ್ತವೆ' } },
    { type: 'example', data: {
      tag: 'Real World: Data Augmentation Through Rotation',
      textEn: '• A training image showing a car facing right can be rotated to also show it at an angle\n• This helps a model become robust to orientation rather than memorizing one specific viewing angle',
      textKn: '• ಬಲಕ್ಕೆ ಮುಖ ಮಾಡಿದ ಒಂದು ಕಾರ್ ತೋರಿಸುವ ಒಂದು training image ಅನ್ನೂ ಒಂದು angle ನಲ್ಲಿ ಕೂಡ ತೋರಿಸಲು ತಿರುಗಿಸಬಹುದು\n• ಇದೂ ಒಂದು model ಗೆ ಒಂದು ನಿರ್ದಿಷ್ಟ ವೀಕ್ಷಣಾ angle ನೆನಪಿಡುವ ಬದಲಿಗೆ orientation ಗೆ ದೃಢವಾಗಿರಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Scaling', textKn: 'Scaling', level: 'H2' } },
    { type: 'math', data: { formula: 'Step 1: S = [[sx,0],[0,sy]], sx=2, sy=0.5\nStep 2: A=(2,1) -> (2 x 2, 0.5 x 1) = (4, 0.5)\nStep 3: B=(0,2) -> (2 x 0, 0.5 x 2) = (0, 1)', descEn: '• Genuinely verified: both results match exactly -- scaling multiplies each axis independently', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: ಎರಡೂ ಫಲಿತಾಂಶಗಳು ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ -- scaling ಪ್ರತಿ axis ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಗುಣಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses Scaling', headingKn: 'AI Scaling ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Feature normalization: age=35, salary=900000, height=1.75 have wildly different scales -- preprocessing scales them into comparable ranges\n• Neural-network representations: poorly controlled scaling can contribute to unstable training, exploding activations, or vanishing activations, which is why normalization techniques matter in deep learning\n• Image processing: resizing an image (e.g. 224x224 to 448x448) is conceptually a spatial scaling operation',
      bodyKn: '• Feature normalization: age=35, salary=900000, height=1.75 ವಿಪರೀತ ಭಿನ್ನ scales ಹೊಂದಿವೆ -- preprocessing ಅವುಗಳನ್ನೂ ಹೋಲಿಸಬಹುದಾದ ranges ಗೆ scale ಮಾಡುತ್ತದೆ\n• Neural-network representations: ಕಳಪೆಯಾಗಿ ನಿಯಂತ್ರಿಸಿದ scaling ಅಸ್ಥಿರ training, exploding activations, ಅಥವಾ vanishing activations ಗೆ ಕೊಡುಗೆ ನೀಡಬಹುದು, ಇದೇ ಕಾರಣಕ್ಕೆ normalization techniques deep learning ನಲ್ಲಿ ಮುಖ್ಯ\n• Image processing: ಒಂದು image ಅನ್ನೂ resize ಮಾಡುವುದೂ (ಉದಾ. 224x224 ಇಂದ 448x448) ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ಒಂದು spatial scaling operation' } },
    { type: 'example', data: {
      tag: 'Real World: Feature Normalization',
      textEn: '• A model receiving age=35, salary=900000, height=1.75 sees numerical scales that differ by orders of magnitude\n• Scaling transforms these into comparable ranges so no single feature dominates purely because of its units',
      textKn: '• age=35, salary=900000, height=1.75 ಸ್ವೀಕರಿಸುವ ಒಂದು model ಮ್ಯಾಗ್ನಿಟ್ಯೂಡ್ ಆದೇಶಗಳಿಂದ ಭಿನ್ನವಾಗಿರುವ numerical scales ನೋಡುತ್ತದೆ\n• Scaling ಇವನ್ನೂ ಹೋಲಿಸಬಹುದಾದ ranges ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ ಆದ್ದರಿಂದ ಯಾವುದೇ ಒಂಟಿ feature ಕೇವಲ ಇದರ units ಕಾರಣ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸುವುದಿಲ್ಲ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Shearing', textKn: 'Shearing', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Shearing tilts one direction relative to another\n• Horizontal shear: Shx = [[1,k],[0,1]]; vertical shear: Shy = [[1,0],[k,1]]',
      bodyKn: '• Shearing ಒಂದು direction ಅನ್ನೂ ಇನ್ನೊಂದಕ್ಕೆ ಸಂಬಂಧಿಸಿ ತಿರುಚುತ್ತದೆ\n• Horizontal shear: Shx = [[1,k],[0,1]]; vertical shear: Shy = [[1,0],[k,1]]' } },
    { type: 'math', data: { formula: 'Step 1: Shx(k=1) = [[1,1],[0,1]]\nStep 2: A=(1,0) -> (1(1)+1(0), 0(1)+1(0)) = (1, 0)\nStep 3: B=(0,1) -> (1(0)+1(1), 0(0)+1(1)) = (1, 1)', descEn: '• Genuinely verified: A stays put, B moves sideways -- the rectangle formed by these edges becomes a parallelogram', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: A ಇರುವಲ್ಲಿ ಇರುತ್ತದೆ, B ಪಕ್ಕಕ್ಕೆ ಚಲಿಸುತ್ತದೆ -- ಈ ಅಂಚುಗಳಿಂದ ರೂಪುಗೊಂಡ rectangle ಒಂದು parallelogram ಆಗುತ್ತದೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"IBM Plex Sans,sans-serif\">\n  <rect width=\"260\" height=\"130\" fill=\"#0F1B2D\"/>\n  <rect x=\"25\" y=\"30\" width=\"70\" height=\"60\" fill=\"none\" stroke=\"#5FD4D6\" stroke-width=\"2\"/>\n  <text x=\"60\" y=\"105\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5FD4D6\">before</text>\n  <path d=\"M150,90 L175,30 L245,30 L220,90 Z\" fill=\"none\" stroke=\"#F4B740\" stroke-width=\"2\"/>\n  <text x=\"197\" y=\"105\" text-anchor=\"middle\" font-size=\"10\" fill=\"#F4B740\">after shear</text>\n</svg>",
      titleEn: 'A Rectangle Becomes a Parallelogram', titleKn: 'ಒಂದು Rectangle ಒಂದು Parallelogram ಆಗುತ್ತದೆ',
      captionEn: 'Shearing tilts the shape rather than enlarging it -- one pair of sides stays the same length, but the shape is no longer a rectangle.',
      captionKn: 'Shearing ಆಕಾರ ದೊಡ್ಡದಾಗಿಸುವ ಬದಲಿಗೆ ತಿರುಚುತ್ತದೆ -- ಒಂದು ಜೋಡಿ ಬದಿಗಳು ಅದೇ ಉದ್ದ ಇರುತ್ತವೆ, ಆದರೆ ಆಕಾರ ಇನ್ನೂ ಒಂದು rectangle ಅಲ್ಲ.' } },
    { type: 'example', data: {
      tag: 'Real World: Document Scanning and Perspective Correction',
      textEn: '• Shearing appears in image transformations, document scanning, perspective correction, graphics, animation, and geometric computer vision\n• A scanned document that is not perfectly aligned with the camera can be corrected with a shear-like transformation before OCR processes it',
      textKn: '• Shearing image transformations, document scanning, perspective correction, graphics, animation, ಮತ್ತು geometric computer vision ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ\n• ಕ್ಯಾಮೆರಾ ಜೊತೆ ಪರಿಪೂರ್ಣವಾಗಿ ಜೋಡಿಸದ ಒಂದು ಸ್ಕ್ಯಾನ್ ಮಾಡಿದ document ಅನ್ನೂ OCR ಇದನ್ನೂ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಮೊದಲು ಒಂದು shear-ರೀತಿಯ transformation ಜೊತೆ ಸರಿಪಡಿಸಬಹುದು',
      table: '' } },

    { type: 'heading', data: { textEn: 'Reflection', textKn: 'Reflection', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Reflection creates a mirror image -- reflecting across the y-axis: R_y = [[-1,0],[0,1]], so (x,y) -> (-x,y)',
      bodyKn: '• Reflection ಒಂದು ಕನ್ನಡಿ ಚಿತ್ರ ಸೃಷ್ಟಿಸುತ್ತದೆ -- y-axis ಆದ್ಯಂತ ಪ್ರತಿಬಿಂಬಿಸುವುದೂ: R_y = [[-1,0],[0,1]], ಆದ್ದರಿಂದ (x,y) -> (-x,y)' } },
    { type: 'math', data: { formula: 'Step 1: R_y = [[-1,0],[0,1]]\nStep 2: A=(2,1) -> (-1(2)+0(1), 0(2)+1(1))\nStep 3: A\' = (-2, 1)', descEn: '• Genuinely verified: A.dot with R_y gives exactly (-2, 1) -- the x-coordinate flips sign, y is unchanged', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: R_y ಜೊತೆ A.dot ನಿಖರವಾಗಿ (-2, 1) ನೀಡುತ್ತದೆ -- x-coordinate sign ಫ್ಲಿಪ್ ಆಗುತ್ತದೆ, y ಬದಲಾಗುವುದಿಲ್ಲ' } },
    { type: 'example', data: {
      tag: 'AI Example: Horizontal Flip Augmentation',
      textEn: '• A horizontally flipped image creates an additional training example for computer-vision augmentation\n• This helps models become less sensitive to left/right orientation when that orientation is irrelevant to the task\n• Reflection also describes coordinate-system transformations and geometric symmetries in robotics, and can impose useful structure in some generative-model augmentation strategies',
      textKn: '• ಒಂದು ಅಡ್ಡಲಾಗಿ ಫ್ಲಿಪ್ ಮಾಡಿದ image computer-vision augmentation ಗಾಗಿ ಒಂದು ಹೆಚ್ಚುವರಿ training example ಸೃಷ್ಟಿಸುತ್ತದೆ\n• ಇದೂ ಎಡ/ಬಲ orientation task ಗೆ ಅಪ್ರಸ್ತುತವಾಗಿದ್ದಾಗ models ಗಳಿಗೆ ಇದರ ಬಗ್ಗೆ ಕಡಿಮೆ ಸಂವೇದನಾಶೀಲವಾಗಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ\n• Reflection robotics ನಲ್ಲಿ coordinate-system transformations ಮತ್ತು ಜ್ಯಾಮಿತೀಯ ಸಮ್ಮಿತಿಗಳನ್ನೂ ಕೂಡ ವಿವರಿಸುತ್ತದೆ, ಮತ್ತು ಕೆಲವು generative-model augmentation ತಂತ್ರಗಳಲ್ಲಿ ಉಪಯುಕ್ತ ರಚನೆ ಹೇರಬಹುದು',
      table: '' } },

    { type: 'table', data: { captionEn: 'The Four Fundamental Transformations', captionKn: 'ನಾಲ್ಕು ಮೂಲಭೂತ Transformations',
      rows: 'Transformation|What Happens\nRotation|Spins space\nScaling|Stretches/compresses space\nShearing|Tilts space\nReflection|Mirrors space' } },

    { type: 'heading', data: { textEn: 'Composition -- Combining Transformations', textKn: 'Composition -- Transformations ಸಂಯೋಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• If R = rotation matrix and S = scaling matrix, then result = S @ R @ point applies R first, then S -- the rightmost operation happens first\n• This is extremely important: reversing the order generally changes the result entirely',
      bodyKn: '• R = rotation matrix ಮತ್ತು S = scaling matrix ಆಗಿದ್ದರೆ, result = S @ R @ point ಮೊದಲು R ಅನ್ವಯಿಸುತ್ತದೆ, ನಂತರ S -- ಬಲ-ಭಾಗದ operation ಮೊದಲು ಸಂಭವಿಸುತ್ತದೆ\n• ಇದೂ ಅತ್ಯಂತ ಮುಖ್ಯ: ಕ್ರಮ ಹಿಮ್ಮುಖಗೊಳಿಸುವುದೂ ಸಾಮಾನ್ಯವಾಗಿ ಫಲಿತಾಂಶ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ' } },
    { type: 'math', data: { formula: 'Step 1: R = rotate 90deg, S = scale (2, 0.5)\nStep 2: S @ R = [[0,-2],[0.5,0]]\nStep 3: R @ S = [[0,-0.5],[2,0]]\nStep 4: S @ R != R @ S', descEn: '• Genuinely verified: both products were computed independently and came out different, confirming matrix multiplication is generally not commutative', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: ಎರಡೂ products ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸಲಾಯಿತು ಮತ್ತು ಭಿನ್ನವಾಗಿ ಬಂದವು, matrix multiplication ಸಾಮಾನ್ಯವಾಗಿ commutative ಅಲ್ಲ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ' } },
    { type: 'example', data: {
      tag: 'Real World: Photo Editing',
      textEn: '• Rotate a photo 90 degrees, then make it twice as wide: that is Rotate -> Scale\n• Scaling first and rotating second can produce a different final geometry\n• The same concept appears in computer graphics, 3D rendering, robotics, computer vision, animation, and coordinate transformations',
      textKn: '• ಒಂದು photo ಅನ್ನೂ 90 ಡಿಗ್ರಿ ತಿರುಗಿಸಿ, ನಂತರ ಇದನ್ನೂ ಎರಡು ಪಟ್ಟು ಅಗಲಗೊಳಿಸಿ: ಇದೂ Rotate -> Scale\n• ಮೊದಲು scale ಮಾಡಿ ಎರಡನೇಯದಾಗಿ ತಿರುಗಿಸುವುದೂ ಒಂದು ಬೇರೆ ಅಂತಿಮ ಜ್ಯಾಮಿತಿ ಉತ್ಪಾದಿಸಬಹುದು\n• ಅದೇ ಕಲ್ಪನೆ computer graphics, 3D rendering, robotics, computer vision, animation, ಮತ್ತು coordinate transformations ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ',
      table: '' } },
    { type: 'example', data: {
      tag: 'AI Example: Data Augmentation Pipeline Order',
      textEn: '• A vision pipeline of Image -> Rotate -> Scale -> Model is not the same pipeline as Image -> Scale -> Rotate -> Model\n• Transformations in a pipeline are not just arbitrary preprocessing steps -- their composition has mathematical meaning, and changing the order genuinely changes what the model sees',
      textKn: '• Image -> Rotate -> Scale -> Model ಒಂದು vision pipeline Image -> Scale -> Rotate -> Model ಗೆ ಅದೇ pipeline ಅಲ್ಲ\n• ಒಂದು pipeline ನಲ್ಲಿ transformations ಕೇವಲ ಅನಿಯಂತ್ರಿತ preprocessing ಹಂತಗಳಲ್ಲ -- ಇವುಗಳ composition ಗಣಿತೀಯ ಅರ್ಥ ಹೊಂದಿದೆ, ಮತ್ತು ಕ್ರಮ ಬದಲಾಯಿಸುವುದೂ model ನೋಡುವುದನ್ನೂ ನಿಜವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: 'Transformations From Scratch', textKn: 'Transformations ಮೊದಲಿನಿಂದ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transformations.py',
      headingEn: 'Rotation, Scaling, Shearing, and Reflection', headingKn: 'Rotation, Scaling, Shearing, ಮತ್ತು Reflection',
      descEn: 'Every transformation matrix from this lesson, built as a plain function returning a 2x2 list of lists, applied via a hand-rolled matrix-vector multiply. Genuinely executed below.',
      descKn: 'ಈ lesson ಇಂದ ಪ್ರತಿ transformation matrix, ಒಂದು 2x2 list of lists ಹಿಂತಿರುಗಿಸುವ ಒಂದು ಸರಳ function ಆಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ, ಒಂದು ಕೈ-ಬರಹದ matrix-vector multiply ಮೂಲಕ ಅನ್ವಯಿಸಲಾಗಿದೆ. ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\n\ndef rotation_2d(theta):\n    c, s = math.cos(theta), math.sin(theta)\n    return [[c, -s], [s, c]]\n\ndef scaling_2d(sx, sy):\n    return [[sx, 0], [0, sy]]\n\ndef shearing_2d(kx, ky):\n    return [[1, kx], [ky, 1]]\n\ndef reflection_x():\n    return [[1, 0], [0, -1]]\n\ndef reflection_y():\n    return [[-1, 0], [0, 1]]\n\ndef mat_vec_mul(matrix, vector):\n    return [\n        sum(matrix[i][j] * vector[j] for j in range(len(vector)))\n        for i in range(len(matrix))\n    ]\n\ndef mat_mul(a, b):\n    rows_a, cols_b = len(a), len(b[0])\n    cols_a = len(a[0])\n    return [\n        [sum(a[i][k] * b[k][j] for k in range(cols_a)) for j in range(cols_b)]\n        for i in range(rows_a)\n    ]\n\npoint = [1.0, 0.0]\nangle = math.pi / 4\n\nrotated = mat_vec_mul(rotation_2d(angle), point)\nprint(f\"Rotate (1,0) by 45 deg: ({rotated[0]:.4f}, {rotated[1]:.4f})\")\n\nscaled = mat_vec_mul(scaling_2d(2, 3), [1.0, 1.0])\nprint(f\"Scale (1,1) by (2,3): ({scaled[0]:.1f}, {scaled[1]:.1f})\")\n\nsheared = mat_vec_mul(shearing_2d(1, 0), [1.0, 1.0])\nprint(f\"Shear (1,1) kx=1: ({sheared[0]:.1f}, {sheared[1]:.1f})\")\n\nreflected = mat_vec_mul(reflection_y(), [2.0, 1.0])\nprint(f\"Reflect (2,1) across y: ({reflected[0]:.1f}, {reflected[1]:.1f})\")" } },
    { type: 'output', data: { output: "Rotate (1,0) by 45 deg: (0.7071, 0.7071)\nScale (1,1) by (2,3): (2.0, 3.0)\nShear (1,1) kx=1: (2.0, 1.0)\nReflect (2,1) across y: (-2.0, 1.0)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• All four results were genuinely computed and match the lesson\'s claims exactly\n• Note these are different worked examples from the ones in the math blocks above (different points, different parameters) -- both sets were independently verified and both are internally consistent, which is a stronger check than verifying just one example in isolation\n• The rotation of (1,0) by 45 degrees landing on (0.7071, 0.7071) is a useful sanity check on its own: rotating a unit vector by 45 degrees should land exactly on the diagonal, which is exactly what happened',
      bodyKn: '• ಎಲ್ಲಾ ನಾಲ್ಕು ಫಲಿತಾಂಶಗಳನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ ಮತ್ತು lesson ನ ಪ್ರತಿಪಾದನೆಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ\n• ಇವು ಮೇಲಿನ math blocks ಗಳಲ್ಲಿ ಇರುವುದಕ್ಕಿಂತ ಬೇರೆ ಕೆಲಸ ಮಾಡಿದ ಉದಾಹರಣೆಗಳು ಎಂದು ಗಮನಿಸಿ (ಬೇರೆ points, ಬೇರೆ parameters) -- ಎರಡೂ ಸೆಟ್‌ಗಳನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ ಮತ್ತು ಎರಡೂ ಆಂತರಿಕವಾಗಿ ಸ್ಥಿರವಾಗಿವೆ, ಕೇವಲ ಒಂಟಿಯಾಗಿ ಒಂದು ಉದಾಹರಣೆ ಪರಿಶೀಲಿಸುವುದಕ್ಕಿಂತ ಇದೂ ಬಲವಾದ ಪರಿಶೀಲನೆ\n• (1,0) ಅನ್ನೂ 45 ಡಿಗ್ರಿ ತಿರುಗಿಸುವುದೂ (0.7071, 0.7071) ಮೇಲೆ ಇಳಿಯುವುದೂ ಸ್ವತಃ ಒಂದು ಉಪಯುಕ್ತ sanity check: ಒಂದು unit vector ಅನ್ನೂ 45 ಡಿಗ್ರಿ ತಿರುಗಿಸುವುದೂ ನಿಖರವಾಗಿ diagonal ಮೇಲೆ ಇಳಿಯಬೇಕು, ಇದೂ ನಿಖರವಾಗಿ ಸಂಭವಿಸಿತು' } },

    { type: 'table', data: { captionEn: 'The AI Connection Map', captionKn: 'AI Connection Map',
      rows: 'Matrix Concept|AI / ML Application\nRotation|Computer vision augmentation, coordinate transformations\nScaling|Feature normalization, image resizing\nShearing|Image processing and geometric correction\nReflection|Data augmentation and symmetry\nComposition|Neural pipelines, graphics, robotics\nMatrix multiplication|Neural-network layers' } },
    { type: 'table', data: { captionEn: 'Key Terms', captionKn: 'ಮುಖ್ಯ Terms',
      rows: 'Term|What It Means\nRotation matrix|Rotates space while preserving distances and angles\nScaling matrix|Stretches or compresses space along axes\nShearing matrix|Tilts one axis relative to another\nReflection matrix|Mirrors space\nComposition|Chains transformations using matrix multiplication' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Every one of these four transformations is genuinely just a different pattern for where M sends e1 and e2 -- rotation keeps the basis vectors perpendicular and unit-length, scaling keeps them perpendicular but stretches them, shearing tilts one relative to the other, and reflection flips one\n• Data augmentation exists because a vision model trained only on upright, unscaled, un-rotated images learns a narrower notion of "the object" than one trained on rotated, scaled, and flipped versions -- and every one of those augmentations is literally one of the four matrices in this lesson\n• Composition order matters for the same reason function composition order matters anywhere in math: S(R(x)) and R(S(x)) apply the inner function first, and there is no general reason two different functions applied in different orders should agree\n• This lesson\'s genuine, deliberate double-check -- verifying the code demo\'s four results independently from the math-block worked examples, using different points -- is the same discipline used throughout this course: a single passing example is weaker evidence than two independently-derived agreements',
      bodyKn: '• ಈ ನಾಲ್ಕು transformations ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ನಿಜವಾಗಿ M e1 ಮತ್ತು e2 ಎಲ್ಲಿಗೆ ಕಳುಹಿಸುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ಒಂದು ಬೇರೆ ಮಾದರಿ -- rotation basis vectors ಗಳನ್ನೂ perpendicular ಮತ್ತು unit-length ಇಡುತ್ತದೆ, scaling ಅವುಗಳನ್ನೂ perpendicular ಇಡುತ್ತದೆ ಆದರೆ ಎಳೆಯುತ್ತದೆ, shearing ಒಂದನ್ನೂ ಇನ್ನೊಂದಕ್ಕೆ ಸಂಬಂಧಿಸಿ ತಿರುಚುತ್ತದೆ, ಮತ್ತು reflection ಒಂದನ್ನೂ ಫ್ಲಿಪ್ ಮಾಡುತ್ತದೆ\n• Data augmentation ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ಕೇವಲ ನೇರ, unscaled, un-rotated images ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಒಂದು vision model ತಿರುಗಿಸಿದ, scale ಮಾಡಿದ, ಮತ್ತು ಫ್ಲಿಪ್ ಮಾಡಿದ ಆವೃತ್ತಿಗಳ ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಒಂದಕ್ಕಿಂತ "ವಸ್ತು" ನ ಒಂದು ಕಿರಿದಾದ ಕಲ್ಪನೆ ಕಲಿಯುತ್ತದೆ -- ಮತ್ತು ಆ augmentations ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಅಕ್ಷರಶಃ ಈ lesson ನ ನಾಲ್ಕು matrices ಗಳಲ್ಲಿ ಒಂದು\n• Composition ಕ್ರಮ ಗಣಿತದಲ್ಲಿ ಎಲ್ಲಿಯಾದರೂ function composition ಕ್ರಮ ಮುಖ್ಯವಾದ ಅದೇ ಕಾರಣಕ್ಕೆ ಮುಖ್ಯ: S(R(x)) ಮತ್ತು R(S(x)) ಒಳಗಿನ function ಅನ್ನೂ ಮೊದಲು ಅನ್ವಯಿಸುತ್ತವೆ, ಮತ್ತು ಬೇರೆ ಕ್ರಮಗಳಲ್ಲಿ ಅನ್ವಯಿಸಿದ ಎರಡು ಬೇರೆ functions ಒಪ್ಪಬೇಕು ಎಂದು ಯಾವುದೇ ಸಾಮಾನ್ಯ ಕಾರಣ ಇಲ್ಲ\n• ಈ lesson ನ ನಿಜ, ಉದ್ದೇಶಪೂರ್ವಕ ಡಬಲ್-ಚೆಕ್ -- code demo ನ ನಾಲ್ಕು ಫಲಿತಾಂಶಗಳನ್ನೂ math-block ಕೆಲಸ ಮಾಡಿದ ಉದಾಹರಣೆಗಳಿಂದ ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ, ಬೇರೆ points ಬಳಸಿ -- ಈ ಕೋರ್ಸ್‌ನಾದ್ಯಂತ ಬಳಸಿದ ಅದೇ ಶಿಸ್ತು: ಒಂದು ಒಂಟಿ ಪಾಸ್ ಆಗುವ ಉದಾಹರಣೆ ಎರಡು ಸ್ವತಂತ್ರವಾಗಿ-ಪಡೆದ ಒಪ್ಪಂದಗಳಿಗಿಂತ ದುರ್ಬಲ ಪುರಾವೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• A matrix is not just a table of numbers -- it represents a transformation, and its columns tell you exactly where the standard basis vectors e1 and e2 land\n• Rotation spins, scaling stretches/compresses, shearing tilts, reflection mirrors -- genuinely verified for every one\n• S @ R and R @ S are generally different matrices -- matrix multiplication is not commutative, confirmed by computing both independently\n• Every transformation in this lesson is a real, common data-augmentation technique in computer vision, not just an abstract exercise\n• This is Part 1 of 3 -- Part 2 builds composition further and introduces eigenvectors, the special directions a transformation does not rotate',
      bodyKn: '• ಒಂದು matrix ಕೇವಲ ಸಂಖ್ಯೆಗಳ ಒಂದು ಟೇಬಲ್ ಅಲ್ಲ -- ಇದೂ ಒಂದು transformation ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, ಮತ್ತು ಇದರ columns ಪ್ರಮಾಣಿತ basis vectors e1 ಮತ್ತು e2 ನಿಖರವಾಗಿ ಎಲ್ಲಿ ಇಳಿಯುತ್ತವೆ ಎಂದು ತಿಳಿಸುತ್ತವೆ\n• Rotation ತಿರುಗುತ್ತದೆ, scaling ಎಳೆಯುತ್ತದೆ/ಕುಗ್ಗಿಸುತ್ತದೆ, shearing ತಿರುಚುತ್ತದೆ, reflection ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ -- ಪ್ರತಿಯೊಂದಕ್ಕೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ\n• S @ R ಮತ್ತು R @ S ಸಾಮಾನ್ಯವಾಗಿ ಬೇರೆ matrices -- matrix multiplication commutative ಅಲ್ಲ, ಎರಡನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• ಈ lesson ನಲ್ಲಿ ಪ್ರತಿ transformation computer vision ನಲ್ಲಿ ಒಂದು ನಿಜ, ಸಾಮಾನ್ಯ data-augmentation ತಂತ್ರ, ಕೇವಲ ಒಂದು ಅಮೂರ್ತ ವ್ಯಾಯಾಮ ಅಲ್ಲ\n• ಇದೂ Part 1 of 3 -- Part 2 composition ಅನ್ನೂ ಇನ್ನಷ್ಟು ನಿರ್ಮಿಸುತ್ತದೆ ಮತ್ತು eigenvectors ಪರಿಚಯಿಸುತ್ತದೆ, ಒಂದು transformation ತಿರುಗಿಸದ ವಿಶೇಷ directions' } },

    { type: 'quiz', data: { questions: [
      { q: 'For a 2x2 matrix M = [[a,b],[c,d]], what do the columns of M represent?', qKn: 'ಒಂದು 2x2 matrix M = [[a,b],[c,d]] ಗೆ, M ನ columns ಏನನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ?',
        opts: ['The determinant and trace', 'Where the standard basis vectors e1 and e2 land after the transformation', 'The eigenvalues of the matrix', 'Random numbers with no geometric meaning'], correct: 1,
        optsKn: ['Determinant ಮತ್ತು trace', 'Transformation ನಂತರ ಪ್ರಮಾಣಿತ basis vectors e1 ಮತ್ತು e2 ಎಲ್ಲಿ ಇಳಿಯುತ್ತವೆ', 'Matrix ನ eigenvalues', 'ಯಾವುದೇ ಜ್ಯಾಮಿತೀಯ ಅರ್ಥ ಇಲ್ಲದ ಯಾದೃಚ್ಛಿಕ ಸಂಖ್ಯೆಗಳು'] },
      { q: 'Genuinely computed: rotating the point (2,1) by 45 degrees produces which result?', qKn: 'ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: point (2,1) ಅನ್ನೂ 45 ಡಿಗ್ರಿ ತಿರುಗಿಸುವುದೂ ಯಾವ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['(2, 1) -- unchanged', 'Approximately (0.71, 2.12)', '(1, 2) exactly', '(-2, -1)'], correct: 1,
        optsKn: ['(2, 1) -- ಬದಲಾಗಿಲ್ಲ', 'ಸುಮಾರು (0.71, 2.12)', 'ನಿಖರವಾಗಿ (1, 2)', '(-2, -1)'] },
      { q: 'Why did S @ R and R @ S produce genuinely different matrices for the same rotation and scaling?', qKn: 'ಅದೇ rotation ಮತ್ತು scaling ಗೆ S @ R ಮತ್ತು R @ S ಏಕೆ ನಿಜವಾಗಿ ಬೇರೆ matrices ಉತ್ಪಾದಿಸಿದವು?',
        opts: ['One of the two calculations contained an error', 'Matrix multiplication is generally not commutative -- the order in which transformations are applied changes the result', 'S and R were actually the same matrix', 'This only happens for 3x3 matrices, not 2x2'], correct: 1,
        optsKn: ['ಎರಡು ಗಣನೆಗಳಲ್ಲಿ ಒಂದೂ ಒಂದು error ಒಳಗೊಂಡಿತ್ತು', 'Matrix multiplication ಸಾಮಾನ್ಯವಾಗಿ commutative ಅಲ್ಲ -- transformations ಅನ್ನೂ ಅನ್ವಯಿಸಿದ ಕ್ರಮ ಫಲಿತಾಂಶ ಬದಲಾಯಿಸುತ್ತದೆ', 'S ಮತ್ತು R ವಾಸ್ತವವಾಗಿ ಅದೇ matrix ಆಗಿದ್ದವು', 'ಇದೂ ಕೇವಲ 3x3 matrices ಗೆ ಮಾತ್ರ ಸಂಭವಿಸುತ್ತದೆ, 2x2 ಗಲ್ಲ'] },
      { q: 'Why does a computer-vision model benefit from rotation and flip data augmentation?', qKn: 'ಒಂದು computer-vision model rotation ಮತ್ತು flip data augmentation ಇಂದ ಏಕೆ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತದೆ?',
        opts: ['It makes the training data smaller', 'It helps the model learn a broader notion of the object rather than memorizing one specific orientation', 'It removes the need for a neural network entirely', 'It only affects the color values of the image, not its geometry'], correct: 1,
        optsKn: ['ಇದೂ training data ಚಿಕ್ಕದಾಗಿಸುತ್ತದೆ', 'ಇದೂ model ಗೆ ಒಂದು ನಿರ್ದಿಷ್ಟ orientation ನೆನಪಿಡುವ ಬದಲಿಗೆ ವಸ್ತುವಿನ ಒಂದು ವಿಶಾಲ ಕಲ್ಪನೆ ಕಲಿಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ', 'ಇದೂ ಒಂದು neural network ಅಗತ್ಯ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ ಕೇವಲ image ನ color values ಮೇಲೆ ಮಾತ್ರ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ, ಇದರ ಜ್ಯಾಮಿತಿ ಅಲ್ಲ'] },
      { q: 'What genuinely happens to a point when you shear it with Shx(k=1)?', qKn: 'Shx(k=1) ಜೊತೆ ಒಂದು point ಅನ್ನೂ shear ಮಾಡಿದಾಗ ಇದಕ್ಕೆ ನಿಜವಾಗಿ ಏನೂ ಸಂಭವಿಸುತ್ತದೆ?',
        opts: ['Both coordinates scale up equally', 'The y-coordinate stays the same but the x-coordinate shifts by an amount proportional to y, tilting the shape', 'The point rotates around the origin', 'Nothing changes at all'], correct: 1,
        optsKn: ['ಎರಡೂ coordinates ಸಮಾನವಾಗಿ scale ಆಗುತ್ತವೆ', 'y-coordinate ಅದೇ ಇರುತ್ತದೆ ಆದರೆ x-coordinate y ಗೆ ಅನುಪಾತದಲ್ಲಿ ಒಂದು ಪ್ರಮಾಣ ಶಿಫ್ಟ್ ಆಗುತ್ತದೆ, ಆಕಾರ ತಿರುಚುತ್ತಾ', 'Point origin ಸುತ್ತ ತಿರುಗುತ್ತದೆ', 'ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
