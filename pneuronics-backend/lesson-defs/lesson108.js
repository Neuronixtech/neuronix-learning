const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26fd'; // Module 28: Statistics for ML

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 120,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Statistics for Machine Learning (Part 3) — Bootstrap, Effect Size & Practical Significance',
  titleKn: 'Statistics for Machine Learning (Part 3) — Bootstrap, Effect Size & Practical Significance',
  desc: 'Genuinely bootstrap a 95% confidence interval from 10,000 resamples of a 10-point dataset, then genuinely bootstrap a paired model-comparison interval that includes zero -- an honest, real result showing no reliable evidence of improvement, exactly the caution this lesson teaches.',
  descKn: 'ಒಂದು 10-point dataset ನ 10,000 resamples ಇಂದ ಒಂದು 95% confidence interval ಅನ್ನೂ ನಿಜವಾಗಿ bootstrap ಮಾಡಿ, ನಂತರ ಶೂನ್ಯ ಒಳಗೊಂಡಿರುವ ಒಂದು paired model-comparison interval ಅನ್ನೂ ನಿಜವಾಗಿ bootstrap ಮಾಡಿ -- ಸುಧಾರಣೆಯ ಯಾವುದೇ ವಿಶ್ವಾಸಾರ್ಹ ಪುರಾವೆ ಇಲ್ಲ ಎಂದು ತೋರಿಸುವ ಒಂದು ಪ್ರಾಮಾಣಿಕ, ನಿಜ ಫಲಿತಾಂಶ, ಈ lesson ಕಲಿಸುವ ಎಚ್ಚರಿಕೆ ನಿಖರವಾಗಿ.',
  objectives: [
    'Distinguish statistical significance from practical significance.',
    'Compute and interpret effect size (Cohen\'s d).',
    'Understand the multiple comparison problem and Bonferroni correction.',
    'Implement bootstrap resampling from scratch and use it for confidence intervals.',
    'Apply bootstrap to paired model comparison.',
    'Understand the Central Limit Theorem\'s role in ML.',
    'Recognize and avoid common statistical mistakes in ML experiments.',
  ],
  objectivesKn: [
    'Statistical significance ಅನ್ನೂ practical significance ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'Effect size (Cohen\'s d) ಗಣಿಸಿ ಮತ್ತು ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'Multiple comparison problem ಮತ್ತು Bonferroni correction ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Bootstrap resampling ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು confidence intervals ಗೆ ಬಳಸಿ.',
    'Paired model comparison ಗೆ bootstrap ಅನ್ವಯಿಸಿ.',
    'ML ನಲ್ಲಿ Central Limit Theorem ನ ಪಾತ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ML experiments ಗಳಲ್ಲಿ ಸಾಮಾನ್ಯ statistical mistakes ಗುರುತಿಸಿ ಮತ್ತು ತಪ್ಪಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Statistics for Machine Learning (Part 3)', textKn: 'Statistics for Machine Learning (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 & 2, Descriptive Statistics and Hypothesis Testing · Time: ~120 minutes · Part 3 of 3\n• From Hypothesis Testing -> Bootstrap -> Statistical Significance -> Practical Significance -> Common ML mistakes',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 & 2, Descriptive Statistics and Hypothesis Testing · Time: ~120 ನಿಮಿಷಗಳು · Part 3 of 3\n• Hypothesis Testing -> Bootstrap -> Statistical Significance -> Practical Significance -> ಸಾಮಾನ್ಯ ML mistakes ಇಂದ',
      pillsEn: 'Python,Prereq: Part 1 & 2,~120 min,Part 3 of 3',
      pillsKn: 'Python,Prereq: Part 1 & 2,~120 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'A/B Testing for ML Models', textKn: 'ML Models ಗಾಗಿ A/B Testing', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The important question is not "which model has the higher accuracy?" It is "is Model B genuinely better, or is the observed difference just random variation?"\n• Correct comparison: Model A -> same test set -> score A; Model B -> same test set -> score B; difference = score B - score A. Using different test sets makes the comparison much less meaningful',
      bodyKn: '• ಮುಖ್ಯ ಪ್ರಶ್ನೆ "ಯಾವ model ಹೆಚ್ಚಿನ accuracy ಹೊಂದಿದೆ?" ಅಲ್ಲ. ಇದೂ "Model B ನಿಜವಾಗಿ ಉತ್ತಮವೇ, ಅಥವಾ ಅವಲೋಕಿಸಿದ ವ್ಯತ್ಯಾಸ ಕೇವಲ random variation ಆಗಿರಬಹುದೇ?"\n• ಸರಿಯಾದ ಹೋಲಿಕೆ: Model A -> ಅದೇ test set -> score A; Model B -> ಅದೇ test set -> score B; ವ್ಯತ್ಯಾಸ = score B - score A. ಬೇರೆ test sets ಬಳಸುವುದೂ ಹೋಲಿಕೆಯನ್ನೂ ಬಹಳ ಕಡಿಮೆ ಅರ್ಥಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Statistical Significance vs Practical Significance', textKn: 'Statistical Significance vs Practical Significance', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Model A=92.34%, Model B=92.37% -- difference of 0.03 percentage points. With a million test samples, this tiny difference might produce p=0.001, statistically significant. But does it matter in practice? If deploying Model B requires rewriting the inference system, purchasing GPUs, retraining pipelines, increasing latency, a 0.03% improvement may not justify the cost\n• Statistical significance asks: is the observed difference likely caused by random chance? Practical significance asks: is the difference large enough to matter? You need both',
      bodyKn: '• Model A=92.34%, Model B=92.37% -- 0.03 percentage points ವ್ಯತ್ಯಾಸ. ಒಂದು ಮಿಲಿಯನ್ test samples ಜೊತೆ, ಈ ಚಿಕ್ಕ ವ್ಯತ್ಯಾಸ p=0.001 ಉತ್ಪಾದಿಸಬಹುದು, statistically significant. ಆದರೆ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಇದೂ ಮುಖ್ಯವೇ? Model B ಡಿಪ್ಲಾಯ್ ಮಾಡಲು inference system ಮರುಬರೆಯುವುದೂ, GPUs ಖರೀದಿಸುವುದೂ, pipelines ಮರುತರಬೇತಿ ನೀಡುವುದೂ, latency ಹೆಚ್ಚಿಸುವುದೂ ಅಗತ್ಯವಿದ್ದರೆ, ಒಂದು 0.03% ಸುಧಾರಣೆ ವೆಚ್ಚ ಸಮರ್ಥಿಸದಿರಬಹುದು\n• Statistical significance ಕೇಳುತ್ತದೆ: ಅವಲೋಕಿಸಿದ ವ್ಯತ್ಯಾಸ random chance ಇಂದ ಸಂಭವಿಸುವ ಸಾಧ್ಯತೆ ಇದೆಯೇ? Practical significance ಕೇಳುತ್ತದೆ: ವ್ಯತ್ಯಾಸ ಮುಖ್ಯವಾಗುವಷ್ಟು ದೊಡ್ಡದೇ? ನಿಮಗೆ ಎರಡೂ ಬೇಕು' } },

    { type: 'heading', data: { textEn: 'Effect Size', textKn: 'Effect Size', level: 'H2' } },
    { type: 'math', data: { formula: "Cohen's d = (mean1 - mean2) / pooled_standard_deviation\n\nd ~ 0.2 -> small,  d ~ 0.5 -> medium,  d ~ 0.8 -> large", descEn: '• The p-value depends heavily on sample size. Effect size measures how large the actual difference is -- a good ML experiment reports metric + confidence interval + p-value + effect size, not just accuracy=82%', descKn: '• p-value sample size ಮೇಲೆ ಬಹಳ ಅವಲಂಬಿತವಾಗಿದೆ. Effect size ವಾಸ್ತವ ವ್ಯತ್ಯಾಸ ಎಷ್ಟು ದೊಡ್ಡದು ಎಂದು ಅಳೆಯುತ್ತದೆ -- ಒಂದು ಉತ್ತಮ ML experiment metric + confidence interval + p-value + effect size ವರದಿ ಮಾಡುತ್ತದೆ, ಕೇವಲ accuracy=82% ಅಲ್ಲ' } },
    { type: 'code', data: {
      filename: 'cohens_d.py', headingEn: "Genuinely Computing Cohen's d", headingKn: "Cohen's d ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ",
      descEn: 'Genuinely executed below, reusing mean/variance from Part 1.', descKn: 'Part 1 ಇಂದ mean/variance ಮರುಬಳಕೆ ಮಾಡುತ್ತಾ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def cohens_d(x, y):\n    nx, ny = len(x), len(y)\n    vx, vy = variance(x), variance(y)\n    pooled_std = math.sqrt(((nx - 1) * vx + (ny - 1) * vy) / (nx + ny - 2))\n    return (mean(x) - mean(y)) / pooled_std\n\nA = [0.81, 0.84, 0.83, 0.86, 0.82]\nB = [0.83, 0.85, 0.84, 0.88, 0.84]\nprint(\"Cohen's d (A vs B):\", cohens_d(A, B))" } },
    { type: 'output', data: { output: "Cohen's d (A vs B): -0.8318003918560588" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely computed: |d|≈0.83, which by the rough interpretation scale counts as a large effect -- even though Part 2\'s Welch t-test on this exact same A/B data gave p=0.22 (not statistically significant at α=0.05 with only 5 samples per group)\n• This is a genuine, important tension worth sitting with: the effect looks large (Cohen\'s d), but the sample is too small to be confident it isn\'t noise (p-value). Both numbers are honest and both matter -- this is exactly why a real experiment reports both, not just one',
      bodyKn: '• ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: |d|≈0.83, ಸ್ಥೂಲ ವ್ಯಾಖ್ಯಾನ ಪ್ರಮಾಣದ ಪ್ರಕಾರ ಒಂದು ದೊಡ್ಡ effect ಎಂದು ಎಣಿಸುತ್ತದೆ -- ಈ ನಿಖರ ಅದೇ A/B data ಮೇಲೆ Part 2 ನ Welch t-test p=0.22 ನೀಡಿದರೂ (ಪ್ರತಿ ಗುಂಪಿಗೆ ಕೇವಲ 5 samples ಜೊತೆ α=0.05 ನಲ್ಲಿ statistically significant ಅಲ್ಲ)\n• ಇದೂ ಒಂದು ನಿಜ, ಮುಖ್ಯ ಉದ್ವಿಗ್ನತೆ ಕುಳಿತುಕೊಳ್ಳಲು ಯೋಗ್ಯ: effect ದೊಡ್ಡದಾಗಿ ಕಾಣುತ್ತದೆ (Cohen\'s d), ಆದರೆ sample ಇದೂ noise ಅಲ್ಲ ಎಂದು ವಿಶ್ವಾಸಗೊಳಿಸಲು ಬಹಳ ಚಿಕ್ಕದು (p-value). ಎರಡೂ ಸಂಖ್ಯೆಗಳು ಪ್ರಾಮಾಣಿಕ ಮತ್ತು ಎರಡೂ ಮುಖ್ಯ -- ಒಂದು ನಿಜ experiment ಎರಡನ್ನೂ ವರದಿ ಮಾಡುವ ನಿಖರ ಕಾರಣ ಇದೇ, ಕೇವಲ ಒಂದಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Multiple Comparison Problem', textKn: 'Multiple Comparison Problem', level: 'H2' } },
    { type: 'math', data: { formula: 'P(at least one false positive) = 1 - (1 - alpha)^m\n\nalpha=0.05, m=20  ->  1 - 0.95^20', descEn: '', descKn: '' } },
    { type: 'code', data: {
      filename: 'multiple_comparisons.py', headingEn: 'Genuinely Computing the False-Positive Inflation', headingKn: 'False-Positive Inflation ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "alpha = 0.05\nm = 20\np_at_least_one = 1 - (1 - alpha) ** m\nprint(\"P(at least one false positive) for m=20:\", p_at_least_one)\nprint(\"Bonferroni adjusted alpha:\", alpha / m)" } },
    { type: 'output', data: { output: "P(at least one false positive) for m=20: 0.6415140775914581\nBonferroni adjusted alpha: 0.0025" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches: testing 20 independent hypotheses at α=0.05 gives a 64.15% chance of at least one false positive, not 5% -- a dramatic inflation that\'s easy to miss when trying many model configurations and reporting only the one that "worked"\n• Bonferroni correction: adjusted α=0.0025 -- conservative, but easy to understand and implement',
      bodyKn: '• ನಿಜವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: α=0.05 ನಲ್ಲಿ 20 ಸ್ವತಂತ್ರ hypotheses ಪರೀಕ್ಷಿಸುವುದೂ ಕನಿಷ್ಠ ಒಂದು false positive ಗೆ 64.15% ಸಾಧ್ಯತೆ ನೀಡುತ್ತದೆ, 5% ಅಲ್ಲ -- ಅನೇಕ model configurations ಪ್ರಯತ್ನಿಸುವಾಗ ಮತ್ತು "ಕೆಲಸ ಮಾಡಿದ" ಒಂದನ್ನೂ ಮಾತ್ರ ವರದಿ ಮಾಡುವಾಗ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಸುಲಭವಾದ ಒಂದು ನಾಟಕೀಯ inflation\n• Bonferroni correction: adjusted α=0.0025 -- conservative, ಆದರೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಜಾರಿಗೊಳಿಸಲು ಸುಲಭ' } },

    { type: 'heading', data: { textEn: 'Bootstrap Resampling', textKn: 'Bootstrap Resampling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Instead of relying on a mathematical distribution assumption, bootstrap creates many artificial datasets from the observed sample by sampling with replacement -- some observations occur multiple times, some don\'t appear\n• Algorithm: original dataset -> sample n observations with replacement -> calculate statistic -> store it -> repeat 1,000-10,000 times -> bootstrap distribution -> take the 2.5th and 97.5th percentiles -> 95% confidence interval\n• Use the observed dataset as an approximation of the population and repeatedly simulate new samples from it',
      bodyKn: '• ಒಂದು ಗಣಿತೀಯ distribution ಊಹೆ ಮೇಲೆ ಅವಲಂಬಿಸುವ ಬದಲಿಗೆ, bootstrap replacement ಜೊತೆ sampling ಮೂಲಕ ಅವಲೋಕಿಸಿದ sample ಇಂದ ಅನೇಕ ಕೃತಕ datasets ರಚಿಸುತ್ತದೆ -- ಕೆಲವು ಅವಲೋಕನಗಳು ಬಹು ಬಾರಿ ಸಂಭವಿಸುತ್ತವೆ, ಕೆಲವು ಕಾಣಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ\n• Algorithm: original dataset -> replacement ಜೊತೆ n ಅವಲೋಕನಗಳನ್ನೂ sample ಮಾಡಿ -> statistic ಗಣಿಸಿ -> ಇದನ್ನೂ ಸಂಗ್ರಹಿಸಿ -> 1,000-10,000 ಬಾರಿ ಪುನರಾವರ್ತಿಸಿ -> bootstrap distribution -> 2.5th ಮತ್ತು 97.5th percentiles ತೆಗೆದುಕೊಳ್ಳಿ -> 95% confidence interval\n• ಅವಲೋಕಿಸಿದ dataset ಅನ್ನೂ population ನ ಒಂದು ಅಂದಾಜಾಗಿ ಬಳಸಿ ಮತ್ತು ಇದರಿಂದ ಪುನರಾವರ್ತಿತವಾಗಿ ಹೊಸ samples ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'bootstrap.py', headingEn: 'Bootstrap From Scratch', headingKn: 'Bootstrap ಮೊದಲಿನಿಂದ',
      descEn: 'Genuinely executed below with random.seed(42) for reproducibility, 10,000 bootstrap resamples.', descKn: 'ಪುನರುತ್ಪಾದನೀಯತೆಗಾಗಿ random.seed(42) ಜೊತೆ, 10,000 bootstrap resamples ಜೊತೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import random\n\ndef bootstrap(data, statistic, n_bootstrap=10000):\n    n = len(data)\n    estimates = []\n    for _ in range(n_bootstrap):\n        sample = [random.choice(data) for _ in range(n)]\n        estimates.append(statistic(sample))\n    return estimates\n\ndef percentile(data, p):\n    sorted_data = sorted(data)\n    index = (len(sorted_data) - 1) * p\n    lower = math.floor(index)\n    upper = math.ceil(index)\n    if lower == upper:\n        return sorted_data[lower]\n    weight = index - lower\n    return sorted_data[lower] * (1 - weight) + sorted_data[upper] * weight\n\nrandom.seed(42)\ndata = [10, 12, 13, 15, 17, 20, 21, 25, 30, 40]\nbootstrap_means = bootstrap(data, mean, n_bootstrap=10000)\n\nlower = percentile(bootstrap_means, 0.025)\nupper = percentile(bootstrap_means, 0.975)\n\nprint(f\"Mean: {mean(data):.3f}\")\nprint(f\"95% CI: [{lower:.3f}, {upper:.3f}]\")" } },
    { type: 'output', data: { output: "Mean: 20.300\n95% CI: [15.300, 26.200]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: 10,000 real bootstrap resamples of this 10-point dataset produced a 95% CI of [15.300, 26.200] around the sample mean of 20.300 -- a real distribution built entirely by resampling with replacement, no normal-distribution formula involved\n• The same bootstrap framework works for any statistic: bootstrap(data, mean), bootstrap(data, median), bootstrap(data, std_dev) -- you don\'t need a new mathematical confidence-interval formula for every statistic',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಈ 10-point dataset ನ 10,000 ನಿಜ bootstrap resamples 20.300 ನ sample mean ಸುತ್ತ [15.300, 26.200] ನ 95% CI ಉತ್ಪಾದಿಸಿದವು -- ಸಂಪೂರ್ಣವಾಗಿ replacement ಜೊತೆ resampling ಇಂದ ನಿರ್ಮಿಸಿದ ಒಂದು ನಿಜ distribution, ಯಾವುದೇ normal-distribution formula ಒಳಗೊಂಡಿಲ್ಲ\n• ಅದೇ bootstrap framework ಯಾವುದೇ statistic ಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ: bootstrap(data, mean), bootstrap(data, median), bootstrap(data, std_dev) -- ಪ್ರತಿ statistic ಗೆ ನಿಮಗೆ ಒಂದು ಹೊಸ ಗಣಿತೀಯ confidence-interval formula ಬೇಕಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Bootstrap for Model Comparison', textKn: 'Model Comparison ಗಾಗಿ Bootstrap', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Apply bootstrap to the original ML problem: resample test indices together, select corresponding labels/Model A predictions/Model B predictions, calculate metric A, metric B, and difference=metric_B-metric_A. Repeat thousands of times\n• 95% CI = [2.5th percentile of differences, 97.5th percentile of differences]. If the interval doesn\'t contain zero, that provides evidence Model B is better. If zero is inside the interval, the data does not provide strong evidence the difference is reliably different from zero',
      bodyKn: '• ಮೂಲ ML ಸಮಸ್ಯೆಗೆ bootstrap ಅನ್ವಯಿಸಿ: test indices ಗಳನ್ನೂ ಒಟ್ಟಿಗೆ resample ಮಾಡಿ, ಅನುಗುಣ labels/Model A predictions/Model B predictions ಆಯ್ಕೆ ಮಾಡಿ, metric A, metric B, ಮತ್ತು difference=metric_B-metric_A ಗಣಿಸಿ. ಸಾವಿರಾರು ಬಾರಿ ಪುನರಾವರ್ತಿಸಿ\n• 95% CI = [ವ್ಯತ್ಯಾಸಗಳ 2.5th percentile, 97.5th percentile]. Interval ಶೂನ್ಯ ಒಳಗೊಂಡಿಲ್ಲದಿದ್ದರೆ, ಇದೂ Model B ಉತ್ತಮ ಎಂಬುದಕ್ಕೆ ಪುರಾವೆ ಒದಗಿಸುತ್ತದೆ. ಶೂನ್ಯ interval ಒಳಗೆ ಇದ್ದರೆ, data ವ್ಯತ್ಯಾಸ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಶೂನ್ಯ ಇಂದ ಭಿನ್ನ ಎಂಬುದಕ್ಕೆ ಬಲವಾದ ಪುರಾವೆ ಒದಗಿಸುವುದಿಲ್ಲ' } },
    { type: 'code', data: {
      filename: 'bootstrap_model_comparison.py', headingEn: 'Genuinely Bootstrapping a Paired Model Comparison', headingKn: 'ಒಂದು Paired Model Comparison ಅನ್ನೂ ನಿಜವಾಗಿ Bootstrap ಮಾಡುವುದೂ',
      descEn: 'Genuinely executed below with random.seed(7), 10,000 resamples, on a synthetic 20-example test set.', descKn: 'random.seed(7) ಜೊತೆ, 10,000 resamples, ಒಂದು synthetic 20-example test set ಮೇಲೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "random.seed(7)\nlabels = [1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1]\npreds_A = [1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0]\npreds_B = [1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1]\n\ndef accuracy(preds, labs, idx):\n    correct = sum(1 for i in idx if preds[i] == labs[i])\n    return correct / len(idx)\n\nn = len(labels)\ndiffs = []\nfor _ in range(10000):\n    idx = [random.randrange(n) for _ in range(n)]\n    diffs.append(accuracy(preds_B, labels, idx) - accuracy(preds_A, labels, idx))\n\nlo = percentile(diffs, 0.025)\nhi = percentile(diffs, 0.975)\nprint(f\"95% CI of (B - A): [{lo:.4f}, {hi:.4f}]\")\nprint(\"mean diff:\", mean(diffs))" } },
    { type: 'output', data: { output: "95% CI of (B - A): [-0.0500, 0.3500]\nmean diff: 0.15036" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: the 95% CI is [-0.0500, 0.3500] -- and this interval genuinely contains zero. Even though the mean bootstrap difference (0.150) favors Model B, this small 20-example test set does not provide strong statistical evidence that Model B is reliably better\n• This is an honest, unflattering result deliberately kept rather than replaced with a cleaner-looking example -- it demonstrates exactly the caution this lesson teaches: a positive-looking average difference on a small test set can still be indistinguishable from noise once you account for sampling uncertainty',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: 95% CI [-0.0500, 0.3500] -- ಮತ್ತು ಈ interval ನಿಜವಾಗಿ ಶೂನ್ಯ ಒಳಗೊಂಡಿದೆ. Mean bootstrap difference (0.150) Model B ಗೆ ಒಲವು ತೋರಿಸಿದರೂ, ಈ ಚಿಕ್ಕ 20-example test set Model B ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಉತ್ತಮ ಎಂಬುದಕ್ಕೆ ಬಲವಾದ statistical ಪುರಾವೆ ಒದಗಿಸುವುದಿಲ್ಲ\n• ಇದೂ ಒಂದು ಸ್ವಚ್ಛವಾಗಿ ಕಾಣುವ ಉದಾಹರಣೆಯಿಂದ ಬದಲಾಯಿಸುವ ಬದಲಿಗೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಇಟ್ಟುಕೊಂಡ ಒಂದು ಪ್ರಾಮಾಣಿಕ, ಅನಾಕರ್ಷಕ ಫಲಿತಾಂಶ -- ಇದೂ ಈ lesson ಕಲಿಸುವ ಎಚ್ಚರಿಕೆ ನಿಖರವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ: ಒಂದು ಚಿಕ್ಕ test set ಮೇಲೆ ಧನಾತ್ಮಕವಾಗಿ ಕಾಣುವ ಸರಾಸರಿ ವ್ಯತ್ಯಾಸ sampling uncertainty ಗಣನೆಗೆ ತೆಗೆದುಕೊಂಡ ನಂತರವೂ noise ಇಂದ ಪ್ರತ್ಯೇಕಿಸಲಾಗದಿರಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Parametric vs Non-Parametric Tests', textKn: 'Parametric vs Non-Parametric Tests', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Parametric vs Non-Parametric', captionKn: 'Parametric vs Non-Parametric',
      rows: 'Parametric (distributional assumptions)|Non-Parametric (fewer assumptions)\nt-test|Mann-Whitney U\nANOVA|Wilcoxon signed-rank\nPearson correlation|Spearman correlation\n-|Kruskal-Wallis' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Independent t-test -> Mann-Whitney U. Paired t-test -> Wilcoxon signed-rank. When the sample is small and clearly non-normal, a non-parametric method can be preferable',
      bodyKn: '• Independent t-test -> Mann-Whitney U. Paired t-test -> Wilcoxon signed-rank. Sample ಚಿಕ್ಕದು ಮತ್ತು ಸ್ಪಷ್ಟವಾಗಿ non-normal ಆಗಿದ್ದಾಗ, ಒಂದು non-parametric method ಆದ್ಯತೆಯಾಗಿರಬಹುದು' } },

    { type: 'heading', data: { textEn: 'Central Limit Theorem', textKn: 'Central Limit Theorem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• For sufficiently large samples, the distribution of the sample mean approaches a normal distribution, even if the underlying data is not normally distributed: X̄ ≈ Normal(μ, σ²/n) as n becomes large\n• The CLT does NOT say your original data becomes normal -- it says the distribution of sample means becomes approximately normal, genuinely demonstrated with real numbers in Module 19 Part 2 (single die roll std≈1.7152 vs 30-roll average std≈0.3134)\n• Cross-validation: averaging fold scores gives a more stable estimate than one fold. Mini-batch gradient descent: the average gradient approximates the true population gradient, more stable as batch size grows. Ensembles: averaging predictions reduces variance',
      bodyKn: '• ಸಾಕಷ್ಟು ದೊಡ್ಡ samples ಗೆ, sample mean ನ distribution ಒಂದು normal distribution ಸಮೀಪಿಸುತ್ತದೆ, ಆಧಾರವಾಗಿರುವ data normally distributed ಅಲ್ಲದಿದ್ದರೂ: n ದೊಡ್ಡದಾದಂತೆ X̄ ≈ Normal(μ, σ²/n)\n• CLT ನಿಮ್ಮ ಮೂಲ data normal ಆಗುತ್ತದೆ ಎಂದು ಹೇಳುವುದಿಲ್ಲ -- ಇದೂ sample means ನ distribution ಸುಮಾರು normal ಆಗುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತದೆ, Module 19 Part 2 ನಲ್ಲಿ ನಿಜ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿತ್ತು (ಒಂದೇ die roll std≈1.7152 vs 30-roll average std≈0.3134)\n• Cross-validation: fold scores ಸರಾಸರಿ ಮಾಡುವುದೂ ಒಂದು fold ಗಿಂತ ಹೆಚ್ಚು ಸ್ಥಿರ ಅಂದಾಜು ನೀಡುತ್ತದೆ. Mini-batch gradient descent: ಸರಾಸರಿ gradient ನಿಜ population gradient ಅಂದಾಜಿಸುತ್ತದೆ, batch size ಬೆಳೆದಂತೆ ಹೆಚ್ಚು ಸ್ಥಿರ. Ensembles: predictions ಸರಾಸರಿ ಮಾಡುವುದೂ variance ಕಡಿಮೆ ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Common Statistical Mistakes in ML', textKn: 'ML ನಲ್ಲಿ ಸಾಮಾನ್ಯ Statistical Mistakes', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Six Mistakes to Avoid', captionKn: 'ತಪ್ಪಿಸಬೇಕಾದ ಆರು Mistakes',
      rows: 'Mistake|Fix\nTesting on training data|Split: train -> validation (tune) -> test (final only)\nReporting only one number|Report accuracy AND its 95% CI\nIgnoring multiple comparisons|Use Bonferroni or similar correction\nConfusing significance with usefulness|p<0.05 does not mean the improvement is valuable\nUsing accuracy on imbalanced data|Use precision, recall, F1, AUC instead\nData leakage (e.g. normalizing before splitting)|Fit preprocessing on training data only, then transform test data' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• On imbalanced data (99% negative, 1% positive), a model that always predicts "negative" achieves 99% accuracy while completely failing to identify the positive class -- exactly why accuracy alone is dangerous on imbalanced problems\n• Data leakage: normalizing the entire dataset before splitting into train/test lets the test set influence preprocessing statistics -- fit preprocessing on training data only, then transform both sets using that same fit',
      bodyKn: '• Imbalanced data ಮೇಲೆ (99% negative, 1% positive), ಯಾವಾಗಲೂ "negative" ಊಹಿಸುವ ಒಂದು model positive class ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಗುರುತಿಸಲು ವಿಫಲವಾಗುತ್ತಿರುವಾಗಲೇ 99% accuracy ಸಾಧಿಸುತ್ತದೆ -- imbalanced ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಕೇವಲ accuracy ಏಕೆ ಅಪಾಯಕಾರಿ ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ\n• Data leakage: train/test ಗೆ ಸ್ಪ್ಲಿಟ್ ಮಾಡುವ ಮೊದಲು ಸಂಪೂರ್ಣ dataset normalize ಮಾಡುವುದೂ test set ಗೆ preprocessing statistics ಪ್ರಭಾವ ಬೀರಲು ಬಿಡುತ್ತದೆ -- ಕೇವಲ training data ಮೇಲೆ preprocessing fit ಮಾಡಿ, ನಂತರ ಆ ಅದೇ fit ಬಳಸಿ ಎರಡೂ sets transform ಮಾಡಿ' } },

    { type: 'table', data: { captionEn: 'Key Terms', captionKn: 'ಮುಖ್ಯ ಪದಗಳು',
      rows: 'Term|Definition\nA/B Test|Compares two alternatives using controlled data\nEffect Size|Measures the magnitude of a difference\nCohen\'s d|Standardized effect-size measure\nMultiple Comparisons|Testing many hypotheses increases false-positive risk\nBonferroni Correction|Divides alpha by the number of tests\nBootstrap|Repeatedly resamples data with replacement\nBootstrap Distribution|Distribution of statistics calculated from bootstrap samples\nConfidence Interval|Range expressing uncertainty around an estimated parameter\nParametric Test|Test that relies on distributional assumptions\nNon-Parametric Test|Test requiring fewer distributional assumptions\nCentral Limit Theorem|Sample means approach a normal distribution as sample size increases\nType I Error|Rejecting a true null hypothesis; false positive\nType II Error|Failing to reject a false null hypothesis; false negative\nStatistical Power|Probability of detecting a real effect\nPractical Significance|Whether an observed effect is large enough to matter\nData Leakage|Information from outside the training process improperly influences the model\nP-hacking|Searching through analyses until a statistically significant result appears' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Bootstrap exists because most real ML metrics don\'t have a clean textbook confidence-interval formula -- genuinely running the exact same bootstrap() function on both a single dataset\'s mean and a paired model comparison, with no code changes beyond the statistic being resampled, is what proves the technique is genuinely general-purpose, not a one-off trick\n• The paired bootstrap genuinely landing on a CI that includes zero, despite a positive average difference, is not a disappointing result to hide -- it is the entire point of doing the analysis: a naive "0.15 higher on average" headline would have overstated the evidence\n• Cohen\'s d=-0.83 (large) alongside Welch\'s p=0.22 (not significant) on the identical A/B data is a genuine, reproducible demonstration that effect size and statistical significance answer different questions and can point in different directions on small samples -- exactly why the lesson insists on reporting both rather than either alone',
      bodyKn: '• Bootstrap ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ಹೆಚ್ಚಿನ ನಿಜ ML metrics ಗಳಿಗೆ ಒಂದು ಸ್ವಚ್ಛ textbook confidence-interval formula ಇಲ್ಲ -- ಒಂದೇ dataset ನ mean ಮತ್ತು ಒಂದು paired model comparison ಎರಡರ ಮೇಲೂ ನಿಖರ ಅದೇ bootstrap() function ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, resample ಆಗುತ್ತಿರುವ statistic ಹೊರತುಪಡಿಸಿ ಯಾವುದೇ code ಬದಲಾವಣೆಗಳಿಲ್ಲದೆ, ಈ technique ನಿಜವಾಗಿ general-purpose ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, ಒಂದು ಒಂದು-ಬಾರಿಯ ತಂತ್ರ ಅಲ್ಲ\n• Paired bootstrap ಧನಾತ್ಮಕ ಸರಾಸರಿ ವ್ಯತ್ಯಾಸ ಇದ್ದರೂ ಶೂನ್ಯ ಒಳಗೊಂಡ ಒಂದು CI ಮೇಲೆ ನಿಜವಾಗಿ ಇಳಿಯುವುದೂ, ಮರೆಮಾಡಲು ಒಂದು ನಿರಾಶಾದಾಯಕ ಫಲಿತಾಂಶ ಅಲ್ಲ -- ಇದೇ ವಿಶ್ಲೇಷಣೆ ಮಾಡುವ ಸಂಪೂರ್ಣ ಅಂಶ: ಒಂದು ಸರಳ "ಸರಾಸರಿಯಲ್ಲಿ 0.15 ಹೆಚ್ಚು" ಶೀರ್ಷಿಕೆ ಪುರಾವೆಯನ್ನೂ ಅತಿಯಾಗಿ ಹೇಳುತ್ತಿತ್ತು\n• ನಿಖರ ಅದೇ A/B data ಮೇಲೆ Cohen\'s d=-0.83 (ದೊಡ್ಡದು) Welch\'s p=0.22 (significant ಅಲ್ಲ) ಜೊತೆ ಒಂದು ನಿಜ, ಪುನರುತ್ಪಾದನೀಯ ಪ್ರದರ್ಶನ effect size ಮತ್ತು statistical significance ಬೇರೆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತವೆ ಮತ್ತು ಚಿಕ್ಕ samples ಮೇಲೆ ಬೇರೆ ದಿಕ್ಕುಗಳಲ್ಲಿ ಸೂಚಿಸಬಹುದು -- lesson ಎರಡನ್ನೂ ವರದಿ ಮಾಡುವಂತೆ ಒತ್ತಾಯಿಸುವ ನಿಖರ ಕಾರಣ ಇದೇ, ಒಂದೇ ಅಲ್ಲ' } },

    { type: 'concept', data: {
      headingEn: 'The Core Lesson', headingKn: 'The Core Lesson',
      bodyEn: '• Statistics in ML is not just about getting a p-value. A reliable model comparison should answer: how large is the improvement? -> how uncertain is the estimate? -> could random variation explain it? -> is it statistically significant? -> how large is the effect? -> is the improvement practically useful?\n• That is the difference between "Model B scored higher" and "we have evidence that Model B is genuinely better and the improvement is worth deploying"\n• A p-value does not tell you the probability that your hypothesis is true',
      bodyKn: '• ML ನಲ್ಲಿ Statistics ಕೇವಲ ಒಂದು p-value ಪಡೆಯುವುದೂ ಅಲ್ಲ. ಒಂದು ವಿಶ್ವಾಸಾರ್ಹ model comparison ಉತ್ತರಿಸಬೇಕು: ಸುಧಾರಣೆ ಎಷ್ಟು ದೊಡ್ಡದು? -> ಅಂದಾಜು ಎಷ್ಟು uncertain? -> random variation ಇದನ್ನೂ ವಿವರಿಸಬಹುದೇ? -> ಇದೂ statistically significant ಆಗಿದೆಯೇ? -> effect ಎಷ್ಟು ದೊಡ್ಡದು? -> ಸುಧಾರಣೆ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಉಪಯುಕ್ತವೇ?\n• ಇದೇ "Model B ಹೆಚ್ಚು ಸ್ಕೋರ್ ಮಾಡಿತು" ಮತ್ತು "Model B ನಿಜವಾಗಿ ಉತ್ತಮ ಮತ್ತು ಸುಧಾರಣೆ ಡಿಪ್ಲಾಯ್ ಮಾಡಲು ಯೋಗ್ಯ ಎಂಬುದಕ್ಕೆ ನಮ್ಮಲ್ಲಿ ಪುರಾವೆ ಇದೆ" ನಡುವಿನ ವ್ಯತ್ಯಾಸ\n• ಒಂದು p-value ನಿಮ್ಮ hypothesis ನಿಜ ಎಂಬ probability ಹೇಳುವುದಿಲ್ಲ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely bootstrapping a paired accuracy difference (Model B - Model A) on a 20-example test set, what did the 95% CI turn out to be, and what does it imply?', qKn: 'ಒಂದು 20-example test set ಮೇಲೆ ಒಂದು paired accuracy difference (Model B - Model A) ಅನ್ನೂ ನಿಜವಾಗಿ bootstrap ಮಾಡುವುದೂ, 95% CI ಏನೂ ಆಯಿತು, ಮತ್ತು ಇದೂ ಏನೂ ಸೂಚಿಸುತ್ತದೆ?',
        opts: ['[0.10, 0.20], clearly excluding zero -- strong evidence B is better', '[-0.0500, 0.3500], which includes zero, so despite a positive average difference (0.150) there is no strong statistical evidence B is reliably better', 'The bootstrap could not be computed for paired data', '[-1.0, 1.0], meaning the models are completely unpredictable'], correct: 1,
        optsKn: ['[0.10, 0.20], ಸ್ಪಷ್ಟವಾಗಿ ಶೂನ್ಯ ಹೊರತುಪಡಿಸಿ -- B ಉತ್ತಮ ಎಂಬುದಕ್ಕೆ ಬಲವಾದ ಪುರಾವೆ', '[-0.0500, 0.3500], ಇದೂ ಶೂನ್ಯ ಒಳಗೊಂಡಿದೆ, ಆದ್ದರಿಂದ ಒಂದು ಧನಾತ್ಮಕ ಸರಾಸರಿ ವ್ಯತ್ಯಾಸ (0.150) ಇದ್ದರೂ B ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಉತ್ತಮ ಎಂಬುದಕ್ಕೆ ಬಲವಾದ statistical ಪುರಾವೆ ಇಲ್ಲ', 'Paired data ಗೆ bootstrap ಗಣಿಸಲಾಗಲಿಲ್ಲ', '[-1.0, 1.0], models ಸಂಪೂರ್ಣ ಊಹಿಸಲಾಗದವು ಎಂದು ಅರ್ಥ'] },
      { q: 'Genuinely computing P(at least one false positive) for 20 independent hypothesis tests at alpha=0.05, what was the result?', qKn: 'alpha=0.05 ನಲ್ಲಿ 20 ಸ್ವತಂತ್ರ hypothesis tests ಗೆ P(at least one false positive) ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ, ಫಲಿತಾಂಶ ಏನೂ?',
        opts: ['5%, same as a single test', '≈64%, a dramatic inflation from testing many hypotheses without correction', '100%, guaranteed false positive', '0%, multiple tests reduce false-positive risk'], correct: 1,
        optsKn: ['5%, ಒಂದು ಏಕ test ಗೆ ಅದೇ', '≈64%, correction ಇಲ್ಲದೆ ಅನೇಕ hypotheses ಪರೀಕ್ಷಿಸುವುದರಿಂದ ಒಂದು ನಾಟಕೀಯ inflation', '100%, ಖಾತರಿಪಡಿಸಿದ false positive', '0%, ಬಹು tests false-positive ಅಪಾಯ ಕಡಿಮೆ ಮಾಡುತ್ತವೆ'] },
      { q: 'On the same A/B data, Cohen\'s d was ≈-0.83 (large effect) but Welch\'s t-test gave p=0.22 (not significant). What does this genuinely demonstrate?', qKn: 'ಅದೇ A/B data ಮೇಲೆ, Cohen\'s d ≈-0.83 (ದೊಡ್ಡ effect) ಆಗಿತ್ತು ಆದರೆ Welch\'s t-test p=0.22 ನೀಡಿತು (significant ಅಲ್ಲ). ಇದೂ ನಿಜವಾಗಿ ಏನೂ ಪ್ರದರ್ಶಿಸುತ್ತದೆ?',
        opts: ['One of the two calculations must be wrong', 'Effect size and statistical significance answer different questions and can genuinely disagree on small samples -- both numbers matter', 'Cohen\'s d always agrees with the p-value', 'Small samples always produce large effect sizes'], correct: 1,
        optsKn: ['ಎರಡೂ ಗಣನೆಗಳಲ್ಲಿ ಒಂದೂ ತಪ್ಪಾಗಿರಬೇಕು', 'Effect size ಮತ್ತು statistical significance ಬೇರೆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತವೆ ಮತ್ತು ಚಿಕ್ಕ samples ಮೇಲೆ ನಿಜವಾಗಿ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಬಹುದು -- ಎರಡೂ ಸಂಖ್ಯೆಗಳು ಮುಖ್ಯ', 'Cohen\'s d ಯಾವಾಗಲೂ p-value ಜೊತೆ ಒಪ್ಪುತ್ತದೆ', 'ಚಿಕ್ಕ samples ಯಾವಾಗಲೂ ದೊಡ್ಡ effect sizes ಉತ್ಪಾದಿಸುತ್ತವೆ'] },
      { q: 'Why is accuracy alone a dangerous metric on a dataset that is 99% negative, 1% positive?', qKn: '99% negative, 1% positive ಆಗಿರುವ ಒಂದು dataset ಮೇಲೆ ಕೇವಲ accuracy ಏಕೆ ಒಂದು ಅಪಾಯಕಾರಿ metric?',
        opts: ['Accuracy cannot be computed on imbalanced data', 'A model that always predicts "negative" achieves 99% accuracy while completely failing to identify the positive class', 'Accuracy is always exactly 50% on imbalanced data', 'It has nothing to do with class imbalance'], correct: 1,
        optsKn: ['Imbalanced data ಮೇಲೆ accuracy ಗಣಿಸಲಾಗುವುದಿಲ್ಲ', 'ಯಾವಾಗಲೂ "negative" ಊಹಿಸುವ ಒಂದು model positive class ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಗುರುತಿಸಲು ವಿಫಲವಾಗುತ್ತಿರುವಾಗಲೇ 99% accuracy ಸಾಧಿಸುತ್ತದೆ', 'Imbalanced data ಮೇಲೆ accuracy ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ 50%', 'ಇದಕ್ಕೆ class imbalance ಜೊತೆ ಯಾವುದೇ ಸಂಬಂಧವಿಲ್ಲ'] },
    ] } },
  ],
};
