const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321427'; // Module 201: Native Sparse Attention (DeepSeek NSA)

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Native Sparse Attention — Part 1: Why NSA Exists and the Compressed Branch',
  titleKn: 'Native Sparse Attention — Part 1: NSA ಏಕೆ Existsಆಗುತ್ತದೆ ಮತ್ತೆ Compressed Branch',
  desc: 'Genuinely verify why dense attention becomes O(N^2)-expensive at long context, why pure sliding-window attention silently loses distant information, and why DeepSeek NSA instead uses three complementary branches (compressed, selected, sliding). Genuinely execute the supplied compress(K, l) function and confirm its worked example byte-for-byte.',
  descKn: 'Dense attention ದೀರ್ಘ context ನಲ್ಲಿ O(N^2)-ದುಬಾರಿ ಏಕೆ ಆಗುತ್ತದೆ, ಶುದ್ಧ sliding-window attention ದೂರದ ಮಾಹಿತಿಯನ್ನೂ ಮೌನವಾಗಿ ಏಕೆ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತೆ DeepSeek NSA ಬದಲಿಗೆ ಮೂರೂ ಪೂರಕ branches (compressed, selected, sliding) ಏಕೆ ಬಳಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ. Supplied compress(K, l) function ಅನ್ನೂ ನಿಜವಾಗಿ execute ಮಾಡಿ, ಅದೂ ya worked example ಅನ್ನೂ byte-for-byte ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why ordinary full attention becomes O(N^2) and genuinely confirm the 64,000-token blow-up number.',
    'Explain why pure sliding-window attention permanently discards distant information.',
    'State the three NSA branches and the distinct job each one performs.',
    'Understand compression block size l and derive N/l compressed blocks.',
    'Genuinely execute the supplied compress(K, l) function and confirm its exact worked example.',
    'Explain why mean pooling here is a pedagogical stand-in for a learned compressor.',
    'Understand why the compressed branch is also a routing mechanism, not just a speed trick.',
  ],
  objectivesKn: [
    'ಸಾಮಾನ್ಯ full attention O(N^2) ಏಕೆ ಆಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ ಮತ್ತೆ 64,000-token blow-up ಸಂಖ್ಯೆಯನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಶುದ್ಧ sliding-window attention ದೂರದ ಮಾಹಿತಿಯನ್ನೂ ಶಾಶ್ವತವಾಗಿ ಏಕೆ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಮೂರೂ NSA branches ಅನ್ನೂ ಮತ್ತೆ ಪ್ರತಿಯೊಂದೂ ನಿರ್ವಹಿಸುವ ಭಿನ್ನ ಕೆಲಸವನ್ನೂ ಹೇಳಿ.',
    'Compression block size l ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತೆ N/l compressed blocks ಪಡೆಯಿರಿ.',
    'Supplied compress(K, l) function ಅನ್ನೂ ನಿಜವಾಗಿ execute ಮಾಡಿ, ಅದೂ ya worked example ಅನ್ನೂ ನಿಖರವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಇಲ್ಲಿ mean pooling ಒಂದೂ learned compressor ಗೆ ಒಂದೂ ಶೈಕ್ಷಣಿಕ stand-in ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Compressed branch ಒಂದೂ speed trick ಮಾತ್ರ ಅಲ್ಲ, ಒಂದೂ routing mechanism ಸಹ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Native Sparse Attention — Part 1: Why NSA Exists and the Compressed Branch', textKn: 'Native Sparse Attention — Part 1: NSA ಏಕೆ ಮತ್ತೆ Compressed Branch', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Module 196 (long-context inference), Module 198 (open-model attention variants) · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Module 196, Module 198 · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Native Sparse Attention,DeepSeek NSA,Long Context,Part 1 of 3',
      pillsKn: 'Python,Native Sparse Attention,DeepSeek NSA,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: Dense Attention Is O(N²)', textKn: 'ಸಮಸ್ಯೆ: Dense Attention O(N²)', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Every Query Compares Against Every Key', headingKn: 'ಪ್ರತಿ Query ಪ್ರತಿ Key ಜೊತೆ ಹೋಲಿಸುತ್ತದೆ',
      bodyEn: 'In ordinary Transformer attention, every query token compares itself against essentially every key token. For a sequence of length N, the number of query-key interactions grows as N^2. That is manageable for short sequences, but at very long context lengths (64k, 128k tokens), attention becomes the dominant source of both compute and memory-movement cost during decode.',
      bodyKn: 'ಸಾಮಾನ್ಯ Transformer attention ನಲ್ಲಿ, ಪ್ರತಿ query token ಬಹುತೇಕ ಪ್ರತಿ key token ಜೊತೆ ತನ್ನನ್ನೂ ಹೋಲಿಸುತ್ತದೆ. N ಉದ್ದದ ಒಂದೂ sequence ಗೆ, query-key interactions ಸಂಖ್ಯೆ N^2 ಆಗಿ ಬೆಳೆಯುತ್ತದೆ. ಚಿಕ್ಕ sequences ಗೆ ಇದೂ ನಿರ್ವಹಿಸಬಹುದಾಗಿದೆ, ಆದರೆ ಬಹಳ ದೀರ್ಘ context lengths (64k, 128k tokens) ನಲ್ಲಿ, attention decode ಸಮಯದಲ್ಲಿ compute ಮತ್ತೆ memory-movement cost ಎರಡಕ್ಕೂ ಪ್ರಧಾನ ಮೂಲ ಆಗುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'dense_cost.py', headingEn: 'Genuinely computing the O(N²) blow-up', headingKn: 'O(N²) blow-up ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'Confirm the lesson\'s headline number: for N=64,000 tokens, dense non-causal attention implies over 4 billion query-key comparisons.',
      descKn: 'Lesson ya headline ಸಂಖ್ಯೆಯನ್ನೂ ದೃಢಪಡಿಸಿ: N=64,000 tokens ಗೆ, dense non-causal attention 4 billion ಗಿಂತ ಹೆಚ್ಚು query-key comparisons ಅರ್ಥೈಸುತ್ತದೆ.',
      code: "N = 64_000\ncomparisons = N ** 2\nprint(comparisons)" } },
    { type: 'output', data: { output: '4096000000' } },

    { type: 'heading', data: { textEn: 'Why Not Just Use Sliding-Window Attention?', textKn: 'Sliding-Window Attention ಮಾತ್ರ ಏಕೆ ಬಳಸಬಾರದೂ?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Cheap, But Permanently Blind Beyond the Window', headingKn: 'ಅಗ್ಗ, ಆದರೆ Window ಮೀರಿ ಶಾಶ್ವತವಾಗಿ ಕುರುಡು',
      bodyEn: 'A sliding window of size W cuts cost from O(N^2) to O(N*W) -- for W=512 that is dramatically cheaper. But if token 1 says "The password to the vault is ORANGE-17" and 60,000 tokens later a query asks "What was the vault password?", a 512-token window simply cannot see token 1. Pure local attention saves computation by permanently discarding distant information, not by intelligently ignoring irrelevant information.',
      bodyKn: 'W ಗಾತ್ರದ ಒಂದೂ sliding window cost ಅನ್ನೂ O(N^2) ಇಂದ O(N*W) ಗೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ -- W=512 ಗೆ ಇದೂ ಬಹಳ ಅಗ್ಗ. ಆದರೆ token 1 "The password to the vault is ORANGE-17" ಎಂದೂ ಹೇಳಿದರೆ ಮತ್ತೆ 60,000 tokens ನಂತರ ಒಂದೂ query "What was the vault password?" ಎಂದೂ ಕೇಳಿದರೆ, ಒಂದೂ 512-token window token 1 ಅನ್ನೂ ನೋಡಲಾಗುವುದಿಲ್ಲ. ಶುದ್ಧ local attention ದೂರದ ಮಾಹಿತಿಯನ್ನೂ ಶಾಶ್ವತವಾಗಿ ಬಿಟ್ಟುಬಿಡುವ ಮೂಲಕ compute ಉಳಿಸುತ್ತದೆ, ಅಸಂಬದ್ಧ ಮಾಹಿತಿಯನ್ನೂ ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ನಿರ್ಲಕ್ಷಿಸುವ ಮೂಲಕ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: "NSA's Core Idea: Three Branches, Not One Sparse Pattern", textKn: 'NSA ya ಮುಖ್ಯ ಕಲ್ಪನೆ: ಮೂರೂ Branches, ಒಂದೂ Sparse Pattern ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Compressed + Selected + Sliding, Combined per Query', headingKn: 'Compressed + Selected + Sliding, ಪ್ರತಿ Query ಗೆ ಸಂಯೋಜಿಸಲಾಗಿದೆ',
      bodyEn: 'Instead of choosing between global attention OR local attention, NSA gives every query three complementary views of the KV cache at once: a compressed branch (coarse global view -- "what is happening everywhere?"), a selected branch (fine-grained global view -- "which distant regions are actually important?"), and a sliding-window branch (fine-grained local view -- "what happened immediately around me?"). A learned gate then combines the three outputs per query.',
      bodyKn: 'Global attention ಅಥವಾ local attention ನಡುವೆ ಆಯ್ಕೆ ಮಾಡುವ ಬದಲು, NSA ಪ್ರತಿ query ಗೆ KV cache ya ಮೂರೂ ಪೂರಕ views ಒಟ್ಟಿಗೆ ನೀಡುತ್ತದೆ: ಒಂದೂ compressed branch (coarse global view -- "ಎಲ್ಲೆಡೆ ಏನೂ ನಡೆಯುತ್ತಿದೆ?"), ಒಂದೂ selected branch (fine-grained global view -- "ಯಾವ ದೂರದ ಪ್ರದೇಶಗಳೂ ನಿಜವಾಗಿ ಮುಖ್ಯ?"), ಮತ್ತೆ ಒಂದೂ sliding-window branch (fine-grained local view -- "ನನ್ನ ಸುತ್ತ ತಕ್ಷಣ ಏನೂ ಆಯಿತೂ?"). ಒಂದೂ learned gate ನಂತರ ಮೂರೂ outputs ಅನ್ನೂ ಪ್ರತಿ query ಗೆ ಸಂಯೋಜಿಸುತ್ತದೆ.' } },
    { type: 'diagram', data: {
      titleEn: 'The Three NSA Branches', titleKn: 'ಮೂರೂ NSA Branches',
      captionEn: 'A query is compared against a coarse compressed summary of the whole sequence, a set of top-k selected fine-grained blocks, and a local sliding window -- then a learned gate mixes the three outputs.',
      captionKn: 'ಒಂದೂ query ಅನ್ನೂ ಇಡೀ sequence ya ಒಂದೂ coarse compressed summary ಜೊತೆ, ಒಂದೂ top-k selected fine-grained blocks ಗುಂಪೂ ಜೊತೆ, ಮತ್ತೆ ಒಂದೂ local sliding window ಜೊತೆ ಹೋಲಿಸಲಾಗುತ್ತದೆ -- ನಂತರ ಒಂದೂ learned gate ಮೂರೂ outputs ಅನ್ನೂ ಬೆರೆಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 260' xmlns='http://www.w3.org/2000/svg'><rect x='300' y='10' width='100' height='36' rx='6' fill='#1e293b' stroke='#e2e8f0'/><text x='350' y='33' fill='#e2e8f0' font-size='13' text-anchor='middle'>Query q</text><line x1='320' y1='46' x2='120' y2='80' stroke='#64748b' stroke-width='2'/><line x1='350' y1='46' x2='350' y2='80' stroke='#64748b' stroke-width='2'/><line x1='380' y1='46' x2='580' y2='80' stroke='#64748b' stroke-width='2'/><rect x='40' y='80' width='160' height='50' rx='6' fill='#0f172a' stroke='#38bdf8'/><text x='120' y='100' fill='#38bdf8' font-size='12' text-anchor='middle'>COMPRESSED</text><text x='120' y='118' fill='#94a3b8' font-size='10' text-anchor='middle'>coarse / global</text><rect x='270' y='80' width='160' height='50' rx='6' fill='#0f172a' stroke='#a855f7'/><text x='350' y='100' fill='#a855f7' font-size='12' text-anchor='middle'>SELECTED</text><text x='350' y='118' fill='#94a3b8' font-size='10' text-anchor='middle'>fine / sparse global</text><rect x='500' y='80' width='160' height='50' rx='6' fill='#0f172a' stroke='#22c55e'/><text x='580' y='100' fill='#22c55e' font-size='12' text-anchor='middle'>SLIDING</text><text x='580' y='118' fill='#94a3b8' font-size='10' text-anchor='middle'>fine / local</text><line x1='120' y1='130' x2='120' y2='160' stroke='#64748b' stroke-width='2'/><line x1='350' y1='130' x2='350' y2='160' stroke='#64748b' stroke-width='2'/><line x1='580' y1='130' x2='580' y2='160' stroke='#64748b' stroke-width='2'/><text x='120' y='150' fill='#64748b' font-size='10' text-anchor='middle'>out_cmp</text><text x='350' y='150' fill='#64748b' font-size='10' text-anchor='middle'>out_sel</text><text x='580' y='150' fill='#64748b' font-size='10' text-anchor='middle'>out_win</text><line x1='120' y1='160' x2='330' y2='190' stroke='#64748b' stroke-width='2'/><line x1='350' y1='160' x2='350' y2='190' stroke='#64748b' stroke-width='2'/><line x1='580' y1='160' x2='370' y2='190' stroke='#64748b' stroke-width='2'/><rect x='260' y='190' width='180' height='36' rx='6' fill='#1e293b' stroke='#f59e0b'/><text x='350' y='213' fill='#f59e0b' font-size='12' text-anchor='middle'>learned gate</text><line x1='350' y1='226' x2='350' y2='250' stroke='#64748b' stroke-width='2' marker-end='url(#ahd2)'/><text x='350' y='250' fill='#e2e8f0' font-size='11' text-anchor='middle'>final output</text><defs><marker id='ahd2' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6' fill='#64748b'/></marker></defs></svg>" } },

    { type: 'heading', data: { textEn: 'Branch 1 — Compressed Branch: a Coarse Global View', textKn: 'Branch 1 — Compressed Branch: ಒಂದೂ Coarse Global View', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Grouping Tokens Into Blocks', headingKn: 'Tokens ಅನ್ನೂ Blocks ಗೆ ಗುಂಪೂಗೂಡಿಸುವುದೂ',
      bodyEn: 'Instead of keeping N individual tokens as separate objects for the global branch, group them into blocks of size l and summarize each block. N tokens therefore become ceil(N/l) compressed representations. For example, 64 tokens with l=8 become 8 block summaries -- each summary stands in for 8 original tokens.',
      bodyKn: 'Global branch ಗಾಗಿ N ಪ್ರತ್ಯೇಕ tokens ಗಳನ್ನೂ ಪ್ರತ್ಯೇಕ objects ಆಗಿ ಇಡುವ ಬದಲು, ಅವುಗಳನ್ನೂ l ಗಾತ್ರದ blocks ಗೆ ಗುಂಪೂಗೂಡಿಸಿ ಪ್ರತಿ block ಅನ್ನೂ summarize ಮಾಡಿ. N tokens ಆದ್ದರಿಂದ ceil(N/l) compressed representations ಆಗುತ್ತವೆ. ಉದಾಹರಣೆಗೆ, l=8 ಜೊತೆ 64 tokens 8 block summaries ಆಗುತ್ತವೆ -- ಪ್ರತಿ summary 8 ಮೂಲ tokens ಗೆ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Supplied compress(K, l) Implementation', textKn: 'Supplied compress(K, l) Implementation', level: 'H2' } },
    { type: 'code', data: {
      filename: 'compress.py', headingEn: "The lesson's complete original Step-1 function", headingKn: 'Lesson ya ಸಂಪೂರ್ಣ original Step-1 function',
      descEn: 'This is the exact function supplied by the source lesson -- ceiling-divide the sequence into blocks, then mean-pool each block dimension by dimension.',
      descKn: 'ಇದೂ source lesson supply ಮಾಡಿದ ನಿಖರ function -- sequence ಅನ್ನೂ blocks ಗೆ ceiling-divide ಮಾಡಿ, ನಂತರ ಪ್ರತಿ block ಅನ್ನೂ dimension by dimension mean-pool ಮಾಡಿ.',
      code: "def compress(K, l):\n    n = len(K)\n    n_blocks = (n + l - 1) // l\n    out = []\n\n    for b in range(n_blocks):\n        start, end = b * l, min((b + 1) * l, n)\n        block = K[start:end]\n\n        summary = [\n            sum(row[d] for row in block) / len(block)\n            for d in range(len(K[0]))\n        ]\n\n        out.append(summary)\n\n    return out" } },
    { type: 'code', data: {
      filename: 'compress_worked_example.py', headingEn: "Genuinely running the lesson's worked example (5 keys, l=2)", headingKn: "Lesson ya worked example ಅನ್ನೂ ನಿಜವಾಗಿ ಓಡಿಸುವುದೂ (5 keys, l=2)",
      descEn: 'Run compress() on the exact 5-key, 2-dimensional example from the source and compare against the claimed output.',
      descKn: 'Source ya ನಿಖರ 5-key, 2-dimensional example ಮೇಲೆ compress() ಓಡಿಸಿ, claim ಮಾಡಿದ output ಜೊತೆ ಹೋಲಿಸಿ.',
      code: "K = [\n    [1.0, 2.0],\n    [3.0, 4.0],\n    [5.0, 6.0],\n    [7.0, 8.0],\n    [9.0, 10.0],\n]\n\nresult = compress(K, l=2)\nprint(result)\nprint(result == [[2.0, 3.0], [6.0, 7.0], [9.0, 10.0]])" } },
    { type: 'output', data: { output: '[[2.0, 3.0], [6.0, 7.0], [9.0, 10.0]]\nTrue' } },

    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 5 Keys Become 3 Compressed Blocks', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5 Keys 3 Compressed Blocks ಆಗುತ್ತವೆ',
      bodyEn: 'The execution above matches the source exactly: block 0 (keys [1,2] and [3,4]) mean-pools to [2.0, 3.0]; block 1 (keys [5,6] and [7,8]) mean-pools to [6.0, 7.0]; block 2 (the leftover single key [9,10]) has nothing to average with, so it stays [9.0, 10.0]. This last case is exactly why the code uses min((b+1)*l, n) for the block end -- to correctly handle a final block that is smaller than l.',
      bodyKn: 'ಮೇಲಿನ execution source ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: block 0 (keys [1,2] ಮತ್ತೆ [3,4]) [2.0, 3.0] ಗೆ mean-pool ಆಗುತ್ತದೆ; block 1 (keys [5,6] ಮತ್ತೆ [7,8]) [6.0, 7.0] ಗೆ mean-pool ಆಗುತ್ತದೆ; block 2 (ಉಳಿದ ಒಂಟಿ key [9,10]) ಜೊತೆ average ಮಾಡಲು ಏನೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ಇದೂ [9.0, 10.0] ಆಗಿ ಉಳಿಯುತ್ತದೆ. ಈ ಕೊನೆಯ case ಗಾಗಿಯೇ code block end ಗೆ min((b+1)*l, n) ಬಳಸುತ್ತದೆ -- l ಗಿಂತ ಚಿಕ್ಕದಾದ ಒಂದೂ ಕೊನೆಯ block ಅನ್ನೂ ಸರಿಯಾಗಿ ನಿರ್ವಹಿಸಲು.' } },

    { type: 'heading', data: { textEn: 'Ceiling Division Without math.ceil', textKn: 'math.ceil ಇಲ್ಲದೆ Ceiling Division', level: 'H2' } },
    { type: 'code', data: {
      filename: 'ceiling_division_check.py', headingEn: 'Genuinely confirming (n + l - 1) // l against math.ceil', headingKn: '(n + l - 1) // l ಅನ್ನೂ math.ceil ಎದುರೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ',
      descEn: "Verify the integer-arithmetic ceiling trick used in compress() matches math.ceil(n/l), and print the exact block boundaries for n=10, l=4.",
      descKn: 'compress() ನಲ್ಲಿ ಬಳಸಿದ integer-arithmetic ceiling trick math.ceil(n/l) ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, n=10, l=4 ಗೆ ನಿಖರ block boundaries ಮುದ್ರಿಸಿ.',
      code: "import math\n\nn, l = 10, 4\nn_blocks = (n + l - 1) // l\nprint('n_blocks:', n_blocks, ' math.ceil match:', n_blocks == math.ceil(n / l))\n\nfor b in range(n_blocks):\n    start, end = b * l, min((b + 1) * l, n)\n    print(f'block {b}: tokens [{start}:{end}) -> {end - start} tokens')" } },
    { type: 'output', data: { output: 'n_blocks: 3  math.ceil match: True\nblock 0: tokens [0:4) -> 4 tokens\nblock 1: tokens [4:8) -> 4 tokens\nblock 2: tokens [8:10) -> 2 tokens' } },

    { type: 'heading', data: { textEn: 'Why Mean Pooling Is a Pedagogical Stand-In', textKn: 'Mean Pooling ಒಂದೂ ಶೈಕ್ಷಣಿಕ Stand-In ಏಕೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Real NSA Uses a Learned Compressor', headingKn: 'ನಿಜ NSA ಒಂದೂ Learned Compressor ಬಳಸುತ್ತದೆ',
      bodyEn: 'The source explicitly frames summary = mean(block) as a pedagogical baseline, not a faithful reproduction of the learned compressor used by real NSA. Conceptually the real version is summary_b = f_theta(K_block) for a learned f_theta, which can decide which information within a block deserves preservation. Mean pooling cannot make that choice -- it averages everything uniformly, so a distinctive detail (like an exact number inside a block of otherwise generic text) can get diluted into the average and become hard to recover from the compressed representation alone.',
      bodyKn: 'Source ಸ್ಪಷ್ಟವಾಗಿ summary = mean(block) ಅನ್ನೂ ಒಂದೂ ಶೈಕ್ಷಣಿಕ baseline ಎಂದೂ ಚೌಕಟ್ಟುಗೊಳಿಸುತ್ತದೆ, ನಿಜ NSA ಬಳಸುವ learned compressor ya ನಿಷ್ಠಾವಂತ ಪುನರುತ್ಪಾದನೆ ಅಲ್ಲ. ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ನಿಜ version summary_b = f_theta(K_block) ಒಂದೂ learned f_theta ಗೆ, ಇದೂ ಒಂದೂ block ಒಳಗಿನ ಯಾವ ಮಾಹಿತಿ ಸಂರಕ್ಷಣೆ ಅರ್ಹ ಎಂದೂ ನಿರ್ಧರಿಸಬಹುದು. Mean pooling ಆ ಆಯ್ಕೆ ಮಾಡಲಾಗುವುದಿಲ್ಲ -- ಇದೂ ಎಲ್ಲವನ್ನೂ ಏಕರೂಪವಾಗಿ ಸರಾಸರಿ ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಒಂದೂ ವಿಶಿಷ್ಟ ವಿವರ (ಸಾಮಾನ್ಯ ಪಠ್ಯದ ಒಂದೂ block ಒಳಗೆ ಒಂದೂ ನಿಖರ ಸಂಖ್ಯೆಯಂತೆ) ಸರಾಸರಿಯಲ್ಲಿ ದುರ್ಬಲಗೊಂಡು ಕೇವಲ compressed representation ಇಂದ ಮರುಪಡೆಯಲು ಕಷ್ಟವಾಗಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'The Compressed Branch Has a Second Job: Routing', textKn: 'Compressed Branch ಗೆ ಎರಡನೇ ಕೆಲಸವಿದೆ: Routing', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '"Where Should I Look?" Before "What Exactly Is There?"', headingKn: '"ಎಲ್ಲಿ ನೋಡಬೇಕೂ?" ಮೊದಲೂ "ಅಲ್ಲಿ ನಿಖರ ಏನೂ ಇದೆ?" ಗಿಂತ',
      bodyEn: 'Because the compressed branch summarizes the entire sequence cheaply, its attention scores over the compressed blocks can double as a relevance ranking: "Block 27 out of 1000 looks important." Part 2 of this lesson genuinely implements that exact routing step -- taking the compressed-branch attention scores and using them to pick the top-k blocks whose ORIGINAL, uncompressed tokens then get reopened for fine-grained selected attention. So compression is not only a speed trick; it is the first stage of a two-stage search-then-retrieve pipeline.',
      bodyKn: 'Compressed branch ಇಡೀ sequence ಅನ್ನೂ ಅಗ್ಗವಾಗಿ summarize ಮಾಡುವುದರಿಂದ, compressed blocks ಮೇಲಿನ ಅದೂ ya attention scores ಒಂದೂ relevance ranking ಆಗಿಯೂ ಕೆಲಸ ಮಾಡಬಹುದು: "1000 ರಲ್ಲಿ Block 27 ಮುಖ್ಯ ಕಾಣುತ್ತದೆ." ಈ lesson ya Part 2 ಆ ನಿಖರ routing step ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡುತ್ತದೆ -- compressed-branch attention scores ತೆಗೆದುಕೊಂಡು, top-k blocks ಆಯ್ಕೆ ಮಾಡಲು ಅವುಗಳನ್ನೂ ಬಳಸುತ್ತದೆ, ಆ blocks ya ಮೂಲ, uncompressed tokens ನಂತರ fine-grained selected attention ಗಾಗಿ ಮತ್ತೆ ತೆರೆಯಲಾಗುತ್ತದೆ. ಆದ್ದರಿಂದ compression ಕೇವಲ ಒಂದೂ speed trick ಅಲ್ಲ; ಇದೂ ಒಂದೂ ಎರಡೂ-ಹಂತದ search-then-retrieve pipeline ya ಮೊದಲ ಹಂತ.' } },

    { type: 'concept', data: {
      headingEn: 'Analogy: Searching a Huge Library', headingKn: 'ಸಾದೃಶ್ಯ: ಒಂದೂ ಬೃಹತ್ Library ಹುಡುಕುವುದೂ',
      bodyEn: 'Full attention is like reading every page of every book whenever you have a question -- accurate, but far too slow at scale. Sliding-window-only attention is like reading only the books sitting closest to you -- fast, but you will never find an answer that lives in a book shelved far away. NSA reads a one-line summary of every book (compressed branch), decides from those summaries which few books are worth pulling off the shelf and reading in full (selected branch), and also keeps whatever books you already have open on your desk (sliding branch).',
      bodyKn: 'Full attention ಒಂದೂ ಪ್ರಶ್ನೆ ಇದ್ದಾಗಲೆಲ್ಲಾ ಪ್ರತಿ ಪುಸ್ತಕದ ಪ್ರತಿ ಪುಟ ಓದಿದಂತೆ -- ನಿಖರ, ಆದರೆ ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ ಬಹಳ ನಿಧಾನ. Sliding-window-only attention ನಿಮ್ಮ ಹತ್ತಿರ ಇರುವ ಪುಸ್ತಕಗಳನ್ನೂ ಮಾತ್ರ ಓದಿದಂತೆ -- ವೇಗ, ಆದರೆ ದೂರದ ಶೆಲ್ಫ್‌ನಲ್ಲಿ ಇರುವ ಒಂದೂ ಪುಸ್ತಕದಲ್ಲಿನ ಉತ್ತರ ನಿಮಗೆ ಎಂದಿಗೂ ಸಿಗುವುದಿಲ್ಲ. NSA ಪ್ರತಿ ಪುಸ್ತಕದ ಒಂದೂ-ಸಾಲಿನ summary ಓದುತ್ತದೆ (compressed branch), ಆ summaries ಇಂದ ಯಾವ ಕೆಲವೂ ಪುಸ್ತಕಗಳು ಶೆಲ್ಫ್‌ ಇಂದ ತೆಗೆದು ಪೂರ್ಣ ಓದಲು ಯೋಗ್ಯ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ (selected branch), ಮತ್ತೆ ನಿಮ್ಮ ಮೇಜಿನ ಮೇಲೆ ಈಗಾಗಲೇ ತೆರೆದಿರುವ ಪುಸ್ತಕಗಳನ್ನೂ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ (sliding branch).' } },

    { type: 'table', data: {
      captionEn: 'The Three Branches at a Glance', captionKn: 'ಮೂರೂ Branches ಒಂದೂ ನೋಟದಲ್ಲಿ',
      rows: "Branch|Resolution|Range|Main purpose\nCompressed|Coarse|Global|Understand the entire history cheaply, AND provide routing scores\nSelected|Fine|Sparse global|Recover exact details from important distant blocks\nSliding|Fine|Local|Preserve nearby language structure (syntax, coreference, recent state)" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• NSA: Native Sparse Attention -- a three-branch attention architecture designed to be trained sparse from the start, not pruned after dense training\n• Compression block size (l): the number of original tokens averaged into one compressed summary\n• Compressed branch: attention over ceil(N/l) block summaries, giving a coarse global view AND relevance scores\n• N/l compressed blocks: dense N keys become approximately N/l coarse keys, e.g. 64 tokens with l=8 becomes 8 summaries\n• Routing signal: the same compressed-attention scores that produce out_cmp are reused to rank blocks for the selected branch (covered in Part 2)',
      bodyKn: '• NSA: Native Sparse Attention -- ಆರಂಭದಿಂದಲೇ sparse ಆಗಿ train ಆಗಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಮೂರೂ-branch attention architecture, dense training ನಂತರ prune ಮಾಡಿದ್ದೂ ಅಲ್ಲ\n• Compression block size (l): ಒಂದೂ compressed summary ಗೆ ಸರಾಸರಿ ಮಾಡಿದ ಮೂಲ tokens ಸಂಖ್ಯೆ\n• Compressed branch: ceil(N/l) block summaries ಮೇಲಿನ attention, ಒಂದೂ coarse global view ಮತ್ತೆ relevance scores ಎರಡನ್ನೂ ನೀಡುತ್ತದೆ\n• N/l compressed blocks: dense N keys ಸುಮಾರು N/l coarse keys ಆಗುತ್ತವೆ, ಉದಾ. l=8 ಜೊತೆ 64 tokens 8 summaries ಆಗುತ್ತವೆ\n• Routing signal: out_cmp ಉತ್ಪಾದಿಸುವ ಅದೇ compressed-attention scores selected branch ಗಾಗಿ blocks ಶ್ರೇಣೀಕರಿಸಲು ಮರುಬಳಕೆ ಮಾಡಲಾಗುತ್ತದೆ (Part 2 ನಲ್ಲಿ ಒಳಗೊಂಡಿದೆ)' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Dense attention genuinely costs O(N^2) -- confirmed 64,000^2 = 4,096,000,000 comparisons for a 64k-token sequence.\n• Pure sliding-window attention is cheap (O(N*W)) but permanently loses any information outside the window, regardless of relevance.\n• NSA solves this with three simultaneous branches -- compressed (coarse global), selected (fine sparse global), and sliding (fine local) -- combined by a learned per-query gate.\n• The supplied compress(K, l) function was genuinely executed and its exact worked example (5 keys, l=2 -> [[2,3],[6,7],[9,10]]) was confirmed byte-for-byte, including the min(end, n) handling of a final undersized block.\n• Mean pooling here is explicitly a pedagogical stand-in for a learned compressor -- real NSA can choose what to preserve; averaging cannot.\n• The compressed branch is not just cheaper attention -- its scores double as the routing signal that decides which blocks the selected branch reopens at full resolution, which Part 2 implements directly.',
      bodyKn: '• Dense attention ನಿಜವಾಗಿ O(N^2) ವೆಚ್ಚ ಮಾಡುತ್ತದೆ -- 64k-token sequence ಗೆ 64,000^2 = 4,096,000,000 comparisons ದೃಢಪಡಿಸಲಾಗಿದೆ.\n• ಶುದ್ಧ sliding-window attention ಅಗ್ಗ (O(N*W)) ಆದರೆ relevance ಲೆಕ್ಕಿಸದೆ window ಹೊರಗಿನ ಯಾವುದೇ ಮಾಹಿತಿಯನ್ನೂ ಶಾಶ್ವತವಾಗಿ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ.\n• NSA ಇದನ್ನೂ ಮೂರೂ ಏಕಕಾಲಿಕ branches ಜೊತೆ ಪರಿಹರಿಸುತ್ತದೆ -- compressed (coarse global), selected (fine sparse global), ಮತ್ತೆ sliding (fine local) -- ಒಂದೂ learned per-query gate ಇಂದ ಸಂಯೋಜಿಸಲಾಗಿದೆ.\n• Supplied compress(K, l) function ಅನ್ನೂ ನಿಜವಾಗಿ execute ಮಾಡಲಾಯಿತೂ ಮತ್ತೆ ಅದೂ ya ನಿಖರ worked example (5 keys, l=2 -> [[2,3],[6,7],[9,10]]) byte-for-byte ದೃಢಪಡಿಸಲಾಯಿತೂ, ಒಂದೂ ಕೊನೆಯ ಚಿಕ್ಕ block ya min(end, n) ನಿರ್ವಹಣೆ ಸೇರಿದಂತೆ.\n• ಇಲ್ಲಿ mean pooling ಸ್ಪಷ್ಟವಾಗಿ ಒಂದೂ learned compressor ಗೆ ಒಂದೂ ಶೈಕ್ಷಣಿಕ stand-in -- ನಿಜ NSA ಏನೂ ಸಂರಕ್ಷಿಸಬೇಕೂ ಎಂದೂ ಆಯ್ಕೆ ಮಾಡಬಹುದು; ಸರಾಸರಿ ಮಾಡುವಿಕೆ ಮಾಡಲಾಗುವುದಿಲ್ಲ.\n• Compressed branch ಕೇವಲ ಅಗ್ಗದ attention ಅಲ್ಲ -- ಅದೂ ya scores selected branch ಯಾವ blocks ಅನ್ನೂ full resolution ನಲ್ಲಿ ಮತ್ತೆ ತೆರೆಯುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸುವ routing signal ಆಗಿಯೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಇದೂ Part 2 ನೇರವಾಗಿ implement ಮಾಡುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what is 64,000^2, the headline dense-attention comparison count for a 64k-token sequence?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 64k-token sequence ಗೆ headline dense-attention comparison count, 64,000^2 ಏನೂ?',
        opts: ['64,000', '4,096,000', '4,096,000,000', '640,000,000'], correct: 2,
        optsKn: ['64,000', '4,096,000', '4,096,000,000', '640,000,000'] },
      { q: 'Why does pure sliding-window attention fail on the "vault password" example?',
        qKn: '"vault password" example ನಲ್ಲಿ ಶುದ್ಧ sliding-window attention ಏಕೆ ವಿಫಲವಾಗುತ್ತದೆ?',
        opts: ['It is too slow to compute', 'The window permanently cannot see tokens outside its fixed range, regardless of relevance', 'It uses the wrong softmax scale', 'It only works with l=1'], correct: 1,
        optsKn: ['ಇದೂ compute ಮಾಡಲು ಬಹಳ ನಿಧಾನ', 'Relevance ಲೆಕ್ಕಿಸದೆ, window ಅದೂ ya ಸ್ಥಿರ range ಹೊರಗಿನ tokens ಅನ್ನೂ ಶಾಶ್ವತವಾಗಿ ನೋಡಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ ತಪ್ಪೂ softmax scale ಬಳಸುತ್ತದೆ', 'ಇದೂ ಕೇವಲ l=1 ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: for the 5-key example K=[[1,2],[3,4],[5,6],[7,8],[9,10]] with l=2, what did compress(K, 2) return?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: K=[[1,2],[3,4],[5,6],[7,8],[9,10]], l=2 ಇರುವ 5-key example ಗೆ, compress(K, 2) ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['[[1,2],[3,4],[5,6],[7,8],[9,10]] unchanged', '[[2.0,3.0],[6.0,7.0],[9.0,10.0]]', '[[5.0,6.0]]', '[[2.0,3.0],[6.0,7.0]] -- 2 blocks only'], correct: 1,
        optsKn: ['[[1,2],[3,4],[5,6],[7,8],[9,10]] ಬದಲಾಗದೆ', '[[2.0,3.0],[6.0,7.0],[9.0,10.0]]', '[[5.0,6.0]]', '[[2.0,3.0],[6.0,7.0]] -- ಕೇವಲ 2 blocks'] },
      { q: 'Why does the code use min((b+1)*l, n) instead of just (b+1)*l for the block end?',
        qKn: 'Block end ಗಾಗಿ ಕೇವಲ (b+1)*l ಬದಲು code min((b+1)*l, n) ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['It makes the code run faster', 'To correctly handle a final block that has fewer than l tokens, without indexing past the sequence', 'It is required by Python syntax', 'It converts the block to a NumPy array'], correct: 1,
        optsKn: ['ಇದೂ code ಅನ್ನೂ ವೇಗವಾಗಿ ಓಡಿಸುತ್ತದೆ', 'l ಗಿಂತ ಕಡಿಮೆ tokens ಇರುವ ಒಂದೂ ಕೊನೆಯ block ಅನ್ನೂ sequence ಮೀರಿ index ಮಾಡದೆ ಸರಿಯಾಗಿ ನಿರ್ವಹಿಸಲು', 'ಇದೂ Python syntax ಇಂದ ಅಗತ್ಯ', 'ಇದೂ block ಅನ್ನೂ ಒಂದೂ NumPy array ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
      { q: "Besides producing a coarse global output, what second job does the compressed branch's attention score serve in NSA?",
        qKn: 'ಒಂದೂ coarse global output ಉತ್ಪಾದಿಸುವುದೂ ಬಿಟ್ಟೂ, NSA ನಲ್ಲಿ compressed branch ya attention score ಯಾವ ಎರಡನೇ ಕೆಲಸ ನಿರ್ವಹಿಸುತ್ತದೆ?',
        opts: ['It replaces the tokenizer', 'It becomes the routing signal used to pick top-k blocks for the selected branch', 'It sets the learning rate', 'It determines the sliding-window size w'], correct: 1,
        optsKn: ['ಇದೂ tokenizer ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ selected branch ಗಾಗಿ top-k blocks ಆಯ್ಕೆ ಮಾಡಲು ಬಳಸುವ routing signal ಆಗುತ್ತದೆ', 'ಇದೂ learning rate ನಿಗದಿಪಡಿಸುತ್ತದೆ', 'ಇದೂ sliding-window size w ನಿರ್ಧರಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
