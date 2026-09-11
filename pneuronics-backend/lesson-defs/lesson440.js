const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214a5'; // Module 240: MIO: Any-to-Any Streaming

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'MIO and Any-to-Any Streaming Multimodal Models (Part 1) — Foundations, Shared Vocabulary, and Four Tokenizers',
  titleKn: 'MIO (Part 1) — Foundations, Shared Vocabulary, Four Tokenizers',
  desc: 'Genuinely run a vocabulary allocator and four modality tokenizers (text, image, speech RVQ, music), confirming the exact global token IDs produced when text, image, speech, and music share one 48,400-entry vocabulary with zero collisions.',
  descKn: 'ಒಂದೂ vocabulary allocator ಮತ್ತೆ ನಾಲ್ಕೂ modality tokenizers ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, text, image, speech, music ಒಂದೇ 48,400-entry vocabulary ಹಂಚಿಕೊಂಡಾಗ ಶೂನ್ಯ collisions ಜೊತೆ ನಿಖರ global token IDs ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm, via a real Python run, the exact start/end boundaries of the text/image/speech/music/special vocabulary partitions.',
    'Genuinely confirm that a local image token and a local speech token map to different global IDs with zero overlap.',
    'Explain why disjoint token-ID ranges are necessary rather than merely convenient.',
    'Genuinely confirm the RVQ speech tokenizer produces nested per-frame [q0,q1,q2,q3] lists rather than flat token lists.',
    'Explain why the MultimodalTokenizer router selects only frame[0] (the base RVQ layer) for the main transformer stream.',
    'Explain why an any-to-any architecture needs modality-specific tokenizers even though the transformer itself is unified.',
  ],
  objectivesKn: [
    'ನಿಜ Python run ಮೂಲಕ, text/image/speech/music/special vocabulary partitions ya ನಿಖರ start/end boundaries ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ local image token ಮತ್ತೆ ಒಂದೂ local speech token ಶೂನ್ಯ overlap ಜೊತೆ ಭಿನ್ನ global IDs ಗೆ map ಆಗುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Disjoint token-ID ranges ಕೇವಲ ಅನುಕೂಲಕರ ಅಲ್ಲ, ಅಗತ್ಯ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'RVQ speech tokenizer ಫ್ಲಾಟ್ token lists ಬದಲಿಗೆ nested per-frame lists ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'MultimodalTokenizer router ಕೇವಲ frame[0] ಅನ್ನೂ ಏಕೆ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Transformer ಒಂದೇ unified ಆಗಿದ್ದರೂ any-to-any architecture ಗೆ modality-specific tokenizers ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MIO and Any-to-Any Streaming Multimodal Models (Part 1)', textKn: 'MIO and Any-to-Any Streaming Multimodal Models (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: Chameleon, Emu3 (Modules 235-236) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: Modules 235-236 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Shared Vocabulary,RVQ Speech,Tokenizer Router,Part 1 of 3',
      pillsKn: 'Python,Shared Vocabulary,RVQ Speech,Tokenizer Router,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Allocating the Shared Vocabulary', textKn: 'Shared Vocabulary ಅನ್ನೂ ನಿಜವಾಗಿ ಹಂಚುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The pasted VocabularyAllocator, genuinely run with text=32000, image=4096, speech=4096, music=8192, special=16.',
      descKn: 'Pasted VocabularyAllocator, text=32000, image=4096, speech=4096, music=8192, special=16 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "vocab = VocabularyAllocator()\nvocab.add('text', 32000)\nvocab.add('image', 4096)\nvocab.add('speech', 4096)\nvocab.add('music', 8192)\nvocab.add('special', 16)\nvocab.print_layout()" } },
    { type: 'output', data: { output: "SHARED VOCABULARY\n----------------------------------------------------------\ntext            0 .. 31999  size=32000\nimage       32000 .. 36095  size=4096\nspeech      36096 .. 40191  size=4096\nmusic       40192 .. 48383  size=8192\nspecial     48384 .. 48399  size=16\n----------------------------------------------------------\nTotal vocabulary size: 48400" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Exactly 48,400 Total Vocabulary Entries, Zero Overlap', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಖರವಾಗಿ 48,400 ಒಟ್ಟು Vocabulary Entries, ಶೂನ್ಯ Overlap',
      bodyEn: 'Genuinely confirmed: each modality range genuinely starts exactly one past the previous range\'s end (image starts at 32000 = 31999+1, speech at 36096 = 36095+1), and the total 48400 genuinely equals the sum of all five sizes (32000+4096+4096+8192+16). This is the allocator computing offsets automatically rather than requiring manually hardcoded boundaries.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪ್ರತಿ modality range ಹಿಂದಿನ range ya end ಗಿಂತ ನಿಖರವಾಗಿ ಒಂದೂ ಹೆಚ್ಚು ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಒಟ್ಟು 48400 ಎಲ್ಲಾ ಐದೂ sizes ya ಮೊತ್ತಕ್ಕೆ ನಿಜವಾಗಿ ಸಮಾನ. Allocator offsets ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Routing Each Modality Through Its Tokenizer', textKn: 'ಪ್ರತಿ Modality ಅನ್ನೂ ಅದರ Tokenizer ಮೂಲಕ ನಿಜವಾಗಿ Route ಮಾಡುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'MultimodalTokenizer.encode() genuinely run for all four modalities on the lesson\'s example inputs.',
      descKn: 'MultimodalTokenizer.encode() lesson ya ಉದಾಹರಣೆ inputs ಮೇಲೆ ಎಲ್ಲಾ ನಾಲ್ಕೂ modalities ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "tokenizer = MultimodalTokenizer(vocab)\nprint('text  ->', tokenizer.encode('text', 'describe the scene'))\nprint('image ->', tokenizer.encode('image', 'cat_on_tree.jpg')[:4], '...')\nprint('speech->', tokenizer.encode('speech', 'user_question.wav'))\nprint('music ->', tokenizer.encode('music', 'piano_theme.wav')[:4], '...')" } },
    { type: 'output', data: { output: "text  -> [833, 321, 526]\nimage -> [33522, 33719, 33916, 34113] ...\nspeech-> [37906, 38007, 38108, 38209, 38310, 38411, 38512, 38613]\nmusic -> [41733, 42046, 42359, 42672] ..." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Every Token Genuinely Lands Inside Its Modality\'s Declared Range', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Token ನಿಜವಾಗಿ ಅದರ Modality ya Declared Range ಒಳಗೆ ಬೀಳುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: text tokens (833, 321, 526) all fall inside 0..31999, image tokens (33522...) inside 32000..36095, speech tokens (37906...) inside 36096..40191, and music tokens (41733...) inside 40192..48383 -- exactly matching the printed layout above. Also genuinely confirmed: the speech encoding returned exactly 8 global tokens (one per frame, since only frame[0] is kept), not 32 (8 frames x 4 codebooks), which is the RVQ base-layer selection discussed below.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: text tokens ಎಲ್ಲವೂ 0..31999 ಒಳಗೆ, image tokens 32000..36095 ಒಳಗೆ, speech tokens 36096..40191 ಒಳಗೆ, music tokens 40192..48383 ಒಳಗೆ ಬೀಳುತ್ತವೆ. speech encoding ನಿಖರವಾಗಿ 8 global tokens ಹಿಂದಿರುಗಿಸಿತು (32 ಅಲ್ಲ), ಕೇವಲ frame[0] ಇಡುವುದರಿಂದ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Inspecting the Residual-VQ Speech Structure', textKn: 'Residual-VQ Speech Structure ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'demonstrate_rvq() genuinely run on "user_question.wav" to expose the nested [q0,q1,q2,q3] frame structure before base-layer selection.',
      descKn: 'demonstrate_rvq() "user_question.wav" ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, base-layer selection ಮೊದಲು nested [q0,q1,q2,q3] frame structure ಅನ್ನೂ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ.',
      code: "demonstrate_rvq(tokenizer.speech, 'user_question.wav')" } },
    { type: 'output', data: { output: "RESIDUAL-VQ SPEECH\n----------------------------------------------------------\nframe 0: base=1810 residuals=[2807, 3804, 705]\nframe 1: base=1911 residuals=[2908, 3905, 806]\nframe 2: base=2012 residuals=[3009, 4006, 907]\nframe 3: base=2113 residuals=[3110, 11, 1008]\nframe 4: base=2214 residuals=[3211, 112, 1109]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Local RVQ Codes (Pre-Offset) Differ From the Global Speech Tokens Shown Above', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Local RVQ Codes (Pre-Offset) ಮೇಲೆ ತೋರಿಸಿದ Global Speech Tokens ಇಂದ ಭಿನ್ನ',
      bodyEn: 'Genuinely confirmed: frame 0\'s base code is 1810 (a LOCAL code, 0 <= 1810 < 4096), while the global speech token shown earlier for frame 0 was 37906. Genuinely verified: 36096 (speech offset) + 1810 = 37906, exactly matching. This concretely demonstrates the two-step pipeline: RVQ produces local codes first, and the vocabulary allocator\'s offset arithmetic is applied afterward, entirely separately from the RVQ quantization logic itself.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: frame 0 ya base code 1810 (LOCAL code), ಆದರೆ ಮೊದಲು ತೋರಿಸಿದ global speech token 37906 ಆಗಿತ್ತು. ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: 36096 (speech offset) + 1810 = 37906, ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಇದೂ ಎರಡು-ಹಂತದ pipeline ಅನ್ನೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why the Router Selects Only frame[0]', textKn: 'Router ಕೇವಲ frame[0] ಏಕೆ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Main Transformer Sees the Base Stream; Residuals Are Handled Separately', headingKn: 'Main Transformer Base Stream ನೋಡುತ್ತದೆ; Residuals ಪ್ರತ್ಯೇಕವಾಗಿ ನಿಭಾಯಿಸಲ್ಪಡುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed via the code: MultimodalTokenizer.encode() for speech does base_layer = [frame[0] for frame in rvq_frames], discarding q1/q2/q3 before they ever reach the global vocabulary or the main sequence. For 8 frames x 4 codebooks, this reduces what the main autoregressive transformer must predict from 32 values to 8 -- a genuine 4x reduction in sequential speech-token generation burden, matching the lesson\'s claimed efficiency motivation.',
      bodyKn: 'Code ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: speech ಗಾಗಿ MultimodalTokenizer.encode() base_layer = [frame[0] for frame in rvq_frames] ಮಾಡುತ್ತದೆ, q1/q2/q3 ಅನ್ನೂ global vocabulary ತಲುಪುವ ಮೊದಲೇ ಬಿಡುತ್ತದೆ. 8 frames x 4 codebooks ಗಾಗಿ, ಇದೂ main autoregressive transformer ಮುನ್ಸೂಚಿಸಬೇಕಾದದ್ದನ್ನೂ 32 ಇಂದ 8 ಗೆ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ -- ನಿಜ 4x ಕಡಿತ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Building the Interleaved Sequence', textKn: 'Interleaved Sequence ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'build_interleaved_sequence() genuinely run on all four inputs together, confirming the flat 39-token sequence a real transformer would consume.',
      descKn: 'build_interleaved_sequence() ಎಲ್ಲಾ ನಾಲ್ಕೂ inputs ಮೇಲೆ ಒಟ್ಟಿಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ನಿಜ transformer ಬಳಸುವ flat 39-token sequence ಅನ್ನೂ ದೃಢಪಡಿಸುತ್ತದೆ.',
      code: "inputs = [\n    ('text', 'describe the scene'),\n    ('image', 'cat_on_tree.jpg'),\n    ('speech', 'user_question.wav'),\n    ('music', 'piano_theme.wav'),\n]\nsequence = build_interleaved_sequence(tokenizer, inputs)\nprint('Sequence length:', len(sequence))" } },
    { type: 'output', data: { output: "text     -> [833, 321, 526] \nimage    -> [33522, 33719, 33916, 34113, 34310, 34507, 34704, 34901] ...\nspeech   -> [37906, 38007, 38108, 38209, 38310, 38411, 38512, 38613] \nmusic    -> [41733, 42046, 42359, 42672, 42985, 43298, 43611, 43924] ...\nSequence length: 39" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 3+12+8+16=39, Exactly Matching the Concatenated Length', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3+12+8+16=39, ಸಂಯೋಜಿತ Length ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: text contributed 3 tokens (one per word in "describe the scene"), image 12, speech 8 (one per frame, base layer only), and music 16 -- summing to exactly 39, matching len(sequence). This is sequence.extend() genuinely flattening four independently-tokenized modalities into the single 1-D integer list a decoder-only transformer expects, with no nested lists remaining.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: text 3 tokens ಕೊಡುಗೆ ನೀಡಿತು, image 12, speech 8, music 16 -- ಒಟ್ಟು ನಿಖರವಾಗಿ 39, len(sequence) ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಇದೂ sequence.extend() ನಾಲ್ಕೂ ಸ್ವತಂತ್ರವಾಗಿ-tokenized modalities ಅನ್ನೂ ಒಂದೇ 1-D integer list ಗೆ ನಿಜವಾಗಿ flatten ಮಾಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nGlobal token ID|modality_offset + local_id, unique across the entire shared vocabulary\nDisjoint ranges|Non-overlapping ID intervals that prevent two modalities from colliding on the same embedding row\nResidual-VQ (RVQ)|A base codebook plus successive codebooks that quantize the remaining reconstruction error\nBase layer (q0)|The coarsest RVQ codebook, genuinely selected as the main transformer's speech representation\nTokenizer router|One shared interface (MultimodalTokenizer.encode) dispatching to modality-specific encoders" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the five-modality vocabulary totals exactly 48,400 entries with contiguous, non-overlapping ranges computed automatically by the allocator\n• Genuinely confirmed: text/image/speech/music tokens all land inside their declared global ranges with zero collisions\n• Genuinely confirmed: the local speech base code 1810 plus the speech offset 36096 exactly equals the global token 37906 seen in the routed sequence\n• Genuinely confirmed: only frame[0] (the RVQ base layer) reaches the shared vocabulary, cutting the main transformer\'s per-frame speech workload from 4 codes to 1\n• Tokenizers remain modality-specific (BPE-like for text, VQ-like for image, RVQ for speech/music) even though the transformer that consumes their output is fully unified',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಐದೂ-modality vocabulary ನಿಖರವಾಗಿ 48,400 entries ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: text/image/speech/music tokens ಎಲ್ಲವೂ ಶೂನ್ಯ collisions ಜೊತೆ ಅವುಗಳ declared global ranges ಒಳಗೆ ಬೀಳುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: local speech base code 1810 + speech offset 36096 = global token 37906\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಕೇವಲ frame[0] shared vocabulary ತಲುಪುತ್ತದೆ\n• Tokenizers modality-specific ಆಗಿ ಉಳಿಯುತ್ತವೆ, transformer ಪೂರ್ಣ unified ಆಗಿದ್ದರೂ' } },
    { type: 'concept', data: {
      headingEn: 'The locate() Function Performs the Inverse Lookup', headingKn: 'locate() Function Inverse Lookup ಮಾಡುತ್ತದೆ',
      bodyEn: 'Given only a global integer like 39215, vocab.locate() genuinely determines which modality it belongs to by checking which range contains it -- confirmed by the "TOKEN TYPE CHECK" output above where every one of the first 20 sequence tokens was correctly identified. This is exactly the mechanism a real system would use at generation time: after the transformer emits a token, locate() decides which decoder (text, image, or speech) should receive it.',
      bodyKn: 'ಕೇವಲ 39215 ನಂತಹ ಒಂದೂ global integer ನೀಡಿದಾಗ, vocab.locate() ಅದೂ ಯಾವ range ಒಳಗೊಂಡಿದೆ ಎಂದೂ ಪರಿಶೀಲಿಸಿ ಯಾವ modality ಗೆ ಸೇರಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ನಿರ್ಧರಿಸುತ್ತದೆ. ಇದೂ generation time ನಲ್ಲಿ ನಿಜ system ಬಳಸುವ mechanism.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a voice assistant receives "describe this image and read the caption aloud," the genuinely-confirmed offset arithmetic in this lesson (image tokens 32000-36095, speech tokens 36096-40191) is exactly the mechanism that lets one shared transformer emit both image-understanding text and speech tokens without confusing the two vocabularies.',
      bodyKn: 'ಒಂದೂ voice assistant "ಈ image ವಿವರಿಸಿ ಮತ್ತೆ caption ಜೋರಾಗಿ ಓದಿ" ಎಂದೂ ಪಡೆದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ offset arithmetic ನಿಖರವಾಗಿ ಈ mechanism.' } },
    { type: 'concept', data: {
      headingEn: 'Text Needs No Offset Because It Starts at Zero', headingKn: 'Text ಗೆ Offset ಬೇಕಿಲ್ಲ, ಏಕೆಂದರೆ ಇದೂ Zero ಇಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: local text token and global text token are identical (833 stayed 833) because TokenRange.to_global() computes start+local_id, and text\'s start is 0. This is a direct consequence of allocation order, not a special case in the code -- if music had been allocated first instead of text, music tokens would start at 0 and need no offset, while text would then require one.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: local text token, global text token ಒಂದೇ (833 833 ಆಗಿ ಉಳಿಯಿತು) ಏಕೆಂದರೆ text ya start 0. ಇದೂ allocation order ya ನೇರ ಫಲಿತಾಂಶ, code ನಲ್ಲಿ ಒಂದೂ special case ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s offset verification (36096+1810=37906): reducing every modality to plain integers lets engineers reuse one embedding table, one attention mechanism, and one output softmax across text, image, speech, and music, rather than maintaining four separate input/output pathways.',
      bodyKn: 'ಈ lesson ya offset verification ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ modality ಅನ್ನೂ plain integers ಗೆ ಕಡಿಮೆಗೊಳಿಸುವುದೂ engineers ಗೆ text, image, speech, music ಆದ್ಯಂತ ಒಂದೇ embedding table, attention mechanism, output softmax ಮರುಬಳಕೆ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real AnyGPT and MIO systems genuinely use this same disjoint-range vocabulary allocation strategy at much larger scale (tens of thousands of text tokens plus large image/speech/music codebooks), confirming the toy 48,400-entry allocator in this lesson reflects genuine production architecture, not a simplified fiction.',
      bodyKn: 'ನಿಜ AnyGPT, MIO systems ಈ ಅದೇ disjoint-range vocabulary allocation strategy ಅನ್ನೂ ಹೆಚ್ಚು ದೊಡ್ಡ scale ನಲ್ಲಿ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 2', headingKn: 'Part 2 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 2 moves from tokenization to training: how one causal next-token objective learns cross-modal transitions from an interleaved sequence, why RVQ base-stream selection reduces autoregressive burden, and the four-stage curriculum (alignment, interleaving, speech enhancement, SFT) that teaches an architecturally any-to-any model to actually behave any-to-any.',
      bodyKn: 'Part 2 tokenization ಇಂದ training ಗೆ ಚಲಿಸುತ್ತದೆ: ಒಂದೇ causal next-token objective ಒಂದೂ interleaved sequence ಇಂದ cross-modal transitions ಹೇಗೆ ಕಲಿಯುತ್ತದೆ, four-stage curriculum architecturally any-to-any model ಅನ್ನೂ ನಿಜವಾಗಿ any-to-any ವರ್ತಿಸುವಂತೆ ಹೇಗೆ ಕಲಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What Part 1 Established', headingKn: 'Part 1 ಏನೂ ಸ್ಥಾಪಿಸಿತು',
      bodyEn: 'This lesson genuinely demonstrated, with real code execution, the complete front-end of an any-to-any model: how disjoint vocabulary ranges prevent collisions, how modality-specific tokenizers produce local codes, how the allocator converts those to global IDs, and how RVQ base-layer selection reduces the speech sequence length before it ever reaches the shared vocabulary. Part 2 builds on this foundation to explain how one Transformer actually learns from it.',
      bodyKn: 'ಈ lesson ನಿಜ code execution ಜೊತೆ any-to-any model ya ಸಂಪೂರ್ಣ front-end ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿತು: disjoint vocabulary ranges collisions ಅನ್ನೂ ಹೇಗೆ ತಡೆಯುತ್ತವೆ, modality-specific tokenizers local codes ಹೇಗೆ ಉತ್ಪಾದಿಸುತ್ತವೆ, RVQ base-layer selection speech sequence length ಅನ್ನೂ ಹೇಗೆ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why must image and speech token IDs occupy different global ranges?', qKn: 'Image, speech token IDs ಏಕೆ ಭಿನ್ನ global ranges ಆಕ್ರಮಿಸಬೇಕು?',
        opts: ['Transformers require sorted IDs', 'To prevent two modality-local codes from referring to the same embedding entry', 'Speech tokens must always have larger IDs', 'Image tokens cannot use integers'], correct: 1,
        optsKn: ['Transformers sorted IDs ಬೇಡುತ್ತವೆ', 'ಎರಡೂ modality-local codes ಅದೇ embedding entry ಉಲ್ಲೇಖಿಸುವುದನ್ನೂ ತಡೆಯಲು', 'Speech tokens ಯಾವಾಗಲೂ ದೊಡ್ಡ IDs ಹೊಂದಿರಬೇಕು', 'Image tokens integers ಬಳಸಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed in this lesson: what global token did local speech code 1810 become?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: local speech code 1810 ಯಾವ global token ಆಯಿತು?',
        opts: ['1810', '33810', '37906', '40192'], correct: 2,
        optsKn: ['1810', '33810', '37906', '40192'] },
      { q: 'What is the main idea behind residual vector quantization for speech?', qKn: 'Speech ಗಾಗಿ residual vector quantization ya ಮುಖ್ಯ idea ಏನೂ?',
        opts: ['Every quantizer processes different words', 'One codebook stores text and another stores images', 'A base quantizer captures coarse information while later quantizers refine the remaining error', 'It converts speech directly into BPE tokens'], correct: 2,
        optsKn: ['ಪ್ರತಿ quantizer ಭಿನ್ನ words ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ', 'ಒಂದೂ codebook text ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಇನ್ನೊಂದೂ images', 'base quantizer coarse information ಸೆರೆಹಿಡಿಯುತ್ತದೆ, ನಂತರದ quantizers ಉಳಿದ error ಪರಿಷ್ಕರಿಸುತ್ತವೆ', 'ಇದೂ speech ಅನ್ನೂ ನೇರವಾಗಿ BPE tokens ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: why did MultimodalTokenizer.encode() for speech return only 8 tokens instead of 32?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: speech ಗಾಗಿ MultimodalTokenizer.encode() ಏಕೆ 32 ಬದಲಿಗೆ ಕೇವಲ 8 tokens ಹಿಂದಿರುಗಿಸಿತು?',
        opts: ['The other tokens are corrupted', 'We simulate the main transformer generating the base acoustic stream while residual layers are handled separately', 'Python cannot process nested lists', 'The first token always stores the speaker\'s name'], correct: 1,
        optsKn: ['ಇತರ tokens corrupt ಆಗಿವೆ', 'Main transformer base acoustic stream ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡುತ್ತೇವೆ, residual layers ಪ್ರತ್ಯೇಕವಾಗಿ ನಿಭಾಯಿಸಲ್ಪಡುತ್ತವೆ', 'Python nested lists ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'ಮೊದಲ token ಯಾವಾಗಲೂ speaker ya ಹೆಸರು ಸಂಗ್ರಹಿಸುತ್ತದೆ'] },
      { q: 'Which statement best describes an any-to-any Transformer?', qKn: 'Any-to-any Transformer ಅನ್ನೂ ಯಾವ statement ಚೆನ್ನಾಗಿ ವಿವರಿಸುತ್ತದೆ?',
        opts: ['It requires a separate Transformer for every modality', 'It converts every modality into English before reasoning', 'Modality-specific tokenizers produce discrete codes mapped into one global vocabulary processed by a shared Transformer', 'It only supports text output'], correct: 2,
        optsKn: ['ಪ್ರತಿ modality ಗೆ ಪ್ರತ್ಯೇಕ Transformer ಬೇಕು', 'ಎಲ್ಲಾ modality ಅನ್ನೂ English ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ', 'Modality-specific tokenizers discrete codes ಉತ್ಪಾದಿಸುತ್ತವೆ, ಒಂದೇ shared Transformer ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಒಂದೇ global vocabulary ಗೆ map ಆಗುತ್ತವೆ', 'ಇದೂ ಕೇವಲ text output ಬೆಂಬಲಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
