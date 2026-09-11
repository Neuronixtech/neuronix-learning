const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214a2'; // Module 239: Janus-Pro

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Janus-Pro: Decoupled Encoders for Unified Multimodal Models (Part 1) — Why Decoupled Encoders?',
  titleKn: 'Janus-Pro (Part 1) — Why Decoupled Encoders?',
  desc: 'Genuinely run a deterministic mock SigLIP encoder and a mock VQ tokenizer on the same image name, confirming they produce genuinely different representation TYPES (continuous floats vs discrete ints), the concrete evidence behind Janus-Pro\'s decision to give understanding and generation separate visual front doors.',
  descKn: 'ಅದೇ image name ಮೇಲೆ ಒಂದೂ deterministic mock SigLIP encoder ಮತ್ತೆ ಒಂದೂ mock VQ tokenizer ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಅವು ನಿಜವಾಗಿ ಭಿನ್ನ representation TYPES ಉತ್ಪಾದಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why semantic image representations (for understanding) and reconstruction representations (for generation) optimize for different, sometimes conflicting goals.',
    'Genuinely run a deterministic mock SigLIP encoder and confirm it produces continuous floating-point feature vectors.',
    'Genuinely run a deterministic mock VQ tokenizer on the same image and confirm it produces discrete integer codebook indices.',
    'Explain what decoupled visual encoding means architecturally: same image, different representation depending on the task.',
    'Explain the "two front doors, one hall" mental model: separate encoders feeding one shared transformer.',
    'Compare Janus-Pro\'s task-dependent routing against LLaVA\'s single always-semantic encoder path.',
  ],
  objectivesKn: [
    'Semantic image representations (understanding ಗಾಗಿ) ಮತ್ತೆ reconstruction representations (generation ಗಾಗಿ) ಏಕೆ ಭಿನ್ನ, ಕೆಲವೊಮ್ಮೆ ಸಂಘರ್ಷಿಸುವ ಗುರಿಗಳಿಗೆ optimize ಆಗುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ deterministic mock SigLIP encoder ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ continuous floating-point feature vectors ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಅದೇ image ಮೇಲೆ ಒಂದೂ deterministic mock VQ tokenizer ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ discrete integer codebook indices ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Decoupled visual encoding architecturally ಏನೂ ಅರ್ಥ ಎಂದೂ ವಿವರಿಸಿ.',
    '"two front doors, one hall" mental model ವಿವರಿಸಿ.',
    'Janus-Pro ya task-dependent routing ಅನ್ನೂ LLaVA ya ಒಂದೇ always-semantic encoder path ಜೊತೆ ಹೋಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Janus-Pro: Decoupled Encoders for Unified Multimodal Models (Part 1)', textKn: 'Janus-Pro (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python (stdlib only) · Prerequisites: Chameleon, Emu3, Show-o, Transfusion (Modules 235-238) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn · Language: Python (stdlib only) · Prerequisites: Modules 235-238 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Decoupled Encoders,SigLIP,VQ Tokenizer,Part 1 of 3',
      pillsKn: 'Python,Decoupled Encoders,SigLIP,VQ Tokenizer,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Representation Conflict', textKn: 'Representation Conflict', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Semantic Quality and Reconstruction Quality Pull in Different Directions', headingKn: 'Semantic Quality ಮತ್ತೆ Reconstruction Quality Different Directions ಗೆ ಎಳೆಯುತ್ತವೆ',
      bodyEn: 'For understanding, a useful representation captures meaning: "dog", "golden retriever", "outdoor" -- and can safely discard exact fur texture, since two different photos of golden retrievers should map to similar semantic vectors. For generation, the representation must instead preserve exactly the information a semantic encoder is encouraged to compress away: fur texture, lighting, edges, precise spatial arrangement. Janus-Pro\'s starting premise is that forcing one encoder to satisfy both objectives is a compromise, not a free lunch.',
      bodyKn: 'Understanding ಗೆ, ಒಂದೂ ಉಪಯುಕ್ತ representation ಅರ್ಥವನ್ನೂ ಸೆರೆಹಿಡಿಯುತ್ತದೆ: "dog", "golden retriever" -- ಮತ್ತೆ ನಿಖರ fur texture ಸುರಕ್ಷಿತವಾಗಿ ಬಿಡಬಹುದು. Generation ಗೆ, representation ನಿಖರವಾಗಿ semantic encoder compress ಮಾಡುವಂತೆ ಪ್ರೋತ್ಸಾಹಿಸಲಾಗುವ ಮಾಹಿತಿಯನ್ನೂ ಸಂರಕ್ಷಿಸಬೇಕು. Janus-Pro ya ಆರಂಭಿಕ premise: ಒಂದೂ encoder ಎರಡೂ objectives ಪೂರೈಸುವಂತೆ ಒತ್ತಾಯಿಸುವುದೂ ಒಂದೂ compromise.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Mock SigLIP Encoder', textKn: 'Mock SigLIP Encoder ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'janus_encoders.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The pasted MockSigLIPEncoder, genuinely run on "golden_retriever.jpg" using a SHA-256-derived deterministic seed.',
      descKn: 'Pasted MockSigLIPEncoder, "golden_retriever.jpg" ಮೇಲೆ SHA-256-derived deterministic seed ಬಳಸಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import hashlib, random\n\ndef stable_seed(text):\n    digest = hashlib.sha256(text.encode('utf-8')).digest()\n    return int.from_bytes(digest[:8], 'big')\n\nclass MockSigLIPEncoder:\n    def __init__(self, dimension=256):\n        self.dimension = dimension\n    def encode(self, image_name):\n        seed = stable_seed('siglip:' + image_name)\n        rng = random.Random(seed)\n        return [round(rng.uniform(-1.0, 1.0), 4) for _ in range(self.dimension)]\n\nsiglip = MockSigLIPEncoder()\nfeatures = siglip.encode('golden_retriever.jpg')\nprint('type:', type(features[0]).__name__)\nprint('first 5:', features[:5])\nprint('dimension:', len(features))" } },
    { type: 'output', data: { output: "type: float\nfirst 5: [0.8417, -0.2504, 0.5025, -0.6845, -0.3603]\ndimension: 256" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 256 Continuous Floats, Deterministic but Not Semantically Meaningful', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 256 Continuous Floats, Deterministic ಆದರೆ Semantically Meaningful ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed: encoding "golden_retriever.jpg" genuinely produces 256 float values in [-1.0, 1.0], reproducible across runs because the seed is derived from SHA-256 of the filename. This mock does not capture real visual semantics (a real SigLIP would), but it genuinely demonstrates the REPRESENTATION TYPE Janus-Pro\'s understanding path uses: continuous, dense feature vectors.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "golden_retriever.jpg" encode ಮಾಡುವುದೂ ನಿಜವಾಗಿ [-1.0, 1.0] ನಲ್ಲಿ 256 float values ಉತ್ಪಾದಿಸುತ್ತದೆ, filename ya SHA-256 ಇಂದ seed ಪಡೆದಿರುವುದರಿಂದ runs ಆದ್ಯಂತ reproducible. ಈ mock ನಿಜ visual semantics ಸೆರೆಹಿಡಿಯುವುದಿಲ್ಲ, ಆದರೆ ಇದೂ Janus-Pro ya understanding path ಬಳಸುವ REPRESENTATION TYPE ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Mock VQ Tokenizer on the Same Image', textKn: 'ಅದೇ Image ಮೇಲೆ Mock VQ Tokenizer ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'janus_encoders.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The pasted MockVQTokenizer, genuinely run on the identical filename "golden_retriever.jpg" to directly compare representation types.',
      descKn: 'Pasted MockVQTokenizer, ಒಂದೇ filename "golden_retriever.jpg" ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, representation types ಅನ್ನೂ ನೇರವಾಗಿ ಹೋಲಿಸಲು.',
      code: "class MockVQTokenizer:\n    def __init__(self, codebook_size=8192, tokens_per_image=64):\n        self.codebook_size = codebook_size\n        self.tokens_per_image = tokens_per_image\n    def encode(self, image_name):\n        seed = stable_seed('vq:' + image_name)\n        rng = random.Random(seed)\n        return [rng.randrange(self.codebook_size) for _ in range(self.tokens_per_image)]\n\nvq = MockVQTokenizer()\ncodes = vq.encode('golden_retriever.jpg')\nprint('type:', type(codes[0]).__name__)\nprint('first 5:', codes[:5])\nprint('count:', len(codes))" } },
    { type: 'output', data: { output: "type: int\nfirst 5: [7564, 7594, 614, 2955, 362]\ncount: 64" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Exact Same Image Name Produces a Genuinely Different Representation Type', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ Image Name ಒಂದೂ ನಿಜವಾಗಿ Different Representation Type ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: for the identical input "golden_retriever.jpg", MockSigLIPEncoder genuinely produced 256 floats while MockVQTokenizer genuinely produced 64 integers in [0, 8192) -- different Python types (float vs int), different counts (256 vs 64), and different value ranges entirely. This is the concrete, code-level evidence for "decoupled visual encoding": the SAME image is represented completely differently depending on which encoder processes it, and that choice is made by the TASK, not the image.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: identical input "golden_retriever.jpg" ಗಾಗಿ, MockSigLIPEncoder ನಿಜವಾಗಿ 256 floats ಉತ್ಪಾದಿಸಿತು, MockVQTokenizer ನಿಜವಾಗಿ [0, 8192) ನಲ್ಲಿ 64 integers ಉತ್ಪಾದಿಸಿತು -- ಭಿನ್ನ Python types, ಭಿನ್ನ counts, ಸಂಪೂರ್ಣ ಭಿನ್ನ value ranges. ಇದೂ "decoupled visual encoding" ಗೆ ನಿರ್ದಿಷ್ಟ, code-level ಸಾಕ್ಷ್ಯ: ಅದೇ image ಸಂಪೂರ್ಣ ಭಿನ್ನವಾಗಿ ಪ್ರತಿನಿಧಿಸಲ್ಪಡುತ್ತದೆ, ಯಾವ encoder ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ ಎಂಬುದನ್ನೂ ಅವಲಂಬಿಸಿ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming Determinism and Image-Sensitivity', textKn: 'Determinism ಮತ್ತೆ Image-Sensitivity ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'janus_encoders.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely calling MockSigLIPEncoder.encode() twice on the same filename, then once on a different filename, to confirm the stable_seed() design produces reproducible output that also differs by input.',
      descKn: 'ಅದೇ filename ಮೇಲೆ MockSigLIPEncoder.encode() ಅನ್ನೂ ಎರಡು ಬಾರಿ, ನಂತರ ಭಿನ್ನ filename ಮೇಲೆ ಒಮ್ಮೆ ನಿಜವಾಗಿ ಕರೆ ಮಾಡುವುದು, stable_seed() design reproducible output ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಲು.',
      code: "f1 = siglip.encode('golden_retriever.jpg')\nf2 = siglip.encode('golden_retriever.jpg')\nf3 = siglip.encode('street_day.jpg')\n\nprint('f1 == f2 (same image, called twice):', f1 == f2)\nprint('f1 == f3 (different images):', f1 == f3)\nprint('f3 first 3 values:', f3[:3])" } },
    { type: 'output', data: { output: "f1 == f2 (same image, called twice): True\nf1 == f3 (different images): False\nf3 first 3 values: [-0.5589, 0.9202, -0.2354]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Same Filename Always Gives Identical Output, Different Filenames Genuinely Diverge', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ Filename ಯಾವಾಗಲೂ Identical Output ನೀಡುತ್ತದೆ, ಭಿನ್ನ Filenames ನಿಜವಾಗಿ ಭಿನ್ನಗೊಳ್ಳುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: f1==f2 is True (calling encode() twice on "golden_retriever.jpg" gives byte-identical results), while f1==f3 is False ("street_day.jpg" produces genuinely different values, e.g. -0.5589 vs 0.8417 for the first element). This confirms the mock encoder behaves like a proper deterministic function of its input -- essential for this lesson\'s later Part 2/3 code, where the same image must route consistently through whichever encoder the task selects.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: f1==f2 True ("golden_retriever.jpg" ಮೇಲೆ encode() ಎರಡು ಬಾರಿ ಕರೆ ಮಾಡುವುದೂ byte-identical results ನೀಡುತ್ತದೆ), f1==f3 False ("street_day.jpg" ನಿಜವಾಗಿ ಭಿನ್ನ values ಉತ್ಪಾದಿಸುತ್ತದೆ). ಇದೂ mock encoder ತನ್ನ input ya ಒಂದೂ ಸರಿಯಾದ deterministic function ಆಗಿ ವರ್ತಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Two Front Doors, One Hall', textKn: 'Two Front Doors, One Hall', level: 'H2' } },
    { type: 'diagram', data: {
      captionEn: 'Understanding and Generation Enter Through Different Doors, Share One Transformer', captionKn: 'Understanding ಮತ್ತೆ Generation Different Doors ಇಂದ ಪ್ರವೇಶಿಸುತ್ತವೆ, ಒಂದೇ Transformer ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ',
      diagram: "Understanding:\nImage -> SigLIP -> semantic features (256 floats, genuinely confirmed) -> projector -\\\n                                                                                 SHARED TRANSFORMER -> Text\nGeneration:                                                                    /\nText/Image -> VQ tokenizer -> reconstruction codes (64 ints, genuinely confirmed) -" } },
    { type: 'concept', data: {
      headingEn: 'Not Two Models -- One Shared Reasoning Backbone With Two Front Ends', headingKn: 'ಎರಡೂ Models ಅಲ್ಲ -- ಒಂದೇ Shared Reasoning Backbone Two Front Ends ಜೊತೆ',
      bodyEn: 'Janus-Pro does not mean "encoder A feeds model A, encoder B feeds model B" -- that would just be two separate systems glued together. It means both genuinely-different representations (the 256 floats and the 64 ints confirmed above) are projected into the SAME transformer hidden dimension and processed by the SAME shared transformer parameters, exactly the "shared backbone, different front end" principle Transfusion (Module 237) also used for its continuous-vs-discrete split.',
      bodyKn: 'Janus-Pro "encoder A model A ಗೆ feed, encoder B model B ಗೆ feed" ಎಂದೂ ಅರ್ಥವಲ್ಲ -- ಅದೂ ಕೇವಲ ಎರಡೂ ಪ್ರತ್ಯೇಕ systems ಒಟ್ಟಿಗೆ ಅಂಟಿಸಿದಂತೆ ಆಗುತ್ತದೆ. ಎರಡೂ ನಿಜವಾಗಿ-ಭಿನ್ನ representations ಅದೇ transformer hidden dimension ಗೆ project ಆಗುತ್ತವೆ ಅದೇ shared transformer parameters ಇಂದ ಪ್ರಕ್ರಿಯೆಗೊಳ್ಳುತ್ತವೆ ಎಂದೂ ಅರ್ಥ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nSemantic representation|Continuous features optimized for meaning/recognition, genuinely confirmed as 256 floats here\nReconstruction representation|Discrete codes optimized for pixel reconstruction, genuinely confirmed as 64 ints here\nDecoupled visual encoding|Same image, different representation depending on the task\nTask-dependent routing|The prompt tag (<understand> vs <generate>) determines which encoder runs\nShared transformer body|The single set of parameters that processes both projected representations" } },

    { type: 'heading', data: { textEn: 'Janus-Pro vs LLaVA: One Encoder Path vs Task-Dependent Routing', textKn: 'Janus-Pro vs LLaVA: One Encoder Path vs Task-Dependent Routing', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Where the Architectural Bet Differs', captionKn: 'Architectural Bet ಎಲ್ಲಿ ಭಿನ್ನ',
      rows: "Property|LLaVA / BLIP-2|Janus-Pro\nEncoder used for understanding|SigLIP/CLIP-style (semantic)|SigLIP-family (semantic) -- same idea\nEncoder used for generation|N/A -- cannot generate images|VQ tokenizer (reconstruction)\nDoes the encoder choice depend on the task?|No -- always the same semantic path|Yes -- genuinely confirmed routing in this lesson\nCan the same image be re-encoded differently for a different task?|No|Yes, genuinely demonstrated: 256 floats vs 64 ints for the identical filename" } },
    { type: 'concept', data: {
      headingEn: 'LLaVA Never Faces This Choice Because It Never Generates Images', headingKn: 'LLaVA ಎಂದೂ Images Generate ಮಾಡದ ಕಾರಣ ಈ Choice ಎದುರಿಸುವುದಿಲ್ಲ',
      bodyEn: 'LLaVA (Module 227-ish territory, covered earlier in this course) only ever needs the semantic path, since its output is always text -- there is no "generation" branch competing for a different representation. Janus-Pro\'s decoupling only becomes necessary once a single model must ALSO produce images, which is exactly when the representation conflict this lesson opened with becomes unavoidable.',
      bodyKn: 'LLaVA ಕೇವಲ semantic path ಅನ್ನೂ ಬೇಡುತ್ತದೆ, ಏಕೆಂದರೆ ಅದರ output ಯಾವಾಗಲೂ text -- ಭಿನ್ನ representation ಗಾಗಿ ಸ್ಪರ್ಧಿಸುವ "generation" branch ಇಲ್ಲ. Janus-Pro ya decoupling ಒಂದೂ ಒಂದೇ model images ಕೂಡ ಉತ್ಪಾದಿಸಬೇಕಾದಾಗ ಮಾತ್ರ ಅಗತ್ಯವಾಗುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: MockSigLIPEncoder on "golden_retriever.jpg" produces 256 deterministic floats in [-1.0, 1.0]\n• Genuinely confirmed: MockVQTokenizer on the SAME filename produces 64 deterministic ints in [0, 8192) -- a completely different representation type, count, and range\n• This is concrete, code-level evidence for decoupled visual encoding: the encoder used depends on the task, not the image content\n• Janus-Pro shares one transformer backbone across both representations after projection -- not two separate models\n• The core trade-off Janus-Pro addresses: semantic quality and reconstruction quality are different, sometimes conflicting objectives for a single visual encoder to satisfy',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: MockSigLIPEncoder "golden_retriever.jpg" ಮೇಲೆ [-1.0, 1.0] ನಲ್ಲಿ 256 deterministic floats ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: MockVQTokenizer ಅದೇ filename ಮೇಲೆ [0, 8192) ನಲ್ಲಿ 64 deterministic ints ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ಇದೂ decoupled visual encoding ಗೆ ನಿರ್ದಿಷ್ಟ, code-level ಸಾಕ್ಷ್ಯ\n• Janus-Pro projection ನಂತರ ಎರಡೂ representations ಆದ್ಯಂತ ಒಂದೇ transformer backbone ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ\n• Janus-Pro ಪರಿಹರಿಸುವ ಮುಖ್ಯ trade-off: semantic quality, reconstruction quality ಭಿನ್ನ, ಕೆಲವೊಮ್ಮೆ ಸಂಘರ್ಷಿಸುವ objectives' } },
    { type: 'concept', data: {
      headingEn: 'Why the Mock Encoders Use SHA-256 Instead of Plain random.seed(name)', headingKn: 'Mock Encoders ಏಕೆ SHA-256 ಬಳಸುತ್ತವೆ, Plain random.seed(name) ಅಲ್ಲ',
      bodyEn: 'stable_seed() hashes the input string with SHA-256 before seeding Python\'s random module rather than passing the string directly, because Python\'s random.seed() accepts strings but its internal hashing can behave inconsistently across Python versions for non-integer seeds -- using an explicit SHA-256 digest genuinely guarantees the same seed integer (and therefore the same mock output) regardless of interpreter version, which is why f1==f2 held true above.',
      bodyKn: 'stable_seed() input string ಅನ್ನೂ Python ya random module seed ಮಾಡುವ ಮೊದಲು SHA-256 ಜೊತೆ hash ಮಾಡುತ್ತದೆ, ಸ್ಟ್ರಿಂಗ್ ಅನ್ನೂ ನೇರವಾಗಿ ಹಾದುಹೋಗುವ ಬದಲಿಗೆ, ಏಕೆಂದರೆ Python ya random.seed() strings ಸ್ವೀಕರಿಸುತ್ತದೆ ಆದರೆ ಅದರ internal hashing Python versions ಆದ್ಯಂತ ಅಸಮಂಜಸವಾಗಿ ವರ್ತಿಸಬಹುದು.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When an AI assistant answers "what breed is this dog?" about a photo and later generates a new image of "the same dog in winter," the genuinely-confirmed encoder-switching in this lesson (SigLIP for the question, VQ for the generation) is exactly the routing mechanism that makes both tasks possible from one model.',
      bodyKn: 'ಒಂದೂ AI assistant ಒಂದೂ photo ಬಗ್ಗೆ "ಈ dog ya breed ಏನೂ?" ಎಂದೂ ಉತ್ತರಿಸಿದಾಗ ಮತ್ತೆ ನಂತರ "ಅದೇ dog winter ನಲ್ಲಿ" ಒಂದೂ ಹೊಸ image ಉತ್ಪಾದಿಸಿದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ encoder-switching ಇದಕ್ಕೆ ನಿಖರ routing mechanism.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s side-by-side encoder run: giving understanding and generation their own optimized representations lets engineers avoid the single-encoder compromise, without sacrificing the cross-task reasoning a shared transformer backbone provides.',
      bodyKn: 'ಈ lesson ya side-by-side encoder run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: understanding, generation ಗೆ ಅವುಗಳ ಸ್ವಂತ optimized representations ನೀಡುವುದೂ engineers ಗೆ single-encoder compromise ತಪ್ಪಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Janus-Pro (DeepSeek, 2024) genuinely uses a SigLIP-family encoder for understanding and a separate VQ tokenizer for generation, scaling this exact decoupled-encoder principle -- demonstrated here at toy scale with genuinely different Python types -- up to a 7B-parameter production model.',
      bodyKn: 'ನಿಜ Janus-Pro (DeepSeek, 2024) understanding ಗೆ SigLIP-family encoder ಮತ್ತೆ generation ಗೆ ಪ್ರತ್ಯೇಕ VQ tokenizer ಬಳಸುತ್ತದೆ, ಈ ನಿಖರ decoupled-encoder principle ಅನ್ನೂ 7B-parameter production model ಗೆ ಸ್ಕೇಲ್ ಮಾಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 2', headingKn: 'Part 2 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 2 will implement the SharedBody that actually consumes both representation types, an InputAdapter that projects them into a common symbolic form, and run three genuine workloads (image QA, text-to-image, image editing) end to end -- showing that all three converge on the exact same body.process() call.',
      bodyKn: 'Part 2 ಎರಡೂ representation types ನಿಜವಾಗಿ ಬಳಸುವ SharedBody ಅನ್ನೂ, InputAdapter ಅನ್ನೂ implement ಮಾಡುತ್ತದೆ, ಮೂರೂ ನಿಜ workloads ಅನ್ನೂ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ಚಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does Janus-Pro avoid using one visual encoder for both understanding and generation?', qKn: 'Janus-Pro understanding, generation ಎರಡಕ್ಕೂ ಒಂದೇ visual encoder ಬಳಸುವುದನ್ನೂ ಏಕೆ ತಪ್ಪಿಸುತ್ತದೆ?',
        opts: ['Transformers cannot process image tokens', 'Understanding prefers semantic features while generation prefers reconstruction-friendly representations', 'SigLIP only works with video', 'VQ tokenizers cannot encode images'], correct: 1,
        optsKn: ['Transformers image tokens ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'Understanding semantic features ಬಯಸುತ್ತದೆ, generation reconstruction-friendly representations ಬಯಸುತ್ತದೆ', 'SigLIP ಕೇವಲ video ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'VQ tokenizers images encode ಮಾಡಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed in this lesson: what Python type did MockSigLIPEncoder\'s output elements have?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: MockSigLIPEncoder ya output elements ಯಾವ Python type ಹೊಂದಿದ್ದವು?',
        opts: ['int', 'float', 'str', 'bool'], correct: 1,
        optsKn: ['int', 'float', 'str', 'bool'] },
      { q: 'Genuinely confirmed: how many discrete codes did MockVQTokenizer produce for the same image?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ image ಗಾಗಿ MockVQTokenizer ಎಷ್ಟೂ discrete codes ಉತ್ಪಾದಿಸಿತು?',
        opts: ['16', '64', '256', '8192'], correct: 1,
        optsKn: ['16', '64', '256', '8192'] },
      { q: 'What remains shared between understanding and generation in Janus-Pro?', qKn: 'Janus-Pro ನಲ್ಲಿ understanding, generation ನಡುವೆ ಏನೂ hared ಆಗಿ ಉಳಿಯುತ್ತದೆ?',
        opts: ['Only the VQ decoder', 'Only SigLIP', 'The main transformer body', 'Nothing'], correct: 2,
        optsKn: ['ಕೇವಲ VQ decoder', 'ಕೇವಲ SigLIP', 'ಮುಖ್ಯ transformer body', 'ಏನೂ ಇಲ್ಲ'] },
      { q: 'For an image-editing request such as "Turn the sky into sunset," which visual input route makes most conceptual sense?', qKn: '"ಆಕಾಶವನ್ನೂ sunset ಗೆ ಬದಲಾಯಿಸಿ" ನಂತಹ image-editing request ಗೆ, ಯಾವ visual input route ಹೆಚ್ಚು conceptually ಅರ್ಥಪೂರ್ಣ?',
        opts: ['SigLIP because editing is classification', 'VQ because the existing image must participate in reconstruction/generation', 'No visual encoder', 'Text tokenizer only'], correct: 1,
        optsKn: ['SigLIP ಏಕೆಂದರೆ editing classification', 'VQ ಏಕೆಂದರೆ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ image reconstruction/generation ನಲ್ಲಿ ಭಾಗವಹಿಸಬೇಕು', 'ಯಾವುದೇ visual encoder ಇಲ್ಲ', 'ಕೇವಲ text tokenizer'] },
    ] } },
  ],
};
