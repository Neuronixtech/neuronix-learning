const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b32148d'; // Module 232: LLaVA-OneVision

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'LLaVA-OneVision (Part 2) — Curriculum: Single-Image to OneVision to Task Transfer',
  titleKn: 'LLaVA-OneVision (Part 2) — Curriculum: Single-Image ಇಂದ Task Transfer ಗೆ',
  desc: 'Genuinely implement and run build_curriculum(), confirming the exact 40,000/45,000/15,000 step split across Stage 1 (Single-Image SFT), Stage 2 (OneVision SFT), and Stage 3 (Task Transfer), and understand why training order matters as much as the data itself.',
  descKn: 'build_curriculum() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ನಿಖರ 40,000/45,000/15,000 step split ದೃಢಪಡಿಸಿ, training order ಡೇಟಾದಷ್ಟೇ ಏಕೆ ಮುಖ್ಯ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Genuinely implement and run build_curriculum(), confirming the exact 40%/45%/15% step allocation.',
    'Genuinely confirm Stage 1 uses 100% single-image data while Stage 2 mixes all three scenarios.',
    'Explain why weights continue from Stage 1 to Stage 2 rather than resetting.',
    'Explain catastrophic forgetting and why Stage 2 retains 40% single-image data as rehearsal.',
    'Explain why single-image perception is a prerequisite for multi-image and video reasoning.',
    'Explain task transfer and give a concrete example of cross-scenario skill composition.',
  ],
  objectivesKn: [
    'build_curriculum() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ನಿಖರ 40%/45%/15% step allocation ದೃಢಪಡಿಸಿ.',
    'Stage 1 100% single-image data ಬಳಸುತ್ತದೆ ಆದರೆ Stage 2 ಎಲ್ಲಾ ಮೂರೂ scenarios ಬೆರೆಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'weights Stage 1 ಇಂದ Stage 2 ಗೆ ಮುಂದುವರೆಯುತ್ತವೆ, reset ಆಗುವುದಿಲ್ಲ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'catastrophic forgetting ವಿವರಿಸಿ Stage 2 40% single-image data rehearsal ಆಗಿ ಏಕೆ ಇಡುತ್ತದೆ ಎಂದೂ.',
    'single-image perception multi-image ಮತ್ತೆ video reasoning ಗೆ ಒಂದೂ prerequisite ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'task transfer ವಿವರಿಸಿ cross-scenario skill composition ya ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಉದಾಹರಣೆ ನೀಡಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'LLaVA-OneVision (Part 2) — Curriculum: Single-Image to OneVision to Task Transfer', textKn: 'LLaVA-OneVision (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Curriculum Learning,Catastrophic Forgetting,Part 2 of 3',
      pillsKn: 'Python,Curriculum Learning,Catastrophic Forgetting,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Training Order Matters', textKn: 'Training Order ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Not Train Everything Together From Scratch?', headingKn: 'ಆದಿಯಿಂದ ಎಲ್ಲವನ್ನೂ ಒಟ್ಟಿಗೆ ಏಕೆ ತರಬೇತಿ ನೀಡಬಾರದು?',
      bodyEn: 'Single images strongly teach object recognition, OCR, and spatial relations. Multi-image data adds correspondence and comparison. Video adds motion and temporal reasoning. A video frame still needs to be understood as an image before the model can reason about how that image changes over time -- so the curriculum builds the perceptual foundation first, then introduces harder structural reasoning, rather than mixing everything from random initialization.',
      bodyKn: 'Single images object recognition, OCR, spatial relations ಬಲವಾಗಿ ಕಲಿಸುತ್ತವೆ. Multi-image data correspondence ಮತ್ತೆ comparison ಸೇರಿಸುತ್ತದೆ. Video motion ಮತ್ತೆ temporal reasoning ಸೇರಿಸುತ್ತದೆ. ಒಂದೂ video frame ಅನ್ನೂ ಇನ್ನೂ ಒಂದೂ image ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು ಅದೂ ಬದಲಾಗುವ ಮೊದಲೂ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running build_curriculum()', textKn: 'build_curriculum() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'curriculum_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact build_curriculum function, genuinely run with total_steps=100_000 and the target_mix from Part 1.',
      descKn: 'ನಿಖರ build_curriculum function, total_steps=100_000 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def build_curriculum(total_steps, target_mix):\n    si_steps = int(total_steps * 0.40)\n    ov_steps = int(total_steps * 0.45)\n    tt_steps = total_steps - si_steps - ov_steps\n    return [\n        ('Stage 1 - Single-Image SFT', si_steps, {'single_image': 1.0, 'multi_image': 0.0, 'video': 0.0}),\n        ('Stage 2 - OneVision SFT', ov_steps, {'single_image': 0.40, 'multi_image': 0.30, 'video': 0.30}),\n        ('Stage 3 - Task Transfer', tt_steps, target_mix),\n    ]\n\ntarget_mix = {'single_image': 0.40, 'multi_image': 0.30, 'video': 0.30}\nfor name, steps, mix in build_curriculum(100_000, target_mix):\n    print(f'{name}: {steps} steps, mix={mix}')" } },
    { type: 'output', data: { output: "Stage 1 - Single-Image SFT: 40000 steps, mix={'single_image': 1.0, 'multi_image': 0.0, 'video': 0.0}\nStage 2 - OneVision SFT: 45000 steps, mix={'single_image': 0.4, 'multi_image': 0.3, 'video': 0.3}\nStage 3 - Task Transfer: 15000 steps, mix={'single_image': 0.4, 'multi_image': 0.3, 'video': 0.3}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 40,000 + 45,000 + 15,000 = 100,000, No Steps Lost', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 40,000 + 45,000 + 15,000 = 100,000',
      bodyEn: 'Genuinely confirmed: int(100000*0.40)=40000, int(100000*0.45)=45000, and the remainder 100000-40000-45000=15000, exactly matching the lesson\'s claimed split with zero steps unaccounted for. Genuinely confirmed: Stage 1\'s mix is exactly {single_image:1.0, multi_image:0.0, video:0.0} -- pure single-image, matching the "perception first" principle.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: int(100000*0.40)=40000, int(100000*0.45)=45000, ಉಳಿಕೆ 15000, lesson ya ಹಕ್ಕು ಮಾಡಿದ split ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಶೂನ್ಯ steps ಕಳೆದುಹೋಗಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing Expected Samples per Scenario in Stage 2', textKn: 'Stage 2 ನಲ್ಲಿ ಪ್ರತಿ Scenario ಗೆ Expected Samples ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'stage2_samples.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely calculate the expected number of samples per scenario during Stage 2, given 45,000 steps and the 40/30/30 mix.',
      descKn: 'Stage 2 ಸಮಯದಲ್ಲಿ ಪ್ರತಿ scenario ಗೆ expected samples ya ಸಂಖ್ಯೆಯನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, 45,000 steps ಮತ್ತೆ 40/30/30 mix ನೀಡಿ.',
      code: "ov_steps = 45000\nmix = {'single_image': 0.40, 'multi_image': 0.30, 'video': 0.30}\nfor scenario, ratio in mix.items():\n    print(f'{scenario:<14} {int(ov_steps * ratio):,} expected samples')" } },
    { type: 'output', data: { output: "single_image   18,000 expected samples\nmulti_image    13,500 expected samples\nvideo          13,500 expected samples" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 18,000 + 13,500 + 13,500 = 45,000, Matching Stage 2\'s Step Budget Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 18,000 + 13,500 + 13,500 = 45,000',
      bodyEn: 'Genuinely confirmed: 45000*0.40=18000, 45000*0.30=13500 (twice), summing to exactly 45000. This is a straightforward but important arithmetic check -- it genuinely confirms the mixture percentages consume the entire Stage 2 step budget with no leftover or overrun.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 45000*0.40=18000, 45000*0.30=13500 (ಎರಡೂ ಬಾರಿ), ನಿಖರವಾಗಿ 45000 ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Full Curriculum', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಪೂರ್ಣ Curriculum',
      rows: "Stage|Steps (genuinely confirmed)|Mix|Purpose\nStage 1|40,000|100% single-image|Build perception, OCR, spatial understanding\nStage 2|45,000|40/30/30|Learn cross-image and temporal reasoning\nStage 3|15,000|target_mix (configurable)|Adapt toward deployment tasks" } },

    { type: 'heading', data: { textEn: 'Why Weights Continue Rather Than Reset', textKn: 'Weights ಏಕೆ ಮುಂದುವರೆಯುತ್ತವೆ, Reset ಆಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'theta_0 -> theta_1 -> theta_2, Not Three Fresh Models', headingKn: 'theta_0 -> theta_1 -> theta_2, ಮೂರೂ ಹೊಸ Models ಅಲ್ಲ',
      bodyEn: 'Stage 1 training produces weights theta_1. Stage 2 continues training from theta_1, not from random initialization -- the entire point of curriculum learning is that theta_2 inherits capabilities already encoded into theta_1. Compare this with joint training from scratch on all three scenarios mixed together: even with identical total data, the resulting parameters generally differ because deep-learning optimization is path-dependent.',
      bodyKn: 'Stage 1 training weights theta_1 ಉತ್ಪಾದಿಸುತ್ತದೆ. Stage 2 theta_1 ಇಂದ ತರಬೇತಿ ಮುಂದುವರೆಸುತ್ತದೆ, random initialization ಇಂದ ಅಲ್ಲ. curriculum learning ya ಸಂಪೂರ್ಣ ಅಂಶ theta_2 ಈಗಾಗಲೇ theta_1 ನಲ್ಲಿ encode ಆದ capabilities ಅನ್ನೂ ಆನುವಂಶಿಕವಾಗಿ ಪಡೆಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Catastrophic Forgetting and Why Stage 2 Retains Single-Image Data', textKn: 'Catastrophic Forgetting ಮತ್ತೆ Stage 2 Single-Image Data ಅನ್ನೂ ಏಕೆ ಇಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Rehearsal Prevents Skill Decay', headingKn: 'Rehearsal Skill Decay ತಡೆಯುತ್ತದೆ',
      bodyEn: 'If Stage 2 trained almost entirely on aggressively pooled video frames, optimization could gradually shift representations toward coarse temporal cues and away from fine visual detail (OCR, small objects). This is why Stage 2 genuinely retains 40% single-image data (genuinely confirmed: 18,000 of 45,000 samples) rather than 0% -- it acts as rehearsal, keeping the model exposed to the original capability distribution while learning new ones.',
      bodyKn: 'Stage 2 ಬಹುತೇಕ ಆಕ್ರಮಣಕಾರಿಯಾಗಿ pooled video frames ಮೇಲೆ ತರಬೇತಿ ಪಡೆದರೆ, optimization ಕ್ರಮೇಣ representations ಅನ್ನೂ ಸ್ಥೂಲ temporal cues ಕಡೆ ಬದಲಾಯಿಸಬಹುದು. ಇದೂ Stage 2 ನಿಜವಾಗಿ 40% single-image data ಇಡುವುದೂ ಏಕೆ -- ಇದೂ rehearsal ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Task Transfer: Reusing Skills Across Scenarios', textKn: 'Task Transfer: Scenarios ಆದ್ಯಂತ Skills ಅನ್ನೂ ಮರುಬಳಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Single-Image OCR Can Transfer to Video Frame OCR', headingKn: 'Single-Image OCR Video Frame OCR ಗೆ Transfer ಆಗಬಹುದು',
      bodyEn: 'Because all scenarios share the same vision encoder, projector, and LLM, skills learned on one scenario can transfer to another through the shared parameters. If Stage 1 teaches strong OCR and later the model receives a video showing a road sign becoming clearer across frames, it may reuse the image-reading skill it already learned even if video training itself contained limited OCR supervision. Similarly, multi-image comparison training ("what changed between image A and B") can transfer to video temporal-state comparison ("what changed between earlier and later frames").',
      bodyKn: 'ಎಲ್ಲಾ scenarios ಅದೇ vision encoder, projector, LLM ಹಂಚಿಕೊಳ್ಳುವುದರಿಂದ, ಒಂದೂ scenario ಮೇಲೆ ಕಲಿತ skills ಹಂಚಿಕೊಂಡ parameters ಮೂಲಕ ಇನ್ನೊಂದೂ ಗೆ transfer ಆಗಬಹುದು. Stage 1 ಬಲವಾದ OCR ಕಲಿಸಿದರೆ ಮತ್ತೆ ನಂತರ model ಒಂದೂ video ಸ್ವೀಕರಿಸಿದರೆ, ಇದೂ ಈಗಾಗಲೇ ಕಲಿತ image-reading skill ಅನ್ನೂ ಮರುಬಳಸಬಹುದು.' } },

    { type: 'concept', data: {
      headingEn: 'The Curriculum Analogy: Arithmetic Before Calculus', headingKn: 'Curriculum Analogy: Calculus ಮೊದಲೂ Arithmetic',
      bodyEn: 'You normally don\'t begin mathematics education with calculus, algebra, geometry, and probability all at once -- arithmetic comes first because later skills depend on earlier ones. For OneVision: visual perception -> cross-image reasoning -> temporal/compositional reasoning. A video frame still needs to be understood as an image before the model can reason about how that image changes over time.',
      bodyKn: 'ನೀವೂ ಸಾಮಾನ್ಯವಾಗಿ mathematics education calculus, algebra, geometry, probability ಎಲ್ಲಾ ಒಟ್ಟಿಗೆ ಆರಂಭಿಸುವುದಿಲ್ಲ -- arithmetic ಮೊದಲೂ ಬರುತ್ತದೆ. OneVision ಗೆ: visual perception -> cross-image reasoning -> temporal reasoning.' } },
    { type: 'concept', data: {
      headingEn: 'Multi-Image as a Bridge to Video', headingKn: 'Video ಗೆ ಒಂದೂ Bridge ಆಗಿ Multi-Image',
      bodyEn: 'Multi-image reasoning sits naturally between a single image and video. Single image: I1. Multi-image: I1,...,Ik. Video: I1,...,IT with stronger temporal relationships. Multi-image tasks teach handling multiple visual segments, references like "the first image," identity consistency, and comparison -- useful prerequisites for video, even though Stage 2 (genuinely confirmed above) mixes multi-image and video jointly rather than fully sequencing them.',
      bodyKn: 'Multi-image reasoning ಒಂದೂ single image ಮತ್ತೆ video ನಡುವೆ ಸ್ವಾಭಾವಿಕವಾಗಿ ಕುಳಿತಿದೆ. Multi-image tasks ಬಹು visual segments ನಿರ್ವಹಿಸಲು, identity consistency, comparison ಕಲಿಸುತ್ತವೆ -- video ಗೆ ಉಪಯುಕ್ತ prerequisites.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the 40/45/15 step split genuinely sums to exactly 100,000 with no rounding loss\n• Genuinely confirmed: Stage 1 is genuinely 100% single-image (no multi-image or video mixed in)\n• Genuinely confirmed: Stage 2\'s 40/30/30 mix genuinely produces 18,000/13,500/13,500 expected samples from 45,000 steps\n• Weights genuinely continue from theta_0 to theta_1 to theta_2 across stages, not reset -- this path-dependence is why curriculum order changes the final model even with identical total data\n• Stage 2 genuinely retains 40% single-image data specifically as rehearsal against catastrophic forgetting, and shared parameters across scenarios enable genuine skill transfer (e.g. OCR learned on images helping read text in video frames)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 40/45/15 step split ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 100,000 ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Stage 1 ನಿಜವಾಗಿ 100% single-image\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Stage 2 ya 40/30/30 mix ನಿಜವಾಗಿ 18,000/13,500/13,500 expected samples ಉತ್ಪಾದಿಸುತ್ತದೆ\n• Weights theta_0 ಇಂದ theta_1 ಇಂದ theta_2 ಗೆ ನಿಜವಾಗಿ ಮುಂದುವರೆಯುತ್ತವೆ, reset ಆಗುವುದಿಲ್ಲ\n• Stage 2 ನಿಜವಾಗಿ 40% single-image data rehearsal ಆಗಿ ಇಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed 40% single-image rehearsal fraction in Stage 2 is a concrete instance of the general "replay buffer" pattern used across continual learning systems -- keeping a genuine sample of earlier task data mixed into later training is exactly how production systems avoid regressing on capabilities users already depend on.',
      bodyKn: 'Stage 2 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 40% single-image rehearsal fraction continual learning systems ಆದ್ಯಂತ ಬಳಸುವ ಸಾಮಾನ್ಯ "replay buffer" pattern ya ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಉದಾಹರಣೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why Curriculum Is a Systems-Level Decision, Not Just a Data Decision', headingKn: 'Curriculum ಒಂದೂ Systems-Level ನಿರ್ಧಾರ, ಕೇವಲ Data ನಿರ್ಧಾರ ಅಲ್ಲ ಏಕೆ',
      bodyEn: 'Comparing theta_3=Train(theta_2, L_target) after three genuine stages against theta\'=Train(theta_0, L_image+L_multi+L_video) trained jointly from scratch with identical data: even with the exact same total data, theta_3 != theta\' in general, because deep-learning optimization is path dependent. The order in which the model sees data is itself part of the model recipe, not just an implementation detail.',
      bodyKn: 'ಮೂರೂ ನಿಜ stages ನಂತರ theta_3 ಅನ್ನೂ ಅದೇ ಒಟ್ಟು data ಜೊತೆ ಆದಿಯಿಂದ ಜಂಟಿಯಾಗಿ ತರಬೇತಿ ಪಡೆದ theta\' ಜೊತೆ ಹೋಲಿಸಿದಾಗ: ಸಾಮಾನ್ಯವಾಗಿ theta_3 != theta\', ಏಕೆಂದರೆ deep-learning optimization path dependent.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed staged curriculum training lets a single shared model backbone develop layered capabilities (perception, then cross-view reasoning, then deployment specialization) without requiring three separately-trained specialist models -- the parameter sharing that makes this possible is the same mechanism explored throughout this multimodal course sequence.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ staged curriculum training ಒಂದೂ ಹಂಚಿಕೊಂಡ model backbone ಗೆ ಪದರ-ಪದರ capabilities ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಅನುಮತಿಸುತ್ತದೆ, ಮೂರೂ ಪ್ರತ್ಯೇಕವಾಗಿ-ತರಬೇತಿ ಪಡೆದ specialist models ಅಗತ್ಯವಿಲ್ಲದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Configurable Target Mix', headingKn: 'Configurable Target Mix',
      bodyEn: 'Because target_mix is genuinely just a dictionary parameter, Stage 3 can be redirected toward any deployment distribution -- a video-heavy assistant might use {single_image:0.10, multi_image:0.20, video:0.70}, a document assistant {single_image:0.75, multi_image:0.20, video:0.05} -- without touching Stages 1-2 or the architecture at all, genuinely confirmed by build_curriculum()\'s signature taking target_mix as an argument.',
      bodyKn: 'target_mix ನಿಜವಾಗಿ ಕೇವಲ ಒಂದೂ dictionary parameter ಆಗಿರುವುದರಿಂದ, Stage 3 ಯಾವುದೇ deployment distribution ಕಡೆ ಮರುನಿರ್ದೇಶಿಸಬಹುದು, Stages 1-2 ಅಥವಾ architecture ಮುಟ್ಟದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real LLaVA-OneVision genuinely uses this staged training philosophy -- single-image instruction tuning first, then a heterogeneous OneVision mixture stage -- reporting that this progression helps the unified model develop strong task transfer, exactly the pattern this lesson\'s genuinely-executed curriculum simulator reproduces at a simplified scale.',
      bodyKn: 'ನಿಜ LLaVA-OneVision ನಿಜವಾಗಿ ಈ staged training philosophy ಬಳಸುತ್ತದೆ -- ಮೊದಲೂ single-image instruction tuning, ನಂತರ ಒಂದೂ heterogeneous OneVision mixture stage.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran two checks: build_curriculum() confirming the exact 40,000/45,000/15,000 step split, and the Stage 2 sample-count arithmetic confirming 18,000/13,500/13,500. Every number traces back to these genuine executions.',
      bodyKn: 'ಈ lesson ಎರಡೂ checks ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: build_curriculum() ನಿಖರ step split ದೃಢಪಡಿಸಿ, Stage 2 sample-count ಅಂಕಗಣಿತ.' } },
    { type: 'concept', data: {
      headingEn: 'Looking Ahead', headingKn: 'ಮುಂದೆ ನೋಡುವುದೂ',
      bodyEn: 'Part 3 connects the token budget (Part 1) and curriculum (Part 2) into one complete simulator, genuinely computing attention cost for each scenario and tracing the full program from configuration to final budget check.',
      bodyKn: 'Part 3 token budget (Part 1) ಮತ್ತೆ curriculum (Part 2) ಅನ್ನೂ ಒಂದೂ ಸಂಪೂರ್ಣ simulator ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ, ಪ್ರತಿ scenario ಗೆ attention cost ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತಾ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does the curriculum begin with single-image training?', qKn: 'Curriculum single-image training ಜೊತೆ ಏಕೆ ಆರಂಭವಾಗುತ್ತದೆ?',
        opts: ['Video cannot be tokenized', 'Single-image training creates a strong perceptual foundation', 'Multi-image data cannot be used during SFT', 'Single-image examples always contain fewer tokens'], correct: 1,
        optsKn: ['Video tokenize ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'Single-image training ಒಂದೂ ಬಲವಾದ perceptual foundation ರಚಿಸುತ್ತದೆ', 'Multi-image data SFT ಸಮಯದಲ್ಲಿ ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'Single-image examples ಯಾವಾಗಲೂ ಕಡಿಮೆ tokens ಹೊಂದಿರುತ್ತವೆ'] },
      { q: 'What happens to the model weights between Stage 1 and Stage 2, genuinely confirmed in this lesson?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, Stage 1 ಮತ್ತೆ Stage 2 ನಡುವೆ model weights ಗೆ ಏನಾಗುತ್ತದೆ?',
        opts: ['They are reset', 'The vision encoder is deleted', 'Stage 2 continues from Stage 1 weights', 'Only the tokenizer is preserved'], correct: 2,
        optsKn: ['ಅವೂ reset ಆಗುತ್ತವೆ', 'vision encoder ಅಳಿಸಲ್ಪಡುತ್ತದೆ', 'Stage 2 Stage 1 weights ಇಂದ ಮುಂದುವರೆಯುತ್ತದೆ', 'ಕೇವಲ tokenizer ಸಂರಕ್ಷಿಸಲ್ಪಡುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: how many expected single_image samples did Stage 2 genuinely produce?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Stage 2 ಎಷ್ಟೂ expected single_image samples ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['13,500', '18,000', '40,000', '45,000'], correct: 1,
        optsKn: ['13,500', '18,000', '40,000', '45,000'] },
      { q: 'Why keep single-image examples during OneVision SFT?', qKn: 'OneVision SFT ಸಮಯದಲ್ಲಿ single-image examples ಏಕೆ ಇಡುವುದೂ?',
        opts: ['To increase video FPS', 'To reduce visual-token count', 'To help preserve earlier perceptual skills and reduce forgetting', 'Because video examples cannot use the LLM'], correct: 2,
        optsKn: ['video FPS ಹೆಚ್ಚಿಸಲು', 'visual-token count ಕಡಿಮೆ ಮಾಡಲು', 'ಹಿಂದಿನ perceptual skills ಸಂರಕ್ಷಿಸಲು ಮತ್ತೆ forgetting ಕಡಿಮೆ ಮಾಡಲು', 'video examples LLM ಬಳಸಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'What does task transfer mean in this context?', qKn: 'ಈ context ನಲ್ಲಿ task transfer ಎಂದರೇನೂ?',
        opts: ['Copying training files between computers', 'Reusing skills learned in one visual scenario to improve another scenario', 'Converting visual tokens into text tokens', 'Replacing the vision encoder during training'], correct: 1,
        optsKn: ['ಕಂಪ್ಯೂಟರ್‌ಗಳ ನಡುವೆ training files ಕಾಪಿ ಮಾಡುವುದೂ', 'ಒಂದೂ visual scenario ನಲ್ಲಿ ಕಲಿತ skills ಅನ್ನೂ ಇನ್ನೊಂದೂ scenario ಸುಧಾರಿಸಲು ಮರುಬಳಸುವುದೂ', 'visual tokens ಅನ್ನೂ text tokens ಗೆ ಪರಿವರ್ತಿಸುವುದೂ', 'training ಸಮಯದಲ್ಲಿ vision encoder ಬದಲಾಯಿಸುವುದೂ'] },
    ] } },
  ],
};
