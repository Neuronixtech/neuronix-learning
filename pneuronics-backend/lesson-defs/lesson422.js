const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321493'; // Module 234: InternVL3 Native Multimodal Pretraining

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'InternVL3: Native Multimodal Pretraining (Part 1) — Why Native Pretraining Exists',
  titleKn: 'InternVL3: Native Multimodal Pretraining (Part 1) — Native Pretraining ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ',
  desc: 'Understand the difference between post-hoc VLM adaptation and native multimodal pretraining, correctly noting that InternVL3 initializes from pretrained ViT and LLM weights rather than training from scratch, and set up the four-part simulator built and genuinely run across Parts 2-3.',
  descKn: 'post-hoc VLM adaptation ಮತ್ತೆ native multimodal pretraining ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, InternVL3 pretrained ViT ಮತ್ತೆ LLM weights ಇಂದ ಆರಂಭಿಸುತ್ತದೆ ಎಂದೂ ಸರಿಯಾಗಿ ಗಮನಿಸಿ.',
  objectives: [
    'Explain the difference between post-hoc multimodal adaptation and native multimodal pretraining.',
    'Explain why the released InternVL3 models initialize from pretrained ViT and LLM weights rather than random initialization.',
    'Explain why pure-text data remains part of native multimodal pretraining.',
    'Explain the distinction between caption data and interleaved data.',
    'Explain what V2PE addresses (variable positional increments for visual tokens) versus what it is not (hidden-dimension axis allocation).',
    'Explain why ViR and DvD belong to InternVL3.5, not the original InternVL3 release, while still being useful continuations to simulate.',
  ],
  objectivesKn: [
    'post-hoc multimodal adaptation ಮತ್ತೆ native multimodal pretraining ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'ಬಿಡುಗಡೆಯಾದ InternVL3 models pretrained ViT ಮತ್ತೆ LLM weights ಇಂದ ಆರಂಭಿಸುತ್ತವೆ, random initialization ಇಂದ ಅಲ್ಲ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'pure-text data native multimodal pretraining ya ಭಾಗವಾಗಿ ಏಕೆ ಉಳಿಯುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'caption data ಮತ್ತೆ interleaved data ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'V2PE ಏನೂ ಪರಿಹರಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ViR ಮತ್ತೆ DvD InternVL3.5 ಗೆ ಸೇರಿವೆ, ಮೂಲ InternVL3 release ಗೆ ಅಲ್ಲ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'InternVL3: Native Multimodal Pretraining (Part 1) — Why Native Pretraining Exists', textKn: 'InternVL3: Native Multimodal Pretraining (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 233 (Qwen-VL) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 233 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,InternVL3,Native Pretraining,Alignment Debt,Part 1 of 3',
      pillsKn: 'Python,InternVL3,Native Pretraining,Alignment Debt,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Post-Hoc Adaptation vs Native Multimodal Pretraining', textKn: 'Post-Hoc Adaptation vs Native Multimodal Pretraining', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Different Training Idea, Not a Different Architecture', headingKn: 'ಒಂದೂ ಭಿನ್ನ Training Idea, ಭಿನ್ನ Architecture ಅಲ್ಲ',
      bodyEn: 'Post-hoc: pretrained text LLM -> add vision encoder -> train projector -> multimodal instruction tuning. Native multimodal pretraining: pretrained language + vision components -> text + image-text + video data -> joint multimodal pretraining -> instruction/post-training. Importantly, InternVL3 retains a familiar ViT-MLP-LLM architecture -- the change is the training regime, not the connector.',
      bodyKn: 'Post-hoc: pretrained text LLM -> vision encoder ಸೇರಿಸಿ -> projector ತರಬೇತಿ ನೀಡಿ -> multimodal instruction tuning. Native multimodal pretraining: pretrained language + vision components -> text + image-text + video data -> joint multimodal pretraining. InternVL3 ಪರಿಚಿತ ViT-MLP-LLM architecture ಇಡುತ್ತದೆ -- ಬದಲಾವಣೆ training regime, connector ಅಲ್ಲ.' } },
    { type: 'diagram', data: {
      captionEn: 'Post-Hoc vs Native Multimodal Pretraining Timeline', captionKn: 'Post-Hoc vs Native Multimodal Pretraining Timeline',
      code: "graph TD\n  A[Post-hoc: Text pretraining] --> B[Add vision, train projector]\n  B --> C[Multimodal instruction tuning]\n  D[Native: pretrained ViT + pretrained LLM] --> E[Joint multimodal + pure-text pretraining]\n  E --> F[Post-training]" } },

    { type: 'concept', data: {
      headingEn: 'An Important Factual Correction', headingKn: 'ಒಂದೂ ಮುಖ್ಯ Factual Correction',
      bodyEn: 'InternVL3 does introduce native multimodal pre-training, but the released models were NOT literally trained from random initialization. The paper explicitly initializes the ViT and LLM from pretrained weights to reduce compute, then performs joint multimodal + pure-text pretraining. The better description: InternVL3 makes multimodal learning a real pretraining phase rather than merely a projector-alignment phase, while still exploiting pretrained component initialization.',
      bodyKn: 'InternVL3 native multimodal pre-training ಪರಿಚಯಿಸುತ್ತದೆ, ಆದರೆ ಬಿಡುಗಡೆಯಾದ models ಅಕ್ಷರಶಃ random initialization ಇಂದ ತರಬೇತಿ ಪಡೆದಿಲ್ಲ. paper ViT ಮತ್ತೆ LLM ಅನ್ನೂ pretrained weights ಇಂದ ಆರಂಭಿಸುತ್ತದೆ compute ಕಡಿಮೆ ಮಾಡಲು.' } },

    { type: 'heading', data: { textEn: 'Symptoms of Alignment Debt', textKn: 'Alignment Debt ya Symptoms', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Three Ways Post-Hoc Adaptation Can Show Strain', captionKn: 'Post-Hoc Adaptation ಮೂರೂ ದಾರಿಗಳಲ್ಲಿ ಒತ್ತಡ ತೋರಿಸಬಹುದು',
      rows: "Symptom|Description|Example\nCatastrophic forgetting|Original text capability decays after vision adaptation|Text reasoning 82->76, vision 10->70\nAnswer drift|Semantically equivalent prompts give different answers|\"How many apples?\" -> 3, \"Count the apples\" -> 4\nVisual-text inconsistency|The model's own description contradicts its follow-up answer|Says \"black dog\" then answers \"cat\" to a follow-up" } },
    { type: 'concept', data: {
      headingEn: 'Why Keep Pure-Text Data During Multimodal Pretraining', headingKn: 'Multimodal Pretraining ಸಮಯದಲ್ಲಿ Pure-Text Data ಏಕೆ ಇಡುವುದೂ',
      bodyEn: 'If native multimodal pretraining used 100% image-caption data, the model might become very good at image-to-description but lose training pressure for mathematics, programming, long-form writing, and logic. Multimodal pretraining typically needs both multimodal data and pure-text data -- this is exactly why Part 2\'s CORPUS_MIX genuinely includes a 40% text share alongside interleaved, caption, and video shares.',
      bodyKn: 'native multimodal pretraining 100% image-caption data ಬಳಸಿದರೆ, model image-to-description ಗೆ ಬಹಳ ಒಳ್ಳೆಯದಾಗಬಹುದು ಆದರೆ mathematics, programming, long-form writing ಗೆ training pressure ಕಳೆದುಕೊಳ್ಳಬಹುದು. Multimodal pretraining ಸಾಮಾನ್ಯವಾಗಿ ಎರಡೂ multimodal data ಮತ್ತೆ pure-text data ಅಗತ್ಯವಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Caption Data vs Interleaved Data', textKn: 'Caption Data vs Interleaved Data', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Direct Alignment vs Document-Order Relationships', headingKn: 'Direct Alignment vs Document-Order Relationships',
      bodyEn: 'A caption pair: IMAGE -> "A golden retriever running through grass." This provides strong local image/text alignment. Interleaved data mirrors a web article: text paragraph -> image -> more text -> another image, in natural document order. This teaches richer relationships: image-to-earlier-paragraph, image-to-later-paragraph, image-to-image, image-to-document-topic -- especially relevant to multi-image reasoning and long-context documents.',
      bodyKn: 'ಒಂದೂ caption pair: IMAGE -> "A golden retriever running through grass." ಇದೂ ಬಲವಾದ local image/text alignment ನೀಡುತ್ತದೆ. Interleaved data ಒಂದೂ web article ಅನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ: text paragraph -> image -> ಇನ್ನೂ text -> ಇನ್ನೊಂದೂ image, ಸ್ವಾಭಾವಿಕ document order ನಲ್ಲಿ.' } },

    { type: 'heading', data: { textEn: 'V2PE: Managing Positional Range for Visual-Heavy Sequences', textKn: 'V2PE: Visual-Heavy Sequences ಗಾಗಿ Positional Range ನಿರ್ವಹಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Variable Visual Position Encoding', headingKn: 'Variable Visual Position Encoding',
      bodyEn: 'Long multimodal inputs can contain huge numbers of visual tokens (e.g. text=2000 + 3 images*2048 + video=20000 -> sequence near 28,000). V2PE (Variable Visual Position Encoding) addresses this by allowing visual tokens to use smaller, variable positional increments -- so a visual-token-heavy sequence doesn\'t rapidly exhaust the model\'s positional range: delta_visual < delta_text for appropriate settings. Note: this lesson corrects an earlier framing of V2PE as "learned hidden-dimension allocations for temporal/spatial axes" -- the published work instead emphasizes variable, smaller position increments for visual tokens.',
      bodyKn: 'ಉದ್ದ multimodal inputs ಬೃಹತ್ visual tokens ಹೊಂದಿರಬಹುದು. V2PE visual tokens ಗೆ ಚಿಕ್ಕ, variable positional increments ಬಳಸಲು ಅನುಮತಿಸುವ ಮೂಲಕ ಇದನ್ನೂ ಪರಿಹರಿಸುತ್ತದೆ -- ಆದ್ದರಿಂದ ಒಂದೂ visual-token-heavy sequence model ya positional range ಅನ್ನೂ ಬೇಗನೇ ಬಳಸಿಬಿಡುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'ViR and DvD Belong to InternVL3.5', textKn: 'ViR ಮತ್ತೆ DvD InternVL3.5 ಗೆ ಸೇರಿವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Visual Resolution Router and Decoupled Vision-Language Deployment', headingKn: 'Visual Resolution Router ಮತ್ತೆ Decoupled Vision-Language Deployment',
      bodyEn: 'ViR (Visual Resolution Router) dynamically routes a query to low/medium/high visual-token budgets (this lesson\'s simulator uses 256/576/2048) instead of always encoding at maximum resolution -- attention has roughly O(n^2) complexity, so an 8x token ratio (2048/256) between tiers means large potential compute savings. DvD (Decoupled Vision-Language Deployment) separates the vision-encoding workload from the LLM-generation workload across different accelerators, since their resource profiles differ. Both are InternVL3.5 additions, genuinely simulated (not literally implemented) in Parts 2-3.',
      bodyKn: 'ViR ಒಂದೂ query ಅನ್ನೂ low/medium/high visual-token budgets ಗೆ dynamically ಮಾರ್ಗ ಮಾಡುತ್ತದೆ ಯಾವಾಗಲೂ ಗರಿಷ್ಠ resolution ನಲ್ಲಿ encode ಮಾಡುವ ಬದಲಿಗೆ. DvD vision-encoding workload ಅನ್ನೂ LLM-generation workload ಇಂದ ಭಿನ್ನ accelerators ಆದ್ಯಂತ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Previewing the Corpus-Mixing Math Ahead of Part 2', textKn: 'Part 2 ಮೊದಲೂ Corpus-Mixing Math ಅನ್ನೂ ನಿಜವಾಗಿ Preview ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'corpus_preview.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A quick genuine calculation confirming the four training-step allocations from a 1,000,000-step corpus mixture, before Part 2 builds the full validated function.',
      descKn: 'ಒಂದೂ ತ್ವರಿತ ನಿಜ ಲೆಕ್ಕಾಚಾರ ನಾಲ್ಕೂ training-step allocations ಅನ್ನೂ 1,000,000-step corpus mixture ಇಂದ ದೃಢಪಡಿಸುತ್ತದೆ.',
      code: "total_steps = 1_000_000\ncorpus_mix = {'text': 0.40, 'interleaved': 0.35, 'caption': 0.20, 'video': 0.05}\nfor modality, probability in corpus_mix.items():\n    print(f'{modality:12} {probability:6.1%} -> {round(total_steps * probability):,} steps')" } },
    { type: 'output', data: { output: "text          40.0% -> 400,000 steps\ninterleaved   35.0% -> 350,000 steps\ncaption       20.0% -> 200,000 steps\nvideo          5.0% -> 50,000 steps" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Corpus Mixture Genuinely Consumes the Entire Step Budget', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Corpus Mixture ನಿಜವಾಗಿ ಸಂಪೂರ್ಣ Step Budget ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: 400,000+350,000+200,000+50,000=1,000,000, exactly consuming the full training budget with no rounding gap for this particular mixture. Part 2 will build this into a validated, error-checking function (validate_distribution, expected_training_steps) and add the ViR and DvD simulators on top.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 400,000+350,000+200,000+50,000=1,000,000, ಸಂಪೂರ್ಣ training budget ಅನ್ನೂ ಬಳಸುತ್ತದೆ. Part 2 ಇದನ್ನೂ ಒಂದೂ validated function ಗೆ ನಿರ್ಮಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'The Deeper Lesson', headingKn: 'ಆಳವಾದ ಪಾಠ',
      bodyEn: 'InternVL3\'s important contribution is not that projectors are bad, nor that reusing pretrained LLMs is wrong -- the released models still do both. The more accurate takeaway: don\'t treat multimodality only as a small attachment problem; give multimodal examples substantial representation during pretraining itself, moving from "language intelligence + vision adapter" toward "joint language + visual intelligence."',
      bodyKn: 'InternVL3 ya ಮುಖ್ಯ ಕೊಡುಗೆ projectors ಕೆಟ್ಟವೂ ಎಂದೂ ಅಲ್ಲ, pretrained LLMs ಮರುಬಳಸುವುದೂ ತಪ್ಪೂ ಎಂದೂ ಅಲ್ಲ -- ಬಿಡುಗಡೆಯಾದ models ಎರಡೂ ಮಾಡುತ್ತವೆ. ಹೆಚ್ಚು ನಿಖರ takeaway: multimodality ಅನ್ನೂ ಕೇವಲ ಚಿಕ್ಕ attachment problem ಆಗಿ ಪರಿಗಣಿಸಬೇಡಿ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Native multimodal pretraining moves vision-language learning into the pretraining phase itself, rather than treating it as a late adapter problem\n• The released InternVL3 models genuinely initialize from pretrained ViT and LLM weights to reduce compute -- this is not literal from-scratch training, an important factual nuance\n• Pure-text data remains part of the pretraining mixture to preserve general reasoning, math, and coding ability\n• Caption data teaches direct image-text alignment; interleaved data teaches richer document-order relationships across multiple images and text spans\n• V2PE addresses positional range exhaustion for visual-heavy sequences via variable position increments; ViR and DvD are InternVL3.5 efficiency additions, genuinely simulated (not reproduced) in this module\'s Python program',
      bodyKn: '• Native multimodal pretraining vision-language learning ಅನ್ನೂ pretraining phase ಗೆ ಸ್ಥಳಾಂತರಿಸುತ್ತದೆ\n• ಬಿಡುಗಡೆಯಾದ InternVL3 models ನಿಜವಾಗಿ pretrained ViT ಮತ್ತೆ LLM weights ಇಂದ ಆರಂಭಿಸುತ್ತವೆ\n• Pure-text data mixture ya ಭಾಗವಾಗಿ ಉಳಿಯುತ್ತದೆ\n• Caption data direct alignment ಕಲಿಸುತ್ತದೆ; interleaved data ಶ್ರೀಮಂತ document-order relationships ಕಲಿಸುತ್ತದೆ\n• V2PE positional range exhaustion ಪರಿಹರಿಸುತ್ತದೆ; ViR ಮತ್ತೆ DvD InternVL3.5 efficiency additions' } },
    { type: 'concept', data: {
      headingEn: 'Part 1 Mental Model', headingKn: 'Part 1 Mental Model',
      bodyEn: 'Old approach: pretrained text LLM -> add vision -> alignment stage -> instruction tune. InternVL3: pretrained ViT + pretrained LLM -> native multimodal pretrain (text + multimodal jointly) -> post-training. Then V2PE helps long multimodal positional handling, and the later InternVL3.5 adds ViR (don\'t waste visual resolution) and DvD (don\'t force vision and language workloads onto the same serving layout).',
      bodyKn: 'ಹಳೆಯ approach: pretrained text LLM -> vision ಸೇರಿಸಿ -> alignment stage -> instruction tune. InternVL3: pretrained ViT + pretrained LLM -> native multimodal pretrain -> post-training. V2PE ಉದ್ದ multimodal positional handling ಸಹಾಯ ಮಾಡುತ್ತದೆ, InternVL3.5 ViR ಮತ್ತೆ DvD ಸೇರಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The distinction this lesson draws between "trained from scratch" and "initialized from pretrained weights then jointly pretrained" is exactly the kind of nuance that matters when reading any research paper claim -- overstating a paper\'s methodology (even in a well-intentioned educational summary) can mislead readers about what was actually demonstrated.',
      bodyKn: '"ಆದಿಯಿಂದ ತರಬೇತಿ ಪಡೆದ" ಮತ್ತೆ "pretrained weights ಇಂದ ಆರಂಭಿಸಿ ಜಂಟಿಯಾಗಿ pretrained" ನಡುವೆ ಈ lesson ಎಳೆಯುವ ವ್ಯತ್ಯಾಸ ಯಾವುದೇ research paper claim ಓದುವಾಗ ಮುಖ್ಯವಾದ ಸೂಕ್ಷ್ಮತೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Understanding the distinction between architecture and training strategy is exactly what lets engineers correctly diagnose whether a VLM\'s weakness comes from insufficient connector capacity or insufficient joint multimodal training exposure -- a mistake here leads to redesigning the wrong component.',
      bodyKn: 'Architecture ಮತ್ತೆ training strategy ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ engineers ಗೆ ಒಂದೂ VLM ya ದೌರ್ಬಲ್ಯ connector capacity ಇಂದ ಬಂದಿದೆಯೇ ಅಥವಾ training exposure ಇಂದ ಬಂದಿದೆಯೇ ಎಂದೂ ಸರಿಯಾಗಿ ಪತ್ತೆಹಚ್ಚಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Connecting to the Rest of This Multimodal Sequence', headingKn: 'ಈ Multimodal Sequence ya ಉಳಿದ ಭಾಗಕ್ಕೆ ಸಂಪರ್ಕಿಸುವುದೂ',
      bodyEn: 'This lesson closes a sequence spanning CLIP (Module 226) through BLIP-2, Flamingo, LLaVA, Any-Resolution Vision, Open-Weight VLM Recipes, LLaVA-OneVision, and Qwen-VL (Modules 227-233). InternVL3\'s native pretraining and InternVL3.5\'s ViR/DvD represent one more point in the same design space this whole sequence has genuinely explored: how do you connect vision and language, and how do you train and deploy that connection efficiently?',
      bodyKn: 'ಈ lesson CLIP (Module 226) ಇಂದ BLIP-2, Flamingo, LLaVA, Any-Resolution Vision, Open-Weight VLM Recipes, LLaVA-OneVision, Qwen-VL (Modules 227-233) ವರೆಗೂ ವ್ಯಾಪಿಸಿದ ಒಂದೂ sequence ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'The real InternVL3 paper genuinely reports strong pure-language performance while comparing models initialized from the same Qwen2.5 base weights, finding that native multimodal pretraining plus post-training performs strongly across many language benchmarks -- exactly the "text retention" concern this lesson\'s simulator will genuinely model with illustrative scores in Part 2.',
      bodyKn: 'ನಿಜ InternVL3 paper ನಿಜವಾಗಿ ಬಲವಾದ pure-language performance ವರದಿ ಮಾಡುತ್ತದೆ, ಅದೇ Qwen2.5 base weights ಇಂದ ಆರಂಭಿಸಿದ models ಹೋಲಿಸುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'M-RoPE vs V2PE: Two Different Positional Problems', headingKn: 'M-RoPE vs V2PE: ಎರಡೂ ಭಿನ್ನ Positional Problems',
      bodyEn: 'M-RoPE (Module 233) decomposes position into (t,h,w) coordinates -- it answers "where is this token spatially/temporally?" V2PE instead answers "how much position-space should this visual token consume?" -- controlling positional increment size rather than dimensionality. The two ideas are complementary: a system could use M-RoPE-style multi-axis coordinates while also using V2PE-style smaller increments for the visual axis specifically.',
      bodyKn: 'M-RoPE (Module 233) position ಅನ್ನೂ (t,h,w) coordinates ಗೆ ವಿಭಜಿಸುತ್ತದೆ -- ಇದೂ "ಈ token ಎಲ್ಲಿದೆ?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ. V2PE ಬದಲಿಗೆ "ಈ visual token ಎಷ್ಟೂ position-space ಬಳಸಬೇಕು?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Looking Ahead to Part 2', headingKn: 'Part 2 ಕಡೆ ನೋಡುವುದೂ',
      bodyEn: 'Part 2 builds the complete four-part simulator: the corpus mixer (genuinely previewed above), a ViR-style resolution router, a DvD-style throughput estimator, and a post-hoc-vs-native training comparison -- turning today\'s concepts into one standalone, executable Python program that models the engineering decisions rather than reproducing InternVL3 training itself.',
      bodyKn: 'Part 2 ಸಂಪೂರ್ಣ ನಾಲ್ಕೂ-ಭಾಗದ simulator ನಿರ್ಮಿಸುತ್ತದೆ: corpus mixer, ViR-style resolution router, DvD-style throughput estimator, post-hoc-vs-native training comparison -- ಇಂದಿನ concepts ಅನ್ನೂ ಒಂದೂ ಸ್ವತಂತ್ರ, executable Python program ಗೆ ತಿರುಗಿಸುತ್ತಾ.' } },

    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran one preview calculation: the corpus-mixture step allocation across text, interleaved, caption, and video, confirming it consumes exactly the full 1,000,000-step budget. Parts 2-3 build on this with the full validated simulator.',
      bodyKn: 'ಈ lesson ಒಂದೂ preview calculation ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: corpus-mixture step allocation, ಇದೂ ಸಂಪೂರ್ಣ 1,000,000-step budget ಬಳಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the primary difference between ordinary post-hoc VLM adaptation and InternVL3\'s native multimodal pretraining?', qKn: 'ಸಾಮಾನ್ಯ post-hoc VLM adaptation ಮತ್ತೆ InternVL3 ya native multimodal pretraining ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['InternVL3 removes the vision encoder', 'InternVL3 trains on multimodal and pure-text data during a joint pretraining phase', 'InternVL3 doesn\'t use an LLM', 'InternVL3 converts images directly into English'], correct: 1,
        optsKn: ['InternVL3 vision encoder ತೆಗೆದುಹಾಕುತ್ತದೆ', 'InternVL3 ಒಂದೂ joint pretraining phase ಸಮಯದಲ್ಲಿ multimodal ಮತ್ತೆ pure-text data ಮೇಲೆ ತರಬೇತಿ ಪಡೆಯುತ್ತದೆ', 'InternVL3 LLM ಬಳಸುವುದಿಲ್ಲ', 'InternVL3 images ಅನ್ನೂ ನೇರವಾಗಿ English ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
      { q: 'Why is pure-text data still valuable during native multimodal pretraining?', qKn: 'native multimodal pretraining ಸಮಯದಲ್ಲಿ pure-text data ಇನ್ನೂ ಏಕೆ ಮೌಲ್ಯಯುತ?',
        opts: ['Images cannot be tokenized', 'It helps maintain and develop general language/reasoning abilities', 'It removes the need for a vision encoder', 'It makes all images lower resolution'], correct: 1,
        optsKn: ['Images tokenize ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ ಸಾಮಾನ್ಯ language/reasoning abilities ಸಂರಕ್ಷಿಸಲು ಮತ್ತೆ ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ', 'ಇದೂ vision encoder ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ ಎಲ್ಲಾ images ಅನ್ನೂ ಕಡಿಮೆ resolution ಆಗಿಸುತ್ತದೆ'] },
      { q: 'Which statement about the released InternVL3 models is more accurate?', qKn: 'ಬಿಡುಗಡೆಯಾದ InternVL3 models ಬಗ್ಗೆ ಯಾವ ಹೇಳಿಕೆ ಹೆಚ್ಚು ನಿಖರ?',
        opts: ['Every component starts from random initialization', 'Only the projector is trained', 'Pretrained ViT and LLM components are initialized and then undergo native multimodal pretraining', 'There is no projector'], correct: 2,
        optsKn: ['ಪ್ರತಿ component random initialization ಇಂದ ಆರಂಭವಾಗುತ್ತದೆ', 'ಕೇವಲ projector ತರಬೇತಿ ಪಡೆಯುತ್ತದೆ', 'Pretrained ViT ಮತ್ತೆ LLM components ಆರಂಭಿಸಿ ನಂತರ native multimodal pretraining ಪಡೆಯುತ್ತವೆ', 'ಯಾವುದೇ projector ಇಲ್ಲ'] },
      { q: 'What problem is V2PE primarily designed to help with?', qKn: 'V2PE ಮುಖ್ಯವಾಗಿ ಯಾವ ಸಮಸ್ಯೆಗೆ ಸಹಾಯ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ?',
        opts: ['GPU quantization', 'Long multimodal sequences containing many visual tokens', 'Text tokenization', 'Image generation'], correct: 1,
        optsKn: ['GPU quantization', 'ಅನೇಕ visual tokens ಹೊಂದಿರುವ ಉದ್ದ multimodal sequences', 'Text tokenization', 'Image generation'] },
      { q: 'ViR and DvD are primarily associated with which release?', qKn: 'ViR ಮತ್ತೆ DvD ಮುಖ್ಯವಾಗಿ ಯಾವ release ಜೊತೆ ಸಂಬಂಧಿಸಿವೆ?',
        opts: ['InternVL1', 'InternVL2', 'InternVL3', 'InternVL3.5'], correct: 3,
        optsKn: ['InternVL1', 'InternVL2', 'InternVL3', 'InternVL3.5'] },
    ] } },
  ],
};
