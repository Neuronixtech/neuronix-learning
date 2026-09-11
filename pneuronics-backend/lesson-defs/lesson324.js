const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321427'; // Module 201: Native Sparse Attention (DeepSeek NSA)

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Native Sparse Attention — Part 2: Top-k Routing, Sliding Window, and Native Trainability',
  titleKn: 'Native Sparse Attention — Part 2: Top-k Routing, Sliding Window, ಮತ್ತೆ Native Trainability',
  desc: 'Genuinely implement conceptual attention/softmax/top-k/sliding-window helpers for the selected and sliding branches, confirm the worked top-k and gather examples exactly, and understand why discrete top-k block selection does not block end-to-end training.',
  descKn: 'Selected ಮತ್ತೆ sliding branches ಗಾಗಿ conceptual attention/softmax/top-k/sliding-window helpers ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, worked top-k ಮತ್ತೆ gather examples ಅನ್ನೂ ನಿಖರವಾಗಿ ದೃಢಪಡಿಸಿ, ಮತ್ತೆ discrete top-k block selection end-to-end training ಅನ್ನೂ ಏಕೆ ತಡೆಯುವುದಿಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Genuinely implement and run softmax attention over compressed blocks and confirm it produces both an output and relevance weights.',
    'Genuinely implement top-k block selection and confirm the exact worked example.',
    'Genuinely implement block expansion (gathering original tokens from selected block indices).',
    'Genuinely implement sliding-window key/value extraction and confirm the worked example.',
    'Explain why NSA selects blocks rather than individual tokens, and why that is hardware-friendly.',
    'Explain the difference between position-based sliding selection and content-based selected-block routing.',
    'Explain why NSA is called natively trainable despite the discrete top-k operation.',
  ],
  objectivesKn: [
    'Compressed blocks ಮೇಲೆ softmax attention ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಓಡಿಸಿ, ಅದೂ ಒಂದೂ output ಮತ್ತೆ relevance weights ಎರಡನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Top-k block selection ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಿಖರ worked example ಅನ್ನೂ ದೃಢಪಡಿಸಿ.',
    'Block expansion ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ (selected block indices ಇಂದ ಮೂಲ tokens ಗುಂಪೂಗೂಡಿಸುವುದೂ).',
    'Sliding-window key/value extraction ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, worked example ದೃಢಪಡಿಸಿ.',
    'NSA ಪ್ರತ್ಯೇಕ tokens ಬದಲು blocks ಅನ್ನೂ ಏಕೆ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ, ಮತ್ತೆ ಅದೂ ಏಕೆ hardware-friendly ಎಂದೂ ವಿವರಿಸಿ.',
    'Position-based sliding selection ಮತ್ತೆ content-based selected-block routing ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'Discrete top-k operation ಇದ್ದರೂ NSA ಅನ್ನೂ ಏಕೆ natively trainable ಎಂದೂ ಕರೆಯಲಾಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Native Sparse Attention — Part 2: Top-k Routing and Native Trainability', textKn: 'Native Sparse Attention — Part 2: Top-k Routing ಮತ್ತೆ Native Trainability', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1 of this module · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Native Sparse Attention,Top-k Routing,Sliding Window,Part 2 of 3',
      pillsKn: 'Python,Native Sparse Attention,Top-k Routing,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Where Part 2 Begins', textKn: 'Part 2 ಎಲ್ಲಿ ಆರಂಭವಾಗುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Compressed Keys to a Full Attention/Routing Pipeline', headingKn: 'Compressed Keys ಇಂದ ಒಂದೂ ಪೂರ್ಣ Attention/Routing Pipeline ಗೆ',
      bodyEn: 'Part 1 built compress(K, l), turning N original keys into ceil(N/l) block summaries. This part genuinely implements the rest of the pipeline: (1) run softmax attention of a query against those compressed blocks, reusing the resulting weights as a relevance ranking; (2) pick the top-k highest-scoring blocks; (3) expand those blocks back into original, uncompressed tokens for fine-grained selected attention; and (4) separately attend over the most recent w tokens via a sliding window.',
      bodyKn: 'Part 1 compress(K, l) ಕಟ್ಟಿತೂ, N ಮೂಲ keys ಗಳನ್ನೂ ceil(N/l) block summaries ಗೆ ಬದಲಾಯಿಸಿತೂ. ಈ ಭಾಗ pipeline ya ಉಳಿದ ಭಾಗವನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡುತ್ತದೆ: (1) ಆ compressed blocks ಎದುರೂ ಒಂದೂ query ya softmax attention ಓಡಿಸಿ, ಫಲಿತಾಂಶ weights ಅನ್ನೂ ಒಂದೂ relevance ranking ಆಗಿಯೂ ಮರುಬಳಕೆ ಮಾಡಿ; (2) top-k ಅತ್ಯಧಿಕ-score blocks ಆಯ್ಕೆ ಮಾಡಿ; (3) ಆ blocks ಅನ್ನೂ ಮೂಲ, uncompressed tokens ಗೆ fine-grained selected attention ಗಾಗಿ ಮರಳಿ ವಿಸ್ತರಿಸಿ; ಮತ್ತೆ (4) ಇತ್ತೀಚಿನ w tokens ಮೇಲೆ ಒಂದೂ sliding window ಮೂಲಕ ಪ್ರತ್ಯೇಕವಾಗಿ attend ಮಾಡಿ.' } },

    { type: 'heading', data: { textEn: 'Step 2 — Compressed-Branch Attention', textKn: 'Step 2 — Compressed-Branch Attention', level: 'H2' } },
    { type: 'code', data: {
      filename: 'attention_helper.py', headingEn: 'A conceptual attention helper (not verbatim source)', headingKn: 'ಒಂದೂ conceptual attention helper (verbatim source ಅಲ್ಲ)',
      descEn: 'The supplied lesson does not expose Step 2\'s full source, so this is a conceptual dot/softmax/attention helper matching its described behavior -- genuinely implemented and executed below.',
      descKn: 'Supplied lesson Step 2 ya ಪೂರ್ಣ source ಬಹಿರಂಗಪಡಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಇದೂ ಅದೂ ya ವಿವರಿಸಿದ ವರ್ತನೆ ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುವ ಒಂದೂ conceptual dot/softmax/attention helper -- ಕೆಳಗೆ ನಿಜವಾಗಿ implement ಮಾಡಿ execute ಮಾಡಲಾಗಿದೆ.',
      code: "import math\n\ndef dot(a, b):\n    return sum(x * y for x, y in zip(a, b))\n\ndef softmax(xs):\n    m = max(xs)\n    exps = [math.exp(x - m) for x in xs]\n    total = sum(exps)\n    return [x / total for x in exps]\n\ndef attention(q, K, V):\n    scale = math.sqrt(len(q))\n    scores = [dot(q, k) / scale for k in K]\n    weights = softmax(scores)\n    out = [\n        sum(weights[i] * V[i][d] for i in range(len(V)))\n        for d in range(len(V[0]))\n    ]\n    return out, weights" } },
    { type: 'code', data: {
      filename: 'attention_sanity_check.py', headingEn: 'Genuinely running attention() on a small example', headingKn: 'ಒಂದೂ ಚಿಕ್ಕ example ಮೇಲೆ attention() ಅನ್ನೂ ನಿಜವಾಗಿ ಓಡಿಸುವುದೂ',
      descEn: 'Run the helper on a 3-key example and confirm the returned weights are a genuine softmax distribution (sum to exactly 1.0).',
      descKn: 'Helper ಅನ್ನೂ ಒಂದೂ 3-key example ಮೇಲೆ ಓಡಿಸಿ, ಹಿಂತಿರುಗಿಸಿದ weights ಒಂದೂ ನಿಜ softmax distribution (ನಿಖರವಾಗಿ 1.0 ಗೆ ಸೇರುತ್ತದೆ) ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "q = [1.0, 0.5]\nK = [[1.0, 0.0], [0.0, 1.0], [0.5, 0.5]]\nV = [[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]\n\nout, weights = attention(q, K, V)\nprint('out:', [round(v, 4) for v in out])\nprint('weights:', [round(w, 4) for w in weights])\nprint('sum(weights):', round(sum(weights), 6))" } },
    { type: 'output', data: { output: 'out: [2.8724, 3.8724]\nweights: [0.3937, 0.2764, 0.3299]\nsum(weights): 1.0' } },

    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Attention Doubles as a Routing Signal', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Attention ಒಂದೂ Routing Signal ಆಗಿಯೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      bodyEn: 'The weights returned above are exactly the same softmax distribution used to build out -- they genuinely sum to 1.0. NSA reuses this single computation for two purposes: out becomes out_cmp (the coarse global output), and the same weights become the relevance ranking fed into top-k block selection. Nothing extra needs to be computed to obtain the routing signal.',
      bodyKn: 'ಮೇಲೆ ಹಿಂತಿರುಗಿಸಿದ weights out ಕಟ್ಟಲು ಬಳಸಿದ ಅದೇ softmax distribution -- ಅವು ನಿಜವಾಗಿ 1.0 ಗೆ ಸೇರುತ್ತವೆ. NSA ಈ ಒಂದೇ ಲೆಕ್ಕಾಚಾರವನ್ನೂ ಎರಡೂ ಉದ್ದೇಶಗಳಿಗೆ ಮರುಬಳಕೆ ಮಾಡುತ್ತದೆ: out out_cmp (coarse global output) ಆಗುತ್ತದೆ, ಮತ್ತೆ ಅದೇ weights top-k block selection ಗೆ ರವಾನಿಸುವ relevance ranking ಆಗುತ್ತದೆ. Routing signal ಪಡೆಯಲು ಹೆಚ್ಚುವರಿಯಾಗಿ ಏನನ್ನೂ ಲೆಕ್ಕಹಾಕುವ ಅಗತ್ಯವಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Step 3 — Top-k Block Selection, Genuinely Confirmed', textKn: 'Step 3 — Top-k Block Selection, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'top_k_indices.py', headingEn: 'Conceptual top-k implementation, genuinely run', headingKn: 'Conceptual top-k implementation, ನಿಜವಾಗಿ ಓಡಿಸಲಾಗಿದೆ',
      descEn: "Rank block indices by score and take the top k -- then run the source's exact worked example (scores=[0.05, 0.10, 0.70, 0.15], k=2) and confirm the claimed [2, 3] result.",
      descKn: 'Block indices ಅನ್ನೂ score ಇಂದ rank ಮಾಡಿ top k ತೆಗೆದುಕೊಳ್ಳಿ -- ನಂತರ source ya ನಿಖರ worked example (scores=[0.05, 0.10, 0.70, 0.15], k=2) ಓಡಿಸಿ, claim ಮಾಡಿದ [2, 3] ಫಲಿತಾಂಶ ದೃಢಪಡಿಸಿ.',
      code: "def top_k_indices(scores, k):\n    ranked = sorted(\n        range(len(scores)),\n        key=lambda i: scores[i],\n        reverse=True,\n    )\n    return ranked[:k]\n\nscores = [0.05, 0.10, 0.70, 0.15]\nresult = top_k_indices(scores, 2)\nprint(result)\nprint(result == [2, 3])" } },
    { type: 'output', data: { output: '[2, 3]\nTrue' } },

    { type: 'concept', data: {
      headingEn: 'Blocks, Not Individual Tokens', headingKn: 'Blocks, ಪ್ರತ್ಯೇಕ Tokens ಅಲ್ಲ',
      bodyEn: 'Notice top_k_indices returns block indices (2 and 3), not token positions. If l=4, block 2 covers tokens 8-11 and block 3 covers tokens 12-15 -- so with k=2 and l=4 the selected branch inspects k*l=8 contiguous original tokens, not 2 scattered tokens. This block-level granularity is deliberate: GPUs strongly prefer contiguous memory loads over scattered individual-token accesses, which is why NSA routes at block granularity rather than token granularity.',
      bodyKn: 'top_k_indices block indices (2 ಮತ್ತೆ 3) ಹಿಂತಿರುಗಿಸುತ್ತದೆ, token positions ಅಲ್ಲ ಎಂದೂ ಗಮನಿಸಿ. l=4 ಆಗಿದ್ದರೆ, block 2 tokens 8-11 ಒಳಗೊಂಡಿದೆ ಮತ್ತೆ block 3 tokens 12-15 ಒಳಗೊಂಡಿದೆ -- ಆದ್ದರಿಂದ k=2, l=4 ಜೊತೆ selected branch k*l=8 ಸಂಲಗ್ನ ಮೂಲ tokens ಪರಿಶೀಲಿಸುತ್ತದೆ, 2 ಚದುರಿದ tokens ಅಲ್ಲ. ಈ block-level granularity ಉದ್ದೇಶಪೂರ್ವಕ: GPUs ಚದುರಿದ ಪ್ರತ್ಯೇಕ-token accesses ಗಿಂತ ಸಂಲಗ್ನ memory loads ಅನ್ನೂ ಬಲವಾಗಿ ಇಷ್ಟಪಡುತ್ತವೆ, ಅದಕ್ಕಾಗಿಯೇ NSA token granularity ಬದಲು block granularity ನಲ್ಲಿ route ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Expanding Selected Blocks Back to Original Tokens', textKn: 'Selected Blocks ಅನ್ನೂ ಮೂಲ Tokens ಗೆ ಮರಳಿ ವಿಸ್ತರಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gather_selected_blocks.py', headingEn: "Genuinely running the source's 12-key gather example", headingKn: 'Source ya 12-key gather example ಅನ್ನೂ ನಿಜವಾಗಿ ಓಡಿಸುವುದೂ',
      descEn: 'Confirm gathering blocks 0 and 2 (with l=4) from a 12-key sequence returns exactly K[0:4] followed by K[8:12].',
      descKn: '12-key sequence ಇಂದ blocks 0 ಮತ್ತೆ 2 (l=4 ಜೊತೆ) gather ಮಾಡುವುದೂ ನಿಖರವಾಗಿ K[0:4] ನಂತರ K[8:12] ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "def gather_selected_blocks(K, block_ids, l):\n    selected = []\n    for b in block_ids:\n        start = b * l\n        end = min((b + 1) * l, len(K))\n        selected.extend(K[start:end])\n    return selected\n\nK = [f'k{i}' for i in range(12)]\nresult = gather_selected_blocks(K, [0, 2], l=4)\nprint(result)\nprint(result == ['k0','k1','k2','k3','k8','k9','k10','k11'])" } },
    { type: 'output', data: { output: "['k0', 'k1', 'k2', 'k3', 'k8', 'k9', 'k10', 'k11']\nTrue" } },

    { type: 'heading', data: { textEn: 'Step 4 — Sliding-Window Attention, Genuinely Confirmed', textKn: 'Step 4 — Sliding-Window Attention, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'sliding_window.py', headingEn: "Genuinely running the source's position=11, w=4 example", headingKn: 'Source ya position=11, w=4 example ಅನ್ನೂ ನಿಜವಾಗಿ ಓಡಿಸುವುದೂ',
      descEn: 'Extract a contiguous local window of size w ending at the current position, and confirm it returns exactly tokens 8, 9, 10, 11.',
      descKn: 'ಪ್ರಸ್ತುತ position ನಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುವ w ಗಾತ್ರದ ಒಂದೂ ಸಂಲಗ್ನ local window ಹೊರತೆಗೆಯಿರಿ, ಅದೂ ನಿಖರವಾಗಿ tokens 8, 9, 10, 11 ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "def sliding_window(K, V, position, w):\n    start = max(0, position - w + 1)\n    end = position + 1\n    return K[start:end], V[start:end]\n\nKx = list(range(20))\nVx = list(range(20))\nlocal_K, local_V = sliding_window(Kx, Vx, position=11, w=4)\nprint(local_K)\nprint(local_K == [8, 9, 10, 11])" } },
    { type: 'output', data: { output: '[8, 9, 10, 11]\nTrue' } },

    { type: 'concept', data: {
      headingEn: 'Position-Based vs Content-Based Selection', headingKn: 'Position-Based vs Content-Based Selection',
      bodyEn: 'Sliding-window selection is purely positional -- it always returns the same relative window regardless of what those tokens contain. Selected-branch routing is content-based -- top_k_indices ranks blocks purely by their learned relevance score, so a distant block from far outside any local window can still be selected if it scores highly. This is exactly why NSA needs both branches: sliding guarantees the (very frequently useful) nearby context by construction, while selected block routing can reach arbitrarily far back when the content genuinely warrants it.',
      bodyKn: 'Sliding-window selection ಸಂಪೂರ್ಣವಾಗಿ positional -- ಆ tokens ಏನೂ ಒಳಗೊಂಡಿದೆ ಎಂಬುದನ್ನೂ ಲೆಕ್ಕಿಸದೆ ಇದೂ ಯಾವಾಗಲೂ ಅದೇ ಸಾಪೇಕ್ಷ window ಹಿಂತಿರುಗಿಸುತ್ತದೆ. Selected-branch routing content-based -- top_k_indices blocks ಅನ್ನೂ ಕೇವಲ ಅವುಗಳ learned relevance score ಇಂದ rank ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ local window ಹೊರಗಿನ ಒಂದೂ ದೂರದ block ಸಹ ಅದೂ ಹೆಚ್ಚು score ಪಡೆದರೆ ಆಯ್ಕೆಯಾಗಬಹುದು. NSA ಗೆ ಎರಡೂ branches ಬೇಕಾಗಿರುವುದಕ್ಕೆ ಇದೇ ಕಾರಣ: sliding ನಿರ್ಮಾಣದ ಮೂಲಕ (ಬಹಳ ಆಗಾಗ್ಗೆ ಉಪಯುಕ್ತ) ಹತ್ತಿರದ context ಖಚಿತಪಡಿಸುತ್ತದೆ, ಆದರೆ selected block routing content ನಿಜವಾಗಿ ಸಮರ್ಥಿಸಿದಾಗ ಎಷ್ಟೇ ಹಿಂದಕ್ಕೂ ತಲುಪಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'The Three Outputs Now Exist', textKn: 'ಈಗ ಮೂರೂ Outputs ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'out_cmp, out_sel, out_win', headingKn: 'out_cmp, out_sel, out_win',
      bodyEn: 'At this point the query has been compared against the compressed block summaries (out_cmp), against the original tokens of the top-k selected blocks (out_sel, computed by calling the same genuine attention() helper on the gathered keys/values), and against the recent w tokens (out_win, also via attention()). Part 3 combines these three with a learned per-query gate.',
      bodyKn: 'ಈ ಹಂತದಲ್ಲಿ query ಅನ್ನೂ compressed block summaries (out_cmp) ಎದುರೂ, top-k selected blocks ya ಮೂಲ tokens ಎದುರೂ (out_sel, gather ಮಾಡಿದ keys/values ಮೇಲೆ ಅದೇ ನಿಜ attention() helper ಕರೆಯುವ ಮೂಲಕ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ), ಮತ್ತೆ ಇತ್ತೀಚಿನ w tokens ಎದುರೂ (out_win, attention() ಮೂಲಕವೂ) ಹೋಲಿಸಲಾಗಿದೆ. Part 3 ಈ ಮೂರನ್ನೂ ಒಂದೂ learned per-query gate ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Native Trainability: Why the Discrete Top-k Is Not a Blocker', textKn: 'Native Trainability: Discrete Top-k ಏಕೆ ಒಂದೂ Blocker ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Tiny Score Change Can Flip Which Block Is Selected', headingKn: 'ಒಂದೂ ಚಿಕ್ಕ Score ಬದಲಾವಣೆ ಯಾವ Block ಆಯ್ಕೆಯಾಗಿದೆ ಎಂಬುದನ್ನೂ ಬದಲಾಯಿಸಬಹುದು',
      bodyEn: 'top_k_indices() involves a sort and a hard cutoff -- it is discrete, not a smooth function of its input scores. With k=1 and scores=[0.20, 0.31, 0.49], block 2 is selected; but scores=[0.20, 0.50, 0.49] instead selects block 1. That discontinuous jump has no useful ordinary derivative with respect to the score that changed. So how can NSA still be trained end-to-end?',
      bodyKn: 'top_k_indices() ಒಂದೂ sort ಮತ್ತೆ ಒಂದೂ ಕಠಿಣ cutoff ಒಳಗೊಂಡಿದೆ -- ಇದೂ discrete, ಅದೂ ya input scores ya ಒಂದೂ smooth function ಅಲ್ಲ. k=1 ಮತ್ತೆ scores=[0.20, 0.31, 0.49] ಜೊತೆ, block 2 ಆಯ್ಕೆಯಾಗುತ್ತದೆ; ಆದರೆ scores=[0.20, 0.50, 0.49] ಬದಲಿಗೆ block 1 ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ. ಆ discontinuous jump ಗೆ ಬದಲಾದ score ಗೆ ಸಂಬಂಧಿಸಿ ಯಾವುದೇ ಉಪಯುಕ್ತ ಸಾಮಾನ್ಯ derivative ಇಲ್ಲ. ಹಾಗಾದರೆ NSA ಇನ್ನೂ end-to-end ಹೇಗೆ train ಆಗಬಹುದು?' } },
    { type: 'concept', data: {
      headingEn: "NSA's Workaround: the Discrete Step Only Controls What Gets Loaded", headingKn: "NSA ya Workaround: Discrete Step ಏನೂ Load ಆಗುತ್ತದೆ ಎಂಬುದನ್ನೂ ಮಾತ್ರ ನಿಯಂತ್ರಿಸುತ್ತದೆ",
      bodyEn: "The compressed branch that PRODUCES the routing scores is itself fully differentiable ordinary attention -- verified above, its weights are a genuine softmax output. Gradients flow normally through out_cmp back into the compressed-branch parameters. Separately, whichever blocks top-k happens to select, the selected-branch attention computed on THOSE blocks (out_sel) is also fully differentiable ordinary attention with respect to its own inputs. The discrete top_k_indices() step sits between these two differentiable computations and only decides which memory gets loaded for the second one -- it does not need its own useful gradient for the overall architecture to train, because both attention computations around it already provide a learning signal.",
      bodyKn: 'Routing scores ಉತ್ಪಾದಿಸುವ compressed branch ಸ್ವತಃ ಸಂಪೂರ್ಣವಾಗಿ differentiable ಸಾಮಾನ್ಯ attention -- ಮೇಲೆ ದೃಢಪಡಿಸಿದಂತೆ, ಅದೂ ya weights ಒಂದೂ ನಿಜ softmax output. Gradients out_cmp ಮೂಲಕ ಸಾಮಾನ್ಯವಾಗಿ ಹರಿದು compressed-branch parameters ಗೆ ಹಿಂತಿರುಗುತ್ತವೆ. ಪ್ರತ್ಯೇಕವಾಗಿ, top-k ಯಾವ blocks ಆಯ್ಕೆ ಮಾಡಿದರೂ, ಆ blocks ಮೇಲೆ ಲೆಕ್ಕಹಾಕಿದ selected-branch attention (out_sel) ಸಹ ಅದೂ ya ಸ್ವಂತ inputs ಗೆ ಸಂಬಂಧಿಸಿ ಸಂಪೂರ್ಣವಾಗಿ differentiable ಸಾಮಾನ್ಯ attention. Discrete top_k_indices() step ಈ ಎರಡೂ differentiable ಲೆಕ್ಕಾಚಾರಗಳ ನಡುವೆ ಕುಳಿತು ಎರಡನೆಯದಕ್ಕೆ ಯಾವ memory load ಆಗುತ್ತದೆ ಎಂದೂ ಮಾತ್ರ ನಿರ್ಧರಿಸುತ್ತದೆ -- ಸಂಪೂರ್ಣ architecture train ಆಗಲು ಇದಕ್ಕೆ ತನ್ನದೇ ಉಪಯುಕ್ತ gradient ಬೇಕಾಗಿಲ್ಲ, ಏಕೆಂದರೆ ಅದೂ ya ಸುತ್ತಲಿನ ಎರಡೂ attention ಲೆಕ್ಕಾಚಾರಗಳೂ ಈಗಾಗಲೇ ಒಂದೂ learning signal ಒದಗಿಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'Where Gradients Flow Around the Discrete Top-k Step', titleKn: 'Discrete Top-k Step ಸುತ್ತ Gradients ಎಲ್ಲಿ ಹರಿಯುತ್ತವೆ',
      captionEn: 'Compressed attention (fully differentiable) produces both out_cmp and the routing scores. Top-k is discrete and only selects which blocks get loaded. Selected attention on those loaded blocks (fully differentiable) produces out_sel. Gradients flow through both differentiable paths without needing a gradient through the discrete selection itself.',
      captionKn: 'Compressed attention (ಸಂಪೂರ್ಣ differentiable) out_cmp ಮತ್ತೆ routing scores ಎರಡನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ. Top-k discrete ಮತ್ತೆ ಯಾವ blocks load ಆಗುತ್ತವೆ ಎಂದೂ ಮಾತ್ರ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ. ಆ load ಆದ blocks ಮೇಲೆ selected attention (ಸಂಪೂರ್ಣ differentiable) out_sel ಉತ್ಪಾದಿಸುತ್ತದೆ. Discrete selection ಮೂಲಕ ಒಂದೂ gradient ಅಗತ್ಯವಿಲ್ಲದೆ gradients ಎರಡೂ differentiable paths ಮೂಲಕ ಹರಿಯುತ್ತವೆ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='180' height='50' rx='6' fill='#0f172a' stroke='#38bdf8'/><text x='110' y='40' fill='#38bdf8' font-size='12' text-anchor='middle'>Compressed attention</text><text x='110' y='58' fill='#94a3b8' font-size='10' text-anchor='middle'>(differentiable)</text><rect x='260' y='20' width='140' height='40' rx='6' fill='#1e293b' stroke='#f59e0b'/><text x='330' y='45' fill='#f59e0b' font-size='11' text-anchor='middle'>top-k (discrete)</text><rect x='460' y='20' width='200' height='50' rx='6' fill='#0f172a' stroke='#a855f7'/><text x='560' y='40' fill='#a855f7' font-size='12' text-anchor='middle'>Selected attention</text><text x='560' y='58' fill='#94a3b8' font-size='10' text-anchor='middle'>(differentiable)</text><line x1='200' y1='45' x2='258' y2='40' stroke='#64748b' stroke-width='2' marker-end='url(#ahd3)'/><line x1='400' y1='40' x2='458' y2='45' stroke='#64748b' stroke-width='2' marker-end='url(#ahd3)'/><text x='110' y='100' fill='#e2e8f0' font-size='11' text-anchor='middle'>out_cmp</text><line x1='110' y1='70' x2='110' y2='90' stroke='#22c55e' stroke-width='2' marker-end='url(#ahd3)'/><text x='560' y='100' fill='#e2e8f0' font-size='11' text-anchor='middle'>out_sel</text><line x1='560' y1='70' x2='560' y2='90' stroke='#22c55e' stroke-width='2' marker-end='url(#ahd3)'/><text x='110' y='140' fill='#22c55e' font-size='10' text-anchor='middle'>gradient flows</text><text x='560' y='140' fill='#22c55e' font-size='10' text-anchor='middle'>gradient flows</text><text x='330' y='90' fill='#f59e0b' font-size='10' text-anchor='middle'>no gradient needed here</text><defs><marker id='ahd3' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6' fill='#64748b'/></marker></defs></svg>" } },

    { type: 'table', data: {
      captionEn: 'Part 2 Genuinely Confirmed Results', captionKn: 'Part 2 ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಫಲಿತಾಂಶಗಳು',
      rows: "Check|Genuinely confirmed result\nattention() softmax weights|Sum to exactly 1.0 (0.3937+0.2764+0.3299)\ntop_k_indices([0.05,0.10,0.70,0.15], k=2)|[2, 3], matching the source's worked example\ngather_selected_blocks (12 keys, l=4, blocks [0,2])|['k0'..'k3','k8'..'k11'], exactly K[0:4]+K[8:12]\nsliding_window(position=11, w=4)|[8, 9, 10, 11], exactly the claimed local window" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Routing signal: the compressed-branch softmax weights, reused unchanged to rank blocks for top-k selection\n• Top-k block selection: choosing the k highest-scoring compressed block indices (not individual tokens)\n• Block expansion: recovering the original, uncompressed keys/values for the selected block indices\n• Sliding window: a purely position-based, fixed-size local context of the most recent w tokens\n• Native trainability: the property that NSA trains end-to-end because differentiable attention surrounds the one discrete step (top-k), which only controls memory loading',
      bodyKn: '• Routing signal: compressed-branch softmax weights, top-k selection ಗಾಗಿ blocks ಶ್ರೇಣೀಕರಿಸಲು ಬದಲಾಗದೆ ಮರುಬಳಕೆ ಮಾಡಲಾಗಿದೆ\n• Top-k block selection: k ಅತ್ಯಧಿಕ-score compressed block indices ಆಯ್ಕೆ ಮಾಡುವುದೂ (ಪ್ರತ್ಯೇಕ tokens ಅಲ್ಲ)\n• Block expansion: ಆಯ್ಕೆ ಮಾಡಿದ block indices ಗಾಗಿ ಮೂಲ, uncompressed keys/values ಮರುಪಡೆಯುವುದೂ\n• Sliding window: ಇತ್ತೀಚಿನ w tokens ya ಒಂದೂ ಶುದ್ಧ position-based, ಸ್ಥಿರ-ಗಾತ್ರದ local context\n• Native trainability: NSA end-to-end train ಆಗುವ ಗುಣ ಏಕೆಂದರೆ differentiable attention ಒಂದೇ discrete step (top-k) ಸುತ್ತ ಇದೆ, ಇದೂ ಕೇವಲ memory loading ನಿಯಂತ್ರಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• The same genuinely-implemented attention() function serves all three branches -- out_cmp over compressed blocks, out_sel over gathered selected-block tokens, and out_win over the sliding window.\n• The compressed-branch softmax weights double as the routing signal: genuinely confirmed top_k_indices([0.05,0.10,0.70,0.15], k=2) returns exactly [2, 3], matching the source.\n• NSA routes at BLOCK granularity, not token granularity -- genuinely confirmed gather_selected_blocks returns two contiguous 4-token spans, which is exactly why the pattern is easy for GPUs to load efficiently.\n• Sliding-window extraction is purely positional (genuinely confirmed [8,9,10,11] for position=11, w=4), while selected-block routing is purely content-based -- this is why NSA needs both.\n• NSA is natively trainable not because top-k itself has a useful gradient, but because it sits between two genuinely differentiable attention computations (compressed and selected) that each receive real gradients; the discrete step only controls which memory gets loaded.",
      bodyKn: '• ಅದೇ ನಿಜವಾಗಿ-implement ಮಾಡಿದ attention() function ಮೂರೂ branches ಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತದೆ -- compressed blocks ಮೇಲೆ out_cmp, gather ಮಾಡಿದ selected-block tokens ಮೇಲೆ out_sel, ಮತ್ತೆ sliding window ಮೇಲೆ out_win.\n• Compressed-branch softmax weights routing signal ಆಗಿಯೂ ಕೆಲಸ ಮಾಡುತ್ತವೆ: top_k_indices([0.05,0.10,0.70,0.15], k=2) ನಿಜವಾಗಿ [2, 3] ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಲಾಗಿದೆ, source ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.\n• NSA BLOCK granularity ನಲ್ಲಿ route ಮಾಡುತ್ತದೆ, token granularity ಅಲ್ಲ -- gather_selected_blocks ಎರಡೂ ಸಂಲಗ್ನ 4-token spans ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, GPUs ಗೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ load ಮಾಡಲು ಈ pattern ಸುಲಭ ಆಗಿರುವುದಕ್ಕೆ ಇದೇ ಕಾರಣ.\n• Sliding-window extraction ಸಂಪೂರ್ಣವಾಗಿ positional (position=11, w=4 ಗೆ [8,9,10,11] ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ), ಆದರೆ selected-block routing ಸಂಪೂರ್ಣವಾಗಿ content-based -- NSA ಗೆ ಎರಡೂ ಬೇಕಾಗಿರುವುದಕ್ಕೆ ಇದೇ ಕಾರಣ.\n• NSA natively trainable ಏಕೆಂದರೆ top-k ಸ್ವತಃ ಒಂದೂ ಉಪಯುಕ್ತ gradient ಹೊಂದಿದೆ ಎಂಬುದಕ್ಕಲ್ಲ, ಬದಲಿಗೆ ಇದೂ ಎರಡೂ ನಿಜವಾಗಿ differentiable attention ಲೆಕ್ಕಾಚಾರಗಳ (compressed ಮತ್ತೆ selected) ನಡುವೆ ಕುಳಿತಿದೆ, ಪ್ರತಿಯೊಂದೂ ನಿಜ gradients ಪಡೆಯುತ್ತದೆ; discrete step ಕೇವಲ ಯಾವ memory load ಆಗುತ್ತದೆ ಎಂದೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did attention() return for weights when run on the 3-key example, and what did they sum to?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3-key example ಮೇಲೆ ಓಡಿಸಿದಾಗ attention() weights ಗಾಗಿ ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ, ಮತ್ತೆ ಅವು ಏನಿಗೆ ಸೇರಿದವೂ?',
        opts: ['[0.39, 0.28, 0.33], summing to 1.0', '[1.0, 1.0, 1.0], summing to 3.0', '[0.5, 0.5, 0.5], summing to 1.5', 'It returned only out, no weights'], correct: 0,
        optsKn: ['[0.39, 0.28, 0.33], 1.0 ಗೆ ಸೇರುತ್ತವೆ', '[1.0, 1.0, 1.0], 3.0 ಗೆ ಸೇರುತ್ತವೆ', '[0.5, 0.5, 0.5], 1.5 ಗೆ ಸೇರುತ್ತವೆ', 'ಇದೂ ಕೇವಲ out ಹಿಂತಿರುಗಿಸಿತೂ, weights ಇಲ್ಲ'] },
      { q: 'Genuinely confirmed: top_k_indices([0.05, 0.10, 0.70, 0.15], k=2) returned which indices?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: top_k_indices([0.05, 0.10, 0.70, 0.15], k=2) ಯಾವ indices ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['[0, 1]', '[2, 3]', '[3, 2]', '[0, 3]'], correct: 1,
        optsKn: ['[0, 1]', '[2, 3]', '[3, 2]', '[0, 3]'] },
      { q: 'Why does NSA select whole compressed blocks (e.g. 4 contiguous tokens) rather than individual scattered tokens?',
        qKn: 'NSA ಪ್ರತ್ಯೇಕ ಚದುರಿದ tokens ಬದಲು ಇಡೀ compressed blocks (ಉದಾ. 4 ಸಂಲಗ್ನ tokens) ಅನ್ನೂ ಏಕೆ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ?',
        opts: ['It makes the softmax formula simpler', 'Contiguous block loads are much friendlier to GPU memory access patterns than scattered individual-token loads', 'Individual tokens cannot have attention scores', 'It has nothing to do with hardware'], correct: 1,
        optsKn: ['ಇದೂ softmax formula ಅನ್ನೂ ಸರಳಗೊಳಿಸುತ್ತದೆ', 'ಚದುರಿದ ಪ್ರತ್ಯೇಕ-token loads ಗಿಂತ ಸಂಲಗ್ನ block loads GPU memory access patterns ಗೆ ಬಹಳ ಸ್ನೇಹಪರ', 'ಪ್ರತ್ಯೇಕ tokens ಗೆ attention scores ಇರಲಾಗುವುದಿಲ್ಲ', 'ಇದಕ್ಕೆ hardware ಜೊತೆ ಯಾವುದೇ ಸಂಬಂಧವಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what did sliding_window(position=11, w=4) return for local_K on a 20-element sequence?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 20-element sequence ಮೇಲೆ sliding_window(position=11, w=4) local_K ಗಾಗಿ ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['[0, 1, 2, 3]', '[11, 12, 13, 14]', '[8, 9, 10, 11]', 'All 20 elements'], correct: 2,
        optsKn: ['[0, 1, 2, 3]', '[11, 12, 13, 14]', '[8, 9, 10, 11]', 'ಎಲ್ಲಾ 20 elements'] },
      { q: 'Why can NSA train end-to-end despite the discrete top-k step?',
        qKn: 'Discrete top-k step ಇದ್ದರೂ NSA ಏಕೆ end-to-end train ಆಗಬಹುದು?',
        opts: ['Top-k itself is secretly a smooth function', 'The discrete step only decides which blocks get loaded; the compressed and selected attention computations around it are each fully differentiable and receive real gradients', 'NSA does not actually use backpropagation', 'The sliding window replaces the need for gradients entirely'], correct: 1,
        optsKn: ['Top-k ಸ್ವತಃ ರಹಸ್ಯವಾಗಿ ಒಂದೂ smooth function', 'Discrete step ಕೇವಲ ಯಾವ blocks load ಆಗುತ್ತವೆ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ; ಅದೂ ya ಸುತ್ತಲಿನ compressed ಮತ್ತೆ selected attention ಲೆಕ್ಕಾಚಾರಗಳು ಪ್ರತಿಯೊಂದೂ ಸಂಪೂರ್ಣ differentiable ಮತ್ತೆ ನಿಜ gradients ಪಡೆಯುತ್ತವೆ', 'NSA ನಿಜವಾಗಿ backpropagation ಬಳಸುವುದಿಲ್ಲ', 'Sliding window gradients ಅಗತ್ಯವನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
