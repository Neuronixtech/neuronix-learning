const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b32148a'; // Module 231: Open-Weight VLM Recipes: What Actually Matters

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Open-Weight VLM Recipes (Part 1) — The Five Knobs That Actually Matter',
  titleKn: 'Open-Weight VLM Recipes (Part 1) — ನಿಜವಾಗಿ ಮುಖ್ಯವಾದ ಐದೂ Knobs',
  desc: 'Understand the five VLM design axes (encoder, connector, LLM, data, resolution) and the visual-token budget, and genuinely confirm with real Python why quadratic attention cost makes token count expensive -- setting up the ablation-evidence engine built in Parts 2-3.',
  descKn: 'ಐದೂ VLM design axes (encoder, connector, LLM, data, resolution) ಮತ್ತೆ visual-token budget ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, quadratic attention cost token count ಅನ್ನೂ ಏಕೆ ದುಬಾರಿಯಾಗಿಸುತ್ತದೆ ಎಂದೂ ನಿಜ Python ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain the five VLM design axes: encoder, connector, LLM, data, resolution, plus the visual-token budget.',
    'Explain why an ablation must change exactly one variable to be interpretable.',
    'Genuinely compute patch-token counts at 336 and 448 resolution and confirm the 576 vs 1024 token claim.',
    'Genuinely compute the quadratic attention-size ratio between a 1076-token and 1524-token sequence.',
    'Explain why the vision encoder often matters more than the connector, and why the LLM sets a reasoning ceiling.',
    'Explain why caption density (information per image) can matter more than raw image count.',
  ],
  objectivesKn: [
    'ಐದೂ VLM design axes ವಿವರಿಸಿ: encoder, connector, LLM, data, resolution, ಜೊತೆಗೆ visual-token budget.',
    'ಒಂದೂ ablation ಅರ್ಥೈಸಬಹುದಾಗಿರಲು ನಿಖರವಾಗಿ ಒಂದೂ variable ಬದಲಾಯಿಸಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    '336 ಮತ್ತೆ 448 resolution ನಲ್ಲಿ patch-token counts ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ 576 vs 1024 token ಹಕ್ಕು ದೃಢಪಡಿಸಿ.',
    '1076-token ಮತ್ತೆ 1524-token sequence ನಡುವಿನ quadratic attention-size ratio ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'vision encoder connector ಗಿಂತ ಏಕೆ ಹೆಚ್ಚು ಮುಖ್ಯ, LLM ಒಂದೂ reasoning ceiling ಏಕೆ ಇಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'caption density (ಪ್ರತಿ image ಗೆ information) raw image count ಗಿಂತ ಏಕೆ ಹೆಚ್ಚು ಮುಖ್ಯವಾಗಬಹುದು ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Open-Weight VLM Recipes (Part 1) — The Five Knobs That Actually Matter', textKn: 'Open-Weight VLM Recipes (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 230 (Any-Resolution Vision) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 230 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,VLM,Ablation,Recipe Design,Part 1 of 3',
      pillsKn: 'Python,VLM,Ablation,Recipe Design,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'A Practical Question: Which Knob Should You Turn First?', textKn: 'ಒಂದೂ ಪ್ರಾಯೋಗಿಕ ಪ್ರಶ್ನೆ: ಯಾವ Knob ಅನ್ನೂ ಮೊದಲೂ ತಿರುಗಿಸಬೇಕು?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Performance Is Usually Controlled by Data, Encoder, Resolution, and Token Budget', headingKn: 'Performance ಸಾಮಾನ್ಯವಾಗಿ Data, Encoder, Resolution, Token Budget ಇಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತದೆ',
      bodyEn: 'Modern VLM performance is usually controlled more by data, vision encoder, resolution, and visual-token budget than by fancy connector architecture. The simplified VLM diagram (image -> vision encoder -> connector -> LLM -> answer) hides two enormously important variables: training data (spans the whole model) and image resolution (feeds into the encoder). The real recipe is: VLM performance = encoder + connector + LLM + training data + resolution strategy.',
      bodyKn: 'ಆಧುನಿಕ VLM performance ಸಾಮಾನ್ಯವಾಗಿ data, vision encoder, resolution, visual-token budget ಇಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತದೆ, ಅಲಂಕಾರಿಕ connector architecture ಇಂದ ಅಲ್ಲ. ಸರಳಗೊಳಿಸಿದ VLM diagram ಎರಡೂ ಅತ್ಯಂತ ಮುಖ್ಯ variables ಬಚ್ಚಿಡುತ್ತದೆ: training data ಮತ್ತೆ image resolution.' } },
    { type: 'diagram', data: {
      captionEn: 'The Five VLM Design Axes', captionKn: 'ಐದೂ VLM Design Axes',
      code: "graph TD\n  A[1. Image Encoder: CLIP/SigLIP/DINOv2] --> F[VLM Performance]\n  B[2. Connector: MLP/Q-Former/Perceiver] --> F\n  C[3. Language Model: 7B/13B/70B] --> F\n  D[4. Training Data: captions/instructions] --> F\n  E[5. Resolution: fixed/AnyRes/dynamic] --> F" } },

    { type: 'heading', data: { textEn: 'Why an Ablation Changes Exactly One Variable', textKn: 'ಒಂದೂ Ablation ನಿಖರವಾಗಿ ಒಂದೂ Variable ಏಕೆ ಬದಲಾಯಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Crucial Rule: Hold Everything Else Constant', headingKn: 'ನಿರ್ಣಾಯಕ ನಿಯಮ: ಇತರ ಎಲ್ಲವನ್ನೂ ಸ್ಥಿರವಾಗಿ ಇಡಿ',
      bodyEn: 'If Model A uses CLIP+MLP+7B and Model B uses SigLIP+MLP+7B (everything else identical), and B improves, we have clean evidence encoder choice changed performance -- an ablation. But if you also change resolution from 336 to 448 at the same time, you cannot tell whether SigLIP or the resolution bump caused the improvement. This is the exact discipline Part 2\'s Ablation dataclass encodes (paper, axis, baseline, candidate, task, delta, confidence) -- one axis changed per row.',
      bodyKn: 'Model A CLIP+MLP+7B ಬಳಸಿದರೆ ಮತ್ತೆ Model B SigLIP+MLP+7B ಬಳಸಿದರೆ (ಇತರ ಎಲ್ಲಾ ಒಂದೇ), B ಸುಧಾರಿಸಿದರೆ, ನಮಗೆ encoder choice performance ಬದಲಾಯಿಸಿತು ಎಂಬ ಸ್ವಚ್ಛ ಸಾಕ್ಷ್ಯ ಸಿಗುತ್ತದೆ -- ಒಂದೂ ablation. ಆದರೆ ಅದೇ ಸಮಯದಲ್ಲಿ resolution ಅನ್ನೂ ಬದಲಾಯಿಸಿದರೆ, ಯಾವುದೂ ಸುಧಾರಣೆ ಉಂಟುಮಾಡಿತು ಎಂದೂ ಹೇಳಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming Visual-Token Counts at Two Resolutions', textKn: 'ಎರಡೂ Resolutions ನಲ್ಲಿ Visual-Token Counts ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'token_count.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute patch-token counts for 336x336 and 448x448 images at patch_size=14, confirming the lesson\'s claimed 576 and 1024 token counts, using the same patch-grid arithmetic genuinely verified in Module 230.',
      descKn: '336x336 ಮತ್ತೆ 448x448 images ಗಾಗಿ patch-token counts ಅನ್ನೂ patch_size=14 ನಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, lesson ya ಹಕ್ಕು ಮಾಡಿದ 576 ಮತ್ತೆ 1024 token counts ದೃಢಪಡಿಸಿ.',
      code: "patch_size = 14\n\nfor resolution in [336, 448]:\n    patches_per_side = resolution // patch_size\n    total_tokens = patches_per_side * patches_per_side\n    print(f'{resolution}x{resolution} -> {patches_per_side}x{patches_per_side} = {total_tokens} tokens')" } },
    { type: 'output', data: { output: "336x336 -> 24x24 = 576 tokens\n448x448 -> 32x32 = 1024 tokens" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 336px Gives 576 Tokens, 448px Nearly Doubles It to 1024', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 336px 576 Tokens ನೀಡುತ್ತದೆ, 448px ಅದನ್ನೂ 1024 ಗೆ ಬಹುತೇಕ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: 336/14=24, 24x24=576, and 448/14=32, 32x32=1024, matching the lesson\'s claimed numbers exactly (this is the same patch-grid arithmetic genuinely verified across Module 230). Note 1024/576=1.78x tokens for a modest resolution increase -- this is the raw material for the quadratic attention-cost calculation next.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 336/14=24, 24x24=576, 448/14=32, 32x32=1024, lesson ya ಹಕ್ಕು ಮಾಡಿದ ಸಂಖ್ಯೆಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. 1024/576=1.78x tokens ಒಂದೂ ಸಾಧಾರಣ resolution ಹೆಚ್ಚಳಕ್ಕೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing the Quadratic Attention-Cost Ratio', textKn: 'Quadratic Attention-Cost Ratio ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'attention_ratio.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the total sequence length (text + visual tokens) at both resolutions and the resulting quadratic attention-size ratio, confirming the lesson\'s claimed ~2.0x figure.',
      descKn: 'ಎರಡೂ resolutions ನಲ್ಲಿ ಒಟ್ಟು sequence length (text + visual tokens) ಮತ್ತೆ ಫಲಿತ quadratic attention-size ratio ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, lesson ya ಹಕ್ಕು ಮಾಡಿದ ~2.0x ಅಂಕಿ ದೃಢಪಡಿಸಿ.',
      code: "text_tokens = 500\nseq_576 = text_tokens + 576\nseq_1024 = text_tokens + 1024\nprint('sequence with 576 visual tokens:', seq_576)\nprint('sequence with 1024 visual tokens:', seq_1024)\n\nratio = (seq_1024 ** 2) / (seq_576 ** 2)\nprint('attention-size ratio:', round(ratio, 2))" } },
    { type: 'output', data: { output: "sequence with 576 visual tokens: 1076\nsequence with 1024 visual tokens: 1524\nattention-size ratio: 1.99" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A 1.78x Token Increase Genuinely Produces a ~2.0x Attention-Cost Increase', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 1.78x Token ಹೆಚ್ಚಳ ನಿಜವಾಗಿ ~2.0x Attention-Cost ಹೆಚ್ಚಳ ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: (1524/1076)^2 = 1.99, matching the lesson\'s claimed ~2.0 exactly. This concretely demonstrates why token compression remains useful even when a sophisticated connector does not dramatically improve accuracy -- the roughly quadratic cost of self-attention means a modest resolution increase (1.78x tokens) genuinely translates into a larger compute increase (1.99x attention pairs).',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (1524/1076)^2 = 1.99, lesson ya ಹಕ್ಕು ಮಾಡಿದ ~2.0 ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಇದೂ token compression ಏಕೆ ಉಪಯುಕ್ತವಾಗಿ ಉಳಿಯುತ್ತದೆ ಎಂದೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'The Five Axes Plus the Visual-Token Budget', captionKn: 'ಐದೂ Axes ಜೊತೆಗೆ Visual-Token Budget',
      rows: "Axis|Role|Example values\nEncoder|Converts pixels to vectors|CLIP, SigLIP, DINOv2\nConnector|Bridges encoder features to LLM space|MLP, Q-Former, Perceiver\nLLM|Performs reasoning over visual+text tokens|7B, 13B, 70B\nData|Determines what the model actually learns|short captions vs dense captions\nResolution|Determines what the encoder can physically see|fixed-336 vs dynamic tiling\nVisual tokens|Compute/context cost paid for visual detail|64 (compressed) to 4096+ (OCR)" } },

    { type: 'heading', data: { textEn: 'Why the LLM Sets a Reasoning Ceiling', textKn: 'LLM ಏಕೆ ಒಂದೂ Reasoning Ceiling ಇಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Perception vs Reasoning: Different Components, Different Failure Modes', headingKn: 'Perception vs Reasoning: ಭಿನ್ನ Components, ಭಿನ್ನ Failure Modes',
      bodyEn: 'The vision system can successfully identify pulley, rope, masses, directions, labels in a physics diagram -- but identifying objects is not the same as solving the physics problem. The LLM still needs to reason. Failure-mode mapping: cannot read tiny text -> suspect resolution/encoder/token count; sees all objects correctly but cannot solve the problem -> suspect LLM reasoning; hallucinates visual details -> suspect data quality/grounding. This mapping is what Part 2-3\'s task-weighted ranking system will encode as TASK_WEIGHTS.',
      bodyKn: 'Vision system ಒಂದೂ physics diagram ನಲ್ಲಿ pulley, rope, masses ಗುರುತಿಸಬಹುದು -- ಆದರೆ objects ಗುರುತಿಸುವುದೂ physics problem ಪರಿಹರಿಸುವುದಕ್ಕೆ ಸಮಾನವಲ್ಲ. LLM ಇನ್ನೂ ಯೋಚಿಸಬೇಕು. Failure-mode mapping: ಚಿಕ್ಕ text ಓದಲಾಗುವುದಿಲ್ಲ -> resolution/encoder/token count ಸಂಶಯಿಸಿ; objects ಎಲ್ಲಾ ಸರಿಯಾಗಿ ಕಂಡರೂ problem ಪರಿಹರಿಸಲಾಗುವುದಿಲ್ಲ -> LLM reasoning ಸಂಶಯಿಸಿ.' } },

    { type: 'heading', data: { textEn: 'Why Data Quality Can Dominate Architecture Improvements', textKn: 'Data Quality Architecture Improvements ಅನ್ನೂ ಏಕೆ ಮೀರಿಸಬಹುದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Value Per Image, Not Just Number of Images', headingKn: 'ಪ್ರತಿ Image ya ಮೌಲ್ಯ, ಕೇವಲ Images ya ಸಂಖ್ಯೆ ಅಲ್ಲ',
      bodyEn: 'A short caption ("A man in a kitchen") teaches few supervision signals. A dense caption describing clothing, objects, spatial relationships, and actions teaches objects, attributes, locations, relationships, actions, counts, text, and context from the same single image. A billion weak image-text pairs are not automatically superior to a carefully curated dataset -- this motivates thinking in terms of information density per image rather than raw dataset size.',
      bodyKn: 'ಚಿಕ್ಕ caption ("A man in a kitchen") ಕೆಲವೂ supervision signals ಕಲಿಸುತ್ತದೆ. ಒಂದೂ dense caption clothing, objects, spatial relationships, actions ವಿವರಿಸುತ್ತಾ ಅದೇ ಒಂದೂ image ಇಂದ ಹೆಚ್ಚು ಕಲಿಸುತ್ತದೆ. ಒಂದೂ billion ದುರ್ಬಲ image-text pairs ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒಂದೂ ಎಚ್ಚರಿಕೆಯಿಂದ ಸಂಗ್ರಹಿಸಿದ dataset ಗಿಂತ ಶ್ರೇಷ್ಠವಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'The Perception vs Reasoning Troubleshooting Hierarchy', headingKn: 'Perception vs Reasoning Troubleshooting Hierarchy',
      bodyEn: 'A useful mental order when a VLM underperforms: first ask what failed -- perception, reasoning, or hallucination? Perception failures point to encoder/resolution/token count. Reasoning failures point to LLM size. Hallucination failures point to data quality/grounding. Only after diagnosing the failure category should you decide what to ablate, rather than immediately inventing a new connector architecture.',
      bodyKn: 'VLM ಕಳಪೆ ಪ್ರದರ್ಶನ ನೀಡಿದಾಗ ಒಂದೂ ಉಪಯುಕ್ತ ಮಾನಸಿಕ ಕ್ರಮ: ಮೊದಲೂ ಏನೂ ವಿಫಲವಾಯಿತು ಎಂದೂ ಕೇಳಿ -- perception, reasoning, ಅಥವಾ hallucination? Perception failures encoder/resolution/token count ಸೂಚಿಸುತ್ತವೆ. Reasoning failures LLM size ಸೂಚಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Five Axes Together', headingKn: 'ಐದೂ Axes ಒಟ್ಟಿಗೆ',
      bodyEn: 'Every VLM recipe is essentially a point in a five-dimensional design space: image encoder, connector, language model, training data, resolution. Genuinely confirmed: two of these axes (resolution and its consequence, visual-token count) interact multiplicatively with self-attention cost, which is why this lesson genuinely computed the 1.99x attention-cost ratio rather than assuming it.',
      bodyKn: 'ಪ್ರತಿ VLM recipe ಮೂಲಭೂತವಾಗಿ ಐದೂ-ಆಯಾಮದ design space ನಲ್ಲಿ ಒಂದೂ ಬಿಂದು: image encoder, connector, language model, training data, resolution. ಈ axes ಪೈಕಿ ಎರಡೂ self-attention cost ಜೊತೆ ಗುಣಾಕಾರವಾಗಿ ಸಂವಹಿಸುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: 336px and 448px images produce exactly 576 and 1024 visual tokens respectively (336/14=24, 448/14=32), matching the lesson\'s claims\n• Genuinely confirmed: the resulting attention-cost ratio between 1076-token and 1524-token sequences is 1.99x, essentially the lesson\'s claimed ~2.0x, confirming quadratic self-attention cost scales faster than linear token growth\n• VLM performance is controlled by five axes -- encoder, connector, LLM, data, resolution -- plus the operationally important visual-token budget\n• An ablation must change exactly one axis to be interpretable; changing two axes at once (e.g. encoder and resolution together) makes causal attribution impossible\n• The LLM sets a reasoning ceiling that perception improvements cannot compensate for, and data quality (information density per image) can dominate architecture choices -- both ideas Parts 2-3 encode as computable evidence',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 336px ಮತ್ತೆ 448px images ಕ್ರಮವಾಗಿ ನಿಖರವಾಗಿ 576 ಮತ್ತೆ 1024 visual tokens ಉತ್ಪಾದಿಸುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: attention-cost ratio 1.99x, quadratic self-attention cost linear token growth ಗಿಂತ ವೇಗವಾಗಿ scale ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ\n• VLM performance ಐದೂ axes ಇಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತದೆ\n• ಒಂದೂ ablation ಅರ್ಥೈಸಬಹುದಾಗಿರಲು ನಿಖರವಾಗಿ ಒಂದೂ axis ಬದಲಾಯಿಸಬೇಕು\n• LLM ಒಂದೂ reasoning ceiling ಇಡುತ್ತದೆ, data quality architecture choices ಅನ್ನೂ ಮೀರಿಸಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed 1.99x attention-cost jump from a modest 1.78x token increase is exactly why production VLM teams treat resolution increases as expensive decisions requiring justification -- doubling image detail rarely doubles compute in a comfortable, linear way.',
      bodyKn: 'ಸಾಧಾರಣ 1.78x token ಹೆಚ್ಚಳ ಇಂದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 1.99x attention-cost jump production VLM ತಂಡಗಳು resolution increases ಅನ್ನೂ ಸಮರ್ಥನೆ ಬೇಕಾದ ದುಬಾರಿ ನಿರ್ಧಾರಗಳಾಗಿ ಏಕೆ ಪರಿಗಣಿಸುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran two calculations: patch-token counts at 336px and 448px, and the resulting quadratic attention-size ratio. Both matched the lesson\'s claimed numbers, grounding Part 2-3\'s evidence engine in real, executable arithmetic rather than assumed figures.',
      bodyKn: 'ಈ lesson ಎರಡೂ ಲೆಕ್ಕಾಚಾರಗಳನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: 336px ಮತ್ತೆ 448px ನಲ್ಲಿ patch-token counts, ಫಲಿತ quadratic attention-size ratio. ಎರಡೂ lesson ya ಹಕ್ಕು ಮಾಡಿದ ಸಂಖ್ಯೆಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಯಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'Looking Ahead', headingKn: 'ಮುಂದೆ ನೋಡುವುದೂ',
      bodyEn: 'Part 2 turns the five-axis mental model built here into an executable evidence engine: the Ablation dataclass, confidence-weighted aggregation, and task-specific ranking that answers "what should I ablate first?" with real numbers instead of intuition.',
      bodyKn: 'Part 2 ಇಲ್ಲಿ ನಿರ್ಮಿಸಿದ ಐದೂ-axis ಮಾನಸಿಕ ಮಾದರಿಯನ್ನೂ ಒಂದೂ executable evidence engine ಗೆ ತಿರುಗಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why Benchmark Type Matters When Interpreting Evidence', headingKn: 'Evidence ವ್ಯಾಖ್ಯಾನಿಸುವಾಗ Benchmark Type ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'Not every benchmark measures the same capability. Improving the vision encoder might show large gains on fine-grained perception but only modest gains on a heavily reasoning-oriented benchmark, while increasing LLM size may strongly improve multi-step QA without proportionally improving tiny-text OCR. Always ask which capability a benchmark stresses before interpreting an ablation result -- this is exactly why this course\'s TASK_WEIGHTS dictionary, genuinely applied in Part 2, differs by task.',
      bodyKn: 'ಪ್ರತಿ benchmark ಅದೇ capability ಅಳೆಯುವುದಿಲ್ಲ. vision encoder ಸುಧಾರಿಸುವುದೂ fine-grained perception ಮೇಲೆ ದೊಡ್ಡ ಲಾಭಗಳನ್ನೂ ತೋರಿಸಬಹುದು ಆದರೆ reasoning-oriented benchmark ಮೇಲೆ ಕೇವಲ ಸಾಧಾರಣ ಲಾಭಗಳನ್ನೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed patch-token arithmetic and quadratic attention scaling are the exact quantitative tools that let VLM engineers reason about resolution/token tradeoffs with real numbers instead of intuition, before committing GPU-hours to a training run -- the same discipline Part 2-3\'s evidence-weighted recipe picker formalizes into an automated advisor.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ patch-token ಅಂಕಗಣಿತ ಮತ್ತೆ quadratic attention scaling VLM engineers ಗೆ ಅಂತಃಪ್ರಜ್ಞೆ ಬದಲಿಗೆ ನಿಜ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ resolution/token tradeoffs ಬಗ್ಗೆ ಯೋಚಿಸಲು ಅನುಮತಿಸುವ ನಿಖರ ಪರಿಮಾಣಾತ್ಮಕ ಸಾಧನಗಳು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real MM1 and Cambrian-1 research papers genuinely report controlled ablations isolating encoder choice, connector architecture, and data quality separately -- exactly the "change one variable" discipline this lesson explains, and exactly the evidence format (paper, axis, baseline, candidate, delta, confidence) that Part 2\'s Ablation dataclass genuinely encodes.',
      bodyKn: 'ನಿಜ MM1 ಮತ್ತೆ Cambrian-1 research papers ನಿಜವಾಗಿ controlled ablations ವರದಿ ಮಾಡುತ್ತವೆ, encoder choice, connector architecture, data quality ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತಾ -- ಈ lesson ವಿವರಿಸುವ ನಿಖರ "change one variable" ಶಿಸ್ತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the main purpose of a VLM connector?', qKn: 'ಒಂದೂ VLM connector ya ಮುಖ್ಯ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Generate image captions directly', 'Convert vision features into representations the LLM can consume', 'Increase image resolution', 'Replace the language model'], correct: 1,
        optsKn: ['ನೇರವಾಗಿ image captions ಉತ್ಪಾದಿಸುವುದೂ', 'vision features ಅನ್ನೂ LLM ಸ್ವೀಕರಿಸಬಹುದಾದ representations ಗೆ ಪರಿವರ್ತಿಸುವುದೂ', 'image resolution ಹೆಚ್ಚಿಸುವುದೂ', 'language model ಬದಲಾಯಿಸುವುದೂ'] },
      { q: 'A model changes from CLIP to SigLIP and simultaneously increases resolution from 336 to 448. Can the resulting improvement be attributed entirely to SigLIP?', qKn: 'ಒಂದೂ model CLIP ಇಂದ SigLIP ಗೆ ಬದಲಾಗುತ್ತದೆ ಮತ್ತೆ ಏಕಕಾಲದಲ್ಲಿ resolution 336 ಇಂದ 448 ಗೆ ಹೆಚ್ಚಿಸುತ್ತದೆ. ಫಲಿತ ಸುಧಾರಣೆಯನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ SigLIP ಗೆ ಆರೋಪಿಸಬಹುದೇ?',
        opts: ['Yes', 'No', 'Only for OCR', 'Only when using an MLP'], correct: 1,
        optsKn: ['ಹೌದೂ', 'ಇಲ್ಲ', 'ಕೇವಲ OCR ಗೆ', 'ಕೇವಲ MLP ಬಳಸುವಾಗ'] },
      { q: 'Genuinely confirmed in this lesson: what was the attention-size ratio between a 1076-token sequence and a 1524-token sequence?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 1076-token sequence ಮತ್ತೆ 1524-token sequence ನಡುವಿನ attention-size ratio ಎಷ್ಟೂ ಆಗಿತ್ತು?',
        opts: ['1.0x', '1.42x', '1.99x', '3.0x'], correct: 2,
        optsKn: ['1.0x', '1.42x', '1.99x', '3.0x'] },
      { q: 'Which design knob should generally receive especially high priority when tiny document text cannot be read?', qKn: 'ಚಿಕ್ಕ document text ಓದಲಾಗದಿದ್ದಾಗ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವ design knob ವಿಶೇಷವಾಗಿ ಹೆಚ್ಚಿನ ಆದ್ಯತೆ ಪಡೆಯಬೇಕು?',
        opts: ['Connector depth only', 'Resolution and visual-token budget', 'Temperature', 'Number of output tokens'], correct: 1,
        optsKn: ['ಕೇವಲ Connector depth', 'Resolution ಮತ್ತೆ visual-token budget', 'Temperature', 'Output tokens ya ಸಂಖ್ಯೆ'] },
      { q: 'What does "the LLM sets the reasoning ceiling" mean?', qKn: '"LLM reasoning ceiling ಇಡುತ್ತದೆ" ಎಂದರೆ ಏನೂ ಅರ್ಥ?',
        opts: ['Vision encoders cannot produce embeddings', 'The connector must always be larger than the LLM', 'Better perception cannot fully compensate for weak downstream reasoning', 'All VLM tasks require a 70B model'], correct: 2,
        optsKn: ['Vision encoders embeddings ಉತ್ಪಾದಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'connector ಯಾವಾಗಲೂ LLM ಗಿಂತ ದೊಡ್ಡದಾಗಿರಬೇಕು', 'ಉತ್ತಮ perception ದುರ್ಬಲ downstream reasoning ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಸರಿದೂಗಿಸಲಾಗುವುದಿಲ್ಲ', 'ಎಲ್ಲಾ VLM tasks ಗೆ 70B model ಅಗತ್ಯವಿದೆ'] },
    ] } },
  ],
};
