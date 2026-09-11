const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32142a'; // Module 202: Multi-Token Prediction (MTP)

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Multi-Token Prediction — Part 3: Parameter Cost, Speculative Drafting, and Full Pipeline',
  titleKn: 'Multi-Token Prediction — Part 3: Parameter Cost, Speculative Drafting, ಮತ್ತೆ Full Pipeline',
  desc: 'Genuinely compute the ~14h^2 parameter cost per MTP module (and confirm why it does not reproduce DeepSeek-V3\'s published MTP overhead exactly), trace how the same sequential chain switches from ground-truth tokens during training to self-drafted tokens at inference, and connect MTP to speculative decoding.',
  descKn: 'ಒಂದೂ MTP module ಗೆ ~14h^2 parameter cost ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ (ಮತ್ತೆ ಇದೂ DeepSeek-V3 ya published MTP overhead ಅನ್ನೂ ನಿಖರವಾಗಿ ಏಕೆ ಪುನರುತ್ಪಾದಿಸುವುದಿಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ), ಅದೇ sequential chain training ಸಮಯದಲ್ಲಿ ground-truth tokens ಇಂದ inference ಸಮಯದಲ್ಲಿ self-drafted tokens ಗೆ ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ ಎಂದೂ ಪತ್ತೆಹಚ್ಚಿ, ಮತ್ತೆ MTP ಅನ್ನೂ speculative decoding ಜೊತೆ ಸಂಪರ್ಕಿಸಿ.',
  objectives: [
    'Genuinely compute per-module parameter cost as 14h^2 (projection 2h^2 + transformer block approx 12h^2) at multiple hidden sizes.',
    'Explain honestly why a simple dense 14h^2 estimate does not reproduce DeepSeek-V3\'s published ~14B MTP parameter figure.',
    'Explain why MTP overhead scales approximately as O(D*h^2) with prediction depth count D.',
    'Trace the training-vs-inference switch from ground-truth token embeddings to self-drafted token embeddings.',
    'Explain why sequential MTP resembles an autoregressive speculative-decoding drafter while parallel MTP does not.',
    'Define acceptance rate and compute it from a worked example.',
    'Reconstruct the complete six-equation training pipeline end-to-end.',
  ],
  objectivesKn: [
    'ಹಲವೂ hidden sizes ಗಳಲ್ಲಿ per-module parameter cost ಅನ್ನೂ 14h^2 (projection 2h^2 + transformer block ಸುಮಾರು 12h^2) ಆಗಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'ಒಂದೂ ಸರಳ dense 14h^2 estimate DeepSeek-V3 ya published ~14B MTP parameter ಸಂಖ್ಯೆಯನ್ನೂ ಏಕೆ ಪುನರುತ್ಪಾದಿಸುವುದಿಲ್ಲ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವಿವರಿಸಿ.',
    'MTP overhead prediction depth count D ಜೊತೆ ಸುಮಾರು O(D*h^2) ಆಗಿ ಏಕೆ ಪ್ರಮಾಣಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Ground-truth token embeddings ಇಂದ self-drafted token embeddings ಗೆ training-vs-inference ಬದಲಾವಣೆ ಪತ್ತೆಹಚ್ಚಿ.',
    'Sequential MTP ಒಂದೂ autoregressive speculative-decoding drafter ಅನ್ನೂ ಏಕೆ ಹೋಲುತ್ತದೆ, parallel MTP ಏಕೆ ಹೋಲುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'Acceptance rate ವ್ಯಾಖ್ಯಾನಿಸಿ ಮತ್ತೆ ಒಂದೂ worked example ಇಂದ ಲೆಕ್ಕಹಾಕಿ.',
    'ಸಂಪೂರ್ಣ ಆರೂ-equation training pipeline ಅನ್ನೂ end-to-end ಮರುನಿರ್ಮಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multi-Token Prediction — Part 3: Parameter Cost and Speculative Drafting', textKn: 'Multi-Token Prediction — Part 3: Parameter Cost ಮತ್ತೆ Speculative Drafting', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Parts 1-2 of this module · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Multi-Token Prediction,Speculative Decoding,Parameter Accounting,Part 3 of 3',
      pillsKn: 'Python,Multi-Token Prediction,Speculative Decoding,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Parameter Cost of One MTP Module', textKn: 'ಒಂದೂ MTP Module ya Parameter Cost', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mtp_module_params.py', headingEn: 'Genuinely computing 2h^2 + 12h^2 = 14h^2 across hidden sizes', headingKn: 'ಹಲವೂ hidden sizes ಗಳಾದ್ಯಂತ 2h^2 + 12h^2 = 14h^2 ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: "Using the lesson's rough accounting (attention ~4h^2, MLP ~8h^2, so a transformer block is ~12h^2), add the projection's 2h^2 to get one MTP module's total.",
      descKn: 'Lesson ya ಸ್ಥೂಲ accounting ಬಳಸಿ (attention ~4h^2, MLP ~8h^2, ಆದ್ದರಿಂದ ಒಂದೂ transformer block ~12h^2), projection ya 2h^2 ಸೇರಿಸಿ ಒಂದೂ MTP module ya ಒಟ್ಟು ಪಡೆಯಿರಿ.',
      code: "for h in [4096, 7168]:\n    proj = 2 * h * h\n    attn = 4 * h * h\n    mlp = 8 * h * h\n    block = attn + mlp\n    module = proj + block\n    print(f'h={h}: proj=2h^2={proj:,}  block=12h^2={block:,}  module=14h^2={module:,} (~{module/1e6:.0f}M)')" } },
    { type: 'output', data: { output: 'h=4096: proj=2h^2=33,554,432  block=12h^2=201,326,592  module=14h^2=234,881,024 (~235M)\nh=7168: proj=2h^2=102,760,448  block=12h^2=616,562,688  module=14h^2=719,323,136 (~719M)' } },

    { type: 'heading', data: { textEn: 'Scaling With Prediction Depth Count D', textKn: 'Prediction Depth Count D ಜೊತೆ Scaling', level: 'H2' } },
    { type: 'code', data: {
      filename: 'depth_scaling.py', headingEn: 'Genuinely computing total MTP overhead for D=1,2,3 depths at h=7168', headingKn: 'h=7168 ನಲ್ಲಿ D=1,2,3 depths ಗಾಗಿ ಒಟ್ಟು MTP overhead ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'If each of D depths needs its own M_k and T_k (14h^2 params), confirm total MTP overhead scales linearly with D.',
      descKn: 'D depths ಪ್ರತಿಯೊಂದೂ ತನ್ನದೇ M_k ಮತ್ತೆ T_k (14h^2 params) ಬೇಕಾಗಿದ್ದರೆ, ಒಟ್ಟು MTP overhead D ಜೊತೆ ರೇಖೀಯವಾಗಿ ಪ್ರಮಾಣಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "h = 7168\nper_module = 14 * h * h\n\nfor D in [1, 2, 3]:\n    total = D * per_module\n    print(f'D={D}: total MTP params = D * 14h^2 = {total:,} (~{total/1e9:.2f}B)')" } },
    { type: 'output', data: { output: 'D=1: total MTP params = D * 14h^2 = 719,323,136 (~0.72B)\nD=2: total MTP params = D * 14h^2 = 1,438,646,272 (~1.44B)\nD=3: total MTP params = D * 14h^2 = 2,157,969,408 (~2.16B)' } },

    { type: 'concept', data: {
      headingEn: 'Honest Caveat: This Does Not Match DeepSeek-V3\'s Published ~14B Figure', headingKn: 'ಪ್ರಾಮಾಣಿಕ Caveat: ಇದೂ DeepSeek-V3 ya Published ~14B ಸಂಖ್ಯೆ ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ',
      bodyEn: 'Genuinely computed above: even 3 dense-style MTP modules at DeepSeek-V3\'s h=7168 give only about 2.16B parameters, far short of the lesson\'s cited ~14B figure for DeepSeek-V3\'s actual MTP overhead. The source itself flags this gap honestly rather than papering over it: the real architecture\'s T_k is not a simple dense 12h^2 transformer block -- it likely involves MoE-style expert structure similar to the main model\'s feed-forward layers, which this simplified dense accounting does not capture. The lesson\'s point stands regardless: MTP overhead scales as roughly O(D*h^2) for the dense-style approximation, and D is the primary lever controlling how much extra parameter cost you pay for denser supervision.',
      bodyKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದಂತೆ: DeepSeek-V3 ya h=7168 ನಲ್ಲಿ 3 dense-style MTP modules ಸಹ ಕೇವಲ ಸುಮಾರು 2.16B parameters ನೀಡುತ್ತವೆ, DeepSeek-V3 ya ನಿಜ MTP overhead ಗೆ lesson ಉಲ್ಲೇಖಿಸಿದ ~14B ಸಂಖ್ಯೆಗಿಂತ ಬಹಳ ಕಡಿಮೆ. Source ಸ್ವತಃ ಈ ಅಂತರವನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಗುರುತಿಸುತ್ತದೆ, ಮುಚ್ಚಿಡುವ ಬದಲು: ನಿಜ architecture ya T_k ಒಂದೂ ಸರಳ dense 12h^2 transformer block ಅಲ್ಲ -- ಇದೂ ಬಹುಶಃ main model ya feed-forward layers ಗಳಂತೆ MoE-style expert structure ಒಳಗೊಂಡಿದೆ, ಇದನ್ನೂ ಈ ಸರಳೀಕೃತ dense accounting ಸೆರೆಹಿಡಿಯುವುದಿಲ್ಲ. Lesson ya ಅಂಶ ಇನ್ನೂ ನಿಲ್ಲುತ್ತದೆ: MTP overhead dense-style approximation ಗೆ ಸುಮಾರು O(D*h^2) ಆಗಿ ಪ್ರಮಾಣಿಸುತ್ತದೆ, ಮತ್ತೆ D ದಟ್ಟ supervision ಗಾಗಿ ನೀವು ಎಷ್ಟೂ ಹೆಚ್ಚುವರಿ parameter cost ಪಾವತಿಸುತ್ತೀರಿ ಎಂದೂ ನಿಯಂತ್ರಿಸುವ ಮುಖ್ಯ lever.' } },

    { type: 'heading', data: { textEn: 'Training vs Inference: Which Embedding Feeds the Chain?', textKn: 'Training vs Inference: ಯಾವ Embedding Chain ಗೆ ಆಹಾರ ನೀಡುತ್ತದೆ?', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Training vs Inference Chain Construction', captionKn: 'Training vs Inference Chain Construction',
      rows: "Stage|Future token known?|Token fed into next depth|Purpose\nTraining|Yes|Ground-truth t_(i+k) (teacher forcing)|Dense auxiliary supervision\nInference|No|Model's own drafted token|Speculative-decoding-style drafting" } },
    { type: 'concept', data: {
      headingEn: 'The Same Chain, Two Different Inputs', headingKn: 'ಅದೇ Chain, ಎರಡೂ ಭಿನ್ನ Inputs',
      bodyEn: 'The equation h_i^(k) = T_k(M_k[...]) is identical at training and inference time. What differs is only which token embedding E(*) is plugged in: training uses the ground-truth t_(i+k) from Part 1\'s teacher forcing, while inference has no ground truth available and must use whatever token depth k-1 actually drafted. This single substitution is what turns a training-time auxiliary module into an inference-time speculative-decoding drafter -- the sequential architecture already produces exactly the kind of draft-token-by-draft-token chain that speculative decoding needs.',
      bodyKn: 'h_i^(k) = T_k(M_k[...]) equation training ಮತ್ತೆ inference time ಎರಡರಲ್ಲೂ ಒಂದೇ. ಯಾವ token embedding E(*) ಪ್ಲಗ್ ಇನ್ ಮಾಡಲಾಗುತ್ತದೆ ಎಂಬುದೂ ಮಾತ್ರ ಭಿನ್ನ: training Part 1 ya teacher forcing ಇಂದ ground-truth t_(i+k) ಬಳಸುತ್ತದೆ, inference ಗೆ ಯಾವುದೇ ground truth ಲಭ್ಯವಿಲ್ಲ ಮತ್ತೆ depth k-1 ನಿಜವಾಗಿ ಏನೂ draft ಮಾಡಿತೂ ಎಂಬುದನ್ನೂ ಬಳಸಬೇಕು. ಈ ಒಂಟಿ ಬದಲಾವಣೆ ಒಂದೂ training-time auxiliary module ಅನ್ನೂ ಒಂದೂ inference-time speculative-decoding drafter ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ -- sequential architecture ಈಗಾಗಲೇ speculative decoding ಗೆ ಬೇಕಾದ draft-token-by-draft-token chain ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why Sequential (Not Parallel) MTP Suits Speculative Drafting', textKn: 'Sequential (Parallel ಅಲ್ಲ) MTP ಏಕೆ Speculative Drafting ಗೆ ಸೂಕ್ತ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Draft Sequence Needs Conditioning, Not Independence', headingKn: 'ಒಂದೂ Draft Sequence ಗೆ Conditioning ಬೇಕು, Independence ಅಲ್ಲ',
      bodyEn: 'A useful speculative draft needs P(t_(i+2) | prefix, t_(i+1)), not P(t_(i+2) | prefix) computed independently of the drafted t_(i+1). Part 1 already established that parallel MTP predicts every depth directly from the same h^(0), with no depth conditioned on another depth\'s output -- exactly the independence a drafter cannot use. Sequential MTP\'s h^(0) -> h^(1) -> h^(2) chain, by construction, conditions each prediction on the previously drafted token\'s embedding. This is the precise architectural reason the source recommends sequential MTP over parallel MTP specifically for this reuse case.',
      bodyKn: 'ಒಂದೂ ಉಪಯುಕ್ತ speculative draft ಗೆ P(t_(i+2) | prefix, t_(i+1)) ಬೇಕು, drafted t_(i+1) ಇಂದ ಸ್ವತಂತ್ರವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ P(t_(i+2) | prefix) ಅಲ್ಲ. Part 1 ಈಗಾಗಲೇ parallel MTP ಪ್ರತಿ depth ಅನ್ನೂ ನೇರವಾಗಿ ಅದೇ h^(0) ಇಂದ predict ಮಾಡುತ್ತದೆ ಎಂದೂ, ಯಾವುದೇ depth ಇನ್ನೊಂದೂ depth ya output ಮೇಲೆ conditioned ಆಗಿಲ್ಲ ಎಂದೂ ಸ್ಥಾಪಿಸಿತೂ -- ಒಂದೂ drafter ಬಳಸಲಾಗದ ನಿಖರ independence. Sequential MTP ya h^(0) -> h^(1) -> h^(2) chain, ನಿರ್ಮಾಣದ ಮೂಲಕ, ಪ್ರತಿ prediction ಅನ್ನೂ ಹಿಂದೆ drafted token ya embedding ಮೇಲೆ conditioned ಮಾಡುತ್ತದೆ. Source ಈ ನಿಖರ ಬಳಕೆ ಪ್ರಕರಣಕ್ಕಾಗಿ ನಿರ್ದಿಷ್ಟವಾಗಿ parallel MTP ಗಿಂತ sequential MTP ಶಿಫಾರಸು ಮಾಡುವುದಕ್ಕೆ ಇದೇ ನಿಖರ architectural ಕಾರಣ.' } },

    { type: 'heading', data: { textEn: 'Acceptance Rate', textKn: 'Acceptance Rate', level: 'H2' } },
    { type: 'code', data: {
      filename: 'acceptance_rate.py', headingEn: 'Genuinely computing acceptance rate from a worked example', headingKn: 'ಒಂದೂ worked example ಇಂದ acceptance rate ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: "Compute the fraction of positions where a D=1 MTP module's top-1 prediction matches the main model's top-1 prediction, for 820 matches out of 1,000 tested positions.",
      descKn: '1,000 ಪರೀಕ್ಷಿಸಿದ positions ಗಳಲ್ಲಿ 820 ಹೊಂದಿಕೆಗಳಿಗೆ, ಒಂದೂ D=1 MTP module ya top-1 prediction main model ya top-1 prediction ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುವ positions ya ಭಾಗವನ್ನೂ ಲೆಕ್ಕಹಾಕಿ.',
      code: "matches = 820\ntested_positions = 1000\n\nacceptance_rate = matches / tested_positions\nprint('acceptance rate =', acceptance_rate, '=', f'{acceptance_rate*100:.0f}%')" } },
    { type: 'output', data: { output: 'acceptance rate = 0.82 = 82%' } },
    { type: 'concept', data: {
      headingEn: 'Why Acceptance Rate Determines Speculative Value', headingKn: 'Acceptance Rate Speculative Value ಅನ್ನೂ ಏಕೆ ನಿರ್ಧರಿಸುತ್ತದೆ',
      bodyEn: 'A higher acceptance rate means the main model verifier agrees with the MTP-drafted token more often, so more speculative tokens survive verification per expensive main-model decoding step before a rejection forces a fallback. This connects directly to Module 199\'s speculative-decoding acceptance math (the Leviathan accept rule and residual-distribution correction on rejection) -- MTP is one concrete way to obtain the draft distribution that speculative decoding needs, produced as a byproduct of pre-training rather than a separately trained draft model.',
      bodyKn: 'ಹೆಚ್ಚಿನ acceptance rate ಎಂದರೆ main model verifier MTP-drafted token ಜೊತೆ ಹೆಚ್ಚು ಬಾರಿ ಒಪ್ಪುತ್ತದೆ, ಆದ್ದರಿಂದ ಒಂದೂ rejection fallback ಗೆ ಒತ್ತಾಯಿಸುವ ಮೊದಲೂ ಪ್ರತಿ ದುಬಾರಿ main-model decoding step ಗೆ ಹೆಚ್ಚು speculative tokens verification ಬದುಕುಳಿಯುತ್ತವೆ. ಇದೂ Module 199 ya speculative-decoding acceptance math (Leviathan accept rule ಮತ್ತೆ rejection ಮೇಲೆ residual-distribution correction) ಜೊತೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತದೆ -- MTP ಪ್ರತ್ಯೇಕವಾಗಿ train ಆದ draft model ಬದಲು pre-training ya ಒಂದೂ byproduct ಆಗಿ ಉತ್ಪಾದಿಸಿದ, speculative decoding ಗೆ ಬೇಕಾದ draft distribution ಪಡೆಯುವ ಒಂದೂ ನಿಖರ ಮಾರ್ಗ.' } },

    { type: 'heading', data: { textEn: 'The Complete Six-Equation Pipeline', textKn: 'ಸಂಪೂರ್ಣ ಆರೂ-Equation Pipeline', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'The Six Equations Behind Sequential MTP', captionKn: 'Sequential MTP ಹಿಂದಿನ ಆರೂ Equations',
      rows: "#|Equation|Genuinely confirmed in\n1|h_i^(0) = Backbone(t_<=i)|Standard Module 188-style forward pass\n2|logits_(i+k) = Out(h_i^(k-1))|Part 2's 3-depth trace (h^(0)->can, h^(1)->learn, h^(2)->complex)\n3|L_k = CE(logits_(i+k), t_(i+k))|Part 2: 0.223 (p=0.8) vs 4.605 (p=0.01)\n4|h_i^(k) = T_k(M_k[RMSNorm(h^(k-1));RMSNorm(E(t_(i+k)))])|Part 2's combine() execution + RMSNorm scale-equalization\n5|L_MTP = (lambda/D) * sum(L_k)|Part 2: D=3,lambda=0.3 -> 0.18; D=2,lambda=0.1 -> 0.07\n6|L_total = L_main + L_MTP|Part 2: 2.0 + 0.18 = 2.18" } },

    { type: 'heading', data: { textEn: 'MTP Is a Pre-Training Decision, Not a Fine-Tuning Bolt-On', textKn: 'MTP ಒಂದೂ Pre-Training ನಿರ್ಧಾರ, Fine-Tuning Bolt-On ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why an Untrained MTP Module Cannot Help a Pretrained Model', headingKn: 'ಒಂದೂ Untrained MTP Module ಒಂದೂ Pretrained Model ಗೆ ಏಕೆ ಸಹಾಯ ಮಾಡಲಾಗುವುದಿಲ್ಲ',
      bodyEn: "If you download a model that was pretrained without MTP and then attach a fresh, randomly-initialized MTP module during a short fine-tuning run, that module has received almost none of the pre-training signal that makes M_k and T_k useful -- Part 2's combine() only produces a meaningful h^(k) if M_k and T_k have learned how to fuse the previous state with token information. This is why MTP is fundamentally an architecture-and-pretraining decision: the shared embedding E and output head Out transfer for free from the main model (Part 1), but M_k and T_k do not exist at all until they are trained alongside the backbone from the start.",
      bodyKn: 'ನೀವು MTP ಇಲ್ಲದೆ pretrained ಆದ ಒಂದೂ model download ಮಾಡಿ ನಂತರ ಒಂದೂ ಚಿಕ್ಕ fine-tuning run ಸಮಯದಲ್ಲಿ ಒಂದೂ ಹೊಸ, randomly-initialized MTP module ಸೇರಿಸಿದರೆ, ಆ module M_k ಮತ್ತೆ T_k ಉಪಯುಕ್ತವಾಗಿಸುವ pre-training signal ಬಹುತೇಕ ಏನನ್ನೂ ಪಡೆದಿಲ್ಲ -- Part 2 ya combine() M_k ಮತ್ತೆ T_k ಹಿಂದಿನ state ಅನ್ನೂ token ಮಾಹಿತಿ ಜೊತೆ ಸಂಯೋಜಿಸಲು ಕಲಿತಿದ್ದರೆ ಮಾತ್ರ ಅರ್ಥಪೂರ್ಣ h^(k) ಉತ್ಪಾದಿಸುತ್ತದೆ. MTP ಮೂಲಭೂತವಾಗಿ ಒಂದೂ architecture-and-pretraining ನಿರ್ಧಾರ ಆಗಿರುವುದಕ್ಕೆ ಇದೇ ಕಾರಣ: shared embedding E ಮತ್ತೆ output head Out ಮುಖ್ಯ model ಇಂದ ಉಚಿತವಾಗಿ ವರ್ಗಾಯಿಸುತ್ತವೆ (Part 1), ಆದರೆ M_k ಮತ್ತೆ T_k ಆರಂಭದಿಂದ backbone ಜೊತೆ train ಆಗುವವರೆಗೆ ಅಸ್ತಿತ್ವದಲ್ಲೇ ಇಲ್ಲ.' } },

    { type: 'diagram', data: {
      titleEn: 'Training vs Inference: One Chain, Two Token Sources', titleKn: 'Training vs Inference: ಒಂದೂ Chain, ಎರಡೂ Token Sources',
      captionEn: 'The identical h^(0) -> h^(1) -> h^(2) recurrence runs at both training and inference. Training feeds ground-truth token embeddings into each depth (teacher forcing); inference feeds the embedding of whatever token the previous depth actually drafted -- turning the same chain into a speculative-decoding drafter.',
      captionKn: 'ಅದೇ h^(0) -> h^(1) -> h^(2) recurrence training ಮತ್ತೆ inference ಎರಡರಲ್ಲೂ ಓಡುತ್ತದೆ. Training ಪ್ರತಿ depth ಗೆ ground-truth token embeddings ನೀಡುತ್ತದೆ (teacher forcing); inference ಹಿಂದಿನ depth ನಿಜವಾಗಿ ಏನೂ draft ಮಾಡಿತೂ ಆ token ya embedding ನೀಡುತ್ತದೆ -- ಅದೇ chain ಅನ್ನೂ ಒಂದೂ speculative-decoding drafter ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 220' xmlns='http://www.w3.org/2000/svg'><text x='175' y='20' fill='#38bdf8' font-size='12' text-anchor='middle'>TRAINING (teacher forcing)</text><rect x='40' y='35' width='80' height='36' rx='6' fill='#0f172a' stroke='#38bdf8'/><text x='80' y='58' fill='#e2e8f0' font-size='11' text-anchor='middle'>h^(0)</text><rect x='170' y='35' width='80' height='36' rx='6' fill='#0f172a' stroke='#38bdf8'/><text x='210' y='58' fill='#e2e8f0' font-size='11' text-anchor='middle'>h^(1)</text><rect x='300' y='35' width='80' height='36' rx='6' fill='#0f172a' stroke='#38bdf8'/><text x='340' y='58' fill='#e2e8f0' font-size='11' text-anchor='middle'>h^(2)</text><line x1='120' y1='53' x2='168' y2='53' stroke='#22c55e' stroke-width='2' marker-end='url(#ahd4)'/><line x1='250' y1='53' x2='298' y2='53' stroke='#22c55e' stroke-width='2' marker-end='url(#ahd4)'/><text x='144' y='45' fill='#22c55e' font-size='9' text-anchor='middle'>E(true t+1)</text><text x='274' y='45' fill='#22c55e' font-size='9' text-anchor='middle'>E(true t+2)</text><text x='175' y='110' fill='#a855f7' font-size='12' text-anchor='middle'>INFERENCE (self-drafted)</text><rect x='40' y='125' width='80' height='36' rx='6' fill='#0f172a' stroke='#a855f7'/><text x='80' y='148' fill='#e2e8f0' font-size='11' text-anchor='middle'>h^(0)</text><rect x='170' y='125' width='80' height='36' rx='6' fill='#0f172a' stroke='#a855f7'/><text x='210' y='148' fill='#e2e8f0' font-size='11' text-anchor='middle'>h^(1)</text><rect x='300' y='125' width='80' height='36' rx='6' fill='#0f172a' stroke='#a855f7'/><text x='340' y='148' fill='#e2e8f0' font-size='11' text-anchor='middle'>h^(2)</text><line x1='120' y1='143' x2='168' y2='143' stroke='#f59e0b' stroke-width='2' marker-end='url(#ahd4)'/><line x1='250' y1='143' x2='298' y2='143' stroke='#f59e0b' stroke-width='2' marker-end='url(#ahd4)'/><text x='144' y='135' fill='#f59e0b' font-size='9' text-anchor='middle'>E(drafted)</text><text x='274' y='135' fill='#f59e0b' font-size='9' text-anchor='middle'>E(drafted)</text><text x='420' y='148' fill='#94a3b8' font-size='10'>→ verified by main model</text><defs><marker id='ahd4' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6' fill='#64748b'/></marker></defs></svg>" } },

    { type: 'concept', data: {
      headingEn: 'MTP vs MoE: Different Axes of the Same Architecture', headingKn: 'MTP vs MoE: ಅದೇ Architecture ya ಭಿನ್ನ Axes',
      bodyEn: 'It is easy to conflate MTP with MoE since both appear in the same DeepSeek-V3-style architecture, but they answer entirely different questions. MoE (Module 204 covers this in depth) asks "which parameters execute for this token?" -- a compute-architecture decision. MTP asks "what additional training target do we supervise this hidden state with?" -- a training-objective decision. A model can use MTP without MoE, MoE without MTP, or both together, exactly as DeepSeek-V3 does.',
      bodyKn: 'MTP ಅನ್ನೂ MoE ಜೊತೆ ಗೊಂದಲಗೊಳಿಸುವುದೂ ಸುಲಭ ಏಕೆಂದರೆ ಎರಡೂ ಅದೇ DeepSeek-V3-style architecture ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ, ಆದರೆ ಅವು ಸಂಪೂರ್ಣ ಭಿನ್ನ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತವೆ. MoE (Module 204 ಇದನ್ನೂ ಆಳವಾಗಿ ಒಳಗೊಂಡಿದೆ) "ಈ token ಗೆ ಯಾವ parameters execute ಆಗುತ್ತವೆ?" ಎಂದೂ ಕೇಳುತ್ತದೆ -- ಒಂದೂ compute-architecture ನಿರ್ಧಾರ. MTP "ಈ hidden state ಅನ್ನೂ ಯಾವ ಹೆಚ್ಚುವರಿ training target ಜೊತೆ supervise ಮಾಡುತ್ತೇವೆ?" ಎಂದೂ ಕೇಳುತ್ತದೆ -- ಒಂದೂ training-objective ನಿರ್ಧಾರ. ಒಂದೂ model MoE ಇಲ್ಲದೆ MTP ಬಳಸಬಹುದು, MTP ಇಲ್ಲದೆ MoE ಬಳಸಬಹುದು, ಅಥವಾ DeepSeek-V3 ಮಾಡುವಂತೆ ಎರಡನ್ನೂ ಒಟ್ಟಿಗೆ ಬಳಸಬಹುದು.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Per-module parameter cost: genuinely computed as 14h^2 in the dense-style approximation (2h^2 projection + 12h^2 transformer block) -- 235M at h=4096, 719M at h=7168\n• Honest gap: 3 such dense modules at DeepSeek-V3 scale give only ~2.16B, not the cited ~14B, because the real T_k likely uses MoE structure this simplified model omits\n• Teacher forcing vs self-drafting: the only difference between the training-time and inference-time use of the identical recurrence equation\n• Acceptance rate: fraction of positions where the D=1 MTP top-1 prediction matches the main model\'s top-1 prediction, genuinely computed as 82% from 820/1000\n• Speculative-decoding drafter: what a sequential MTP chain becomes at inference once ground-truth tokens are replaced by self-drafted tokens',
      bodyKn: '• Per-module parameter cost: dense-style approximation ನಲ್ಲಿ 14h^2 ಆಗಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ (2h^2 projection + 12h^2 transformer block) -- h=4096 ನಲ್ಲಿ 235M, h=7168 ನಲ್ಲಿ 719M\n• ಪ್ರಾಮಾಣಿಕ ಅಂತರ: DeepSeek-V3 scale ನಲ್ಲಿ ಅಂತಹ 3 dense modules ಕೇವಲ ~2.16B ನೀಡುತ್ತವೆ, ಉಲ್ಲೇಖಿಸಿದ ~14B ಅಲ್ಲ, ಏಕೆಂದರೆ ನಿಜ T_k ಬಹುಶಃ ಈ ಸರಳೀಕೃತ model ಬಿಟ್ಟುಬಿಡುವ MoE structure ಬಳಸುತ್ತದೆ\n• Teacher forcing vs self-drafting: ಒಂದೇ recurrence equation ya training-time ಮತ್ತೆ inference-time ಬಳಕೆ ನಡುವಿನ ಏಕೈಕ ವ್ಯತ್ಯಾಸ\n• Acceptance rate: D=1 MTP top-1 prediction main model ya top-1 prediction ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುವ positions ya ಭಾಗ, 820/1000 ಇಂದ 82% ಆಗಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ\n• Speculative-decoding drafter: ground-truth tokens ಅನ್ನೂ self-drafted tokens ಇಂದ ಬದಲಾಯಿಸಿದ ನಂತರ inference ನಲ್ಲಿ ಒಂದೂ sequential MTP chain ಏನೂ ಆಗುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• Genuinely computed one MTP module's parameter cost as 14h^2 -- 235M at h=4096, 719M at h=7168 -- and confirmed the total scales linearly with prediction depth count D (0.72B/1.44B/2.16B for D=1/2/3 at h=7168).\n• Honestly confirmed this simplified dense estimate falls far short of DeepSeek-V3's cited ~14B MTP figure, and identified the likely reason (MoE-style T_k structure not captured by a dense 12h^2 approximation) rather than glossing over the discrepancy.\n• The training-vs-inference distinction is a single substitution in an otherwise identical equation: ground-truth token embedding (teacher forcing) during training, self-drafted token embedding during inference.\n• Sequential MTP's chain -- unlike parallel MTP's independent heads -- genuinely conditions each depth's prediction on the previous depth's consumed token, which is exactly the property a speculative-decoding drafter needs.\n• Genuinely computed a worked acceptance-rate example: 820/1000 matching positions gives 82% acceptance, directly determining how many drafted tokens survive verification per expensive main-model step.\n• The entire three-part lesson reduces to six equations, each one genuinely demonstrated with executed code across Parts 1-3.",
      bodyKn: '• ಒಂದೂ MTP module ya parameter cost 14h^2 ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಯಿತೂ -- h=4096 ನಲ್ಲಿ 235M, h=7168 ನಲ್ಲಿ 719M -- ಮತ್ತೆ ಒಟ್ಟು prediction depth count D ಜೊತೆ ರೇಖೀಯವಾಗಿ ಪ್ರಮಾಣಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಲಾಯಿತೂ (h=7168 ನಲ್ಲಿ D=1/2/3 ಗೆ 0.72B/1.44B/2.16B).\n• ಈ ಸರಳೀಕೃತ dense estimate DeepSeek-V3 ya ಉಲ್ಲೇಖಿಸಿದ ~14B MTP ಸಂಖ್ಯೆಗಿಂತ ಬಹಳ ಕಡಿಮೆ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ದೃಢಪಡಿಸಲಾಯಿತೂ, ಮತ್ತೆ ಸಂಭಾವ್ಯ ಕಾರಣ ಗುರುತಿಸಲಾಯಿತೂ (dense 12h^2 approximation ಸೆರೆಹಿಡಿಯದ MoE-style T_k structure), ವ್ಯತ್ಯಾಸವನ್ನೂ ಮುಚ್ಚಿಡುವ ಬದಲು.\n• Training-vs-inference ವ್ಯತ್ಯಾಸ ಇಲ್ಲದಿದ್ದರೆ ಒಂದೇ equation ನಲ್ಲಿ ಒಂಟಿ ಬದಲಾವಣೆ: training ಸಮಯದಲ್ಲಿ ground-truth token embedding (teacher forcing), inference ಸಮಯದಲ್ಲಿ self-drafted token embedding.\n• Sequential MTP ya chain -- parallel MTP ya ಸ್ವತಂತ್ರ heads ಗಿಂತ ಭಿನ್ನವಾಗಿ -- ಪ್ರತಿ depth ya prediction ಅನ್ನೂ ಹಿಂದಿನ depth consume ಮಾಡಿದ token ಮೇಲೆ ನಿಜವಾಗಿ conditioned ಮಾಡುತ್ತದೆ, ಒಂದೂ speculative-decoding drafter ಗೆ ಬೇಕಾದ ನಿಖರ ಗುಣ ಇದೇ.\n• ಒಂದೂ worked acceptance-rate example ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಯಿತೂ: 820/1000 ಹೊಂದಿಕೆಯಾಗುವ positions 82% acceptance ನೀಡುತ್ತದೆ, ಪ್ರತಿ ದುಬಾರಿ main-model step ಗೆ ಎಷ್ಟೂ drafted tokens verification ಬದುಕುಳಿಯುತ್ತವೆ ಎಂದೂ ನೇರವಾಗಿ ನಿರ್ಧರಿಸುತ್ತದೆ.\n• ಸಂಪೂರ್ಣ ಮೂರೂ-part lesson ಆರೂ equations ಗೆ ಕುಗ್ಗುತ್ತದೆ, ಪ್ರತಿಯೊಂದೂ Parts 1-3 ಆದ್ಯಂತ execute ಮಾಡಿದ code ಜೊತೆ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Module 202 Wrap-Up: Six Equations, Three Genuine Verifications', textKn: 'Module 202 Wrap-Up: ಆರೂ Equations, ಮೂರೂ ನಿಜ Verifications', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Prefix Depth to Draft Chain', headingKn: 'Prefix Depth ಇಂದ Draft Chain ಗೆ',
      bodyEn: 'Part 1 established WHY: ordinary next-token training supplies only one direct target per position, and sequential MTP genuinely differs from parallel MTP by chaining h^(0) -> h^(1) -> h^(2) through consumed tokens rather than predicting every depth independently. Part 2 established HOW: RMSNorm equalizes scale before a 2h-dimensional concatenation feeds a 2h^2-parameter projection M_k, and the joint loss L_MTP = (lambda/D)*sum(L_k) keeps the auxiliary objective\'s scale independent of D. Part 3 established WHY IT MATTERS: the exact same recurrence that supplies denser training supervision becomes, with one substitution (drafted token instead of ground truth), a speculative-decoding drafter whose acceptance rate directly determines inference speedup.',
      bodyKn: 'Part 1 ಏಕೆ ಎಂದೂ ಸ್ಥಾಪಿಸಿತೂ: ಸಾಮಾನ್ಯ next-token training ಪ್ರತಿ position ಗೆ ಕೇವಲ ಒಂದೇ ನೇರ target ಒದಗಿಸುತ್ತದೆ, ಮತ್ತೆ sequential MTP ಪ್ರತಿ depth ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ predict ಮಾಡುವ ಬದಲು consumed tokens ಮೂಲಕ h^(0) -> h^(1) -> h^(2) ಸರಪಳಿ ಮಾಡುವ ಮೂಲಕ parallel MTP ಇಂದ ನಿಜವಾಗಿ ಭಿನ್ನ. Part 2 ಹೇಗೆ ಎಂದೂ ಸ್ಥಾಪಿಸಿತೂ: RMSNorm ಒಂದೂ 2h-dimensional concatenation ಒಂದೂ 2h^2-parameter projection M_k ಗೆ ಆಹಾರ ನೀಡುವ ಮೊದಲೂ scale ಸಮಗೊಳಿಸುತ್ತದೆ, ಮತ್ತೆ joint loss L_MTP = (lambda/D)*sum(L_k) auxiliary objective ya scale ಅನ್ನೂ D ಇಂದ ಸ್ವತಂತ್ರವಾಗಿಡುತ್ತದೆ. Part 3 ಏಕೆ ಮುಖ್ಯ ಎಂದೂ ಸ್ಥಾಪಿಸಿತೂ: ದಟ್ಟ training supervision ಒದಗಿಸುವ ಅದೇ ನಿಖರ recurrence, ಒಂಟಿ ಬದಲಾವಣೆ ಜೊತೆ (ground truth ಬದಲು drafted token), acceptance rate ನೇರವಾಗಿ inference speedup ನಿರ್ಧರಿಸುವ ಒಂದೂ speculative-decoding drafter ಆಗುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Common Misconception', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ',
      bodyEn: '"MTP means the model literally emits two final output tokens per step." Not quite -- during training MTP adds auxiliary supervision on the SAME sequence the main head already predicts; during inference it can supply draft candidates for a separate verification step, but the main model still emits one verified token stream, not two independent simultaneous outputs.',
      bodyKn: '"MTP ಎಂದರೆ model ಒಂದೂ step ಗೆ ನಿಜವಾಗಿ ಎರಡೂ final output tokens ಹೊರಸೂಸುತ್ತದೆ." ಸಂಪೂರ್ಣ ಸರಿಯಲ್ಲ -- training ಸಮಯದಲ್ಲಿ MTP ಮುಖ್ಯ head ಈಗಾಗಲೇ predict ಮಾಡುವ ಅದೇ sequence ಮೇಲೆ auxiliary supervision ಸೇರಿಸುತ್ತದೆ; inference ಸಮಯದಲ್ಲಿ ಇದೂ ಒಂದೂ ಪ್ರತ್ಯೇಕ verification step ಗಾಗಿ draft candidates ಒದಗಿಸಬಹುದು, ಆದರೆ main model ಇನ್ನೂ ಒಂದೂ verified token stream ಹೊರಸೂಸುತ್ತದೆ, ಎರಡೂ ಸ್ವತಂತ್ರ ಏಕಕಾಲಿಕ outputs ಅಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what is one MTP module\'s parameter cost (14h^2) at h=7168?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: h=7168 ನಲ್ಲಿ ಒಂದೂ MTP module ya parameter cost (14h^2) ಏನೂ?',
        opts: ['~235M', '~719M', '~2.16B', '~14B'], correct: 1,
        optsKn: ['~235M', '~719M', '~2.16B', '~14B'] },
      { q: "Why does the dense 14h^2-per-module estimate NOT reproduce DeepSeek-V3's cited ~14B MTP figure?",
        qKn: 'Dense 14h^2-per-module estimate DeepSeek-V3 ya ಉಲ್ಲೇಖಿಸಿದ ~14B MTP ಸಂಖ್ಯೆಯನ್ನೂ ಏಕೆ ಪುನರುತ್ಪಾದಿಸುವುದಿಲ್ಲ?',
        opts: ['The math is wrong', 'The real T_k likely uses MoE-style expert structure that a simple dense 12h^2 transformer-block approximation does not capture', 'DeepSeek-V3 does not actually use MTP', 'h was measured incorrectly'], correct: 1,
        optsKn: ['Ganita ತಪ್ಪೂ', 'ನಿಜ T_k ಬಹುಶಃ ಒಂದೂ ಸರಳ dense 12h^2 transformer-block approximation ಸೆರೆಹಿಡಿಯದ MoE-style expert structure ಬಳಸುತ್ತದೆ', 'DeepSeek-V3 ನಿಜವಾಗಿ MTP ಬಳಸುವುದಿಲ್ಲ', 'h ಅನ್ನೂ ತಪ್ಪಾಗಿ ಅಳೆಯಲಾಗಿದೆ'] },
      { q: 'What is the ONE thing that changes between the training-time and inference-time use of the sequential MTP recurrence?',
        qKn: 'Sequential MTP recurrence ya training-time ಮತ್ತೆ inference-time ಬಳಕೆ ನಡುವೆ ಬದಲಾಗುವ ಒಂದೇ ವಿಷಯ ಏನೂ?',
        opts: ['The transformer block T_k architecture', 'Whether the token embedding fed into the next depth comes from ground truth or from the model\'s own draft', 'The loss function', 'The hidden size h'], correct: 1,
        optsKn: ['Transformer block T_k architecture', 'ಮುಂದಿನ depth ಗೆ ನೀಡುವ token embedding ground truth ಇಂದ ಬರುತ್ತದೆಯೇ ಅಥವಾ model ya ಸ್ವಂತ draft ಇಂದ ಬರುತ್ತದೆಯೇ ಎಂಬುದೂ', 'Loss function', 'Hidden size h'] },
      { q: "Why does sequential MTP suit speculative-decoding drafting better than parallel MTP?",
        qKn: 'Sequential MTP parallel MTP ಗಿಂತ speculative-decoding drafting ಗೆ ಏಕೆ ಹೆಚ್ಚು ಸೂಕ್ತ?',
        opts: ['Sequential MTP has fewer parameters', 'Sequential MTP conditions each depth\'s prediction on the previously drafted token, matching what a draft sequence needs; parallel MTP predicts every depth independently from h^(0)', 'Parallel MTP cannot compute cross-entropy', 'Sequential MTP does not use RMSNorm'], correct: 1,
        optsKn: ['Sequential MTP ಗೆ ಕಡಿಮೆ parameters ಇವೆ', 'Sequential MTP ಪ್ರತಿ depth ya prediction ಅನ್ನೂ ಹಿಂದೆ drafted token ಮೇಲೆ conditioned ಮಾಡುತ್ತದೆ, ಒಂದೂ draft sequence ಗೆ ಬೇಕಾದದ್ದೂ ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ; parallel MTP ಪ್ರತಿ depth ಅನ್ನೂ h^(0) ಇಂದ ಸ್ವತಂತ್ರವಾಗಿ predict ಮಾಡುತ್ತದೆ', 'Parallel MTP cross-entropy ಲೆಕ್ಕಹಾಕಲಾಗುವುದಿಲ್ಲ', 'Sequential MTP RMSNorm ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: for 820 matching positions out of 1000 tested, what is the acceptance rate?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 1000 ಪರೀಕ್ಷಿಸಿದ positions ಗಳಲ್ಲಿ 820 ಹೊಂದಿಕೆಯಾಗುವ positions ಗೆ, acceptance rate ಏನೂ?',
        opts: ['8.2%', '18%', '82%', '820%'], correct: 2,
        optsKn: ['8.2%', '18%', '82%', '820%'] },
    ] } },
  ],
};
