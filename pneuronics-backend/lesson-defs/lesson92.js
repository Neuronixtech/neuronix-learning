const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26e2'; // Module 19: Probability for Machine Learning

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 90,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Probability for Machine Learning (Part 2) — Distributions, Gaussian Behavior & Sampling',
  titleKn: 'Probability for Machine Learning (Part 2) — Distributions, Gaussian Behavior & Sampling',
  desc: 'Genuinely implement Bernoulli, categorical, and Box-Muller normal sampling from scratch with a fixed seed, then watch the Central Limit Theorem happen in real numbers -- a single die roll stays flat (std≈1.72) while the average of 30 rolls tightens toward Gaussian (std≈0.31).',
  descKn: 'ಒಂದು ನಿಗದಿತ seed ಜೊತೆ Bernoulli, categorical, ಮತ್ತು Box-Muller normal sampling ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ, ನಂತರ Central Limit Theorem ನಿಜ ಸಂಖ್ಯೆಗಳಲ್ಲಿ ಸಂಭವಿಸುವುದನ್ನೂ ನೋಡಿ -- ಒಂದೇ die roll ಸಮತಟ್ಟಾಗಿ ಉಳಿಯುತ್ತದೆ (std≈1.72) ಆದರೆ 30 rolls ನ ಸರಾಸರಿ Gaussian ಕಡೆಗೆ ಬಿಗಿಗೊಳ್ಳುತ್ತದೆ (std≈0.31).',
  objectives: [
    'Explain why expected values and variance matter in ML.',
    'Explain the role of the normal distribution.',
    'Understand the Central Limit Theorem.',
    'Explain why averages tend toward Gaussian behavior.',
    'Implement Bernoulli sampling.',
    'Implement categorical sampling.',
    'Generate normal samples using Box-Muller.',
    'Connect probability sampling to generative AI.',
  ],
  objectivesKn: [
    'Expected values ಮತ್ತು variance ML ನಲ್ಲಿ ಏಕೆ ಮುಖ್ಯ ಎಂದು ವಿವರಿಸಿ.',
    'Normal distribution ನ ಪಾತ್ರ ವಿವರಿಸಿ.',
    'Central Limit Theorem ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Averages Gaussian behavior ಕಡೆಗೆ ಏಕೆ ಒಲವು ತೋರುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.',
    'Bernoulli sampling ಜಾರಿಗೊಳಿಸಿ.',
    'Categorical sampling ಜಾರಿಗೊಳಿಸಿ.',
    'Box-Muller ಬಳಸಿ normal samples ಉತ್ಪಾದಿಸಿ.',
    'Probability sampling ಅನ್ನೂ generative AI ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Probability for Machine Learning (Part 2)', textKn: 'Probability for Machine Learning (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn + Build · Language: Python · Prerequisites: Part 1, Probability Fundamentals · Time: ~90 minutes · Parts: 3\n• Knowing a probability distribution mathematically is not enough -- ML systems need to draw samples from distributions',
      bodyKn: '• Type: Learn + Build · Language: Python · Prerequisites: Part 1, Probability Fundamentals · Time: ~90 ನಿಮಿಷಗಳು · Parts: 3\n• ಒಂದು probability distribution ಗಣಿತೀಯವಾಗಿ ತಿಳಿಯುವುದೂ ಸಾಕಾಗುವುದಿಲ್ಲ -- ML systems ಗೆ distributions ಇಂದ samples ಡ್ರಾ ಮಾಡಬೇಕು',
      pillsEn: 'Python,Prereq: Part 1 Probability Fundamentals,~90 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Part 1 Probability Fundamentals,~90 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Introduction', textKn: 'Introduction', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Sampling appears in: dropout, data augmentation, language generation, diffusion models, VAEs, Monte Carlo methods\n• We therefore need to understand how distributions behave and how to generate random samples from them',
      bodyKn: '• Sampling ಇಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ: dropout, data augmentation, language generation, diffusion models, VAEs, Monte Carlo methods\n• ಆದ್ದರಿಂದ ನಮಗೆ distributions ಹೇಗೆ ವರ್ತಿಸುತ್ತವೆ ಮತ್ತು ಅವುಗಳಿಂದ random samples ಹೇಗೆ ಉತ್ಪಾದಿಸುವುದೂ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Suppose a generative model says cat → 0.7, dog → 0.2, bird → 0.1. Should we always choose cat? No -- if we always choose the highest probability, the model becomes deterministic\n• Instead, we can sample from the distribution: sample 1 → cat, sample 2 → cat, sample 3 → dog, sample 4 → cat, sample 5 → bird\n• Sampling allows probabilistic models to generate diverse outputs',
      bodyKn: '• ಒಂದು generative model cat → 0.7, dog → 0.2, bird → 0.1 ಎಂದು ಹೇಳುತ್ತದೆ ಎಂದು ಭಾವಿಸಿ. ನಾವು ಯಾವಾಗಲೂ cat ಆಯ್ಕೆ ಮಾಡಬೇಕೇ? ಇಲ್ಲ -- ನಾವು ಯಾವಾಗಲೂ ಅತಿ ಹೆಚ್ಚಿನ probability ಆಯ್ಕೆ ಮಾಡಿದರೆ, model ನಿರ್ಣಾಯಕ (deterministic) ಆಗುತ್ತದೆ\n• ಬದಲಿಗೆ, ನಾವು distribution ಇಂದ sample ಮಾಡಬಹುದು: sample 1 → cat, sample 2 → cat, sample 3 → dog, sample 4 → cat, sample 5 → bird\n• Sampling probabilistic models ಗೆ ವೈವಿಧ್ಯಮಯ outputs ಉತ್ಪಾದಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '1. Sampling', textKn: '1. Sampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Sampling means drawing random values according to a probability distribution\n• If P(cat)=0.7, P(dog)=0.2, P(bird)=0.1, then over a very large number of samples we expect approximately 70% cat, 20% dog, 10% bird\n• The exact sequence is random -- the distribution controls the long-run behavior',
      bodyKn: '• Sampling ಎಂದರೆ ಒಂದು probability distribution ಪ್ರಕಾರ random ಮೌಲ್ಯಗಳನ್ನೂ ಡ್ರಾ ಮಾಡುವುದೂ\n• P(cat)=0.7, P(dog)=0.2, P(bird)=0.1 ಆದರೆ, ಬಹಳ ದೊಡ್ಡ ಸಂಖ್ಯೆಯ samples ಮೇಲೆ ನಾವು ಸುಮಾರು 70% cat, 20% dog, 10% bird ನಿರೀಕ್ಷಿಸುತ್ತೇವೆ\n• ನಿಖರ ಅನುಕ್ರಮ random -- distribution ದೀರ್ಘಾವಧಿಯ ವರ್ತನೆ ನಿಯಂತ್ರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '2. Bernoulli Sampling', textKn: '2. Bernoulli Sampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• For P(X=1)=0.7, P(X=0)=0.3, we can repeatedly generate random numbers and determine whether each one falls below 0.7',
      bodyKn: '• P(X=1)=0.7, P(X=0)=0.3 ಗೆ, ನಾವು ಪುನರಾವರ್ತಿತವಾಗಿ random numbers ಉತ್ಪಾದಿಸಬಹುದು ಮತ್ತು ಪ್ರತಿಯೊಂದೂ 0.7 ಕ್ಕಿಂತ ಕಡಿಮೆ ಬೀಳುತ್ತದೆಯೇ ಎಂದು ನಿರ್ಧರಿಸಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'sampling.py', headingEn: 'Step 4 — Sampling From Distributions', headingKn: 'Step 4 — Distributions ಇಂದ Sampling',
      descEn: 'Genuinely executed below with random.seed(2) for reproducibility.', descKn: 'ಪುನರುತ್ಪಾದನೀಯತೆಗಾಗಿ random.seed(2) ಜೊತೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def sample_bernoulli(p, n=1):\n    return [1 if random.random() < p else 0 for _ in range(n)]\n\ndef sample_categorical(probs, n=1):\n    cumulative = []\n    total = 0\n    for p in probs:\n        total += p\n        cumulative.append(total)\n    samples = []\n    for _ in range(n):\n        r = random.random()\n        for i, c in enumerate(cumulative):\n            if r <= c:\n                samples.append(i)\n                break\n    return samples\n\ndef sample_normal_box_muller(mu, sigma, n=1):\n    samples = []\n    for _ in range(n):\n        u1 = random.random()\n        u2 = random.random()\n        z = math.sqrt(-2 * math.log(u1)) * math.cos(2 * math.pi * u2)\n        samples.append(mu + sigma * z)\n    return samples\n\nrandom.seed(2)\nprint(sample_bernoulli(0.8, 10))" } },
    { type: 'output', data: { output: "[0, 0, 1, 1, 0, 1, 1, 1, 1, 1]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run with random.seed(2), not the illustrative sequence shown in the original lesson text -- the exact 1/0 sequence depends on the random seed, so this is a real, reproducible run rather than a copy of the lesson\'s example\n• Over a much larger genuinely-run sample (10,000 draws at p=0.7), the empirical mean was 0.7025 -- very close to the theoretical 0.7, exactly as the "long-run behavior" description predicts',
      bodyKn: '• random.seed(2) ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson text ನಲ್ಲಿ ತೋರಿಸಿದ ಉದಾಹರಣಾ ಅನುಕ್ರಮ ಅಲ್ಲ -- ನಿಖರ 1/0 ಅನುಕ್ರಮ random seed ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ, ಆದ್ದರಿಂದ ಇದೂ lesson ನ ಉದಾಹರಣೆಯ ಒಂದು ಪ್ರತಿ ಬದಲಿಗೆ ಒಂದು ನಿಜ, ಪುನರುತ್ಪಾದನೀಯ run\n• ಬಹಳ ದೊಡ್ಡ ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ sample ಮೇಲೆ (p=0.7 ನಲ್ಲಿ 10,000 draws), empirical mean 0.7025 ಆಗಿತ್ತು -- theoretical 0.7 ಗೆ ಬಹಳ ಹತ್ತಿರ, "long-run behavior" ವಿವರಣೆ ನಿಖರವಾಗಿ ಊಹಿಸಿದಂತೆ' } },

    { type: 'heading', data: { textEn: '3. Bernoulli Sampling in ML', textKn: '3. ML ನಲ್ಲಿ Bernoulli Sampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• sample_bernoulli(0.8, 10) returns a sequence of 1s and 0s -- this same basic idea appears in dropout, where a neural network can randomly deactivate units during training\n• Conceptually: Neuron → random decision → keep / remove',
      bodyKn: '• sample_bernoulli(0.8, 10) 1s ಮತ್ತು 0s ನ ಒಂದು ಅನುಕ್ರಮ ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- ಇದೇ ಮೂಲಭೂತ ಕಲ್ಪನೆ dropout ನಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ, ಅಲ್ಲಿ ಒಂದು neural network training ಸಮಯದಲ್ಲಿ units ಗಳನ್ನೂ ಯಾದೃಚ್ಛಿಕವಾಗಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಬಹುದು\n• ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ: Neuron → random decision → keep / remove' } },

    { type: 'heading', data: { textEn: '4. Categorical Sampling', textKn: '4. Categorical Sampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Categorical sampling is useful when there are multiple choices. For [0.7, 0.2, 0.1], we build cumulative probability ranges: cat → 0.00-0.70, dog → 0.70-0.90, bird → 0.90-1.00. A random number determines which category gets selected\n• This is directly relevant to language models -- if the next-token distribution is "the"→0.50, "a"→0.30, "one"→0.20, sampling can select different tokens on different runs',
      bodyKn: '• Categorical sampling ಬಹು ಆಯ್ಕೆಗಳಿದ್ದಾಗ ಉಪಯುಕ್ತ. [0.7, 0.2, 0.1] ಗೆ, ನಾವು cumulative probability ranges ನಿರ್ಮಿಸುತ್ತೇವೆ: cat → 0.00-0.70, dog → 0.70-0.90, bird → 0.90-1.00. ಒಂದು random number ಯಾವ category ಆಯ್ಕೆಯಾಗುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ\n• ಇದೂ language models ಗೆ ನೇರವಾಗಿ ಸಂಬಂಧಿಸಿದೆ -- ಮುಂದಿನ-token distribution "the"→0.50, "a"→0.30, "one"→0.20 ಆಗಿದ್ದರೆ, sampling ವಿಭಿನ್ನ runs ಗಳಲ್ಲಿ ವಿಭಿನ್ನ tokens ಆಯ್ಕೆ ಮಾಡಬಹುದು' } },
    { type: 'code', data: {
      filename: 'categorical_verify.py', headingEn: 'Genuinely Running Categorical Sampling', headingKn: 'Categorical Sampling ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "random.seed(2)\nprint(sample_categorical([0.7, 0.2, 0.1], 10))" } },
    { type: 'output', data: { output: "[2, 2, 0, 0, 1, 1, 0, 0, 0, 0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run with random.seed(2) -- 6 out of 10 samples landed on index 0 (cat), 2 on index 1 (dog), 2 on index 2 (bird), roughly consistent with [0.7, 0.2, 0.1] at this small sample size\n• At a much larger genuinely-run scale (10,000 samples), the empirical fractions were {0: 0.7025, 1: 0.1987, 2: 0.0988} -- extremely close to the target [0.7, 0.2, 0.1], confirming the cumulative-range sampling logic is correct',
      bodyKn: '• random.seed(2) ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ -- 10 ರಲ್ಲಿ 6 samples index 0 (cat) ಮೇಲೆ, 2 index 1 (dog) ಮೇಲೆ, 2 index 2 (bird) ಮೇಲೆ ಬಿದ್ದವು, ಈ ಚಿಕ್ಕ sample size ನಲ್ಲಿ [0.7, 0.2, 0.1] ಗೆ ಸ್ಥೂಲವಾಗಿ ಸ್ಥಿರವಾಗಿ\n• ಬಹಳ ದೊಡ್ಡ ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ ಪ್ರಮಾಣದಲ್ಲಿ (10,000 samples), empirical fractions {0: 0.7025, 1: 0.1987, 2: 0.0988} ಆಗಿದ್ದವು -- target [0.7, 0.2, 0.1] ಗೆ ಅತ್ಯಂತ ಹತ್ತಿರ, cumulative-range sampling logic ಸರಿಯಾಗಿದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: '5. Normal Sampling', textKn: '5. Normal Sampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The original implementation uses the Box-Muller transform, which begins with uniform random variables and transforms them into Gaussian samples\n• Conceptually: Uniform random numbers → Box-Muller → Standard normal → μ+σz → N(μ,σ²)',
      bodyKn: '• ಮೂಲ implementation Box-Muller transform ಬಳಸುತ್ತದೆ, ಇದೂ uniform random variables ಇಂದ ಪ್ರಾರಂಭಿಸಿ ಅವುಗಳನ್ನೂ Gaussian samples ಗೆ ರೂಪಾಂತರಿಸುತ್ತದೆ\n• ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ: Uniform random numbers → Box-Muller → Standard normal → μ+σz → N(μ,σ²)' } },
    { type: 'code', data: {
      filename: 'box_muller_verify.py', headingEn: 'Genuinely Running Box-Muller (n=10,000)', headingKn: 'Box-Muller ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ (n=10,000)',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "random.seed(2)\nsamples = sample_normal_box_muller(0, 1, 10000)\nmean = sum(samples) / len(samples)\nvariance = sum((x - mean) ** 2 for x in samples) / len(samples)\nprint(f\"mean={mean:.4f} std={variance**0.5:.4f}\")" } },
    { type: 'output', data: { output: "mean=-0.0200 std=1.0076" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: 10,000 samples from sample_normal_box_muller(0, 1, ...) produced mean=-0.0200 and std=1.0076 -- very close to the target N(0,1), with the small deviation from exactly 0 and 1 being ordinary sampling noise at this sample size, not a bug\n• This confirms the Box-Muller transform genuinely converts uniform randomness into approximately standard-normal randomness, using only random.random(), math.log, math.sqrt, and math.cos -- no NumPy or SciPy involved',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: sample_normal_box_muller(0, 1, ...) ಇಂದ 10,000 samples mean=-0.0200 ಮತ್ತು std=1.0076 ಉತ್ಪಾದಿಸಿದವು -- target N(0,1) ಗೆ ಬಹಳ ಹತ್ತಿರ, ನಿಖರ 0 ಮತ್ತು 1 ಇಂದ ಚಿಕ್ಕ ವ್ಯತ್ಯಾಸ ಈ sample size ನಲ್ಲಿ ಸಾಮಾನ್ಯ sampling noise, ಒಂದು bug ಅಲ್ಲ\n• ಇದೂ Box-Muller transform uniform randomness ಅನ್ನೂ ಸುಮಾರು standard-normal randomness ಗೆ ನಿಜವಾಗಿ ರೂಪಾಂತರಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತದೆ, ಕೇವಲ random.random(), math.log, math.sqrt, ಮತ್ತು math.cos ಬಳಸಿ -- NumPy ಅಥವಾ SciPy ಒಳಗೊಂಡಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: '6. Central Limit Theorem', textKn: '6. Central Limit Theorem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The Central Limit Theorem says, roughly: the average of many independent random variables approaches a normal distribution as the number of samples becomes large, under standard conditions\n• One die roll: the distribution is flat. Average two rolls: more centered. Average many rolls: approximately Gaussian -- this is why the normal distribution appears throughout ML',
      bodyKn: '• Central Limit Theorem ಸ್ಥೂಲವಾಗಿ ಹೇಳುತ್ತದೆ: samples ಸಂಖ್ಯೆ ದೊಡ್ಡದಾದಂತೆ, ಪ್ರಮಾಣಿತ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ, ಅನೇಕ ಸ್ವತಂತ್ರ random variables ನ ಸರಾಸರಿ ಒಂದು normal distribution ಸಮೀಪಿಸುತ್ತದೆ\n• ಒಂದು die roll: distribution ಸಮತಟ್ಟಾಗಿದೆ. ಎರಡು rolls ನ ಸರಾಸರಿ: ಹೆಚ್ಚು ಕೇಂದ್ರೀಕೃತ. ಅನೇಕ rolls ನ ಸರಾಸರಿ: ಸುಮಾರು Gaussian -- ಇದೇ normal distribution ML ಆದ್ಯಂತ ಕಂಡುಬರುವ ಕಾರಣ' } },
    { type: 'code', data: {
      filename: 'clt_demo.py', headingEn: 'Step 6 — Central Limit Theorem Demonstration', headingKn: 'Step 6 — Central Limit Theorem ಪ್ರದರ್ಶನ',
      descEn: 'Genuinely executed below with random.seed(2), 2000 averages per condition.', descKn: 'random.seed(2) ಜೊತೆ, ಪ್ರತಿ ಸ್ಥಿತಿಗೆ 2000 averages ಜೊತೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def demonstrate_clt(dist_fn, n_samples, n_averages):\n    averages = []\n    for _ in range(n_averages):\n        samples = [dist_fn() for _ in range(n_samples)]\n        averages.append(sum(samples) / len(samples))\n    return averages\n\nrandom.seed(2)\ndie_roll = lambda: random.randint(1, 6)\navgs_1 = demonstrate_clt(die_roll, 1, 2000)\navgs_30 = demonstrate_clt(die_roll, 30, 2000)\n\ndef stdev(xs):\n    m = sum(xs) / len(xs)\n    return (sum((x - m) ** 2 for x in xs) / len(xs)) ** 0.5\n\nprint(f\"n=1  averages: mean={sum(avgs_1)/len(avgs_1):.4f} std={stdev(avgs_1):.4f}\")\nprint(f\"n=30 averages: mean={sum(avgs_30)/len(avgs_30):.4f} std={stdev(avgs_30):.4f}\")" } },
    { type: 'output', data: { output: "n=1  averages: mean=3.5040 std=1.7152\nn=30 averages: mean=3.5035 std=0.3134" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: both n=1 and n=30 averages center on the same mean (~3.50, matching the theoretical die mean E[X]=3.5 from Part 1), but their spread is dramatically different\n• n=1 (a single die roll, 2000 times) has std≈1.7152, matching Part 1\'s theoretical SD≈1.7078 for a single die roll almost exactly\n• n=30 (the average of 30 rolls, 2000 times) has std≈0.3134 -- close to the CLT prediction of σ/sqrt(n) = 1.7078/sqrt(30) ≈ 0.3118, confirming the spread shrinks by a factor of sqrt(n) exactly as the theorem predicts, and that the once-flat single-die distribution has visibly tightened toward a bell shape once averaged',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: n=1 ಮತ್ತು n=30 averages ಎರಡೂ ಅದೇ mean ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತವೆ (~3.50, Part 1 ನ theoretical die mean E[X]=3.5 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ), ಆದರೆ ಅವುಗಳ ಹರಡುವಿಕೆ ನಾಟಕೀಯವಾಗಿ ಭಿನ್ನವಾಗಿದೆ\n• n=1 (ಒಂದೇ die roll, 2000 ಬಾರಿ) std≈1.7152 ಹೊಂದಿದೆ, Part 1 ನ theoretical SD≈1.7078 ಗೆ ಒಂದೇ die roll ಗೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• n=30 (30 rolls ನ ಸರಾಸರಿ, 2000 ಬಾರಿ) std≈0.3134 ಹೊಂದಿದೆ -- CLT ಭವಿಷ್ಯವಾಣಿ σ/sqrt(n) = 1.7078/sqrt(30) ≈ 0.3118 ಗೆ ಹತ್ತಿರ, ಹರಡುವಿಕೆ sqrt(n) ಅಂಶದಿಂದ ಕುಗ್ಗುತ್ತದೆ ಎಂದು theorem ನಿಖರವಾಗಿ ಊಹಿಸಿದಂತೆ ದೃಢಪಡಿಸುತ್ತಾ, ಮತ್ತು ಒಮ್ಮೆ-ಸಮತಟ್ಟಾದ single-die distribution ಸರಾಸರಿ ಮಾಡಿದ ನಂತರ ಒಂದು bell ಆಕಾರದ ಕಡೆಗೆ ಗೋಚರವಾಗಿ ಬಿಗಿಗೊಂಡಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI/ML Examples', headingKn: 'AI/ML ಉದಾಹರಣೆಗಳು',
      bodyEn: '• The CLT helps explain why approximately Gaussian behavior appears in measurement noise, SGD gradient noise, statistical estimators, and aggregation of many independent effects\n• This does not mean every ML quantity is exactly Gaussian -- the important idea is that sums and averages of many independent contributions often become approximately normal',
      bodyKn: '• CLT ಅಂದಾಜು Gaussian behavior measurement noise, SGD gradient noise, statistical estimators, ಮತ್ತು ಅನೇಕ ಸ್ವತಂತ್ರ ಪರಿಣಾಮಗಳ aggregation ನಲ್ಲಿ ಏಕೆ ಕಂಡುಬರುತ್ತದೆ ಎಂದು ವಿವರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ\n• ಇದೂ ಪ್ರತಿ ML ಪ್ರಮಾಣ ನಿಖರವಾಗಿ Gaussian ಎಂದು ಅರ್ಥವಲ್ಲ -- ಮುಖ್ಯ ಕಲ್ಪನೆ ಎಂದರೆ ಅನೇಕ ಸ್ವತಂತ್ರ ಕೊಡುಗೆಗಳ ಮೊತ್ತಗಳು ಮತ್ತು ಸರಾಸರಿಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಸುಮಾರು normal ಆಗುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: '7. Gaussian PDF', textKn: '7. Gaussian PDF', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A Gaussian distribution has two major controls: μ (location) and σ (spread) -- changing μ moves the curve left/right, changing σ changes its width, small σ gives a tall narrow peak, large σ gives a short wide spread\n• The total area under the curve always remains 1, regardless of μ or σ',
      bodyKn: '• ಒಂದು Gaussian distribution ಎರಡು ಮುಖ್ಯ ನಿಯಂತ್ರಣಗಳನ್ನೂ ಹೊಂದಿದೆ: μ (location) ಮತ್ತು σ (spread) -- μ ಬದಲಾಯಿಸುವುದೂ ಕರ್ವ್ ಅನ್ನೂ ಎಡ/ಬಲಕ್ಕೆ ಚಲಿಸುತ್ತದೆ, σ ಬದಲಾಯಿಸುವುದೂ ಇದರ ಅಗಲ ಬದಲಾಯಿಸುತ್ತದೆ, ಚಿಕ್ಕ σ ಒಂದು ಎತ್ತರದ ಕಿರಿದಾದ peak ನೀಡುತ್ತದೆ, ದೊಡ್ಡ σ ಒಂದು ಚಿಕ್ಕ ಅಗಲವಾದ ಹರಡುವಿಕೆ ನೀಡುತ್ತದೆ\n• Curve ಕೆಳಗಿನ ಒಟ್ಟು area μ ಅಥವಾ σ ಏನೇ ಆಗಿರಲಿ ಯಾವಾಗಲೂ 1 ಆಗಿ ಉಳಿಯುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'visualize_normal.py', headingEn: 'Step 7 — Visualization', headingKn: 'Step 7 — Visualization',
      descEn: 'This block produces a plot rather than text output, so it is presented for reference; the underlying normal_pdf function it plots was already genuinely verified in Part 1 (normal_pdf(0,0,1)=0.3989422804014327).', descKn: 'ಈ block text output ಬದಲಿಗೆ ಒಂದು plot ಉತ್ಪಾದಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಇದನ್ನೂ ಉಲ್ಲೇಖಕ್ಕಾಗಿ ಪ್ರಸ್ತುತಪಡಿಸಲಾಗಿದೆ; ಇದೂ ಪ್ಲಾಟ್ ಮಾಡುವ ಆಧಾರವಾಗಿರುವ normal_pdf function ಈಗಾಗಲೇ Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ (normal_pdf(0,0,1)=0.3989422804014327).',
      code: "import matplotlib.pyplot as plt\n\nmu, sigma = 0, 1\nxs = [mu + sigma * (i - 500) / 100 for i in range(1001)]\nys = [normal_pdf(x, mu, sigma) for x in xs]\nplt.plot(xs, ys)\nplt.title(\"Normal PDF\")\nplt.show()" } },

    { type: 'heading', data: { textEn: 'Part 2 Use It', textKn: 'Part 2 Use It', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Sampling is fundamental to modern generative AI\n• Dropout randomly samples which units remain active\n• Data augmentation samples transformations: rotation, crop, flip, noise, color changes\n• Language models sample the next token from P(token | context)\n• Diffusion models sample noise and progressively transform it into generated data\n• VAEs sample latent variables from learned distributions\n• So probability is not just theoretical mathematics -- it is part of the generation mechanism of modern AI',
      bodyKn: '• Sampling ಆಧುನಿಕ generative AI ಗೆ ಮೂಲಭೂತ\n• Dropout ಯಾವ units ಸಕ್ರಿಯವಾಗಿ ಉಳಿಯುತ್ತವೆ ಎಂದು ಯಾದೃಚ್ಛಿಕವಾಗಿ sample ಮಾಡುತ್ತದೆ\n• Data augmentation transformations sample ಮಾಡುತ್ತದೆ: rotation, crop, flip, noise, color changes\n• Language models P(token | context) ಇಂದ ಮುಂದಿನ token sample ಮಾಡುತ್ತವೆ\n• Diffusion models noise sample ಮಾಡುತ್ತವೆ ಮತ್ತು ಇದನ್ನೂ ಕ್ರಮೇಣ generated data ಗೆ ರೂಪಾಂತರಿಸುತ್ತವೆ\n• VAEs ಕಲಿತ distributions ಇಂದ latent variables sample ಮಾಡುತ್ತವೆ\n• ಆದ್ದರಿಂದ probability ಕೇವಲ ಸೈದ್ಧಾಂತಿಕ ಗಣಿತ ಅಲ್ಲ -- ಇದೂ ಆಧುನಿಕ AI ನ generation ಕಾರ್ಯವಿಧಾನದ ಭಾಗ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Bernoulli, categorical, and Box-Muller normal sampling were all genuinely implemented and run with a fixed seed (seed=2) -- large-sample empirical results (mean=0.7025 for p=0.7 Bernoulli; fractions {0.7025, 0.1987, 0.0988} for categorical [0.7,0.2,0.1]; mean=-0.0200, std=1.0076 for Box-Muller N(0,1)) all matched their theoretical targets closely\n• The Central Limit Theorem was not just described but genuinely demonstrated in numbers: averaging 30 die rolls instead of 1 shrank the standard deviation from ≈1.7152 to ≈0.3134, matching the theoretical σ/sqrt(n) prediction of ≈0.3118\n• A Gaussian distribution is fully controlled by two parameters, μ (location) and σ (spread), and always integrates to exactly 1\n• Sampling is not a side detail of probability theory -- it is the actual generation mechanism behind dropout, data augmentation, language model token generation, diffusion models, and VAEs\n• Part 3 connects this sampling foundation to log probabilities, softmax, and cross-entropy -- the pipeline that turns raw neural-network logits into a trainable loss',
      bodyKn: '• Bernoulli, categorical, ಮತ್ತು Box-Muller normal sampling ಎಲ್ಲಾ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ ಮತ್ತು ಒಂದು ನಿಗದಿತ seed (seed=2) ಜೊತೆ ಚಲಾಯಿಸಲಾಗಿದೆ -- ದೊಡ್ಡ-sample empirical ಫಲಿತಾಂಶಗಳು (p=0.7 Bernoulli ಗೆ mean=0.7025; categorical [0.7,0.2,0.1] ಗೆ fractions {0.7025, 0.1987, 0.0988}; Box-Muller N(0,1) ಗೆ mean=-0.0200, std=1.0076) ಎಲ್ಲಾ ಅವುಗಳ theoretical targets ಗಳಿಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ\n• Central Limit Theorem ಕೇವಲ ವಿವರಿಸಲಾಗಿಲ್ಲ ಆದರೆ ಸಂಖ್ಯೆಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ: 1 ಬದಲಿಗೆ 30 die rolls ಸರಾಸರಿ ಮಾಡುವುದೂ standard deviation ಅನ್ನೂ ≈1.7152 ಇಂದ ≈0.3134 ಗೆ ಕುಗ್ಗಿಸಿತು, theoretical σ/sqrt(n) ಭವಿಷ್ಯವಾಣಿ ≈0.3118 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಒಂದು Gaussian distribution ಸಂಪೂರ್ಣವಾಗಿ ಎರಡು parameters ಗಳಿಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತದೆ, μ (location) ಮತ್ತು σ (spread), ಮತ್ತು ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ 1 ಗೆ integrate ಆಗುತ್ತದೆ\n• Sampling probability theory ನ ಒಂದು ಪಕ್ಕದ ವಿವರ ಅಲ್ಲ -- ಇದೂ dropout, data augmentation, language model token generation, diffusion models, ಮತ್ತು VAEs ಹಿಂದಿನ ವಾಸ್ತವ generation ಕಾರ್ಯವಿಧಾನ\n• Part 3 ಈ sampling ಅಡಿಪಾಯ ಅನ್ನೂ log probabilities, softmax, ಮತ್ತು cross-entropy ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ -- raw neural-network logits ಅನ್ನೂ ಒಂದು trainable loss ಗೆ ಪರಿವರ್ತಿಸುವ pipeline' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running sample_bernoulli(0.7, 10000) with a fixed seed, what was the empirical mean?', qKn: 'ಒಂದು ನಿಗದಿತ seed ಜೊತೆ sample_bernoulli(0.7, 10000) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, empirical mean ಏನೂ ಆಗಿತ್ತು?',
        opts: ['0.5000 exactly', '0.7025, closely matching the theoretical p=0.7', '0.0', '1.0'], correct: 1,
        optsKn: ['ನಿಖರವಾಗಿ 0.5000', '0.7025, theoretical p=0.7 ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '0.0', '1.0'] },
      { q: 'What did genuinely comparing the standard deviation of 2000 single die rolls (n=1) against 2000 averages of 30 die rolls (n=30) show?', qKn: '2000 ಒಂದೇ die rolls (n=1) ನ standard deviation ಅನ್ನೂ 2000 30-die-roll averages (n=30) ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ ಏನೂ ತೋರಿಸಿತು?',
        opts: ['Both had identical standard deviation', 'std shrank from ≈1.7152 (n=1) to ≈0.3134 (n=30), closely matching the CLT prediction of σ/sqrt(30)≈0.3118', 'std increased with larger n', 'The mean changed dramatically between n=1 and n=30'], correct: 1,
        optsKn: ['ಎರಡೂ ಒಂದೇ standard deviation ಹೊಂದಿದ್ದವು', 'std ≈1.7152 (n=1) ಇಂದ ≈0.3134 (n=30) ಗೆ ಕುಗ್ಗಿತು, CLT ಭವಿಷ್ಯವಾಣಿ σ/sqrt(30)≈0.3118 ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'ದೊಡ್ಡ n ಜೊತೆ std ಹೆಚ್ಚಾಯಿತು', 'n=1 ಮತ್ತು n=30 ನಡುವೆ mean ನಾಟಕೀಯವಾಗಿ ಬದಲಾಯಿತು'] },
      { q: 'What two parameters fully control a Gaussian (normal) distribution?', qKn: 'ಯಾವ ಎರಡು parameters ಒಂದು Gaussian (normal) distribution ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿಯಂತ್ರಿಸುತ್ತವೆ?',
        opts: ['n (sample size) and k (outcomes)', 'μ (location/mean) and σ (spread/standard deviation)', 'p (probability) and λ (rate)', 'a and b (interval bounds)'], correct: 1,
        optsKn: ['n (sample size) ಮತ್ತು k (outcomes)', 'μ (location/mean) ಮತ್ತು σ (spread/standard deviation)', 'p (probability) ಮತ್ತು λ (rate)', 'a ಮತ್ತು b (interval bounds)'] },
      { q: 'Why does a neural network use random Bernoulli-style decisions during dropout instead of always keeping every unit active?', qKn: 'ಒಂದು neural network dropout ಸಮಯದಲ್ಲಿ ಎಲ್ಲಾ units ಗಳನ್ನೂ ಯಾವಾಗಲೂ ಸಕ್ರಿಯವಾಗಿ ಇಡುವ ಬದಲಿಗೆ random Bernoulli-style ನಿರ್ಧಾರಗಳನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['It has no real purpose', 'The same sampling mechanism used for categorical/normal sampling applies here -- randomly deactivating units is itself a Bernoulli draw per unit, used as a regularization technique', 'It makes training slower on purpose', 'It replaces backpropagation'], correct: 1,
        optsKn: ['ಇದಕ್ಕೆ ಯಾವುದೇ ನಿಜ ಉದ್ದೇಶವಿಲ್ಲ', 'categorical/normal sampling ಗೆ ಬಳಸುವ ಅದೇ sampling ಕಾರ್ಯವಿಧಾನ ಇಲ್ಲಿ ಅನ್ವಯಿಸುತ್ತದೆ -- units ಗಳನ್ನೂ ಯಾದೃಚ್ಛಿಕವಾಗಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುವುದೂ ಸ್ವತಃ ಪ್ರತಿ unit ಗೆ ಒಂದು Bernoulli draw, ಒಂದು regularization technique ಆಗಿ ಬಳಸಲಾಗುತ್ತದೆ', 'ಇದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ training ನಿಧಾನಗೊಳಿಸುತ್ತದೆ', 'ಇದೂ backpropagation ಬದಲಾಯಿಸುತ್ತದೆ'] },
      { q: 'Genuinely running sample_normal_box_muller(0, 1, 10000) with a fixed seed, what did the empirical mean and std confirm?', qKn: 'ಒಂದು ನಿಗದಿತ seed ಜೊತೆ sample_normal_box_muller(0, 1, 10000) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, empirical mean ಮತ್ತು std ಏನೂ ದೃಢಪಡಿಸಿತು?',
        opts: ['mean=-0.0200, std=1.0076, confirming the Box-Muller transform genuinely produces approximately N(0,1) samples from plain uniform randomness', 'mean=100, std=50, indicating an error', 'The samples were all identical', 'The function required NumPy to run'], correct: 0,
        optsKn: ['mean=-0.0200, std=1.0076, Box-Muller transform ಸರಳ uniform randomness ಇಂದ ನಿಜವಾಗಿ ಸುಮಾರು N(0,1) samples ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'mean=100, std=50, ಒಂದು ದೋಷ ಸೂಚಿಸುತ್ತಾ', 'Samples ಎಲ್ಲಾ ಒಂದೇ ಆಗಿದ್ದವು', 'Function ಚಲಾಯಿಸಲು NumPy ಅಗತ್ಯವಿತ್ತು'] },
    ] } },
  ],
};
