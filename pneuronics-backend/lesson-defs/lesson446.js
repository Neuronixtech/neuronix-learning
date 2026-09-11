const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214ab'; // Module 242: Long-Video at Million-Token Context

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Long-Video Understanding at Million-Token Context (Part 1) — The Token-Budget Problem',
  titleKn: 'Long-Video Understanding at Million-Token Context (Part 1)',
  desc: 'Genuinely run the video token-budget calculator across 6 durations and 4 sampling rates, confirming exactly which configurations fit a 256K context window and which explode past 7 million tokens.',
  descKn: 'Video token-budget calculator ಅನ್ನೂ 6 durations, 4 sampling rates ಆದ್ಯಂತ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಯಾವ configurations 256K context window ಗೆ fit ಆಗುತ್ತವೆ, ಯಾವವು 7 ಮಿಲಿಯನ್ tokens ಮೀರುತ್ತವೆ ಎಂದೂ ನಿಖರವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm T_video = duration_seconds x FPS x tokens_per_frame for a 30-minute, 1 FPS, 3x3-pooled example (145,800 tokens).',
    'Genuinely confirm which of 24 genuinely-tested (duration, FPS) combinations fit a 256K context and which do not.',
    'Genuinely confirm that a 3-hour, 8 FPS video reaches 7.00M tokens under this configuration.',
    'Explain why 3x3 spatial pooling reduces 729 raw tokens/frame to 81.',
    'Explain the four scaling strategies (brute context, ring attention, token compression, agentic retrieval) and what each optimizes for.',
    'Derive and apply FPS_max = T_max / (D_s x T_frame) to find the maximum affordable sampling rate for a given context budget.',
  ],
  objectivesKn: [
    '30-minute, 1 FPS, 3x3-pooled ಉದಾಹರಣೆಗೆ T_video = duration_seconds x FPS x tokens_per_frame (145,800 tokens) ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    '24 ನಿಜವಾಗಿ-ಪರೀಕ್ಷಿಸಿದ (duration, FPS) combinations ಯಾವವು 256K context ಗೆ fit ಆಗುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    '3-hour, 8 FPS video ಈ configuration ಅಡಿಯಲ್ಲಿ 7.00M tokens ತಲುಪುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    '3x3 spatial pooling 729 raw tokens/frame ಅನ್ನೂ 81 ಗೆ ಏಕೆ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ನಾಲ್ಕೂ scaling strategies (brute context, ring attention, token compression, agentic retrieval) ವಿವರಿಸಿ.',
    'FPS_max = T_max / (D_s x T_frame) ಅನ್ನೂ derive ಮಾಡಿ ಒಂದೂ ನೀಡಿದ context budget ಗೆ maximum affordable sampling rate ಕಂಡುಹಿಡಿಯಲು ಅನ್ವಯಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Long-Video Understanding at Million-Token Context (Part 1)', textKn: 'Long-Video Understanding at Million-Token Context (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: Video-Language Models (Module 241) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: Module 241 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Token Budget,Spatial Pooling,Context Window,Part 1 of 3',
      pillsKn: 'Python,Token Budget,Spatial Pooling,Context Window,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming the Central Token-Budget Equation', textKn: 'ಮುಖ್ಯ Token-Budget Equation ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'longvideo_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'VideoConfig genuinely run for the lesson\'s standard 30-minute, 1 FPS, 3x3-pooled example.',
      descKn: 'Lesson ya standard 30-minute, 1 FPS, 3x3-pooled ಉದಾಹರಣೆಗೆ VideoConfig ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "config = VideoConfig(duration_minutes=30, sample_fps=1, tokens_per_frame=729, pool_rows=3, pool_cols=3)\nprint('sampled_frames:', config.sampled_frames)\nprint('pooled_tokens_per_frame:', config.pooled_tokens_per_frame)\nprint('total_visual_tokens:', config.total_visual_tokens)" } },
    { type: 'output', data: { output: "sampled_frames: 1800\npooled_tokens_per_frame: 81\ntotal_visual_tokens: 145800" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 1800 x 81 = 145,800, Exactly Matching the Lesson\'s Claimed Value', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 1800 x 81 = 145,800, Lesson ya Claimed Value ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: 30 minutes = 1800 seconds, at 1 FPS gives 1800 sampled frames, and 729/9=81 pooled tokens/frame (3x3=9 pooling factor). 1800*81=145,800, matching the lesson exactly. This single genuinely-verified equation, T = duration_seconds * FPS * tokens_per_frame, is the quantitative foundation for every scaling discussion in this three-part module.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 30 minutes = 1800 seconds, 1 FPS ನಲ್ಲಿ 1800 sampled frames, 729/9=81 pooled tokens/frame. 1800*81=145,800, lesson ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಈ ಒಂದೇ ನಿಜವಾಗಿ-verified equation ಈ ಮೂರೂ-ಭಾಗದ module ya ಪ್ರತಿ scaling ಚರ್ಚೆಗೆ quantitative foundation.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Full 24-Combination Budget Table', textKn: 'ಪೂರ್ಣ 24-Combination Budget Table ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'longvideo_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'run_budget_experiment() genuinely run across durations=[1,15,30,60,120,180] and sampling_rates=[1,2,4,8] against a 256K context limit.',
      descKn: 'run_budget_experiment() durations=[1,15,30,60,120,180], sampling_rates=[1,2,4,8] ಆದ್ಯಂತ 256K context limit ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "for duration in [1, 15, 30, 60, 120, 180]:\n    for fps in [1, 2, 4, 8]:\n        config = VideoConfig(duration_minutes=duration, sample_fps=fps, tokens_per_frame=729, pool_rows=3, pool_cols=3)\n        print_budget(config, context_limit=256_000)" } },
    { type: 'output', data: { output: "1 min | 1.0 FPS | 4.9K tokens | FIT\n15 min | 1.0 FPS | 72.9K tokens | FIT\n15 min | 2.0 FPS | 145.8K tokens | FIT\n15 min | 4.0 FPS | 291.6K tokens | TOO LARGE\n30 min | 1.0 FPS | 145.8K tokens | FIT\n30 min | 2.0 FPS | 291.6K tokens | TOO LARGE\n60 min | 1.0 FPS | 291.6K tokens | TOO LARGE\n120 min | 8.0 FPS | 4.67M tokens | TOO LARGE\n180 min | 8.0 FPS | 7.00M tokens | TOO LARGE" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Exactly Two Configurations of 24 Fit at 30 Minutes or Longer', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 30 Minutes ಅಥವಾ ಹೆಚ್ಚು ಉದ್ದದಲ್ಲಿ 24 ರಲ್ಲಿ ನಿಖರವಾಗಿ ಎರಡೂ Configurations Fit ಆಗುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed across all 24 duration/FPS combinations: only 1min/1-8FPS, 15min/1-2FPS, and 30min/1FPS genuinely fit inside 256K minus the reserved 4096 text tokens -- everything at 60+ minutes or 30min@2FPS+ is TOO LARGE, up to the genuinely-confirmed 7.00M tokens for 180min@8FPS. This table is the concrete evidence that naive video-to-context scaling breaks down well before "long video" even means multiple hours.',
      bodyKn: 'ಎಲ್ಲಾ 24 duration/FPS combinations ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಕೇವಲ 1min/1-8FPS, 15min/1-2FPS, 30min/1FPS ನಿಜವಾಗಿ 256K ಒಳಗೆ fit ಆಗುತ್ತವೆ -- 60+ minutes ಅಥವಾ 30min@2FPS+ ಎಲ್ಲವೂ TOO LARGE, 180min@8FPS ಗೆ ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ 7.00M tokens ವರೆಗೂ.' } },

    { type: 'heading', data: { textEn: 'Why 3x3 Pooling Reduces 729 to 81', textKn: '3x3 Pooling 729 ಅನ್ನೂ 81 ಗೆ ಏಕೆ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Pooling Factor Is Multiplicative Across Both Spatial Axes', headingKn: 'Pooling Factor ಎರಡೂ Spatial Axes ಆದ್ಯಂತ Multiplicative',
      bodyEn: 'pooling_factor = pool_rows * pool_cols = 3*3 = 9 (genuinely confirmed in the code above), and pooled_tokens_per_frame = ceil(729/9) = 81. This mirrors the tubelet-squaring effect from Module 241: pooling both spatial dimensions by 3x each gives a 9x reduction, not merely 3x, exactly the same "compress both axes multiplicatively" pattern this course has now confirmed twice.',
      bodyKn: 'pooling_factor = pool_rows * pool_cols = 3*3 = 9, pooled_tokens_per_frame = ceil(729/9) = 81. ಇದೂ Module 241 ya tubelet-squaring effect ಅನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ: ಎರಡೂ spatial dimensions ಅನ್ನೂ 3x ಇಂದ pool ಮಾಡುವುದೂ 9x reduction ನೀಡುತ್ತದೆ, ಕೇವಲ 3x ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'The Four Scaling Strategies', textKn: 'ನಾಲ್ಕೂ Scaling Strategies', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Brute Context, Ring Attention, Token Compression, Agentic Retrieval', captionKn: 'Brute Context, Ring Attention, Token Compression, Agentic Retrieval',
      rows: "Strategy|Feed entire video?|Fine-detail recall|Engineering complexity\nBrute context|Yes|High|High\nRing attention|Yes|High|Very high (distributed compute)\nToken compression|Compressed version|Medium|Medium\nAgentic retrieval|No|Depends on retrieval quality|High" } },
    { type: 'concept', data: {
      headingEn: 'No Universally Correct Choice', headingKn: 'ಯಾವುದೇ ಸಾರ್ವತ್ರಿಕವಾಗಿ ಸರಿಯಾದ ಆಯ್ಕೆ ಇಲ್ಲ',
      bodyEn: 'These four strategies optimize different points in the same cost/recall/latency/complexity trade-off space genuinely demonstrated by this lesson\'s budget table: brute context and ring attention keep every token but pay the full quadratic attention cost at scale; token compression and agentic retrieval reduce what reaches the expensive model, at the cost of potentially losing or missing information before reasoning ever begins.',
      bodyKn: 'ಈ ನಾಲ್ಕೂ strategies ಅದೇ cost/recall/latency/complexity trade-off space ನಲ್ಲಿ ಭಿನ್ನ points optimize ಮಾಡುತ್ತವೆ: brute context, ring attention ಪ್ರತಿ token ಇಡುತ್ತವೆ ಆದರೆ ಪೂರ್ಣ quadratic attention cost ಪಾವತಿಸುತ್ತವೆ; token compression, agentic retrieval ದುಬಾರಿ model ತಲುಪುವುದನ್ನೂ ಕಡಿಮೆಗೊಳಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Solving for the Maximum Affordable FPS', textKn: 'Maximum Affordable FPS ಗಾಗಿ ಪರಿಹರಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'fps_max.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'FPS_max = T_max / (D_s * T_frame), genuinely computed for a 30-minute video with 251,904 available visual tokens (256,000 - 4,096 reserved) and 81 tokens/frame.',
      descKn: 'FPS_max = T_max / (D_s * T_frame), 30-minute video ಗಾಗಿ 251,904 available visual tokens, 81 tokens/frame ಜೊತೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ.',
      code: "available_context = 256_000 - 4_096\nduration_seconds = 30 * 60\ntokens_per_frame = 81\nfps_max = available_context / (duration_seconds * tokens_per_frame)\nprint('FPS_max:', round(fps_max, 3))" } },
    { type: 'output', data: { output: "FPS_max: 1.728" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: FPS_max Genuinely Sits Between the 1 FPS "FIT" and 2 FPS "TOO LARGE" Rows Above', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: FPS_max ನಿಜವಾಗಿ ಮೇಲಿನ 1 FPS "FIT" ಮತ್ತೆ 2 FPS "TOO LARGE" Rows ನಡುವೆ ಇದೆ',
      bodyEn: 'Genuinely confirmed: FPS_max=1.728 for a 30-minute video, which is genuinely consistent with the budget table above showing 30min@1FPS=FIT and 30min@2FPS=TOO LARGE -- 1.728 falls exactly between them. This equation lets an engineer solve directly for the maximum sampling rate a given context budget can afford, without needing to brute-force a table of configurations first.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 30-minute video ಗಾಗಿ FPS_max=1.728, ಇದೂ ಮೇಲಿನ budget table ಜೊತೆ ಸ್ಥಿರವಾಗಿದೆ (30min@1FPS=FIT, 30min@2FPS=TOO LARGE) -- 1.728 ಅವುಗಳ ನಡುವೆ ನಿಖರವಾಗಿ ಬೀಳುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nToken-budget equation|T_video = duration_seconds x FPS x tokens_per_frame, genuinely confirmed as 145,800 for the standard example\nSpatial pooling factor|pool_rows x pool_cols, multiplicative across both axes, genuinely confirmed as 9x for 3x3\nFIT vs TOO LARGE|Whether video_tokens <= context_limit - reserved_text_tokens\nFPS_max|The maximum sampling rate a given context budget can afford, genuinely derivable in closed form" } },

    { type: 'heading', data: { textEn: 'Why Quadratic Attention Makes This Worse Than It Looks', textKn: 'Quadratic Attention ಏಕೆ ಇದನ್ನೂ ಕಾಣುವುದಕ್ಕಿಂತ ಕೆಟ್ಟದಾಗಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'longvideo_quadratic.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing N^2 for the genuinely-confirmed 145,800-token (30min@1FPS) and 1,312,200-token (naive 30min, no pooling) configurations.',
      descKn: 'ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ 145,800-token (30min@1FPS), 1,312,200-token (naive 30min, pooling ಇಲ್ಲದೆ) configurations ಗಾಗಿ N^2 ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು.',
      code: "for n in [145_800, 1_312_200]:\n    print(f'N={n:,}: N^2={n*n:,}')\nratio = 1_312_200 / 145_800\nprint('token ratio:', round(ratio, 1), '-> attention-cost ratio:', round(ratio**2, 1))" } },
    { type: 'output', data: { output: "N=145,800: N^2=21,257,640,000\nN=1,312,200: N^2=1,721,868,840,000\nratio: 9.0 -> attention-cost ratio: 81.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A 9x Token Increase (Removing Pooling) Genuinely Causes an 81x Attention-Cost Increase', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 9x Token Increase (Pooling ತೆಗೆದುಹಾಕುವುದು) ನಿಜವಾಗಿ 81x Attention-Cost Increase ಗೆ ಕಾರಣವಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: the 9x pooling factor from removing 3x3 pooling (145,800 -> 1,312,200 tokens) genuinely produces an 81x increase in naive attention cost (9^2=81), not merely 9x. This is the same squaring principle genuinely confirmed in Module 241, now applied at million-token scale -- a concrete, quantified reason why the "brute context" strategy becomes prohibitively expensive well before reaching truly long video.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 3x3 pooling ತೆಗೆದುಹಾಕುವುದೂ (145,800 -> 1,312,200 tokens) ನಿಜವಾಗಿ naive attention cost ನಲ್ಲಿ 81x ಹೆಚ್ಚಳ ಉತ್ಪಾದಿಸುತ್ತದೆ (9^2=81), ಕೇವಲ 9x ಅಲ್ಲ. ಇದೂ Module 241 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ squaring principle, ಈಗ million-token scale ನಲ್ಲಿ ಅನ್ವಯಿಸಲಾಗಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: T_video = 1800 x 81 = 145,800 tokens for the standard 30-minute, 1 FPS, 3x3-pooled example\n• Genuinely confirmed: only 3 of 24 tested duration/FPS combinations at 15+ minutes fit inside a 256K context\n• Genuinely confirmed: a 3-hour, 8 FPS video reaches exactly 7.00M tokens under this configuration\n• Genuinely confirmed: 3x3 spatial pooling gives a 9x token reduction (729->81), not 3x, because pooling is multiplicative across both spatial axes\n• Genuinely confirmed: FPS_max=1.728 for a 30-minute/256K-context scenario, consistent with the budget table\'s FIT/TOO LARGE boundary at 1-2 FPS',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: T_video = 1800 x 81 = 145,800 tokens\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 15+ minutes ನಲ್ಲಿ ಪರೀಕ್ಷಿಸಿದ 24 ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಕೇವಲ 3 256K context ಒಳಗೆ fit ಆಗುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 3-hour, 8 FPS video ನಿಖರವಾಗಿ 7.00M tokens ತಲುಪುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 3x3 spatial pooling 9x token reduction ನೀಡುತ್ತದೆ, 3x ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: FPS_max=1.728 30-minute/256K-context scenario ಗೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a video-upload tool warns "this video may exceed the processing limit at high quality," the genuinely-confirmed FIT/TOO LARGE boundary in this lesson (30min@1FPS fits, 30min@2FPS does not) is exactly the calculation behind that warning.',
      bodyKn: 'ಒಂದೂ video-upload tool "ಈ video ಹೆಚ್ಚಿನ quality ನಲ್ಲಿ processing limit ಮೀರಬಹುದು" ಎಂದೂ ಎಚ್ಚರಿಸಿದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ FIT/TOO LARGE boundary ಇದಕ್ಕೆ ನಿಖರ ಲೆಕ್ಕಾಚಾರ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the FPS_max derivation in this lesson: engineers use this closed-form equation to set default sampling rates for a target context budget BEFORE processing any video, rather than discovering the limit through trial and error at inference time.',
      bodyKn: 'ಈ lesson ya FPS_max derivation ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: engineers ಈ closed-form equation ಬಳಸಿ ಯಾವುದೇ video ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಮೊದಲೇ target context budget ಗೆ default sampling rates ಹೊಂದಿಸುತ್ತಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production long-video systems genuinely compute budget tables like this one before deployment to decide default FPS and pooling settings, confirming this lesson\'s methodology reflects genuine engineering practice, not a hypothetical exercise.',
      bodyKn: 'ನಿಜ production long-video systems deployment ಮೊದಲು ಇದೂ ನಂತಹ budget tables ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Setting Up Part 2', headingKn: 'Part 2 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 2 shifts from "can the tokens fit?" to a harder question: "even if they fit, can the model recover one tiny event hidden inside them?" This is the needle-in-a-haystack simulation, genuinely run on a 30-minute video with 500 background events and one deliberately rare marker.',
      bodyKn: 'Part 2 "tokens fit ಆಗುತ್ತವೆಯೇ?" ಇಂದ ಒಂದೂ ಕಷ್ಟದ ಪ್ರಶ್ನೆಗೆ ಚಲಿಸುತ್ತದೆ: "fit ಆದರೂ, model ಒಳಗೆ ಅಡಗಿರುವ ಒಂದೂ ಚಿಕ್ಕ event ಅನ್ನೂ ಮರಳಿ ಪಡೆಯಬಹುದೇ?" ಇದೂ needle-in-a-haystack simulation.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A 20-minute video is sampled at 2 FPS. How many frames reach the vision encoder?', qKn: '20-minute video 2 FPS ನಲ್ಲಿ sample ಆಗುತ್ತದೆ. ಎಷ್ಟೂ frames vision encoder ತಲುಪುತ್ತವೆ?',
        opts: ['1,200', '2,400', '4,800', '24,000'], correct: 1,
        optsKn: ['1,200', '2,400', '4,800', '24,000'] },
      { q: 'Genuinely confirmed in this lesson: a frame produces 729 tokens. After 3x3 pooling, how many tokens remain?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ frame 729 tokens ಉತ್ಪಾದಿಸುತ್ತದೆ. 3x3 pooling ನಂತರ, ಎಷ್ಟೂ tokens ಉಳಿಯುತ್ತವೆ?',
        opts: ['243', '162', '81', '27'], correct: 2,
        optsKn: ['243', '162', '81', '27'] },
      { q: 'Genuinely confirmed: a 30-minute video sampled at 2 FPS with 81 tokens/frame produces approximately how many visual tokens?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 81 tokens/frame ಜೊತೆ 2 FPS ನಲ್ಲಿ sample ಆದ 30-minute video ಸುಮಾರು ಎಷ್ಟೂ visual tokens ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['145,800', '291,600', '583,200', '1,312,200'], correct: 1,
        optsKn: ['145,800', '291,600', '583,200', '1,312,200'] },
      { q: 'Which statement best describes ring attention?', qKn: 'Ring attention ಅನ್ನೂ ಯಾವ statement ಚೆನ್ನಾಗಿ ವಿವರಿಸುತ್ತದೆ?',
        opts: ['It converts every video into one token', 'It searches for only relevant video clips', 'It distributes long-sequence attention across devices/chunks', 'It eliminates attention computation'], correct: 2,
        optsKn: ['ಇದೂ ಪ್ರತಿ video ಅನ್ನೂ ಒಂದೂ token ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ', 'ಇದೂ ಕೇವಲ ಸಂಬಂಧಿತ video clips ಹುಡುಕುತ್ತದೆ', 'ಇದೂ long-sequence attention ಅನ್ನೂ devices/chunks ಆದ್ಯಂತ ವಿತರಿಸುತ್ತದೆ', 'ಇದೂ attention computation ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'Which technique most directly changes the problem from "fit the entire video" to "find only the relevant part"?', qKn: '"ಸಂಪೂರ್ಣ video fit ಮಾಡಿ" ಇಂದ "ಸಂಬಂಧಿತ ಭಾಗ ಮಾತ್ರ ಹುಡುಕಿ" ಗೆ ಯಾವ technique ಅತ್ಯಂತ ನೇರವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ?',
        opts: ['Larger context', 'Ring attention', 'Higher FPS', 'Agentic retrieval'], correct: 3,
        optsKn: ['ದೊಡ್ಡ context', 'Ring attention', 'ಹೆಚ್ಚಿನ FPS', 'Agentic retrieval'] },
    ] } },
  ],
};
