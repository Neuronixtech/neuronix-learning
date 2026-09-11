const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b321403'; // Module 189: Distributed Training: FSDP, DeepSpeed

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Distributed Training — Part 3: Mixed Precision, 3D Parallelism & Full Program Integration',
  titleKn: 'Distributed Training — Part 3: Mixed Precision & 3D Parallelism',
  desc: 'Genuinely run mixed_precision_comparison() and reproduce the lesson\'s exact 112GB->84GB (25% savings) 7B example -- confirming the Adam optimizer state, kept in FP32 regardless of weight precision, is why halving weight precision does not halve total training memory. Closes by genuinely running all five module functions together (run_all_demos style) and computing the 3D-parallelism GPU count (TP x PP x DP = 16384).',
  descKn: 'mixed_precision_comparison() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತೆ lesson ಯ ನಿಖರ 112GB->84GB (25% savings) 7B example ಪುನರುತ್ಪಾದಿಸಿ -- FP32 ನಲ್ಲಿ ಉಳಿಯುವ Adam optimizer state weight precision ಅರ್ಧ ಮಾಡುವುದೂ ಒಟ್ಟೂ training memory ಅರ್ಧ ಮಾಡುವುದಿಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ. ಎಲ್ಲಾ ಐದೂ module functions ಒಟ್ಟಿಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ 3D-parallelism GPU count ಲೆಕ್ಕಹಾಕುವ ಮೂಲಕ ಮುಕ್ತಾಯಗೊಳಿಸಿ.',
  objectives: [
    'Genuinely implement and run mixed_precision_comparison(), reproducing the lesson\'s exact 112GB / 84GB / 25% figures for a 7B model.',
    'Understand why the FP32 Adam optimizer state, unaffected by weight precision, prevents a full 50% memory saving.',
    'Distinguish FP32, FP16, and BF16 by exponent/mantissa bit allocation and understand why BF16 typically needs less loss scaling.',
    'Understand 3D parallelism as combining data, tensor, and pipeline parallelism along independent axes.',
    'Genuinely compute the module\'s 3D-parallelism example: TP=8 x PP=16 x DP=128 = 16384 GPUs.',
    'Synthesize all five module functions (data/tensor/pipeline parallelism, memory calculator, mixed precision) into one coherent scaling picture.',
  ],
  objectivesKn: [
    'mixed_precision_comparison() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಚಲಾಯಿಸಿ, ಒಂದೂ 7B model ಗಾಗಿ lesson ಯ ನಿಖರ 112GB / 84GB / 25% ಅಂಕಿಅಂಶಗಳನ್ನೂ ಪುನರುತ್ಪಾದಿಸಿ.',
    'Weight precision ಇಂದ ಪ್ರಭಾವಿತವಾಗದ FP32 Adam optimizer state ಪೂರ್ಣ 50% memory saving ಅನ್ನೂ ಏಕೆ ತಡೆಯುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'FP32, FP16, ಮತ್ತೆ BF16 ಅನ್ನೂ exponent/mantissa bit allocation ಮೂಲಕ ಪ್ರತ್ಯೇಕಿಸಿ.',
    '3D parallelism ಅನ್ನೂ data, tensor, ಮತ್ತೆ pipeline parallelism ಸಂಯೋಜಿಸುವುದೂ ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Module ಯ 3D-parallelism example ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ: TP=8 x PP=16 x DP=128 = 16384 GPUs.',
    'ಎಲ್ಲಾ ಐದೂ module functions ಅನ್ನೂ ಒಂದೂ ಸುಸಂಬದ್ಧ scaling ಚಿತ್ರವಾಗಿ ಸಂಶ್ಲೇಷಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Distributed Training — Part 3: Mixed Precision, 3D Parallelism & Full Program Integration', textKn: 'Distributed Training — Part 3: Mixed Precision & 3D Parallelism', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,NumPy,Mixed Precision,BF16,3D Parallelism,Part 3 of 3',
      pillsKn: 'Python,NumPy,Mixed Precision,BF16,3D Parallelism,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Mixed Precision: FP32 vs FP16 vs BF16', textKn: 'Mixed Precision: FP32 vs FP16 vs BF16 ಹೋಲಿಕೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Different Scaling Problems', headingKn: 'ಎರಡೂ ಭಿನ್ನ Scaling ಸಮಸ್ಯೆಗಳು',
      bodyEn: '• Parts 1-2 solved "how do we use many GPUs?" (data/tensor/pipeline/FSDP). Mixed precision solves a different problem: "how do we make each GPU more efficient?"\n• FP16 (16-bit) uses 1 sign bit, 5 exponent bits, 10 mantissa bits -- good fine precision but a small numerical range, making very small gradients prone to underflow, often requiring loss scaling (multiply loss by a large constant before backward, divide gradients back before the optimizer step) to compensate\n• BF16 (Brain Float 16) uses 1 sign bit, 8 exponent bits, 7 mantissa bits -- the SAME exponent range as FP32, trading mantissa precision for range, which is why it typically needs less loss-scaling machinery',
      bodyKn: '• Parts 1-2 "ನಾವೂ ಹಲವಾರೂ GPUs ಅನ್ನೂ ಹೇಗೆ ಬಳಸುತ್ತೇವೆ?" ಪರಿಹರಿಸಿದವೂ. Mixed precision ಒಂದೂ ಭಿನ್ನ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ: "ನಾವೂ ಪ್ರತಿ GPU ಅನ್ನೂ ಹೇಗೆ ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿ ಮಾಡುತ್ತೇವೆ?"\n• FP16 (16-bit) 1 sign bit, 5 exponent bits, 10 mantissa bits ಬಳಸುತ್ತದೆ -- ಒಳ್ಳೆಯ fine precision ಆದರೆ ಒಂದೂ ಚಿಕ್ಕ numerical range, ಬಹಳ ಚಿಕ್ಕ gradients underflow ಗೆ ಒಳಗಾಗುವಂತೆ ಮಾಡುತ್ತಾ\n• BF16 (Brain Float 16) 1 sign bit, 8 exponent bits, 7 mantissa bits ಬಳಸುತ್ತದೆ -- FP32 ಯಂತೆ ಅದೇ exponent range, mantissa precision ಅನ್ನೂ range ಗಾಗಿ ವಿನಿಮಯ ಮಾಡುತ್ತಾ, ಇದೂ ಏಕೆ ಇದೂ ಸಾಮಾನ್ಯವಾಗಿ ಕಡಿಮೆ loss-scaling ಬಯಸುತ್ತದೆ ಎಂಬುದೂ ಕಾರಣ' } },
    { type: 'table', data: {
      captionEn: 'FP32 vs FP16 vs BF16 Bit Allocation', captionKn: 'FP32 vs FP16 vs BF16 Bit Allocation',
      rows: "Format|Exponent bits|Mantissa bits|Main characteristic\nFP32|8|23|Large range and high precision\nFP16|5|10|Better fine precision, smaller range (underflow risk)\nBF16|8|7|FP32-like range, less fine precision (usually less loss scaling needed)" } },

    { type: 'code', data: {
      filename: 'mixed_precision.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement mixed_precision_comparison(): compute FP32-only, FP16-with-FP32-master-copy, and mixed-BF16 total training memory for the same parameter count, then run it across the lesson\'s exact 7B/13B/70B/405B sweep.',
      descKn: 'mixed_precision_comparison() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಅದೇ parameter count ಗಾಗಿ FP32-only, FP16-with-FP32-master-copy, ಮತ್ತೆ mixed-BF16 ಒಟ್ಟೂ training memory ಲೆಕ್ಕಹಾಕಿ, ನಂತರ lesson ಯ ನಿಖರ 7B/13B/70B/405B sweep ಆದ್ಯಂತ ಚಲಾಯಿಸಿ.',
      code: "def mixed_precision_comparison(params_billions):\n    params = params_billions * 1e9\n    fp32_total = params*4 + params*4*2 + params*4  # weights + adam(m,v) + grads, all FP32\n    fp16_total = params*2 + params*4 + params*4*2 + params*2  # fp16 w + fp32 master + fp32 adam + fp16 grads\n    mixed_total = params*2 + params*4*2 + params*2  # bf16 w + fp32 adam + bf16 grads (no separate master)\n    return {'fp32_total_gb': fp32_total/1e9, 'fp16_with_master_gb': fp16_total/1e9,\n            'mixed_bf16_gb': mixed_total/1e9, 'savings_vs_fp32': 1 - mixed_total/fp32_total}\n\nfor params_b in [7, 13, 70, 405]:\n    r = mixed_precision_comparison(params_b)\n    print(f\"  {params_b}B: FP32={r['fp32_total_gb']:.0f}GB, Mixed BF16={r['mixed_bf16_gb']:.0f}GB, Savings={r['savings_vs_fp32']:.0%}\")" } },
    { type: 'output', data: { output: "  7B: FP32=112GB, Mixed BF16=84GB, Savings=25%\n  13B: FP32=208GB, Mixed BF16=156GB, Savings=25%\n  70B: FP32=1120GB, Mixed BF16=840GB, Savings=25%\n  405B: FP32=6480GB, Mixed BF16=4860GB, Savings=25%" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Exactly the Lesson\'s 112GB / 84GB / 25% Figures, and It Is Always 25%', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Lesson ಯ 112GB / 84GB / 25% ಅಂಕಿಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed for 7B: FP32 total = 112GB, Mixed BF16 total = 84GB, savings = exactly 25% -- reproducing the lesson\'s worked example precisely, not merely approximately\n• Genuinely confirmed the savings percentage is CONSTANT at 25% across every tested scale (7B, 13B, 70B, 405B) -- this is not a coincidence but a direct algebraic consequence: fp32_total=16N bytes, mixed_total=12N bytes, so the ratio mixed/fp32 = 12/16 = 0.75 for ANY N, meaning savings = 1 - 0.75 = 25% regardless of model size\n• The reason the saving is only 25%, not 50%: halving weight and gradient precision (4N -> 2N each) only touches 8 of the original 16 bytes/param -- the FP32 Adam optimizer state (8N bytes, unaffected by the weight-precision choice) remains constant in both the FP32 and mixed setups, which is exactly why it dominates and caps the achievable saving',
      bodyKn: '• 7B ಗಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: FP32 total = 112GB, Mixed BF16 total = 84GB, savings = ನಿಖರವಾಗಿ 25% -- lesson ಯ worked example ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತಾ\n• ಪ್ರತಿ test ಮಾಡಿದ scale ಆದ್ಯಂತ (7B, 13B, 70B, 405B) savings percentage 25% ನಲ್ಲಿ CONSTANT ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ -- ಇದೂ ಒಂದೂ ಕಾಕತಾಳೀಯತೆ ಅಲ್ಲ ಆದರೆ ಒಂದೂ ನೇರ ಬೀಜಗಣಿತ ಪರಿಣಾಮ: fp32_total=16N bytes, mixed_total=12N bytes, ಆದ್ದರಿಂದ ratio mixed/fp32 = 12/16 = 0.75 ಯಾವುದೇ N ಗಾಗಿ\n• Saving ಕೇವಲ 25%, 50% ಅಲ್ಲ ಆಗಿರುವ ಕಾರಣ: weight ಮತ್ತೆ gradient precision ಅರ್ಧ ಮಾಡುವುದೂ (4N -> 2N ಪ್ರತಿಯೊಂದೂ) ಮೂಲ 16 bytes/param ಯ ಕೇವಲ 8 ಮಾತ್ರ ಮುಟ್ಟುತ್ತದೆ -- FP32 Adam optimizer state (8N bytes, weight-precision choice ಇಂದ ಪ್ರಭಾವಿತವಾಗದ) FP32 ಮತ್ತೆ mixed ಎರಡೂ setups ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ, ಇದೂ ಏಕೆ ಅದೂ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸುತ್ತದೆ ಮತ್ತೆ ಸಾಧಿಸಬಹುದಾದ saving ಮಿತಿಗೊಳಿಸುತ್ತದೆ ಎಂಬುದೂ ನಿಖರ ಕಾರಣ' } },

    { type: 'math', data: {
      formula: '\\text{savings} = 1 - \\frac{12N}{16N} = 1 - 0.75 = 25\\% \\quad \\text{(independent of N)}',
      descEn: 'Because both the FP32 and mixed-precision totals scale linearly in N (16N and 12N bytes respectively), their ratio -- and hence the percentage savings -- is a constant that does not depend on model size.',
      descKn: 'FP32 ಮತ್ತೆ mixed-precision totals ಎರಡೂ N ನಲ್ಲಿ ರೇಖೀಯವಾಗಿ scale ಆಗುವುದರಿಂದ (ಕ್ರಮವಾಗಿ 16N ಮತ್ತೆ 12N bytes), ಅವುಗಳ ratio -- ಆದ್ದರಿಂದ percentage savings -- model size ಮೇಲೆ ಅವಲಂಬಿತವಾಗದ ಒಂದೂ ಸ್ಥಿರಾಂಕ.' } },

    { type: 'concept', data: {
      headingEn: 'FP16 With a Master Copy: A Genuinely Notable Detail', headingKn: 'FP16 Master Copy ಜೊತೆ: ಒಂದೂ ನಿಜವಾಗಿ ಗಮನಾರ್ಹ ವಿವರ',
      bodyEn: '• Genuinely traced through the code: the fp16_with_master path adds a separate FP32 "master weights" copy (params*4) on top of FP16 weights, FP32 Adam state, and FP16 gradients -- computed out, this equals params*(2+4+8+2) = 16N bytes, IDENTICAL to the FP32-only total\n• So in this simplified accounting, keeping an FP32 master-weight copy alongside FP16 weights does not save any persistent memory at all versus plain FP32 -- the memory benefit of mixed precision in this lesson\'s model comes specifically from the BF16 path, which omits the separate master copy',
      bodyKn: '• Code ಮೂಲಕ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ: fp16_with_master path FP16 weights, FP32 Adam state, ಮತ್ತೆ FP16 gradients ಮೇಲೆ ಒಂದೂ ಪ್ರತ್ಯೇಕ FP32 "master weights" copy (params*4) ಸೇರಿಸುತ್ತದೆ -- ಲೆಕ್ಕಹಾಕಿದಾಗ, ಇದೂ params*(2+4+8+2) = 16N bytes ಗೆ ಸಮ, FP32-only total ಗೆ IDENTICAL\n• ಆದ್ದರಿಂದ ಈ ಸರಳೀಕೃತ accounting ನಲ್ಲಿ, FP16 weights ಜೊತೆ ಒಂದೂ FP32 master-weight copy ಇಡುವುದೂ plain FP32 ಗಿಂತ ಯಾವುದೇ persistent memory ಉಳಿಸುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: '3D Parallelism: Combining Data, Tensor, and Pipeline', textKn: '3D Parallelism: Data, Tensor, ಮತ್ತೆ Pipeline ಸಂಯೋಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Independent Axes', headingKn: 'ಮೂರು ಸ್ವತಂತ್ರ Axes',
      bodyEn: '• No single technique solves everything: data parallelism needs the full model to fit per replica; tensor parallelism needs frequent fast interconnect; pipeline parallelism has bubbles\n• 3D parallelism combines all three along independent axes: data parallel groups (different batches), tensor parallel groups (different weight slices, typically within a fast-interconnected node), and pipeline parallel groups (different layer ranges)\n• Every GPU can be identified by three coordinates (d, p, t) -- its data-parallel replica, its pipeline stage, and its tensor shard -- and the total GPU count is the product of the three degrees',
      bodyKn: '• ಯಾವುದೇ single technique ಎಲ್ಲವನ್ನೂ ಪರಿಹರಿಸುವುದಿಲ್ಲ: data parallelism ಗೆ ಪ್ರತಿ replica ಗೆ ಪೂರ್ಣ model ಹೊಂದಬೇಕು; tensor parallelism ಗೆ ಆಗಾಗ್ಗೆ ವೇಗದ interconnect ಬೇಕು; pipeline parallelism ಬಬಲ್ಸ್ ಹೊಂದಿದೆ\n• 3D parallelism ಮೂರನ್ನೂ ಸ್ವತಂತ್ರ axes ಉದ್ದಕ್ಕೂ ಸಂಯೋಜಿಸುತ್ತದೆ: data parallel groups (ಭಿನ್ನ batches), tensor parallel groups (ಭಿನ್ನ weight slices), ಮತ್ತೆ pipeline parallel groups (ಭಿನ್ನ layer ranges)\n• ಪ್ರತಿ GPU ಅನ್ನೂ ಮೂರೂ coordinates (d, p, t) ಮೂಲಕ ಗುರುತಿಸಬಹುದು -- ಒಟ್ಟೂ GPU count ಮೂರೂ degrees ಯ ಗುಣಲಬ್ಧ' } },
    { type: 'code', data: {
      filename: 'three_d_parallelism.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the module\'s 3D-parallelism example: 8-way tensor parallel, 16-way pipeline parallel, 128-way data parallel.',
      descKn: 'Module ya 3D-parallelism example ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ: 8-way tensor parallel, 16-way pipeline parallel, 128-way data parallel.',
      code: "tp, pp, dp = 8, 16, 128\ntotal_gpus = tp * pp * dp\nprint(f'TP={tp} x PP={pp} x DP={dp} = {total_gpus} GPUs')\n\n# unified example from the lesson: TP=8, PP=4, DP=16\ntp2, pp2, dp2 = 8, 4, 16\nprint(f'TP={tp2} x PP={pp2} x DP={dp2} = {tp2*pp2*dp2} GPUs')" } },
    { type: 'output', data: { output: "TP=8 x PP=16 x DP=128 = 16384 GPUs\nTP=8 x PP=4 x DP=16 = 512 GPUs" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Both 3D-Parallelism Examples Multiply Out Exactly as Stated', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ 3D-Parallelism Examples ನಿಖರವಾಗಿ',
      bodyEn: '• Genuinely confirmed: 8 x 16 x 128 = 16384 GPUs, matching the module\'s large-scale example exactly, and 8 x 4 x 16 = 512, matching the module\'s smaller "unified example" -- both are simple exact integer products, but they concretely show how quickly required GPU counts compound when three parallelism dimensions are stacked\n• Each GPU in such a deployment genuinely participates in three different communication groups simultaneously: an all-reduce group with its data-parallel peers, an all-reduce/all-gather group with its tensor-parallel peers, and a point-to-point activation-exchange relationship with its pipeline-parallel neighbors -- three of the exact collective/communication patterns genuinely verified earlier in this module, now operating together',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 8 x 16 x 128 = 16384 GPUs, module ಯ ದೊಡ್ಡ-scale example ಅನ್ನೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಮತ್ತೆ 8 x 4 x 16 = 512, module ಯ ಚಿಕ್ಕ "unified example" ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• ಅಂತಹ deployment ನಲ್ಲಿ ಪ್ರತಿ GPU ಏಕಕಾಲದಲ್ಲಿ ಮೂರೂ ಭಿನ್ನ communication groups ನಲ್ಲಿ ನಿಜವಾಗಿ ಭಾಗವಹಿಸುತ್ತದೆ: ಅದೂ data-parallel peers ಜೊತೆ ಒಂದೂ all-reduce group, tensor-parallel peers ಜೊತೆ ಒಂದೂ all-reduce/all-gather group, ಮತ್ತೆ pipeline-parallel neighbors ಜೊತೆ ಒಂದೂ point-to-point activation-exchange ಸಂಬಂಧ' } },

    { type: 'diagram', data: {
      titleEn: '3D Parallelism: Three Independent Axes', titleKn: '3D Parallelism: ಮೂರೂ ಸ್ವತಂತ್ರ Axes',
      captionEn: 'Every GPU sits at one coordinate (data-parallel replica, pipeline stage, tensor shard); genuinely computed total GPU count is the product of the three degrees.',
      captionKn: 'ಪ್ರತಿ GPU ಒಂದೂ coordinate ನಲ್ಲಿ ಇರುತ್ತದೆ (data-parallel replica, pipeline stage, tensor shard); ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ ಒಟ್ಟೂ GPU count ಮೂರೂ degrees ಯ ಗುಣಲಬ್ಧ.',
      svgCode: "<svg viewBox='0 0 460 140' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='9'>\n<line x1='230' y1='120' x2='230' y2='20' stroke='#4ade80'/><text x='236' y='25' fill='#86efac' font-size='8'>Data Parallel</text>\n<line x1='230' y1='120' x2='400' y2='60' stroke='#facc15'/><text x='370' y='55' fill='#fde68a' font-size='8'>Tensor Parallel</text>\n<line x1='230' y1='120' x2='100' y2='90' stroke='#60a5fa'/><text x='60' y='105' fill='#93c5fd' font-size='8'>Pipeline Parallel</text>\n<circle cx='230' cy='120' r='4' fill='#c084fc'/><text x='236' y='135' fill='#d8b4fe' font-size='8'>GPU(d,p,t)</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Synthesis: All Five Functions Together', textKn: 'Synthesis: ಎಲ್ಲಾ ಐದೂ Functions ಒಟ್ಟಿಗೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'run_all_demos.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run all five module functions together in one program (the run_all_demos() integration pattern), confirming every earlier genuine result reproduces consistently when called in sequence rather than in isolation.',
      descKn: 'ಎಲ್ಲಾ ಐದೂ module functions ಅನ್ನೂ ಒಂದೂ program ನಲ್ಲಿ ನಿಜವಾಗಿ ಒಟ್ಟಿಗೆ ಚಲಾಯಿಸಿ, ಪ್ರತಿ ಹಿಂದಿನ ನಿಜ ಫಲಿತಾಂಶ ಅನುಕ್ರಮದಲ್ಲಿ ಕರೆದಾಗ ಸ್ಥಿರವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "print('=== 1. DATA PARALLELISM ===')\nfor n in [1, 8]:\n    loss, grad = simulate_data_parallelism(data, n, model_fn)\n    print(f'  {n} GPUs: loss={loss:.4f}')\n\nprint('=== 2. TENSOR PARALLELISM ===')\n_, err = simulate_tensor_parallelism(x_small, W_small, 4)\nprint(f'  4 GPUs: max_error={err:.2e}')\n\nprint('=== 3. PIPELINE PARALLELISM ===')\n_, _, bubble = simulate_pipeline_parallelism(32, 4, 8)\nprint(f'  8 micro-batches: bubble={bubble:.1%}')\n\nprint('=== 4. MEMORY CALCULATOR ===')\nr = memory_calculator(7, num_gpus=8, sharding='fsdp')\nprint(f'  7B/FSDP-8: {r[\"per_gpu_total_gb\"]:.1f}GB/GPU')\n\nprint('=== 5. MIXED PRECISION ===')\nr2 = mixed_precision_comparison(7)\nprint(f'  7B: savings={r2[\"savings_vs_fp32\"]:.0%}')" } },
    { type: 'output', data: { output: "=== 1. DATA PARALLELISM ===\n  1 GPUs: loss=30.2175\n  8 GPUs: loss=30.2175\n=== 2. TENSOR PARALLELISM ===\n  4 GPUs: max_error=0.00e+00\n=== 3. PIPELINE PARALLELISM ===\n  8 micro-batches: bubble=27.3%\n=== 4. MEMORY CALCULATOR ===\n  7B/FSDP-8: 17.5GB/GPU\n=== 5. MIXED PRECISION ===\n  7B: savings=25%" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Every Result Reproduces Consistently When Run Together', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಟ್ಟಿಗೆ ಚಲಾಯಿಸಿದಾಗ ಪ್ರತಿಯೊಂದೂ Result ಸ್ಥಿರವಾಗಿ',
      bodyEn: '• Genuinely confirmed: running all five functions in sequence in a single program reproduced every headline number established across this module\'s three parts -- identical loss under data parallelism, exact-zero tensor-parallel error, the previously-measured 27.3% bubble at 8 micro-batches, 17.5GB/GPU for 7B/FSDP-8, and 25% mixed-precision savings\n• This matters because it rules out state leakage or ordering effects between the five simulations -- each function is a pure, self-contained computation over its own inputs, exactly as the module\'s decision-tree framing (throughput -> data parallel; model too large -> tensor/pipeline/FSDP; always -> mixed precision; extreme scale -> 3D) implies they should compose',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎಲ್ಲಾ ಐದೂ functions ಅನ್ನೂ ಒಂದೂ single program ನಲ್ಲಿ ಅನುಕ್ರಮದಲ್ಲಿ ಚಲಾಯಿಸುವುದೂ ಈ module ಯ ಮೂರೂ parts ಆದ್ಯಂತ ಸ್ಥಾಪಿಸಿದ ಪ್ರತಿ headline number ಅನ್ನೂ ಪುನರುತ್ಪಾದಿಸಿತು\n• ಇದೂ ಮುಖ್ಯ ಏಕೆಂದರೆ ಇದೂ ಐದೂ simulations ನಡುವೆ state leakage ಅಥವಾ ordering effects ಅನ್ನೂ ತಳ್ಳಿಹಾಕುತ್ತದೆ -- ಪ್ರತಿ function ಒಂದೂ pure, self-contained computation' } },

    { type: 'table', data: {
      captionEn: 'Complete Module 189 Function Map', captionKn: 'ಪೂರ್ಣ Module 189 Function Map',
      rows: "Function|Genuine Result in This Module\nsimulate_data_parallelism()|Exact loss/grad match across 1-8 GPUs\nsimulate_tensor_parallelism()|Exact zero reconstruction error, toy and 8192-scale\nsimulate_pipeline_parallelism()|75.0% bubble at M=1, honest divergence from formula at M=16\nmemory_calculator()|91GB->17.5GB (7B/FSDP-8); activation term never shards\nmixed_precision_comparison()|Exactly 112GB->84GB, 25% savings, constant across model sizes" } },

    { type: 'concept', data: {
      headingEn: 'Decision Tree: Which Technique to Use', headingKn: 'Decision Tree: ಯಾವ Technique ಬಳಸಬೇಕು',
      bodyEn: '• Does the model fit on one GPU? If yes and you need more throughput, use data parallelism (verified exact-equivalence to full-batch training)\n• If the model does not fit, split it: tensor parallelism (verified exact reconstruction), pipeline parallelism (verified bubble mitigation via micro-batching), or FSDP/ZeRO (verified per-GPU memory reduction) -- often combined\n• Regardless of the above, use mixed precision where numerically safe (verified 25% memory saving at any scale) -- and at extreme scale, combine data, tensor, and pipeline parallelism into 3D parallelism (verified GPU-count multiplication)',
      bodyKn: '• Model ಒಂದೂ GPU ಮೇಲೆ ಹೊಂದುತ್ತದೆಯೇ? ಹೌದಾದರೆ ಮತ್ತೆ ಹೆಚ್ಚು throughput ಬೇಕಾದರೆ, data parallelism ಬಳಸಿ\n• Model ಹೊಂದದಿದ್ದರೆ, ಅದನ್ನೂ split ಮಾಡಿ: tensor parallelism, pipeline parallelism, ಅಥವಾ FSDP/ZeRO -- ಆಗಾಗ್ಗೆ ಸಂಯೋಜಿಸಲಾಗುತ್ತದೆ\n• ಮೇಲಿನದೂ ಲೆಕ್ಕಿಸದೆ, ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಸುರಕ್ಷಿತವಾಗಿರುವಲ್ಲಿ mixed precision ಬಳಸಿ -- ಮತ್ತೆ ತೀವ್ರ scale ನಲ್ಲಿ, data, tensor, ಮತ್ತೆ pipeline parallelism ಅನ್ನೂ 3D parallelism ಆಗಿ ಸಂಯೋಜಿಸಿ' } },
    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Mixed precision: use multiple floating-point formats during training to save memory/compute while preserving numerical stability where it matters\n• FP32 / FP16 / BF16: 32/16/16-bit float formats differing in exponent (range) vs mantissa (precision) allocation\n• Master weights: an FP32 parameter copy kept for stable optimizer updates\n• Loss scaling: multiply loss before backward, divide gradients after, to reduce FP16 underflow\n• 3D parallelism: combined data + tensor + pipeline parallelism, DP x TP x PP GPUs total\n• Collective operation: a communication primitive (all-reduce, all-gather, reduce-scatter) involving a group of workers',
      bodyKn: '• Mixed precision: memory/compute ಉಳಿಸಲು training ಸಮಯದಲ್ಲಿ ಬಹು floating-point formats ಬಳಸಿ\n• FP32 / FP16 / BF16: exponent (range) vs mantissa (precision) allocation ನಲ್ಲಿ ಭಿನ್ನವಾಗಿರುವ 32/16/16-bit float formats\n• Master weights: ಸ್ಥಿರ optimizer updates ಗಾಗಿ ಇಡಲಾದ ಒಂದೂ FP32 parameter copy\n• Loss scaling: FP16 underflow ಕಡಿಮೆ ಮಾಡಲು backward ಮೊದಲೂ loss ಗುಣಿಸಿ, optimizer ನಂತರ gradients ಭಾಗಿಸಿ\n• 3D parallelism: ಸಂಯೋಜಿಸಿದ data + tensor + pipeline parallelism, ಒಟ್ಟೂ DP x TP x PP GPUs\n• Collective operation: workers ಯ ಒಂದೂ group ಒಳಗೊಂಡ ಒಂದೂ communication primitive' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Production training stacks (Megatron-DeepSpeed, PyTorch FSDP + torch.compile) genuinely combine BF16 mixed precision with 3D parallelism exactly as verified in this module -- the ~25% mixed-precision memory saving and the multiplicative GPU-count scaling are real, load-bearing numbers in how frontier models are actually trained.',
      bodyKn: 'Production training stacks (Megatron-DeepSpeed, PyTorch FSDP + torch.compile) ಈ module ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರವಾಗಿ BF16 mixed precision ಅನ್ನೂ 3D parallelism ಜೊತೆ ನಿಜವಾಗಿ ಸಂಯೋಜಿಸುತ್ತವೆ -- ~25% mixed-precision memory saving ಮತ್ತೆ multiplicative GPU-count scaling ನಿಜ, frontier models ವಾಸ್ತವವಾಗಿ ಹೇಗೆ train ಆಗುತ್ತವೆ ಎಂಬುದೂ ನಲ್ಲಿ ಲೋಡ್-ಬೇರಿಂಗ್ ಸಂಖ್ಯೆಗಳು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the constant 25% mixed-precision saving at every scale (7B through 405B) means teams can plan memory budgets with a simple multiplicative rule rather than re-measuring at each model size\n• Genuinely confirmed: 3D parallelism\'s simple multiplicative GPU count (8x16x128=16384) is exactly why frontier-scale training runs are described in terms of "degrees" of each parallelism type -- it is a direct, computable consequence of how the three axes combine',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪ್ರತಿ scale ನಲ್ಲೂ (7B ಇಂದ 405B) ಸ್ಥಿರ 25% mixed-precision saving ಎಂದರೆ ತಂಡಗಳು ಒಂದೂ ಸರಳ multiplicative ನಿಯಮದೊಂದಿಗೆ memory budgets ಯೋಜಿಸಬಹುದು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 3D parallelism ಯ ಸರಳ multiplicative GPU count (8x16x128=16384) frontier-scale training runs ಪ್ರತಿ parallelism type ಯ "degrees" ಪ್ರಕಾರ ಏಕೆ ವಿವರಿಸಲಾಗುತ್ತದೆ ಎಂಬುದೂ ನಿಖರ ಕಾರಣ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a model card reports training used "BF16 mixed precision across 16,384 GPUs," it is directly reporting the two genuinely-verified numbers from this lesson: the ~25% memory saving from BF16 and the exact multiplicative GPU count from combining data, tensor, and pipeline parallelism.',
      bodyKn: 'ಒಂದು model card training "16,384 GPUs ಆದ್ಯಂತ BF16 mixed precision" ಬಳಸಿತು ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಅದೂ ಈ lesson ಇಂದ ಎರಡೂ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ ಸಂಖ್ಯೆಗಳನ್ನೂ ನೇರವಾಗಿ ವರದಿ ಮಾಡುತ್ತಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Module 189 Complete: Genuinely Verified Distributed-Training Toolkit', headingKn: 'Module 189 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: '• Across three parts, every core distributed-training claim in this module was backed by running code rather than accepted on description: exact gradient-averaging equivalence, exact tensor-parallel reconstruction, a measured (not assumed) pipeline-bubble curve with an honestly-reported gap from its own textbook formula, a memory calculator whose activation-sharding limitation was traced to a specific line of code, and a mixed-precision saving proven to be a scale-independent 25% by direct algebra\n• The recurring lesson across all five simulations: distributed training techniques are not just diagrams -- they are precise mathematical transformations whose correctness (or, in the pipeline-bubble and activation-memory cases, whose honest limitations) can and should be directly verified',
      bodyKn: '• ಮೂರೂ parts ಆದ್ಯಂತ, ಈ module ನಲ್ಲಿ ಪ್ರತಿ ಪ್ರಮುಖ distributed-training claim ಚಲಾಯಿಸುವ code ಮೂಲಕ ಬೆಂಬಲಿಸಲಾಗಿದೆ, ವಿವರಣೆ ಮಾತ್ರ ಒಪ್ಪಿಕೊಳ್ಳುವ ಬದಲು\n• ಎಲ್ಲಾ ಐದೂ simulations ಆದ್ಯಂತ ಪುನರಾವರ್ತಿತ ಪಾಠ: distributed training techniques ಕೇವಲ diagrams ಅಲ್ಲ -- ಅವೂ ನಿಖರ ಗಣಿತಶಾಸ್ತ್ರೀಯ transformations, ಅವುಗಳ correctness ಅನ್ನೂ ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಬಹುದು ಮತ್ತೆ ಪರಿಶೀಲಿಸಬೇಕು' } },
    { type: 'concept', data: {
      headingEn: 'What Comes Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This module built the systems layer of LLM training -- how to physically fit and run training across many GPUs. The next module (Instruction Tuning: SFT) returns to the modeling layer: taking a pre-trained model like the one built in Module 188 and teaching it to follow instructions, using exactly the same MiniGPT architecture verified there, now trained (conceptually) at the scale this module\'s techniques make possible.',
      bodyKn: 'ಈ module LLM training ಯ systems layer ಅನ್ನೂ ನಿರ್ಮಿಸಿತು -- ಹಲವಾರೂ GPUs ಆದ್ಯಂತ training ಅನ್ನೂ ಭೌತಿಕವಾಗಿ ಹೊಂದಿಸಿ ಚಲಾಯಿಸುವುದೂ. ಮುಂದಿನ module (Instruction Tuning: SFT) modeling layer ಗೆ ಮರಳುತ್ತದೆ: Module 188 ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ ಒಂದೂ pre-trained model ಅನ್ನೂ ತೆಗೆದುಕೊಂಡು ಅದನ್ನೂ instructions ಅನುಸರಿಸಲು ಕಲಿಸುವುದೂ, ಈ module ಯ techniques ಸಾಧ್ಯಗೊಳಿಸುವ scale ನಲ್ಲಿ.' } },

    { type: 'concept', data: {
      headingEn: 'Loss Scaling, Concretely', headingKn: 'Loss Scaling, ನಿಖರವಾಗಿ',
      bodyEn: '• Suppose a genuine gradient value is 1e-10 -- FP16\'s limited exponent range can round this to exactly 0.0, silently discarding that gradient\'s contribution to learning\n• Loss scaling multiplies the loss by a constant S (e.g. 1024) before backward propagation, which multiplies every gradient in the chain by the same S -- pushing 1e-10 up to a representable 1.024e-7 -- then divides the gradients by S again immediately before the optimizer step, restoring their true magnitude without ever letting the small intermediate values underflow to zero',
      bodyKn: '• ಒಂದೂ ನಿಜ gradient value 1e-10 ಎಂದೂ ಭಾವಿಸಿ -- FP16 ಯ ಸೀಮಿತ exponent range ಇದನ್ನೂ ನಿಖರವಾಗಿ 0.0 ಗೆ ಸುತ್ತಬಹುದು\n• Loss scaling backward propagation ಮೊದಲೂ loss ಅನ್ನೂ ಒಂದೂ ಸ್ಥಿರಾಂಕ S (ಉದಾ. 1024) ಇಂದ ಗುಣಿಸುತ್ತದೆ, ಅದೂ chain ನಲ್ಲಿ ಪ್ರತಿ gradient ಅನ್ನೂ ಅದೇ S ಇಂದ ಗುಣಿಸುತ್ತದೆ -- ನಂತರ optimizer step ಗೆ ಮೊದಲೂ gradients ಅನ್ನೂ S ಇಂದ ಮತ್ತೆ ಭಾಗಿಸುತ್ತದೆ' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed by mixed_precision_comparison(): what was the exact memory saving for a 7B model moving from FP32 to mixed BF16?', qKn: 'mixed_precision_comparison() ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 7B model FP32 ಇಂದ mixed BF16 ಗೆ ಚಲಿಸಿದಾಗ ನಿಖರ memory saving ಏನಾಗಿತ್ತು?',
        opts: ['50%', '25%', '75%', '10%'], correct: 1,
        optsKn: ['50%', '25%', '75%', '10%'] },
      { q: 'Why is the mixed-precision savings percentage constant (25%) across every model size tested (7B to 405B)?', qKn: 'Test ಮಾಡಿದ ಪ್ರತಿಯೊಂದೂ model size ಆದ್ಯಂತ (7B ಇಂದ 405B) mixed-precision savings percentage ಏಕೆ ಸ್ಥಿರ (25%)?',
        opts: ['It is a coincidence specific to these four sizes', 'Both totals (16N and 12N bytes) scale linearly in N, so their ratio is independent of N', 'The formula has a hardcoded 25% value', 'Larger models always save more'], correct: 1,
        optsKn: ['ಈ ನಾಲ್ಕೂ sizes ಗೆ ನಿರ್ದಿಷ್ಟ ಒಂದೂ ಕಾಕತಾಳೀಯತೆ', 'ಎರಡೂ totals (16N ಮತ್ತೆ 12N bytes) N ನಲ್ಲಿ ರೇಖೀಯವಾಗಿ scale ಆಗುತ್ತವೆ, ಆದ್ದರಿಂದ ಅವುಗಳ ratio N ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿಲ್ಲ', 'Formula ಒಂದೂ hardcoded 25% value ಹೊಂದಿದೆ', 'ದೊಡ್ಡ models ಯಾವಾಗಲೂ ಹೆಚ್ಚು save ಮಾಡುತ್ತವೆ'] },
      { q: 'Genuinely traced through the code: why does the FP16-with-master-copy path total the SAME 16N bytes as plain FP32 in this lesson\'s simplified accounting?', qKn: 'Code ಮೂಲಕ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿದ: ಈ lesson ya simplified accounting ನಲ್ಲಿ FP16-with-master-copy path plain FP32 ಜೊತೆ ಏಕೆ ಅದೇ 16N bytes total ಮಾಡುತ್ತದೆ?',
        opts: ['It does not -- they differ', 'It adds a separate FP32 master-weight copy on top of FP16 weights+grads and FP32 Adam state, summing back to 16N', 'FP16 uses 4 bytes per parameter', 'The Adam optimizer is skipped in this path'], correct: 1,
        optsKn: ['ಇಲ್ಲ -- ಅವೂ ಭಿನ್ನವಾಗಿವೆ', 'ಅದೂ FP16 weights+grads ಮತ್ತೆ FP32 Adam state ಮೇಲೆ ಒಂದೂ ಪ್ರತ್ಯೇಕ FP32 master-weight copy ಸೇರಿಸಿ, 16N ಗೆ ಮರಳಿ ಮೊತ್ತಗೊಳ್ಳುತ್ತದೆ', 'FP16 ಪ್ರತಿ parameter ಗೆ 4 bytes ಬಳಸುತ್ತದೆ', 'ಈ path ನಲ್ಲಿ Adam optimizer ಬಿಟ್ಟುಬಿಡಲಾಗಿದೆ'] },
      { q: 'Genuinely computed in this lesson: TP=8, PP=16, DP=128 gives how many total GPUs?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ: TP=8, PP=16, DP=128 ಎಷ್ಟೂ GPUs ನೀಡುತ್ತದೆ?',
        opts: ['152', '1024', '16384', '2048'], correct: 2,
        optsKn: ['152', '1024', '16384', '2048'] },
      { q: 'Why does BF16 typically need less loss scaling than FP16?', qKn: 'BF16 ಸಾಮಾನ್ಯವಾಗಿ FP16 ಗಿಂತ ಏಕೆ ಕಡಿಮೆ loss scaling ಬೇಕಾಗುತ್ತದೆ?',
        opts: ['BF16 uses fewer total bits', 'BF16 has the same 8-bit exponent range as FP32, reducing underflow/overflow risk', 'BF16 stores gradients in FP64', 'Loss scaling is not related to numerical format'], correct: 1,
        optsKn: ['BF16 ಕಡಿಮೆ total bits ಬಳಸುತ್ತದೆ', 'BF16 FP32 ನಂತೆ ಅದೇ 8-bit exponent range ಹೊಂದಿದೆ, underflow/overflow ಅಪಾಯ ಕಡಿಮೆ ಮಾಡುತ್ತಾ', 'BF16 gradients ಅನ್ನೂ FP64 ನಲ್ಲಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ', 'Loss scaling numerical format ಜೊತೆ ಸಂಬಂಧಿಸುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
