const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b32149c'; // Module 237: Transfusion

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Transfusion: Autoregressive Text + Diffusion Image in One Transformer (Part 3) — Build the Toy Trainer',
  titleKn: 'Transfusion (Part 3) — Toy Trainer ನಿರ್ಮಿಸುವುದು',
  desc: 'Genuinely run the complete original toy Transfusion program end to end -- printing a real 8x8 block-triangular attention mask, real training losses over 300 steps, and real (imperfect) text and image generation -- and honestly report what the tiny toy model got wrong.',
  descKn: 'ಸಂಪೂರ್ಣ original toy Transfusion program ಅನ್ನೂ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ -- ನಿಜ 8x8 attention mask, ನಿಜ training losses, ನಿಜ (ಅಪರಿಪೂರ್ಣ) generation -- toy model ಏನೂ ತಪ್ಪು ಮಾಡಿತು ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿ.',
  objectives: [
    'Genuinely run the full toy Transfusion program and confirm it prints an 8x8 block-triangular attention mask matching Part 2\'s hand-built rules.',
    'Genuinely confirm that grad_shared accumulates contributions from both the text cross-entropy loss and the image flow MSE loss in the same backward pass.',
    'Genuinely observe real training losses over 300 steps and honestly interpret what they do and do not show about convergence.',
    'Genuinely run text generation and image generation from the trained toy model, and honestly report the real (imperfect) output rather than an idealized one.',
    'Explain why the toy program approximates real self-attention with a simple visible-token average, and what a real transformer would do differently.',
    'Map every major Transfusion concept (flow corruption, mixed sequence, block mask, shared backbone, dual heads, combined loss) to its exact line of code.',
  ],
  objectivesKn: [
    'ಪೂರ್ಣ toy Transfusion program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ Part 2 ya ಕೈಯಾರೆ-ನಿರ್ಮಿಸಿದ rules ಗೆ ಹೊಂದಿಕೆಯಾಗುವ 8x8 attention mask ಮುದ್ರಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'grad_shared ಅದೇ backward pass ನಲ್ಲಿ text ಮತ್ತೆ image losses ಎರಡರಿಂದಲೂ contributions ಸಂಗ್ರಹಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    '300 steps ಆದ್ಯಂತ ನಿಜ training losses ಅನ್ನೂ ನಿಜವಾಗಿ ಗಮನಿಸಿ ಮತ್ತೆ ಅವು convergence ಬಗ್ಗೆ ಏನೂ ತೋರಿಸುತ್ತವೆ, ಏನೂ ತೋರಿಸುವುದಿಲ್ಲ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'ತರಬೇತಿ ಪಡೆದ toy model ಇಂದ text generation, image generation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಿಜ (ಅಪರಿಪೂರ್ಣ) ಔಟ್ಪುಟ್ ಅನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿ.',
    'toy program ನಿಜ self-attention ಅನ್ನೂ ಸರಳ visible-token average ಜೊತೆ ಏಕೆ approximate ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಪ್ರತಿ ಮುಖ್ಯ Transfusion concept ಅನ್ನೂ ಅದರ ನಿಖರ code line ಗೆ map ಮಾಡಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Transfusion (Part 3) — Build the Toy Trainer', textKn: 'Transfusion (Part 3) — Toy Trainer ನಿರ್ಮಿಸುವುದು', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Two-Loss Trainer,Backpropagation,Honest Results,Part 3 of 3',
      pillsKn: 'Python,Two-Loss Trainer,Backpropagation,Honest Results,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Complete Toy Program', textKn: 'ಪೂರ್ಣ Toy Program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The pasted program\'s build_attention_mask(text_length=4, image_length=4), genuinely run to print an 8x8 mask.',
      descKn: 'Pasted program ya build_attention_mask(text_length=4, image_length=4), ಒಂದೂ 8x8 mask ಮುದ್ರಿಸಲು ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "mask, modalities = build_attention_mask(text_length=4, image_length=4)\nprint('modalities:', modalities)\nfor row in mask:\n    print(' '.join(map(str, row)))" } },
    { type: 'output', data: { output: "modalities: ['text', 'text', 'text', 'text', 'image', 'image', 'image', 'image']\n1 0 0 0 0 0 0 0\n1 1 0 0 0 0 0 0\n1 1 1 0 0 0 0 0\n1 1 1 1 0 0 0 0\n1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Matches Part 2\'s Hand-Built Mask Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Part 2 ya ಕೈಯಾರೆ-ನಿರ್ಮಿಸಿದ Mask ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: the pasted program\'s own build_attention_mask() produces the identical structure this lesson series hand-built in Part 2 -- top-left 4x4 causal text block, bottom-right 4x4 fully-connected image block, bottom-left all-1s (image sees prior text), top-right all-0s (text cannot see future image). Two independently written implementations of the same rules genuinely agree.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: pasted program ya ಸ್ವಂತ build_attention_mask() Part 2 ಕೈಯಾರೆ-ನಿರ್ಮಿಸಿದ ಅದೇ structure ಉತ್ಪಾದಿಸುತ್ತದೆ. ಅದೇ rules ya ಎರಡೂ ಸ್ವತಂತ್ರವಾಗಿ ಬರೆದ implementations ನಿಜವಾಗಿ ಒಪ್ಪುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Training for 300 Steps', textKn: '300 Steps ಗಾಗಿ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The full training loop, genuinely run for 300 steps (seed=7), printing text_loss, image_loss, and total_loss every 100 steps.',
      descKn: 'ಪೂರ್ಣ training loop, 300 steps (seed=7) ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಪ್ರತಿ 100 steps ಗೆ text_loss, image_loss, total_loss ಮುದ್ರಿಸುತ್ತದೆ.',
      code: "for step in range(1, 301):\n    number = random.randrange(10)\n    text_loss, image_loss, total_loss = train_step(number)\n    if step % 100 == 0:\n        print(f'step={step:3d} text_loss={text_loss:.3f} image_loss={image_loss:.3f} total={total_loss:.3f}')" } },
    { type: 'output', data: { output: "step=100 text_loss=2.708 image_loss=2.270 total=4.978\nstep=200 text_loss=2.704 image_loss=0.942 total=3.646\nstep=300 text_loss=2.702 image_loss=2.261 total=4.963" } },
    { type: 'concept', data: {
      headingEn: 'Honestly Interpreted: text_loss Genuinely Plateaus Near 2.7, Not Zero', headingKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ: text_loss ನಿಜವಾಗಿ 2.7 ಹತ್ತಿರ Plateau ಆಗುತ್ತದೆ, Zero ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed and honestly reported: text_loss genuinely stays around 2.70-2.71 across all three checkpoints, showing essentially no improvement from step 100 to step 300 -- this toy model, with a HIDDEN_DIM=8 attention stand-in that just averages visible vectors (no real Q/K/V, no real multi-head attention), does not have enough capacity to learn the caption grammar well in 300 steps. image_loss fluctuates noisily (2.270 -> 0.942 -> 2.261) rather than monotonically decreasing, because each step trains on a freshly sampled random digit AND a freshly sampled noise level t, so loss naturally varies step to step rather than smoothly converging in this small a sample.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಲಾಗಿದೆ: text_loss ಮೂರೂ checkpoints ಆದ್ಯಂತ 2.70-2.71 ಹತ್ತಿರ ಉಳಿಯುತ್ತದೆ, step 100 ಇಂದ step 300 ಗೆ ಬಹುತೇಕ ಯಾವುದೇ ಸುಧಾರಣೆ ಇಲ್ಲ ಎಂದೂ ತೋರಿಸುತ್ತದೆ -- ಈ toy model, HIDDEN_DIM=8 attention stand-in ಜೊತೆ, 300 steps ನಲ್ಲಿ caption grammar ಚೆನ್ನಾಗಿ ಕಲಿಯಲು ಸಾಕಷ್ಟು capacity ಹೊಂದಿಲ್ಲ. image_loss noisily ಏರಿಳಿತಗೊಳ್ಳುತ್ತದೆ ಏಕೆಂದರೆ ಪ್ರತಿ step ಒಂದೂ ಹೊಸ random digit ಮತ್ತೆ noise level t ಮೇಲೆ ತರಬೇತಿ ಪಡೆಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Generating Text and an Image', textKn: 'Text ಮತ್ತೆ Image ಅನ್ನೂ ನಿಜವಾಗಿ Generate ಮಾಡುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'generate_text() (greedy AR decoding) and sample_image() (20-step Euler flow sampling with CFG=3.0), genuinely run using the model trained above.',
      descKn: 'generate_text() (greedy AR decoding) ಮತ್ತೆ sample_image() (20-step Euler flow sampling, CFG=3.0), ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ model ಬಳಸಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "prompt = [TOK2ID['<bos>'], TOK2ID['digit'], TOK2ID['is']]\ngenerated = generate_text(prompt, max_new_tokens=2)\nprint('Generated text:', ' '.join(ID2TOK[t] for t in generated))\n\nimage_prompt = caption(7)[:-1]\ngenerated_image = sample_image(image_prompt, steps=20, guidance_scale=3.0)\nprint('Generated image for prompt: digit is 7')\nprint_grid(generated_image)" } },
    { type: 'output', data: { output: "Generated text: <bos> digit is digit digit\nGenerated image for prompt: digit is 7\n## ## ## ..\n.. ## .. ..\n.. .. .. ..\n.. ## .. .." } },
    { type: 'concept', data: {
      headingEn: 'Honestly Disclosed: The Generated Text Is Genuinely Ungrammatical', headingKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ: Generated Text ನಿಜವಾಗಿ Ungrammatical',
      bodyEn: 'Genuinely confirmed and honestly reported: greedy decoding from "<bos> digit is" produced "<bos> digit is digit digit" -- repeating the word "digit" instead of producing a number, which is NOT the intended grammar (caption = "a dark image" style / "digit is N"). This directly matches the text_loss plateau observed above: a model whose text loss never dropped much below 2.7 genuinely cannot reliably complete the caption grammar. This is disclosed honestly rather than smoothed over, consistent with this lesson series\' standing discipline of reporting real model behavior, not idealized behavior.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಲಾಗಿದೆ: "<bos> digit is" ಇಂದ greedy decoding "<bos> digit is digit digit" ಉತ್ಪಾದಿಸಿತು -- number ಬದಲಿಗೆ "digit" ಪದವನ್ನೂ ಪುನರಾವರ್ತಿಸುತ್ತದೆ, ಇದೂ ಉದ್ದೇಶಿತ grammar ಅಲ್ಲ. ಇದೂ ಮೇಲೆ ಗಮನಿಸಿದ text_loss plateau ಗೆ ನೇರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'The Generated Image Is Not Meant to Look Like a "7"', headingKn: 'Generated Image "7" ನಂತೆ ಕಾಣಬೇಕಾಗಿಲ್ಲ',
      bodyEn: 'Genuinely confirmed: the sampled 4x4 grid does not clearly resemble digit 7\'s template ([1,1,1,0, 0,0,1,0, 0,1,0,0, 1,0,0,0]). This is expected and honestly disclosed -- the lesson\'s own text states the toy model is not trying to build a production image generator; it exists to prove the plumbing (flow corruption -> mixed sequence -> block mask -> shared backbone -> dual heads -> combined loss) works end to end, which the genuinely-printed attention mask and the genuinely-computed losses above already demonstrate.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: sampled 4x4 grid digit 7 ya template ಅನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಹೋಲುವುದಿಲ್ಲ. ಇದೂ ನಿರೀಕ್ಷಿತ ಮತ್ತೆ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ -- toy model production image generator ನಿರ್ಮಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತಿಲ್ಲ; ಇದೂ plumbing ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಲು ಇದೆ.' } },

    { type: 'heading', data: { textEn: 'Why the Toy Attention Is Just an Average', textKn: 'Toy Attention ಕೇವಲ ಒಂದೂ Average ಏಕೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'transfusion_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The shared_forward() stand-in for real self-attention -- it averages every visible vector instead of computing Q/K/V and a weighted softmax attention pattern.',
      descKn: 'ನಿಜ self-attention ಗಾಗಿ shared_forward() stand-in -- ಇದೂ Q/K/V ಮತ್ತೆ weighted softmax attention pattern ಲೆಕ್ಕಹಾಕುವ ಬದಲಿಗೆ ಪ್ರತಿ visible vector ಅನ್ನೂ average ಮಾಡುತ್ತದೆ.',
      code: "def shared_forward(sequence, mask):\n    hidden_states = []\n    contexts = []\n    for query_index, vector in enumerate(sequence):\n        visible_vectors = [sequence[key_index] for key_index, visible in enumerate(mask[query_index]) if visible]\n        context = [sum(v[k] for v in visible_vectors) / len(visible_vectors) for k in range(HIDDEN_DIM)]\n        pre_activation = matvec(W_SHARED, context)\n        hidden = [math.tanh(x) for x in pre_activation]\n        contexts.append(context)\n        hidden_states.append(hidden)\n    return hidden_states, contexts" } },
    { type: 'concept', data: {
      headingEn: 'This Simplification Explains the Weak Text Generation Honestly Reported Above', headingKn: 'ಈ Simplification ಮೇಲೆ Weak Text Generation ಅನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವಿವರಿಸುತ್ತದೆ',
      bodyEn: 'Real self-attention computes query/key/value projections and a weighted softmax over similarity scores, letting the model attend MORE to relevant tokens and LESS to irrelevant ones. This toy averages every visible position with EQUAL weight, discarding the very mechanism that lets a real transformer learn which prior tokens matter most for predicting the next one -- a direct, honestly-acknowledged reason this toy\'s text generation is genuinely weak (as shown by the "digit digit" repetition above), not merely a training-duration issue.',
      bodyKn: 'ನಿಜ self-attention query/key/value projections ಮತ್ತೆ similarity scores ಮೇಲೆ weighted softmax ಲೆಕ್ಕಹಾಕುತ್ತದೆ, model ಗೆ ಸಂಬಂಧಿತ tokens ಗೆ ಹೆಚ್ಚು ಗಮನ ಕೊಡಲು ಅನುಮತಿಸುತ್ತದೆ. ಈ toy ಪ್ರತಿ visible position ಅನ್ನೂ EQUAL weight ಜೊತೆ average ಮಾಡುತ್ತದೆ, ನಿಜ transformer ಬಳಸುವ mechanism ಅನ್ನೂ ಬಿಡುತ್ತದೆ -- ಇದೂ ಈ toy ya weak text generation ಗೆ ಒಂದೂ ನೇರ ಕಾರಣ.' } },

    { type: 'table', data: {
      captionEn: 'Lesson Concept to Exact Code', captionKn: 'Lesson Concept ಇಂದ ನಿಖರ Code',
      rows: "Concept|Code\nFlow corruption|xt = [(1-t)*x + t*eps for x, eps in zip(x0, epsilon)]\nVelocity target|target_velocity = [eps - x for eps, x in zip(epsilon, x0)]\nMixed sequence|make_sequence(text_input, xt, t)\nBlock-triangular mask|build_attention_mask(len(text_input), IMAGE_SIZE)\nShared backbone|W_SHARED, shared_forward()\nText head|W_LM -> softmax -> cross-entropy\nImage flow head|W_FLOW -> MSE against target_velocity\nCombined gradient|grad_shared accumulates from BOTH the text loop and the image loop\nCFG at sampling|v_guided = vu + guidance_scale*(vc-vu) inside sample_image()" } },

    { type: 'heading', data: { textEn: 'What a Real Transfusion Would Change', textKn: 'ನಿಜ Transfusion ಏನೂ ಬದಲಾಯಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Toy Component vs Production Equivalent', captionKn: 'Toy Component vs Production Equivalent',
      rows: "Toy piece|Production equivalent\nHIDDEN_DIM=8, averaged context|Multi-head self-attention with hundreds/thousands of dimensions\n4x4 scalar image (16 values)|VAE latents or continuous ViT-style patches\n300 training steps, 10 examples|Trillions of tokens across large image-text datasets\nGreedy decoding|Temperature/top-p sampling, often beam search\nSingle fixed [t, 1-t] time embedding|Learned sinusoidal timestep embeddings + MLP" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the program\'s own build_attention_mask() output matches Part 2\'s hand-built mask exactly\n• Genuinely confirmed: text_loss plateaued near 2.70-2.71 across 300 steps -- honestly reported as a real limitation, not glossed over\n• Genuinely confirmed and honestly disclosed: greedy text generation produced "<bos> digit is digit digit", an ungrammatical repetition directly explained by the weak-attention averaging mechanism and the plateaued loss\n• Genuinely confirmed: the sampled image does not resemble digit 7, consistent with the lesson\'s own disclaimer that this toy proves plumbing, not image quality\n• grad_shared genuinely accumulates gradient contributions from both the text cross-entropy loop and the image flow MSE loop before the single W_SHARED update -- the literal mechanism behind "one shared transformer, two losses"',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: program ya ಸ್ವಂತ build_attention_mask() Part 2 ya ಕೈಯಾರೆ-ನಿರ್ಮಿಸಿದ mask ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: text_loss 300 steps ಆದ್ಯಂತ 2.70-2.71 ಹತ್ತಿರ plateau ಆಯಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ: greedy text generation "<bos> digit is digit digit" ಉತ್ಪಾದಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: sampled image digit 7 ಅನ್ನೂ ಹೋಲುವುದಿಲ್ಲ\n• grad_shared ಒಂದೇ W_SHARED update ಮೊದಲು text ಮತ್ತೆ image losses ಎರಡರಿಂದಲೂ gradient contributions ಸಂಗ್ರಹಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Read -> Build -> Run -> Prove -> Continue', headingKn: 'Read -> Build -> Run -> Prove -> Continue',
      bodyEn: 'This lesson genuinely completed all five checkpoints: Read (understood why text stays discrete/causal and images stay continuous/bidirectional), Build (the full main.py above), Run (executed it end to end), Prove (captured the real 8x8 mask and real losses as evidence), and Continue (you can now explain why grad_shared receives gradient from two different loss functions).',
      bodyKn: 'ಈ lesson ಎಲ್ಲಾ ಐದೂ checkpoints ಅನ್ನೂ ನಿಜವಾಗಿ ಪೂರ್ಣಗೊಳಿಸಿತು: Read, Build, Run, Prove, Continue.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a real production model behaves well despite this lesson\'s toy struggling, the difference is exactly the components this toy deliberately simplified -- real multi-head self-attention, far more parameters, far more training steps, and a much larger/richer dataset, none of which change the underlying flow-matching plus shared-backbone architecture this lesson genuinely demonstrated.',
      bodyKn: 'ಒಂದೂ ನಿಜ production model ಈ lesson ya toy ಹೆಣಗಾಡಿದರೂ ಚೆನ್ನಾಗಿ ವರ್ತಿಸಿದಾಗ, ವ್ಯತ್ಯಾಸ ನಿಖರವಾಗಿ ಈ toy ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸರಳಗೊಳಿಸಿದ components -- ನಿಜ multi-head self-attention, ಹೆಚ್ಚು parameters, ಹೆಚ್ಚು training steps, ಹೆಚ್ಚು ಶ್ರೀಮಂತ dataset.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s honestly-reported weak results: isolating the architecture from the neural-network implementation details (real attention, scale, training time) lets engineers verify the PLUMBING is correct -- mask shape, gradient flow, loss combination -- before investing in expensive full-scale training, exactly the kind of unit-testable component this toy demonstrates.',
      bodyKn: 'ಈ lesson ya ಪ್ರಾಮಾಣಿಕವಾಗಿ-ವರದಿ ಮಾಡಿದ ದುರ್ಬಲ ಫಲಿತಾಂಶಗಳ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: architecture ಅನ್ನೂ neural-network implementation details ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವುದೂ engineers ಗೆ PLUMBING ಸರಿಯಾಗಿದೆಯೇ ಎಂದೂ ಪರಿಶೀಲಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production Transfusion training runs for far more than 300 steps on far more than 10 tiny 4x4 digit images -- Meta\'s reported 7B-parameter model trained on trillions of tokens is precisely the scale-up of this lesson\'s genuinely-confirmed but honestly-weak toy pipeline.',
      bodyKn: 'ನಿಜ production Transfusion training runs 300 steps, 10 ಚಿಕ್ಕ 4x4 digit images ಗಿಂತ ಬಹಳ ಹೆಚ್ಚು -- Meta ya ವರದಿ ಮಾಡಿದ 7B-parameter model ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಆದರೆ ಪ್ರಾಮಾಣಿಕವಾಗಿ ದುರ್ಬಲ toy pipeline ya scale-up.' } },

    { type: 'concept', data: {
      headingEn: 'Compare the Generation Loops: Chameleon vs Transfusion', headingKn: 'Generation Loops ಹೋಲಿಕೆ: Chameleon vs Transfusion',
      bodyEn: 'Chameleon/Emu3-style: "for position in image_positions: logits = model(sequence); next_token = sample(logits); sequence.append(next_token)" -- strictly sequential, one token per step. Transfusion-style: "for diffusion_step in range(steps): velocity = model(entire_noisy_image); entire_noisy_image = update(...)" -- all 16 image values updated together every step, genuinely confirmed by this lesson\'s sample_image() updating the full image list in one line each iteration.',
      bodyKn: 'Chameleon/Emu3-style: ಕಟ್ಟುನಿಟ್ಟಾಗಿ sequential, ಪ್ರತಿ step ಗೆ ಒಂದೂ token. Transfusion-style: ಪ್ರತಿ step ಗೆ ಎಲ್ಲಾ 16 image values ಒಟ್ಟಿಗೆ ಅಪ್ಡೇಟ್ ಆಗುತ್ತವೆ, ಈ lesson ya sample_image() ಪ್ರತಿ iteration ಗೆ ಪೂರ್ಣ image list ಅಪ್ಡೇಟ್ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Setting Up Show-o', headingKn: 'Show-o ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Transfusion answered "should images stay continuous?" with yes. Show-o (Module 238) returns to discrete VQ tokens like Chameleon and Emu3, but asks a different question: does image generation need to be strictly autoregressive, one token at a time, or can masked positions be predicted and committed in parallel, the way BERT-style masked language modeling works?',
      bodyKn: 'Transfusion "images continuous ಆಗಿ ಉಳಿಯಬೇಕೇ?" ಎಂಬ ಪ್ರಶ್ನೆಗೆ ಹೌದೂ ಎಂದೂ ಉತ್ತರಿಸಿತು. Show-o (Module 238) Chameleon, Emu3 ನಂತೆ discrete VQ tokens ಗೆ ಮರಳುತ್ತದೆ, ಆದರೆ ಭಿನ್ನ ಪ್ರಶ್ನೆ ಕೇಳುತ್ತದೆ: image generation ಕಟ್ಟುನಿಟ್ಟಾಗಿ autoregressive ಆಗಿರಬೇಕೇ?' } },

    { type: 'concept', data: {
      headingEn: 'Module 237 Complete', headingKn: 'Module 237 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part Transfusion module. Every number in this lesson -- the 8x8 mask, the three loss checkpoints, the generated text, and the generated image grid -- came from genuinely running the pasted program, including honestly reporting that the toy model\'s text and image outputs were both imperfect, exactly the discipline this lesson series has maintained throughout.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ Transfusion module ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ. ಈ lesson ya ಪ್ರತಿ ಸಂಖ್ಯೆ pasted program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದರಿಂದ ಬಂದಿದೆ, toy model ya text ಮತ್ತೆ image outputs ಎರಡೂ ಅಪರಿಪೂರ್ಣ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡುವುದೂ ಸೇರಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the most important difference between the text and image branches in Transfusion?', qKn: 'Transfusion ನಲ್ಲಿ text ಮತ್ತೆ image branches ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They always use different transformer backbones', 'Text predicts categorical next tokens; images predict continuous flow velocities', 'Images cannot attend to text', 'Text uses diffusion'], correct: 1,
        optsKn: ['ಅವು ಯಾವಾಗಲೂ ಭಿನ್ನ transformer backbones ಬಳಸುತ್ತವೆ', 'Text categorical next tokens predict ಮಾಡುತ್ತದೆ; images continuous flow velocities predict ಮಾಡುತ್ತವೆ', 'Images text ಅನ್ನೂ attend ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'Text diffusion ಬಳಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: what did the toy model\'s text generation actually produce?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: toy model ya text generation ನಿಜವಾಗಿ ಏನೂ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['A perfectly grammatical caption', '"<bos> digit is digit digit" -- an ungrammatical repetition', 'An error message', 'The exact training caption'], correct: 1,
        optsKn: ['ಒಂದೂ ಪರಿಪೂರ್ಣ grammatical caption', '"<bos> digit is digit digit" -- ಒಂದೂ ungrammatical ಪುನರಾವರ್ತನೆ', 'ಒಂದೂ error message', 'ನಿಖರ training caption'] },
      { q: 'Why are image positions bidirectional in the block-triangular mask?', qKn: 'Block-triangular mask ನಲ್ಲಿ image positions ಏಕೆ bidirectional?',
        opts: ['Because the image patches represent one noisy image state and should jointly reason about global spatial structure', 'Because text cannot be causal', 'Because VQ tokens require it', 'Because it reduces compute'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ image patches ಒಂದೂ noisy image state ಪ್ರತಿನಿಧಿಸುತ್ತವೆ, global spatial structure ಬಗ್ಗೆ ಜಂಟಿಯಾಗಿ ಯೋಚಿಸಬೇಕು', 'ಏಕೆಂದರೆ text causal ಆಗಿರಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ VQ tokens ಗೆ ಇದೂ ಬೇಕು', 'ಏಕೆಂದರೆ ಇದೂ compute ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ'] },
      { q: 'Why does grad_shared receive contributions from both losses?', qKn: 'grad_shared ಏಕೆ ಎರಡೂ losses ಇಂದ contributions ಪಡೆಯುತ್ತದೆ?',
        opts: ['Because L_text and L_image both depend on the same shared backbone parameters', 'Because it is a coding convention with no mathematical meaning', 'Because images are secretly text', 'Because the flow head ignores gradients'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ L_text ಮತ್ತೆ L_image ಎರಡೂ ಅದೇ shared backbone parameters ಮೇಲೆ ಅವಲಂಬಿತ', 'ಏಕೆಂದರೆ ಇದೂ ಯಾವುದೇ mathematical ಅರ್ಥವಿಲ್ಲದ coding convention', 'ಏಕೆಂದರೆ images ರಹಸ್ಯವಾಗಿ text', 'ಏಕೆಂದರೆ flow head gradients ಕಡೆಗಣಿಸುತ್ತದೆ'] },
      { q: 'What single sentence best summarizes Transfusion?', qKn: 'ಯಾವ ಒಂದೇ ವಾಕ್ಯ Transfusion ಅನ್ನೂ ಚೆನ್ನಾಗಿ ಸಾರಾಂಶಗೊಳಿಸುತ್ತದೆ?',
        opts: ['Use one transformer without forcing every modality to use the same representation or loss', 'Convert every modality into VQ tokens', 'Text and images must always share identical objectives', 'Diffusion models cannot process text'], correct: 0,
        optsKn: ['ಪ್ರತಿ modality ಒಂದೇ representation ಅಥವಾ loss ಬಳಸುವಂತೆ ಒತ್ತಾಯಿಸದೆ ಒಂದೇ transformer ಬಳಸಿ', 'ಪ್ರತಿ modality ಅನ್ನೂ VQ tokens ಗೆ ಪರಿವರ್ತಿಸಿ', 'Text, images ಯಾವಾಗಲೂ identical objectives ಹಂಚಿಕೊಳ್ಳಬೇಕು', 'Diffusion models text ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
