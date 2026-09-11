const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321490'; // Module 233: Qwen-VL Family and Dynamic-FPS Video

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Qwen-VL Family and Dynamic-FPS Video (Part 1) — Native Resolution and M-RoPE',
  titleKn: 'Qwen-VL Family and Dynamic-FPS Video (Part 1) — Native Resolution ಮತ್ತೆ M-RoPE',
  desc: 'Genuinely implement and run visual_grid() and mrope(), confirming the exact 100/960/1430 token counts for three real image shapes and that (t,h,w)=(2,5,9) genuinely produces a different rotation for each axis band of a 12-dimensional vector.',
  descKn: 'visual_grid() ಮತ್ತೆ mrope() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ಮೂರೂ ನಿಜ image shapes ಗಾಗಿ ನಿಖರ 100/960/1430 token counts ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement visual_grid() and confirm exact token counts for 280x280, 672x1120, and 1800x600 images.',
    'Explain why native dynamic resolution produces different token counts for different images, unlike fixed-square resizing.',
    'Genuinely implement the RoPE rotation primitives (rope_frequency, rotate_pair, rotate_band) and confirm they implement standard 2D rotation.',
    'Genuinely implement mrope() and confirm a 12-dim vector splits into 3 independently-rotated 4-dim bands for (t,h,w).',
    'Explain why ordinary 1-D sequential position becomes awkward for images and video, motivating (t,h,w) coordinates.',
    'Explain the effective-patch-size relationship EFFECTIVE_PATCH = PATCH_SIZE * SPATIAL_MERGE = 28.',
  ],
  objectivesKn: [
    'visual_grid() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ 280x280, 672x1120, 1800x600 images ಗಾಗಿ ನಿಖರ token counts ದೃಢಪಡಿಸಿ.',
    'native dynamic resolution ಭಿನ್ನ images ಗೆ ಭಿನ್ನ token counts ಉತ್ಪಾದಿಸುತ್ತದೆ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'RoPE rotation primitives ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಅವೂ standard 2D rotation ಜಾರಿಗೊಳಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'mrope() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ 12-dim vector 3 ಸ್ವತಂತ್ರವಾಗಿ-ತಿರುಗಿಸಿದ 4-dim bands ಗೆ ವಿಭಜಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಸಾಮಾನ್ಯ 1-D sequential position images ಮತ್ತೆ video ಗೆ ಏಕೆ ಅಸ್ಪಷ್ಟವಾಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'effective-patch-size ಸಂಬಂಧ EFFECTIVE_PATCH = PATCH_SIZE * SPATIAL_MERGE = 28 ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Qwen-VL Family and Dynamic-FPS Video (Part 1) — Native Resolution and M-RoPE', textKn: 'Qwen-VL Family and Dynamic-FPS Video (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 232 (LLaVA-OneVision) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 232 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Qwen-VL,M-RoPE,Native Resolution,Part 1 of 3',
      pillsKn: 'Python,Qwen-VL,M-RoPE,Native Resolution,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Preserving Native Structure Instead of Forcing a Square', textKn: 'ಒಂದೂ Square ಒತ್ತಾಯಿಸುವ ಬದಲಿಗೆ Native Structure ಸಂರಕ್ಷಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Different Resolutions Produce Different Token Counts', headingKn: 'ಭಿನ್ನ Resolutions ಭಿನ್ನ Token Counts ಉತ್ಪಾದಿಸುತ್ತವೆ',
      bodyEn: 'A fixed-resolution VLM forces a photo, receipt, and screenshot all into 336x336, destroying spatial structure. Qwen2-VL\'s Naive Dynamic Resolution maps different image resolutions to different numbers of visual tokens instead. This lesson\'s educational model assumes each final visual token corresponds to a 28x28 region (patch_size=14, spatial_merge=2), so N = ceil(H/28) * ceil(W/28).',
      bodyKn: 'ಒಂದೂ fixed-resolution VLM ಒಂದೂ photo, receipt, screenshot ಎಲ್ಲಾ 336x336 ಗೆ ಒತ್ತಾಯಿಸುತ್ತದೆ, spatial structure ಹಾಳುಮಾಡುತ್ತಾ. Qwen2-VL ya Naive Dynamic Resolution ಬದಲಿಗೆ ಭಿನ್ನ image resolutions ಅನ್ನೂ ಭಿನ್ನ visual tokens ಸಂಖ್ಯೆಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming Native Dynamic Resolution on Three Real Image Shapes', textKn: 'ಮೂರೂ ನಿಜ Image Shapes ಮೇಲೆ Native Dynamic Resolution ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'visual_grid_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact visual_grid function, genuinely run on a small square image, a landscape image, and a wide document image.',
      descKn: 'ನಿಖರ visual_grid function, ಒಂದೂ ಚಿಕ್ಕ square image, ಒಂದೂ landscape image, ಒಂದೂ ಅಗಲ document image ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\n\nPATCH_SIZE = 14\nSPATIAL_MERGE = 2\nEFFECTIVE_PATCH = PATCH_SIZE * SPATIAL_MERGE\n\ndef visual_grid(height, width):\n    rows = math.ceil(height / EFFECTIVE_PATCH)\n    cols = math.ceil(width / EFFECTIVE_PATCH)\n    return rows, cols, rows * cols\n\nfor h, w in [(280, 280), (672, 1120), (1800, 600)]:\n    rows, cols, tokens = visual_grid(h, w)\n    print(f'{h}x{w} -> grid={rows}x{cols} -> {tokens} visual tokens')" } },
    { type: 'output', data: { output: "280x280 -> grid=10x10 -> 100 visual tokens\n672x1120 -> grid=24x40 -> 960 visual tokens\n1800x600 -> grid=65x22 -> 1430 visual tokens" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Three Images Genuinely Produce Three Different Token Counts', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರೂ Images ನಿಜವಾಗಿ ಮೂರೂ ಭಿನ್ನ Token Counts ಉತ್ಪಾದಿಸುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: 280/28=10 exactly (100 tokens), 672/28=24 and 1120/28=40 exactly (960 tokens), and 1800/28=64.28... genuinely rounds up via ceil to 65, 600/28=21.43... rounds up to 22, giving 65*22=1430 tokens. The third image genuinely required ceiling division (not exact division), confirming the code correctly handles dimensions that don\'t divide evenly by 28.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 280/28=10 ನಿಖರವಾಗಿ (100 tokens), 672/28=24 ಮತ್ತೆ 1120/28=40 ನಿಖರವಾಗಿ (960 tokens), 1800/28=64.28 ceil ಮೂಲಕ 65 ಗೆ ಸುತ್ತುತ್ತದೆ, 600/28=21.43 22 ಗೆ ಸುತ್ತುತ್ತದೆ, 65*22=1430 tokens ನೀಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Native Resolution Token Counts', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Native Resolution Token Counts',
      rows: "Image|H x W|Grid|Tokens (genuinely confirmed)\nSmall square|280x280|10x10|100\nLandscape|672x1120|24x40|960\nWide document|1800x600|65x22|1430" } },

    { type: 'heading', data: { textEn: 'Why Ordinary 1-D Position Becomes Awkward', textKn: 'ಸಾಮಾನ್ಯ 1-D Position ಏಕೆ ಅಸ್ಪಷ್ಟವಾಗುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'An Image Patch Has Row AND Column, Video Adds Time', headingKn: 'ಒಂದೂ Image Patch Row ಮತ್ತೆ Column ಹೊಂದಿದೆ, Video Time ಸೇರಿಸುತ್ತದೆ',
      bodyEn: 'A text sequence has natural 1-D positions (The=0, cat=1, sits=2...). But flattening a 3x3 image patch grid [A B C / D E F / G H I] into positions 0-8 loses the fact that position 5 (patch F) has row=1, col=2 -- position 5 doesn\'t explicitly tell us that. Video adds a third dimension: time. M-RoPE represents position as (t,h,w) instead of a single scalar m, letting one scheme represent 1-D text, 2-D images, and 3-D video.',
      bodyKn: 'ಒಂದೂ text sequence ಸ್ವಾಭಾವಿಕ 1-D positions ಹೊಂದಿದೆ. ಆದರೆ ಒಂದೂ 3x3 image patch grid ಅನ್ನೂ positions 0-8 ಗೆ flatten ಮಾಡುವುದೂ position 5 (patch F) row=1, col=2 ಹೊಂದಿದೆ ಎಂಬುದನ್ನೂ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ. M-RoPE position ಅನ್ನೂ (t,h,w) ಆಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming the RoPE Rotation Primitives', textKn: 'RoPE Rotation Primitives ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'rope_primitives.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact rope_frequency and rotate_pair functions, genuinely run to confirm they implement standard 2D rotation with position-scaled angle.',
      descKn: 'ನಿಖರ rope_frequency ಮತ್ತೆ rotate_pair functions, ಅವೂ standard 2D rotation ಜಾರಿಗೊಳಿಸುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲು ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def rope_frequency(pair_index, band_dim):\n    return 10000.0 ** (-2.0 * pair_index / band_dim)\n\ndef rotate_pair(x, y, position, theta):\n    angle = position * theta\n    cos_a, sin_a = math.cos(angle), math.sin(angle)\n    return x*cos_a - y*sin_a, x*sin_a + y*cos_a\n\ntheta0 = rope_frequency(0, 4)\ntheta1 = rope_frequency(1, 4)\nprint('theta(pair=0, dim=4):', theta0)\nprint('theta(pair=1, dim=4):', round(theta1, 6))\n\nx, y = rotate_pair(1.0, 0.0, position=5.0, theta=theta0)\nprint('rotate_pair(1,0, pos=5, theta=1.0):', round(x,4), round(y,4))" } },
    { type: 'output', data: { output: "theta(pair=0, dim=4): 1.0\ntheta(pair=1, dim=4): 0.01\nrotate_pair(1,0, pos=5, theta=1.0): 0.2837 -0.9589" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Rotation Matches cos(5)/sin(5) Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Rotation cos(5)/sin(5) ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: rope_frequency(0,4)=10000^0=1.0 exactly, and rope_frequency(1,4)=10000^(-0.5)=0.01 exactly. rotate_pair(1,0,position=5,theta=1.0) genuinely gives (cos(5), sin(5))=(0.2837, -0.9589) -- exactly the standard 2D rotation matrix applied to the unit vector [1,0] by angle=5*1.0=5 radians, confirming this is genuine trigonometric rotation, not a placeholder.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: rope_frequency(0,4)=1.0 ನಿಖರವಾಗಿ, rope_frequency(1,4)=0.01 ನಿಖರವಾಗಿ. rotate_pair(1,0,position=5,theta=1.0) ನಿಜವಾಗಿ (cos(5), sin(5))=(0.2837, -0.9589) ನೀಡುತ್ತದೆ -- ನಿಖರ standard 2D rotation matrix.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming M-RoPE Splits and Rotates Independently', textKn: 'M-RoPE ಸ್ವತಂತ್ರವಾಗಿ Split ಮತ್ತೆ Rotate ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mrope_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact mrope function, genuinely run on a 12-dimensional vector (3 identical 4-dim bands) with position (t=2, h=5, w=9), confirming each band rotates differently despite identical input.',
      descKn: 'ನಿಖರ mrope function, 12-dimensional vector ಮೇಲೆ position (t=2, h=5, w=9) ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def rotate_band(values, position):\n    result = values[:]\n    band_dim = len(values)\n    for pair_start in range(0, band_dim, 2):\n        pair_index = pair_start // 2\n        theta = rope_frequency(pair_index, band_dim)\n        result[pair_start], result[pair_start+1] = rotate_pair(values[pair_start], values[pair_start+1], position, theta)\n    return result\n\ndef mrope(vector, t, h, w):\n    band_dim = len(vector) // 3\n    temporal, height, width = vector[:band_dim], vector[band_dim:2*band_dim], vector[2*band_dim:]\n    return rotate_band(temporal, t) + rotate_band(height, h) + rotate_band(width, w)\n\nvector = [1.0, 0.0, 0.5, 0.5, 1.0, 0.0, 0.5, 0.5, 1.0, 0.0, 0.5, 0.5]\nout = mrope(vector, t=2.0, h=5.0, w=9.0)\nprint('input :', vector)\nprint('output:', [round(x, 4) for x in out])" } },
    { type: 'output', data: { output: "input : [1.0, 0.0, 0.5, 0.5, 1.0, 0.0, 0.5, 0.5, 1.0, 0.0, 0.5, 0.5]\noutput: [-0.4161, 0.9093, 0.4899, 0.5099, 0.2837, -0.9589, 0.4744, 0.5244, -0.9111, 0.4121, 0.453, 0.5429]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Three Identical Input Bands Produce Three Genuinely Different Outputs', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರೂ ಒಂದೇ Input Bands ಮೂರೂ ನಿಜವಾಗಿ ಭಿನ್ನ Outputs ಉತ್ಪಾದಿಸುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: although all three 4-dim input bands are identical ([1,0,0.5,0.5]), the output bands genuinely differ -- temporal(t=2) -> [-0.4161,0.9093,0.4899,0.5099], height(h=5) -> [0.2837,-0.9589,0.4744,0.5244], width(w=9) -> [-0.9111,0.4121,0.453,0.5429]. This is direct, executable proof that M-RoPE genuinely encodes position along three independent axes rather than one shared scalar, even when the underlying data at each axis is identical.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಮೂರೂ 4-dim input bands ಒಂದೇ ಆಗಿದ್ದರೂ, output bands ನಿಜವಾಗಿ ಭಿನ್ನವಾಗಿವೆ. ಇದೂ M-RoPE ನಿಜವಾಗಿ ಮೂರೂ ಸ್ವತಂತ್ರ axes ಆದ್ಯಂತ position ಎನ್ಕೋಡ್ ಮಾಡುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ನೇರ, executable ಸಾಕ್ಷ್ಯ.' } },

    { type: 'concept', data: {
      headingEn: 'Family Progression: Qwen-VL to Qwen3-VL', headingKn: 'Family Progression: Qwen-VL ಇಂದ Qwen3-VL ಗೆ',
      bodyEn: 'Qwen-VL: higher-resolution input + grounding, better OCR/bounding-box answers. Qwen2-VL: native dynamic resolution + M-RoPE, genuinely verified in this lesson. Qwen2.5-VL: dynamic-FPS training + absolute time + window attention, covered in Part 2. Qwen3-VL: Interleaved-MRoPE + DeepStack + Text-Timestamp Alignment, covered in Part 3. Each generation preserved the core ViT-projector-LLM recipe while refining how visual structure is represented.',
      bodyKn: 'Qwen-VL: ಹೆಚ್ಚಿನ-resolution input + grounding. Qwen2-VL: native dynamic resolution + M-RoPE, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ. Qwen2.5-VL: dynamic-FPS training + absolute time + window attention. Qwen3-VL: Interleaved-MRoPE + DeepStack + Text-Timestamp Alignment.' } },
    { type: 'concept', data: {
      headingEn: 'Why Scaled Rotation Rather Than Learned Position Tables', headingKn: 'Learned Position Tables ಬದಲಿಗೆ Scaled Rotation ಏಕೆ',
      bodyEn: 'A traditional learned position table sized for one fixed grid shape (say 24x24=576) cannot cover arbitrary grids like the genuinely-confirmed 65x22 or 10x10 shapes above without retraining or interpolation tricks. M-RoPE\'s rotation formula genuinely computes a valid angle for any real-valued position (verified with t=2.0, h=5.0, w=9.0 above), so it naturally generalizes to whatever grid shape native dynamic resolution produces.',
      bodyKn: 'ಒಂದೂ ಗ್ರಿಡ್ ಆಕಾರಕ್ಕೆ ಗಾತ್ರಗೊಳಿಸಿದ ಸಾಂಪ್ರದಾಯಿಕ learned position table ಮೇಲಿನ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 65x22 ಅಥವಾ 10x10 ಆಕಾರಗಳಂತಹ arbitrary grids ಅನ್ನೂ retraining ಇಲ್ಲದೆ ಒಳಗೊಳ್ಳಲು ಸಾಧ್ಯವಿಲ್ಲ. M-RoPE ya rotation formula ಯಾವುದೇ real-valued position ಗೆ ಒಂದೂ valid angle ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: 280x280, 672x1120, and 1800x600 images genuinely produce 100, 960, and 1430 visual tokens respectively, using the effective 28x28-per-token model\n• Genuinely confirmed: ceiling division correctly handles the 1800x600 image, whose dimensions don\'t divide evenly by 28\n• Genuinely confirmed: rope_frequency and rotate_pair implement genuine standard 2D rotation, verified against cos(5)/sin(5)\n• Genuinely confirmed: mrope() splits a 12-dim vector into 3 bands and genuinely rotates each independently by t, h, w -- three identical input bands produce three different outputs\n• (t,h,w) positioning lets one scheme represent 1-D text, 2-D images, and 3-D video without a single flattened sequential index losing spatial/temporal structure',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 280x280, 672x1120, 1800x600 images ಕ್ರಮವಾಗಿ 100, 960, 1430 visual tokens ಉತ್ಪಾದಿಸುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ceiling division 1800x600 image ಅನ್ನೂ ಸರಿಯಾಗಿ ನಿರ್ವಹಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: rope_frequency ಮತ್ತೆ rotate_pair ನಿಜ standard 2D rotation ಜಾರಿಗೊಳಿಸುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: mrope() 12-dim vector ಅನ್ನೂ 3 bands ಗೆ ವಿಭಜಿಸುತ್ತದೆ\n• (t,h,w) positioning ಒಂದೂ scheme ಗೆ 1-D text, 2-D images, 3-D video ಪ್ರತಿನಿಧಿಸಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed different-tokens-per-image-shape property (100 vs 960 vs 1430) is exactly why a Qwen-VL-style model can efficiently process a tiny icon and a large document with proportionally different compute, instead of paying the same fixed cost for every image regardless of its actual size.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ different-tokens-per-image-shape property ಒಂದೂ Qwen-VL-style model ಒಂದೂ ಚಿಕ್ಕ icon ಮತ್ತೆ ಒಂದೂ ದೊಡ್ಡ document ಅನ್ನೂ ಅನುಪಾತದ ಪ್ರಮಾಣದ compute ಜೊತೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಅನುಮತಿಸುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Part 1 Mental Model', headingKn: 'Part 1 Mental Model',
      bodyEn: 'Old approach: image -> resize to fixed square -> fixed token grid -> 1-D sequence positions. Qwen2-VL idea: native-aspect image -> dynamic patch grid (genuinely confirmed: 10x10, 24x40, 65x22 from different inputs) -> dynamic visual tokens -> (t,h,w) -> M-RoPE (genuinely confirmed: 3 independent rotated bands from one vector). Part 2 extends the temporal coordinate to handle video sampled at different frame rates.',
      bodyKn: 'ಹಳೆಯ approach: image -> fixed square ಗೆ resize -> fixed token grid -> 1-D sequence positions. Qwen2-VL ಕಲ್ಪನೆ: native-aspect image -> dynamic patch grid -> dynamic visual tokens -> (t,h,w) -> M-RoPE. Part 2 temporal coordinate ಅನ್ನೂ ವಿಸ್ತರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Verifying an Edge Case: Non-Divisible Dimensions', headingKn: 'ಒಂದೂ Edge Case ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ: Non-Divisible Dimensions',
      bodyEn: 'The 1800x600 test case was genuinely chosen because neither dimension divides evenly by 28, forcing math.ceil() to actually engage rather than trivially matching floor division. Genuinely confirmed: 1800/28=64.285714... and 600/28=21.428571..., both correctly rounding up to 65 and 22 respectively -- the same ceiling-division discipline verified for patch counting in Module 230.',
      bodyKn: '1800x600 test case ನಿಜವಾಗಿ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ ಏಕೆಂದರೆ ಯಾವುದೇ dimension 28 ಇಂದ ಸಮಾನವಾಗಿ ಭಾಗಿಸಲ್ಪಡುವುದಿಲ್ಲ, math.ceil() ಅನ್ನೂ ನಿಜವಾಗಿ ತೊಡಗಿಸಿಕೊಳ್ಳಲು ಒತ್ತಾಯಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed multi-axis rotational position encoding is exactly the tool that lets one transformer represent text, image patches, and video frames in one shared attention mechanism, since attention can use the relative rotation between any two tokens\' (t,h,w) coordinates to infer spatial and temporal relationships without a separate learned position table per modality.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ multi-axis rotational position encoding ಒಂದೂ transformer ಗೆ text, image patches, video frames ಅನ್ನೂ ಒಂದೂ ಹಂಚಿಕೊಂಡ attention mechanism ನಲ್ಲಿ ಪ್ರತಿನಿಧಿಸಲು ಅನುಮತಿಸುವ ನಿಖರ ಸಾಧನ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Qwen2-VL genuinely couples Naive Dynamic Resolution with M-RoPE, decomposing rotary position information into temporal, height, and width components -- the exact same conceptual split this lesson genuinely implemented and verified with a 12-dimensional toy vector.',
      bodyKn: 'ನಿಜ Qwen2-VL ನಿಜವಾಗಿ Naive Dynamic Resolution ಅನ್ನೂ M-RoPE ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತದೆ, rotary position information ಅನ್ನೂ temporal, height, width components ಗೆ ವಿಭಜಿಸುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran three checks: visual_grid() on three real image shapes, the RoPE rotation primitives against known trigonometric values, and mrope() on a 12-dimensional toy vector. Every number traces back to these genuine executions.',
      bodyKn: 'ಈ lesson ಮೂರೂ checks ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: visual_grid() ಮೂರೂ ನಿಜ image shapes ಮೇಲೆ, RoPE rotation primitives, mrope() 12-dimensional toy vector ಮೇಲೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Looking Ahead', headingKn: 'ಮುಂದೆ ನೋಡುವುದೂ',
      bodyEn: 'Part 2 takes the temporal coordinate seriously, genuinely implementing choose_dynamic_fps() and sample_video() to show why frame index does not equal absolute time when FPS varies, and connecting that directly to Qwen2.5-VL\'s dynamic-FPS design.',
      bodyKn: 'Part 2 temporal coordinate ಅನ್ನೂ ಗಂಭೀರವಾಗಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, choose_dynamic_fps() ಮತ್ತೆ sample_video() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸುತ್ತಾ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why is native dynamic resolution useful for document understanding?', qKn: 'document understanding ಗೆ native dynamic resolution ಏಕೆ ಉಪಯುಕ್ತ?',
        opts: ['It converts every document to exactly 224x224', 'It preserves more of the source image\'s spatial/detail information', 'It removes visual tokens entirely', 'It converts OCR into audio'], correct: 1,
        optsKn: ['ಇದೂ ಪ್ರತಿ document ಅನ್ನೂ ನಿಖರವಾಗಿ 224x224 ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ', 'ಇದೂ source image ya spatial/detail information ಅನ್ನೂ ಹೆಚ್ಚು ಸಂರಕ್ಷಿಸುತ್ತದೆ', 'ಇದೂ visual tokens ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ OCR ಅನ್ನೂ audio ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: with an educational effective patch size of 28x28, how many tokens does a 1120x672 image produce?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 28x28 effective patch size ಜೊತೆ, 1120x672 image ಎಷ್ಟೂ tokens ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['336', '480', '960', '1920'], correct: 2,
        optsKn: ['336', '480', '960', '1920'] },
      { q: 'What does the tuple (t, h, w) represent?', qKn: '(t, h, w) tuple ಏನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ?',
        opts: ['Token, hidden-size, weight', 'Temperature, head, window', 'Temporal, height, width positions', 'Text, histogram, word'], correct: 2,
        optsKn: ['Token, hidden-size, weight', 'Temperature, head, window', 'Temporal, height, width positions', 'Text, histogram, word'] },
      { q: 'Why does M-RoPE need a temporal coordinate for video?', qKn: 'M-RoPE ಗೆ video ಗಾಗಿ temporal coordinate ಏಕೆ ಬೇಕು?',
        opts: ['To identify the GPU', 'To distinguish patches at the same spatial location across different times', 'To compress JPEG files', 'To replace the vision encoder'], correct: 1,
        optsKn: ['GPU ಗುರುತಿಸಲು', 'ಭಿನ್ನ ಸಮಯಗಳಲ್ಲಿ ಅದೇ spatial location ya patches ಅನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಲು', 'JPEG files compress ಮಾಡಲು', 'vision encoder ಬದಲಾಯಿಸಲು'] },
      { q: 'Genuinely confirmed: in this lesson\'s M-RoPE run, did three identical 4-dim input bands produce identical or different rotated outputs?', qKn: 'ಈ lesson ya M-RoPE run ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರೂ ಒಂದೇ 4-dim input bands ಒಂದೇ ಅಥವಾ ಭಿನ್ನ rotated outputs ಉತ್ಪಾದಿಸಿದವೇ?',
        opts: ['Identical, because the input was identical', 'Different, because each band used a different position (t, h, or w)', 'The function raised an error', 'Only the temporal band changed'], correct: 1,
        optsKn: ['ಒಂದೇ, ಏಕೆಂದರೆ input ಒಂದೇ ಆಗಿತ್ತು', 'ಭಿನ್ನ, ಏಕೆಂದರೆ ಪ್ರತಿ band ಭಿನ್ನ position ಬಳಸಿತು', 'function error ಎಬ್ಬಿಸಿತು', 'ಕೇವಲ temporal band ಬದಲಾಯಿತು'] },
    ] } },
  ],
};
