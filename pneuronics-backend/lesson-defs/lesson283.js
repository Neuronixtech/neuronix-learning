const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321415'; // Module 195: Quantization: Making Models Fit

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Quantization: Making Models Fit — Part 1: Symmetric vs Asymmetric Quantization',
  titleKn: 'Quantization: Making Models Fit — Part 1: Symmetric vs Asymmetric Quantization',
  desc: 'Genuinely implement quantize_symmetric() and quantize_asymmetric(), and confirm asymmetric quantization genuinely halves the max error (0.0082 vs 0.0165) on non-negative post-ReLU activations, because symmetric quantization wastes half its representable range on values that never occur.',
  descKn: 'quantize_symmetric() ಮತ್ತೆ quantize_asymmetric() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, non-negative post-ReLU activations ಮೇಲೆ asymmetric quantization ನಿಜವಾಗಿ max error ಅನ್ನೂ (0.0082 vs 0.0165) ಅರ್ಧಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, symmetric quantization ಎಂದಿಗೂ ಸಂಭವಿಸದ values ಮೇಲೆ ಅದೂ ya representable range ya ಅರ್ಧವನ್ನೂ ವ್ಯರ್ಥ ಮಾಡುವುದರಿಂದ.',
  objectives: [
    'Genuinely implement quantize_symmetric() and confirm its round-trip error is small but non-zero.',
    'Genuinely implement quantize_asymmetric() using a zero-point for non-symmetric data ranges.',
    'Genuinely confirm asymmetric quantization halves the error versus symmetric on non-negative activations.',
    'Genuinely implement quantization_error() with MSE and max-abs-error metrics.',
    'Understand why weights (symmetric around 0) and post-ReLU activations (non-negative) need different quantization schemes.',
    'Understand the scale and zero-point as the two numbers that define a quantization mapping.',
  ],
  objectivesKn: [
    'quantize_symmetric() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ ya round-trip error ಚಿಕ್ಕದೂ ಆದರೆ ಶೂನ್ಯ-ಅಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Non-symmetric data ranges ಗಾಗಿ ಒಂದೂ zero-point ಬಳಸಿ quantize_asymmetric() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Asymmetric quantization non-negative activations ಮೇಲೆ symmetric ಗಿಂತ error ಅನ್ನೂ ಅರ್ಧಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'MSE ಮತ್ತೆ max-abs-error metrics ಜೊತೆ quantization_error() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Weights (0 ಸುತ್ತ symmetric) ಮತ್ತೆ post-ReLU activations (non-negative) ಗೆ ಭಿನ್ನ quantization schemes ಏಕೆ ಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Scale ಮತ್ತೆ zero-point ಅನ್ನೂ ಒಂದೂ quantization mapping ಅನ್ನೂ ವ್ಯಾಖ್ಯಾನಿಸುವ ಎರಡೂ ಸಂಖ್ಯೆಗಳಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Quantization: Making Models Fit — Part 1: Symmetric vs Asymmetric Quantization', textKn: 'Quantization: Making Models Fit — Part 1: Symmetric vs Asymmetric Quantization', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Module 194 (Evaluation) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Module 194 (Evaluation) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,Quantization,int8,Symmetric/Asymmetric,Part 1 of 3',
      pillsKn: 'Python,NumPy,Quantization,int8,Symmetric/Asymmetric,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'A Trained Model Is Not the Same as a Deployable Model', textKn: 'ಒಂದೂ Trained Model ಒಂದೂ Deployable Model ಗೆ ಸಮಾನವಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Module 194 Measured Quality; This Module Measures Cost', headingKn: 'Module 194 Quality ಅಳೆಯಿತು; ಈ Module Cost ಅಳೆಯುತ್ತದೆ',
      bodyEn: '• Modules 190-194 genuinely trained, aligned, and evaluated models -- all in 32-bit floating point, the format every NumPy array in this course has used by default\n• A 7B-parameter model at 32-bit float needs over 26GB just for weights -- quantization asks: can we represent each weight with far fewer bits (int8, int4) while keeping the model\'s actual behavior nearly unchanged?',
      bodyKn: '• Modules 190-194 ನಿಜವಾಗಿ models ಅನ್ನೂ train, align, ಮತ್ತೆ evaluate ಮಾಡಿದವು -- ಎಲ್ಲಾ 32-bit floating point ನಲ್ಲಿ, ಈ course ನಲ್ಲಿ ಪ್ರತಿ NumPy array ಬಳಸಿದ default format\n• ಒಂದೂ 7B-parameter model 32-bit float ನಲ್ಲಿ ಕೇವಲ weights ಗೆ 26GB ಗಿಂತ ಹೆಚ್ಚು ಬೇಕು -- quantization ಕೇಳುತ್ತದೆ: ನಾವೂ ಪ್ರತಿ weight ಅನ್ನೂ ಬಹಳ ಕಡಿಮೆ bits (int8, int4) ಜೊತೆ ಪ್ರತಿನಿಧಿಸಬಹುದೇ, model ya ನಿಜ ವರ್ತನೆಯನ್ನೂ ಬಹುತೇಕ ಬದಲಾಗದೆ ಇಟ್ಟುಕೊಳ್ಳುತ್ತಾ?' } },

    { type: 'heading', data: { textEn: 'quantize_symmetric(): Mapping Around Zero', textKn: 'quantize_symmetric(): ಶೂನ್ಯದ ಸುತ್ತ Mapping', level: 'H2' } },
    { type: 'code', data: {
      filename: 'quantize_symmetric.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement quantize_symmetric(): find a single scale from the max absolute value, round to the nearest integer grid point, clip to the representable range, and dequantize back to float.',
      descKn: 'quantize_symmetric() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: max absolute value ಇಂದ ಒಂದೂ single scale ಕಂಡುಹಿಡಿಯಿರಿ, ಹತ್ತಿರದ integer grid point ಗೆ round ಮಾಡಿ, representable range ಗೆ clip ಮಾಡಿ, ಮತ್ತೆ float ಗೆ ಹಿಂತಿರುಗಿ dequantize ಮಾಡಿ.',
      code: "def quantize_symmetric(x, bits=8):\n    qmax = 2 ** (bits - 1) - 1  # 127 for int8\n    scale = np.abs(x).max() / qmax\n    q = np.round(x / scale).astype(np.int32)\n    q = np.clip(q, -qmax - 1, qmax)\n    dequant = q.astype(np.float32) * scale\n    return q, scale, dequant\n\nx = np.array([-2.5, -1.0, 0.0, 0.3, 1.8, 2.5])\nq, scale, dq = quantize_symmetric(x, bits=8)\nprint('original:', x)\nprint('int8 quantized:', q)\nprint('scale:', scale)\nprint('dequantized:', np.round(dq, 4))\nprint('max abs error:', round(np.abs(x - dq).max(), 6))" } },
    { type: 'output', data: { output: "original: [-2.5 -1.   0.   0.3  1.8  2.5]\nint8 quantized: [-127  -51    0   15   91  127]\nscale: 0.01968503937007874\ndequantized: [-2.5    -1.0039  0.      0.2953  1.7913  2.5   ]\nmax abs error: 0.008661" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Extremes Round-Trip Exactly, the Middle Values Do Not', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Extremes ನಿಖರವಾಗಿ Round-Trip ಆಗುತ್ತವೆ, Madhya Values Aaguvudilla',
      bodyEn: 'Genuinely confirmed: -2.5 and 2.5 (the values that DEFINED the scale) dequantize back to exactly -2.5 and 2.5, while -1.0 comes back as -1.0039 and 0.3 comes back as 0.2953 -- the max abs error of 0.008661 is genuinely small (about 0.3% of the [-2.5, 2.5] range) but never exactly zero, since int8 has only 256 discrete grid points to represent the entire continuous range.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: -2.5 ಮತ್ತೆ 2.5 (scale ಅನ್ನೂ ವ್ಯಾಖ್ಯಾನಿಸಿದ values) ನಿಖರವಾಗಿ -2.5 ಮತ್ತೆ 2.5 ಗೆ dequantize ಆಗುತ್ತವೆ, -1.0 -1.0039 ಆಗಿ ಹಿಂತಿರುಗುತ್ತದೆ ಮತ್ತೆ 0.3 0.2953 ಆಗಿ ಹಿಂತಿರುಗುತ್ತದೆ -- 0.008661 ya max abs error ನಿಜವಾಗಿ ಚಿಕ್ಕದೂ ಆದರೆ ಎಂದಿಗೂ ನಿಖರವಾಗಿ ಶೂನ್ಯ ಅಲ್ಲ, int8 ಗೆ ಇಡೀ continuous range ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸಲು ಕೇವಲ 256 discrete grid points ಇರುವುದರಿಂದ.' } },

    { type: 'heading', data: { textEn: 'quantize_asymmetric(): Mapping With a Zero-Point', textKn: 'quantize_asymmetric(): Zero-Point ಜೊತೆ Mapping', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Symmetric Quantization Wastes Range on Post-ReLU Activations', headingKn: 'Symmetric Quantization Post-ReLU Activations ಮೇಲೆ Range ಅನ್ನೂ ಏಕೆ ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ',
      bodyEn: 'ReLU outputs are never negative -- but quantize_symmetric() always reserves half its integer range (-128 to -1 for int8) for negative values, wasting it entirely on data that never goes below zero. quantize_asymmetric() instead maps [x_min, x_max] to the FULL unsigned range [0, 255] using a scale AND a zero-point offset.',
      bodyKn: 'ReLU outputs ಎಂದಿಗೂ negative ಅಲ್ಲ -- ಆದರೆ quantize_symmetric() ಯಾವಾಗಲೂ ಅದೂ ya integer range ya ಅರ್ಧವನ್ನೂ (int8 ಗೆ -128 ಇಂದ -1) negative values ಗೆ ಕಾಯ್ದಿರಿಸುತ್ತದೆ, ಎಂದಿಗೂ ಶೂನ್ಯಕ್ಕಿಂತ ಕೆಳಗೆ ಹೋಗದ ಡೇಟಾ ಮೇಲೆ ಅದನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ವ್ಯರ್ಥ ಮಾಡುತ್ತಾ. quantize_asymmetric() ಬದಲಿಗೆ [x_min, x_max] ಅನ್ನೂ ಒಂದೂ scale ಮತ್ತೆ zero-point offset ಬಳಸಿ ಪೂರ್ಣ unsigned range [0, 255] ಗೆ map ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'quantize_asymmetric.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement quantize_asymmetric(): compute scale from the full [min, max] range, compute a zero-point that maps x_min to qmin, then quantize/dequantize using both.',
      descKn: 'quantize_asymmetric() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪೂರ್ಣ [min, max] range ಇಂದ scale ಲೆಕ್ಕಹಾಕಿ, x_min ಅನ್ನೂ qmin ಗೆ map ಮಾಡುವ ಒಂದೂ zero-point ಲೆಕ್ಕಹಾಕಿ, ನಂತರ ಎರಡನ್ನೂ ಬಳಸಿ quantize/dequantize ಮಾಡಿ.',
      code: "def quantize_asymmetric(x, bits=8):\n    qmin, qmax = 0, 2 ** bits - 1  # uint8: 0..255\n    x_min, x_max = x.min(), x.max()\n    scale = (x_max - x_min) / (qmax - qmin)\n    zero_point = np.round(qmin - x_min / scale).astype(np.int32)\n    zero_point = np.clip(zero_point, qmin, qmax)\n    q = np.round(x / scale + zero_point).astype(np.int32)\n    q = np.clip(q, qmin, qmax)\n    dequant = (q.astype(np.float32) - zero_point) * scale\n    return q, scale, zero_point, dequant\n\nrelu_acts = np.array([0.0, 0.0, 0.2, 1.5, 3.7, 0.0, 5.9])  # post-ReLU: all non-negative\nqa, scale_a, zp_a, dqa = quantize_asymmetric(relu_acts, bits=8)\nprint('post-ReLU activations:', relu_acts)\nprint('uint8 quantized:', qa, ' zero_point:', zp_a, ' scale:', round(scale_a, 5))\nprint('dequantized:', np.round(dqa, 4))\nprint('max abs error:', round(np.abs(relu_acts - dqa).max(), 6))" } },
    { type: 'output', data: { output: "post-ReLU activations: [0.  0.  0.2 1.5 3.7 0.  5.9]\nuint8 quantized: [  0   0   9  65 160   0 255]  zero_point: 0  scale: 0.02314\ndequantized: [0.     0.     0.2082 1.5039 3.702  0.     5.9   ]\nmax abs error: 0.008235" } },

    { type: 'code', data: {
      filename: 'symmetric_vs_asymmetric.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely quantize the SAME non-negative activation array with quantize_symmetric() instead, to directly measure how much error the wasted negative half of the range costs.',
      descKn: 'ಅದೇ non-negative activation array ಅನ್ನೂ ಬದಲಿಗೆ quantize_symmetric() ಜೊತೆ ನಿಜವಾಗಿ quantize ಮಾಡಿ, range ya ವ್ಯರ್ಥ negative ಅರ್ಧ ಎಷ್ಟೂ error ವೆಚ್ಚ ಮಾಡುತ್ತದೆ ಎಂದೂ ನೇರವಾಗಿ ಅಳೆಯಿರಿ.',
      code: "qs, scale_s, dqs = quantize_symmetric(relu_acts, bits=8)\nprint('symmetric quantization of the SAME non-negative data:')\nprint('  int8 quantized:', qs)\nprint('  max abs error:', round(np.abs(relu_acts - dqs).max(), 6))" } },
    { type: 'output', data: { output: "symmetric quantization of the SAME non-negative data:\n  int8 quantized: [  0   0   4  32  80   0 127]\n  max abs error: 0.016535" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Asymmetric Quantization Halves the Error on Non-Negative Data', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Asymmetric Quantization Non-Negative Data Mele Error Annu Ardhagolisuttade',
      bodyEn: 'Genuinely confirmed: on the identical post-ReLU array, asymmetric quantization achieves max_abs_error=0.008235 while symmetric achieves only 0.016535 -- almost exactly 2x worse. This matches the theory precisely: symmetric quantization spends 128 of its 256 grid points on negative values that never occur in this data, effectively halving its usable resolution, while asymmetric quantization spends all 256 grid points on the range that actually matters.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ post-ReLU array ಮೇಲೆ, asymmetric quantization max_abs_error=0.008235 ಸಾಧಿಸುತ್ತದೆ, symmetric ಕೇವಲ 0.016535 ಸಾಧಿಸುತ್ತದೆ -- ಬಹುತೇಕ ನಿಖರವಾಗಿ 2x ಕೆಟ್ಟದೂ. ಇದೂ theory ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: symmetric quantization ಅದೂ ya 256 grid points ರಲ್ಲಿ 128 ಅನ್ನೂ ಈ ಡೇಟಾದಲ್ಲಿ ಎಂದಿಗೂ ಸಂಭವಿಸದ negative values ಮೇಲೆ ಖರ್ಚು ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'quantization_error(): Measuring the Damage', textKn: 'quantization_error(): ನಷ್ಟವನ್ನೂ ಅಳೆಯುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'quantization_error.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement quantization_error(): return both MSE (average squared error, sensitive to overall spread) and max-abs-error (worst-case single-value error).',
      descKn: 'quantization_error() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: MSE (average squared error) ಮತ್ತೆ max-abs-error (worst-case single-value error) ಎರಡನ್ನೂ ಹಿಂತಿರುಗಿಸಿ.',
      code: "def quantization_error(original, dequantized):\n    diff = original - dequantized\n    return {'mse': float(np.mean(diff ** 2)), 'max_abs_error': float(np.abs(diff).max())}\n\nprint('symmetric on x:', quantization_error(x, dq))\nprint('asymmetric on relu_acts:', quantization_error(relu_acts, dqa))\nprint('symmetric on relu_acts:', quantization_error(relu_acts, dqs))" } },
    { type: 'output', data: { output: "symmetric on x: {'mse': 1.88e-05, 'max_abs_error': 0.008661}\nasymmetric on relu_acts: {'mse': 1.24e-05, 'max_abs_error': 0.008235}\nsymmetric on relu_acts: {'mse': 9.34e-05, 'max_abs_error': 0.016535}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: MSE Amplifies the Same Story Even More Sharply Than Max Error', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: MSE Max Error ಗಿಂತ ಇನ್ನೂ ಹೆಚ್ಚು ತೀಕ್ಷ್ಣವಾಗಿ ಅದೇ ಕಥೆ ಹೇಳುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: while max_abs_error showed asymmetric beating symmetric by about 2x on relu_acts, MSE shows a roughly 7.5x gap (1.24e-05 vs 9.34e-05) -- because MSE squares each error before averaging, so the many small-but-nonzero errors from symmetric quantization\'s reduced effective resolution compound more heavily than a single worst-case number reveals.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: max_abs_error relu_acts ಮೇಲೆ asymmetric symmetric ಅನ್ನೂ ಬಹುತೇಕ 2x ಸೋಲಿಸುತ್ತದೆ ಎಂದೂ ತೋರಿಸಿದರೆ, MSE ಬಹುತೇಕ 7.5x ಅಂತರ ತೋರಿಸುತ್ತದೆ -- MSE ಪ್ರತಿ error ಅನ್ನೂ average ಮಾಡುವ ಮೊದಲೂ square ಮಾಡುವುದರಿಂದ.' } },

    { type: 'code', data: {
      filename: 'four_bit_preview.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely quantize the same array x at 4 bits instead of 8, as a preview of the bit-width tradeoff Part 2 explores in depth.',
      descKn: '8 ಬದಲು 4 bits ನಲ್ಲಿ ಅದೇ array x ಅನ್ನೂ ನಿಜವಾಗಿ quantize ಮಾಡಿ, Part 2 ಆಳವಾಗಿ ಅನ್ವೇಷಿಸುವ bit-width tradeoff ya ಒಂದೂ ಪೂರ್ವವೀಕ್ಷಣೆಯಾಗಿ.',
      code: "q4, scale4, dq4 = quantize_symmetric(x, bits=4)\nprint('4-bit quantized:', q4, ' scale:', round(scale4, 4))\nprint('4-bit dequantized:', np.round(dq4, 4))\nprint('4-bit max abs error:', round(np.abs(x - dq4).max(), 6))" } },
    { type: 'output', data: { output: "4-bit quantized: [-7 -3  0  1  5  7]  scale: 0.3571\n4-bit dequantized: [-2.5    -1.0714  0.      0.3571  1.7857  2.5   ]\n4-bit max abs error: 0.071429" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Halving the Bit Width Grows Error by Roughly 8x, Not 2x', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Bit Width ಅರ್ಧಗೊಳಿಸುವುದೂ Error ಅನ್ನೂ Bahutek 8x Belesuttade, 2x Alla',
      bodyEn: 'Genuinely confirmed: dropping from 8 bits (max_abs_error=0.008661) to 4 bits (max_abs_error=0.071429) on the identical array grew the error by roughly 8.2x, not the 2x one might naively expect from "half the bits" -- because halving the bit count doesn\'t halve the grid, it exponentially shrinks it (2^8=256 points down to 2^4=16 points). Part 2 genuinely sweeps this relationship across more bit widths.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ array ಮೇಲೆ 8 bits (max_abs_error=0.008661) ಇಂದ 4 bits (max_abs_error=0.071429) ಗೆ ಇಳಿಯುವುದೂ error ಅನ್ನೂ ಬಹುತೇಕ 8.2x ಬೆಳೆಸಿತು, "ಅರ್ಧ bits" ಇಂದ ಒಬ್ಬರೂ ನಿಷ್ಕಪಟವಾಗಿ ನಿರೀಕ್ಷಿಸಬಹುದಾದ 2x ಅಲ್ಲ -- bit count ಅರ್ಧಗೊಳಿಸುವುದೂ grid ಅನ್ನೂ ಅರ್ಧಗೊಳಿಸುವುದಿಲ್ಲ, ಅದೂ ಘಾತೀಯವಾಗಿ ಕುಗ್ಗಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Symmetric vs Asymmetric: When to Use Each', captionKn: 'Symmetric vs Asymmetric: ಪ್ರತಿಯೊಂದನ್ನೂ ಯಾವಾಗ ಬಳಸಬೇಕು',
      rows: "Scheme|Best for|Extra state needed\nSymmetric|Weights (naturally centered around 0)|Just a scale\nAsymmetric|Post-ReLU / post-GELU activations (skewed non-negative)|A scale AND a zero-point" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Quantization: representing floating-point values with a smaller number of discrete integer levels\n• Scale: the float-per-integer-step conversion factor that defines a quantization grid\n• Zero-point: an integer offset used in asymmetric quantization so that 0.0 in float maps exactly to some integer, not necessarily the grid center\n• Dequantization: converting quantized integers back to approximate floating-point values',
      bodyKn: '• Quantization: floating-point values ಅನ್ನೂ ಚಿಕ್ಕ ಸಂಖ್ಯೆಯ discrete integer levels ಜೊತೆ ಪ್ರತಿನಿಧಿಸುವುದೂ\n• Scale: ಒಂದೂ quantization grid ಅನ್ನೂ ವ್ಯಾಖ್ಯಾನಿಸುವ float-per-integer-step conversion factor\n• Zero-point: asymmetric quantization ನಲ್ಲಿ ಬಳಸುವ ಒಂದೂ integer offset, ಆದ್ದರಿಂದ float ನಲ್ಲಿ 0.0 ಒಂದೂ integer ಗೆ ನಿಖರವಾಗಿ map ಆಗುತ್ತದೆ\n• Dequantization: quantized integers ಅನ್ನೂ ಅಂದಾಜು floating-point values ಗೆ ಪರಿವರ್ತಿಸುವುದೂ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The symmetric and asymmetric quantization schemes genuinely built here are the same two options exposed by production quantization libraries like PyTorch\'s `torch.quantization` and ONNX Runtime -- both explicitly document choosing symmetric for weights and asymmetric for activations, for exactly the reason genuinely confirmed in this lesson.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ symmetric ಮತ್ತೆ asymmetric quantization schemes PyTorch ya `torch.quantization` ಮತ್ತೆ ONNX Runtime ನಂತಹ production quantization libraries ಬಹಿರಂಗಪಡಿಸುವ ಅದೇ ಎರಡೂ ಆಯ್ಕೆಗಳು -- ಎರಡೂ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ ಕಾರಣಕ್ಕಾಗಿ weights ಗೆ symmetric ಮತ್ತೆ activations ಗೆ asymmetric ಆಯ್ಕೆ ಮಾಡುವುದನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ದಾಖಲಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: choosing the right scheme per data type (symmetric for weights, asymmetric for post-activation values) genuinely halves error compared to using one scheme everywhere\n• Genuinely confirmed: quantization_error()\'s dual MSE/max-abs-error reporting lets teams catch both "average distortion" and "worst-case outlier" failure modes before deploying a quantized model',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ data type ಗೆ ಸರಿಯಾದ scheme ಆಯ್ಕೆ ಮಾಡುವುದೂ (weights ಗೆ symmetric, post-activation values ಗೆ asymmetric) ಎಲ್ಲೆಡೆ ಒಂದೂ scheme ಬಳಸುವುದಕ್ಕೆ ಹೋಲಿಸಿದರೆ ನಿಜವಾಗಿ error ಅನ್ನೂ ಅರ್ಧಗೊಳಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: quantization_error() ya dual MSE/max-abs-error ವರದಿ teams ಗೆ deploy ಮಾಡುವ ಮೊದಲೂ "average distortion" ಮತ್ತೆ "worst-case outlier" ಎರಡನ್ನೂ ಹಿಡಿಯಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a deployment framework quantizes a trained transformer to int8, it genuinely applies symmetric quantization to the weight matrices and asymmetric quantization to the post-activation tensors flowing through ReLU/GELU layers -- exactly the split verified in this lesson, not an arbitrary implementation detail.',
      bodyKn: 'ಒಂದೂ deployment framework ಒಂದೂ trained transformer ಅನ್ನೂ int8 ಗೆ quantize ಮಾಡಿದಾಗ, ಅದೂ ನಿಜವಾಗಿ weight matrices ಗೆ symmetric quantization ಮತ್ತೆ ReLU/GELU layers ಮೂಲಕ ಹರಿಯುವ post-activation tensors ಗೆ asymmetric quantization ಅನ್ವಯಿಸುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'Symmetric vs Asymmetric Grid Usage', titleKn: 'Symmetric vs Asymmetric Grid ಬಳಕೆ',
      captionEn: 'Symmetric quantization reserves half its int8 grid for negative values. Asymmetric quantization uses the full grid when data is entirely non-negative.',
      captionKn: 'Symmetric quantization negative values ಗೆ ಅದೂ ya int8 grid ya ಅರ್ಧವನ್ನೂ ಕಾಯ್ದಿರಿಸುತ್ತದೆ. Asymmetric quantization ಡೇಟಾ ಸಂಪೂರ್ಣವಾಗಿ non-negative ಆಗಿರುವಾಗ ಪೂರ್ಣ grid ಬಳಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 180' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' fill='#e2e8f0' font-size='14'>Symmetric (-128..127)</text><rect x='20' y='45' width='300' height='30' fill='#ef4444' opacity='0.3'/><rect x='320' y='45' width='300' height='30' fill='#22c55e' opacity='0.3'/><text x='170' y='65' fill='#e2e8f0' font-size='11' text-anchor='middle'>unused (negative)</text><text x='470' y='65' fill='#e2e8f0' font-size='11' text-anchor='middle'>used (0..max)</text><text x='20' y='110' fill='#e2e8f0' font-size='14'>Asymmetric (0..255)</text><rect x='20' y='125' width='620' height='30' fill='#22c55e' opacity='0.3'/><text x='330' y='145' fill='#e2e8f0' font-size='11' text-anchor='middle'>fully used (0..max)</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This lesson quantized single vectors uniformly. Part 2 genuinely applies this to full weight matrices with quantize_per_channel() (handling outlier rows), sweeps bit width systematically, and genuinely computes how many GB a 7B and 70B model actually save at each bit width.',
      bodyKn: 'ಈ lesson single vectors ಅನ್ನೂ ಏಕರೂಪವಾಗಿ quantize ಮಾಡಿತು. Part 2 ಇದನ್ನೂ ಪೂರ್ಣ weight matrices ಗೆ quantize_per_channel() ಜೊತೆ ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ (outlier rows ಅನ್ನೂ ನಿಭಾಯಿಸುತ್ತಾ), bit width ಅನ್ನೂ ವ್ಯವಸ್ಥಿತವಾಗಿ sweep ಮಾಡುತ್ತದೆ, ಮತ್ತೆ ಒಂದೂ 7B ಮತ್ತೆ 70B model ಪ್ರತಿ bit width ನಲ್ಲಿ ನಿಜವಾಗಿ ಎಷ್ಟೂ GB ಉಳಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: comparing symmetric and asymmetric quantization on the SAME non-negative post-ReLU array, what was the ratio of max_abs_error?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ non-negative post-ReLU array ಮೇಲೆ symmetric ಮತ್ತೆ asymmetric quantization ಹೋಲಿಸುತ್ತಾ, max_abs_error ya ಅನುಪಾತ ಏನಾಗಿತ್ತು?',
        opts: ['They were identical', 'Symmetric was almost exactly 2x worse than asymmetric', 'Asymmetric was 10x worse', 'Symmetric had zero error'], correct: 1,
        optsKn: ['ಅವೂ ಒಂದೇ ಆಗಿದ್ದವು', 'Symmetric asymmetric ಗಿಂತ ಬಹುತೇಕ ನಿಖರವಾಗಿ 2x ಕೆಟ್ಟದೂ ಆಗಿತ್ತು', 'Asymmetric 10x ಕೆಟ್ಟದೂ ಆಗಿತ್ತು', 'Symmetric ಶೂನ್ಯ error ಹೊಂದಿತ್ತು'] },
      { q: 'Why does symmetric quantization waste range on post-ReLU activations specifically?', qKn: 'Symmetric quantization ನಿರ್ದಿಷ್ಟವಾಗಿ post-ReLU activations ಮೇಲೆ ಏಕೆ range ಅನ್ನೂ ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ?',
        opts: ['ReLU outputs are always negative', 'ReLU outputs are never negative, so half the symmetric grid (reserved for negatives) is never used', 'Symmetric quantization does not support 8 bits', 'ReLU has no effect on quantization'], correct: 1,
        optsKn: ['ReLU outputs ಯಾವಾಗಲೂ negative', 'ReLU outputs ಎಂದಿಗೂ negative ಅಲ್ಲ, ಆದ್ದರಿಂದ symmetric grid ya ಅರ್ಧ ಎಂದಿಗೂ ಬಳಸಲ್ಪಡುವುದಿಲ್ಲ', 'Symmetric quantization 8 bits ಬೆಂಬಲಿಸುವುದಿಲ್ಲ', 'ReLU quantization ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what two extra pieces of information does asymmetric quantization need that symmetric does not?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: symmetric ಅಗತ್ಯಪಡಿಸದ ಯಾವ ಎರಡೂ ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿ ತುಣುಕುಗಳನ್ನೂ asymmetric quantization ಅಗತ್ಯಪಡಿಸುತ್ತದೆ?',
        opts: ['Nothing extra is needed', 'A separate scale for each bit width', 'A zero-point in addition to the scale', 'A gradient and a learning rate'], correct: 2,
        optsKn: ['ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಬೇಕಿಲ್ಲ', 'ಪ್ರತಿ bit width ಗೆ ಒಂದೂ ಪ್ರತ್ಯೇಕ scale', 'Scale ಜೊತೆಗೆ ಒಂದೂ zero-point', 'ಒಂದೂ gradient ಮತ್ತೆ ಒಂದೂ learning rate'] },
      { q: 'Genuinely confirmed: in quantize_symmetric(x) on x=[-2.5,-1.0,0.0,0.3,1.8,2.5], which values dequantized back exactly with zero error?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: x=[-2.5,-1.0,0.0,0.3,1.8,2.5] ಮೇಲೆ quantize_symmetric(x) ನಲ್ಲಿ, ಯಾವ values ಶೂನ್ಯ error ಜೊತೆ ನಿಖರವಾಗಿ dequantize ಆದವು?',
        opts: ['All six values', 'None of them', 'The two extreme values that defined the scale (-2.5 and 2.5)', 'Only 0.0'], correct: 2,
        optsKn: ['ಎಲ್ಲಾ ಆರೂ values', 'ಅವುಗಳಲ್ಲಿ ಯಾವುದೂ ಇಲ್ಲ', 'Scale ಅನ್ನೂ ವ್ಯಾಖ್ಯಾನಿಸಿದ ಎರಡೂ extreme values (-2.5 ಮತ್ತೆ 2.5)', 'ಕೇವಲ 0.0'] },
      { q: 'Why is quantization_error() reported with BOTH mse and max_abs_error rather than just one?', qKn: 'quantization_error() ಅನ್ನೂ ಕೇವಲ ಒಂದೂ ಬದಲು mse ಮತ್ತೆ max_abs_error ಎರಡರೊಂದಿಗೆ ಏಕೆ ವರದಿ ಮಾಡಲಾಗಿದೆ?',
        opts: ['They always give the same number', 'MSE captures average distortion while max_abs_error captures worst-case outlier error -- both matter for deployment decisions', 'max_abs_error is deprecated', 'mse is only for weights'], correct: 1,
        optsKn: ['ಅವೂ ಯಾವಾಗಲೂ ಅದೇ ಸಂಖ್ಯೆ ನೀಡುತ್ತವೆ', 'MSE average distortion ಸೆರೆಹಿಡಿಯುತ್ತದೆ, max_abs_error worst-case outlier error ಸೆರೆಹಿಡಿಯುತ್ತದೆ -- ಎರಡೂ deployment decisions ಗೆ ಮುಖ್ಯ', 'max_abs_error deprecated ಆಗಿದೆ', 'mse ಕೇವಲ weights ಗೆ'] },
    ] } },
  ],
};
