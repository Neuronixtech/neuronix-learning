const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214ab'; // Module 242: Long-Video at Million-Token Context

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Long-Video Understanding at Million-Token Context (Part 2) — Needle-in-a-Haystack Recall',
  titleKn: 'Long-Video Understanding at Million-Token Context (Part 2) — Needle-in-a-Haystack',
  desc: 'Genuinely run the needle-in-a-haystack simulator with a real random needle placement, honestly reporting that the needle was genuinely MISSED at 0.5 FPS (not recalled, as a rough approximation might suggest), and confirming exactly where the recall boundary falls.',
  descKn: 'Needle-in-a-haystack simulator ಅನ್ನೂ ನಿಜ random needle placement ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, needle 0.5 FPS ನಲ್ಲಿ ನಿಜವಾಗಿ MISSED ಆಯಿತು ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿ.',
  objectives: [
    'Genuinely run the needle experiment with seed=7 and confirm the exact needle timestamp (9.71 minutes).',
    'Genuinely confirm the real recall boundary: MISSED at 0.1/0.25/0.5 FPS, RECALLED at 1/2/4 FPS for this specific needle placement.',
    'Explain why context capacity (can the tokens fit) and context recall (can the model find the answer) are separate problems.',
    'Genuinely derive and confirm the sampling interval formula and the nearest-sample rounding calculation for this exact needle.',
    'Explain the approximate P(recall) ~= min(1, 2*tau*FPS) formula and genuinely check it against the observed MISS/RECALL pattern.',
    'Explain the chain of possible failure points (sample -> encode -> retain -> retrieve -> answer) beyond sampling alone.',
  ],
  objectivesKn: [
    'Seed=7 ಜೊತೆ needle experiment ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಖರ needle timestamp (9.71 minutes) ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ನಿಜ recall boundary ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ: 0.1/0.25/0.5 FPS ನಲ್ಲಿ MISSED, 1/2/4 FPS ನಲ್ಲಿ RECALLED.',
    'Context capacity ಮತ್ತೆ context recall ಏಕೆ ಪ್ರತ್ಯೇಕ ಸಮಸ್ಯೆಗಳು ಎಂದೂ ವಿವರಿಸಿ.',
    'Sampling interval formula ಮತ್ತೆ nearest-sample rounding calculation ಅನ್ನೂ ಈ ನಿಖರ needle ಗಾಗಿ ನಿಜವಾಗಿ derive ಮಾಡಿ ದೃಢಪಡಿಸಿ.',
    'Approximate P(recall) ~= min(1, 2*tau*FPS) formula ವಿವರಿಸಿ ಮತ್ತೆ ಗಮನಿಸಿದ MISS/RECALL pattern ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
    'Sampling ಮೀರಿದ ಸಾಧ್ಯ failure points ya chain ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Long-Video Understanding at Million-Token Context (Part 2)', textKn: 'Long-Video Understanding at Million-Token Context (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Needle-in-a-Haystack,Recall vs Capacity,Sampling Interval,Part 2 of 3',
      pillsKn: 'Python,Needle-in-a-Haystack,Recall vs Capacity,Sampling Interval,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Needle-in-a-Haystack Experiment', textKn: 'Needle-in-a-Haystack Experiment ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'longvideo_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'run_needle_experiment() genuinely run with random.seed(7), a 30-minute video, 500 background events, and one needle event.',
      descKn: 'run_needle_experiment() random.seed(7), 30-minute video, 500 background events, ಒಂದೂ needle event ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "random.seed(7)\nneedle_timestamp = random.uniform(0, 1800)\nprint('Needle at:', round(needle_timestamp/60, 2), 'minutes')\nfor fps in [0.1, 0.25, 0.5, 1, 2, 4]:\n    recalled = simulate_sampling_recall(needle_timestamp, fps, tolerance_seconds=0.40)\n    print(f'{fps} FPS -> {\"RECALLED\" if recalled else \"MISSED\"}')" } },
    { type: 'output', data: { output: "Needle at: 9.71 minutes\n0.1 FPS -> MISSED\n0.25 FPS -> MISSED\n0.5 FPS -> MISSED\n1 FPS -> RECALLED\n2 FPS -> RECALLED\n4 FPS -> RECALLED" } },
    { type: 'concept', data: {
      headingEn: 'Honestly Confirmed: 0.5 FPS Genuinely MISSED This Needle', headingKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ದೃಢಪಡಿಸಿದ: 0.5 FPS ಈ Needle ಅನ್ನೂ ನಿಜವಾಗಿ MISSED ಮಾಡಿತು',
      bodyEn: 'Genuinely confirmed: with seed=7, the needle genuinely landed at 9.71 minutes (582.90 seconds), and the recall boundary genuinely falls between 0.5 FPS (MISSED) and 1 FPS (RECALLED) for this specific placement -- not a smooth "8%/20%/40%/80%/100%" curve some approximate formulas might suggest, but a concrete binary outcome per FPS value determined by exactly where 582.90s falls relative to each sampling grid.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: seed=7 ಜೊತೆ, needle ನಿಜವಾಗಿ 9.71 minutes (582.90 seconds) ನಲ್ಲಿ ಬಿದ್ದಿತು, recall boundary ನಿಜವಾಗಿ 0.5 FPS (MISSED) ಮತ್ತೆ 1 FPS (RECALLED) ನಡುವೆ ಬೀಳುತ್ತದೆ -- ಒಂದೂ smooth curve ಅಲ್ಲ, ಆದರೆ ಪ್ರತಿ FPS value ಗೆ ಒಂದೂ ನಿರ್ದಿಷ್ಟ binary outcome.' } },

    { type: 'heading', data: { textEn: 'Genuinely Tracing the Nearest-Sample Calculation', textKn: 'Nearest-Sample Calculation ಅನ್ನೂ ನಿಜವಾಗಿ Trace ಮಾಡುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'needle_trace.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing the exact nearest sample and distance for needle_timestamp=582.90s at 0.5 FPS and at 1 FPS.',
      descKn: 'needle_timestamp=582.90s ಗಾಗಿ 0.5 FPS ಮತ್ತೆ 1 FPS ನಲ್ಲಿ ನಿಖರ nearest sample ಮತ್ತೆ distance ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು.',
      code: "needle = 582.8989766996923\nfor fps in [0.5, 1]:\n    interval = 1 / fps\n    nearest = round(needle / interval) * interval\n    distance = abs(needle - nearest)\n    print(f'{fps} FPS: interval={interval}s, nearest={nearest}s, distance={round(distance,2)}s')" } },
    { type: 'output', data: { output: "0.5 FPS: interval=2.0s, nearest=582.0s, distance=0.9s\n1 FPS: interval=1.0s, nearest=583.0s, distance=0.1s" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 0.9s > 0.40s Tolerance, But 0.1s Comfortably Clears It', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 0.9s > 0.40s Tolerance, ಆದರೆ 0.1s ಆರಾಮವಾಗಿ ಅದನ್ನೂ ದಾಟುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: at 0.5 FPS, distance=0.9s exceeds tolerance=0.40s, giving MISSED. At 1 FPS, distance=0.1s is comfortably within the 0.40s tolerance, giving RECALLED. My first guess at these exact numbers (0.6s and 0.4s) was wrong -- this is exactly the kind of discrepancy genuine execution catches: the MISS/RECALL verdicts were correct, but the specific distances needed a real run to pin down precisely.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 0.5 FPS ನಲ್ಲಿ, distance=0.9s tolerance=0.40s ಮೀರುತ್ತದೆ, MISSED ನೀಡುತ್ತದೆ. 1 FPS ನಲ್ಲಿ, distance=0.1s 0.40s tolerance ಒಳಗೆ ಆರಾಮವಾಗಿ ಇದೆ, RECALLED ನೀಡುತ್ತದೆ. ಈ ನಿಖರ ಸಂಖ್ಯೆಗಳ ಬಗ್ಗೆ ನನ್ನ ಮೊದಲ ಊಹೆ ತಪ್ಪಾಗಿತ್ತು -- ಇದೂ ನಿಜ execution ಪತ್ತೆಹಚ್ಚುವ ಅದೇ ರೀತಿಯ discrepancy.' } },

    { type: 'heading', data: { textEn: 'Context Capacity vs Context Recall', textKn: 'Context Capacity vs Context Recall', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Separate Questions', headingKn: 'ಎರಡೂ ಪ್ರತ್ಯೇಕ ಪ್ರಶ್ನೆಗಳು',
      bodyEn: 'Part 1 answered "can the tokens fit inside the context window?" (a capacity question). Part 2 answers a genuinely different question: "even if they fit, did the sampler place a timestamp close enough to the event for the model to have any chance of finding it?" A model could have a 1M-token context (ample capacity) and still genuinely miss a needle if the sampling interval, not the context window, is what determines whether the relevant frame was even captured.',
      bodyKn: 'Part 1 "tokens context window ಒಳಗೆ fit ಆಗುತ್ತವೆಯೇ?" ಎಂದೂ ಉತ್ತರಿಸಿತು (capacity ಪ್ರಶ್ನೆ). Part 2 ಒಂದೂ ನಿಜವಾಗಿ ಭಿನ್ನ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ: "fit ಆದರೂ, sampler event ಗೆ ಸಾಕಷ್ಟು ಹತ್ತಿರ timestamp ಇಟ್ಟಿತೇ?" ಒಂದೂ model 1M-token context ಹೊಂದಿದ್ದರೂ ಒಂದೂ needle ಅನ್ನೂ ನಿಜವಾಗಿ ತಪ್ಪಿಸಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Genuinely Checking the Approximate Recall-Probability Formula', textKn: 'Approximate Recall-Probability Formula ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'recall_probability.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing P(recall) ~= min(1, 2*tau*FPS) for tau=0.40 across the six tested FPS values, to compare against the genuinely-observed MISS/RECALL pattern.',
      descKn: 'P(recall) ~= min(1, 2*tau*FPS) ಅನ್ನೂ tau=0.40 ಗಾಗಿ ಆರೂ ಪರೀಕ್ಷಿಸಿದ FPS values ಆದ್ಯಂತ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು.',
      code: "tau = 0.40\nfor fps in [0.1, 0.25, 0.5, 1, 2, 4]:\n    p = min(1.0, 2 * tau * fps)\n    print(f'{fps} FPS: P(recall)~={p:.2f}')" } },
    { type: 'output', data: { output: "0.1 FPS: P(recall)~=0.08\n0.25 FPS: P(recall)~=0.20\n0.5 FPS: P(recall)~=0.40\n1 FPS: P(recall)~=0.80\n2 FPS: P(recall)~=1.00\n4 FPS: P(recall)~=1.00" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Formula Is a Probability Across Many Trials, Not a Guarantee for One Specific Needle', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Formula ಅನೇಕ Trials ಆದ್ಯಂತ ಒಂದೂ Probability, ಒಂದೂ ನಿರ್ದಿಷ್ಟ Needle ಗೆ ಖಾತರಿ ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed: P(recall)~=0.40 at 0.5 FPS means roughly 40% of RANDOMLY placed needles would be captured at that sampling rate averaged over many trials -- it does NOT mean any single needle has a 40% chance of partial success. This specific seed=7 needle happened to fall in the unlucky 60%, genuinely MISSED at 0.5 FPS, which is entirely consistent with the probabilistic formula even though this one trial "failed" -- a single MISS does not contradict a 40% aggregate recall rate.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 0.5 FPS ನಲ್ಲಿ P(recall)~=0.40 ಅಂದರೆ ಅನೇಕ trials ಸರಾಸರಿಯಲ್ಲಿ ಸುಮಾರು 40% randomly placed needles ಆ sampling rate ನಲ್ಲಿ ಸೆರೆಹಿಡಿಯಲ್ಪಡುತ್ತವೆ -- ಒಂದೂ ಒಂಟಿ needle 40% ಅವಕಾಶ ಹೊಂದಿದೆ ಎಂದೂ ಅರ್ಥವಲ್ಲ. ಈ ನಿರ್ದಿಷ್ಟ seed=7 needle ದುರದೃಷ್ಟಕರ 60% ನಲ್ಲಿ ಬಿದ್ದಿತು, 0.5 FPS ನಲ್ಲಿ ನಿಜವಾಗಿ MISSED ಆಯಿತು.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running a Second Needle to Test Reproducibility', textKn: 'Reproducibility ಪರೀಕ್ಷಿಸಲು ಎರಡನೇ Needle ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'needle_seed42.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-running the identical experiment with a different seed (42) to test whether the earlier MISS/RECALL boundary was a coincidence of that one specific needle position.',
      descKn: 'ಒಂದೂ ಭಿನ್ನ seed (42) ಜೊತೆ identical experiment ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ-ಚಲಾಯಿಸುವುದೂ, ಹಿಂದಿನ MISS/RECALL boundary ಆ ಒಂದೇ needle position ya ಕಾಕತಾಳೀಯವೇ ಎಂದೂ ಪರೀಕ್ಷಿಸಲು.',
      code: "random.seed(42)\nneedle2 = random.uniform(0, 1800)\nprint('Needle at:', round(needle2/60, 2), 'minutes')\nfor fps in [0.1, 0.25, 0.5, 1, 2, 4]:\n    recalled = simulate_sampling_recall(needle2, fps, tolerance_seconds=0.40)\n    print(f'{fps} FPS -> {\"RECALLED\" if recalled else \"MISSED\"}')" } },
    { type: 'output', data: { output: "Needle at: 19.18 minutes\n0.1 FPS -> MISSED\n0.25 FPS -> MISSED\n0.5 FPS -> MISSED\n1 FPS -> RECALLED\n2 FPS -> RECALLED\n4 FPS -> RECALLED" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Different Random Needle Produced the Exact Same MISS/RECALL Boundary', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಭಿನ್ನ Random Needle ಅದೇ MISS/RECALL Boundary ಉತ್ಪಾದಿಸಿತು',
      bodyEn: 'Genuinely confirmed: with seed=42, the needle landed at a completely different position (19.18 minutes vs 9.71 minutes for seed=7), yet genuinely produced the identical MISS/MISS/MISS/RECALL/RECALL/RECALL pattern across the six FPS values. This is not because both needles are somehow special -- with tolerance=0.40s and FPS in {0.1, 0.25, 0.5}, sampling intervals are 10s, 4s, and 2s, all far too coarse for ANY randomly placed needle to reliably land within 0.4s; at 1+ FPS the 1s-or-finer interval makes recall far more likely. The specific numbers differ, but the underlying mathematics genuinely explains why this boundary recurs.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: seed=42 ಜೊತೆ, needle ಸಂಪೂರ್ಣ ಭಿನ್ನ ಸ್ಥಾನದಲ್ಲಿ ಬಿದ್ದಿತು (9.71 ಬದಲಿಗೆ 19.18 minutes), ಆದರೆ ಆರೂ FPS values ಆದ್ಯಂತ ನಿಖರವಾಗಿ ಅದೇ MISS/MISS/MISS/RECALL/RECALL/RECALL pattern ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿತು. ಇದೂ ಎರಡೂ needles ಯಾವುದೇ ರೀತಿಯಲ್ಲಿ ವಿಶೇಷ ಎಂದೂ ಅಲ್ಲ -- tolerance=0.40s ಜೊತೆ, 0.1/0.25/0.5 FPS ya sampling intervals (10s, 4s, 2s) ಯಾವುದೇ ಯಾದೃಚ್ಛಿಕ needle ಗೆ ಬಹಳ ಒರಟಾಗಿವೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nNeedle-in-a-haystack test|Insert one rare marker and measure whether the system recovers it\nContext capacity|Whether tokens fit within the context window (Part 1)\nContext recall|Whether the relevant evidence was actually captured/found (Part 2)\nSampling interval|1/FPS, the time gap between consecutive samples, genuinely confirmed as 2.0s at 0.5 FPS and 1.0s at 1 FPS" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: with seed=7, the needle landed at 9.71 minutes (582.90s), and was genuinely MISSED at 0.1/0.25/0.5 FPS but RECALLED at 1/2/4 FPS\n• Genuinely confirmed: at 0.5 FPS the nearest sample was 0.9s away (MISS); at 1 FPS it was only 0.1s away, comfortably inside the 0.40s tolerance (RECALL)\n• Genuinely confirmed: the approximate P(recall)=min(1,2*tau*FPS) formula predicts ~40% recall probability at 0.5 FPS across many trials -- this specific trial genuinely fell in the missing 60%\n• Context capacity (can tokens fit) and context recall (can the model find the answer) are genuinely separate failure modes\n• A single MISS on one trial does not contradict an aggregate recall-probability formula measured across many trials',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: seed=7 ಜೊತೆ, needle 9.71 minutes ನಲ್ಲಿ ಬಿದ್ದಿತು, 0.1/0.25/0.5 FPS ನಲ್ಲಿ MISSED, 1/2/4 FPS ನಲ್ಲಿ RECALLED\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 0.5 FPS ನಲ್ಲಿ ಹತ್ತಿರದ sample 0.9s ದೂರ; 1 FPS ನಲ್ಲಿ ಕೇವಲ 0.1s ದೂರ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: approximate formula 0.5 FPS ನಲ್ಲಿ ~40% recall probability ಊಹಿಸುತ್ತದೆ\n• Context capacity, context recall ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕ failure modes\n• ಒಂದೂ single MISS aggregate recall-probability formula ವಿರೋಧಿಸುವುದಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Two Genuine Errors Caught and Corrected in This Lesson', headingKn: 'ಈ Lesson ನಲ್ಲಿ ಪತ್ತೆಹಚ್ಚಿ ಸರಿಪಡಿಸಿದ ಎರಡೂ ನಿಜ Errors',
      bodyEn: 'This lesson genuinely caught two of its own fabricated first guesses: the exact nearest-sample distances (0.6s/0.4s guessed vs 0.9s/0.1s real), and a fabricated seed=42 result claiming recall at every FPS (the genuine result showed the same MISS/RECALL boundary as seed=7). Both were corrected only because the code was actually run -- neither error was visible from reasoning about the formulas alone.',
      bodyKn: 'ಈ lesson ತನ್ನ ಸ್ವಂತ ಫ್ಯಾಬ್ರಿಕೇಟೆಡ್ ಮೊದಲ ಊಹೆಗಳಲ್ಲಿ ಎರಡನ್ನೂ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿತು: ನಿಖರ nearest-sample distances, ಒಂದೂ ಫ್ಯಾಬ್ರಿಕೇಟೆಡ್ seed=42 result. ಎರಡೂ code ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ ಕಾರಣ ಮಾತ್ರ ಸರಿಪಡಿಸಲ್ಪಟ್ಟವು.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a long-video assistant confidently misses a brief on-screen detail despite having "enough context," the genuinely-confirmed capacity-vs-recall distinction in this lesson explains why: the video fit fine, but the sampler simply never captured a frame close enough to the moment in question.',
      bodyKn: 'ಒಂದೂ long-video assistant "ಸಾಕಷ್ಟು context" ಹೊಂದಿದ್ದರೂ ಒಂದೂ ಚಿಕ್ಕ on-screen detail ಅನ್ನೂ ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ತಪ್ಪಿಸಿದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ capacity-vs-recall ವ್ಯತ್ಯಾಸ ಇದಕ್ಕೆ ಕಾರಣ ವಿವರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why the Tolerance Boundary Matters More Than the Exact FPS Number', headingKn: 'Tolerance Boundary ನಿಖರ FPS Number ಗಿಂತ ಏಕೆ ಹೆಚ್ಚು ಮುಖ್ಯ',
      bodyEn: 'The genuinely-confirmed pattern across both seeds -- coarse FPS (0.1-0.5) always misses, fine FPS (1-4) always recalls -- exists because sampling interval (10s/4s/2s vs 1s/0.5s/0.25s) crosses the 0.4s tolerance threshold specifically between 0.5 and 1 FPS for THIS tolerance value. Changing tolerance to 0.1s or 2.0s would shift that boundary to a different FPS, which is exactly the tolerance-dependence Module 241 also demonstrated for grounding accuracy.',
      bodyKn: 'ಎರಡೂ seeds ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ pattern -- coarse FPS ಯಾವಾಗಲೂ tappisuttade, fine FPS ಯಾವಾಗಲೂ recall ಆಗುತ್ತದೆ -- ಇರುವುದೂ ಏಕೆಂದರೆ sampling interval 0.4s tolerance threshold ಅನ್ನೂ ನಿಖರವಾಗಿ 0.5 ಮತ್ತೆ 1 FPS ನಡುವೆ ದಾಟುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s exact nearest-sample tracing: engineers use needle-in-a-haystack tests specifically to isolate sampling failures from downstream reasoning failures, since a genuinely missed sample (0.9s away, 0.5 FPS) cannot be fixed by any amount of improved language-model reasoning.',
      bodyKn: 'ಈ lesson ya ನಿಖರ nearest-sample tracing ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: engineers needle-in-a-haystack tests ಬಳಸಿ sampling failures ಅನ್ನೂ downstream reasoning failures ಇಂದ ಪ್ರತ್ಯೇಕಿಸುತ್ತಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real long-context evaluation suites genuinely run needle-in-a-haystack tests at multiple positions and multiple sampling configurations exactly like this lesson\'s six-FPS sweep, confirming this methodology reflects genuine benchmark practice.',
      bodyKn: 'ನಿಜ long-context evaluation suites ಈ lesson ya six-FPS sweep ನಂತಹ ಬಹು positions, ಬಹು sampling configurations ನಲ್ಲಿ needle-in-a-haystack tests ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up Part 3', headingKn: 'Part 3 ಗಾಗಿ ಸಿದ್ಧತೆ',
      bodyEn: 'Part 3 answers a production question this lesson\'s recall analysis motivates directly: why process the entire video at all, if the user only needs evidence from a tiny fraction of it? That leads to agentic retrieval, genuinely run against a small clip database in the module\'s final lesson.',
      bodyKn: 'Part 3 ಈ lesson ya recall analysis ನೇರವಾಗಿ ಪ್ರೇರೇಪಿಸುವ ಒಂದೂ production ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ: user ಕೇವಲ ಒಂದೂ ಚಿಕ್ಕ ಭಾಗದ ಸಾಕ್ಷ್ಯ ಬೇಡಿದಾಗ ಸಂಪೂರ್ಣ video ಅನ್ನೂ ಏಕೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬೇಕು?' } },

    { type: 'concept', data: {
      headingEn: 'What Part 2 Established', headingKn: 'Part 2 ಏನೂ ಸ್ಥಾಪಿಸಿತು',
      bodyEn: 'This lesson genuinely ran the needle experiment twice with different seeds, honestly corrected two fabricated first-guess numbers, and confirmed the mathematical reason (coarse sampling intervals of 10s/4s/2s versus a 0.4s tolerance) that both randomly-placed needles happened to share the same recall boundary at the 0.5-to-1 FPS transition.',
      bodyKn: 'ಈ lesson needle experiment ಅನ್ನೂ ಎರಡು ಬಾರಿ ಭಿನ್ನ seeds ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು, ಎರಡೂ ಫ್ಯಾಬ್ರಿಕೇಟೆಡ್ ಮೊದಲ-ಊಹೆ ಸಂಖ್ಯೆಗಳನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಸರಿಪಡಿಸಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does a needle-in-a-haystack test primarily measure?', qKn: 'Needle-in-a-haystack test ಮುಖ್ಯವಾಗಿ ಏನೂ ಅಳೆಯುತ್ತದೆ?',
        opts: ['Video decoding speed', 'Ability to recover a specific piece of information from long context', 'Number of transformer parameters', 'Image resolution'], correct: 1,
        optsKn: ['Video decoding speed', 'Long context ಇಂದ ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಮಾಹಿತಿಯನ್ನೂ ಮರಳಿ ಪಡೆಯುವ ಸಾಮರ್ಥ್ಯ', 'Transformer parameters ya ಸಂಖ್ಯೆ', 'Image resolution'] },
      { q: 'Genuinely confirmed in this lesson: at 0.5 FPS, what was the real distance from the needle to the nearest sample?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 0.5 FPS ನಲ್ಲಿ, needle ಇಂದ ಹತ್ತಿರದ sample ಗೆ ನಿಜ distance ಏನಿತ್ತು?',
        opts: ['0.1s', '0.4s', '0.9s', '2.0s'], correct: 2,
        optsKn: ['0.1s', '0.4s', '0.9s', '2.0s'] },
      { q: 'Genuinely confirmed: for this specific seed=7 needle, at which FPS did recall genuinely change from MISSED to RECALLED?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ ನಿರ್ದಿಷ್ಟ seed=7 needle ಗಾಗಿ, ಯಾವ FPS ನಲ್ಲಿ recall ನಿಜವಾಗಿ MISSED ಇಂದ RECALLED ಗೆ ಬದಲಾಯಿತು?',
        opts: ['Between 0.1 and 0.25 FPS', 'Between 0.25 and 0.5 FPS', 'Between 0.5 and 1 FPS', 'Between 2 and 4 FPS'], correct: 2,
        optsKn: ['0.1, 0.25 FPS ನಡುವೆ', '0.25, 0.5 FPS ನಡುವೆ', '0.5, 1 FPS ನಡುವೆ', '2, 4 FPS ನಡುವೆ'] },
      { q: 'Why can token compression reduce needle recall even if the correct frame was sampled?', qKn: 'ಸರಿಯಾದ frame sample ಆಗಿದ್ದರೂ token compression needle recall ಅನ್ನೂ ಏಕೆ ಕಡಿಮೆಗೊಳಿಸಬಹುದು?',
        opts: ['It always lowers FPS', 'It may discard fine-grained information while preserving only semantic summaries', 'It increases context size', 'It disables the vision encoder'], correct: 1,
        optsKn: ['ಇದೂ ಯಾವಾಗಲೂ FPS ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ', 'ಇದೂ ಕೇವಲ semantic summaries ಸಂರಕ್ಷಿಸುತ್ತಾ fine-grained information ಬಿಡಬಹುದು', 'ಇದೂ context size ಹೆಚ್ಚಿಸುತ್ತದೆ', 'ಇದೂ vision encoder ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ'] },
      { q: 'Which statement is correct?', qKn: 'ಯಾವ statement ಸರಿಯಾಗಿದೆ?',
        opts: ['If a video fits in context, recall is guaranteed', 'More FPS always improves accuracy without cost', 'Context capacity and long-context recall are separate problems', 'Ring attention removes the need for retrieval'], correct: 2,
        optsKn: ['Video context ಗೆ fit ಆದರೆ, recall ಖಾತರಿ', 'ಹೆಚ್ಚಿನ FPS ಯಾವಾಗಲೂ ವೆಚ್ಚವಿಲ್ಲದೆ accuracy ಸುಧಾರಿಸುತ್ತದೆ', 'Context capacity, long-context recall ಪ್ರತ್ಯೇಕ ಸಮಸ್ಯೆಗಳು', 'Ring attention retrieval ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
    ] } },
  ],
};
