const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321412'; // Module 194: Evaluation: Benchmarks, Evals & LM Harness

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Evaluation: Benchmarks, Evals & LM Harness — Part 1: exact_match, token_f1 & the EvalSuite Core',
  titleKn: 'Evaluation: Benchmarks, Evals & LM Harness — Part 1: exact_match, token_f1 & EvalSuite Core',
  desc: 'Genuinely implement exact_match() and token_f1() as strict vs partial-credit metrics, then genuinely build EvalCase/EvalSuite and confirm a good demo model scores 1.0 mean while a bad one scores exactly 0.0 across the same three cases.',
  descKn: 'exact_match() ಮತ್ತೆ token_f1() ಅನ್ನೂ ಕಠಿಣ vs partial-credit metrics ಆಗಿ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಂತರ EvalCase/EvalSuite ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿ ಒಂದೂ ಉತ್ತಮ demo model ಅದೇ ಮೂರೂ cases ಆದ್ಯಂತ 1.0 mean score ಮಾಡುತ್ತದೆ ಮತ್ತೆ ಒಂದೂ ಕೆಟ್ಟದೂ ನಿಖರವಾಗಿ 0.0 score ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement exact_match() as a strict, case-insensitive string comparison metric.',
    'Genuinely implement token_f1() as a partial-credit metric based on token overlap.',
    'Genuinely build EvalCase and EvalSuite to structure a reusable evaluation harness.',
    'Genuinely confirm a correct and an incorrect demo model score exactly 1.0 and 0.0 across the same test cases.',
    'Understand why exact_match is too strict for free-form generation but right for closed-form answers.',
    'Understand the core design of a benchmark harness: cases, a metric per case, and an aggregation step.',
  ],
  objectivesKn: [
    'exact_match() ಅನ್ನೂ ಒಂದೂ ಕಠಿಣ, case-insensitive string comparison metric ಆಗಿ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'token_f1() ಅನ್ನೂ token overlap ಆಧರಿಸಿದ ಒಂದೂ partial-credit metric ಆಗಿ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'ಒಂದೂ ಮರುಬಳಸಬಹುದಾದ evaluation harness ಅನ್ನೂ ರಚಿಸಲು EvalCase ಮತ್ತೆ EvalSuite ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿ.',
    'ಒಂದೂ ಸರಿಯಾದ ಮತ್ತೆ ಒಂದೂ ತಪ್ಪಾದ demo model ಅದೇ test cases ಆದ್ಯಂತ ನಿಖರವಾಗಿ 1.0 ಮತ್ತೆ 0.0 score ಮಾಡುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'exact_match free-form generation ಗೆ ಏಕೆ ತುಂಬಾ ಕಠಿಣ ಆದರೆ closed-form answers ಗೆ ಸರಿ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ benchmark harness ya ಮುಖ್ಯ ವಿನ್ಯಾಸವನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: cases, ಪ್ರತಿ case ಗೆ ಒಂದೂ metric, ಮತ್ತೆ ಒಂದೂ aggregation step.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Evaluation: Benchmarks, Evals & LM Harness — Part 1: exact_match, token_f1 & the EvalSuite Core', textKn: 'Evaluation: Benchmarks, Evals & LM Harness — Part 1: exact_match, token_f1 & EvalSuite Core', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Modules 190-193 · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Modules 190-193 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,Evaluation,exact_match,token_f1,Part 1 of 3',
      pillsKn: 'Python,NumPy,Evaluation,exact_match,token_f1,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'After Training and Alignment: How Do You Know It Worked?', textKn: 'Training ಮತ್ತೆ Alignment ನಂತರ: ಅದೂ ಕೆಲಸ ಮಾಡಿತೇ ಎಂದೂ ನಿಮಗೆ ಹೇಗೆ ಗೊತ್ತು?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Every Module So Far Assumed a Way to Measure "Better"', headingKn: 'ಇಲ್ಲಿಯವರೆಗಿನ ಪ್ರತಿ Module "ಉತ್ತಮ" ಅಳೆಯುವ ಒಂದೂ ವಿಧಾನವನ್ನೂ ಊಹಿಸಿತು',
      bodyEn: '• Modules 190-193 genuinely built training loops, reward functions, and preference comparisons -- but never genuinely built the tool that answers "did this model actually get better?" on held-out data\n• This module builds exactly that: an evaluation harness with pluggable metrics, structured test cases, and aggregation -- the same shape as real tools like the LM Evaluation Harness used across the field',
      bodyKn: '• Modules 190-193 ನಿಜವಾಗಿ training loops, reward functions, ಮತ್ತೆ preference comparisons ಅನ್ನೂ ಕಟ್ಟಿದವು -- ಆದರೆ "ಈ model ನಿಜವಾಗಿ ಉತ್ತಮಗೊಂಡಿತೇ?" ಎಂಬುದಕ್ಕೆ held-out data ಮೇಲೆ ಉತ್ತರಿಸುವ tool ಅನ್ನೂ ಎಂದಿಗೂ ನಿಜವಾಗಿ ಕಟ್ಟಲಿಲ್ಲ\n• ಈ module ನಿಖರವಾಗಿ ಅದನ್ನೇ ಕಟ್ಟುತ್ತದೆ: pluggable metrics, structured test cases, ಮತ್ತೆ aggregation ಜೊತೆ ಒಂದೂ evaluation harness -- LM Evaluation Harness ನಂತಹ ನಿಜ tools ya ಅದೇ ಆಕಾರ' } },

    { type: 'heading', data: { textEn: 'exact_match(): The Strictest Possible Metric', textKn: 'exact_match(): ಸಾಧ್ಯವಿರುವ ಅತ್ಯಂತ ಕಠಿಣ Metric', level: 'H2' } },
    { type: 'code', data: {
      filename: 'exact_match.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement exact_match(): a case-insensitive, whitespace-trimmed string comparison that returns exactly 1.0 or 0.0.',
      descKn: 'exact_match() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಒಂದೂ case-insensitive, whitespace-trimmed string comparison ಅದೂ ನಿಖರವಾಗಿ 1.0 ಅಥವಾ 0.0 ಹಿಂತಿರುಗಿಸುತ್ತದೆ.',
      code: "def exact_match(prediction, gold):\n    return 1.0 if prediction.strip().lower() == gold.strip().lower() else 0.0\n\nprint('exact_match(\"Paris\", \"paris\"):', exact_match('Paris', 'paris'))\nprint('exact_match(\"Paris\", \"London\"):', exact_match('Paris', 'London'))" } },
    { type: 'output', data: { output: "exact_match(\"Paris\", \"paris\"): 1.0\nexact_match(\"Paris\", \"London\"): 0.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Case Differences Do Not Cost a Point, Wrong Answers Do', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Case ವ್ಯತ್ಯಾಸಗಳು ಅಂಕ ಕಳೆದುಕೊಳ್ಳುವುದಿಲ್ಲ, ತಪ್ಪಾದ ಉತ್ತರಗಳು ಕಳೆದುಕೊಳ್ಳುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: "Paris" vs "paris" scores a full 1.0 because .lower() normalizes case before comparing, while "Paris" vs "London" scores exactly 0.0 -- there is no partial credit for being close in meaning, only in exact normalized string identity.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "Paris" vs "paris" ಪೂರ್ಣ 1.0 score ಮಾಡುತ್ತದೆ ಏಕೆಂದರೆ .lower() ಹೋಲಿಸುವ ಮೊದಲೂ case ಅನ್ನೂ normalize ಮಾಡುತ್ತದೆ, "Paris" vs "London" ನಿಖರವಾಗಿ 0.0 score ಮಾಡುತ್ತದೆ -- ಅರ್ಥದಲ್ಲಿ ಹತ್ತಿರ ಇರುವುದಕ್ಕೆ ಯಾವುದೇ partial credit ಇಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'token_f1(): Partial Credit for Free-Form Text', textKn: 'token_f1(): Free-Form Text ಗೆ ಭಾಗಶಃ ಅಂಕಗಳು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Exact Match Fails for Longer Generated Answers', headingKn: 'ಉದ್ದ Generated Answers ಗೆ Exact Match ಏಕೆ Fail ಆಗುತ್ತದೆ',
      bodyEn: 'A model that answers "the cat sat" when the gold answer is "the cat sat on the mat" got most of the content right, but exact_match() would score it 0.0 -- token_f1() instead measures precision and recall over the SET of overlapping tokens, giving partial credit proportional to how much content actually matched.',
      bodyKn: 'ಒಂದೂ model gold answer "the cat sat on the mat" ಆಗಿರುವಾಗ "the cat sat" ಎಂದೂ ಉತ್ತರಿಸಿದರೆ, ಅದೂ ಹೆಚ್ಚಿನ content ಅನ್ನೂ ಸರಿಯಾಗಿ ಪಡೆಯಿತು, ಆದರೆ exact_match() ಅದನ್ನೂ 0.0 score ಮಾಡುತ್ತಿತ್ತು -- token_f1() ಬದಲಿಗೆ overlapping tokens ya SET ಮೇಲೆ precision ಮತ್ತೆ recall ಅಳೆಯುತ್ತದೆ, ಎಷ್ಟೂ content ನಿಜವಾಗಿ ಹೊಂದಿಕೆಯಾಯಿತು ಎಂಬುದಕ್ಕೆ ಅನುಗುಣವಾಗಿ partial credit ನೀಡುತ್ತಾ.' } },
    { type: 'code', data: {
      filename: 'token_f1.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement token_f1(): tokenize by whitespace, count overlapping tokens (respecting multiplicity), and compute the harmonic mean of precision and recall.',
      descKn: 'token_f1() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: whitespace ಇಂದ tokenize ಮಾಡಿ, overlapping tokens ಅನ್ನೂ ಎಣಿಸಿ (multiplicity ಗೌರವಿಸಿ), ಮತ್ತೆ precision ಮತ್ತೆ recall ya harmonic mean ಲೆಕ್ಕಹಾಕಿ.',
      code: "def token_f1(prediction, gold):\n    pred_tokens = prediction.strip().lower().split()\n    gold_tokens = gold.strip().lower().split()\n    if len(pred_tokens) == 0 or len(gold_tokens) == 0:\n        return float(pred_tokens == gold_tokens)\n    gold_counts = {}\n    for t in gold_tokens:\n        gold_counts[t] = gold_counts.get(t, 0) + 1\n    pred_counts = {}\n    for t in pred_tokens:\n        pred_counts[t] = pred_counts.get(t, 0) + 1\n    overlap = sum(min(c, gold_counts.get(t, 0)) for t, c in pred_counts.items())\n    if overlap == 0:\n        return 0.0\n    precision = overlap / len(pred_tokens)\n    recall = overlap / len(gold_tokens)\n    return 2 * precision * recall / (precision + recall)\n\nprint('token_f1(\"the cat sat\", \"the cat sat on the mat\"):', round(token_f1('the cat sat', 'the cat sat on the mat'), 4))\nprint('token_f1(\"completely different words\", \"the cat sat\"):', token_f1('completely different words', 'the cat sat'))\nprint('token_f1(\"the cat sat on the mat\", \"the cat sat on the mat\"):', token_f1('the cat sat on the mat', 'the cat sat on the mat'))" } },
    { type: 'output', data: { output: "token_f1(\"the cat sat\", \"the cat sat on the mat\"): 0.6667\ntoken_f1(\"completely different words\", \"the cat sat\"): 0.0\ntoken_f1(\"the cat sat on the mat\", \"the cat sat on the mat\"): 1.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Partial Overlap Gives Partial Credit, Zero Overlap Gives Zero', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Partial Overlap Partial Credit ನೀಡುತ್ತದೆ, Zero Overlap Zero ನೀಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: "the cat sat" (3 tokens, all 3 in gold) against a 6-token gold gives precision=3/3=1.0, recall=3/6=0.5, F1=2*1.0*0.5/1.5=0.6667 -- exactly matching the printed output. A prediction sharing zero tokens with gold correctly scores exactly 0.0, and an exact match correctly scores exactly 1.0.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "the cat sat" (3 tokens, ಎಲ್ಲಾ 3 gold ನಲ್ಲಿವೆ) 6-token gold ವಿರುದ್ಧ precision=3/3=1.0, recall=3/6=0.5, F1=2*1.0*0.5/1.5=0.6667 ನೀಡುತ್ತದೆ -- printed output ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ. Gold ಜೊತೆ ಶೂನ್ಯ tokens ಹಂಚಿಕೊಳ್ಳುವ ಒಂದೂ prediction ಸರಿಯಾಗಿ ನಿಖರವಾಗಿ 0.0 score ಮಾಡುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'token_f1_edge_cases.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely test token_f1() on empty-string edge cases: an empty prediction against a non-empty gold, two empty strings, and a non-empty prediction against an empty gold.',
      descKn: 'token_f1() ಅನ್ನೂ empty-string edge cases ಮೇಲೆ ನಿಜವಾಗಿ test ಮಾಡಿ: ಖಾಲಿ-ಅಲ್ಲದ gold ವಿರುದ್ಧ ಒಂದೂ ಖಾಲಿ prediction, ಎರಡೂ ಖಾಲಿ strings, ಮತ್ತೆ ಖಾಲಿ gold ವಿರುದ್ಧ ಒಂದೂ ಖಾಲಿ-ಅಲ್ಲದ prediction.',
      code: "print('token_f1(\"\", \"the cat sat\"):', token_f1('', 'the cat sat'))\nprint('token_f1(\"\", \"\"):', token_f1('', ''))\nprint('token_f1(\"the cat\", \"\"):', token_f1('the cat', ''))" } },
    { type: 'output', data: { output: "token_f1(\"\", \"the cat sat\"): 0.0\ntoken_f1(\"\", \"\"): 1.0\ntoken_f1(\"the cat\", \"\"): 0.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Empty-Empty Case Is Handled as a Perfect Match, Not a Crash', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Empty-Empty Case ಒಂದೂ Crash ಅಲ್ಲ, ಒಂದೂ ಪರಿಪೂರ್ಣ Match ಆಗಿ ನಿಭಾಯಿಸಲಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: without the explicit len()==0 guard, dividing by len(pred_tokens) or len(gold_tokens) would raise a ZeroDivisionError for any empty string -- the guard genuinely returns 0.0 when only one side is empty (a real mismatch) and exactly 1.0 when both are empty (pred_tokens == gold_tokens == [], a correct trivial match), which is the same edge-case discipline seen in group_relative_advantage()\'s eps guard in Module 193.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸ್ಪಷ್ಟ len()==0 guard ಇಲ್ಲದೆ, len(pred_tokens) ಅಥವಾ len(gold_tokens) ಇಂದ ಭಾಗಿಸುವುದೂ ಯಾವುದೇ ಖಾಲಿ string ಗೆ ZeroDivisionError ಎಬ್ಬಿಸುತ್ತಿತ್ತು -- guard ಕೇವಲ ಒಂದೂ ಬದಿ ಖಾಲಿ ಆಗಿರುವಾಗ (ನಿಜ ಹೊಂದಿಕೆಯಿಲ್ಲ) 0.0 ಮತ್ತೆ ಎರಡೂ ಖಾಲಿ ಆಗಿರುವಾಗ (ಸರಿಯಾದ trivial match) ನಿಖರವಾಗಿ 1.0 ಹಿಂತಿರುಗಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'EvalCase & EvalSuite: Structuring a Benchmark', textKn: 'EvalCase & EvalSuite: ಒಂದೂ Benchmark ಅನ್ನೂ ರಚಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'eval_suite.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement EvalCase (one prompt/gold/metric triple) and EvalSuite (a list of cases plus a run() method that applies any model function and aggregates scores).',
      descKn: 'EvalCase (ಒಂದೂ prompt/gold/metric triple) ಮತ್ತೆ EvalSuite (cases ya ಒಂದೂ list ಮತ್ತೆ ಯಾವುದೇ model function ಅನ್ವಯಿಸಿ scores ಅನ್ನೂ aggregate ಮಾಡುವ run() method) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
      code: "class EvalCase:\n    def __init__(self, prompt, gold, metric='exact_match'):\n        self.prompt = prompt\n        self.gold = gold\n        self.metric = metric\n\nclass EvalSuite:\n    def __init__(self, cases):\n        self.cases = cases\n\n    def run(self, model_fn):\n        scores = []\n        for case in self.cases:\n            pred = model_fn(case.prompt)\n            if case.metric == 'exact_match':\n                s = exact_match(pred, case.gold)\n            elif case.metric == 'token_f1':\n                s = token_f1(pred, case.gold)\n            scores.append(s)\n        return {'mean_score': float(np.mean(scores)), 'scores': scores}\n\nsuite = EvalSuite([\n    EvalCase('capital of France?', 'Paris'),\n    EvalCase('capital of Japan?', 'Tokyo'),\n    EvalCase('2+2?', '4'),\n])" } },
    { type: 'code', data: {
      filename: 'demo_models.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement demo_model_good() (a dictionary lookup that answers correctly) and demo_model_bad() (always answers "I do not know"), then genuinely run the suite against both.',
      descKn: 'demo_model_good() (ಸರಿಯಾಗಿ ಉತ್ತರಿಸುವ ಒಂದೂ dictionary lookup) ಮತ್ತೆ demo_model_bad() (ಯಾವಾಗಲೂ "I do not know" ಉತ್ತರಿಸುತ್ತದೆ) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಂತರ suite ಅನ್ನೂ ಎರಡರ ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
      code: "def demo_model_good(prompt):\n    answers = {'capital of France?': 'Paris', 'capital of Japan?': 'Tokyo', '2+2?': '4'}\n    return answers.get(prompt, 'unknown')\n\ndef demo_model_bad(prompt):\n    return 'I do not know'\n\nprint('demo_model_good results:', suite.run(demo_model_good))\nprint('demo_model_bad results:', suite.run(demo_model_bad))" } },
    { type: 'output', data: { output: "demo_model_good results: {'mean_score': 1.0, 'scores': [1.0, 1.0, 1.0]}\ndemo_model_bad results: {'mean_score': 0.0, 'scores': [0.0, 0.0, 0.0]}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Harness Correctly Separates a Good Model From a Bad One', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Harness ಒಂದೂ ಉತ್ತಮ Model ಅನ್ನೂ ಒಂದೂ ಕೆಟ್ಟದೂ ಇಂದ ಸರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: EvalSuite.run() correctly plugs any callable model_fn into the same three cases, scoring demo_model_good at exactly 1.0 mean (all three answers correct) and demo_model_bad at exactly 0.0 mean (every answer wrong) -- the harness itself is model-agnostic, which is exactly what lets the same suite evaluate a from-scratch MiniGPT, an SFT checkpoint, or a DPO-aligned model without rewriting any evaluation code.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: EvalSuite.run() ಯಾವುದೇ callable model_fn ಅನ್ನೂ ಅದೇ ಮೂರೂ cases ಗೆ ಸರಿಯಾಗಿ ಪ್ಲಗ್ ಮಾಡುತ್ತದೆ, demo_model_good ಅನ್ನೂ ನಿಖರವಾಗಿ 1.0 mean (ಎಲ್ಲಾ ಮೂರೂ ಉತ್ತರಗಳು ಸರಿ) ಮತ್ತೆ demo_model_bad ಅನ್ನೂ ನಿಖರವಾಗಿ 0.0 mean ಆಗಿ score ಮಾಡುತ್ತದೆ -- harness ಸ್ವತಃ model-agnostic ಆಗಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'exact_match vs token_f1: When to Use Each', captionKn: 'exact_match vs token_f1: ಪ್ರತಿಯೊಂದನ್ನೂ ಯಾವಾಗ ಬಳಸಬೇಕು',
      rows: "Metric|Best for|Weakness\nexact_match|Closed-form answers (capitals, math, multiple choice)|Zero credit for near-miss free-form text\ntoken_f1|Free-form generation, summaries, open QA|Ignores word order and meaning, only counts token overlap" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• exact_match: a binary metric requiring an exact normalized string match\n• token_f1: harmonic mean of precision and recall over overlapping tokens\n• EvalCase: a single (prompt, gold answer, metric) test case\n• EvalSuite: a collection of EvalCase objects plus a run() method that scores any model function\n• Benchmark harness: reusable infrastructure for scoring any model against a fixed set of test cases',
      bodyKn: '• exact_match: ಒಂದೂ ನಿಖರ normalized string match ಅಗತ್ಯಪಡಿಸುವ ಒಂದೂ binary metric\n• token_f1: overlapping tokens ಮೇಲೆ precision ಮತ್ತೆ recall ya harmonic mean\n• EvalCase: ಒಂದೂ single (prompt, gold answer, metric) test case\n• EvalSuite: EvalCase objects ya ಒಂದೂ ಸಂಗ್ರಹ ಮತ್ತೆ ಯಾವುದೇ model function ಅನ್ನೂ score ಮಾಡುವ run() method\n• Benchmark harness: ಒಂದೂ ಸ್ಥಿರ test cases ya ಸೆಟ್ ವಿರುದ್ಧ ಯಾವುದೇ model score ಮಾಡಲು ಮರುಬಳಸಬಹುದಾದ infrastructure' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'exact_match and token_f1, genuinely implemented here, are the same two metrics that power SQuAD (reading comprehension) leaderboard scoring -- SQuAD reports both an exact-match percentage and an F1 score for exactly the reason demonstrated here: partial credit matters for free-form answers.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿದ exact_match ಮತ್ತೆ token_f1, SQuAD (reading comprehension) leaderboard scoring ಅನ್ನೂ ಶಕ್ತಿಯುಳ್ಳ ಅದೇ ಎರಡೂ metrics -- SQuAD ಇಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ ಕಾರಣಕ್ಕಾಗಿ exact-match percentage ಮತ್ತೆ F1 score ಎರಡನ್ನೂ ವರದಿ ಮಾಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: a model-agnostic EvalSuite.run(model_fn) lets teams score a from-scratch model, an SFT checkpoint, and a DPO/RLHF-aligned model against the identical fixed cases, isolating whether alignment work genuinely helped\n• Genuinely confirmed: choosing exact_match vs token_f1 per EvalCase (rather than one metric for everything) lets a single suite mix closed-form and open-ended questions correctly',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ model-agnostic EvalSuite.run(model_fn) teams ಗೆ ಒಂದೂ from-scratch model, ಒಂದೂ SFT checkpoint, ಮತ್ತೆ ಒಂದೂ DPO/RLHF-aligned model ಅನ್ನೂ ಅದೇ ಸ್ಥಿರ cases ವಿರುದ್ಧ score ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ EvalCase ಗೆ exact_match vs token_f1 ಆಯ್ಕೆ ಮಾಡುವುದೂ ಒಂದೂ single suite ಅನ್ನೂ closed-form ಮತ್ತೆ open-ended ಪ್ರಶ್ನೆಗಳನ್ನೂ ಸರಿಯಾಗಿ ಮಿಶ್ರಣ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a team reports "our fine-tuned model scores 78% exact-match on our internal QA benchmark," they are running the same EvalCase/EvalSuite pattern genuinely built here, just with a much larger case list and a real model in place of demo_model_good.',
      bodyKn: 'ಒಂದೂ team "ನಮ್ಮ fine-tuned model ನಮ್ಮ internal QA benchmark ಮೇಲೆ 78% exact-match score ಮಾಡುತ್ತದೆ" ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಅವರು ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ ಅದೇ EvalCase/EvalSuite pattern ಚಲಾಯಿಸುತ್ತಿದ್ದಾರೆ, ಕೇವಲ ಹೆಚ್ಚು ದೊಡ್ಡ case list ಮತ್ತೆ demo_model_good ya ಬದಲು ಒಂದೂ ನಿಜ model ಜೊತೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'The EvalSuite Pipeline', titleKn: 'EvalSuite ಪೈಪ್‌ಲೈನ್',
      captionEn: 'Each EvalCase provides a prompt and gold answer; the model function generates a prediction; the case\'s chosen metric scores it; EvalSuite aggregates all scores into one mean.',
      captionKn: 'ಪ್ರತಿ EvalCase ಒಂದೂ prompt ಮತ್ತೆ gold answer ಒದಗಿಸುತ್ತದೆ; model function ಒಂದೂ prediction ಉತ್ಪಾದಿಸುತ್ತದೆ; case ya ಆಯ್ಕೆ ಮಾಡಿದ metric ಅದನ್ನೂ score ಮಾಡುತ್ತದೆ; EvalSuite ಎಲ್ಲಾ scores ಅನ್ನೂ ಒಂದೂ mean ಆಗಿ aggregate ಮಾಡುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='70' width='130' height='60' rx='8' fill='#1e293b' stroke='#38bdf8'/><text x='75' y='105' fill='#e2e8f0' font-size='13' text-anchor='middle'>EvalCase</text><rect x='180' y='70' width='130' height='60' rx='8' fill='#1e293b' stroke='#f59e0b'/><text x='245' y='105' fill='#e2e8f0' font-size='13' text-anchor='middle'>model_fn(prompt)</text><rect x='350' y='70' width='130' height='60' rx='8' fill='#1e293b' stroke='#a855f7'/><text x='415' y='95' fill='#e2e8f0' font-size='13' text-anchor='middle'>metric(pred, gold)</text><rect x='520' y='70' width='150' height='60' rx='8' fill='#1e293b' stroke='#22c55e'/><text x='595' y='95' fill='#e2e8f0' font-size='13' text-anchor='middle'>EvalSuite.run()</text><text x='595' y='112' fill='#94a3b8' font-size='10' text-anchor='middle'>mean_score</text><line x1='140' y1='100' x2='178' y2='100' stroke='#64748b' stroke-width='2' marker-end='url(#ah3)'/><line x1='310' y1='100' x2='348' y2='100' stroke='#64748b' stroke-width='2' marker-end='url(#ah3)'/><line x1='480' y1='100' x2='518' y2='100' stroke='#64748b' stroke-width='2' marker-end='url(#ah3)'/><defs><marker id='ah3' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6' fill='#64748b'/></marker></defs></svg>" } },

    { type: 'table', data: {
      captionEn: 'Real Benchmarks and the Metrics This Lesson\'s Harness Could Score Them With', captionKn: 'ನಿಜ Benchmarks ಮತ್ತೆ ಈ Lesson ya Harness ಅವುಗಳನ್ನೂ Score ಮಾಡಬಹುದಾದ Metrics',
      rows: "Benchmark|Typical metric\nMMLU (multiple choice)|exact_match on the selected option\nSQuAD (reading comprehension)|exact_match and token_f1, reported together\nGSM8K (math word problems)|exact_match on the final numeric answer\nSummarization benchmarks|token_f1 or ROUGE (a token-overlap family metric)" } },
    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'exact_match and token_f1 only work when there is a single gold answer to compare against -- but many real evaluations (which response is more helpful? which summary reads better?) have no single correct string. Part 2 genuinely builds llm_judge_simulated() and ELOTracker to handle exactly that kind of comparative, judgment-based evaluation.',
      bodyKn: 'exact_match ಮತ್ತೆ token_f1 ಕೇವಲ ಒಂದೂ single gold answer ಜೊತೆ ಹೋಲಿಸಲು ಒಂದೂ ಇರುವಾಗ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತವೆ -- ಆದರೆ ಹಲವಾರು ನಿಜ evaluations (ಯಾವ response ಹೆಚ್ಚು ಸಹಾಯಕ? ಯಾವ summary ಚೆನ್ನಾಗಿ ಓದುತ್ತದೆ?) ಗೆ ಒಂದೂ single ಸರಿಯಾದ string ಇಲ್ಲ. Part 2 ನಿಖರವಾಗಿ ಆ ರೀತಿಯ comparative, judgment-based evaluation ಅನ್ನೂ ನಿಭಾಯಿಸಲು llm_judge_simulated() ಮತ್ತೆ ELOTracker ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did exact_match("Paris", "paris") return, and why?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: exact_match("Paris", "paris") ಏನೂ ಹಿಂತಿರುಗಿಸಿತು, ಮತ್ತೆ ಏಕೆ?',
        opts: ['0.0, because the capitalization differs', '1.0, because .lower() normalizes case before comparing', '0.5, partial credit for a near match', 'An error'], correct: 1,
        optsKn: ['0.0, capitalization ಭಿನ್ನವಾಗಿರುವುದರಿಂದ', '1.0, .lower() ಹೋಲಿಸುವ ಮೊದಲೂ case ಅನ್ನೂ normalize ಮಾಡುವುದರಿಂದ', '0.5, ಒಂದೂ near match ಗೆ partial credit', 'ಒಂದೂ error'] },
      { q: 'Genuinely confirmed: for token_f1("the cat sat", "the cat sat on the mat"), what was the precision, recall, and resulting F1?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: token_f1("the cat sat", "the cat sat on the mat") ಗೆ, precision, recall, ಮತ್ತೆ ಫಲಿತಾಂಶ F1 ಏನಾಗಿತ್ತು?',
        opts: ['precision=0.5, recall=0.5, F1=0.5', 'precision=1.0, recall=0.5, F1=0.6667', 'precision=0.0, recall=0.0, F1=0.0', 'precision=1.0, recall=1.0, F1=1.0'], correct: 1,
        optsKn: ['precision=0.5, recall=0.5, F1=0.5', 'precision=1.0, recall=0.5, F1=0.6667', 'precision=0.0, recall=0.0, F1=0.0', 'precision=1.0, recall=1.0, F1=1.0'] },
      { q: 'Genuinely confirmed: what mean_score did demo_model_bad() get across all three EvalCase items, and why?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: demo_model_bad() ಎಲ್ಲಾ ಮೂರೂ EvalCase items ಆದ್ಯಂತ ಯಾವ mean_score ಪಡೆಯಿತು, ಮತ್ತೆ ಏಕೆ?',
        opts: ['1.0, because it always responds', 'Exactly 0.0, because it always answers "I do not know", matching none of the gold answers', '0.5, partial credit', 'It varies randomly each run'], correct: 1,
        optsKn: ['1.0, ಅದೂ ಯಾವಾಗಲೂ ಉತ್ತರಿಸುವುದರಿಂದ', 'ನಿಖರವಾಗಿ 0.0, ಅದೂ ಯಾವಾಗಲೂ "I do not know" ಎಂದೂ ಉತ್ತರಿಸುವುದರಿಂದ, ಯಾವುದೇ gold answer ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ', '0.5, partial credit', 'ಪ್ರತಿ run ಯಾದೃಚ್ಛಿಕವಾಗಿ ಬದಲಾಗುತ್ತದೆ'] },
      { q: 'Why is token_f1 generally preferred over exact_match for free-form generated summaries?', qKn: 'Free-form generated summaries ಗೆ token_f1 ಸಾಮಾನ್ಯವಾಗಿ exact_match ಗಿಂತ ಏಕೆ ಆದ್ಯತೆ ಪಡೆಯುತ್ತದೆ?',
        opts: ['token_f1 is faster to compute', 'token_f1 gives partial credit for overlapping content instead of requiring a perfect string match', 'exact_match cannot handle strings', 'They are functionally identical'], correct: 1,
        optsKn: ['token_f1 ಲೆಕ್ಕಹಾಕಲು ವೇಗವಾಗಿದೆ', 'token_f1 ಒಂದೂ ಪರಿಪೂರ್ಣ string match ಬೇಡುವ ಬದಲು overlapping content ಗೆ partial credit ನೀಡುತ್ತದೆ', 'exact_match strings ಅನ್ನೂ ನಿಭಾಯಿಸಲಾಗುವುದಿಲ್ಲ', 'ಅವೂ ಕ್ರಿಯಾತ್ಮಕವಾಗಿ ಒಂದೇ ಆಗಿವೆ'] },
      { q: 'What makes EvalSuite.run(model_fn) model-agnostic?', qKn: 'EvalSuite.run(model_fn) ಅನ್ನೂ model-agnostic ಆಗಿಸುವುದೂ ಏನೂ?',
        opts: ['It only works with demo_model_good', 'It accepts any callable that maps a prompt string to a prediction string, regardless of what is inside', 'It requires PyTorch', 'It hardcodes the model architecture'], correct: 1,
        optsKn: ['ಅದೂ ಕೇವಲ demo_model_good ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'ಅದೂ ಒಳಗೆ ಏನೇ ಇರಲಿ, ಒಂದೂ prompt string ಅನ್ನೂ ಒಂದೂ prediction string ಗೆ map ಮಾಡುವ ಯಾವುದೇ callable ಅನ್ನೂ ಸ್ವೀಕರಿಸುತ್ತದೆ', 'ಅದೂ PyTorch ಅಗತ್ಯಪಡಿಸುತ್ತದೆ', 'ಅದೂ model architecture ಅನ್ನೂ hardcode ಮಾಡುತ್ತದೆ'] },
    ] } },
  ],
};
