const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5866020ed05b321391'; // Module 151: Scaling Laws

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 25,
  difficulty: 'advanced',
  status: 'published',
  title: 'Scaling Laws & Chinchilla (Part 1) — The N/D/C Trade-Off',
  titleKn: 'Scaling Laws & Chinchilla (Part 1) — The N/D/C Trade-Off',
  desc: 'Genuinely confirm GPT-3\'s stated 1.7 tokens/parameter ratio and Chinchilla\'s stated 20 tokens/parameter ratio by direct division, setting up the N (parameters) vs D (training tokens) trade-off under a fixed compute budget C ~ 6ND that Part 2 will optimize mathematically.',
  descKn: 'GPT-3 ನ ಪ್ರತಿಪಾದಿತ 1.7 tokens/parameter ಅನುಪಾತ ಮತ್ತು Chinchilla ನ ಪ್ರತಿಪಾದಿತ 20 tokens/parameter ಅನುಪಾತ ಅನ್ನೂ ನೇರ ಭಾಗಾಕಾರ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, ಒಂದೂ ಸ್ಥಿರ compute budget C ~ 6ND ಅಡಿಯಲ್ಲಿ N (parameters) vs D (training tokens) trade-off ಸ್ಥಾಪಿಸಿ, Part 2 ಗಣಿತೀಯವಾಗಿ optimize ಮಾಡುತ್ತದೆ.',
  objectives: [
    'Explain what parameters (N), training tokens (D), and compute (C) represent.',
    'Explain why model size and training data must be balanced.',
    'Understand the approximate training-compute relationship C ~ 6ND.',
    'Explain why very large models with too little data can be under-trained.',
  ],
  objectivesKn: [
    'Parameters (N), training tokens (D), ಮತ್ತು compute (C) ಏನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.',
    'Model size ಮತ್ತು training data ಏಕೆ ಸಮತೋಲಿತವಾಗಿರಬೇಕು ಎಂದು ವಿವರಿಸಿ.',
    'ಸರಿಸುಮಾರು training-compute ಸಂಬಂಧ C ~ 6ND ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಕಡಿಮೆ data ಜೊತೆ ಬಹಳ ದೊಡ್ಡ models ಏಕೆ under-trained ಆಗಬಹುದು ಎಂದು ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Scaling Laws & Chinchilla — The N/D/C Trade-Off', textKn: 'Scaling Laws & Chinchilla — The N/D/C Trade-Off', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python · Prerequisites: Full Transformer (Module 145), GPT (Module 146) · Time: ~45 minutes total lesson · Part 1 of 3',
      bodyKn: '• Type: Learn · Language: Python · Prerequisites: Full Transformer (Module 145), GPT (Module 146) · Time: ~45 ನಿಮಿಷಗಳು total lesson · Part 1 of 3',
      pillsEn: 'Python,Prereq: Modules 145,146,~25 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Modules 145,146,~25 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Two Knobs, One Budget', textKn: 'Two Knobs, One Budget', level: 'H2' } },
    { type: 'math', data: {
      formula: 'C ~ 6ND          N = parameters,  D = training tokens,  C = training FLOPs',
      descEn: '• Given a fixed compute budget C, increasing N forces D down and vice versa -- N determines model capacity, D determines how much training experience the model gets to exploit that capacity',
      descKn: '• ಒಂದೂ ಸ್ಥಿರ compute budget C ನೀಡಿದಾಗ, N ಹೆಚ್ಚಿಸುವುದೂ D ಅನ್ನೂ ಕೆಳಗೆ ಒತ್ತಾಯಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರತಿಯಾಗಿ -- N model ಸಾಮರ್ಥ್ಯ ನಿರ್ಧರಿಸುತ್ತದೆ, D model ಆ ಸಾಮರ್ಥ್ಯ ಬಳಸಿಕೊಳ್ಳಲು ಎಷ್ಟು training experience ಪಡೆಯುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'The Factor of 6, Explained', headingKn: '6 ಎಂಬ ಅಂಶ, ವಿವರಿಸಲಾಗಿದೆ',
      bodyEn: '• The 6 in C ~ 6ND comes from a standard FLOPs count: a forward pass costs roughly 2N FLOPs per token (one multiply-add per parameter), and a backward pass costs roughly twice that, about 4N FLOPs per token -- 2N + 4N = 6N FLOPs per token, times D tokens gives C ~ 6ND\n• This is the same FLOPs-counting convention used in the original scaling-law papers (Kaplan et al. 2020, Hoffmann et al. 2022) -- it is a well-established approximation, not something specific to any one model architecture',
      bodyKn: '• C ~ 6ND ನಲ್ಲಿನ 6 ಒಂದೂ standard FLOPs ಎಣಿಕೆಯಿಂದ ಬರುತ್ತದೆ: ಒಂದೂ forward pass ಪ್ರತಿ token ಗೆ ಸರಿಸುಮಾರು 2N FLOPs ವೆಚ್ಚ ಮಾಡುತ್ತದೆ (ಪ್ರತಿ parameter ಗೆ ಒಂದೂ multiply-add), ಮತ್ತು ಒಂದೂ backward pass ಸರಿಸುಮಾರು ಅದರ ಎರಡು ಪಟ್ಟು ವೆಚ್ಚ ಮಾಡುತ್ತದೆ, ಸುಮಾರು 4N FLOPs ಪ್ರತಿ token -- 2N + 4N = 6N FLOPs ಪ್ರತಿ token, D tokens ಜೊತೆ ಗುಣಿಸಿದಾಗ C ~ 6ND ನೀಡುತ್ತದೆ\n• ಇದೂ ಮೂಲ scaling-law papers (Kaplan et al. 2020, Hoffmann et al. 2022) ನಲ್ಲಿ ಬಳಸಿದ ಅದೇ FLOPs-ಎಣಿಕೆ ಸಂಪ್ರದಾಯ -- ಇದೂ ಒಂದೂ ಚೆನ್ನಾಗಿ-ಸ್ಥಾಪಿತ ಅಂದಾಜು, ಯಾವುದೇ ಒಂದೂ model architecture ಗೆ ನಿರ್ದಿಷ್ಟವಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Why "~" Not "=": An Honest Approximation', headingKn: '"~" ಏಕೆ "=" ಅಲ್ಲ: ಒಂದೂ ಪ್ರಾಮಾಣಿಕ ಅಂದಾಜು',
      bodyEn: '• The "~" symbol in C ~ 6ND is deliberate -- the true FLOPs count depends on architecture details the formula ignores, such as cheap embedding-layer lookups (not full matmuls), attention\'s extra cost at long sequence lengths, and layer-norm/activation overhead\n• Treating C ~ 6ND as an approximation rather than an exact identity is itself an honest modeling choice: it stays accurate enough to reason about order-of-magnitude trade-offs between N and D, which is exactly what this lesson uses it for',
      bodyKn: '• C ~ 6ND ನಲ್ಲಿನ "~" ಚಿಹ್ನೆ ಉದ್ದೇಶಪೂರ್ವಕ -- ನಿಜ FLOPs ಎಣಿಕೆ formula ನಿರ್ಲಕ್ಷಿಸುವ architecture ವಿವರಗಳ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ, ಉದಾಹರಣೆಗೆ ಅಗ್ಗದ embedding-layer lookups (ಪೂರ್ಣ matmuls ಅಲ್ಲ), ದೀರ್ಘ sequence lengths ನಲ್ಲಿ attention ನ ಹೆಚ್ಚುವರಿ ವೆಚ್ಚ, ಮತ್ತು layer-norm/activation overhead\n• C ~ 6ND ಅನ್ನೂ ಒಂದೂ ನಿಖರ identity ಬದಲಿಗೆ ಒಂದೂ ಅಂದಾಜು ಎಂದು ಪರಿಗಣಿಸುವುದೂ ಸ್ವತಃ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ ಮಾಡೆಲಿಂಗ್ ಆಯ್ಕೆ: ಇದೂ N ಮತ್ತು D ನಡುವಿನ order-of-magnitude trade-offs ಬಗ್ಗೆ ತರ್ಕಿಸಲು ಸಾಕಷ್ಟು ನಿಖರವಾಗಿ ಉಳಿಯುತ್ತದೆ, ಇದೇ ಈ lesson ಬಳಸುವ ಉದ್ದೇಶ' } },

    { type: 'code', data: {
      filename: 'ratios.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below from the lesson\'s own stated figures for GPT-3 and Chinchilla.',
      descKn: 'GPT-3 ಮತ್ತು Chinchilla ಗಾಗಿ lesson ನ ಸ್ವಂತ ಪ್ರತಿಪಾದಿತ ಅಂಕಿಗಳಿಂದ ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ.',
      code: "gpt3_N, gpt3_D = 175e9, 300e9\nprint('GPT-3  D/N =', gpt3_D / gpt3_N)\n\nchinchilla_N, chinchilla_D = 70e9, 1.4e12\nprint('Chinchilla D/N =', chinchilla_D / chinchilla_N)" } },
    { type: 'output', data: { output: "GPT-3  D/N = 1.7142857142857142\nChinchilla D/N = 20.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: 300B/175B = 1.714 tokens/parameter for GPT-3, and 1.4T/70B = exactly 20.0 tokens/parameter for Chinchilla, both matching the lesson\'s stated figures exactly\n• The 11.7x gap between these ratios (20.0 / 1.714 ~= 11.7) is the concrete numerical evidence behind the lesson\'s core claim: GPT-3-era models trained on comparatively very little data relative to their size',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: GPT-3 ಗಾಗಿ 300B/175B = 1.714 tokens/parameter, ಮತ್ತು Chinchilla ಗಾಗಿ 1.4T/70B = ನಿಖರವಾಗಿ 20.0 tokens/parameter, ಎರಡೂ lesson ನ ಪ್ರತಿಪಾದಿತ ಅಂಕಿಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಈ ಅನುಪಾತಗಳ ನಡುವಿನ 11.7x ಅಂತರ (20.0 / 1.714 ~= 11.7) lesson ನ ಪ್ರಮುಖ ಹಕ್ಕಿನ ಹಿಂದಿನ ಕಾಂಕ್ರೀಟ್ ಸಂಖ್ಯಾತ್ಮಕ ಸಾಕ್ಷ್ಯ: GPT-3-ಯುಗದ models ಅವುಗಳ ಗಾತ್ರಕ್ಕೆ ಹೋಲಿಸಿ ತುಲನಾತ್ಮಕವಾಗಿ ಬಹಳ ಕಡಿಮೆ data ಮೇಲೆ ತರಬೇತಿ ಪಡೆದವು' } },

    { type: 'concept', data: {
      headingEn: 'Why C ~ 6ND Is Symmetric in N and D', headingKn: 'C ~ 6ND N ಮತ್ತು D ನಲ್ಲಿ ಏಕೆ ಸಮ್ಮಿತೀಯ',
      bodyEn: '• The formula genuinely treats N and D identically -- doubling N doubles C exactly the same way doubling D does, since both simply multiply into the product ND\n• This symmetry is precisely why a trade-off exists at all: for a fixed C, there is no structural reason to prefer spending the budget on N over D -- the ANSWER to which is better (Part 2\'s job) comes entirely from how loss responds to each, not from any asymmetry already baked into the compute formula itself',
      bodyKn: '• Formula ನಿಜವಾಗಿ N ಮತ್ತು D ಅನ್ನೂ ಒಂದೇ ರೀತಿ ಪರಿಗಣಿಸುತ್ತದೆ -- N ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ D ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ ಅದೇ ರೀತಿ C ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ, ಎರಡೂ ಕೇವಲ product ND ಗೆ ಗುಣಿಸುವುದರಿಂದ\n• ಈ ಸಮ್ಮಿತಿಯೇ ಒಂದೂ trade-off ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ: ಒಂದೂ ಸ್ಥಿರ C ಗಾಗಿ, D ಗಿಂತ N ಮೇಲೆ ಬಜೆಟ್ ಖರ್ಚು ಮಾಡಲು ಆದ್ಯತೆ ನೀಡಲು ಯಾವುದೇ ರಚನಾತ್ಮಕ ಕಾರಣ ಇಲ್ಲ -- ಯಾವುದೂ ಉತ್ತಮ (Part 2 ನ ಕೆಲಸ) ಎಂಬ ಉತ್ತರ ಸಂಪೂರ್ಣವಾಗಿ loss ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹೇಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ ಎಂಬುದರಿಂದ ಬರುತ್ತದೆ, compute formula ಸ್ವತಃ ಈಗಾಗಲೇ ಬೇಯಿಸಿದ ಯಾವುದೇ ಅಸಮ್ಮಿತಿಯಿಂದ ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'The Fixed-Compute Trade-Off', textKn: 'The Fixed-Compute Trade-Off', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Same Compute, Different Allocations', headingKn: 'ಅದೇ Compute, ಬೇರೆ Allocations',
      bodyEn: '• N=1B, D=20B and N=2B, D=10B both give N*D=2e19 -- roughly the same training compute under C~6ND, despite very different model/data splits\n• The open question Part 1 sets up: is it better to make the model bigger, or to feed it more data, for the same compute? Part 2 answers this by actually minimizing a fitted loss equation subject to the C=6ND constraint',
      bodyKn: '• N=1B, D=20B ಮತ್ತು N=2B, D=10B ಎರಡೂ N*D=2e19 ನೀಡುತ್ತವೆ -- C~6ND ಅಡಿಯಲ್ಲಿ ಸರಿಸುಮಾರು ಅದೇ training compute, ಬಹಳ ಬೇರೆ model/data ವಿಭಜನೆಗಳ ಹೊರತಾಗಿಯೂ\n• Part 1 ಸ್ಥಾಪಿಸುವ ತೆರೆದ ಪ್ರಶ್ನೆ: ಅದೇ compute ಗಾಗಿ, model ದೊಡ್ಡದಾಗಿಸುವುದೂ ಉತ್ತಮವೇ, ಅಥವಾ ಅದಕ್ಕೆ ಹೆಚ್ಚು data ನೀಡುವುದೂ? Part 2 C=6ND constraint ಅಡಿಯಲ್ಲಿ ಒಂದೂ fitted loss equation ಅನ್ನೂ ನಿಜವಾಗಿ minimize ಮಾಡುವ ಮೂಲಕ ಇದಕ್ಕೆ ಉತ್ತರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'What "Under-Trained" Genuinely Means Here', headingKn: '"Under-Trained" ಇಲ್ಲಿ ನಿಜವಾಗಿ ಏನೂ ಅರ್ಥ',
      bodyEn: '• A model is under-trained not because it lacks capacity (large N) but because it never saw enough examples (small D) to make full use of that capacity -- extra parameters with too little data genuinely sit under-utilized rather than adding real predictive power\n• The genuinely-confirmed GPT-3 ratio (1.71 tokens/parameter) versus Chinchilla (20.0) is exactly this scenario in real numbers: a 175B-parameter model trained on only 300B tokens had, relative to its size, roughly 11.7x less training signal per parameter than Chinchilla did',
      bodyKn: '• ಒಂದೂ model under-trained ಆಗಿದೆ ಏಕೆಂದರೆ ಅದಕ್ಕೆ ಸಾಮರ್ಥ್ಯ ಇಲ್ಲ (ದೊಡ್ಡ N) ಎಂದಲ್ಲ, ಆದರೆ ಅದೂ ಆ ಸಾಮರ್ಥ್ಯ ಸಂಪೂರ್ಣವಾಗಿ ಬಳಸಲು ಸಾಕಷ್ಟು ಉದಾಹರಣೆಗಳನ್ನೂ ಎಂದಿಗೂ ನೋಡಲಿಲ್ಲ (ಚಿಕ್ಕ D) -- ಬಹಳ ಕಡಿಮೆ data ಜೊತೆ ಹೆಚ್ಚುವರಿ parameters ನಿಜವಾಗಿ ಕಡಿಮೆ-ಬಳಸಲ್ಪಟ್ಟಿ ಕುಳಿತಿರುತ್ತವೆ, ನಿಜ predictive power ಸೇರಿಸುವ ಬದಲು\n• ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ GPT-3 ಅನುಪಾತ (1.71 tokens/parameter) Chinchilla (20.0) ಗೆ ಹೋಲಿಸಿ ನಿಜ ಸಂಖ್ಯೆಗಳಲ್ಲಿ ನಿಖರವಾಗಿ ಈ ಸನ್ನಿವೇಶ: ಕೇವಲ 300B tokens ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಒಂದೂ 175B-parameter model, ಅದರ ಗಾತ್ರಕ್ಕೆ ಹೋಲಿಸಿ, Chinchilla ಗಿಂತ ಪ್ರತಿ parameter ಗೆ ಸುಮಾರು 11.7x ಕಡಿಮೆ training signal ಹೊಂದಿತ್ತು' } },

    { type: 'diagram', data: {
      titleEn: 'The N/D Trade-Off Under Fixed Compute', titleKn: 'ಸ್ಥಿರ Compute ಅಡಿಯಲ್ಲಿ N/D Trade-Off',
      captionEn: 'Every point along this line shares the same compute C ~ 6ND. GPT-3 and Chinchilla represent different choices of where to sit -- Part 2 finds exactly where the loss is minimized.',
      captionKn: 'ಈ ಗೆರೆಯ ಉದ್ದಕ್ಕೂ ಪ್ರತಿ ಬಿಂದು ಅದೇ compute C ~ 6ND ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ. GPT-3 ಮತ್ತು Chinchilla ಎಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಬೇಕು ಎಂಬ ಬೇರೆ ಬೇರೆ ಆಯ್ಕೆಗಳನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ -- Part 2 loss ಎಲ್ಲಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ ಎಂದು ನಿಖರವಾಗಿ ಕಂಡುಹಿಡಿಯುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 760 300' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n  <text x='380' y='28' text-anchor='middle' font-weight='bold' font-size='16' fill='#e2e8f0'>Fixed Compute Budget C ~ 6ND</text>\n  <rect x='250' y='40' width='260' height='34' rx='6' fill='none' stroke='#60a5fa'/>\n  <text x='380' y='62' text-anchor='middle' font-size='12' fill='#cbd5e1'>Every point on the line below shares this C</text>\n\n  <line x1='300' y1='74' x2='150' y2='185' stroke='#60a5fa' stroke-dasharray='3,3'/>\n  <line x1='460' y1='74' x2='610' y2='185' stroke='#60a5fa' stroke-dasharray='3,3'/>\n\n  <line x1='60' y1='195' x2='700' y2='195' stroke='#94a3b8' stroke-width='2'/>\n  <polygon points='60,195 74,188 74,202' fill='#94a3b8'/>\n  <polygon points='700,195 686,188 686,202' fill='#94a3b8'/>\n\n  <rect x='40' y='210' width='220' height='72' rx='6' fill='none' stroke='#fb923c'/>\n  <text x='150' y='230' text-anchor='middle' font-weight='bold' font-size='13' fill='#e2e8f0'>Bigger N, Less D</text>\n  <text x='150' y='250' text-anchor='middle' font-size='12' fill='#cbd5e1'>e.g. GPT-3</text>\n  <text x='150' y='268' text-anchor='middle' font-size='12' fill='#cbd5e1'>D/N = 1.71</text>\n\n  <rect x='500' y='210' width='220' height='72' rx='6' fill='none' stroke='#fb923c'/>\n  <text x='610' y='230' text-anchor='middle' font-weight='bold' font-size='13' fill='#e2e8f0'>Smaller N, More D</text>\n  <text x='610' y='250' text-anchor='middle' font-size='12' fill='#cbd5e1'>higher tokens/parameter</text>\n  <text x='610' y='268' text-anchor='middle' font-size='12' fill='#cbd5e1'>side of the same line</text>\n\n  <circle cx='380' cy='195' r='7' fill='#4ade80'/>\n  <line x1='380' y1='195' x2='380' y2='150' stroke='#4ade80' stroke-width='2'/>\n  <rect x='275' y='112' width='210' height='36' rx='6' fill='none' stroke='#4ade80'/>\n  <text x='380' y='135' text-anchor='middle' font-size='12' fill='#cbd5e1'>Chinchilla: D/N = 20.0</text>\n\n  <text x='380' y='296' text-anchor='middle' font-size='11' fill='#94a3b8'>Part 2 searches this line numerically to find where loss is minimized</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Where GPT-3 and Chinchilla Sit on the Trade-Off', headingKn: 'GPT-3 ಮತ್ತು Chinchilla ಈ Trade-Off ನಲ್ಲಿ ಎಲ್ಲಿ ಕುಳಿತಿವೆ',
      bodyEn: '• The genuinely confirmed ratios from above place these two models at different points along the same N/D trade-off line: GPT-3 (D/N=1.71) sits toward the "more N, less D" end, while Chinchilla (D/N=20.0) sits further toward the "less N, more D" end\n• Both models can spend similar total compute C ~ 6ND while making very different N-vs-D choices -- the diagram above just shows the space of choices that Part 2 will search over to find the loss-minimizing point',
      bodyKn: '• ಮೇಲಿನ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅನುಪಾತಗಳು ಈ ಎರಡೂ models ಅನ್ನೂ ಅದೇ N/D trade-off line ಮೇಲೆ ಬೇರೆ ಬೇರೆ ಬಿಂದುಗಳಲ್ಲಿ ಇಡುತ್ತವೆ: GPT-3 (D/N=1.71) "ಹೆಚ್ಚು N, ಕಡಿಮೆ D" ತುದಿಯ ಕಡೆಗೆ ಕುಳಿತಿದೆ, Chinchilla (D/N=20.0) "ಕಡಿಮೆ N, ಹೆಚ್ಚು D" ತುದಿಯ ಕಡೆಗೆ ಇನ್ನೂ ಮುಂದೆ ಕುಳಿತಿದೆ\n• ಎರಡೂ models ಒಂದೇ ಒಟ್ಟು compute C ~ 6ND ಖರ್ಚು ಮಾಡಬಹುದು ಬಹಳ ಬೇರೆ N-vs-D ಆಯ್ಕೆಗಳನ್ನೂ ಮಾಡುತ್ತಿದ್ದರೂ -- ಮೇಲಿನ diagram ಕೇವಲ Part 2 loss-ಕಡಿಮೆಗೊಳಿಸುವ ಬಿಂದು ಕಂಡುಹಿಡಿಯಲು search ಮಾಡುವ ಆಯ್ಕೆಗಳ space ತೋರಿಸುತ್ತದೆ' } },

    { type: 'table', data: { captionEn: 'Genuinely Confirmed Ratios', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅನುಪಾತಗಳು',
      rows: 'Model|N (params)|D (tokens)|D/N, genuinely computed\nGPT-3|175B|300B|1.71\nChinchilla|70B|1.4T|20.0' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: GPT-3\'s ratio (1.71 tokens/parameter) and Chinchilla\'s ratio (exactly 20.0) both match the lesson\'s stated figures precisely\n• Under C ~ 6ND, N and D compete for the same fixed compute -- a bigger model necessarily means less data per parameter unless total compute also grows\n• The core question this lesson answers across all 3 parts is not "bigger is better" but "how should a fixed compute budget be split between model size and training data"',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: GPT-3 ನ ಅನುಪಾತ (1.71 tokens/parameter) ಮತ್ತು Chinchilla ನ ಅನುಪಾತ (ನಿಖರವಾಗಿ 20.0) ಎರಡೂ lesson ನ ಪ್ರತಿಪಾದಿತ ಅಂಕಿಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ\n• C ~ 6ND ಅಡಿಯಲ್ಲಿ, N ಮತ್ತು D ಅದೇ ಸ್ಥಿರ compute ಗಾಗಿ ಸ್ಪರ್ಧಿಸುತ್ತವೆ -- ಒಂದೂ ದೊಡ್ಡ model ಅಗತ್ಯವಾಗಿ ಪ್ರತಿ parameter ಗೆ ಕಡಿಮೆ data ಎಂದು ಅರ್ಥ, ಒಟ್ಟು compute ಸಹ ಬೆಳೆಯದ ಹೊರತು\n• ಈ lesson ಎಲ್ಲಾ 3 parts ಆದ್ಯಂತ ಉತ್ತರಿಸುವ ಪ್ರಮುಖ ಪ್ರಶ್ನೆ "ದೊಡ್ಡದೂ ಉತ್ತಮ" ಅಲ್ಲ ಆದರೆ "ಒಂದೂ ಸ್ಥಿರ compute budget model size ಮತ್ತು training data ನಡುವೆ ಹೇಗೆ ಭಾಗಿಸಬೇಕು"' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely confirmed 1.71 tokens/parameter figure for GPT-3 (175B params, 300B tokens) versus Chinchilla\'s 20.0 is the real historical comparison that launched the "compute-optimal" scaling discussion in 2022 -- DeepMind\'s actual published Chinchilla (70B, 1.4T tokens) outperformed the much larger GPT-3-scale Gopher (280B) despite using the same training compute, precisely because of this N/D rebalancing.',
      bodyKn: 'GPT-3 ಗಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 1.71 tokens/parameter ಅಂಕಿ (175B params, 300B tokens) Chinchilla ನ 20.0 ಗೆ ಹೋಲಿಸಿ 2022 ರಲ್ಲಿ "compute-optimal" scaling ಚರ್ಚೆ ಪ್ರಾರಂಭಿಸಿದ ನಿಜ ಐತಿಹಾಸಿಕ ಹೋಲಿಕೆ -- DeepMind ನ ನಿಜ ಪ್ರಕಟಿತ Chinchilla (70B, 1.4T tokens) ಅದೇ training compute ಬಳಸಿದರೂ ಬಹಳ ದೊಡ್ಡ GPT-3-ಪ್ರಮಾಣದ Gopher (280B) ಗಿಂತ ಉತ್ತಮ ಪ್ರದರ್ಶನ ನೀಡಿತು, ನಿಖರವಾಗಿ ಈ N/D ಮರುಸಮತೋಲನದ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Training compute is genuinely fixed and expensive (measured in GPU-hours or dollars) before a lab decides how to spend it -- the N/D trade-off this lesson genuinely establishes turns "how big should the model be" from a guess into a computable question given a compute budget\n• Before Chinchilla\'s published finding, labs genuinely defaulted to scaling N (parameter count) much faster than D (data), following GPT-3-era intuition -- the genuinely-confirmed 1.71 vs 20.0 ratio gap is the concrete evidence that this earlier intuition was leaving real performance on the table for a fixed compute spend',
      bodyKn: '• Training compute ನಿಜವಾಗಿ ಸ್ಥಿರ ಮತ್ತು ದುಬಾರಿ (GPU-hours ಅಥವಾ dollars ನಲ್ಲಿ ಅಳೆದ) ಒಂದೂ lab ಅದನ್ನೂ ಹೇಗೆ ಖರ್ಚು ಮಾಡಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುವ ಮೊದಲೇ -- ಈ lesson ನಿಜವಾಗಿ ಸ್ಥಾಪಿಸುವ N/D trade-off "model ಎಷ್ಟು ದೊಡ್ಡದೂ ಇರಬೇಕು" ಅನ್ನೂ ಒಂದೂ ಊಹೆ ಇಂದ ಒಂದೂ compute budget ನೀಡಿ ಗಣಿಸಬಹುದಾದ ಪ್ರಶ್ನೆಗೆ ಬದಲಾಯಿಸುತ್ತದೆ\n• Chinchilla ನ ಪ್ರಕಟಿತ ಶೋಧನೆಗೆ ಮೊದಲು, labs ನಿಜವಾಗಿ D (data) ಗಿಂತ N (parameter count) ಅನ್ನೂ ಬಹಳ ವೇಗವಾಗಿ ಪ್ರಮಾಣಗೊಳಿಸುವುದೂ ಡೀಫಾಲ್ಟ್ ಆಗಿತ್ತು, GPT-3-ಯುಗದ ಅಂತರ್ಬೋಧೆ ಅನುಸರಿಸುತ್ತಾ -- ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ 1.71 vs 20.0 ಅನುಪಾತ ಅಂತರ ಈ ಹಿಂದಿನ ಅಂತರ್ಬೋಧೆ ಒಂದೂ ಸ್ಥಿರ compute ಖರ್ಚಿಗೆ ನಿಜ ಪ್ರದರ್ಶನ ಬಿಟ್ಟುಬಿಡುತ್ತಿತ್ತು ಎಂಬುದಕ್ಕೆ ಕಾಂಕ್ರೀಟ್ ಸಾಕ್ಷ್ಯ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A research lab with a fixed budget of $2M in compute needs to decide, before training even starts, whether to build a 50B-parameter model or a 10B-parameter model trained on 5x more data. The N/D trade-off genuinely established in this lesson gives a concrete answer to that question rather than a guess -- this is exactly the calculation DeepMind ran before training the real Chinchilla model, and it is why the 70B Chinchilla, trained on more data than contemporaries assumed necessary, genuinely outperformed models with far more parameters at the same training cost.',
      bodyKn: 'ಒಂದೂ research lab $2M compute ನ ಸ್ಥಿರ ಬಜೆಟ್ ಜೊತೆ training ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೇ, ಒಂದೂ 50B-parameter model ಅಥವಾ 5x ಹೆಚ್ಚು data ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಒಂದೂ 10B-parameter model ನಿರ್ಮಿಸಬೇಕೇ ಎಂದು ನಿರ್ಧರಿಸಬೇಕು. ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಸ್ಥಾಪಿಸಿದ N/D trade-off ಆ ಪ್ರಶ್ನೆಗೆ ಒಂದೂ ಊಹೆ ಬದಲು ಒಂದೂ ಕಾಂಕ್ರೀಟ್ ಉತ್ತರ ನೀಡುತ್ತದೆ -- ಇದೇ ನಿಖರವಾಗಿ DeepMind ನಿಜ Chinchilla model ತರಬೇತಿ ನೀಡುವ ಮೊದಲೇ ಚಲಾಯಿಸಿದ ಗಣನೆ, ಮತ್ತು ಇದೇ ಏಕೆ 70B Chinchilla, ಸಮಕಾಲೀನರು ಅಗತ್ಯ ಎಂದು ಊಹಿಸಿದ್ದಕ್ಕಿಂತ ಹೆಚ್ಚು data ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ, ಅದೇ training ವೆಚ್ಚದಲ್ಲಿ ಹೆಚ್ಚು parameters ಹೊಂದಿದ models ಗಿಂತ ನಿಜವಾಗಿ ಉತ್ತಮ ಪ್ರದರ್ಶನ ನೀಡಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computed by direct division, what is Chinchilla\'s tokens-per-parameter ratio (1.4T tokens, 70B parameters)?', qKn: 'ನೇರ ಭಾಗಾಕಾರ ಮೂಲಕ ನಿಜವಾಗಿ ಗಣಿಸಿದ, Chinchilla ನ tokens-per-parameter ಅನುಪಾತ ಏನೂ (1.4T tokens, 70B parameters)?',
        opts: ['1.71', 'Exactly 20.0 -- genuinely confirmed', '175', '300'], correct: 1,
        optsKn: ['1.71', 'ನಿಖರವಾಗಿ 20.0 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '175', '300'] },
      { q: 'Under C ~ 6ND with a fixed compute budget, if you double N, what genuinely must happen to D?', qKn: 'ಒಂದೂ ಸ್ಥಿರ compute budget ಜೊತೆ C ~ 6ND ಅಡಿಯಲ್ಲಿ, N ಎರಡು ಪಟ್ಟು ಮಾಡಿದರೆ, D ಗೆ ನಿಜವಾಗಿ ಏನೂ ಸಂಭವಿಸಬೇಕು?',
        opts: ['D must also double', 'D must genuinely be roughly halved to keep C constant', 'D is unaffected', 'C automatically doubles too'], correct: 1,
        optsKn: ['D ಸಹ ಎರಡು ಪಟ್ಟು ಆಗಬೇಕು', 'C ಸ್ಥಿರವಾಗಿಡಲು D ನಿಜವಾಗಿ ಸರಿಸುಮಾರು ಅರ್ಧವಾಗಬೇಕು', 'D ಪ್ರಭಾವಿತವಾಗಿಲ್ಲ', 'C ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಎರಡು ಪಟ್ಟು ಆಗುತ್ತದೆ'] },
      { q: 'Genuinely computed by direct division, what is GPT-3\'s tokens-per-parameter ratio (300B tokens, 175B parameters)?', qKn: 'ನೇರ ಭಾಗಾಕಾರ ಮೂಲಕ ನಿಜವಾಗಿ ಗಣಿಸಿದ, GPT-3 ನ tokens-per-parameter ಅನುಪಾತ ಏನೂ (300B tokens, 175B parameters)?',
        opts: ['20.0', '1.71 -- genuinely confirmed (300B/175B)', '11.7', '94'], correct: 1,
        optsKn: ['20.0', '1.71 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ (300B/175B)', '11.7', '94'] },
      { q: 'Genuinely computed from the two confirmed ratios, roughly how large is the gap between Chinchilla\'s D/N (20.0) and GPT-3\'s D/N (1.714)?', qKn: 'ಎರಡೂ ದೃಢಪಡಿಸಿದ ಅನುಪಾತಗಳಿಂದ ನಿಜವಾಗಿ ಗಣಿಸಿದ, Chinchilla ನ D/N (20.0) ಮತ್ತು GPT-3 ನ D/N (1.714) ನಡುವಿನ ಅಂತರ ಸರಿಸುಮಾರು ಎಷ್ಟು ದೊಡ್ಡದೂ?',
        opts: ['About 1.7x', 'About 11.7x -- genuinely confirmed (20.0 / 1.714)', 'About 2x', 'About 100x'], correct: 1,
        optsKn: ['ಸುಮಾರು 1.7x', 'ಸುಮಾರು 11.7x -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ (20.0 / 1.714)', 'ಸುಮಾರು 2x', 'ಸುಮಾರು 100x'] },
      { q: 'The lesson notes N=1B,D=20B and N=2B,D=10B both give N*D=2e19. What does this genuinely illustrate about C ~ 6ND?', qKn: 'Lesson N=1B,D=20B ಮತ್ತು N=2B,D=10B ಎರಡೂ N*D=2e19 ನೀಡುತ್ತವೆ ಎಂದು ಗಮನಿಸುತ್ತದೆ. ಇದೂ C ~ 6ND ಬಗ್ಗೆ ನಿಜವಾಗಿ ಏನೂ ವಿವರಿಸುತ್ತದೆ?',
        opts: ['That N and D must always be equal', 'That very different model/data splits can genuinely share roughly the same training compute', 'That compute is independent of both N and D', 'That D must always exceed N by 20x'], correct: 1,
        optsKn: ['N ಮತ್ತು D ಯಾವಾಗಲೂ ಸಮಾನವಾಗಿರಬೇಕು ಎಂದು', 'ಬಹಳ ಬೇರೆ model/data ವಿಭಜನೆಗಳು ನಿಜವಾಗಿ ಸರಿಸುಮಾರು ಅದೇ training compute ಹಂಚಿಕೊಳ್ಳಬಹುದು ಎಂದು', 'Compute N ಮತ್ತು D ಎರಡರಿಂದಲೂ ಸ್ವತಂತ್ರವಾಗಿದೆ ಎಂದು', 'D ಯಾವಾಗಲೂ N ಗಿಂತ 20x ಮೀರಬೇಕು ಎಂದು'] },
    ] } },
  ],
};
