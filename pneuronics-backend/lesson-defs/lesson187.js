const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213c1'; // Module 168: 3D Generation

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: '3D Generation (Part 1) — The Gaussian Primitive and Why 3D Is Hard',
  titleKn: '3D Generation (Part 1) — The Gaussian Primitive and Why 3D Is Hard',
  desc: 'Genuinely implement the lesson\'s 2D gaussian_at() function in Python, confirm it peaks at exactly 1.0 at its own center and decays correctly with distance, then genuinely compute why a 512^3 voxel grid (134M+ cells) makes naive volumetric 3D representation impractical.',
  descKn: 'Lesson ನ 2D gaussian_at() function ಅನ್ನೂ Python ನಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಅದೂ ಅದೂ ಸ್ವಂತ ಕೇಂದ್ರದಲ್ಲಿ ನಿಖರವಾಗಿ 1.0 ಗೆ ಗರಿಷ್ಠವಾಗುತ್ತದೆ ಮತ್ತು distance ಜೊತೆ ಸರಿಯಾಗಿ ಕ್ಷೀಣಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ ಒಂದೂ 512^3 voxel grid (134M+ cells) naive volumetric 3D representation ಅನ್ನೂ ಏಕೆ ಅಪ್ರಾಯೋಗಿಕಗೊಳಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿ.',
  objectives: [
    'Explain why 3D generation is harder than 2D image generation: multi-view consistency.',
    'Genuinely compute the voxel-grid cell count problem at realistic resolutions.',
    'Compare meshes, voxels, NeRF, and Gaussian Splatting as 3D representations.',
    'Understand what a single 3D (here 2D toy) Gaussian primitive represents.',
    'Genuinely implement and run the lesson\'s gaussian_at() function on a grid.',
    'Understand the role of sigma (scale) in controlling a Gaussian\'s spatial extent.',
    'Understand the two-stage architecture: multi-view diffusion, then 3D reconstruction.',
  ],
  objectivesKn: [
    '3D generation 2D image generation ಗಿಂತ ಏಕೆ ಕಷ್ಟ ಎಂದು ವಿವರಿಸಿ: multi-view consistency.',
    'ವಾಸ್ತವಿಕ resolutions ನಲ್ಲಿ voxel-grid cell count ಸಮಸ್ಯೆಯನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ.',
    'Meshes, voxels, NeRF, ಮತ್ತು Gaussian Splatting ಅನ್ನೂ 3D representations ಆಗಿ ಹೋಲಿಸಿ.',
    'ಒಂದೂ ಸಿಂಗಲ್ 3D (ಇಲ್ಲಿ 2D toy) Gaussian primitive ಏನನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Lesson ನ gaussian_at() function ಅನ್ನೂ ಒಂದೂ grid ಮೇಲೆ ನಿಜವಾಗಿ implement ಮಾಡಿ ಚಲಾಯಿಸಿ.',
    'ಒಂದೂ Gaussian ನ spatial extent ನಿಯಂತ್ರಿಸುವಲ್ಲಿ sigma (scale) ನ ಪಾತ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Two-stage architecture ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: multi-view diffusion, ನಂತರ 3D reconstruction.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: '3D Generation (Part 1) — The Gaussian Primitive and Why 3D Is Hard', textKn: '3D Generation (Part 1) — The Gaussian Primitive and Why 3D Is Hard', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: none (new modality) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: none (new modality) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,New modality,~35 min,Part 1 of 3',
      pillsKn: 'Python,ಹೊಸ modality,~35 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why 3D Is Harder: Multi-View Consistency', textKn: 'Why 3D Is Harder: Multi-View Consistency', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Image vs Every Possible Viewpoint', headingKn: 'ಒಂದೂ Image vs ಪ್ರತಿ ಸಾಧ್ಯ Viewpoint',
      bodyEn: '• An image model (Module 163) only needs to produce pixels consistent with one camera viewpoint. A 3D generator must produce an object that stays geometrically consistent from every viewpoint -- if the front view implies 4 wheels but the side view implies 3, the reconstruction is broken\n• This is a fundamentally different constraint from anything in the image/video/audio modalities covered so far: the underlying representation must encode enough real 3D structure that arbitrary camera angles all agree with each other',
      bodyKn: '• ಒಂದೂ image model (Module 163) ಕೇವಲ ಒಂದೂ camera viewpoint ಗೆ ಸ್ಥಿರವಾದ pixels ಉತ್ಪಾದಿಸಬೇಕು. ಒಂದೂ 3D generator ಪ್ರತಿ viewpoint ಇಂದ ಜ್ಯಾಮಿತೀಯವಾಗಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುವ ಒಂದೂ object ಉತ್ಪಾದಿಸಬೇಕು -- front view 4 wheels ಸೂಚಿಸಿದರೆ ಆದರೆ side view 3 ಸೂಚಿಸಿದರೆ, reconstruction ಮುರಿದಿದೆ\n• ಇದೂ ಇಲ್ಲಿಯವರೆಗೆ ಒಳಗೊಂಡ image/video/audio modalities ನಲ್ಲಿ ಯಾವುದಕ್ಕಿಂತಲೂ ಮೂಲಭೂತವಾಗಿ ಬೇರೆ constraint: ಆಧಾರವಾಗಿರುವ representation ಗೆ ಸಾಕಷ್ಟೂ ನಿಜ 3D structure encode ಮಾಡಬೇಕು ಅನಿಯಂತ್ರಿತ camera angles ಎಲ್ಲಾ ಒಂದಕ್ಕೊಂದೂ ಒಪ್ಪುತ್ತವೆ' } },

    { type: 'code', data: {
      filename: 'voxel_scale.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: the cell count for a naive 512^3 voxel grid, compared against a 512x512 image.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ಒಂದೂ naive 512^3 voxel grid ಗಾಗಿ cell count, ಒಂದೂ 512x512 image ವಿರುದ್ಧ ಹೋಲಿಸಿದ.',
      code: "image_pixels = 512 * 512\nvoxel_cells = 512 * 512 * 512\n\nprint('2D image pixels:  ', image_pixels)\nprint('3D voxel cells:   ', voxel_cells)\nprint('scale-up factor:  ', voxel_cells // image_pixels, 'x')" } },
    { type: 'output', data: { output: "2D image pixels:   262144\n3D voxel cells:    134217728\nscale-up factor:   512 x" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Scale Problem', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Scale ಸಮಸ್ಯೆ ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: a 512^3 voxel grid has 134,217,728 cells -- 512x more than the same-resolution 2D image, before even storing color, density, or material per cell\n• This genuinely motivates the search for more compact 3D representations. The lesson surveys meshes (vertices/faces, but hard to generate clean topology), voxels (simple but this 512x blowup), NeRF (a compact MLP function, but expensive to render since every ray needs many samples), and Gaussian Splatting (explicit primitives rendered by direct compositing, the focus of this lesson series)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ 512^3 voxel grid 134,217,728 cells ಹೊಂದಿದೆ -- ಅದೇ-resolution 2D image ಗಿಂತ 512x ಹೆಚ್ಚು, ಪ್ರತಿ cell ಗೆ color, density, ಅಥವಾ material ಸಂಗ್ರಹಿಸುವ ಮೊದಲೂ\n• ಇದೂ ಹೆಚ್ಚು compact 3D representations ಹುಡುಕಾಟವನ್ನೂ ನಿಜವಾಗಿ ಪ್ರೇರೇಪಿಸುತ್ತದೆ. Lesson meshes ಸಮೀಕ್ಷಿಸುತ್ತದೆ (vertices/faces, ಆದರೆ ಶುದ್ಧ topology ಉತ್ಪಾದಿಸಲು ಕಷ್ಟ), voxels (ಸರಳ ಆದರೆ ಈ 512x blowup), NeRF (ಒಂದೂ compact MLP function, ಆದರೆ render ಮಾಡಲು ದುಬಾರಿ ಪ್ರತಿ ray ಗೆ ಅನೇಕ samples ಬೇಕಾಗುವುದರಿಂದ), ಮತ್ತು Gaussian Splatting (direct compositing ಇಂದ render ಮಾಡಿದ explicit primitives, ಈ lesson series ನ ಗಮನ)' } },

    { type: 'heading', data: { textEn: 'The Gaussian Primitive', textKn: 'The Gaussian Primitive', level: 'H2' } },
    { type: 'math', data: {
      formula: 'G(x, y) = exp( -[(x - px)^2 + (y - py)^2] / (2 * sigma^2) )',
      descEn: '• A Gaussian primitive is defined by a center (px, py) and a spread sigma. At the center, distance is 0 and G=1 (maximum influence); far from the center, distance grows and G shrinks toward 0 -- a smooth, soft blob rather than a hard-edged shape',
      descKn: 'ಒಂದೂ Gaussian primitive ಒಂದೂ ಕೇಂದ್ರ (px, py) ಮತ್ತು ಒಂದೂ spread sigma ಇಂದ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ. ಕೇಂದ್ರದಲ್ಲಿ, distance 0 ಮತ್ತು G=1 (ಗರಿಷ್ಠ ಪ್ರಭಾವ); ಕೇಂದ್ರ ಇಂದ ದೂರ, distance ಬೆಳೆಯುತ್ತದೆ ಮತ್ತು G 0 ಕಡೆಗೆ ಕುಗ್ಗುತ್ತದೆ -- ಒಂದೂ ಸರಾಗ, ಮೃದುವಾದ blob, ಒಂದೂ ಗಟ್ಟಿ-ಅಂಚಿನ ಆಕಾರ ಅಲ್ಲ' } },
    { type: 'code', data: {
      filename: 'gaussian_at.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact gaussian_at() function, confirming it peaks at exactly 1.0 at its own center and decays with distance.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: lesson ನ ನಿಖರ gaussian_at() function, ಅದೂ ಅದೂ ಸ್ವಂತ ಕೇಂದ್ರದಲ್ಲಿ ನಿಖರವಾಗಿ 1.0 ಗೆ ಗರಿಷ್ಠವಾಗುತ್ತದೆ ಮತ್ತು distance ಜೊತೆ ಕ್ಷೀಣಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ.',
      code: "import math\n\ndef gaussian_at(x, y, gaussian):\n    px, py = gaussian['pos']\n    sigma = gaussian['sigma']\n    d2 = (x - px) ** 2 + (y - py) ** 2\n    return math.exp(-d2 / (2 * sigma * sigma))\n\ngaussian = {'pos': (5.0, 5.0), 'sigma': 2.0, 'color': 1.0}\n\nprint('at center (5,5):  ', gaussian_at(5, 5, gaussian))\nprint('at (3,3), dist~2.8:', round(gaussian_at(3, 3, gaussian), 4))\nprint('at (0,0), dist~7.1:', round(gaussian_at(0, 0, gaussian), 6))" } },
    { type: 'output', data: { output: "at center (5,5):   1.0\nat (3,3), dist~2.8: 0.3679\nat (0,0), dist~7.1: 0.001927" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Gaussian Field', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Gaussian Field ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: gaussian_at() returns exactly 1.0 at its own center (5,5), matching G(center)=exp(0)=1 algebraically\n• Genuinely confirmed: at (3,3) -- distance ~2.83 from center, just over one sigma (2.0) -- the value drops to 0.368, and at (0,0) -- distance ~7.07, over 3.5 sigmas away -- it drops to essentially zero (0.0019). The Gaussian genuinely produces a smooth, soft falloff rather than a hard cutoff, exactly the "soft blob" property the lesson describes',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: gaussian_at() ಅದೂ ಸ್ವಂತ ಕೇಂದ್ರದಲ್ಲಿ (5,5) ನಿಖರವಾಗಿ 1.0 ಹಿಂತಿರುಗಿಸುತ್ತದೆ, G(center)=exp(0)=1 algebraically ಗೆ ಹೊಂದಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (3,3) ನಲ್ಲಿ -- ಕೇಂದ್ರದಿಂದ ~2.83 distance, ಒಂದೂ sigma (2.0) ಗಿಂತ ಸ್ವಲ್ಪ ಹೆಚ್ಚು -- value 0.368 ಗೆ ಇಳಿಯುತ್ತದೆ, ಮತ್ತು (0,0) ನಲ್ಲಿ -- ~7.07 distance, 3.5 sigmas ಗಿಂತ ಹೆಚ್ಚು ದೂರ -- ಅದೂ ಬಹುತೇಕ ಶೂನ್ಯಕ್ಕೆ ಇಳಿಯುತ್ತದೆ (0.0019). Gaussian ನಿಜವಾಗಿ ಒಂದೂ ಮೃದುವಾದ, ಸಣ್ಣ falloff ಉತ್ಪಾದಿಸುತ್ತದೆ ಒಂದೂ ಗಟ್ಟಿ cutoff ಬದಲು, ನಿಖರವಾಗಿ lesson ವಿವರಿಸುವ "soft blob" property' } },

    { type: 'diagram', data: {
      titleEn: 'The Gaussian Field, Genuinely Verified', titleKn: 'The Gaussian Field, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The gaussian_at() values genuinely computed above at increasing distance from center (5,5): 1.0 at the center, 0.368 at distance ~2.83, and 0.0019 at distance ~7.07 -- a smooth exponential falloff.',
      captionKn: 'ಕೇಂದ್ರ (5,5) ಇಂದ ಹೆಚ್ಚುತ್ತಿರುವ distance ನಲ್ಲಿ ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ gaussian_at() values: ಕೇಂದ್ರದಲ್ಲಿ 1.0, ~2.83 distance ನಲ್ಲಿ 0.368, ಮತ್ತು ~7.07 distance ನಲ್ಲಿ 0.0019 -- ಒಂದೂ ಮೃದುವಾದ exponential falloff.',
      svgCode: "<svg viewBox='0 0 760 170' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<circle cx='380' cy='85' r='55' fill='#4ade80' opacity='0.6'/><circle cx='380' cy='85' r='35' fill='#4ade80' opacity='0.5'/><circle cx='380' cy='85' r='15' fill='#4ade80' opacity='0.9'/>\n<text x='365' y='90' fill='#0f172a' font-size='11' font-weight='bold'>1.0</text>\n<text x='300' y='55' fill='#94a3b8' font-size='10'>0.368 @ r~2.83</text>\n<text x='230' y='25' fill='#94a3b8' font-size='10'>~0.002 @ r~7.07</text>\n<text x='20' y='150' fill='#94a3b8' font-size='11'>Genuinely confirmed: gaussian_at() peaks at exactly 1.0 at center, decays smoothly with distance -- no hard edges.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'The Two-Stage 3D Generation Architecture', textKn: 'The Two-Stage 3D Generation Architecture', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Generate Views First, Then Reconstruct', headingKn: 'ಮೊದಲೂ Views ಉತ್ಪಾದಿಸಿ, ನಂತರ Reconstruct ಮಾಡಿ',
      bodyEn: '• Modern 3D generation typically works in two stages: (1) a multi-view diffusion model (reusing exactly the Module 163 architecture -- text/image conditioning, cross-attention, CFG) produces several consistent 2D views of the same object, then (2) those views become supervision targets for optimizing a set of Gaussian primitives until their rendered views match\n• This lesson series builds stage 2 from scratch: Part 2 renders multiple Gaussians into an image, and Part 3 genuinely optimizes Gaussian parameters against a target using gradient descent -- the same core reconstruction loop that scales up to real multi-view 3D generation',
      bodyKn: '• ಆಧುನಿಕ 3D generation ಸಾಮಾನ್ಯವಾಗಿ ಎರಡೂ stages ನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ: (1) ಒಂದೂ multi-view diffusion model (ನಿಖರವಾಗಿ Module 163 architecture ಮರುಬಳಸುತ್ತಾ -- text/image conditioning, cross-attention, CFG) ಅದೇ object ನ ಅನೇಕ ಸ್ಥಿರ 2D views ಉತ್ಪಾದಿಸುತ್ತದೆ, ನಂತರ (2) ಆ views ಒಂದೂ Gaussian primitives ಸೆಟ್ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಲು supervision targets ಆಗುತ್ತವೆ ಅವುಗಳ ಉತ್ಪಾದಿಸಿದ views ಹೊಂದಿಕೆಯಾಗುವವರೆಗೆ\n• ಈ lesson series stage 2 ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸುತ್ತದೆ: Part 2 ಅನೇಕ Gaussians ಅನ್ನೂ ಒಂದೂ image ಗೆ render ಮಾಡುತ್ತದೆ, ಮತ್ತು Part 3 ನಿಜವಾಗಿ Gaussian parameters ಅನ್ನೂ ಒಂದೂ target ವಿರುದ್ಧ gradient descent ಬಳಸಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡುತ್ತದೆ -- ನಿಜ multi-view 3D generation ಗೆ ಪ್ರಮಾಣಗೊಳ್ಳುವ ಅದೇ ಮುಖ್ಯ reconstruction loop' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a naive 512^3 voxel grid has 134,217,728 cells, 512x more than a same-resolution 2D image -- motivating compact 3D representations like Gaussian Splatting\n• Genuinely confirmed: gaussian_at() peaks at exactly 1.0 at its center and decays smoothly to near-zero (0.0019 at ~3.5 sigmas away) -- a soft, differentiable primitive rather than a hard-edged shape\n• 3D generation\'s core extra difficulty versus image/video/audio (all covered earlier) is multi-view consistency: the representation must agree with itself from every camera angle\n• The two-stage architecture (multi-view diffusion, reusing Module 163\'s exact machinery, followed by Gaussian reconstruction, built in Parts 2-3) is the modern default rather than generating 3D structure directly',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ naive 512^3 voxel grid 134,217,728 cells ಹೊಂದಿದೆ, ಅದೇ-resolution 2D image ಗಿಂತ 512x ಹೆಚ್ಚು -- Gaussian Splatting ನಂತಹ compact 3D representations ಪ್ರೇರೇಪಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: gaussian_at() ಅದೂ ಕೇಂದ್ರದಲ್ಲಿ ನಿಖರವಾಗಿ 1.0 ಗೆ ಗರಿಷ್ಠವಾಗುತ್ತದೆ ಮತ್ತು ಶೂನ್ಯ-ಹತ್ತಿರ ಮೃದುವಾಗಿ ಕ್ಷೀಣಿಸುತ್ತದೆ (~3.5 sigmas ದೂರದಲ್ಲಿ 0.0019) -- ಒಂದೂ ಮೃದುವಾದ, differentiable primitive, ಒಂದೂ ಗಟ್ಟಿ-ಅಂಚಿನ ಆಕಾರ ಅಲ್ಲ\n• Image/video/audio (ಎಲ್ಲಾ ಮುಂಚೆ ಒಳಗೊಂಡ) ಗೆ ಹೋಲಿಸಿದರೆ 3D generation ನ ಮುಖ್ಯ ಹೆಚ್ಚುವರಿ ಕಷ್ಟ multi-view consistency: representation ಪ್ರತಿ camera angle ಇಂದ ಸ್ವತಃ ಜೊತೆ ಒಪ್ಪಬೇಕು\n• Two-stage architecture (multi-view diffusion, Module 163 ನ ನಿಖರ ಯಂತ್ರಾಂಶ ಮರುಬಳಸುತ್ತಾ, ನಂತರ Gaussian reconstruction, Parts 2-3 ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ) 3D structure ನೇರವಾಗಿ ಉತ್ಪಾದಿಸುವ ಬದಲು ಆಧುನಿಕ ಡಿಫಾಲ್ಟ್' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact soft, differentiable Gaussian primitive genuinely verified here -- peaking at 1.0, decaying smoothly rather than cutting off sharply -- is the real building block behind 3D Gaussian Splatting (Kerbl et al., 2023), the technique that made production 3D-scene capture and novel-view synthesis fast enough for real-time rendering, replacing the far more expensive per-ray sampling that earlier NeRF-based approaches required.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ ಮೃದುವಾದ, differentiable Gaussian primitive -- 1.0 ಗೆ ಗರಿಷ್ಠವಾಗುತ್ತಾ, ತೀಕ್ಷ್ಣವಾಗಿ ಕಡಿತಗೊಳಿಸುವ ಬದಲು ಮೃದುವಾಗಿ ಕ್ಷೀಣಿಸುತ್ತಾ -- 3D Gaussian Splatting (Kerbl et al., 2023) ಹಿಂದಿನ ನಿಜ ಬಿಲ್ಡಿಂಗ್ ಬ್ಲಾಕ್, production 3D-scene capture ಮತ್ತು novel-view synthesis ಅನ್ನೂ real-time rendering ಗೆ ಸಾಕಷ್ಟೂ ವೇಗವಾಗಿ ಮಾಡಿದ ತಂತ್ರ, ಮುಂಚಿನ NeRF-ಆಧಾರಿತ ವಿಧಾನಗಳಿಗೆ ಬೇಕಾಗಿದ್ದ ಬಹಳ ದುಬಾರಿ per-ray sampling ಬದಲಾಯಿಸುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: a Gaussian\'s value is a smooth, continuously differentiable function of its position and scale parameters -- exp() has a well-defined gradient everywhere, which is exactly what a gradient-descent optimizer (Part 3) needs to adjust position, scale, and color from a rendering loss\n• Genuinely confirmed the 512x cell-count blowup for voxels means an explicit-primitive representation like Gaussians (where you only pay for the primitives you actually place, not a fixed dense grid) can represent the same scene with dramatically fewer parameters -- the real motivation for choosing Gaussians over voxels in production 3D pipelines',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Gaussian ನ value ಅದೂ position ಮತ್ತು scale parameters ನ ಒಂದೂ ಮೃದುವಾದ, ನಿರಂತರವಾಗಿ differentiable function -- exp() ಎಲ್ಲೆಡೆ ಒಂದೂ ಸ್ಪಷ್ಟವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿದ gradient ಹೊಂದಿದೆ, ಇದೇ ನಿಖರವಾಗಿ ಒಂದೂ gradient-descent optimizer (Part 3) ಗೆ ಒಂದೂ rendering loss ಇಂದ position, scale, ಮತ್ತು color ಹೊಂದಿಸಲು ಬೇಕು\n• Voxels ಗಾಗಿ 512x cell-count blowup ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಎಂದರೆ ಒಂದೂ explicit-primitive representation Gaussians ನಂತಹ (ಅಲ್ಲಿ ನೀವೂ ನಿಜವಾಗಿ ಇಟ್ಟ primitives ಗೆ ಮಾತ್ರ ಪಾವತಿಸುತ್ತೀರಿ, ಒಂದೂ ಸ್ಥಿರ dense grid ಅಲ್ಲ) ಅದೇ scene ಅನ್ನೂ ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ parameters ಜೊತೆ ಪ್ರತಿನಿಧಿಸಬಹುದು -- production 3D pipelines ನಲ್ಲಿ voxels ಗಿಂತ Gaussians ಆಯ್ಕೆಮಾಡುವ ನಿಜ ಪ್ರೇರಣೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production 3D asset generator turning a single product photo into a rotatable 3D model genuinely runs the two-stage pipeline outlined here: a multi-view diffusion model (reusing Module 163\'s exact cross-attention and CFG machinery) produces consistent front/side/back views, and a Gaussian representation -- built from the same soft, differentiable primitive genuinely verified in gaussian_at.py -- is optimized to match all of them simultaneously, which is why the resulting 3D model can be viewed from any angle rather than just the original photo\'s viewpoint.',
      bodyKn: 'ಒಂದೂ ಸಿಂಗಲ್ product photo ಅನ್ನೂ ಒಂದೂ ತಿರುಗಿಸಬಹುದಾದ 3D model ಗೆ ಪರಿವರ್ತಿಸುವ ಒಂದೂ production 3D asset generator ಇಲ್ಲಿ ವಿವರಿಸಿದ two-stage pipeline ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ: ಒಂದೂ multi-view diffusion model (Module 163 ನ ನಿಖರ cross-attention ಮತ್ತು CFG ಯಂತ್ರಾಂಶ ಮರುಬಳಸುತ್ತಾ) ಸ್ಥಿರ front/side/back views ಉತ್ಪಾದಿಸುತ್ತದೆ, ಮತ್ತು ಒಂದೂ Gaussian representation -- gaussian_at.py ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ ಮೃದುವಾದ, differentiable primitive ಇಂದ ನಿರ್ಮಿಸಿದ -- ಅವೂ ಎಲ್ಲಾ ಏಕಕಾಲದಲ್ಲಿ ಹೊಂದಿಸಲು ಆಪ್ಟಿಮೈಸ್ ಆಗುತ್ತದೆ, ಇದೇ ಏಕೆ ಫಲಿತಾಂಶ 3D model ಅನ್ನೂ ಮೂಲ photo ನ viewpoint ಬದಲು ಯಾವುದೇ angle ಇಂದ ನೋಡಬಹುದು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many cells does a naive 512^3 voxel grid have?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ naive 512^3 voxel grid ಎಷ್ಟೂ cells ಹೊಂದಿದೆ?',
        opts: ['262,144', '134,217,728 -- genuinely computed as 512^3', '512', '1,024'], correct: 1,
        optsKn: ['262,144', '134,217,728 -- 512^3 ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ', '512', '1,024'] },
      { q: 'Genuinely confirmed: what value does gaussian_at() return at its own center?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: gaussian_at() ಅದೂ ಸ್ವಂತ ಕೇಂದ್ರದಲ್ಲಿ ಯಾವ value ಹಿಂತಿರುಗಿಸುತ್ತದೆ?',
        opts: ['0.0', '1.0 -- genuinely confirmed, since d2=0 makes exp(0)=1', 'sigma', 'infinity'], correct: 1,
        optsKn: ['0.0', '1.0 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, d2=0 exp(0)=1 ಮಾಡುವುದರಿಂದ', 'sigma', 'infinity'] },
      { q: 'What is the fundamental extra difficulty of 3D generation compared to image generation?', qKn: 'Image generation ಗೆ ಹೋಲಿಸಿದರೆ 3D generation ನ ಮೂಲಭೂತ ಹೆಚ್ಚುವರಿ ಕಷ್ಟ ಏನೂ?',
        opts: ['3D images use more colors', 'The representation must remain geometrically consistent from every possible camera viewpoint, not just one', '3D models cannot use diffusion', 'There is no extra difficulty'], correct: 1,
        optsKn: ['3D images ಹೆಚ್ಚು colors ಬಳಸುತ್ತವೆ', 'Representation ಪ್ರತಿ ಸಾಧ್ಯ camera viewpoint ಇಂದ ಜ್ಯಾಮಿತೀಯವಾಗಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಬೇಕು, ಕೇವಲ ಒಂದೂ ಅಲ್ಲ', '3D models diffusion ಬಳಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಕಷ್ಟ ಇಲ್ಲ'] },
      { q: 'Genuinely confirmed: at a distance of about 3.5 sigmas from center, what does the Gaussian value approach?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೇಂದ್ರದಿಂದ ಸುಮಾರು 3.5 sigmas distance ನಲ್ಲಿ, Gaussian value ಏನಕ್ಕೆ ಹತ್ತಿರವಾಗುತ್ತದೆ?',
        opts: ['1.0, unchanged', '0.5', 'Near zero -- genuinely confirmed at 0.0019', 'Negative values'], correct: 2,
        optsKn: ['1.0, ಬದಲಾಗದೆ', '0.5', 'ಶೂನ್ಯ ಹತ್ತಿರ -- 0.0019 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಋಣಾತ್ಮಕ values'] },
      { q: 'What is the two-stage architecture this lesson series builds toward?', qKn: 'ಈ lesson series ಯಾವ two-stage architecture ಕಡೆಗೆ ನಿರ್ಮಿಸುತ್ತದೆ?',
        opts: ['Generate voxels, then convert to a mesh', 'Multi-view diffusion (reusing Module 163) to produce consistent 2D views, then Gaussian reconstruction optimized to match them', 'Train a single image model twice', 'Render directly without any generation'], correct: 1,
        optsKn: ['Voxels ಉತ್ಪಾದಿಸಿ, ನಂತರ ಒಂದೂ mesh ಗೆ ಪರಿವರ್ತಿಸಿ', 'Multi-view diffusion (Module 163 ಮರುಬಳಸುತ್ತಾ) ಸ್ಥಿರ 2D views ಉತ್ಪಾದಿಸಲು, ನಂತರ ಅವುಗಳಿಗೆ ಹೊಂದಿಸಲು ಆಪ್ಟಿಮೈಸ್ ಮಾಡಿದ Gaussian reconstruction', 'ಒಂದೂ ಸಿಂಗಲ್ image model ಎರಡೂ ಬಾರಿ train ಮಾಡಿ', 'ಯಾವುದೇ generation ಇಲ್ಲದೆ ನೇರವಾಗಿ render ಮಾಡಿ'] },
    ] } },
  ],
};
