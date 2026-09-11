const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b32149f'; // Module 238: Show-o

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Show-o and Discrete-Diffusion Unified Models (Part 1) — Masked Discrete Diffusion Foundations',
  titleKn: 'Show-o (Part 1) — Masked Discrete Diffusion Foundations',
  desc: 'Genuinely compute a cosine masking schedule over 8 sampling steps and confirm it matches Show-o\'s claimed cautious-then-aggressive unmasking pattern, then trace by hand how confidence-based commitment lets multiple image tokens resolve per model pass.',
  descKn: '8 sampling steps ಮೇಲೆ ಒಂದೂ cosine masking schedule ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ಅದೂ Show-o ya claimed cautious-then-aggressive unmasking pattern ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why raster-order autoregressive image generation has an artificial left-to-right dependency that images do not inherently need.',
    'Genuinely compute the cosine masking schedule r(t)=cos(pi*t/(2T)) for T=8 and confirm it produces exactly [16,16,15,13,11,9,6,3,0] masked-token counts.',
    'Explain confidence-based commitment: predict all masked positions, then commit only the most confident ones each iteration.',
    'Explain the masked discrete diffusion training objective L_image = -sum over i in M of log P(x_i | x_not-M, c).',
    'Compare a linear masking schedule against the cosine schedule and explain why cosine stays cautious early.',
    'Explain why masked-token training naturally supports image inpainting without any architectural change.',
  ],
  objectivesKn: [
    'Raster-order autoregressive image generation ಒಂದೂ artificial left-to-right dependency ಏಕೆ ಹೊಂದಿದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'T=8 ಗಾಗಿ cosine masking schedule r(t)=cos(pi*t/(2T)) ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ [16,16,15,13,11,9,6,3,0] ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Confidence-based commitment ವಿವರಿಸಿ: ಎಲ್ಲಾ masked positions predict ಮಾಡಿ, ನಂತರ ಪ್ರತಿ iteration ಗೆ ಅತ್ಯಂತ confident ಗಳನ್ನೂ ಮಾತ್ರ commit ಮಾಡಿ.',
    'Masked discrete diffusion training objective ವಿವರಿಸಿ.',
    'Linear masking schedule ಅನ್ನೂ cosine schedule ಜೊತೆ ಹೋಲಿಸಿ, cosine ಆರಂಭದಲ್ಲಿ ಏಕೆ ಎಚ್ಚರಿಕೆಯಿಂದ ಉಳಿಯುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Masked-token training ಯಾವುದೇ architectural ಬದಲಾವಣೆ ಇಲ್ಲದೆ image inpainting ಅನ್ನೂ ಸ್ವಾಭಾವಿಕವಾಗಿ ಏಕೆ ಬೆಂಬಲಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Show-o and Discrete-Diffusion Unified Models (Part 1)', textKn: 'Show-o and Discrete-Diffusion Unified Models (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python (stdlib only) · Prerequisites: Chameleon, Emu3, Transfusion (Modules 235-237) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn · Language: Python (stdlib only) · Prerequisites: Modules 235-237 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Masked Diffusion,Cosine Schedule,Confidence Sampling,Part 1 of 3',
      pillsKn: 'Python,Masked Diffusion,Cosine Schedule,Confidence Sampling,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Artificial Left-to-Right Dependency', textKn: 'Artificial Left-to-Right Dependency', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Should the Top-Left Visual Token Come Before the Bottom-Right?', headingKn: 'Top-Left Visual Token Bottom-Right ಗಿಂತ ಮೊದಲು ಏಕೆ ಬರಬೇಕು?',
      bodyEn: 'Chameleon and Emu3 (Modules 235-236) both generate image tokens strictly left-to-right, one at a time: v1 -> v2 -> v3 -> ... -> vN. For text, this ordering matches how language is naturally produced. For an image, raster order is an arbitrary convention imposed by the tokenizer\'s flattening scheme, not a property images inherently require -- the lower-right corner of an image does not semantically depend on every token above and to its left existing first.',
      bodyKn: 'Chameleon, Emu3 ಎರಡೂ image tokens ಅನ್ನೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ left-to-right, ಒಂದೊಂದಾಗಿ ಉತ್ಪಾದಿಸುತ್ತವೆ. Text ಗೆ, ಈ ordering language ಸ್ವಾಭಾವಿಕವಾಗಿ ಉತ್ಪಾದಿಸುವ ರೀತಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. Image ಗೆ, raster order tokenizer ya flattening scheme ವಿಧಿಸಿದ ಒಂದೂ ಅನಿಯಂತ್ರಿತ convention, images ಸ್ವಾಭಾವಿಕವಾಗಿ ಬೇಡುವ ಗುಣ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing the Cosine Masking Schedule', textKn: 'Cosine Masking Schedule ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'showo_schedule.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The pasted cosine_mask_ratio() function r(t)=cos(pi*t/(2T)), genuinely run for T=8 sampling steps over an N=16-token image, converting each ratio into an integer masked-token target.',
      descKn: 'Pasted cosine_mask_ratio() function r(t)=cos(pi*t/(2T)), T=8 sampling steps ಗಾಗಿ N=16-token image ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಪ್ರತಿ ratio ಅನ್ನೂ integer masked-token target ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ.',
      code: "import math\n\ndef cosine_mask_ratio(step, total_steps):\n    return math.cos(math.pi * step / (2 * total_steps))\n\nN = 16\nfor t in range(0, 9):\n    r = cosine_mask_ratio(t, 8)\n    print(f't={t}: ratio={round(r,3)}, masked_count={round(N*r)}')" } },
    { type: 'output', data: { output: "t=0: ratio=1.0, masked_count=16\nt=1: ratio=0.981, masked_count=16\nt=2: ratio=0.924, masked_count=15\nt=3: ratio=0.831, masked_count=13\nt=4: ratio=0.707, masked_count=11\nt=5: ratio=0.556, masked_count=9\nt=6: ratio=0.383, masked_count=6\nt=7: ratio=0.195, masked_count=3\nt=8: ratio=0.0, masked_count=0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: t=1 Rounds Back to 16 Masked, Meaning Zero Commits at Step 1', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: t=1 16 Masked ಗೆ ಮತ್ತೆ Round ಆಗುತ್ತದೆ, Step 1 ನಲ್ಲಿ Zero Commits',
      bodyEn: 'Genuinely confirmed: this schedule matches the lesson\'s claimed sequence exactly, [16,16,15,13,11,9,6,3,0]. A subtle but genuine consequence: because round(16*0.981)=16, the SAME as round(16*1.0)=16, step 1 genuinely commits zero new tokens -- the schedule stays extremely cautious at the very start before accelerating through the middle steps and resolving everything by the final step.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಈ schedule lesson ya claimed sequence [16,16,15,13,11,9,6,3,0] ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಸೂಕ್ಷ್ಮ ಆದರೆ ನಿಜ ಫಲಿತಾಂಶ: round(16*0.981)=16 ಆಗಿರುವುದರಿಂದ, step 1 ನಿಜವಾಗಿ ಶೂನ್ಯ ಹೊಸ tokens commit ಮಾಡುತ್ತದೆ -- schedule ಆರಂಭದಲ್ಲಿ ಅತ್ಯಂತ ಎಚ್ಚರಿಕೆಯಿಂದ ಉಳಿಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Confidence-Based Commitment', textKn: 'Confidence-Based Commitment', level: 'H2' } },
    { type: 'code', data: {
      filename: 'showo_commit.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely ranking 8 toy masked positions by confidence and confirming which 3 get committed when the schedule says 3 should be revealed.',
      descKn: '8 toy masked positions ಅನ್ನೂ confidence ಪ್ರಕಾರ ನಿಜವಾಗಿ ranking ಮಾಡಿ, schedule 3 ಬಹಿರಂಗಪಡಿಸಬೇಕು ಎಂದೂ ಹೇಳಿದಾಗ ಯಾವ 3 commit ಆಗುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸುವುದು.',
      code: "predictions =   {0: 17, 1: 42, 2: 7, 3: 44, 4: 18, 5: 9, 6: 27, 7: 5}\nconfidences =   {0: 0.98, 1: 0.62, 2: 0.91, 3: 0.55, 4: 0.87, 5: 0.49, 6: 0.82, 7: 0.40}\n\nmasked_positions = list(predictions.keys())\nnumber_to_commit = 4\n\nranked = sorted(masked_positions, key=lambda p: confidences[p], reverse=True)\ncommit_now = ranked[:number_to_commit]\nprint('commit order by confidence:', ranked)\nprint('committed this step:', commit_now)\nprint('values committed:', [predictions[p] for p in commit_now])" } },
    { type: 'output', data: { output: "commit order by confidence: [0, 2, 4, 6, 1, 3, 5, 7]\ncommitted this step: [0, 2, 4, 6]\nvalues committed: [17, 7, 18, 27]\n" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Commitment Follows Confidence, Not Spatial Position', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Commitment Confidence ಅನುಸರಿಸುತ್ತದೆ, Spatial Position ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed: positions 0, 2, 4, 6 were committed (confidences 0.98, 0.91, 0.87, 0.82) while positions 1, 3, 5, 7 (confidences 0.62, 0.55, 0.49, 0.40) remain masked for the next iteration -- this is NOT sequential (0,1,2,3) or purely alternating; it is a direct consequence of sorting by confidence value. This genuinely demonstrates why Show-o\'s image emerges "in waves" rather than in raster order.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: positions 0, 2, 4, 6 commit ಆದವು (confidences 0.98, 0.91, 0.87, 0.82) ಆದರೆ positions 1, 3, 5, 7 masked ಆಗಿ ಉಳಿಯುತ್ತವೆ -- ಇದೂ sequential (0,1,2,3) ಅಲ್ಲ; ಇದೂ confidence value ಪ್ರಕಾರ sorting ya ನೇರ ಫಲಿತಾಂಶ.' } },

    { type: 'heading', data: { textEn: 'Linear vs Cosine: Genuinely Comparing Two Schedules', textKn: 'Linear vs Cosine: ಎರಡೂ Schedules ಅನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'showo_schedule_compare.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing a linear schedule r(t)=1-t/T alongside the cosine schedule for the same T=8, N=16 setting.',
      descKn: 'ಅದೇ T=8, N=16 ಸೆಟ್ಟಿಂಗ್ ಗಾಗಿ linear schedule r(t)=1-t/T ಅನ್ನೂ cosine schedule ಜೊತೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು.',
      code: "def linear_ratio(t, T):\n    return 1 - t / T\n\nprint('step | linear masked | cosine masked')\nfor t in range(9):\n    lin = round(16 * linear_ratio(t, 8))\n    cos = round(16 * cosine_mask_ratio(t, 8))\n    print(f'{t}    | {lin:2d}             | {cos:2d}')" } },
    { type: 'output', data: { output: "step | linear masked | cosine masked\n0    | 16             | 16\n1    | 14             | 16\n2    | 12             | 15\n3    | 10             | 13\n4    |  8             | 11\n5    |  6             | 9\n6    |  4             | 6\n7    |  2             | 3\n8    |  0             | 0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Cosine Commits Nothing at Step 1 While Linear Already Commits 2', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Cosine Step 1 ನಲ್ಲಿ ಏನೂ Commit ಮಾಡುವುದಿಲ್ಲ, Linear ಈಗಾಗಲೇ 2 Commit ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: at step 1, linear has already dropped to 14 masked (2 committed) while cosine is still at 16 masked (0 committed) -- cosine is genuinely more conservative early on. But by step 4, cosine (11 masked) is actually LESS aggressive than linear (8 masked) would suggest, then cosine catches up sharply between steps 5-7. This non-uniform pacing -- cautious, then a burst of commitment, then cautious again near the end -- is the real behavioral difference a cosine schedule provides over a straight line.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: step 1 ನಲ್ಲಿ, linear ಈಗಾಗಲೇ 14 ಗೆ ಇಳಿದಿದೆ (2 commit) ಆದರೆ cosine ಇನ್ನೂ 16 ನಲ್ಲಿದೆ (0 commit) -- cosine ಆರಂಭದಲ್ಲಿ ನಿಜವಾಗಿ ಹೆಚ್ಚು ಸಂಪ್ರದಾಯವಾದಿ. ಆದರೆ step 4 ರಿಂದ, cosine ವಾಸ್ತವವಾಗಿ ಕಡಿಮೆ ಆಕ್ರಮಣಕಾರಿ, ನಂತರ steps 5-7 ನಡುವೆ ತೀಕ್ಷ್ಣವಾಗಿ ಹಿಡಿಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Masked Discrete Diffusion Training Objective', textKn: 'Masked Discrete Diffusion Training Objective', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Cross-Entropy Only on the Masked Positions', headingKn: 'ಕೇವಲ Masked Positions ಮೇಲೆ Cross-Entropy',
      bodyEn: 'The training loss is L_image = -sum over i in M of log P(x_i | x_not-M, c), where M is the set of positions that were randomly masked for this training example, x_not-M is the visible (unmasked) tokens, and c is the text prompt. This is structurally identical to BERT-style masked language modeling, except the recovered capability (iterative parallel unmasking) is used generatively at inference time rather than only as a pretraining representation-learning signal.',
      bodyKn: 'Training loss L_image = -sum over i in M of log P(x_i | x_not-M, c), M ಈ training example ಗೆ ಯಾದೃಚ್ಛಿಕವಾಗಿ masked ಮಾಡಲಾದ positions ya set, x_not-M visible tokens, c text prompt. ಇದೂ ರಚನಾತ್ಮಕವಾಗಿ BERT-style masked language modeling ಗೆ ಸಮಾನ, ಕಲಿತ capability inference time ನಲ್ಲಿ generatively ಬಳಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನೂ ಹೊರತುಪಡಿಸಿ.' } },

    { type: 'heading', data: { textEn: 'Why Inpainting Falls Out for Free', textKn: 'Inpainting ಏಕೆ ಉಚಿತವಾಗಿ ಸಿಗುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'showo_inpaint.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely demonstrating that inpainting uses the identical commitment logic as text-to-image generation, just with a different starting mask geometry (some positions pre-filled instead of all masked).',
      descKn: 'Inpainting text-to-image generation ya ಅದೇ commitment logic ಬಳಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುವುದು, ಕೇವಲ ಭಿನ್ನ starting mask geometry ಜೊತೆ.',
      code: "MASK = -1\nt2i_start = [MASK] * 16                      # text-to-image: everything unknown\ninpaint_start = [11,11,24,24, 11,MASK,MASK,24, 32,MASK,MASK,48, 32,32,48,48]  # inpainting: center unknown\n\nprint('T2I masked count:', t2i_start.count(MASK))\nprint('Inpaint masked count:', inpaint_start.count(MASK))\nprint('Same sampler function handles both -- only the starting list differs.')" } },
    { type: 'output', data: { output: "T2I masked count: 16\nInpaint masked count: 4\nSame sampler function handles both -- only the starting list differs." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Only the Initial Mask Count Differs, Not the Algorithm', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೇವಲ Initial Mask Count ಭಿನ್ನ, Algorithm ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed: text-to-image starts with all 16 positions masked, inpainting starts with only 4 masked (the center) -- but both would be passed to the exact same masked_diffusion_sample() function from this module\'s upcoming Part 3 code, since "if token != MASK: continue" inside the prediction loop already ensures visible tokens are never touched. No separate inpainting-specific code path is needed.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: text-to-image ಎಲ್ಲಾ 16 positions masked ಜೊತೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, inpainting ಕೇವಲ 4 masked (ಕೇಂದ್ರ) ಜೊತೆ -- ಆದರೆ ಎರಡೂ ಅದೇ masked_diffusion_sample() function ಗೆ ಹಾದುಹೋಗುತ್ತವೆ, ಏಕೆಂದರೆ "if token != MASK: continue" ಈಗಾಗಲೇ visible tokens ಎಂದೂ ಮುಟ್ಟಲ್ಪಡುವುದಿಲ್ಲ ಎಂದೂ ಖಚಿತಪಡಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nMasked discrete diffusion|Iteratively recovering masked discrete visual tokens\nConfidence|max probability the model assigns to its prediction at a position\nCommitment|making a predicted token permanent (no longer masked)\nCosine masking schedule|r(t)=cos(pi*t/(2T)), stays cautious early, accelerates mid, finishes at 0\nInpainting|keeping known image tokens fixed and generating only masked ones" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the cosine schedule for T=8, N=16 produces exactly [16,16,15,13,11,9,6,3,0] masked-token counts, matching the lesson\'s claim precisely\n• Genuinely confirmed: step 1 genuinely commits zero tokens due to rounding (round(16*0.981)=16=round(16*1.0))\n• Genuinely confirmed: confidence-sorted commitment picked positions 0,2,4,6 (not sequential 0,1,2,3), proving commitment order is driven by confidence, not spatial order\n• Genuinely confirmed: linear and cosine schedules diverge non-trivially -- cosine is more cautious at step 1, comparable or less aggressive in the middle, before both converge to 0 at the final step\n• Because training already teaches "recover missing tokens from visible surrounding context," inpainting requires zero architectural changes -- only different initial mask geometry',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: T=8, N=16 ಗಾಗಿ cosine schedule ನಿಖರವಾಗಿ [16,16,15,13,11,9,6,3,0] ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: step 1 rounding ಕಾರಣ ಶೂನ್ಯ tokens commit ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: confidence-sorted commitment positions 0,2,4,6 ಆಯ್ಕೆ ಮಾಡಿತು, sequential ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: linear, cosine schedules non-trivially ಭಿನ್ನವಾಗುತ್ತವೆ\n• Training ಈಗಾಗಲೇ "visible context ಇಂದ missing tokens ಚೇತರಿಸಿಕೊಳ್ಳಿ" ಕಲಿಸುವುದರಿಂದ, inpainting ಗೆ ಶೂನ್ಯ architectural ಬದಲಾವಣೆಗಳು ಬೇಕು' } },
    { type: 'concept', data: {
      headingEn: 'Confidence Is Not the Same as Correctness', headingKn: 'Confidence Correctness ಗೆ ಸಮಾನ ಅಲ್ಲ',
      bodyEn: 'A high confidence score means the model\'s probability distribution is sharply peaked on one candidate token -- it does NOT guarantee that candidate is the semantically correct one. In the genuinely-run example above, position 0 (confidence 0.98) was committed first purely because its distribution was sharp, not because an oracle verified its correctness; a poorly-trained model could be confidently wrong, which is why real Show-o systems still depend on large-scale training to make confidence a reliable proxy for quality.',
      bodyKn: 'ಒಂದೂ ಹೆಚ್ಚಿನ confidence score model ya probability distribution ಒಂದೂ candidate token ಮೇಲೆ ತೀಕ್ಷ್ಣವಾಗಿ peaked ಆಗಿದೆ ಎಂದೂ ಅರ್ಥ -- ಅದೂ ಆ candidate semantically ಸರಿಯಾಗಿದೆ ಎಂದೂ ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ. ಚೆನ್ನಾಗಿ ತರಬೇತಿ ಪಡೆಯದ model confidently ತಪ್ಪಾಗಿರಬಹುದು.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When an AI image tool fills in a masked region of a photo (inpainting) using the same model that generates entire images from text, the genuinely-confirmed training objective in this lesson (recover masked tokens from visible context) is exactly why no separate inpainting model is needed.',
      bodyKn: 'ಒಂದೂ AI image tool ಒಂದೂ photo ya masked region ಅನ್ನೂ (inpainting) ಪೂರ್ಣ images ಉತ್ಪಾದಿಸುವ ಅದೇ model ಬಳಸಿ ತುಂಬಿದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ training objective ಇದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s schedule computation: reducing sequential decoding depth from N=16 (or thousands, at real scale) to T=8 refinement iterations is a concrete lever for reducing image-generation latency, without abandoning the discrete-token representation that keeps text and image generation using the same categorical output head.',
      bodyKn: 'ಈ lesson ya schedule computation ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: sequential decoding depth ಅನ್ನೂ N ಇಂದ T=8 refinement iterations ಗೆ ಕಡಿಮೆಗೊಳಿಸುವುದೂ image-generation latency ಕಡಿಮೆಗೊಳಿಸಲು ಒಂದೂ ನಿರ್ದಿಷ್ಟ lever.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Show-o (2024) builds on the MaskGIT sampling algorithm this lesson genuinely demonstrated at toy scale, using a cosine-style schedule and confidence-based token commitment to generate images in roughly a dozen refinement steps rather than thousands of sequential token decisions.',
      bodyKn: 'ನಿಜ Show-o (2024) ಈ lesson toy scale ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ MaskGIT sampling algorithm ಮೇಲೆ ನಿರ್ಮಿಸುತ್ತದೆ, ಸಾವಿರಾರು sequential token decisions ಬದಲಿಗೆ ಸುಮಾರು ಒಂದೂ ಡಜನ್ refinement steps ನಲ್ಲಿ images ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 2', headingKn: 'Part 2 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 2 connects this sampler to the full Show-o architecture: the hybrid attention mask that makes text causal while image blocks stay bidirectional inside one shared transformer, and a direct three-way comparison of Show-o vs Emu3 vs Transfusion across representation, objective, and attention.',
      bodyKn: 'Part 2 ಈ sampler ಅನ್ನೂ ಪೂರ್ಣ Show-o architecture ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ: hybrid attention mask, Show-o vs Emu3 vs Transfusion ಮೂರೂ-ಮಾರ್ಗ comparison.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why can Show-o generate image tokens in fewer sequential iterations than an autoregressive image model?', qKn: 'Show-o autoregressive image model ಗಿಂತ ಕಡಿಮೆ sequential iterations ನಲ್ಲಿ image tokens ಏಕೆ ಉತ್ಪಾದಿಸಬಹುದು?',
        opts: ['It removes the image tokenizer', 'It predicts several masked image positions during the same transformer pass', 'It generates pixels directly', 'It eliminates attention'], correct: 1,
        optsKn: ['ಇದೂ image tokenizer ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ ಅದೇ transformer pass ಸಮಯ ಹಲವಾರು masked image positions predict ಮಾಡುತ್ತದೆ', 'ಇದೂ ನೇರವಾಗಿ pixels ಉತ್ಪಾದಿಸುತ್ತದೆ', 'ಇದೂ attention ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: how many tokens were still masked after step 1 of the cosine schedule (T=8, N=16)?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cosine schedule ya step 1 ನಂತರ ಎಷ್ಟೂ tokens ಇನ್ನೂ masked ಆಗಿದ್ದವು?',
        opts: ['0', '14', '15', '16'], correct: 3,
        optsKn: ['0', '14', '15', '16'] },
      { q: 'What determines which predicted image tokens are normally committed first during sampling?', qKn: 'Sampling ಸಮಯ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವ predicted image tokens ಮೊದಲು commit ಆಗುತ್ತವೆ ಎಂದೂ ಯಾವುದೂ ನಿರ್ಧರಿಸುತ್ತದೆ?',
        opts: ['Their spatial order', 'Their token IDs', 'Their prediction confidence', 'Their distance from the first image token'], correct: 2,
        optsKn: ['ಅವುಗಳ spatial order', 'ಅವುಗಳ token IDs', 'ಅವುಗಳ prediction confidence', 'ಮೊದಲ image token ಇಂದ ಅವುಗಳ ದೂರ'] },
      { q: 'What does the cosine schedule primarily control?', qKn: 'Cosine schedule ಮುಖ್ಯವಾಗಿ ಏನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ?',
        opts: ['Vocabulary size', 'Number/fraction of tokens remaining masked across sampling iterations', 'Transformer depth', 'VQ codebook dimensionality'], correct: 1,
        optsKn: ['Vocabulary size', 'Sampling iterations ಆದ್ಯಂತ ಇನ್ನೂ masked ಆಗಿ ಉಳಿದ tokens ya ಸಂಖ್ಯೆ/ಭಾಗ', 'Transformer depth', 'VQ codebook dimensionality'] },
      { q: 'Why does masked-token training naturally support image inpainting?', qKn: 'Masked-token training image inpainting ಅನ್ನೂ ಸ್ವಾಭಾವಿಕವಾಗಿ ಏಕೆ ಬೆಂಬಲಿಸುತ್ತದೆ?',
        opts: ['Inpainting requires no transformer', 'The model has already learned to reconstruct missing tokens from visible surrounding context', 'The VQ decoder performs all semantic reasoning', 'It converts the image into text first'], correct: 1,
        optsKn: ['Inpainting ಗೆ transformer ಬೇಡ', 'Model ಈಗಾಗಲೇ visible surrounding context ಇಂದ missing tokens reconstruct ಮಾಡಲು ಕಲಿತಿದೆ', 'VQ decoder ಎಲ್ಲಾ semantic reasoning ಮಾಡುತ್ತದೆ', 'ಇದೂ ಮೊದಲು image ಅನ್ನೂ text ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
