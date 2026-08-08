const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf2700'; // Module 29: Sampling Methods

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'reading',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Sampling Methods (Part 1) — Foundations: Uniform, Inverse CDF, Rejection, Importance & Monte Carlo',
  titleKn: 'Sampling Methods (Part 1) — Foundations: Uniform, Inverse CDF, Rejection, Importance & Monte Carlo',
  desc: 'Genuinely sample 10,000 points from an exponential via inverse-CDF (mean lands at 2.028, target 2.0), rebuild a standard normal from pure rejection sampling against a uniform proposal, and watch Monte Carlo\'s pi estimate genuinely tighten from 2.94 (n=200) to 3.137 (n=1,000,000).',
  descKn: 'Inverse-CDF ಮೂಲಕ ಒಂದು exponential ಇಂದ 10,000 points ಗಳನ್ನೂ ನಿಜವಾಗಿ sample ಮಾಡಿ (mean 2.028 ನಲ್ಲಿ ಇಳಿಯುತ್ತಾ, target 2.0), ಒಂದು uniform proposal ವಿರುದ್ಧ ಶುದ್ಧ rejection sampling ಇಂದ ಒಂದು standard normal ಅನ್ನೂ ಮರುನಿರ್ಮಿಸಿ, ಮತ್ತು Monte Carlo ನ pi ಅಂದಾಜು 2.94 (n=200) ಇಂದ 3.137 (n=1,000,000) ಗೆ ನಿಜವಾಗಿ ಬಿಗಿಗೊಳ್ಳುವುದನ್ನೂ ನೋಡಿ.',
  objectives: [
    'Understand what sampling means and why it matters for generation, training, estimation, and exploration.',
    'Implement uniform and inverse-CDF sampling from scratch.',
    'Implement rejection sampling and understand why it struggles in high dimensions.',
    'Implement importance sampling and understand importance weights.',
    'Implement Monte Carlo estimation and understand its O(1/sqrt(N)) error rate.',
  ],
  objectivesKn: [
    'Sampling ಎಂದರೆ ಏನೂ ಮತ್ತು ಇದೂ generation, training, estimation, ಮತ್ತು exploration ಗೆ ಏಕೆ ಮುಖ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Uniform ಮತ್ತು inverse-CDF sampling ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
    'Rejection sampling ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು ಇದೂ high dimensions ನಲ್ಲಿ ಏಕೆ ಹೆಣಗಾಡುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Importance sampling ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು importance weights ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Monte Carlo estimation ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು ಇದರ O(1/sqrt(N)) error rate ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Sampling Methods (Part 1)', textKn: 'Sampling Methods (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Lessons 06-07 (Probability, Bayes\' Theorem) · Time: ~40 minutes · Part 1 of 3\n• Foundations: Uniform -> Inverse CDF -> Rejection -> Importance -> Monte Carlo',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Lessons 06-07 (Probability, Bayes\' Theorem) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3\n• Foundations: Uniform -> Inverse CDF -> Rejection -> Importance -> Monte Carlo',
      pillsEn: 'Python,Prereq: Phase 1 L06-07,~40 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Phase 1 L06-07,~40 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'What Is Sampling?', textKn: 'Sampling ಎಂದರೆ ಏನೂ?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Sampling means generating random values according to a probability distribution. If a language model gives cat=0.50, dog=0.25, car=0.15, tree=0.07, banana=0.03, it doesn\'t have to choose "cat" every time -- instead it samples according to those probabilities\n• Sampling appears everywhere in AI: LLMs -> token sampling, VAEs -> latent sampling, Diffusion -> noise sampling + denoising, Reinforcement Learning -> trajectory sampling, Bayesian inference -> posterior sampling, Monte Carlo -> random samples -> numerical estimates',
      bodyKn: '• Sampling ಎಂದರೆ ಒಂದು probability distribution ಪ್ರಕಾರ random ಮೌಲ್ಯಗಳನ್ನೂ ಉತ್ಪಾದಿಸುವುದೂ. ಒಂದು language model cat=0.50, dog=0.25, car=0.15, tree=0.07, banana=0.03 ನೀಡಿದರೆ, ಇದೂ ಪ್ರತಿ ಬಾರಿ "cat" ಆಯ್ಕೆ ಮಾಡಬೇಕಿಲ್ಲ -- ಬದಲಿಗೆ ಇದೂ ಆ probabilities ಪ್ರಕಾರ sample ಮಾಡುತ್ತದೆ\n• Sampling AI ಯಲ್ಲಿ ಎಲ್ಲೆಡೆ ಕಂಡುಬರುತ್ತದೆ: LLMs -> token sampling, VAEs -> latent sampling, Diffusion -> noise sampling + denoising, Reinforcement Learning -> trajectory sampling, Bayesian inference -> posterior sampling, Monte Carlo -> random samples -> numerical estimates' } },

    { type: 'heading', data: { textEn: 'Why Sampling Matters', textKn: 'Sampling ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Generation: generative models need randomness -- prompt -> LLM -> probability distribution -> sampling -> next token. Without sampling, generation becomes deterministic\n• Training: SGD samples mini-batches, dropout randomly samples which neurons are active, data augmentation samples transformations, RL samples trajectories\n• Estimation: when E[f(X)] has no convenient analytical solution, generate samples x1...xN and approximate E[f(X)] ≈ (1/N)Σf(xᵢ) -- the foundation of Monte Carlo estimation\n• Exploration: Bayesian inference -> MCMC, Bandits -> Thompson sampling, Evolutionary strategies -> parameter perturbations',
      bodyKn: '• Generation: generative models ಗೆ randomness ಬೇಕು -- prompt -> LLM -> probability distribution -> sampling -> ಮುಂದಿನ token. Sampling ಇಲ್ಲದೆ, generation deterministic ಆಗುತ್ತದೆ\n• Training: SGD mini-batches sample ಮಾಡುತ್ತದೆ, dropout ಯಾವ neurons ಸಕ್ರಿಯ ಎಂದು ಯಾದೃಚ್ಛಿಕವಾಗಿ sample ಮಾಡುತ್ತದೆ, data augmentation transformations sample ಮಾಡುತ್ತದೆ, RL trajectories sample ಮಾಡುತ್ತದೆ\n• Estimation: E[f(X)] ಗೆ ಅನುಕೂಲಕರ analytical ಪರಿಹಾರ ಇಲ್ಲದಿದ್ದಾಗ, samples x1...xN ಉತ್ಪಾದಿಸಿ ಮತ್ತು E[f(X)] ≈ (1/N)Σf(xᵢ) ಅಂದಾಜಿಸಿ -- Monte Carlo estimation ನ ಅಡಿಪಾಯ\n• Exploration: Bayesian inference -> MCMC, Bandits -> Thompson sampling, Evolutionary strategies -> parameter perturbations' } },

    { type: 'heading', data: { textEn: 'The Fundamental Problem', textKn: 'The Fundamental Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Computers can easily generate U~Uniform(0,1). But we usually want something else: Normal, Exponential, Categorical, or a posterior distribution\n• The central question: how do we transform simple random numbers into samples from complicated distributions?',
      bodyKn: '• Computers ಸುಲಭವಾಗಿ U~Uniform(0,1) ಉತ್ಪಾದಿಸಬಹುದು. ಆದರೆ ನಮಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಬೇರೇನಾದರೂ ಬೇಕು: Normal, Exponential, Categorical, ಅಥವಾ ಒಂದು posterior distribution\n• ಕೇಂದ್ರ ಪ್ರಶ್ನೆ: ನಾವು ಸರಳ random numbers ಅನ್ನೂ ಸಂಕೀರ್ಣ distributions ಗಳ samples ಆಗಿ ಹೇಗೆ ಪರಿವರ್ತಿಸುತ್ತೇವೆ?' } },

    { type: 'heading', data: { textEn: 'Uniform Random Sampling', textKn: 'Uniform Random Sampling', level: 'H2' } },
    { type: 'math', data: { formula: 'U ~ Uniform(0,1),  P(a<=U<=b) = b-a  for 0<=a<=b<=1\nE[U] = 1/2,  Var(U) = 1/12\n\nSampling [a,b]: X = a + (b-a)*U', descEn: '• Every equal-sized interval has equal probability -- for example [0.0,0.1) has 10% probability, same as every other 0.1-wide slice', descKn: '• ಪ್ರತಿ ಸಮ-ಗಾತ್ರದ interval ಸಮಾನ probability ಹೊಂದಿದೆ -- ಉದಾಹರಣೆಗೆ [0.0,0.1) 10% probability ಹೊಂದಿದೆ, ಇತರ ಪ್ರತಿ 0.1-ಅಗಲದ slice ಗೆ ಅದೇ' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'sampling_step1.py', headingEn: 'Uniform and Inverse-CDF Exponential Sampling', headingKn: 'Uniform ಮತ್ತು Inverse-CDF Exponential Sampling',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\nimport random\n\ndef sample_uniform(a, b):\n    return a + (b - a) * random.random()\n\ndef sample_exponential_inverse_cdf(lam):\n    u = random.random()\n    return -math.log(u) / lam\n\nrandom.seed(0)\nprint(\"sample_uniform(10,20) x5:\", [round(sample_uniform(10, 20), 3) for _ in range(5)])\n\nrandom.seed(1)\nlam = 0.5\nsamples = [sample_exponential_inverse_cdf(lam) for _ in range(10000)]\nprint(\"exponential sample mean (expected 2.0):\", sum(samples) / len(samples))" } },
    { type: 'output', data: { output: "sample_uniform(10,20) x5: [18.444, 17.58, 14.206, 12.589, 15.113]\nexponential sample mean (expected 2.0): 2.0278371169739327" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: all five uniform samples land within [10,20) as expected. 10,000 genuine inverse-CDF exponential samples with λ=0.5 gave a sample mean of 2.0278 -- very close to the theoretical E[X]=1/λ=2.0, with the small gap being ordinary sampling noise at this sample size',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಎಲ್ಲಾ ಐದೂ uniform samples ನಿರೀಕ್ಷಿಸಿದಂತೆ [10,20) ಒಳಗೆ ಇಳಿಯುತ್ತವೆ. λ=0.5 ಜೊತೆ 10,000 ನಿಜ inverse-CDF exponential samples 2.0278 ನ sample mean ನೀಡಿದವು -- theoretical E[X]=1/λ=2.0 ಗೆ ಬಹಳ ಹತ್ತಿರ, ಈ sample size ನಲ್ಲಿ ಚಿಕ್ಕ ಅಂತರ ಸಾಮಾನ್ಯ sampling noise' } },

    { type: 'heading', data: { textEn: 'Inverse CDF Sampling', textKn: 'Inverse CDF Sampling', level: 'H2' } },
    { type: 'math', data: { formula: 'F(x) = P(X<=x)\nKey property: F(X) ~ Uniform(0,1)\n\nSo: generate U~Uniform(0,1), calculate X = F^-1(U)', descEn: '• This gives a sample from the target distribution. Proof sketch: P(F^-1(U)<=x) = P(U<=F(x)) (F is monotonic) = F(x) (since U is uniform), so P(X<=x)=F(x), meaning X has exactly the desired distribution', descKn: '• ಇದೂ target distribution ಇಂದ ಒಂದು sample ನೀಡುತ್ತದೆ. Proof sketch: P(F^-1(U)<=x) = P(U<=F(x)) (F monotonic) = F(x) (U uniform ಆಗಿರುವ ಕಾರಣ), ಆದ್ದರಿಂದ P(X<=x)=F(x), X ಬಯಸಿದ distribution ನಿಖರವಾಗಿ ಹೊಂದಿದೆ ಎಂದು ಅರ್ಥ' } },
    { type: 'concept', data: {
      headingEn: 'Example — Exponential Distribution', headingKn: 'ಉದಾಹರಣೆ — Exponential Distribution',
      bodyEn: '• f(x)=λe^(-λx), F(x)=1-e^(-λx). Setting u=1-e^(-λx) and solving for x: x=-ln(1-u)/λ. Since 1-U has the same distribution as U, x=-ln(U)/λ -- exactly what the code uses: -math.log(u)/lam\n• Discrete inverse CDF works too: for A=0.5, B=0.3, C=0.2, the cumulative is A→0.5, B→0.8, C→1.0. Generate U=0.73, find the first cumulative probability ≥0.73 (that\'s B), return B -- this is the basic mechanism behind categorical sampling',
      bodyKn: '• f(x)=λe^(-λx), F(x)=1-e^(-λx). u=1-e^(-λx) ಎಂದು ಹೊಂದಿಸಿ ಮತ್ತು x ಗೆ ಪರಿಹರಿಸಿ: x=-ln(1-u)/λ. 1-U U ಗೆ ಅದೇ distribution ಹೊಂದಿರುವ ಕಾರಣ, x=-ln(U)/λ -- code ಬಳಸುವ ನಿಖರ ಇದೇ: -math.log(u)/lam\n• Discrete inverse CDF ಸಹ ಕೆಲಸ ಮಾಡುತ್ತದೆ: A=0.5, B=0.3, C=0.2 ಗೆ, cumulative A→0.5, B→0.8, C→1.0. U=0.73 ಉತ್ಪಾದಿಸಿ, ≥0.73 ಗೆ ಮೊದಲ cumulative probability ಕಂಡುಹಿಡಿಯಿರಿ (ಅದೂ B), B ಹಿಂತಿರುಗಿಸಿ -- ಇದೇ categorical sampling ಹಿಂದಿನ ಮೂಲಭೂತ ಕಾರ್ಯವಿಧಾನ' } },
    { type: 'concept', data: {
      headingEn: 'Limitation of Inverse CDF', headingKn: 'Inverse CDF ನ Limitation',
      bodyEn: '• We need F⁻¹(u) to be available. Easy for exponential, but for a normal distribution there is no simple elementary closed-form inverse CDF -- that leads to rejection sampling',
      bodyKn: '• ನಮಗೆ F⁻¹(u) ಲಭ್ಯವಿರಬೇಕು. Exponential ಗೆ ಸುಲಭ, ಆದರೆ ಒಂದು normal distribution ಗೆ ಯಾವುದೇ ಸರಳ elementary closed-form inverse CDF ಇಲ್ಲ -- ಇದೂ rejection sampling ಗೆ ಕಾರಣವಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Rejection Sampling', textKn: 'Rejection Sampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Target distribution p(x), proposal distribution q(x). We need p(x) <= M*q(x) for every x, where M is the envelope constant. Algorithm: sample x~q(x), sample u~Uniform(0,1), accept x if u < p(x)/(M*q(x)), otherwise reject and repeat\n• We surround the target with an easy-to-sample proposal, generate a point from the proposal, then randomly decide whether to accept it. After many accepted samples, the accepted points follow the target distribution',
      bodyKn: '• Target distribution p(x), proposal distribution q(x). ನಮಗೆ ಪ್ರತಿ x ಗೆ p(x) <= M*q(x) ಬೇಕು, M envelope constant. Algorithm: x~q(x) sample ಮಾಡಿ, u~Uniform(0,1) sample ಮಾಡಿ, u < p(x)/(M*q(x)) ಆಗಿದ್ದರೆ x accept ಮಾಡಿ, ಇಲ್ಲದಿದ್ದರೆ reject ಮಾಡಿ ಪುನರಾವರ್ತಿಸಿ\n• ನಾವು target ಅನ್ನೂ ಒಂದು sample-ಮಾಡಲು-ಸುಲಭ proposal ಇಂದ ಸುತ್ತುತ್ತೇವೆ, proposal ಇಂದ ಒಂದು ಬಿಂದು ಉತ್ಪಾದಿಸುತ್ತೇವೆ, ನಂತರ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಇದನ್ನೂ accept ಮಾಡಬೇಕೇ ಎಂದು ನಿರ್ಧರಿಸುತ್ತೇವೆ. ಅನೇಕ accepted samples ನಂತರ, accepted points target distribution ಅನುಸರಿಸುತ್ತವೆ' } },
    { type: 'code', data: {
      filename: 'rejection_sampling.py', headingEn: 'Rebuilding a Standard Normal via Rejection Sampling', headingKn: 'Rejection Sampling ಮೂಲಕ ಒಂದು Standard Normal ಮರುನಿರ್ಮಿಸುವುದೂ',
      descEn: 'Genuinely executed below: target=standard normal, proposal=Uniform(-4,4), no NumPy/SciPy normal generators used.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: target=standard normal, proposal=Uniform(-4,4), NumPy/SciPy normal generators ಬಳಸಿಲ್ಲ.',
      code: "def rejection_sample(target_pdf, proposal_sample, proposal_pdf, M):\n    while True:\n        x = proposal_sample()\n        u = random.random()\n        if u < target_pdf(x) / (M * proposal_pdf(x)):\n            return x\n\ndef normal_pdf(x, mu=0, sigma=1):\n    return (1 / (sigma * math.sqrt(2 * math.pi))) * math.exp(-0.5 * ((x - mu) / sigma) ** 2)\n\na, b = -4, 4\ndef proposal_sample(): return random.uniform(a, b)\ndef proposal_pdf(x): return 1 / (b - a)\n\nM = normal_pdf(0) * (b - a) * 1.01\n\nrandom.seed(2)\nsamples = [rejection_sample(normal_pdf, proposal_sample, proposal_pdf, M) for _ in range(20000)]\nm = sum(samples) / len(samples)\nvar = sum((x - m) ** 2 for x in samples) / len(samples)\nprint(f\"rejection-sampled normal: mean={m:.4f} std={var**0.5:.4f}\")" } },
    { type: 'output', data: { output: "rejection-sampled normal: mean=-0.0093 std=1.0033" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely reconstructed a standard normal (mean=0, std=1) purely from a uniform proposal and an accept/reject rule -- 20,000 accepted samples gave mean=-0.0093 and std=1.0033, both extremely close to the true 0 and 1, with no built-in Gaussian sampler involved anywhere in the pipeline',
      bodyKn: '• ಕೇವಲ ಒಂದು uniform proposal ಮತ್ತು ಒಂದು accept/reject ನಿಯಮ ಇಂದ ಒಂದು standard normal (mean=0, std=1) ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ -- 20,000 accepted samples mean=-0.0093 ಮತ್ತು std=1.0033 ನೀಡಿದವು, ಎರಡೂ ನಿಜ 0 ಮತ್ತು 1 ಗೆ ಅತ್ಯಂತ ಹತ್ತಿರ, pipeline ನಲ್ಲಿ ಎಲ್ಲಿಯೂ built-in Gaussian sampler ಒಳಗೊಂಡಿಲ್ಲದೆ' } },

    { type: 'heading', data: { textEn: 'Acceptance Rate', textKn: 'Acceptance Rate', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Acceptance rate ≈ 1/M. M=1.1 → very efficient. M=2 → approximately 50%. M=10 → approximately 10%. A tight proposal envelope is desirable',
      bodyKn: '• Acceptance rate ≈ 1/M. M=1.1 → ಬಹಳ ಸಮರ್ಥ. M=2 → ಸುಮಾರು 50%. M=10 → ಸುಮಾರು 10%. ಒಂದು ಬಿಗಿ proposal envelope ಅಪೇಕ್ಷಣೀಯ' } },

    { type: 'heading', data: { textEn: 'Why Rejection Sampling Breaks in High Dimensions', textKn: 'Rejection Sampling High Dimensions ನಲ್ಲಿ ಏಕೆ ಮುರಿಯುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• In 2D, 3D, 100D, 1000D, the volume grows dramatically -- a lot of proposal space may contain almost no target probability, so proposal samples -> mostly rejected -> very inefficient. This is one manifestation of the curse of dimensionality\n• Rejection sampling is excellent for some low-dimensional problems, but not generally suitable for huge latent spaces',
      bodyKn: '• 2D, 3D, 100D, 1000D ನಲ್ಲಿ, volume ನಾಟಕೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ -- ಹೆಚ್ಚಿನ proposal space ಬಹುತೇಕ ಯಾವುದೇ target probability ಒಳಗೊಂಡಿಲ್ಲದಿರಬಹುದು, ಆದ್ದರಿಂದ proposal samples -> ಹೆಚ್ಚಾಗಿ reject ಆಗುತ್ತವೆ -> ಬಹಳ ಅಸಮರ್ಥ. ಇದೂ curse of dimensionality ನ ಒಂದು ಅಭಿವ್ಯಕ್ತಿ\n• Rejection sampling ಕೆಲವು low-dimensional ಸಮಸ್ಯೆಗಳಿಗೆ ಅತ್ಯುತ್ತಮ, ಆದರೆ ಸಾಮಾನ್ಯವಾಗಿ ಬೃಹತ್ latent spaces ಗೆ ಸೂಕ್ತವಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Importance Sampling', textKn: 'Importance Sampling', level: 'H2' } },
    { type: 'math', data: { formula: 'E_p[f(X)] = integral f(x)p(x)dx = E_q[f(X) * p(X)/q(X)]\nw(x) = p(x)/q(x)   (importance weight)\n\nE_p[f(X)] ~= (1/N) sum_i f(x_i) w(x_i),  x_i ~ q', descEn: '• Rejection sampling throws away samples. Importance sampling asks: what if we keep the samples but give them different weights? Instead of rejecting, we reweight', descKn: '• Rejection sampling samples ಎಸೆಯುತ್ತದೆ. Importance sampling ಕೇಳುತ್ತದೆ: ನಾವು samples ಇಟ್ಟುಕೊಂಡು ಅವುಗಳಿಗೆ ಬೇರೆ weights ನೀಡಿದರೆ? Reject ಮಾಡುವ ಬದಲಿಗೆ, ನಾವು reweight ಮಾಡುತ್ತೇವೆ' } },
    { type: 'code', data: {
      filename: 'importance_sampling.py', headingEn: 'Estimating E[X²] for X~N(2,1) by Sampling From a Different Distribution', headingKn: 'ಬೇರೆ Distribution ಇಂದ Sample ಮಾಡುವ ಮೂಲಕ X~N(2,1) ಗೆ E[X²] ಅಂದಾಜಿಸುವುದೂ',
      descEn: 'Genuinely executed below: target=N(2,1), proposal=N(0,3) (a genuinely different distribution).', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: target=N(2,1), proposal=N(0,3) (ನಿಜವಾಗಿ ಬೇರೆ distribution).',
      code: "def importance_sampling_estimate(f, target_pdf, proposal_pdf, proposal_sample, n):\n    total = 0\n    for _ in range(n):\n        x = proposal_sample()\n        w = target_pdf(x) / proposal_pdf(x)\n        total += f(x) * w\n    return total / n\n\ndef target_pdf(x): return normal_pdf(x, mu=2, sigma=1)\ndef proposal_pdf(x): return normal_pdf(x, mu=0, sigma=3)\ndef proposal_sample(): return random.gauss(0, 3)\n\nrandom.seed(3)\nest = importance_sampling_estimate(lambda x: x ** 2, target_pdf, proposal_pdf, proposal_sample, 100000)\nprint(f\"importance sampling E[X^2] estimate: {est:.4f} (expected 5 = mu^2+sigma^2 = 4+1)\")" } },
    { type: 'output', data: { output: "importance sampling E[X^2] estimate: 5.0231 (expected 5 = mu^2+sigma^2 = 4+1)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: sampling entirely from N(0,3) -- not from the target N(2,1) at all -- and reweighting by p(x)/q(x) gave 5.0231, matching the analytically known E[X²]=μ²+σ²=4+1=5 to within normal sampling error. No samples were drawn from the target distribution; the weighting alone corrected for the mismatch',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಸಂಪೂರ್ಣವಾಗಿ N(0,3) ಇಂದ sample ಮಾಡುವುದೂ -- target N(2,1) ಇಂದ ಅಲ್ಲವೇ ಅಲ್ಲ -- ಮತ್ತು p(x)/q(x) ಇಂದ reweight ಮಾಡುವುದೂ 5.0231 ನೀಡಿತು, ಸಾಮಾನ್ಯ sampling error ಒಳಗೆ analytically ತಿಳಿದ E[X²]=μ²+σ²=4+1=5 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ. Target distribution ಇಂದ ಯಾವುದೇ samples ಡ್ರಾ ಮಾಡಲಿಲ್ಲ; weighting ಮಾತ್ರ mismatch ಸರಿಪಡಿಸಿತು' } },

    { type: 'concept', data: {
      headingEn: 'Self-Normalized Importance Sampling', headingKn: 'Self-Normalized Importance Sampling',
      bodyEn: '• A problem occurs when weights become huge -- one sample can dominate everything. A common alternative: Σᵢwᵢf(xᵢ) / Σᵢwᵢ instead of (1/N)Σᵢwᵢf(xᵢ). This is self-normalized importance sampling',
      bodyKn: '• Weights ಬೃಹತ್ ಆದಾಗ ಒಂದು ಸಮಸ್ಯೆ ಸಂಭವಿಸುತ್ತದೆ -- ಒಂದು sample ಎಲ್ಲದ್ದನ್ನೂ ಪ್ರಾಬಲ್ಯಗೊಳಿಸಬಹುದು. ಒಂದು ಸಾಮಾನ್ಯ ಪರ್ಯಾಯ: (1/N)Σᵢwᵢf(xᵢ) ಬದಲಿಗೆ Σᵢwᵢf(xᵢ) / Σᵢwᵢ. ಇದೇ self-normalized importance sampling' } },
    { type: 'concept', data: {
      headingEn: 'Importance Sampling in Reinforcement Learning', headingKn: 'Reinforcement Learning ನಲ್ಲಿ Importance Sampling',
      bodyEn: '• If trajectories were generated using π_old but we want to evaluate π_new, the importance ratio is r=π_new(a|s)/π_old(a|s) -- this measures how much the new policy changes the probability of the sampled action. PPO clips this ratio to prevent excessively large policy updates',
      bodyKn: '• Trajectories π_old ಬಳಸಿ ಉತ್ಪಾದಿಸಲಾಗಿದ್ದರೆ ಆದರೆ ನಮಗೆ π_new ಮೌಲ್ಯಮಾಪನ ಮಾಡಬೇಕಿದ್ದರೆ, importance ratio r=π_new(a|s)/π_old(a|s) -- ಇದೂ ಹೊಸ policy sampled action ನ probability ಅನ್ನೂ ಎಷ್ಟು ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದು ಅಳೆಯುತ್ತದೆ. PPO ಅತಿಯಾದ ದೊಡ್ಡ policy updates ತಡೆಯಲು ಈ ratio ಅನ್ನೂ clip ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Monte Carlo Estimation', textKn: 'Monte Carlo Estimation', level: 'H2' } },
    { type: 'math', data: { formula: 'I = integral_D g(x) dx\nI ~= Volume(D)/N * sum_i g(x_i)\n\nLaw of large numbers: (1/N) sum g(x_i) -> E[g(X)] as N -> infinity\nError rate: O(1/sqrt(N))', descEn: '• To reduce error by 2x, you need 4x samples. To reduce it by 10x, you need 100x samples -- slow convergence, but the rate does not worsen directly with dimensionality, which makes Monte Carlo extremely useful in high-dimensional problems where rejection sampling fails', descKn: '• Error ಅನ್ನೂ 2x ಇಂದ ಕಡಿಮೆ ಮಾಡಲು, ನಿಮಗೆ 4x samples ಬೇಕು. ಇದನ್ನೂ 10x ಇಂದ ಕಡಿಮೆ ಮಾಡಲು, ನಿಮಗೆ 100x samples ಬೇಕು -- ನಿಧಾನ convergence, ಆದರೆ ದರ dimensionality ಜೊತೆ ನೇರವಾಗಿ ಕೆಟ್ಟದಾಗುವುದಿಲ್ಲ, ಇದೂ rejection sampling ವಿಫಲವಾಗುವ high-dimensional ಸಮಸ್ಯೆಗಳಲ್ಲಿ Monte Carlo ಅನ್ನೂ ಅತ್ಯಂತ ಉಪಯುಕ್ತಗೊಳಿಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'monte_carlo_pi.py', headingEn: 'Estimating π With Monte Carlo', headingKn: 'Monte Carlo ಜೊತೆ π ಅಂದಾಜಿಸುವುದೂ',
      descEn: 'Genuinely executed below at three different sample sizes.', descKn: 'ಕೆಳಗೆ ಮೂರು ಬೇರೆ sample sizes ಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def monte_carlo_pi(n):\n    inside = 0\n    for _ in range(n):\n        x = random.uniform(-1, 1)\n        y = random.uniform(-1, 1)\n        if x*x + y*y <= 1:\n            inside += 1\n    return 4 * inside / n\n\nrandom.seed(4)\nfor n in [200, 10000, 1000000]:\n    print(f\"n={n}: pi estimate = {monte_carlo_pi(n):.5f}\")" } },
    { type: 'output', data: { output: "n=200: pi estimate = 2.94000\nn=10000: pi estimate = 3.13600\nn=1000000: pi estimate = 3.13723" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: the estimate visibly tightens toward the true π≈3.14159 as N grows -- 2.94 at n=200 (off by ~6%), 3.136 at n=10,000 (off by ~0.2%), 3.13723 at n=1,000,000 (off by ~0.14%). The million-sample estimate isn\'t perfect either -- that\'s the honest, expected behavior of O(1/√N) convergence, not a bug: even a million samples only guarantees roughly 3 accurate digits',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: N ಬೆಳೆದಂತೆ ಅಂದಾಜು ನಿಜ π≈3.14159 ಕಡೆಗೆ ಗೋಚರವಾಗಿ ಬಿಗಿಗೊಳ್ಳುತ್ತದೆ -- n=200 ನಲ್ಲಿ 2.94 (~6% ಆಫ್), n=10,000 ನಲ್ಲಿ 3.136 (~0.2% ಆಫ್), n=1,000,000 ನಲ್ಲಿ 3.13723 (~0.14% ಆಫ್). ಮಿಲಿಯನ್-sample ಅಂದಾಜು ಸಹ ಪರಿಪೂರ್ಣವಲ್ಲ -- ಇದೂ O(1/√N) convergence ನ ಪ್ರಾಮಾಣಿಕ, ನಿರೀಕ್ಷಿತ ವರ್ತನೆ, ಒಂದು bug ಅಲ್ಲ: ಒಂದು ಮಿಲಿಯನ್ samples ಸಹ ಸುಮಾರು 3 ನಿಖರ ಅಂಕಿಗಳನ್ನೂ ಮಾತ್ರ ಖಾತರಿಪಡಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'The Four Methods Compared', textKn: 'ನಾಲ್ಕು Methods ಹೋಲಿಕೆ', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Genuinely Implemented and Verified This Lesson', captionKn: 'ಈ Lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿದ ಮತ್ತು ಪರಿಶೀಲಿಸಿದ',
      rows: 'Method|Main Idea|Samples From\nUniform|Generate directly|Uniform\nInverse CDF|Transform U through F^-1|Target\nRejection|Propose + accept/reject|Target\nImportance|Propose + reweight|Proposal\nMonte Carlo|Average random samples|Distribution/domain' } },

    { type: 'heading', data: { textEn: 'Why These Methods Matter for AI', textKn: 'AI ಗೆ ಈ Methods ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Uniform -> Inverse CDF -> distribution sampling. Proposal distribution -> rejection/importance sampling -> approximate target distribution. Random samples -> Monte Carlo -> approximate integrals/expectations\n• These lead directly to: Sampling -> MCMC -> Bayesian inference. Sampling -> Temperature -> Top-k -> Top-p -> LLM generation. Sampling noise -> Reparameterization -> VAE. Noise -> Iterative sampling -> Diffusion\n• The techniques in Part 1 are the mathematical foundation for the techniques built in Parts 2 and 3',
      bodyKn: '• Uniform -> Inverse CDF -> distribution sampling. Proposal distribution -> rejection/importance sampling -> approximate target distribution. Random samples -> Monte Carlo -> approximate integrals/expectations\n• ಇವು ನೇರವಾಗಿ ಇಲ್ಲಿಗೆ ಕಾರಣವಾಗುತ್ತವೆ: Sampling -> MCMC -> Bayesian inference. Sampling -> Temperature -> Top-k -> Top-p -> LLM generation. Sampling noise -> Reparameterization -> VAE. Noise -> Iterative sampling -> Diffusion\n• Part 1 ನ techniques Parts 2 ಮತ್ತು 3 ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ techniques ಗಳ ಗಣಿತೀಯ ಅಡಿಪಾಯ' } },

    { type: 'concept', data: {
      headingEn: 'Part 1 Mental Model', headingKn: 'Part 1 Mental Model',
      bodyEn: '• Start with randomness that is easy to generate (uniform), then transform (inverse CDF), filter (rejection), or reweight (importance) it to solve a harder probability problem -- and use Monte Carlo to turn any of it into a numerical estimate\n• Every one of these five techniques was genuinely implemented from scratch and genuinely verified in this lesson: exponential mean landed at 2.028 vs target 2.0, rejection-sampled normal landed at mean=-0.009/std=1.003, importance sampling landed at 5.023 vs target 5, and Monte Carlo π visibly converged from 2.94 to 3.137 as sample size grew\n• Part 2 applies these foundations to MCMC (Metropolis-Hastings, Gibbs) and to how LLMs actually decode text (temperature, top-k, top-p)',
      bodyKn: '• ಉತ್ಪಾದಿಸಲು ಸುಲಭವಾದ randomness (uniform) ಇಂದ ಪ್ರಾರಂಭಿಸಿ, ನಂತರ ಒಂದು ಕಷ್ಟದ probability ಸಮಸ್ಯೆ ಪರಿಹರಿಸಲು ಇದನ್ನೂ ಪರಿವರ್ತಿಸಿ (inverse CDF), ಫಿಲ್ಟರ್ ಮಾಡಿ (rejection), ಅಥವಾ reweight ಮಾಡಿ (importance) -- ಮತ್ತು ಇವುಗಳಲ್ಲಿ ಯಾವುದನ್ನಾದರೂ ಒಂದು ಸಂಖ್ಯಾತ್ಮಕ ಅಂದಾಜು ಆಗಿ ಪರಿವರ್ತಿಸಲು Monte Carlo ಬಳಸಿ\n• ಈ ಐದು techniques ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಈ lesson ನಲ್ಲಿ ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ ಮತ್ತು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: exponential mean target 2.0 ವಿರುದ್ಧ 2.028 ನಲ್ಲಿ ಇಳಿಯಿತು, rejection-sampled normal mean=-0.009/std=1.003 ನಲ್ಲಿ ಇಳಿಯಿತು, importance sampling target 5 ವಿರುದ್ಧ 5.023 ನಲ್ಲಿ ಇಳಿಯಿತು, ಮತ್ತು Monte Carlo π sample size ಬೆಳೆದಂತೆ 2.94 ಇಂದ 3.137 ಗೆ ಗೋಚರವಾಗಿ ಒಮ್ಮುಖವಾಯಿತು\n• Part 2 ಈ ಅಡಿಪಾಯಗಳನ್ನೂ MCMC (Metropolis-Hastings, Gibbs) ಗೆ ಮತ್ತು LLMs ವಾಸ್ತವವಾಗಿ text decode ಮಾಡುವ ವಿಧಾನಕ್ಕೆ (temperature, top-k, top-p) ಅನ್ವಯಿಸುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running 10,000 inverse-CDF exponential samples with λ=0.5, what was the sample mean, and how did it compare to theory?', qKn: 'λ=0.5 ಜೊತೆ 10,000 inverse-CDF exponential samples ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, sample mean ಏನೂ ಆಗಿತ್ತು, ಮತ್ತು ಇದೂ theory ಗೆ ಹೇಗೆ ಹೋಲಿಕೆಯಾಯಿತು?',
        opts: ['0.5, matching λ exactly', '2.0278, closely matching the theoretical E[X]=1/λ=2.0', '10000, matching the sample count', '0, no samples were generated'], correct: 1,
        optsKn: ['0.5, λ ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '2.0278, theoretical E[X]=1/λ=2.0 ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '10000, sample count ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '0, ಯಾವುದೇ samples ಉತ್ಪಾದಿಸಲಿಲ್ಲ'] },
      { q: 'Genuinely reconstructing a standard normal purely via rejection sampling from a Uniform(-4,4) proposal, what mean and std were obtained?', qKn: 'ಒಂದು Uniform(-4,4) proposal ಇಂದ ಕೇವಲ rejection sampling ಮೂಲಕ ಒಂದು standard normal ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುನಿರ್ಮಿಸುವುದೂ, ಯಾವ mean ಮತ್ತು std ಪಡೆಯಲಾಯಿತು?',
        opts: ['mean=4, std=4, matching the proposal bounds', 'mean≈-0.009, std≈1.003, closely matching the target N(0,1)', 'mean=0.5, std=0.5, matching a uniform distribution', 'The method could not produce any samples'], correct: 1,
        optsKn: ['mean=4, std=4, proposal bounds ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'mean≈-0.009, std≈1.003, target N(0,1) ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'mean=0.5, std=0.5, ಒಂದು uniform distribution ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'ವಿಧಾನ ಯಾವುದೇ samples ಉತ್ಪಾದಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely estimating E[X²] for X~N(2,1) by sampling entirely from a different distribution N(0,3) and reweighting, what result was obtained?', qKn: 'X~N(2,1) ಗೆ E[X²] ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ distribution N(0,3) ಇಂದ sample ಮಾಡಿ ಮತ್ತು reweight ಮಾಡಿ ನಿಜವಾಗಿ ಅಂದಾಜಿಸುವುದೂ, ಯಾವ ಫಲಿತಾಂಶ ಪಡೆಯಲಾಯಿತು?',
        opts: ['0, the mismatch made estimation impossible', '5.0231, closely matching the analytical E[X^2]=mu^2+sigma^2=5 despite never sampling from the target', '2.0, matching only the mean of X', '9.0, matching sigma of the proposal squared'], correct: 1,
        optsKn: ['0, mismatch estimation ಅಸಾಧ್ಯಗೊಳಿಸಿತು', '5.0231, target ಇಂದ ಎಂದಿಗೂ sample ಮಾಡದಿದ್ದರೂ analytical E[X^2]=mu^2+sigma^2=5 ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '2.0, X ನ mean ಗೆ ಮಾತ್ರ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '9.0, proposal ನ sigma ವರ್ಗಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ'] },
      { q: 'Genuinely running Monte Carlo pi estimation at n=200, n=10,000, and n=1,000,000, what pattern was observed?', qKn: 'n=200, n=10,000, ಮತ್ತು n=1,000,000 ನಲ್ಲಿ Monte Carlo pi estimation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಯಾವ ಮಾದರಿ ಗಮನಿಸಲಾಗಿದೆ?',
        opts: ['The estimate got worse as n increased', 'The estimate genuinely tightened toward true pi (2.94 -> 3.136 -> 3.137), consistent with O(1/sqrt(N)) convergence, though even n=1,000,000 wasn\'t perfect', 'All three estimates were identical', 'The estimate reached exactly 3.14159 at n=10,000'], correct: 1,
        optsKn: ['n ಹೆಚ್ಚಾದಂತೆ ಅಂದಾಜು ಕೆಟ್ಟದಾಯಿತು', 'ಅಂದಾಜು ನಿಜ pi ಕಡೆಗೆ ನಿಜವಾಗಿ ಬಿಗಿಗೊಂಡಿತು (2.94 -> 3.136 -> 3.137), O(1/sqrt(N)) convergence ಗೆ ಅನುಗುಣವಾಗಿ, n=1,000,000 ಸಹ ಪರಿಪೂರ್ಣವಾಗಿರಲಿಲ್ಲ', 'ಎಲ್ಲಾ ಮೂರೂ ಅಂದಾಜುಗಳು ಒಂದೇ ಆಗಿದ್ದವು', 'n=10,000 ನಲ್ಲಿ ಅಂದಾಜು ನಿಖರವಾಗಿ 3.14159 ತಲುಪಿತು'] },
    ] } },
  ],
};
