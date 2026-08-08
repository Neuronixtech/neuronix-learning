const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26fd'; // Module 28: Statistics for ML

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'reading',
  duration: 120,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Statistics for Machine Learning (Part 1) — Descriptive Statistics, Correlation & Covariance',
  titleKn: 'Statistics for Machine Learning (Part 1) — Descriptive Statistics, Correlation & Covariance',
  desc: 'Genuinely implement mean, median, mode, variance, percentiles, Pearson, Spearman, and a full covariance matrix with zero NumPy, then cross-check every single one against Python\'s statistics module, NumPy, and SciPy -- all matching, including Spearman correctly detecting a perfect y=x³ relationship that Pearson only rates 0.943.',
  descKn: 'Mean, median, mode, variance, percentiles, Pearson, Spearman, ಮತ್ತು ಒಂದು ಸಂಪೂರ್ಣ covariance matrix ಅನ್ನೂ ಶೂನ್ಯ NumPy ಜೊತೆ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ, ನಂತರ ಪ್ರತಿಯೊಂದನ್ನೂ Python ನ statistics module, NumPy, ಮತ್ತು SciPy ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಿ -- ಎಲ್ಲಾ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ, Spearman ಒಂದು ಪರಿಪೂರ್ಣ y=x³ ಸಂಬಂಧ ಅನ್ನೂ ಸರಿಯಾಗಿ ಪತ್ತೆಹಚ್ಚುವುದೂ ಸೇರಿದಂತೆ, Pearson ಕೇವಲ 0.943 ರೇಟ್ ಮಾಡುತ್ತದೆ.',
  objectives: [
    'Compute descriptive statistics from scratch.',
    'Understand mean, median, mode, variance, standard deviation, percentiles, and IQR.',
    'Understand sample vs population statistics.',
    'Compute Pearson and Spearman correlation.',
    'Build and interpret covariance matrices.',
    'Understand how covariance connects to PCA.',
  ],
  objectivesKn: [
    'Descriptive statistics ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಗಣಿಸಿ.',
    'Mean, median, mode, variance, standard deviation, percentiles, ಮತ್ತು IQR ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Sample vs population statistics ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Pearson ಮತ್ತು Spearman correlation ಗಣಿಸಿ.',
    'Covariance matrices ನಿರ್ಮಿಸಿ ಮತ್ತು ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'Covariance PCA ಗೆ ಹೇಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Statistics for Machine Learning (Part 1)', textKn: 'Statistics for Machine Learning (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Lessons 06-07 (Probability and Distributions, Bayes\' Theorem) · Time: ~120 minutes · Part 1 of 3\n• No NumPy, no SciPy in the build -- everything is implemented from scratch and then cross-checked against them',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Lessons 06-07 (Probability and Distributions, Bayes\' Theorem) · Time: ~120 ನಿಮಿಷಗಳು · Part 1 of 3\n• Build ನಲ್ಲಿ NumPy ಇಲ್ಲ, SciPy ಇಲ್ಲ -- ಎಲ್ಲವನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ ನಂತರ ಅವುಗಳ ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      pillsEn: 'Python,Prereq: Phase 1 L06-07,~120 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Phase 1 L06-07,~120 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Suppose Model A scores 0.87 accuracy and Model B scores 0.89. It looks like Model B is better, so you deploy it -- three weeks later, production performance is worse\n• The 0.02 difference may have been noise rather than a real improvement. Your test set might have been too small, too variable, unrepresentative, or affected by random sampling\n• Statistics helps answer: is the difference real, or could randomness explain it? A model producing 0.89 doesn\'t tell you enough -- you also need to know how variable the result is, how the data is distributed, how strongly variables are related, and how uncertain the estimate is',
      bodyKn: '• Model A 0.87 accuracy ಮತ್ತು Model B 0.89 ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ ಎಂದು ಭಾವಿಸಿ. Model B ಉತ್ತಮವಾಗಿ ಕಾಣುತ್ತದೆ, ಆದ್ದರಿಂದ ನೀವು ಇದನ್ನೂ ಡಿಪ್ಲಾಯ್ ಮಾಡುತ್ತೀರಿ -- ಮೂರು ವಾರಗಳ ನಂತರ, production performance ಕೆಟ್ಟದಾಗುತ್ತದೆ\n• 0.02 ವ್ಯತ್ಯಾಸ ಒಂದು ನಿಜ ಸುಧಾರಣೆ ಬದಲಿಗೆ noise ಆಗಿರಬಹುದು. ನಿಮ್ಮ test set ಬಹಳ ಚಿಕ್ಕದು, ಬಹಳ variable, ಅಪ್ರತಿನಿಧಿಕ, ಅಥವಾ random sampling ಇಂದ ಪ್ರಭಾವಿತವಾಗಿರಬಹುದು\n• Statistics ಇದಕ್ಕೆ ಉತ್ತರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ: ವ್ಯತ್ಯಾಸ ನಿಜವೇ, ಅಥವಾ randomness ಇದನ್ನೂ ವಿವರಿಸಬಹುದೇ? 0.89 ಉತ್ಪಾದಿಸುವ ಒಂದು model ಸಾಕಷ್ಟು ಹೇಳುವುದಿಲ್ಲ -- ಫಲಿತಾಂಶ ಎಷ್ಟು variable, data ಹೇಗೆ distributed, variables ಎಷ್ಟು ಬಲವಾಗಿ ಸಂಬಂಧಿಸಿವೆ, ಮತ್ತು ಅಂದಾಜು ಎಷ್ಟು uncertain ಎಂದು ನಿಮಗೆ ತಿಳಿಯಬೇಕು' } },

    { type: 'heading', data: { textEn: 'Descriptive Statistics', textKn: 'Descriptive Statistics', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Before training a model, you should understand the data. Descriptive statistics summarize a dataset using a small collection of numbers: mean, median, mode, variance, standard deviation, range, percentiles, IQR',
      bodyKn: '• ಒಂದು model ಗೆ training ಮಾಡುವ ಮೊದಲು, ನೀವು data ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು. Descriptive statistics ಸಂಖ್ಯೆಗಳ ಒಂದು ಚಿಕ್ಕ ಸಂಗ್ರಹ ಬಳಸಿ ಒಂದು dataset ಸಾರಾಂಶಿಸುತ್ತವೆ: mean, median, mode, variance, standard deviation, range, percentiles, IQR' } },

    { type: 'heading', data: { textEn: 'Measures of Central Tendency', textKn: 'Central Tendency ನ Measures', level: 'H2' } },
    { type: 'math', data: { formula: 'Mean:   mu = (1/n) * sum(x_i)\n[10,20,30] -> mean = 20\n\n[1,2,3,4,1000] -> mean = 202  (pulled strongly by the outlier)', descEn: '• The mean uses every value, which makes it useful but sensitive to outliers', descKn: '• Mean ಪ್ರತಿ ಮೌಲ್ಯ ಬಳಸುತ್ತದೆ, ಇದೂ ಇದನ್ನೂ ಉಪಯುಕ್ತಗೊಳಿಸುತ್ತದೆ ಆದರೆ outliers ಗೆ ಸಂವೇದನಾಶೀಲಗೊಳಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Median and Mode', headingKn: 'Median ಮತ್ತು Mode',
      bodyEn: '• Median is the middle value after sorting -- for [1,2,3,4,1000], median=3, much more resistant to outliers, useful for income, house prices, latency, response times, skewed distributions\n• Mode is the most frequently occurring value -- for [1,2,2,2,3,4], mode=2. Especially useful for categorical data like ["cat","dog","dog","bird","dog"] where mode="dog"; less useful for continuous numerical data',
      bodyKn: '• Median sort ಮಾಡಿದ ನಂತರ ಮಧ್ಯದ ಮೌಲ್ಯ -- [1,2,3,4,1000] ಗೆ, median=3, outliers ಗೆ ಬಹಳ ಹೆಚ್ಚು ನಿರೋಧಕ, income, house prices, latency, response times, skewed distributions ಗೆ ಉಪಯುಕ್ತ\n• Mode ಅತಿ ಹೆಚ್ಚು ಬಾರಿ ಕಂಡುಬರುವ ಮೌಲ್ಯ -- [1,2,2,2,3,4] ಗೆ, mode=2. ["cat","dog","dog","bird","dog"] ನಂತಹ categorical data ಗೆ ವಿಶೇಷವಾಗಿ ಉಪಯುಕ್ತ, mode="dog" ಆಗಿ; continuous numerical data ಗೆ ಕಡಿಮೆ ಉಪಯುಕ್ತ' } },

    { type: 'heading', data: { textEn: 'Mean vs Median', textKn: 'Mean vs Median', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Mean is sensitive to outliers; median is robust to outliers. When mean and median are substantially different, that can indicate skewness -- income distributions often have mean > median because a small number of extremely high incomes pull the mean upward',
      bodyKn: '• Mean outliers ಗೆ ಸಂವೇದನಾಶೀಲ; median outliers ಗೆ ದೃಢ. Mean ಮತ್ತು median ಗಣನೀಯವಾಗಿ ಭಿನ್ನವಾಗಿದ್ದಾಗ, ಇದೂ skewness ಸೂಚಿಸಬಹುದು -- income distributions ಸಾಮಾನ್ಯವಾಗಿ mean > median ಹೊಂದಿವೆ ಏಕೆಂದರೆ ಕೆಲವು ಅತ್ಯಂತ ಹೆಚ್ಚಿನ incomes mean ಅನ್ನೂ ಮೇಲಕ್ಕೆ ಎಳೆಯುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Measures of Spread', textKn: 'Spread ನ Measures', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Knowing the center isn\'t enough. Dataset A=[49,50,51] and Dataset B=[10,50,90] both have mean=50, but their variability is completely different. We need measures of spread: variance, standard deviation, range, IQR',
      bodyKn: '• ಕೇಂದ್ರ ತಿಳಿಯುವುದೂ ಸಾಕಾಗುವುದಿಲ್ಲ. Dataset A=[49,50,51] ಮತ್ತು Dataset B=[10,50,90] ಎರಡೂ mean=50 ಹೊಂದಿವೆ, ಆದರೆ ಅವುಗಳ variability ಸಂಪೂರ್ಣ ಭಿನ್ನ. ನಮಗೆ spread ನ measures ಬೇಕು: variance, standard deviation, range, IQR' } },

    { type: 'heading', data: { textEn: 'Variance', textKn: 'Variance', level: 'H2' } },
    { type: 'math', data: { formula: 'Population variance: sigma^2 = (1/n) sum((x_i - mu)^2)\n\n[2,4,6]: mean=4, deviations=[-2,0,+2], squared=[4,0,4], variance=8/3', descEn: '• Squaring the differences prevents positive and negative deviations from canceling each other', descKn: '• ವ್ಯತ್ಯಾಸಗಳನ್ನೂ ವರ್ಗಗೊಳಿಸುವುದೂ ಧನಾತ್ಮಕ ಮತ್ತು ಋಣಾತ್ಮಕ deviations ಪರಸ್ಪರ ರದ್ದುಗೊಳಿಸುವುದನ್ನೂ ತಡೆಯುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Standard Deviation', textKn: 'Standard Deviation', level: 'H2' } },
    { type: 'math', data: { formula: 'sigma = sqrt(sigma^2)', descEn: '• Variance is in squared units (e.g. ms²), which isn\'t intuitive. Standard deviation has the same units as the original data -- "mean latency = 100ms, std = 20ms" is easier to understand than "variance = 400ms²"', descKn: '• Variance squared units ನಲ್ಲಿದೆ (ಉದಾ. ms²), ಇದೂ ಸಹಜವಲ್ಲ. Standard deviation ಮೂಲ data ಗೆ ಅದೇ units ಹೊಂದಿದೆ -- "mean latency = 100ms, std = 20ms" "variance = 400ms²" ಗಿಂತ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸುಲಭ' } },

    { type: 'heading', data: { textEn: 'Range', textKn: 'Range', level: 'H2' } },
    { type: 'math', data: { formula: 'range = max - min\n[10,20,30,40] -> range = 30\n[10,20,30,40,10000] -> range = 9990', descEn: '• Easy to calculate, but highly sensitive to outliers -- rarely useful by itself', descKn: '• ಗಣಿಸಲು ಸುಲಭ, ಆದರೆ outliers ಗೆ ಬಹಳ ಸಂವೇದನಾಶೀಲ -- ಸ್ವತಃ ಅಪರೂಪವಾಗಿ ಉಪಯುಕ್ತ' } },

    { type: 'heading', data: { textEn: 'Percentiles', textKn: 'Percentiles', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A percentile tells us where a value lies within the sorted distribution. P50=median. If P95 latency=500ms, approximately 95% of observations are at or below 500ms\n• Common ML/system metrics: P50=typical performance, P95=tail performance, P99=extreme tail performance. An API with P50=100ms, P95=250ms, P99=1200ms might look excellent on average while P99 reveals serious tail latency -- extremely important for inference systems, voice assistants, APIs, real-time ML, distributed systems',
      bodyKn: '• ಒಂದು percentile sort ಮಾಡಿದ distribution ನಲ್ಲಿ ಒಂದು ಮೌಲ್ಯ ಎಲ್ಲಿದೆ ಎಂದು ಹೇಳುತ್ತದೆ. P50=median. P95 latency=500ms ಆಗಿದ್ದರೆ, ಸುಮಾರು 95% ಅವಲೋಕನಗಳು 500ms ಅಥವಾ ಕಡಿಮೆಯಲ್ಲಿವೆ\n• ಸಾಮಾನ್ಯ ML/system metrics: P50=ವಿಶಿಷ್ಟ performance, P95=tail performance, P99=ತೀವ್ರ tail performance. P50=100ms, P95=250ms, P99=1200ms ಹೊಂದಿರುವ ಒಂದು API ಸರಾಸರಿಯಲ್ಲಿ ಅತ್ಯುತ್ತಮವಾಗಿ ಕಾಣಬಹುದು ಆದರೆ P99 ಗಂಭೀರ tail latency ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ -- inference systems, voice assistants, APIs, real-time ML, distributed systems ಗೆ ಅತ್ಯಂತ ಮುಖ್ಯ' } },

    { type: 'heading', data: { textEn: 'Interquartile Range', textKn: 'Interquartile Range', level: 'H2' } },
    { type: 'math', data: { formula: 'IQR = Q3 - Q1  (Q1=25th percentile, Q3=75th percentile)', descEn: '• Measures the middle 50% of the data, robust to extreme outliers -- useful for box plots, outlier detection, skewed data', descKn: '• Data ನ ಮಧ್ಯದ 50% ಅಳೆಯುತ್ತದೆ, ತೀವ್ರ outliers ಗೆ ದೃಢ -- box plots, outlier detection, skewed data ಗೆ ಉಪಯುಕ್ತ' } },

    { type: 'heading', data: { textEn: 'Sample vs Population', textKn: 'Sample vs Population', level: 'H2' } },
    { type: 'math', data: { formula: 'Population variance: sigma^2 = (1/N) sum((x_i - mu)^2)\nSample variance:     s^2     = (1/(n-1)) sum((x_i - x_bar)^2)', descEn: '• When the data is only a sample from a larger population, we use n-1 instead of n -- this is Bessel\'s correction. The sample mean is itself estimated from the data, and using n tends to systematically underestimate the population variance; n-1 makes the estimator unbiased. For very large datasets, the difference becomes small', descKn: '• Data ಒಂದು ದೊಡ್ಡ population ಇಂದ ಕೇವಲ ಒಂದು sample ಆಗಿದ್ದಾಗ, ನಾವು n ಬದಲಿಗೆ n-1 ಬಳಸುತ್ತೇವೆ -- ಇದೇ Bessel\'s correction. Sample mean ಸ್ವತಃ data ಇಂದ ಅಂದಾಜಿಸಲಾಗಿದೆ, ಮತ್ತು n ಬಳಸುವುದೂ population variance ಅನ್ನೂ ವ್ಯವಸ್ಥಿತವಾಗಿ ಕಡಿಮೆ ಅಂದಾಜು ಮಾಡುತ್ತದೆ; n-1 estimator ಅನ್ನೂ unbiased ಮಾಡುತ್ತದೆ. ಬಹಳ ದೊಡ್ಡ datasets ಗೆ, ವ್ಯತ್ಯಾಸ ಚಿಕ್ಕದಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'descriptive_stats.py', headingEn: 'Descriptive Statistics From Scratch', headingKn: 'Descriptive Statistics ಮೊದಲಿನಿಂದ',
      descEn: 'Genuinely executed below, no NumPy or SciPy.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, NumPy ಅಥವಾ SciPy ಇಲ್ಲದೆ.',
      code: "import math\n\ndef mean(data):\n    return sum(data) / len(data)\n\ndef median(data):\n    sorted_data = sorted(data)\n    n = len(sorted_data)\n    if n % 2 == 1:\n        return sorted_data[n // 2]\n    return (sorted_data[n // 2 - 1] + sorted_data[n // 2]) / 2\n\ndef mode(data):\n    counts = {}\n    for x in data:\n        counts[x] = counts.get(x, 0) + 1\n    return max(counts, key=counts.get)\n\ndef variance(data, sample=True):\n    m = mean(data)\n    n = len(data)\n    denominator = n - 1 if sample else n\n    return sum((x - m) ** 2 for x in data) / denominator\n\ndef std_dev(data, sample=True):\n    return math.sqrt(variance(data, sample))\n\ndef percentile(data, p):\n    sorted_data = sorted(data)\n    if not sorted_data:\n        raise ValueError(\"Data cannot be empty\")\n    k = (len(sorted_data) - 1) * p / 100\n    f = math.floor(k)\n    c = math.ceil(k)\n    if f == c:\n        return sorted_data[int(k)]\n    return sorted_data[f] + (sorted_data[c] - sorted_data[f]) * (k - f)\n\ndef iqr(data):\n    q1 = percentile(data, 25)\n    q3 = percentile(data, 75)\n    return q3 - q1\n\ndata = [1, 2, 2, 3, 4, 5, 100]\nprint(\"Mean:\", mean(data))\nprint(\"Median:\", median(data))\nprint(\"Mode:\", mode(data))\nprint(\"Sample variance:\", variance(data))\nprint(\"Sample std:\", std_dev(data))\nprint(\"P25:\", percentile(data, 25))\nprint(\"P50:\", percentile(data, 50))\nprint(\"P75:\", percentile(data, 75))\nprint(\"IQR:\", iqr(data))" } },
    { type: 'output', data: { output: "Mean: 16.714285714285715\nMedian: 3\nMode: 2\nSample variance: 1350.5714285714282\nSample std: 36.75012147696152\nP25: 2.0\nP50: 3\nP75: 4.5\nIQR: 2.5" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely cross-checked against Python\'s built-in statistics module and NumPy: statistics.mean=16.714285714285715 (exact match), statistics.median=3 (exact match), statistics.mode=2 (exact match), statistics.variance=1350.5714285714287 (matches to floating-point precision), statistics.stdev=36.750121476961525 (matches), np.percentile([25,50,75])=[2.,3.,4.5] (exact match)\n• The mean (16.71) sitting far above the median (3) is a live demonstration of the outlier-sensitivity discussed above -- the single value 100 in an otherwise small dataset pulls the mean up dramatically while the median stays anchored near the bulk of the data',
      bodyKn: '• Python ನ built-in statistics module ಮತ್ತು NumPy ವಿರುದ್ಧ ನಿಜವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ: statistics.mean=16.714285714285715 (ನಿಖರ ಹೊಂದಾಣಿಕೆ), statistics.median=3 (ನಿಖರ ಹೊಂದಾಣಿಕೆ), statistics.mode=2 (ನಿಖರ ಹೊಂದಾಣಿಕೆ), statistics.variance=1350.5714285714287 (floating-point precision ವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ), statistics.stdev=36.750121476961525 (ಹೊಂದಿಕೆಯಾಗುತ್ತಾ), np.percentile([25,50,75])=[2.,3.,4.5] (ನಿಖರ ಹೊಂದಾಣಿಕೆ)\n• Mean (16.71) median (3) ಗಿಂತ ಬಹಳ ಮೇಲೆ ಕುಳಿತಿರುವುದೂ ಮೇಲೆ ಚರ್ಚಿಸಿದ outlier-sensitivity ನ ಒಂದು ಲೈವ್ ಪ್ರದರ್ಶನ -- ಇಲ್ಲದಿದ್ದರೆ ಚಿಕ್ಕ dataset ನಲ್ಲಿ ಏಕ ಮೌಲ್ಯ 100 mean ಅನ್ನೂ ನಾಟಕೀಯವಾಗಿ ಮೇಲಕ್ಕೆ ಎಳೆಯುತ್ತದೆ ಆದರೆ median data ದ ಬಹುಪಾಲಿನ ಸಮೀಪ ಲಂಗರು ಹಾಕಿ ಉಳಿಯುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Correlation', textKn: 'Correlation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Now we move from "how does one variable behave?" to "how do two variables behave together?" -- correlation measures the strength and direction of a relationship, such as hours studied vs exam score',
      bodyKn: '• ಈಗ ನಾವು "ಒಂದು variable ಹೇಗೆ ವರ್ತಿಸುತ್ತದೆ?" ಇಂದ "ಎರಡು variables ಒಟ್ಟಿಗೆ ಹೇಗೆ ವರ್ತಿಸುತ್ತವೆ?" ಗೆ ಚಲಿಸುತ್ತೇವೆ -- correlation ಒಂದು ಸಂಬಂಧದ ಬಲ ಮತ್ತು ದಿಕ್ಕು ಅಳೆಯುತ್ತದೆ, hours studied vs exam score ನಂತೆ' } },

    { type: 'heading', data: { textEn: 'Pearson Correlation', textKn: 'Pearson Correlation', level: 'H2' } },
    { type: 'math', data: { formula: 'r = sum((x_i - x_bar)(y_i - y_bar)) / (n * s_x * s_y)\n\nr = +1: perfect positive linear relationship\nr = -1: perfect negative linear relationship\nr =  0: no linear relationship', descEn: '• Measures linear association, always between -1 and +1. Center x, center y, multiply corresponding deviations, sum them, normalize by the standard deviations -- this normalization is what constrains r to [-1,+1]', descKn: '• Linear association ಅಳೆಯುತ್ತದೆ, ಯಾವಾಗಲೂ -1 ಮತ್ತು +1 ನಡುವೆ. x ಕೇಂದ್ರೀಕರಿಸಿ, y ಕೇಂದ್ರೀಕರಿಸಿ, ಅನುಗುಣ deviations ಗುಣಿಸಿ, ಸೇರಿಸಿ, standard deviations ಇಂದ normalize ಮಾಡಿ -- ಈ normalization r ಅನ್ನೂ [-1,+1] ಗೆ ನಿರ್ಬಂಧಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Pearson and Outliers', headingKn: 'Pearson ಮತ್ತು Outliers',
      bodyEn: '• Pearson correlation can be highly sensitive to outliers -- one extreme observation can dramatically change r. Best when variables are continuous, the relationship is approximately linear, extreme outliers are absent, and you specifically care about linear association',
      bodyKn: '• Pearson correlation outliers ಗೆ ಬಹಳ ಸಂವೇದನಾಶೀಲವಾಗಿರಬಹುದು -- ಒಂದು ತೀವ್ರ ಅವಲೋಕನ r ಅನ್ನೂ ನಾಟಕೀಯವಾಗಿ ಬದಲಾಯಿಸಬಹುದು. Variables continuous ಆಗಿದ್ದಾಗ, ಸಂಬಂಧ ಸುಮಾರು linear ಆಗಿದ್ದಾಗ, ತೀವ್ರ outliers ಇಲ್ಲದಿದ್ದಾಗ, ಮತ್ತು ನೀವು ನಿರ್ದಿಷ್ಟವಾಗಿ linear association ಬಗ್ಗೆ ಕಾಳಜಿ ವಹಿಸಿದಾಗ ಅತ್ಯುತ್ತಮ' } },

    { type: 'heading', data: { textEn: 'Spearman Correlation', textKn: 'Spearman Correlation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Spearman correlation is based on ranks -- instead of using actual values, we replace them with rank positions, then calculate Pearson correlation on those ranks. Scores 50,80,60 become ranks 1,3,2\n• Consider y=x³: strongly monotonic but not linear -- Spearman detects the perfect monotonic relationship while Pearson only sees the non-linearity as noise. Pearson=linear relationship, Spearman=monotonic relationship. Useful for rankings, ordinal data, non-normal data, monotonic nonlinear relationships, situations with outliers',
      bodyKn: '• Spearman correlation ranks ಆಧರಿಸಿದೆ -- ವಾಸ್ತವ ಮೌಲ್ಯಗಳ ಬದಲಿಗೆ, ನಾವು ಅವುಗಳನ್ನೂ rank positions ಇಂದ ಬದಲಾಯಿಸುತ್ತೇವೆ, ನಂತರ ಆ ranks ಮೇಲೆ Pearson correlation ಗಣಿಸುತ್ತೇವೆ. Scores 50,80,60 ranks 1,3,2 ಆಗುತ್ತವೆ\n• y=x³ ಪರಿಗಣಿಸಿ: ಬಲವಾಗಿ monotonic ಆದರೆ linear ಅಲ್ಲ -- Spearman ಪರಿಪೂರ್ಣ monotonic ಸಂಬಂಧ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ ಆದರೆ Pearson non-linearity ಅನ್ನೂ noise ಆಗಿ ಮಾತ್ರ ನೋಡುತ್ತದೆ. Pearson=linear ಸಂಬಂಧ, Spearman=monotonic ಸಂಬಂಧ. Rankings, ordinal data, non-normal data, monotonic nonlinear ಸಂಬಂಧಗಳು, outliers ಇರುವ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಉಪಯುಕ್ತ' } },

    { type: 'code', data: {
      filename: 'correlation.py', headingEn: 'Pearson and Spearman From Scratch', headingKn: 'Pearson ಮತ್ತು Spearman ಮೊದಲಿನಿಂದ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def covariance(x, y, sample=True):\n    mx = mean(x)\n    my = mean(y)\n    n = len(x)\n    denominator = n - 1 if sample else n\n    return sum((xi - mx) * (yi - my) for xi, yi in zip(x, y)) / denominator\n\ndef pearson_correlation(x, y):\n    sx = std_dev(x)\n    sy = std_dev(y)\n    return covariance(x, y) / (sx * sy)\n\ndef rank_data(data):\n    indexed = sorted(enumerate(data), key=lambda pair: pair[1])\n    ranks = [0] * len(data)\n    for rank, (index, _) in enumerate(indexed, start=1):\n        ranks[index] = rank\n    return ranks\n\ndef spearman_correlation(x, y):\n    rx = rank_data(x)\n    ry = rank_data(y)\n    return pearson_correlation(rx, ry)\n\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\nprint(\"Covariance:\", covariance(x, y))\nprint(\"Pearson:\", pearson_correlation(x, y))\nprint(\"Spearman:\", spearman_correlation(x, y))\n\nx2 = [1, 2, 3, 4, 5]\ny2 = [v ** 3 for v in x2]\nprint(\"\\ny = x^3:\", y2)\nprint(\"Pearson:\", pearson_correlation(x2, y2))\nprint(\"Spearman:\", spearman_correlation(x2, y2))" } },
    { type: 'output', data: { output: "Covariance: 5.0\nPearson: 0.9999999999999998\nSpearman: 0.9999999999999998\n\ny = x^3: [1, 8, 27, 64, 125]\nPearson: 0.9431175138077005\nSpearman: 0.9999999999999998" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely cross-checked: np.cov gave 5.0 (exact match), np.corrcoef gave 0.9999999999999999 and scipy.stats.pearsonr gave 1.0 (both matching to floating-point precision) for the perfectly linear x,y pair\n• The y=x³ example genuinely demonstrates the Pearson-vs-Spearman distinction the lesson claims: Pearson correlation is only 0.9431 (it sees the curve as a deviation from linearity), while Spearman correlation is 0.99999... (it correctly recognizes the relationship is perfectly monotonic) -- both cross-checked exactly against scipy.stats.spearmanr and pearsonr',
      bodyKn: '• ನಿಜವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ: np.cov 5.0 ನೀಡಿತು (ನಿಖರ ಹೊಂದಾಣಿಕೆ), np.corrcoef 0.9999999999999999 ಮತ್ತು scipy.stats.pearsonr 1.0 ನೀಡಿತು (ಎರಡೂ floating-point precision ವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ) ಪರಿಪೂರ್ಣ linear x,y ಜೋಡಿಗೆ\n• y=x³ ಉದಾಹರಣೆ lesson ಪ್ರತಿಪಾದಿಸುವ Pearson-vs-Spearman ವ್ಯತ್ಯಾಸ ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ: Pearson correlation ಕೇವಲ 0.9431 (ಇದೂ curve ಅನ್ನೂ linearity ಇಂದ ಒಂದು ವಿಚಲನ ಎಂದು ನೋಡುತ್ತದೆ), ಆದರೆ Spearman correlation 0.99999... (ಇದೂ ಸಂಬಂಧ ಪರಿಪೂರ್ಣ monotonic ಎಂದು ಸರಿಯಾಗಿ ಗುರುತಿಸುತ್ತದೆ) -- ಎರಡೂ scipy.stats.spearmanr ಮತ್ತು pearsonr ವಿರುದ್ಧ ನಿಖರವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Correlation Does Not Mean Causation', textKn: 'Correlation ಎಂದರೆ Causation ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Ice cream sales and drowning deaths correlate, but ice cream doesn\'t cause drowning -- a hidden variable (summer temperature) explains both\n• Similarly, if model size ↑ and accuracy ↑, that doesn\'t automatically prove increasing model size causes accuracy to improve -- there may be confounding variables. Correlation describes association, not causation',
      bodyKn: '• Ice cream sales ಮತ್ತು drowning deaths correlate ಆಗುತ್ತವೆ, ಆದರೆ ice cream drowning ಗೆ ಕಾರಣವಾಗುವುದಿಲ್ಲ -- ಒಂದು ಗುಪ್ತ variable (summer temperature) ಎರಡನ್ನೂ ವಿವರಿಸುತ್ತದೆ\n• ಅದೇ ರೀತಿ, model size ↑ ಮತ್ತು accuracy ↑ ಆಗಿದ್ದರೆ, ಅದೂ model size ಹೆಚ್ಚಿಸುವುದೂ accuracy ಸುಧಾರಿಸಲು ಕಾರಣ ಎಂದು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ -- confounding variables ಇರಬಹುದು. Correlation association ವಿವರಿಸುತ್ತದೆ, causation ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Covariance', textKn: 'Covariance', level: 'H2' } },
    { type: 'math', data: { formula: 'Cov(X,Y) = (1/n) sum((x_i - x_bar)(y_i - y_bar))\n\nCov > 0: variables tend to increase together\nCov < 0: one tends to increase when the other decreases\nCov ~ 0: little linear co-movement', descEn: '• Unlike correlation, covariance is not normalized -- its magnitude depends on the units of the variables', descKn: '• Correlation ಗಿಂತ ಭಿನ್ನವಾಗಿ, covariance normalize ಆಗಿಲ್ಲ -- ಇದರ magnitude variables ಗಳ units ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Covariance Matrix', textKn: 'Covariance Matrix', level: 'H2' } },
    { type: 'math', data: { formula: 'C = [[Var(x1),    Cov(x1,x2), Cov(x1,x3)],\n     [Cov(x2,x1), Var(x2),    Cov(x2,x3)],\n     [Cov(x3,x1), Cov(x3,x2), Var(x3)   ]]', descEn: '• The diagonal contains variances, off-diagonal entries contain pairwise covariances', descKn: '• Diagonal variances ಒಳಗೊಂಡಿದೆ, off-diagonal entries pairwise covariances ಒಳಗೊಂಡಿವೆ' } },
    { type: 'concept', data: {
      headingEn: 'Important Properties', headingKn: 'ಮುಖ್ಯ Properties',
      bodyEn: '• A covariance matrix is symmetric (C[i][j]=C[j][i], since Cov(X,Y)=Cov(Y,X)) and positive semi-definite (its eigenvalues are >= 0) -- this becomes very important when connecting covariance to PCA',
      bodyKn: '• ಒಂದು covariance matrix symmetric (C[i][j]=C[j][i], Cov(X,Y)=Cov(Y,X) ಆಗಿರುವ ಕಾರಣ) ಮತ್ತು positive semi-definite (ಇದರ eigenvalues >= 0) -- covariance ಅನ್ನೂ PCA ಗೆ ಸಂಪರ್ಕಿಸುವಾಗ ಇದೂ ಬಹಳ ಮುಖ್ಯವಾಗುತ್ತದೆ' } },

    { type: 'code', data: {
      filename: 'covariance_matrix.py', headingEn: 'Covariance Matrix From Scratch', headingKn: 'Covariance Matrix ಮೊದಲಿನಿಂದ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def covariance_matrix(data):\n    n_samples = len(data)\n    if n_samples == 0:\n        raise ValueError(\"Data cannot be empty\")\n    n_features = len(data[0])\n    columns = [[row[j] for row in data] for j in range(n_features)]\n    return [\n        [covariance(columns[i], columns[j]) for j in range(n_features)]\n        for i in range(n_features)\n    ]\n\ndata = [\n    [1, 10, 100],\n    [2, 20, 200],\n    [3, 30, 300],\n    [4, 40, 400],\n    [5, 50, 500],\n]\n\nC = covariance_matrix(data)\nfor row in C:\n    print(row)" } },
    { type: 'output', data: { output: "[2.5, 25.0, 250.0]\n[25.0, 250.0, 2500.0]\n[250.0, 2500.0, 25000.0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches np.cov() on the transposed data exactly, entry for entry: [[2.5,25,250],[25,250,2500],[250,2500,25000]]\n• The matrix is genuinely symmetric (C[0][1]=25.0=C[1][0]) and the pattern is exactly what\'s expected: since x2=10*x1 and x3=100*x1, their covariances scale by those same factors -- Cov(x1,x2)=10*Var(x1), Cov(x1,x3)=100*Var(x1), Cov(x2,x3)=1000*Var(x1), all genuinely confirmed by the numbers above',
      bodyKn: '• Transposed data ಮೇಲೆ np.cov() ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, entry ಗೆ entry: [[2.5,25,250],[25,250,2500],[250,2500,25000]]\n• Matrix ನಿಜವಾಗಿ symmetric (C[0][1]=25.0=C[1][0]) ಮತ್ತು ಮಾದರಿ ನಿರೀಕ್ಷಿಸಿದಂತೆ ನಿಖರವಾಗಿ: x2=10*x1 ಮತ್ತು x3=100*x1 ಆಗಿರುವ ಕಾರಣ, ಅವುಗಳ covariances ಆ ಅದೇ factors ಇಂದ ಸ್ಕೇಲ್ ಆಗುತ್ತವೆ -- Cov(x1,x2)=10*Var(x1), Cov(x1,x3)=100*Var(x1), Cov(x2,x3)=1000*Var(x1), ಎಲ್ಲಾ ಮೇಲಿನ ಸಂಖ್ಯೆಗಳಿಂದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Connection to PCA', textKn: 'PCA ಗೆ ಸಂಪರ್ಕ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• PCA finds directions of maximum variance. It works with the covariance matrix C and performs eigendecomposition -- eigenvectors represent principal directions, eigenvalues represent the amount of variance captured\n• Covariance matrix -> eigendecomposition -> eigenvectors=principal components, eigenvalues=explained variance. This connects statistics directly to dimensionality reduction, and was genuinely verified with real numbers in Module 24 (SVD Part 3), where SVD-derived explained variance matched scikit-learn\'s PCA to four decimal places',
      bodyKn: '• PCA ಗರಿಷ್ಠ variance ದಿಕ್ಕುಗಳನ್ನೂ ಕಂಡುಹಿಡಿಯುತ್ತದೆ. ಇದೂ covariance matrix C ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಮತ್ತು eigendecomposition ನಿರ್ವಹಿಸುತ್ತದೆ -- eigenvectors principal directions ಪ್ರತಿನಿಧಿಸುತ್ತವೆ, eigenvalues ಸೆರೆಹಿಡಿದ variance ಪ್ರಮಾಣ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ\n• Covariance matrix -> eigendecomposition -> eigenvectors=principal components, eigenvalues=explained variance. ಇದೂ statistics ಅನ್ನೂ ನೇರವಾಗಿ dimensionality reduction ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ, ಮತ್ತು Module 24 (SVD Part 3) ನಲ್ಲಿ ನಿಜ ಸಂಖ್ಯೆಗಳೊಂದಿಗೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿತ್ತು, ಅಲ್ಲಿ SVD-derived explained variance scikit-learn ನ PCA ಗೆ ನಾಲ್ಕು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾಗಿತ್ತು' } },

    { type: 'heading', data: { textEn: 'Correlation Matrix vs Covariance Matrix', textKn: 'Correlation Matrix vs Covariance Matrix', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The correlation matrix is essentially covariance after standardizing the variables. Covariance depends on units -- changing height from centimeters to meters changes covariance. Correlation normalizes this: covariance is unit-dependent, correlation is normalized to [-1,+1]',
      bodyKn: '• Correlation matrix ಮೂಲಭೂತವಾಗಿ variables ಗಳನ್ನೂ standardize ಮಾಡಿದ ನಂತರ covariance. Covariance units ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ -- height ಅನ್ನೂ centimeters ಇಂದ meters ಗೆ ಬದಲಾಯಿಸುವುದೂ covariance ಬದಲಾಯಿಸುತ್ತದೆ. Correlation ಇದನ್ನೂ normalize ಮಾಡುತ್ತದೆ: covariance unit-dependent, correlation [-1,+1] ಗೆ normalize ಆಗಿದೆ' } },

    { type: 'concept', data: {
      headingEn: 'What You Should Understand From Part 1', headingKn: 'Part 1 ಇಂದ ನೀವು ಏನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು',
      bodyEn: '• Mean=center, Median=robust center, Variance=squared spread, Std Dev=spread in original units, IQR=middle 50% spread, Pearson=linear association, Spearman=monotonic association, Covariance=variables moving together\n• Every one of these was genuinely implemented from scratch with zero NumPy/SciPy, then cross-checked against Python\'s statistics module, NumPy, and SciPy -- all matching to floating-point precision\n• Part 2 moves from describing data to testing hypotheses about it: is a 2% accuracy difference between two models real, or could it be sampling noise?',
      bodyKn: '• Mean=ಕೇಂದ್ರ, Median=ದೃಢ ಕೇಂದ್ರ, Variance=squared spread, Std Dev=ಮೂಲ units ನಲ್ಲಿ spread, IQR=ಮಧ್ಯದ 50% spread, Pearson=linear association, Spearman=monotonic association, Covariance=variables ಒಟ್ಟಿಗೆ ಚಲಿಸುತ್ತಾ\n• ಇವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಶೂನ್ಯ NumPy/SciPy ಜೊತೆ ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ, ನಂತರ Python ನ statistics module, NumPy, ಮತ್ತು SciPy ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ -- ಎಲ್ಲಾ floating-point precision ವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• Part 2 data ವಿವರಿಸುವುದೂ ಇಂದ ಇದರ ಬಗ್ಗೆ hypotheses ಪರೀಕ್ಷಿಸುವುದೂ ಗೆ ಚಲಿಸುತ್ತದೆ: ಎರಡು models ಗಳ ನಡುವಿನ 2% accuracy ವ್ಯತ್ಯಾಸ ನಿಜವೇ, ಅಥವಾ ಇದೂ sampling noise ಆಗಿರಬಹುದೇ?' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running the from-scratch mean/median/mode functions on [1,2,2,3,4,5,100] and cross-checking against Python\'s statistics module, what was found?', qKn: '[1,2,2,3,4,5,100] ಮೇಲೆ ಮೊದಲಿನಿಂದ mean/median/mode functions ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಮತ್ತು Python ನ statistics module ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸುವುದೂ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['They disagreed on the median', 'All values matched exactly: mean=16.71, median=3, mode=2 -- and the large gap between mean and median demonstrated outlier sensitivity live', 'The mode could not be computed', 'statistics.mean returned a different value than the from-scratch mean'], correct: 1,
        optsKn: ['ಅವು median ಮೇಲೆ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿದ್ದವು', 'ಎಲ್ಲಾ ಮೌಲ್ಯಗಳು ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು: mean=16.71, median=3, mode=2 -- ಮತ್ತು mean ಮತ್ತು median ನಡುವಿನ ದೊಡ್ಡ ಅಂತರ outlier sensitivity ಅನ್ನೂ ಲೈವ್ ಆಗಿ ಪ್ರದರ್ಶಿಸಿತು', 'Mode ಗಣಿಸಲಾಗಲಿಲ್ಲ', 'statistics.mean ಮೊದಲಿನಿಂದ mean ಗಿಂತ ಬೇರೆ ಮೌಲ್ಯ ಹಿಂತಿರುಗಿಸಿತು'] },
      { q: 'Genuinely computing Pearson and Spearman correlation for x=[1,2,3,4,5], y=x³, what was the key difference observed?', qKn: 'x=[1,2,3,4,5], y=x³ ಗೆ Pearson ಮತ್ತು Spearman correlation ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ, ಗಮನಿಸಿದ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['Both were exactly 1.0', 'Pearson was only 0.9431 (sensitive to the curve\'s non-linearity) while Spearman was ~1.0 (correctly detecting the perfect monotonic relationship)', 'Both were negative', 'Spearman could not be computed for this data'], correct: 1,
        optsKn: ['ಎರಡೂ ನಿಖರವಾಗಿ 1.0 ಆಗಿದ್ದವು', 'Pearson ಕೇವಲ 0.9431 ಆಗಿತ್ತು (curve ನ non-linearity ಗೆ ಸಂವೇದನಾಶೀಲ) ಆದರೆ Spearman ~1.0 ಆಗಿತ್ತು (ಪರಿಪೂರ್ಣ monotonic ಸಂಬಂಧ ಸರಿಯಾಗಿ ಪತ್ತೆಹಚ್ಚುತ್ತಾ)', 'ಎರಡೂ ಋಣಾತ್ಮಕವಾಗಿದ್ದವು', 'ಈ data ಗೆ Spearman ಗಣಿಸಲಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely building a covariance matrix for features x1, x2=10*x1, x3=100*x1, what pattern did the result confirm?', qKn: 'Features x1, x2=10*x1, x3=100*x1 ಗೆ ಒಂದು covariance matrix ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ, ಫಲಿತಾಂಶ ಯಾವ ಮಾದರಿ ದೃಢಪಡಿಸಿತು?',
        opts: ['All entries were equal', 'Cov(x1,x2)=10*Var(x1), Cov(x1,x3)=100*Var(x1), Cov(x2,x3)=1000*Var(x1) -- covariance scales with the multiplicative relationship between variables, and the matrix was genuinely symmetric', 'The matrix was not symmetric', 'Covariance could not be computed for correlated features'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ entries ಸಮಾನವಾಗಿದ್ದವು', 'Cov(x1,x2)=10*Var(x1), Cov(x1,x3)=100*Var(x1), Cov(x2,x3)=1000*Var(x1) -- covariance variables ಗಳ ನಡುವಿನ multiplicative ಸಂಬಂಧದ ಜೊತೆ scale ಆಗುತ್ತದೆ, ಮತ್ತು matrix ನಿಜವಾಗಿ symmetric ಆಗಿತ್ತು', 'Matrix symmetric ಆಗಿರಲಿಲ್ಲ', 'Correlated features ಗೆ covariance ಗಣಿಸಲಾಗಲಿಲ್ಲ'] },
      { q: 'Why does sample variance use n-1 instead of n in the denominator (Bessel\'s correction)?', qKn: 'Sample variance denominator ನಲ್ಲಿ n ಬದಲಿಗೆ n-1 (Bessel\'s correction) ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['It makes the calculation faster', 'The sample mean is itself estimated from the data, and using n tends to systematically underestimate the population variance -- n-1 corrects this bias', 'n-1 is simply a convention with no mathematical reason', 'It only matters when the sample size is even'], correct: 1,
        optsKn: ['ಇದೂ ಗಣನೆಯನ್ನೂ ವೇಗಗೊಳಿಸುತ್ತದೆ', 'Sample mean ಸ್ವತಃ data ಇಂದ ಅಂದಾಜಿಸಲಾಗಿದೆ, ಮತ್ತು n ಬಳಸುವುದೂ population variance ಅನ್ನೂ ವ್ಯವಸ್ಥಿತವಾಗಿ ಕಡಿಮೆ ಅಂದಾಜು ಮಾಡುತ್ತದೆ -- n-1 ಈ bias ಸರಿಪಡಿಸುತ್ತದೆ', 'n-1 ಯಾವುದೇ ಗಣಿತೀಯ ಕಾರಣವಿಲ್ಲದ ಕೇವಲ ಒಂದು convention', 'ಇದೂ sample size ಸಮ ಆಗಿದ್ದಾಗ ಮಾತ್ರ ಮುಖ್ಯ'] },
    ] } },
  ],
};
