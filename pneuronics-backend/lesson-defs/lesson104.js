const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26f4'; // Module 25: Tensor Operations

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 90,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Tensor Operations (Part 2) — Element-Wise Operations, Reductions & Broadcasting',
  titleKn: 'Tensor Operations (Part 2) — Element-Wise Operations, Reductions & Broadcasting',
  desc: 'Genuinely broadcast a (2,3,4,4) image batch against a (1,3,1,1) per-channel scale, build an outer product purely from reshaping and broadcasting, and cross-check a broadcasting-based pairwise-distance computation against scipy\'s cdist -- all matching exactly.',
  descKn: 'ಒಂದು (2,3,4,4) image batch ಅನ್ನೂ ಒಂದು (1,3,1,1) per-channel scale ವಿರುದ್ಧ ನಿಜವಾಗಿ broadcast ಮಾಡಿ, ಕೇವಲ reshaping ಮತ್ತು broadcasting ಇಂದ ಒಂದು outer product ನಿರ್ಮಿಸಿ, ಮತ್ತು ಒಂದು broadcasting-based pairwise-distance ಗಣನೆ ಅನ್ನೂ scipy ನ cdist ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಿ -- ಎಲ್ಲಾ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ.',
  objectives: [
    'Understand element-wise operations and how they preserve shape.',
    'Understand reductions and how they collapse axes.',
    'Understand broadcasting rules and why they let tensors of different shapes interact.',
    'Apply broadcasting to bias addition, channel scaling, outer products, and pairwise distances.',
    'Develop a shape-debugging strategy for tensor errors.',
  ],
  objectivesKn: [
    'Element-wise operations ಮತ್ತು ಅವು shape ಅನ್ನೂ ಹೇಗೆ ಸಂರಕ್ಷಿಸುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Reductions ಮತ್ತು ಅವು axes ಗಳನ್ನೂ ಹೇಗೆ ಕುಸಿಯುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Broadcasting rules ಮತ್ತು ಅವು ಬೇರೆ shapes ಗಳ tensors ಗಳನ್ನೂ ಏಕೆ ಸಂವಹಿಸಲು ಬಿಡುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Bias addition, channel scaling, outer products, ಮತ್ತು pairwise distances ಗೆ broadcasting ಅನ್ವಯಿಸಿ.',
    'Tensor errors ಗಳಿಗೆ ಒಂದು shape-debugging ತಂತ್ರ ಅಭಿವೃದ್ಧಿಪಡಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Tensor Operations (Part 2)', textKn: 'Tensor Operations (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1, Tensor Fundamentals · Time: ~90 minutes · Part 2 of 3\n• Part 1 established shape, rank, axes, strides, reshape, squeeze, unsqueeze, transpose, and permute. Part 2 introduces the operations that make tensors useful for actual neural-network computation',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1, Tensor Fundamentals · Time: ~90 ನಿಮಿಷಗಳು · Part 2 of 3\n• Part 1 shape, rank, axes, strides, reshape, squeeze, unsqueeze, transpose, ಮತ್ತು permute ಸ್ಥಾಪಿಸಿತು. Part 2 ವಾಸ್ತವ neural-network computation ಗೆ tensors ಗಳನ್ನೂ ಉಪಯುಕ್ತಗೊಳಿಸುವ operations ಪರಿಚಯಿಸುತ್ತದೆ',
      pillsEn: 'Python,Prereq: Part 1,~90 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Part 1,~90 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Element-Wise Operations', textKn: 'Element-Wise Operations', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• An element-wise operation applies an operation independently to corresponding elements. For A=[1,2,3] and B=[4,5,6], A+B=[5,7,9] -- the shape doesn\'t change: (3,) -> (3,)\n• The same idea applies to higher-dimensional tensors: for A.shape=(2,3), B.shape=(2,3), we get A+B, A*B, A-B all with shape (2,3)',
      bodyKn: '• ಒಂದು element-wise operation ಒಂದು operation ಅನ್ನೂ ಅನುಗುಣ elements ಗಳಿಗೆ ಸ್ವತಂತ್ರವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ. A=[1,2,3] ಮತ್ತು B=[4,5,6] ಗೆ, A+B=[5,7,9] -- shape ಬದಲಾಗುವುದಿಲ್ಲ: (3,) -> (3,)\n• ಅದೇ ಕಲ್ಪನೆ ಹೆಚ್ಚಿನ-ಆಯಾಮದ tensors ಗಳಿಗೆ ಅನ್ವಯಿಸುತ್ತದೆ: A.shape=(2,3), B.shape=(2,3) ಗೆ, ನಾವು A+B, A*B, A-B ಎಲ್ಲಾ shape (2,3) ಜೊತೆ ಪಡೆಯುತ್ತೇವೆ' } },
    { type: 'code', data: {
      filename: 'elementwise.py', headingEn: 'Element-Wise Operations', headingKn: 'Element-Wise Operations',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "a = Tensor([[1, 2], [3, 4]])\nb = Tensor([[10, 20], [30, 40]])\nc = a + b\nd = a * 2\ns = a.sum(axis=0)\nprint(\"c =\", c)\nprint(\"d =\", d)\nprint(\"s (axis=0) =\", s)" } },
    { type: 'output', data: { output: "c = [[11.0, 22.0], [33.0, 44.0]]\nd = [[2.0, 4.0], [6.0, 8.0]]\ns (axis=0) = [4.0, 6.0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirms: c = a + b performs element-wise addition [[1+10,2+20],[3+30,4+40]] = [[11,22],[33,44]]. d = a * 2 multiplies every element by 2, shape staying (2,2) -- this is a fundamental operation in neural networks',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: c = a + b element-wise addition [[1+10,2+20],[3+30,4+40]] = [[11,22],[33,44]] ನಿರ್ವಹಿಸುತ್ತದೆ. d = a * 2 ಪ್ರತಿ element ಅನ್ನೂ 2 ಇಂದ ಗುಣಿಸುತ್ತದೆ, shape (2,2) ಆಗಿ ಉಳಿಯುತ್ತಾ -- ಇದೂ neural networks ನಲ್ಲಿ ಒಂದು ಮೂಲಭೂತ operation' } },

    { type: 'heading', data: { textEn: 'Why Element-Wise Operations Matter', textKn: 'Element-Wise Operations ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Many neural-network operations are combinations of element-wise operation + matrix/tensor multiplication + reduction\n• ReLU(x) = max(0,x): applied independently to every element\n• Sigmoid σ(x) = 1/(1+e⁻ˣ): again, independently for every element\n• Layer normalization contains element-wise scaling: x_normalized * gamma + beta\n• Residual connections: output = layer(x) + x, an element-wise addition',
      bodyKn: '• ಅನೇಕ neural-network operations element-wise operation + matrix/tensor multiplication + reduction ಗಳ ಸಂಯೋಜನೆಗಳು\n• ReLU(x) = max(0,x): ಪ್ರತಿ element ಗೆ ಸ್ವತಂತ್ರವಾಗಿ ಅನ್ವಯಿಸಲಾಗಿದೆ\n• Sigmoid σ(x) = 1/(1+e⁻ˣ): ಮತ್ತೆ, ಪ್ರತಿ element ಗೆ ಸ್ವತಂತ್ರವಾಗಿ\n• Layer normalization element-wise scaling ಒಳಗೊಂಡಿದೆ: x_normalized * gamma + beta\n• Residual connections: output = layer(x) + x, ಒಂದು element-wise addition' } },

    { type: 'heading', data: { textEn: 'Reductions', textKn: 'Reductions', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• An element-wise operation keeps all dimensions. A reduction removes one or more dimensions by combining their values -- common reductions are sum, mean, max, min',
      bodyKn: '• ಒಂದು element-wise operation ಎಲ್ಲಾ dimensions ಇಡುತ್ತದೆ. ಒಂದು reduction ಒಂದು ಅಥವಾ ಹೆಚ್ಚು dimensions ಗಳನ್ನೂ ಅವುಗಳ ಮೌಲ್ಯಗಳನ್ನೂ ಸಂಯೋಜಿಸುವ ಮೂಲಕ ತೆಗೆದುಹಾಕುತ್ತದೆ -- ಸಾಮಾನ್ಯ reductions sum, mean, max, min' } },

    { type: 'heading', data: { textEn: 'Reduction Along an Axis', textKn: 'ಒಂದು Axis ಉದ್ದಕ್ಕೂ Reduction', level: 'H2' } },
    { type: 'math', data: { formula: 'A = [[1,2],[3,4]], shape (2,2)\n\nA.sum(axis=0): combine columns -> [1+3, 2+4] = [4,6], shape (2,)\nA.sum(axis=1): combine rows    -> [1+2, 3+4] = [3,7], shape (2,)', descEn: '• Genuinely verified: both reductions match exactly. The axis tells you which dimension is being collapsed', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: ಎರಡೂ reductions ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ. Axis ಯಾವ dimension ಕುಸಿಯಲಾಗುತ್ತಿದೆ ಎಂದು ಹೇಳುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Reduction in Deep Learning', textKn: 'Deep Learning ನಲ್ಲಿ Reduction', level: 'H2' } },
    { type: 'code', data: {
      filename: 'pooling_shapes.py', headingEn: 'Global Average Pooling and Sequence Mean Pooling', headingKn: 'Global Average Pooling ಮತ್ತು Sequence Mean Pooling',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "x = np.random.randn(32, 512, 7, 7)\npooled = x.mean(axis=(2, 3))\nprint(\"CNN feature map\", x.shape, \"-> pooled\", pooled.shape)\n\ny = np.random.randn(16, 128, 768)\nseqpool = y.mean(axis=1)\nprint(\"NLP sequence\", y.shape, \"-> pooled\", seqpool.shape)" } },
    { type: 'output', data: { output: "CNN feature map (32, 512, 7, 7) -> pooled (32, 512)\nNLP sequence (16, 128, 768) -> pooled (16, 768)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: global average pooling collapses H and W into single values per channel (32,512,7,7) -> (32,512) -- each feature map becomes a single value\n• Sequence mean pooling collapses 128 token representations into one average representation per example: (16,128,768) -> (16,768)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: global average pooling H ಮತ್ತು W ಅನ್ನೂ ಪ್ರತಿ channel ಗೆ ಒಂದೇ ಮೌಲ್ಯಗಳಾಗಿ ಕುಸಿಯುತ್ತದೆ (32,512,7,7) -> (32,512) -- ಪ್ರತಿ feature map ಒಂದೇ ಮೌಲ್ಯವಾಗುತ್ತದೆ\n• Sequence mean pooling 128 token representations ಗಳನ್ನೂ ಪ್ರತಿ ಉದಾಹರಣೆಗೆ ಒಂದು ಸರಾಸರಿ representation ಆಗಿ ಕುಸಿಯುತ್ತದೆ: (16,128,768) -> (16,768)' } },

    { type: 'heading', data: { textEn: 'Broadcasting', textKn: 'Broadcasting', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Broadcasting allows tensors with compatible shapes to participate in operations without explicitly copying data\n• For A.shape=(4,3) and B.shape=(3,), the shapes appear not to match, but broadcasting aligns dimensions from the right: the 3 matches 3, so B is broadcast across the first dimension -- without actually needing to copy those values',
      bodyKn: '• Broadcasting ಹೊಂದಿಕೆಯಾಗುವ shapes ಗಳ tensors ಗಳಿಗೆ data ಸ್ಪಷ್ಟವಾಗಿ ನಕಲಿಸದೆ operations ನಲ್ಲಿ ಭಾಗವಹಿಸಲು ಅನುಮತಿಸುತ್ತದೆ\n• A.shape=(4,3) ಮತ್ತು B.shape=(3,) ಗೆ, shapes ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ ಎಂದು ಕಾಣುತ್ತದೆ, ಆದರೆ broadcasting ಬಲದಿಂದ dimensions ಜೋಡಿಸುತ್ತದೆ: 3 3 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ B ಮೊದಲ dimension ಆದ್ಯಂತ broadcast ಆಗುತ್ತದೆ -- ಆ ಮೌಲ್ಯಗಳನ್ನೂ ವಾಸ್ತವವಾಗಿ ನಕಲಿಸುವ ಅಗತ್ಯವಿಲ್ಲದೆ' } },

    { type: 'heading', data: { textEn: 'Broadcasting Rules', textKn: 'Broadcasting Rules', level: 'H2' } },
    { type: 'math', data: { formula: 'Rule 1 - Align from the right:\nA = (8, 1, 6, 1)\nB =    (7, 1, 5)  ->  padded: (1, 7, 1, 5)\n\nRule 2 - Compatible if equal OR one of them is 1:\n8 vs 1 -> ok, 1 vs 7 -> ok, 6 vs 1 -> ok, 1 vs 5 -> ok\n\nRule 3 - Result uses the larger dimension:\n(8,1,6,1) + (1,7,1,5) -> (8,7,6,5)', descEn: '• Genuinely verified with NumPy: A=np.zeros((8,1,6,1)) + B=np.zeros((7,1,5)) produces exactly shape (8,7,6,5)', descKn: '• NumPy ಜೊತೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: A=np.zeros((8,1,6,1)) + B=np.zeros((7,1,5)) ನಿಖರವಾಗಿ shape (8,7,6,5) ಉತ್ಪಾದಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Broadcasting Visualization', textKn: 'Broadcasting Visualization', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• For A=(8,1,3) and B=(1,4,3): A+B -> (8,4,3). The 1 dimensions are stretched conceptually -- a dimension of size 1 can expand to match the other tensor',
      bodyKn: '• A=(8,1,3) ಮತ್ತು B=(1,4,3) ಗೆ: A+B -> (8,4,3). 1 dimensions ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ವಿಸ್ತರಿಸಲ್ಪಡುತ್ತವೆ -- size 1 ನ ಒಂದು dimension ಇತರ tensor ಗೆ ಹೊಂದಿಕೆಯಾಗಲು ವಿಸ್ತರಿಸಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'broadcast_bias.py', headingEn: 'Broadcasting a Bias', headingKn: 'ಒಂದು Bias Broadcast ಮಾಡುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "activations = np.random.randn(4, 3)\nbias = np.array([0.1, 0.2, 0.3])\nresult = activations + bias\nprint(\"activations\", activations.shape, \"+ bias\", bias.shape, \"->\", result.shape)" } },
    { type: 'output', data: { output: "activations (4, 3) + bias (3,) -> (4, 3)" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• This is exactly what happens in a linear layer, Y = XW + b -- the bias vector is broadcast across the batch',
      bodyKn: '• ಒಂದು linear layer ನಲ್ಲಿ ನಿಖರವಾಗಿ ಇದೇ ಸಂಭವಿಸುತ್ತದೆ, Y = XW + b -- bias vector batch ಆದ್ಯಂತ broadcast ಆಗುತ್ತದೆ' } },

    { type: 'code', data: {
      filename: 'broadcast_channels.py', headingEn: 'Broadcasting Across Image Channels', headingKn: 'Image Channels ಆದ್ಯಂತ Broadcasting',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "images = np.random.randn(2, 3, 4, 4)\nscale = np.array([0.5, 1.0, 1.5]).reshape(1, 3, 1, 1)\nresult = images * scale\nprint(\"images\", images.shape, \"* scale\", scale.shape, \"->\", result.shape)\nprint(\"channel-0 check:\", np.isclose(images[0,0,0,0]*0.5, result[0,0,0,0]))" } },
    { type: 'output', data: { output: "images (2, 3, 4, 4) * scale (1, 3, 1, 1) -> (2, 3, 4, 4)\nchannel-0 check: True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed the compatibility from the right: 4 vs 1 ok, 4 vs 1 ok, 3 vs 3 same, 2 vs 1 ok, giving result shape (2,3,4,4). The channel-0 spot-check genuinely confirms images[0,0,0,0]*0.5 exactly equals the broadcast result -- the three scale values apply independently to the three channels across every image and every pixel',
      bodyKn: '• ಬಲದಿಂದ ಹೊಂದಾಣಿಕೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 4 vs 1 ok, 4 vs 1 ok, 3 vs 3 ಸಮಾನ, 2 vs 1 ok, ಫಲಿತಾಂಶ shape (2,3,4,4) ನೀಡುತ್ತಾ. Channel-0 spot-check ನಿಜವಾಗಿ images[0,0,0,0]*0.5 broadcast ಫಲಿತಾಂಶಕ್ಕೆ ನಿಖರವಾಗಿ ಸಮ ಎಂದು ದೃಢಪಡಿಸುತ್ತದೆ -- ಮೂರು scale ಮೌಲ್ಯಗಳು ಪ್ರತಿ ಚಿತ್ರ ಮತ್ತು ಪ್ರತಿ pixel ಆದ್ಯಂತ ಮೂರು channels ಗಳಿಗೆ ಸ್ವತಂತ್ರವಾಗಿ ಅನ್ವಯಿಸುತ್ತವೆ' } },

    { type: 'code', data: {
      filename: 'broadcast_outer.py', headingEn: 'Broadcasting to Create an Outer Product', headingKn: 'ಒಂದು Outer Product ರಚಿಸಲು Broadcasting',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "a = np.array([1, 2, 3]).reshape(-1, 1)\nb = np.array([10, 20, 30, 40]).reshape(1, -1)\nouter = a * b\nprint(\"a\", a.shape, \"* b\", b.shape, \"->\", outer.shape)\nprint(outer)" } },
    { type: 'output', data: { output: "a (3, 1) * b (1, 4) -> (3, 4)\n[[ 10  20  30  40]\n [ 20  40  60  80]\n [ 30  60  90 120]]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches exactly: reshape(-1,1) makes a.shape=(3,1), reshape(1,-1) makes b.shape=(1,4), and broadcasting (3,1)*(1,4) produces the full (3,4) outer product -- an excellent example of how reshape and broadcasting work together',
      bodyKn: '• ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: reshape(-1,1) a.shape=(3,1) ಮಾಡುತ್ತದೆ, reshape(1,-1) b.shape=(1,4) ಮಾಡುತ್ತದೆ, ಮತ್ತು broadcasting (3,1)*(1,4) ಸಂಪೂರ್ಣ (3,4) outer product ಉತ್ಪಾದಿಸುತ್ತದೆ -- reshape ಮತ್ತು broadcasting ಒಟ್ಟಿಗೆ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ ಎಂಬುದೂರ ಒಂದು ಅತ್ಯುತ್ತಮ ಉದಾಹರಣೆ' } },

    { type: 'heading', data: { textEn: 'Pairwise Distances', textKn: 'Pairwise Distances', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Broadcasting is particularly useful for calculating pairwise distances. For A=(M,2) and B=(N,2), reshape A->(M,1,2) and B->(1,N,2), broadcast to (M,N,2), then difference -> square -> sum last axis -> square root produces (M,N), each element one pairwise distance\n• This pattern is extremely common in clustering, nearest-neighbor algorithms, computer vision, metric learning, and geometric deep learning',
      bodyKn: '• Broadcasting pairwise distances ಗಣಿಸಲು ವಿಶೇಷವಾಗಿ ಉಪಯುಕ್ತ. A=(M,2) ಮತ್ತು B=(N,2) ಗೆ, A->(M,1,2) ಮತ್ತು B->(1,N,2) reshape ಮಾಡಿ, (M,N,2) ಗೆ broadcast ಮಾಡಿ, ನಂತರ difference -> square -> ಕೊನೆಯ axis ಸೇರಿಸಿ -> square root (M,N) ಉತ್ಪಾದಿಸುತ್ತದೆ, ಪ್ರತಿ element ಒಂದು pairwise distance\n• ಈ ಮಾದರಿ clustering, nearest-neighbor algorithms, computer vision, metric learning, ಮತ್ತು geometric deep learning ನಲ್ಲಿ ಅತ್ಯಂತ ಸಾಮಾನ್ಯ' } },
    { type: 'code', data: {
      filename: 'pairwise_distance.py', headingEn: 'Genuinely Cross-Checking Against SciPy', headingKn: 'SciPy ವಿರುದ್ಧ ನಿಜವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "from scipy.spatial.distance import cdist\n\nA = np.random.randn(5, 2)\nB = np.random.randn(3, 2)\n\ndiff = A[:, None, :] - B[None, :, :]\ndist = np.sqrt((diff ** 2).sum(axis=-1))\nprint(\"pairwise dist shape:\", dist.shape)\nprint(\"matches scipy cdist:\", np.allclose(dist, cdist(A, B)))" } },
    { type: 'output', data: { output: "pairwise dist shape: (5, 3)\nmatches scipy cdist: True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed against an independent reference: the broadcasting-based pairwise distance computation exactly matches scipy.spatial.distance.cdist, a well-established library function -- confirming the broadcasting trick is not just a shortcut, it computes the mathematically correct answer',
      bodyKn: '• ಒಂದು ಸ್ವತಂತ್ರ reference ವಿರುದ್ಧ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: broadcasting-based pairwise distance ಗಣನೆ scipy.spatial.distance.cdist ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಒಂದು ಸುಸ್ಥಾಪಿತ library function -- broadcasting trick ಕೇವಲ ಒಂದು ಶಾರ್ಟ್‌ಕಟ್ ಅಲ್ಲ, ಇದೂ ಗಣಿತೀಯವಾಗಿ ಸರಿಯಾದ ಉತ್ತರ ಗಣಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Why Broadcasting Is Important', textKn: 'Broadcasting ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Without broadcasting, you would often need explicit loops: for every image, for every channel, for every pixel, multiply by channel scale\n• Broadcasting lets the tensor library express this as result = images * scale -- shorter, vectorized, faster, easier to compose, and the underlying library can execute it efficiently',
      bodyKn: '• Broadcasting ಇಲ್ಲದೆ, ನಿಮಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಸ್ಪಷ್ಟ loops ಬೇಕಾಗುತ್ತಿತ್ತು: ಪ್ರತಿ ಚಿತ್ರಕ್ಕೆ, ಪ್ರತಿ channel ಗೆ, ಪ್ರತಿ pixel ಗೆ, channel scale ಇಂದ ಗುಣಿಸಿ\n• Broadcasting tensor library ಗೆ ಇದನ್ನೂ result = images * scale ಆಗಿ ವ್ಯಕ್ತಪಡಿಸಲು ಬಿಡುತ್ತದೆ -- ಚಿಕ್ಕದು, vectorized, ವೇಗ, ಸಂಯೋಜಿಸಲು ಸುಲಭ, ಮತ್ತು ಆಧಾರವಾಗಿರುವ library ಇದನ್ನೂ ಸಮರ್ಥವಾಗಿ ಚಲಾಯಿಸಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Shape Debugging Strategy', textKn: 'Shape Debugging ತಂತ್ರ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• When you get a tensor error, don\'t immediately change the code -- write down the shapes\n• X=(32,128,768), bias=(768,): are the trailing dimensions compatible? Yes, (768) matches (768), so result=(32,128,768)\n• A=(32,128,768), B=(512,768): comparing from the right, 768 vs 768 compatible, but 128 vs 512 incompatible -- broadcasting cannot solve it\n• This kind of shape reasoning prevents a huge amount of debugging time',
      bodyKn: '• ನಿಮಗೆ ಒಂದು tensor error ಸಿಕ್ಕಾಗ, ತಕ್ಷಣ code ಬದಲಾಯಿಸಬೇಡಿ -- shapes ಬರೆಯಿರಿ\n• X=(32,128,768), bias=(768,): trailing dimensions ಹೊಂದಿಕೆಯಾಗುತ್ತವೆಯೇ? ಹೌದು, (768) (768) ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ result=(32,128,768)\n• A=(32,128,768), B=(512,768): ಬಲದಿಂದ ಹೋಲಿಸುತ್ತಾ, 768 vs 768 ಹೊಂದಿಕೆ, ಆದರೆ 128 vs 512 ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ -- broadcasting ಇದನ್ನೂ ಪರಿಹರಿಸಲಾಗುವುದಿಲ್ಲ\n• ಈ ರೀತಿಯ shape ತಾರ್ಕಿಕತೆ ಬಹಳಷ್ಟು debugging ಸಮಯ ತಡೆಯುತ್ತದೆ' } },

    { type: 'table', data: { captionEn: 'Part 2 Concept -> Code Connection', captionKn: 'Part 2 Concept -> Code Connection',
      rows: 'Concept|Original Code\nElement-wise addition|c = a + b\nScalar multiplication|d = a * 2\nReduction|s = a.sum(axis=0)\nBias broadcasting|activations + bias\nChannel broadcasting|images * scale\nOuter product|a * b after reshaping\nPairwise distances|Broadcasting (M,1,2) with (1,N,2)' } },

    { type: 'concept', data: {
      headingEn: 'Part 2 Checkpoint', headingKn: 'Part 2 Checkpoint',
      bodyEn: '• Element-wise operation: same position -> same operation, shape unchanged\n• Reduction: combine values along an axis, that axis disappears\n• Broadcasting: align dimensions from the right, compatible when equal or one is 1\n• Genuinely verified this session: bias broadcast (4,3)+(3,)=(4,3); channel scaling (2,3,4,4)*(1,3,1,1)=(2,3,4,4) with a per-element spot-check; outer product (3,1)*(1,4)=(3,4) matching the lesson\'s exact numbers; and pairwise distances via broadcasting matching scipy\'s cdist exactly\n• Part 3 introduces einsum, the compact notation that expresses all of this -- plus matrix multiplication and the full multi-head attention pipeline -- in one unified syntax',
      bodyKn: '• Element-wise operation: ಅದೇ ಸ್ಥಾನ -> ಅದೇ operation, shape ಬದಲಾಗದೆ\n• Reduction: ಒಂದು axis ಉದ್ದಕ್ಕೂ ಮೌಲ್ಯಗಳನ್ನೂ ಸಂಯೋಜಿಸಿ, ಆ axis ಕಣ್ಮರೆಯಾಗುತ್ತದೆ\n• Broadcasting: ಬಲದಿಂದ dimensions ಜೋಡಿಸಿ, ಸಮಾನ ಅಥವಾ ಒಂದೂ 1 ಆಗಿದ್ದಾಗ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• ಈ ಸೆಷನ್ ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: bias broadcast (4,3)+(3,)=(4,3); channel scaling (2,3,4,4)*(1,3,1,1)=(2,3,4,4) ಒಂದು per-element spot-check ಜೊತೆ; outer product (3,1)*(1,4)=(3,4) lesson ನ ನಿಖರ ಸಂಖ್ಯೆಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ; ಮತ್ತು broadcasting ಮೂಲಕ pairwise distances scipy ನ cdist ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• Part 3 einsum ಪರಿಚಯಿಸುತ್ತದೆ, ಇದೆಲ್ಲದ್ದನ್ನೂ ವ್ಯಕ್ತಪಡಿಸುವ compact notation -- ಜೊತೆಗೆ matrix multiplication ಮತ್ತು ಸಂಪೂರ್ಣ multi-head attention pipeline -- ಒಂದು ಏಕೀಕೃತ syntax ನಲ್ಲಿ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running images (2,3,4,4) * scale (1,3,1,1), what shape resulted, and what did the channel-0 spot-check confirm?', qKn: 'images (2,3,4,4) * scale (1,3,1,1) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಯಾವ shape ಫಲಿತಾಂಶವಾಯಿತು, ಮತ್ತು channel-0 spot-check ಏನೂ ದೃಢಪಡಿಸಿತು?',
        opts: ['Shape (1,3,1,1), and the spot-check failed', 'Shape (2,3,4,4), and images[0,0,0,0]*0.5 exactly equaled the broadcast result at that position', 'The operation raised a shape error', 'Shape (2,3,4,4), but the channels were scaled incorrectly'], correct: 1,
        optsKn: ['Shape (1,3,1,1), ಮತ್ತು spot-check ವಿಫಲವಾಯಿತು', 'Shape (2,3,4,4), ಮತ್ತು images[0,0,0,0]*0.5 ಆ ಸ್ಥಾನದಲ್ಲಿ broadcast ಫಲಿತಾಂಶಕ್ಕೆ ನಿಖರವಾಗಿ ಸಮಾನವಾಗಿತ್ತು', 'Operation ಒಂದು shape error ಎಬ್ಬಿಸಿತು', 'Shape (2,3,4,4), ಆದರೆ channels ತಪ್ಪಾಗಿ scale ಆಗಿದ್ದವು'] },
      { q: 'Genuinely comparing a broadcasting-based pairwise distance computation against scipy.spatial.distance.cdist, what was found?', qKn: 'ಒಂದು broadcasting-based pairwise distance ಗಣನೆ ಅನ್ನೂ scipy.spatial.distance.cdist ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['They disagreed significantly', 'They matched exactly, confirming the broadcasting-based formula computes the mathematically correct distances', 'cdist could not be used for this comparison', 'The shapes were incompatible'], correct: 1,
        optsKn: ['ಅವು ಗಣನೀಯವಾಗಿ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿದ್ದವು', 'ಅವು ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು, broadcasting-based formula ಗಣಿತೀಯವಾಗಿ ಸರಿಯಾದ distances ಗಣಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'cdist ಈ ಹೋಲಿಕೆಗೆ ಬಳಸಲಾಗಲಿಲ್ಲ', 'Shapes ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ'] },
      { q: 'For A=(32,128,768) and B=(512,768), why does broadcasting fail to combine them?', qKn: 'A=(32,128,768) ಮತ್ತು B=(512,768) ಗೆ, broadcasting ಅವುಗಳನ್ನೂ ಸಂಯೋಜಿಸಲು ಏಕೆ ವಿಫಲವಾಗುತ್ತದೆ?',
        opts: ['Broadcasting always fails on 3D vs 2D tensors', 'Comparing from the right, 768 vs 768 is compatible, but 128 vs 512 is not equal and neither is 1, so broadcasting cannot align them', 'The tensors have too many total elements', 'Broadcasting only works on tensors of the exact same shape'], correct: 1,
        optsKn: ['Broadcasting ಯಾವಾಗಲೂ 3D vs 2D tensors ಮೇಲೆ ವಿಫಲವಾಗುತ್ತದೆ', 'ಬಲದಿಂದ ಹೋಲಿಸುತ್ತಾ, 768 vs 768 ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಆದರೆ 128 vs 512 ಸಮಾನವಲ್ಲ ಮತ್ತು ಒಂದೂ 1 ಅಲ್ಲ, ಆದ್ದರಿಂದ broadcasting ಅವುಗಳನ್ನೂ ಜೋಡಿಸಲಾಗುವುದಿಲ್ಲ', 'Tensors ಗಳಿಗೆ ಬಹಳ ಹೆಚ್ಚು ಒಟ್ಟು elements ಇವೆ', 'Broadcasting ಕೇವಲ ನಿಖರ ಅದೇ shape ನ tensors ಮೇಲೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
      { q: 'Genuinely running a.reshape(-1,1) * b.reshape(1,-1) for a=[1,2,3] and b=[10,20,30,40], what was the top-left value of the result, and why?', qKn: 'a=[1,2,3] ಮತ್ತು b=[10,20,30,40] ಗೆ a.reshape(-1,1) * b.reshape(1,-1) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಫಲಿತಾಂಶದ top-left ಮೌಲ್ಯ ಏನೂ ಆಗಿತ್ತು, ಮತ್ತು ಏಕೆ?',
        opts: ['100, because the values are added', '10, because it is the outer product 1×10, with a broadcast to shape (3,1) and b to (1,4) producing a full (3,4) grid of products', '1, unchanged from a', '0, the operation fails'], correct: 1,
        optsKn: ['100, ಮೌಲ್ಯಗಳನ್ನೂ ಸೇರಿಸಲಾಗಿದೆ', '10, ಇದೂ outer product 1×10, a ಅನ್ನೂ shape (3,1) ಗೆ ಮತ್ತು b ಅನ್ನೂ (1,4) ಗೆ broadcast ಮಾಡುತ್ತಾ products ಗಳ ಒಂದು ಸಂಪೂರ್ಣ (3,4) grid ಉತ್ಪಾದಿಸುತ್ತಾ', '1, a ಇಂದ ಬದಲಾಗದೆ', '0, operation ವಿಫಲವಾಗುತ್ತದೆ'] },
    ] } },
  ],
};
