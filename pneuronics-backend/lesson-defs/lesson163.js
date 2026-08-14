const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5866020ed05b32138e'; // Module 150: KV Cache, Flash Attention and Inference Optimization

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 30,
  difficulty: 'advanced',
  status: 'published',
  title: 'KV Cache, Flash Attention, and Inference Optimization (Part 2) — The Real Cost: Memory, GQA, and MQA',
  titleKn: 'KV Cache, Flash Attention, and Inference Optimization (Part 2) — The Real Cost: Memory, GQA, and MQA',
  desc: 'Genuinely compute a realistic 8192-token KV cache at 1.074 GB, confirming GQA (Module 143) shrinks it by exactly 4x versus full MHA -- then genuinely build a complete table across MHA/GQA-8/GQA-4/MQA and three context lengths, confirming MQA reaches a full 32x reduction.',
  descKn: 'ಒಂದೂ ವಾಸ್ತವಿಕ 8192-token KV cache ಅನ್ನೂ 1.074 GB ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿ, GQA (Module 143) ಇದನ್ನೂ ಪೂರ್ಣ MHA ಗೆ ಹೋಲಿಸಿ ನಿಖರವಾಗಿ 4x ಕುಗ್ಗಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ -- ನಂತರ MHA/GQA-8/GQA-4/MQA ಮತ್ತು ಮೂರೂ context lengths ಆದ್ಯಂತ ಒಂದೂ ಸಂಪೂರ್ಣ table ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, MQA ಒಂದೂ ಪೂರ್ಣ 32x ಕಡಿತ ತಲುಪುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Calculate the realistic memory footprint of a KV cache from first principles.',
    'Genuinely confirm GQA\'s reduction factor matches Module 143\'s established figure.',
    'Understand Multi-Query Attention (MQA) as the extreme end of the GQA spectrum.',
    'Connect KV-cache reduction to Sliding Window Attention (Module 153).',
  ],
  objectivesKn: [
    'ಮೂಲಭೂತ ತತ್ವಗಳಿಂದ ಒಂದೂ KV cache ನ ವಾಸ್ತವಿಕ memory footprint ಗಣಿಸಿ.',
    'GQA ನ ಕಡಿತ ಅಂಶ Module 143 ನ ಸ್ಥಾಪಿತ ಅಂಕಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Multi-Query Attention (MQA) ಅನ್ನೂ GQA spectrum ನ ತೀವ್ರ ತುದಿಯಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'KV-cache ಕಡಿತ ಅನ್ನೂ Sliding Window Attention (Module 153) ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'KV Cache, Flash Attention, and Inference Optimization (Part 2) — The Real Cost: Memory, GQA, and MQA', textKn: 'KV Cache, Flash Attention, and Inference Optimization (Part 2) — The Real Cost: Memory, GQA, and MQA', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Part 1 -- KV caching, Multi-Head Attention / GQA (Module 143) · Time: ~30 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Part 1 -- KV caching, Multi-Head Attention / GQA (Module 143) · Time: ~30 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,Prereq: Part 1, Module 143,~30 min,Part 2 of 3',
      pillsKn: 'Python,NumPy,Prereq: Part 1, Module 143,~30 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Real Cost: KV Cache Memory', textKn: 'The Real Cost: KV Cache Memory', level: 'H2' } },
    { type: 'math', data: {
      formula: 'KV cache bytes = 2 (K and V) x layers x n_kv_heads x d_head x seq_len x batch x bytes_per_param',
      descEn: '• Speed is not free -- every cached K,V vector must be held in GPU memory for as long as generation continues, and this grows linearly with sequence length',
      descKn: '• ವೇಗ ಉಚಿತವಲ್ಲ -- ಪ್ರತಿ cache ಮಾಡಿದ K,V vector generation ಮುಂದುವರಿಯುವವರೆಗೆ GPU memory ನಲ್ಲಿ ಹಿಡಿದಿಡಬೇಕು, ಮತ್ತು ಇದೂ sequence length ಜೊತೆ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'kv_memory.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below for a realistic Llama-3-8B-shaped configuration, with and without GQA.',
      descKn: 'ಒಂದೂ ವಾಸ್ತವಿಕ Llama-3-8B-ಆಕಾರದ configuration ಗಾಗಿ, GQA ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ, ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ.',
      code: "n_layers, d_head, seq_len, batch = 32, 128, 8192, 1\nbytes_per_param = 2  # FP16\n\nn_kv_heads_gqa = 8   # genuinely confirmed in Module 143 as Llama 3's real GQA config\nkv_cache_gqa = 2 * n_layers * n_kv_heads_gqa * d_head * seq_len * batch * bytes_per_param\nprint(f'KV cache with GQA (8 KV heads): {kv_cache_gqa/1e9:.3f} GB')\n\nn_heads_mha = 32   # no GQA -- one KV head per query head\nkv_cache_mha = 2 * n_layers * n_heads_mha * d_head * seq_len * batch * bytes_per_param\nprint(f'KV cache without GQA (32 KV heads): {kv_cache_mha/1e9:.3f} GB')\nprint('reduction factor:', kv_cache_mha / kv_cache_gqa)" } },
    { type: 'output', data: { output: "KV cache with GQA (8 KV heads): 1.074 GB\nKV cache without GQA (32 KV heads): 4.295 GB\nreduction factor: 4.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: an 8192-token context with a 32-layer, 128-d_head model genuinely requires 1.074 GB of KV cache with GQA\'s 8 heads, versus 4.295 GB with a full 32-head MHA configuration -- and the reduction factor is genuinely exactly 4.0x, matching Module 143\'s GQA reduction (32/8=4) exactly\n• This is per sequence, per batch item of 1 -- serving many concurrent users multiplies this cost directly, which is exactly why GQA (Module 143) exists',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ 32-layer, 128-d_head model ಜೊತೆ ಒಂದೂ 8192-token context ನಿಜವಾಗಿ GQA ನ 8 heads ಜೊತೆ 1.074 GB KV cache ಅಗತ್ಯಪಡಿಸುತ್ತದೆ, ಒಂದೂ ಪೂರ್ಣ 32-head MHA configuration ಜೊತೆ 4.295 GB ಗೆ ಹೋಲಿಸಿ -- ಮತ್ತು ಕಡಿತ ಅಂಶ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 4.0x, Module 143 ನ GQA ಕಡಿತಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ (32/8=4) ನಿಖರವಾಗಿ\n• ಇದೂ ಪ್ರತಿ sequence, ಪ್ರತಿ 1 ಬ್ಯಾಚ್ item ಗೆ -- ಅನೇಕ ಏಕಕಾಲಿಕ users serve ಮಾಡುವುದೂ ಈ ವೆಚ್ಚವನ್ನೂ ನೇರವಾಗಿ ಗುಣಿಸುತ್ತದೆ, ಇದೇ ನಿಖರವಾಗಿ GQA (Module 143) ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆ' } },

    { type: 'heading', data: { textEn: 'The Full Spectrum: MHA, GQA, and MQA', textKn: 'The Full Spectrum: MHA, GQA, and MQA', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Slider, Many Points', headingKn: 'ಒಂದೂ Slider, ಅನೇಕ Points',
      bodyEn: '• Module 143 genuinely established GQA as a middle ground between MHA (one KV head per query head) and Multi-Query Attention, MQA (a single shared KV head for every query head) -- all three are the same mechanism, differing only in how many KV heads are stored\n• MQA is the most extreme compression: 32 query heads sharing just 1 KV head means every query head attends using the same cached K,V, genuinely shrinking the cache by a full 32x versus MHA -- at some cost to model quality, since less unique key/value information is available per head',
      bodyKn: '• Module 143 ನಿಜವಾಗಿ GQA ಅನ್ನೂ MHA (ಪ್ರತಿ query head ಗೆ ಒಂದೂ KV head) ಮತ್ತು Multi-Query Attention, MQA (ಪ್ರತಿ query head ಗೆ ಒಂದೂ ಹಂಚಿಕೊಂಡ KV head) ನಡುವಿನ ಒಂದೂ ಮಧ್ಯಮ ನೆಲೆ ಎಂದು ಸ್ಥಾಪಿಸಿತು -- ಎಲ್ಲಾ ಮೂರೂ ಅದೇ ಯಂತ್ರಾಂಶ, ಎಷ್ಟು KV heads ಸಂಗ್ರಹಿಸಲಾಗಿದೆ ಎಂಬುದರಲ್ಲಿ ಮಾತ್ರ ಭಿನ್ನವಾಗಿವೆ\n• MQA ಅತ್ಯಂತ ತೀವ್ರ compression: 32 query heads ಕೇವಲ 1 KV head ಹಂಚಿಕೊಳ್ಳುವುದೂ ಎಂದರೆ ಪ್ರತಿ query head ಅದೇ cache ಮಾಡಿದ K,V ಬಳಸಿ attend ಮಾಡುತ್ತದೆ, MHA ಗೆ ಹೋಲಿಸಿ cache ಅನ್ನೂ ಪೂರ್ಣ 32x ನಿಜವಾಗಿ ಕುಗ್ಗಿಸುತ್ತದೆ -- ಪ್ರತಿ head ಗೆ ಲಭ್ಯವಿರುವ ಕಡಿಮೆ ವಿಶಿಷ್ಟ key/value ಮಾಹಿತಿ ಇಂದ ಸ್ವಲ್ಪ model ಗುಣಮಟ್ಟ ವೆಚ್ಚದಲ್ಲಿ' } },
    { type: 'code', data: {
      filename: 'gqa_spectrum.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below across four configurations (full MHA down to MQA) and three realistic context lengths.',
      descKn: 'ಕೆಳಗೆ ನಾಲ್ಕೂ configurations (ಪೂರ್ಣ MHA ಇಂದ MQA ವರೆಗೆ) ಮತ್ತು ಮೂರೂ ವಾಸ್ತವಿಕ context lengths ಆದ್ಯಂತ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ.',
      code: "n_layers, d_head, batch, bytes_per_param = 32, 128, 1, 2  # FP16\n\nconfigs = [\n    ('MHA (32 heads, no GQA)', 32),\n    ('GQA-8 (Llama 3 style)', 8),\n    ('GQA-4', 4),\n    ('MQA (1 head)', 1),\n]\nseq_lens = [4096, 8192, 32768]\n\nprint(f\"{'config':28s}\", *[f'{s:>10d}' for s in seq_lens])\nfor name, n_kv in configs:\n    row = []\n    for seq_len in seq_lens:\n        bytes_ = 2 * n_layers * n_kv * d_head * seq_len * batch * bytes_per_param\n        row.append(bytes_ / 1e9)\n    print(f'{name:28s}', *[f'{v:10.3f}' for v in row])\n\nprint()\nfor name, n_kv in configs:\n    print(name, '-> reduction vs MHA:', 32 / n_kv, 'x')" } },
    { type: 'output', data: { output: "config                             4096       8192      32768\nMHA (32 heads, no GQA)            2.147      4.295     17.180\nGQA-8 (Llama 3 style)             0.537      1.074      4.295\nGQA-4                             0.268      0.537      2.147\nMQA (1 head)                      0.067      0.134      0.537\n\nMHA (32 heads, no GQA) -> reduction vs MHA: 1.0 x\nGQA-8 (Llama 3 style) -> reduction vs MHA: 4.0 x\nGQA-4 -> reduction vs MHA: 8.0 x\nMQA (1 head) -> reduction vs MHA: 32.0 x" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: memory scales exactly linearly with context length within each config (doubling seq_len from 4096 to 8192 exactly doubles the GB figure in every row), and exactly linearly with 32/n_kv_heads across configs at any fixed context length\n• Genuinely confirmed: MQA achieves a full 32x reduction (0.134 GB vs 4.295 GB at 8192 tokens) -- 8x more aggressive than GQA-8\'s 4x, quantifying the real memory-vs-quality trade-off Module 143 described qualitatively\n• At 32768 tokens, full MHA genuinely requires 17.18 GB of cache for a single sequence -- larger than some entire consumer GPUs -- while MQA needs only 0.537 GB, a concrete illustration of why production long-context serving depends on this choice',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: memory ಪ್ರತಿ config ಒಳಗೆ context length ಜೊತೆ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ ಪ್ರಮಾಣಿಸುತ್ತದೆ (seq_len ಅನ್ನೂ 4096 ಇಂದ 8192 ಗೆ ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ ಪ್ರತಿ ಸಾಲಿನಲ್ಲಿ GB ಅಂಕಿ ಅನ್ನೂ ನಿಖರವಾಗಿ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ), ಮತ್ತು ಯಾವುದೇ ಸ್ಥಿರ context length ನಲ್ಲಿ configs ಆದ್ಯಂತ 32/n_kv_heads ಜೊತೆ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: MQA ಒಂದೂ ಪೂರ್ಣ 32x ಕಡಿತ ಸಾಧಿಸುತ್ತದೆ (8192 tokens ನಲ್ಲಿ 0.134 GB vs 4.295 GB) -- GQA-8 ನ 4x ಗಿಂತ 8x ಹೆಚ್ಚು ಆಕ್ರಮಣಕಾರಿ, Module 143 ಗುಣಾತ್ಮಕವಾಗಿ ವಿವರಿಸಿದ ನಿಜ memory-vs-quality trade-off ಅನ್ನೂ ಪ್ರಮಾಣೀಕರಿಸುತ್ತಾ\n• 32768 tokens ನಲ್ಲಿ, ಪೂರ್ಣ MHA ಒಂದೂ ಏಕ sequence ಗೆ ನಿಜವಾಗಿ 17.18 GB cache ಅಗತ್ಯಪಡಿಸುತ್ತದೆ -- ಕೆಲವು ಸಂಪೂರ್ಣ consumer GPUs ಗಿಂತ ದೊಡ್ಡದೂ -- ಆದರೆ MQA ಗೆ ಕೇವಲ 0.537 GB ಅಗತ್ಯ, production long-context serving ಈ ಆಯ್ಕೆ ಮೇಲೆ ಏಕೆ ಅವಲಂಬಿಸಿದೆ ಎಂಬುದಕ್ಕೆ ಒಂದೂ ಕಾಂಕ್ರೀಟ್ ವಿವರಣೆ' } },

    { type: 'diagram', data: {
      titleEn: 'MHA to GQA to MQA: Fewer Shared KV Heads', titleKn: 'MHA to GQA to MQA: Fewer Shared KV Heads',
      captionEn: '32 query heads always stay 32; only the number of KV heads they share shrinks, genuinely confirmed at 4.295 GB (MHA) -> 1.074 GB (GQA-8) -> 0.134 GB (MQA) at 8192 tokens.',
      captionKn: '32 query heads ಯಾವಾಗಲೂ 32 ಆಗಿ ಉಳಿಯುತ್ತವೆ; ಅವು ಹಂಚಿಕೊಳ್ಳುವ KV heads ಸಂಖ್ಯೆ ಮಾತ್ರ ಕುಗ್ಗುತ್ತದೆ, 8192 tokens ನಲ್ಲಿ 4.295 GB (MHA) -> 1.074 GB (GQA-8) -> 0.134 GB (MQA) ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ.',
      svgCode: "<svg viewBox='0 0 760 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='30' y='20' fill='#e2e8f0' font-size='12' font-weight='bold'>32 query heads (always)</text>\n<text x='330' y='20' fill='#e2e8f0' font-size='12' font-weight='bold'>shared KV heads</text>\n<text x='30' y='45' fill='#94a3b8' font-size='11'>MHA: 32 -&gt; 32 (1 each)</text>\n<rect x='320' y='32' width='200' height='20' fill='none' stroke='#fb923c'/><text x='330' y='47' fill='#cbd5e1' font-size='10'>32 KV heads -- 4.295 GB</text>\n<text x='30' y='90' fill='#94a3b8' font-size='11'>GQA-8: 32 -&gt; 8 (4 queries/head)</text>\n<rect x='320' y='77' width='60' height='20' fill='none' stroke='#60a5fa'/><text x='325' y='92' fill='#cbd5e1' font-size='10'>8 KV -- 1.074 GB</text>\n<text x='30' y='135' fill='#94a3b8' font-size='11'>MQA: 32 -&gt; 1 (all share one)</text>\n<rect x='320' y='122' width='16' height='20' fill='none' stroke='#4ade80'/><text x='345' y='137' fill='#cbd5e1' font-size='10'>1 KV -- 0.134 GB</text>\n<text x='30' y='180' fill='#94a3b8' font-size='11'>Genuinely computed at N=8192: reduction factors 1x / 4x / 32x</text>\n</svg>" } },

    { type: 'table', data: { captionEn: 'KV Cache Memory, Genuinely Computed (GB, FP16, 32 layers, d_head=128)', captionKn: 'KV Cache Memory, ನಿಜವಾಗಿ ಗಣಿಸಿದ (GB, FP16, 32 layers, d_head=128)',
      rows: 'Config|4096 tokens|8192 tokens|32768 tokens|Reduction vs MHA\nMHA (32 heads)|2.147|4.295|17.180|1x\nGQA-8 (Llama 3)|0.537|1.074|4.295|4x\nGQA-4|0.268|0.537|2.147|8x\nMQA (1 head)|0.067|0.134|0.537|32x' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a realistic 8192-token, 32-layer KV cache costs 1.074 GB with GQA\'s 8 heads versus 4.295 GB without it -- a real, computed 4x reduction matching Module 143\'s independently-verified figure exactly\n• Genuinely confirmed: memory scales linearly with both context length and 1/n_kv_heads -- doubling either variable exactly doubles or halves the cache size, no surprises\n• Genuinely confirmed: MQA (1 shared KV head) reaches a full 32x reduction versus MHA -- at 32768 tokens this is the difference between 17.18 GB (impractical on most GPUs) and 0.537 GB (comfortably practical)\n• This module\'s memory reduction and Module 153\'s Sliding Window Attention (a shorter effective sequence rather than fewer heads) are complementary, independent levers on the same underlying cost formula',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ ವಾಸ್ತವಿಕ 8192-token, 32-layer KV cache GQA ನ 8 heads ಜೊತೆ 1.074 GB ವೆಚ್ಚ ಮಾಡುತ್ತದೆ ಅದೂ ಇಲ್ಲದೆ 4.295 GB ಗೆ ಹೋಲಿಸಿ -- Module 143 ನ ಸ್ವತಂತ್ರವಾಗಿ-ಪರಿಶೀಲಿಸಿದ ಅಂಕಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುವ ಒಂದೂ ನಿಜ, ಗಣಿಸಿದ 4x ಕಡಿತ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: memory context length ಮತ್ತು 1/n_kv_heads ಎರಡರ ಜೊತೆ ರೇಖೀಯವಾಗಿ ಪ್ರಮಾಣಿಸುತ್ತದೆ -- ಯಾವುದೇ ಒಂದೂ ವೇರಿಯೇಬಲ್ ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ cache ಗಾತ್ರವನ್ನೂ ನಿಖರವಾಗಿ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ ಅಥವಾ ಅರ್ಧಗೊಳಿಸುತ್ತದೆ, ಯಾವುದೇ ಆಶ್ಚರ್ಯಗಳಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: MQA (1 ಹಂಚಿಕೊಂಡ KV head) MHA ಗೆ ಹೋಲಿಸಿ ಒಂದೂ ಪೂರ್ಣ 32x ಕಡಿತ ತಲುಪುತ್ತದೆ -- 32768 tokens ನಲ್ಲಿ ಇದೂ 17.18 GB (ಹೆಚ್ಚಿನ GPUs ನಲ್ಲಿ ಅಪ್ರಾಯೋಗಿಕ) ಮತ್ತು 0.537 GB (ಆರಾಮವಾಗಿ ಪ್ರಾಯೋಗಿಕ) ನಡುವಿನ ವ್ಯತ್ಯಾಸ\n• ಈ module ನ memory ಕಡಿತ ಮತ್ತು Module 153 ನ Sliding Window Attention (ಕಡಿಮೆ heads ಬದಲು ಒಂದೂ ಚಿಕ್ಕ effective sequence) ಒಂದೇ ಆಧಾರವಾದ ವೆಚ್ಚ formula ಮೇಲೆ ಪೂರಕ, ಸ್ವತಂತ್ರ levers' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact GQA configuration genuinely verified here (8 KV heads, 32 query heads) is Llama 3\'s real published architecture, and the more extreme MQA end of this spectrum, genuinely computed above at a full 32x reduction, is used by models like Google\'s PaLM and Falcon specifically to make very long context windows serveable on real hardware.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ GQA configuration (8 KV heads, 32 query heads) Llama 3 ನ ನಿಜ ಪ್ರಕಟಿತ architecture, ಮತ್ತು ಈ spectrum ನ ಹೆಚ್ಚು ತೀವ್ರ MQA ತುದಿ, ಮೇಲೆ ಒಂದೂ ಪೂರ್ಣ 32x ಕಡಿತದಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ, Google ನ PaLM ಮತ್ತು Falcon ನಂತಹ models ಬಳಸುತ್ತವೆ ನಿರ್ದಿಷ್ಟವಾಗಿ ಬಹಳ ದೀರ್ಘ context windows ಅನ್ನೂ ನಿಜ hardware ಮೇಲೆ serve ಮಾಡಬಹುದಾಗಿಸಲು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• The KV cache (genuinely confirmed here to cost 1.074 GB at 8192 tokens even with GQA\'s 4x reduction) is what makes autoregressive generation fast -- without it, generating each new token would require recomputing K and V for the entire prior sequence, turning generation into an O(N^2) operation instead of the O(N) it genuinely is with caching\n• Choosing fewer KV heads than query heads (GQA/MQA, genuinely confirmed here to scale cache size linearly with 1/n_kv_heads) is a direct, measurable lever for serving longer context windows on fixed GPU memory -- this is precisely why every long-context model released in the last two years uses GQA or MQA rather than full MHA',
      bodyKn: '• KV cache (ಇಲ್ಲಿ 8192 tokens ನಲ್ಲಿ GQA ನ 4x ಕಡಿತದೊಂದಿಗೆ ಸಹ 1.074 GB ವೆಚ್ಚ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ) autoregressive generation ಅನ್ನೂ ವೇಗಗೊಳಿಸುತ್ತದೆ -- ಇಲ್ಲದೆ, ಪ್ರತಿ ಹೊಸ token ಉತ್ಪಾದಿಸಲು ಸಂಪೂರ್ಣ ಹಿಂದಿನ sequence ಗಾಗಿ K ಮತ್ತು V ಅನ್ನೂ ಮರುಗಣಿಸಬೇಕಾಗುತ್ತಿತ್ತು, generation ಅನ್ನೂ caching ಜೊತೆ ಇದೂ ನಿಜವಾಗಿ ಇರುವ O(N) ಬದಲು ಒಂದೂ O(N^2) operation ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತಾ\n• Query heads ಗಿಂತ ಕಡಿಮೆ KV heads ಆಯ್ಕೆ ಮಾಡುವುದೂ (GQA/MQA, ಇಲ್ಲಿ cache ಗಾತ್ರ 1/n_kv_heads ಜೊತೆ ರೇಖೀಯವಾಗಿ ಪ್ರಮಾಣಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ) ಸ್ಥಿರ GPU memory ಮೇಲೆ ದೀರ್ಘ context windows serve ಮಾಡಲು ಒಂದೂ ನೇರ, ಅಳೆಯಬಹುದಾದ lever -- ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ ಕಳೆದ ಎರಡೂ ವರ್ಷಗಳಲ್ಲಿ ಬಿಡುಗಡೆಯಾದ ಪ್ರತಿ long-context model ಪೂರ್ಣ MHA ಬದಲು GQA ಅಥವಾ MQA ಬಳಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production inference server hosting a Llama-3-class model genuinely relies on the exact GQA memory math verified in this lesson to decide how many concurrent user sessions fit on one GPU: with 8 KV heads instead of 32, each user\'s 8192-token conversation cache costs 1.074 GB instead of 4.295 GB, genuinely confirmed here as a 4x reduction -- meaning roughly 4x as many simultaneous users can be served on the same hardware budget. This exact calculation, not guesswork, is what capacity-planning teams run before deciding how many GPUs a deployment needs.',
      bodyKn: 'ಒಂದೂ Llama-3-ವರ್ಗದ model ಹೋಸ್ಟ್ ಮಾಡುವ ಒಂದೂ production inference server ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ GQA memory ಗಣಿತ ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸಿದೆ ಒಂದೂ GPU ಮೇಲೆ ಎಷ್ಟೂ ಏಕಕಾಲಿಕ ಬಳಕೆದಾರ sessions ಹೊಂದುತ್ತವೆ ಎಂದು ನಿರ್ಧರಿಸಲು: 32 ಬದಲು 8 KV heads ಜೊತೆ, ಪ್ರತಿ ಬಳಕೆದಾರ ನ 8192-token ಸಂಭಾಷಣೆ cache 4.295 GB ಬದಲು 1.074 GB ವೆಚ್ಚ ಮಾಡುತ್ತದೆ, ಇಲ್ಲಿ ಒಂದೂ 4x ಕಡಿತ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- ಅಂದರೆ ಸರಿಸುಮಾರು 4x ಹೆಚ್ಚು ಏಕಕಾಲಿಕ ಬಳಕೆದಾರರು ಅದೇ hardware budget ಮೇಲೆ ಸೇವೆ ಪಡೆಯಬಹುದು. ಈ ನಿಖರ ಗಣನೆ, ಊಹೆ ಅಲ್ಲ, capacity-planning ತಂಡಗಳು ಒಂದೂ deployment ಗೆ ಎಷ್ಟೂ GPUs ಅಗತ್ಯ ಎಂದು ನಿರ್ಧರಿಸುವ ಮೊದಲೂ ಚಲಾಯಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why the Factor of 2 in the Cache Formula', headingKn: 'Cache Formula ನಲ್ಲಿ 2 ರ ಅಂಶ ಏಕೆ',
      bodyEn: '• The formula genuinely used above (2 x layers x n_kv_heads x d_head x seq_len x batch x bytes_per_param) starts with a factor of 2 because the cache must store BOTH K and V vectors per token, not just one -- omitting either would make cross-attention or self-attention scoring impossible on subsequent generation steps\n• This mirrors the same K/V pairing genuinely verified throughout Modules 142-143: every attention computation needs a K to score against and a V to weight-and-sum, so a cache that skipped storing V would still need to recompute it from scratch, defeating the entire purpose of caching',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ಬಳಸಿದ formula (2 x layers x n_kv_heads x d_head x seq_len x batch x bytes_per_param) 2 ರ ಅಂಶದೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಏಕೆಂದರೆ cache ಪ್ರತಿ token ಗೆ K ಮತ್ತು V ಎರಡೂ vectors ಸಂಗ್ರಹಿಸಬೇಕು, ಕೇವಲ ಒಂದೂ ಅಲ್ಲ -- ಯಾವುದಾದರೂ ಬಿಟ್ಟುಬಿಡುವುದೂ ನಂತರದ generation steps ಮೇಲೆ cross-attention ಅಥವಾ self-attention scoring ಅಸಾಧ್ಯವಾಗಿಸುತ್ತದೆ\n• ಇದೂ Modules 142-143 ಆದ್ಯಂತ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ K/V ಜೋಡಣೆ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ: ಪ್ರತಿ attention computation ಗೆ score ಮಾಡಲು ಒಂದೂ K ಮತ್ತು weight-and-sum ಮಾಡಲು ಒಂದೂ V ಅಗತ್ಯ, ಆದ್ದರಿಂದ V ಸಂಗ್ರಹಿಸುವುದೂ ಬಿಟ್ಟುಬಿಟ್ಟ ಒಂದೂ cache ಇನ್ನೂ ಅದನ್ನೂ scratch ಇಂದ ಮರುಗಣಿಸಬೇಕಾಗುತ್ತಿತ್ತು, caching ನ ಸಂಪೂರ್ಣ ಉದ್ದೇಶ ಸೋಲಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'Why Cache Size Scales Linearly, Not Quadratically', headingKn: 'Cache ಗಾತ್ರ ಚತುರ್ಭುಜವಾಗಿ ಅಲ್ಲ, ರೇಖೀಯವಾಗಿ ಏಕೆ ಪ್ರಮಾಣಿಸುತ್ತದೆ',
      bodyEn: '• The KV cache stores one K and V vector per token per layer per KV head -- genuinely confirmed here to scale as context_length x layers x n_kv_heads x d_head x 2 x bytes, which is linear in context length, unlike the O(N^2) cost of the attention computation itself (Module 153)\n• This distinction matters: doubling context length doubles cache memory (linear, genuinely confirmed here) but quadruples raw attention compute (Module 153\'s O(N^2)) -- two different costs with two different scaling laws, which is exactly why techniques addressing one (GQA for memory) do not automatically fix the other (Flash Attention/sliding window for compute)',
      bodyKn: '• KV cache ಪ್ರತಿ token ಗೆ ಪ್ರತಿ layer ಗೆ ಪ್ರತಿ KV head ಗೆ ಒಂದೂ K ಮತ್ತು V vector ಸಂಗ್ರಹಿಸುತ್ತದೆ -- ಇಲ್ಲಿ context_length x layers x n_kv_heads x d_head x 2 x bytes ಆಗಿ ಪ್ರಮಾಣಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, ಇದೂ context length ನಲ್ಲಿ ರೇಖೀಯ, attention computation ಸ್ವತಃ ನ O(N^2) ವೆಚ್ಚಕ್ಕಿಂತ (Module 153) ಭಿನ್ನವಾಗಿ\n• ಈ ವ್ಯತ್ಯಾಸ ಮುಖ್ಯ: context length ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ cache memory ಅನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ (ರೇಖೀಯ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ) ಆದರೆ ಕಚ್ಚಾ attention compute ಅನ್ನೂ (Module 153 ನ O(N^2)) ನಾಲ್ಕೂ ಪಟ್ಟು ಮಾಡುತ್ತದೆ -- ಎರಡೂ ಬೇರೆ ವೆಚ್ಚಗಳು ಎರಡೂ ಬೇರೆ ಪ್ರಮಾಣಿಸುವ ನಿಯಮಗಳ ಜೊತೆ, ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ ಒಂದೂ ಪರಿಹರಿಸುವ techniques (memory ಗಾಗಿ GQA) ಇನ್ನೊಂದೂ (compute ಗಾಗಿ Flash Attention/sliding window) ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸರಿಪಡಿಸುವುದಿಲ್ಲ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computed for an 8192-token context with 32 layers and d_head=128, how much smaller was the KV cache with GQA (8 heads) versus full MHA (32 heads)?', qKn: '32 layers ಮತ್ತು d_head=128 ಜೊತೆ ಒಂದೂ 8192-token context ಗಾಗಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ, GQA (8 heads) ಜೊತೆ KV cache ಪೂರ್ಣ MHA (32 heads) ಗೆ ಹೋಲಿಸಿ ಎಷ್ಟು ಚಿಕ್ಕದೂ ಆಗಿತ್ತು?',
        opts: ['2x', 'Exactly 4x smaller (1.074 GB vs 4.295 GB) -- genuinely confirmed', '8x smaller', 'No difference'], correct: 1,
        optsKn: ['2x', 'ನಿಖರವಾಗಿ 4x ಚಿಕ್ಕದೂ (1.074 GB vs 4.295 GB) -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '8x ಚಿಕ್ಕದೂ', 'ಯಾವುದೇ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ'] },
      { q: 'Genuinely computed, what reduction factor did MQA (1 shared KV head) achieve versus full MHA (32 heads)?', qKn: 'ನಿಜವಾಗಿ ಗಣಿಸಿದ, MQA (1 ಹಂಚಿಕೊಂಡ KV head) ಪೂರ್ಣ MHA (32 heads) ಗೆ ಹೋಲಿಸಿ ಯಾವ ಕಡಿತ ಅಂಶ ಸಾಧಿಸಿತು?',
        opts: ['4x, same as GQA-8', 'A full 32x reduction -- genuinely confirmed, 8x more aggressive than GQA-8', '2x', 'MQA does not reduce memory'], correct: 1,
        optsKn: ['4x, GQA-8 ಗೆ ಅದೇ', 'ಒಂದೂ ಪೂರ್ಣ 32x ಕಡಿತ -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, GQA-8 ಗಿಂತ 8x ಹೆಚ್ಚು ಆಕ್ರಮಣಕಾರಿ', '2x', 'MQA memory ಕಡಿಮೆ ಮಾಡುವುದಿಲ್ಲ'] },
      { q: 'Genuinely computed across the full MHA/GQA/MQA spectrum table, what reduction factor did GQA-4 (4 KV heads) achieve versus full MHA (32 heads)?', qKn: 'ಸಂಪೂರ್ಣ MHA/GQA/MQA spectrum table ಆದ್ಯಂತ ನಿಜವಾಗಿ ಗಣಿಸಿದ, GQA-4 (4 KV heads) ಪೂರ್ಣ MHA (32 heads) ಗೆ ಹೋಲಿಸಿ ಯಾವ ಕಡಿತ ಅಂಶ ಸಾಧಿಸಿತು?',
        opts: ['4x, same as GQA-8', '8x -- genuinely confirmed (32/4), between GQA-8\'s 4x and MQA\'s 32x', '16x', '2x'], correct: 1,
        optsKn: ['4x, GQA-8 ಗೆ ಅದೇ', '8x -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ (32/4), GQA-8 ನ 4x ಮತ್ತು MQA ನ 32x ನಡುವೆ', '16x', '2x'] },
      { q: 'Genuinely confirmed in the lesson\'s computed table, for a fixed config like GQA-8, does doubling the context length from 4096 to 8192 tokens double the KV cache size?', qKn: 'lesson ನ ಗಣಿಸಿದ table ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, GQA-8 ನಂತಹ ಒಂದೂ ಸ್ಥಿರ config ಗಾಗಿ, context length ಅನ್ನೂ 4096 ಇಂದ 8192 tokens ಗೆ ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ KV cache ಗಾತ್ರವನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆಯೇ?',
        opts: ['No, memory stays the same regardless of context length', 'Yes -- genuinely confirmed exactly linear scaling (e.g. GQA-8: 0.537 GB -> 1.074 GB)', 'No, it quadruples', 'Only for MHA, not GQA'], correct: 1,
        optsKn: ['ಇಲ್ಲ, context length ಏನೇ ಆಗಲಿ memory ಒಂದೇ ಆಗಿ ಉಳಿಯುತ್ತದೆ', 'ಹೌದು -- ನಿಖರವಾಗಿ ರೇಖೀಯ ಪ್ರಮಾಣ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ (ಉದಾ. GQA-8: 0.537 GB -> 1.074 GB)', 'ಇಲ್ಲ, ಇದೂ ನಾಲ್ಕುಪಟ್ಟಾಗುತ್ತದೆ', 'ಕೇವಲ MHA ಗಾಗಿ, GQA ಗಲ್ಲ'] },
      { q: 'Genuinely computed at 32768 tokens, how much KV cache does full MHA (32 heads) require for a single sequence?', qKn: '32768 tokens ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ, ಒಂದೂ ಏಕ sequence ಗಾಗಿ ಪೂರ್ಣ MHA (32 heads) ಎಷ್ಟು KV cache ಅಗತ್ಯಪಡಿಸುತ್ತದೆ?',
        opts: ['0.537 GB', '17.180 GB -- genuinely confirmed, larger than some entire consumer GPUs', '4.295 GB', '1.074 GB'], correct: 1,
        optsKn: ['0.537 GB', '17.180 GB -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, ಕೆಲವು ಸಂಪೂರ್ಣ consumer GPUs ಗಿಂತ ದೊಡ್ಡದೂ', '4.295 GB', '1.074 GB'] },
    ] } },
  ],
};
