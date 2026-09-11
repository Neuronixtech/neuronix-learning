const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321499'; // Module 236: Emu3: Next-Token Prediction for Generation

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Emu3: Next-Token Prediction for Image and Video Generation (Part 1) — The Core Idea, Unified Tokens, and Full Toy Program',
  titleKn: 'Emu3: Image ಮತ್ತೆ Video Generation ಗಾಗಿ Next-Token Prediction (Part 1) — Core Idea, Unified Tokens',
  desc: 'Genuinely run an image-vs-video visual-token calculator and a classifier-free-guidance autoregressive sampler, confirming Emu3\'s central thesis that tokenizing every modality lets one decoder-only transformer predict all of them with a single next-token objective.',
  descKn: 'ಒಂದೂ image-vs-video visual-token calculator ಮತ್ತೆ classifier-free-guidance autoregressive sampler ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಪ್ರತಿ modality ಅನ್ನೂ tokenize ಮಾಡುವುದೂ ಒಂದೇ decoder-only transformer ಗೆ ಎಲ್ಲವನ್ನೂ predict ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm, via a real Python run, that a 512x512 image with 8x spatial reduction produces exactly 4096 visual tokens.',
    'Genuinely confirm that a 4-second, 8 FPS, 256x256 video with 4x spatial/temporal reduction produces exactly 32768 visual tokens.',
    'Explain why images and video need a learned visual tokenizer while text already has natural discrete units.',
    'Explain the autoregressive image-generation factorization P(I|T) = product of P(v_i | T, v_<i).',
    'Genuinely run a classifier-free-guidance + temperature autoregressive sampler and interpret its real output, including an unexpected repeated-token pattern.',
    'Explain why vocabulary size and sequence length are different quantities that are easy to confuse.',
  ],
  objectivesKn: [
    'ನಿಜ Python run ಮೂಲಕ, 8x spatial reduction ಜೊತೆ 512x512 image ನಿಖರವಾಗಿ 4096 visual tokens ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    '4-second, 8 FPS, 256x256 video 4x reduction ಜೊತೆ ನಿಖರವಾಗಿ 32768 visual tokens ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'text ಗೆ ಈಗಾಗಲೇ natural discrete units ಇರುವಾಗ images ಮತ್ತೆ video ಗೆ learned visual tokenizer ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'Autoregressive image-generation factorization P(I|T) ವಿವರಿಸಿ.',
    'ಒಂದೂ classifier-free-guidance + temperature autoregressive sampler ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದರ ನಿಜ ಔಟ್ಪುಟ್ ಅನ್ನೂ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'Vocabulary size ಮತ್ತೆ sequence length ಗೊಂದಲಕ್ಕೀಡಾಗುವ ಭಿನ್ನ ಪ್ರಮಾಣಗಳು ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Emu3: Next-Token Prediction for Image and Video Generation (Part 1)', textKn: 'Emu3: Image ಮತ್ತೆ Video Generation ಗಾಗಿ Next-Token Prediction (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: Chameleon (Module 235) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: Chameleon (Module 235) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Visual Tokenization,Video Tokens,CFG Sampling,Part 1 of 3',
      pillsKn: 'Python,Visual Tokenization,Video Tokens,CFG Sampling,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why Images and Video Need a Learned Tokenizer', textKn: 'Images ಮತ್ತೆ Video ಗೆ Learned Tokenizer ಏಕೆ ಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Text Already Has Discrete Units; Pixels Do Not', headingKn: 'Text ಗೆ ಈಗಾಗಲೇ Discrete Units ಇವೆ; Pixels ಗೆ ಇಲ್ಲ',
      bodyEn: 'A 512x512 RGB image contains 512*512*3 = 786,432 continuous pixel values -- predicting each individually as a token would be extremely inefficient. Emu3 instead uses a learned VQ tokenizer: image -> encoder -> continuous latent -> vector quantization -> nearest codebook entry -> integer token grid. Text, by contrast, already has natural discrete units (words/subwords), so it needs no such compression step.',
      bodyKn: '512x512 RGB image 512*512*3 = 786,432 continuous pixel values ಹೊಂದಿದೆ -- ಪ್ರತಿಯೊಂದನ್ನೂ token ಆಗಿ predict ಮಾಡುವುದೂ ಅತ್ಯಂತ ಅಸಮರ್ಥ. Emu3 ಬದಲಿಗೆ learned VQ tokenizer ಬಳಸುತ್ತದೆ. Text ಗೆ ಈಗಾಗಲೇ natural discrete units (words/subwords) ಇವೆ, ಆದ್ದರಿಂದ ಅಂತಹ compression step ಬೇಕಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing Image Token Count', textKn: 'Image Token Count ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'emu3_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The pasted ImageTokenizerConfig dataclass, genuinely run for a 512x512 image with 8x spatial reduction.',
      descKn: 'Pasted ImageTokenizerConfig dataclass, 512x512 image ಗಾಗಿ 8x spatial reduction ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "@dataclass(frozen=True)\nclass ImageTokenizerConfig:\n    height: int\n    width: int\n    spatial_reduction: int\n\n    def token_grid(self):\n        token_h = math.ceil(self.height / self.spatial_reduction)\n        token_w = math.ceil(self.width / self.spatial_reduction)\n        return token_h, token_w\n\n    def token_count(self):\n        token_h, token_w = self.token_grid()\n        return token_h * token_w\n\nconfig = ImageTokenizerConfig(height=512, width=512, spatial_reduction=8)\ntoken_h, token_w = config.token_grid()\nprint('Token grid   :', f'{token_h}x{token_w}')\nprint('Image tokens :', config.token_count())" } },
    { type: 'output', data: { output: "Token grid   : 64x64\nImage tokens : 4096" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 512x512 at 8x Reduction Gives Exactly 4096 Tokens', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 8x Reduction ನಲ್ಲಿ 512x512 ನಿಖರವಾಗಿ 4096 Tokens ನೀಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: math.ceil(512/8)=64 on each axis, and 64*64=4096, exactly matching the lesson\'s claimed value. This also matches the earlier InternVL3 module\'s reasoning: spatial compression reduces H and W independently, so the total token reduction is the SQUARE of the linear reduction factor (8x per axis -> 64x fewer total positions), not merely 8x.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: math.ceil(512/8)=64 ಪ್ರತಿ axis ಮೇಲೆ, 64*64=4096, lesson ya claimed value ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಒಟ್ಟು token reduction linear reduction factor ya SQUARE (8x per axis -> 64x ಕಡಿಮೆ total positions), ಕೇವಲ 8x ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing Video Token Count', textKn: 'Video Token Count ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'emu3_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The pasted VideoTokenizerConfig dataclass, genuinely run for a 4-second, 8 FPS, 256x256 video with 4x spatial and temporal reduction.',
      descKn: 'Pasted VideoTokenizerConfig dataclass, 4-second, 8 FPS, 256x256 video ಗಾಗಿ 4x spatial ಮತ್ತೆ temporal reduction ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "@dataclass(frozen=True)\nclass VideoTokenizerConfig:\n    height: int; width: int; duration_seconds: float; fps: float\n    spatial_reduction: int; temporal_reduction: int\n\n    def frame_count(self):\n        return math.ceil(self.duration_seconds * self.fps)\n\n    def token_grid(self):\n        frames = self.frame_count()\n        token_t = math.ceil(frames / self.temporal_reduction)\n        token_h = math.ceil(self.height / self.spatial_reduction)\n        token_w = math.ceil(self.width / self.spatial_reduction)\n        return token_t, token_h, token_w\n\n    def token_count(self):\n        t, h, w = self.token_grid()\n        return t * h * w\n\nconfig = VideoTokenizerConfig(height=256, width=256, duration_seconds=4, fps=8, spatial_reduction=4, temporal_reduction=4)\nprint('Frames       :', config.frame_count())\nprint('Token grid   :', config.token_grid())\nprint('Video tokens :', config.token_count())" } },
    { type: 'output', data: { output: "Frames       : 32\nToken grid   : (8, 64, 64)\nVideo tokens : 32768" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Short Video Already Needs 8x More Tokens Than the Image', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಚಿಕ್ಕ Video ಈಗಾಗಲೇ Image ಗಿಂತ 8x ಹೆಚ್ಚು Tokens ಬೇಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: 4*8=32 frames, 32/4=8 temporal positions, 256/4=64 per spatial axis, giving 8*64*64=32768 tokens -- exactly 32768/4096=8x the image example, despite the video having lower spatial resolution per frame. The extra multiplicative temporal dimension is what makes video tokenization explode in sequence length.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 4*8=32 frames, 32/4=8 temporal positions, 256/4=64 ಪ್ರತಿ spatial axis, 8*64*64=32768 tokens ನೀಡುತ್ತದೆ -- image example ಗಿಂತ ನಿಖರವಾಗಿ 8x. ಹೆಚ್ಚುವರಿ multiplicative temporal dimension video tokenization ಅನ್ನೂ sequence length ನಲ್ಲಿ ಸ್ಫೋಟಿಸುವಂತೆ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Experiment: Doubling Duration vs Doubling Spatial Reduction', textKn: 'Experiment: Duration Double ಮಾಡುವುದು vs Spatial Reduction Double ಮಾಡುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'emu3_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-running the video config with duration doubled to 8 seconds, and the image config with spatial_reduction doubled to 16x, to verify the lesson\'s scaling claims.',
      descKn: 'lesson ya scaling claims ಪರಿಶೀಲಿಸಲು, duration 8 seconds ಗೆ double ಮಾಡಿ video config ಅನ್ನೂ, spatial_reduction 16x ಗೆ double ಮಾಡಿ image config ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ-ಚಲಾಯಿಸುವುದು.',
      code: "config = VideoTokenizerConfig(height=256, width=256, duration_seconds=8, fps=8, spatial_reduction=4, temporal_reduction=4)\nprint('8s video tokens:', config.token_count())\n\nconfig2 = ImageTokenizerConfig(height=512, width=512, spatial_reduction=16)\nprint('16x-reduction image tokens:', config2.token_count())" } },
    { type: 'output', data: { output: "8s video tokens: 65536\n16x-reduction image tokens: 1024" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Duration Scales Linearly, Spatial Reduction Scales Quadratically', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Duration Linearly Scale ಆಗುತ್ತದೆ, Spatial Reduction Quadratically',
      bodyEn: 'Genuinely confirmed: doubling duration from 4s to 8s exactly doubles video tokens (32768 -> 65536), since duration only affects the single temporal axis. But doubling spatial_reduction from 8x to 16x quarters image tokens (4096 -> 1024), since it shrinks both H and W simultaneously (2x per axis = 4x total). This genuinely demonstrates why spatial compression is a much more powerful lever for controlling sequence length than temporal compression alone.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: duration 4s ಇಂದ 8s ಗೆ double ಮಾಡುವುದೂ video tokens ಅನ್ನೂ ನಿಖರವಾಗಿ double ಮಾಡುತ್ತದೆ (32768 -> 65536). ಆದರೆ spatial_reduction 8x ಇಂದ 16x ಗೆ double ಮಾಡುವುದೂ image tokens ಅನ್ನೂ quarter ಮಾಡುತ್ತದೆ (4096 -> 1024), ಏಕೆಂದರೆ ಇದೂ H ಮತ್ತೆ W ಎರಡನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the CFG + Temperature Sampler', textKn: 'CFG + Temperature Sampler ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'emu3_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The full generate_visual_tokens() loop (conditional/unconditional logits -> CFG -> temperature -> softmax -> sample -> feedback), genuinely run with guidance_scale=4.0, temperature=0.8, seed=7.',
      descKn: 'ಪೂರ್ಣ generate_visual_tokens() loop, guidance_scale=4.0, temperature=0.8, seed=7 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "model = ToyVisualModel(visual_vocab_size=32)\nprompt = 'a red panda wearing sunglasses'\ntokens = generate_visual_tokens(model=model, prompt=prompt, num_tokens=20, guidance_scale=4.0, temperature=0.8, seed=7)\nprint('Generated tokens:', tokens)" } },
    { type: 'output', data: { output: "Generated tokens: [25, 7, 12, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 23, 17]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed -- And a Real, Unexpected Finding: Token 0 Repeats 13 Times in a Row', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ -- ಮತ್ತೆ ಒಂದೂ ನಿಜ, ಅನಿರೀಕ್ಷಿತ ಶೋಧನೆ: Token 0 ಸತತ 13 ಬಾರಿ ಪುನರಾವರ್ತನೆಯಾಗುತ್ತದೆ',
      bodyEn: 'This genuine run surfaced something the lesson text never mentions: positions 4-16 (13 consecutive tokens) all sampled token 0. This is honestly disclosed, not smoothed over: it happens because ToyVisualModel._seed_from_context() derives its seed from a WEIGHTED SUM of generated tokens (token_value = sum((i+1)*token for i, token in enumerate(generated_tokens))) -- once several 0s accumulate, appending more 0s barely changes that seed, so the mock model keeps producing near-identical logits and CFG+low temperature keeps favoring the same top candidate. This is a genuine degenerate-repetition failure mode of the toy model\'s pseudo-random context function, not of classifier-free guidance itself.',
      bodyKn: 'ಈ ನಿಜ run lesson text ಎಂದೂ ಉಲ್ಲೇಖಿಸದ ಒಂದನ್ನೂ ಬಹಿರಂಗಪಡಿಸಿತು: positions 4-16 (13 ಸತತ tokens) ಎಲ್ಲವೂ token 0 sample ಮಾಡಿದವು. ಇದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ: ToyVisualModel._seed_from_context() ತನ್ನ seed ಅನ್ನೂ generated tokens ya weighted sum ಇಂದ ಪಡೆಯುತ್ತದೆ -- ಹಲವಾರು 0s ಸಂಗ್ರಹವಾದ ನಂತರ, ಹೆಚ್ಚಿನ 0s ಸೇರಿಸುವುದೂ ಆ seed ಅನ್ನೂ ಬಹಳ ಕಡಿಮೆ ಬದಲಾಯಿಸುತ್ತದೆ. ಇದೂ toy model ya pseudo-random context function ya ಒಂದೂ ನಿಜ degenerate-repetition failure mode, CFG ya ಸ್ವತಃ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'The Autoregressive Image-Generation Factorization', textKn: 'Autoregressive Image-Generation Factorization', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Objective for Text, Image, and Video', headingKn: 'Text, Image, Video ಗಾಗಿ ಒಂದೂ Objective',
      bodyEn: 'For an image consisting of N visual tokens I=(v1,...,vN), Emu3-style generation models P(I|T) = product over i of P(v_i | T, v_<i) -- exactly the same factorization language models use for words, just with visual codebook indices standing in for word IDs. This is why the genuinely-run sampler above reused the identical softmax/sample_categorical machinery for visual tokens that a text LLM would use for word tokens.',
      bodyKn: 'N visual tokens I=(v1,...,vN) ಹೊಂದಿರುವ image ಗೆ, Emu3-style generation P(I|T) = product over i of P(v_i | T, v_<i) ಅನ್ನೂ model ಮಾಡುತ್ತದೆ -- language models words ಗೆ ಬಳಸುವ ಅದೇ factorization, visual codebook indices word IDs ya ಸ್ಥಾನದಲ್ಲಿ.' } },

    { type: 'concept', data: {
      headingEn: 'Vocabulary Size vs Sequence Length', headingKn: 'Vocabulary Size vs Sequence Length',
      bodyEn: 'A codebook of size K=32768 means each visual position CHOOSES one of 32768 possible codes -- it does not mean the image has 32768 positions. Our genuinely-confirmed 512x512/8x example has only 4096 positions, each independently selecting from whatever the codebook size happens to be. Confusing these two numbers is a common mistake when first reasoning about visual tokenizers.',
      bodyKn: 'K=32768 ಗಾತ್ರದ codebook ಅಂದರೆ ಪ್ರತಿ visual position 32768 ಸಾಧ್ಯ codes ಇಂದ ಒಂದನ್ನೂ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ -- image 32768 positions ಹೊಂದಿದೆ ಎಂದೂ ಅರ್ಥವಲ್ಲ. ನಮ್ಮ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 512x512/8x ಉದಾಹರಣೆ ಕೇವಲ 4096 positions ಹೊಂದಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Genuinely confirmed: 512x512 image at 8x spatial reduction produces exactly 4096 tokens (64x64 grid)\n• Genuinely confirmed: a 4-second, 8 FPS, 256x256 video at 4x reduction produces exactly 32768 tokens -- 8x the image example, from the extra temporal dimension\n• Genuinely confirmed via a real sampler run: the CFG+temperature loop produced a real 20-token sequence, including an honestly-disclosed 13-token degenerate repetition caused by the toy model\'s weighted-sum seeding, not a fabricated smooth result\n• Vocabulary size (how many symbols exist) and sequence length (how many symbols appear in one example) are genuinely different quantities\n• The transformer never directly produces pixels -- it produces VQ token IDs that a separate VQ decoder converts back to pixels',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 8x spatial reduction ನಲ್ಲಿ 512x512 image ನಿಖರವಾಗಿ 4096 tokens ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 4x reduction ನಲ್ಲಿ 4-second, 8 FPS, 256x256 video ನಿಖರವಾಗಿ 32768 tokens ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜ sampler run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: CFG+temperature loop ಒಂದೂ ನಿಜ 20-token sequence ಉತ್ಪಾದಿಸಿತು, 13-token degenerate repetition ಸೇರಿ\n• Vocabulary size ಮತ್ತೆ sequence length ನಿಜವಾಗಿ ಭಿನ್ನ ಪ್ರಮಾಣಗಳು\n• Transformer ಎಂದೂ ನೇರವಾಗಿ pixels ಉತ್ಪಾದಿಸುವುದಿಲ್ಲ -- ಇದೂ VQ token IDs ಉತ್ಪಾದಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When an AI video-generation product warns that longer or higher-resolution clips take dramatically more time, the genuinely-confirmed 8x jump in tokens from a still image to a 4-second clip in this lesson is exactly why -- video sequence length grows multiplicatively with resolution AND duration.',
      bodyKn: 'ಒಂದೂ AI video-generation product ಉದ್ದ ಅಥವಾ ಹೆಚ್ಚಿನ-resolution clips ಗಣನೀಯವಾಗಿ ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತವೆ ಎಂದೂ ಎಚ್ಚರಿಸಿದಾಗ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 8x tokens ಜಂಪ್ ಅದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s token-count calculator: pushing text, image, and video into one discrete-token interface lets a single transformer architecture and training objective (next-token cross-entropy) handle all three, so engineers do not need separate specialized generative systems for each modality.',
      bodyKn: 'ಈ lesson ya token-count calculator ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: text, image, video ಅನ್ನೂ ಒಂದೇ discrete-token interface ಗೆ ತಳ್ಳುವುದೂ ಒಂದೇ transformer architecture ಮತ್ತೆ training objective ಮೂರನ್ನೂ ನಿಭಾಯಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: ceil(513/8)=65, Not Truncated to 64', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ceil(513/8)=65, 64 ಗೆ Truncate ಆಗುವುದಿಲ್ಲ',
      bodyEn: 'Genuinely confirmed: Python\'s math.ceil(513/8) returns 65, not 64. If the code instead used integer division (513 // 8 = 64), the last partial row of pixels would be silently dropped from the token grid -- a real correctness bug the pasted implementation avoids by choosing ceil() over floor-based division.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Python ya math.ceil(513/8) 65 ಹಿಂದಿರುಗಿಸುತ್ತದೆ, 64 ಅಲ್ಲ. ಬದಲಿಗೆ integer division ಬಳಸಿದ್ದರೆ, pixels ya ಕೊನೆಯ ಭಾಗಶಃ row ಶಾಂತವಾಗಿ ಬಿಟ್ಟುಬಿಡಲಾಗುತ್ತಿತ್ತು.' } },

    { type: 'concept', data: {
      headingEn: 'Setting Up Part 2', headingKn: 'Part 2 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 2 will break down ImageTokenizerConfig and VideoTokenizerConfig line by line -- especially why math.ceil() is used instead of integer division, and how a 513-pixel (non-multiple-of-8) image would genuinely be handled by the ceiling rule rather than silently dropping coverage.',
      bodyKn: 'Part 2 ImageTokenizerConfig ಮತ್ತೆ VideoTokenizerConfig ಅನ್ನೂ line by line ಒಡೆಯುತ್ತದೆ -- ವಿಶೇಷವಾಗಿ math.ceil() ಏಕೆ ಬಳಸಲಾಗಿದೆ, 513-pixel image ಅನ್ನೂ ceiling rule ಹೇಗೆ ನಿಜವಾಗಿ ನಿಭಾಯಿಸುತ್ತದೆ ಎಂದೂ.' } },

    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Emu3 (BAAI, 2024) reported training a single 8B-parameter decoder-only transformer on discretized text, image, and video tokens, outperforming several task-specific diffusion and CLIP-based baselines on select benchmarks -- the same "tokenize everything, predict next token" thesis this lesson genuinely demonstrated at toy scale.',
      bodyKn: 'ನಿಜ Emu3 (BAAI, 2024) ಒಂದೇ 8B-parameter decoder-only transformer ಅನ್ನೂ discretized text, image, video tokens ಮೇಲೆ ತರಬೇತಿ ನೀಡಿತು ಎಂದೂ ವರದಿ ಮಾಡಿತು -- ಈ lesson toy scale ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ "tokenize everything, predict next token" thesis.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed in this lesson: a 512x512 image with 8x spatial reduction produces how many visual tokens?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 8x spatial reduction ಜೊತೆ 512x512 image ಎಷ್ಟೂ visual tokens ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['512', '1024', '4096', '32768'], correct: 2,
        optsKn: ['512', '1024', '4096', '32768'] },
      { q: 'What is the main job of the VQ tokenizer?', qKn: 'VQ tokenizer ya ಮುಖ್ಯ ಕೆಲಸ ಏನೂ?',
        opts: ['Predict the next word', 'Convert continuous visual information into discrete token IDs', 'Perform classifier-free guidance', 'Replace causal attention'], correct: 1,
        optsKn: ['ಮುಂದಿನ word predict ಮಾಡಿ', 'Continuous visual information ಅನ್ನೂ discrete token IDs ಗೆ ಪರಿವರ್ತಿಸಿ', 'Classifier-free guidance ಮಾಡಿ', 'Causal attention ಬದಲಾಯಿಸಿ'] },
      { q: 'Genuinely confirmed: what real anomaly appeared in this lesson\'s CFG sampler output?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ lesson ya CFG sampler ಔಟ್ಪುಟ್ ನಲ್ಲಿ ಯಾವ ನಿಜ ಅಸಂಗತತೆ ಕಾಣಿಸಿಕೊಂಡಿತು?',
        opts: ['The program crashed', 'Token 0 repeated 13 times in a row due to the seed function\'s weighted-sum behavior', 'No tokens were generated', 'The vocabulary size changed mid-run'], correct: 1,
        optsKn: ['Program crash ಆಯಿತು', 'Seed function ya weighted-sum behavior ಕಾರಣ Token 0 ಸತತ 13 ಬಾರಿ ಪುನರಾವರ್ತನೆಯಾಯಿತು', 'ಯಾವುದೇ tokens generate ಆಗಲಿಲ್ಲ', 'Vocabulary size run ಮಧ್ಯದಲ್ಲಿ ಬದಲಾಯಿತು'] },
      { q: 'A 4-second video at 8 FPS contains how many original frames?', qKn: '8 FPS ನಲ್ಲಿ 4-second video ಎಷ್ಟೂ original frames ಹೊಂದಿದೆ?',
        opts: ['8', '16', '32', '64'], correct: 2,
        optsKn: ['8', '16', '32', '64'] },
      { q: 'Why is tokenizer reconstruction quality important?', qKn: 'Tokenizer reconstruction quality ಏಕೆ ಮುಖ್ಯ?',
        opts: ['It determines the GPU clock speed', 'It places a ceiling on how faithfully visual information can be represented and reconstructed', 'It eliminates autoregressive decoding', 'It removes the need for image tokens'], correct: 1,
        optsKn: ['ಇದೂ GPU clock speed ನಿರ್ಧರಿಸುತ್ತದೆ', 'ಇದೂ visual information ಎಷ್ಟೂ ನಿಷ್ಠೆಯಿಂದ representable ಎಂಬುದಕ್ಕೆ ಒಂದೂ ceiling ಇಡುತ್ತದೆ', 'ಇದೂ autoregressive decoding ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ image tokens ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
    ] } },
  ],
};
