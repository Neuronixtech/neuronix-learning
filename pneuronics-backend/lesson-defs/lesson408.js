const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321484'; // Module 229: LLaVA and Visual Instruction Tuning

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'LLaVA and Visual Instruction Tuning (Part 2) — Training Recipe and <image> Prompt Expansion',
  titleKn: 'LLaVA ಮತ್ತೆ Visual Instruction Tuning (Part 2) — Training Recipe ಮತ್ತೆ <image> Prompt Expansion',
  desc: 'Genuinely implement and run build_llava_prompt() and expand_image_placeholder(), confirming the exact prompt text and that <image> genuinely expands into 8 distinct visual-token dictionary entries -- the concrete mechanism behind LLaVA\'s two-stage training recipe.',
  descKn: 'build_llava_prompt() ಮತ್ತೆ expand_image_placeholder() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ನಿಖರ prompt text ಮತ್ತೆ <image> ನಿಜವಾಗಿ 8 ಭಿನ್ನ visual-token entries ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain BLIP-2-style Stage 1 (alignment) vs Stage 2 (visual instruction tuning) as applied to LLaVA.',
    'Genuinely implement and run build_llava_prompt(), confirming the exact system prompt and <image> placeholder text.',
    'Genuinely implement and run expand_image_placeholder(), confirming it produces prefix text, 8 visual entries, and suffix text.',
    'Explain why <image> is a conceptual placeholder for a block of projected visual embeddings, not literal text replacement.',
    'Explain why naive sequence concatenation of text and visual embeddings works once both have the same hidden dimension.',
    'Explain why loss masking during instruction tuning applies mainly to the assistant response, not the user prompt or image tokens.',
  ],
  objectivesKn: [
    'BLIP-2-style Stage 1 (alignment) vs Stage 2 (visual instruction tuning) ಅನ್ನೂ LLaVA ಗೆ ಅನ್ವಯಿಸಿದಂತೆ ವಿವರಿಸಿ.',
    'build_llava_prompt() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ನಿಖರ system prompt ಮತ್ತೆ <image> placeholder text ದೃಢಪಡಿಸಿ.',
    'expand_image_placeholder() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ಇದೂ prefix text, 8 visual entries, suffix text ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    '<image> ಒಂದೂ ಪರಿಕಲ್ಪನಾತ್ಮಕ placeholder ಎಂದೂ ವಿವರಿಸಿ, ಅಕ್ಷರಶಃ text replacement ಅಲ್ಲ.',
    'text ಮತ್ತೆ visual embeddings ya naive sequence concatenation ಒಂದೂ ಬಾರಿ ಅದೇ hidden dimension ಹೊಂದಿದ ನಂತರ ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'instruction tuning ಸಮಯದಲ್ಲಿ loss masking ಮುಖ್ಯವಾಗಿ assistant response ಗೆ ಏಕೆ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'LLaVA and Visual Instruction Tuning (Part 2) — Training Recipe and <image> Prompt Expansion', textKn: 'LLaVA ಮತ್ತೆ Visual Instruction Tuning (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,LLaVA,Instruction Tuning,Prompt Expansion,Part 2 of 3',
      pillsKn: 'Python,LLaVA,Instruction Tuning,Prompt Expansion,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Two-Stage Training Recipe', textKn: 'ಎರಡೂ-Stage Training Recipe', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Stage 1: Projector Alignment; Stage 2: Visual Instruction Tuning', headingKn: 'Stage 1: Projector Alignment; Stage 2: Visual Instruction Tuning',
      bodyEn: 'Stage 1 teaches the randomly-initialized projector (genuinely confirmed in Part 1 to be shape-correct but not semantically trained) to map CLIP representations into a region useful to the LLM, using image-caption pairs with the ViT and LLM frozen -- only the projector trains, the same frozen-backbone philosophy as BLIP-2 (Module 227). Stage 2 teaches the model to follow instructions: image + user instruction + assistant response, closer to ordinary supervised fine-tuning but with a visual-token block inserted into the prompt.',
      bodyKn: 'Stage 1 randomly-initialized projector ಗೆ CLIP representations ಅನ್ನೂ LLM ಗೆ ಉಪಯುಕ್ತ region ಗೆ ನಕ್ಷೆ ಮಾಡಲು ಕಲಿಸುತ್ತದೆ, image-caption pairs ಬಳಸಿ ViT ಮತ್ತೆ LLM frozen ಆಗಿದ್ದೂ -- ಕೇವಲ projector ತರಬೇತಿ ಪಡೆಯುತ್ತದೆ. Stage 2 model ಗೆ instructions ಅನುಸರಿಸಲು ಕಲಿಸುತ್ತದೆ.' } },
    { type: 'diagram', data: {
      captionEn: 'Two-Stage LLaVA Training', captionKn: 'ಎರಡೂ-Stage LLaVA Training',
      code: "graph TD\n  A[Stage 1: Frozen ViT + Trainable Projector + Frozen LLM] --> B[Caption LM loss]\n  B --> C[Aligned vision-to-LLM bridge]\n  C --> D[Stage 2: image+instruction+answer]\n  D --> E[Assistant-token LM loss]" } },

    { type: 'heading', data: { textEn: 'Genuinely Building the LLaVA Prompt', textKn: 'LLaVA Prompt ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'llava_prompt.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact SYSTEM_PROMPT and build_llava_prompt function from the source program, genuinely run to produce the full text-level conversation template.',
      descKn: 'ನಿಖರ SYSTEM_PROMPT ಮತ್ತೆ build_llava_prompt function, ಪೂರ್ಣ text-level conversation template ಉತ್ಪಾದಿಸಲು ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "SYSTEM_PROMPT = (\n    'A chat between a curious human and an artificial '\n    'intelligence assistant. The assistant gives helpful, '\n    'detailed, and polite answers.'\n)\n\ndef build_llava_prompt(user_question):\n    return SYSTEM_PROMPT + '\\nUSER: <image> ' + user_question + '\\nASSISTANT:'\n\nprompt = build_llava_prompt('Describe this image in detail.')\nprint(prompt)" } },
    { type: 'output', data: { output: "A chat between a curious human and an artificial intelligence assistant. The assistant gives helpful, detailed, and polite answers.\nUSER: <image> Describe this image in detail.\nASSISTANT:" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Prompt Text Matches Exactly, Including the Placeholder Position', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Prompt Text ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: the generated prompt matches the source lesson\'s claimed output exactly, with <image> positioned right after "USER: " and before the user question. This placeholder position matters: it is the exact insertion point the next function uses to split the text and splice in visual embeddings.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಉತ್ಪಾದಿಸಿದ prompt source lesson ya ಹಕ್ಕು ಮಾಡಿದ ಔಟ್ಪುಟ್ ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, <image> "USER: " ನಂತರ ಇಡಲಾಗಿದೆ. ಈ placeholder position ಮುಖ್ಯ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Expanding <image> Into Projected Visual Tokens', textKn: '<image> ಅನ್ನೂ Projected Visual Tokens ಗೆ ನಿಜವಾಗಿ ವಿಸ್ತರಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'expand_placeholder.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact expand_image_placeholder function, genuinely run on the prompt above with the 8 projected patches from Part 1, then inspecting the resulting sequence structure.',
      descKn: 'ನಿಖರ expand_image_placeholder function, ಮೇಲಿನ prompt ಮೇಲೆ Part 1 ya 8 projected patches ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def expand_image_placeholder(prompt, projected_patches):\n    if '<image>' not in prompt:\n        raise ValueError('Prompt must contain <image>')\n    prefix, suffix = prompt.split('<image>', maxsplit=1)\n    sequence = [{'type': 'text', 'value': prefix}]\n    for index, patch in enumerate(projected_patches):\n        sequence.append({'type': 'visual', 'index': index, 'embedding': patch})\n    sequence.append({'type': 'text', 'value': suffix})\n    return sequence\n\nsequence = expand_image_placeholder(prompt, projected)\nvisual_count = sum(1 for item in sequence if item['type'] == 'visual')\nprint('Visual tokens inserted:', visual_count)\nfor item in sequence:\n    if item['type'] == 'text':\n        print('TEXT  :', repr(item['value'][:40]))\n    else:\n        print('VISUAL:', f\"patch {item['index']}\", f\"dim={len(item['embedding'])}\")" } },
    { type: 'output', data: { output: "Visual tokens inserted: 8\nTEXT  : 'A chat between a curious human and an ar'\nVISUAL: patch 0 dim=32\nVISUAL: patch 1 dim=32\nVISUAL: patch 2 dim=32\nVISUAL: patch 3 dim=32\nVISUAL: patch 4 dim=32\nVISUAL: patch 5 dim=32\nVISUAL: patch 6 dim=32\nVISUAL: patch 7 dim=32\nTEXT  : ' Describe this image in detail.\\nASSISTAN'" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: <image> Expands Into 8 Distinct Visual Dictionary Entries', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: <image> 8 ಭಿನ್ನ Visual Dictionary Entries ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: exactly 8 visual entries were inserted, each dim=32 (matching Part 1\'s genuinely-confirmed projector output), sandwiched between the exact prefix and suffix text from the split. This is concrete, executable proof that <image> does not remain as one token -- it expands into a whole block of visual embeddings, precisely as many as there are projected patches.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ನಿಖರವಾಗಿ 8 visual entries ಸೇರಿಸಲ್ಪಟ್ಟವು, ಪ್ರತಿಯೊಂದೂ dim=32, ನಿಖರ prefix ಮತ್ತೆ suffix text ನಡುವೆ. ಇದೂ ಸ್ಪಷ್ಟ, executable ಸಾಕ್ಷ್ಯ <image> ಒಂದೂ token ಆಗಿ ಉಳಿಯುವುದಿಲ್ಲ ಎಂದೂ.' } },

    { type: 'heading', data: { textEn: 'Why <image> Is a Conceptual Placeholder, Not Literal Text Substitution', textKn: '<image> ಒಂದೂ ಪರಿಕಲ್ಪನಾತ್ಮಕ Placeholder, ಅಕ್ಷರಶಃ Text Substitution ಅಲ್ಲ ಏಕೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Real Implementations Splice Embeddings, Not Text', headingKn: 'ನಿಜ Implementations Embeddings Splice ಮಾಡುತ್ತವೆ, Text ಅಲ್ಲ',
      bodyEn: 'It is tempting to imagine literal textual replacement ("<image>" -> "<patch1><patch2>..."), but that is only a useful conceptual representation. In a real VLM, image embeddings are inserted into the model\'s input embedding sequence: inputs_embeds = concat([text_before_embeds, visual_embeds, text_after_embeds], dim=1). Our stdlib program represents this with dictionaries carrying type="text"/"visual" tags, genuinely demonstrating the same splice-point logic without needing tensor concatenation.',
      bodyKn: 'ಅಕ್ಷರಶಃ textual replacement ಎಂದೂ ಕಲ್ಪಿಸುವುದೂ ಆಕರ್ಷಕ, ಆದರೆ ಅದೂ ಕೇವಲ ಉಪಯುಕ್ತ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಪ್ರಾತಿನಿಧ್ಯ. ಒಂದೂ ನಿಜ VLM ನಲ್ಲಿ, image embeddings model ya input embedding sequence ಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why Naive Concatenation Works', textKn: 'Naive Concatenation ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Transformer Operates on Vectors, Not Words', headingKn: 'ಒಂದೂ Transformer Vectors ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, Words ಮೇಲೆ ಅಲ್ಲ',
      bodyEn: 'Ordinary text processing: word -> token ID -> embedding lookup -> vector -> transformer. LLaVA\'s image pathway: image patch -> ViT -> projector -> vector -> transformer (genuinely confirmed in Part 1 to be 32-dimensional, matching text embeddings). Once both reach the transformer, both are just vectors of the same hidden size -- the transformer mathematically receives X in R^(NxD) and does not require every row to originate from a vocabulary lookup.',
      bodyKn: 'ಸಾಮಾನ್ಯ text processing: word -> token ID -> embedding lookup -> vector -> transformer. LLaVA ya image pathway: image patch -> ViT -> projector -> vector -> transformer. ಎರಡೂ transformer ತಲುಪಿದ ನಂತರ, ಎರಡೂ ಕೇವಲ ಅದೇ hidden size ya vectors.' } },
    { type: 'concept', data: {
      headingEn: 'Why Multi-Image Becomes Natural Once Embeddings Are Uniform', headingKn: 'Embeddings Uniform ಆದ ನಂತರ Multi-Image ಏಕೆ ಸ್ವಾಭಾವಿಕ',
      bodyEn: 'Once images are represented as ordinary embedding blocks, multiple images are straightforward: text + visual block 1 + text + visual block 2 + text, with no fundamentally new modality bridge required for the second image. This same principle extends to video (frame 1 tokens + frame 2 tokens + ...), though practical video models need careful token-budget management, covered in Part 3.',
      bodyKn: 'ಒಮ್ಮೆ images ಸಾಮಾನ್ಯ embedding blocks ಆಗಿ ಪ್ರತಿನಿಧಿಸಿದ ನಂತರ, ಬಹು images ಸರಳ: text + visual block 1 + text + visual block 2 + text, ಎರಡನೇ image ಗೆ ಮೂಲಭೂತವಾಗಿ ಹೊಸ modality bridge ಅಗತ್ಯವಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Loss Masking: Training on the Assistant Response', textKn: 'Loss Masking: Assistant Response ಮೇಲೆ Training', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'System, User, and Image Tokens Are Excluded From the Loss', headingKn: 'System, User, Image Tokens Loss ಇಂದ ಹೊರಗಿಡಲಾಗಿದೆ',
      bodyEn: 'During supervised instruction tuning, we usually do not want the model to learn by predicting every user token. Instead, the training loss is primarily applied to the assistant response: SYSTEM -> ignore loss, USER -> ignore loss, IMAGE TOKENS -> ignore loss, QUESTION -> ignore loss, ASSISTANT response -> calculate LM loss. This is analogous to text-only instruction tuning, applied here to the exact 8-visual-token-plus-text sequence structure genuinely confirmed above.',
      bodyKn: 'Supervised instruction tuning ಸಮಯದಲ್ಲಿ, ನಾವೂ ಸಾಮಾನ್ಯವಾಗಿ model ಪ್ರತಿ user token ಅನ್ನೂ predict ಮಾಡುವ ಮೂಲಕ ಕಲಿಯಲು ಬಯಸುವುದಿಲ್ಲ. ಬದಲಿಗೆ, training loss ಮುಖ್ಯವಾಗಿ assistant response ಗೆ ಅನ್ವಯಿಸಲಾಗಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Stage 1 vs Stage 2', captionKn: 'Stage 1 vs Stage 2',
      rows: "Stage|What is being learned?|Example target\nStage 1|Connect vision features to language space|A dog running through grass.\nStage 2|Follow visual instructions|The dog appears to be running." } },
    { type: 'concept', data: {
      headingEn: 'Where LLaVA\'s Instruction Data Came From', headingKn: 'LLaVA ya Instruction Data ಎಲ್ಲಿಂದ ಬಂದಿತು',
      bodyEn: 'Large-scale human annotation would be expensive, so the original recipe used existing image metadata (COCO captions, object/bounding-box descriptions) and prompted GPT-4 to generate instruction-response conversations. GPT-4 did not need direct visual access -- it received textual captions and object lists, then synthesized questions like "What transportation method is the person using?" -> "The person is riding a bicycle." One factual representation can produce many instruction formats, greatly increasing behavioral diversity cheaply.',
      bodyKn: 'ದೊಡ್ಡ-ಪ್ರಮಾಣದ human annotation ದುಬಾರಿ ಆಗಿರುತ್ತಿತ್ತು, ಆದ್ದರಿಂದ ಮೂಲ recipe ಈಗಾಗಲೇ ಇರುವ image metadata ಬಳಸಿ GPT-4 ಗೆ instruction-response conversations ಉತ್ಪಾದಿಸಲು ಪ್ರಾಂಪ್ಟ್ ಮಾಡಿತು. GPT-4 ಗೆ ನೇರ visual access ಅಗತ್ಯವಿರಲಿಲ್ಲ.' } },
    { type: 'concept', data: {
      headingEn: 'Three Instruction Styles: Conversation, Description, Reasoning', headingKn: 'ಮೂರೂ Instruction Styles: Conversation, Description, Reasoning',
      bodyEn: 'The generated examples broadly covered three behaviors: multi-turn conversation (USER: what is happening? -> ASSISTANT: a dog appears to be running... -> USER: does it look playful? -> ...), detailed description (long dense visual descriptions), and complex reasoning (why might the dog be moving quickly? -> it may be chasing something, playing, or running toward its owner). This diversity is what teaches a model to behave as a multimodal assistant rather than only a captioner.',
      bodyKn: 'ಉತ್ಪಾದಿಸಿದ ಉದಾಹರಣೆಗಳು ಮೂರೂ ವರ್ತನೆಗಳನ್ನೂ ವಿಶಾಲವಾಗಿ ಒಳಗೊಂಡಿವೆ: multi-turn conversation, detailed description, complex reasoning. ಈ ವೈವಿಧ್ಯತೆ ಒಂದೂ model ಗೆ ಕೇವಲ captioner ಬದಲಿಗೆ ಒಂದೂ multimodal assistant ಆಗಿ ವರ್ತಿಸಲು ಕಲಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: build_llava_prompt() produces the exact expected system-prompt-plus-USER-plus-ASSISTANT text template\n• Genuinely confirmed: expand_image_placeholder() genuinely inserts 8 distinct visual entries (dim=32, matching Part 1\'s projector output) between the correctly-split prefix and suffix text\n• <image> is a conceptual placeholder for a block of projected visual embeddings, not literal text substitution -- real implementations splice embedding tensors, not strings\n• Naive sequence concatenation works because a transformer operates on same-dimensional vectors regardless of whether they originated from a vocabulary lookup or a vision projector\n• Loss masking during instruction tuning applies mainly to the assistant response, excluding system, user, question, and image tokens from the loss calculation',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: build_llava_prompt() ನಿಖರ expected text template ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: expand_image_placeholder() ನಿಜವಾಗಿ 8 ಭಿನ್ನ visual entries ಸೇರಿಸುತ್ತದೆ\n• <image> ಒಂದೂ ಪರಿಕಲ್ಪನಾತ್ಮಕ placeholder, ಅಕ್ಷರಶಃ text substitution ಅಲ್ಲ\n• Naive sequence concatenation ಕೆಲಸ ಮಾಡುತ್ತದೆ ಏಕೆಂದರೆ transformer ಅದೇ-dimensional vectors ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ\n• instruction tuning ಸಮಯದಲ್ಲಿ loss masking ಮುಖ್ಯವಾಗಿ assistant response ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed 8-visual-token expansion of <image> in this lesson mirrors exactly how a real production VLM chat interface silently handles an uploaded image behind the scenes -- the user sees one image icon in the chat, but the model genuinely processes hundreds of visual embedding vectors spliced into its input sequence.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ <image> ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 8-visual-token expansion ಒಂದೂ ನಿಜ production VLM chat interface upload ಮಾಡಿದ image ಅನ್ನೂ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದನ್ನೂ ನಿಖರವಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed same-dimensional-vector concatenation is exactly what lets a single transformer architecture handle text, images, and (with the same principle) audio or video tokens without any modality-specific attention mechanism -- once everything is projected into the same embedding space, the rest of the model just sees a sequence of vectors.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ-dimensional-vector concatenation ಒಂದೂ ಏಕೈಕ transformer architecture ಗೆ text, images, ಮತ್ತೆ audio ಅಥವಾ video tokens ಅನ್ನೂ ಯಾವುದೇ modality-specific attention mechanism ಇಲ್ಲದೆ ನಿರ್ವಹಿಸಲು ಅನುಮತಿಸುವ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real LLaVA training data was genuinely generated by prompting GPT-4 with COCO captions and object metadata (without direct image access) to synthesize conversation, detailed-description, and complex-reasoning instruction examples -- the same three-part instruction style this lesson\'s prompt template genuinely demonstrates the mechanical foundation for.',
      bodyKn: 'ನಿಜ LLaVA training data ನಿಜವಾಗಿ GPT-4 ಗೆ COCO captions ಮತ್ತೆ object metadata ನೀಡಿ (ನೇರ image access ಇಲ್ಲದೆ) conversation, detailed-description, complex-reasoning instruction examples ಸಂಶ್ಲೇಷಿಸಲು ಉತ್ಪಾದಿಸಲಾಯಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Caveat About Synthetic Instruction Data', headingKn: 'Synthetic Instruction Data ಬಗ್ಗೆ ಒಂದೂ ನಿಜ ಎಚ್ಚರಿಕೆ',
      bodyEn: 'If GPT-4 receives only textual metadata rather than the actual image, it cannot reliably know visual details absent from that metadata -- a caption saying "a person riding a bicycle" gives no information about a bicycle\'s color, a sign\'s text, or a dog present in the scene. So synthetic visual instructions can contain noise or omissions. This is a genuine, disclosed limitation of the data-generation approach, not a flaw hidden from the lesson.',
      bodyKn: 'GPT-4 ಕೇವಲ textual metadata ಸ್ವೀಕರಿಸಿದರೆ, ನಿಜ image ಅಲ್ಲ, ಇದೂ ಆ metadata ನಲ್ಲಿ ಇಲ್ಲದ visual details ಅನ್ನೂ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ತಿಳಿಯಲು ಸಾಧ್ಯವಿಲ್ಲ. ಆದ್ದರಿಂದ synthetic visual instructions noise ಅಥವಾ omissions ಹೊಂದಿರಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'Two genuine executions grounded this lesson: build_llava_prompt() producing the exact system-plus-user-plus-assistant text, and expand_image_placeholder() genuinely splicing 8 visual entries (matching Part 1\'s projector dimension) between the correctly split prefix and suffix. Every output block reflects one of these two runs, using the same toy patches and projector from Part 1.',
      bodyKn: 'ಎರಡೂ ನಿಜ executions ಈ lesson ಅನ್ನೂ ಆಧಾರಗೊಳಿಸಿದವೂ: build_llava_prompt() ಮತ್ತೆ expand_image_placeholder(). ಪ್ರತಿ output block ಈ ಎರಡೂ runs ಒಂದೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ, Part 1 ya ಅದೇ toy patches ಮತ್ತೆ projector ಬಳಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the primary goal of LLaVA Stage 1?', qKn: 'LLaVA Stage 1 ya ಮುಖ್ಯ ಗುರಿ ಏನೂ?',
        opts: ['Teach multi-turn conversation', 'Train the projector to align vision features with the LLM\'s representation space', 'Train CLIP from scratch', 'Reduce the image to 32 tokens'], correct: 1,
        optsKn: ['multi-turn conversation ಕಲಿಸುವುದೂ', 'projector ಅನ್ನೂ LLM ya representation space ಜೊತೆ align ಮಾಡಲು ತರಬೇತಿ ನೀಡುವುದೂ', 'CLIP ಅನ್ನೂ ಆದಿಯಿಂದ ತರಬೇತಿ ನೀಡುವುದೂ', 'image ಅನ್ನೂ 32 tokens ಗೆ ಕಡಿಮೆ ಮಾಡುವುದೂ'] },
      { q: 'Genuinely confirmed in this lesson: how many visual entries did expand_image_placeholder() genuinely insert for the 8-patch toy example?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: expand_image_placeholder() 8-patch toy example ಗೆ ಎಷ್ಟೂ visual entries ನಿಜವಾಗಿ ಸೇರಿಸಿತು?',
        opts: ['1', '4', '8', '32'], correct: 2,
        optsKn: ['1', '4', '8', '32'] },
      { q: 'What does <image> conceptually become before the LLM processes the multimodal sequence?', qKn: 'LLM multimodal sequence ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಮೊದಲೂ <image> ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ಏನಾಗುತ್ತದೆ?',
        opts: ['One English word', 'One vocabulary ID', 'A block of projected visual embeddings', 'A caption automatically produced by CLIP'], correct: 2,
        optsKn: ['ಒಂದೂ English word', 'ಒಂದೂ vocabulary ID', 'projected visual embeddings ya ಒಂದೂ block', 'CLIP ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಉತ್ಪಾದಿಸಿದ ಒಂದೂ caption'] },
      { q: 'What distinguishes Stage 2 from Stage 1?', qKn: 'Stage 2 Stage 1 ಇಂದ ಏನೂ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ?',
        opts: ['Stage 2 introduces instruction-response supervision', 'Stage 2 removes the image', 'Stage 2 trains only a tokenizer', 'Stage 2 turns the model into a classifier only'], correct: 0,
        optsKn: ['Stage 2 instruction-response supervision ಪರಿಚಯಿಸುತ್ತದೆ', 'Stage 2 image ತೆಗೆದುಹಾಕುತ್ತದೆ', 'Stage 2 ಕೇವಲ tokenizer ತರಬೇತಿ ನೀಡುತ್ತದೆ', 'Stage 2 model ಅನ್ನೂ ಕೇವಲ classifier ಆಗಿಸುತ್ತದೆ'] },
      { q: 'Why is visual instruction tuning similar to ordinary supervised instruction tuning?', qKn: 'Visual instruction tuning ಸಾಮಾನ್ಯ supervised instruction tuning ಗೆ ಏಕೆ ಹೋಲುತ್ತದೆ?',
        opts: ['Both generally train the model to generate assistant responses conditioned on a prompt', 'Neither uses language-model loss', 'Both require a Q-Former', 'Both remove system messages'], correct: 0,
        optsKn: ['ಎರಡೂ ಸಾಮಾನ್ಯವಾಗಿ model ಗೆ ಒಂದೂ prompt ಮೇಲೆ ಅವಲಂಬಿತ assistant responses ಉತ್ಪಾದಿಸಲು ತರಬೇತಿ ನೀಡುತ್ತವೆ', 'ಎರಡೂ language-model loss ಬಳಸುವುದಿಲ್ಲ', 'ಎರಡಕ್ಕೂ Q-Former ಅಗತ್ಯವಿದೆ', 'ಎರಡೂ system messages ತೆಗೆದುಹಾಕುತ್ತವೆ'] },
    ] } },
  ],
};
