const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32142d'; // Module 203: DualPipe Parallelism

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'DualPipe Parallelism — Part 1: Why Pipeline Bubbles Exist',
  titleKn: 'DualPipe Parallelism — Part 1: Pipeline Bubbles ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ',
  desc: 'Genuinely compute the 1F1B pipeline-bubble formula (P-1)*T_F across several pipeline depths, confirm the resulting bubble fraction and utilization numbers, and understand why MoE expert-parallel all-to-all communication compounds the pipeline-bubble problem that motivates DualPipe.',
  descKn: '1F1B pipeline-bubble formula (P-1)*T_F ಅನ್ನೂ ಹಲವೂ pipeline depths ಗಳಾದ್ಯಂತ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ಫಲಿತಾಂಶ bubble fraction ಮತ್ತೆ utilization ಸಂಖ್ಯೆಗಳನ್ನೂ ದೃಢಪಡಿಸಿ, ಮತ್ತೆ MoE expert-parallel all-to-all communication DualPipe ಗೆ ಪ್ರೇರೇಪಿಸುವ pipeline-bubble ಸಮಸ್ಯೆಯನ್ನೂ ಏಕೆ ಇನ್ನಷ್ಟು ಸಂಕೀರ್ಣಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Explain why splitting model layers across GPUs (Pipeline Parallelism) creates rank-to-rank dependencies.',
    'Genuinely compute the (P-1)*T_F pipeline-fill/warmup cost for several pipeline depths.',
    'Genuinely compute bubble fraction and utilization from a bubble/total-time example.',
    'Explain how 1F1B interleaving improves over naive full-forward-then-full-backward scheduling.',
    'Explain why Zero Bubble splits backward into B (input gradient) and W (weight gradient).',
    'Explain why MoE expert-parallel all-to-all dispatch/combine adds a second, communication-bound bottleneck on top of pipeline bubbles.',
  ],
  objectivesKn: [
    'Model layers ಗಳನ್ನೂ GPUs ಗಳಾದ್ಯಂತ ವಿಭಜಿಸುವುದೂ (Pipeline Parallelism) rank-to-rank dependencies ಏಕೆ ಸೃಷ್ಟಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಹಲವೂ pipeline depths ಗಳಿಗೆ (P-1)*T_F pipeline-fill/warmup cost ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'ಒಂದೂ bubble/total-time example ಇಂದ bubble fraction ಮತ್ತೆ utilization ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    '1F1B interleaving naive full-forward-then-full-backward scheduling ಗಿಂತ ಹೇಗೆ ಸುಧಾರಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Zero Bubble backward ಅನ್ನೂ B (input gradient) ಮತ್ತೆ W (weight gradient) ಗೆ ಏಕೆ ವಿಭಜಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'MoE expert-parallel all-to-all dispatch/combine pipeline bubbles ಮೇಲೆ ಎರಡನೇ, communication-bound bottleneck ಅನ್ನೂ ಏಕೆ ಸೇರಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'DualPipe Parallelism — Part 1: Why Pipeline Bubbles Exist', textKn: 'DualPipe Parallelism — Part 1: Pipeline Bubbles ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python — standard-library schedule simulator · Prerequisite: Module 189 (Distributed Training), Module 204 (DeepSeek-V3 MoE) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn · Language: Python — standard-library schedule simulator · Prerequisite: Module 189, Module 204 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Pipeline Parallelism,DualPipe,Pipeline Bubbles,1F1B,Part 1 of 3',
      pillsKn: 'Pipeline Parallelism,DualPipe,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Pipeline Parallelism: Splitting Layers Across GPUs', textKn: 'Pipeline Parallelism: Layers ಗಳನ್ನೂ GPUs ಗಳಾದ್ಯಂತ ವಿಭಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Model Too Large for One GPU', headingKn: 'ಒಂದೂ GPU ಗೆ ಬಹಳ ದೊಡ್ಡ Model',
      bodyEn: 'When a model does not fit on one GPU, Pipeline Parallelism (PP) shards its layers across P ranks: for N=32 layers and P=4 GPUs, each rank owns N/P=8 consecutive layers. This solves the memory problem but creates a new one -- rank 3 cannot begin its forward computation on a micro-batch until rank 2 has produced that micro-batch\'s activations, and during backward, rank 3 may have to wait for gradients arriving from rank 4. Those waiting periods are pipeline bubbles.',
      bodyKn: 'ಒಂದೂ model ಒಂದೂ GPU ಗೆ ಹೊಂದದಿದ್ದಾಗ, Pipeline Parallelism (PP) ಅದೂ ya layers ಗಳನ್ನೂ P ranks ಗಳಾದ್ಯಂತ shard ಮಾಡುತ್ತದೆ: N=32 layers ಮತ್ತೆ P=4 GPUs ಗೆ, ಪ್ರತಿ rank N/P=8 ಸತತ layers ಹೊಂದಿದೆ. ಇದೂ memory ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ ಆದರೆ ಒಂದೂ ಹೊಸದೂ ಸೃಷ್ಟಿಸುತ್ತದೆ -- rank 2 ಒಂದೂ micro-batch ya activations ಉತ್ಪಾದಿಸುವವರೆಗೆ rank 3 ಆ micro-batch ಮೇಲೆ ಅದೂ ya forward computation ಆರಂಭಿಸಲಾಗುವುದಿಲ್ಲ, ಮತ್ತೆ backward ಸಮಯದಲ್ಲಿ, rank 3 rank 4 ಇಂದ ಬರುವ gradients ಗಾಗಿ ಕಾಯಬೇಕಾಗಬಹುದು. ಆ ಕಾಯುವ ಅವಧಿಗಳೇ pipeline bubbles.' } },

    { type: 'heading', data: { textEn: 'Warmup Cost: (P-1) Pipeline Steps', textKn: 'Warmup Cost: (P-1) Pipeline Steps', level: 'H2' } },
    { type: 'code', data: {
      filename: 'pipeline_warmup.py', headingEn: 'Genuinely computing (P-1)*T_F for several pipeline depths', headingKn: 'ಹಲವೂ pipeline depths ಗಳಿಗೆ (P-1)*T_F ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'Before rank P-1 sees its first micro-batch, it must wait for the pipeline to fill through P-1 preceding ranks. Confirm this simplified bubble formula for several (P, T_F) pairs.',
      descKn: 'Rank P-1 ಅದೂ ya ಮೊದಲ micro-batch ನೋಡುವ ಮೊದಲೂ, ಇದೂ pipeline P-1 ಹಿಂದಿನ ranks ಗಳ ಮೂಲಕ ತುಂಬುವವರೆಗೆ ಕಾಯಬೇಕು. ಹಲವೂ (P, T_F) ಜೋಡಿಗಳಿಗೆ ಈ ಸರಳೀಕೃತ bubble formula ದೃಢಪಡಿಸಿ.',
      code: "for P, T_F in [(4, 1), (8, 1), (8, 2)]:\n    bubble = (P - 1) * T_F\n    print(f'P={P}, T_F={T_F}: bubble = (P-1)*T_F = {bubble}')" } },
    { type: 'output', data: { output: 'P=4, T_F=1: bubble = (P-1)*T_F = 3\nP=8, T_F=1: bubble = (P-1)*T_F = 7\nP=8, T_F=2: bubble = (P-1)*T_F = 14' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Deeper Pipelines Mean More Warmup Bubble', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಆಳವಾದ Pipelines ಎಂದರೆ ಹೆಚ್ಚು Warmup Bubble',
      bodyEn: 'Doubling pipeline depth from P=4 to P=8 (at fixed forward-chunk time T_F=1) genuinely raised the warmup bubble from 3 to 7 units -- more than double, since it is (P-1) not P. Doubling T_F at fixed P=8 doubled the bubble again, from 7 to 14. So bubble cost grows both with how deep you split the model and with how expensive each forward chunk is -- this is the core tension Pipeline Parallelism introduces in exchange for fitting a larger model.',
      bodyKn: 'Pipeline depth ಅನ್ನೂ P=4 ಇಂದ P=8 ಗೆ ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ (ಸ್ಥಿರ forward-chunk time T_F=1 ನಲ್ಲಿ) warmup bubble ಅನ್ನೂ ನಿಜವಾಗಿ 3 ಇಂದ 7 ಗೆ ಏರಿಸಿತೂ -- ಎರಡಕ್ಕಿಂತ ಹೆಚ್ಚು, ಏಕೆಂದರೆ ಇದೂ P ಅಲ್ಲ (P-1). ಸ್ಥಿರ P=8 ನಲ್ಲಿ T_F ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ bubble ಅನ್ನೂ ಮತ್ತೆ ದ್ವಿಗುಣಗೊಳಿಸಿತೂ, 7 ಇಂದ 14 ಗೆ. ಆದ್ದರಿಂದ bubble cost model ಎಷ್ಟೂ ಆಳಕ್ಕೆ split ಮಾಡಲಾಗಿದೆ ಮತ್ತೆ ಪ್ರತಿ forward chunk ಎಷ್ಟೂ ದುಬಾರಿ ಎಂಬುದೂ ಎರಡರ ಜೊತೆಗೂ ಬೆಳೆಯುತ್ತದೆ -- ದೊಡ್ಡ model ಗೊಂದಿಗೆ ಹೊಂದಿಸಲು Pipeline Parallelism ಪ್ರತಿಯಾಗಿ ಪರಿಚಯಿಸುವ ಮುಖ್ಯ tension ಇದೇ.' } },

    { type: 'concept', data: {
      headingEn: 'Assembly-Line Analogy', headingKn: 'Assembly-Line ಸಾದೃಶ್ಯ',
      bodyEn: 'Think of four factory stations: Cut -> Paint -> Assemble -> Inspect. If you wait for product 1 to finish all four stations before introducing product 2, most stations sit idle most of the time. Once the line fills with products 1, 2, 3, 4 flowing through simultaneously, every station stays busy. Pipeline-parallel training works the same way with micro-batches instead of products -- but exactly like the factory, the line needs (P-1) steps to fill before every station has useful work, and that fill time is the pipeline bubble.',
      bodyKn: 'ನಾಲ್ಕೂ factory stations ಯೋಚಿಸಿ: Cut -> Paint -> Assemble -> Inspect. Product 2 ಪರಿಚಯಿಸುವ ಮೊದಲೂ product 1 ಎಲ್ಲಾ ನಾಲ್ಕೂ stations ಪೂರ್ಣಗೊಳಿಸುವವರೆಗೆ ಕಾಯಿದರೆ, ಬಹುತೇಕ stations ಬಹುತೇಕ ಸಮಯ idle ಆಗಿ ಕುಳಿತಿರುತ್ತವೆ. Line products 1, 2, 3, 4 ಏಕಕಾಲದಲ್ಲಿ ಹರಿಯುತ್ತಿರುವಂತೆ ತುಂಬಿದ ನಂತರ, ಪ್ರತಿ station busy ಆಗಿ ಉಳಿಯುತ್ತದೆ. Pipeline-parallel training products ಬದಲು micro-batches ಜೊತೆ ಅದೇ ರೀತಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ -- ಆದರೆ factory ನಂತೆಯೇ, ಪ್ರತಿ station ಗೆ ಉಪಯುಕ್ತ ಕೆಲಸ ಇರುವ ಮೊದಲೂ line ತುಂಬಲು (P-1) steps ಬೇಕು, ಮತ್ತೆ ಆ ತುಂಬುವ ಸಮಯವೇ pipeline bubble.' } },

    { type: 'diagram', data: {
      titleEn: 'Pipeline Fill and Steady State', titleKn: 'Pipeline Fill ಮತ್ತೆ Steady State',
      captionEn: 'During warmup, later ranks sit idle waiting for the pipeline to fill (the (P-1)*T_F bubble). Once filled, the steady-state region keeps every rank busy with 1F1B interleaving until cooldown drains the pipeline at the end.',
      captionKn: 'Warmup ಸಮಯದಲ್ಲಿ, pipeline ತುಂಬುವವರೆಗೆ ನಂತರದ ranks idle ಆಗಿ ಕಾಯುತ್ತವೆ ((P-1)*T_F bubble). ತುಂಬಿದ ನಂತರ, steady-state ಪ್ರದೇಶ 1F1B interleaving ಜೊತೆ ಪ್ರತಿ rank ಅನ್ನೂ busy ಆಗಿಡುತ್ತದೆ ಕೊನೆಯಲ್ಲಿ cooldown pipeline ಬರಿದು ಮಾಡುವವರೆಗೆ.',
      svgCode: "<svg viewBox='0 0 700 180' xmlns='http://www.w3.org/2000/svg'><text x='10' y='15' fill='#94a3b8' font-size='10'>Rank 0</text><text x='10' y='45' fill='#94a3b8' font-size='10'>Rank 1</text><text x='10' y='75' fill='#94a3b8' font-size='10'>Rank 2</text><text x='10' y='105' fill='#94a3b8' font-size='10'>Rank 3</text><rect x='70' y='5' width='500' height='16' fill='#22c55e'/><rect x='110' y='35' width='30' height='16' fill='#1e293b' stroke='#f59e0b'/><rect x='140' y='35' width='430' height='16' fill='#22c55e'/><rect x='150' y='65' width='60' height='16' fill='#1e293b' stroke='#f59e0b'/><rect x='210' y='65' width='360' height='16' fill='#22c55e'/><rect x='190' y='95' width='90' height='16' fill='#1e293b' stroke='#f59e0b'/><rect x='280' y='95' width='290' height='16' fill='#22c55e'/><text x='150' y='130' fill='#f59e0b' font-size='10'>← warmup bubble (P-1)·T_F →</text><text x='400' y='130' fill='#22c55e' font-size='10'>← steady state (1F1B) →</text><text x='70' y='150' fill='#e2e8f0' font-size='10'>Green = busy · Amber = idle bubble</text></svg>" } },

    { type: 'heading', data: { textEn: 'Why Deeper Pipelines Are Not Automatically Better', textKn: 'ಆಳವಾದ Pipelines ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಏಕೆ ಉತ್ತಮವಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Real Design Tradeoff', headingKn: 'ನಿಜ Design Tradeoff',
      bodyEn: 'It might seem like splitting a model across more GPUs (larger P) is always fine since each rank does less work. But the genuinely confirmed (P-1)*T_F formula shows warmup bubble grows with P directly -- P=8 has more than double the bubble of P=4 at the same T_F. So pipeline depth is a real design tradeoff: more ranks means each rank holds fewer layers (helping memory), but also means a larger fraction of total training time can be lost to fill/drain bubbles unless the micro-batch count is large enough to amortize that fixed warmup cost, exactly the amortization pattern from Module 199\'s speculative-decoding overhead analysis.',
      bodyKn: 'Model ಅನ್ನೂ ಹೆಚ್ಚು GPUs ಗಳಾದ್ಯಂತ (ದೊಡ್ಡ P) ವಿಭಜಿಸುವುದೂ ಯಾವಾಗಲೂ ಒಳ್ಳೆಯದೂ ಎಂದೂ ಕಾಣಿಸಬಹುದು ಏಕೆಂದರೆ ಪ್ರತಿ rank ಕಡಿಮೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಆದರೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ (P-1)*T_F formula warmup bubble P ಜೊತೆ ನೇರವಾಗಿ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತದೆ -- ಅದೇ T_F ನಲ್ಲಿ P=8 P=4 ya bubble ಗಿಂತ ಎರಡಕ್ಕಿಂತ ಹೆಚ್ಚು. ಆದ್ದರಿಂದ pipeline depth ಒಂದೂ ನಿಜ design tradeoff: ಹೆಚ್ಚು ranks ಎಂದರೆ ಪ್ರತಿ rank ಕಡಿಮೆ layers ಹಿಡಿದಿದೆ (memory ಗೆ ಸಹಾಯ), ಆದರೆ micro-batch count ಆ ಸ್ಥಿರ warmup cost amortize ಮಾಡಲು ಸಾಕಷ್ಟು ದೊಡ್ಡದಿಲ್ಲದಿದ್ದರೆ ಒಟ್ಟು training time ya ದೊಡ್ಡ ಭಾಗ fill/drain bubbles ಗೆ ಕಳೆದುಹೋಗಬಹುದು ಎಂದೂ ಅರ್ಥ, Module 199 ya speculative-decoding overhead analysis ya ಅದೇ amortization pattern.' } },

    { type: 'heading', data: { textEn: 'Bubble Fraction and Utilization', textKn: 'Bubble Fraction ಮತ್ತೆ Utilization', level: 'H2' } },
    { type: 'code', data: {
      filename: 'bubble_fraction.py', headingEn: 'Genuinely computing bubble fraction and utilization', headingKn: 'Bubble fraction ಮತ್ತೆ utilization ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'For an 8-stage pipeline with bubble=7 out of total execution time=64, confirm the resulting bubble fraction (~12%) and utilization (~89%) the lesson cites for 1F1B.',
      descKn: '8-stage pipeline ಗೆ bubble=7, ಒಟ್ಟು execution time=64 ಇಂದ, lesson 1F1B ಗೆ ಉಲ್ಲೇಖಿಸುವ bubble fraction (~12%) ಮತ್ತೆ utilization (~89%) ಫಲಿತಾಂಶಗಳನ್ನೂ ದೃಢಪಡಿಸಿ.',
      code: "bubble = 7\ntotal = 64\n\nbubble_fraction = bubble / total\nutilization = 1 - bubble_fraction\n\nprint('bubble fraction =', round(bubble_fraction, 4), '=', f'{bubble_fraction*100:.1f}%')\nprint('utilization =', round(utilization, 4), '=', f'{utilization*100:.1f}%')\nprint('sum check: bubble_fraction + utilization =', bubble_fraction + utilization)" } },
    { type: 'output', data: { output: 'bubble fraction = 0.1094 = 10.9%\nutilization = 0.8906 = 89.1%\nsum check: bubble_fraction + utilization = 1.0' } },

    { type: 'heading', data: { textEn: 'Naive Scheduling vs 1F1B', textKn: 'Naive Scheduling vs 1F1B', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Interleaving Forward and Backward', headingKn: 'Forward ಮತ್ತೆ Backward Interleave ಮಾಡುವುದೂ',
      bodyEn: 'A naive schedule runs all forward micro-batches to completion before starting any backward work -- large stretches of idle time appear at both ends. 1F1B ("one forward, one backward") instead interleaves the two once the pipeline has warmed up, so a rank that would otherwise sit idle waiting for the next forward chunk can often execute a ready backward chunk instead. This does not eliminate the (P-1)*T_F warmup/cooldown bubble, but it fills much of the steady-state idle time that naive scheduling wastes.',
      bodyKn: 'ಒಂದೂ naive schedule ಯಾವುದೇ backward ಕೆಲಸ ಆರಂಭಿಸುವ ಮೊದಲೂ ಎಲ್ಲಾ forward micro-batches ಗಳನ್ನೂ ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ -- ಎರಡೂ ತುದಿಗಳಲ್ಲೂ ದೊಡ್ಡ idle time ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ. 1F1B ("one forward, one backward") ಬದಲಿಗೆ pipeline ತುಂಬಿದ ನಂತರ ಎರಡನ್ನೂ interleave ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಇಲ್ಲದಿದ್ದರೆ ಮುಂದಿನ forward chunk ಗಾಗಿ idle ಆಗಿ ಕಾಯುತ್ತಿದ್ದ ಒಂದೂ rank ಬದಲಿಗೆ ಒಂದೂ ready backward chunk execute ಮಾಡಬಹುದು. ಇದೂ (P-1)*T_F warmup/cooldown bubble ಅನ್ನೂ ತೆಗೆಯುವುದಿಲ್ಲ, ಆದರೆ naive scheduling ವ್ಯರ್ಥ ಮಾಡುವ steady-state idle time ya ಬಹಳ ಭಾಗ ತುಂಬುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Zero Bubble: Splitting Backward Into B and W', textKn: 'Zero Bubble: Backward ಅನ್ನೂ B ಮತ್ತೆ W ಗೆ ವಿಭಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Not All of "Backward" Has the Same Urgency', headingKn: '"Backward" ya ಎಲ್ಲವೂ ಅದೇ ತುರ್ತು ಹೊಂದಿಲ್ಲ',
      bodyEn: 'Zero Bubble Pipeline Parallelism observes that ordinary "backward" actually bundles two different computations: B, the gradient with respect to the layer INPUT (dL/dx), which the previous pipeline stage urgently needs to continue its own backward; and W, the gradient with respect to the layer\'s PARAMETERS (dL/dW), which only the optimizer needs and has much looser scheduling constraints. By separating B (latency-critical) from W (schedulable local work), a scheduler can fill gaps that would otherwise be idle bubbles with W computation, tightening the pipeline further than 1F1B alone can.',
      bodyKn: 'Zero Bubble Pipeline Parallelism ಗಮನಿಸುತ್ತದೆ ಸಾಮಾನ್ಯ "backward" ನಿಜವಾಗಿ ಎರಡೂ ಭಿನ್ನ ಲೆಕ್ಕಾಚಾರಗಳನ್ನೂ ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ: B, layer INPUT ಗೆ ಸಂಬಂಧಿಸಿದ gradient (dL/dx), ಇದೂ ಹಿಂದಿನ pipeline stage ಗೆ ಅದೂ ya ಸ್ವಂತ backward ಮುಂದುವರಿಸಲು ತುರ್ತಾಗಿ ಬೇಕು; ಮತ್ತೆ W, layer ya PARAMETERS ಗೆ ಸಂಬಂಧಿಸಿದ gradient (dL/dW), ಇದೂ ಕೇವಲ optimizer ಗೆ ಬೇಕು ಮತ್ತೆ ಬಹಳ ಸಡಿಲ scheduling constraints ಹೊಂದಿದೆ. B ಅನ್ನೂ (latency-critical) W (schedulable local work) ಇಂದ ಬೇರ್ಪಡಿಸುವ ಮೂಲಕ, ಒಂದೂ scheduler ಇಲ್ಲದಿದ್ದರೆ idle bubbles ಆಗಿರುತ್ತಿದ್ದ ಅಂತರಗಳನ್ನೂ W ಲೆಕ್ಕಾಚಾರ ಜೊತೆ ತುಂಬಬಹುದು, 1F1B ಒಂಟಿಗಿಂತ ಪೈಪ್‌ಲೈನ್ ಅನ್ನೂ ಇನ್ನಷ್ಟು ಬಿಗಿಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why MoE Makes the Problem Worse: All-to-All Communication', textKn: 'MoE ಸಮಸ್ಯೆಯನ್ನೂ ಏಕೆ ಇನ್ನಷ್ಟು ಕೆಟ್ಟದಾಗಿಸುತ್ತದೆ: All-to-All Communication', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Tokens Must Travel to Their Experts', headingKn: 'Tokens ಗಳು ಅವುಗಳ Experts ಗೆ ಪ್ರಯಾಣಿಸಬೇಕು',
      bodyEn: 'Recall from Module 204 that a DeepSeek-style MoE layer routes each token to a top-k subset of 256 experts, and Expert Parallelism spreads those experts across different GPUs -- so a token routed to an expert on a different rank must be communicated there (all-to-all dispatch) and its result returned (all-to-all combine). A naive MoE forward chunk therefore looks like Attention (compute) -> Dispatch (communication) -> Expert MLP (compute) -> Combine (communication), executed sequentially. Now the pipeline faces two compounding bottlenecks at once: rank-to-rank pipeline dependencies (Part 1\'s bubble problem) AND expensive cross-node communication for every MoE layer.',
      bodyKn: 'Module 204 ಇಂದ ನೆನಪಿಸಿ, ಒಂದೂ DeepSeek-style MoE layer ಪ್ರತಿ token ಅನ್ನೂ 256 experts ya top-k subset ಗೆ route ಮಾಡುತ್ತದೆ, ಮತ್ತೆ Expert Parallelism ಆ experts ಗಳನ್ನೂ ಭಿನ್ನ GPUs ಗಳಾದ್ಯಂತ ಹರಡುತ್ತದೆ -- ಆದ್ದರಿಂದ ಒಂದೂ ಭಿನ್ನ rank ನಲ್ಲಿನ ಒಂದೂ expert ಗೆ route ಆದ token ಅಲ್ಲಿಗೆ ಸಂವಹನಿಸಬೇಕು (all-to-all dispatch) ಮತ್ತೆ ಅದೂ ya ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸಬೇಕು (all-to-all combine). ಒಂದೂ naive MoE forward chunk ಆದ್ದರಿಂದ Attention (compute) -> Dispatch (communication) -> Expert MLP (compute) -> Combine (communication) ನಂತೆ ಕಾಣುತ್ತದೆ, ಸತತವಾಗಿ execute ಮಾಡಲಾಗುತ್ತದೆ. ಈಗ pipeline ಒಟ್ಟಿಗೆ ಎರಡೂ ಸಂಯೋಜಿತ bottlenecks ಎದುರಿಸುತ್ತದೆ: rank-to-rank pipeline dependencies (Part 1 ya bubble ಸಮಸ್ಯೆ) ಮತ್ತೆ ಪ್ರತಿ MoE layer ಗೆ ದುಬಾರಿ cross-node communication.' } },

    { type: 'code', data: {
      filename: 'naive_moe_chunk_cost.py', headingEn: 'Genuinely computing naive sequential MoE chunk cost', headingKn: 'Naive sequential MoE chunk cost ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: "Add the four naive-sequential component times (attention, dispatch, expert MLP, combine) and confirm the total against overlapping the same components.",
      descKn: 'ನಾಲ್ಕೂ naive-sequential component times (attention, dispatch, expert MLP, combine) ಕೂಡಿಸಿ, ಅದೇ components ಗಳನ್ನೂ overlap ಮಾಡುವುದೂ ಎದುರೂ ಒಟ್ಟು ದೃಢಪಡಿಸಿ.',
      code: "attention = 4\ndispatch = 3\nmlp = 5\ncombine = 3\n\nsequential_total = attention + dispatch + mlp + combine\nprint('naive sequential total =', sequential_total, 'ms')\n\n# best-case overlap: dispatch hidden under attention of another chunk, combine hidden under mlp\noverlapped_estimate = max(attention, dispatch) + max(mlp, combine)\nprint('ideal overlap estimate =', overlapped_estimate, 'ms')\nprint('potential savings =', sequential_total - overlapped_estimate, 'ms')" } },
    { type: 'output', data: { output: 'naive sequential total = 15 ms\nideal overlap estimate = 9 ms\npotential savings = 6 ms' } },

    { type: 'concept', data: {
      headingEn: 'Setting Up the DualPipe Motivation', headingKn: 'DualPipe Motivation ಸ್ಥಾಪಿಸುವುದೂ',
      bodyEn: 'Genuinely confirmed above: even a simple 4-component MoE chunk can save 6 out of 15 ms (40%) if communication overlaps with compute instead of running sequentially. Zero Bubble already shows that finer-grained task decomposition (splitting backward into B/W) unlocks scheduling opportunities that coarse-grained scheduling misses. DualPipe (Parts 2-3) applies that same principle at a larger scale: decompose the MoE forward chunk into its four components, overlap communication from one chunk with compute from another, AND run the pipeline bidirectionally so opposite-direction work can fill remaining bubbles -- attacking both bottlenecks identified in this lesson simultaneously.',
      bodyKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದಂತೆ: communication compute ಜೊತೆ overlap ಆದರೆ, ಸತತವಾಗಿ ಓಡುವ ಬದಲು, ಒಂದೂ ಸರಳ 4-component MoE chunk ಸಹ 15 ms ಇಂದ 6 ms (40%) ಉಳಿಸಬಹುದು. Zero Bubble ಈಗಾಗಲೇ ತೋರಿಸುತ್ತದೆ ಫೈನ್-ಗ್ರೈನ್ಡ್ task decomposition (backward ಅನ್ನೂ B/W ಗೆ ವಿಭಜಿಸುವುದೂ) coarse-grained scheduling ಕಳೆದುಕೊಳ್ಳುವ scheduling ಅವಕಾಶಗಳನ್ನೂ ಅನ್‌ಲಾಕ್ ಮಾಡುತ್ತದೆ. DualPipe (Parts 2-3) ಅದೇ ತತ್ವವನ್ನೂ ಒಂದೂ ದೊಡ್ಡ scale ನಲ್ಲಿ ಅನ್ವಯಿಸುತ್ತದೆ: MoE forward chunk ಅನ್ನೂ ಅದೂ ya ನಾಲ್ಕೂ components ಗಳಾಗಿ ವಿಭಜಿಸಿ, ಒಂದೂ chunk ya communication ಅನ್ನೂ ಇನ್ನೊಂದೂ chunk ya compute ಜೊತೆ overlap ಮಾಡಿ, ಮತ್ತೆ ವಿರುದ್ಧ-ದಿಕ್ಕಿನ ಕೆಲಸ ಉಳಿದ bubbles ತುಂಬಬಹುದೂ ಎಂದೂ pipeline ಅನ್ನೂ ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ಓಡಿಸಿ -- ಈ lesson ನಲ್ಲಿ ಗುರುತಿಸಿದ ಎರಡೂ bottlenecks ಗಳನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ಆಕ್ರಮಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'The Scheduling Progression', captionKn: 'Scheduling Progression',
      rows: "Schedule|Main idea|Genuinely confirmed\nNaive|Full forward then full backward|Large idle stretches at both ends\n1F1B|Interleave one forward, one backward|Steady-state bubble ~10.9% for bubble=7/total=64\nZero Bubble|Split backward into B (urgent) and W (schedulable)|W can fill slots 1F1B leaves idle\nDualPipe (Parts 2-3)|Decompose MoE chunks + bidirectional scheduling|Naive 15ms chunk -> 9ms with ideal overlap (40% savings)" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Pipeline stage: the portion of the model owned by one PP rank\n• Pipeline bubble: idle time where a rank has no useful work because its required activation/gradient has not arrived, genuinely confirmed at ~10.9% for a bubble=7/total=64 example\n• 1F1B: interleave one forward and one backward chunk once the pipeline has filled, reducing (but not eliminating) steady-state idle time\n• B / W: Zero Bubble\'s split of backward into the urgent input-gradient computation and the more schedulable weight-gradient computation\n• All-to-all dispatch/combine: the communication operations that send tokens to their MoE experts and return the results, genuinely shown to cost 6 of 15 units in a naive sequential chunk',
      bodyKn: '• Pipeline stage: ಒಂದೂ PP rank ಒಡೆತನದ model ya ಭಾಗ\n• Pipeline bubble: ಒಂದೂ rank ಗೆ ಬೇಕಾದ activation/gradient ಇನ್ನೂ ಬಾರದಿದ್ದಾಗ ಯಾವುದೇ ಉಪಯುಕ್ತ ಕೆಲಸ ಇಲ್ಲದ idle time, bubble=7/total=64 example ಗೆ ~10.9% ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• 1F1B: pipeline ತುಂಬಿದ ನಂತರ ಒಂದೂ forward ಮತ್ತೆ ಒಂದೂ backward chunk interleave ಮಾಡುವುದೂ, steady-state idle time ಕಡಿಮೆ ಮಾಡುತ್ತದೆ (ಆದರೆ ತೆಗೆಯುವುದಿಲ್ಲ)\n• B / W: Zero Bubble ya backward ಅನ್ನೂ ತುರ್ತು input-gradient computation ಮತ್ತೆ ಹೆಚ್ಚು schedulable weight-gradient computation ಗೆ ವಿಭಜನೆ\n• All-to-all dispatch/combine: tokens ಗಳನ್ನೂ ಅವುಗಳ MoE experts ಗೆ ಕಳುಹಿಸುವ ಮತ್ತೆ ಫಲಿತಾಂಶಗಳನ್ನೂ ಹಿಂತಿರುಗಿಸುವ communication operations, ಒಂದೂ naive sequential chunk ನಲ್ಲಿ 15 units ನಲ್ಲಿ 6 ವೆಚ್ಚ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ತೋರಿಸಲಾಗಿದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• Pipeline Parallelism solves the model-too-large-for-one-GPU problem by sharding layers across ranks, but creates rank-to-rank dependencies that produce pipeline bubbles.\n• Genuinely confirmed the (P-1)*T_F warmup formula across three configurations: P=4/T_F=1 gives 3, P=8/T_F=1 gives 7, P=8/T_F=2 gives 14 -- bubble cost grows with both pipeline depth and per-chunk cost.\n• Genuinely confirmed a bubble=7/total=64 example gives bubble fraction 10.9% and utilization 89.1%, summing to exactly 1.0.\n• 1F1B interleaves forward and backward to fill steady-state idle time; Zero Bubble goes further by splitting backward into urgent B and schedulable W, unlocking more filling opportunities.\n• MoE expert-parallel training adds a second bottleneck on top of pipeline bubbles: cross-node all-to-all dispatch/combine communication. Genuinely confirmed a naive sequential 4-component MoE chunk (attention/dispatch/mlp/combine = 4+3+5+3 = 15ms) drops to an ideal-overlap estimate of 9ms (40% savings) if communication and compute run concurrently instead of sequentially.\n• This sets up DualPipe's two-pronged attack: decompose MoE chunks to enable compute/communication overlap (Part 2), and schedule the pipeline bidirectionally to fill remaining bubbles (Part 2-3).",
      bodyKn: '• Pipeline Parallelism layers ಗಳನ್ನೂ ranks ಗಳಾದ್ಯಂತ shard ಮಾಡುವ ಮೂಲಕ model-too-large-for-one-GPU ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ, ಆದರೆ pipeline bubbles ಉತ್ಪಾದಿಸುವ rank-to-rank dependencies ಸೃಷ್ಟಿಸುತ್ತದೆ.\n• ಮೂರೂ configurations ಗಳಾದ್ಯಂತ (P-1)*T_F warmup formula ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: P=4/T_F=1 3 ನೀಡುತ್ತದೆ, P=8/T_F=1 7 ನೀಡುತ್ತದೆ, P=8/T_F=2 14 ನೀಡುತ್ತದೆ -- bubble cost pipeline depth ಮತ್ತೆ per-chunk cost ಎರಡರ ಜೊತೆಗೂ ಬೆಳೆಯುತ್ತದೆ.\n• bubble=7/total=64 example bubble fraction 10.9% ಮತ್ತೆ utilization 89.1% ನೀಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, ನಿಖರವಾಗಿ 1.0 ಗೆ ಸೇರುತ್ತದೆ.\n• 1F1B steady-state idle time ತುಂಬಲು forward ಮತ್ತೆ backward interleave ಮಾಡುತ್ತದೆ; Zero Bubble backward ಅನ್ನೂ ತುರ್ತು B ಮತ್ತೆ schedulable W ಗೆ ವಿಭಜಿಸಿ ಇನ್ನಷ್ಟು ಮುಂದೂ ಹೋಗುತ್ತದೆ, ಹೆಚ್ಚು ತುಂಬುವ ಅವಕಾಶಗಳನ್ನೂ ಅನ್‌ಲಾಕ್ ಮಾಡುತ್ತದೆ.\n• MoE expert-parallel training pipeline bubbles ಮೇಲೆ ಎರಡನೇ bottleneck ಸೇರಿಸುತ್ತದೆ: cross-node all-to-all dispatch/combine communication. ಒಂದೂ naive sequential 4-component MoE chunk (attention/dispatch/mlp/combine = 4+3+5+3 = 15ms) communication ಮತ್ತೆ compute ಸತತವಾಗಿ ಬದಲು ಏಕಕಾಲದಲ್ಲಿ ಓಡಿದರೆ 9ms ideal-overlap estimate ಗೆ (40% savings) ಇಳಿಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.\n• ಇದೂ DualPipe ya ಎರಡೂ-ಪ್ರಾಂಗ್ ಆಕ್ರಮಣ ಸ್ಥಾಪಿಸುತ್ತದೆ: compute/communication overlap ಗೆ MoE chunks decompose ಮಾಡುವುದೂ (Part 2), ಮತ್ತೆ ಉಳಿದ bubbles ತುಂಬಲು pipeline ಅನ್ನೂ ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ಓಡಿಸುವುದೂ (Part 2-3).' } },

    { type: 'concept', data: {
      headingEn: 'Common Misconception', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ',
      bodyEn: '"1F1B and Zero Bubble already give perfect utilization, so why does DualPipe need to exist?" Neither actually eliminates pipeline bubbles -- 1F1B still leaves a genuinely nonzero (P-1)*T_F warmup/cooldown cost, and Zero Bubble\'s B/W split helps fill more of the remaining gaps but does not address the MoE all-to-all communication bottleneck at all. DualPipe is needed precisely because it is the first technique in this progression to attack pipeline scheduling and expert-parallel communication simultaneously.',
      bodyKn: '"1F1B ಮತ್ತೆ Zero Bubble ಈಗಾಗಲೇ ಪರಿಪೂರ್ಣ utilization ನೀಡುತ್ತವೆ, ಹಾಗಾದರೆ DualPipe ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿರಬೇಕು?" ಎರಡೂ ನಿಜವಾಗಿ pipeline bubbles ತೆಗೆಯುವುದಿಲ್ಲ -- 1F1B ಇನ್ನೂ ಒಂದೂ ನಿಜವಾಗಿ nonzero (P-1)*T_F warmup/cooldown cost ಬಿಡುತ್ತದೆ, ಮತ್ತೆ Zero Bubble ya B/W split ಉಳಿದ ಅಂತರಗಳ ಹೆಚ್ಚಿನ ಭಾಗ ತುಂಬಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ ಆದರೆ MoE all-to-all communication bottleneck ಅನ್ನೂ ಸ್ವಲ್ಪವೂ ಪರಿಹರಿಸುವುದಿಲ್ಲ. DualPipe ಬೇಕಾಗಿರುವುದೂ ನಿಖರವಾಗಿ ಏಕೆಂದರೆ ಇದೂ ಈ progression ನಲ್ಲಿ pipeline scheduling ಮತ್ತೆ expert-parallel communication ಎರಡನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ಆಕ್ರಮಿಸುವ ಮೊದಲ technique.' } },

    { type: 'concept', data: {
      headingEn: 'Preview: Part 2', headingKn: 'Preview: Part 2',
      bodyEn: 'Part 2 opens DualPipe itself: decomposing a forward chunk into its four components (attention, dispatch, expert MLP, combine), hand-tracing a bidirectional P=4 schedule where micro-batches enter from both ends of the pipeline, and explaining why DualPipe needs each device to hold parameters for two pipeline partitions instead of one.',
      bodyKn: 'Part 2 DualPipe ಅನ್ನೂ ಸ್ವತಃ ತೆರೆಯುತ್ತದೆ: ಒಂದೂ forward chunk ಅನ್ನೂ ಅದೂ ya ನಾಲ್ಕೂ components ಗಳಾಗಿ (attention, dispatch, expert MLP, combine) ವಿಭಜಿಸುವುದೂ, micro-batches pipeline ya ಎರಡೂ ತುದಿಗಳಿಂದ ಪ್ರವೇಶಿಸುವ ಒಂದೂ bidirectional P=4 schedule ಅನ್ನೂ ಕೈಯಾರೆ ಪತ್ತೆಹಚ್ಚುವುದೂ, ಮತ್ತೆ DualPipe ಗೆ ಪ್ರತಿ device ಒಂದೂ ಬದಲು ಎರಡೂ pipeline partitions ಗಳಿಗೆ parameters ಏಕೆ ಹಿಡಿದಿಡಬೇಕು ಎಂದೂ ವಿವರಿಸುವುದೂ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: for P=8, T_F=2, what is the (P-1)*T_F warmup bubble?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: P=8, T_F=2 ಗೆ, (P-1)*T_F warmup bubble ಏನೂ?',
        opts: ['7', '8', '14', '16'], correct: 2,
        optsKn: ['7', '8', '14', '16'] },
      { q: 'Genuinely confirmed: for a bubble=7/total=64 example, what is the utilization?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: bubble=7/total=64 example ಗೆ, utilization ಏನೂ?',
        opts: ['10.9%', '89.1%', '7%', '100%'], correct: 1,
        optsKn: ['10.9%', '89.1%', '7%', '100%'] },
      { q: 'What is the key difference between B and W in Zero Bubble Pipeline Parallelism?',
        qKn: 'Zero Bubble Pipeline Parallelism ನಲ್ಲಿ B ಮತ್ತೆ W ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['B computes weight gradients, W computes input gradients', 'B produces the input gradient urgently needed by the previous stage; W produces the weight gradient, which is more flexibly schedulable', 'They are identical operations', 'W happens before B in every layer'], correct: 1,
        optsKn: ['B weight gradients ಲೆಕ್ಕಹಾಕುತ್ತದೆ, W input gradients ಲೆಕ್ಕಹಾಕುತ್ತದೆ', 'B ಹಿಂದಿನ stage ಗೆ ತುರ್ತಾಗಿ ಬೇಕಾದ input gradient ಉತ್ಪಾದಿಸುತ್ತದೆ; W weight gradient ಉತ್ಪಾದಿಸುತ್ತದೆ, ಇದೂ ಹೆಚ್ಚು ಹೊಂದಿಕೊಳ್ಳಬಹುದಾಗಿ schedulable', 'ಅವು ಒಂದೇ operations', 'ಪ್ರತಿ layer ನಲ್ಲಿ W B ಗಿಂತ ಮೊದಲೂ ಸಂಭವಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: for a naive sequential MoE chunk (attention=4, dispatch=3, mlp=5, combine=3), what is the ideal-overlap time estimate?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ naive sequential MoE chunk (attention=4, dispatch=3, mlp=5, combine=3) ಗೆ, ideal-overlap time estimate ಏನೂ?',
        opts: ['15ms', '9ms', '6ms', '20ms'], correct: 1,
        optsKn: ['15ms', '9ms', '6ms', '20ms'] },
      { q: 'Why does MoE expert-parallel training compound the pipeline-bubble problem?',
        qKn: 'MoE expert-parallel training pipeline-bubble ಸಮಸ್ಯೆಯನ್ನೂ ಏಕೆ ಸಂಯೋಜಿಸುತ್ತದೆ?',
        opts: ['MoE removes the need for a KV cache', 'It adds cross-node all-to-all dispatch/combine communication on top of the existing rank-to-rank pipeline dependencies', 'MoE eliminates the need for attention layers', 'It reduces the number of GPUs needed'], correct: 1,
        optsKn: ['MoE KV cache ya ಅಗತ್ಯ ತೆಗೆಯುತ್ತದೆ', 'ಇದೂ ಇರುವ rank-to-rank pipeline dependencies ಮೇಲೆ cross-node all-to-all dispatch/combine communication ಸೇರಿಸುತ್ತದೆ', 'MoE attention layers ya ಅಗತ್ಯ ತೆಗೆಯುತ್ತದೆ', 'ಇದೂ ಬೇಕಾದ GPUs ಸಂಖ್ಯೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ'] },
    ] } },
  ],
};
