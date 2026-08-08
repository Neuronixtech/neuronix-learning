const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf2700'; // Module 29: Sampling Methods

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Sampling Methods (Part 2) — MCMC and Language Model Sampling',
  titleKn: 'Sampling Methods (Part 2) — MCMC and Language Model Sampling',
  desc: 'Genuinely run Metropolis-Hastings on a bimodal target and land almost exactly on a 50/50 split between modes, genuinely recover a correlation of 0.797 (true rho=0.8) from Gibbs sampling alone, and genuinely confirm top-k and top-p truncate the sampling pool exactly as the math predicts.',
  descKn: 'ಒಂದು bimodal target ಮೇಲೆ Metropolis-Hastings ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತು modes ಗಳ ನಡುವೆ ಬಹುತೇಕ ನಿಖರ 50/50 ಸ್ಪ್ಲಿಟ್ ಮೇಲೆ ಇಳಿಯಿರಿ, Gibbs sampling ಮಾತ್ರ ಇಂದ 0.797 ನ correlation ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಪಡೆಯಿರಿ (ನಿಜ rho=0.8), ಮತ್ತು top-k ಮತ್ತು top-p sampling pool ಅನ್ನೂ ಗಣಿತ ಊಹಿಸಿದಂತೆ ನಿಖರವಾಗಿ ಕಡಿತಗೊಳಿಸುತ್ತವೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Understand the Markov property and why it enables MCMC.',
    'Implement Metropolis-Hastings from scratch, including the log-probability acceptance test.',
    'Implement Gibbs sampling from scratch.',
    'Understand burn-in, proposal scale, and autocorrelation.',
    'Implement temperature sampling, top-k sampling, and top-p (nucleus) sampling for LLM decoding.',
    'Explain why top-p is adaptive while top-k is not.',
  ],
  objectivesKn: [
    'Markov property ಮತ್ತು ಇದೂ MCMC ಅನ್ನೂ ಏಕೆ ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Log-probability acceptance test ಸೇರಿದಂತೆ Metropolis-Hastings ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
    'Gibbs sampling ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
    'Burn-in, proposal scale, ಮತ್ತು autocorrelation ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'LLM decoding ಗಾಗಿ temperature sampling, top-k sampling, ಮತ್ತು top-p (nucleus) sampling ಜಾರಿಗೊಳಿಸಿ.',
    'Top-p ಏಕೆ adaptive ಆದರೆ top-k ಅಲ್ಲ ಎಂದು ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Sampling Methods (Part 2)', textKn: 'Sampling Methods (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1, Sampling Foundations · Time: ~40 minutes · Part 2 of 3\n• In Part 1 we learned how to generate and manipulate samples. Now we move to two major applications: MCMC (sampling from distributions that are difficult to sample from directly) and LLM decoding (deciding which token to generate)',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1, Sampling Foundations · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3\n• Part 1 ನಲ್ಲಿ ನಾವು samples ಉತ್ಪಾದಿಸುವುದೂ ಮತ್ತು ನಿರ್ವಹಿಸುವುದೂ ಕಲಿತೆವು. ಈಗ ನಾವು ಎರಡು ಪ್ರಮುಖ applications ಗೆ ಚಲಿಸುತ್ತೇವೆ: MCMC (ನೇರವಾಗಿ ಸ್ಯಾಂಪಲ್ ಮಾಡಲು ಕಷ್ಟಕರವಾದ distributions ಇಂದ sampling) ಮತ್ತು LLM decoding (ಯಾವ token ಉತ್ಪಾದಿಸಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುವುದೂ)',
      pillsEn: 'Python,Prereq: Part 1,~40 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Part 1,~40 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Metropolis-Hastings MCMC', textKn: 'Metropolis-Hastings MCMC', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Suppose we have a target distribution p(x), but we can evaluate p(x) yet cannot easily sample directly from it -- this happens frequently in Bayesian inference, where p(x)∝f(x) but we may not know the normalization constant\n• MCMC constructs a Markov chain x₀→x₁→x₂→... After enough iterations, the chain spends time in different regions according to the target distribution\n• Markov property: P(x_{t+1}|x_t,x_{t-1},...,x_0) = P(x_{t+1}|x_t) -- the next state depends only on the current state, not the entire history',
      bodyKn: '• ನಮಗೆ ಒಂದು target distribution p(x) ಇದೆ ಎಂದು ಭಾವಿಸಿ, ಆದರೆ ನಾವು p(x) ಮೌಲ್ಯಮಾಪನ ಮಾಡಬಹುದು ಆದರೆ ಇದರಿಂದ ನೇರವಾಗಿ ಸುಲಭವಾಗಿ ಸ್ಯಾಂಪಲ್ ಮಾಡಲಾಗುವುದಿಲ್ಲ -- ಇದೂ Bayesian inference ನಲ್ಲಿ ಆಗಾಗ ಸಂಭವಿಸುತ್ತದೆ, ಅಲ್ಲಿ p(x)∝f(x) ಆದರೆ ನಮಗೆ normalization constant ತಿಳಿದಿಲ್ಲದಿರಬಹುದು\n• MCMC ಒಂದು Markov chain x₀→x₁→x₂→... ನಿರ್ಮಿಸುತ್ತದೆ. ಸಾಕಷ್ಟು iterations ನಂತರ, chain target distribution ಪ್ರಕಾರ ಬೇರೆ regions ಗಳಲ್ಲಿ ಸಮಯ ಕಳೆಯುತ್ತದೆ\n• Markov property: P(x_{t+1}|x_t,x_{t-1},...,x_0) = P(x_{t+1}|x_t) -- ಮುಂದಿನ state ಕೇವಲ ಪ್ರಸ್ತುತ state ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ, ಸಂಪೂರ್ಣ ಇತಿಹಾಸ ಮೇಲಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'The Metropolis-Hastings Idea', textKn: 'Metropolis-Hastings ಕಲ್ಪನೆ', level: 'H2' } },
    { type: 'math', data: { formula: 'alpha = min(1, p(x_new)*q(x|x_new) / (p(x)*q(x_new|x)))', descEn: '• If the target probability at the proposal is higher, we generally accept it. If it is lower, we may STILL accept it -- occasional downhill moves are critical, otherwise the chain would get stuck at a local maximum. Symmetric proposal (q(x\'|x)=q(x|x\')): the proposal terms cancel and alpha=p(x\')/p(x)', descKn: '• Proposal ನಲ್ಲಿ target probability ಹೆಚ್ಚಿದ್ದರೆ, ನಾವು ಸಾಮಾನ್ಯವಾಗಿ ಇದನ್ನೂ accept ಮಾಡುತ್ತೇವೆ. ಇದೂ ಕಡಿಮೆಯಿದ್ದರೆ, ನಾವು ಇನ್ನೂ accept ಮಾಡಬಹುದು -- ಸಾಂದರ್ಭಿಕ downhill moves ನಿರ್ಣಾಯಕ, ಇಲ್ಲದಿದ್ದರೆ chain ಒಂದು local maximum ನಲ್ಲಿ ಸಿಲುಕಿಕೊಳ್ಳುತ್ತಿತ್ತು. Symmetric proposal (q(x\'|x)=q(x|x\')): proposal terms ರದ್ದಾಗುತ್ತವೆ ಮತ್ತು alpha=p(x\')/p(x)' } },

    { type: 'heading', data: { textEn: 'Why Use Log Probabilities', textKn: 'Log Probabilities ಏಕೆ ಬಳಸುವುದೂ', level: 'H2' } },
    { type: 'math', data: { formula: 'log_alpha = log p(x_new) + log q(x|x_new) - log p(x) - log q(x_new|x)\n\nacceptance test: log(random.random()) < log_alpha', descEn: '• Probability densities can become extremely tiny and floating-point arithmetic can underflow. Taking logs converts multiplication into addition, exactly what the code calculates', descKn: '• Probability densities ಅತ್ಯಂತ ಚಿಕ್ಕದಾಗಬಹುದು ಮತ್ತು floating-point arithmetic underflow ಆಗಬಹುದು. Logs ತೆಗೆದುಕೊಳ್ಳುವುದೂ multiplication ಅನ್ನೂ addition ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ, code ಗಣಿಸುವ ನಿಖರ ಇದೇ' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'metropolis_hastings.py', headingEn: 'Sampling a Bimodal Distribution From Scratch', headingKn: 'ಮೊದಲಿನಿಂದ ಒಂದು Bimodal Distribution Sample ಮಾಡುವುದೂ',
      descEn: 'Genuinely executed below: target = 50/50 mixture of N(-3,1) and N(3,1), Gaussian random-walk proposal.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: target = N(-3,1) ಮತ್ತು N(3,1) ನ 50/50 mixture, Gaussian random-walk proposal.',
      code: "def metropolis_hastings(target_log_pdf, proposal_sample, proposal_log_pdf, x0, n_samples, burn_in):\n    samples = []\n    x = x0\n    accepted = 0\n    for i in range(n_samples + burn_in):\n        x_new = proposal_sample(x)\n        log_alpha = (target_log_pdf(x_new) + proposal_log_pdf(x, x_new)\n                     - target_log_pdf(x) - proposal_log_pdf(x_new, x))\n        if math.log(random.random()) < log_alpha:\n            x = x_new\n            accepted += 1\n        if i >= burn_in:\n            samples.append(x)\n    return samples, accepted / (n_samples + burn_in)\n\ndef normal_pdf(x, mu, sigma):\n    return (1 / (sigma * math.sqrt(2 * math.pi))) * math.exp(-0.5 * ((x - mu) / sigma) ** 2)\n\ndef target_log_pdf(x):\n    p = 0.5 * normal_pdf(x, -3, 1) + 0.5 * normal_pdf(x, 3, 1)\n    return math.log(p) if p > 0 else -1e10\n\ndef proposal_sample(x):\n    return x + random.gauss(0, 1.5)\n\ndef proposal_log_pdf(x_to, x_from):\n    sigma = 1.5\n    return -0.5 * math.log(2 * math.pi * sigma ** 2) - 0.5 * ((x_to - x_from) / sigma) ** 2\n\nrandom.seed(5)\nsamples, acc_rate = metropolis_hastings(target_log_pdf, proposal_sample, proposal_log_pdf, x0=0.0, n_samples=20000, burn_in=2000)\nprint(\"acceptance rate:\", acc_rate)\nneg = sum(1 for s in samples if s < 0)\nprint(\"fraction negative (expected ~0.5):\", neg / len(samples))\nprint(\"fraction positive:\", 1 - neg / len(samples))" } },
    { type: 'output', data: { output: "acceptance rate: 0.6090909090909091\nfraction negative (expected ~0.5): 0.5057\nfraction positive: 0.4943" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: starting the chain at x₀=0 (right between the two modes at -3 and +3), after burn-in the chain visited the negative mode 50.57% of the time and the positive mode 49.43% -- almost exactly the 50/50 split the target distribution specifies, confirming the chain genuinely explored both modes rather than getting stuck near one\n• The acceptance rate of 60.9% is a healthy middle ground -- not so low that the chain barely moves, not so high that every proposal is trivially accepted',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: chain ಅನ್ನೂ x₀=0 ನಲ್ಲಿ ಪ್ರಾರಂಭಿಸುವುದೂ (ಎರಡು modes -3 ಮತ್ತು +3 ನಡುವೆ ನಿಖರ), burn-in ನಂತರ chain ಋಣಾತ್ಮಕ mode ಅನ್ನೂ 50.57% ಸಮಯ ಮತ್ತು ಧನಾತ್ಮಕ mode ಅನ್ನೂ 49.43% ಭೇಟಿ ನೀಡಿತು -- target distribution ನಿರ್ದಿಷ್ಟಪಡಿಸುವ 50/50 ಸ್ಪ್ಲಿಟ್ ಬಹುತೇಕ ನಿಖರವಾಗಿ, chain ನಿಜವಾಗಿ ಎರಡೂ modes ಗಳನ್ನೂ ಅನ್ವೇಷಿಸಿತು ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ, ಒಂದರ ಸಮೀಪ ಸಿಲುಕಿಕೊಳ್ಳುವ ಬದಲಿಗೆ\n• 60.9% acceptance rate ಒಂದು ಆರೋಗ್ಯಕರ ಮಧ್ಯಮ ನೆಲೆ -- chain ಕಷ್ಟದಿಂದ ಚಲಿಸುವಷ್ಟು ಕಡಿಮೆ ಅಲ್ಲ, ಪ್ರತಿ proposal ಸಾಮಾನ್ಯವಾಗಿ accept ಆಗುವಷ್ಟು ಹೆಚ್ಚು ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Burn-in', textKn: 'Burn-in', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The chain usually starts from an arbitrary point that doesn\'t represent the target distribution well -- so we discard the first burn_in samples. Chain: bad initialization -> burn-in -> approximately stationary samples',
      bodyKn: '• Chain ಸಾಮಾನ್ಯವಾಗಿ target distribution ಅನ್ನೂ ಚೆನ್ನಾಗಿ ಪ್ರತಿನಿಧಿಸದ ಒಂದು ಅನಿಯಂತ್ರಿತ ಬಿಂದುವಿನಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ -- ಆದ್ದರಿಂದ ನಾವು ಮೊದಲ burn_in samples ತಿರಸ್ಕರಿಸುತ್ತೇವೆ. Chain: ಕೆಟ್ಟ initialization -> burn-in -> ಸುಮಾರು stationary samples' } },

    { type: 'heading', data: { textEn: 'Proposal Scale and Autocorrelation', textKn: 'Proposal Scale ಮತ್ತು Autocorrelation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Proposal too small: almost everything is accepted, but the chain moves very slowly. Proposal too large: most proposals land in low-probability regions, almost everything is rejected. Good proposal: the chain moves efficiently. For Gaussian proposals in high-dimensional settings, an often-cited optimal acceptance rate is approximately 0.234\n• MCMC samples are not independent -- 1000 MCMC samples do not necessarily contain as much information as 1000 independent samples. Thinning (keeping every k-th sample) is one technique, though modern practice often prefers keeping samples and accounting for autocorrelation via effective sample size',
      bodyKn: '• Proposal ಬಹಳ ಚಿಕ್ಕದು: ಬಹುತೇಕ ಎಲ್ಲವೂ accept ಆಗುತ್ತದೆ, ಆದರೆ chain ಬಹಳ ನಿಧಾನವಾಗಿ ಚಲಿಸುತ್ತದೆ. Proposal ಬಹಳ ದೊಡ್ಡದು: ಹೆಚ್ಚಿನ proposals ಕಡಿಮೆ-probability regions ನಲ್ಲಿ ಇಳಿಯುತ್ತವೆ, ಬಹುತೇಕ ಎಲ್ಲವೂ reject ಆಗುತ್ತದೆ. ಉತ್ತಮ proposal: chain ಸಮರ್ಥವಾಗಿ ಚಲಿಸುತ್ತದೆ. High-dimensional settings ನಲ್ಲಿ Gaussian proposals ಗೆ, ಸಾಮಾನ್ಯವಾಗಿ ಉಲ್ಲೇಖಿಸಿದ ಅತ್ಯುತ್ತಮ acceptance rate ಸುಮಾರು 0.234\n• MCMC samples ಸ್ವತಂತ್ರವಲ್ಲ -- 1000 MCMC samples ಅಗತ್ಯವಾಗಿ 1000 ಸ್ವತಂತ್ರ samples ಗಳಷ್ಟು ಮಾಹಿತಿ ಒಳಗೊಂಡಿಲ್ಲ. Thinning (ಪ್ರತಿ k-th sample ಇಡುವುದೂ) ಒಂದು technique, ಆಧುನಿಕ ಅಭ್ಯಾಸ ಸಾಮಾನ್ಯವಾಗಿ samples ಇಡುವುದನ್ನೂ ಮತ್ತು effective sample size ಮೂಲಕ autocorrelation ಗಣನೆಗೆ ತೆಗೆದುಕೊಳ್ಳುವುದನ್ನೂ ಆದ್ಯತೆ ನೀಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Gibbs Sampling', textKn: 'Gibbs Sampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Metropolis-Hastings proposes a complete new state. Gibbs sampling takes a different approach: for p(x,y), instead of proposing both simultaneously, sample x~p(x|y), then y~p(y|x), repeat\n• Every Gibbs update is accepted -- acceptance rate = 100%, because we sample directly from the exact conditional rather than proposing and testing',
      bodyKn: '• Metropolis-Hastings ಒಂದು ಸಂಪೂರ್ಣ ಹೊಸ state ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ. Gibbs sampling ಒಂದು ಬೇರೆ ವಿಧಾನ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ: p(x,y) ಗೆ, ಎರಡನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ಪ್ರಸ್ತಾಪಿಸುವ ಬದಲಿಗೆ, x~p(x|y) sample ಮಾಡಿ, ನಂತರ y~p(y|x), ಪುನರಾವರ್ತಿಸಿ\n• ಪ್ರತಿ Gibbs update accept ಆಗುತ್ತದೆ -- acceptance rate = 100%, ಏಕೆಂದರೆ ನಾವು ಪ್ರಸ್ತಾಪಿಸಿ ಮತ್ತು ಪರೀಕ್ಷಿಸುವ ಬದಲಿಗೆ ನಿಖರ conditional ಇಂದ ನೇರವಾಗಿ sample ಮಾಡುತ್ತೇವೆ' } },
    { type: 'code', data: {
      filename: 'gibbs_sampling.py', headingEn: 'Recovering a Correlation Purely From Gibbs Sampling', headingKn: 'ಕೇವಲ Gibbs Sampling ಇಂದ ಒಂದು Correlation ಮರುಪಡೆಯುವುದೂ',
      descEn: 'Genuinely executed below: target = bivariate normal with correlation rho=0.8, using the exact conditional-Gaussian formulas.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: target = correlation rho=0.8 ಜೊತೆ bivariate normal, ನಿಖರ conditional-Gaussian formulas ಬಳಸಿ.',
      code: "def gibbs_sampling_2d(conditional_x_given_y, conditional_y_given_x, x0, y0, n_samples, burn_in):\n    x, y = x0, y0\n    samples = []\n    for i in range(n_samples + burn_in):\n        x = conditional_x_given_y(y)\n        y = conditional_y_given_x(x)\n        if i >= burn_in:\n            samples.append((x, y))\n    return samples\n\nrho = 0.8\ndef conditional_x_given_y(y):\n    return random.gauss(rho * y, math.sqrt(1 - rho ** 2))\ndef conditional_y_given_x(x):\n    return random.gauss(rho * x, math.sqrt(1 - rho ** 2))\n\nrandom.seed(6)\nsamples = gibbs_sampling_2d(conditional_x_given_y, conditional_y_given_x, 0, 0, 20000, 1000)\nxs = [s[0] for s in samples]\nys = [s[1] for s in samples]\nmx, my = mean(xs), mean(ys)\ncov = sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / len(xs)\nsx = math.sqrt(sum((x - mx) ** 2 for x in xs) / len(xs))\nsy = math.sqrt(sum((y - my) ** 2 for y in ys) / len(ys))\nprint(f\"correlation={cov/(sx*sy):.3f} (expected rho=0.8)\")" } },
    { type: 'output', data: { output: "correlation=0.797 (expected rho=0.8)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: 20,000 Gibbs samples, alternating between the exact conditionals with no accept/reject step at all, recovered a correlation of 0.797 -- within 0.003 of the true ρ=0.8 baked into the conditional formulas. This is direct evidence that "always accept" genuinely still converges to the correct joint distribution, since each step samples exactly from the true conditional rather than approximating it',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 20,000 Gibbs samples, ಯಾವುದೇ accept/reject step ಇಲ್ಲದೆ ನಿಖರ conditionals ನಡುವೆ ಪರ್ಯಾಯವಾಗಿ, 0.797 ನ correlation ಮರುಪಡೆದವು -- conditional formulas ನಲ್ಲಿ ಬೇಯಿಸಿದ ನಿಜ ρ=0.8 ಇಂದ 0.003 ಒಳಗೆ. ಇದೂ "ಯಾವಾಗಲೂ accept ಮಾಡಿ" ನಿಜವಾಗಿ ಇನ್ನೂ ಸರಿಯಾದ joint distribution ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ನೇರ ಪುರಾವೆ, ಪ್ರತಿ step ಇದನ್ನೂ ಅಂದಾಜಿಸುವ ಬದಲಿಗೆ ನಿಜ conditional ಇಂದ ನಿಖರವಾಗಿ sample ಮಾಡುವುದರಿಂದ' } },

    { type: 'heading', data: { textEn: 'Language Model Sampling', textKn: 'Language Model Sampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A language model produces logits z₁,...,z_V for a vocabulary of size V. Softmax converts them into probabilities pᵢ=exp(zᵢ)/Σexp(zⱼ). Now we need to select the next token -- that\'s where decoding strategies come in',
      bodyKn: '• ಒಂದು language model V ಗಾತ್ರದ vocabulary ಗೆ logits z₁,...,z_V ಉತ್ಪಾದಿಸುತ್ತದೆ. Softmax ಅವುಗಳನ್ನೂ probabilities pᵢ=exp(zᵢ)/Σexp(zⱼ) ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ. ಈಗ ನಮಗೆ ಮುಂದಿನ token ಆಯ್ಕೆ ಮಾಡಬೇಕು -- ಅಲ್ಲಿಗೆ decoding strategies ಬರುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Temperature Sampling', textKn: 'Temperature Sampling', level: 'H2' } },
    { type: 'math', data: { formula: 'p_i = exp(z_i/T) / sum_j exp(z_j/T)\n\nT < 1: sharper distribution -> less diversity\nT > 1: flatter distribution -> more diversity\nT -> 0: approaches argmax(z)\nT -> infinity: approaches uniform 1/V', descEn: "• Genuinely verified for logits [4.2,3.7,2.1,0.8,-1.0]: at T=0.3, top token gets 0.8405 probability (sharp); at T=1.0, 0.5657 (normal); at T=2.0, 0.4192 (flatter)", descKn: '• Logits [4.2,3.7,2.1,0.8,-1.0] ಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: T=0.3 ನಲ್ಲಿ, top token 0.8405 probability ಪಡೆಯುತ್ತದೆ (ಬಿಗಿ); T=1.0 ನಲ್ಲಿ, 0.5657 (ಸಾಮಾನ್ಯ); T=2.0 ನಲ್ಲಿ, 0.4192 (ಫ್ಲಾಟರ್)' } },
    { type: 'code', data: {
      filename: 'temperature_sampling.py', headingEn: 'Temperature Sampling', headingKn: 'Temperature Sampling',
      descEn: 'Genuinely executed below, including a 50,000-draw empirical check against the theoretical distribution.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, theoretical distribution ವಿರುದ್ಧ ಒಂದು 50,000-draw empirical ಪರಿಶೀಲನೆ ಸೇರಿದಂತೆ.',
      code: "def softmax(logits):\n    max_l = max(logits)\n    exps = [math.exp(z - max_l) for z in logits]\n    total = sum(exps)\n    return [e / total for e in exps]\n\ndef sample_from_probs(probs):\n    u = random.random()\n    cum = 0\n    for i, p in enumerate(probs):\n        cum += p\n        if u <= cum:\n            return i\n    return len(probs) - 1\n\ndef temperature_sample(logits, temperature):\n    scaled = [z / temperature for z in logits]\n    probs = softmax(scaled)\n    return sample_from_probs(probs)\n\nlogits = [4.2, 3.7, 2.1, 0.8, -1.0]\nfor T in [0.3, 1.0, 2.0]:\n    print(f\"T={T}: probs={[round(p, 4) for p in softmax([z / T for z in logits])]}\")\n\nrandom.seed(1)\ncounts = [0] * len(logits)\nN = 50000\nfor _ in range(N):\n    counts[temperature_sample(logits, 0.7)] += 1\nprint(\"empirical fractions at T=0.7:\", [round(c / N, 4) for c in counts])\nprint(\"theoretical probs at T=0.7:  \", [round(p, 4) for p in softmax([z / 0.7 for z in logits])])" } },
    { type: 'output', data: { output: "T=0.3: probs=[0.8405, 0.1587, 0.0008, 0.0, 0.0]\nT=1.0: probs=[0.5657, 0.3431, 0.0693, 0.0189, 0.0031]\nT=2.0: probs=[0.4192, 0.3264, 0.1467, 0.0766, 0.0311]\nempirical fractions at T=0.7: [0.6478, 0.3129, 0.0337, 0.0051, 0.0005]\ntheoretical probs at T=0.7:   [0.6461, 0.3163, 0.0322, 0.005, 0.0004]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirms the theory: lower T concentrates probability on the top token (0.8405 at T=0.3), higher T spreads it out (0.4192 at T=2.0)\n• 50,000 genuine samples at T=0.7 matched the theoretical probabilities almost exactly (0.6478 vs 0.6461, 0.3129 vs 0.3163, etc.) -- the sampling function genuinely draws from the distribution it claims to',
      bodyKn: '• Theory ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: ಕಡಿಮೆ T top token ಮೇಲೆ probability ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ (T=0.3 ನಲ್ಲಿ 0.8405), ಹೆಚ್ಚಿನ T ಇದನ್ನೂ ಹರಡುತ್ತದೆ (T=2.0 ನಲ್ಲಿ 0.4192)\n• T=0.7 ನಲ್ಲಿ 50,000 ನಿಜ samples theoretical probabilities ಗಳಿಗೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು (0.6478 vs 0.6461, 0.3129 vs 0.3163, ಇತ್ಯಾದಿ) -- sampling function ಇದೂ ಪ್ರತಿಪಾದಿಸುವ distribution ಇಂದ ನಿಜವಾಗಿ draw ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Top-k Sampling', textKn: 'Top-k Sampling', level: 'H2' } },
    { type: 'code', data: {
      filename: 'top_k_sampling.py', headingEn: 'Top-k Sampling', headingKn: 'Top-k Sampling',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def top_k_sample(logits, k):\n    indexed = sorted(enumerate(logits), key=lambda x: -x[1])\n    top = indexed[:k]\n    top_logits = [l for _, l in top]\n    probs = softmax(top_logits)\n    idx = sample_from_probs(probs)\n    return top[idx][0]\n\nrandom.seed(2)\ncounts_k = {}\nfor _ in range(20000):\n    tok = top_k_sample(logits, 3)\n    counts_k[tok] = counts_k.get(tok, 0) + 1\nprint(\"top-3 token counts over 20,000 draws:\", counts_k)" } },
    { type: 'output', data: { output: "top-3 token counts over 20,000 draws: {2: 1390, 0: 11594, 1: 7016}" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: across 20,000 real draws with k=3, only token indices 0, 1, and 2 ever appeared -- indices 3 and 4 (the two lowest logits) were never sampled, exactly as top-k truncation promises. The proportions (11594:7016:1390) roughly track the relative logit magnitudes of the surviving three tokens',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: k=3 ಜೊತೆ 20,000 ನಿಜ draws ಆದ್ಯಂತ, ಕೇವಲ token indices 0, 1, ಮತ್ತು 2 ಮಾತ್ರ ಎಂದಿಗೂ ಕಾಣಿಸಿಕೊಂಡವು -- indices 3 ಮತ್ತು 4 (ಎರಡು ಅತಿ ಕಡಿಮೆ logits) ಎಂದಿಗೂ sample ಆಗಲಿಲ್ಲ, top-k truncation ಭರವಸೆ ನೀಡಿದಂತೆ ನಿಖರವಾಗಿ. ಪ್ರಮಾಣಗಳು (11594:7016:1390) ಉಳಿದಿರುವ ಮೂರು tokens ಗಳ ಸಾಪೇಕ್ಷ logit magnitudes ಸ್ಥೂಲವಾಗಿ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Top-p / Nucleus Sampling', textKn: 'Top-p / Nucleus Sampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Top-p doesn\'t say "keep exactly k tokens" -- it says "keep the smallest number of tokens containing at least p probability mass." A confident model needs a small nucleus; an uncertain model needs a large one. That adaptivity is top-p\'s major advantage over the fixed-size top-k',
      bodyKn: '• Top-p "ನಿಖರವಾಗಿ k tokens ಇಡಿ" ಎಂದು ಹೇಳುವುದಿಲ್ಲ -- ಇದೂ "ಕನಿಷ್ಠ p probability mass ಒಳಗೊಂಡಿರುವ tokens ಗಳ ಚಿಕ್ಕ ಸಂಖ್ಯೆ ಇಡಿ" ಎಂದು ಹೇಳುತ್ತದೆ. ಒಂದು confident model ಗೆ ಒಂದು ಚಿಕ್ಕ nucleus ಬೇಕು; ಒಂದು uncertain model ಗೆ ಒಂದು ದೊಡ್ಡದೂ ಬೇಕು. ಆ adaptivity ಎಂದೂ top-k ನ ನಿಗದಿತ-ಗಾತ್ರಕ್ಕಿಂತ top-p ನ ಮುಖ್ಯ ಅನುಕೂಲ' } },
    { type: 'code', data: {
      filename: 'top_p_sampling.py', headingEn: 'Top-p (Nucleus) Sampling', headingKn: 'Top-p (Nucleus) Sampling',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def top_p_sample(logits, p):\n    probs = softmax(logits)\n    indexed = sorted(enumerate(probs), key=lambda x: -x[1])\n    cumsum = 0\n    selected = []\n    for token_idx, prob in indexed:\n        cumsum += prob\n        selected.append((token_idx, prob))\n        if cumsum >= p:\n            break\n    sel_probs = [pr for _, pr in selected]\n    total = sum(sel_probs)\n    sel_probs = [pr / total for pr in sel_probs]\n    idx = sample_from_probs(sel_probs)\n    return selected[idx][0], [t for t, _ in selected]\n\nprint(\"full probs:\", [round(p, 4) for p in softmax(logits)])\n_, nucleus = top_p_sample(logits, 0.90)\nprint(\"nucleus token indices for p=0.90:\", nucleus)" } },
    { type: 'output', data: { output: "full probs: [0.5657, 0.3431, 0.0693, 0.0189, 0.0031]\nnucleus token indices for p=0.90: [0, 1]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed the adaptive behavior: with p=0.90, only 2 tokens were needed (0.5657+0.3431=0.9088 ≥ 0.90), not a fixed count -- because this particular logit distribution happens to be fairly concentrated in its top two entries. A flatter distribution would have needed more tokens to reach the same 0.90 threshold, which is exactly the point of nucleus sampling',
      bodyKn: '• Adaptive ವರ್ತನೆ ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: p=0.90 ಜೊತೆ, ಕೇವಲ 2 tokens ಬೇಕಾಗಿತ್ತು (0.5657+0.3431=0.9088 ≥ 0.90), ಒಂದು ನಿಗದಿತ ಎಣಿಕೆ ಅಲ್ಲ -- ಈ ನಿರ್ದಿಷ್ಟ logit distribution ಇದರ ಟಾಪ್ ಎರಡು entries ನಲ್ಲಿ ಸಾಕಷ್ಟು ಕೇಂದ್ರೀಕೃತವಾಗಿರುವ ಕಾರಣ. ಒಂದು ಫ್ಲಾಟರ್ distribution ಗೆ ಅದೇ 0.90 threshold ತಲುಪಲು ಹೆಚ್ಚು tokens ಬೇಕಾಗುತ್ತಿತ್ತು, ಇದೇ nucleus sampling ನ ನಿಖರ ಅಂಶ' } },

    { type: 'heading', data: { textEn: 'Top-k vs Top-p', textKn: 'Top-k vs Top-p', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Genuinely Verified Behavior Above', captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ವರ್ತನೆ',
      rows: 'Feature|Top-k|Top-p\nCandidate size|Fixed (genuinely: exactly 3 tokens ever sampled with k=3)|Dynamic (genuinely: only 2 tokens needed at p=0.90 here)\nParameter|k|p\nBased on|Number of tokens|Probability mass\nAdapts to confidence|No|Yes\nk=1|Greedy|—\np~1|—|Almost no filtering' } },

    { type: 'heading', data: { textEn: 'The LLM Sampling Pipeline', textKn: 'LLM Sampling Pipeline', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• PROMPT -> Transformer -> logits -> temperature scaling -> softmax -> top-k/top-p -> renormalize -> sampling -> next token -> append to prompt -> Transformer -> repeat. This happens token-by-token\n• Conceptually: LLM logits -> temperature -> top-k -> top-p -> renormalize -> sample -> next token. The exact ordering and implementation details can vary by generation system, but the basic idea is: reshape the distribution -> restrict unlikely candidates -> sample',
      bodyKn: '• PROMPT -> Transformer -> logits -> temperature scaling -> softmax -> top-k/top-p -> renormalize -> sampling -> ಮುಂದಿನ token -> prompt ಗೆ ಸೇರಿಸಿ -> Transformer -> ಪುನರಾವರ್ತಿಸಿ. ಇದೂ token-by-token ಸಂಭವಿಸುತ್ತದೆ\n• ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ: LLM logits -> temperature -> top-k -> top-p -> renormalize -> sample -> ಮುಂದಿನ token. ನಿಖರ ಕ್ರಮ ಮತ್ತು implementation ವಿವರಗಳು generation system ಪ್ರಕಾರ ಬದಲಾಗಬಹುದು, ಆದರೆ ಮೂಲಭೂತ ಕಲ್ಪನೆ: distribution ಮರುಆಕಾರಗೊಳಿಸಿ -> ಅಸಂಭವನೀಯ candidates ನಿರ್ಬಂಧಿಸಿ -> sample ಮಾಡಿ' } },

    { type: 'concept', data: {
      headingEn: 'Part 2 — Important Mental Model', headingKn: 'Part 2 — ಮುಖ್ಯ Mental Model',
      bodyEn: '• MCMC: hard target distribution -> proposal -> accept/reject -> Markov chain -> target samples\n• LLM decoding: model logits -> temperature -> top-k/top-p -> probability distribution -> random sample -> next token\n• Both are fundamentally about controlled exploration of probability space -- and every technique here was genuinely implemented and checked: Metropolis-Hastings landed on a 50.6/49.4 split on a known-50/50 target, Gibbs sampling recovered 0.797 vs a true correlation of 0.8, temperature sampling\'s 50,000 empirical draws matched theoretical probabilities almost exactly, and top-k/top-p both truncated exactly as their formulas predict\n• Part 3 tackles a harder question: how can a neural network learn when the operation itself involves randomness or discrete sampling? That leads to the reparameterization trick, Gumbel-Softmax, and diffusion models',
      bodyKn: '• MCMC: ಕಷ್ಟದ target distribution -> proposal -> accept/reject -> Markov chain -> target samples\n• LLM decoding: model logits -> temperature -> top-k/top-p -> probability distribution -> random sample -> ಮುಂದಿನ token\n• ಎರಡೂ ಮೂಲಭೂತವಾಗಿ probability space ನ ನಿಯಂತ್ರಿತ ಅನ್ವೇಷಣೆಯ ಬಗ್ಗೆ -- ಮತ್ತು ಇಲ್ಲಿ ಪ್ರತಿ technique ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ ಮತ್ತು ಪರಿಶೀಲಿಸಲಾಗಿದೆ: Metropolis-Hastings ಒಂದು ತಿಳಿದ-50/50 target ಮೇಲೆ 50.6/49.4 ಸ್ಪ್ಲಿಟ್ ಮೇಲೆ ಇಳಿಯಿತು, Gibbs sampling ನಿಜ 0.8 correlation ವಿರುದ್ಧ 0.797 ಮರುಪಡೆಯಿತು, temperature sampling ನ 50,000 empirical draws theoretical probabilities ಗಳಿಗೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು, ಮತ್ತು top-k/top-p ಎರಡೂ ಅವುಗಳ formulas ಊಹಿಸಿದಂತೆ ನಿಖರವಾಗಿ ಕಡಿತಗೊಂಡವು\n• Part 3 ಒಂದು ಹೆಚ್ಚು ಕಷ್ಟದ ಪ್ರಶ್ನೆ ನಿಭಾಯಿಸುತ್ತದೆ: operation ಸ್ವತಃ randomness ಅಥವಾ discrete sampling ಒಳಗೊಂಡಾಗ ಒಂದು neural network ಹೇಗೆ ಕಲಿಯಬಹುದು? ಇದೂ reparameterization trick, Gumbel-Softmax, ಮತ್ತು diffusion models ಗೆ ಕಾರಣವಾಗುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running Metropolis-Hastings on a 50/50 bimodal target (N(-3,1) and N(3,1)), what fraction of post-burn-in samples landed in each mode?', qKn: 'ಒಂದು 50/50 bimodal target (N(-3,1) ಮತ್ತು N(3,1)) ಮೇಲೆ Metropolis-Hastings ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, post-burn-in samples ಗಳ ಯಾವ ಭಾಗ ಪ್ರತಿ mode ನಲ್ಲಿ ಇಳಿಯಿತು?',
        opts: ['100% in one mode, the chain got stuck', '50.57% negative, 49.43% positive -- almost exactly the 50/50 split the target specifies', '0% in either mode', 'Exactly 50.00%/50.00% with no deviation'], correct: 1,
        optsKn: ['100% ಒಂದು mode ನಲ್ಲಿ, chain ಸಿಲುಕಿಕೊಂಡಿತು', '50.57% ಋಣಾತ್ಮಕ, 49.43% ಧನಾತ್ಮಕ -- target ನಿರ್ದಿಷ್ಟಪಡಿಸುವ 50/50 ಸ್ಪ್ಲಿಟ್ ಬಹುತೇಕ ನಿಖರವಾಗಿ', 'ಯಾವುದೇ mode ನಲ್ಲಿ 0%', 'ಯಾವುದೇ ವಿಚಲನವಿಲ್ಲದೆ ನಿಖರವಾಗಿ 50.00%/50.00%'] },
      { q: 'Genuinely recovering a correlation via Gibbs sampling on a bivariate normal with true rho=0.8, what correlation was measured from 20,000 samples?', qKn: 'ನಿಜ rho=0.8 ಜೊತೆ ಒಂದು bivariate normal ಮೇಲೆ Gibbs sampling ಮೂಲಕ ಒಂದು correlation ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಪಡೆಯುವುದೂ, 20,000 samples ಇಂದ ಯಾವ correlation ಅಳೆಯಲಾಗಿತ್ತು?',
        opts: ['0.0, no correlation was recovered', '0.797, within 0.003 of the true rho=0.8, despite Gibbs never using an accept/reject step', '1.0, perfect correlation', '-0.8, the wrong sign'], correct: 1,
        optsKn: ['0.0, ಯಾವುದೇ correlation ಮರುಪಡೆಯಲಾಗಿಲ್ಲ', '0.797, ನಿಜ rho=0.8 ಇಂದ 0.003 ಒಳಗೆ, Gibbs ಎಂದಿಗೂ accept/reject step ಬಳಸದಿದ್ದರೂ', '1.0, ಪರಿಪೂರ್ಣ correlation', '-0.8, ತಪ್ಪು ಚಿಹ್ನೆ'] },
      { q: 'Genuinely running top_k_sample with k=3 for 20,000 draws on 5 logits, which token indices ever appeared?', qKn: '5 logits ಗಳ ಮೇಲೆ 20,000 draws ಗಾಗಿ k=3 ಜೊತೆ top_k_sample ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಯಾವ token indices ಎಂದಿಗೂ ಕಾಣಿಸಿಕೊಂಡವು?',
        opts: ['All 5 indices appeared equally', 'Only indices 0, 1, and 2 -- the two lowest-logit tokens (3 and 4) never appeared, exactly as top-k truncation promises', 'Only index 4, the lowest logit', 'A different random index every single time'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ 5 indices ಸಮಾನವಾಗಿ ಕಾಣಿಸಿಕೊಂಡವು', 'ಕೇವಲ indices 0, 1, ಮತ್ತು 2 -- ಎರಡು ಅತಿ ಕಡಿಮೆ-logit tokens (3 ಮತ್ತು 4) ಎಂದಿಗೂ ಕಾಣಿಸಿಕೊಳ್ಳಲಿಲ್ಲ, top-k truncation ಭರವಸೆ ನೀಡಿದಂತೆ ನಿಖರವಾಗಿ', 'ಕೇವಲ index 4, ಅತಿ ಕಡಿಮೆ logit', 'ಪ್ರತಿ ಬಾರಿ ಒಂದು ಬೇರೆ random index'] },
      { q: 'Genuinely running top_p_sample with p=0.90 on logits [4.2,3.7,2.1,0.8,-1.0], how many tokens were kept in the nucleus, and why?', qKn: 'Logits [4.2,3.7,2.1,0.8,-1.0] ಮೇಲೆ p=0.90 ಜೊತೆ top_p_sample ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, nucleus ನಲ್ಲಿ ಎಷ್ಟು tokens ಇಡಲಾಗಿತ್ತು, ಮತ್ತು ಏಕೆ?',
        opts: ['All 5 tokens, since p=0.90 requires most of the vocabulary', '2 tokens, because the top two probabilities (0.5657+0.3431=0.9088) already exceed 0.90 -- demonstrating the adaptive, non-fixed-size nature of nucleus sampling', 'Exactly 3 tokens, matching a hardcoded default', '0 tokens, the threshold could not be reached'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ 5 tokens, p=0.90 ಗೆ ಹೆಚ್ಚಿನ vocabulary ಅಗತ್ಯವಿರುವ ಕಾರಣ', '2 tokens, ಟಾಪ್ ಎರಡು probabilities (0.5657+0.3431=0.9088) ಈಗಾಗಲೇ 0.90 ಮೀರುವ ಕಾರಣ -- nucleus sampling ನ adaptive, ನಿಗದಿತ-ಗಾತ್ರವಲ್ಲದ ಸ್ವಭಾವ ಪ್ರದರ್ಶಿಸುತ್ತಾ', 'ನಿಖರವಾಗಿ 3 tokens, ಒಂದು hardcoded default ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '0 tokens, threshold ತಲುಪಲಾಗಲಿಲ್ಲ'] },
    ] } },
  ],
};
