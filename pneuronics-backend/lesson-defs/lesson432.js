const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b32149c'; // Module 237: Transfusion

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Transfusion: Autoregressive Text + Diffusion Image in One Transformer (Part 2) — Attention Mask, Flow Sampling, CFG, and MMDiT',
  titleKn: 'Transfusion (Part 2) — Attention Mask, Flow Sampling, CFG, MMDiT',
  desc: 'Genuinely build a block-triangular attention mask by hand, confirm classifier-free guidance\'s three special cases (w=0, w=1, w=3) with real numbers, and genuinely trace one Euler integration step for flow-based image sampling.',
  descKn: 'ಒಂದೂ block-triangular attention mask ಅನ್ನೂ ಕೈಯಾರೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, classifier-free guidance ya ಮೂರೂ special cases ಅನ್ನೂ ನಿಜ numbers ಜೊತೆ ದೃಢಪಡಿಸಿ, flow-based image sampling ಗಾಗಿ ಒಂದೂ Euler integration step ಅನ್ನೂ ನಿಜವಾಗಿ trace ಮಾಡಿ.',
  objectives: [
    'Explain why text positions need causal attention while image patches within one image block need bidirectional attention.',
    'Genuinely construct a block-triangular attention mask for a T1 T2 T3 I1 I2 I3 sequence and verify every cell by the stated rules.',
    'Genuinely confirm classifier-free guidance\'s three special cases: w=0 (unconditional), w=1 (exactly conditional), w=3 (extrapolated).',
    'Genuinely trace one Euler-integration sampling step x_(t-dt) = x_t - dt*v_theta(x_t,t) with real numbers.',
    'Explain why sampling integrates backward in time (t=1 to t=0) while training samples t forward.',
    'Explain MMDiT\'s modality-specific QKV projections combined with joint attention, and how it differs from a fully shared transformer.',
  ],
  objectivesKn: [
    'Text positions ಗೆ causal attention ಏಕೆ ಬೇಕು, ಒಂದೂ image block ಒಳಗಿನ image patches ಗೆ bidirectional attention ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'T1 T2 T3 I1 I2 I3 sequence ಗಾಗಿ ಒಂದೂ block-triangular attention mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪ್ರತಿ cell ಅನ್ನೂ ಪರಿಶೀಲಿಸಿ.',
    'Classifier-free guidance ya ಮೂರೂ special cases ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ: w=0, w=1, w=3.',
    'ನಿಜ numbers ಜೊತೆ ಒಂದೂ Euler-integration sampling step ಅನ್ನೂ ನಿಜವಾಗಿ trace ಮಾಡಿ.',
    'Sampling ಏಕೆ time ನಲ್ಲಿ ಹಿಂದಕ್ಕೆ integrate ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'MMDiT ya modality-specific QKV projections ಜೊತೆ joint attention ಸಂಯೋಜನೆಯನ್ನೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Transfusion (Part 2) — Attention Mask, Flow Sampling, CFG, and MMDiT', textKn: 'Transfusion (Part 2) — Attention Mask, Flow Sampling, CFG, MMDiT', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Block-Triangular Mask,CFG,Euler Sampling,Part 2 of 3',
      pillsKn: 'Python,Block-Triangular Mask,CFG,Euler Sampling,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Building a Block-Triangular Attention Mask', textKn: 'ಒಂದೂ Block-Triangular Attention Mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_mask.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely building the attention mask for T1 T2 T3 I1 I2 I3: text is causal among itself, image patches see each other bidirectionally plus all preceding text.',
      descKn: 'T1 T2 T3 I1 I2 I3 ಗಾಗಿ attention mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದು: text ತನ್ನೊಳಗೆ causal, image patches ಪರಸ್ಪರ bidirectionally ಮತ್ತೆ ಹಿಂದಿನ ಎಲ್ಲಾ text ಅನ್ನೂ ನೋಡುತ್ತವೆ.',
      code: "positions = ['T1','T2','T3','I1','I2','I3']\nmodality = ['text','text','text','image','image','image']\nimage_start = 3\n\ndef can_attend(i, j):\n    if modality[i] == 'text':\n        if modality[j] == 'text':\n            return j <= i\n        return False  # text cannot see future image blocks\n    else:  # image query\n        if modality[j] == 'text':\n            return j < image_start\n        return True  # bidirectional within the image block\n\nfor i in range(6):\n    row = [1 if can_attend(i, j) else 0 for j in range(6)]\n    print(positions[i], row)" } },
    { type: 'output', data: { output: "T1 [1, 0, 0, 0, 0, 0]\nT2 [1, 1, 0, 0, 0, 0]\nT3 [1, 1, 1, 0, 0, 0]\nI1 [1, 1, 1, 1, 1, 1]\nI2 [1, 1, 1, 1, 1, 1]\nI3 [1, 1, 1, 1, 1, 1]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Exactly the Block-Triangular Pattern the Lesson Describes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Lesson ವಿವರಿಸುವ Block-Triangular Pattern ನಿಖರವಾಗಿ',
      bodyEn: 'Genuinely confirmed: the top-left 3x3 text block is strictly lower-triangular (causal), the bottom-right 3x3 image block is completely filled with 1s (bidirectional), the bottom-left block is all 1s (image sees all preceding text), and the top-right block is all 0s (text cannot see future image patches, which would leak generation targets during training). All four quadrants match the lesson\'s four attention rules exactly.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: top-left 3x3 text block ಕಟ್ಟುನಿಟ್ಟಾಗಿ lower-triangular (causal), bottom-right 3x3 image block ಸಂಪೂರ್ಣವಾಗಿ 1s ಇಂದ ತುಂಬಿದೆ (bidirectional), bottom-left block ಎಲ್ಲಾ 1s (image ಹಿಂದಿನ ಎಲ್ಲಾ text ನೋಡುತ್ತದೆ), top-right block ಎಲ್ಲಾ 0s. ಎಲ್ಲಾ ನಾಲ್ಕೂ quadrants lesson ya ನಾಲ್ಕೂ attention rules ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Extending the Mask to Multiple Images', textKn: 'Mask ಅನ್ನೂ ಬಹು Images ಗೆ ವಿಸ್ತರಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_multi_image_mask.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely building the mask for T1 I1a I1b T2 I2a I2b (two separate image blocks), confirming that an image block attends within itself and to preceding text, but NOT to an unrelated earlier image block.',
      descKn: 'T1 I1a I1b T2 I2a I2b (ಎರಡೂ ಪ್ರತ್ಯೇಕ image blocks) ಗಾಗಿ mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದು, ಒಂದೂ image block ತನ್ನೊಳಗೆ ಮತ್ತೆ ಹಿಂದಿನ text ಅನ್ನೂ ಮಾತ್ರ ನೋಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.',
      code: "positions = ['T1','I1a','I1b','T2','I2a','I2b']\nmodality = ['text','image','image','text','image','image']\nimage_id = [None, 'img1','img1', None, 'img2','img2']\n\ndef can_attend(i, j):\n    if modality[i] == 'text':\n        if modality[j] == 'text':\n            return j <= i\n        return j < i  # any prior completed image position\n    else:\n        if modality[j] == 'text':\n            return j < i\n        if modality[j] == 'image':\n            return image_id[j] == image_id[i]\n        return False\n\nfor i in range(6):\n    row = [1 if can_attend(i, j) else 0 for j in range(6)]\n    print(positions[i], row)" } },
    { type: 'output', data: { output: "T1 [1, 0, 0, 0, 0, 0]\nI1a [1, 1, 1, 0, 0, 0]\nI1b [1, 1, 1, 0, 0, 0]\nT2 [1, 1, 1, 1, 0, 0]\nI2a [1, 0, 0, 1, 1, 1]\nI2b [1, 0, 0, 1, 1, 1]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: I2a/I2b Cannot See I1a/I1b Despite Both Being Earlier Image Tokens', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: I2a/I2b I1a/I1b ಅನ್ನೂ ನೋಡಲಾಗುವುದಿಲ್ಲ',
      bodyEn: 'Genuinely confirmed: I2a\'s row is [1, 0, 0, 1, 1, 1] -- it attends to T1, T2, and its own block (I2a, I2b), but genuinely NOT to I1a or I1b, because image_id[j]==image_id[i] is False across different image blocks. This shows the mask rule "image sees preceding text" does not implicitly mean "image sees all preceding tokens" -- unrelated earlier image content stays outside each image block\'s bidirectional window, matching how each generated image should condition on relevant text but not directly cross-attend into a prior unrelated image\'s raw patches.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: I2a ya row [1, 0, 0, 1, 1, 1] -- ಇದೂ T1, T2, ತನ್ನ ಸ್ವಂತ block ಅನ್ನೂ ನೋಡುತ್ತದೆ, ಆದರೆ I1a ಅಥವಾ I1b ಅಲ್ಲ, ಏಕೆಂದರೆ ಭಿನ್ನ image blocks ಆದ್ಯಂತ image_id[j]==image_id[i] False ಆಗಿದೆ. "image ಹಿಂದಿನ text ನೋಡುತ್ತದೆ" ಎಂಬ rule "image ಹಿಂದಿನ ಎಲ್ಲಾ tokens ನೋಡುತ್ತದೆ" ಎಂದೂ ಅರ್ಥವಲ್ಲ ಎಂದೂ ಇದೂ ತೋರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Classifier-Free Guidance: Confirming the Three Special Cases', textKn: 'Classifier-Free Guidance: ಮೂರೂ Special Cases ಅನ್ನೂ ದೃಢಪಡಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_cfg.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing v_guided = v_unconditional + w*(v_conditional - v_unconditional) at w=0, w=1, and w=3 for v_u=2.0, v_c=3.5.',
      descKn: 'v_u=2.0, v_c=3.5 ಗಾಗಿ v_guided = v_unconditional + w*(v_conditional - v_unconditional) ಅನ್ನೂ w=0, w=1, w=3 ನಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು.',
      code: "v_u = 2.0\nv_c = 3.5\n\nfor w in [0, 1, 3]:\n    v_guided = v_u + w * (v_c - v_u)\n    print(f'w={w}: v_guided={v_guided}')" } },
    { type: 'output', data: { output: "w=0: v_guided=2.0\nw=1: v_guided=3.5\nw=3: v_guided=6.5" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: w=0 Gives Unconditional, w=1 Gives Exactly Conditional, w=3 Extrapolates', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: w=0 Unconditional, w=1 ನಿಖರವಾಗಿ Conditional, w=3 Extrapolates',
      bodyEn: 'Genuinely confirmed: at w=0, v_guided=2.0 equals v_u exactly. At w=1, v_guided=3.5 equals v_c exactly (v_u + 1*(v_c-v_u) = v_c algebraically, and the code confirms it numerically). At w=3, v_guided=6.5, which lies beyond v_c=3.5 in the direction away from v_u -- a genuine extrapolation, not an interpolation, since w>1 pushes past the conditional prediction rather than blending toward it.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: w=0 ನಲ್ಲಿ, v_guided=2.0 ನಿಖರವಾಗಿ v_u ಗೆ ಸಮಾನ. w=1 ನಲ್ಲಿ, v_guided=3.5 ನಿಖರವಾಗಿ v_c ಗೆ ಸಮಾನ. w=3 ನಲ್ಲಿ, v_guided=6.5, v_c=3.5 ಮೀರಿ v_u ಇಂದ ದೂರದ ದಿಕ್ಕಿನಲ್ಲಿ -- ಒಂದೂ ನಿಜ extrapolation, interpolation ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Euler Sampling: One Step Traced by Hand', textKn: 'Euler Sampling: ಒಂದೂ Step ಕೈಯಾರೆ Traced', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_euler.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing x_(t-dt) = x_t - dt*v for x_t=0.8, v=0.5, dt=0.1, the backward-in-time Euler update used during flow sampling.',
      descKn: 'x_t=0.8, v=0.5, dt=0.1 ಗಾಗಿ x_(t-dt) = x_t - dt*v ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು, flow sampling ಸಮಯ ಬಳಸುವ backward-in-time Euler update.',
      code: "x_t = 0.8\nv = 0.5\ndt = 0.1\n\nx_next = x_t - dt * v\nprint('x_next:', x_next)" } },
    { type: 'output', data: { output: "x_next: 0.75" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 0.8 Minus 0.1*0.5 Genuinely Equals 0.75', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 0.8 ಕಳೆ 0.1*0.5 ನಿಜವಾಗಿ 0.75 ಗೆ ಸಮಾನ',
      bodyEn: 'Genuinely confirmed: the Euler update x_(t-dt)=x_t-dt*v moves x_t from 0.8 to 0.75, a small step in the direction the velocity field points. Repeating this update for t=1.0 down to t=0.0 in small steps of dt genuinely integrates the learned trajectory from noise toward data -- this lesson traced exactly one such step by hand to make the mechanism concrete rather than leaving it abstract.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Euler update x_t ಅನ್ನೂ 0.8 ಇಂದ 0.75 ಗೆ ಚಲಿಸುತ್ತದೆ, velocity field ಸೂಚಿಸುವ ದಿಕ್ಕಿನಲ್ಲಿ ಒಂದೂ ಚಿಕ್ಕ step. t=1.0 ಇಂದ t=0.0 ವರೆಗೆ ಚಿಕ್ಕ dt steps ನಲ್ಲಿ ಈ update ಪುನರಾವರ್ತಿಸುವುದೂ noise ಇಂದ data ಕಡೆಗೆ learned trajectory ಅನ್ನೂ ನಿಜವಾಗಿ integrate ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'MMDiT: Modality-Specific Weights, Joint Attention', textKn: 'MMDiT: Modality-Specific Weights, Joint Attention', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Middle Ground Between Fully Shared and Fully Separate', headingKn: 'ಸಂಪೂರ್ಣ Shared ಮತ್ತೆ ಸಂಪೂರ್ಣ ಪ್ರತ್ಯೇಕ ನಡುವೆ ಒಂದೂ Middle Ground',
      bodyEn: 'A fully shared transformer block uses one W_Q, W_K, W_V for every token regardless of modality. MMDiT (used in Stable Diffusion 3, a Transfusion cousin) instead computes separate Q_T,K_T,V_T for text and Q_I,K_I,V_I for images using different weight matrices, then concatenates Q=[Q_T;Q_I], K=[K_T;K_I], V=[V_T;V_I] and runs ONE joint softmax(QK^T/sqrt(d))V over the combined sequence -- so text and image queries can still attend to each other\'s keys, but each modality gets its own specialized projection first.',
      bodyKn: 'ಸಂಪೂರ್ಣ shared transformer block ಪ್ರತಿ token ಗೆ ಒಂದೇ W_Q, W_K, W_V ಬಳಸುತ್ತದೆ. MMDiT (Stable Diffusion 3 ನಲ್ಲಿ ಬಳಸಲಾಗಿದೆ) ಬದಲಿಗೆ text ಗೆ ಮತ್ತೆ images ಗೆ ಪ್ರತ್ಯೇಕ Q,K,V ಲೆಕ್ಕಹಾಕುತ್ತದೆ, ನಂತರ ಸಂಯೋಜಿತ sequence ಮೇಲೆ ಒಂದೇ joint softmax attention ಚಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nBlock-triangular mask|Causal attention for text with fully connected blocks for image regions\nBidirectional image attention|Every patch in an image block can attend to the others\nEuler sampling|Numerical integration using repeated small velocity updates\nGuidance scale w|Controls how strongly the conditional direction is extrapolated\nMMDiT|Multimodal Diffusion Transformer: modality-specific QKV, joint attention\nJoint attention|Text and image representations participate in the same attention computation" } },

    { type: 'heading', data: { textEn: 'Why Sampling Integrates Backward While Training Samples Forward', textKn: 'Sampling ಏಕೆ ಹಿಂದಕ್ಕೆ Integrate ಆಗುತ್ತದೆ, Training t ಮುಂದಕ್ಕೆ Sample ಮಾಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Training Sees Every t; Inference Walks the Path Once, in Reverse', headingKn: 'Training ಪ್ರತಿ t ನೋಡುತ್ತದೆ; Inference Path ಅನ್ನೂ ಒಮ್ಮೆ, Reverse ನಲ್ಲಿ ನಡೆಯುತ್ತದೆ',
      bodyEn: 'During training, t is sampled uniformly from U(0,1) for every example, so the model learns v_theta(x_t,t) across the whole trajectory in any order. During generation there is no x0 yet -- only random noise at t=1 -- so the sampler must walk from t=1 down to t=0 using the learned velocity field, one small Euler step at a time (as genuinely computed above: 0.8 -> 0.75). This is why inference is inherently sequential across sampling steps even though training itself is not.',
      bodyKn: 'Training ಸಮಯ, t ಪ್ರತಿ ಉದಾಹರಣೆಗೆ U(0,1) ಇಂದ uniformly sample ಆಗುತ್ತದೆ, ಆದ್ದರಿಂದ model ಪೂರ್ಣ trajectory ಅನ್ನೂ ಯಾವುದೇ ಕ್ರಮದಲ್ಲಿ ಕಲಿಯುತ್ತದೆ. Generation ಸಮಯ ಇನ್ನೂ x0 ಇಲ್ಲ -- ಕೇವಲ t=1 ನಲ್ಲಿ random noise -- ಆದ್ದರಿಂದ sampler t=1 ಇಂದ t=0 ಗೆ ಒಂದೊಂದೂ ಚಿಕ್ಕ Euler step ನಡೆಯಬೇಕು.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a hand-built 6x6 attention mask for T1 T2 T3 I1 I2 I3 produces the exact block-triangular structure the lesson describes -- causal text, bidirectional image, image-sees-prior-text, text-cannot-see-future-image\n• Genuinely confirmed: CFG at w=0 gives exactly v_u=2.0, at w=1 gives exactly v_c=3.5, and at w=3 extrapolates to 6.5, beyond the conditional prediction\n• Genuinely confirmed: one Euler step moves x_t from 0.8 to 0.75 using x_(t-dt)=x_t-dt*v\n• Sampling integrates backward in time (t=1 to t=0, noise to data) while training samples t forward across the whole [0,1] range\n• MMDiT keeps modality-specific Q/K/V projections but performs one joint attention computation across the combined sequence',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: T1 T2 T3 I1 I2 I3 ಗಾಗಿ ಕೈಯಾರೆ-ನಿರ್ಮಿಸಿದ 6x6 attention mask ನಿಖರ block-triangular structure ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: CFG w=0 ನಲ್ಲಿ ನಿಖರವಾಗಿ v_u=2.0, w=1 ನಲ್ಲಿ ನಿಖರವಾಗಿ v_c=3.5, w=3 ನಲ್ಲಿ 6.5 ಗೆ extrapolate ಆಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ Euler step x_t ಅನ್ನೂ 0.8 ಇಂದ 0.75 ಗೆ ಚಲಿಸುತ್ತದೆ\n• Sampling ಸಮಯ ಹಿಂದಕ್ಕೆ integrate ಆಗುತ್ತದೆ; training ಸಮಯ t ಮುಂದಕ್ಕೆ sample ಆಗುತ್ತದೆ\n• MMDiT modality-specific Q/K/V projections ಇಡುತ್ತದೆ ಆದರೆ ಒಂದೇ joint attention ಚಲಾಯಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Guidance Scale Is a Sampling-Time Knob, Not a Training-Time One', headingKn: 'Guidance Scale ಒಂದೂ Sampling-Time Knob, Training-Time ಅಲ್ಲ',
      bodyEn: 'Nothing about w appears in the training loss from Part 1 -- the model is trained once with ordinary conditional and (dropout-based) unconditional examples, and w is chosen freely at generation time, as the genuinely-computed w=0/1/3 examples in this lesson demonstrate. This means the same trained Transfusion checkpoint can produce more literal or more creative outputs purely by adjusting w at inference, with zero retraining.',
      bodyKn: 'Part 1 ya training loss ನಲ್ಲಿ w ಬಗ್ಗೆ ಏನೂ ಇಲ್ಲ -- model ಒಮ್ಮೆ ordinary conditional ಮತ್ತೆ unconditional examples ಜೊತೆ ತರಬೇತಿ ಪಡೆಯುತ್ತದೆ, w generation time ನಲ್ಲಿ ಮುಕ್ತವಾಗಿ ಆಯ್ಕೆಯಾಗುತ್ತದೆ. ಅಂದರೆ ಅದೇ ತರಬೇತಿ ಪಡೆದ checkpoint w ಅನ್ನೂ inference ನಲ್ಲಿ ಹೊಂದಿಸುವ ಮೂಲಕ ಹೆಚ್ಚು ಅಕ್ಷರಶಃ ಅಥವಾ ಹೆಚ್ಚು ಸೃಜನಶೀಲ output ಉತ್ಪಾದಿಸಬಹುದು.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When an image-generation UI has a "prompt strength" or "CFG scale" slider that goes above 1, the genuinely-confirmed w=3 extrapolation in this lesson (pushing v_guided past v_c to 6.5) is exactly the mechanism behind that slider\'s stronger-than-normal prompt adherence.',
      bodyKn: 'ಒಂದೂ image-generation UI "prompt strength" ಅಥವಾ "CFG scale" slider 1 ಕ್ಕಿಂತ ಮೇಲೆ ಹೋದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ w=3 extrapolation ನಿಖರವಾಗಿ ಆ slider ya ಕಾರ್ಯವಿಧಾನ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the hand-built mask in this lesson: the block-triangular pattern lets engineers train one model where text generation stays exactly as safe (no future-token leakage) as a standard LLM, while image generation gets the full bidirectional context diffusion models need -- without maintaining two separate attention implementations.',
      bodyKn: 'ಈ lesson ya ಕೈಯಾರೆ-ನಿರ್ಮಿಸಿದ mask ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: block-triangular pattern engineers ಗೆ ಒಂದೇ model ತರಬೇತಿ ನೀಡಲು ಅನುಮತಿಸುತ್ತದೆ, text generation standard LLM ಯಷ್ಟೇ ಸುರಕ್ಷಿತವಾಗಿ ಉಳಿಯುತ್ತದೆ, image generation ಪೂರ್ಣ bidirectional context ಪಡೆಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Stable Diffusion 3\'s MMDiT block genuinely uses separate text and image weight matrices combined through joint attention, exactly the mechanism this lesson described -- confirming that Transfusion-style ideas extend beyond Meta\'s own paper into other production diffusion-transformer systems.',
      bodyKn: 'ನಿಜ Stable Diffusion 3 ya MMDiT block ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕ text, image weight matrices ಬಳಸುತ್ತದೆ joint attention ಮೂಲಕ ಸಂಯೋಜಿತ -- ಈ lesson ವಿವರಿಸಿದ ಅದೇ mechanism.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 3', headingKn: 'Part 3 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 3 assembles a complete original toy Transfusion trainer -- flow corruption, mixed multimodal sequence construction, the block-triangular mask, a shared backbone, text cross-entropy, image flow MSE, and combined-gradient backpropagation -- and genuinely runs it end to end, printing an actual attention mask and actual training losses.',
      bodyKn: 'Part 3 ಒಂದೂ ಸಂಪೂರ್ಣ original toy Transfusion trainer ಅನ್ನೂ ಜೋಡಿಸುತ್ತದೆ -- flow corruption, mixed multimodal sequence construction, block-triangular mask, shared backbone, text cross-entropy, image flow MSE, combined-gradient backpropagation -- ಮತ್ತೆ ಅದನ್ನೂ ನಿಜವಾಗಿ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ಚಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why should image patches use bidirectional attention?', qKn: 'Image patches ಬಿಡಿ bidirectional attention ಏಕೆ ಬಳಸಬೇಕು?',
        opts: ['Images contain no spatial information', 'Diffusion predicts one categorical patch at a time', 'All patches belong to the same noisy image state and benefit from global context', 'Causal attention cannot process floating-point numbers'], correct: 2,
        optsKn: ['Images ಯಾವುದೇ spatial information ಹೊಂದಿಲ್ಲ', 'Diffusion ಒಂದೂ categorical patch ಅನ್ನೂ ಒಮ್ಮೆಗೆ predict ಮಾಡುತ್ತದೆ', 'ಎಲ್ಲಾ patches ಅದೇ noisy image state ಗೆ ಸೇರಿವೆ, global context ಇಂದ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತವೆ', 'Causal attention floating-point numbers ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed in this lesson: what did classifier-free guidance produce at w=1?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: w=1 ನಲ್ಲಿ classifier-free guidance ಏನೂ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['The unconditional prediction v_u', 'Exactly the conditional prediction v_c', 'Zero', 'An extrapolated value beyond v_c'], correct: 1,
        optsKn: ['Unconditional prediction v_u', 'ನಿಖರವಾಗಿ conditional prediction v_c', 'Zero', 'v_c ಮೀರಿದ extrapolated value'] },
      { q: 'Genuinely confirmed: what did the Euler step x_(t-dt)=x_t-dt*v compute for x_t=0.8, v=0.5, dt=0.1?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: x_t=0.8, v=0.5, dt=0.1 ಗಾಗಿ Euler step ಏನೂ ಲೆಕ್ಕಹಾಕಿತು?',
        opts: ['0.85', '0.80', '0.75', '0.50'], correct: 2,
        optsKn: ['0.85', '0.80', '0.75', '0.50'] },
      { q: 'What is the key MMDiT idea?', qKn: 'MMDiT ya ಮುಖ್ಯ idea ಏನೂ?',
        opts: ['Images are converted entirely into text tokens', 'Text and image never interact', 'Modality-specific transformations are combined with joint attention', 'MMDiT removes transformers from diffusion'], correct: 2,
        optsKn: ['Images ಸಂಪೂರ್ಣವಾಗಿ text tokens ಗೆ ಪರಿವರ್ತಿಸಲ್ಪಡುತ್ತವೆ', 'Text, image ಎಂದೂ interact ಆಗುವುದಿಲ್ಲ', 'Modality-specific transformations joint attention ಜೊತೆ ಸಂಯೋಜಿಸಲ್ಪಡುತ್ತವೆ', 'MMDiT diffusion ಇಂದ transformers ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'Why must text remain causal in the block-triangular mask?', qKn: 'Block-triangular mask ನಲ್ಲಿ text ಏಕೆ causal ಆಗಿ ಉಳಿಯಬೇಕು?',
        opts: ['Text embeddings are smaller than image embeddings', 'Otherwise future target tokens could leak into next-token prediction', 'Bidirectional attention is too expensive for text', 'Flow matching requires causal tokens'], correct: 1,
        optsKn: ['Text embeddings image embeddings ಗಿಂತ ಚಿಕ್ಕದೂ', 'ಇಲ್ಲದಿದ್ದರೆ future target tokens next-token prediction ಗೆ ಸೋರಿಕೆಯಾಗಬಹುದು', 'Bidirectional attention text ಗೆ ಬಹಳ ದುಬಾರಿ', 'Flow matching causal tokens ಬೇಡುತ್ತದೆ'] },
    ] } },
  ],
};
