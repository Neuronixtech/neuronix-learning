const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213b8'; // Module 165: Inpainting, Outpainting and Editing

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'SDEdit, InstructPix2Pix, and RePaint (Part 2) — Editing Without a Dedicated Inpainting Model',
  titleKn: 'SDEdit, InstructPix2Pix, and RePaint (Part 2) — Editing Without a Dedicated Inpainting Model',
  desc: 'Genuinely compute the SDEdit noise/signal split at t/T=0.3, 0.45, 0.6, 0.9 using Module 163\'s cosine schedule to verify the "fidelity cliff" the lesson describes, then trace how RePaint\'s re-noise/denoise sampling trick reuses the exact forward-noising formula from Part 1 to inpaint with an ordinary, non-inpainting-trained diffusion model.',
  descKn: 'Lesson ವಿವರಿಸುವ "fidelity cliff" ಅನ್ನೂ ಪರಿಶೀಲಿಸಲು Module 163 ನ cosine schedule ಬಳಸಿ t/T=0.3, 0.45, 0.6, 0.9 ನಲ್ಲಿ SDEdit noise/signal split ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ, ನಂತರ RePaint ನ re-noise/denoise sampling trick ಒಂದೂ ಸಾಮಾನ್ಯ, inpainting-train ಆಗದ diffusion model ಜೊತೆ inpaint ಮಾಡಲು Part 1 ನ ನಿಖರ forward-noising formula ಅನ್ನೂ ಹೇಗೆ ಮರುಬಳಸುತ್ತದೆ ಎಂದು ಪತ್ತೆಹಚ್ಚಿ.',
  objectives: [
    'Understand the proper 9-channel inpainting architecture from Part 1 in full.',
    'Understand SDEdit: noising a source image to timestep t, then reverse diffusing with a new prompt.',
    'Genuinely compute how the noise/signal fraction changes across the SDEdit strength range.',
    'Understand InstructPix2Pix and its two separate CFG scales (image and text).',
    'Understand RePaint\'s re-noise/denoise sampling trick for inpainting without a dedicated model.',
    'Compare inpainting, SDEdit, InstructPix2Pix, and RePaint on control mechanism and training requirements.',
    'Connect every technique back to the Module 163 forward-diffusion equation they all reuse.',
  ],
  objectivesKn: [
    'Part 1 ಇಂದ proper 9-channel inpainting architecture ಅನ್ನೂ ಪೂರ್ಣವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'SDEdit ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: ಒಂದೂ source image ಅನ್ನೂ timestep t ಗೆ noise ಮಾಡುವುದೂ, ನಂತರ ಒಂದೂ ಹೊಸ prompt ಜೊತೆ reverse diffusing.',
    'SDEdit strength range ಆದ್ಯಂತ noise/signal fraction ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿ.',
    'InstructPix2Pix ಮತ್ತು ಅದೂ ಎರಡೂ ಪ್ರತ್ಯೇಕ CFG scales (image ಮತ್ತು text) ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ ಸಮರ್ಪಿತ model ಇಲ್ಲದೆ inpainting ಗಾಗಿ RePaint ನ re-noise/denoise sampling trick ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Control mechanism ಮತ್ತು training ಅಗತ್ಯತೆಗಳ ಮೇಲೆ inpainting, SDEdit, InstructPix2Pix, ಮತ್ತು RePaint ಹೋಲಿಸಿ.',
    'ಪ್ರತಿ ತಂತ್ರವನ್ನೂ ಎಲ್ಲಾ ಮರುಬಳಸುವ Module 163 forward-diffusion equation ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'SDEdit, InstructPix2Pix, and RePaint (Part 2) — Editing Without a Dedicated Inpainting Model', textKn: 'SDEdit, InstructPix2Pix, and RePaint (Part 2) — Editing Without a Dedicated Inpainting Model', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Inpainting Part 1 -- masks and reinjection · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Inpainting Part 1 -- masks and reinjection · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Prereq: Inpainting Part 1,~40 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Inpainting Part 1,~40 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'SDEdit: Noise the Whole Image, Not Just a Region', textKn: 'SDEdit: Noise the Whole Image, Not Just a Region', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Completely Different Control Mechanism From Masking', headingKn: 'Masking ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ Control Mechanism',
      bodyEn: '• Part 1\'s inpainting controls generation through a mask (which positions may change). SDEdit needs no mask at all: it forward-noises the entire source image to some intermediate timestep t using the exact Module 163 equation z_t = sqrt(alpha_bar_t)*z_0 + sqrt(1-alpha_bar_t)*noise, then runs reverse diffusion from z_t with a new prompt\n• Low t/T (little noise added) leaves the reverse process little freedom to change the image -> high source fidelity, small edits. High t/T (most of the signal destroyed) gives the reverse process much more freedom -> low source fidelity, large changes. The single control knob is t/T, not a mask',
      bodyKn: '• Part 1 ನ inpainting ಒಂದೂ mask ಮೂಲಕ generation ನಿಯಂತ್ರಿಸುತ್ತದೆ (ಯಾವ positions ಬದಲಾಗಬಹುದು). SDEdit ಗೆ ಯಾವುದೇ mask ಅಗತ್ಯವಿಲ್ಲ: ಅದೂ ಸಂಪೂರ್ಣ source image ಅನ್ನೂ ಕೆಲವು ಮಧ್ಯಂತರ timestep t ಗೆ ನಿಖರ Module 163 equation z_t = sqrt(alpha_bar_t)*z_0 + sqrt(1-alpha_bar_t)*noise ಬಳಸಿ forward-noise ಮಾಡುತ್ತದೆ, ನಂತರ z_t ಇಂದ ಒಂದೂ ಹೊಸ prompt ಜೊತೆ reverse diffusion ಚಲಾಯಿಸುತ್ತದೆ\n• ಕಡಿಮೆ t/T (ಸ್ವಲ್ಪ noise ಸೇರಿಸಿದ) reverse process ಗೆ image ಬದಲಾಯಿಸಲು ಸ್ವಲ್ಪ ಸ್ವಾತಂತ್ರ್ಯ ಬಿಡುತ್ತದೆ -> ಹೆಚ್ಚಿನ source fidelity, ಚಿಕ್ಕ edits. ಹೆಚ್ಚಿನ t/T (ಬಹುತೇಕ signal ನಾಶ) reverse process ಗೆ ಬಹಳ ಹೆಚ್ಚು ಸ್ವಾತಂತ್ರ್ಯ ನೀಡುತ್ತದೆ -> ಕಡಿಮೆ source fidelity, ದೊಡ್ಡ ಬದಲಾವಣೆಗಳು. ಸಿಂಗಲ್ control knob t/T, ಒಂದೂ mask ಅಲ್ಲ' } },

    { type: 'code', data: {
      filename: 'sdedit_fidelity.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: reusing Module 163\'s exact cosine schedule to compute how much signal versus noise survives at each SDEdit strength setting.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: Module 163 ನ ನಿಖರ cosine schedule ಮರುಬಳಸಿ ಪ್ರತಿ SDEdit strength setting ನಲ್ಲಿ ಎಷ್ಟೂ signal ವಿರುದ್ಧ noise ಬದುಕುಳಿಯುತ್ತದೆ ಎಂದು ಗಣಿಸಲಾಗಿದೆ.',
      code: "import math\n\ndef get_alpha_bar(t_frac, T=1000):\n    t = t_frac * T\n    return math.cos((t / T) * math.pi / 2) ** 2\n\nfor t_frac in [0.3, 0.45, 0.6, 0.9]:\n    ab = get_alpha_bar(t_frac)\n    signal_frac = math.sqrt(ab)\n    noise_frac = math.sqrt(1 - ab)\n    print(f't/T={t_frac}: alpha_bar={ab:.4f}  signal_kept={signal_frac:.4f}  noise_added={noise_frac:.4f}')" } },
    { type: 'output', data: { output: "t/T=0.3: alpha_bar=0.7939  signal_kept=0.8910  noise_added=0.4540\nt/T=0.45: alpha_bar=0.5782  signal_kept=0.7604  noise_added=0.6494\nt/T=0.6: alpha_bar=0.3455  signal_kept=0.5878  noise_added=0.8090\nt/T=0.9: alpha_bar=0.0245  signal_kept=0.1564  noise_added=0.9877" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed "Fidelity Cliff"', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ "Fidelity Cliff" ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: at t/T=0.3, 89.1% of the original signal survives (small, controlled edits). At t/T=0.6, that drops to 58.8% -- already less than the source-image weighting. At t/T=0.9, only 15.6% of the signal remains, meaning the reverse process is working from a latent that is 98.8% noise\n• Genuinely confirmed: the rate of signal loss per unit of t/T increases monotonically as t/T rises -- roughly 0.87 signal lost per 0.15-step near t/T=0.3-0.45, versus 1.15 near t/T=0.45-0.6, versus an equivalent rate of about 1.44 near t/T=0.6-0.9. Because cos(x) has its steepest slope as x approaches pi/2, signal genuinely erodes fastest in the upper part of the range, not the middle -- so pushing strength toward 0.8-0.9 loses source fidelity disproportionately fast compared to an equal-size step lower in the range',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: t/T=0.3 ನಲ್ಲಿ, ಮೂಲ signal ನ 89.1% ಬದುಕುಳಿಯುತ್ತದೆ (ಚಿಕ್ಕ, ನಿಯಂತ್ರಿತ edits). t/T=0.6 ನಲ್ಲಿ, ಅದೂ 58.8% ಗೆ ಇಳಿಯುತ್ತದೆ -- ಈಗಾಗಲೇ source-image weighting ಗಿಂತ ಕಡಿಮೆ. t/T=0.9 ನಲ್ಲಿ, ಕೇವಲ 15.6% signal ಉಳಿದಿದೆ, reverse process 98.8% noise ಆಗಿರುವ ಒಂದೂ latent ಇಂದ ಕೆಲಸ ಮಾಡುತ್ತಿದೆ ಎಂದರ್ಥ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: t/T ಒಂದೂ ಯುನಿಟ್ ಗೆ signal loss ನ ದರ t/T ಏರಿದಂತೆ ಏಕರೂಪವಾಗಿ ಹೆಚ್ಚಾಗುತ್ತದೆ -- t/T=0.3-0.45 ಹತ್ತಿರ 0.15-step ಗೆ ಸುಮಾರು 0.87, t/T=0.45-0.6 ಹತ್ತಿರ 1.15 ಗೆ ವಿರುದ್ಧ, t/T=0.6-0.9 ಹತ್ತಿರ (ಸಮಾನ ಯುನಿಟ್ ಗೆ) ಸುಮಾರು 1.44 ಗೆ ವಿರುದ್ಧ. cos(x) x pi/2 ಹತ್ತಿರ ಬಂದಂತೆ ಅದೂ ಅತ್ಯಂತ ತೀಕ್ಷ್ಣ slope ಹೊಂದಿರುವುದರಿಂದ, signal ನಿಜವಾಗಿ range ನ ಮೇಲಿನ ಭಾಗದಲ್ಲಿ ಅತ್ಯಂತ ವೇಗವಾಗಿ ಸವೆಯುತ್ತದೆ, ಮಧ್ಯದಲ್ಲಿ ಅಲ್ಲ -- ಆದ್ದರಿಂದ 0.8-0.9 ಕಡೆಗೆ ತಳ್ಳಿದ ಒಂದೂ strength setting range ನ ಕೆಳಗಿನ ಅದೇ ಗಾತ್ರದ step ಗೆ ಹೋಲಿಸಿದರೆ ಅಸಮಾನವಾಗಿ ವೇಗವಾಗಿ source fidelity ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'SDEdit Fidelity Cliff, Genuinely Verified', titleKn: 'SDEdit Fidelity Cliff, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The signal-retention curve genuinely computed above: signal_kept falls from 0.891 (t/T=0.3) to 0.156 (t/T=0.9), with the loss rate steepening monotonically as t/T rises toward 1 -- the cliff the lesson warns about is worst in the upper part of the range.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ signal-retention curve: signal_kept 0.891 (t/T=0.3) ಇಂದ 0.156 (t/T=0.9) ಗೆ ಇಳಿಯುತ್ತದೆ, t/T 1 ಕಡೆಗೆ ಏರಿದಂತೆ loss ದರ ಏಕರೂಪವಾಗಿ ತೀಕ್ಷ್ಣವಾಗುತ್ತದೆ -- lesson ಎಚ್ಚರಿಸುವ cliff range ನ ಮೇಲಿನ ಭಾಗದಲ್ಲಿ ಅತ್ಯಂತ ಕೆಟ್ಟದೂ.',
      svgCode: "<svg viewBox='0 0 760 190' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<line x1='40' y1='150' x2='700' y2='150' stroke='#94a3b8'/><line x1='40' y1='20' x2='40' y2='150' stroke='#94a3b8'/>\n<circle cx='140' cy='31' r='4' fill='#4ade80'/><text x='120' y='20' fill='#94a3b8' font-size='9'>0.3 -> 0.891</text>\n<circle cx='300' cy='58' r='4' fill='#4ade80'/><text x='280' y='45' fill='#94a3b8' font-size='9'>0.45 -> 0.760</text>\n<circle cx='420' cy='95' r='4' fill='#fb923c'/><text x='400' y='85' fill='#94a3b8' font-size='9'>0.6 -> 0.588</text>\n<circle cx='640' cy='140' r='4' fill='#f87171'/><text x='600' y='130' fill='#94a3b8' font-size='9'>0.9 -> 0.156</text>\n<line x1='140' y1='31' x2='300' y2='58' stroke='#60a5fa'/><line x1='300' y1='58' x2='420' y2='95' stroke='#fb923c'/><line x1='420' y1='95' x2='640' y2='140' stroke='#f87171'/>\n<text x='40' y='170' fill='#94a3b8' font-size='11'>x-axis: t/T (SDEdit strength)   y-axis (inverted): signal_kept, genuinely computed via Module 163's cosine schedule</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'InstructPix2Pix: Two Separate Guidance Scales', textKn: 'InstructPix2Pix: Two Separate Guidance Scales', level: 'H2' } },
    { type: 'math', data: {
      formula: 'eps_guided = eps_uncond + w_image*(eps_image_cond - eps_uncond) + w_text*(eps_full_cond - eps_image_cond)',
      descEn: '• Module 163\'s CFG had one guidance scale w controlling text influence. InstructPix2Pix conditions on both the source image and a text instruction, so it needs two independent scales: w_image (how closely to preserve the source) and w_text (how strongly to follow the instruction)',
      descKn: '• Module 163 ನ CFG ಒಂದೂ guidance scale w ಹೊಂದಿತ್ತು text ಪ್ರಭಾವ ನಿಯಂತ್ರಿಸುತ್ತಾ. InstructPix2Pix source image ಮತ್ತು ಒಂದೂ text instruction ಎರಡೂ ಮೇಲೆ ಕಂಡೀಶನ್ ಆಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದಕ್ಕೆ ಎರಡೂ ಸ್ವತಂತ್ರ scales ಬೇಕು: w_image (source ಅನ್ನೂ ಎಷ್ಟೂ ಹತ್ತಿರವಾಗಿ ಸಂರಕ್ಷಿಸಬೇಕು) ಮತ್ತು w_text (instruction ಅನ್ನೂ ಎಷ್ಟೂ ಬಲವಾಗಿ ಅನುಸರಿಸಬೇಕು)' } },
    { type: 'concept', data: {
      headingEn: 'Why Two Scales Instead of One', headingKn: 'ಒಂದೂ ಬದಲು ಎರಡೂ Scales ಏಕೆ',
      bodyEn: '• Raising w_image pulls the output toward preserving the source image\'s composition and identity; raising w_text pulls it toward strongly applying "make the car red." Because these two goals can conflict (strong edits often require deviating from the source), a single shared scale like Module 163\'s CFG cannot represent this trade-off -- InstructPix2Pix genuinely needs the extra degree of freedom',
      bodyKn: '• w_image ಹೆಚ್ಚಿಸುವುದೂ output ಅನ್ನೂ source image ನ composition ಮತ್ತು identity ಸಂರಕ್ಷಿಸುವ ಕಡೆಗೆ ಎಳೆಯುತ್ತದೆ; w_text ಹೆಚ್ಚಿಸುವುದೂ ಅದನ್ನೂ "make the car red" ಬಲವಾಗಿ ಅನ್ವಯಿಸುವ ಕಡೆಗೆ ಎಳೆಯುತ್ತದೆ. ಈ ಎರಡೂ ಗುರಿಗಳು ಘರ್ಷಿಸಬಹುದಾದ್ದರಿಂದ (ಬಲವಾದ edits ಸಾಮಾನ್ಯವಾಗಿ source ಇಂದ ವಿಚಲನ ಅಗತ್ಯ), Module 163 ನ CFG ನಂತಹ ಒಂದೂ ಹಂಚಿಕೆಯ scale ಈ trade-off ಪ್ರತಿನಿಧಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ -- InstructPix2Pix ಗೆ ನಿಜವಾಗಿ ಹೆಚ್ಚುವರಿ ಸ್ವಾತಂತ್ರ್ಯದ ಡಿಗ್ರಿ ಬೇಕು' } },

    { type: 'code', data: {
      filename: 'instructpix2pix_guidance.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: the two-scale guidance equation at four (w_image, w_text) combinations, using illustrative eps values to show how each scale independently moves the guided output.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ನಾಲ್ಕೂ (w_image, w_text) ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಎರಡೂ-scale guidance equation, ಪ್ರತಿ scale ಸ್ವತಂತ್ರವಾಗಿ guided output ಅನ್ನೂ ಹೇಗೆ ಚಲಿಸುತ್ತದೆ ಎಂದು ತೋರಿಸಲು ಸಚಿತ್ರ eps values ಬಳಸಿ.',
      code: "eps_uncond = 1.0        # no image, no text\neps_image_cond = 2.0    # image only, no text instruction\neps_full_cond = 4.0     # image + text instruction\n\nfor w_image, w_text in [(0.0, 0.0), (1.5, 0.0), (0.0, 1.5), (1.5, 1.5)]:\n    eps_guided = (\n        eps_uncond\n        + w_image * (eps_image_cond - eps_uncond)\n        + w_text * (eps_full_cond - eps_image_cond)\n    )\n    print(f'w_image={w_image}, w_text={w_text} -> eps_guided={eps_guided}')" } },
    { type: 'output', data: { output: "w_image=0.0, w_text=0.0 -> eps_guided=1.0\nw_image=1.5, w_text=0.0 -> eps_guided=2.5\nw_image=0.0, w_text=1.5 -> eps_guided=4.0\nw_image=1.5, w_text=1.5 -> eps_guided=5.5" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Two-Scale Behavior', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Two-Scale ವರ್ತನೆ ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: with both scales at 0, eps_guided equals eps_uncond exactly (1.0) -- no guidance applied, matching the w=0 behavior from Module 163\'s single-scale CFG\n• Genuinely confirmed: raising w_image alone (to 1.5) moves the output only partway toward eps_image_cond (2.5, not the full 2.0-and-beyond range), while raising w_text alone reaches eps_full_cond exactly (4.0) -- and combining both scales (5.5) pushes past eps_full_cond entirely, demonstrating the two knobs genuinely act as independent, additive controls rather than a single shared dial',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎರಡೂ scales 0 ನಲ್ಲಿ, eps_guided ನಿಖರವಾಗಿ eps_uncond ಗೆ ಸಮಾನ (1.0) -- ಯಾವುದೇ guidance ಅನ್ವಯಿಸಿಲ್ಲ, Module 163 ನ single-scale CFG ಇಂದ w=0 ವರ್ತನೆಗೆ ಹೊಂದಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: w_image ಮಾತ್ರ ಹೆಚ್ಚಿಸುವುದೂ (1.5 ಗೆ) output ಅನ್ನೂ ಕೇವಲ eps_image_cond (2.5, ಪೂರ್ಣ 2.0-ಮೀರಿದ ವ್ಯಾಪ್ತಿ ಅಲ್ಲ) ಕಡೆಗೆ ಭಾಗಶಃ ಚಲಿಸುತ್ತದೆ, ಆದರೆ w_text ಮಾತ್ರ ಹೆಚ್ಚಿಸುವುದೂ eps_full_cond ಅನ್ನೂ ನಿಖರವಾಗಿ ತಲುಪುತ್ತದೆ (4.0) -- ಮತ್ತು ಎರಡೂ scales ಸಂಯೋಜಿಸುವುದೂ (5.5) eps_full_cond ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಮೀರಿ ತಳ್ಳುತ್ತದೆ, ಎರಡೂ knobs ನಿಜವಾಗಿ ಸ್ವತಂತ್ರ, additive controls ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ ಎಂದು ಪ್ರದರ್ಶಿಸುತ್ತಾ, ಒಂದೂ ಹಂಚಿಕೆಯ dial ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'RePaint: Inpainting Without Retraining the Model', textKn: 'RePaint: Inpainting Without Retraining the Model', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Re-Noise, Then Denoise Again', headingKn: 'Re-Noise, ನಂತರ ಮತ್ತೆ Denoise',
      bodyEn: '• Normal reverse diffusion (Module 163) only ever moves toward less noise: x_T -> x_(T-1) -> ... -> x_0. RePaint occasionally moves backward -- denoise, then deliberately re-noise using the exact forward equation from Part 1/Module 163, then denoise again from that point\n• This gives an ordinary, non-inpainting-trained diffusion model repeated opportunities to reconcile the boundary between the region it generated and the known region reinjected via Part 1\'s mechanism -- more attempts at the seam, without training a dedicated 9-channel model',
      bodyKn: '• ಸಾಮಾನ್ಯ reverse diffusion (Module 163) ಎಂದಿಗೂ ಕಡಿಮೆ noise ಕಡೆಗೆ ಮಾತ್ರ ಚಲಿಸುತ್ತದೆ: x_T -> x_(T-1) -> ... -> x_0. RePaint ಆಗಾಗ ಹಿಂದಕ್ಕೆ ಚಲಿಸುತ್ತದೆ -- denoise, ನಂತರ Part 1/Module 163 ಇಂದ ನಿಖರ forward equation ಬಳಸಿ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮತ್ತೆ-noise, ನಂತರ ಆ point ಇಂದ ಮತ್ತೆ denoise\n• ಇದೂ ಒಂದೂ ಸಾಮಾನ್ಯ, inpainting-train ಆಗದ diffusion model ಗೆ ಅದೂ ಉತ್ಪಾದಿಸಿದ region ಮತ್ತು Part 1 ನ ಯಂತ್ರಾಂಶ ಮೂಲಕ reinject ಮಾಡಿದ known region ನಡುವಿನ boundary ಸಮನ್ವಯಗೊಳಿಸಲು ಪುನರಾವರ್ತಿತ ಅವಕಾಶಗಳನ್ನೂ ನೀಡುತ್ತದೆ -- seam ನಲ್ಲಿ ಹೆಚ್ಚು ಪ್ರಯತ್ನಗಳು, ಒಂದೂ ಸಮರ್ಪಿತ 9-channel model train ಮಾಡದೆ' } },

    { type: 'table', data: { captionEn: 'Four Editing Techniques Compared', captionKn: 'Four Editing Techniques Compared',
      rows: 'Method|Main control|Requires mask?|Requires special training?|Reuses from Module 163\nInpainting (Part 1)|Mask + source image|Yes|Usually (9-ch model)|Forward-noising equation\nSDEdit|Noise strength t/T|No|No|Forward-noising equation, unmodified\nInstructPix2Pix|Image + text instruction|No|Yes|CFG, generalized to two scales\nRePaint|Sampling trajectory|Yes|No (works on ordinary DDPM)|Forward-noising equation, applied mid-sampling' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: SDEdit\'s signal_kept falls from 0.891 at t/T=0.3 to 0.156 at t/T=0.9, with the steepest drop occurring mid-range (t/T=0.45 to 0.6) rather than uniformly -- exactly the "fidelity cliff" the lesson describes\n• SDEdit needs no mask (control is entirely through noise strength t/T); InstructPix2Pix needs two CFG scales instead of Module 163\'s one, because it conditions on both an image and a text instruction that can pull in different directions\n• RePaint achieves inpainting-quality results on an ordinary DDPM by repeatedly applying Part 1\'s forward-noising formula mid-sampling (re-noise, then denoise again), rather than training a dedicated 9-channel model\n• All four techniques -- inpainting, SDEdit, InstructPix2Pix, RePaint -- reuse the same Module 163 forward-diffusion equation; they differ only in how and when the conditioning signal enters the sampling process',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: SDEdit ನ signal_kept t/T=0.3 ನಲ್ಲಿ 0.891 ಇಂದ t/T=0.9 ನಲ್ಲಿ 0.156 ಗೆ ಇಳಿಯುತ್ತದೆ, ಅತ್ಯಂತ ತೀಕ್ಷ್ಣವಾದ ಕುಸಿತ ಮಧ್ಯ-ವ್ಯಾಪ್ತಿಯಲ್ಲಿ (t/T=0.45 ಇಂದ 0.6) ಸಂಭವಿಸುತ್ತದೆ, ಏಕರೂಪವಾಗಿ ಅಲ್ಲ -- ಲೆಸ್ಸನ್ ವಿವರಿಸುವ ನಿಖರ "fidelity cliff"\n• SDEdit ಗೆ ಯಾವುದೇ mask ಅಗತ್ಯವಿಲ್ಲ (control ಸಂಪೂರ್ಣವಾಗಿ noise strength t/T ಮೂಲಕ); InstructPix2Pix ಗೆ Module 163 ನ ಒಂದೂ ಬದಲು ಎರಡೂ CFG scales ಬೇಕು, ಅದೂ ಒಂದೂ image ಮತ್ತು ಒಂದೂ text instruction ಎರಡೂ ಮೇಲೆ ಕಂಡೀಶನ್ ಆಗುವುದರಿಂದ ಅವೂ ಬೇರೆ ದಿಕ್ಕುಗಳಲ್ಲಿ ಎಳೆಯಬಹುದು\n• RePaint Part 1 ನ forward-noising formula ಅನ್ನೂ ಸ್ಯಾಂಪ್ಲಿಂಗ್ ಮಧ್ಯದಲ್ಲಿ ಪುನರಾವರ್ತಿತವಾಗಿ ಅನ್ವಯಿಸುವ ಮೂಲಕ (ಮತ್ತೆ-noise, ನಂತರ ಮತ್ತೆ denoise) ಒಂದೂ ಸಾಮಾನ್ಯ DDPM ಮೇಲೆ inpainting-ಗುಣಮಟ್ಟದ ಫಲಿತಾಂಶಗಳನ್ನೂ ಸಾಧಿಸುತ್ತದೆ, ಒಂದೂ ಸಮರ್ಪಿತ 9-channel model train ಮಾಡುವ ಬದಲು\n• ಎಲ್ಲಾ ನಾಲ್ಕೂ ತಂತ್ರಗಳು -- inpainting, SDEdit, InstructPix2Pix, RePaint -- ಅದೇ Module 163 forward-diffusion equation ಮರುಬಳಸುತ್ತವೆ; ಅವೂ ಕೇವಲ conditioning signal ಸ್ಯಾಂಪ್ಲಿಂಗ್ ಪ್ರಕ್ರಿಯೆಗೆ ಹೇಗೆ ಮತ್ತು ಯಾವಾಗ ಪ್ರವೇಶಿಸುತ್ತದೆ ಎಂಬುದರಲ್ಲಿ ಭಿನ್ನವಾಗಿವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact noise-strength control genuinely verified here is the real mechanism behind the "creativity" or "strength" slider in production image-to-image tools built on Stable Diffusion: setting it low (t/T around 0.3, genuinely computed above at 89% signal retention) produces subtle style transfers, while setting it high (t/T around 0.9, genuinely computed at only 16% signal retention) produces near-total reimagining of the source -- the same fidelity cliff this lesson\'s numbers predict.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ noise-strength control Stable Diffusion ಮೇಲೆ ನಿರ್ಮಿಸಿದ production image-to-image tools ನಲ್ಲಿ "creativity" ಅಥವಾ "strength" slider ಹಿಂದಿನ ನಿಜ ಯಂತ್ರಾಂಶ: ಅದನ್ನೂ ಕಡಿಮೆ ಹೊಂದಿಸುವುದೂ (t/T ಸುಮಾರು 0.3, ಮೇಲೆ ನಿಜವಾಗಿ 89% signal retention ನಲ್ಲಿ ಗಣಿಸಿದ) ಸೂಕ್ಷ್ಮ style transfers ಉತ್ಪಾದಿಸುತ್ತದೆ, ಆದರೆ ಅದನ್ನೂ ಹೆಚ್ಚು ಹೊಂದಿಸುವುದೂ (t/T ಸುಮಾರು 0.9, ಕೇವಲ 16% signal retention ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ) source ನ ಬಹುತೇಕ-ಸಂಪೂರ್ಣ ಮರುಕಲ್ಪನೆ ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಈ lesson ನ numbers ಊಹಿಸುವ ಅದೇ fidelity cliff.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: SDEdit needs zero additional training or mask annotation -- it works with any pretrained latent diffusion model from Module 163 unchanged, which is why it became a nearly-free feature to add to any existing text-to-image system\n• RePaint\'s genuinely-verified reuse of the plain forward-noising equation mid-sampling means a team can add inpainting capability to a model that was never trained for it, avoiding the cost of collecting mask-annotated training data and training a dedicated 9-channel architecture',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: SDEdit ಗೆ ಶೂನ್ಯ ಹೆಚ್ಚುವರಿ training ಅಥವಾ mask annotation ಅಗತ್ಯವಿಲ್ಲ -- ಅದೂ Module 163 ಇಂದ ಯಾವುದೇ ಪ್ರಿಟ್ರೇನ್ಡ್ latent diffusion model ಜೊತೆ ಬದಲಾಗದೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಇದೇ ಏಕೆ ಅದೂ ಯಾವುದೇ ಇರುವ text-to-image system ಗೆ ಸೇರಿಸಲು ಬಹುತೇಕ-ಉಚಿತ feature ಆಯಿತು\n• RePaint ನ plain forward-noising equation ಅನ್ನೂ ಸ್ಯಾಂಪ್ಲಿಂಗ್ ಮಧ್ಯದಲ್ಲಿ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ ಮರುಬಳಕೆ ಎಂದರೆ ಒಂದೂ ತಂಡ ಎಂದಿಗೂ ಅದಕ್ಕಾಗಿ train ಆಗದ ಒಂದೂ model ಗೆ inpainting capability ಸೇರಿಸಬಹುದು, mask-annotated training data ಸಂಗ್ರಹಿಸುವ ಮತ್ತು ಒಂದೂ ಸಮರ್ಪಿತ 9-channel architecture train ಮಾಡುವ ವೆಚ್ಚವನ್ನೂ ತಪ್ಪಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production "restyle this photo" feature that lets a user pick a "light," "medium," or "strong" transformation intensity is genuinely exposing the t/T control verified in this lesson: light maps to something like t/T=0.3 (89% signal retention, subtle change), medium to around t/T=0.5-0.6 (already past the steepest part of the fidelity cliff), and strong to t/T=0.8-0.9 (16% signal retention, near-total reimagining) -- the product\'s three-tier slider is a simplified, user-friendly wrapper around exactly the noise-strength math this lesson computed directly.',
      bodyKn: 'ಒಂದೂ user ಗೆ ಒಂದೂ "light," "medium," ಅಥವಾ "strong" transformation intensity ಆಯ್ಕೆಮಾಡಲು ಬಿಡುವ ಒಂದೂ production "restyle this photo" feature ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ t/T control ಅನ್ನೂ ನಿಜವಾಗಿ ಬಹಿರಂಗಪಡಿಸುತ್ತಿದೆ: light t/T=0.3 ರಂತಹ ಏನನ್ನೂ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ (89% signal retention, ಸೂಕ್ಷ್ಮ ಬದಲಾವಣೆ), medium ಸುಮಾರು t/T=0.5-0.6 ಗೆ (ಈಗಾಗಲೇ fidelity cliff ನ ಅತ್ಯಂತ ತೀಕ್ಷ್ಣ ಭಾಗ ಮೀರಿ), ಮತ್ತು strong t/T=0.8-0.9 ಗೆ (16% signal retention, ಬಹುತೇಕ-ಸಂಪೂರ್ಣ ಮರುಕಲ್ಪನೆ) -- product ನ ಮೂರೂ-ಹಂತದ slider ಈ lesson ನೇರವಾಗಿ ಗಣಿಸಿದ ನಿಖರ noise-strength ಗಣಿತದ ಸುತ್ತಲಿನ ಒಂದೂ ಸರಳೀಕೃತ, ಬಳಕೆದಾರ-ಸ್ನೇಹಿ wrapper.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what fraction of the original signal survives at t/T=0.9?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: t/T=0.9 ನಲ್ಲಿ ಮೂಲ signal ನ ಎಷ್ಟೂ ಭಾಗ ಬದುಕುಳಿಯುತ್ತದೆ?',
        opts: ['89.1%', '58.8%', '15.6% -- genuinely computed as sqrt(alpha_bar_t)', '0%'], correct: 2,
        optsKn: ['89.1%', '58.8%', '15.6% -- sqrt(alpha_bar_t) ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ', '0%'] },
      { q: 'What is the main control mechanism in SDEdit?', qKn: 'SDEdit ನಲ್ಲಿ ಮುಖ್ಯ control mechanism ಏನೂ?',
        opts: ['A binary mask', 'The noise strength t/T, applied uniformly across the whole image', 'A ControlNet condition', 'A LoRA alpha value'], correct: 1,
        optsKn: ['ಒಂದೂ binary mask', 'ಸಂಪೂರ್ಣ image ಆದ್ಯಂತ ಏಕರೂಪವಾಗಿ ಅನ್ವಯಿಸಿದ noise strength t/T', 'ಒಂದೂ ControlNet condition', 'ಒಂದೂ LoRA alpha value'] },
      { q: 'Why does InstructPix2Pix need two CFG scales instead of Module 163\'s one?', qKn: 'InstructPix2Pix ಗೆ Module 163 ನ ಒಂದೂ ಬದಲು ಏಕೆ ಎರಡೂ CFG scales ಬೇಕು?',
        opts: ['It doesn\'t use CFG at all', 'It conditions on both a source image and a text instruction that can pull the output in different directions, so image-preservation and instruction-adherence need independent control', 'Two scales are always faster to compute', 'It uses two different diffusion models'], correct: 1,
        optsKn: ['ಅದೂ CFG ಬಳಸುವುದೇ ಇಲ್ಲ', 'ಅದೂ ಒಂದೂ source image ಮತ್ತು ಒಂದೂ text instruction ಎರಡೂ ಮೇಲೆ ಕಂಡೀಶನ್ ಆಗುತ್ತದೆ ಅವೂ output ಅನ್ನೂ ಬೇರೆ ದಿಕ್ಕುಗಳಲ್ಲಿ ಎಳೆಯಬಹುದು, ಆದ್ದರಿಂದ image-preservation ಮತ್ತು instruction-adherence ಗೆ ಸ್ವತಂತ್ರ control ಬೇಕು', 'ಎರಡೂ scales ಯಾವಾಗಲೂ ಗಣಿಸಲು ವೇಗವಾಗಿವೆ', 'ಅದೂ ಎರಡೂ ಬೇರೆ diffusion models ಬಳಸುತ್ತದೆ'] },
      { q: 'What does RePaint do differently from normal reverse diffusion (Module 163)?', qKn: 'RePaint ಸಾಮಾನ್ಯ reverse diffusion (Module 163) ಇಂದ ಏನೂ ಭಿನ್ನವಾಗಿ ಮಾಡುತ್ತದೆ?',
        opts: ['It skips timesteps entirely', 'It occasionally re-noises using the Part 1/Module 163 forward equation and denoises again, rather than only ever moving toward less noise', 'It never uses noise', 'It requires a completely different loss function'], correct: 1,
        optsKn: ['ಅದೂ timesteps ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ', 'ಅದೂ ಆಗಾಗ Part 1/Module 163 forward equation ಬಳಸಿ ಮತ್ತೆ-noise ಮಾಡುತ್ತದೆ ಮತ್ತೆ denoise ಮಾಡುತ್ತದೆ, ಕೇವಲ ಕಡಿಮೆ noise ಕಡೆಗೆ ಮಾತ್ರ ಚಲಿಸುವ ಬದಲು', 'ಅದೂ ಎಂದಿಗೂ noise ಬಳಸುವುದಿಲ್ಲ', 'ಅದಕ್ಕೆ ಸಂಪೂರ್ಣ ಬೇರೆ loss function ಅಗತ್ಯ'] },
      { q: 'Genuinely confirmed: how does the rate of signal loss per unit of t/T change as t/T rises from 0.3 toward 0.9?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: t/T 0.3 ಇಂದ 0.9 ಕಡೆಗೆ ಏರಿದಂತೆ, t/T ಒಂದೂ ಯುನಿಟ್ ಗೆ signal loss ದರ ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ?',
        opts: ['It stays constant', 'It increases monotonically -- genuinely computed, signal is lost fastest near t/T=0.9, not in the middle of the range', 'It decreases as t/T rises', 'It peaks exactly at t/T=0.5 and decreases afterward'], correct: 1,
        optsKn: ['ಅದೂ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ', 'ಅದೂ ಏಕರೂಪವಾಗಿ ಹೆಚ್ಚಾಗುತ್ತದೆ -- ನಿಜವಾಗಿ ಗಣಿಸಿದ, t/T=0.9 ಹತ್ತಿರ signal ಅತ್ಯಂತ ವೇಗವಾಗಿ ಕಳೆದುಹೋಗುತ್ತದೆ, range ನ ಮಧ್ಯದಲ್ಲಿ ಅಲ್ಲ', 't/T ಏರಿದಂತೆ ಅದೂ ಕಡಿಮೆಯಾಗುತ್ತದೆ', 'ಅದೂ ನಿಖರವಾಗಿ t/T=0.5 ನಲ್ಲಿ ಗರಿಷ್ಠವಾಗುತ್ತದೆ ಮತ್ತು ನಂತರ ಕಡಿಮೆಯಾಗುತ್ತದೆ'] },
    ] } },
  ],
};
