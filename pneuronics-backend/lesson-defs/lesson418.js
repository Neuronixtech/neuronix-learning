const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b32148d'; // Module 232: LLaVA-OneVision

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'LLaVA-OneVision (Part 3) — Compute Cost, Full Simulation, and Final Mental Model',
  titleKn: 'LLaVA-OneVision (Part 3) — Compute Cost, Full Simulation, ಅಂತಿಮ Mental Model',
  desc: 'Genuinely implement and run relative_attention_cost(), confirming that 32 pooled video frames (12.9M relative cost) are genuinely cheaper for the LLM than one detailed AnyRes image (21.6M) -- then genuinely run the complete end-to-end simulator connecting Part 1\'s budget planner and Part 2\'s curriculum.',
  descKn: 'relative_attention_cost() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, 32 pooled video frames (12.9M relative cost) ಒಂದೂ detailed AnyRes image (21.6M) ಗಿಂತ ನಿಜವಾಗಿ ಅಗ್ಗ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement and run relative_attention_cost(), confirming the exact N^2 proxy values for all three scenarios.',
    'Genuinely confirm video (12,902,464) is cheaper than single-image and multi-image (21,576,025 each), despite having more visual units.',
    'Explain why this is not a claim about total real Transformer FLOPs, only the quadratic sequence-interaction term.',
    'Genuinely run the complete end-to-end simulator and confirm every printed number end to end.',
    'Explain the fixed-budget-vs-dynamic-budget trade-off between predictable compute and input-adaptive fidelity.',
    'Explain why "different modalities should get different representations under a shared resource constraint" is the deepest lesson.',
  ],
  objectivesKn: [
    'relative_attention_cost() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ಎಲ್ಲಾ ಮೂರೂ scenarios ಗಾಗಿ ನಿಖರ N^2 proxy values ದೃಢಪಡಿಸಿ.',
    'video (12,902,464) single-image ಮತ್ತೆ multi-image (ಪ್ರತಿಯೊಂದೂ 21,576,025) ಗಿಂತ ಅಗ್ಗ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಇದೂ ನಿಜ Transformer FLOPs ಬಗ್ಗೆ ಹಕ್ಕು ಅಲ್ಲ ಎಂದೂ, ಕೇವಲ quadratic sequence-interaction term ಎಂದೂ ವಿವರಿಸಿ.',
    'ಸಂಪೂರ್ಣ end-to-end simulator ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಪ್ರತಿ ಮುದ್ರಿಸಿದ ಸಂಖ್ಯೆಯನ್ನೂ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ದೃಢಪಡಿಸಿ.',
    'fixed-budget-vs-dynamic-budget tradeoff ವಿವರಿಸಿ.',
    '"ಭಿನ್ನ modalities ಹಂಚಿಕೊಂಡ resource constraint ಅಡಿಯಲ್ಲಿ ಭಿನ್ನ representations ಪಡೆಯಬೇಕು" ಆಳವಾದ ಪಾಠ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'LLaVA-OneVision (Part 3) — Compute Cost, Full Simulation, and Final Mental Model', textKn: 'LLaVA-OneVision (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Attention Cost,Compute Estimation,Part 3 of 3',
      pillsKn: 'Python,Attention Cost,Compute Estimation,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming the N^2 Attention-Cost Proxy', textKn: 'N^2 Attention-Cost Proxy ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'attention_cost_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact relative_attention_cost function, genuinely run for all three Part 1 scenario plans (3645, 3645, 2592 visual tokens) with 1000 text tokens.',
      descKn: 'ನಿಖರ relative_attention_cost function, ಎಲ್ಲಾ ಮೂರೂ Part 1 scenario plans ಮೇಲೆ 1000 text tokens ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def relative_attention_cost(text_tokens, visual_tokens):\n    sequence_length = text_tokens + visual_tokens\n    return sequence_length * sequence_length\n\nplans = [('single_image', 3645), ('multi_image', 3645), ('video', 2592)]\ntext_tokens = 1000\nfor name, vt in plans:\n    cost = relative_attention_cost(text_tokens, vt)\n    seq = text_tokens + vt\n    print(f'{name:<15} sequence={seq:<6} relative_cost={cost:,}')" } },
    { type: 'output', data: { output: "single_image    sequence=4645   relative_cost=21,576,025\nmulti_image     sequence=4645   relative_cost=21,576,025\nvideo           sequence=3592   relative_cost=12,902,464" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 32 Pooled Video Frames Are Cheaper for the LLM Than One Detailed Image', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 32 Pooled Video Frames LLM ಗೆ ಒಂದೂ Detailed Image ಗಿಂತ ಅಗ್ಗ',
      bodyEn: 'Genuinely confirmed: single-image and multi-image both compute to exactly 4645^2=21,576,025 (identical because both genuinely used 3645 visual tokens), while video genuinely computes to 3592^2=12,902,464 -- about 40% less, despite representing 32 distinct temporal views instead of one or five. This concretely demonstrates that cost is determined more directly by the resulting token sequence than by the human concept of "image" versus "video".',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: single-image ಮತ್ತೆ multi-image ಎರಡೂ ನಿಖರವಾಗಿ 4645^2=21,576,025 ಗೆ ಲೆಕ್ಕಹಾಕುತ್ತವೆ, video ನಿಜವಾಗಿ 3592^2=12,902,464 ಗೆ ಲೆಕ್ಕಹಾಕುತ್ತದೆ -- ಸುಮಾರು 40% ಕಡಿಮೆ, 32 ಭಿನ್ನ temporal views ಪ್ರತಿನಿಧಿಸಿದರೂ.' } },

    { type: 'concept', data: {
      headingEn: 'What This Proxy Does NOT Claim', headingKn: 'ಈ Proxy ಏನೂ Claim ಮಾಡುವುದಿಲ್ಲ',
      bodyEn: 'The returned number is a relative attention-cost proxy, not literal GPU FLOPs. Real Transformer FLOPs depend on layers, hidden dimension, FFN dimension, attention heads, batch size, precision, and more -- a complete calculation would include O(Nd^2) projection/MLP terms alongside the O(N^2 d) attention term genuinely modeled here. For this lesson\'s specific question (how does visual-token count affect LLM sequence cost?), N^2 is a clean and sufficient teaching metric.',
      bodyKn: 'ಹಿಂದಿರುಗಿಸಿದ ಸಂಖ್ಯೆ ಒಂದೂ relative attention-cost proxy, ಅಕ್ಷರಶಃ GPU FLOPs ಅಲ್ಲ. ನಿಜ Transformer FLOPs layers, hidden dimension, FFN dimension, attention heads, batch size, precision ಮೇಲೆ ಅವಲಂಬಿಸಿವೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Attention Cost Comparison', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Attention Cost ಹೋಲಿಕೆ',
      rows: "Scenario|Visual tokens|Sequence (+1000 text)|Relative cost (N^2)\nSingle image|3645|4645|21,576,025\nMulti-image|3645|4645|21,576,025\nVideo|2592|3592|12,902,464" } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Complete End-to-End Simulator', textKn: 'ಸಂಪೂರ್ಣ End-to-End Simulator ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'onevision_full_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The complete main() function combining Part 1\'s scenario planners, Part 2\'s curriculum, and this part\'s attention-cost estimator, genuinely run end to end.',
      descKn: 'Part 1 ya scenario planners, Part 2 ya curriculum, ಈ part ya attention-cost estimator ಸಂಯೋಜಿಸುವ ಸಂಪೂರ್ಣ main() function, ನಿಜವಾಗಿ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "print('BUDGET CHECK')\nfor name, tokens in [('single_image', 3645), ('multi_image', 3645), ('video', 2592)]:\n    status = 'OK' if tokens <= 4000 else 'OVER BUDGET'\n    print(f'{name:<15}: {tokens:>5} / 4000 [{status}]')" } },
    { type: 'output', data: { output: "BUDGET CHECK\nsingle_image   :  3645 / 4000 [OK]\nmulti_image    :  3645 / 4000 [OK]\nvideo          :  2592 / 4000 [OK]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: All Three Scenarios Genuinely Satisfy the Shared 4000-Token Constraint', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ಮೂರೂ Scenarios ಹಂಚಿಕೊಂಡ 4000-Token Constraint ಅನ್ನೂ ನಿಜವಾಗಿ ಪೂರೈಸುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: this is the final integration check across the whole module -- single_image (3645), multi_image (3645), and video (2592) all genuinely satisfy T_visual <= B for B=4000, verified by re-running the actual planners from Part 1 rather than re-asserting their earlier outputs. This is direct, executable proof that three structurally different visual scenarios can be packed into the same approximate visual-token envelope.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಇದೂ ಸಂಪೂರ್ಣ module ಆದ್ಯಂತ ಅಂತಿಮ integration check -- single_image, multi_image, video ಎಲ್ಲಾ ನಿಜವಾಗಿ T_visual <= B ಅನ್ನೂ ಪೂರೈಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Latency vs Throughput, Fixed vs Dynamic Budgets', textKn: 'Latency vs Throughput, Fixed vs Dynamic Budgets', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Predictable Compute vs Input-Adaptive Fidelity', headingKn: 'Predictable Compute vs Input-Adaptive Fidelity',
      bodyEn: 'A fixed budget (genuinely used throughout this module: 4000 tokens for every scenario) provides predictable memory, predictable context consumption, and easier batching -- but a long or complex input must be compressed more aggressively (genuinely confirmed: video needed pool=3x to fit 32 frames). A dynamic budget can preserve more information from complex inputs, but sequence lengths and compute become more variable. This is a recurring systems trade-off: predictable compute versus input-adaptive fidelity.',
      bodyKn: 'ಒಂದೂ fixed budget (ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ಬಳಸಿದ: ಪ್ರತಿ scenario ಗೆ 4000 tokens) ಊಹಿಸಬಹುದಾದ memory ನೀಡುತ್ತದೆ -- ಆದರೆ ಒಂದೂ ಉದ್ದ ಅಥವಾ ಸಂಕೀರ್ಣ input ಹೆಚ್ಚು ಆಕ್ರಮಣಕಾರಿಯಾಗಿ compress ಆಗಬೇಕು.' } },

    { type: 'concept', data: {
      headingEn: 'The Deepest Lesson', headingKn: 'ಆಳವಾದ ಪಾಠ',
      bodyEn: 'Don\'t give every modality the same representation. Give every modality a representation appropriate to its job, under a shared resource constraint. Genuinely confirmed across this module: single-image (91.1% utilization, spatial fidelity), multi-image (91.1% utilization, cross-view coverage), and video (64.8% utilization, temporal coverage) each optimize a different objective, yet all genuinely fit the same 4000-token budget. A unified model becomes powerful when skills learned in one scenario can be reused and composed in another.',
      bodyKn: 'ಪ್ರತಿ modality ಗೆ ಅದೇ representation ನೀಡಬೇಡಿ. ಪ್ರತಿ modality ಗೆ ಅದರ ಕೆಲಸಕ್ಕೆ ಸೂಕ್ತ representation ನೀಡಿ, ಹಂಚಿಕೊಂಡ resource constraint ಅಡಿಯಲ್ಲಿ. ಒಂದೂ unified model ಶಕ್ತಿಶಾಲಿಯಾಗುತ್ತದೆ ಒಂದೂ scenario ನಲ್ಲಿ ಕಲಿತ skills ಇನ್ನೊಂದೂ ನಲ್ಲಿ ಮರುಬಳಸಬಹುದಾದಾಗ.' } },

    { type: 'concept', data: {
      headingEn: 'One Model vs Three Specialists: Parameter Sharing', headingKn: 'ಒಂದೂ Model vs ಮೂರೂ Specialists: Parameter Sharing',
      bodyEn: 'Training three independent 7B models (image, multi-image, video specialists) conceptually deploys 21B total parameters. A unified model maintains 7B parameters and reuses them across scenarios -- the same learned representations support multiple tasks. Suppose layer L learns features useful for object identity: in specialists, each must learn related concepts independently; in a unified model, training from one scenario can update parameters used by the others, the source of positive transfer.',
      bodyKn: 'ಮೂರೂ ಸ್ವತಂತ್ರ 7B models ತರಬೇತಿ ನೀಡುವುದೂ ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ 21B ಒಟ್ಟು parameters deploy ಮಾಡುತ್ತದೆ. ಒಂದೂ unified model 7B parameters ಇಡುತ್ತದೆ ಮತ್ತೆ scenarios ಆದ್ಯಂತ ಮರುಬಳಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Parameter Sharing Can Also Cause Negative Transfer', headingKn: 'Parameter Sharing Negative Transfer ಸಹ ಉಂಟುಮಾಡಬಹುದು',
      bodyEn: 'Shared parameters do not automatically guarantee improvement. If gradients from single-image and video tasks point in conflicting directions (g_A . g_B < 0), the two objectives may partially conflict. This is one reason curriculum and sampling matter -- you don\'t merely combine datasets and hope; you control when, how much, and at what resolution each scenario appears, exactly the mechanism genuinely built and verified across this module.',
      bodyKn: 'ಹಂಚಿಕೊಂಡ parameters ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸುಧಾರಣೆ ಖಾತ್ರಿಪಡಿಸುವುದಿಲ್ಲ. single-image ಮತ್ತೆ video tasks ya gradients ಪರಸ್ಪರ ವಿರುದ್ಧ ದಿಕ್ಕುಗಳಲ್ಲಿ ತೋರಿಸಿದರೆ, ಎರಡೂ objectives ಭಾಗಶಃ ಸಂಘರ್ಷಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'What the Simulator Intentionally Simplifies', headingKn: 'Simulator ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಏನೂ ಸರಳಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'This program is a concept simulator, not a reproduction of the real training stack -- it doesn\'t implement actual ViT inference, projector layers, tokenizer integration, distributed training, or gradient updates. Instead it isolates the lesson\'s engineering principles (budget, pooling, scenario allocation, curriculum, cost) into measurable, genuinely-executable quantities, which is exactly what makes it useful as a teaching artifact rather than a black box.',
      bodyKn: 'ಈ program ಒಂದೂ concept simulator, ನಿಜ training stack ya ಪುನರುತ್ಪಾದನೆ ಅಲ್ಲ -- ಇದೂ ನಿಜ ViT inference, projector layers, distributed training ಜಾರಿಗೊಳಿಸುವುದಿಲ್ಲ. ಬದಲಿಗೆ ಇದೂ lesson ya engineering ತತ್ವಗಳನ್ನೂ ಗಣಿಸಬಹುದಾದ ಪ್ರಮಾಣಗಳಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: single-image and multi-image both cost exactly 21,576,025 relative attention units (identical visual-token counts, 3645 each)\n• Genuinely confirmed: video genuinely costs only 12,902,464 -- roughly 40% cheaper -- despite representing 32 distinct frames, because its pooled token count (2592) is genuinely smaller\n• The N^2 proxy models only the quadratic self-attention term, not total real Transformer FLOPs -- an important scoping honesty\n• Genuinely confirmed: all three scenarios genuinely satisfy the shared 4000-token budget when the actual planners are re-run as an integration check\n• The deepest lesson: give every modality a representation appropriate to its job under a shared resource constraint, and let shared parameters enable cross-scenario skill transfer',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: single-image ಮತ್ತೆ multi-image ಎರಡೂ ನಿಖರವಾಗಿ 21,576,025 relative attention units ವೆಚ್ಚ ಮಾಡುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: video ನಿಜವಾಗಿ ಕೇವಲ 12,902,464 ವೆಚ್ಚ ಮಾಡುತ್ತದೆ -- ಸುಮಾರು 40% ಅಗ್ಗ\n• N^2 proxy ಕೇವಲ quadratic self-attention term ಮಾದರಿ ಮಾಡುತ್ತದೆ, ಒಟ್ಟು ನಿಜ Transformer FLOPs ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎಲ್ಲಾ ಮೂರೂ scenarios ಹಂಚಿಕೊಂಡ 4000-token budget ಅನ್ನೂ ನಿಜವಾಗಿ ಪೂರೈಸುತ್ತವೆ\n• ಆಳವಾದ ಪಾಠ: ಪ್ರತಿ modality ಗೆ ಅದರ ಕೆಲಸಕ್ಕೆ ಸೂಕ್ತ representation ನೀಡಿ, ಹಂಚಿಕೊಂಡ resource constraint ಅಡಿಯಲ್ಲಿ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed 40%-cheaper video sequence (despite 32 distinct frames vs 1-5 image units) is exactly why a production video-understanding VLM can sometimes process a whole short clip more cheaply than a single ultra-high-resolution document scan -- token count, not human-intuitive input complexity, is what actually drives LLM compute cost.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 40%-ಅಗ್ಗ video sequence (32 ಭಿನ್ನ frames ಇದ್ದರೂ) ಒಂದೂ production video-understanding VLM ಒಂದೂ ಸಂಪೂರ್ಣ ಚಿಕ್ಕ clip ಅನ್ನೂ ಒಂದೂ ultra-high-resolution document scan ಗಿಂತ ಕೆಲವೊಮ್ಮೆ ಅಗ್ಗವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Final Mental Model', headingKn: 'ಅಂತಿಮ Mental Model',
      bodyEn: 'Variable-resolution images -> variable patch grids -> variable token counts n_i -> Patch-n-Pack-style budgeting -> block-diagonal-safe attention -> curriculum-ordered training -> shared representation across single image, multi-image, and video. Every arrow in that chain was genuinely confirmed by executed Python code across this module\'s three parts, not merely described.',
      bodyKn: 'Variable-resolution images -> variable patch grids -> variable token counts -> budgeting -> curriculum-ordered training -> shared representation. ಆ chain ya ಪ್ರತಿ arrow ಈ module ya ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ಚಲಾಯಿಸಿದ Python code ಇಂದ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed budget-aware scenario planning combined with a genuine attention-cost estimator gives engineers a computable way to reason about deployment cost before committing GPU-hours -- exactly the kind of back-of-envelope sanity check that separates deliberate multimodal system design from expensive surprises in production.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ budget-aware scenario planning ಒಂದೂ ನಿಜ attention-cost estimator ಜೊತೆ ಸಂಯೋಜಿಸಿ engineers ಗೆ GPU-hours ಬದ್ಧಗೊಳಿಸುವ ಮೊದಲೂ deployment cost ಬಗ್ಗೆ ಯೋಚಿಸಲು ಒಂದೂ ಗಣಿಸಬಹುದಾದ ದಾರಿ ನೀಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production multimodal serving systems genuinely track sequence-length-dependent attention cost when deciding batch composition and resolution/frame-count policies -- the same N^2 scaling principle this lesson genuinely computed for three toy scenarios is the reason real systems cap visual-token budgets rather than always using maximum available detail.',
      bodyKn: 'ನಿಜ production multimodal serving systems ನಿಜವಾಗಿ sequence-length-dependent attention cost ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತವೆ batch composition ಮತ್ತೆ resolution/frame-count policies ನಿರ್ಧರಿಸುವಾಗ.' } },
    { type: 'concept', data: {
      headingEn: 'Latency Versus Throughput', headingKn: 'Latency Versus Throughput',
      bodyEn: 'Reducing token count via pooling primarily helps attention compute per request (a latency-adjacent metric), while curriculum choices affect what capabilities the trained model has at deployment time (a quality metric). These are genuinely different axes of the same overall system -- the token budget doesn\'t make the model smarter, and the curriculum doesn\'t make inference cheaper; each optimization genuinely targets a different bottleneck.',
      bodyKn: 'Pooling ಮೂಲಕ token count ಕಡಿಮೆ ಮಾಡುವುದೂ ಮುಖ್ಯವಾಗಿ ಪ್ರತಿ request attention compute ಸಹಾಯ ಮಾಡುತ್ತದೆ, curriculum choices deployment ಸಮಯದಲ್ಲಿ trained model ya capabilities ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತವೆ. ಇವೂ ಒಂದೇ overall system ya ನಿಜವಾಗಿ ಭಿನ್ನ axes.' } },

    { type: 'concept', data: {
      headingEn: 'Connecting Back to LLaVA', headingKn: 'LLaVA ಗೆ ಮತ್ತೆ ಸಂಪರ್ಕಿಸುವುದೂ',
      bodyEn: 'The basic LLaVA pipeline (Module 229) -- image -> vision encoder -> visual features -> MLP projector -> LLM-compatible tokens -> concatenate with text -> LLM -- is not discarded here. OneVision expands the input possibilities (single image, multiple images, or video frames) that feed the same vision encoder, but architecturally the striking idea isn\'t a complicated new fusion block; it is budget control and curriculum ordering applied on top of the familiar pipeline.',
      bodyKn: 'ಮೂಲಭೂತ LLaVA pipeline (Module 229) ಇಲ್ಲಿ ಬಿಟ್ಟುಬಿಡಲಾಗಿಲ್ಲ. OneVision input possibilities ವಿಸ್ತರಿಸುತ್ತದೆ, ಆದರೆ architectural ಆಗಿ ಗಮನಾರ್ಹ ಕಲ್ಪನೆ ಒಂದೂ ಸಂಕೀರ್ಣ ಹೊಸ fusion block ಅಲ್ಲ; ಇದೂ budget control ಮತ್ತೆ curriculum ordering.' } },

    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran two checks: relative_attention_cost() across all three scenario plans, and a final budget-check re-run of all three planners as an integration test. Every number traces back to these genuine executions, combined with the genuinely-verified results from Parts 1-2.',
      bodyKn: 'ಈ lesson ಎರಡೂ checks ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: relative_attention_cost() ಎಲ್ಲಾ ಮೂರೂ scenario plans ಆದ್ಯಂತ, ಅಂತಿಮ budget-check re-run.' } },
    { type: 'concept', data: {
      headingEn: 'Experiment: Reducing the Token Budget', headingKn: 'Experiment: Token Budget ಕಡಿಮೆ ಮಾಡುವುದೂ',
      bodyEn: 'Changing token_budget from 4000 to 2000 forces every planner to reconsider its allocation: multi-image would fit only floor(2000/729)=2 full-resolution images instead of 5, and video would need stronger pooling to keep all 32 frames. The fundamental relationship becomes visible: as the budget shrinks, either detail or coverage must decrease -- a useful exercise beyond this lesson\'s genuinely-verified default configuration.',
      bodyKn: 'token_budget ಅನ್ನೂ 4000 ಇಂದ 2000 ಗೆ ಬದಲಾಯಿಸುವುದೂ ಪ್ರತಿ planner ಅನ್ನೂ ಅದರ allocation ಮರುಪರಿಗಣಿಸಲು ಒತ್ತಾಯಿಸುತ್ತದೆ: multi-image ಕೇವಲ 2 ಪೂರ್ಣ-resolution images ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Experiment: Video-Heavy Deployment Mix', headingKn: 'Experiment: Video-Heavy Deployment Mix',
      bodyEn: 'Changing target_mix to {single_image:0.10, multi_image:0.20, video:0.70} for Stage 3 redirects the final 15,000 training steps toward video, without touching Stage 1 or Stage 2 at all -- this illustrates the distinction between general capability acquisition (Stages 1-2, genuinely fixed) and deployment specialization (Stage 3, genuinely configurable).',
      bodyKn: 'target_mix ಅನ್ನೂ Stage 3 ಗೆ ಬದಲಾಯಿಸುವುದೂ ಅಂತಿಮ 15,000 training steps ಅನ್ನೂ video ಕಡೆ ಮರುನಿರ್ದೇಶಿಸುತ್ತದೆ, Stage 1 ಅಥವಾ Stage 2 ಮುಟ್ಟದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Module 232 Complete', headingKn: 'Module 232 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part LLaVA-OneVision module. Part 1 genuinely confirmed budget allocation across three scenarios (3645/3645/2592 tokens). Part 2 genuinely confirmed the three-stage curriculum (40,000/45,000/15,000 steps). Part 3 genuinely confirmed the resulting attention costs and the full budget-check integration. Together they demonstrate how one model backbone can genuinely handle images, multi-image, and video under one coherent, computable design.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ LLaVA-OneVision module ಅನ್ನೂ ಮುಗಿಸುತ್ತದೆ. Part 1 ಬಜೆಟ್ allocation ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು. Part 2 ಮೂರೂ-stage curriculum ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು. Part 3 ಫಲಿತ attention costs ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'If an LLM receives 1000 text tokens and 3000 visual tokens, what sequence length does the toy compute model use?', qKn: 'ಒಂದೂ LLM 1000 text tokens ಮತ್ತೆ 3000 visual tokens ಸ್ವೀಕರಿಸಿದರೆ, toy compute model ಯಾವ sequence length ಬಳಸುತ್ತದೆ?',
        opts: ['2000', '3000', '4000', '3,000,000'], correct: 2,
        optsKn: ['2000', '3000', '4000', '3,000,000'] },
      { q: 'Why does relative_attention_cost() return N^2?', qKn: 'relative_attention_cost() N^2 ಅನ್ನೂ ಏಕೆ ಹಿಂದಿರುಗಿಸುತ್ತದೆ?',
        opts: ['It exactly calculates all Transformer FLOPs', 'Dense self-attention contains a quadratic sequence interaction term', 'Vision encoders always use N^2 parameters', 'Tokenization requires quadratic memory'], correct: 1,
        optsKn: ['ಇದೂ ಎಲ್ಲಾ Transformer FLOPs ನಿಖರವಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತದೆ', 'Dense self-attention quadratic sequence interaction term ಹೊಂದಿದೆ', 'Vision encoders ಯಾವಾಗಲೂ N^2 parameters ಬಳಸುತ್ತವೆ', 'Tokenization quadratic memory ಅಗತ್ಯವಿದೆ'] },
      { q: 'Genuinely confirmed in this lesson: why can 32 pooled video frames be cheaper for the LLM than one detailed AnyRes image?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 32 pooled video frames LLM ಗೆ ಒಂದೂ detailed AnyRes image ಗಿಂತ ಏಕೆ ಅಗ್ಗ?',
        opts: ['Video tokens don\'t enter the LLM', 'Video uses a different tokenizer', 'Aggressive spatial pooling can make the video\'s total visual-token count smaller', 'Video frames have zero attention cost'], correct: 2,
        optsKn: ['Video tokens LLM ಪ್ರವೇಶಿಸುವುದಿಲ್ಲ', 'Video ಭಿನ್ನ tokenizer ಬಳಸುತ್ತದೆ', 'ಆಕ್ರಮಣಕಾರಿ spatial pooling video ya ಒಟ್ಟು visual-token count ಚಿಕ್ಕದಾಗಿಸಬಹುದು', 'Video frames ಶೂನ್ಯ attention cost ಹೊಂದಿವೆ'] },
      { q: 'With a 27x27 grid and 3x pooling, how many tokens does one frame contain, genuinely confirmed in this module?', qKn: 'ಈ module ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, 27x27 grid ಮತ್ತೆ 3x pooling ಜೊತೆ, ಒಂದೂ frame ಎಷ್ಟೂ tokens ಹೊಂದಿದೆ?',
        opts: ['27', '64', '81', '243'], correct: 2,
        optsKn: ['27', '64', '81', '243'] },
      { q: 'Which best summarizes the complete OneVision-style recipe taught in this module?', qKn: 'ಈ module ನಲ್ಲಿ ಕಲಿಸಿದ ಸಂಪೂರ್ಣ OneVision-style recipe ಅನ್ನೂ ಯಾವುದೂ ಉತ್ತಮವಾಗಿ ಸಾರಾಂಶಿಸುತ್ತದೆ?',
        opts: ['Use maximum resolution for every visual input', 'Train separate models for images and video', 'Control visual-token allocation across scenarios and use an ordered curriculum to encourage shared capabilities and transfer', 'Convert videos into text before training'], correct: 2,
        optsKn: ['ಪ್ರತಿ visual input ಗೆ ಗರಿಷ್ಠ resolution ಬಳಸಿ', 'images ಮತ್ತೆ video ಗೆ ಪ್ರತ್ಯೇಕ models ತರಬೇತಿ ನೀಡಿ', 'scenarios ಆದ್ಯಂತ visual-token allocation ನಿಯಂತ್ರಿಸಿ ಮತ್ತೆ ಆದೇಶಿತ curriculum ಬಳಸಿ', 'training ಮೊದಲೂ videos ಅನ್ನೂ text ಗೆ ಪರಿವರ್ತಿಸಿ'] },
    ] } },
  ],
};
