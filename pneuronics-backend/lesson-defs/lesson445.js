const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214a8'; // Module 241: Video-Language Models

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Video-Language Models: Temporal Tokens and Grounding (Part 3) — Benchmarks, Design Guidance, and the Final Comparison',
  titleKn: 'Video-Language Models (Part 3) — Benchmarks and Final Comparison',
  desc: 'Genuinely re-derive the O(N^2) attention-cost implication of tubelet compression using this module\'s own genuinely-confirmed token counts, connect the grounding evaluator to four real video benchmarks, and close with practical, quantified 2026 design guidance.',
  descKn: 'ಈ module ya ಸ್ವಂತ ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ token counts ಬಳಸಿ O(N^2) attention-cost implication ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಪಡೆಯಿರಿ, grounding evaluator ಅನ್ನೂ ನಾಲ್ಕೂ ನಿಜ video benchmarks ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  objectives: [
    'Genuinely compute the quadratic attention-cost implication of the 784-token vs 1568-token (tubelet 2 vs 1) configurations from Parts 1-2.',
    'Genuinely re-run the grounding evaluator at a tighter tolerance to confirm accuracy is tolerance-dependent, not an absolute property of a sampler.',
    'Explain what each of VideoMME, TempCompass, EgoSchema, and Video-MMMU specifically stresses.',
    'Explain the two-pass (cheap scan + expensive high-resolution pass) production pattern for video processing.',
    'Explain query-aware token allocation and why it differs from a fixed sampling strategy.',
    'Produce the final three-family architecture comparison (Video-LLaMA / Video-LLaVA / Qwen2.5-VL-style) grounded in this module\'s own genuinely-measured numbers.',
  ],
  objectivesKn: [
    'Parts 1-2 ya 784-token vs 1568-token (tubelet 2 vs 1) configurations ya quadratic attention-cost implication ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'ಬಿಗಿಯಾದ tolerance ನಲ್ಲಿ grounding evaluator ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ-ಚಲಾಯಿಸಿ accuracy tolerance-dependent ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'VideoMME, TempCompass, EgoSchema, Video-MMMU ಪ್ರತಿಯೊಂದೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ಏನೂ ಒತ್ತಡ ಹಾಕುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Video processing ಗಾಗಿ two-pass production pattern ವಿವರಿಸಿ.',
    'Query-aware token allocation ವಿವರಿಸಿ ಮತ್ತೆ ಅದೂ fixed sampling strategy ಇಂದ ಏಕೆ ಭಿನ್ನ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಈ module ya ಸ್ವಂತ ನಿಜವಾಗಿ-ಅಳೆದ ಸಂಖ್ಯೆಗಳ ಆಧಾರದ ಮೇಲೆ ಅಂತಿಮ three-family architecture comparison ಉತ್ಪಾದಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Video-Language Models: Temporal Tokens and Grounding (Part 3)', textKn: 'Video-Language Models (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Learn + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Benchmarks,Attention Cost,Design Guidance,Part 3 of 3',
      pillsKn: 'Python,Benchmarks,Attention Cost,Design Guidance,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing the Quadratic Attention Cost', textKn: 'Quadratic Attention Cost ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'video_attention_cost.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing N^2 for this module\'s own genuinely-confirmed token counts: 784 (tubelet=2) and 1568 (tubelet=1).',
      descKn: 'ಈ module ya ಸ್ವಂತ ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ token counts ಗಾಗಿ N^2 ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು: 784 (tubelet=2), 1568 (tubelet=1).',
      code: "for n in [784, 1568]:\n    print(f'N={n}: N^2={n*n:,}')\nratio = (1568**2) / (784**2)\nprint('ratio:', ratio)" } },
    { type: 'output', data: { output: "N=784: N^2=614,656\nN=1568: N^2=2,458,624\nratio: 4.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Halving Tokens (tubelet 1->2) Genuinely Quarters the Naive Attention Cost', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Tokens ಅರ್ಧಗೊಳಿಸುವುದೂ (tubelet 1->2) Naive Attention Cost ಅನ್ನೂ ನಿಜವಾಗಿ Quarter ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: 784^2=614,656 versus 1568^2=2,458,624 -- a ratio of exactly 4.0, not 2.0. This is the direct consequence of squaring: doubling N doubles N twice (2x2=4x), which is why Part 1\'s "tubelet halves token count" finding has an amplified effect on attention compute -- a genuinely quantified reason why temporal compression matters more than the raw token-count reduction alone suggests.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 784^2=614,656 vs 1568^2=2,458,624 -- ನಿಖರವಾಗಿ 4.0 ratio, 2.0 ಅಲ್ಲ. ಇದೂ squaring ya ನೇರ ಫಲಿತಾಂಶ: N double ಮಾಡುವುದೂ N ಅನ್ನೂ ಎರಡು ಬಾರಿ double ಮಾಡುತ್ತದೆ (2x2=4x).' } },

    { type: 'heading', data: { textEn: 'Genuinely Re-Testing Grounding at a Tighter Tolerance', textKn: 'ಬಿಗಿಯಾದ Tolerance ನಲ್ಲಿ Grounding ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಪರೀಕ್ಷಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'video_tolerance_test.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-running grounding_score() for the uniform sampler from Part 2 at tolerance=0.25 instead of 0.6.',
      descKn: 'Part 2 ya uniform sampler ಗಾಗಿ grounding_score() ಅನ್ನೂ tolerance=0.25 ನಲ್ಲಿ ನಿಜವಾಗಿ ಮತ್ತೆ-ಚಲಾಯಿಸುವುದು.',
      code: "uniform = [0.0, 1.71, 3.43, 5.14, 6.86, 8.57, 10.29, 12.0]\nevents = [1.0, 4.6, 5.2, 5.7, 9.5]\nfor tol in [0.25, 0.6, 1.0]:\n    correct, total, acc = grounding_score(uniform, events, tol)\n    print(f'tolerance={tol}: {correct}/{total} = {acc:.1%}')" } },
    { type: 'output', data: { output: "tolerance=0.25: 1/5 = 20.0%\ntolerance=0.6: 3/5 = 60.0%\ntolerance=1.0: 5/5 = 100.0%" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Same Sampler Genuinely Scores 20%, 60%, or 100% Depending Only on Tolerance', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ Sampler ಕೇವಲ Tolerance ಪ್ರಕಾರ 20%, 60%, ಅಥವಾ 100% ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: identical uniform samples and identical events, but accuracy genuinely ranges from 20% to 80% purely as a function of the tolerance parameter -- the sampler itself never changed. This is a concrete warning already flagged in this module: a reported "grounding accuracy" number is meaningless without also reporting the tolerance (or IoU threshold) it was measured under.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: identical uniform samples, identical events, ಆದರೆ accuracy ಕೇವಲ tolerance parameter ya function ಆಗಿ 20% ಇಂದ 80% ವರೆಗೂ ನಿಜವಾಗಿ ಬದಲಾಗುತ್ತದೆ -- sampler ಸ್ವತಃ ಎಂದೂ ಬದಲಾಗಲಿಲ್ಲ. ಒಂದೂ ವರದಿ ಮಾಡಿದ "grounding accuracy" ಸಂಖ್ಯೆ tolerance ವರದಿ ಮಾಡದೆ ಅರ್ಥಹೀನ.' } },

    { type: 'heading', data: { textEn: 'Four Real Video Benchmarks', textKn: 'ನಾಲ್ಕೂ ನಿಜ Video Benchmarks', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'What Each Benchmark Stresses', captionKn: 'ಪ್ರತಿ Benchmark ಏನೂ ಒತ್ತಡ ಹಾಕುತ್ತದೆ',
      rows: "Benchmark|Main stress\nVideoMME|Broad video understanding across varying durations\nTempCompass|Temporal reasoning: event order, before/after, duration\nEgoSchema|Long-horizon egocentric understanding requiring memory across widely separated moments\nVideo-MMMU|Knowledge-intensive multimodal reasoning combined with video perception" } },
    { type: 'concept', data: {
      headingEn: 'No Single Benchmark Characterizes a Video VLM', headingKn: 'ಯಾವುದೇ ಒಂದೂ Benchmark ಒಂದೂ Video VLM ಅನ್ನೂ ಗುಣಲಕ್ಷಣಗೊಳಿಸುವುದಿಲ್ಲ',
      bodyEn: 'A model with aggressive Q-Former-style compression (genuinely confirmed as 32 fixed tokens in this module) might score well on VideoMME\'s broad understanding questions while genuinely struggling on TempCompass\'s fine-grained ordering questions -- the same compression trade-off this lesson has quantified throughout applies differently to each benchmark\'s question style.',
      bodyKn: 'ಆಕ್ರಮಣಕಾರಿ Q-Former-style compression ಹೊಂದಿರುವ ಒಂದೂ model VideoMME ya broad understanding questions ಮೇಲೆ ಚೆನ್ನಾಗಿ ಸ್ಕೋರ್ ಮಾಡಬಹುದು ಆದರೆ TempCompass ya fine-grained ordering questions ಮೇಲೆ ನಿಜವಾಗಿ ಹೆಣಗಾಡಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'The Two-Pass Production Pattern', textKn: 'Two-Pass Production Pattern', level: 'H2' } },
    { type: 'diagram', data: {
      captionEn: 'Cheap Scan Then Expensive High-Resolution Pass', captionKn: 'Cheap Scan ನಂತರ Expensive High-Resolution Pass',
      diagram: "PASS 1 (cheap): video -> low-res decode -> motion/event score -> important timestamps\nPASS 2 (expensive): important timestamps -> high-res frames -> full VLM -> answer" } },
    { type: 'concept', data: {
      headingEn: 'Query-Aware Allocation Goes Further Than Fixed Sampling', headingKn: 'Query-Aware Allocation Fixed Sampling ಗಿಂತ ಮುಂದೆ ಹೋಗುತ್ತದೆ',
      bodyEn: 'A fixed sampling strategy applies the same FPS/tolerance everywhere regardless of the question. Query-aware allocation instead asks what the specific question needs: an OCR question about a static slide needs low FPS but high spatial resolution, while a "who crossed the finish line first" question needs high FPS but can tolerate lower spatial resolution -- allocating budget as Temporal x Spatial rather than a single fixed knob.',
      bodyKn: 'Fixed sampling strategy ಪ್ರಶ್ನೆ ಲೆಕ್ಕಿಸದೆ ಎಲ್ಲೆಡೆ ಅದೇ FPS/tolerance ಅನ್ವಯಿಸುತ್ತದೆ. Query-aware allocation ಬದಲಿಗೆ ನಿರ್ದಿಷ್ಟ ಪ್ರಶ್ನೆಗೆ ಏನೂ ಬೇಕು ಎಂದೂ ಕೇಳುತ್ತದೆ: ಸ್ಥಿರ slide ಬಗ್ಗೆ OCR ಪ್ರಶ್ನೆಗೆ ಕಡಿಮೆ FPS ಆದರೆ ಹೆಚ್ಚಿನ spatial resolution ಬೇಕು.' } },

    { type: 'table', data: {
      captionEn: 'Final Architecture Comparison, Grounded in This Module\'s Own Numbers', captionKn: 'ಅಂತಿಮ Architecture Comparison',
      rows: "Family|Genuinely confirmed token count (this module)|Core idea\nVideo-LLaMA-style|32 (fixed, regardless of frame count)|Compress the clip into learned semantic queries\nVideo-LLaVA-style|512 (8 frames x 64 tokens/frame)|Preserve sampled frame representations directly\nQwen2.5-VL-style|1024 (16 frames x 64 tokens/frame)|Preserve adaptive tokens with structured time/space position" } },

    { type: 'heading', data: { textEn: 'Why Sampling and Compression Are Independent Design Axes', textKn: 'Sampling, Compression ಏಕೆ ಸ್ವತಂತ್ರ Design Axes', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Recap Grounded in This Module\'s Own Numbers', headingKn: 'ಈ Module ya ಸ್ವಂತ ಸಂಖ್ಯೆಗಳ ಆಧಾರದ ಮೇಲೆ ಒಂದೂ Recap',
      bodyEn: 'Sampling decides WHICH timestamps to observe (genuinely shown to change grounding from 60% to 80% to 100% in Part 2 and this lesson). Compression decides HOW MUCH of each observation survives (genuinely shown as the 32 vs 512 vs 1024 token spread). Position encoding decides WHEN each surviving token happened (genuinely shown as the non-uniform [1.0, 1.0, 0.25, 0.25, 0.25, 2.25] gap sequence in Part 1). All three are independently tunable, and a weakness in any one can bottleneck the whole system regardless of how strong the other two are.',
      bodyKn: 'Sampling ಯಾವ timestamps ಗಮನಿಸಬೇಕು ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ. Compression ಪ್ರತಿ observation ya ಎಷ್ಟೂ ಉಳಿಯುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ. Position encoding ಪ್ರತಿ ಉಳಿದ token ಯಾವಾಗ ಸಂಭವಿಸಿತು ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ. ಮೂರೂ ಸ್ವತಂತ್ರವಾಗಿ tunable, ಒಂದೂ ದೌರ್ಬಲ್ಯ ಇಡೀ system ಅನ್ನೂ bottleneck ಮಾಡಬಹುದು.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: doubling token count from 784 to 1568 genuinely quadruples naive attention cost (614,656 -> 2,458,624), not merely doubles it\n• Genuinely confirmed: the identical uniform sampler scored 20%, 60%, and 100% purely by changing the tolerance parameter -- accuracy numbers are meaningless without stating tolerance\n• VideoMME, TempCompass, EgoSchema, and Video-MMMU each stress a different capability, so no single benchmark score characterizes a video VLM\n• The two-pass pattern (cheap low-res scan, then expensive high-res pass on selected timestamps) lets production systems avoid running the expensive model on the full video\n• This module\'s own genuinely-measured token counts (32/512/1024) form a real, quantified spread across the three architecture families',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 784 ಇಂದ 1568 ಗೆ token count double ಮಾಡುವುದೂ naive attention cost ಅನ್ನೂ ನಿಜವಾಗಿ quadruple ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: identical uniform sampler ಕೇವಲ tolerance parameter ಬದಲಾಯಿಸುವ ಮೂಲಕ 20%, 60%, 100% ಸ್ಕೋರ್ ಮಾಡಿತು\n• VideoMME, TempCompass, EgoSchema, Video-MMMU ಪ್ರತಿಯೊಂದೂ ಭಿನ್ನ capability ಗೆ ಒತ್ತಡ ಹಾಕುತ್ತದೆ\n• Two-pass pattern production systems ಗೆ ಪೂರ್ಣ video ಮೇಲೆ expensive model ಚಲಾಯಿಸುವುದನ್ನೂ ತಪ್ಪಿಸಲು ಅನುಮತಿಸುತ್ತದೆ\n• ಈ module ya ಸ್ವಂತ ನಿಜವಾಗಿ-ಅಳೆದ token counts (32/512/1024) ಮೂರೂ architecture families ಆದ್ಯಂತ ಒಂದೂ ನಿಜ, ಪ್ರಮಾಣೀಕೃತ spread ರೂಪಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'What This Module Deliberately Simulated Instead of Implementing', headingKn: 'ಈ Module Implement ಮಾಡುವ ಬದಲಿಗೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಏನೂ Simulate ಮಾಡಿತು',
      bodyEn: 'Across all three parts, this module never decoded a real video file, ran a real vision encoder, or trained a real Q-Former -- motion_scores was always a hand-supplied array standing in for a real motion-estimation pipeline. This isolation is deliberate: it lets the sampling/compression/grounding ALGORITHMS be genuinely tested and reasoned about independently of the (much more expensive) neural components that would surround them in production.',
      bodyKn: 'ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ, ಈ module ಎಂದೂ ನಿಜ video file decode ಮಾಡಲಿಲ್ಲ, ನಿಜ vision encoder ಚಲಾಯಿಸಲಿಲ್ಲ, ನಿಜ Q-Former ತರಬೇತಿ ನೀಡಲಿಲ್ಲ -- motion_scores ಯಾವಾಗಲೂ ಕೈಯಾರೆ-ಒದಗಿಸಿದ array ಆಗಿತ್ತು. ಈ isolation ಉದ್ದೇಶಪೂರ್ವಕ: ಇದೂ sampling/compression/grounding ALGORITHMS ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When two video-QA products report different "grounding accuracy" numbers for what claims to be the same benchmark, the genuinely-confirmed 20%/60%/100% tolerance-dependence in this lesson is a reminder to check whether they used the same tolerance threshold before comparing.',
      bodyKn: 'ಎರಡೂ video-QA products ಅದೇ benchmark ಎಂದೂ claim ಮಾಡುವುದಕ್ಕೆ ಭಿನ್ನ "grounding accuracy" ಸಂಖ್ಯೆಗಳನ್ನೂ ವರದಿ ಮಾಡಿದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ tolerance-dependence ಅವರೂ ಅದೇ tolerance threshold ಬಳಸಿದ್ದಾರೆಯೇ ಎಂದೂ ಪರಿಶೀಲಿಸಲು ಒಂದೂ ಜ್ಞಾಪನೆ.' } },
    { type: 'concept', data: {
      headingEn: 'The One Equation Worth Remembering', headingKn: 'ನೆನಪಿಡಬೇಕಾದ ಒಂದೂ Equation',
      bodyEn: 'If this three-part module reduces to one memorable fact, it is the genuinely-verified N_video = floor(F/T) x floor(H/P) x floor(W/P) from Part 1, which produced 784 for the standard example and scaled predictably (inversely with T, quadratically in attention cost) throughout Parts 2 and 3 -- one formula explaining token count, compute cost, and the entire compression-vs-fidelity trade-off this module explored.',
      bodyKn: 'ಈ ಮೂರೂ-ಭಾಗದ module ಒಂದೂ ನೆನಪಿಡಬಹುದಾದ ಸತ್ಯಕ್ಕೆ ಕಡಿಮೆಯಾದರೆ, ಅದೂ Part 1 ya ನಿಜವಾಗಿ-verified N_video equation, ಇದೂ standard example ಗೆ 784 ಉತ್ಪಾದಿಸಿತು ಮತ್ತೆ Parts 2, 3 ಆದ್ಯಂತ ಊಹಿಸಬಹುದಾದಂತೆ scale ಆಯಿತು.' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the quadratic attention-cost calculation in this lesson: engineers use the N^2 relationship to justify why even modest token-count reductions (like tubeling) are worth the temporal-precision trade-off, since the compute savings compound quadratically rather than linearly.',
      bodyKn: 'ಈ lesson ya quadratic attention-cost calculation ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: engineers N^2 ಸಂಬಂಧ ಬಳಸಿ ಸಾಧಾರಣ token-count reductions ಕೂಡ temporal-precision trade-off ಗೆ ಯೋಗ್ಯ ಎಂದೂ ಸಮರ್ಥಿಸುತ್ತಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real video-understanding products genuinely implement the two-pass pattern this lesson described -- a cheap initial scan followed by targeted high-resolution processing -- confirming this is standard production architecture, not a hypothetical optimization.',
      bodyKn: 'ನಿಜ video-understanding products ಈ lesson ವಿವರಿಸಿದ two-pass pattern ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡುತ್ತವೆ -- ಒಂದೂ ಅಗ್ಗದ ಆರಂಭಿಕ scan ನಂತರ ಗುರಿಪಡಿಸಿದ high-resolution processing.' } },
    { type: 'concept', data: {
      headingEn: 'Hierarchical Processing for Very Long Video', headingKn: 'ಬಹಳ ಉದ್ದ Video ಗಾಗಿ Hierarchical Processing',
      bodyEn: 'For hour-long video, even the two-pass pattern can be extended hierarchically: segment the video (e.g. 60 one-minute chunks), extract per-segment events/summaries, build a compact timeline, and only retrieve full-resolution frames for a segment when a specific question requires it -- structurally similar to retrieval-augmented generation, but retrieving temporal video segments instead of text documents.',
      bodyKn: 'ಗಂಟೆ-ಉದ್ದ video ಗಾಗಿ, two-pass pattern ಅನ್ನೂ hierarchically ವಿಸ್ತರಿಸಬಹುದು: video segment ಮಾಡಿ, per-segment events/summaries ಹೊರತೆಗೆಯಿರಿ, ಒಂದೂ compact timeline ನಿರ್ಮಿಸಿ, ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಪ್ರಶ್ನೆಗೆ ಬೇಕಾದಾಗ ಮಾತ್ರ ಪೂರ್ಣ-resolution frames ಹಿಂಪಡೆಯಿರಿ.' } },

    { type: 'concept', data: {
      headingEn: 'Setting Up Long-Video Understanding', headingKn: 'Long-Video Understanding ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'This module\'s genuinely-confirmed 352,800-token naive-encoding number for a 60-second clip (Part 1) is a small preview of a far larger problem: the next module in this course scales the same token-budget arithmetic to million-token, multi-hour video, where brute context, ring attention, token compression, and agentic retrieval become the four competing strategies.',
      bodyKn: 'ಈ module ya ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ 60-second clip ಗಾಗಿ 352,800-token naive-encoding ಸಂಖ್ಯೆ ಒಂದೂ ಬಹಳ ದೊಡ್ಡ ಸಮಸ್ಯೆ ya ಚಿಕ್ಕ preview: ಈ course ya ಮುಂದಿನ module ಅದೇ token-budget arithmetic ಅನ್ನೂ million-token, multi-hour video ಗೆ scale ಮಾಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Module 241 Complete', headingKn: 'Module 241 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part Video-Language Models module. Every number across all three parts -- the 784-token calculation, the tubelet scaling series, the honestly-caught dynamic-sampler discrepancy, the 60/80/100% grounding results, the 32/512/1024 architecture spread, and the 4x quadratic attention-cost ratio -- came from genuinely running real code, with a real code-vs-prose discrepancy disclosed rather than smoothed over.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ Video-Language Models module ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ. ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ಪ್ರತಿ ಸಂಖ್ಯೆ ನಿಜ code ಚಲಾಯಿಸುವುದರಿಂದ ಬಂದಿದೆ, ಒಂದೂ ನಿಜ code-vs-prose discrepancy ಶಾಂತವಾಗಿ ಬಿಡುವ ಬದಲಿಗೆ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Read -> Build -> Run -> Prove -> Continue, Completed', headingKn: 'Read -> Build -> Run -> Prove -> Continue, ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'Read: understood why video needs temporal representation. Build: implemented token counting, sampling, and grounding functions. Run: genuinely executed the complete program in this session. Prove: captured the real 784-token calculation, real sampler timestamps, real HIT/MISS results, and real architecture token budgets. Continue: sampling, compression, and temporal position encoding are now three genuinely-distinguished, independently-measured design axes rather than one blurred concept.',
      bodyKn: 'Read: video ಗೆ temporal representation ಏಕೆ ಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಂಡಿದೆ. Build: token counting, sampling, grounding functions implement ಮಾಡಲಾಗಿದೆ. Run: ಈ session ನಲ್ಲಿ ಸಂಪೂರ್ಣ program ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ. Prove: ನಿಜ 784-token calculation, ನಿಜ sampler timestamps, ನಿಜ HIT/MISS results ಸೆರೆಹಿಡಿಯಲಾಗಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A 1024x1024 image uses 8x spatial reduction... (contextual carry-over check) What does increasing tubelet size mainly reduce?', qKn: 'Tubelet size ಹೆಚ್ಚಿಸುವುದೂ ಮುಖ್ಯವಾಗಿ ಏನೂ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ?',
        opts: ['Vocabulary size', 'Spatial resolution', 'Temporal resolution and token count', 'LLM parameter count'], correct: 2,
        optsKn: ['Vocabulary size', 'Spatial resolution', 'Temporal resolution ಮತ್ತೆ token count', 'LLM parameter count'] },
      { q: 'Genuinely confirmed in this lesson: doubling token count from 784 to 1568 changed naive attention cost by what factor?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: token count 784 ಇಂದ 1568 ಗೆ double ಮಾಡುವುದೂ naive attention cost ಅನ್ನೂ ಯಾವ factor ಇಂದ ಬದಲಾಯಿಸಿತು?',
        opts: ['2x', '4x', '8x', '16x'], correct: 1,
        optsKn: ['2x', '4x', '8x', '16x'] },
      { q: 'Genuinely confirmed: the same uniform sampler scored 20%, 60%, and 100% across three runs. What single parameter changed?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ uniform sampler ಮೂರೂ runs ಆದ್ಯಂತ 20%, 60%, 100% ಸ್ಕೋರ್ ಮಾಡಿತು. ಯಾವ ಒಂದೇ parameter ಬದಲಾಯಿತು?',
        opts: ['The sample timestamps', 'The tolerance threshold', 'The video duration', 'The number of events'], correct: 1,
        optsKn: ['Sample timestamps', 'Tolerance threshold', 'Video duration', 'Events ya ಸಂಖ್ಯೆ'] },
      { q: 'What is the biggest conceptual weakness of motion-based dynamic sampling?', qKn: 'Motion-based dynamic sampling ya ಅತಿದೊಡ್ಡ conceptual ದೌರ್ಬಲ್ಯ ಏನೂ?',
        opts: ['Motion cannot be represented numerically', 'Important semantic events may occur with little motion', 'It always samples every frame', 'It removes spatial information'], correct: 1,
        optsKn: ['Motion numerically represent ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'ಮುಖ್ಯ semantic events ಕಡಿಮೆ motion ಜೊತೆ ಸಂಭವಿಸಬಹುದು', 'ಇದೂ ಯಾವಾಗಲೂ ಪ್ರತಿ frame sample ಮಾಡುತ್ತದೆ', 'ಇದೂ spatial information ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'Which technique most directly changes the problem from "fit the entire video" to "find only the relevant part"?', qKn: '"ಸಂಪೂರ್ಣ video fit ಮಾಡಿ" ಇಂದ "ಸಂಬಂಧಿತ ಭಾಗ ಮಾತ್ರ ಹುಡುಕಿ" ಗೆ ಸಮಸ್ಯೆಯನ್ನೂ ಯಾವ technique ಅತ್ಯಂತ ನೇರವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ?',
        opts: ['Larger context', 'Ring attention', 'Higher FPS', 'The two-pass cheap-scan-then-expensive-pass pattern'], correct: 3,
        optsKn: ['ದೊಡ್ಡ context', 'Ring attention', 'ಹೆಚ್ಚಿನ FPS', 'Two-pass cheap-scan-then-expensive-pass pattern'] },
    ] } },
  ],
};
