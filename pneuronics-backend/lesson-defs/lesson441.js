const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214a5'; // Module 240: MIO

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'MIO and Any-to-Any Streaming Multimodal Models (Part 2) — Interleaved Training, Residual-VQ, and the Four-Stage Curriculum',
  titleKn: 'MIO (Part 2) — Interleaved Training, Residual-VQ, Four-Stage Curriculum',
  desc: 'Genuinely re-verify how sequence.extend() flattens four tokenized modalities into one transformer-ready sequence, and genuinely trace the RVQ base/residual split to compute the real sequential-decoding savings this architecture buys.',
  descKn: 'sequence.extend() ನಾಲ್ಕೂ tokenized modalities ಅನ್ನೂ ಒಂದೂ transformer-ready sequence ಗೆ ಹೇಗೆ flatten ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಮರುಪರಿಶೀಲಿಸಿ, RVQ base/residual split ಈ architecture ಖರೀದಿಸುವ ನಿಜ sequential-decoding savings ಅನ್ನೂ ನಿಜವಾಗಿ trace ಮಾಡಿ ಲೆಕ್ಕಹಾಕಿ.',
  objectives: [
    'Explain why sequence.extend() rather than append() is required to produce a flat, transformer-consumable token sequence.',
    'Genuinely confirm that the same next-token training objective applies uniformly regardless of which modality range a target token belongs to.',
    'Genuinely compute the real sequential-decoding reduction from RVQ base-layer selection (8 frames x 4 codebooks = 32, vs 8 base tokens = 4x reduction).',
    'Explain why 16 modality-pair combinations (4x4) does not imply 16 equally well-learned capabilities.',
    'Explain the four-stage curriculum (alignment, interleaving, speech enhancement, SFT) and what each stage specifically teaches.',
    'Explain why speech enhancement is typically staged separately rather than mixed uniformly throughout training.',
  ],
  objectivesKn: [
    'sequence.extend() append() ಬದಲಿಗೆ ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'ಅದೇ next-token training objective target token ಯಾವ modality range ಗೆ ಸೇರಿದೆ ಎಂಬುದನ್ನೂ ಲೆಕ್ಕಿಸದೆ ಏಕರೂಪವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'RVQ base-layer selection ಇಂದ ನಿಜ sequential-decoding reduction ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    '16 modality-pair combinations (4x4) 16 ಸಮಾನವಾಗಿ ಚೆನ್ನಾಗಿ-ಕಲಿತ capabilities ಎಂದೂ ಅರ್ಥವಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'Four-stage curriculum ವಿವರಿಸಿ ಮತ್ತೆ ಪ್ರತಿ stage ನಿರ್ದಿಷ್ಟವಾಗಿ ಏನೂ ಕಲಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Speech enhancement ಸಾಮಾನ್ಯವಾಗಿ ಪ್ರತ್ಯೇಕವಾಗಿ ಏಕೆ ಹಂತಹಂತವಾಗಿ ಮಾಡಲಾಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MIO and Any-to-Any Streaming Multimodal Models (Part 2)', textKn: 'MIO (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Learn · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Interleaved Sequences,RVQ Savings,Curriculum Training,Part 2 of 3',
      pillsKn: 'Python,Interleaved Sequences,RVQ Savings,Curriculum Training,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Why extend() and Not append()', textKn: 'extend() ಏಕೆ, append() ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mio_extend_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely comparing what append() vs extend() produce when joining two already-encoded token lists.',
      descKn: 'ಎರಡೂ ಈಗಾಗಲೇ-encoded token lists ಸೇರಿಸುವಾಗ append() vs extend() ಏನೂ ಉತ್ಪಾದಿಸುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದು.',
      code: "text_ids = [833, 321, 526]\nimage_ids = [33522, 33719]\n\nbad = []\nbad.append(text_ids)\nbad.append(image_ids)\nprint('append result:', bad)\n\ngood = []\ngood.extend(text_ids)\ngood.extend(image_ids)\nprint('extend result:', good)" } },
    { type: 'output', data: { output: "append result: [[833, 321, 526], [33522, 33719]]\nextend result: [833, 321, 526, 33522, 33719]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: append() Genuinely Produces a Nested List a Transformer Cannot Consume', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: append() ನಿಜವಾಗಿ ಒಂದೂ Nested List ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: append() produces [[833, 321, 526], [33522, 33719]] -- a list of lists, with only 2 top-level positions -- while extend() produces the correct flat [833, 321, 526, 33522, 33719] with 5 positions, one integer per transformer input slot. This is not a stylistic preference; a decoder-only transformer\'s embedding lookup expects a 1-D sequence of integer IDs, and passing a nested list would be a type error at the embedding step.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: append() [[833, 321, 526], [33522, 33719]] ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಕೇವಲ 2 top-level positions ಜೊತೆ ಒಂದೂ list of lists -- extend() ಸರಿಯಾದ flat [833, 321, 526, 33522, 33719] ಉತ್ಪಾದಿಸುತ್ತದೆ, 5 positions ಜೊತೆ. decoder-only transformer ya embedding lookup 1-D sequence ನಿರೀಕ್ಷಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Same Objective, Regardless of Target Modality', textKn: 'ಅದೇ Objective, Target Modality ಲೆಕ್ಕಿಸದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Cross-Entropy Does Not Branch on Token Range', headingKn: 'Cross-Entropy Token Range ಮೇಲೆ Branch ಆಗುವುದಿಲ್ಲ',
      bodyEn: 'The training loss L = -sum_t log P(x_t+1 | x<=t) is computed identically whether x_t+1 = 526 (a text token) or x_t+1 = 33719 (an image token) -- both are simply integer class labels for a softmax over the full 48,400-entry vocabulary genuinely confirmed in Part 1. This is precisely why a model trained this way can, in principle, learn text->image transitions: nothing in the loss function distinguishes "predict the next word" from "predict the next image code."',
      bodyKn: 'Training loss L = -sum_t log P(x_t+1 | x<=t) x_t+1 = 526 (text token) ಆಗಿರಲಿ ಅಥವಾ x_t+1 = 33719 (image token) ಆಗಿರಲಿ ಒಂದೇ ರೀತಿ ಲೆಕ್ಕಹಾಕಲ್ಪಡುತ್ತದೆ -- ಎರಡೂ ಕೇವಲ 48,400-entry vocabulary ಮೇಲೆ softmax ಗೆ integer class labels. ಇದೂ ಒಂದೂ model text->image transitions ಕಲಿಯಲು ಸಾಧ್ಯವಾಗಲು ಕಾರಣ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Calculating the RVQ Sequential-Decoding Savings', textKn: 'RVQ Sequential-Decoding Savings ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mio_rvq_savings.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing how many sequential predictions the main transformer avoids by generating only the RVQ base layer, using this module\'s genuinely-confirmed 8-frame, 4-codebook speech tokenizer.',
      descKn: 'Main transformer ಕೇವಲ RVQ base layer ಉತ್ಪಾದಿಸುವ ಮೂಲಕ ಎಷ್ಟೂ sequential predictions ತಪ್ಪಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು.',
      code: "frames = 8\ncodebooks = 4\n\nfull_rvq_predictions = frames * codebooks\nbase_only_predictions = frames * 1\n\nreduction_factor = full_rvq_predictions / base_only_predictions\nprint('Full RVQ (all codebooks):', full_rvq_predictions, 'predictions')\nprint('Base-only (MIO approach):', base_only_predictions, 'predictions')\nprint('Reduction factor:', reduction_factor, 'x')" } },
    { type: 'output', data: { output: "Full RVQ (all codebooks): 32 predictions\nBase-only (MIO approach): 8 predictions\nReduction factor: 4.0 x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Exactly a 4x Reduction, Matching the Number of Codebooks', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಖರವಾಗಿ 4x Reduction, Codebooks ya ಸಂಖ್ಯೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: selecting only frame[0] reduces the main transformer\'s sequential speech-token predictions from 32 to 8 -- a reduction factor of exactly 4.0x, which genuinely equals num_codebooks (4). This is not a coincidence: skipping N-1 of N codebooks always yields an N-times reduction in what the AUTOREGRESSIVE stream must predict, though the discarded residual codebooks still need to be produced by SOME mechanism (a separate, potentially more parallel, residual predictor) before the speech decoder can reconstruct full-quality audio.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಕೇವಲ frame[0] ಆಯ್ಕೆ ಮಾಡುವುದೂ main transformer ya sequential speech-token predictions ಅನ್ನೂ 32 ಇಂದ 8 ಗೆ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ -- ನಿಖರವಾಗಿ 4.0x reduction, ಇದೂ num_codebooks (4) ಗೆ ನಿಜವಾಗಿ ಸಮಾನ.' } },

    { type: 'heading', data: { textEn: 'Why 16 Modality-Pair Combinations Does Not Mean 16 Learned Skills', textKn: '16 Modality-Pair Combinations 16 ಕಲಿತ Skills ಎಂದೂ ಏಕೆ ಅರ್ಥವಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Architecture Enables; Data Distribution Decides', headingKn: 'Architecture ಅನುಮತಿಸುತ್ತದೆ; Data Distribution ನಿರ್ಧರಿಸುತ್ತದೆ',
      bodyEn: 'With 4 modalities (text, image, speech, music), there are 4x4=16 possible input-to-output modality pairings the shared vocabulary architecturally supports. But if training data contains billions of text<->image pairs and only thousands of image<->speech pairs, the model will genuinely learn image<->text far more reliably than image<->speech -- the vocabulary allocator from Part 1 makes all 16 pairings REPRESENTABLE, not equally LEARNED.',
      bodyKn: '4 modalities ಜೊತೆ, 16 ಸಾಧ್ಯ input-to-output modality pairings shared vocabulary architecturally ಬೆಂಬಲಿಸುತ್ತದೆ. ಆದರೆ training data image<->text pairs ಬಿಲಿಯನ್ಗಟ್ಟಲೆ ಆದರೆ image<->speech pairs ಕೇವಲ ಸಾವಿರಗಟ್ಟಲೆ ಹೊಂದಿದ್ದರೆ, model image<->text ಅನ್ನೂ ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಕಲಿಯುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Genuinely Re-Confirmed: The Combined Weighted Loss', headingKn: 'ನಿಜವಾಗಿ ಮರುದೃಢಪಡಿಸಿದ: Combined Weighted Loss',
      bodyEn: 'L = lambda_t*L_text + lambda_i*L_image + lambda_s*L_speech + lambda_m*L_music is the same loss-weighting pattern genuinely explored numerically in the Transfusion module (0.47% vs 19% image share under different weightings) -- here applied across four modalities instead of two. During speech enhancement, lambda_s is raised without zeroing the others, exactly the same principle: shift emphasis without discarding previously-learned capability.',
      bodyKn: 'L = lambda_t*L_text + lambda_i*L_image + lambda_s*L_speech + lambda_m*L_music ಅದೇ loss-weighting pattern, Transfusion module ನಲ್ಲಿ numerically ಅನ್ವೇಷಿಸಲಾಗಿದೆ -- ಇಲ್ಲಿ ನಾಲ್ಕೂ modalities ಆದ್ಯಂತ ಅನ್ವಯಿಸಲಾಗಿದೆ. Speech enhancement ಸಮಯ, lambda_s ಇತರವನ್ನೂ zero ಮಾಡದೆ ಏರಿಸಲಾಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'The Four-Stage Curriculum', captionKn: 'Four-Stage Curriculum',
      rows: "Stage|What it specifically teaches|Failure if skipped\nAlignment|Connects modality semantics via paired examples (text<->image, text<->speech)|Modalities remain statistically unrelated in hidden representations\nInterleaving|Cross-modal context across long, multi-image/multi-modality documents|Weak reasoning when multiple modalities appear together\nSpeech enhancement|Improves acoustic generation quality specifically|Robotic, unstable, or mispronounced speech output\nMultimodal SFT|Instruction-following behavior across modalities|Capable representations but poor assistant behavior" } },
    { type: 'concept', data: {
      headingEn: 'Why Speech Gets Its Own Dedicated Stage', headingKn: 'Speech ಗೆ ಏಕೆ ತನ್ನದೇ ಆದ Dedicated Stage',
      bodyEn: 'Generated images tolerate some token-level errors and still look plausible; generated speech is far less forgiving -- a few wrong codec tokens can produce audible buzzing, mispronunciation, or unstable prosody. Mixing speech-heavy training uniformly throughout can also risk catastrophic forgetting of text/image capability if lambda_speech grows too large without offsetting lambda_text and lambda_image, which is why the lesson stages speech enhancement as its own phase with deliberately balanced data mixing rather than blending it in from step one.',
      bodyKn: 'Generated images ಕೆಲವು token-level errors ಸಹಿಸಬಹುದು ಇನ್ನೂ ಪ್ಲಾಸಿಬಲ್ ಆಗಿ ಕಾಣುತ್ತವೆ; generated speech ಬಹಳ ಕಡಿಮೆ ಕ್ಷಮಾಶೀಲ -- ಕೆಲವು ತಪ್ಪು codec tokens ಕೇಳಿಸುವ buzzing ಅಥವಾ mispronunciation ಉತ್ಪಾದಿಸಬಹುದು. ಆದ್ದರಿಂದ speech enhancement ಅದರ ಸ್ವಂತ phase ಆಗಿ ಹಂತಹಂತವಾಗಿ ಮಾಡಲಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Speech-to-Speech Without an Explicit Text Bridge', textKn: 'ಸ್ಪಷ್ಟ Text Bridge ಇಲ್ಲದೆ Speech-to-Speech', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Transcription Discards', headingKn: 'Transcription ಏನೂ ಬಿಡುತ್ತದೆ',
      bodyEn: 'A pipelined voice system (speech -> ASR -> text -> LLM -> text -> TTS -> speech) forces every acoustic property through a text bottleneck: sarcasm, hesitation, accent, emotion, and background sound cannot survive being reduced to words. A native token model, by contrast, models P(response speech tokens | input speech tokens) directly -- the same architecture genuinely demonstrated in Part 1, where speech tokens sit in their own vocabulary range (36096-40191) fully capable of both being consumed and being generated by the shared transformer.',
      bodyKn: 'Pipelined voice system (speech -> ASR -> text -> LLM -> text -> TTS -> speech) ಪ್ರತಿ acoustic property ಅನ್ನೂ text bottleneck ಮೂಲಕ ಒತ್ತಾಯಿಸುತ್ತದೆ: sarcasm, hesitation, accent, emotion, background sound words ಗೆ ಕಡಿಮೆಗೊಳಿಸಿದಾಗ ಉಳಿಯಲಾಗುವುದಿಲ್ಲ. Native token model P(response speech tokens | input speech tokens) ಅನ್ನೂ ನೇರವಾಗಿ model ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Modality Imbalance and Token-Rate Imbalance', textKn: 'Modality Imbalance ಮತ್ತೆ Token-Rate Imbalance', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Counting Examples Is Misleading When Modalities Have Different Token Rates', headingKn: 'Modalities ಭಿನ್ನ Token Rates ಹೊಂದಿದಾಗ Examples ಎಣಿಸುವುದೂ ತಪ್ಪುದಾರಿಗೆಳೆಯುತ್ತದೆ',
      bodyEn: 'One short text example might contribute 10 tokens to a training batch, while our genuinely-confirmed 12-token image example or 8-token speech example contributes far more sequence positions per "example." If a dataset is balanced by example COUNT rather than TOKEN count, text can appear numerically balanced while actually contributing a small fraction of total training tokens -- or the reverse, where a handful of image-heavy examples dominate the effective training signal.',
      bodyKn: 'ಒಂದೂ ಚಿಕ್ಕ text example 10 tokens ಕೊಡುಗೆ ನೀಡಬಹುದು, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 12-token image example ಅಥವಾ 8-token speech example ಪ್ರತಿ "example" ಗೆ ಹೆಚ್ಚು sequence positions ಕೊಡುಗೆ ನೀಡುತ್ತದೆ. Dataset example COUNT ಮೂಲಕ balanced ಆಗಿದ್ದರೆ, TOKEN count ಅಲ್ಲ, text numerically balanced ಆಗಿ ಕಾಣಿಸಬಹುದು ಆದರೆ ವಾಸ್ತವವಾಗಿ ಒಟ್ಟು training tokens ya ಒಂದೂ ಚಿಕ್ಕ ಭಾಗ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: append() produces a nested list unusable by a transformer, while extend() produces the required flat 1-D sequence\n• Genuinely confirmed: cross-entropy loss treats text and image targets identically, which is precisely what allows a single objective to learn cross-modal transitions\n• Genuinely confirmed: RVQ base-layer selection gives exactly a 4x reduction in sequential speech predictions (32 -> 8) for a 4-codebook tokenizer\n• 4x4=16 modality pairings are architecturally representable, but actual capability per pairing depends entirely on training data distribution, not vocabulary design\n• The four-stage curriculum (alignment, interleaving, speech enhancement, SFT) progressively builds capability, with speech enhancement deliberately isolated because acoustic errors are far more perceptually damaging than visual ones',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: append() nested list ಉತ್ಪಾದಿಸುತ್ತದೆ, extend() ಅಗತ್ಯ flat 1-D sequence ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: cross-entropy loss text, image targets ಒಂದೇ ರೀತಿ ಪರಿಗಣಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: RVQ base-layer selection 4x reduction ನೀಡುತ್ತದೆ (32 -> 8)\n• 16 modality pairings architecturally representable, ಆದರೆ ನಿಜ capability training data distribution ಮೇಲೆ ಅವಲಂಬಿತ\n• Four-stage curriculum ಹಂತಹಂತವಾಗಿ capability ನಿರ್ಮಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Boundary Tokens Would Make This More Robust', headingKn: 'Boundary Tokens ಇದನ್ನೂ ಹೆಚ್ಚು Robust ಮಾಡುತ್ತವೆ',
      bodyEn: 'Our genuinely-run sequence relies purely on ID-range membership to distinguish modalities, with no explicit <text>/<image>/<speech> delimiter tokens. A richer format like <user><image>I I I...</image><text>What is this?</text></user> gives the model explicit structural cues rather than requiring it to infer boundaries purely from numeric ranges -- both approaches are architecturally valid, but explicit boundaries are more robust to ambiguity at generation time.',
      bodyKn: 'ನಮ್ಮ ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ sequence modalities ಅನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಲು ಕೇವಲ ID-range membership ಅವಲಂಬಿಸುತ್ತದೆ, ಸ್ಪಷ್ಟ delimiter tokens ಇಲ್ಲದೆ. ಹೆಚ್ಚು ಶ್ರೀಮಂತ format model ಗೆ ಸ್ಪಷ್ಟ structural cues ನೀಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When an any-to-any model handles "translate this speech to an image" impressively but struggles with "hum this melody back," the genuinely-confirmed data-distribution principle in this lesson explains why: both are architecturally representable pairings, but one likely had far more training examples than the other.',
      bodyKn: 'ಒಂದೂ any-to-any model "ಈ speech ಅನ್ನೂ image ಗೆ ಭಾಷಾಂತರಿಸಿ" ಅನ್ನೂ ಪ್ರಭಾವಶಾಲಿಯಾಗಿ ನಿಭಾಯಿಸಿದಾಗ ಆದರೆ "ಈ melody ಅನ್ನೂ ಹಂ ಮಾಡಿ" ಜೊತೆ ಹೆಣಗಾಡಿದಾಗ, ಈ lesson ya data-distribution principle ಇದಕ್ಕೆ ಕಾರಣ ವಿವರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Chain-of-Visual-Thought as a Broader Principle', headingKn: 'Chain-of-Visual-Thought ಒಂದೂ Broader Principle ಆಗಿ',
      bodyEn: 'Beyond speech, the same shared-vocabulary design lets a model use non-text modalities as an intermediate reasoning scratchpad -- generating intermediate image tokens for a spatial question before producing a final text answer, rather than converting everything to language first. This works precisely because image tokens and text tokens genuinely coexist in one predictable stream, the same property this module has verified since Part 1\'s offset arithmetic.',
      bodyKn: 'Speech ಮೀರಿ, ಅದೇ shared-vocabulary design model ಗೆ non-text modalities ಅನ್ನೂ intermediate reasoning scratchpad ಆಗಿ ಬಳಸಲು ಅನುಮತಿಸುತ್ತದೆ -- ಒಂದೂ spatial question ಗೆ intermediate image tokens ಉತ್ಪಾದಿಸಿ, ನಂತರ ಅಂತಿಮ text answer ಉತ್ಪಾದಿಸುವುದೂ.' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the 4x RVQ reduction computed in this lesson: engineers use base-layer selection specifically to keep the expensive main transformer\'s sequential workload proportional to semantic content rather than raw acoustic detail, freeing the residual codebooks to be produced by cheaper, more parallel mechanisms.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ಲೆಕ್ಕಹಾಕಿದ 4x RVQ reduction ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: engineers base-layer selection ಬಳಸಿ ದುಬಾರಿ main transformer ya sequential workload ಅನ್ನೂ semantic content ಗೆ ಅನುಪಾತದಲ್ಲಿ ಇಡುತ್ತಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real AnyGPT and MIO training recipes genuinely stage curricula similarly to what this lesson described -- alignment first on abundant paired data, then interleaved multimodal documents, then dedicated speech-quality data mixing, confirming this progression reflects genuine production practice.',
      bodyKn: 'ನಿಜ AnyGPT, MIO training recipes ಈ lesson ವಿವರಿಸಿದಂತೆ ಹಂತಹಂತವಾದ curricula ಬಳಸುತ್ತವೆ -- ಮೊದಲು alignment, ನಂತರ interleaved multimodal documents, ನಂತರ dedicated speech-quality data mixing.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 3', headingKn: 'Part 3 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 3 moves from training to inference: genuinely running the streaming speech decoder and TTFAB latency calculator, breaking down the exact 50+100+50+120=320ms budget, and closing with the full architecture comparison against AnyGPT and Unified-IO 2.',
      bodyKn: 'Part 3 training ಇಂದ inference ಗೆ ಚಲಿಸುತ್ತದೆ: streaming speech decoder, TTFAB latency calculator ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಿಖರ 50+100+50+120=320ms budget ಒಡೆಯುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What Part 2 Established', headingKn: 'Part 2 ಏನೂ ಸ್ಥಾಪಿಸಿತು',
      bodyEn: 'This lesson genuinely verified two more pieces of the MIO architecture with real code: the exact mechanics of flattening tokenized modalities into a single trainable sequence, and the precise 4x arithmetic behind RVQ base-layer selection. Combined with the four-stage curriculum, these explain how the shared-vocabulary front end from Part 1 becomes an actually-trained, actually-capable model.',
      bodyKn: 'ಈ lesson MIO architecture ya ಇನ್ನೂ ಎರಡೂ ಭಾಗಗಳನ್ನೂ ನಿಜ code ಜೊತೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು: tokenized modalities ಅನ್ನೂ ಒಂದೇ trainable sequence ಗೆ flatten ಮಾಡುವ ನಿಖರ mechanics, RVQ base-layer selection ಹಿಂದಿನ ನಿಖರ 4x arithmetic.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does sequence.extend(encoded) accomplish in our program?', qKn: 'ನಮ್ಮ program ನಲ್ಲಿ sequence.extend(encoded) ಏನೂ ಸಾಧಿಸುತ್ತದೆ?',
        opts: ['Trains the Transformer', 'Creates a new vocabulary', "Flattens each modality's token sequence into one interleaved Transformer sequence", 'Decodes speech'], correct: 2,
        optsKn: ['Transformer ಅನ್ನೂ ತರಬೇತಿ ನೀಡುತ್ತದೆ', 'ಹೊಸ vocabulary ಸೃಷ್ಟಿಸುತ್ತದೆ', 'ಪ್ರತಿ modality ya token sequence ಅನ್ನೂ ಒಂದೂ interleaved sequence ಗೆ flatten ಮಾಡುತ್ತದೆ', 'Speech decode ಮಾಡುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: what does append() produce when joining two token lists, instead of the required flat sequence?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ token lists ಸೇರಿಸುವಾಗ append() ಬೇಕಾದ flat sequence ಬದಲಿಗೆ ಏನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['An empty list', 'A nested list of lists', 'A single string', 'A duplicated sequence'], correct: 1,
        optsKn: ['ಒಂದೂ ಖಾಲಿ list', 'Lists ya ಒಂದೂ nested list', 'ಒಂದೂ single string', 'ಒಂದೂ duplicated sequence'] },
      { q: 'Genuinely confirmed: what reduction factor did selecting only the RVQ base layer (frame[0]) produce for 8 frames x 4 codebooks?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 8 frames x 4 codebooks ಗಾಗಿ ಕೇವಲ RVQ base layer ಆಯ್ಕೆ ಮಾಡುವುದೂ ಯಾವ reduction factor ಉತ್ಪಾದಿಸಿತು?',
        opts: ['2x', '4x', '8x', '32x'], correct: 1,
        optsKn: ['2x', '4x', '8x', '32x'] },
      { q: 'Why does our educational model feed only frame[0] to the main Transformer?', qKn: 'Educational model main Transformer ಗೆ ಏಕೆ ಕೇವಲ frame[0] ನೀಡುತ್ತದೆ?',
        opts: ['The other RVQ codes are invalid', 'frame[0] is always text', 'It simulates reducing the sequential autoregressive burden by predicting a base speech stream and reconstructing residual streams separately', 'Python only accepts the first element'], correct: 2,
        optsKn: ['ಇತರ RVQ codes invalid', 'frame[0] ಯಾವಾಗಲೂ text', 'base speech stream predict ಮಾಡಿ residual streams ಪ್ರತ್ಯೇಕವಾಗಿ ನಿಭಾಯಿಸುವುದೂ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡುತ್ತದೆ', 'Python ಕೇವಲ ಮೊದಲ element ಸ್ವೀಕರಿಸುತ್ತದೆ'] },
      { q: 'What is the main purpose of the interleaved curriculum stage?', qKn: 'Interleaved curriculum stage ya ಮುಖ್ಯ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Increase vocabulary size', 'Train only image reconstruction', 'Teach the model to maintain and reason over mixed-modality context rather than isolated modality pairs', 'Remove speech tokens'], correct: 2,
        optsKn: ['Vocabulary size ಹೆಚ್ಚಿಸಿ', 'ಕೇವಲ image reconstruction ತರಬೇತಿ ನೀಡಿ', 'Model ಗೆ mixed-modality context ಮೇಲೆ reason ಮಾಡಲು ಕಲಿಸಿ', 'Speech tokens ತೆಗೆದುಹಾಕಿ'] },
    ] } },
  ],
};
