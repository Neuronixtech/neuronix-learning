const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b32149c'; // Module 237: Transfusion

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Transfusion: Autoregressive Text + Diffusion Image in One Transformer (Part 1) — Foundations: One Transformer, Two Objectives',
  titleKn: 'Transfusion (Part 1) — Foundations: One Transformer, Two Objectives',
  desc: 'Genuinely compute the flow-matching interpolation path and velocity target that Transfusion uses for continuous image patches, confirming why it avoids the VQ quantization bottleneck that Chameleon, Emu3, and Show-o all depend on.',
  descKn: 'Transfusion continuous image patches ಗೆ ಬಳಸುವ flow-matching interpolation path ಮತ್ತೆ velocity target ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, Chameleon, Emu3, Show-o ಎಲ್ಲವೂ ಅವಲಂಬಿಸಿರುವ VQ quantization bottleneck ಅನ್ನೂ ಇದೂ ಏಕೆ ತಪ್ಪಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain the quantization bottleneck: why replacing a continuous feature with its nearest codebook entry always loses some information.',
    'Genuinely confirm the flow path x_t=(1-t)x0+t*epsilon at its t=0 and t=1 endpoints using real numbers.',
    'Genuinely derive and confirm the velocity target v*=epsilon-x0 by differentiating the flow path.',
    'Explain why Transfusion uses two different loss functions (cross-entropy for text, MSE/flow for images) rather than one unified loss.',
    'Explain how one shared transformer parameter set theta receives gradients from both L_text and L_image simultaneously.',
    'Compare Transfusion\'s "unify backbone, not representation" philosophy against Chameleon/Emu3\'s "unify representation and loss" philosophy.',
  ],
  objectivesKn: [
    'Quantization bottleneck ವಿವರಿಸಿ: continuous feature ಅನ್ನೂ ಅದರ ಹತ್ತಿರದ codebook entry ಇಂದ ಬದಲಾಯಿಸುವುದೂ ಯಾವಾಗಲೂ ಕೆಲವು information ಏಕೆ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ.',
    'ನಿಜ numbers ಬಳಸಿ flow path x_t=(1-t)x0+t*epsilon ಅನ್ನೂ ಅದರ t=0 ಮತ್ತೆ t=1 endpoints ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Flow path ಅನ್ನೂ differentiate ಮಾಡುವ ಮೂಲಕ velocity target v*=epsilon-x0 ಅನ್ನೂ ನಿಜವಾಗಿ derive ಮಾಡಿ ದೃಢಪಡಿಸಿ.',
    'Transfusion ಒಂದೇ unified loss ಬದಲಿಗೆ ಎರಡೂ ಭಿನ್ನ loss functions ಏಕೆ ಬಳಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೇ shared transformer parameter set theta L_text ಮತ್ತೆ L_image ಎರಡರಿಂದಲೂ ಏಕಕಾಲದಲ್ಲಿ gradients ಹೇಗೆ ಪಡೆಯುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Transfusion ya "unify backbone, not representation" philosophy ಅನ್ನೂ Chameleon/Emu3 ya "unify representation and loss" philosophy ಜೊತೆ ಹೋಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Transfusion: Autoregressive Text + Diffusion Image in One Transformer (Part 1)', textKn: 'Transfusion: Autoregressive Text + Diffusion Image (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python (stdlib only) · Prerequisites: Chameleon, Emu3 (Modules 235-236) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn · Language: Python (stdlib only) · Prerequisites: Chameleon, Emu3 (Modules 235-236) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Flow Matching,Two-Loss Training,Continuous Images,Part 1 of 3',
      pillsKn: 'Python,Flow Matching,Two-Loss Training,Continuous Images,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Quantization Bottleneck Transfusion Avoids', textKn: 'Transfusion ತಪ್ಪಿಸುವ Quantization Bottleneck', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Every Prior Model in This Sequence Paid a Quantization Cost', headingKn: 'ಈ Sequence ya ಹಿಂದಿನ ಪ್ರತಿ Model Quantization Cost ಪಾವತಿಸಿತು',
      bodyEn: 'Chameleon, Emu3, and (as the next module will show) Show-o all replace a continuous image feature z with the nearest codebook vector c_k = argmin_k ||z-c_k||^2, discarding the difference z-c_k permanently. Transfusion asks: why quantize images into a finite vocabulary at all, if the transformer can instead process continuous image patches directly, the way a Vision Transformer does?',
      bodyKn: 'Chameleon, Emu3, (ಮುಂದಿನ module ತೋರಿಸುವಂತೆ) Show-o ಎಲ್ಲವೂ ಒಂದೂ continuous image feature z ಅನ್ನೂ ಹತ್ತಿರದ codebook vector ಇಂದ ಬದಲಾಯಿಸುತ್ತವೆ, ವ್ಯತ್ಯಾಸವನ್ನೂ ಶಾಶ್ವತವಾಗಿ ಬಿಡುತ್ತವೆ. Transfusion ಕೇಳುತ್ತದೆ: images ಅನ್ನೂ ಒಂದೂ finite vocabulary ಗೆ quantize ಮಾಡುವುದೇ ಏಕೆ ಬೇಕು?' } },

    { type: 'heading', data: { textEn: 'Flow Matching: Interpolating Between Data and Noise', textKn: 'Flow Matching: Data ಮತ್ತೆ Noise ನಡುವೆ Interpolating', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_flow.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The flow-matching interpolation path x_t=(1-t)x0+t*epsilon, genuinely evaluated at its two endpoints and at an intermediate t=0.3, for a single scalar toy "pixel" value.',
      descKn: 'flow-matching interpolation path x_t=(1-t)x0+t*epsilon, ಒಂದೂ scalar toy "pixel" value ಗಾಗಿ ಅದರ ಎರಡೂ endpoints ಮತ್ತೆ intermediate t=0.3 ನಲ್ಲಿ ನಿಜವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲಾಗಿದೆ.',
      code: "x0 = 0.6   # clean data value\neps = 0.9  # sampled noise value\n\ndef x_t(t):\n    return (1 - t) * x0 + t * eps\n\nprint('x_t at t=0 (should equal x0):', x_t(0))\nprint('x_t at t=1 (should equal eps):', x_t(1))\nprint('x_t at t=0.3:', x_t(0.3))\n\nvelocity_target = eps - x0\nprint('velocity target (eps - x0):', velocity_target)" } },
    { type: 'output', data: { output: "x_t at t=0 (should equal x0): 0.6\nx_t at t=1 (should equal eps): 0.9\nx_t at t=0.3: 0.69\nvelocity target (eps - x0): 0.30000000000000004" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Both Endpoints Match Exactly, and 0.3 Is the Correct Interpolated Value', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ Endpoints ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: x_t(0)=0.6 exactly equals x0, and x_t(1)=0.9 exactly equals epsilon, matching the lesson\'s claimed endpoint behavior. At t=0.3, x_t=0.69, which is genuinely 30% of the way from 0.6 to 0.9 (0.6 + 0.3*(0.9-0.6) = 0.69). The velocity target 0.30000000000000004 is exactly eps-x0 up to standard floating-point representation error -- not a bug, just IEEE 754 arithmetic.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: x_t(0)=0.6 ನಿಖರವಾಗಿ x0 ಗೆ ಸಮಾನ, x_t(1)=0.9 ನಿಖರವಾಗಿ epsilon ಗೆ ಸಮಾನ. t=0.3 ನಲ್ಲಿ, x_t=0.69, ಇದೂ 0.6 ಇಂದ 0.9 ಗೆ 30% ದಾರಿ. velocity target 0.30000000000000004 standard floating-point representation error ವರೆಗೆ ನಿಖರವಾಗಿ eps-x0 -- bug ಅಲ್ಲ, IEEE 754 arithmetic.' } },

    { type: 'heading', data: { textEn: 'Deriving the Velocity Target', textKn: 'Velocity Target ಅನ್ನೂ Derive ಮಾಡುವುದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Differentiating the Linear Path', headingKn: 'Linear Path ಅನ್ನೂ Differentiating',
      bodyEn: 'Starting from x_t=(1-t)x0+t*eps, expand: x_t = x0 - t*x0 + t*eps = x0 + t*(eps-x0). Differentiating with respect to t: dx_t/dt = eps-x0, a constant that does not depend on t at all -- this is exactly why the genuinely-computed velocity_target above (0.3) is the same regardless of which t the model is queried at; the model still needs t as an input because it must recognize how corrupted the current x_t is, but the TARGET velocity along this particular straight-line path is constant.',
      bodyKn: 'x_t=(1-t)x0+t*eps ಇಂದ ಪ್ರಾರಂಭಿಸಿ, ವಿಸ್ತರಿಸಿ: x_t = x0 + t*(eps-x0). t ಗೆ ಸಂಬಂಧಿಸಿ differentiate ಮಾಡಿ: dx_t/dt = eps-x0, ಒಂದೂ constant t ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿಲ್ಲ -- ಇದೂ ನಿಖರವಾಗಿ ಮೇಲಿನ velocity_target ಏಕೆ t ಯಾವುದೇ ಇರಲಿ ಒಂದೇ ಆಗಿ ಉಳಿಯುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ಕಾರಣ.' } },

    { type: 'heading', data: { textEn: 'Two Prediction Problems, One Transformer', textKn: 'ಎರಡೂ Prediction Problems, ಒಂದೇ Transformer', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_losses.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing toy text cross-entropy loss and image flow MSE loss side by side, then combining them into the single scalar Transfusion actually backpropagates.',
      descKn: 'toy text cross-entropy loss ಮತ್ತೆ image flow MSE loss ಅನ್ನೂ ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ನಂತರ ಅವುಗಳನ್ನೂ Transfusion ನಿಜವಾಗಿ backpropagate ಮಾಡುವ ಒಂದೇ scalar ಗೆ ಸಂಯೋಜಿಸುವುದು.',
      code: "import math\n\n# Toy text cross-entropy: -log(P(correct token))\np_correct = 0.42\ntext_loss = -math.log(p_correct)\nprint('text_loss:', round(text_loss, 4))\n\n# Toy image flow MSE over 4 predicted vs target velocities\npredicted_v = [0.31, -0.12, 0.58, 0.02]\ntarget_v =    [0.30,  0.00, 0.55, 0.05]\nimage_loss = sum((p - t) ** 2 for p, t in zip(predicted_v, target_v)) / len(predicted_v)\nprint('image_loss:', round(image_loss, 6))\n\ntotal_loss = text_loss + image_loss\nprint('total_loss:', round(total_loss, 4))" } },
    { type: 'output', data: { output: "text_loss: 0.8675\nimage_loss: 0.004075\ntotal_loss: 0.8716" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Text Loss Can Dwarf Image Loss in Raw Magnitude', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Text Loss Raw Magnitude ನಲ್ಲಿ Image Loss ಅನ್ನೂ ಕುಬ್ಜಗೊಳಿಸಬಹುದು',
      bodyEn: 'Genuinely confirmed: with a well-predicted velocity (small residuals), image_loss (0.004075) is roughly 213x smaller than text_loss (0.8675) in this example, meaning total_loss=L_text+L_image is almost entirely determined by the text term here. This concretely illustrates why real Transfusion implementations need loss weights (lambda_text, lambda_image) -- without them, one objective can numerically dominate gradient updates to the shared backbone regardless of how well each task is actually being learned.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಚೆನ್ನಾಗಿ predict ಮಾಡಿದ velocity ಜೊತೆ, image_loss (0.004075) text_loss (0.8675) ಗಿಂತ ಸುಮಾರು 213x ಚಿಕ್ಕದೂ, ಅಂದರೆ total_loss ಇಲ್ಲಿ ಬಹುತೇಕ ಸಂಪೂರ್ಣವಾಗಿ text term ಇಂದ ನಿರ್ಧರಿಸಲ್ಪಡುತ್ತದೆ. ಇದೂ ನಿಜ Transfusion implementations ಗೆ loss weights ಏಕೆ ಬೇಕು ಎಂದೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ವಿವರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why the Shared Backbone Receives Gradients From Both Losses', textKn: 'Shared Backbone ಏಕೆ ಎರಡೂ Losses ಇಂದ Gradients ಪಡೆಯುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Not Two Transformers Stitched Together', headingKn: 'ಎರಡೂ Transformers ಒಟ್ಟಿಗೆ Stitch ಮಾಡಿಲ್ಲ',
      bodyEn: 'The combined objective L = lambda_text*L_text + lambda_image*L_image is differentiated with respect to ONE shared parameter set theta: grad_theta(L) = lambda_text*grad_theta(L_text) + lambda_image*grad_theta(L_image). Both gradient terms flow into the same weight matrices -- this is the literal mathematical meaning of "one shared transformer body," not merely an architecture diagram convention.',
      bodyKn: 'Combined objective L = lambda_text*L_text + lambda_image*L_image ಅನ್ನೂ ಒಂದೇ shared parameter set theta ಗೆ ಸಂಬಂಧಿಸಿ differentiate ಮಾಡಲಾಗುತ್ತದೆ. ಎರಡೂ gradient terms ಅದೇ weight matrices ಗೆ ಹರಿಯುತ್ತವೆ -- ಇದೂ "ಒಂದೇ shared transformer body" ya ಅಕ್ಷರಶಃ mathematical ಅರ್ಥ.' } },

    { type: 'heading', data: { textEn: 'Experiment: Loss-Weighting Changes What the Backbone Actually Learns From', textKn: 'Experiment: Loss-Weighting Backbone ಏನೂ ಇಂದ ಕಲಿಯುತ್ತದೆ ಎಂಬುದನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_losses.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing image_loss\'s share of total_loss under three different (lambda_text, lambda_image) weightings, using the same text_loss=0.8675 and image_loss=0.004075 from above.',
      descKn: 'ಮೂರೂ ಭಿನ್ನ (lambda_text, lambda_image) weightings ಅಡಿಯಲ್ಲಿ total_loss ya image_loss ya share ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು.',
      code: "text_loss = 0.8675\nimage_loss = 0.004075\n\nfor lam_t, lam_i in [(1.0, 1.0), (1.0, 50.0), (0.1, 1.0)]:\n    total = lam_t * text_loss + lam_i * image_loss\n    image_share = 100 * lam_i * image_loss / total\n    print(f'lambda_text={lam_t}, lambda_image={lam_i} -> total={round(total,4)}, image share={round(image_share,2)}%')" } },
    { type: 'output', data: { output: "lambda_text=1.0, lambda_image=1.0 -> total=0.8716, image share=0.47%\nlambda_text=1.0, lambda_image=50.0 -> total=1.0713, image share=19.02%\nlambda_text=0.1, lambda_image=1.0 -> total=0.0908, image share=4.49%" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Equal Weights Genuinely Leave Image Contributing Under 1%', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Equal Weights Image Contribution ಅನ್ನೂ 1% ಗಿಂತ ಕಡಿಮೆ ಬಿಡುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: with lambda_text=lambda_image=1.0 (the naive default), image_loss contributes only 0.47% of total_loss -- the shared backbone\'s gradient is genuinely dominated by text almost entirely. Boosting lambda_image to 50 raises the image share to 19.02%, while shrinking lambda_text to 0.1 raises it to 4.49% through a different mechanism (shrinking the denominator rather than growing the numerator). This is real evidence for why loss-weighting is an active design decision, not an afterthought, in two-objective architectures like Transfusion.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: lambda_text=lambda_image=1.0 ಜೊತೆ, image_loss total_loss ya ಕೇವಲ 0.47% ಕೊಡುಗೆ ನೀಡುತ್ತದೆ -- shared backbone ya gradient ನಿಜವಾಗಿ ಬಹುತೇಕ ಸಂಪೂರ್ಣವಾಗಿ text ಇಂದ ಪ್ರಾಬಲ್ಯ ಹೊಂದಿದೆ. lambda_image ಅನ್ನೂ 50 ಗೆ ಹೆಚ್ಚಿಸುವುದೂ image share ಅನ್ನೂ 19.02% ಗೆ ಏರಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Chameleon/Emu3 vs Transfusion: Where Unification Happens', captionKn: 'Chameleon/Emu3 vs Transfusion: Unification ಎಲ್ಲಿ ಆಗುತ್ತದೆ',
      rows: "Property|Chameleon / Emu3|Transfusion\nImage representation|Discrete VQ tokens|Continuous patches/latents\nText objective|Cross-entropy NTP|Cross-entropy NTP\nImage objective|Cross-entropy NTP (same as text)|MSE / flow matching (different from text)\nVQ tokenizer required?|Yes|No\nWhat is unified|Representation AND loss|Only the transformer backbone" } },

    { type: 'heading', data: { textEn: 'Why the Time Variable t Must Enter the Image Embedding', textKn: 'Time Variable t Image Embedding ಗೆ ಏಕೆ ಪ್ರವೇಶಿಸಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Same Noisy-Looking Vector Can Mean Different Things at Different t', headingKn: 'ಅದೇ Noisy Vector Different t ಗಳಲ್ಲಿ Different Things ಅರ್ಥೈಸಬಹುದು',
      bodyEn: 'x_t alone is ambiguous: a moderately noisy x_t could arise from a clean image at low t or a very different clean image at high t combined with different noise. The model therefore needs an explicit timestep embedding alongside the patch embedding: image_hidden = patch_projection(x_t) + time_projection(timestep_embedding(t)), so the network knows where along the noise-to-data trajectory the current input sits.',
      bodyKn: 'x_t ಒಂಟಿಯಾಗಿ ಅಸ್ಪಷ್ಟ: ಒಂದೂ ಮಧ್ಯಮ noisy x_t ಕಡಿಮೆ t ಯಲ್ಲಿ ಒಂದೂ clean image ಇಂದ ಅಥವಾ ಹೆಚ್ಚಿನ t ಯಲ್ಲಿ ಭಿನ್ನ noise ಜೊತೆ ಸಂಪೂರ್ಣ ಭಿನ್ನ clean image ಇಂದ ಉದ್ಭವಿಸಬಹುದು. ಆದ್ದರಿಂದ model ಗೆ patch embedding ಜೊತೆ ಒಂದೂ ಸ್ಪಷ್ಟ timestep embedding ಬೇಕು.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the flow path x_t=(1-t)x0+t*eps genuinely equals x0 at t=0 and eps at t=1, with correct linear interpolation in between (0.69 at t=0.3)\n• Genuinely derived and confirmed: differentiating the linear path gives a constant velocity target eps-x0, independent of t\n• Genuinely confirmed: a well-predicted image flow loss (0.004075) can be roughly 213x smaller in raw magnitude than text cross-entropy loss (0.8675) -- motivating explicit loss weighting in real implementations\n• The shared backbone receives literal gradient contributions from both L_text and L_image through the same parameter matrices -- not a diagram convention but the actual chain-rule mathematics\n• Transfusion unifies the transformer backbone while deliberately keeping representation and loss different per modality, the opposite bet from Chameleon/Emu3',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: flow path x_t=(1-t)x0+t*eps t=0 ನಲ್ಲಿ x0 ಗೆ, t=1 ನಲ್ಲಿ eps ಗೆ ನಿಜವಾಗಿ ಸಮಾನ\n• ನಿಜವಾಗಿ derive ಮಾಡಿ ದೃಢಪಡಲಾಗಿದೆ: linear path differentiate ಮಾಡುವುದೂ constant velocity target eps-x0 ನೀಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಚೆನ್ನಾಗಿ predict ಮಾಡಿದ image flow loss text cross-entropy loss ಗಿಂತ ಸುಮಾರು 213x ಚಿಕ್ಕದಾಗಿರಬಹುದು\n• Shared backbone ಅಕ್ಷರಶಃ gradient contributions ಎರಡೂ losses ಇಂದ ಪಡೆಯುತ್ತದೆ\n• Transfusion transformer backbone ಅನ್ನೂ unify ಮಾಡುತ್ತದೆ ಆದರೆ representation ಮತ್ತೆ loss ಅನ್ನೂ ಪ್ರತಿ modality ಗೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಭಿನ್ನವಾಗಿ ಇಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Not Two Separate Transformers Glued Together', headingKn: 'ಎರಡೂ ಪ್ರತ್ಯೇಕ Transformers ಒಟ್ಟಿಗೆ ಅಂಟಿಸಿಲ್ಲ',
      bodyEn: 'It is tempting to picture Transfusion as "a text transformer plus a diffusion transformer," but that misreads the architecture: it is one transformer body T_theta(X) whose output is routed to different heads depending on position -- text positions go through an LM head into cross-entropy, image positions go through a flow head into MSE. The routing happens at the OUTPUT, not by duplicating the backbone.',
      bodyKn: 'Transfusion ಅನ್ನೂ "text transformer plus diffusion transformer" ಎಂದೂ ಕಲ್ಪಿಸುವುದೂ ಆಕರ್ಷಕ, ಆದರೆ ಅದೂ architecture ಅನ್ನೂ ತಪ್ಪಾಗಿ ಓದುತ್ತದೆ: ಇದೂ ಒಂದೇ transformer body T_theta(X), ಔಟ್ಪುಟ್ position ಆಧರಿಸಿ ಭಿನ್ನ heads ಗೆ route ಆಗುತ್ತದೆ. Routing OUTPUT ನಲ್ಲಿ ಆಗುತ್ತದೆ, backbone duplicate ಮಾಡುವ ಮೂಲಕ ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a multimodal model generates a photorealistic image without visible blocky artifacts, a Transfusion-style continuous representation genuinely avoids the VQ quantization step entirely, sidestepping the tokenizer-ceiling problem this lesson series has repeatedly identified in Chameleon and Emu3.',
      bodyKn: 'ಒಂದೂ multimodal model ಗೋಚರ blocky artifacts ಇಲ್ಲದೆ ಒಂದೂ photorealistic image ಉತ್ಪಾದಿಸಿದಾಗ, Transfusion-style continuous representation VQ quantization step ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s loss-magnitude comparison: engineers choosing Transfusion accept the extra complexity of loss balancing (lambda_text, lambda_image) in exchange for removing an entire failure mode -- lossy visual quantization -- that architectures like Chameleon must live with permanently.',
      bodyKn: 'ಈ lesson ya loss-magnitude comparison ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Transfusion ಆಯ್ಕೆ ಮಾಡುವ engineers loss balancing ya ಹೆಚ್ಚುವರಿ ಸಂಕೀರ್ಣತೆಯನ್ನೂ ಒಪ್ಪಿಕೊಳ್ಳುತ್ತಾರೆ, ಪ್ರತಿಯಾಗಿ lossy visual quantization ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Transfusion (Meta, 2024) reported training a single 7B transformer on interleaved text and image data using exactly this two-loss recipe, showing it can match or exceed comparable Chameleon-style discrete-token approaches on image-generation benchmarks while avoiding VQ tokenization.',
      bodyKn: 'ನಿಜ Transfusion (Meta, 2024) ಒಂದೇ 7B transformer ಅನ್ನೂ interleaved text, image data ಮೇಲೆ ನಿಖರವಾಗಿ ಈ two-loss recipe ಬಳಸಿ ತರಬೇತಿ ನೀಡಿತು ಎಂದೂ ವರದಿ ಮಾಡಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 2', headingKn: 'Part 2 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 2 will explain the mechanism that lets text and image tokens coexist safely in one sequence: the block-triangular attention mask, where text stays causal but image patches within one image block attend to each other bidirectionally, plus classifier-free guidance and Euler sampling for flow-based image generation.',
      bodyKn: 'Part 2 text ಮತ್ತೆ image tokens ಒಂದೂ sequence ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಒಟ್ಟಿಗೆ ಇರಲು ಅನುಮತಿಸುವ mechanism ಅನ್ನೂ ವಿವರಿಸುತ್ತದೆ: block-triangular attention mask, CFG, Euler sampling.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is Transfusion\'s main architectural idea?', qKn: 'Transfusion ya ಮುಖ್ಯ architectural idea ಏನೂ?',
        opts: ['Convert text into pixels', 'Convert every modality into VQ tokens', 'Use one transformer with NTP for text and diffusion/flow loss for continuous images', 'Train completely separate text and image transformers'], correct: 2,
        optsKn: ['Text ಅನ್ನೂ pixels ಗೆ ಪರಿವರ್ತಿಸಿ', 'ಪ್ರತಿ modality ಅನ್ನೂ VQ tokens ಗೆ ಪರಿವರ್ತಿಸಿ', 'Text ಗೆ NTP ಮತ್ತೆ continuous images ಗೆ diffusion/flow loss ಜೊತೆ ಒಂದೇ transformer ಬಳಸಿ', 'ಸಂಪೂರ್ಣ ಪ್ರತ್ಯೇಕ text, image transformers ತರಬೇತಿ ನೀಡಿ'] },
      { q: 'Genuinely confirmed in this lesson: what did x_t=(1-t)x0+t*eps genuinely evaluate to at t=0?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: x_t=(1-t)x0+t*eps t=0 ನಲ್ಲಿ ನಿಜವಾಗಿ ಏನಿಗೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿತು?',
        opts: ['epsilon (pure noise)', 'x0 (clean data) exactly', 'Zero', 'The velocity target'], correct: 1,
        optsKn: ['Epsilon (pure noise)', 'x0 (clean data) ನಿಖರವಾಗಿ', 'Zero', 'Velocity target'] },
      { q: 'For x_t=(1-t)x0+t*eps, what velocity should the model learn?', qKn: 'x_t=(1-t)x0+t*eps ಗೆ, model ಯಾವ velocity ಕಲಿಯಬೇಕು?',
        opts: ['x0+eps', 'x0-eps', 'eps-x0', 't*eps'], correct: 2,
        optsKn: ['x0+eps', 'x0-eps', 'eps-x0', 't*eps'] },
      { q: 'Genuinely confirmed: in this lesson\'s worked example, roughly how much smaller was the image flow loss than the text cross-entropy loss?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ lesson ya worked example ನಲ್ಲಿ, image flow loss text cross-entropy loss ಗಿಂತ ಸುಮಾರು ಎಷ್ಟೂ ಚಿಕ್ಕದೂ?',
        opts: ['About 2x', 'About 15x', 'About 213x', 'About the same'], correct: 2,
        optsKn: ['ಸುಮಾರು 2x', 'ಸುಮಾರು 15x', 'ಸುಮಾರು 213x', 'ಸುಮಾರು ಒಂದೇ'] },
      { q: 'Which statement best distinguishes Chameleon from Transfusion?', qKn: 'Chameleon ಅನ್ನೂ Transfusion ಇಂದ ಯಾವ statement ಚೆನ್ನಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ?',
        opts: ['Chameleon cannot process text', 'Transfusion has separate transformers for each modality', 'Chameleon unifies modalities into discrete tokens and NTP; Transfusion shares the backbone while retaining different modality-specific objectives', 'Transfusion converts images into text before generation'], correct: 2,
        optsKn: ['Chameleon text ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'Transfusion ಪ್ರತಿ modality ಗೆ ಪ್ರತ್ಯೇಕ transformers ಹೊಂದಿದೆ', 'Chameleon modalities ಅನ್ನೂ discrete tokens, NTP ಗೆ unify ಮಾಡುತ್ತದೆ; Transfusion backbone ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ ಆದರೆ ಭಿನ್ನ objectives ಇಡುತ್ತದೆ', 'Transfusion images ಅನ್ನೂ text ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
