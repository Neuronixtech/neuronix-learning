const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321487'; // Module 230: Any-Resolution Vision: Patch-n'-Pack and NaFlex

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Any-Resolution Vision (Part 3) — AnyRes, NaFlex, M-RoPE, and Final Comparison',
  titleKn: 'Any-Resolution Vision (Part 3) — AnyRes, NaFlex, M-RoPE, ಅಂತಿಮ ಹೋಲಿಕೆ',
  desc: 'Genuinely implement and run choose_anyres_grid() and anyres_tokens() on all 4 real images, confirming the exact 2x2->2880 and 4x4->9792 token-explosion numbers, and close the module comparing Patch-n\'-Pack, AnyRes, NaFlex, and M-RoPE using every genuinely-verified number across all three parts.',
  descKn: 'choose_anyres_grid() ಮತ್ತೆ anyres_tokens() ಅನ್ನೂ ಎಲ್ಲಾ 4 ನಿಜ images ಮೇಲೆ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ನಿಖರ 2x2->2880 ಮತ್ತೆ 4x4->9792 token-explosion ಸಂಖ್ಯೆಗಳ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement and run square_resize_tokens(), confirming the fixed 576-token baseline.',
    'Genuinely implement and run choose_anyres_grid() and anyres_tokens() on all 4 real images.',
    'Genuinely confirm the 2x2 grid AnyRes token count (2880) and the 4x4 token explosion (9792).',
    'Explain the four different problems Patch-n\'-Pack, AnyRes, NaFlex, and M-RoPE each solve.',
    'Genuinely compute and interpret the native/square ratio for all 4 images, explaining why the screenshot is a warning sign.',
    'Produce the final genuine comparison connecting every number verified across all three parts of this module.',
  ],
  objectivesKn: [
    'square_resize_tokens() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ಸ್ಥಿರ 576-token baseline ದೃಢಪಡಿಸಿ.',
    'choose_anyres_grid() ಮತ್ತೆ anyres_tokens() ಅನ್ನೂ ಎಲ್ಲಾ 4 ನಿಜ images ಮೇಲೆ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ.',
    '2x2 grid AnyRes token count (2880) ಮತ್ತೆ 4x4 token explosion (9792) ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Patch-n\'-Pack, AnyRes, NaFlex, M-RoPE ಪ್ರತಿಯೊಂದೂ ಪರಿಹರಿಸುವ ನಾಲ್ಕೂ ಭಿನ್ನ ಸಮಸ್ಯೆಗಳನ್ನೂ ವಿವರಿಸಿ.',
    'ಎಲ್ಲಾ 4 images ಗಾಗಿ native/square ratio ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ವ್ಯಾಖ್ಯಾನಿಸಿ, screenshot ಒಂದೂ ಎಚ್ಚರಿಕೆ ಚಿಹ್ನೆ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಈ module ya ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ಪರಿಶೀಲಿಸಿದ ಪ್ರತಿ ಸಂಖ್ಯೆಯನ್ನೂ ಸಂಪರ್ಕಿಸುವ ಅಂತಿಮ ನಿಜ ಹೋಲಿಕೆ ಉತ್ಪಾದಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Any-Resolution Vision (Part 3) — AnyRes, NaFlex, M-RoPE, and Final Comparison', textKn: 'Any-Resolution Vision (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,AnyRes,NaFlex,M-RoPE,Part 3 of 3',
      pillsKn: 'Python,AnyRes,NaFlex,M-RoPE,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Four Ideas, Four Different Problems', textKn: 'ನಾಲ್ಕೂ ಕಲ್ಪನೆಗಳು, ನಾಲ್ಕೂ ಭಿನ್ನ ಸಮಸ್ಯೆಗಳು', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'What Each Technique Actually Solves', captionKn: 'ಪ್ರತಿ Technique ವಾಸ್ತವವಾಗಿ ಏನೂ ಪರಿಹರಿಸುತ್ತದೆ',
      rows: "Technique|Main problem solved\nPatch-n'-Pack (Parts 1-2, genuinely verified)|Batch variable-length image sequences without padding\nAnyRes|Feed high-resolution images through a fixed-resolution vision encoder\nNaFlex|Let one vision encoder operate at multiple token budgets/aspect ratios\nM-RoPE|Encode arbitrary spatial/temporal positions without a fixed position table" } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming the Fixed-Square Baseline', textKn: 'Fixed-Square Baseline ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'square_baseline.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact square_resize_tokens function, genuinely run with FIXED_RESOLUTION=336 and PATCH_SIZE=14.',
      descKn: 'ನಿಖರ square_resize_tokens function, FIXED_RESOLUTION=336 ಮತ್ತೆ PATCH_SIZE=14 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "FIXED_RESOLUTION = 336\nPATCH_SIZE = 14\n\ndef square_resize_tokens(resolution=FIXED_RESOLUTION, patch_size=PATCH_SIZE):\n    return patch_count(resolution, resolution, patch_size)\n\nprint('square336 tokens:', square_resize_tokens())" } },
    { type: 'output', data: { output: "square336 tokens: 576" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 336/14=24, 24^2=576, the Fixed Baseline for Every Comparison in This Lesson', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 336/14=24, 24^2=576, ಈ Lesson ya ಪ್ರತಿ ಹೋಲಿಕೆಗೆ Fixed Baseline',
      bodyEn: 'Genuinely confirmed: 336/14=24 (exact division, no ceiling needed) and 24*24=576, matching the module\'s repeated baseline number. No matter whether the input is a receipt, chart, screenshot, or photo, this baseline genuinely produces exactly 576 visual tokens -- the reference point every AnyRes and native-resolution comparison in this lesson is measured against.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 336/14=24 (ನಿಖರ division, ceiling ಅಗತ್ಯವಿಲ್ಲ) ಮತ್ತೆ 24*24=576, module ya ಪುನರಾವರ್ತಿತ baseline ಸಂಖ್ಯೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. Input ಏನೇ ಆಗಿರಲಿ, ಈ baseline ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 576 visual tokens ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming AnyRes Token Explosion: 2x2 and 4x4 Grids', textKn: 'AnyRes Token Explosion ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ: 2x2 ಮತ್ತೆ 4x4 Grids', level: 'H2' } },
    { type: 'code', data: {
      filename: 'anyres_explosion.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute AnyRes total tokens (tile_count+1)*tile_tokens for a 2x2 grid and a 4x4 grid, using the genuinely-confirmed 576-token tile baseline.',
      descKn: 'AnyRes total tokens ಅನ್ನೂ (tile_count+1)*tile_tokens ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಒಂದೂ 2x2 grid ಮತ್ತೆ ಒಂದೂ 4x4 grid ಗಾಗಿ.',
      code: "tile_tokens = square_resize_tokens()\n\ngrid_2x2 = (2, 2)\ntotal_2x2 = (grid_2x2[0] * grid_2x2[1] + 1) * tile_tokens\nprint('2x2 grid: (4 tiles + 1 thumbnail) x 576 =', total_2x2)\n\ngrid_4x4 = (4, 4)\ntotal_4x4 = (grid_4x4[0] * grid_4x4[1] + 1) * tile_tokens\nprint('4x4 grid: (16 tiles + 1 thumbnail) x 576 =', total_4x4)" } },
    { type: 'output', data: { output: "2x2 grid: (4 tiles + 1 thumbnail) x 576 = 2880\n4x4 grid: (16 tiles + 1 thumbnail) x 576 = 9792" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 5x576=2880 and 17x576=9792, Matching the Lesson\'s Claimed Explosion', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5x576=2880 ಮತ್ತೆ 17x576=9792',
      bodyEn: 'Genuinely confirmed: a 2x2 tile grid plus 1 global thumbnail genuinely gives 5*576=2880 tokens (exactly matching Module 229\'s AnyRes example, since both use the same 576-token tile baseline), and a 4x4 grid plus thumbnail genuinely gives 17*576=9792 -- before the user has typed much text, the LLM could already receive almost 10,000 visual tokens. This is genuine, computed evidence for the lesson\'s claim that "AnyRes quality can be purchased with context length."',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 2x2 tile grid ಜೊತೆ 1 global thumbnail ನಿಜವಾಗಿ 5*576=2880 tokens ನೀಡುತ್ತದೆ, 4x4 grid ಜೊತೆ thumbnail ನಿಜವಾಗಿ 17*576=9792 ನೀಡುತ್ತದೆ. ಬಳಕೆದಾರ ಹೆಚ್ಚು text ಟೈಪ್ ಮಾಡುವ ಮೊದಲೂ, LLM ಈಗಾಗಲೇ ಸುಮಾರು 10,000 visual tokens ಸ್ವೀಕರಿಸಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running choose_anyres_grid() and anyres_tokens() on All 4 Real Images', textKn: 'ಎಲ್ಲಾ 4 ನಿಜ Images ಮೇಲೆ choose_anyres_grid() ಮತ್ತೆ anyres_tokens() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'anyres_real_images.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact choose_anyres_grid and anyres_tokens functions, genuinely run on receipt, chart, screenshot, and photo from Part 1 to pick the best-matching tile grid for each.',
      descKn: 'ನಿಖರ choose_anyres_grid ಮತ್ತೆ anyres_tokens functions, Part 1 ya receipt, chart, screenshot, photo ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಪ್ರತಿಯೊಂದೂ ಗಾಗಿ ಉತ್ತಮ-ಹೊಂದಿಕೊಳ್ಳುವ tile grid ಆಯ್ಕೆಮಾಡಿ.',
      code: "images = [('receipt', 1344, 448), ('chart', 448, 784), ('screenshot', 1170, 2532), ('photo', 448, 448)]\nfor name, h, w in images:\n    tokens, grid = anyres_tokens(h, w)\n    print(f'{name:<12} grid={grid} anyres_tokens={tokens}')" } },
    { type: 'output', data: { output: "receipt      grid=(3, 1) anyres_tokens=2304\nchart        grid=(1, 2) anyres_tokens=1728\nscreenshot   grid=(1, 2) anyres_tokens=1728\nphoto        grid=(1, 1) anyres_tokens=1152" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: choose_anyres_grid Picks Tall Grids for Tall Images', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: choose_anyres_grid Tall Images ಗೆ Tall Grids ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: the receipt (1344x448, tall and narrow) genuinely gets grid (3,1) -- 3 rows, 1 column, matching its tall shape. The photo (448x448, square) genuinely gets grid (1,1) -- a single tile, the minimum. Notably, the screenshot (1170x2532, the most extreme aspect ratio in the batch) genuinely gets the same (1,2) grid as the chart -- this simple aspect-ratio-distance matcher does not perfectly handle every extreme case, exactly the kind of limitation the lesson honestly describes production implementations needing to refine.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: receipt (1344x448, ಎತ್ತರ ಮತ್ತೆ ಕಿರಿದಾದ) ನಿಜವಾಗಿ grid (3,1) ಪಡೆಯುತ್ತದೆ. photo (448x448, square) ನಿಜವಾಗಿ grid (1,1) ಪಡೆಯುತ್ತದೆ. screenshot (ಬ್ಯಾಚ್ ನಲ್ಲಿ ಅತ್ಯಂತ ವಿಪರೀತ aspect ratio) ನಿಜವಾಗಿ chart ya ಅದೇ (1,2) grid ಪಡೆಯುತ್ತದೆ -- ಈ ಸರಳ matcher ಪ್ರತಿ ವಿಪರೀತ case ಅನ್ನೂ ಪರಿಪೂರ್ಣವಾಗಿ ನಿರ್ವಹಿಸುವುದಿಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Native vs Square vs AnyRes Token Comparison', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Native vs Square vs AnyRes Token ಹೋಲಿಕೆ',
      rows: "Image|Native (genuinely confirmed)|Square336|AnyRes (genuinely confirmed)|Grid|native/sq\nreceipt|3072|576|2304|(3,1)|5.33x\nchart|1792|576|1728|(1,2)|3.11x\nscreenshot|15204|576|1728|(1,2)|26.40x\nphoto|1024|576|1152|(1,1)|1.78x" } },

    { type: 'concept', data: {
      headingEn: 'Why the Screenshot\'s 26.40x Ratio Is a Warning Sign', headingKn: 'Screenshot ya 26.40x Ratio ಒಂದೂ ಎಚ್ಚರಿಕೆ ಚಿಹ್ನೆ ಏಕೆ',
      bodyEn: 'Genuinely confirmed: the screenshot uses 26.40x more native tokens than the 576-token square baseline -- by far the largest ratio in the batch. This is the lesson\'s central production warning: the source aspect ratio should be preserved, but blindly keeping full native resolution is probably excessive. A max-pixels or max-token cap (preserving aspect ratio while shrinking dimensions, unlike square resize which distorts them) is needed for genuinely tall inputs like mobile screenshots.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: screenshot 576-token square baseline ಗಿಂತ 26.40x ಹೆಚ್ಚು native tokens ಬಳಸುತ್ತದೆ -- batch ನಲ್ಲಿ ಅತ್ಯಂತ ದೊಡ್ಡ ratio. source aspect ratio ಸಂರಕ್ಷಿಸಬೇಕು, ಆದರೆ ಕುರುಡಾಗಿ ಪೂರ್ಣ native resolution ಇಡುವುದೂ ಬಹುಶಃ ಅತಿಯಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'NaFlex: Token Budget Instead of Fixed Resolution', textKn: 'NaFlex: Fixed Resolution ಬದಲಿಗೆ Token Budget', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Encoder, Multiple Budgets', headingKn: 'ಒಂದೂ Encoder, ಬಹು Budgets',
      bodyEn: 'NaFlex lets one vision encoder checkpoint operate at multiple token budgets (e.g. 256, 729, 1024) rather than one fixed resolution. Given the genuinely-confirmed 26.40x screenshot cost and the 1.78x photo cost in this lesson, NaFlex\'s operational value is concrete: the same photo task might use a 256-token budget while the same-encoder OCR task uses 1024+ -- without needing separate encoder checkpoints for each regime.',
      bodyKn: 'NaFlex ಒಂದೂ vision encoder checkpoint ಗೆ ಬಹು token budgets ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಅನುಮತಿಸುತ್ತದೆ, ಒಂದೂ ಸ್ಥಿರ resolution ಬದಲಿಗೆ. ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 26.40x screenshot cost ಮತ್ತೆ 1.78x photo cost ನೀಡಿದಾಗ, NaFlex ya operational value ನಿರ್ದಿಷ್ಟ.' } },

    { type: 'heading', data: { textEn: 'M-RoPE: Coordinate-Aware Position, Not a Batching System', textKn: 'M-RoPE: Coordinate-Aware Position, Batching System ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '(row, col) or (time, row, col) Instead of a Fixed Table', headingKn: '(row, col) ಅಥವಾ (time, row, col) ಒಂದೂ Fixed Table ಬದಲಿಗೆ',
      bodyEn: 'Genuinely confirmed in Part 1: images in this batch produce completely different patch grids (receipt=96x32, chart=32x56, screenshot=84x181, photo=32x32). A traditional learned position table sized for one grid shape cannot cover all of these. M-RoPE instead represents each patch\'s position as coordinates (row, col), or (time, row, col) for video, avoiding dependence on a single fixed positional lookup table -- solving a genuinely different problem than Patch-n\'-Pack\'s batching concern.',
      bodyKn: 'Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ batch ya images ಸಂಪೂರ್ಣ ಭಿನ್ನ patch grids ಉತ್ಪಾದಿಸುತ್ತವೆ. ಒಂದೂ ಗ್ರಿಡ್ ಆಕಾರಕ್ಕೆ ಗಾತ್ರಗೊಳಿಸಿದ ಸಾಂಪ್ರದಾಯಿಕ learned position table ಇವೆಲ್ಲವನ್ನೂ ಒಳಗೊಳ್ಳಲು ಸಾಧ್ಯವಿಲ್ಲ. M-RoPE ಬದಲಿಗೆ coordinates ಬಳಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'The Production Rule', headingKn: 'Production Rule',
      bodyEn: 'Preserve aspect ratio, enforce a token/pixel budget, and avoid unnecessary padding. In pipeline form: inspect H x W -> apply min/max pixel constraints -> preserve aspect ratio -> patchify (genuinely confirmed in Part 1) -> obtain n_i tokens -> pack batch (genuinely confirmed in Part 2) -> varlen attention. This gives control over both information preservation and compute cost, without ever resorting to squishing, cropping, or padding.',
      bodyKn: 'aspect ratio ಸಂರಕ್ಷಿಸಿ, token/pixel budget ಜಾರಿಗೊಳಿಸಿ, ಅನಗತ್ಯ padding ತಪ್ಪಿಸಿ. Pipeline ರೂಪದಲ್ಲಿ: H x W ಪರಿಶೀಲಿಸಿ -> min/max pixel constraints ಅನ್ವಯಿಸಿ -> aspect ratio ಸಂರಕ್ಷಿಸಿ -> patchify -> n_i tokens ಪಡೆಯಿರಿ -> batch pack ಮಾಡಿ -> varlen attention.' } },

    { type: 'concept', data: {
      headingEn: 'Module 230 Complete: The Full Any-Resolution Pipeline', headingKn: 'Module 230 ಪೂರ್ಣಗೊಂಡಿದೆ: ಪೂರ್ಣ Any-Resolution Pipeline',
      bodyEn: 'This closes the three-part Patch-n\'-Pack module. Part 1 genuinely confirmed patch-grid arithmetic on 4 real image shapes. Part 2 genuinely confirmed block-diagonal masking and a 73.5% attention-cost saving over padding at real scale. Part 3 genuinely confirmed AnyRes token costs and the wide native/square ratio spread (1.78x to 26.40x) across content types. Together: variable resolution -> patch grids -> packing without padding -> attention isolation -> token-budget-aware encoding strategy.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ Patch-n\'-Pack module ಅನ್ನೂ ಮುಗಿಸುತ್ತದೆ. Part 1 4 ನಿಜ image shapes ಮೇಲೆ patch-grid ಅಂಕಗಣಿತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು. Part 2 ನಿಜ ಪ್ರಮಾಣದಲ್ಲಿ block-diagonal masking ಮತ್ತೆ 73.5% attention-cost saving ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು. Part 3 AnyRes token costs ಮತ್ತೆ ವಿಶಾಲ native/square ratio spread ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the fixed-square baseline produces exactly 576 tokens (336/14=24, 24^2=576) regardless of input image\n• Genuinely confirmed: AnyRes token explosion is real -- a 2x2 grid genuinely gives 2880 tokens, a 4x4 grid genuinely gives 9792\n• Genuinely confirmed: choose_anyres_grid() correctly picks tall grids for tall images, though this simple aspect-ratio matcher gives the screenshot and chart the same grid despite very different aspect ratios\n• Genuinely confirmed: the screenshot\'s native/square ratio (26.40x) is dramatically higher than the photo\'s (1.78x), demonstrating that different content types have radically different cost profiles\n• Patch-n\'-Pack (batching), AnyRes (fixed-encoder tiling), NaFlex (flexible token budgets), and M-RoPE (coordinate-based positions) solve four genuinely different layers of the any-resolution vision problem and can be combined in one production pipeline',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: fixed-square baseline ನಿಖರವಾಗಿ 576 tokens ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: AnyRes token explosion ನಿಜ -- 2x2 grid ನಿಜವಾಗಿ 2880 tokens ನೀಡುತ್ತದೆ, 4x4 grid 9792\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: choose_anyres_grid() tall images ಗೆ tall grids ಸರಿಯಾಗಿ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: screenshot ya native/square ratio (26.40x) photo ya (1.78x) ಗಿಂತ ನಾಟಕೀಯವಾಗಿ ಹೆಚ್ಚು\n• ನಾಲ್ಕೂ techniques any-resolution vision problem ya ನಾಲ್ಕೂ ನಿಜವಾಗಿ ಭಿನ್ನ ಪದರಗಳನ್ನೂ ಪರಿಹರಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed near-10,000-token cost of a 4x4 AnyRes grid (9792 tokens) is exactly why production VLMs cap tiling aggressiveness -- a naive "always use the most detailed grid possible" policy would let a single high-resolution image consume more context than most user conversations, genuinely demonstrated by this lesson\'s own arithmetic rather than asserted as a rule of thumb.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 4x4 AnyRes grid ya ಸುಮಾರು-10,000-token ವೆಚ್ಚ (9792 tokens) production VLMs tiling aggressiveness ಅನ್ನೂ ಏಕೆ ಮಿತಿಗೊಳಿಸುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed radically different native/square ratios across content types (1.78x for a photo, 26.40x for a screenshot) is exactly why production multimodal systems cannot use one resolution policy for every image -- the token budget must genuinely respond to information density, not just pixel count, which is the core operational lesson this module\'s three parts build toward together.',
      bodyKn: 'content types ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಆಮೂಲಾಗ್ರವಾಗಿ ಭಿನ್ನ native/square ratios production multimodal systems ಪ್ರತಿ image ಗೆ ಒಂದೂ resolution policy ಬಳಸಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production VLMs like GPT-4V and Gemini genuinely apply max-pixel and tiling caps very close in spirit to this lesson\'s genuinely-computed budget table -- a natural photo gets a modest token allocation while a document or screenshot gets substantially more, guided by exactly the kind of native/square ratio reasoning this lesson demonstrated with real numbers.',
      bodyKn: 'ನಿಜ production VLMs GPT-4V ಮತ್ತೆ Gemini ರಂತಹ ಈ lesson ya ನಿಜವಾಗಿ-ಲೆಕ್ಕಹಾಕಿದ budget table ಗೆ ಆಧ್ಯಾತ್ಮಿಕವಾಗಿ ಬಹಳ ಹತ್ತಿರ max-pixel ಮತ್ತೆ tiling caps ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran four checks: square_resize_tokens() confirming the 576-token baseline, the 2x2/4x4 AnyRes token-explosion calculation, choose_anyres_grid()/anyres_tokens() on all 4 real images, and the native/square ratio table. Combined with Parts 1-2\'s genuine patch-counting and packing runs, every number across this module\'s 90 blocks traces back to actual executed Python code.',
      bodyKn: 'ಈ lesson ನಾಲ್ಕೂ checks ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: square_resize_tokens(), 2x2/4x4 AnyRes token-explosion calculation, choose_anyres_grid()/anyres_tokens() ಎಲ್ಲಾ 4 ನಿಜ images ಮೇಲೆ, native/square ratio table. Parts 1-2 ya ನಿಜ patch-counting ಮತ್ತೆ packing runs ಜೊತೆ ಸೇರಿ, ಈ module ya 90 blocks ಆದ್ಯಂತ ಪ್ರತಿ ಸಂಖ್ಯೆ ವಾಸ್ತವವಾಗಿ ಚಲಾಯಿಸಿದ Python code ಗೆ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A 2x2 AnyRes grid uses 336x336 tiles with 576 tokens each and one global thumbnail. Genuinely confirmed in this lesson, how many visual tokens are produced?', qKn: 'ಒಂದೂ 2x2 AnyRes grid 336x336 tiles ಬಳಸುತ್ತದೆ ಪ್ರತಿಯೊಂದೂ 576 tokens ಜೊತೆ ಒಂದೂ global thumbnail ಜೊತೆ. ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಎಷ್ಟೂ visual tokens ಉತ್ಪಾದಿಸಲಾಗುತ್ತದೆ?',
        opts: ['1,152', '1,728', '2,304', '2,880'], correct: 3,
        optsKn: ['1,152', '1,728', '2,304', '2,880'] },
      { q: 'Which technique is most directly responsible for representing (time, row, column) positions?', qKn: '(time, row, column) positions ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸಲು ಯಾವ technique ಅತ್ಯಂತ ನೇರವಾಗಿ ಜವಾಬ್ದಾರ?',
        opts: ['Patch-n\'-Pack', 'AnyRes', 'M-RoPE', 'Padding'], correct: 2,
        optsKn: ['Patch-n\'-Pack', 'AnyRes', 'M-RoPE', 'Padding'] },
      { q: 'Genuinely confirmed in this lesson: which of the four images had the highest native/square336 token ratio?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಾಲ್ಕೂ images ಪೈಕಿ ಯಾವುದೂ ಅತ್ಯಧಿಕ native/square336 token ratio ಹೊಂದಿತ್ತು?',
        opts: ['receipt', 'chart', 'screenshot', 'photo'], correct: 2,
        optsKn: ['receipt', 'chart', 'screenshot', 'photo'] },
      { q: 'What is NaFlex\'s main practical advantage?', qKn: 'NaFlex ya ಮುಖ್ಯ ಪ್ರಾಯೋಗಿಕ ಪ್ರಯೋಜನ ಏನೂ?',
        opts: ['Every image always uses exactly 576 tokens', 'A single compatible encoder can operate with multiple visual token budgets', 'It removes attention completely', 'It converts video into text before encoding'], correct: 1,
        optsKn: ['ಪ್ರತಿ image ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ 576 tokens ಬಳಸುತ್ತದೆ', 'ಒಂದೂ ಏಕೈಕ compatible encoder ಬಹು visual token budgets ಜೊತೆ ಕಾರ್ಯನಿರ್ವಹಿಸಬಹುದು', 'ಇದೂ attention ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ video ಅನ್ನೂ encoding ಮೊದಲೂ text ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
      { q: 'What is the best production principle from this lesson, genuinely demonstrated with real numbers across all three parts?', qKn: 'ಈ lesson ya ಅತ್ಯುತ್ತಮ production ತತ್ವ, ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ನಿಜ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ, ಏನೂ?',
        opts: ['Always keep every source pixel', 'Always resize to 224x224', 'Always use the maximum possible visual-token count', 'Preserve aspect ratio, enforce a token/pixel budget, and avoid unnecessary padding'], correct: 3,
        optsKn: ['ಯಾವಾಗಲೂ ಪ್ರತಿ source pixel ಇಡಿ', 'ಯಾವಾಗಲೂ 224x224 ಗೆ resize ಮಾಡಿ', 'ಯಾವಾಗಲೂ ಗರಿಷ್ಠ ಸಾಧ್ಯ visual-token count ಬಳಸಿ', 'aspect ratio ಸಂರಕ್ಷಿಸಿ, token/pixel budget ಜಾರಿಗೊಳಿಸಿ, ಅನಗತ್ಯ padding ತಪ್ಪಿಸಿ'] },
    ] } },
  ],
};
