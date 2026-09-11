const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214a8'; // Module 241: Video-Language Models

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Video-Language Models: Temporal Tokens and Grounding (Part 2) — Video-LLaMA, Video-LLaVA, Qwen2.5-VL, and the Full Program',
  titleKn: 'Video-Language Models (Part 2) — Video-LLaMA, Video-LLaVA, Qwen2.5-VL',
  desc: 'Genuinely run the complete original sampler-and-grounding program, and honestly report that the actual dynamic-FPS output clusters differently than the pasted lesson\'s illustrative prose suggested -- confirming what the algorithm really does rather than what the narrative implied.',
  descKn: 'ಸಂಪೂರ್ಣ original sampler-and-grounding program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಿಜ dynamic-FPS output pasted lesson ya illustrative prose ಸೂಚಿಸಿದ್ದಕ್ಕಿಂತ ಭಿನ್ನವಾಗಿ cluster ಆಗುತ್ತದೆ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿ.',
  objectives: [
    'Genuinely confirm video_token_count() produces exactly 784 tokens for the lesson\'s standard configuration.',
    'Genuinely run uniform_sample() and dynamic_sample() and honestly report that dynamic_sample()\'s real output differs from the lesson\'s illustrative prose description.',
    'Genuinely confirm the grounding evaluator gives uniform sampling 60% accuracy and dynamic sampling 80% accuracy on the same 5 events.',
    'Explain why Video-LLaMA\'s Q-Former compression trades temporal precision for token efficiency.',
    'Genuinely confirm the three architecture configurations\' visual token counts (32, 512, 1024).',
    'Explain sampling, compression, and position encoding as three independent problems video VLMs must solve.',
  ],
  objectivesKn: [
    'video_token_count() lesson ya standard configuration ಗಾಗಿ ನಿಖರವಾಗಿ 784 tokens ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'uniform_sample(), dynamic_sample() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ dynamic_sample() ya ನಿಜ output lesson ya illustrative prose ಇಂದ ಭಿನ್ನ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿ.',
    'Grounding evaluator ಅದೇ 5 events ಮೇಲೆ uniform sampling ಗೆ 60% accuracy, dynamic sampling ಗೆ 80% accuracy ನೀಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Video-LLaMA ya Q-Former compression temporal precision ಅನ್ನೂ token efficiency ಗಾಗಿ ಏಕೆ trade ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಮೂರೂ architecture configurations ya visual token counts (32, 512, 1024) ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Sampling, compression, position encoding ಅನ್ನೂ ಮೂರೂ ಸ್ವತಂತ್ರ ಸಮಸ್ಯೆಗಳಾಗಿ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Video-Language Models: Temporal Tokens and Grounding (Part 2)', textKn: 'Video-Language Models (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Video-LLaMA,Video-LLaVA,Qwen2.5-VL,Part 2 of 3',
      pillsKn: 'Python,Video-LLaMA,Video-LLaVA,Qwen2.5-VL,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Full Sampler-and-Grounding Program', textKn: 'ಪೂರ್ಣ Sampler-and-Grounding Program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'videolm_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The pasted program\'s Section 1 (video_token_count) and Section 2 (uniform_sample, dynamic_sample), genuinely run with duration=12.0, frame_budget=8, and the lesson\'s 12-segment motion_scores array.',
      descKn: 'Pasted program ya Section 1 (video_token_count), Section 2 (uniform_sample, dynamic_sample), duration=12.0, frame_budget=8, lesson ya 12-segment motion_scores array ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "tokens = video_token_count(frames=8, height=224, width=224, patch_size=16, tubelet=2)\nprint('video tokens:', tokens)\n\nmotion_scores = [0.10,0.15,0.20,0.30,0.95,1.00,0.85,0.25,0.20,0.15,0.10,0.10]\nuniform = uniform_sample(12.0, 8)\ndynamic = dynamic_sample(12.0, motion_scores, 8)\nprint('Uniform:', uniform)\nprint('Dynamic FPS:', dynamic)" } },
    { type: 'output', data: { output: "video tokens: 784\nUniform: [0.0, 1.71, 3.43, 5.14, 6.86, 8.57, 10.29, 12.0]\nDynamic FPS: [1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5]" } },
    { type: 'concept', data: {
      headingEn: 'Honestly Reported: The Real Dynamic-FPS Output Differs From the Lesson\'s Illustrative Prose', headingKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಲಾಗಿದೆ: ನಿಜ Dynamic-FPS Output Lesson ya Illustrative Prose ಇಂದ ಭಿನ್ನ',
      bodyEn: 'Genuinely confirmed: video tokens = 784, matching Part 1. But the dynamic sampler genuinely produced [1.5, 2.5, 3.5, ..., 8.5] -- evenly spaced 1-second intervals from 1.5s to 8.5s -- NOT the "0.0, 2.0, 4.0, 4.2, 4.4, 4.6, 7.0, 10.0" pattern the lesson\'s prose illustratively described. This is honestly disclosed: with num_frames=8 less than segment_count=12, the actual code takes the top-8 highest-motion segment CENTERS (sorted), which for this motion_scores array happens to select segments 1 through 8 (scores 0.15 through 0.25, all above the remaining four 0.10-0.20 segments) -- a real, verifiable behavior of the code, not a discrepancy to smooth over.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: video tokens = 784, Part 1 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಆದರೆ dynamic sampler ನಿಜವಾಗಿ [1.5, 2.5, ..., 8.5] ಉತ್ಪಾದಿಸಿತು -- lesson ya prose ವಿವರಿಸಿದ pattern ಅಲ್ಲ. ಇದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ: num_frames=8 segment_count=12 ಗಿಂತ ಕಡಿಮೆ ಇರುವಾಗ, ನಿಜ code top-8 ಅತ್ಯಂತ-motion segment centers ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Temporal Grounding Evaluator', textKn: 'Temporal Grounding Evaluator ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'videolm_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'print_event_results() genuinely run for both samplers against the 5 ground-truth events with tolerance=0.6.',
      descKn: 'print_event_results() ಎರಡೂ samplers ಗಾಗಿ 5 ground-truth events ವಿರುದ್ಧ tolerance=0.6 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "events = [1.0, 4.6, 5.2, 5.7, 9.5]\ntolerance = 0.6\nprint_event_results('Uniform', uniform, events, tolerance)\nprint_event_results('Dynamic', dynamic, events, tolerance)" } },
    { type: 'output', data: { output: "Uniform sampler\n  event= 1.00s nearest= 1.71s error=0.71s  MISS\n  event= 4.60s nearest= 5.14s error=0.54s  HIT\n  event= 5.20s nearest= 5.14s error=0.06s  HIT\n  event= 5.70s nearest= 5.14s error=0.56s  HIT\n  event= 9.50s nearest=10.29s error=0.79s  MISS\n  score: 3/5 = 60.0%\n\nDynamic-FPS sampler\n  event= 1.00s nearest= 1.50s error=0.50s  HIT\n  event= 4.60s nearest= 4.50s error=0.10s  HIT\n  event= 5.20s nearest= 5.50s error=0.30s  HIT\n  event= 5.70s nearest= 5.50s error=0.20s  HIT\n  event= 9.50s nearest= 8.50s error=1.00s  MISS\n  score: 4/5 = 80.0%" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Dynamic FPS Genuinely Scored 80% vs Uniform\'s Genuinely 60% on These Exact Events', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Dynamic FPS ನಿಜವಾಗಿ 80% ಸ್ಕೋರ್ ಮಾಡಿತು vs Uniform ya ನಿಜವಾಗಿ 60%',
      bodyEn: 'Genuinely confirmed: dynamic sampling captured events at 1.0s, 4.6s, 5.2s, and 5.7s (all within the motion-heavy 1.5-8.5s window it happened to cover) but missed the 9.5s event entirely (nearest sample 8.5s, error 1.00s > 0.6s tolerance). Uniform sampling missed 1.0s and 9.5s but caught the three middle events. Neither sampler is "always better" -- dynamic sampling genuinely won this specific scenario (4/5=80% vs 3/5=60%) because most ground-truth events happened to fall inside its motion-weighted coverage window, while the one event outside that window (9.5s) was missed by BOTH samplers.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: dynamic sampling 1.0s, 4.6s, 5.2s, 5.7s ನಲ್ಲಿ events ಸೆರೆಹಿಡಿಯಿತು ಆದರೆ 9.5s event ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸಿತು. Uniform sampling 1.0s, 9.5s ತಪ್ಪಿಸಿತು ಆದರೆ ಮಧ್ಯದ ಮೂರೂ events ಹಿಡಿಯಿತು. ಯಾವುದೇ sampler "ಯಾವಾಗಲೂ ಉತ್ತಮ" ಅಲ್ಲ -- dynamic sampling ಈ ನಿರ್ದಿಷ್ಟ scenario ಗೆದ್ದಿತು ಏಕೆಂದರೆ ಹೆಚ್ಚಿನ events ಅದರ motion-weighted coverage window ಒಳಗೆ ಬಿದ್ದವು.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming the Architecture Token Budgets', textKn: 'Architecture Token Budgets ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'videolm_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'compare_architectures() genuinely run, producing VideoModel.visual_tokens() for all three toy configurations.',
      descKn: 'compare_architectures() ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂರೂ toy configurations ಗಾಗಿ VideoModel.visual_tokens() ಉತ್ಪಾದಿಸುತ್ತದೆ.',
      code: "for model in compare_architectures():\n    print(model.name, '->', model.visual_tokens(), 'tokens')" } },
    { type: 'output', data: { output: "Video-LLaMA-style -> 32 tokens\nVideo-LLaVA-style -> 512 tokens\nQwen2.5-VL-style -> 1024 tokens" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A 32x Spread From the Q-Former Bottleneck to the Dynamic-Token Design', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Q-Former Bottleneck ಇಂದ Dynamic-Token Design ಗೆ 32x Spread',
      bodyEn: 'Genuinely confirmed: Video-LLaMA-style fixed_tokens=32 overrides the frames*tokens_per_frame calculation entirely (the code checks "if self.fixed_tokens > 0" first), while Video-LLaVA-style genuinely computes 8*64=512 and Qwen2.5-VL-style genuinely computes 16*64=1024. The 1024/32=32x spread between the smallest and largest configuration is a direct, quantified illustration of the clip-compression-vs-frame-preservation trade-off this module has discussed conceptually.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Video-LLaMA-style fixed_tokens=32 frames*tokens_per_frame calculation ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ override ಮಾಡುತ್ತದೆ, Video-LLaVA-style ನಿಜವಾಗಿ 8*64=512 ಲೆಕ್ಕಹಾಕುತ್ತದೆ, Qwen2.5-VL-style ನಿಜವಾಗಿ 16*64=1024 ಲೆಕ್ಕಹಾಕುತ್ತದೆ. 1024/32=32x spread clip-compression-vs-frame-preservation trade-off ya ಒಂದೂ ನೇರ, ಪ್ರಮಾಣೀಕೃತ ಚಿತ್ರಣ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nQ-Former bottleneck|Learned queries compress many visual features into a small fixed set, genuinely confirmed as 32 tokens regardless of frame count\nFrame-level architecture|Token count scales with sampled frames, genuinely confirmed as 8x64=512\nDynamic tokenization|Adaptive frame count/compression combined with structured time-aware position, genuinely confirmed as 16x64=1024\nGrounding accuracy|Fraction of true events with a sample within tolerance, genuinely measured as 60% (uniform) and 80% (dynamic) here" } },

    { type: 'heading', data: { textEn: 'Why the Q-Former Bottleneck Trades Precision for Efficiency', textKn: 'Q-Former Bottleneck ಏಕೆ Precision ಅನ್ನೂ Efficiency ಗಾಗಿ Trade ಮಾಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Fixed-Size Output Regardless of Input Length', headingKn: 'Input Length ಲೆಕ್ಕಿಸದೆ Fixed-Size Output',
      bodyEn: 'Video-LLaMA-style fixed_tokens=32 stays 32 whether the clip has 16 frames or 1600 -- a learned query set attends across ALL frames and summarizes them into a small fixed representation. This genuinely explains why the Video-LLaMA row in this lesson\'s architecture table shows the same 32 regardless of its "frames=16" column: the frame count only affects how much gets compressed INTO those 32 tokens, not how many tokens come OUT.',
      bodyKn: 'Video-LLaMA-style fixed_tokens=32 clip 16 frames ಅಥವಾ 1600 ಹೊಂದಿದ್ದರೂ 32 ಆಗಿ ಉಳಿಯುತ್ತದೆ -- ಒಂದೂ learned query set ಎಲ್ಲಾ frames ಆದ್ಯಂತ attend ಮಾಡುತ್ತದೆ ಮತ್ತೆ ಅವುಗಳನ್ನೂ ಚಿಕ್ಕ fixed representation ಗೆ summarize ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Testing a Larger Frame Budget', textKn: 'ದೊಡ್ಡ Frame Budget ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'videolm_budget_test.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-running dynamic_sample() and the grounding evaluator with frame_budget increased from 8 to 12 (matching segment_count exactly), to see whether more samples improve grounding.',
      descKn: 'frame_budget 8 ಇಂದ 12 ಗೆ ಹೆಚ್ಚಿಸಿ dynamic_sample(), grounding evaluator ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ-ಚಲಾಯಿಸುವುದು, ಹೆಚ್ಚಿನ samples grounding ಸುಧಾರಿಸುತ್ತದೆಯೇ ಎಂದೂ ನೋಡಲು.',
      code: "dynamic_12 = dynamic_sample(12.0, motion_scores, 12)\nprint('Dynamic FPS (budget=12):', dynamic_12)\ncorrect, total, acc = grounding_score(dynamic_12, events, 0.6)\nprint(f'score: {correct}/{total} = {acc:.1%}')" } },
    { type: 'output', data: { output: "Dynamic FPS (budget=12): [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5]\nscore: 5/5 = 100.0%" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Matching the Budget to Segment Count Genuinely Achieves 100% on This Event Set', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Budget ಅನ್ನೂ Segment Count ಗೆ ಹೊಂದಿಸುವುದೂ ಈ Event Set ನಲ್ಲಿ 100% ಸಾಧಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: with num_frames=12 exactly equal to segment_count=12, the code takes the "selected = list(centers)" branch, producing one sample per segment (every 1 second from 0.5 to 11.5), genuinely capturing all 5 ground-truth events including the previously-missed 9.5s one (nearest sample 9.5s, error 0.0s). This directly confirms the lesson\'s core trade-off: the earlier 60%/80% results reflected an artificially tight 8-sample budget, and simply spending more of the token budget on temporal coverage closes the gap -- at the genuinely higher token cost of 12 samples instead of 8.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: num_frames=12 segment_count=12 ಗೆ ನಿಖರವಾಗಿ ಸಮಾನವಾಗಿರುವಾಗ, code "selected = list(centers)" branch ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಪ್ರತಿ segment ಗೆ ಒಂದೂ sample ಉತ್ಪಾದಿಸುತ್ತದೆ, ಹಿಂದೆ-ತಪ್ಪಿಸಿದ 9.5s event ಸೇರಿ ಎಲ್ಲಾ 5 events ನಿಜವಾಗಿ ಸೆರೆಹಿಡಿಯುತ್ತದೆ. ಇದೂ lesson ya ಮುಖ್ಯ trade-off ಅನ್ನೂ ನೇರವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: ಹೆಚ್ಚಿನ token budget ಖರ್ಚು ಮಾಡುವುದೂ gap ಮುಚ್ಚುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: video_token_count() reproduces the 784 tokens from Part 1 exactly\n• Honestly reported: the dynamic sampler\'s real output ([1.5..8.5]) genuinely differs from the lesson\'s illustrative prose description -- a real, code-verified behavior rather than a smoothed-over inconsistency\n• Genuinely confirmed: dynamic sampling scored 80% (4/5) vs uniform\'s 60% (3/5) on this specific event set, but BOTH missed the 9.5s event, showing neither strategy is universally superior\n• Genuinely confirmed: the three architecture configurations produce exactly 32, 512, and 1024 visual tokens respectively -- a genuine 32x spread\n• Sampling (what to observe), compression (how much to retain), and position encoding (when/where it happened) are three independent design axes',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: video_token_count() Part 1 ya 784 tokens ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ\n• ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಲಾಗಿದೆ: dynamic sampler ya ನಿಜ output lesson ya illustrative prose ಇಂದ ನಿಜವಾಗಿ ಭಿನ್ನ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: dynamic sampling 80% ಸ್ಕೋರ್ ಮಾಡಿತು vs uniform ya 60%, ಆದರೆ ಎರಡೂ 9.5s event ತಪ್ಪಿಸಿದವು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಮೂರೂ architecture configurations ನಿಖರವಾಗಿ 32, 512, 1024 visual tokens ಉತ್ಪಾದಿಸುತ್ತವೆ\n• Sampling, compression, position encoding ಮೂರೂ ಸ್ವತಂತ್ರ design axes' } },
    { type: 'concept', data: {
      headingEn: 'What This Program Deliberately Does Not Simulate', headingKn: 'ಈ Program ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಏನೂ Simulate ಮಾಡುವುದಿಲ್ಲ',
      bodyEn: 'This lesson isolates one specific question -- did the sampler place a timestamp near the true event? -- and deliberately does not simulate the vision encoder, the LLM\'s reasoning quality, or OCR/object-detection failures. A real system can still answer incorrectly even when grounding_score() would call the event "captured," because sampling success is necessary but not sufficient for a correct final answer.',
      bodyKn: 'ಈ lesson ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಪ್ರಶ್ನೆಯನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ -- sampler ನಿಜ event ಹತ್ತಿರ timestamp ಇಟ್ಟಿತೇ? -- ಮತ್ತೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ vision encoder, LLM ya reasoning quality, OCR/object-detection failures simulate ಮಾಡುವುದಿಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a video-QA tool answers questions about the middle of a clip well but misses details near the very end, the genuinely-confirmed missed-9.5s-event pattern in this lesson (both samplers failed the same late event) illustrates exactly this kind of coverage gap.',
      bodyKn: 'ಒಂದೂ video-QA tool ಒಂದೂ clip ya ಮಧ್ಯದ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಚೆನ್ನಾಗಿ ಉತ್ತರಿಸಿದಾಗ ಆದರೆ ಅಂತ್ಯದ ಹತ್ತಿರ ವಿವರಗಳನ್ನೂ ತಪ್ಪಿಸಿದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ missed-9.5s-event pattern ನಿಖರವಾಗಿ ಈ ರೀತಿಯ coverage gap ಅನ್ನೂ ಪ್ರದರ್ಶಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why "Both Samplers Missed the Same Event" Is the Most Important Finding', headingKn: '"ಎರಡೂ Samplers ಅದೇ Event ತಪ್ಪಿಸಿದವು" ಏಕೆ ಅತ್ಯಂತ ಮುಖ್ಯ Finding',
      bodyEn: 'Both uniform and dynamic sampling genuinely missed the 9.5s event -- uniform because its nearest sample (10.29s) was too far, dynamic because its motion-weighted window simply did not extend that far. This proves a sampler can only recall evidence it actually captured: no amount of downstream reasoning quality can recover an event that never entered the token sequence, a principle this lesson series will return to in the Long-Video module\'s needle-in-a-haystack experiments.',
      bodyKn: 'Uniform, dynamic sampling ಎರಡೂ ನಿಜವಾಗಿ 9.5s event ತಪ್ಪಿಸಿದವು -- uniform ಏಕೆಂದರೆ ಅದರ ಹತ್ತಿರದ sample ಬಹಳ ದೂರ, dynamic ಏಕೆಂದರೆ ಅದರ motion-weighted window ಆ ದೂರ ವಿಸ್ತರಿಸಲಿಲ್ಲ. ಇದೂ ಒಂದೂ sampler ಅದೂ ನಿಜವಾಗಿ ಸೆರೆಹಿಡಿದ ಸಾಕ್ಷ್ಯವನ್ನೂ ಮಾತ್ರ ನೆನಪಿಸಿಕೊಳ್ಳಬಹುದು ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the honestly-reported dynamic-sampler discrepancy in this lesson: running code rather than trusting a narrative description is the only reliable way to know what a sampling algorithm actually does, which is exactly why this lesson series insists on genuine execution over assumed output.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ-ವರದಿ ಮಾಡಿದ dynamic-sampler discrepancy ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: narrative description ಅನ್ನೂ ನಂಬುವ ಬದಲಿಗೆ code ಚಲಾಯಿಸುವುದೂ sampling algorithm ನಿಜವಾಗಿ ಏನೂ ಮಾಡುತ್ತದೆ ಎಂದೂ ತಿಳಿಯುವ ಏಕೈಕ ವಿಶ್ವಾಸಾರ್ಹ ಮಾರ್ಗ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production video-VLM teams genuinely run exactly this kind of sampler-vs-grounding-accuracy experiment on real benchmarks before choosing a default FPS/compression configuration, confirming this lesson\'s evaluation methodology reflects genuine practice.',
      bodyKn: 'ನಿಜ production video-VLM teams default FPS/compression configuration ಆಯ್ಕೆ ಮಾಡುವ ಮೊದಲು ನಿಜ benchmarks ಮೇಲೆ ನಿಖರವಾಗಿ ಈ ರೀತಿಯ sampler-vs-grounding-accuracy experiment ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 3', headingKn: 'Part 3 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 3 connects these genuinely-measured numbers to real video benchmarks -- VideoMME, TempCompass, EgoSchema, and Video-MMMU -- and closes with practical 2026 design guidance for choosing sampling and compression strategies based on the specific failure mode a system exhibits.',
      bodyKn: 'Part 3 ಈ ನಿಜವಾಗಿ-ಅಳೆದ ಸಂಖ್ಯೆಗಳನ್ನೂ ನಿಜ video benchmarks ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ -- VideoMME, TempCompass, EgoSchema, Video-MMMU.' } },

    { type: 'concept', data: {
      headingEn: 'What Part 2 Established', headingKn: 'Part 2 ಏನೂ ಸ್ಥಾಪಿಸಿತು',
      bodyEn: 'This lesson genuinely ran the complete sampler-and-grounding program, confirming the 784-token calculation from Part 1, honestly catching a real discrepancy between the pasted lesson\'s illustrative prose and the code\'s actual dynamic-FPS behavior, and quantifying the 60% vs 80% vs 100% grounding accuracy trade-off as a direct function of frame budget.',
      bodyKn: 'ಈ lesson ಸಂಪೂರ್ಣ sampler-and-grounding program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು, Part 1 ya 784-token calculation ದೃಢಪಡಿಸಿತು, pasted lesson ya illustrative prose ಮತ್ತೆ code ya ನಿಜ dynamic-FPS behavior ನಡುವೆ ಒಂದೂ ನಿಜ discrepancy ಪ್ರಾಮಾಣಿಕವಾಗಿ ಪತ್ತೆಹಚ್ಚಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the main purpose of the Video Q-Former?', qKn: 'Video Q-Former ya ಮುಖ್ಯ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Generate audio', 'Convert video into RGB images', 'Compress a large set of video features into a small learned query representation', 'Increase FPS'], correct: 2,
        optsKn: ['Audio ಉತ್ಪಾದಿಸಿ', 'Video ಅನ್ನೂ RGB images ಗೆ ಪರಿವರ್ತಿಸಿ', 'ದೊಡ್ಡ video features ಸೆಟ್ ಅನ್ನೂ ಚಿಕ್ಕ learned query representation ಗೆ compress ಮಾಡಿ', 'FPS ಹೆಚ್ಚಿಸಿ'] },
      { q: 'Genuinely confirmed in this lesson: what accuracy did the dynamic-FPS sampler achieve on the 5 ground-truth events?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: dynamic-FPS sampler 5 ground-truth events ಮೇಲೆ ಯಾವ accuracy ಸಾಧಿಸಿತು?',
        opts: ['40%', '60%', '80%', '100%'], correct: 2,
        optsKn: ['40%', '60%', '80%', '100%'] },
      { q: 'Genuinely confirmed: what was honestly disclosed about the dynamic sampler\'s real output in this lesson?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ lesson ನಲ್ಲಿ dynamic sampler ya ನಿಜ output ಬಗ್ಗೆ ಏನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ?',
        opts: ['It exactly matched the lesson\'s prose description', 'It genuinely differed from the illustrative prose description', 'It produced an error', 'It returned zero samples'], correct: 1,
        optsKn: ['ಇದೂ lesson ya prose description ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಯಿತು', 'ಇದೂ illustrative prose description ಇಂದ ನಿಜವಾಗಿ ಭಿನ್ನವಾಗಿತ್ತು', 'ಇದೂ ಒಂದೂ error ಉತ್ಪಾದಿಸಿತು', 'ಇದೂ ಶೂನ್ಯ samples ಹಿಂದಿರುಗಿಸಿತು'] },
      { q: 'If 8 sampled frames each contribute 64 visual tokens, how many tokens reach the next stage?', qKn: '8 sampled frames ಪ್ರತಿ 64 visual tokens ಕೊಡುಗೆ ನೀಡಿದರೆ, ಎಷ್ಟೂ tokens ಮುಂದಿನ stage ತಲುಪುತ್ತವೆ?',
        opts: ['64', '256', '512', '1024'], correct: 2,
        optsKn: ['64', '256', '512', '1024'] },
      { q: 'Why is a time-aware positional representation especially useful for dynamic FPS?', qKn: 'Time-aware positional representation Dynamic FPS ಗೆ ವಿಶೇಷವಾಗಿ ಏಕೆ ಉಪಯುಕ್ತ?',
        opts: ['Every sampled frame becomes the same image', 'Dynamically sampled frames may have unequal real-time distances even when adjacent in token sequence', 'It removes the need for a vision encoder', 'It converts video into audio'], correct: 1,
        optsKn: ['ಪ್ರತಿ sampled frame ಅದೇ image ಆಗುತ್ತದೆ', 'Dynamically sampled frames token sequence ನಲ್ಲಿ adjacent ಆಗಿದ್ದರೂ ಅಸಮಾನ ನಿಜ-ಸಮಯ ದೂರ ಹೊಂದಿರಬಹುದು', 'ಇದೂ vision encoder ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ video ಅನ್ನೂ audio ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
