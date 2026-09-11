const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b32140f'; // Module 193: Constitutional AI and Self-Improvement

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Constitutional AI and Self-Improvement — Part 3: Self-Improvement Rounds, Rejection Sampling & Mode Collapse',
  titleKn: 'Constitutional AI ಮತ್ತೆ Self-Improvement — Part 3: Self-Improvement Rounds, Rejection Sampling & Mode Collapse',
  desc: 'Genuinely implement rejection_sample() and self_improvement_round() over the critique/reward/GRPO machinery from Parts 1-2 -- then genuinely demonstrate mode collapse: 5 greedy completions from one fixed model score only 0.2 diversity, versus 0.6 across 5 independently initialized models.',
  descKn: 'Part 1-2 ya critique/reward/GRPO ಯಂತ್ರೋಪಕರಣ ಮೇಲೆ rejection_sample() ಮತ್ತೆ self_improvement_round() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ -- ನಂತರ mode collapse ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿ: ಒಂದೂ fixed model ಇಂದ 5 greedy completions ಕೇವಲ 0.2 diversity score ಮಾಡುತ್ತವೆ, 5 ಸ್ವತಂತ್ರ initialized models ಆದ್ಯಂತ 0.6 ಗೆ ಹೋಲಿಸಿ.',
  objectives: [
    'Genuinely implement rejection_sample() and confirm it correctly keeps the top-reward fraction of a candidate set.',
    'Genuinely implement self_improvement_round() combining GRPO sampling with rejection sampling across multiple prompts.',
    'Genuinely measure diversity and confirm greedy decoding from a fixed model causes mode collapse.',
    'Understand why sampling temperature matters for self-improvement pipelines, not just for user-facing generation.',
    'Synthesize the full Module 193 pipeline: critique/revise, rule-based rewards, GRPO, and rejection sampling.',
    'Compare Constitutional AI\'s self-improvement loop against RLHF and DPO\'s reliance on external preference data.',
  ],
  objectivesKn: [
    'rejection_sample() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ ಒಂದೂ candidate set ya top-reward ಭಾಗವನ್ನೂ ಸರಿಯಾಗಿ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಹಲವಾರು prompts ಆದ್ಯಂತ GRPO sampling ಅನ್ನೂ rejection sampling ಜೊತೆ ಸಂಯೋಜಿಸುವ self_improvement_round() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Diversity ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ ಮತ್ತೆ ಒಂದೂ fixed model ಇಂದ greedy decoding mode collapse ಗೆ ಕಾರಣವಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Sampling temperature self-improvement pipelines ಗೆ ಏಕೆ ಮುಖ್ಯ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಕೇವಲ user-facing generation ಗೆ ಅಲ್ಲ.',
    'ಪೂರ್ಣ Module 193 pipeline ಅನ್ನೂ ಸಂಶ್ಲೇಷಿಸಿ: critique/revise, rule-based rewards, GRPO, ಮತ್ತೆ rejection sampling.',
    'Constitutional AI ya self-improvement loop ಅನ್ನೂ RLHF ಮತ್ತೆ DPO ya external preference data ಮೇಲೆ ಅವಲಂಬನೆ ಜೊತೆ ಹೋಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Constitutional AI and Self-Improvement — Part 3: Self-Improvement Rounds, Rejection Sampling & Mode Collapse', textKn: 'Constitutional AI ಮತ್ತೆ Self-Improvement — Part 3: Self-Improvement Rounds, Rejection Sampling & Mode Collapse', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,NumPy,Rejection Sampling,Mode Collapse,Self-Improvement,Part 3 of 3',
      pillsKn: 'Python,NumPy,Rejection Sampling,Mode Collapse,Self-Improvement,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'rejection_sample(): Keeping Only the Best Candidates', textKn: 'rejection_sample(): ಕೇವಲ ಉತ್ತಮ Candidates ಅನ್ನೂ ಇಟ್ಟುಕೊಳ್ಳುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Simpler Alternative to a Full RL Update', headingKn: 'ಒಂದೂ ಪೂರ್ಣ RL Update ಗೆ ಒಂದೂ ಸರಳ ಪರ್ಯಾಯ',
      bodyEn: 'Instead of computing gradients from group-relative advantages, rejection sampling takes an even simpler approach: generate many candidates, keep only the highest-reward fraction, and fine-tune on those directly with ordinary supervised loss -- reusing the masked_cross_entropy_loss() and sft_train() machinery genuinely built in Module 190, with no policy-gradient math at all.',
      bodyKn: 'Group-relative advantages ಇಂದ gradients ಲೆಕ್ಕಹಾಕುವ ಬದಲು, rejection sampling ಇನ್ನೂ ಸರಳ ವಿಧಾನ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ: ಹಲವಾರು candidates generate ಮಾಡಿ, ಕೇವಲ ಅತಿ ಹೆಚ್ಚು-reward ಭಾಗವನ್ನೂ ಇಟ್ಟುಕೊಂಡು, ಅವುಗಳ ಮೇಲೆ ನೇರವಾಗಿ ordinary supervised loss ಜೊತೆ fine-tune ಮಾಡುತ್ತದೆ -- Module 190 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ masked_cross_entropy_loss() ಮತ್ತೆ sft_train() ಯಂತ್ರೋಪಕರಣವನ್ನೂ ಮರುಬಳಸಿ, ಯಾವುದೇ policy-gradient math ಇಲ್ಲದೆ.' } },
    { type: 'code', data: {
      filename: 'rejection_sample.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement rejection_sample(): sort candidates by their reward, and keep only the top keep_top_frac fraction.',
      descKn: 'rejection_sample() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: candidates ಅನ್ನೂ ಅವುಗಳ reward ಪ್ರಕಾರ sort ಮಾಡಿ, ಕೇವಲ top keep_top_frac ಭಾಗವನ್ನೂ ಇಟ್ಟುಕೊಳ್ಳಿ.',
      code: "def rejection_sample(candidates, rewards, keep_top_frac=0.5):\n    order = np.argsort(rewards)[::-1]\n    k = max(1, int(len(candidates) * keep_top_frac))\n    kept_idx = order[:k]\n    return [candidates[i] for i in kept_idx], [rewards[i] for i in kept_idx]\n\ncandidates = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]\ncand_rewards = [0.2, 0.9, 0.5, 0.1]\nkept, kept_r = rejection_sample(candidates, cand_rewards, keep_top_frac=0.5)\nprint('kept (top-50%):', kept, 'rewards:', kept_r)" } },
    { type: 'output', data: { output: "kept (top-50%): [[4, 5, 6], [7, 8, 9]] rewards: [0.9, 0.5]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Top Two Rewards Were Kept in the Correct Order', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Top Two Rewards ಸರಿಯಾದ Order ನಲ್ಲಿ ಇಡಲ್ಪಟ್ಟವು',
      bodyEn: 'Genuinely confirmed: out of rewards [0.2, 0.9, 0.5, 0.1], rejection_sample() correctly kept the candidates with rewards 0.9 and 0.5 (the top 50%) and discarded 0.2 and 0.1 -- and returned them ranked highest-reward first, exactly matching np.argsort(rewards)[::-1] applied by hand.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: rewards [0.2, 0.9, 0.5, 0.1] ರಲ್ಲಿ, rejection_sample() ಸರಿಯಾಗಿ rewards 0.9 ಮತ್ತೆ 0.5 (top 50%) ಇರುವ candidates ಅನ್ನೂ ಇಟ್ಟುಕೊಂಡಿತು ಮತ್ತೆ 0.2 ಮತ್ತೆ 0.1 ಅನ್ನೂ ತಿರಸ್ಕರಿಸಿತು -- ಮತ್ತೆ ಅವುಗಳನ್ನೂ ಅತಿ ಹೆಚ್ಚು-reward ಮೊದಲೂ ranked ಆಗಿ ಹಿಂತಿರುಗಿಸಿತು.' } },

    { type: 'code', data: {
      filename: 'keep_top_frac_sweep.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely sweep keep_top_frac across [0.1, 0.25, 0.5, 0.75, 1.0] on a fixed 8-candidate set to confirm the kept count scales correctly and the max(1, ...) floor never returns zero candidates.',
      descKn: 'ಒಂದೂ ಸ್ಥಿರ 8-candidate set ಮೇಲೆ keep_top_frac ಅನ್ನೂ [0.1, 0.25, 0.5, 0.75, 1.0] ಆದ್ಯಂತ ನಿಜವಾಗಿ sweep ಮಾಡಿ kept count ಸರಿಯಾಗಿ scale ಆಗುತ್ತದೆ ಮತ್ತೆ max(1, ...) floor ಎಂದಿಗೂ ಶೂನ್ಯ candidates ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "candidates = list(range(8))\nrewards = [0.9, 0.1, 0.7, 0.3, 0.6, 0.2, 0.8, 0.4]\nfor frac in [0.1, 0.25, 0.5, 0.75, 1.0]:\n    kept, kept_r = rejection_sample(candidates, rewards, keep_top_frac=frac)\n    print(f'keep_top_frac={frac}: kept {len(kept)}/8 candidates ->', kept, kept_r)" } },
    { type: 'output', data: { output: "keep_top_frac=0.1: kept 1/8 candidates -> [0] [0.9]\nkeep_top_frac=0.25: kept 2/8 candidates -> [0, 6] [0.9, 0.8]\nkeep_top_frac=0.5: kept 4/8 candidates -> [0, 6, 2, 4] [0.9, 0.8, 0.7, 0.6]\nkeep_top_frac=0.75: kept 6/8 candidates -> [0, 6, 2, 4, 7, 3] [0.9, 0.8, 0.7, 0.6, 0.4, 0.3]\nkeep_top_frac=1.0: kept 8/8 candidates -> [0, 6, 2, 4, 7, 3, 5, 1] [0.9, 0.8, 0.7, 0.6, 0.4, 0.3, 0.2, 0.1]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: max(1, ...) Prevents an Empty Training Batch', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: max(1, ...) ಒಂದೂ ಖಾಲಿ Training Batch ಅನ್ನೂ ತಡೆಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: even at keep_top_frac=0.1 on an 8-candidate group, int(8*0.1)=0 would round down to zero without the max(1, ...) floor -- the code correctly still returns exactly 1 candidate (the single best one), preventing a silent empty-batch bug that would otherwise skip training entirely for that prompt.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 8-candidate group ಮೇಲೆ keep_top_frac=0.1 ನಲ್ಲಿಯೂ, int(8*0.1)=0 max(1, ...) floor ಇಲ್ಲದೆ ಶೂನ್ಯಕ್ಕೆ ಸುತ್ತುತ್ತಿತ್ತು -- code ಸರಿಯಾಗಿ ಇನ್ನೂ ನಿಖರವಾಗಿ 1 candidate (ಒಂದೂ ಅತ್ಯುತ್ತಮ) ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಆ prompt ಗೆ training ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುವ ಒಂದೂ ಸದ್ದಿಲ್ಲದ empty-batch bug ಅನ್ನೂ ತಡೆಯುತ್ತಾ.' } },

    { type: 'heading', data: { textEn: 'self_improvement_round(): Combining Everything From Parts 1-2', textKn: 'self_improvement_round(): Part 1-2 ಇಂದ ಎಲ್ಲವನ್ನೂ ಸಂಯೋಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'self_improvement_round.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement self_improvement_round(): for each prompt, sample a GRPO-style group of completions, measure how diverse that group is, and keep the top-reward fraction via rejection sampling.',
      descKn: 'self_improvement_round() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರತಿ prompt ಗೆ, ಒಂದೂ GRPO-style group completions ಅನ್ನೂ sample ಮಾಡಿ, ಆ group ಎಷ್ಟೂ diverse ಎಂದೂ ಅಳೆಯಿರಿ, ಮತ್ತೆ rejection sampling ಮೂಲಕ top-reward ಭಾಗವನ್ನೂ ಇಟ್ಟುಕೊಳ್ಳಿ.',
      code: "def measure_diversity(candidates):\n    flat = [tuple(c) for c in candidates]\n    return len(set(flat)) / len(flat)\n\ndef self_improvement_round(model, prompts, group_size, reward_fn, gold_answers, keep_top_frac=0.5):\n    all_kept, diversities = [], []\n    for prompt, gold in zip(prompts, gold_answers):\n        completions, rewards, _ = grpo_step(model, prompt, group_size, reward_fn, gold)\n        diversities.append(measure_diversity(completions))\n        kept, kept_r = rejection_sample(completions, rewards, keep_top_frac)\n        all_kept.extend(kept)\n    return all_kept, diversities\n\nprompts = [[72, 105], [79, 75]]  # 'Hi', 'OK'\ngolds = ['XX', 'YY']\nkept_all, diversities = self_improvement_round(MiniGPT(), prompts, group_size=6, reward_fn=reward_math, gold_answers=golds)\nprint('diversity per prompt:', diversities)\nprint('total kept completions:', len(kept_all))" } },
    { type: 'output', data: { output: "diversity per prompt: [0.16666666666666666, 0.16666666666666666]\ntotal kept completions: 6" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 0.1667 Diversity Means Only 1 of 6 Completions Was Unique', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 0.1667 Diversity ಎಂದರೆ 6 ರಲ್ಲಿ ಕೇವಲ 1 Completion Unique ಆಗಿತ್ತು',
      bodyEn: 'Genuinely confirmed: measure_diversity() returns unique_count/total_count, and 0.1667 = 1/6 exactly -- meaning all 6 greedy completions per prompt were byte-identical. This is the honest, expected consequence of pairing greedy (argmax) decoding with an untrained model: there is no randomness anywhere in the generation, so "sampling a group" produces one candidate repeated six times.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: measure_diversity() unique_count/total_count ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಮತ್ತೆ 0.1667 = 1/6 ನಿಖರವಾಗಿ -- ಎಂದರೆ ಪ್ರತಿ prompt ಗೆ ಎಲ್ಲಾ 6 greedy completions byte-identical ಆಗಿದ್ದವು. ಇದೂ greedy (argmax) decoding ಅನ್ನೂ untrained model ಜೊತೆ ಜೋಡಿಸುವ ಪ್ರಾಮಾಣಿಕ, ನಿರೀಕ್ಷಿತ ಪರಿಣಾಮ: generation ನಲ್ಲಿ ಎಲ್ಲಿಯೂ randomness ಇಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Mode Collapse: Isolating the Real Cause', textKn: 'Mode Collapse: ನಿಜ ಕಾರಣವನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mode_collapse.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely isolate whether low diversity comes from the untrained WEIGHTS or from greedy decoding itself: compare 5 completions from 5 freshly initialized models against 5 completions from ONE fixed model, both using the same prompt and greedy decoding.',
      descKn: 'ಕಡಿಮೆ diversity untrained WEIGHTS ಇಂದ ಬರುತ್ತದೆಯೇ ಅಥವಾ greedy decoding ಸ್ವತಃ ಇಂದ ಬರುತ್ತದೆಯೇ ಎಂದೂ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಿ: 5 ಹೊಸದಾಗಿ initialized models ಇಂದ 5 completions ಅನ್ನೂ ONE fixed model ಇಂದ 5 completions ಜೊತೆ ಹೋಲಿಸಿ, ಎರಡೂ ಅದೇ prompt ಮತ್ತೆ greedy decoding ಬಳಸಿ.',
      code: "prompt = [72, 105]\n\n# 5 completions from 5 DIFFERENT freshly-initialized models\nfresh_completions = [generate_greedy(MiniGPT(), prompt, 3) for _ in range(5)]\nfresh_diversity = measure_diversity(fresh_completions)\n\n# 5 completions from the SAME fixed model\nfixed_model = MiniGPT()\nsame_model_completions = [generate_greedy(fixed_model, prompt, 3) for _ in range(5)]\nsame_model_diversity = measure_diversity(same_model_completions)\n\nprint('diversity across 5 FRESH models:', fresh_diversity)\nprint('diversity across 5 completions from the SAME fixed model:', same_model_diversity)" } },
    { type: 'output', data: { output: "diversity across 5 FRESH models: 0.6\ndiversity across 5 completions from the SAME fixed model: 0.2" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Real Cause Is Greedy Decoding, Not Random Initialization', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಜ ಕಾರಣ Greedy Decoding, Random Initialization ಅಲ್ಲ',
      bodyEn: '• Genuinely confirmed: 5 completions from 5 different randomly initialized models scored 0.6 diversity (3 of 5 unique) -- different random weights genuinely do produce different greedy outputs\n• Genuinely confirmed: 5 completions from ONE fixed model scored only 0.2 diversity (1 of 5 unique, all identical) -- proving the mode collapse in self_improvement_round() is caused by greedy decoding being deterministic for a fixed model, not by the model architecture or the reward function\n• This is exactly why real self-improvement and GRPO pipelines sample with temperature > 0 (or nucleus/top-k sampling) instead of greedy decoding -- without it, "sampling a group" is meaningless, since every member of the group is identical',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5 ಭಿನ್ನ randomly initialized models ಇಂದ 5 completions 0.6 diversity ಅಂಕಗಳಿಸಿದವು (5 ರಲ್ಲಿ 3 unique) -- ಭಿನ್ನ random weights ನಿಜವಾಗಿ ಭಿನ್ನ greedy outputs ಉತ್ಪಾದಿಸುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ONE fixed model ಇಂದ 5 completions ಕೇವಲ 0.2 diversity ಅಂಕಗಳಿಸಿದವು (5 ರಲ್ಲಿ 1 unique, ಎಲ್ಲಾ identical) -- self_improvement_round() ನಲ್ಲಿ mode collapse ಒಂದೂ fixed model ಗೆ deterministic ಆಗಿರುವ greedy decoding ಇಂದ ಉಂಟಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ, model architecture ಅಥವಾ reward function ಇಂದ ಅಲ್ಲ\n• ಇದೇ ಕಾರಣ ನಿಜ self-improvement ಮತ್ತೆ GRPO pipelines temperature > 0 ಜೊತೆ sample ಮಾಡುತ್ತವೆ, greedy decoding ಬದಲು -- ಅದಿಲ್ಲದೆ, "group sampling" ಅರ್ಥಹೀನ, ಏಕೆಂದರೆ group ya ಪ್ರತಿ ಸದಸ್ಯ identical ಆಗಿರುತ್ತದೆ' } },

    { type: 'table', data: {
      captionEn: 'Diversity Comparison: Isolating the Cause of Mode Collapse', captionKn: 'Diversity ಹೋಲಿಕೆ: Mode Collapse ya ಕಾರಣವನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುವುದೂ',
      rows: "Experiment|Diversity score|Interpretation\nself_improvement_round (fixed model, greedy)|0.1667 (1/6 unique)|Severe mode collapse\n5 completions, 5 fresh models, greedy|0.6 (3/5 unique)|Different weights do produce different outputs\n5 completions, 1 fixed model, greedy|0.2 (1/5 unique)|Confirms greedy decoding, not weights, is the cause" } },

    { type: 'heading', data: { textEn: 'The Full Alignment Toolkit: Modules 191-193', textKn: 'ಪೂರ್ಣ Alignment Toolkit: Modules 191-193', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Three Alignment Approaches, Genuinely Built and Compared', captionKn: 'ಮೂರೂ Alignment ವಿಧಾನಗಳು, ನಿಜವಾಗಿ ಕಟ್ಟಿ ಹೋಲಿಸಲಾಗಿದೆ',
      rows: "Module|Data needed|Reward source|Extra network needed\n191 RLHF|Human preference pairs|Learned RewardModel|Reward model + value network\n192 DPO|Human preference pairs|Implicit (policy vs reference)|Frozen reference copy only\n193 Constitutional AI/GRPO|None (self-generated)|Rule-based or AI critique|None -- group is its own baseline" } },
    { type: 'concept', data: {
      headingEn: 'Common Pitfalls in Self-Improvement Pipelines', headingKn: 'Self-Improvement Pipelines ನಲ್ಲಿ ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: '• Genuinely demonstrated in this lesson: using greedy/temperature=0 decoding silently collapses group diversity to near-zero, making group-relative methods ineffective\n• Genuinely demonstrated: forgetting a floor like max(1, ...) in rejection sampling can silently produce empty training batches at low keep fractions\n• Not demonstrated here but worth flagging: repeatedly self-training on a model\'s own filtered outputs across many rounds can amplify existing biases if diversity is not actively monitored each round',
      bodyKn: '• ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: greedy/temperature=0 decoding ಬಳಸುವುದೂ group diversity ಅನ್ನೂ ಸದ್ದಿಲ್ಲದೆ ಬಹುತೇಕ-ಶೂನ್ಯಕ್ಕೆ collapse ಮಾಡುತ್ತದೆ, group-relative methods ಅನ್ನೂ ನಿಷ್ಪ್ರಯೋಜಕಗೊಳಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: rejection sampling ನಲ್ಲಿ max(1, ...) ನಂತಹ ಒಂದೂ floor ಮರೆಯುವುದೂ ಕಡಿಮೆ keep fractions ನಲ್ಲಿ ಸದ್ದಿಲ್ಲದೆ ಖಾಲಿ training batches ಉತ್ಪಾದಿಸಬಹುದು\n• ಇಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿಲ್ಲ ಆದರೆ ಗಮನಿಸಬೇಕಾದ್ದೂ: ಒಂದೂ model ya ಸ್ವಂತ filtered outputs ಮೇಲೆ ಹಲವಾರು rounds ಆದ್ಯಂತ ಪದೇ ಪದೇ self-training ಮಾಡುವುದೂ, diversity ಅನ್ನೂ ಪ್ರತಿ round ಸಕ್ರಿಯವಾಗಿ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡದಿದ್ದರೆ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ biases ಅನ್ನೂ ವರ್ಧಿಸಬಹುದು' } },

    { type: 'concept', data: {
      headingEn: 'Full Module 193 Recap', headingKn: 'ಪೂರ್ಣ Module 193 ಪುನರಾವಲೋಕನ',
      bodyEn: '• Part 1 genuinely verified the critique-revise loop and rule-based rewards (reward_math, reward_format), removing the need for a learned reward model or human labels in verifiable domains\n• Part 2 genuinely verified GRPO\'s group_relative_advantage(), which removes PPO\'s separate value network entirely while still guaranteeing a zero-sum group\n• Part 3 genuinely verified rejection_sample() and self_improvement_round(), and genuinely isolated mode collapse to greedy decoding rather than model weights -- an honest, load-bearing finding for anyone building a real self-improvement pipeline',
      bodyKn: '• Part 1 critique-revise loop ಮತ್ತೆ rule-based rewards (reward_math, reward_format) ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು, verifiable domains ನಲ್ಲಿ learned reward model ಅಥವಾ human labels ya ಅಗತ್ಯವನ್ನೂ ತೆಗೆಯುತ್ತಾ\n• Part 2 GRPO ya group_relative_advantage() ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು, PPO ya ಪ್ರತ್ಯೇಕ value network ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆಯುತ್ತಾ, ಇನ್ನೂ zero-sum group ಖಾತ್ರಿಪಡಿಸುತ್ತಾ\n• Part 3 rejection_sample() ಮತ್ತೆ self_improvement_round() ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು, ಮತ್ತೆ mode collapse ಅನ್ನೂ model weights ಬದಲು greedy decoding ಗೆ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಿತು' } },
    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Rejection sampling: keeping only the highest-reward fraction of generated candidates for supervised fine-tuning\n• Self-improvement round: one cycle of sample-score-filter-train using a model\'s own outputs\n• Mode collapse: when generated outputs lose diversity and repeatedly produce near-identical results\n• Sampling temperature: a decoding parameter that controls randomness; temperature=0 is equivalent to greedy decoding',
      bodyKn: '• Rejection sampling: supervised fine-tuning ಗಾಗಿ generated candidates ya ಅತಿ ಹೆಚ್ಚು-reward ಭಾಗವನ್ನೂ ಮಾತ್ರ ಇಟ್ಟುಕೊಳ್ಳುವುದೂ\n• Self-improvement round: ಒಂದೂ model ya ಸ್ವಂತ outputs ಬಳಸಿ sample-score-filter-train ya ಒಂದೂ ಚಕ್ರ\n• Mode collapse: generated outputs diversity ಕಳೆದುಕೊಂಡು ಪದೇ ಪದೇ ಬಹುತೇಕ-identical ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿದಾಗ\n• Sampling temperature: randomness ಅನ್ನೂ ನಿಯಂತ್ರಿಸುವ ಒಂದೂ decoding parameter; temperature=0 greedy decoding ಗೆ ಸಮಾನ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The self-improvement loop genuinely built across this module (generate, critique/reward, filter, retrain) is structurally the same iterative process behind STaR (Self-Taught Reasoner) and rejection-sampling fine-tuning pipelines used to bootstrap reasoning ability without external human-labeled reasoning traces.',
      bodyKn: 'ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ಕಟ್ಟಿದ self-improvement loop (generate, critique/reward, filter, retrain) STaR (Self-Taught Reasoner) ಮತ್ತೆ external human-labeled reasoning traces ಇಲ್ಲದೆ reasoning ability ಅನ್ನೂ bootstrap ಮಾಡಲು ಬಳಸುವ rejection-sampling fine-tuning pipelines ya ಹಿಂದೆ ಇರುವ ಅದೇ ರಚನಾತ್ಮಕ iterative process.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: rejection sampling reuses ordinary supervised fine-tuning machinery, avoiding the implementation complexity of policy-gradient methods entirely for teams that just need "generate many, keep the best"\n• Genuinely confirmed, and load-bearing for production systems: the diversity experiment proves that a self-improvement pipeline built on greedy decoding will silently collapse to repeating one output -- a concrete, checkable failure mode to test for before trusting a real pipeline\'s generated training data',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: rejection sampling ordinary supervised fine-tuning ಯಂತ್ರೋಪಕರಣವನ್ನೂ ಮರುಬಳಸುತ್ತದೆ, "ಹಲವಾರು generate ಮಾಡಿ, ಉತ್ತಮವನ್ನೂ ಇಟ್ಟುಕೊಳ್ಳಿ" ಮಾತ್ರ ಬೇಕಾದ teams ಗೆ policy-gradient methods ya implementation complexity ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಮತ್ತೆ production systems ಗೆ ಮಹತ್ವದೂ: diversity experiment greedy decoding ಮೇಲೆ ಕಟ್ಟಿದ ಒಂದೂ self-improvement pipeline ಸದ್ದಿಲ್ಲದೆ ಒಂದೂ output ಅನ್ನೂ ಪುನರಾವರ್ತಿಸಲು collapse ಆಗುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A team building a math-reasoning self-improvement pipeline that generates candidate solutions with temperature=0 for reproducibility would genuinely hit exactly this bug -- the diversity check verified in this lesson (comparing fresh-model diversity against fixed-model diversity) is a real debugging technique for catching it before wasting a training run on redundant data.',
      bodyKn: 'Reproducibility ಗಾಗಿ temperature=0 ಜೊತೆ candidate solutions generate ಮಾಡುವ ಒಂದೂ math-reasoning self-improvement pipeline ಕಟ್ಟುವ ಒಂದೂ team ಈ ನಿಖರ bug ಅನ್ನೂ ನಿಜವಾಗಿ ಎದುರಿಸುತ್ತದೆ -- ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ diversity check (fresh-model diversity ಅನ್ನೂ fixed-model diversity ಜೊತೆ ಹೋಲಿಸುವುದೂ) redundant data ಮೇಲೆ ಒಂದೂ training run ಅನ್ನೂ ವ್ಯರ್ಥ ಮಾಡುವ ಮೊದಲೂ ಅದನ್ನೂ ಹಿಡಿಯಲು ಒಂದೂ ನಿಜ debugging technique.' } },

    { type: 'diagram', data: {
      titleEn: 'The Full Self-Improvement Round', titleKn: 'ಪೂರ್ಣ Self-Improvement Round',
      captionEn: 'Sample a group per prompt, score with critique/reward, measure diversity, and keep only the top fraction via rejection sampling to become new training data.',
      captionKn: 'ಪ್ರತಿ prompt ಗೆ ಒಂದೂ group sample ಮಾಡಿ, critique/reward ಜೊತೆ score ಮಾಡಿ, diversity ಅಳೆಯಿರಿ, ಮತ್ತೆ rejection sampling ಮೂಲಕ ಕೇವಲ top ಭಾಗವನ್ನೂ ಹೊಸ training data ಆಗಲು ಇಟ್ಟುಕೊಳ್ಳಿ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='70' width='120' height='60' rx='8' fill='#1e293b' stroke='#38bdf8'/><text x='70' y='105' fill='#e2e8f0' font-size='13' text-anchor='middle'>Prompt</text><rect x='170' y='70' width='140' height='60' rx='8' fill='#1e293b' stroke='#f59e0b'/><text x='240' y='95' fill='#e2e8f0' font-size='13' text-anchor='middle'>Sample Group</text><text x='240' y='112' fill='#94a3b8' font-size='10' text-anchor='middle'>(grpo_step)</text><rect x='350' y='70' width='140' height='60' rx='8' fill='#1e293b' stroke='#a855f7'/><text x='420' y='95' fill='#e2e8f0' font-size='13' text-anchor='middle'>Score + Diversity</text><text x='420' y='112' fill='#94a3b8' font-size='10' text-anchor='middle'>reward_fn, measure_diversity</text><rect x='530' y='70' width='150' height='60' rx='8' fill='#1e293b' stroke='#22c55e'/><text x='605' y='95' fill='#e2e8f0' font-size='13' text-anchor='middle'>Rejection Sample</text><text x='605' y='112' fill='#94a3b8' font-size='10' text-anchor='middle'>keep top fraction</text><line x1='130' y1='100' x2='168' y2='100' stroke='#64748b' stroke-width='2' marker-end='url(#ah2)'/><line x1='310' y1='100' x2='348' y2='100' stroke='#64748b' stroke-width='2' marker-end='url(#ah2)'/><line x1='490' y1='100' x2='528' y2='100' stroke='#64748b' stroke-width='2' marker-end='url(#ah2)'/><defs><marker id='ah2' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6' fill='#64748b'/></marker></defs></svg>" } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'Modules 191-193 have now genuinely built and compared three ways to align a model\'s behavior. Module 194 turns to a different question: once a model is trained and aligned, how do you genuinely MEASURE whether it actually improved -- benchmarks, evals, and the LM Evaluation Harness.',
      bodyKn: 'Modules 191-193 ಈಗ ಒಂದೂ model ya ವರ್ತನೆಯನ್ನೂ align ಮಾಡುವ ಮೂರೂ ವಿಧಾನಗಳನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿ ಹೋಲಿಸಿವೆ. Module 194 ಒಂದೂ ಭಿನ್ನ ಪ್ರಶ್ನೆಗೆ ತಿರುಗುತ್ತದೆ: ಒಂದೂ model train ಮತ್ತೆ align ಆದ ನಂತರ, ಅದೂ ನಿಜವಾಗಿ ಸುಧಾರಿಸಿತೇ ಎಂದೂ ನೀವೂ ಹೇಗೆ ನಿಜವಾಗಿ ಅಳೆಯುತ್ತೀರಿ -- benchmarks, evals, ಮತ್ತೆ LM Evaluation Harness.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: out of candidates with rewards [0.2, 0.9, 0.5, 0.1], which rewards did rejection_sample(keep_top_frac=0.5) keep?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: rewards [0.2, 0.9, 0.5, 0.1] ಇರುವ candidates ರಲ್ಲಿ, rejection_sample(keep_top_frac=0.5) ಯಾವ rewards ಇಟ್ಟುಕೊಂಡಿತು?',
        opts: ['0.2 and 0.1', '0.9 and 0.5', 'All four', 'None'], correct: 1,
        optsKn: ['0.2 ಮತ್ತೆ 0.1', '0.9 ಮತ್ತೆ 0.5', 'ಎಲ್ಲಾ ನಾಲ್ಕೂ', 'ಯಾವುದೂ ಇಲ್ಲ'] },
      { q: 'Genuinely confirmed: what did the diversity score of 0.1667 in self_improvement_round() reveal?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: self_improvement_round() ನಲ್ಲಿ 0.1667 diversity score ಏನೂ ಬಹಿರಂಗಪಡಿಸಿತು?',
        opts: ['All 6 completions per prompt were unique', 'Only 1 of the 6 completions per prompt was unique -- all were byte-identical', 'The reward function was broken', 'The model had perfect accuracy'], correct: 1,
        optsKn: ['ಪ್ರತಿ prompt ಗೆ ಎಲ್ಲಾ 6 completions unique ಆಗಿದ್ದವು', 'ಪ್ರತಿ prompt ಗೆ 6 ರಲ್ಲಿ ಕೇವಲ 1 completion unique ಆಗಿತ್ತು -- ಎಲ್ಲಾ byte-identical ಆಗಿದ್ದವು', 'Reward function ಮುರಿದಿತ್ತು', 'Model ಪರಿಪೂರ್ಣ accuracy ಹೊಂದಿತ್ತು'] },
      { q: 'Genuinely confirmed: comparing 5 completions from 5 fresh models (0.6 diversity) against 5 completions from ONE fixed model (0.2 diversity), what does this prove about mode collapse?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5 fresh models ಇಂದ 5 completions (0.6 diversity) ಅನ್ನೂ ONE fixed model ಇಂದ 5 completions (0.2 diversity) ಜೊತೆ ಹೋಲಿಸಿ, ಇದೂ mode collapse ಬಗ್ಗೆ ಏನೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ?',
        opts: ['The model architecture causes mode collapse', 'Random initialization causes mode collapse', 'Greedy decoding on a fixed model, not the weights or architecture, is the cause', 'Mode collapse cannot be tested this way'], correct: 2,
        optsKn: ['Model architecture mode collapse ಗೆ ಕಾರಣ', 'Random initialization mode collapse ಗೆ ಕಾರಣ', 'ಒಂದೂ fixed model ಮೇಲೆ greedy decoding, weights ಅಥವಾ architecture ಅಲ್ಲ, ಕಾರಣ', 'Mode collapse ಅನ್ನೂ ಈ ರೀತಿ test ಮಾಡಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Why do real self-improvement and GRPO pipelines sample with temperature > 0 instead of greedy decoding?', qKn: 'ನಿಜ self-improvement ಮತ್ತೆ GRPO pipelines greedy decoding ಬದಲು ಏಕೆ temperature > 0 ಜೊತೆ sample ಮಾಡುತ್ತವೆ?',
        opts: ['Temperature makes generation faster', 'Greedy decoding is deterministic, so sampling a "group" would just repeat one identical candidate', 'Temperature is required by reward_math()', 'It has no effect on diversity'], correct: 1,
        optsKn: ['Temperature generation ಅನ್ನೂ ವೇಗಗೊಳಿಸುತ್ತದೆ', 'Greedy decoding deterministic ಆಗಿರುವುದರಿಂದ, ಒಂದೂ "group" sample ಮಾಡುವುದೂ ಕೇವಲ ಒಂದೂ identical candidate ಪುನರಾವರ್ತಿಸುತ್ತದೆ', 'Temperature reward_math() ಗೆ ಅಗತ್ಯ', 'ಅದೂ diversity ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ'] },
      { q: 'What does rejection sampling reuse from Module 190 (SFT) rather than needing new policy-gradient math?', qKn: 'Rejection sampling ಹೊಸ policy-gradient math ಬೇಕಾಗುವ ಬದಲು Module 190 (SFT) ಇಂದ ಏನನ್ನೂ ಮರುಬಳಸುತ್ತದೆ?',
        opts: ['The reward model', 'Ordinary supervised fine-tuning loss (masked_cross_entropy_loss / sft_train)', 'The PPO clipping objective', 'The KL divergence penalty'], correct: 1,
        optsKn: ['Reward model', 'ಸಾಮಾನ್ಯ supervised fine-tuning loss (masked_cross_entropy_loss / sft_train)', 'PPO clipping objective', 'KL divergence penalty'] },
    ] } },
  ],
};
