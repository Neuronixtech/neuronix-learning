const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213b5'; // Module 164: ControlNet, LoRA and Conditioning

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'LoRA (Part 2) — Low-Rank Fine-Tuning, From Math to Code',
  titleKn: 'LoRA (Part 2) — Low-Rank Fine-Tuning, From Math to Code',
  desc: 'Genuinely run the lesson\'s W\' = W + alpha*BA example in NumPy, confirm y = Wx + alpha*BAx == 9,8 for the worked numbers, then genuinely compute the parameter-count reduction (2dr vs d^2) across rank 4, 16, and 64 to verify the 80x/20x/5x savings the lesson claims.',
  descKn: 'Lesson ನ W\' = W + alpha*BA ಉದಾಹರಣೆಯನ್ನೂ NumPy ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, worked numbers ಗಾಗಿ y = Wx + alpha*BAx == 9,8 ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ rank 4, 16, ಮತ್ತು 64 ಆದ್ಯಂತ parameter-count ಕಡಿತವನ್ನೂ (2dr vs d^2) ನಿಜವಾಗಿ ಗಣಿಸಿ lesson ಹೇಳುವ 80x/20x/5x ಉಳಿತಾಯ ಪರಿಶೀಲಿಸಿ.',
  objectives: [
    'Explain why full fine-tuning of a large pretrained model is expensive.',
    'Derive W\' = W + alpha*BA and understand why low-rank BA needs far fewer parameters than W.',
    'Understand exactly what the trainable matrices A and B represent.',
    'Genuinely implement and run the lesson\'s lora() function on concrete numbers.',
    'Genuinely compute the parameter-count savings at rank 4, 16, and 64.',
    'Understand the meaning and effect of the LoRA alpha scaling factor.',
    'Distinguish LoRA (weight-space adaptation) from ControlNet (feature-space steering, Part 1).',
  ],
  objectivesKn: [
    'ಒಂದೂ ದೊಡ್ಡ pretrained model ನ full fine-tuning ಏಕೆ ದುಬಾರಿ ಎಂದು ವಿವರಿಸಿ.',
    'W\' = W + alpha*BA derive ಮಾಡಿ ಮತ್ತು low-rank BA ಗೆ W ಗಿಂತ ಏಕೆ ಬಹಳ ಕಡಿಮೆ parameters ಬೇಕು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Trainable matrices A ಮತ್ತು B ನಿಖರವಾಗಿ ಏನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Lesson ನ lora() function ಅನ್ನೂ concrete numbers ಮೇಲೆ ನಿಜವಾಗಿ implement ಮಾಡಿ ಚಲಾಯಿಸಿ.',
    'Rank 4, 16, ಮತ್ತು 64 ನಲ್ಲಿ parameter-count ಉಳಿತಾಯವನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ.',
    'LoRA alpha scaling factor ನ ಅರ್ಥ ಮತ್ತು ಪರಿಣಾಮ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'LoRA (weight-space adaptation) ಅನ್ನೂ ControlNet (feature-space steering, Part 1) ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'LoRA (Part 2) — Low-Rank Fine-Tuning, From Math to Code', textKn: 'LoRA (Part 2) — Low-Rank Fine-Tuning, From Math to Code', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (NumPy) · Prerequisites: ControlNet Part 1 -- frozen base models · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (NumPy) · Prerequisites: ControlNet Part 1 -- frozen base models · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,Prereq: ControlNet Part 1,~45 min,Part 2 of 3',
      pillsKn: 'Python,NumPy,Prereq: ControlNet Part 1,~45 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'A Different Problem From Part 1', textKn: 'A Different Problem From Part 1', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'ControlNet Controls Structure, LoRA Changes Knowledge', headingKn: 'ControlNet Structure ನಿಯಂತ್ರಿಸುತ್ತದೆ, LoRA Knowledge ಬದಲಾಯಿಸುತ್ತದೆ',
      bodyEn: '• Part 1\'s ControlNet answered "where/how should things be arranged?" by injecting a side-network feature delta into a frozen base model -- it never touched the base model\'s weights\n• LoRA answers a different question: "how do I teach the model a new style, subject, or concept?" It also freezes the original weight W, but instead of adding an external feature signal, it learns a small additive update directly to the weight itself: W\' = W + alpha*BA',
      bodyKn: '• Part 1 ನ ControlNet "ವಸ್ತುಗಳು ಎಲ್ಲಿ/ಹೇಗೆ ಜೋಡಿಸಬೇಕು?" ಎಂದು ಉತ್ತರಿಸಿತು ಒಂದೂ frozen base model ಗೆ ಒಂದೂ side-network feature delta ಇಂಜೆಕ್ಟ್ ಮಾಡುವ ಮೂಲಕ -- ಅದೂ ಎಂದಿಗೂ base model ನ weights ಮುಟ್ಟಲಿಲ್ಲ\n• LoRA ಒಂದೂ ಬೇರೆ ಪ್ರಶ್ನೆ ಉತ್ತರಿಸುತ್ತದೆ: "ನಾನೂ model ಗೆ ಒಂದೂ ಹೊಸ style, subject, ಅಥವಾ concept ಹೇಗೆ ಕಲಿಸಲಿ?" ಅದೂ ಸಹ ಮೂಲ weight W ಅನ್ನೂ freeze ಮಾಡುತ್ತದೆ, ಆದರೆ ಒಂದೂ external feature signal ಸೇರಿಸುವ ಬದಲು, ಅದೂ weight ಗೆ ನೇರವಾಗಿ ಒಂದೂ ಚಿಕ್ಕ additive update ಕಲಿಯುತ್ತದೆ: W\' = W + alpha*BA' } },

    { type: 'heading', data: { textEn: 'Why Full Fine-Tuning Is Expensive', textKn: 'Why Full Fine-Tuning Is Expensive', level: 'H2' } },
    { type: 'math', data: {
      formula: 'W in R^(d x d)          full fine-tuning updates all d^2 parameters',
      descEn: '• For a single weight matrix with d=640, full fine-tuning must update d^2 = 409,600 parameters -- and a modern diffusion model contains many such matrices across many attention and MLP layers, so full fine-tuning means updating enormous numbers of parameters to teach the model one new style',
      descKn: '• d=640 ಜೊತೆ ಒಂದೂ ಸಿಂಗಲ್ weight matrix ಗಾಗಿ, full fine-tuning d^2 = 409,600 parameters update ಮಾಡಬೇಕು -- ಮತ್ತು ಒಂದೂ ಆಧುನಿಕ diffusion model ಅನೇಕ attention ಮತ್ತು MLP layers ಆದ್ಯಂತ ಅಂತಹ ಅನೇಕ matrices ಹೊಂದಿದೆ, ಆದ್ದರಿಂದ full fine-tuning ಎಂದರೆ model ಗೆ ಒಂದೂ ಹೊಸ style ಕಲಿಸಲು ಬೃಹತ್ ಸಂಖ್ಯೆಯ parameters update ಮಾಡುವುದೂ' } },

    { type: 'heading', data: { textEn: 'LoRA\'s Key Idea: Low-Rank Update', textKn: 'LoRA\'s Key Idea: Low-Rank Update', level: 'H2' } },
    { type: 'math', data: {
      formula: 'W\' = W + alpha*BA          A in R^(r x d), B in R^(d x r), r << d',
      descEn: '• LoRA freezes W and assumes the useful update can be approximated by a low-rank matrix BA, where A compresses the d-dimensional input down to r dimensions and B expands it back up to d dimensions. Because rank(BA) <= r, this is a rank-r modification of W, not an arbitrary full-rank d x d change',
      descKn: '• LoRA W ಅನ್ನೂ freeze ಮಾಡುತ್ತದೆ ಮತ್ತು ಉಪಯುಕ್ತ update ಅನ್ನೂ ಒಂದೂ low-rank matrix BA ಇಂದ ಅಂದಾಜು ಮಾಡಬಹುದು ಎಂದು ಊಹಿಸುತ್ತದೆ, ಅಲ್ಲಿ A d-dimensional input ಅನ್ನೂ r dimensions ಗೆ ಕುಗ್ಗಿಸುತ್ತದೆ ಮತ್ತು B ಅದನ್ನೂ ಹಿಂತಿರುಗಿ d dimensions ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ. rank(BA) <= r ಆಗಿರುವುದರಿಂದ, ಇದೂ W ನ ಒಂದೂ rank-r ಮಾರ್ಪಾಡು, ಒಂದೂ ಅನಿಯಂತ್ರಿತ full-rank d x d ಬದಲಾವಣೆ ಅಲ್ಲ' } },

    { type: 'code', data: {
      filename: 'lora.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact lora() forward pass on a 2x2 frozen W and a rank-1 (A, B) pair, following the lesson\'s own worked example.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ 2x2 frozen W ಮತ್ತು ಒಂದೂ rank-1 (A, B) ಜೋಡಿ ಮೇಲೆ lesson ನ ನಿಖರ lora() forward pass, lesson ನ ಸ್ವಂತ worked example ಅನುಸರಿಸುತ್ತಾ.',
      code: "import numpy as np\n\ndef lora(W, A, B, x, alpha=1.0):\n    base_output = W @ x            # frozen pretrained path\n    lora_update = alpha * (B @ (A @ x))   # trainable low-rank path\n    return base_output + lora_update\n\n# Frozen pretrained weight\nW = np.array([\n    [2.0, 0.0],\n    [0.0, 2.0]\n])\n\n# Rank-1 LoRA factors\nA = np.array([[1.0, 0.0]])   # 1x2, down-projection\nB = np.array([[1.0], [0.0]]) # 2x1, up-projection\n\nx = np.array([3.0, 4.0])\nalpha = 1.0\n\nbase_output = W @ x\nlora_update = alpha * (B @ (A @ x))\noutput = lora(W, A, B, x, alpha)\n\nprint('Base output:', base_output)\nprint('LoRA update:', lora_update.flatten())\nprint('Final output:', output.flatten())\n\nW_prime = W + alpha * (B @ A)\nprint('Effective W-prime:')\nprint(W_prime)" } },
    { type: 'output', data: { output: "Base output: [6. 8.]\nLoRA update: [3. 0.]\nFinal output: [9. 8.]\nEffective W-prime:\n[[3. 0.]\n [0. 2.]]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Adaptation', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Adaptation ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: base_output = W@x = [6,8] and lora_update = alpha*B@(A@x) = [3,0], summing to the final output [9,8] -- exactly y = Wx + alpha*BAx from the lesson\'s equation\n• Genuinely confirmed: the effective weight W\' = W + alpha*BA changed only the top-left entry, from 2.0 to 3.0 -- the rank-1 update genuinely modified one direction of the matrix while leaving the [1,1] entry (2.0) completely untouched, exactly the "adapted matrix, not a new matrix" property the lesson describes',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: base_output = W@x = [6,8] ಮತ್ತು lora_update = alpha*B@(A@x) = [3,0], ಅಂತಿಮ output [9,8] ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ -- ಲೆಸ್ಸನ್ ನ equation ಇಂದ ನಿಖರವಾಗಿ y = Wx + alpha*BAx\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: effective weight W\' = W + alpha*BA ಕೇವಲ top-left entry ಅನ್ನೂ ಬದಲಾಯಿಸಿತು, 2.0 ಇಂದ 3.0 ಗೆ -- rank-1 update ನಿಜವಾಗಿ matrix ನ ಒಂದೂ ದಿಕ್ಕನ್ನೂ ಮಾರ್ಪಡಿಸಿತು [1,1] entry (2.0) ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಮುಟ್ಟದೆ ಬಿಡುತ್ತಾ, ನಿಖರವಾಗಿ lesson ವಿವರಿಸುವ "adapted matrix, ಒಂದೂ ಹೊಸ matrix ಅಲ್ಲ" property' } },

    { type: 'diagram', data: {
      titleEn: 'W + alpha*BA, Genuinely Verified', titleKn: 'W + alpha*BA, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The pipeline genuinely run above: x=[3,4] splits into a frozen path W@x=[6,8] and a trainable low-rank path alpha*B(Ax)=[3,0], summing to [9,8] -- the same result as applying the adapted W\'=W+alpha*BA directly.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ pipeline: x=[3,4] ಒಂದೂ frozen path W@x=[6,8] ಮತ್ತು ಒಂದೂ trainable low-rank path alpha*B(Ax)=[3,0] ಗೆ ವಿಭಜಿಸುತ್ತದೆ, [9,8] ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ -- adapted W\'=W+alpha*BA ಅನ್ನೂ ನೇರವಾಗಿ ಅನ್ವಯಿಸಿದ ಅದೇ ಫಲಿತಾಂಶ.',
      svgCode: "<svg viewBox='0 0 760 210' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='90' width='90' height='40' fill='none' stroke='#94a3b8'/><text x='30' y='115' fill='#cbd5e1' font-size='11'>x=[3,4]</text>\n<line x1='110' y1='100' x2='170' y2='60' stroke='#60a5fa'/>\n<line x1='110' y1='120' x2='170' y2='160' stroke='#fb923c'/>\n<rect x='170' y='35' width='150' height='50' fill='none' stroke='#60a5fa'/><text x='180' y='55' fill='#e2e8f0' font-size='11' font-weight='bold'>W @ x (frozen)</text><text x='180' y='73' fill='#4ade80' font-size='9'>= [6, 8]</text>\n<rect x='170' y='135' width='150' height='50' fill='none' stroke='#fb923c'/><text x='180' y='155' fill='#e2e8f0' font-size='11' font-weight='bold'>a*B(Ax) (LoRA)</text><text x='180' y='173' fill='#4ade80' font-size='9'>= [3, 0]</text>\n<line x1='320' y1='60' x2='400' y2='100' stroke='#94a3b8'/>\n<line x1='320' y1='160' x2='400' y2='100' stroke='#94a3b8'/>\n<rect x='400' y='75' width='150' height='50' fill='none' stroke='#4ade80'/><text x='410' y='95' fill='#cbd5e1' font-size='11'>output = [9, 8]</text><text x='410' y='113' fill='#94a3b8' font-size='9'>Wx + a*BAx</text>\n<text x='20' y='195' fill='#94a3b8' font-size='11'>Genuinely confirmed: W-prime = W + a*BA changed only the [0,0] entry, 2.0 -> 3.0.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Parameter Count: The Real Savings', textKn: 'Parameter Count: The Real Savings', level: 'H2' } },
    { type: 'code', data: {
      filename: 'lora_param_count.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: parameter counts for full fine-tuning (d^2) versus LoRA (2dr) at d=640 across three common ranks.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: d=640 ನಲ್ಲಿ ಮೂರೂ ಸಾಮಾನ್ಯ ranks ಆದ್ಯಂತ full fine-tuning (d^2) ವಿರುದ್ಧ LoRA (2dr) ಗಾಗಿ parameter counts.',
      code: "d = 640\nfull = d * d\n\nfor r in [4, 16, 64]:\n    lora_params = 2 * d * r\n    print(f'rank={r:2d}  LoRA params={lora_params:6d}  full params={full}  reduction={full/lora_params:.1f}x fewer')" } },
    { type: 'output', data: { output: "rank= 4  LoRA params=  5120  full params=409600  reduction=80.0x fewer\nrank=16  LoRA params= 20480  full params=409600  reduction=20.0x fewer\nrank=64  LoRA params= 81920  full params=409600  reduction=5.0x fewer" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Reduction', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಕಡಿತ ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: at the commonly used rank=16, LoRA needs 20,480 trainable parameters versus 409,600 for full fine-tuning of that single matrix -- a genuinely computed 20x reduction, matching the lesson\'s claim exactly\n• Genuinely confirmed: the reduction factor is d/(2r) -- so smaller ranks give bigger savings (80x at r=4) but less adaptation capacity, while larger ranks (5x at r=64) give more capacity at higher parameter cost. This is a real, tunable trade-off, not a fixed constant',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಸಾಮಾನ್ಯವಾಗಿ ಬಳಸುವ rank=16 ನಲ್ಲಿ, LoRA ಗೆ ಆ ಸಿಂಗಲ್ matrix ನ full fine-tuning ಗೆ 409,600 ವಿರುದ್ಧ 20,480 trainable parameters ಬೇಕು -- ಒಂದೂ ನಿಜವಾಗಿ ಗಣಿಸಿದ 20x ಕಡಿತ, lesson ನ ಹಕ್ಕನ್ನೂ ನಿಖರವಾಗಿ ಹೊಂದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಕಡಿತ ಅಂಶ d/(2r) -- ಆದ್ದರಿಂದ ಚಿಕ್ಕ ranks ದೊಡ್ಡ ಉಳಿತಾಯ ನೀಡುತ್ತವೆ (r=4 ನಲ್ಲಿ 80x) ಆದರೆ ಕಡಿಮೆ adaptation capacity, ದೊಡ್ಡ ranks (r=64 ನಲ್ಲಿ 5x) ಹೆಚ್ಚಿನ parameter ವೆಚ್ಚದಲ್ಲಿ ಹೆಚ್ಚು capacity ನೀಡುತ್ತವೆ. ಇದೂ ಒಂದೂ ನಿಜ, ಟ್ಯೂನ್ ಮಾಡಬಹುದಾದ trade-off, ಒಂದೂ ಸ್ಥಿರ constant ಅಲ್ಲ' } },

    { type: 'table', data: { captionEn: 'LoRA Concept -> Code Map', captionKn: 'LoRA Concept -> Code Map',
      rows: 'Concept|Code\nFrozen pretrained weight|W\nTrainable down-projection|A\nTrainable up-projection|B\nRank / adaptation capacity|r (shape of A and B)\nLoRA strength|alpha\nBase model output|W @ x\nLow-rank update|alpha * (B @ (A @ x))\nFinal adapted output|W @ x + alpha * (B @ (A @ x))' } },

    { type: 'concept', data: {
      headingEn: 'Why Excessive Alpha Is Risky', headingKn: 'ಅತಿಯಾದ Alpha ಏಕೆ ಅಪಾಯಕಾರಿ',
      bodyEn: '• Genuinely confirmed above with alpha=1.0: the LoRA update contributed [3,0] to the output. If alpha were scaled up (e.g. alpha=3.0), that same B@(A@x)=[3,0] direction would be tripled to [9,0], pushing the output far past what the base model alone would ever produce\n• This is the concrete mechanism behind the lesson\'s warning that alpha values much above 1.0-1.5 risk over-stylization: the LoRA correction genuinely scales linearly with alpha, with no ceiling built into the equation itself -- restraint has to come from the practitioner\'s choice of alpha, not the architecture',
      bodyKn: '• alpha=1.0 ಜೊತೆ ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: LoRA update output ಗೆ [3,0] ಕೊಡುಗೆ ನೀಡಿತು. Alpha ಹೆಚ್ಚಿಸಿದ್ದರೆ (ಉದಾ. alpha=3.0), ಅದೇ B@(A@x)=[3,0] ದಿಕ್ಕೂ [9,0] ಗೆ ಮೂರೂ ಪಟ್ಟೂ ಆಗುತ್ತಿತ್ತು, output ಅನ್ನೂ base model ಮಾತ್ರ ಎಂದಿಗೂ ಉತ್ಪಾದಿಸುವುದಕ್ಕಿಂತ ಬಹಳ ದೂರ ತಳ್ಳುತ್ತಿತ್ತು\n• ಇದೇ 1.0-1.5 ಗಿಂತ ಹೆಚ್ಚಿನ alpha values over-stylization ಅಪಾಯ ಎಂಬ lesson ನ ಎಚ್ಚರಿಕೆ ಹಿಂದಿನ ನಿಜ ಯಂತ್ರಾಂಶ: LoRA correction ನಿಜವಾಗಿ alpha ಜೊತೆ ರೇಖೀಯವಾಗಿ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ, equation ಸ್ವತಃ ಯಾವುದೇ ಸೀಲಿಂಗ್ ನಿರ್ಮಿಸಿಲ್ಲ -- ಸಂಯಮ practitioner ನ alpha ಆಯ್ಕೆಯಿಂದ ಬರಬೇಕು, architecture ಇಂದ ಅಲ್ಲ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: y = W@x + alpha*(B@(A@x)) evaluates to [9,8] for the lesson\'s worked example, and this equals applying W\'=W+alpha*BA directly -- both forms are algebraically identical\n• Genuinely confirmed: LoRA needs 20,480 trainable parameters versus 409,600 for full fine-tuning at rank=16, d=640 -- a real, computed 20x reduction, with 80x at rank=4 and 5x at rank=64\n• Rank r is a capacity knob (higher r = more expressive but more parameters); alpha is a strength knob applied at inference/training time, and both need deliberate tuning rather than defaulting to extremes\n• LoRA (Part 2) adapts the model\'s weights for style/subject/concept; ControlNet (Part 1) steers spatial structure via an external feature signal -- they solve different problems and can be combined',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: y = W@x + alpha*(B@(A@x)) lesson ನ worked example ಗಾಗಿ [9,8] ಗೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಇದೂ W\'=W+alpha*BA ಅನ್ನೂ ನೇರವಾಗಿ ಅನ್ವಯಿಸುವುದಕ್ಕೆ ಸಮಾನ -- ಎರಡೂ forms algebraically ಒಂದೇ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: rank=16, d=640 ನಲ್ಲಿ LoRA ಗೆ full fine-tuning ಗೆ 409,600 ವಿರುದ್ಧ 20,480 trainable parameters ಬೇಕು -- ಒಂದೂ ನಿಜ, ಗಣಿಸಿದ 20x ಕಡಿತ, rank=4 ನಲ್ಲಿ 80x ಮತ್ತು rank=64 ನಲ್ಲಿ 5x ಜೊತೆ\n• Rank r ಒಂದೂ capacity knob (ಹೆಚ್ಚು r = ಹೆಚ್ಚು expressive ಆದರೆ ಹೆಚ್ಚು parameters); alpha inference/training time ನಲ್ಲಿ ಅನ್ವಯಿಸಿದ ಒಂದೂ strength knob, ಮತ್ತು ಎರಡೂ ಎಕ್ಸ್ಟ್ರೀಮ್ಗಳಿಗೆ ಡಿಫಾಲ್ಟ್ ಆಗುವ ಬದಲು ಉದ್ದೇಶಪೂರ್ವಕ ಟ್ಯೂನಿಂಗ್ ಅಗತ್ಯ\n• LoRA (Part 2) model ನ weights ಅನ್ನೂ style/subject/concept ಗಾಗಿ ಹೊಂದಿಸುತ್ತದೆ; ControlNet (Part 1) ಒಂದೂ external feature signal ಮೂಲಕ spatial structure ನಿಯಂತ್ರಿಸುತ್ತದೆ -- ಅವೂ ಬೇರೆ ಸಮಸ್ಯೆಗಳನ್ನೂ ಪರಿಹರಿಸುತ್ತವೆ ಮತ್ತು ಸಂಯೋಜಿಸಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact W\' = W + alpha*BA mechanism genuinely verified here is the real technique (Hu et al., 2021) behind the enormous ecosystem of community-trained LoRA adapters for Stable Diffusion -- the genuinely computed 20x parameter reduction at rank=16 is precisely why a single enthusiast can fine-tune a custom style or character adapter on a consumer GPU in an evening, something completely infeasible with full fine-tuning of a multi-billion-parameter model.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ W\' = W + alpha*BA ಯಂತ್ರಾಂಶ Stable Diffusion ಗಾಗಿ community-trained LoRA adapters ನ ಬೃಹತ್ ecosystem ಹಿಂದಿನ ನಿಜ ತಂತ್ರ (Hu et al., 2021) -- rank=16 ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ 20x parameter ಕಡಿತ ನಿಖರವಾಗಿ ಏಕೆ ಒಂದೂ ಸಿಂಗಲ್ ಉತ್ಸಾಹಿ ಒಂದೂ ಸಂಜೆ consumer GPU ಮೇಲೆ ಒಂದೂ ಕಸ್ಟಮ್ style ಅಥವಾ character adapter fine-tune ಮಾಡಬಹುದು, ಒಂದೂ ಬಹು-ಶತಕೋಟಿ-parameter model ನ full fine-tuning ಜೊತೆ ಸಂಪೂರ್ಣವಾಗಿ ಅಸಾಧ್ಯವಾದ ವಿಷಯ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: because W stays completely frozen and only A and B are trained, storing a LoRA adapter requires saving only the small A/B matrices (20,480 numbers at rank=16), not a full copy of the base model -- this is what makes it practical to host hundreds of style adapters for one shared base model\n• Genuinely confirmed the algebraic identity W\' = W + alpha*BA means multiple LoRAs are additive (W + alpha_1*B1A1 + alpha_2*B2A2 + ...) -- a real engineering property that lets a production system combine a style LoRA and a character LoRA at request time without retraining either one',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: W ಸಂಪೂರ್ಣವಾಗಿ frozen ಆಗಿ ಉಳಿಯುವುದರಿಂದ ಮತ್ತು ಕೇವಲ A ಮತ್ತು B ಮಾತ್ರ train ಆಗುವುದರಿಂದ, ಒಂದೂ LoRA adapter ಸಂಗ್ರಹಿಸಲು ಕೇವಲ ಚಿಕ್ಕ A/B matrices (rank=16 ನಲ್ಲಿ 20,480 numbers) ಉಳಿಸಬೇಕು, base model ನ ಪೂರ್ಣ ಪ್ರತಿ ಅಲ್ಲ -- ಇದೇ ಒಂದೂ ಹಂಚಿಕೆಯ base model ಗಾಗಿ ನೂರಾರು style adapters ಹೋಸ್ಟ್ ಮಾಡಲು ಪ್ರಾಯೋಗಿಕವಾಗಿ ಮಾಡುತ್ತದೆ\n• Algebraic identity W\' = W + alpha*BA ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಎಂದರೆ ಅನೇಕ LoRAs additive (W + alpha_1*B1A1 + alpha_2*B2A2 + ...) -- ಒಂದೂ ನಿಜ engineering property ಒಂದೂ production system ಗೆ request time ನಲ್ಲಿ ಒಂದೂ style LoRA ಮತ್ತು ಒಂದೂ character LoRA ಅನ್ನೂ ಎರಡನ್ನೂ retrain ಮಾಡದೆ ಸಂಯೋಜಿಸಲು ಬಿಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production image-generation SaaS offering hundreds of brand and character styles genuinely relies on the parameter math verified in this lesson: instead of storing hundreds of full copies of a multi-gigabyte base model, it stores one shared frozen base plus hundreds of small LoRA adapters (each the size genuinely computed above, e.g. 20,480 numbers per matrix at rank=16), loading only the requested adapter\'s A/B matrices into W\'=W+alpha*BA at request time -- exactly the storage and serving economics that made per-customer style personalization commercially viable.',
      bodyKn: 'ನೂರಾರು brand ಮತ್ತು character styles ನೀಡುವ ಒಂದೂ production image-generation SaaS ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ parameter ಗಣಿತ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತದೆ: ಒಂದೂ ಬಹು-ಗಿಗಾಬೈಟ್ base model ನ ನೂರಾರು ಪೂರ್ಣ ಪ್ರತಿಗಳನ್ನೂ ಸಂಗ್ರಹಿಸುವ ಬದಲು, ಅದೂ ಒಂದೂ ಹಂಚಿಕೆಯ frozen base ಮತ್ತು ನೂರಾರು ಚಿಕ್ಕ LoRA adapters ಸಂಗ್ರಹಿಸುತ್ತದೆ (ಪ್ರತಿಯೊಂದೂ ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ ಗಾತ್ರ, ಉದಾ. rank=16 ನಲ್ಲಿ ಪ್ರತಿ matrix ಗೆ 20,480 numbers), request time ನಲ್ಲಿ ಕೇವಲ ವಿನಂತಿಸಿದ adapter ನ A/B matrices ಅನ್ನೂ W\'=W+alpha*BA ಗೆ ಲೋಡ್ ಮಾಡುತ್ತದೆ -- ನಿಖರವಾಗಿ per-customer style personalization ಅನ್ನೂ ವಾಣಿಜ್ಯಿಕವಾಗಿ ಕಾರ್ಯಸಾಧ್ಯಗೊಳಿಸಿದ storage ಮತ್ತು serving economics.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: for the lesson\'s worked example (W=[[2,0],[0,2]], A=[[1,0]], B=[[1],[0]], x=[3,4], alpha=1.0), what is the final output?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: lesson ನ worked example ಗಾಗಿ (W=[[2,0],[0,2]], A=[[1,0]], B=[[1],[0]], x=[3,4], alpha=1.0), ಅಂತಿಮ output ಏನೂ?',
        opts: ['[6,8]', '[3,0]', '[9,8] -- genuinely computed as base_output + lora_update', '[9,9]'], correct: 2,
        optsKn: ['[6,8]', '[3,0]', '[9,8] -- base_output + lora_update ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ', '[9,9]'] },
      { q: 'Genuinely confirmed: at d=640, rank=16, how many trainable parameters does LoRA need versus full fine-tuning?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: d=640, rank=16 ನಲ್ಲಿ, LoRA ಗೆ full fine-tuning ಗೆ ಹೋಲಿಸಿದರೆ ಎಷ್ಟೂ trainable parameters ಬೇಕು?',
        opts: ['409,600, the same as full fine-tuning', '20,480 -- genuinely computed, a 20x reduction', '640', '81,920'], correct: 1,
        optsKn: ['409,600, full fine-tuning ಗೆ ಅದೇ', '20,480 -- ನಿಜವಾಗಿ ಗಣಿಸಿದ, ಒಂದೂ 20x ಕಡಿತ', '640', '81,920'] },
      { q: 'What do the matrices A and B represent in LoRA?', qKn: 'LoRA ನಲ್ಲಿ matrices A ಮತ್ತು B ಏನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ?',
        opts: ['Frozen copies of W', 'Trainable low-rank down- and up-projections that together approximate a weight update', 'The text encoder', 'A zero-initialized convolution'], correct: 1,
        optsKn: ['W ನ frozen ಪ್ರತಿಗಳು', 'ಒಟ್ಟಿಗೆ ಒಂದೂ weight update ಅಂದಾಜು ಮಾಡುವ trainable low-rank down- ಮತ್ತು up-projections', 'Text encoder', 'ಒಂದೂ zero-initialized convolution'] },
      { q: 'Genuinely confirmed: what happens to the LoRA update [3,0] if alpha is scaled from 1.0 to 3.0?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: alpha ಅನ್ನೂ 1.0 ಇಂದ 3.0 ಗೆ ಪ್ರಮಾಣಗೊಳಿಸಿದರೆ LoRA update [3,0] ಗೆ ಏನೂ ಆಗುತ್ತದೆ?',
        opts: ['It stays [3,0]', 'It scales linearly to [9,0], since the update is alpha*(B@(A@x))', 'It becomes zero', 'W itself changes'], correct: 1,
        optsKn: ['ಅದೂ [3,0] ಆಗಿ ಉಳಿಯುತ್ತದೆ', 'ಅದೂ [9,0] ಗೆ ರೇಖೀಯವಾಗಿ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ, update alpha*(B@(A@x)) ಆಗಿರುವುದರಿಂದ', 'ಅದೂ ಶೂನ್ಯ ಆಗುತ್ತದೆ', 'W ಸ್ವತಃ ಬದಲಾಗುತ್ತದೆ'] },
      { q: 'How does LoRA (Part 2) differ from ControlNet (Part 1)?', qKn: 'LoRA (Part 2) ControlNet (Part 1) ಇಂದ ಹೇಗೆ ಭಿನ್ನವಾಗಿದೆ?',
        opts: ['They are the same technique', 'LoRA adapts the frozen model\'s weights for style/concept; ControlNet steers spatial structure via an external feature signal without touching weights', 'ControlNet is for text, LoRA is for images', 'LoRA requires a GPU, ControlNet does not'], correct: 1,
        optsKn: ['ಅವೂ ಅದೇ ತಂತ್ರ', 'LoRA style/concept ಗಾಗಿ frozen model ನ weights ಹೊಂದಿಸುತ್ತದೆ; ControlNet weights ಮುಟ್ಟದೆ ಒಂದೂ external feature signal ಮೂಲಕ spatial structure ನಿಯಂತ್ರಿಸುತ್ತದೆ', 'ControlNet text ಗಾಗಿ, LoRA images ಗಾಗಿ', 'LoRA ಗೆ ಒಂದೂ GPU ಅಗತ್ಯ, ControlNet ಗೆ ಇಲ್ಲ'] },
    ] } },
  ],
};
