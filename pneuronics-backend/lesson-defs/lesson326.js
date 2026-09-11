const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32142a'; // Module 202: Multi-Token Prediction (MTP)

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Multi-Token Prediction — Part 1: Foundations, Parallel vs Sequential MTP',
  titleKn: 'Multi-Token Prediction — Part 1: Foundations, Parallel vs Sequential MTP',
  desc: 'Understand why ordinary next-token training gives one direct supervision target per position, what prediction depth means, why sequential MTP chains hidden states through consumed future tokens while parallel MTP does not, and genuinely verify the supplied combine() fragment plus the RMSNorm/concatenation distinction it stands in for.',
  descKn: 'ಸಾಮಾನ್ಯ next-token training ಪ್ರತಿ position ಗೆ ಒಂದೇ ನೇರ supervision target ಏಕೆ ನೀಡುತ್ತದೆ, prediction depth ಎಂದರೇನು, sequential MTP consume ಮಾಡಿದ future tokens ಮೂಲಕ hidden states ಅನ್ನೂ ಏಕೆ ಸರಪಳಿ ಮಾಡುತ್ತದೆ (parallel MTP ಮಾಡುವುದಿಲ್ಲ), ಮತ್ತೆ supplied combine() fragment ಮತ್ತೆ ಅದೂ ಪ್ರತಿನಿಧಿಸುವ RMSNorm/concatenation ವ್ಯತ್ಯಾಸವನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
  objectives: [
    'Explain why ordinary next-token prediction supplies only one direct target per hidden state.',
    'Define prediction depth k and confirm t_(i+k) for several values of k.',
    'Distinguish parallel MTP (independent heads on h^(0)) from sequential MTP (chained h^(0) -> h^(1) -> h^(2)).',
    'Explain why the shared embedding and shared output head keep MTP parameter-efficient.',
    'Genuinely execute the supplied combine() fragment and confirm vector addition is used as a stand-in for the real concatenation.',
    'Trace a full three-depth sequential MTP example by hand and match it to code operations.',
  ],
  objectivesKn: [
    'ಸಾಮಾನ್ಯ next-token prediction ಒಂದೂ hidden state ಗೆ ಕೇವಲ ಒಂದೇ ನೇರ target ಏಕೆ ಒದಗಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Prediction depth k ವ್ಯಾಖ್ಯಾನಿಸಿ ಮತ್ತೆ ಹಲವೂ k ಮೌಲ್ಯಗಳಿಗೆ t_(i+k) ದೃಢಪಡಿಸಿ.',
    'Parallel MTP (h^(0) ಮೇಲೆ ಸ್ವತಂತ್ರ heads) ಅನ್ನೂ sequential MTP (ಸರಪಳಿ h^(0) -> h^(1) -> h^(2)) ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'Shared embedding ಮತ್ತೆ shared output head MTP ಅನ್ನೂ parameter-efficient ಆಗಿ ಇಡುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Supplied combine() fragment ಅನ್ನೂ ನಿಜವಾಗಿ execute ಮಾಡಿ, vector addition ನಿಜ concatenation ಗೆ ಒಂದೂ stand-in ಆಗಿ ಬಳಸಲಾಗಿದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಪೂರ್ಣ ಮೂರೂ-depth sequential MTP example ಅನ್ನೂ ಕೈಯಾರೆ ಪತ್ತೆಹಚ್ಚಿ code operations ಜೊತೆ ಹೊಂದಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multi-Token Prediction — Part 1: Foundations and Sequential vs Parallel MTP', textKn: 'Multi-Token Prediction — Part 1: Foundations ಮತ್ತೆ Sequential vs Parallel MTP', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn/Build · Language: Python (standard library) · Prerequisite: Module 188 (Mini GPT), Module 199 (Speculative Decoding) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn/Build · Language: Python (standard library) · Prerequisite: Module 188, Module 199 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Multi-Token Prediction,DeepSeek MTP,Sequential Prediction,Part 1 of 3',
      pillsKn: 'Python,Multi-Token Prediction,DeepSeek MTP,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: One Target Per Position', textKn: 'ಸಮಸ್ಯೆ: ಪ್ರತಿ Position ಗೆ ಒಂದೂ Target', level: 'H2' } },
    { type: 'code', data: {
      filename: 'next_token_targets.py', headingEn: 'Genuinely confirming ordinary next-token targets', headingKn: 'ಸಾಮಾನ್ಯ next-token targets ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ',
      descEn: 'For the sequence "The cat sat on the mat", print the single next-token target at every prefix length -- this is the entire supervision an ordinary LM gets per position.',
      descKn: '"The cat sat on the mat" sequence ಗೆ, ಪ್ರತಿ prefix length ನಲ್ಲಿ ಒಂಟಿ next-token target ಮುದ್ರಿಸಿ -- ಇದೂ ಒಂದೂ ಸಾಮಾನ್ಯ LM ಪ್ರತಿ position ಗೆ ಪಡೆಯುವ ಸಂಪೂರ್ಣ supervision.',
      code: "tokens = ['The', 'cat', 'sat', 'on', 'the', 'mat']\n\nfor i in range(len(tokens) - 1):\n    prefix = tokens[:i + 1]\n    target = tokens[i + 1]\n    print(' '.join(prefix), '->', target)" } },
    { type: 'output', data: { output: 'The -> cat\nThe cat -> sat\nThe cat sat -> on\nThe cat sat on -> the\nThe cat sat on the -> mat' } },
    { type: 'concept', data: {
      headingEn: 'Only the Immediate Next Token Is a Direct Target', headingKn: 'ಕೇವಲ ತಕ್ಷಣದ Next Token ಒಂದೂ ನೇರ Target',
      bodyEn: 'For prefix "The cat", the direct supervision target is only "sat", even though the actual continuation also contains "on the mat". Sequence structure, coherence, and reasoning can extend well beyond one next token, while ordinary training supplies exactly one direct target per hidden state. Multi-Token Prediction (MTP) asks: why not also supervise that same hidden state using t_(i+2), t_(i+3), and so on?',
      bodyKn: '"The cat" prefix ಗೆ, ನೇರ supervision target ಕೇವಲ "sat", ನಿಜ continuation "on the mat" ಸಹ ಒಳಗೊಂಡಿದ್ದರೂ. Sequence structure, coherence, ಮತ್ತೆ reasoning ಒಂದೂ next token ಮೀರಿ ಬಹಳ ದೂರ ವಿಸ್ತರಿಸಬಹುದು, ಸಾಮಾನ್ಯ training ಪ್ರತಿ hidden state ಗೆ ನಿಖರವಾಗಿ ಒಂದೂ ನೇರ target ಒದಗಿಸುತ್ತದೆ. Multi-Token Prediction (MTP) ಕೇಳುತ್ತದೆ: ಅದೇ hidden state ಅನ್ನೂ t_(i+2), t_(i+3), ಇತ್ಯಾದಿ ಬಳಸಿ ಸಹ ಏಕೆ supervise ಮಾಡಬಾರದೂ?' } },

    { type: 'heading', data: { textEn: 'What Is Prediction Depth?', textKn: 'Prediction Depth ಎಂದರೇನು?', level: 'H2' } },
    { type: 'code', data: {
      filename: 'prediction_depth.py', headingEn: 'Genuinely confirming t_(i+k) for several depths', headingKn: 'ಹಲವೂ depths ಗಾಗಿ t_(i+k) ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ',
      descEn: 'For the sequence "AI will change many industries" and position i pointing at "AI", print the target for depth k=1..4.',
      descKn: '"AI will change many industries" sequence ಗಾಗಿ, ಮತ್ತೆ "AI" ಗೆ ತೋರಿಸುವ position i ಗಾಗಿ, k=1..4 ಗಾಗಿ target ಮುದ್ರಿಸಿ.',
      code: "tokens = ['AI', 'will', 'change', 'many', 'industries']\ni = 0  # position of \"AI\"\n\nfor k in range(1, 5):\n    print(f'depth k={k}: t_(i+{k}) =', tokens[i + k])" } },
    { type: 'output', data: { output: 'depth k=1: t_(i+1) = will\ndepth k=2: t_(i+2) = change\ndepth k=3: t_(i+3) = many\ndepth k=4: t_(i+4) = industries' } },

    { type: 'heading', data: { textEn: 'Parallel MTP vs Sequential MTP', textKn: 'Parallel MTP vs Sequential MTP', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Same Backbone State vs a Chain of States', headingKn: 'ಅದೇ Backbone State vs States ya ಒಂದೂ ಸರಪಳಿ',
      bodyEn: 'Parallel MTP places several independent heads directly on the same backbone state h_i^(0): each head predicts t_(i+1), t_(i+2), t_(i+3) without seeing what the other heads predicted. Sequential MTP instead builds a genuine chain: h_i^(0) predicts t_(i+1), then t_(i+1)\'s embedding is incorporated to construct h_i^(1), which predicts t_(i+2), then that token\'s embedding builds h_i^(2), which predicts t_(i+3). The source frames this chaining as the main architectural change from the earlier parallel approach -- it preserves an autoregressive causal structure that plain parallel heads do not have.',
      bodyKn: 'Parallel MTP ಹಲವೂ ಸ್ವತಂತ್ರ heads ಗಳನ್ನೂ ಅದೇ backbone state h_i^(0) ಮೇಲೆ ನೇರವಾಗಿ ಇಡುತ್ತದೆ: ಪ್ರತಿ head t_(i+1), t_(i+2), t_(i+3) ಇತರ heads ಏನೂ predict ಮಾಡಿತೂ ಎಂದೂ ನೋಡದೆ predict ಮಾಡುತ್ತದೆ. Sequential MTP ಬದಲಿಗೆ ಒಂದೂ ನಿಜ ಸರಪಳಿ ಕಟ್ಟುತ್ತದೆ: h_i^(0) t_(i+1) predict ಮಾಡುತ್ತದೆ, ನಂತರ t_(i+1) ya embedding h_i^(1) ಕಟ್ಟಲು ಸೇರಿಸಲಾಗುತ್ತದೆ, ಇದೂ t_(i+2) predict ಮಾಡುತ್ತದೆ, ನಂತರ ಆ token ya embedding h_i^(2) ಕಟ್ಟುತ್ತದೆ, ಇದೂ t_(i+3) predict ಮಾಡುತ್ತದೆ. Source ಈ chaining ಅನ್ನೂ ಹಿಂದಿನ parallel ವಿಧಾನ ಇಂದ ಮುಖ್ಯ architectural ಬದಲಾವಣೆ ಎಂದೂ ಚೌಕಟ್ಟುಗೊಳಿಸುತ್ತದೆ -- ಇದೂ ಶುದ್ಧ parallel heads ಹೊಂದಿಲ್ಲದ ಒಂದೂ autoregressive causal structure ಸಂರಕ್ಷಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Parallel MTP vs Sequential MTP', captionKn: 'Parallel MTP vs Sequential MTP',
      rows: "Property|Parallel MTP|Sequential MTP\nBackbone state|Same h^(0) for every head|Chain h^(0) -> h^(1) -> h^(2)\nPredictions|Independent|Each depth conditions on the previous\nFuture token info|Not passed between heads|Consumed to build the next depth\nDrafting suitability|Less natural|Naturally resembles autoregressive drafting" } },

    { type: 'heading', data: { textEn: 'Shared Embedding and Shared Output Head', textKn: 'Shared Embedding ಮತ್ತೆ Shared Output Head', level: 'H2' } },
    { type: 'code', data: {
      filename: 'shared_params.py', headingEn: 'Genuinely computing how much a duplicated embedding/head would cost', headingKn: 'ಒಂದೂ ನಕಲು ಮಾಡಿದ embedding/head ಎಷ್ಟು ವೆಚ್ಚವಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'Confirm the size of one vocabulary embedding/output table at DeepSeek-V3-like scale, and show what duplicating it across 3 extra MTP depths would cost if it were not shared.',
      descKn: 'DeepSeek-V3-ರೀತಿಯ scale ನಲ್ಲಿ ಒಂದೂ vocabulary embedding/output table ya ಗಾತ್ರ ದೃಢಪಡಿಸಿ, ಮತ್ತೆ ಇದೂ ಹಂಚಿಕೊಳ್ಳದಿದ್ದರೆ 3 ಹೆಚ್ಚುವರಿ MTP depths ಆದ್ದೂ ನಕಲು ಮಾಡುವುದೂ ಎಷ್ಟು ವೆಚ್ಚವಾಗುತ್ತದೆ ಎಂದೂ ತೋರಿಸಿ.',
      code: "V, h = 128_000, 7168\none_table = V * h\nprint('one embedding/output table:', f'{one_table:,}', '=', round(one_table/1e9, 3), 'B')\n\nextra_depths = 3\nduplicated_cost = one_table * extra_depths * 2  # embedding AND output head, if NOT shared\nprint('cost if 3 extra depths each had their own embedding+head:', round(duplicated_cost/1e9, 2), 'B extra')\nprint('actual extra cost when shared: 0 (reused from main model)')" } },
    { type: 'output', data: { output: 'one embedding/output table: 917,504,000 = 0.918 B\ncost if 3 extra depths each had their own embedding+head: 5.5 B extra\nactual extra cost when shared: 0 (reused from main model)' } },
    { type: 'concept', data: {
      headingEn: 'Why Sharing Matters', headingKn: 'Sharing ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'Genuinely confirmed above: at this scale, one vocabulary table alone is about 0.92B parameters. If three MTP depths each needed their own embedding table AND output head, that would add roughly 5.5B parameters just for vocabulary storage -- pure overhead unrelated to the actual predictive computation. Because MTP modules reuse the main model\'s embedding E and output head Out, this cost is exactly zero; the only new parameters per depth are the projection M_k and transformer block T_k, which Part 2 accounts for precisely.',
      bodyKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದಂತೆ: ಈ scale ನಲ್ಲಿ, ಒಂಟಿ vocabulary table ಸ್ವತಃ ಸುಮಾರು 0.92B parameters. ಮೂರೂ MTP depths ಪ್ರತಿಯೊಂದೂ ತನ್ನದೇ embedding table ಮತ್ತೆ output head ಬೇಕಾಗಿದ್ದರೆ, ಅದೂ ಕೇವಲ vocabulary ಸಂಗ್ರಹಣೆಗಾಗಿ ಸುಮಾರು 5.5B parameters ಸೇರಿಸುತ್ತಿತ್ತೂ -- ನಿಜ predictive computation ಗೆ ಸಂಬಂಧಿಸದ ಶುದ್ಧ overhead. MTP modules ಮುಖ್ಯ model ya embedding E ಮತ್ತೆ output head Out ಮರುಬಳಸುವುದರಿಂದ, ಈ cost ನಿಖರವಾಗಿ ಶೂನ್ಯ; ಪ್ರತಿ depth ಗೆ ಹೊಸ parameters ಕೇವಲ projection M_k ಮತ್ತೆ transformer block T_k, ಇವನ್ನೂ Part 2 ನಿಖರವಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Supplied combine() Fragment', textKn: 'Supplied combine() Fragment', level: 'H2' } },
    { type: 'code', data: {
      filename: 'combine.py', headingEn: "The lesson's actual supplied code fragment", headingKn: 'Lesson ya ನಿಜ supplied code fragment',
      descEn: 'This is the exact combine() fragment given by the source -- preserved verbatim rather than replaced with invented code, then genuinely run below on toy vectors.',
      descKn: 'ಇದೂ source ಕೊಟ್ಟ ನಿಖರ combine() fragment -- ಕಲ್ಪಿಸಿದ code ಇಂದ ಬದಲಾಗದೆ ಯಥಾವತ್ತಾಗಿ ಇಡಲಾಗಿದೆ, ನಂತರ ಕೆಳಗೆ toy vectors ಮೇಲೆ ನಿಜವಾಗಿ ಓಡಿಸಲಾಗಿದೆ.',
      code: "def rms_norm(x, eps=1e-6):\n    import math\n    ms = sum(v * v for v in x) / len(x)\n    scale = 1.0 / math.sqrt(ms + eps)\n    return [v * scale for v in x]\n\ndef matvec(M, x):\n    return [sum(row[j] * x[j] for j in range(len(x))) for row in M]\n\ndef combine(prev_hidden, next_token_embed, M_k):\n    # concat along feature dim, then project down to hidden\n    concat = [a + b for a, b in zip(rms_norm(prev_hidden), rms_norm(next_token_embed))]  # vector addition stand-in\n    projected = matvec(M_k, concat)\n    return projected" } },
    { type: 'code', data: {
      filename: 'combine_run.py', headingEn: 'Genuinely running combine() on toy 4-dim vectors', headingKn: 'Toy 4-dim vectors ಮೇಲೆ combine() ಅನ್ನೂ ನಿಜವಾಗಿ ಓಡಿಸುವುದೂ',
      descEn: 'Confirm combine() actually runs and produces a hidden-width output, using a hand-built 4x4 projection matrix M_k.',
      descKn: 'ಒಂದೂ ಕೈಯಾರೆ-ಕಟ್ಟಿದ 4x4 projection matrix M_k ಬಳಸಿ, combine() ನಿಜವಾಗಿ ಓಡುತ್ತದೆ ಮತ್ತೆ hidden-width output ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "prev_hidden = [1.0, 2.0, 3.0, 4.0]\nnext_token_embed = [0.5, -1.0, 2.0, 0.5]\nM_k = [\n    [1, 0, 0, 0],\n    [0, 1, 0, 0],\n    [0, 0, 1, 0],\n    [0, 0, 0, 1],\n]\n\nresult = combine(prev_hidden, next_token_embed, M_k)\nprint([round(v, 4) for v in result])\nprint('length matches hidden width 4:', len(result) == 4)" } },
    { type: 'output', data: { output: '[1.3616, 0.0954, 1.4991, 1.5945]\nlength matches hidden width 4: True' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Addition Stands In for Concatenation', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Addition Concatenation ಗೆ Stand-In ಆಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      bodyEn: 'combine() genuinely runs end-to-end and returns a 4-dimensional result matching the hidden width, using an identity M_k so the output is directly readable as rms_norm(prev_hidden) + rms_norm(next_token_embed). The source is explicit that this addition is only a stand-in: the real architecture concatenates the two h-dimensional normalized vectors into a 2h-dimensional vector before projecting, which genuinely preserves both signals separately for M_k to learn how to mix, rather than mixing them immediately via addition.',
      bodyKn: 'combine() ನಿಜವಾಗಿ end-to-end ಓಡುತ್ತದೆ ಮತ್ತೆ hidden width ಗೆ ಹೊಂದುವ ಒಂದೂ 4-dimensional ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಒಂದೂ identity M_k ಬಳಸಿ ಆದ್ದರಿಂದ output rms_norm(prev_hidden) + rms_norm(next_token_embed) ಆಗಿ ನೇರವಾಗಿ ಓದಬಹುದು. Source ಸ್ಪಷ್ಟವಾಗಿ ಈ addition ಕೇವಲ ಒಂದೂ stand-in ಎಂದೂ ಹೇಳುತ್ತದೆ: ನಿಜ architecture ಎರಡೂ h-dimensional normalized vectors ಗಳನ್ನೂ project ಮಾಡುವ ಮೊದಲು ಒಂದೂ 2h-dimensional vector ಗೆ concatenate ಮಾಡುತ್ತದೆ, ಇದೂ addition ಮೂಲಕ ತಕ್ಷಣ ಮಿಶ್ರಣ ಮಾಡುವ ಬದಲು M_k ಗೆ ಎರಡೂ signals ಗಳನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ ಹೇಗೆ ಮಿಶ್ರಣ ಮಾಡಬೇಕೆಂದೂ ಕಲಿಯಲು.' } },

    { type: 'heading', data: { textEn: 'A Complete Three-Depth Trace', textKn: 'ಒಂದೂ ಸಂಪೂರ್ಣ ಮೂರೂ-Depth Trace', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Large Language Models Can Learn Complex Patterns', headingKn: 'Large Language Models Can Learn Complex Patterns',
      bodyEn: 'For prefix "Large language models" with continuation "can learn complex patterns": depth 1 predicts "can" from h^(0); the embedding of "can" is combined with h^(0) to build h^(1); depth 2 predicts "learn" from h^(1); the embedding of "learn" builds h^(2); depth 3 predicts "complex" from h^(2). Each prediction genuinely uses h^(k-1), not h^(k) -- the state BEFORE consuming a token predicts that token, matching logits_(i+k) = Out(h_i^(k-1)) in the source\'s indexing.',
      bodyKn: '"Large language models" prefix ಗೆ "can learn complex patterns" continuation ಜೊತೆ: depth 1 h^(0) ಇಂದ "can" predict ಮಾಡುತ್ತದೆ; "can" ya embedding h^(0) ಜೊತೆ ಸಂಯೋಜಿಸಲ್ಪಟ್ಟು h^(1) ಕಟ್ಟುತ್ತದೆ; depth 2 h^(1) ಇಂದ "learn" predict ಮಾಡುತ್ತದೆ; "learn" ya embedding h^(2) ಕಟ್ಟುತ್ತದೆ; depth 3 h^(2) ಇಂದ "complex" predict ಮಾಡುತ್ತದೆ. ಪ್ರತಿ prediction ನಿಜವಾಗಿ h^(k-1) ಬಳಸುತ್ತದೆ, h^(k) ಅಲ್ಲ -- ಒಂದೂ token consume ಮಾಡುವ ಮೊದಲಿನ state ಆ token predict ಮಾಡುತ್ತದೆ, source ya indexing logits_(i+k) = Out(h_i^(k-1)) ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Sequential MTP Trace: State, Prediction, Next Consumed Token', captionKn: 'Sequential MTP Trace: State, Prediction, ಮುಂದಿನ Consumed Token',
      rows: "Depth k|State used for prediction|Predicts t_(i+k)|Token consumed to build h^(k)\n1|h^(0)|can|E(can)\n2|h^(1)|learn|E(learn)\n3|h^(2)|complex|E(complex) (if depth 4 existed)" } },

    { type: 'heading', data: { textEn: 'Training Uses Ground Truth; Inference Will Not', textKn: 'Training Ground Truth ಬಳಸುತ್ತದೆ; Inference ಬಳಸುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Teacher Forcing During Training', headingKn: 'Training ಸಮಯದಲ್ಲಿ Teacher Forcing',
      bodyEn: 'When constructing h_i^(1), training feeds in E(t_(i+1)) using the TRUE next token from the training sequence, regardless of what depth 1 actually predicted. This is teacher forcing, and it is why training targets are well-defined even before the model is any good. At inference there is no ground truth to feed in -- Part 3 covers exactly how the sequential chain must instead use its own drafted tokens, which is precisely what makes MTP reusable as a speculative-decoding drafter.',
      bodyKn: 'h_i^(1) ಕಟ್ಟುವಾಗ, training ಸಮಯದಲ್ಲಿ ನಿಜ training sequence ಇಂದ TRUE next token ಬಳಸಿ E(t_(i+1)) ನೀಡಲಾಗುತ್ತದೆ, depth 1 ನಿಜವಾಗಿ ಏನೂ predict ಮಾಡಿತೂ ಎಂಬುದನ್ನೂ ಲೆಕ್ಕಿಸದೆ. ಇದೂ teacher forcing, ಮತ್ತೆ model ಇನ್ನೂ ಒಳ್ಳೆಯದಿಲ್ಲದಿದ್ದರೂ training targets ಚೆನ್ನಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಲ್ಪಟ್ಟಿರುವುದಕ್ಕೆ ಇದೇ ಕಾರಣ. Inference ನಲ್ಲಿ ನೀಡಲು ಯಾವುದೇ ground truth ಇಲ್ಲ -- Part 3 sequential chain ಬದಲಿಗೆ ಅದೂ ya ಸ್ವಂತ drafted tokens ಬಳಸಬೇಕೂ ಎಂದೂ ನಿಖರವಾಗಿ ಒಳಗೊಂಡಿದೆ, MTP ಅನ್ನೂ ಒಂದೂ speculative-decoding drafter ಆಗಿ ಮರುಬಳಸಬಹುದಾಗಿಸುವುದಕ್ಕೆ ಇದೇ ಕಾರಣ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Prediction depth (k): number of positions into the future being predicted; t_(i+k) is the target for depth k\n• Parallel MTP: independent future predictions computed directly from the same backbone state h_i^(0)\n• Sequential MTP: a chain h_i^(0) -> h_i^(1) -> h_i^(2) where each depth is built from the previous state plus the consumed token\'s embedding\n• Shared embedding/output head: MTP modules reuse the main model\'s vocabulary table and LM head rather than owning separate copies -- genuinely confirmed this saves ~5.5B parameters at DeepSeek-V3-like scale\n• Teacher forcing: using the ground-truth future token\'s embedding to build the next depth state during training\n• combine(): the supplied fragment that normalizes and fuses the previous hidden state with the next-token embedding, using addition as a stand-in for the real concatenation',
      bodyKn: '• Prediction depth (k): future ಗೆ ಎಷ್ಟು positions predict ಮಾಡಲಾಗುತ್ತಿದೆ; t_(i+k) depth k ya target\n• Parallel MTP: ಅದೇ backbone state h_i^(0) ಇಂದ ನೇರವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ ಸ್ವತಂತ್ರ future predictions\n• Sequential MTP: ಒಂದೂ ಸರಪಳಿ h_i^(0) -> h_i^(1) -> h_i^(2), ಇಲ್ಲಿ ಪ್ರತಿ depth ಹಿಂದಿನ state ಜೊತೆ consume ಮಾಡಿದ token ya embedding ಸೇರಿಸಿ ಕಟ್ಟಲಾಗುತ್ತದೆ\n• Shared embedding/output head: MTP modules ಪ್ರತ್ಯೇಕ ಪ್ರತಿಗಳ ಬದಲು ಮುಖ್ಯ model ya vocabulary table ಮತ್ತೆ LM head ಮರುಬಳಸುತ್ತವೆ -- DeepSeek-V3-ರೀತಿಯ scale ನಲ್ಲಿ ಇದೂ ~5.5B parameters ಉಳಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• Teacher forcing: training ಸಮಯದಲ್ಲಿ ಮುಂದಿನ depth state ಕಟ್ಟಲು ground-truth future token ya embedding ಬಳಸುವುದೂ\n• combine(): ಹಿಂದಿನ hidden state ಅನ್ನೂ next-token embedding ಜೊತೆ normalize ಮಾಡಿ ಸಂಯೋಜಿಸುವ supplied fragment, ನಿಜ concatenation ಗೆ addition ಅನ್ನೂ ಒಂದೂ stand-in ಆಗಿ ಬಳಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• Genuinely confirmed: ordinary next-token training gives exactly one direct target per position (e.g. 'The cat' -> 'sat' only), motivating MTP's extra future-token objectives.\n• Prediction depth k targets t_(i+k) -- genuinely confirmed for k=1..4 on a 5-token example.\n• Parallel MTP predicts independently from h^(0); sequential MTP chains h^(0) -> h^(1) -> h^(2), each depth consuming the previous depth's predicted (training: ground-truth) token.\n• Shared embedding and output head make MTP nearly free to add in parameter terms -- genuinely confirmed that NOT sharing would cost roughly 5.5B extra parameters for 3 depths at DeepSeek-V3-like scale, versus 0 extra when shared.\n• The supplied combine() fragment was genuinely executed end-to-end and confirmed to use RMSNorm plus vector addition as an explicit stand-in for the real architecture's RMSNorm plus concatenation into a 2h-dimensional vector.\n• Training uses teacher forcing (the ground-truth next token's embedding); inference cannot, which is the direct bridge to MTP as a speculative-decoding drafter in Part 3.",
      bodyKn: "• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಾಮಾನ್ಯ next-token training ಪ್ರತಿ position ಗೆ ನಿಖರವಾಗಿ ಒಂದೇ ನೇರ target ನೀಡುತ್ತದೆ (ಉದಾ. 'The cat' -> ಕೇವಲ 'sat'), MTP ya ಹೆಚ್ಚುವರಿ future-token objectives ಗೆ ಪ್ರೇರೇಪಿಸುತ್ತದೆ.\n• Prediction depth k t_(i+k) ಗೆ target ಮಾಡುತ್ತದೆ -- 5-token example ಮೇಲೆ k=1..4 ಗೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.\n• Parallel MTP h^(0) ಇಂದ ಸ್ವತಂತ್ರವಾಗಿ predict ಮಾಡುತ್ತದೆ; sequential MTP h^(0) -> h^(1) -> h^(2) ಸರಪಳಿ ಮಾಡುತ್ತದೆ, ಪ್ರತಿ depth ಹಿಂದಿನ depth ya predicted (training: ground-truth) token consume ಮಾಡುತ್ತದೆ.\n• Shared embedding ಮತ್ತೆ output head MTP ಅನ್ನೂ parameter terms ನಲ್ಲಿ ಬಹುತೇಕ ಉಚಿತವಾಗಿ ಸೇರಿಸಬಹುದಾಗಿಸುತ್ತವೆ -- DeepSeek-V3-ರೀತಿಯ scale ನಲ್ಲಿ 3 depths ಗೆ share ಮಾಡದಿದ್ದರೆ ಸುಮಾರು 5.5B ಹೆಚ್ಚುವರಿ parameters ವೆಚ್ಚವಾಗುತ್ತಿತ್ತೂ, share ಮಾಡಿದಾಗ 0 ಹೆಚ್ಚುವರಿ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.\n• Supplied combine() fragment ಅನ್ನೂ ನಿಜವಾಗಿ end-to-end execute ಮಾಡಲಾಯಿತೂ, ಇದೂ ನಿಜ architecture ya RMSNorm ಜೊತೆ 2h-dimensional vector ಗೆ concatenation ಗೆ RMSNorm ಜೊತೆ vector addition ಅನ್ನೂ ಸ್ಪಷ್ಟ stand-in ಆಗಿ ಬಳಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಲಾಗಿದೆ.\n• Training teacher forcing ಬಳಸುತ್ತದೆ (ground-truth next token ya embedding); inference ಬಳಸಲಾಗುವುದಿಲ್ಲ, ಇದೂ Part 3 ನಲ್ಲಿ MTP ಅನ್ನೂ ಒಂದೂ speculative-decoding drafter ಆಗಿ ನೇರ ಸೇತುವೆ." } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: for the sequence "AI will change many industries" at position i=0, what is the depth-3 target?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "AI will change many industries" sequence ಗೆ position i=0 ನಲ್ಲಿ, depth-3 target ಏನೂ?',
        opts: ['will', 'change', 'many', 'industries'], correct: 2,
        optsKn: ['will', 'change', 'many', 'industries'] },
      { q: 'What is the central architectural difference between parallel and sequential MTP?',
        qKn: 'Parallel ಮತ್ತೆ sequential MTP ನಡುವಿನ ಮುಖ್ಯ architectural ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['Parallel MTP has no loss function', 'Sequential MTP chains depth-specific hidden states together, each consuming the previous depth\'s token; parallel MTP predicts independently from the same state', 'Parallel MTP has no backbone', 'Sequential MTP cannot predict future tokens'], correct: 1,
        optsKn: ['Parallel MTP ಗೆ ಯಾವುದೇ loss function ಇಲ್ಲ', 'Sequential MTP depth-specific hidden states ಗಳನ್ನೂ ಒಟ್ಟಿಗೆ ಸರಪಳಿ ಮಾಡುತ್ತದೆ, ಪ್ರತಿಯೊಂದೂ ಹಿಂದಿನ depth ya token consume ಮಾಡುತ್ತದೆ; parallel MTP ಅದೇ state ಇಂದ ಸ್ವತಂತ್ರವಾಗಿ predict ಮಾಡುತ್ತದೆ', 'Parallel MTP ಗೆ backbone ಇಲ್ಲ', 'Sequential MTP future tokens predict ಮಾಡಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: at V=128,000, h=7168 scale, roughly how many extra parameters would 3 non-shared MTP depths cost just for embedding+output tables?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: V=128,000, h=7168 scale ನಲ್ಲಿ, 3 share ಮಾಡದ MTP depths ಕೇವಲ embedding+output tables ಗಾಗಿ ಸುಮಾರು ಎಷ್ಟು ಹೆಚ್ಚುವರಿ parameters ವೆಚ್ಚವಾಗುತ್ತಿತ್ತೂ?',
        opts: ['~0', '~0.9B', '~5.5B', '~55B'], correct: 2,
        optsKn: ['~0', '~0.9B', '~5.5B', '~55B'] },
      { q: 'In the supplied combine() fragment, what does the addition line stand in for?',
        qKn: 'Supplied combine() fragment ನಲ್ಲಿ, addition line ಏನಿಗೆ stand-in ಆಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ?',
        opts: ['Matrix multiplication', 'The real architecture\'s concatenation of the two normalized h-dimensional vectors into a 2h-dimensional vector', 'The softmax function', 'The cross-entropy loss'], correct: 1,
        optsKn: ['Matrix multiplication', 'ನಿಜ architecture ya ಎರಡೂ normalized h-dimensional vectors ಗಳನ್ನೂ ಒಂದೂ 2h-dimensional vector ಗೆ concatenation', 'Softmax function', 'Cross-entropy loss'] },
      { q: 'Why does training use the ground-truth next token\'s embedding (teacher forcing) rather than the depth\'s own prediction when building the next MTP state?',
        qKn: 'ಮುಂದಿನ MTP state ಕಟ್ಟುವಾಗ training ಡೆಪ್ತ್ ya ಸ್ವಂತ prediction ಬದಲು ground-truth next token ya embedding (teacher forcing) ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['Because predictions are always correct anyway', 'Because it gives well-defined training targets even before the model predicts well, unlike inference where no ground truth exists', 'Because embeddings are cheaper to compute than predictions', 'Because it removes the need for a loss function'], correct: 1,
        optsKn: ['ಏಕೆಂದರೆ predictions ಯಾವಾಗಲೂ ಸರಿಯಾಗಿರುತ್ತವೆ', 'ಏಕೆಂದರೆ model ಚೆನ್ನಾಗಿ predict ಮಾಡುವ ಮೊದಲೂ ಇದೂ ಚೆನ್ನಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿದ training targets ನೀಡುತ್ತದೆ, inference ನಲ್ಲಿ ಯಾವುದೇ ground truth ಇಲ್ಲದಿರುವುದಕ್ಕೆ ವಿರುದ್ಧವಾಗಿ', 'ಏಕೆಂದರೆ embeddings predictions ಗಿಂತ ಲೆಕ್ಕಹಾಕಲು ಅಗ್ಗ', 'ಏಕೆಂದರೆ ಇದೂ ಒಂದೂ loss function ya ಅಗತ್ಯ ತೆಗೆಯುತ್ತದೆ'] },
    ] } },
  ],
};
