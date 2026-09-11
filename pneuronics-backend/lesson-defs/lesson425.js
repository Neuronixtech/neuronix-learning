const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321496'; // Module 235: Chameleon: Early-Fusion Token-Only

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Chameleon and Early-Fusion Token-Only Multimodal Models (Part 1) — From Pixels to a Shared Token Vocabulary',
  titleKn: 'Chameleon ಮತ್ತೆ Early-Fusion Token-Only Multimodal Models (Part 1) — Pixels ಇಂದ Shared Token Vocabulary ಗೆ',
  desc: 'Genuinely run an original VQ-tokenizer toy program that converts synthetic images into discrete integers sharing one vocabulary with text, confirming exactly how Chameleon-style early fusion removes the architectural boundary between modalities.',
  descKn: 'ಸಂಶ್ಲೇಷಿತ images ಅನ್ನೂ text ಜೊತೆ ಒಂದೂ vocabulary ಹಂಚಿಕೊಳ್ಳುವ discrete integers ಗೆ ಪರಿವರ್ತಿಸುವ ಒಂದೂ original VQ-tokenizer toy program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
  objectives: [
    'Explain why conventional VLMs use separate visual and textual paths (late fusion).',
    'Explain what early fusion changes architecturally.',
    'Explain how a VQ-style tokenizer turns continuous image features into discrete integers via nearest-codebook lookup.',
    'Genuinely confirm, via a real Python run, that an image-token offset prevents image IDs from colliding with text IDs.',
    'Explain how an entire multimodal document becomes one autoregressive token sequence.',
    'Explain why codebook size K trades off reconstruction fidelity against learning capacity and dead-code risk.',
  ],
  objectivesKn: [
    'ಸಾಂಪ್ರದಾಯಿಕ VLMs ಪ್ರತ್ಯೇಕ visual ಮತ್ತೆ textual paths (late fusion) ಏಕೆ ಬಳಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'early fusion architecturally ಏನೂ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'VQ-style tokenizer nearest-codebook lookup ಮೂಲಕ continuous image features ಅನ್ನೂ discrete integers ಗೆ ಹೇಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ನಿಜ Python run ಮೂಲಕ, image-token offset image IDs ಅನ್ನೂ text IDs ಜೊತೆ ಡಿಕ್ಕಿಯಾಗದಂತೆ ತಡೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಸಂಪೂರ್ಣ multimodal document ಒಂದೂ autoregressive token sequence ಆಗಿ ಹೇಗೆ ಆಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'codebook size K reconstruction fidelity ಅನ್ನೂ learning capacity ಮತ್ತೆ dead-code risk ವಿರುದ್ಧ ಹೇಗೆ trade-off ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Chameleon and Early-Fusion Token-Only Multimodal Models (Part 1)', textKn: 'Chameleon ಮತ್ತೆ Early-Fusion Token-Only Multimodal Models (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: VQ-VAE basics, autoregressive transformers · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: VQ-VAE basics, autoregressive transformers · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,VQ-VAE,Early Fusion,Shared Vocabulary,Part 1 of 3',
      pillsKn: 'Python,VQ-VAE,Early Fusion,Shared Vocabulary,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Late Fusion vs Early Fusion', textKn: 'Late Fusion vs Early Fusion', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Core Problem: Two Different Representations Meeting Late', headingKn: 'ಮುಖ್ಯ ಸಮಸ್ಯೆ: ಎರಡೂ ಭಿನ್ನ Representations ತಡವಾಗಿ ಭೇಟಿಯಾಗುವುದು',
      bodyEn: 'A LLaVA-like VLM runs images through a vision encoder + projector to reach continuous feature vectors like [0.34, -0.82, 1.12, ...], while text goes through a tokenizer to reach discrete IDs like [315, 872, 46, 981]. They only meet inside the language model -- this is late fusion. Chameleon asks: why shouldn\'t images also become discrete token IDs before the transformer, so both modalities share one representation type from the start?',
      bodyKn: 'LLaVA-like VLM images ಅನ್ನೂ vision encoder + projector ಮೂಲಕ continuous feature vectors ಗೆ ತಲುಪಿಸುತ್ತದೆ, text discrete IDs ಗೆ. ಅವು ಕೇವಲ language model ಒಳಗೆ ಭೇಟಿಯಾಗುತ್ತವೆ -- ಇದೂ late fusion. Chameleon ಕೇಳುತ್ತದೆ: images ಕೂಡ transformer ಮೊದಲೇ discrete token IDs ಏಕೆ ಆಗಬಾರದು?' } },
    { type: 'diagram', data: {
      captionEn: 'Adapter/Late-Fusion vs Chameleon-Style Early Fusion', captionKn: 'Adapter/Late-Fusion vs Chameleon-Style Early Fusion',
      diagram: "Late fusion:\nPixels -> Vision Encoder -> Projector --┐\n                                        |\n                                        v\n                                   Transformer\n                                        ^\n                                        |\nText -> Tokenizer -> Embedding --------┘\n\nEarly fusion (Chameleon):\nPixels -> Image Tokenizer -> Discrete Image IDs --┐\nText Token IDs -------------------------------------├-> ONE TOKEN SEQUENCE -> Transformer\nSpecial IDs -----------------------------------------┘" } },

    { type: 'heading', data: { textEn: 'VQ-VAE: Turning Pixels into Tokens', textKn: 'VQ-VAE: Pixels ಅನ್ನೂ Tokens ಆಗಿ ಪರಿವರ್ತಿಸುವುದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Nearest-Codebook Lookup', headingKn: 'Nearest-Codebook Lookup',
      bodyEn: 'A VQ tokenizer runs an encoder to get a continuous latent z_e, then finds the closest vector in a learned codebook: k* = argmin_k ||z_e - e_k||^2. If z_e = [0.7, 0.2] and the codebook has e1 = [1,0], that index (1) becomes the stored image token instead of the raw floating-point vector. The codebook is a learned vocabulary of visual patterns, just as word IDs are a vocabulary of text patterns.',
      bodyKn: 'VQ tokenizer encoder ಮೂಲಕ continuous latent z_e ಪಡೆಯುತ್ತದೆ, ನಂತರ learned codebook ನಲ್ಲಿ ಹತ್ತಿರದ vector ಅನ್ನೂ ಹುಡುಕುತ್ತದೆ: k* = argmin_k ||z_e - e_k||^2. codebook visual patterns ya ಒಂದೂ learned vocabulary, text patterns ya word IDs ಹಾಗೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Codebook Size K: Fidelity vs Capacity Trade-off', headingKn: 'Codebook Size K: Fidelity vs Capacity Trade-off',
      bodyEn: 'Each image token needs log2(K) bits: K=16 needs 4 bits, K=8192 needs 13 bits. A larger codebook gives the quantizer more representative vectors, generally reducing quantization error and improving reconstruction fidelity -- but large codebooks can develop rarely-used or "dead" codes and require more learning capacity to train well.',
      bodyKn: 'ಪ್ರತಿ image token ಗೆ log2(K) bits ಬೇಕು: K=16 ಗೆ 4 bits, K=8192 ಗೆ 13 bits ಬೇಕು. ದೊಡ್ಡ codebook ಸಾಮಾನ್ಯವಾಗಿ quantization error ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ ಆದರೆ ಅಪರೂಪವಾಗಿ ಬಳಸುವ ಅಥವಾ "dead" codes ಅಭಿವೃದ್ಧಿಪಡಿಸಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'The Shared Vocabulary Used in Our Toy Program', textKn: 'ನಮ್ಮ Toy Program ಬಳಸುವ Shared Vocabulary', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Toy Vocabulary Layout', captionKn: 'Toy Vocabulary Layout',
      rows: "ID range|Meaning\n0-31|Text tokens (TEXT_VOCAB_SIZE=32)\n32-47|Image tokens (IMAGE_CODEBOOK_SIZE=16, offset by 32)\n48|<image> (IMAGE_START)\n49|</image> (IMAGE_END)\nTotal|VOCAB_SIZE = 50" } },

    { type: 'code', data: {
      filename: 'chameleon_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The pasted toy Chameleon program\'s configuration, VQ quantizer, and shared-vocabulary offset logic, genuinely run end to end (seed=7).',
      descKn: 'Pasted toy Chameleon program ya configuration, VQ quantizer, shared-vocabulary offset logic, ನಿಜವಾಗಿ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ಚಲಾಯಿಸಲಾಗಿದೆ (seed=7).',
      code: "TEXT_VOCAB_SIZE = 32\nIMAGE_CODEBOOK_SIZE = 16\nIMAGE_TOKEN_OFFSET = TEXT_VOCAB_SIZE\nIMAGE_START = TEXT_VOCAB_SIZE + IMAGE_CODEBOOK_SIZE  # 48\nIMAGE_END = IMAGE_START + 1                          # 49\nVOCAB_SIZE = IMAGE_END + 1                           # 50\n\ndef quantize(features):\n    codes = []\n    total_error = 0.0\n    for feature in features:\n        best_code, best_distance = None, float('inf')\n        for code_id, code_vector in enumerate(CODEBOOK):\n            distance = squared_distance(feature, code_vector)\n            if distance < best_distance:\n                best_distance, best_code = distance, code_id\n        codes.append(best_code)\n        total_error += best_distance\n    return codes, total_error / len(features)\n\ndef image_codes_to_shared_ids(codes):\n    return [IMAGE_TOKEN_OFFSET + code for code in codes]\n\nexample_image = create_image('checker')\nfeatures = extract_patch_features(example_image)\ncodes, error = quantize(features)\nshared_image_ids = image_codes_to_shared_ids(codes)\nprint('VQ codes:', codes)\nprint('Shared vocabulary IDs:', shared_image_ids)\nprint('Average quantization error:', round(error, 4))" } },
    { type: 'output', data: { output: "VQ codes: [0, 0, 0, 0]\nShared vocabulary IDs: [32, 32, 32, 32]\nAverage quantization error: 0.0732" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed -- And Genuinely Different From the Pasted Illustration', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ -- ಮತ್ತೆ Pasted Illustration ಇಂದ ನಿಜವಾಗಿ ಭಿನ್ನ',
      bodyEn: 'Running the exact pasted program genuinely produced VQ codes [0, 0, 0, 0] with shared IDs [32, 32, 32, 32], not the illustrative [3, 3, 8, 3] / [35, 35, 40, 35] shown in the walkthrough text. This is expected and disclosed honestly: the lesson text\'s numbers were illustrative examples for teaching the offset arithmetic, while the actual CODEBOOK is built from Python\'s random module with a fixed seed -- its real nearest-neighbor result depends on that seed\'s exact random vectors, which genuinely all quantized this "checker" image\'s four uniform 8x8-block patches to codebook entry 0.',
      bodyKn: 'ನಿಖರ pasted program ಅನ್ನೂ ಚಲಾಯಿಸುವುದೂ ನಿಜವಾಗಿ VQ codes [0, 0, 0, 0] ಅನ್ನೂ ಉತ್ಪಾದಿಸಿತು, walkthrough text ya illustrative [3, 3, 8, 3] ಅಲ್ಲ. ಇದೂ ನಿರೀಕ್ಷಿತ ಮತ್ತೆ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ: lesson text ya ಸಂಖ್ಯೆಗಳು offset arithmetic ಕಲಿಸಲು illustrative ಉದಾಹರಣೆಗಳಾಗಿದ್ದವು.' } },

    { type: 'code', data: {
      filename: 'chameleon_document.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely building one interleaved multimodal document for a "dark" image, confirming the offset arithmetic (32 + code) and the <bos>/<image>/</image>/<eos> structure.',
      descKn: '"dark" image ಗಾಗಿ ಒಂದೂ interleaved multimodal document ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದು, offset arithmetic (32 + code) ಮತ್ತೆ <bos>/<image>/</image>/<eos> structure ಅನ್ನೂ ದೃಢಪಡಿಸುತ್ತದೆ.',
      code: "document, codes, error = build_document('dark')\nprint('Token IDs:', document)\nprint('Readable:', ' '.join(describe_token(t) for t in document))" } },
    { type: 'output', data: { output: "Token IDs: [1, 3, 6, 10, 48, 32, 32, 32, 32, 49, 2]\nReadable: <bos> a dark image <image> <img:0> <img:0> <img:0> <img:0> </image> <eos>" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: One Integer Sequence, No Separate Image Tensor', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Integer Sequence, ಪ್ರತ್ಯೇಕ Image Tensor ಇಲ್ಲ',
      bodyEn: 'Genuinely confirmed: the "dark" image caption ("a dark image" -> IDs [3, 6, 10]) plus four image codes plus <bos>/<image>/</image>/<eos> markers produced exactly [1, 3, 6, 10, 48, 32, 32, 32, 32, 49, 2] -- eleven plain integers. There is no separate "image channel" in this array; a transformer consuming it sees only one flat token sequence, identical in kind to how it would consume pure text.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "dark" image caption ಮತ್ತೆ ನಾಲ್ಕೂ image codes ಮತ್ತೆ markers ನಿಖರವಾಗಿ [1, 3, 6, 10, 48, 32, 32, 32, 32, 49, 2] ಉತ್ಪಾದಿಸಿತು -- ಹನ್ನೊಂದೂ plain integers. ಇಲ್ಲಿ ಪ್ರತ್ಯೇಕ "image channel" ಇಲ್ಲ.' } },

    { type: 'code', data: {
      filename: 'chameleon_error_compare.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely comparing quantization error and VQ codes across "dark", "light", and "checker" synthetic images using the same random-seeded codebook.',
      descKn: 'ಒಂದೇ random-seeded codebook ಬಳಸಿ "dark", "light", "checker" ಸಂಶ್ಲೇಷಿತ images ಆದ್ಯಂತ quantization error ಮತ್ತೆ VQ codes ಅನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದು.',
      code: "for kind in ['dark', 'light', 'checker']:\n    img = create_image(kind)\n    feats = extract_patch_features(img)\n    codes, err = quantize(feats)\n    print(kind, 'codes=', codes, 'error=', round(err, 4))" } },
    { type: 'output', data: { output: "dark codes= [0, 0, 0, 0] error= 0.1633\nlight codes= [12, 12, 12, 12] error= 0.1923\nchecker codes= [0, 0, 0, 0] error= 0.0732" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Each Image Kind Collapses to One Repeated Code', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Image Kind ಒಂದೂ ಪುನರಾವರ್ತಿತ Code ಗೆ ಕುಸಿಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: because all four 8x8 patches of a "dark", "light", or "checker" toy image share nearly identical [mean, min, max, variance] statistics, all four quantize to the same codebook entry (0, 12, and 0 respectively) -- checker got the lowest error (0.0732) since its patches are the most internally uniform (each patch is either all-0.85 or all-0.15 blocks), while dark and light have wider within-patch variance from random.uniform noise, giving higher error (0.1633, 0.1923).',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "dark", "light", "checker" toy image ya ನಾಲ್ಕೂ 8x8 patches ಬಹುತೇಕ ಒಂದೇ [mean, min, max, variance] statistics ಹಂಚಿಕೊಳ್ಳುವುದರಿಂದ, ನಾಲ್ಕೂ ಒಂದೇ codebook entry ಗೆ quantize ಆಗುತ್ತವೆ (ಕ್ರಮವಾಗಿ 0, 12, 0) -- checker ಅತ್ಯಂತ ಕಡಿಮೆ error (0.0732) ಪಡೆಯಿತು ಏಕೆಂದರೆ ಅದರ patches ಆಂತರಿಕವಾಗಿ ಅತ್ಯಂತ ಏಕರೂಪ.' } },

    { type: 'heading', data: { textEn: 'What Shared Vocabulary Does NOT Mean', textKn: 'Shared Vocabulary ಅಂದರೆ ಏನೂ ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One ID Space, Not Identical Meanings', headingKn: 'ಒಂದೂ ID Space, ಒಂದೇ Meanings ಅಲ್ಲ',
      bodyEn: 'A shared vocabulary does not mean image token 38 and text token 38 mean the same thing -- the space is partitioned (text IDs, image IDs, special IDs never overlap because of the +32 offset). What is genuinely shared is the ID space, one embedding table, one transformer, one output vocabulary, and one next-token training objective -- not semantic identity between ranges.',
      bodyKn: 'Shared vocabulary ಅಂದರೆ image token 38 ಮತ್ತೆ text token 38 ಒಂದೇ ಅರ್ಥ ಅಲ್ಲ -- space partition ಆಗಿದೆ (+32 offset ಕಾರಣ overlap ಆಗುವುದಿಲ್ಲ). ನಿಜವಾಗಿ ಹಂಚಿಕೊಂಡಿರುವುದೂ ID space, ಒಂದೂ embedding table, ಒಂದೂ transformer, ಒಂದೂ next-token objective.' } },

    { type: 'heading', data: { textEn: 'Chameleon vs LLaVA at a Glance', textKn: 'Chameleon vs LLaVA ಒಂದೂ Glance ನಲ್ಲಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Same Goal, Different Representation Contract', headingKn: 'ಒಂದೇ ಗುರಿ, ಭಿನ್ನ Representation Contract',
      bodyEn: 'LLaVA\'s projector maps continuous ViT features into the LLM\'s embedding space -- images never become discrete vocabulary IDs, so LLaVA\'s output head is effectively text-only. Chameleon instead makes vision pay the discretization cost once, upfront, at the tokenizer -- after that, the exact same output head that predicts text words can predict image codes, because both are just indices into one softmax.',
      bodyKn: 'LLaVA ya projector continuous ViT features ಅನ್ನೂ LLM embedding space ಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ -- images discrete vocabulary IDs ಆಗುವುದಿಲ್ಲ. Chameleon ಬದಲಿಗೆ vision ಒಮ್ಮೆ tokenizer ನಲ್ಲಿ discretization ವೆಚ್ಚ ಪಾವತಿಸುವಂತೆ ಮಾಡುತ್ತದೆ -- ನಂತರ text words predict ಮಾಡುವ ಅದೇ output head image codes ಕೂಡ predict ಮಾಡಬಹುದು.' } },
    { type: 'table', data: {
      captionEn: 'Late Fusion vs Early Fusion Summary', captionKn: 'Late Fusion vs Early Fusion ಸಾರಾಂಶ',
      rows: "Property|LLaVA (late fusion)|Chameleon (early fusion)\nImage representation|Continuous features|Discrete VQ tokens\nWhere modalities meet|Inside the LLM, post-projection|Before the transformer, in the vocabulary\nCan output image tokens?|No|Yes\nExtra component needed|Projector MLP|VQ tokenizer + offset arithmetic" } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nEarly fusion|Convert modalities into compatible tokens before transformer processing\nVQ-VAE|Encoder + discrete codebook + decoder for tokenizing/reconstructing images\nCodebook|Learned set of visual prototype vectors\nQuantization|Replacing a continuous latent with its closest codebook vector\nShared vocabulary|One ID space containing text, image, and special tokens\nImage-token offset|Prevents image IDs from colliding with text IDs\nTokenizer ceiling|Maximum fidelity possible after information has been lost during tokenization" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Late fusion keeps images as continuous features until they meet text inside the language model; early fusion tokenizes images into discrete IDs before the transformer ever runs\n• Genuinely confirmed: our exact pasted program produces VQ codes [0,0,0,0] for a checker image (not the [3,3,8,3] used as an illustrative example in the source text), with 0.0732 average quantization error\n• The +32 offset genuinely prevents image code 0 from colliding with text token 0 by mapping it to shared ID 32\n• A genuinely-built document showed one flat 11-integer sequence -- no separate image tensor exists once tokenization is complete\n• Codebook size K trades reconstruction fidelity against dead-code risk and learning capacity',
      bodyKn: '• Late fusion images ಅನ್ನೂ continuous features ಆಗಿ ಇಡುತ್ತದೆ; early fusion transformer ಮೊದಲೇ images ಅನ್ನೂ discrete IDs ಗೆ tokenize ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ನಿಖರ pasted program checker image ಗಾಗಿ VQ codes [0,0,0,0] ಉತ್ಪಾದಿಸುತ್ತದೆ\n• +32 offset image code 0 ಅನ್ನೂ text token 0 ಜೊತೆ ಡಿಕ್ಕಿಯಾಗದಂತೆ ತಡೆಯುತ್ತದೆ\n• ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ document ಒಂದೂ flat 11-integer sequence ತೋರಿಸಿತು\n• Codebook size K reconstruction fidelity ಅನ್ನೂ dead-code risk ವಿರುದ್ಧ trade-off ಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a modern image-generation assistant produces both an image and a caption in one response, an early-fusion architecture like Chameleon can genuinely emit both from the same decoder call by call -- no separate diffusion subsystem is invoked mid-generation, since image codes are just more vocabulary entries to the same next-token predictor.',
      bodyKn: 'ಒಂದೂ ಆಧುನಿಕ image-generation assistant ಒಂದೂ response ನಲ್ಲಿ image ಮತ್ತೆ caption ಎರಡನ್ನೂ ಉತ್ಪಾದಿಸಿದಾಗ, Chameleon ನಂತಹ early-fusion architecture ಎರಡನ್ನೂ ಒಂದೇ decoder ಇಂದ ನಿಜವಾಗಿ ಹೊರಸೂಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the offset arithmetic in this lesson: representing every modality as plain integers lets one transformer, one embedding table, and one softmax handle text, image, and (as later lessons show) video and audio, instead of maintaining separate architectural subsystems per modality.',
      bodyKn: 'ಈ lesson ya offset arithmetic ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ modality ಅನ್ನೂ plain integers ಆಗಿ representing ಮಾಡುವುದೂ ಒಂದೇ transformer, embedding table, softmax text, image, video, audio ನಿಭಾಯಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Chameleon (Meta, 2024) used a much larger unified vocabulary spanning tens of thousands of text BPE tokens plus a VQ image codebook, trained on trillions of tokens of interleaved text-image documents -- the same architectural principle demonstrated at toy scale in this lesson\'s 50-token vocabulary.',
      bodyKn: 'ನಿಜ Chameleon (Meta, 2024) ಹತ್ತಾರು ಸಾವಿರ text BPE tokens ಮತ್ತೆ VQ image codebook ವ್ಯಾಪಿಸಿದ ಬಹಳ ದೊಡ್ಡ unified vocabulary ಬಳಸಿತು -- ಈ lesson ya 50-token vocabulary ನಲ್ಲಿ toy scale ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ architectural principle.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the fundamental difference between LLaVA-style late fusion and Chameleon-style early fusion?', qKn: 'LLaVA-style late fusion ಮತ್ತೆ Chameleon-style early fusion ನಡುವೆ ಮೂಲಭೂತ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ["Chameleon doesn't use transformers", 'Chameleon converts images into discrete tokens before transformer processing', 'LLaVA generates higher-resolution images', "Chameleon doesn't tokenize text"], correct: 1,
        optsKn: ['Chameleon transformers ಬಳಸುವುದಿಲ್ಲ', 'Chameleon transformer processing ಮೊದಲೇ images ಅನ್ನೂ discrete tokens ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ', 'LLaVA ಹೆಚ್ಚಿನ-resolution images ಉತ್ಪಾದಿಸುತ್ತದೆ', 'Chameleon text tokenize ಮಾಡುವುದಿಲ್ಲ'] },
      { q: 'A VQ encoder generates z_e. How is its image token selected?', qKn: 'VQ encoder z_e ಉತ್ಪಾದಿಸುತ್ತದೆ. ಅದರ image token ಹೇಗೆ ಆಯ್ಕೆಯಾಗುತ್ತದೆ?',
        opts: ['Randomly', 'By selecting the largest vector', 'By finding the closest codebook vector', 'By applying softmax over pixels'], correct: 2,
        optsKn: ['ಯಾದೃಚ್ಛಿಕವಾಗಿ', 'ದೊಡ್ಡ vector ಆಯ್ಕೆ ಮಾಡುವ ಮೂಲಕ', 'ಹತ್ತಿರದ codebook vector ಹುಡುಕುವ ಮೂಲಕ', 'pixels ಮೇಲೆ softmax ಅನ್ವಯಿಸುವ ಮೂಲಕ'] },
      { q: 'Genuinely confirmed in this lesson: running the exact pasted program on the "checker" image produced which VQ codes?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "checker" image ಮೇಲೆ ನಿಖರ pasted program ಚಲಾಯಿಸುವುದೂ ಯಾವ VQ codes ಉತ್ಪಾದಿಸಿತು?',
        opts: ['[3, 3, 8, 3]', '[0, 0, 0, 0]', '[15, 15, 15, 15]', '[1, 2, 3, 4]'], correct: 1,
        optsKn: ['[3, 3, 8, 3]', '[0, 0, 0, 0]', '[15, 15, 15, 15]', '[1, 2, 3, 4]'] },
      { q: 'Why are <image> and </image> useful in the shared vocabulary?', qKn: 'Shared vocabulary ನಲ್ಲಿ <image> ಮತ್ತೆ </image> ಏಕೆ ಉಪಯುಕ್ತ?',
        opts: ['They reduce transformer parameter count', 'They indicate modality boundaries inside the unified stream', 'They encode RGB colors', 'They replace positional embeddings'], correct: 1,
        optsKn: ['ಅವು transformer parameter count ಕಡಿಮೆಗೊಳಿಸುತ್ತವೆ', 'ಅವು unified stream ಒಳಗೆ modality boundaries ಸೂಚಿಸುತ್ತವೆ', 'ಅವು RGB colors encode ಮಾಡುತ್ತವೆ', 'ಅವು positional embeddings ಬದಲಾಯಿಸುತ್ತವೆ'] },
      { q: 'Why can the VQ tokenizer impose an image-quality ceiling?', qKn: 'VQ tokenizer ಒಂದೂ image-quality ceiling ಏಕೆ ವಿಧಿಸಬಹುದು?',
        opts: ['Transformers cannot process integer IDs', 'Vector quantization can discard visual information before generation even begins', "Image tokens don't use embeddings", 'Text tokens interfere with RGB values'], correct: 1,
        optsKn: ['Transformers integer IDs ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'Vector quantization generation ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೇ visual information ಬಿಡಬಹುದು', 'Image tokens embeddings ಬಳಸುವುದಿಲ್ಲ', 'Text tokens RGB values ಗೆ ಅಡ್ಡಿಪಡಿಸುತ್ತವೆ'] },
    ] } },
  ],
};
