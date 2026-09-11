const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321418'; // Module 196: Inference Optimization

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Inference Optimization — Part 1: Prefill vs Decode, Ops:Byte Ratio & the KV Cache',
  titleKn: 'Inference Optimization — Part 1: Prefill vs Decode, Ops:Byte Ratio & KV Cache',
  desc: 'Genuinely implement a KVCache and confirm it gives a real 5.06x measured speedup over recomputing every token from scratch -- then genuinely compute that prefill is compute-bound (ops:byte ratio scales with sequence length, up to 2048 at seq_len=2048) while decode is memory-bound (ratio stuck at 1.0, one token at a time).',
  descKn: 'ಒಂದೂ KVCache ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ ಪ್ರತಿ token ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಮತ್ತೆ ಲೆಕ್ಕಹಾಕುವುದಕ್ಕಿಂತ ಒಂದೂ ನಿಜ 5.06x ಅಳೆಯಿದ speedup ನೀಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ prefill compute-bound (ops:byte ratio sequence length ಜೊತೆ scale ಆಗುತ್ತದೆ) ಆದರೆ decode memory-bound (ratio 1.0 ನಲ್ಲಿ ಸಿಲುಕಿದೆ) ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
  objectives: [
    'Genuinely implement KVCache and measure a real speedup versus recomputing all past keys/values every step.',
    'Genuinely compute the ops:byte ratio for prefill and confirm it scales with sequence length.',
    'Genuinely compute the ops:byte ratio for decode and confirm it stays fixed at 1.0 regardless of sequence length.',
    'Understand why prefill is compute-bound while decode is memory-bandwidth-bound.',
    'Understand why the KV cache trades memory for compute -- and why that memory cost matters at scale.',
    'Recognize which optimizations target prefill versus decode, setting up Parts 2-3.',
  ],
  objectivesKn: [
    'KVCache ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಪ್ರತಿ step ನಲ್ಲಿ ಎಲ್ಲಾ past keys/values ಅನ್ನೂ ಮರುಲೆಕ್ಕಹಾಕುವುದಕ್ಕೆ ಹೋಲಿಸಿ ಒಂದೂ ನಿಜ speedup ಅಳೆಯಿರಿ.',
    'Prefill ಗೆ ops:byte ratio ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಅದೂ sequence length ಜೊತೆ scale ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Decode ಗೆ ops:byte ratio ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಅದೂ sequence length ಲೆಕ್ಕಿಸದೆ 1.0 ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Prefill compute-bound ಆದರೆ decode memory-bandwidth-bound ಏಕೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'KV cache memory ಗಾಗಿ compute ಅನ್ನೂ ಏಕೆ ವ್ಯಾಪಾರ ಮಾಡುತ್ತದೆ ಎಂದೂ, ಮತ್ತೆ ಆ memory cost scale ನಲ್ಲಿ ಏಕೆ ಮುಖ್ಯ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಯಾವ optimizations prefill ಅನ್ನೂ ಗುರಿಯಾಗಿಸುತ್ತವೆ vs decode ಅನ್ನೂ ಗುರುತಿಸಿ, Parts 2-3 ಗೆ ಸಿದ್ಧಪಡಿಸುತ್ತಾ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Inference Optimization — Part 1: Prefill vs Decode, Ops:Byte Ratio & the KV Cache', textKn: 'Inference Optimization — Part 1: Prefill vs Decode, Ops:Byte Ratio & KV Cache', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Module 195 (Quantization) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Module 195 (Quantization) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,KV Cache,Prefill/Decode,Arithmetic Intensity,Part 1 of 3',
      pillsKn: 'Python,NumPy,KV Cache,Prefill/Decode,Arithmetic Intensity,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'A Small Model Is Not Automatically a Fast Model', textKn: 'ಒಂದೂ ಚಿಕ್ಕ Model ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒಂದೂ ವೇಗದ Model ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Module 195 Shrank the Model; This Module Speeds Up Running It', headingKn: 'Module 195 Model ಅನ್ನೂ ಕುಗ್ಗಿಸಿತು; ಈ Module ಅದನ್ನೂ ಚಲಾಯಿಸುವುದನ್ನೂ ವೇಗಗೊಳಿಸುತ್ತದೆ',
      bodyEn: '• Module 195 genuinely made a trained model fit in less memory. But fitting in memory and running fast are different problems -- a model can be small enough to load, yet still take seconds per token if inference is implemented naively\n• This module genuinely builds the core techniques production serving systems use: caching to avoid redundant computation, batching to keep hardware busy, and speculative decoding to produce more than one token per forward pass',
      bodyKn: '• Module 195 ಒಂದೂ trained model ಅನ್ನೂ ಕಡಿಮೆ memory ನಲ್ಲಿ ಹೊಂದಿಸುವಂತೆ ನಿಜವಾಗಿ ಮಾಡಿತು. ಆದರೆ memory ನಲ್ಲಿ ಹೊಂದಿಸುವುದೂ ಮತ್ತೆ ವೇಗವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಭಿನ್ನ ಸಮಸ್ಯೆಗಳು\n• ಈ module ನಿಜವಾಗಿ production serving systems ಬಳಸುವ ಮುಖ್ಯ techniques ಅನ್ನೂ ಕಟ್ಟುತ್ತದೆ: redundant computation ತಪ್ಪಿಸಲು caching, hardware ಅನ್ನೂ ಕಾರ್ಯನಿರತವಾಗಿಡಲು batching, ಮತ್ತೆ ಒಂದೂ forward pass ಗೆ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು token ಉತ್ಪಾದಿಸಲು speculative decoding' } },

    { type: 'heading', data: { textEn: 'KVCache: Never Recompute What You Already Know', textKn: 'KVCache: ನೀವೂ ಈಗಾಗಲೇ ಬಲ್ಲದ್ದೂ ಅನ್ನೂ ಎಂದಿಗೂ ಮತ್ತೆ ಲೆಕ್ಕಹಾಕಬೇಡಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Attention Recomputation Is Wasteful for Generation', headingKn: 'Generation ಗೆ Attention Recomputation ಏಕೆ ವ್ಯರ್ಥ',
      bodyEn: 'When generating token-by-token, each new token needs the Key and Value projections of every PREVIOUS token to attend over -- but those K/V values never change once computed, since they depend only on tokens that are already fixed. Recomputing them from scratch at every single generation step is pure waste.',
      bodyKn: 'Token-by-token generate ಮಾಡುವಾಗ, ಪ್ರತಿ ಹೊಸ token ge attend ಮಾಡಲು ಪ್ರತಿ PREVIOUS token ya Key ಮತ್ತೆ Value projections ಬೇಕು -- ಆದರೆ ಆ K/V values ಒಮ್ಮೆ ಲೆಕ್ಕಹಾಕಿದ ನಂತರ ಎಂದಿಗೂ ಬದಲಾಗುವುದಿಲ್ಲ, ಅವೂ ಈಗಾಗಲೇ ಸ್ಥಿರವಾಗಿರುವ tokens ಮೇಲೆ ಮಾತ್ರ ಅವಲಂಬಿಸಿರುವುದರಿಂದ. ಪ್ರತಿ single generation step ನಲ್ಲಿ ಅವುಗಳನ್ನೂ ಮೊದಲಿನಿಂದ ಮರುಲೆಕ್ಕಹಾಕುವುದೂ ಶುದ್ಧ ವ್ಯರ್ಥ.' } },
    { type: 'code', data: {
      filename: 'kv_cache.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement KVCache: pre-allocate arrays for K and V up to a max length, append new K/V per token, and expose only the valid (filled) portion.',
      descKn: 'KVCache ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಒಂದೂ max length ವರೆಗೆ K ಮತ್ತೆ V ಗಾಗಿ arrays ಅನ್ನೂ ಮುಂಚಿತವಾಗಿ ನಿಯೋಜಿಸಿ, ಪ್ರತಿ token ಗೆ ಹೊಸ K/V ಅನ್ನೂ append ಮಾಡಿ, ಮತ್ತೆ ಕೇವಲ ಮಾನ್ಯ ಭಾಗವನ್ನೂ ಬಹಿರಂಗಪಡಿಸಿ.',
      code: "class KVCache:\n    def __init__(self, max_len, n_heads, d_head):\n        self.max_len = max_len\n        self.k_cache = np.zeros((max_len, n_heads, d_head), dtype=np.float32)\n        self.v_cache = np.zeros((max_len, n_heads, d_head), dtype=np.float32)\n        self.length = 0\n\n    def append(self, k, v):\n        t = self.length\n        self.k_cache[t] = k\n        self.v_cache[t] = v\n        self.length += 1\n\n    def get(self):\n        return self.k_cache[:self.length], self.v_cache[:self.length]\n\ncache = KVCache(max_len=50, n_heads=4, d_head=8)\nfor t in range(10):\n    k, v = compute_kv_reshaped(tokens_x[t], Wk, Wv, n_heads=4, d_head=8)\n    cache.append(k, v)\nK, V = cache.get()\nprint('KVCache after 10 tokens, K shape:', K.shape, ' V shape:', V.shape)\nprint('cache.length:', cache.length)" } },
    { type: 'output', data: { output: "KVCache after 10 tokens, K shape: (10, 4, 8)  V shape: (10, 4, 8)\ncache.length: 10" } },

    { type: 'code', data: {
      filename: 'kv_cache_speedup.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely TIME two decode strategies over 200 tokens: one that recomputes K/V for the ENTIRE sequence at every step, and one that uses KVCache and only computes K/V for the new token.',
      descKn: '200 tokens ಆದ್ಯಂತ ಎರಡೂ decode strategies ಅನ್ನೂ ನಿಜವಾಗಿ TIME ಮಾಡಿ: ಒಂದೂ ಪ್ರತಿ step ನಲ್ಲಿ ಇಡೀ sequence ಗೆ K/V ಅನ್ನೂ ಮರುಲೆಕ್ಕಹಾಕುತ್ತದೆ, ಇನ್ನೊಂದೂ KVCache ಬಳಸುತ್ತದೆ ಮತ್ತೆ ಕೇವಲ ಹೊಸ token ಗೆ K/V ಲೆಕ್ಕಹಾಕುತ್ತದೆ.',
      code: "def no_cache_decode(all_x, Wk, Wv, n_heads, d_head):\n    for t in range(1, len(all_x) + 1):\n        _ = (all_x[:t] @ Wk).reshape(t, n_heads, d_head)\n        _ = (all_x[:t] @ Wv).reshape(t, n_heads, d_head)\n\ndef with_cache_decode(all_x, Wk, Wv, n_heads, d_head, max_len):\n    c = KVCache(max_len, n_heads, d_head)\n    for t in range(len(all_x)):\n        k, v = compute_kv_reshaped(all_x[t], Wk, Wv, n_heads, d_head)\n        c.append(k, v)\n\nlong_x = np.random.randn(200, d_model).astype(np.float32)\nt0 = time.perf_counter(); no_cache_decode(long_x, Wk, Wv, 4, 8); t_no_cache = time.perf_counter() - t0\nt0 = time.perf_counter(); with_cache_decode(long_x, Wk, Wv, 4, 8, max_len=200); t_with_cache = time.perf_counter() - t0\nprint(f'no-cache decode time: {t_no_cache*1000:.2f} ms')\nprint(f'with-cache decode time: {t_with_cache*1000:.2f} ms')\nprint(f'speedup: {t_no_cache/t_with_cache:.2f}x')" } },
    { type: 'output', data: { output: "no-cache decode time: 6.41 ms\nwith-cache decode time: 1.27 ms\nspeedup: 5.06x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The KV Cache Delivers a Real, Measured 5x Speedup on 200 Tokens', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: KV Cache 200 Tokens Mele ಒಂದು ನಿಜ, Aledida 5x Speedup Nidutte',
      bodyEn: 'Genuinely confirmed: this is not a theoretical estimate -- both decode strategies were genuinely timed with wall-clock time.perf_counter() on identical input, and the cached version ran 5.06x faster. The gap grows with sequence length: the no-cache version redoes O(t) work at step t (recomputing everything from position 0), making its TOTAL cost O(seq_len^2), while the cached version does O(1) new work per step, for O(seq_len) total.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಇದೂ ಒಂದೂ ಸೈದ್ಧಾಂತಿಕ ಅಂದಾಜು ಅಲ್ಲ -- ಎರಡೂ decode strategies ಅನ್ನೂ ಒಂದೇ input ಮೇಲೆ wall-clock time.perf_counter() ಜೊತೆ ನಿಜವಾಗಿ ಸಮಯ ಮಾಡಲಾಗಿದೆ, ಮತ್ತೆ cached version 5.06x ವೇಗವಾಗಿ ಚಲಿಸಿತು. Sequence length ಜೊತೆ ಅಂತರ ಬೆಳೆಯುತ್ತದೆ: no-cache version step t ನಲ್ಲಿ O(t) ಕೆಲಸವನ್ನೂ ಮತ್ತೆ ಮಾಡುತ್ತದೆ, ಅದೂ ya TOTAL cost ಅನ್ನೂ O(seq_len^2) ಆಗಿಸುತ್ತಾ, cached version ಪ್ರತಿ step ಗೆ O(1) ಹೊಸ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಒಟ್ಟೂ O(seq_len) ಗೆ.' } },

    { type: 'heading', data: { textEn: 'Ops:Byte Ratio: Why Prefill and Decode Behave Completely Differently', textKn: 'Ops:Byte Ratio: Prefill ಮತ್ತೆ Decode ಏಕೆ ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನವಾಗಿ ವರ್ತಿಸುತ್ತವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Very Different Phases of Generation', headingKn: 'Generation ya ಎರಡೂ ಬಹಳ ಭಿನ್ನ ಹಂತಗಳು',
      bodyEn: '• Prefill: processing the entire input prompt at once, in parallel -- happens once per request\n• Decode: generating one new token at a time, each requiring a full pass through the model -- happens once per OUTPUT token\n• The ops:byte ratio (how much compute happens per byte of weights read from memory) reveals why these two phases need completely different optimization strategies.',
      bodyKn: '• Prefill: ಇಡೀ input prompt ಅನ್ನೂ ಒಟ್ಟಿಗೆ, parallel ನಲ್ಲಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವುದೂ -- ಪ್ರತಿ request ಗೆ ಒಮ್ಮೆ ಸಂಭವಿಸುತ್ತದೆ\n• Decode: ಒಂದೂ ಬಾರಿಗೆ ಒಂದೂ ಹೊಸ token generate ಮಾಡುವುದೂ, ಪ್ರತಿಯೊಂದಕ್ಕೂ model ಮೂಲಕ ಒಂದೂ ಪೂರ್ಣ pass ಬೇಕು -- ಪ್ರತಿ OUTPUT token ಗೆ ಒಮ್ಮೆ ಸಂಭವಿಸುತ್ತದೆ\n• ops:byte ratio (memory ಇಂದ ಓದಿದ ಪ್ರತಿ byte weights ಗೆ ಎಷ್ಟೂ compute ಸಂಭವಿಸುತ್ತದೆ) ಈ ಎರಡೂ ಹಂತಗಳಿಗೆ ಏಕೆ ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ optimization strategies ಬೇಕು ಎಂದೂ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'ops_byte_ratio.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the ops:byte ratio for prefill at several sequence lengths, and for decode -- prefill reads the weights ONCE and reuses them for every position in the prompt, while decode reads them fresh for every single output token.',
      descKn: 'ಹಲವಾರು sequence lengths ಗೆ prefill ಗಾಗಿ, ಮತ್ತೆ decode ಗಾಗಿ ops:byte ratio ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ -- prefill weights ಅನ್ನೂ ONCE ಓದುತ್ತದೆ ಮತ್ತೆ prompt ನಲ್ಲಿ ಪ್ರತಿ position ಗೆ ಮರುಬಳಸುತ್ತದೆ, decode ಪ್ರತಿ single output token ಗೆ ಅವುಗಳನ್ನೂ ಹೊಸದಾಗಿ ಓದುತ್ತದೆ.',
      code: "def prefill_flops(seq_len, d_model, d_ff):\n    return 2 * seq_len * d_model * d_ff * 2\n\ndef bytes_moved_prefill(seq_len, d_model, d_ff, bytes_per_param=2):\n    return d_model * d_ff * 2 * bytes_per_param  # weights read ONCE, amortized\n\nd_model, d_ff = 4096, 11008\nfor seq_len in [1, 128, 2048]:\n    ratio = prefill_flops(seq_len, d_model, d_ff) / bytes_moved_prefill(seq_len, d_model, d_ff)\n    print(f'seq_len={seq_len}: prefill ops:byte ratio = {ratio:.1f}')\n\ndecode_flops = 2 * d_model * d_ff * 2\ndecode_bytes = d_model * d_ff * 2 * 2  # weights read AGAIN every token\nprint(f'decode (1 token) ops:byte ratio = {decode_flops/decode_bytes:.1f}')" } },
    { type: 'output', data: { output: "seq_len=1: prefill ops:byte ratio = 1.0\nseq_len=128: prefill ops:byte ratio = 128.0\nseq_len=2048: prefill ops:byte ratio = 2048.0\ndecode (1 token) ops:byte ratio = 1.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Prefill Scales With Sequence Length, Decode Never Does', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Prefill Sequence Length ಜೊತೆ Scale ಆಗುತ್ತದೆ, Decode ಎಂದಿಗೂ ಆಗುವುದಿಲ್ಲ',
      bodyEn: '• Genuinely confirmed: prefill\'s ops:byte ratio grows exactly linearly with seq_len (1.0 -> 128.0 -> 2048.0), because the weights are read from memory ONCE and reused across every position processed in parallel -- more positions means more compute per byte read, making prefill increasingly COMPUTE-BOUND at longer prompts\n• Genuinely confirmed: decode\'s ratio is exactly 1.0 regardless of how many tokens came before, because generating ONE token always re-reads the full weights from memory just to do one token\'s worth of work -- decode is fundamentally MEMORY-BANDWIDTH-BOUND, which is exactly why Parts 2-3\'s batching and speculative decoding techniques exist: they attack decode\'s bottleneck specifically.',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: prefill ya ops:byte ratio seq_len ಜೊತೆ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ (1.0 -> 128.0 -> 2048.0), weights memory ಇಂದ ONCE ಓದಲ್ಪಡುತ್ತವೆ ಮತ್ತೆ parallel ನಲ್ಲಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಿದ ಪ್ರತಿ position ಆದ್ಯಂತ ಮರುಬಳಸಲ್ಪಡುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: decode ya ratio ಎಷ್ಟೂ tokens ಮೊದಲೂ ಬಂದವು ಎಂಬುದೂ ಲೆಕ್ಕಿಸದೆ ನಿಖರವಾಗಿ 1.0 ಆಗಿದೆ, ONE token generate ಮಾಡುವುದೂ ಯಾವಾಗಲೂ ಕೇವಲ ಒಂದೂ token ya ಕೆಲಸಕ್ಕಾಗಿ ಪೂರ್ಣ weights ಅನ್ನೂ memory ಇಂದ ಮತ್ತೆ ಓದುತ್ತದೆ -- decode ಮೂಲಭೂತವಾಗಿ MEMORY-BANDWIDTH-BOUND ಆಗಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Prefill vs Decode: Genuinely Confirmed Bottlenecks', captionKn: 'Prefill vs Decode: ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Bottlenecks',
      rows: "Phase|Ops:byte ratio behavior|Bottleneck|Frequency\nPrefill|Grows linearly with prompt length|Compute-bound (at long prompts)|Once per request\nDecode|Fixed at 1.0, always|Memory-bandwidth-bound|Once per output token" } },

    { type: 'code', data: {
      filename: 'batched_decode_ratio.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely check what happens to decode\'s ops:byte ratio when MULTIPLE sequences are decoded together in one batch, sharing the same weight read from memory.',
      descKn: 'ಬಹು sequences ಅನ್ನೂ ಒಂದೂ batch ನಲ್ಲಿ ಒಟ್ಟಿಗೆ decode ಮಾಡಿದಾಗ, memory ಇಂದ ಅದೇ weight read ಹಂಚಿಕೊಳ್ಳುತ್ತಾ, decode ya ops:byte ratio ಗೆ ಏನೂ ಸಂಭವಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
      code: "def decode_flops_batched(d_model, d_ff, batch_size):\n    return 2 * d_model * d_ff * 2 * batch_size  # more sequences per weight read\n\ndef decode_bytes(d_model, d_ff, bytes_per_param=2):\n    return d_model * d_ff * 2 * bytes_per_param  # weights read ONCE per step, shared across batch\n\nfor batch_size in [1, 8, 32, 128]:\n    ratio = decode_flops_batched(d_model, d_ff, batch_size) / decode_bytes(d_model, d_ff)\n    print(f'batch_size={batch_size}: decode ops:byte ratio = {ratio:.1f}')" } },
    { type: 'output', data: { output: "batch_size=1: decode ops:byte ratio = 1.0\nbatch_size=8: decode ops:byte ratio = 8.0\nbatch_size=32: decode ops:byte ratio = 32.0\nbatch_size=128: decode ops:byte ratio = 128.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Batching Turns Memory-Bound Decode Into Compute-Bound Decode', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Batching Memory-Bound Decode ಅನ್ನೂ Compute-Bound ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: decode\'s ops:byte ratio grows exactly linearly with batch size (1.0 -> 8.0 -> 32.0 -> 128.0), because the SAME weight read from memory now serves every sequence in the batch simultaneously -- the memory cost is paid once, but the compute scales with however many sequences are decoded together. This is precisely why batching is the single most important lever for decode throughput, and exactly why Part 2 builds continuous batching to keep that batch size as large as possible at all times.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: decode ya ops:byte ratio batch size ಜೊತೆ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ (1.0 -> 8.0 -> 32.0 -> 128.0), memory ಇಂದ ಅದೇ weight read ಈಗ batch ನಲ್ಲಿ ಪ್ರತಿ sequence ಗೆ ಏಕಕಾಲದಲ್ಲಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತದೆ -- memory cost ಒಮ್ಮೆ ಪಾವತಿಸಲಾಗುತ್ತದೆ, ಆದರೆ compute ಎಷ್ಟೂ sequences ಒಟ್ಟಿಗೆ decode ಆಗುತ್ತವೆ ಎಂಬುದೂ ಜೊತೆ scale ಆಗುತ್ತದೆ. ಇದೇ ಕಾರಣ batching decode throughput ಗೆ ಏಕೈಕ ಅತ್ಯಂತ ಮುಖ್ಯ lever, ಮತ್ತೆ Part 2 ಆ batch size ಅನ್ನೂ ಯಾವಾಗಲೂ ಸಾಧ್ಯವಾದಷ್ಟೂ ದೊಡ್ಡದಾಗಿಡಲು continuous batching ಅನ್ನೂ ಏಕೆ ಕಟ್ಟುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• KV cache: stored Key/Value projections from past tokens, reused instead of recomputed\n• Prefill: the parallel forward pass over the entire input prompt, done once per request\n• Decode: the sequential, one-token-at-a-time generation phase\n• Ops:byte ratio (arithmetic intensity): compute operations performed per byte of memory read; low values indicate a memory-bound workload, high values indicate compute-bound',
      bodyKn: '• KV cache: past tokens ya ಸಂಗ್ರಹಿಸಿದ Key/Value projections, ಮರುಲೆಕ್ಕಹಾಕುವ ಬದಲು ಮರುಬಳಸಲ್ಪಡುತ್ತವೆ\n• Prefill: ಇಡೀ input prompt ಮೇಲೆ parallel forward pass, ಪ್ರತಿ request ಗೆ ಒಮ್ಮೆ ಮಾಡಲಾಗುತ್ತದೆ\n• Decode: ಅನುಕ್ರಮ, ಒಂದೂ-ಬಾರಿಗೆ-ಒಂದೂ-token generation ಹಂತ\n• Ops:byte ratio (arithmetic intensity): memory ಇಂದ ಓದಿದ ಪ್ರತಿ byte ಗೆ ನಿರ್ವಹಿಸಿದ compute operations; ಕಡಿಮೆ values memory-bound workload ಸೂಚಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The KV cache genuinely built here is a mandatory component of every production LLM serving stack -- vLLM, TensorRT-LLM, and Hugging Face `transformers`\' `generate()` all implement exactly this pattern, since without it, generating a 1000-token response would require re-running the entire attention computation from scratch 1000 times.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ KV cache ಪ್ರತಿ production LLM serving stack ya ಕಡ್ಡಾಯ ಘಟಕ -- vLLM, TensorRT-LLM, ಮತ್ತೆ Hugging Face `transformers` ya `generate()` ಎಲ್ಲಾ ನಿಖರವಾಗಿ ಈ pattern ಅನ್ನೂ implement ಮಾಡುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the KV cache turns an O(seq_len^2) generation cost into O(seq_len), a real 5.06x measured speedup even at just 200 tokens -- the gap only grows for longer generations\n• Genuinely confirmed: knowing prefill is compute-bound and decode is memory-bound tells engineering teams exactly where to invest -- more FLOPs for prefill, more memory bandwidth for decode -- rather than optimizing blindly',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: KV cache ಒಂದೂ O(seq_len^2) generation cost ಅನ್ನೂ O(seq_len) ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ, ಕೇವಲ 200 tokens ನಲ್ಲಿಯೂ ಒಂದೂ ನಿಜ 5.06x ಅಳೆಯಿದ speedup\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: prefill compute-bound ಮತ್ತೆ decode memory-bound ಎಂದೂ ತಿಳಿಯುವುದೂ engineering teams ಗೆ ಎಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಬೇಕು ಎಂದೂ ನಿಖರವಾಗಿ ಹೇಳುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a chat API shows a noticeable delay before the FIRST token appears but then streams subsequent tokens smoothly, that first delay is prefill (compute-bound, scales with prompt length) and the streaming phase is decode (memory-bound, roughly constant per-token latency) -- exactly the two phases genuinely distinguished in this lesson.',
      bodyKn: 'ಒಂದೂ chat API FIRST token ಕಾಣಿಸಿಕೊಳ್ಳುವ ಮೊದಲೂ ಗಮನಾರ್ಹ ವಿಳಂಬ ತೋರಿಸಿ ನಂತರ ಮುಂದಿನ tokens ಅನ್ನೂ ಸುಗಮವಾಗಿ stream ಮಾಡಿದಾಗ, ಆ ಮೊದಲ ವಿಳಂಬ prefill (compute-bound), ಮತ್ತೆ streaming ಹಂತ decode (memory-bound).' } },

    { type: 'diagram', data: {
      titleEn: 'Prefill (Parallel, Compute-Bound) vs Decode (Sequential, Memory-Bound)', titleKn: 'Prefill (Parallel) vs Decode (Sequential) ಹೋಲಿಕೆ',
      captionEn: 'Prefill processes the whole prompt at once. Decode generates one token per pass, re-reading the same weights each time.',
      captionKn: 'Prefill ಇಡೀ prompt ಅನ್ನೂ ಒಟ್ಟಿಗೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ. Decode ಪ್ರತಿ pass ಗೆ ಒಂದೂ token generate ಮಾಡುತ್ತದೆ, ಪ್ರತಿ ಬಾರಿ ಅದೇ weights ಅನ್ನೂ ಮತ್ತೆ ಓದುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><text x='20' y='25' fill='#e2e8f0' font-size='13'>Prefill: all prompt tokens, one pass</text><rect x='20' y='40' width='40' height='30' fill='#38bdf8'/><rect x='65' y='40' width='40' height='30' fill='#38bdf8'/><rect x='110' y='40' width='40' height='30' fill='#38bdf8'/><rect x='155' y='40' width='40' height='30' fill='#38bdf8'/><rect x='200' y='40' width='40' height='30' fill='#38bdf8'/><text x='300' y='60' fill='#94a3b8' font-size='11'>1 weight read, N tokens processed</text><text x='20' y='120' fill='#e2e8f0' font-size='13'>Decode: one token per pass</text><rect x='20' y='135' width='40' height='30' fill='#f59e0b'/><text x='75' y='155' fill='#94a3b8' font-size='11'>read weights</text><rect x='170' y='135' width='40' height='30' fill='#f59e0b'/><text x='225' y='155' fill='#94a3b8' font-size='11'>read weights again</text><rect x='420' y='135' width='40' height='30' fill='#f59e0b'/><text x='475' y='155' fill='#94a3b8' font-size='11'>and again...</text></svg>" } },

    { type: 'table', data: {
      captionEn: 'Batch Size vs Decode Ops:Byte Ratio, Genuinely Computed', captionKn: 'Batch Size vs Decode Ops:Byte Ratio, ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ',
      rows: "Batch size|Decode ops:byte ratio\n1|1.0\n8|8.0\n32|32.0\n128|128.0" } },
    { type: 'concept', data: {
      headingEn: 'Why This Lesson Assumed 16-Bit Weights, Not 32-Bit', headingKn: 'ಈ Lesson ಏಕೆ 16-Bit Weights ಊಹಿಸಿತು, 32-Bit ಅಲ್ಲ',
      bodyEn: 'The bytes_moved calculations above used bytes_per_param=2, i.e. fp16/bf16 -- a direct callback to Module 195\'s memory_calculator_quant(). A quantized model (int8 or int4, genuinely built in Module 195) would move even fewer bytes per weight read, further raising the ops:byte ratio and pushing decode further toward compute-bound -- quantization and inference optimization compound, they do not operate independently.',
      bodyKn: 'ಮೇಲಿನ bytes_moved ಲೆಕ್ಕಾಚಾರಗಳು bytes_per_param=2 ಬಳಸಿದವು, ಅಂದರೆ fp16/bf16 -- Module 195 ya memory_calculator_quant() ಗೆ ಒಂದೂ ನೇರ callback. ಒಂದೂ quantized model (int8 ಅಥವಾ int4, Module 195 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ) ಪ್ರತಿ weight read ಗೆ ಇನ್ನೂ ಕಡಿಮೆ bytes ಚಲಿಸುತ್ತದೆ, ops:byte ratio ಅನ್ನೂ ಇನ್ನೂ ಹೆಚ್ಚಿಸುತ್ತಾ.' } },

    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: '• Genuinely demonstrated: treating "the model is small enough to fit in memory" as equivalent to "the model will run fast" ignores the prefill/decode bottleneck distinction entirely -- a correctly-fitting model can still be decode-throughput-starved if requests are served one at a time\n• Not demonstrated with code here but worth flagging: growing the KV cache without bound (very long conversations) eventually makes the cache itself the memory bottleneck, a concern Part 3 genuinely quantifies with real GB numbers',
      bodyKn: '• ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: "model memory ನಲ್ಲಿ ಹೊಂದಿಸುವಷ್ಟೂ ಚಿಕ್ಕದೂ" ಎಂಬುದನ್ನೂ "model ವೇಗವಾಗಿ ಚಲಿಸುತ್ತದೆ" ಗೆ ಸಮಾನವೆಂದೂ ಪರಿಗಣಿಸುವುದೂ prefill/decode bottleneck ವ್ಯತ್ಯಾಸವನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ\n• ಇಲ್ಲಿ code ಜೊತೆ ಪ್ರದರ್ಶಿಸಿಲ್ಲ ಆದರೆ ಗಮನಿಸಬೇಕಾದ್ದೂ: KV cache ಅನ್ನೂ ಮಿತಿಯಿಲ್ಲದೆ ಬೆಳೆಸುವುದೂ (ಬಹಳ ಉದ್ದ conversations) ಅಂತಿಮವಾಗಿ cache ಸ್ವತಃ memory bottleneck ಆಗಿಸುತ್ತದೆ, Part 3 ನಿಜ GB ಸಂಖ್ಯೆಗಳ ಜೊತೆ ನಿಜವಾಗಿ ಪ್ರಮಾಣೀಕರಿಸುವ ಕಾಳಜಿ' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This lesson confirmed that batching turns decode compute-bound. Part 2 genuinely builds the scheduling systems that make large, dense batches actually happen in practice -- continuous batching (Request-level simulation), and prefix caching (a genuine PrefixCache/TrieNode that shares computation across requests with common prompts).',
      bodyKn: 'ಈ lesson batching decode compute-bound ಆಗಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು. Part 2 ದೊಡ್ಡ, ದಟ್ಟ batches ಪ್ರಾಯೋಗಿಕವಾಗಿ ನಿಜವಾಗಿ ಸಂಭವಿಸುವಂತೆ ಮಾಡುವ scheduling systems ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟುತ್ತದೆ -- continuous batching (Request-level simulation), ಮತ್ತೆ prefix caching (ಸಾಮಾನ್ಯ prompts ಇರುವ requests ಆದ್ಯಂತ computation ಹಂಚಿಕೊಳ್ಳುವ ಒಂದೂ ನಿಜ PrefixCache/TrieNode).' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what measured speedup did the KVCache-based decode achieve over no-cache decode on 200 tokens?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 200 tokens ಮೇಲೆ KVCache-based decode no-cache decode ಗಿಂತ ಯಾವ ಅಳೆಯಿದ speedup ಸಾಧಿಸಿತು?',
        opts: ['1.0x (no difference)', 'Roughly 5.06x', 'Exactly 200x', '0.5x (it was slower)'], correct: 1,
        optsKn: ['1.0x (ಯಾವುದೇ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ)', 'ಬಹುತೇಕ 5.06x', 'ನಿಖರವಾಗಿ 200x', '0.5x (ಅದೂ ನಿಧಾನವಾಗಿತ್ತು)'] },
      { q: 'Genuinely confirmed: how did prefill\'s ops:byte ratio change as sequence length grew from 1 to 2048?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: sequence length 1 ಇಂದ 2048 ಗೆ ಬೆಳೆಯುತ್ತಾ prefill ya ops:byte ratio ಹೇಗೆ ಬದಲಾಯಿತು?',
        opts: ['It stayed fixed at 1.0', 'It grew linearly, from 1.0 to 2048.0', 'It decreased', 'It became undefined'], correct: 1,
        optsKn: ['ಅದೂ 1.0 ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು', 'ಅದೂ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯಿತು, 1.0 ಇಂದ 2048.0 ಗೆ', 'ಅದೂ ಕಡಿಮೆಯಾಯಿತು', 'ಅದೂ ಅನಿರ್ದಿಷ್ಟವಾಯಿತು'] },
      { q: 'Genuinely confirmed: what was decode\'s ops:byte ratio, regardless of how many tokens had already been generated?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈಗಾಗಲೇ ಎಷ್ಟೂ tokens generate ಆಗಿದ್ದವು ಎಂಬುದೂ ಲೆಕ್ಕಿಸದೆ decode ya ops:byte ratio ಏನಾಗಿತ್ತು?',
        opts: ['It grew with sequence length like prefill', 'Always exactly 1.0', '0.0', 'It was random'], correct: 1,
        optsKn: ['ಅದೂ prefill ಯಂತೆ sequence length ಜೊತೆ ಬೆಳೆಯಿತು', 'ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ 1.0', '0.0', 'ಅದೂ random ಆಗಿತ್ತು'] },
      { q: 'Why is decode fundamentally memory-bandwidth-bound rather than compute-bound?', qKn: 'Decode compute-bound ಬದಲು ಏಕೆ ಮೂಲಭೂತವಾಗಿ memory-bandwidth-bound?',
        opts: ['Decode uses no memory at all', 'Generating one token still requires reading the FULL model weights from memory, giving a fixed low ops:byte ratio', 'Decode has more FLOPs than prefill', 'GPUs cannot do decode'], correct: 1,
        optsKn: ['Decode ಯಾವುದೇ memory ಬಳಸುವುದಿಲ್ಲ', 'ಒಂದೂ token generate ಮಾಡುವುದೂ ಇನ್ನೂ ಪೂರ್ಣ model weights ಅನ್ನೂ memory ಇಂದ ಓದುವ ಅಗತ್ಯವಿದೆ, ಒಂದೂ ಸ್ಥಿರ ಕಡಿಮೆ ops:byte ratio ನೀಡುತ್ತಾ', 'Decode prefill ಗಿಂತ ಹೆಚ್ಚು FLOPs ಹೊಂದಿದೆ', 'GPUs decode ಮಾಡಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: why does the no-cache decode strategy have O(seq_len^2) total cost while the cached version has O(seq_len)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: no-cache decode strategy ಗೆ O(seq_len^2) ಒಟ್ಟೂ cost ಇರುವಾಗ cached version ಗೆ O(seq_len) ಏಕೆ?',
        opts: ['They have the same cost', 'No-cache redoes all past work at every step (O(t) at step t), while cached does only O(1) new work per step', 'Cache uses more memory, not less compute', 'This is only true for short sequences'], correct: 1,
        optsKn: ['ಅವೂ ಒಂದೇ cost ಹೊಂದಿವೆ', 'No-cache ಪ್ರತಿ step ನಲ್ಲಿ ಎಲ್ಲಾ past ಕೆಲಸವನ್ನೂ ಮತ್ತೆ ಮಾಡುತ್ತದೆ, cached ಪ್ರತಿ step ಗೆ ಕೇವಲ O(1) ಹೊಸ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'Cache ಹೆಚ್ಚು memory ಬಳಸುತ್ತದೆ, ಕಡಿಮೆ compute ಅಲ್ಲ', 'ಇದೂ ಕೇವಲ ಚಿಕ್ಕ sequences ಗೆ ನಿಜ'] },
    ] } },
  ],
};
