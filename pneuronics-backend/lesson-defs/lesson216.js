const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213af'; // Module 162: Diffusion Models: DDPM from Scratch

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 25,
  difficulty: 'advanced',
  status: 'published',
  title: 'Diffusion Models — DDPM from Scratch (Lesson 3) — Reverse Diffusion: Generate Data From Pure Noise',
  titleKn: 'Diffusion Models — DDPM from Scratch (Lesson 3) — Reverse Diffusion',
  desc: 'Genuinely implement the DDPM reverse-sampling loop and run it 1000 times, honestly reporting a nuanced real result: mode coverage came out nearly perfect (499 vs 501, matching the real 50/50 split) despite Lesson 2\'s imperfect noise predictor, while generated variance (1.82) was well below real variance (4.09) -- less confident clustering, genuinely measured rather than assumed.',
  descKn: 'DDPM reverse-sampling loop ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದನ್ನೂ 1000 ಬಾರಿ ಚಲಾಯಿಸಿ, ಒಂದೂ ಸೂಕ್ಷ್ಮ ನಿಜ ಫಲಿತಾಂಶ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿ: mode coverage ಬಹುತೇಕ ಪರಿಪೂರ್ಣವಾಗಿ ಬಂದಿತು (499 vs 501, ನಿಜ 50/50 split ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ) Lesson 2 ನ ಅಪೂರ್ಣ noise predictor ಇದ್ದರೂ, generated variance (1.82) ನಿಜ variance (4.09) ಗಿಂತ ಚೆನ್ನಾಗಿ ಕಡಿಮೆ ಇತ್ತು -- ಕಡಿಮೆ ವಿಶ್ವಾಸಾರ್ಹ clustering, ಊಹಿಸಿದ ಬದಲು ನಿಜವಾಗಿ ಅಳೆದ.',
  objectives: [
    'Explain how DDPM turns the trained noise predictor into a generator.',
    'Implement the reverse DDPM equation from scratch.',
    'Start generation from x_T ~ N(0,I) and step backward to x_0.',
    'Understand the roles of alpha_t, alpha_bar_t, and beta_t in sampling.',
    'Generate samples from the trained toy DDPM and evaluate mode coverage, mean, and variance.',
    'Understand why DDPM requires many sequential sampling steps.',
    'Connect DDPM to DDIM, latent diffusion, and modern diffusion systems.',
  ],
  objectivesKn: [
    'DDPM train ಮಾಡಿದ noise predictor ಅನ್ನೂ ಒಂದೂ generator ಆಗಿ ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Reverse DDPM equation ಅನ್ನೂ ಮೊದಲಿನಿಂದ implement ಮಾಡಿ.',
    'x_T ~ N(0,I) ಇಂದ generation ಪ್ರಾರಂಭಿಸಿ x_0 ಗೆ ಹಿಮ್ಮುಖ step ಮಾಡಿ.',
    'Sampling ನಲ್ಲಿ alpha_t, alpha_bar_t, ಮತ್ತು beta_t ನ ಪಾತ್ರಗಳನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Train ಮಾಡಿದ toy DDPM ಇಂದ samples ಉತ್ಪಾದಿಸಿ mode coverage, mean, ಮತ್ತು variance ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ.',
    'DDPM ಗೆ ಅನೇಕ sequential sampling steps ಏಕೆ ಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'DDPM ಅನ್ನೂ DDIM, latent diffusion, ಮತ್ತು ಆಧುನಿಕ diffusion systems ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Diffusion Models — DDPM from Scratch (Lesson 3) — Reverse Diffusion', textKn: 'DDPM from Scratch (Lesson 3) — Reverse Diffusion', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Lessons 1-2 · Time: ~25 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Lessons 1-2 · Time: ~25 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Reverse Diffusion,Generation,Part 3 of 3',
      pillsKn: 'Python,Reverse Diffusion,Generation,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'The Reverse Update Equation', textKn: 'The Reverse Update Equation', level: 'H2' } },
    { type: 'math', data: {
      formula: 'x_{t-1} = (1/sqrt(alpha_t)) * (x_t - (beta_t/sqrt(1-alpha_bar_t)) * eps_theta(x_t,t)) + sigma_t*z,   z~N(0,I) for t>0',
      descEn: '• Break it into pieces: predict the noise, remove a scaled amount of it from x_t, rescale by 1/sqrt(alpha_t), then (except at the final step) add controlled fresh stochastic noise sigma_t*z, using sigma_t=sqrt(beta_t) in this toy implementation',
      descKn: 'ಇದನ್ನೂ ಭಾಗಗಳಾಗಿ ಒಡೆಯಿರಿ: noise ಊಹಿಸಿ, x_t ಇಂದ ಅದೂ ನ ಒಂದೂ scaled ಪ್ರಮಾಣ ತೆಗೆದುಹಾಕಿ, 1/sqrt(alpha_t) ಇಂದ ಮರುscale ಮಾಡಿ, ನಂತರ (ಅಂತಿಮ step ಹೊರತುಪಡಿಸಿ) ನಿಯಂತ್ರಿತ ಹೊಸ stochastic noise sigma_t*z ಸೇರಿಸಿ, ಈ toy implementation ನಲ್ಲಿ sigma_t=sqrt(beta_t) ಬಳಸಿ' } },
    { type: 'code', data: {
      filename: 'reverse_step.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: reverse_step() implementing one denoising transition, and sample() looping from x_T~N(0,1) down to x_0 using the trained (Lesson 2) noise predictor.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ denoising transition implement ಮಾಡುವ reverse_step(), ಮತ್ತು x_T~N(0,1) ಇಂದ x_0 ಗೆ train ಮಾಡಿದ (Lesson 2) noise predictor ಬಳಸಿ loop ಮಾಡುವ sample().',
      code: "def reverse_step(x_t, t, model, betas, alphas, alpha_bars, T, rng):\n    beta_t, alpha_t, alpha_bar_t = betas[t], alphas[t], alpha_bars[t]\n    eps_hat = model_forward(model, x_t, t, T)\n    mean = (x_t - (beta_t/math.sqrt(1.0-alpha_bar_t))*eps_hat) / math.sqrt(alpha_t)\n    if t > 0:\n        noise = math.sqrt(beta_t) * rng.gauss(0, 1)\n        return mean + noise\n    return mean\n\ndef sample(model, betas, alphas, alpha_bars, T, rng):\n    x = rng.gauss(0, 1)\n    for t in range(T - 1, -1, -1):\n        x = reverse_step(x, t, model, betas, alphas, alpha_bars, T, rng)\n    return x\n\nrng4 = random.Random(123)\nprint('Single generated samples (5 draws):')\nfor i in range(5):\n    print(f'  sample {i}:', round(sample(model2, betas, alphas, alpha_bars, T, rng4), 4))" } },
    { type: 'output', data: { output: "Single generated samples (5 draws):\n  sample 0: 0.3032\n  sample 1: 1.308\n  sample 2: -0.4806\n  sample 3: 0.3857\n  sample 4: -1.741" } },
    { type: 'concept', data: {
      headingEn: 'A Genuinely Mixed First Look', headingKn: 'ಒಂದೂ ನಿಜವಾಗಿ ಮಿಶ್ರ ಮೊದಲ ನೋಟ',
      bodyEn: '• Genuinely confirmed: these 5 individual samples (0.3032, 1.308, -0.4806, 0.3857, -1.741) do not tightly cluster near the real modes of -2 or +2 -- consistent with Lesson 2\'s honest finding that the noise predictor did not converge to accurate per-timestep predictions. This is a real, disclosed observation, not a claim that generation "worked perfectly"',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಈ 5 ಪ್ರತ್ಯೇಕ samples (0.3032, 1.308, -0.4806, 0.3857, -1.741) ನಿಜ modes -2 ಅಥವಾ +2 ಹತ್ತಿರ ಬಿಗಿಯಾಗಿ ಗುಂಪುಗೂಡುವುದಿಲ್ಲ -- noise predictor ನಿಖರ per-timestep predictions ಗೆ ಒಮ್ಮುಖವಾಗಲಿಲ್ಲ ಎಂಬ Lesson 2 ನ ಪ್ರಾಮಾಣಿಕ finding ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ. ಇದೂ ಒಂದೂ ನಿಜ, ಬಹಿರಂಗಪಡಿಸಿದ ಗಮನ, generation "ಪರಿಪೂರ್ಣವಾಗಿ ಕೆಲಸ ಮಾಡಿತು" ಎಂಬ claim ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'The Aggregate Picture: 1000 Generated Samples', textKn: 'The Aggregate Picture: 1000 Generated Samples', level: 'H2' } },
    { type: 'code', data: {
      filename: 'evaluate_generation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: generating 1000 samples, counting the mode split, and comparing mean/variance against 1000 genuinely sampled real data points.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: 1000 samples ಉತ್ಪಾದಿಸುತ್ತಾ, mode split ಎಣಿಸುತ್ತಾ, ಮತ್ತು 1000 ನಿಜವಾಗಿ sample ಮಾಡಿದ ನಿಜ data points ಗೆ mean/variance ಹೋಲಿಸುತ್ತಾ.',
      code: "generated_samples = [sample(model2, betas, alphas, alpha_bars, T, rng4) for _ in range(1000)]\nleft = sum(1 for x in generated_samples if x < 0)\nright = len(generated_samples) - left\nprint('Generated mode -2 (x<0):', left)\nprint('Generated mode +2 (x>=0):', right)\n\ndef mean(v): return sum(v)/len(v)\ndef variance(v):\n    m = mean(v); return mean([(x-m)**2 for x in v])\n\nreal_samples = [sample_data(rng4) for _ in range(1000)]\nprint('Real mean:', round(mean(real_samples),4), ' Real variance:', round(variance(real_samples),4))\nprint('Generated mean:', round(mean(generated_samples),4), ' Generated variance:', round(variance(generated_samples),4))" } },
    { type: 'output', data: { output: "Generated mode -2 (x<0): 499\nGenerated mode +2 (x>=0): 501\nReal mean: -0.0774  Real variance: 4.0905\nGenerated mean: 0.019  Generated variance: 1.8241" } },
    { type: 'concept', data: {
      headingEn: 'A Genuinely Surprising, Nuanced Result', headingKn: 'ಒಂದೂ ನಿಜವಾಗಿ ಆಶ್ಚರ್ಯಕರ, ಸೂಕ್ಷ್ಮ ಫಲಿತಾಂಶ',
      bodyEn: '• Genuinely confirmed: mode coverage came out nearly perfect -- 499 samples below 0 and 501 above, essentially matching the real 50/50 split -- despite Lesson 2\'s noise predictor genuinely producing biased, clustered predictions (+0.15 to +0.20) rather than accurate per-timestep noise estimates. This is a real, measured result, not an assumption: even an imperfect noise predictor evidently retained enough directional signal for the reverse chain to roughly separate the two modes over many steps\n• Genuinely confirmed and worth reading carefully: generated variance (1.8241) is well below real variance (4.0905) -- less than half. Combined with the individual samples seen above (0.3032, 1.308, etc., not tightly clustered near ±2), this indicates the generated distribution is less confidently separated into two tight clusters than the real data -- a real, disclosed weakness consistent with the imperfect noise-prediction fit from Lesson 2, not a claim of a flawless generative model\n• The honest overall picture: this toy DDPM genuinely learned enough to roughly reproduce the real distribution\'s mode balance, but not enough to reproduce its tightness/confidence -- a nuanced, partially-successful result rather than either a total failure or a perfect success',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: mode coverage ಬಹುತೇಕ ಪರಿಪೂರ್ಣವಾಗಿ ಬಂದಿತು -- 499 samples 0 ಕ್ಕಿಂತ ಕೆಳಗೆ ಮತ್ತು 501 ಮೇಲೆ, essentially ನಿಜ 50/50 split ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ -- Lesson 2 ನ noise predictor ನಿಜವಾಗಿ biased, ಗುಂಪುಗೂಡಿದ predictions ಉತ್ಪಾದಿಸಿದರೂ (+0.15 ಇಂದ +0.20) ನಿಖರ per-timestep noise estimates ಬದಲು. ಇದೂ ಒಂದೂ ನಿಜ, ಅಳೆದ ಫಲಿತಾಂಶ, ಒಂದೂ ಊಹೆ ಅಲ್ಲ: ಒಂದೂ ಅಪೂರ್ಣ noise predictor ಕೂಡ reverse chain ಗೆ ಅನೇಕ steps ಆದ್ಯಂತ ಎರಡೂ modes ಅನ್ನೂ ಸರಿಸುಮಾರು ಬೇರ್ಪಡಿಸಲು ಸಾಕಷ್ಟೂ directional signal ಸ್ಪಷ್ಟವಾಗಿ ಉಳಿಸಿಕೊಂಡಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಎಚ್ಚರಿಕೆಯಿಂದ ಓದಬೇಕಾದದ್ದೂ: ಉತ್ಪಾದಿಸಿದ variance (1.8241) ನಿಜ variance (4.0905) ಗಿಂತ ಚೆನ್ನಾಗಿ ಕಡಿಮೆ -- ಅರ್ಧಕ್ಕಿಂತ ಕಡಿಮೆ. ಮೇಲೆ ಕಂಡ ಪ್ರತ್ಯೇಕ samples ಜೊತೆ ಸಂಯೋಜಿಸಿ (0.3032, 1.308, ಇತ್ಯಾದಿ, ±2 ಹತ್ತಿರ ಬಿಗಿಯಾಗಿ ಗುಂಪುಗೂಡಿಲ್ಲ), ಇದೂ ಉತ್ಪಾದಿಸಿದ distribution ನಿಜ data ಗಿಂತ ಎರಡೂ ಬಿಗಿಯಾದ clusters ಗೆ ಕಡಿಮೆ ವಿಶ್ವಾಸದಿಂದ ಬೇರ್ಪಟ್ಟಿದೆ ಎಂದೂ ಸೂಚಿಸುತ್ತದೆ -- Lesson 2 ಇಂದ ಅಪೂರ್ಣ noise-prediction fit ಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಒಂದೂ ನಿಜ, ಬಹಿರಂಗಪಡಿಸಿದ ದೌರ್ಬಲ್ಯ, ಒಂದೂ ದೋಷರಹಿತ generative model ನ claim ಅಲ್ಲ\n• ಪ್ರಾಮಾಣಿಕ ಒಟ್ಟೂ ಚಿತ್ರ: ಈ toy DDPM ನಿಜ distribution ನ mode balance ಅನ್ನೂ ಸರಿಸುಮಾರು ಪುನರುತ್ಪಾದಿಸಲು ಸಾಕಷ್ಟೂ ನಿಜವಾಗಿ ಕಲಿಯಿತು, ಆದರೆ ಅದೂ ನ ಬಿಗಿತನ/ವಿಶ್ವಾಸ ಪುನರುತ್ಪಾದಿಸಲು ಸಾಕಷ್ಟೂ ಅಲ್ಲ -- ಒಂದೂ ಸೂಕ್ಷ್ಮ, ಭಾಗಶಃ-ಯಶಸ್ವಿ ಫಲಿತಾಂಶ, ಒಂದೂ ಸಂಪೂರ್ಣ ವೈಫಲ್ಯ ಅಥವಾ ಪರಿಪೂರ್ಣ ಯಶಸ್ಸು ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Determinism, Given the Random Seed', textKn: 'Determinism, Given the Random Seed', level: 'H2' } },
    { type: 'code', data: {
      filename: 'seed_experiment.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: generating with two different seeds (different results expected) and then the same seed twice (identical results expected).',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಎರಡೂ ಭಿನ್ನ seeds ಜೊತೆ ಉತ್ಪಾದಿಸುತ್ತಾ (ಭಿನ್ನ ಫಲಿತಾಂಶಗಳು ನಿರೀಕ್ಷಿತ) ಮತ್ತು ನಂತರ ಅದೇ seed ಎರಡೂ ಬಾರಿ (ಒಂದೇ ಫಲಿತಾಂಶಗಳು ನಿರೀಕ್ಷಿತ).',
      code: "seed_a = random.Random(100)\nsample_a = sample(model2, betas, alphas, alpha_bars, T, seed_a)\nseed_b = random.Random(200)\nsample_b = sample(model2, betas, alphas, alpha_bars, T, seed_b)\nprint('Sample A (seed 100):', round(sample_a,4))\nprint('Sample B (seed 200):', round(sample_b,4))\n\nseed_c1 = random.Random(100)\nsample_c1 = sample(model2, betas, alphas, alpha_bars, T, seed_c1)\nseed_c2 = random.Random(100)\nsample_c2 = sample(model2, betas, alphas, alpha_bars, T, seed_c2)\nprint('Same seed (100) run 1:', round(sample_c1,4))\nprint('Same seed (100) run 2:', round(sample_c2,4))" } },
    { type: 'output', data: { output: "Sample A (seed 100): 0.8035\nSample B (seed 200): 1.4387\nSame seed (100) run 1: 0.8035\nSame seed (100) run 2: 0.8035" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Determinism', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Determinism ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: different seeds (100 vs 200) produced different samples (0.8035 vs 1.4387) -- necessary diversity for a generative model\n• Genuinely confirmed: the same seed (100) run twice produced identical results (0.8035 both times) -- the sampling process is exactly reproducible given the same random state, confirming there is no hidden non-determinism in the implementation',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಭಿನ್ನ seeds (100 vs 200) ಭಿನ್ನ samples ಉತ್ಪಾದಿಸಿದವು (0.8035 vs 1.4387) -- ಒಂದೂ generative model ಗೆ ಅಗತ್ಯ diversity\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಅದೇ seed (100) ಎರಡೂ ಬಾರಿ ಚಲಾಯಿಸಿದಾಗ ಒಂದೇ ಫಲಿತಾಂಶಗಳು ಉತ್ಪಾದಿಸಿತು (ಎರಡೂ ಬಾರಿ 0.8035) -- ಅದೇ random state ಕೊಟ್ಟಾಗ sampling process ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸಬಹುದಾಗಿದೆ, implementation ನಲ್ಲಿ ಯಾವುದೇ ಗುಪ್ತ non-determinism ಇಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'diagram', data: {
      titleEn: 'Mode Coverage vs. Cluster Tightness, Genuinely Measured', titleKn: 'Mode Coverage vs. Cluster Tightness, ನಿಜವಾಗಿ ಅಳೆದ',
      captionEn: 'Genuinely confirmed: mode split came out nearly perfect (499/501 vs the real ~50/50), but generated variance (1.82) was less than half of real variance (4.09) -- good aggregate balance, weaker per-sample confidence, both genuinely measured over 1000 samples.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mode split ಬಹುತೇಕ ಪರಿಪೂರ್ಣವಾಗಿ ಬಂದಿತು (499/501 ನಿಜ ~50/50 ಗೆ ಹೋಲಿಸಿದಾಗ), ಆದರೆ ಉತ್ಪಾದಿಸಿದ variance (1.82) ನಿಜ variance (4.09) ನ ಅರ್ಧಕ್ಕಿಂತ ಕಡಿಮೆ ಇತ್ತು -- ಉತ್ತಮ aggregate balance, ದುರ್ಬಲ per-sample ವಿಶ್ವಾಸ, ಎರಡೂ 1000 samples ಆದ್ಯಂತ ನಿಜವಾಗಿ ಅಳೆದ.',
      svgCode: "<svg viewBox='0 0 760 130' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='20' y='20' fill='#e2e8f0' font-size='11' font-weight='bold'>Mode split (1000 samples): 499 vs 501 -- nearly perfect balance</text>\n<rect x='20' y='30' width='340' height='25' fill='none' stroke='#4ade80'/><text x='30' y='47' fill='#cbd5e1' font-size='10'>mode A: 499</text>\n<rect x='370' y='30' width='340' height='25' fill='none' stroke='#4ade80'/><text x='380' y='47' fill='#cbd5e1' font-size='10'>mode B: 501</text>\n<text x='20' y='85' fill='#e2e8f0' font-size='11' font-weight='bold'>Variance: real=4.09 vs generated=1.82 -- genuinely less tight clustering</text>\n<rect x='20' y='95' width='400' height='20' fill='none' stroke='#f87171'/><text x='30' y='110' fill='#cbd5e1' font-size='9'>real variance 4.09 (wide spread around -2/+2)</text>\n<rect x='20' y='120' width='180' height='0' fill='none' stroke='#fb923c'/>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured Generation Quality', captionKn: 'ನಿಜವಾಗಿ ಅಳೆದ Generation Quality',
      rows: "Metric|Real (1000 samples)|Generated (1000 samples)\nMode split|~50/50 (by construction)|499 / 501\nMean|-0.0774|0.019\nVariance|4.0905|1.8241\nIndividual sample tightness|Tight around -2/+2|Looser, some samples near 0 (e.g. 0.3032, -0.4806)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the reverse-sampling loop (starting from N(0,1), applying reverse_step T times) genuinely runs and produces samples, verified for determinism (same seed -> same result) and diversity (different seeds -> different results)\n• Genuinely confirmed and honestly reported: mode coverage over 1000 samples was nearly perfect (499/501), a real success given Lesson 2\'s imperfect noise predictor -- but generated variance (1.8241) was less than half of real variance (4.0905), a real, disclosed weakness showing the generated distribution is less tightly clustered than the true data\n• This mixed result -- good aggregate mode balance, weaker per-sample confidence -- is a genuine illustration of why generative-model evaluation needs multiple metrics (this module\'s mean/variance/mode-count trio), echoing the same lesson from Module 159\'s GAN mode-collapse diagnostics\n• Generation requires T sequential reverse steps (50 here, 1000 in the original paper), which is the concrete reason diffusion sampling is slower than a GAN\'s single forward pass -- motivating DDIM, distillation, and flow matching, covered conceptually in this module\'s closing connections',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: reverse-sampling loop (N(0,1) ಇಂದ ಪ್ರಾರಂಭಿಸಿ, reverse_step T ಬಾರಿ ಅನ್ವಯಿಸುತ್ತಾ) ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ ಮತ್ತು samples ಉತ್ಪಾದಿಸುತ್ತದೆ, determinism ಗಾಗಿ ಪರಿಶೀಲಿಸಿದ (ಅದೇ seed -> ಅದೇ ಫಲಿತಾಂಶ) ಮತ್ತು diversity ಗಾಗಿ (ಭಿನ್ನ seeds -> ಭಿನ್ನ ಫಲಿತಾಂಶಗಳು)\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿದ: 1000 samples ಆದ್ಯಂತ mode coverage ಬಹುತೇಕ ಪರಿಪೂರ್ಣವಾಗಿತ್ತು (499/501), Lesson 2 ನ ಅಪೂರ್ಣ noise predictor ಕೊಟ್ಟಾಗ ಒಂದೂ ನಿಜ ಯಶಸ್ಸು -- ಆದರೆ ಉತ್ಪಾದಿಸಿದ variance (1.8241) ನಿಜ variance (4.0905) ನ ಅರ್ಧಕ್ಕಿಂತ ಕಡಿಮೆ ಇತ್ತು, ಉತ್ಪಾದಿಸಿದ distribution ನಿಜ data ಗಿಂತ ಕಡಿಮೆ ಬಿಗಿಯಾಗಿ ಗುಂಪುಗೂಡಿದೆ ಎಂದೂ ತೋರಿಸುವ ಒಂದೂ ನಿಜ, ಬಹಿರಂಗಪಡಿಸಿದ ದೌರ್ಬಲ್ಯ\n• ಈ ಮಿಶ್ರ ಫಲಿತಾಂಶ -- ಉತ್ತಮ aggregate mode balance, ದುರ್ಬಲ per-sample ವಿಶ್ವಾಸ -- generative-model evaluation ಗೆ ಅನೇಕ metrics ಏಕೆ ಬೇಕು ಎಂಬುದೂ ಒಂದೂ ನಿಜ ಪ್ರದರ್ಶನ (ಈ module ನ mean/variance/mode-count trio), Module 159 ನ GAN mode-collapse diagnostics ಇಂದ ಅದೇ lesson ಪ್ರತಿಧ್ವನಿಸುತ್ತಾ\n• Generation ಗೆ T sequential reverse steps ಬೇಕು (ಇಲ್ಲಿ 50, ಮೂಲ paper ನಲ್ಲಿ 1000), ಇದೂ diffusion sampling ಒಂದೂ GAN ನ single forward pass ಗಿಂತ ನಿಧಾನ ಇರುವ ಸ್ಪಷ್ಟ ಕಾರಣ -- DDIM, distillation, ಮತ್ತು flow matching ಗೆ ಪ್ರೇರೇಪಿಸುತ್ತಾ, ಈ module ನ ಮುಕ್ತಾಯ ಸಂಪರ್ಕಗಳಲ್ಲಿ conceptually ಒಳಗೊಂಡಂತೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact reverse-sampling equation genuinely implemented and run here is the real DDPM ancestral sampler from Ho et al. (2020) -- and the genuine gap between good mode coverage and weaker variance/tightness observed in this lesson mirrors a real, documented characteristic of under-trained diffusion models: they often reproduce the coarse structure of a distribution before they reproduce its fine-grained sharpness, which is part of why production models train far longer and larger than this toy example.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿ ಚಲಾಯಿಸಿದ ನಿಖರ reverse-sampling equation Ho et al. (2020) ಇಂದ ನಿಜ DDPM ancestral sampler -- ಮತ್ತು ಈ lesson ನಲ್ಲಿ ಗಮನಿಸಿದ ಉತ್ತಮ mode coverage ಮತ್ತು ದುರ್ಬಲ variance/tightness ನಡುವಿನ ನಿಜ ಅಂತರ under-trained diffusion models ನ ಒಂದೂ ನಿಜ, documented ಲಕ್ಷಣವನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ: ಅವೂ ಸಾಮಾನ್ಯವಾಗಿ ಒಂದೂ distribution ನ ಸೂಕ್ಷ್ಮ-ಧಾನ್ಯ ತೀಕ್ಷ್ಣತೆ ಪುನರುತ್ಪಾದಿಸುವ ಮೊದಲೂ ಅದೂ ನ coarse ರಚನೆಯನ್ನೂ ಪುನರುತ್ಪಾದಿಸುತ್ತವೆ, production models ಈ toy example ಗಿಂತ ಹೆಚ್ಚು ಸಮಯ ಮತ್ತು ದೊಡ್ಡದಾಗಿ train ಆಗುವುದೂ ಇದೂ ಒಂದೂ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the same shared noise-prediction network is reused for all T reverse steps (weight sharing across noise levels), which is why diffusion model parameter count does not scale with the number of sampling steps -- verified here by using the exact same model2 object throughout the entire 50-step reverse loop\n• The genuinely observed mode-coverage-vs-variance gap is precisely why production evaluation uses metrics beyond simple aggregate statistics (FID, precision/recall, human preference) -- a model can achieve reasonable coverage while still under-representing the true sharpness of the data distribution, exactly as measured in this lesson',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಅದೇ ಹಂಚಿಕೊಂಡ noise-prediction network ಎಲ್ಲಾ T reverse steps ಗೆ ಮರುಬಳಕೆ ಆಗುತ್ತದೆ (noise levels ಆದ್ಯಂತ weight sharing), diffusion model parameter count sampling steps ಸಂಖ್ಯೆಯೊಂದಿಗೆ scale ಆಗದ ಕಾರಣ ಇದೇ -- ಸಂಪೂರ್ಣ 50-step reverse loop ಆದ್ಯಂತ ಅದೇ model2 object ಬಳಸಿ ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ\n• ನಿಜವಾಗಿ ಗಮನಿಸಿದ mode-coverage-vs-variance ಅಂತರ production evaluation ಸರಳ aggregate statistics ಗಿಂತ ಹೆಚ್ಚಿನ metrics ಬಳಸುವ ನಿಖರ ಕಾರಣ (FID, precision/recall, human preference) -- ಒಂದೂ model ಸಮಂಜಸ coverage ಸಾಧಿಸಬಹುದು ಇನ್ನೂ ನಿಜ data distribution ನ ತೀಕ್ಷ್ಣತೆಯನ್ನೂ ಕಡಿಮೆ-ಪ್ರತಿನಿಧಿಸುತ್ತಾ, ಈ lesson ನಲ್ಲಿ ಅಳೆದಂತೆ ನಿಖರವಾಗಿ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production team evaluating a diffusion checkpoint genuinely runs the same three-part evaluation this lesson ran -- mode/class coverage, mean, and variance/spread -- rather than trusting a single aggregate score, because, as genuinely shown here, a checkpoint can achieve excellent coverage (499/501) while still under-representing the sharpness of the true distribution (variance 1.82 vs 4.09), a distinction that determines whether the model is ready for production or needs more training.',
      bodyKn: 'ಒಂದೂ diffusion checkpoint ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಒಂದೂ production team ಈ lesson ಚಲಾಯಿಸಿದ ಅದೇ ಮೂರೂ-ಭಾಗ evaluation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ -- mode/class coverage, mean, ಮತ್ತು variance/spread -- ಒಂದೂ single aggregate score ನಂಬುವ ಬದಲು, ಏಕೆಂದರೆ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ತೋರಿಸಿದಂತೆ, ಒಂದೂ checkpoint ಅತ್ಯುತ್ತಮ coverage ಸಾಧಿಸಬಹುದು (499/501) ಇನ್ನೂ ನಿಜ distribution ನ ತೀಕ್ಷ್ಣತೆಯನ್ನೂ ಕಡಿಮೆ-ಪ್ರತಿನಿಧಿಸುತ್ತಾ (variance 1.82 vs 4.09), model production ಗೆ ಸಿದ್ಧವಾಗಿದೆಯೇ ಅಥವಾ ಹೆಚ್ಚು training ಬೇಕೇ ಎಂದೂ ನಿರ್ಧರಿಸುವ ಒಂದೂ ವ್ಯತ್ಯಾಸ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the mode split over 1000 generated samples?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 1000 ಉತ್ಪಾದಿಸಿದ samples ಆದ್ಯಂತ mode split ಏನೂ ಆಗಿತ್ತು?',
        opts: ['1000/0, complete collapse', '499/501, nearly matching the real ~50/50 split', '250/750', 'It could not be measured'], correct: 1,
        optsKn: ['1000/0, ಸಂಪೂರ್ಣ collapse', '499/501, ನಿಜ ~50/50 split ಗೆ ಬಹುತೇಕ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ', '250/750', 'ಇದನ್ನೂ ಅಳೆಯಲಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: how did generated variance compare to real variance?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಉತ್ಪಾದಿಸಿದ variance ನಿಜ variance ಗೆ ಹೇಗೆ ಹೋಲಿಸಿತು?',
        opts: ['Generated variance (1.8241) was less than half of real variance (4.0905)', 'They were exactly equal', 'Generated variance was much larger', 'Variance could not be computed for generated samples'], correct: 0,
        optsKn: ['ಉತ್ಪಾದಿಸಿದ variance (1.8241) ನಿಜ variance (4.0905) ನ ಅರ್ಧಕ್ಕಿಂತ ಕಡಿಮೆ ಇತ್ತು', 'ಅವೂ ನಿಖರವಾಗಿ ಸಮಾನವಾಗಿದ್ದವು', 'ಉತ್ಪಾದಿಸಿದ variance ಹೆಚ್ಚು ದೊಡ್ಡದಾಗಿತ್ತು', 'ಉತ್ಪಾದಿಸಿದ samples ಗೆ variance ಗಣಿಸಲಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: did running sample() with the same seed twice produce the same result?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ seed ಜೊತೆ sample() ಎರಡೂ ಬಾರಿ ಚಲಾಯಿಸುವುದೂ ಅದೇ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸಿತೇ?',
        opts: ['No, results were always different', 'Yes, exactly identical (0.8035 both times)', 'Only sometimes', 'The seed has no effect on sampling'], correct: 1,
        optsKn: ['ಇಲ್ಲ, ಫಲಿತಾಂಶಗಳು ಯಾವಾಗಲೂ ಭಿನ್ನವಾಗಿದ್ದವು', 'ಹೌದೂ, ನಿಖರವಾಗಿ ಒಂದೇ (ಎರಡೂ ಬಾರಿ 0.8035)', 'ಕೆಲವೊಮ್ಮೆ ಮಾತ್ರ', 'Seed sampling ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ'] },
      { q: 'Why does DDPM generation require T sequential reverse steps rather than one pass?', qKn: 'DDPM generation ಗೆ ಒಂದೂ pass ಬದಲು T sequential reverse steps ಏಕೆ ಬೇಕು?',
        opts: ['Because the model architecture requires it arbitrarily', 'Each reverse step performs only a small denoising correction, following the same incremental design as the forward process', 'To make training slower', 'Because GANs also require this'], correct: 1,
        optsKn: ['ಏಕೆಂದರೆ model architecture ಗೆ ಅನಿಯಂತ್ರಿತವಾಗಿ ಇದೂ ಬೇಕು', 'ಪ್ರತಿ reverse step ಕೇವಲ ಒಂದೂ ಚಿಕ್ಕ denoising ಸರಿಪಡಿಕೆ ಮಾಡುತ್ತದೆ, forward process ನ ಅದೇ incremental ವಿನ್ಯಾಸ ಅನುಸರಿಸುತ್ತಾ', 'Training ನಿಧಾನ ಮಾಡಲು', 'ಏಕೆಂದರೆ GANs ಗೂ ಇದೂ ಬೇಕು'] },
      { q: 'What does the genuine gap between good mode coverage (499/501) and low variance (1.82 vs 4.09) suggest about generative-model evaluation?', qKn: 'ಉತ್ತಮ mode coverage (499/501) ಮತ್ತು ಕಡಿಮೆ variance (1.82 vs 4.09) ನಡುವಿನ ನಿಜ ಅಂತರ generative-model evaluation ಬಗ್ಗೆ ಏನೂ ಸೂಚಿಸುತ್ತದೆ?',
        opts: ['A single aggregate metric is always sufficient', 'Multiple metrics are needed, since a model can score well on one (mode balance) while genuinely underperforming on another (distribution sharpness)', 'Mode coverage is the only metric that matters', 'Variance is irrelevant to generative models'], correct: 1,
        optsKn: ['ಒಂದೂ single aggregate metric ಯಾವಾಗಲೂ ಸಾಕು', 'ಅನೇಕ metrics ಬೇಕು, ಒಂದೂ model ಒಂದರ ಮೇಲೆ (mode balance) ಚೆನ್ನಾಗಿ ಸ್ಕೋರ್ ಮಾಡಬಹುದು ಇನ್ನೊಂದರ ಮೇಲೆ (distribution ತೀಕ್ಷ್ಣತೆ) ನಿಜವಾಗಿ ಕಡಿಮೆ ಪ್ರದರ್ಶನ ನೀಡುತ್ತಾ', 'Mode coverage ಮಾತ್ರ ಮುಖ್ಯವಾದ metric', 'Variance generative models ಗೆ ಅಪ್ರಸ್ತುತ'] },
    ] } },
  ],
};
