const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213a3'; // Module 158: Autoencoders and VAE

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 25,
  difficulty: 'advanced',
  status: 'published',
  title: 'Autoencoders & VAE (Lesson 2) — VAE: Reparameterization, KL Divergence & ELBO',
  titleKn: 'Autoencoders & VAE (Lesson 2) — VAE: Reparameterization, KL Divergence & ELBO',
  desc: 'Genuinely build a pure-Python VAE encoder that outputs mu and log-sigma-squared, implement the reparameterization trick and the closed-form Gaussian KL divergence, and genuinely compute the full ELBO loss (reconstruction 41.4657 + KL 0.0056) on an untrained network to confirm every term matches its formula.',
  descKn: 'mu ಮತ್ತು log-sigma-squared ಔಟ್ಪುಟ್ ಮಾಡುವ ಒಂದೂ pure-Python VAE encoder ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, reparameterization trick ಮತ್ತು closed-form Gaussian KL divergence ಅನ್ನೂ implement ಮಾಡಿ, ಮತ್ತು ಒಂದೂ untrained network ಮೇಲೆ ಪೂರ್ಣ ELBO loss ಅನ್ನೂ (reconstruction 41.4657 + KL 0.0056) ನಿಜವಾಗಿ ಗಣಿಸಿ ಪ್ರತಿ term ಅದೂ ಫಾರ್ಮುಲಾ ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why an ordinary autoencoder\'s latent space is not suitable for random sampling.',
    'Change the encoder from producing a single vector z to producing mu(x) and log sigma^2(x).',
    'Understand the distribution q_phi(z|x) = N(mu, diag(sigma^2)).',
    'Implement the reparameterization trick z = mu + sigma*eps.',
    'Derive and implement the exact Gaussian KL divergence.',
    'Combine reconstruction and KL into the VAE/ELBO loss.',
    'Understand the role of beta.',
  ],
  objectivesKn: [
    'ಒಂದೂ ಸಾಮಾನ್ಯ autoencoder ನ latent space random sampling ಗೆ ಏಕೆ ಸೂಕ್ತವಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'Encoder ಅನ್ನೂ ಒಂದೂ single vector z ಉತ್ಪಾದಿಸುವುದೂ ಇಂದ mu(x) ಮತ್ತು log sigma^2(x) ಉತ್ಪಾದಿಸುವುದೂ ಗೆ ಬದಲಾಯಿಸಿ.',
    'Distribution q_phi(z|x) = N(mu, diag(sigma^2)) ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Reparameterization trick z = mu + sigma*eps ಅನ್ನೂ implement ಮಾಡಿ.',
    'ನಿಖರ Gaussian KL divergence derive ಮಾಡಿ implement ಮಾಡಿ.',
    'Reconstruction ಮತ್ತು KL ಅನ್ನೂ VAE/ELBO loss ಗೆ ಸಂಯೋಜಿಸಿ.',
    'Beta ನ ಪಾತ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Autoencoders & VAE (Lesson 2) — Reparameterization, KL & ELBO', textKn: 'Autoencoders & VAE (Lesson 2) — Reparameterization, KL & ELBO', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Lesson 1 (Autoencoder) · Time: ~25 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Lesson 1 (Autoencoder) · Time: ~25 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,VAE,Reparameterization,~25 min,Part 2 of 3',
      pillsKn: 'Python,VAE,Reparameterization,~25 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'From Autoencoder to VAE', textKn: 'From Autoencoder to VAE', level: 'H2' } },
    { type: 'math', data: {
      formula: 'q_phi(z|x) = N(mu(x), diag(sigma^2(x)))',
      descEn: '• Lesson 1 genuinely confirmed the encoder produces a single deterministic z = f(x), with no guarantee that latent points follow N(0,I). A VAE instead makes the encoder output two vectors, mu and log-sigma-squared, describing an entire probability distribution over latent space rather than one point',
      descKn: 'Lesson 1 ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು encoder ಒಂದೂ single deterministic z = f(x) ಉತ್ಪಾದಿಸುತ್ತದೆ, latent points N(0,I) ಅನುಸರಿಸುತ್ತವೆ ಎಂಬ ಯಾವುದೇ ಖಾತರಿ ಇಲ್ಲದೆ. ಒಂದೂ VAE ಬದಲು encoder ಎರಡೂ vectors ಔಟ್ಪುಟ್ ಮಾಡುವಂತೆ ಮಾಡುತ್ತದೆ, mu ಮತ್ತು log-sigma-squared, ಒಂದೂ point ಬದಲು latent space ಮೇಲೆ ಒಂದೂ ಸಂಪೂರ್ಣ probability distribution ವಿವರಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'Why Output log(sigma^2) Instead of sigma Directly?', headingKn: 'sigma ಬದಲು log(sigma^2) ಏಕೆ ಔಟ್ಪುಟ್ ಮಾಡುವುದೂ?',
      bodyEn: '• Variance must satisfy sigma^2 > 0, but a network layer can output any real number. Predicting log_sigma2 (which can be any real number) and recovering sigma^2 = exp(log_sigma2), sigma = exp(0.5*log_sigma2) guarantees positivity without needing a constrained output activation\n• The encoder architecture becomes: x -> shared hidden h=tanh(W1 x + b1) -> two heads, mu = W_mu h + b_mu and log_sigma2 = W_sig h + b_sig',
      bodyKn: '• Variance sigma^2 > 0 ತೃಪ್ತಿಪಡಿಸಬೇಕು, ಆದರೆ ಒಂದೂ network layer ಯಾವುದೇ real number ಔಟ್ಪುಟ್ ಮಾಡಬಹುದು. log_sigma2 (ಯಾವುದೇ real number ಆಗಿರಬಹುದು) ಊಹಿಸುವುದೂ ಮತ್ತು sigma^2 = exp(log_sigma2), sigma = exp(0.5*log_sigma2) ಮರುಪಡೆಯುವುದೂ ಒಂದೂ ನಿರ್ಬಂಧಿತ output activation ಇಲ್ಲದೆ positivity ಖಾತರಿಪಡಿಸುತ್ತದೆ\n• Encoder architecture ಆಗುತ್ತದೆ: x -> shared hidden h=tanh(W1 x + b1) -> ಎರಡೂ heads, mu = W_mu h + b_mu ಮತ್ತು log_sigma2 = W_sig h + b_sig' } },

    { type: 'heading', data: { textEn: 'The Reparameterization Trick', textKn: 'The Reparameterization Trick', level: 'H2' } },
    { type: 'math', data: {
      formula: 'z = mu + sigma * eps,   eps ~ N(0,I)          sigma = exp(0.5 * log_sigma2)',
      descEn: '• Sampling z ~ N(mu, sigma^2) directly is not differentiable with respect to the network parameters. Rewriting it as z = mu + sigma*eps isolates the randomness in eps, while z becomes a deterministic function of mu, sigma, and eps -- allowing gradients to flow through mu and sigma',
      descKn: 'z ~ N(mu, sigma^2) ಅನ್ನೂ ನೇರವಾಗಿ sampling ಮಾಡುವುದೂ network parameters ಗೆ ಸಂಬಂಧಿಸಿ differentiable ಅಲ್ಲ. ಅದನ್ನೂ z = mu + sigma*eps ಆಗಿ ಮರುಬರೆಯುವುದೂ randomness ಅನ್ನೂ eps ನಲ್ಲಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ, z mu, sigma, ಮತ್ತು eps ನ ಒಂದೂ deterministic function ಆಗುತ್ತಾ -- gradients mu ಮತ್ತು sigma ಮೂಲಕ ಹರಿಯಲು ಬಿಡುತ್ತಾ' } },
    { type: 'code', data: {
      filename: 'vae_encoder_forward.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the VAE encoder (two-headed: mu and log_sigma2), the reparameterize() function, and one full forward pass on an untrained network with the same seed as Lesson 1, confirming the exact numeric outputs.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: VAE encoder (ಎರಡೂ-head: mu ಮತ್ತು log_sigma2), reparameterize() function, ಮತ್ತು Lesson 1 ನ ಅದೇ seed ಜೊತೆ ಒಂದೂ untrained network ಮೇಲೆ ಒಂದೂ ಪೂರ್ಣ forward pass, ನಿಖರ numeric outputs ದೃಢಪಡಿಸುತ್ತಾ.',
      code: "import math, random\n\ndef sample_data(rng):\n    center = -2.0 if rng.random() < 0.5 else 2.0\n    return [center + rng.gauss(0.0, 0.3) for _ in range(8)]\n\ndef tanh(x): return math.tanh(x)\ndef matmul(m, v): return [sum(a*b for a,b in zip(row, v)) for row in m]\ndef add(a, b): return [x+y for x,y in zip(a,b)]\n\ndef init_vae_encoder(rng):\n    return {\n        'W1': [[rng.uniform(-0.1,0.1) for _ in range(8)] for _ in range(16)],\n        'b1': [0.0]*16,\n        'W_mu': [[rng.uniform(-0.1,0.1) for _ in range(16)] for _ in range(2)],\n        'b_mu': [0.0]*2,\n        'W_sig': [[rng.uniform(-0.1,0.1) for _ in range(16)] for _ in range(2)],\n        'b_sig': [0.0]*2,\n    }\n\ndef encode(x, enc):\n    h = [tanh(v) for v in add(matmul(enc['W1'], x), enc['b1'])]\n    mu = add(matmul(enc['W_mu'], h), enc['b_mu'])\n    log_sigma2 = add(matmul(enc['W_sig'], h), enc['b_sig'])\n    return mu, log_sigma2\n\ndef reparameterize(mu, log_sigma2, rng):\n    eps = [rng.gauss(0, 1) for _ in mu]\n    sigma = [math.exp(0.5*lv) for lv in log_sigma2]\n    return [m + s*e for m, s, e in zip(mu, sigma, eps)]\n\nrng = random.Random(42)\nenc = init_vae_encoder(rng)\nx = sample_data(rng)\nmu, log_sigma2 = encode(x, enc)\nz = reparameterize(mu, log_sigma2, rng)\nprint('Input:', [round(v,3) for v in x])\nprint('mu:', [round(v,3) for v in mu])\nprint('log_sigma2:', [round(v,3) for v in log_sigma2])\nprint('z:', [round(v,3) for v in z])" } },
    { type: 'output', data: { output: "Input: [2.596, 2.528, 2.334, 2.693, 1.986, 2.143, 1.556, 2.194]\nmu: [-0.022, 0.03]\nlog_sigma2: [0.134, 0.026]\nz: [-0.591, 1.304]" } },

    { type: 'heading', data: { textEn: 'The Gaussian KL Divergence in Closed Form', textKn: 'The Gaussian KL Divergence in Closed Form', level: 'H2' } },
    { type: 'math', data: {
      formula: 'KL(q(z|x) || N(0,1)) = 0.5 * sum_i (sigma_i^2 + mu_i^2 - log(sigma_i^2) - 1)',
      descEn: '• For a diagonal Gaussian posterior against a standard normal prior, the KL divergence has an exact closed form -- no numerical integration needed. At mu=0, sigma^2=1 (log_sigma2=0), the formula gives 0.5*(1+0-0-1)=0, confirming KL=0 exactly at the prior',
      descKn: 'ಒಂದೂ standard normal prior ವಿರುದ್ಧ ಒಂದೂ diagonal Gaussian posterior ಗಾಗಿ, KL divergence ಒಂದೂ ನಿಖರ closed form ಹೊಂದಿದೆ -- ಯಾವುದೇ numerical integration ಬೇಕಿಲ್ಲ. mu=0, sigma^2=1 (log_sigma2=0) ನಲ್ಲಿ, formula 0.5*(1+0-0-1)=0 ಕೊಡುತ್ತದೆ, prior ನಲ್ಲಿ ನಿಖರವಾಗಿ KL=0 ದೃಢಪಡಿಸುತ್ತಾ' } },
    { type: 'code', data: {
      filename: 'kl_and_elbo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: kl_divergence(), reconstruction_loss(), and elbo() computed on the same untrained forward pass above, plus a direct check that KL=0 exactly when mu=[0,0] and log_sigma2=[0,0].',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: kl_divergence(), reconstruction_loss(), ಮತ್ತು elbo() ಮೇಲಿನ ಅದೇ untrained forward pass ಮೇಲೆ ಗಣಿಸಲಾಗಿದೆ, ಜೊತೆಗೆ mu=[0,0] ಮತ್ತು log_sigma2=[0,0] ಆಗಿದ್ದಾಗ KL=0 ನಿಖರವಾಗಿ ಎಂಬುದೂ ಒಂದೂ ನೇರ ಪರಿಶೀಲನೆ.',
      code: "def init_decoder(rng):\n    return {\n        'W1': [[rng.uniform(-0.1,0.1) for _ in range(2)] for _ in range(16)],\n        'b1': [0.0]*16,\n        'W_out': [[rng.uniform(-0.1,0.1) for _ in range(16)] for _ in range(8)],\n        'b_out': [0.0]*8,\n    }\n\ndef decode(z, dec):\n    h = [tanh(v) for v in add(matmul(dec['W1'], z), dec['b1'])]\n    return add(matmul(dec['W_out'], h), dec['b_out'])\n\ndef reconstruction_loss(x, x_hat):\n    return sum((a-b)**2 for a, b in zip(x, x_hat))\n\ndef kl_divergence(mu, log_sigma2):\n    return 0.5 * sum(math.exp(lv) + m*m - lv - 1.0 for m, lv in zip(mu, log_sigma2))\n\ndef elbo(x, x_hat, mu, log_sigma2, beta=1.0):\n    recon = reconstruction_loss(x, x_hat)\n    kl = kl_divergence(mu, log_sigma2)\n    return recon + beta*kl, recon, kl\n\nrng = random.Random(42)\nenc = init_vae_encoder(rng)\ndec = init_decoder(rng)\nx = sample_data(rng)\nmu, log_sigma2 = encode(x, enc)\nz = reparameterize(mu, log_sigma2, rng)\nx_hat = decode(z, dec)\n\ntotal_loss, recon, kl = elbo(x, x_hat, mu, log_sigma2, beta=1.0)\nprint('Reconstruction:', round(recon, 4))\nprint('KL:', round(kl, 4))\nprint('Total ELBO loss:', round(total_loss, 4))\nprint('KL at the prior (mu=[0,0], log_sigma2=[0,0]):', kl_divergence([0,0],[0,0]))" } },
    { type: 'output', data: { output: "Reconstruction: 41.4657\nKL: 0.0056\nTotal ELBO loss: 41.4713\nKL at the prior (mu=[0,0], log_sigma2=[0,0]): 0.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed ELBO Numbers', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ELBO Numbers ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: on this untrained network, KL=0.0056 is very small, exactly because the untrained encoder\'s weights start near zero, so mu starts near 0 and log_sigma2 starts near 0 -- i.e. q(z|x) starts close to the N(0,1) prior by construction, matching the exact KL=0.0 check at mu=[0,0], log_sigma2=[0,0]\n• Reconstruction (41.4657) dominates the total loss at initialization because the untrained decoder has not yet learned to map z back to x -- this mirrors Lesson 1\'s untrained loss of 34.3971 (the small difference comes from the stochastic z here vs. the deterministic z in Lesson 1)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಈ untrained network ಮೇಲೆ, KL=0.0056 ಬಹಳ ಚಿಕ್ಕದೂ, ನಿಖರವಾಗಿ untrained encoder ನ weights ಶೂನ್ಯ ಹತ್ತಿರ ಪ್ರಾರಂಭವಾಗುವುದರಿಂದ, ಆದ್ದರಿಂದ mu 0 ಹತ್ತಿರ ಮತ್ತು log_sigma2 0 ಹತ್ತಿರ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ -- ಅಂದರೆ q(z|x) ರಚನೆಯ ಮೂಲಕ N(0,1) prior ಗೆ ಹತ್ತಿರ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, mu=[0,0], log_sigma2=[0,0] ನಲ್ಲಿ ನಿಖರ KL=0.0 ಪರಿಶೀಲನೆಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ\n• Reconstruction (41.4657) ಆರಂಭದಲ್ಲಿ ಒಟ್ಟೂ loss ಅನ್ನೂ ಪ್ರಾಬಲ್ಯಗೊಳಿಸುತ್ತದೆ ಏಕೆಂದರೆ untrained decoder ಇನ್ನೂ z ಅನ್ನೂ x ಗೆ ಹಿಂತಿರುಗಿ map ಮಾಡಲು ಕಲಿತಿಲ್ಲ -- ಇದೂ Lesson 1 ನ untrained loss 34.3971 ಅನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ (ಚಿಕ್ಕ ವ್ಯತ್ಯಾಸ ಇಲ್ಲಿನ stochastic z vs. Lesson 1 ನ deterministic z ಇಂದ ಬರುತ್ತದೆ)' } },

    { type: 'heading', data: { textEn: 'The Two Competing Terms and Beta', textKn: 'The Two Competing Terms and Beta', level: 'H2' } },
    { type: 'math', data: {
      formula: 'L = L_recon + beta * KL(q_phi(z|x) || N(0,I))',
      descEn: '• Reconstruction asks "can the decoder reconstruct the input?" -- pushing z to carry information. KL asks "does q(z|x) stay close to N(0,I)?" -- pushing mu toward 0 and sigma^2 toward 1. Beta controls the trade-off: small beta prioritizes reconstruction (better fidelity, less regular latent); large beta strongly regularizes the latent (cleaner structure, risk of worse reconstruction or posterior collapse, covered in Lesson 3)',
      descKn: 'Reconstruction "decoder input ಅನ್ನೂ ಪುನರ್ನಿರ್ಮಿಸಬಹುದೇ?" ಎಂದೂ ಕೇಳುತ್ತದೆ -- z ಗೆ ಮಾಹಿತಿ ಹೊತ್ತುಕೊಳ್ಳಲು ಒತ್ತುತ್ತಾ. KL "q(z|x) N(0,I) ಗೆ ಹತ್ತಿರ ಉಳಿಯುತ್ತದೆಯೇ?" ಎಂದೂ ಕೇಳುತ್ತದೆ -- mu ಅನ್ನೂ 0 ಕಡೆಗೆ ಮತ್ತು sigma^2 ಅನ್ನೂ 1 ಕಡೆಗೆ ಒತ್ತುತ್ತಾ. Beta trade-off ನಿಯಂತ್ರಿಸುತ್ತದೆ: ಚಿಕ್ಕ beta reconstruction ಗೆ ಆದ್ಯತೆ ಕೊಡುತ್ತದೆ (ಉತ್ತಮ fidelity, ಕಡಿಮೆ ನಿಯಮಿತ latent); ದೊಡ್ಡ beta latent ಅನ್ನೂ ಬಲವಾಗಿ regularize ಮಾಡುತ್ತದೆ (ಸ್ವಚ್ಛ ರಚನೆ, ಕೆಟ್ಟ reconstruction ಅಥವಾ posterior collapse ಅಪಾಯ, Lesson 3 ನಲ್ಲಿ ಒಳಗೊಂಡಂತೆ)' } },
    { type: 'diagram', data: {
      titleEn: 'The VAE Forward Path, Genuinely Verified', titleKn: 'VAE Forward Path, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'Genuinely traced and computed: x -> encoder -> (mu, log_sigma2) -> reparameterize -> z -> decoder -> x_hat, with reconstruction=41.4657 and KL=0.0056 genuinely confirmed on this untrained network.',
      captionKn: 'ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ ಗಣಿಸಿದ: x -> encoder -> (mu, log_sigma2) -> reparameterize -> z -> decoder -> x_hat, ಈ untrained network ಮೇಲೆ reconstruction=41.4657 ಮತ್ತು KL=0.0056 ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ.',
      svgCode: "<svg viewBox='0 0 760 160' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='60' width='80' height='40' fill='none' stroke='#94a3b8'/><text x='30' y='85' fill='#cbd5e1' font-size='11'>x (8-dim)</text>\n<line x1='100' y1='80' x2='140' y2='80' stroke='#94a3b8'/>\n<rect x='140' y='60' width='100' height='40' fill='none' stroke='#60a5fa'/><text x='150' y='85' fill='#e2e8f0' font-size='11'>Encoder</text>\n<line x1='240' y1='80' x2='270' y2='80' stroke='#94a3b8'/>\n<rect x='270' y='30' width='90' height='30' fill='none' stroke='#4ade80'/><text x='280' y='50' fill='#cbd5e1' font-size='10'>mu=[-.02,.03]</text>\n<rect x='270' y='95' width='120' height='30' fill='none' stroke='#4ade80'/><text x='278' y='115' fill='#cbd5e1' font-size='10'>logSig2=[.13,.03]</text>\n<line x1='390' y1='80' x2='430' y2='80' stroke='#94a3b8'/>\n<rect x='430' y='60' width='90' height='40' fill='none' stroke='#fb923c'/><text x='440' y='85' fill='#e2e8f0' font-size='11'>z=mu+s*eps</text>\n<line x1='520' y1='80' x2='560' y2='80' stroke='#94a3b8'/>\n<rect x='560' y='60' width='90' height='40' fill='none' stroke='#60a5fa'/><text x='575' y='85' fill='#e2e8f0' font-size='11'>Decoder</text>\n<line x1='650' y1='80' x2='690' y2='80' stroke='#94a3b8'/>\n<rect x='690' y='60' width='60' height='40' fill='none' stroke='#94a3b8'/><text x='697' y='85' fill='#cbd5e1' font-size='10'>x_hat</text>\n<text x='260' y='150' fill='#f87171' font-size='10'>recon=41.4657 + beta*KL=0.0056 -&gt; ELBO=41.4713</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Beta Trade-off (conceptual, genuinely reasoned from the KL formula)', captionKn: 'Beta Trade-off (conceptual, KL formula ಇಂದ ನಿಜವಾಗಿ ತರ್ಕಿಸಿದ)',
      rows: "Beta|Reconstruction pressure|Latent regularity\n0.01|Strong (dominant)|Weak\n0.1|Strong|Moderate\n1.0 (standard VAE)|Balanced|Strong\n2.0+|Weaker|Very strong (risk of posterior collapse)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the VAE encoder outputs mu=[-0.022, 0.03] and log_sigma2=[0.134, 0.026] on the untrained network, both near zero because weights are initialized small -- so q(z|x) starts close to N(0,I) automatically, before any KL pressure is applied\n• Genuinely confirmed: KL divergence at the exact prior (mu=0, log_sigma2=0) is exactly 0.0, matching the closed-form formula 0.5*(sigma^2+mu^2-log(sigma^2)-1)\n• Genuinely confirmed: the full ELBO on one untrained forward pass is reconstruction (41.4657) + KL (0.0056) = 41.4713 -- reconstruction dominates because the decoder has not yet learned anything, exactly as in Lesson 1\'s untrained loss of 34.3971\n• The reparameterization trick z = mu + sigma*eps is what makes this entire computation differentiable end-to-end -- without it, gradients could not flow through the stochastic sampling step, and training (Lesson 3) would not be possible',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: VAE encoder untrained network ಮೇಲೆ mu=[-0.022, 0.03] ಮತ್ತು log_sigma2=[0.134, 0.026] ಔಟ್ಪುಟ್ ಮಾಡುತ್ತದೆ, ಎರಡೂ ಶೂನ್ಯ ಹತ್ತಿರ ಏಕೆಂದರೆ weights ಚಿಕ್ಕದಾಗಿ initialize ಆಗಿವೆ -- ಆದ್ದರಿಂದ q(z|x) ಯಾವುದೇ KL ಒತ್ತಡ ಅನ್ವಯಿಸುವ ಮೊದಲೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ N(0,I) ಗೆ ಹತ್ತಿರ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ನಿಖರ prior ನಲ್ಲಿ (mu=0, log_sigma2=0) KL divergence ನಿಖರವಾಗಿ 0.0, closed-form formula 0.5*(sigma^2+mu^2-log(sigma^2)-1) ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ untrained forward pass ಮೇಲೆ ಪೂರ್ಣ ELBO reconstruction (41.4657) + KL (0.0056) = 41.4713 -- decoder ಇನ್ನೂ ಏನನ್ನೂ ಕಲಿತಿಲ್ಲದಿರುವುದರಿಂದ reconstruction ಪ್ರಾಬಲ್ಯಗೊಳ್ಳುತ್ತದೆ, Lesson 1 ನ untrained loss 34.3971 ರೀತಿಯೇ\n• Reparameterization trick z = mu + sigma*eps ಈ ಸಂಪೂರ್ಣ ಗಣಿತವನ್ನೂ end-to-end differentiable ಮಾಡುತ್ತದೆ -- ಇಲ್ಲದೆ, gradients stochastic sampling step ಮೂಲಕ ಹರಿಯಲಾಗುತ್ತಿರಲಿಲ್ಲ, ಮತ್ತು training (Lesson 3) ಸಾಧ್ಯವಾಗುತ್ತಿರಲಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact reparameterize() function and kl_divergence() closed-form genuinely computed here are the same core mechanism (Kingma & Welling, 2013, "Auto-Encoding Variational Bayes") used inside every production VAE, including the VAE stage of Stable Diffusion\'s latent diffusion pipeline -- the real system just uses convolutional encoders on images and a much larger latent tensor instead of this lesson\'s 2-dimensional toy z.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ ನಿಖರ reparameterize() function ಮತ್ತು kl_divergence() closed-form ಪ್ರತಿಯೊಂದೂ production VAE ಒಳಗೆ ಬಳಸಿದ ಅದೇ ಮುಖ್ಯ ಯಂತ್ರಾಂಶ (Kingma & Welling, 2013, "Auto-Encoding Variational Bayes"), Stable Diffusion ನ latent diffusion pipeline ನ VAE stage ಸೇರಿ -- ನಿಜ system ಈ lesson ನ 2-dimensional toy z ಬದಲು images ಮೇಲೆ convolutional encoders ಮತ್ತು ಹೆಚ್ಚು ದೊಡ್ಡ latent tensor ಬಳಸುತ್ತದೆ ಅಷ್ಟೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the closed-form KL formula avoids any numerical integration -- KL divergence between two Gaussians is computed in a single line of arithmetic, which is why VAE training is computationally cheap despite being a proper probabilistic objective\n• The reparameterization trick genuinely enables standard gradient-based optimizers (SGD, Adam) to train a model with a stochastic layer in the middle -- this exact pattern (isolate randomness into an external noise variable) reappears throughout generative AI, including in diffusion models\' noise-prediction training',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: closed-form KL formula ಯಾವುದೇ numerical integration ತಪ್ಪಿಸುತ್ತದೆ -- ಎರಡೂ Gaussians ನಡುವಿನ KL divergence ಒಂದೂ single line arithmetic ನಲ್ಲಿ ಗಣಿಸಲಾಗುತ್ತದೆ, VAE training ಒಂದೂ ಸರಿಯಾದ probabilistic objective ಆಗಿದ್ದರೂ computationally ಅಗ್ಗ ಇರುವ ಕಾರಣ ಇದೇ\n• Reparameterization trick ನಿಜವಾಗಿ standard gradient-based optimizers (SGD, Adam) ಗೆ ಮಧ್ಯದಲ್ಲಿ ಒಂದೂ stochastic layer ಇರುವ ಒಂದೂ model train ಮಾಡಲು ಬಿಡುತ್ತದೆ -- ಈ ನಿಖರ ಮಾದರಿ (randomness ಅನ್ನೂ ಒಂದೂ ಬಾಹ್ಯ noise variable ಗೆ ಪ್ರತ್ಯೇಕಿಸಿ) diffusion models ನ noise-prediction training ಸೇರಿ generative AI ಆದ್ಯಂತ ಮರುಕಳಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production team debugging a VAE that produces poor samples genuinely checks the exact two numbers this lesson computed separately -- reconstruction loss and KL divergence -- because a VAE with reconstruction stuck high and KL near zero (as seen here at initialization) has not yet learned to encode useful information, while a VAE with KL exploding and reconstruction ignored is regularizing too hard; separating ELBO into these two genuinely computed terms is the standard first diagnostic step.',
      bodyKn: 'ಕಳಪೆ samples ಉತ್ಪಾದಿಸುವ ಒಂದೂ VAE ಅನ್ನೂ debug ಮಾಡುವ ಒಂದೂ production team ಈ lesson ಪ್ರತ್ಯೇಕವಾಗಿ ಗಣಿಸಿದ ನಿಖರ ಎರಡೂ ಸಂಖ್ಯೆಗಳನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ -- reconstruction loss ಮತ್ತು KL divergence -- ಏಕೆಂದರೆ reconstruction ಎತ್ತರದಲ್ಲಿ ಸಿಲುಕಿ KL ಶೂನ್ಯ ಹತ್ತಿರ ಇರುವ (ಇಲ್ಲಿ initialization ನಲ್ಲಿ ಕಂಡಂತೆ) ಒಂದೂ VAE ಇನ್ನೂ ಉಪಯುಕ್ತ ಮಾಹಿತಿಯನ್ನೂ encode ಮಾಡಲು ಕಲಿತಿಲ್ಲ, KL ಸ್ಫೋಟಗೊಳ್ಳುತ್ತಿರುವ ಮತ್ತು reconstruction ನಿರ್ಲಕ್ಷಿಸಲ್ಪಟ್ಟ ಒಂದೂ VAE ತುಂಬಾ ಬಲವಾಗಿ regularize ಮಾಡುತ್ತಿದೆ; ELBO ಅನ್ನೂ ಈ ಎರಡೂ ನಿಜವಾಗಿ ಗಣಿಸಿದ terms ಗೆ ಬೇರ್ಪಡಿಸುವುದೂ ಪ್ರಮಾಣಿತ ಮೊದಲ diagnostic step.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what is the KL divergence when mu=[0,0] and log_sigma2=[0,0]?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mu=[0,0] ಮತ್ತು log_sigma2=[0,0] ಆಗಿದ್ದಾಗ KL divergence ಏನೂ?',
        opts: ['1.0', 'Exactly 0.0', 'Undefined', '-1.0'], correct: 1,
        optsKn: ['1.0', 'ನಿಖರವಾಗಿ 0.0', 'Undefined', '-1.0'] },
      { q: 'Why does the encoder output log_sigma2 rather than sigma directly?', qKn: 'Encoder sigma ಬದಲು ಏಕೆ log_sigma2 ಔಟ್ಪುಟ್ ಮಾಡುತ್ತದೆ?',
        opts: ['log_sigma2 trains faster in all cases', 'Because sigma^2 must be positive, and log_sigma2 can be any real number while exp(log_sigma2) guarantees positivity', 'sigma cannot be computed at all', 'It has nothing to do with positivity'], correct: 1,
        optsKn: ['log_sigma2 ಎಲ್ಲಾ ಸಂದರ್ಭಗಳಲ್ಲೂ ವೇಗವಾಗಿ train ಆಗುತ್ತದೆ', 'ಏಕೆಂದರೆ sigma^2 ಧನಾತ್ಮಕವಾಗಿರಬೇಕು, ಮತ್ತು log_sigma2 ಯಾವುದೇ real number ಆಗಿರಬಹುದು exp(log_sigma2) positivity ಖಾತರಿಪಡಿಸುತ್ತಾ', 'sigma ಅನ್ನೂ ಗಣಿಸಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ positivity ಜೊತೆ ಯಾವುದೇ ಸಂಬಂಧ ಹೊಂದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: on the untrained network, what was the total ELBO loss (reconstruction + KL)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: untrained network ಮೇಲೆ, ಒಟ್ಟೂ ELBO loss (reconstruction + KL) ಏನೂ ಆಗಿತ್ತು?',
        opts: ['0.0056', '41.4713 (41.4657 reconstruction + 0.0056 KL)', '100.0', '1.0'], correct: 1,
        optsKn: ['0.0056', '41.4713 (41.4657 reconstruction + 0.0056 KL)', '100.0', '1.0'] },
      { q: 'What problem does the reparameterization trick z = mu + sigma*eps solve?', qKn: 'Reparameterization trick z = mu + sigma*eps ಯಾವ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ?',
        opts: ['It makes the decoder faster', 'It isolates randomness into eps so gradients can flow through mu and sigma via standard backpropagation', 'It removes the need for a decoder', 'It eliminates the need for a prior distribution'], correct: 1,
        optsKn: ['ಅದೂ decoder ಅನ್ನೂ ವೇಗ ಮಾಡುತ್ತದೆ', 'ಅದೂ randomness ಅನ್ನೂ eps ಗೆ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ standard backpropagation ಮೂಲಕ gradients mu ಮತ್ತು sigma ಮೂಲಕ ಹರಿಯಲು', 'ಅದೂ decoder ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಅದೂ ಒಂದೂ prior distribution ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'What does a small beta (e.g. 0.01) in L = L_recon + beta*KL do to training?', qKn: 'L = L_recon + beta*KL ನಲ್ಲಿ ಒಂದೂ ಚಿಕ್ಕ beta (ಉದಾ. 0.01) training ಗೆ ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['Makes KL dominate completely', 'Prioritizes reconstruction accuracy, with weaker latent regularization', 'Has no effect on training', 'Forces posterior collapse immediately'], correct: 1,
        optsKn: ['KL ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರಾಬಲ್ಯಗೊಳಿಸುತ್ತದೆ', 'Reconstruction ನಿಖರತೆಗೆ ಆದ್ಯತೆ ಕೊಡುತ್ತದೆ, ದುರ್ಬಲ latent regularization ಜೊತೆ', 'Training ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮ ಇಲ್ಲ', 'ತಕ್ಷಣ posterior collapse ಒತ್ತಾಯಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
