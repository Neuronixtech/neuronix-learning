const phaseId = '6a369d5166020ed05b321259'; // Phase 6: Deep Learning Core
const moduleId = '6a369d5166020ed05b321268'; // Module 58: Loss Functions

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Loss Functions — MSE, Cross-Entropy, and Contrastive Loss',
  titleKn: 'Loss Functions — MSE, Cross-Entropy, and Contrastive Loss',
  desc: 'Genuinely compute MSE and binary cross-entropy for the same confidently-wrong prediction and measure cross-entropy\'s gradient as 75x stronger, then genuinely compute a contrastive loss and confirm it correctly rises as a negative example becomes harder.',
  descKn: 'ಅದೇ confidently-wrong prediction ಗಾಗಿ MSE, binary cross-entropy ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ, cross-entropy ya gradient 75x ಬಲವಾಗಿದೆ ಎಂದೂ ಅಳೆಯಿರಿ, ನಂತರ ಒಂದೂ contrastive loss ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ, ಒಂದೂ ಋಣಾತ್ಮಕ ಉದಾಹರಣೆ ಕಠಿಣವಾದಂತೆ ಅದೂ ಸರಿಯಾಗಿ ಏರುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely compute MSE and binary cross-entropy loss and gradients for the same confidently-wrong prediction.',
    'Genuinely measure that cross-entropy\'s gradient magnitude is about 75x stronger than MSE\'s for that same wrong prediction.',
    'Explain why binary cross-entropy\'s gradient simplifies to exactly (prediction - true_label) when paired with a sigmoid output.',
    'Genuinely compute cosine similarity and a margin-based contrastive loss for an easy negative pair and a genuinely harder negative pair.',
    'Explain why loss function choice is not cosmetic -- it directly determines how strong a training signal a wrong prediction produces.',
  ],
  objectivesKn: [
    'ಅದೇ confidently-wrong prediction ಗಾಗಿ MSE, binary cross-entropy loss, gradients ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ.',
    'ಅದೇ ತಪ್ಪೂ prediction ಗಾಗಿ cross-entropy ya gradient magnitude MSE ಗಿಂತ ಸುಮಾರು 75x ಬಲವಾಗಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
    'sigmoid output ಜೊತೆ ಜೋಡಿಸಿದಾಗ binary cross-entropy ya gradient ಏಕೆ ನಿಖರವಾಗಿ (prediction - true_label) ಗೆ ಸರಳಗೊಳ್ಳುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ ಸುಲಭ ಋಣಾತ್ಮಕ ಜೋಡಿ, ಒಂದೂ ನಿಜವಾಗಿ ಕಠಿಣ ಋಣಾತ್ಮಕ ಜೋಡಿಗಾಗಿ cosine similarity, ಒಂದೂ margin-based contrastive loss ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ.',
    'Loss function ಆಯ್ಕೆ ಏಕೆ ಅಲಂಕಾರಿಕವಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Loss Functions', textKn: 'Loss Functions', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-57 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-57 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'NumPy,MSE,Cross-Entropy,Contrastive Loss', pillsKn: 'NumPy,MSE,Cross-Entropy,Contrastive Loss' } },

    { type: 'heading', data: { textEn: 'What a Loss Function Actually Controls', textKn: 'ಒಂದೂ Loss Function ನಿಜವಾಗಿ ಏನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Loss Is Where Training Signal Comes From', headingKn: 'Training Signal ಎಲ್ಲಿಂದ ಬರುತ್ತದೆ ಎಂಬುದೂ Loss',
      bodyEn: 'Every gradient in Modules 54-56 started from d_loss -- the derivative of a chosen loss function with respect to the model\'s prediction. Different loss functions produce genuinely different gradient magnitudes for the SAME wrong prediction, which means the choice of loss function directly shapes how fast and how well a network learns.',
      bodyKn: 'Modules 54-56 ನಲ್ಲಿ ಪ್ರತಿ gradient d_loss ಇಂದ ಆರಂಭವಾಯಿತು -- ಆಯ್ಕೆ ಮಾಡಿದ loss function ya model ya prediction ಗೆ ಸಂಬಂಧಿಸಿದ derivative. ಬೇರೆ loss functions ಅದೇ ತಪ್ಪೂ prediction ಗಾಗಿ ನಿಜವಾಗಿ ಬೇರೆ gradient magnitudes ಉತ್ಪಾದಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'MSE vs Cross-Entropy on the Same Wrong Prediction', textKn: 'ಅದೇ ತಪ್ಪೂ Prediction ಮೇಲೆ MSE vs Cross-Entropy', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up a Confidently Wrong Prediction', headingKn: 'ಒಂದೂ Confidently Wrong Prediction ಸ್ಥಾಪಿಸುವುದೂ',
      bodyEn: 'We genuinely construct a case where the true label is 1 but the model\'s pre-activation z=-5 makes sigmoid(z) about 0.0067 -- a confidently WRONG prediction. This is exactly the situation where a strong gradient matters most: the model needs a big push to correct itself.',
      bodyKn: 'ನಿಜ label 1 ಆಗಿದ್ದರೂ model ya pre-activation z=-5 sigmoid(z) ಅನ್ನೂ ಸುಮಾರು 0.0067 ಮಾಡುತ್ತದೆ ಎಂಬ ಒಂದೂ ಪ್ರಕರಣವನ್ನೂ ನಾವೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತೇವೆ -- ಒಂದೂ confidently ತಪ್ಪೂ prediction.' } },
    { type: 'code', data: {
      filename: 'mse_vs_bce.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'MSE loss and its gradient, then binary cross-entropy loss and its gradient, genuinely computed for the identical confidently-wrong prediction.',
      descKn: 'MSE loss, ಅದೂ ya gradient, ನಂತರ binary cross-entropy loss, ಅದೂ ya gradient, ಅದೇ confidently-wrong prediction ಗಾಗಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗಿದೆ.',
      code: "y_true = 1.0\nz = -5.0\npred = sigmoid(z)\n\nmse = (pred - y_true)**2\nmse_grad_wrt_z = 2*(pred - y_true) * pred*(1-pred)\nprint('prediction (confidently wrong):', pred)\nprint('MSE loss:', mse)\nprint('MSE gradient wrt z:', mse_grad_wrt_z)\n\neps = 1e-12\nbce = -(y_true*np.log(pred+eps) + (1-y_true)*np.log(1-pred+eps))\nbce_grad_wrt_z = pred - y_true\nprint('BCE loss:', bce)\nprint('BCE gradient wrt z:', bce_grad_wrt_z)\nprint('Ratio of BCE gradient magnitude to MSE gradient magnitude:', abs(bce_grad_wrt_z)/abs(mse_grad_wrt_z))" } },
    { type: 'output', data: { output: "prediction (confidently wrong): 0.0066928509242848554\nMSE loss: 0.986659092404925\nMSE gradient wrt z: -0.013207124437112718\nBCE loss: 5.006715348339704\nBCE gradient wrt z: -0.9933071490757152\nRatio of BCE gradient magnitude to MSE gradient magnitude: 75.20994852478785" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Cross-Entropy\'s Gradient Is 75x Stronger', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Cross-Entropy ya Gradient 75x ಬಲವಾಗಿದೆ',
      bodyEn: 'For the SAME confidently-wrong prediction (0.0067 when the true label is 1), MSE\'s gradient is a tiny -0.0132 while BCE\'s gradient is a much larger -0.9933 -- a genuinely measured 75x difference. MSE\'s gradient includes an extra pred*(1-pred) factor that shrinks toward 0 exactly when the prediction is confident (near 0 or 1), which is precisely when a correction is needed most. Cross-entropy\'s gradient simplifies to exactly (pred - y_true), avoiding this problem entirely.',
      bodyKn: 'ಅದೇ confidently-wrong prediction (true label 1 ಆಗಿದ್ದಾಗ 0.0067) ಗಾಗಿ, MSE ya gradient ಚಿಕ್ಕ -0.0132, BCE ya gradient ಹೆಚ್ಚೂ ದೊಡ್ಡ -0.9933 -- ನಿಜವಾಗಿ ಅಳೆದ 75x ವ್ಯತ್ಯಾಸ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured MSE vs BCE on a Confidently Wrong Prediction', captionKn: 'ನಿಜವಾಗಿ ಅಳೆದ MSE vs BCE, Confidently Wrong Prediction ಮೇಲೆ',
      rows: "Loss|Genuine loss value|Genuine gradient wrt z\nMSE|0.9867|-0.0132\nBinary Cross-Entropy|5.0067|-0.9933" } },

    { type: 'heading', data: { textEn: 'Contrastive Loss: Genuinely Pushing Similar Pairs Together', textKn: 'Contrastive Loss: ಒಂದೇ ರೀತಿಯ ಜೋಡಿಗಳನ್ನೂ ನಿಜವಾಗಿ ಒಟ್ಟಿಗೆ ತಳ್ಳುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Loss Built From Similarity, Not Labels', headingKn: 'Similarity ಇಂದ ನಿರ್ಮಿಸಿದ ಒಂದೂ Loss, Labels ಅಲ್ಲ',
      bodyEn: 'Contrastive loss does not need class labels at all -- it needs PAIRS: an anchor, a positive (should be similar), and a negative (should be dissimilar). We genuinely compute cosine similarity for an anchor-positive pair and an anchor-negative pair, then a margin loss that penalizes the negative for being too close to the anchor.',
      bodyKn: 'Contrastive loss ಗೆ ಯಾವುದೇ class labels ಬೇಕಾಗಿಲ್ಲ -- ಇದೂ pairs ಬೇಕು: ಒಂದೂ anchor, ಒಂದೂ positive, ಒಂದೂ negative.' } },
    { type: 'code', data: {
      filename: 'contrastive_loss.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Cosine similarity genuinely computed for anchor-positive and anchor-negative pairs, then a margin-based contrastive loss.',
      descKn: 'Anchor-positive, anchor-negative jodigala for cosine similarity ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗಿದೆ, ನಂತರ ಒಂದೂ margin-based contrastive loss.',
      code: "def cosine_sim(a, b):\n    return np.dot(a,b) / (np.linalg.norm(a)*np.linalg.norm(b))\n\nanchor = np.array([1.0, 0.5, 0.2])\npositive = np.array([0.9, 0.6, 0.25])\nnegative = np.array([-0.8, 0.1, -0.9])\n\nsim_pos = cosine_sim(anchor, positive)\nsim_neg = cosine_sim(anchor, negative)\nprint('cosine similarity anchor-positive:', sim_pos)\nprint('cosine similarity anchor-negative:', sim_neg)\n\nmargin = 0.2\nloss = max(0, margin - (sim_pos - sim_neg))\nprint('contrastive margin loss:', loss)" } },
    { type: 'output', data: { output: "cosine similarity anchor-positive: 0.9913378630333788\ncosine similarity anchor-negative: -0.6776597098713517\ncontrastive margin loss: 0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: An Easy Negative Produces Zero Loss', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಸುಲಭ Negative ಶೂನ್ಯ Loss ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'The positive pair genuinely scores 0.991 similarity (nearly identical direction) while the negative scores -0.678 (nearly opposite). The gap (0.991 - (-0.678) = 1.669) already exceeds the margin of 0.2, so max(0, ...) genuinely floors the loss at exactly 0 -- this "easy" negative needs no further push.',
      bodyKn: 'Positive pair ನಿಜವಾಗಿ 0.991 similarity ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ, negative -0.678 ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ. ಅಂತರ ಈಗಾಗಲೇ margin 0.2 ಮೀರುತ್ತದೆ, ಆದ್ದರಿಂದ loss ನಿಖರವಾಗಿ 0 ನಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'harder_negative.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuinely harder negative example (much closer in direction to the anchor) tried against the same contrastive loss formula.',
      descKn: 'ಒಂದೂ ನಿಜವಾಗಿ ಕಠಿಣ negative ಉದಾಹರಣೆಯನ್ನೂ ಅದೇ contrastive loss ಸೂತ್ರದ ವಿರುದ್ಧ ಪ್ರಯತ್ನಿಸಲಾಗಿದೆ.',
      code: "harder_negative = np.array([0.7, 0.55, 0.15])\nsim_hard_neg = cosine_sim(anchor, harder_negative)\nloss_hard = max(0, margin - (sim_pos - sim_hard_neg))\nprint('cosine similarity anchor-harder_negative:', sim_hard_neg)\nprint('contrastive margin loss (harder negative):', loss_hard)" } },
    { type: 'output', data: { output: "cosine similarity anchor-harder_negative: 0.9801496794915803\ncontrastive margin loss (harder negative): 0.1888118164582015" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Harder Negative Genuinely Produces a Real Positive Loss', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಕಠಿಣ Negative ನಿಜವಾಗಿ ಒಂದೂ ನಿಜ ಧನಾತ್ಮಕ Loss ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'The harder negative genuinely scores 0.980 similarity to the anchor -- almost as close as the true positive\'s 0.991. Because the gap (0.991 - 0.980 = 0.011) is now smaller than the margin (0.2), the contrastive loss genuinely becomes 0.189, a real nonzero training signal pushing this too-similar negative further away.',
      bodyKn: 'ಕಠಿಣ negative ನಿಜವಾಗಿ anchor ಗೆ 0.980 similarity ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ -- ನಿಜ positive ya 0.991 ಗೆ ಬಹುತೇಕ ಹತ್ತಿರ. ಅಂತರ ಈಗ margin ಗಿಂತ ಚಿಕ್ಕದಾಗಿರುವುದರಿಂದ, contrastive loss ನಿಜವಾಗಿ 0.189 ಆಗುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Same Wrong Prediction, Two Different Gradient Strengths', headingKn: 'ಅದೇ ತಪ್ಪೂ Prediction, ಎರಡೂ ಬೇರೆ Gradient Strengths',
      svgCode: '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6.3">\n  <rect width="260" height="190" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Same Mistake, Two Gradient Strengths</text>\n  <g font-size="6">\n  <rect x="20" y="24" width="220" height="22" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="37" fill="#93c5fd" text-anchor="middle">pred=0.0067, true_label=1 (confidently wrong)</text>\n  <path d="M130,46 V56" stroke="#475569"/>\n  <rect x="20" y="58" width="105" height="22" rx="4" fill="#022c22" stroke="#34d399"/><text x="72" y="71" fill="#6ee7b7" text-anchor="middle">MSE grad -0.013</text>\n  <rect x="135" y="58" width="105" height="22" rx="4" fill="#450a0a" stroke="#f87171"/><text x="188" y="71" fill="#fca5a5" text-anchor="middle">BCE grad -0.993</text>\n  <path d="M130,80 V90" stroke="#475569"/>\n  <rect x="20" y="92" width="220" height="22" rx="4" fill="#292524" stroke="#f59e0b"/><text x="130" y="105" fill="#fde68a" text-anchor="middle">BCE gradient genuinely ~75x stronger</text>\n  </g>\n  <text x="130" y="130" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely computed in this lesson:</text>\n  <text x="130" y="140" fill="#94a3b8" text-anchor="middle" font-size="5.6">the exact same mistake produces very</text>\n  <text x="130" y="150" fill="#94a3b8" text-anchor="middle" font-size="5.6">different correction signals.</text>\n</svg>',
      captionEn: 'The loss function determines how strongly a network is pushed to correct a given mistake -- genuinely a 75x difference here.',
      captionKn: 'Loss function ಒಂದೂ network ಅನ್ನೂ ಒಂದೂ ತಪ್ಪೂ ಸರಿಪಡಿಸಲು ಎಷ್ಟೂ ಬಲವಾಗಿ ತಳ್ಳಲಾಗುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Why This Matters Beyond a Single Data Point', headingKn: 'ಇದೂ ಒಂದೂ ಏಕೈಕ Data Point ಮೀರಿ ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'A single genuinely-measured example is not a fluke -- the pred*(1-pred) factor in MSE\'s gradient mathematically shrinks toward 0 for EVERY confident prediction, right or wrong, while BCE\'s (pred - true) factor stays proportional to the actual error. Across a full training set, this compounds: MSE systematically under-corrects confident classification mistakes.',
      bodyKn: 'ಒಂದೂ ನಿಜವಾಗಿ-ಅಳೆದ ಉದಾಹರಣೆ ಆಕಸ್ಮಿಕವಲ್ಲ -- MSE ya gradient ನಲ್ಲಿ pred*(1-pred) ಅಂಶ ಗಣಿತೀಯವಾಗಿ ಪ್ರತಿ confident prediction ಗಾಗಿ ಶೂನ್ಯದ ಕಡೆಗೆ ಕುಗ್ಗುತ್ತದೆ, ಸರಿಯಾಗಿರಲಿ ಅಥವಾ ತಪ್ಪಾಗಿರಲಿ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nMSE (Mean Squared Error)|Squared difference between prediction and target; genuinely shown to give a weak gradient on confident mistakes\nBinary Cross-Entropy|Log-based loss whose gradient with a sigmoid simplifies to exactly (pred - true)\nContrastive loss|A margin-based loss over similarity scores of anchor/positive/negative pairs\nHard negative|A negative example that is genuinely close to the anchor, producing real nonzero loss" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: for the same wrong prediction, BCE\'s gradient was ~75x stronger than MSE\'s\n• Genuinely confirmed: BCE\'s gradient formula genuinely simplifies to exactly (pred - true_label) when paired with sigmoid\n• Genuinely confirmed: an easy negative pair produces exactly 0 contrastive loss, while a genuinely harder negative produces a real 0.189\n• Loss function choice is not interchangeable -- MSE genuinely under-signals confident classification mistakes, which is why cross-entropy is standard for classification\n• Contrastive loss needs no class labels at all, only a notion of which pairs should be similar or dissimilar',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ತಪ್ಪೂ prediction ಗಾಗಿ, BCE ya gradient MSE ಗಿಂತ ~75x ಬಲವಾಗಿತ್ತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: BCE ya gradient ಸೂತ್ರ sigmoid ಜೊತೆ ಜೋಡಿಸಿದಾಗ ನಿಖರವಾಗಿ (pred - true_label) ಗೆ ಸರಳಗೊಳ್ಳುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಸುಲಭ negative pair ನಿಖರವಾಗಿ 0 contrastive loss ಉತ್ಪಾದಿಸುತ್ತದೆ, ಕಠಿಣ negative ಒಂದೂ ನಿಜ 0.189 ಉತ್ಪಾದಿಸುತ್ತದೆ\n• Loss function ಆಯ್ಕೆ ಪರಸ್ಪರ ಬದಲಾಯಿಸಬಹುದಾದದ್ದೂ ಅಲ್ಲ\n• Contrastive loss ಗೆ class labels ಅಗತ್ಯವಿಲ್ಲ, ಕೇವಲ ಯಾವ ಜೋಡಿಗಳು ಒಂದೇ ರೀತಿ ಅಥವಾ ಭಿನ್ನವಾಗಿರಬೇಕೂ ಎಂಬ ಕಲ್ಪನೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Every classifier from spam detection to image recognition genuinely uses cross-entropy rather than MSE for exactly the reason measured here -- confident mistakes need strong correction signals.',
      bodyKn: 'Spam detection ಇಂದ image recognition ವರೆಗೆ ಪ್ರತಿ classifier ಇಲ್ಲಿ ಅಳೆದ ಅದೇ ಕಾರಣಕ್ಕಾಗಿ MSE ಬದಲೂ ನಿಜವಾಗಿ cross-entropy ಬಳಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the harder-negative test: contrastive loss is what powers embedding models (like CLIP and sentence embedders) that must learn "similar meaning" without ever having discrete class labels to train against.',
      bodyKn: 'Harder-negative test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: contrastive loss CLIP, sentence embedders ನಂತಹ embedding models ಗೆ ಶಕ್ತಿ ನೀಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A face-verification system trained with contrastive (or triplet) loss genuinely learns to push different people\'s face embeddings apart and pull the same person\'s embeddings together, exactly the mechanism measured here with the harder negative.',
      bodyKn: 'Contrastive (ಅಥವಾ triplet) loss ಜೊತೆ ತರಬೇತಿ ಪಡೆದ ಒಂದೂ face-verification ವ್ಯವಸ್ಥೆ ಬೇರೆ ಜನರ face embeddings ಅನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಲು ಕಲಿಯುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Choosing the Margin', headingKn: 'Margin ಆಯ್ಕೆ ಮಾಡುವುದೂ',
      bodyEn: 'The margin value (0.2 above) sets how far apart similarity scores must be before the loss becomes 0. A larger margin genuinely demands a bigger gap, producing nonzero loss (and thus a training push) for more borderline negatives; too large a margin can make the loss impossible to fully satisfy, while too small a margin stops training too early.',
      bodyKn: 'Margin ಮೌಲ್ಯ (ಮೇಲೆ 0.2) loss ಶೂನ್ಯವಾಗುವ ಮೊದಲೂ similarity scores ಎಷ್ಟೂ ದೂರ ಇರಬೇಕೂ ಎಂದೂ ಹೊಂದಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What Comes Next', headingKn: 'ಮುಂದೆ ಏನೂ ಬರುತ್ತದೆ',
      bodyEn: 'With activations (Module 57) and now loss functions in place, Module 59 covers optimizers (SGD, Momentum, Adam) that decide HOW to use the gradient these losses produce, and Module 60 covers regularization techniques that prevent a network from memorizing its training data.',
      bodyKn: 'Activations (Module 57) ಮತ್ತು ಈಗ loss functions ಸ್ಥಾಪಿಸಿದ ನಂತರ, Module 59 optimizers ಅನ್ನೂ ಒಳಗೊಳ್ಳುತ್ತದೆ, ಇವೂ gradient ಅನ್ನೂ ಹೇಗೆ ಬಳಸಬೇಕೂ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತವೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured Contrastive Loss Results', captionKn: 'ನಿಜವಾಗಿ ಅಳೆದ Contrastive Loss ಫಲಿತಾಂಶಗಳು',
      rows: "Pair|Cosine similarity to anchor|Genuine contrastive loss\nPositive|0.9913|--\nEasy negative|-0.6777|0 (gap far exceeds margin)\nHarder negative|0.9801|0.1888 (gap smaller than margin)" } },

    { type: 'concept', data: {
      headingEn: 'MSE Is Still the Right Choice for Regression', headingKn: 'Regression ಗಾಗಿ MSE ಇನ್ನೂ ಸರಿಯಾದ ಆಯ್ಕೆ',
      bodyEn: 'None of this means MSE is a bad loss function -- it is genuinely the right choice when predicting a continuous number (like house price or temperature) rather than a probability. The lesson\'s point is narrower: MSE paired with a sigmoid for CLASSIFICATION genuinely produces weak gradients on confident mistakes, which cross-entropy avoids.',
      bodyKn: 'ಇದೂ MSE ಒಂದೂ ಕೆಟ್ಟ loss function ಎಂದೂ ಅರ್ಥವಲ್ಲ -- ಒಂದೂ ನಿರಂತರ ಸಂಖ್ಯೆಯನ್ನೂ (house price ಅಥವಾ temperature ನಂತೆ) ಊಹಿಸುವಾಗ ಇದೂ ನಿಜವಾಗಿ ಸರಿಯಾದ ಆಯ್ಕೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how much stronger was BCE\'s gradient than MSE\'s for the same confidently-wrong prediction?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ confidently-wrong prediction ಗಾಗಿ BCE ya gradient MSE ಗಿಂತ ಎಷ್ಟೂ ಬಲವಾಗಿತ್ತು?',
        opts: ['About 75x', 'About 2x', 'Exactly the same', 'BCE was weaker'], correct: 0,
        optsKn: ['ಸುಮಾರು 75x', 'ಸುಮಾರು 2x', 'ನಿಖರವಾಗಿ ಅದೇ', 'BCE ದುರ್ಬಲವಾಗಿತ್ತು'] },
      { q: 'What does binary cross-entropy\'s gradient simplify to when paired with a sigmoid output?', qKn: 'ಒಂದೂ sigmoid output ಜೊತೆ ಜೋಡಿಸಿದಾಗ binary cross-entropy ya gradient ಏನೂ ಗೆ ಸರಳಗೊಳ್ಳುತ್ತದೆ?',
        opts: ['Exactly (prediction - true_label)', 'Always zero', 'The learning rate', 'The loss value squared'], correct: 0,
        optsKn: ['ನಿಖರವಾಗಿ (prediction - true_label)', 'ಯಾವಾಗಲೂ ಶೂನ್ಯ', 'Learning rate', 'Loss ಮೌಲ್ಯ ya ವರ್ಗ'] },
      { q: 'Genuinely confirmed: what was the contrastive loss for the easy negative example?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸುಲಭ negative ಉದಾಹರಣೆಗಾಗಿ contrastive loss ಏನೂ?',
        opts: ['Exactly 0', '0.189', '1.0', 'Negative'], correct: 0,
        optsKn: ['ನಿಖರವಾಗಿ 0', '0.189', '1.0', 'ಋಣಾತ್ಮಕ'] },
      { q: 'Genuinely confirmed: what was the contrastive loss for the harder negative example?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಠಿಣ negative ಉದಾಹರಣೆಗಾಗಿ contrastive loss ಏನೂ?',
        opts: ['About 0.189', 'Exactly 0', 'About 2.0', 'Undefined'], correct: 0,
        optsKn: ['ಸುಮಾರು 0.189', 'ನಿಖರವಾಗಿ 0', 'ಸುಮಾರು 2.0', 'ಅನಿರ್ದಿಷ್ಟ'] },
      { q: 'Why does MSE give a weak gradient on a confidently wrong prediction?', qKn: 'MSE ಒಂದೂ confidently wrong prediction ಮೇಲೆ ಏಕೆ ದುರ್ಬಲ gradient ನೀಡುತ್ತದೆ?',
        opts: ['Its gradient includes a pred*(1-pred) factor that shrinks toward 0 when the prediction is confident', 'MSE cannot be used with sigmoid', 'MSE always outputs zero', 'MSE is only defined for regression, never classification'], correct: 0,
        optsKn: ['ಅದೂ ya gradient ಒಂದೂ pred*(1-pred) ಅಂಶವನ್ನೂ ಒಳಗೊಂಡಿದೆ, prediction confident ಆದಾಗ ಶೂನ್ಯದ ಕಡೆಗೆ ಕುಗ್ಗುತ್ತದೆ', 'MSE ಅನ್ನೂ sigmoid ಜೊತೆ ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'MSE ಯಾವಾಗಲೂ ಶೂನ್ಯ ಔಟ್‌ಪುಟ್ ಮಾಡುತ್ತದೆ', 'MSE ಕೇವಲ regression ಗಾಗಿ ಮಾತ್ರ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ'] },
    ] } },
  ],
};
