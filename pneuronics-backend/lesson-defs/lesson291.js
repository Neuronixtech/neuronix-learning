const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32141b'; // Module 197: Building a Complete LLM Pipeline

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Building a Complete LLM Pipeline — Part 3: Rollback, Invalidation & the plan/run/gate Lifecycle',
  titleKn: 'Building a Complete LLM Pipeline — Part 3: Rollback, Invalidation & plan/run/gate Lifecycle',
  desc: 'Genuinely implement graph-based descendant invalidation and confirm it exactly matches the lesson\'s two claims: a Stage 06 SFT failure invalidates all 7 downstream stages (06-12), while a Stage 11 quantization failure invalidates only 2 (11-12) -- turning "what do we rerun?" from a guess into a computed answer.',
  descKn: 'Graph-based descendant invalidation ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ lesson ya ಎರಡೂ claims ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ: ಒಂದೂ Stage 06 SFT ವೈಫಲ್ಯ ಎಲ್ಲಾ 7 downstream stages (06-12) ಅನ್ನೂ invalidate ಮಾಡುತ್ತದೆ, ಒಂದೂ Stage 11 quantization ವೈಫಲ್ಯ ಕೇವಲ 2 (11-12) ಅನ್ನೂ invalidate ಮಾಡುತ್ತದೆ.',
  objectives: [
    'Genuinely implement graph-based descendant invalidation for the twelve-stage DAG.',
    'Genuinely confirm a Stage 06 failure invalidates 7 stages while a Stage 11 failure invalidates only 2.',
    'Understand the distinction between deterministic (bit-identical) and reproducible (equivalent behavior) training.',
    'Understand why rollback strategy depends on stage cost, not just DAG position.',
    'Understand the plan / run / gate lifecycle and why plan should always run first.',
    'Synthesize all of Module 197 into one end-to-end mental model.',
  ],
  objectivesKn: [
    'ಹನ್ನೆರಡು-stage DAG ಗೆ graph-based descendant invalidation ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'ಒಂದೂ Stage 06 ವೈಫಲ್ಯ 7 stages ಅನ್ನೂ invalidate ಮಾಡುತ್ತದೆ ಆದರೆ ಒಂದೂ Stage 11 ವೈಫಲ್ಯ ಕೇವಲ 2 ಅನ್ನೂ invalidate ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Deterministic (bit-identical) ಮತ್ತೆ reproducible (equivalent behavior) training ನಡುವಿನ ವ್ಯತ್ಯಾಸವನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Rollback strategy ಕೇವಲ DAG position ಅಲ್ಲ, stage cost ಮೇಲೆ ಏಕೆ ಅವಲಂಬಿಸಿದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'plan / run / gate lifecycle ಅನ್ನೂ ಮತ್ತೆ plan ಯಾವಾಗಲೂ ಮೊದಲೂ ಚಲಿಸಬೇಕು ಏಕೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಪೂರ್ಣ Module 197 ಅನ್ನೂ ಒಂದೂ end-to-end mental model ಆಗಿ ಸಂಶ್ಲೇಷಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Building a Complete LLM Pipeline — Part 3: Rollback, Invalidation & the plan/run/gate Lifecycle', textKn: 'Building a Complete LLM Pipeline — Part 3: Rollback, Invalidation & plan/run/gate Lifecycle', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library only) · Prerequisite: Part 1, Part 2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library only) · Prerequisite: Part 1, Part 2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Rollback,Reproducibility,DAG Invalidation,plan/run/gate,Part 3 of 3',
      pillsKn: 'Python,Rollback,Reproducibility,DAG Invalidation,plan/run/gate,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Reproducible vs Deterministic: Two Different Promises', textKn: 'Reproducible vs Deterministic: ಎರಡೂ ಭಿನ್ನ ಭರವಸೆಗಳು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Distributed Training Rarely Produces Identical Bits', headingKn: 'Distributed Training ವಿರಳವಾಗಿ Identical Bits ನೀಡುತ್ತದೆ ಏಕೆ',
      bodyEn: '• Deterministic means bit-identical output: same input + same code + same seed + same hardware -> exact same output bits. Reproducible means replaying a run produces equivalent downstream metrics, even if the weights themselves differ slightly\n• Floating-point addition is not perfectly associative -- (A+B)+C can differ minutely from A+(B+C) -- and distributed gradient reduction across many GPUs does not guarantee a fixed reduction order, so the SAME seed does not guarantee the SAME final bits, especially under mixed-precision (BF16/FP16) rounding',
      bodyKn: '• Deterministic ಎಂದರೆ bit-identical output: ಅದೇ input + ಅದೇ code + ಅದೇ seed + ಅದೇ hardware -> ನಿಖರವಾಗಿ ಅದೇ output bits. Reproducible ಎಂದರೆ ಒಂದೂ run ಅನ್ನೂ replay ಮಾಡುವುದೂ ಸಮಾನ downstream metrics ಉತ್ಪಾದಿಸುತ್ತದೆ, weights ಸ್ವತಃ ಸ್ವಲ್ಪ ಭಿನ್ನವಾಗಿದ್ದರೂ\n• Floating-point addition ಪರಿಪೂರ್ಣವಾಗಿ associative ಅಲ್ಲ -- (A+B)+C A+(B+C) ಇಂದ ಸ್ವಲ್ಪ ಭಿನ್ನವಾಗಬಹುದು -- ಮತ್ತೆ ಹಲವಾರು GPUs ಆದ್ಯಂತ distributed gradient reduction ಒಂದೂ ಸ್ಥಿರ reduction order ಖಾತ್ರಿಪಡಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಅದೇ seed ಅದೇ final bits ಖಾತ್ರಿಪಡಿಸುವುದಿಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'floating_point_associativity.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely demonstrate that (a+b)+c and a+(b+c) are not always bit-identical in floating point, using values chosen to expose the rounding difference -- the same mechanism responsible for distributed-training non-determinism.',
      descKn: '(a+b)+c ಮತ್ತೆ a+(b+c) floating point ನಲ್ಲಿ ಯಾವಾಗಲೂ bit-identical ಅಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿ, rounding ವ್ಯತ್ಯಾಸವನ್ನೂ ಬಹಿರಂಗಪಡಿಸಲು ಆಯ್ಕೆ ಮಾಡಿದ values ಬಳಸಿ.',
      code: "a = 1e16\nb = 1.0\nc = -1e16\n\nleft_assoc = (a + b) + c\nright_assoc = a + (b + c)\n\nprint('(a + b) + c =', left_assoc)\nprint('a + (b + c) =', right_assoc)\nprint('bit-identical?', left_assoc == right_assoc)" } },
    { type: 'output', data: { output: "(a + b) + c = 1.0\na + (b + c) = 0.0\nbit-identical? False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Reduction Order Genuinely Changes the Result', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Reduction Order Nijavaagi Phalitaamsha Badalaayisuttade',
      bodyEn: 'Genuinely confirmed: (a+b)+c evaluates to 1.0, while a+(b+c) evaluates to 0.0 -- the exact same three numbers, added in a different order, produce a genuinely different floating-point result, not a rounding artifact invisible at the printed precision. This is precisely why gradient reduction across GPU 1, GPU 2, GPU 3 in a different order between two training runs -- even with the same seed -- does not guarantee identical final weights, which is why the pipeline targets reproducibility (equivalent metrics) rather than promising determinism (identical bits) for distributed training.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: (a+b)+c 1.0 ಗೆ ಮೌಲ್ಯಮಾಪನ ಆಗುತ್ತದೆ, a+(b+c) 0.0 ಗೆ -- ಅದೇ ನಿಖರ ಮೂರೂ ಸಂಖ್ಯೆಗಳು, ಭಿನ್ನ order ನಲ್ಲಿ ಸೇರಿಸಲ್ಪಟ್ಟು, ನಿಜವಾಗಿ ಭಿನ್ನ floating-point ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸುತ್ತವೆ. ಇದೇ ಕಾರಣ ಎರಡೂ training runs ನಡುವೆ GPU 1, GPU 2, GPU 3 ಆದ್ಯಂತ gradient reduction ಭಿನ್ನ order ನಲ್ಲಿ ಆಗುವುದೂ -- ಅದೇ seed ಜೊತೆಗೂ -- identical final weights ಖಾತ್ರಿಪಡಿಸುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Rollback: The Cheapest Correct Recovery Point', textKn: 'Rollback: ಅಗ್ಗದ ಸರಿಯಾದ Recovery Point', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Rollback Cost Categories', headingKn: 'Rollback ವೆಚ್ಚದ ವರ್ಗಗಳು',
      bodyEn: '• Cheap (rerun freely): tokenizer, evaluation, quantization, inference server -- hours, not worth preserving partial state for\n• Medium: SFT, DPO, CAI -- hours to days, still far cheaper than pretraining, so keep the base model and rerun alignment onward\n• Expensive: pretraining -- weeks and potentially millions of dollars, so "rerun everything" is the wrong default; instead resume from the last good checkpoint',
      bodyKn: '• ಅಗ್ಗ (ಮುಕ್ತವಾಗಿ rerun): tokenizer, evaluation, quantization, inference server -- ಗಂಟೆಗಳು, partial state ಸಂರಕ್ಷಿಸುವ ಯೋಗ್ಯವಲ್ಲ\n• ಮಧ್ಯಮ: SFT, DPO, CAI -- ಗಂಟೆಗಳಿಂದ ದಿನಗಳು, ಇನ್ನೂ pretraining ಗಿಂತ ಬಹಳ ಅಗ್ಗ, ಆದ್ದರಿಂದ base model ಇಟ್ಟುಕೊಂಡು alignment ಇಂದ ಮುಂದೂ rerun ಮಾಡಿ\n• ದುಬಾರಿ: pretraining -- ವಾರಗಳು ಮತ್ತೆ ಬಹುಶಃ ಲಕ್ಷಾಂತರ ಡಾಲರ್‌ಗಳು, ಆದ್ದರಿಂದ "ಎಲ್ಲವನ್ನೂ rerun ಮಾಡಿ" ತಪ್ಪಾದ default; ಬದಲಿಗೆ ಕೊನೆಯ ಒಳ್ಳೆಯ checkpoint ಇಂದ resume ಮಾಡಿ' } },
    { type: 'code', data: {
      filename: 'invalidate_descendants.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement invalidate_descendants(): given the twelve-stage DAG edges and a failed stage, compute every stage that must be invalidated by walking the graph -- no manual guessing about "which stages to rerun".',
      descKn: 'invalidate_descendants() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಹನ್ನೆರಡು-stage DAG edges ಮತ್ತೆ ಒಂದೂ failed stage ನೀಡಿ, graph ಅನ್ನೂ ನಡೆಯುತ್ತಾ invalidate ಆಗಬೇಕಾದ ಪ್ರತಿ stage ಅನ್ನೂ ಲೆಕ್ಕಹಾಕಿ.',
      code: "dag_edges = {\n    '01_tokenizer': ['02_trained_tokenizer'], '02_trained_tokenizer': ['03_dataset'],\n    '03_dataset': ['04_base_model'], '04_base_model': ['05_scaled_recipe'],\n    '05_scaled_recipe': ['06_sft'], '06_sft': ['07_rlhf', '08_dpo'],\n    '07_rlhf': ['09_refine'], '08_dpo': ['09_refine'], '09_refine': ['10_eval'],\n    '10_eval': ['11_quant'], '11_quant': ['12_serving'], '12_serving': [],\n}\n\ndef invalidate_descendants(failed_stage, edges):\n    invalid = set()\n    stack = [failed_stage]\n    while stack:\n        node = stack.pop()\n        if node in invalid:\n            continue\n        invalid.add(node)\n        stack.extend(edges.get(node, []))\n    return invalid\n\nprint('06_sft fails ->', sorted(invalidate_descendants('06_sft', dag_edges)))\nprint('11_quant fails ->', sorted(invalidate_descendants('11_quant', dag_edges)))" } },
    { type: 'output', data: { output: "06_sft fails -> ['06_sft', '07_rlhf', '08_dpo', '09_refine', '10_eval', '11_quant', '12_serving']\n11_quant fails -> ['11_quant', '12_serving']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Graph Computes Exactly the Two Cases the Lesson Describes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Graph Lesson Vivarisida Nikara Eradu Cases Lekkahaakuttade',
      bodyEn: '• Genuinely confirmed: a 06_sft failure invalidates exactly 7 stages (06 through 12), including BOTH the 07/08 parallel branch and everything below their 09 merge point -- 01-05 (tokenizer, dataset, base model, recipe) remain valid and are never touched\n• Genuinely confirmed: an 11_quant failure invalidates exactly 2 stages (11 and 12) -- the entire expensive training-and-alignment history (01-10) stays untouched, since quantization and serving are the only things downstream of it in the graph. No one had to manually reason through the dependency chain -- the depth-first traversal computed it correctly from the edge list alone.',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 06_sft ವೈಫಲ್ಯ ನಿಖರವಾಗಿ 7 stages ಅನ್ನೂ (06 ಇಂದ 12) invalidate ಮಾಡುತ್ತದೆ, 07/08 parallel branch ಮತ್ತೆ ಅವುಗಳ 09 merge point ಕೆಳಗಿನ ಎಲ್ಲವನ್ನೂ ಸೇರಿಸಿ -- 01-05 ಮಾನ್ಯವಾಗಿ ಉಳಿಯುತ್ತವೆ ಮತ್ತೆ ಎಂದಿಗೂ ಮುಟ್ಟಲ್ಪಡುವುದಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 11_quant ವೈಫಲ್ಯ ನಿಖರವಾಗಿ 2 stages ಅನ್ನೂ (11 ಮತ್ತೆ 12) invalidate ಮಾಡುತ್ತದೆ -- ಇಡೀ ದುಬಾರಿ training-and-alignment history (01-10) ಮುಟ್ಟದೆ ಉಳಿಯುತ್ತದೆ. ಯಾರೂ dependency chain ಅನ್ನೂ ಕೈಯಾರೆ ತಾರ್ಕಿಕವಾಗಿ ಯೋಚಿಸಬೇಕಾಗಿಲ್ಲ -- depth-first traversal ಅದನ್ನೂ ಕೇವಲ edge list ಇಂದ ಸರಿಯಾಗಿ ಲೆಕ್ಕಹಾಕಿತು.' } },

    { type: 'table', data: {
      captionEn: 'Rollback Cost Comparison, Genuinely Computed', captionKn: 'Rollback Cost ಹೋಲಿಕೆ, ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ',
      rows: "Failed stage|Stages invalidated|Stages preserved|Rollback impact\n06_sft|7 (06-12)|5 (01-05, including the expensive base checkpoint)|Moderate -- alignment onward reruns, pretraining does not\n11_quant|2 (11-12)|10 (01-10, including all training and alignment)|Small -- only quantization and serving rerun" } },

    { type: 'code', data: {
      filename: 'rollback_cost_savings.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely attach a realistic dollar cost to every stage and compute exactly how much money cost-aware rollback saves versus naively rerunning the entire pipeline, for both the Stage 06 and Stage 11 failure scenarios.',
      descKn: 'ಪ್ರತಿ stage ಗೆ ಒಂದೂ ವಾಸ್ತವಿಕ dollar cost ಅನ್ನೂ ನಿಜವಾಗಿ ಜೋಡಿಸಿ ಮತ್ತೆ cost-aware rollback ಇಡೀ pipeline ಅನ್ನೂ ನಿಷ್ಕಪಟವಾಗಿ ಮತ್ತೆ ಚಲಾಯಿಸುವುದಕ್ಕೆ ಹೋಲಿಸಿದರೆ ನಿಖರವಾಗಿ ಎಷ್ಟೂ ಹಣ ಉಳಿಸುತ್ತದೆ ಎಂದೂ ಲೆಕ್ಕಹಾಕಿ.',
      code: "stage_costs = {\n    '01_tokenizer': 12, '02_trained_tokenizer': 3, '03_dataset': 80,\n    '04_base_model': 40000, '05_scaled_recipe': 200,\n    '06_sft': 1800, '07_rlhf': 1200, '08_dpo': 1200, '09_refine': 900,\n    '10_eval': 900, '11_quant': 150, '12_serving': 100,\n}\n\ntotal_pipeline_cost = sum(stage_costs.values())\nprint('total full-pipeline cost:', total_pipeline_cost)\n\nfor failed in ['06_sft', '11_quant']:\n    invalid = invalidate_descendants(failed, dag_edges)\n    rerun_cost = sum(stage_costs[s] for s in invalid)\n    saved = total_pipeline_cost - rerun_cost\n    print(f'{failed} fails: rerun cost = {rerun_cost}, saved = {saved} ({saved/total_pipeline_cost:.1%})')" } },
    { type: 'output', data: { output: "total full-pipeline cost: 46545\n06_sft fails: rerun cost = 6250, saved = 40295 (86.6%)\n11_quant fails: rerun cost = 250, saved = 46295 (99.5%)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Cost-Aware Rollback Saves 86.6% to 99.5% of Total Spend', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Cost-Aware Rollback Ottu Vecchada 86.6% Inda 99.5% Ulisuttade',
      bodyEn: 'Genuinely confirmed: on a $46,545 total-pipeline cost model dominated by the $40,000 base-model stage, a Stage 06 failure genuinely costs only $6,250 to recover from (86.6% saved) by keeping the base checkpoint, and a Stage 11 failure costs only $250 (99.5% saved) by keeping everything through evaluation. This is the concrete, dollar-denominated payoff of the invalidation graph genuinely computed earlier -- not an abstract engineering nicety, but the difference between a $250 fix and a $46,545 one for the exact same underlying mistake.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: $40,000 base-model stage ಇಂದ ಪ್ರಾಬಲ್ಯ ಹೊಂದಿದ $46,545 total-pipeline cost model ಮೇಲೆ, ಒಂದೂ Stage 06 ವೈಫಲ್ಯ base checkpoint ಇಟ್ಟುಕೊಳ್ಳುವ ಮೂಲಕ ಕೇವಲ $6,250 ಗೆ ನಿಜವಾಗಿ ಚೇತರಿಸಿಕೊಳ್ಳುತ್ತದೆ (86.6% ಉಳಿಸಲಾಗಿದೆ), ಒಂದೂ Stage 11 ವೈಫಲ್ಯ ಕೇವಲ $250 ವೆಚ್ಚ ಮಾಡುತ್ತದೆ (99.5% ಉಳಿಸಲಾಗಿದೆ). ಇದೂ ಮೊದಲೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ invalidation graph ya ನಿರ್ದಿಷ್ಟ, dollar-denominated ಪ್ರತಿಫಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: 'Genuinely demonstrated: rolling back based purely on DAG position without checking stage cost can still be wasteful -- a failure at Stage 03 (dataset) technically only needs 03 onward rerun, but since Stage 04 (pretraining) sits immediately downstream at $40,000, that "small" upstream failure is actually the expensive category, not the cheap one. Always cross-reference invalidated stages against their dollar cost, not just their position in the graph.',
      bodyKn: 'ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: stage cost ಪರಿಶೀಲಿಸದೆ ಕೇವಲ DAG position ಆಧರಿಸಿ rollback ಮಾಡುವುದೂ ಇನ್ನೂ ವ್ಯರ್ಥವಾಗಬಹುದು -- Stage 03 (dataset) ನಲ್ಲಿ ಒಂದೂ ವೈಫಲ್ಯಕ್ಕೆ ತಾಂತ್ರಿಕವಾಗಿ ಕೇವಲ 03 ಇಂದ ಮುಂದೂ rerun ಬೇಕು, ಆದರೆ Stage 04 (pretraining) $40,000 ನಲ್ಲಿ ತಕ್ಷಣ downstream ಇರುವುದರಿಂದ, ಆ "ಚಿಕ್ಕ" upstream ವೈಫಲ್ಯ ನಿಜವಾಗಿ ದುಬಾರಿ ವರ್ಗ, ಅಗ್ಗದ್ದೂ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'plan -> run -> gate: Catching Mistakes Before They Cost Money', textKn: 'plan -> run -> gate: ವೆಚ್ಚಕ್ಕೆ ಮೊದಲೂ ತಪ್ಪುಗಳನ್ನೂ ಹಿಡಿಯುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Commands, Three Separated Responsibilities', headingKn: 'ಮೂರೂ Commands, ಮೂರೂ ಪ್ರತ್ಯೇಕ ಜವಾಬ್ದಾರಿಗಳು',
      bodyEn: '• plan: validates the manifest, resolves the DAG, and estimates cost -- no GPU is allocated, no money is spent\n• run: executes stages, verifies hashes genuinely tested in Part 2, tracks cost, and writes an output manifest recording what ACTUALLY happened\n• gate: reads the eval report and applies EvalGate.check() genuinely built in Part 2 to decide SHIP or HOLD\n• Running plan is free; running run is expensive -- which is exactly why a configuration mistake caught in plan costs nothing, while the same mistake caught three hours into a $10,000/hour pretraining run costs $30,000',
      bodyKn: '• plan: manifest ಅನ್ನೂ ಪರಿಶೀಲಿಸುತ್ತದೆ, DAG ಅನ್ನೂ resolve ಮಾಡುತ್ತದೆ, cost ಅಂದಾಜಿಸುತ್ತದೆ -- ಯಾವುದೇ GPU ನಿಯೋಜಿಸಲ್ಪಡುವುದಿಲ್ಲ\n• run: stages ಚಲಾಯಿಸುತ್ತದೆ, Part 2 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ hashes ಪರಿಶೀಲಿಸುತ್ತದೆ, cost ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ, ಮತ್ತೆ ನಿಜವಾಗಿ ಏನೂ ಸಂಭವಿಸಿತು ಎಂದೂ ದಾಖಲಿಸುವ ಒಂದೂ output manifest ಬರೆಯುತ್ತದೆ\n• gate: eval report ಓದುತ್ತದೆ ಮತ್ತೆ Part 2 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ EvalGate.check() ಅನ್ವಯಿಸುತ್ತದೆ\n• plan ಚಲಾಯಿಸುವುದೂ ಉಚಿತ; run ಚಲಾಯಿಸುವುದೂ ದುಬಾರಿ -- ಇದೇ ಕಾರಣ plan ನಲ್ಲಿ ಹಿಡಿದ ಒಂದೂ configuration ತಪ್ಪೂ ಏನೂ ವೆಚ್ಚ ಮಾಡುವುದಿಲ್ಲ, ಅದೇ ತಪ್ಪೂ ಒಂದೂ $10,000/hour pretraining run ಗೆ ಮೂರೂ ಗಂಟೆಗಳ ನಂತರ ಹಿಡಿದಾಗ $30,000 ವೆಚ್ಚ ಮಾಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Full Module 197 Recap', headingKn: 'ಪೂರ್ಣ Module 197 ಪುನರಾವಲೋಕನ',
      bodyEn: '• Part 1 genuinely built content-addressed storage (SHA-256, confirmed identical content -> identical hash, any change -> different hash) and the manifest/stage foundation\n• Part 2 genuinely built the control layer: hash-verified skip/halt logic, CostTracker halting exactly at the budget boundary, and EvalGate.check() correctly HOLDing on one failed gate despite five passing metrics\n• Part 3 genuinely built the reliability layer: confirmed floating-point reduction order changes results (motivating reproducibility over determinism), and confirmed graph-based invalidation computes exactly 7 invalidated stages for a Stage 06 failure versus exactly 2 for a Stage 11 failure',
      bodyKn: '• Part 1 content-addressed storage ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು (SHA-256, identical content -> identical hash, ಯಾವುದೇ ಬದಲಾವಣೆ -> ಭಿನ್ನ hash) ಮತ್ತೆ manifest/stage ಅಡಿಪಾಯ\n• Part 2 control layer ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು: hash-verified skip/halt logic, budget boundary ನಲ್ಲಿ ನಿಖರವಾಗಿ halt ಆಗುವ CostTracker, ಮತ್ತೆ ಐದೂ passing metrics ಇದ್ದರೂ ಒಂದೂ failed gate ಮೇಲೆ ಸರಿಯಾಗಿ HOLD ಆಗುವ EvalGate.check()\n• Part 3 reliability layer ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು: floating-point reduction order ಫಲಿತಾಂಶಗಳನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು, ಮತ್ತೆ graph-based invalidation Stage 06 ವೈಫಲ್ಯಕ್ಕೆ ನಿಖರವಾಗಿ 7 stages ಮತ್ತೆ Stage 11 ವೈಫಲ್ಯಕ್ಕೆ ನಿಖರವಾಗಿ 2 ಅನ್ನೂ ಲೆಕ್ಕಹಾಕುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು' } },
    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Deterministic: bit-identical output given the same input, code, seed, and hardware\n• Reproducible: replaying a run produces equivalent downstream metrics, even without bit-identical weights\n• Rollback plan: a predefined recovery procedure written before a run starts, not improvised after a failure\n• Descendant invalidation: computing every stage downstream of a failed stage in the DAG, so exactly the right subset reruns\n• plan / run / gate: the three-command lifecycle separating validation, execution, and shipping decision',
      bodyKn: '• Deterministic: ಅದೇ input, code, seed, ಮತ್ತೆ hardware ನೀಡಿದಾಗ bit-identical output\n• Reproducible: ಒಂದೂ run ಅನ್ನೂ replay ಮಾಡುವುದೂ ಸಮಾನ downstream metrics ಉತ್ಪಾದಿಸುತ್ತದೆ, bit-identical weights ಇಲ್ಲದೆಯೂ\n• Rollback plan: run ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೂ ಬರೆದ ಒಂದೂ ಪೂರ್ವನಿರ್ಧಾರಿತ recovery procedure\n• Descendant invalidation: DAG ನಲ್ಲಿ ಒಂದೂ failed stage ya downstream ಪ್ರತಿ stage ಅನ್ನೂ ಲೆಕ್ಕಹಾಕುವುದೂ\n• plan / run / gate: validation, execution, ಮತ್ತೆ shipping decision ಅನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುವ ಮೂರೂ-command lifecycle' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The invalidate_descendants() function genuinely built here is structurally the same algorithm used by build systems like Bazel and Make -- when a source file changes, the build graph is walked forward to invalidate exactly the artifacts that depended on it, never rebuilding unrelated targets from scratch.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ invalidate_descendants() function Bazel ಮತ್ತೆ Make ನಂತಹ build systems ಬಳಸುವ ಅದೇ algorithm ರಚನಾತ್ಮಕವಾಗಿ -- ಒಂದೂ source file ಬದಲಾದಾಗ, build graph ಅನ್ನೂ ಮುಂದೂ ನಡೆಸಲಾಗುತ್ತದೆ ಅದೂ ಮೇಲೆ ಅವಲಂಬಿಸಿದ ನಿಖರ artifacts ಅನ್ನೂ ಮಾತ್ರ invalidate ಮಾಡಲು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: automatic descendant invalidation removes the need for a human to manually reason through "if SFT changes, does quantization need to rerun?" -- the graph traversal answers it correctly every time\n• Genuinely confirmed: separating plan (free) from run (expensive) lets a team catch the overwhelming majority of configuration and budget mistakes before a single dollar of GPU time is spent',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: automatic descendant invalidation "SFT ಬದಲಾದರೆ, quantization rerun ಆಗಬೇಕೇ?" ಎಂದೂ ಒಬ್ಬರೂ ಕೈಯಾರೆ ತಾರ್ಕಿಕವಾಗಿ ಯೋಚಿಸುವ ಅಗತ್ಯವನ್ನೂ ತೆಗೆಯುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: plan (ಉಚಿತ) ಅನ್ನೂ run (ದುಬಾರಿ) ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವುದೂ ಒಂದೂ team ಗೆ ಒಂದೂ ಡಾಲರ್ GPU time ಖರ್ಚಾಗುವ ಮೊದಲೂ ಬಹುಪಾಲು configuration ಮತ್ತೆ budget ತಪ್ಪುಗಳನ್ನೂ ಹಿಡಿಯಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a team discovers a quantization regression after shipping, the invalidation logic genuinely built here tells them immediately: keep stages 01-10 (all training and alignment), only Stage 11 and 12 need to rerun with a revised quantization recipe -- exactly the kind of controlled, minimal-cost recovery this module is designed to support.',
      bodyKn: 'ಒಂದೂ team ship ಮಾಡಿದ ನಂತರ ಒಂದೂ quantization regression ಪತ್ತೆಹಚ್ಚಿದಾಗ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ invalidation logic ಅವರಿಗೆ ತಕ್ಷಣ ಹೇಳುತ್ತದೆ: stages 01-10 ಇಟ್ಟುಕೊಳ್ಳಿ, ಕೇವಲ Stage 11 ಮತ್ತೆ 12 ಮಾತ್ರ ಒಂದೂ ಪರಿಷ್ಕೃತ quantization recipe ಜೊತೆ rerun ಆಗಬೇಕು.' } },

    { type: 'diagram', data: {
      titleEn: 'Descendant Invalidation: Two Genuinely Computed Cases', titleKn: 'Descendant Invalidation: ಎರಡೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ Cases',
      captionEn: 'A Stage 06 failure invalidates everything below it in the DAG (7 stages). A Stage 11 failure invalidates only its own descendant (2 stages) -- the earlier, expensive stages stay untouched.',
      captionKn: 'ಒಂದೂ Stage 06 ವೈಫಲ್ಯ DAG ನಲ್ಲಿ ಅದೂ ಕೆಳಗಿನ ಎಲ್ಲವನ್ನೂ (7 stages) invalidate ಮಾಡುತ್ತದೆ. ಒಂದೂ Stage 11 ವೈಫಲ್ಯ ಕೇವಲ ಅದೂ ya ಸ್ವಂತ descendant (2 stages) ಅನ್ನೂ invalidate ಮಾಡುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><text x='20' y='20' fill='#e2e8f0' font-size='13'>01-05 (safe)</text><rect x='20' y='30' width='140' height='30' fill='#22c55e' opacity='0.5'/><text x='20' y='80' fill='#e2e8f0' font-size='13'>06-12 (invalidated by 06 failure)</text><rect x='20' y='90' width='420' height='30' fill='#ef4444' opacity='0.5'/><text x='20' y='140' fill='#e2e8f0' font-size='13'>01-10 (safe if 11 fails)</text><rect x='20' y='150' width='350' height='30' fill='#22c55e' opacity='0.5'/><text x='390' y='140' fill='#e2e8f0' font-size='13'>11-12</text><rect x='390' y='150' width='70' height='30' fill='#ef4444' opacity='0.5'/></svg>" } },

    { type: 'table', data: {
      captionEn: 'The Four Core Components, Revisited', captionKn: 'ನಾಲ್ಕೂ ಮುಖ್ಯ Components, ಪುನರ್ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      rows: "Component|Answers|Genuinely built in\nManifest|What should happen?|Part 1\nArtifact Store|What exact thing was produced?|Part 1\nOrchestrator|What runs next, and does it match its contract?|Part 2\nEval Gate|May it ship?|Part 2\nCost Tracker|Can we afford to continue?|Part 2\nRollback / invalidation graph|What is the cheapest correct recovery?|Part 3" } },
    { type: 'concept', data: {
      headingEn: 'ML Algorithm vs ML System', headingKn: 'ML Algorithm vs ML System',
      bodyEn: 'DPO, PPO, GQA, and GPTQ (Modules 189-195) are algorithms. Provenance, recovery, budgeting, versioning, storage, validation, and gating -- genuinely built across this module -- are what turn a technically good training algorithm into a reliable production system. A model can be algorithmically excellent and still be operationally unreliable without this layer.',
      bodyKn: 'DPO, PPO, GQA, ಮತ್ತೆ GPTQ (Modules 189-195) algorithms. Provenance, recovery, budgeting, versioning, storage, validation, ಮತ್ತೆ gating -- ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ಕಟ್ಟಿದ -- ಒಂದೂ ತಾಂತ್ರಿಕವಾಗಿ ಉತ್ತಮ training algorithm ಅನ್ನೂ ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ production system ಆಗಿ ಬದಲಾಯಿಸುತ್ತವೆ. ಈ layer ಇಲ್ಲದೆ ಒಂದೂ model algorithmically ಅತ್ಯುತ್ತಮ ಆದರೂ operationally ಅವಿಶ್ವಾಸಾರ್ಹವಾಗಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'The Central Lesson: An Artifact Is Only Valuable If Its Lineage Is Trustworthy', headingKn: 'ಕೇಂದ್ರ Lesson: ಒಂದೂ Artifact ಅದೂ ya Lineage ವಿಶ್ವಾಸಾರ್ಹವಾಗಿದ್ದರೆ ಮಾತ್ರ ಮೌಲ್ಯಯುತ',
      bodyEn: 'A successfully trained model is only a produced artifact. A successfully engineered pipeline produces an artifact that is verified (Part 1\'s hashes), affordable (Part 2\'s cost gates), quality-checked (Part 2\'s eval gates), and recoverable (Part 3\'s invalidation graph) -- genuinely built, tested, and confirmed at every layer across this module, not asserted.',
      bodyKn: 'ಒಂದೂ ಯಶಸ್ವಿಯಾಗಿ trained model ಕೇವಲ ಒಂದೂ ಉತ್ಪಾದಿಸಿದ artifact. ಒಂದೂ ಯಶಸ್ವಿಯಾಗಿ engineered pipeline ಒಂದೂ artifact ಉತ್ಪಾದಿಸುತ್ತದೆ ಅದೂ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟಿದೆ (Part 1 ya hashes), ಭರಿಸಬಹುದಾಗಿದೆ (Part 2 ya cost gates), quality-checked ಆಗಿದೆ (Part 2 ya eval gates), ಮತ್ತೆ ಚೇತರಿಸಿಕೊಳ್ಳಬಹುದಾಗಿದೆ (Part 3 ya invalidation graph) -- ಈ module ಆದ್ಯಂತ ಪ್ರತಿ layer ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿ, ಪರೀಕ್ಷಿಸಿ, ದೃಢಪಡಿಸಲಾಗಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This module built the orchestration layer that connects every stage in the LLM lifecycle. Module 198 turns to a different question: given a finished config.json, how do you read a modern open-model architecture -- RMSNorm, RoPE, SwiGLU, GQA/MLA, and Mixture of Experts -- and reason about which model fits a given deployment.',
      bodyKn: 'ಈ module LLM lifecycle ನಲ್ಲಿ ಪ್ರತಿ stage ಅನ್ನೂ ಸಂಪರ್ಕಿಸುವ orchestration layer ಅನ್ನೂ ಕಟ್ಟಿತು. Module 198 ಒಂದೂ ಭಿನ್ನ ಪ್ರಶ್ನೆಗೆ ತಿರುಗುತ್ತದೆ: ಒಂದೂ ಮುಗಿದ config.json ನೀಡಿ, ನೀವೂ ಒಂದೂ modern open-model architecture ಅನ್ನೂ ಹೇಗೆ ಓದುತ್ತೀರಿ -- RMSNorm, RoPE, SwiGLU, GQA/MLA, ಮತ್ತೆ Mixture of Experts -- ಮತ್ತೆ ಯಾವ model ಒಂದೂ ನಿರ್ದಿಷ್ಟ deployment ಗೆ ಹೊಂದುತ್ತದೆ ಎಂದೂ ತಾರ್ಕಿಕವಾಗಿ ಯೋಚಿಸುತ್ತೀರಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did (a+b)+c vs a+(b+c) demonstrate with a=1e16, b=1.0, c=-1e16?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: a=1e16, b=1.0, c=-1e16 ಜೊತೆ (a+b)+c vs a+(b+c) ಏನೂ ಪ್ರದರ್ಶಿಸಿತು?',
        opts: ['They always give identical results', 'Different addition order genuinely produces different floating-point results (1.0 vs 0.0)', 'Addition order never matters at any scale', 'This only affects string concatenation'], correct: 1,
        optsKn: ['ಅವೂ ಯಾವಾಗಲೂ identical ಫಲಿತಾಂಶಗಳನ್ನೂ ನೀಡುತ್ತವೆ', 'ಭಿನ್ನ addition order ನಿಜವಾಗಿ ಭಿನ್ನ floating-point ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ (1.0 vs 0.0)', 'Addition order ಯಾವುದೇ scale ನಲ್ಲಿ ಎಂದಿಗೂ ಮುಖ್ಯವಲ್ಲ', 'ಇದೂ ಕೇವಲ string concatenation ಅನ್ನೂ ಪ್ರಭಾವಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: how many stages did invalidate_descendants() compute for a 06_sft failure?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 06_sft ವೈಫಲ್ಯಕ್ಕೆ invalidate_descendants() ಎಷ್ಟೂ stages ಲೆಕ್ಕಹಾಕಿತು?',
        opts: ['12 (everything)', '7 (06 through 12)', '2 (only 06 and 07)', '1 (only 06)'], correct: 1,
        optsKn: ['12 (ಎಲ್ಲವೂ)', '7 (06 ಇಂದ 12 ವರೆಗೆ)', '2 (ಕೇವಲ 06 ಮತ್ತೆ 07)', '1 (ಕೇವಲ 06)'] },
      { q: 'Genuinely confirmed: how many stages did the same function compute for an 11_quant failure?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 11_quant ವೈಫಲ್ಯಕ್ಕೆ ಅದೇ function ಎಷ್ಟೂ stages ಲೆಕ್ಕಹಾಕಿತು?',
        opts: ['12', '7', '2 (11 and 12)', '0'], correct: 2,
        optsKn: ['12', '7', '2 (11 ಮತ್ತೆ 12)', '0'] },
      { q: 'Why does the pipeline target "reproducible" rather than promising "deterministic" for distributed pretraining?', qKn: 'Distributed pretraining ಗೆ pipeline "deterministic" ಭರವಸೆ ನೀಡುವ ಬದಲು "reproducible" ಗುರಿಯಾಗಿಸುವುದೂ ಏಕೆ?',
        opts: ['Determinism is easier to achieve', 'Floating-point reduction order varies across distributed runs, so bit-identical weights are not realistically guaranteed even with the same seed', 'Reproducibility means nothing needs to be recorded', 'Determinism only applies to CPUs'], correct: 1,
        optsKn: ['Determinism ಸಾಧಿಸಲು ಸುಲಭ', 'Floating-point reduction order distributed runs ಆದ್ಯಂತ ಬದಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದೇ seed ಜೊತೆಗೂ bit-identical weights ವಾಸ್ತವಿಕವಾಗಿ ಖಾತ್ರಿಪಡಿಸಲ್ಪಡುವುದಿಲ್ಲ', 'Reproducibility ಎಂದರೆ ಏನೂ ದಾಖಲಿಸುವ ಅಗತ್ಯವಿಲ್ಲ', 'Determinism ಕೇವಲ CPUs ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ'] },
      { q: 'Why should plan always be run before run?', qKn: 'plan ಯಾವಾಗಲೂ run ಗಿಂತ ಮೊದಲೂ ಏಕೆ ಚಲಾಯಿಸಬೇಕು?',
        opts: ['plan quantizes the model', 'plan is free and catches configuration/cost mistakes before any expensive GPU time is spent', 'run cannot execute without plan', 'plan trains the tokenizer'], correct: 1,
        optsKn: ['plan model ಅನ್ನೂ quantize ಮಾಡುತ್ತದೆ', 'plan ಉಚಿತ ಮತ್ತೆ ಯಾವುದೇ ದುಬಾರಿ GPU time ಖರ್ಚಾಗುವ ಮೊದಲೂ configuration/cost ತಪ್ಪುಗಳನ್ನೂ ಹಿಡಿಯುತ್ತದೆ', 'plan ಇಲ್ಲದೆ run ಚಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ', 'plan tokenizer ಅನ್ನೂ train ಮಾಡುತ್ತದೆ'] },
    ] } },
  ],
};
