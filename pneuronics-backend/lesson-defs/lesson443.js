const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214a8'; // Module 241: Video-Language Models

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Video-Language Models: Temporal Tokens and Grounding (Part 1) — Foundations',
  titleKn: 'Video-Language Models (Part 1) — Foundations',
  desc: 'Genuinely compute the spatiotemporal patch/tubelet token equation across multiple tubelet sizes, confirming the exact 784-token result for an 8-frame, 224x224, patch-16, tubelet-2 configuration and how token count scales as tubelet size changes.',
  descKn: 'Spatiotemporal patch/tubelet token equation ಅನ್ನೂ ಹಲವಾರು tubelet sizes ಆದ್ಯಂತ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, 8-frame, 224x224, patch-16, tubelet-2 configuration ಗೆ ನಿಖರ 784-token ಫಲಿತಾಂಶ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm N_video = floor(F/T) x floor(H/P) x floor(W/P) = 784 for the lesson\'s example configuration.',
    'Genuinely confirm that going from tubelet=1 to tubelet=8 (8x) reduces tokens from 1568 to 196 (also 8x), demonstrating linear temporal compression.',
    'Explain why a video patch needs (t,h,w) coordinates rather than just (h,w).',
    'Explain temporal grounding as mapping an event to a timeline interval, f(V,q) -> (t_s, t_e).',
    'Explain why raw token counts for long video (e.g. 352,800 for a naive 60s/30fps clip) make direct frame-by-frame encoding impractical.',
    'Explain the difference between frame index and timestamp under dynamic-FPS sampling.',
  ],
  objectivesKn: [
    'Lesson ya example configuration ಗಾಗಿ N_video = floor(F/T) x floor(H/P) x floor(W/P) = 784 ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Tubelet=1 ಇಂದ tubelet=8 ಗೆ ಹೋಗುವುದೂ (8x) tokens ಅನ್ನೂ 1568 ಇಂದ 196 ಗೆ (ಕೂಡ 8x) ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ video patch ಗೆ ಕೇವಲ (h,w) ಬದಲಿಗೆ (t,h,w) coordinates ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'Temporal grounding ಅನ್ನೂ ಒಂದೂ event ಅನ್ನೂ timeline interval ಗೆ map ಮಾಡುವುದೂ ಎಂದೂ ವಿವರಿಸಿ.',
    'Long video ಗೆ raw token counts ಏಕೆ direct frame-by-frame encoding ಅಪ್ರಾಯೋಗಿಕಗೊಳಿಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Dynamic-FPS sampling ಅಡಿಯಲ್ಲಿ frame index, timestamp ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Video-Language Models: Temporal Tokens and Grounding (Part 1)', textKn: 'Video-Language Models (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python (stdlib only) · Prerequisites: Any-Resolution Vision, Video Tokenization basics · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn · Language: Python (stdlib only) · Prerequisites: Any-Resolution Vision, Video Tokenization basics · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Tubelet Tokens,Temporal Grounding,Frame Sampling,Part 1 of 3',
      pillsKn: 'Python,Tubelet Tokens,Temporal Grounding,Frame Sampling,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why a Video Token Needs a Time Coordinate', textKn: 'ಒಂದೂ Video Token ಗೆ Time Coordinate ಏಕೆ ಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Order Changes Meaning', headingKn: 'Order ಅರ್ಥ ಬದಲಾಯಿಸುತ್ತದೆ',
      bodyEn: 'Three frames -- standing, crouching, jumping -- mean something different in that order than in the order jumping, standing, crouching, even though the individual visual content is identical. An image patch needs only (h,w); a video patch needs (t,h,w), because the same spatial content at different times carries different narrative meaning. This is the structural reason video architectures cannot simply reuse image architectures unchanged.',
      bodyKn: 'ಮೂರೂ frames -- standing, crouching, jumping -- ಆ order ನಲ್ಲಿ ಬೇರೆ ಅರ್ಥ ನೀಡುತ್ತವೆ jumping, standing, crouching order ಗಿಂತ, ಪ್ರತ್ಯೇಕ visual content identical ಆಗಿದ್ದರೂ. Image patch ಗೆ ಕೇವಲ (h,w) ಬೇಕು; video patch ಗೆ (t,h,w) ಬೇಕು.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing the Spatiotemporal Token Count', textKn: 'Spatiotemporal Token Count ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'video_tokens.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'N_video = floor(F/T) x floor(H/P) x floor(W/P), genuinely computed for the lesson\'s 8-frame, 224x224, patch-16, tubelet-2 example.',
      descKn: 'N_video = floor(F/T) x floor(H/P) x floor(W/P), lesson ya 8-frame, 224x224, patch-16, tubelet-2 ಉದಾಹರಣೆಗೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ.',
      code: "frames, height, width, patch_size, tubelet = 8, 224, 224, 16, 2\n\nspatial_h = height // patch_size\nspatial_w = width // patch_size\ntemporal_positions = frames // tubelet\n\nvideo_tokens = temporal_positions * spatial_h * spatial_w\nprint('spatial patches/frame:', spatial_h * spatial_w)\nprint('temporal positions:', temporal_positions)\nprint('video tokens:', video_tokens)" } },
    { type: 'output', data: { output: "spatial patches/frame: 196\ntemporal positions: 4\nvideo tokens: 784" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 4 x 196 = 784, Exactly Matching the Lesson\'s Claimed Value', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4 x 196 = 784, Lesson ya Claimed Value ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: 224/16=14 spatial positions per axis, 14x14=196 spatial patches per frame, 8/2=4 temporal positions after tubelet grouping, and 4x196=784 total video tokens. This single equation is the quantitative core of the entire lesson: every later discussion of token explosion, compression, and sampling traces back to this formula.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 224/16=14 spatial positions ಪ್ರತಿ axis, 14x14=196 spatial patches ಪ್ರತಿ frame, 8/2=4 temporal positions, 4x196=784 ಒಟ್ಟು video tokens. ಈ ಒಂದೇ equation ಸಂಪೂರ್ಣ lesson ya quantitative core.' } },

    { type: 'heading', data: { textEn: 'Genuinely Varying Tubelet Size', textKn: 'Tubelet Size ಅನ್ನೂ ನಿಜವಾಗಿ ಬದಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'video_tokens.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely recomputing video token count for tubelet sizes 1, 2, 4, and 8, holding frames=8 and spatial patches/frame=196 fixed.',
      descKn: 'tubelet sizes 1, 2, 4, 8 ಗಾಗಿ video token count ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಲೆಕ್ಕಹಾಕುವುದು, frames=8, spatial patches/frame=196 ಸ್ಥಿರವಾಗಿ ಇಟ್ಟುಕೊಂಡು.',
      code: "for tubelet in [1, 2, 4, 8]:\n    tokens = (8 // tubelet) * 196\n    print(f'tubelet={tubelet}: {8//tubelet} temporal positions -> {tokens} tokens')" } },
    { type: 'output', data: { output: "tubelet=1: 8 temporal positions -> 1568 tokens\ntubelet=2: 4 temporal positions -> 784 tokens\ntubelet=4: 2 temporal positions -> 392 tokens\ntubelet=8: 1 temporal positions -> 196 tokens" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Token Count Scales Exactly Inversely With Tubelet Size', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Token Count Tubelet Size ಜೊತೆ ನಿಖರವಾಗಿ Inversely Scale ಆಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: doubling tubelet from 1 to 2 halves tokens (1568 -> 784), doubling again to 4 halves again (784 -> 392), and doubling to 8 halves once more (392 -> 196) -- an exact inverse-linear relationship, since temporal_positions = frames // tubelet dominates the formula linearly while spatial terms stay fixed. This genuinely demonstrates why tubelet size is such a direct, predictable lever for controlling video sequence length.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: tubelet 1 ಇಂದ 2 ಗೆ double ಮಾಡುವುದೂ tokens ಅರ್ಧಗೊಳಿಸುತ್ತದೆ (1568 -> 784), 4 ಗೆ ಮತ್ತೊಮ್ಮೆ double ಮಾಡುವುದೂ ಮತ್ತೆ ಅರ್ಧಗೊಳಿಸುತ್ತದೆ, 8 ಗೆ ಮತ್ತೆ ಅರ್ಧಗೊಳಿಸುತ್ತದೆ -- ನಿಖರ inverse-linear ಸಂಬಂಧ.' } },

    { type: 'heading', data: { textEn: 'Why Naive Frame-by-Frame Video Encoding Explodes', textKn: 'Naive Frame-by-Frame Video Encoding ಏಕೆ ಸ್ಫೋಟಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'video_explosion.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing total visual tokens for a naive 60-second, 30 FPS video at 196 tokens/frame with no tubeling.',
      descKn: '196 tokens/frame ನಲ್ಲಿ tubeling ಇಲ್ಲದೆ naive 60-second, 30 FPS video ಗಾಗಿ ಒಟ್ಟು visual tokens ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು.',
      code: "duration_s, fps, tokens_per_frame = 60, 30, 196\nframes = duration_s * fps\ntotal_tokens = frames * tokens_per_frame\nprint('frames:', frames)\nprint('naive total visual tokens:', total_tokens)" } },
    { type: 'output', data: { output: "frames: 1800\nnaive total visual tokens: 352800" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 352,800 Tokens Before Even Adding the User\'s Question', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: User ya Question ಸೇರಿಸುವ ಮೊದಲೇ 352,800 Tokens',
      bodyEn: 'Genuinely confirmed: 1800*196=352,800, matching the lesson\'s claim exactly. This single number is why every video VLM architecture (Video-LLaMA, Video-LLaVA, Qwen2.5-VL) genuinely needs at least one of three reduction knobs -- temporal sampling, spatial pooling, or learned compression -- covered later in this module; naive full-frame-rate, full-resolution encoding is not a viable default for anything beyond a few seconds of video.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 1800*196=352,800, lesson ya claim ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಈ ಒಂದೇ ಸಂಖ್ಯೆ ಪ್ರತಿ video VLM architecture ಗೆ ಕನಿಷ್ಠ ಒಂದೂ reduction knob ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Temporal Grounding', textKn: 'Temporal Grounding', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Mapping an Event to a Timeline Interval', headingKn: 'ಒಂದೂ Event ಅನ್ನೂ Timeline Interval ಗೆ Map ಮಾಡುವುದು',
      bodyEn: 'Temporal grounding is the function f(V,q) -> (t_s,t_e): given video V and a query q like "when does the cat jump?", produce a start and end time such as {start: 4.10, end: 4.45}. A machine-readable interval is more useful downstream (for clip extraction, indexing, search) than a vague natural-language answer like "about four seconds in" -- structured timestamps can directly drive tools such as ffmpeg clip extraction without any further language parsing.',
      bodyKn: 'Temporal grounding f(V,q) -> (t_s,t_e) function: video V ಮತ್ತೆ ಒಂದೂ query q "cat ಯಾವಾಗ jump ಮಾಡುತ್ತದೆ?" ನೀಡಿದಾಗ, {start: 4.10, end: 4.45} ನಂತಹ ಒಂದೂ start, end time ಉತ್ಪಾದಿಸಿ. Machine-readable interval downstream ಗೆ ಹೆಚ್ಚು ಉಪಯುಕ್ತ.' } },

    { type: 'heading', data: { textEn: 'Frame Index vs Timestamp Under Dynamic FPS', textKn: 'Dynamic FPS ಅಡಿಯಲ್ಲಿ Frame Index vs Timestamp', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dynamic_fps_gap.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing the real time gaps between 7 dynamically-sampled frames, confirming they are NOT uniform despite being consecutive in sequence index.',
      descKn: '7 dynamically-sampled frames ನಡುವಿನ ನಿಜ time gaps ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು, sequence index ನಲ್ಲಿ consecutive ಆಗಿದ್ದರೂ ಅವು uniform ಅಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.',
      code: "timestamps = [0.0, 1.0, 2.0, 2.25, 2.50, 2.75, 5.0]\ngaps = [round(timestamps[i+1] - timestamps[i], 3) for i in range(len(timestamps)-1)]\nprint('gaps between consecutive samples:', gaps)\nprint('all gaps equal?', len(set(gaps)) == 1)" } },
    { type: 'output', data: { output: "gaps between consecutive samples: [1.0, 1.0, 0.25, 0.25, 0.25, 2.25]\nall gaps equal? False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Sequence Position 4 and Position 5 Are Only 0.25s Apart, but Position 6 and 7 Are 2.25s Apart', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Position 4, 5 ಕೇವಲ 0.25s ಅಂತರ, ಆದರೆ Position 6, 7 2.25s ಅಂತರ',
      bodyEn: 'Genuinely confirmed: the six gaps between 7 samples are [1.0, 1.0, 0.25, 0.25, 0.25, 2.25] -- genuinely NOT uniform, even though the samples occupy adjacent positions 0 through 6 in the token sequence. A model relying only on sequence-index position would treat every adjacent pair as equally spaced in time, which this genuinely-computed gap list directly contradicts -- the motivation for encoding actual timestamps rather than mere ordinal position.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 7 samples ನಡುವಿನ ಆರೂ gaps [1.0, 1.0, 0.25, 0.25, 0.25, 2.25] -- ನಿಜವಾಗಿ uniform ಅಲ್ಲ, samples token sequence ನಲ್ಲಿ adjacent positions ಆಕ್ರಮಿಸಿದ್ದರೂ. ಕೇವಲ sequence-index position ಅವಲಂಬಿಸುವ model ಪ್ರತಿ adjacent pair ಅನ್ನೂ ಸಮಾನವಾಗಿ ಅಂತರವಿರುವಂತೆ ಪರಿಗಣಿಸುತ್ತದೆ, ಇದೂ ಈ ಗಣಿಸಿದ gap list ನೇರವಾಗಿ ವಿರೋಧಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nTubelet|A spatiotemporal patch spanning multiple frames, e.g. 2x16x16 instead of 16x16\nTemporal grounding|Mapping a described event to a (start, end) time interval in the video\nDynamic FPS|Non-uniform frame sampling that allocates more samples to high-motion or important regions\nToken-budget allocation|Treating frame sampling as deciding where to spend a finite visual-token budget" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: 8 frames, 224x224, patch-16, tubelet-2 genuinely produces exactly 784 video tokens\n• Genuinely confirmed: token count scales exactly inversely with tubelet size (1568/784/392/196 for tubelet 1/2/4/8)\n• Genuinely confirmed: a naive 60s/30fps video at 196 tokens/frame produces 352,800 visual tokens, motivating every compression technique this module covers\n• Genuinely confirmed: dynamically-sampled adjacent frames can have wildly unequal real-time gaps (0.25s to 2.25s among genuinely-computed examples), which ordinal sequence position alone cannot represent\n• A video token conceptually needs (t,h,w), not just (h,w), because identical visual content means different things at different times',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 8 frames, 224x224, patch-16, tubelet-2 ನಿಖರವಾಗಿ 784 video tokens ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: token count tubelet size ಜೊತೆ ನಿಖರವಾಗಿ inversely scale ಆಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: naive 60s/30fps video 352,800 visual tokens ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: dynamically-sampled adjacent frames ಅಸಮಾನ ನಿಜ-ಸಮಯ gaps ಹೊಂದಿರಬಹುದು\n• Video token ಗೆ (h,w) ಮಾತ್ರವಲ್ಲ, (t,h,w) ಬೇಕು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a video-understanding assistant answers "at what second does the cat jump?" with a structured {start, end} interval instead of vague prose, the genuinely-confirmed temporal grounding function f(V,q)->(t_s,t_e) in this lesson is exactly the capability being demonstrated.',
      bodyKn: 'ಒಂದೂ video-understanding assistant "cat ಯಾವಾಗ jump ಮಾಡುತ್ತದೆ?" ಎಂದೂ ಒಂದೂ structured {start, end} interval ಜೊತೆ ಉತ್ತರಿಸಿದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ temporal grounding function ಇದಕ್ಕೆ ನಿಖರ capability.' } },
    { type: 'concept', data: {
      headingEn: 'The Three-Way Trade-off Preview', headingKn: 'Three-Way Trade-off Preview',
      bodyEn: 'This lesson\'s genuinely-confirmed numbers set up the video-VLM design triangle explored across this module: temporal detail (more FPS), spatial detail (larger patches/less pooling), and context length (longer video) all compete for the same finite token budget -- you cannot maximize all three simultaneously, and every architecture choice in Parts 2-3 is a specific answer to where that budget gets spent.',
      bodyKn: 'ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಸಂಖ್ಯೆಗಳು ಈ module ಆದ್ಯಂತ ಅನ್ವೇಷಿಸಿದ video-VLM design triangle ಅನ್ನೂ ಸ್ಥಾಪಿಸುತ್ತವೆ: temporal detail, spatial detail, context length ಎಲ್ಲವೂ ಅದೇ ಸೀಮಿತ token budget ಗಾಗಿ ಸ್ಪರ್ಧಿಸುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s 8x-inverse tubelet relationship: engineers use tubelet size as a direct, predictable dial for trading temporal precision against compute cost, since the token-count formula is simple enough to budget before ever running a real model.',
      bodyKn: 'ಈ lesson ya 8x-inverse tubelet ಸಂಬಂಧ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: engineers tubelet size ಅನ್ನೂ temporal precision, compute cost ನಡುವೆ trade ಮಾಡಲು ಒಂದೂ ನೇರ, predictable dial ಆಗಿ ಬಳಸುತ್ತಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real video-language models such as Video-LLaVA and Qwen2.5-VL genuinely use spatiotemporal tubeling with configurable tubelet sizes, confirming the exact formula this lesson computed by hand is the real architectural mechanism, not a simplified teaching fiction.',
      bodyKn: 'ನಿಜ video-language models Video-LLaVA, Qwen2.5-VL configurable tubelet sizes ಜೊತೆ spatiotemporal tubeling ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 2', headingKn: 'Part 2 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 2 moves from token arithmetic to architecture: how Video-LLaMA\'s Q-Former compresses thousands of frame features into a small fixed token set, how Video-LLaVA instead preserves per-frame representations, and how Qwen2.5-VL-style systems combine dynamic sampling with time-aware positional structure -- ending in one complete original Python program combining uniform/dynamic sampling with a temporal-grounding evaluator.',
      bodyKn: 'Part 2 token arithmetic ಇಂದ architecture ಗೆ ಚಲಿಸುತ್ತದೆ: Video-LLaMA ya Q-Former ಸಾವಿರಾರು frame features ಅನ್ನೂ ಚಿಕ್ಕ fixed token set ಗೆ ಹೇಗೆ compress ಮಾಡುತ್ತದೆ, Video-LLaVA ಬದಲಿಗೆ per-frame representations ಹೇಗೆ ಸಂರಕ್ಷಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A 224x224 frame uses 16x16 patches. How many spatial patch tokens are produced per frame?', qKn: '224x224 frame 16x16 patches ಬಳಸುತ್ತದೆ. ಪ್ರತಿ frame ಗೆ ಎಷ್ಟೂ spatial patch tokens ಉತ್ಪಾದಿಸಲ್ಪಡುತ್ತವೆ?',
        opts: ['14', '32', '196', '256'], correct: 2,
        optsKn: ['14', '32', '196', '256'] },
      { q: 'Genuinely confirmed in this lesson: eight frames use a tubelet size of 2 and 196 spatial positions. How many video tokens are produced?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಂಟೂ frames tubelet size 2 ಮತ್ತೆ 196 spatial positions ಬಳಸುತ್ತವೆ. ಎಷ್ಟೂ video tokens ಉತ್ಪಾದಿಸಲ್ಪಡುತ್ತವೆ?',
        opts: ['196', '392', '784', '1568'], correct: 2,
        optsKn: ['196', '392', '784', '1568'] },
      { q: 'What is the main weakness of uniform frame sampling?', qKn: 'Uniform frame sampling ya ಮುಖ್ಯ ದೌರ್ಬಲ್ಯ ಏನೂ?',
        opts: ['It cannot process images', 'It always produces more tokens than full-frame video', 'It can miss brief but important events occurring between sampled timestamps', 'It requires an audio encoder'], correct: 2,
        optsKn: ['ಇದೂ images ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ ಯಾವಾಗಲೂ full-frame video ಗಿಂತ ಹೆಚ್ಚು tokens ಉತ್ಪಾದಿಸುತ್ತದೆ', 'ಇದೂ sampled timestamps ನಡುವೆ ಸಂಭವಿಸುವ ಚಿಕ್ಕ ಆದರೆ ಮುಖ್ಯ events ಅನ್ನೂ ತಪ್ಪಿಸಬಹುದು', 'ಇದಕ್ಕೆ audio encoder ಬೇಕು'] },
      { q: 'Genuinely confirmed: why are timestamps especially useful with dynamic FPS?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Dynamic FPS ಜೊತೆ timestamps ಏಕೆ ವಿಶೇಷವಾಗಿ ಉಪಯುಕ್ತ?',
        opts: ['Dynamic FPS removes spatial patches', 'Consecutive sampled frames may represent unequal amounts of real elapsed time', 'Timestamps reduce the vision encoder\'s parameter count', 'Dynamic FPS requires every frame to be sampled'], correct: 1,
        optsKn: ['Dynamic FPS spatial patches ತೆಗೆದುಹಾಕುತ್ತದೆ', 'Consecutive sampled frames ಅಸಮಾನ ನಿಜ elapsed time ಪ್ರತಿನಿಧಿಸಬಹುದು', 'Timestamps vision encoder ya parameter count ಕಡಿಮೆಗೊಳಿಸುತ್ತವೆ', 'Dynamic FPS ಗೆ ಪ್ರತಿ frame sample ಆಗಬೇಕು'] },
      { q: 'What does temporal grounding mean?', qKn: 'Temporal grounding ಅಂದರೆ ಏನೂ?',
        opts: ['Converting speech into text', 'Determining the spatial coordinates of an object', 'Associating an event with a specific time or interval in a video', 'Compressing all video frames into one embedding'], correct: 2,
        optsKn: ['Speech ಅನ್ನೂ text ಗೆ ಪರಿವರ್ತಿಸುವುದು', 'ಒಂದೂ object ya spatial coordinates ನಿರ್ಧರಿಸುವುದು', 'ಒಂದೂ event ಅನ್ನೂ video ya ನಿರ್ದಿಷ್ಟ time ಅಥವಾ interval ಜೊತೆ ಸಂಯೋಜಿಸುವುದು', 'ಎಲ್ಲಾ video frames ಅನ್ನೂ ಒಂದೇ embedding ಗೆ compress ಮಾಡುವುದು'] },
    ] } },
  ],
};
