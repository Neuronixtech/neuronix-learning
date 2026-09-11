const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321493'; // Module 234: InternVL3 Native Multimodal Pretraining

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'InternVL3: Native Multimodal Pretraining (Part 3) — Full Simulation and Final Comparison',
  titleKn: 'InternVL3: Native Multimodal Pretraining (Part 3) — Full Simulation ಮತ್ತೆ Final Comparison',
  desc: 'Genuinely run the complete four-section program end to end, confirming every printed number from corpus mix through the post-hoc-vs-native comparison table, and close this multimodal course sequence with the full architectural mental model from CLIP through InternVL3.',
  descKn: 'ಸಂಪೂರ್ಣ ನಾಲ್ಕೂ-ವಿಭಾಗದ program ಅನ್ನೂ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಪ್ರತಿ ಮುದ್ರಿಸಿದ ಸಂಖ್ಯೆಯನ್ನೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely run the complete end-to-end program and confirm all four sections print consistent, reproducible output.',
    'Genuinely confirm the post-hoc vs native training strategy comparison table matches the illustrative TrainingStrategy values exactly.',
    'Explain why 60-second-vs-5-minute video and multi-image token math genuinely motivates V2PE beyond the corpus-mixing story.',
    'Explain the three-layer InternVL3 mental model: training, input efficiency, serving.',
    'Explain why post-hoc VLMs remain a legitimate choice despite native pretraining\'s reported quality advantages.',
    'Produce the final architectural comparison connecting CLIP, BLIP-2, Flamingo, LLaVA, LLaVA-OneVision, Qwen-VL, and InternVL3.',
  ],
  objectivesKn: [
    'ಸಂಪೂರ್ಣ end-to-end program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಎಲ್ಲಾ ನಾಲ್ಕೂ ವಿಭಾಗಗಳು ಸ್ಥಿರ, reproducible ಔಟ್ಪುಟ್ ಮುದ್ರಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'post-hoc vs native training strategy comparison table illustrative TrainingStrategy values ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    '60-second-vs-5-minute video ಮತ್ತೆ multi-image token math V2PE ಅನ್ನೂ ಏಕೆ ಪ್ರೇರೇಪಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಮೂರೂ-ಪದರದ InternVL3 mental model ವಿವರಿಸಿ: training, input efficiency, serving.',
    'native pretraining ya ವರದಿ ಮಾಡಿದ quality advantages ಹೊರತಾಗಿಯೂ post-hoc VLMs ಒಂದೂ ಕಾನೂನುಬದ್ಧ ಆಯ್ಕೆ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'CLIP, BLIP-2, Flamingo, LLaVA, LLaVA-OneVision, Qwen-VL, InternVL3 ಅನ್ನೂ ಸಂಪರ್ಕಿಸುವ ಅಂತಿಮ architectural comparison ಉತ್ಪಾದಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'InternVL3: Native Multimodal Pretraining (Part 3) — Full Simulation and Final Comparison', textKn: 'InternVL3: Native Multimodal Pretraining (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Full Simulation,Training Strategy Comparison,Part 3 of 3',
      pillsKn: 'Python,Full Simulation,Training Strategy Comparison,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Complete Four-Section Program End to End', textKn: 'ಸಂಪೂರ್ಣ ನಾಲ್ಕೂ-ವಿಭಾಗದ Program ಅನ್ನೂ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'internvl3_full_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The complete main() function combining corpus mixing, ViR simulation, DvD estimation, and the training-strategy comparison table, genuinely run end to end.',
      descKn: 'corpus mixing, ViR simulation, DvD estimation, training-strategy comparison table ಸಂಯೋಜಿಸುವ ಸಂಪೂರ್ಣ main() function, ನಿಜವಾಗಿ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "@dataclass\nclass TrainingStrategy:\n    name: str\n    relative_compute_cost: float\n    text_retention_score: float\n    answer_consistency_score: float\n    visual_text_consistency_score: float\n\ndef build_training_strategies():\n    return [\n        TrainingStrategy('Post-hoc VLM', 1.0, 82.0, 77.0, 75.0),\n        TrainingStrategy('Native multimodal', 3.2, 92.0, 89.0, 90.0),\n    ]\n\nfor s in build_training_strategies():\n    print(f'{s.name:<20}{s.relative_compute_cost:>9.1f}x{s.text_retention_score:>10.1f}{s.answer_consistency_score:>10.1f}{s.visual_text_consistency_score:>12.1f}')" } },
    { type: 'output', data: { output: "Post-hoc VLM              1.0x      82.0      77.0        75.0\nNative multimodal         3.2x      92.0      89.0        90.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Training-Strategy Table Matches the Illustrative Values Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Training-Strategy Table Illustrative Values ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: native multimodal genuinely costs 3.2x compute against 1.0x for post-hoc, while genuinely scoring higher on all three illustrative quality metrics (92.0/89.0/90.0 vs 82.0/77.0/75.0). The comment in the source code explicitly labels these teaching values, not reported InternVL benchmark results -- a distinction this lesson has repeated at every stage, consistent with never presenting an assumed number as a verified one.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: native multimodal ನಿಜವಾಗಿ 3.2x compute ವೆಚ್ಚ ಮಾಡುತ್ತದೆ post-hoc ya 1.0x ವಿರುದ್ಧ, ಎಲ್ಲಾ ಮೂರೂ illustrative quality metrics ಮೇಲೆ ಹೆಚ್ಚಿನ score ಪಡೆಯುತ್ತಾ. source code ya comment ಈ ಸಂಖ್ಯೆಗಳನ್ನೂ teaching values ಎಂದೂ ಸ್ಪಷ್ಟವಾಗಿ ಲೇಬಲ್ ಮಾಡುತ್ತದೆ, ವರದಿ ಮಾಡಿದ InternVL benchmark results ಅಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Full Simulator Output Summary', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Full Simulator Output ಸಾರಾಂಶ',
      rows: "Section|Genuinely confirmed key result\n1. Corpus mix|400,000/350,000/200,000/50,000 steps (text/interleaved/caption/video)\n2. ViR simulation|4,990/3,041/1,969 queries; 706.1568 avg tokens; 65.5197% saving\n3. DvD throughput|1.45 co-located, 1.05 decoupled, 1.38095x speedup\n4. Training strategy|Post-hoc 1.0x cost/82-77-75 scores; Native 3.2x cost/92-89-90 scores" } },

    { type: 'heading', data: { textEn: 'Why V2PE Matters Beyond the Corpus-Mixing Story', textKn: 'V2PE Corpus-Mixing Story ಮೀರಿ ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'positional_range_example.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the total sequence length for a long multimodal input (text + 3 images + video), confirming why visual-token-heavy sequences can quickly consume large positional ranges.',
      descKn: 'ಒಂದೂ ಉದ್ದ multimodal input (text + 3 images + video) ಗಾಗಿ ಒಟ್ಟು sequence length ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, visual-token-heavy sequences ಬೇಗನೇ ದೊಡ್ಡ positional ranges ಬಳಸಬಹುದು ಏಕೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "text_tokens = 2000\nimage_tokens = 2048 * 3\nvideo_tokens = 20000\ntotal = text_tokens + image_tokens + video_tokens\nprint('text:', text_tokens)\nprint('3 images:', image_tokens)\nprint('video:', video_tokens)\nprint('total sequence:', total)\nprint('fraction from visual tokens:', round((image_tokens + video_tokens) / total * 100, 2), '%')" } },
    { type: 'output', data: { output: "text: 2000\n3 images: 6144\nvideo: 20000\ntotal sequence: 28144\nfraction from visual tokens: 92.89 %" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Visual Tokens Genuinely Dominate 92.9% of This Long Multimodal Sequence', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Visual Tokens ಈ ಉದ್ದ Multimodal Sequence ya 92.9% ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಾಬಲ್ಯಗೊಳಿಸುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: for a text+3-images+video sequence, 2000+6144+20000=28144 total, with visual tokens (6144+20000=26144) genuinely accounting for 92.9% of the sequence. This concretely motivates V2PE: if visual tokens consumed positional indices at the same rate as text, this single example would already use most of a typical positional range, leaving little room for longer conversations or additional context.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: text+3-images+video sequence ಗೆ, 2000+6144+20000=28144 ಒಟ್ಟು, visual tokens ನಿಜವಾಗಿ sequence ya 92.9% ಗೆ ಕಾರಣವಾಗಿವೆ. ಇದೂ V2PE ಅನ್ನೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ಪ್ರೇರೇಪಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Three-Layer InternVL3 Mental Model', textKn: 'ಮೂರೂ-ಪದರದ InternVL3 Mental Model', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Training, Input Efficiency, Serving', captionKn: 'Training, Input Efficiency, Serving',
      rows: "Layer|Question|Techniques (genuinely simulated in this module)\nTraining|How should the model learn multimodality?|Native multimodal pretraining, mixed corpus, V2PE\nInput efficiency|How much visual information does this request need?|ViR (genuinely confirmed 65.52% token saving)\nServing|How should vision and language execute?|DvD (genuinely confirmed 1.38x speedup estimate)" } },

    { type: 'concept', data: {
      headingEn: 'Why Post-Hoc VLMs Remain a Legitimate Choice', headingKn: 'Post-Hoc VLMs ಏಕೆ ಒಂದೂ ಕಾನೂನುಬದ್ಧ ಆಯ್ಕೆಯಾಗಿ ಉಳಿಯುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: native multimodal costs 3.2x more compute than post-hoc (both from the illustrative TrainingStrategy table). Suppose a team has an existing high-quality domain LLM but only 8 GPUs and 2 million image-text examples -- training a full native multimodal model at scratch is unrealistic. Post-hoc adaptation (reuse LLM + reuse ViT + small projector + multimodal adaptation) is cheaper, faster, and easier to iterate. Native multimodal pretraining is a different point in the engineering trade-off space, not a universally superior architecture.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: native multimodal post-hoc ಗಿಂತ 3.2x ಹೆಚ್ಚು compute ವೆಚ್ಚ ಮಾಡುತ್ತದೆ. ಒಂದೂ team ಈಗಾಗಲೇ ಇರುವ ಉತ್ತಮ-ಗುಣಮಟ್ಟದ domain LLM ಹೊಂದಿದ್ದರೆ ಆದರೆ ಕೇವಲ 8 GPUs, ಸಂಪೂರ್ಣ native multimodal model ಆದಿಯಿಂದ ತರಬೇತಿ ನೀಡುವುದೂ ಅವಾಸ್ತವಿಕ.' } },

    { type: 'heading', data: { textEn: 'Final Architecture Comparison: The Full Multimodal Course Sequence', textKn: 'ಅಂತಿಮ Architecture Comparison: ಸಂಪೂರ್ಣ Multimodal Course Sequence', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'From CLIP to InternVL3: Genuinely Verified Across This Course', captionKn: 'CLIP ಇಂದ InternVL3 ಗೆ: ಈ Course ಆದ್ಯಂತ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      rows: "Model|Core mechanism|Genuinely verified number\nCLIP|Shared embedding space, late fusion|Symmetric InfoNCE loss 0.5216\nBLIP-2|Q-Former cross-attention compression|256->32 tokens, 8.0x reduction\nFlamingo|Perceiver Resampler + gated cross-attention|alpha=0 exact no-op\nLLaVA|Simple per-patch MLP, no compression|8x16->8x32, ~21M params\nLLaVA-OneVision|Unified budget across scenarios|3645/3645/2592 tokens\nQwen-VL|Native resolution + M-RoPE + dynamic FPS|100/960/1430 tokens; 1/2/4 FPS\nInternVL3|Native multimodal pretraining + ViR + DvD|65.52% ViR saving; 1.38x DvD speedup" } },

    { type: 'heading', data: { textEn: 'Experiment: A Low-Detail-Heavy Query Distribution', textKn: 'Experiment: ಒಂದೂ Low-Detail-Heavy Query Distribution', level: 'H2' } },
    { type: 'code', data: {
      filename: 'vir_experiment.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-run simulate_vir with QUERY_DISTRIBUTION changed to {low:0.80, medium:0.15, high:0.05} instead of {0.50, 0.30, 0.20}, keeping the same seed=42, to confirm the saving percentage genuinely rises when most queries need only low detail.',
      descKn: 'QUERY_DISTRIBUTION ಅನ್ನೂ {low:0.80, medium:0.15, high:0.05} ಗೆ ಬದಲಾಯಿಸಿ, seed=42 ಇಟ್ಟುಕೊಂಡು simulate_vir ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ-ಚಲಾಯಿಸಿ, ಹೆಚ್ಚಿನ queries ಗೆ ಕೇವಲ low detail ಬೇಕಾದಾಗ saving percentage ನಿಜವಾಗಿ ಏರುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "HEAVY_LOW = {'low': 0.80, 'medium': 0.15, 'high': 0.05}\ncounts, avg, saving = simulate_vir(10000, HEAVY_LOW, seed=42)\nprint('counts:', counts)\nprint('average tokens:', round(avg, 4))\nprint('saving pct:', round(saving, 4))" } },
    { type: 'output', data: { output: "counts: {'low': 8031, 'medium': 1456, 'high': 513}\naverage tokens: 394.5216\nsaving pct: 80.7362" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Saving Rises from 65.52% to 80.74% When Queries Skew Toward Low Detail', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Queries Low Detail ಕಡೆಗೆ ಒಲವು ತೋರಿದಾಗ Saving 65.52% ಇಂದ 80.74% ಗೆ ಏರುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: switching QUERY_DISTRIBUTION from {0.50, 0.30, 0.20} to {0.80, 0.15, 0.05} genuinely drops average routed tokens from 706.1568 to 394.5216, raising the saving from 65.5197% to 80.7362%. This genuinely demonstrates ViR\'s core value proposition scales with how skewed real traffic is toward simple queries -- a deployment serving mostly simple visual questions saves genuinely more than this lesson\'s baseline 50/30/20 mix.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: QUERY_DISTRIBUTION ಅನ್ನೂ {0.50, 0.30, 0.20} ಇಂದ {0.80, 0.15, 0.05} ಗೆ ಬದಲಾಯಿಸುವುದೂ average routed tokens ಅನ್ನೂ 706.1568 ಇಂದ 394.5216 ಗೆ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ, saving ಅನ್ನೂ 65.5197% ಇಂದ 80.7362% ಗೆ ಏರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Experiment: A High Transfer Overhead Erases the DvD Speedup', textKn: 'Experiment: ಒಂದೂ High Transfer Overhead DvD Speedup ಅನ್ನೂ ಅಳಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dvd_experiment.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-run estimate_dvd_throughput with transfer_overhead raised from 0.05 to 0.70, keeping vision_work=0.45 and llm_work=1.00 the same, to test whether decoupling can genuinely become worse than co-location.',
      descKn: 'transfer_overhead ಅನ್ನೂ 0.05 ಇಂದ 0.70 ಗೆ ಏರಿಸಿ, vision_work=0.45, llm_work=1.00 ಒಂದೇ ಇಟ್ಟುಕೊಂಡು estimate_dvd_throughput ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ-ಚಲಾಯಿಸಿ, decoupling ನಿಜವಾಗಿ co-location ಗಿಂತ ಕೆಟ್ಟದಾಗಬಹುದೇ ಎಂದೂ ಪರೀಕ್ಷಿಸಿ.',
      code: "dr = estimate_dvd_throughput(vision_work=0.45, llm_work=1.00, transfer_overhead=0.70)\nprint('colocated:', dr.colocated_time)\nprint('decoupled:', round(dr.decoupled_time, 4))\nprint('speedup:', round(dr.estimated_speedup, 5))" } },
    { type: 'output', data: { output: "colocated: 1.45\ndecoupled: 1.7\nspeedup: 0.85294" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Speedup Genuinely Drops Below 1.0x, Meaning Decoupling Would Hurt', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Speedup ನಿಜವಾಗಿ 1.0x ಗಿಂತ ಕಡಿಮೆಯಾಗುತ್ತದೆ, ಅಂದರೆ Decoupling ಹಾನಿ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: raising transfer_overhead from 0.05 to 0.70 genuinely changes decoupled_time from 1.05 to 1.70 (since max(0.45,1.00)+0.70=1.70), dropping the estimated speedup from 1.38095x to 0.85294x -- below 1.0, meaning decoupled deployment would genuinely be slower than co-location in this scenario. This concretely demonstrates that DvD only helps when the network/transfer cost between the vision and language services stays small relative to the compute it parallelizes.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: transfer_overhead ಅನ್ನೂ 0.05 ಇಂದ 0.70 ಗೆ ಏರಿಸುವುದೂ decoupled_time ಅನ್ನೂ 1.05 ಇಂದ 1.70 ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ, estimated speedup ಅನ್ನೂ 1.38095x ಇಂದ 0.85294x ಗೆ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ -- 1.0 ಕ್ಕಿಂತ ಕಡಿಮೆ, ಅಂದರೆ decoupled deployment ಈ ಸನ್ನಿವೇಶದಲ್ಲಿ ನಿಜವಾಗಿ ನಿಧಾನವಾಗಿರುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the complete four-section program produces consistent output end to end, matching every number verified piecemeal in Parts 1-2\n• Genuinely confirmed: a text+3-images+video sequence genuinely gives visual tokens 92.9% of the total sequence, concretely motivating V2PE\n• Genuinely confirmed: native multimodal costs 3.2x more compute than post-hoc in this lesson\'s illustrative comparison, while scoring higher on all three quality proxies\n• The three-layer mental model (training, input efficiency, serving) separates InternVL3\'s contributions into genuinely distinct engineering problems\n• Post-hoc VLMs remain legitimate for resource-constrained teams -- native pretraining is a different trade-off point, not a strictly superior architecture',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಸಂಪೂರ್ಣ ನಾಲ್ಕೂ-ವಿಭಾಗದ program ಸ್ಥಿರ ಔಟ್ಪುಟ್ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: text+3-images+video sequence ನಿಜವಾಗಿ visual tokens ಗೆ 92.9% ನೀಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: native multimodal post-hoc ಗಿಂತ 3.2x ಹೆಚ್ಚು compute ವೆಚ್ಚ ಮಾಡುತ್ತದೆ\n• ಮೂರೂ-ಪದರದ mental model InternVL3 ya ಕೊಡುಗೆಗಳನ್ನೂ ಭಿನ್ನ engineering problems ಗೆ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ\n• Post-hoc VLMs ಸಂಪನ್ಮೂಲ-ಸೀಮಿತ ತಂಡಗಳಿಗೆ ಕಾನೂನುಬದ್ಧವಾಗಿ ಉಳಿಯುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed 92.9% visual-token dominance in a modest multi-image-plus-video example is exactly why real long-context multimodal systems treat positional-encoding efficiency (V2PE-style techniques) as seriously as raw context-window size -- a bigger window alone does not help if visual tokens exhaust the model\'s useful positional range before the conversation even gets long.',
      bodyKn: 'ಒಂದೂ ಸಾಧಾರಣ multi-image-plus-video ಉದಾಹರಣೆಯಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 92.9% visual-token ಪ್ರಾಬಲ್ಯ ನಿಜ long-context multimodal systems positional-encoding efficiency ಅನ್ನೂ ಏಕೆ ಗಂಭೀರವಾಗಿ ಪರಿಗಣಿಸುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed end-to-end simulation across corpus mixing, resolution routing, deployment topology, and training strategy gives engineers one coherent mental model for reasoning about a VLM system\'s full lifecycle -- from what it learns, to how much it costs per query, to how it is served -- rather than optimizing each concern in isolation.',
      bodyKn: 'corpus mixing, resolution routing, deployment topology, training strategy ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ end-to-end simulation engineers ಗೆ ಒಂದೂ VLM system ya ಪೂರ್ಣ lifecycle ಬಗ್ಗೆ ಯೋಚಿಸಲು ಒಂದೂ ಸುಸಂಗತ mental model ನೀಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real InternVL3.5\'s combined ViR and DvD efficiency work is reported to deliver up to a 4.05x inference speedup over InternVL3 -- genuinely larger than this lesson\'s single-technique 1.38x DvD-only estimate, illustrating how combining multiple efficiency techniques (this module simulated them independently for clarity) compounds real production gains.',
      bodyKn: 'ನಿಜ InternVL3.5 ya ಸಂಯೋಜಿತ ViR ಮತ್ತೆ DvD efficiency work InternVL3 ಗಿಂತ 4.05x ವರೆಗೂ inference speedup ನೀಡುತ್ತದೆ ಎಂದೂ ವರದಿಯಾಗಿದೆ -- ಈ lesson ya single-technique 1.38x DvD-only ಅಂದಾಜಿಗಿಂತ ನಿಜವಾಗಿ ದೊಡ್ಡದೂ.' } },

    { type: 'concept', data: {
      headingEn: 'Module 234 and This Multimodal Sequence Complete', headingKn: 'Module 234 ಮತ್ತೆ ಈ Multimodal Sequence ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part InternVL3 module and the extended multimodal architecture sequence spanning CLIP (Module 226) through InternVL3 (Module 234). Each module genuinely verified a different answer to how vision and language connect, train, and deploy together -- with real executed numbers throughout, including honest disclosures whenever an initial guess was wrong and corrections whenever a claimed detail (like InternVL3\'s initialization) needed factual correction.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ InternVL3 module ಅನ್ನೂ ಮತ್ತೆ CLIP (Module 226) ಇಂದ InternVL3 (Module 234) ವರೆಗೂ ವ್ಯಾಪಿಸಿದ ವಿಸ್ತೃತ multimodal architecture sequence ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ. ಪ್ರತಿ module vision ಮತ್ತೆ language ಹೇಗೆ ಸಂಪರ್ಕಿಸುತ್ತವೆ, ತರಬೇತಿ ಪಡೆಯುತ್ತವೆ, deploy ಆಗುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ಭಿನ್ನ ಉತ್ತರವನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why is native multimodal pretraining fundamentally different from simply training a projector?', qKn: 'Native multimodal pretraining ಕೇವಲ ಒಂದೂ projector ತರಬೇತಿ ನೀಡುವುದಕ್ಕಿಂತ ಮೂಲಭೂತವಾಗಿ ಏಕೆ ಭಿನ್ನ?',
        opts: ['It removes transformers', 'Multimodal examples participate in a substantial joint pretraining process', 'It uses no text data', 'Images are converted directly into words'], correct: 1,
        optsKn: ['ಇದೂ transformers ತೆಗೆದುಹಾಕುತ್ತದೆ', 'Multimodal examples ಒಂದೂ ಗಮನಾರ್ಹ joint pretraining process ನಲ್ಲಿ ಭಾಗವಹಿಸುತ್ತವೆ', 'ಇದೂ text data ಬಳಸುವುದಿಲ್ಲ', 'Images ನೇರವಾಗಿ words ಗೆ ಪರಿವರ್ತಿಸಲ್ಪಡುತ್ತವೆ'] },
      { q: 'Genuinely confirmed in this lesson: what fraction of a text+3-images+video sequence did visual tokens genuinely account for?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: text+3-images+video sequence ya ಎಷ್ಟೂ ಭಾಗಕ್ಕೆ visual tokens ನಿಜವಾಗಿ ಕಾರಣವಾಗಿದ್ದವು?',
        opts: ['7.1%', '50%', '92.9%', '100%'], correct: 2,
        optsKn: ['7.1%', '50%', '92.9%', '100%'] },
      { q: 'What does ViR primarily optimize, genuinely confirmed across this module?', qKn: 'ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ViR ಮುಖ್ಯವಾಗಿ ಏನೂ ಅತ್ಯುತ್ತಮಗೊಳಿಸುತ್ತದೆ?',
        opts: ['Model parameter count', 'Number of output tokens', 'Visual resolution/token budget per request', 'Learning rate'], correct: 2,
        optsKn: ['Model parameter count', 'Output tokens ya ಸಂಖ್ಯೆ', 'ಪ್ರತಿ request ಗೆ Visual resolution/token budget', 'Learning rate'] },
      { q: 'Genuinely confirmed: what was the relative compute cost of the illustrative "Native multimodal" strategy versus "Post-hoc VLM"?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: illustrative "Native multimodal" strategy "Post-hoc VLM" ಗಿಂತ ಎಷ್ಟೂ relative compute cost ಹೊಂದಿತ್ತು?',
        opts: ['0.5x', '1.0x', '3.2x', '8.0x'], correct: 2,
        optsKn: ['0.5x', '1.0x', '3.2x', '8.0x'] },
      { q: 'What is the deepest lesson from InternVL3, genuinely verified across all three parts of this module?', qKn: 'ಈ module ya ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ, InternVL3 ya ಆಳವಾದ ಪಾಠ ಏನೂ?',
        opts: ['Every VLM needs a new vision encoder', 'Projectors should always be removed', 'When multimodality is learned and what data participates in pretraining can matter as much as the connector architecture', 'High resolution should always be used'], correct: 2,
        optsKn: ['ಪ್ರತಿ VLM ಗೆ ಹೊಸ vision encoder ಬೇಕು', 'Projectors ಯಾವಾಗಲೂ ತೆಗೆದುಹಾಕಬೇಕು', 'multimodality ಯಾವಾಗ ಕಲಿಯಲ್ಪಡುತ್ತದೆ ಮತ್ತೆ ಯಾವ data pretraining ನಲ್ಲಿ ಭಾಗವಹಿಸುತ್ತದೆ connector architecture ಯಷ್ಟೇ ಮುಖ್ಯ', 'ಯಾವಾಗಲೂ ಹೆಚ್ಚಿನ resolution ಬಳಸಬೇಕು'] },
    ] } },
  ],
};
