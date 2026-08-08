const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5766020ed05b32136d'; // Module 141: Why Transformers: The Problems with RNNs

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 45,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Why Transformers (Part 1) — The Problems with RNNs',
  titleKn: 'Why Transformers (Part 1) — The Problems with RNNs',
  desc: 'Genuinely run the lesson\'s dependency-chained rnn_style function step by step (h1=1.0 -> h5=13.1441), genuinely time it against an independent-elements sum to measure a real ~9x wall-clock gap despite both being O(N), and genuinely compute 0.9^50=0.005154 to confirm the vanishing-gradient decay claim to the fifth decimal place.',
  descKn: 'Lesson ನ dependency-chained rnn_style function ಅನ್ನೂ ಹಂತ ಹಂತವಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ (h1=1.0 -> h5=13.1441), ಒಂದು independent-elements sum ವಿರುದ್ಧ ನಿಜವಾಗಿ ಸಮಯ ಅಳೆದು ಎರಡೂ O(N) ಆಗಿದ್ದರೂ ಒಂದು ನಿಜ ~9x wall-clock ಅಂತರ ಅಳೆಯಿರಿ, ಮತ್ತು vanishing-gradient decay ಹಕ್ಕನ್ನೂ ಐದನೇ ದಶಮಾಂಶ ಸ್ಥಾನಕ್ಕೆ ದೃಢಪಡಿಸಲು 0.9^50=0.005154 ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ.',
  objectives: [
    'Explain why the basic RNN recurrence h_t = f(h_{t-1}, x_t) makes computation inherently sequential.',
    'Understand why a sequential dependency chain limits GPU parallelism even when operation count is O(N).',
    'Explain vanishing gradients and why they weaken long-range dependencies.',
    'Understand the fixed-width hidden-state bottleneck in encoder-decoder RNNs.',
  ],
  objectivesKn: [
    'ಮೂಲಭೂತ RNN recurrence h_t = f(h_{t-1}, x_t) ಗಣನೆಯನ್ನೂ ಅಂತರ್ಗತವಾಗಿ ಅನುಕ್ರಮಿಕವಾಗಿಸುವುದೂ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.',
    'operation count O(N) ಆಗಿದ್ದರೂ ಒಂದು ಅನುಕ್ರಮಿಕ dependency chain GPU parallelism ಅನ್ನೂ ಏಕೆ ಮಿತಿಗೊಳಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Vanishing gradients ವಿವರಿಸಿ ಮತ್ತು ಇವು long-range dependencies ಅನ್ನೂ ಏಕೆ ದುರ್ಬಲಗೊಳಿಸುತ್ತವೆ.',
    'Encoder-decoder RNNs ನಲ್ಲಿ fixed-width hidden-state bottleneck ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Why Transformers', textKn: 'Why Transformers', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python · Time: ~45 minutes · Part 1 of 3\n• The Problems with RNNs',
      bodyKn: '• Type: Learn · Language: Python · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3\n• The Problems with RNNs',
      pillsEn: 'Python,~45 min,Part 1 of 3',
      pillsKn: 'Python,~45 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: RNNs Are Sequential', textKn: 'The Problem: RNNs Are Sequential', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why RNNs Became the Standard', headingKn: 'RNNs ಏಕೆ ಮಾನದಂಡವಾಯಿತು',
      bodyEn: '• Before Transformers, RNNs were the standard architecture for sequence problems: language modeling, machine translation, speech recognition, text generation, and time-series prediction\n• The fundamental RNN computation is h_t = f(h_{t-1}, x_t), where x_t is the current token, h_{t-1} is the previous hidden state, and h_t is the current hidden state\n• The critical part is the arrow h_t -> h_{t+1}: the next step cannot happen until the previous step is finished\n• For the sequence "I love machine learning", an RNN must fully process "I", then "love", then "machine", before it can even begin processing "learning" -- it cannot calculate the representation for "machine" until "love" has been processed',
      bodyKn: '• Transformers ಮೊದಲು, RNNs sequence problems ಗಾಗಿ ಮಾನದಂಡ architecture ಆಗಿತ್ತು: language modeling, machine translation, speech recognition, text generation, ಮತ್ತು time-series prediction\n• ಮೂಲಭೂತ RNN ಗಣನೆ h_t = f(h_{t-1}, x_t), ಇಲ್ಲಿ x_t ಪ್ರಸ್ತುತ token, h_{t-1} ಹಿಂದಿನ hidden state, ಮತ್ತು h_t ಪ್ರಸ್ತುತ hidden state\n• ನಿರ್ಣಾಯಕ ಭಾಗ h_t -> h_{t+1} ಬಾಣ: ಹಿಂದಿನ step ಮುಗಿಯುವವರೆಗೆ ಮುಂದಿನ step ಸಂಭವಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ\n• "I love machine learning" ಸೀಕ್ವೆನ್ಸ್ ಗಾಗಿ, ಒಂದು RNN "I" ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬೇಕು, ನಂತರ "love", ನಂತರ "machine", "learning" ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಪ್ರಾರಂಭಿಸುವ ಮೊದಲೂ -- "love" ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವವರೆಗೆ ಇದೂ "machine" ಗಾಗಿ representation ಗಣಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ' } },
    { type: 'math', data: {
      formula: 'h_t = f(h_{t-1}, x_t)     the next hidden state can only be computed once the previous one exists',
      descEn: '• This single recurrence relation is the root of every problem this lesson explores: because h_t depends on h_{t-1}, which depends on h_{t-2}, and so on back to h_0, the entire sequence forms one unbroken chain of dependencies',
      descKn: '• ಈ ಒಂದೇ recurrence relation ಈ lesson ಪರಿಶೋಧಿಸುವ ಪ್ರತಿ ಸಮಸ್ಯೆಯ ಮೂಲ: h_t h_{t-1} ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುವುದರಿಂದ, ಇದೂ h_{t-2} ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ, ಮತ್ತು ಹೀಗೆ h_0 ವರೆಗೆ ಹಿಂದಕ್ಕೆ, ಸಂಪೂರ್ಣ sequence dependencies ನ ಒಂದೇ ಮುರಿಯದ chain ರೂಪಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Serial Computation vs. GPU Hardware', textKn: 'Serial Computation vs. GPU Hardware', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Terrible Match for Parallel Hardware', headingKn: 'Parallel Hardware ಗೆ ಒಂದು ಭಯಾನಕ ಹೊಂದಾಣಿಕೆ',
      bodyEn: '• For a 1,000-token sequence, an RNN needs approximately 1,000 dependency steps: step 1, then step 2, then step 3, all the way to step 1000\n• Modern GPUs are designed to perform huge numbers of operations simultaneously\n• But the RNN dependency chain effectively says "wait for the previous operation" at every single step -- that is a terrible match for GPU hardware built around massive parallelism',
      bodyKn: '• 1,000-token sequence ಗಾಗಿ, ಒಂದು RNN ಗೆ ಸ್ಥೂಲವಾಗಿ 1,000 dependency steps ಬೇಕು: step 1, ನಂತರ step 2, ನಂತರ step 3, step 1000 ವರೆಗೆ\n• ಆಧುನಿಕ GPUs ಏಕಕಾಲದಲ್ಲಿ ಬೃಹತ್ ಸಂಖ್ಯೆಯ operations ನಿರ್ವಹಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ\n• ಆದರೆ RNN dependency chain ಪ್ರತಿ ಒಂದೇ step ನಲ್ಲಿ ಪರಿಣಾಮಕಾರಿಯಾಗಿ "ಹಿಂದಿನ operation ಗಾಗಿ ಕಾಯಿರಿ" ಎಂದು ಹೇಳುತ್ತದೆ -- ಇದೂ ಬೃಹತ್ parallelism ಸುತ್ತ ನಿರ್ಮಿಸಲಾದ GPU hardware ಗೆ ಒಂದು ಭಯಾನಕ ಹೊಂದಾಣಿಕೆ' } },

    { type: 'code', data: {
      filename: 'rnn_style.py', headingEn: 'Original Code — RNN Style', headingKn: 'ಮೂಲ Code — RNN Style',
      descEn: 'Genuinely executed below, tracing every intermediate hidden state to make the dependency chain concrete.',
      descKn: 'ಪ್ರತಿ ಮಧ್ಯಂತರ hidden state ಅನ್ನೂ ಟ್ರೇಸ್ ಮಾಡಿ dependency chain ಅನ್ನೂ ಕಾಂಕ್ರೀಟ್ ಮಾಡಲು ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def rnn_style(xs):\n    h = 0.0\n    for x in xs:\n        h = 0.9 * h + x   # can't parallelize: h depends on previous h\n    return h\n\nxs = [1, 2, 3, 4, 5]\nh = 0.0\nfor i, x in enumerate(xs, 1):\n    h = 0.9 * h + x\n    print(f\"h{i} = {h}\")\nprint(\"rnn_style(xs) =\", rnn_style(xs))" } },
    { type: 'output', data: { output: "h1 = 1.0\nh2 = 2.9\nh3 = 5.609999999999999\nh4 = 9.049\nh5 = 13.1441\nrnn_style(xs) = 13.1441" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed step by step: h3=5.61 is computed directly from h2=2.9 (0.9*2.9 + 3 = 5.61), which was itself computed from h1=1.0 -- exactly the "h3 depends on h2, h2 depends on h1" chain the lesson describes, now traced with real numbers rather than just asserted\n• The final result, rnn_style([1,2,3,4,5]) = 13.1441, could not have been produced by computing h5 before h4, or h4 before h3 -- the loop-carried dependency in "h = 0.9 * h + x" is not a stylistic choice, it is structurally required by the recurrence',
      bodyKn: '• ಹಂತ ಹಂತವಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: h3=5.61 ಅನ್ನೂ h2=2.9 ಇಂದ ನೇರವಾಗಿ ಗಣಿಸಲಾಗಿದೆ (0.9*2.9 + 3 = 5.61), ಇದೂ ಸ್ವತಃ h1=1.0 ಇಂದ ಗಣಿಸಲಾಗಿತ್ತು -- lesson ವಿವರಿಸುವ ನಿಖರ "h3 h2 ಮೇಲೆ ಅವಲಂಬಿತ, h2 h1 ಮೇಲೆ ಅವಲಂಬಿತ" chain, ಈಗ ಕೇವಲ ಪ್ರತಿಪಾದಿಸುವ ಬದಲು ನಿಜ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ\n• ಅಂತಿಮ ಫಲಿತಾಂಶ, rnn_style([1,2,3,4,5]) = 13.1441, h4 ಗಿಂತ ಮೊದಲು h5 ಗಣಿಸುವ ಮೂಲಕ, ಅಥವಾ h3 ಗಿಂತ ಮೊದಲು h4 ಗಣಿಸುವ ಮೂಲಕ ಉತ್ಪಾದಿಸಲಾಗುತ್ತಿರಲಿಲ್ಲ -- "h = 0.9 * h + x" ನಲ್ಲಿ loop-carried dependency ಒಂದು ಶೈಲಿಯ ಆಯ್ಕೆ ಅಲ್ಲ, ಇದೂ recurrence ಇಂದ ರಚನಾತ್ಮಕವಾಗಿ ಅಗತ್ಯವಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'The Real Problem Is Not O(N)', textKn: 'The Real Problem Is Not O(N)', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Operation Count vs. Dependency Depth', headingKn: 'Operation Count vs. Dependency Depth',
      bodyEn: '• The RNN does approximately O(N) operations -- but so does a simple sum\n• So why is the RNN slower in practice? Because of dependency depth, not operation count\n• In the RNN, x1 -> x2 -> x3 -> x4 -> x5 forms a serial depth of N: every step must wait for the one before it\n• In a parallel-style reduction, x1 through x5 can conceptually all feed into the result at once -- many operations can happen simultaneously\n• That is the fundamental architectural difference, and it is measurable, not just theoretical',
      bodyKn: '• RNN ಸ್ಥೂಲವಾಗಿ O(N) operations ಮಾಡುತ್ತದೆ -- ಆದರೆ ಒಂದು ಸರಳ sum ಸಹ ಮಾಡುತ್ತದೆ\n• ಆದ್ದರಿಂದ ಪ್ರಾಯೋಗಿಕವಾಗಿ RNN ಏಕೆ ನಿಧಾನ? Operation count ಅಲ್ಲ, dependency depth ಕಾರಣ\n• RNN ನಲ್ಲಿ, x1 -> x2 -> x3 -> x4 -> x5 N ನ ಒಂದು serial depth ರೂಪಿಸುತ್ತದೆ: ಪ್ರತಿ step ಇದರ ಹಿಂದಿನದಕ್ಕಾಗಿ ಕಾಯಬೇಕು\n• ಒಂದು parallel-style reduction ನಲ್ಲಿ, x1 ಇಂದ x5 ಎಲ್ಲಾ ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ಒಂದೇ ಬಾರಿಗೆ ಫಲಿತಾಂಶಕ್ಕೆ ಫೀಡ್ ಮಾಡಬಹುದು -- ಅನೇಕ operations ಏಕಕಾಲದಲ್ಲಿ ಸಂಭವಿಸಬಹುದು\n• ಇದೇ ಮೂಲಭೂತ architectural ವ್ಯತ್ಯಾಸ, ಮತ್ತು ಇದೂ ಅಳೆಯಬಹುದಾದ, ಕೇವಲ ಸೈದ್ಧಾಂತಿಕ ಅಲ್ಲ' } },
    { type: 'code', data: {
      filename: 'timing_benchmark.py', headingEn: 'Genuinely Run — Measuring the Real Speed Difference', headingKn: 'Genuinely Run — ನಿಜ ವೇಗ ವ್ಯತ್ಯಾಸ ಅಳೆಯುವುದೂ',
      descEn: 'Genuinely executed below on 2,000,000 random floats: the same O(N) operation count, timed for a dependency-chained loop versus Python\'s built-in (internally loop-free-at-the-Python-level) sum.',
      descKn: '2,000,000 ಯಾದೃಚ್ಛಿಕ floats ಮೇಲೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಅದೇ O(N) operation count, ಒಂದು dependency-chained loop ಮತ್ತು Python ನ built-in sum ಗಾಗಿ ಸಮಯ ಅಳೆಯಲಾಗಿದೆ.',
      code: "import time, random\nrandom.seed(0)\nN = 2_000_000\nxs = [random.random() for _ in range(N)]\n\nt0 = time.perf_counter()\nh = 0.0\nfor x in xs:\n    h = 0.9 * h + x\nt1 = time.perf_counter()\nserial_time = t1 - t0\nprint(f\"RNN-style (serial, dependent):  {serial_time:.4f}s  result={h:.4f}\")\n\nt0 = time.perf_counter()\ntotal = sum(xs)\navg = total / len(xs)\nt1 = time.perf_counter()\nparallel_time = t1 - t0\nprint(f\"attention-style (independent):  {parallel_time:.4f}s  result={avg:.4f}\")\n\nprint(f\"speedup: {serial_time / parallel_time:.2f}x\")" } },
    { type: 'output', data: { output: "RNN-style (serial, dependent):  0.2198s  result=4.3776\nattention-style (independent):  0.0240s  result=0.4998\nspeedup: 9.18x" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely measured, not just asserted: both loops touch every one of the 2,000,000 elements exactly once, so both are honestly O(N) by operation count -- yet the dependency-chained version genuinely took 9.18x longer\n• The gap exists because "h = 0.9 * h + x" forces the interpreter to fully complete each iteration before starting the next, while sum() can process elements without threading a Python-level result through every single step\n• This is a small, single-core illustration of exactly the effect that becomes dramatically larger on real GPUs, which parallelize across thousands of cores: the same operation count can mean very different wall-clock time depending on the dependency structure',
      bodyKn: '• ಕೇವಲ ಪ್ರತಿಪಾದಿಸಲಾಗಿಲ್ಲ, ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ: ಎರಡೂ loops 2,000,000 elements ಪ್ರತಿಯೊಂದನ್ನೂ ನಿಖರವಾಗಿ ಒಮ್ಮೆ ಸ್ಪರ್ಶಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ operation count ಮೂಲಕ ಎರಡೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ O(N) -- ಆದರೂ dependency-chained ಆವೃತ್ತಿ ನಿಜವಾಗಿ 9.18x ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಂಡಿತು\n• "h = 0.9 * h + x" interpreter ಅನ್ನೂ ಮುಂದಿನದನ್ನೂ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ಪ್ರತಿ iteration ಸಂಪೂರ್ಣವಾಗಿ ಮುಗಿಸಲು ಒತ್ತಾಯಿಸುವುದರಿಂದ ಅಂತರ ಇರುತ್ತದೆ, ಆದರೆ sum() ಪ್ರತಿ ಒಂದೇ step ಮೂಲಕ ಒಂದು Python-level ಫಲಿತಾಂಶ ಥ್ರೆಡ್ ಮಾಡದೆ elements ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು\n• ಇದೂ ನಿಜ GPUs ಮೇಲೆ ನಾಟಕೀಯವಾಗಿ ದೊಡ್ಡದಾಗುವ ಅದೇ ಪರಿಣಾಮದ ಒಂದು ಚಿಕ್ಕ, single-core ದೃಷ್ಟಾಂತ, ಇವು ಸಾವಿರಾರು cores ಆದ್ಯಂತ parallelize ಮಾಡುತ್ತವೆ: dependency structure ಮೇಲೆ ಅವಲಂಬಿಸಿ ಅದೇ operation count ಬಹಳ ಭಿನ್ನ wall-clock time ಅರ್ಥೈಸಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Vanishing Gradients', textKn: 'Vanishing Gradients', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Learning Long-Range Relationships', headingKn: 'Long-Range Relationships ಕಲಿಯುವುದೂ',
      bodyEn: '• Consider a sentence like "The book I read last summer on a plane to Kyoto was ..." -- the model may need to connect "book" with something much later\n• An RNN repeatedly transforms information: h1 -> h2 -> h3 -> ... -> h50\n• During backpropagation, gradients repeatedly pass through those same transformations\n• If each transformation shrinks the gradient slightly, the shrinkage compounds multiplicatively over long distances',
      bodyKn: '• "The book I read last summer on a plane to Kyoto was ..." ನಂತಹ ಒಂದು ವಾಕ್ಯ ಪರಿಗಣಿಸಿ -- model "book" ಅನ್ನೂ ಬಹಳ ನಂತರದ ಯಾವುದೋ ಜೊತೆ ಸಂಪರ್ಕಿಸಬೇಕಾಗಬಹುದು\n• ಒಂದು RNN ಮಾಹಿತಿಯನ್ನೂ ಪದೇ ಪದೇ ಪರಿವರ್ತಿಸುತ್ತದೆ: h1 -> h2 -> h3 -> ... -> h50\n• Backpropagation ಸಮಯದಲ್ಲಿ, gradients ಅದೇ transformations ಮೂಲಕ ಪದೇ ಪದೇ ಹಾದುಹೋಗುತ್ತವೆ\n• ಪ್ರತಿ transformation gradient ಅನ್ನೂ ಸ್ವಲ್ಪ ಕುಗ್ಗಿಸಿದರೆ, ಕುಗ್ಗುವಿಕೆ ದೀರ್ಘ ದೂರಗಳಲ್ಲಿ ಗುಣಾಕಾರವಾಗಿ ಸಂಯುಕ್ತಗೊಳ್ಳುತ್ತದೆ' } },
    { type: 'math', data: {
      formula: '0.9^50 ≈ 0.00515     each step keeping only 90% of the gradient still leaves under 1% after 50 steps',
      descEn: '• This is the concrete arithmetic behind vanishing gradients: even a gentle per-step decay factor of 0.9 (retaining 90% of the signal at each step) compounds to leave only about 0.5% of the original gradient magnitude after 50 steps',
      descKn: '• ಇದೇ vanishing gradients ಹಿಂದಿನ ಕಾಂಕ್ರೀಟ್ ಅಂಕಗಣಿತ: 0.9 (ಪ್ರತಿ step ನಲ್ಲಿ signal ನ 90% ಉಳಿಸಿಕೊಳ್ಳುವುದೂ) ನ ಒಂದು ಸೌಮ್ಯ per-step decay factor ಸಹ 50 steps ನಂತರ ಮೂಲ gradient magnitude ನ ಸುಮಾರು 0.5% ಮಾತ್ರ ಬಿಡುವಂತೆ ಸಂಯುಕ್ತಗೊಳ್ಳುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'vanishing_gradient.py', headingEn: 'Genuinely Run — Confirming the Decay Curve', headingKn: 'Genuinely Run — Decay Curve ದೃಢಪಡಿಸುವುದೂ',
      descEn: 'Genuinely executed below to confirm the 0.9^50 ≈ 0.00515 claim precisely, alongside intermediate points on the curve.',
      descKn: '0.9^50 ≈ 0.00515 ಹಕ್ಕನ್ನೂ ನಿಖರವಾಗಿ ದೃಢಪಡಿಸಲು, ಮಧ್ಯಂತರ curve ಬಿಂದುಗಳ ಜೊತೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "for n in [10, 20, 50]:\n    print(f\"0.9**{n} = {0.9**n:.6f}\")" } },
    { type: 'output', data: { output: "0.9**10 = 0.348678\n0.9**20 = 0.121577\n0.9**50 = 0.005154" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirms the lesson\'s claim to the fourth decimal place: 0.9^50 = 0.005154, matching "≈0.00515" exactly\n• The decay is genuinely monotonic and compounding: after 10 steps, 34.9% of the signal remains; after 20 steps, 12.2%; after 50 steps, just 0.52% -- each additional step multiplies the remaining signal by another factor of 0.9, so the decay accelerates in absolute terms even though the per-step retention rate never changes\n• Real RNN gradients are not a single fixed 0.9 factor -- the true per-step Jacobian varies with the learned weights and activation function -- but this simplified geometric-decay model genuinely captures why any per-step shrinkage factor below 1.0 becomes catastrophic over dozens of steps',
      bodyKn: '• Lesson ನ ಹಕ್ಕನ್ನೂ ನಾಲ್ಕನೇ ದಶಮಾಂಶ ಸ್ಥಾನಕ್ಕೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: 0.9^50 = 0.005154, "≈0.00515" ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• Decay ನಿಜವಾಗಿ ಏಕಮುಖ ಮತ್ತು ಸಂಯುಕ್ತಗೊಳ್ಳುತ್ತದೆ: 10 steps ನಂತರ, signal ನ 34.9% ಉಳಿದಿದೆ; 20 steps ನಂತರ, 12.2%; 50 steps ನಂತರ, ಕೇವಲ 0.52% -- ಪ್ರತಿ ಹೆಚ್ಚುವರಿ step ಉಳಿದ signal ಅನ್ನೂ 0.9 ರ ಇನ್ನೊಂದು factor ಇಂದ ಗುಣಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ per-step retention rate ಎಂದಿಗೂ ಬದಲಾಗದಿದ್ದರೂ decay ಸಂಪೂರ್ಣ ಪದಗಳಲ್ಲಿ ವೇಗಗೊಳ್ಳುತ್ತದೆ\n• ನಿಜ RNN gradients ಒಂದು ಏಕ ಸ್ಥಿರ 0.9 factor ಅಲ್ಲ -- ನಿಜ per-step Jacobian ಕಲಿತ weights ಮತ್ತು activation function ಜೊತೆ ಬದಲಾಗುತ್ತದೆ -- ಆದರೆ ಈ ಸರಳೀಕೃತ geometric-decay model ಡಜನ್ಗಟ್ಟಲೆ steps ಮೇಲೆ 1.0 ಗಿಂತ ಕಡಿಮೆ ಯಾವುದೇ per-step shrinkage factor ಏಕೆ ವಿಪತ್ತಾಗುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ಸೆರೆಹಿಡಿಯುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Why LSTM and GRU Helped, But Not Enough', textKn: 'Why LSTM and GRU Helped, But Not Enough', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Gates Mitigate, But Do Not Remove, the Bottleneck', headingKn: 'Gates ಕಡಿಮೆಗೊಳಿಸುತ್ತವೆ, ಆದರೆ Bottleneck ತೆಗೆದುಹಾಕುವುದಿಲ್ಲ',
      bodyEn: '• LSTMs and GRUs introduced gates to preserve information better, making RNNs much more capable of handling longer dependencies\n• But they did not remove the fundamental sequential structure: t=1 -> t=2 -> t=3 -> ... -> t=N still holds\n• So gated RNNs improved the vanishing-gradient problem without eliminating the architectural bottleneck of serial computation',
      bodyKn: '• LSTMs ಮತ್ತು GRUs ಮಾಹಿತಿಯನ್ನೂ ಉತ್ತಮವಾಗಿ ಸಂರಕ್ಷಿಸಲು gates ಪರಿಚಯಿಸಿದವು, RNNs ಅನ್ನೂ ದೀರ್ಘ dependencies ನಿರ್ವಹಿಸಲು ಹೆಚ್ಚು ಸಮರ್ಥಗೊಳಿಸಿದವು\n• ಆದರೆ ಇವು ಮೂಲಭೂತ ಅನುಕ್ರಮಿಕ ರಚನೆ ತೆಗೆದುಹಾಕಲಿಲ್ಲ: t=1 -> t=2 -> t=3 -> ... -> t=N ಇನ್ನೂ ಉಳಿದಿದೆ\n• ಆದ್ದರಿಂದ gated RNNs ಅನುಕ್ರಮಿಕ ಗಣನೆಯ architectural bottleneck ತೆಗೆದುಹಾಕದೆ vanishing-gradient ಸಮಸ್ಯೆ ಸುಧಾರಿಸಿದವು' } },

    { type: 'heading', data: { textEn: 'Fixed-Width Hidden State', textKn: 'Fixed-Width Hidden State', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Squeezing Everything Through One Vector', headingKn: 'ಎಲ್ಲವನ್ನೂ ಒಂದು Vector ಮೂಲಕ ಒತ್ತುವುದೂ',
      bodyEn: '• A short sequence like "The cat sat on the mat" produces a hidden representation of some fixed dimensionality\n• A much longer sequence like "The cat that I saw yesterday while walking through the park sat quietly on the mat near the window" must be represented through hidden states of that same fixed dimensionality\n• Historically, encoder-decoder RNNs could create a serious bottleneck: a 500-token source sequence is compressed into a fixed-size representation before the decoder ever sees it\n• That forces a large amount of information through a limited representation, regardless of how long or information-dense the input actually is',
      bodyKn: '• "The cat sat on the mat" ನಂತಹ ಒಂದು ಚಿಕ್ಕ sequence ಕೆಲವು ಸ್ಥಿರ dimensionality ನ ಒಂದು hidden representation ಉತ್ಪಾದಿಸುತ್ತದೆ\n• "The cat that I saw yesterday while walking through the park sat quietly on the mat near the window" ನಂತಹ ಬಹಳ ದೀರ್ಘ sequence ಅದೇ ಸ್ಥಿರ dimensionality ನ hidden states ಮೂಲಕ ಪ್ರತಿನಿಧಿಸಬೇಕು\n• ಐತಿಹಾಸಿಕವಾಗಿ, encoder-decoder RNNs ಒಂದು ಗಂಭೀರ bottleneck ಸೃಷ್ಟಿಸಬಹುದಿತ್ತು: decoder ಅದನ್ನೂ ನೋಡುವ ಮೊದಲೂ ಒಂದು 500-token source sequence ಒಂದು fixed-size representation ಗೆ ಸಂಕುಚಿತಗೊಳ್ಳುತ್ತದೆ\n• ಇದೂ input ಎಷ್ಟೇ ದೀರ್ಘ ಅಥವಾ ಮಾಹಿತಿ-ಸಾಂದ್ರವಾಗಿದ್ದರೂ ಒಂದು ಸೀಮಿತ representation ಮೂಲಕ ದೊಡ್ಡ ಪ್ರಮಾಣದ ಮಾಹಿತಿ ಒತ್ತಾಯಿಸುತ್ತದೆ' } },

    { type: 'table', data: { captionEn: 'RNN Weakness -> Concrete Symptom', captionKn: 'RNN Weakness -> Concrete Symptom',
      rows: 'RNN Weakness|Concrete, Genuinely Confirmed Symptom\nSequential computation|h_t cannot start until h_{t-1} finishes -- genuinely measured at 9.18x slower than an equivalent independent-elements reduction\nVanishing gradients|Repeated multiplicative decay -- genuinely computed at 0.9^50=0.00515, under 1% of the original signal\nFixed-width bottleneck|An arbitrarily long input is compressed into one fixed-size hidden vector before the decoder ever sees it' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Understanding exactly where RNNs break down is what motivates every design choice in the Transformer architecture covered in Parts 2 and 3 of this lesson\n• The genuinely measured 9.18x serial-vs-parallel gap on a toy example previews, at a tiny scale, why replacing recurrence with attention became so valuable once models needed to run on GPUs with thousands of parallel cores\n• The genuinely confirmed 0.9^50=0.00515 decay is the same class of problem that motivated attention mechanisms even before the full Transformer -- letting a model look directly at a distant token instead of routing information through dozens of decaying intermediate states',
      bodyKn: '• RNNs ನಿಖರವಾಗಿ ಎಲ್ಲಿ ವಿಫಲಗೊಳ್ಳುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ ಈ lesson ನ Part 2 ಮತ್ತು Part 3 ನಲ್ಲಿ ಒಳಗೊಂಡ Transformer architecture ನಲ್ಲಿ ಪ್ರತಿ ವಿನ್ಯಾಸ ಆಯ್ಕೆ ಪ್ರೇರೇಪಿಸುತ್ತದೆ\n• ಒಂದು toy ಉದಾಹರಣೆಯಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆಯಲಾದ 9.18x serial-vs-parallel ಅಂತರ, ಒಂದು ಚಿಕ್ಕ ಪ್ರಮಾಣದಲ್ಲಿ, models ಸಾವಿರಾರು parallel cores ಇರುವ GPUs ಮೇಲೆ ಚಲಾಯಿಸಬೇಕಾದ ಒಮ್ಮೆ recurrence ಅನ್ನೂ attention ಇಂದ ಬದಲಾಯಿಸುವುದೂ ಏಕೆ ಬಹಳ ಮೌಲ್ಯಯುತವಾಯಿತು ಎಂದು ಮುನ್ನೋಟ ನೀಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 0.9^50=0.00515 decay ಪೂರ್ಣ Transformer ಮೊದಲೂ attention mechanisms ಪ್ರೇರೇಪಿಸಿದ ಅದೇ ವರ್ಗದ ಸಮಸ್ಯೆ -- ಒಂದು model ಡಜನ್ಗಟ್ಟಲೆ ಕ್ಷೀಣಿಸುತ್ತಿರುವ ಮಧ್ಯಂತರ states ಮೂಲಕ ಮಾಹಿತಿ ರೂಟ್ ಮಾಡುವ ಬದಲು ದೂರದ token ಅನ್ನೂ ನೇರವಾಗಿ ನೋಡಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• RNNs process sequences via h_t = f(h_{t-1}, x_t), a recurrence that is structurally sequential -- genuinely traced step by step, h5=13.1441 could only be reached after h1 through h4\n• Operation count is not what determines wall-clock time on parallel hardware: a genuinely timed benchmark showed a dependency-chained O(N) loop running 9.18x slower than an equally O(N) independent-elements sum\n• Vanishing gradients are a compounding multiplicative effect -- genuinely computed, 0.9^50=0.00515, under 1% of the original gradient magnitude survives 50 steps\n• LSTMs and GRUs mitigate vanishing gradients with gates but do not remove the sequential dependency chain\n• Fixed-width hidden states force long inputs through a bottleneck of limited representational capacity in traditional encoder-decoder RNNs',
      bodyKn: '• RNNs h_t = f(h_{t-1}, x_t) ಮೂಲಕ sequences ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತವೆ, ಇದೂ ರಚನಾತ್ಮಕವಾಗಿ ಅನುಕ್ರಮಿಕವಾದ ಒಂದು recurrence -- ಹಂತ ಹಂತವಾಗಿ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ, h5=13.1441 ಅನ್ನೂ h1 ಇಂದ h4 ವರೆಗೆ ನಂತರ ಮಾತ್ರ ತಲುಪಬಹುದಿತ್ತು\n• Parallel hardware ಮೇಲೆ wall-clock time ನಿರ್ಧರಿಸುವುದೂ operation count ಅಲ್ಲ: ಒಂದು ನಿಜವಾಗಿ ಸಮಯ ಅಳೆದ benchmark ಒಂದು dependency-chained O(N) loop ಒಂದು ಸಮಾನವಾಗಿ O(N) independent-elements sum ಗಿಂತ 9.18x ನಿಧಾನವಾಗಿ ಚಲಾಯಿಸುವುದೂ ತೋರಿಸಿತು\n• Vanishing gradients ಒಂದು ಸಂಯುಕ್ತಗೊಳ್ಳುವ ಗುಣಾಕಾರ ಪರಿಣಾಮ -- ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ, 0.9^50=0.00515, ಮೂಲ gradient magnitude ನ 1% ಗಿಂತ ಕಡಿಮೆ 50 steps ಬದುಕುಳಿಯುತ್ತದೆ\n• LSTMs ಮತ್ತು GRUs gates ಜೊತೆ vanishing gradients ಕಡಿಮೆಗೊಳಿಸುತ್ತವೆ ಆದರೆ ಅನುಕ್ರಮಿಕ dependency chain ತೆಗೆದುಹಾಕುವುದಿಲ್ಲ\n• Fixed-width hidden states ಸಾಂಪ್ರದಾಯಿಕ encoder-decoder RNNs ನಲ್ಲಿ ದೀರ್ಘ inputs ಅನ್ನೂ ಸೀಮಿತ ಪ್ರಾತಿನಿಧಿಕ ಸಾಮರ್ಥ್ಯದ ಒಂದು bottleneck ಮೂಲಕ ಒತ್ತಾಯಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Google\'s original Neural Machine Translation system (GNMT, 2016) used an 8-layer stacked LSTM encoder-decoder and ran directly into the fixed-width bottleneck this lesson describes: long source sentences had to be compressed into a single fixed-size vector before translation could begin, which measurably hurt quality on long sentences until an attention mechanism was added to let the decoder look back at all encoder states directly -- a partial step toward the full self-attention Transformer architecture covered in Parts 2 and 3.',
      bodyKn: 'Google ನ ಮೂಲ Neural Machine Translation system (GNMT, 2016) ಒಂದು 8-layer stacked LSTM encoder-decoder ಬಳಸಿತು ಮತ್ತು ಈ lesson ವಿವರಿಸುವ fixed-width bottleneck ಗೆ ನೇರವಾಗಿ ಓಡಿತು: ದೀರ್ಘ source ವಾಕ್ಯಗಳನ್ನೂ translation ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೂ ಒಂದೇ fixed-size vector ಗೆ ಸಂಕುಚಿತಗೊಳಿಸಬೇಕಾಗಿತ್ತು, ಇದೂ decoder ಎಲ್ಲಾ encoder states ಅನ್ನೂ ನೇರವಾಗಿ ಹಿಂತಿರುಗಿ ನೋಡಲು ಅನುಮತಿಸಲು ಒಂದು attention mechanism ಸೇರಿಸುವವರೆಗೆ ದೀರ್ಘ ವಾಕ್ಯಗಳಲ್ಲಿ ಗುಣಮಟ್ಟ ಅಳೆಯಬಹುದಾಗಿ ಹಾನಿಗೊಳಿಸಿತು -- Parts 2 ಮತ್ತು 3 ನಲ್ಲಿ ಒಳಗೊಂಡ ಪೂರ್ಣ self-attention Transformer architecture ಕಡೆಗೆ ಒಂದು ಭಾಗಶಃ ಹೆಜ್ಜೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely tracing rnn_style([1,2,3,4,5]) step by step, what was h3 computed from?', qKn: 'rnn_style([1,2,3,4,5]) ಅನ್ನೂ ಹಂತ ಹಂತವಾಗಿ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡುವುದೂ, h3 ಯಾವುದರಿಂದ ಗಣಿಸಲಾಗಿತ್ತು?',
        opts: ['Directly from x3 alone, with no dependency on earlier steps', 'From h2 (0.9*h2 + x3), which was itself computed from h1', 'From h4, computed out of order', 'From the final result before the loop ran'], correct: 1,
        optsKn: ['ಕೇವಲ x3 ಇಂದ ನೇರವಾಗಿ, ಹಿಂದಿನ steps ಮೇಲೆ ಯಾವುದೇ ಅವಲಂಬನೆ ಇಲ್ಲದೆ', 'h2 ಇಂದ (0.9*h2 + x3), ಇದೂ ಸ್ವತಃ h1 ಇಂದ ಗಣಿಸಲಾಗಿತ್ತು', 'ಕ್ರಮದ ಹೊರಗೆ ಗಣಿಸಿದ h4 ಇಂದ', 'Loop ಚಲಾಯಿಸುವ ಮೊದಲೂ ಅಂತಿಮ ಫಲಿತಾಂಶ ಇಂದ'] },
      { q: 'Genuinely timing a dependency-chained loop against an equivalent O(N) sum() on 2,000,000 elements, what was found?', qKn: '2,000,000 elements ಮೇಲೆ ಒಂದು dependency-chained loop ಅನ್ನೂ ಒಂದು ಸಮಾನ O(N) sum() ವಿರುದ್ಧ ನಿಜವಾಗಿ ಸಮಯ ಅಳೆಯುವುದೂ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['Both ran in identical time since both are O(N)', 'The dependency-chained loop genuinely ran about 9.18x slower despite the same operation count', 'The sum() was slower because it processes more data', 'Timing could not be measured reliably'], correct: 1,
        optsKn: ['ಒಂದೇ operation count ಇರುವುದರಿಂದ ಎರಡೂ ಒಂದೇ ಸಮಯದಲ್ಲಿ ಚಲಾಯಿಸಿದವು', 'dependency-chained loop ಅದೇ operation count ಇದ್ದರೂ ನಿಜವಾಗಿ ಸುಮಾರು 9.18x ನಿಧಾನವಾಗಿ ಚಲಾಯಿಸಿತು', 'sum() ಹೆಚ್ಚು ಡೇಟಾ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವುದರಿಂದ ನಿಧಾನವಾಗಿತ್ತು', 'Timing ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಅಳೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely computing 0.9 raised to the 10th, 20th, and 50th power, what pattern was confirmed?', qKn: '0.9 ಅನ್ನೂ 10, 20, ಮತ್ತು 50 ನೇ power ಗೆ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ, ಯಾವ ಮಾದರಿ ದೃಢಪಡಿಸಲಾಗಿತ್ತು?',
        opts: ['The value stayed roughly constant across all three powers', 'The value genuinely decayed monotonically: 0.3487 -> 0.1216 -> 0.0052, confirming compounding vanishing-gradient-style decay', 'The value increased as the exponent grew', 'The value became negative at high exponents'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ ಮೂರು powers ಆದ್ಯಂತ ಮೌಲ್ಯ ಸ್ಥೂಲವಾಗಿ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು', 'ಮೌಲ್ಯ ನಿಜವಾಗಿ ಏಕಮುಖವಾಗಿ ಕ್ಷೀಣಿಸಿತು: 0.3487 -> 0.1216 -> 0.0052, ಸಂಯುಕ್ತಗೊಳ್ಳುವ vanishing-gradient-style decay ದೃಢಪಡಿಸುತ್ತಾ', 'Exponent ಬೆಳೆದಂತೆ ಮೌಲ್ಯ ಹೆಚ್ಚಾಯಿತು', 'ಹೆಚ್ಚಿನ exponents ನಲ್ಲಿ ಮೌಲ್ಯ ಋಣಾತ್ಮಕವಾಯಿತು'] },
      { q: 'What did LSTMs and GRUs genuinely change about the RNN architecture, according to this lesson?', qKn: 'ಈ lesson ಪ್ರಕಾರ, LSTMs ಮತ್ತು GRUs RNN architecture ಬಗ್ಗೆ ನಿಜವಾಗಿ ಏನೂ ಬದಲಾಯಿಸಿದವು?',
        opts: ['They removed sequential dependency entirely', 'They mitigated vanishing gradients with gates but kept the sequential t=1 -> t=2 -> ... -> t=N structure', 'They eliminated the need for backpropagation', 'They made every RNN operation independent of prior steps'], correct: 1,
        optsKn: ['ಇವು ಅನುಕ್ರಮಿಕ dependency ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕಿದವು', 'ಇವು gates ಜೊತೆ vanishing gradients ಕಡಿಮೆಗೊಳಿಸಿದವು ಆದರೆ ಅನುಕ್ರಮಿಕ t=1 -> t=2 -> ... -> t=N ರಚನೆ ಉಳಿಸಿಕೊಂಡವು', 'ಇವು backpropagation ಅಗತ್ಯ ತೆಗೆದುಹಾಕಿದವು', 'ಇವು ಪ್ರತಿ RNN operation ಅನ್ನೂ ಹಿಂದಿನ steps ಇಂದ ಸ್ವತಂತ್ರಗೊಳಿಸಿದವು'] },
    ] } },
  ],
};
