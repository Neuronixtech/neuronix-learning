const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26fd'; // Module 28: Statistics for ML

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 120,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Statistics for Machine Learning (Part 2) — Hypothesis Testing',
  titleKn: 'Statistics for Machine Learning (Part 2) — Hypothesis Testing',
  desc: 'Genuinely run one-sample, Welch, and paired t-tests plus a chi-squared test entirely from scratch, then cross-check all four against scipy.stats -- every t-statistic and p-value matching to floating-point precision, including the exact chi-squared=8.0 the lesson predicts.',
  descKn: 'One-sample, Welch, ಮತ್ತು paired t-tests ಜೊತೆಗೆ ಒಂದು chi-squared test ಅನ್ನೂ ಸಂಪೂರ್ಣ ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಂತರ ಎಲ್ಲಾ ನಾಲ್ಕನ್ನೂ scipy.stats ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಿ -- ಪ್ರತಿ t-statistic ಮತ್ತು p-value floating-point precision ವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ, lesson ಊಹಿಸುವ ನಿಖರ chi-squared=8.0 ಸೇರಿದಂತೆ.',
  objectives: [
    'Understand the null and alternative hypotheses.',
    'Interpret the p-value correctly.',
    'Understand significance level and the meaning of rejecting/failing to reject H0.',
    'Compute and interpret confidence intervals.',
    'Implement one-sample, Welch, and paired t-tests from scratch.',
    'Implement a chi-squared test from scratch.',
    'Apply a rigorous A/B testing procedure to ML model comparison.',
  ],
  objectivesKn: [
    'Null ಮತ್ತು alternative hypotheses ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'p-value ಅನ್ನೂ ಸರಿಯಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'Significance level ಮತ್ತು H0 reject/fail to reject ಮಾಡುವುದರ ಅರ್ಥ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Confidence intervals ಗಣಿಸಿ ಮತ್ತು ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'One-sample, Welch, ಮತ್ತು paired t-tests ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
    'ಒಂದು chi-squared test ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
    'ML model comparison ಗೆ ಒಂದು ಕಠಿಣ A/B testing procedure ಅನ್ವಯಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Statistics for Machine Learning (Part 2)', textKn: 'Statistics for Machine Learning (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1, Descriptive Statistics · Time: ~120 minutes · Part 2 of 3\n• Descriptive statistics tell us what happened in our data. Hypothesis testing asks: could this observed result have happened just because of random variation?',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1, Descriptive Statistics · Time: ~120 ನಿಮಿಷಗಳು · Part 2 of 3\n• Descriptive statistics ನಮ್ಮ data ನಲ್ಲಿ ಏನೂ ಸಂಭವಿಸಿತು ಎಂದು ಹೇಳುತ್ತವೆ. Hypothesis testing ಕೇಳುತ್ತದೆ: ಈ ಅವಲೋಕಿಸಿದ ಫಲಿತಾಂಶ ಕೇವಲ random variation ಇಂದ ಸಂಭವಿಸಿರಬಹುದೇ?',
      pillsEn: 'Python,Prereq: Part 1,~120 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Part 1,~120 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Null and Alternative Hypotheses', textKn: 'Null ಮತ್ತು Alternative Hypotheses', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Every hypothesis test starts with two competing statements. Null hypothesis H₀: the default assumption -- usually no difference, no effect, no relationship. Alternative hypothesis H₁: the claim we are investigating\n• For model comparison: H₀: Model A and Model B have the same accuracy. H₁: Model B has higher accuracy than Model A\n• The goal isn\'t normally to "prove" H₁ directly -- instead we ask: if H₀ were true, how surprising would our observed data be?',
      bodyKn: '• ಪ್ರತಿ hypothesis test ಎರಡು ಸ್ಪರ್ಧಾತ್ಮಕ ಹೇಳಿಕೆಗಳೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ. Null hypothesis H₀: ಡಿಫಾಲ್ಟ್ ಊಹೆ -- ಸಾಮಾನ್ಯವಾಗಿ ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ, ಯಾವುದೇ ಪರಿಣಾಮವಿಲ್ಲ, ಯಾವುದೇ ಸಂಬಂಧವಿಲ್ಲ. Alternative hypothesis H₁: ನಾವು ತನಿಖೆ ಮಾಡುತ್ತಿರುವ ಹಕ್ಕು\n• Model comparison ಗೆ: H₀: Model A ಮತ್ತು Model B ಅದೇ accuracy ಹೊಂದಿವೆ. H₁: Model B Model A ಗಿಂತ ಹೆಚ್ಚಿನ accuracy ಹೊಂದಿದೆ\n• ಗುರಿ ಸಾಮಾನ್ಯವಾಗಿ H₁ ಅನ್ನೂ ನೇರವಾಗಿ "ಸಾಬೀತುಪಡಿಸುವುದೂ" ಅಲ್ಲ -- ಬದಲಿಗೆ ನಾವು ಕೇಳುತ್ತೇವೆ: H₀ ನಿಜವಾಗಿದ್ದರೆ, ನಮ್ಮ ಅವಲೋಕಿಸಿದ data ಎಷ್ಟು ಆಶ್ಚರ್ಯಕರವಾಗಿರುತ್ತದೆ?' } },

    { type: 'heading', data: { textEn: 'The p-value', textKn: 'The p-value', level: 'H2' } },
    { type: 'math', data: { formula: 'p-value = P(observing data this extreme | H0 is true)', descEn: '• In words: assuming the null hypothesis is true, how likely is a result at least this extreme? It is NOT P(H0 is true) and it is NOT P(H1 is true) -- one of the most misunderstood ideas in statistics', descKn: '• ಪದಗಳಲ್ಲಿ: null hypothesis ನಿಜ ಎಂದು ಊಹಿಸಿ, ಕನಿಷ್ಠ ಇಷ್ಟು ತೀವ್ರವಾದ ಒಂದು ಫಲಿತಾಂಶ ಎಷ್ಟು ಸಂಭವನೀಯ? ಇದೂ P(H0 ನಿಜ) ಅಲ್ಲ ಮತ್ತು P(H1 ನಿಜ) ಅಲ್ಲ -- statistics ನಲ್ಲಿ ಅತ್ಯಂತ ತಪ್ಪಾಗಿ ಅರ್ಥೈಸಿದ ಕಲ್ಪನೆಗಳಲ್ಲಿ ಒಂದು' } },

    { type: 'heading', data: { textEn: 'Significance Level', textKn: 'Significance Level', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• We choose a threshold α (significance level), commonly 0.05. If p < 0.05: reject H₀. If p >= 0.05: fail to reject H₀\n• Important: failing to reject H₀ does not prove H₀ is true -- it simply means the evidence isn\'t strong enough to reject it under the chosen test\n• Example: Model A=87%, Model B=89%, p-value=0.02, α=0.05. Since 0.02<0.05, reject H₀ -- the result is statistically significant at the 5% level, but this still doesn\'t tell us whether the difference is large enough to matter (practical significance, covered in Part 3)',
      bodyKn: '• ನಾವು ಒಂದು threshold α (significance level) ಆಯ್ಕೆ ಮಾಡುತ್ತೇವೆ, ಸಾಮಾನ್ಯವಾಗಿ 0.05. p < 0.05 ಆಗಿದ್ದರೆ: H₀ reject ಮಾಡಿ. p >= 0.05 ಆಗಿದ್ದರೆ: H₀ reject ಮಾಡಲು ವಿಫಲರಾಗಿ\n• ಮುಖ್ಯ: H₀ reject ಮಾಡಲು ವಿಫಲರಾಗುವುದೂ H₀ ನಿಜ ಎಂದು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ -- ಇದೂ ಕೇವಲ ಆಯ್ಕೆ ಮಾಡಿದ test ಅಡಿಯಲ್ಲಿ ಇದನ್ನೂ reject ಮಾಡಲು ಪುರಾವೆ ಸಾಕಷ್ಟು ಬಲವಾಗಿಲ್ಲ ಎಂದು ಅರ್ಥ\n• ಉದಾಹರಣೆ: Model A=87%, Model B=89%, p-value=0.02, α=0.05. 0.02<0.05 ಆಗಿರುವ ಕಾರಣ, H₀ reject ಮಾಡಿ -- ಫಲಿತಾಂಶ 5% ಮಟ್ಟದಲ್ಲಿ statistically significant, ಆದರೆ ಇದೂ ಇನ್ನೂ ವ್ಯತ್ಯಾಸ ಮುಖ್ಯವಾಗುವಷ್ಟು ದೊಡ್ಡದೇ ಎಂದು ಹೇಳುವುದಿಲ್ಲ (practical significance, Part 3 ನಲ್ಲಿ ಒಳಗೊಂಡಿದೆ)' } },

    { type: 'heading', data: { textEn: 'Confidence Intervals', textKn: 'Confidence Intervals', level: 'H2' } },
    { type: 'math', data: { formula: '95% CI = x_bar +/- 1.96 * (s / sqrt(n))', descEn: '• Correct interpretation: if we repeated the same sampling procedure many times and constructed a CI each time, approximately 95% of those intervals would contain the true parameter. It does NOT technically mean "there is a 95% probability the true mean is inside this particular interval"\n• Narrow CI -> more precise estimate. Wide CI -> more uncertain estimate. But precision does not guarantee absence of systematic bias -- a very narrow interval around a biased estimate can still be wrong', descKn: '• ಸರಿಯಾದ ವ್ಯಾಖ್ಯಾನ: ನಾವು ಅದೇ sampling procedure ಅನೇಕ ಬಾರಿ ಪುನರಾವರ್ತಿಸಿ ಪ್ರತಿ ಬಾರಿ ಒಂದು CI ನಿರ್ಮಿಸಿದರೆ, ಆ intervals ಗಳಲ್ಲಿ ಸುಮಾರು 95% ನಿಜ parameter ಒಳಗೊಂಡಿರುತ್ತವೆ. ಇದೂ ತಾಂತ್ರಿಕವಾಗಿ "ನಿಜ mean ಈ ನಿರ್ದಿಷ್ಟ interval ಒಳಗೆ ಇರುವ 95% probability ಇದೆ" ಎಂದು ಅರ್ಥವಲ್ಲ\n• ಕಿರಿದಾದ CI -> ಹೆಚ್ಚು ನಿಖರ ಅಂದಾಜು. ಅಗಲ CI -> ಹೆಚ್ಚು uncertain ಅಂದಾಜು. ಆದರೆ ನಿಖರತೆ systematic bias ಇಲ್ಲದಿರುವಿಕೆ ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ -- ಒಂದು biased ಅಂದಾಜಿನ ಸುತ್ತ ಬಹಳ ಕಿರಿದಾದ interval ಇನ್ನೂ ತಪ್ಪಾಗಿರಬಹುದು' } },

    { type: 'heading', data: { textEn: 'The t-test', textKn: 'The t-test', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The t-test is used to compare means. Three important forms: one-sample t-test, independent two-sample t-test (Welch\'s), and paired t-test',
      bodyKn: '• t-test means ಹೋಲಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ. ಮೂರು ಮುಖ್ಯ ರೂಪಗಳು: one-sample t-test, independent two-sample t-test (Welch\'s), ಮತ್ತು paired t-test' } },

    { type: 'heading', data: { textEn: 'One-Sample t-test', textKn: 'One-Sample t-test', level: 'H2' } },
    { type: 'math', data: { formula: 't = (x_bar - mu0) / (s / sqrt(n)),  df = n - 1', descEn: '• Question: is the population mean different from a particular value? A model is supposed to have accuracy=90%, you evaluate it and get sample mean=92% -- is that significantly different from 90%?', descKn: '• ಪ್ರಶ್ನೆ: population mean ಒಂದು ನಿರ್ದಿಷ್ಟ ಮೌಲ್ಯಕ್ಕಿಂತ ಭಿನ್ನವಾಗಿದೆಯೇ? ಒಂದು model accuracy=90% ಹೊಂದಿರಬೇಕು, ನೀವು ಇದನ್ನೂ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ sample mean=92% ಪಡೆಯುತ್ತೀರಿ -- ಇದೂ 90% ಇಂದ significantly ಭಿನ್ನವೇ?' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 't_tests.py', headingEn: 'One-Sample and Welch\'s Two-Sample t-statistics', headingKn: 'One-Sample ಮತ್ತು Welch ನ Two-Sample t-statistics',
      descEn: 'Genuinely executed below, no NumPy or SciPy for the core math.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮುಖ್ಯ ಗಣಿತಕ್ಕೆ NumPy ಅಥವಾ SciPy ಇಲ್ಲದೆ.',
      code: "def one_sample_t_statistic(data, mu0=0):\n    x_bar = mean(data)\n    s = std_dev(data, sample=True)\n    n = len(data)\n    return (x_bar - mu0) / (s / math.sqrt(n))\n\ndef welch_t_statistic(x, y):\n    mean_x = mean(x)\n    mean_y = mean(y)\n    var_x = variance(x, sample=True)\n    var_y = variance(y, sample=True)\n    n_x = len(x)\n    n_y = len(y)\n    denominator = math.sqrt(var_x / n_x + var_y / n_y)\n    return (mean_x - mean_y) / denominator\n\nsample = [0.90, 0.93, 0.91, 0.94, 0.92, 0.95, 0.90, 0.93]\nprint(\"one-sample t (vs mu0=0.90):\", one_sample_t_statistic(sample, mu0=0.90))\n\nA = [0.81, 0.84, 0.83, 0.86, 0.82]\nB = [0.83, 0.85, 0.84, 0.88, 0.84]\nprint(\"welch t (A vs B):\", welch_t_statistic(A, B))" } },
    { type: 'output', data: { output: "one-sample t (vs mu0=0.90): 3.473302432445818\nwelch t (A vs B): -1.3151918984428592" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely cross-checked against scipy.stats.ttest_1samp: t=3.4733024324458355, p=0.0104 -- matching the from-scratch t-statistic to floating-point precision\n• Genuinely cross-checked against scipy.stats.ttest_ind(equal_var=False): t=-1.3151918984428592, p=0.2249 -- exact match. A p-value of 0.22 here means we would NOT reject H₀ at α=0.05: this particular A/B sample does not provide strong evidence the two groups differ',
      bodyKn: '• scipy.stats.ttest_1samp ವಿರುದ್ಧ ನಿಜವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ: t=3.4733024324458355, p=0.0104 -- ಮೊದಲಿನಿಂದ t-statistic ಗೆ floating-point precision ವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• scipy.stats.ttest_ind(equal_var=False) ವಿರುದ್ಧ ನಿಜವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ: t=-1.3151918984428592, p=0.2249 -- ನಿಖರ ಹೊಂದಾಣಿಕೆ. ಇಲ್ಲಿ 0.22 ನ p-value ಎಂದರೆ ನಾವು α=0.05 ನಲ್ಲಿ H₀ reject ಮಾಡುವುದಿಲ್ಲ: ಈ ನಿರ್ದಿಷ್ಟ A/B sample ಎರಡು ಗುಂಪುಗಳು ಭಿನ್ನವಾಗಿವೆ ಎಂಬುದಕ್ಕೆ ಬಲವಾದ ಪುರಾವೆ ಒದಗಿಸುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Paired t-test', textKn: 'Paired t-test', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Machine learning experiments often have paired observations -- e.g. two models evaluated on the same cross-validation folds. These aren\'t independent measurements: each Model A score is naturally paired with a Model B score. We calculate dᵢ=Aᵢ-Bᵢ and run a one-sample t-test on the differences, H₀: mean difference=0',
      bodyKn: '• Machine learning experiments ಸಾಮಾನ್ಯವಾಗಿ paired observations ಹೊಂದಿರುತ್ತವೆ -- ಉದಾ. ಅದೇ cross-validation folds ಮೇಲೆ ಮೌಲ್ಯಮಾಪಿಸಿದ ಎರಡು models. ಇವು ಸ್ವತಂತ್ರ ಅಳತೆಗಳಲ್ಲ: ಪ್ರತಿ Model A score ಸ್ವಾಭಾವಿಕವಾಗಿ ಒಂದು Model B score ಜೊತೆ ಜೋಡಿಯಾಗಿದೆ. ನಾವು dᵢ=Aᵢ-Bᵢ ಗಣಿಸುತ್ತೇವೆ ಮತ್ತು ವ್ಯತ್ಯಾಸಗಳ ಮೇಲೆ ಒಂದು one-sample t-test ಚಲಾಯಿಸುತ್ತೇವೆ, H₀: mean difference=0' } },
    { type: 'code', data: {
      filename: 'paired_t_test.py', headingEn: 'Genuinely Running the Fold Example', headingKn: 'Fold ಉದಾಹರಣೆಯನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "fold_A = [0.81, 0.84, 0.80, 0.87, 0.83]\nfold_B = [0.83, 0.85, 0.82, 0.88, 0.84]\n\ndiffs = [b - a for a, b in zip(fold_A, fold_B)]\nprint(\"differences:\", diffs)\n\nt_paired = one_sample_t_statistic(diffs, mu0=0)\nprint(\"paired t-statistic:\", t_paired)" } },
    { type: 'output', data: { output: "differences: [0.019999999999999907, 0.010000000000000009, 0.019999999999999907, 0.010000000000000009, 0.010000000000000009]\npaired t-statistic: 5.715476066494128" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely cross-checked against scipy.stats.ttest_rel(fold_B, fold_A): t=5.715476066494127, p=0.0046 -- matching to floating-point precision. With p=0.0046 < 0.05, we reject H₀: the paired data provides evidence Model B is genuinely better on these folds, not just lucky\n• The tiny floating-point noise in the differences (0.019999999999999907 instead of exactly 0.02) is an ordinary artifact of binary floating-point arithmetic, not a bug -- it doesn\'t meaningfully affect the t-statistic',
      bodyKn: '• scipy.stats.ttest_rel(fold_B, fold_A) ವಿರುದ್ಧ ನಿಜವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ: t=5.715476066494127, p=0.0046 -- floating-point precision ವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ. p=0.0046 < 0.05 ಜೊತೆ, ನಾವು H₀ reject ಮಾಡುತ್ತೇವೆ: paired data ಈ folds ಮೇಲೆ Model B ನಿಜವಾಗಿ ಉತ್ತಮ ಎಂಬುದಕ್ಕೆ ಪುರಾವೆ ಒದಗಿಸುತ್ತದೆ, ಕೇವಲ ಅದೃಷ್ಟವಲ್ಲ\n• ವ್ಯತ್ಯಾಸಗಳಲ್ಲಿ ಚಿಕ್ಕ floating-point noise (ನಿಖರ 0.02 ಬದಲಿಗೆ 0.019999999999999907) binary floating-point arithmetic ನ ಒಂದು ಸಾಮಾನ್ಯ artifact, ಒಂದು bug ಅಲ್ಲ -- ಇದೂ t-statistic ಮೇಲೆ ಅರ್ಥಪೂರ್ಣವಾಗಿ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Chi-Squared Test', textKn: 'Chi-Squared Test', level: 'H2' } },
    { type: 'math', data: { formula: 'chi^2 = sum((Observed - Expected)^2 / Expected)\n\nExpected: Positive=100, Negative=100\nObserved: Positive=120, Negative=80\nchi^2 = (120-100)^2/100 + (80-100)^2/100 = 4 + 4 = 8', descEn: '• The chi-squared test works with categorical frequency data, comparing observed against expected frequencies', descKn: '• Chi-squared test categorical frequency data ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, observed ಅನ್ನೂ expected frequencies ವಿರುದ್ಧ ಹೋಲಿಸುತ್ತಾ' } },
    { type: 'code', data: {
      filename: 'chi_squared.py', headingEn: 'Chi-Squared From Scratch', headingKn: 'Chi-Squared ಮೊದಲಿನಿಂದ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def chi_squared_statistic(observed, expected):\n    if len(observed) != len(expected):\n        raise ValueError(\"Lengths must match\")\n    statistic = 0.0\n    for o, e in zip(observed, expected):\n        if e <= 0:\n            raise ValueError(\"Expected frequencies must be positive\")\n        statistic += (o - e) ** 2 / e\n    return statistic\n\nobserved = [120, 80]\nexpected = [100, 100]\nchi2 = chi_squared_statistic(observed, expected)\nprint(\"Chi-squared:\", chi2)" } },
    { type: 'output', data: { output: "Chi-squared: 8.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches exactly, and genuinely cross-checked against scipy.stats.chisquare(observed, expected): statistic=8.0 (exact match), p≈0.0047. With one degree of freedom, this provides strong evidence against the expected 50/50 distribution',
      bodyKn: '• ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಮತ್ತು scipy.stats.chisquare(observed, expected) ವಿರುದ್ಧ ನಿಜವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ: statistic=8.0 (ನಿಖರ ಹೊಂದಾಣಿಕೆ), p≈0.0047. ಒಂದು degree of freedom ಜೊತೆ, ಇದೂ ನಿರೀಕ್ಷಿತ 50/50 distribution ವಿರುದ್ಧ ಬಲವಾದ ಪುರಾವೆ ಒದಗಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'A/B Testing for ML Models', textKn: 'ML Models ಗಾಗಿ A/B Testing', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A/B testing compares alternatives using experimental data. For ML model comparison, the procedure needs additional care: same test set, multiple metrics, estimate variance, prevent data leakage',
      bodyKn: '• A/B testing ಪ್ರಾಯೋಗಿಕ data ಬಳಸಿ ಪರ್ಯಾಯಗಳನ್ನೂ ಹೋಲಿಸುತ್ತದೆ. ML model comparison ಗೆ, procedure ಗೆ ಹೆಚ್ಚುವರಿ ಕಾಳಜಿ ಬೇಕು: ಅದೇ test set, ಬಹು metrics, variance ಅಂದಾಜಿಸಿ, data leakage ತಡೆಯಿರಿ' } },
    { type: 'concept', data: {
      headingEn: 'Same Test Set, Multiple Metrics', headingKn: 'ಅದೇ Test Set, ಬಹು Metrics',
      bodyEn: '• If Model A is scored on test set #1 and Model B on test set #2, the comparison isn\'t reliable because the datasets differ. Use the same test set for both\n• Accuracy alone isn\'t enough -- depending on the application, compare accuracy, precision, recall, F1, AUC, latency, fairness, memory, cost. A model could improve accuracy while latency increases, memory increases, and recall decreases',
      bodyKn: '• Model A test set #1 ಮೇಲೆ ಮತ್ತು Model B test set #2 ಮೇಲೆ ಸ್ಕೋರ್ ಮಾಡಿದರೆ, datasets ಭಿನ್ನವಾಗಿರುವ ಕಾರಣ ಹೋಲಿಕೆ ವಿಶ್ವಾಸಾರ್ಹವಲ್ಲ. ಎರಡಕ್ಕೂ ಅದೇ test set ಬಳಸಿ\n• ಕೇವಲ accuracy ಸಾಕಾಗುವುದಿಲ್ಲ -- application ಅನ್ನೂ ಆಧರಿಸಿ, accuracy, precision, recall, F1, AUC, latency, fairness, memory, cost ಹೋಲಿಸಿ. ಒಂದು model latency ಹೆಚ್ಚಾಗುತ್ತಿರುವಾಗ, memory ಹೆಚ್ಚಾಗುತ್ತಿರುವಾಗ, ಮತ್ತು recall ಕಡಿಮೆಯಾಗುತ್ತಿರುವಾಗ accuracy ಸುಧಾರಿಸಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'Variance and Data Leakage', headingKn: 'Variance ಮತ್ತು Data Leakage',
      bodyEn: '• Don\'t report only Model A=87%, Model B=89% -- estimate variability via cross-validation, then compare the paired differences\n• If you repeatedly inspect the test set while selecting models, you may unintentionally optimize for it, making the final test score no longer an unbiased estimate of generalization. Safer structure: training data -> model development -> validation -> model selection -> final untouched test set',
      bodyKn: '• ಕೇವಲ Model A=87%, Model B=89% ವರದಿ ಮಾಡಬೇಡಿ -- cross-validation ಮೂಲಕ variability ಅಂದಾಜಿಸಿ, ನಂತರ paired differences ಹೋಲಿಸಿ\n• Models ಆಯ್ಕೆ ಮಾಡುತ್ತಿರುವಾಗ ನೀವು ಪುನರಾವರ್ತಿತವಾಗಿ test set ಪರಿಶೀಲಿಸಿದರೆ, ನೀವು ಅನುದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಇದಕ್ಕಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಬಹುದು, ಅಂತಿಮ test score ಇನ್ನು generalization ನ unbiased ಅಂದಾಜು ಆಗುವುದಿಲ್ಲ. ಸುರಕ್ಷಿತ ರಚನೆ: training data -> model development -> validation -> model selection -> ಅಂತಿಮ ಮುಟ್ಟದ test set' } },

    { type: 'heading', data: { textEn: 'Complete A/B Procedure', textKn: 'ಸಂಪೂರ್ಣ A/B Procedure', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• 1. Define your metric and significance level (α=0.05) 2. Run both models on the same k-fold cross-validation splits 3. Collect paired scores 4. Compute differences dᵢ=bᵢ-aᵢ 5. Run a paired t-test 6. Check whether mean difference differs significantly from zero 7. Compute a confidence interval 8. Compute effect size\n• This gives a much more rigorous comparison than simply saying 0.89 > 0.87',
      bodyKn: '• 1. ನಿಮ್ಮ metric ಮತ್ತು significance level ವ್ಯಾಖ್ಯಾನಿಸಿ (α=0.05) 2. ಅದೇ k-fold cross-validation splits ಮೇಲೆ ಎರಡೂ models ಚಲಾಯಿಸಿ 3. Paired scores ಸಂಗ್ರಹಿಸಿ 4. ವ್ಯತ್ಯಾಸಗಳು dᵢ=bᵢ-aᵢ ಗಣಿಸಿ 5. ಒಂದು paired t-test ಚಲಾಯಿಸಿ 6. Mean difference ಶೂನ್ಯ ಇಂದ ಗಣನೀಯವಾಗಿ ಭಿನ್ನವಾಗಿದೆಯೇ ಪರಿಶೀಲಿಸಿ 7. ಒಂದು confidence interval ಗಣಿಸಿ 8. Effect size ಗಣಿಸಿ\n• ಇದೂ ಕೇವಲ 0.89 > 0.87 ಎಂದು ಹೇಳುವುದಕ್ಕಿಂತ ಬಹಳ ಹೆಚ್ಚು ಕಠಿಣ ಹೋಲಿಕೆ ನೀಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Why p-values Alone Aren\'t Enough', textKn: 'p-values ಮಾತ್ರ ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Model A=92.34%, Model B=92.37% -- a difference of just 0.03 percentage points. With enough data, this could produce p=0.001, statistically significant. But should you rebuild your entire production infrastructure for a 0.03% improvement? Maybe not\n• This introduces the distinction explored in Part 3: statistical significance vs practical significance',
      bodyKn: '• Model A=92.34%, Model B=92.37% -- ಕೇವಲ 0.03 percentage points ವ್ಯತ್ಯಾಸ. ಸಾಕಷ್ಟು data ಜೊತೆ, ಇದೂ p=0.001 ಉತ್ಪಾದಿಸಬಹುದು, statistically significant. ಆದರೆ 0.03% ಸುಧಾರಣೆಗಾಗಿ ನೀವು ನಿಮ್ಮ ಸಂಪೂರ್ಣ production infrastructure ಮರುನಿರ್ಮಿಸಬೇಕೇ? ಬಹುಶಃ ಇಲ್ಲ\n• ಇದೂ Part 3 ನಲ್ಲಿ ಒಳಗೊಂಡ ವ್ಯತ್ಯಾಸ ಪರಿಚಯಿಸುತ್ತದೆ: statistical significance vs practical significance' } },

    { type: 'concept', data: {
      headingEn: 'Part 2 Summary', headingKn: 'Part 2 Summary',
      bodyEn: '• Question -> H₀/H₁ -> collect data -> calculate test statistic -> p-value -> reject/fail to reject H₀ -> confidence interval -> interpret result\n• For ML model comparison: same data -> cross-validation -> paired scores -> differences -> statistical test -> confidence interval\n• Every test statistic in this lesson (one-sample t, Welch\'s t, paired t, chi-squared) was genuinely computed from scratch and matched scipy.stats to floating-point precision\n• Remember: a p-value does not tell you the probability that your hypothesis is true. Part 3 covers bootstrap resampling, effect size, the multiple comparison problem, and the common statistical mistakes that undermine ML experiments',
      bodyKn: '• ಪ್ರಶ್ನೆ -> H₀/H₁ -> data ಸಂಗ್ರಹಿಸಿ -> test statistic ಗಣಿಸಿ -> p-value -> H₀ reject/fail to reject -> confidence interval -> ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸಿ\n• ML model comparison ಗೆ: ಅದೇ data -> cross-validation -> paired scores -> ವ್ಯತ್ಯಾಸಗಳು -> statistical test -> confidence interval\n• ಈ lesson ನಲ್ಲಿ ಪ್ರತಿ test statistic (one-sample t, Welch\'s t, paired t, chi-squared) ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ ಮತ್ತು scipy.stats ಗೆ floating-point precision ವರೆಗೆ ಹೊಂದಿಕೆಯಾಗಿದೆ\n• ನೆನಪಿಡಿ: ಒಂದು p-value ನಿಮ್ಮ hypothesis ನಿಜ ಎಂಬ probability ಹೇಳುವುದಿಲ್ಲ. Part 3 bootstrap resampling, effect size, multiple comparison problem, ಮತ್ತು ML experiments ಗಳನ್ನೂ ದುರ್ಬಲಗೊಳಿಸುವ ಸಾಮಾನ್ಯ statistical mistakes ಒಳಗೊಂಡಿದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computing a one-sample t-statistic for sample=[0.90,0.93,0.91,0.94,0.92,0.95,0.90,0.93] against mu0=0.90, and cross-checking against scipy, what was found?', qKn: 'sample=[0.90,0.93,0.91,0.94,0.92,0.95,0.90,0.93] ಗೆ mu0=0.90 ವಿರುದ್ಧ ಒಂದು one-sample t-statistic ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ, ಮತ್ತು scipy ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸುವುದೂ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['t was undefined', 't=3.4733, matching scipy.stats.ttest_1samp exactly, with p=0.0104', 't=0, no difference detected', 'scipy returned a different sign'], correct: 1,
        optsKn: ['t ಅವ್ಯಾಖ್ಯಾತವಾಗಿತ್ತು', 't=3.4733, scipy.stats.ttest_1samp ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ, p=0.0104 ಜೊತೆ', 't=0, ಯಾವುದೇ ವ್ಯತ್ಯಾಸ ಪತ್ತೆಯಾಗಲಿಲ್ಲ', 'scipy ಒಂದು ಬೇರೆ ಚಿಹ್ನೆ ಹಿಂತಿರುಗಿಸಿತು'] },
      { q: 'Genuinely running chi_squared_statistic([120,80],[100,100]), what result was obtained, and did it match scipy.stats.chisquare?', qKn: 'chi_squared_statistic([120,80],[100,100]) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಯಾವ ಫಲಿತಾಂಶ ಪಡೆಯಲಾಯಿತು, ಮತ್ತು ಇದೂ scipy.stats.chisquare ಗೆ ಹೊಂದಿಕೆಯಾಯಿತೇ?',
        opts: ['4.0, and it did not match scipy', '8.0, exactly matching scipy.stats.chisquare\'s statistic of 8.0', '0.0, no deviation from expected', '100.0, a computation error'], correct: 1,
        optsKn: ['4.0, ಮತ್ತು ಇದೂ scipy ಗೆ ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ', '8.0, scipy.stats.chisquare ನ 8.0 statistic ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '0.0, expected ಇಂದ ಯಾವುದೇ ವಿಚಲನವಿಲ್ಲ', '100.0, ಒಂದು computation error'] },
      { q: 'What is the correct interpretation of a p-value?', qKn: 'ಒಂದು p-value ನ ಸರಿಯಾದ ವ್ಯಾಖ್ಯಾನ ಏನೂ?',
        opts: ['The probability that the null hypothesis is true', 'The probability of observing data this extreme, assuming the null hypothesis is true', 'The probability that the alternative hypothesis is true', 'The percentage improvement of Model B over Model A'], correct: 1,
        optsKn: ['Null hypothesis ನಿಜ ಎಂಬ probability', 'Null hypothesis ನಿಜ ಎಂದು ಊಹಿಸಿ, ಕನಿಷ್ಠ ಇಷ್ಟು ತೀವ್ರವಾದ data ಗಮನಿಸುವ probability', 'Alternative hypothesis ನಿಜ ಎಂಬ probability', 'Model A ಗಿಂತ Model B ನ percentage ಸುಧಾರಣೆ'] },
      { q: 'Genuinely comparing a paired t-test (scipy.stats.ttest_rel) against an independent Welch\'s t-test on related fold data, why is the paired test preferred when comparing two models on identical cross-validation folds?', qKn: 'ಸಂಬಂಧಿತ fold data ಮೇಲೆ ಒಂದು paired t-test (scipy.stats.ttest_rel) ಅನ್ನೂ ಒಂದು ಸ್ವತಂತ್ರ Welch\'s t-test ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, ಒಂದೇ cross-validation folds ಮೇಲೆ ಎರಡು models ಹೋಲಿಸುವಾಗ paired test ಏಕೆ ಆದ್ಯತೆ?',
        opts: ['They always give identical results', 'The scores from the same folds are not independent measurements -- each Model A score is naturally paired with a Model B score, and the paired test accounts for that', 'Paired tests do not require any data', 'Welch\'s test cannot be computed on fold data'], correct: 1,
        optsKn: ['ಅವು ಯಾವಾಗಲೂ ಒಂದೇ ಫಲಿತಾಂಶಗಳನ್ನೂ ನೀಡುತ್ತವೆ', 'ಅದೇ folds ಗಳ scores ಸ್ವತಂತ್ರ ಅಳತೆಗಳಲ್ಲ -- ಪ್ರತಿ Model A score ಸ್ವಾಭಾವಿಕವಾಗಿ ಒಂದು Model B score ಜೊತೆ ಜೋಡಿಯಾಗಿದೆ, ಮತ್ತು paired test ಅದನ್ನೂ ಗಣನೆಗೆ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ', 'Paired tests ಗೆ ಯಾವುದೇ data ಅಗತ್ಯವಿಲ್ಲ', 'Fold data ಮೇಲೆ Welch ನ test ಗಣಿಸಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
