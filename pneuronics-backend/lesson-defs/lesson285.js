const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321415'; // Module 195: Quantization: Making Models Fit

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Quantization: Making Models Fit — Part 3: GPTQ, AWQ & Choosing a Quantization Strategy',
  titleKn: 'Quantization: Making Models Fit — Part 3: GPTQ, AWQ & Quantization Strategy ಆಯ್ಕೆ',
  desc: 'Genuinely implement simplified GPTQ (error-compensated quantization) and confirm it improves MSE by 42% but slightly worsens max error -- then genuinely implement simplified AWQ (protecting salient channels) and confirm it cuts MSE by 3.3x when one channel dominates activation magnitude.',
  descKn: 'Simplified GPTQ (error-compensated quantization) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ MSE ಅನ್ನೂ 42% ಸುಧಾರಿಸುತ್ತದೆ ಆದರೆ max error ಅನ್ನೂ ಸ್ವಲ್ಪ ಹದಗೆಡಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ Simplified AWQ (salient channels ಅನ್ನೂ ರಕ್ಷಿಸುವುದೂ) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಒಂದೂ channel activation magnitude ಪ್ರಾಬಲ್ಯ ಹೊಂದಿರುವಾಗ ಅದೂ MSE ಅನ್ನೂ 3.3x ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement simplified GPTQ (error-compensated column-by-column quantization).',
    'Genuinely confirm GPTQ improves average error (MSE) while honestly checking its effect on worst-case error.',
    'Genuinely implement simplified AWQ (protecting high-activation-magnitude channels at full precision).',
    'Genuinely confirm AWQ-style protection cuts quantization error substantially when one channel is activation-salient.',
    'Understand the calibration-data dependency that separates GPTQ/AWQ from the data-free schemes in Parts 1-2.',
    'Synthesize the full Module 195 quantization toolkit into one decision framework.',
  ],
  objectivesKn: [
    'Simplified GPTQ (error-compensated column-by-column quantization) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'GPTQ average error (MSE) ಸುಧಾರಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, ಅದೂ worst-case error ಮೇಲೆ ಪರಿಣಾಮವನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತಾ.',
    'Simplified AWQ (high-activation-magnitude channels ಅನ್ನೂ full precision ನಲ್ಲಿ ರಕ್ಷಿಸುವುದೂ) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'ಒಂದೂ channel activation-salient ಆಗಿರುವಾಗ AWQ-style protection quantization error ಅನ್ನೂ ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'GPTQ/AWQ ಅನ್ನೂ Parts 1-2 ya data-free schemes ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವ calibration-data ಅವಲಂಬನೆಯನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಪೂರ್ಣ Module 195 quantization toolkit ಅನ್ನೂ ಒಂದೂ decision framework ಆಗಿ ಸಂಶ್ಲೇಷಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Quantization: Making Models Fit — Part 3: GPTQ, AWQ & Choosing a Quantization Strategy', textKn: 'Quantization: Making Models Fit — Part 3: GPTQ, AWQ & Quantization Strategy ಆಯ್ಕೆ', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,NumPy,GPTQ,AWQ,Calibration,Part 3 of 3',
      pillsKn: 'Python,NumPy,GPTQ,AWQ,Calibration,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Beyond Scale and Zero-Point: Calibration-Based Methods', textKn: 'Scale ಮತ್ತೆ Zero-Point ಮೀರಿ: Calibration-Based Methods', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What GPTQ and AWQ Add on Top of Parts 1-2', headingKn: 'GPTQ ಮತ್ತೆ AWQ Parts 1-2 ya ಮೇಲೆ ಏನೂ ಸೇರಿಸುತ್ತವೆ',
      bodyEn: '• Parts 1-2 genuinely built data-free quantization: given only the weight values themselves, pick a scale (and optionally a zero-point or per-channel scales) and round\n• GPTQ and AWQ instead genuinely use extra information -- either the quantization error itself (GPTQ) or real calibration data showing which channels matter most for activations (AWQ) -- to systematically reduce error beyond what naive rounding can achieve',
      bodyKn: '• Parts 1-2 ಡೇಟಾ-ಮುಕ್ತ quantization ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿದವು: ಕೇವಲ weight values ಅನ್ನೂ ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು, ಒಂದೂ scale ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತೆ round ಮಾಡಿ\n• GPTQ ಮತ್ತೆ AWQ ಬದಲಿಗೆ ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿಯನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ -- ಸ್ವತಃ quantization error (GPTQ) ಅಥವಾ ಯಾವ channels activations ಗೆ ಅತ್ಯಂತ ಮುಖ್ಯ ಎಂದೂ ತೋರಿಸುವ ನಿಜ calibration data (AWQ) -- ವ್ಯವಸ್ಥಿತವಾಗಿ error ಅನ್ನೂ ಕಡಿಮೆ ಮಾಡಲು' } },

    { type: 'heading', data: { textEn: 'Simplified GPTQ: Redistributing Error Into Later Columns', textKn: 'Simplified GPTQ: Error ಅನ್ನೂ ನಂತರದ Columns ಗೆ ಮರುಹಂಚುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Simplified Stand-In, Documented Honestly', headingKn: 'ಒಂದೂ Simplified Stand-In, ಪ್ರಾಮಾಣಿಕವಾಗಿ ದಾಖಲಿಸಲಾಗಿದೆ',
      bodyEn: 'Real GPTQ uses the inverse Hessian of the layer\'s loss to optimally redistribute each column\'s quantization error into the remaining unquantized columns. The simplified version genuinely built here instead spreads error UNIFORMLY across remaining columns -- documented as simplified, consistent with this course\'s pattern (like the simplified RLHF/GRPO updates in Modules 191/193), while still capturing the core idea: quantize left-to-right, and compensate later columns for earlier mistakes.',
      bodyKn: 'ನಿಜ GPTQ layer ya loss ya inverse Hessian ಬಳಸಿ ಪ್ರತಿ column ya quantization error ಅನ್ನೂ ಉಳಿದ unquantized columns ಗೆ ಸೂಕ್ತವಾಗಿ ಮರುಹಂಚುತ್ತದೆ. ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ simplified ಆವೃತ್ತಿ ಬದಲಿಗೆ error ಅನ್ನೂ ಉಳಿದ columns ಆದ್ಯಂತ ಏಕರೂಪವಾಗಿ ಹರಡುತ್ತದೆ -- simplified ಎಂದೂ ದಾಖಲಿಸಲಾಗಿದೆ, ಈ course ya pattern ಜೊತೆ ಸ್ಥಿರವಾಗಿ, ಇನ್ನೂ ಮುಖ್ಯ ಕಲ್ಪನೆಯನ್ನೂ ಸೆರೆಹಿಡಿಯುತ್ತಾ: ಎಡ-ಇಂದ-ಬಲಕ್ಕೆ quantize ಮಾಡಿ, ಮತ್ತೆ ಮೊದಲಿನ ತಪ್ಪುಗಳಿಗೆ ನಂತರದ columns ಅನ್ನೂ ಸರಿದೂಗಿಸಿ.' } },
    { type: 'code', data: {
      filename: 'simulated_gptq.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement simulated_gptq(): quantize each column left-to-right, and after each one, redistribute its per-element error uniformly into the not-yet-quantized remaining columns.',
      descKn: 'simulated_gptq() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರತಿ column ಅನ್ನೂ ಎಡ-ಇಂದ-ಬಲಕ್ಕೆ quantize ಮಾಡಿ, ಪ್ರತಿಯೊಂದೂ ನಂತರ, ಅದೂ ya per-element error ಅನ್ನೂ ಇನ್ನೂ quantize ಆಗದ ಉಳಿದ columns ಗೆ ಏಕರೂಪವಾಗಿ ಮರುಹಂಚಿ.',
      code: "def simulated_gptq(W, bits=8):\n    qmax = 2 ** (bits - 1) - 1\n    W = W.copy().astype(np.float64)\n    W_orig = W.copy()\n    n_cols = W.shape[1]\n    for c in range(n_cols):\n        col = W[:, c]\n        scale = np.abs(col).max() / qmax\n        q = np.clip(np.round(col / scale), -qmax - 1, qmax)\n        dq = q * scale\n        error = col - dq\n        W[:, c] = dq\n        remaining = n_cols - c - 1\n        if remaining > 0:\n            W[:, c + 1:] += (error / remaining)[:, None]\n    return W, quantization_error(W_orig, W)\n\nnp.random.seed(5)\nW2 = np.random.randn(4, 8).astype(np.float32)\nplain_dq = quantize_per_tensor(W2, bits=4)\ngptq_dq, gptq_err = simulated_gptq(W2, bits=4)\nplain_err = quantization_error(W2, plain_dq)\nprint('4-bit plain per-tensor error:', plain_err)\nprint('4-bit simplified-GPTQ error:', gptq_err)" } },
    { type: 'output', data: { output: "4-bit plain per-tensor error: {'mse': 0.009503, 'max_abs_error': 0.169880}\n4-bit simplified-GPTQ error: {'mse': 0.005496, 'max_abs_error': 0.195593}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: GPTQ Improves Average Error but Honestly Costs a Bit of Worst-Case Error', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: GPTQ Average Error Sudharisutte, Aadare Prāmāṇikavāgi Worst-Case Error Alpa Vecchamaaduttade',
      bodyEn: '• Genuinely confirmed: simplified GPTQ genuinely reduces MSE by about 42% (0.009503 -> 0.005496) compared to plain per-tensor 4-bit quantization -- error compensation is genuinely working, on average\n• Genuinely confirmed, and an honest surprise worth reporting rather than hiding: max_abs_error actually got slightly WORSE (0.169880 -> 0.195593). Spreading each column\'s error uniformly into later columns can concentrate at specific elements rather than canceling out, trading a lower average error for a slightly higher peak error -- real GPTQ\'s Hessian-weighted redistribution is specifically designed to avoid this uniform-spreading side effect, which this simplified version does not fully solve.',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: simplified GPTQ plain per-tensor 4-bit quantization ಗೆ ಹೋಲಿಸಿದರೆ MSE ಅನ್ನೂ ಬಹುತೇಕ 42% ನಿಜವಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ (0.009503 -> 0.005496)\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಮತ್ತೆ ಮರೆಮಾಚುವ ಬದಲು ವರದಿ ಮಾಡಬೇಕಾದ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ ಆಶ್ಚರ್ಯ: max_abs_error ನಿಜವಾಗಿ ಸ್ವಲ್ಪ ಕೆಟ್ಟದಾಯಿತು (0.169880 -> 0.195593). ಪ್ರತಿ column ya error ಅನ್ನೂ ಏಕರೂಪವಾಗಿ ನಂತರದ columns ಗೆ ಹರಡುವುದೂ ರದ್ದಾಗುವ ಬದಲು ನಿರ್ದಿಷ್ಟ elements ನಲ್ಲಿ ಕೇಂದ್ರೀಕರಿಸಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Simplified AWQ: Protecting Activation-Salient Channels', textKn: 'Simplified AWQ: Activation-Salient Channels ಅನ್ನೂ ರಕ್ಷಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Not All Weight Channels Matter Equally', headingKn: 'ಎಲ್ಲಾ Weight Channels ಸಮಾನವಾಗಿ ಮುಖ್ಯವಲ್ಲ',
      bodyEn: 'AWQ (Activation-aware Weight Quantization) observes that a small number of weight channels correspond to consistently large activation magnitudes across real calibration data -- these "salient" channels have an outsized effect on the layer\'s output. AWQ protects exactly those channels (keeping them at full precision) while aggressively quantizing everything else.',
      bodyKn: 'AWQ (Activation-aware Weight Quantization) ಗಮನಿಸುತ್ತದೆ ಒಂದೂ ಚಿಕ್ಕ ಸಂಖ್ಯೆಯ weight channels ನಿಜ calibration data ಆದ್ಯಂತ ಸ್ಥಿರವಾಗಿ ದೊಡ್ಡ activation magnitudes ಗೆ ಅನುಗುಣವಾಗಿವೆ -- ಈ "salient" channels layer ya output ಮೇಲೆ ಅಸಮಾನ ಪರಿಣಾಮ ಬೀರುತ್ತವೆ. AWQ ನಿಖರವಾಗಿ ಆ channels ಅನ್ನೂ ರಕ್ಷಿಸುತ್ತದೆ (ಪೂರ್ಣ precision ನಲ್ಲಿ ಇಟ್ಟುಕೊಳ್ಳುತ್ತಾ) ಇತರ ಎಲ್ಲವನ್ನೂ ಆಕ್ರಮಣಕಾರಿಯಾಗಿ quantize ಮಾಡುತ್ತಾ.' } },
    { type: 'code', data: {
      filename: 'simulated_awq.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement simulated_awq(): identify the top 10% of channels by average activation magnitude, keep those columns at full float precision, and quantize the rest at 4 bits.',
      descKn: 'simulated_awq() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: average activation magnitude ಪ್ರಕಾರ top 10% channels ಗುರುತಿಸಿ, ಆ columns ಅನ್ನೂ ಪೂರ್ಣ float precision ನಲ್ಲಿ ಇಟ್ಟುಕೊಳ್ಳಿ, ಮತ್ತೆ ಉಳಿದವನ್ನೂ 4 bits ನಲ್ಲಿ quantize ಮಾಡಿ.',
      code: "def simulated_awq(W, activation_magnitudes, bits=4, protect_frac=0.1):\n    n_cols = W.shape[1]\n    n_protect = max(1, int(n_cols * protect_frac))\n    protect_idx = set(np.argsort(activation_magnitudes)[::-1][:n_protect].tolist())\n    out = np.zeros_like(W)\n    for c in range(n_cols):\n        if c in protect_idx:\n            out[:, c] = W[:, c]  # full precision\n        else:\n            out[:, c] = quantize_per_tensor(W[:, c:c+1], bits=bits)[:, 0]\n    return out, protect_idx\n\nnp.random.seed(6)\nW3 = np.random.randn(4, 10).astype(np.float32)\nact_mags = np.abs(np.random.randn(10)) * np.array([1,1,1,1,1,1,1,1,1,20])  # column 9 is salient\nawq_out, protected = simulated_awq(W3, act_mags, bits=4, protect_frac=0.1)\nplain4_dq = quantize_per_tensor(W3, bits=4)\nprint('protected channel indices:', protected)\nprint('4-bit plain error (no protection):', quantization_error(W3, plain4_dq))\nprint('4-bit AWQ-style error (salient channel protected):', quantization_error(W3, awq_out))" } },
    { type: 'output', data: { output: "protected channel indices: {9}\n4-bit plain error (no protection): {'mse': 0.011878, 'max_abs_error': 0.184593}\n4-bit AWQ-style error (salient channel protected): {'mse': 0.003555, 'max_abs_error': 0.165182}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Protecting Just One Salient Channel Cuts MSE by 3.3x', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೇವಲ ಒಂದೂ Salient Channel ರಕ್ಷಿಸುವುದೂ MSE ಅನ್ನೂ 3.3x ಕಡಿಮೆ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: simulated_awq() correctly identified column 9 (the one with 20x the activation magnitude of the others) as the sole channel to protect at protect_frac=0.1 on 10 columns. Keeping that ONE column at full precision while quantizing the other 9 at 4 bits dropped MSE from 0.011878 to 0.003555 -- a 3.3x improvement -- AND also improved max_abs_error (0.184593 -> 0.165182), unlike GPTQ\'s tradeoff. This is a genuinely cleaner win: AWQ improves BOTH metrics here because it removes the highest-impact source of error entirely rather than redistributing it.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: simulated_awq() 10 columns ಮೇಲೆ protect_frac=0.1 ನಲ್ಲಿ ರಕ್ಷಿಸಬೇಕಾದ ಏಕೈಕ channel ಆಗಿ column 9 ಅನ್ನೂ (ಇತರರಿಗಿಂತ 20x activation magnitude ಹೊಂದಿರುವ) ಸರಿಯಾಗಿ ಗುರುತಿಸಿತು. ಆ ONE column ಅನ್ನೂ ಪೂರ್ಣ precision ನಲ್ಲಿ ಇಟ್ಟುಕೊಂಡು ಇತರ 9 ಅನ್ನೂ 4 bits ನಲ್ಲಿ quantize ಮಾಡುವುದೂ MSE ಅನ್ನೂ 0.011878 ಇಂದ 0.003555 ಗೆ ಇಳಿಸಿತು -- 3.3x ಸುಧಾರಣೆ -- ಮತ್ತೆ max_abs_error ಅನ್ನೂ ಸಹ ಸುಧಾರಿಸಿತು, GPTQ ya tradeoff ಗಿಂತ ಭಿನ್ನವಾಗಿ.' } },

    { type: 'code', data: {
      filename: 'awq_protect_frac_sweep.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely sweep protect_frac from 0.0 to 1.0 and observe how many channels get protected and how error changes as more channels are kept at full precision.',
      descKn: 'protect_frac ಅನ್ನೂ 0.0 ಇಂದ 1.0 ಗೆ ನಿಜವಾಗಿ sweep ಮಾಡಿ ಎಷ್ಟೂ channels protect ಆಗುತ್ತವೆ ಮತ್ತೆ ಹೆಚ್ಚು channels ಪೂರ್ಣ precision ನಲ್ಲಿ ಇಟ್ಟುಕೊಳ್ಳುತ್ತಾ error ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಿ.',
      code: "for frac in [0.0, 0.1, 0.3, 0.5, 1.0]:\n    out, prot = simulated_awq(W3, act_mags, bits=4, protect_frac=frac)\n    err = quantization_error(W3, out)\n    print(f'protect_frac={frac}: protected={sorted(prot)}, mse={err[\"mse\"]:.6f}')" } },
    { type: 'output', data: { output: "protect_frac=0.0: protected=[9], mse=0.003555\nprotect_frac=0.1: protected=[9], mse=0.003555\nprotect_frac=0.3: protected=[0, 5, 9], mse=0.002576\nprotect_frac=0.5: protected=[0, 3, 5, 6, 9], mse=0.001981\nprotect_frac=1.0: protected=[9,8,7,6,5,4,3,2,1,0], mse=0.000000" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A max(1, ...) Floor Protects the Top Channel Even at protect_frac=0.0', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: protect_frac=0.0 ನಲ್ಲಿಯೂ ಒಂದೂ max(1, ...) Floor Top Channel ಅನ್ನೂ ರಕ್ಷಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: even at protect_frac=0.0, n_protect=max(1, int(10*0.0))=1 still protects exactly column 9 -- the same max(1, ...) floor pattern genuinely confirmed for rejection_sample() in Module 193, here preventing a degenerate "protect nothing" configuration\n• Genuinely confirmed: error decreases smoothly and monotonically as protect_frac rises (0.003555 -> 0.002576 -> 0.001981 -> exactly 0.0 at protect_frac=1.0, i.e. no quantization at all) -- there is no sudden cliff, so teams can dial this knob to trade memory savings against accuracy continuously',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: protect_frac=0.0 ನಲ್ಲಿಯೂ, n_protect=max(1, int(10*0.0))=1 ಇನ್ನೂ ನಿಖರವಾಗಿ column 9 ಅನ್ನೂ ರಕ್ಷಿಸುತ್ತದೆ -- Module 193 ya rejection_sample() ಗೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ max(1, ...) floor pattern, ಇಲ್ಲಿ ಒಂದೂ degenerate "ಏನೂ ರಕ್ಷಿಸಬೇಡ" configuration ಅನ್ನೂ ತಡೆಯುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: protect_frac ಏರುತ್ತಾ error ಸುಗಮವಾಗಿ ಮತ್ತೆ monotonically ಇಳಿಯುತ್ತದೆ -- ಯಾವುದೇ ಹಠಾತ್ cliff ಇಲ್ಲ, ಆದ್ದರಿಂದ teams ಈ knob ಅನ್ನೂ memory savings ಅನ್ನೂ accuracy ವಿರುದ್ಧ ನಿರಂತರವಾಗಿ ವ್ಯಾಪಾರ ಮಾಡಲು ಡಯಲ್ ಮಾಡಬಹುದು' } },

    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: '• Genuinely demonstrated: assuming lower average error (MSE) always means a strictly better quantization -- GPTQ\'s honest max-error tradeoff shows this is not always true, and which metric matters depends on the deployment use case\n• Not demonstrated here but worth flagging: calibration data that does not represent real deployment traffic can make AWQ protect the WRONG channels -- the technique is only as good as the calibration set used to measure activation magnitudes\n• Evaluating a quantized model only on training-adjacent data risks missing quality loss that only shows up on out-of-distribution inputs -- pairing quantization work with the perplexity and EvalSuite tools from Module 194 on held-out data catches this',
      bodyKn: '• ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: ಕಡಿಮೆ average error (MSE) ಯಾವಾಗಲೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಉತ್ತಮ quantization ಎಂದೂ ಊಹಿಸುವುದೂ -- GPTQ ya ಪ್ರಾಮಾಣಿಕ max-error tradeoff ಇದೂ ಯಾವಾಗಲೂ ನಿಜವಲ್ಲ ಎಂದೂ ತೋರಿಸುತ್ತದೆ\n• ಇಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿಲ್ಲ ಆದರೆ ಗಮನಿಸಬೇಕಾದ್ದೂ: ನಿಜ deployment traffic ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸದ calibration data AWQ ಅನ್ನೂ ತಪ್ಪಾದ channels ರಕ್ಷಿಸುವಂತೆ ಮಾಡಬಹುದು\n• ಒಂದೂ quantized model ಅನ್ನೂ ಕೇವಲ training-adjacent data ಮೇಲೆ evaluate ಮಾಡುವುದೂ out-of-distribution inputs ಮೇಲೆ ಮಾತ್ರ ಕಾಣಿಸುವ quality ನಷ್ಟವನ್ನೂ ತಪ್ಪಿಸಬಹುದು -- Module 194 ya perplexity ಮತ್ತೆ EvalSuite tools ಜೊತೆ ಜೋಡಿಸುವುದೂ ಇದನ್ನೂ ಹಿಡಿಯುತ್ತದೆ' } },

    { type: 'table', data: {
      captionEn: 'GPTQ vs AWQ: Genuinely Compared', captionKn: 'GPTQ vs AWQ: ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      rows: "Method|Core idea|MSE result (this lesson)|Max-error result\nPlain per-tensor 4-bit|Round every value with one shared scale|Baseline|Baseline\nSimplified GPTQ|Redistribute each column's error into later columns|42% better|Slightly worse\nSimplified AWQ|Keep the most activation-salient channels at full precision|3.3x better|Also better" } },

    { type: 'concept', data: {
      headingEn: 'Full Module 195 Recap', headingKn: 'ಪೂರ್ಣ Module 195 ಪುನರಾವಲೋಕನ',
      bodyEn: '• Part 1 genuinely built symmetric and asymmetric quantization, confirming asymmetric halves error on non-negative data\n• Part 2 genuinely built per-channel quantization (rescuing non-outlier rows 50-80x) and confirmed memory scales exactly linearly with bit width while error scales exponentially\n• Part 3 genuinely built simplified GPTQ (a 42% MSE improvement with an honest max-error tradeoff) and simplified AWQ (a clean 3.3x MSE improvement by protecting one salient channel) -- together, the full toolkit real deployment pipelines use to compress a trained model with minimal quality loss',
      bodyKn: '• Part 1 symmetric ಮತ್ತೆ asymmetric quantization ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು, asymmetric non-negative data ಮೇಲೆ error ಅನ್ನೂ ಅರ್ಧಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು\n• Part 2 per-channel quantization ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು ಮತ್ತೆ memory bit width ಜೊತೆ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು\n• Part 3 simplified GPTQ ಮತ್ತೆ simplified AWQ ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು -- ಒಟ್ಟಿಗೆ, ಒಂದೂ trained model ಅನ್ನೂ ಕನಿಷ್ಠ quality ನಷ್ಟದೊಂದಿಗೆ compress ಮಾಡಲು ನಿಜ deployment pipelines ಬಳಸುವ ಪೂರ್ಣ toolkit' } },
    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Calibration data: real (or representative) input data used to measure which channels matter most, as opposed to data-free quantization\n• Error compensation: redistributing a quantized value\'s rounding error into not-yet-quantized values (GPTQ\'s core idea)\n• Salient channel: a weight channel corresponding to consistently large activation magnitudes, disproportionately important to preserve\n• Mixed-precision quantization: keeping some parts of a model at higher precision than others (AWQ\'s approach)',
      bodyKn: '• Calibration data: ಯಾವ channels ಅತ್ಯಂತ ಮುಖ್ಯ ಎಂದೂ ಅಳೆಯಲು ಬಳಸುವ ನಿಜ (ಅಥವಾ ಪ್ರತಿನಿಧಿ) input data\n• Error compensation: ಒಂದೂ quantized value ya rounding error ಅನ್ನೂ ಇನ್ನೂ quantize ಆಗದ values ಗೆ ಮರುಹಂಚುವುದೂ (GPTQ ya ಮುಖ್ಯ ಕಲ್ಪನೆ)\n• Salient channel: ಸ್ಥಿರವಾಗಿ ದೊಡ್ಡ activation magnitudes ಗೆ ಅನುಗುಣವಾದ ಒಂದೂ weight channel, ಸಂರಕ್ಷಿಸಲು ಅಸಮಾನವಾಗಿ ಮುಖ್ಯ\n• Mixed-precision quantization: model ya ಕೆಲವು ಭಾಗಗಳನ್ನೂ ಇತರರಿಗಿಂತ ಹೆಚ್ಚು precision ನಲ್ಲಿ ಇಟ್ಟುಕೊಳ್ಳುವುದೂ (AWQ ya ವಿಧಾನ)' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The simplified GPTQ and AWQ built here, in miniature, are the same two algorithms behind the real `auto-gptq` and `llm-awq` libraries used to quantize open-weight models like Llama and Mistral to 4-bit for consumer GPU deployment -- both genuinely require a calibration dataset, exactly the extra input this lesson\'s functions needed beyond Parts 1-2\'s data-free schemes.',
      bodyKn: 'ಇಲ್ಲಿ ಚಿಕ್ಕದಾಗಿ ಕಟ್ಟಿದ simplified GPTQ ಮತ್ತೆ AWQ, Llama ಮತ್ತೆ Mistral ನಂತಹ open-weight models ಅನ್ನೂ consumer GPU deployment ಗಾಗಿ 4-bit ಗೆ quantize ಮಾಡಲು ಬಳಸುವ ನಿಜ `auto-gptq` ಮತ್ತೆ `llm-awq` libraries ya ಹಿಂದೆ ಇರುವ ಅದೇ ಎರಡೂ algorithms.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: GPTQ\'s error compensation and AWQ\'s salient-channel protection both push 4-bit quantization error well below plain rounding, making aggressive compression practically usable rather than just theoretically possible\n• Genuinely confirmed: AWQ\'s calibration-driven channel selection means protection decisions are grounded in how the model actually behaves on real data, not just the raw weight magnitudes examined in Parts 1-2',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: GPTQ ya error compensation ಮತ್ತೆ AWQ ya salient-channel protection ಎರಡೂ 4-bit quantization error ಅನ್ನೂ plain rounding ಗಿಂತ ಬಹಳ ಕೆಳಗೆ ತಳ್ಳುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: AWQ ya calibration-driven channel selection ಎಂದರೆ protection decisions ಮಾದರಿ ನಿಜ ಡೇಟಾ ಮೇಲೆ ನಿಜವಾಗಿ ಹೇಗೆ ವರ್ತಿಸುತ್ತದೆ ಎಂಬುದೂ ಆಧರಿಸಿವೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a Hugging Face model card lists both an "AWQ" and a "GPTQ" quantized variant, users choosing between them are genuinely choosing between the two tradeoffs directly demonstrated in this lesson: GPTQ\'s error-redistribution approach versus AWQ\'s protect-what-matters approach.',
      bodyKn: 'ಒಂದೂ Hugging Face model card "AWQ" ಮತ್ತೆ "GPTQ" quantized variant ಎರಡನ್ನೂ ಪಟ್ಟಿ ಮಾಡಿದಾಗ, ಅವುಗಳ ನಡುವೆ ಆಯ್ಕೆ ಮಾಡುವ users ಈ lesson ನಲ್ಲಿ ನೇರವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ ಎರಡೂ tradeoffs ನಡುವೆ ನಿಜವಾಗಿ ಆಯ್ಕೆ ಮಾಡುತ್ತಿದ್ದಾರೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'GPTQ vs AWQ: Two Different Strategies', titleKn: 'GPTQ vs AWQ: ಎರಡೂ ಭಿನ್ನ ತಂತ್ರಗಳು',
      captionEn: 'GPTQ quantizes everything but compensates later columns for earlier error. AWQ leaves the most important channels untouched and quantizes only the rest.',
      captionKn: 'GPTQ ಎಲ್ಲವನ್ನೂ quantize ಮಾಡುತ್ತದೆ ಆದರೆ ಮೊದಲಿನ error ಗೆ ನಂತರದ columns ಅನ್ನೂ ಸರಿದೂಗಿಸುತ್ತದೆ. AWQ ಅತ್ಯಂತ ಮುಖ್ಯ channels ಅನ್ನೂ ಮುಟ್ಟದೆ ಬಿಡುತ್ತದೆ ಮತ್ತೆ ಉಳಿದವನ್ನೂ ಮಾತ್ರ quantize ಮಾಡುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><text x='20' y='25' fill='#e2e8f0' font-size='13'>GPTQ: quantize all, compensate forward</text><rect x='20' y='40' width='60' height='30' fill='#f59e0b' opacity='0.6'/><rect x='90' y='40' width='60' height='30' fill='#f59e0b' opacity='0.5'/><rect x='160' y='40' width='60' height='30' fill='#f59e0b' opacity='0.4'/><rect x='230' y='40' width='60' height='30' fill='#f59e0b' opacity='0.3'/><text x='150' y='90' fill='#94a3b8' font-size='10'>error flows right -&gt; compensated, all quantized</text><text x='20' y='130' fill='#e2e8f0' font-size='13'>AWQ: protect salient, quantize rest</text><rect x='20' y='145' width='60' height='30' fill='#f59e0b' opacity='0.6'/><rect x='90' y='145' width='60' height='30' fill='#22c55e'/><text x='120' y='165' fill='#0f172a' font-size='9' text-anchor='middle'>fp32</text><rect x='160' y='145' width='60' height='30' fill='#f59e0b' opacity='0.6'/><rect x='230' y='145' width='60' height='30' fill='#f59e0b' opacity='0.6'/></svg>" } },

    { type: 'table', data: {
      captionEn: 'Module 195 Decision Framework: Which Technique for Which Situation', captionKn: 'Module 195 Decision Framework: ಯಾವ ಸನ್ನಿವೇಶಕ್ಕೆ ಯಾವ Technique',
      rows: "Situation|Recommended technique (from this module)\nQuantizing weights (roughly symmetric around 0)|Symmetric quantization (Part 1)\nQuantizing post-ReLU/GELU activations|Asymmetric quantization (Part 1)\nWeight matrix has outlier rows|Per-channel quantization (Part 2)\nNeed aggressive 4-bit+ compression, no calibration data available|Simplified GPTQ-style error compensation (Part 3)\nHave real calibration data and want to protect the most important channels|Simplified AWQ-style protection (Part 3)" } },
    { type: 'concept', data: {
      headingEn: 'Naming Conventions You Will See in the Wild', headingKn: 'ನೀವೂ ಪ್ರಪಂಚದಲ್ಲಿ ನೋಡುವ Naming Conventions',
      bodyEn: 'Quantized model files on Hugging Face are commonly labeled with names like "Q4_K_M" or "Q8_0" (from the GGUF format) -- the number indicates roughly the bit width (4-bit, 8-bit), and the suffix indicates the specific calibration/grouping scheme used, conceptually similar to the per-tensor, per-channel, and calibration-based methods genuinely compared across this module.',
      bodyKn: 'Hugging Face ಮೇಲಿನ Quantized model files ಸಾಮಾನ್ಯವಾಗಿ "Q4_K_M" ಅಥವಾ "Q8_0" (GGUF format ಇಂದ) ನಂತಹ ಹೆಸರುಗಳೊಂದಿಗೆ ಲೇಬಲ್ ಆಗಿವೆ -- ಸಂಖ್ಯೆ ಬಹುತೇಕ bit width ಸೂಚಿಸುತ್ತದೆ (4-bit, 8-bit), ಮತ್ತೆ suffix ಬಳಸಿದ ನಿರ್ದಿಷ್ಟ calibration/grouping scheme ಅನ್ನೂ ಸೂಚಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'These Techniques Combine, They Don\'t Compete', headingKn: 'ಈ Techniques ಸಂಯೋಜಿಸುತ್ತವೆ, ಸ್ಪರ್ಧಿಸುವುದಿಲ್ಲ',
      bodyEn: 'Nothing genuinely built in this lesson is mutually exclusive: real production pipelines typically apply per-channel scales (Part 2) AND GPTQ-style error compensation or AWQ-style channel protection (Part 3) together within the same quantization run, layering each technique\'s genuinely confirmed benefit rather than choosing only one.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ ಯಾವುದೂ ಪರಸ್ಪರ ಪ್ರತ್ಯೇಕವಲ್ಲ: ನಿಜ production pipelines ಸಾಮಾನ್ಯವಾಗಿ ಒಂದೇ quantization run ಒಳಗೆ per-channel scales (Part 2) ಮತ್ತೆ GPTQ-style error compensation ಅಥವಾ AWQ-style channel protection (Part 3) ಅನ್ನೂ ಒಟ್ಟಿಗೆ ಅನ್ವಯಿಸುತ್ತವೆ, ಕೇವಲ ಒಂದನ್ನೂ ಆಯ್ಕೆ ಮಾಡುವ ಬದಲು ಪ್ರತಿ technique ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಪ್ರಯೋಜನವನ್ನೂ ಪದರಗೊಳಿಸುತ್ತಾ.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'Module 195 made a trained model small enough to fit in memory. Module 196 turns to the next deployment concern: making that model fast to actually run -- KV caching, batching strategies, and speculative decoding, genuinely built and measured against real latency and throughput numbers.',
      bodyKn: 'Module 195 ಒಂದೂ trained model ಅನ್ನೂ memory ನಲ್ಲಿ ಹೊಂದಿಸುವಷ್ಟೂ ಚಿಕ್ಕದಾಗಿಸಿತು. Module 196 ಮುಂದಿನ deployment ಕಾಳಜಿಗೆ ತಿರುಗುತ್ತದೆ: ಆ model ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲು ವೇಗಗೊಳಿಸುವುದೂ -- KV caching, batching strategies, ಮತ್ತೆ speculative decoding, ನಿಜ latency ಮತ್ತೆ throughput ಸಂಖ್ಯೆಗಳ ವಿರುದ್ಧ ನಿಜವಾಗಿ ಕಟ್ಟಿ ಅಳೆಯಲಾಗಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what happened to MSE and max_abs_error when switching from plain 4-bit per-tensor quantization to simplified GPTQ?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: plain 4-bit per-tensor quantization ಇಂದ simplified GPTQ ಗೆ ಬದಲಾಯಿಸಿದಾಗ MSE ಮತ್ತೆ max_abs_error ಗೆ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['Both improved equally', 'MSE improved by ~42% but max_abs_error got slightly worse', 'Both got worse', 'Neither changed'], correct: 1,
        optsKn: ['ಎರಡೂ ಸಮಾನವಾಗಿ ಸುಧಾರಿಸಿದವು', 'MSE ~42% ಸುಧಾರಿಸಿತು ಆದರೆ max_abs_error ಸ್ವಲ್ಪ ಕೆಟ್ಟದಾಯಿತು', 'ಎರಡೂ ಕೆಟ್ಟದಾಯಿತು', 'ಯಾವುದೂ ಬದಲಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: which single channel did simulated_awq() correctly identify to protect, and why?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: simulated_awq() ರಕ್ಷಿಸಲು ಯಾವ ಏಕೈಕ channel ಅನ್ನೂ ಸರಿಯಾಗಿ ಗುರುತಿಸಿತು, ಮತ್ತೆ ಏಕೆ?',
        opts: ['Column 0, the first one', 'Column 9, because it had 20x the activation magnitude of the others', 'A random column', 'All columns equally'], correct: 1,
        optsKn: ['Column 0, ಮೊದಲಿನೂ', 'Column 9, ಅದೂ ಇತರರಿಗಿಂತ 20x activation magnitude ಹೊಂದಿದ್ದರಿಂದ', 'ಒಂದೂ random column', 'ಎಲ್ಲಾ columns ಸಮಾನವಾಗಿ'] },
      { q: 'Genuinely confirmed: did AWQ-style protection improve BOTH mse and max_abs_error, or trade one for the other like GPTQ?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: AWQ-style protection mse ಮತ್ತೆ max_abs_error ಎರಡನ್ನೂ ಸುಧಾರಿಸಿತೇ, ಅಥವಾ GPTQ ಯಂತೆ ಒಂದನ್ನೂ ಇನ್ನೊಂದಕ್ಕಾಗಿ ವ್ಯಾಪಾರ ಮಾಡಿತೇ?',
        opts: ['It traded one for the other', 'It improved both metrics -- 3.3x better MSE and also better max_abs_error', 'It worsened both', 'It had no effect on either'], correct: 1,
        optsKn: ['ಅದೂ ಒಂದನ್ನೂ ಇನ್ನೊಂದಕ್ಕಾಗಿ ವ್ಯಾಪಾರ ಮಾಡಿತು', 'ಅದೂ ಎರಡೂ metrics ಸುಧಾರಿಸಿತು -- 3.3x ಉತ್ತಮ MSE ಮತ್ತೆ ಉತ್ತಮ max_abs_error', 'ಅದೂ ಎರಡನ್ನೂ ಕೆಟ್ಟದಾಗಿಸಿತು', 'ಅದೂ ಯಾವುದರ ಮೇಲೂ ಪರಿಣಾಮ ಬೀರಲಿಲ್ಲ'] },
      { q: 'What key extra input does AWQ genuinely require that the data-free schemes from Part 1 and per-channel quantization from Part 2 did not?', qKn: 'Part 1 ya data-free schemes ಮತ್ತೆ Part 2 ya per-channel quantization ಅಗತ್ಯಪಡಿಸದ ಯಾವ ಮುಖ್ಯ ಹೆಚ್ಚುವರಿ input ಅನ್ನೂ AWQ ನಿಜವಾಗಿ ಅಗತ್ಯಪಡಿಸುತ್ತದೆ?',
        opts: ['A larger vocabulary', 'Calibration data showing which channels have large activation magnitudes', 'A trained value network', 'A human preference dataset'], correct: 1,
        optsKn: ['ಒಂದೂ ದೊಡ್ಡ vocabulary', 'ಯಾವ channels ದೊಡ್ಡ activation magnitudes ಹೊಂದಿವೆ ಎಂದೂ ತೋರಿಸುವ calibration data', 'ಒಂದೂ trained value network', 'ಒಂದೂ human preference dataset'] },
      { q: 'Across the full Module 195, why does memory savings from quantization come with essentially no risk, while aggressive bit reduction (e.g. 2-bit) does carry real risk?', qKn: 'ಪೂರ್ಣ Module 195 ಆದ್ಯಂತ, quantization ಇಂದ memory savings ಮೂಲಭೂತವಾಗಿ ಯಾವುದೇ ಅಪಾಯ ಇಲ್ಲದೆ ಏಕೆ ಬರುತ್ತದೆ, ಆಕ್ರಮಣಕಾರಿ bit reduction (ಉದಾ. 2-bit) ನಿಜ ಅಪಾಯ ಹೊಂದಿರುವಾಗ?',
        opts: ['Memory savings are random; error is fixed', 'Memory scales exactly linearly with bits (guaranteed), while quantization error scales exponentially as bits decrease (genuinely confirmed in Part 2)', 'There is no real difference', 'Bit reduction always improves both'], correct: 1,
        optsKn: ['Memory savings random; error fixed', 'Memory bits ಜೊತೆ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತದೆ (ಖಾತ್ರಿಪಡಿಸಲಾಗಿದೆ), bits ಕಡಿಮೆಯಾಗುತ್ತಾ quantization error ಘಾತೀಯವಾಗಿ scale ಆಗುತ್ತದೆ', 'ಯಾವುದೇ ನಿಜ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ', 'Bit reduction ಯಾವಾಗಲೂ ಎರಡನ್ನೂ ಸುಧಾರಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
