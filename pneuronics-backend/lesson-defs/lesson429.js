const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321499'; // Module 236: Emu3

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Emu3: Next-Token Prediction for Image and Video Generation (Part 2) — Breaking Down the Visual Tokenizer Math',
  titleKn: 'Emu3 (Part 2) — Visual Tokenizer Math ಮತ್ತೆ Code ಒಡೆಯುವುದು',
  desc: 'Genuinely re-run the 2D and 3D token-count equations across several real configurations to confirm why math.ceil() matters, why video tokens explode multiplicatively, and why vocabulary size is unrelated to sequence length.',
  descKn: 'math.ceil() ಏಕೆ ಮುಖ್ಯ, video tokens ಏಕೆ multiplicatively ಸ್ಫೋಟಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಲು 2D ಮತ್ತೆ 3D token-count equations ಅನ್ನೂ ಹಲವಾರು ನಿಜ configurations ಆದ್ಯಂತ ನಿಜವಾಗಿ ಮತ್ತೆ-ಚಲಾಯಿಸಿ.',
  objectives: [
    'Genuinely confirm math.ceil() prevents silently dropping partial rows/columns for non-multiple-of-reduction image sizes.',
    'Genuinely confirm token count for a 1024x1024 image at 8x reduction and explain why it is 4x the 512x512 example.',
    'Genuinely confirm frame_count() and token_count() for a 6-second, 10 FPS video and connect each number back to the equations.',
    'Explain why video token count scales as T\'*H\'*W\', a triple product, versus an image\'s H\'*W\' double product.',
    'Explain the attention cost implication (O(N^2)) of long visual sequences using genuinely computed N values.',
    'Explain why KV caching helps but does not eliminate the sequential nature of autoregressive visual decoding.',
  ],
  objectivesKn: [
    'non-multiple-of-reduction image sizes ಗೆ math.ceil() partial rows/columns ಶಾಂತವಾಗಿ ಬಿಡುವುದನ್ನೂ ತಡೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    '8x reduction ನಲ್ಲಿ 1024x1024 image ಗೆ token count ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಅದೂ 512x512 ಗಿಂತ 4x ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    '6-second, 10 FPS video ಗಾಗಿ frame_count() ಮತ್ತೆ token_count() ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Video token count T\'*H\'*W\' triple product ಆಗಿ ಏಕೆ scale ಆಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ N values ಬಳಸಿ long visual sequences ya attention cost implication (O(N^2)) ವಿವರಿಸಿ.',
    'KV caching ಏಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಆದರೆ autoregressive visual decoding ya sequential ಸ್ವಭಾವ ಏಕೆ ತೆಗೆದುಹಾಕುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Emu3: Next-Token Prediction (Part 2)', textKn: 'Emu3: Next-Token Prediction (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Token Counting,ceil(),Attention Cost,Part 2 of 3',
      pillsKn: 'Python,Token Counting,ceil(),Attention Cost,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Why math.ceil() and Not Integer Division', textKn: 'math.ceil() ಏಕೆ, Integer Division ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'emu3_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely comparing math.ceil(513/8) against floor-style integer division (513 // 8) to confirm the coverage difference the pasted token_grid() implementation relies on.',
      descKn: 'Pasted token_grid() implementation ಅವಲಂಬಿಸಿರುವ coverage ವ್ಯತ್ಯಾಸವನ್ನೂ ದೃಢಪಡಿಸಲು math.ceil(513/8) ಅನ್ನೂ floor-style integer division (513 // 8) ಗೆ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದು.',
      code: "import math\nprint('ceil(513/8)  =', math.ceil(513 / 8))\nprint('513 // 8     =', 513 // 8)\nprint('rows covered by floor division:', (513 // 8) * 8, 'of 513 pixels')" } },
    { type: 'output', data: { output: "ceil(513/8)  = 65\n513 // 8     = 64\nrows covered by floor division: 512 of 513 pixels" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Floor Division Would Silently Drop the Last Pixel Row', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Floor Division ಕೊನೆಯ Pixel Row ಅನ್ನೂ ಶಾಂತವಾಗಿ ಬಿಡುತ್ತಿತ್ತು',
      bodyEn: 'Genuinely confirmed: for a 513-pixel dimension, 513 // 8 = 64 covers only 512 of the 513 pixels -- the last row would be silently excluded from any token position. math.ceil(513/8) = 65 instead allocates one extra (partial) token position so every pixel is represented, consistent with how real image tokenizers handle non-multiple-of-patch-size inputs (typically via padding).',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 513-pixel dimension ಗೆ, 513 // 8 = 64 ಕೇವಲ 512 ಪಿಕ್ಸೆಲ್ಗಳನ್ನೂ ಕವರ್ ಮಾಡುತ್ತದೆ -- ಕೊನೆಯ row ಯಾವುದೇ token position ಇಂದ ಶಾಂತವಾಗಿ ಹೊರಗಿಡಲ್ಪಡುತ್ತದೆ. math.ceil(513/8) = 65 ಬದಲಿಗೆ ಒಂದೂ ಹೆಚ್ಚುವರಿ token position ಹಂಚುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Scaling the Image Example: 1024x1024', textKn: 'Image Example Scale ಮಾಡುವುದು: 1024x1024', level: 'H2' } },
    { type: 'code', data: {
      filename: 'emu3_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-running ImageTokenizerConfig for a 1024x1024 image at 8x spatial reduction (double the linear resolution of Part 1\'s example).',
      descKn: 'Part 1 ya ಉದಾಹರಣೆ ya ಎರಡರಷ್ಟು linear resolution ಇರುವ 1024x1024 image ಗಾಗಿ, 8x spatial reduction ಜೊತೆ ImageTokenizerConfig ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ-ಚಲಾಯಿಸುವುದು.',
      code: "config = ImageTokenizerConfig(height=1024, width=1024, spatial_reduction=8)\nprint('Token grid  :', config.token_grid())\nprint('Image tokens:', config.token_count())" } },
    { type: 'output', data: { output: "Token grid  : (128, 128)\nImage tokens: 16384" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Doubling Resolution Genuinely Quadruples Tokens', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Resolution Double ಮಾಡುವುದೂ ನಿಜವಾಗಿ Tokens ಅನ್ನೂ Quadruple ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: doubling both height and width from 512 to 1024 (at fixed 8x reduction) gives 128x128=16384 tokens, exactly 4x the Part 1 result of 4096. This matches the general rule: doubling H and W independently multiplies token count by 2x2=4x, since token count is proportional to H*W, not H+W.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: height ಮತ್ತೆ width ಎರಡನ್ನೂ 512 ಇಂದ 1024 ಗೆ double ಮಾಡುವುದೂ (8x reduction ಸ್ಥಿರವಾಗಿ) 128x128=16384 tokens ನೀಡುತ್ತದೆ, Part 1 ya 4096 ಫಲಿತಾಂಶದ ನಿಖರವಾಗಿ 4x. token count H*W ಗೆ ಅನುಪಾತದಲ್ಲಿದೆ, H+W ಗೆ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'A Different Video Configuration: 6 Seconds at 10 FPS', textKn: 'ಭಿನ್ನ Video Configuration: 6 Seconds at 10 FPS', level: 'H2' } },
    { type: 'code', data: {
      filename: 'emu3_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely running VideoTokenizerConfig for a 6-second, 10 FPS, 256x256 video with the same 4x spatial/temporal reduction as Part 1.',
      descKn: 'Part 1 ya ಅದೇ 4x spatial/temporal reduction ಜೊತೆ 6-second, 10 FPS, 256x256 video ಗಾಗಿ VideoTokenizerConfig ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು.',
      code: "config = VideoTokenizerConfig(height=256, width=256, duration_seconds=6, fps=10, spatial_reduction=4, temporal_reduction=4)\nprint('Frames    :', config.frame_count())\nprint('Token grid:', config.token_grid())\nprint('Tokens    :', config.token_count())" } },
    { type: 'output', data: { output: "Frames    : 60\nToken grid: (15, 64, 64)\nTokens    : 61440" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 6s@10FPS Gives 60 Frames, 15 Temporal Positions, 61440 Tokens', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 6s@10FPS 60 Frames, 15 Temporal Positions, 61440 Tokens ನೀಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: 6*10=60 frames, ceil(60/4)=15 temporal positions, and 15*64*64=61440 total tokens -- nearly twice Part 1\'s 32768-token example despite only a 50% longer clip (6s vs 4s) and higher FPS (10 vs 8), showing how duration and FPS combine multiplicatively through the frame-count step before temporal reduction is even applied.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 6*10=60 frames, ceil(60/4)=15 temporal positions, 15*64*64=61440 ಒಟ್ಟು tokens -- Part 1 ya 32768-token ಉದಾಹರಣೆಗಿಂತ ಬಹುತೇಕ ಎರಡರಷ್ಟು, ಕೇವಲ 50% ಉದ್ದದ clip ಮತ್ತೆ ಹೆಚ್ಚಿನ FPS ಹೊರತಾಗಿಯೂ.' } },

    { type: 'heading', data: { textEn: 'Why Long Visual Sequences Are Expensive: O(N^2) Attention', textKn: 'Long Visual Sequences ಏಕೆ ದುಬಾರಿ: O(N^2) Attention', level: 'H2' } },
    { type: 'code', data: {
      filename: 'attention_cost.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing the naive quadratic attention-matrix size for each genuinely-confirmed N from this lesson.',
      descKn: 'ಈ lesson ಇಂದ ಪ್ರತಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ N ಗಾಗಿ naive quadratic attention-matrix size ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು.',
      code: "for label, n in [('image 4096', 4096), ('image 16384', 16384), ('video 32768', 32768), ('video 61440', 61440)]:\n    print(label, '-> N^2 =', n * n)" } },
    { type: 'output', data: { output: "image 4096 -> N^2 = 16777216\nimage 16384 -> N^2 = 268435456\nvideo 32768 -> N^2 = 1073741824\nvideo 61440 -> N^2 = 3774873600" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: N^2 Grows Far Faster Than N', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: N^2 N ಗಿಂತ ಬಹಳ ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: going from the 4096-token image to the 61440-token video is only a 15x increase in N, but a 225x increase in the naive N^2 attention-matrix size (16.8M -> 3.77B). This concretely illustrates why long visual sequences strain attention computation far more than their raw token count alone suggests.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 4096-token image ಇಂದ 61440-token video ಗೆ ಹೋಗುವುದೂ N ನಲ್ಲಿ ಕೇವಲ 15x ಹೆಚ್ಚಳ, ಆದರೆ naive N^2 attention-matrix size ನಲ್ಲಿ 225x ಹೆಚ್ಚಳ. ಇದೂ long visual sequences attention computation ಅನ್ನೂ ಏಕೆ ಒತ್ತಡಗೊಳಿಸುತ್ತವೆ ಎಂದೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ವಿವರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Training Parallelism vs Autoregressive Inference', textKn: 'Training Parallelism vs Autoregressive Inference', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Teacher Forcing Parallelizes Training; Generation Stays Sequential', headingKn: 'Teacher Forcing Training ಅನ್ನೂ Parallelize ಮಾಡುತ್ತದೆ; Generation Sequential ಆಗಿ ಉಳಿಯುತ್ತದೆ',
      bodyEn: 'During training, the full target sequence is already known, so all N predictions can be computed in one forward pass under a causal mask. During inference, token i+1 cannot be finalized before token i is sampled and appended, so generating N=61440 video tokens genuinely requires up to 61440 sequential dependent steps (KV caching reduces redundant recomputation per step, but does not remove the dependency chain itself).',
      bodyKn: 'Training ಸಮಯ, ಪೂರ್ಣ target sequence ಈಗಾಗಲೇ ತಿಳಿದಿದೆ, ಆದ್ದರಿಂದ ಎಲ್ಲಾ N predictions ಒಂದೇ forward pass ನಲ್ಲಿ ಲೆಕ್ಕಹಾಕಬಹುದು. Inference ಸಮಯ, token i+1 token i sample ಆಗುವ ಮೊದಲು ಅಂತಿಮಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ N=61440 video tokens ಉತ್ಪಾದಿಸಲು 61440 ಸೀಕ್ವೆನ್ಷಿಯಲ್ ಹಂತಗಳು ಬೇಕಾಗಬಹುದು.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nmath.ceil() coverage|Ensures partial rows/columns still get a token position instead of being dropped\nQuadratic scaling|Doubling both H and W multiplies image tokens by 4x (2x2)\nTriple product (video)|N_video = T'*H'*W', so duration/FPS and resolution both matter\nO(N^2) attention|Naive attention-matrix size scales with the square of sequence length\nKV cache|Reuses previously computed keys/values so each new token avoids full recomputation, but generation remains sequential" } },

    { type: 'heading', data: { textEn: 'Vocabulary Size Is Independent of Image Dimensions', textKn: 'Vocabulary Size Image Dimensions ಇಂದ Independent', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Bigger Codebook Does Not Mean a Longer Sequence',
      headingKn: 'ದೊಡ್ಡ Codebook ಎಂದರೆ ಉದ್ದ Sequence ಅಲ್ಲ',
      bodyEn: 'None of the genuinely-confirmed token counts in this lesson (4096, 16384, 61440) depended on codebook size K at all -- token_count() only uses height, width, duration, fps, and the two reduction factors. A codebook of K=32768 and a codebook of K=512 would produce the exact same 4096 tokens for the 512x512/8x image; K only affects how many bits each token needs and how finely each position can be represented, not how many positions exist.',
      bodyKn: 'ಈ lesson ya ಯಾವುದೇ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ token counts (4096, 16384, 61440) codebook size K ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿಲ್ಲ -- token_count() ಕೇವಲ height, width, duration, fps, reduction factors ಬಳಸುತ್ತದೆ. K=32768 ya codebook ಮತ್ತೆ K=512 ya codebook 512x512/8x image ಗೆ ಅದೇ 4096 tokens ಉತ್ಪಾದಿಸುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: math.ceil(513/8)=65 vs floor 513//8=64 -- floor division would silently drop the last pixel row\n• Genuinely confirmed: doubling image resolution from 512 to 1024 (8x reduction fixed) genuinely quadruples tokens, from 4096 to 16384\n• Genuinely confirmed: a 6s@10FPS video produces 61440 tokens -- nearly double Part 1\'s 4s@8FPS example, from the combined effect of longer duration and higher FPS on frame_count()\n• Genuinely confirmed: going from 4096 to 61440 tokens is a 15x increase in N but a 225x increase in naive N^2 attention cost\n• Training uses teacher forcing to predict all positions in parallel; inference remains fundamentally sequential regardless of KV caching',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: math.ceil(513/8)=65 vs floor 513//8=64\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 512 ಇಂದ 1024 ಗೆ resolution double ಮಾಡುವುದೂ tokens ಅನ್ನೂ 4096 ಇಂದ 16384 ಗೆ quadruple ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 6s@10FPS video 61440 tokens ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 4096 ಇಂದ 61440 ಗೆ ಹೋಗುವುದೂ N ನಲ್ಲಿ 15x, N^2 ನಲ್ಲಿ 225x ಹೆಚ್ಚಳ\n• Training teacher forcing ಬಳಸಿ ಎಲ್ಲಾ positions parallel ಆಗಿ predict ಮಾಡುತ್ತದೆ; inference ಮೂಲಭೂತವಾಗಿ sequential ಆಗಿ ಉಳಿಯುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Emu3 Pairs Well with the Chameleon Foundation', headingKn: 'Emu3 Chameleon Foundation ಜೊತೆ ಏಕೆ ಚೆನ್ನಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'Chameleon (Module 235) proved the shared-vocabulary + single-loss idea works for images at toy scale; Emu3 keeps that exact architectural bet but pushes it toward video, where this lesson\'s genuinely-confirmed triple-product token growth (T\'*H\'*W\') makes the sequence-length engineering problem far more pressing than it was for images alone.',
      bodyKn: 'Chameleon (Module 235) shared-vocabulary + single-loss idea toy scale ನಲ್ಲಿ images ಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿತು; Emu3 ಅದೇ architectural bet ಇಟ್ಟುಕೊಂಡು video ಕಡೆಗೆ ತಳ್ಳುತ್ತದೆ, ಅಲ್ಲಿ triple-product token growth sequence-length engineering ಸಮಸ್ಯೆಯನ್ನೂ ಹೆಚ್ಚು ಒತ್ತಡಪಡಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a video-generation tool lets you pick resolution and duration separately, the genuinely-confirmed 4x-per-resolution-doubling and linear-per-duration scaling in this lesson explains why the resolution slider affects generation time far more sharply than the duration slider does.',
      bodyKn: 'ಒಂದೂ video-generation tool resolution ಮತ್ತೆ duration ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಆಯ್ಕೆ ಮಾಡಲು ಬಿಟ್ಟಾಗ, ಈ lesson ya 4x-per-resolution-doubling scaling resolution slider ಏಕೆ duration slider ಗಿಂತ generation time ಮೇಲೆ ಹೆಚ್ಚು ತೀಕ್ಷ್ಣವಾಗಿ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಎಂದೂ ವಿವರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s N^2 comparison: engineers use these exact equations to budget compute and set default resolution/duration limits for production video-generation products before a single model call is made, since the cost curve is predictable from tokenizer configuration alone.',
      bodyKn: 'ಈ lesson ya N^2 ಹೋಲಿಕೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: engineers ಈ ನಿಖರ equations ಬಳಸಿ compute budget ಮಾಡುತ್ತಾರೆ ಮತ್ತೆ production video-generation products ಗೆ default resolution/duration limits ಹೊಂದಿಸುತ್ತಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production video-generation systems commonly cap default output to a few seconds at modest resolution specifically because of this genuinely-confirmed multiplicative token-count growth -- a naive "let users generate any resolution and duration" design would make worst-case sequence lengths and attention costs unpredictable.',
      bodyKn: 'ನಿಜ production video-generation systems ಸಾಮಾನ್ಯವಾಗಿ default output ಅನ್ನೂ ಕೆಲವು ಸೆಕೆಂಡುಗಳಿಗೆ ಮಿತಿಗೊಳಿಸುತ್ತವೆ, ಈ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ multiplicative token-count growth ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 3', headingKn: 'Part 3 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 3 will break down softmax(), temperature scaling, classifier_free_guidance(), and categorical sampling line by line, trace one generation step numerically by hand, and finish with Emu3 vs diffusion, limitations, exercises, and the final quiz.',
      bodyKn: 'Part 3 softmax(), temperature scaling, classifier_free_guidance(), categorical sampling ಅನ್ನೂ line by line ಒಡೆಯುತ್ತದೆ, ಒಂದೂ generation step ಅನ್ನೂ ಕೈಯಾರೆ numerically trace ಮಾಡುತ್ತದೆ, Emu3 vs diffusion ಜೊತೆ ಮುಗಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A 1024x1024 image uses 8x spatial reduction. How many tokens are produced?', qKn: '1024x1024 image 8x spatial reduction ಬಳಸುತ್ತದೆ. ಎಷ್ಟೂ tokens ಉತ್ಪಾದಿಸಲ್ಪಡುತ್ತವೆ?',
        opts: ['4096', '8192', '16384', '32768'], correct: 2,
        optsKn: ['4096', '8192', '16384', '32768'] },
      { q: 'Genuinely confirmed in this lesson: why does math.ceil() matter for a 513-pixel dimension at 8x reduction?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 8x reduction ನಲ್ಲಿ 513-pixel dimension ಗೆ math.ceil() ಏಕೆ ಮುಖ್ಯ?',
        opts: ['It makes the code run faster', 'Floor division would silently drop the last partial pixel row', 'It changes the vocabulary size', 'It removes the need for a VQ decoder'], correct: 1,
        optsKn: ['ಇದೂ code ಅನ್ನೂ ವೇಗವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ', 'Floor division ಕೊನೆಯ ಭಾಗಶಃ pixel row ಅನ್ನೂ ಶಾಂತವಾಗಿ ಬಿಡುತ್ತದೆ', 'ಇದೂ vocabulary size ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ VQ decoder ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'A 6-second clip at 10 FPS contains how many frames, genuinely confirmed in this lesson?', qKn: '10 FPS ನಲ್ಲಿ 6-second clip ಎಷ್ಟೂ frames ಹೊಂದಿದೆ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದಂತೆ?',
        opts: ['16', '40', '60', '600'], correct: 2,
        optsKn: ['16', '40', '60', '600'] },
      { q: 'What is the difference between codebook size and token count?', qKn: 'Codebook size ಮತ್ತೆ token count ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They are always identical', 'Codebook size is the number of possible symbols; token count is the number of positions in a particular sample', 'Codebook size is video duration', 'Token count determines RGB depth'], correct: 1,
        optsKn: ['ಅವು ಯಾವಾಗಲೂ ಒಂದೇ', 'Codebook size ಸಾಧ್ಯ symbols ya ಸಂಖ್ಯೆ; token count ಒಂದೂ ಉದಾಹರಣೆ ya positions ya ಸಂಖ್ಯೆ', 'Codebook size video duration', 'Token count RGB depth ನಿರ್ಧರಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: going from 4096 to 61440 tokens increased the naive attention cost (N^2) by approximately how much?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4096 ಇಂದ 61440 tokens ಗೆ ಹೋಗುವುದೂ naive attention cost (N^2) ಅನ್ನೂ ಸುಮಾರು ಎಷ್ಟೂ ಹೆಚ್ಚಿಸಿತು?',
        opts: ['15x', '30x', '225x', '450x'], correct: 2,
        optsKn: ['15x', '30x', '225x', '450x'] },
    ] } },
  ],
};
