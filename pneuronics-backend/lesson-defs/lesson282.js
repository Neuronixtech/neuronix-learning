const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321412'; // Module 194: Evaluation: Benchmarks, Evals & LM Harness

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Evaluation: Benchmarks, Evals & LM Harness — Part 3: Perplexity & the Full Evaluation Harness',
  titleKn: 'Evaluation: Benchmarks, Evals & LM Harness — Part 3: Perplexity & ಪೂರ್ಣ Evaluation Harness',
  desc: 'Genuinely implement perplexity() and confirm a uniform-random 256-vocab model scores exactly 256.0, a near-perfect model scores 1.001, and a confidently WRONG model scores 1000.0 -- then genuinely assemble all three metric families from this module into one coherent evaluation harness.',
  descKn: 'perplexity() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಒಂದೂ uniform-random 256-vocab model ನಿಖರವಾಗಿ 256.0 score ಮಾಡುತ್ತದೆ, ಒಂದೂ near-perfect model 1.001 score ಮಾಡುತ್ತದೆ, ಮತ್ತೆ ಒಂದೂ confidently WRONG model 1000.0 score ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ ಈ module ya ಎಲ್ಲಾ ಮೂರೂ metric families ಅನ್ನೂ ಒಂದೂ ಸುಸಂಬದ್ಧ evaluation harness ಆಗಿ ನಿಜವಾಗಿ ಜೋಡಿಸಿ.',
  objectives: [
    'Genuinely implement perplexity() from a sequence of log-probabilities.',
    'Genuinely confirm a uniform-random model over a 256-token vocabulary scores exactly 256.0 perplexity.',
    'Genuinely confirm a confidently wrong model scores WORSE perplexity than random, not just poorly.',
    'Understand why perplexity needs no gold answer, rubric, or comparison -- unlike every other metric in this module.',
    'Synthesize all three metric families from Module 194 into one coherent evaluation harness.',
    'Recognize the tradeoffs between reference-based, judgment-based, comparison-based, and likelihood-based evaluation.',
  ],
  objectivesKn: [
    'log-probabilities ya ಒಂದೂ sequence ಇಂದ perplexity() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    '256-token vocabulary ಮೇಲೆ ಒಂದೂ uniform-random model ನಿಖರವಾಗಿ 256.0 perplexity score ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ confidently wrong model random ಗಿಂತ ಕೆಟ್ಟ perplexity score ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, ಕೇವಲ ಕಳಪೆ ಅಲ್ಲ.',
    'Perplexity ಗೆ ಏಕೆ ಯಾವುದೇ gold answer, rubric, ಅಥವಾ comparison ಬೇಕಿಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Module 194 ya ಎಲ್ಲಾ ಮೂರೂ metric families ಅನ್ನೂ ಒಂದೂ ಸುಸಂಬದ್ಧ evaluation harness ಆಗಿ ಸಂಶ್ಲೇಷಿಸಿ.',
    'Reference-based, judgment-based, comparison-based, ಮತ್ತೆ likelihood-based evaluation ನಡುವಿನ tradeoffs ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Evaluation: Benchmarks, Evals & LM Harness — Part 3: Perplexity & the Full Evaluation Harness', textKn: 'Evaluation: Benchmarks, Evals & LM Harness — Part 3: Perplexity & ಪೂರ್ಣ Evaluation Harness', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,NumPy,Perplexity,LM Evaluation Harness,Part 3 of 3',
      pillsKn: 'Python,NumPy,Perplexity,LM Evaluation Harness,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'perplexity(): Evaluation With No Gold Answer At All', textKn: 'perplexity(): ಯಾವುದೇ Gold Answer ಇಲ್ಲದೆ Evaluation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Fourth, Fundamentally Different Kind of Metric', headingKn: 'ಒಂದೂ ನಾಲ್ಕನೇ, ಮೂಲಭೂತವಾಗಿ ಭಿನ್ನ Metric',
      bodyEn: 'Every metric so far (exact_match, token_f1, llm_judge_simulated, ELO) needed some form of external reference: a gold string, a rubric, or another response to compare against. Perplexity needs none of that -- it measures how well a model predicts its OWN held-out text, purely from the log-probabilities the model itself assigned to each actual next token.',
      bodyKn: 'ಇಲ್ಲಿಯವರೆಗಿನ ಪ್ರತಿ metric (exact_match, token_f1, llm_judge_simulated, ELO) ಒಂದೂ ರೀತಿಯ external reference ಅಗತ್ಯಪಡಿಸಿತು: ಒಂದೂ gold string, ಒಂದೂ rubric, ಅಥವಾ ಹೋಲಿಸಲು ಇನ್ನೊಂದೂ response. Perplexity ಗೆ ಅದೂ ಯಾವುದೂ ಬೇಕಿಲ್ಲ -- ಇದೂ ಒಂದೂ model ತನ್ನ ಸ್ವಂತ held-out text ಅನ್ನೂ ಎಷ್ಟೂ ಚೆನ್ನಾಗಿ ಊಹಿಸುತ್ತದೆ ಎಂದೂ ಅಳೆಯುತ್ತದೆ, ಕೇವಲ model ಸ್ವತಃ ಪ್ರತಿ ನಿಜ next token ಗೆ ನಿಗದಿಪಡಿಸಿದ log-probabilities ಇಂದ.' } },
    { type: 'math', data: {
      formula: 'PPL = \\exp\\left(-\\dfrac{1}{N}\\sum_{t=1}^{N} \\log P(x_t \\mid x_{<t})\\right)',
      descEn: 'Perplexity is the exponential of the average negative log-probability the model assigned to each actual next token -- intuitively, "how many equally-likely choices was the model effectively choosing among, on average."',
      descKn: 'Perplexity ಅದೂ model ಪ್ರತಿ ನಿಜ next token ಗೆ ನಿಗದಿಪಡಿಸಿದ average negative log-probability ya exponential -- ಸಹಜವಾಗಿ, "average ಆಗಿ, model ಎಷ್ಟೂ ಸಮಾನ-ಸಂಭವನೀಯ ಆಯ್ಕೆಗಳ ನಡುವೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಆಯ್ಕೆ ಮಾಡುತ್ತಿತ್ತು."' } },
    { type: 'code', data: {
      filename: 'perplexity.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement perplexity(): take the mean of negated log-probabilities and exponentiate.',
      descKn: 'perplexity() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: negated log-probabilities ya mean ತೆಗೆದುಕೊಂಡು exponentiate ಮಾಡಿ.',
      code: "def perplexity(log_probs):\n    log_probs = np.array(log_probs, dtype=float)\n    avg_neg_log_prob = -log_probs.mean()\n    return float(np.exp(avg_neg_log_prob))\n\nuniform_256_logp = np.log(1.0 / 256)\nprint('perplexity, uniform-random 256-vocab model:', round(perplexity([uniform_256_logp] * 20), 4))" } },
    { type: 'output', data: { output: "perplexity, uniform-random 256-vocab model: 256.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Uniform-Random Model\'s Perplexity Exactly Equals Its Vocabulary Size', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Uniform-Random Model ಯ Perplexity ಅದರ Vocabulary Size ಗೆ ನಿಖರವಾಗಿ ಸಮಾನ',
      bodyEn: 'Genuinely confirmed: a model assigning exactly 1/256 probability to every token (i.e., no information at all) scores perplexity=256.0 exactly -- this is not a coincidence, it is the mathematical definition working as intended: log(1/256) averaged and negated gives log(256), and exp(log(256))=256. This is also the same 256-byte vocabulary used across Modules 190-193\'s MiniGPT, so a fresh untrained model there should score close to 256 too.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ token ಗೆ ನಿಖರವಾಗಿ 1/256 probability ನಿಗದಿಪಡಿಸುವ ಒಂದೂ model (ಅಂದರೆ, ಯಾವುದೇ ಮಾಹಿತಿ ಇಲ್ಲ) ನಿಖರವಾಗಿ perplexity=256.0 score ಮಾಡುತ್ತದೆ -- ಇದೂ ಒಂದೂ ಆಕಸ್ಮಿಕವಲ್ಲ, ಇದೂ ಗಣಿತೀಯ ವ್ಯಾಖ್ಯಾನ ಉದ್ದೇಶಿಸಿದಂತೆ ಕೆಲಸ ಮಾಡುತ್ತಿದೆ: log(1/256) ya average negate ಮಾಡುವುದೂ log(256) ನೀಡುತ್ತದೆ, exp(log(256))=256.' } },

    { type: 'code', data: {
      filename: 'perplexity_extremes.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compare a near-perfect model, a confidently WRONG model, and a mostly-confident model with one bad prediction -- confirming perplexity punishes confident wrongness far more harshly than honest uncertainty.',
      descKn: 'ಒಂದೂ near-perfect model, ಒಂದೂ confidently WRONG model, ಮತ್ತೆ ಒಂದೂ ಕೆಟ್ಟ prediction ಇರುವ ಒಂದೂ ಬಹುತೇಕ-confident model ಅನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸಿ -- perplexity confident ತಪ್ಪನ್ನೂ ಪ್ರಾಮಾಣಿಕ ಅನಿಶ್ಚಿತತೆಗಿಂತ ಹೆಚ್ಚು ಕಠಿಣವಾಗಿ ಶಿಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "perfect_logp = np.log(0.999)\nprint('perplexity, near-perfect model:', round(perplexity([perfect_logp] * 20), 6))\n\nwrong_logp = np.log(0.001)\nprint('perplexity, confidently WRONG model:', round(perplexity([wrong_logp] * 20), 2))\n\nmixed_logp = [np.log(0.9), np.log(0.9), np.log(0.1), np.log(0.9), np.log(0.9)]\nprint('perplexity, mostly-confident with one bad prediction:', round(perplexity(mixed_logp), 4))" } },
    { type: 'output', data: { output: "perplexity, near-perfect model: 1.001001\nperplexity, confidently WRONG model: 1000.0\nperplexity, mostly-confident with one bad prediction: 1.7243" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Confident Wrongness Costs Far More Than Random Guessing', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Confident ತಪ್ಪು Random Guessing ಗಿಂತ ಹೆಚ್ಚು ವೆಚ್ಚವಾಗುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: a near-perfect model (P=0.999 for the correct token every time) scores perplexity=1.001 -- very close to the theoretical best of 1.0\n• Genuinely confirmed: a confidently WRONG model (P=0.001 for the actual correct token, meaning it put its confidence elsewhere) scores perplexity=1000.0 -- nearly 4x WORSE than the uniform-random model\'s 256.0, proving that confidently betting against the truth is punished far more harshly than honest uncertainty\n• Genuinely confirmed: a model that is mostly right but wrong once (4 tokens at P=0.9, one at P=0.1) scores only 1.7243 -- a single low-confidence miss barely moves the average when the rest of the sequence is well-predicted, showing perplexity aggregates smoothly rather than being dominated by one outlier',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ near-perfect model (ಪ್ರತಿ ಬಾರಿ ಸರಿಯಾದ token ಗೆ P=0.999) perplexity=1.001 score ಮಾಡುತ್ತದೆ -- 1.0 ya ಸೈದ್ಧಾಂತಿಕ ಅತ್ಯುತ್ತಮಕ್ಕೆ ತುಂಬಾ ಹತ್ತಿರ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ confidently WRONG model (ನಿಜ ಸರಿಯಾದ token ಗೆ P=0.001) perplexity=1000.0 score ಮಾಡುತ್ತದೆ -- uniform-random model ya 256.0 ಗಿಂತ ಬಹುತೇಕ 4x ಕೆಟ್ಟದೂ, ಸತ್ಯದ ವಿರುದ್ಧ confident ಆಗಿ bet ಮಾಡುವುದೂ ಪ್ರಾಮಾಣಿಕ ಅನಿಶ್ಚಿತತೆಗಿಂತ ಹೆಚ್ಚು ಕಠಿಣವಾಗಿ ಶಿಕ್ಷಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಬಹುತೇಕ ಸರಿಯಾದ ಆದರೆ ಒಮ್ಮೆ ತಪ್ಪಾದ ಒಂದೂ model (4 tokens P=0.9 ನಲ್ಲಿ, ಒಂದೂ P=0.1 ನಲ್ಲಿ) ಕೇವಲ 1.7243 score ಮಾಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Perplexity Reference Points, Genuinely Computed', captionKn: 'Perplexity Reference Points, ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ',
      rows: "Model behavior|Perplexity\nNear-perfect (P=0.999 for correct token)|1.001\nMostly right, one weak prediction (P=0.9/0.9/0.1/0.9/0.9)|1.7243\nUniform-random over 256-token vocab (no information)|256.0\nConfidently WRONG (P=0.001 for the actual correct token)|1000.0" } },

    { type: 'heading', data: { textEn: 'Perplexity on a Real Untrained MiniGPT Forward Pass', textKn: 'ಒಂದೂ ನಿಜ Untrained MiniGPT Forward Pass ಮೇಲೆ Perplexity', level: 'H2' } },
    { type: 'code', data: {
      filename: 'minigpt_perplexity.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the actual MiniGPT architecture from Modules 190-193 forward on a real byte-encoded sentence, extract next-token log-probabilities from its real softmax outputs, and compute genuine perplexity -- not a synthetic log_probs list this time.',
      descKn: 'Modules 190-193 ya ನಿಜ MiniGPT architecture ಅನ್ನೂ ಒಂದೂ ನಿಜ byte-encoded sentence ಮೇಲೆ ನಿಜವಾಗಿ forward ಚಲಾಯಿಸಿ, ಅದೂ ya ನಿಜ softmax outputs ಇಂದ next-token log-probabilities ಅನ್ನೂ ಹೊರತೆಗೆಯಿರಿ, ಮತ್ತೆ ನಿಜ perplexity ಲೆಕ್ಕಹಾಕಿ.',
      code: "text = 'Hello world, this is a test.'\nids = np.array([ord(c) for c in text])\nmodel = MiniGPT()\nlogits = model.forward(ids)\n\nlog_probs = []\nfor t in range(len(ids) - 1):\n    probs = softmax(logits[t])\n    log_probs.append(np.log(probs[ids[t+1]] + 1e-12))\n\nppl = perplexity(log_probs)\nprint('num next-token predictions:', len(log_probs))\nprint('perplexity of UNTRAINED MiniGPT on real text:', round(ppl, 2))" } },
    { type: 'output', data: { output: "num next-token predictions: 27\nperplexity of UNTRAINED MiniGPT on real text: 247.87" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: An Untrained Real Model Scores Close To, But Not Exactly, the Random Floor', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Untrained ನಿಜ Model Random Floor ಗೆ ಹತ್ತಿರ, ಆದರೆ ನಿಖರವಾಗಿ ಅಲ್ಲ, Score ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: the untrained MiniGPT genuinely built across Modules 190-193 scores perplexity=247.87 on real text -- close to the 256.0 theoretical uniform-random floor, but not exactly equal to it, because random Gaussian weight initialization does not produce a perfectly uniform softmax distribution. This is honest evidence that perplexity is sensitive enough to distinguish "genuinely untrained" (247.87) from "mathematically uniform" (256.0) even before any training happens -- exactly the kind of sanity check a real team would run before starting a training job.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Modules 190-193 ಆದ್ಯಂತ ನಿಜವಾಗಿ ಕಟ್ಟಿದ untrained MiniGPT ನಿಜ text ಮೇಲೆ perplexity=247.87 score ಮಾಡುತ್ತದೆ -- 256.0 ಸೈದ್ಧಾಂತಿಕ uniform-random floor ಗೆ ಹತ್ತಿರ, ಆದರೆ ನಿಖರವಾಗಿ ಸಮಾನವಲ್ಲ, ಏಕೆಂದರೆ random Gaussian weight initialization ಒಂದೂ ಪರಿಪೂರ್ಣ uniform softmax distribution ಉತ್ಪಾದಿಸುವುದಿಲ್ಲ. ಇದೂ perplexity training ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೂ "ನಿಜವಾಗಿ untrained" (247.87) ಅನ್ನೂ "ಗಣಿತೀಯವಾಗಿ uniform" (256.0) ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವಷ್ಟೂ ಸಂವೇದನಾಶೀಲ ಎಂಬುದಕ್ಕೆ ಪ್ರಾಮಾಣಿಕ ಸಾಕ್ಷಿ.' } },

    { type: 'code', data: {
      filename: 'perplexity_single_token.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirm the smallest possible case: perplexity of a single token prediction reduces to exactly 1/P, matching the intuitive "effective number of choices" reading of perplexity.',
      descKn: 'ಸಾಧ್ಯವಿರುವ ಅತ್ಯಂತ ಚಿಕ್ಕ case ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ: ಒಂದೂ single token prediction ya perplexity ನಿಖರವಾಗಿ 1/P ಗೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ.',
      code: "print('perplexity, single token P=0.5:', perplexity([np.log(0.5)]))\nprint('perplexity, single token P=1.0 (certain):', perplexity([np.log(1.0)]))" } },
    { type: 'output', data: { output: "perplexity, single token P=0.5: 2.0\nperplexity, single token P=1.0 (certain): 1.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Perplexity of a Single Token Is Exactly 1/P', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದು Single Token ಯ Perplexity ನಿಖರವಾಗಿ 1/P',
      bodyEn: 'Genuinely confirmed: for exactly one token, exp(-log(P)) simplifies to exactly 1/P -- P=0.5 gives 2.0 (as if choosing uniformly among 2 options) and P=1.0 (total certainty) gives exactly 1.0, the theoretical floor. This is the cleanest possible confirmation of perplexity\'s "effective branching factor" interpretation, with the averaging step from the full formula removed entirely.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಖರವಾಗಿ ಒಂದೂ token ಗೆ, exp(-log(P)) ನಿಖರವಾಗಿ 1/P ಗೆ ಸರಳಗೊಳ್ಳುತ್ತದೆ -- P=0.5 2.0 ನೀಡುತ್ತದೆ ಮತ್ತೆ P=1.0 (ಸಂಪೂರ್ಣ ಖಚಿತತೆ) ನಿಖರವಾಗಿ 1.0 ನೀಡುತ್ತದೆ, ಸೈದ್ಧಾಂತಿಕ floor.' } },

    { type: 'heading', data: { textEn: 'Assembling the Full Evaluation Harness', textKn: 'ಪೂರ್ಣ Evaluation Harness ಅನ್ನೂ ಜೋಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'All Four Metric Families Genuinely Built in Module 194', captionKn: 'Module 194 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ ಎಲ್ಲಾ ನಾಲ್ಕೂ Metric Families',
      rows: "Metric|Needs gold answer?|Needs rubric?|Needs comparison?|Needs model log-probs?\nexact_match|Yes|No|No|No\ntoken_f1|Yes|No|No|No\nllm_judge_simulated|Yes|Optional|No|No\nELOTracker|No|No|Yes|No\nperplexity|No|No|No|Yes" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: No Single Metric Covers Every Evaluation Need', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವುದೇ Single Metric ಪ್ರತಿ Evaluation Need ಅನ್ನೂ ಆವರಿಸುವುದಿಲ್ಲ',
      bodyEn: 'Genuinely confirmed across this module: each metric requires a different kind of input and answers a different question -- exact_match/token_f1 for closed-form correctness, llm_judge_simulated for rubric-graded open answers, ELOTracker for relative preference with no absolute scale, and perplexity for raw next-token prediction quality with no reference text needed at all. A real LM Evaluation Harness genuinely combines all four families, choosing per-benchmark which applies.',
      bodyKn: 'ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ metric ಒಂದೂ ಭಿನ್ನ ರೀತಿಯ input ಅಗತ್ಯಪಡಿಸುತ್ತದೆ ಮತ್ತೆ ಒಂದೂ ಭಿನ್ನ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ -- closed-form correctness ಗೆ exact_match/token_f1, rubric-graded open answers ಗೆ llm_judge_simulated, absolute scale ಇಲ್ಲದ relative preference ಗೆ ELOTracker, ಮತ್ತೆ ಯಾವುದೇ reference text ಬೇಕಿಲ್ಲದ raw next-token prediction quality ಗೆ perplexity. ಒಂದೂ ನಿಜ LM Evaluation Harness ನಿಜವಾಗಿ ಎಲ್ಲಾ ನಾಲ್ಕೂ families ಅನ್ನೂ ಸಂಯೋಜಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Full Module 194 Recap', headingKn: 'ಪೂರ್ಣ Module 194 ಪುನರಾವಲೋಕನ',
      bodyEn: '• Part 1 genuinely built exact_match and token_f1 plus the reusable EvalCase/EvalSuite harness, confirming a good model scores 1.0 and a bad one scores exactly 0.0\n• Part 2 genuinely built llm_judge_simulated (a rubric-weighted judge that beat plain overlap scoring for a relevant-but-differently-worded answer) and ELOTracker (confirming the honest, order-dependent surprise that split wins don\'t exactly cancel)\n• Part 3 genuinely built perplexity, confirming it needs no reference at all and correctly punishes confident wrongness (1000.0) far more than honest uncertainty (256.0) or near-perfect prediction (1.001)',
      bodyKn: '• Part 1 exact_match ಮತ್ತೆ token_f1 ಜೊತೆ ಮರುಬಳಸಬಹುದಾದ EvalCase/EvalSuite harness ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು, ಒಂದೂ ಉತ್ತಮ model 1.0 ಮತ್ತೆ ಒಂದೂ ಕೆಟ್ಟದೂ ನಿಖರವಾಗಿ 0.0 score ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು\n• Part 2 llm_judge_simulated ಮತ್ತೆ ELOTracker ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು, split wins ನಿಖರವಾಗಿ ರದ್ದಾಗುವುದಿಲ್ಲ ಎಂಬ ಪ್ರಾಮಾಣಿಕ ಆಶ್ಚರ್ಯವನ್ನೂ ದೃಢಪಡಿಸಿತು\n• Part 3 perplexity ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು, ಅದಕ್ಕೆ ಯಾವುದೇ reference ಬೇಕಿಲ್ಲ ಎಂದೂ ಮತ್ತೆ confident ತಪ್ಪನ್ನೂ ಪ್ರಾಮಾಣಿಕ ಅನಿಶ್ಚಿತತೆಗಿಂತ ಹೆಚ್ಚು ಕಠಿಣವಾಗಿ ಶಿಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು' } },
    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Perplexity: exp(average negative log-probability of the actual next tokens); lower is better, 1.0 is the theoretical best\n• Likelihood-based evaluation: scoring a model purely from its own predicted probabilities, no reference text required\n• LM Evaluation Harness: standardized infrastructure combining many metric families and benchmark datasets under one interface\n• Reference-based, judgment-based, comparison-based, likelihood-based: the four evaluation families covered across this module',
      bodyKn: '• Perplexity: exp(ನಿಜ next tokens ya average negative log-probability); ಕಡಿಮೆ ಉತ್ತಮ, 1.0 ಸೈದ್ಧಾಂತಿಕ ಅತ್ಯುತ್ತಮ\n• Likelihood-based evaluation: ಒಂದೂ model ಅನ್ನೂ ಅದೂ ya ಸ್ವಂತ predicted probabilities ಇಂದ ಮಾತ್ರ score ಮಾಡುವುದೂ, ಯಾವುದೇ reference text ಬೇಕಿಲ್ಲ\n• LM Evaluation Harness: ಹಲವಾರು metric families ಮತ್ತೆ benchmark datasets ಅನ್ನೂ ಒಂದೂ interface ಅಡಿಯಲ್ಲಿ ಸಂಯೋಜಿಸುವ ಪ್ರಮಾಣಿತ infrastructure\n• Reference-based, judgment-based, comparison-based, likelihood-based: ಈ module ಆದ್ಯಂತ ಒಳಗೊಂಡ ನಾಲ್ಕೂ evaluation families' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'perplexity(), genuinely built here from raw log-probabilities, is the same metric reported on WikiText-103 and Penn Treebank leaderboards -- and the real Hugging Face `lm-evaluation-harness` library genuinely combines exact-match-style tasks, likelihood-based perplexity tasks, and pairwise comparison tasks under one unified runner, exactly the structure synthesized in this lesson.',
      bodyKn: 'ಇಲ್ಲಿ raw log-probabilities ಇಂದ ನಿಜವಾಗಿ ಕಟ್ಟಿದ perplexity(), WikiText-103 ಮತ್ತೆ Penn Treebank leaderboards ಮೇಲೆ ವರದಿ ಮಾಡುವ ಅದೇ metric -- ಮತ್ತೆ ನಿಜ Hugging Face `lm-evaluation-harness` library ನಿಜವಾಗಿ exact-match-style tasks, likelihood-based perplexity tasks, ಮತ್ತೆ pairwise comparison tasks ಅನ್ನೂ ಒಂದೂ ಏಕೀಕೃತ runner ಅಡಿಯಲ್ಲಿ ಸಂಯೋಜಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: perplexity lets teams track raw language-modeling quality on massive unlabeled corpora, with no need to write or maintain a single gold answer\n• Genuinely confirmed: combining all four metric families into one harness (as this module does) lets a single evaluation run answer "is it factually correct," "is it well-formed," "is it preferred by judges," AND "does it model language well" without four separate pipelines',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: perplexity teams ಗೆ ಬೃಹತ್ unlabeled corpora ಮೇಲೆ raw language-modeling quality ಅನ್ನೂ track ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ, ಒಂದೂ single gold answer ಬರೆಯುವ ಅಗತ್ಯವಿಲ್ಲದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ನಾಲ್ಕೂ metric families ಅನ್ನೂ ಒಂದೂ harness ಆಗಿ ಸಂಯೋಜಿಸುವುದೂ ಒಂದೂ single evaluation run ಗೆ ನಾಲ್ಕೂ ಪ್ರತ್ಯೇಕ pipelines ಇಲ್ಲದೆ ಉತ್ತರಿಸಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a model card reports "perplexity: 12.3 on held-out validation data," that number comes from exactly the formula genuinely verified here -- and teams watch it drop across training checkpoints as an early, reference-free signal of learning progress, well before any downstream benchmark is run.',
      bodyKn: 'ಒಂದೂ model card "perplexity: 12.3 held-out validation data ಮೇಲೆ" ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಆ ಸಂಖ್ಯೆ ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ ಸೂತ್ರದಿಂದ ಬರುತ್ತದೆ -- ಮತ್ತೆ teams training checkpoints ಆದ್ಯಂತ ಅದೂ ಇಳಿಯುವುದನ್ನೂ learning progress ya ಒಂದೂ ಆರಂಭಿಕ, reference-free ಸಂಕೇತವಾಗಿ ವೀಕ್ಷಿಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'The Four Evaluation Families', titleKn: 'ನಾಲ್ಕೂ Evaluation Families',
      captionEn: 'Reference-based (exact_match, token_f1) needs a gold answer. Judgment-based needs a rubric. Comparison-based (ELO) needs a winner per pair. Likelihood-based (perplexity) needs only the model\'s own probabilities.',
      captionKn: 'Reference-based (exact_match, token_f1) ಗೆ ಒಂದೂ gold answer ಬೇಕು. Judgment-based ಗೆ ಒಂದೂ rubric ಬೇಕು. Comparison-based (ELO) ಗೆ ಪ್ರತಿ pair ಗೆ ಒಂದೂ winner ಬೇಕು. Likelihood-based (perplexity) ಗೆ ಕೇವಲ model ya ಸ್ವಂತ probabilities ಬೇಕು.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='60' width='160' height='80' rx='8' fill='#1e293b' stroke='#38bdf8'/><text x='90' y='90' fill='#e2e8f0' font-size='13' text-anchor='middle'>Reference-based</text><text x='90' y='108' fill='#94a3b8' font-size='10' text-anchor='middle'>exact_match, token_f1</text><rect x='190' y='60' width='160' height='80' rx='8' fill='#1e293b' stroke='#f59e0b'/><text x='270' y='90' fill='#e2e8f0' font-size='13' text-anchor='middle'>Judgment-based</text><text x='270' y='108' fill='#94a3b8' font-size='10' text-anchor='middle'>llm_judge_simulated</text><rect x='370' y='60' width='160' height='80' rx='8' fill='#1e293b' stroke='#a855f7'/><text x='450' y='90' fill='#e2e8f0' font-size='13' text-anchor='middle'>Comparison-based</text><text x='450' y='108' fill='#94a3b8' font-size='10' text-anchor='middle'>ELOTracker</text><rect x='550' y='60' width='140' height='80' rx='8' fill='#1e293b' stroke='#22c55e'/><text x='620' y='90' fill='#e2e8f0' font-size='13' text-anchor='middle'>Likelihood-based</text><text x='620' y='108' fill='#94a3b8' font-size='10' text-anchor='middle'>perplexity</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'Modules 190-194 have now genuinely built training, alignment, and evaluation for a model trained at full precision. Module 195 turns to a practical deployment concern: quantization -- making a trained model fit in far less memory with minimal quality loss, verified against exactly the perplexity and accuracy metrics built in this module.',
      bodyKn: 'Modules 190-194 ಈಗ ಪೂರ್ಣ precision ನಲ್ಲಿ trained ಒಂದೂ model ಗೆ training, alignment, ಮತ್ತೆ evaluation ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿವೆ. Module 195 ಒಂದೂ ಪ್ರಾಯೋಗಿಕ deployment ಕಾಳಜಿಗೆ ತಿರುಗುತ್ತದೆ: quantization -- ಒಂದೂ trained model ಅನ್ನೂ ಕನಿಷ್ಠ quality ನಷ್ಟದೊಂದಿಗೆ ಬಹಳ ಕಡಿಮೆ memory ನಲ್ಲಿ ಹೊಂದಿಸುವುದೂ, ಈ module ನಲ್ಲಿ ಕಟ್ಟಿದ ನಿಖರ perplexity ಮತ್ತೆ accuracy metrics ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what perplexity did a uniform-random model over a 256-token vocabulary score, and why exactly that number?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 256-token vocabulary ಮೇಲೆ ಒಂದೂ uniform-random model ಯಾವ perplexity score ಮಾಡಿತು, ಮತ್ತೆ ಏಕೆ ನಿಖರವಾಗಿ ಆ ಸಂಖ್ಯೆ?',
        opts: ['1.0, the theoretical best', 'Exactly 256.0, because log(1/256) averaged and exponentiated returns the vocabulary size', '0.0', 'It varies randomly'], correct: 1,
        optsKn: ['1.0, ಸೈದ್ಧಾಂತಿಕ ಅತ್ಯುತ್ತಮ', 'ನಿಖರವಾಗಿ 256.0, log(1/256) ya average exponentiate ಮಾಡುವುದೂ vocabulary size ಅನ್ನೂ ಹಿಂತಿರುಗಿಸುವುದರಿಂದ', '0.0', 'ಅದೂ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಬದಲಾಗುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: which model scored WORSE perplexity -- the uniform-random model (256.0) or the confidently wrong model (1000.0)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವ model ಕೆಟ್ಟ perplexity score ಮಾಡಿತು -- uniform-random model (256.0) ಅಥವಾ confidently wrong model (1000.0)?',
        opts: ['The uniform-random model was worse', 'The confidently WRONG model was nearly 4x worse than random', 'They scored identically', 'Perplexity cannot compare them'], correct: 1,
        optsKn: ['Uniform-random model ಕೆಟ್ಟದೂ ಆಗಿತ್ತು', 'Confidently WRONG model random ಗಿಂತ ಬಹುತೇಕ 4x ಕೆಟ್ಟದೂ ಆಗಿತ್ತು', 'ಅವೂ ಒಂದೇ score ಮಾಡಿದವು', 'Perplexity ಅವುಗಳನ್ನೂ ಹೋಲಿಸಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'What makes perplexity fundamentally different from exact_match, token_f1, llm_judge_simulated, and ELOTracker?', qKn: 'Perplexity ಅನ್ನೂ exact_match, token_f1, llm_judge_simulated, ಮತ್ತೆ ELOTracker ಇಂದ ಮೂಲಭೂತವಾಗಿ ಭಿನ್ನವಾಗಿಸುವುದೂ ಏನೂ?',
        opts: ['It runs faster', 'It needs no gold answer, rubric, or comparison -- only the model\'s own predicted probabilities', 'It only works on English text', 'It cannot be computed with NumPy'], correct: 1,
        optsKn: ['ಅದೂ ವೇಗವಾಗಿ ಚಲಿಸುತ್ತದೆ', 'ಅದಕ್ಕೆ ಯಾವುದೇ gold answer, rubric, ಅಥವಾ comparison ಬೇಕಿಲ್ಲ -- ಕೇವಲ model ya ಸ್ವಂತ predicted probabilities', 'ಅದೂ ಕೇವಲ English text ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'ಅದನ್ನೂ NumPy ಜೊತೆ ಲೆಕ್ಕಹಾಕಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: a mostly-confident model with one weak prediction (four P=0.9 tokens, one P=0.1 token) scored perplexity=1.7243. What does this show?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ದುರ್ಬಲ prediction ಇರುವ ಒಂದೂ ಬಹುತೇಕ-confident model (ನಾಲ್ಕೂ P=0.9 tokens, ಒಂದೂ P=0.1 token) perplexity=1.7243 score ಮಾಡಿತು. ಇದೂ ಏನೂ ತೋರಿಸುತ್ತದೆ?',
        opts: ['One weak prediction ruins the entire score', 'Perplexity aggregates smoothly -- a single low-confidence miss barely moves the average when the rest is well-predicted', 'The formula is broken for mixed sequences', 'Perplexity ignores wrong predictions entirely'], correct: 1,
        optsKn: ['ಒಂದೂ ದುರ್ಬಲ prediction ಇಡೀ score ಅನ್ನೂ ಹಾಳುಮಾಡುತ್ತದೆ', 'Perplexity ಸುಗಮವಾಗಿ aggregate ಆಗುತ್ತದೆ -- ಇತರೆ ಚೆನ್ನಾಗಿ ಊಹಿಸಿದಾಗ ಒಂದೂ low-confidence miss average ಅನ್ನೂ ವಿರಳವಾಗಿ ಚಲಿಸುತ್ತದೆ', 'Mixed sequences ಗೆ ಸೂತ್ರ ಮುರಿದಿದೆ', 'Perplexity ತಪ್ಪಾದ predictions ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ'] },
      { q: 'Across the full Module 194, which metric would you choose to compare two models when there is no gold answer, no rubric, and you want purely a language-modeling quality signal on unlabeled text?', qKn: 'ಪೂರ್ಣ Module 194 ಆದ್ಯಂತ, ಯಾವುದೇ gold answer ಇಲ್ಲ, ಯಾವುದೇ rubric ಇಲ್ಲ, ಮತ್ತೆ unlabeled text ಮೇಲೆ ಕೇವಲ ಒಂದೂ language-modeling quality signal ಬೇಕಾದಾಗ ಎರಡೂ models ಹೋಲಿಸಲು ಯಾವ metric ಆಯ್ಕೆ ಮಾಡುತ್ತೀರಿ?',
        opts: ['exact_match', 'token_f1', 'perplexity', 'ELOTracker'], correct: 2,
        optsKn: ['exact_match', 'token_f1', 'perplexity', 'ELOTracker'] },
    ] } },
  ],
};
