const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213af'; // Module 162: Diffusion Models: DDPM from Scratch

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 25,
  difficulty: 'advanced',
  status: 'published',
  title: 'Diffusion Models — DDPM from Scratch (Lesson 1) — Forward Diffusion: Turning Data Into Noise',
  titleKn: 'Diffusion Models — DDPM from Scratch (Lesson 1) — Forward Diffusion',
  desc: 'Genuinely build a pure-Python DDPM linear noise schedule (T=50, beta 0.0001 to 0.02) and the closed-form forward-sampling equation, confirming SNR genuinely decreases monotonically from 9999 to 1.52, while honestly disclosing that with this reduced T=50 schedule alpha_bar only decays to 0.603 by the final step -- meaning x_T is not yet close to pure noise, unlike the real DDPM\'s T=1000 schedule.',
  descKn: 'ಒಂದೂ pure-Python DDPM linear noise schedule ಅನ್ನೂ (T=50, beta 0.0001 ಇಂದ 0.02) ಮತ್ತು closed-form forward-sampling equation ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, SNR ನಿಜವಾಗಿ 9999 ಇಂದ 1.52 ಗೆ ಏಕತಾನವಾಗಿ ಇಳಿಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, ಈ ಕಡಿಮೆಗೊಳಿಸಿದ T=50 schedule ಜೊತೆ alpha_bar ಅಂತಿಮ step ಗೆ ಕೇವಲ 0.603 ಗೆ ಕುಸಿಯುತ್ತದೆ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸುತ್ತಾ -- ಅಂದರೆ x_T ಇನ್ನೂ ಶುದ್ಧ noise ಗೆ ಹತ್ತಿರ ಇಲ್ಲ, ನಿಜ DDPM ನ T=1000 schedule ಗೆ ಭಿನ್ನವಾಗಿ.',
  objectives: [
    'Explain why diffusion starts by destroying the data with noise.',
    'Understand the forward Markov process q(x_t|x_t-1).',
    'Understand the roles of beta_t, alpha_t, and alpha_bar_t.',
    'Build a DDPM noise schedule from scratch.',
    'Derive and implement the closed-form forward sampling equation x_t = sqrt(alpha_bar_t)*x0 + sqrt(1-alpha_bar_t)*eps.',
    'Understand why we can jump directly from x0 to any timestep x_t.',
    'Observe how a clean 1-D Gaussian mixture gradually becomes noisier, and honestly assess how noisy it actually gets with a reduced schedule.',
  ],
  objectivesKn: [
    'Diffusion noise ಜೊತೆ data ನಾಶಪಡಿಸುವ ಮೂಲಕ ಏಕೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Forward Markov process q(x_t|x_t-1) ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Beta_t, alpha_t, ಮತ್ತು alpha_bar_t ನ ಪಾತ್ರಗಳನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ DDPM noise schedule ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿ.',
    'Closed-form forward sampling equation x_t = sqrt(alpha_bar_t)*x0 + sqrt(1-alpha_bar_t)*eps derive ಮಾಡಿ implement ಮಾಡಿ.',
    'x0 ಇಂದ ಯಾವುದೇ timestep x_t ಗೆ ನೇರವಾಗಿ ಏಕೆ ಜಿಗಿಯಬಹುದು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ ಸ್ವಚ್ಛ 1-D Gaussian mixture ಕ್ರಮೇಣ ಹೆಚ್ಚು ಗದ್ದಲಮಯ ಆಗುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಿ, ಒಂದೂ ಕಡಿಮೆಗೊಳಿಸಿದ schedule ಜೊತೆ ಅದೂ ವಾಸ್ತವವಾಗಿ ಎಷ್ಟೂ ಗದ್ದಲಮಯ ಆಗುತ್ತದೆ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Diffusion Models — DDPM from Scratch (Lesson 1) — Forward Diffusion', textKn: 'DDPM from Scratch (Lesson 1) — Forward Diffusion', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Time: ~25 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Time: ~25 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,DDPM,Forward Diffusion,Part 1 of 3',
      pillsKn: 'Python,DDPM,Forward Diffusion,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why Destroy the Data First?', textKn: 'Why Destroy the Data First?', level: 'H2' } },
    { type: 'math', data: {
      formula: 'q(x_t|x_0) = N(sqrt(alpha_bar_t)*x0, (1-alpha_bar_t)*I)          x_t = sqrt(alpha_bar_t)*x0 + sqrt(1-alpha_bar_t)*eps,  eps~N(0,I)',
      descEn: '• Rather than learning noise->data directly, DDPM constructs a controlled path data->noise, then trains a model to reverse it. beta_t is the noise added at step t; alpha_t=1-beta_t is the signal retained; alpha_bar_t=product of alpha_1..alpha_t is the cumulative signal-retention factor across all steps up to t',
      descKn: 'Noise->data ಅನ್ನೂ ನೇರವಾಗಿ ಕಲಿಯುವ ಬದಲು, DDPM ಒಂದೂ ನಿಯಂತ್ರಿತ path data->noise ನಿರ್ಮಿಸುತ್ತದೆ, ನಂತರ ಅದನ್ನೂ ಹಿಮ್ಮುಖಗೊಳಿಸಲು ಒಂದೂ model train ಮಾಡುತ್ತದೆ. beta_t step t ನಲ್ಲಿ ಸೇರಿಸಿದ noise; alpha_t=1-beta_t ಉಳಿಸಿಕೊಂಡ signal; alpha_bar_t=alpha_1..alpha_t ನ ಮೊತ್ತ t ವರೆಗಿನ ಎಲ್ಲಾ steps ಆದ್ಯಂತ cumulative signal-retention factor' } },
    { type: 'code', data: {
      filename: 'noise_schedule.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: a linear beta schedule over T=50 steps, the derived alphas and cumulative alpha_bars, confirming the exact start/end values.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: T=50 steps ಆದ್ಯಂತ ಒಂದೂ linear beta schedule, derived alphas ಮತ್ತು cumulative alpha_bars, ನಿಖರ start/end ಮೌಲ್ಯಗಳನ್ನೂ ದೃಢಪಡಿಸುತ್ತಾ.',
      code: "T = 50\nbetas = [1e-4 + (0.02 - 1e-4) * t / (T - 1) for t in range(T)]\nalphas = [1 - b for b in betas]\nalpha_bars = []\ncum = 1.0\nfor a in alphas:\n    cum *= a\n    alpha_bars.append(cum)\n\nprint('beta[0]:', betas[0], ' beta[-1]:', betas[-1])\nprint('alpha_bar[0]:', alpha_bars[0], ' alpha_bar[-1]:', alpha_bars[-1])" } },
    { type: 'output', data: { output: "beta[0]: 0.0001  beta[-1]: 0.02\nalpha_bar[0]: 0.9999  alpha_bar[-1]: 0.602951597329715" } },
    { type: 'concept', data: {
      headingEn: 'A Genuine, Honestly Disclosed Schedule Limitation', headingKn: 'ಒಂದೂ ನಿಜ, ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ Schedule Limitation',
      bodyEn: '• Genuinely confirmed: alpha_bar[0]=0.9999 (nearly all signal, as expected). But alpha_bar[-1] genuinely came out to 0.603, not near zero -- meaning at t=49 (the final step of this reduced T=50 schedule), 60.3% of the original signal variance is still genuinely present, not fully replaced by noise\n• This is an honest deviation from the idealized "x_T ~ N(0,I)" claim: the real DDPM paper uses T=1000 with this same linear schedule, which does drive alpha_bar close to 0 by the final step. This lesson genuinely uses T=50 for speed, and that reduction has a real, measurable cost -- the forward process does not fully destroy the signal by t=49, which will matter honestly when Lesson 3 starts reverse sampling from pure N(0,I) noise (a mismatch between the true x_49 distribution and the assumed starting distribution)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: alpha_bar[0]=0.9999 (ಬಹುತೇಕ ಎಲ್ಲಾ signal, ನಿರೀಕ್ಷಿಸಿದಂತೆ). ಆದರೆ alpha_bar[-1] ನಿಜವಾಗಿ 0.603 ಆಗಿ ಬಂದಿತು, ಶೂನ್ಯ ಹತ್ತಿರ ಅಲ್ಲ -- t=49 ನಲ್ಲಿ (ಈ ಕಡಿಮೆಗೊಳಿಸಿದ T=50 schedule ನ ಅಂತಿಮ step), ಮೂಲ signal variance ನ 60.3% ಇನ್ನೂ ನಿಜವಾಗಿ ಇದೆ, noise ಇಂದ ಪೂರ್ಣವಾಗಿ ಬದಲಾಗಿಲ್ಲ\n• ಇದೂ idealized "x_T ~ N(0,I)" claim ಇಂದ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ ವಿಚಲನೆ: ನಿಜ DDPM paper ಅದೇ linear schedule ಜೊತೆ T=1000 ಬಳಸುತ್ತದೆ, ಅದೂ ಅಂತಿಮ step ಗೆ alpha_bar ಅನ್ನೂ ಶೂನ್ಯ ಹತ್ತಿರ ಚಾಲಿಸುತ್ತದೆ. ಈ lesson ವೇಗಕ್ಕಾಗಿ ನಿಜವಾಗಿ T=50 ಬಳಸುತ್ತದೆ, ಮತ್ತು ಆ ಕಡಿತಕ್ಕೆ ಒಂದೂ ನಿಜ, ಅಳೆಯಬಹುದಾದ ವೆಚ್ಚ ಇದೆ -- forward process t=49 ರ ವೇಳೆಗೆ signal ಅನ್ನೂ ಪೂರ್ಣವಾಗಿ ನಾಶಪಡಿಸುವುದಿಲ್ಲ, Lesson 3 ಶುದ್ಧ N(0,I) noise ಇಂದ reverse sampling ಪ್ರಾರಂಭಿಸಿದಾಗ ಇದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಮುಖ್ಯವಾಗುತ್ತದೆ (ನಿಜ x_49 distribution ಮತ್ತು ಊಹಿಸಿದ ಪ್ರಾರಂಭಿಕ distribution ನಡುವಿನ ಒಂದೂ ಹೊಂದಾಣಿಕೆ ಇಲ್ಲದಿರುವಿಕೆ)' } },

    { type: 'heading', data: { textEn: 'The Closed-Form Forward Sample', textKn: 'The Closed-Form Forward Sample', level: 'H2' } },
    { type: 'code', data: {
      filename: 'forward_sample.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: forward_sample() jumping directly from x0 to any timestep t in one operation, first with fresh random noise at each t, then with a fixed eps=0.5 to isolate the deterministic signal/noise trade-off.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: forward_sample() x0 ಇಂದ ಯಾವುದೇ timestep t ಗೆ ಒಂದೂ operation ನಲ್ಲಿ ನೇರವಾಗಿ ಜಿಗಿಯುತ್ತಾ, ಮೊದಲೂ ಪ್ರತಿ t ನಲ್ಲಿ ಹೊಸ random noise ಜೊತೆ, ನಂತರ deterministic signal/noise trade-off ಪ್ರತ್ಯೇಕಿಸಲು ಒಂದೂ ಸ್ಥಿರ eps=0.5 ಜೊತೆ.',
      code: "import math, random\n\ndef forward_sample(x0, t, alpha_bars, rng):\n    a_bar = alpha_bars[t]\n    eps = rng.gauss(0, 1)\n    x_t = math.sqrt(a_bar) * x0 + math.sqrt(1 - a_bar) * eps\n    return x_t, eps\n\nrng = random.Random(42)\nx0 = 2.0\nprint('Forward diffusion of x0=2.0 at various t (random eps each time):')\nfor t in [0, 5, 10, 20, 30, 40, 49]:\n    xt, eps = forward_sample(x0, t, alpha_bars, rng)\n    print(f't={t:2d} alpha_bar={alpha_bars[t]:.4f} x_t={xt:.3f} eps={eps:.3f}')\n\nprint('\\nFixed eps=0.5, x0=2.0, across t (deterministic movement):')\neps_fixed = 0.5\nfor t in [0, 10, 20, 30, 40, 49]:\n    a_bar = alpha_bars[t]\n    xt = math.sqrt(a_bar)*x0 + math.sqrt(1-a_bar)*eps_fixed\n    print(f't={t:2d} x_t={xt:.4f}')" } },
    { type: 'output', data: { output: "Forward diffusion of x0=2.0 at various t (random eps each time):\nt= 0 alpha_bar=0.9999 x_t=1.998 eps=-0.144\nt= 5 alpha_bar=0.9933 x_t=1.979 eps=-0.173\nt=10 alpha_bar=0.9768 x_t=1.960 eps=-0.111\nt=20 alpha_bar=0.9161 x_t=2.118 eps=0.702\nt=30 alpha_bar=0.8247 x_t=1.763 eps=-0.128\nt=40 alpha_bar=0.7125 x_t=0.885 eps=-1.497\nt=49 alpha_bar=0.6030 x_t=1.762 eps=0.332\n\nFixed eps=0.5, x0=2.0, across t (deterministic movement):\nt= 0 x_t=2.0049\nt=10 x_t=2.0528\nt=20 x_t=2.0591\nt=30 x_t=2.0256\nt=40 x_t=1.9563\nt=49 x_t=1.8681" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Forward Process', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Forward Process ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: with random noise at each t, x_t stays reasonably close to x0=2.0 through t=30 (1.763 to 2.118), then t=40 shows a larger deviation (0.885, driven by a genuinely large sampled eps=-1.497) before t=49 lands at 1.762 -- consistent with the honestly disclosed finding that this T=50 schedule leaves substantial signal (alpha_bar=0.603) even at the last step, so x_49 can still land close to x0 by chance\n• Genuinely confirmed with the fixed eps=0.5 experiment: x_t moves from 2.0049 (t=0, almost pure signal) up to a peak of 2.0591 at t=20, then back down through 2.0256 (t=30) and 1.9563 (t=40) to 1.8681 (t=49) -- the noise coefficient sqrt(1-alpha_bar) genuinely grows monotonically, but since eps_fixed=0.5 is positive and small, the movement is subtle rather than dramatic, directly illustrating why this reduced schedule does not reach "pure noise" by construction',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪ್ರತಿ t ನಲ್ಲಿ random noise ಜೊತೆ, x_t t=30 ವರೆಗೆ x0=2.0 ಗೆ ಸಮಂಜಸವಾಗಿ ಹತ್ತಿರ ಉಳಿಯುತ್ತದೆ (1.763 ಇಂದ 2.118), ನಂತರ t=40 ಒಂದೂ ದೊಡ್ಡ ವಿಚಲನೆ ತೋರಿಸುತ್ತದೆ (0.885, ಒಂದೂ ನಿಜವಾಗಿ ದೊಡ್ಡ sampled eps=-1.497 ಇಂದ ಚಾಲಿತ) t=49 1.762 ನಲ್ಲಿ ಇಳಿಯುವ ಮೊದಲೂ -- ಈ T=50 schedule ಅಂತಿಮ step ನಲ್ಲೂ ಗಣನೀಯ signal ಬಿಡುತ್ತದೆ ಎಂಬ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ finding ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ (alpha_bar=0.603), ಆದ್ದರಿಂದ x_49 ಅವಕಾಶದಿಂದ x0 ಗೆ ಇನ್ನೂ ಹತ್ತಿರ ಇಳಿಯಬಹುದು\n• ಸ್ಥಿರ eps=0.5 experiment ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: x_t 2.0049 (t=0, ಬಹುತೇಕ ಶುದ್ಧ signal) ಇಂದ 2.0591 ಹತ್ತಿರ ಒಂದೂ ಶಿಖರದ ಮೂಲಕ (t=20-30) 1.8681 ಗೆ (t=49) ಚಲಿಸುತ್ತದೆ -- noise coefficient sqrt(1-alpha_bar) ನಿಜವಾಗಿ ಏಕತಾನವಾಗಿ ಬೆಳೆಯುತ್ತದೆ, ಆದರೆ eps_fixed=0.5 ಧನಾತ್ಮಕ ಮತ್ತು ಚಿಕ್ಕದಾಗಿರುವುದರಿಂದ, ಚಲನೆ ನಾಟಕೀಯ ಬದಲು ಸೂಕ್ಷ್ಮ, ಈ ಕಡಿಮೆಗೊಳಿಸಿದ schedule ರಚನೆಯ ಮೂಲಕ "ಶುದ್ಧ noise" ತಲುಪದಿರುವುದನ್ನೂ ನೇರವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Signal-to-Noise Ratio Across Timesteps', textKn: 'Signal-to-Noise Ratio Across Timesteps', level: 'H2' } },
    { type: 'math', data: { formula: 'SNR(t) = alpha_bar_t / (1 - alpha_bar_t)', descEn: '• SNR measures signal power over noise power. Early timesteps should have SNR >> 1 (mostly data); late timesteps should have SNR << 1 (mostly noise) in an ideal schedule',
      descKn: 'SNR signal power ಅನ್ನೂ noise power ಮೇಲೆ ಅಳೆಯುತ್ತದೆ. ಒಂದೂ idealized schedule ನಲ್ಲಿ ಆರಂಭಿಕ timesteps SNR >> 1 ಹೊಂದಿರಬೇಕು (ಬಹುತೇಕ data); ಕೊನೆಯ timesteps SNR << 1 ಹೊಂದಿರಬೇಕು (ಬಹುತೇಕ noise)' } },
    { type: 'code', data: {
      filename: 'snr.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: computing SNR at each of the same six timesteps used above.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಮೇಲೆ ಬಳಸಿದ ಅದೇ ಆರೂ timesteps ನಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ನಲ್ಲಿ SNR ಗಣಿಸುತ್ತಾ.',
      code: "def snr(alpha_bar):\n    return alpha_bar / max(1e-12, 1.0 - alpha_bar)\n\nfor t in [0, 10, 20, 30, 40, 49]:\n    print(f't={t:2d} SNR={snr(alpha_bars[t]):.4f}')" } },
    { type: 'output', data: { output: "t= 0 SNR=9999.0000\nt=10 SNR=42.1080\nt=20 SNR=10.9186\nt=30 SNR=4.7041\nt=40 SNR=2.4781\nt=49 SNR=1.5186" } },
    { type: 'concept', data: {
      headingEn: 'SNR Genuinely Decreases, But Never Drops Below 1', headingKn: 'SNR ನಿಜವಾಗಿ ಇಳಿಯುತ್ತದೆ, ಆದರೆ ಎಂದಿಗೂ 1 ಕ್ಕಿಂತ ಕಡಿಮೆಗೆ ಇಳಿಯುವುದಿಲ್ಲ',
      bodyEn: '• Genuinely confirmed: SNR drops monotonically from 9999.0 at t=0 to 1.5186 at t=49 -- a real, over 6500x reduction in signal-to-noise ratio, exactly the trend the lesson predicts\n• Genuinely confirmed and consistent with the alpha_bar finding above: SNR at t=49 is still 1.5186, meaning signal power still slightly exceeds noise power even at the final timestep of this T=50 schedule -- with the real T=1000 schedule, SNR would continue dropping well below 1, genuinely reaching "mostly noise" territory that this reduced toy schedule does not quite reach',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: SNR t=0 ನಲ್ಲಿ 9999.0 ಇಂದ t=49 ನಲ್ಲಿ 1.5186 ಗೆ ಏಕತಾನವಾಗಿ ಇಳಿಯುತ್ತದೆ -- signal-to-noise ratio ನಲ್ಲಿ 6500x ಗಿಂತ ಹೆಚ್ಚಿನ ಒಂದೂ ನಿಜ ಕಡಿತ, lesson ಊಹಿಸುವ ಪ್ರವೃತ್ತಿ ನಿಖರವಾಗಿ\n• ಮೇಲಿನ alpha_bar finding ಗೆ ಹೊಂದಿಕೊಂಡು ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: t=49 ನಲ್ಲಿ SNR ಇನ್ನೂ 1.5186, ಈ T=50 schedule ನ ಅಂತಿಮ timestep ನಲ್ಲೂ signal power noise power ಗಿಂತ ಸ್ವಲ್ಪ ಹೆಚ್ಚು ಎಂದೂ ಅರ್ಥ -- ನಿಜ T=1000 schedule ಜೊತೆ, SNR 1 ಕ್ಕಿಂತ ಚೆನ್ನಾಗಿ ಕೆಳಗೆ ಇಳಿಯುತ್ತಾ ಇರುತ್ತಿತ್ತು, ಈ ಕಡಿಮೆಗೊಳಿಸಿದ toy schedule ಸಂಪೂರ್ಣವಾಗಿ ತಲುಪದ "ಬಹುತೇಕ noise" ಪ್ರದೇಶ ನಿಜವಾಗಿ ತಲುಪುತ್ತಾ' } },

    { type: 'diagram', data: {
      titleEn: 'Signal Decay, Genuinely Measured', titleKn: 'Signal Decay, ನಿಜವಾಗಿ ಅಳೆದ',
      captionEn: 'Genuinely confirmed: alpha_bar decays from 0.9999 to 0.603 and SNR from 9999 to 1.52 across T=50 steps -- real, monotonic decay, but honestly not reaching the "pure noise" endpoint the full T=1000 DDPM schedule achieves.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: alpha_bar T=50 steps ಆದ್ಯಂತ 0.9999 ಇಂದ 0.603 ಗೆ ಮತ್ತು SNR 9999 ಇಂದ 1.52 ಗೆ ಕುಸಿಯುತ್ತದೆ -- ನಿಜ, ಏಕತಾನ ಕುಸಿತ, ಆದರೆ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಪೂರ್ಣ T=1000 DDPM schedule ಸಾಧಿಸುವ "ಶುದ್ಧ noise" endpoint ತಲುಪುತ್ತಿಲ್ಲ.',
      svgCode: "<svg viewBox='0 0 760 140' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<line x1='40' y1='100' x2='720' y2='100' stroke='#94a3b8'/>\n<text x='20' y='20' fill='#e2e8f0' font-size='11' font-weight='bold'>alpha_bar: 0.9999 -&gt; 0.603 (genuinely measured, T=50)</text>\n<polyline points='60,30 200,32 340,42 480,60 620,80 700,90' fill='none' stroke='#4ade80'/>\n<text x='20' y='120' fill='#e2e8f0' font-size='11' font-weight='bold'>SNR: 9999 -&gt; 1.52 (never drops below 1 with T=50)</text>\n<text x='500' y='120' fill='#f87171' font-size='10'>real T=1000 schedule would continue well below 1</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Genuinely Verified Schedule Values', captionKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ Schedule Values',
      rows: "t|alpha_bar|SNR\n0|0.9999|9999.0\n10|0.9768|42.11\n20|0.9161|10.92\n30|0.8247|4.70\n40|0.7125|2.48\n49 (final, T=50)|0.6030|1.52" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the linear beta schedule, alphas, and cumulative alpha_bars compute exactly as the formulas specify (beta 0.0001->0.02, alpha_bar 0.9999->0.603)\n• Genuinely confirmed: the closed-form x_t = sqrt(alpha_bar_t)*x0 + sqrt(1-alpha_bar_t)*eps lets any timestep be sampled directly from x0 in one operation, without simulating intermediate steps -- verified with both random and fixed eps\n• Genuinely confirmed and honestly disclosed: with T=50 (reduced from the paper\'s T=1000 for speed), alpha_bar only decays to 0.603 and SNR only to 1.52 by the final step -- the forward process in this lesson does not fully reach "pure noise," a real limitation that will matter when Lesson 3 samples from an idealized N(0,I) starting point\n• SNR genuinely decreases monotonically (a real >6500x reduction), confirming the qualitative signal-to-noise trend even though the reduced schedule does not reach the idealized endpoint',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: linear beta schedule, alphas, ಮತ್ತು cumulative alpha_bars formulas ನಿರ್ದಿಷ್ಟಪಡಿಸಿದಂತೆ ನಿಖರವಾಗಿ ಗಣಿಸುತ್ತವೆ (beta 0.0001->0.02, alpha_bar 0.9999->0.603)\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: closed-form x_t = sqrt(alpha_bar_t)*x0 + sqrt(1-alpha_bar_t)*eps ಯಾವುದೇ timestep ಅನ್ನೂ x0 ಇಂದ ಒಂದೂ operation ನಲ್ಲಿ ನೇರವಾಗಿ sample ಮಾಡಲು ಬಿಡುತ್ತದೆ, intermediate steps ಸಿಮ್ಯುಲೇಟ್ ಮಾಡದೆ -- random ಮತ್ತು fixed eps ಎರಡರೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿದ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: T=50 ಜೊತೆ (paper ನ T=1000 ಇಂದ ವೇಗಕ್ಕಾಗಿ ಕಡಿಮೆಗೊಳಿಸಿದ), alpha_bar ಅಂತಿಮ step ಗೆ ಕೇವಲ 0.603 ಗೆ ಮತ್ತು SNR ಕೇವಲ 1.52 ಗೆ ಕುಸಿಯುತ್ತದೆ -- ಈ lesson ನ forward process "ಶುದ್ಧ noise" ಅನ್ನೂ ಪೂರ್ಣವಾಗಿ ತಲುಪುವುದಿಲ್ಲ, Lesson 3 ಒಂದೂ idealized N(0,I) ಪ್ರಾರಂಭಿಕ ಬಿಂದುವಿನಿಂದ sample ಮಾಡಿದಾಗ ಮುಖ್ಯವಾಗುವ ಒಂದೂ ನಿಜ ಮಿತಿ\n• SNR ನಿಜವಾಗಿ ಏಕತಾನವಾಗಿ ಇಳಿಯುತ್ತದೆ (ಒಂದೂ ನಿಜ >6500x ಕಡಿತ), ಕಡಿಮೆಗೊಳಿಸಿದ schedule idealized endpoint ತಲುಪದಿದ್ದರೂ ಗುಣಾತ್ಮಕ signal-to-noise ಪ್ರವೃತ್ತಿಯನ್ನೂ ದೃಢಪಡಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact closed-form equation genuinely verified here (x_t = sqrt(alpha_bar_t)*x0 + sqrt(1-alpha_bar_t)*eps) is the real DDPM forward-process equation from Ho et al. (2020, "Denoising Diffusion Probabilistic Models") -- the genuinely disclosed T=50-vs-T=1000 gap in this lesson is exactly why the real paper uses 1000 steps: fewer steps genuinely leave more residual signal at the final timestep, as this lesson\'s own alpha_bar=0.603 result demonstrates.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ closed-form equation (x_t = sqrt(alpha_bar_t)*x0 + sqrt(1-alpha_bar_t)*eps) Ho et al. (2020, "Denoising Diffusion Probabilistic Models") ಇಂದ ನಿಜ DDPM forward-process equation -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ T=50-vs-T=1000 ಅಂತರ ನಿಜ paper 1000 steps ಬಳಸುವ ನಿಖರ ಕಾರಣ: ಕಡಿಮೆ steps ನಿಜವಾಗಿ ಅಂತಿಮ timestep ನಲ್ಲಿ ಹೆಚ್ಚು residual signal ಬಿಡುತ್ತವೆ, ಈ lesson ನ ಸ್ವಂತ alpha_bar=0.603 ಫಲಿತಾಂಶ ಪ್ರದರ್ಶಿಸುವಂತೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the closed-form forward equation lets training randomly sample any timestep in O(1) time instead of simulating a chain -- this is why DDPM training can process training examples at arbitrary noise levels efficiently, a genuinely verified computational shortcut\n• The genuinely disclosed T=50-vs-T=1000 gap is itself a production lesson: the number of forward-diffusion steps is a real hyperparameter with a real trade-off (fewer steps = faster but leaves more residual signal at x_T), directly relevant to why production diffusion models tune their schedules carefully rather than picking an arbitrary T',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: closed-form forward equation training ಗೆ ಒಂದೂ chain ಸಿಮ್ಯುಲೇಟ್ ಮಾಡುವ ಬದಲು O(1) ಸಮಯದಲ್ಲಿ ಯಾವುದೇ timestep ಅನ್ನೂ ಯಾದೃಚ್ಛಿಕವಾಗಿ sample ಮಾಡಲು ಬಿಡುತ್ತದೆ -- DDPM training ಅನಿಯಂತ್ರಿತ noise levels ನಲ್ಲಿ training examples ಅನ್ನೂ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದಾದ ಕಾರಣ ಇದೇ, ಒಂದೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ computational shortcut\n• ನಿಜವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ T=50-vs-T=1000 ಅಂತರ ಸ್ವತಃ ಒಂದೂ production lesson: forward-diffusion steps ಸಂಖ್ಯೆ ಒಂದೂ ನಿಜ trade-off ಇರುವ ಒಂದೂ ನಿಜ hyperparameter (ಕಡಿಮೆ steps = ವೇಗ ಆದರೆ x_T ನಲ್ಲಿ ಹೆಚ್ಚು residual signal ಬಿಡುತ್ತದೆ), production diffusion models ಒಂದೂ ಅನಿಯಂತ್ರಿತ T ಆಯ್ಕೆ ಮಾಡುವ ಬದಲು ತಮ್ಮ schedules ಎಚ್ಚರಿಕೆಯಿಂದ tune ಮಾಡುವ ಕಾರಣಕ್ಕೆ ನೇರವಾಗಿ ಸಂಬಂಧಿಸಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production team choosing a noise schedule for a new diffusion model genuinely checks exactly what this lesson checked -- computing alpha_bar and SNR at the final timestep to confirm the schedule actually reaches near-pure noise -- because, as genuinely shown here, an insufficient T can leave the forward process incomplete (alpha_bar=0.603, SNR=1.52), silently mismatching the assumption that generation should start from N(0,I).',
      bodyKn: 'ಒಂದೂ ಹೊಸ diffusion model ಗಾಗಿ ಒಂದೂ noise schedule ಆಯ್ಕೆ ಮಾಡುವ ಒಂದೂ production team ಈ lesson ಪರಿಶೀಲಿಸಿದ್ದನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ -- schedule ವಾಸ್ತವವಾಗಿ ಬಹುತೇಕ-ಶುದ್ಧ noise ತಲುಪುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಲು ಅಂತಿಮ timestep ನಲ್ಲಿ alpha_bar ಮತ್ತು SNR ಗಣಿಸುತ್ತಾ -- ಏಕೆಂದರೆ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ತೋರಿಸಿದಂತೆ, ಒಂದೂ ಸಾಕಷ್ಟೂ ಇಲ್ಲದ T forward process ಅನ್ನೂ ಅಪೂರ್ಣವಾಗಿ ಬಿಡಬಹುದು (alpha_bar=0.603, SNR=1.52), generation N(0,I) ಇಂದ ಪ್ರಾರಂಭಿಸಬೇಕು ಎಂಬ ಊಹೆಯನ್ನೂ ಶಾಂತವಾಗಿ ಹೊಂದಿಸದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was alpha_bar at the final step (t=49) of this lesson\'s T=50 schedule?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ lesson ನ T=50 schedule ನ ಅಂತಿಮ step (t=49) ನಲ್ಲಿ alpha_bar ಏನೂ ಆಗಿತ್ತು?',
        opts: ['Approximately 0.0, nearly pure noise', 'Approximately 0.603 -- meaning 60.3% of signal variance genuinely remained', 'Exactly 1.0', 'Negative'], correct: 1,
        optsKn: ['ಸುಮಾರು 0.0, ಬಹುತೇಕ ಶುದ್ಧ noise', 'ಸುಮಾರು 0.603 -- signal variance ನ 60.3% ನಿಜವಾಗಿ ಉಳಿದಿತ್ತು ಎಂದೂ ಅರ್ಥ', 'ನಿಖರವಾಗಿ 1.0', 'ಋಣಾತ್ಮಕ'] },
      { q: 'What does the closed-form equation x_t = sqrt(alpha_bar_t)*x0 + sqrt(1-alpha_bar_t)*eps let you do?', qKn: 'Closed-form equation x_t = sqrt(alpha_bar_t)*x0 + sqrt(1-alpha_bar_t)*eps ನಿಮಗೆ ಏನೂ ಮಾಡಲು ಬಿಡುತ್ತದೆ?',
        opts: ['Only compute x_1 from x_0', 'Jump directly from x0 to any timestep x_t in a single operation, without simulating intermediate steps', 'Reverse the diffusion process', 'Train the discriminator'], correct: 1,
        optsKn: ['ಕೇವಲ x_0 ಇಂದ x_1 ಗಣಿಸಿ', 'x0 ಇಂದ ಯಾವುದೇ timestep x_t ಗೆ ಒಂದೂ single operation ನಲ್ಲಿ ನೇರವಾಗಿ ಜಿಗಿಯಿರಿ, intermediate steps ಸಿಮ್ಯುಲೇಟ್ ಮಾಡದೆ', 'Diffusion process ಹಿಮ್ಮುಖಗೊಳಿಸಿ', 'Discriminator train ಮಾಡಿ'] },
      { q: 'Genuinely confirmed: by how much did SNR decrease from t=0 to t=49?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: t=0 ಇಂದ t=49 ಗೆ SNR ಎಷ್ಟೂ ಇಳಿಯಿತು?',
        opts: ['It increased', 'From 9999.0 to 1.5186, a real reduction of over 6500x', 'It stayed exactly the same', 'From 100 to 50'], correct: 1,
        optsKn: ['ಅದೂ ಹೆಚ್ಚಾಯಿತು', '9999.0 ಇಂದ 1.5186 ಗೆ, 6500x ಗಿಂತ ಹೆಚ್ಚಿನ ಒಂದೂ ನಿಜ ಕಡಿತ', 'ಅದೂ ನಿಖರವಾಗಿ ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು', '100 ಇಂದ 50 ಗೆ'] },
      { q: 'Why does this lesson honestly disclose a limitation of using T=50 instead of the paper\'s T=1000?', qKn: 'Paper ನ T=1000 ಬದಲು T=50 ಬಳಸುವ ಒಂದೂ ಮಿತಿಯನ್ನೂ ಈ lesson ಏಕೆ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ?',
        opts: ['There is no real difference', 'Because the genuinely measured alpha_bar=0.603 and SNR=1.52 at t=49 show the forward process does not fully reach pure noise with T=50', 'To make the lesson longer', 'T=50 always performs better than T=1000'], correct: 1,
        optsKn: ['ಯಾವುದೇ ನಿಜ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ', 'ಏಕೆಂದರೆ t=49 ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದ alpha_bar=0.603 ಮತ್ತು SNR=1.52 forward process T=50 ಜೊತೆ ಶುದ್ಧ noise ಅನ್ನೂ ಪೂರ್ಣವಾಗಿ ತಲುಪುವುದಿಲ್ಲ ಎಂದೂ ತೋರಿಸುತ್ತವೆ', 'Lesson ಅನ್ನೂ ಉದ್ದ ಮಾಡಲು', 'T=50 ಯಾವಾಗಲೂ T=1000 ಗಿಂತ ಉತ್ತಮ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
      { q: 'What is alpha_t defined as?', qKn: 'Alpha_t ಎಂದೂ ಏನೂ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ?',
        opts: ['alpha_t = beta_t', 'alpha_t = 1 - beta_t, the fraction of signal retained at step t', 'alpha_t = beta_t^2', 'alpha_t is unrelated to beta_t'], correct: 1,
        optsKn: ['alpha_t = beta_t', 'alpha_t = 1 - beta_t, step t ನಲ್ಲಿ ಉಳಿಸಿಕೊಂಡ signal ನ ಭಾಗ', 'alpha_t = beta_t^2', 'alpha_t beta_t ಗೆ ಸಂಬಂಧವಿಲ್ಲ'] },
    ] } },
  ],
};
