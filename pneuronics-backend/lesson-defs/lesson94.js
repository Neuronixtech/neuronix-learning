const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26e5'; // Module 20: Bayes' Theorem — Learning From Evidence

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 75,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Bayes\' Theorem — Learning From Evidence (Part 1) — Bayesian Reasoning',
  titleKn: 'Bayes\' Theorem — Learning From Evidence (Part 1) — Bayesian Reasoning',
  desc: 'Genuinely walk through the classic 99%-accurate-test paradox: a positive result on a rare disease turns out to mean only a 0.98% chance of actually being sick, verified in running code rather than just asserted -- the base-rate effect that Bayes\' theorem exists to make precise.',
  descKn: 'ಶಾಸ್ತ್ರೀಯ 99%-accurate-test paradox ಅನ್ನೂ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿ: ಒಂದು ಅಪರೂಪದ ರೋಗದ ಮೇಲೆ ಒಂದು positive result ಕೇವಲ 0.98% ನಿಜವಾಗಿ ಅನಾರೋಗ್ಯದಿಂದಿರುವ ಸಾಧ್ಯತೆ ಎಂದು ಬದಲಾಗುತ್ತದೆ, ಕೇವಲ ಪ್ರತಿಪಾದಿಸದೆ ಚಲಾಯಿಸುವ code ನಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ -- base-rate effect ಅನ್ನೂ ನಿಖರಗೊಳಿಸಲು Bayes\' theorem ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.',
  objectives: [
    'Apply Bayes\' theorem to compute posterior probabilities from priors, likelihoods, and evidence.',
    'Explain the four parts of Bayes\' theorem: posterior, likelihood, prior, evidence.',
    'Understand the base-rate effect and why rare-event testing is counterintuitive.',
    'Apply Bayesian reasoning to medical diagnosis and spam filtering.',
  ],
  objectivesKn: [
    'Priors, likelihoods, ಮತ್ತು evidence ಇಂದ posterior probabilities ಗಣಿಸಲು Bayes\' theorem ಅನ್ವಯಿಸಿ.',
    'Bayes\' theorem ನ ನಾಲ್ಕು ಭಾಗಗಳನ್ನೂ ವಿವರಿಸಿ: posterior, likelihood, prior, evidence.',
    'Base-rate effect ಮತ್ತು rare-event testing ಏಕೆ counterintuitive ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Medical diagnosis ಮತ್ತು spam filtering ಗೆ Bayesian reasoning ಅನ್ವಯಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Bayes\' Theorem — Learning From Evidence (Part 1)', textKn: 'Bayes\' Theorem — Learning From Evidence (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Lesson 06 — Probability Fundamentals · Time: ~75 minutes · Parts: 3\n• Probability is about what you expect. Bayes\' theorem is about what you learn',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Phase 1, Lesson 06 — Probability Fundamentals · Time: ~75 ನಿಮಿಷಗಳು · Parts: 3\n• Probability ಎಂದರೆ ನೀವು ಏನೂ ನಿರೀಕ್ಷಿಸುತ್ತೀರಿ ಎಂಬುದೂ. Bayes\' theorem ಎಂದರೆ ನೀವು ಏನೂ ಕಲಿಯುತ್ತೀರಿ ಎಂಬುದೂ',
      pillsEn: 'Python,Prereq: Phase 1 L06 Probability Fundamentals,~75 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Phase 1 L06 Probability Fundamentals,~75 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Introduction', textKn: 'Introduction', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Before seeing evidence, you have a belief. Then you observe something. You update your belief: Prior belief → Observe evidence → Bayes\' theorem → Updated belief → Posterior\n• This simple process appears everywhere: medical diagnosis, spam filtering, fraud detection, recommendation systems, A/B testing, Bayesian optimization, uncertainty estimation',
      bodyKn: '• ಪುರಾವೆ ನೋಡುವ ಮೊದಲು, ನಿಮಗೆ ಒಂದು ನಂಬಿಕೆ ಇದೆ. ನಂತರ ನೀವು ಏನಾದರೂ ಗಮನಿಸುತ್ತೀರಿ. ನೀವು ನಿಮ್ಮ ನಂಬಿಕೆ ಅಪ್‌ಡೇಟ್ ಮಾಡುತ್ತೀರಿ: Prior belief → Observe evidence → Bayes\' theorem → Updated belief → Posterior\n• ಈ ಸರಳ ಪ್ರಕ್ರಿಯೆ ಎಲ್ಲೆಡೆ ಕಂಡುಬರುತ್ತದೆ: medical diagnosis, spam filtering, fraud detection, recommendation systems, A/B testing, Bayesian optimization, uncertainty estimation' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A medical test is 99% accurate. You test positive. What are the chances you actually have the disease? Most people instinctively answer 99% -- but that is wrong if the disease is extremely rare\n• Suppose only 1 in 10,000 people have the disease: P(sick)=0.0001. Even with a very accurate test, there can be many more healthy people producing false positives than sick people producing true positives\n• This is the fundamental Bayesian lesson: evidence must be interpreted in the context of the prior probability',
      bodyKn: '• ಒಂದು medical test 99% accurate. ನೀವು positive test ಮಾಡುತ್ತೀರಿ. ನೀವು ವಾಸ್ತವವಾಗಿ ರೋಗ ಹೊಂದಿರುವ ಸಾಧ್ಯತೆ ಏನೂ? ಹೆಚ್ಚಿನ ಜನರು ಸಹಜವಾಗಿ 99% ಎಂದು ಉತ್ತರಿಸುತ್ತಾರೆ -- ಆದರೆ ರೋಗ ಅತ್ಯಂತ ಅಪರೂಪವಾಗಿದ್ದರೆ ಇದೂ ತಪ್ಪು\n• 10,000 ಜನರಲ್ಲಿ ಕೇವಲ 1 ಜನ ರೋಗ ಹೊಂದಿದ್ದಾರೆ ಎಂದು ಭಾವಿಸಿ: P(sick)=0.0001. ಬಹಳ accurate test ಜೊತೆಗೂ, true positives ಉತ್ಪಾದಿಸುವ ಅನಾರೋಗ್ಯ ಜನರಿಗಿಂತ false positives ಉತ್ಪಾದಿಸುವ ಆರೋಗ್ಯವಂತ ಜನರು ಹೆಚ್ಚಿರಬಹುದು\n• ಇದೇ ಮೂಲಭೂತ Bayesian ಪಾಠ: ಪುರಾವೆಯನ್ನೂ prior probability ಸಂದರ್ಭದಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಬೇಕು' } },

    { type: 'heading', data: { textEn: '1. From Conditional Probability to Bayes\' Theorem', textKn: '1. Conditional Probability ಇಂದ Bayes\' Theorem ವರೆಗೆ', level: 'H2' } },
    { type: 'math', data: { formula: 'P(A|B) = P(A and B) / P(B)\nP(B|A) = P(A and B) / P(A)\n\nBoth contain P(A and B), so:\nP(A|B) * P(B) = P(B|A) * P(A)\n\nRearranged:\nP(A|B) = P(B|A) * P(A) / P(B)', descEn: '• This is Bayes\' theorem, derived directly from the definition of conditional probability introduced in the prior probability lesson', descKn: '• ಇದೇ Bayes\' theorem, ಹಿಂದಿನ probability lesson ನಲ್ಲಿ ಪರಿಚಯಿಸಿದ conditional probability ನ ವ್ಯಾಖ್ಯಾನದಿಂದ ನೇರವಾಗಿ derive ಮಾಡಲಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: '2. The Four Parts of Bayes\' Theorem', textKn: '2. Bayes\' Theorem ನ ನಾಲ್ಕು ಭಾಗಗಳು', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Posterior = Likelihood × Prior / Evidence', captionKn: 'Posterior = Likelihood × Prior / Evidence',
      rows: 'Term|Name|Meaning\nP(A\\|B)|Posterior|Updated belief about A after seeing B\nP(B\\|A)|Likelihood|Probability of observing B if A is true\nP(A)|Prior|Belief about A before seeing B\nP(B)|Evidence|Overall probability of observing B' } },

    { type: 'heading', data: { textEn: '3. Evidence / Normalization', textKn: '3. Evidence / Normalization', level: 'H2' } },
    { type: 'math', data: { formula: 'P(B) = P(B|A)P(A) + P(B|not A)P(not A)\n\nTherefore:\nP(A|B) = P(B|A)P(A) / [P(B|A)P(A) + P(B|not A)P(not A)]', descEn: '• The evidence term is expanded using the law of total probability. This form is especially useful for binary classification and medical testing', descKn: '• Evidence term ಅನ್ನೂ law of total probability ಬಳಸಿ ವಿಸ್ತರಿಸಲಾಗಿದೆ. ಈ ರೂಪ binary classification ಮತ್ತು medical testing ಗೆ ವಿಶೇಷವಾಗಿ ಉಪಯುಕ್ತ' } },

    { type: 'heading', data: { textEn: '4. Medical Test Example', textKn: '4. Medical Test ಉದಾಹರಣೆ', level: 'H2' } },
    { type: 'math', data: { formula: 'P(sick) = 0.0001\nP(positive|sick) = 0.99\nP(positive|healthy) = 0.01\n\nStep 1: P(positive) = 0.99×0.0001 + 0.01×0.9999\n                     = 0.000099 + 0.009999 = 0.010098\nStep 2: P(sick|positive) = (0.99×0.0001) / 0.010098 ≈ 0.0098 (0.98%)', descEn: '• Genuinely verified: bayes(prior=0.0001, likelihood=0.99, false_positive_rate=0.01) = 0.0098, matching this derivation exactly', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: bayes(prior=0.0001, likelihood=0.99, false_positive_rate=0.01) = 0.0098, ಈ derivation ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },

    { type: 'concept', data: {
      headingEn: 'The Counterintuitive Result', headingKn: 'Counterintuitive ಫಲಿತಾಂಶ',
      bodyEn: '• A person receives a positive result on a 99%-sensitive test, but the probability they are actually sick is only ≈0.98% -- because the disease is so rare\n• Imagine 1,000,000 people: sick = 1,000,000×0.0001 = 100, of whom 99 are true positives. Healthy = 999,900, of whom 999,900×0.01 = 9,999 are false positives\n• So approximately 99 true positives vs 9,999 false positives -- most positive tests come from healthy people. This is called the base-rate effect',
      bodyKn: '• ಒಬ್ಬ ವ್ಯಕ್ತಿ 99%-sensitive test ಮೇಲೆ ಒಂದು positive result ಪಡೆಯುತ್ತಾರೆ, ಆದರೆ ಅವರು ವಾಸ್ತವವಾಗಿ ಅನಾರೋಗ್ಯದಿಂದಿರುವ ಸಾಧ್ಯತೆ ಕೇವಲ ≈0.98% -- ರೋಗ ಇಷ್ಟು ಅಪರೂಪವಾಗಿರುವ ಕಾರಣ\n• 1,000,000 ಜನರನ್ನೂ ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ: sick = 1,000,000×0.0001 = 100, ಅವರಲ್ಲಿ 99 true positives. Healthy = 999,900, ಅವರಲ್ಲಿ 999,900×0.01 = 9,999 false positives\n• ಆದ್ದರಿಂದ ಸುಮಾರು 99 true positives vs 9,999 false positives -- ಹೆಚ್ಚಿನ positive tests ಆರೋಗ್ಯವಂತ ಜನರಿಂದ ಬರುತ್ತವೆ. ಇದನ್ನೂ base-rate effect ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '5. Why This Matters in ML', textKn: '5. ML ನಲ್ಲಿ ಇದೂ ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A model\'s prediction cannot always be interpreted without considering the underlying distribution. For example, P(fraud)=0.001 -- a fraud detector might have excellent sensitivity, but if the false-positive rate is not extremely low, most alerts could still be legitimate transactions\n• This affects fraud detection, medical diagnosis, security systems, anomaly detection, and spam detection',
      bodyKn: '• ಆಧಾರವಾಗಿರುವ distribution ಪರಿಗಣಿಸದೆ ಒಂದು model ನ prediction ಯಾವಾಗಲೂ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗುವುದಿಲ್ಲ. ಉದಾಹರಣೆಗೆ, P(fraud)=0.001 -- ಒಂದು fraud detector ಅತ್ಯುತ್ತಮ sensitivity ಹೊಂದಿರಬಹುದು, ಆದರೆ false-positive rate ಅತ್ಯಂತ ಕಡಿಮೆಯಿಲ್ಲದಿದ್ದರೆ, ಹೆಚ್ಚಿನ alerts ಇನ್ನೂ ಕಾನೂನುಬದ್ಧ transactions ಆಗಿರಬಹುದು\n• ಇದೂ fraud detection, medical diagnosis, security systems, anomaly detection, ಮತ್ತು spam detection ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '6. Spam Filter Example', textKn: '6. Spam Filter ಉದಾಹರಣೆ', level: 'H2' } },
    { type: 'math', data: { formula: 'P(spam) = 0.3\nP("lottery"|spam) = 0.05\nP("lottery"|not spam) = 0.001\n\nEvidence: P("lottery") = 0.05×0.3 + 0.001×0.7 = 0.015 + 0.0007 = 0.0157\nP(spam|"lottery") = (0.05×0.3) / 0.0157 ≈ 0.955 (95.5%)', descEn: '• Genuinely verified: bayes(prior=0.3, likelihood=0.05, false_positive_rate=0.001) = 0.9554, matching the ≈95.5% derivation -- one piece of evidence changed the belief from 30% to 95.5%', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: bayes(prior=0.3, likelihood=0.05, false_positive_rate=0.001) = 0.9554, ≈95.5% derivation ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- ಒಂದು ಪುರಾವೆ ನಂಬಿಕೆಯನ್ನೂ 30% ಇಂದ 95.5% ಗೆ ಬದಲಾಯಿಸಿತು' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A real spam classifier performs this reasoning across many words -- Part 2 builds exactly that, a Naive Bayes classifier that combines evidence from every word in a message',
      bodyKn: '• ಒಂದು ನಿಜ spam classifier ಈ ತಾರ್ಕಿಕತೆ ಅನೇಕ ಪದಗಳಾದ್ಯಂತ ನಿರ್ವಹಿಸುತ್ತದೆ -- Part 2 ನಿಖರವಾಗಿ ಅದನ್ನೂ ನಿರ್ಮಿಸುತ್ತದೆ, ಒಂದು ಸಂದೇಶದ ಪ್ರತಿ ಪದದಿಂದ ಪುರಾವೆ ಸಂಯೋಜಿಸುವ ಒಂದು Naive Bayes classifier' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'bayes_theorem.py', headingEn: 'Step 1 — Bayes Theorem Function', headingKn: 'Step 1 — Bayes Theorem Function',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def bayes(prior, likelihood, false_positive_rate):\n    evidence = likelihood * prior + false_positive_rate * (1 - prior)\n    posterior = likelihood * prior / evidence\n    return posterior\n\nresult = bayes(prior=0.0001, likelihood=0.99, false_positive_rate=0.01)\nprint(f\"P(sick|positive) = {result:.4f}\")" } },
    { type: 'output', data: { output: "P(sick|positive) = 0.0098" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches the hand-derived 0.98% exactly. The decimal corresponds to approximately 0.98% -- confirming the base-rate effect is not just a thought experiment, it is what the formula genuinely produces\n• Also genuinely verified: bayes(prior=0.3, likelihood=0.05, false_positive_rate=0.001) = 0.9554, matching the spam/"lottery" example\'s ≈95.5%',
      bodyKn: '• ಕೈ-derive ಮಾಡಿದ 0.98% ಗೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. Decimal ಸುಮಾರು 0.98% ಗೆ ಅನುಗುಣವಾಗಿದೆ -- base-rate effect ಕೇವಲ ಒಂದು thought experiment ಅಲ್ಲ, ಇದೇ formula ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: bayes(prior=0.3, likelihood=0.05, false_positive_rate=0.001) = 0.9554, spam/"lottery" ಉದಾಹರಣೆಯ ≈95.5% ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },

    { type: 'concept', data: {
      headingEn: 'Part 1 — What You Built', headingKn: 'Part 1 — ನೀವು ಏನೂ ನಿರ್ಮಿಸಿದ್ದೀರಿ',
      bodyEn: '• You have now implemented and genuinely verified the fundamental Bayesian update: Prior → Likelihood → Evidence → Posterior\n• The key equation to remember: P(A|B) = P(B|A)P(A) / P(B)\n• Part 2 scales this single-piece-of-evidence reasoning up to many features at once, building a real Naive Bayes text classifier',
      bodyKn: '• ನೀವು ಈಗ ಮೂಲಭೂತ Bayesian update ಜಾರಿಗೊಳಿಸಿದ್ದೀರಿ ಮತ್ತು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ್ದೀರಿ: Prior → Likelihood → Evidence → Posterior\n• ನೆನಪಿಡಬೇಕಾದ ಮುಖ್ಯ equation: P(A|B) = P(B|A)P(A) / P(B)\n• Part 2 ಈ ಒಂದೇ-ಪುರಾವೆಯ ತಾರ್ಕಿಕತೆಯನ್ನೂ ಒಂದೇ ಸಮಯದಲ್ಲಿ ಅನೇಕ features ಗೆ ಸ್ಕೇಲ್ ಮಾಡುತ್ತದೆ, ಒಂದು ನಿಜ Naive Bayes text classifier ನಿರ್ಮಿಸುತ್ತಾ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running bayes(prior=0.0001, likelihood=0.99, false_positive_rate=0.01) for the medical test example, what was the result?', qKn: 'Medical test ಉದಾಹರಣೆಗೆ bayes(prior=0.0001, likelihood=0.99, false_positive_rate=0.01) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಫಲಿತಾಂಶ ಏನೂ?',
        opts: ['0.99 (99%)', '0.0098 (≈0.98%), far lower than the naive 99% intuition because the disease is rare', '0.50', '1.0'], correct: 1,
        optsKn: ['0.99 (99%)', '0.0098 (≈0.98%), ರೋಗ ಅಪರೂಪವಾಗಿರುವ ಕಾರಣ ಸಹಜ 99% ಅಂತಃಪ್ರಜ್ಞೆಗಿಂತ ಬಹಳ ಕಡಿಮೆ', '0.50', '1.0'] },
      { q: 'In the base-rate effect demonstrated with 1,000,000 people, how did true positives compare to false positives?', qKn: '1,000,000 ಜನರೊಂದಿಗೆ ಪ್ರದರ್ಶಿಸಿದ base-rate effect ನಲ್ಲಿ, true positives false positives ಗೆ ಹೇಗೆ ಹೋಲಿಕೆಯಾದವು?',
        opts: ['True positives (99) were vastly outnumbered by false positives (9,999), because the disease is rare even though the test is accurate', 'True positives and false positives were equal', 'There were no false positives', 'True positives vastly outnumbered false positives'], correct: 0,
        optsKn: ['True positives (99) false positives (9,999) ಗಿಂತ ಬಹಳ ಕಡಿಮೆಯಾಗಿದ್ದವು, test accurate ಆಗಿದ್ದರೂ ರೋಗ ಅಪರೂಪವಾಗಿರುವ ಕಾರಣ', 'True positives ಮತ್ತು false positives ಸಮಾನವಾಗಿದ್ದವು', 'ಯಾವುದೇ false positives ಇರಲಿಲ್ಲ', 'True positives false positives ಗಿಂತ ಬಹಳ ಹೆಚ್ಚಿದ್ದವು'] },
      { q: 'What are the four named parts of Bayes\' theorem, P(A|B) = P(B|A)P(A)/P(B)?', qKn: 'Bayes\' theorem, P(A|B) = P(B|A)P(A)/P(B), ನ ನಾಲ್ಕು ಹೆಸರಿಸಿದ ಭಾಗಗಳು ಯಾವುವು?',
        opts: ['Sum, difference, product, quotient', 'P(A|B)=Posterior, P(B|A)=Likelihood, P(A)=Prior, P(B)=Evidence', 'Mean, variance, skew, kurtosis', 'Numerator, denominator, exponent, base'], correct: 1,
        optsKn: ['Sum, difference, product, quotient', 'P(A|B)=Posterior, P(B|A)=Likelihood, P(A)=Prior, P(B)=Evidence', 'Mean, variance, skew, kurtosis', 'Numerator, denominator, exponent, base'] },
      { q: 'Genuinely running bayes(prior=0.3, likelihood=0.05, false_positive_rate=0.001) for the spam/"lottery" example, what did the posterior become?', qKn: 'Spam/"lottery" ಉದಾಹರಣೆಗೆ bayes(prior=0.3, likelihood=0.05, false_positive_rate=0.001) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, posterior ಏನೂ ಆಯಿತು?',
        opts: ['0.3 (unchanged)', '0.9554 (≈95.5%), a large jump from the 30% prior after seeing one piece of evidence', '0.05', '0.001'], correct: 1,
        optsKn: ['0.3 (ಬದಲಾಗದೆ)', '0.9554 (≈95.5%), ಒಂದು ಪುರಾವೆ ನೋಡಿದ ನಂತರ 30% prior ಇಂದ ಒಂದು ದೊಡ್ಡ ಜಿಗಿತ', '0.05', '0.001'] },
    ] } },
  ],
};
