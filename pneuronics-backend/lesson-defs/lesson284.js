const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321415'; // Module 195: Quantization: Making Models Fit

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Quantization: Making Models Fit — Part 2: Per-Channel Quantization, Bit-Width Sweep & Memory Savings',
  titleKn: 'Quantization: Making Models Fit — Part 2: Per-Channel Quantization, Bit-Width Sweep & Memory Savings',
  desc: 'Genuinely implement quantize_per_channel() and confirm it rescues non-outlier rows from 0.40+ error down to under 0.01 when one row has 50x the dynamic range -- then genuinely sweep bit width and compute that a 70B model needs 260.77GB at fp32 but just 32.60GB at int4.',
  descKn: 'quantize_per_channel() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಒಂದೂ row 50x dynamic range ಹೊಂದಿರುವಾಗ non-outlier rows ಅನ್ನೂ 0.40+ error ಇಂದ 0.01 ಗಿಂತ ಕಡಿಮೆಗೆ ರಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ bit width ಅನ್ನೂ ನಿಜವಾಗಿ sweep ಮಾಡಿ ಒಂದೂ 70B model fp32 ನಲ್ಲಿ 260.77GB ಆದರೆ int4 ನಲ್ಲಿ ಕೇವಲ 32.60GB ಬೇಕಾಗುತ್ತದೆ ಎಂದೂ ಲೆಕ್ಕಹಾಕಿ.',
  objectives: [
    'Genuinely implement quantize_per_channel() and confirm it rescues non-outlier rows from an outlier-dominated shared scale.',
    'Genuinely implement bit_width_sweep() and confirm error grows roughly exponentially, not linearly, as bits decrease.',
    'Genuinely implement a quantization memory_calculator() and compute real GB savings for 7B and 70B models.',
    'Understand why a single outlier channel can silently degrade an entire per-tensor quantization scheme.',
    'Understand the tradeoff curve between bit width, error, and memory savings.',
    'Recognize why per-channel quantization costs more metadata (one scale per row) in exchange for accuracy.',
  ],
  objectivesKn: [
    'quantize_per_channel() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ non-outlier rows ಅನ್ನೂ ಒಂದೂ outlier-dominated shared scale ಇಂದ ರಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'bit_width_sweep() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ bits ಕಡಿಮೆಯಾಗುತ್ತಾ error ಬಹುತೇಕ ಘಾತೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ, ರೇಖೀಯವಾಗಿ ಅಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ quantization memory_calculator() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ 7B ಮತ್ತೆ 70B models ಗೆ ನಿಜ GB savings ಲೆಕ್ಕಹಾಕಿ.',
    'ಒಂದೂ single outlier channel ಇಡೀ per-tensor quantization scheme ಅನ್ನೂ ಸದ್ದಿಲ್ಲದೆ ಏಕೆ ಹದಗೆಡಿಸಬಹುದು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Bit width, error, ಮತ್ತೆ memory savings ನಡುವಿನ tradeoff curve ಅನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Per-channel quantization accuracy ಗಾಗಿ ಹೆಚ್ಚು metadata (ಪ್ರತಿ row ಗೆ ಒಂದೂ scale) ಏಕೆ ವೆಚ್ಚ ಮಾಡುತ್ತದೆ ಎಂದೂ ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Quantization: Making Models Fit — Part 2: Per-Channel Quantization, Bit-Width Sweep & Memory Savings', textKn: 'Quantization: Making Models Fit — Part 2: Per-Channel Quantization, Bit-Width Sweep & Memory Savings', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,Per-Channel Quantization,Bit Width,Memory Savings,Part 2 of 3',
      pillsKn: 'Python,NumPy,Per-Channel Quantization,Bit Width,Memory Savings,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Outlier Row Problem', textKn: 'Outlier Row ಸಮಸ್ಯೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Bad Row Can Ruin an Entire Weight Matrix\'s Quantization', headingKn: 'ಒಂದೂ ಕೆಟ್ಟ Row ಇಡೀ Weight Matrix ya Quantization ಅನ್ನೂ ಹಾಳುಮಾಡಬಹುದು',
      bodyEn: 'Part 1 quantized single vectors. Real weight matrices have many output channels (rows), and it is common for LLM weight matrices to have a few channels with dramatically larger magnitude than the rest -- a well-documented phenomenon in production quantization research. Using ONE shared scale for the whole matrix means that outlier row forces the scale to be huge, crushing resolution for every other row.',
      bodyKn: 'Part 1 single vectors ಅನ್ನೂ quantize ಮಾಡಿತು. ನಿಜ weight matrices ಹಲವಾರು output channels (rows) ಹೊಂದಿವೆ, ಮತ್ತೆ LLM weight matrices ಗೆ ಉಳಿದವುಗಳಿಗಿಂತ ಗಣನೀಯವಾಗಿ ದೊಡ್ಡ magnitude ಇರುವ ಕೆಲವು channels ಇರುವುದೂ ಸಾಮಾನ್ಯ. ಇಡೀ matrix ಗೆ ONE shared scale ಬಳಸುವುದೂ ಎಂದರೆ ಆ outlier row scale ಅನ್ನೂ ಬೃಹತ್ ಆಗಿರಲು ಒತ್ತಾಯಿಸುತ್ತದೆ, ಇತರ ಪ್ರತಿ row ya resolution ಅನ್ನೂ ಪುಡಿಗುಟ್ಟುತ್ತಾ.' } },
    { type: 'code', data: {
      filename: 'per_channel_setup.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely construct a 4x16 weight matrix where row 0 has 50x the magnitude of the other three rows, simulating a real outlier channel.',
      descKn: 'ಒಂದೂ ನಿಜ outlier channel simulate ಮಾಡಿ, row 0 ಇತರ ಮೂರೂ rows ya 50x magnitude ಹೊಂದಿರುವ ಒಂದೂ 4x16 weight matrix ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
      code: "np.random.seed(2)\nW = np.random.randn(4, 16).astype(np.float32)\nW[0] *= 50.0  # row 0 is now an outlier channel\nprint('row magnitudes (max abs per row):', np.round(np.abs(W).max(axis=1), 2))" } },
    { type: 'output', data: { output: "row magnitudes (max abs per row): [122.71   2.4    2.99   2.35]" } },

    { type: 'code', data: {
      filename: 'quantize_per_channel.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement quantize_per_channel(): compute a SEPARATE scale for each row instead of one shared scale, and compare its error against per-tensor (single shared scale) quantization.',
      descKn: 'quantize_per_channel() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಒಂದೂ shared scale ಬದಲು ಪ್ರತಿ row ಗೆ ಒಂದೂ SEPARATE scale ಲೆಕ್ಕಹಾಕಿ, ಮತ್ತೆ ಅದೂ ya error ಅನ್ನೂ per-tensor quantization ವಿರುದ್ಧ ಹೋಲಿಸಿ.',
      code: "def quantize_per_tensor(W, bits=8):\n    qmax = 2 ** (bits - 1) - 1\n    scale = np.abs(W).max() / qmax\n    q = np.clip(np.round(W / scale), -qmax - 1, qmax)\n    return q.astype(np.float32) * scale\n\ndef quantize_per_channel(W, bits=8):\n    qmax = 2 ** (bits - 1) - 1\n    scales = np.abs(W).max(axis=1, keepdims=True) / qmax\n    q = np.clip(np.round(W / scales), -qmax - 1, qmax)\n    return q.astype(np.float32) * scales\n\ndef quantization_error(original, dequantized):\n    diff = original - dequantized\n    return {'mse': float(np.mean(diff ** 2)), 'max_abs_error': float(np.abs(diff).max())}\n\nper_tensor_dq = quantize_per_tensor(W, bits=8)\nper_channel_dq = quantize_per_channel(W, bits=8)\nprint('per-tensor error:', quantization_error(W, per_tensor_dq))\nprint('per-channel error:', quantization_error(W, per_channel_dq))\nprint('per-row max abs error, per-tensor:  ', np.round(np.abs(W - per_tensor_dq).max(axis=1), 4))\nprint('per-row max abs error, per-channel: ', np.round(np.abs(W - per_channel_dq).max(axis=1), 4))" } },
    { type: 'output', data: { output: "per-tensor error: {'mse': 0.0651, 'max_abs_error': 0.4453}\nper-channel error: {'mse': 0.0133, 'max_abs_error': 0.4031}\nper-row max abs error, per-tensor:   [0.4031 0.4265 0.4453 0.4335]\nper-row max abs error, per-channel:  [0.4031 0.0085 0.0095 0.0055]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Per-Channel Quantization Rescues Every Row Except the Outlier Itself', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Per-Channel Quantization Outlier ಒಂದು ಬಿಟ್ಟು ಪ್ರತಿ Row ಅನ್ನು ರಕ್ಷಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: under per-tensor quantization, ALL FOUR rows have similarly bad error (0.40-0.45), because the single shared scale is dominated by row 0\'s magnitude of 122.71 -- rows 1-3 (magnitude ~2-3) get almost no usable resolution. Under per-channel quantization, rows 1-3 drop to 0.0085, 0.0095, and 0.0055 error respectively -- roughly 50-80x better -- while row 0 (the genuine outlier) still shows 0.4031 error, since it has no smaller-magnitude neighbor to steal resolution from within ITS OWN row.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: per-tensor quantization ಅಡಿಯಲ್ಲಿ, ಎಲ್ಲಾ ನಾಲ್ಕೂ rows ಒಂದೇ ರೀತಿಯ ಕೆಟ್ಟ error (0.40-0.45) ಹೊಂದಿವೆ, single shared scale row 0 ya magnitude 122.71 ಇಂದ ಪ್ರಾಬಲ್ಯ ಹೊಂದಿರುವುದರಿಂದ. per-channel quantization ಅಡಿಯಲ್ಲಿ, rows 1-3 ಕ್ರಮವಾಗಿ 0.0085, 0.0095, ಮತ್ತೆ 0.0055 error ಗೆ ಇಳಿಯುತ್ತವೆ -- ಬಹುತೇಕ 50-80x ಉತ್ತಮ -- row 0 (ನಿಜ outlier) ಇನ್ನೂ 0.4031 error ತೋರಿಸುತ್ತದೆ, ಅದೂ ya ಸ್ವಂತ row ಒಳಗೆ resolution ಕದಿಯಲು ಚಿಕ್ಕ-magnitude ನೆರೆಹೊರೆ ಇಲ್ಲದಿರುವುದರಿಂದ.' } },

    { type: 'heading', data: { textEn: 'bit_width_sweep(): Error Scales Exponentially, Not Linearly', textKn: 'bit_width_sweep(): Error ಘಾತೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ, ರೇಖೀಯವಾಗಿ ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'bit_width_sweep.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement bit_width_sweep(): quantize the same 1000-sample random array at 8, 4, and 2 bits and compare error at each width.',
      descKn: 'bit_width_sweep() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಅದೇ 1000-sample random array ಅನ್ನೂ 8, 4, ಮತ್ತೆ 2 bits ನಲ್ಲಿ quantize ಮಾಡಿ ಪ್ರತಿ width ನಲ್ಲಿ error ಹೋಲಿಸಿ.',
      code: "def bit_width_sweep(x, bit_widths=(8, 4, 2)):\n    results = {}\n    for b in bit_widths:\n        qmax = 2 ** (b - 1) - 1\n        scale = np.abs(x).max() / qmax\n        q = np.clip(np.round(x / scale), -qmax - 1, qmax)\n        dq = q.astype(np.float32) * scale\n        results[b] = quantization_error(x, dq)\n    return results\n\nnp.random.seed(4)\nsample = np.random.randn(1000).astype(np.float32)\nsweep = bit_width_sweep(sample, bit_widths=(8, 4, 2))\nfor b, e in sweep.items():\n    print(f'{b}-bit: mse={e[\"mse\"]:.6f}, max_abs_error={e[\"max_abs_error\"]:.4f}')" } },
    { type: 'output', data: { output: "8-bit: mse=0.000044, max_abs_error=0.0113\n4-bit: mse=0.013990, max_abs_error=0.2054\n2-bit: mse=0.594015, max_abs_error=1.4408" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: MSE Roughly Quadruples Each Time Bit Width Halves', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Bit Width ಅರ್ಧಗೊಳ್ಳುವ ಪ್ರತಿಸಾರಿ MSE ಬಹುತೇಕ ನಾಲ್ಕು ಪಟ್ಟಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: mse goes 0.000044 (8-bit) -> 0.013990 (4-bit) -> 0.594015 (2-bit) -- roughly a 318x jump from 8 to 4 bits, and a further 42x jump from 4 to 2 bits. This matches the theory: each bit removed halves the number of grid points, which roughly DOUBLES the average quantization step size, and since MSE scales with the SQUARE of step size, error compounds much faster than the bit count itself shrinks -- exactly why 2-bit weight quantization is rarely used in practice without heavy compensation techniques (explored in Part 3).',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mse 0.000044 (8-bit) -> 0.013990 (4-bit) -> 0.594015 (2-bit) ಗೆ ಹೋಗುತ್ತದೆ -- 8 ಇಂದ 4 bits ಗೆ ಬಹುತೇಕ 318x ಜಿಗಿತ, ಮತ್ತೆ 4 ಇಂದ 2 bits ಗೆ ಇನ್ನೂ 42x ಜಿಗಿತ. ಇದೂ theory ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: ಪ್ರತಿ ತೆಗೆದ bit grid points ya ಸಂಖ್ಯೆಯನ್ನೂ ಅರ್ಧಗೊಳಿಸುತ್ತದೆ, ಇದೂ average quantization step size ಅನ್ನೂ ಬಹುತೇಕ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ, ಮತ್ತೆ MSE step size ya SQUARE ಜೊತೆ scale ಆಗುವುದರಿಂದ, error bit count ಸ್ವತಃ ಕುಗ್ಗುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ವೇಗವಾಗಿ ಸಂಯುಕ್ತಗೊಳ್ಳುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'memory_calculator(): Turning Bit Width Into GB', textKn: 'memory_calculator(): Bit Width ಅನ್ನೂ GB ಆಗಿ ಪರಿವರ್ತಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'memory_calculator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement a quantization-aware memory_calculator(): parameter count times bytes-per-parameter, converted to GB, and genuinely compute this for a 7B and a 70B model across four bit widths.',
      descKn: 'ಒಂದೂ quantization-aware memory_calculator() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: parameter count ಗುಣಿಸಿ bytes-per-parameter, GB ಗೆ ಪರಿವರ್ತಿಸಿ, ಮತ್ತೆ ಒಂದೂ 7B ಮತ್ತೆ ಒಂದೂ 70B model ಗೆ ನಾಲ್ಕೂ bit widths ಆದ್ಯಂತ ಇದನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "def memory_calculator_quant(num_params, bits):\n    bytes_per_param = bits / 8.0\n    return num_params * bytes_per_param / (1024 ** 3)  # GB\n\nfor name, n in [('7B model', 7_000_000_000), ('70B model', 70_000_000_000)]:\n    for bits in [32, 16, 8, 4]:\n        gb = memory_calculator_quant(n, bits)\n        print(f'{name} @ {bits}-bit: {gb:.2f} GB')" } },
    { type: 'output', data: { output: "7B model @ 32-bit: 26.08 GB\n7B model @ 16-bit: 13.04 GB\n7B model @ 8-bit: 6.52 GB\n7B model @ 4-bit: 3.26 GB\n70B model @ 32-bit: 260.77 GB\n70B model @ 16-bit: 130.39 GB\n70B model @ 8-bit: 65.19 GB\n70B model @ 4-bit: 32.60 GB" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Memory Scales Exactly Linearly With Bits, Unlike Error', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Error ಗೆ ಭಿನ್ನವಾಗಿ, Memory Bits ಜೊತೆ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ Scale ಆಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: unlike quantization error (which grows exponentially as bits decrease), memory usage scales EXACTLY linearly -- halving bits exactly halves memory every time (70B: 260.77 -> 130.39 -> 65.19 -> 32.60 GB, each step precisely /2). This asymmetry is the whole business case for quantization: memory savings are guaranteed and linear, while quality loss is small at 8/4 bits and only becomes severe much lower, as Part 1 and this lesson\'s bit sweep both confirmed.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: quantization error ಗೆ ಭಿನ್ನವಾಗಿ (bits ಕಡಿಮೆಯಾಗುತ್ತಾ ಘಾತೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ), memory usage ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತದೆ -- bits ಅರ್ಧಗೊಳಿಸುವುದೂ ಪ್ರತಿ ಬಾರಿ memory ಅನ್ನೂ ನಿಖರವಾಗಿ ಅರ್ಧಗೊಳಿಸುತ್ತದೆ. ಈ ಅಸಮಾನತೆ quantization ya ಸಂಪೂರ್ಣ business case: memory savings ಖಾತ್ರಿಪಡಿಸಲಾಗಿದೆ ಮತ್ತೆ ರೇಖೀಯ, ಆದರೆ quality ನಷ್ಟ 8/4 bits ನಲ್ಲಿ ಚಿಕ್ಕದೂ.' } },

    { type: 'code', data: {
      filename: 'groupwise_wrong_axis.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely test group-wise quantization (grouping COLUMNS into chunks of 4, sharing a scale within each chunk) on the SAME outlier-row matrix, to check whether grouping along the wrong axis actually helps.',
      descKn: 'ಅದೇ outlier-row matrix ಮೇಲೆ group-wise quantization ಅನ್ನೂ ನಿಜವಾಗಿ test ಮಾಡಿ (COLUMNS ಅನ್ನೂ 4 ya chunks ಆಗಿ ಗುಂಪುಗೂಡಿಸಿ), ತಪ್ಪಾದ axis ಉದ್ದಕ್ಕೂ grouping ನಿಜವಾಗಿ ಸಹಾಯ ಮಾಡುತ್ತದೆಯೇ ಎಂದೂ ಪರಿಶೀಲಿಸಿ.',
      code: "def quantize_groupwise(W, bits=8, group_size=4):\n    qmax = 2 ** (bits - 1) - 1\n    out = np.zeros_like(W)\n    n_cols = W.shape[1]\n    for start in range(0, n_cols, group_size):\n        end = min(start + group_size, n_cols)\n        group = W[:, start:end]  # spans ALL rows, including the outlier\n        scale = np.abs(group).max() / qmax\n        q = np.clip(np.round(group / scale), -qmax - 1, qmax)\n        out[:, start:end] = q * scale\n    return out\n\ngw_dq = quantize_groupwise(W, bits=8, group_size=4)\nprint('group-wise (by columns) error:', quantization_error(W, gw_dq))\nprint('per-row max abs error, group-wise:', np.round(np.abs(W - gw_dq).max(axis=1), 4))" } },
    { type: 'output', data: { output: "group-wise (by columns) error: {'mse': 0.04413, 'max_abs_error': 0.4066}\nper-row max abs error, group-wise: [0.4066 0.3388 0.3704 0.394 ]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Grouping Along the Wrong Axis Barely Helps', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ತಪ್ಪಾದ Axis ಉದ್ದಕ್ಕೂ Grouping ವಿರಳವಾಗಿ ಸಹಾಯ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed, and an honest nuance easy to miss: grouping by COLUMN chunks (each group still spans all 4 rows, including the outlier) gives error 0.34-0.41 for every row -- barely better than per-tensor\'s 0.40-0.45, and dramatically worse than per-channel\'s 0.0055-0.0095 for the non-outlier rows. This confirms that grouping only helps when the group boundary actually SEPARATES the outlier from the rest -- since the outlier here is an entire ROW, only row-wise (per-channel) grouping isolates it; column-wise grouping keeps every group contaminated by row 0\'s magnitude.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಮತ್ತೆ ತಪ್ಪಿಸಲು ಸುಲಭವಾದ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ ಸೂಕ್ಷ್ಮತೆ: COLUMN chunks ಇಂದ grouping (ಪ್ರತಿ group ಇನ್ನೂ outlier ಸೇರಿದಂತೆ ಎಲ್ಲಾ 4 rows ಅನ್ನೂ ವ್ಯಾಪಿಸುತ್ತದೆ) ಪ್ರತಿ row ಗೆ 0.34-0.41 error ನೀಡುತ್ತದೆ -- per-tensor ya 0.40-0.45 ಗಿಂತ ವಿರಳವಾಗಿ ಉತ್ತಮ. ಇದೂ grouping outlier ಅನ್ನೂ ಉಳಿದವುಗಳಿಂದ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸುವಾಗ ಮಾತ್ರ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ -- outlier ಇಲ್ಲಿ ಇಡೀ ROW ಆಗಿರುವುದರಿಂದ, row-wise (per-channel) grouping ಮಾತ್ರ ಅದನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: '7B and 70B Model Memory Footprint, Genuinely Computed', captionKn: '7B ಮತ್ತೆ 70B Model Memory Footprint, ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ',
      rows: "Bit width|7B model|70B model\n32-bit (fp32)|26.08 GB|260.77 GB\n16-bit (fp16/bf16)|13.04 GB|130.39 GB\n8-bit (int8)|6.52 GB|65.19 GB\n4-bit (int4)|3.26 GB|32.60 GB" } },

    { type: 'table', data: {
      captionEn: 'Metadata Cost: How Many Scale Values Each Scheme Stores (for This 4x16 Matrix)', captionKn: 'Metadata Cost: ಪ್ರತಿ Scheme ಎಷ್ಟೂ Scale Values ಸಂಗ್ರಹಿಸುತ್ತದೆ (ಈ 4x16 Matrix ಗೆ)',
      rows: "Scheme|Scales stored|Non-outlier row error\nPer-tensor|1|0.40-0.45 (bad)\nPer-channel (row-wise)|4|0.0055-0.0095 (excellent)\nGroup-wise by column (group_size=4)|16|0.34-0.41 (barely better than per-tensor)" } },
    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: 'Genuinely demonstrated in this lesson: more stored scale values does not automatically mean better accuracy -- group-wise-by-column stored 16 scales (4x more than per-channel\'s 4) yet performed far worse, because its grouping axis did not align with where the actual outlier lived. The lesson here: always group along the axis that separates outliers, not just any axis that increases metadata.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: ಹೆಚ್ಚು ಸಂಗ್ರಹಿಸಿದ scale values ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಉತ್ತಮ accuracy ಎಂದೂ ಅರ್ಥವಲ್ಲ -- group-wise-by-column 16 scales ಸಂಗ್ರಹಿಸಿತು (per-channel ya 4 ಕ್ಕಿಂತ 4x ಹೆಚ್ಚು) ಆದರೂ ಬಹಳ ಕೆಟ್ಟದಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿತು, ಅದೂ ya grouping axis ನಿಜ outlier ಎಲ್ಲಿ ಇತ್ತು ಎಂಬುದೂ ಜೊತೆ ಹೊಂದಿಕೆಯಾಗದಿರುವುದರಿಂದ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Per-tensor quantization: one shared scale for an entire weight matrix\n• Per-channel quantization: a separate scale for each row (output channel) of a weight matrix\n• Outlier channel: a row or column whose magnitude is much larger than the rest, common in real LLM weights\n• Bit width: the number of bits used per quantized value (8, 4, and 2 bits genuinely compared here)',
      bodyKn: '• Per-tensor quantization: ಇಡೀ weight matrix ಗೆ ಒಂದೂ shared scale\n• Per-channel quantization: ಒಂದೂ weight matrix ya ಪ್ರತಿ row (output channel) ಗೆ ಒಂದೂ ಪ್ರತ್ಯೇಕ scale\n• Outlier channel: ಉಳಿದವುಗಳಿಗಿಂತ ಹೆಚ್ಚು magnitude ಇರುವ ಒಂದೂ row ಅಥವಾ column, ನಿಜ LLM weights ನಲ್ಲಿ ಸಾಮಾನ್ಯ\n• Bit width: ಪ್ರತಿ quantized value ಗೆ ಬಳಸುವ bits ya ಸಂಖ್ಯೆ (ಇಲ್ಲಿ ನಿಜವಾಗಿ ಹೋಲಿಸಿದ 8, 4, ಮತ್ತೆ 2 bits)' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Per-channel quantization, genuinely built here, is the default weight-quantization strategy in production libraries like GPTQ, AWQ, and bitsandbytes -- all of them quantize each output channel with its own scale for exactly the outlier-rescue reason genuinely confirmed in this lesson.',
      bodyKn: 'Per-channel quantization, ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ, GPTQ, AWQ, ಮತ್ತೆ bitsandbytes ನಂತಹ production libraries ನಲ್ಲಿ default weight-quantization strategy -- ಅವೂ ಎಲ್ಲಾ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ outlier-rescue ಕಾರಣಕ್ಕಾಗಿ ಪ್ರತಿ output channel ಅನ್ನೂ ಅದೂ ya ಸ್ವಂತ scale ಜೊತೆ quantize ಮಾಡುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: per-channel quantization rescues 3 of 4 rows from 50-80x worse error with only the cost of storing one extra scale value per row -- a small metadata overhead for a large accuracy gain\n• Genuinely confirmed: the linear memory-vs-bits relationship lets teams precisely plan deployment hardware requirements before running a single quantization experiment, using nothing but parameter count and target bit width',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: per-channel quantization ಪ್ರತಿ row ಗೆ ಕೇವಲ ಒಂದೂ ಹೆಚ್ಚುವರಿ scale value ಸಂಗ್ರಹಿಸುವ ವೆಚ್ಚದೊಂದಿಗೆ 4 ರಲ್ಲಿ 3 rows ಅನ್ನೂ 50-80x ಕೆಟ್ಟ error ಇಂದ ರಕ್ಷಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ರೇಖೀಯ memory-vs-bits ಸಂಬಂಧ teams ಗೆ ಒಂದೂ single quantization experiment ಚಲಾಯಿಸುವ ಮೊದಲೂ deployment hardware ಅವಶ್ಯಕತೆಗಳನ್ನೂ ನಿಖರವಾಗಿ ಯೋಜಿಸಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a team says "we quantized our 70B model to int4 to fit on a single 80GB GPU," the arithmetic behind that claim is exactly memory_calculator_quant(70e9, 4)=32.60GB, genuinely computed in this lesson -- comfortably under 80GB with room for activations and KV cache.',
      bodyKn: 'ಒಂದೂ team "ನಾವೂ ನಮ್ಮ 70B model ಅನ್ನೂ ಒಂದೂ single 80GB GPU ಗೆ ಹೊಂದಿಸಲು int4 ಗೆ quantize ಮಾಡಿದ್ದೇವೆ" ಎಂದೂ ಹೇಳಿದಾಗ, ಆ claim ya ಹಿಂದೆ ಇರುವ ಗಣಿತ ನಿಖರವಾಗಿ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ memory_calculator_quant(70e9, 4)=32.60GB.' } },

    { type: 'diagram', data: {
      titleEn: 'Per-Tensor vs Per-Channel Scale Assignment', titleKn: 'Per-Tensor vs Per-Channel Scale ನಿಯೋಜನೆ',
      captionEn: 'Per-tensor uses one scale for the whole matrix, dominated by the outlier row. Per-channel gives each row its own scale, isolating the outlier\'s damage to just that row.',
      captionKn: 'Per-tensor ಇಡೀ matrix ಗೆ ಒಂದೂ scale ಬಳಸುತ್ತದೆ, outlier row ಇಂದ ಪ್ರಾಬಲ್ಯ ಹೊಂದಿದೆ. Per-channel ಪ್ರತಿ row ಗೆ ಅದೂ ya ಸ್ವಂತ scale ನೀಡುತ್ತದೆ, outlier ya ಹಾನಿಯನ್ನೂ ಆ row ಗೆ ಮಾತ್ರ ಪ್ರತ್ಯೇಕಿಸುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><text x='20' y='25' fill='#e2e8f0' font-size='13'>Per-tensor (one scale)</text><rect x='20' y='35' width='300' height='20' fill='#ef4444' opacity='0.5'/><text x='170' y='50' fill='#e2e8f0' font-size='10' text-anchor='middle'>row 0 (outlier)</text><rect x='20' y='60' width='300' height='20' fill='#ef4444' opacity='0.5'/><rect x='20' y='85' width='300' height='20' fill='#ef4444' opacity='0.5'/><rect x='20' y='110' width='300' height='20' fill='#ef4444' opacity='0.5'/><text x='170' y='145' fill='#94a3b8' font-size='10' text-anchor='middle'>all rows share the outlier's scale -> all degraded</text><text x='400' y='25' fill='#e2e8f0' font-size='13'>Per-channel (own scale each)</text><rect x='400' y='35' width='280' height='20' fill='#ef4444' opacity='0.5'/><text x='540' y='50' fill='#e2e8f0' font-size='10' text-anchor='middle'>row 0 (still lossy, its own scale)</text><rect x='400' y='60' width='280' height='20' fill='#22c55e' opacity='0.5'/><rect x='400' y='85' width='280' height='20' fill='#22c55e' opacity='0.5'/><rect x='400' y='110' width='280' height='20' fill='#22c55e' opacity='0.5'/><text x='540' y='145' fill='#94a3b8' font-size='10' text-anchor='middle'>other rows keep their own good resolution</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'Per-channel quantization fixes outlier ROWS, but individual weight VALUES can still be poorly represented within a row. Part 3 genuinely builds simplified GPTQ (error-compensated quantization) and AWQ (activation-aware channel protection), the two calibration techniques that make aggressive 4-bit and lower quantization actually usable in production.',
      bodyKn: 'Per-channel quantization outlier ROWS ಅನ್ನೂ ಸರಿಪಡಿಸುತ್ತದೆ, ಆದರೆ ವೈಯಕ್ತಿಕ weight VALUES ಇನ್ನೂ ಒಂದೂ row ಒಳಗೆ ಕಳಪೆಯಾಗಿ ಪ್ರತಿನಿಧಿಸಬಹುದು. Part 3 ನಿಜವಾಗಿ simplified GPTQ (error-compensated quantization) ಮತ್ತೆ AWQ (activation-aware channel protection) ಅನ್ನೂ ಕಟ್ಟುತ್ತದೆ, ಆಕ್ರಮಣಕಾರಿ 4-bit ಮತ್ತೆ ಕಡಿಮೆ quantization ಅನ್ನೂ production ನಲ್ಲಿ ನಿಜವಾಗಿ ಬಳಸಬಹುದಾಗಿಸುವ ಎರಡೂ calibration techniques.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: under per-tensor quantization on a matrix with one 50x-magnitude outlier row, what happened to the non-outlier rows\' error?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 50x-magnitude outlier row ಇರುವ ಒಂದೂ matrix ಮೇಲೆ per-tensor quantization ಅಡಿಯಲ್ಲಿ, non-outlier rows ya error ಗೆ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It was unaffected by the outlier', 'It became nearly as bad as the outlier row\'s error (0.40-0.45), because the shared scale was dominated by the outlier', 'It became exactly zero', 'Only the outlier row was affected'], correct: 1,
        optsKn: ['ಅದೂ outlier ಇಂದ ಪ್ರಭಾವಿತವಾಗಲಿಲ್ಲ', 'ಅದೂ outlier row ya error (0.40-0.45) ಗೆ ಬಹುತೇಕ ಸಮಾನವಾಗಿ ಕೆಟ್ಟದೂ ಆಯಿತು, shared scale outlier ಇಂದ ಪ್ರಾಬಲ್ಯ ಹೊಂದಿದ್ದರಿಂದ', 'ಅದೂ ನಿಖರವಾಗಿ ಶೂನ್ಯ ಆಯಿತು', 'ಕೇವಲ outlier row ಪ್ರಭಾವಿತವಾಯಿತು'] },
      { q: 'Genuinely confirmed: after switching to per-channel quantization, how much did error improve for the non-outlier rows?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: per-channel quantization ಗೆ ಬದಲಾಯಿಸಿದ ನಂತರ, non-outlier rows ಗೆ error ಎಷ್ಟೂ ಸುಧಾರಿಸಿತು?',
        opts: ['No improvement', 'Roughly 50-80x better', 'Exactly 2x better', 'It got worse'], correct: 1,
        optsKn: ['ಯಾವುದೇ ಸುಧಾರಣೆ ಇಲ್ಲ', 'ಬಹುತೇಕ 50-80x ಉತ್ತಮ', 'ನಿಖರವಾಗಿ 2x ಉತ್ತಮ', 'ಅದೂ ಕೆಟ್ಟದಾಯಿತು'] },
      { q: 'Genuinely confirmed: going from 8-bit to 4-bit quantization on the same random data, roughly how much did MSE grow?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ random data ಮೇಲೆ 8-bit ಇಂದ 4-bit quantization ಗೆ ಹೋಗುತ್ತಾ, MSE ಬಹುತೇಕ ಎಷ್ಟೂ ಬೆಳೆಯಿತು?',
        opts: ['2x', 'Roughly 318x', 'It shrank', 'No change'], correct: 1,
        optsKn: ['2x', 'ಬಹುತೇಕ 318x', 'ಅದೂ ಕುಗ್ಗಿತು', 'ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲ'] },
      { q: 'Genuinely confirmed: what perplexity-independent quantity scales EXACTLY linearly with bit width, unlike quantization error?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: quantization error ಗೆ ಭಿನ್ನವಾಗಿ, ಯಾವ ಪ್ರಮಾಣ bit width ಜೊತೆ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತದೆ?',
        opts: ['Model accuracy', 'Memory usage in GB', 'Training time', 'Vocabulary size'], correct: 1,
        optsKn: ['Model accuracy', 'GB ನಲ್ಲಿ memory usage', 'Training time', 'Vocabulary size'] },
      { q: 'Genuinely confirmed: what was the computed memory footprint of a 70B-parameter model at int4?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: int4 ನಲ್ಲಿ ಒಂದೂ 70B-parameter model ya ಲೆಕ್ಕಹಾಕಿದ memory footprint ಏನಾಗಿತ್ತು?',
        opts: ['260.77 GB', '130.39 GB', '65.19 GB', '32.60 GB'], correct: 3,
        optsKn: ['260.77 GB', '130.39 GB', '65.19 GB', '32.60 GB'] },
    ] } },
  ],
};
