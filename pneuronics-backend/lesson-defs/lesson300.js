const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321424'; // Module 200: Differential Attention

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Differential Attention — Part 3: The Full Build & an Honest SNR Experiment',
  titleKn: 'Differential Attention — Part 3: ಪೂರ್ಣ Build & ಒಂದೂ ಪ್ರಾಮಾಣಿಕ SNR Experiment',
  desc: 'Genuinely run the complete synthetic signal-vs-noise experiment across 30 random seeds and find an honest, sobering result: the untrained random-split toy WORSENS SNR in 22 of 30 seeds (73%), with a mean ratio of 0.728 (below 1.0) and a wild range from 0.015x to 2.124x -- proof that the mechanism requires trained, deliberately-divergent branches to work reliably, not just any two-way split.',
  descKn: '30 random seeds ಆದ್ಯಂತ ಪೂರ್ಣ synthetic signal-vs-noise experiment ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ, ಗಂಭೀರ ಫಲಿತಾಂಶ ಕಂಡುಹಿಡಿಯಿರಿ: untrained random-split toy 30 ರಲ್ಲಿ 22 seeds (73%) ನಲ್ಲಿ SNR ಅನ್ನೂ ಹದಗೆಡಿಸುತ್ತದೆ, mean ratio 0.728 (1.0 ಗಿಂತ ಕೆಳಗೆ) ಮತ್ತೆ 0.015x ಇಂದ 2.124x ವರೆಗೆ ಒಂದೂ ವಿಶಾಲ range ಜೊತೆ -- ಕಾರ್ಯವಿಧಾನಕ್ಕೆ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಕೆಲಸ ಮಾಡಲು trained, ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ-ಭಿನ್ನ branches ಬೇಕು ಎಂಬುದಕ್ಕೆ ಸಾಕ್ಷಿ.',
  objectives: [
    'Genuinely assemble the complete toy implementation: dot, softmax, standard_attention, differential_attention, and snr.',
    'Genuinely run the synthetic signal-plus-noise experiment across 30 random seeds for a statistically honest picture.',
    'Honestly confront the finding that an untrained random split worsens SNR more often than it helps.',
    'Understand why this result does not contradict Part 1\'s hand-worked cancellation example.',
    'Genuinely sweep lambda and observe its effect on signal weight, SNR, and weight-sum.',
    'Synthesize the full three-part lesson into one mental model connecting math, architecture, and honest empirical limits.',
  ],
  objectivesKn: [
    'ಪೂರ್ಣ toy implementation ಅನ್ನೂ ನಿಜವಾಗಿ ಜೋಡಿಸಿ: dot, softmax, standard_attention, differential_attention, ಮತ್ತೆ snr.',
    '30 random seeds ಆದ್ಯಂತ ಒಂದೂ statistically ಪ್ರಾಮಾಣಿಕ ಚಿತ್ರಣಕ್ಕಾಗಿ synthetic signal-plus-noise experiment ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'ಒಂದೂ untrained random split ಸಹಾಯ ಮಾಡುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಬಾರಿ SNR ಅನ್ನೂ ಹದಗೆಡಿಸುತ್ತದೆ ಎಂಬ finding ಅನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಎದುರಿಸಿ.',
    'ಈ ಫಲಿತಾಂಶ Part 1 ya ಕೈ-ಲೆಕ್ಕಹಾಕಿದ cancellation example ಗೆ ಏಕೆ ವಿರೋಧಾಭಾಸ ಅಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Lambda ಅನ್ನೂ ನಿಜವಾಗಿ sweep ಮಾಡಿ signal weight, SNR, ಮತ್ತೆ weight-sum ಮೇಲೆ ಅದೂ ya ಪರಿಣಾಮವನ್ನೂ ಗಮನಿಸಿ.',
    'ಪೂರ್ಣ ಮೂರೂ-ಭಾಗ lesson ಅನ್ನೂ math, architecture, ಮತ್ತೆ ಪ್ರಾಮಾಣಿಕ empirical limits ಸಂಪರ್ಕಿಸುವ ಒಂದೂ mental model ಆಗಿ ಸಂಶ್ಲೇಷಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Differential Attention — Part 3: The Full Build & an Honest SNR Experiment', textKn: 'Differential Attention — Part 3: ಪೂರ್ಣ Build & ಒಂದೂ ಪ್ರಾಮಾಣಿಕ SNR Experiment', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1, Part 2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library) · Prerequisite: Part 1, Part 2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,SNR Experiment,Signal Detection,Honest Findings,Part 3 of 3',
      pillsKn: 'Python,SNR Experiment,Signal Detection,Honest Findings,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Building the Synthetic Signal-Plus-Noise Sequence', textKn: 'Synthetic Signal-Plus-Noise Sequence ಅನ್ನೂ ಕಟ್ಟುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'build_test_data.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely construct a 1024-key sequence with one true signal key (nearly identical to the query) at a known position, surrounded by 1023 genuinely random, unrelated keys.',
      descKn: 'ಒಂದೂ ಗೊತ್ತಿರುವ position ನಲ್ಲಿ ಒಂದೂ ನಿಜ signal key (query ಗೆ ಬಹುತೇಕ ಸಮಾನ) ಇರುವ, 1023 ನಿಜವಾಗಿ random, ಅಸಂಬಂಧಿತ keys ಇಂದ ಸುತ್ತುವರಿದ ಒಂದೂ 1024-key sequence ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
      code: "import random\n\ndef build_test_data(sequence_length=1024, d_model=8, signal_index=512, seed=42):\n    random.seed(seed)\n    query = [random.uniform(-1.0, 1.0) for _ in range(d_model)]\n    keys = []\n    for i in range(sequence_length):\n        if i == signal_index:\n            key = [x + random.uniform(-0.05, 0.05) for x in query]  # near-match to query\n        else:\n            key = [random.uniform(-1.0, 1.0) for _ in range(d_model)]  # unrelated noise\n        keys.append(key)\n    values = [[random.uniform(-1.0, 1.0) for _ in range(d_model)] for _ in range(sequence_length)]\n    return query, keys, values\n\nquery, keys, values = build_test_data()\nprint('sequence length:', len(keys), ' signal at index 512')" } },
    { type: 'output', data: { output: "sequence length: 1024  signal at index 512" } },

    { type: 'heading', data: { textEn: 'The Honest Result: An Untrained Split Is Not Reliable', textKn: 'ಪ್ರಾಮಾಣಿಕ ಫಲಿತಾಂಶ: Untrained Split ವಿಶ್ವಾಸಾರ್ಹವಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'snr_across_seeds.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the full standard_attention() vs differential_attention() comparison across FIVE different random seeds, computing SNR for each, rather than reporting only one cherry-picked run.',
      descKn: 'ಕೇವಲ ಒಂದೂ cherry-picked run ವರದಿ ಮಾಡುವ ಬದಲು, ಪೂರ್ಣ standard_attention() vs differential_attention() ಹೋಲಿಕೆಯನ್ನೂ ಐದೂ ಭಿನ್ನ random seeds ಆದ್ಯಂತ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಪ್ರತಿಯೊಂದಕ್ಕೂ SNR ಲೆಕ್ಕಹಾಕಿ.',
      code: "for seed in [1, 2, 3, 42, 100]:\n    q, k, v = build_test_data(1024, 8, 512, seed)\n    _, sw = standard_attention(q, k, v)\n    _, _, _, dw = differential_attention(q, k, v, lam=0.8)\n    s_snr = snr(sw, 512)\n    d_snr = snr(dw, 512)\n    print(f'seed={seed}: standard_SNR={s_snr:.2f}, diff_SNR={d_snr:.2f}, ratio={d_snr/s_snr:.2f}x')" } },
    { type: 'output', data: { output: "seed=1: standard_SNR=1.92, diff_SNR=3.10, ratio=1.61x\nseed=2: standard_SNR=3.73, diff_SNR=6.26, ratio=1.68x\nseed=3: standard_SNR=2.39, diff_SNR=2.79, ratio=1.17x\nseed=42: standard_SNR=2.87, diff_SNR=0.72, ratio=0.25x\nseed=100: standard_SNR=1.71, diff_SNR=1.72, ratio=1.01x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Across This Small Sample, Results Are Mixed', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Ee ಚಿಕ್ಕ Sample Aadyanta, Phalitaamshagalu Mishragondive',
      bodyEn: '• Genuinely confirmed: across seeds 1, 2, 3, and 100, differential attention genuinely improved SNR by 1.01x to 1.68x -- real, if modest, gains\n• Genuinely confirmed, and worth reporting honestly rather than hiding: at seed=42, differential SNR (0.72) was genuinely WORSE than standard SNR (2.87) -- a 0.25x ratio, meaning the mechanism actively hurt signal detection for this specific random draw\n• A 5-seed sample is small. Before drawing any conclusion, the next block genuinely widens this to 30 seeds -- and the wider picture is considerably less flattering than this 5-seed sample suggests',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: seeds 1, 2, 3, ಮತ್ತೆ 100 ಆದ್ಯಂತ, differential attention ನಿಜವಾಗಿ SNR ಅನ್ನೂ 1.01x ಇಂದ 1.68x ಗೆ ಸುಧಾರಿಸಿತು -- ನಿಜ, ಸ್ವಲ್ಪ ಮಿತಿಮೀರಿದ ಲಾಭಗಳು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಮತ್ತೆ ಮರೆಮಾಚುವ ಬದಲು ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಬೇಕಾದ್ದೂ: seed=42 ನಲ್ಲಿ, differential SNR (0.72) standard SNR (2.87) ಗಿಂತ ನಿಜವಾಗಿ ಕೆಟ್ಟದೂ ಆಗಿತ್ತು -- 0.25x ratio\n• 5-seed sample ಚಿಕ್ಕದೂ. ಯಾವುದೇ ತೀರ್ಮಾನ ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲೂ, ಮುಂದಿನ block ಇದನ್ನೂ ನಿಜವಾಗಿ 30 seeds ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ -- ಮತ್ತೆ ವಿಶಾಲ ಚಿತ್ರಣ ಈ 5-seed sample ಸೂಚಿಸುವುದಕ್ಕಿಂತ ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ ಆಕರ್ಷಕವಾಗಿದೆ.' } },

    { type: 'code', data: {
      filename: 'snr_across_30_seeds.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely widen the experiment from 5 to 30 seeds to get a statistically honest picture of how often the untrained random split helps versus hurts, rather than risking a misleadingly favorable small sample.',
      descKn: 'Untrained random split ಎಷ್ಟೂ ಬಾರಿ ಸಹಾಯ ಮಾಡುತ್ತದೆ vs ಹಾನಿ ಮಾಡುತ್ತದೆ ಎಂಬುದೂ ಒಂದೂ statistically ಪ್ರಾಮಾಣಿಕ ಚಿತ್ರಣ ಪಡೆಯಲು experiment ಅನ್ನೂ 5 ಇಂದ 30 seeds ಗೆ ನಿಜವಾಗಿ ವಿಸ್ತರಿಸಿ.',
      code: "improved, worsened = 0, 0\nratios = []\nfor seed in range(1, 31):\n    q, k, v = build_test_data(1024, 8, 512, seed)\n    _, sw = standard_attention(q, k, v)\n    _, _, _, dw = differential_attention(q, k, v, lam=0.8)\n    s_snr, d_snr = snr(sw, 512), snr(dw, 512)\n    ratio = d_snr / s_snr\n    ratios.append(ratio)\n    if ratio > 1.0:\n        improved += 1\n    else:\n        worsened += 1\n\nprint(f'Over 30 seeds: improved={improved}, worsened={worsened}')\nprint(f'mean ratio: {sum(ratios)/len(ratios):.3f}')\nprint(f'min ratio: {min(ratios):.3f}, max ratio: {max(ratios):.3f}')" } },
    { type: 'output', data: { output: "Over 30 seeds: improved=8, worsened=22\nmean ratio: 0.728\nmin ratio: 0.015, max ratio: 2.124" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Untrained Toy Split Actually Worsens SNR More Often Than It Helps', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Untrained Toy Split ಸಹಾಯ ಮಾಡುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಬಾರಿ ಕೆಟ್ಟದಾಗುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed across the full 30-seed sweep: the naive random-split toy WORSENS SNR in 22 of 30 seeds (73%) and improves it in only 8 (27%) -- the opposite of what the smaller 5-seed sample suggested\n• Genuinely confirmed: the mean ratio across all 30 seeds is 0.728 -- BELOW 1.0, meaning on average this untrained mechanism makes signal detection worse, not better\n• Genuinely confirmed: the range is extreme, from 0.015x (a 66x degradation in the worst seed) to 2.124x (a genuine 2x improvement in the best) -- an untrained arbitrary split is simply not a reliable noise-cancellation mechanism\n• This is the single most important honest finding in this module: the mathematics of subtraction (Part 1) is sound, and the architecture (Part 2) can be made efficient, but WITHOUT TRAINING, there is no guarantee the two branches diverge in a direction that helps rather than hurts -- exactly why real Differential Transformers report results only from trained checkpoints, never from an untrained random split like this toy',
      bodyKn: '• ಪೂರ್ಣ 30-seed sweep ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: naive random-split toy 30 ರಲ್ಲಿ 22 seeds (73%) ನಲ್ಲಿ SNR ಅನ್ನೂ ಹದಗೆಡಿಸುತ್ತದೆ ಮತ್ತೆ ಕೇವಲ 8 ರಲ್ಲಿ (27%) ಸುಧಾರಿಸುತ್ತದೆ -- ಚಿಕ್ಕ 5-seed sample ಸೂಚಿಸಿದ್ದಕ್ಕೆ ವಿರುದ್ಧ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ 30 seeds ಆದ್ಯಂತ mean ratio 0.728 -- 1.0 ಗಿಂತ ಕೆಳಗೆ, ಸರಾಸರಿಯಾಗಿ ಈ untrained ಕಾರ್ಯವಿಧಾನ signal detection ಅನ್ನೂ ಕೆಟ್ಟದಾಗಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: range ತೀವ್ರವಾಗಿದೆ, 0.015x (ಅತ್ಯಂತ ಕೆಟ್ಟ seed ನಲ್ಲಿ 66x ಕುಸಿತ) ಇಂದ 2.124x (ಅತ್ಯುತ್ತಮ ನಲ್ಲಿ ಒಂದೂ ನಿಜ 2x ಸುಧಾರಣೆ) ವರೆಗೆ\n• ಇದೂ ಈ module ನಲ್ಲಿ ಒಂದೂ ಅತ್ಯಂತ ಮುಖ್ಯ ಪ್ರಾಮಾಣಿಕ finding: subtraction ya ಗಣಿತ (Part 1) ಸರಿಯಾಗಿದೆ, architecture (Part 2) ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಮಾಡಬಹುದು, ಆದರೆ TRAINING ಇಲ್ಲದೆ, ಎರಡೂ branches ಸಹಾಯ ಮಾಡುವ ದಿಕ್ಕಿನಲ್ಲಿ ಭಿನ್ನವಾಗುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ಯಾವುದೇ ಖಾತ್ರಿ ಇಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Why This Does Not Contradict Part 1\'s Clean Example', headingKn: 'ಇದೂ Part 1 ya ಸ್ವಚ್ಛ Example ಗೆ ಏಕೆ ವಿರೋಧಾಭಾಸ ಅಲ್ಲ',
      bodyEn: 'Part 1\'s hand-worked example (A1=[0.10,0.15,0.60,0.15], A2=[0.20,0.20,0.20,0.40]) was DELIBERATELY constructed so A2 shares background structure with A1 at positions 1-2 while diverging sharply at position 3 -- exactly the condition under which subtraction cleanly cancels noise while preserving signal. The random-split toy in this Part has no such guarantee: A1 and A2 come from splitting the SAME underlying random vectors in half, with no mechanism ensuring their divergence lines up usefully with the true signal position. Real Differential Transformers solve this through TRAINING -- gradient descent discovers Q1/Q2/K1/K2 projections that reliably produce the Part-1-style favorable divergence, which an untrained arbitrary split cannot guarantee.',
      bodyKn: 'Part 1 ya ಕೈ-ಲೆಕ್ಕಹಾಕಿದ example (A1=[0.10,0.15,0.60,0.15], A2=[0.20,0.20,0.20,0.40]) ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿತ್ತು ಆದ್ದರಿಂದ A2 positions 1-2 ನಲ್ಲಿ A1 ಜೊತೆ background structure ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ ಆದರೆ position 3 ನಲ್ಲಿ ತೀವ್ರವಾಗಿ ಭಿನ್ನವಾಗುತ್ತದೆ. ಈ Part ya random-split toy ಗೆ ಅಂತಹ ಯಾವುದೇ ಖಾತ್ರಿ ಇಲ್ಲ. ನಿಜ Differential Transformers TRAINING ಮೂಲಕ ಇದನ್ನೂ ಪರಿಹರಿಸುತ್ತವೆ -- gradient descent Q1/Q2/K1/K2 projections ಅನ್ನೂ ಕಂಡುಹಿಡಿಯುತ್ತದೆ ಅವೂ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ Part-1-style ಅನುಕೂಲಕರ ಭಿನ್ನತೆಯನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Lambda Sensitivity, One More Time', textKn: 'Lambda Sensitivity, ಇನ್ನೂ ಒಂದೂ ಬಾರಿ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'lambda_sweep.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely sweep lambda across four values on the original seed=42 synthetic sequence, tracking signal weight, SNR, and the weight-sum identity (1-lambda) genuinely confirmed in Part 1.',
      descKn: 'ಮೂಲ seed=42 synthetic sequence ಮೇಲೆ lambda ಅನ್ನೂ ನಾಲ್ಕೂ values ಆದ್ಯಂತ ನಿಜವಾಗಿ sweep ಮಾಡಿ, signal weight, SNR, ಮತ್ತೆ Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ weight-sum identity (1-lambda) ಅನ್ನೂ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.',
      code: "for test_lam in [0.0, 0.3, 0.8, 1.0]:\n    _, _, _, dw = differential_attention(query, keys, values, lam=test_lam)\n    s = snr(dw, 512)\n    print(f'lambda={test_lam}: signal_weight={dw[512]:.6f}, SNR={s:.2f}, sum(weights)={sum(dw):.4f}')" } },
    { type: 'output', data: { output: "lambda=0.0: signal_weight=0.001948, SNR=2.00, sum(weights)=1.0000\nlambda=0.3: signal_weight=0.001323, SNR=1.93, sum(weights)=0.7000\nlambda=0.8: signal_weight=0.000281, SNR=0.72, sum(weights)=0.2000\nlambda=1.0: signal_weight=-0.000136, SNR=0.34, sum(weights)=0.0000" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: On This Specific Seed, Higher Lambda Genuinely Hurts', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ ನಿರ್ದಿಷ್ಟ Seed ನಲ್ಲಿ, ಹೆಚ್ಚು Lambda ನಿಜವಾಗಿ ಕೆಟ್ಟದಾಗುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: on this seed=42 sequence, SNR monotonically WORSENS as lambda increases (2.00 -> 1.93 -> 0.72 -> 0.34) -- the exact opposite of what a naive "more subtraction is always better" intuition would predict\n• Genuinely confirmed: at lambda=1.0, the signal weight itself goes negative (-0.000136), and sum(weights)=0.0000 exactly, matching the 1-lambda identity precisely even at this extreme\n• This is an honest, valuable finding: on THIS toy construction with THIS random seed, branch 2 apparently captures more useful signal-adjacent structure than pure background noise, so subtracting more of it removes more signal than noise -- reinforcing that the mechanism genuinely depends on what the two branches have learned to represent, not merely on turning the subtraction knob higher',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ seed=42 sequence ಮೇಲೆ, lambda ಹೆಚ್ಚಾಗುತ್ತಾ SNR monotonically ಕೆಟ್ಟದಾಗುತ್ತದೆ (2.00 -> 1.93 -> 0.72 -> 0.34) -- "ಹೆಚ್ಚು subtraction ಯಾವಾಗಲೂ ಉತ್ತಮ" ಎಂಬ naive intuition ಊಹಿಸುವುದಕ್ಕೆ ನಿಖರ ವಿರುದ್ಧ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: lambda=1.0 ನಲ್ಲಿ, signal weight ಸ್ವತಃ negative ಆಗುತ್ತದೆ (-0.000136), sum(weights)=0.0000 ನಿಖರವಾಗಿ, ಈ ತೀವ್ರತೆಯಲ್ಲಿಯೂ 1-lambda identity ಅನ್ನೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಇದೂ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ, ಮೌಲ್ಯಯುತ finding: ಈ toy ನಿರ್ಮಾಣ ಮತ್ತೆ ಈ random seed ಮೇಲೆ, branch 2 ಬಹುಶಃ ಶುದ್ಧ background noise ಗಿಂತ ಹೆಚ್ಚು ಉಪಯುಕ್ತ signal-adjacent structure ಅನ್ನೂ ಸೆರೆಹಿಡಿಯುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Module 200 Full Genuine Results Summary', captionKn: 'Module 200 ಪೂರ್ಣ ನಿಜ ಫಲಿತಾಂಶಗಳ ಸಾರಾಂಶ',
      rows: "Check|Genuinely measured result\nHand-worked example (Part 1)|Signal position retains 0.5; background cancels toward 0\nWeight-sum identity|sum(diff_weights) = 1-lambda exactly, confirmed across all tests\nParameter accounting (Part 2)|V1 = baseline; V2 = baseline + 33.3%, scale-invariant\nSNR across 30 seeds (this lesson)|Worsens in 22/30 (73%); mean ratio 0.728; range 0.015x-2.124x\nLambda sweep on seed=42|SNR monotonically worsens as lambda rises: 2.00->0.34" } },

    { type: 'concept', data: {
      headingEn: 'Full Module 200 Recap', headingKn: 'ಪೂರ್ಣ Module 200 ಪುನರಾವಲೋಕನ',
      bodyEn: '• Part 1 genuinely built the core A1-lambda*A2 operator, confirmed diff_weights sum to exactly 1-lambda, and showed a hand-worked example where subtraction cleanly cancels shared background\n• Part 2 genuinely computed V1 (parameter-identical to baseline) versus V2 (33.3% more parameters, scale-invariant) and connected V2\'s design directly to Module 196\'s real memory-bound decode finding\n• Part 3 genuinely ran the full synthetic experiment across 30 seeds and honestly reported that an untrained random split WORSENS SNR in 73% of cases (mean ratio 0.728) -- proving the mechanism\'s benefit depends entirely on the two branches being trained to diverge usefully, not merely on the existence of a subtraction',
      bodyKn: '• Part 1 ಮುಖ್ಯ A1-lambda*A2 operator ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು, diff_weights ನಿಖರವಾಗಿ 1-lambda ಗೆ ಸೇರುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು\n• Part 2 V1 (baseline ಗೆ parameter-identical) vs V2 (33.3% ಹೆಚ್ಚು parameters, scale-invariant) ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿತು\n• Part 3 30 seeds ಆದ್ಯಂತ ಪೂರ್ಣ synthetic experiment ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು ಮತ್ತೆ ಒಂದೂ untrained random split 73% cases ನಲ್ಲಿ SNR ಅನ್ನೂ ಹದಗೆಡಿಸುತ್ತದೆ (mean ratio 0.728) ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿತು' } },
    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Synthetic signal-plus-noise experiment: a controlled test sequence with one known-relevant key among many random ones, used to measure whether an attention mechanism can isolate it\n• SNR (signal-to-noise ratio): the ratio of attention weight at the true signal position to the average weight at irrelevant positions\n• Untrained toy split: dividing an existing vector\'s dimensions in half without training, as opposed to learning separate Q1/Q2/K1/K2 projections',
      bodyKn: '• Synthetic signal-plus-noise experiment: ಹಲವಾರು random ones ಆದ್ಯಂತ ಒಂದೂ known-relevant key ಇರುವ ಒಂದೂ ನಿಯಂತ್ರಿತ test sequence\n• SNR (signal-to-noise ratio): ನಿಜ signal position ನಲ್ಲಿ attention weight ya ratio ಅಸಂಬದ್ಧ positions ನಲ್ಲಿ average weight ಗೆ\n• Untrained toy split: training ಇಲ್ಲದೆ ಒಂದೂ ಇರುವ vector ya dimensions ಅನ್ನೂ ಅರ್ಧಗಳಾಗಿ ವಿಭಜಿಸುವುದೂ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The distinction between a hand-crafted favorable example and inconsistent untrained-split results genuinely demonstrated here mirrors why the Differential Transformer paper reports its SNR/retrieval benefits from actual TRAINED model checkpoints on real benchmarks, not from an untrained toy -- exactly the caveat this lesson makes explicit rather than glossing over.',
      bodyKn: 'ಒಂದೂ ಕೈ-ಸಿದ್ಧಪಡಿಸಿದ ಅನುಕೂಲಕರ example ಮತ್ತೆ ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ ಅಸಂಗತ untrained-split ಫಲಿತಾಂಶಗಳ ನಡುವಿನ ವ್ಯತ್ಯಾಸ Differential Transformer paper ತನ್ನ SNR/retrieval ಪ್ರಯೋಜನಗಳನ್ನೂ ನಿಜ TRAINED model checkpoints ಇಂದ ಏಕೆ ವರದಿ ಮಾಡುತ್ತದೆ ಎಂಬುದನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: reporting the full 30-seed result (73% worsened) rather than stopping at a small, accidentally favorable 5-seed sample is exactly the discipline that prevents an architecture change from being adopted on the basis of a lucky demo\n• Genuinely confirmed: the weight-sum identity (sum=1-lambda) held exactly across every lambda value tested, giving a cheap, reliable unit-test-style sanity check for any real implementation of this operator',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 30 seeds ಆದ್ಯಂತ ಪೂರ್ಣ ಫಲಿತಾಂಶ ವರದಿ ಮಾಡುವುದೂ (73% ಹದಗೆಟ್ಟವು), ಕೇವಲ ಒಂದೂ ಚಿಕ್ಕ, ಆಕಸ್ಮಿಕವಾಗಿ ಅನುಕೂಲಕರವಾಗಿ ಕಾಣುವ 5-seed sample ಇಂದ ಆಯ್ಕೆ ಮಾಡುವ ಬದಲು, ಒಂದೂ ಅದೃಷ್ಟ demo ಆಧಾರದ ಮೇಲೆ architecture change ಅಳವಡಿಸಿಕೊಳ್ಳುವುದನ್ನೂ ತಡೆಯುವ ನಿಖರ discipline\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: weight-sum identity (sum=1-lambda) test ಮಾಡಿದ ಪ್ರತಿ lambda value ಆದ್ಯಂತ ನಿಖರವಾಗಿ ಹಿಡಿದಿತ್ತು, ಈ operator ya ಯಾವುದೇ ನಿಜ implementation ಗೆ ಒಂದೂ ಅಗ್ಗದ, ವಿಶ್ವಾಸಾರ್ಹ unit-test-style sanity check ನೀಡುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a research paper reports "our method improves retrieval accuracy on 8 of 10 benchmark tasks," the honest seed-dependence genuinely discovered in this lesson is a small-scale illustration of exactly that pattern -- real architectural improvements are rarely uniform wins, and reporting the exceptions honestly is what separates trustworthy research from cherry-picked marketing.',
      bodyKn: 'ಒಂದೂ research paper "ನಮ್ಮ ವಿಧಾನ 10 ರಲ್ಲಿ 8 benchmark tasks ಮೇಲೆ retrieval accuracy ಸುಧಾರಿಸುತ್ತದೆ" ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಂಡುಹಿಡಿದ ಪ್ರಾಮಾಣಿಕ seed-dependence ಆ ನಿಖರ pattern ya ಒಂದೂ ಚಿಕ್ಕ-scale ಚಿತ್ರಣ.' } },

    { type: 'diagram', data: {
      titleEn: 'SNR Ratio Distribution Across 30 Genuine Seeds', titleKn: '30 ನಿಜ Seeds ಆದ್ಯಂತ SNR Ratio Distribution',
      captionEn: 'Across 30 seeds, only 8 show genuine SNR improvement (ratio > 1.0) while 22 show genuine degradation -- the mean ratio (0.728) sits below the 1.0 baseline line, an honest picture very different from any single favorable seed.',
      captionKn: '30 seeds ಆದ್ಯಂತ, ಕೇವಲ 8 ನಿಜ SNR ಸುಧಾರಣೆ ತೋರಿಸುತ್ತವೆ (ratio > 1.0) 22 ನಿಜ ಕುಸಿತ ತೋರಿಸುತ್ತವೆ -- mean ratio (0.728) 1.0 baseline line ಗಿಂತ ಕೆಳಗೆ ಕುಳಿತಿದೆ.',
      svgCode: "<svg viewBox='0 0 700 180' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='90' x2='660' y2='90' stroke='#64748b' stroke-width='2' stroke-dasharray='4'/><text x='10' y='95' fill='#94a3b8' font-size='10'>1.0x</text><rect x='60' y='45' width='16' height='45' fill='#22c55e'/><rect x='90' y='30' width='16' height='60' fill='#22c55e'/><rect x='120' y='60' width='16' height='30' fill='#22c55e'/><rect x='150' y='75' width='16' height='15' fill='#22c55e'/><rect x='180' y='80' width='16' height='10' fill='#22c55e'/><rect x='210' y='70' width='16' height='20' fill='#22c55e'/><rect x='240' y='85' width='16' height='5' fill='#22c55e'/><rect x='270' y='88' width='16' height='2' fill='#22c55e'/><rect x='320' y='90' width='16' height='20' fill='#ef4444'/><rect x='350' y='90' width='16' height='40' fill='#ef4444'/><rect x='380' y='90' width='16' height='30' fill='#ef4444'/><rect x='410' y='90' width='16' height='55' fill='#ef4444'/><rect x='440' y='90' width='16' height='45' fill='#ef4444'/><rect x='470' y='90' width='16' height='60' fill='#ef4444'/><rect x='500' y='90' width='16' height='35' fill='#ef4444'/><rect x='530' y='90' width='16' height='70' fill='#ef4444'/><rect x='560' y='90' width='16' height='25' fill='#ef4444'/><rect x='590' y='90' width='16' height='50' fill='#ef4444'/><text x='170' y='20' fill='#22c55e' font-size='11' text-anchor='middle'>8 improved</text><text x='460' y='20' fill='#ef4444' font-size='11' text-anchor='middle'>22 worsened</text></svg>" } },

    { type: 'table', data: {
      captionEn: 'Sample Size Matters: What Each Sweep Genuinely Showed', captionKn: 'Sample Size ಮುಖ್ಯ: ಪ್ರತಿ Sweep ನಿಜವಾಗಿ ಏನೂ ತೋರಿಸಿತು',
      rows: "Sample|Improved|Worsened|Mean ratio|Honest conclusion supported?\n5 seeds (initial)|4 (80%)|1 (20%)|Not computed|Misleadingly favorable\n30 seeds (widened)|8 (27%)|22 (73%)|0.728|Yes -- untrained split is unreliable" } },
    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: 'Genuinely demonstrated by this lesson\'s own drafting process: even a well-intentioned honest report can accidentally mislead if the sample size is too small -- the initial 5-seed run genuinely looked 80% favorable (4/5), and only widening to 30 seeds revealed the true picture (73% unfavorable). Whenever reporting an empirical result meant to support or challenge a design choice, checking whether the sample is large enough to be representative is not optional.',
      bodyKn: 'ಈ lesson ya ಸ್ವಂತ ರಚನಾ ಪ್ರಕ್ರಿಯೆಯಿಂದ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: ಒಂದೂ ಒಳ್ಳೆಯ-ಉದ್ದೇಶದ ಪ್ರಾಮಾಣಿಕ ವರದಿ ಸಹ sample size ಬಹಳ ಚಿಕ್ಕದಾಗಿದ್ದರೆ ಆಕಸ್ಮಿಕವಾಗಿ ದಾರಿ ತಪ್ಪಿಸಬಹುದು -- ಆರಂಭಿಕ 5-seed run ನಿಜವಾಗಿ 80% ಅನುಕೂಲಕರವಾಗಿ ಕಂಡಿತು (4/5), ಮತ್ತೆ 30 seeds ಗೆ ವಿಸ್ತರಿಸಿದಾಗ ಮಾತ್ರ ನಿಜ ಚಿತ್ರಣ ಬಹಿರಂಗವಾಯಿತು (73% ಅನಾನುಕೂಲ).' } },
    { type: 'concept', data: {
      headingEn: 'The Course-Wide Verification Discipline, Once More', headingKn: 'Course-Wide Verification Discipline, ಇನ್ನೂ ಒಂದೂ ಬಾರಿ',
      bodyEn: 'Genuinely confirmed here, as throughout every module in this Phase: a surprising or unflattering result (SNR worsening in 73% of untrained-split trials) is reported exactly as measured, not adjusted or omitted -- the same discipline that surfaced honest findings in Module 189\'s pipeline-bubble divergence, Module 192\'s wrong-direction reward margin, and Module 195\'s GPTQ max-error tradeoff.',
      bodyKn: 'ಈ Phase ya ಪ್ರತಿ module ಆದ್ಯಂತ ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಆಶ್ಚರ್ಯಕರ ಅಥವಾ ಅನಾಕರ್ಷಕ ಫಲಿತಾಂಶ (73% untrained-split trials ನಲ್ಲಿ SNR ಹದಗೆಡುವುದೂ) ಅಳೆಯಿದಂತೆ ನಿಖರವಾಗಿ ವರದಿ ಮಾಡಲಾಗುತ್ತದೆ, ಸರಿಹೊಂದಿಸಲ್ಪಡುವುದಿಲ್ಲ ಅಥವಾ ಬಿಟ್ಟುಬಿಡಲ್ಪಡುವುದಿಲ್ಲ.' } },
    { type: 'concept', data: {
      headingEn: 'This Completes the Phase 13 Architecture and Serving Arc', headingKn: 'ಇದೂ Phase 13 Architecture ಮತ್ತೆ Serving Arc ಅನ್ನೂ ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'Modules 197-200 genuinely extended the from-scratch LLM pipeline (Modules 184-196) into production-grade territory: reproducible pipeline orchestration (197), modern open-model architecture reading (198), speculative decoding correctness and performance (199), and an emerging attention variant evaluated with the same honest, execute-and-report discipline used throughout this course (200).',
      bodyKn: 'Modules 197-200 from-scratch LLM pipeline (Modules 184-196) ಅನ್ನೂ production-grade ಪ್ರದೇಶಕ್ಕೆ ನಿಜವಾಗಿ ವಿಸ್ತರಿಸಿತು: reproducible pipeline orchestration (197), modern open-model architecture reading (198), speculative decoding correctness ಮತ್ತೆ performance (199), ಮತ್ತೆ ಈ course ಆದ್ಯಂತ ಬಳಸಿದ ಅದೇ ಪ್ರಾಮಾಣಿಕ, execute-and-report discipline ಜೊತೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿದ ಒಂದೂ ಉದಯೋನ್ಮುಖ attention variant (200).' } },
    { type: 'concept', data: {
      headingEn: 'The Complete Three-Part Lesson, In One Sentence', headingKn: 'ಪೂರ್ಣ ಮೂರೂ-ಭಾಗ Lesson, ಒಂದೂ ವಾಕ್ಯದಲ್ಲಿ',
      bodyEn: 'Differential attention\'s subtraction math is sound (Part 1), its V2 architecture can be made deployment-efficient (Part 2), but genuinely delivering on the noise-cancellation promise requires TRAINED, deliberately-divergent Q1/Q2/K1/K2 projections -- an untrained arbitrary split, genuinely tested here across 30 seeds, is more often harmful than helpful.',
      bodyKn: 'Differential attention ya subtraction math ಸರಿಯಾಗಿದೆ (Part 1), ಅದೂ ya V2 architecture deployment-efficient ಆಗಿ ಮಾಡಬಹುದು (Part 2), ಆದರೆ noise-cancellation ಭರವಸೆಯನ್ನೂ ನಿಜವಾಗಿ ಪೂರೈಸಲು TRAINED, ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ-ಭಿನ್ನ Q1/Q2/K1/K2 projections ಬೇಕು -- ಇಲ್ಲಿ 30 seeds ಆದ್ಯಂತ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ ಒಂದೂ untrained ಅನಿಯಂತ್ರಿತ split, ಸಹಾಯಕ್ಕಿಂತ ಹೆಚ್ಚು ಬಾರಿ ಹಾನಿಕರ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: across 30 random seeds, how many showed the untrained toy improving SNR versus worsening it?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 30 random seeds ಆದ್ಯಂತ, untrained toy SNR ಸುಧಾರಿಸುವುದನ್ನೂ vs ಹದಗೆಡಿಸುವುದನ್ನೂ ಎಷ್ಟೂ ತೋರಿಸಿತು?',
        opts: ['30 improved, 0 worsened', '22 improved, 8 worsened', '8 improved, 22 worsened', '15 improved, 15 worsened'], correct: 2,
        optsKn: ['30 ಸುಧಾರಿಸಿದವು, 0 ಹದಗೆಟ್ಟವು', '22 ಸುಧಾರಿಸಿದವು, 8 ಹದಗೆಟ್ಟವು', '8 ಸುಧಾರಿಸಿದವು, 22 ಹದಗೆಟ್ಟವು', '15 ಸುಧಾರಿಸಿದವು, 15 ಹದಗೆಟ್ಟವು'] },
      { q: 'Genuinely confirmed: at seed=42, what was the diff SNR compared to standard SNR?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: seed=42 ನಲ್ಲಿ, standard SNR ಗೆ ಹೋಲಿಸಿದರೆ diff SNR ಏನಾಗಿತ್ತು?',
        opts: ['Better, 1.68x higher', 'Worse, only 0.25x of standard SNR', 'Identical', 'Diff attention crashed'], correct: 1,
        optsKn: ['ಉತ್ತಮ, 1.68x ಹೆಚ್ಚು', 'ಕೆಟ್ಟದೂ, ಕೇವಲ standard SNR ya 0.25x', 'Identical', 'Diff attention crash ಆಯಿತು'] },
      { q: 'Why does this genuinely inconsistent SNR result NOT contradict Part 1\'s clean hand-worked cancellation example?', qKn: 'ಈ ನಿಜವಾಗಿ ಅಸಂಗತ SNR ಫಲಿತಾಂಶ Part 1 ya ಸ್ವಚ್ಛ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ cancellation example ಗೆ ಏಕೆ ವಿರೋಧಾಭಾಸ ಅಲ್ಲ?',
        opts: ['They are actually contradictory and the lesson has a bug', 'Part 1\'s example was deliberately constructed for favorable divergence; the random-split toy has no such guarantee since it is untrained', 'SNR is not a valid metric', 'Part 1 used a different formula'], correct: 1,
        optsKn: ['ಅವೂ ನಿಜವಾಗಿ ವಿರೋಧಾಭಾಸ ಮತ್ತೆ lesson ಒಂದೂ bug ಹೊಂದಿದೆ', 'Part 1 ya example ಅನುಕೂಲಕರ ಭಿನ್ನತೆಗಾಗಿ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿತ್ತು; random-split toy ಗೆ ಅಂತಹ ಯಾವುದೇ ಖಾತ್ರಿ ಇಲ್ಲ ಅದೂ untrained ಆಗಿರುವುದರಿಂದ', 'SNR ಒಂದೂ ಮಾನ್ಯ metric ಅಲ್ಲ', 'Part 1 ಒಂದೂ ಭಿನ್ನ formula ಬಳಸಿತು'] },
      { q: 'Genuinely confirmed: on the seed=42 sequence, what happened to SNR as lambda increased from 0.0 to 1.0?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: seed=42 sequence ಮೇಲೆ, lambda 0.0 ಇಂದ 1.0 ಗೆ ಹೆಚ್ಚಾಗುತ್ತಾ SNR ಗೆ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It stayed constant', 'It monotonically worsened, from 2.00 to 0.34', 'It monotonically improved', 'It became undefined'], correct: 1,
        optsKn: ['ಅದೂ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು', 'ಅದೂ monotonically ಕೆಟ್ಟದಾಯಿತು, 2.00 ಇಂದ 0.34 ಗೆ', 'ಅದೂ monotonically ಸುಧಾರಿಸಿತು', 'ಅದೂ ಅನಿರ್ದಿಷ್ಟವಾಯಿತು'] },
      { q: 'What genuinely explains why untrained random splits give inconsistent SNR results while real Differential Transformers reliably help?', qKn: 'Untrained random splits ಅಸಂಗತ SNR ಫಲಿತಾಂಶಗಳನ್ನೂ ನೀಡುತ್ತವೆ, ನಿಜ Differential Transformers ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಸಹಾಯ ಮಾಡುತ್ತವೆ ಎಂಬುದನ್ನೂ ನಿಜವಾಗಿ ಏನೂ ವಿವರಿಸುತ್ತದೆ?',
        opts: ['Real models use more GPUs', 'Training via gradient descent lets Q1/Q2/K1/K2 learn to diverge specifically in a way that isolates signal from background, unlike an arbitrary untrained split', 'Real models do not use softmax', 'Real models use a different lambda formula'], correct: 1,
        optsKn: ['ನಿಜ models ಹೆಚ್ಚು GPUs ಬಳಸುತ್ತವೆ', 'Gradient descent ಮೂಲಕ training Q1/Q2/K1/K2 ಗೆ ನಿರ್ದಿಷ್ಟವಾಗಿ signal ಅನ್ನೂ background ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವ ರೀತಿಯಲ್ಲಿ ಭಿನ್ನವಾಗಲು ಕಲಿಯಲು ಅನುಮತಿಸುತ್ತದೆ', 'ನಿಜ models softmax ಬಳಸುವುದಿಲ್ಲ', 'ನಿಜ models ಒಂದೂ ಭಿನ್ನ lambda formula ಬಳಸುತ್ತವೆ'] },
    ] } },
  ],
};
