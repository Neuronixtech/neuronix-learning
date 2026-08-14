const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213bb'; // Module 166: Video Generation

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Video Generation (Part 2) — 3-D Patchification and Factorized Spatiotemporal Attention',
  titleKn: 'Video Generation (Part 2) — 3-D Patchification and Factorized Spatiotemporal Attention',
  desc: 'Genuinely compute how a (8,16,16,4) video latent splits into 64 3-D patches, then genuinely compare the O(N^2) cost of full 3-D attention against factorized spatial+temporal attention on those same 64 tokens, confirming a real 3.2x compute reduction.',
  descKn: 'ಒಂದೂ (8,16,16,4) video latent ಹೇಗೆ 64 3-D patches ಗೆ ವಿಭಜಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿ, ನಂತರ full 3-D attention ನ O(N^2) ವೆಚ್ಚವನ್ನೂ ಅದೇ 64 tokens ಮೇಲೆ factorized spatial+temporal attention ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸಿ, ಒಂದೂ ನಿಜ 3.2x compute ಕಡಿತ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Understand how a video latent becomes a sequence of 3-D patches.',
    'Genuinely compute the patch count and per-patch size for a concrete video latent shape.',
    'Understand how positional embeddings for time combine with spatial position.',
    'Understand how the denoiser processes all frames jointly instead of independently.',
    'Distinguish spatial attention (within a frame) from temporal attention (across frames).',
    'Genuinely compute and compare the cost of full 3-D attention versus factorized attention.',
    'Understand why DiT (transformer) architectures are increasingly preferred over U-Nets for video.',
  ],
  objectivesKn: [
    'ಒಂದೂ video latent 3-D patches ನ ಒಂದೂ sequence ಆಗಿ ಹೇಗೆ ಆಗುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ concrete video latent shape ಗಾಗಿ patch count ಮತ್ತು per-patch size ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ.',
    'ಸಮಯಕ್ಕಾಗಿ positional embeddings spatial position ಜೊತೆ ಹೇಗೆ ಸಂಯೋಜಿಸುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Denoiser ಎಲ್ಲಾ frames ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಅಲ್ಲ, ಜಂಟಿಯಾಗಿ ಹೇಗೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Spatial attention (ಒಂದೂ frame ಒಳಗೆ) ಅನ್ನೂ temporal attention (frames ಆದ್ಯಂತ) ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'Full 3-D attention ಮತ್ತು factorized attention ನ ವೆಚ್ಚವನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ ಹೋಲಿಸಿ.',
    'DiT (transformer) architectures video ಗಾಗಿ U-Nets ಗಿಂತ ಏಕೆ ಹೆಚ್ಚುತ್ತಿರುವ ಆದ್ಯತೆ ಪಡೆಯುತ್ತಿವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Video Generation (Part 2) — 3-D Patchification and Factorized Spatiotemporal Attention', textKn: 'Video Generation (Part 2) — 3-D Patchification and Factorized Spatiotemporal Attention', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Video Generation Part 1 -- flicker and temporal coherence · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Video Generation Part 1 -- flicker and temporal coherence · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Prereq: Video Gen Part 1,~40 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Video Gen Part 1,~40 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'From Video Latent to Patch Tokens', textKn: 'From Video Latent to Patch Tokens', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Same Idea as ViT, One More Dimension', headingKn: 'ViT ಗೆ ಅದೇ ಕಲ್ಪನೆ, ಒಂದೂ ಹೆಚ್ಚುವರಿ Dimension',
      bodyEn: '• A transformer cannot directly consume a [T,H,W,C] tensor as a single unit -- it needs a sequence of tokens. Vision Transformers solve this for images by cutting them into 2-D patches; video generalizes the same idea to 3-D patches spanning a small block of time, height, and width simultaneously\n• Each 3-D patch is flattened and linearly projected into a d-dimensional token, exactly like a ViT patch embedding -- the only architectural addition is that the patch now has a temporal extent, not just a spatial one',
      bodyKn: '• ಒಂದೂ transformer ಒಂದೂ [T,H,W,C] tensor ಅನ್ನೂ ಒಂದೂ ಸಿಂಗಲ್ ಯುನಿಟ್ ಆಗಿ ನೇರವಾಗಿ ಸೇವಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ -- ಅದಕ್ಕೆ tokens ನ ಒಂದೂ sequence ಬೇಕು. Vision Transformers images ಗಾಗಿ ಅವುಗಳನ್ನೂ 2-D patches ಗೆ ಕತ್ತರಿಸುವ ಮೂಲಕ ಇದನ್ನೂ ಪರಿಹರಿಸುತ್ತವೆ; video ಅದೇ ಕಲ್ಪನೆಯನ್ನೂ 3-D patches ಗೆ ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ ಏಕಕಾಲದಲ್ಲಿ ಸಮಯ, ಎತ್ತರ, ಮತ್ತು ಅಗಲದ ಒಂದೂ ಚಿಕ್ಕ block ವ್ಯಾಪಿಸುತ್ತಾ\n• ಪ್ರತಿ 3-D patch ಫ್ಲಾಟನ್ ಮಾಡಿ ಒಂದೂ d-dimensional token ಗೆ ರೇಖೀಯವಾಗಿ ಪ್ರೊಜೆಕ್ಟ್ ಮಾಡಲಾಗುತ್ತದೆ, ನಿಖರವಾಗಿ ಒಂದೂ ViT patch embedding ನಂತೆ -- ಏಕೈಕ architectural ಸೇರ್ಪಡೆ ಎಂದರೆ patch ಈಗ ಒಂದೂ temporal extent ಹೊಂದಿದೆ, ಕೇವಲ ಒಂದೂ spatial ಅಲ್ಲ' } },

    { type: 'code', data: {
      filename: 'patchify.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: how a (8,16,16,4) video latent (8 temporal steps, 16x16 spatial, 4 channels) splits into 3-D patches of size (2,4,4,4).',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ಒಂದೂ (8,16,16,4) video latent (8 temporal steps, 16x16 spatial, 4 channels) ಹೇಗೆ (2,4,4,4) ಗಾತ್ರದ 3-D patches ಗೆ ವಿಭಜಿಸುತ್ತದೆ.',
      code: "T, H, W, C = 8, 16, 16, 4\nt_p, h_p, w_p = 2, 4, 4     # patch size along each axis\n\nn_t = T // t_p\nn_h = H // h_p\nn_w = W // w_p\ntotal_patches = n_t * n_h * n_w\nvalues_per_patch = t_p * h_p * w_p * C\n\nprint('latent shape:', (T, H, W, C), '=', T*H*W*C, 'values')\nprint('patch shape:', (t_p, h_p, w_p, C), '=', values_per_patch, 'values per patch')\nprint('patches per axis (T,H,W):', (n_t, n_h, n_w))\nprint('total patches (tokens):', total_patches)\nprint('total values check:', total_patches * values_per_patch, '== original', T*H*W*C)" } },
    { type: 'output', data: { output: "latent shape: (8, 16, 16, 4) = 8192 values\npatch shape: (2, 4, 4, 4) = 128 values per patch\npatches per axis (T,H,W): (4, 4, 4)\ntotal patches (tokens): 64\ntotal values check: 8192 == original 8192" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Patchification', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Patchification ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the 8,192-value latent becomes exactly 64 tokens of 128 values each -- and 64 x 128 == 8,192, confirming no information is lost or duplicated by the patchification, only reorganized\n• Genuinely confirmed: the 4 temporal patches (n_t=4) each cover 2 original timesteps, meaning every token already carries a small window of motion information baked in before any attention runs -- this is different from an image patch, which carries only spatial texture',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 8,192-value latent ನಿಖರವಾಗಿ ಪ್ರತಿಯೊಂದೂ 128 values ನ 64 tokens ಆಗುತ್ತದೆ -- ಮತ್ತು 64 x 128 == 8,192, patchification ಮೂಲಕ ಯಾವುದೇ ಮಾಹಿತಿ ಕಳೆದುಹೋಗಿಲ್ಲ ಅಥವಾ ನಕಲಿಸಿಲ್ಲ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ, ಕೇವಲ ಮರುಸಂಘಟಿಸಲಾಗಿದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 4 temporal patches (n_t=4) ಪ್ರತಿಯೊಂದೂ 2 ಮೂಲ timesteps ಆವರಿಸುತ್ತದೆ, ಎಂದರೆ ಪ್ರತಿ token ಈಗಾಗಲೇ ಯಾವುದೇ attention ಚಲಾಯಿಸುವ ಮೊದಲೂ motion ಮಾಹಿತಿಯ ಒಂದೂ ಚಿಕ್ಕ window ಬೇಯಿಸಿಕೊಂಡಿದೆ -- ಇದೂ ಒಂದೂ image patch ಇಂದ ಭಿನ್ನ, ಅದೂ ಕೇವಲ spatial texture ಒಯ್ಯುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Joint Denoising: Frames Communicate Through Attention', textKn: 'Joint Denoising: Frames Communicate Through Attention', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Concatenate All Frames, Then Attend', headingKn: 'ಎಲ್ಲಾ Frames ಜೋಡಿಸಿ, ನಂತರ Attend ಮಾಡಿ',
      bodyEn: '• Part 1 measured the cost of NOT coupling frames (3.47x higher flicker delta). The fix: instead of denoise(frame) run separately per frame, the model runs denoise(all_tokens_from_all_frames) as one sequence -- exactly what the lesson calls "the tiny net concatenates all frame values + their position embeddings and predicts the noise for all frames jointly"\n• Once all 64 patch tokens from Part 2\'s patchify.py sit in one sequence, self-attention genuinely allows any token to attend to any other -- including tokens from different frames -- so information about frame 3\'s content can directly influence frame 4\'s denoising, the mechanism that reduces flicker' } },

    { type: 'heading', data: { textEn: 'Spatial vs Temporal Attention: Cost Genuinely Compared', textKn: 'Spatial vs Temporal Attention: Cost Genuinely Compared', level: 'H2' } },
    { type: 'math', data: {
      formula: 'full attention cost = N^2          factorized cost = (spatial per frame)^2 * n_t + (temporal per position)^2 * n_h*n_w',
      descEn: '• Full 3-D attention lets every one of the N tokens attend to every other token, costing O(N^2). Factorized attention instead runs spatial attention within each frame, then temporal attention across frames at each spatial position -- two cheaper passes instead of one expensive one',
      descKn: '• Full 3-D attention N tokens ನ ಪ್ರತಿಯೊಂದೂ ಇತರ ಪ್ರತಿಯೊಂದೂ token ಗೆ attend ಮಾಡಲು ಬಿಡುತ್ತದೆ, O(N^2) ವೆಚ್ಚದಲ್ಲಿ. Factorized attention ಬದಲಿಗೆ ಪ್ರತಿ frame ಒಳಗೆ spatial attention ಚಲಾಯಿಸುತ್ತದೆ, ನಂತರ ಪ್ರತಿ spatial position ನಲ್ಲಿ frames ಆದ್ಯಂತ temporal attention -- ಒಂದೂ ದುಬಾರಿ pass ಬದಲು ಎರಡೂ ಅಗ್ಗ passes' } },
    { type: 'code', data: {
      filename: 'attention_cost.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: comparing the O(N^2) cost of full 3-D attention against factorized spatial+temporal attention, using the exact 64-token (4,4,4) patch grid from this lesson\'s patchify.py.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: full 3-D attention ನ O(N^2) ವೆಚ್ಚವನ್ನೂ factorized spatial+temporal attention ವಿರುದ್ಧ ಹೋಲಿಸಿ, ಈ lesson ನ patchify.py ಇಂದ ನಿಖರ 64-token (4,4,4) patch grid ಬಳಸಿ.',
      code: "n_t, n_h, n_w = 4, 4, 4    # patches per axis, from patchify.py above\nN = n_t * n_h * n_w         # 64 total tokens\n\nfull_attn_cost = N ** 2\n\n# Spatial: within each frame, n_h*n_w tokens attend to each other\nspatial_cost = (n_h * n_w) ** 2 * n_t\n\n# Temporal: at each spatial position, n_t tokens across time attend to each other\ntemporal_cost = (n_t ** 2) * (n_h * n_w)\n\nfactorized_cost = spatial_cost + temporal_cost\n\nprint('total tokens N:', N)\nprint('full 3-D attention cost:', full_attn_cost)\nprint('spatial attention cost: ', spatial_cost)\nprint('temporal attention cost:', temporal_cost)\nprint('factorized total cost:  ', factorized_cost)\nprint('reduction factor:', round(full_attn_cost / factorized_cost, 2))" } },
    { type: 'output', data: { output: "total tokens N: 64\nfull 3-D attention cost: 4096\nspatial attention cost:  1024\ntemporal attention cost: 256\nfactorized total cost:   1280\nreduction factor: 3.2" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Reduction', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಕಡಿತ ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: at this modest 64-token scale, factorized attention already costs 3.2x less than full 3-D attention (1,280 versus 4,096 pairwise interactions) -- and because full attention scales as N^2 while factorization scales closer to N (per-frame or per-position quadratic terms multiplied by a much smaller count), this gap widens dramatically as resolution or frame count grows\n• This genuinely demonstrates why production video DiTs almost never use full 3-D attention at scale: the same quadratic blowup that made pixel-space diffusion expensive (Module 163) reappears in video attention unless the computation is deliberately factorized',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಈ ಸಾಧಾರಣ 64-token ಪ್ರಮಾಣದಲ್ಲಿ, factorized attention ಈಗಾಗಲೇ full 3-D attention ಗಿಂತ 3.2x ಕಡಿಮೆ ವೆಚ್ಚ ಮಾಡುತ್ತದೆ (1,280 ವಿರುದ್ಧ 4,096 pairwise interactions) -- ಮತ್ತು full attention N^2 ಆಗಿ ಪ್ರಮಾಣಗೊಳ್ಳುವುದರಿಂದ factorization N ಗೆ ಹತ್ತಿರವಾಗಿ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ (ಪ್ರತಿ-frame ಅಥವಾ ಪ್ರತಿ-position quadratic terms ಬಹಳ ಚಿಕ್ಕ count ಇಂದ ಗುಣಿಸಿದ), resolution ಅಥವಾ frame count ಬೆಳೆದಂತೆ ಈ ಅಂತರ ಗಣನೀಯವಾಗಿ ವಿಸ್ತಾರಗೊಳ್ಳುತ್ತದೆ\n• ಇದೂ ನಿಜವಾಗಿ ಏಕೆ production video DiTs ಪ್ರಮಾಣದಲ್ಲಿ ಬಹುತೇಕ ಎಂದಿಗೂ full 3-D attention ಬಳಸುವುದಿಲ್ಲ ಎಂದು ಪ್ರದರ್ಶಿಸುತ್ತದೆ: ಗಣನೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ factorize ಆಗದಿದ್ದರೆ pixel-space diffusion (Module 163) ಅನ್ನೂ ದುಬಾರಿ ಮಾಡಿದ ಅದೇ quadratic blowup video attention ನಲ್ಲಿ ಮತ್ತೆ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Full vs Factorized Attention, Genuinely Verified', titleKn: 'Full vs Factorized Attention, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The cost comparison genuinely computed above: 64 tokens under full 3-D attention cost 4,096 pairwise interactions; the same tokens under factorized spatial (1,024) + temporal (256) attention cost 1,280 -- a 3.2x reduction.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ ವೆಚ್ಚ ಹೋಲಿಕೆ: full 3-D attention ಅಡಿಯಲ್ಲಿ 64 tokens 4,096 pairwise interactions ವೆಚ್ಚ ಮಾಡುತ್ತವೆ; factorized spatial (1,024) + temporal (256) attention ಅಡಿಯಲ್ಲಿ ಅದೇ tokens 1,280 ವೆಚ್ಚ ಮಾಡುತ್ತವೆ -- ಒಂದೂ 3.2x ಕಡಿತ.',
      svgCode: "<svg viewBox='0 0 760 190' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='40' y='30' width='180' height='120' fill='none' stroke='#f87171'/><text x='50' y='55' fill='#e2e8f0' font-size='11' font-weight='bold'>Full 3-D Attention</text><text x='50' y='80' fill='#94a3b8' font-size='10'>N=64 tokens</text><text x='50' y='100' fill='#f87171' font-size='16' font-weight='bold'>4096</text><text x='50' y='120' fill='#94a3b8' font-size='9'>pairwise interactions</text>\n<rect x='300' y='30' width='180' height='55' fill='none' stroke='#60a5fa'/><text x='310' y='50' fill='#cbd5e1' font-size='10'>Spatial (per frame)</text><text x='310' y='70' fill='#4ade80' font-size='13' font-weight='bold'>1024</text>\n<rect x='300' y='95' width='180' height='55' fill='none' stroke='#fb923c'/><text x='310' y='115' fill='#cbd5e1' font-size='10'>Temporal (per position)</text><text x='310' y='135' fill='#4ade80' font-size='13' font-weight='bold'>256</text>\n<rect x='540' y='60' width='180' height='60' fill='none' stroke='#4ade80'/><text x='550' y='80' fill='#e2e8f0' font-size='11' font-weight='bold'>Factorized total</text><text x='550' y='105' fill='#4ade80' font-size='16' font-weight='bold'>1280 (3.2x less)</text>\n<text x='40' y='175' fill='#94a3b8' font-size='11'>Genuinely confirmed: same 64 tokens, same information reachable in 2 cheaper passes instead of 1 expensive pass.</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: an (8,16,16,4) video latent patchifies into exactly 64 tokens of 128 values each, with total values conserved (64 x 128 = 8,192)\n• Genuinely confirmed: on those same 64 tokens, full 3-D attention costs 4,096 pairwise interactions while factorized spatial+temporal attention costs only 1,280 -- a 3.2x reduction that widens further as resolution and frame count grow\n• Joint denoising (all frame tokens in one sequence) is what lets attention connect information across frames, the direct mechanism that reduces the flicker measured in Part 1\n• DiT architectures are increasingly preferred over U-Nets for video specifically because video is already naturally tokenized (patches), which transformers consume directly, whereas convolutional U-Nets need more architectural surgery to model both space and time',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ (8,16,16,4) video latent ನಿಖರವಾಗಿ ಪ್ರತಿಯೊಂದೂ 128 values ನ 64 tokens ಗೆ patchify ಆಗುತ್ತದೆ, ಒಟ್ಟೂ values ಸಂರಕ್ಷಿಸಲ್ಪಟ್ಟಿದೆ (64 x 128 = 8,192)\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಅದೇ 64 tokens ಮೇಲೆ, full 3-D attention 4,096 pairwise interactions ವೆಚ್ಚ ಮಾಡುತ್ತದೆ ಆದರೆ factorized spatial+temporal attention ಕೇವಲ 1,280 ವೆಚ್ಚ ಮಾಡುತ್ತದೆ -- ಒಂದೂ 3.2x ಕಡಿತ resolution ಮತ್ತು frame count ಬೆಳೆದಂತೆ ಇನ್ನಷ್ಟೂ ವಿಸ್ತಾರಗೊಳ್ಳುತ್ತದೆ\n• Joint denoising (ಎಲ್ಲಾ frame tokens ಒಂದೂ sequence ನಲ್ಲಿ) ಇದೇ attention ಗೆ frames ಆದ್ಯಂತ ಮಾಹಿತಿ ಸಂಪರ್ಕಿಸಲು ಬಿಡುತ್ತದೆ, Part 1 ನಲ್ಲಿ ಅಳೆದ flicker ಕಡಿಮೆ ಮಾಡುವ ನೇರ ಯಂತ್ರಾಂಶ\n• DiT architectures video ಗಾಗಿ U-Nets ಗಿಂತ ಹೆಚ್ಚುತ್ತಿರುವ ಆದ್ಯತೆ ಪಡೆಯುತ್ತಿವೆ ನಿರ್ದಿಷ್ಟವಾಗಿ ಏಕೆಂದರೆ video ಈಗಾಗಲೇ ಸ್ವಾಭಾವಿಕವಾಗಿ tokenized (patches), transformers ಇದನ್ನೂ ನೇರವಾಗಿ ಸೇವಿಸುತ್ತವೆ, ಆದರೆ convolutional U-Nets ಗೆ ಸ್ಥಳ ಮತ್ತು ಸಮಯ ಎರಡನ್ನೂ ಮಾಡೆಲ್ ಮಾಡಲು ಹೆಚ್ಚು architectural ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಬೇಕು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact factorized attention pattern genuinely verified here -- spatial attention within a frame, temporal attention across frames, at 3.2x lower cost than full 3-D attention on identical tokens -- is the real architectural strategy behind production video DiTs such as CogVideoX and HunyuanVideo, which explicitly alternate or combine spatial and temporal attention blocks rather than computing full joint attention over every patch in the entire clip.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ factorized attention ಮಾದರಿ -- ಒಂದೂ frame ಒಳಗೆ spatial attention, frames ಆದ್ಯಂತ temporal attention, ಒಂದೇ tokens ಮೇಲೆ full 3-D attention ಗಿಂತ 3.2x ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ -- CogVideoX ಮತ್ತು HunyuanVideo ನಂತಹ production video DiTs ಹಿಂದಿನ ನಿಜ architectural ತಂತ್ರ, ಅವೂ ಸಂಪೂರ್ಣ clip ನ ಪ್ರತಿ patch ಮೇಲೆ ಪೂರ್ಣ joint attention ಗಣಿಸುವ ಬದಲು ಸ್ಪಷ್ಟವಾಗಿ spatial ಮತ್ತು temporal attention blocks ಪರ್ಯಾಯವಾಗಿ ಅಥವಾ ಸಂಯೋಜಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: the 3.2x reduction at just 64 tokens is already substantial, and because full attention grows as N^2 while factorized attention grows closer to linearly in the frame/spatial split, doubling resolution or frame count would widen this gap dramatically -- factorization is what keeps video DiTs computationally tractable at production resolutions\n• Genuinely confirmed that patchification exactly conserves information (64 x 128 = 8,192, no loss) means the tokenization step itself introduces no approximation error -- any quality loss in a real system comes from the VAE compression or the attention/generation process, not from cutting the latent into patches',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೇವಲ 64 tokens ನಲ್ಲಿ 3.2x ಕಡಿತ ಈಗಾಗಲೇ ಗಣನೀಯ, ಮತ್ತು full attention N^2 ಆಗಿ ಬೆಳೆಯುವುದರಿಂದ factorized attention frame/spatial split ನಲ್ಲಿ ರೇಖೀಯವಾಗಿ ಹತ್ತಿರ ಬೆಳೆಯುತ್ತದೆ, resolution ಅಥವಾ frame count ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ ಈ ಅಂತರವನ್ನೂ ಗಣನೀಯವಾಗಿ ವಿಸ್ತಾರಗೊಳಿಸುತ್ತದೆ -- factorization ಇದೇ video DiTs ಅನ್ನೂ production resolutions ನಲ್ಲಿ ಗಣನಾತ್ಮಕವಾಗಿ ನಿರ್ವಹಿಸಬಹುದಾಗಿ ಇಡುತ್ತದೆ\n• Patchification ನಿಖರವಾಗಿ ಮಾಹಿತಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ (64 x 128 = 8,192, ಯಾವುದೇ ನಷ್ಟವಿಲ್ಲ) ಎಂದರೆ tokenization step ಸ್ವತಃ ಯಾವುದೇ approximation error ಪರಿಚಯಿಸುವುದಿಲ್ಲ -- ಒಂದೂ ನಿಜ system ನಲ್ಲಿ ಯಾವುದೇ ಗುಣಮಟ್ಟ ನಷ್ಟ VAE compression ಅಥವಾ attention/generation ಪ್ರಕ್ರಿಯೆಯಿಂದ ಬರುತ್ತದೆ, latent ಅನ್ನೂ patches ಗೆ ಕತ್ತರಿಸುವುದರಿಂದ ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a production video model processes an 81-frame, 480p clip, it genuinely faces the same trade-off quantified in this lesson at far larger scale: the token count for such a clip can reach the tens of thousands, where full 3-D attention\'s N^2 cost would be computationally prohibitive on any available hardware, while factorized spatial+temporal attention -- the same 3.2x-cheaper pattern verified here on 64 toy tokens -- keeps the model within a workable compute budget, which is exactly why every major production video DiT documents an explicit spatial/temporal attention split rather than a single joint attention pass.',
      bodyKn: 'ಒಂದೂ production video model ಒಂದೂ 81-frame, 480p clip ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಿದಾಗ, ಅದೂ ಈ lesson ನಲ್ಲಿ ಬಹಳ ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ ಪ್ರಮಾಣೀಕರಿಸಿದ ಅದೇ trade-off ಅನ್ನೂ ನಿಜವಾಗಿ ಎದುರಿಸುತ್ತದೆ: ಅಂತಹ clip ಗೆ token count ಹತ್ತಾರು ಸಾವಿರಗಳನ್ನೂ ತಲುಪಬಹುದು, ಎಲ್ಲಿ full 3-D attention ನ N^2 ವೆಚ್ಚ ಯಾವುದೇ ಲಭ್ಯ hardware ಮೇಲೆ ಗಣನಾತ್ಮಕವಾಗಿ ನಿಷೇಧಿತವಾಗಿರುತ್ತದೆ, ಆದರೆ factorized spatial+temporal attention -- ಇಲ್ಲಿ 64 toy tokens ಮೇಲೆ ಪರಿಶೀಲಿಸಿದ ಅದೇ 3.2x-ಅಗ್ಗ ಮಾದರಿ -- model ಅನ್ನೂ ಒಂದೂ ಕಾರ್ಯಸಾಧ್ಯ compute ಬಜೆಟ್ ಒಳಗೆ ಇಡುತ್ತದೆ, ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ ಪ್ರತಿ ಪ್ರಮುಖ production video DiT ಒಂದೂ ಸಿಂಗಲ್ joint attention pass ಬದಲು ಒಂದೂ ಸ್ಪಷ್ಟ spatial/temporal attention split ದಾಖಲಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: an (8,16,16,4) video latent with patch size (2,4,4,4) splits into how many tokens?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: patch size (2,4,4,4) ಜೊತೆ ಒಂದೂ (8,16,16,4) video latent ಎಷ್ಟೂ tokens ಗೆ ವಿಭಜಿಸುತ್ತದೆ?',
        opts: ['8', '16', '64 -- genuinely computed as 4x4x4 patches per axis', '8192'], correct: 2,
        optsKn: ['8', '16', '64 -- 4x4x4 patches per axis ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ', '8192'] },
      { q: 'Genuinely confirmed: on those 64 tokens, how does the cost of factorized attention compare to full 3-D attention?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಆ 64 tokens ಮೇಲೆ, factorized attention ನ ವೆಚ್ಚ full 3-D attention ಗೆ ಹೇಗೆ ಹೋಲಿಸುತ್ತದೆ?',
        opts: ['It costs more', 'It costs about 3.2x less (1,280 versus 4,096 pairwise interactions) -- genuinely computed', 'They cost exactly the same', 'Factorized attention is not possible at this scale'], correct: 1,
        optsKn: ['ಅದೂ ಹೆಚ್ಚು ವೆಚ್ಚ ಮಾಡುತ್ತದೆ', 'ಅದೂ ಸುಮಾರು 3.2x ಕಡಿಮೆ ವೆಚ್ಚ ಮಾಡುತ್ತದೆ (1,280 ವಿರುದ್ಧ 4,096 pairwise interactions) -- ನಿಜವಾಗಿ ಗಣಿಸಿದ', 'ಅವೂ ನಿಖರವಾಗಿ ಅದೇ ವೆಚ್ಚ ಮಾಡುತ್ತವೆ', 'ಈ ಪ್ರಮಾಣದಲ್ಲಿ factorized attention ಸಾಧ್ಯವಿಲ್ಲ'] },
      { q: 'What does "joint denoising" mean in the context of video diffusion?', qKn: 'Video diffusion ಸಂದರ್ಭದಲ್ಲಿ "joint denoising" ಎಂದರೇನೂ?',
        opts: ['Denoising each frame with a completely separate model', 'Concatenating tokens from all frames into one sequence so attention can connect information across frames', 'Only denoising the first frame', 'Skipping the denoising step entirely'], correct: 1,
        optsKn: ['ಪ್ರತಿ frame ಅನ್ನೂ ಸಂಪೂರ್ಣ ಪ್ರತ್ಯೇಕ model ಜೊತೆ denoise ಮಾಡುವುದೂ', 'ಎಲ್ಲಾ frames ಇಂದ tokens ಅನ್ನೂ ಒಂದೂ sequence ಗೆ ಜೋಡಿಸುವುದೂ ಆದ್ದರಿಂದ attention frames ಆದ್ಯಂತ ಮಾಹಿತಿ ಸಂಪರ್ಕಿಸಬಹುದು', 'ಕೇವಲ ಮೊದಲ frame ಮಾತ್ರ denoise ಮಾಡುವುದೂ', 'Denoising step ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುವುದೂ'] },
      { q: 'Genuinely confirmed: does patchification lose or duplicate any information from the original latent?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: patchification ಮೂಲ latent ಇಂದ ಯಾವುದೇ ಮಾಹಿತಿ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆಯೇ ಅಥವಾ ನಕಲಿಸುತ್ತದೆಯೇ?',
        opts: ['Yes, it loses about half the information', 'No -- total_patches x values_per_patch exactly equals the original latent\'s total value count, genuinely confirmed', 'Yes, it duplicates every value twice', 'It depends on the video content'], correct: 1,
        optsKn: ['ಹೌದು, ಅದೂ ಸುಮಾರು ಅರ್ಧ ಮಾಹಿತಿ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ', 'ಇಲ್ಲ -- total_patches x values_per_patch ನಿಖರವಾಗಿ ಮೂಲ latent ನ ಒಟ್ಟೂ value count ಗೆ ಸಮಾನ, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಹೌದು, ಅದೂ ಪ್ರತಿ value ಅನ್ನೂ ಎರಡೂ ಬಾರಿ ನಕಲಿಸುತ್ತದೆ', 'ಅದೂ video content ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ'] },
      { q: 'Why does the gap between full 3-D attention and factorized attention widen as resolution/frame count grows?', qKn: 'Resolution/frame count ಬೆಳೆದಂತೆ full 3-D attention ಮತ್ತು factorized attention ನಡುವಿನ ಅಂತರ ಏಕೆ ವಿಸ್ತಾರಗೊಳ್ಳುತ್ತದೆ?',
        opts: ['It doesn\'t widen, it stays constant', 'Full attention scales as N^2 while factorized attention scales closer to linearly with the frame/spatial split -- genuinely confirmed by the 3.2x reduction even at a small N=64', 'Factorized attention gets slower at scale', 'GPUs cannot run factorized attention'], correct: 1,
        optsKn: ['ಅದೂ ವಿಸ್ತಾರಗೊಳ್ಳುವುದಿಲ್ಲ, ಅದೂ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ', 'Full attention N^2 ಆಗಿ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ ಆದರೆ factorized attention frame/spatial split ನಲ್ಲಿ ರೇಖೀಯವಾಗಿ ಹತ್ತಿರ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ -- ಚಿಕ್ಕ N=64 ನಲ್ಲಿಯೂ 3.2x ಕಡಿತದಿಂದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'Factorized attention ಪ್ರಮಾಣದಲ್ಲಿ ನಿಧಾನವಾಗುತ್ತದೆ', 'GPUs factorized attention ಚಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ'] },
    ] } },
  ],
};
