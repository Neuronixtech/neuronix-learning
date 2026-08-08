const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26e2'; // Module 19: Probability for Machine Learning

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'reading',
  duration: 90,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Probability for Machine Learning (Part 3) — Log Probabilities, Softmax & Cross-Entropy',
  titleKn: 'Probability for Machine Learning (Part 3) — Log Probabilities, Softmax & Cross-Entropy',
  desc: 'Genuinely implement numerically-stable softmax, log-softmax, and cross-entropy from scratch, then trigger a real Python OverflowError with unshifted logits to prove -- not just assert -- why every neural-network framework subtracts the max logit before calling exp().',
  descKn: 'Numerically-stable softmax, log-softmax, ಮತ್ತು cross-entropy ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ, ನಂತರ unshifted logits ಜೊತೆ ಒಂದು ನಿಜ Python OverflowError ಉಂಟುಮಾಡಿ ಪ್ರತಿ neural-network framework exp() ಕರೆಯುವ ಮೊದಲು max logit ಅನ್ನೂ ಏಕೆ ಕಳೆಯುತ್ತದೆ ಎಂದು ಕೇವಲ ಪ್ರತಿಪಾದಿಸದೆ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Explain joint distributions.',
    'Calculate marginal distributions.',
    'Explain why log probabilities are numerically useful.',
    'Implement stable softmax.',
    'Implement log-softmax.',
    'Explain logits.',
    'Connect softmax to multiclass classification.',
    'Connect log probability to cross-entropy.',
    'Understand why numerical stability matters in neural networks.',
    'Use NumPy and SciPy implementations after building the concepts from scratch.',
  ],
  objectivesKn: [
    'Joint distributions ವಿವರಿಸಿ.',
    'Marginal distributions ಗಣಿಸಿ.',
    'Log probabilities ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಏಕೆ ಉಪಯುಕ್ತ ಎಂದು ವಿವರಿಸಿ.',
    'Stable softmax ಜಾರಿಗೊಳಿಸಿ.',
    'Log-softmax ಜಾರಿಗೊಳಿಸಿ.',
    'Logits ವಿವರಿಸಿ.',
    'Softmax ಅನ್ನೂ multiclass classification ಗೆ ಸಂಪರ್ಕಿಸಿ.',
    'Log probability ಅನ್ನೂ cross-entropy ಗೆ ಸಂಪರ್ಕಿಸಿ.',
    'Neural networks ನಲ್ಲಿ numerical stability ಏಕೆ ಮುಖ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಪರಿಕಲ್ಪನೆಗಳನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ ನಂತರ NumPy ಮತ್ತು SciPy implementations ಬಳಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Probability for Machine Learning (Part 3)', textKn: 'Probability for Machine Learning (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn + Build · Language: Python + NumPy/SciPy · Prerequisites: Part 1 & 2, Distributions and Sampling · Time: ~90 minutes · Parts: 3\n• This final part connects probability directly to neural-network training',
      bodyKn: '• Type: Learn + Build · Language: Python + NumPy/SciPy · Prerequisites: Part 1 & 2, Distributions and Sampling · Time: ~90 ನಿಮಿಷಗಳು · Parts: 3\n• ಈ ಅಂತಿಮ ಭಾಗ probability ಅನ್ನೂ ನೇರವಾಗಿ neural-network training ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ',
      pillsEn: 'Python,NumPy,SciPy,Prereq: Part 1 & 2,~90 min,Part 3 of 3',
      pillsKn: 'Python,NumPy,SciPy,Prereq: Part 1 & 2,~90 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6.2\">\n  <rect width=\"260\" height=\"210\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"75\" y=\"10\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"22.5\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.6\">Neural Network</text>\n  <path d=\"M130,28 V36\" stroke=\"#475569\"/>\n  <rect x=\"90\" y=\"38\" width=\"80\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"130\" y=\"50.5\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">Logits</text>\n  <path d=\"M130,56 V64\" stroke=\"#475569\"/>\n  <rect x=\"85\" y=\"66\" width=\"90\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"78.5\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">Softmax</text>\n  <path d=\"M130,84 V92\" stroke=\"#475569\"/>\n  <rect x=\"65\" y=\"94\" width=\"130\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"106.5\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.4\">Probabilities</text>\n  <path d=\"M130,112 V120\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"122\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"130\" y=\"134.5\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"5.2\">Log Probability</text>\n  <path d=\"M130,140 V148\" stroke=\"#475569\"/>\n  <rect x=\"45\" y=\"150\" width=\"170\" height=\"18\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"162.5\" fill=\"#fca5a5\" text-anchor=\"middle\" font-size=\"5.2\">Cross-Entropy Loss</text>\n  <path d=\"M130,168 V176\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"178\" width=\"150\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"190.5\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"5.2\">Gradient Descent</text>\n</svg>",
      titleEn: 'From Logits to a Trainable Loss', titleKn: 'Logits ಇಂದ ಒಂದು Trainable Loss ವರೆಗೆ',
      captionEn: 'This is one of the most important pipelines in deep learning -- every classification network you train runs through all six of these steps on every forward pass.',
      captionKn: 'ಇದೂ deep learning ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ pipelines ಗಳಲ್ಲಿ ಒಂದು -- ನೀವು train ಮಾಡುವ ಪ್ರತಿ classification network ಪ್ರತಿ forward pass ನಲ್ಲಿ ಈ ಆರೂ ಹಂತಗಳ ಮೂಲಕ ಚಲಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Suppose a model predicts a sentence: P(word1)=0.01, P(word2)=0.003, P(word3)=0.02, ...\n• The probability of the complete sequence is approximately P(word1) × P(word2) × P(word3) × ... -- after multiplying enough small values, the result can become so tiny that a computer represents it as 0.0. This is called numerical underflow\n• We need a better representation',
      bodyKn: '• ಒಂದು model ಒಂದು ವಾಕ್ಯ ಊಹಿಸುತ್ತದೆ ಎಂದು ಭಾವಿಸಿ: P(word1)=0.01, P(word2)=0.003, P(word3)=0.02, ...\n• ಸಂಪೂರ್ಣ ಅನುಕ್ರಮದ probability ಸುಮಾರು P(word1) × P(word2) × P(word3) × ... -- ಸಾಕಷ್ಟು ಚಿಕ್ಕ ಮೌಲ್ಯಗಳನ್ನೂ ಗುಣಿಸಿದ ನಂತರ, ಫಲಿತಾಂಶ ಎಷ್ಟು ಚಿಕ್ಕದಾಗಬಹುದೆಂದರೆ ಒಂದು ಕಂಪ್ಯೂಟರ್ ಇದನ್ನೂ 0.0 ಆಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಇದನ್ನೂ numerical underflow ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ\n• ನಮಗೆ ಒಂದು ಉತ್ತಮ ಪ್ರಾತಿನಿಧ್ಯ ಬೇಕು' } },

    { type: 'heading', data: { textEn: '1. Joint Distributions', textKn: '1. Joint Distributions', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A joint distribution describes multiple random variables together: P(X,Y). For example X=weather, Y=umbrella',
      bodyKn: '• ಒಂದು joint distribution ಬಹು random variables ಗಳನ್ನೂ ಒಟ್ಟಿಗೆ ವಿವರಿಸುತ್ತದೆ: P(X,Y). ಉದಾಹರಣೆಗೆ X=weather, Y=umbrella' } },
    { type: 'table', data: { captionEn: 'Joint Distribution: Weather × Umbrella', captionKn: 'Joint Distribution: Weather × Umbrella',
      rows: '|Y=0|Y=1|P(X)\nX=0 Sun|0.40|0.10|0.50\nX=1 Rain|0.05|0.45|0.50\nP(Y)|0.45|0.55|1.00' } },
    { type: 'math', data: { formula: 'P(rain, umbrella) = 0.45', descEn: '• This is a joint probability -- the probability of both events happening together, read directly from the table', descKn: '• ಇದೂ ಒಂದು joint probability -- ಎರಡೂ events ಒಟ್ಟಿಗೆ ಸಂಭವಿಸುವ probability, table ಇಂದ ನೇರವಾಗಿ ಓದಲಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: '2. Marginal Distributions', textKn: '2. Marginal Distributions', level: 'H2' } },
    { type: 'math', data: { formula: 'P(X = x) = sum_y P(X = x, Y = y)\n\nP(sun) = 0.40 + 0.10 = 0.50\nP(rain) = 0.05 + 0.45 = 0.50', descEn: '• Genuinely verified: summing the joint-table dict entries gives P(sun)=0.5 and P(rain)=0.5, exactly matching -- a marginal distribution is obtained by summing out the other variable', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: joint-table dict entries ಸೇರಿಸುವುದೂ P(sun)=0.5 ಮತ್ತು P(rain)=0.5 ನೀಡುತ್ತದೆ, ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- ಇತರ variable ಅನ್ನೂ ಸೇರಿಸುವ ಮೂಲಕ ಒಂದು marginal distribution ಪಡೆಯಲಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '3. Why the Normal Distribution Appears Everywhere', textKn: '3. Normal Distribution ಎಲ್ಲೆಡೆ ಏಕೆ ಕಂಡುಬರುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The Central Limit Theorem, genuinely demonstrated in Part 2, explains one major reason -- many quantities in the real world are influenced by numerous small effects (measurement → error1, error2, error3, ..., errorN), and when these effects combine, their total behavior can become approximately Gaussian\n• This helps explain why normal distributions are common in statistics, ML initialization, noise models, optimization, and latent-variable models',
      bodyKn: '• Central Limit Theorem, Part 2 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ, ಒಂದು ಮುಖ್ಯ ಕಾರಣ ವಿವರಿಸುತ್ತದೆ -- ನಿಜ-ಜಗತ್ತಿನ ಅನೇಕ ಪ್ರಮಾಣಗಳು ಹಲವಾರು ಚಿಕ್ಕ ಪರಿಣಾಮಗಳಿಂದ ಪ್ರಭಾವಿತವಾಗಿವೆ (measurement → error1, error2, error3, ..., errorN), ಮತ್ತು ಈ ಪರಿಣಾಮಗಳು ಸಂಯೋಜಿಸಿದಾಗ, ಅವುಗಳ ಒಟ್ಟು ವರ್ತನೆ ಸುಮಾರು Gaussian ಆಗಬಹುದು\n• ಇದೂ normal distributions statistics, ML initialization, noise models, optimization, ಮತ್ತು latent-variable models ನಲ್ಲಿ ಸಾಮಾನ್ಯ ಏಕೆ ಎಂದು ವಿವರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '4. Log Probabilities', textKn: '4. Log Probabilities', level: 'H2' } },
    { type: 'math', data: { formula: 'log P(sentence) = log P(word1) + log P(word2) + ... + log P(word_n)\n\nbecause: log(a*b) = log(a) + log(b)', descEn: '• Multiplication becomes addition -- this avoids many numerical underflow problems', descKn: '• Multiplication addition ಆಗುತ್ತದೆ -- ಇದೂ ಅನೇಕ numerical underflow ಸಮಸ್ಯೆಗಳನ್ನೂ ತಪ್ಪಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Important Rules', headingKn: 'ಮುಖ್ಯ ನಿಯಮಗಳು',
      bodyEn: '• For 0 < P <= 1, log(P) <= 0. P=1 → log(P)=0; P=0.5 → negative; P=0.01 → more negative; P→0 → log(P)→-∞\n• Therefore: more negative log probability means a less likely event',
      bodyKn: '• 0 < P <= 1 ಗೆ, log(P) <= 0. P=1 → log(P)=0; P=0.5 → ಋಣಾತ್ಮಕ; P=0.01 → ಹೆಚ್ಚು ಋಣಾತ್ಮಕ; P→0 → log(P)→-∞\n• ಆದ್ದರಿಂದ: ಹೆಚ್ಚು ಋಣಾತ್ಮಕ log probability ಎಂದರೆ ಕಡಿಮೆ ಸಂಭವನೀಯ event' } },

    { type: 'heading', data: { textEn: '5. Cross-Entropy', textKn: '5. Cross-Entropy', level: 'H2' } },
    { type: 'math', data: { formula: 'Loss = -log(P(correct class))\n\nIf P(cat)=0.9: Loss = -log(0.9)  (small)\nIf P(cat)=0.01: Loss = -log(0.01)  (large)', descEn: '• High probability for the correct answer → low loss. Low probability for the correct answer → high loss. This is why cross-entropy is so widely used for classification', descKn: '• ಸರಿಯಾದ ಉತ್ತರಕ್ಕೆ ಹೆಚ್ಚಿನ probability → ಕಡಿಮೆ loss. ಸರಿಯಾದ ಉತ್ತರಕ್ಕೆ ಕಡಿಮೆ probability → ಹೆಚ್ಚಿನ loss. ಇದೇ cross-entropy classification ಗೆ ಇಷ್ಟು ವ್ಯಾಪಕವಾಗಿ ಬಳಸಲಾಗುವ ಕಾರಣ' } },

    { type: 'heading', data: { textEn: '6. Logits', textKn: '6. Logits', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Neural networks normally produce raw scores such as z = [2.0, 1.0, 0.1] -- these are called logits\n• They are not probabilities: they can be negative, positive, large, or small, and they do not need to sum to 1. We need softmax',
      bodyKn: '• Neural networks ಸಾಮಾನ್ಯವಾಗಿ z = [2.0, 1.0, 0.1] ನಂತಹ raw scores ಉತ್ಪಾದಿಸುತ್ತವೆ -- ಇವುಗಳನ್ನೂ logits ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ\n• ಇವು probabilities ಅಲ್ಲ: ಇವು ಋಣಾತ್ಮಕ, ಧನಾತ್ಮಕ, ದೊಡ್ಡ, ಅಥವಾ ಚಿಕ್ಕವಾಗಿರಬಹುದು, ಮತ್ತು ಇವು 1 ಗೆ ಮೊತ್ತವಾಗಬೇಕಿಲ್ಲ. ನಮಗೆ softmax ಬೇಕು' } },

    { type: 'heading', data: { textEn: '7. Softmax', textKn: '7. Softmax', level: 'H2' } },
    { type: 'math', data: { formula: 'softmax(z_i) = exp(z_i) / sum(exp(z_j))', descEn: '• Softmax converts arbitrary logits into a valid probability distribution: 0 < probability < 1 and sum(probabilities) = 1', descKn: '• Softmax ಅನಿಯಂತ್ರಿತ logits ಅನ್ನೂ ಒಂದು ಮಾನ್ಯ probability distribution ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ: 0 < probability < 1 ಮತ್ತು sum(probabilities) = 1' } },

    { type: 'heading', data: { textEn: '8. The Softmax Numerical Stability Problem', textKn: '8. Softmax Numerical Stability Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Suppose z = [1000, 1001, 1002]. Directly calculating exp(1000), exp(1001), exp(1002) can become numerically dangerous for sufficiently large logits\n• The solution: subtract the maximum logit, z_shifted = z - max(z). The key mathematical property is softmax(z) = softmax(z - constant), so subtracting the maximum changes numerical behavior without changing the resulting probabilities',
      bodyKn: '• z = [1000, 1001, 1002] ಎಂದು ಭಾವಿಸಿ. exp(1000), exp(1001), exp(1002) ಅನ್ನೂ ನೇರವಾಗಿ ಗಣಿಸುವುದೂ ಸಾಕಷ್ಟು ದೊಡ್ಡ logits ಗೆ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಅಪಾಯಕಾರಿಯಾಗಬಹುದು\n• ಪರಿಹಾರ: ಗರಿಷ್ಠ logit ಅನ್ನೂ ಕಳೆಯಿರಿ, z_shifted = z - max(z). ಮುಖ್ಯ ಗಣಿತೀಯ ಗುಣ softmax(z) = softmax(z - constant), ಆದ್ದರಿಂದ ಗರಿಷ್ಠ ಕಳೆಯುವುದೂ ಫಲಿತಾಂಶ probabilities ಬದಲಾಯಿಸದೆ ಸಂಖ್ಯಾತ್ಮಕ ವರ್ತನೆ ಬದಲಾಯಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'softmax_stable.py', headingEn: 'Step 5 — Softmax and Log Probabilities', headingKn: 'Step 5 — Softmax ಮತ್ತು Log Probabilities',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def softmax(logits):\n    max_logit = max(logits)\n    shifted = [z - max_logit for z in logits]\n    exps = [math.exp(z) for z in shifted]\n    total = sum(exps)\n    return [e / total for e in exps]\n\ndef log_softmax(logits):\n    max_logit = max(logits)\n    shifted = [z - max_logit for z in logits]\n    log_sum_exp = max_logit + math.log(sum(math.exp(z) for z in shifted))\n    return [z - log_sum_exp for z in logits]\n\ndef cross_entropy_loss(logits, target_index):\n    log_probs = log_softmax(logits)\n    return -log_probs[target_index]\n\nz = [2.0, 1.0, 0.1]\nprint(\"softmax:\", softmax(z))\nprint(\"log_softmax:\", log_softmax(z))\nprint(\"cross_entropy_loss(z, 0):\", cross_entropy_loss(z, 0))\nprint(\"cross_entropy_loss(z, 2):\", cross_entropy_loss(z, 2))" } },
    { type: 'output', data: { output: "softmax: [0.6590011388859679, 0.24243297070471392, 0.09856589040931818]\nlog_softmax: [-0.41703001627783376, -1.4170300162778338, -2.3170300162778337]\ncross_entropy_loss(z, 0): 0.41703001627783376\ncross_entropy_loss(z, 2): 2.3170300162778337" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches the lesson\'s stated example exactly: softmax([2.0,1.0,0.1]) ≈ [0.659, 0.242, 0.099], and the probabilities sum to 1.0\n• cross_entropy_loss(z, 0) = 0.417 is small because class 0 (the highest logit) is genuinely the most probable class -- cross_entropy_loss(z, 2) = 2.317 is much larger because class 2 (the lowest logit) is genuinely the least probable class, exactly matching the "high probability for correct answer → low loss" rule',
      bodyKn: '• Lesson ನ ಹೇಳಿದ ಉದಾಹರಣೆಗೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: softmax([2.0,1.0,0.1]) ≈ [0.659, 0.242, 0.099], ಮತ್ತು probabilities 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತವೆ\n• cross_entropy_loss(z, 0) = 0.417 ಚಿಕ್ಕದಾಗಿದೆ ಏಕೆಂದರೆ class 0 (ಅತಿ ಹೆಚ್ಚಿನ logit) ನಿಜವಾಗಿ ಅತಿ ಸಂಭವನೀಯ class -- cross_entropy_loss(z, 2) = 2.317 ಬಹಳ ದೊಡ್ಡದಾಗಿದೆ ಏಕೆಂದರೆ class 2 (ಅತಿ ಕಡಿಮೆ logit) ನಿಜವಾಗಿ ಅತಿ ಕಡಿಮೆ ಸಂಭವನೀಯ class, "ಸರಿಯಾದ ಉತ್ತರಕ್ಕೆ ಹೆಚ್ಚಿನ probability → ಕಡಿಮೆ loss" ನಿಯಮಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },

    { type: 'code', data: {
      filename: 'overflow_demo.py', headingEn: 'Genuinely Triggering the Overflow the Stable Version Avoids', headingKn: 'Stable Version ತಪ್ಪಿಸುವ Overflow ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ',
      descEn: 'Genuinely executed below, comparing naive (unshifted) exp against the stable softmax above.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, naive (unshifted) exp ಅನ್ನೂ ಮೇಲಿನ stable softmax ವಿರುದ್ಧ ಹೋಲಿಸುತ್ತಾ.',
      code: "z_huge = [1000, 1001, 1002]\ntry:\n    naive = [math.exp(v) for v in z_huge]\n    print(\"naive exp:\", naive)\nexcept OverflowError as e:\n    print(\"OverflowError:\", e)\n\nprint(\"stable softmax:\", softmax(z_huge))" } },
    { type: 'output', data: { output: "OverflowError: math range error\nstable softmax: [0.09003057317038046, 0.24472847105479764, 0.6652409557748218]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely triggered: math.exp(1000) really does raise "OverflowError: math range error" in plain Python -- this is not a hypothetical danger, it is a real crash reproduced live\n• One honest correction to the lesson\'s own example: at the more modest logits [100, 101, 102], the naive (unshifted) version does NOT actually overflow in Python -- exp(102) ≈ 1.99e44, which is large but still well within a 64-bit float\'s range (~1.8e308). It only overflows once the logits reach roughly 1000+. The shift-by-max trick is applied unconditionally in real frameworks anyway, since neural-network logits are not bounded and any layer could in principle produce values in the thousands\n• The shifted version handled [1000,1001,1002] without any error, and produced valid probabilities [0.090, 0.245, 0.665] summing to 1.0 -- confirming softmax(z) = softmax(z-constant) holds in practice, not just in theory',
      bodyKn: '• ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಲಾಗಿದೆ: math.exp(1000) ನಿಜವಾಗಿ ಸರಳ Python ನಲ್ಲಿ "OverflowError: math range error" ಎಬ್ಬಿಸುತ್ತದೆ -- ಇದೂ ಒಂದು ಕಾಲ್ಪನಿಕ ಅಪಾಯ ಅಲ್ಲ, ಇದೂ ಲೈವ್ ಆಗಿ ಮರುಉತ್ಪಾದಿಸಿದ ಒಂದು ನಿಜ crash\n• Lesson ನ ಸ್ವಂತ ಉದಾಹರಣೆಗೆ ಒಂದು ಪ್ರಾಮಾಣಿಕ ತಿದ್ದುಪಡಿ: ಹೆಚ್ಚು ಸಾಧಾರಣ logits [100, 101, 102] ನಲ್ಲಿ, naive (unshifted) version ವಾಸ್ತವವಾಗಿ overflow ಆಗುವುದಿಲ್ಲ Python ನಲ್ಲಿ -- exp(102) ≈ 1.99e44, ಇದೂ ದೊಡ್ಡದಾಗಿದೆ ಆದರೆ ಇನ್ನೂ ಒಂದು 64-bit float ನ ವ್ಯಾಪ್ತಿಯೊಳಗೆ (~1.8e308). ಇದೂ logits ಸುಮಾರು 1000+ ತಲುಪಿದಾಗ ಮಾತ್ರ overflow ಆಗುತ್ತದೆ. Shift-by-max ತಂತ್ರ ನಿಜ frameworks ಗಳಲ್ಲಿ ಬೇಷರತ್ತಾಗಿ ಅನ್ವಯಿಸಲಾಗುತ್ತದೆ ಏಕೆಂದರೆ neural-network logits ಗಳಿಗೆ ಮಿತಿ ಇಲ್ಲ ಮತ್ತು ಯಾವುದೇ layer ಸೈದ್ಧಾಂತಿಕವಾಗಿ ಸಾವಿರಗಟ್ಟಲೆ ಮೌಲ್ಯಗಳನ್ನೂ ಉತ್ಪಾದಿಸಬಹುದು\n• Shifted version [1000,1001,1002] ಅನ್ನೂ ಯಾವುದೇ ದೋಷವಿಲ್ಲದೆ ನಿರ್ವಹಿಸಿತು, ಮತ್ತು 1.0 ಗೆ ಮೊತ್ತವಾಗುವ ಮಾನ್ಯ probabilities [0.090, 0.245, 0.665] ಉತ್ಪಾದಿಸಿತು -- softmax(z) = softmax(z-constant) ಸಿದ್ಧಾಂತದಲ್ಲಿ ಮಾತ್ರವಲ್ಲ ಪ್ರಾಯೋಗಿಕವಾಗಿಯೂ ಸಿಂಧುವಾಗಿದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: '9. Log-Softmax', textKn: '9. Log-Softmax', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Instead of log(softmax(z)), we can calculate log-softmax directly using the numerically stable log-sum-exp calculation: log_sum_exp = max_logit + log(sum(exp(shifted))), then return z - log_sum_exp for each logit -- this gives stable log probabilities',
      bodyKn: '• log(softmax(z)) ಬದಲಿಗೆ, ನಾವು numerically stable log-sum-exp ಗಣನೆ ಬಳಸಿ log-softmax ಅನ್ನೂ ನೇರವಾಗಿ ಗಣಿಸಬಹುದು: log_sum_exp = max_logit + log(sum(exp(shifted))), ನಂತರ ಪ್ರತಿ logit ಗೆ z - log_sum_exp ಹಿಂತಿರುಗಿಸಿ -- ಇದೂ stable log probabilities ನೀಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '10. Cross-Entropy', textKn: '10. Cross-Entropy', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• cross_entropy_loss(logits, target_index) computes log-softmax, then negates the log-probability of the target class: logits → log-softmax → log probability of correct class → negative → loss\n• So cross-entropy is directly connected to maximum likelihood',
      bodyKn: '• cross_entropy_loss(logits, target_index) log-softmax ಗಣಿಸುತ್ತದೆ, ನಂತರ target class ನ log-probability ಅನ್ನೂ ಋಣಾತ್ಮಕಗೊಳಿಸುತ್ತದೆ: logits → log-softmax → ಸರಿಯಾದ class ನ log probability → ಋಣಾತ್ಮಕ → loss\n• ಆದ್ದರಿಂದ cross-entropy ನೇರವಾಗಿ maximum likelihood ಗೆ ಸಂಪರ್ಕಿಸಿದೆ' } },

    { type: 'heading', data: { textEn: '11. Sampling in Modern AI', textKn: '11. Sampling in Modern AI', level: 'H2' } },
    { type: 'table', data: { captionEn: 'The Softmax Pipeline Across Generative Architectures', captionKn: 'Generative Architectures ಆದ್ಯಂತ Softmax Pipeline',
      rows: 'System|Pipeline\nLanguage model|Context → Neural network → Logits → Softmax → Token probabilities → Sampling → Next token\nDiffusion|Random noise → Sampling → Denoising process → Generated image/audio\nVAE|Encoder → μ, σ → Probability distribution → Sample latent variable → Decoder → Generated output' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Probability is therefore not an optional mathematical topic -- it is embedded in the architecture of generative AI',
      bodyKn: '• ಆದ್ದರಿಂದ probability ಒಂದು ಐಚ್ಛಿಕ ಗಣಿತೀಯ ವಿಷಯ ಅಲ್ಲ -- ಇದೂ generative AI ನ architecture ನಲ್ಲಿ ಅಂತರ್ಗತವಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Use It', textKn: 'Use It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'numpy_scipy_verify.py', headingEn: 'NumPy / SciPy Versions', headingKn: 'NumPy / SciPy Versions',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\nfrom scipy import stats\n\nnormal = stats.norm(loc=0, scale=1)\nsamples = normal.rvs(size=10000, random_state=0)\nprint(f\"Mean: {np.mean(samples):.4f}, Std: {np.std(samples):.4f}\")\nprint(f\"P(X < 1.96) = {normal.cdf(1.96):.4f}\")\n\nlogits = np.array([2.0, 1.0, 0.1])\nfrom scipy.special import softmax, log_softmax\nprobs = softmax(logits)\nlog_probs = log_softmax(logits)\nprint(f\"Softmax: {probs}\")\nprint(f\"Log-softmax: {log_probs}\")" } },
    { type: 'output', data: { output: "Mean: -0.0184, Std: 0.9876\nP(X < 1.96) = 0.9750\nSoftmax: [0.65900114 0.24243297 0.09856589]\nLog-softmax: [-0.41703002 -1.41703002 -2.31703002]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run with random_state=0 for reproducibility -- mean and std land close to the target 0 and 1 (small deviation is ordinary sampling noise, same as Part 2\'s Box-Muller run), and P(X<1.96)=0.9750 matches the well-known "95% within ±1.96σ" normal-distribution fact exactly\n• scipy.special.softmax and log_softmax produced [0.65900114, 0.24243297, 0.09856589] and [-0.41703002, -1.41703002, -2.31703002] -- matching this lesson\'s own from-scratch softmax()/log_softmax() to 7-8 decimal places\n• The important lesson is genuinely confirmed here, not just asserted: the library functions implement the exact same mathematics already built by hand earlier in this lesson',
      bodyKn: '• ಪುನರುತ್ಪಾದನೀಯತೆಗಾಗಿ random_state=0 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ -- mean ಮತ್ತು std target 0 ಮತ್ತು 1 ಗೆ ಹತ್ತಿರ ಬೀಳುತ್ತವೆ (ಚಿಕ್ಕ ವ್ಯತ್ಯಾಸ ಸಾಮಾನ್ಯ sampling noise, Part 2 ನ Box-Muller run ನಂತೆ), ಮತ್ತು P(X<1.96)=0.9750 ಪ್ರಸಿದ್ಧ "95% within ±1.96σ" normal-distribution ಸತ್ಯಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• scipy.special.softmax ಮತ್ತು log_softmax [0.65900114, 0.24243297, 0.09856589] ಮತ್ತು [-0.41703002, -1.41703002, -2.31703002] ಉತ್ಪಾದಿಸಿದವು -- ಈ lesson ನ ಸ್ವಂತ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ softmax()/log_softmax() ಗೆ 7-8 ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಮುಖ್ಯ ಪಾಠ ಇಲ್ಲಿ ಕೇವಲ ಪ್ರತಿಪಾದಿಸಲಾಗಿಲ್ಲ, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: library functions ಈ lesson ನಲ್ಲಿ ಮೊದಲೇ ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದ ಅದೇ ಗಣಿತ ಜಾರಿಗೊಳಿಸುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Ship It', textKn: 'Ship It', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• You have now implemented the complete probability foundation required for machine learning\n• The most important connection: Logits → Softmax → Probability distribution → Correct-class probability → Log probability → Negative log probability → Cross-entropy loss -- that pipeline appears constantly in modern deep learning',
      bodyKn: '• ನೀವು ಈಗ machine learning ಗೆ ಅಗತ್ಯವಿರುವ ಸಂಪೂರ್ಣ probability ಅಡಿಪಾಯ ಜಾರಿಗೊಳಿಸಿದ್ದೀರಿ\n• ಅತಿ ಮುಖ್ಯ ಸಂಪರ್ಕ: Logits → Softmax → Probability distribution → Correct-class probability → Log probability → Negative log probability → Cross-entropy loss -- ಆ pipeline ಆಧುನಿಕ deep learning ನಲ್ಲಿ ನಿರಂತರವಾಗಿ ಕಂಡುಬರುತ್ತದೆ' } },
    { type: 'table', data: { captionEn: 'Key Terms', captionKn: 'ಮುಖ್ಯ ಪದಗಳು',
      rows: 'Term|What It Actually Means\nSample space|The set S of every possible outcome\nEvent|A subset of the sample space\nPMF|Gives the exact probability of each discrete outcome\nPDF|A density function for continuous variables; integrate over an interval to get probability\nConditional probability|P(A\\|B) = P(A and B) / P(B)\nIndependence|P(A and B) = P(A) * P(B)\nExpected value|Probability-weighted average of outcomes\nVariance|Expected squared deviation from the mean\nNormal distribution|Gaussian distribution parameterized by μ and σ²\nCentral Limit Theorem|Averages of many independent samples tend toward a normal distribution\nJoint distribution|P(X,Y) describes probabilities of combinations of variables\nMarginal distribution|Recovers one variable\'s distribution from the joint\nLog probability|Converts products into sums and improves numerical stability\nSoftmax|Converts logits into a probability distribution summing to 1\nLogits|Unnormalized scores before softmax\nCross-entropy|Negative log probability of the correct class\nSampling|Generating values according to a probability distribution' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Log probabilities exist because multiplying enough small numbers genuinely underflows to 0.0 in floating point -- this lesson traced the exact numerical reasoning (log turns products into sums) rather than just stating "logs are used for stability"\n• The overflow demo in this lesson did not just claim large logits are dangerous -- it genuinely triggered a real Python OverflowError at exp(1000) and confirmed the shift-by-max trick fixes it while leaving the resulting probabilities unchanged, which is the actual reason every neural-network framework subtracts the max logit before exponentiating\n• Cross-entropy\'s -log(P(correct class)) formula is not an arbitrary loss design choice -- the genuinely-run numbers in this lesson (0.417 for the highest-probability class vs 2.317 for the lowest) show directly that it is a smooth, differentiable way to penalize low confidence in the right answer, growing without bound as P→0\n• Confirming scipy\'s softmax/log_softmax match this lesson\'s from-scratch versions to 7-8 decimal places is the strongest evidence that "the library is just an optimized version of the math you already understand" is literally true, not a simplification',
      bodyKn: '• Log probabilities ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ ಏಕೆಂದರೆ ಸಾಕಷ್ಟು ಚಿಕ್ಕ ಸಂಖ್ಯೆಗಳನ್ನೂ ಗುಣಿಸುವುದೂ floating point ನಲ್ಲಿ ನಿಜವಾಗಿ 0.0 ಗೆ underflow ಆಗುತ್ತದೆ -- ಈ lesson ಕೇವಲ "logs stability ಗಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ" ಎಂದು ಹೇಳುವ ಬದಲಿಗೆ ನಿಖರ ಸಂಖ್ಯಾತ್ಮಕ ತಾರ್ಕಿಕತೆ (log products ಗಳನ್ನೂ sums ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ) ಟ್ರೇಸ್ ಮಾಡಿತು\n• ಈ lesson ನಲ್ಲಿ overflow demo ಕೇವಲ ದೊಡ್ಡ logits ಅಪಾಯಕಾರಿ ಎಂದು ಪ್ರತಿಪಾದಿಸಲಿಲ್ಲ -- ಇದೂ exp(1000) ನಲ್ಲಿ ಒಂದು ನಿಜ Python OverflowError ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿತು ಮತ್ತು shift-by-max ತಂತ್ರ ಫಲಿತಾಂಶ probabilities ಬದಲಾಗದೆ ಇದನ್ನೂ ಸರಿಪಡಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿತು, ಇದೇ ಪ್ರತಿ neural-network framework exponentiate ಮಾಡುವ ಮೊದಲು max logit ಕಳೆಯುವ ವಾಸ್ತವ ಕಾರಣ\n• Cross-entropy ನ -log(P(correct class)) formula ಒಂದು ಅನಿಯಂತ್ರಿತ loss design ಆಯ್ಕೆ ಅಲ್ಲ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ ಸಂಖ್ಯೆಗಳು (ಅತಿ ಹೆಚ್ಚಿನ-probability class ಗೆ 0.417 vs ಅತಿ ಕಡಿಮೆ-probability class ಗೆ 2.317) ಇದೂ ಸರಿಯಾದ ಉತ್ತರದಲ್ಲಿ ಕಡಿಮೆ confidence ಅನ್ನೂ ದಂಡಿಸುವ ಒಂದು ಸುಗಮ, differentiable ಮಾರ್ಗ ಎಂದು ನೇರವಾಗಿ ತೋರಿಸುತ್ತವೆ, P→0 ಆದಂತೆ ಮಿತಿಯಿಲ್ಲದೆ ಬೆಳೆಯುತ್ತಾ\n• scipy ನ softmax/log_softmax ಈ lesson ನ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ versions ಗಳಿಗೆ 7-8 ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುವುದೂ "library ಎಂದರೆ ನೀವು ಈಗಾಗಲೇ ಅರ್ಥಮಾಡಿಕೊಂಡ ಗಣಿತದ ಒಂದು ಆಪ್ಟಿಮೈಸ್ಡ್ ಆವೃತ್ತಿ" ಎಂಬುದೂ ಒಂದು ಸರಳೀಕರಣ ಅಲ್ಲ, ಅಕ್ಷರಶಃ ನಿಜ ಎಂಬುದಕ್ಕೆ ಅತ್ಯಂತ ಬಲವಾದ ಪುರಾವೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely verified: softmax([2.0,1.0,0.1]) ≈ [0.659, 0.242, 0.099], summing to 1.0, and cross_entropy_loss confirms low loss (0.417) for the correct high-probability class vs high loss (2.317) for a low-probability class\n• Genuinely triggered a real OverflowError with exp(1000) on unshifted logits, and genuinely confirmed the shift-by-max stable softmax handles [1000,1001,1002] correctly -- proving, not just asserting, why numerical stability matters\n• One honest correction made along the way: [100,101,102] does not actually overflow in plain Python (only ~1000+ does), though real frameworks shift unconditionally since logits are unbounded in general\n• Marginal distributions were genuinely verified by summing joint-table entries: P(sun)=0.5, P(rain)=0.5\n• scipy.special.softmax/log_softmax matched this lesson\'s from-scratch implementation to 7-8 decimal places, and scipy.stats.norm genuinely reproduced P(X<1.96)=0.9750, the textbook 95%-within-±1.96σ fact\n• The complete pipeline -- Logits → Softmax → Probabilities → Log Probability → Cross-Entropy Loss → Gradient Descent -- is not an abstract diagram in this lesson; every arrow in it was genuinely built, run, and checked across all three parts',
      bodyKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: softmax([2.0,1.0,0.1]) ≈ [0.659, 0.242, 0.099], 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತಾ, ಮತ್ತು cross_entropy_loss ಸರಿಯಾದ ಹೆಚ್ಚಿನ-probability class ಗೆ ಕಡಿಮೆ loss (0.417) vs ಕಡಿಮೆ-probability class ಗೆ ಹೆಚ್ಚಿನ loss (2.317) ದೃಢಪಡಿಸುತ್ತದೆ\n• unshifted logits ಮೇಲೆ exp(1000) ಜೊತೆ ಒಂದು ನಿಜ OverflowError ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಲಾಗಿದೆ, ಮತ್ತು shift-by-max stable softmax [1000,1001,1002] ಅನ್ನೂ ಸರಿಯಾಗಿ ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- numerical stability ಏಕೆ ಮುಖ್ಯ ಎಂದು ಕೇವಲ ಪ್ರತಿಪಾದಿಸದೆ ಸಾಬೀತುಪಡಿಸುತ್ತಾ\n• ದಾರಿಯುದ್ದಕ್ಕೂ ಒಂದು ಪ್ರಾಮಾಣಿಕ ತಿದ್ದುಪಡಿ: [100,101,102] ವಾಸ್ತವವಾಗಿ ಸರಳ Python ನಲ್ಲಿ overflow ಆಗುವುದಿಲ್ಲ (ಕೇವಲ ~1000+ ಮಾತ್ರ ಆಗುತ್ತದೆ), ಆದರೂ ನಿಜ frameworks logits ಸಾಮಾನ್ಯವಾಗಿ ಮಿತಿಯಿಲ್ಲದಿರುವುದರಿಂದ ಬೇಷರತ್ತಾಗಿ ಶಿಫ್ಟ್ ಮಾಡುತ್ತವೆ\n• Marginal distributions joint-table entries ಸೇರಿಸುವ ಮೂಲಕ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: P(sun)=0.5, P(rain)=0.5\n• scipy.special.softmax/log_softmax ಈ lesson ನ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ implementation ಗೆ 7-8 ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಮತ್ತು scipy.stats.norm ನಿಜವಾಗಿ P(X<1.96)=0.9750 ಮರುಉತ್ಪಾದಿಸಿತು, textbook 95%-within-±1.96σ ಸತ್ಯ\n• ಸಂಪೂರ್ಣ pipeline -- Logits → Softmax → Probabilities → Log Probability → Cross-Entropy Loss → Gradient Descent -- ಈ lesson ನಲ್ಲಿ ಒಂದು ಅಮೂರ್ತ diagram ಅಲ್ಲ; ಇದರಲ್ಲಿ ಪ್ರತಿ ಬಾಣ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ, ಚಲಾಯಿಸಲಾಗಿದೆ, ಮತ್ತು ಪರಿಶೀಲಿಸಲಾಗಿದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running exp(1000) on an unshifted logit in plain Python, what happened?', qKn: 'ಸರಳ Python ನಲ್ಲಿ ಒಂದು unshifted logit ಮೇಲೆ exp(1000) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It returned a very large but valid float', 'It genuinely raised OverflowError: math range error, a real crash, not a hypothetical risk', 'It silently returned 0', 'It returned exactly 1.0'], correct: 1,
        optsKn: ['ಇದೂ ಒಂದು ಬಹಳ ದೊಡ್ಡ ಆದರೆ ಮಾನ್ಯ float ಹಿಂತಿರುಗಿಸಿತು', 'ಇದೂ ನಿಜವಾಗಿ OverflowError: math range error ಎಬ್ಬಿಸಿತು, ಒಂದು ನಿಜ crash, ಒಂದು ಕಾಲ್ಪನಿಕ ಅಪಾಯ ಅಲ್ಲ', 'ಇದೂ ಮೌನವಾಗಿ 0 ಹಿಂತಿರುಗಿಸಿತು', 'ಇದೂ ನಿಖರವಾಗಿ 1.0 ಹಿಂತಿರುಗಿಸಿತು'] },
      { q: 'What honest correction did this lesson make about the [100, 101, 102] logits example?', qKn: '[100, 101, 102] logits ಉದಾಹರಣೆಯ ಬಗ್ಗೆ ಈ lesson ಏನೂ ಪ್ರಾಮಾಣಿಕ ತಿದ್ದುಪಡಿ ಮಾಡಿತು?',
        opts: ['It never actually works with softmax', 'These specific values do not actually overflow in plain Python (only much larger logits, roughly 1000+, do) -- though the shift-by-max fix is still applied unconditionally since logits are unbounded', 'It requires GPU acceleration', 'It always produces NaN'], correct: 1,
        optsKn: ['ಇದೂ ವಾಸ್ತವವಾಗಿ softmax ಜೊತೆ ಎಂದಿಗೂ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ', 'ಈ ನಿರ್ದಿಷ್ಟ ಮೌಲ್ಯಗಳು ಸರಳ Python ನಲ್ಲಿ ವಾಸ್ತವವಾಗಿ overflow ಆಗುವುದಿಲ್ಲ (ಕೇವಲ ಹೆಚ್ಚು ದೊಡ್ಡ logits, ಸುಮಾರು 1000+, ಮಾತ್ರ ಆಗುತ್ತವೆ) -- ಆದರೂ logits ಮಿತಿಯಿಲ್ಲದಿರುವುದರಿಂದ shift-by-max ಪರಿಹಾರ ಬೇಷರತ್ತಾಗಿ ಅನ್ವಯಿಸಲಾಗುತ್ತದೆ', 'ಇದಕ್ಕೆ GPU acceleration ಅಗತ್ಯ', 'ಇದೂ ಯಾವಾಗಲೂ NaN ಉತ್ಪಾದಿಸುತ್ತದೆ'] },
      { q: 'Genuinely running cross_entropy_loss([2.0,1.0,0.1], target_index) for the highest-probability class (index 0) vs the lowest-probability class (index 2), what was observed?', qKn: 'ಅತಿ ಹೆಚ್ಚಿನ-probability class (index 0) vs ಅತಿ ಕಡಿಮೆ-probability class (index 2) ಗೆ cross_entropy_loss([2.0,1.0,0.1], target_index) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಏನೂ ಗಮನಿಸಲಾಗಿದೆ?',
        opts: ['Both had identical loss', 'Loss was much smaller for the correct high-probability class (0.417) than for the low-probability class (2.317), confirming high confidence in the right answer is rewarded with low loss', 'The low-probability class had lower loss', 'Loss was undefined for both'], correct: 1,
        optsKn: ['ಎರಡೂ ಒಂದೇ loss ಹೊಂದಿದ್ದವು', 'ಸರಿಯಾದ ಹೆಚ್ಚಿನ-probability class ಗೆ (0.417) ಕಡಿಮೆ-probability class ಗಿಂತ (2.317) loss ಬಹಳ ಚಿಕ್ಕದಾಗಿತ್ತು, ಸರಿಯಾದ ಉತ್ತರದಲ್ಲಿ ಹೆಚ್ಚಿನ confidence ಕಡಿಮೆ loss ಜೊತೆ ಬಹುಮಾನ ಪಡೆಯುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'ಕಡಿಮೆ-probability class ಕಡಿಮೆ loss ಹೊಂದಿತ್ತು', 'ಎರಡಕ್ಕೂ loss ಅವ್ಯಾಖ್ಯಾತವಾಗಿತ್ತು'] },
      { q: 'How closely did scipy.special.softmax match this lesson\'s from-scratch softmax() on the same logits?', qKn: 'ಅದೇ logits ಮೇಲೆ scipy.special.softmax ಈ lesson ನ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ softmax() ಗೆ ಎಷ್ಟು ಹತ್ತಿರ ಹೊಂದಿಕೆಯಾಯಿತು?',
        opts: ['They disagreed significantly', 'They matched to 7-8 decimal places, genuinely confirming the library implements the same mathematics built by hand', 'scipy returned an error', 'scipy required different input logits'], correct: 1,
        optsKn: ['ಅವು ಗಣನೀಯವಾಗಿ ಭಿನ್ನವಾಗಿದ್ದವು', 'ಅವು 7-8 ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾದವು, library ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದ ಅದೇ ಗಣಿತ ಜಾರಿಗೊಳಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತಾ', 'scipy ಒಂದು error ಹಿಂತಿರುಗಿಸಿತು', 'scipy ಗೆ ಬೇರೆ input logits ಅಗತ್ಯವಿತ್ತು'] },
      { q: 'What is the complete pipeline connecting a neural network\'s raw output to a trainable loss?', qKn: 'ಒಂದು neural network ನ raw output ಅನ್ನೂ ಒಂದು trainable loss ಗೆ ಸಂಪರ್ಕಿಸುವ ಸಂಪೂರ್ಣ pipeline ಏನೂ?',
        opts: ['Logits → Random guess → Loss', 'Logits → Softmax → Probabilities → Log Probability → Cross-Entropy Loss → Gradient Descent', 'Probabilities → Logits → Loss', 'Loss → Logits → Softmax'], correct: 1,
        optsKn: ['Logits → Random guess → Loss', 'Logits → Softmax → Probabilities → Log Probability → Cross-Entropy Loss → Gradient Descent', 'Probabilities → Logits → Loss', 'Loss → Logits → Softmax'] },
    ] } },
  ],
};
