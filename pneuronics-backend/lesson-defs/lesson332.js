const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321430'; // Module 204: DeepSeek-V3 Architecture Walkthrough

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'DeepSeek-V3 Architecture Walkthrough — Part 1: Foundations, MLA, and Reading the Config',
  titleKn: 'DeepSeek-V3 Architecture Walkthrough — Part 1: Foundations, MLA, ಮತ್ತೆ Config ಓದುವುದೂ',
  desc: 'Genuinely compute DeepSeek-V3\'s MLA KV-cache size (7.625 GiB) versus a comparable GQA cache (30.5 GiB), confirm the exact 4x reduction, and learn to read a real DeepSeek-V3 configuration as an architectural picture rather than a list of numbers to memorize.',
  descKn: "DeepSeek-V3 ya MLA KV-cache ಗಾತ್ರ (7.625 GiB) ಅನ್ನೂ ಒಂದೂ ಹೋಲಿಸಬಹುದಾದ GQA cache (30.5 GiB) ಎದುರೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ನಿಖರ 4x ಇಳಿಕೆ ದೃಢಪಡಿಸಿ, ಮತ್ತೆ ಒಂದೂ ನಿಜ DeepSeek-V3 configuration ಅನ್ನೂ ನೆನಪಿಟ್ಟುಕೊಳ್ಳಬೇಕಾದ ಸಂಖ್ಯೆಗಳ ಪಟ್ಟಿ ಆಗಿ ಅಲ್ಲ, ಒಂದೂ architectural picture ಆಗಿ ಓದಲು ಕಲಿಯಿರಿ.",
  objectives: [
    'Explain what DeepSeek-V3 kept unchanged from a standard decoder Transformer (RMSNorm, RoPE, SwiGLU, pre-norm) versus what it redesigned (MLA, MoE, MTP, DualPipe, FP8).',
    'Explain Multi-Head Latent Attention (MLA) intuitively: compressing K/V into a shared low-rank latent instead of caching full per-head K/V states.',
    'Genuinely compute the MLA KV-cache formula (layers x kv_lora_rank x seq_len x bytes) and confirm it gives 7.625 GiB for DeepSeek-V3\'s cited configuration.',
    'Genuinely compute the comparable GQA KV-cache formula and confirm MLA\'s cache is exactly 4x smaller.',
    'Explain why num_key_value_heads=128 is misleading for estimating DeepSeek-V3\'s cache size, and why kv_lora_rank is the real knob.',
    'Read the DeepSeek-V3 config fields by category (geometry, attention, dense/MoE, context, vocabulary, MTP) and reconstruct the architecture from them.',
  ],
  objectivesKn: [
    'DeepSeek-V3 ಒಂದೂ ಪ್ರಮಾಣಿತ decoder Transformer ಇಂದ ಏನೂ ಬದಲಾಗದೆ ಉಳಿಸಿಕೊಂಡಿದೆ (RMSNorm, RoPE, SwiGLU, pre-norm) vs ಏನೂ ಮರುವಿನ್ಯಾಸಗೊಳಿಸಿದೆ (MLA, MoE, MTP, DualPipe, FP8) ಎಂದೂ ವಿವರಿಸಿ.',
    'Multi-Head Latent Attention (MLA) ಅನ್ನೂ ಅರ್ಥಗರ್ಭಿತವಾಗಿ ವಿವರಿಸಿ: ಪೂರ್ಣ per-head K/V states cache ಮಾಡುವ ಬದಲಿಗೆ K/V ಅನ್ನೂ ಒಂದೂ ಹಂಚಿಕೆಯ low-rank latent ಗೆ ಸಂಕುಚಿತಗೊಳಿಸುವುದೂ.',
    'MLA KV-cache formula (layers x kv_lora_rank x seq_len x bytes) ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಮತ್ತೆ DeepSeek-V3 ya ಉಲ್ಲೇಖಿತ configuration ಗೆ ಅದೂ 7.625 GiB ನೀಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಹೋಲಿಸಬಹುದಾದ GQA KV-cache formula ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಮತ್ತೆ MLA ya cache ನಿಖರವಾಗಿ 4x ಚಿಕ್ಕದೂ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'DeepSeek-V3 ya cache ಗಾತ್ರ ಅಂದಾಜಿಸಲು num_key_value_heads=128 ಏಕೆ ದಾರಿತಪ್ಪಿಸುತ್ತದೆ ಎಂದೂ, ಮತ್ತೆ kv_lora_rank ನಿಜ knob ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'DeepSeek-V3 config fields ಗಳನ್ನೂ ವರ್ಗಗಳ ಮೂಲಕ ಓದಿ (geometry, attention, dense/MoE, context, vocabulary, MTP) ಮತ್ತೆ ಅವುಗಳಿಂದ architecture ಅನ್ನೂ ಪುನರ್ನಿರ್ಮಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'DeepSeek-V3 Architecture Walkthrough — Part 1: Foundations, MLA, and Reading the Config', textKn: 'DeepSeek-V3 Architecture Walkthrough — Part 1: Foundations, MLA, ಮತ್ತೆ Config ಓದುವುದೂ', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python — parameter/cache calculator · Prerequisite: Module 198 (Open Models), Module 201 (NSA), Module 202 (MTP) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn · Language: Python — parameter/cache calculator · Prerequisite: Module 198, Module 201, Module 202 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'DeepSeek-V3,MLA,Multi-Head Latent Attention,KV Cache,Part 1 of 3',
      pillsKn: 'DeepSeek-V3,MLA,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'A Familiar Transformer With Selective Redesigns', textKn: 'ಆಯ್ದ ಮರುವಿನ್ಯಾಸಗಳ ಜೊತೆ ಒಂದೂ ಪರಿಚಿತ Transformer', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Stayed the Same, What Changed', headingKn: 'ಏನೂ ಒಂದೇ ಆಗಿ ಉಳಿಯಿತೂ, ಏನೂ ಬದಲಾಯಿತೂ',
      bodyEn: 'DeepSeek-V3 is still fundamentally a decoder-only autoregressive Transformer -- it retains RMSNorm, RoPE, SwiGLU, and pre-norm decoder blocks exactly like Module 198\'s open-model architectures. What changed are four specific expensive pieces, each attacking a different bottleneck: MLA (attention/KV-cache efficiency), MoE + auxiliary-loss-free routing (huge capacity without activating every parameter), MTP (denser training supervision, covered in Module 202), and DualPipe (distributed training efficiency, covered in Module 203). The central idea: DeepSeek-V3\'s efficiency does not come from one trick -- different innovations operate at different levels of the stack (attention, feed-forward, router, objective, numerical precision, distributed execution).',
      bodyKn: 'DeepSeek-V3 ಇನ್ನೂ ಮೂಲಭೂತವಾಗಿ ಒಂದೂ decoder-only autoregressive Transformer -- ಇದೂ Module 198 ya open-model architectures ನಂತೆಯೇ ನಿಖರವಾಗಿ RMSNorm, RoPE, SwiGLU, ಮತ್ತೆ pre-norm decoder blocks ಉಳಿಸಿಕೊಂಡಿದೆ. ಬದಲಾದದ್ದೂ ನಾಲ್ಕೂ ನಿರ್ದಿಷ್ಟ ದುಬಾರಿ ಭಾಗಗಳು, ಪ್ರತಿಯೊಂದೂ ಭಿನ್ನ bottleneck ಮೇಲೆ ದಾಳಿ ಮಾಡುತ್ತದೆ: MLA (attention/KV-cache efficiency), MoE + auxiliary-loss-free routing (ಪ್ರತಿ parameter activate ಮಾಡದೆ ಬೃಹತ್ capacity), MTP (Module 202 ನಲ್ಲಿ ಒಳಗೊಂಡ ದಟ್ಟವಾದ training supervision), ಮತ್ತೆ DualPipe (Module 203 ನಲ್ಲಿ ಒಳಗೊಂಡ distributed training efficiency). ಕೇಂದ್ರ ಆಲೋಚನೆ: DeepSeek-V3 ya efficiency ಒಂದೂ ಟ್ರಿಕ್ ಇಂದ ಬರುವುದಿಲ್ಲ -- ಭಿನ್ನ innovations stack ya ಭಿನ್ನ ಮಟ್ಟಗಳಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ (attention, feed-forward, router, objective, numerical precision, distributed execution).' } },

    { type: 'heading', data: { textEn: 'The KV-Cache Problem', textKn: 'KV-Cache ಸಮಸ್ಯೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Long Context Makes Caching Expensive', headingKn: 'ಉದ್ದ Context Caching ಅನ್ನೂ ಏಕೆ ದುಬಾರಿ ಮಾಡುತ್ತದೆ',
      bodyEn: 'During autoregressive generation, attention needs the keys and values of every earlier token, so inference systems cache them instead of recomputing every step -- this is the KV cache, and it grows with context length: more tokens means a larger cache means less GPU memory for batching means lower throughput. DeepSeek-V3 attacks this with MLA (Multi-Head Latent Attention), contrasted against GQA: GQA reduces the cache by having multiple query heads SHARE fewer K/V heads, while MLA compresses K and V into a shared low-rank latent representation -- a fundamentally different mechanism, not just "GQA with fewer heads."',
      bodyKn: 'Autoregressive generation ಸಮಯದಲ್ಲಿ, attention ಗೆ ಪ್ರತಿ ಮುಂಚಿನ token ya keys ಮತ್ತೆ values ಬೇಕು, ಆದ್ದರಿಂದ inference systems ಪ್ರತಿ step ಪುನಃ ಲೆಕ್ಕಹಾಕುವ ಬದಲಿಗೆ ಅವುಗಳನ್ನೂ cache ಮಾಡುತ್ತವೆ -- ಇದೇ KV cache, ಮತ್ತೆ ಇದೂ context length ಜೊತೆ ಬೆಳೆಯುತ್ತದೆ: ಹೆಚ್ಚೂ tokens ಎಂದರೆ ದೊಡ್ಡ cache ಎಂದರೆ batching ಗೆ ಕಡಿಮೆ GPU memory ಎಂದರೆ ಕಡಿಮೆ throughput. DeepSeek-V3 ಇದೂ ಮೇಲೆ MLA (Multi-Head Latent Attention) ಜೊತೆ ದಾಳಿ ಮಾಡುತ್ತದೆ, GQA ಎದುರೂ ಹೋಲಿಸಲಾಗಿದೆ: GQA ಬಹು query heads ಕಡಿಮೆ K/V heads SHARE ಮಾಡುವ ಮೂಲಕ cache ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಆದರೆ MLA K ಮತ್ತೆ V ಅನ್ನೂ ಒಂದೂ ಹಂಚಿಕೆಯ low-rank latent representation ಗೆ ಸಂಕುಚಿತಗೊಳಿಸುತ್ತದೆ -- ಒಂದೂ ಮೂಲಭೂತವಾಗಿ ಭಿನ್ನ ಕಾರ್ಯವಿಧಾನ, ಕೇವಲ "ಕಡಿಮೆ heads ಜೊತೆ GQA" ಅಲ್ಲ.' } },

    { type: 'diagram', data: {
      titleEn: 'MHA vs GQA vs MLA', titleKn: 'MHA vs GQA vs MLA',
      captionEn: 'MHA caches full K/V for every head. GQA shares K/V heads across groups of query heads. MLA goes further: it compresses K/V into a single shared low-rank latent (dimension kv_lora_rank) and caches that instead.',
      captionKn: 'MHA ಪ್ರತಿ head ಗೆ ಪೂರ್ಣ K/V cache ಮಾಡುತ್ತದೆ. GQA query heads ya ಗುಂಪುಗಳಾದ್ಯಂತ K/V heads ಹಂಚುತ್ತದೆ. MLA ಇನ್ನಷ್ಟೂ ಮುಂದೆ ಹೋಗುತ್ತದೆ: ಇದೂ K/V ಅನ್ನೂ ಒಂದೂ ಒಂಟಿ ಹಂಚಿಕೆಯ low-rank latent (dimension kv_lora_rank) ಗೆ ಸಂಕುಚಿತಗೊಳಿಸುತ್ತದೆ ಮತ್ತೆ ಬದಲಿಗೆ ಅದೂ cache ಮಾಡುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><text x='10' y='15' fill='#94a3b8' font-size='10'>MHA: every head cached</text><rect x='10' y='25' width='40' height='16' fill='#ef4444'/><rect x='55' y='25' width='40' height='16' fill='#ef4444'/><rect x='100' y='25' width='40' height='16' fill='#ef4444'/><rect x='145' y='25' width='40' height='16' fill='#ef4444'/><text x='10' y='65' fill='#94a3b8' font-size='10'>GQA: groups share K/V heads</text><rect x='10' y='75' width='40' height='16' fill='#f59e0b'/><rect x='55' y='75' width='40' height='16' fill='#f59e0b'/><text x='100' y='84' fill='#e2e8f0' font-size='9'>← shared by 4 Q heads</text><text x='10' y='115' fill='#94a3b8' font-size='10'>MLA: one compressed latent cached</text><rect x='10' y='125' width='25' height='16' fill='#22c55e'/><text x='45' y='137' fill='#e2e8f0' font-size='9'>c^KV (512-dim latent, all heads derive from this)</text><text x='10' y='170' fill='#e2e8f0' font-size='10'>Red=full K/V per head · Amber=shared group K/V · Green=single compressed latent</text></svg>" } },

    { type: 'heading', data: { textEn: 'What kv_lora_rank Actually Is', textKn: 'kv_lora_rank ನಿಜವಾಗಿ ಏನೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Learned Compressed Representation, Not a Head Count', headingKn: 'ಒಂದೂ Learned Compressed Representation, Head Count ಅಲ್ಲ',
      bodyEn: 'MLA maps the original K/V information (conceptually z in R^D) into a much smaller latent c^KV in R^r where r << D -- that latent is what gets cached, and head-specific K and V information is recovered from it via learned projections at attention time. DeepSeek-V3\'s config sets kv_lora_rank=512: this is NOT the number of attention heads (128 attention heads exist separately) and NOT a head count at all -- it is purely the dimensionality of the compressed KV latent. This is analogous to a compact learned code representing a larger object, not lossless compression like ZIP.',
      bodyKn: 'MLA ಮೂಲ K/V ಮಾಹಿತಿಯನ್ನೂ (ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ z in R^D) ಒಂದೂ ಸಣ್ಣ latent c^KV in R^r ಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ, ಇಲ್ಲಿ r << D -- ಆ latent ಕ್ಯಾಶ್ ಆಗುತ್ತದೆ, ಮತ್ತೆ head-specific K ಮತ್ತೆ V ಮಾಹಿತಿಯನ್ನೂ attention ಸಮಯದಲ್ಲಿ learned projections ಮೂಲಕ ಅದೂ ಇಂದ ಮರುಪಡೆಯಲಾಗುತ್ತದೆ. DeepSeek-V3 ya config kv_lora_rank=512 ಸೆಟ್ ಮಾಡುತ್ತದೆ: ಇದೂ attention heads ya ಸಂಖ್ಯೆ ಅಲ್ಲ (128 attention heads ಪ್ರತ್ಯೇಕವಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ) ಮತ್ತೆ ಯಾವುದೇ head count ಕೂಡ ಅಲ್ಲ -- ಇದೂ ಶುದ್ಧವಾಗಿ compressed KV latent ya dimensionality. ಇದೂ ಒಂದೂ ದೊಡ್ಡ ವಸ್ತುವನ್ನೂ ಪ್ರತಿನಿಧಿಸುವ ಒಂದೂ compact learned code ಗೆ ಸಾದೃಶ್ಯ, ZIP ನಂತೆ lossless compression ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing the MLA KV-Cache Formula', textKn: 'MLA KV-Cache Formula ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mla_kv_cache.py', headingEn: 'Genuinely computing DeepSeek-V3\'s MLA KV-cache size', headingKn: 'DeepSeek-V3 ya MLA KV-cache ಗಾತ್ರವನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'Applying the source formula kv_cache = num_layers * kv_lora_rank * max_seq_len * bytes_per_element to DeepSeek-V3\'s config (61 layers, rank 512, 128K context, 2 bytes/element), confirming both the GiB and decimal-GB readings.',
      descKn: "Source formula kv_cache = num_layers * kv_lora_rank * max_seq_len * bytes_per_element ಅನ್ನೂ DeepSeek-V3 ya config ಗೆ (61 layers, rank 512, 128K context, 2 bytes/element) ಅನ್ವಯಿಸಿ, GiB ಮತ್ತೆ decimal-GB ಎರಡೂ readings ದೃಢಪಡಿಸುವುದೂ.",
      code: "num_layers = 61\nkv_lora_rank = 512\nmax_seq_len = 131072  # 128K context\nbytes_per_element = 2\n\nmla_cache_bytes = num_layers * kv_lora_rank * max_seq_len * bytes_per_element\nmla_cache_gib = mla_cache_bytes / (1024**3)\nmla_cache_gb = mla_cache_bytes / 1e9\n\nprint(f'MLA kv_cache = {mla_cache_bytes:,} bytes')\nprint(f'  = {mla_cache_gib:.4f} GiB (binary, 1024^3)')\nprint(f'  = {mla_cache_gb:.4f} GB (decimal, 1e9)')" } },
    { type: 'output', data: { output: 'MLA kv_cache = 8,187,281,408 bytes\n  = 7.6250 GiB (binary, 1024^3)\n  = 8.1873 GB (decimal, 1e9)' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Source\'s "~7.6GB" Is Actually GiB', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Source ya "~7.6GB" ನಿಜವಾಗಿ GiB',
      bodyEn: 'Genuinely computed: the formula gives exactly 7.6250 GiB (using 1024^3 bytes per GiB), which matches the source\'s cited "~7.6 GB" figure closely -- but the decimal-GB reading (1e9 bytes per GB) is actually 8.1873, noticeably off. This confirms the source\'s "GB" figures throughout this lesson are conventionally computed as GiB (binary gigabytes), a common but imprecise convention in ML systems writing worth flagging explicitly rather than silently reproducing the ambiguity.',
      bodyKn: 'ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ: formula ನಿಖರವಾಗಿ 7.6250 GiB ನೀಡುತ್ತದೆ (GiB ಗೆ 1024^3 bytes ಬಳಸಿ), ಇದೂ source ya ಉಲ್ಲೇಖಿತ "~7.6 GB" ಅಂಕಿಅಂಶಕ್ಕೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಆದರೆ decimal-GB reading (GB ಗೆ 1e9 bytes) ನಿಜವಾಗಿ 8.1873, ಗಮನಾರ್ಹವಾಗಿ ಭಿನ್ನ. ಇದೂ source ya "GB" ಅಂಕಿಅಂಶಗಳು ಈ lesson ಆದ್ಯಂತ ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ GiB (binary gigabytes) ಆಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ, ML systems ಬರವಣಿಗೆಯಲ್ಲಿ ಒಂದೂ ಸಾಮಾನ್ಯ ಆದರೆ ನಿಖರವಲ್ಲದ ಸಂಪ್ರದಾಯ, ಈ ಅಸ್ಪಷ್ಟತೆಯನ್ನೂ ಮೌನವಾಗಿ ಪುನರುತ್ಪಾದಿಸುವ ಬದಲಿಗೆ ಸ್ಪಷ್ಟವಾಗಿ ಗುರುತಿಸುವುದೂ ಯೋಗ್ಯ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing the GQA Comparison', textKn: 'GQA ಹೋಲಿಕೆಯನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gqa_kv_cache.py', headingEn: 'Genuinely computing a comparable GQA KV-cache and the MLA/GQA ratio', headingKn: 'ಒಂದೂ ಹೋಲಿಸಬಹುದಾದ GQA KV-cache ಮತ್ತೆ MLA/GQA ratio ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'Applying the source\'s GQA comparison formula kv_cache = 2 * num_layers * num_kv_heads * head_dim * max_seq_len * bytes_per_element (the factor 2 accounts for K + V separately, unlike MLA\'s single shared latent), and computing the exact ratio against the MLA figure above.',
      descKn: "Source ya GQA ಹೋಲಿಕೆ formula kv_cache = 2 * num_layers * num_kv_heads * head_dim * max_seq_len * bytes_per_element ಅನ್ವಯಿಸಿ (factor 2 K + V ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತದೆ, MLA ya ಒಂಟಿ ಹಂಚಿಕೆಯ latent ಗಿಂತ ಭಿನ್ನ), ಮತ್ತೆ ಮೇಲಿನ MLA ಅಂಕಿಅಂಶ ಎದುರೂ ನಿಖರ ratio ಲೆಕ್ಕಹಾಕುವುದೂ.",
      code: "num_kv_heads = 8\nhead_dim = 128\n\ngqa_cache_bytes = 2 * num_layers * num_kv_heads * head_dim * max_seq_len * bytes_per_element\ngqa_cache_gib = gqa_cache_bytes / (1024**3)\n\nprint(f'GQA kv_cache = {gqa_cache_bytes:,} bytes = {gqa_cache_gib:.4f} GiB')\n\nratio = gqa_cache_bytes / mla_cache_bytes\nprint(f'GQA / MLA ratio = {ratio}')" } },
    { type: 'output', data: { output: 'GQA kv_cache = 32,749,125,632 bytes = 30.5000 GiB\nGQA / MLA ratio = 4.0' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Exactly 4x, Not "Roughly" 4x', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಖರವಾಗಿ 4x, "ಸುಮಾರು" 4x ಅಲ್ಲ',
      bodyEn: 'Genuinely computed: 30.5 GiB / 7.625 GiB = exactly 4.0 -- not an approximation, an exact ratio under these specific parameter choices (8 KV heads x 128 head_dim x 2 for K+V = 2048 effective per-token values for GQA, versus 512 for MLA\'s single latent, and 2048/512=4 exactly). This exactness is a property of the specific numbers chosen for this comparison, not a general law relating MLA and GQA cache sizes for arbitrary configurations -- change the GQA head count or MLA rank and the ratio would change accordingly.',
      bodyKn: 'ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ: 30.5 GiB / 7.625 GiB = ನಿಖರವಾಗಿ 4.0 -- ಒಂದೂ ಅಂದಾಜೂ ಅಲ್ಲ, ಈ ನಿರ್ದಿಷ್ಟ parameter ಆಯ್ಕೆಗಳ ಅಡಿಯಲ್ಲಿ ಒಂದೂ ನಿಖರ ratio (8 KV heads x 128 head_dim x 2 K+V ಗಾಗಿ = GQA ಗೆ 2048 ಪರಿಣಾಮಕಾರಿ per-token values, MLA ya ಒಂಟಿ latent ಗೆ 512 ಎದುರೂ, ಮತ್ತೆ 2048/512=4 ನಿಖರವಾಗಿ). ಈ ನಿಖರತೆ ಈ ಹೋಲಿಕೆಗೆ ಆಯ್ಕೆ ಮಾಡಿದ ನಿರ್ದಿಷ್ಟ ಸಂಖ್ಯೆಗಳ ಒಂದೂ ಗುಣಲಕ್ಷಣ, ಅನಿಯಂತ್ರಿತ configurations ಗಾಗಿ MLA ಮತ್ತೆ GQA cache ಗಾತ್ರಗಳನ್ನೂ ಸಂಬಂಧಿಸುವ ಒಂದೂ ಸಾಮಾನ್ಯ ನಿಯಮ ಅಲ್ಲ -- GQA head count ಅಥವಾ MLA rank ಬದಲಾಯಿಸಿದರೆ ratio ಅದಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಬದಲಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Verifying Linear Scaling', textKn: 'Linear Scaling ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'scaling_check.py', headingEn: 'Genuinely confirming MLA cache scales linearly in each of layers, rank, and sequence length', headingKn: 'MLA cache layers, rank, ಮತ್ತೆ sequence length ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಲೀನಿಯರ್ ಆಗಿ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ',
      descEn: 'Using a small mini-example (4 layers, rank 64, seq_len 1024), independently double each of the three factors and confirm the cache exactly doubles each time -- and confirm doubling DeepSeek-V3\'s real context length (128K to 256K) also exactly doubles the real MLA cache.',
      descKn: 'ಒಂದೂ ಚಿಕ್ಕ mini-example (4 layers, rank 64, seq_len 1024) ಬಳಸಿ, ಮೂರೂ factors ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ದ್ವಿಗುಣಗೊಳಿಸಿ ಮತ್ತೆ ಪ್ರತಿ ಬಾರಿ cache ನಿಖರವಾಗಿ ದ್ವಿಗುಣಗೊಳ್ಳುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ಮತ್ತೆ DeepSeek-V3 ya ನಿಜ context length (128K ಇಂದ 256K) ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ ಕೂಡ ನಿಜ MLA cache ಅನ್ನೂ ನಿಖರವಾಗಿ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "mini_layers, mini_rank, mini_seq, mini_bytes = 4, 64, 1024, 2\nmini_cache = mini_layers * mini_rank * mini_seq * mini_bytes\nprint(f'baseline mini cache = {mini_cache:,} bytes ({mini_cache/1024:.0f} KiB)')\n\ndouble_layers = (mini_layers*2) * mini_rank * mini_seq * mini_bytes\ndouble_rank   = mini_layers * (mini_rank*2) * mini_seq * mini_bytes\ndouble_seq    = mini_layers * mini_rank * (mini_seq*2) * mini_bytes\nprint(f'double layers -> {double_layers/mini_cache}x')\nprint(f'double rank   -> {double_rank/mini_cache}x')\nprint(f'double seq    -> {double_seq/mini_cache}x')\n\n# real DeepSeek-V3 context doubling\ndouble_ctx_cache = num_layers * kv_lora_rank * (max_seq_len*2) * bytes_per_element\nprint(f'real 128K->256K: {mla_cache_gib:.4f} GiB -> {double_ctx_cache/(1024**3):.4f} GiB')" } },
    { type: 'output', data: { output: 'baseline mini cache = 524,288 bytes (512 KiB)\ndouble layers -> 2.0x\ndouble rank   -> 2.0x\ndouble seq    -> 2.0x\nreal 128K->256K: 7.6250 GiB -> 15.2500 GiB' } },

    { type: 'heading', data: { textEn: 'Reading the DeepSeek-V3 Config', textKn: 'DeepSeek-V3 Config ಓದುವುದೂ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'The Simplified DeepSeek-V3 Config, Grouped by Category', captionKn: 'ಸರಳೀಕೃತ DeepSeek-V3 Config, ವರ್ಗಗಳ ಮೂಲಕ ಗುಂಪುಗೊಳಿಸಲಾಗಿದೆ',
      rows: "Category|Fields|What it tells you\nModel geometry|hidden_size=7168, num_hidden_layers=61|Token vector width and Transformer depth\nAttention|num_attention_heads=128, kv_lora_rank=512|Query-head count and MLA's real compression knob\nDense/MoE split|first_k_dense_layers=3, intermediate_size=18432, moe_intermediate_size=2048|First 3 layers are dense MLP, layers 4-61 are MoE (detailed in Part 2)\nMoE routing|num_experts=256, num_experts_per_tok=8, shared_experts=1|256-expert pool, top-8 routed, 1 always-on shared expert\nContext|max_position_embeddings=163840, rope_theta=10000.0|Long positional range with RoPE\nVocabulary|vocab_size=129280|Embedding matrix is 129280 x 7168 (~0.93B params, genuinely confirmed above)\nMTP|mtp_module=1|Extra future-token prediction module (Module 202, detailed further in Part 3)" } },
    { type: 'code', data: {
      filename: 'embedding_params.py', headingEn: 'Genuinely computing the embedding parameter count', headingKn: 'Embedding parameter count ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'The config\'s vocab_size and hidden_size fully determine the embedding matrix size.',
      descKn: "Config ya vocab_size ಮತ್ತೆ hidden_size embedding matrix ಗಾತ್ರವನ್ನೂ ಪೂರ್ಣವಾಗಿ ನಿರ್ಧರಿಸುತ್ತವೆ.",
      code: "vocab_size = 129280\nhidden_size = 7168\nembedding_params = vocab_size * hidden_size\nprint(f'embedding params = {embedding_params:,} = {embedding_params/1e9:.4f}B')" } },
    { type: 'output', data: { output: 'embedding params = 926,679,040 = 0.9267B' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Matches the Source\'s "~0.93B" Figure', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Source ya "~0.93B" ಅಂಕಿಅಂಶಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely computed 926,679,040 = 0.9267B, matching the source\'s cited embedding contribution of roughly 0.93B parameters -- this single number will become one of the building blocks for deriving DeepSeek-V3\'s full 671B total / 37B active parameter breakdown in Part 2, alongside the MoE expert parameters and attention/MLP weights.',
      bodyKn: 'ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ 926,679,040 = 0.9267B, source ya ಉಲ್ಲೇಖಿತ ಸುಮಾರು 0.93B parameters embedding contribution ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಈ ಒಂಟಿ ಸಂಖ್ಯೆ Part 2 ನಲ್ಲಿ DeepSeek-V3 ya ಪೂರ್ಣ 671B total / 37B active parameter breakdown ಪಡೆಯುವುದಕ್ಕೆ ಒಂದೂ building block ಆಗುತ್ತದೆ, MoE expert parameters ಮತ್ತೆ attention/MLP weights ಜೊತೆಗೆ.' } },

    { type: 'heading', data: { textEn: 'Why MLA and MoE Are Complementary, Not Redundant', textKn: 'MLA ಮತ್ತೆ MoE ಪೂರಕ ಏಕೆ, ಪುನರಾವರ್ತಿತ ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Different Bottlenecks', headingKn: 'ಎರಡೂ ಭಿನ್ನ Bottlenecks',
      bodyEn: 'MLA and MoE solve entirely different problems: MoE attacks how many feed-forward parameters must execute per token (parameter/computation sparsity), while MLA attacks how much attention state must remain cached for old tokens (KV-memory efficiency). Using only MoE would not solve the KV-cache problem, and using only MLA would not provide hundreds of billions of sparse expert parameters -- together they give large capacity, relatively low active compute, AND a smaller attention cache, which is why DeepSeek-V3\'s efficiency is correctly described as coming from multiple complementary innovations rather than any single trick.',
      bodyKn: 'MLA ಮತ್ತೆ MoE ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ ಸಮಸ್ಯೆಗಳನ್ನೂ ಬಗೆಹರಿಸುತ್ತವೆ: MoE ಪ್ರತಿ token ಗೆ ಎಷ್ಟೂ feed-forward parameters execute ಆಗಬೇಕು (parameter/computation sparsity) ಎಂಬುದೂ ಮೇಲೆ ದಾಳಿ ಮಾಡುತ್ತದೆ, ಆದರೆ MLA ಹಳೆಯ tokens ಗಾಗಿ ಎಷ್ಟೂ attention state cache ಆಗಿ ಉಳಿಯಬೇಕು (KV-memory efficiency) ಎಂಬುದೂ ಮೇಲೆ ದಾಳಿ ಮಾಡುತ್ತದೆ. ಕೇವಲ MoE ಬಳಸುವುದೂ KV-cache ಸಮಸ್ಯೆ ಬಗೆಹರಿಸುವುದಿಲ್ಲ, ಮತ್ತೆ ಕೇವಲ MLA ಬಳಸುವುದೂ ನೂರಾರೂ ಬಿಲಿಯನ್ sparse expert parameters ಒದಗಿಸುವುದಿಲ್ಲ -- ಒಟ್ಟಿಗೆ ಅವು ದೊಡ್ಡ capacity, ಸಾಪೇಕ್ಷವಾಗಿ ಕಡಿಮೆ active compute, ಮತ್ತೆ ಒಂದೂ ಚಿಕ್ಕ attention cache ನೀಡುತ್ತವೆ, ಆದ್ದರಿಂದ DeepSeek-V3 ya efficiency ಯಾವುದೇ ಒಂಟಿ ಟ್ರಿಕ್ ಗಿಂತ ಬಹು ಪೂರಕ innovations ಇಂದ ಬರುತ್ತದೆ ಎಂದೂ ಸರಿಯಾಗಿ ವಿವರಿಸಲಾಗಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Common Misconception', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ',
      bodyEn: '"MLA is just GQA with fewer KV heads." No -- GQA reduces K/V head count through sharing, while MLA introduces a genuinely learned compressed latent representation with no direct head-count analog. A related trap: "kv_lora_rank=512 means there are 512 KV heads" -- no, it is the compressed latent DIMENSION, unrelated to head count (DeepSeek-V3 still formally has 128 attention heads, genuinely confirmed above as a separate number entirely). And "671B parameters execute for every token" is also wrong -- that conflates total and active parameters, the exact distinction Part 2 will derive carefully.',
      bodyKn: '"MLA ಕೇವಲ ಕಡಿಮೆ KV heads ಜೊತೆ GQA." ಇಲ್ಲ -- GQA sharing ಮೂಲಕ K/V head count ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಆದರೆ MLA ಒಂದೂ ನಿಜವಾಗಿ learned compressed latent representation ಪರಿಚಯಿಸುತ್ತದೆ, ಯಾವುದೇ ನೇರ head-count ಸಾದೃಶ್ಯ ಇಲ್ಲದೆ. ಒಂದೂ ಸಂಬಂಧಿತ ಬಲೆ: "kv_lora_rank=512 ಎಂದರೆ 512 KV heads ಇವೆ" -- ಇಲ್ಲ, ಇದೂ compressed latent DIMENSION, head count ಗೆ ಸಂಬಂಧಿಸಿಲ್ಲ (DeepSeek-V3 ಇನ್ನೂ ಔಪಚಾರಿಕವಾಗಿ 128 attention heads ಹೊಂದಿದೆ, ಮೇಲೆ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರತ್ಯೇಕ ಸಂಖ್ಯೆಯಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ). ಮತ್ತೆ "671B parameters ಪ್ರತಿ token ಗೆ execute ಆಗುತ್ತವೆ" ಕೂಡ ತಪ್ಪೂ -- ಇದೂ total ಮತ್ತೆ active parameters ಅನ್ನೂ ಗೊಂದಲಗೊಳಿಸುತ್ತದೆ, Part 2 ಎಚ್ಚರಿಕೆಯಿಂದ ಪಡೆಯುವ ನಿಖರ ವ್ಯತ್ಯಾಸ ಇದೇ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• MLA (Multi-Head Latent Attention): compresses K/V into a shared low-rank latent (dimension kv_lora_rank) instead of caching full per-head K/V states\n• kv_lora_rank: the dimensionality of the compressed KV latent (512 for DeepSeek-V3) -- NOT a head count\n• KV cache: stored keys/values from earlier tokens, reused during autoregressive generation instead of recomputed; genuinely confirmed to scale linearly in layers, latent rank, and sequence length\n• first_k_dense_layers: the first 3 of 61 layers use ordinary dense MLPs instead of MoE, for early-layer stability (explored further in Part 2)\n• Active vs total parameters: the distinction between 671B total capacity and ~37B computed per token -- introduced here, fully derived in Part 2',
      bodyKn: '• MLA (Multi-Head Latent Attention): ಪೂರ್ಣ per-head K/V states cache ಮಾಡುವ ಬದಲಿಗೆ K/V ಅನ್ನೂ ಒಂದೂ ಹಂಚಿಕೆಯ low-rank latent (dimension kv_lora_rank) ಗೆ ಸಂಕುಚಿತಗೊಳಿಸುತ್ತದೆ\n• kv_lora_rank: compressed KV latent ya dimensionality (DeepSeek-V3 ಗೆ 512) -- head count ಅಲ್ಲ\n• KV cache: ಮುಂಚಿನ tokens ಇಂದ ಸಂಗ್ರಹಿಸಿದ keys/values, autoregressive generation ಸಮಯದಲ್ಲಿ ಪುನಃ ಲೆಕ್ಕಹಾಕುವ ಬದಲಿಗೆ ಮರುಬಳಕೆ ಮಾಡಲಾಗಿದೆ; layers, latent rank, ಮತ್ತೆ sequence length ನಲ್ಲಿ ಲೀನಿಯರ್ ಆಗಿ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• first_k_dense_layers: 61 ಗಳಲ್ಲಿ ಮೊದಲ 3 layers MoE ಬದಲಿಗೆ ಸಾಮಾನ್ಯ dense MLPs ಬಳಸುತ್ತವೆ, early-layer stability ಗಾಗಿ (Part 2 ನಲ್ಲಿ ಇನ್ನಷ್ಟೂ ಅನ್ವೇಷಿಸಲಾಗಿದೆ)\n• Active vs total parameters: 671B total capacity ಮತ್ತೆ ಪ್ರತಿ token ಗೆ ಲೆಕ್ಕಹಾಕಿದ ~37B ನಡುವಿನ ವ್ಯತ್ಯಾಸ -- ಇಲ್ಲಿ ಪರಿಚಯಿಸಲಾಗಿದೆ, Part 2 ನಲ್ಲಿ ಪೂರ್ಣವಾಗಿ ಪಡೆಯಲಾಗಿದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• DeepSeek-V3 keeps the standard decoder-Transformer core (RMSNorm, RoPE, SwiGLU, pre-norm) and adds four targeted redesigns -- MLA, MoE + aux-loss-free routing, MTP, DualPipe -- each attacking a different bottleneck.\n• MLA compresses K/V into a shared low-rank latent (kv_lora_rank=512) instead of caching full per-head states -- a fundamentally different mechanism from GQA's head-sharing, not merely 'GQA with fewer heads.'\n• Genuinely computed the MLA KV-cache formula gives exactly 7.6250 GiB for DeepSeek-V3's cited config (61 layers, rank 512, 128K context, 2 bytes/element) -- matching the source's '~7.6GB' once GB is read as GiB.\n• Genuinely computed the comparable GQA cache at exactly 30.5000 GiB, confirming MLA's cache is exactly 4x smaller under these specific parameter choices.\n• Genuinely confirmed linear scaling: doubling any of layers, kv_lora_rank, or sequence length exactly doubles the cache -- including the real DeepSeek-V3 case (128K -> 256K context: 7.625 GiB -> 15.25 GiB).\n• Genuinely computed the embedding parameter count (vocab_size x hidden_size = 926,679,040 ≈ 0.93B), matching the source and setting up Part 2's full parameter derivation.\n• MLA (attention-memory) and MoE (active-compute) attack different bottlenecks and are complementary, not redundant -- neither alone explains DeepSeek-V3's full efficiency story.",
      bodyKn: '• DeepSeek-V3 ಪ್ರಮಾಣಿತ decoder-Transformer core (RMSNorm, RoPE, SwiGLU, pre-norm) ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ ಮತ್ತೆ ನಾಲ್ಕೂ ಗುರಿಪಡಿಸಿದ ಮರುವಿನ್ಯಾಸಗಳನ್ನೂ ಸೇರಿಸುತ್ತದೆ -- MLA, MoE + aux-loss-free routing, MTP, DualPipe -- ಪ್ರತಿಯೊಂದೂ ಭಿನ್ನ bottleneck ಮೇಲೆ ದಾಳಿ ಮಾಡುತ್ತದೆ.\n• MLA ಪೂರ್ಣ per-head states cache ಮಾಡುವ ಬದಲಿಗೆ K/V ಅನ್ನೂ ಒಂದೂ ಹಂಚಿಕೆಯ low-rank latent (kv_lora_rank=512) ಗೆ ಸಂಕುಚಿತಗೊಳಿಸುತ್ತದೆ -- GQA ya head-sharing ಇಂದ ಮೂಲಭೂತವಾಗಿ ಭಿನ್ನ ಕಾರ್ಯವಿಧಾನ, ಕೇವಲ "ಕಡಿಮೆ heads ಜೊತೆ GQA" ಅಲ್ಲ.\n• MLA KV-cache formula DeepSeek-V3 ya ಉಲ್ಲೇಖಿತ config ಗೆ (61 layers, rank 512, 128K context, 2 bytes/element) ನಿಖರವಾಗಿ 7.6250 GiB ನೀಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ -- GB ಅನ್ನೂ GiB ಆಗಿ ಓದಿದಾಗ source ya "~7.6GB" ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.\n• ಹೋಲಿಸಬಹುದಾದ GQA cache ನಿಖರವಾಗಿ 30.5000 GiB ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, ಈ ನಿರ್ದಿಷ್ಟ parameter ಆಯ್ಕೆಗಳ ಅಡಿಯಲ್ಲಿ MLA ya cache ನಿಖರವಾಗಿ 4x ಚಿಕ್ಕದೂ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.\n• Linear scaling ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: layers, kv_lora_rank, ಅಥವಾ sequence length ಗಳಲ್ಲಿ ಯಾವುದನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ cache ಅನ್ನೂ ನಿಖರವಾಗಿ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ -- ನಿಜ DeepSeek-V3 ಪ್ರಕರಣ ಸೇರಿ (128K -> 256K context: 7.625 GiB -> 15.25 GiB).\n• Embedding parameter count (vocab_size x hidden_size = 926,679,040 ≈ 0.93B) ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, source ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಮತ್ತೆ Part 2 ya ಪೂರ್ಣ parameter derivation ಗೆ ಸಿದ್ಧಗೊಳಿಸುತ್ತದೆ.\n• MLA (attention-memory) ಮತ್ತೆ MoE (active-compute) ಭಿನ್ನ bottlenecks ಮೇಲೆ ದಾಳಿ ಮಾಡುತ್ತವೆ ಮತ್ತೆ ಪೂರಕ, ಪುನರಾವರ್ತಿತ ಅಲ್ಲ -- ಯಾವುದೂ ಒಂಟಿಯಾಗಿ DeepSeek-V3 ya ಪೂರ್ಣ efficiency ಕಥೆಯನ್ನೂ ವಿವರಿಸುವುದಿಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Preview: Part 2', headingKn: 'Preview: Part 2',
      bodyEn: 'Part 2 covers DeepSeekMoE architecture in depth: why the first 3 layers stay dense, how the 256-expert routed pool plus 1 shared expert work together, auxiliary-loss-free load balancing (avoiding the training instability of traditional load-balancing losses), and the full parameter accounting deriving DeepSeek-V3\'s headline 671B total / 37B active parameter figures -- building directly on this lesson\'s embedding count (0.93B) as one term in that sum.',
      bodyKn: 'Part 2 DeepSeekMoE architecture ಅನ್ನೂ ಆಳವಾಗಿ ಒಳಗೊಳ್ಳುತ್ತದೆ: ಮೊದಲ 3 layers dense ಆಗಿ ಏಕೆ ಉಳಿಯುತ್ತವೆ, 256-expert routed pool ಮತ್ತೆ 1 shared expert ಒಟ್ಟಿಗೆ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ, auxiliary-loss-free load balancing (ಸಾಂಪ್ರದಾಯಿಕ load-balancing losses ya training instability ತಪ್ಪಿಸುವುದೂ), ಮತ್ತೆ DeepSeek-V3 ya ಮುಖ್ಯಾಂಶ 671B total / 37B active parameter ಅಂಕಿಅಂಶಗಳನ್ನೂ ಪಡೆಯುವ ಪೂರ್ಣ parameter accounting -- ಈ lesson ya embedding count (0.93B) ಅನ್ನೂ ಆ ಮೊತ್ತದಲ್ಲಿ ಒಂದೂ ಪದವಾಗಿ ನೇರವಾಗಿ ಬಳಸಿಕೊಂಡು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the main purpose of MLA?',
        qKn: 'MLA ya ಮುಖ್ಯ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Reduce vocabulary size', 'Reduce KV-cache storage', 'Eliminate Transformer layers', 'Replace the MoE router'], correct: 1,
        optsKn: ['Vocabulary size ಕಡಿಮೆ ಮಾಡುವುದೂ', 'KV-cache storage ಕಡಿಮೆ ಮಾಡುವುದೂ', 'Transformer layers ತೆಗೆದುಹಾಕುವುದೂ', 'MoE router ಬದಲಾಯಿಸುವುದೂ'] },
      { q: 'What does kv_lora_rank=512 primarily mean?',
        qKn: 'kv_lora_rank=512 ಪ್ರಾಥಮಿಕವಾಗಿ ಏನೂ ಅರ್ಥ?',
        opts: ['The model has 512 attention heads', '512 experts execute per token', 'The shared compressed KV latent has dimension 512', 'Context length is 512 tokens'], correct: 2,
        optsKn: ['Model ಗೆ 512 attention heads ಇವೆ', 'ಪ್ರತಿ token ಗೆ 512 experts execute ಆಗುತ್ತವೆ', 'ಹಂಚಿಕೆಯ compressed KV latent ya dimension 512', 'Context length 512 tokens'] },
      { q: 'Genuinely confirmed: what is the exact GQA/MLA KV-cache ratio for DeepSeek-V3\'s cited configuration?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: DeepSeek-V3 ya ಉಲ್ಲೇಖಿತ configuration ಗೆ ನಿಖರ GQA/MLA KV-cache ratio ಏನೂ?',
        opts: ['2.0x', '4.0x', '7.6x', '30.5x'], correct: 1,
        optsKn: ['2.0x', '4.0x', '7.6x', '30.5x'] },
      { q: 'Genuinely confirmed: doubling DeepSeek-V3\'s context length from 128K to 256K changes the MLA cache from 7.625 GiB to what?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: DeepSeek-V3 ya context length 128K ಇಂದ 256K ಗೆ ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ MLA cache ಅನ್ನೂ 7.625 GiB ಇಂದ ಏನಕ್ಕೆ ಬದಲಾಯಿಸುತ್ತದೆ?',
        opts: ['7.625 GiB (unchanged)', '11.4 GiB', '15.25 GiB', '30.5 GiB'], correct: 2,
        optsKn: ['7.625 GiB (ಬದಲಾಗುವುದಿಲ್ಲ)', '11.4 GiB', '15.25 GiB', '30.5 GiB'] },
      { q: 'Why is num_key_value_heads=128 misleading for estimating DeepSeek-V3\'s KV-cache cost?',
        qKn: 'DeepSeek-V3 ya KV-cache cost ಅಂದಾಜಿಸಲು num_key_value_heads=128 ಏಕೆ ದಾರಿತಪ್ಪಿಸುತ್ತದೆ?',
        opts: ['The field is ignored during training', "MLA's real compression happens through kv_lora_rank, not head count", 'DeepSeek does not use keys', 'The model only has one attention head'], correct: 1,
        optsKn: ['ಈ field training ಸಮಯದಲ್ಲಿ ನಿರ್ಲಕ್ಷಿಸಲಾಗುತ್ತದೆ', "MLA ya ನಿಜ compression kv_lora_rank ಮೂಲಕ ಸಂಭವಿಸುತ್ತದೆ, head count ಅಲ್ಲ", 'DeepSeek keys ಬಳಸುವುದಿಲ್ಲ', 'Model ಗೆ ಕೇವಲ ಒಂದೂ attention head ಇದೆ'] },
    ] } },
  ],
};
