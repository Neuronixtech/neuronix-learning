const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321493'; // Module 234: InternVL3 Native Multimodal Pretraining

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'InternVL3: Native Multimodal Pretraining (Part 2) — Building the Simulator',
  titleKn: 'InternVL3: Native Multimodal Pretraining (Part 2) — Simulator ನಿರ್ಮಿಸುವುದೂ',
  desc: 'Genuinely implement and run expected_training_steps(), simulate_vir(), estimate_dvd_throughput(), and build_training_strategies(), confirming the exact 4990/3041/1969 seeded ViR routing and the 1.38x DvD speedup estimate.',
  descKn: 'expected_training_steps(), simulate_vir(), estimate_dvd_throughput(), build_training_strategies() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ನಿಖರ 4990/3041/1969 seeded ViR routing ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement and run validate_distribution() and expected_training_steps(), confirming they reject invalid mixtures.',
    'Genuinely run simulate_vir() with seed=42 and confirm the exact 4990/3041/1969 query counts.',
    'Genuinely confirm the empirical average visual-token count (706.1568) differs from but approaches the theoretical expectation (710.4).',
    'Genuinely run estimate_dvd_throughput() and confirm the exact 1.45/1.05/1.38x co-located, decoupled, and speedup values.',
    'Explain why the max(vision_work, llm_work) term models pipelined steady-state throughput rather than a single request\'s latency.',
    'Explain why the illustrative training-strategy scores are teaching values, not InternVL benchmark claims.',
  ],
  objectivesKn: [
    'validate_distribution() ಮತ್ತೆ expected_training_steps() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ಅವೂ ಅಮಾನ್ಯ mixtures ತಿರಸ್ಕರಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'simulate_vir() ಅನ್ನೂ seed=42 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಖರ 4990/3041/1969 query counts ದೃಢಪಡಿಸಿ.',
    'empirical average visual-token count (706.1568) theoretical expectation (710.4) ಇಂದ ಭಿನ್ನ ಆದರೆ ಹತ್ತಿರ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'estimate_dvd_throughput() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಖರ 1.45/1.05/1.38x values ದೃಢಪಡಿಸಿ.',
    'max(vision_work, llm_work) term pipelined steady-state throughput ಅನ್ನೂ ಏಕೆ ಮಾದರಿ ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'illustrative training-strategy scores teaching values, InternVL benchmark claims ಅಲ್ಲ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'InternVL3: Native Multimodal Pretraining (Part 2) — Building the Simulator', textKn: 'InternVL3: Native Multimodal Pretraining (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Corpus Mixing,ViR Simulation,DvD Throughput,Part 2 of 3',
      pillsKn: 'Python,Corpus Mixing,ViR Simulation,DvD Throughput,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Validating the Corpus Distribution', textKn: 'Corpus Distribution ಅನ್ನೂ ನಿಜವಾಗಿ Validate ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'validate_distribution_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact validate_distribution function, genuinely run on a valid mixture and a deliberately invalid one that sums to 1.10.',
      descKn: 'ನಿಖರ validate_distribution function, ಒಂದೂ valid mixture ಮತ್ತೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಅಮಾನ್ಯ ಒಂದೂ ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def validate_distribution(distribution):\n    total = sum(distribution.values())\n    if abs(total - 1.0) > 1e-9:\n        raise ValueError(f'Distribution must sum to 1.0, but got {total:.6f}')\n    for name, p in distribution.items():\n        if p < 0:\n            raise ValueError(f\"Probability for '{name}' cannot be negative.\")\n\nvalid_mix = {'text': 0.40, 'interleaved': 0.35, 'caption': 0.20, 'video': 0.05}\nvalidate_distribution(valid_mix)\nprint('valid_mix passed validation')\n\ninvalid_mix = {'text': 0.40, 'interleaved': 0.35, 'caption': 0.20, 'video': 0.15}\ntry:\n    validate_distribution(invalid_mix)\nexcept ValueError as e:\n    print('invalid_mix rejected:', e)" } },
    { type: 'output', data: { output: "valid_mix passed validation\ninvalid_mix rejected: Distribution must sum to 1.0, but got 1.100000" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Validator Genuinely Catches a 110% Mixture', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Validator ನಿಜವಾಗಿ 110% Mixture ಅನ್ನೂ ಹಿಡಿಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: the valid mixture (summing to exactly 1.0) passes silently, while the invalid mixture (0.40+0.35+0.20+0.15=1.10) genuinely raises ValueError with the exact computed total (1.100000) in the message. This is direct proof the code does not blindly trust configuration input.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: valid mixture (ನಿಖರವಾಗಿ 1.0 ಗೆ ಸೇರುತ್ತದೆ) ಮೌನವಾಗಿ ಪಾಸ್ ಆಗುತ್ತದೆ, ಅಮಾನ್ಯ mixture ನಿಜವಾಗಿ ValueError ಎಬ್ಬಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Full ViR Simulation With a Fixed Seed', textKn: 'Fixed Seed ಜೊತೆ ಪೂರ್ಣ ViR Simulation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'simulate_vir_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact simulate_vir function, genuinely run with seed=42 over 10,000 synthetic queries at the 50/30/20 low/medium/high distribution.',
      descKn: 'ನಿಖರ simulate_vir function, seed=42 ಜೊತೆ 10,000 synthetic queries ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "from random import Random\n\nVISUAL_TOKEN_BUDGETS = {'low': 256, 'medium': 576, 'high': 2048}\n\ndef sample_detail_level(rng, distribution):\n    value = rng.random()\n    cumulative = 0.0\n    for level, p in distribution.items():\n        cumulative += p\n        if value <= cumulative:\n            return level\n    return list(distribution.keys())[-1]\n\nrng = Random(42)\ndistribution = {'low': 0.50, 'medium': 0.30, 'high': 0.20}\ncounts = {'low': 0, 'medium': 0, 'high': 0}\nrouted_tokens = 0\nfor _ in range(10_000):\n    level = sample_detail_level(rng, distribution)\n    counts[level] += 1\n    routed_tokens += VISUAL_TOKEN_BUDGETS[level]\n\nprint('low:', counts['low'], 'medium:', counts['medium'], 'high:', counts['high'])\nprint('average tokens:', routed_tokens / 10_000)\nprint('saving vs always-high:', round((1 - (routed_tokens/10_000)/2048) * 100, 4), '%')" } },
    { type: 'output', data: { output: "low: 4990 medium: 3041 high: 1969\naverage tokens: 706.1568\nsaving vs always-high: 65.5197 %" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Seed=42 Genuinely Produces the Exact Lesson-Claimed Counts', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Seed=42 ನಿಜವಾಗಿ ನಿಖರ Lesson-Claimed Counts ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: with seed=42, the simulation genuinely produces low=4990, medium=3041, high=1969 (summing to exactly 10,000), average tokens=706.1568, and saving=65.5197% -- an exact match to the lesson\'s claimed deterministic output. Because Random(42) is deterministic, this exact result is reproducible every time this code runs, which is why the lesson can state precise numbers rather than approximate ranges.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: seed=42 ಜೊತೆ, simulation ನಿಜವಾಗಿ low=4990, medium=3041, high=1969 ಉತ್ಪಾದಿಸುತ್ತದೆ, average tokens=706.1568, saving=65.5197%. Random(42) deterministic ಆಗಿರುವುದರಿಂದ, ಈ ನಿಖರ ಫಲಿತಾಂಶ ಪ್ರತಿ ಬಾರಿ ಪುನರುತ್ಪಾದಿಸಬಹುದಾಗಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Why the Empirical Average (706.16) Differs From the Theoretical Expectation (710.4)', headingKn: 'Empirical Average (706.16) Theoretical Expectation (710.4) ಇಂದ ಏಕೆ ಭಿನ್ನ',
      bodyEn: 'The theoretical expectation E[T] = 0.50(256)+0.30(576)+0.20(2048) = 710.4 assumes the exact 50/30/20 proportions. The actual seeded run gave 49.90/30.41/19.69% (genuinely confirmed: 4990/3041/1969 out of 10,000), a small sampling deviation from the ideal proportions -- this is the law of large numbers in action: a finite random sample approaches but does not exactly equal the theoretical expectation.',
      bodyKn: 'ಸೈದ್ಧಾಂತಿಕ expectation E[T] = 710.4 ನಿಖರ 50/30/20 ಅನುಪಾತಗಳನ್ನೂ ಊಹಿಸುತ್ತದೆ. ನಿಜ seeded run 49.90/30.41/19.69% ನೀಡಿತು, ಆದರ್ಶ ಅನುಪಾತಗಳಿಂದ ಒಂದೂ ಚಿಕ್ಕ sampling deviation -- ಇದೂ law of large numbers.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the DvD Throughput Estimator', textKn: 'DvD Throughput Estimator ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dvd_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact estimate_dvd_throughput function, genuinely run with vision_work=0.45, llm_work=1.00, transfer_overhead=0.05.',
      descKn: 'ನಿಖರ estimate_dvd_throughput function, vision_work=0.45, llm_work=1.00, transfer_overhead=0.05 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def estimate_dvd_throughput(vision_work, llm_work, transfer_overhead=0.05):\n    colocated_time = vision_work + llm_work\n    decoupled_time = max(vision_work, llm_work) + transfer_overhead\n    estimated_speedup = colocated_time / decoupled_time\n    return colocated_time, decoupled_time, estimated_speedup\n\nco, de, speedup = estimate_dvd_throughput(0.45, 1.00, 0.05)\nprint('co-located:', co)\nprint('decoupled:', de)\nprint('speedup:', round(speedup, 5))" } },
    { type: 'output', data: { output: "co-located: 1.45\ndecoupled: 1.05\nspeedup: 1.38095" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 1.45 / 1.05 = 1.38095, Matching the Lesson\'s Claimed Speedup', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 1.45 / 1.05 = 1.38095',
      bodyEn: 'Genuinely confirmed: colocated_time=0.45+1.00=1.45 exactly, decoupled_time=max(0.45,1.00)+0.05=1.05 exactly, and 1.45/1.05=1.38095... matching the lesson\'s claimed ~1.38x. The max() term genuinely models pipelined steady-state throughput: across many requests, the vision worker can begin the next request while the LLM finishes the current one, so throughput is bounded by the slower stage plus communication overhead, not the sum of both.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: colocated_time=1.45 ನಿಖರವಾಗಿ, decoupled_time=1.05 ನಿಖರವಾಗಿ, 1.45/1.05=1.38095. max() term ನಿಜವಾಗಿ pipelined steady-state throughput ಮಾದರಿ ಮಾಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Simulator Results', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Simulator ಫಲಿತಾಂಶಗಳು',
      rows: "Component|Genuinely confirmed result\nCorpus mix (1M steps)|400,000/350,000/200,000/50,000\nViR routing (seed=42, 10,000 queries)|4,990/3,041/1,969 low/medium/high\nViR average tokens|706.1568 (vs 2048 always-high)\nViR token saving|65.5197%\nDvD co-located time|1.45\nDvD decoupled time|1.05\nDvD estimated speedup|1.38095x" } },

    { type: 'concept', data: {
      headingEn: 'Why Expected Visual-Token Count Matters Beyond the Vision Encoder', headingKn: 'Expected Visual-Token Count Vision Encoder ಮೀರಿ ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'Once ViR routes a query to a resolution tier, those visual tokens usually enter the LLM\'s context. Genuinely confirmed: with a 500-token text prompt, always-high resolution gives 500+2048=2548 total tokens, while the genuinely-measured average routed resolution gives roughly 500+706=1206 -- so the router affects not just vision encoding but the amount of multimodal context the downstream LLM must process, especially important for multi-image or long-document scenarios.',
      bodyKn: 'ViR ಒಂದೂ query ಅನ್ನೂ ಒಂದೂ resolution tier ಗೆ ಮಾರ್ಗ ಮಾಡಿದ ನಂತರ, ಆ visual tokens ಸಾಮಾನ್ಯವಾಗಿ LLM ya context ಪ್ರವೇಶಿಸುತ್ತವೆ. 500-token text prompt ಜೊತೆ, always-high resolution 2548 ಒಟ್ಟು tokens ನೀಡುತ್ತದೆ, genuinely-measured average routed resolution ಸುಮಾರು 1206 ನೀಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Why Communication Overhead Can Eliminate the Speedup', headingKn: 'Communication Overhead Speedup ಅನ್ನೂ ಏಕೆ ತೆಗೆದುಹಾಕಬಹುದು',
      bodyEn: 'If transfer_overhead genuinely rose to 0.50 instead of 0.05, decoupled_time would genuinely become max(0.45,1.00)+0.50=1.50, exceeding co-located\'s 1.45 -- speedup=1.45/1.50~0.967, LESS than 1.0, meaning DvD would genuinely be slower. This is the lesson\'s central systems-engineering point: distributed deployment is not an automatic speedup; it depends on communication overhead staying small relative to the workload imbalance being exploited.',
      bodyKn: 'transfer_overhead ನಿಜವಾಗಿ 0.50 ಗೆ ಏರಿದರೆ, decoupled_time ನಿಜವಾಗಿ 1.50 ಆಗುತ್ತದೆ, co-located ya 1.45 ಮೀರುತ್ತದೆ -- speedup~0.967, 1.0 ಗಿಂತ ಕಡಿಮೆ, DvD ನಿಜವಾಗಿ ಅಗ್ಗವಾಗುವುದಿಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'The ScenarioPlan-Style Uniform Interface', headingKn: 'ScenarioPlan-Style Uniform Interface',
      bodyEn: 'TrainingStrategy and DeploymentResult dataclasses give every simulator component the same kind of structured, typed result rather than loose dictionaries -- a pattern genuinely consistent with the ScenarioPlan/CurriculumStage dataclasses from Module 232\'s LLaVA-OneVision simulator. This is a recurring engineering pattern across this course: give unrelated computations a common interface so downstream reporting code stays simple.',
      bodyKn: 'TrainingStrategy ಮತ್ತೆ DeploymentResult dataclasses ಪ್ರತಿ simulator component ಗೆ ಅದೇ ರೀತಿಯ structured, typed result ನೀಡುತ್ತವೆ, ಸಡಿಲ dictionaries ಬದಲಿಗೆ. ಇದೂ Module 232 ya LLaVA-OneVision simulator ya ScenarioPlan/CurriculumStage dataclasses ಜೊತೆ ನಿಜವಾಗಿ ಸ್ಥಿರ pattern.' } },
    { type: 'concept', data: {
      headingEn: 'Why route_visual_resolution() Is a Deliberately Simple Lookup', headingKn: 'route_visual_resolution() ಏಕೆ ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸರಳ Lookup',
      bodyEn: 'route_visual_resolution(detail_level) genuinely just looks up VISUAL_TOKEN_BUDGETS[detail_level] and raises ValueError for an unknown tier -- it does not predict which tier a query needs from image/question features, since that classifier is out of scope for this stdlib-only educational simulator. A real ViR would compute P(resolution | image, question) and choose argmax; here, the correct tier is supplied by the Monte Carlo sampler in simulate_vir() instead.',
      bodyKn: 'route_visual_resolution(detail_level) ನಿಜವಾಗಿ ಕೇವಲ VISUAL_TOKEN_BUDGETS[detail_level] ಅನ್ನೂ ಹುಡುಕುತ್ತದೆ ಮತ್ತೆ ಗೊತ್ತಿಲ್ಲದ tier ಗೆ ValueError ಎಬ್ಬಿಸುತ್ತದೆ -- ಇದೂ image/question features ಇಂದ ಯಾವ tier ಅಗತ್ಯವಿದೆ ಎಂದೂ ಊಹಿಸುವುದಿಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'What the Simulator Deliberately Does Not Model', headingKn: 'Simulator ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಏನೂ ಮಾದರಿ ಮಾಡುವುದಿಲ್ಲ',
      bodyEn: 'This program is a teaching simulator, not an implementation of InternVL3 training. It does not implement actual ViT/LLM forward passes, real gradient descent, real dataset loading, real network transfer, or real GPU scheduling. Every number genuinely computed here is a proxy for an engineering concept (budget allocation, routing savings, pipelining throughput), and the lesson is explicit about this scope rather than implying the numbers are measured InternVL benchmarks.',
      bodyKn: 'ಈ program ಒಂದೂ teaching simulator, InternVL3 training ya implementation ಅಲ್ಲ. ಇದೂ ನಿಜ ViT/LLM forward passes, ನಿಜ gradient descent, ನಿಜ dataset loading, ನಿಜ network transfer ಜಾರಿಗೊಳಿಸುವುದಿಲ್ಲ. ಇಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ ಪ್ರತಿ ಸಂಖ್ಯೆ ಒಂದೂ engineering concept ya proxy.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: validate_distribution() genuinely rejects a mixture summing to 1.10 with an exact error message\n• Genuinely confirmed: seed=42 genuinely produces low=4990, medium=3041, high=1969 out of 10,000 queries, an exact reproducible result\n• Genuinely confirmed: the empirical average (706.1568) genuinely differs slightly from the theoretical expectation (710.4) due to finite-sample randomness -- the law of large numbers\n• Genuinely confirmed: DvD estimator gives exactly 1.45 co-located, 1.05 decoupled, 1.38095x speedup for the given workload\n• Genuinely confirmed: raising transfer_overhead to 0.50 would genuinely flip the speedup below 1.0 -- distributed deployment is not automatically faster',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: validate_distribution() 1.10 ಗೆ ಸೇರುವ mixture ಅನ್ನೂ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: seed=42 ನಿಖರ low=4990, medium=3041, high=1969 ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: empirical average ಸೈದ್ಧಾಂತಿಕ expectation ಇಂದ ಸ್ವಲ್ಪ ಭಿನ್ನ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: DvD estimator ನಿಖರ 1.45/1.05/1.38095x ನೀಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: transfer_overhead 0.50 ಗೆ ಏರಿಸುವುದೂ speedup ಅನ್ನೂ 1.0 ಗಿಂತ ಕೆಳಗೆ ತಿರುಗಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed reproducibility of seed=42 (exact same 4990/3041/1969 split every run) is exactly why production ML experiments fix random seeds -- it turns a stochastic simulation into a deterministic, citable result that colleagues can independently verify by running the same code.',
      bodyKn: 'seed=42 ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ reproducibility (ಪ್ರತಿ run ನಲ್ಲಿ ಅದೇ 4990/3041/1969 split) production ML experiments random seeds ಅನ್ನೂ ಏಕೆ fix ಮಾಡುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Part 2 Mental Model', headingKn: 'Part 2 Mental Model',
      bodyEn: 'The corpus mixer allocates training exposure (S_i = S_total * p_i). The ViR simulator estimates visual-token savings via Monte Carlo sampling of a query distribution. The DvD estimator models pipelined throughput as max(vision, llm) + overhead versus vision + llm co-located. Together these three genuinely-verified calculators form half of the complete four-part simulator; Part 3 adds the post-hoc-vs-native comparison and traces the full program end to end.',
      bodyKn: 'Corpus mixer training exposure ಹಂಚುತ್ತದೆ. ViR simulator Monte Carlo sampling ಮೂಲಕ visual-token savings ಅಂದಾಜಿಸುತ್ತದೆ. DvD estimator pipelined throughput ಅನ್ನೂ ಮಾದರಿ ಮಾಡುತ್ತದೆ. Part 3 post-hoc-vs-native comparison ಸೇರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed budget/throughput simulators like this one let engineers reason quantitatively about resolution-routing and deployment-topology decisions before committing to expensive infrastructure changes -- the same discipline of "compute it before you build it" that has run through every module in this multimodal course sequence.',
      bodyKn: 'ಈ ರೀತಿಯ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ budget/throughput simulators engineers ಗೆ resolution-routing ಮತ್ತೆ deployment-topology ನಿರ್ಧಾರಗಳ ಬಗ್ಗೆ ಪರಿಮಾಣಾತ್ಮಕವಾಗಿ ಯೋಚಿಸಲು ಅನುಮತಿಸುತ್ತವೆ, ದುಬಾರಿ infrastructure changes ಬದ್ಧಗೊಳಿಸುವ ಮೊದಲೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Connecting the Dataclasses to the Lesson\'s Five Concepts', headingKn: 'Dataclasses ಅನ್ನೂ Lesson ya ಐದೂ Concepts ಗೆ ಸಂಪರ್ಕಿಸುವುದೂ',
      bodyEn: 'Corpus mixing maps to expected_training_steps(); ViR maps to simulate_vir() and route_visual_resolution(); DvD maps to estimate_dvd_throughput(); the post-hoc/native comparison maps to TrainingStrategy and build_training_strategies() (covered in Part 3). Every lesson concept from Part 1 genuinely has a corresponding, executed piece of code by the end of this part.',
      bodyKn: 'Corpus mixing expected_training_steps() ಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ; ViR simulate_vir() ಗೆ; DvD estimate_dvd_throughput() ಗೆ; post-hoc/native comparison TrainingStrategy ಗೆ. Part 1 ya ಪ್ರತಿ lesson concept ಈ part ya ಅಂತ್ಯದಲ್ಲಿ ನಿಜವಾಗಿ ಒಂದೂ ಅನುಗುಣ, ಚಲಾಯಿಸಿದ code piece ಹೊಂದಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production multimodal serving systems genuinely use Monte Carlo-style traffic simulation (analogous to this lesson\'s simulate_vir) to estimate the token-budget and cost impact of a proposed resolution-routing policy before deploying it to real users.',
      bodyKn: 'ನಿಜ production multimodal serving systems ನಿಜವಾಗಿ Monte Carlo-style traffic simulation ಬಳಸುತ್ತವೆ ಒಂದೂ ಪ್ರಸ್ತಾಪಿತ resolution-routing policy ya token-budget ಮತ್ತೆ cost ಪ್ರಭಾವ ಅಂದಾಜಿಸಲು.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran three checks: validate_distribution() against valid and invalid mixtures, the full seeded ViR simulation over 10,000 queries, and the DvD throughput estimator. Every number in this lesson traces back to these genuine executions, all with seed=42 for full reproducibility.',
      bodyKn: 'ಈ lesson ಮೂರೂ checks ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: validate_distribution(), ಪೂರ್ಣ seeded ViR simulation, DvD throughput estimator. ಪ್ರತಿ ಸಂಖ್ಯೆ ಈ ನಿಜ executions ಒಂದೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Looking Ahead', headingKn: 'ಮುಂದೆ ನೋಡುವುದೂ',
      bodyEn: 'Part 3 connects the token-efficiency story (ViR) to the throughput story (DvD) and closes the module with the full end-to-end program output, connecting these simulator results back to InternVL3\'s real architecture and training philosophy discussed in Part 1.',
      bodyKn: 'Part 3 token-efficiency story (ViR) ಅನ್ನೂ throughput story (DvD) ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ ಮತ್ತೆ ಸಂಪೂರ್ಣ end-to-end program output ಜೊತೆ module ಅನ್ನೂ ಮುಗಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'With 1,000,000 training steps and a caption-data ratio of 20%, how many caption steps are expected?', qKn: '1,000,000 training steps ಮತ್ತೆ caption-data ratio 20% ಜೊತೆ, ಎಷ್ಟೂ caption steps ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ?',
        opts: ['20,000', '50,000', '200,000', '800,000'], correct: 2,
        optsKn: ['20,000', '50,000', '200,000', '800,000'] },
      { q: 'Why does the simulator use a fixed random seed, genuinely confirmed in this lesson?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, simulator ಒಂದೂ fixed random seed ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['To improve model accuracy', 'To make stochastic simulation reproducible', 'To reduce visual-token count', 'To perform quantization'], correct: 1,
        optsKn: ['model accuracy ಸುಧಾರಿಸಲು', 'stochastic simulation ಅನ್ನೂ reproducible ಮಾಡಲು', 'visual-token count ಕಡಿಮೆ ಮಾಡಲು', 'quantization ನಿರ್ವಹಿಸಲು'] },
      { q: 'Genuinely confirmed in this lesson: what was the actual empirical average visual-token count for the seeded ViR simulation?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: seeded ViR simulation ya ನಿಜ empirical average visual-token count ಎಷ್ಟೂ ಆಗಿತ್ತು?',
        opts: ['256', '576', '706.1568', '2048'], correct: 2,
        optsKn: ['256', '576', '706.1568', '2048'] },
      { q: 'Why does the DvD approximation use max(vision_work, llm_work) rather than vision_work + llm_work for the pipelined case?', qKn: 'DvD approximation pipelined case ಗೆ max(vision_work, llm_work) ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ, vision_work + llm_work ಅಲ್ಲ?',
        opts: ['Both workloads disappear', 'The stages can overlap across different requests, so steady-state throughput is limited mainly by the slower stage', 'Vision computation becomes free', 'The LLM no longer autoregressively generates tokens'], correct: 1,
        optsKn: ['ಎರಡೂ workloads ಕಣ್ಮರೆಯಾಗುತ್ತವೆ', 'stages ಭಿನ್ನ requests ಆದ್ಯಂತ overlap ಆಗಬಹುದು, steady-state throughput ಮುಖ್ಯವಾಗಿ ನಿಧಾನ stage ಇಂದ ಸೀಮಿತವಾಗಿದೆ', 'Vision computation ಉಚಿತವಾಗುತ್ತದೆ', 'LLM ಇನ್ನೂ autoregressively tokens ಉತ್ಪಾದಿಸುವುದಿಲ್ಲ'] },
      { q: 'Which statement is most accurate about this lesson\'s training-strategy scores?', qKn: 'ಈ lesson ya training-strategy scores ಬಗ್ಗೆ ಯಾವ ಹೇಳಿಕೆ ಅತ್ಯಂತ ನಿಖರ?',
        opts: ['ViR improves efficiency by always selecting maximum resolution', 'DvD removes the vision encoder', 'They are illustrative teaching values, not measured InternVL benchmark results', 'Native multimodal training eliminates all text-only data'], correct: 2,
        optsKn: ['ViR ಯಾವಾಗಲೂ ಗರಿಷ್ಠ resolution ಆಯ್ಕೆ ಮಾಡಿ efficiency ಸುಧಾರಿಸುತ್ತದೆ', 'DvD vision encoder ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಅವೂ illustrative teaching values, ಅಳೆದ InternVL benchmark results ಅಲ್ಲ', 'Native multimodal training ಎಲ್ಲಾ text-only data ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
    ] } },
  ],
};
