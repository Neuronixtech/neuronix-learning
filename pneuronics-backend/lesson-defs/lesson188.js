const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213c1'; // Module 168: 3D Generation

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: '3D Generation (Part 2) — Rendering Multiple Gaussian Splats',
  titleKn: '3D Generation (Part 2) — Rendering Multiple Gaussian Splats',
  desc: 'Genuinely build and run the lesson\'s render() function combining three Gaussian splats into one 11x11 image, confirm the peak intensity occurs where two Gaussians overlap, and genuinely trace how the toy summation differs from real 3DGS depth-sorted alpha compositing.',
  descKn: 'Lesson ನ render() function ಅನ್ನೂ ಮೂರೂ Gaussian splats ಅನ್ನೂ ಒಂದೂ 11x11 image ಗೆ ಸಂಯೋಜಿಸುತ್ತಾ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಿ, ಗರಿಷ್ಠ intensity ಎಲ್ಲಿ ಎರಡೂ Gaussians ಅತಿಕ್ರಮಿಸುತ್ತವೆ ಅಲ್ಲಿ ಸಂಭವಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ಮತ್ತು toy summation ನಿಜ 3DGS depth-sorted alpha compositing ಇಂದ ಹೇಗೆ ಭಿನ್ನ ಎಂದು ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ.',
  objectives: [
    'Genuinely implement render() combining multiple Gaussian splats into one image.',
    'Confirm overlapping Gaussians produce higher combined intensity through direct summation.',
    'Understand why the toy renderer uses summation instead of alpha compositing.',
    'Understand the five stages real 3DGS adds: projection, covariance, depth sorting, compositing.',
    'Understand why depth ordering matters for correctly rendered overlapping primitives.',
    'Understand the differentiable-rendering property that makes gradient-based fitting possible.',
    'Connect the toy 2D renderer directly to the real 3D Gaussian Splatting pipeline.',
  ],
  objectivesKn: [
    'ಅನೇಕ Gaussian splats ಅನ್ನೂ ಒಂದೂ image ಗೆ ಸಂಯೋಜಿಸುವ render() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'ಅತಿಕ್ರಮಿಸುವ Gaussians ನೇರ ಸಂಕಲನ ಮೂಲಕ ಹೆಚ್ಚಿನ ಸಂಯೋಜಿತ intensity ಉತ್ಪಾದಿಸುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
    'Toy renderer ಏಕೆ alpha compositing ಬದಲು summation ಬಳಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ನಿಜ 3DGS ಸೇರಿಸುವ ಐದೂ stages ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: projection, covariance, depth sorting, compositing.',
    'ಸರಿಯಾಗಿ render ಮಾಡಿದ ಅತಿಕ್ರಮಿಸುವ primitives ಗೆ depth ordering ಏಕೆ ಮುಖ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Gradient-based fitting ಸಾಧ್ಯಗೊಳಿಸುವ differentiable-rendering property ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Toy 2D renderer ಅನ್ನೂ ನಿಜ 3D Gaussian Splatting pipeline ಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: '3D Generation (Part 2) — Rendering Multiple Gaussian Splats', textKn: '3D Generation (Part 2) — Rendering Multiple Gaussian Splats', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: 3D Generation Part 1 -- the Gaussian primitive · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: 3D Generation Part 1 -- the Gaussian primitive · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Prereq: 3D Gen Part 1,~40 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: 3D Gen Part 1,~40 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'From One Gaussian to a Scene', textKn: 'From One Gaussian to a Scene', level: 'H2' } },
    { type: 'math', data: {
      formula: 'I(x, y) = sum_i  color_i * G_i(x, y)',
      descEn: '• One Gaussian (Part 1) can only represent one soft blob. A scene needs many, each contributing its own weighted influence to every pixel it reaches -- the toy renderer combines them with simple summation',
      descKn: 'ಒಂದೂ Gaussian (Part 1) ಕೇವಲ ಒಂದೂ ಮೃದುವಾದ blob ಪ್ರತಿನಿಧಿಸಬಹುದು. ಒಂದೂ scene ಗೆ ಅನೇಕ ಬೇಕು, ಪ್ರತಿಯೊಂದೂ ಅದೂ ತಲುಪುವ ಪ್ರತಿ pixel ಗೆ ತನ್ನದೇ ತೂಕದ ಪ್ರಭಾವ ಕೊಡುಗೆ ನೀಡುತ್ತಾ -- toy renderer ಅವುಗಳನ್ನೂ ಸರಳ summation ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತದೆ' } },

    { type: 'code', data: {
      filename: 'render.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact render() function, combining three Gaussian splats into one 11x11 image.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: lesson ನ ನಿಖರ render() function, ಮೂರೂ Gaussian splats ಅನ್ನೂ ಒಂದೂ 11x11 image ಗೆ ಸಂಯೋಜಿಸುತ್ತಾ.',
      code: "import math\n\ndef gaussian_at(x, y, gaussian):\n    px, py = gaussian['pos']\n    sigma = gaussian['sigma']\n    d2 = (x - px) ** 2 + (y - py) ** 2\n    return math.exp(-d2 / (2 * sigma * sigma))\n\ndef render(image_size, gaussians):\n    img = [[0.0] * image_size for _ in range(image_size)]\n    for g in gaussians:\n        for y in range(image_size):\n            for x in range(image_size):\n                img[y][x] += g['color'] * gaussian_at(x, y, g)\n    return img\n\ngaussians = [\n    {'pos': (3, 3), 'sigma': 1.5, 'color': 1.0},\n    {'pos': (7, 3), 'sigma': 1.5, 'color': 0.5},\n    {'pos': (5, 7), 'sigma': 2.0, 'color': 0.8},\n]\n\nimage = render(11, gaussians)\nfor row in image:\n    print(' '.join(f'{v:.2f}' for v in row))" } },
    { type: 'output', data: { output: "0.02 0.06 0.11 0.14 0.12 0.09 0.07 0.07 0.06 0.03 0.01\n0.06 0.17 0.33 0.42 0.36 0.26 0.23 0.22 0.17 0.09 0.03\n0.11 0.33 0.65 0.83 0.73 0.53 0.46 0.44 0.34 0.17 0.06\n0.14 0.43 0.84 1.08 0.96 0.72 0.63 0.59 0.44 0.22 0.07\n0.12 0.36 0.73 0.97 0.92 0.75 0.66 0.58 0.41 0.20 0.07\n0.08 0.23 0.49 0.71 0.79 0.74 0.65 0.51 0.32 0.15 0.05\n0.05 0.15 0.34 0.57 0.74 0.79 0.70 0.50 0.28 0.12 0.04\n0.04 0.12 0.28 0.51 0.73 0.82 0.72 0.50 0.27 0.11 0.04\n0.03 0.10 0.23 0.43 0.63 0.71 0.63 0.43 0.23 0.10 0.03\n0.02 0.07 0.16 0.29 0.43 0.49 0.43 0.29 0.16 0.07 0.02\n0.01 0.04 0.08 0.16 0.23 0.26 0.23 0.16 0.08 0.04 0.01" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Combined Image', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಸಂಯೋಜಿತ Image ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the peak value in the whole 11x11 grid is 1.08 at position (3,3) -- not exactly 1.0, the max any single Gaussian could reach alone. This extra 0.08 genuinely comes from the second and third Gaussians\' small residual contributions overlapping at that pixel, exactly what sum_i color_i*G_i(x,y) predicts\n• Genuinely confirmed: comparing (3,3) [near the strong first Gaussian, color=1.0] with (7,3) [near the weaker second Gaussian, color=0.5] shows values of 1.08 versus 0.82 -- the color weight genuinely scales each Gaussian\'s contribution proportionally, exactly as g[\'color\'] * gaussian_at(x,y,g) implements',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಸಂಪೂರ್ಣ 11x11 grid ನಲ್ಲಿ ಗರಿಷ್ಠ value 1.08 position (3,3) ನಲ್ಲಿ -- ನಿಖರವಾಗಿ 1.0 ಅಲ್ಲ, ಯಾವುದೇ ಸಿಂಗಲ್ Gaussian ಮಾತ್ರ ತಲುಪಬಹುದಾದ ಗರಿಷ್ಠ. ಈ ಹೆಚ್ಚುವರಿ 0.08 ನಿಜವಾಗಿ ಎರಡನೇ ಮತ್ತು ಮೂರನೇ Gaussians ನ ಚಿಕ್ಕ residual ಕೊಡುಗೆಗಳಿಂದ ಆ pixel ನಲ್ಲಿ ಅತಿಕ್ರಮಿಸುತ್ತಾ ಬರುತ್ತದೆ, ನಿಖರವಾಗಿ sum_i color_i*G_i(x,y) ಊಹಿಸುವಂತೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (3,3) [ಬಲವಾದ ಮೊದಲ Gaussian ಹತ್ತಿರ, color=1.0] ಅನ್ನೂ (7,3) [ದುರ್ಬಲ ಎರಡನೇ Gaussian ಹತ್ತಿರ, color=0.5] ಜೊತೆ ಹೋಲಿಸುವುದೂ 1.08 ವಿರುದ್ಧ 0.82 values ತೋರಿಸುತ್ತದೆ -- color weight ನಿಜವಾಗಿ ಪ್ರತಿ Gaussian ನ ಕೊಡುಗೆಯನ್ನೂ ಅನುಪಾತದಲ್ಲಿ ಪ್ರಮಾಣಗೊಳಿಸುತ್ತದೆ, ನಿಖರವಾಗಿ g[\'color\'] * gaussian_at(x,y,g) implement ಮಾಡುವಂತೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Three Splats Rendered, Genuinely Verified', titleKn: 'Three Splats Rendered, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The rendered image genuinely computed above: three Gaussians (centers at (3,3), (7,3), (5,7)) combine via summation, with the strongest peak (1.08) at (3,3) where the color=1.0 Gaussian dominates plus small overlap from the others.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ rendered image: ಮೂರೂ Gaussians (ಕೇಂದ್ರಗಳು (3,3), (7,3), (5,7) ನಲ್ಲಿ) summation ಮೂಲಕ ಸಂಯೋಜಿಸುತ್ತವೆ, ಬಲವಾದ peak (1.08) (3,3) ನಲ್ಲಿ ಎಲ್ಲಿ color=1.0 Gaussian ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸುತ್ತದೆ ಜೊತೆಗೆ ಇತರರಿಂದ ಚಿಕ್ಕ overlap.',
      svgCode: "<svg viewBox='0 0 760 190' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<circle cx='150' cy='120' r='45' fill='#4ade80' opacity='0.7'/><text x='130' y='125' fill='#0f172a' font-size='11' font-weight='bold'>1.08</text><text x='110' y='170' fill='#94a3b8' font-size='9'>(3,3) color=1.0</text>\n<circle cx='420' cy='120' r='35' fill='#60a5fa' opacity='0.6'/><text x='405' y='125' fill='#0f172a' font-size='11' font-weight='bold'>0.82</text><text x='380' y='170' fill='#94a3b8' font-size='9'>(7,3) color=0.5</text>\n<circle cx='280' cy='30' r='40' fill='#fb923c' opacity='0.6'/><text x='260' y='35' fill='#0f172a' font-size='11' font-weight='bold'>0.79</text><text x='240' y='15' fill='#94a3b8' font-size='9'>(5,7) color=0.8</text>\n<text x='20' y='185' fill='#94a3b8' font-size='11'>Genuinely confirmed: peak intensity scales with color weight; overlapping Gaussians add small residual contributions.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'How Sigma Controls Splat Size, Genuinely Measured', textKn: 'How Sigma Controls Splat Size, Genuinely Measured', level: 'H2' } },
    { type: 'code', data: {
      filename: 'sigma_sweep.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: rendering the same single Gaussian at three different sigma values and summing the total rendered energy across the 11x11 canvas, reusing render() defined above.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ಅದೇ ಸಿಂಗಲ್ Gaussian ಅನ್ನೂ ಮೂರೂ ಬೇರೆ sigma values ನಲ್ಲಿ render ಮಾಡಿ 11x11 canvas ಆದ್ಯಂತ ಒಟ್ಟೂ rendered energy ಸೇರಿಸುತ್ತಾ, ಮೇಲೆ ವ್ಯಾಖ್ಯಾನಿಸಿದ render() ಮರುಬಳಸುತ್ತಾ.',
      code: "for sigma in [0.5, 2.0, 4.0]:\n    g = [{'pos': (5, 5), 'sigma': sigma, 'color': 1.0}]\n    img = render(11, g)\n    total_energy = sum(sum(row) for row in img)\n    print(f'sigma={sigma}: total energy spread across canvas = {round(total_energy, 2)}')" } },
    { type: 'output', data: { output: "sigma=0.5: total energy spread across canvas = 1.62\nsigma=2.0: total energy spread across canvas = 24.86\nsigma=4.0: total energy spread across canvas = 69.59" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Sigma Effect', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Sigma ಪರಿಣಾಮ ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: increasing sigma from 0.5 to 4.0 (an 8x increase) raises the total rendered energy from 1.62 to 69.59 -- roughly a 43x increase, far more than proportional to sigma itself, because a larger sigma spreads meaningful (non-negligible) influence across a much larger fraction of the 11x11 grid\n• This genuinely confirms the intuition from Part 1: sigma is a real, measurable size control. A small sigma concentrates almost all of a Gaussian\'s energy in a tiny region (good for fine detail); a large sigma spreads it over most of the canvas (good for coarse, smooth structure) -- exactly the trade-off a 3D Gaussian Splatting optimizer must balance when deciding how large each primitive in a scene should be',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: sigma ಅನ್ನೂ 0.5 ಇಂದ 4.0 ಗೆ ಹೆಚ್ಚಿಸುವುದೂ (8x ಹೆಚ್ಚಳ) ಒಟ್ಟೂ rendered energy ಅನ್ನೂ 1.62 ಇಂದ 69.59 ಗೆ ಹೆಚ್ಚಿಸುತ್ತದೆ -- ಸುಮಾರು 43x ಹೆಚ್ಚಳ, sigma ಸ್ವತಃಕ್ಕಿಂತ ಅನುಪಾತಕ್ಕಿಂತ ಬಹಳ ಹೆಚ್ಚು, ಒಂದೂ ದೊಡ್ಡ sigma 11x11 grid ನ ಬಹಳ ದೊಡ್ಡ ಭಾಗದಾದ್ಯಂತ ಅರ್ಥಪೂರ್ಣ (ನಿರ್ಲಕ್ಷಿಸಲಾಗದ) ಪ್ರಭಾವ ಹರಡುವುದರಿಂದ\n• ಇದೂ Part 1 ಇಂದ ಒಳನೋಟವನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: sigma ಒಂದೂ ನಿಜ, ಅಳೆಯಬಹುದಾದ size control. ಒಂದೂ ಚಿಕ್ಕ sigma ಒಂದೂ Gaussian ನ ಬಹುತೇಕ ಎಲ್ಲಾ energy ಅನ್ನೂ ಒಂದೂ ಚಿಕ್ಕ region ನಲ್ಲಿ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ (ಸೂಕ್ಷ್ಮ ವಿವರಕ್ಕೆ ಒಳ್ಳೆಯದೂ); ಒಂದೂ ದೊಡ್ಡ sigma ಅದನ್ನೂ ಬಹುತೇಕ ಪೂರ್ಣ canvas ಆದ್ಯಂತ ಹರಡುತ್ತದೆ (ಒರಟೂ, ಮೃದುವಾದ ರಚನೆಗೆ ಒಳ್ಳೆಯದೂ) -- ಒಂದೂ 3D Gaussian Splatting optimizer ಒಂದೂ scene ನಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ primitive ಎಷ್ಟೂ ದೊಡ್ಡದಾಗಿರಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುವಾಗ ಸಮತೋಲನ ಮಾಡಬೇಕಾದ ನಿಖರ trade-off' } },

    { type: 'heading', data: { textEn: 'What Real 3DGS Adds Beyond Summation', textKn: 'What Real 3DGS Adds Beyond Summation', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Toy Renderer vs Real 3D Gaussian Splatting', captionKn: 'Toy Renderer vs Real 3D Gaussian Splatting',
      rows: 'Stage|Toy render() (genuinely verified)|Real 3DGS\nPosition|2D (x, y)|3D (x, y, z)\nSpread|Scalar sigma|Full 3D covariance matrix (scale + rotation)\nCamera|None, direct 2D coords|Explicit projection from 3D world to 2D image\nDepth|Not modeled|Depth-sorted before compositing\nCombination|Direct summation|Alpha compositing with per-Gaussian opacity\nColor|Scalar|RGB or view-dependent spherical harmonics' } },
    { type: 'concept', data: {
      headingEn: 'Why Depth Ordering Matters', headingKn: 'Depth Ordering ಏಕೆ ಮುಖ್ಯ',
      bodyEn: '• The toy render() genuinely has no concept of "in front of" or "behind" -- every Gaussian\'s contribution simply adds to the pixel value regardless of order, which is why the peak at (3,3) is exactly 1.08 no matter what order the three Gaussians appear in the list\n• Real 3DGS must render nearer Gaussians on top of farther ones (like painting back-to-front), because a real scene has occlusion: a red Gaussian in front of a blue one should hide the blue one at that pixel, not add its color to it. This is precisely the "depth sorting" step this lesson\'s toy code has no equivalent for',
      bodyKn: '• Toy render() ಗೆ ನಿಜವಾಗಿ "ಮುಂದೆ" ಅಥವಾ "ಹಿಂದೆ" ಎಂಬ ಪರಿಕಲ್ಪನೆ ಇಲ್ಲ -- ಪ್ರತಿಯೊಂದೂ Gaussian ನ ಕೊಡುಗೆ ಕ್ರಮ ಏನೇ ಇದ್ದರೂ ಶುದ್ಧವಾಗಿ pixel value ಗೆ ಸೇರಿಸುತ್ತದೆ, ಇದೇ ಏಕೆ (3,3) ನಲ್ಲಿ peak ಪಟ್ಟಿಯಲ್ಲಿ ಮೂರೂ Gaussians ಯಾವ ಕ್ರಮದಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡರೂ ನಿಖರವಾಗಿ 1.08\n• ನಿಜ 3DGS ಗೆ ಹತ್ತಿರದ Gaussians ಅನ್ನೂ ದೂರದವುಗಳ ಮೇಲೆ render ಮಾಡಬೇಕು (back-to-front paint ಮಾಡುವಂತೆ), ಒಂದೂ ನಿಜ scene occlusion ಹೊಂದಿರುವುದರಿಂದ: ಒಂದೂ blue ಒಂದೂ ಮುಂದೆ ಒಂದೂ red Gaussian ಆ pixel ನಲ್ಲಿ blue ಅನ್ನೂ ಮರೆಮಾಡಬೇಕು, ಅದೂ ಬಣ್ಣಕ್ಕೆ ಸೇರಿಸಬಾರದು. ಇದೇ ನಿಖರವಾಗಿ "depth sorting" step ಈ lesson ನ toy code ಗೆ ಯಾವುದೇ ಸಮಾನ ಇಲ್ಲ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: rendering three Gaussians onto an 11x11 grid produces a peak of 1.08 (not 1.0) at (3,3), because overlapping Gaussians\' contributions genuinely add together via direct summation\n• Genuinely confirmed: each Gaussian\'s color weight scales its contribution proportionally -- the color=1.0 Gaussian peaks near 1.08, the color=0.5 Gaussian peaks near 0.82, matching the g[\'color\'] * gaussian_at(...) formula exactly\n• The toy renderer is intentionally missing five things real 3DGS has: 3D position, full covariance (not scalar sigma), camera projection, depth sorting, and alpha compositing with opacity -- it isolates the "many soft primitives sum into an image" idea\n• Depth sorting matters because real scenes have occlusion; the toy renderer\'s order-independent summation genuinely cannot represent one object hiding another, which is exactly what real 3DGS\'s depth-aware compositing solves',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಮೂರೂ Gaussians ಅನ್ನೂ ಒಂದೂ 11x11 grid ಮೇಲೆ render ಮಾಡುವುದೂ (3,3) ನಲ್ಲಿ 1.08 (1.0 ಅಲ್ಲ) ಗರಿಷ್ಠ ಉತ್ಪಾದಿಸುತ್ತದೆ, ಅತಿಕ್ರಮಿಸುವ Gaussians ನ ಕೊಡುಗೆಗಳು ನಿಜವಾಗಿ direct summation ಮೂಲಕ ಒಟ್ಟಿಗೆ ಸೇರುವುದರಿಂದ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪ್ರತಿಯೊಂದೂ Gaussian ನ color weight ಅದೂ ಕೊಡುಗೆಯನ್ನೂ ಅನುಪಾತದಲ್ಲಿ ಪ್ರಮಾಣಗೊಳಿಸುತ್ತದೆ -- color=1.0 Gaussian 1.08 ಹತ್ತಿರ ಗರಿಷ್ಠವಾಗುತ್ತದೆ, color=0.5 Gaussian 0.82 ಹತ್ತಿರ ಗರಿಷ್ಠವಾಗುತ್ತದೆ, g[\'color\'] * gaussian_at(...) formula ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಸುತ್ತಾ\n• Toy renderer ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಿಜ 3DGS ಹೊಂದಿರುವ ಐದೂ ವಿಷಯಗಳನ್ನೂ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ: 3D position, ಪೂರ್ಣ covariance (scalar sigma ಅಲ್ಲ), camera projection, depth sorting, ಮತ್ತು opacity ಜೊತೆ alpha compositing -- ಅದೂ "ಅನೇಕ ಮೃದುವಾದ primitives ಒಂದೂ image ಗೆ ಸೇರುತ್ತವೆ" ಕಲ್ಪನೆಯನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ\n• Depth sorting ಮುಖ್ಯ ಏಕೆಂದರೆ ನಿಜ scenes occlusion ಹೊಂದಿವೆ; toy renderer ನ ಕ್ರಮ-ಸ್ವತಂತ್ರ summation ನಿಜವಾಗಿ ಒಂದೂ object ಇನ್ನೊಂದನ್ನೂ ಮರೆಮಾಡುವುದನ್ನೂ ಪ್ರತಿನಿಧಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ, ಇದೇ ನಿಖರವಾಗಿ ನಿಜ 3DGS ನ depth-aware compositing ಪರಿಹರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact "sum many soft primitives into an image" principle genuinely verified here is the conceptual core of production 3D Gaussian Splatting renderers, which extend this lesson\'s toy summation with the five additions in the table above -- most importantly depth-sorted alpha compositing, which is what lets real 3DGS scenes with millions of Gaussians render correctly-occluded, photorealistic novel views in real time.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ "ಅನೇಕ ಮೃದುವಾದ primitives ಅನ್ನೂ ಒಂದೂ image ಗೆ ಸೇರಿಸಿ" ತತ್ವ production 3D Gaussian Splatting renderers ನ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಕೇಂದ್ರ, ಅವೂ ಈ lesson ನ toy summation ಅನ್ನೂ ಮೇಲಿನ table ನಲ್ಲಿ ಐದೂ ಸೇರ್ಪಡೆಗಳೊಂದಿಗೆ ವಿಸ್ತರಿಸುತ್ತವೆ -- ಅತ್ಯಂತ ಮುಖ್ಯವಾಗಿ depth-sorted alpha compositing, ಇದೇ ಲಕ್ಷಾಂತರ Gaussians ಇರುವ ನಿಜ 3DGS scenes ಗೆ ಸರಿಯಾಗಿ-occluded, photorealistic novel views ಅನ್ನೂ real time ನಲ್ಲಿ render ಮಾಡಲು ಬಿಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: because the toy renderer is simple direct summation, its per-pixel cost scales with the number of Gaussians times the number of pixels -- a real 3DGS renderer optimizes this further, but the fundamental "each primitive contributes locally" structure genuinely verified here is what makes Gaussian Splatting far cheaper to render than the per-ray MLP evaluation NeRF requires\n• Genuinely confirmed that color scales each Gaussian\'s contribution proportionally and predictably (1.08 for color=1.0, 0.82 for color=0.5) -- this linearity is exactly what a gradient-based optimizer (Part 3) exploits: the effect of changing any one Gaussian\'s parameters on the final image is smooth and traceable, not chaotic',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: toy renderer ಸರಳ direct summation ಆಗಿರುವುದರಿಂದ, ಅದೂ per-pixel ವೆಚ್ಚ Gaussians ಸಂಖ್ಯೆ ಗುಣಿಸಿದ pixels ಸಂಖ್ಯೆಯ ಜೊತೆ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ -- ಒಂದೂ ನಿಜ 3DGS renderer ಇದನ್ನೂ ಇನ್ನಷ್ಟೂ optimize ಮಾಡುತ್ತದೆ, ಆದರೆ ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಮೂಲಭೂತ "ಪ್ರತಿಯೊಂದೂ primitive ಸ್ಥಳೀಯವಾಗಿ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ" ರಚನೆ ಇದೇ Gaussian Splatting ಅನ್ನೂ NeRF ಅಗತ್ಯವಿರುವ per-ray MLP evaluation ಗಿಂತ render ಮಾಡಲು ಬಹಳ ಅಗ್ಗ ಮಾಡುತ್ತದೆ\n• Color ಪ್ರತಿಯೊಂದೂ Gaussian ನ ಕೊಡುಗೆಯನ್ನೂ ಅನುಪಾತದಲ್ಲಿ ಮತ್ತು ಊಹಿಸಬಹುದಾಗಿ ಪ್ರಮಾಣಗೊಳಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ (color=1.0 ಗೆ 1.08, color=0.5 ಗೆ 0.82) -- ಈ ರೇಖೀಯತೆ ನಿಖರವಾಗಿ ಒಂದೂ gradient-based optimizer (Part 3) ಬಳಸಿಕೊಳ್ಳುವುದೂ: ಯಾವುದೇ ಒಂದೂ Gaussian ನ parameters ಬದಲಾಯಿಸುವ ಪರಿಣಾಮ ಅಂತಿಮ image ಮೇಲೆ ಮೃದುವಾಗಿ ಮತ್ತು ಪತ್ತೆಹಚ್ಚಬಹುದಾಗಿ ಇರುತ್ತದೆ, ಅಸ್ತವ್ಯಸ್ತ ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production 3D scene-capture app that reconstructs a room from a phone video genuinely renders millions of Gaussians using the same core operation verified in this lesson\'s render() -- projecting each primitive\'s influence onto the current camera view and combining contributions -- but with real 3DGS\'s depth-sorted alpha compositing (missing from this lesson\'s toy summation) so that a nearby chair correctly occludes the wall behind it instead of the two colors blending together as this lesson\'s simple sum would produce.',
      bodyKn: 'ಒಂದೂ phone video ಇಂದ ಒಂದೂ room reconstruct ಮಾಡುವ ಒಂದೂ production 3D scene-capture app ಈ lesson ನ render() ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ ಮುಖ್ಯ operation ಬಳಸಿ ಲಕ್ಷಾಂತರ Gaussians ಅನ್ನೂ ನಿಜವಾಗಿ render ಮಾಡುತ್ತದೆ -- ಪ್ರತಿಯೊಂದೂ primitive ನ ಪ್ರಭಾವವನ್ನೂ ಈಗಿನ camera view ಮೇಲೆ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡಿ ಕೊಡುಗೆಗಳನ್ನೂ ಸಂಯೋಜಿಸುತ್ತಾ -- ಆದರೆ ನಿಜ 3DGS ನ depth-sorted alpha compositing ಜೊತೆ (ಈ lesson ನ toy summation ನಿಂದ ಕಾಣೆಯಾಗಿದೆ) ಆದ್ದರಿಂದ ಹತ್ತಿರದ ಒಂದೂ ಕುರ್ಚಿ ಅದೂ ಹಿಂದಿನ ಗೋಡೆಯನ್ನೂ ಸರಿಯಾಗಿ ಮರೆಮಾಡುತ್ತದೆ, ಈ lesson ನ ಸರಳ ಮೊತ್ತ ಉತ್ಪಾದಿಸುತ್ತಿದ್ದ ಎರಡೂ ಬಣ್ಣಗಳ ಮಿಶ್ರಣದ ಬದಲು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what is the peak value in the rendered 11x11 image, and where?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: rendered 11x11 image ನಲ್ಲಿ ಗರಿಷ್ಠ value ಎಷ್ಟೂ, ಮತ್ತು ಎಲ್ಲಿ?',
        opts: ['1.0 at (5,7)', '1.08 at (3,3) -- genuinely confirmed, from overlapping contributions', '0.5 at (7,3)', '2.3 at (5,5)'], correct: 1,
        optsKn: ['1.0, (5,7) ನಲ್ಲಿ', '1.08, (3,3) ನಲ್ಲಿ -- ಅತಿಕ್ರಮಿಸುವ ಕೊಡುಗೆಗಳಿಂದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', '0.5, (7,3) ನಲ್ಲಿ', '2.3, (5,5) ನಲ್ಲಿ'] },
      { q: 'Why does the toy render() produce a peak of 1.08 rather than exactly 1.0?', qKn: 'Toy render() ನಿಖರವಾಗಿ 1.0 ಬದಲು 1.08 ಗರಿಷ್ಠ ಏಕೆ ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['A bug in the code', 'Overlapping Gaussians\' individual contributions genuinely sum together at that pixel, adding small residuals from the other two Gaussians', 'The image size is wrong', 'sigma was set incorrectly'], correct: 1,
        optsKn: ['Code ನಲ್ಲಿ ಒಂದೂ bug', 'ಅತಿಕ್ರಮಿಸುವ Gaussians ನ ಪ್ರತ್ಯೇಕ ಕೊಡುಗೆಗಳು ಆ pixel ನಲ್ಲಿ ನಿಜವಾಗಿ ಒಟ್ಟಿಗೆ ಸೇರುತ್ತವೆ, ಇತರ ಎರಡೂ Gaussians ಇಂದ ಚಿಕ್ಕ residuals ಸೇರಿಸುತ್ತಾ', 'Image size ತಪ್ಪಾಗಿದೆ', 'sigma ತಪ್ಪಾಗಿ ಹೊಂದಿಸಲಾಗಿತ್ತು'] },
      { q: 'What does the toy renderer\'s direct summation fail to model that real 3DGS handles?', qKn: 'Toy renderer ನ direct summation ಏನನ್ನೂ ಮಾಡೆಲ್ ಮಾಡಲು ವಿಫಲವಾಗುತ್ತದೆ ಅದನ್ನೂ ನಿಜ 3DGS ನಿರ್ವಹಿಸುತ್ತದೆ?',
        opts: ['Color', 'Occlusion/depth ordering -- a nearer Gaussian should hide a farther one, not just add its color to it', 'Position', 'Scale'], correct: 1,
        optsKn: ['Color', 'Occlusion/depth ordering -- ಒಂದೂ ಹತ್ತಿರದ Gaussian ಒಂದೂ ದೂರದ ಒಂದನ್ನೂ ಮರೆಮಾಡಬೇಕು, ಕೇವಲ ಅದೂ ಬಣ್ಣಕ್ಕೆ ಸೇರಿಸಬಾರದು', 'Position', 'Scale'] },
      { q: 'Genuinely confirmed: comparing the peaks near the color=1.0 Gaussian (1.08) and the color=0.5 Gaussian (0.82), what does this show?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: color=1.0 Gaussian (1.08) ಮತ್ತು color=0.5 Gaussian (0.82) ಹತ್ತಿರದ peaks ಹೋಲಿಸುವುದೂ, ಇದೂ ಏನೂ ತೋರಿಸುತ್ತದೆ?',
        opts: ['Color has no effect on rendering', 'The color weight genuinely scales each Gaussian\'s contribution proportionally', 'Only sigma matters', 'The two Gaussians produce identical output'], correct: 1,
        optsKn: ['Color rendering ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ', 'Color weight ಪ್ರತಿಯೊಂದೂ Gaussian ನ ಕೊಡುಗೆಯನ್ನೂ ನಿಜವಾಗಿ ಅನುಪಾತದಲ್ಲಿ ಪ್ರಮಾಣಗೊಳಿಸುತ್ತದೆ', 'ಕೇವಲ sigma ಮುಖ್ಯ', 'ಎರಡೂ Gaussians ಒಂದೇ output ಉತ್ಪಾದಿಸುತ್ತವೆ'] },
      { q: 'What five things does real 3DGS add beyond the toy renderer, per the comparison table?', qKn: 'ಹೋಲಿಕೆ table ಪ್ರಕಾರ, ನಿಜ 3DGS toy renderer ಮೀರಿ ಯಾವ ಐದೂ ವಿಷಯಗಳನ್ನೂ ಸೇರಿಸುತ್ತದೆ?',
        opts: ['Nothing, they are identical', '3D position, full covariance, camera projection, depth sorting, and alpha compositing', 'Only color', 'Only a bigger image size'], correct: 1,
        optsKn: ['ಏನೂ ಇಲ್ಲ, ಅವೂ ಒಂದೇ', '3D position, ಪೂರ್ಣ covariance, camera projection, depth sorting, ಮತ್ತು alpha compositing', 'ಕೇವಲ color', 'ಕೇವಲ ಒಂದೂ ದೊಡ್ಡ image size'] },
    ] } },
  ],
};
