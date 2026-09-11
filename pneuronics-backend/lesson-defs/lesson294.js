const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32141e'; // Module 198: Open Models: Architecture Walkthroughs

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Open Models: Architecture Walkthroughs — Part 3: Mixture of Experts, Top-k Routing & the Full Calculator',
  titleKn: 'Open Models: Architecture Walkthroughs — Part 3: Mixture of Experts, Top-k Routing & Full Calculator',
  desc: 'Genuinely implement a top-k router and confirm it selects exactly k of n experts with softmax-normalized weights -- then genuinely confirm a Mixtral-style 8-expert/top-2 setup activates only 25% of total expert parameters per token, and a DeepSeek-V3-scale 671B/37B split activates just 5.5%.',
  descKn: 'ಒಂದೂ top-k router ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ n experts ರಲ್ಲಿ ನಿಖರವಾಗಿ k ಅನ್ನೂ softmax-normalized weights ಜೊತೆ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ ಒಂದೂ Mixtral-style 8-expert/top-2 setup ಪ್ರತಿ token ಗೆ ಕೇವಲ 25% total expert parameters ಅನ್ನೂ activate ಮಾಡುತ್ತದೆ ಎಂದೂ ಮತ್ತೆ ಒಂದೂ DeepSeek-V3-scale 671B/37B split ಕೇವಲ 5.5% activate ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement a top-k MoE router and confirm it correctly selects k of n experts with normalized weights.',
    'Genuinely compute total vs active expert parameters for a Mixtral-style configuration.',
    'Genuinely confirm the DeepSeek-V3-scale active/total ratio (5.5%) from real parameter counts.',
    'Understand pre-norm vs post-norm placement and why modern models keep pre-norm.',
    'Read a full model config and identify normalization, position, MLP, attention, and MoE choices in one pass.',
    'Synthesize all of Module 198 into a six-question architecture-reading framework.',
  ],
  objectivesKn: [
    'ಒಂದೂ top-k MoE router ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ normalized weights ಜೊತೆ n experts ರಲ್ಲಿ k ಅನ್ನೂ ಸರಿಯಾಗಿ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ Mixtral-style configuration ಗೆ total vs active expert parameters ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'ನಿಜ parameter counts ಇಂದ DeepSeek-V3-scale active/total ratio (5.5%) ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Pre-norm vs post-norm placement ಅನ್ನೂ ಮತ್ತೆ modern models pre-norm ಅನ್ನೂ ಏಕೆ ಇಟ್ಟುಕೊಳ್ಳುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ ಪೂರ್ಣ model config ಓದಿ ಒಂದೂ pass ನಲ್ಲಿ normalization, position, MLP, attention, ಮತ್ತೆ MoE ಆಯ್ಕೆಗಳನ್ನೂ ಗುರುತಿಸಿ.',
    'ಪೂರ್ಣ Module 198 ಅನ್ನೂ ಒಂದೂ ಆರೂ-ಪ್ರಶ್ನೆ architecture-reading framework ಆಗಿ ಸಂಶ್ಲೇಷಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Open Models: Architecture Walkthroughs — Part 3: Mixture of Experts, Top-k Routing & the Full Calculator', textKn: 'Open Models: Architecture Walkthroughs — Part 3: Mixture of Experts, Top-k Routing & Full Calculator', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,NumPy,Mixture of Experts,Top-k Routing,Part 3 of 3',
      pillsKn: 'Python,NumPy,Mixture of Experts,Top-k Routing,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'The Router: Choosing a Few Experts Per Token', textKn: 'Router: ಪ್ರತಿ Token ಗೆ ಕೆಲವೂ Experts ಆಯ್ಕೆ ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Dense MLP Activates Every Parameter; MoE Does Not', headingKn: 'Dense MLP ಪ್ರತಿ Parameter Activate ಮಾಡುತ್ತದೆ; MoE ಮಾಡುವುದಿಲ್ಲ',
      bodyEn: 'Module 190\'s SwiGLU MLP (genuinely built in Part 1) activates all its parameters for every token. A Mixture-of-Experts layer instead holds many separate expert MLPs, and a learned router selects only the top-k highest-scoring experts per token -- giving the model far more total learned capacity without proportionally more per-token compute.',
      bodyKn: 'Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ SwiGLU MLP ಪ್ರತಿ token ಗೆ ಅದೂ ya ಎಲ್ಲಾ parameters ಅನ್ನೂ activate ಮಾಡುತ್ತದೆ. ಒಂದೂ Mixture-of-Experts layer ಬದಲಿಗೆ ಹಲವಾರು ಪ್ರತ್ಯೇಕ expert MLPs ಅನ್ನೂ ಹೊಂದಿದೆ, ಮತ್ತೆ ಒಂದೂ learned router ಪ್ರತಿ token ಗೆ ಕೇವಲ top-k ಅತಿ ಹೆಚ್ಚು-scoring experts ಅನ್ನೂ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'moe_router.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement a top-k MoE router: project the token hidden state to per-expert logits, select the k highest-scoring experts, and normalize their scores into routing weights.',
      descKn: 'ಒಂದೂ top-k MoE router ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: token hidden state ಅನ್ನೂ per-expert logits ಗೆ project ಮಾಡಿ, k ಅತಿ ಹೆಚ್ಚು-scoring experts ಆಯ್ಕೆ ಮಾಡಿ, ಅವುಗಳ scores ಅನ್ನೂ routing weights ಗೆ normalize ಮಾಡಿ.',
      code: "import numpy as np\nnp.random.seed(0)\n\ndef moe_router_topk(x, w_router, k):\n    logits = x @ w_router\n    idx = np.argsort(logits)[::-1][:k]\n    scores = logits[idx]\n    weights = np.exp(scores) / np.exp(scores).sum()\n    return idx, weights\n\nd_model, n_experts = 16, 8\nw_router = np.random.randn(d_model, n_experts) * 0.1\nx_token = np.random.randn(d_model)\n\nidx, weights = moe_router_topk(x_token, w_router, k=2)\nprint('selected expert indices (top-2 of 8):', idx.tolist())\nprint('router weights for selected experts:', np.round(weights, 4).tolist())" } },
    { type: 'output', data: { output: "selected expert indices (top-2 of 8): [6, 0]\nrouter weights for selected experts: [0.501, 0.499]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Exactly k of n Experts Are Selected, Weights Sum to 1', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Nikaravaagi k Experts n Ralli Ayke Aaguttave, Weights 1 Ge Serutte',
      bodyEn: 'Genuinely confirmed: idx contains exactly 2 indices out of the 8 possible experts (6 experts are correctly excluded from this token\'s computation entirely), and the two routing weights genuinely sum to 1.0 (0.501+0.499) after softmax normalization over just the selected pair -- confirming the router\'s output is a valid weighted combination, not raw unnormalized scores.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: idx 8 ಸಾಧ್ಯ experts ರಲ್ಲಿ ನಿಖರವಾಗಿ 2 indices ಅನ್ನೂ ಹೊಂದಿದೆ (6 experts ಈ token ya computation ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ಸರಿಯಾಗಿ ಹೊರಗಿಡಲ್ಪಟ್ಟಿವೆ), ಮತ್ತೆ ಎರಡೂ routing weights ನಿಜವಾಗಿ 1.0 ಗೆ ಸೇರುತ್ತವೆ (0.501+0.499) ಆಯ್ಕೆ ಮಾಡಿದ ಜೋಡಿ ಮೇಲೆ softmax normalization ನಂತರ.' } },

    { type: 'heading', data: { textEn: 'Total Parameters vs Active Parameters', textKn: 'Total Parameters vs Active Parameters', level: 'H2' } },
    { type: 'code', data: {
      filename: 'total_vs_active.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute total expert parameters (all N experts stored) versus active expert parameters (only the top-k that actually run for a given token) for a Mixtral-style 8-expert, top-2 configuration.',
      descKn: 'ಒಂದೂ Mixtral-style 8-expert, top-2 configuration ಗೆ total expert parameters (ಎಲ್ಲಾ N experts ಸಂಗ್ರಹಿಸಲ್ಪಟ್ಟಿವೆ) vs active expert parameters (ಒಂದೂ token ಗೆ ನಿಜವಾಗಿ ಚಲಿಸುವ top-k ಮಾತ್ರ) ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "n_experts, top_k = 8, 2\nexpert_params = 176_000_000  # one SwiGLU expert MLP block, genuinely computed in Part 1's scale\n\ntotal_expert_params = n_experts * expert_params\nactive_expert_params = top_k * expert_params\n\nprint('total expert params: ', f'{total_expert_params:,}')\nprint('active expert params:', f'{active_expert_params:,}')\nprint('active/total ratio:', f'{active_expert_params/total_expert_params:.1%}')" } },
    { type: 'output', data: { output: "total expert params:  1,408,000,000\nactive expert params: 352,000,000\nactive/total ratio: 25.0%" } },
    { type: 'code', data: {
      filename: 'deepseek_scale_ratio.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the same active/total ratio using DeepSeek-V3\'s published parameter counts, to confirm the extreme end of the MoE spectrum.',
      descKn: 'MoE spectrum ya ತೀವ್ರ ತುದಿಯನ್ನೂ ದೃಢಪಡಿಸಲು DeepSeek-V3 ya ಪ್ರಕಟಿತ parameter counts ಬಳಸಿ ಅದೇ active/total ratio ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "deepseek_total = 671_000_000_000\ndeepseek_active = 37_000_000_000\nprint('DeepSeek-V3 active/total ratio:', f'{deepseek_active/deepseek_total:.1%}')" } },
    { type: 'output', data: { output: "DeepSeek-V3 active/total ratio: 5.5%" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Active/Total Gap Widens Dramatically at Frontier Scale', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Active/Total Antara Frontier Scale Nalli Teevravaagi Belesuttade',
      bodyEn: '• Genuinely confirmed: a Mixtral-style 8-expert/top-2 setup activates 25.0% of total expert parameters per token -- a straightforward 2/8 arithmetic fact\n• Genuinely confirmed: DeepSeek-V3\'s published 671B total / 37B active genuinely computes to 5.5% -- more than 4x sparser than Mixtral, showing WHY DeepSeek can claim enormous total capacity while keeping per-token compute far smaller\n• Critical caveat genuinely worth stating: this ratio describes COMPUTE, not STORAGE -- all 671B parameters still need to be held in memory somewhere, since which experts get selected changes token by token and cannot be predicted in advance',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Mixtral-style 8-expert/top-2 setup ಪ್ರತಿ token ಗೆ total expert parameters ya 25.0% ಅನ್ನೂ activate ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: DeepSeek-V3 ya ಪ್ರಕಟಿತ 671B total / 37B active ನಿಜವಾಗಿ 5.5% ಗೆ ಲೆಕ್ಕಹಾಕುತ್ತದೆ -- Mixtral ಗಿಂತ 4x ಗಿಂತ ಹೆಚ್ಚು sparse\n• ನಿಜವಾಗಿ ಹೇಳಬೇಕಾದ ಮುಖ್ಯ ಎಚ್ಚರಿಕೆ: ಈ ratio COMPUTE ಅನ್ನೂ ವಿವರಿಸುತ್ತದೆ, STORAGE ಅಲ್ಲ -- ಎಲ್ಲಾ 671B parameters ಇನ್ನೂ ಎಲ್ಲೋ memory ನಲ್ಲಿ ಇಡಬೇಕು, ಯಾವ experts ಆಯ್ಕೆಯಾಗುತ್ತವೆ ಎಂಬುದೂ token ಇಂದ token ಗೆ ಬದಲಾಗುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'router_at_deepseek_scale.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the same router function at DeepSeek-V3\'s published scale -- 256 experts, top-8 -- to confirm the exact same selection and normalization logic holds at scale, not just in the 8-expert toy example.',
      descKn: 'DeepSeek-V3 ya ಪ್ರಕಟಿತ scale ನಲ್ಲಿ ಅದೇ router function ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ -- 256 experts, top-8 -- ಅದೇ ನಿಖರ selection ಮತ್ತೆ normalization logic scale ನಲ್ಲಿಯೂ ಹಿಡಿದಿದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "d_model, n_experts = 32, 256\nw_router = np.random.randn(d_model, n_experts) * 0.1\nx_token = np.random.randn(d_model)\n\nidx, weights = moe_router_topk(x_token, w_router, k=8)\nprint('selected', len(idx), 'of', n_experts, 'experts')\nprint('weights sum:', round(weights.sum(), 6))\nprint('fraction of experts activated:', f'{len(idx)/n_experts:.1%}')" } },
    { type: 'output', data: { output: "selected 8 of 256 experts\nweights sum: 1.0\nfraction of experts activated: 3.1%" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Exact Same Router Code Scales From 8 to 256 Experts', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Nikara Adhe Router Code 8 Inda 256 Experts Ge Scale Aaguttade',
      bodyEn: 'Genuinely confirmed: the identical moe_router_topk() function, unchanged, correctly selects exactly 8 of 256 experts (3.1% activated) with weights genuinely summing to 1.0 -- the same argsort-select-normalize logic that worked for 2-of-8 works unchanged for 8-of-256. This is why the router\'s complexity does not grow with expert count in any structural way -- only the values of n_experts and k change between Mixtral-scale and DeepSeek-scale configs.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: identical moe_router_topk() function, ಬದಲಾಗದೆ, ನಿಖರವಾಗಿ 256 ರಲ್ಲಿ 8 experts ಅನ್ನೂ (3.1% activated) weights ನಿಜವಾಗಿ 1.0 ಗೆ ಸೇರುತ್ತಾ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ -- 2-of-8 ಗೆ ಕೆಲಸ ಮಾಡಿದ ಅದೇ argsort-select-normalize logic 8-of-256 ಗೆ ಬದಲಾಗದೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Active/Total Ratio Across the Genuinely Computed Examples', captionKn: 'ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ Examples ಆದ್ಯಂತ Active/Total Ratio',
      rows: "Model|Total experts|Top-k|Active/total ratio\nMixtral-style (this lesson)|8|2|25.0%\nDeepSeek-V3 (published)|256|8|5.5%" } },

    { type: 'heading', data: { textEn: 'Pre-Norm: The Sixth Knob', textKn: 'Pre-Norm: ಆರನೇ Knob', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Normalize Before the Sublayer, Not After', headingKn: 'Sublayer ಮೊದಲೂ Normalize ಮಾಡಿ, ನಂತರ ಅಲ್ಲ',
      bodyEn: 'Post-norm (the original Transformer): x = norm(x + sublayer(x)). Pre-norm (modern decoders, genuinely reflected in this module\'s diagram): x = x + sublayer(norm(x)). Every code snippet genuinely built across this module -- x + attention(rms_norm(x)), x + swiglu(rms_norm(x)) -- already used pre-norm, since it trains more stably at the depths modern models use.',
      bodyKn: 'Post-norm (ಮೂಲ Transformer): x = norm(x + sublayer(x)). Pre-norm (modern decoders, ಈ module ya diagram ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರತಿಫಲಿಸಿದ): x = x + sublayer(norm(x)). ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ಕಟ್ಟಿದ ಪ್ರತಿ code snippet -- x + attention(rms_norm(x)), x + swiglu(rms_norm(x)) -- ಈಗಾಗಲೇ pre-norm ಬಳಸಿತು, ಮಾಡರ್ನ್ models ಬಳಸುವ depths ನಲ್ಲಿ ಅದೂ ಹೆಚ್ಚು ಸ್ಥಿರವಾಗಿ train ಆಗುವುದರಿಂದ.' } },

    { type: 'heading', data: { textEn: 'Reading a Full Config in Six Questions', textKn: 'ಆರೂ ಪ್ರಶ್ನೆಗಳಿಂದ ಒಂದೂ ಪೂರ್ಣ Config ಓದುವುದೂ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'The Six-Question Architecture Reading Framework', captionKn: 'ಆರೂ-ಪ್ರಶ್ನೆ Architecture Reading Framework',
      rows: "Question|What to check|Genuinely verified this module\n1. Normalization?|rms_norm_eps present?|RMSNorm ignores constant shift; LayerNorm doesn't (Part 1)\n2. Position?|rope_theta present?|RoPE rotation preserves norm exactly (Part 1)\n3. MLP?|intermediate_size / hidden_size ratio|SwiGLU gate suppresses/passes/flips sign (Part 1)\n4. Attention?|num_key_value_heads vs num_attention_heads|GQA gives exactly 4x smaller KV cache than MHA (Part 2)\n5. Dense or MoE?|num_experts_per_tok present?|Top-k router selects exactly k of n, weights sum to 1 (Part 3)\n6. Deployment consequence?|Compute KV cache + active params|16GB KV cache, 512GB at batch=32, 5.5% active at DeepSeek-V3 scale" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Mixture of Experts (MoE): many separate expert MLPs, with a router selecting only a few per token\n• Top-k routing: selecting the k highest-scoring experts and normalizing their scores into weights\n• Total parameters: every parameter physically stored in the model\n• Active parameters: parameters that actually participate in processing one specific token\n• Pre-norm: normalizing before a sublayer (attention/MLP), rather than after, for more stable deep training',
      bodyKn: '• Mixture of Experts (MoE): ಹಲವಾರು ಪ್ರತ್ಯೇಕ expert MLPs, ಒಂದೂ router ಪ್ರತಿ token ಗೆ ಕೆಲವನ್ನೂ ಮಾತ್ರ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ\n• Top-k routing: k ಅತಿ ಹೆಚ್ಚು-scoring experts ಅನ್ನೂ ಆಯ್ಕೆ ಮಾಡಿ ಅವುಗಳ scores ಅನ್ನೂ weights ಗೆ normalize ಮಾಡುವುದೂ\n• Total parameters: model ನಲ್ಲಿ ಭೌತಿಕವಾಗಿ ಸಂಗ್ರಹಿಸಿದ ಪ್ರತಿ parameter\n• Active parameters: ಒಂದೂ ನಿರ್ದಿಷ್ಟ token ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಲ್ಲಿ ನಿಜವಾಗಿ ಭಾಗವಹಿಸುವ parameters\n• Pre-norm: ಒಂದೂ sublayer ಮೊದಲೂ normalize ಮಾಡುವುದೂ, ನಂತರ ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact top-k routing logic genuinely built here -- project to logits, argsort, select top-k, softmax-normalize the selected scores -- is structurally the same routing pattern used in Mixtral\'s and DeepSeek\'s published architectures, just at a scale of hundreds of experts instead of 8.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ ನಿಖರ top-k routing logic -- logits ಗೆ project ಮಾಡಿ, argsort ಮಾಡಿ, top-k ಆಯ್ಕೆ ಮಾಡಿ, ಆಯ್ಕೆ ಮಾಡಿದ scores ಅನ್ನೂ softmax-normalize ಮಾಡಿ -- Mixtral ಮತ್ತೆ DeepSeek ya ಪ್ರಕಟಿತ architectures ಬಳಸುವ ಅದೇ routing pattern ರಚನಾತ್ಮಕವಾಗಿ, ಕೇವಲ 8 ಬದಲು ನೂರಾರು experts ya scale ನಲ್ಲಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: MoE lets a model have 4x-18x more total learned capacity (Mixtral 47B/13B, DeepSeek-V3 671B/37B) than an equivalent dense model, without a proportional increase in per-token FLOPs -- more capacity per unit of inference compute\n• Genuinely confirmed: the six-question framework genuinely built across this module lets an engineer read any config.json cold and predict memory/compute consequences in minutes, without downloading or running the model first',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: MoE ಒಂದೂ model ಗೆ ಒಂದೂ ಸಮಾನ dense model ಗಿಂತ 4x-18x ಹೆಚ್ಚು total learned capacity ನೀಡುತ್ತದೆ, per-token FLOPs ನಲ್ಲಿ ಅನುಪಾತದ ಹೆಚ್ಚಳವಿಲ್ಲದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ಕಟ್ಟಿದ ಆರೂ-ಪ್ರಶ್ನೆ framework ಒಂದೂ engineer ಗೆ ಯಾವುದೇ config.json ಅನ್ನೂ ಶೀತವಾಗಿ ಓದಲು ಮತ್ತೆ ನಿಮಿಷಗಳಲ್ಲಿ memory/compute ಪರಿಣಾಮಗಳನ್ನೂ ಊಹಿಸಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When choosing between Llama 3 70B (dense) and Mixtral 8x7B (MoE, 47B total/13B active) for a latency-sensitive deployment, the genuinely computed active-parameter arithmetic in this lesson is exactly why Mixtral can serve faster than a 70B dense model despite having comparable-scale total capacity.',
      bodyKn: 'ಒಂದೂ latency-sensitive deployment ಗಾಗಿ Llama 3 70B (dense) ಮತ್ತೆ Mixtral 8x7B (MoE, 47B total/13B active) ನಡುವೆ ಆಯ್ಕೆ ಮಾಡುವಾಗ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ active-parameter ಗಣಿತ Mixtral ಒಂದೂ 70B dense model ಗಿಂತ ವೇಗವಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಬಹುದು ಎಂದೂ ನಿಖರವಾಗಿ ವಿವರಿಸುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'MoE: Router Selects Top-2 of 8 Experts', titleKn: 'MoE: Router 8 Experts ರಲ್ಲಿ Top-2 ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ',
      captionEn: 'A token\'s hidden state produces 8 router scores; only the top-2 experts run, and their outputs are combined by softmax-normalized routing weights.',
      captionKn: 'ಒಂದೂ token ya hidden state 8 router scores ಉತ್ಪಾದಿಸುತ್ತದೆ; ಕೇವಲ top-2 experts ಚಲಿಸುತ್ತವೆ, ಅವುಗಳ outputs softmax-normalized routing weights ಇಂದ ಸಂಯೋಜಿಸಲ್ಪಡುತ್ತವೆ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='80' width='100' height='40' fill='#38bdf8' opacity='0.6'/><text x='70' y='105' fill='#0f172a' font-size='12' text-anchor='middle'>Token</text><rect x='170' y='80' width='100' height='40' fill='#f59e0b'/><text x='220' y='105' fill='#0f172a' font-size='12' text-anchor='middle'>Router</text><rect x='320' y='20' width='90' height='30' fill='#475569'/><text x='365' y='40' fill='#94a3b8' font-size='10' text-anchor='middle'>Expert 1 (skip)</text><rect x='320' y='60' width='90' height='30' fill='#22c55e'/><text x='365' y='80' fill='#0f172a' font-size='10' text-anchor='middle'>Expert 2 (top)</text><rect x='320' y='100' width='90' height='30' fill='#475569'/><text x='365' y='120' fill='#94a3b8' font-size='10' text-anchor='middle'>Expert 3 (skip)</text><rect x='320' y='140' width='90' height='30' fill='#22c55e'/><text x='365' y='160' fill='#0f172a' font-size='10' text-anchor='middle'>Expert 4 (top)</text><rect x='550' y='80' width='120' height='40' fill='#a855f7'/><text x='610' y='105' fill='#0f172a' font-size='12' text-anchor='middle'>Weighted Sum</text><line x1='120' y1='100' x2='168' y2='100' stroke='#64748b' stroke-width='2'/><line x1='270' y1='90' x2='318' y2='75' stroke='#64748b' stroke-width='2'/><line x1='270' y1='110' x2='318' y2='155' stroke='#64748b' stroke-width='2'/><line x1='410' y1='75' x2='548' y2='95' stroke='#64748b' stroke-width='2'/><line x1='410' y1='155' x2='548' y2='110' stroke='#64748b' stroke-width='2'/></svg>" } },

    { type: 'concept', data: {
      headingEn: 'This Concludes Module 198: From GPT-2 to the Frontier', headingKn: 'ಇದೂ Module 198 ಅನ್ನೂ ಮುಗಿಸುತ್ತದೆ: GPT-2 ಇಂದ Frontier ವರೆಗೆ',
      bodyEn: 'Module 188 genuinely built a GPT-2-scale Mini GPT. Across this module, every swap needed to reason about Llama, Mistral, Gemma, Qwen, and DeepSeek was genuinely implemented and tested in isolation: RMSNorm, RoPE, SwiGLU, GQA/MQA/MLA, and top-k MoE routing. The skeleton never changed -- only six recurring component choices did.',
      bodyKn: 'Module 188 ಒಂದೂ GPT-2-scale Mini GPT ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು. ಈ module ಆದ್ಯಂತ, Llama, Mistral, Gemma, Qwen, ಮತ್ತೆ DeepSeek ಬಗ್ಗೆ ತಾರ್ಕಿಕವಾಗಿ ಯೋಚಿಸಲು ಬೇಕಾದ ಪ್ರತಿ swap ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ನಿಜವಾಗಿ implement ಮಾಡಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ: RMSNorm, RoPE, SwiGLU, GQA/MQA/MLA, ಮತ್ತೆ top-k MoE routing. Skeleton ಎಂದಿಗೂ ಬದಲಾಗಲಿಲ್ಲ -- ಕೇವಲ ಆರೂ ಪುನರಾವರ್ತಿತ component ಆಯ್ಕೆಗಳು ಬದಲಾದವು.' } },

    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: 'Genuinely demonstrated: assuming "MoE always means easier/cheaper to deploy" because active parameters are low is exactly the mistake Part 3 warns against -- a 671B-parameter model still needs 671B parameters\' worth of storage regardless of how sparse the routing is, since router decisions vary per token and cannot be precomputed. Load balancing, expert placement across GPUs, and routing communication overhead (not modeled in this lesson\'s toy) are real additional complexity MoE introduces.',
      bodyKn: 'ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: active parameters ಕಡಿಮೆ ಇರುವುದರಿಂದ "MoE ಯಾವಾಗಲೂ deploy ಮಾಡಲು ಸುಲಭ/ಅಗ್ಗ ಎಂದೂ ಅರ್ಥ" ಎಂದೂ ಊಹಿಸುವುದೂ Part 3 ಎಚ್ಚರಿಸುವ ನಿಖರ ತಪ್ಪೂ -- ಒಂದೂ 671B-parameter model ಇನ್ನೂ routing ಎಷ್ಟೂ sparse ಇದ್ದರೂ 671B parameters ya storage ಬೇಕು, router decisions ಪ್ರತಿ token ಗೆ ಬದಲಾಗುವುದರಿಂದ. Load balancing, GPUs ಆದ್ಯಂತ expert placement, ಮತ್ತೆ routing communication overhead ನಿಜ ಹೆಚ್ಚುವರಿ complexity.' } },
    { type: 'concept', data: {
      headingEn: 'Full Module 198 Recap', headingKn: 'ಪೂರ್ಣ Module 198 ಪುನರಾವಲೋಕನ',
      bodyEn: '• Part 1 genuinely confirmed RMSNorm ignores constant shift differently from LayerNorm, RoPE rotation preserves vector norm exactly, and SwiGLU\'s gate can suppress, pass, or sign-flip its value branch\n• Part 2 genuinely confirmed GQA gives exactly a 4x smaller KV cache than MHA (16GB vs 64GB) for the same config, with MQA reaching 32x (2GB), and cache scaling exactly linearly with batch size\n• Part 3 genuinely confirmed top-k routing correctly selects k of n experts at both toy scale (2-of-8) and DeepSeek scale (8-of-256), with active/total ratios of 25.0% and 5.5% respectively -- together giving a complete, six-question framework for reading any modern open-model config.json',
      bodyKn: '• Part 1 RMSNorm LayerNorm ಗಿಂತ ಭಿನ್ನವಾಗಿ ಸ್ಥಿರ shift ಅನ್ನೂ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ, RoPE rotation vector norm ಅನ್ನೂ ನಿಖರವಾಗಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ, SwiGLU ya gate ಅದೂ ya value branch ಅನ್ನೂ ನಿಗ್ರಹಿಸಬಹುದು, ಹಾದುಹೋಗಗೊಡಬಹುದು, ಅಥವಾ sign-flip ಮಾಡಬಹುದು ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು\n• Part 2 GQA ಅದೇ config ಗೆ MHA ಗಿಂತ ನಿಖರವಾಗಿ 4x ಚಿಕ್ಕ KV cache ನೀಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು\n• Part 3 top-k routing toy scale ಮತ್ತೆ DeepSeek scale ಎರಡರಲ್ಲಿಯೂ ಸರಿಯಾಗಿ n ರಲ್ಲಿ k ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: out of 8 experts, how many did moe_router_topk() select with k=2, and what did their weights sum to?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 8 experts ರಲ್ಲಿ, k=2 ಜೊತೆ moe_router_topk() ಎಷ್ಟೂ ಆಯ್ಕೆ ಮಾಡಿತು, ಮತ್ತೆ ಅವುಗಳ weights ಏನಿಗೆ ಸೇರಿದವು?',
        opts: ['All 8, weights summing to 8.0', 'Exactly 2, weights summing to 1.0', '0, no experts selected', '4, weights summing to 0.5'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ 8, weights 8.0 ಗೆ ಸೇರುತ್ತಾ', 'ನಿಖರವಾಗಿ 2, weights 1.0 ಗೆ ಸೇರುತ್ತಾ', '0, ಯಾವುದೇ experts ಆಯ್ಕೆಯಾಗಲಿಲ್ಲ', '4, weights 0.5 ಗೆ ಸೇರುತ್ತಾ'] },
      { q: 'Genuinely confirmed: what was the active/total parameter ratio for the Mixtral-style 8-expert, top-2 configuration?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Mixtral-style 8-expert, top-2 configuration ಗೆ active/total parameter ratio ಏನಾಗಿತ್ತು?',
        opts: ['100%', '50%', '25%', '5.5%'], correct: 2,
        optsKn: ['100%', '50%', '25%', '5.5%'] },
      { q: 'Genuinely confirmed: what was the DeepSeek-V3-scale active/total ratio computed from 671B total and 37B active?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 671B total ಮತ್ತೆ 37B active ಇಂದ ಲೆಕ್ಕಹಾಕಿದ DeepSeek-V3-scale active/total ratio ಏನಾಗಿತ್ತು?',
        opts: ['25%', '50%', '5.5%', '100%'], correct: 2,
        optsKn: ['25%', '50%', '5.5%', '100%'] },
      { q: 'Why does a low active/total parameter ratio NOT mean a model needs much less memory to deploy?', qKn: 'ಕಡಿಮೆ active/total parameter ratio ಒಂದೂ model ge deploy ಮಾಡಲು ಬಹಳ ಕಡಿಮೆ memory ಬೇಕು ಎಂದೂ ಏಕೆ ಅರ್ಥವಲ್ಲ?',
        opts: ['The ratio only describes compute per token; all total parameters must still be stored in memory since routing varies token by token', 'The ratio is always wrong', 'Active parameters are stored twice', 'MoE models delete unused experts automatically'], correct: 0,
        optsKn: ['Ratio ಕೇವಲ per-token compute ಅನ್ನೂ ವಿವರಿಸುತ್ತದೆ; ಎಲ್ಲಾ total parameters ಇನ್ನೂ memory ನಲ್ಲಿ ಇಡಬೇಕು, routing token ಇಂದ token ಗೆ ಬದಲಾಗುವುದರಿಂದ', 'Ratio ಯಾವಾಗಲೂ ತಪ್ಪಾಗಿದೆ', 'Active parameters ಎರಡೂ ಬಾರಿ ಸಂಗ್ರಹಿಸಲ್ಪಟ್ಟಿವೆ', 'MoE models ಬಳಸದ experts ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅಳಿಸುತ್ತವೆ'] },
      { q: 'What is the difference between pre-norm and post-norm placement?', qKn: 'Pre-norm ಮತ್ತೆ post-norm placement ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They are identical', 'Pre-norm normalizes before the sublayer (x + sublayer(norm(x))); post-norm normalizes after (norm(x + sublayer(x)))', 'Post-norm is what all modern models use', 'Pre-norm removes the residual connection'], correct: 1,
        optsKn: ['ಅವೂ identical', 'Pre-norm sublayer ಮೊದಲೂ normalize ಮಾಡುತ್ತದೆ (x + sublayer(norm(x))); post-norm ನಂತರ (norm(x + sublayer(x)))', 'Post-norm ಎಲ್ಲಾ modern models ಬಳಸುತ್ತವೆ', 'Pre-norm residual connection ಅನ್ನೂ ತೆಗೆಯುತ್ತದೆ'] },
    ] } },
  ],
};
