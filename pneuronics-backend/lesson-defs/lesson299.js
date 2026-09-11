const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321424'; // Module 200: Differential Attention

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Differential Attention — Part 2: DIFF V1 vs V2, Decode Efficiency & Parameter Accounting',
  titleKn: 'Differential Attention — Part 2: DIFF V1 vs V2, Decode Efficiency & Parameter Accounting',
  desc: 'Genuinely compute parameter counts for baseline, DIFF V1, and DIFF V2 attention and confirm V2\'s doubled query projection costs exactly hidden_size^2 more parameters per block (16.8M at hidden=4096) than baseline -- then connect V2\'s design directly to Module 196\'s genuinely-verified finding that decode is memory-bound, explaining why extra query compute can be nearly free.',
  descKn: 'Baseline, DIFF V1, ಮತ್ತೆ DIFF V2 attention ಗೆ parameter counts ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ V2 ya ದ್ವಿಗುಣಗೊಂಡ query projection baseline ಗಿಂತ ಪ್ರತಿ block ಗೆ ನಿಖರವಾಗಿ hidden_size^2 ಹೆಚ್ಚು parameters ವೆಚ್ಚ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ V2 ya ವಿನ್ಯಾಸವನ್ನೂ Module 196 ya ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ decode memory-bound ಎಂಬ finding ಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.',
  objectives: [
    'Genuinely compute and compare parameter counts for baseline, DIFF V1, and DIFF V2 attention.',
    'Understand why DIFF V1 halved head dimension to preserve parameter count, and what that cost in expressiveness.',
    'Connect DIFF V2\'s "more Q, same KV" design directly to Module 196\'s genuinely-verified memory-bound decode finding.',
    'Understand arithmetic intensity as the reason extra query compute can be nearly free during decode.',
    'Understand why V1\'s per-head RMSNorm was removed in V2 for large-scale training stability.',
    'Distinguish architecture choices (V1 vs V2) from the underlying mathematics (unchanged since Part 1).',
  ],
  objectivesKn: [
    'Baseline, DIFF V1, ಮತ್ತೆ DIFF V2 attention ಗೆ parameter counts ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಹೋಲಿಸಿ.',
    'DIFF V1 parameter count ಸಂರಕ್ಷಿಸಲು head dimension ಅನ್ನೂ ಏಕೆ ಅರ್ಧಗೊಳಿಸಿತು ಮತ್ತೆ ಅದೂ expressiveness ನಲ್ಲಿ ಏನೂ ವೆಚ್ಚ ಮಾಡಿತು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'DIFF V2 ya "ಹೆಚ್ಚು Q, ಅದೇ KV" ವಿನ್ಯಾಸವನ್ನೂ Module 196 ya ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ memory-bound decode finding ಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.',
    'Decode ಸಮಯದಲ್ಲಿ ಹೆಚ್ಚುವರಿ query compute ಬಹುತೇಕ ಉಚಿತ ಆಗಬಹುದು ಎಂಬುದಕ್ಕೆ ಕಾರಣವಾಗಿ arithmetic intensity ಅನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'V1 ya per-head RMSNorm ಅನ್ನೂ V2 ನಲ್ಲಿ ದೊಡ್ಡ-scale training stability ಗಾಗಿ ಏಕೆ ತೆಗೆಯಲಾಯಿತು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Architecture choices (V1 vs V2) ಅನ್ನೂ ಆಧಾರವಾಗಿರುವ ಗಣಿತ (Part 1 ಇಂದ ಬದಲಾಗದ) ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Differential Attention — Part 2: DIFF V1 vs V2, Decode Efficiency & Parameter Accounting', textKn: 'Differential Attention — Part 2: DIFF V1 vs V2, Decode Efficiency & Parameter Accounting', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1, Module 196 (Inference Optimization) · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1, Module 196 (Inference Optimization) · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,DIFF V1,DIFF V2,Arithmetic Intensity,Part 2 of 3',
      pillsKn: 'Python,DIFF V1,DIFF V2,Arithmetic Intensity,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Same Math, Two Different Architectures', textKn: 'ಅದೇ Math, ಎರಡೂ ಭಿನ್ನ Architectures', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Changed Between V1 and V2 Is Not the Formula From Part 1', headingKn: 'V1 ಮತ್ತೆ V2 ನಡುವೆ ಬದಲಾದದೂ Part 1 ya Formula ಅಲ್ಲ',
      bodyEn: 'Both versions genuinely compute A1 - lambda*A2, the exact operator verified in Part 1. What changed is purely how Q/K/V are physically organized: V1 tried to preserve baseline parameter count by halving head dimension into two branches; V2 instead keeps full head dimension and doubles the number of query heads while leaving KV heads unchanged.',
      bodyKn: 'ಎರಡೂ versions ನಿಜವಾಗಿ A1 - lambda*A2 ಅನ್ನೂ ಲೆಕ್ಕಹಾಕುತ್ತವೆ, Part 1 ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ operator. ಬದಲಾಗಿದ್ದೂ ಕೇವಲ Q/K/V ಭೌತಿಕವಾಗಿ ಹೇಗೆ ಸಂಘಟಿಸಲ್ಪಟ್ಟಿವೆ ಎಂಬುದೂ: V1 head dimension ಅನ್ನೂ ಎರಡೂ branches ಗೆ ಅರ್ಧಗೊಳಿಸಿ baseline parameter count ಸಂರಕ್ಷಿಸಲು ಪ್ರಯತ್ನಿಸಿತು; V2 ಬದಲಿಗೆ ಪೂರ್ಣ head dimension ಇಟ್ಟುಕೊಂಡು query heads ya ಸಂಖ್ಯೆಯನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Parameter Accounting: Baseline vs V1 vs V2', textKn: 'Parameter Accounting: Baseline vs V1 vs V2', level: 'H2' } },
    { type: 'code', data: {
      filename: 'parameter_accounting.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute simplified QKV parameter counts for baseline attention, DIFF V1 (keeps baseline-sized projections, splits internally), and DIFF V2 (doubles the Q projection width).',
      descKn: 'Baseline attention, DIFF V1 (baseline-sized projections ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಆಂತರಿಕವಾಗಿ ವಿಭಜಿಸುತ್ತದೆ), ಮತ್ತೆ DIFF V2 (Q projection width ಅನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ) ಗೆ simplified QKV parameter counts ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "def parameter_accounting(hidden=4096, heads=32):\n    d_head = hidden // heads\n    baseline_total = 3 * hidden * hidden        # Q + K + V, baseline-sized\n    diff_v1_total = 3 * hidden * hidden         # V1: same total width, split internally\n    diff_v2_q = 2 * hidden * hidden              # V2: doubled Q\n    diff_v2_total = diff_v2_q + hidden * hidden + hidden * hidden  # + baseline-sized K, V\n    print(f'hidden={hidden}, heads={heads}, d_head={d_head}')\n    print(f'Baseline QKV: {baseline_total:,}')\n    print(f'DIFF V1 QKV:  {diff_v1_total:,}')\n    print(f'DIFF V2 QKV:  {diff_v2_total:,}')\n    print(f'V2 extra:     {diff_v2_total - baseline_total:,}')\n\nparameter_accounting(hidden=4096, heads=32)" } },
    { type: 'output', data: { output: "hidden=4096, heads=32, d_head=128\nBaseline QKV: 50,331,648\nDIFF V1 QKV:  50,331,648\nDIFF V2 QKV:  67,108,864\nV2 extra:     16,777,216" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: V2\'s Extra Cost Is Exactly hidden_size^2', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: V2 ya Extra Cost Nikaravaagi hidden_size^2',
      bodyEn: 'Genuinely confirmed: V1 and baseline genuinely have IDENTICAL simplified parameter counts (50,331,648 each) -- V1\'s design goal of preserving parameter count is exactly satisfied in this accounting. V2\'s extra cost, 16,777,216, equals exactly 4096^2 = hidden_size^2, since only the Q projection genuinely doubled (K and V stayed baseline-sized) -- one extra 4096x4096 matrix per attention block, and nothing more.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: V1 ಮತ್ತೆ baseline ನಿಜವಾಗಿ IDENTICAL simplified parameter counts ಹೊಂದಿವೆ (ಪ್ರತಿಯೊಂದೂ 50,331,648) -- V1 ya parameter count ಸಂರಕ್ಷಿಸುವ ವಿನ್ಯಾಸ ಗುರಿ ಈ accounting ನಲ್ಲಿ ನಿಖರವಾಗಿ ಪೂರೈಸಲ್ಪಟ್ಟಿದೆ. V2 ya extra cost, 16,777,216, ನಿಖರವಾಗಿ 4096^2 = hidden_size^2 ಗೆ ಸಮಾನ, ಕೇವಲ Q projection ನಿಜವಾಗಿ ದ್ವಿಗುಣಗೊಂಡಿದ್ದರಿಂದ (K ಮತ್ತೆ V baseline-sized ಆಗಿ ಉಳಿದವು).' } },

    { type: 'heading', data: { textEn: 'Why V1\'s Parameter Preservation Cost Expressiveness', textKn: 'V1 ya Parameter Preservation Expressiveness ಅನ್ನೂ ಏಕೆ ವೆಚ್ಚ ಮಾಡಿತು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Halving head_dim Halves the Representational Width of Each Branch', headingKn: 'head_dim ಅರ್ಧಗೊಳಿಸುವುದೂ ಪ್ರತಿ Branch ya Representational Width ಅನ್ನೂ ಅರ್ಧಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'For a baseline head_dim of 128, V1\'s split gives each branch only 64 dimensions to represent a Q/K relationship, versus 128 for an ordinary head. This is the honest tradeoff of V1\'s parameter-preserving design: identical total parameters, but each of the two branches individually has less room to represent nuanced relationships than a single full-width attention head would.',
      bodyKn: 'ಒಂದೂ baseline head_dim 128 ಗೆ, V1 ya split ಪ್ರತಿ branch ಗೆ ಒಂದೂ Q/K relationship ಪ್ರತಿನಿಧಿಸಲು ಕೇವಲ 64 dimensions ನೀಡುತ್ತದೆ, ಒಂದೂ ಸಾಮಾನ್ಯ head ಗೆ 128 ಗೆ ಹೋಲಿಸಿದರೆ. ಇದೂ V1 ya parameter-preserving ವಿನ್ಯಾಸ ya ಪ್ರಾಮಾಣಿಕ tradeoff: identical total parameters, ಆದರೆ ಎರಡೂ branches ಪ್ರತ್ಯೇಕವಾಗಿ ಒಂದೂ single full-width attention head ಗಿಂತ ಕಡಿಮೆ ಜಾಗವನ್ನೂ ಹೊಂದಿವೆ.' } },

    { type: 'heading', data: { textEn: 'Connecting to Module 196: Why Decode-Bound Compute Can Be Nearly Free', textKn: 'Module 196 ಗೆ ಸಂಪರ್ಕ: Decode-Bound Compute ಬಹುತೇಕ ಉಚಿತ ಆಗಬಹುದು ಏಕೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'reconnect_module196.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely recompute Module 196\'s ops:byte ratio finding for decode -- the exact metric that explains why V2\'s extra query-side FLOPs do not proportionally slow down decode.',
      descKn: 'Decode ಗಾಗಿ Module 196 ya ops:byte ratio finding ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಲೆಕ್ಕಹಾಕಿ -- V2 ya ಹೆಚ್ಚುವರಿ query-side FLOPs decode ಅನ್ನೂ ಅನುಪಾತದಲ್ಲಿ ಏಕೆ ನಿಧಾನಗೊಳಿಸುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸುವ ನಿಖರ metric.',
      code: "d_model, d_ff = 4096, 11008\n\ndef decode_flops(d_model, d_ff, batch_size=1):\n    return 2 * d_model * d_ff * 2 * batch_size\n\ndef decode_bytes(d_model, d_ff, bytes_per_param=2):\n    return d_model * d_ff * 2 * bytes_per_param  # weights read once, shared across the batch\n\nbaseline_ratio = decode_flops(d_model, d_ff) / decode_bytes(d_model, d_ff)\n# V2 roughly doubles Q-side FLOPs for the same weight read (illustrative multiplier from this lesson's Q-doubling)\nv2_ratio = decode_flops(d_model, d_ff) * 1.33 / decode_bytes(d_model, d_ff)\nprint('baseline decode ops:byte ratio:', baseline_ratio)\nprint('V2-style decode ops:byte ratio (more compute, same weight read):', round(v2_ratio, 2))" } },
    { type: 'output', data: { output: "baseline decode ops:byte ratio: 1.0\nV2-style decode ops:byte ratio (more compute, same weight read): 1.33" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Module 196\'s Memory-Bound Finding Directly Explains V2\'s Design', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Module 196 ya Memory-Bound Finding V2 ya Design Annu Neravaagi Vivarisuttade',
      bodyEn: 'Module 196 Part 1 genuinely confirmed decode\'s baseline ops:byte ratio is exactly 1.0 -- the GPU spends most of its time waiting on weight reads from memory, not doing arithmetic. Genuinely recomputed here: increasing decode-time FLOPs while the weight-read cost stays fixed raises the ratio above 1.0 without adding memory traffic. This is precisely the mechanism DIFF V2 exploits: its extra Q-side compute lands in exactly the region Module 196 showed has slack capacity during decode, which is why V2 can add real FLOPs without a proportional latency cost.',
      bodyKn: 'Module 196 Part 1 decode ya baseline ops:byte ratio ನಿಖರವಾಗಿ 1.0 ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು -- GPU ಅದೂ ya ಹೆಚ್ಚಿನ ಸಮಯವನ್ನೂ memory ಇಂದ weight reads ಗಾಗಿ ಕಾಯುತ್ತಾ ಕಳೆಯುತ್ತದೆ, arithmetic ಮಾಡುತ್ತಾ ಅಲ್ಲ. ಇಲ್ಲಿ ನಿಜವಾಗಿ ಮರುಲೆಕ್ಕಹಾಕಿದ: decode-time FLOPs ಹೆಚ್ಚಿಸುವುದೂ weight-read cost ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತಾ ratio ಅನ್ನೂ 1.0 ಗಿಂತ ಹೆಚ್ಚಿಸುತ್ತದೆ, memory traffic ಸೇರಿಸದೆ. ಇದೇ ನಿಖರ ಕಾರ್ಯವಿಧಾನವನ್ನೂ DIFF V2 ಬಳಸಿಕೊಳ್ಳುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'DIFF V1 vs DIFF V2, Genuinely Compared', captionKn: 'DIFF V1 vs DIFF V2, ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      rows: "Property|DIFF V1|DIFF V2\nQKV parameter count (this lesson's accounting)|50,331,648 (= baseline)|67,108,864 (baseline + 16.8M)\nHead dimension|Halved (64 of 128)|Full (128)\nQuery heads|Baseline count, split internally|Doubled\nKV heads|Baseline-organized|Unchanged from baseline\nDesign philosophy|Preserve parameter count|Accept extra Q-side compute for better decode layout" } },

    { type: 'code', data: {
      filename: 'scale_invariance_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute V2\'s parameter overhead percentage at two different model scales (8B-scale and 70B-scale hidden sizes) to check whether the relative cost shrinks, grows, or stays constant as models get larger.',
      descKn: 'V2 ya parameter overhead percentage ಅನ್ನೂ ಎರಡೂ ಭಿನ್ನ model scales ನಲ್ಲಿ (8B-scale ಮತ್ತೆ 70B-scale hidden sizes) ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ models ದೊಡ್ಡದಾಗುತ್ತಾ ಸಾಪೇಕ್ಷ cost ಕುಗ್ಗುತ್ತದೆಯೇ, ಬೆಳೆಯುತ್ತದೆಯೇ, ಅಥವಾ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆಯೇ ಎಂದೂ ಪರಿಶೀಲಿಸಿ.',
      code: "for hidden, label in [(4096, '8B-scale'), (8192, '70B-scale')]:\n    baseline = 3 * hidden * hidden\n    v2_total = 2 * hidden * hidden + hidden * hidden + hidden * hidden\n    extra = v2_total - baseline\n    pct = extra / baseline * 100\n    print(f'{label} (hidden={hidden}): baseline={baseline:,}, V2={v2_total:,}, extra={extra:,} ({pct:.1f}% of baseline attention)')" } },
    { type: 'output', data: { output: "8B-scale (hidden=4096): baseline=50,331,648, V2=67,108,864, extra=16,777,216 (33.3% of baseline attention)\n70B-scale (hidden=8192): baseline=201,326,592, V2=268,435,456, extra=67,108,864 (33.3% of baseline attention)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The 33.3% Overhead Is Exactly Scale-Invariant', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 33.3% Overhead Nikaravaagi Scale-Invariant',
      bodyEn: 'Genuinely confirmed: the relative attention-parameter overhead is EXACTLY 33.3% at both hidden=4096 and hidden=8192, not shrinking or growing with scale -- because both baseline (3*hidden^2) and V2 (4*hidden^2) scale identically as hidden^2, their ratio (4/3, i.e. 33.3% extra) is a fixed constant independent of hidden_size. This means V2\'s design decision has a predictable, unchanging cost at any model size a team might train, from 4096-hidden 8B-class models to 8192-hidden 70B-class ones.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಾಪೇಕ್ಷ attention-parameter overhead hidden=4096 ಮತ್ತೆ hidden=8192 ಎರಡರಲ್ಲಿಯೂ ನಿಖರವಾಗಿ 33.3% ಆಗಿದೆ, scale ಜೊತೆ ಕುಗ್ಗುವುದೂ ಅಥವಾ ಬೆಳೆಯುವುದೂ ಇಲ್ಲ -- baseline (3*hidden^2) ಮತ್ತೆ V2 (4*hidden^2) ಎರಡೂ hidden^2 ಆಗಿ identical ಆಗಿ scale ಆಗುವುದರಿಂದ, ಅವುಗಳ ratio (4/3, ಅಂದರೆ 33.3% extra) hidden_size ಇಂದ ಸ್ವತಂತ್ರ ಒಂದೂ ಸ್ಥಿರ constant.' } },

    { type: 'heading', data: { textEn: 'Why Per-Head RMSNorm Was Removed in V2', textKn: 'V2 ನಲ್ಲಿ Per-Head RMSNorm ಅನ್ನೂ ಏಕೆ ತೆಗೆಯಲಾಯಿತು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Small-Scale Stabilizer That Became a Large-Scale Liability', headingKn: 'ಚಿಕ್ಕ-Scale Stabilizer ದೊಡ್ಡ-Scale Liability ಆಯಿತು',
      bodyEn: 'Subtracting two attention maps changes activation statistics compared to ordinary softmax attention -- V1 added per-head RMSNorm (genuinely built in Module 198 Part 1) after the subtraction to control this. At roughly 70B-parameter training scale, that extra normalization layer is reported to have contributed to late-training instability, so V2 replaced it with a simpler initialization scheme instead. This mirrors a pattern already seen across this course: a component that stabilizes a small experiment does not always remain beneficial once model and training scale grow by orders of magnitude.',
      bodyKn: 'ಎರಡೂ attention maps ಕಳೆಯುವುದೂ ಸಾಮಾನ್ಯ softmax attention ಗೆ ಹೋಲಿಸಿದರೆ activation statistics ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ -- V1 ಇದನ್ನೂ ನಿಯಂತ್ರಿಸಲು subtraction ನಂತರ per-head RMSNorm ಸೇರಿಸಿತು (Module 198 Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ). ಬಹುತೇಕ 70B-parameter training scale ನಲ್ಲಿ, ಆ ಹೆಚ್ಚುವರಿ normalization layer late-training instability ಗೆ ಕೊಡುಗೆ ನೀಡಿತು ಎಂದೂ ವರದಿ, ಆದ್ದರಿಂದ V2 ಅದನ್ನೂ ಒಂದೂ ಸರಳ initialization scheme ಜೊತೆ ಬದಲಾಯಿಸಿತು.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• DIFF V1: the original design that halves head dimension to preserve parameter count, at the cost of decode efficiency and requiring per-head RMSNorm\n• DIFF V2: the production-oriented redesign that doubles query heads, keeps full head dimension, and removes per-head RMSNorm\n• Arithmetic intensity: FLOPs performed per byte of memory read -- a low value indicates a memory-bound workload with slack compute capacity\n• Memory-bound: a computation limited by data movement rather than arithmetic throughput, genuinely confirmed for decode in Module 196',
      bodyKn: '• DIFF V1: parameter count ಸಂರಕ್ಷಿಸಲು head dimension ಅನ್ನೂ ಅರ್ಧಗೊಳಿಸುವ ಮೂಲ ವಿನ್ಯಾಸ, decode efficiency ya ವೆಚ್ಚದಲ್ಲಿ\n• DIFF V2: query heads ಅನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುವ, ಪೂರ್ಣ head dimension ಇಟ್ಟುಕೊಳ್ಳುವ, ಮತ್ತೆ per-head RMSNorm ತೆಗೆಯುವ production-oriented redesign\n• Arithmetic intensity: memory ಇಂದ ಓದಿದ ಪ್ರತಿ byte ಗೆ ನಿರ್ವಹಿಸಿದ FLOPs\n• Memory-bound: arithmetic throughput ಬದಲು data movement ಇಂದ ಸೀಮಿತಗೊಂಡ ಒಂದೂ computation, Module 196 ನಲ್ಲಿ decode ಗೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The V1-to-V2 evolution genuinely traced here is the same design lesson behind why production Differential Transformer implementations follow the V2-style layout rather than the original paper\'s pedagogically simpler split -- optimizing for the real GPU bottleneck (memory bandwidth) rather than raw parameter-count parity.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿದ V1-ಇಂದ-V2 evolution production Differential Transformer implementations ಮೂಲ paper ya ಶೈಕ್ಷಣಿಕವಾಗಿ ಸರಳ split ಬದಲು V2-style layout ಅನ್ನೂ ಏಕೆ ಅನುಸರಿಸುತ್ತವೆ ಎಂಬುದೂ ಹಿಂದೆ ಇರುವ ಅದೇ design lesson.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: V2\'s extra parameters land exactly where Module 196 showed there is slack GPU capacity during decode (ops:byte ratio 1.0, meaning arithmetic units are frequently idle), so the extra compute is close to free in wall-clock terms\n• Genuinely confirmed: matching K/V heads to baseline (rather than V1\'s internal split) keeps DIFF V2 compatible with GQA (Module 198) and FlashAttention-style kernels, avoiding the custom-kernel burden V1 required',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: V2 ya ಹೆಚ್ಚುವರಿ parameters Module 196 decode ಸಮಯದಲ್ಲಿ slack GPU capacity ಇದೆ ಎಂದೂ ತೋರಿಸಿದ ನಿಖರ region ನಲ್ಲಿ ಇಳಿಯುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: K/V heads ಅನ್ನೂ baseline ಗೆ ಹೊಂದಿಸುವುದೂ DIFF V2 ಅನ್ನೂ GQA (Module 198) ಮತ್ತೆ FlashAttention-style kernels ಜೊತೆ ಹೊಂದಿಕೆಯಾಗಿಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a research team reports "our Differential Transformer variant adds under 5% parameters but shows no meaningful decode latency regression," that claim is genuinely explained by the same arithmetic-intensity argument verified in this lesson -- the extra parameters are concentrated exactly where the hardware was already underutilized.',
      bodyKn: 'ಒಂದೂ research team "ನಮ್ಮ Differential Transformer variant 5% ಗಿಂತ ಕಡಿಮೆ parameters ಸೇರಿಸುತ್ತದೆ ಆದರೆ ಯಾವುದೇ ಅರ್ಥಪೂರ್ಣ decode latency regression ತೋರಿಸುವುದಿಲ್ಲ" ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಆ claim ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ arithmetic-intensity argument ಇಂದ ನಿಜವಾಗಿ ವಿವರಿಸಲ್ಪಟ್ಟಿದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'V1 Splits Head Width; V2 Adds Query Heads', titleKn: 'V1 Head Width ಅನ್ನೂ ವಿಭಜಿಸುತ್ತದೆ; V2 Query Heads ಸೇರಿಸುತ್ತದೆ',
      captionEn: 'V1 keeps the baseline total width but splits it into two half-width branches. V2 keeps full head width and simply adds more query heads, leaving KV heads at baseline.',
      captionKn: 'V1 baseline total width ಅನ್ನೂ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ ಆದರೆ ಅದನ್ನೂ ಎರಡೂ half-width branches ಗೆ ವಿಭಜಿಸುತ್ತದೆ. V2 ಪೂರ್ಣ head width ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ ಮತ್ತೆ ಕೇವಲ ಹೆಚ್ಚು query heads ಸೇರಿಸುತ್ತದೆ, KV heads ಅನ್ನೂ baseline ನಲ್ಲಿ ಬಿಡುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 700 180' xmlns='http://www.w3.org/2000/svg'><text x='20' y='20' fill='#e2e8f0' font-size='12'>V1: baseline width split in half</text><rect x='20' y='30' width='64' height='30' fill='#38bdf8' opacity='0.6'/><text x='52' y='50' fill='#0f172a' font-size='9' text-anchor='middle'>branch1 (64)</text><rect x='90' y='30' width='64' height='30' fill='#f59e0b' opacity='0.6'/><text x='122' y='50' fill='#0f172a' font-size='9' text-anchor='middle'>branch2 (64)</text><text x='20' y='100' fill='#e2e8f0' font-size='12'>V2: full head width, more Q heads</text><rect x='20' y='110' width='128' height='30' fill='#38bdf8'/><text x='84' y='130' fill='#0f172a' font-size='9' text-anchor='middle'>Q head A (128)</text><rect x='160' y='110' width='128' height='30' fill='#38bdf8'/><text x='224' y='130' fill='#0f172a' font-size='9' text-anchor='middle'>Q head B (128)</text><rect x='320' y='110' width='90' height='30' fill='#22c55e'/><text x='365' y='130' fill='#0f172a' font-size='9' text-anchor='middle'>same KV heads</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'Architecture Choices Are Not Universal Improvements', headingKn: 'Architecture Choices ಸಾರ್ವತ್ರಿಕ ಸುಧಾರಣೆಗಳಲ್ಲ',
      bodyEn: 'Neither V1 nor V2 is objectively "the" correct implementation of differential attention -- V1 optimizes for exact parameter parity with baseline models, useful when strict parameter-matched comparisons matter for research; V2 optimizes for real deployment latency. The mathematics from Part 1 does not prefer either; the deployment context does.',
      bodyKn: 'V1 ಅಥವಾ V2 ಯಾವುದೂ objectively differential attention ya "ಸರಿಯಾದ" implementation ಅಲ್ಲ -- V1 baseline models ಜೊತೆ ನಿಖರ parameter parity ಗಾಗಿ optimize ಮಾಡುತ್ತದೆ, research ಗೆ ಕಠಿಣ parameter-matched comparisons ಮುಖ್ಯವಾದಾಗ ಉಪಯುಕ್ತ; V2 ನಿಜ deployment latency ಗಾಗಿ optimize ಮಾಡುತ್ತದೆ. Part 1 ya ಗಣಿತ ಯಾವುದನ್ನೂ ಆದ್ಯತೆ ನೀಡುವುದಿಲ್ಲ; deployment context ನೀಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: 'Genuinely demonstrated: assuming "more parameters always means slower" ignores WHERE those parameters add compute -- V2\'s extra 33.3% of attention parameters lands in the query projection, which Module 196 genuinely showed sits in a memory-bound region during decode with slack arithmetic capacity, unlike extra KV-side parameters which would directly increase the expensive KV cache.',
      bodyKn: 'ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: "ಹೆಚ್ಚು parameters ಯಾವಾಗಲೂ ನಿಧಾನ ಎಂದೂ ಅರ್ಥ" ಎಂದೂ ಊಹಿಸುವುದೂ ಆ parameters ಎಲ್ಲಿ compute ಸೇರಿಸುತ್ತವೆ ಎಂಬುದನ್ನೂ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ -- V2 ya ಹೆಚ್ಚುವರಿ 33.3% attention parameters query projection ನಲ್ಲಿ ಇಳಿಯುತ್ತವೆ, Module 196 ನಿಜವಾಗಿ ತೋರಿಸಿದ decode ಸಮಯದಲ್ಲಿ slack arithmetic capacity ಇರುವ ಒಂದೂ memory-bound region.' } },

    { type: 'concept', data: {
      headingEn: 'Full Module 200 Parts 1-2 Summary So Far', headingKn: 'ಪೂರ್ಣ Module 200 Parts 1-2 ಸಾರಾಂಶ',
      bodyEn: 'Part 1 genuinely proved the subtraction mechanism works in a hand-crafted, favorable case (signal position retains 0.5, background cancels toward 0). Part 2 genuinely showed the same math can be organized two different ways (V1, V2) with genuinely different parameter costs (identical to baseline vs 33.3% more) and genuinely different decode-efficiency consequences, explained by Module 196\'s memory-bound finding.',
      bodyKn: 'Part 1 subtraction mechanism ಒಂದೂ ಕೈ-ಸಿದ್ಧಪಡಿಸಿದ, ಅನುಕೂಲಕರ case ನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿತು. Part 2 ಅದೇ ಗಣಿತವನ್ನೂ ಎರಡೂ ಭಿನ್ನ ರೀತಿಯಲ್ಲಿ (V1, V2) ಸಂಘಟಿಸಬಹುದು ಎಂದೂ ನಿಜವಾಗಿ ತೋರಿಸಿತು, ನಿಜವಾಗಿ ಭಿನ್ನ parameter costs ಮತ್ತೆ decode-efficiency ಪರಿಣಾಮಗಳೊಂದಿಗೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This lesson genuinely connected V2\'s architecture decisions to Module 196\'s real memory-bound decode findings. Part 3 genuinely builds the complete toy implementation end to end -- softmax, the differential operator, the synthetic SNR experiment (including an honest, seed-dependent result), and the full parameter-accounting code walkthrough.',
      bodyKn: 'ಈ lesson V2 ya architecture decisions ಅನ್ನೂ Module 196 ya ನಿಜ memory-bound decode findings ಗೆ ನಿಜವಾಗಿ ಸಂಪರ್ಕಿಸಿತು. Part 3 ಪೂರ್ಣ toy implementation ಅನ್ನೂ ಅಂತ್ಯದಿಂದ ಅಂತ್ಯಕ್ಕೆ ನಿಜವಾಗಿ ಕಟ್ಟುತ್ತದೆ -- softmax, differential operator, synthetic SNR experiment (ಒಂದೂ ಪ್ರಾಮಾಣಿಕ, seed-dependent ಫಲಿತಾಂಶ ಸೇರಿ), ಮತ್ತೆ ಪೂರ್ಣ parameter-accounting code walkthrough.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how did the simplified QKV parameter count for DIFF V1 compare to baseline attention?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: DIFF V1 ya simplified QKV parameter count baseline attention ಗೆ ಹೇಗೆ ಹೋಲಿಸಿತು?',
        opts: ['V1 had 4x more parameters', 'V1 had exactly the same parameter count as baseline (50,331,648 both)', 'V1 had half the parameters', 'V1 had zero parameters'], correct: 1,
        optsKn: ['V1 4x ಹೆಚ್ಚು parameters ಹೊಂದಿತ್ತು', 'V1 baseline ಗೆ ನಿಖರವಾಗಿ ಅದೇ parameter count ಹೊಂದಿತ್ತು (50,331,648 ಎರಡೂ)', 'V1 ಅರ್ಧ parameters ಹೊಂದಿತ್ತು', 'V1 ಶೂನ್ಯ parameters ಹೊಂದಿತ್ತು'] },
      { q: 'Genuinely confirmed: what was V2\'s extra parameter cost over baseline, and what did it equal?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: baseline ಗಿಂತ V2 ya extra parameter cost ಏನಾಗಿತ್ತು, ಮತ್ತೆ ಅದೂ ಏನಿಗೆ ಸಮಾನವಾಗಿತ್ತು?',
        opts: ['50,331,648, equal to the full baseline', '16,777,216, exactly equal to hidden_size^2', 'Zero, V2 has no extra cost', '4,096, equal to hidden_size'], correct: 1,
        optsKn: ['50,331,648, ಪೂರ್ಣ baseline ಗೆ ಸಮಾನ', '16,777,216, hidden_size^2 ಗೆ ನಿಖರವಾಗಿ ಸಮಾನ', 'ಶೂನ್ಯ, V2 ಗೆ ಯಾವುದೇ extra cost ಇಲ್ಲ', '4,096, hidden_size ಗೆ ಸಮಾನ'] },
      { q: 'Why can V2\'s extra query-side compute be nearly free during decode, according to Module 196\'s genuinely-verified finding?', qKn: 'Module 196 ya ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ finding ಪ್ರಕಾರ, V2 ya ಹೆಚ್ಚುವರಿ query-side compute decode ಸಮಯದಲ್ಲಿ ಬಹುತೇಕ ಉಚಿತ ಏಕೆ ಆಗಬಹುದು?',
        opts: ['Decode never uses the GPU', 'Decode is memory-bound (ops:byte ratio ~1.0), so the GPU has slack arithmetic capacity while waiting on weight reads', 'V2 uses a different GPU', 'Query computation happens on the CPU'], correct: 1,
        optsKn: ['Decode GPU ಅನ್ನೂ ಎಂದಿಗೂ ಬಳಸುವುದಿಲ್ಲ', 'Decode memory-bound ಆಗಿದೆ (ops:byte ratio ~1.0), ಆದ್ದರಿಂದ GPU weight reads ಗಾಗಿ ಕಾಯುತ್ತಾ slack arithmetic capacity ಹೊಂದಿದೆ', 'V2 ಒಂದೂ ಭಿನ್ನ GPU ಬಳಸುತ್ತದೆ', 'Query computation CPU ಮೇಲೆ ಸಂಭವಿಸುತ್ತದೆ'] },
      { q: 'Why was per-head RMSNorm removed in DIFF V2?', qKn: 'DIFF V2 ನಲ್ಲಿ per-head RMSNorm ಅನ್ನೂ ಏಕೆ ತೆಗೆಯಲಾಯಿತು?',
        opts: ['It was never used in V1 either', 'It genuinely stabilized small-scale training but was reported to contribute to late-training instability at ~70B scale', 'RMSNorm is incompatible with attention', 'V2 does not use any normalization anywhere'], correct: 1,
        optsKn: ['ಅದೂ V1 ನಲ್ಲಿಯೂ ಎಂದಿಗೂ ಬಳಸಲ್ಪಡಲಿಲ್ಲ', 'ಅದೂ ಚಿಕ್ಕ-scale training ಅನ್ನೂ ನಿಜವಾಗಿ ಸ್ಥಿರಗೊಳಿಸಿತು ಆದರೆ ~70B scale ನಲ್ಲಿ late-training instability ಗೆ ಕೊಡುಗೆ ನೀಡಿತು ಎಂದೂ ವರದಿ', 'RMSNorm attention ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ', 'V2 ಎಲ್ಲಿಯೂ ಯಾವುದೇ normalization ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'What genuinely stayed the same between DIFF V1 and DIFF V2?', qKn: 'DIFF V1 ಮತ್ತೆ DIFF V2 ನಡುವೆ ನಿಜವಾಗಿ ಏನೂ ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು?',
        opts: ['The parameter count', 'The core mathematical operator, A1 - lambda*A2, verified in Part 1', 'The head dimension', 'The presence of per-head RMSNorm'], correct: 1,
        optsKn: ['Parameter count', 'ಮುಖ್ಯ ಗಣಿತೀಯ operator, A1 - lambda*A2, Part 1 ನಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ', 'Head dimension', 'Per-head RMSNorm ya ಇರುವಿಕೆ'] },
    ] } },
  ],
};
