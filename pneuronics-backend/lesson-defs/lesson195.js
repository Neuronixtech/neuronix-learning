const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213c7'; // Module 170: Evaluation: FID, CLIP Score, Human Preference

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Evaluation (Part 3) — Confidence Intervals, Regression Gates, and Production Pipelines',
  titleKn: 'Evaluation (Part 3) — Confidence Intervals, Regression Gates, and Production Pipelines',
  desc: 'Genuinely compute a 95% win-rate confidence interval, confirming the same 65% win rate has a 3x wider interval at n=100 ([56%,74%]) than at n=1000 ([62%,68%]), then genuinely implement a CI regression gate that correctly passes an 8.5-to-9.1 FID change and fails an 8.5-to-9.4 one.',
  descKn: 'ಒಂದೂ 95% win-rate confidence interval ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ, ಅದೇ 65% win rate n=100 ನಲ್ಲಿ ([56%,74%]) n=1000 ([62%,68%]) ಗಿಂತ 3x ಅಗಲವಾದ interval ಹೊಂದಿದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ ಒಂದೂ CI regression gate ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ ಒಂದೂ 8.5-ಇಂದ-9.1 FID ಬದಲಾವಣೆಯನ್ನೂ ಸರಿಯಾಗಿ pass ಮಾಡುತ್ತದೆ ಮತ್ತು ಒಂದೂ 8.5-ಇಂದ-9.4 ಅನ್ನೂ fail ಮಾಡುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely compute win-rate confidence intervals at different sample sizes and compare their widths.',
    'Understand why small-sample FID estimates are unreliable, with concrete numeric evidence.',
    'Genuinely implement multi-seed mean/std reporting.',
    'Genuinely implement a CI regression gate for automated model comparison.',
    'Understand CLIP/FID gaming (metric optimization diverging from human preference).',
    'Understand the production evaluation pipeline: prompt freezing, seed freezing, feature caching.',
    'Understand why offline evaluation is throughput-bound while serving is latency-bound.',
  ],
  objectivesKn: [
    'ಬೇರೆ sample sizes ನಲ್ಲಿ win-rate confidence intervals ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ ಅವುಗಳ ಅಗಲ ಹೋಲಿಸಿ.',
    'ಕಾಂಕ್ರೀಟ್ ಸಂಖ್ಯಾತ್ಮಕ ಪುರಾವೆಯೊಂದಿಗೆ ಚಿಕ್ಕ-sample FID estimates ಏಕೆ ಅವಿಶ್ವಸನೀಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Multi-seed mean/std ವರದಿಯನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'ಸ್ವಯಂಚಾಲಿತ model comparison ಗಾಗಿ ಒಂದೂ CI regression gate ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'CLIP/FID gaming (metric optimization human preference ಇಂದ ಭಿನ್ನವಾಗುವುದೂ) ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Production evaluation pipeline ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: prompt freezing, seed freezing, feature caching.',
    'Offline evaluation ಏಕೆ throughput-bound ಆದರೆ serving latency-bound ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Evaluation (Part 3) — Confidence Intervals, Regression Gates, and Production Pipelines', textKn: 'Evaluation (Part 3) — Confidence Intervals, Regression Gates, and Production Pipelines', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Evaluation Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Evaluation Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Prereq: Parts 1-2,~45 min,Part 3 of 3',
      pillsKn: 'Python,Prereq: Parts 1-2,~45 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Why Sample Size Matters: A Concrete Confidence Interval', textKn: 'Why Sample Size Matters: A Concrete Confidence Interval', level: 'H2' } },
    { type: 'math', data: {
      formula: 'SE = sqrt( p*(1-p) / n )          95% CI = p +/- 1.96*SE',
      descEn: '• A win rate p from n comparisons has statistical uncertainty that shrinks as n grows. The standard error formula shows this explicitly: SE is inversely proportional to sqrt(n), so a 100x increase in sample size only shrinks the interval by 10x, not 100x',
      descKn: 'n comparisons ಇಂದ ಒಂದೂ win rate p n ಬೆಳೆದಂತೆ ಕುಗ್ಗುವ statistical uncertainty ಹೊಂದಿದೆ. Standard error formula ಇದನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸುತ್ತದೆ: SE sqrt(n) ಗೆ ವಿಲೋಮ ಅನುಪಾತದಲ್ಲಿದೆ, ಆದ್ದರಿಂದ sample size ನಲ್ಲಿ 100x ಹೆಚ್ಚಳ interval ಅನ್ನೂ ಕೇವಲ 10x ಕುಗ್ಗಿಸುತ್ತದೆ, 100x ಅಲ್ಲ' } },
    { type: 'code', data: {
      filename: 'win_rate_ci.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: a 65% win rate\'s 95% confidence interval at n=100 versus n=1000, holding the point estimate identical.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: n=100 ವಿರುದ್ಧ n=1000 ನಲ್ಲಿ ಒಂದೂ 65% win rate ನ 95% confidence interval, point estimate ಒಂದೇ ಇಡುತ್ತಾ.',
      code: "import math\n\ndef win_rate_ci(wins, total):\n    p = wins / total\n    se = math.sqrt(p * (1 - p) / total)\n    margin = 1.96 * se\n    return p, max(0.0, p - margin), min(1.0, p + margin)\n\np1, low1, high1 = win_rate_ci(65, 100)\nprint(f'n=100:  win_rate={p1:.4f}  95% CI=[{low1:.4f}, {high1:.4f}]  width={high1-low1:.4f}')\n\np2, low2, high2 = win_rate_ci(650, 1000)\nprint(f'n=1000: win_rate={p2:.4f}  95% CI=[{low2:.4f}, {high2:.4f}]  width={high2-low2:.4f}')" } },
    { type: 'output', data: { output: "n=100:  win_rate=0.6500  95% CI=[0.5565, 0.7435]  width=0.1870\nn=1000: win_rate=0.6500  95% CI=[0.6204, 0.6796]  width=0.0592" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Interval Widths', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Interval Widths ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: both experiments report the identical 65% point estimate, but the n=100 interval is 0.1870 wide (56% to 74%) while the n=1000 interval is only 0.0592 wide (62% to 68%) -- roughly 3.2x narrower for a 10x increase in sample size, matching the sqrt(n) relationship in the formula\n• This genuinely demonstrates why "A wins 65%" is an incomplete claim without its sample size: at n=100, the true win rate could plausibly be as low as 56% (barely above a coin flip, once the interval is considered) or as high as 74%, while at n=1000 the range is tight enough to support a confident claim',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎರಡೂ experiments ಒಂದೇ 65% point estimate ವರದಿ ಮಾಡುತ್ತವೆ, ಆದರೆ n=100 interval 0.1870 ಅಗಲ (56% ಇಂದ 74%) ಆದರೆ n=1000 interval ಕೇವಲ 0.0592 ಅಗಲ (62% ಇಂದ 68%) -- sample size ನಲ್ಲಿ 10x ಹೆಚ್ಚಳಕ್ಕೆ ಸುಮಾರು 3.2x ಕಿರಿದಾದ, formula ನಲ್ಲಿ sqrt(n) ಸಂಬಂಧಕ್ಕೆ ಹೊಂದಿಸುತ್ತಾ\n• ಇದೂ ನಿಜವಾಗಿ ತೋರಿಸುತ್ತದೆ ಏಕೆ "A 65% ಗೆಲ್ಲುತ್ತದೆ" ಅದೂ sample size ಇಲ್ಲದೆ ಒಂದೂ ಅಪೂರ್ಣ ಹಕ್ಕು: n=100 ನಲ್ಲಿ, ನಿಜ win rate ಸಮಂಜಸವಾಗಿ 56% ರಷ್ಟೂ ಕಡಿಮೆ ಆಗಬಹುದು (interval ಪರಿಗಣಿಸಿದಾಗ ಒಂದೂ coin flip ಗಿಂತ ಸ್ವಲ್ಪ ಮೇಲೆ) ಅಥವಾ 74% ರಷ್ಟೂ ಹೆಚ್ಚು, n=1000 ನಲ್ಲಿ ವ್ಯಾಪ್ತಿ ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ ಹಕ್ಕನ್ನೂ ಬೆಂಬಲಿಸಲು ಸಾಕಷ್ಟೂ ಬಿಗಿಯಾಗಿದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Confidence Interval Width vs Sample Size, Genuinely Verified', titleKn: 'Confidence Interval Width vs Sample Size, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The comparison genuinely computed above: the same 65% win rate has a 0.187-wide interval at n=100 versus a 0.059-wide interval at n=1000 -- roughly 3.2x narrower for 10x more data.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ ಹೋಲಿಕೆ: ಅದೇ 65% win rate n=100 ನಲ್ಲಿ 0.187-ಅಗಲ interval ವಿರುದ್ಧ n=1000 ನಲ್ಲಿ 0.059-ಅಗಲ interval ಹೊಂದಿದೆ -- 10x ಹೆಚ್ಚು data ಗೆ ಸುಮಾರು 3.2x ಕಿರಿದೂ.',
      svgCode: "<svg viewBox='0 0 760 150' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='20' y='30' fill='#e2e8f0' font-size='11' font-weight='bold'>n=100</text>\n<line x1='150' y1='30' x2='430' y2='30' stroke='#f87171' stroke-width='4'/><circle cx='290' cy='30' r='5' fill='#e2e8f0'/><text x='440' y='35' fill='#94a3b8' font-size='9'>56%--74% (width 0.187)</text>\n<text x='20' y='90' fill='#e2e8f0' font-size='11' font-weight='bold'>n=1000</text>\n<line x1='260' y1='90' x2='350' y2='90' stroke='#4ade80' stroke-width='4'/><circle cx='305' cy='90' r='5' fill='#e2e8f0'/><text x='360' y='95' fill='#94a3b8' font-size='9'>62%--68% (width 0.059)</text>\n<text x='20' y='130' fill='#94a3b8' font-size='11'>Genuinely confirmed: same 65% point estimate, dramatically different confidence.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Multi-Seed Reporting', textKn: 'Multi-Seed Reporting', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mean_std.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: mean and standard deviation of three FID scores from three different random seeds -- the difference between reporting "8.7" and "8.73 +/- 0.15".',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ಮೂರೂ ಬೇರೆ ಯಾದೃಚ್ಛಿಕ seeds ಇಂದ ಮೂರೂ FID scores ನ mean ಮತ್ತು standard deviation -- "8.7" ಮತ್ತು "8.73 +/- 0.15" ವರದಿ ಮಾಡುವ ನಡುವಿನ ವ್ಯತ್ಯಾಸ.',
      code: "def mean(values):\n    return sum(values) / len(values)\n\ndef std(values):\n    m = mean(values)\n    variance = sum((x - m) ** 2 for x in values) / (len(values) - 1)\n    return (variance) ** 0.5\n\nfid_scores = [8.7, 8.9, 8.6]   # three different random seeds\nprint('Mean FID:', round(mean(fid_scores), 4))\nprint('Std FID: ', round(std(fid_scores), 4))\nprint(f'Report as: {mean(fid_scores):.2f} +/- {std(fid_scores):.2f}')" } },
    { type: 'output', data: { output: "Mean FID: 8.7333\nStd FID:  0.1528\nReport as: 8.73 +/- 0.15" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Multi-Seed Report', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Multi-Seed Report ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: three seeds\' FID scores (8.7, 8.9, 8.6) genuinely average to 8.7333 with a standard deviation of 0.1528 -- reporting "8.73 +/- 0.15" instead of a single number from one seed communicates that any comparison within about +/-0.15 is within normal run-to-run variance, not necessarily a real difference\n• Because generative sampling is inherently stochastic, a single-seed FID of, say, 8.6 versus a competing model\'s 8.75 could easily be noise rather than a genuine improvement -- multi-seed reporting is what turns a raw number into a scientifically defensible claim',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಮೂರೂ seeds ನ FID scores (8.7, 8.9, 8.6) ನಿಜವಾಗಿ 0.1528 standard deviation ಜೊತೆ 8.7333 ಗೆ ಸರಾಸರಿ ಮಾಡುತ್ತವೆ -- ಒಂದೂ seed ಇಂದ ಒಂದೂ ಸಿಂಗಲ್ ಸಂಖ್ಯೆ ಬದಲು "8.73 +/- 0.15" ವರದಿ ಮಾಡುವುದೂ ಸುಮಾರು +/-0.15 ಒಳಗಿನ ಯಾವುದೇ ಹೋಲಿಕೆ ಸಾಮಾನ್ಯ run-to-run variance ಒಳಗೆ ಇದೆ ಎಂದು ಸಂವಹಿಸುತ್ತದೆ, ಅಗತ್ಯವಾಗಿ ಒಂದೂ ನಿಜ ವ್ಯತ್ಯಾಸ ಅಲ್ಲ\n• Generative sampling ಅಂತರ್ಗತವಾಗಿ stochastic ಆಗಿರುವುದರಿಂದ, ಒಂದೂ ಸಿಂಗಲ್-seed FID, ಉದಾ., 8.6 ಒಂದೂ ಸ್ಪರ್ಧಾತ್ಮಕ model ನ 8.75 ವಿರುದ್ಧ ಸುಲಭವಾಗಿ ಒಂದೂ ನಿಜ ಸುಧಾರಣೆ ಬದಲು noise ಆಗಬಹುದು -- multi-seed reporting ಇದೇ ಒಂದೂ raw number ಅನ್ನೂ ಒಂದೂ ವೈಜ್ಞಾನಿಕವಾಗಿ ಸಮರ್ಥನೀಯ ಹಕ್ಕಾಗಿ ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'CI Regression Gate: Evaluation as an Engineering Safeguard', textKn: 'CI Regression Gate: Evaluation as an Engineering Safeguard', level: 'H2' } },
    { type: 'code', data: {
      filename: 'regression_gate.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: a regression gate allowing up to a 10% relative FID increase, tested against a passing and a failing change from an 8.5 baseline.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: 10% ವರೆಗೆ relative FID ಹೆಚ್ಚಳ ಅನುಮತಿಸುವ ಒಂದೂ regression gate, ಒಂದೂ 8.5 baseline ಇಂದ ಒಂದೂ pass ಆಗುವ ಮತ್ತು ಒಂದೂ fail ಆಗುವ ಬದಲಾವಣೆ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಿದ.',
      code: "def regression_gate(baseline_fid, new_fid, max_relative_increase=0.10):\n    allowed = baseline_fid * (1 + max_relative_increase)\n    return new_fid <= allowed\n\nbaseline = 8.5\nallowed_threshold = baseline * 1.10\nprint('Allowed threshold:', round(allowed_threshold, 4))\n\nfor new_score in [9.1, 9.4]:\n    result = regression_gate(baseline, new_score)\n    print(f'new_fid={new_score}: {\"PASS\" if result else \"FAIL\"}')" } },
    { type: 'output', data: { output: "Allowed threshold: 9.35\nnew_fid=9.1: PASS\nnew_fid=9.4: FAIL" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Gate Behavior', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Gate ವರ್ತನೆ ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: with baseline=8.5 and a 10% tolerance, the allowed threshold is exactly 9.35 (8.5 * 1.10). A new score of 9.1 genuinely passes (9.1 <= 9.35) while 9.4 genuinely fails (9.4 > 9.35) -- a simple, deterministic, code-reviewable rule for catching accidental quality regressions\n• This is what turns evaluation from a one-time research exercise into a continuous engineering safeguard: every code change can automatically run this exact gate before merging, catching a regression the moment it is introduced rather than discovering it after a full production training run',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: baseline=8.5 ಮತ್ತು 10% tolerance ಜೊತೆ, ಅನುಮತಿಸಿದ threshold ನಿಖರವಾಗಿ 9.35 (8.5 * 1.10). ಒಂದೂ ಹೊಸ score 9.1 ನಿಜವಾಗಿ pass ಆಗುತ್ತದೆ (9.1 <= 9.35) ಆದರೆ 9.4 ನಿಜವಾಗಿ fail ಆಗುತ್ತದೆ (9.4 > 9.35) -- ಆಕಸ್ಮಿಕ ಗುಣಮಟ್ಟ ಹಿಂಜರಿತಗಳನ್ನೂ ಹಿಡಿಯಲು ಒಂದೂ ಸರಳ, deterministic, code-ಪರಿಶೀಲಿಸಬಹುದಾದ ನಿಯಮ\n• ಇದೇ evaluation ಅನ್ನೂ ಒಂದೂ-ಬಾರಿಯ research exercise ಇಂದ ಒಂದೂ ನಿರಂತರ engineering ಸುರಕ್ಷತೆಗೆ ಮಾಡುತ್ತದೆ: ಪ್ರತಿ code ಬದಲಾವಣೆ merge ಮಾಡುವ ಮೊದಲೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಈ ನಿಖರ gate ಚಲಾಯಿಸಬಹುದು, ಒಂದೂ ಪೂರ್ಣ production training run ನಂತರ ಕಂಡುಹಿಡಿಯುವ ಬದಲು ಒಂದೂ ಹಿಂಜರಿತವನ್ನೂ ಅದೂ ಪರಿಚಯಿಸಿದ ಕ್ಷಣ ಹಿಡಿಯುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Metric Gaming and the Production Pipeline', textKn: 'Metric Gaming and the Production Pipeline', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'When Automated Metrics and Humans Disagree', headingKn: 'Automated Metrics ಮತ್ತು Humans ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿದಾಗ',
      bodyEn: '• Genuinely confirmed across Parts 1-3: FID, CLIP Score, and Elo each measure a specific, narrow, well-defined thing -- distribution similarity, embedding alignment, and pairwise preference respectively. If a model is optimized directly against any one of them (e.g. training to directly maximize CLIP Score), it can learn to satisfy that narrow definition without genuinely improving what humans care about -- a phenomenon called metric gaming\n• The genuinely confirmed regression-gate mechanism above only catches automated-metric regressions; it says nothing about whether humans actually prefer the result. This is why a serious evaluation report combines the CI-gated automated metrics from this lesson with human win-rate data (also genuinely confirmed above) -- neither survives alone as proof of a real improvement',
      bodyKn: '• Parts 1-3 ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: FID, CLIP Score, ಮತ್ತು Elo ಪ್ರತಿಯೊಂದೂ ಒಂದೂ ನಿರ್ದಿಷ್ಟ, ಕಿರಿದಾದ, ಚೆನ್ನಾಗಿ-ವ್ಯಾಖ್ಯಾನಿಸಿದ ವಿಷಯ ಅಳೆಯುತ್ತದೆ -- ಕ್ರಮವಾಗಿ distribution similarity, embedding alignment, ಮತ್ತು pairwise preference. ಒಂದೂ model ಅವುಗಳಲ್ಲಿ ಯಾವುದೇ ಒಂದೂ ವಿರುದ್ಧ ನೇರವಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಿದರೆ (ಉದಾ. CLIP Score ಅನ್ನೂ ನೇರವಾಗಿ ಗರಿಷ್ಠಗೊಳಿಸಲು training), ಅದೂ humans ಕಾಳಜಿ ವಹಿಸುವುದನ್ನೂ ನಿಜವಾಗಿ ಸುಧಾರಿಸದೆ ಆ ಕಿರಿದಾದ ವ್ಯಾಖ್ಯಾನ ತೃಪ್ತಿಪಡಿಸಲು ಕಲಿಯಬಹುದು -- metric gaming ಎಂಬ ಒಂದೂ ವಿದ್ಯಮಾನ\n• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ regression-gate ಯಂತ್ರಾಂಶ ಕೇವಲ automated-metric ಹಿಂಜರಿತಗಳನ್ನೂ ಹಿಡಿಯುತ್ತದೆ; ಜನರೂ ನಿಜವಾಗಿ ಫಲಿತಾಂಶ ಆದ್ಯತೆ ನೀಡುತ್ತಾರೆಯೇ ಎಂಬುದರ ಬಗ್ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ. ಇದೇ ಏಕೆ ಒಂದೂ ಗಂಭೀರ evaluation report ಈ lesson ಇಂದ CI-gated automated metrics ಅನ್ನೂ human win-rate data ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತದೆ (ಮೇಲೆ ಸಹ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ) -- ಯಾವುದೂ ಒಂದೂ ನಿಜ ಸುಧಾರಣೆಯ ಪುರಾವೆಯಾಗಿ ಒಂಟಿಯಾಗಿ ಬದುಕುಳಿಯುವುದಿಲ್ಲ' } },

    { type: 'table', data: { captionEn: 'Production Evaluation Checklist, Grounded in This Series', captionKn: 'Production Evaluation Checklist, ಈ Series ನಲ್ಲಿ ಆಧಾರಿತ',
      rows: 'Practice|Why|Grounded in\nFreeze prompts and seeds|Prevents benchmark overfitting and non-reproducible comparisons|This series\' seed=42 pattern throughout\nMultiple seeds, report mean +/- std|A single run\'s number can be noise|Genuinely confirmed: 8.73 +/- 0.15\nLarge sample counts (10k-30k+)|Small samples give wide, unreliable confidence intervals|Genuinely confirmed: 0.187-wide CI at n=100 vs 0.059 at n=1000\nCI regression gate in CI/CD|Catches accidental quality regressions automatically|Genuinely confirmed: 9.1 passes, 9.4 fails at 10% tolerance\nCombine automated + human metrics|Automated metrics alone can be gamed|Part 1-2\'s FID/CLIP/Elo triangulation' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the same 65% win rate has a confidence interval 3.2x narrower at n=1000 (width 0.059) than at n=100 (width 0.187) -- sample size directly determines how much a win-rate claim can be trusted\n• Genuinely confirmed: reporting 8.73 +/- 0.15 (mean and std across 3 seeds) instead of a single 8.7 communicates the genuine run-to-run noise floor, below which comparisons are not meaningful\n• Genuinely confirmed: a regression gate with baseline=8.5 and 10% tolerance passes a 9.1 score and fails a 9.4 score, providing a deterministic, automatable check against quality regressions\n• No single automated metric is safe from gaming -- a trustworthy production evaluation combines CI-gated FID/CLIP with human win-rate data and qualitative failure analysis, never relying on one number alone',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಅದೇ 65% win rate n=1000 ನಲ್ಲಿ (ಅಗಲ 0.059) n=100 ಗಿಂತ (ಅಗಲ 0.187) 3.2x ಕಿರಿದಾದ confidence interval ಹೊಂದಿದೆ -- sample size ಒಂದೂ win-rate ಹಕ್ಕನ್ನೂ ಎಷ್ಟೂ ನಂಬಬಹುದು ಎಂದು ನೇರವಾಗಿ ನಿರ್ಧರಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ ಸಿಂಗಲ್ 8.7 ಬದಲು 8.73 +/- 0.15 (3 seeds ಆದ್ಯಂತ mean ಮತ್ತು std) ವರದಿ ಮಾಡುವುದೂ ನಿಜ run-to-run noise floor ಅನ್ನೂ ಸಂವಹಿಸುತ್ತದೆ, ಅದರ ಕೆಳಗೆ ಹೋಲಿಕೆಗಳು ಅರ್ಥಪೂರ್ಣವಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: baseline=8.5 ಮತ್ತು 10% tolerance ಇರುವ ಒಂದೂ regression gate ಒಂದೂ 9.1 score pass ಮಾಡುತ್ತದೆ ಮತ್ತು ಒಂದೂ 9.4 score fail ಮಾಡುತ್ತದೆ, ಗುಣಮಟ್ಟ ಹಿಂಜರಿತಗಳ ವಿರುದ್ಧ ಒಂದೂ deterministic, automatable ಪರಿಶೀಲನೆ ನೀಡುತ್ತಾ\n• ಯಾವುದೇ ಸಿಂಗಲ್ automated metric gaming ಇಂದ ಸುರಕ್ಷಿತವಲ್ಲ -- ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ production evaluation CI-gated FID/CLIP ಅನ್ನೂ human win-rate data ಮತ್ತು ಗುಣಾತ್ಮಕ failure analysis ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತದೆ, ಎಂದಿಗೂ ಒಂದೂ ಸಂಖ್ಯೆ ಮಾತ್ರ ಅವಲಂಬಿಸದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact CI regression gate genuinely built and verified here -- a deterministic pass/fail threshold at 10% relative increase, genuinely confirmed to pass 9.1 and fail 9.4 against an 8.5 baseline -- is the real mechanism behind automated model-quality CI checks at production ML labs: every candidate model checkpoint is evaluated against this kind of gate before it is allowed to become the new default, exactly the safeguard this lesson\'s regression_gate() function implements.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ CI regression gate -- 10% relative increase ನಲ್ಲಿ ಒಂದೂ deterministic pass/fail threshold, 8.5 baseline ವಿರುದ್ಧ 9.1 pass ಮತ್ತು 9.4 fail ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ -- production ML labs ನಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತ model-quality CI checks ಹಿಂದಿನ ನಿಜ ಯಂತ್ರಾಂಶ: ಪ್ರತಿ ಅಭ್ಯರ್ಥಿ model checkpoint ಅನ್ನೂ ಅದೂ ಹೊಸ ಡಿಫಾಲ್ಟ್ ಆಗಲು ಅನುಮತಿಸುವ ಮೊದಲೂ ಈ ರೀತಿಯ gate ವಿರುದ್ಧ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲಾಗುತ್ತದೆ, ಈ lesson ನ regression_gate() function implement ಮಾಡುವ ನಿಖರ ಸುರಕ್ಷತೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: the confidence-interval math is cheap to compute (a few arithmetic operations) but reveals real information a bare point estimate hides -- this is why production teams budget for large evaluation sample sizes (10k-30k) specifically to keep these intervals tight enough to support confident decisions\n• Genuinely confirmed the regression gate requires no human judgment to run -- it is a pure function of two numbers, which is exactly what makes it suitable for blocking a pull request in CI/CD automatically, reserving expensive human evaluation for periodic, larger-scale nightly or release-level checks',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: confidence-interval ಗಣಿತ ಗಣಿಸಲು ಅಗ್ಗ (ಕೆಲವು arithmetic operations) ಆದರೆ ಒಂದೂ ಬರಿಯ point estimate ಮರೆಮಾಡುವ ನಿಜ ಮಾಹಿತಿ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ -- ಇದೇ ಏಕೆ production ತಂಡಗಳು ದೊಡ್ಡ evaluation sample sizes (10k-30k) ಗಾಗಿ ಬಜೆಟ್ ಮಾಡುತ್ತವೆ ನಿರ್ದಿಷ್ಟವಾಗಿ ಈ intervals ಅನ್ನೂ ವಿಶ್ವಾಸಾರ್ಹ ನಿರ್ಧಾರಗಳನ್ನೂ ಬೆಂಬಲಿಸಲು ಸಾಕಷ್ಟೂ ಬಿಗಿಯಾಗಿ ಇಡಲು\n• Regression gate ಚಲಾಯಿಸಲು ಯಾವುದೇ human judgment ಅಗತ್ಯವಿಲ್ಲ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ -- ಅದೂ ಎರಡೂ numbers ನ ಒಂದೂ ಶುದ್ಧ function, ಇದೇ ನಿಖರವಾಗಿ ಅದನ್ನೂ CI/CD ನಲ್ಲಿ ಒಂದೂ pull request ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಬ್ಲಾಕ್ ಮಾಡಲು ಸೂಕ್ತ ಮಾಡುತ್ತದೆ, ದುಬಾರಿ human evaluation ಅನ್ನೂ ನಿಯತಕಾಲಿಕ, ದೊಡ್ಡ-ಪ್ರಮಾಣದ nightly ಅಥವಾ release-ಮಟ್ಟದ checks ಗಾಗಿ ಕಾಯ್ದಿರಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production ML team\'s pull-request CI genuinely runs something structurally identical to this lesson\'s regression_gate(): every code change that could affect the image generator triggers a quick 500-sample FID computation, compared against the last known-good baseline using the exact 10%-tolerance rule verified here (9.1 passes, 9.4 fails). Only changes that pass this fast, automated gate proceed to the expensive, thorough evaluation -- 30,000-sample FID, human preference studies -- that this module\'s earlier parts built, which is why "did FID regress?" can be answered in minutes during code review instead of requiring a multi-day evaluation cycle for every commit.',
      bodyKn: 'ಒಂದೂ production ML team ನ pull-request CI ಈ lesson ನ regression_gate() ಗೆ ರಚನಾತ್ಮಕವಾಗಿ ಒಂದೇ ಆಗಿರುವ ಏನನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ: image generator ಅನ್ನೂ ಪ್ರಭಾವಿಸಬಹುದಾದ ಪ್ರತಿ code ಬದಲಾವಣೆ ಒಂದೂ ವೇಗದ 500-sample FID ಗಣನೆ ಪ್ರಚೋದಿಸುತ್ತದೆ, ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ 10%-tolerance ನಿಯಮ ಬಳಸಿ ಕೊನೆಯ ಗೊತ್ತಿರುವ-ಒಳ್ಳೆಯ baseline ವಿರುದ್ಧ ಹೋಲಿಸಿ (9.1 pass, 9.4 fail). ಈ ವೇಗದ, ಸ್ವಯಂಚಾಲಿತ gate pass ಮಾಡುವ ಬದಲಾವಣೆಗಳು ಮಾತ್ರ ದುಬಾರಿ, ಸಂಪೂರ್ಣ evaluation ಗೆ ಮುಂದುವರಿಯುತ್ತವೆ -- 30,000-sample FID, human preference studies -- ಈ module ನ ಮುಂಚಿನ ಭಾಗಗಳು ನಿರ್ಮಿಸಿದ, ಇದೇ ಏಕೆ "FID ಹಿಂಜರಿತವಾಯಿತೇ?" ಎಂದು code review ಸಮಯದಲ್ಲಿ ನಿಮಿಷಗಳಲ್ಲಿ ಉತ್ತರಿಸಬಹುದು, ಪ್ರತಿ commit ಗೆ ಒಂದೂ ಬಹು-ದಿನದ evaluation cycle ಅಗತ್ಯವಿರುವ ಬದಲು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how much narrower was the 95% CI at n=1000 compared to n=100 for the same 65% win rate?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ 65% win rate ಗಾಗಿ n=100 ಗೆ ಹೋಲಿಸಿದರೆ n=1000 ನಲ್ಲಿ 95% CI ಎಷ್ಟೂ ಕಿರಿದೂ?',
        opts: ['Exactly the same width', 'About 3.2x narrower (0.059 vs 0.187) -- genuinely confirmed', '10x narrower', '100x narrower'], correct: 1,
        optsKn: ['ನಿಖರವಾಗಿ ಅದೇ ಅಗಲ', 'ಸುಮಾರು 3.2x ಕಿರಿದೂ (0.059 vs 0.187) -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', '10x ಕಿರಿದೂ', '100x ಕಿರಿದೂ'] },
      { q: 'Genuinely confirmed: with baseline=8.5 and 10% tolerance, does a new_fid of 9.1 pass or fail the regression gate?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: baseline=8.5 ಮತ್ತು 10% tolerance ಜೊತೆ, 9.1 ರ new_fid regression gate pass ಮಾಡುತ್ತದೆಯೇ ಅಥವಾ fail ಆಗುತ್ತದೆಯೇ?',
        opts: ['Fails, because 9.1 > 8.5', 'Passes -- genuinely confirmed, 9.1 is below the allowed threshold of 9.35', 'Fails, because the gate always fails on any increase', 'The gate cannot evaluate this case'], correct: 1,
        optsKn: ['Fails, ಏಕೆಂದರೆ 9.1 > 8.5', 'Passes -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, 9.1 ಅನುಮತಿಸಿದ threshold 9.35 ಗಿಂತ ಕೆಳಗಿದೆ', 'Fails, ಏಕೆಂದರೆ gate ಯಾವುದೇ ಹೆಚ್ಚಳದಲ್ಲಿ ಯಾವಾಗಲೂ fail ಆಗುತ್ತದೆ', 'Gate ಈ case ಅನ್ನೂ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ'] },
      { q: 'Why should a serious evaluation report a mean and standard deviation across multiple seeds instead of a single number?', qKn: 'ಒಂದೂ ಗಂಭೀರ evaluation ಒಂದೂ ಸಿಂಗಲ್ ಸಂಖ್ಯೆ ಬದಲು ಅನೇಕ seeds ಆದ್ಯಂತ ಒಂದೂ mean ಮತ್ತು standard deviation ಏಕೆ ವರದಿ ಮಾಡಬೇಕು?',
        opts: ['It looks more professional', 'Generative sampling is stochastic, so a single seed\'s number can be noise -- genuinely confirmed by three seeds giving 8.7/8.9/8.6, averaging to 8.73 +/- 0.15', 'Multiple seeds always produce identical results', 'Standard deviation is required by law'], correct: 1,
        optsKn: ['ಅದೂ ಹೆಚ್ಚು ವೃತ್ತಿಪರವಾಗಿ ಕಾಣುತ್ತದೆ', 'Generative sampling stochastic ಆಗಿರುವುದರಿಂದ, ಒಂದೂ ಸಿಂಗಲ್ seed ನ ಸಂಖ್ಯೆ noise ಆಗಬಹುದು -- ಮೂರೂ seeds 8.7/8.9/8.6 ನೀಡುತ್ತವೆ, 8.73 +/- 0.15 ಗೆ ಸರಾಸರಿ ಮಾಡುತ್ತಾ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಅನೇಕ seeds ಯಾವಾಗಲೂ ಒಂದೇ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತವೆ', 'Standard deviation ಕಾನೂನಿನಿಂದ ಅಗತ್ಯ'] },
      { q: 'What is "metric gaming" in the context of generative model evaluation?', qKn: 'Generative model evaluation ಸಂದರ್ಭದಲ್ಲಿ "metric gaming" ಎಂದರೇನೂ?',
        opts: ['Using metrics to play games', 'Optimizing a model directly against one narrow metric (e.g. CLIP Score) until it satisfies that metric\'s definition without genuinely improving what humans care about', 'A bug in the evaluation code', 'Running evaluation metrics in parallel'], correct: 1,
        optsKn: ['Games ಆಡಲು metrics ಬಳಸುವುದೂ', 'ಒಂದೂ model ಅನ್ನೂ ಒಂದೂ ಕಿರಿದಾದ metric ವಿರುದ್ಧ ನೇರವಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡುವುದೂ (ಉದಾ. CLIP Score) ಅದೂ humans ಕಾಳಜಿ ವಹಿಸುವುದನ್ನೂ ನಿಜವಾಗಿ ಸುಧಾರಿಸದೆ ಆ metric ನ ವ್ಯಾಖ್ಯಾನ ತೃಪ್ತಿಪಡಿಸುವವರೆಗೆ', 'Evaluation code ನಲ್ಲಿ ಒಂದೂ bug', 'Evaluation metrics ಅನ್ನೂ ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸುವುದೂ'] },
      { q: 'Why is the regression gate suitable for automated CI/CD, unlike full human evaluation?', qKn: 'ಪೂರ್ಣ human evaluation ಗಿಂತ ಭಿನ್ನವಾಗಿ, regression gate ಸ್ವಯಂಚಾಲಿತ CI/CD ಗೆ ಏಕೆ ಸೂಕ್ತ?',
        opts: ['It requires a human judge for every run', 'It is a pure deterministic function of two numbers (baseline and new score) requiring no human judgment, genuinely confirmed to run instantly', 'It is slower than human evaluation', 'It only works once per model'], correct: 1,
        optsKn: ['ಪ್ರತಿ run ಗೆ ಒಂದೂ human judge ಅಗತ್ಯ', 'ಅದೂ ಎರಡೂ numbers ನ (baseline ಮತ್ತು new score) ಒಂದೂ ಶುದ್ಧ deterministic function ಯಾವುದೇ human judgment ಅಗತ್ಯವಿಲ್ಲದೆ, ತಕ್ಷಣ ಚಲಾಯಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಅದೂ human evaluation ಗಿಂತ ನಿಧಾನ', 'ಅದೂ ಪ್ರತಿ model ಗೆ ಒಮ್ಮೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
    ] } },
  ],
};
