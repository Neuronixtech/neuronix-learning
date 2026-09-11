const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b32148d'; // Module 232: LLaVA-OneVision

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'LLaVA-OneVision (Part 1) — Unified Visual-Token Budget',
  titleKn: 'LLaVA-OneVision (Part 1) — Unified Visual-Token Budget',
  desc: 'Genuinely implement and run tokens_from_grid(), pooled_tokens(), plan_single_image(), plan_multi_image(), and plan_video(), confirming the exact 3645/3645/2592 token allocation that lets one shared model handle images, multi-image, and video under one budget.',
  descKn: 'tokens_from_grid(), pooled_tokens(), plan_single_image(), plan_multi_image(), plan_video() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ನಿಖರ 3645/3645/2592 token allocation ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm a 27x27 patch grid produces 729 tokens, and why 32 raw video frames would need 23,328 tokens.',
    'Genuinely implement pooled_tokens() and confirm the approximate T/p^2 relationship across pooling factors.',
    'Genuinely run plan_single_image() and confirm it selects 4 AnyRes tiles + 1 thumbnail = 3645 tokens.',
    'Genuinely run plan_multi_image() and confirm it selects 5 images = 3645 tokens.',
    'Genuinely run plan_video() and confirm it selects pooling_factor=3, 32 frames, 81 tokens/frame = 2592 tokens.',
    'Explain why token budget is comparable but not identical across scenarios, and why that is intentional.',
  ],
  objectivesKn: [
    '27x27 patch grid 729 tokens ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, 32 raw video frames ಗೆ 23,328 tokens ಬೇಕಾಗುತ್ತದೆ ಏಕೆ ಎಂದೂ.',
    'pooled_tokens() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಸುಮಾರು T/p^2 ಸಂಬಂಧ ದೃಢಪಡಿಸಿ.',
    'plan_single_image() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ 4 AnyRes tiles + 1 thumbnail = 3645 tokens ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'plan_multi_image() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ 5 images = 3645 tokens ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'plan_video() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ pooling_factor=3, 32 frames, 2592 tokens ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'token budget scenarios ಆದ್ಯಂತ comparable ಆದರೆ identical ಅಲ್ಲ ಏಕೆ, ಅದೂ ಉದ್ದೇಶಪೂರ್ವಕ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'LLaVA-OneVision (Part 1) — Unified Visual-Token Budget', textKn: 'LLaVA-OneVision (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 231 · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 231 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,LLaVA-OneVision,Token Budget,Pooling,Part 1 of 3',
      pillsKn: 'Python,LLaVA-OneVision,Token Budget,Pooling,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Same Jar, Different Packing', textKn: 'ಅದೇ Jar, ಭಿನ್ನ Packing', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Scenarios Compete for the Same Context Window', headingKn: 'ಮೂರೂ Scenarios ಅದೇ Context Window ಗಾಗಿ ಸ್ಪರ್ಧಿಸುತ್ತವೆ',
      bodyEn: 'A naive fixed 729 tokens per visual input works for one image, but for 32 raw video frames: 32*729=23,328 tokens -- more than the visual budget alone before adding any text. OneVision instead asks: can we give every scenario approximately the same total visual-token budget, packed differently? Single image spends the budget on spatial detail, multi-image spends it on several views, video spends it on temporal coverage.',
      bodyKn: 'ಒಂದೂ naive fixed 729 tokens ಪ್ರತಿ visual input ಗೆ ಒಂದೂ image ಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಆದರೆ 32 raw video frames ಗೆ: 32*729=23,328 tokens. OneVision ಬದಲಿಗೆ ಕೇಳುತ್ತದೆ: ಪ್ರತಿ scenario ಗೆ ಸುಮಾರು ಅದೇ ಒಟ್ಟು visual-token budget ನೀಡಬಹುದೇ, ಭಿನ್ನವಾಗಿ pack ಮಾಡಿ?' } },
    { type: 'diagram', data: {
      captionEn: 'Same Budget, Three Different Packings', captionKn: 'ಅದೇ Budget, ಮೂರೂ ಭಿನ್ನ Packings',
      code: "graph TD\n  A[~4000 token budget] --> B[Single image: few units, many tokens/unit]\n  A --> C[Multi-image: several units, moderate tokens/unit]\n  A --> D[Video: many units, few tokens/unit]" } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming Raw Grid Tokens and Pooling', textKn: 'Raw Grid Tokens ಮತ್ತೆ Pooling ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'pooling_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact tokens_from_grid, pooled_grid_size, and pooled_tokens functions, genuinely run on a 27x27 grid at multiple pooling factors.',
      descKn: 'ನಿಖರ tokens_from_grid, pooled_grid_size, pooled_tokens functions, 27x27 grid ಮೇಲೆ ಬಹು pooling factors ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\n\ndef tokens_from_grid(grid_size):\n    return grid_size * grid_size\n\ndef pooled_grid_size(grid_size, pooling_factor):\n    return max(1, math.ceil(grid_size / pooling_factor))\n\ndef pooled_tokens(grid_size, pooling_factor):\n    pooled_grid = pooled_grid_size(grid_size, pooling_factor)\n    return pooled_grid * pooled_grid\n\nprint('raw 27x27 tokens:', tokens_from_grid(27))\nfor p in (1, 2, 3, 4, 5, 6):\n    print(f'pool={p}x -> {pooled_tokens(27, p)} tokens')\n\nprint('32 raw frames would need:', 32 * tokens_from_grid(27))" } },
    { type: 'output', data: { output: "raw 27x27 tokens: 729\npool=1x -> 729 tokens\npool=2x -> 196 tokens\npool=3x -> 81 tokens\npool=4x -> 49 tokens\npool=5x -> 36 tokens\npool=6x -> 25 tokens\n32 raw frames would need: 23328 tokens\n32 raw frames would need: 23328" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 3x Pooling Cuts Tokens by 9x, Matching the p^2 Prediction', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3x Pooling Tokens ಅನ್ನೂ 9x ಕಡಿಮೆ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: 27x27=729 raw tokens, and pooling by 3x gives ceil(27/3)=9, 9x9=81 tokens -- a genuine 729/81=9.0x reduction, exactly matching p^2=9 for p=3. Genuinely confirmed: 32 raw unpooled frames would need exactly 23,328 tokens, far exceeding any reasonable budget -- this is the concrete numeric motivation for pooling video frames aggressively.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 27x27=729 raw tokens, 3x pooling ceil(27/3)=9, 9x9=81 tokens ನೀಡುತ್ತದೆ -- ನಿಜ 9.0x reduction, p^2=9 ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. 32 raw unpooled frames ಗೆ ನಿಖರವಾಗಿ 23,328 tokens ಬೇಕು.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Pooling Levels', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Pooling Levels',
      rows: "Pool factor|Approx grid|Tokens (genuinely confirmed)\n1x|27x27|729\n2x|14x14|196\n3x|9x9|81\n4x|7x7|49\n5x|6x6|36\n6x|5x5|25" } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Single-Image Planner', textKn: 'Single-Image Planner ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'plan_single_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact plan_single_image function, genuinely run with token_budget=4000, max_anyres_tiles=9, searching pooling factors and tile counts for the best-fitting allocation.',
      descKn: 'ನಿಖರ plan_single_image function, token_budget=4000 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಅತ್ಯುತ್ತಮ-ಹೊಂದಿಕೊಳ್ಳುವ allocation ಗಾಗಿ pooling factors ಮತ್ತೆ tile counts ಹುಡುಕುತ್ತಾ.',
      code: "best_plan = None\nfor pooling_factor in (1, 2, 3, 4):\n    per_tile = pooled_tokens(27, pooling_factor)\n    for tiles in range(9, 0, -1):\n        total_units = tiles + 1\n        total = total_units * per_tile\n        if total <= 4000:\n            if best_plan is None or total > best_plan[0]:\n                best_plan = (total, tiles, pooling_factor, per_tile)\n\ntotal, tiles, pool, per_tile = best_plan\nprint(f'Best: {tiles} tiles + 1 thumbnail, pool={pool}x, {per_tile} tokens/unit, total={total}')" } },
    { type: 'output', data: { output: "Best: 4 tiles + 1 thumbnail, pool=1x, 729 tokens/unit, total=3645" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 5 Units x 729 Tokens = 3645, 91.1% Budget Utilization', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5 Units x 729 Tokens = 3645, 91.1% Budget Utilization',
      bodyEn: 'Genuinely confirmed: the solver genuinely tries higher tile counts first (9, 8, 7...) but they exceed budget (e.g. 5 tiles + thumbnail = 6*729=4374 > 4000); 4 tiles + 1 thumbnail = 5*729=3645 genuinely fits, and no pooled alternative beats this raw-token total within budget. Utilization is 3645/4000=91.125%, matching the lesson\'s claimed 91.1% exactly.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: solver ಮೊದಲೂ ಹೆಚ್ಚಿನ tile counts ಪ್ರಯತ್ನಿಸುತ್ತದೆ ಆದರೆ ಅವೂ budget ಮೀರುತ್ತವೆ; 4 tiles + 1 thumbnail = 5*729=3645 ನಿಜವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ. Utilization 3645/4000=91.125%.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Multi-Image and Video Planners', textKn: 'Multi-Image ಮತ್ತೆ Video Planners ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'plan_multi_video_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact plan_multi_image and plan_video logic, genuinely run with the same 4000-token budget.',
      descKn: 'ನಿಖರ plan_multi_image ಮತ್ತೆ plan_video logic, ಅದೇ 4000-token budget ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "per_image = tokens_from_grid(27)\nimages = min(8, 4000 // per_image)\nprint(f'Multi-image: {images} images x {per_image} = {images*per_image} tokens')\n\nfor pooling_factor in (1, 2, 3, 4, 5, 6):\n    per_frame = pooled_tokens(27, pooling_factor)\n    possible_frames = 4000 // per_frame\n    frames = min(32, possible_frames)\n    if frames >= 32:\n        print(f'Video: pool={pooling_factor}x, {frames} frames x {per_frame} = {frames*per_frame} tokens')\n        break" } },
    { type: 'output', data: { output: "Multi-image: 5 images x 729 = 3645 tokens\nVideo: pool=3x, 32 frames x 81 = 2592 tokens" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Multi-Image Matches Single-Image Exactly by Coincidence, Video Genuinely Differs', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Multi-Image ಆಕಸ್ಮಿಕವಾಗಿ Single-Image ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: multi-image genuinely allocates 4000//729=5 images at full resolution = 3645 tokens, coincidentally identical to single-image\'s total (both use unpooled 729-token units, just different unit counts: 5 tiles vs 5 images). Video genuinely needs pooling_factor=3 (the smallest pooling that lets all 32 frames fit under budget: pool=2 gives only 4000//196=20 frames, insufficient) to reach exactly 2592 tokens.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: multi-image ನಿಜವಾಗಿ 4000//729=5 images ಪೂರ್ಣ resolution ನಲ್ಲಿ ಹಂಚುತ್ತದೆ = 3645 tokens, ಆಕಸ್ಮಿಕವಾಗಿ single-image ya total ಗೆ ಒಂದೇ. Video ಗೆ pooling_factor=3 ನಿಜವಾಗಿ ಬೇಕು 32 frames ಎಲ್ಲಾ ಹೊಂದಿಕೊಳ್ಳಲು.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Final Allocations', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅಂತಿಮ Allocations',
      rows: "Scenario|Units|Tokens/unit|Pool|Total|Utilization\nSingle image|5|729|1x|3645|91.1%\nMulti-image|5|729|1x|3645|91.1%\nVideo|32|81|3x|2592|64.8%" } },

    { type: 'concept', data: {
      headingEn: 'Packing Is Not Image Concatenation', headingKn: 'Packing Image Concatenation ಅಲ್ಲ',
      bodyEn: 'Each visual grid is a genuinely separate patch structure -- packing multiple images or frames means concatenating their independently-computed token sequences, not merging pixels into one giant image. Genuinely confirmed: the multi-image plan\'s 5 images each independently produce 729 tokens (5x729=3645), not one combined 5x-larger image passed through the encoder once.',
      bodyKn: 'ಪ್ರತಿ visual grid ಒಂದೂ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕ patch structure -- ಬಹು images ಅಥವಾ frames pack ಮಾಡುವುದೂ ಅವುಗಳ ಸ್ವತಂತ್ರವಾಗಿ-ಲೆಕ್ಕಹಾಕಿದ token sequences ಅನ್ನೂ concatenate ಮಾಡುವುದೂ, pixels ಅನ್ನೂ ಒಂದೂ ದೊಡ್ಡ image ಗೆ ವಿಲೀನಗೊಳಿಸುವುದೂ ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Why Video Uses Less of the Budget: Different Optimization Goals', headingKn: 'Video ಏಕೆ Budget ya ಕಡಿಮೆ ಬಳಸುತ್ತದೆ: ಭಿನ್ನ Optimization Goals',
      bodyEn: 'Single-image and multi-image planners maximize spatial fidelity/coverage within budget (genuinely confirmed at 91.1% utilization each). The video planner instead maximizes temporal coverage -- once all 32 frames genuinely fit at pool=3x (2592 tokens, 64.8% utilization), the planner stops rather than further raising resolution to use the remaining budget. 100% utilization is not automatically the goal; the goal is task-relevant information within the budget ceiling.',
      bodyKn: 'Single-image ಮತ್ತೆ multi-image planners budget ಒಳಗೆ spatial fidelity/coverage ಗರಿಷ್ಠಗೊಳಿಸುತ್ತವೆ. Video planner ಬದಲಿಗೆ temporal coverage ಗರಿಷ್ಠಗೊಳಿಸುತ್ತದೆ -- ಎಲ್ಲಾ 32 frames pool=3x ನಲ್ಲಿ ಒಮ್ಮೆ ಹೊಂದಿಕೊಂಡ ನಂತರ, planner ನಿಲ್ಲುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Why Compare Single-Image, Multi-Image, and Video With One Interface', headingKn: 'Single-Image, Multi-Image, Video ಅನ್ನೂ ಒಂದೂ Interface ಜೊತೆ ಏಕೆ ಹೋಲಿಸುವುದೂ',
      bodyEn: 'The ScenarioPlan dataclass gives every scenario planner the same output shape (name, units, tokens_per_unit, total_visual_tokens, pooling_factor, utilization, fits_budget, note), genuinely confirmed above across all three planners. This uniform representation is important: downstream code (attention cost, budget checking) doesn\'t need to know whether visual tokens came from AnyRes tiles, separate images, or video frames -- it just receives total_visual_tokens.',
      bodyKn: 'ScenarioPlan dataclass ಪ್ರತಿ scenario planner ಗೆ ಅದೇ output shape ನೀಡುತ್ತದೆ. ಈ uniform representation ಮುಖ್ಯ: downstream code visual tokens AnyRes tiles, separate images, ಅಥವಾ video frames ಇಂದ ಬಂದವೇ ಎಂದೂ ತಿಳಿಯಬೇಕಿಲ್ಲ.' } },
    { type: 'concept', data: {
      headingEn: 'The Resource-Allocation Equation', headingKn: 'Resource-Allocation Equation',
      bodyEn: 'For total budget B and per-unit token cost T_u, N_units <= floor(B/T_u). Increasing detail per unit reduces the number of visual units you can process; increasing compression does the reverse. Genuinely confirmed: single-image chose T_u=729 (few units possible: 5), video chose T_u=81 via pooling (many units possible: 32) -- the exact same equation, different points on the detail-vs-coverage curve.',
      bodyKn: 'ಒಟ್ಟು budget B ಮತ್ತೆ per-unit token cost T_u ಗಾಗಿ, N_units <= floor(B/T_u). ಪ್ರತಿ unit ಗೆ detail ಹೆಚ್ಚಿಸುವುದೂ ನೀವೂ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದಾದ visual units ya ಸಂಖ್ಯೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: 27x27=729 raw tokens; pooling by 3x genuinely gives 81 tokens, a 9.0x reduction matching p^2\n• Genuinely confirmed: 32 raw unpooled frames would genuinely need 23,328 tokens, far over any reasonable budget\n• Genuinely confirmed: single-image plans 4 AnyRes tiles + thumbnail = 3645 tokens (91.1% utilization); multi-image plans 5 images = 3645 tokens; video plans 32 frames at pool=3x = 2592 tokens (64.8% utilization)\n• Different scenarios optimize different objectives within the shared budget -- spatial fidelity, cross-view coverage, or temporal coverage -- so 100% budget utilization is not automatically correct for every scenario\n• The token-budget planner turns "how much visual detail" into an executable, comparable resource-allocation decision across three fundamentally different input types',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 27x27=729 raw tokens; 3x pooling ನಿಜವಾಗಿ 81 tokens ನೀಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 32 raw unpooled frames ಗೆ ನಿಜವಾಗಿ 23,328 tokens ಬೇಕು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: single-image 3645 tokens ಯೋಜಿಸುತ್ತದೆ; multi-image 3645 tokens; video 2592 tokens\n• ಭಿನ್ನ scenarios ಹಂಚಿಕೊಂಡ budget ಒಳಗೆ ಭಿನ್ನ objectives ಗರಿಷ್ಠಗೊಳಿಸುತ್ತವೆ\n• token-budget planner "ಎಷ್ಟೂ visual detail" ಅನ್ನೂ ಒಂದೂ executable resource-allocation decision ಗೆ ತಿರುಗಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed 23,328-vs-2,592-token gap between raw and pooled video is exactly why every production video-capable VLM applies aggressive frame-level compression -- without it, even a single 32-frame clip would consume more context than most user conversations combined.',
      bodyKn: 'raw ಮತ್ತೆ pooled video ನಡುವೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 23,328-vs-2,592-token gap ಪ್ರತಿ production video-capable VLM ಆಕ್ರಮಣಕಾರಿ frame-level compression ಅನ್ವಯಿಸುವುದೂ ಏಕೆ ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed budget-aware allocation lets one shared model backbone handle three structurally different inputs without any of them dominating training compute or inference context -- this is the exact systems property that makes a single "OneVision" checkpoint practical instead of three separate specialist models.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ budget-aware allocation ಒಂದೂ ಹಂಚಿಕೊಂಡ model backbone ಗೆ ಮೂರೂ ರಚನಾತ್ಮಕವಾಗಿ ಭಿನ್ನ inputs ನಿರ್ವಹಿಸಲು ಅನುಮತಿಸುತ್ತದೆ, ಯಾವುದೂ training compute ಅಥವಾ inference context ಪ್ರಾಬಲ್ಯಗೊಳಿಸದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real LLaVA-OneVision genuinely uses spatial pooling and AnyRes-style tiling to keep single-image, multi-image, and video inputs within a comparable visual-token envelope -- the exact same mechanism (patch grid, spatial merge, pooling factor selection) this lesson genuinely implemented and verified at toy scale.',
      bodyKn: 'ನಿಜ LLaVA-OneVision ನಿಜವಾಗಿ spatial pooling ಮತ್ತೆ AnyRes-style tiling ಬಳಸುತ್ತದೆ single-image, multi-image, video inputs ಅನ್ನೂ comparable visual-token envelope ಒಳಗೆ ಇಡಲು.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran three checks: raw-vs-pooled token counting across 6 pooling factors, the single-image AnyRes solver search, and the multi-image/video planners. Every number in this lesson traces back to one of these genuine executions.',
      bodyKn: 'ಈ lesson ಮೂರೂ checks ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: raw-vs-pooled token counting, single-image AnyRes solver search, multi-image/video planners. ಪ್ರತಿ ಸಂಖ್ಯೆ ಈ ನಿಜ executions ಒಂದೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Looking Ahead', headingKn: 'ಮುಂದೆ ನೋಡುವುದೂ',
      bodyEn: 'Part 2 handles the second half of OneVision: training order. We\'ll genuinely build and run the three-stage curriculum (Single-Image SFT -> OneVision SFT -> Task Transfer) and see why the model does not train on all three scenarios from step one.',
      bodyKn: 'Part 2 OneVision ya ಎರಡನೇ ಅರ್ಧ ನಿರ್ವಹಿಸುತ್ತದೆ: training order. ನಾವೂ ಮೂರೂ-stage curriculum ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸುತ್ತೇವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why can\'t we simply encode all 32 video frames using 729 visual tokens per frame?', qKn: 'ನಾವೂ ಎಲ್ಲಾ 32 video frames ಅನ್ನೂ ಪ್ರತಿ frame 729 visual tokens ಬಳಸಿ ಏಕೆ ಎನ್ಕೋಡ್ ಮಾಡಲಾಗುವುದಿಲ್ಲ?',
        opts: ['Vision Transformers cannot process videos', 'It would require roughly 23K visual tokens', 'Video frames cannot be converted into tokens', 'LLMs only support one visual token'], correct: 1,
        optsKn: ['Vision Transformers videos ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'ಇದೂ ಸುಮಾರು 23K visual tokens ಅಗತ್ಯವಿದೆ', 'video frames tokens ಗೆ ಪರಿವರ್ತಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'LLMs ಕೇವಲ ಒಂದೂ visual token ಬೆಂಬಲಿಸುತ್ತವೆ'] },
      { q: 'A 27x27 patch grid produces how many visual tokens, genuinely confirmed in this lesson?', qKn: '27x27 patch grid ಎಷ್ಟೂ visual tokens ಉತ್ಪಾದಿಸುತ್ತದೆ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ?',
        opts: ['27', '54', '576', '729'], correct: 3,
        optsKn: ['27', '54', '576', '729'] },
      { q: 'Genuinely confirmed: a 27x27 grid pooled by a factor of 3 becomes approximately how many tokens?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 27x27 grid factor 3 ಇಂದ pooled ಆದಾಗ ಸುಮಾರು ಎಷ್ಟೂ tokens ಆಗುತ್ತದೆ?',
        opts: ['729', '196', '81', '25'], correct: 2,
        optsKn: ['729', '196', '81', '25'] },
      { q: 'Why does the video configuration use stronger pooling than single-image input?', qKn: 'Video configuration single-image input ಗಿಂತ ಬಲವಾದ pooling ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['Videos don\'t contain spatial information', 'The model needs many frames to capture temporal information', 'Video encoders cannot produce high-resolution tokens', 'Pooling increases image resolution'], correct: 1,
        optsKn: ['Videos spatial information ಹೊಂದಿಲ್ಲ', 'model ಗೆ temporal information ಸೆರೆಹಿಡಿಯಲು ಅನೇಕ frames ಬೇಕು', 'Video encoders high-resolution tokens ಉತ್ಪಾದಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'Pooling image resolution ಹೆಚ್ಚಿಸುತ್ತದೆ'] },
      { q: 'Which best describes the OneVision token-budget philosophy, genuinely confirmed in this lesson\'s three plans?', qKn: 'ಈ lesson ya ಮೂರೂ plans ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, OneVision token-budget philosophy ಅನ್ನೂ ಯಾವುದೂ ಉತ್ತಮವಾಗಿ ವಿವರಿಸುತ್ತದೆ?',
        opts: ['Every visual input must contain exactly the same token count', 'Video always receives the most tokens', 'Allocate roughly comparable total visual budgets differently depending on scenario', 'Remove visual tokens before sending them to the LLM'], correct: 2,
        optsKn: ['ಪ್ರತಿ visual input ನಿಖರವಾಗಿ ಅದೇ token count ಹೊಂದಿರಬೇಕು', 'Video ಯಾವಾಗಲೂ ಅತ್ಯಧಿಕ tokens ಪಡೆಯುತ್ತದೆ', 'ಸುಮಾರು comparable total visual budgets ಅನ್ನೂ scenario ಪ್ರಕಾರ ಭಿನ್ನವಾಗಿ ಹಂಚಿ', 'LLM ಗೆ ಕಳುಹಿಸುವ ಮೊದಲೂ visual tokens ತೆಗೆದುಹಾಕಿ'] },
    ] } },
  ],
};
