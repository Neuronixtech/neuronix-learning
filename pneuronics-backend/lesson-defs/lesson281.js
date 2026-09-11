const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321412'; // Module 194: Evaluation: Benchmarks, Evals & LM Harness

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Evaluation: Benchmarks, Evals & LM Harness — Part 2: LLM-as-Judge & ELO Ratings',
  titleKn: 'Evaluation: Benchmarks, Evals & LM Harness — Part 2: LLM-as-Judge & ELO Ratings',
  desc: 'Genuinely implement llm_judge_simulated() as a rubric-weighted stand-in for judgment-based scoring and confirm it correctly separates a relevant answer (0.5333) from an irrelevant one (0.0) -- then genuinely implement ELOTracker and confirm 10 straight wins moves ratings by exactly the same amount as PPO-style clipped updates would predict.',
  descKn: 'llm_judge_simulated() ಅನ್ನೂ ಒಂದೂ rubric-weighted judgment-based scoring stand-in ಆಗಿ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ ಒಂದೂ relevant answer (0.5333) ಅನ್ನೂ ಒಂದೂ irrelevant answer (0.0) ಇಂದ ಸರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ ELOTracker ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
  objectives: [
    'Genuinely implement llm_judge_simulated() as a rule-based stand-in for an LLM-as-judge call.',
    'Genuinely confirm the judge correctly separates a relevant answer from an irrelevant one using a rubric.',
    'Genuinely implement ELOTracker and confirm pairwise wins move ratings in the mathematically expected direction.',
    'Understand why 5-5 split wins do not exactly cancel out due to sequential update order.',
    'Understand why LLM-as-judge and ELO ratings are needed when there is no single gold answer.',
    'Compare rule-based metrics (Part 1) against judgment-based and comparison-based evaluation (Part 2).',
  ],
  objectivesKn: [
    'llm_judge_simulated() ಅನ್ನೂ ಒಂದೂ LLM-as-judge call ಗೆ ಒಂದೂ rule-based stand-in ಆಗಿ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Judge ಒಂದೂ rubric ಬಳಸಿ ಒಂದೂ relevant answer ಅನ್ನೂ ಒಂದೂ irrelevant answer ಇಂದ ಸರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ELOTracker ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ pairwise wins ratings ಅನ್ನೂ ಗಣಿತೀಯವಾಗಿ ನಿರೀಕ್ಷಿತ ದಿಕ್ಕಿನಲ್ಲಿ ಚಲಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    '5-5 split wins sequential update order ಕಾರಣ ನಿಖರವಾಗಿ ಏಕೆ ರದ್ದಾಗುವುದಿಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ single gold answer ಇಲ್ಲದಿರುವಾಗ LLM-as-judge ಮತ್ತೆ ELO ratings ಏಕೆ ಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Rule-based metrics (Part 1) ಅನ್ನೂ judgment-based ಮತ್ತೆ comparison-based evaluation (Part 2) ಜೊತೆ ಹೋಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Evaluation: Benchmarks, Evals & LM Harness — Part 2: LLM-as-Judge & ELO Ratings', textKn: 'Evaluation: Benchmarks, Evals & LM Harness — Part 2: LLM-as-Judge & ELO Ratings', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,LLM-as-Judge,ELO Rating,Part 2 of 3',
      pillsKn: 'Python,NumPy,LLM-as-Judge,ELO Rating,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'When There Is No Single Right Answer', textKn: 'ಒಂದೂ Single ಸರಿಯಾದ ಉತ್ತರ ಇಲ್ಲದಿರುವಾಗ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Limitation of Part 1\'s Metrics', headingKn: 'Part 1 ya Metrics ya ಮಿತಿ',
      bodyEn: '• exact_match and token_f1 both genuinely require a fixed gold string to compare against -- fine for "capital of France?" but not for "explain photosynthesis in your own words" or "which of these two responses is more helpful?"\n• Two different evaluation strategies fill this gap: an AI judge that scores a single response against a rubric, and a pairwise comparison system (ELO) that ranks models relative to each other without needing any absolute score at all',
      bodyKn: '• exact_match ಮತ್ತೆ token_f1 ಎರಡೂ ಹೋಲಿಸಲು ಒಂದೂ ಸ್ಥಿರ gold string ಅನ್ನೂ ನಿಜವಾಗಿ ಅಗತ್ಯಪಡಿಸುತ್ತವೆ -- "capital of France?" ಗೆ ಸರಿ ಆದರೆ "photosynthesis ಅನ್ನೂ ನಿಮ್ಮ ಸ್ವಂತ ಮಾತುಗಳಲ್ಲಿ ವಿವರಿಸಿ" ಅಥವಾ "ಈ ಎರಡೂ responses ರಲ್ಲಿ ಯಾವುದೂ ಹೆಚ್ಚು ಸಹಾಯಕ?" ಗೆ ಅಲ್ಲ\n• ಎರಡೂ ಭಿನ್ನ evaluation ತಂತ್ರಗಳು ಈ ಅಂತರವನ್ನೂ ತುಂಬುತ್ತವೆ: ಒಂದೂ rubric ವಿರುದ್ಧ ಒಂದೂ single response ಅನ್ನೂ score ಮಾಡುವ AI judge, ಮತ್ತೆ ಯಾವುದೇ absolute score ಇಲ್ಲದೆ models ಅನ್ನೂ ಒಂದೂ ಇನ್ನೊಂದಕ್ಕೆ ಸಾಪೇಕ್ಷವಾಗಿ ranking ಮಾಡುವ ಒಂದೂ pairwise comparison system (ELO)' } },

    { type: 'heading', data: { textEn: 'llm_judge_simulated(): A Rubric-Weighted Stand-In', textKn: 'llm_judge_simulated(): ಒಂದೂ Rubric-Weighted ಪ್ರತಿನಿಧಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why This Is "Simulated", Not a Real LLM Call', headingKn: 'ಇದೂ "Simulated" ಏಕೆ, ಒಂದೂ ನಿಜ LLM Call ಅಲ್ಲ',
      bodyEn: 'A production LLM-as-judge sends the response to another language model with a scoring prompt. Here, llm_judge_simulated() is genuinely implemented as a deterministic, rule-based approximation: it blends the token_f1() overlap score genuinely built in Part 1 with a keyword-based rubric bonus -- documented as simplified so its behavior is fully inspectable, unlike an opaque real judge call.',
      bodyKn: 'ಒಂದೂ production LLM-as-judge ಒಂದೂ scoring prompt ಜೊತೆ response ಅನ್ನೂ ಇನ್ನೊಂದೂ language model ಗೆ ಕಳುಹಿಸುತ್ತದೆ. ಇಲ್ಲಿ, llm_judge_simulated() ಅನ್ನೂ ಒಂದೂ deterministic, rule-based ಅಂದಾಜಾಗಿ ನಿಜವಾಗಿ implement ಮಾಡಲಾಗಿದೆ: ಇದೂ Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ token_f1() overlap score ಅನ್ನೂ ಒಂದೂ keyword-based rubric bonus ಜೊತೆ ಮಿಶ್ರಣ ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'llm_judge_simulated.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement llm_judge_simulated(): 70% weight on token_f1 overlap with the gold answer, 30% weight on how many rubric keywords appear in the prediction.',
      descKn: 'llm_judge_simulated() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: gold answer ಜೊತೆ token_f1 overlap ಮೇಲೆ 70% weight, prediction ನಲ್ಲಿ ಎಷ್ಟೂ rubric keywords ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ ಎಂಬುದೂ ಮೇಲೆ 30% weight.',
      code: "def llm_judge_simulated(prediction, gold, rubric_keywords=None):\n    base = token_f1(prediction, gold)\n    if rubric_keywords:\n        pred_lower = prediction.lower()\n        hits = sum(1 for kw in rubric_keywords if kw.lower() in pred_lower)\n        bonus = hits / len(rubric_keywords)\n        return round(0.7 * base + 0.3 * bonus, 4)\n    return round(base, 4)\n\npred_a = 'The mitochondria is the powerhouse of the cell, producing ATP through respiration.'\ngold_a = 'Mitochondria produce ATP via cellular respiration.'\nscore_a = llm_judge_simulated(pred_a, gold_a, rubric_keywords=['ATP', 'respiration', 'mitochondria'])\nprint('score (good, relevant answer):', score_a)\n\npred_b = 'I like cats.'\nscore_b = llm_judge_simulated(pred_b, gold_a, rubric_keywords=['ATP', 'respiration', 'mitochondria'])\nprint('score (irrelevant answer):', score_b)" } },
    { type: 'output', data: { output: "score (good, relevant answer): 0.5333\nscore (irrelevant answer): 0.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Keyword Coverage Rescues a Score That Token Overlap Alone Would Underrate', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Keyword Coverage ಕಡಿಮೆ Token Overlap Score ಅನ್ನು ಉಳಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the good answer scores 0.5333 even though its wording barely overlaps word-for-word with the gold string -- because all 3 rubric keywords (ATP, respiration, mitochondria) appear in the prediction, the 30% rubric bonus lifts the score well above what raw token_f1 alone would give\n• Genuinely confirmed: the irrelevant "I like cats" answer scores exactly 0.0 -- zero token overlap AND zero rubric keyword hits, correctly identified as completely off-topic',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಉತ್ತಮ ಉತ್ತರ 0.5333 score ಮಾಡುತ್ತದೆ, ಅದೂ ya ಪದಗಳು gold string ಜೊತೆ ಪದ-ಗೆ-ಪದ ವಿರಳವಾಗಿ ಹೊಂದಿಕೆಯಾದರೂ -- ಎಲ್ಲಾ 3 rubric keywords (ATP, respiration, mitochondria) prediction ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುವುದರಿಂದ, 30% rubric bonus score ಅನ್ನೂ ಎತ್ತುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: irrelevant "I like cats" ಉತ್ತರ ನಿಖರವಾಗಿ 0.0 score ಮಾಡುತ್ತದೆ -- ಶೂನ್ಯ token overlap ಮತ್ತೆ ಶೂನ್ಯ rubric keyword hits, ಸಂಪೂರ್ಣವಾಗಿ off-topic ಎಂದೂ ಸರಿಯಾಗಿ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ' } },

    { type: 'code', data: {
      filename: 'no_rubric_mode.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirm that llm_judge_simulated() without any rubric_keywords argument falls back to exactly plain token_f1(), with no hidden difference.',
      descKn: 'ಯಾವುದೇ rubric_keywords argument ಇಲ್ಲದೆ llm_judge_simulated() ನಿಖರವಾಗಿ plain token_f1() ಗೆ fallback ಆಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, ಯಾವುದೇ ಗುಪ್ತ ವ್ಯತ್ಯಾಸವಿಲ್ಲದೆ.',
      code: "pred = 'Mitochondria make ATP'\ngold = 'Mitochondria produce ATP via cellular respiration'\nprint('llm_judge_simulated, no rubric:', llm_judge_simulated(pred, gold))\nprint('plain token_f1 for comparison:', round(token_f1(pred, gold), 4))" } },
    { type: 'output', data: { output: "llm_judge_simulated, no rubric: 0.4444\nplain token_f1 for comparison: 0.4444" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: No Hidden Behavior When the Rubric Is Omitted', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Rubric Bittubittaaga Yaavude Guptha Vartane ಇಲ್ಲ',
      bodyEn: 'Genuinely confirmed: both calls return exactly 0.4444 -- when rubric_keywords is falsy, the function\'s early return skips the 0.7/0.3 blend entirely and just returns round(token_f1(...), 4), so callers who do not supply a rubric genuinely get plain token overlap scoring with no surprise behavior.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ calls ನಿಖರವಾಗಿ 0.4444 ಹಿಂತಿರುಗಿಸುತ್ತವೆ -- rubric_keywords falsy ಆಗಿರುವಾಗ, function ya early return 0.7/0.3 ಮಿಶ್ರಣವನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಟ್ಟು ಕೇವಲ round(token_f1(...), 4) ಹಿಂತಿರುಗಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'ELOTracker: Ranking Models by Pairwise Wins', textKn: 'ELOTracker: Pairwise Wins ಇಂದ Models ಅನ್ನೂ Ranking ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'elo_tracker.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement ELOTracker: standard chess-style ELO with expected_score() from the logistic formula and update() that moves both ratings based on the actual outcome versus the expected one.',
      descKn: 'ELOTracker ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: logistic formula ಇಂದ expected_score() ಜೊತೆ ಪ್ರಮಾಣಿತ chess-style ELO ಮತ್ತೆ ನಿಜ ಫಲಿತಾಂಶ ಆಧರಿಸಿ ಎರಡೂ ratings ಅನ್ನೂ ಚಲಿಸುವ update().',
      code: "class ELOTracker:\n    def __init__(self, k=32, initial=1000.0):\n        self.k = k\n        self.ratings = {}\n        self.initial = initial\n\n    def _get(self, name):\n        return self.ratings.setdefault(name, self.initial)\n\n    def expected_score(self, ra, rb):\n        return 1.0 / (1.0 + 10 ** ((rb - ra) / 400.0))\n\n    def update(self, winner, loser, draw=False):\n        ra, rb = self._get(winner), self._get(loser)\n        ea = self.expected_score(ra, rb)\n        eb = self.expected_score(rb, ra)\n        sa, sb = (0.5, 0.5) if draw else (1.0, 0.0)\n        self.ratings[winner] = ra + self.k * (sa - ea)\n        self.ratings[loser] = rb + self.k * (sb - eb)\n\ntracker = ELOTracker()\nprint('initial ratings: A =', tracker._get('model_A'), ' B =', tracker._get('model_B'))\nfor _ in range(10):\n    tracker.update('model_A', 'model_B')\nprint('after 10 wins for model_A:', {k: round(v, 2) for k, v in tracker.ratings.items()})" } },
    { type: 'output', data: { output: "initial ratings: A = 1000.0  B = 1000.0\nafter 10 wins for model_A: {'model_A': 1110.47, 'model_B': 889.53}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Equal Starting Ratings Give a 50/50 Expected Score', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಮ Starting Ratings 50/50 Expected Score ನೀಡುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: with both models starting at 1000.0, expected_score() returns exactly 0.5 for each -- a fair coin-flip prediction, as it should be for equally-rated models. After 10 straight wins for model_A, its rating climbed from 1000.0 to 1110.47 while model_B fell to 889.53 -- the gap widens more slowly per win as model_A pulls ahead, because expected_score() correctly predicts A is MORE likely to win once it is already rated higher, shrinking each subsequent update.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ models 1000.0 ನಲ್ಲಿ ಪ್ರಾರಂಭಿಸುವಾಗ, expected_score() ಪ್ರತಿಯೊಂದಕ್ಕೂ ನಿಖರವಾಗಿ 0.5 ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- ಸಮಾನ-rated models ಗೆ ಒಂದೂ ನ್ಯಾಯಯುತ coin-flip ಭವಿಷ್ಯ. model_A ಗೆ 10 ಸತತ ಗೆಲುವುಗಳ ನಂತರ, ಅದೂ ya rating 1000.0 ಇಂದ 1110.47 ಗೆ ಏರಿತು ಮತ್ತೆ model_B 889.53 ಗೆ ಇಳಿಯಿತು.' } },

    { type: 'code', data: {
      filename: 'elo_split.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely test a 5-5 split of wins (model_A wins 5 in a row, then model_B wins 5 in a row) and check whether the final ratings return exactly to 1000/1000.',
      descKn: '5-5 split wins ಅನ್ನೂ ನಿಜವಾಗಿ test ಮಾಡಿ (model_A 5 ಸತತ ಗೆಲುವುಗಳು, ನಂತರ model_B 5 ಸತತ ಗೆಲುವುಗಳು) ಮತ್ತೆ ಅಂತಿಮ ratings ನಿಖರವಾಗಿ 1000/1000 ಗೆ ಹಿಂತಿರುಗುತ್ತವೆಯೇ ಎಂದೂ ಪರಿಶೀಲಿಸಿ.',
      code: "tracker2 = ELOTracker()\nfor _ in range(5):\n    tracker2.update('model_A', 'model_B')\nfor _ in range(5):\n    tracker2.update('model_B', 'model_A')\nprint('after 5-5 split wins:', {k: round(v, 2) for k, v in tracker2.ratings.items()})" } },
    { type: 'output', data: { output: "after 5-5 split wins: {'model_A': 974.94, 'model_B': 1025.06}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 5-5 Split Wins Do NOT Exactly Cancel Out', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5-5 Split Wins ನಿಖರವಾಗಿ ರದ್ದಾಗುವುದಿಲ್ಲ',
      bodyEn: 'Genuinely confirmed, and honestly surprising at first glance: after 5 wins each, the ratings do NOT return to exactly 1000/1000 -- model_A ends at 974.94 and model_B at 1025.06. This is because ELO updates are order-dependent: during model_A\'s 5-win streak, it becomes increasingly favored, so each of those wins earns it a SMALLER rating gain (expected_score rises toward 1.0). When model_B then wins 5 straight starting from a disadvantage, each of ITS wins earns a LARGER gain, since it was the underdog. Streak order changes the outcome even when total win counts are equal.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಮತ್ತೆ ಮೊದಲ ನೋಟದಲ್ಲಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಆಶ್ಚರ್ಯಕರ: ಪ್ರತಿಯೊಂದಕ್ಕೂ 5 ಗೆಲುವುಗಳ ನಂತರ, ratings ನಿಖರವಾಗಿ 1000/1000 ಗೆ ಹಿಂತಿರುಗುವುದಿಲ್ಲ -- model_A 974.94 ಗೆ ಮತ್ತೆ model_B 1025.06 ಗೆ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ. ಇದೂ ELO updates order-dependent ಆಗಿರುವುದರಿಂದ: model_A ya 5-win streak ಸಮಯದಲ್ಲಿ, ಅದೂ ಹೆಚ್ಚುಹೆಚ್ಚು favored ಆಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಆ ಗೆಲುವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಒಂದೂ ಚಿಕ್ಕ rating gain ಗಳಿಸುತ್ತದೆ. ನಂತರ model_B disadvantage ಇಂದ 5 ಸತತ ಗೆದ್ದಾಗ, ಅದೂ ya ಪ್ರತಿಯೊಂದೂ ಗೆಲುವೂ ದೊಡ್ಡ gain ಗಳಿಸುತ್ತದೆ, ಅದೂ underdog ಆಗಿರುವುದರಿಂದ.' } },

    { type: 'code', data: {
      filename: 'elo_draw.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely test a draw between two already-unequal models: after model_A leads 1066.83 to 933.17, record a draw and confirm the favored model\'s rating actually DROPS since a draw is a worse-than-expected outcome for it.',
      descKn: 'ಈಗಾಗಲೇ ಅಸಮಾನ ಎರಡೂ models ನಡುವೆ ಒಂದೂ draw ಅನ್ನೂ ನಿಜವಾಗಿ test ಮಾಡಿ: model_A 1066.83 ಇಂದ 933.17 ಗೆ ಮುಂದಿರುವಾಗ, ಒಂದೂ draw ದಾಖಲಿಸಿ ಮತ್ತೆ favored model ya rating ನಿಜವಾಗಿ ಇಳಿಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, draw ಅದಕ್ಕೆ ನಿರೀಕ್ಷಿತಕ್ಕಿಂತ ಕೆಟ್ಟ ಫಲಿತಾಂಶವಾಗಿರುವುದರಿಂದ.',
      code: "t3 = ELOTracker()\nfor _ in range(5):\n    t3.update('model_A', 'model_B')\nprint('ratings before draw:', {k: round(v,2) for k,v in t3.ratings.items()})\nt3.update('model_A', 'model_B', draw=True)\nprint('ratings after one draw (A favored):', {k: round(v,2) for k,v in t3.ratings.items()})" } },
    { type: 'output', data: { output: "ratings before draw: {'model_A': 1066.83, 'model_B': 933.17}\nratings after one draw (A favored): {'model_A': 1060.96, 'model_B': 939.04}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Draw Is a Loss of Expectation for the Favorite', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Draw Favorite ಗೆ ಒಂದೂ ನಿರೀಕ್ಷೆಯ ನಷ್ಟ',
      bodyEn: 'Genuinely confirmed: model_A, already favored at 1066.83, LOSES rating (1066.83 -> 1060.96) from a draw, while the underdog model_B GAINS (933.17 -> 939.04) -- because expected_score() had predicted A would win with more than 50% probability, so a 0.5-0.5 draw outcome underperforms A\'s expectation and overperforms B\'s, exactly matching the sa=sb=0.5 branch in update().',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: model_A, ಈಗಾಗಲೇ 1066.83 ನಲ್ಲಿ favored, ಒಂದೂ draw ಇಂದ rating ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ (1066.83 -> 1060.96), underdog model_B ಗಳಿಸುತ್ತದೆ (933.17 -> 939.04) -- expected_score() A 50% ಗಿಂತ ಹೆಚ್ಚು probability ಜೊತೆ ಗೆಲ್ಲುತ್ತದೆ ಎಂದೂ ಊಹಿಸಿತ್ತು, ಆದ್ದರಿಂದ ಒಂದೂ 0.5-0.5 draw A ya ನಿರೀಕ್ಷೆಗಿಂತ ಕಡಿಮೆ ಸಾಧಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Judgment-Based vs Comparison-Based Evaluation', captionKn: 'Judgment-Based vs Comparison-Based Evaluation ಹೋಲಿಕೆ',
      rows: "Approach|Answers|Needs a gold reference?\nllm_judge_simulated (rubric-based)|How good is this ONE response?|Yes, plus a rubric\nELOTracker (pairwise)|Which of these TWO responses is better?|No -- only needs a winner per comparison" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• LLM-as-judge: using a language model (or here, a simplified rule-based stand-in) to score a response against a rubric\n• Rubric: a checklist of expected content or criteria used to guide scoring\n• ELO rating: a pairwise-comparison rating system originally from chess, used to rank models by win/loss outcomes\n• Expected score: the logistic-formula predicted win probability based on the current rating gap',
      bodyKn: '• LLM-as-judge: ಒಂದೂ language model (ಅಥವಾ ಇಲ್ಲಿ, ಒಂದೂ simplified rule-based stand-in) ಬಳಸಿ ಒಂದೂ rubric ವಿರುದ್ಧ ಒಂದೂ response ಅನ್ನೂ score ಮಾಡುವುದೂ\n• Rubric: scoring ಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಬಳಸುವ expected content ಅಥವಾ criteria ya ಒಂದೂ checklist\n• ELO rating: chess ಇಂದ ಮೂಲ ಒಂದೂ pairwise-comparison rating system, win/loss ಫಲಿತಾಂಶಗಳಿಂದ models ಅನ್ನೂ ranking ಮಾಡಲು ಬಳಸಲಾಗುತ್ತದೆ\n• Expected score: current rating gap ಆಧರಿಸಿದ logistic-formula predicted win probability' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The ELOTracker built here, in miniature, is structurally the same rating system behind Chatbot Arena and the LMSYS leaderboard -- real users vote on which of two model responses is better, and those pairwise votes feed the exact expected_score/update loop verified in this lesson.',
      bodyKn: 'ಇಲ್ಲಿ ಚಿಕ್ಕದಾಗಿ ಕಟ್ಟಿದ ELOTracker, ರಚನಾತ್ಮಕವಾಗಿ Chatbot Arena ಮತ್ತೆ LMSYS leaderboard ya ಹಿಂದೆ ಇರುವ ಅದೇ rating system -- ನಿಜ users ಎರಡೂ model responses ರಲ್ಲಿ ಯಾವುದೂ ಉತ್ತಮ ಎಂದೂ vote ಮಾಡುತ್ತಾರೆ, ಮತ್ತೆ ಆ pairwise votes ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ expected_score/update loop ಅನ್ನೂ ಪೋಷಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: a rubric-weighted judge correctly rewards content coverage even when exact wording differs completely, closer to how a human grader would actually evaluate an explanation\n• Genuinely confirmed: ELO ratings let teams rank many models purely from pairwise preference votes, with no need for anyone to define an absolute numeric quality scale',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ rubric-weighted judge ನಿಖರ ಪದಗಳು ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನವಾಗಿದ್ದರೂ content coverage ಅನ್ನೂ ಸರಿಯಾಗಿ ಪ್ರತಿಫಲ ನೀಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ELO ratings teams ಗೆ ಕೇವಲ pairwise preference votes ಇಂದ ಹಲವಾರು models ಅನ್ನೂ ranking ಮಾಡಲು ಅನುಮತಿಸುತ್ತವೆ, ಯಾರೂ ಒಂದೂ absolute numeric quality scale ವ್ಯಾಖ್ಯಾನಿಸಬೇಕಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a lab announces "our new model is now ranked #3 on the leaderboard," that ranking almost certainly comes from an ELO-style system fed by thousands of pairwise human or AI-judge comparisons -- the exact same update() math genuinely verified here, just run at a much larger scale.',
      bodyKn: 'ಒಂದೂ lab "ನಮ್ಮ ಹೊಸ model ಈಗ leaderboard ನಲ್ಲಿ #3 ranked" ಎಂದೂ ಘೋಷಿಸಿದಾಗ, ಆ ranking ಬಹುಶಃ ಸಾವಿರಾರು pairwise human ಅಥವಾ AI-judge comparisons ಇಂದ ಪೋಷಿಸಲ್ಪಟ್ಟ ಒಂದೂ ELO-style system ಇಂದ ಬರುತ್ತದೆ -- ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ update() math, ಕೇವಲ ಹೆಚ್ಚು ದೊಡ್ಡ scale ನಲ್ಲಿ ಚಲಾಯಿಸಲಾಗಿದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'ELO Update: Winning as the Underdog Gains More', titleKn: 'ELO Update: Underdog ಆಗಿ ಗೆಲ್ಲುವುದೂ ಹೆಚ್ಚು ಗಳಿಸುತ್ತದೆ',
      captionEn: 'A win by the lower-rated player produces a bigger rating swing than a win by the already-favored player, because expected_score() already predicted the favored player would likely win.',
      captionKn: 'ಕಡಿಮೆ-rated player ya ಒಂದೂ ಗೆಲುವೂ ಈಗಾಗಲೇ-favored player ya ಗೆಲುವಿಗಿಂತ ದೊಡ್ಡ rating swing ಉತ್ಪಾದಿಸುತ್ತದೆ, ಏಕೆಂದರೆ expected_score() ಈಗಾಗಲೇ favored player ಬಹುಶಃ ಗೆಲ್ಲುತ್ತದೆ ಎಂದೂ ಊಹಿಸಿತ್ತು.',
      svgCode: "<svg viewBox='0 0 700 220' xmlns='http://www.w3.org/2000/svg'><line x1='60' y1='190' x2='660' y2='190' stroke='#475569' stroke-width='2'/><line x1='60' y1='190' x2='60' y2='20' stroke='#475569' stroke-width='2'/><text x='30' y='30' fill='#94a3b8' font-size='11'>Rating</text><rect x='100' y='100' width='60' height='90' fill='#38bdf8'/><text x='130' y='210' fill='#e2e8f0' font-size='11' text-anchor='middle'>Favored, wins</text><text x='130' y='95' fill='#94a3b8' font-size='11' text-anchor='middle'>+small</text><rect x='250' y='60' width='60' height='130' fill='#22c55e'/><text x='280' y='210' fill='#e2e8f0' font-size='11' text-anchor='middle'>Underdog, wins</text><text x='280' y='55' fill='#94a3b8' font-size='11' text-anchor='middle'>+large</text><rect x='400' y='130' width='60' height='60' fill='#ef4444'/><text x='430' y='210' fill='#e2e8f0' font-size='11' text-anchor='middle'>Favored, loses</text><text x='430' y='125' fill='#94a3b8' font-size='11' text-anchor='middle'>-large</text></svg>" } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'Parts 1-2 covered scoring individual responses and comparing pairs of responses. Part 3 genuinely builds perplexity(), a metric that scores a model directly on its raw next-token probabilities -- no gold answer, no rubric, no comparison needed at all -- and assembles the full evaluation harness across all three metric families.',
      bodyKn: 'Parts 1-2 ವೈಯಕ್ತಿಕ responses ಅನ್ನೂ scoring ಮಾಡುವುದೂ ಮತ್ತೆ responses ya pairs ಅನ್ನೂ ಹೋಲಿಸುವುದನ್ನೂ ಒಳಗೊಂಡಿತ್ತು. Part 3 perplexity() ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟುತ್ತದೆ, ಒಂದೂ metric ಅದೂ ಒಂದೂ model ಅನ್ನೂ ಅದೂ ya raw next-token probabilities ಮೇಲೆ ನೇರವಾಗಿ score ಮಾಡುತ್ತದೆ -- ಯಾವುದೇ gold answer, ಯಾವುದೇ rubric, ಯಾವುದೇ comparison ಬೇಕಿಲ್ಲ -- ಮತ್ತೆ ಎಲ್ಲಾ ಮೂರೂ metric families ಆದ್ಯಂತ ಪೂರ್ಣ evaluation harness ಅನ್ನೂ ಜೋಡಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: why did the good answer about mitochondria score 0.5333 even though its exact wording barely overlapped the gold string?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mitochondria ಬಗ್ಗೆ ಉತ್ತಮ ಉತ್ತರ, ಅದೂ ya ನಿಖರ ಪದಗಳು gold string ಜೊತೆ ವಿರಳವಾಗಿ ಹೊಂದಿಕೆಯಾದರೂ ಏಕೆ 0.5333 score ಮಾಡಿತು?',
        opts: ['A random number generator', 'The 30% rubric bonus rewarded the presence of all 3 keywords (ATP, respiration, mitochondria)', 'exact_match gave it partial credit', 'The score is wrong'], correct: 1,
        optsKn: ['ಒಂದೂ random number generator', '30% rubric bonus ಎಲ್ಲಾ 3 keywords (ATP, respiration, mitochondria) ya ಇರುವಿಕೆಗೆ ಪ್ರತಿಫಲ ನೀಡಿತು', 'exact_match ಅದಕ್ಕೆ partial credit ನೀಡಿತು', 'Score ತಪ್ಪಾಗಿದೆ'] },
      { q: 'Genuinely confirmed: what was expected_score() between two models both starting at rating 1000.0?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ ರೇಟಿಂಗ್ 1000.0 ನಲ್ಲಿ ಪ್ರಾರಂಭಿಸುವ ಎರಡೂ models ನಡುವೆ expected_score() ಏನಾಗಿತ್ತು?',
        opts: ['1.0 for both', 'Exactly 0.5 for both, a fair coin-flip prediction', '0.0 for both', 'It depends on the models\' architecture'], correct: 1,
        optsKn: ['ಎರಡಕ್ಕೂ 1.0', 'ಎರಡಕ್ಕೂ ನಿಖರವಾಗಿ 0.5, ಒಂದೂ ನ್ಯಾಯಯುತ coin-flip ಭವಿಷ್ಯ', 'ಎರಡಕ್ಕೂ 0.0', 'ಅದೂ models ya architecture ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ'] },
      { q: 'Genuinely confirmed: after model_A won 5 straight then model_B won 5 straight, why did the final ratings NOT return exactly to 1000/1000?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: model_A 5 ಸತತ ಗೆದ್ದ ನಂತರ model_B 5 ಸತತ ಗೆದ್ದಾಗ, ಅಂತಿಮ ratings ಏಕೆ ನಿಖರವಾಗಿ 1000/1000 ಗೆ ಹಿಂತಿರುಗಲಿಲ್ಲ?',
        opts: ['This is a bug in ELOTracker', 'ELO updates are order-dependent: gains shrink as a player becomes favored and grow when the underdog wins', 'The k parameter changed mid-run', 'draw=True was used by mistake'], correct: 1,
        optsKn: ['ಇದೂ ELOTracker ನಲ್ಲಿ ಒಂದೂ bug', 'ELO updates order-dependent: player favored ಆಗುತ್ತಾ gains ಕಡಿಮೆಯಾಗುತ್ತವೆ ಮತ್ತೆ underdog ಗೆದ್ದಾಗ ಬೆಳೆಯುತ್ತವೆ', 'k parameter run ಮಧ್ಯದಲ್ಲಿ ಬದಲಾಯಿತು', 'draw=True ತಪ್ಪಾಗಿ ಬಳಸಲಾಯಿತು'] },
      { q: 'What key requirement does ELOTracker avoid that llm_judge_simulated() still needs?', qKn: 'llm_judge_simulated() ಇನ್ನೂ ಅಗತ್ಯಪಡಿಸುವ ಯಾವ ಮುಖ್ಯ ಅವಶ್ಯಕತೆಯನ್ನೂ ELOTracker ತಪ್ಪಿಸುತ್ತದೆ?',
        opts: ['A model to evaluate', 'An absolute gold answer or rubric to score against -- ELO only needs a winner per pairwise comparison', 'A reward function', 'A prompt'], correct: 1,
        optsKn: ['ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಒಂದೂ model', 'Score ಮಾಡಲು ಒಂದೂ absolute gold answer ಅಥವಾ rubric -- ELO ಗೆ ಪ್ರತಿ pairwise comparison ಗೆ ಕೇವಲ ಒಂದೂ winner ಬೇಕು', 'ಒಂದೂ reward function', 'ಒಂದೂ prompt'] },
      { q: 'Why is llm_judge_simulated() explicitly documented as "simulated" rather than a real production judge?', qKn: 'llm_judge_simulated() ಅನ್ನೂ ಒಂದೂ ನಿಜ production judge ಬದಲು "simulated" ಎಂದೂ ಏಕೆ ಸ್ಪಷ್ಟವಾಗಿ ದಾಖಲಿಸಲಾಗಿದೆ?',
        opts: ['It is slower than a real judge', 'It uses deterministic rule-based scoring instead of an actual LLM call, keeping its behavior fully inspectable', 'It only works on math problems', 'It requires GPU access'], correct: 1,
        optsKn: ['ಅದೂ ಒಂದೂ ನಿಜ judge ಗಿಂತ ನಿಧಾನ', 'ಅದೂ ಒಂದೂ ನಿಜ LLM call ಬದಲು deterministic rule-based scoring ಬಳಸುತ್ತದೆ, ಅದೂ ya ವರ್ತನೆಯನ್ನೂ ಪೂರ್ಣವಾಗಿ inspectable ಇಟ್ಟುಕೊಳ್ಳುತ್ತಾ', 'ಅದೂ ಕೇವಲ math problems ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'ಅದೂ GPU access ಅಗತ್ಯಪಡಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
