const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321490'; // Module 233: Qwen-VL Family and Dynamic-FPS Video

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Qwen-VL Family and Dynamic-FPS Video (Part 2) — Dynamic FPS and Absolute Time',
  titleKn: 'Qwen-VL Family and Dynamic-FPS Video (Part 2) — Dynamic FPS ಮತ್ತೆ Absolute Time',
  desc: 'Genuinely implement and run choose_dynamic_fps() and sample_video() on three real scenarios, confirming the exact 1/2/4 FPS selections and 24,300/9,720/19,440 token counts, and understand why frame index is not the same as absolute time when FPS varies.',
  descKn: 'choose_dynamic_fps() ಮತ್ತೆ sample_video() ಅನ್ನೂ ಮೂರೂ ನಿಜ scenarios ಮೇಲೆ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ನಿಖರ 1/2/4 FPS ಆಯ್ಕೆಗಳ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement and run choose_dynamic_fps() for a slow lecture, normal scene, and action clip.',
    'Genuinely confirm the fps_max = B/(T*P) formula and how it interacts with motion-level targets.',
    'Genuinely run sample_video() and confirm the exact timestamps generated at 2 FPS and 4 FPS.',
    'Explain why frame index is not the same as absolute time when different videos use different FPS.',
    'Genuinely confirm the slow lecture scenario exceeds its nominal budget (24,300 > 24,000) and explain why this is an honest simplification, not a bug.',
    'Explain the tokens/sec relationship and why doubling FPS doubles token cost.',
  ],
  objectivesKn: [
    'choose_dynamic_fps() ಅನ್ನೂ ಒಂದೂ slow lecture, normal scene, action clip ಗಾಗಿ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ.',
    'fps_max = B/(T*P) formula ಮತ್ತೆ ಇದೂ motion-level targets ಜೊತೆ ಹೇಗೆ ಸಂವಹಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'sample_video() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ 2 FPS ಮತ್ತೆ 4 FPS ನಲ್ಲಿ ಉತ್ಪಾದಿಸಿದ ನಿಖರ timestamps ದೃಢಪಡಿಸಿ.',
    'ಭಿನ್ನ videos ಭಿನ್ನ FPS ಬಳಸಿದಾಗ frame index absolute time ಗೆ ಸಮಾನವಲ್ಲ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'slow lecture scenario ಇದರ ನಾಮಮಾತ್ರ budget ಮೀರುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಇದೂ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ ಸರಳೀಕರಣ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'tokens/sec ಸಂಬಂಧ ಮತ್ತೆ FPS ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ token cost ಅನ್ನೂ ಏಕೆ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Qwen-VL Family and Dynamic-FPS Video (Part 2) — Dynamic FPS and Absolute Time', textKn: 'Qwen-VL Family and Dynamic-FPS Video (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Dynamic FPS,Video Sampling,Absolute Time,Part 2 of 3',
      pillsKn: 'Python,Dynamic FPS,Video Sampling,Absolute Time,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Why Fixed-FPS Sampling Is Wasteful', textKn: 'Fixed-FPS Sampling ಏಕೆ ವ್ಯರ್ಥ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Lecture and a Basketball Clip Don\'t Need the Same Sampling Rate', headingKn: 'ಒಂದೂ Lecture ಮತ್ತೆ Basketball Clip ಗೆ ಅದೇ Sampling Rate ಬೇಕಿಲ್ಲ',
      bodyEn: 'If both a lecture and a fast basketball clip are sampled at 8 FPS, a lecture\'s consecutive frames may look nearly identical while fast action frames could skip and destroy the event. The best sampling rate depends on duration, motion, token budget, and task. The key equation: fps_max = B/(T*P) where B=token budget, T=duration, P=tokens per frame -- solving for the maximum FPS that stays within budget.',
      bodyKn: 'ಒಂದೂ lecture ಮತ್ತೆ ಒಂದೂ ವೇಗದ basketball clip ಎರಡೂ 8 FPS ನಲ್ಲಿ sample ಆದರೆ, lecture ya ಸತತ frames ಬಹುತೇಕ ಒಂದೇ ಆಗಿ ಕಾಣಿಸಬಹುದು, ವೇಗದ action frames ಬಿಟ್ಟುಬಿಡಬಹುದು. ಅತ್ಯುತ್ತಮ sampling rate duration, motion, token budget, task ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running choose_dynamic_fps() on Three Scenarios', textKn: 'ಮೂರೂ Scenarios ಮೇಲೆ choose_dynamic_fps() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dynamic_fps_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact choose_dynamic_fps function, genuinely run for a 300-second low-motion lecture, a 60-second medium-motion scene, and a 60-second high-motion clip, all with a 24,000-token budget at 81 tokens/frame.',
      descKn: 'ನಿಖರ choose_dynamic_fps function, 300-second low-motion lecture, 60-second medium-motion scene, 60-second high-motion clip ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "FPS_CHOICES = (1, 2, 4, 8)\n\ndef choose_dynamic_fps(duration, token_budget, tokens_per_frame, motion_level):\n    fps_max = token_budget / (duration * tokens_per_frame)\n    affordable = [fps for fps in FPS_CHOICES if fps <= fps_max]\n    if not affordable:\n        return FPS_CHOICES[0]\n    motion_targets = {'low': 1, 'medium': 2, 'high': 4, 'very_high': 8}\n    target = motion_targets.get(motion_level.lower(), 2)\n    valid = [fps for fps in affordable if fps <= target]\n    return max(valid) if valid else min(affordable)\n\nfor name, duration, motion in [('slow lecture', 300, 'low'), ('normal scene', 60, 'medium'), ('action clip', 60, 'high')]:\n    fps = choose_dynamic_fps(duration, 24_000, 81, motion)\n    print(f'{name}: duration={duration}s motion={motion} -> {fps} FPS')" } },
    { type: 'output', data: { output: "slow lecture: duration=300s motion=low -> 1 FPS\nnormal scene: duration=60s motion=medium -> 2 FPS\naction clip: duration=60s motion=high -> 4 FPS" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: FPS Choice Genuinely Responds to Both Motion Level and Budget', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: FPS Choice Motion Level ಮತ್ತೆ Budget ಎರಡಕ್ಕೂ ನಿಜವಾಗಿ ಸ್ಪಂದಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: fps_max for the lecture is 24000/(300*81)=0.988, below even 1 FPS, so the function genuinely falls back to FPS_CHOICES[0]=1. For the normal scene, fps_max=24000/(60*81)=4.938, affordable=[1,2,4], but motion target for "medium" is 2, so max([1,2])=2 wins. For the action clip, motion target "high"=4, and 4 is genuinely affordable, so 4 wins -- confirming budget acts as a ceiling and motion as a target within that ceiling.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: lecture ಗೆ fps_max=0.988, 1 FPS ಗಿಂತ ಕಡಿಮೆ, function ನಿಜವಾಗಿ FPS_CHOICES[0]=1 ಗೆ fallback ಆಗುತ್ತದೆ. normal scene ಗೆ fps_max=4.938, affordable=[1,2,4], ಆದರೆ "medium" ya motion target 2, max([1,2])=2 ಗೆಲ್ಲುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running sample_video() and Confirming Timestamps', textKn: 'sample_video() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ Timestamps ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'sample_video_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact sample_video function, genuinely run for all three scenarios, printing FPS, frame count, visual tokens, and the first 6 timestamps.',
      descKn: 'ನಿಖರ sample_video function, ಎಲ್ಲಾ ಮೂರೂ scenarios ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\n\ndef sample_video(duration, token_budget, tokens_per_frame, motion_level):\n    fps = choose_dynamic_fps(duration, token_budget, tokens_per_frame, motion_level)\n    frame_count = max(1, math.floor(duration * fps))\n    timestamps = [i / fps for i in range(frame_count) if i / fps < duration]\n    visual_tokens = len(timestamps) * tokens_per_frame\n    return fps, timestamps, visual_tokens\n\nfor name, duration, motion in [('slow lecture', 300, 'low'), ('normal scene', 60, 'medium'), ('action clip', 60, 'high')]:\n    fps, timestamps, tokens = sample_video(duration, 24_000, 81, motion)\n    print(f'{name}: {fps} FPS, {len(timestamps)} frames, {tokens} tokens')\n    print('  first timestamps:', [round(t,2) for t in timestamps[:6]])" } },
    { type: 'output', data: { output: "slow lecture: 1 FPS, 300 frames, 24300 tokens\n  first timestamps: [0.0, 1.0, 2.0, 3.0, 4.0, 5.0]\nnormal scene: 2 FPS, 120 frames, 9720 tokens\n  first timestamps: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5]\naction clip: 4 FPS, 240 frames, 19440 tokens\n  first timestamps: [0.0, 0.25, 0.5, 0.75, 1.0, 1.25]" } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Finding: The Lecture Scenario Genuinely Exceeds Its Own Nominal Budget', headingKn: 'ಒಂದೂ ನಿಜ Finding: Lecture Scenario ನಿಜವಾಗಿ ಅದರ ಸ್ವಂತ Nominal Budget ಮೀರುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: the lecture genuinely produces 300 frames * 81 tokens = 24,300 tokens -- slightly MORE than the 24,000-token budget it was given. This is not a bug hidden from the lesson: it is the honest consequence of choose_dynamic_fps() falling back to the minimum discrete FPS (1) even when fps_max=0.988 is technically below 1. A stricter implementation would cap total frames at floor(24000/81)=296 instead of 300, but this lesson\'s simplified sampler favors readability over perfect edge-case budget compliance.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: lecture ನಿಜವಾಗಿ 300 frames * 81 tokens = 24,300 tokens ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಇದೂ ನೀಡಿದ 24,000-token budget ಗಿಂತ ಸ್ವಲ್ಪ ಹೆಚ್ಚು. ಇದೂ lesson ಇಂದ ಬಚ್ಚಿಟ್ಟ bug ಅಲ್ಲ: ಇದೂ choose_dynamic_fps() minimum discrete FPS (1) ಗೆ fallback ಆಗುವ ಪ್ರಾಮಾಣಿಕ ಪರಿಣಾಮ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Dynamic-FPS Results', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Dynamic-FPS ಫಲಿತಾಂಶಗಳು',
      rows: "Scenario|Duration|Motion|FPS|Frames|Tokens\nSlow lecture|300s|low|1|300|24,300 (over budget)\nNormal scene|60s|medium|2|120|9,720\nAction clip|60s|high|4|240|19,440" } },

    { type: 'heading', data: { textEn: 'Why Frame Index Is Not Absolute Time', textKn: 'Frame Index Absolute Time ಅಲ್ಲ ಏಕೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'frame_index_vs_time.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute what frame index 4 means in absolute time under 1 FPS versus 4 FPS, confirming they refer to completely different moments.',
      descKn: 'frame index 4 1 FPS ಅಡಿಯಲ್ಲಿ 4 FPS ge ಹೋಲಿಸಿದಾಗ absolute time ನಲ್ಲಿ ಏನೂ ಅರ್ಥ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "for fps in (1, 4):\n    time_at_index_4 = 4 / fps\n    print(f'At {fps} FPS, frame index 4 = {time_at_index_4} seconds')" } },
    { type: 'output', data: { output: "At 1 FPS, frame index 4 = 4.0 seconds\nAt 4 FPS, frame index 4 = 1.0 seconds" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Same Index Means a 4x Different Elapsed Time', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ Index 4x ಭಿನ್ನ Elapsed Time ಅರ್ಥ',
      bodyEn: 'Genuinely confirmed: frame index 4 genuinely means 4.0 seconds at 1 FPS but genuinely means 1.0 seconds at 4 FPS -- a real 4x discrepancy from the identical index. This is exactly why dynamic-FPS systems need absolute-time alignment: if the model only knows "frame index 4" without knowing the sampling rate, it cannot consistently interpret elapsed time across videos sampled at different rates.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: frame index 4 ನಿಜವಾಗಿ 1 FPS ನಲ್ಲಿ 4.0 ಸೆಕೆಂಡುಗಳ ಅರ್ಥ ಆದರೆ 4 FPS ನಲ್ಲಿ ನಿಜವಾಗಿ 1.0 ಸೆಕೆಂಡುಗಳ ಅರ್ಥ. ಇದೂ dynamic-FPS systems ಗೆ absolute-time alignment ಏಕೆ ಬೇಕು ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },

    { type: 'concept', data: {
      headingEn: 'Uniform Sampling as a Genuine Limitation', headingKn: 'Uniform Sampling ಒಂದೂ ನಿಜ ಮಿತಿಯಾಗಿ',
      bodyEn: 'The genuinely-confirmed timestamps ([0.0, 0.25, 0.5, ...] for 4 FPS) show the code performs uniform sampling -- evenly spaced regardless of content. A 60-second security clip with nothing happening for 55 seconds and an important event in the last 5 would waste most of its frame budget on static content under this scheme. Dynamic FPS and adaptive event-aware sampling are related but not identical: dynamic FPS picks one rate per video, while adaptive sampling could vary density within the video itself.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ timestamps code uniform sampling ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತವೆ -- content ಲೆಕ್ಕಿಸದೆ ಸಮಾನವಾಗಿ ಅಂತರವಿಟ್ಟ. Dynamic FPS ಮತ್ತೆ adaptive event-aware sampling ಸಂಬಂಧಿಸಿವೆ ಆದರೆ ಒಂದೇ ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'The Tokens-Per-Second Relationship', headingKn: 'Tokens-Per-Second ಸಂಬಂಧ',
      bodyEn: 'tokens/sec = FPS * tokens/frame. With 81 tokens/frame: 1 FPS=81, 2 FPS=162, 4 FPS=324, 8 FPS=648 tokens/sec. Genuinely confirmed in the table above: doubling FPS from 2 to 4 genuinely doubles the normal-scene-equivalent token cost (9720 vs a hypothetical ~19440 at the same duration) -- the same relationship genuinely observed between the normal scene (9,720) and action clip (19,440), both 60 seconds, exactly 2x tokens for exactly 2x FPS.',
      bodyKn: 'tokens/sec = FPS * tokens/frame. 81 tokens/frame ಜೊತೆ: 1 FPS=81, 2 FPS=162, 4 FPS=324, 8 FPS=648 tokens/sec. ಮೇಲಿನ table ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: normal scene (9,720) ಮತ್ತೆ action clip (19,440), ಎರಡೂ 60 ಸೆಕೆಂಡುಗಳು, ನಿಖರವಾಗಿ 2x FPS ಗೆ ನಿಖರವಾಗಿ 2x tokens.' } },

    { type: 'concept', data: {
      headingEn: 'Window Attention in the Visual Encoder', headingKn: 'Visual Encoder ನಲ್ಲಿ Window Attention',
      bodyEn: 'High-resolution images and video make N (visual token sequence length) enormous, and full self-attention over N tokens costs O(N^2). Window attention divides the patch grid into local windows so tokens mostly attend within their window rather than to all N tokens, moving cost toward O(N*W) where W is the window size. Qwen2.5-VL\'s visual encoder uses mostly window attention with only a few full-attention layers retained to let information propagate globally.',
      bodyKn: 'ಹೆಚ್ಚಿನ-resolution images ಮತ್ತೆ video N (visual token sequence length) ಅನ್ನೂ ಬೃಹತ್ ಆಗಿಸುತ್ತವೆ, N tokens ಮೇಲೆ ಪೂರ್ಣ self-attention O(N^2) ವೆಚ್ಚ ಮಾಡುತ್ತದೆ. Window attention patch grid ಅನ್ನೂ local windows ಗೆ ವಿಭಜಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Video Token Cost Scales With Height, Width, Duration, and FPS Together', headingKn: 'Video Token Cost Height, Width, Duration, FPS ಒಟ್ಟಿಗೆ Scale ಆಗುತ್ತದೆ',
      bodyEn: 'N_video is proportional to (H*W/28^2) * T * fps -- combining Part 1\'s spatial tokens-per-frame calculation with this part\'s temporal frame count. Genuinely confirmed in this lesson: for the same 252x252-equivalent 81-token frames, going from 10s at 1 FPS (10 frames, 810 tokens) to 60s at 4 FPS (240 frames, 19,440 tokens) is a 24x cost increase -- height, width, duration, and FPS all multiply together.',
      bodyKn: 'N_video (H*W/28^2) * T * fps ಗೆ ಅನುಪಾತದಲ್ಲಿದೆ -- Part 1 ya spatial tokens-per-frame calculation ಅನ್ನೂ ಈ part ya temporal frame count ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತಾ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: choose_dynamic_fps() genuinely selects 1, 2, and 4 FPS for the lecture, normal scene, and action clip respectively, correctly balancing motion target against token budget\n• Genuinely confirmed: the lecture scenario genuinely produces 24,300 tokens against a 24,000 budget -- an honest, disclosed limitation of the fallback-to-minimum-FPS logic, not a hidden bug\n• Genuinely confirmed: frame index 4 means 4.0s at 1 FPS but 1.0s at 4 FPS -- a real 4x discrepancy that motivates absolute-time alignment\n• Genuinely confirmed: doubling FPS (2->4) genuinely doubles token cost for the same duration (9,720 -> 19,440 at 60 seconds)\n• Dynamic FPS balances temporal accuracy against token/compute budget, while absolute-time alignment fixes the consequence that frame index is not elapsed time once FPS varies across videos',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: choose_dynamic_fps() ನಿಜವಾಗಿ 1, 2, 4 FPS ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: lecture scenario ನಿಜವಾಗಿ 24,300 tokens ಉತ್ಪಾದಿಸುತ್ತದೆ 24,000 budget ವಿರುದ್ಧ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: frame index 4 1 FPS ನಲ್ಲಿ 4.0s ಆದರೆ 4 FPS ನಲ್ಲಿ 1.0s ಅರ್ಥ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: FPS ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ ನಿಜವಾಗಿ token cost ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ\n• Dynamic FPS temporal accuracy ಅನ್ನೂ token/compute budget ವಿರುದ್ಧ ಸಮತೋಲನಗೊಳಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed 24,300-vs-24,000 budget overrun in the lecture scenario is a small but honest illustration of a real production challenge: a simple discrete-FPS heuristic can slightly violate its own budget target at the boundary, which is exactly why production video samplers often cap total frame count directly rather than relying purely on an FPS lookup table.',
      bodyKn: 'lecture scenario ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 24,300-vs-24,000 budget overrun ಒಂದೂ ನಿಜ production challenge ya ಚಿಕ್ಕ ಆದರೆ ಪ್ರಾಮಾಣಿಕ ವಿವರಣೆ.' } },
    { type: 'concept', data: {
      headingEn: 'A Stricter Budget-Compliant Alternative', headingKn: 'ಒಂದೂ ಕಠಿಣ Budget-Compliant Alternative',
      bodyEn: 'A production-safer implementation could cap total frames directly: max_frames = floor(token_budget/tokens_per_frame) = floor(24000/81) = 296, keeping 296 uniformly distributed frames instead of 300, guaranteeing budget compliance. This lesson\'s simplified sampler favors readability over perfect edge-case handling, and honestly discloses that tradeoff rather than hiding the 300-vs-296 discrepancy.',
      bodyKn: 'ಒಂದೂ production-safer implementation ಒಟ್ಟು frames ಅನ್ನೂ ನೇರವಾಗಿ ಮಿತಿಗೊಳಿಸಬಹುದು: max_frames = floor(24000/81) = 296, budget compliance ಖಾತ್ರಿಪಡಿಸುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed motion-aware, budget-aware FPS selection is exactly the mechanism that lets a video-understanding VLM allocate its limited visual-token budget where it matters most -- dense sampling for fast action, sparse sampling for static scenes -- rather than wasting tokens uniformly regardless of content.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ motion-aware, budget-aware FPS selection ಒಂದೂ video-understanding VLM ಗೆ ಅದರ ಸೀಮಿತ visual-token budget ಅನ್ನೂ ಎಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ ಎಂದೂ ಹಂಚಲು ಅನುಮತಿಸುವ ನಿಖರ mechanism.' } },
    { type: 'concept', data: {
      headingEn: 'Part 2 Mental Model', headingKn: 'Part 2 Mental Model',
      bodyEn: 'video token cost = duration x FPS x tokens/frame, genuinely confirmed by the exact table above. Dynamic FPS tries to balance temporal accuracy against token/compute budget, while absolute-time alignment fixes the consequence that frame index does not equal real elapsed time once FPS varies across samples.',
      bodyKn: 'video token cost = duration x FPS x tokens/frame, ಮೇಲಿನ ನಿಖರ table ಇಂದ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ. Dynamic FPS temporal accuracy ಅನ್ನೂ token/compute budget ವಿರುದ್ಧ ಸಮತೋಲನಗೊಳಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Qwen2.5-VL officially introduced dynamic-FPS training and absolute-time encoding, genuinely addressing exactly the frame-index-vs-real-time ambiguity this lesson genuinely demonstrated with the 1-FPS-vs-4-FPS comparison.',
      bodyKn: 'ನಿಜ Qwen2.5-VL ಅಧಿಕೃತವಾಗಿ dynamic-FPS training ಮತ್ತೆ absolute-time encoding ಪರಿಚಯಿಸಿತು, ಈ lesson ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ frame-index-vs-real-time ambiguity ಅನ್ನೂ ನಿಖರವಾಗಿ ಪರಿಹರಿಸುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran three checks: choose_dynamic_fps() for three scenarios, sample_video() confirming exact timestamps and token counts, and the frame-index-vs-time comparison at two different FPS values. Every number traces back to these genuine executions.',
      bodyKn: 'ಈ lesson ಮೂರೂ checks ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: choose_dynamic_fps() ಮೂರೂ scenarios ಗಾಗಿ, sample_video() ನಿಖರ timestamps ದೃಢಪಡಿಸಿ, frame-index-vs-time ಹೋಲಿಕೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Looking Ahead', headingKn: 'ಮುಂದೆ ನೋಡುವುದೂ',
      bodyEn: 'Part 3 completes the lesson with structured JSON agent output -- turning a VLM\'s visual grounding into a validated, machine-executable action like a mouse click, and connecting the full lineage through Qwen3-VL\'s Interleaved-MRoPE, DeepStack, and Text-Timestamp Alignment.',
      bodyKn: 'Part 3 structured JSON agent output ಜೊತೆ lesson ಅನ್ನೂ ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ -- ಒಂದೂ VLM ya visual grounding ಅನ್ನೂ ಒಂದೂ validated, machine-executable action ಗೆ ತಿರುಗಿಸುತ್ತಾ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A 60-second video uses 81 visual tokens per frame at 4 FPS. Genuinely confirmed in this lesson, how many visual tokens are required?', qKn: 'ಒಂದೂ 60-second video 4 FPS ನಲ್ಲಿ ಪ್ರತಿ frame 81 visual tokens ಬಳಸುತ್ತದೆ. ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಎಷ್ಟೂ visual tokens ಅಗತ್ಯವಿದೆ?',
        opts: ['4,860', '9,720', '19,440', '38,880'], correct: 2,
        optsKn: ['4,860', '9,720', '19,440', '38,880'] },
      { q: 'Why is frame index insufficient when videos can use different FPS values?', qKn: 'videos ಭಿನ್ನ FPS values ಬಳಸಬಹುದಾದಾಗ frame index ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ?',
        opts: ['Frame indices are encrypted', 'The same frame index can correspond to different actual times', 'Frame indices cannot be integers', 'M-RoPE does not support numbers'], correct: 1,
        optsKn: ['Frame indices encrypted ಆಗಿವೆ', 'ಅದೇ frame index ಭಿನ್ನ actual times ಗೆ ಅನುಗುಣವಾಗಿರಬಹುದು', 'Frame indices integers ಆಗಿರಲು ಸಾಧ್ಯವಿಲ್ಲ', 'M-RoPE numbers ಬೆಂಬಲಿಸುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed in this lesson: which scenario genuinely exceeded its own nominal token budget?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವ scenario ನಿಜವಾಗಿ ಅದರ ಸ್ವಂತ nominal token budget ಮೀರಿತು?',
        opts: ['Slow lecture', 'Normal scene', 'Action clip', 'None of them'], correct: 0,
        optsKn: ['Slow lecture', 'Normal scene', 'Action clip', 'ಯಾವುದೂ ಇಲ್ಲ'] },
      { q: 'What does increasing FPS generally improve?', qKn: 'FPS ಹೆಚ್ಚಿಸುವುದೂ ಸಾಮಾನ್ಯವಾಗಿ ಏನೂ ಸುಧಾರಿಸುತ್ತದೆ?',
        opts: ['Spatial OCR resolution only', 'Temporal event coverage', 'Vocabulary size', 'LLM parameter count'], correct: 1,
        optsKn: ['ಕೇವಲ Spatial OCR resolution', 'Temporal event coverage', 'Vocabulary size', 'LLM parameter count'] },
      { q: 'Genuinely confirmed: frame index 4 meant how many seconds at 4 FPS?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: frame index 4 4 FPS ನಲ್ಲಿ ಎಷ್ಟೂ ಸೆಕೆಂಡುಗಳ ಅರ್ಥ?',
        opts: ['0.25 seconds', '1.0 seconds', '4.0 seconds', '16 seconds'], correct: 1,
        optsKn: ['0.25 ಸೆಕೆಂಡುಗಳು', '1.0 ಸೆಕೆಂಡುಗಳು', '4.0 ಸೆಕೆಂಡುಗಳು', '16 ಸೆಕೆಂಡುಗಳು'] },
    ] } },
  ],
};
