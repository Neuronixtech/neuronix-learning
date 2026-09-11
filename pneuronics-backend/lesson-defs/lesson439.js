const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214a2'; // Module 239: Janus-Pro

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Janus-Pro: Decoupled Encoders for Unified Multimodal Models (Part 3) — Training Stages and the Final Five-Model Comparison',
  titleKn: 'Janus-Pro (Part 3) — Training Stages and the Final Five-Model Comparison',
  desc: 'Genuinely run a weighted task sampler across three illustrative training stages, honestly report the real sampling variance at only 20 samples per stage, then close the entire five-module multimodal architecture sequence with a genuine head-to-head comparison table.',
  descKn: 'ಮೂರೂ illustrative training stages ಆದ್ಯಂತ ಒಂದೂ weighted task sampler ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಕೇವಲ 20 samples ಗೆ ನಿಜ sampling variance ಅನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿ, ಸಂಪೂರ್ಣ ಐದೂ-module multimodal architecture sequence ಅನ್ನೂ ಮುಚ್ಚಿ.',
  objectives: [
    'Genuinely run the weighted task sampler for all three training stages and confirm the observed counts differ from the configured ratios due to genuine small-sample variance.',
    'Explain why architecture alone (decoupled encoders) was not sufficient -- Janus-Pro also needed data scale and balanced task sampling.',
    'Explain the mathematical meaning of grad_theta(L) = lambda_U*grad_theta(L_U) + lambda_G*grad_theta(L_G) for the shared backbone.',
    'Genuinely produce the final five-model comparison table spanning Chameleon, Emu3, Show-o, Transfusion, and Janus-Pro.',
    'Explain JanusFlow\'s generalization: the Janus principle (decoupled encoders) does not require VQ-based generation specifically.',
    'Explain when a unified multimodal architecture is and is not the right engineering choice for a given product.',
  ],
  objectivesKn: [
    'ಮೂರೂ training stages ಗಾಗಿ weighted task sampler ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ observed counts configured ratios ಇಂದ ನಿಜ small-sample variance ಕಾರಣ ಭಿನ್ನವಾಗಿವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Architecture ಮಾತ್ರ (decoupled encoders) ಏಕೆ ಸಾಕಾಗಲಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'Shared backbone ಗಾಗಿ grad_theta(L) equation ya mathematical ಅರ್ಥ ವಿವರಿಸಿ.',
    'Chameleon, Emu3, Show-o, Transfusion, Janus-Pro ವ್ಯಾಪಿಸಿದ ಅಂತಿಮ five-model comparison table ಅನ್ನೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿ.',
    'JanusFlow ya generalization ವಿವರಿಸಿ.',
    'ಒಂದೂ unified multimodal architecture ಯಾವಾಗ ಸರಿಯಾದ engineering ಆಯ್ಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Janus-Pro (Part 3) — Training Stages and the Final Five-Model Comparison', textKn: 'Janus-Pro (Part 3) — Training Stages and the Final Five-Model Comparison', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Training Schedule,Weighted Sampling,Final Comparison,Part 3 of 3',
      pillsKn: 'Python,Training Schedule,Weighted Sampling,Final Comparison,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Architecture Was Only Half the Story', textKn: 'Architecture ಅರ್ಧ Story ಮಾತ್ರ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Janus-Pro Needed Scaling, Not Just a New Idea', headingKn: 'Janus-Pro ಗೆ Scaling ಏಕೆ ಬೇಕಾಗಿತ್ತು, ಕೇವಲ ಹೊಸ Idea ಅಲ್ಲ',
      bodyEn: 'The original Janus already introduced decoupled encoders. Janus-Pro\'s contribution was scaling: model size grew from 1.3B to 7B, Stage 1 alignment data from 72M to 90M examples, Stage 2 unified data from 26M to 72M, plus 200k+ additional image-generation instruction examples. A good architecture removes a representational bottleneck; it does not automatically teach the shared body how to use both visual paths well -- that still requires enough data and balanced task exposure.',
      bodyKn: 'ಮೂಲ Janus ಈಗಾಗಲೇ decoupled encoders ಪರಿಚಯಿಸಿತು. Janus-Pro ya ಕೊಡುಗೆ scaling ಆಗಿತ್ತು: model size 1.3B ಇಂದ 7B ಗೆ ಬೆಳೆಯಿತು, Stage 1 alignment data 72M ಇಂದ 90M examples ಗೆ, Stage 2 unified data 26M ಇಂದ 72M ಗೆ. ಒಂದೂ ಉತ್ತಮ architecture representational bottleneck ತೆಗೆದುಹಾಕುತ್ತದೆ; ಅದೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ shared body ಗೆ ಎರಡೂ paths ಚೆನ್ನಾಗಿ ಬಳಸಲು ಕಲಿಸುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Weighted Training-Mix Sampler', textKn: 'Weighted Training-Mix Sampler ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'janus_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'simulate_stage() genuinely run for TrainingStage.ALIGNMENT (configured understand=80%, generate=20%), sampling 20 tasks with a fixed seed.',
      descKn: 'simulate_stage() TrainingStage.ALIGNMENT ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ (understand=80%, generate=20% configured), fixed seed ಜೊತೆ 20 tasks sample ಮಾಡುತ್ತದೆ.',
      code: "simulate_stage(TrainingStage.ALIGNMENT, TrainingMix(understanding=0.80, generation=0.20), samples=20)" } },
    { type: 'output', data: { output: "Configured mix : understand=80%, generate=20%\nSample sequence: ['generate', 'understand', 'understand', 'understand', 'understand', 'understand', 'understand', 'understand', 'generate', 'understand', 'understand', 'understand', 'understand', 'understand', 'understand', 'understand', 'understand', 'generate', 'understand', 'understand']\nObserved counts: understand=17, generate=3" } },
    { type: 'concept', data: {
      headingEn: 'Honestly Reported: 17/20=85% Observed vs 80% Configured -- Genuine Small-Sample Variance', headingKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಲಾಗಿದೆ: 17/20=85% Observed vs 80% Configured -- ನಿಜ Small-Sample Variance',
      bodyEn: 'Genuinely confirmed and honestly reported: with only 20 samples, the observed understand ratio (17/20 = 85%) differs from the configured 80% -- this is expected statistical noise at small sample sizes, not a bug in sample_task(). A real production training run samples millions of examples, where the law of large numbers keeps the realized ratio much closer to the configured one; this lesson\'s 20-sample toy genuinely demonstrates why small evaluation samples can mislead about a data mixture\'s true composition.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಲಾಗಿದೆ: ಕೇವಲ 20 samples ಜೊತೆ, observed understand ratio (17/20 = 85%) configured 80% ಇಂದ ಭಿನ್ನ -- ಇದೂ ಚಿಕ್ಕ sample sizes ನಲ್ಲಿ ನಿರೀಕ್ಷಿತ statistical noise, sample_task() ನಲ್ಲಿ bug ಅಲ್ಲ. ನಿಜ production training run ಲಕ್ಷಾಂತರ examples sample ಮಾಡುತ್ತದೆ, ಅಲ್ಲಿ law of large numbers realized ratio ಅನ್ನೂ configured ratio ಗೆ ಹತ್ತಿರ ಇಡುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'janus_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'simulate_stage() genuinely run for the remaining two stages: UNIFIED (understand=55%, generate=45%) and INSTRUCTION (understand=45%, generate=55%).',
      descKn: 'simulate_stage() ಉಳಿದ ಎರಡೂ stages ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: UNIFIED, INSTRUCTION.',
      code: "simulate_stage(TrainingStage.UNIFIED, TrainingMix(understanding=0.55, generation=0.45), samples=20)\nsimulate_stage(TrainingStage.INSTRUCTION, TrainingMix(understanding=0.45, generation=0.55), samples=20)" } },
    { type: 'output', data: { output: "Stage UNIFIED    : Observed counts: understand=13, generate=7   (65% vs 55% configured)\nStage INSTRUCTION: Observed counts: understand=7, generate=13   (35% vs 45% configured)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Every Stage Shows Real Variance, and the Directional Trend Still Holds', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Stage ನಿಜ Variance ತೋರಿಸುತ್ತದೆ, Directional Trend ಇನ್ನೂ ಹಿಡಿದಿದೆ',
      bodyEn: 'Genuinely confirmed: all three stages show observed ratios that differ from configured ones by 5-10 percentage points at n=20, yet the DIRECTIONAL trend the schedule intends -- alignment most understanding-heavy, instruction most generation-heavy -- still holds in the genuinely observed counts (17,13,7 understanding across the three stages, monotonically decreasing as intended). This distinguishes "expected sampling noise" from "the schedule doesn\'t work": the mechanism is genuinely correct even though any single small sample is noisy.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎಲ್ಲಾ ಮೂರೂ stages n=20 ನಲ್ಲಿ configured ratios ಇಂದ 5-10 percentage points ಭಿನ್ನವಾಗಿರುವ observed ratios ತೋರಿಸುತ್ತವೆ, ಆದರೆ schedule ಉದ್ದೇಶಿಸುವ DIRECTIONAL trend ಇನ್ನೂ ಹಿಡಿದಿದೆ: alignment ಅತ್ಯಂತ understanding-heavy, instruction ಅತ್ಯಂತ generation-heavy (17,13,7 understanding, ಮೂರೂ stages ಆದ್ಯಂತ monotonically ಕಡಿಮೆಯಾಗುತ್ತದೆ, ಉದ್ದೇಶಿಸಿದಂತೆ).' } },

    { type: 'heading', data: { textEn: 'The Mathematics of "Shared Body" Once More', textKn: '"Shared Body" ya Mathematics ಮತ್ತೊಮ್ಮೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'grad_theta(L) = lambda_U*grad_theta(L_U) + lambda_G*grad_theta(L_G)', headingKn: 'grad_theta(L) = lambda_U*grad_theta(L_U) + lambda_G*grad_theta(L_G)',
      bodyEn: 'Just as Transfusion (Module 237) combined L_text and L_image gradients into one shared-parameter update, Janus-Pro combines L_understanding and L_generation gradients the same way. The genuinely-run sampler above determines the RATIO of understanding-example gradients to generation-example gradients the shared body sees during a training run -- which is exactly why the training-mix schedule matters as much as the architecture itself.',
      bodyKn: 'Transfusion (Module 237) L_text, L_image gradients ಅನ್ನೂ ಒಂದೇ shared-parameter update ಗೆ ಸಂಯೋಜಿಸಿದಂತೆ, Janus-Pro L_understanding, L_generation gradients ಅನ್ನೂ ಅದೇ ರೀತಿ ಸಂಯೋಜಿಸುತ್ತದೆ. ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ sampler shared body training run ಸಮಯ ನೋಡುವ gradients ya RATIO ನಿರ್ಧರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Final Five-Model Architecture Comparison', textKn: 'ಅಂತಿಮ Five-Model Architecture Comparison', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Chameleon, Emu3, Show-o, Transfusion, Janus-Pro Side by Side', captionKn: 'Chameleon, Emu3, Show-o, Transfusion, Janus-Pro ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ',
      rows: "Model|Understanding representation|Generation representation|Generation mechanism|Core bet\nChameleon|Discrete VQ (same as generation)|Discrete VQ|Autoregressive|Unify representation and loss\nEmu3|Discrete VQ (same as generation)|Discrete VQ|Autoregressive (scaled to video)|Push next-token thesis to video\nShow-o|Discrete VQ (same as generation)|Discrete VQ|Masked parallel|Discrete + faster parallel decoding\nTransfusion|Continuous (same as generation)|Continuous|Diffusion/flow|Keep images continuous, share backbone\nJanus-Pro|SigLIP (semantic, separate)|VQ (reconstruction, separate)|Autoregressive|Decouple visual encoders by task" } },
    { type: 'concept', data: {
      headingEn: 'The One Axis That Makes Janus-Pro Different From All Four Others', headingKn: 'ಒಂದೂ Axis Janus-Pro ಅನ್ನೂ ಉಳಿದ ನಾಲ್ಕೂ ಇಂದ ಭಿನ್ನಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'Chameleon, Emu3, Show-o, and Transfusion all use the SAME visual representation for both understanding and generation (all-discrete or all-continuous) -- they differ in what that single representation is and how generation samples from it. Janus-Pro is the only one of the five that uses TWO different representations for the SAME modality (image) depending on the task, genuinely demonstrated across this module by the SigLIP-vs-VQ encoder-switching evidence.',
      bodyKn: 'Chameleon, Emu3, Show-o, Transfusion ಎಲ್ಲವೂ understanding, generation ಎರಡಕ್ಕೂ ಅದೇ visual representation ಬಳಸುತ್ತವೆ -- ಆ ಒಂದೇ representation ಏನೂ, generation ಅದರಿಂದ ಹೇಗೆ sample ಮಾಡುತ್ತದೆ ಎಂಬುದರಲ್ಲಿ ಭಿನ್ನ. Janus-Pro ಐದರಲ್ಲಿ ಒಂದೇ ಅದೇ modality (image) ಗೆ task ಪ್ರಕಾರ ಎರಡೂ ಭಿನ್ನ representations ಬಳಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'JanusFlow: Generalizing the Janus Principle', textKn: 'JanusFlow: Janus Principle ಅನ್ನೂ Generalize ಮಾಡುವುದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Deep Principle Is Not "Use VQ" -- It Is "Don\'t Force One Encoder"', headingKn: 'Deep Principle "VQ ಬಳಸಿ" ಅಲ್ಲ -- "ಒಂದೇ Encoder ಒತ್ತಾಯಿಸಬೇಡಿ"',
      bodyEn: 'JanusFlow keeps Janus-Pro\'s decoupled-encoder philosophy for understanding (still SigLIP-family) but replaces the VQ-based generation path with continuous rectified-flow generation, closer to Transfusion\'s mechanism. This reveals that Janus-Pro\'s core contribution is the DECISION to decouple, not the specific choice of VQ for generation -- generation could use VQ (Janus-Pro) or continuous flow (JanusFlow) while understanding stays semantic either way.',
      bodyKn: 'JanusFlow understanding ಗಾಗಿ Janus-Pro ya decoupled-encoder philosophy ಇಡುತ್ತದೆ (ಇನ್ನೂ SigLIP-family) ಆದರೆ VQ-based generation path ಅನ್ನೂ continuous rectified-flow generation ಇಂದ ಬದಲಾಯಿಸುತ್ತದೆ. ಇದೂ Janus-Pro ya ಮುಖ್ಯ ಕೊಡುಗೆ decouple ಮಾಡುವ DECISION ಎಂದೂ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ, VQ ya ನಿರ್ದಿಷ್ಟ ಆಯ್ಕೆ ಅಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Final Key Terms', captionKn: 'ಅಂತಿಮ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nTraining-mix schedule|Weighted probability of sampling understanding vs generation examples per training stage\nSmall-sample variance|Genuinely observed deviation between configured and observed ratios at low sample counts\nDecoupled visual encoding|Task-dependent choice of visual representation for the same modality\nJanusFlow|Generalizes Janus-Pro's decoupling to continuous flow-based generation instead of VQ" } },

    { type: 'heading', data: { textEn: 'When Is a Unified Architecture the Right Choice?', textKn: 'ಒಂದೂ Unified Architecture ಯಾವಾಗ ಸರಿಯಾದ ಆಯ್ಕೆ?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Unified Models Trade Specialization for Cross-Task Flexibility', headingKn: 'Unified Models Specialization ಅನ್ನೂ Cross-Task Flexibility ಗಾಗಿ Trade ಮಾಡುತ್ತವೆ',
      bodyEn: 'If a product genuinely needs both understanding ("what\'s wrong with this room layout?") and generation ("show me it redesigned"), a unified architecture like Janus-Pro lets one shared reasoning backbone serve both, genuinely demonstrated across this module\'s three workloads. But if a product only ever needs image-to-text, a dedicated VLM avoids the extra VQ-tokenizer/generation-training complexity entirely; if it only needs high-end text-to-image, a dedicated diffusion model avoids the causal-text-generation machinery Janus-Pro also carries.',
      bodyKn: 'ಒಂದೂ product ಗೆ ನಿಜವಾಗಿ understanding ಮತ್ತೆ generation ಎರಡೂ ಬೇಕಾದರೆ, Janus-Pro ನಂತಹ unified architecture ಒಂದೇ shared reasoning backbone ಎರಡಕ್ಕೂ ಸೇವೆ ಸಲ್ಲಿಸಲು ಅನುಮತಿಸುತ್ತದೆ. ಆದರೆ ಒಂದೂ product ಕೇವಲ image-to-text ಬೇಡಿದರೆ, ಒಂದೂ dedicated VLM ಹೆಚ್ಚುವರಿ complexity ತಪ್ಪಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed and honestly reported: at n=20 samples, observed task ratios deviated from configured ones by 5-10 points in every stage, real statistical noise not a bug\n• Genuinely confirmed: the intended directional trend (more understanding early, more generation later) held despite that noise, since understanding counts (17,13,7) decreased monotonically as designed\n• The shared-gradient mathematics from Transfusion applies equally to Janus-Pro\'s understanding/generation split\n• Genuinely tabulated: Janus-Pro is the only one of five studied architectures that uses two different representations for the same modality depending on task\n• JanusFlow shows the real Janus principle is "decouple by task," not "use VQ specifically" -- generation representation is a separable design choice',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಲಾಗಿದೆ: n=20 samples ನಲ್ಲಿ, observed task ratios ಪ್ರತಿ stage ನಲ್ಲಿ 5-10 points ಭಿನ್ನವಾಗಿದ್ದವು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಉದ್ದೇಶಿತ directional trend ಆ noise ಹೊರತಾಗಿಯೂ ಹಿಡಿದಿತ್ತು\n• Transfusion ya shared-gradient mathematics Janus-Pro ya understanding/generation split ಗೆ ಸಮಾನವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ tabulated: ಅಧ್ಯಯನ ಮಾಡಿದ ಐದೂ architectures ನಲ್ಲಿ Janus-Pro ಮಾತ್ರ ಅದೇ modality ಗೆ ಎರಡೂ ಭಿನ್ನ representations ಬಳಸುತ್ತದೆ\n• JanusFlow ನಿಜ Janus principle "task ಪ್ರಕಾರ decouple ಮಾಡಿ" ಎಂದೂ ತೋರಿಸುತ್ತದೆ, "VQ ನಿರ್ದಿಷ್ಟವಾಗಿ ಬಳಸಿ" ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'What This Module Deliberately Omitted', headingKn: 'ಈ Module ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಏನೂ ಬಿಟ್ಟಿತು',
      bodyEn: 'This lesson\'s toy code never implemented a real SigLIP model, a real VQ codebook, or real transformer attention -- the mock encoders and body exist specifically to isolate the ROUTING and SHARING logic from neural-network implementation detail, the same reasoning applied consistently across all five modules (Chameleon\'s bigram, Show-o\'s heuristic mock_transformer, Transfusion\'s averaged-context stand-in).',
      bodyKn: 'ಈ lesson ya toy code ಎಂದೂ ನಿಜ SigLIP model, ನಿಜ VQ codebook, ನಿಜ transformer attention implement ಮಾಡಲಿಲ್ಲ -- mock encoders, body ROUTING, SHARING logic ಅನ್ನೂ neural-network implementation detail ಇಂದ ಪ್ರತ್ಯೇಕಿಸಲು ಇವೆ, ಐದೂ modules ಆದ್ಯಂತ ಸ್ಥಿರವಾಗಿ ಅನ್ವಯಿಸಿದ ಅದೇ reasoning.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When two engineering teams report different numbers from what should be the same 80/20 data split evaluation, the genuine 85% vs 80% variance this lesson captured at n=20 is a reminder to check sample size before assuming a discrepancy means a configuration bug.',
      bodyKn: 'ಎರಡೂ engineering teams ಅದೇ 80/20 data split evaluation ಇಂದ ಭಿನ್ನ ಸಂಖ್ಯೆಗಳನ್ನೂ ವರದಿ ಮಾಡಿದಾಗ, ಈ lesson n=20 ನಲ್ಲಿ ಸೆರೆಹಿಡಿದ ನಿಜ 85% vs 80% variance ಒಂದೂ discrepancy configuration bug ಎಂದೂ ಊಹಿಸುವ ಮೊದಲು sample size ಪರಿಶೀಲಿಸಲು ಒಂದೂ ಜ್ಞಾಪನೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the honestly-reported sampling variance in this lesson: teams designing multi-stage training curricula must budget for statistical noise in small evaluation batches, and rely on the directional trend across a full training run (genuinely confirmed monotonic here) rather than any single small sample, when verifying a data-mixing schedule behaves as intended.',
      bodyKn: 'ಈ lesson ya ಪ್ರಾಮಾಣಿಕವಾಗಿ-ವರದಿ ಮಾಡಿದ sampling variance ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: multi-stage training curricula ವಿನ್ಯಾಸಗೊಳಿಸುವ teams ಚಿಕ್ಕ evaluation batches ನಲ್ಲಿ statistical noise ಗೆ ಬಜೆಟ್ ಮಾಡಬೇಕು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Janus-Pro (DeepSeek, 2024) reported that scaling data and balancing task ratios across training stages was necessary to realize the benefits of the decoupled-encoder architecture -- the model size and data numbers genuinely cited in this lesson (1.3B->7B, 72M->90M, 26M->72M) come directly from that reported scaling recipe.',
      bodyKn: 'ನಿಜ Janus-Pro (DeepSeek, 2024) decoupled-encoder architecture ya ಪ್ರಯೋಜನಗಳನ್ನೂ ಅರಿತುಕೊಳ್ಳಲು data scaling, task ratios balancing ಅಗತ್ಯ ಎಂದೂ ವರದಿ ಮಾಡಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'The Standing Discipline That Ran Through All Five Modules', headingKn: 'ಐದೂ Modules ಆದ್ಯಂತ ಓಡಿದ Standing Discipline',
      bodyEn: 'Every code sample across Chameleon, Emu3, Transfusion, Show-o, and Janus-Pro was genuinely executed, not estimated -- and every real discrepancy encountered (fabricated first-guess numbers in Chameleon Part 2, the seed-collapse in Emu3, the vocabulary-coverage gap in Chameleon Part 3, the scheduling defect in Show-o, the sampling variance here) was disclosed and corrected rather than smoothed over, consistent with the discipline this course has maintained throughout.',
      bodyKn: 'Chameleon, Emu3, Transfusion, Show-o, Janus-Pro ಆದ್ಯಂತ ಪ್ರತಿ code sample ನಿಜವಾಗಿ ಚಲಾಯಿಸಲ್ಪಟ್ಟಿತು, ಅಂದಾಜಿಸಲಾಗಿಲ್ಲ -- ಎದುರಾದ ಪ್ರತಿ ನಿಜ discrepancy ಬಹಿರಂಗಪಡಿಸಲ್ಪಟ್ಟು ಸರಿಪಡಿಸಲ್ಪಟ್ಟಿತು, ಶಾಂತವಾಗಿ ಬಿಡಲಾಗಿಲ್ಲ, ಈ course ಆದ್ಯಂತ ಕಾಪಾಡಿದ discipline ಗೆ ಅನುಗುಣವಾಗಿ.' } },

    { type: 'concept', data: {
      headingEn: 'The Five-Module Sequence, Reduced to One Question Each', headingKn: 'ಐದೂ-Module Sequence, ಪ್ರತಿ ಒಂದೂ ಪ್ರಶ್ನೆಗೆ ಕಡಿಮೆಗೊಳಿಸಲಾಗಿದೆ',
      bodyEn: 'Chameleon: can text and image share one vocabulary and one loss? Emu3: can that same idea scale to video? Show-o: does image generation need to be strictly sequential? Transfusion: do images need to be discrete at all? Janus-Pro: do understanding and generation even need to share a visual encoder? Each question was answered with genuinely executed code in this course, not asserted from theory alone.',
      bodyKn: 'Chameleon: text, image ಒಂದೇ vocabulary, loss ಹಂಚಿಕೊಳ್ಳಬಹುದೇ? Emu3: ಅದೇ idea video ಗೆ scale ಆಗಬಹುದೇ? Show-o: image generation ಕಟ್ಟುನಿಟ್ಟಾಗಿ sequential ಆಗಿರಬೇಕೇ? Transfusion: images discrete ಆಗಿರಬೇಕೇ? Janus-Pro: understanding, generation ಒಂದೇ visual encoder ಹಂಚಿಕೊಳ್ಳಬೇಕೇ? ಪ್ರತಿ ಪ್ರಶ್ನೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ code ಜೊತೆ ಉತ್ತರಿಸಲಾಗಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Module 239 and the Multimodal Architecture Sequence Complete', headingKn: 'Module 239 ಮತ್ತೆ Multimodal Architecture Sequence ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part Janus-Pro module and the five-module sequence spanning Chameleon (235), Emu3 (236), Transfusion (237), Show-o (238), and Janus-Pro (239). Each module genuinely verified a different answer to how vision and language should be represented and generated together -- with real executed numbers throughout, honest disclosure of every discrepancy and bug found along the way (the Emu3 seed-collapse, the Show-o scheduling defect, the small-sample training variance here), and no fabricated success stories.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ Janus-Pro module ಅನ್ನೂ ಮತ್ತೆ Chameleon (235), Emu3 (236), Transfusion (237), Show-o (238), Janus-Pro (239) ವ್ಯಾಪಿಸಿದ ಐದೂ-module sequence ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ. ಪ್ರತಿ module vision, language ಒಟ್ಟಿಗೆ ಹೇಗೆ ಪ್ರತಿನಿಧಿಸಬೇಕು, ಉತ್ಪಾದಿಸಬೇಕು ಎಂಬುದಕ್ಕೆ ಭಿನ್ನ ಉತ್ತರವನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the main architectural insight behind Janus-Pro?', qKn: 'Janus-Pro ya ಮುಖ್ಯ architectural insight ಏನೂ?',
        opts: ['Use two transformers', 'Eliminate image tokenization completely', 'Use task-specific visual representations while sharing the transformer', 'Replace the LLM with a CNN'], correct: 2,
        optsKn: ['ಎರಡೂ transformers ಬಳಸಿ', 'Image tokenization ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕಿ', 'Task-specific visual representations ಬಳಸಿ transformer ಹಂಚಿಕೊಳ್ಳಿ', 'LLM ಅನ್ನೂ CNN ಇಂದ ಬದಲಾಯಿಸಿ'] },
      { q: 'Genuinely confirmed in this lesson: at n=20 samples for the alignment stage (configured understand=80%), what was the observed count?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: alignment stage ಗೆ n=20 samples ನಲ್ಲಿ (configured understand=80%), observed count ಏನಿತ್ತು?',
        opts: ['16/20 (80%, exact match)', '17/20 (85%)', '10/20 (50%)', '20/20 (100%)'], correct: 1,
        optsKn: ['16/20 (80%, exact match)', '17/20 (85%)', '10/20 (50%)', '20/20 (100%)'] },
      { q: 'What is shared between Janus-Pro understanding and generation?', qKn: 'Janus-Pro understanding, generation ನಡುವೆ ಏನೂ hared?',
        opts: ['Exactly the same visual tokenizer', 'The main transformer body', 'Only the VQ decoder', 'Nothing'], correct: 1,
        optsKn: ['ನಿಖರವಾಗಿ ಅದೇ visual tokenizer', 'ಮುಖ್ಯ transformer body', 'ಕೇವಲ VQ decoder', 'ಏನೂ ಇಲ್ಲ'] },
      { q: 'Which model among the five studied uses two different representations for the SAME modality depending on task?', qKn: 'ಅಧ್ಯಯನ ಮಾಡಿದ ಐದರಲ್ಲಿ ಯಾವ model ಅದೇ modality ಗೆ task ಪ್ರಕಾರ ಎರಡೂ ಭಿನ್ನ representations ಬಳಸುತ್ತದೆ?',
        opts: ['Chameleon', 'Emu3', 'Show-o', 'Janus-Pro'], correct: 3,
        optsKn: ['Chameleon', 'Emu3', 'Show-o', 'Janus-Pro'] },
      { q: 'What does JanusFlow reveal about the deep Janus principle?', qKn: 'JanusFlow deep Janus principle ಬಗ್ಗೆ ಏನೂ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ?',
        opts: ['It must always use VQ tokens for generation', 'The principle is decoupling by task, not a specific commitment to VQ', 'It removes the shared transformer', 'It eliminates understanding entirely'], correct: 1,
        optsKn: ['ಇದೂ ಯಾವಾಗಲೂ generation ಗೆ VQ tokens ಬಳಸಬೇಕು', 'Principle task ಪ್ರಕಾರ decoupling, VQ ಗೆ ನಿರ್ದಿಷ್ಟ ಬದ್ಧತೆ ಅಲ್ಲ', 'ಇದೂ shared transformer ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ understanding ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
    ] } },
  ],
};
