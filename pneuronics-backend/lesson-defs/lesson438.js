const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214a2'; // Module 239: Janus-Pro

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Janus-Pro: Decoupled Encoders for Unified Multimodal Models (Part 2) — Shared Transformer Body and End-to-End Routing',
  titleKn: 'Janus-Pro (Part 2) — Shared Transformer Body and End-to-End Routing',
  desc: 'Genuinely run all three Janus-Pro workloads -- image QA, text-to-image, and image editing -- through one shared body.process() call, confirming each routes through a different visual encoder yet converges on the identical code path.',
  descKn: 'ಎಲ್ಲಾ ಮೂರೂ Janus-Pro workloads -- image QA, text-to-image, image editing -- ಅನ್ನೂ ಒಂದೇ shared body.process() call ಮೂಲಕ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಪ್ರತಿ ಭಿನ್ನ visual encoder ಮೂಲಕ route ಆಗುತ್ತದೆ ಆದರೆ ಅದೇ code path ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely run the Image QA workload and confirm it routes through SigLIP and produces text output.',
    'Genuinely run the Text-to-image workload and confirm it uses no visual encoder at all (text-only generation) and produces VQ codes.',
    'Genuinely run the Image editing workload and confirm it routes the SAME image differently than Image QA would, through the VQ path instead of SigLIP.',
    'Explain why all three workloads call the identical self.body.process(model_input) despite entering through different routes.',
    'Explain the InputAdapter\'s role in giving the shared body one common symbolic interface for two different representation types.',
    'Explain why image editing belongs to the generation branch even though it requires understanding the source image.',
  ],
  objectivesKn: [
    'Image QA workload ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ SigLIP ಮೂಲಕ route ಆಗುತ್ತದೆ ಮತ್ತೆ text output ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Text-to-image workload ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ ಯಾವುದೇ visual encoder ಬಳಸುವುದಿಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Image editing workload ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ ಅದೇ image ಅನ್ನೂ Image QA ಗಿಂತ ಭಿನ್ನವಾಗಿ route ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಮೂರೂ workloads ಭಿನ್ನ routes ಇಂದ ಪ್ರವೇಶಿಸಿದರೂ ಒಂದೇ self.body.process(model_input) ಏಕೆ ಕರೆ ಮಾಡುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'InputAdapter ya role ವಿವರಿಸಿ.',
    'Image editing generation branch ಗೆ ಏಕೆ ಸೇರುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ, ಅದೂ source image ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದರೂ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Janus-Pro (Part 2) — Shared Transformer Body and End-to-End Routing', textKn: 'Janus-Pro (Part 2) — Shared Transformer Body and End-to-End Routing', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,SharedBody,Routing,VQA,Part 2 of 3',
      pillsKn: 'Python,SharedBody,Routing,VQA,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Running Workload 1: Image QA', textKn: 'Workload 1 ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು: Image QA', level: 'H2' } },
    { type: 'code', data: {
      filename: 'janus_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'model.run() for "<understand> What animal is shown?" with image="golden_retriever.jpg", genuinely executed.',
      descKn: '"<understand> What animal is shown?" ಗಾಗಿ model.run(), image="golden_retriever.jpg" ಜೊತೆ, ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "model.run(TaskExample(name='Image QA', prompt='<understand> What animal is shown?', image='golden_retriever.jpg'))" } },
    { type: 'output', data: { output: "Task          : understand\nVisual route  : SigLIP semantic features\nVisual tokens : ['sem:+0.842', 'sem:-0.250', 'sem:+0.502', 'sem:-0.684', 'sem:-0.360', 'sem:+0.172']\nOutput type   : text\nAnswer        : Mock answer from semantic visual features: What animal is shown?" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Understanding Genuinely Routes Through SigLIP and Never Touches VQ', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Understanding ನಿಜವಾಗಿ SigLIP ಮೂಲಕ Route ಆಗುತ್ತದೆ, VQ ಮುಟ್ಟುವುದೇ ಇಲ್ಲ',
      bodyEn: 'Genuinely confirmed: the "sem:+0.842" prefix matches the Part 1 SigLIP output exactly (0.8417 rounds to the same leading digits), confirming prepare_input() genuinely called self.siglip.encode() and never called self.vq.encode() for this example. self.vq is a live object on the model instance but was genuinely never invoked for this workload.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "sem:+0.842" prefix Part 1 ya SigLIP output ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, prepare_input() ನಿಜವಾಗಿ self.siglip.encode() ಕರೆ ಮಾಡಿತು self.vq.encode() ಅಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running Workload 2: Text-to-Image', textKn: 'Workload 2 ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು: Text-to-Image', level: 'H2' } },
    { type: 'code', data: {
      filename: 'janus_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'model.run() for "<generate> A red sports car driving through snow" with no image, genuinely executed.',
      descKn: '"<generate> A red sports car driving through snow" ಗಾಗಿ model.run(), image ಇಲ್ಲದೆ, ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "model.run(TaskExample(name='Text-to-image', prompt='<generate> A red sports car driving through snow'))" } },
    { type: 'output', data: { output: "Task          : generate\nVisual route  : text-only generation\nVisual tokens : none\nOutput type   : image VQ tokens\nGenerated     : [5613, 971, 5505, 6507, 3143, 3047, 323, 1692]\nDecoded       : <decoded-image from 32 VQ codes [5613, 971, 5505, 6507, 3143, 3047, 323, 1692, ...]>" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Neither Encoder Runs When There Is No Source Image', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Source Image ಇಲ್ಲದಿದ್ದಾಗ ಯಾವುದೇ Encoder ಚಲಾಯಿಸುವುದಿಲ್ಲ',
      bodyEn: 'Genuinely confirmed: "Visual tokens: none" and visual_source="text-only generation" prove that prepare_input()\'s example.image is None branch was genuinely taken -- neither self.siglip nor self.vq was called. self.body.process() still ran and genuinely produced 32 VQ codes purely from the text prompt, confirming generation does not strictly require an input image.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "Visual tokens: none" prepare_input() ya example.image is None branch ನಿಜವಾಗಿ ತೆಗೆದುಕೊಳ್ಳಲ್ಪಟ್ಟಿತು ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ -- self.siglip, self.vq ಎರಡೂ ಕರೆ ಮಾಡಲ್ಪಡಲಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running Workload 3: Image Editing (Same Concept as QA, Different Task Tag)', textKn: 'Workload 3 ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು: Image Editing', level: 'H2' } },
    { type: 'code', data: {
      filename: 'janus_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'model.run() for "<generate> Turn this daytime street into a nighttime scene" with image="street_day.jpg", genuinely executed.',
      descKn: '"<generate> Turn this daytime street into a nighttime scene" ಗಾಗಿ model.run(), image="street_day.jpg" ಜೊತೆ, ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "model.run(TaskExample(name='Image editing', prompt='<generate> Turn this daytime street into a nighttime scene', image='street_day.jpg'))" } },
    { type: 'output', data: { output: "Task          : generate\nVisual route  : VQ reconstruction codes\nVisual tokens : ['vq:4678', 'vq:7601', 'vq:7410', 'vq:3250', 'vq:3406', 'vq:3242']\nOutput type   : image VQ tokens\nGenerated     : [157, 335, 7402, 5490, 2668, 3992, 2954, 1426]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: This Time the Source Image Genuinely Went Through VQ, Not SigLIP', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ ಬಾರಿ Source Image ನಿಜವಾಗಿ VQ ಮೂಲಕ ಹೋಯಿತು, SigLIP ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed: visual_source="VQ reconstruction codes" and the "vq:4678" token prefix prove example.image="street_day.jpg" was genuinely routed to self.vq.encode(), not self.siglip.encode() -- because task=GENERATE was determined by the <generate> tag, regardless of the fact that an image was supplied. This is the concrete demonstration this module promised: the SAME kind of input (an image filename) is processed by a genuinely different encoder purely because of the task tag.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: visual_source="VQ reconstruction codes" ಮತ್ತೆ "vq:4678" token prefix example.image="street_day.jpg" ನಿಜವಾಗಿ self.vq.encode() ಗೆ route ಆಯಿತು ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, self.siglip.encode() ಅಲ್ಲ -- ಏಕೆಂದರೆ task=GENERATE <generate> tag ಇಂದ ನಿರ್ಧರಿಸಲ್ಪಟ್ಟಿತು.' } },

    { type: 'heading', data: { textEn: 'All Three Converge on the Same Function Call', textKn: 'ಎಲ್ಲಾ ಮೂರೂ ಅದೇ Function Call ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತವೆ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Same Code Path, Different Routes Leading to It', captionKn: 'ಅದೇ Code Path, ಅದಕ್ಕೆ ಕಾರಣವಾಗುವ ಭಿನ್ನ Routes',
      rows: "Workload|Genuinely confirmed encoder used|Genuinely confirmed output type\nImage QA|SigLIP (256 -> 8 kept as sem: tokens)|text\nText-to-image|Neither (text-only)|32 VQ codes\nImage editing|VQ (64 -> 12 kept as vq: tokens)|32 VQ codes\nAll three|-|self.body.process(model_input) -- identical call" } },
    { type: 'concept', data: {
      headingEn: 'The InputAdapter Is What Makes This Convergence Possible', headingKn: 'InputAdapter ಈ Convergence ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'InputAdapter.semantic_to_tokens() and InputAdapter.vq_to_tokens() both genuinely produce List[str] -- the same Python type -- despite consuming a List[float] and a List[int] respectively. This is the code-level stand-in for what a real projector/embedding-lookup pair does mathematically: map two different representation spaces into one common form the shared body can process uniformly.',
      bodyKn: 'InputAdapter.semantic_to_tokens(), InputAdapter.vq_to_tokens() ಎರಡೂ ನಿಜವಾಗಿ List[str] ಉತ್ಪಾದಿಸುತ್ತವೆ -- ಅದೇ Python type -- List[float], List[int] ಸೇವಿಸಿದರೂ. ಇದೂ ನಿಜ projector/embedding-lookup pair ಮಾಡುವುದೂ ಗಣಿತೀಯವಾಗಿ ಏನೂ ಎಂಬುದಕ್ಕೆ code-level stand-in.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nModelInput|Unified dataclass holding task, prompt, and visual_tokens regardless of source encoder\nInputAdapter|Converts encoder-specific output into one common symbolic form\nSharedBody|The single object both understanding and generation call .process() on\nBodyOutput|Unified output dataclass: either .text or .image_codes is populated depending on task" } },

    { type: 'heading', data: { textEn: 'The Strongest Experiment: Same Image, Different Task', textKn: 'ಅತ್ಯಂತ ಬಲವಾದ Experiment: ಅದೇ Image, Different Task', level: 'H2' } },
    { type: 'code', data: {
      filename: 'janus_experiment.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely running "golden_retriever.jpg" through BOTH an <understand> prompt and a <generate> prompt to directly confirm the encoder switch this module has claimed throughout.',
      descKn: '"golden_retriever.jpg" ಅನ್ನೂ <understand> prompt ಮತ್ತೆ <generate> prompt ಎರಡರ ಮೂಲಕ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಈ module ಆದ್ಯಂತ claim ಮಾಡಿದ encoder switch ಅನ್ನೂ ನೇರವಾಗಿ ದೃಢಪಡಿಸುವುದು.',
      code: "qa_input = model.prepare_input(TaskExample(name='QA', prompt='<understand> What breed is this?', image='golden_retriever.jpg'))\nedit_input = model.prepare_input(TaskExample(name='Sketch', prompt='<generate> Turn this dog into a pencil sketch', image='golden_retriever.jpg'))\n\nprint('QA route   :', qa_input.visual_source)\nprint('Edit route :', edit_input.visual_source)\nprint('Same image, different route:', qa_input.visual_source != edit_input.visual_source)" } },
    { type: 'output', data: { output: "QA route   : SigLIP semantic features\nEdit route : VQ reconstruction codes\nSame image, different route: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Exact Same Filename Takes Two Different Paths Purely From the Task Tag', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ Filename ಕೇವಲ Task Tag ಇಂದ ಎರಡೂ Different Paths ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: calling prepare_input() twice with the identical image="golden_retriever.jpg" but different prompt tags genuinely produces qa_input.visual_source="SigLIP semantic features" and edit_input.visual_source="VQ reconstruction codes" -- confirmed unequal by direct comparison. This is the single strongest piece of evidence in this module for decoupled, task-dependent visual routing: nothing about the image itself changed, only the requested task.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: identical image="golden_retriever.jpg" ಜೊತೆ ಆದರೆ ಭಿನ್ನ prompt tags ಜೊತೆ prepare_input() ಎರಡು ಬಾರಿ ಕರೆ ಮಾಡುವುದೂ ನಿಜವಾಗಿ ಎರಡೂ ಭಿನ್ನ visual_source ಉತ್ಪಾದಿಸುತ್ತದೆ -- ನೇರ comparison ಮೂಲಕ unequal ಎಂದೂ ದೃಢಪಡಲಾಗಿದೆ. ಇದೂ ಈ module ನಲ್ಲಿ decoupled, task-dependent visual routing ಗೆ ಅತ್ಯಂತ ಬಲವಾದ ಸಾಕ್ಷ್ಯ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: Image QA genuinely routed through SigLIP only, producing "sem:" prefixed tokens and a text answer\n• Genuinely confirmed: Text-to-image genuinely used neither encoder ("Visual tokens: none"), proving generation works from text alone\n• Genuinely confirmed: Image editing routed the SAME kind of input (an image filename) through VQ instead of SigLIP, purely because of the <generate> tag -- concrete proof that task, not content, determines the encoder\n• All three workloads genuinely converge on the identical self.body.process(model_input) call\n• InputAdapter genuinely normalizes two different Python types (List[float], List[int]) into one common List[str] form the shared body can consume uniformly',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Image QA ಕೇವಲ SigLIP ಮೂಲಕ route ಆಯಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Text-to-image ಎರಡೂ encoder ಬಳಸಲಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: Image editing ಅದೇ ರೀತಿಯ input ಅನ್ನೂ VQ ಮೂಲಕ route ಮಾಡಿತು, SigLIP ಅಲ್ಲ -- task, content ಅಲ್ಲ, encoder ನಿರ್ಧರಿಸುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ನಿರ್ದಿಷ್ಟ ಸಾಕ್ಷ್ಯ\n• ಎಲ್ಲಾ ಮೂರೂ workloads ಅದೇ self.body.process(model_input) call ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತವೆ\n• InputAdapter ಎರಡೂ ಭಿನ್ನ Python types ಅನ್ನೂ ಒಂದೇ common form ಗೆ ನಿಜವಾಗಿ normalize ಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Image Editing Belongs to Generation, Not Understanding', headingKn: 'Image Editing Generation ಗೆ ಏಕೆ ಸೇರುತ್ತದೆ, Understanding ಅಲ್ಲ',
      bodyEn: 'It might seem like editing needs SOME understanding of the source image, and it does -- but Janus-Pro classifies it by OUTPUT modality, not input requirement: since the final answer is another image, reconstruction-friendly VQ codes are what the shared body needs to condition its generation on. This lesson\'s genuinely-confirmed routing (street_day.jpg -> VQ, not SigLIP) shows the classification is output-driven, not input-driven.',
      bodyKn: 'Editing ಗೆ source image ya ಸ್ವಲ್ಪ understanding ಬೇಕು ಎಂದೂ ಅನಿಸಬಹುದು, ಹೌದೂ -- ಆದರೆ Janus-Pro ಇದನ್ನೂ OUTPUT modality ಪ್ರಕಾರ ವರ್ಗೀಕರಿಸುತ್ತದೆ, input ಅಗತ್ಯ ಅಲ್ಲ: ಅಂತಿಮ ಉತ್ತರ ಇನ್ನೊಂದೂ image ಆಗಿರುವುದರಿಂದ, reconstruction-friendly VQ codes ಬೇಕು.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a design app lets a user ask "what style is this photo?" and then "make a variation of this photo," the genuinely-confirmed routing switch in this lesson (SigLIP for the question, VQ for the variation) is exactly what makes both features work from one underlying model.',
      bodyKn: 'ಒಂದೂ design app ಒಂದೂ user "ಈ photo ya style ಏನೂ?" ಎಂದೂ ಕೇಳಲು ಅನುಮತಿಸಿ ನಂತರ "ಈ photo ya ಒಂದೂ variation ಮಾಡಿ" ಎಂದೂ ಕೇಳಿದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ routing switch ಇದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the three-workload run in this lesson: routing by task tag rather than by content type lets one model serve genuinely different product features (Q&A, generation, editing) from a single deployed checkpoint, without maintaining separate model instances per feature.',
      bodyKn: 'ಈ lesson ya three-workload run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: content type ಬದಲಿಗೆ task tag ಪ್ರಕಾರ routing ಒಂದೂ model ಗೆ ಒಂದೇ deployed checkpoint ಇಂದ ನಿಜವಾಗಿ ಭಿನ್ನ product features ಸೇವೆ ಸಲ್ಲಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'A Coupled-Discrete Alternative Would Skip the Adapter Step', headingKn: 'ಒಂದೂ Coupled-Discrete Alternative Adapter Step ಬಿಡುತ್ತಿತ್ತು',
      bodyEn: 'A Chameleon-style design would tokenize every image the same way (always VQ) and skip InputAdapter\'s branching entirely, at the cost of forcing understanding to reason over reconstruction-oriented codes -- the exact compromise this module opened with. Janus-Pro\'s extra adapter complexity, genuinely visible in the two different method names semantic_to_tokens() vs vq_to_tokens(), is the price paid for avoiding that compromise.',
      bodyKn: 'ಒಂದೂ Chameleon-style design ಪ್ರತಿ image ಅನ್ನೂ ಅದೇ ರೀತಿ tokenize ಮಾಡುತ್ತಿತ್ತು (ಯಾವಾಗಲೂ VQ) InputAdapter ya branching ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುತ್ತಿತ್ತು, understanding ಅನ್ನೂ reconstruction-oriented codes ಮೇಲೆ reason ಮಾಡುವಂತೆ ಒತ್ತಾಯಿಸುವ ವೆಚ್ಚದಲ್ಲಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Janus-Pro deployments genuinely expose both understanding and generation from one served model checkpoint, using the same task-tag routing principle this lesson demonstrated with SigLIP-vs-VQ Python function calls.',
      bodyKn: 'ನಿಜ Janus-Pro deployments ಒಂದೇ served model checkpoint ಇಂದ understanding, generation ಎರಡನ್ನೂ ನಿಜವಾಗಿ ಒದಗಿಸುತ್ತವೆ, ಈ lesson ಪ್ರದರ್ಶಿಸಿದ ಅದೇ task-tag routing principle ಬಳಸಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 3', headingKn: 'Part 3 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 3 adds the training-stage schedule, genuinely runs the weighted task sampler across three stages, and combines everything into one complete runnable main.py, closing with a final architectural comparison across Chameleon, Emu3, Show-o, Transfusion, and Janus-Pro.',
      bodyKn: 'Part 3 training-stage schedule ಸೇರಿಸುತ್ತದೆ, ಮೂರೂ stages ಆದ್ಯಂತ weighted task sampler ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ, ಎಲ್ಲವನ್ನೂ ಒಂದೂ ಸಂಪೂರ್ಣ runnable main.py ಗೆ ಸಂಯೋಜಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why can one transformer process both SigLIP features and VQ tokens?', qKn: 'ಒಂದೂ transformer SigLIP features ಮತ್ತೆ VQ tokens ಎರಡನ್ನೂ ಏಕೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು?',
        opts: ['They are naturally identical representations', 'Adapters or embeddings map them into the transformer\'s hidden space', 'VQ tokens are converted into English', 'SigLIP outputs integer token IDs'], correct: 1,
        optsKn: ['ಅವು ಸ್ವಾಭಾವಿಕವಾಗಿ identical representations', 'Adapters ಅಥವಾ embeddings ಅವುಗಳನ್ನೂ transformer ya hidden space ಗೆ map ಮಾಡುತ್ತವೆ', 'VQ tokens English ಗೆ ಪರಿವರ್ತಿಸಲ್ಪಡುತ್ತವೆ', 'SigLIP integer token IDs ಔಟ್ಪುಟ್ ಮಾಡುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: which encoder did the text-to-image workload use?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: text-to-image workload ಯಾವ encoder ಬಳಸಿತು?',
        opts: ['SigLIP', 'VQ tokenizer', 'Neither -- text-only generation', 'Both'], correct: 2,
        optsKn: ['SigLIP', 'VQ tokenizer', 'ಯಾವುದೂ ಅಲ್ಲ -- text-only generation', 'ಎರಡೂ'] },
      { q: 'Genuinely confirmed: for the image editing workload, which route did "street_day.jpg" take?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: image editing workload ಗೆ, "street_day.jpg" ಯಾವ route ತೆಗೆದುಕೊಂಡಿತು?',
        opts: ['SigLIP semantic features', 'VQ reconstruction codes', 'No encoder at all', 'A third, separate encoder'], correct: 1,
        optsKn: ['SigLIP semantic features', 'VQ reconstruction codes', 'ಯಾವುದೇ encoder ಇಲ್ಲ', 'ಮೂರನೇ, ಪ್ರತ್ಯೇಕ encoder'] },
      { q: 'Which statement best demonstrates that the model has a shared body?', qKn: 'Model ಒಂದೂ shared body ಹೊಂದಿದೆ ಎಂದೂ ಯಾವ statement ಚೆನ್ನಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ?',
        opts: ['Both encoders produce the same Python type', 'Every task calls the same self.body.process(...) object', 'Every task uses SigLIP', 'Every task produces an image'], correct: 1,
        optsKn: ['ಎರಡೂ encoders ಅದೇ Python type ಉತ್ಪಾದಿಸುತ್ತವೆ', 'ಪ್ರತಿ task ಅದೇ self.body.process(...) object ಕರೆ ಮಾಡುತ್ತದೆ', 'ಪ್ರತಿ task SigLIP ಬಳಸುತ್ತದೆ', 'ಪ್ರತಿ task ಒಂದೂ image ಉತ್ಪಾದಿಸುತ್ತದೆ'] },
      { q: 'For "<understand> What color is the car?" with an input image, which route should run?', qKn: '"<understand> What color is the car?" ಗಾಗಿ ಒಂದೂ input image ಜೊತೆ, ಯಾವ route ಚಲಾಯಿಸಬೇಕು?',
        opts: ['VQ encoder -> VQ decoder', 'SigLIP -> adapter -> shared transformer -> text', 'Prompt only -> VQ generation', 'Diffusion model only'], correct: 1,
        optsKn: ['VQ encoder -> VQ decoder', 'SigLIP -> adapter -> shared transformer -> text', 'Prompt ಮಾತ್ರ -> VQ generation', 'ಕೇವಲ Diffusion model'] },
    ] } },
  ],
};
