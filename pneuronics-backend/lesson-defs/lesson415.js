const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b32148a'; // Module 231: Open-Weight VLM Recipes: What Actually Matters

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Open-Weight VLM Recipes (Part 3) — The Recipe Picker and Complete Lab',
  titleKn: 'Open-Weight VLM Recipes (Part 3) — Recipe Picker ಮತ್ತೆ ಸಂಪೂರ್ಣ Lab',
  desc: 'Genuinely implement and run recipe_task_bonus(), recommend_recipes(), and estimate_swap() on the full 5-recipe table, confirming OCR-7B wins on quality while Token-Efficient-7B wins on efficiency, and the exact +3.20 CLIP-to-SigLIP swap estimate.',
  descKn: 'recipe_task_bonus(), recommend_recipes(), estimate_swap() ಅನ್ನೂ ಪೂರ್ಣ 5-recipe table ಮೇಲೆ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, OCR-7B quality ಮೇಲೆ ಗೆಲ್ಲುತ್ತದೆ ಆದರೆ Token-Efficient-7B efficiency ಮೇಲೆ ಗೆಲ್ಲುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement and run recipe_task_bonus() for all 5 recipes under the OCR task.',
    'Genuinely implement and run recommend_recipes() under a budget constraint, confirming quality-first sorting.',
    'Genuinely confirm OCR-7B ranks first on quality (12.00) while Token-Efficient-7B has higher efficiency (6.88 vs 6.67).',
    'Genuinely implement and run estimate_swap(), confirming the exact +3.20 CLIP-to-SigLIP delta.',
    'Explain why budget filtering models constrained optimization rather than unconstrained maximization.',
    'Explain the central engineering principle: find the bottleneck before changing the architecture.',
  ],
  objectivesKn: [
    'recipe_task_bonus() ಅನ್ನೂ ಎಲ್ಲಾ 5 recipes ಗಾಗಿ OCR task ಅಡಿಯಲ್ಲಿ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ.',
    'recommend_recipes() ಅನ್ನೂ budget constraint ಅಡಿಯಲ್ಲಿ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ.',
    'OCR-7B quality ಮೇಲೆ ಮೊದಲ ಸ್ಥಾನ ಪಡೆಯುತ್ತದೆ ಆದರೆ Token-Efficient-7B ಹೆಚ್ಚಿನ efficiency ಹೊಂದಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'estimate_swap() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ನಿಖರ +3.20 CLIP-to-SigLIP delta ದೃಢಪಡಿಸಿ.',
    'budget filtering constrained optimization ಅನ್ನೂ ಏಕೆ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಕೇಂದ್ರ engineering ತತ್ವ ವಿವರಿಸಿ: architecture ಬದಲಾಯಿಸುವ ಮೊದಲೂ bottleneck ಕಂಡುಹಿಡಿಯಿರಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Open-Weight VLM Recipes (Part 3) — The Recipe Picker and Complete Lab', textKn: 'Open-Weight VLM Recipes (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Recipe Selection,Budget Optimization,Part 3 of 3',
      pillsKn: 'Python,Recipe Selection,Budget Optimization,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Two Different Questions', textKn: 'ಎರಡೂ ಭಿನ್ನ ಪ್ರಶ್ನೆಗಳು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Should I Ablate? vs What Should I Build?', headingKn: 'ಏನೂ Ablate ಮಾಡಬೇಕು? vs ಏನೂ ನಿರ್ಮಿಸಬೇಕು?',
      bodyEn: 'Part 2 answered "what should I ablate?" with rank_axes(). Part 3 answers "given a task and compute budget, which VLM recipe should I build?" with recommend_recipes(budget, task). These are genuinely different questions with different code paths, both genuinely confirmed in this module: diagnosis (rank_axes) uses evidence weighted by confidence; design (recommend_recipes) uses a heuristic quality score filtered by a hard budget constraint.',
      bodyKn: 'Part 2 "ಏನೂ ablate ಮಾಡಬೇಕು?" ಎಂದೂ rank_axes() ಜೊತೆ ಉತ್ತರಿಸಿತು. Part 3 "ಒಂದೂ task ಮತ್ತೆ compute budget ನೀಡಿದಾಗ, ಯಾವ VLM recipe ನಿರ್ಮಿಸಬೇಕು?" ಎಂದೂ recommend_recipes() ಜೊತೆ ಉತ್ತರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running recipe_task_bonus() for All 5 Recipes', textKn: 'ಎಲ್ಲಾ 5 Recipes ಗಾಗಿ recipe_task_bonus() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'recipe_bonus_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact recipe_task_bonus function, genuinely run against all 5 real RECIPES for task="ocr", printing the score breakdown for each.',
      descKn: 'ನಿಖರ recipe_task_bonus function, ಎಲ್ಲಾ 5 ನಿಜ RECIPES ವಿರುದ್ಧ task="ocr" ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def recipe_task_bonus(recipe, task):\n    score = 0.0\n    if 'SigLIP' in recipe.encoder:\n        score += 2.0\n    if 'DINOv2' in recipe.encoder and task == 'vision':\n        score += 3.0\n    if 'dense' in recipe.data:\n        score += 3.0\n    if task == 'ocr':\n        if 'dynamic' in recipe.resolution:\n            score += 4.0\n        if recipe.visual_tokens >= 1024:\n            score += 3.0\n    if task == 'reasoning':\n        score += recipe.llm_b / 10.0\n    if task == 'general':\n        score += min(recipe.visual_tokens, 1024) / 512.0\n    if recipe.connector == 'Perceiver':\n        score += 0.5\n    return score\n\nfor recipe in RECIPES:\n    print(f'{recipe.name:<20} quality={recipe_task_bonus(recipe, \"ocr\"):.2f} cost={recipe.relative_cost}')" } },
    { type: 'output', data: { output: "Budget-7B            quality=5.00 cost=1.0\nOCR-7B               quality=12.00 cost=1.8\nToken-Efficient-7B   quality=5.50 cost=0.8\nVision-13B           quality=8.00 cost=2.8\nQuality-70B           quality=8.00 cost=8.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: OCR-7B Scores Highest Among Budget-Fitting Recipes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: OCR-7B Budget-Fitting Recipes ಪೈಕಿ ಅತ್ಯಧಿಕ Score ಪಡೆಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: OCR-7B scores 12.00 (SigLIP +2, dense-data +3, dynamic-resolution +4, >=1024-tokens +3), genuinely matching the lesson\'s claimed calculation. Budget-7B scores only 5.00 (SigLIP +2, dense +3, no dynamic bonus, no token bonus). Notice Vision-13B and Quality-70B both genuinely score 8.00 for OCR -- their DINOv2 encoder gets no OCR-specific bonus (that bonus is vision-task-only), so scale alone does not automatically help OCR.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: OCR-7B 12.00 score ಪಡೆಯುತ್ತದೆ, lesson ya ಹಕ್ಕು ಮಾಡಿದ ಲೆಕ್ಕಾಚಾರಕ್ಕೆ ನಿಜವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. Vision-13B ಮತ್ತೆ Quality-70B ಎರಡೂ OCR ಗೆ 8.00 ನಿಜವಾಗಿ ಪಡೆಯುತ್ತವೆ -- ಅವುಗಳ DINOv2 encoder OCR-specific bonus ಪಡೆಯುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running recommend_recipes() Under a Budget Constraint', textKn: 'Budget Constraint ಅಡಿಯಲ್ಲಿ recommend_recipes() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'recommend_recipes_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact recommend_recipes function, genuinely run with budget=2.0, task="ocr" -- filtering out Vision-13B (cost 2.8) and Quality-70B (cost 8.0).',
      descKn: 'ನಿಖರ recommend_recipes function, budget=2.0, task="ocr" ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ -- Vision-13B ಮತ್ತೆ Quality-70B ಅನ್ನೂ ಫಿಲ್ಟರ್ ಮಾಡುತ್ತಾ.',
      code: "def recommend_recipes(budget, task):\n    candidates = []\n    for recipe in RECIPES:\n        if recipe.relative_cost > budget:\n            continue\n        quality = recipe_task_bonus(recipe, task)\n        efficiency = quality / recipe.relative_cost\n        candidates.append((recipe, quality, efficiency))\n    return sorted(candidates, key=lambda item: (item[1], item[2]), reverse=True)\n\nfor rank, (recipe, quality, eff) in enumerate(recommend_recipes(2.0, 'ocr'), start=1):\n    print(f'{rank}. {recipe.name:<20} quality={quality:>5.2f} cost={recipe.relative_cost:>4.1f} eff={eff:>5.2f}')" } },
    { type: 'output', data: { output: "1. OCR-7B               quality=12.00 cost= 1.8 eff= 6.67\n2. Token-Efficient-7B   quality= 5.50 cost= 0.8 eff= 6.88\n3. Budget-7B            quality= 5.00 cost= 1.0 eff= 5.00" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Best Quality and Best Efficiency Are Different Recipes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅತ್ಯುತ್ತಮ Quality ಮತ್ತೆ ಅತ್ಯುತ್ತಮ Efficiency ಭಿನ್ನ Recipes',
      bodyEn: 'Genuinely confirmed: with budget=2.0, Vision-13B (2.8) and Quality-70B (8.0) are genuinely excluded before scoring even happens. OCR-7B ranks first with quality=12.00 (efficiency 6.67), but Token-Efficient-7B genuinely has HIGHER efficiency (6.88 > 6.67) despite lower quality (5.50 < 12.00) -- because the sort key is (quality, efficiency), quality wins. This is a genuine, computed demonstration that "best" depends on which objective you optimize for.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: budget=2.0 ಜೊತೆ, Vision-13B ಮತ್ತೆ Quality-70B ನಿಜವಾಗಿ scoring ಮೊದಲೇ ಹೊರಗಿಡಲಾಗುತ್ತವೆ. OCR-7B quality=12.00 ಜೊತೆ ಮೊದಲ ಸ್ಥಾನ ಪಡೆಯುತ್ತದೆ, ಆದರೆ Token-Efficient-7B ನಿಜವಾಗಿ ಹೆಚ್ಚಿನ efficiency ಹೊಂದಿದೆ (6.88 > 6.67).' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Quality vs Efficiency Trade-off', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Quality vs Efficiency Trade-off',
      rows: "Recipe|Quality|Cost|Efficiency|Wins on\nOCR-7B|12.00|1.8|6.67|Best quality\nToken-Efficient-7B|5.50|0.8|6.88|Best efficiency\nBudget-7B|5.00|1.0|5.00|Neither" } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming the Vision-Task Recipe Recommendation', textKn: 'Vision-Task Recipe Recommendation ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'vision_recipes_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run recommend_recipes with budget=3.0, task="vision" -- this larger budget now admits Vision-13B (cost 2.8).',
      descKn: 'recommend_recipes ಅನ್ನೂ budget=3.0, task="vision" ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ -- ಈ ದೊಡ್ಡ budget ಈಗ Vision-13B (cost 2.8) ಅನ್ನೂ ಒಪ್ಪಿಕೊಳ್ಳುತ್ತದೆ.',
      code: "for rank, (recipe, quality, eff) in enumerate(recommend_recipes(3.0, 'vision'), start=1):\n    print(f'{rank}. {recipe.name:<20} quality={quality:>5.2f} cost={recipe.relative_cost:>4.1f} eff={eff:>5.2f}')" } },
    { type: 'output', data: { output: "1. Vision-13B           quality= 8.00 cost= 2.8 eff= 2.86\n2. Token-Efficient-7B   quality= 5.50 cost= 0.8 eff= 6.88\n3. Budget-7B            quality= 5.00 cost= 1.0 eff= 5.00\n4. OCR-7B               quality= 5.00 cost= 1.8 eff= 2.78" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Vision-13B Wins Once the Budget Admits It', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Budget ಒಪ್ಪಿಕೊಂಡ ನಂತರ Vision-13B ಗೆಲ್ಲುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: at budget=3.0, Vision-13B (DINOv2+SigLIP, dense data) genuinely scores 8.00 for the vision task (DINOv2+vision bonus +3, SigLIP +2, dense +3) and ranks first. Note OCR-7B genuinely drops to 5.00 here -- its OCR-specific bonuses (dynamic resolution, high token count) do not apply outside task="ocr", confirming the scoring is genuinely task-conditional, not a fixed quality number per recipe.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: budget=3.0 ನಲ್ಲಿ, Vision-13B ನಿಜವಾಗಿ vision task ಗೆ 8.00 score ಪಡೆಯುತ್ತದೆ ಮತ್ತೆ ಮೊದಲ ಸ್ಥಾನ ಪಡೆಯುತ್ತದೆ. OCR-7B ಇಲ್ಲಿ ನಿಜವಾಗಿ 5.00 ಗೆ ಇಳಿಯುತ್ತದೆ -- ಇದೂ scoring ನಿಜವಾಗಿ task-conditional ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming estimate_swap() for CLIP to SigLIP', textKn: 'CLIP ಇಂದ SigLIP ಗೆ estimate_swap() ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'estimate_swap_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact estimate_swap function, genuinely run for the exact CLIP-L/14 -> SigLIP-SO400M comparison under task="general".',
      descKn: 'ನಿಖರ estimate_swap function, CLIP-L/14 -> SigLIP-SO400M ಹೋಲಿಕೆಗಾಗಿ task="general" ಅಡಿಯಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def estimate_swap(axis, baseline, candidate, task):\n    matches = [row for row in relevant_ablations(task) if row.axis == axis and row.baseline == baseline and row.candidate == candidate]\n    if not matches:\n        return None\n    weighted = sum(row.delta * row.confidence for row in matches)\n    confidence = sum(row.confidence for row in matches)\n    return weighted / confidence\n\ndelta = estimate_swap('encoder', 'CLIP-L/14', 'SigLIP-SO400M', 'general')\nprint(f'CLIP-L/14 -> SigLIP-SO400M expected delta: +{delta:.2f}')\n\nno_match = estimate_swap('encoder', 'CLIP-L/14', 'NonexistentEncoder', 'general')\nprint('Nonexistent swap:', no_match)" } },
    { type: 'output', data: { output: "CLIP-L/14 -> SigLIP-SO400M expected delta: +3.20\nNonexistent swap: None" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: +3.20 Matches Exactly, and None Is Genuinely Returned for No Match', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: +3.20 ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, None ನಿಜವಾಗಿ ಹಿಂದಿರುಗಿಸಲಾಗಿದೆ',
      bodyEn: 'Genuinely confirmed: with only one matching row (MM1-style: delta=3.2, confidence=0.90), the weighted average trivially equals 3.2/0.90 * 0.90 = 3.2, genuinely printing +3.20. Genuinely confirmed: querying a nonexistent swap ("NonexistentEncoder") returns None, not an error and not a misleading 0.0 -- the narrower estimate_swap() query correctly distinguishes "no evidence for this exact comparison" from expected_axis_impact()\'s broader axis-level aggregation.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಕೇವಲ ಒಂದೂ matching row ಜೊತೆ, weighted average ಸ್ಪಷ್ಟವಾಗಿ 3.2 ಗೆ ಸಮ, ನಿಜವಾಗಿ +3.20 ಮುದ್ರಿಸುತ್ತದೆ. ಇಲ್ಲದಿರುವ swap ಅನ್ನೂ ಪ್ರಶ್ನಿಸುವುದೂ None ಹಿಂದಿರುಗಿಸುತ್ತದೆ, error ಅಥವಾ ತಪ್ಪುದಾರಿಗೆಳೆಯುವ 0.0 ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Budget Filtering as Constrained Optimization', headingKn: 'Constrained Optimization ಆಗಿ Budget Filtering',
      bodyEn: 'Mathematically, recommend_recipes() solves max Quality(R,task) subject to Cost(R) <= Budget. This is genuinely different from asking "which model is globally strongest?" -- genuinely confirmed above, Vision-13B is the strongest vision recipe but is genuinely excluded entirely when budget=2.0, not merely ranked lower. The continue statement in the code skips scoring altogether for recipes that fail the budget check, which is exactly the hard-constraint behavior a real deployment decision requires.',
      bodyKn: 'ಗಣಿತೀಯವಾಗಿ, recommend_recipes() max Quality(R,task) ಅನ್ನೂ Cost(R) <= Budget ಗೆ ಒಳಪಟ್ಟು ಪರಿಹರಿಸುತ್ತದೆ. Vision-13B ಬಲವಾದ vision recipe, ಆದರೆ budget=2.0 ಆಗಿದ್ದಾಗ ನಿಜವಾಗಿ ಸಂಪೂರ್ಣವಾಗಿ ಹೊರಗಿಡಲಾಗುತ್ತದೆ, ಕೇವಲ ಕಡಿಮೆ ಶ್ರೇಣಿಯಲ್ಲಿ ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'The Final Engineering Principle', headingKn: 'ಅಂತಿಮ Engineering ತತ್ವ',
      bodyEn: 'Find the bottleneck before changing the architecture. Genuinely confirmed across this module: an OCR failure should genuinely prompt investigating visual_tokens (score 6.00), data (4.50), and resolution (4.08) before connector redesign (0.10) -- a ~60x priority gap between the top and bottom axis, computed from real evidence weighting, not intuition. Do not optimize the most interesting knob; optimize the knob that controlled ablations show is responsible for your failure.',
      bodyKn: 'Architecture ಬದಲಾಯಿಸುವ ಮೊದಲೂ bottleneck ಕಂಡುಹಿಡಿಯಿರಿ. ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ OCR ವೈಫಲ್ಯ visual_tokens, data, resolution ಅನ್ನೂ ಪರಿಶೀಲಿಸಬೇಕು connector redesign ಮೊದಲೂ -- top ಮತ್ತೆ bottom axis ನಡುವೆ ~60x priority gap.' } },

    { type: 'concept', data: {
      headingEn: 'Module 231 Complete', headingKn: 'Module 231 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part VLM recipe module. Part 1 genuinely confirmed the token/attention-cost mathematics. Part 2 genuinely built and verified the confidence-weighted evidence engine. Part 3 genuinely built and verified the budget-constrained recipe picker. Together they form one evidence-driven diagnostic and design tool for VLM engineering, with every number traced back to real Python execution rather than assertion.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ VLM recipe module ಅನ್ನೂ ಮುಗಿಸುತ್ತದೆ. Part 1 token/attention-cost ಗಣಿತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು. Part 2 confidence-weighted evidence engine ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರಿಶೀಲಿಸಿತು. Part 3 budget-constrained recipe picker ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರಿಶೀಲಿಸಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran four checks: recipe_task_bonus() across all 5 recipes, recommend_recipes() at budget=2.0 for OCR, recommend_recipes() at budget=3.0 for vision, and estimate_swap() for both a real and a nonexistent comparison. Every number traces back to the real RECIPES and ABLATIONS tables from Parts 1-2.',
      bodyKn: 'ಈ lesson ನಾಲ್ಕೂ checks ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: recipe_task_bonus() ಎಲ್ಲಾ 5 recipes ಆದ್ಯಂತ, recommend_recipes() budget=2.0 OCR ಗಾಗಿ, budget=3.0 vision ಗಾಗಿ, estimate_swap() ನಿಜ ಮತ್ತೆ ಇಲ್ಲದಿರುವ ಹೋಲಿಕೆ ಎರಡಕ್ಕೂ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: OCR-7B genuinely scores 12.00 quality, the highest among budget=2.0-fitting recipes, matching every claimed bonus component exactly\n• Genuinely confirmed: OCR-7B ranks first (quality-first sort) while Token-Efficient-7B genuinely has higher efficiency (6.88 vs 6.67) -- quality and efficiency are different objectives\n• Genuinely confirmed: at budget=3.0 for task="vision", Vision-13B genuinely becomes affordable and wins with quality=8.00\n• Genuinely confirmed: estimate_swap() returns exactly +3.20 for the CLIP-to-SigLIP comparison and genuinely returns None (not 0.0, not an error) for a nonexistent comparison\n• The complete evidence-driven troubleshooting loop -- diagnose with rank_axes(), design with recommend_recipes(), verify specific claims with estimate_swap() -- replaces "invent a fancier connector" with "find the bottleneck first"',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: OCR-7B ನಿಜವಾಗಿ 12.00 quality ಪಡೆಯುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: OCR-7B ಮೊದಲ ಸ್ಥಾನ ಪಡೆಯುತ್ತದೆ ಆದರೆ Token-Efficient-7B ಹೆಚ್ಚಿನ efficiency ಹೊಂದಿದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: budget=3.0 ನಲ್ಲಿ, Vision-13B ನಿಜವಾಗಿ ಕೈಗೆಟುಕುವಂತಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: estimate_swap() ನಿಖರವಾಗಿ +3.20 ಹಿಂದಿರುಗಿಸುತ್ತದೆ\n• ಸಂಪೂರ್ಣ evidence-driven troubleshooting loop "ಅಲಂಕಾರಿಕ connector ಆವಿಷ್ಕರಿಸಿ" ಅನ್ನೂ "ಮೊದಲೂ bottleneck ಕಂಡುಹಿಡಿಯಿರಿ" ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed quality-vs-efficiency split (OCR-7B best quality, Token-Efficient-7B best efficiency) mirrors exactly the kind of tradeoff production ML teams face when a research paper reports the "best" model without specifying whether "best" meant highest score or best score-per-dollar -- this lesson\'s code makes that ambiguity concrete and resolvable.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ quality-vs-efficiency split production ML ತಂಡಗಳು ಎದುರಿಸುವ tradeoff ಅನ್ನೂ ನಿಖರವಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed budget-filtered recommendation is exactly the kind of decision-support tool that lets engineering teams make defensible, evidence-based architecture choices under real compute constraints instead of chasing whichever recipe scores highest in an unconstrained benchmark leaderboard they cannot actually afford to deploy.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ budget-filtered recommendation engineering ತಂಡಗಳಿಗೆ ನಿಜ compute constraints ಅಡಿಯಲ್ಲಿ ಸಮರ್ಥನೀಯ, evidence-based architecture choices ಮಾಡಲು ಅನುಮತಿಸುವ ನಿಖರ decision-support tool.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real MM1, Cambrian-1, and InternVL research teams genuinely publish tables comparing encoder/connector/data/resolution ablations with reported deltas -- the confidence-weighted, task-conditional aggregation genuinely built and verified across this module is a simplified but structurally faithful model of how such evidence could be programmatically synthesized into an actionable recommendation.',
      bodyKn: 'ನಿಜ MM1, Cambrian-1, InternVL research ತಂಡಗಳು ನಿಜವಾಗಿ encoder/connector/data/resolution ablations ಹೋಲಿಸುವ tables ಪ್ರಕಟಿಸುತ್ತವೆ -- ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರಿಶೀಲಿಸಿದ confidence-weighted, task-conditional aggregation ಒಂದೂ ಸರಳಗೊಳಿಸಿದ ಆದರೆ ರಚನಾತ್ಮಕವಾಗಿ ನಿಷ್ಠಾವಂತ ಮಾದರಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does recommend_recipes() filter by relative_cost before scoring candidates?', qKn: 'recommend_recipes() candidates score ಮಾಡುವ ಮೊದಲೂ relative_cost ಇಂದ ಏಕೆ ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ?',
        opts: ['To remove weak encoders', 'To solve recipe selection under a compute constraint', 'To increase resolution', 'To normalize benchmark scores'], correct: 1,
        optsKn: ['ದುರ್ಬಲ encoders ತೆಗೆದುಹಾಕಲು', 'compute constraint ಅಡಿಯಲ್ಲಿ recipe selection ಪರಿಹರಿಸಲು', 'resolution ಹೆಚ್ಚಿಸಲು', 'benchmark scores normalize ಮಾಡಲು'] },
      { q: 'Genuinely confirmed in this lesson: what quality score did OCR-7B genuinely achieve for the OCR task?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: OCR-7B OCR task ಗೆ ಎಷ್ಟೂ quality score ನಿಜವಾಗಿ ಸಾಧಿಸಿತು?',
        opts: ['5.00', '5.50', '8.00', '12.00'], correct: 3,
        optsKn: ['5.00', '5.50', '8.00', '12.00'] },
      { q: 'Genuinely confirmed: why can Token-Efficient-7B have better efficiency than OCR-7B but still rank below it?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Token-Efficient-7B OCR-7B ಗಿಂತ ಉತ್ತಮ efficiency ಹೊಂದಿದ್ದರೂ ಅದರ ಕೆಳಗೆ ಏಕೆ ಶ್ರೇಣಿಗೊಳ್ಳುತ್ತದೆ?',
        opts: ['Python sorting is random', 'The program ranks quality first and efficiency second', 'Perceiver cannot process images', 'OCR doesn\'t use visual tokens'], correct: 1,
        optsKn: ['Python sorting ಯಾದೃಚ್ಛಿಕ', 'program quality ಅನ್ನೂ ಮೊದಲೂ ಮತ್ತೆ efficiency ಅನ್ನೂ ಎರಡನೇ ಎಂದೂ ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ', 'Perceiver images ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'OCR visual tokens ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what does estimate_swap() return when no exact controlled comparison exists?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವುದೇ ನಿಖರ controlled comparison ಇಲ್ಲದಾಗ estimate_swap() ಏನೂ ಹಿಂದಿರುಗಿಸುತ್ತದೆ?',
        opts: ['0', 'False', 'None', '-1'], correct: 2,
        optsKn: ['0', 'False', 'None', '-1'] },
      { q: 'Why can\'t a much larger LLM always compensate for low image resolution?', qKn: 'ಒಂದೂ ಬಹಳ ದೊಡ್ಡ LLM ಯಾವಾಗಲೂ ಕಡಿಮೆ image resolution ಅನ್ನೂ ಏಕೆ ಸರಿದೂಗಿಸಲಾಗುವುದಿಲ್ಲ?',
        opts: ['Large LLMs don\'t support images', 'Lost visual information may never reach the LLM', 'Resolution affects only text generation', 'Large LLMs require Q-Former'], correct: 1,
        optsKn: ['ದೊಡ್ಡ LLMs images ಬೆಂಬಲಿಸುವುದಿಲ್ಲ', 'ಕಳೆದುಹೋದ visual information LLM ಅನ್ನೂ ಎಂದೂ ತಲುಪುವುದಿಲ್ಲ', 'Resolution ಕೇವಲ text generation ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ', 'ದೊಡ್ಡ LLMs ಗೆ Q-Former ಅಗತ್ಯವಿದೆ'] },
    ] } },
  ],
};
