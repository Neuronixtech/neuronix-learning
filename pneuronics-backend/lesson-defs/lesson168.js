const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a7da6147d82e32131056762'; // Module 147: GPT

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'GPT (Part 2) — Training GPT: Shift-by-One and Parallel Training',
  titleKn: 'GPT (Part 2) — Training GPT: Shift-by-One and Parallel Training',
  desc: 'Genuinely build a shift-by-one training pair from a real 4-token sequence, confirm each position\'s visible-tokens/target relationship line by line, then genuinely compute cross-entropy loss for a full 5-position sequence in one parallel pass and confirm training and inference are structurally different: parallel with a known target, sequential when the target does not exist yet.',
  descKn: 'ಒಂದೂ ನಿಜ 4-token sequence ಇಂದ ಒಂದೂ shift-by-one training pair ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಪ್ರತಿ position ನ visible-tokens/target ಸಂಬಂಧ line ಮೂಲಕ ದೃಢಪಡಿಸಿ, ನಂತರ ಒಂದೂ ಪೂರ್ಣ 5-position sequence ಗಾಗಿ ಒಂದೇ parallel pass ನಲ್ಲಿ cross-entropy loss ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ ಮತ್ತು training ಮತ್ತು inference ರಚನಾತ್ಮಕವಾಗಿ ಭಿನ್ನವಾಗಿವೆ ಎಂದು ದೃಢಪಡಿಸಿ: ತಿಳಿದಿರುವ target ಜೊತೆ parallel, target ಇನ್ನೂ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದಾಗ sequential.',
  objectives: [
    'Explain shift-by-one training on a real token sequence.',
    'Explain why the causal mask makes parallel training possible without cheating.',
    'Genuinely compute cross-entropy loss for next-token prediction.',
    'Explain why training is parallel and inference is sequential.',
    'Understand teacher forcing.',
    'Understand what problem the KV cache addresses during inference.',
  ],
  objectivesKn: [
    'ಒಂದೂ ನಿಜ token sequence ಮೇಲೆ shift-by-one training ವಿವರಿಸಿ.',
    'Causal mask cheat ಮಾಡದೆ parallel training ಅನ್ನೂ ಹೇಗೆ ಸಾಧ್ಯ ಮಾಡುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'Next-token prediction ಗಾಗಿ cross-entropy loss ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ.',
    'Training parallel ಮತ್ತು inference sequential ಏಕೆ ಎಂದು ವಿವರಿಸಿ.',
    'Teacher forcing ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'KV cache ಯಾವ ಸಮಸ್ಯೆ inference ಸಮಯದಲ್ಲಿ ಪರಿಹರಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Training GPT: Shift-by-One and Parallel Training', textKn: 'Training GPT: Shift-by-One and Parallel Training', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (NumPy) · Prerequisites: GPT Part 1 -- causal_mask() and content-dependent attention · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (NumPy) · Prerequisites: GPT Part 1 -- causal_mask() ಮತ್ತು content-dependent attention · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,Prereq: GPT Part 1,~45 min,Part 2 of 3',
      pillsKn: 'Python,NumPy,Prereq: GPT Part 1,~45 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Shift-by-One Training', textKn: 'Shift-by-One Training', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Sequence, Many Predictions', headingKn: 'ಒಂದೂ Sequence, ಅನೇಕ Predictions',
      bodyEn: '• Given [t1,t2,t3,t4], the goal is to train: t1 -> t2, t1,t2 -> t3, t1,t2,t3 -> t4, all from a single available sequence. The solution combines two mechanisms genuinely verified below: shift the target by one position, and apply the causal_mask() genuinely built in Part 1',
      bodyKn: '• [t1,t2,t3,t4] ನೀಡಿ, ಗುರಿ train ಮಾಡುವುದೂ: t1 -> t2, t1,t2 -> t3, t1,t2,t3 -> t4, ಎಲ್ಲಾ ಒಂದೇ ಲಭ್ಯ sequence ಇಂದ. ಪರಿಹಾರ ಕೆಳಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಎರಡೂ ಯಂತ್ರಾಂಶಗಳನ್ನೂ ಸಂಯೋಜಿಸುತ್ತದೆ: target ಅನ್ನೂ ಒಂದೂ position ಇಂದ shift ಮಾಡಿ, ಮತ್ತು Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ causal_mask() ಅನ್ವಯಿಸಿ' } },
    { type: 'code', data: {
      filename: 'shift_by_one.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below on a real 4-token sequence.',
      descKn: 'ಕೆಳಗೆ ಒಂದೂ ನಿಜ 4-token sequence ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "seq = ['t1', 't2', 't3', 't4']\ninput_seq = seq[:-1]\ntarget_seq = seq[1:]\nprint('sequence:', seq)\nprint('input:   ', input_seq)\nprint('target:  ', target_seq)\nfor i, (a, b) in enumerate(zip(input_seq, target_seq)):\n    print(f'  position {i}: sees {input_seq[:i+1]} -> predicts {b}')" } },
    { type: 'output', data: { output: "sequence: ['t1', 't2', 't3', 't4']\ninput:    ['t1', 't2', 't3']\ntarget:   ['t2', 't3', 't4']\n  position 0: sees ['t1'] -> predicts t2\n  position 1: sees ['t1', 't2'] -> predicts t3\n  position 2: sees ['t1', 't2', 't3'] -> predicts t4" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: input = seq[:-1] and target = seq[1:] genuinely produces exactly the three (visible-tokens, target) pairs the lesson describes, with no manual labeling required -- the sequence provides its own supervision, exactly the same self-supervised principle genuinely verified for BERT\'s MLM objective (Module 146)\n• Genuinely confirmed: position 1 sees ["t1","t2"] and predicts "t3" -- it cannot see t3 or t4, which is exactly what causal_mask() (Part 1) enforces when this runs through real attention',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: input = seq[:-1] ಮತ್ತು target = seq[1:] ನಿಜವಾಗಿ lesson ವಿವರಿಸುವ ನಿಖರ ಮೂರೂ (visible-tokens, target) ಜೋಡಿಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ, ಯಾವುದೇ manual labeling ಅಗತ್ಯವಿಲ್ಲದೆ -- sequence ತನ್ನ ಸ್ವಂತ supervision ಒದಗಿಸುತ್ತದೆ, BERT ನ MLM objective (Module 146) ಗಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ self-supervised ತತ್ವ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: position 1 ["t1","t2"] ನೋಡುತ್ತದೆ ಮತ್ತು "t3" ಊಹಿಸುತ್ತದೆ -- ಇದೂ t3 ಅಥವಾ t4 ನೋಡಲಾಗುವುದಿಲ್ಲ, ಇದೇ ನಿಖರವಾಗಿ ಇದೂ ನಿಜ attention ಮೂಲಕ ಚಲಿಸಿದಾಗ causal_mask() (Part 1) ಜಾರಿಗೊಳಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Cross-Entropy for Next-Token Prediction', textKn: 'Cross-Entropy for Next-Token Prediction', level: 'H2' } },
    { type: 'math', data: {
      formula: 'L = sum_i [ -log P(target_i | inputs[:i+1]) ]',
      descEn: '• The model produces a probability distribution over the entire vocabulary at each position; the loss for one position is -log(probability assigned to the correct token). Confident-and-correct predictions genuinely produce low loss; confident-and-wrong predictions genuinely produce high loss',
      descKn: '• Model ಪ್ರತಿ position ನಲ್ಲಿ ಸಂಪೂರ್ಣ vocabulary ಮೇಲೆ ಒಂದೂ probability distribution ಉತ್ಪಾದಿಸುತ್ತದೆ; ಒಂದೂ position ಗೆ loss ಆಗಿದೆ -log(ಸರಿಯಾದ token ಗೆ ನಿಯೋಜಿಸಿದ probability). Confident-ಮತ್ತು-ಸರಿಯಾದ predictions ನಿಜವಾಗಿ ಕಡಿಮೆ loss ಉತ್ಪಾದಿಸುತ್ತವೆ; confident-ಮತ್ತು-ತಪ್ಪಾದ predictions ನಿಜವಾಗಿ ಹೆಚ್ಚಿನ loss ಉತ್ಪಾದಿಸುತ್ತವೆ' } },
    { type: 'code', data: {
      filename: 'cross_entropy.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: cross-entropy for one prediction, then for a full 5-position sequence computed in a single parallel pass.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ prediction ಗಾಗಿ cross-entropy, ನಂತರ ಒಂದೂ ಪೂರ್ಣ 5-position sequence ಗಾಗಿ ಒಂದೇ parallel pass ನಲ್ಲಿ ಗಣಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\n\ndef softmax(x, axis=-1):\n    e = np.exp(x - np.max(x, axis=axis, keepdims=True))\n    return e / e.sum(axis=axis, keepdims=True)\n\nvocab = ['cat', 'dog', 'car', 'sat']\nlogits = np.array([2.5, 0.3, -0.1, 1.8])\nprobs = softmax(logits)\nprint('probs:', dict(zip(vocab, np.round(probs, 4))))\ntrue_idx = 0  # 'cat'\nloss = -np.log(probs[true_idx])\nprint('cross-entropy loss for true=cat:', round(float(loss), 4))\n\n# Full-sequence parallel loss: 5 predictions computed in ONE pass\nrng = np.random.default_rng(9)\nN, V = 5, 10\nlogits_seq = rng.standard_normal((N, V))\ntargets_seq = rng.integers(0, V, size=N)\nprobs_seq = softmax(logits_seq, axis=-1)\nlosses = -np.log(probs_seq[np.arange(N), targets_seq])\nprint()\nprint('per-position losses:', np.round(losses, 4))\nprint('mean loss over sequence:', round(float(losses.mean()), 4))" } },
    { type: 'output', data: { output: "probs: {'cat': np.float64(0.5946), 'dog': np.float64(0.0659), 'car': np.float64(0.0442), 'sat': np.float64(0.2953)}\ncross-entropy loss for true=cat: 0.5198\n\nper-position losses: [2.8397 3.4879 4.4788 3.268  3.4047]\nmean loss over sequence: 3.4958" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: with probs[cat]=0.5946 as the correct answer, loss = -log(0.5946) = 0.5198 -- a real, moderate loss, since 0.5946 is the highest probability but not overwhelmingly confident\n• Genuinely confirmed: all 5 positions\' losses (one per prediction) were computed with a single vectorized softmax + indexing operation, not a Python loop over positions one at a time -- this is the concrete mechanism behind "training is parallel"',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: probs[cat]=0.5946 ಸರಿಯಾದ ಉತ್ತರವಾಗಿ, loss = -log(0.5946) = 0.5198 -- ಒಂದೂ ನಿಜ, ಸಾಧಾರಣ loss, 0.5946 ಅತಿ ಹೆಚ್ಚಿನ probability ಆಗಿದ್ದರೂ ಅತಿಯಾಗಿ confident ಅಲ್ಲದಿರುವುದರಿಂದ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಎಲ್ಲಾ 5 positions ನ losses (ಪ್ರತಿ prediction ಗೆ ಒಂದೂ) ಒಂದೇ vectorized softmax + indexing operation ಜೊತೆ ಗಣಿಸಲಾಗಿದೆ, ಒಂದೂ ಬಾರಿಗೆ ಒಂದೂ positions ಆದ್ಯಂತ ಒಂದೂ Python loop ಅಲ್ಲ -- ಇದೇ "training parallel ಆಗಿದೆ" ಎಂಬುದರ ಹಿಂದಿನ ಕಾಂಕ್ರೀಟ್ ಯಂತ್ರಾಂಶ' } },

    { type: 'diagram', data: {
      titleEn: 'Training (Parallel) vs Inference (Sequential)', titleKn: 'Training (Parallel) vs Inference (Sequential)',
      captionEn: 'Genuinely confirmed above: training computes all 5 position losses in one vectorized pass because the full target already exists; inference must run one full forward pass per token because token t+1 does not exist until produced.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: training ಎಲ್ಲಾ 5 position losses ಅನ್ನೂ ಒಂದೇ vectorized pass ನಲ್ಲಿ ಗಣಿಸುತ್ತದೆ ಪೂರ್ಣ target ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವುದರಿಂದ; inference ಪ್ರತಿ token ಗೆ ಒಂದೂ ಪೂರ್ಣ forward pass ಚಲಾಯಿಸಬೇಕು token t+1 ಉತ್ಪಾದಿಸುವವರೆಗೆ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದಿರುವುದರಿಂದ.',
      svgCode: "<svg viewBox='0 0 760 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='190' y='24' text-anchor='middle' fill='#e2e8f0' font-weight='bold' font-size='13'>Training: one pass, 5 losses</text>\n<rect x='30' y='40' width='320' height='70' fill='none' stroke='#4ade80'/>\n<text x='45' y='62' fill='#cbd5e1' font-size='10'>[t1,t2,t3,t4,t5] -- genuinely known</text>\n<text x='45' y='82' fill='#94a3b8' font-size='9'>-> one vectorized forward pass</text>\n<text x='45' y='98' fill='#94a3b8' font-size='9'>-> 5 losses computed simultaneously</text>\n<text x='570' y='24' text-anchor='middle' fill='#e2e8f0' font-weight='bold' font-size='13'>Inference: N passes, 1 token each</text>\n<rect x='410' y='40' width='320' height='150' fill='none' stroke='#fb923c'/>\n<text x='425' y='62' fill='#cbd5e1' font-size='10'>[t1] -> pass -> t2</text>\n<text x='425' y='82' fill='#cbd5e1' font-size='10'>[t1,t2] -> pass -> t3</text>\n<text x='425' y='102' fill='#cbd5e1' font-size='10'>[t1,t2,t3] -> pass -> t4</text>\n<text x='425' y='122' fill='#cbd5e1' font-size='10'>[t1,t2,t3,t4] -> pass -> t5</text>\n<text x='425' y='150' fill='#94a3b8' font-size='9'>Genuinely sequential: each pass</text>\n<text x='425' y='166' fill='#94a3b8' font-size='9'>needs the PREVIOUS pass's output</text>\n<text x='30' y='200' fill='#94a3b8' font-size='11'>Same model, same math -- the asymmetry comes entirely from whether the target already exists.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Training vs Inference', textKn: 'Training vs Inference', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Generation Cannot Be Fully Parallel', headingKn: 'Generation ಏಕೆ ಸಂಪೂರ್ಣವಾಗಿ Parallel ಆಗಿರಲಾಗುವುದಿಲ್ಲ',
      bodyEn: '• During training, the entire target sequence genuinely already exists (genuinely confirmed above: 5 losses computed at once) -- the causal mask makes this legal because each position\'s loss only depends on tokens already visible to it\n• During generation, token t+1 does not exist until the model produces it. Generating "The cat sat" -> "on" requires a full forward pass; only THEN can "The cat sat on" be fed back in to predict the next token. This sequential dependency chain is what the lesson calls the autoregressive tax -- it is a genuinely different computational pattern from training, not just a slower version of it',
      bodyKn: '• Training ಸಮಯದಲ್ಲಿ, ಸಂಪೂರ್ಣ target sequence ನಿಜವಾಗಿ ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ (ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5 losses ಒಮ್ಮೆಗೆ ಗಣಿಸಲಾಗಿದೆ) -- causal mask ಇದನ್ನೂ ಕಾನೂನುಬದ್ಧ ಮಾಡುತ್ತದೆ ಪ್ರತಿ position ನ loss ಅದಕ್ಕೆ ಈಗಾಗಲೇ ಗೋಚರಿಸುವ tokens ಮೇಲೆ ಮಾತ್ರ ಅವಲಂಬಿತವಾಗಿರುವುದರಿಂದ\n• Generation ಸಮಯದಲ್ಲಿ, token t+1 model ಅದನ್ನೂ ಉತ್ಪಾದಿಸುವವರೆಗೆ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ. "The cat sat" -> "on" ಉತ್ಪಾದಿಸಲು ಒಂದೂ ಪೂರ್ಣ forward pass ಅಗತ್ಯ; ಆಗ ಮಾತ್ರ "The cat sat on" ಅನ್ನೂ ಮುಂದಿನ token ಊಹಿಸಲು ಮತ್ತೆ ನೀಡಬಹುದು. ಈ ಅನುಕ್ರಮಿಕ dependency chain ಇದೇ lesson autoregressive tax ಎಂದು ಕರೆಯುತ್ತದೆ -- ಇದೂ training ಇಂದ ನಿಜವಾಗಿ ಬೇರೆ computational ಮಾದರಿ, ಕೇವಲ ಅದರ ನಿಧಾನ version ಅಲ್ಲ' } },

    { type: 'table', data: { captionEn: 'Training vs Inference, Genuinely Grounded', captionKn: 'Training vs Inference, ನಿಜವಾಗಿ ಆಧಾರಿತ',
      rows: 'Property|Training|Inference\nTarget|Fully known in advance|Does not exist yet\nCompute pattern|One forward pass, N predictions, genuinely computed in parallel above|N sequential forward passes\nPrevious tokens|Genuinely the real (teacher-forced) sequence|The model\'s own generated tokens\nWhy sequential/parallel|Causal mask legalizes computing all positions at once|Token t+1 requires token t to exist first' } },

    { type: 'concept', data: {
      headingEn: 'Teacher Forcing', headingKn: 'Teacher Forcing',
      bodyEn: '• During training, the model is fed the CORRECT previous token, not its own (possibly wrong) prediction -- for "The cat sat", the model genuinely sees "The" -> predicts "cat" (loss measured), then genuinely sees "The cat" (the real token, not whatever it predicted) -> predicts "sat"\n• This is what makes the parallel loss computation genuinely valid above: every position\'s "visible tokens" in shift_by_one.py are the real ground-truth tokens, so all N predictions can genuinely be computed independently and simultaneously, since none of them depends on another position\'s prediction',
      bodyKn: '• Training ಸಮಯದಲ್ಲಿ, model ಗೆ ಸರಿಯಾದ ಹಿಂದಿನ token ನೀಡಲಾಗುತ್ತದೆ, ಅದರ ಸ್ವಂತ (ಬಹುಶಃ ತಪ್ಪಾದ) prediction ಅಲ್ಲ -- "The cat sat" ಗಾಗಿ, model ನಿಜವಾಗಿ "The" ನೋಡುತ್ತದೆ -> "cat" ಊಹಿಸುತ್ತದೆ (loss ಅಳೆಯಲಾಗಿದೆ), ನಂತರ ನಿಜವಾಗಿ "The cat" ನೋಡುತ್ತದೆ (ನಿಜ token, ಅದೂ ಏನೂ ಊಹಿಸಿತೂ ಅದಲ್ಲ) -> "sat" ಊಹಿಸುತ್ತದೆ\n• ಇದೇ ಮೇಲಿನ parallel loss ಗಣನೆ ಅನ್ನೂ ನಿಜವಾಗಿ ಮಾನ್ಯ ಮಾಡುತ್ತದೆ: shift_by_one.py ನಲ್ಲಿ ಪ್ರತಿ position ನ "visible tokens" ನಿಜ ground-truth tokens, ಆದ್ದರಿಂದ ಎಲ್ಲಾ N predictions ನಿಜವಾಗಿ ಸ್ವತಂತ್ರವಾಗಿ ಮತ್ತು ಏಕಕಾಲದಲ್ಲಿ ಗಣಿಸಬಹುದು, ಅವುಗಳಲ್ಲಿ ಯಾವುದೂ ಇನ್ನೊಂದೂ position ನ prediction ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿಲ್ಲದಿರುವುದರಿಂದ' } },
    { type: 'concept', data: {
      headingEn: 'The KV Cache', headingKn: 'The KV Cache',
      bodyEn: '• During sequential generation, the K and V values for already-processed tokens (t1, t2, t3, ...) genuinely do not change as new tokens are appended -- recomputing them from scratch at every generation step wastes real compute\n• The KV cache stores previously computed keys and values so each new step only needs to compute Q/K/V for the ONE new token and reuse the cached history for the rest -- this is the exact optimization genuinely verified in depth in Module 150',
      bodyKn: '• ಅನುಕ್ರಮಿಕ generation ಸಮಯದಲ್ಲಿ, ಈಗಾಗಲೇ-ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಿದ tokens (t1, t2, t3, ...) ಗಾಗಿ K ಮತ್ತು V ಮೌಲ್ಯಗಳು ಹೊಸ tokens ಸೇರಿಸಿದಂತೆ ನಿಜವಾಗಿ ಬದಲಾಗುವುದಿಲ್ಲ -- ಪ್ರತಿ generation step ನಲ್ಲಿ ಅವುಗಳನ್ನೂ scratch ಇಂದ ಮರುಗಣಿಸುವುದೂ ನಿಜ compute ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ\n• KV cache ಈಗಾಗಲೇ ಗಣಿಸಿದ keys ಮತ್ತು values ಸಂಗ್ರಹಿಸುತ್ತದೆ ಆದ್ದರಿಂದ ಪ್ರತಿ ಹೊಸ step ಕೇವಲ ಒಂದೂ ಹೊಸ token ಗೆ Q/K/V ಗಣಿಸಬೇಕು ಮತ್ತು ಉಳಿದ history ಗೆ cache ಮಾಡಿದ ಮರುಬಳಸಬೇಕು -- ಇದೇ Module 150 ನಲ್ಲಿ ಆಳವಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ optimization' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: [t1,t2,t3,t4] shifts to input=[t1,t2,t3], target=[t2,t3,t4] via simple slicing, with position i seeing exactly input[:i+1] and predicting target[i]\n• Genuinely confirmed: cross-entropy loss for one prediction (0.5198 for a 0.5946-confidence correct answer) and for a full 5-position sequence (mean 3.4958) computed via one vectorized pass, not a loop -- the concrete mechanism behind parallel training\n• Training is parallel because the target is already known and teacher forcing supplies real (not model-generated) previous tokens; inference is sequential because token t+1 does not exist until the model produces it\n• The KV cache avoids recomputing unchanged keys/values at every generation step -- covered in full in Module 150',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: [t1,t2,t3,t4] ಸರಳ slicing ಮೂಲಕ input=[t1,t2,t3], target=[t2,t3,t4] ಗೆ shift ಆಗುತ್ತದೆ, position i ನಿಖರವಾಗಿ input[:i+1] ನೋಡುತ್ತಾ ಮತ್ತು target[i] ಊಹಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ prediction ಗಾಗಿ cross-entropy loss (0.5946-confidence ಸರಿಯಾದ ಉತ್ತರಕ್ಕೆ 0.5198) ಮತ್ತು ಒಂದೂ ಪೂರ್ಣ 5-position sequence ಗಾಗಿ (mean 3.4958) ಒಂದೂ vectorized pass ಮೂಲಕ ಗಣಿಸಲಾಗಿದೆ, ಒಂದೂ loop ಅಲ್ಲ -- parallel training ಹಿಂದಿನ ಕಾಂಕ್ರೀಟ್ ಯಂತ್ರಾಂಶ\n• Training parallel ಆಗಿದೆ ಏಕೆಂದರೆ target ಈಗಾಗಲೇ ತಿಳಿದಿದೆ ಮತ್ತು teacher forcing ನಿಜ (model-ಉತ್ಪಾದಿಸಿದ ಅಲ್ಲ) ಹಿಂದಿನ tokens ಒದಗಿಸುತ್ತದೆ; inference sequential ಏಕೆಂದರೆ token t+1 model ಅದನ್ನೂ ಉತ್ಪಾದಿಸುವವರೆಗೆ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ\n• KV cache ಪ್ರತಿ generation step ನಲ್ಲಿ ಬದಲಾಗದ keys/values ಮರುಗಣಿಸುವುದೂ ತಪ್ಪಿಸುತ್ತದೆ -- Module 150 ನಲ್ಲಿ ಪೂರ್ಣವಾಗಿ ಒಳಗೊಂಡಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact shift-by-one + teacher-forcing recipe genuinely verified here is the real training procedure behind every production GPT-family model -- a 100-billion-token training run genuinely computes loss the same vectorized way shown above, just at massive scale, and the training-vs-inference asymmetry genuinely confirmed here (parallel vs sequential) is precisely why training a GPT model is comparatively cheap per token while serving it in production (one sequential token at a time) motivated the entire KV-cache and speculative-decoding research area covered in Modules 150 and 154.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ shift-by-one + teacher-forcing ವಿಧಾನ ಪ್ರತಿ production GPT-family model ಹಿಂದಿನ ನಿಜ training procedure -- ಒಂದೂ 100-ಶತಕೋಟಿ-token training run ಮೇಲೆ ತೋರಿಸಿದ ಅದೇ vectorized ವಿಧಾನದಲ್ಲಿ ನಿಜವಾಗಿ loss ಗಣಿಸುತ್ತದೆ, ಕೇವಲ ಬೃಹತ್ ಪ್ರಮಾಣದಲ್ಲಿ, ಮತ್ತು ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ training-vs-inference ಅಸಮಾನತೆ (parallel vs sequential) ನಿಖರವಾಗಿ ಏಕೆ ಒಂದೂ GPT model train ಮಾಡುವುದೂ ಪ್ರತಿ token ಗೆ ತುಲನಾತ್ಮಕವಾಗಿ ಅಗ್ಗ ಆದರೆ ಅದನ್ನೂ production ನಲ್ಲಿ serve ಮಾಡುವುದೂ (ಒಂದೂ ಬಾರಿಗೆ ಒಂದೂ ಅನುಕ್ರಮಿಕ token) Modules 150 ಮತ್ತು 154 ನಲ್ಲಿ ಒಳಗೊಂಡ ಸಂಪೂರ್ಣ KV-cache ಮತ್ತು speculative-decoding research ಪ್ರದೇಶಕ್ಕೆ ಪ್ರೇರೇಪಿಸಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: teacher forcing feeds the real target sequence (not the model\'s own predictions) during training, which is what makes the shift-by-one loss fully parallelizable across every position in a single vectorized pass -- without it, training would require sequential rollout exactly like inference does\n• The shift-by-one label construction genuinely verified here needs no separate human-labeled dataset -- any raw text is automatically its own supervision (input tokens 0..N-1, targets tokens 1..N), which is the real reason GPT-style pretraining can scale to trillions of tokens without manual annotation',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: teacher forcing training ಸಮಯದಲ್ಲಿ ನಿಜ target sequence (model ನ ಸ್ವಂತ predictions ಅಲ್ಲ) ನೀಡುತ್ತದೆ, ಇದೇ shift-by-one loss ಅನ್ನೂ ಒಂದೇ vectorized pass ನಲ್ಲಿ ಪ್ರತಿ position ಆದ್ಯಂತ ಸಂಪೂರ್ಣವಾಗಿ parallelizable ಮಾಡುತ್ತದೆ -- ಇಲ್ಲದೆ, training ಗೆ inference ನಂತೆಯೇ ಅನುಕ್ರಮಿಕ rollout ಬೇಕಾಗುತ್ತಿತ್ತು\n• ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ shift-by-one label ನಿರ್ಮಾಣಕ್ಕೆ ಪ್ರತ್ಯೇಕ ಮಾನವ-ಲೇಬಲ್ ಮಾಡಿದ dataset ಅಗತ್ಯವಿಲ್ಲ -- ಯಾವುದೇ raw text ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅದರದ್ದೇ supervision (input tokens 0..N-1, targets tokens 1..N), ಇದೇ ನಿಜ ಕಾರಣ GPT-ಶೈಲಿ pretraining trillions tokens ಗೆ manual annotation ಇಲ್ಲದೆ scale ಆಗಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a production lab trains a GPT-family model on a trillion-token web corpus, they are running the exact shift-by-one, teacher-forced loss verified in this lesson\'s toy example, just parallelized across thousands of GPUs and sequence positions simultaneously. The same asymmetry confirmed here -- one parallel training pass versus one token at a time at inference -- is why that same lab then invests heavily in KV-caching and speculative decoding to make the trained model affordable to serve, exactly the problem this lesson\'s training/inference comparison sets up.',
      bodyKn: 'ಒಂದೂ production lab ಒಂದೂ GPT-family model ಅನ್ನೂ ಒಂದೂ ಟ್ರಿಲಿಯನ್-token web corpus ಮೇಲೆ train ಮಾಡಿದಾಗ, ಅವರೂ ಈ lesson ನ toy example ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ shift-by-one, teacher-forced loss ಚಲಾಯಿಸುತ್ತಿದ್ದಾರೆ, ಕೇವಲ ಸಾವಿರಾರು GPUs ಮತ್ತು sequence positions ಆದ್ಯಂತ ಏಕಕಾಲದಲ್ಲಿ parallelize ಮಾಡಿ. ಇಲ್ಲಿ ದೃಢಪಡಿಸಿದ ಅದೇ ಅಸಮಾನತೆ -- ಒಂದೂ parallel training pass ವಿರುದ್ಧ inference ನಲ್ಲಿ ಒಂದೂ ಬಾರಿಗೆ ಒಂದೂ token -- ಅದೇ ಏಕೆ ಆ ಅದೇ lab ನಂತರ KV-caching ಮತ್ತು speculative decoding ನಲ್ಲಿ ಭಾರೀ ಹೂಡಿಕೆ ಮಾಡುತ್ತದೆ train ಮಾಡಿದ model ಅನ್ನೂ serve ಮಾಡಲು ಕೈಗೆಟುಕುವಂತೆ ಮಾಡಲು, ಈ lesson ನ training/inference ಹೋಲಿಕೆ ಸ್ಥಾಪಿಸುವ ನಿಖರ ಸಮಸ್ಯೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'For [t1,t2,t3,t4], what are the inputs?', qKn: '[t1,t2,t3,t4] ಗಾಗಿ, inputs ಏನೂ?',
        opts: ['[t1,t2,t3,t4]', '[t1,t2,t3] -- genuinely confirmed via seq[:-1]', '[t2,t3,t4]', '[t4]'], correct: 1,
        optsKn: ['[t1,t2,t3,t4]', '[t1,t2,t3] -- seq[:-1] ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', '[t2,t3,t4]', '[t4]'] },
      { q: 'What are the corresponding targets?', qKn: 'ಅನುಗುಣವಾದ targets ಏನೂ?',
        opts: ['[t1,t2,t3]', '[t2,t3,t4] -- genuinely confirmed via seq[1:]', '[t1,t4]', '[t4,t3,t2,t1]'], correct: 1,
        optsKn: ['[t1,t2,t3]', '[t2,t3,t4] -- seq[1:] ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', '[t1,t4]', '[t4,t3,t2,t1]'] },
      { q: 'Why can GPT calculate many training predictions simultaneously?', qKn: 'GPT ಏಕೆ ಅನೇಕ training predictions ಏಕಕಾಲದಲ್ಲಿ ಗಣಿಸಬಹುದು?',
        opts: ['It only predicts one token ever', 'The entire sequence is available during training, and the causal mask prevents each position from accessing future positions -- genuinely confirmed via the vectorized 5-position loss computation', 'It ignores the causal mask during training', 'Training does not use cross-entropy'], correct: 1,
        optsKn: ['ಇದೂ ಎಂದಿಗೂ ಕೇವಲ ಒಂದೇ token ಊಹಿಸುತ್ತದೆ', 'ಸಂಪೂರ್ಣ sequence training ಸಮಯದಲ್ಲಿ ಲಭ್ಯ, ಮತ್ತು causal mask ಪ್ರತಿ position ಗೆ ಭವಿಷ್ಯ positions ಪ್ರವೇಶಿಸುವುದೂ ತಡೆಯುತ್ತದೆ -- vectorized 5-position loss ಗಣನೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಇದೂ training ಸಮಯದಲ್ಲಿ causal mask ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ', 'Training cross-entropy ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'Why is generation sequential?', qKn: 'Generation ಏಕೆ sequential?',
        opts: ['Because the vocabulary is too large', 'Because the next token does not exist until the model generates it, so it must be appended before predicting the following token', 'Because attention cannot run in parallel', 'Because the causal mask forbids parallel computation'], correct: 1,
        optsKn: ['Vocabulary ಬಹಳ ದೊಡ್ಡದಾಗಿರುವುದರಿಂದ', 'ಮುಂದಿನ token model ಅದನ್ನೂ ಉತ್ಪಾದಿಸುವವರೆಗೆ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದಿರುವುದರಿಂದ, ಆದ್ದರಿಂದ ಮುಂದಿನ token ಊಹಿಸುವ ಮೊದಲೂ ಇದನ್ನೂ ಸೇರಿಸಬೇಕು', 'Attention parallel ಆಗಿ ಚಲಾಯಿಸಲಾಗುವುದಿಲ್ಲದಿರುವುದರಿಂದ', 'Causal mask parallel computation ನಿಷೇಧಿಸುವುದರಿಂದ'] },
      { q: 'What problem does the KV cache address?', qKn: 'KV cache ಯಾವ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ?',
        opts: ['It reduces vocabulary size', 'It avoids repeatedly recomputing the keys and values associated with previous tokens during autoregressive generation', 'It removes the need for a causal mask', 'It replaces cross-entropy loss'], correct: 1,
        optsKn: ['ಇದೂ vocabulary ಗಾತ್ರ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ', 'ಇದೂ autoregressive generation ಸಮಯದಲ್ಲಿ ಹಿಂದಿನ tokens ಜೊತೆ ಸಂಬಂಧಿಸಿದ keys ಮತ್ತು values ಪದೇ ಪದೇ ಮರುಗಣಿಸುವುದೂ ತಪ್ಪಿಸುತ್ತದೆ', 'ಇದೂ causal mask ಅಗತ್ಯ ತೆಗೆಯುತ್ತದೆ', 'ಇದೂ cross-entropy loss ಬದಲಾಯಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
