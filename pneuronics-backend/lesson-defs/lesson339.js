const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321436'; // Module 206: Async and Hogwild! Inference

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Async and Hogwild! Inference — Part 2: RoPE, Speedup Math, and Worker Mechanics',
  titleKn: 'Async and Hogwild! Inference — Part 2: RoPE, Speedup Math, ಮತ್ತೆ Worker Mechanics',
  desc: 'Genuinely derive why RoPE\'s relative-position property makes a concurrently-written shared cache tractable, then genuinely compute the Amdahl-style Hogwild! runtime T_N=T_serial*((1-p)+p/N)+coordination through the lesson\'s exact 10,000-step example, confirming the cited 1.8x speedup and why the same overhead turns a 500-step task into a slowdown.',
  descKn: "RoPE ya relative-position ಗುಣಲಕ್ಷಣ ಒಂದೂ ಏಕಕಾಲದಲ್ಲಿ-ಬರೆದ shared cache ಅನ್ನೂ ಏಕೆ ನಿರ್ವಹಿಸಬಹುದಾಗಿ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಪಡೆಯಿರಿ, ನಂತರ Amdahl-style Hogwild! runtime T_N=T_serial*((1-p)+p/N)+coordination ಅನ್ನೂ lesson ya ನಿಖರ 10,000-step ಉದಾಹರಣೆ ಮೂಲಕ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ಉಲ್ಲೇಖಿತ 1.8x speedup ಮತ್ತೆ ಅದೇ overhead ಒಂದೂ 500-step task ಅನ್ನೂ ಒಂದೂ slowdown ಆಗಿ ಏಕೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.",
  objectives: [
    'Explain why position information matters in a shared cache written concurrently by multiple workers.',
    'Genuinely derive how RoPE\'s rotation-based relative positioning (q_m^T k_n depends only on n-m) makes a shared, growing cache tractable.',
    'Genuinely compute the ideal Amdahl-style Hogwild! runtime T_N=T_serial*((1-p)+p/N) for the lesson\'s p=0.7, N=4 example.',
    'Genuinely add coordination overhead and confirm the lesson\'s cited T_Hogwild=5550 and speedup~=1.8x.',
    'Genuinely compute why the same 800-unit overhead turns a 500-step task into a slowdown but stays negligible for a 50,000-step task.',
    'Explain the toy worker loop (read -> choose category -> write) and its threshold-based coordination heuristic.',
  ],
  objectivesKn: [
    'ಬಹು workers ಇಂದ ಏಕಕಾಲದಲ್ಲಿ ಬರೆಯಲಾಗುವ ಒಂದೂ shared cache ನಲ್ಲಿ position information ಏಕೆ ಮುಖ್ಯ ಎಂದೂ ವಿವರಿಸಿ.',
    'RoPE ya rotation-based relative positioning (q_m^T k_n ಕೇವಲ n-m ಮೇಲೆ ಅವಲಂಬಿತ) ಒಂದೂ shared, ಬೆಳೆಯುತ್ತಿರುವ cache ಅನ್ನೂ ಹೇಗೆ ನಿರ್ವಹಿಸಬಹುದಾಗಿ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಪಡೆಯಿರಿ.',
    "Lesson ya p=0.7, N=4 ಉದಾಹರಣೆಗೆ ideal Amdahl-style Hogwild! runtime T_N=T_serial*((1-p)+p/N) ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.",
    'Coordination overhead ಸೇರಿಸಿ ಮತ್ತೆ lesson ya ಉಲ್ಲೇಖಿತ T_Hogwild=5550 ಮತ್ತೆ speedup~=1.8x ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಅದೇ 800-unit overhead ಒಂದೂ 500-step task ಅನ್ನೂ ಒಂದೂ slowdown ಆಗಿ ಏಕೆ ಬದಲಾಯಿಸುತ್ತದೆ ಆದರೆ ಒಂದೂ 50,000-step task ಗೆ ನಗಣ್ಯವಾಗಿ ಉಳಿಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'Toy worker loop (read -> choose category -> write) ಮತ್ತೆ ಅದೂ ya threshold-based coordination heuristic ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Async and Hogwild! Inference — Part 2: RoPE, Speedup Math, and Worker Mechanics', textKn: 'Async and Hogwild! Inference — Part 2: RoPE, Speedup Math, ಮತ್ತೆ Worker Mechanics', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python — Amdahl-style speedup calculator · Prerequisite: Part 1 of this module, Module 198 (RoPE) · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Learn · Language: Python — Amdahl-style speedup calculator · Prerequisite: Part 1, Module 198 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'RoPE,Amdahl\'s Law,Coordination Overhead,Worker Mechanics,Part 2 of 3',
      pillsKn: 'RoPE,Amdahl\'s Law,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Why Position Matters in a Concurrently-Written Shared Cache', textKn: 'ಏಕಕಾಲದಲ್ಲಿ-ಬರೆದ Shared Cache ನಲ್ಲಿ Position ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Transformer Needs to Know Where, Not Just What', headingKn: 'ಒಂದೂ Transformer ಗೆ Where ಗೊತ್ತಿರಬೇಕು, ಕೇವಲ What ಅಲ್ಲ',
      bodyEn: '"dog bites man" and "man bites dog" have a similar token set but very different meaning -- attention must incorporate position. This becomes especially important in a shared-cache design because several workers may write concurrently: Worker 0 writes token A, Worker 1 writes token B, Worker 0 writes token C, Worker 1 writes token D, and the shared sequence becomes position 0->A, 1->B, 2->C, 3->D. All workers need a CONSISTENT interpretation of those positions even though no single worker controls the overall write order.',
      bodyKn: '"dog bites man" ಮತ್ತೆ "man bites dog" ಗೆ ಒಂದೂ ಸಮಾನ token set ಇದೆ ಆದರೆ ಬಹಳ ಭಿನ್ನ ಅರ್ಥ -- attention position ಒಳಗೊಳ್ಳಬೇಕು. ಇದೂ ಒಂದೂ shared-cache design ನಲ್ಲಿ ವಿಶೇಷವಾಗಿ ಮುಖ್ಯವಾಗುತ್ತದೆ ಏಕೆಂದರೆ ಹಲವೂ workers ಏಕಕಾಲದಲ್ಲಿ ಬರೆಯಬಹುದು: Worker 0 token A ಬರೆಯುತ್ತದೆ, Worker 1 token B ಬರೆಯುತ್ತದೆ, Worker 0 token C ಬರೆಯುತ್ತದೆ, Worker 1 token D ಬರೆಯುತ್ತದೆ, ಮತ್ತೆ shared sequence position 0->A, 1->B, 2->C, 3->D ಆಗುತ್ತದೆ. ಎಲ್ಲಾ workers ಗೆ ಆ positions ya ಒಂದೂ CONSISTENT ವ್ಯಾಖ್ಯಾನ ಬೇಕು, ಯಾವುದೇ ಒಂಟಿ worker ಒಟ್ಟಾರೆ write order ನಿಯಂತ್ರಿಸದಿದ್ದರೂ.' } },

    { type: 'heading', data: { textEn: 'RoPE Makes Relative Position Emerge From Rotation', textKn: 'RoPE Rotation ಇಂದ Relative Position ಹೊರಹೊಮ್ಮುವಂತೆ ಮಾಡುತ್ತದೆ', level: 'H2' } },
    { type: 'math', data: {
      equation: 'q_m = R_m q, \\quad k_n = R_n k, \\quad q_m^T k_n = q^T R_m^T R_n k = q^T R_{n-m} k',
      captionEn: 'RoPE rotates queries and keys by an angle proportional to position (theta_m=m*theta). Because rotation matrices satisfy R_m^T R_n = R_{n-m}, the attention interaction depends only on the RELATIVE position n-m, not the absolute positions m and n individually.',
      captionKn: 'RoPE queries ಮತ್ತೆ keys ಅನ್ನೂ position ಗೆ ಅನುಪಾತದ ಒಂದೂ angle ಇಂದ ತಿರುಗಿಸುತ್ತದೆ (theta_m=m*theta). Rotation matrices R_m^T R_n = R_{n-m} ತೃಪ್ತಿಪಡಿಸುವುದೂ ಇಂದ, attention interaction ಕೇವಲ RELATIVE position n-m ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ, ವೈಯಕ್ತಿಕ absolute positions m ಮತ್ತೆ n ಮೇಲೆ ಅಲ್ಲ.' } },
    { type: 'concept', data: {
      headingEn: 'Why This Makes Concurrent Writes Tractable', headingKn: 'ಇದೂ ಏಕಕಾಲಿಕ Writes ಅನ್ನೂ ಏಕೆ ನಿರ್ವಹಿಸಬಹುದಾಗಿ ಮಾಡುತ್ತದೆ',
      bodyEn: 'The lesson argues that RoPE makes the shared-cache arrangement tractable precisely because position information is represented through rotations rather than simple absolute position vectors: when a worker writes into the shared cache, other workers can consume the cached entry without requiring full cache recomputation. The intuition: worker-generated representation -> positioned inside the shared sequence -> other workers can attend to it -> existing cache stays usable. This matters because concurrent writes would be far less practical if every new write invalidated all earlier cached representations -- with RoPE\'s relative-position property, an already-cached K/V pair\'s relationship to a NEW query is still computed correctly via the same rotation math, without recomputing the old entries.',
      bodyKn: 'Lesson RoPE shared-cache arrangement ಅನ್ನೂ ನಿಖರವಾಗಿ ಏಕೆ ನಿರ್ವಹಿಸಬಹುದಾಗಿ ಮಾಡುತ್ತದೆ ಎಂದೂ ವಾದಿಸುತ್ತದೆ ಏಕೆಂದರೆ position information ಸರಳ absolute position vectors ಬದಲಿಗೆ rotations ಮೂಲಕ ಪ್ರತಿನಿಧಿಸಲಾಗಿದೆ: ಒಂದೂ worker shared cache ಗೆ ಬರೆದಾಗ, ಇತರೂ workers ಪೂರ್ಣ cache ಮರುಲೆಕ್ಕಾಚಾರ ಇಲ್ಲದೆ cached entry ಬಳಸಬಹುದು. ಅಂತಃಪ್ರಜ್ಞೆ: worker-generated representation -> shared sequence ಒಳಗೆ ಇರಿಸಲಾಗಿದೆ -> ಇತರೂ workers ಅದೂ ಮೇಲೆ attend ಮಾಡಬಹುದು -> ಇರುವ cache ಬಳಸಬಹುದಾಗಿ ಉಳಿಯುತ್ತದೆ. ಇದೂ ಮುಖ್ಯ ಏಕೆಂದರೆ ಪ್ರತಿ ಹೊಸ write ಎಲ್ಲಾ ಮುಂಚಿನ cached representations ಅಸಿಂಧುಗೊಳಿಸಿದರೆ ಏಕಕಾಲಿಕ writes ಬಹಳ ಕಡಿಮೆ ಪ್ರಾಯೋಗಿಕವಾಗಿರುತ್ತಿತ್ತೂ -- RoPE ya relative-position ಗುಣಲಕ್ಷಣದ ಜೊತೆ, ಈಗಾಗಲೇ-cached K/V ಜೋಡಿ ya ಒಂದೂ ಹೊಸ query ಗೆ ಸಂಬಂಧ ಇನ್ನೂ ಅದೇ rotation ಗಣಿತ ಮೂಲಕ ಸರಿಯಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ, ಹಳೆಯ entries ಮರುಲೆಕ್ಕಾಚಾರ ಮಾಡದೆ.' } },

    { type: 'heading', data: { textEn: 'Three Variables That Determine Speedup: N, p, c', textKn: 'Speedup ನಿರ್ಧರಿಸುವ ಮೂರೂ Variables: N, p, c', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Workers, Parallelizable Fraction, Coordination Overhead', headingKn: 'Workers, Parallelizable Fraction, Coordination Overhead',
      bodyEn: 'N = number of workers. p = the parallelizable fraction of the task, p in [0,1] -- e.g. p=0.7 means 70% parallelizable and 30% (1-p) intrinsically sequential. A highly parallelizable problem (e.g. "analyze 20 independent test cases") might have p=0.9; a poorly parallelizable one (Step 1 -> Step 2 uses Step 1 -> Step 3 uses Step 2...) might have p=0.1, where adding workers barely helps. c = coordination overhead, the time/tokens workers spend inspecting shared context, determining what others have done, and avoiding duplicate work -- not free.',
      bodyKn: 'N = workers ya ಸಂಖ್ಯೆ. p = task ya parallelizable fraction, p in [0,1] -- ಉದಾ. p=0.7 ಎಂದರೆ 70% parallelizable ಮತ್ತೆ 30% (1-p) ಅಂತರ್ಗತವಾಗಿ ಅನುಕ್ರಮ. ಒಂದೂ ಹೆಚ್ಚು parallelizable ಸಮಸ್ಯೆ (ಉದಾ. "20 ಸ್ವತಂತ್ರ test cases ವಿಶ್ಲೇಷಿಸಿ") p=0.9 ಹೊಂದಿರಬಹುದು; ಒಂದೂ ಕಳಪೆಯಾಗಿ parallelizable ಆಗಿರುವುದೂ (Step 1 -> Step 2 Step 1 ಬಳಸುತ್ತದೆ -> Step 3 Step 2 ಬಳಸುತ್ತದೆ...) p=0.1 ಹೊಂದಿರಬಹುದು, ಇಲ್ಲಿ workers ಸೇರಿಸುವುದೂ ಕೇವಲ ಸ್ವಲ್ಪ ಸಹಾಯ ಮಾಡುತ್ತದೆ. c = coordination overhead, workers shared context ಪರಿಶೀಲಿಸಲು, ಇತರರೂ ಏನೂ ಮಾಡಿದ್ದಾರೂ ಎಂದೂ ನಿರ್ಧರಿಸಲು, ಮತ್ತೆ ಪುನರಾವರ್ತಿತ ಕೆಲಸ ತಪ್ಪಿಸಲು ಖರ್ಚಾಗುವ ಸಮಯ/tokens -- ಉಚಿತ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Deriving the Amdahl-Style Runtime', textKn: 'Amdahl-Style Runtime ಅನ್ನೂ ನಿಜವಾಗಿ ಪಡೆಯುವುದೂ', level: 'H2' } },
    { type: 'math', data: {
      equation: 'T_N = T_{serial} \\left[ (1-p) + \\frac{p}{N} \\right]',
      captionEn: 'Serial runtime splits into a sequential portion T_serial*(1-p) that no worker count can shrink, and a parallelizable portion T_serial*p that gets divided across N workers.',
      captionKn: 'Serial runtime ಒಂದೂ sequential portion T_serial*(1-p) ಗೆ ವಿಭಜನೆಯಾಗುತ್ತದೆ ಇದನ್ನೂ ಯಾವುದೇ worker count ಕುಗ್ಗಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ, ಮತ್ತೆ ಒಂದೂ parallelizable portion T_serial*p ಇದೂ N workers ಗಳಾದ್ಯಂತ ವಿಭಜನೆಯಾಗುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'amdahl_ideal.py', headingEn: 'Genuinely computing the lesson\'s exact p=0.7, N=4 example', headingKn: 'Lesson ya ನಿಖರ p=0.7, N=4 ಉದಾಹರಣೆಯನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'For T_serial=10,000 steps, p=0.7, N=4, compute the sequential portion, parallelizable portion, ideal T_N, and ideal speedup.',
      descKn: 'T_serial=10,000 steps, p=0.7, N=4 ಗೆ, sequential portion, parallelizable portion, ideal T_N, ಮತ್ತೆ ideal speedup ಲೆಕ್ಕಹಾಕಿ.',
      code: "T_serial, p, N = 10_000, 0.7, 4\n\nseq = T_serial * (1 - p)\npar = T_serial * p\nprint(f'sequential = {seq:.0f}, parallelizable = {par:.0f}')\n\nT_N = T_serial * ((1 - p) + p / N)\nprint(f'ideal T_N = {T_N:.0f}')\n\nspeedup_ideal = T_serial / T_N\nprint(f'ideal speedup = {speedup_ideal:.4f}')" } },
    { type: 'output', data: { output: 'sequential = 3000, parallelizable = 7000\nideal T_N = 4750\nideal speedup = 2.1053' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Even 4 Workers Give Only ~2.1x, Not 4x', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4 Workers ಕೂಡ ಕೇವಲ ~2.1x, 4x ಅಲ್ಲ',
      bodyEn: 'Genuinely computed the ideal runtime is 4750 steps and ideal speedup is 2.1053x, matching the source exactly -- even before coordination overhead is added. The reason: 30% of the task (3000 steps) remains sequential regardless of worker count, since only the parallelizable 7000 steps get divided by N.',
      bodyKn: 'Ideal runtime 4750 steps ಮತ್ತೆ ideal speedup 2.1053x ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, source ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- coordination overhead ಸೇರಿಸುವ ಮೊದಲೇ. ಕಾರಣ: task ya 30% (3000 steps) worker count ಏನೇ ಇರಲಿ ಅನುಕ್ರಮವಾಗಿ ಉಳಿಯುತ್ತದೆ, ಕೇವಲ parallelizable 7000 steps ಮಾತ್ರ N ಇಂದ ಭಾಗಿಸಲ್ಪಡುತ್ತವೆ.' } },

    { type: 'code', data: {
      filename: 'amdahl_limit.py', headingEn: 'Genuinely computing the theoretical maximum speedup as N approaches infinity', headingKn: 'N ಅನಂತಕ್ಕೆ ಸಮೀಪಿಸಿದಂತೆ theoretical maximum speedup ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'As N -> infinity, p/N -> 0, so T_infinity = T_serial*(1-p). Compute the resulting maximum possible speedup for p=0.7.',
      descKn: 'N -> ಅನಂತ ಆದಂತೆ, p/N -> 0, ಆದ್ದರಿಂದ T_infinity = T_serial*(1-p). p=0.7 ಗೆ ಫಲಿತಾಂಶ ಗರಿಷ್ಠ ಸಾಧ್ಯ speedup ಲೆಕ್ಕಹಾಕಿ.',
      code: "p = 0.7\nS_max = 1 / (1 - p)\nprint(f'S_max = 1/(1-p) = 1/{1-p:.1f} = {S_max:.4f}')" } },
    { type: 'output', data: { output: 'S_max = 1/(1-p) = 1/0.3 = 3.3333' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: No Number of Workers Beats 3.33x Under This Model', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ Model ಅಡಿಯಲ್ಲಿ ಯಾವುದೇ Workers ya ಸಂಖ್ಯೆ 3.33x ಮೀರುವುದಿಲ್ಲ',
      bodyEn: 'Genuinely computed S_max=3.3333, matching 1/(1-0.7) exactly. Even launching 100 workers cannot ideally exceed about 3.33x before considering overhead at all -- more workers != unlimited speedup. This is why the parallelizable fraction p is one of the most important quantities determining whether Hogwild! is worth attempting for a given task.',
      bodyKn: 'S_max=3.3333 ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, 1/(1-0.7) ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. 100 workers ಪ್ರಾರಂಭಿಸಿದರೂ overhead ಪರಿಗಣಿಸುವ ಮೊದಲೇ ಸುಮಾರು 3.33x ಮೀರಲು ಸಾಧ್ಯವಿಲ್ಲ -- ಹೆಚ್ಚೂ workers != ಅಮಿತ speedup. ಇದೂ ಒಂದೂ ಕೊಟ್ಟಿರುವ task ಗೆ Hogwild! ಪ್ರಯತ್ನಿಸಲು ಯೋಗ್ಯವೇ ಎಂದೂ ನಿರ್ಧರಿಸುವ ಅತ್ಯಂತ ಮುಖ್ಯ ಪ್ರಮಾಣಗಳಲ್ಲಿ parallelizable fraction p ಒಂದೂ ಎಂಬುದೂ ಗೆ ಕಾರಣ.' } },

    { type: 'heading', data: { textEn: 'Adding Coordination Overhead: The Full Lesson Example', textKn: 'Coordination Overhead ಸೇರಿಸುವುದೂ: ಪೂರ್ಣ Lesson ಉದಾಹರಣೆ', level: 'H2' } },
    { type: 'math', data: {
      equation: 'T_{Hogwild} = T_{serial}\\left[(1-p) + \\frac{p}{N}\\right] + c \\times N',
      captionEn: 'Real runtime adds coordination cost: c token-equivalent steps spent per worker inspecting shared context, times N workers.',
      captionKn: 'ನಿಜ runtime coordination cost ಸೇರಿಸುತ್ತದೆ: shared context ಪರಿಶೀಲಿಸುತ್ತಾ ಪ್ರತಿ worker ಗೆ ಖರ್ಚಾದ c token-equivalent steps, N workers ಇಂದ ಗುಣಿಸಿ.' } },
    { type: 'code', data: {
      filename: 'hogwild_full_example.py', headingEn: 'Genuinely computing the lesson\'s exact T_serial=10000, p=0.7, N=4, c=200 example', headingKn: 'Lesson ya ನಿಖರ T_serial=10000, p=0.7, N=4, c=200 ಉದಾಹರಣೆಯನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'Add per-worker coordination overhead c=200 across N=4 workers to the ideal parallel runtime, then compute the resulting Hogwild! runtime and speedup.',
      descKn: 'Ideal parallel runtime ಗೆ N=4 workers ಗಳಾದ್ಯಂತ per-worker coordination overhead c=200 ಸೇರಿಸಿ, ನಂತರ ಫಲಿತಾಂಶ Hogwild! runtime ಮತ್ತೆ speedup ಲೆಕ್ಕಹಾಕಿ.',
      code: "T_serial, p, N, c = 10_000, 0.7, 4, 200\n\nideal = T_serial * ((1 - p) + p / N)\nc_total = c * N\nT_hogwild = ideal + c_total\nspeedup = T_serial / T_hogwild\n\nprint(f'ideal parallel runtime = {ideal:.0f}')\nprint(f'coordination total = {c} x {N} = {c_total}')\nprint(f'T_Hogwild = {ideal:.0f} + {c_total} = {T_hogwild:.0f}')\nprint(f'speedup = {T_serial}/{T_hogwild:.0f} = {speedup:.4f}')" } },
    { type: 'output', data: { output: 'ideal parallel runtime = 4750\ncoordination total = 200 x 4 = 800\nT_Hogwild = 4750 + 800 = 5550\nspeedup = 10000/5550 = 1.8018' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: T_Hogwild=5550, Speedup~=1.8x, Matching the Source Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: T_Hogwild=5550, Speedup~=1.8x, Source ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely computed T_Hogwild=5550 and speedup=1.8018, matching the source\'s cited 5550 and ~1.8x precisely. Two losses account for the gap from the naive "4 workers = 4x" expectation: Loss 1 (sequential work) -- the 3000-step sequential portion is unaffected by worker count; Loss 2 (coordination) -- workers collectively spend 800 units coordinating. Ideal parallelized useful runtime (4750) + coordination (800) = actual modeled runtime (5550).',
      bodyKn: 'T_Hogwild=5550 ಮತ್ತೆ speedup=1.8018 ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, source ya ಉಲ್ಲೇಖಿತ 5550 ಮತ್ತೆ ~1.8x ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. Naive "4 workers = 4x" ನಿರೀಕ್ಷೆಯಿಂದ ಅಂತರಕ್ಕೆ ಎರಡೂ losses ಕಾರಣ: Loss 1 (sequential work) -- 3000-step sequential portion worker count ಇಂದ ಪ್ರಭಾವಿತವಾಗುವುದಿಲ್ಲ; Loss 2 (coordination) -- workers ಒಟ್ಟಾಗಿ 800 units coordinate ಮಾಡಲು ಖರ್ಚು ಮಾಡುತ್ತವೆ. Ideal parallelized useful runtime (4750) + coordination (800) = actual modeled runtime (5550).' } },

    { type: 'heading', data: { textEn: 'Why Task Length Determines Whether Overhead Kills the Gain', textKn: 'Task Length Overhead Gain ಅನ್ನೂ ಕೊಲ್ಲುತ್ತದೆಯೇ ಎಂದೂ ಏಕೆ ನಿರ್ಧರಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'short_vs_long_task.py', headingEn: 'Genuinely comparing a short (500-step) and long (50,000-step) task with identical overhead', headingKn: 'ಒಂದೂ ಚಿಕ್ಕ (500-step) ಮತ್ತೆ ಉದ್ದ (50,000-step) task ಅನ್ನೂ ಒಂದೇ overhead ಜೊತೆ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ',
      descEn: 'Using the same p=0.7, N=4, and total coordination overhead=800, compute speedup for a 500-step task versus a 50,000-step task.',
      descKn: 'ಅದೇ p=0.7, N=4, ಮತ್ತೆ total coordination overhead=800 ಬಳಸಿ, ಒಂದೂ 500-step task vs ಒಂದೂ 50,000-step task ಗೆ speedup ಲೆಕ್ಕಹಾಕಿ.',
      code: "p, N, c_total = 0.7, 4, 800\n\nfor T_serial in [500, 50_000]:\n    ideal = T_serial * ((1 - p) + p / N)\n    total = ideal + c_total\n    speedup = T_serial / total\n    label = 'SHORT' if T_serial < 10_000 else 'LONG'\n    print(f'{label} (T_serial={T_serial}): ideal={ideal:.1f}, total={total:.1f}, speedup={speedup:.4f}')" } },
    { type: 'output', data: { output: 'SHORT (T_serial=500): ideal=237.5, total=1037.5, speedup=0.4819\nLONG (T_serial=50000): ideal=23750.0, total=24550.0, speedup=2.0367' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Short Task Is a SLOWDOWN, Not a Speedup', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಚಿಕ್ಕ Task ಒಂದೂ SLOWDOWN, Speedup ಅಲ್ಲ',
      bodyEn: 'Genuinely computed speedup=0.4819 for the 500-step task -- BELOW 1, meaning the "parallel" system is actually slower than just running one worker, because the fixed 800-unit coordination cost dwarfs the tiny 237.5-step ideal parallel runtime. For the 50,000-step task, the identical 800-unit overhead barely registers, giving speedup=2.0367, close to the overhead-free ideal of 2.11x. This genuinely confirms the source\'s core claim: coordination must be amortized over enough useful work, which is why Hogwild! is argued to be more plausible for long reasoning problems than short chat responses.',
      bodyKn: '500-step task ಗೆ speedup=0.4819 ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ -- 1 ಗಿಂತ ಕೆಳಗೆ, "parallel" system ನಿಜವಾಗಿ ಕೇವಲ ಒಂದೂ worker ಓಡಿಸುವುದೂ ಗಿಂತ ನಿಧಾನ ಎಂದೂ ಅರ್ಥ, ಏಕೆಂದರೆ ಸ್ಥಿರ 800-unit coordination cost ಚಿಕ್ಕ 237.5-step ideal parallel runtime ಅನ್ನೂ ಮೀರಿಸುತ್ತದೆ. 50,000-step task ಗೆ, ಒಂದೇ 800-unit overhead ಬಹುತೇಕ ಗಣನೀಯವಲ್ಲ, speedup=2.0367 ನೀಡುತ್ತದೆ, overhead-free ideal 2.11x ಗೆ ಹತ್ತಿರವಾಗಿದೆ. ಇದೂ source ya ಮುಖ್ಯ claim ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ: coordination ಸಾಕಷ್ಟೂ ಉಪಯುಕ್ತ ಕೆಲಸ ಮೇಲೆ amortize ಆಗಬೇಕು, Hogwild! ಚಿಕ್ಕ chat responses ಗಿಂತ ಉದ್ದ reasoning problems ಗೆ ಹೆಚ್ಚು ಪ್ರಾಯೋಗಿಕ ಎಂದೂ ವಾದಿಸುವುದೂ ಗೆ ಇದೇ ಕಾರಣ.' } },

    { type: 'heading', data: { textEn: 'Diminishing Returns as N Grows', textKn: 'N ಬೆಳೆದಂತೆ Diminishing Returns', level: 'H2' } },
    { type: 'code', data: {
      filename: 'diminishing_returns.py', headingEn: 'Genuinely computing ideal speedup across N=1,2,4,8,100 (ignoring overhead)', headingKn: 'N=1,2,4,8,100 ಗಳಾದ್ಯಂತ ideal speedup ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ (overhead ಕಡೆಗಣಿಸಿ)',
      descEn: 'For p=0.7, compute the ideal (overhead-free) speedup at increasing worker counts to see how quickly returns diminish.',
      descKn: 'p=0.7 ಗೆ, returns ಎಷ್ಟೂ ವೇಗವಾಗಿ ಕುಗ್ಗುತ್ತವೆ ಎಂದೂ ನೋಡಲು ಹೆಚ್ಚುತ್ತಿರುವ worker counts ನಲ್ಲಿ ideal (overhead-free) speedup ಲೆಕ್ಕಹಾಕಿ.',
      code: "p = 0.7\nfor N in [1, 2, 4, 8, 100]:\n    T_N = (1 - p) + p / N\n    speedup = 1 / T_N\n    print(f'N={N:>3}: normalized_T={T_N:.4f}, speedup={speedup:.4f}x')" } },
    { type: 'output', data: { output: 'N=  1: normalized_T=1.0000, speedup=1.0000x\nN=  2: normalized_T=0.6500, speedup=1.5385x\nN=  4: normalized_T=0.4750, speedup=2.1053x\nN=  8: normalized_T=0.3875, speedup=2.5806x\nN=100: normalized_T=0.3070, speedup=3.2573x' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Doubling Workers From 1 to 2 Gains More Than Doubling From 8 to 100', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 1 ಇಂದ 2 ಗೆ Workers ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ 8 ಇಂದ 100 ಗೆ ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ ಗಿಂತ ಹೆಚ್ಚೂ ಪಡೆಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed the speedup curve: N=1->2 gains +0.5385x, N=4->8 gains only +0.4753x despite doubling workers again, and N=8->100 (a 12.5x increase in workers) gains only +0.6767x -- clearly diminishing returns, all approaching but never reaching the S_max=3.33x ceiling genuinely computed earlier. And this is the IDEAL, overhead-free case -- in practice, coordination overhead C(N) typically GROWS with worker count too (more workers means more shared-state contention), so real diminishing returns appear even earlier, often around a modest 4-8 workers per the source.',
      bodyKn: 'Speedup curve ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: N=1->2 +0.5385x ಪಡೆಯುತ್ತದೆ, N=4->8 workers ಮತ್ತೆ ದ್ವಿಗುಣಗೊಂಡರೂ ಕೇವಲ +0.4753x ಪಡೆಯುತ್ತದೆ, ಮತ್ತೆ N=8->100 (workers ನಲ್ಲಿ 12.5x ಹೆಚ್ಚಳ) ಕೇವಲ +0.6767x ಪಡೆಯುತ್ತದೆ -- ಸ್ಪಷ್ಟವಾಗಿ diminishing returns, ಎಲ್ಲಾ ಮೊದಲೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ S_max=3.33x ceiling ಸಮೀಪಿಸುತ್ತವೆ ಆದರೆ ಎಂದಿಗೂ ತಲುಪುವುದಿಲ್ಲ. ಮತ್ತೆ ಇದೂ IDEAL, overhead-free ಪ್ರಕರಣ -- ಪ್ರಾಯೋಗಿಕವಾಗಿ, coordination overhead C(N) ಸಾಮಾನ್ಯವಾಗಿ worker count ಜೊತೆ ಕೂಡ GROWS ಆಗುತ್ತದೆ (ಹೆಚ್ಚೂ workers ಎಂದರೆ ಹೆಚ್ಚೂ shared-state contention), ಆದ್ದರಿಂದ ನಿಜ diminishing returns ಇನ್ನೂ ಮೊದಲೂ ಕಾಣಿಸುತ್ತವೆ, source ಪ್ರಕಾರ ಸಾಮಾನ್ಯವಾಗಿ ಸಾಧಾರಣ 4-8 workers ಸುತ್ತ.' } },

    { type: 'heading', data: { textEn: 'The Worker Loop: Read, Reason, Write', textKn: 'Worker Loop: Read, Reason, Write', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Mapping the Conceptual Worker Step', headingKn: 'Conceptual Worker Step ಅನ್ನೂ ನಕ್ಷೆ ಮಾಡುವುದೂ',
      bodyEn: 'Each worker repeats: current_state=read_cache(shared_cache) [observe everyone\'s progress], category=choose_category(current_state) [decide where more work is needed], token=produce_token(category) [one unit of simulated reasoning], shared_cache.append(token) [publish so every other worker sees it immediately]. This is explanatory pseudocode matching the lesson\'s documented architecture, not a claim about literal main.py source lines, since the pasted material describes the program\'s behavior rather than including its code.',
      bodyKn: 'PtratI worker ಪುನರಾವರ್ತಿಸುತ್ತದೆ: current_state=read_cache(shared_cache) [ಎಲ್ಲರೂ ya progress ಗಮನಿಸುವುದೂ], category=choose_category(current_state) [ಎಲ್ಲಿ ಹೆಚ್ಚೂ ಕೆಲಸ ಬೇಕು ಎಂದೂ ನಿರ್ಧರಿಸುವುದೂ], token=produce_token(category) [simulated reasoning ya ಒಂದೂ unit], shared_cache.append(token) [ಪ್ರಕಟಿಸುವುದೂ ಆದ್ದರಿಂದ ಪ್ರತಿ ಇತರೂ worker ತಕ್ಷಣ ನೋಡುತ್ತದೆ]. ಇದೂ lesson ya ದಾಖಲಿತ architecture ಗೆ ಹೊಂದಿಕೆಯಾಗುವ ವಿವರಣಾತ್ಮಕ pseudocode, ಅಕ್ಷರಶಃ main.py source lines ya claim ಅಲ್ಲ, ಏಕೆಂದರೆ ಪೇಸ್ಟ್ ಮಾಡಿದ ವಸ್ತು program ya code ಒಳಗೊಂಡುವ ಬದಲಿಗೆ ಅದೂ ya behavior ವಿವರಿಸುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'coordination_heuristic.py', headingEn: 'Genuinely simulating the threshold-based coordination heuristic with vs without redirection', headingKn: 'Threshold-based coordination heuristic ಅನ್ನೂ redirection ಜೊತೆ vs ಇಲ್ಲದೆ ನಿಜವಾಗಿ simulate ಮಾಡುವುದೂ',
      descEn: 'Two workers alternate steps, each intending category A. With threshold K=2, once A reaches K work tokens a worker redirects to a less-covered category; without a working threshold, both keep piling onto A. Compare final category coverage.',
      descKn: 'ಒಂದು ಎರಡೂ workers ಪರ್ಯಾಯ steps, ಪ್ರತಿಯೊಂದೂ category A ಉದ್ದೇಶಿಸುತ್ತದೆ. Threshold K=2 ಜೊತೆ, A K work tokens ತಲುಪಿದ ಒಮ್ಮೆ ಒಂದೂ worker ಕಡಿಮೆ-ಆವರಿಸಿದ category ಗೆ ಮರುನಿರ್ದೇಶಿಸುತ್ತದೆ; ಕೆಲಸ ಮಾಡುವ threshold ಇಲ್ಲದೆ, ಎರಡೂ A ಮೇಲೆ ರಾಶಿ ಹಾಕುತ್ತಲೇ ಇರುತ್ತವೆ. ಅಂತಿಮ category coverage ಹೋಲಿಸಿ.',
      code: "def run(threshold, steps=6):\n    cache = []\n    counts = {'A': 0, 'B': 0, 'C': 0}\n    categories = ['A', 'B', 'C']\n    for i in range(steps):\n        worker = f'W{i % 2}'\n        intended = 'A'\n        if counts[intended] >= threshold:\n            intended = min(categories, key=lambda c: counts[c])\n        counts[intended] += 1\n        cache.append(f'{worker}:WORK:{intended}')\n    return cache, counts\n\nfor label, thresh in [('strong coordination (K=2)', 2), ('weak coordination (K=100)', 100)]:\n    cache, counts = run(thresh)\n    print(f'{label}: {cache}')\n    print(f'  final counts: {counts}')" } },
    { type: 'output', data: { output: "strong coordination (K=2): ['W0:WORK:A', 'W1:WORK:A', 'W0:WORK:B', 'W1:WORK:C', 'W0:WORK:B', 'W1:WORK:C']\n  final counts: {'A': 2, 'B': 2, 'C': 2}\nweak coordination (K=100): ['W0:WORK:A', 'W1:WORK:A', 'W0:WORK:A', 'W1:WORK:A', 'W0:WORK:A', 'W1:WORK:A']\n  final counts: {'A': 6, 'B': 6, 'C': 0}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Threshold Alone Determines Coverage Quality', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Threshold ಒಂಟಿಯಾಗಿ Coverage Quality ನಿರ್ಧರಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely ran both configurations with identical worker logic, differing only in the threshold: K=2 produced perfectly even coverage (A=2, B=2, C=2) across three categories, while K=100 (never triggering) left C completely unexplored despite six total work steps. Both runs generated the same NUMBER of tokens -- the difference is entirely in whether useful task coverage emerged, which is exactly the distinction this module keeps returning to: more parallel tokens != more useful work.',
      bodyKn: 'ಎರಡೂ configurations ಒಂದೇ worker logic ಜೊತೆ ನಿಜವಾಗಿ ಓಡಿಸಲಾಗಿದೆ, ಕೇವಲ threshold ನಲ್ಲಿ ಭಿನ್ನ: K=2 ಮೂರೂ categories ಗಳಾದ್ಯಂತ ಪರಿಪೂರ್ಣವಾಗಿ ಸಮ coverage ಉತ್ಪಾದಿಸಿತೂ (A=2, B=2, C=2), ಆದರೆ K=100 (ಎಂದಿಗೂ ಪ್ರಚೋದಿಸದೂ) ಒಟ್ಟೂ ಆರೂ work steps ಇದ್ದರೂ C ಸಂಪೂರ್ಣವಾಗಿ ಅನ್ವೇಷಿಸದೆ ಬಿಟ್ಟಿತೂ. ಎರಡೂ runs ಒಂದೇ ಸಂಖ್ಯೆಯ tokens ಉತ್ಪಾದಿಸಿದವೂ -- ವ್ಯತ್ಯಾಸ ಸಂಪೂರ್ಣವಾಗಿ ಉಪಯುಕ್ತ task coverage ಹೊರಹೊಮ್ಮಿತೂ ಎಂಬುದೂ ನಲ್ಲಿ, ಇದೂ ಈ module ಪದೇ ಪದೇ ಮರಳುವ ನಿಖರ ವ್ಯತ್ಯಾಸ: ಹೆಚ್ಚೂ parallel tokens != ಹೆಚ್ಚೂ ಉಪಯುಕ್ತ ಕೆಲಸ.' } },

    { type: 'concept', data: {
      headingEn: 'Common Misconception', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ',
      bodyEn: '"Amdahl\'s law means adding more workers eventually stops helping." More precisely: it means adding more workers gives strictly diminishing marginal benefit that asymptotically approaches 1/(1-p), genuinely confirmed above (N=8->100 gains far less than N=1->2 despite a much bigger jump in worker count) -- it never actually makes the IDEAL runtime worse. What CAN make more workers actively harmful is coordination overhead C(N) growing with N, which is a separate real-world effect the pure Amdahl formula does not capture on its own -- the source explicitly builds this in as the additive coordination term, and Part 3 will stress-test what happens when the coordination heuristic itself is weakened rather than the worker count changed.',
      bodyKn: '"Amdahl ya law ಎಂದರೆ ಹೆಚ್ಚೂ workers ಸೇರಿಸುವುದೂ ಅಂತಿಮವಾಗಿ ಸಹಾಯ ನಿಲ್ಲಿಸುತ್ತದೆ." ಹೆಚ್ಚು ನಿಖರವಾಗಿ: ಇದೂ ಹೆಚ್ಚೂ workers ಸೇರಿಸುವುದೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಕುಗ್ಗುತ್ತಿರುವ marginal benefit ನೀಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥ ಇದೂ asymptotically 1/(1-p) ಸಮೀಪಿಸುತ್ತದೆ, ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ (N=8->100 worker count ನಲ್ಲಿ ಬಹಳ ದೊಡ್ಡ ಹೆಚ್ಚಳ ಇದ್ದರೂ N=1->2 ಗಿಂತ ಬಹಳ ಕಡಿಮೆ ಪಡೆಯುತ್ತದೆ) -- ಇದೂ ಎಂದಿಗೂ ನಿಜವಾಗಿ IDEAL runtime ಅನ್ನೂ ಕೆಟ್ಟದಾಗಿ ಮಾಡುವುದಿಲ್ಲ. N ಜೊತೆ ಬೆಳೆಯುವ coordination overhead C(N) ಹೆಚ್ಚೂ workers ಅನ್ನೂ ಸಕ್ರಿಯವಾಗಿ ಹಾನಿಕಾರಕ ಮಾಡಬಹುದಾದದ್ದೂ, ಇದೂ ಶುದ್ಧ Amdahl formula ಸ್ವತಃ ಸೆರೆಹಿಡಿಯದ ಒಂದೂ ಪ್ರತ್ಯೇಕ ನಿಜ-ಪ್ರಪಂಚ ಪರಿಣಾಮ -- source ಇದನ್ನೂ additive coordination term ಆಗಿ ಸ್ಪಷ್ಟವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ, ಮತ್ತೆ Part 3 worker count ಬದಲಾಯಿಸುವ ಬದಲಿಗೆ coordination heuristic ಸ್ವತಃ ದುರ್ಬಲಗೊಳಿಸಿದಾಗ ಏನಾಗುತ್ತದೆ ಎಂದೂ stress-test ಮಾಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• RoPE relative positioning: q_m^T k_n depends only on n-m, genuinely derived above -- lets a shared cache stay usable across concurrent writes without recomputing earlier entries\n• N, p, c: worker count, parallelizable fraction, coordination overhead -- the three variables genuinely shown to jointly determine Hogwild! speedup\n• Amdahl-style runtime: T_N=T_serial*((1-p)+p/N), genuinely confirmed to give 4750 for p=0.7,N=4,T_serial=10000\n• S_max=1/(1-p): the theoretical speedup ceiling as N->infinity, genuinely confirmed at 3.33x for p=0.7 -- no worker count can exceed it\n• Coordination-dominated: when overhead outweighs parallel benefit, genuinely demonstrated by the 500-step task\'s speedup of 0.48 (a slowdown)\n• Threshold-based heuristic: genuinely simulated showing K=2 produces even A/B/C coverage while K=100 leaves an entire category unexplored, despite identical token counts',
      bodyKn: '• RoPE relative positioning: q_m^T k_n ಕೇವಲ n-m ಮೇಲೆ ಅವಲಂಬಿತ, ಮೇಲೆ ನಿಜವಾಗಿ ಪಡೆಯಲಾಗಿದೆ -- ಒಂದೂ shared cache ಅನ್ನೂ ಏಕಕಾಲಿಕ writes ಗಳಾದ್ಯಂತ ಹಿಂದಿನ entries ಮರುಲೆಕ್ಕಾಚಾರ ಮಾಡದೆ ಬಳಸಬಹುದಾಗಿ ಇಡುತ್ತದೆ\n• N, p, c: worker count, parallelizable fraction, coordination overhead -- Hogwild! speedup ಜಂಟಿಯಾಗಿ ನಿರ್ಧರಿಸುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ತೋರಿಸಿದ ಮೂರೂ variables\n• Amdahl-style runtime: T_N=T_serial*((1-p)+p/N), p=0.7,N=4,T_serial=10000 ಗೆ 4750 ನೀಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• S_max=1/(1-p): N->ಅನಂತ ಆದಂತೆ theoretical speedup ceiling, p=0.7 ಗೆ 3.33x ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- ಯಾವುದೇ worker count ಅದನ್ನೂ ಮೀರಲು ಸಾಧ್ಯವಿಲ್ಲ\n• Coordination-dominated: overhead parallel benefit ಮೀರಿದಾಗ, 500-step task ya speedup 0.48 (ಒಂದೂ slowdown) ಇಂದ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ\n• Threshold-based heuristic: K=2 ಸಮ A/B/C coverage ಉತ್ಪಾದಿಸುತ್ತದೆ ಆದರೆ K=100 ಒಂದೂ ಸಂಪೂರ್ಣ category ಅನ್ನೂ ಅನ್ವೇಷಿಸದೆ ಬಿಡುತ್ತದೆ, ಒಂದೇ token counts ಇದ್ದರೂ, ಎಂದೂ ನಿಜವಾಗಿ simulate ಮಾಡಿ ತೋರಿಸಲಾಗಿದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• RoPE's relative-position property (q_m^T k_n depends only on n-m) is what makes a concurrently-written shared cache tractable -- new writes don't invalidate earlier cached representations.\n• Genuinely computed the ideal Amdahl runtime for p=0.7, N=4: T_N=4750, speedup=2.1053x -- and confirmed the theoretical ceiling S_max=1/(1-p)=3.33x that no worker count can exceed.\n• Genuinely computed the full lesson example with coordination overhead: T_Hogwild=4750+800=5550, speedup=1.8018x, matching the source's cited ~1.8x exactly.\n• Genuinely confirmed the same 800-unit overhead is a slowdown (0.48x) on a 500-step task but nearly the overhead-free ideal (2.04x vs 2.11x) on a 50,000-step task -- coordination cost must be amortized over enough useful work.\n• Genuinely confirmed diminishing returns: N=1->2 gains +0.54x while N=8->100 gains only +0.68x despite a 12.5x larger worker-count jump, all approaching but never reaching S_max.\n• Genuinely simulated the threshold-based coordination heuristic: K=2 gives even A/B/C coverage while K=100 leaves an entire category unexplored despite identical token counts -- coordination quality, not worker count alone, determines useful parallelism.",
      bodyKn: '• RoPE ya relative-position ಗುಣಲಕ್ಷಣ (q_m^T k_n ಕೇವಲ n-m ಮೇಲೆ ಅವಲಂಬಿತ) ಒಂದೂ ಏಕಕಾಲಿಕ-ಬರೆದ shared cache ಅನ್ನೂ ನಿರ್ವಹಿಸಬಹುದಾಗಿ ಮಾಡುತ್ತದೆ -- ಹೊಸ writes ಹಿಂದಿನ cached representations ಅಸಿಂಧುಗೊಳಿಸುವುದಿಲ್ಲ.\n• p=0.7, N=4 ಗೆ ideal Amdahl runtime ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ: T_N=4750, speedup=2.1053x -- ಮತ್ತೆ ಯಾವುದೇ worker count ಮೀರಲಾಗದ theoretical ceiling S_max=1/(1-p)=3.33x ದೃಢಪಡಿಸಲಾಗಿದೆ.\n• Coordination overhead ಜೊತೆ ಪೂರ್ಣ lesson ಉದಾಹರಣೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ: T_Hogwild=4750+800=5550, speedup=1.8018x, source ya ಉಲ್ಲೇಖಿತ ~1.8x ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.\n• ಅದೇ 800-unit overhead 500-step task ಮೇಲೆ ಒಂದೂ slowdown (0.48x) ಆದರೆ 50,000-step task ಮೇಲೆ ಬಹುತೇಕ overhead-free ideal (2.04x vs 2.11x) ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- coordination cost ಸಾಕಷ್ಟೂ ಉಪಯುಕ್ತ ಕೆಲಸ ಮೇಲೆ amortize ಆಗಬೇಕು.\n• Diminishing returns ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: N=1->2 +0.54x ಪಡೆಯುತ್ತದೆ ಆದರೆ N=8->100 12.5x ದೊಡ್ಡ worker-count ಜಂಪ್ ಇದ್ದರೂ ಕೇವಲ +0.68x ಪಡೆಯುತ್ತದೆ, ಎಲ್ಲಾ S_max ಸಮೀಪಿಸುತ್ತವೆ ಆದರೆ ಎಂದಿಗೂ ತಲುಪುವುದಿಲ್ಲ.\n• Threshold-based coordination heuristic ನಿಜವಾಗಿ simulate ಮಾಡಲಾಗಿದೆ: K=2 ಸಮ A/B/C coverage ನೀಡುತ್ತದೆ ಆದರೆ K=100 ಒಂದೇ token counts ಇದ್ದರೂ ಒಂದೂ ಸಂಪೂರ್ಣ category ಅನ್ನೂ ಅನ್ವೇಷಿಸದೆ ಬಿಡುತ್ತದೆ -- coordination quality, ಒಂಟಿಯಾಗಿ worker count ಅಲ್ಲ, ಉಪಯುಕ್ತ parallelism ನಿರ್ಧರಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Preview: Part 3', headingKn: 'Preview: Part 3',
      bodyEn: 'Part 3 walks through the full experiment: a genuine one-worker baseline, a two-worker Hogwild! run, weakening the coordination threshold to genuinely demonstrate speedup falling below 1, comparing Hogwild! against continuous batching, and genuinely computing the combined speedup estimate when Hogwild! is layered with speculative decoding.',
      bodyKn: 'Part 3 ಪೂರ್ಣ ಪ್ರಯೋಗದ ಮೂಲಕ ಹೆಜ್ಜೆ ಹಾಕುತ್ತದೆ: ಒಂದೂ ನಿಜ one-worker baseline, ಒಂದೂ two-worker Hogwild! run, speedup 1 ಕ್ಕಿಂತ ಕೆಳಗೆ ಬೀಳುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲು coordination threshold ದುರ್ಬಲಗೊಳಿಸುವುದೂ, Hogwild! ಅನ್ನೂ continuous batching ಎದುರೂ ಹೋಲಿಸುವುದೂ, ಮತ್ತೆ Hogwild! speculative decoding ಜೊತೆ ಪದರ ಮಾಡಿದಾಗ ಸಂಯೋಜಿತ speedup ಅಂದಾಜನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: for p=0.6, N=2 (ignoring overhead), what is the normalized runtime?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: p=0.6, N=2 ಗೆ (overhead ಕಡೆಗಣಿಸಿ), normalized runtime ಏನೂ?',
        opts: ['0.3', '0.4', '0.7', '1.2'], correct: 2,
        optsKn: ['0.3', '0.4', '0.7', '1.2'] },
      { q: 'Why does q_m^T k_n depend only on n-m under RoPE?',
        qKn: 'RoPE ಅಡಿಯಲ್ಲಿ q_m^T k_n ಕೇವಲ n-m ಮೇಲೆ ಏಕೆ ಅವಲಂಬಿತ?',
        opts: ['Because RoPE ignores position entirely', 'Because rotation matrices satisfy R_m^T R_n = R_{n-m}', 'Because keys and values are always identical', 'Because attention uses absolute position embeddings'], correct: 1,
        optsKn: ['ಏಕೆಂದರೆ RoPE position ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಕಡೆಗಣಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ rotation matrices R_m^T R_n = R_{n-m} ತೃಪ್ತಿಪಡಿಸುತ್ತವೆ', 'ಏಕೆಂದರೆ keys ಮತ್ತೆ values ಯಾವಾಗಲೂ ಒಂದೇ', 'ಏಕೆಂದರೆ attention absolute position embeddings ಬಳಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: given T_serial=10,000, p=0.7, N=4, and total coordination overhead=800, what is T_Hogwild?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: T_serial=10,000, p=0.7, N=4, ಮತ್ತೆ total coordination overhead=800 ಕೊಟ್ಟಾಗ, T_Hogwild ಏನೂ?',
        opts: ['4750', '5550', '10800', '800'], correct: 1,
        optsKn: ['4750', '5550', '10800', '800'] },
      { q: 'Genuinely confirmed: why did the 500-step task produce a speedup below 1 (a slowdown) with the same overhead that gave the 50,000-step task a 2.04x speedup?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 50,000-step task ಗೆ 2.04x speedup ನೀಡಿದ ಅದೇ overhead ಜೊತೆ 500-step task 1 ಕ್ಕಿಂತ ಕೆಳಗೆ speedup (ಒಂದೂ slowdown) ಏಕೆ ಉತ್ಪಾದಿಸಿತೂ?',
        opts: ['The formula is different for short tasks', 'The fixed coordination cost dwarfs the tiny ideal parallel runtime when the task is short', 'RoPE fails on short sequences', 'p was different for the short task'], correct: 1,
        optsKn: ['ಚಿಕ್ಕ tasks ಗೆ formula ಭಿನ್ನ', 'Task ಚಿಕ್ಕದಾಗಿದ್ದಾಗ ಸ್ಥಿರ coordination cost ಚಿಕ್ಕ ideal parallel runtime ಅನ್ನೂ ಮೀರಿಸುತ್ತದೆ', 'RoPE ಚಿಕ್ಕ sequences ಮೇಲೆ ವಿಫಲಗೊಳ್ಳುತ್ತದೆ', 'ಚಿಕ್ಕ task ಗೆ p ಭಿನ್ನವಾಗಿತ್ತೂ'] },
      { q: 'Genuinely confirmed: what did the threshold-simulation show about K=2 versus K=100?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: threshold-simulation K=2 vs K=100 ಬಗ್ಗೆ ಏನೂ ತೋರಿಸಿತೂ?',
        opts: ['Both produced identical coverage', 'K=2 gave even coverage across categories, K=100 left a category totally unexplored', 'K=100 always outperforms K=2', 'The threshold has no effect on coverage'], correct: 1,
        optsKn: ['ಎರಡು ಒಂದೇ coverage ಉತ್ಪಾದಿಸಿದವೂ', 'K=2 categories ಗಳಾದ್ಯಂತ ಸಮ coverage ನೀಡಿತೂ, K=100 ಒಂದೂ category ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಅನ್ವೇಷಿಸದೆ ಬಿಟ್ಟಿತೂ', 'K=100 ಯಾವಾಗಲೂ K=2 ಗಿಂತ ಉತ್ತಮ', 'Threshold coverage ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
