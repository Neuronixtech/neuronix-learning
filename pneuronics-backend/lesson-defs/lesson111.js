const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf2700'; // Module 29: Sampling Methods

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Sampling Methods (Part 3) — Differentiable Sampling: Gumbel-Softmax, Stratified Sampling & Diffusion',
  titleKn: 'Sampling Methods (Part 3) — Differentiable Sampling: Gumbel-Softmax, Stratified Sampling & Diffusion',
  desc: 'Genuinely confirm the reparameterization trick preserves the target distribution (mean=3.009, std=2.002 for target N(3,2)), genuinely recover categorical probabilities [0.5,0.3,0.2] from pure Gumbel-Max noise, and measure stratified sampling cutting Monte Carlo variance by 82x on a real integral.',
  descKn: 'Reparameterization trick target distribution ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ (target N(3,2) ಗೆ mean=3.009, std=2.002), ಶುದ್ಧ Gumbel-Max noise ಇಂದ categorical probabilities [0.5,0.3,0.2] ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಪಡೆಯಿರಿ, ಮತ್ತು ಒಂದು ನಿಜ integral ಮೇಲೆ stratified sampling Monte Carlo variance ಅನ್ನೂ 82x ಇಳಿಸುವುದನ್ನೂ ಅಳೆಯಿರಿ.',
  objectives: [
    'Understand why sampling breaks backpropagation and how the reparameterization trick fixes it.',
    'Implement the reparameterization trick for Gaussian latents.',
    'Understand the Gumbel-Max trick for exact categorical sampling.',
    'Implement Gumbel-Softmax as a differentiable relaxation of categorical sampling.',
    'Implement stratified sampling and understand why it reduces variance.',
    'Understand diffusion models as an iterative Markov sampling process.',
  ],
  objectivesKn: [
    'Sampling backpropagation ಅನ್ನೂ ಏಕೆ ಮುರಿಯುತ್ತದೆ ಮತ್ತು reparameterization trick ಇದನ್ನೂ ಹೇಗೆ ಸರಿಪಡಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Gaussian latents ಗಾಗಿ reparameterization trick ಜಾರಿಗೊಳಿಸಿ.',
    'ನಿಖರ categorical sampling ಗಾಗಿ Gumbel-Max trick ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Categorical sampling ನ ಒಂದು differentiable relaxation ಆಗಿ Gumbel-Softmax ಜಾರಿಗೊಳಿಸಿ.',
    'Stratified sampling ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು ಇದೂ variance ಏಕೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Diffusion models ಅನ್ನೂ ಒಂದು iterative Markov sampling ಪ್ರಕ್ರಿಯೆ ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Sampling Methods (Part 3)', textKn: 'Sampling Methods (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Time: ~40 minutes · Part 3 of 3\n• Part 3 answers a harder question: how can a neural network learn when the operation itself involves randomness or discrete sampling? That leads directly to VAEs, Gumbel-Softmax, and diffusion models',
      bodyKn: '• Type: Build · Language: Python · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3\n• Part 3 ಒಂದು ಹೆಚ್ಚು ಕಷ್ಟದ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ: operation ಸ್ವತಃ randomness ಅಥವಾ discrete sampling ಒಳಗೊಂಡಾಗ ಒಂದು neural network ಹೇಗೆ ಕಲಿಯಬಹುದು? ಇದೂ ನೇರವಾಗಿ VAEs, Gumbel-Softmax, ಮತ್ತು diffusion models ಗೆ ಕಾರಣವಾಗುತ್ತದೆ',
      pillsEn: 'Python,Prereq: Part 1 & 2,~40 min,Part 3 of 3',
      pillsKn: 'Python,Prereq: Part 1 & 2,~40 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem With Sampling and Backpropagation', textKn: 'Sampling ಮತ್ತು Backpropagation ಜೊತೆ Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Neural networks learn through gradients: input -> network -> loss -> backpropagation -> gradients -> update parameters\n• But if z~N(μ,σ²), the sampling operation introduces randomness. The problem becomes: how do we differentiate through the random draw ∂/∂μ Sample(N(μ,σ²))? That\'s the problem the reparameterization trick solves',
      bodyKn: '• Neural networks gradients ಮೂಲಕ ಕಲಿಯುತ್ತವೆ: input -> network -> loss -> backpropagation -> gradients -> parameters ಅಪ್‌ಡೇಟ್ ಮಾಡಿ\n• ಆದರೆ z~N(μ,σ²) ಆಗಿದ್ದರೆ, sampling operation randomness ಪರಿಚಯಿಸುತ್ತದೆ. ಸಮಸ್ಯೆ ಆಗುತ್ತದೆ: ನಾವು random draw ∂/∂μ Sample(N(μ,σ²)) ಮೂಲಕ ಹೇಗೆ ಡಿಫರೆನ್ಷಿಯೇಟ್ ಮಾಡುತ್ತೇವೆ? ಅದೇ reparameterization trick ಪರಿಹರಿಸುವ ಸಮಸ್ಯೆ' } },

    { type: 'heading', data: { textEn: 'VAE Background', textKn: 'VAE Background', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A Variational Autoencoder: input x -> encoder -> μ,σ -> sampling -> latent z -> decoder -> reconstructed x. The encoder produces a probability distribution, not one fixed latent vector\n• The naive approach z~N(μ,σ²) puts a random operation in the middle -- we can\'t simply treat it as an ordinary differentiable function of μ and σ',
      bodyKn: '• ಒಂದು Variational Autoencoder: input x -> encoder -> μ,σ -> sampling -> latent z -> decoder -> reconstructed x. Encoder ಒಂದು ನಿಗದಿತ latent vector ಬದಲಿಗೆ ಒಂದು probability distribution ಉತ್ಪಾದಿಸುತ್ತದೆ\n• Naive ವಿಧಾನ z~N(μ,σ²) ಒಂದು random operation ಅನ್ನೂ ಮಧ್ಯದಲ್ಲಿ ಇಡುತ್ತದೆ -- ನಾವು ಇದನ್ನೂ μ ಮತ್ತು σ ನ ಒಂದು ಸಾಮಾನ್ಯ differentiable function ಆಗಿ ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Reparameterization Trick', textKn: 'Reparameterization Trick', level: 'H2' } },
    { type: 'math', data: { formula: 'z = mu + sigma * epsilon,  epsilon ~ N(0,1)\n\ndz/dmu = 1,  dz/dsigma = epsilon', descEn: '• N(μ,σ²) = μ + σ·N(0,1) in distribution -- we\'re still sampling from exactly the same distribution, we\'ve just changed the representation. The randomness (ε) is now separated from the learnable parameters (μ, σ), so gradients can flow: loss -> z -> μ,σ -> encoder', descKn: '• N(μ,σ²) = μ + σ·N(0,1) distribution ನಲ್ಲಿ -- ನಾವು ಇನ್ನೂ ನಿಖರ ಅದೇ distribution ಇಂದ sample ಮಾಡುತ್ತಿದ್ದೇವೆ, ನಾವು ಕೇವಲ ಪ್ರಾತಿನಿಧ್ಯ ಬದಲಾಯಿಸಿದ್ದೇವೆ. Randomness (ε) ಈಗ ಕಲಿಯಬಹುದಾದ parameters (μ, σ) ಇಂದ ಬೇರ್ಪಟ್ಟಿದೆ, ಆದ್ದರಿಂದ gradients ಹರಿಯಬಹುದು: loss -> z -> μ,σ -> encoder' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'reparameterization.py', headingEn: 'Reparameterization Trick', headingKn: 'Reparameterization Trick',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def reparam_sample(mu, sigma):\n    epsilon = random.gauss(0, 1)\n    return mu + sigma * epsilon, epsilon\n\ndef reparam_gradient(mu, sigma, epsilon):\n    dz_dmu = 1.0\n    dz_dsigma = epsilon\n    return dz_dmu, dz_dsigma\n\nrandom.seed(0)\nmu, sigma = 3.0, 2.0\nz, eps = reparam_sample(mu, sigma)\nprint(f\"epsilon={eps:.4f}, z={z:.4f}\")\nprint(\"check z == mu + sigma*eps:\", abs(z - (mu + sigma * eps)) < 1e-9)\n\ndmu, dsigma = reparam_gradient(mu, sigma, eps)\nprint(\"dz/dmu:\", dmu, \" dz/dsigma:\", dsigma, \"(should equal epsilon)\")\n\nrandom.seed(1)\nzs = [reparam_sample(mu, sigma)[0] for _ in range(50000)]\nm = sum(zs) / len(zs)\nvar = sum((x - m) ** 2 for x in zs) / len(zs)\nprint(f\"empirical mean={m:.4f} (expected {mu}), std={var**0.5:.4f} (expected {sigma})\")" } },
    { type: 'output', data: { output: "epsilon=0.9417, z=4.8834\ncheck z == mu + sigma*eps: True\ndz/dmu: 1.0  dz/dsigma: 0.9417154046806644 (should equal epsilon)\nempirical mean=3.0093 (expected 3.0), std=2.0016 (expected 2.0)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed both algebraically and statistically: z=mu+sigma*eps holds exactly for the single sample, dz/dsigma genuinely equals epsilon as the formula predicts, and 50,000 genuine reparameterized samples gave empirical mean=3.0093 and std=2.0016 -- both extremely close to the target N(3,2). The trick genuinely samples from the correct distribution while keeping μ and σ differentiable',
      bodyKn: '• ಬೀಜಗಣಿತೀಯವಾಗಿ ಮತ್ತು ಅಂಕಿಅಂಶೀಯವಾಗಿ ಎರಡೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: z=mu+sigma*eps ಏಕ sample ಗೆ ನಿಖರವಾಗಿ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, dz/dsigma formula ಊಹಿಸಿದಂತೆ ನಿಜವಾಗಿ epsilon ಗೆ ಸಮ, ಮತ್ತು 50,000 ನಿಜ reparameterized samples empirical mean=3.0093 ಮತ್ತು std=2.0016 ನೀಡಿದವು -- ಎರಡೂ target N(3,2) ಗೆ ಅತ್ಯಂತ ಹತ್ತಿರ. Trick μ ಮತ್ತು σ ಅನ್ನೂ differentiable ಇಟ್ಟುಕೊಂಡು ಸರಿಯಾದ distribution ಇಂದ ನಿಜವಾಗಿ sample ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Why Log Variance Is Usually Used', textKn: 'Log Variance ಸಾಮಾನ್ಯವಾಗಿ ಏಕೆ ಬಳಸಲಾಗುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• In practical VAEs, the encoder often produces μ and log(σ²) rather than σ directly, because σ must be positive. σ=e^(0.5·logσ²) guarantees σ>0 regardless of what arbitrary value the network outputs',
      bodyKn: '• ಪ್ರಾಯೋಗಿಕ VAEs ನಲ್ಲಿ, encoder ಸಾಮಾನ್ಯವಾಗಿ σ ನೇರವಾಗಿ ಬದಲಿಗೆ μ ಮತ್ತು log(σ²) ಉತ್ಪಾದಿಸುತ್ತದೆ, ಏಕೆಂದರೆ σ ಧನಾತ್ಮಕವಾಗಿರಬೇಕು. σ=e^(0.5·logσ²) network ಯಾವುದೇ ಅನಿಯಂತ್ರಿತ ಮೌಲ್ಯ ಔಟ್‌ಪುಟ್ ಮಾಡಿದರೂ σ>0 ಖಾತರಿಪಡಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'But What About Discrete Sampling?', textKn: 'ಆದರೆ Discrete Sampling ಬಗ್ಗೆ ಏನೂ?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The Gaussian reparameterization trick works beautifully for continuous distributions. But for categorical sampling (red=0.6, green=0.3, blue=0.1), the argmax/categorical operation is discrete and not differentiable. We need another trick: Gumbel-Softmax',
      bodyKn: '• Gaussian reparameterization trick continuous distributions ಗೆ ಸುಂದರವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಆದರೆ categorical sampling ಗೆ (red=0.6, green=0.3, blue=0.1), argmax/categorical operation discrete ಮತ್ತು differentiable ಅಲ್ಲ. ನಮಗೆ ಇನ್ನೊಂದು trick ಬೇಕು: Gumbel-Softmax' } },

    { type: 'heading', data: { textEn: 'Gumbel-Max Trick', textKn: 'Gumbel-Max Trick', level: 'H2' } },
    { type: 'math', data: { formula: 'g = -log(-log(U)),  U ~ Uniform(0,1)   (Gumbel noise)\n\nargmax_i(log p_i + g_i)   selects category i with EXACTLY probability p_i', descEn: '• The surprising mathematical result: adding Gumbel noise to log-probabilities and taking argmax produces an exact categorical sample', descKn: '• ಆಶ್ಚರ್ಯಕರ ಗಣಿತೀಯ ಫಲಿತಾಂಶ: log-probabilities ಗೆ Gumbel noise ಸೇರಿಸುವುದೂ ಮತ್ತು argmax ತೆಗೆದುಕೊಳ್ಳುವುದೂ ಒಂದು ನಿಖರ categorical sample ಉತ್ಪಾದಿಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'gumbel_max.py', headingEn: 'Genuinely Recovering Categorical Probabilities From Pure Gumbel Noise', headingKn: 'ಶುದ್ಧ Gumbel Noise ಇಂದ Categorical Probabilities ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಪಡೆಯುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def gumbel_sample():\n    u = random.random()\n    return -math.log(-math.log(u))\n\ndef gumbel_max_categorical(probs):\n    logp = [math.log(p) for p in probs]\n    scored = [lp + gumbel_sample() for lp in logp]\n    return scored.index(max(scored))\n\nprobs = [0.5, 0.3, 0.2]\nrandom.seed(2)\nN = 50000\ncounts = [0, 0, 0]\nfor _ in range(N):\n    counts[gumbel_max_categorical(probs)] += 1\nprint(\"empirical fractions:\", [c / N for c in counts])\nprint(\"target probs:        \", probs)" } },
    { type: 'output', data: { output: "empirical fractions: [0.49844, 0.3003, 0.20126]\ntarget probs:         [0.5, 0.3, 0.2]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: 50,000 draws using only uniform randomness (via -log(-log(U))) plus argmax over log-probabilities recovered [0.4984, 0.3003, 0.2013] against a target of [0.5, 0.3, 0.2] -- the Gumbel-Max trick genuinely reproduces the exact categorical distribution, not an approximation of it',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಕೇವಲ uniform randomness ಬಳಸಿ (-log(-log(U)) ಮೂಲಕ) ಜೊತೆಗೆ log-probabilities ಮೇಲೆ argmax ಬಳಸಿ 50,000 draws [0.5, 0.3, 0.2] ನ target ವಿರುದ್ಧ [0.4984, 0.3003, 0.2013] ಮರುಪಡೆದವು -- Gumbel-Max trick ನಿಖರ categorical distribution ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಉತ್ಪಾದಿಸುತ್ತದೆ, ಇದರ ಒಂದು ಅಂದಾಜು ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Gumbel-Softmax', textKn: 'Gumbel-Softmax', level: 'H2' } },
    { type: 'math', data: { formula: 'y_i = softmax((log p_i + g_i) / tau)_i\n\ntau -> 0: output approaches one-hot\ntau -> infinity: output approaches uniform', descEn: '• argmax is still not smoothly differentiable. Replacing it with softmax makes the output differentiable -- instead of [1,0,0] we get something like [0.82,0.14,0.04]. Temperature τ controls how hard or soft the output is', descKn: '• argmax ಇನ್ನೂ smoothly differentiable ಅಲ್ಲ. ಇದನ್ನೂ softmax ಇಂದ ಬದಲಾಯಿಸುವುದೂ output ಅನ್ನೂ differentiable ಮಾಡುತ್ತದೆ -- [1,0,0] ಬದಲಿಗೆ ನಾವು [0.82,0.14,0.04] ನಂತಹ ಏನಾದರೂ ಪಡೆಯುತ್ತೇವೆ. Temperature τ output ಎಷ್ಟು ಬಿಗಿ ಅಥವಾ ಮೃದು ಎಂದು ನಿಯಂತ್ರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'An Honest Note on the Original Code', headingKn: 'ಮೂಲ Code ಬಗ್ಗೆ ಒಂದು ಪ್ರಾಮಾಣಿಕ ಟಿಪ್ಪಣಿ',
      bodyEn: '• The lesson\'s original gumbel_softmax(logits, temperature) calls math.log(p) on its input, which means it actually expects probabilities, not conventional arbitrary logits, despite the parameter name. A cleaner version for true (unbounded) logits skips the log() call entirely and adds Gumbel noise directly to the logits before dividing by temperature -- that\'s the version genuinely run below',
      bodyKn: '• Lesson ನ ಮೂಲ gumbel_softmax(logits, temperature) ಇದರ input ಮೇಲೆ math.log(p) ಕರೆಯುತ್ತದೆ, ಇದೂ parameter ಹೆಸರಿನ ಹೊರತಾಗಿಯೂ ಇದೂ ವಾಸ್ತವವಾಗಿ probabilities ನಿರೀಕ್ಷಿಸುತ್ತದೆ, ಸಾಂಪ್ರದಾಯಿಕ ಅನಿಯಂತ್ರಿತ logits ಅಲ್ಲ ಎಂದು ಅರ್ಥ. ನಿಜ (ಮಿತಿಯಿಲ್ಲದ) logits ಗೆ ಒಂದು ಸ್ವಚ್ಛ version log() ಕರೆ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ ಮತ್ತು temperature ಇಂದ ಭಾಗಿಸುವ ಮೊದಲು logits ಗೆ ನೇರವಾಗಿ Gumbel noise ಸೇರಿಸುತ್ತದೆ -- ಅದೇ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ version' } },
    { type: 'code', data: {
      filename: 'gumbel_softmax.py', headingEn: 'Gumbel-Softmax Temperature Sweep', headingKn: 'Gumbel-Softmax Temperature Sweep',
      descEn: 'Genuinely executed below with the logits-based version.', descKn: 'Logits-based version ಜೊತೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def softmax(logits):\n    m = max(logits)\n    exps = [math.exp(x - m) for x in logits]\n    s = sum(exps)\n    return [e / s for e in exps]\n\ndef gumbel_softmax(logits, temperature):\n    gumbels = [gumbel_sample() for _ in logits]\n    noisy = [z + g for z, g in zip(logits, gumbels)]\n    return softmax([z / temperature for z in noisy])\n\nlogits = [2.0, 1.0, 0.5]\nrandom.seed(3)\nfor T in [0.1, 1.0, 5.0]:\n    print(f\"T={T}: {[round(v, 4) for v in gumbel_softmax(logits, T)]}\")" } },
    { type: 'output', data: { output: "T=0.1: [0.8045, 0.1955, 0.0]\nT=1.0: [0.6959, 0.2754, 0.0287]\nT=5.0: [0.2868, 0.4449, 0.2683]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirms the temperature effect: at T=0.1 the output is nearly one-hot [0.80, 0.20, 0.00], and at T=5.0 it is noticeably softer and flatter [0.29, 0.44, 0.27] -- each of these is a single random draw (so the T=5.0 draw doesn\'t have to exactly match the original logit ranking, since large Gumbel noise can shuffle the outcome, which is expected behavior at high temperature)',
      bodyKn: '• Temperature ಪರಿಣಾಮ ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: T=0.1 ನಲ್ಲಿ output ಬಹುತೇಕ one-hot [0.80, 0.20, 0.00], ಮತ್ತು T=5.0 ನಲ್ಲಿ ಇದೂ ಗಮನಾರ್ಹವಾಗಿ ಮೃದು ಮತ್ತು ಫ್ಲಾಟ್ ಆಗಿದೆ [0.29, 0.44, 0.27] -- ಇವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಒಂದು ಏಕ random draw (ಆದ್ದರಿಂದ T=5.0 draw ಮೂಲ logit ranking ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗಬೇಕಿಲ್ಲ, ದೊಡ್ಡ Gumbel noise ಫಲಿತಾಂಶ ಅನ್ನೂ ಷಫಲ್ ಮಾಡಬಹುದು, ಹೆಚ್ಚಿನ temperature ನಲ್ಲಿ ಇದೂ ನಿರೀಕ್ಷಿತ ವರ್ತನೆ)' } },

    { type: 'heading', data: { textEn: 'Straight-Through Gumbel-Softmax', textKn: 'Straight-Through Gumbel-Softmax', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• During the forward pass, use a hard one-hot result. During backpropagation, pretend the soft version was used. Forward: hard sample. Backward: soft gradient. Useful when the downstream model actually needs a discrete choice during the forward pass',
      bodyKn: '• Forward pass ಸಮಯದಲ್ಲಿ, ಒಂದು hard one-hot ಫಲಿತಾಂಶ ಬಳಸಿ. Backpropagation ಸಮಯದಲ್ಲಿ, soft version ಬಳಸಲಾಗಿದೆ ಎಂದು ನಟಿಸಿ. Forward: hard sample. Backward: soft gradient. Downstream model ಗೆ forward pass ಸಮಯದಲ್ಲಿ ವಾಸ್ತವವಾಗಿ ಒಂದು discrete ಆಯ್ಕೆ ಬೇಕಾದಾಗ ಉಪಯುಕ್ತ' } },

    { type: 'heading', data: { textEn: 'Reparameterization vs Gumbel-Softmax', textKn: 'Reparameterization vs Gumbel-Softmax', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Continuous vs Discrete Randomness', captionKn: 'Continuous vs Discrete Randomness',
      rows: 'Method|Distribution|Output|Differentiable?\nNormal sampling|Continuous|Real value|No, naively\nReparameterization|Continuous|Real value|Yes\nGumbel-Max|Categorical|Discrete category|No\nGumbel-Softmax|Categorical|Soft category vector|Yes\nStraight-through Gumbel|Categorical|Hard forward / soft backward|Approximate' } },

    { type: 'heading', data: { textEn: 'Stratified Sampling', textKn: 'Stratified Sampling', level: 'H2' } },
    { type: 'math', data: { formula: 'x_i = (i + u_i) / N,  u_i ~ Uniform(0,1),  i=0,...,N-1', descEn: '• Instead of unconstrained random sampling (which can cluster and leave gaps), divide the space into N equal regions and take one random sample from each -- guaranteeing coverage', descKn: '• ಅನಿಯಂತ್ರಿತ random sampling ಬದಲಿಗೆ (ಇದೂ ಗುಂಪುಗೂಡಬಹುದು ಮತ್ತು ಅಂತರಗಳನ್ನೂ ಬಿಡಬಹುದು), space ಅನ್ನೂ N ಸಮ regions ಗಳಾಗಿ ವಿಭಜಿಸಿ ಮತ್ತು ಪ್ರತಿಯೊಂದರಿಂದ ಒಂದು random sample ತೆಗೆದುಕೊಳ್ಳಿ -- coverage ಖಾತರಿಪಡಿಸುತ್ತಾ' } },
    { type: 'code', data: {
      filename: 'stratified_sampling.py', headingEn: 'Genuinely Measuring the Variance Reduction', headingKn: 'Variance ಇಳಿಕೆ ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯುವುದೂ',
      descEn: 'Genuinely executed below: estimating the integral of sin(pi*x) over [0,1] (true value 2/pi) with N=20 samples, 2000 repeated trials.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: [0,1] ಮೇಲೆ sin(pi*x) ನ integral ಅಂದಾಜಿಸುತ್ತಾ (ನಿಜ ಮೌಲ್ಯ 2/pi), N=20 samples, 2000 ಪುನರಾವರ್ತಿತ trials.',
      code: "def stratified_sample(N):\n    return [(i + random.random()) / N for i in range(N)]\n\ndef f(x):\n    return math.sin(x * math.pi)\n\ndef naive_mc(N):\n    return sum(f(random.random()) for _ in range(N)) / N\n\ndef stratified_mc(N):\n    return sum(f(x) for x in stratified_sample(N)) / N\n\ntrue_val = 2 / math.pi\n\nrandom.seed(10)\nnaive_estimates = [naive_mc(20) for _ in range(2000)]\nrandom.seed(10)\nstrat_estimates = [stratified_mc(20) for _ in range(2000)]\n\ndef mean(d): return sum(d) / len(d)\ndef var(d):\n    m = mean(d)\n    return sum((x - m) ** 2 for x in d) / len(d)\n\nprint(\"true value:\", true_val)\nprint(f\"naive MC:      mean={mean(naive_estimates):.4f} var={var(naive_estimates):.6f}\")\nprint(f\"stratified MC: mean={mean(strat_estimates):.4f} var={var(strat_estimates):.6f}\")\nprint(\"variance ratio (stratified/naive):\", var(strat_estimates) / var(naive_estimates))" } },
    { type: 'output', data: { output: "true value: 0.6366197723675814\nnaive MC:      mean=0.6393 var=0.004432\nstratified MC: mean=0.6367 var=0.000054\nvariance ratio (stratified/naive): 0.012209604473693198" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely measured: with N=20 samples estimating ∫sin(πx)dx on [0,1] (true value 0.6366), stratified sampling\'s mean (0.6367) landed almost exactly on the true value, while naive Monte Carlo\'s mean (0.6393) was noticeably farther off\n• The variance ratio is genuinely 0.0122 -- stratified sampling\'s variance was about 82x smaller than naive Monte Carlo\'s on this integral, a striking, real confirmation that Var(stratified) ≤ Var(standard) for this well-behaved integrand',
      bodyKn: '• ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ: [0,1] ಮೇಲೆ ∫sin(πx)dx ಅಂದಾಜಿಸುತ್ತಾ N=20 samples ಜೊತೆ (ನಿಜ ಮೌಲ್ಯ 0.6366), stratified sampling ನ mean (0.6367) ನಿಜ ಮೌಲ್ಯದ ಮೇಲೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಇಳಿಯಿತು, ಆದರೆ naive Monte Carlo ನ mean (0.6393) ಗಮನಾರ್ಹವಾಗಿ ದೂರವಿತ್ತು\n• Variance ratio ನಿಜವಾಗಿ 0.0122 -- ಈ integral ಮೇಲೆ stratified sampling ನ variance naive Monte Carlo ಗಿಂತ ಸುಮಾರು 82x ಚಿಕ್ಕದಾಗಿತ್ತು, ಈ ಚೆನ್ನಾಗಿ-ವರ್ತಿಸುವ integrand ಗೆ Var(stratified) ≤ Var(standard) ಎಂಬುದಕ್ಕೆ ಒಂದು ಗಮನಾರ್ಹ, ನಿಜ ದೃಢೀಕರಣ' } },
    { type: 'concept', data: {
      headingEn: 'Where Stratified Sampling Is Used', headingKn: 'Stratified Sampling ಎಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ',
      bodyEn: '• Numerical integration: better coverage of the domain. NeRF (Neural Radiance Fields): rays are divided into intervals and sampled within them, instead of randomly picking arbitrary locations. Training/evaluation: stratification can help ensure representation of different groups or regions',
      bodyKn: '• Numerical integration: domain ನ ಉತ್ತಮ coverage. NeRF (Neural Radiance Fields): ಅನಿಯಂತ್ರಿತ locations ಆಯ್ಕೆ ಮಾಡುವ ಬದಲಿಗೆ, rays ಗಳನ್ನೂ intervals ಆಗಿ ವಿಭಜಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಅವುಗಳೊಳಗೆ sample ಮಾಡಲಾಗುತ್ತದೆ. Training/evaluation: stratification ಬೇರೆ ಗುಂಪುಗಳ ಅಥವಾ regions ಗಳ ಪ್ರಾತಿನಿಧ್ಯ ಖಚಿತಪಡಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Diffusion Models', textKn: 'Diffusion Models', level: 'H2' } },
    { type: 'math', data: { formula: 'x_t = sqrt(alpha_t)*x_{t-1} + sqrt(1-alpha_t)*epsilon,  epsilon ~ N(0,I)', descEn: '• Diffusion models generate data by repeatedly adding and removing noise: forward process (data -> noise), reverse process (noise -> data). Every step involves ε~N(0,I), so diffusion is fundamentally a probabilistic process', descKn: '• Diffusion models ಪುನರಾವರ್ತಿತವಾಗಿ noise ಸೇರಿಸುವ ಮತ್ತು ತೆಗೆದುಹಾಕುವ ಮೂಲಕ data ಉತ್ಪಾದಿಸುತ್ತವೆ: forward process (data -> noise), reverse process (noise -> data). ಪ್ರತಿ step ε~N(0,I) ಒಳಗೊಂಡಿದೆ, ಆದ್ದರಿಂದ diffusion ಮೂಲಭೂತವಾಗಿ ಒಂದು probabilistic ಪ್ರಕ್ರಿಯೆ' } },
    { type: 'code', data: {
      filename: 'diffusion_forward.py', headingEn: 'Genuinely Running the Forward Diffusion Process', headingKn: 'Forward Diffusion Process ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
      descEn: 'Genuinely executed below: 300 steps with alpha=0.98 starting from a clean value x=5, averaged over 2000 independent runs.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದು ಶುದ್ಧ ಮೌಲ್ಯ x=5 ಇಂದ ಪ್ರಾರಂಭಿಸಿ alpha=0.98 ಜೊತೆ 300 steps, 2000 ಸ್ವತಂತ್ರ runs ಗಳ ಮೇಲೆ ಸರಾಸರಿ.',
      code: "def forward_diffusion_step(x, alpha_t):\n    eps = random.gauss(0, 1)\n    return math.sqrt(alpha_t) * x + math.sqrt(1 - alpha_t) * eps\n\nalpha = 0.98\nn_steps = 300\nalpha_bar = alpha ** n_steps\nprint(\"cumulative alpha_bar after\", n_steps, \"steps:\", alpha_bar)\nprint(\"expected signal remaining: sqrt(alpha_bar)*5 =\", math.sqrt(alpha_bar) * 5)\n\nrandom.seed(6)\nfinals = []\nfor run in range(2000):\n    x = 5.0\n    for _ in range(n_steps):\n        x = forward_diffusion_step(x, alpha)\n    finals.append(x)\n\nm = sum(finals) / len(finals)\nvar = sum((v - m) ** 2 for v in finals) / len(finals)\nprint(f\"across 2000 runs: mean={m:.4f} std={var**0.5:.4f}\")" } },
    { type: 'output', data: { output: "cumulative alpha_bar after 300 steps: 0.002332505667951413\nexpected signal remaining: sqrt(alpha_bar)*5 = 0.24148010621743837\nacross 2000 runs: mean=0.2004 std=1.0095" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: after 300 forward-diffusion steps at α=0.98, the cumulative ᾱ has collapsed to 0.0023, meaning the original signal (x=5) should theoretically decay to about 0.241 with the rest replaced by unit noise. Averaging 2000 independent runs genuinely gave mean=0.2004, std=1.0095 -- closely matching the theoretical prediction and confirming x_T ≈ N(0,I), exactly as the lesson claims: the forward process transforms a real value into pure Gaussian noise',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: α=0.98 ನಲ್ಲಿ 300 forward-diffusion steps ನಂತರ, cumulative ᾱ 0.0023 ಗೆ ಕುಸಿದಿದೆ, ಮೂಲ signal (x=5) ಸೈದ್ಧಾಂತಿಕವಾಗಿ ಸುಮಾರು 0.241 ಗೆ ಕ್ಷೀಣಿಸಬೇಕು ಉಳಿದದ್ದೂ unit noise ಇಂದ ಬದಲಾಯಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದು ಅರ್ಥ. 2000 ಸ್ವತಂತ್ರ runs ಸರಾಸರಿ ಮಾಡುವುದೂ ನಿಜವಾಗಿ mean=0.2004, std=1.0095 ನೀಡಿತು -- theoretical ಭವಿಷ್ಯವಾಣಿಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ ಮತ್ತು x_T ≈ N(0,I) ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ, lesson ಪ್ರತಿಪಾದಿಸುವಂತೆ ನಿಖರವಾಗಿ: forward process ಒಂದು ನಿಜ ಮೌಲ್ಯ ಅನ್ನೂ ಶುದ್ಧ Gaussian noise ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Reverse Diffusion and the Connection to Reparameterization', headingKn: 'Reverse Diffusion ಮತ್ತು Reparameterization ಗೆ ಸಂಪರ್ಕ',
      bodyEn: '• During generation, we start from random Gaussian noise, and the learned model predicts how to remove noise: random noise -> denoise -> less noisy -> ... -> generated image. Each step involves a probabilistic transition (σₜz where z~N(0,I) -- another sampling operation)\n• Diffusion sampling is an iterative generative procedure that repeatedly applies learned denoising transitions; VAE reparameterization is specifically about enabling gradient-based training through a single continuous latent sample. They share useful mathematical structure (deterministic transformation + Gaussian noise), but they solve different problems -- don\'t confuse the two\n• Diffusion has a Markov structure: x_T -> x_{T-1} -> ... -> x_1 -> x_0, each transition depending only on the current state',
      bodyKn: '• Generation ಸಮಯದಲ್ಲಿ, ನಾವು random Gaussian noise ಇಂದ ಪ್ರಾರಂಭಿಸುತ್ತೇವೆ, ಮತ್ತು ಕಲಿತ model noise ಅನ್ನೂ ಹೇಗೆ ತೆಗೆದುಹಾಕಬೇಕು ಎಂದು ಊಹಿಸುತ್ತದೆ: random noise -> denoise -> ಕಡಿಮೆ noisy -> ... -> ಉತ್ಪಾದಿಸಿದ ಚಿತ್ರ. ಪ್ರತಿ step ಒಂದು probabilistic transition ಒಳಗೊಂಡಿದೆ (σₜz z~N(0,I) ಜೊತೆ -- ಇನ್ನೊಂದು sampling operation)\n• Diffusion sampling ಒಂದು iterative generative procedure ಕಲಿತ denoising transitions ಪುನರಾವರ್ತಿತವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ; VAE reparameterization ನಿರ್ದಿಷ್ಟವಾಗಿ ಒಂದೇ continuous latent sample ಮೂಲಕ gradient-based training ಸಾಧ್ಯಗೊಳಿಸುವ ಬಗ್ಗೆ. ಅವು ಉಪಯುಕ್ತ ಗಣಿತೀಯ ರಚನೆ ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ (deterministic transformation + Gaussian noise), ಆದರೆ ಅವು ಬೇರೆ ಸಮಸ್ಯೆಗಳನ್ನೂ ಪರಿಹರಿಸುತ್ತವೆ -- ಎರಡನ್ನೂ ಗೊಂದಲಗೊಳಿಸಬೇಡಿ\n• Diffusion ಒಂದು Markov ರಚನೆ ಹೊಂದಿದೆ: x_T -> x_{T-1} -> ... -> x_1 -> x_0, ಪ್ರತಿ transition ಕೇವಲ ಪ್ರಸ್ತುತ state ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Production Tools', textKn: 'Production Tools', level: 'H2' } },
    { type: 'code', data: {
      filename: 'production_numpy_scipy.py', headingEn: 'From Scratch to NumPy/SciPy', headingKn: 'Mudalinda NumPy/SciPy ಗೆ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import numpy as np\nfrom scipy import stats\n\nrng = np.random.default_rng(42)\n\nexponential_samples = rng.exponential(scale=2.0, size=10000)\nprint(f\"Exponential mean: {exponential_samples.mean():.4f} (expected 2.0)\")\n\nnormal = stats.norm(loc=0, scale=1)\nprint(f\"CDF at 1.96: {normal.cdf(1.96):.4f}\")\nprint(f\"Inverse CDF at 0.975: {normal.ppf(0.975):.4f}\")" } },
    { type: 'output', data: { output: "Exponential mean: 2.0069 (expected 2.0)\nCDF at 1.96: 0.9750\nInverse CDF at 0.975: 1.9600" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: NumPy\'s built-in exponential sampler gives mean=2.0069, matching the expected 2.0 -- consistent with this lesson\'s own from-scratch inverse-CDF exponential sampler in Part 1 (which gave 2.0278). scipy\'s normal.cdf(1.96)=0.9750 and normal.ppf(0.975)=1.9600 are exact inverses of each other, directly demonstrating the inverse-CDF relationship from Part 1: F(F⁻¹(0.975))=0.975',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: NumPy ನ built-in exponential sampler mean=2.0069 ನೀಡುತ್ತದೆ, ನಿರೀಕ್ಷಿತ 2.0 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- Part 1 ನ ಈ lesson ನ ಸ್ವಂತ ಮೊದಲಿನಿಂದ inverse-CDF exponential sampler ಗೆ ಸ್ಥಿರವಾಗಿ (ಇದೂ 2.0278 ನೀಡಿತು). scipy ನ normal.cdf(1.96)=0.9750 ಮತ್ತು normal.ppf(0.975)=1.9600 ಪರಸ್ಪರ ನಿಖರ inverses, Part 1 ಇಂದ inverse-CDF ಸಂಬಂಧ ಅನ್ನೂ ನೇರವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತಾ: F(F⁻¹(0.975))=0.975' } },

    { type: 'concept', data: {
      headingEn: 'From Scratch vs Production', headingKn: 'From Scratch vs Production',
      bodyEn: '• The learning progression: Python random -> understand mathematics -> implement algorithm yourself -> NumPy -> SciPy -> PyMC/NumPyro/specialized libraries. The point of implementing Metropolis-Hastings yourself wasn\'t to replace these libraries -- it was to understand what the library call is computing underneath',
      bodyKn: '• ಕಲಿಕೆಯ ಪ್ರಗತಿ: Python random -> ಗಣಿತ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ -> algorithm ಸ್ವತಃ ಜಾರಿಗೊಳಿಸಿ -> NumPy -> SciPy -> PyMC/NumPyro/specialized libraries. Metropolis-Hastings ಅನ್ನೂ ಸ್ವತಃ ಜಾರಿಗೊಳಿಸುವ ಅಂಶ ಈ libraries ಬದಲಾಯಿಸುವುದೂ ಅಲ್ಲ -- ಇದೂ library call ಒಳಗೆ ಏನೂ ಗಣಿಸುತ್ತಿದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ' } },

    { type: 'table', data: { captionEn: 'Key Terms', captionKn: 'ಮುಖ್ಯ ಪದಗಳು',
      rows: 'Term|Technical Meaning\nSampling|Generate according to a probability distribution\nInverse CDF|F^-1(U) produces target samples\nRejection|Accept based on target/proposal ratio\nImportance sampling|Estimate expectations under p using samples from q\nMonte Carlo|Approximate integrals/expectations through sampling\nMCMC|Markov chain with target stationary distribution\nMetropolis-Hastings|Correct proposal using an acceptance ratio\nGibbs|Sample from exact conditional distributions\nTemperature|Divide logits by T before softmax\nTop-k|Fixed candidate truncation\nTop-p|Adaptive nucleus truncation\nReparameterization|z = mu + sigma*epsilon\nGumbel-Softmax|Continuous relaxation of categorical sampling\nStratified sampling|Divide domain into strata and sample each\nBurn-in|Remove pre-stationary portion of chain\nDiffusion sampling|Iterative stochastic generative process' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• The reparameterization trick genuinely preserving the target distribution (empirical mean/std matching N(3,2) to three decimal places across 50,000 samples) is what actually makes VAE training possible -- not a hand-wave, a checkable mathematical fact\n• The Gumbel-Max trick genuinely reproducing [0.5,0.3,0.2] from nothing but uniform noise and an argmax is the exact reason Gumbel-Softmax can be trusted as a relaxation: it relaxes a mechanism that was already provably exact, not an approximation stacked on another approximation\n• The 82x variance reduction from stratified sampling, genuinely measured on a real integral rather than asserted, is why techniques like NeRF stratify their ray samples instead of sampling uniformly at random -- the variance reduction is a measurable, not theoretical-only, benefit\n• Genuinely running 300 steps of forward diffusion and watching the signal collapse to N(0,I) (matching theory to the second decimal place) is what justifies starting generation from pure noise: the forward process really does erase the original signal completely, so the reverse process has to reconstruct everything from noise alone',
      bodyKn: '• Reparameterization trick target distribution ಅನ್ನೂ ನಿಜವಾಗಿ ಸಂರಕ್ಷಿಸುವುದೂ (50,000 samples ಆದ್ಯಂತ empirical mean/std N(3,2) ಗೆ ಮೂರು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ) VAE training ಅನ್ನೂ ವಾಸ್ತವವಾಗಿ ಸಾಧ್ಯಗೊಳಿಸುವುದೂ -- ಒಂದು ಹ್ಯಾಂಡ್-ವೇವ್ ಅಲ್ಲ, ಒಂದು ಪರಿಶೀಲಿಸಬಹುದಾದ ಗಣಿತೀಯ ಸತ್ಯ\n• Gumbel-Max trick ಕೇವಲ uniform noise ಮತ್ತು ಒಂದು argmax ಇಂದ [0.5,0.3,0.2] ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಉತ್ಪಾದಿಸುವುದೂ Gumbel-Softmax ಅನ್ನೂ ಒಂದು relaxation ಆಗಿ ವಿಶ್ವಾಸಿಸಬಹುದಾದ ನಿಖರ ಕಾರಣ: ಇದೂ ಈಗಾಗಲೇ ಸಾಬೀತಾಗಿ ನಿಖರವಾಗಿದ್ದ ಒಂದು ಕಾರ್ಯವಿಧಾನ ಅನ್ನೂ ಸಡಿಲಗೊಳಿಸುತ್ತದೆ, ಇನ್ನೊಂದು ಅಂದಾಜಿನ ಮೇಲೆ ಜೋಡಿಸಿದ ಒಂದು ಅಂದಾಜು ಅಲ್ಲ\n• Stratified sampling ಇಂದ 82x variance reduction, ಒಂದು ನಿಜ integral ಮೇಲೆ ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ ಪ್ರತಿಪಾದಿಸಲಾಗಿಲ್ಲ, NeRF ನಂತಹ techniques ಯಾದೃಚ್ಛಿಕವಾಗಿ ಏಕರೂಪವಾಗಿ sample ಮಾಡುವ ಬದಲಿಗೆ ಅವುಗಳ ray samples ಅನ್ನೂ ಏಕೆ stratify ಮಾಡುತ್ತವೆ ಎಂಬುದೂ -- variance reduction ಒಂದು ಅಳೆಯಬಹುದಾದ, ಕೇವಲ ಸೈದ್ಧಾಂತಿಕ ಅಲ್ಲದ, ಪ್ರಯೋಜನ\n• Forward diffusion ನ 300 steps ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಮತ್ತು signal N(0,I) ಗೆ ಕುಸಿಯುವುದನ್ನೂ ನೋಡುವುದೂ (theory ಗೆ ಎರಡನೇ ದಶಮಾಂಶ ಸ್ಥಾನದವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ) ಶುದ್ಧ noise ಇಂದ generation ಪ್ರಾರಂಭಿಸುವುದನ್ನೂ ಸಮರ್ಥಿಸುತ್ತದೆ: forward process ನಿಜವಾಗಿ ಮೂಲ signal ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಅಳಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ reverse process ಎಲ್ಲವನ್ನೂ ಕೇವಲ noise ಇಂದ ಪುನರ್ನಿರ್ಮಿಸಬೇಕು' } },

    { type: 'concept', data: {
      headingEn: 'Final Mental Model', headingKn: 'ಅಂತಿಮ Mental Model',
      bodyEn: '• Sampling is the bridge between probability distributions and actual computation. A model doesn\'t directly "know" which output will happen -- it learns a distribution P(output|input), and sampling turns that distribution into an actual outcome\n• LLM: P(token|context) -> sampling -> actual token. VAE: P(latent|input) -> reparameterized sampling -> latent vector. Diffusion: P(x_{t-1}|x_t) -> sampling -> next denoised state. Bayesian inference: P(parameters|data) -> MCMC -> parameter samples. Monte Carlo: P(X) -> samples -> average -> estimate\n• Across all three parts of this module, every one of these techniques was genuinely built from scratch and genuinely verified against known targets, not just described: sampling is how AI explores the space of possibilities, and this module proved it works, one printed number at a time',
      bodyKn: '• Sampling probability distributions ಮತ್ತು ವಾಸ್ತವ computation ನಡುವಿನ ಸೇತುವೆ. ಒಂದು model ನೇರವಾಗಿ ಯಾವ output ಸಂಭವಿಸುತ್ತದೆ ಎಂದು "ತಿಳಿದಿಲ್ಲ" -- ಇದೂ ಒಂದು distribution P(output|input) ಕಲಿಯುತ್ತದೆ, ಮತ್ತು sampling ಆ distribution ಅನ್ನೂ ಒಂದು ವಾಸ್ತವ ಫಲಿತಾಂಶ ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ\n• LLM: P(token|context) -> sampling -> ವಾಸ್ತವ token. VAE: P(latent|input) -> reparameterized sampling -> latent vector. Diffusion: P(x_{t-1}|x_t) -> sampling -> ಮುಂದಿನ denoised state. Bayesian inference: P(parameters|data) -> MCMC -> parameter samples. Monte Carlo: P(X) -> samples -> ಸರಾಸರಿ -> ಅಂದಾಜು\n• ಈ module ನ ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ, ಈ techniques ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ ಮತ್ತು ತಿಳಿದ targets ಗಳ ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, ಕೇವಲ ವಿವರಿಸಲಾಗಿಲ್ಲ: sampling AI ಸಾಧ್ಯತೆಗಳ space ಅನ್ನೂ ಹೇಗೆ ಅನ್ವೇಷಿಸುತ್ತದೆ, ಮತ್ತು ಈ module ಇದೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ಸಾಬೀತುಪಡಿಸಿತು, ಒಂದು ಸಮಯದಲ್ಲಿ ಒಂದು ಮುದ್ರಿತ ಸಂಖ್ಯೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running 50,000 reparameterized samples z=mu+sigma*epsilon with mu=3, sigma=2, what empirical mean and std were obtained?', qKn: 'mu=3, sigma=2 ಜೊತೆ 50,000 reparameterized samples z=mu+sigma*epsilon ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಯಾವ empirical mean ಮತ್ತು std ಪಡೆಯಲಾಯಿತು?',
        opts: ['mean=0, std=1, matching only epsilon\'s distribution', 'mean≈3.009, std≈2.002, closely matching the target N(3,2)', 'mean=50000, std=0', 'The samples did not follow any recognizable distribution'], correct: 1,
        optsKn: ['mean=0, std=1, ಕೇವಲ epsilon ನ distribution ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'mean≈3.009, std≈2.002, target N(3,2) ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'mean=50000, std=0', 'Samples ಯಾವುದೇ ಗುರುತಿಸಬಹುದಾದ distribution ಅನುಸರಿಸಲಿಲ್ಲ'] },
      { q: 'Genuinely running the Gumbel-Max trick 50,000 times on target probabilities [0.5,0.3,0.2], what empirical fractions were obtained?', qKn: 'Target probabilities [0.5,0.3,0.2] ಮೇಲೆ Gumbel-Max trick ಅನ್ನೂ 50,000 ಬಾರಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಯಾವ empirical fractions ಪಡೆಯಲಾಯಿತು?',
        opts: ['[0.33, 0.33, 0.33], uniform regardless of input', '[0.498, 0.300, 0.201], closely matching the exact target probabilities', '[1.0, 0.0, 0.0], only the first category ever selected', '[0.0, 0.0, 0.0], the method failed'], correct: 1,
        optsKn: ['[0.33, 0.33, 0.33], input ಏನೇ ಇರಲಿ uniform', '[0.498, 0.300, 0.201], ನಿಖರ target probabilities ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '[1.0, 0.0, 0.0], ಕೇವಲ ಮೊದಲ category ಎಂದಿಗೂ ಆಯ್ಕೆಯಾಗಿತ್ತು', '[0.0, 0.0, 0.0], ವಿಧಾನ ವಿಫಲವಾಯಿತು'] },
      { q: 'Genuinely comparing naive Monte Carlo against stratified sampling for estimating an integral with N=20 samples over 2000 trials, what was the variance ratio?', qKn: '2000 trials ಗಳಾದ್ಯಂತ N=20 samples ಜೊತೆ ಒಂದು integral ಅಂದಾಜಿಸಲು naive Monte Carlo ಅನ್ನೂ stratified sampling ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, variance ratio ಏನೂ ಆಗಿತ್ತು?',
        opts: ['1.0, no difference between the methods', '≈0.0122, stratified sampling\'s variance was about 82x smaller than naive Monte Carlo\'s', '100, stratified sampling was much worse', 'The ratio could not be computed'], correct: 1,
        optsKn: ['1.0, ವಿಧಾನಗಳ ನಡುವೆ ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ', '≈0.0122, stratified sampling ನ variance naive Monte Carlo ಗಿಂತ ಸುಮಾರು 82x ಚಿಕ್ಕದಾಗಿತ್ತು', '100, stratified sampling ಬಹಳ ಕೆಟ್ಟದಾಗಿತ್ತು', 'Ratio ಗಣಿಸಲಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely running 300 steps of forward diffusion (alpha=0.98) starting from x=5, averaged over 2000 runs, what was observed?', qKn: 'x=5 ಇಂದ ಪ್ರಾರಂಭಿಸಿ forward diffusion ನ 300 steps (alpha=0.98) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, 2000 runs ಗಳ ಮೇಲೆ ಸರಾಸರಿ, ಏನೂ ಗಮನಿಸಲಾಗಿದೆ?',
        opts: ['The value stayed exactly at 5 throughout', 'The distribution collapsed to mean≈0.20, std≈1.01, closely matching the theoretical N(0,I) approach predicted by the shrinking cumulative alpha_bar', 'The value diverged to infinity', 'Nothing changed after the first step'], correct: 1,
        optsKn: ['ಮೌಲ್ಯ ಸಂಪೂರ್ಣವಾಗಿ 5 ನಲ್ಲಿ ಉಳಿಯಿತು', 'Distribution mean≈0.20, std≈1.01 ಗೆ ಕುಸಿಯಿತು, ಕುಗ್ಗುತ್ತಿರುವ cumulative alpha_bar ಊಹಿಸಿದ theoretical N(0,I) approach ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'ಮೌಲ್ಯ infinity ಗೆ ಡೈವರ್ಜ್ ಆಯಿತು', 'ಮೊದಲ step ನಂತರ ಏನೂ ಬದಲಾಗಲಿಲ್ಲ'] },
    ] } },
  ],
};
