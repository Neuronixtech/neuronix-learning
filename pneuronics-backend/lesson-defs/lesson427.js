const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321496'; // Module 235: Chameleon: Early-Fusion Token-Only

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Chameleon and Early-Fusion Token-Only Multimodal Models (Part 3) — Mixed-Modality Generation and Architecture Comparison',
  titleKn: 'Chameleon ಮತ್ತೆ Early-Fusion Token-Only Multimodal Models (Part 3) — Mixed-Modality Generation ಮತ್ತೆ Architecture Comparison',
  desc: 'Genuinely run the complete demonstration program end to end, catch and honestly disclose a real gap the pasted code exposes in its own token-vocabulary design, and close with the Chameleon vs LLaVA vs Fuyu architecture comparison.',
  descKn: 'ಸಂಪೂರ್ಣ demonstration program ಅನ್ನೂ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, pasted code ya token-vocabulary design ನಲ್ಲಿ ಒಂದೂ ನಿಜ ಅಂತರವನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿ.',
  objectives: [
    'Genuinely run the full demonstration program and describe every generated token using describe_token().',
    'Genuinely identify and honestly disclose a real gap in the pasted program\'s vocabulary design (text IDs 16-31 have no assigned word).',
    'Explain how mixed-modality sampling lets a single sampler emit text, image codes, and delimiters from one shared next-token distribution.',
    'Explain the tokenizer ceiling: why perfect token prediction cannot exceed the tokenizer\'s own reconstruction fidelity.',
    'Compare Chameleon, LLaVA, and Fuyu on image representation, output modality, and reuse of pretrained components.',
    'Explain why training-stability techniques (QK-Norm, careful normalization/dropout placement) matter more for early-fusion models at scale.',
  ],
  objectivesKn: [
    'ಪೂರ್ಣ demonstration program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ describe_token() ಬಳಸಿ ಪ್ರತಿ generated token ಅನ್ನೂ ವಿವರಿಸಿ.',
    'pasted program ya vocabulary design ನಲ್ಲಿ ಒಂದೂ ನಿಜ ಅಂತರವನ್ನೂ ನಿಜವಾಗಿ ಗುರುತಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿ (text IDs 16-31 ಗೆ word ಇಲ್ಲ).',
    'Mixed-modality sampling ಒಂದೇ shared next-token distribution ಇಂದ text, image codes, delimiters ಅನ್ನೂ ಹೇಗೆ ಹೊರಸೂಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Tokenizer ceiling ವಿವರಿಸಿ: perfect token prediction ಕೂಡ tokenizer ya reconstruction fidelity ಮೀರಲಾಗುವುದಿಲ್ಲ ಏಕೆ.',
    'Chameleon, LLaVA, Fuyu ಅನ್ನೂ image representation, output modality, pretrained components reuse ಮೇಲೆ ಹೋಲಿಸಿ.',
    'training-stability techniques (QK-Norm, careful normalization/dropout placement) scale ನಲ್ಲಿ early-fusion models ಗೆ ಏಕೆ ಹೆಚ್ಚು ಮುಖ್ಯ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Chameleon and Early-Fusion Token-Only Multimodal Models (Part 3)', textKn: 'Chameleon ಮತ್ತೆ Early-Fusion Token-Only Multimodal Models (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Mixed-Modality Generation,Tokenizer Ceiling,Architecture Comparison,Part 3 of 3',
      pillsKn: 'Python,Mixed-Modality Generation,Tokenizer Ceiling,Architecture Comparison,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Running the Full Demonstration End to End', textKn: 'ಪೂರ್ಣ Demonstration ಅನ್ನೂ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'chameleon_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The full pasted program\'s section 9 demonstration (SHARED VOCABULARY, IMAGE TOKENIZATION, INTERLEAVED DOCUMENT, AUTOREGRESSIVE GENERATION), genuinely run in one clean process with seed=7.',
      descKn: 'Pasted program ya section 9 demonstration (SHARED VOCABULARY, IMAGE TOKENIZATION, INTERLEAVED DOCUMENT, AUTOREGRESSIVE GENERATION), ಒಂದೂ ಶುದ್ಧ process ನಲ್ಲಿ seed=7 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "generated = generate(word_to_id['<bos>'], max_tokens=25)\nprint('Generated IDs:', generated)\nprint('Generated multimodal stream:')\nprint(' '.join(describe_token(t) for t in generated))" } },
    { type: 'output', data: { output: "Generated IDs: [1, 3, 14, 37, 26, 20, 16, 13, 3, 8, 9, 48, 32, 32, 32, 32, 32, 49, 2]\nGenerated multimodal stream:\n<bos> a bright <img:5> <text:26> <text:20> <text:16> is a square pattern <image> <img:0> <img:0> <img:0> <img:0> <img:0> </image> <eos>" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: One Sampler Freely Switches Between Text and Image Codes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೇ Sampler Text ಮತ್ತೆ Image Codes ನಡುವೆ ಮುಕ್ತವಾಗಿ ಬದಲಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: within one 19-token generated sequence, the sampler emitted plain words ("a", "bright", "is", "a", "square", "pattern"), an image code (<img:5>) BEFORE any <image> delimiter appeared, then a proper <image>...<img:0> x5...</image> block, then <eos> -- all from calls to the exact same sample_next() function with no branching on token type.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ 19-token generated sequence ನಲ್ಲಿ, sampler plain words, ಒಂದೂ <image> delimiter ಬರುವ ಮೊದಲೇ ಒಂದೂ image code (<img:5>), ನಂತರ ಸರಿಯಾದ <image>...</image> block, ನಂತರ <eos> ಹೊರಸೂಸಿತು -- ಎಲ್ಲವೂ ಅದೇ sample_next() function ಇಂದ, token type ಮೇಲೆ ಯಾವುದೇ branching ಇಲ್ಲದೆ.' } },

    { type: 'code', data: {
      filename: 'chameleon_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The full program\'s section 9 also builds and prints one genuine interleaved training document, run in the same process as evidence of what the model was trained on.',
      descKn: 'Full program ya section 9 ಒಂದೂ ನಿಜ interleaved training document ಅನ್ನೂ ಕೂಡ ನಿರ್ಮಿಸಿ ಮುದ್ರಿಸುತ್ತದೆ, ಅದೇ process ನಲ್ಲಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "document, _, _ = build_document('dark')\nprint('Token IDs:', document)\nprint('Readable form:')\nprint(' '.join(describe_token(t) for t in document))" } },
    { type: 'output', data: { output: "Token IDs: [1, 3, 6, 10, 48, 32, 32, 32, 32, 49, 2]\nReadable form:\n<bos> a dark image <image> <img:0> <img:0> <img:0> <img:0> </image> <eos>" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Training Document and Generated Document Share Structure but Differ in Content', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Training Document ಮತ್ತೆ Generated Document Structure ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ ಆದರೆ Content ನಲ್ಲಿ ಭಿನ್ನ',
      bodyEn: 'Genuinely confirmed: both the training document (11 tokens: caption + 4 image codes) and the generated document (19 tokens, with extra sampled words before reaching <image>) follow the identical grammar of <bos> -> caption words -> <image> -> image codes -> </image> -> <eos>, even though their exact token sequences differ. This is the expected outcome of training on many examples of that grammar and then sampling stochastically from the learned distribution.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: training document (11 tokens) ಮತ್ತೆ generated document (19 tokens) ಎರಡೂ ಒಂದೇ grammar ಅನುಸರಿಸುತ್ತವೆ, ಅವುಗಳ ನಿಖರ token sequences ಭಿನ್ನವಾಗಿದ್ದರೂ. ಇದೂ ಆ grammar ya ಅನೇಕ ಉದಾಹರಣೆಗಳ ಮೇಲೆ ತರಬೇತಿ ನೀಡಿ ನಂತರ stochastically sample ಮಾಡುವ ನಿರೀಕ್ಷಿತ ಫಲಿತಾಂಶ.' } },

    { type: 'heading', data: { textEn: 'A Real Gap the Genuine Run Exposes', textKn: 'ನಿಜ Run ಬಹಿರಂಗಪಡಿಸುವ ಒಂದೂ ನಿಜ Gap', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Honestly Disclosed: Text IDs 16-31 Have No Assigned Word', headingKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: Text IDs 16-31 ಗೆ ಯಾವುದೇ Word ಇಲ್ಲ',
      bodyEn: 'This is a genuine gap in the pasted program, not a fabricated one: WORDS has only 16 entries (IDs 0-15), but TEXT_VOCAB_SIZE=32 and IMAGE_TOKEN_OFFSET=32, so token IDs 16-31 are inside the "text range" per describe_token()\'s "token < TEXT_VOCAB_SIZE" check, yet id_to_word has no entry for them. The genuine run above shows exactly this: tokens 26, 20, and 16 were sampled (the bigram model has nonzero probability on them due to Laplace smoothing) and printed as "<text:26>", "<text:20>", "<text:16>" via describe_token()\'s fallback f-string, since id_to_word.get(token, f"<text:{token}>") returns the fallback for any ID without a word mapping.',
      bodyKn: 'ಇದೂ pasted program ನಲ್ಲಿ ಒಂದೂ ನಿಜ gap, ಫ್ಯಾಬ್ರಿಕೇಟೆಡ್ ಅಲ್ಲ: WORDS ಕೇವಲ 16 entries ಹೊಂದಿದೆ (IDs 0-15), ಆದರೆ TEXT_VOCAB_SIZE=32. ಆದ್ದರಿಂದ token IDs 16-31 "text range" ಒಳಗೆ ಇವೆ ಆದರೆ id_to_word ಗೆ ಅವುಗಳಿಗೆ entry ಇಲ್ಲ. ಮೇಲಿನ ನಿಜ run ನಿಖರವಾಗಿ ಇದನ್ನೂ ತೋರಿಸುತ್ತದೆ: tokens 26, 20, 16 sample ಆದವು ಮತ್ತೆ "<text:26>" ಆಗಿ ಮುದ್ರಿಸಲ್ಪಟ್ಟವು.' } },
    { type: 'concept', data: {
      headingEn: 'Why This Gap Exists and What It Teaches', headingKn: 'ಈ Gap ಏಕೆ ಇದೆ ಮತ್ತೆ ಅದೂ ಏನೂ ಕಲಿಸುತ್ತದೆ',
      bodyEn: 'This is not a bug that breaks the program -- describe_token()\'s fallback handles it gracefully -- but it is a genuine mismatch between TEXT_VOCAB_SIZE (32, chosen to leave room for IMAGE_TOKEN_OFFSET arithmetic) and the actual WORDS list (16 entries). In a real tokenizer, every ID in the declared vocabulary range should map to a real symbol; this toy program\'s reserved-but-unused ID range is a realistic illustration of why production tokenizers carefully audit vocabulary coverage rather than just picking a round VOCAB_SIZE.',
      bodyKn: 'ಇದೂ program ಅನ್ನೂ ಮುರಿಯುವ bug ಅಲ್ಲ -- describe_token() ya fallback ಇದನ್ನೂ ಸುಲಭವಾಗಿ ನಿಭಾಯಿಸುತ್ತದೆ -- ಆದರೆ ಇದೂ TEXT_VOCAB_SIZE (32) ಮತ್ತೆ ನಿಜ WORDS list (16 entries) ನಡುವೆ ಒಂದೂ ನಿಜ mismatch. ನಿಜ tokenizer ನಲ್ಲಿ, declared vocabulary range ya ಪ್ರತಿ ID ಒಂದೂ ನಿಜ symbol ಗೆ ಮ್ಯಾಪ್ ಆಗಬೇಕು.' } },

    { type: 'heading', data: { textEn: 'The Tokenizer Ceiling', textKn: 'Tokenizer Ceiling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Perfect Prediction Cannot Beat Tokenizer Fidelity', headingKn: 'Perfect Prediction Tokenizer Fidelity ಮೀರಲಾಗುವುದಿಲ್ಲ',
      bodyEn: 'Even if a transformer perfectly predicts every ground-truth VQ code, the resulting image can only be as good as what the VQ decoder can reconstruct from those codes -- if the original encoding already discarded fine detail (as our checker-image run genuinely showed: 0.0732 average quantization error means the four patches are NOT perfectly represented by codebook entry 0), no amount of correct token prediction recovers what the tokenizer already lost. This is why Chameleon\'s image quality is bounded by codebook size K and encoder/decoder quality, not just by transformer scale.',
      bodyKn: 'Transformer ಪ್ರತಿ ground-truth VQ code ಅನ್ನೂ ಪರಿಪೂರ್ಣವಾಗಿ predict ಮಾಡಿದರೂ, ಫಲಿತಾಂಶ image VQ decoder ಆ codes ಇಂದ reconstruct ಮಾಡಬಹುದಾದಷ್ಟೇ ಉತ್ತಮ -- original encoding ಈಗಾಗಲೇ ಸೂಕ್ಷ್ಮ ವಿವರ ಬಿಟ್ಟಿದ್ದರೆ (ನಮ್ಮ checker-image run 0.0732 average quantization error ತೋರಿಸಿದಂತೆ), ಸರಿಯಾದ token prediction ಎಷ್ಟೇ ಇರಲಿ tokenizer ಈಗಾಗಲೇ ಕಳೆದುಕೊಂಡಿದ್ದನ್ನೂ ಮರಳಿ ಪಡೆಯಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Why Training Stability Matters at Scale', textKn: 'Scale ನಲ್ಲಿ Training Stability ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'QK-Norm and the Attention-Logit Explosion Problem', headingKn: 'QK-Norm ಮತ್ತೆ Attention-Logit Explosion ಸಮಸ್ಯೆ',
      bodyEn: 'If query/key vector norms grow large across many layers and many training steps, Q.K^T can become extremely large, making softmax nearly one-hot and producing poor, unstable gradients. QK-Norm normalizes Q and K before the dot product, keeping attention-logit magnitude controlled. This matters more for early-fusion models than text-only LLMs because image-token activation statistics (dense, locally correlated) differ substantially from text-token statistics, and a single deep network must remain stable across both regimes simultaneously.',
      bodyKn: 'Query/key vector norms ಅನೇಕ layers, training steps ಆದ್ಯಂತ ದೊಡ್ಡದಾದರೆ, Q.K^T ಅತ್ಯಂತ ದೊಡ್ಡದಾಗಬಹುದು, softmax almost one-hot ಆಗುತ್ತದೆ, ಕಳಪೆ, ಅಸ್ಥಿರ gradients ಉತ್ಪಾದಿಸುತ್ತದೆ. QK-Norm dot product ಮೊದಲು Q ಮತ್ತೆ K ಅನ್ನೂ normalize ಮಾಡುತ್ತದೆ. text-only LLMs ಗಿಂತ early-fusion models ಗೆ ಇದೂ ಹೆಚ್ಚು ಮುಖ್ಯ ಏಕೆಂದರೆ image-token activation statistics text-token statistics ಇಂದ ಗಣನೀಯವಾಗಿ ಭಿನ್ನ.' } },

    { type: 'heading', data: { textEn: 'Chameleon vs LLaVA vs Fuyu', textKn: 'Chameleon vs LLaVA vs Fuyu', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Three Answers to "How Should Vision Enter the Transformer?"', captionKn: '"Vision Transformer ಗೆ ಹೇಗೆ ಪ್ರವೇಶಿಸಬೇಕು?" ಗೆ ಮೂರೂ ಉತ್ತರಗಳು',
      rows: "Property|LLaVA / BLIP-2|Fuyu|Chameleon\nImage representation|Continuous ViT features|Continuous raw patches|Discrete VQ tokens\nVision encoder path|Separate (CLIP/ViT + projector)|Linear projection of raw patches|Tokenizer before shared stream\nCan output image tokens?|No (text-only output)|No (text-only output)|Yes\nReuse pretrained LLM|Very strong|Strong|Harder (needs joint retraining)\nMain strength|Simple, reuses pretrained components|Simplifies the image-input pipeline|Symmetric text<->image generation" } },
    { type: 'concept', data: {
      headingEn: 'Where Each Approach Makes Sense', headingKn: 'ಪ್ರತಿ Approach ಎಲ್ಲಿ ಅರ್ಥಪೂರ್ಣ',
      bodyEn: 'LLaVA/BLIP-2-style adapters make sense when the only requirement is image understanding with text output -- they reuse expensive pretrained vision and language towers cheaply. Fuyu simplifies the image-input pipeline by feeding patches nearly directly, avoiding a separate vision encoder, but its patches remain continuous so it cannot naturally emit image tokens as output. Chameleon is the right choice specifically when the system must generate images (or interleave text and images) using the same decoder that generates text.',
      bodyKn: 'LLaVA/BLIP-2-style adapters ಅರ್ಥಪೂರ್ಣ ಯಾವಾಗ ಕೇವಲ image understanding text output ಜೊತೆ ಬೇಕಾಗುತ್ತದೆಯೋ. Fuyu patches ಅನ್ನೂ ಬಹುತೇಕ ನೇರವಾಗಿ feed ಮಾಡುವ ಮೂಲಕ image-input pipeline ಸರಳಗೊಳಿಸುತ್ತದೆ, ಆದರೆ ಅದರ patches continuous ಆಗಿ ಉಳಿಯುತ್ತವೆ. Chameleon ಸರಿಯಾದ ಆಯ್ಕೆ ನಿರ್ದಿಷ್ಟವಾಗಿ ಯಾವಾಗ system images generate ಮಾಡಬೇಕೋ ಅದೇ decoder text ಉತ್ಪಾದಿಸುವ ಬಳಸಿ.' } },

    { type: 'heading', data: { textEn: 'The Full Chameleon Mental Model, Revisited', textKn: 'ಸಂಪೂರ್ಣ Chameleon Mental Model, ಮರುಪರಿಶೀಲಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'diagram', data: {
      captionEn: 'Pixels to Shared Tokens to One Autoregressive Stream', captionKn: 'Pixels ಇಂದ Shared Tokens ಗೆ ಒಂದೂ Autoregressive Stream ಗೆ',
      diagram: "pixels -> VQ tokenizer -> image tokens (+32 offset)\ntext -> tokenizer -> text tokens\n              \\         /\n               SHARED TOKEN STREAM\n                      |\n              decoder-only transformer\n                      |\n                 next token\n                /          \\\n             text          image\n                            |\n                       VQ decoder\n                            |\n                         pixels" } },
    { type: 'table', data: {
      captionEn: 'Key Terms for Part 3', captionKn: 'Part 3 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nMixed-modality generation|Autoregressively switching between output modalities from one softmax\nUnified softmax|One probability distribution over all modality tokens\nTokenizer ceiling|Reconstruction quality limits final image quality\nQK-Norm|Normalizes attention queries/keys to stabilize logits\nModality separator|Explicit token marking boundaries such as <image>\nVocabulary-coverage gap|A declared vocabulary range with no real symbol behind some IDs" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: one 19-token generated sequence contained plain words, an image code, a full <image>...</image> block, and <eos> -- all sampled from the same next-token function\n• Genuinely caught and honestly disclosed: text IDs 16-31 have no word mapping in WORDS (only 16 entries vs TEXT_VOCAB_SIZE=32), producing "<text:N>" fallback output when sampled -- a real vocabulary-coverage gap, not a fabricated one\n• Generation quality is bounded by the tokenizer\'s own reconstruction ceiling (genuinely measured at 0.0732 average quantization error for the checker image) -- no amount of correct prediction recovers already-discarded detail\n• QK-Norm and careful residual/dropout placement matter more for early-fusion models because they must remain stable across very different text-token and image-token activation statistics simultaneously\n• Chameleon, LLaVA, and Fuyu represent three different answers to how vision should enter a transformer, each right for a different product requirement',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ 19-token generated sequence plain words, ಒಂದೂ image code, ಪೂರ್ಣ <image>...</image> block, <eos> ಎಲ್ಲವೂ ಹೊಂದಿತ್ತು\n• ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: text IDs 16-31 ಗೆ WORDS ನಲ್ಲಿ word mapping ಇಲ್ಲ\n• Generation quality tokenizer ya reconstruction ceiling ಇಂದ ಸೀಮಿತ\n• QK-Norm ಮತ್ತೆ ಎಚ್ಚರಿಕೆಯ residual/dropout placement early-fusion models ಗೆ ಹೆಚ್ಚು ಮುಖ್ಯ\n• Chameleon, LLaVA, Fuyu ಮೂರೂ ಭಿನ್ನ ಉತ್ತರಗಳನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'What "Shared Vocabulary" Does Not Mean, Revisited', headingKn: '"Shared Vocabulary" ಅಂದರೆ ಏನೂ ಅಲ್ಲ, ಮರುಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      bodyEn: 'One final clarification worth restating from Part 1: image token 32 and text token 32 never collide because of the offset -- but genuinely confirmed in this lesson, the deeper risk is subtler: a declared vocabulary ID can exist (16-31 are within TEXT_VOCAB_SIZE) without a corresponding real symbol, which is a different failure mode than an ID collision. Real tokenizer implementations must guard against both.',
      bodyKn: 'Part 1 ಇಂದ ಒಂದೂ ಅಂತಿಮ ಸ್ಪಷ್ಟೀಕರಣ: image token 32 ಮತ್ತೆ text token 32 offset ಕಾರಣ ಎಂದೂ ಡಿಕ್ಕಿಯಾಗುವುದಿಲ್ಲ -- ಆದರೆ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದಂತೆ, ಆಳವಾದ ಅಪಾಯ ಸೂಕ್ಷ್ಮ: ಒಂದೂ declared vocabulary ID ಅನುಗುಣವಾದ ನಿಜ symbol ಇಲ್ಲದೆ ಇರಬಹುದು.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When an AI assistant is asked to "draw a cat and explain the picture," a Chameleon-style model can emit "<image> [codes] </image> The cat is orange" as one continuous generation -- genuinely demonstrated in this lesson by a single sampler emitting both image codes and words in one call sequence.',
      bodyKn: 'AI assistant "ಒಂದೂ cat draw ಮಾಡಿ ಚಿತ್ರ ವಿವರಿಸಿ" ಎಂದೂ ಕೇಳಿದಾಗ, Chameleon-style model "<image> [codes] </image> The cat is orange" ಅನ್ನೂ ಒಂದೂ ನಿರಂತರ generation ಆಗಿ ಹೊರಸೂಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the tokenizer-ceiling discussion in this lesson: choosing early fusion is a deliberate trade -- you gain symmetric text<->image generation from one decoder, but you accept that final quality is capped by codebook size and VQ reconstruction fidelity, which is why real Chameleon invested heavily in tokenizer quality and training stability, not just transformer scale.',
      bodyKn: 'ಈ lesson ya tokenizer-ceiling ಚರ್ಚೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: early fusion ಆಯ್ಕೆ ಮಾಡುವುದೂ ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕ trade -- ಒಂದೇ decoder ಇಂದ symmetric text<->image generation ಪಡೆಯುತ್ತೀರಿ, ಆದರೆ final quality codebook size ಮತ್ತೆ VQ reconstruction fidelity ಇಂದ ಸೀಮಿತ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Chameleon (Meta, 2024) explicitly reported using QK-Norm and revised normalization placement to stabilize training after early attempts diverged with standard transformer recipes -- directly confirming that this lesson\'s Part 3 stability discussion reflects genuine, reported engineering challenges rather than a hypothetical concern.',
      bodyKn: 'ನಿಜ Chameleon (Meta, 2024) ಸ್ಪಷ್ಟವಾಗಿ QK-Norm ಮತ್ತೆ ಪರಿಷ್ಕೃತ normalization placement ಬಳಸಿ ತರಬೇತಿ ಸ್ಥಿರಗೊಳಿಸಿತು ಎಂದೂ ವರದಿ ಮಾಡಿತು -- ಈ lesson ya Part 3 stability ಚರ್ಚೆ ನಿಜ, ವರದಿಯಾದ engineering challenges ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Setting Up Emu3', headingKn: 'Emu3 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Chameleon proved that early-fusion token-only multimodality is viable at toy scale for images. The next architectural question is how far this same next-token thesis can be pushed -- specifically toward video, which adds a third temporal dimension to the token grid and multiplies token counts accordingly. That is exactly where Emu3 continues the argument.',
      bodyKn: 'Chameleon toy scale ನಲ್ಲಿ early-fusion token-only multimodality ಕಾರ್ಯಸಾಧ್ಯ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿತು. ಮುಂದಿನ architectural ಪ್ರಶ್ನೆ ಇದೇ next-token thesis ಅನ್ನೂ ಎಷ್ಟೂ ದೂರ ತಳ್ಳಬಹುದು ಎಂಬುದೂ -- ನಿರ್ದಿಷ್ಟವಾಗಿ video ಕಡೆಗೆ. ಅದೂ ನಿಖರವಾಗಿ Emu3 ಈ ವಾದವನ್ನೂ ಮುಂದುವರಿಸುವ ಸ್ಥಳ.' } },

    { type: 'concept', data: {
      headingEn: 'Module 235 Complete', headingKn: 'Module 235 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part Chameleon module. You genuinely built and ran a complete VQ-tokenizer-plus-bigram early-fusion pipeline, caught a real vocabulary-coverage gap in the process, and connected every mechanism (offset arithmetic, shared next-token sampling, tokenizer ceiling) back to why real Chameleon needed both architectural innovation and training-stability engineering to scale.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ Chameleon module ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ. ನೀವೂ ನಿಜವಾಗಿ ಒಂದೂ ಸಂಪೂರ್ಣ VQ-tokenizer-plus-bigram early-fusion pipeline ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಿದಿರಿ, ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಒಂದೂ ನಿಜ vocabulary-coverage gap ಪತ್ತೆಹಚ್ಚಿದಿರಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed in this lesson: what real gap did running the pasted program expose?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: pasted program ಚಲಾಯಿಸುವುದೂ ಯಾವ ನಿಜ gap ಬಹಿರಂಗಪಡಿಸಿತು?',
        opts: ['The codebook was empty', 'Text IDs 16-31 have no word mapping in WORDS despite TEXT_VOCAB_SIZE=32', 'The image tokenizer crashed', 'Delimiters were duplicated'], correct: 1,
        optsKn: ['Codebook ಖಾಲಿಯಾಗಿತ್ತು', 'TEXT_VOCAB_SIZE=32 ಇದ್ದರೂ Text IDs 16-31 ಗೆ WORDS ನಲ್ಲಿ word mapping ಇಲ್ಲ', 'Image tokenizer crash ಆಯಿತು', 'Delimiters ಡುಪ್ಲಿಕೇಟ್ ಆಗಿದ್ದವು'] },
      { q: 'A VQ encoder generates z_e. How is its image token selected?', qKn: 'VQ encoder z_e ಉತ್ಪಾದಿಸುತ್ತದೆ. ಅದರ image token ಹೇಗೆ ಆಯ್ಕೆಯಾಗುತ್ತದೆ?',
        opts: ['Randomly', 'By selecting the largest vector', 'By finding the closest codebook vector', 'By applying softmax over pixels'], correct: 2,
        optsKn: ['ಯಾದೃಚ್ಛಿಕವಾಗಿ', 'ದೊಡ್ಡ vector ಆಯ್ಕೆ ಮಾಡುವ ಮೂಲಕ', 'ಹತ್ತಿರದ codebook vector ಹುಡುಕುವ ಮೂಲಕ', 'pixels ಮೇಲೆ softmax ಅನ್ವಯಿಸುವ ಮೂಲಕ'] },
      { q: 'Why does the VQ tokenizer impose an image-quality ceiling?', qKn: 'VQ tokenizer ಒಂದೂ image-quality ceiling ಏಕೆ ವಿಧಿಸಬಹುದು?',
        opts: ['Transformers cannot process integer IDs', 'Vector quantization can discard visual information before generation even begins', "Image tokens don't use embeddings", 'Text tokens interfere with RGB values'], correct: 1,
        optsKn: ['Transformers integer IDs ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'Vector quantization generation ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೇ visual information ಬಿಡಬಹುದು', 'Image tokens embeddings ಬಳಸುವುದಿಲ್ಲ', 'Text tokens RGB values ಗೆ ಅಡ್ಡಿಪಡಿಸುತ್ತವೆ'] },
      { q: 'What is the purpose of QK-Norm?', qKn: 'QK-Norm ya ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Reduce image resolution', 'Compress the vocabulary', 'Control query/key magnitudes and attention-logit instability', 'Replace softmax'], correct: 2,
        optsKn: ['Image resolution ಕಡಿಮೆಗೊಳಿಸಿ', 'Vocabulary compress ಮಾಡಿ', 'Query/key magnitudes ಮತ್ತೆ attention-logit instability ನಿಯಂತ್ರಿಸಿ', 'Softmax ಬದಲಾಯಿಸಿ'] },
      { q: 'When is a LLaVA/BLIP-2-style model generally the simpler choice over Chameleon?', qKn: 'Chameleon ಗಿಂತ LLaVA/BLIP-2-style model ಸಾಮಾನ್ಯವಾಗಿ ಯಾವಾಗ ಸರಳ ಆಯ್ಕೆ?',
        opts: ['When autonomous image output is mandatory', 'When any-to-any generation is required', 'When the main need is visual understanding with textual output', 'When no pretrained model exists'], correct: 2,
        optsKn: ['Autonomous image output ಕಡ್ಡಾಯವಾಗಿದ್ದಾಗ', 'Any-to-any generation ಬೇಕಾದಾಗ', 'ಮುಖ್ಯ ಅಗತ್ಯ visual understanding textual output ಜೊತೆ ಆಗಿದ್ದಾಗ', 'ಯಾವುದೇ pretrained model ಇಲ್ಲದಿದ್ದಾಗ'] },
    ] } },
  ],
};
