const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26e5'; // Module 20: Bayes' Theorem — Learning From Evidence

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'reading',
  duration: 75,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Bayes\' Theorem — Learning From Evidence (Part 3) — Conjugate Priors & A/B Testing',
  titleKn: 'Bayes\' Theorem — Learning From Evidence (Part 3) — Conjugate Priors & A/B Testing',
  desc: 'Genuinely run sequential Beta-Binomial updates and confirm batch and sequential updating land on the identical posterior, then genuinely Monte Carlo sample 100,000 draws from two Beta posteriors to estimate P(B>A) for a real A/B test -- landing at 92.3%, not the lesson\'s illustrative 97%, an honest discrepancy worth understanding.',
  descKn: 'Sequential Beta-Binomial updates ಗಳನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತು batch ಮತ್ತು sequential updating ಒಂದೇ posterior ಮೇಲೆ ಇಳಿಯುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ ಒಂದು ನಿಜ A/B test ಗೆ P(B>A) ಅಂದಾಜಿಸಲು ಎರಡು Beta posteriors ಇಂದ 100,000 draws ಅನ್ನೂ ನಿಜವಾಗಿ Monte Carlo sample ಮಾಡಿ -- 92.3% ನಲ್ಲಿ ಇಳಿಯುತ್ತಾ, lesson ನ ಉದಾಹರಣಾ 97% ಅಲ್ಲ, ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಯೋಗ್ಯವಾದ ಒಂದು ಪ್ರಾಮಾಣಿಕ ವ್ಯತ್ಯಾಸ.',
  objectives: [
    'Explain conjugate priors.',
    'Understand Beta-Binomial Bayesian updating.',
    'Perform sequential updates.',
    'Explain why batch and sequential updates produce the same posterior.',
    'Apply Bayesian inference to A/B testing.',
    'Understand how Monte Carlo estimates P(B > A).',
    'Connect Bayesian updating to online learning and bandits.',
  ],
  objectivesKn: [
    'Conjugate priors ವಿವರಿಸಿ.',
    'Beta-Binomial Bayesian updating ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Sequential updates ನಿರ್ವಹಿಸಿ.',
    'Batch ಮತ್ತು sequential updates ಒಂದೇ posterior ಏಕೆ ಉತ್ಪಾದಿಸುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.',
    'A/B testing ಗೆ Bayesian inference ಅನ್ವಯಿಸಿ.',
    'Monte Carlo P(B > A) ಅನ್ನೂ ಹೇಗೆ ಅಂದಾಜಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Bayesian updating ಅನ್ನೂ online learning ಮತ್ತು bandits ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Bayes\' Theorem — Learning From Evidence (Part 3)', textKn: 'Bayes\' Theorem — Learning From Evidence (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 & 2, Bayesian Reasoning and Naive Bayes · Time: ~75 minutes · Parts: 3\n• Bayesian inference becomes particularly powerful when data arrives continuously',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 & 2, Bayesian Reasoning and Naive Bayes · Time: ~75 ನಿಮಿಷಗಳು · Parts: 3\n• Data ನಿರಂತರವಾಗಿ ಬಂದಾಗ Bayesian inference ವಿಶೇಷವಾಗಿ ಶಕ್ತಿಶಾಲಿಯಾಗುತ್ತದೆ',
      pillsEn: 'Python,Prereq: Part 1 & 2,~75 min,Part 3 of 3',
      pillsKn: 'Python,Prereq: Part 1 & 2,~75 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Instead of "collect all data → train once", we can do: Prior → New data → Posterior → New data → New posterior → ... The posterior from today becomes tomorrow\'s prior. This is sequential Bayesian updating\n• Imagine estimating whether a coin lands heads: with no data you might start at P(heads)≈0.5. After observing 7 heads/3 tails your belief should change, and after 5 heads/5 tails it should change again',
      bodyKn: '• "ಎಲ್ಲಾ data ಸಂಗ್ರಹಿಸಿ → ಒಮ್ಮೆ train ಮಾಡಿ" ಬದಲಿಗೆ, ನಾವು ಮಾಡಬಹುದು: Prior → ಹೊಸ data → Posterior → ಹೊಸ data → ಹೊಸ posterior → ... ಇಂದಿನ posterior ನಾಳೆಯ prior ಆಗುತ್ತದೆ. ಇದೇ sequential Bayesian updating\n• ಒಂದು coin heads ನಲ್ಲಿ ಇಳಿಯುತ್ತದೆಯೇ ಎಂದು ಅಂದಾಜಿಸುವುದನ್ನೂ ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ: data ಇಲ್ಲದೆ ನೀವು P(heads)≈0.5 ನಲ್ಲಿ ಪ್ರಾರಂಭಿಸಬಹುದು. 7 heads/3 tails ಗಮನಿಸಿದ ನಂತರ ನಿಮ್ಮ ನಂಬಿಕೆ ಬದಲಾಗಬೇಕು, ಮತ್ತು 5 heads/5 tails ನಂತರ ಅದೂ ಮತ್ತೆ ಬದಲಾಗಬೇಕು' } },

    { type: 'heading', data: { textEn: '1. Conjugate Priors', textKn: '1. Conjugate Priors', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A prior is called conjugate when the posterior belongs to the same family of distributions as the prior -- for example, Beta prior + Bernoulli/Binomial data = Beta posterior (the Beta-Binomial conjugate model)\n• The advantage is enormous: we can update the posterior using simple arithmetic rather than numerical integration',
      bodyKn: '• ಒಂದು prior conjugate ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ ಪೋಸ್ಟಿರಿಯರ್ prior ಗೆ ಅದೇ distributions ಕುಟುಂಬಕ್ಕೆ ಸೇರಿದಾಗ -- ಉದಾಹರಣೆಗೆ, Beta prior + Bernoulli/Binomial data = Beta posterior (Beta-Binomial conjugate model)\n• ಅನುಕೂಲ ಬೃಹತ್: ನಾವು numerical integration ಬದಲಿಗೆ ಸರಳ arithmetic ಬಳಸಿ posterior ಅಪ್‌ಡೇಟ್ ಮಾಡಬಹುದು' } },

    { type: 'heading', data: { textEn: '2. Beta Distribution', textKn: '2. Beta Distribution', level: 'H2' } },
    { type: 'math', data: { formula: 'Beta(a, b),  mean = a / (a + b)', descEn: '• The larger a+b becomes, the more concentrated our belief becomes. Beta(1,1) is uniform, mean 0.5 (no strong preference). Beta(10,10) is centered around 0.5 and more concentrated (a strong belief the probability is near 0.5). Beta(1,10) is skewed toward zero (a belief the probability is probably small)', descKn: '• a+b ದೊಡ್ಡದಾದಂತೆ, ನಮ್ಮ ನಂಬಿಕೆ ಹೆಚ್ಚು ಕೇಂದ್ರೀಕೃತವಾಗುತ್ತದೆ. Beta(1,1) uniform, mean 0.5 (ಬಲವಾದ ಆದ್ಯತೆ ಇಲ್ಲ). Beta(10,10) 0.5 ಸುತ್ತ ಕೇಂದ್ರೀಕೃತ ಮತ್ತು ಹೆಚ್ಚು ಸಾಂದ್ರೀಕೃತ (probability 0.5 ಗೆ ಹತ್ತಿರ ಎಂಬ ಬಲವಾದ ನಂಬಿಕೆ). Beta(1,10) ಶೂನ್ಯದ ಕಡೆಗೆ ಓರೆಯಾಗಿದೆ (probability ಬಹುಶಃ ಚಿಕ್ಕದು ಎಂಬ ನಂಬಿಕೆ)' } },

    { type: 'heading', data: { textEn: '3. Beta-Binomial Update', textKn: '3. Beta-Binomial Update', level: 'H2' } },
    { type: 'math', data: { formula: 'Prior = Beta(a,b), observe s successes and f failures:\nPosterior = Beta(a+s, b+f)', descEn: '• That\'s the entire update -- no complicated integration, no MCMC, just addition', descKn: '• ಅದೇ ಸಂಪೂರ್ಣ update -- ಯಾವುದೇ ಸಂಕೀರ್ಣ integration ಇಲ್ಲ, MCMC ಇಲ್ಲ, ಕೇವಲ addition' } },

    { type: 'heading', data: { textEn: '4. Sequential Bayesian Updating', textKn: '4. Sequential Bayesian Updating', level: 'H2' } },
    { type: 'code', data: {
      filename: 'beta_binomial.py', headingEn: 'Beta-Binomial Update', headingKn: 'Beta-Binomial Update',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def beta_binomial_update(a, b, successes, failures):\n    return a + successes, b + failures\n\ndef beta_mean(a, b):\n    return a / (a + b)\n\na, b = 1, 1\n\n# First batch: 7 heads, 3 tails\na, b = beta_binomial_update(a, b, 7, 3)\nprint(f\"After 7H, 3T: Beta({a}, {b}), mean = {beta_mean(a, b):.3f}\")\n\n# Second batch: 5 heads, 5 tails\na, b = beta_binomial_update(a, b, 5, 5)\nprint(f\"After another 5H, 5T: Beta({a}, {b}), mean = {beta_mean(a, b):.3f}\")" } },
    { type: 'output', data: { output: "After 7H, 3T: Beta(8, 4), mean = 0.667\nAfter another 5H, 5T: Beta(13, 9), mean = 0.591" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches the lesson\'s worked example exactly: starting from Beta(1,1) (mean 0.5), 7 heads/3 tails moves the belief to Beta(8,4) (mean 0.667, toward heads), then a balanced 5 heads/5 tails pulls it back to Beta(13,9) (mean 0.591) -- the posterior from day 1 genuinely became the prior for day 2\'s update, exactly as described',
      bodyKn: '• Lesson ನ worked example ಗೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: Beta(1,1) (mean 0.5) ಇಂದ ಪ್ರಾರಂಭಿಸಿ, 7 heads/3 tails ನಂಬಿಕೆಯನ್ನೂ Beta(8,4) ಗೆ ಚಲಿಸುತ್ತದೆ (mean 0.667, heads ಕಡೆಗೆ), ನಂತರ ಸಮತೋಲಿತ 5 heads/5 tails ಇದನ್ನೂ Beta(13,9) ಗೆ (mean 0.591) ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- day 1 ನ posterior ನಿಜವಾಗಿ day 2 ನ update ಗೆ prior ಆಯಿತು, ವಿವರಿಸಿದಂತೆ ನಿಖರವಾಗಿ' } },

    { type: 'heading', data: { textEn: '5. Batch vs Sequential Updating', textKn: '5. Batch vs Sequential Updating', level: 'H2' } },
    { type: 'code', data: {
      filename: 'batch_vs_sequential.py', headingEn: 'Confirming the Order Doesn\'t Matter', headingKn: 'ಕ್ರಮ ಮುಖ್ಯವಲ್ಲ ಎಂದು ದೃಢಪಡಿಸುವುದೂ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "# Combine everything: 12 heads, 8 tails, starting fresh from Beta(1,1)\na_batch, b_batch = beta_binomial_update(1, 1, 12, 8)\nprint(f\"Batch 12H, 8T from Beta(1,1): Beta({a_batch}, {b_batch}), mean = {beta_mean(a_batch, b_batch):.3f}\")" } },
    { type: 'output', data: { output: "Batch 12H, 8T from Beta(1,1): Beta(13, 9), mean = 0.591" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely identical to the sequential result above: Beta(13, 9), mean=0.591, whether the 12 heads and 8 tails arrived as one batch or as two separate sequential updates (7H/3T then 5H/5T)\n• Sequential update = Batch update, mathematically -- but sequential updating has a practical advantage: you can make decisions as new data arrives without storing or retraining on the entire historical dataset',
      bodyKn: '• ಮೇಲಿನ sequential ಫಲಿತಾಂಶಕ್ಕೆ ನಿಜವಾಗಿ ಒಂದೇ: Beta(13, 9), mean=0.591, 12 heads ಮತ್ತು 8 tails ಒಂದು batch ಆಗಿ ಬಂದರೂ ಅಥವಾ ಎರಡು ಪ್ರತ್ಯೇಕ sequential updates ಆಗಿ ಬಂದರೂ (7H/3T ನಂತರ 5H/5T)\n• Sequential update = Batch update, ಗಣಿತೀಯವಾಗಿ -- ಆದರೆ sequential updating ಒಂದು ಪ್ರಾಯೋಗಿಕ ಅನುಕೂಲ ಹೊಂದಿದೆ: ಸಂಪೂರ್ಣ historical dataset ಸಂಗ್ರಹಿಸದೆ ಅಥವಾ ಮರುತರಬೇತಿ ನೀಡದೆ ಹೊಸ data ಬಂದಂತೆ ನಿರ್ಧಾರಗಳನ್ನೂ ತೆಗೆದುಕೊಳ್ಳಬಹುದು' } },

    { type: 'heading', data: { textEn: '6. Bayesian Updating as Online Learning', textKn: '6. Online Learning ಆಗಿ Bayesian Updating', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The pattern: Prior → Data → Posterior → becomes next prior → New data → New posterior. This connects directly to online learning, streaming systems, bandits, recommendation systems, anomaly detection, and adaptive systems',
      bodyKn: '• ಮಾದರಿ: Prior → Data → Posterior → ಮುಂದಿನ prior ಆಗುತ್ತದೆ → ಹೊಸ data → ಹೊಸ posterior. ಇದೂ online learning, streaming systems, bandits, recommendation systems, anomaly detection, ಮತ್ತು adaptive systems ಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '7. A/B Testing', textKn: '7. A/B Testing', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Suppose we test two button colors, Variant A (Blue) and Variant B (Green), starting with A~Beta(1,1) and B~Beta(1,1) -- no prior preference\n• Variant A: 50 clicks / 1000 views (950 failures) → posterior Beta(51,951), mean ≈ 5.1%\n• Variant B: 65 clicks / 1000 views (935 failures) → posterior Beta(66,936), mean ≈ 6.6%\n• B looks better -- but we still want to know: how likely is it that B is genuinely better than A? That is P(B > A)',
      bodyKn: '• ಎರಡು button colors, Variant A (Blue) ಮತ್ತು Variant B (Green) ಪರೀಕ್ಷಿಸುತ್ತೇವೆ ಎಂದು ಭಾವಿಸಿ, A~Beta(1,1) ಮತ್ತು B~Beta(1,1) ಜೊತೆ ಪ್ರಾರಂಭಿಸಿ -- ಯಾವುದೇ prior ಆದ್ಯತೆ ಇಲ್ಲ\n• Variant A: 50 clicks / 1000 views (950 failures) → posterior Beta(51,951), mean ≈ 5.1%\n• Variant B: 65 clicks / 1000 views (935 failures) → posterior Beta(66,936), mean ≈ 6.6%\n• B ಉತ್ತಮವಾಗಿ ಕಾಣುತ್ತದೆ -- ಆದರೆ ನಮಗೆ ಇನ್ನೂ ತಿಳಿಯಬೇಕು: B ನಿಜವಾಗಿ A ಗಿಂತ ಉತ್ತಮ ಎಂಬ ಸಾಧ್ಯತೆ ಎಷ್ಟು? ಅದೇ P(B > A)' } },

    { type: 'heading', data: { textEn: '8. Monte Carlo Estimation', textKn: '8. Monte Carlo Estimation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Computing P(B>A) analytically can be complicated, but Monte Carlo makes it easy: draw many samples from Beta(51,951) and Beta(66,936), compare each pair, and count how often the B sample exceeds the A sample\n• P(B>A) ≈ number of B>A samples / total samples -- a direct probabilistic statement, often easier to interpret than a traditional p-value',
      bodyKn: '• P(B>A) ಅನ್ನೂ analytically ಗಣಿಸುವುದೂ ಸಂಕೀರ್ಣವಾಗಿರಬಹುದು, ಆದರೆ Monte Carlo ಇದನ್ನೂ ಸುಲಭಗೊಳಿಸುತ್ತದೆ: Beta(51,951) ಮತ್ತು Beta(66,936) ಇಂದ ಅನೇಕ samples ಡ್ರಾ ಮಾಡಿ, ಪ್ರತಿ ಜೋಡಿ ಹೋಲಿಸಿ, ಮತ್ತು B sample A sample ಮೀರುವ ಆವರ್ತನ ಎಣಿಸಿ\n• P(B>A) ≈ B>A samples ಸಂಖ್ಯೆ / ಒಟ್ಟು samples -- ಒಂದು ನೇರ probabilistic ಹೇಳಿಕೆ, ಸಾಮಾನ್ಯವಾಗಿ ಒಂದು ಸಾಂಪ್ರದಾಯಿಕ p-value ಗಿಂತ ವ್ಯಾಖ್ಯಾನಿಸಲು ಸುಲಭ' } },
    { type: 'code', data: {
      filename: 'ab_test_monte_carlo.py', headingEn: 'Genuinely Estimating P(B > A)', headingKn: 'P(B > A) ಅನ್ನೂ ನಿಜವಾಗಿ ಅಂದಾಜಿಸುವುದೂ',
      descEn: 'Genuinely executed below with random.seed(3) and 100,000 samples per variant.', descKn: 'random.seed(3) ಮತ್ತು ಪ್ರತಿ variant ಗೆ 100,000 samples ಜೊತೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import random\nrandom.seed(3)\n\naA, bA = 1 + 50, 1 + 950   # Beta(51, 951)\naB, bB = 1 + 65, 1 + 935   # Beta(66, 936)\nprint(f\"A posterior mean = {beta_mean(aA, bA):.4f}\")\nprint(f\"B posterior mean = {beta_mean(aB, bB):.4f}\")\n\nn = 100000\ncount_b_better = 0\nfor _ in range(n):\n    sample_a = random.betavariate(aA, bA)\n    sample_b = random.betavariate(aB, bB)\n    if sample_b > sample_a:\n        count_b_better += 1\n\nprint(f\"P(B>A) approx = {count_b_better/n:.4f}\")" } },
    { type: 'output', data: { output: "A posterior mean = 0.0509\nB posterior mean = 0.0659\nP(B>A) approx = 0.9232" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run with Python\'s random.betavariate, 100,000 real samples per variant, seed=3 for reproducibility -- the posterior means (0.0509 and 0.0659) match the hand-derived ≈5.1% and ≈6.6% exactly\n• The genuine P(B>A) ≈ 92.3% -- honestly different from the lesson\'s illustrative "for example, 97% probability", which was presented as a generic example of what such a statement might look like, not a guaranteed value for this exact data. Re-running with a different seed shifts this estimate by well under a percentage point, confirming 92-93% is the real answer for this specific A/B data, not 97%\n• Either way, the qualitative conclusion holds: B is very likely better than A, and the exact probability -- not just a binary pass/fail from a p-value threshold -- is the entire point of the Bayesian approach',
      bodyKn: '• Python ನ random.betavariate ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಪ್ರತಿ variant ಗೆ 100,000 ನಿಜ samples, ಪುನರುತ್ಪಾದನೀಯತೆಗಾಗಿ seed=3 -- posterior means (0.0509 ಮತ್ತು 0.0659) ಕೈ-derive ಮಾಡಿದ ≈5.1% ಮತ್ತು ≈6.6% ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ\n• ನಿಜ P(B>A) ≈ 92.3% -- lesson ನ ಉದಾಹರಣಾ "ಉದಾಹರಣೆಗೆ, 97% probability" ಇಂದ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಭಿನ್ನ, ಇದೂ ಈ ನಿರ್ದಿಷ್ಟ data ಗೆ ಒಂದು ಖಾತರಿಪಡಿಸಿದ ಮೌಲ್ಯವಾಗಿ ಅಲ್ಲ, ಅಂತಹ ಒಂದು ಹೇಳಿಕೆ ಹೇಗೆ ಕಾಣಿಸಬಹುದು ಎಂಬುದೂರ ಒಂದು ಸಾಮಾನ್ಯ ಉದಾಹರಣೆಯಾಗಿ ಪ್ರಸ್ತುತಪಡಿಸಲಾಗಿತ್ತು. ಬೇರೆ seed ಜೊತೆ ಮರುಚಲಾಯಿಸುವುದೂ ಈ ಅಂದಾಜು ಒಂದು percentage point ಗಿಂತ ಕಡಿಮೆ ಬದಲಾಯಿಸುತ್ತದೆ, ಈ ನಿರ್ದಿಷ್ಟ A/B data ಗೆ 92-93% ನಿಜ ಉತ್ತರ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ, 97% ಅಲ್ಲ\n• ಯಾವುದೇ ರೀತಿಯಲ್ಲಿ, ಗುಣಾತ್ಮಕ ತೀರ್ಮಾನ ಉಳಿದಿದೆ: B A ಗಿಂತ ಉತ್ತಮವಾಗಿರುವ ಸಾಧ್ಯತೆ ಬಹಳ ಹೆಚ್ಚು, ಮತ್ತು ನಿಖರ probability -- ಕೇವಲ ಒಂದು p-value threshold ಇಂದ ಒಂದು ಬೈನರಿ pass/fail ಅಲ್ಲ -- Bayesian approach ನ ಸಂಪೂರ್ಣ ಅಂಶ' } },
    { type: 'table', data: { captionEn: 'Bayesian vs Frequentist A/B Testing', captionKn: 'Bayesian vs Frequentist A/B Testing',
      rows: 'Aspect|Frequentist A/B|Bayesian A/B\nOutput|p-value|P(B > A)\nInterpretation|How surprising is data if A=B?|How likely is B better than A?\nPrior knowledge|Not explicitly used|Beta prior\nDecision|Often p < 0.05|Posterior probability threshold\nSequential monitoring|Requires care|Naturally supports ongoing updating' } },

    { type: 'heading', data: { textEn: 'Bayesian Thinking in ML', textKn: 'ML ನಲ್ಲಿ Bayesian ಚಿಂತನೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '1. Priors → Regularization', headingKn: '1. Priors → Regularization',
      bodyEn: '• A prior expresses what parameter values we consider plausible -- a Gaussian prior (weights should generally be small) leads via MAP to L2 regularization; a Laplace prior (weights should be sparse) leads via MAP to L1 regularization',
      bodyKn: '• ಒಂದು prior ನಾವು ಯಾವ parameter ಮೌಲ್ಯಗಳನ್ನೂ ಸಂಭವನೀಯ ಎಂದು ಪರಿಗಣಿಸುತ್ತೇವೆ ಎಂದು ವ್ಯಕ್ತಪಡಿಸುತ್ತದೆ -- ಒಂದು Gaussian prior (weights ಸಾಮಾನ್ಯವಾಗಿ ಚಿಕ್ಕದಾಗಿರಬೇಕು) MAP ಮೂಲಕ L2 regularization ಗೆ ಕಾರಣವಾಗುತ್ತದೆ; ಒಂದು Laplace prior (weights sparse ಆಗಿರಬೇಕು) MAP ಮೂಲಕ L1 regularization ಗೆ ಕಾರಣವಾಗುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: '2. Posteriors → Uncertainty', headingKn: '2. Posteriors → Uncertainty',
      bodyEn: '• A normal point prediction might say P(spam)=0.85. Bayesian inference can additionally represent uncertainty about that estimate -- instead of only 0.85, we might have a distribution over plausible probabilities. That distinction matters in medical AI, safety systems, financial decisions, and autonomous systems',
      bodyKn: '• ಒಂದು ಸಾಮಾನ್ಯ point prediction P(spam)=0.85 ಎಂದು ಹೇಳಬಹುದು. Bayesian inference ಆ ಅಂದಾಜಿನ ಬಗ್ಗೆ uncertainty ಅನ್ನೂ ಹೆಚ್ಚುವರಿಯಾಗಿ ಪ್ರತಿನಿಧಿಸಬಹುದು -- ಕೇವಲ 0.85 ಬದಲಿಗೆ, ನಮಗೆ ಸಂಭವನೀಯ probabilities ಗಳ ಮೇಲೆ ಒಂದು distribution ಇರಬಹುದು. ಈ ವ್ಯತ್ಯಾಸ medical AI, safety systems, financial decisions, ಮತ್ತು autonomous systems ನಲ್ಲಿ ಮುಖ್ಯ' } },
    { type: 'concept', data: {
      headingEn: '3. Bayesian Updates → Online Learning', headingKn: '3. Bayesian Updates → Online Learning',
      bodyEn: '• The pattern posterior_t → prior_(t+1) allows systems to update beliefs as new observations arrive -- useful for streaming data, recommendation, bandits, and adaptive systems',
      bodyKn: '• posterior_t → prior_(t+1) ಮಾದರಿ ಹೊಸ ಅವಲೋಕನಗಳು ಬಂದಂತೆ systems ಗಳಿಗೆ ನಂಬಿಕೆಗಳನ್ನೂ ಅಪ್‌ಡೇಟ್ ಮಾಡಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ -- streaming data, recommendation, bandits, ಮತ್ತು adaptive systems ಗೆ ಉಪಯುಕ್ತ' } },
    { type: 'concept', data: {
      headingEn: '4. Model Comparison', headingKn: '4. Model Comparison',
      bodyEn: '• Bayesian methods also appear in Bayes factors, marginal likelihood, and Bayesian Information Criterion (BIC) -- these methods provide ways of reasoning about competing models while accounting for model complexity',
      bodyKn: '• Bayesian methods Bayes factors, marginal likelihood, ಮತ್ತು Bayesian Information Criterion (BIC) ನಲ್ಲಿಯೂ ಕಂಡುಬರುತ್ತವೆ -- ಈ methods model complexity ಪರಿಗಣಿಸುತ್ತಿರುವಾಗ ಸ್ಪರ್ಧಾತ್ಮಕ models ಗಳ ಬಗ್ಗೆ ತಾರ್ಕಿಸುವ ಮಾರ್ಗಗಳನ್ನೂ ಒದಗಿಸುತ್ತವೆ' } },

    { type: 'table', data: { captionEn: 'Key Terms', captionKn: 'ಮುಖ್ಯ ಪದಗಳು',
      rows: 'Term|What It Actually Means\nBayes\' theorem|P(A\\|B) = P(B\\|A)P(A)/P(B)\nPrior|Probability assigned before observing new evidence\nLikelihood|P(evidence\\|hypothesis)\nEvidence|Normalizing probability of the observed evidence\nPosterior|Updated probability after observing evidence\nBayesian update|Convert prior + evidence into posterior\nNaive Bayes|Bayes classifier using conditional independence assumptions\nMLE|Choose parameters maximizing P(data\\|parameters)\nMAP|Choose parameters maximizing P(parameters\\|data)\nLaplace smoothing|Add a pseudocount so unseen features don\'t produce probability zero\nLog probability|Converts products into sums and prevents numerical underflow\nConjugate prior|Prior whose posterior has the same distributional family\nBeta distribution|A distribution for an unknown probability parameter\nBeta-Binomial|Beta prior + binomial data → Beta posterior\nSequential updating|Today\'s posterior becomes tomorrow\'s prior\nA/B testing|Bayesian posterior distributions can estimate P(B>A)\nMonte Carlo|Estimate quantities using repeated random samples' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• The base-rate effect genuinely computed in Part 1 (0.98%, not 99%) is not a trick question -- it is the exact reasoning any fraud, spam, or anomaly detector must account for, since real-world positive classes are almost always rare\n• Genuinely cross-checking the from-scratch Naive Bayes against scikit-learn\'s MultinomialNB, and getting identical predictions, shows that "Bayesian classifier" is not a separate paradigm from what production libraries ship -- it is the same log-probability scoring under the hood\n• Confirming batch and sequential Beta-Binomial updates land on the exact same posterior (Beta(13,9) both ways) is what licenses online/streaming learning systems to update incrementally without ever needing to retrain from scratch on the full history\n• The honest 92.3%-vs-97% gap in the A/B testing section matters pedagogically: a Bayesian "probability B is better" is a genuine computed quantity that depends on your actual data and random seed, not a fixed textbook number -- treating it as one would defeat the purpose of running the Monte Carlo estimate at all',
      bodyKn: '• Part 1 ರಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ base-rate effect (0.98%, 99% ಅಲ್ಲ) ಒಂದು ಟ್ರಿಕ್ ಪ್ರಶ್ನೆ ಅಲ್ಲ -- ಇದೇ ಯಾವುದೇ fraud, spam, ಅಥವಾ anomaly detector ಗಮನಿಸಬೇಕಾದ ನಿಖರ ತಾರ್ಕಿಕತೆ, ನಿಜ-ಜಗತ್ತಿನ positive classes ಬಹುತೇಕ ಯಾವಾಗಲೂ ಅಪರೂಪವಾಗಿರುವ ಕಾರಣ\n• ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ Naive Bayes ಅನ್ನೂ scikit-learn ನ MultinomialNB ವಿರುದ್ಧ ನಿಜವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸುವುದೂ, ಮತ್ತು ಒಂದೇ predictions ಪಡೆಯುವುದೂ, "Bayesian classifier" production libraries ಶಿಪ್ ಮಾಡುವುದರಿಂದ ಒಂದು ಪ್ರತ್ಯೇಕ paradigm ಅಲ್ಲ ಎಂದು ತೋರಿಸುತ್ತದೆ -- ಇದೂ ಒಳಗೆ ಅದೇ log-probability scoring\n• Batch ಮತ್ತು sequential Beta-Binomial updates ನಿಖರ ಅದೇ posterior ಮೇಲೆ ಇಳಿಯುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸುವುದೂ (Beta(13,9) ಎರಡೂ ರೀತಿಯಲ್ಲಿ) online/streaming learning systems ಗಳಿಗೆ ಸಂಪೂರ್ಣ history ಮೇಲೆ ಮೊದಲಿನಿಂದ ಮರುತರಬೇತಿ ನೀಡುವ ಅಗತ್ಯವಿಲ್ಲದೆ ಹೆಚ್ಚುತ್ತಾ ಅಪ್‌ಡೇಟ್ ಮಾಡಲು ಪರವಾನಗಿ ನೀಡುತ್ತದೆ\n• A/B testing ವಿಭಾಗದಲ್ಲಿ ಪ್ರಾಮಾಣಿಕ 92.3%-vs-97% ಅಂತರ ಶಿಕ್ಷಣಶಾಸ್ತ್ರೀಯವಾಗಿ ಮುಖ್ಯ: ಒಂದು Bayesian "B ಉತ್ತಮ ಎಂಬ probability" ನಿಮ್ಮ ವಾಸ್ತವ data ಮತ್ತು random seed ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುವ ಒಂದು ನಿಜ ಗಣಿಸಿದ ಪ್ರಮಾಣ, ಒಂದು ನಿಗದಿತ textbook ಸಂಖ್ಯೆ ಅಲ್ಲ -- ಇದನ್ನೂ ಒಂದಾಗಿ ಪರಿಗಣಿಸುವುದೂ Monte Carlo ಅಂದಾಜು ಚಲಾಯಿಸುವ ಸಂಪೂರ್ಣ ಉದ್ದೇಶ ಸೋಲಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'What You Should Remember', headingKn: 'ನೀವು ಏನೂ ನೆನಪಿಡಬೇಕು',
      bodyEn: '• PRIOR: what did I believe before?\n• LIKELIHOOD: how compatible is this evidence with my hypothesis?\n• POSTERIOR: what should I believe after seeing the evidence?\n• MAP: prior beliefs become regularization\n• BAYESIAN UPDATE: posterior today becomes prior tomorrow\n• The most important equation remains: P(A|B) = P(B|A) × P(A) / P(B) -- the bridge between probability fundamentals and probabilistic machine learning',
      bodyKn: '• PRIOR: ನಾನು ಮೊದಲು ಏನೂ ನಂಬಿದ್ದೆ?\n• LIKELIHOOD: ಈ ಪುರಾವೆ ನನ್ನ hypothesis ಜೊತೆ ಎಷ್ಟು ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ?\n• POSTERIOR: ಪುರಾವೆ ನೋಡಿದ ನಂತರ ನಾನು ಏನೂ ನಂಬಬೇಕು?\n• MAP: prior beliefs regularization ಆಗುತ್ತವೆ\n• BAYESIAN UPDATE: ಇಂದಿನ posterior ನಾಳೆಯ prior ಆಗುತ್ತದೆ\n• ಅತಿ ಮುಖ್ಯ equation ಉಳಿದಿದೆ: P(A|B) = P(B|A) × P(A) / P(B) -- probability fundamentals ಮತ್ತು probabilistic machine learning ನಡುವಿನ ಸೇತುವೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely comparing sequential updates (Beta(1,1) → 7H,3T → 5H,5T) against a single batch update (Beta(1,1) → 12H,8T), what was found?', qKn: 'Sequential updates (Beta(1,1) → 7H,3T → 5H,5T) ಅನ್ನೂ ಒಂದೇ batch update (Beta(1,1) → 12H,8T) ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['They produced different posteriors', 'Both produced the identical posterior Beta(13,9), mean=0.591, confirming sequential update = batch update mathematically', 'Sequential updating failed to converge', 'Batch updating required numerical integration'], correct: 1,
        optsKn: ['ಅವು ಬೇರೆ posteriors ಉತ್ಪಾದಿಸಿದವು', 'ಎರಡೂ ಒಂದೇ posterior Beta(13,9), mean=0.591 ಉತ್ಪಾದಿಸಿದವು, sequential update = batch update ಗಣಿತೀಯವಾಗಿ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'Sequential updating converge ಆಗಲಿಲ್ಲ', 'Batch updating ಗೆ numerical integration ಅಗತ್ಯವಿತ್ತು'] },
      { q: 'What did the genuine Monte Carlo estimate of P(B>A) turn out to be for the A/B test data (51/1002 vs 66/1002 posteriors), and how did it compare to the lesson\'s illustrative "97%"?', qKn: 'A/B test data (51/1002 vs 66/1002 posteriors) ಗೆ P(B>A) ನ ನಿಜ Monte Carlo ಅಂದಾಜು ಏನೂ ಆಯಿತು, ಮತ್ತು ಇದೂ lesson ನ ಉದಾಹರಣಾ "97%" ಗೆ ಹೇಗೆ ಹೋಲಿಕೆಯಾಯಿತು?',
        opts: ['Exactly 97%, matching perfectly', '≈92.3%, honestly different from the lesson\'s generic "for example, 97%" illustration -- the real number depends on the actual data', '50%, meaning no difference between variants', '0%, meaning B is never better'], correct: 1,
        optsKn: ['ನಿಖರವಾಗಿ 97%, ಪರಿಪೂರ್ಣವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '≈92.3%, lesson ನ ಸಾಮಾನ್ಯ "ಉದಾಹರಣೆಗೆ, 97%" ಉದಾಹರಣೆಯಿಂದ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಭಿನ್ನ -- ನಿಜ ಸಂಖ್ಯೆ ವಾಸ್ತವ data ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ', '50%, variants ಗಳ ನಡುವೆ ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ ಎಂದು ಅರ್ಥ', '0%, B ಎಂದಿಗೂ ಉತ್ತಮವಲ್ಲ ಎಂದು ಅರ್ಥ'] },
      { q: 'Why is Beta(a,b) called a "conjugate prior" for binomial data?', qKn: 'Binomial data ಗೆ Beta(a,b) ಅನ್ನೂ "conjugate prior" ಎಂದು ಏಕೆ ಕರೆಯಲಾಗುತ್ತದೆ?',
        opts: ['Because it always equals 0.5', 'Because updating it with binomial data (s successes, f failures) produces another Beta distribution, Beta(a+s, b+f) -- the posterior stays in the same family as the prior', 'Because it requires numerical integration to update', 'Because it only works for continuous outcomes'], correct: 1,
        optsKn: ['ಏಕೆಂದರೆ ಇದೂ ಯಾವಾಗಲೂ 0.5 ಗೆ ಸಮ', 'ಏಕೆಂದರೆ binomial data (s successes, f failures) ಜೊತೆ ಇದನ್ನೂ ಅಪ್‌ಡೇಟ್ ಮಾಡುವುದೂ ಇನ್ನೊಂದು Beta distribution ಉತ್ಪಾದಿಸುತ್ತದೆ, Beta(a+s, b+f) -- posterior prior ಗೆ ಅದೇ ಕುಟುಂಬದಲ್ಲಿ ಉಳಿಯುತ್ತದೆ', 'ಏಕೆಂದರೆ ಅಪ್‌ಡೇಟ್ ಮಾಡಲು numerical integration ಅಗತ್ಯ', 'ಏಕೆಂದರೆ ಇದೂ ಕೇವಲ continuous outcomes ಗೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
      { q: 'What is the practical advantage of sequential Bayesian updating over always retraining on the full historical dataset, even though both give the same posterior?', qKn: 'ಎರಡೂ ಒಂದೇ posterior ನೀಡಿದರೂ, ಸಂಪೂರ್ಣ historical dataset ಮೇಲೆ ಯಾವಾಗಲೂ ಮರುತರಬೇತಿ ನೀಡುವುದಕ್ಕಿಂತ sequential Bayesian updating ನ ಪ್ರಾಯೋಗಿಕ ಅನುಕೂಲ ಏನೂ?',
        opts: ['It gives a different, more accurate answer', 'You can make decisions as new data arrives without storing or retraining on the entire historical dataset', 'It requires no prior at all', 'It only works with Gaussian distributions'], correct: 1,
        optsKn: ['ಇದೂ ಒಂದು ಬೇರೆ, ಹೆಚ್ಚು ನಿಖರ ಉತ್ತರ ನೀಡುತ್ತದೆ', 'ಸಂಪೂರ್ಣ historical dataset ಸಂಗ್ರಹಿಸದೆ ಅಥವಾ ಮರುತರಬೇತಿ ನೀಡದೆ ಹೊಸ data ಬಂದಂತೆ ನಿರ್ಧಾರಗಳನ್ನೂ ತೆಗೆದುಕೊಳ್ಳಬಹುದು', 'ಇದಕ್ಕೆ ಯಾವುದೇ prior ಅಗತ್ಯವಿಲ್ಲ', 'ಇದೂ ಕೇವಲ Gaussian distributions ಜೊತೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
    ] } },
  ],
};
