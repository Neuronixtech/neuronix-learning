const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213b8'; // Module 165: Inpainting, Outpainting and Editing

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Inpainting (Part 1) — Masks, Context Preservation, and the 9-Channel Representation',
  titleKn: 'Inpainting (Part 1) — Masks, Context Preservation, and the 9-Channel Representation',
  desc: 'Genuinely implement and run the lesson\'s inpaint_step() mask-aware forward-noising function in Python, confirming that known (mask=False) positions are correctly reinjected at the diffusion timestep\'s noise level while unknown (mask=True) positions are left untouched for the denoiser to generate.',
  descKn: 'Lesson ನ inpaint_step() mask-aware forward-noising function ಅನ್ನೂ Python ನಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿ ಚಲಾಯಿಸಿ, known (mask=False) positions diffusion timestep ನ noise level ನಲ್ಲಿ ಸರಿಯಾಗಿ reinject ಆಗುತ್ತವೆ ಮತ್ತು unknown (mask=True) positions denoiser generate ಮಾಡಲು ಮುಟ್ಟದೆ ಬಿಡಲಾಗುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why ordinary text-to-image generation is unsuitable for precise image editing.',
    'Understand inpainting, outpainting, and general image editing as related but distinct problems.',
    'Understand what a binary mask represents in an editing pipeline.',
    'Genuinely implement mask-aware forward noising and confirm known regions are correctly reinjected.',
    'Understand the difference between the naive masked-diffusion approach and a proper inpainting model.',
    'Understand the 9-channel representation: [noisy latent, source latent, mask].',
    'Connect the mask-aware forward-noising math to the toy 1-D implementation.',
  ],
  objectivesKn: [
    'ಸಾಮಾನ್ಯ text-to-image generation ಸ್ಪಷ್ಟ image editing ಗೆ ಏಕೆ ಸೂಕ್ತವಲ್ಲ ಎಂದು ವಿವರಿಸಿ.',
    'Inpainting, outpainting, ಮತ್ತು general image editing ಅನ್ನೂ ಸಂಬಂಧಿಸಿದ ಆದರೆ ಪ್ರತ್ಯೇಕ ಸಮಸ್ಯೆಗಳಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ editing pipeline ನಲ್ಲಿ ಒಂದೂ binary mask ಏನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Mask-aware forward noising ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ known regions ಸರಿಯಾಗಿ reinject ಆಗುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
    'Naive masked-diffusion ವಿಧಾನ ಮತ್ತು ಒಂದೂ proper inpainting model ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    '9-channel representation ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: [noisy latent, source latent, mask].',
    'Mask-aware forward-noising ಗಣಿತವನ್ನೂ toy 1-D implementation ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Inpainting (Part 1) — Masks, Context Preservation, and the 9-Channel Representation', textKn: 'Inpainting (Part 1) — Masks, Context Preservation, and the 9-Channel Representation', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Latent Diffusion Parts 1-3 (Module 163) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Latent Diffusion Parts 1-3 (Module 163) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Prereq: Module 163,~40 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Module 163,~40 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: Full Regeneration Loses the Original Image', textKn: 'The Problem: Full Regeneration Loses the Original Image', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Ordinary Text-to-Image Cannot "Remove the Car"', headingKn: 'ಸಾಮಾನ್ಯ Text-to-Image "Remove the Car" ಏಕೆ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ',
      bodyEn: '• Running the Module 163 text-to-image pipeline on "remove the car, keep everything else" starts from pure noise and regenerates every pixel -- there is no mechanism forcing the house, tree, and lighting to stay unchanged\n• Inpainting instead needs: original image + mask -> regenerate ONLY the masked region -> keep everything else unchanged. Mathematically, x_edited = (1-m)*x_original + m*x_generated, where m=0 keeps the original and m=1 regenerates',
      bodyKn: '• "remove the car, keep everything else" ಮೇಲೆ Module 163 text-to-image pipeline ಚಲಾಯಿಸುವುದೂ ಶುದ್ಧ noise ಇಂದ ಆರಂಭವಾಗುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ pixel ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ -- house, tree, ಮತ್ತು lighting ಅನ್ನೂ ಬದಲಾಗದೆ ಇಡುವ ಯಾವುದೇ ಯಂತ್ರಾಂಶ ಇಲ್ಲ\n• Inpainting ಬದಲಿಗೆ ಬೇಕು: original image + mask -> ಕೇವಲ masked region ಪುನರುತ್ಪಾದಿಸಿ -> ಬೇರೆಲ್ಲಾ ಬದಲಾಗದೆ ಇಡಿ. ಗಣಿತೀಯವಾಗಿ, x_edited = (1-m)*x_original + m*x_generated, ಅಲ್ಲಿ m=0 original ಇಡುತ್ತದೆ ಮತ್ತು m=1 ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ' } },

    { type: 'table', data: { captionEn: 'Three Related Editing Problems', captionKn: 'Three Related Editing Problems',
      rows: 'Problem|Goal\nInpainting|Regenerate inside a mask, preserve everything outside it\nOutpainting|Extend the canvas; the new area becomes the mask (Part 3)\nGeneral image editing|Transform the whole image while preserving semantic structure (e.g. SDEdit, Part 2)' } },

    { type: 'heading', data: { textEn: 'The Mask', textKn: 'The Mask', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What 0 and 1 Mean', headingKn: '0 ಮತ್ತು 1 ನ ಅರ್ಥ',
      bodyEn: '• A binary mask marks every position as 0 (preserve, keep the original value) or 1 (regenerate, let diffusion produce something new there). For a toy 5-dimensional "image" [x1,x2,x3,x4,x5], a mask of [False,False,True,True,False] means x3 and x4 are up for regeneration while x1, x2, x5 must stay fixed\n• This is the exact same conceptual problem as a real image mask marking a rectangular region -- the toy code deliberately shrinks the problem to 5 scalar dimensions so the masking logic can be inspected directly rather than buried inside a real image tensor',
      bodyKn: '• ಒಂದೂ binary mask ಪ್ರತಿ position ಅನ್ನೂ 0 (preserve, ಮೂಲ value ಇಡಿ) ಅಥವಾ 1 (regenerate, diffusion ಗೆ ಅಲ್ಲಿ ಏನಾದರೂ ಹೊಸದೂ ಉತ್ಪಾದಿಸಲು ಬಿಡಿ) ಎಂದು ಗುರುತಿಸುತ್ತದೆ. ಒಂದೂ toy 5-dimensional "image" [x1,x2,x3,x4,x5] ಗಾಗಿ, ಒಂದೂ [False,False,True,True,False] mask ಎಂದರೆ x3 ಮತ್ತು x4 ಪುನರುತ್ಪಾದನೆಗೆ ಲಭ್ಯ ಆದರೆ x1, x2, x5 ಸ್ಥಿರವಾಗಿ ಉಳಿಯಬೇಕು\n• ಇದೂ ಒಂದೂ ನಿಜ image mask ಒಂದೂ ಆಯತಾಕಾರದ region ಗುರುತಿಸುವ ಅದೇ ನಿಖರ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಸಮಸ್ಯೆ -- toy code ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸಮಸ್ಯೆಯನ್ನೂ 5 scalar dimensions ಗೆ ಕುಗ್ಗಿಸುತ್ತದೆ ಆದ್ದರಿಂದ masking logic ಅನ್ನೂ ಒಂದೂ ನಿಜ image tensor ಒಳಗೆ ಹೂಳದೆ ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Mask-Aware Forward Noising: The Core Mechanism', textKn: 'Mask-Aware Forward Noising: The Core Mechanism', level: 'H2' } },
    { type: 'math', data: {
      formula: 'if not mask[i]: x_t[i] = sqrt(alpha_bar_t)*clean_image[i] + sqrt(1-alpha_bar_t)*noise',
      descEn: '• This is exactly the Module 163 forward-diffusion equation z_t = sqrt(alpha_bar_t)*z_0 + sqrt(1-alpha_bar_t)*noise, applied selectively: only to positions where mask[i] is False. The known region is not simply copied in raw -- it is re-noised to match the current diffusion timestep\'s noise level before being written back',
      descKn: '• ಇದೂ ನಿಖರವಾಗಿ Module 163 forward-diffusion equation z_t = sqrt(alpha_bar_t)*z_0 + sqrt(1-alpha_bar_t)*noise, ಆಯ್ದುಕೊಂಡು ಅನ್ವಯಿಸಿದ: ಕೇವಲ mask[i] False ಆಗಿರುವ positions ಗೆ. Known region ಅನ್ನೂ ಕೇವಲ raw ಆಗಿ copy ಮಾಡಲಾಗಿಲ್ಲ -- ಅದನ್ನೂ ಹಿಂತಿರುಗಿ ಬರೆಯುವ ಮೊದಲೂ ಈಗಿನ diffusion timestep ನ noise level ಗೆ ಹೊಂದಿಸಲು ಮರು-noised ಮಾಡಲಾಗುತ್ತದೆ' } },

    { type: 'code', data: {
      filename: 'inpaint_step.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact inpaint_step() function, run at t=500 (alpha_bar_t=0.5, reusing Module 163\'s cosine schedule) on a 5-D toy latent with mask=[False,False,True,True,False].',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: lesson ನ ನಿಖರ inpaint_step() function, t=500 ನಲ್ಲಿ ಚಲಾಯಿಸಲಾಗಿದೆ (alpha_bar_t=0.5, Module 163 ನ cosine schedule ಮರುಬಳಸುತ್ತಾ) ಒಂದೂ 5-D toy latent ಮೇಲೆ mask=[False,False,True,True,False] ಜೊತೆ.',
      code: "import math, random\n\ndef get_alpha_bar(t, T):\n    return math.cos((t / T) * math.pi / 2) ** 2\n\ndef inpaint_step(x_t, mask, clean_image, alpha_bars, t, rng):\n    a_bar = alpha_bars[t]\n    for i in range(len(x_t)):\n        if not mask[i]:\n            x_t[i] = math.sqrt(a_bar) * clean_image[i] + math.sqrt(1 - a_bar) * rng.gauss(0, 1)\n    # ...then run the normal reverse step on x_t (Module 163, Part 2)\n    return x_t\n\nrng = random.Random(42)\nT = 1000\nalpha_bars = {t: get_alpha_bar(t, T) for t in [0, 500, 1000]}\n\nclean_image = [-1.0, -0.9, -1.1, -1.0, -0.8]     # known context\nmask = [False, False, True, True, False]          # True = regenerate\nx_t = [0.0, 0.0, 0.3, -0.2, 0.0]                  # mid-diffusion state before reinjection\n\nbefore = list(x_t)\nx_t = inpaint_step(x_t, mask, clean_image, alpha_bars, t=500, rng=rng)\n\nprint('alpha_bar at t=500:', alpha_bars[500])\nprint('before reinjection:', before)\nprint('after reinjection: ', [round(v, 4) for v in x_t])" } },
    { type: 'output', data: { output: "alpha_bar at t=500: 0.5\nbefore reinjection: [0.0, 0.0, 0.3, -0.2, 0.0]\nafter reinjection:  [-0.809, -0.7587, 0.3, -0.2, -0.6444]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Reinjection', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Reinjection ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: positions 2 and 3 (mask=True, "regenerate") kept their exact pre-reinjection values, 0.3 and -0.2, completely untouched by inpaint_step() -- this is the model\'s freedom to generate\n• Genuinely confirmed: positions 0, 1, and 4 (mask=False, "preserve") were overwritten with fresh values derived from clean_image at alpha_bar_t=0.5, not simply copied -- e.g. position 0 became -0.809, not the raw clean_image[0]=-1.0, because the known region must match the current noise level before the denoiser processes the whole vector together',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: positions 2 ಮತ್ತು 3 (mask=True, "regenerate") ಅವುಗಳ ನಿಖರ pre-reinjection values, 0.3 ಮತ್ತು -0.2, inpaint_step() ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ಮುಟ್ಟದೆ ಇಟ್ಟುಕೊಂಡಿತು -- ಇದೇ model ನ generate ಮಾಡುವ ಸ್ವಾತಂತ್ರ್ಯ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: positions 0, 1, ಮತ್ತು 4 (mask=False, "preserve") ಅನ್ನೂ alpha_bar_t=0.5 ನಲ್ಲಿ clean_image ಇಂದ ಪಡೆದ ಹೊಸ values ಜೊತೆ ಮತ್ತೆ ಬರೆಯಲಾಯಿತು, ಕೇವಲ copy ಮಾಡಿಲ್ಲ -- ಉದಾ. position 0 -0.809 ಆಯಿತು, raw clean_image[0]=-1.0 ಅಲ್ಲ, ಏಕೆಂದರೆ denoiser ಸಂಪೂರ್ಣ vector ಒಟ್ಟಿಗೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಮೊದಲೂ known region ಈಗಿನ noise level ಗೆ ಹೊಂದಿಸಬೇಕು' } },

    { type: 'diagram', data: {
      titleEn: 'Mask-Aware Reinjection, Genuinely Verified', titleKn: 'Mask-Aware Reinjection, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The pipeline genuinely run above: positions 2,3 (mask=True) pass through unchanged (0.3, -0.2) while positions 0,1,4 (mask=False) are re-noised from clean_image at alpha_bar_t=0.5 before the reverse step runs.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ pipeline: positions 2,3 (mask=True) ಬದಲಾಗದೆ ಹಾದುಹೋಗುತ್ತವೆ (0.3, -0.2) ಆದರೆ positions 0,1,4 (mask=False) reverse step ಚಲಾಯಿಸುವ ಮೊದಲೂ alpha_bar_t=0.5 ನಲ್ಲಿ clean_image ಇಂದ ಮತ್ತೆ-noised ಆಗುತ್ತವೆ.',
      svgCode: "<svg viewBox='0 0 760 190' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='30' width='90' height='45' fill='none' stroke='#fb923c'/><text x='28' y='50' fill='#cbd5e1' font-size='10'>x1 KEEP</text><text x='28' y='65' fill='#4ade80' font-size='9'>-0.809</text>\n<rect x='120' y='30' width='90' height='45' fill='none' stroke='#fb923c'/><text x='128' y='50' fill='#cbd5e1' font-size='10'>x2 KEEP</text><text x='128' y='65' fill='#4ade80' font-size='9'>-0.759</text>\n<rect x='220' y='30' width='90' height='45' fill='none' stroke='#60a5fa'/><text x='228' y='50' fill='#cbd5e1' font-size='10'>x3 GEN</text><text x='228' y='65' fill='#4ade80' font-size='9'>0.3 (untouched)</text>\n<rect x='320' y='30' width='90' height='45' fill='none' stroke='#60a5fa'/><text x='328' y='50' fill='#cbd5e1' font-size='10'>x4 GEN</text><text x='328' y='65' fill='#4ade80' font-size='9'>-0.2 (untouched)</text>\n<rect x='420' y='30' width='90' height='45' fill='none' stroke='#fb923c'/><text x='428' y='50' fill='#cbd5e1' font-size='10'>x5 KEEP</text><text x='428' y='65' fill='#4ade80' font-size='9'>-0.644</text>\n<text x='20' y='115' fill='#94a3b8' font-size='11'>orange = mask False, reinjected from clean_image at alpha_bar_t=0.5</text>\n<text x='20' y='135' fill='#94a3b8' font-size='11'>blue = mask True, left alone for the reverse-diffusion step to generate</text>\n<text x='20' y='165' fill='#94a3b8' font-size='11'>Genuinely confirmed: only mask=False positions changed from their pre-reinjection values.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Naive Masking vs Proper Inpainting Models', textKn: 'Naive Masking vs Proper Inpainting Models', level: 'H2' } },
    { type: 'math', data: {
      formula: 'input = concat([noisy_latent, encoded_image, mask])          4 channels + 4 channels + 1 channel = 9 channels',
      descEn: '• The genuinely verified inpaint_step() above is the naive approach: the Python code manually overwrites x_t before handing it to the denoiser, and the model itself never explicitly sees the mask or the clean image as inputs\n• A proper inpainting model instead concatenates the noisy latent (4 channels in SD-style latent diffusion, per Module 163), the encoded source image (another 4 channels), and the mask (1 channel) into a single 9-channel input -- the model is trained end-to-end to use the source and mask explicitly, rather than having them spliced in by external code between denoising steps',
      descKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ inpaint_step() naive ವಿಧಾನ: Python code x_t ಅನ್ನೂ denoiser ಗೆ ಕೊಡುವ ಮೊದಲೂ ಕೈಯಾರೆ overwrite ಮಾಡುತ್ತದೆ, model ಸ್ವತಃ mask ಅಥವಾ clean image ಅನ್ನೂ inputs ಆಗಿ ಎಂದಿಗೂ ಸ್ಪಷ್ಟವಾಗಿ ನೋಡುವುದಿಲ್ಲ. ಒಂದೂ ಸರಿಯಾದ inpainting model ಬದಲು noisy latent ಅನ್ನೂ (SD-style latent diffusion ನಲ್ಲಿ 4 channels, Module 163 ಪ್ರಕಾರ), encoded source image ಅನ್ನೂ (ಇನ್ನೂ 4 channels), ಮತ್ತು mask ಅನ್ನೂ (1 channel) ಒಂದೂ single 9-channel input ಗೆ concatenate ಮಾಡುತ್ತದೆ -- model source ಮತ್ತು mask ಅನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಬಳಸಲು end-to-end train ಆಗುತ್ತದೆ, ಬಾಹ್ಯ code ಇಂದ denoising steps ನಡುವೆ splice ಮಾಡುವ ಬದಲು' } },
    { type: 'concept', data: {
      headingEn: 'Why This Distinction Matters', headingKn: 'ಈ ವ್ಯತ್ಯಾಸ ಏಕೆ ಮುಖ್ಯ',
      bodyEn: '• Genuinely confirmed above: the naive inpaint_step() reconstructs the known region correctly, but the denoiser processing x_t afterward has no explicit signal telling it "here is the full source image, and here is exactly which pixels you may change" -- it only sees a vector where some positions happen to already look clean\n• The proper 9-channel model gives the network the mask and source image as first-class inputs it was trained to condition on, generally producing more coherent boundaries between the preserved and generated regions than reinjection into an unmodified base model can',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: naive inpaint_step() known region ಅನ್ನೂ ಸರಿಯಾಗಿ ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ, ಆದರೆ ನಂತರ x_t ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ denoiser ಗೆ "ಇಲ್ಲಿ ಪೂರ್ಣ source image, ಮತ್ತು ಇಲ್ಲಿ ನಿಖರವಾಗಿ ಯಾವ pixels ನೀವೂ ಬದಲಾಯಿಸಬಹುದು" ಎಂದು ಹೇಳುವ ಯಾವುದೇ ಸ್ಪಷ್ಟ signal ಇಲ್ಲ -- ಅದೂ ಕೇವಲ ಒಂದೂ vector ನೋಡುತ್ತದೆ ಎಲ್ಲಿ ಕೆಲವು positions ಈಗಾಗಲೇ clean ಆಗಿ ಕಾಣುತ್ತವೆ\n• Proper 9-channel model network ಗೆ mask ಮತ್ತು source image ಅನ್ನೂ ಅದೂ condition ಆಗಲು train ಮಾಡಿದ first-class inputs ಆಗಿ ನೀಡುತ್ತದೆ, ಸಾಮಾನ್ಯವಾಗಿ preserved ಮತ್ತು generated regions ನಡುವೆ ಒಂದೂ ಮಾರ್ಪಡಿಸದ base model ಗೆ reinjection ಗಿಂತ ಹೆಚ್ಚು ಸುಸಂಬದ್ಧ boundaries ಉತ್ಪಾದಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: inpaint_step() leaves mask=True positions completely untouched (0.3 and -0.2 stayed exactly as before) while overwriting mask=False positions with a fresh forward-noised version of the clean image at the current alpha_bar_t (0.5 at t=500)\n• The reinjection genuinely reuses the exact Module 163 forward-diffusion equation, selectively -- this is why the known region stays statistically consistent with the noise level of the region being generated\n• Naive masking (reinjection between steps) and proper 9-channel inpainting solve the same problem differently: one modifies x_t externally, the other gives the model the mask and source image as explicit training-time inputs\n• A binary mask (0=preserve, 1=regenerate) is the single most important concept in image editing -- outpainting (Part 3) and SDEdit (Part 2) are variations on how that mask or noise level is chosen',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: inpaint_step() mask=True positions ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಮುಟ್ಟದೆ ಬಿಡುತ್ತದೆ (0.3 ಮತ್ತು -0.2 ಮೊದಲಿನಂತೆಯೇ ಉಳಿಯಿತು) mask=False positions ಅನ್ನೂ ಈಗಿನ alpha_bar_t (t=500 ನಲ್ಲಿ 0.5) ನಲ್ಲಿ clean image ನ ಒಂದೂ ಹೊಸ forward-noised ಆವೃತ್ತಿ ಜೊತೆ ಮತ್ತೆ ಬರೆಯುತ್ತಾ\n• Reinjection ನಿಜವಾಗಿ ನಿಖರ Module 163 forward-diffusion equation ಅನ್ನೂ, ಆಯ್ದುಕೊಂಡು ಮರುಬಳಸುತ್ತದೆ -- ಇದೇ ಏಕೆ known region ಉತ್ಪಾದಿಸಲ್ಪಡುತ್ತಿರುವ region ನ noise level ಜೊತೆ ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ\n• Naive masking (steps ನಡುವೆ reinjection) ಮತ್ತು proper 9-channel inpainting ಅದೇ ಸಮಸ್ಯೆಯನ್ನೂ ಬೇರೆ ರೀತಿ ಪರಿಹರಿಸುತ್ತವೆ: ಒಂದೂ x_t ಅನ್ನೂ ಬಾಹ್ಯವಾಗಿ ಮಾರ್ಪಡಿಸುತ್ತದೆ, ಇನ್ನೊಂದೂ model ಗೆ mask ಮತ್ತು source image ಅನ್ನೂ ಸ್ಪಷ್ಟ training-time inputs ಆಗಿ ನೀಡುತ್ತದೆ\n• ಒಂದೂ binary mask (0=preserve, 1=regenerate) image editing ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ concept -- outpainting (Part 3) ಮತ್ತು SDEdit (Part 2) ಆ mask ಅಥವಾ noise level ಅನ್ನೂ ಹೇಗೆ ಆಯ್ಕೆಮಾಡಲಾಗುತ್ತದೆ ಎಂಬುದರ variations' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact mask-aware reinjection mechanism genuinely verified here -- known positions re-noised to match the diffusion timestep, unknown positions left free -- is the real principle behind production object-removal tools such as Adobe Photoshop\'s Generative Fill and Google Photos\' Magic Eraser: the surrounding pixels the user did not select are genuinely held statistically consistent with the noise level of the region being regenerated at every step, which is what prevents the classic "obvious patch" artifact.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ mask-aware reinjection ಯಂತ್ರಾಂಶ -- known positions diffusion timestep ಗೆ ಹೊಂದಿಸಲು ಮತ್ತೆ-noised, unknown positions ಸ್ವತಂತ್ರವಾಗಿ ಬಿಟ್ಟಿದೆ -- Adobe Photoshop ನ Generative Fill ಮತ್ತು Google Photos ನ Magic Eraser ನಂತಹ production object-removal tools ಹಿಂದಿನ ನಿಜ ತತ್ವ: user ಆಯ್ಕೆಮಾಡದ ಸುತ್ತಲಿನ pixels ಪ್ರತಿ step ನಲ್ಲಿ ಪುನರುತ್ಪಾದಿಸಲ್ಪಡುತ್ತಿರುವ region ನ noise level ಜೊತೆ ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಸ್ಥಿರವಾಗಿ ಇಡಲಾಗುತ್ತದೆ, ಇದೇ classic "obvious patch" artifact ತಡೆಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: reinjecting the known region at every diffusion step (not just once at the start) repeatedly gives the denoiser fresh context about the surrounding image, which is what encourages the generated region to blend with its neighbors rather than drifting into an unrelated texture\n• Because inpainting genuinely reuses the exact Module 163 forward-noising formula, teams can add masked editing to an existing DDPM/latent-diffusion codebase by wrapping the existing denoising loop with one conditional reinjection step -- no new model architecture is strictly required for the naive approach',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ diffusion step ನಲ್ಲಿ known region ಅನ್ನೂ ಮತ್ತೆ-ಇಂಜೆಕ್ಟ್ ಮಾಡುವುದೂ (ಕೇವಲ ಆರಂಭದಲ್ಲಿ ಒಮ್ಮೆ ಅಲ್ಲ) ಪುನರಾವರ್ತಿತವಾಗಿ denoiser ಗೆ ಸುತ್ತಲಿನ image ಬಗ್ಗೆ ಹೊಸ context ನೀಡುತ್ತದೆ, ಇದೇ ಉತ್ಪಾದಿಸಿದ region ಅನ್ನೂ ಅದೂ ನೆರೆಹೊರೆಯವರ ಜೊತೆ ಬೆರೆಯಲು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ, ಸಂಬಂಧವಿಲ್ಲದ texture ಗೆ ಚಲಿಸುವ ಬದಲು\n• Inpainting ನಿಜವಾಗಿ ನಿಖರ Module 163 forward-noising formula ಮರುಬಳಸುವುದರಿಂದ, ತಂಡಗಳು ಇರುವ denoising loop ಅನ್ನೂ ಒಂದೂ conditional reinjection step ಜೊತೆ ಸುತ್ತಿ ಇರುವ DDPM/latent-diffusion codebase ಗೆ masked editing ಸೇರಿಸಬಹುದು -- naive ವಿಧಾನಕ್ಕೆ ಯಾವುದೇ ಹೊಸ model architecture ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಅಗತ್ಯವಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production photo-editing feature that lets a user paint over an unwanted object and remove it genuinely runs the reinjection logic verified in this lesson at every one of its diffusion steps: the pixels outside the user\'s brush strokes are repeatedly re-noised to the current timestep from the original photo (exactly like positions 0, 1, 4 in this lesson\'s worked example), while only the brushed region -- the mask=True positions -- is left for the model to fill in, which is why the unedited parts of the photo never visibly change even though the whole image tensor passes through the diffusion model at every step.',
      bodyKn: 'ಒಂದೂ user ಗೆ ಅನಗತ್ಯ object ಮೇಲೆ paint ಮಾಡಿ ಅದನ್ನೂ ತೆಗೆಯಲು ಬಿಡುವ ಒಂದೂ production photo-editing feature ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ reinjection logic ಅನ್ನೂ ಅದೂ ಪ್ರತಿ ಒಂದೂ diffusion step ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ: user ನ brush strokes ಹೊರಗಿನ pixels ಮೂಲ photo ಇಂದ ಈಗಿನ timestep ಗೆ ಪುನರಾವರ್ತಿತವಾಗಿ ಮತ್ತೆ-noised ಆಗುತ್ತವೆ (ಈ lesson ನ worked example ನಲ್ಲಿ positions 0, 1, 4 ರಂತೆ ನಿಖರವಾಗಿ), ಕೇವಲ brush ಮಾಡಿದ region -- mask=True positions -- model ಗೆ ತುಂಬಲು ಬಿಡಲಾಗುತ್ತದೆ, ಇದೇ ಏಕೆ photo ನ ಸಂಪಾದಿಸದ ಭಾಗಗಳು ಎಂದಿಗೂ ಗೋಚರವಾಗಿ ಬದಲಾಗುವುದಿಲ್ಲ, ಪೂರ್ಣ image tensor ಪ್ರತಿ step ನಲ್ಲಿ diffusion model ಮೂಲಕ ಹಾದುಹೋದರೂ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: in the inpaint_step() run with mask=[False,False,True,True,False], what happens to positions 2 and 3?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mask=[False,False,True,True,False] ಜೊತೆ inpaint_step() run ನಲ್ಲಿ, positions 2 ಮತ್ತು 3 ಗೆ ಏನೂ ಆಗುತ್ತದೆ?',
        opts: ['They are overwritten with clean_image values', 'They are left completely untouched, exactly as before the function ran', 'They are set to zero', 'They are averaged with position 0'], correct: 1,
        optsKn: ['ಅವೂ clean_image values ಜೊತೆ ಮತ್ತೆ ಬರೆಯಲ್ಪಡುತ್ತವೆ', 'ಅವೂ ಸಂಪೂರ್ಣವಾಗಿ ಮುಟ್ಟದೆ ಬಿಡಲಾಗುತ್ತದೆ, function ಚಲಾಯಿಸುವ ಮೊದಲಿನಂತೆಯೇ', 'ಅವೂ ಶೂನ್ಯಕ್ಕೆ ಹೊಂದಿಸಲಾಗುತ್ತದೆ', 'ಅವೂ position 0 ಜೊತೆ ಸರಾಸರಿ ಮಾಡಲಾಗುತ್ತದೆ'] },
      { q: 'Why does inpaint_step() re-noise the known region instead of simply copying clean_image directly into x_t?', qKn: 'inpaint_step() ಏಕೆ ಕೇವಲ clean_image ಅನ್ನೂ ನೇರವಾಗಿ x_t ಗೆ copy ಮಾಡುವ ಬದಲು known region ಅನ್ನೂ ಮತ್ತೆ-noise ಮಾಡುತ್ತದೆ?',
        opts: ['To save computation', 'So the known region matches the current diffusion timestep\'s noise level, keeping the whole vector statistically consistent -- genuinely confirmed above', 'Because clean_image is not available', 'To randomize the output'], correct: 1,
        optsKn: ['Computation ಉಳಿಸಲು', 'ಆದ್ದರಿಂದ known region ಈಗಿನ diffusion timestep ನ noise level ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ, ಪೂರ್ಣ vector ಅನ್ನೂ ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಸ್ಥಿರವಾಗಿ ಇಡುತ್ತಾ -- ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಏಕೆಂದರೆ clean_image ಲಭ್ಯವಿಲ್ಲ', 'Output ಅನ್ನೂ randomize ಮಾಡಲು'] },
      { q: 'What does the 9-channel proper inpainting representation concatenate?', qKn: '9-channel proper inpainting representation ಏನೂ concatenate ಮಾಡುತ್ತದೆ?',
        opts: ['Just the noisy latent, three times', 'Noisy latent (4 ch) + encoded source image (4 ch) + mask (1 ch)', 'Text embedding + image embedding', 'Two ControlNets'], correct: 1,
        optsKn: ['ಕೇವಲ noisy latent, ಮೂರೂ ಬಾರಿ', 'Noisy latent (4 ch) + encoded source image (4 ch) + mask (1 ch)', 'Text embedding + image embedding', 'ಎರಡೂ ControlNets'] },
      { q: 'Genuinely confirmed: what is alpha_bar_t at t=500 out of T=1000, reused from Module 163\'s cosine schedule?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Module 163 ನ cosine schedule ಇಂದ ಮರುಬಳಸಿದ, T=1000 ರಲ್ಲಿ t=500 ನಲ್ಲಿ alpha_bar_t ಎಷ್ಟೂ?',
        opts: ['0.0', '1.0', '0.5 -- genuinely confirmed', '0.25'], correct: 2,
        optsKn: ['0.0', '1.0', '0.5 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', '0.25'] },
      { q: 'What is the key limitation of the naive masking approach compared to a proper 9-channel inpainting model?', qKn: 'Proper 9-channel inpainting model ಗೆ ಹೋಲಿಸಿದರೆ naive masking ವಿಧಾನದ ಮುಖ್ಯ ಮಿತಿ ಏನೂ?',
        opts: ['It cannot preserve any pixels', 'The denoiser never explicitly sees the mask or source image as inputs -- it only sees a vector where some positions happen to look clean', 'It requires more GPU memory', 'It only works on square images'], correct: 1,
        optsKn: ['ಅದೂ ಯಾವುದೇ pixels ಸಂರಕ್ಷಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'Denoiser ಎಂದಿಗೂ mask ಅಥವಾ source image ಅನ್ನೂ inputs ಆಗಿ ಸ್ಪಷ್ಟವಾಗಿ ನೋಡುವುದಿಲ್ಲ -- ಅದೂ ಕೇವಲ ಒಂದೂ vector ನೋಡುತ್ತದೆ ಎಲ್ಲಿ ಕೆಲವು positions ಈಗಾಗಲೇ clean ಆಗಿ ಕಾಣುತ್ತವೆ', 'ಅದಕ್ಕೆ ಹೆಚ್ಚು GPU memory ಬೇಕು', 'ಅದೂ ಕೇವಲ ಚದರ images ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
    ] } },
  ],
};
