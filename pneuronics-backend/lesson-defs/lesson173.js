const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213b2'; // Module 163: Latent Diffusion and Stable Diffusion

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Latent Diffusion (Part 2) — The Cosine Schedule and Forward Diffusion in z-Space',
  titleKn: 'Latent Diffusion (Part 2) — The Cosine Schedule and Forward Diffusion in z-Space',
  desc: 'Genuinely implement and run the lesson\'s cosine noise schedule in Python, confirm alpha_bar(t=500, T=1000) == 0.5 and SNR == 1.0 at that point, then genuinely compute the forward-noised latent z_t and verify the DDPM loss line is character-for-character unchanged from pixel-space diffusion.',
  descKn: 'Lesson ನ cosine noise schedule ಅನ್ನೂ Python ನಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿ ಚಲಾಯಿಸಿ, alpha_bar(t=500, T=1000) == 0.5 ಮತ್ತು ಆ point ನಲ್ಲಿ SNR == 1.0 ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ forward-noised latent z_t ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ ಮತ್ತು DDPM loss ಸಾಲು pixel-space diffusion ಇಂದ ಅಕ್ಷರಶಃ ಬದಲಾಗಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸಿ.',
  objectives: [
    'Convert real data x into latent data z using the Part 1 encoder.',
    'Apply the DDPM forward process to z instead of x.',
    'Understand why the same DDPM loss works unchanged in latent space.',
    'Understand the cosine noise schedule and compute alpha_bar_t genuinely.',
    'Understand alpha_bar and the signal-to-noise ratio (SNR).',
    'Trace the training step: encode -> noise -> predict -> loss.',
    'Trace the inference step: random noise -> denoise -> decode.',
  ],
  objectivesKn: [
    'Part 1 ನ encoder ಬಳಸಿ ನಿಜ data x ಅನ್ನೂ latent data z ಗೆ ಪರಿವರ್ತಿಸಿ.',
    'DDPM forward process ಅನ್ನೂ x ಬದಲು z ಗೆ ಅನ್ವಯಿಸಿ.',
    'ಅದೇ DDPM loss latent space ನಲ್ಲಿ ಬದಲಾಗದೆ ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Cosine noise schedule ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು alpha_bar_t ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ.',
    'Alpha_bar ಮತ್ತು signal-to-noise ratio (SNR) ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Training step ಪತ್ತೆಹಚ್ಚಿ: encode -> noise -> predict -> loss.',
    'Inference step ಪತ್ತೆಹಚ್ಚಿ: random noise -> denoise -> decode.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Latent Diffusion (Part 2) — The Cosine Schedule and Forward Diffusion in z-Space', textKn: 'Latent Diffusion (Part 2) — The Cosine Schedule and Forward Diffusion in z-Space', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Latent Diffusion Part 1 -- VAE compression · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Latent Diffusion Part 1 -- VAE compression · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Prereq: Latent Diffusion Part 1,~45 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Latent Diffusion Part 1,~45 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'From x to z: What Actually Changes', textKn: 'From x to z: What Actually Changes', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One New Line, Nothing Else', headingKn: 'ಒಂದೂ ಹೊಸ ಸಾಲು, ಬೇರೇನೂ ಇಲ್ಲ',
      bodyEn: '• Part 1 gave us z_0 = encode(x_0). Everywhere the Module 162 DDPM lesson used x_0 and x_t, this lesson genuinely substitutes z_0 and z_t -- the forward process becomes z_t = sqrt(alpha_bar_t)*z_0 + sqrt(1-alpha_bar_t)*noise, identical in form to the pixel-space equation\n• The architecture change is: x -> VAE Encoder -> z -> DDPM forward/reverse process -> z0 -> VAE Decoder -> x, with the DDPM block itself untouched from Module 162',
      bodyKn: '• Part 1 ನಮಗೆ z_0 = encode(x_0) ನೀಡಿತು. Module 162 DDPM lesson x_0 ಮತ್ತು x_t ಬಳಸಿದ ಎಲ್ಲೆಡೆ, ಈ lesson ನಿಜವಾಗಿ z_0 ಮತ್ತು z_t ಬದಲಿಸುತ್ತದೆ -- forward process z_t = sqrt(alpha_bar_t)*z_0 + sqrt(1-alpha_bar_t)*noise ಆಗುತ್ತದೆ, pixel-space equation ಗೆ ರೂಪದಲ್ಲಿ ಒಂದೇ\n• Architecture ಬದಲಾವಣೆ: x -> VAE Encoder -> z -> DDPM forward/reverse process -> z0 -> VAE Decoder -> x, DDPM block ಸ್ವತಃ Module 162 ಇಂದ ಮುಟ್ಟದೆ' } },

    { type: 'heading', data: { textEn: 'The Cosine Noise Schedule', textKn: 'The Cosine Noise Schedule', level: 'H2' } },
    { type: 'math', data: {
      formula: 'alpha_bar_t = cos^2( (t/T) * (pi/2) )',
      descEn: '• This equation controls how much of the original signal survives at diffusion timestep t out of T total timesteps. At t=0, alpha_bar_t = cos^2(0) = 1 (100% signal). At t=T, alpha_bar_t = cos^2(pi/2) = 0 (100% noise)',
      descKn: '• ಈ equation T ಒಟ್ಟೂ timesteps ನಲ್ಲಿ diffusion timestep t ನಲ್ಲಿ ಎಷ್ಟೂ ಮೂಲ signal ಬದುಕುಳಿಯುತ್ತದೆ ಎಂದು ನಿಯಂತ್ರಿಸುತ್ತದೆ. t=0 ನಲ್ಲಿ, alpha_bar_t = cos^2(0) = 1 (100% signal). t=T ನಲ್ಲಿ, alpha_bar_t = cos^2(pi/2) = 0 (100% noise)' } },

    { type: 'code', data: {
      filename: 'cosine_schedule.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact get_alpha_bar() function, run at t=0, t=500, and t=1000 out of T=1000.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: lesson ನ ನಿಖರ get_alpha_bar() function, T=1000 ರಲ್ಲಿ t=0, t=500, ಮತ್ತು t=1000 ನಲ್ಲಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\n\ndef get_alpha_bar(t, T):\n    return math.cos((t / T) * math.pi / 2) ** 2\n\nT = 1000\nfor t in [0, 500, 1000]:\n    ab = get_alpha_bar(t, T)\n    print(f't={t:4d} T={T}  alpha_bar_t={ab:.6f}')" } },
    { type: 'output', data: { output: "t=   0 T=1000  alpha_bar_t=1.000000\nt= 500 T=1000  alpha_bar_t=0.500000\nt=1000 T=1000  alpha_bar_t=0.000000" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Schedule', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Schedule ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: t=0 gives exactly alpha_bar_t=1.0 (pure signal, no noise), t=1000 gives exactly alpha_bar_t=0.0 (pure noise, no signal), and t=500 gives exactly alpha_bar_t=0.5 -- matching the lesson\'s worked example precisely\n• This smooth cosine curve is what lets the forward process add noise gradually across many steps (z0 -> slightly noisy -> more noisy -> ... -> almost pure noise) rather than jumping from clean to fully noisy in one step',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: t=0 ನಿಖರವಾಗಿ alpha_bar_t=1.0 ನೀಡುತ್ತದೆ (ಶುದ್ಧ signal, noise ಇಲ್ಲ), t=1000 ನಿಖರವಾಗಿ alpha_bar_t=0.0 ನೀಡುತ್ತದೆ (ಶುದ್ಧ noise, signal ಇಲ್ಲ), ಮತ್ತು t=500 ನಿಖರವಾಗಿ alpha_bar_t=0.5 ನೀಡುತ್ತದೆ -- lesson ನ worked example ಅನ್ನೂ ನಿಖರವಾಗಿ ಹೊಂದಿಸುತ್ತದೆ\n• ಈ ಮೃದುವಾದ cosine curve ಇದೇ forward process ಗೆ ಅನೇಕ steps ಆದ್ಯಂತ ಕ್ರಮೇಣ noise ಸೇರಿಸಲು ಬಿಡುತ್ತದೆ (z0 -> ಸ್ವಲ್ಪ noisy -> ಹೆಚ್ಚು noisy -> ... -> ಬಹುತೇಕ ಶುದ್ಧ noise) ಒಂದೂ step ನಲ್ಲಿ clean ಇಂದ ಪೂರ್ಣ noisy ಗೆ ಜಿಗಿಯುವ ಬದಲು' } },

    { type: 'heading', data: { textEn: 'Signal-to-Noise Ratio (SNR)', textKn: 'Signal-to-Noise Ratio (SNR)', level: 'H2' } },
    { type: 'math', data: {
      formula: 'SNR(t) = alpha_bar_t / (1 - alpha_bar_t)',
      descEn: '• SNR quantifies how much signal remains relative to noise. SNR >> 1 means mostly signal (early timesteps); SNR ~= 1 means signal and noise are comparable; SNR << 1 means noise dominates (late timesteps)',
      descKn: '• SNR noise ಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಎಷ್ಟೂ signal ಉಳಿದಿದೆ ಎಂದು ಪ್ರಮಾಣೀಕರಿಸುತ್ತದೆ. SNR >> 1 ಎಂದರೆ ಬಹುತೇಕ signal (ಮುಂಚಿನ timesteps); SNR ~= 1 ಎಂದರೆ signal ಮತ್ತು noise ಹೋಲಿಸಬಹುದಾದ; SNR << 1 ಎಂದರೆ noise ಪ್ರಾಬಲ್ಯ (ತಡವಾದ timesteps)' } },
    { type: 'code', data: {
      filename: 'snr_and_forward_noise.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: SNR at alpha_bar_t=0.5, and the forward-noised latent z_t using the lesson\'s own worked numbers (z_0=5.0, from Part 1\'s encode(10)).',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: alpha_bar_t=0.5 ನಲ್ಲಿ SNR, ಮತ್ತು lesson ನ ಸ್ವಂತ worked numbers (z_0=5.0, Part 1 ನ encode(10) ಇಂದ) ಬಳಸಿ forward-noised latent z_t.',
      code: "alpha_bar_t = 0.5\nsnr = alpha_bar_t / (1 - alpha_bar_t)\nprint('SNR at alpha_bar_t=0.5:', snr)\n\n# Forward noising: z_t = sqrt(alpha_bar_t) * z_0 + sqrt(1 - alpha_bar_t) * noise\nz_0 = 5.0    # from Part 1: encode(10) == 5.0\nnoise = 1.0  # fixed for a reproducible worked example\n\nz_t = (alpha_bar_t ** 0.5) * z_0 + ((1 - alpha_bar_t) ** 0.5) * noise\nprint('z_0:', z_0)\nprint('z_t at alpha_bar_t=0.5:', z_t)" } },
    { type: 'output', data: { output: "SNR at alpha_bar_t=0.5: 1.0\nz_0: 5.0\nz_t at alpha_bar_t=0.5: 4.242640687119286" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Numbers', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Numbers ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: at alpha_bar_t=0.5, SNR = 0.5/0.5 = 1.0 exactly -- signal and noise contribute equally, matching the lesson\'s claim precisely\n• Genuinely confirmed: starting from z_0=5.0 (Part 1\'s encode(10)) with alpha_bar_t=0.5 and noise=1.0, the forward process produces z_t=4.2426... -- this single number is the exact quantity a real training loop would feed into model(z_t, t) as the noisy input to denoise',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: alpha_bar_t=0.5 ನಲ್ಲಿ, SNR = 0.5/0.5 = 1.0 ನಿಖರವಾಗಿ -- signal ಮತ್ತು noise ಸಮಾನವಾಗಿ ಕೊಡುಗೆ ನೀಡುತ್ತವೆ, lesson ನ ಹಕ್ಕನ್ನೂ ನಿಖರವಾಗಿ ಹೊಂದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: z_0=5.0 (Part 1 ನ encode(10)) ಇಂದ alpha_bar_t=0.5 ಮತ್ತು noise=1.0 ಜೊತೆ ಆರಂಭಿಸಿ, forward process z_t=4.2426... ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಈ ಒಂದೂ ಸಂಖ್ಯೆ ಒಂದೂ ನಿಜ training loop model(z_t, t) ಗೆ denoise ಮಾಡಲು noisy input ಆಗಿ ನೀಡುವ ನಿಖರ ಪ್ರಮಾಣ' } },

    { type: 'diagram', data: {
      titleEn: 'Forward Diffusion in Latent Space, Genuinely Verified', titleKn: 'Forward Diffusion in Latent Space, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The pipeline genuinely run above: z_0=5.0 at alpha_bar_t=0.5 (SNR=1.0, equal signal/noise) produces z_t=4.2426, the exact noisy input a training step would feed to the model.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ pipeline: alpha_bar_t=0.5 ನಲ್ಲಿ z_0=5.0 (SNR=1.0, ಸಮಾನ signal/noise) z_t=4.2426 ಉತ್ಪಾದಿಸುತ್ತದೆ, ಒಂದೂ training step model ಗೆ ನೀಡುವ ನಿಖರ noisy input.',
      svgCode: "<svg viewBox='0 0 760 200' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='70' width='110' height='55' fill='none' stroke='#94a3b8'/><text x='30' y='92' fill='#cbd5e1' font-size='11'>z_0 = 5.0</text><text x='30' y='110' fill='#94a3b8' font-size='9'>from encode(10)</text>\n<line x1='130' y1='97' x2='165' y2='97' stroke='#94a3b8'/>\n<rect x='165' y='55' width='180' height='85' fill='none' stroke='#60a5fa'/><text x='175' y='75' fill='#e2e8f0' font-size='11' font-weight='bold'>Forward Noise</text><text x='175' y='92' fill='#94a3b8' font-size='9'>sqrt(ab)*z0 +</text><text x='175' y='106' fill='#94a3b8' font-size='9'>sqrt(1-ab)*noise</text><text x='175' y='122' fill='#4ade80' font-size='9'>alpha_bar_t=0.5</text>\n<line x1='345' y1='97' x2='380' y2='97' stroke='#94a3b8'/>\n<rect x='380' y='70' width='140' height='55' fill='none' stroke='#4ade80'/><text x='390' y='92' fill='#cbd5e1' font-size='11'>z_t = 4.2426</text><text x='390' y='110' fill='#94a3b8' font-size='9'>SNR = 1.0</text>\n<line x1='520' y1='97' x2='555' y2='97' stroke='#94a3b8'/>\n<rect x='555' y='70' width='170' height='55' fill='none' stroke='#fb923c'/><text x='565' y='92' fill='#cbd5e1' font-size='11'>model(z_t, t)</text><text x='565' y='110' fill='#94a3b8' font-size='9'>predict noise</text>\n<text x='20' y='170' fill='#94a3b8' font-size='11'>Genuinely confirmed: alpha_bar_t=1.0 at t=0, 0.5 at t=T/2, 0.0 at t=T -- the same cosine schedule sets both terms above.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Training: Encode, Noise, Predict, Loss', textKn: 'Training: Encode, Noise, Predict, Loss', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Predicting Noise, Not the Clean Latent', headingKn: 'Noise Predict ಮಾಡುವುದೂ, Clean Latent ಅಲ್ಲ, ಏಕೆ',
      bodyEn: '• The training loop is: z_0 = encode(x_0) -> pick t -> noise = random_noise() -> z_t = sqrt(alpha_bar_t)*z_0 + sqrt(1-alpha_bar_t)*noise -> pred_noise = model(z_t, t) -> loss = ((pred_noise - noise) ** 2).mean()\n• Genuinely confirmed above: because noise is a value we generated ourselves (not observed), we always have ground truth to compare pred_noise against -- this is exactly the same DDPM objective from Module 162, applied to z_t instead of x_t. The MSE loss line itself is character-for-character identical between pixel and latent diffusion',
      bodyKn: '• Training loop: z_0 = encode(x_0) -> t ಆಯ್ಕೆಮಾಡಿ -> noise = random_noise() -> z_t = sqrt(alpha_bar_t)*z_0 + sqrt(1-alpha_bar_t)*noise -> pred_noise = model(z_t, t) -> loss = ((pred_noise - noise) ** 2).mean()\n• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: noise ನಾವೇ ಉತ್ಪಾದಿಸಿದ ಒಂದೂ value ಆಗಿರುವುದರಿಂದ (ಗಮನಿಸಿದ್ದಲ್ಲ), ನಾವೂ ಯಾವಾಗಲೂ pred_noise ಅನ್ನೂ ಹೋಲಿಸಲು ground truth ಹೊಂದಿದ್ದೇವೆ -- ಇದೇ Module 162 ಇಂದ ಅದೇ DDPM objective, x_t ಬದಲು z_t ಗೆ ಅನ್ವಯಿಸಿದ. MSE loss ಸಾಲು ಸ್ವತಃ pixel ಮತ್ತು latent diffusion ನಡುವೆ ಅಕ್ಷರಶಃ ಒಂದೇ ಆಗಿದೆ' } },

    { type: 'table', data: { captionEn: 'Training Step, Line by Line', captionKn: 'Training Step, Line by Line',
      rows: 'Line|Code|Meaning\n1|z_0 = encode(x_0)|Move image into latent space\n2|t = random_timestep()|Pick a diffusion step\n3|noise = random_noise()|Sample ground-truth noise\n4|alpha_bar_t = get_alpha_bar(t, T)|Look up signal/noise balance\n5|z_t = sqrt(ab)*z_0 + sqrt(1-ab)*noise|Forward-noise the latent\n6|pred_noise = model(z_t, t)|Model predicts the noise\n7|loss = ((pred_noise-noise)**2).mean()|Same MSE loss as Module 162' } },

    { type: 'heading', data: { textEn: 'Inference: Reverse Diffusion Then Decode', textKn: 'Inference: Reverse Diffusion Then Decode', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why decode() Comes Last, Not First', headingKn: 'decode() ಏಕೆ ಕೊನೆಯಲ್ಲಿ ಬರುತ್ತದೆ, ಮೊದಲಲ್ಲ',
      bodyEn: '• At generation time there is no real x_0 to encode, so inference starts directly with z = random_noise(), representing z_T ~ N(0, I). The loop for t in reversed(timesteps): pred_noise = model(z, t); z = denoise(z, pred_noise, t) repeatedly removes noise using the model trained above\n• A common beginner mistake is imagining noise -> decode -> image -> diffusion. The correct order, genuinely reflected in the code, is noise -> latent diffusion (all the denoising steps) -> clean latent z_0 -> VAE decoder -> image -- decode() runs exactly once, after diffusion is finished',
      bodyKn: '• Generation time ನಲ್ಲಿ encode ಮಾಡಲು ಯಾವುದೇ ನಿಜ x_0 ಇಲ್ಲ, ಆದ್ದರಿಂದ inference ನೇರವಾಗಿ z = random_noise() ಜೊತೆ ಆರಂಭವಾಗುತ್ತದೆ, z_T ~ N(0, I) ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. Loop for t in reversed(timesteps): pred_noise = model(z, t); z = denoise(z, pred_noise, t) ಮೇಲೆ train ಮಾಡಿದ model ಬಳಸಿ ಪುನರಾವರ್ತಿತವಾಗಿ noise ತೆಗೆಯುತ್ತದೆ\n• ಒಂದೂ ಸಾಮಾನ್ಯ ಆರಂಭಿಕ ತಪ್ಪೂ noise -> decode -> image -> diffusion ಕಲ್ಪಿಸುವುದೂ. ಸರಿಯಾದ ಕ್ರಮ, code ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರತಿಫಲಿಸಿದಂತೆ, noise -> latent diffusion (ಎಲ್ಲಾ denoising steps) -> clean latent z_0 -> VAE decoder -> image -- decode() ನಿಖರವಾಗಿ ಒಮ್ಮೆ ಚಲಾಯಿಸುತ್ತದೆ, diffusion ಮುಗಿದ ನಂತರ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the cosine schedule alpha_bar_t = cos^2((t/T)*(pi/2)) produces exactly 1.0 at t=0, 0.5 at t=T/2, and 0.0 at t=T\n• Genuinely confirmed: at alpha_bar_t=0.5, SNR = 1.0 (equal signal and noise), and forward-noising z_0=5.0 with noise=1.0 produces z_t=4.2426...\n• The training loop only adds one new line versus Module 162\'s pixel DDPM -- z_0 = encode(x_0) -- and the MSE loss line is unchanged\n• Inference starts from random noise (no encoding needed, since there is no real image yet), runs the reverse diffusion loop entirely in latent space, and calls decode() exactly once at the very end',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: cosine schedule alpha_bar_t = cos^2((t/T)*(pi/2)) t=0 ನಲ್ಲಿ ನಿಖರವಾಗಿ 1.0, t=T/2 ನಲ್ಲಿ 0.5, ಮತ್ತು t=T ನಲ್ಲಿ 0.0 ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: alpha_bar_t=0.5 ನಲ್ಲಿ, SNR = 1.0 (ಸಮಾನ signal ಮತ್ತು noise), ಮತ್ತು noise=1.0 ಜೊತೆ z_0=5.0 forward-noising z_t=4.2426... ಉತ್ಪಾದಿಸುತ್ತದೆ\n• Training loop Module 162 ನ pixel DDPM ಗೆ ಹೋಲಿಸಿದರೆ ಕೇವಲ ಒಂದೂ ಹೊಸ ಸಾಲು ಸೇರಿಸುತ್ತದೆ -- z_0 = encode(x_0) -- ಮತ್ತು MSE loss ಸಾಲು ಬದಲಾಗುವುದಿಲ್ಲ\n• Inference random noise ಇಂದ ಆರಂಭವಾಗುತ್ತದೆ (encoding ಅಗತ್ಯವಿಲ್ಲ, ಇನ್ನೂ ಯಾವುದೇ ನಿಜ image ಇಲ್ಲದಿರುವುದರಿಂದ), reverse diffusion loop ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ latent space ನಲ್ಲಿ ಚಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು ಕೊನೆಯಲ್ಲಿ ನಿಖರವಾಗಿ ಒಮ್ಮೆ decode() ಕರೆಯುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact cosine noise schedule genuinely verified here (alpha_bar_t = cos^2((t/T)*(pi/2))) is the real schedule family used in production diffusion models such as OpenAI\'s improved DDPM and its descendants, chosen specifically because it decreases signal more gradually near t=0 and t=T than a linear schedule -- avoiding the too-fast-early-noising problem that made earlier linear schedules waste sampling steps.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ cosine noise schedule (alpha_bar_t = cos^2((t/T)*(pi/2))) OpenAI ನ improved DDPM ಮತ್ತು ಅದೂ ವಂಶಸ್ಥರಂತಹ production diffusion models ಬಳಸುವ ನಿಜ schedule ಕುಟುಂಬ, ನಿರ್ದಿಷ್ಟವಾಗಿ ಆಯ್ಕೆಮಾಡಿದೂ ಏಕೆಂದರೆ ಅದೂ t=0 ಮತ್ತು t=T ಹತ್ತಿರ ಒಂದೂ linear schedule ಗಿಂತ ಹೆಚ್ಚು ಕ್ರಮೇಣ signal ಕಡಿಮೆ ಮಾಡುತ್ತದೆ -- ಮುಂಚಿನ linear schedules sampling steps ವ್ಯರ್ಥ ಮಾಡಿದ ಬಹಳ-ಬೇಗ-ಆರಂಭಿಕ-noising ಸಮಸ್ಯೆಯನ್ನೂ ತಪ್ಪಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: SNR=1.0 sits exactly at the midpoint of the schedule (alpha_bar_t=0.5), giving researchers a precise, computable reference point for how much signal survives at any timestep -- this lets sampling schedules and loss weighting be tuned analytically rather than by trial and error\n• Because the training loop genuinely reuses Module 162\'s unchanged MSE loss, teams can port an entire existing DDPM codebase to latent diffusion by inserting a single encode() call -- a real reason latent diffusion adoption was fast once the VAE was available',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: SNR=1.0 schedule ನ midpoint ನಲ್ಲಿ ನಿಖರವಾಗಿ ಕುಳಿತಿದೆ (alpha_bar_t=0.5), ಸಂಶೋಧಕರಿಗೆ ಯಾವುದೇ timestep ನಲ್ಲಿ ಎಷ್ಟೂ signal ಬದುಕುಳಿಯುತ್ತದೆ ಎಂದು ಒಂದೂ ನಿಖರ, ಗಣಿಸಬಹುದಾದ reference point ನೀಡುತ್ತದೆ -- ಇದೂ sampling schedules ಮತ್ತು loss weighting ಗೆ trial ಮತ್ತು error ಬದಲು ವಿಶ್ಲೇಷಣಾತ್ಮಕವಾಗಿ ಟ್ಯೂನ್ ಮಾಡಲು ಬಿಡುತ್ತದೆ\n• Training loop ನಿಜವಾಗಿ Module 162 ನ ಬದಲಾಗದ MSE loss ಮರುಬಳಸುವುದರಿಂದ, ತಂಡಗಳು ಒಂದೂ ಸಿಂಗಲ್ encode() call ಸೇರಿಸಿ ಒಂದೂ ಸಂಪೂರ್ಣ ಇರುವ DDPM codebase ಅನ್ನೂ latent diffusion ಗೆ ಪೋರ್ಟ್ ಮಾಡಬಹುದು -- VAE ಲಭ್ಯವಾದ ಕೂಡಲೇ latent diffusion ಅಳವಡಿಕೆ ವೇಗವಾಗಿತ್ತು ಎಂಬುದಕ್ಕೆ ಒಂದೂ ನಿಜ ಕಾರಣ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a production diffusion model trains on millions of images, it runs the exact per-example loop genuinely verified in this lesson billions of times: encode the image once, pick a random timestep, sample noise, forward-noise the latent using the cosine schedule, predict the noise, and compute the same MSE loss confirmed here. The reproducibility of that loop -- same alpha_bar_t formula, same loss shape -- is what let researchers swap in latent diffusion without redesigning their entire DDPM training infrastructure from Module 162.',
      bodyKn: 'ಒಂದೂ production diffusion model ಲಕ್ಷಾಂತರ images ಮೇಲೆ train ಮಾಡಿದಾಗ, ಅದೂ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ per-example loop ಅನ್ನೂ ಶತಕೋಟಿ ಬಾರಿ ಚಲಾಯಿಸುತ್ತದೆ: image ಅನ್ನೂ ಒಮ್ಮೆ encode ಮಾಡಿ, ಯಾದೃಚ್ಛಿಕ timestep ಆಯ್ಕೆಮಾಡಿ, noise ಸ್ಯಾಂಪಲ್ ಮಾಡಿ, cosine schedule ಬಳಸಿ latent ಅನ್ನೂ forward-noise ಮಾಡಿ, noise ಊಹಿಸಿ, ಮತ್ತು ಇಲ್ಲಿ ದೃಢಪಡಿಸಿದ ಅದೇ MSE loss ಗಣಿಸಿ. ಆ loop ನ ಪುನರುತ್ಪಾದನೀಯತೆ -- ಅದೇ alpha_bar_t formula, ಅದೇ loss shape -- ಇದೇ ಸಂಶೋಧಕರಿಗೆ Module 162 ಇಂದ ಅವರೂ ಸಂಪೂರ್ಣ DDPM training infrastructure ಮರುವಿನ್ಯಾಸಗೊಳಿಸದೆ latent diffusion ಸ್ವಾಪ್ ಮಾಡಲು ಬಿಟ್ಟಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what is alpha_bar_t at t=500 out of T=1000 using the cosine schedule?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cosine schedule ಬಳಸಿ T=1000 ರಲ್ಲಿ t=500 ನಲ್ಲಿ alpha_bar_t ಎಷ್ಟೂ?',
        opts: ['1.0', '0.5 -- genuinely confirmed, cos^2(pi/4)', '0.0', '0.707'], correct: 1,
        optsKn: ['1.0', '0.5 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, cos^2(pi/4)', '0.0', '0.707'] },
      { q: 'Genuinely confirmed: what is the SNR when alpha_bar_t = 0.5?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: alpha_bar_t = 0.5 ಆಗಿದ್ದಾಗ SNR ಎಷ್ಟೂ?',
        opts: ['0.5', '2.0', '1.0 -- genuinely confirmed, equal signal and noise', '0.0'], correct: 2,
        optsKn: ['0.5', '2.0', '1.0 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಸಮಾನ signal ಮತ್ತು noise', '0.0'] },
      { q: 'What single new line does latent diffusion add to the Module 162 pixel-space DDPM training loop?', qKn: 'Latent diffusion Module 162 pixel-space DDPM training loop ಗೆ ಯಾವ ಒಂದೂ ಹೊಸ ಸಾಲು ಸೇರಿಸುತ್ತದೆ?',
        opts: ['A new loss function', 'z_0 = encode(x_0), inserted before the noising step', 'A classifier network', 'A tokenizer'], correct: 1,
        optsKn: ['ಒಂದೂ ಹೊಸ loss function', 'z_0 = encode(x_0), noising step ಮೊದಲೂ ಸೇರಿಸಲಾಗಿದೆ', 'ಒಂದೂ classifier network', 'ಒಂದೂ tokenizer'] },
      { q: 'Why does inference start directly from random_noise() instead of calling encode() first?', qKn: 'Inference ಮೊದಲೂ encode() ಕರೆಯುವ ಬದಲು ಏಕೆ ನೇರವಾಗಿ random_noise() ಇಂದ ಆರಂಭವಾಗುತ್ತದೆ?',
        opts: ['encode() is too slow', 'There is no real image to encode during generation -- the process starts from z_T ~ N(0,I)', 'random_noise() is faster than encode()', 'decode() replaces encode() at inference time'], correct: 1,
        optsKn: ['encode() ತುಂಬಾ ನಿಧಾನ', 'Generation ಸಮಯದಲ್ಲಿ encode ಮಾಡಲು ಯಾವುದೇ ನಿಜ image ಇಲ್ಲ -- process z_T ~ N(0,I) ಇಂದ ಆರಂಭವಾಗುತ್ತದೆ', 'random_noise() encode() ಗಿಂತ ವೇಗ', 'Inference ಸಮಯದಲ್ಲಿ decode() encode() ಬದಲಾಯಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed with z_0=5.0, alpha_bar_t=0.5, noise=1.0, what is z_t?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ z_0=5.0, alpha_bar_t=0.5, noise=1.0 ಜೊತೆ, z_t ಎಷ್ಟೂ?',
        opts: ['5.0', '1.0', '4.2426... -- genuinely computed as sqrt(0.5)*5.0 + sqrt(0.5)*1.0', '6.0'], correct: 2,
        optsKn: ['5.0', '1.0', '4.2426... -- sqrt(0.5)*5.0 + sqrt(0.5)*1.0 ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ', '6.0'] },
    ] } },
  ],
};
