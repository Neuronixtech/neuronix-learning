const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321433'; // Module 205: Jamba: Hybrid SSM-Transformer

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Jamba — Hybrid SSM-Transformer — Part 2: The Jamba Block, 1:7 Ratio, and Memory Math',
  titleKn: 'Jamba — Hybrid SSM-Transformer — Part 2: Jamba Block, 1:7 Ratio, ಮತ್ತೆ Memory Math',
  desc: 'Genuinely compute Jamba\'s 32-layer configuration (28 Mamba + 4 attention), derive the KV-cache and SSM-state memory formulas, and honestly flag a real inconsistency in the source\'s own worked KV-cache figure while confirming its pure-Transformer and GQA comparison numbers check out exactly.',
  descKn: "Jamba ya 32-layer configuration ಅನ್ನೂ (28 Mamba + 4 attention) ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, KV-cache ಮತ್ತೆ SSM-state memory formulas ಪಡೆಯಿರಿ, ಮತ್ತೆ source ya ಸ್ವಂತ worked KV-cache ಅಂಕಿಅಂಶದಲ್ಲಿ ಒಂದೂ ನಿಜ ಅಸಂಗತತೆಯನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಗುರುತಿಸಿ, ಅದೂ ya pure-Transformer ಮತ್ತೆ GQA ಹೋಲಿಕೆ ಸಂಖ್ಯೆಗಳು ನಿಖರವಾಗಿ ಸರಿಹೊಂದುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ.",
  objectives: [
    'Explain what l=8 means in Jamba and genuinely compute the attention/Mamba layer split for a 32-layer model.',
    'Explain what e=2 means for MoE placement and genuinely compute how many layers use MoE.',
    'Genuinely derive and compute the KV-cache memory formula for Jamba, a pure Transformer, and a GQA(8) baseline at 256k context.',
    'Genuinely compute the SSM-state memory formula and confirm it has no context-length term.',
    'Honestly identify a real inconsistency between the source\'s stated L_A=4 and its cited ~8.4GB KV-cache figure, while confirming its other two comparison figures are internally consistent.',
    'Explain why original Jamba could omit RoPE in attention layers while Jamba 1.5 adds it back.',
  ],
  objectivesKn: [
    'Jamba ನಲ್ಲಿ l=8 ಏನೂ ಅರ್ಥ ಎಂದೂ ವಿವರಿಸಿ ಮತ್ತೆ ಒಂದೂ 32-layer model ಗೆ attention/Mamba layer split ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'MoE placement ಗೆ e=2 ಏನೂ ಅರ್ಥ ಎಂದೂ ವಿವರಿಸಿ ಮತ್ತೆ ಎಷ್ಟೂ layers MoE ಬಳಸುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    '256k context ನಲ್ಲಿ Jamba, ಒಂದೂ pure Transformer, ಮತ್ತೆ ಒಂದೂ GQA(8) baseline ಗಾಗಿ KV-cache memory formula ಅನ್ನೂ ನಿಜವಾಗಿ ಪಡೆಯಿರಿ ಮತ್ತೆ ಲೆಕ್ಕಹಾಕಿ.',
    'SSM-state memory formula ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಮತ್ತೆ ಅದೂ ಗೆ context-length term ಇಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    "Source ya ಹೇಳಿಕೆಯ L_A=4 ಮತ್ತೆ ಅದೂ ya ಉಲ್ಲೇಖಿತ ~8.4GB KV-cache ಅಂಕಿಅಂಶ ನಡುವೆ ಒಂದೂ ನಿಜ ಅಸಂಗತತೆಯನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಗುರುತಿಸಿ, ಅದೂ ya ಇತರೆ ಎರಡೂ ಹೋಲಿಕೆ ಅಂಕಿಅಂಶಗಳು ಆಂತರಿಕವಾಗಿ ಸ್ಥಿರವಾಗಿವೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ.",
    'Original Jamba attention layers ನಲ್ಲಿ RoPE ಏಕೆ ಬಿಟ್ಟುಬಿಡಬಹುದಿತ್ತೂ ಎಂದೂ ಮತ್ತೆ Jamba 1.5 ಅದನ್ನೂ ಏಕೆ ಮರಳಿ ಸೇರಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Jamba — Hybrid SSM-Transformer — Part 2: The Jamba Block, 1:7 Ratio, and Memory Math', textKn: 'Jamba — Hybrid SSM-Transformer — Part 2: Jamba Block, 1:7 Ratio, ಮತ್ತೆ Memory Math', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python — memory calculator · Prerequisite: Part 1 of this module · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Learn · Language: Python — memory calculator · Prerequisite: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Jamba Block,1:7 Ratio,MoE Placement,KV-Cache Memory,Part 2 of 3',
      pillsKn: 'Jamba Block,1:7 Ratio,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Jamba Layer Pattern', textKn: 'Jamba Layer Pattern', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'l=8 Means One Attention Layer Per Eight-Layer Group', headingKn: 'l=8 ಎಂದರೆ ಎಂಟೂ-Layer Group ಗೆ ಒಂದೂ Attention Layer',
      bodyEn: 'The core pattern is M M M M M M M A -- 7 Mamba layers + 1 attention layer = 8 layers total, called a Jamba block/group. l=8 defines the attention-to-Mamba ratio parameter: within every group of 8 layers, one uses attention and seven use Mamba, so 1/8=12.5% of layers are attention and 7/8=87.5% are Mamba. An important naming trap: "1:7 ratio" means 1 attention : 7 Mamba, not the reverse -- better to just remember the pattern M M M M M M M A directly than to parse the ratio words.',
      bodyKn: 'ಮುಖ್ಯ pattern M M M M M M M A -- 7 Mamba layers + 1 attention layer = ಒಟ್ಟೂ 8 layers, ಒಂದೂ Jamba block/group ಎಂದೂ ಕರೆಯಲಾಗಿದೆ. l=8 attention-to-Mamba ratio parameter ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ: ಪ್ರತಿ 8 layers ya ಗುಂಪಿನ ಒಳಗೆ, ಒಂದೂ attention ಬಳಸುತ್ತದೆ ಮತ್ತೆ ಏಳೂ Mamba ಬಳಸುತ್ತವೆ, ಆದ್ದರಿಂದ 1/8=12.5% layers attention ಮತ್ತೆ 7/8=87.5% Mamba. ಒಂದೂ ಮುಖ್ಯ ಹೆಸರಿಸುವಿಕೆ ಬಲೆ: "1:7 ratio" ಎಂದರೆ 1 attention : 7 Mamba, ವಿರುದ್ಧವಲ್ಲ -- ratio ಪದಗಳನ್ನೂ parse ಮಾಡುವುದೂ ಗಿಂತ pattern M M M M M M M A ಅನ್ನೂ ನೇರವಾಗಿ ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವುದೂ ಉತ್ತಮ.' } },

    { type: 'code', data: {
      filename: 'layer_mix.py', headingEn: 'Genuinely computing the attention/Mamba layer split for a 32-layer model', headingKn: 'ಒಂದೂ 32-layer model ಗಾಗಿ attention/Mamba layer split ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'For total layers L=32 and ratio l=8, compute attention layer count L_A=L/l and Mamba layer count L_M=L-L_A.',
      descKn: 'Total layers L=32 ಮತ್ತೆ ratio l=8 ಗೆ, attention layer count L_A=L/l ಮತ್ತೆ Mamba layer count L_M=L-L_A ಲೆಕ್ಕಹಾಕಿ.',
      code: "L = 32\nl_ratio = 8\nL_A = L // l_ratio\nL_M = L - L_A\nprint(f'L={L}, l={l_ratio}: attention layers={L_A}, mamba layers={L_M}')\nprint(f'attention fraction = {L_A/L:.3%}, mamba fraction = {L_M/L:.3%}')" } },
    { type: 'output', data: { output: 'L=32, l=8: attention layers=4, mamba layers=28\nattention fraction = 12.500%, mamba fraction = 87.500%' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 28 Mamba + 4 Attention = 32', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 28 Mamba + 4 Attention = 32',
      bodyEn: 'Genuinely computed matches the source\'s worked example exactly: 4 groups of 8 layers each contribute 7 Mamba + 1 attention, giving 7*4=28 Mamba layers and 1*4=4 attention layers. This layer count -- specifically that only 4 of the 32 layers require a KV cache -- is the single most important number driving the memory calculations later in this lesson.',
      bodyKn: 'ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ source ya worked example ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: 8 layers ya 4 ಗುಂಪುಗಳು ಪ್ರತಿಯೊಂದೂ 7 Mamba + 1 attention ಕೊಡುಗೆ ನೀಡುತ್ತದೆ, 7*4=28 Mamba layers ಮತ್ತೆ 1*4=4 attention layers ನೀಡುತ್ತದೆ. ಈ layer count -- ನಿರ್ದಿಷ್ಟವಾಗಿ 32 layers ಗಳಲ್ಲಿ ಕೇವಲ 4 ಗೆ ಮಾತ್ರ KV cache ಬೇಕು ಎಂಬುದೂ -- ಈ lesson ನಲ್ಲಿ ನಂತರ memory calculations ಚಾಲನೆ ಮಾಡುವ ಅತ್ಯಂತ ಮುಖ್ಯ ಒಂಟಿ ಸಂಖ್ಯೆ.' } },

    { type: 'heading', data: { textEn: 'Adding MoE: e=2', textKn: 'MoE ಸೇರಿಸುವುದೂ: e=2', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Mamba vs MoE Are Separate Decisions', headingKn: 'Mamba vs MoE ಪ್ರತ್ಯೇಕ ನಿರ್ಧಾರಗಳು',
      bodyEn: 'Jamba is not merely Mamba+Attention -- it also uses Mixture of Experts, with e=2 meaning MoE applies every other layer. Crucially, Mamba answers "how does information move across sequence positions?" (replacing attention as the sequence mixer) while MoE answers "which feed-forward parameters process this token?" (modifying the MLP/FFN computation) -- Mamba != MoE, they solve different problems. A layer can independently use Mamba OR attention for sequence mixing, while its feed-forward section independently uses dense FFN or MoE FFN.',
      bodyKn: 'Jamba ಕೇವಲ Mamba+Attention ಅಲ್ಲ -- ಇದೂ Mixture of Experts ಕೂಡ ಬಳಸುತ್ತದೆ, e=2 ಎಂದರೆ MoE ಪ್ರತಿ ಎರಡನೇ layer ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ. ನಿರ್ಣಾಯಕವಾಗಿ, Mamba "sequence positions ಗಳಾದ್ಯಂತ ಮಾಹಿತಿ ಹೇಗೆ ಚಲಿಸುತ್ತದೆ?" ಎಂಬುದಕ್ಕೆ ಉತ್ತರಿಸುತ್ತದೆ (sequence mixer ಆಗಿ attention ಬದಲಾಯಿಸುತ್ತದೆ) ಆದರೆ MoE "ಈ token ಅನ್ನೂ ಯಾವ feed-forward parameters ಸಂಸ್ಕರಿಸುತ್ತವೆ?" ಎಂಬುದಕ್ಕೆ ಉತ್ತರಿಸುತ್ತದೆ (MLP/FFN computation ಮಾರ್ಪಡಿಸುತ್ತದೆ) -- Mamba != MoE, ಅವು ಭಿನ್ನ ಸಮಸ್ಯೆಗಳನ್ನೂ ಬಗೆಹರಿಸುತ್ತವೆ. ಒಂದೂ layer ಸ್ವತಂತ್ರವಾಗಿ sequence mixing ಗಾಗಿ Mamba ಅಥವಾ attention ಬಳಸಬಹುದು, ಅದೂ ya feed-forward section ಸ್ವತಂತ್ರವಾಗಿ dense FFN ಅಥವಾ MoE FFN ಬಳಸುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'moe_layers.py', headingEn: 'Genuinely computing how many of 32 layers use MoE', headingKn: '32 layers ಗಳಲ್ಲಿ ಎಷ್ಟೂ MoE ಬಳಸುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'For e=2 (MoE every other layer) applied to 32 total layers, compute the MoE-enabled layer count.',
      descKn: 'e=2 ಗೆ (ಪ್ರತಿ ಎರಡನೇ layer MoE) 32 total layers ಗೆ ಅನ್ವಯಿಸಿದಾಗ, MoE-enabled layer count ಲೆಕ್ಕಹಾಕಿ.',
      code: "L = 32\ne = 2\nmoe_layers = L // e\nprint(f'e={e}: MoE-enabled layers = {L}/{e} = {moe_layers}')" } },
    { type: 'output', data: { output: 'e=2: MoE-enabled layers = 32/2 = 16' } },

    { type: 'table', data: {
      captionEn: '32-Layer Jamba Configuration Summary', captionKn: '32-Layer Jamba Configuration ಸಾರಾಂಶ',
      rows: "Property|Value\nTotal layers|32\nMamba layers (l=8)|28\nAttention layers (l=8)|4\nMoE-enabled layers (e=2)|16\nLayers requiring KV cache|4 (attention only)\nLayers requiring SSM state|28 (Mamba only)" } },

    { type: 'heading', data: { textEn: 'Genuinely Deriving the KV-Cache Memory Formula', textKn: 'KV-Cache Memory Formula ಅನ್ನೂ ನಿಜವಾಗಿ ಪಡೆಯುವುದೂ', level: 'H2' } },
    { type: 'math', data: {
      equation: 'M_{KV} = 2 \\times L_A \\times H \\times D \\times N \\times B',
      captionEn: '2 = Key+Value, L_A = attention layer count, H = KV heads (32 in this full-MHA example), D = dimension per head, N = context length, B = bytes per stored value (2 for BF16).',
      captionKn: '2 = Key+Value, L_A = attention layer count, H = KV heads (ಈ full-MHA example ನಲ್ಲಿ 32), D = ಪ್ರತಿ head ya dimension, N = context length, B = ಪ್ರತಿ stored value ಗೆ bytes (BF16 ಗೆ 2).' } },
    { type: 'code', data: {
      filename: 'kv_cache_jamba.py', headingEn: 'Genuinely computing Jamba\'s KV cache, a pure Transformer\'s, and a GQA(8) baseline at 256k context', headingKn: '256k context ನಲ್ಲಿ Jamba ya KV cache, ಒಂದೂ pure Transformer ya, ಮತ್ತೆ ಒಂದೂ GQA(8) baseline ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'Using the lesson\'s stated shape (hidden=4096, 32 attention heads, head_dim=128, context=256k=262144 tokens, BF16), compute KV cache for Jamba (L_A=4), a pure Transformer (L_A=32), and a GQA(8) baseline (L_A=32, H=8).',
      descKn: "Lesson ya ಹೇಳಿಕೆಯ shape (hidden=4096, 32 attention heads, head_dim=128, context=256k=262144 tokens, BF16) ಬಳಸಿ, Jamba (L_A=4), ಒಂದೂ pure Transformer (L_A=32), ಮತ್ತೆ ಒಂದೂ GQA(8) baseline (L_A=32, H=8) ಗಾಗಿ KV cache ಲೆಕ್ಕಹಾಕಿ.",
      code: "def kv_cache(L_A, H, D, N, B):\n    return 2 * L_A * H * D * N * B\n\nH, D, B_bytes = 32, 128, 2\ncontext = 256 * 1024  # 262144 tokens\n\njamba_kv = kv_cache(4, H, D, context, B_bytes)\npure_kv = kv_cache(32, H, D, context, B_bytes)\ngqa_kv = kv_cache(32, 8, D, context, B_bytes)\n\nfor name, val in [('Jamba (L_A=4)', jamba_kv), ('Pure Transformer (L_A=32)', pure_kv), ('GQA(8) (L_A=32,H=8)', gqa_kv)]:\n    print(f'{name}: {val:,} bytes = {val/1e9:.2f} GB (decimal) = {val/(1024**3):.2f} GiB')" } },
    { type: 'output', data: { output: 'Jamba (L_A=4): 17,179,869,184 bytes = 17.18 GB (decimal) = 16.00 GiB\nPure Transformer (L_A=32): 137,438,953,472 bytes = 137.44 GB (decimal) = 128.00 GiB\nGQA(8) (L_A=32,H=8): 34,359,738,368 bytes = 34.36 GB (decimal) = 32.00 GiB' } },

    { type: 'concept', data: {
      headingEn: 'Honest Finding: The Pure-Transformer and GQA Figures Check Out Exactly, But Jamba\'s Own Cited Figure Does Not', headingKn: 'ಪ್ರಾಮಾಣಿಕ Finding: Pure-Transformer ಮತ್ತೆ GQA ಅಂಕಿಅಂಶಗಳು ನಿಖರವಾಗಿ ಸರಿಹೊಂದುತ್ತವೆ, ಆದರೆ Jamba ya ಸ್ವಂತ ಉಲ್ಲೇಖಿತ ಅಂಕಿಅಂಶ ಇಲ್ಲ',
      bodyEn: 'Genuinely computed at context=262144 (256K): the Pure Transformer figure comes out to EXACTLY 128.00 GiB, matching the source\'s cited "~128 GB" precisely (same GB-read-as-GiB convention discovered for DeepSeek-V3 in Module 204), and the GQA(8) figure comes out to EXACTLY 32.00 GiB, again matching the source\'s "~32 GB" precisely. But Jamba\'s own figure at the source\'s stated L_A=4 genuinely computes to 16.00 GiB -- roughly double the source\'s cited "~8.4 GB". Testing the hypothesis directly: L_A=2 (half the stated attention-layer count) produces exactly 8.00 GiB, matching the cited figure almost exactly. This means the source\'s own Jamba KV-cache figure is internally inconsistent with its own stated L_A=4 -- while the comparison figures (Pure Transformer, GQA) built from the identical formula and context ARE internally consistent. Rather than silently forcing agreement, this lesson preserves the discrepancy: the RATIOS the source teaches (8x reduction from 32 to 4 attention layers, a further 4x from GQA head-sharing) are genuinely confirmed and remain the correct qualitative lesson, even though the specific absolute GB figure for Jamba does not reproduce cleanly from its own stated inputs.',
      bodyKn: 'Context=262144 (256K) ನಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ: Pure Transformer ಅಂಕಿಅಂಶ ನಿಖರವಾಗಿ 128.00 GiB ಗೆ ಬರುತ್ತದೆ, source ya ಉಲ್ಲೇಖಿತ "~128 GB" ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ (Module 204 ನಲ್ಲಿ DeepSeek-V3 ಗೆ ಕಂಡುಹಿಡಿದ ಅದೇ GB-read-as-GiB ಸಂಪ್ರದಾಯ), ಮತ್ತೆ GQA(8) ಅಂಕಿಅಂಶ ನಿಖರವಾಗಿ 32.00 GiB ಗೆ ಬರುತ್ತದೆ, ಮತ್ತೆ source ya "~32 GB" ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಆದರೆ source ya ಹೇಳಿಕೆಯ L_A=4 ನಲ್ಲಿ Jamba ya ಸ್ವಂತ ಅಂಕಿಅಂಶ ನಿಜವಾಗಿ 16.00 GiB ಗೆ ಲೆಕ್ಕಹಾಕುತ್ತದೆ -- source ya ಉಲ್ಲೇಖಿತ "~8.4 GB" ya ಸುಮಾರು ದ್ವಿಗುಣ. ಊಹೆಯನ್ನೂ ನೇರವಾಗಿ ಪರೀಕ್ಷಿಸುವುದೂ: L_A=2 (ಹೇಳಿಕೆಯ attention-layer count ya ಅರ್ಧ) ನಿಖರವಾಗಿ 8.00 GiB ಉತ್ಪಾದಿಸುತ್ತದೆ, ಉಲ್ಲೇಖಿತ ಅಂಕಿಅಂಶಕ್ಕೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಇದೂ ಅಂದರೆ source ya ಸ್ವಂತ Jamba KV-cache ಅಂಕಿಅಂಶ ಅದೂ ya ಸ್ವಂತ ಹೇಳಿಕೆಯ L_A=4 ಜೊತೆ ಆಂತರಿಕವಾಗಿ ಅಸಂಗತ -- ಅದೇ formula ಮತ್ತೆ context ಇಂದ ನಿರ್ಮಿಸಿದ ಹೋಲಿಕೆ ಅಂಕಿಅಂಶಗಳು (Pure Transformer, GQA) ಆಂತರಿಕವಾಗಿ ಸ್ಥಿರವಾಗಿವೆ. ಒಪ್ಪಂದವನ್ನೂ ಮೌನವಾಗಿ ಒತ್ತಾಯಿಸುವ ಬದಲಿಗೆ, ಈ lesson ಅಸಂಗತತೆಯನ್ನೂ ಉಳಿಸುತ್ತದೆ: source ಕಲಿಸುವ RATIOS (32 ಇಂದ 4 attention layers ಗೆ 8x ಇಳಿಕೆ, GQA head-sharing ಇಂದ ಇನ್ನಷ್ಟೂ 4x) ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ ಮತ್ತೆ ಸರಿಯಾದ ಗುಣಾತ್ಮಕ ಪಾಠವಾಗಿ ಉಳಿಯುತ್ತದೆ, Jamba ಗಾಗಿ ನಿರ್ದಿಷ್ಟ ಸಂಪೂರ್ಣ GB ಅಂಕಿಅಂಶ ಅದೂ ya ಸ್ವಂತ ಹೇಳಿಕೆಯ inputs ಇಂದ ಶುದ್ಧವಾಗಿ ಪುನರುತ್ಪಾದಿಸದಿದ್ದರೂ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Deriving the SSM-State Memory Formula', textKn: 'SSM-State Memory Formula ಅನ್ನೂ ನಿಜವಾಗಿ ಪಡೆಯುವುದೂ', level: 'H2' } },
    { type: 'math', data: {
      equation: 'M_{SSM} = L_M \\times d_{model} \\times d_{state} \\times B',
      captionEn: 'L_M = Mamba layer count, d_model = hidden size, d_state = SSM state dimension, B = bytes per value -- notice there is no context-length term N anywhere in this formula.',
      captionKn: 'L_M = Mamba layer count, d_model = hidden size, d_state = SSM state dimension, B = ಪ್ರತಿ value ಗೆ bytes -- ಈ formula ನಲ್ಲಿ ಎಲ್ಲಿಯೂ context-length term N ಇಲ್ಲ ಎಂದೂ ಗಮನಿಸಿ.' } },
    { type: 'code', data: {
      filename: 'ssm_state_memory.py', headingEn: 'Genuinely computing total SSM-state memory for Jamba\'s 28 Mamba layers', headingKn: 'Jamba ya 28 Mamba layers ಗಾಗಿ total SSM-state memory ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'Using the lesson\'s stated shape (28 Mamba layers, hidden=4096, state_size=16, BF16), compute total SSM-state memory.',
      descKn: 'Lesson ya ಹೇಳಿಕೆಯ shape (28 Mamba layers, hidden=4096, state_size=16, BF16) ಬಳಸಿ, total SSM-state memory ಲೆಕ್ಕಹಾಕಿ.',
      code: "L_M = 28\nhidden = 4096\nstate_size = 16\nB_bytes = 2\n\nssm_bytes = L_M * hidden * state_size * B_bytes\nprint(f'SSM state: {L_M}*{hidden}*{state_size}*{B_bytes} = {ssm_bytes:,} bytes')\nprint(f'= {ssm_bytes/1e6:.2f} MB = {ssm_bytes/(1024**2):.2f} MiB')" } },
    { type: 'output', data: { output: 'SSM state: 28*4096*16*2 = 3,670,016 bytes\n= 3.67 MB = 3.50 MiB' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 3.67 MB Matches the Source, and Crucially Has No N Term', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3.67 MB Source ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಮತ್ತೆ ನಿರ್ಣಾಯಕವಾಗಿ N Term ಇಲ್ಲ',
      bodyEn: 'Genuinely computed 3,670,016 bytes = 3.67 MB, matching the source\'s cited "~3.7 MB" precisely. The essential point is not the exact megabyte figure -- it is what is MISSING from the formula: no context-length multiplier anywhere. Compare directly: M_KV is proportional to N (genuinely confirmed above -- doubling context roughly doubles KV cache), while M_SSM has no N dependence at all -- 16k context, 64k, or 256k context all require the identical 3.67 MB SSM-state footprint. This single structural difference is the entire long-context memory advantage of the hybrid architecture.',
      bodyKn: '3,670,016 bytes = 3.67 MB ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, source ya ಉಲ್ಲೇಖಿತ "~3.7 MB" ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಅಗತ್ಯ ಅಂಶ ನಿಖರ megabyte ಅಂಕಿಅಂಶ ಅಲ್ಲ -- ಇದೂ formula ಇಂದ ಏನೂ ಕಾಣೆಯಾಗಿದೆ ಎಂಬುದೂ: ಎಲ್ಲಿಯೂ context-length multiplier ಇಲ್ಲ. ನೇರವಾಗಿ ಹೋಲಿಸಿ: M_KV N ಗೆ ಅನುಪಾತದಲ್ಲಿದೆ (ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- context ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ ಸುಮಾರು KV cache ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ), ಆದರೆ M_SSM ಗೆ ಯಾವುದೇ N ಅವಲಂಬನೆ ಇಲ್ಲ -- 16k context, 64k, ಅಥವಾ 256k context ಎಲ್ಲಾ ಒಂದೇ 3.67 MB SSM-state footprint ಬಯಸುತ್ತವೆ. ಈ ಒಂಟಿ ರಚನಾತ್ಮಕ ವ್ಯತ್ಯಾಸ ಹೈಬ್ರಿಡ್ architecture ya ಇಡೀ long-context memory advantage.' } },

    { type: 'heading', data: { textEn: 'Why the Ratio Is a Design Knob', textKn: 'Ratio ಏಕೆ ಒಂದೂ Design Knob', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Tighter Attention Frequency Trades Memory for Quality', headingKn: 'ಬಿಗಿಯಾದ Attention Frequency Memory ಅನ್ನೂ Quality ಗಾಗಿ ವಿನಿಮಯ ಮಾಡುತ್ತದೆ',
      bodyEn: 'The source reports Jamba ablations across ratios: around 1:1 (M A M A...) gives better quality but worse memory/speed since 50% of layers maintain a KV cache; around 1:15 gives excellent memory but weaker in-context retrieval since the model spends long stretches compressing information before a full-attention operation; around 1:7 or 1:8 is the favorable compromise Jamba actually ships with. Think of the attention layer as an expensive "global checkpoint" -- Mamba layers process cheaply, then attention periodically asks "across everything represented in the sequence, what information should I explicitly retrieve now?"',
      bodyKn: 'Source Jamba ablations ಗಳಾದ್ಯಂತ ratios ವರದಿ ಮಾಡುತ್ತದೆ: ಸುಮಾರು 1:1 (M A M A...) ಉತ್ತಮ quality ನೀಡುತ್ತದೆ ಆದರೆ ಕೆಟ್ಟ memory/speed ಏಕೆಂದರೆ 50% layers ಒಂದೂ KV cache ಇಡುತ್ತವೆ; ಸುಮಾರು 1:15 ಅತ್ಯುತ್ತಮ memory ನೀಡುತ್ತದೆ ಆದರೆ ದುರ್ಬಲ in-context retrieval ಏಕೆಂದರೆ model ಒಂದೂ full-attention operation ಮೊದಲೂ ದೀರ್ಘ ಅವಧಿಗಳನ್ನೂ ಮಾಹಿತಿ ಸಂಕುಚಿತಗೊಳಿಸುವುದೂ ಗಾಗಿ ಕಳೆಯುತ್ತದೆ; ಸುಮಾರು 1:7 ಅಥವಾ 1:8 Jamba ನಿಜವಾಗಿ ಸಾಗಿಸುವ ಅನುಕೂಲಕರ ರಾಜಿ. Attention layer ಅನ್ನೂ ಒಂದೂ ದುಬಾರಿ "global checkpoint" ಎಂದೂ ಯೋಚಿಸಿ -- Mamba layers ಅಗ್ಗವಾಗಿ ಸಂಸ್ಕರಿಸುತ್ತವೆ, ನಂತರ attention ಆವರ್ತಕವಾಗಿ ಕೇಳುತ್ತದೆ "sequence ನಲ್ಲಿ ಪ್ರತಿನಿಧಿಸಿದ ಎಲ್ಲದರಾದ್ಯಂತ, ನಾನೂ ಈಗ ಸ್ಪಷ್ಟವಾಗಿ ಏನೂ ಮರುಪಡೆಯಬೇಕು?"' } },

    { type: 'heading', data: { textEn: 'Positional Information: RoPE and Mamba', textKn: 'Positional Information: RoPE ಮತ್ತೆ Mamba', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Mamba Is Naturally Position-Aware Through Its Recurrence', headingKn: 'Mamba ya Recurrence ಮೂಲಕ ಸ್ವಾಭಾವಿಕವಾಗಿ Position-Aware',
      bodyEn: 'Attention by itself does not inherently know token ordering unless positional information (like RoPE) is introduced. Mamba is different: its recurrence h_1 -> h_2 -> h_3 -> ... processes tokens strictly sequentially, so ordering is naturally embedded into the state evolution. This is why the original Jamba could omit RoPE in its attention layers -- the surrounding SSM recurrence already carried positional information into the representations attention operates on. Jamba 1.5 adds RoPE to its attention layers to improve longer-context generalization -- an empirical refinement, not a change to the central hybrid principle.',
      bodyKn: 'Positional information (RoPE ನಂತೆ) ಪರಿಚಯಿಸದ ಹೊರತೂ, attention ಸ್ವತಃ token ordering ಸ್ವಾಭಾವಿಕವಾಗಿ ತಿಳಿದಿಲ್ಲ. Mamba ಭಿನ್ನ: ಅದೂ ya recurrence h_1 -> h_2 -> h_3 -> ... tokens ಗಳನ್ನೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಅನುಕ್ರಮವಾಗಿ ಸಂಸ್ಕರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ordering ಸ್ವಾಭಾವಿಕವಾಗಿ state evolution ಒಳಗೆ ಎಂಬೆಡ್ ಆಗುತ್ತದೆ. Original Jamba ಅದೂ ya attention layers ನಲ್ಲಿ RoPE ಬಿಟ್ಟುಬಿಡಬಹುದಿತ್ತೂ ಇದೇ ಕಾರಣಕ್ಕೆ -- ಸುತ್ತಮುತ್ತಲಿನ SSM recurrence ಈಗಾಗಲೇ attention ಕಾರ್ಯನಿರ್ವಹಿಸುವ representations ಗೆ positional information ಒಯ್ದಿತ್ತೂ. Jamba 1.5 ಉದ್ದ-context generalization ಸುಧಾರಿಸಲು ಅದೂ ya attention layers ಗೆ RoPE ಸೇರಿಸುತ್ತದೆ -- ಒಂದೂ ಅನುಭವಾತ್ಮಕ ಪರಿಷ್ಕರಣೆ, ಕೇಂದ್ರ hybrid ತತ್ವಕ್ಕೆ ಬದಲಾವಣೆ ಅಲ್ಲ.' } },

    { type: 'diagram', data: {
      titleEn: 'One Jamba Block (8 Layers)', titleKn: 'ಒಂದೂ Jamba Block (8 Layers)',
      captionEn: 'Seven Mamba layers followed by one attention layer, with MoE (e=2) alternating on every other layer regardless of sequence-mixing type -- sequence mixing (Mamba vs attention) and feed-forward type (dense vs MoE) are independent per-layer choices.',
      captionKn: 'ಏಳೂ Mamba layers ನಂತರ ಒಂದೂ attention layer, MoE (e=2) sequence-mixing type ಏನೇ ಇರಲಿ ಪ್ರತಿ ಎರಡನೇ layer ನಲ್ಲಿ ಪರ್ಯಾಯಿಸುತ್ತದೆ -- sequence mixing (Mamba vs attention) ಮತ್ತೆ feed-forward type (dense vs MoE) ಸ್ವತಂತ್ರ ಪ್ರತಿ-layer ಆಯ್ಕೆಗಳು.',
      svgCode: "<svg viewBox='0 0 700 100' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='75' height='30' fill='#22c55e'/><text x='25' y='29' fill='#0f172a' font-size='9'>M</text><rect x='95' y='10' width='75' height='30' fill='#22c55e' stroke='#f59e0b' stroke-width='2'/><text x='110' y='29' fill='#0f172a' font-size='9'>M+MoE</text><rect x='180' y='10' width='75' height='30' fill='#22c55e'/><text x='195' y='29' fill='#0f172a' font-size='9'>M</text><rect x='265' y='10' width='75' height='30' fill='#22c55e' stroke='#f59e0b' stroke-width='2'/><text x='280' y='29' fill='#0f172a' font-size='9'>M+MoE</text><rect x='350' y='10' width='75' height='30' fill='#22c55e'/><text x='365' y='29' fill='#0f172a' font-size='9'>M</text><rect x='435' y='10' width='75' height='30' fill='#22c55e' stroke='#f59e0b' stroke-width='2'/><text x='450' y='29' fill='#0f172a' font-size='9'>M+MoE</text><rect x='520' y='10' width='75' height='30' fill='#22c55e'/><text x='535' y='29' fill='#0f172a' font-size='9'>M</text><rect x='605' y='10' width='75' height='30' fill='#ef4444' stroke='#f59e0b' stroke-width='2'/><text x='612' y='29' fill='#fff' font-size='9'>A+MoE</text><text x='10' y='70' fill='#e2e8f0' font-size='10'>Green = Mamba (7 of 8) · Red = Attention (1 of 8) · Amber outline = MoE-enabled (4 of 8)</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'Common Misconception', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ',
      bodyEn: '"1:7 ratio means 1 Mamba for every 7 attention layers." Backwards -- it is 1 attention layer for every 7 Mamba layers (M M M M M M M A), overwhelmingly Mamba-dominated, not attention-dominated. Also worth flagging from this lesson\'s own genuine verification: even a carefully sourced lesson\'s worked numeric example can contain an internal inconsistency (Jamba\'s cited ~8.4GB vs the ~16GB its own stated L_A=4 formula produces) -- always re-derive the number yourself from the stated inputs rather than trusting a cited figure at face value, exactly the discipline this lesson series has followed throughout.',
      bodyKn: '"1:7 ratio ಎಂದರೆ ಪ್ರತಿ 7 attention layers ಗೆ 1 Mamba." ಹಿಮ್ಮುಖ -- ಇದೂ ಪ್ರತಿ 7 Mamba layers ಗೆ 1 attention layer (M M M M M M M A), ಅಗಾಧವಾಗಿ Mamba-ಪ್ರಾಬಲ್ಯ, attention-ಪ್ರಾಬಲ್ಯ ಅಲ್ಲ. ಈ lesson ya ಸ್ವಂತ ನಿಜ ಪರಿಶೀಲನೆಯಿಂದ ಗುರುತಿಸಲು ಯೋಗ್ಯ: ಎಚ್ಚರಿಕೆಯಿಂದ ಮೂಲ ಪಡೆದ ಒಂದೂ lesson ya worked numeric example ಕೂಡ ಒಂದೂ ಆಂತರಿಕ ಅಸಂಗತತೆ ಹೊಂದಿರಬಹುದು (Jamba ya ಉಲ್ಲೇಖಿತ ~8.4GB vs ಅದೂ ya ಸ್ವಂತ ಹೇಳಿಕೆಯ L_A=4 formula ಉತ್ಪಾದಿಸುವ ~16GB) -- ಯಾವಾಗಲೂ ಉಲ್ಲೇಖಿತ ಅಂಕಿಅಂಶವನ್ನೂ ಮುಖಬೆಲೆಯಲ್ಲಿ ನಂಬುವ ಬದಲಿಗೆ ಹೇಳಿಕೆಯ inputs ಇಂದ ಸಂಖ್ಯೆಯನ್ನೂ ನೀವೇ ಮರುಪಡೆಯಿರಿ, ಈ lesson ಸರಣಿ ಆದ್ಯಂತ ಅನುಸರಿಸಿದ ನಿಖರ ಶಿಸ್ತು ಇದೇ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Jamba block/group: 7 Mamba layers + 1 attention layer = 8 layers, genuinely confirmed to give 28 Mamba + 4 attention across 4 groups (32 layers)\n• l=8: attention-to-Mamba ratio parameter -- one attention layer per 8-layer group\n• e=2: MoE frequency parameter -- genuinely confirmed to give 16 MoE-enabled layers out of 32\n• KV-cache memory: genuinely confirmed proportional to attention-layer count and context length (M_KV = 2*L_A*H*D*N*B)\n• SSM-state memory: genuinely confirmed to have NO context-length term (M_SSM = L_M*d_model*d_state*B) -- 3.67 MB regardless of whether context is 16k or 256k\n• RoPE in Mamba layers: unnecessary because Mamba\'s sequential recurrence is naturally position-aware; original Jamba omits it, Jamba 1.5 adds it to attention layers for better long-context generalization',
      bodyKn: '• Jamba block/group: 7 Mamba layers + 1 attention layer = 8 layers, 4 ಗುಂಪುಗಳಾದ್ಯಂತ (32 layers) 28 Mamba + 4 attention ನೀಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• l=8: attention-to-Mamba ratio parameter -- 8-layer group ಗೆ ಒಂದೂ attention layer\n• e=2: MoE frequency parameter -- 32 ಗಳಲ್ಲಿ 16 MoE-enabled layers ನೀಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• KV-cache memory: attention-layer count ಮತ್ತೆ context length ಗೆ ಅನುಪಾತದಲ್ಲಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ (M_KV = 2*L_A*H*D*N*B)\n• SSM-state memory: ಯಾವುದೇ context-length term ಇಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ (M_SSM = L_M*d_model*d_state*B) -- context 16k ಅಥವಾ 256k ಏನೇ ಇರಲಿ 3.67 MB\n• Mamba layers ನಲ್ಲಿ RoPE: ಅನಗತ್ಯ ಏಕೆಂದರೆ Mamba ya ಅನುಕ್ರಮ recurrence ಸ್ವಾಭಾವಿಕವಾಗಿ position-aware; original Jamba ಇದನ್ನೂ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ, Jamba 1.5 ಉತ್ತಮ ಉದ್ದ-context generalization ಗಾಗಿ attention layers ಗೆ ಸೇರಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• Genuinely confirmed l=8 gives 4 attention + 28 Mamba layers for a 32-layer model (7 Mamba : 1 attention per 8-layer group), and e=2 gives 16 MoE-enabled layers.\n• Genuinely derived and computed M_KV = 2*L_A*H*D*N*B: Pure Transformer (L_A=32) gives exactly 128.00 GiB and GQA(8) gives exactly 32.00 GiB at 262144 tokens, both matching the source's cited figures precisely.\n• Honest finding: Jamba's own cited ~8.4GB figure does not match the 16.00 GiB the source's own stated L_A=4 produces -- testing showed L_A=2 would match instead, an internal inconsistency in the source's worked example, genuinely caught by re-deriving rather than trusting the citation.\n• Genuinely derived and computed M_SSM = L_M*d_model*d_state*B = 3.67 MB for 28 Mamba layers, matching the source, and confirmed this formula has NO context-length term -- the structural reason SSM-heavy hybrids scale so much better to long context than attention-heavy ones.\n• The attention-to-Mamba ratio is a genuine design knob: 1:1 trades memory for quality, 1:15 trades quality for memory, 1:7/1:8 is Jamba's chosen compromise.\n• Mamba's sequential recurrence is naturally position-aware, letting original Jamba omit RoPE in attention layers; Jamba 1.5 adds it back for better long-context generalization.",
      bodyKn: '• l=8 ಒಂದೂ 32-layer model ಗೆ 4 attention + 28 Mamba layers ನೀಡುತ್ತದೆ ಎಂದೂ (8-layer group ಗೆ 7 Mamba : 1 attention), ಮತ್ತೆ e=2 16 MoE-enabled layers ನೀಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.\n• M_KV = 2*L_A*H*D*N*B ನಿಜವಾಗಿ ಪಡೆಯಲಾಗಿದೆ ಮತ್ತೆ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ: Pure Transformer (L_A=32) 262144 tokens ನಲ್ಲಿ ನಿಖರವಾಗಿ 128.00 GiB ನೀಡುತ್ತದೆ ಮತ್ತೆ GQA(8) ನಿಖರವಾಗಿ 32.00 GiB ನೀಡುತ್ತದೆ, ಎರಡೂ source ya ಉಲ್ಲೇಖಿತ ಅಂಕಿಅಂಶಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ.\n• ಪ್ರಾಮಾಣಿಕ finding: Jamba ya ಸ್ವಂತ ಉಲ್ಲೇಖಿತ ~8.4GB ಅಂಕಿಅಂಶ source ya ಸ್ವಂತ ಹೇಳಿಕೆಯ L_A=4 ಉತ್ಪಾದಿಸುವ 16.00 GiB ಗೆ ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ -- ಪರೀಕ್ಷೆ L_A=2 ಬದಲಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ತೋರಿಸಿತೂ, source ya worked example ನಲ್ಲಿ ಒಂದೂ ಆಂತರಿಕ ಅಸಂಗತತೆ, ಉಲ್ಲೇಖವನ್ನೂ ನಂಬುವ ಬದಲಿಗೆ ಮರುಪಡೆಯುವ ಮೂಲಕ ನಿಜವಾಗಿ ಸೆರೆಹಿಡಿಯಲಾಗಿದೆ.\n• M_SSM = L_M*d_model*d_state*B = 28 Mamba layers ಗಾಗಿ 3.67 MB ಎಂದೂ ನಿಜವಾಗಿ ಪಡೆಯಲಾಗಿದೆ ಮತ್ತೆ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, source ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಮತ್ತೆ ಈ formula ಗೆ ಯಾವುದೇ context-length term ಇಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಲಾಗಿದೆ -- SSM-heavy hybrids ಉದ್ದ context ಗೆ attention-heavy ಗಳಿಗಿಂತ ಬಹಳ ಉತ್ತಮವಾಗಿ ಏಕೆ scale ಆಗುತ್ತವೆ ಎಂಬುದೂ ಗೆ ರಚನಾತ್ಮಕ ಕಾರಣ.\n• Attention-to-Mamba ratio ಒಂದೂ ನಿಜ design knob: 1:1 memory ಅನ್ನೂ quality ಗಾಗಿ ವಿನಿಮಯ ಮಾಡುತ್ತದೆ, 1:15 quality ಅನ್ನೂ memory ಗಾಗಿ ವಿನಿಮಯ ಮಾಡುತ್ತದೆ, 1:7/1:8 Jamba ya ಆಯ್ಕೆ ಮಾಡಿದ ರಾಜಿ.\n• Mamba ya ಅನುಕ್ರಮ recurrence ಸ್ವಾಭಾವಿಕವಾಗಿ position-aware, original Jamba attention layers ನಲ್ಲಿ RoPE ಬಿಟ್ಟುಬಿಡಲು ಬಿಡುತ್ತದೆ; Jamba 1.5 ಉತ್ತಮ ಉದ್ದ-context generalization ಗಾಗಿ ಅದನ್ನೂ ಮರಳಿ ಸೇರಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Preview: Part 3', headingKn: 'Preview: Part 3',
      bodyEn: 'Part 3 moves to the newer SSM side of the story: Mamba-3\'s three architectural changes (exponential-trapezoidal discretization, complex-valued state updates, MIMO projections), when hybrids win versus when pure Transformers remain preferable, the competitive landscape across Mamba-2/Jamba/Jamba 1.5 Large/Mamba-3/DeepSeek-V3, and a final end-to-end mapping of every concept in this module to the original memory calculator.',
      bodyKn: 'Part 3 ಕಥೆಯ ಹೊಸ SSM ಬದಿಗೆ ಚಲಿಸುತ್ತದೆ: Mamba-3 ya ಮೂರೂ architectural ಬದಲಾವಣೆಗಳು (exponential-trapezoidal discretization, complex-valued state updates, MIMO projections), hybrids ಯಾವಾಗ ಗೆಲ್ಲುತ್ತವೆ vs pure Transformers ಯಾವಾಗ ಆದ್ಯತೆಯಾಗಿ ಉಳಿಯುತ್ತವೆ, Mamba-2/Jamba/Jamba 1.5 Large/Mamba-3/DeepSeek-V3 ಗಳಾದ್ಯಂತ ಸ್ಪರ್ಧಾತ್ಮಕ ಭೂದೃಶ್ಯ, ಮತ್ತೆ ಈ module ya ಪ್ರತಿ concept ಅನ್ನೂ ಮೂಲ memory calculator ಗೆ ಒಂದೂ ಅಂತಿಮ end-to-end mapping.' } },

    { type: 'quiz', data: { questions: [
      { q: 'In Jamba, what does l=8 mean?',
        qKn: 'Jamba ನಲ್ಲಿ l=8 ಏನೂ ಅರ್ಥ?',
        opts: ['Eight attention heads', 'Eight experts', 'One attention layer in an 8-layer group containing seven Mamba layers', 'Eight Mamba states per token'], correct: 2,
        optsKn: ['ಎಂಟೂ attention heads', 'ಎಂಟೂ experts', 'ಏಳೂ Mamba layers ಒಳಗೊಂಡ ಒಂದೂ 8-layer group ನಲ್ಲಿ ಒಂದೂ attention layer', 'ಪ್ರತಿ token ಗೆ ಎಂಟೂ Mamba states'] },
      { q: 'Genuinely confirmed: a 32-layer Jamba-style model with l=8 contains how many attention layers?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: l=8 ಇರುವ ಒಂದೂ 32-layer Jamba-style model ಎಷ್ಟೂ attention layers ಹೊಂದಿದೆ?',
        opts: ['32', '16', '8', '4'], correct: 3,
        optsKn: ['32', '16', '8', '4'] },
      { q: 'Genuinely confirmed: what did testing L_A=2 (instead of the stated L_A=4) reveal about Jamba\'s cited ~8.4GB KV-cache figure?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: L_A=2 (ಹೇಳಿಕೆಯ L_A=4 ಬದಲಿಗೆ) ಪರೀಕ್ಷಿಸುವುದೂ Jamba ya ಉಲ್ಲೇಖಿತ ~8.4GB KV-cache ಅಂಕಿಅಂಶದ ಬಗ್ಗೆ ಏನೂ ಬಹಿರಂಗಪಡಿಸಿತೂ?',
        opts: ['It confirmed L_A=4 was correct', 'It showed L_A=2 matches the cited figure almost exactly, revealing an inconsistency with the stated L_A=4', 'It proved the source made no errors', 'It showed context length was wrong'], correct: 1,
        optsKn: ['ಇದೂ L_A=4 ಸರಿಯಾಗಿತ್ತೂ ಎಂದೂ ದೃಢಪಡಿಸಿತೂ', 'ಇದೂ L_A=2 ಉಲ್ಲೇಖಿತ ಅಂಕಿಅಂಶಕ್ಕೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ತೋರಿಸಿತೂ, ಹೇಳಿಕೆಯ L_A=4 ಜೊತೆ ಒಂದೂ ಅಸಂಗತತೆ ಬಹಿರಂಗಪಡಿಸಿತೂ', 'ಇದೂ source ಯಾವುದೇ ದೋಷಗಳನ್ನೂ ಮಾಡಲಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿತೂ', 'ಇದೂ context length ತಪ್ಪೂ ಎಂದೂ ತೋರಿಸಿತೂ'] },
      { q: 'Which formula contains a sequence-length term N?',
        qKn: 'ಯಾವ formula ಗೆ sequence-length term N ಇದೆ?',
        opts: ['SSM recurrent state memory only', 'KV-cache memory', 'Number of Mamba layers', 'MoE frequency'], correct: 1,
        optsKn: ['ಕೇವಲ SSM recurrent state memory', 'KV-cache memory', 'Mamba layers ya ಸಂಖ್ಯೆ', 'MoE frequency'] },
      { q: 'Why could original Jamba omit RoPE in its attention layers?',
        qKn: 'Original Jamba ಅದೂ ya attention layers ನಲ್ಲಿ RoPE ಏಕೆ ಬಿಟ್ಟುಬಿಡಬಹುದಿತ್ತೂ?',
        opts: ['Attention does not need positional information at all', 'The surrounding SSM recurrence already carried positional information into the representations', 'RoPE was not yet invented', 'MoE replaces positional encoding'], correct: 1,
        optsKn: ['Attention ಗೆ ಯಾವುದೇ positional information ಬೇಡ', 'ಸುತ್ತಮುತ್ತಲಿನ SSM recurrence ಈಗಾಗಲೇ representations ಗೆ positional information ಒಯ್ದಿತ್ತೂ', 'RoPE ಇನ್ನೂ ಆವಿಷ್ಕಾರ ಆಗಿರಲಿಲ್ಲ', 'MoE positional encoding ಬದಲಾಯಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
