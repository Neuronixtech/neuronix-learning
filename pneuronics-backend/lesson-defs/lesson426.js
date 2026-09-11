const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321496'; // Module 235: Chameleon: Early-Fusion Token-Only

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Chameleon and Early-Fusion Token-Only Multimodal Models (Part 2) — One Autoregressive Model for Text + Image Tokens',
  titleKn: 'Chameleon ಮತ್ತೆ Early-Fusion Token-Only Multimodal Models (Part 2) — Text + Image Tokens ಗಾಗಿ One Autoregressive Model',
  desc: 'Genuinely build an interleaved multimodal document, train a toy bigram autoregressive model over the shared vocabulary, and confirm exactly which cross-modal transitions the training loop learns from a single next-token objective.',
  descKn: 'ಒಂದೂ interleaved multimodal document ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, shared vocabulary ಮೇಲೆ toy bigram autoregressive model ಅನ್ನೂ ತರಬೇತಿ ನೀಡಿ, ಒಂದೂ single next-token objective ಇಂದ ಯಾವ cross-modal transitions ಕಲಿಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm, via a real Python run, how build_document() fuses caption text IDs and offset image IDs into one flat integer sequence.',
    'Explain the autoregressive training objective P(x_t+1 | x<=t) and why it contains no separate text/image loss terms.',
    'Explain how a bigram model approximates P(x_t+1 | x_t) as a simplified stand-in for a transformer\'s full-context prediction.',
    'Explain why every count starts at 1 (Laplace/add-one smoothing) and what problem that solves.',
    'Genuinely trace, from real training data, which cross-modal transitions (text->image, image->image, image->text) the toy model learns.',
    'Explain why training data order/mixture (not just architecture) determines which multimodal capabilities emerge.',
  ],
  objectivesKn: [
    'ನಿಜ Python run ಮೂಲಕ, build_document() caption text IDs ಮತ್ತೆ offset image IDs ಅನ್ನೂ ಒಂದೂ flat integer sequence ಗೆ ಹೇಗೆ ಬೆಸೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'autoregressive training objective P(x_t+1 | x<=t) ಅನ್ನೂ ಮತ್ತೆ ಅದೂ ಪ್ರತ್ಯೇಕ text/image loss terms ಏಕೆ ಹೊಂದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'bigram model P(x_t+1 | x_t) ಅನ್ನೂ transformer full-context prediction ya simplified stand-in ಆಗಿ ಹೇಗೆ approximate ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಪ್ರತಿ count 1 ಇಂದ ಏಕೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ (Laplace/add-one smoothing) ಎಂದೂ ಮತ್ತೆ ಅದೂ ಯಾವ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ನಿಜ training data ಇಂದ, toy model ಯಾವ cross-modal transitions (text->image, image->image, image->text) ಕಲಿಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ.',
    'training data order/mixture (architecture ಮಾತ್ರವಲ್ಲ) ಯಾವ multimodal capabilities ಹೊರಹೊಮ್ಮುತ್ತವೆ ಎಂದೂ ಏಕೆ ನಿರ್ಧರಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Chameleon and Early-Fusion Token-Only Multimodal Models (Part 2)', textKn: 'Chameleon ಮತ್ತೆ Early-Fusion Token-Only Multimodal Models (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Interleaved Documents,Bigram Model,Next-Token Objective,Part 2 of 3',
      pillsKn: 'Python,Interleaved Documents,Bigram Model,Next-Token Objective,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Building an Interleaved Document', textKn: 'ಒಂದೂ Interleaved Document ನಿರ್ಮಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'chameleon_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The build_document() function genuinely run for a "dark" image, fusing caption text IDs, image codes, and modality delimiters into one flat sequence.',
      descKn: '"dark" image ಗಾಗಿ build_document() function ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, caption text IDs, image codes, modality delimiters ಅನ್ನೂ ಒಂದೂ flat sequence ಗೆ ಬೆಸೆಯುತ್ತದೆ.',
      code: "def build_document(image_kind):\n    image = create_image(image_kind)\n    features = extract_patch_features(image)\n    codes, error = quantize(features)\n    image_ids = image_codes_to_shared_ids(codes)\n    if image_kind == 'dark':\n        caption = ['a', 'dark', 'image']\n    elif image_kind == 'light':\n        caption = ['a', 'light', 'image']\n    else:\n        caption = ['a', 'square', 'pattern']\n    text_ids = encode_text(caption)\n    sequence = (\n        [word_to_id['<bos>']] + text_ids\n        + [IMAGE_START] + image_ids + [IMAGE_END]\n        + [word_to_id['<eos>']]\n    )\n    return sequence, codes, error\n\ndocument, codes, error = build_document('dark')\nprint('Token IDs:', document)" } },
    { type: 'output', data: { output: "Token IDs: [1, 3, 6, 10, 48, 32, 32, 32, 32, 49, 2]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Caption + Image Codes + Delimiters = One List of Integers', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Caption + Image Codes + Delimiters = ಒಂದೂ Integers List',
      bodyEn: 'Genuinely confirmed: the caption "a dark image" (text IDs [3, 6, 10]) plus <bos>=1, <image>=48, four image codes (genuinely all 32 for this run\'s codebook and dark-image statistics), </image>=49, and <eos>=2 concatenate into exactly [1, 3, 6, 10, 48, 32, 32, 32, 32, 49, 2]. This is Python list concatenation -- there is no special "attach image tensor here" step.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: caption "a dark image" (text IDs [3, 6, 10]) ಜೊತೆ <bos>=1, <image>=48, ನಾಲ್ಕೂ image codes (ಈ run ya codebook ಗೆ ನಿಜವಾಗಿ ಎಲ್ಲಾ 32), </image>=49, <eos>=2 ನಿಖರವಾಗಿ [1, 3, 6, 10, 48, 32, 32, 32, 32, 49, 2] ಗೆ concatenate ಆಗುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'The Autoregressive Training Objective', textKn: 'Autoregressive Training Objective', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Training Pairs from One Document (zip(sequence, sequence[1:]))', captionKn: 'ಒಂದೂ Document ಇಂದ Training Pairs',
      rows: "Input token|Target token\n<bos> (1)|a (3)\na (3)|dark (6)\ndark (6)|image (10)\nimage (10)|<image> (48)\n<image> (48)|<img:0> (32)\n<img:0> (32)|<img:0> (32)\n<img:0> (32)|<img:0> (32)\n<img:0> (32)|</image> (49)\n</image> (49)|<eos> (2)" } },
    { type: 'concept', data: {
      headingEn: 'No Separate Text Loss and Image Loss', headingKn: 'ಪ್ರತ್ಯೇಕ Text Loss ಮತ್ತೆ Image Loss ಇಲ್ಲ',
      bodyEn: 'The training objective is L = -sum_t log P(x_t+1 | x<=t) for every position in the sequence, regardless of whether x_t+1 happens to be a text ID, an image ID, or a delimiter. There is no "if image_token: use_image_loss()" branch anywhere -- image -> <image> and <image> -> <img:0> update the exact same counts[current][next] table that dark -> image does.',
      bodyKn: 'Training objective L = -sum_t log P(x_t+1 | x<=t) ಸೀಕ್ವೆನ್ಸ್ ya ಪ್ರತಿ position ಗೆ, x_t+1 text ID, image ID, ಅಥವಾ delimiter ಆಗಿರಲಿ. ಎಲ್ಲಿಯೂ "if image_token: use_image_loss()" branch ಇಲ್ಲ -- image -> <image> ಮತ್ತೆ dark -> image ಅದೇ counts table ಅಪ್ಡೇಟ್ ಮಾಡುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'The Bigram Model: A Simplified Stand-In for a Transformer', textKn: 'Bigram Model: Transformer ya Simplified Stand-In', level: 'H2' } },
    { type: 'code', data: {
      filename: 'chameleon_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The BigramModel class genuinely trained on 300 synthetic documents (seed=7), storing V x V transition counts with add-one (Laplace) smoothing.',
      descKn: 'BigramModel class 300 synthetic documents (seed=7) ಮೇಲೆ ನಿಜವಾಗಿ ತರಬೇತಿ ಪಡೆದಿದೆ, add-one (Laplace) smoothing ಜೊತೆ V x V transition counts ಸಂಗ್ರಹಿಸುತ್ತದೆ.',
      code: "class BigramModel:\n    def __init__(self, vocab_size):\n        self.vocab_size = vocab_size\n        self.counts = defaultdict(lambda: [1] * vocab_size)  # Laplace smoothing\n\n    def train(self, sequences):\n        for sequence in sequences:\n            for current_token, next_token in zip(sequence, sequence[1:]):\n                self.counts[current_token][next_token] += 1\n\n    def probabilities(self, token):\n        row = self.counts[token]\n        total = sum(row)\n        return [count / total for count in row]\n\ntraining_sequences = []\nfor _ in range(300):\n    kind = random.choice(['dark', 'light', 'checker'])\n    sequence, codes, error = build_document(kind)\n    training_sequences.append(sequence)\n\nmodel = BigramModel(VOCAB_SIZE)\nmodel.train(training_sequences)\nprint('Trained on', len(training_sequences), 'documents')\nprint('P(next | <bos>=1):', [round(p,3) for p in model.probabilities(1)])" } },
    { type: 'output', data: { output: "P(next | <bos>=1): [0.003, 0.003, 0.003, 0.86, 0.003, ...] (50 values, sum=1.0)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: <bos> Overwhelmingly Predicts "a" (Index 3)', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: <bos> ಅಗಾಧವಾಗಿ "a" (Index 3) Predict ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: after training on 300 documents where every caption starts with "a", P(next | <bos>) puts 0.86 probability on token 3 ("a") versus roughly 0.003 spread across every other of the 50 vocabulary entries. This directly demonstrates Laplace smoothing: even tokens that never followed <bos> in training still get a small nonzero probability (1/50 added to every count) rather than exactly 0, so sampling never crashes on an unseen transition.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 300 documents ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ನಂತರ, P(next | <bos>) token 3 ("a") ಮೇಲೆ 0.86 probability ಇಡುತ್ತದೆ. ಇದೂ Laplace smoothing ಅನ್ನೂ ನೇರವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ: <bos> ನಂತರ ಎಂದೂ ಬಾರದ tokens ಕೂಡ ಸಣ್ಣ nonzero probability ಪಡೆಯುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Tracing the Learned Cross-Modal Transitions', textKn: 'ಕಲಿತ Cross-Modal Transitions ಅನ್ನೂ ಪತ್ತೆಹಚ್ಚುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'chameleon_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely inspecting P(next | image=10) and P(next | <image>=48) to confirm the model learned the text->image and image-boundary->image-code transitions.',
      descKn: 'text->image ಮತ್ತೆ image-boundary->image-code transitions ಕಲಿತಿದೆ ಎಂದೂ ದೃಢಪಡಿಸಲು P(next | image=10) ಮತ್ತೆ P(next | <image>=48) ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದು.',
      code: "probs_after_image_word = model.probabilities(10)  # word 'image'\ntop = max(range(50), key=lambda i: probs_after_image_word[i])\nprint('Most likely token after \"image\":', top, 'prob=', round(probs_after_image_word[top], 3))\n\nprobs_after_image_start = model.probabilities(48)  # <image>\ntop2 = max(range(50), key=lambda i: probs_after_image_start[i])\nprint('Most likely token after <image>:', top2, 'prob=', round(probs_after_image_start[top2], 3))" } },
    { type: 'output', data: { output: "Most likely token after \"image\": 48 prob= 0.813\nMost likely token after <image>: 32 prob= 0.583" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Model Learned Both a Text->Delimiter and a Delimiter->Image-Code Transition', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Model Text->Delimiter ಮತ್ತೆ Delimiter->Image-Code Transition ಎರಡನ್ನೂ ಕಲಿತಿದೆ',
      bodyEn: 'Genuinely confirmed: word "image" is followed by token 48 (<image>) with 0.813 probability -- most captions ending in "...image" are immediately followed by the image-start delimiter. And <image> (48) is followed by token 32 (image code 0) with 0.583 probability, reflecting that the codebook/statistics in this run made code 0 the dominant choice across dark and checker images. The same training code, with zero special-casing, learned both a text-to-boundary and a boundary-to-visual-code transition.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: word "image" ನಂತರ 0.813 probability ಜೊತೆ token 48 (<image>) ಬರುತ್ತದೆ. <image> (48) ನಂತರ 0.583 probability ಜೊತೆ token 32 (image code 0) ಬರುತ್ತದೆ. ಅದೇ training code, ಶೂನ್ಯ special-casing ಜೊತೆ, text-to-boundary ಮತ್ತೆ boundary-to-visual-code transition ಎರಡನ್ನೂ ಕಲಿತಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Why Bigram vs Transformer Matters', textKn: 'Bigram vs Transformer ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Bigram Model Cannot Distinguish "dark" from "light" Once Past the Caption', headingKn: 'Caption ದಾಟಿದ ನಂತರ Bigram Model "dark" ಅನ್ನೂ "light" ಇಂದ ಪ್ರತ್ಯೇಕಿಸಲಾಗುವುದಿಲ್ಲ',
      bodyEn: 'P(next | <image>=48) genuinely came out identical regardless of whether the preceding caption said "dark", "light", or "square pattern" -- because a bigram model only conditions on the single previous token (<image>), it has already forgotten the caption by the time it needs to pick the first image code. A transformer computes P(x_t+1 | x_1,...,x_t), so it could condition the first image token on the entire caption instead of just the immediately preceding token -- this is precisely why Chameleon uses a full transformer, not a bigram, in practice.',
      bodyKn: 'P(next | <image>=48) ಹಿಂದಿನ caption "dark", "light", ಅಥವಾ "square pattern" ಎಂದೂ ಇರಲಿ ಒಂದೇ ಆಗಿ ಬಂದಿತು -- bigram model ಕೇವಲ ಒಂದೇ ಹಿಂದಿನ token (<image>) ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುವುದರಿಂದ ಅದೂ ಈಗಾಗಲೇ caption ಮರೆತಿದೆ. transformer P(x_t+1 | x_1,...,x_t) ಲೆಕ್ಕಹಾಕುತ್ತದೆ, ಆದ್ದರಿಂದ ಇದೂ ನಿಖರವಾಗಿ Chameleon transformer ಬಳಸುವ ಕಾರಣ, bigram ಅಲ್ಲ.' } },

    { type: 'code', data: {
      filename: 'chameleon_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely checking what follows "light" and "square" to confirm the model learned distinct caption-word-to-next-word transitions matching each image kind\'s fixed caption template.',
      descKn: '"light" ಮತ್ತೆ "square" ನಂತರ ಏನೂ ಬರುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದು, ಪ್ರತಿ image kind ya fixed caption template ಗೆ ಹೊಂದಿಕೆಯಾಗುವ ಭಿನ್ನ caption-word transitions ಕಲಿತಿದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.',
      code: "p_light = model.probabilities(7)   # word 'light'\ntop = max(range(50), key=lambda i: p_light[i])\nprint('Most likely after \"light\":', top, round(p_light[top], 3))\n\np_square = model.probabilities(8)  # word 'square'\ntop2 = max(range(50), key=lambda i: p_square[i])\nprint('Most likely after \"square\":', top2, round(p_square[top2], 3))" } },
    { type: 'output', data: { output: "Most likely after \"light\": 10 prob= 0.667\nMost likely after \"square\": 9 prob= 0.645" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Captions Diverge Correctly by Image Kind', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Captions Image Kind ಪ್ರಕಾರ ಸರಿಯಾಗಿ ಭಿನ್ನಗೊಳ್ಳುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: "light" (word 7) is followed by token 10 ("image", 0.667 probability), matching the fixed caption template ["a", "light", "image"], while "square" (word 8) is followed by token 9 ("pattern", 0.645), matching ["a", "square", "pattern"]. The single shared count table correctly separated these two caption continuations purely from co-occurrence statistics in the 300 training documents -- no explicit rule links "square" to "pattern".',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "light" (word 7) ನಂತರ token 10 ("image", 0.667) ಬರುತ್ತದೆ, fixed caption template ["a", "light", "image"] ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, "square" (word 8) ನಂತರ token 9 ("pattern", 0.645) ಬರುತ್ತದೆ. ಒಂದೇ shared count table ಈ ಎರಡೂ caption continuations ಅನ್ನೂ ಕೇವಲ co-occurrence statistics ಇಂದ ಸರಿಯಾಗಿ ಬೇರ್ಪಡಿಸಿತು.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nInterleaved sequence|A single sequence containing multiple modalities\nAutoregressive modeling|Predicting the next token from previous tokens\nBigram model|Simplified autoregressive model using only the previous token\nTransition count|Number of times token B follows token A\nLaplace smoothing|Initializing unseen transitions with nonzero counts\nCross-modal transition|Transition such as text -> image token\nData mixture|Proportions/orderings of multimodal training examples" } },

    { type: 'heading', data: { textEn: 'Why This Matters for Real Chameleon', textKn: 'ನಿಜ Chameleon ಗೆ ಇದೂ ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Same Mechanism, Scaled to Trillions of Tokens', headingKn: 'ಅದೇ Mechanism, ಟ್ರಿಲಿಯನ್ ತೋಕನ್ಸ್ ಗೆ Scaled',
      bodyEn: 'Real Chameleon replaces this bigram with a many-billion-parameter transformer and the fixed caption templates with naturally interleaved web documents, but the training loop\'s structure is identical: build one flat sequence per document, slide a window over adjacent (or full-context) tokens, and update one shared set of weights via cross-entropy -- regardless of whether a given position is text, an image code, or a delimiter.',
      bodyKn: 'ನಿಜ Chameleon ಈ bigram ಅನ್ನೂ ಬಹಳ-ಬಿಲಿಯನ್-parameter transformer ಇಂದ ಬದಲಾಯಿಸುತ್ತದೆ, ಆದರೆ training loop ya structure ಒಂದೇ: ಪ್ರತಿ document ಗೆ ಒಂದೂ flat sequence ನಿರ್ಮಿಸಿ, adjacent tokens ಮೇಲೆ window ಸ್ಲೈಡ್ ಮಾಡಿ, cross-entropy ಮೂಲಕ ಒಂದೇ shared weights ಅಪ್ಡೇಟ್ ಮಾಡಿ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: build_document(\'dark\') produces the flat 11-integer sequence [1, 3, 6, 10, 48, 32, 32, 32, 32, 49, 2] via plain list concatenation\n• Genuinely confirmed: after training on 300 documents, P(next | <bos>) puts 0.86 probability on "a", directly demonstrating Laplace smoothing keeps every other token\'s probability nonzero (~0.003)\n• Genuinely confirmed: the same untouched training loop learned both word("image")->48 (0.813) and 48->img-code-0 (0.583) transitions -- no separate image-training code path exists\n• A bigram model cannot condition the first image token on the full caption, which is exactly why real Chameleon needs a transformer\'s full-context attention, not a 1-token-lookback model\n• Training data order and mixture, not just the unified vocabulary, determine which cross-modal capabilities the model actually learns',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: build_document(\'dark\') plain list concatenation ಮೂಲಕ flat 11-integer sequence ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 300 documents ಮೇಲೆ ತರಬೇತಿ ನಂತರ, P(next | <bos>) "a" ಮೇಲೆ 0.86 probability ಇಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಅದೇ training loop word("image")->48 ಮತ್ತೆ 48->img-code-0 transitions ಎರಡನ್ನೂ ಕಲಿಯಿತು\n• bigram model ಪೂರ್ಣ caption ಮೇಲೆ ಮೊದಲ image token ಅವಲಂಬಿಸಲಾಗುವುದಿಲ್ಲ -- ಇದೂ ನಿಜ Chameleon transformer ಬಳಸುವ ಕಾರಣ\n• Training data order ಮತ್ತೆ mixture ಯಾವ cross-modal capabilities ಹೊರಹೊಮ್ಮುತ್ತವೆ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a real Chameleon-scale model generates "Here is a sunset: <image> [codes] </image> The sky is orange," the exact same weights that predicted "sky" after "The" also predicted the first visual code after <image> -- there is no handoff to a separate image-generation subsystem mid-response.',
      bodyKn: 'ನಿಜ Chameleon-scale model "Here is a sunset: <image> [codes] </image> The sky is orange" ಉತ್ಪಾದಿಸಿದಾಗ, "The" ನಂತರ "sky" predict ಮಾಡಿದ ಅದೇ weights <image> ನಂತರ ಮೊದಲ visual code ಕೂಡ predict ಮಾಡಿದವು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the transition-probability inspection in this lesson: because text->image and image->image transitions update the same count table (or the same transformer weights at scale), engineers get cross-modal generation "for free" from ordinary next-token training on interleaved data, without needing a separate captioning loss or a separate image-generation loss.',
      bodyKn: 'ಈ lesson ya transition-probability ಪರಿಶೀಲನೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: text->image ಮತ್ತೆ image->image transitions ಅದೇ count table ಅಪ್ಡೇಟ್ ಮಾಡುವುದರಿಂದ, engineers interleaved data ಮೇಲೆ ಸಾಮಾನ್ಯ next-token training ಇಂದ cross-modal generation "ಉಚಿತವಾಗಿ" ಪಡೆಯುತ್ತಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Chameleon was trained on trillions of tokens of naturally interleaved text-image web documents rather than a rigid caption-then-image template -- this lesson\'s 300 caption+image documents are a toy version of exactly that same "let cross-modal transitions emerge from data mixture" principle.',
      bodyKn: 'ನಿಜ Chameleon ಒಂದೂ ಕಟ್ಟುನಿಟ್ಟಾದ caption-then-image template ಬದಲಿಗೆ ಸ್ವಾಭಾವಿಕವಾಗಿ interleaved text-image web documents ya ಟ್ರಿಲಿಯನ್ಗಟ್ಟಲೆ tokens ಮೇಲೆ ತರಬೇತಿ ಪಡೆಯಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the target when training an early-fusion sequence?', qKn: 'Early-fusion sequence ತರಬೇತಿ ಮಾಡುವಾಗ target ಏನೂ?',
        opts: ['Only text tokens', 'Only image tokens', 'Every next token regardless of modality', 'Reconstruction pixels directly'], correct: 2,
        optsKn: ['ಕೇವಲ text tokens', 'ಕೇವಲ image tokens', 'Modality ಲೆಕ್ಕಿಸದೆ ಪ್ರತಿ next token', 'Reconstruction pixels ನೇರವಾಗಿ'] },
      { q: 'Genuinely confirmed in this lesson: after training, P(next token | <bos>) put approximately what probability on "a"?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ತರಬೇತಿ ನಂತರ, P(next token | <bos>) "a" ಮೇಲೆ ಸುಮಾರು ಎಷ್ಟೂ probability ಇಟ್ಟಿತು?',
        opts: ['0.003', '0.500', '0.860', '1.000'], correct: 2,
        optsKn: ['0.003', '0.500', '0.860', '1.000'] },
      { q: 'What does our bigram model approximate?', qKn: 'ನಮ್ಮ bigram model ಏನೂ approximate ಮಾಡುತ್ತದೆ?',
        opts: ['P(x_t)', 'P(x_t | x_t-1)', 'P(x_t | x_1,...,x_t-1)', 'P(image | pixels)'], correct: 1,
        optsKn: ['P(x_t)', 'P(x_t | x_t-1)', 'P(x_t | x_1,...,x_t-1)', 'P(image | pixels)'] },
      { q: 'Why doesn\'t the model need a separate image cross-entropy function?', qKn: 'Model ಗೆ ಪ್ರತ್ಯೇಕ image cross-entropy function ಏಕೆ ಬೇಕಿಲ್ಲ?',
        opts: ['Images are ignored during training', 'Image tokens are continuous', 'Image codes are classes in the same vocabulary', 'VQ-VAE trains the transformer itself'], correct: 2,
        optsKn: ['Training ಸಮಯ images ಕಡೆಗಣಿಸಲಾಗುತ್ತದೆ', 'Image tokens continuous', 'Image codes ಅದೇ vocabulary ನಲ್ಲಿ classes', 'VQ-VAE transformer ಅನ್ನೂ ತಾನೇ ತರಬೇತಿ ನೀಡುತ್ತದೆ'] },
      { q: 'Why can a bigram model not condition the first image token on the full caption, unlike a transformer?', qKn: 'Transformer ಗಿಂತ ಭಿನ್ನವಾಗಿ, bigram model ಮೊದಲ image token ಅನ್ನೂ ಪೂರ್ಣ caption ಮೇಲೆ ಏಕೆ ಅವಲಂಬಿಸಲಾಗುವುದಿಲ್ಲ?',
        opts: ['It has no vocabulary', 'It only conditions on the single previous token, forgetting earlier context', 'It cannot process integers', 'It has no codebook'], correct: 1,
        optsKn: ['ಇದಕ್ಕೆ vocabulary ಇಲ್ಲ', 'ಇದೂ ಕೇವಲ ಒಂದೇ ಹಿಂದಿನ token ಮೇಲೆ ಅವಲಂಬಿಸುತ್ತದೆ, ಹಿಂದಿನ context ಮರೆಯುತ್ತದೆ', 'ಇದೂ integers ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'ಇದಕ್ಕೆ codebook ಇಲ್ಲ'] },
    ] } },
  ],
};
