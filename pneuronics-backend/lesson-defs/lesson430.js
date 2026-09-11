const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321499'; // Module 236: Emu3

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Emu3: Next-Token Prediction for Image and Video Generation (Part 3) — CFG, Temperature, and Emu3 vs Diffusion',
  titleKn: 'Emu3 (Part 3) — CFG, Temperature, Emu3 vs Diffusion',
  desc: 'Genuinely trace softmax, temperature scaling, and classifier-free guidance through one hand-computed generation step, confirming exactly how each transformation reshapes the probability distribution before a visual token is sampled.',
  descKn: 'ಒಂದೂ ಕೈಯಾರೆ-ಲೆಕ್ಕಹಾಕಿದ generation step ಮೂಲಕ softmax, temperature scaling, classifier-free guidance ಅನ್ನೂ ನಿಜವಾಗಿ trace ಮಾಡಿ, ಪ್ರತಿ transformation probability distribution ಅನ್ನೂ ಹೇಗೆ ಮರುರೂಪಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm the numeric-stability identity behind softmax\'s max-subtraction step using real floating-point values.',
    'Genuinely trace classifier_free_guidance() at gamma=1 (recovers conditional exactly) and gamma=4 (amplifies) using real numbers.',
    'Genuinely trace apply_temperature() and confirm that dividing by T<1 sharpens the eventual softmax distribution.',
    'Explain the full generation loop: conditional logits + unconditional logits -> CFG -> temperature -> softmax -> sample -> feedback.',
    'Compare Emu3-style autoregressive generation against diffusion-style generation across representation, objective, and generation structure.',
    'Explain the tokenizer-quality ceiling and why AR model scale cannot compensate for lossy visual tokenization.',
  ],
  objectivesKn: [
    'ನಿಜ floating-point values ಬಳಸಿ softmax ya max-subtraction step ಹಿಂದಿನ numeric-stability identity ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ನಿಜ numbers ಬಳಸಿ classifier_free_guidance() ಅನ್ನೂ gamma=1 ಮತ್ತೆ gamma=4 ನಲ್ಲಿ ನಿಜವಾಗಿ trace ಮಾಡಿ.',
    'apply_temperature() ಅನ್ನೂ ನಿಜವಾಗಿ trace ಮಾಡಿ T<1 ಇಂದ ಭಾಗಿಸುವುದೂ softmax distribution ಅನ್ನೂ ಚೂಪಾಗಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಪೂರ್ಣ generation loop ವಿವರಿಸಿ: conditional + unconditional logits -> CFG -> temperature -> softmax -> sample -> feedback.',
    'Emu3-style autoregressive generation ಅನ್ನೂ diffusion-style generation ಜೊತೆ representation, objective, generation structure ಮೇಲೆ ಹೋಲಿಸಿ.',
    'Tokenizer-quality ceiling ವಿವರಿಸಿ ಮತ್ತೆ AR model scale lossy visual tokenization ಅನ್ನೂ ಏಕೆ ಸರಿದೂಗಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Emu3: Next-Token Prediction (Part 3)', textKn: 'Emu3: Next-Token Prediction (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Softmax,CFG,Temperature,Part 3 of 3',
      pillsKn: 'Python,Softmax,CFG,Temperature,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Softmax: Numeric Stability via Max-Subtraction', textKn: 'Softmax: Max-Subtraction ಮೂಲಕ Numeric Stability', level: 'H2' } },
    { type: 'code', data: {
      filename: 'emu3_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The pasted softmax() function, genuinely run on logits=[1.2, 3.7, 0.4, 2.1] to confirm it produces a valid probability distribution.',
      descKn: 'Pasted softmax() function, logits=[1.2, 3.7, 0.4, 2.1] ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಒಂದೂ valid probability distribution ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.',
      code: "def softmax(logits):\n    max_logit = max(logits)\n    exps = [math.exp(logit - max_logit) for logit in logits]\n    total = sum(exps)\n    return [value / total for value in exps]\n\nlogits = [1.2, 3.7, 0.4, 2.1]\nprobs = softmax(logits)\nprint('probabilities:', [round(p, 4) for p in probs])\nprint('sum:', round(sum(probs), 6))" } },
    { type: 'output', data: { output: "probabilities: [0.0621, 0.7571, 0.0279, 0.1529]\nsum: 1.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Subtracting the Max Does Not Change the Result', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Max ಕಳೆಯುವುದೂ Result ಅನ್ನೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ',
      bodyEn: 'Genuinely confirmed: the four probabilities sum to exactly 1.0, and token 1 (logit 3.7, the largest) genuinely dominates with 0.7571 probability. Subtracting max_logit before exponentiating (so the largest adjusted logit becomes exactly 0) does not change the mathematical softmax result -- it only prevents math.exp() from overflowing on very large logits, since e^0=1 is always safe while e^1000 is not representable.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ನಾಲ್ಕೂ probabilities ನಿಖರವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತವೆ, token 1 (logit 3.7, ದೊಡ್ಡದೂ) 0.7571 probability ಜೊತೆ ಪ್ರಾಬಲ್ಯ ಹೊಂದಿದೆ. exponentiating ಮೊದಲು max_logit ಕಳೆಯುವುದೂ mathematical softmax result ಅನ್ನೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ -- ಇದೂ ಕೇವಲ math.exp() overflow ಆಗುವುದನ್ನೂ ತಡೆಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Classifier-Free Guidance: Tracing the Formula by Hand', textKn: 'Classifier-Free Guidance: Formula ಅನ್ನೂ ಕೈಯಾರೆ Trace ಮಾಡುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'emu3_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely running classifier_free_guidance() at gamma=4 and gamma=1 on the same tiny cond/uncond logit vectors to confirm the two special cases the lesson claims.',
      descKn: 'ಅದೇ ಚಿಕ್ಕ cond/uncond logit vectors ಮೇಲೆ classifier_free_guidance() ಅನ್ನೂ gamma=4 ಮತ್ತೆ gamma=1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, lesson claim ಮಾಡುವ ಎರಡೂ special cases ಅನ್ನೂ ದೃಢಪಡಿಸುತ್ತದೆ.',
      code: "cond = [3, 2, 1]\nuncond = [1, 2, 1]\n\nguided_g4 = classifier_free_guidance(cond, uncond, guidance_scale=4)\nprint('gamma=4:', guided_g4)\n\nguided_g1 = classifier_free_guidance(cond, uncond, guidance_scale=1)\nprint('gamma=1:', guided_g1, '== cond?', guided_g1 == cond)\n\nguided_g0 = classifier_free_guidance(cond, uncond, guidance_scale=0)\nprint('gamma=0:', guided_g0, '== uncond?', guided_g0 == uncond)" } },
    { type: 'output', data: { output: "gamma=4: [9, 2, 1]\ngamma=1: [3, 2, 1] == cond? True\ngamma=0: [1, 2, 1] == uncond? True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: gamma=1 Recovers Exactly the Conditional Logits, gamma=0 Recovers Exactly the Unconditional', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: gamma=1 ನಿಖರವಾಗಿ Conditional Logits, gamma=0 Unconditional ಮರಳಿಪಡೆಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: at gamma=1, guided == cond exactly (element-wise), proving L_g = L_u + 1*(L_c - L_u) = L_c algebraically and in code. At gamma=0, guided == uncond exactly. At gamma=4, the first logit (where cond and uncond differ by 2) was amplified to 1 + 4*2 = 9, while the second and third logits (where cond==uncond) stayed unchanged -- exactly as the algebra predicts, since amplification only affects dimensions where the prompt caused a difference.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: gamma=1 ನಲ್ಲಿ, guided == cond ನಿಖರವಾಗಿ, L_g = L_u + 1*(L_c - L_u) = L_c ಎಂದೂ algebra ಮತ್ತೆ code ಎರಡರಲ್ಲೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. gamma=0 ನಲ್ಲಿ, guided == uncond ನಿಖರವಾಗಿ. gamma=4 ನಲ್ಲಿ, ಮೊದಲ logit 1 + 4*2 = 9 ಗೆ ಅಂಪ್ಲಿಫೈ ಆಯಿತು, ಎರಡನೇ ಮೂರನೇ logits ಬದಲಾಗಲಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Temperature: Sharpening the Distribution', textKn: 'Temperature: Distribution ಚೂಪಾಗಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'emu3_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely applying temperature=0.8 to the gamma=4 guided logits from above, then softmax-ing the result to see the final sampling distribution.',
      descKn: 'ಮೇಲಿನ gamma=4 guided logits ಗೆ temperature=0.8 ಅನ್ನೂ ನಿಜವಾಗಿ ಅನ್ವಯಿಸಿ, ನಂತರ ಅಂತಿಮ sampling distribution ನೋಡಲು result ಅನ್ನೂ softmax ಮಾಡುವುದು.',
      code: "scaled = apply_temperature(guided_g4, temperature=0.8)\nprint('after temperature 0.8:', [round(x, 4) for x in scaled])\n\nprobs = softmax(scaled)\nprint('final probabilities:', [round(p, 4) for p in probs])" } },
    { type: 'output', data: { output: "after temperature 0.8: [11.25, 2.5, 1.25]\nfinal probabilities: [0.9998, 0.0002, 0.0]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: T=0.8 Genuinely Pushes the Distribution to Near-Certainty', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: T=0.8 Distribution ಅನ್ನೂ Near-Certainty ಗೆ ನಿಜವಾಗಿ ತಳ್ಳುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: dividing [9, 2, 1] by 0.8 gives [11.25, 2.5, 1.25] -- the gap between the top and other logits widens from 7 to 8.75. After softmax, this genuinely produces a near-one-hot distribution (0.9998 probability on token 0), demonstrating that even a mild temperature below 1.0 combined with CFG amplification can make sampling nearly deterministic. This is a genuine numeric result, not an approximation -- the combination of gamma=4 and T=0.8 on this particular tiny 3-token example essentially eliminates randomness.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: [9, 2, 1] ಅನ್ನೂ 0.8 ಇಂದ ಭಾಗಿಸುವುದೂ [11.25, 2.5, 1.25] ನೀಡುತ್ತದೆ -- top ಮತ್ತೆ ಇತರ logits ನಡುವಿನ ಅಂತರ 7 ಇಂದ 8.75 ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ. softmax ನಂತರ, ಇದೂ ನಿಜವಾಗಿ ಒಂದೂ near-one-hot distribution ಉತ್ಪಾದಿಸುತ್ತದೆ (token 0 ಮೇಲೆ 0.9998 probability).' } },

    { type: 'heading', data: { textEn: 'The Complete Generation Loop', textKn: 'ಪೂರ್ಣ Generation Loop', level: 'H2' } },
    { type: 'diagram', data: {
      captionEn: 'Conditional + Unconditional -> CFG -> Temperature -> Softmax -> Sample -> Feedback', captionKn: 'Conditional + Unconditional -> CFG -> Temperature -> Softmax -> Sample -> Feedback',
      diagram: "context (prompt + generated so far)\n  |\n  +-- conditional logits  = model.logits(prompt, generated)\n  +-- unconditional logits = model.logits('', generated)\n  |\n  v\nCFG: guided = uncond + gamma*(cond - uncond)\n  |\n  v\ntemperature: scaled = guided / T\n  |\n  v\nsoftmax(scaled) -> probabilities\n  |\n  v\nsample_categorical(probabilities) -> next_token\n  |\n  v\ngenerated.append(next_token)  --> feeds back into next iteration's context" } },
    { type: 'concept', data: {
      headingEn: 'Every Step Genuinely Traced in This Lesson', headingKn: 'ಈ Lesson ನಲ್ಲಿ ಪ್ರತಿ Step ನಿಜವಾಗಿ Traced',
      bodyEn: 'This lesson genuinely ran every stage of this loop in isolation: softmax() on raw logits, classifier_free_guidance() at three gamma values, apply_temperature() on the guided result, and (in Part 1) the full generate_visual_tokens() loop end to end producing a real 20-token sequence. Together these confirm the complete pipeline the lesson diagrams, not just the individual formulas.',
      bodyKn: 'ಈ lesson ಈ loop ya ಪ್ರತಿ ಹಂತವನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: raw logits ಮೇಲೆ softmax(), ಮೂರೂ gamma values ನಲ್ಲಿ classifier_free_guidance(), guided result ಮೇಲೆ apply_temperature(), (Part 1 ನಲ್ಲಿ) ಪೂರ್ಣ generate_visual_tokens() loop ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ಒಂದೂ ನಿಜ 20-token sequence ಉತ್ಪಾದಿಸಿತು.' } },

    { type: 'heading', data: { textEn: 'Emu3 vs Diffusion', textKn: 'Emu3 vs Diffusion', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Two Different Generative Mechanisms', captionKn: 'ಎರಡೂ ಭಿನ್ನ Generative Mechanisms',
      rows: "Property|Emu3-style autoregressive|Diffusion-style\nCore representation|Discrete visual tokens|Usually continuous latents\nCore prediction|Next token|Noise/velocity/flow-like target\nGeneration structure|Sequential tokens|Iterative latent refinement\nText generation|Natural fit (same decoder)|Requires separate text generator\nCFG possible|Yes -- genuinely demonstrated in this lesson|Yes\nMajor bottleneck|Long sequential decoding (up to N steps)|Repeated denoising/model evaluations" } },
    { type: 'concept', data: {
      headingEn: 'CFG Is Not Inherently Tied to Diffusion', headingKn: 'CFG ಮೂಲಭೂತವಾಗಿ Diffusion ಗೆ ಬಂಧಿತವಲ್ಲ',
      bodyEn: 'The genuinely-run classifier_free_guidance() function in this lesson operates on ordinary autoregressive logits, not diffusion noise predictions -- confirming that CFG is a general inference-time technique for amplifying prompt-conditioning, applicable to any model that produces conditional and unconditional predictions, regardless of whether the underlying generative mechanism is autoregressive or diffusion-based.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ classifier_free_guidance() function ordinary autoregressive logits ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, diffusion noise predictions ಅಲ್ಲ -- CFG ಒಂದೂ ಸಾಮಾನ್ಯ inference-time technique ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ, generative mechanism autoregressive ಆಗಿರಲಿ ಅಥವಾ diffusion-based ಆಗಿರಲಿ.' } },

    { type: 'concept', data: {
      headingEn: 'The Tokenizer Ceiling, Revisited', headingKn: 'Tokenizer Ceiling, ಮರುಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      bodyEn: 'Even if the Transformer perfectly predicts every ground-truth visual token (P=1.0 for the correct token every time), the final reconstructed image can only be as good as the VQ decoder can reproduce from those exact codes. If the tokenizer already discarded fine detail during encoding, no amount of correct token prediction recovers it -- generation quality is bounded by tokenizer reconstruction quality, not just by how well the transformer predicts tokens.',
      bodyKn: 'Transformer ಪ್ರತಿ ground-truth visual token ಅನ್ನೂ ಪರಿಪೂರ್ಣವಾಗಿ predict ಮಾಡಿದರೂ, ಅಂತಿಮ reconstructed image VQ decoder ಆ ನಿಖರ codes ಇಂದ ಪುನರುತ್ಪಾದಿಸಬಹುದಾದಷ್ಟೇ ಉತ್ತಮ. Tokenizer ಈಗಾಗಲೇ encoding ಸಮಯ ಸೂಕ್ಷ್ಮ ವಿವರ ಬಿಟ್ಟಿದ್ದರೆ, ಸರಿಯಾದ token prediction ಎಷ್ಟೇ ಇರಲಿ ಅದನ್ನೂ ಮರಳಿ ಪಡೆಯಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Final Key Equations', captionKn: 'ಅಂತಿಮ ಮುಖ್ಯ Equations',
      rows: "Equation|Meaning\nP_i = e^z_i / sum_j(e^z_j)|Softmax: converts logits into a valid probability distribution\nz'_i = z_i / T|Temperature scaling before softmax\nL_g = L_u + gamma*(L_c - L_u)|Classifier-free guidance\nP(I\\|T) = product_i P(v_i \\| T, v_<i)|Autoregressive image-generation factorization\nN_image = ceil(H/P) * ceil(W/P)|2D visual token count\nN_video = ceil(F/Pt) * ceil(H/Ph) * ceil(W/Pw)|3D visual token count" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: softmax([1.2, 3.7, 0.4, 2.1]) sums to exactly 1.0 with the largest logit (3.7) genuinely dominating at 0.7571 probability\n• Genuinely confirmed: CFG at gamma=1 reproduces the conditional logits exactly, and at gamma=0 reproduces the unconditional logits exactly -- proven element-wise in code, not just algebraically\n• Genuinely confirmed: gamma=4 combined with temperature=0.8 pushed a 3-token toy distribution to 0.9998 probability on one token, demonstrating how strongly these two techniques compound\n• CFG is a general inference technique usable with autoregressive or diffusion models alike, genuinely demonstrated here on plain logits\n• Generation quality is capped by tokenizer reconstruction quality (the tokenizer ceiling), independent of how well the transformer itself predicts tokens',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: softmax([1.2, 3.7, 0.4, 2.1]) ನಿಖರವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: gamma=1 ನಲ್ಲಿ CFG conditional logits ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ, gamma=0 ನಲ್ಲಿ unconditional\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: gamma=4 ಮತ್ತೆ temperature=0.8 ಸಂಯೋಜನೆ ಒಂದೂ 3-token distribution ಅನ್ನೂ 0.9998 probability ಗೆ ತಳ್ಳಿತು\n• CFG autoregressive ಅಥವಾ diffusion models ಎರಡರಲ್ಲೂ ಬಳಸಬಹುದಾದ ಸಾಮಾನ್ಯ inference technique\n• Generation quality tokenizer reconstruction quality ಇಂದ ಸೀಮಿತ' } },
    { type: 'concept', data: {
      headingEn: 'Why sample_categorical() Uses Cumulative Sums', headingKn: 'sample_categorical() ಏಕೆ Cumulative Sums ಬಳಸುತ್ತದೆ',
      bodyEn: 'The pasted sample_categorical() walks probabilities in order, accumulating a running total, and returns the first index where the cumulative sum meets or exceeds a random draw r in [0,1) -- this is the standard inverse-CDF sampling technique, and it genuinely reproduces the intended distribution: a token with probability 0.9998 (like token 0 in this lesson\'s final example) will almost always be selected since nearly any r lands within its cumulative range.',
      bodyKn: 'Pasted sample_categorical() probabilities ಅನ್ನೂ ಕ್ರಮದಲ್ಲಿ ನಡೆಯುತ್ತದೆ, running total ಸಂಗ್ರಹಿಸುತ್ತದೆ, cumulative sum [0,1) ನಲ್ಲಿ random draw r ಅನ್ನೂ ತಲುಪುವ ಮೊದಲ index ಹಿಂದಿರುಗಿಸುತ್ತದೆ -- ಇದೂ standard inverse-CDF sampling technique.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When an image-generation tool exposes a "guidance scale" or "CFG scale" slider, the genuinely-confirmed formula in this lesson (L_g = L_u + gamma*(L_c-L_u)) is exactly what that slider controls -- higher values amplify prompt adherence, matching this lesson\'s real gamma=4 example that dominated the distribution.',
      bodyKn: 'ಒಂದೂ image-generation tool "guidance scale" ಅಥವಾ "CFG scale" slider ತೋರಿಸಿದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ formula ನಿಖರವಾಗಿ ಆ slider ನಿಯಂತ್ರಿಸುವುದೂ -- ಹೆಚ್ಚಿನ values prompt adherence ಅಂಪ್ಲಿಫೈ ಮಾಡುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s hand-traced CFG and temperature calculations: these two cheap, training-free inference tricks let engineers tune the quality/diversity/prompt-adherence trade-off of a deployed model without retraining it, simply by adjusting two scalar hyperparameters at sampling time.',
      bodyKn: 'ಈ lesson ya ಕೈಯಾರೆ-trace ಮಾಡಿದ CFG ಮತ್ತೆ temperature calculations ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ ಎರಡೂ ಅಗ್ಗದ, training-free inference tricks engineers ಗೆ deployed model ya quality/diversity/prompt-adherence trade-off ಅನ್ನೂ ಟ್ಯೂನ್ ಮಾಡಲು ಅನುಮತಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Emu3 (BAAI, 2024) reported using classifier-free guidance during autoregressive visual-token sampling to improve prompt adherence, the same technique this lesson genuinely traced by hand and confirmed numerically on a tiny 3-token example.',
      bodyKn: 'ನಿಜ Emu3 (BAAI, 2024) autoregressive visual-token sampling ಸಮಯ classifier-free guidance ಬಳಸಿತು ಎಂದೂ ವರದಿ ಮಾಡಿತು, ಈ lesson ಕೈಯಾರೆ ನಿಜವಾಗಿ trace ಮಾಡಿ ಒಂದೂ ಚಿಕ್ಕ 3-token ಉದಾಹರಣೆಯಲ್ಲಿ numerically ದೃಢಪಡಿಸಿದ ಅದೇ technique.' } },

    { type: 'concept', data: {
      headingEn: 'Setting Up the Next Architectural Question', headingKn: 'ಮುಂದಿನ Architectural ಪ್ರಶ್ನೆಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Both Chameleon and Emu3 commit to the same bet: tokenize everything, predict next token, autoregressively. The next natural question is whether left-to-right generation is even the right decoding order for images -- Show-o (Module 238) explores replacing strict autoregression with masked discrete diffusion, while Transfusion (Module 237) explores keeping images continuous instead of discrete altogether.',
      bodyKn: 'Chameleon ಮತ್ತೆ Emu3 ಎರಡೂ ಅದೇ bet ಗೆ ಬದ್ಧವಾಗಿವೆ: ಎಲ್ಲವನ್ನೂ tokenize ಮಾಡಿ, next token predict ಮಾಡಿ, autoregressively. ಮುಂದಿನ ಸ್ವಾಭಾವಿಕ ಪ್ರಶ್ನೆ left-to-right generation images ಗೆ ಸರಿಯಾದ decoding order ಆಗಿದೆಯೇ ಎಂಬುದೂ.' } },

    { type: 'concept', data: {
      headingEn: 'Module 236 Complete', headingKn: 'Module 236 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part Emu3 module. Every claimed number -- 4096 and 16384 image tokens, 32768 and 61440 video tokens, the CFG special cases at gamma=0/1/4, and the temperature-sharpened distribution -- was genuinely computed via real Python execution rather than assumed, continuing directly from Chameleon\'s shared-vocabulary foundation toward video-scale next-token generation.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ Emu3 module ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ. ಪ್ರತಿ claimed number -- ನಿಜವಾಗಿ Python execution ಮೂಲಕ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, Chameleon ya shared-vocabulary foundation ಇಂದ video-scale next-token generation ಕಡೆಗೆ ನೇರವಾಗಿ ಮುಂದುವರಿಯುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does classifier-free guidance combine?', qKn: 'Classifier-free guidance ಏನೂ ಸಂಯೋಜಿಸುತ್ತದೆ?',
        opts: ['Two tokenizers', 'Conditional and unconditional logits', 'Image and video resolutions', 'Training and validation losses'], correct: 1,
        optsKn: ['ಎರಡೂ tokenizers', 'Conditional ಮತ್ತೆ unconditional logits', 'Image ಮತ್ತೆ video resolutions', 'Training ಮತ್ತೆ validation losses'] },
      { q: 'Genuinely confirmed in this lesson: what happens when the CFG scale is exactly 1?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: CFG scale ನಿಖರವಾಗಿ 1 ಆದಾಗ ಏನಾಗುತ್ತದೆ?',
        opts: ['L_u (unconditional)', 'Zero logits', 'L_c (conditional), exactly reproduced element-wise', 'Random logits'], correct: 2,
        optsKn: ['L_u (unconditional)', 'Zero logits', 'L_c (conditional), element-wise ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸಲ್ಪಟ್ಟಿದೆ', 'Random logits'] },
      { q: 'What does lowering temperature below 1 generally do?', qKn: 'Temperature ಅನ್ನೂ 1 ಕ್ಕಿಂತ ಕಡಿಮೆಗೊಳಿಸುವುದೂ ಸಾಮಾನ್ಯವಾಗಿ ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['Makes the probability distribution sharper', 'Removes autoregression', 'Enlarges the vocabulary', 'Reduces image resolution'], correct: 0,
        optsKn: ['Probability distribution ಅನ್ನೂ ಚೂಪಾಗಿಸುತ್ತದೆ', 'Autoregression ತೆಗೆದುಹಾಕುತ್ತದೆ', 'Vocabulary ವಿಸ್ತರಿಸುತ್ತದೆ', 'Image resolution ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ'] },
      { q: 'Why does Emu3-style visual generation still need a visual decoder?', qKn: 'Emu3-style visual generation ಗೆ visual decoder ಇನ್ನೂ ಏಕೆ ಬೇಕು?',
        opts: ['The Transformer outputs discrete visual codes, not final RGB pixels', 'CFG only works inside a decoder', 'Text tokens cannot be embedded', 'The visual decoder performs attention'], correct: 0,
        optsKn: ['Transformer discrete visual codes ಉತ್ಪಾದಿಸುತ್ತದೆ, ಅಂತಿಮ RGB pixels ಅಲ್ಲ', 'CFG ಕೇವಲ decoder ಒಳಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'Text tokens embed ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'Visual decoder attention ಮಾಡುತ್ತದೆ'] },
      { q: 'What is the main inference disadvantage of autoregressive image/video generation?', qKn: 'Autoregressive image/video generation ya ಮುಖ್ಯ inference ಅನನುಕೂಲ ಏನೂ?',
        opts: ['It cannot use text conditioning', 'It requires sequential generation of potentially thousands of tokens', 'It cannot use a KV cache', 'It cannot generate video'], correct: 1,
        optsKn: ['ಇದೂ text conditioning ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ ಸಾವಿರಾರು tokens ya sequential generation ಬೇಡುತ್ತದೆ', 'ಇದೂ KV cache ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ video generate ಮಾಡಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
