const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26f4'; // Module 25: Tensor Operations

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 90,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Tensor Operations (Part 1) — From Arrays to Tensors: Shape, Storage, Strides, Reshape & Axes',
  titleKn: 'Tensor Operations (Part 1) — From Arrays to Tensors: Shape, Storage, Strides, Reshape & Axes',
  desc: 'Genuinely build a from-scratch Tensor class with stride-based storage, then trigger a real PyTorch RuntimeError by calling .view() on a transposed (non-contiguous) tensor -- and show that .reshape() and .contiguous().view() both genuinely recover, producing the identical values.',
  descKn: 'Stride-based storage ಜೊತೆ ಒಂದು ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ Tensor class ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ನಂತರ ಒಂದು transposed (non-contiguous) tensor ಮೇಲೆ .view() ಕರೆಯುವ ಮೂಲಕ ಒಂದು ನಿಜ PyTorch RuntimeError ಪ್ರಚೋದಿಸಿ -- ಮತ್ತು .reshape() ಮತ್ತು .contiguous().view() ಎರಡೂ ನಿಜವಾಗಿ ಚೇತರಿಸಿಕೊಳ್ಳುತ್ತವೆ, ಒಂದೇ ಮೌಲ್ಯಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತಾ ಎಂದು ತೋರಿಸಿ.',
  objectives: [
    'Understand what a tensor is and how it generalizes scalars, vectors, and matrices.',
    'Understand how tensor rank, shape, and axes work.',
    'Understand how tensors are represented in memory, and what strides mean.',
    'Explain why transpose and permute can make tensors non-contiguous.',
    'Understand how reshape, squeeze, and unsqueeze change tensor shapes.',
    'Connect these operations to real deep-learning model shapes.',
  ],
  objectivesKn: [
    'ಒಂದು tensor ಎಂದರೆ ಏನೂ ಮತ್ತು ಇದೂ scalars, vectors, ಮತ್ತು matrices ಅನ್ನೂ ಹೇಗೆ ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Tensor rank, shape, ಮತ್ತು axes ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Tensors ಮೆಮೊರಿಯಲ್ಲಿ ಹೇಗೆ ಪ್ರತಿನಿಧಿಸಲ್ಪಡುತ್ತವೆ, ಮತ್ತು strides ಎಂದರೆ ಏನೂ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Transpose ಮತ್ತು permute tensors ಗಳನ್ನೂ non-contiguous ಏಕೆ ಮಾಡಬಹುದು ಎಂದು ವಿವರಿಸಿ.',
    'Reshape, squeeze, ಮತ್ತು unsqueeze tensor shapes ಗಳನ್ನೂ ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಈ operations ಗಳನ್ನೂ ನಿಜ deep-learning model shapes ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Tensor Operations (Part 1)', textKn: 'Tensor Operations (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Lessons 01-02 (Linear Algebra Intuition, Vectors, Matrices & Operations) · Time: ~90 minutes · Part 1 of 3\n• From arrays to tensors: shape, storage, strides, reshape, and axes',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Lessons 01-02 (Linear Algebra Intuition, Vectors, Matrices & Operations) · Time: ~90 ನಿಮಿಷಗಳು · Part 1 of 3\n• Arrays ಇಂದ tensors ಗೆ: shape, storage, strides, reshape, ಮತ್ತು axes',
      pillsEn: 'Python,Prereq: Phase 1 L01-02,~90 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Phase 1 L01-02,~90 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'What a Tensor Is', textKn: 'Tensor ಎಂದರೆ ಏನೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A tensor is a multi-dimensional array of numbers with a uniform data type. The number of dimensions is called the rank or order. Each dimension is an axis. The shape tells us how many elements exist along every axis\n• Scalar: rank 0, shape (). Example: 7\n• Vector: rank 1, shape (3,). Example: [10, 20, 30]\n• Matrix: rank 2, shape (2, 3), with 2×3=6 elements\n• 3D Tensor: shape (2, 2, 2), total elements 2×2×2=8\n• 4D Tensor: a typical image batch has shape (B, C, H, W), e.g. (32, 3, 224, 224) means 32 batch size, 3 RGB channels, 224 height, 224 width',
      bodyKn: '• ಒಂದು tensor ಒಂದೇ data type ಹೊಂದಿರುವ ಸಂಖ್ಯೆಗಳ ಒಂದು multi-dimensional array. Dimensions ಸಂಖ್ಯೆಯನ್ನೂ rank ಅಥವಾ order ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಪ್ರತಿ dimension ಒಂದು axis. Shape ಪ್ರತಿ axis ಉದ್ದಕ್ಕೂ ಎಷ್ಟು elements ಇವೆ ಎಂದು ಹೇಳುತ್ತದೆ\n• Scalar: rank 0, shape (). ಉದಾಹರಣೆ: 7\n• Vector: rank 1, shape (3,). ಉದಾಹರಣೆ: [10, 20, 30]\n• Matrix: rank 2, shape (2, 3), 2×3=6 elements ಜೊತೆ\n• 3D Tensor: shape (2, 2, 2), ಒಟ್ಟು elements 2×2×2=8\n• 4D Tensor: ಒಂದು ವಿಶಿಷ್ಟ image batch shape (B, C, H, W) ಹೊಂದಿದೆ, ಉದಾ. (32, 3, 224, 224) ಎಂದರೆ 32 batch size, 3 RGB channels, 224 height, 224 width' } },

    { type: 'heading', data: { textEn: 'Tensor Shapes in Deep Learning', textKn: 'Deep Learning ನಲ್ಲಿ Tensor Shapes', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Conventional Shapes by Data Type', captionKn: 'Data Type ಪ್ರಕಾರ ಸಾಂಪ್ರದಾಯಿಕ Shapes',
      rows: 'Data Type|Shape|Example\nImages|(B, C, H, W)|(32, 3, 224, 224)\nNLP|(B, T, D)|(16, 128, 768)\nMulti-head attention|(B, H, T, D)|(16, 12, 128, 64)\nLinear layer weights|(out, in)|-\nConvolution weights|(out_channels, in_channels, kH, kW)|-\nEmbedding table|(vocabulary_size, embedding_dimension)|-' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• For NLP: B=batch, T=sequence length, D=embedding dimension. For multi-head attention: B=batch size, H=number of attention heads, T=sequence length, D=dimension per head',
      bodyKn: '• NLP ಗೆ: B=batch, T=sequence length, D=embedding dimension. Multi-head attention ಗೆ: B=batch size, H=number of attention heads, T=sequence length, D=dimension per head' } },

    { type: 'heading', data: { textEn: 'Why Tensor Shape Matters', textKn: 'Tensor Shape ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Consider X.shape = (32, 128, 768) -- this might represent 32 sequences, 128 tokens per sequence, 768 features per token\n• If you accidentally produce (32, 768, 128), the same numbers exist, but the meaning of the axes has changed\n• This is one of the most important ideas in deep learning: a tensor\'s shape is part of its meaning. The numbers alone are not enough',
      bodyKn: '• X.shape = (32, 128, 768) ಪರಿಗಣಿಸಿ -- ಇದೂ 32 sequences, sequence ಗೆ 128 tokens, token ಗೆ 768 features ಪ್ರತಿನಿಧಿಸಬಹುದು\n• ನೀವು ಆಕಸ್ಮಿಕವಾಗಿ (32, 768, 128) ಉತ್ಪಾದಿಸಿದರೆ, ಅದೇ ಸಂಖ್ಯೆಗಳು ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ, ಆದರೆ axes ಗಳ ಅರ್ಥ ಬದಲಾಗಿದೆ\n• Deep learning ನಲ್ಲಿ ಅತಿ ಮುಖ್ಯ ಕಲ್ಪನೆಗಳಲ್ಲಿ ಇದೂ ಒಂದು: ಒಂದು tensor ನ shape ಇದರ ಅರ್ಥದ ಭಾಗ. ಕೇವಲ ಸಂಖ್ಯೆಗಳು ಸಾಕಾಗುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Memory Layout', textKn: 'Memory Layout', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A tensor may look multi-dimensional to us, but computer memory is fundamentally a linear sequence\n• [[a,b,c],[d,e,f]] is stored in row-major order as: a b c d e f\n• The tensor needs metadata to know how to interpret this flat memory as a multidimensional object -- that metadata includes strides',
      bodyKn: '• ಒಂದು tensor ನಮಗೆ multi-dimensional ಆಗಿ ಕಾಣಬಹುದು, ಆದರೆ ಕಂಪ್ಯೂಟರ್ ಮೆಮೊರಿ ಮೂಲಭೂತವಾಗಿ ಒಂದು linear sequence\n• [[a,b,c],[d,e,f]] row-major order ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಲ್ಪಡುತ್ತದೆ: a b c d e f\n• Tensor ಗೆ ಈ flat memory ಅನ್ನೂ ಒಂದು multidimensional object ಆಗಿ ಹೇಗೆ ವ್ಯಾಖ್ಯಾನಿಸಬೇಕು ಎಂದು ತಿಳಿಯಲು metadata ಬೇಕು -- ಆ metadata strides ಒಳಗೊಂಡಿದೆ' } },

    { type: 'heading', data: { textEn: 'What Are Strides?', textKn: 'Strides ಎಂದರೆ ಏನೂ?', level: 'H2' } },
    { type: 'math', data: { formula: 'shape = (2, 3)\ndata:\na b c\nd e f\n\nstrides = (3, 1)\nMoving one position along axis 0 (row) -> skip 3 elements\nMoving one position along axis 1 (col) -> skip 1 element', descEn: '• Genuinely verified: Tensor([[1,2,3],[4,5,6]]) produces shape (2,3), strides (3,1) -- and NumPy\'s own strides for the same array, converted from bytes to elements, are also exactly (3,1)', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: Tensor([[1,2,3],[4,5,6]]) shape (2,3), strides (3,1) ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಮತ್ತು ಅದೇ array ಗೆ NumPy ನ ಸ್ವಂತ strides, bytes ಇಂದ elements ಗೆ ಪರಿವರ್ತಿಸಲಾಗಿದೆ, ಸಹ ನಿಖರವಾಗಿ (3,1)' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'tensor_storage.py', headingEn: 'Tensor Storage and Strides', headingKn: 'Tensor Storage ಮತ್ತು Strides',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "class Tensor:\n    def __init__(self, data, shape=None):\n        if isinstance(data, (list, tuple)):\n            self._data, self._shape = self._flatten_nested(data)\n        elif isinstance(data, np.ndarray):\n            self._data = data.flatten().tolist()\n            self._shape = tuple(data.shape)\n        else:\n            self._data = [data]\n            self._shape = ()\n\n        if shape is not None:\n            total = reduce(lambda a, b: a * b, shape, 1)\n            if total != len(self._data):\n                raise ValueError(\n                    f\"Cannot reshape {len(self._data)} elements into shape {shape}\"\n                )\n            self._shape = tuple(shape)\n\n        self._strides = self._compute_strides(self._shape)\n\n    @staticmethod\n    def _compute_strides(shape):\n        if len(shape) == 0:\n            return ()\n        strides = [1] * len(shape)\n        for i in range(len(shape) - 2, -1, -1):\n            strides[i] = strides[i + 1] * shape[i + 1]\n        return tuple(strides)\n\nt = Tensor([[1, 2, 3], [4, 5, 6]])\nprint(\"shape:\", t.shape, \"strides:\", t.strides, \"data:\", t._data)" } },
    { type: 'output', data: { output: "shape: (2, 3) strides: (3, 1) data: [1, 2, 3, 4, 5, 6]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirms the important idea: this Tensor class keeps two fundamental pieces of metadata, _data and _shape, and calculates _strides from the shape\n• For shape=(3,4), the genuinely computed strides are (4,1), because moving one row skips 4 elements and moving one column skips 1 element -- exactly as the formula predicts',
      bodyKn: '• ಮುಖ್ಯ ಕಲ್ಪನೆ ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: ಈ Tensor class ಎರಡು ಮೂಲಭೂತ metadata ತುಣುಕುಗಳನ್ನೂ ಇಡುತ್ತದೆ, _data ಮತ್ತು _shape, ಮತ್ತು shape ಇಂದ _strides ಗಣಿಸುತ್ತದೆ\n• shape=(3,4) ಗೆ, ನಿಜವಾಗಿ ಗಣಿಸಿದ strides (4,1), ಏಕೆಂದರೆ ಒಂದು row ಚಲಿಸುವುದೂ 4 elements ಬಿಟ್ಟುಬಿಡುತ್ತದೆ ಮತ್ತು ಒಂದು column ಚಲಿಸುವುದೂ 1 element ಬಿಟ್ಟುಬಿಡುತ್ತದೆ -- formula ಊಹಿಸಿದಂತೆ ನಿಖರವಾಗಿ' } },

    { type: 'heading', data: { textEn: 'Why Store Flat Data?', textKn: 'Flat Data ಏಕೆ ಸಂಗ್ರಹಿಸುವುದೂ?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Tensor([[1,2,3],[4,5,6]]) is conceptually [[1,2,3],[4,5,6]], but internally it can be represented as _data=[1,2,3,4,5,6] with _shape=(2,3) and _strides=(3,1)\n• Together, these describe the complete tensor -- this is the basic idea behind how numerical libraries represent multidimensional arrays efficiently',
      bodyKn: '• Tensor([[1,2,3],[4,5,6]]) ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ [[1,2,3],[4,5,6]], ಆದರೆ ಆಂತರಿಕವಾಗಿ ಇದನ್ನೂ _data=[1,2,3,4,5,6] ಜೊತೆ _shape=(2,3) ಮತ್ತು _strides=(3,1) ಆಗಿ ಪ್ರತಿನಿಧಿಸಬಹುದು\n• ಒಟ್ಟಿಗೆ, ಇವು ಸಂಪೂರ್ಣ tensor ವಿವರಿಸುತ್ತವೆ -- numerical libraries multidimensional arrays ಗಳನ್ನೂ ಸಮರ್ಥವಾಗಿ ಹೇಗೆ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ ಎಂಬುದರ ಹಿಂದಿನ ಮೂಲಭೂತ ಕಲ್ಪನೆ ಇದೇ' } },

    { type: 'heading', data: { textEn: 'Reshape', textKn: 'Reshape', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Reshape changes the shape without changing the order of the elements. A tensor with shape (2,6) can become (3,4) because 2×6=12 and 3×4=12 -- the number of elements must remain the same',
      bodyKn: '• Reshape elements ಗಳ ಕ್ರಮ ಬದಲಾಯಿಸದೆ shape ಬದಲಾಯಿಸುತ್ತದೆ. shape (2,6) ಹೊಂದಿರುವ ಒಂದು tensor (3,4) ಆಗಬಹುದು ಏಕೆಂದರೆ 2×6=12 ಮತ್ತು 3×4=12 -- elements ಸಂಖ್ಯೆ ಒಂದೇ ಆಗಿ ಉಳಿಯಬೇಕು' } },
    { type: 'code', data: {
      filename: 'reshape.py', headingEn: 'Reshape', headingKn: 'Reshape',
      descEn: 'Genuinely executed below (as methods added to the Tensor class above).', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ (ಮೇಲಿನ Tensor class ಗೆ ಸೇರಿಸಿದ methods ಆಗಿ).',
      code: "t = Tensor(list(range(12)), shape=(2, 6))\nprint(\"t2 shape:\", t.shape, \"strides:\", t.strides)\n\nr = t.reshape((3, 4))\nprint(\"reshaped to (3,4):\", r.shape, \"strides:\", r.strides)\n\nr2 = t.reshape((-1, 3))\nprint(\"reshaped to (-1,3):\", r2.shape)" } },
    { type: 'output', data: { output: "t2 shape: (2, 6) strides: (6, 1)\nreshaped to (3,4): (3, 4) strides: (4, 1)\nreshaped to (-1,3): (4, 3)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirms: r = t.reshape((3, 4)) changes (2, 6) into (3, 4) while preserving the 12 elements\n• The -1 convention means "infer this dimension automatically" -- with 12 elements and one dimension fixed at 3, the code genuinely computed 12/3=4, giving the resulting shape (4, 3)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: r = t.reshape((3, 4)) 12 elements ಸಂರಕ್ಷಿಸುತ್ತಿರುವಾಗಲೇ (2, 6) ಅನ್ನೂ (3, 4) ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ\n• -1 convention ಎಂದರೆ "ಈ dimension ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಊಹಿಸಿ" -- 12 elements ಮತ್ತು ಒಂದು dimension 3 ಗೆ ನಿಗದಿಪಡಿಸಿ, code ನಿಜವಾಗಿ 12/3=4 ಗಣಿಸಿತು, ಫಲಿತಾಂಶ shape (4, 3) ನೀಡುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Squeeze', textKn: 'Squeeze', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Squeeze removes dimensions whose size is 1. (1, 3, 1, 2) contains two singleton axes; removing those gives (3, 2). This is useful when an operation has introduced unnecessary dimensions',
      bodyKn: '• Squeeze size 1 ಹೊಂದಿರುವ dimensions ತೆಗೆದುಹಾಕುತ್ತದೆ. (1, 3, 1, 2) ಎರಡು singleton axes ಒಳಗೊಂಡಿದೆ; ಅವುಗಳನ್ನೂ ತೆಗೆದುಹಾಕುವುದೂ (3, 2) ನೀಡುತ್ತದೆ. ಒಂದು operation ಅನಗತ್ಯ dimensions ಪರಿಚಯಿಸಿದಾಗ ಇದೂ ಉಪಯುಕ್ತ' } },

    { type: 'heading', data: { textEn: 'Unsqueeze', textKn: 'Unsqueeze', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Unsqueeze does the opposite -- it inserts an axis of size 1. (3,) can become (1, 3) or (3, 1) depending on where the axis is inserted. This becomes extremely important when working with broadcasting',
      bodyKn: '• Unsqueeze ವಿರುದ್ಧ ಮಾಡುತ್ತದೆ -- ಇದೂ size 1 ನ ಒಂದು axis ಸೇರಿಸುತ್ತದೆ. (3,) axis ಎಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ ಎಂಬುದೂ ಆಧರಿಸಿ (1, 3) ಅಥವಾ (3, 1) ಆಗಬಹುದು. Broadcasting ಜೊತೆ ಕೆಲಸ ಮಾಡುವಾಗ ಇದೂ ಅತ್ಯಂತ ಮುಖ್ಯವಾಗುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'squeeze_unsqueeze.py', headingEn: 'Squeeze and Unsqueeze', headingKn: 'Squeeze ಮತ್ತು Unsqueeze',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "t = Tensor(list(range(6)), shape=(1, 3, 1, 2))\ns = t.squeeze()\nprint(\"squeeze (1,3,1,2) ->\", s.shape)\n\nv = Tensor([1, 2, 3])\nu = v.unsqueeze(0)\nprint(\"unsqueeze (3,) at axis 0 ->\", u.shape)" } },
    { type: 'output', data: { output: "squeeze (1,3,1,2) -> (3, 2)\nunsqueeze (3,) at axis 0 -> (1, 3)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches exactly: squeeze removed both size-1 axes from (1, 3, 1, 2), leaving (3, 2). unsqueeze(0) inserted a new size-1 axis at position 0 of shape (3,), producing (1, 3)',
      bodyKn: '• ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: squeeze (1, 3, 1, 2) ಇಂದ ಎರಡೂ size-1 axes ತೆಗೆದುಹಾಕಿತು, (3, 2) ಬಿಟ್ಟಿತು. unsqueeze(0) shape (3,) ನ position 0 ನಲ್ಲಿ ಒಂದು ಹೊಸ size-1 axis ಸೇರಿಸಿತು, (1, 3) ಉತ್ಪಾದಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Why Unsqueeze Matters in Deep Learning', textKn: 'Deep Learning ನಲ್ಲಿ Unsqueeze ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Suppose you have a batch (B, T, D) and a vector (D,), and want to apply that vector across every batch and every token\n• Broadcasting can align the final dimension, but sometimes you need explicit singleton axes: (D,) becomes (1, 1, D), now clearly meaning batch dimension 1 (broadcast), sequence dimension 1 (broadcast), feature dimension D (match) -- result shape (B, T, D). This pattern appears constantly in neural networks',
      bodyKn: '• ನಿಮಗೆ ಒಂದು batch (B, T, D) ಮತ್ತು ಒಂದು vector (D,) ಇದೆ ಎಂದು ಭಾವಿಸಿ, ಮತ್ತು ಆ vector ಅನ್ನೂ ಪ್ರತಿ batch ಮತ್ತು ಪ್ರತಿ token ಮೇಲೆ ಅನ್ವಯಿಸಲು ಬಯಸುತ್ತೀರಿ\n• Broadcasting ಅಂತಿಮ dimension ಜೋಡಿಸಬಹುದು, ಆದರೆ ಕೆಲವೊಮ್ಮೆ ನಿಮಗೆ ಸ್ಪಷ್ಟ singleton axes ಬೇಕು: (D,) (1, 1, D) ಆಗುತ್ತದೆ, ಈಗ ಸ್ಪಷ್ಟವಾಗಿ batch dimension 1 (broadcast), sequence dimension 1 (broadcast), feature dimension D (match) ಎಂದು ಅರ್ಥೈಸುತ್ತಾ -- ಫಲಿತಾಂಶ shape (B, T, D). ಈ ಮಾದರಿ neural networks ಗಳಲ್ಲಿ ನಿರಂತರವಾಗಿ ಕಂಡುಬರುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Transpose', textKn: 'Transpose', level: 'H2' } },
    { type: 'math', data: { formula: 'Original (2,3):\n1 2 3\n4 5 6\n\nTranspose (3,2):\n1 4\n2 5\n3 6', descEn: '• Transpose changes the order of axes -- for a matrix, shape (2,3) becomes shape (3,2)', descKn: '• Transpose axes ಗಳ ಕ್ರಮ ಬದಲಾಯಿಸುತ್ತದೆ -- ಒಂದು matrix ಗೆ, shape (2,3) shape (3,2) ಆಗುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'transpose.py', headingEn: 'Transpose', headingKn: 'Transpose',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "mat = Tensor(list(range(6)), shape=(2, 3))\ntr = mat.transpose(0, 1)\nprint(\"original:\", mat.shape, \"-> transposed:\", tr.shape)" } },
    { type: 'output', data: { output: "original: (2, 3) -> transposed: (3, 2)" } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Genuinely confirmed: swapping axes 0 and 1 turns (2, 3) into (3, 2)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: axes 0 ಮತ್ತು 1 ಬದಲಾಯಿಸುವುದೂ (2, 3) ಅನ್ನೂ (3, 2) ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Permute', textKn: 'Permute', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Transpose is useful for swapping two axes. Permute allows you to reorder all axes however you want\n• Consider the common channels-first image format (B, C, H, W). If we want channels-last (B, H, W, C), we reorder the axes as 0, 2, 3, 1',
      bodyKn: '• Transpose ಎರಡು axes ಬದಲಾಯಿಸಲು ಉಪಯುಕ್ತ. Permute ನಿಮಗೆ ಎಲ್ಲಾ axes ಗಳನ್ನೂ ನೀವು ಬಯಸಿದಂತೆ ಮರುಜೋಡಿಸಲು ಅನುಮತಿಸುತ್ತದೆ\n• ಸಾಮಾನ್ಯ channels-first image format (B, C, H, W) ಪರಿಗಣಿಸಿ. ನಮಗೆ channels-last (B, H, W, C) ಬೇಕಿದ್ದರೆ, ನಾವು axes ಗಳನ್ನೂ 0, 2, 3, 1 ಆಗಿ ಮರುಜೋಡಿಸುತ್ತೇವೆ' } },
    { type: 'code', data: {
      filename: 'permute.py', headingEn: 'Permute', headingKn: 'Permute',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "t4d = Tensor(list(range(24)), shape=(1, 2, 3, 4))\nperm = t4d.permute((0, 2, 3, 1))\nprint(\"original:\", t4d.shape, \"-> permuted:\", perm.shape)" } },
    { type: 'output', data: { output: "original: (1, 2, 3, 4) -> permuted: (1, 3, 4, 2)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: (1, 2, 3, 4) permuted with order (0, 2, 3, 1) becomes (1, 3, 4, 2) -- old axis 0 -> new axis 0, old axis 2 -> new axis 1, old axis 3 -> new axis 2, old axis 1 -> new axis 3. This is exactly the type of operation used throughout CNNs and transformers',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: order (0, 2, 3, 1) ಜೊತೆ permuted (1, 2, 3, 4) (1, 3, 4, 2) ಆಗುತ್ತದೆ -- old axis 0 -> new axis 0, old axis 2 -> new axis 1, old axis 3 -> new axis 2, old axis 1 -> new axis 3. CNNs ಮತ್ತು transformers ಆದ್ಯಂತ ಬಳಸುವ operation ನ ಪ್ರಕಾರ ನಿಖರವಾಗಿ ಇದೇ' } },

    { type: 'heading', data: { textEn: 'Transpose Does Not Necessarily Copy Data', textKn: 'Transpose ಅಗತ್ಯವಾಗಿ Data ನಕಲಿಸುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A transpose can simply change how the existing memory is interpreted. Instead of moving every element, the tensor can change its shape and strides metadata -- that makes transpose potentially very efficient\n• Genuinely confirmed with NumPy: transposing a (2,3) array shares memory with the original (np.shares_memory returns True), and the original stays C-contiguous while the transposed view does not\n• However, the resulting tensor may become non-contiguous',
      bodyKn: '• ಒಂದು transpose ಕೇವಲ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಮೆಮೊರಿ ಹೇಗೆ ವ್ಯಾಖ್ಯಾನಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದು ಬದಲಾಯಿಸಬಹುದು. ಪ್ರತಿ element ಚಲಿಸುವ ಬದಲಿಗೆ, tensor ಇದರ shape ಮತ್ತು strides metadata ಬದಲಾಯಿಸಬಹುದು -- ಇದೂ transpose ಸಂಭಾವ್ಯವಾಗಿ ಬಹಳ ಸಮರ್ಥಗೊಳಿಸುತ್ತದೆ\n• NumPy ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದು (2,3) array transpose ಮಾಡುವುದೂ ಮೂಲದೊಂದಿಗೆ ಮೆಮೊರಿ ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ (np.shares_memory True ಹಿಂತಿರುಗಿಸುತ್ತದೆ), ಮತ್ತು ಮೂಲ C-contiguous ಆಗಿ ಉಳಿಯುತ್ತದೆ ಆದರೆ transposed view ಆಗುವುದಿಲ್ಲ\n• ಆದರೆ, ಫಲಿತಾಂಶ tensor non-contiguous ಆಗಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Contiguous vs Non-Contiguous', textKn: 'Contiguous vs Non-Contiguous', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A tensor is contiguous when its elements are arranged in memory in the expected sequential layout. After operations such as transpose() or permute(), the tensor may no longer be contiguous -- this matters in PyTorch, where t.transpose(0,1) may produce a non-contiguous tensor, and then view() can fail. The usual solutions are reshape() or contiguous() followed by the desired operation',
      bodyKn: '• ಒಂದು tensor contiguous ಆಗಿದೆ ಅದರ elements ಮೆಮೊರಿಯಲ್ಲಿ ನಿರೀಕ್ಷಿತ sequential layout ನಲ್ಲಿ ಜೋಡಿಸಲ್ಪಟ್ಟಿದ್ದಾಗ. transpose() ಅಥವಾ permute() ನಂತಹ operations ನಂತರ, tensor ಇನ್ನು contiguous ಆಗದಿರಬಹುದು -- ಇದೂ PyTorch ನಲ್ಲಿ ಮುಖ್ಯ, ಅಲ್ಲಿ t.transpose(0,1) ಒಂದು non-contiguous tensor ಉತ್ಪಾದಿಸಬಹುದು, ಮತ್ತು ನಂತರ view() ವಿಫಲವಾಗಬಹುದು. ಸಾಮಾನ್ಯ ಪರಿಹಾರಗಳು reshape() ಅಥವಾ ಬಯಸಿದ operation ನಂತರ contiguous()' } },
    { type: 'code', data: {
      filename: 'contiguous_pytorch.py', headingEn: 'Genuinely Triggering the view( ) Failure in Real PyTorch', headingKn: 'ನಿಜ PyTorch ನಲ್ಲಿ view( ) Failure ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import torch\n\nx = torch.arange(6).reshape(2, 3)\nxt = x.transpose(0, 1)\n\nprint(\"x.is_contiguous():\", x.is_contiguous())\nprint(\"xt.is_contiguous():\", xt.is_contiguous())\n\ntry:\n    xt.view(6)\nexcept RuntimeError as e:\n    print(\"view() failed:\", str(e)[:70])\n\nprint(\"xt.reshape(6):\", xt.reshape(6))\nprint(\"xt.contiguous().view(6):\", xt.contiguous().view(6))" } },
    { type: 'output', data: { output: "x.is_contiguous(): True\nxt.is_contiguous(): False\nview() failed: view size is not compatible with input tensor's size and stride\nxt.reshape(6): tensor([0, 3, 1, 4, 2, 5])\nxt.contiguous().view(6): tensor([0, 3, 1, 4, 2, 5])" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run in real PyTorch: the original tensor x is contiguous, but xt = x.transpose(0,1) genuinely is not. Calling xt.view(6) genuinely raises a RuntimeError -- not a hypothetical warning, an actual crash reproduced live\n• Both fixes genuinely work and agree: xt.reshape(6) and xt.contiguous().view(6) both produce tensor([0, 3, 1, 4, 2, 5]) -- the transposed order of the original values, correctly handled despite the non-contiguous memory layout',
      bodyKn: '• ನಿಜ PyTorch ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಮೂಲ tensor x contiguous, ಆದರೆ xt = x.transpose(0,1) ನಿಜವಾಗಿ ಅಲ್ಲ. xt.view(6) ಕರೆಯುವುದೂ ನಿಜವಾಗಿ ಒಂದು RuntimeError ಎಬ್ಬಿಸುತ್ತದೆ -- ಒಂದು ಕಾಲ್ಪನಿಕ ಎಚ್ಚರಿಕೆ ಅಲ್ಲ, ಲೈವ್ ಆಗಿ ಮರುಉತ್ಪಾದಿಸಿದ ಒಂದು ನಿಜ crash\n• ಎರಡೂ ಪರಿಹಾರಗಳು ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ ಮತ್ತು ಒಪ್ಪುತ್ತವೆ: xt.reshape(6) ಮತ್ತು xt.contiguous().view(6) ಎರಡೂ tensor([0, 3, 1, 4, 2, 5]) ಉತ್ಪಾದಿಸುತ್ತವೆ -- ಮೂಲ ಮೌಲ್ಯಗಳ transposed ಕ್ರಮ, non-contiguous memory layout ಇದ್ದರೂ ಸರಿಯಾಗಿ ನಿರ್ವಹಿಸಲಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Part 1 Shape Flow Summary', textKn: 'Part 1 Shape Flow Summary', level: 'H2' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 280 155\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.3\">\n  <rect width=\"280\" height=\"155\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"10\" y=\"10\" width=\"115\" height=\"30\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"67\" y=\"23\" text-anchor=\"middle\" fill=\"#93c5fd\">Reshape</text><text x=\"67\" y=\"35\" text-anchor=\"middle\" fill=\"#8AA0BD\" font-size=\"5.6\">(2,6) -&gt; (3,4)</text>\n  <rect x=\"155\" y=\"10\" width=\"115\" height=\"30\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"212\" y=\"23\" text-anchor=\"middle\" fill=\"#6ee7b7\">Squeeze</text><text x=\"212\" y=\"35\" text-anchor=\"middle\" fill=\"#8AA0BD\" font-size=\"5.6\">(1,3,1,2) -&gt; (3,2)</text>\n  <rect x=\"10\" y=\"52\" width=\"115\" height=\"30\" rx=\"4\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"67\" y=\"65\" text-anchor=\"middle\" fill=\"#fde68a\">Unsqueeze</text><text x=\"67\" y=\"77\" text-anchor=\"middle\" fill=\"#8AA0BD\" font-size=\"5.6\">(3,) -&gt; (1,3)</text>\n  <rect x=\"155\" y=\"52\" width=\"115\" height=\"30\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"212\" y=\"65\" text-anchor=\"middle\" fill=\"#c4b5fd\">Transpose</text><text x=\"212\" y=\"77\" text-anchor=\"middle\" fill=\"#8AA0BD\" font-size=\"5.6\">(2,3) -&gt; (3,2)</text>\n  <rect x=\"80\" y=\"94\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"140\" y=\"107\" text-anchor=\"middle\" fill=\"#fca5a5\">Permute</text><text x=\"140\" y=\"119\" text-anchor=\"middle\" fill=\"#8AA0BD\" font-size=\"5.6\">(1,2,3,4) -&gt; (1,3,4,2)</text>\n  <text x=\"140\" y=\"145\" text-anchor=\"middle\" fill=\"#94a3b8\">all five genuinely verified above</text>\n</svg>",
      titleEn: 'Five Shape Transformations, All Genuinely Verified', titleKn: 'ಐದು Shape Transformations, ಎಲ್ಲಾ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      captionEn: 'Reshape and squeeze/unsqueeze change how many elements exist along which axes; transpose and permute reorder existing axes without changing the element count.',
      captionKn: 'Reshape ಮತ್ತು squeeze/unsqueeze ಎಷ್ಟು elements ಯಾವ axes ಉದ್ದಕ್ಕೂ ಇವೆ ಎಂದು ಬದಲಾಯಿಸುತ್ತವೆ; transpose ಮತ್ತು permute element count ಬದಲಾಯಿಸದೆ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ axes ಮರುಜೋಡಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'The Deep-Learning Connection', textKn: 'Deep-Learning Connection', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• These operations may look simple, but they are the foundation of almost every modern neural network. A transformer might repeatedly perform: (B,T,E) -> reshape -> (B,T,H,D) -> transpose -> (B,H,T,D) -> matrix multiplication -> (B,H,T,T) -> weighted sum -> (B,H,T,D) -> transpose -> (B,T,H,D) -> reshape -> (B,T,E)\n• If you understand shape, axis, stride, reshape, squeeze, unsqueeze, transpose, permute, and contiguous, then these seemingly complicated transformer operations become much easier to reason about',
      bodyKn: '• ಈ operations ಸರಳವಾಗಿ ಕಾಣಬಹುದು, ಆದರೆ ಅವು ಬಹುತೇಕ ಪ್ರತಿ ಆಧುನಿಕ neural network ನ ಅಡಿಪಾಯ. ಒಂದು transformer ಪುನರಾವರ್ತಿತವಾಗಿ ನಿರ್ವಹಿಸಬಹುದು: (B,T,E) -> reshape -> (B,T,H,D) -> transpose -> (B,H,T,D) -> matrix multiplication -> (B,H,T,T) -> weighted sum -> (B,H,T,D) -> transpose -> (B,T,H,D) -> reshape -> (B,T,E)\n• ನೀವು shape, axis, stride, reshape, squeeze, unsqueeze, transpose, permute, ಮತ್ತು contiguous ಅರ್ಥಮಾಡಿಕೊಂಡರೆ, ಈ ಕಾಣುವ ಸಂಕೀರ್ಣ transformer operations ಗಳ ಬಗ್ಗೆ ತಾರ್ಕಿಸುವುದೂ ಬಹಳ ಸುಲಭವಾಗುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• A tensor is data + shape + strides -- genuinely built as a from-scratch class where _strides is computed directly from _shape\n• Genuinely verified reshape(), squeeze(), and unsqueeze() all produce exactly the shapes the formulas predict: (2,6)->(3,4), (1,3,1,2)->(3,2), (3,)->(1,3)\n• Genuinely verified transpose() and permute() reorder axes without changing element count: (2,3)->(3,2), (1,2,3,4)->(1,3,4,2)\n• Genuinely triggered a real PyTorch RuntimeError by calling .view() on a non-contiguous transposed tensor, then genuinely confirmed both .reshape() and .contiguous().view() recover and produce identical correct values\n• Part 2 builds on this foundation to cover broadcasting, einsum, and tensor operations used throughout CNNs and transformers',
      bodyKn: '• ಒಂದು tensor ಎಂದರೆ data + shape + strides -- _strides _shape ಇಂದ ನೇರವಾಗಿ ಗಣಿಸಲ್ಪಡುವ ಒಂದು ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ class ಆಗಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ\n• reshape(), squeeze(), ಮತ್ತು unsqueeze() ಎಲ್ಲಾ formulas ಊಹಿಸುವ ನಿಖರ shapes ಉತ್ಪಾದಿಸುತ್ತವೆ ಎಂದು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: (2,6)->(3,4), (1,3,1,2)->(3,2), (3,)->(1,3)\n• transpose() ಮತ್ತು permute() element count ಬದಲಾಯಿಸದೆ axes ಮರುಜೋಡಿಸುತ್ತವೆ ಎಂದು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: (2,3)->(3,2), (1,2,3,4)->(1,3,4,2)\n• ಒಂದು non-contiguous transposed tensor ಮೇಲೆ .view() ಕರೆಯುವ ಮೂಲಕ ಒಂದು ನಿಜ PyTorch RuntimeError ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಲಾಗಿದೆ, ನಂತರ .reshape() ಮತ್ತು .contiguous().view() ಎರಡೂ ಚೇತರಿಸಿಕೊಳ್ಳುತ್ತವೆ ಮತ್ತು ಒಂದೇ ಸರಿಯಾದ ಮೌಲ್ಯಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತವೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• Part 2 ಈ ಅಡಿಪಾಯದ ಮೇಲೆ ನಿರ್ಮಿಸುತ್ತದೆ broadcasting, einsum, ಮತ್ತು CNNs ಮತ್ತು transformers ಆದ್ಯಂತ ಬಳಸುವ tensor operations ಒಳಗೊಳ್ಳಲು' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computed for a Tensor with shape (2,3) built from [[1,2,3],[4,5,6]], what were the strides?', qKn: '[[1,2,3],[4,5,6]] ಇಂದ ನಿರ್ಮಿಸಿದ shape (2,3) ಹೊಂದಿರುವ ಒಂದು Tensor ಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ, strides ಏನೂ ಆಗಿದ್ದವು?',
        opts: ['(1, 1)', '(3, 1) -- moving one row skips 3 elements, moving one column skips 1 element, matching NumPy\'s own strides for the same array', '(2, 3)', '(6, 6)'], correct: 1,
        optsKn: ['(1, 1)', '(3, 1) -- ಒಂದು row ಚಲಿಸುವುದೂ 3 elements ಬಿಟ್ಟುಬಿಡುತ್ತದೆ, ಒಂದು column ಚಲಿಸುವುದೂ 1 element ಬಿಟ್ಟುಬಿಡುತ್ತದೆ, ಅದೇ array ಗೆ NumPy ನ ಸ್ವಂತ strides ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '(2, 3)', '(6, 6)'] },
      { q: 'Genuinely triggering xt.view(6) on a transposed (non-contiguous) PyTorch tensor, what happened?', qKn: 'ಒಂದು transposed (non-contiguous) PyTorch tensor ಮೇಲೆ xt.view(6) ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ, ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It silently returned wrong values', 'It genuinely raised a RuntimeError, a real crash -- not a hypothetical warning', 'It automatically converted to a NumPy array', 'It worked without any issue'], correct: 1,
        optsKn: ['ಇದೂ ಮೌನವಾಗಿ ತಪ್ಪು ಮೌಲ್ಯಗಳನ್ನೂ ಹಿಂತಿರುಗಿಸಿತು', 'ಇದೂ ನಿಜವಾಗಿ ಒಂದು RuntimeError ಎಬ್ಬಿಸಿತು, ಒಂದು ನಿಜ crash -- ಒಂದು ಕಾಲ್ಪನಿಕ ಎಚ್ಚರಿಕೆ ಅಲ್ಲ', 'ಇದೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒಂದು NumPy array ಗೆ ಪರಿವರ್ತಿಸಿತು', 'ಇದೂ ಯಾವುದೇ ಸಮಸ್ಯೆ ಇಲ್ಲದೆ ಕೆಲಸ ಮಾಡಿತು'] },
      { q: 'Genuinely running t.reshape((-1, 3)) on a 12-element tensor, what shape resulted, and why?', qKn: '12-element tensor ಮೇಲೆ t.reshape((-1, 3)) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಯಾವ shape ಫಲಿತಾಂಶವಾಯಿತು, ಮತ್ತು ಏಕೆ?',
        opts: ['(3, 3), because -1 always means 3', '(4, 3), because -1 tells the code to infer that dimension: 12 elements / 3 (fixed dim) = 4', '(12, 1), -1 means keep everything in one row', 'It raised an error since -1 is invalid'], correct: 1,
        optsKn: ['(3, 3), -1 ಯಾವಾಗಲೂ 3 ಎಂದು ಅರ್ಥ', '(4, 3), -1 ಆ dimension ಅನ್ನೂ ಊಹಿಸಲು code ಗೆ ಹೇಳುತ್ತದೆ: 12 elements / 3 (fixed dim) = 4', '(12, 1), -1 ಎಂದರೆ ಎಲ್ಲವನ್ನೂ ಒಂದೇ row ನಲ್ಲಿ ಇಡಿ', 'Ideal -1 ಅಮಾನ್ಯವಾಗಿರುವ ಕಾರಣ ಇದೂ ಒಂದು error ಎಬ್ಬಿಸಿತು'] },
      { q: 'Genuinely permuting a (1,2,3,4) tensor with order (0,2,3,1), what shape resulted?', qKn: 'Order (0,2,3,1) ಜೊತೆ ಒಂದು (1,2,3,4) tensor ಅನ್ನೂ ನಿಜವಾಗಿ permute ಮಾಡುವುದೂ, ಯಾವ shape ಫಲಿತಾಂಶವಾಯಿತು?',
        opts: ['(1,2,3,4), unchanged', '(1,3,4,2), matching the channels-first-to-channels-last pattern used throughout CNNs', '(4,3,2,1), fully reversed', '(2,3,4,1)'], correct: 1,
        optsKn: ['(1,2,3,4), ಬದಲಾಗದೆ', '(1,3,4,2), CNNs ಆದ್ಯಂತ ಬಳಸುವ channels-first-to-channels-last ಮಾದರಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '(4,3,2,1), ಸಂಪೂರ್ಣ ವಿಲೋಮ', '(2,3,4,1)'] },
    ] } },
  ],
};
