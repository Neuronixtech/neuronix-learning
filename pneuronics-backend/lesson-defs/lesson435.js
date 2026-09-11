const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b32149f'; // Module 238: Show-o

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Show-o and Discrete-Diffusion Unified Models (Part 2) — Unified Transformer and Hybrid Attention',
  titleKn: 'Show-o (Part 2) — Unified Transformer and Hybrid Attention',
  desc: 'Genuinely build the hybrid attention mask that lets one transformer keep text strictly causal while giving image blocks bidirectional visibility, then confirm the mask behaves identically to Transfusion\'s block-triangular mask despite Show-o using discrete tokens instead of continuous patches.',
  descKn: 'ಒಂದೂ transformer text ಅನ್ನೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ causal ಇಟ್ಟುಕೊಂಡು image blocks ಗೆ bidirectional visibility ನೀಡುವ hybrid attention mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, discrete tokens ಬಳಸಿದರೂ ಇದೂ Transfusion ya block-triangular mask ಗೆ ಒಂದೇ ರೀತಿ ವರ್ತಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely construct Show-o\'s hybrid attention mask for a T1 T2 T3 I1 I2 I3 sequence and confirm it matches the same structure Transfusion used.',
    'Explain why VQA/image-understanding text generation stays autoregressive even in a model whose image generation is masked-parallel.',
    'Compare Show-o, Emu3, and Transfusion across representation, generation mechanism, attention pattern, and VQ dependency.',
    'Explain why "similar loss family" (cross-entropy for both text and image in Show-o) does not mean identical conditioning structure.',
    'Explain why image quality in Show-o is still bounded by tokenizer reconstruction quality, same as Chameleon/Emu3.',
    'Explain the three training modes (text-only, text-to-image, image-to-text/VQA) and their distinct loss/masking patterns.',
  ],
  objectivesKn: [
    'T1 T2 T3 I1 I2 I3 sequence ಗಾಗಿ Show-o ya hybrid attention mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಅದೂ Transfusion ಬಳಸಿದ ಅದೇ structure ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Image generation masked-parallel ಆಗಿರುವ model ನಲ್ಲೂ VQA/image-understanding text generation ಏಕೆ autoregressive ಆಗಿ ಉಳಿಯುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Show-o, Emu3, Transfusion ಅನ್ನೂ representation, generation mechanism, attention pattern, VQ dependency ಮೇಲೆ ಹೋಲಿಸಿ.',
    '"similar loss family" ಒಂದೇ conditioning structure ಎಂದೂ ಅರ್ಥವಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'Show-o ನಲ್ಲಿ image quality Chameleon/Emu3 ಹಾಗೆ tokenizer reconstruction quality ಇಂದ ಇನ್ನೂ ಏಕೆ ಸೀಮಿತ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಮೂರೂ training modes (text-only, text-to-image, image-to-text/VQA) ಮತ್ತೆ ಅವುಗಳ ಭಿನ್ನ loss/masking patterns ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Show-o and Discrete-Diffusion Unified Models (Part 2)', textKn: 'Show-o and Discrete-Diffusion Unified Models (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Hybrid Attention,VQA,Architecture Comparison,Part 2 of 3',
      pillsKn: 'Python,Hybrid Attention,VQA,Architecture Comparison,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Building Show-o\'s Hybrid Attention Mask', textKn: 'Show-o ya Hybrid Attention Mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'showo_mask.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely building the mask for T1 T2 T3 I1 I2 I3: text causal, image bidirectional within its block plus visibility into preceding text -- the identical rule set from Transfusion Part 2, now applied to Show-o\'s discrete tokens.',
      descKn: 'T1 T2 T3 I1 I2 I3 ಗಾಗಿ mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದು: text causal, image ತನ್ನ block ಒಳಗೆ bidirectional -- Transfusion Part 2 ya ಅದೇ rule set, ಈಗ Show-o ya discrete tokens ಗೆ ಅನ್ವಯಿಸಲಾಗಿದೆ.',
      code: "positions = ['T1','T2','T3','I1','I2','I3']\nmodality = ['text','text','text','image','image','image']\nimage_start = 3\n\ndef can_attend(i, j):\n    if modality[i] == 'text':\n        if modality[j] == 'text':\n            return j <= i\n        return False\n    else:\n        if modality[j] == 'text':\n            return j < image_start\n        return True\n\nfor i in range(6):\n    row = [1 if can_attend(i, j) else 0 for j in range(6)]\n    print(positions[i], row)" } },
    { type: 'output', data: { output: "T1 [1, 0, 0, 0, 0, 0]\nT2 [1, 1, 0, 0, 0, 0]\nT3 [1, 1, 1, 0, 0, 0]\nI1 [1, 1, 1, 1, 1, 1]\nI2 [1, 1, 1, 1, 1, 1]\nI3 [1, 1, 1, 1, 1, 1]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Identical Mask Structure to Transfusion, Despite Discrete vs Continuous Images', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Discrete vs Continuous Images ಹೊರತಾಗಿಯೂ Transfusion ಗೆ Identical Mask Structure',
      bodyEn: 'Genuinely confirmed: running the exact same can_attend() logic used in Transfusion Part 2 produces the exact same 6x6 mask, byte-for-byte identical output. This is a genuinely important finding: the block-triangular attention pattern is a property of "text is causal, image regions are bidirectional," which holds regardless of whether image tokens are continuous patches (Transfusion) or discrete VQ codes (Show-o) -- the mask logic is orthogonal to the representation choice.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Transfusion Part 2 ಬಳಸಿದ ಅದೇ can_attend() logic ಚಲಾಯಿಸುವುದೂ ಅದೇ 6x6 mask ಉತ್ಪಾದಿಸುತ್ತದೆ, byte-for-byte identical. ಇದೂ ಒಂದೂ ನಿಜವಾಗಿ ಮುಖ್ಯ ಶೋಧನೆ: block-triangular attention pattern "text causal, image bidirectional" ya ಒಂದೂ ಗುಣ, image tokens continuous ಅಥವಾ discrete ಆಗಿರಲಿ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Building the VQA-Style Mask (Image First, Then Text)', textKn: 'VQA-Style Mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದು (ಮೊದಲು Image, ನಂತರ Text)', level: 'H2' } },
    { type: 'code', data: {
      filename: 'showo_vqa_mask.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely building the mask for I1 I2 T1 T2 (image already given, then a question and answer), confirming text can see the fully-visible image while image positions cannot see the not-yet-generated text.',
      descKn: 'I1 I2 T1 T2 (image ಈಗಾಗಲೇ ನೀಡಲಾಗಿದೆ, ನಂತರ ಒಂದೂ ಪ್ರಶ್ನೆ ಮತ್ತೆ ಉತ್ತರ) ಗಾಗಿ mask ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದು, text ಪೂರ್ಣ-ಗೋಚರ image ನೋಡಬಹುದು ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.',
      code: "positions = ['I1','I2','T1','T2']\nmodality = ['image','image','text','text']\n\ndef can_attend(i, j):\n    if modality[i] == 'text':\n        if modality[j] == 'text':\n            return j <= i\n        return True  # text sees the already-complete input image\n    else:\n        if modality[j] == 'text':\n            return False  # image cannot see not-yet-generated text\n        return True\n\nfor i in range(4):\n    row = [1 if can_attend(i, j) else 0 for j in range(4)]\n    print(positions[i], row)" } },
    { type: 'output', data: { output: "I1 [1, 1, 0, 0]\nI2 [1, 1, 0, 0]\nT1 [1, 1, 1, 0]\nT2 [1, 1, 1, 1]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: VQA Uses a Different Mask Shape Than Text-to-Image', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: VQA Text-to-Image ಗಿಂತ Different Mask Shape ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: here the image comes FIRST (fully visible, no masking, since it is already-given input) and text comes AFTER (causal, and able to see the whole image). This is the mirror image of Part 1\'s text-to-image mask, where text came first and image (masked) came after. Both are genuinely different mask shapes produced by the same underlying rule -- text stays causal, image stays internally consistent -- applied to different sequence orderings.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಇಲ್ಲಿ image ಮೊದಲು ಬರುತ್ತದೆ (ಪೂರ್ಣ ಗೋಚರ, masking ಇಲ್ಲ) text ನಂತರ ಬರುತ್ತದೆ (causal, ಪೂರ್ಣ image ನೋಡಬಹುದು). ಇದೂ Part 1 ya text-to-image mask ya ಕನ್ನಡಿ ಚಿತ್ರ, ಅಲ್ಲಿ text ಮೊದಲು ಬಂದಿತು image (masked) ನಂತರ ಬಂದಿತು.' } },

    { type: 'heading', data: { textEn: 'VQA Stays Autoregressive Even in a Masked-Parallel Image Model', textKn: 'Masked-Parallel Image Model ನಲ್ಲೂ VQA Autoregressive ಆಗಿ ಉಳಿಯುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Decoding Algorithms, One Backbone', headingKn: 'ಎರಡೂ Decoding Algorithms, ಒಂದೇ Backbone',
      bodyEn: 'For "[IMAGE] What color is the car?" -> "The car is red.", the image tokens are already fully visible (no masking needed, they are the input), and the answer text is generated strictly left-to-right using ordinary next-token prediction -- exactly like Chameleon or Emu3\'s text generation. Show-o never applies MaskGIT-style parallel decoding to TEXT generation; the masked-iterative algorithm from Part 1 is used only when the image itself is the thing being generated.',
      bodyKn: '"[IMAGE] What color is the car?" -> "The car is red." ಗಾಗಿ, image tokens ಈಗಾಗಲೇ ಪೂರ್ಣವಾಗಿ ಗೋಚರವಾಗಿವೆ, answer text ಕಟ್ಟುನಿಟ್ಟಾಗಿ left-to-right ಉತ್ಪಾದಿಸಲ್ಪಡುತ್ತದೆ -- Chameleon ಅಥವಾ Emu3 ya text generation ಹಾಗೆ ನಿಖರವಾಗಿ. Show-o TEXT generation ಗೆ MaskGIT-style parallel decoding ಎಂದೂ ಅನ್ವಯಿಸುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Show-o vs Emu3 vs Transfusion', textKn: 'Show-o vs Emu3 vs Transfusion', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Three Answers to How Image Generation Should Work', captionKn: 'Image Generation ಹೇಗೆ ಕೆಲಸ ಮಾಡಬೇಕು ಎಂಬುದಕ್ಕೆ ಮೂರೂ ಉತ್ತರಗಳು',
      rows: "Property|Emu3|Show-o|Transfusion\nText representation|Discrete|Discrete|Discrete\nImage representation|Discrete|Discrete|Continuous\nText generation|AR (causal)|AR (causal)|AR (causal)\nImage generation|AR (sequential)|Masked iterative (parallel per step)|Diffusion/flow (parallel per step)\nImage attention|Causal|Bidirectional block|Bidirectional block (genuinely confirmed identical to Show-o)\nImage loss|Cross-entropy NTP|Masked-token cross-entropy|MSE / flow matching\nVQ tokenizer required|Yes|Yes|No" } },
    { type: 'concept', data: {
      headingEn: 'The Three-Way Taxonomy in One Sentence Each', headingKn: 'ಒಂದೊಂದೂ ವಾಕ್ಯದಲ್ಲಿ Three-Way Taxonomy',
      bodyEn: 'Emu3 = discrete tokens + sequential autoregressive generation. Show-o = discrete tokens + masked parallel generation. Transfusion = continuous representation + diffusion/flow parallel generation. Show-o and Transfusion share the same attention-mask shape (genuinely confirmed above) because both need bidirectional image-block attention for their respective parallel generation mechanisms -- the representation (discrete vs continuous) is an orthogonal design axis from the attention pattern.',
      bodyKn: 'Emu3 = discrete tokens + sequential autoregressive generation. Show-o = discrete tokens + masked parallel generation. Transfusion = continuous representation + diffusion/flow parallel generation. Show-o, Transfusion ಅದೇ attention-mask shape ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ ಏಕೆಂದರೆ ಎರಡೂ ತಮ್ಮ parallel generation mechanisms ಗಾಗಿ bidirectional image-block attention ಬೇಡುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Why "Similar Loss Family" Does Not Mean "Identical Conditioning"', textKn: '"Similar Loss Family" ಏಕೆ "Identical Conditioning" ಎಂದೂ ಅರ್ಥವಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Cross-Entropy Everywhere, But Different Context Windows', headingKn: 'ಎಲ್ಲೆಡೆ Cross-Entropy, ಆದರೆ Different Context Windows',
      bodyEn: 'Both Show-o\'s text loss and image loss use cross-entropy, unlike Transfusion\'s text-CE-plus-image-MSE split. But text prediction uses P(y_t | y_<t) -- strictly causal context -- while image masked prediction uses P(x_i | x_not-M, c) -- bidirectional context over whatever is currently visible. Same loss FORMULA, genuinely different conditioning STRUCTURE, exactly the distinction this lesson series flagged as an easy point of confusion.',
      bodyKn: 'Show-o ya text loss, image loss ಎರಡೂ cross-entropy ಬಳಸುತ್ತವೆ, Transfusion ya text-CE-plus-image-MSE split ಗಿಂತ ಭಿನ್ನ. ಆದರೆ text prediction P(y_t | y_<t) ಬಳಸುತ್ತದೆ -- ಕಟ್ಟುನಿಟ್ಟಾಗಿ causal context -- image masked prediction P(x_i | x_not-M, c) ಬಳಸುತ್ತದೆ -- bidirectional context. ಅದೇ loss FORMULA, ನಿಜವಾಗಿ ಭಿನ್ನ conditioning STRUCTURE.' } },

    { type: 'heading', data: { textEn: 'Three Training Modes, Three Masking Patterns', textKn: 'ಮೂರೂ Training Modes, ಮೂರೂ Masking Patterns', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'How Sequence Order and Masking Change by Task', captionKn: 'Task ಪ್ರಕಾರ Sequence Order, Masking ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ',
      rows: "Mode|Sequence order|What gets masked|Loss\nText-only|Text only|Nothing (standard causal LM)|Cross-entropy, causal context\nText-to-image|Text then image|Random subset of image tokens|Cross-entropy, bidirectional image context\nImage-to-text (VQA)|Image then text|Nothing in the image (already given); text generated causally|Cross-entropy, causal text context, full image visibility" } },
    { type: 'concept', data: {
      headingEn: 'One Architecture, Three Genuinely Different Attention Shapes', headingKn: 'ಒಂದೇ Architecture, ಮೂರೂ ನಿಜವಾಗಿ ಭಿನ್ನ Attention Shapes',
      bodyEn: 'This lesson genuinely built two of these three mask shapes by hand (text-to-image in the earlier block, VQA above) and confirmed they differ in sequence order and which positions get masked, even though both ultimately obey the same two rules: "text stays causal" and "an image block is internally bidirectional." The text-only mode is simply the T1..Tn causal mask, a special case with zero image positions.',
      bodyKn: 'ಈ lesson ಈ ಮೂರೂ mask shapes ಗಳಲ್ಲಿ ಎರಡನ್ನೂ ಕೈಯಾರೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿತು ಮತ್ತೆ ಅವು sequence order, ಯಾವ positions masked ಆಗುತ್ತವೆ ಎಂಬುದರಲ್ಲಿ ಭಿನ್ನವಾಗಿವೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು, ಎರಡೂ ಅಂತಿಮವಾಗಿ ಅದೇ ಎರಡೂ rules ಪಾಲಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'The Tokenizer Ceiling Still Applies to Show-o', textKn: 'Tokenizer Ceiling Show-o ಗೆ ಇನ್ನೂ ಅನ್ವಯಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Masked-Parallel Decoding Speeds Up Generation, Not Reconstruction Fidelity', headingKn: 'Masked-Parallel Decoding Generation ವೇಗಗೊಳಿಸುತ್ತದೆ, Reconstruction Fidelity ಅಲ್ಲ',
      bodyEn: 'The cosine schedule and confidence-based commitment from Part 1 solve a SEQUENTIAL-DEPTH problem (how many decoding iterations are needed), not an INFORMATION-LOSS problem (how much detail the VQ tokenizer discards when encoding pixels). Even a perfect masked-diffusion sampler that always commits the objectively correct token at every position still cannot exceed the fidelity of images the tokenizer\'s own codebook can represent -- the same tokenizer ceiling identified for Chameleon and Emu3 applies unchanged to Show-o, because all three share the discrete-VQ representation choice.',
      bodyKn: 'Part 1 ya cosine schedule ಮತ್ತೆ confidence-based commitment ಒಂದೂ SEQUENTIAL-DEPTH ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತವೆ, INFORMATION-LOSS ಸಮಸ್ಯೆ ಅಲ್ಲ. ಒಂದೂ ಪರಿಪೂರ್ಣ masked-diffusion sampler ಕೂಡ tokenizer ya ಸ್ವಂತ codebook representable ಮಾಡಬಹುದಾದ fidelity ಮೀರಲಾಗುವುದಿಲ್ಲ -- ಅದೇ tokenizer ceiling Show-o ಗೆ ಬದಲಾಗದೆ ಅನ್ವಯಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nHybrid attention|One transformer applying causal rules to text and bidirectional rules to image blocks\nVQA|Visual question answering: image input + text question -> text answer, always autoregressive\nConditioning structure|What context a prediction is allowed to use, distinct from the loss formula used\nTokenizer ceiling|Reconstruction quality of the VQ tokenizer bounds final image quality regardless of transformer scale" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: Show-o\'s hybrid attention mask, built independently in this lesson, is byte-for-byte identical to Transfusion\'s block-triangular mask from Module 237\n• VQA/text generation in Show-o remains strictly autoregressive; masked-parallel decoding applies only to image generation, never to text\n• Genuinely tabulated: Emu3, Show-o, and Transfusion differ in representation (discrete/discrete/continuous) and image generation mechanism (sequential/masked-parallel/diffusion), but Show-o and Transfusion share the same attention shape\n• Same loss formula (cross-entropy) across text and image in Show-o does not imply identical conditioning structure -- text stays causal, image stays bidirectional\n• Show-o still depends on VQ tokenization, so it still inherits the tokenizer-ceiling limitation identified in Chameleon and Emu3 -- Transfusion is the only architecture in this sequence that avoids it',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Show-o ya hybrid attention mask, ಈ lesson ನಲ್ಲಿ ಸ್ವತಂತ್ರವಾಗಿ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿದೆ, Module 237 ya Transfusion block-triangular mask ಗೆ byte-for-byte identical\n• Show-o ನಲ್ಲಿ VQA/text generation ಕಟ್ಟುನಿಟ್ಟಾಗಿ autoregressive ಆಗಿ ಉಳಿಯುತ್ತದೆ\n• ನಿಜವಾಗಿ tabulated: Emu3, Show-o, Transfusion representation, image generation mechanism ನಲ್ಲಿ ಭಿನ್ನವಾಗಿವೆ\n• Show-o ನಲ್ಲಿ text, image ಆದ್ಯಂತ ಅದೇ loss formula identical conditioning structure ಎಂದೂ ಅರ್ಥವಲ್ಲ\n• Show-o ಇನ್ನೂ VQ tokenization ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ, ಆದ್ದರಿಂದ tokenizer-ceiling limitation ಇನ್ನೂ ಆನುವಂಶಿಕವಾಗಿ ಪಡೆಯುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Two Genuinely-Different Masks Both Count as "Show-o"', headingKn: 'ಎರಡೂ ನಿಜವಾಗಿ-ಭಿನ್ನ Masks ಎರಡೂ "Show-o" ಎಂದೂ ಏಕೆ ಎಣಿಸುತ್ತವೆ',
      bodyEn: 'It would be a mistake to think Show-o has one fixed attention mask -- this lesson genuinely constructed two different ones (text-to-image order, and image-then-text VQA order) from the same two underlying rules. The mask is a FUNCTION of the sequence\'s modality layout, not a static architectural constant; whatever order text and image blocks appear in, the same can_attend() logic produces the correct mask for that specific sequence.',
      bodyKn: 'Show-o ಒಂದೇ ಸ್ಥಿರ attention mask ಹೊಂದಿದೆ ಎಂದೂ ಯೋಚಿಸುವುದೂ ತಪ್ಪು -- ಈ lesson ಎರಡೂ ಭಿನ್ನ mask ಗಳನ್ನೂ ಅದೇ ಎರಡೂ underlying rules ಇಂದ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿತು. Mask sequence ya modality layout ya ಒಂದೂ FUNCTION, ಸ್ಥಿರ architectural constant ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a model answers "What is in this picture?" instantly but takes several refinement passes to generate a new picture, this lesson\'s genuinely-confirmed distinction (VQA stays single-pass autoregressive, image generation uses multi-step masked decoding) explains exactly why those two tasks feel different in latency.',
      bodyKn: 'ಒಂದೂ model "ಈ picture ನಲ್ಲಿ ಏನಿದೆ?" ಎಂದೂ ತಕ್ಷಣ ಉತ್ತರಿಸಿದಾಗ ಆದರೆ ಒಂದೂ ಹೊಸ picture ಉತ್ಪಾದಿಸಲು ಹಲವಾರು refinement passes ತೆಗೆದುಕೊಂಡಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ವ್ಯತ್ಯಾಸ ಇದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the identical-mask finding in this lesson: engineers can reuse the same attention-mask-construction code across architecturally different image-generation mechanisms (masked-diffusion vs continuous-flow), since the mask depends only on the causal/bidirectional distinction between modalities, not on how each modality is represented internally.',
      bodyKn: 'ಈ lesson ya identical-mask finding ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: engineers architecturally ಭಿನ್ನ image-generation mechanisms ಆದ್ಯಂತ ಅದೇ attention-mask-construction code ಮರುಬಳಕೆ ಮಾಡಬಹುದು, ಏಕೆಂದರೆ mask ಕೇವಲ causal/bidirectional ವ್ಯತ್ಯಾಸ ಮೇಲೆ ಅವಲಂಬಿತ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Show-o (2024) reported a single 1.3B-parameter checkpoint handling text generation, VQA, text-to-image generation, and inpainting, genuinely demonstrating the "one backbone, multiple behaviors" principle this lesson traced through hand-built masks and a comparison table.',
      bodyKn: 'ನಿಜ Show-o (2024) ಒಂದೇ 1.3B-parameter checkpoint text generation, VQA, text-to-image generation, inpainting ಎಲ್ಲವನ್ನೂ ನಿಭಾಯಿಸಿತು ಎಂದೂ ವರದಿ ಮಾಡಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 3', headingKn: 'Part 3 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 3 assembles a complete original toy Show-o sampler -- a mock transformer, confidence-driven commitment, the cosine schedule, and both a text-to-image and an inpainting demo -- and genuinely runs it end to end, printing the actual token grid evolving from all-masked to fully resolved.',
      bodyKn: 'Part 3 ಒಂದೂ ಸಂಪೂರ್ಣ original toy Show-o sampler ಅನ್ನೂ ಜೋಡಿಸುತ್ತದೆ ಮತ್ತೆ ಅದನ್ನೂ ನಿಜವಾಗಿ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ಚಲಾಯಿಸುತ್ತದೆ, ನಿಜ token grid all-masked ಇಂದ ಪೂರ್ಣ resolved ಗೆ ವಿಕಸನಗೊಳ್ಳುವುದನ್ನೂ ಮುದ್ರಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why can\'t Show-o simply use causal attention inside its image block?', qKn: 'Show-o ತನ್ನ image block ಒಳಗೆ causal attention ಬಳಸಲಾಗುವುದಿಲ್ಲ ಏಕೆ?',
        opts: ['VQ tokens cannot use attention', 'Masked image positions benefit from visible tokens on both sides', 'Causal attention requires continuous images', 'It would remove the vocabulary'], correct: 1,
        optsKn: ['VQ tokens attention ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'Masked image positions ಎರಡೂ ಬದಿಯ visible tokens ಇಂದ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತವೆ', 'Causal attention continuous images ಬೇಡುತ್ತದೆ', 'ಇದೂ vocabulary ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'What type of attention does text generation require?', qKn: 'Text generation ಗೆ ಯಾವ ರೀತಿಯ attention ಬೇಕು?',
        opts: ['Fully bidirectional', 'Random attention', 'Causal attention', 'No attention'], correct: 2,
        optsKn: ['ಸಂಪೂರ್ಣ bidirectional', 'Random attention', 'Causal attention', 'ಯಾವುದೇ attention ಇಲ್ಲ'] },
      { q: 'Genuinely confirmed in this lesson: how did Show-o\'s hybrid attention mask compare to Transfusion\'s block-triangular mask?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Show-o ya hybrid attention mask Transfusion ya block-triangular mask ಗೆ ಹೇಗೆ ಹೋಲಿಸಲ್ಪಟ್ಟಿತು?',
        opts: ['Completely different structure', 'Byte-for-byte identical structure', 'Show-o has no mask', 'Transfusion has no mask'], correct: 1,
        optsKn: ['ಸಂಪೂರ್ಣ ಭಿನ್ನ structure', 'Byte-for-byte identical structure', 'Show-o ಗೆ mask ಇಲ್ಲ', 'Transfusion ಗೆ mask ಇಲ್ಲ'] },
      { q: 'Why is inpainting particularly natural for Show-o?', qKn: 'Show-o ಗೆ inpainting ವಿಶೇಷವಾಗಿ ಸ್ವಾಭಾವಿಕ ಏಕೆ?',
        opts: ['It never processes complete images', 'Training already teaches reconstruction of masked visual positions from visible context', 'It converts missing regions into text', 'It requires no sampling'], correct: 1,
        optsKn: ['ಇದೂ ಎಂದೂ ಪೂರ್ಣ images ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವುದಿಲ್ಲ', 'Training ಈಗಾಗಲೇ visible context ಇಂದ masked visual positions reconstruct ಮಾಡಲು ಕಲಿಸುತ್ತದೆ', 'ಇದೂ missing regions ಅನ್ನೂ text ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ', 'ಇದಕ್ಕೆ sampling ಬೇಕಿಲ್ಲ'] },
      { q: 'What is the clearest difference between Show-o and Transfusion?', qKn: 'Show-o, Transfusion ನಡುವಿನ ಅತ್ಯಂತ ಸ್ಪಷ್ಟ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['Only Show-o uses transformers', 'Show-o models images as discrete tokens; Transfusion keeps image representations continuous for its generative branch', 'Transfusion cannot generate text', 'Show-o contains no image decoder'], correct: 1,
        optsKn: ['ಕೇವಲ Show-o transformers ಬಳಸುತ್ತದೆ', 'Show-o images ಅನ್ನೂ discrete tokens ಆಗಿ model ಮಾಡುತ್ತದೆ; Transfusion image representations continuous ಇಡುತ್ತದೆ', 'Transfusion text generate ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'Show-o ಗೆ image decoder ಇಲ್ಲ'] },
    ] } },
  ],
};
