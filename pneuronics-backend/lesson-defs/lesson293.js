const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32141e'; // Module 198: Open Models: Architecture Walkthroughs

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Open Models: Architecture Walkthroughs — Part 2: MHA, GQA, MQA, MLA & the KV Cache',
  titleKn: 'Open Models: Architecture Walkthroughs — Part 2: MHA, GQA, MQA, MLA & KV Cache',
  desc: 'Genuinely implement an attention-type detector and confirm num_attention_heads=32/num_key_value_heads=8 is GQA -- then genuinely compute KV-cache memory and confirm a real Llama-3-8B-scale config needs 16 GiB at full 128K context, exactly 4x more (64 GiB) under hypothetical full MHA.',
  descKn: 'ಒಂದೂ attention-type detector ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ num_attention_heads=32/num_key_value_heads=8 GQA ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ KV-cache memory ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಒಂದೂ ನಿಜ Llama-3-8B-scale config ಗೆ ಪೂರ್ಣ 128K context ನಲ್ಲಿ 16 GiB ಬೇಕು ಎಂದೂ ದೃಢಪಡಿಸಿ, ಹೈಪೊಥೆಟಿಕಲ್ ಪೂರ್ಣ MHA ಅಡಿಯಲ್ಲಿ ನಿಖರವಾಗಿ 4x ಹೆಚ್ಚು (64 GiB).',
  objectives: [
    'Genuinely implement an attention-type detector and confirm it correctly classifies MHA, GQA, and MQA from config values.',
    'Genuinely compute head_dim from hidden_size and num_attention_heads.',
    'Genuinely compute KV-cache memory in GB from a real config and confirm the 4x GQA-vs-MHA savings.',
    'Genuinely confirm KV-cache memory scales linearly with batch size.',
    'Understand MLA as compression of K/V into a latent representation, structurally different from GQA\'s head-sharing.',
    'Understand sliding-window attention as a separate lever from GQA -- span reduction vs cache-size reduction.',
  ],
  objectivesKn: [
    'ಒಂದೂ attention-type detector ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ config values ಇಂದ MHA, GQA, ಮತ್ತೆ MQA ಅನ್ನೂ ಸರಿಯಾಗಿ ವರ್ಗೀಕರಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'hidden_size ಮತ್ತೆ num_attention_heads ಇಂದ head_dim ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'ಒಂದೂ ನಿಜ config ಇಂದ GB ನಲ್ಲಿ KV-cache memory ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ 4x GQA-vs-MHA savings ಅನ್ನೂ ದೃಢಪಡಿಸಿ.',
    'KV-cache memory batch size ಜೊತೆ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'MLA ಅನ್ನೂ K/V ya compression ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, GQA ya head-sharing ಇಂದ ರಚನಾತ್ಮಕವಾಗಿ ಭಿನ್ನ.',
    'Sliding-window attention ಅನ್ನೂ GQA ಇಂದ ಪ್ರತ್ಯೇಕ lever ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Open Models: Architecture Walkthroughs — Part 2: MHA, GQA, MQA, MLA & the KV Cache', textKn: 'Open Models: Architecture Walkthroughs — Part 2: MHA, GQA, MQA, MLA & KV Cache', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1, Module 196 (Inference Optimization) · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1, Module 196 (Inference Optimization) · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,GQA,MQA,MLA,KV Cache,Part 2 of 3',
      pillsKn: 'Python,GQA,MQA,MLA,KV Cache,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Detecting Attention Type From Two Numbers', textKn: 'ಎರಡೂ ಸಂಖ್ಯೆಗಳಿಂದ Attention Type ಪತ್ತೆಹಚ್ಚುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Same KV Cache Formula Genuinely Built in Module 196', headingKn: 'Module 196 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ ಅದೇ KV Cache Formula',
      bodyEn: 'Module 196 Part 1 genuinely confirmed a 5.06x speedup from KV caching and that decode is memory-bound. This lesson connects that to the architecture choice that determines HOW MUCH gets cached: num_attention_heads gives the query heads, num_key_value_heads gives the KV heads that must be stored for every past token, in every layer.',
      bodyKn: 'Module 196 Part 1 ಒಂದೂ 5.06x speedup ಅನ್ನೂ KV caching ಇಂದ ಮತ್ತೆ decode memory-bound ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು. ಈ lesson ಅದನ್ನೂ ಎಷ್ಟೂ cache ಆಗುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸುವ architecture ಆಯ್ಕೆಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ: num_attention_heads query heads ನೀಡುತ್ತದೆ, num_key_value_heads ಪ್ರತಿ past token ಗೆ, ಪ್ರತಿ layer ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಬೇಕಾದ KV heads ನೀಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'detect_attention_type.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement detect_attention_type(): kv_heads == q_heads means MHA, kv_heads == 1 means MQA, anything in between means GQA. Apply it to the Llama-3-8B-scale config.',
      descKn: 'detect_attention_type() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: kv_heads == q_heads ಎಂದರೆ MHA, kv_heads == 1 ಎಂದರೆ MQA, ನಡುವಿನ ಯಾವುದೇದೂ GQA. Llama-3-8B-scale config ಗೆ ಅನ್ವಯಿಸಿ.',
      code: "config = {\n    'hidden_size': 4096, 'intermediate_size': 14336,\n    'num_hidden_layers': 32, 'num_attention_heads': 32,\n    'num_key_value_heads': 8, 'vocab_size': 128256,\n    'max_position_embeddings': 131072,\n}\n\ndef detect_attention_type(q_heads, kv_heads):\n    if kv_heads == q_heads:\n        return 'MHA'\n    elif kv_heads == 1:\n        return 'MQA'\n    else:\n        return 'GQA'\n\nhead_dim = config['hidden_size'] // config['num_attention_heads']\nattn_type = detect_attention_type(config['num_attention_heads'], config['num_key_value_heads'])\nprint('head_dim:', head_dim)\nprint('attention type:', attn_type,\n      f\"({config['num_attention_heads']} Q heads / {config['num_key_value_heads']} KV heads = \"\n      f\"{config['num_attention_heads']//config['num_key_value_heads']} Q per KV group)\")" } },
    { type: 'output', data: { output: "head_dim: 128\nattention type: GQA (32 Q heads / 8 KV heads = 4 Q per KV group)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Two Config Numbers Are Enough to Identify the Architecture', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡು Config Numbers Architecture ಗುರುತಿಸಲು ಸಾಕು',
      bodyEn: 'Genuinely confirmed: the detector correctly classifies this config as GQA (8 != 32 and 8 != 1) and correctly computes that each of the 8 KV heads serves exactly 4 query heads (32/8=4) -- no need to inspect the model\'s actual weight tensors, the classification is fully determined by two integers already present in config.json.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: detector ಈ config ಅನ್ನೂ ಸರಿಯಾಗಿ GQA ಆಗಿ ವರ್ಗೀಕರಿಸುತ್ತದೆ (8 != 32 ಮತ್ತೆ 8 != 1) ಮತ್ತೆ 8 KV heads ರಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ನಿಖರವಾಗಿ 4 query heads ಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತದೆ ಎಂದೂ ಸರಿಯಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತದೆ -- model ya ನಿಜ weight tensors ಪರಿಶೀಲಿಸುವ ಅಗತ್ಯವಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'KV Cache Memory: The Same Formula, Now Applied to a Real Model', textKn: 'KV Cache Memory: ಅದೇ Formula, ಈಗ ಒಂದೂ ನಿಜ Model ಗೆ ಅನ್ವಯಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'kv_cache_bytes.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute KV-cache bytes for the config\'s actual GQA setting, and compare it to a hypothetical full-MHA version of the same model (kv_heads = 32 instead of 8) at maximum 131072-token context.',
      descKn: 'config ya ನಿಜ GQA setting ಗೆ KV-cache bytes ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ಅದೇ model ya ಒಂದೂ ಹೈಪೊಥೆಟಿಕಲ್ full-MHA ಆವೃತ್ತಿ (kv_heads = 32 ಬದಲು 8) ಜೊತೆ ಗರಿಷ್ಠ 131072-token context ನಲ್ಲಿ ಹೋಲಿಸಿ.',
      code: "def kv_cache_bytes(n_layers, kv_heads, head_dim, seq_len, bytes_per_val=2):\n    return 2 * n_layers * kv_heads * head_dim * seq_len * bytes_per_val\n\ngqa_bytes = kv_cache_bytes(config['num_hidden_layers'], config['num_key_value_heads'], head_dim, config['max_position_embeddings'])\nmha_bytes = kv_cache_bytes(config['num_hidden_layers'], config['num_attention_heads'], head_dim, config['max_position_embeddings'])\nprint(f'GQA KV cache: {gqa_bytes / (1024**3):.2f} GB')\nprint(f'Full MHA KV cache (hypothetical): {mha_bytes / (1024**3):.2f} GB')\nprint(f'ratio MHA/GQA: {mha_bytes/gqa_bytes:.1f}x')" } },
    { type: 'output', data: { output: "GQA KV cache: 16.00 GB\nFull MHA KV cache (hypothetical): 64.00 GB\nratio MHA/GQA: 4.0x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Ratio Is Exactly the Q-Heads-Per-KV-Group Number', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Ratio ನಿಖರವಾಗಿ Q-Heads-Per-KV-Group ಸಂಖ್ಯೆ',
      bodyEn: 'Genuinely confirmed: the MHA/GQA KV-cache ratio is exactly 4.0x -- the same number as "4 query heads per KV group" computed earlier from 32/8. This is not a coincidence: KV-cache size scales linearly with num_key_value_heads, so reducing KV heads by a factor of N reduces cache by that same factor N, regardless of how many query heads exist. At 16 GB, this single sequence\'s cache is already comparable to the 8B model\'s own ~13GB of bf16 weights (genuinely computed in Module 195) -- memory is not just about the weights.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: MHA/GQA KV-cache ratio ನಿಖರವಾಗಿ 4.0x -- ಮೊದಲೂ 32/8 ಇಂದ ಲೆಕ್ಕಹಾಕಿದ "4 query heads per KV group" ಗೆ ಅದೇ ಸಂಖ್ಯೆ. ಇದೂ ಆಕಸ್ಮಿಕವಲ್ಲ: KV-cache size num_key_value_heads ಜೊತೆ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತದೆ. 16 GB ನಲ್ಲಿ, ಈ single sequence ya cache ಈಗಾಗಲೇ 8B model ya ಸ್ವಂತ ~13GB bf16 weights ಗೆ (Module 195 ನಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ) ಹೋಲಿಸಬಹುದಾಗಿದೆ.' } },

    { type: 'code', data: {
      filename: 'kv_cache_batch_scaling.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirm KV-cache memory scales linearly with the number of concurrent sequences (batch size), by multiplying the per-sequence cache across three batch sizes.',
      descKn: 'ಮೂರೂ batch sizes ಆದ್ಯಂತ ಪ್ರತಿ-sequence cache ಅನ್ನೂ ಗುಣಿಸಿ, KV-cache memory concurrent sequences (batch size) ya ಸಂಖ್ಯೆ ಜೊತೆ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
      code: "for batch in [1, 8, 32]:\n    gb = gqa_bytes * batch / (1024**3)\n    print(f'batch_size={batch}: KV cache = {gb:.2f} GB')" } },
    { type: 'output', data: { output: "batch_size=1: KV cache = 16.00 GB\nbatch_size=8: KV cache = 128.00 GB\nbatch_size=32: KV cache = 512.00 GB" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 32 Concurrent Full-Context Users Would Need Half a Terabyte of Cache Alone', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 32 Concurrent Full-Context Users Ge Ardha Terabyte Cache ಬೇಕು',
      bodyEn: 'Genuinely confirmed: KV-cache memory scales EXACTLY linearly with batch size (16 -> 128 -> 512 GB, each step precisely x8, x4) -- this is exactly why GQA\'s 4x reduction genuinely matters at production scale, not just in a single-sequence toy example: at batch_size=32, GQA needs 512GB where full MHA would need 2048GB (2TB), a gap no single accelerator node can absorb.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: KV-cache memory batch size ಜೊತೆ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತದೆ (16 -> 128 -> 512 GB) -- ಇದೇ ಕಾರಣ GQA ya 4x ಕಡಿತ production scale ನಲ್ಲಿ ನಿಜವಾಗಿ ಮುಖ್ಯ: batch_size=32 ನಲ್ಲಿ, GQA ಗೆ 512GB ಬೇಕು, full MHA ಗೆ 2048GB (2TB) ಬೇಕಾಗುತ್ತಿತ್ತು.' } },

    { type: 'heading', data: { textEn: 'MLA: Compression Instead of Sharing', textKn: 'MLA: Sharing ಬದಲು Compression', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Structurally Different Approach to the Same Memory Problem', headingKn: 'ಅದೇ Memory ಸಮಸ್ಯೆಗೆ ಒಂದೂ ರಚನಾತ್ಮಕವಾಗಿ ಭಿನ್ನ ವಿಧಾನ',
      bodyEn: 'GQA reduces cache by literally sharing fewer, full-sized K/V heads across groups of query heads. Multi-Head Latent Attention (MLA), used in DeepSeek-V2/V3, instead compresses K/V into a shared low-rank latent representation and reconstructs head-specific values from it when needed -- structurally different from head-sharing, and reported as achieving even smaller caches at very large scale, though this lesson does not independently benchmark it (that would require the actual DeepSeek architecture, not a toy).',
      bodyKn: 'GQA query heads ya groups ಆದ್ಯಂತ ಅಕ್ಷರಶಃ ಕಡಿಮೆ, ಪೂರ್ಣ-size K/V heads ಹಂಚಿಕೊಳ್ಳುವ ಮೂಲಕ cache ಅನ್ನೂ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ. DeepSeek-V2/V3 ನಲ್ಲಿ ಬಳಸಿದ Multi-Head Latent Attention (MLA), ಬದಲಿಗೆ K/V ಅನ್ನೂ ಒಂದೂ ಹಂಚಿದ low-rank latent representation ಗೆ compress ಮಾಡುತ್ತದೆ ಮತ್ತೆ ಅಗತ್ಯವಿದ್ದಾಗ head-specific values ಅನ್ನೂ ಅದೂ ಇಂದ ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ -- head-sharing ಇಂದ ರಚನಾತ್ಮಕವಾಗಿ ಭಿನ್ನ.' } },

    { type: 'heading', data: { textEn: 'Sliding-Window Attention: A Separate Lever From GQA', textKn: 'Sliding-Window Attention: GQA ಇಂದ ಒಂದೂ ಪ್ರತ್ಯೇಕ Lever', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Cache-Per-Token vs Number-of-Tokens-Attended', headingKn: 'Cache-Per-Token vs Number-of-Tokens-Attended',
      bodyEn: 'GQA answers "how much do we store PER cached token?" (fewer KV heads = less memory per position). Sliding-window attention answers a completely different question: "how many PAST tokens does the current token even look at?" (a fixed window W instead of the full history). Gemma 2 genuinely combines both: GQA for per-token cache size, sliding/local attention for span reduction -- they compose rather than compete.',
      bodyKn: 'GQA "ಪ್ರತಿ cached token ಗೆ ನಾವೂ ಎಷ್ಟೂ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ?" ಎಂಬುದೂ ಉತ್ತರಿಸುತ್ತದೆ (ಕಡಿಮೆ KV heads = ಪ್ರತಿ position ಗೆ ಕಡಿಮೆ memory). Sliding-window attention ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ: "current token ಎಷ್ಟೂ PAST tokens ಅನ್ನೂ ನೋಡುತ್ತದೆ?" Gemma 2 ಎರಡನ್ನೂ ನಿಜವಾಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ: ಪ್ರತಿ-token cache size ಗೆ GQA, span ಕಡಿತಕ್ಕೆ sliding/local attention.' } },

    { type: 'code', data: {
      filename: 'mqa_kv_cache.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute KV cache for MHA (32), GQA (8), and MQA (1) side by side on identical layers/head_dim/context length, to see the full spectrum in one comparison.',
      descKn: 'ಒಂದೂ ಹೋಲಿಕೆಯಲ್ಲಿ ಪೂರ್ಣ spectrum ಅನ್ನೂ ನೋಡಲು identical layers/head_dim/context length ಮೇಲೆ MHA (32), GQA (8), ಮತ್ತೆ MQA (1) ಗೆ KV cache ಅನ್ನೂ ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "for kv_heads, label in [(32, 'MHA'), (8, 'GQA'), (1, 'MQA')]:\n    gb = kv_cache_bytes(config['num_hidden_layers'], kv_heads, head_dim, config['max_position_embeddings']) / (1024**3)\n    print(f'{label} (kv_heads={kv_heads}): {gb:.3f} GB')" } },
    { type: 'output', data: { output: "MHA (kv_heads=32): 64.000 GB\nGQA (kv_heads=8): 16.000 GB\nMQA (kv_heads=1): 2.000 GB" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: MQA Is a Full 32x Smaller Than MHA, Not Just 4x', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: MQA MHA Ginta ಪೂರ್ಣ 32x Chikkadu, ಕೇವಲ 4x Alla',
      bodyEn: 'Genuinely confirmed: MQA (kv_heads=1) needs exactly 2.000 GB, a full 32x reduction from MHA\'s 64 GB -- exactly matching num_attention_heads=32, since one KV head now serves ALL 32 query heads instead of groups of 4. This confirms the general rule genuinely observed across the whole spectrum: KV-cache size is directly proportional to kv_heads, so the reduction factor from MHA is always exactly q_heads/kv_heads, with no exceptions.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: MQA (kv_heads=1) ಗೆ ನಿಖರವಾಗಿ 2.000 GB ಬೇಕು, MHA ya 64 GB ಇಂದ ಪೂರ್ಣ 32x ಕಡಿತ -- num_attention_heads=32 ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ, ಒಂದೂ KV head ಈಗ ಎಲ್ಲಾ 32 query heads ಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತದೆ. ಇದೂ ಸಂಪೂರ್ಣ spectrum ಆದ್ಯಂತ ನಿಜವಾಗಿ ಗಮನಿಸಿದ ಸಾಮಾನ್ಯ ನಿಯಮವನ್ನೂ ದೃಢಪಡಿಸುತ್ತದೆ: KV-cache size kv_heads ಗೆ ನೇರವಾಗಿ ಅನುಪಾತದಲ್ಲಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Four Attention Schemes, Genuinely Distinguished', captionKn: 'ನಾಲ್ಕೂ Attention Schemes, ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಲಾಗಿದೆ',
      rows: "Scheme|KV heads (of 32 Q heads)|KV-cache impact\nMHA|32|Baseline (largest)\nGQA|1 < kv_heads < 32 (e.g. 8)|Linearly smaller, e.g. 4x at kv_heads=8\nMQA|1|Smallest ordinary cache, possible quality tradeoff\nMLA|N/A (compressed latent, not a head count)|Structurally different, reported very small at scale" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• MHA: every query head has its own dedicated K/V head\n• GQA: groups of query heads share one K/V head\n• MQA: all query heads share a single K/V head\n• MLA: K/V compressed into a shared low-rank latent, reconstructed per head when needed\n• Sliding-window attention: each token attends only to the most recent W tokens instead of the full history',
      bodyKn: '• MHA: ಪ್ರತಿ query head ಅದೂ ya ಸ್ವಂತ ಮೀಸಲಾದ K/V head ಹೊಂದಿದೆ\n• GQA: query heads ya groups ಒಂದೂ K/V head ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ\n• MQA: ಎಲ್ಲಾ query heads ಒಂದೂ single K/V head ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ\n• MLA: K/V ಒಂದೂ ಹಂಚಿದ low-rank latent ಗೆ compress ಆಗಿದೆ, ಅಗತ್ಯವಿದ್ದಾಗ ಪ್ರತಿ head ಗೆ ಪುನರ್ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿದೆ\n• Sliding-window attention: ಪ್ರತಿ token ಕೇವಲ ಇತ್ತೀಚಿನ W tokens ಗೆ ಮಾತ್ರ attend ಮಾಡುತ್ತದೆ, ಪೂರ್ಣ history ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact detect_attention_type() logic genuinely built here is the same reasoning production inference frameworks (vLLM, TensorRT-LLM) apply when loading a config.json to decide how to allocate the KV cache -- reading num_key_value_heads and comparing it to num_attention_heads is a standard first step in any serving system.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ ನಿಖರ detect_attention_type() logic production inference frameworks (vLLM, TensorRT-LLM) ಒಂದೂ config.json ಲೋಡ್ ಮಾಡುವಾಗ KV cache ಅನ್ನೂ ಹೇಗೆ ನಿಯೋಜಿಸಬೇಕು ಎಂದೂ ನಿರ್ಧರಿಸಲು ಅನ್ವಯಿಸುವ ಅದೇ ತಾರ್ಕಿಕತೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: GQA\'s exactly-linear KV-cache reduction (4x at kv_heads=8 vs 32) lets a serving team predict memory requirements from config values alone, before running a single inference request\n• Genuinely confirmed: because the cache scales linearly with batch size too, GQA\'s savings compound with concurrency -- the 512GB vs 2TB gap at batch_size=32 is often the difference between fitting on available hardware and not',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: GQA ya ನಿಖರವಾಗಿ-ರೇಖೀಯ KV-cache ಕಡಿತ ಒಂದೂ serving team ಗೆ ಒಂದೂ single inference request ಚಲಾಯಿಸುವ ಮೊದಲೂ config values ಇಂದ ಮಾತ್ರ memory ಅವಶ್ಯಕತೆಗಳನ್ನೂ ಊಹಿಸಲು ಅನುಮತಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cache batch size ಜೊತೆ ಸಹ ರೇಖೀಯವಾಗಿ scale ಆಗುವುದರಿಂದ, GQA ya savings concurrency ಜೊತೆ ಸಂಯುಕ್ತಗೊಳ್ಳುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a Hugging Face model card lists "num_key_value_heads": 8 alongside "num_attention_heads": 32, an engineer scanning that config.json for the first time can immediately conclude "this is GQA, KV cache will be roughly 4x smaller than MHA" without downloading a single weight file.',
      bodyKn: 'ಒಂದೂ Hugging Face model card "num_key_value_heads": 8 ಅನ್ನೂ "num_attention_heads": 32 ಜೊತೆ ಪಟ್ಟಿ ಮಾಡಿದಾಗ, ಆ config.json ಅನ್ನೂ ಮೊದಲ ಬಾರಿಗೆ ಸ್ಕ್ಯಾನ್ ಮಾಡುವ ಒಂದೂ engineer ತಕ್ಷಣ "ಇದೂ GQA, KV cache MHA ಗಿಂತ ಬಹುತೇಕ 4x ಚಿಕ್ಕದೂ" ಎಂದೂ ತೀರ್ಮಾನಿಸಬಹುದು.' } },

    { type: 'diagram', data: {
      titleEn: 'GQA: 4 Query Heads Sharing Each KV Head', titleKn: 'GQA: ಪ್ರತಿ KV Head ಅನ್ನೂ ಹಂಚಿಕೊಳ್ಳುವ 4 Query Heads',
      captionEn: 'With 32 Q heads and 8 KV heads, every group of 4 query heads reads from the same shared K/V head -- the KV cache only needs to store 8 heads\' worth of state per token, not 32.',
      captionKn: '32 Q heads ಮತ್ತೆ 8 KV heads ಜೊತೆ, 4 query heads ya ಪ್ರತಿ group ಅದೇ ಹಂಚಿದ K/V head ಇಂದ ಓದುತ್ತದೆ -- KV cache ಗೆ ಪ್ರತಿ token ಗೆ ಕೇವಲ 8 heads ya ಸ್ಥಿತಿಯನ್ನೂ ಮಾತ್ರ ಸಂಗ್ರಹಿಸಬೇಕು, 32 ಅಲ್ಲ.',
      svgCode: "<svg viewBox='0 0 700 180' xmlns='http://www.w3.org/2000/svg'><text x='20' y='20' fill='#e2e8f0' font-size='12'>Q1 Q2 Q3 Q4</text><rect x='20' y='30' width='140' height='24' fill='#38bdf8' opacity='0.5'/><text x='200' y='47' fill='#94a3b8' font-size='16'>&#8594;</text><rect x='240' y='30' width='100' height='24' fill='#f59e0b'/><text x='290' y='47' fill='#0f172a' font-size='11' text-anchor='middle'>KV head 1</text><text x='20' y='80' fill='#e2e8f0' font-size='12'>Q5 Q6 Q7 Q8</text><rect x='20' y='90' width='140' height='24' fill='#38bdf8' opacity='0.5'/><text x='200' y='107' fill='#94a3b8' font-size='16'>&#8594;</text><rect x='240' y='90' width='100' height='24' fill='#a855f7'/><text x='290' y='107' fill='#0f172a' font-size='11' text-anchor='middle'>KV head 2</text><text x='20' y='140' fill='#94a3b8' font-size='11'>... (8 groups total, sharing 8 KV heads instead of storing 32)</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: 'Genuinely demonstrated: assuming "fewer KV heads always means proportionally worse quality" is not something this lesson\'s memory arithmetic can confirm or deny -- MHA/GQA/MQA classification and KV-cache size are purely structural, computable facts from config.json, while actual output quality depends on training, which requires evaluation (Module 194), not head-count arithmetic alone.',
      bodyKn: 'ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: "ಕಡಿಮೆ KV heads ಯಾವಾಗಲೂ ಅನುಪಾತದಲ್ಲಿ ಕೆಟ್ಟ quality ಎಂದೂ ಅರ್ಥ" ಎಂದೂ ಊಹಿಸುವುದೂ ಈ lesson ya memory ಗಣಿತ ದೃಢಪಡಿಸಬಹುದಾದ ಅಥವಾ ನಿರಾಕರಿಸಬಹುದಾದ ವಿಷಯವಲ್ಲ -- MHA/GQA/MQA classification ಮತ್ತೆ KV-cache size ಕೇವಲ ರಚನಾತ್ಮಕ, config.json ಇಂದ ಲೆಕ್ಕಹಾಕಬಹುದಾದ ಸತ್ಯಗಳು, ನಿಜ output quality training ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ, evaluation (Module 194) ಬೇಕು, ಕೇವಲ head-count ಗಣಿತ ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This lesson confirmed how head-sharing changes memory, from the dense-attention side of the architecture. Part 3 genuinely builds the other major lever: Mixture of Experts, where a router selects only a few of many expert MLPs per token -- letting a model have far more total parameters than it actually activates for any single token.',
      bodyKn: 'ಈ lesson architecture ya dense-attention ಬದಿಯಿಂದ head-sharing memory ಅನ್ನೂ ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು. Part 3 ಇನ್ನೂ ಮುಖ್ಯ lever ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟುತ್ತದೆ: Mixture of Experts, ಒಂದೂ router ಪ್ರತಿ token ಗೆ ಹಲವಾರು expert MLPs ರಲ್ಲಿ ಕೆಲವನ್ನೂ ಮಾತ್ರ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did detect_attention_type() classify a config with 32 Q heads and 8 KV heads as?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 32 Q heads ಮತ್ತೆ 8 KV heads ಇರುವ ಒಂದೂ config ಅನ್ನೂ detect_attention_type() ಏನೂ ಆಗಿ ವರ್ಗೀಕರಿಸಿತು?',
        opts: ['MHA', 'MQA', 'GQA', 'MLA'], correct: 2,
        optsKn: ['MHA', 'MQA', 'GQA', 'MLA'] },
      { q: 'Genuinely confirmed: what was the ratio of full-MHA KV cache to GQA KV cache for the same Llama-3-8B-scale config?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ Llama-3-8B-scale config ಗೆ full-MHA KV cache ಮತ್ತೆ GQA KV cache ya ratio ಏನಾಗಿತ್ತು?',
        opts: ['1.0x (no difference)', '2.0x', '4.0x', '32x'], correct: 2,
        optsKn: ['1.0x (ಯಾವುದೇ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ)', '2.0x', '4.0x', '32x'] },
      { q: 'Genuinely confirmed: how did KV-cache memory change as batch size went from 1 to 8 to 32?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: batch size 1 ಇಂದ 8 ಇಂದ 32 ಗೆ ಹೋಗುತ್ತಾ KV-cache memory ಹೇಗೆ ಬದಲಾಯಿತು?',
        opts: ['It stayed constant', 'It scaled exactly linearly: 16GB -> 128GB -> 512GB', 'It decreased', 'It became undefined above batch_size=8'], correct: 1,
        optsKn: ['ಅದೂ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು', 'ಅದೂ ನಿಖರವಾಗಿ ರೇಖೀಯವಾಗಿ scale ಆಯಿತು: 16GB -> 128GB -> 512GB', 'ಅದೂ ಕಡಿಮೆಯಾಯಿತು', 'batch_size=8 ಗಿಂತ ಹೆಚ್ಚಿನಲ್ಲಿ ಅದೂ ಅನಿರ್ದಿಷ್ಟವಾಯಿತು'] },
      { q: 'What is the structural difference between GQA and MLA?', qKn: 'GQA ಮತ್ತೆ MLA ನಡುವಿನ ರಚನಾತ್ಮಕ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They are identical', 'GQA shares full-sized K/V heads across query-head groups; MLA compresses K/V into a shared low-rank latent representation', 'MLA only works with MoE models', 'GQA removes the KV cache entirely'], correct: 1,
        optsKn: ['ಅವೂ identical', 'GQA query-head groups ಆದ್ಯಂತ ಪೂರ್ಣ-size K/V heads ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ; MLA K/V ಅನ್ನೂ ಒಂದೂ ಹಂಚಿದ low-rank latent representation ಗೆ compress ಮಾಡುತ್ತದೆ', 'MLA ಕೇವಲ MoE models ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'GQA KV cache ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆಯುತ್ತದೆ'] },
      { q: 'Why do GQA and sliding-window attention compose rather than compete?', qKn: 'GQA ಮತ್ತೆ sliding-window attention ಏಕೆ ಸಂಯೋಜಿಸುತ್ತವೆ, ಸ್ಪರ್ಧಿಸುವುದಿಲ್ಲ?',
        opts: ['They solve the identical problem', 'GQA reduces memory per cached token, while sliding-window attention reduces how many past tokens are attended to at all -- different axes', 'Sliding-window attention replaces the KV cache entirely', 'GQA requires sliding-window attention to function'], correct: 1,
        optsKn: ['ಅವೂ ಅದೇ ಸಮಸ್ಯೆಯನ್ನೂ ಪರಿಹರಿಸುತ್ತವೆ', 'GQA ಪ್ರತಿ cached token ಗೆ memory ಅನ್ನೂ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, sliding-window attention ಎಷ್ಟೂ past tokens ಗೆ attend ಮಾಡಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನೂ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ -- ಭಿನ್ನ axes', 'Sliding-window attention KV cache ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ', 'GQA ಗೆ ಕೆಲಸ ಮಾಡಲು sliding-window attention ಬೇಕು'] },
    ] } },
  ],
};
