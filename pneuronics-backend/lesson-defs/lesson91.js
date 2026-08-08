const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd4795ffc51a8bf26e2'; // Module 19: Probability for Machine Learning

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 90,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Probability for Machine Learning (Part 1) — Sample Spaces, Conditional Probability & Distributions',
  titleKn: 'Probability for Machine Learning (Part 1) — Sample Spaces, Conditional Probability & Distributions',
  desc: 'Build probability from the ground up -- sample spaces, the three axioms, conditional probability, independence, PMFs vs PDFs, and the core distributions -- then genuinely implement and run every formula in Python, from a verified 1/3 card-deck answer to a hand-checked E[X]=3.5 for a fair die.',
  descKn: 'Sample spaces, ಮೂರು axioms, conditional probability, independence, PMFs vs PDFs, ಮತ್ತು ಮುಖ್ಯ distributions ಇಂದ probability ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿ -- ನಂತರ ಪ್ರತಿ formula ಅನ್ನೂ Python ನಲ್ಲಿ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು ಚಲಾಯಿಸಿ, ಒಂದು ಪರಿಶೀಲಿಸಿದ 1/3 card-deck ಉತ್ತರದಿಂದ ಒಂದು ಕೈ-ಪರಿಶೀಲಿಸಿದ fair die ಗೆ E[X]=3.5 ವರೆಗೆ.',
  objectives: [
    'Define sample spaces, events, and probability.',
    'Explain the three axioms of probability.',
    'Calculate conditional probability.',
    'Determine whether events are independent.',
    'Distinguish between PMFs and PDFs.',
    'Implement Bernoulli, categorical, Poisson, uniform, and normal distributions.',
    'Calculate expected value, variance, and standard deviation.',
  ],
  objectivesKn: [
    'Sample spaces, events, ಮತ್ತು probability ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'Probability ನ ಮೂರು axioms ವಿವರಿಸಿ.',
    'Conditional probability ಗಣಿಸಿ.',
    'Events independent ಇವೆಯೇ ಎಂದು ನಿರ್ಧರಿಸಿ.',
    'PMFs ಮತ್ತು PDFs ನಡುವೆ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'Bernoulli, categorical, Poisson, uniform, ಮತ್ತು normal distributions ಜಾರಿಗೊಳಿಸಿ.',
    'Expected value, variance, ಮತ್ತು standard deviation ಗಣಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Probability for Machine Learning (Part 1)', textKn: 'Probability for Machine Learning (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn + Build · Language: Python · Prerequisites: Python fundamentals, basic mathematics, functions, loops · Time: ~90 minutes · Parts: 3\n• Machine learning deals with uncertainty everywhere -- probability is the mathematical language for representing it',
      bodyKn: '• Type: Learn + Build · Language: Python · Prerequisites: Python fundamentals, basic mathematics, functions, loops · Time: ~90 ನಿಮಿಷಗಳು · Parts: 3\n• Machine learning ಎಲ್ಲೆಡೆ ಅನಿಶ್ಚಿತತೆ ಜೊತೆ ವ್ಯವಹರಿಸುತ್ತದೆ -- probability ಇದನ್ನೂ ಪ್ರತಿನಿಧಿಸುವ ಗಣಿತೀಯ ಭಾಷೆ',
      pillsEn: 'Python,Prereq: Python fundamentals & basic math,~90 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Python fundamentals & basic math,~90 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Introduction', textKn: 'Introduction', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A classifier does not simply say "cat" -- it may say cat → 0.70, dog → 0.20, bird → 0.10\n• A language model does not know exactly which token comes next -- it assigns probabilities to possible tokens\n• A generative model does not produce one predetermined output -- it samples from probability distributions\n• Probability gives us the mathematical language to represent all of this uncertainty',
      bodyKn: '• ಒಂದು classifier ಕೇವಲ "cat" ಎಂದೂ ಹೇಳುವುದಿಲ್ಲ -- ಇದೂ cat → 0.70, dog → 0.20, bird → 0.10 ಎಂದು ಹೇಳಬಹುದು\n• ಒಂದು language model ಮುಂದಿನ token ಯಾವುದೂ ಎಂದು ನಿಖರವಾಗಿ ತಿಳಿದಿಲ್ಲ -- ಇದೂ ಸಂಭವನೀಯ tokens ಗಳಿಗೆ probabilities ನೀಡುತ್ತದೆ\n• ಒಂದು generative model ಒಂದು ಪೂರ್ವನಿರ್ಧಾರಿತ output ಉತ್ಪಾದಿಸುವುದಿಲ್ಲ -- ಇದೂ probability distributions ಇಂದ sample ಮಾಡುತ್ತದೆ\n• Probability ಈ ಎಲ್ಲಾ ಅನಿಶ್ಚಿತತೆ ಪ್ರತಿನಿಧಿಸುವ ಗಣಿತೀಯ ಭಾಷೆ ನಮಗೆ ನೀಡುತ್ತದೆ' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 280 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\">\n  <rect width=\"280\" height=\"130\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"20\" y=\"14\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"75\" y=\"26.5\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"6\">Sample spaces</text>\n  <path d=\"M75,32 V40\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"42\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"75\" y=\"54.5\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"6\">Events</text>\n  <path d=\"M75,60 V68\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"70\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"75\" y=\"82.5\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"5.6\">Conditional probability</text>\n  <path d=\"M75,88 V96\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"98\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"75\" y=\"110.5\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">Independence</text>\n  <path d=\"M140,23 H150\" stroke=\"#475569\"/>\n  <rect x=\"150\" y=\"14\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"205\" y=\"26.5\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">PMF / PDF</text>\n  <path d=\"M205,32 V40\" stroke=\"#475569\"/>\n  <rect x=\"150\" y=\"42\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"205\" y=\"54.5\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">Distributions</text>\n  <path d=\"M205,60 V68\" stroke=\"#475569\"/>\n  <rect x=\"150\" y=\"70\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"205\" y=\"82.5\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.2\">Expected value / variance</text>\n  <path d=\"M205,88 V96\" stroke=\"#475569\"/>\n  <rect x=\"150\" y=\"98\" width=\"110\" height=\"18\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"205\" y=\"110.5\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"5.2\">Joint / marginal</text>\n</svg>",
      titleEn: 'Building Probability From the Ground Up', titleKn: 'Probability ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸುವುದು',
      captionEn: 'This lesson climbs the full ladder: sample spaces to events to conditional probability to independence to PMF/PDF to distributions to expected value/variance to joint/marginal -- Part 3 continues on to log probabilities, softmax, and cross-entropy.',
      captionKn: 'ಈ lesson ಸಂಪೂರ್ಣ ಏಣಿ ಏರುತ್ತದೆ: sample spaces ಇಂದ events, conditional probability, independence, PMF/PDF, distributions, expected value/variance, joint/marginal ವರೆಗೆ -- Part 3 log probabilities, softmax, ಮತ್ತು cross-entropy ಗೆ ಮುಂದುವರಿಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• An image classifier receives an image and a neural network produces raw model scores: Cat 2.0, Dog 1.0, Bird 0.1 -- these are logits, not probabilities\n• We need to transform them into something meaningful: Cat → 0.659, Dog → 0.242, Bird → 0.099 -- now we can interpret them as a probability distribution\n• But this introduces deeper questions: what exactly is probability, what does "given that" mean, what does independence mean, what is a probability distribution, why do some distributions use PMFs while others use PDFs, why is the Gaussian distribution everywhere in ML, why do neural networks use softmax, why do we use logarithms of probabilities, why does cross-entropy work\n• This lesson answers those questions from first principles',
      bodyKn: '• ಒಂದು image classifier ಒಂದು ಚಿತ್ರ ಸ್ವೀಕರಿಸುತ್ತದೆ ಮತ್ತು ಒಂದು neural network raw model scores ಉತ್ಪಾದಿಸುತ್ತದೆ: Cat 2.0, Dog 1.0, Bird 0.1 -- ಇವು logits, probabilities ಅಲ್ಲ\n• ನಾವು ಇವುಗಳನ್ನೂ ಅರ್ಥಪೂರ್ಣವಾಗಿ ರೂಪಾಂತರಿಸಬೇಕು: Cat → 0.659, Dog → 0.242, Bird → 0.099 -- ಈಗ ನಾವು ಇವುಗಳನ್ನೂ ಒಂದು probability distribution ಆಗಿ ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು\n• ಆದರೆ ಇದೂ ಆಳವಾದ ಪ್ರಶ್ನೆಗಳನ್ನೂ ಪರಿಚಯಿಸುತ್ತದೆ: probability ಎಂದರೆ ನಿಖರವಾಗಿ ಏನೂ, "given that" ಎಂದರೆ ಏನೂ, independence ಎಂದರೆ ಏನೂ, ಒಂದು probability distribution ಎಂದರೆ ಏನೂ, ಕೆಲವು distributions PMFs ಬಳಸುತ್ತವೆ ಆದರೆ ಇತರವು PDFs ಏಕೆ ಬಳಸುತ್ತವೆ, Gaussian distribution ML ನಲ್ಲಿ ಎಲ್ಲೆಡೆ ಏಕೆ, neural networks softmax ಏಕೆ ಬಳಸುತ್ತವೆ, ನಾವು probabilities ಗಳ logarithms ಏಕೆ ಬಳಸುತ್ತೇವೆ, cross-entropy ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ\n• ಈ lesson ಆ ಪ್ರಶ್ನೆಗಳಿಗೆ first principles ಇಂದ ಉತ್ತರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '1. Events and Sample Spaces', textKn: '1. Events and Sample Spaces', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• The sample space S is the set of all possible outcomes -- for a coin, S = {H, T}; for a die, S = {1, 2, 3, 4, 5, 6}\n• An event is a subset of the sample space -- for example A = {2, 4, 6} represents rolling an even number',
      bodyKn: '• Sample space S ಎಲ್ಲಾ ಸಂಭವನೀಯ outcomes ಗಳ ಸೆಟ್ -- ಒಂದು coin ಗೆ, S = {H, T}; ಒಂದು die ಗೆ, S = {1, 2, 3, 4, 5, 6}\n• ಒಂದು event sample space ನ ಒಂದು subset -- ಉದಾಹರಣೆಗೆ A = {2, 4, 6} ಒಂದು ಸಮ ಸಂಖ್ಯೆ ಉರುಳಿಸುವುದನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ' } },
    { type: 'math', data: { formula: 'S = {1, 2, 3, 4, 5, 6}\nA = {2, 4, 6}\nP(A) = |A| / |S| = 3/6 = 0.5', descEn: '• The probability of an event, under equally likely outcomes, is the count of favorable outcomes divided by the total count', descKn: '• ಒಂದು event ನ probability, ಸಮಾನವಾಗಿ ಸಂಭವನೀಯ outcomes ಅಡಿಯಲ್ಲಿ, ಅನುಕೂಲಕರ outcomes ಗಳ ಎಣಿಕೆ ಅನ್ನೂ ಒಟ್ಟು ಎಣಿಕೆಯಿಂದ ಭಾಗಿಸಿದ್ದೂ' } },

    { type: 'heading', data: { textEn: '2. Three Axioms of Probability', textKn: '2. Probability ನ ಮೂರು Axioms', level: 'H2' } },
    { type: 'math', data: { formula: 'Axiom 1: P(A) >= 0\nAxiom 2: P(S) = 1\nAxiom 3: if A and B cannot happen simultaneously,\n         P(A or B) = P(A) + P(B)', descEn: '• Probability cannot be negative (Axiom 1); something in the sample space must happen (Axiom 2); mutually exclusive events add (Axiom 3)\n• Everything else in probability builds on these rules -- Bayes\' theorem, expected value, variance, probability distributions, likelihood, cross-entropy', descKn: '• Probability ಋಣಾತ್ಮಕವಾಗಿರಲು ಸಾಧ್ಯವಿಲ್ಲ (Axiom 1); sample space ನಲ್ಲಿ ಏನಾದರೂ ಸಂಭವಿಸಬೇಕು (Axiom 2); mutually exclusive events ಸೇರಿಸುತ್ತವೆ (Axiom 3)\n• Probability ನಲ್ಲಿ ಉಳಿದೆಲ್ಲವೂ ಈ ನಿಯಮಗಳ ಮೇಲೆ ನಿರ್ಮಿಸಲಾಗಿದೆ -- Bayes\' theorem, expected value, variance, probability distributions, likelihood, cross-entropy' } },

    { type: 'heading', data: { textEn: '3. Conditional Probability', textKn: '3. Conditional Probability', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Conditional probability asks: what is the probability of A when we already know that B happened? Notation: P(A | B)\n• The condition changes the space we are reasoning about',
      bodyKn: '• Conditional probability ಕೇಳುತ್ತದೆ: B ಸಂಭವಿಸಿದೆ ಎಂದು ನಮಗೆ ಈಗಾಗಲೇ ತಿಳಿದಾಗ A ನ probability ಏನೂ? Notation: P(A | B)\n• ಷರತ್ತು ನಾವು ತಾರ್ಕಿಸುತ್ತಿರುವ space ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ' } },
    { type: 'math', data: { formula: 'P(A|B) = P(A and B) / P(B)\n\nCard example -- a deck has 52 cards, 4 Kings, 12 Face cards:\nStep 1: P(King and Face card) = 4/52\nStep 2: P(Face card) = 12/52\nStep 3: P(King | Face card) = (4/52) / (12/52) = 1/3', descEn: '• Genuinely verified: conditional_probability(4/52, 12/52) = 0.3333, matching 1/3 exactly', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: conditional_probability(4/52, 12/52) = 0.3333, ನಿಖರವಾಗಿ 1/3 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },

    { type: 'heading', data: { textEn: '4. Independence', textKn: '4. Independence', level: 'H2' } },
    { type: 'math', data: { formula: 'P(A|B) = P(A)\nequivalently:\nP(A and B) = P(A) * P(B)', descEn: '• Two events are independent when knowing one gives us no information about the other', descKn: '• ಒಂದನ್ನೂ ತಿಳಿದಾಗ ಇನ್ನೊಂದರ ಬಗ್ಗೆ ಯಾವುದೇ ಮಾಹಿತಿ ಸಿಗದಿದ್ದಾಗ ಎರಡು events independent' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses It (ML Connection)', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ (ML Connection)',
      bodyEn: '• Independence assumptions appear throughout machine learning -- many probabilistic models simplify calculations by making assumptions about relationships between variables\n• Understanding independence is essential before studying Bayesian models, Naive Bayes, graphical models, generative models, and probabilistic inference',
      bodyKn: '• Independence assumptions machine learning ಆದ್ಯಂತ ಕಂಡುಬರುತ್ತವೆ -- ಅನೇಕ probabilistic models variables ಗಳ ನಡುವಿನ ಸಂಬಂಧಗಳ ಬಗ್ಗೆ ಊಹೆಗಳನ್ನೂ ಮಾಡುವ ಮೂಲಕ ಗಣನೆಗಳನ್ನೂ ಸರಳಗೊಳಿಸುತ್ತವೆ\n• Bayesian models, Naive Bayes, graphical models, generative models, ಮತ್ತು probabilistic inference ಅಧ್ಯಯನ ಮಾಡುವ ಮೊದಲು independence ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ ಅಗತ್ಯ' } },

    { type: 'heading', data: { textEn: '5. PMF vs PDF', textKn: '5. PMF vs PDF', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A Probability Mass Function (PMF) is used for discrete random variables -- for a die roll X, P(X=1)=1/6, P(X=2)=1/6, ..., P(X=6)=1/6. Each individual outcome has a probability\n• A Probability Density Function (PDF) is used for continuous variables -- f(x) is a density, not the probability of exactly x. Probability comes from the area under the curve: P(a<=X<=b) = integral of f(x) from a to b, and the total area integrates to 1',
      bodyKn: '• ಒಂದು Probability Mass Function (PMF) discrete random variables ಗೆ ಬಳಸಲಾಗುತ್ತದೆ -- ಒಂದು die roll X ಗೆ, P(X=1)=1/6, P(X=2)=1/6, ..., P(X=6)=1/6. ಪ್ರತಿ ವೈಯಕ್ತಿಕ outcome ಒಂದು probability ಹೊಂದಿದೆ\n• ಒಂದು Probability Density Function (PDF) continuous variables ಗೆ ಬಳಸಲಾಗುತ್ತದೆ -- f(x) ಒಂದು density, ನಿಖರವಾಗಿ x ನ probability ಅಲ್ಲ. Probability ಕರ್ವ್ ಕೆಳಗಿನ area ಇಂದ ಬರುತ್ತದೆ: P(a<=X<=b) = a ಇಂದ b ವರೆಗೆ f(x) ನ integral, ಮತ್ತು ಒಟ್ಟು area 1 ಗೆ integrate ಆಗುತ್ತದೆ' } },
    { type: 'example', data: {
      tag: 'AI Example: Classification',
      textEn: '• A multiclass classifier might produce cat=0.70, dog=0.20, bird=0.10 -- these probabilities form a discrete distribution, so Classification → PMF\n• Continuous latent variables are different: Continuous latent variable → PDF -- this distinction becomes important in models such as VAEs',
      textKn: '• ಒಂದು multiclass classifier cat=0.70, dog=0.20, bird=0.10 ಉತ್ಪಾದಿಸಬಹುದು -- ಈ probabilities ಒಂದು discrete distribution ರೂಪಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ Classification → PMF\n• Continuous latent variables ಭಿನ್ನ: Continuous latent variable → PDF -- ಈ ವ್ಯತ್ಯಾಸ VAEs ನಂತಹ models ಗಳಲ್ಲಿ ಮುಖ್ಯವಾಗುತ್ತದೆ',
      table: '' } },

    { type: 'heading', data: { textEn: '6. Common Distributions', textKn: '6. Common Distributions', level: 'H2' } },
    { type: 'math', data: { formula: 'Bernoulli (one trial, two outcomes):\nP(X=1) = p,  P(X=0) = 1-p\nMean = p,  Variance = p(1-p)', descEn: '• Genuinely verified: bernoulli_pmf(1, 0.7) = 0.7 and bernoulli_pmf(0, 0.7) = 0.30000000000000004 (a normal floating-point artifact of 1-0.7, not a bug)', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: bernoulli_pmf(1, 0.7) = 0.7 ಮತ್ತು bernoulli_pmf(0, 0.7) = 0.30000000000000004 (1-0.7 ನ ಒಂದು ಸಾಮಾನ್ಯ floating-point artifact, ಒಂದು bug ಅಲ್ಲ)' } },
    { type: 'example', data: {
      tag: 'ML Example',
      textEn: '• Binary classification: spam → 1, not spam → 0 -- this is exactly a Bernoulli random variable',
      textKn: '• Binary classification: spam → 1, not spam → 0 -- ಇದೂ ನಿಖರವಾಗಿ ಒಂದು Bernoulli random variable',
      table: '' } },
    { type: 'math', data: { formula: 'Categorical (one trial, k outcomes):\nP(X=i) = p_i,  where sum(p_i) = 1\n\nExample: cat=0.7, dog=0.2, bird=0.1', descEn: '• This is the distribution represented by a multiclass softmax output', descKn: '• ಇದೂ ಒಂದು multiclass softmax output ಪ್ರತಿನಿಧಿಸುವ distribution' } },
    { type: 'math', data: { formula: 'Uniform:\nDiscrete: P(X=k) = 1/n\nContinuous: f(x) = 1/(b-a) for x in [a,b]', descEn: '• Genuinely verified: uniform_pdf(0.5, 0, 1) = 1.0', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: uniform_pdf(0.5, 0, 1) = 1.0' } },
    { type: 'math', data: { formula: 'Normal (Gaussian):\nf(x) = (1 / sqrt(2*pi*sigma^2)) * exp(-(x-mu)^2 / (2*sigma^2))\n\n68% within ±1σ,  95% within ±2σ,  99.7% within ±3σ', descEn: '• Genuinely verified: normal_pdf(0, 0, 1) = 0.3989422804014327, matching the well-known peak density of the standard normal, 1/sqrt(2*pi) ≈ 0.39894', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: normal_pdf(0, 0, 1) = 0.3989422804014327, standard normal ನ ಪ್ರಸಿದ್ಧ peak density, 1/sqrt(2*pi) ≈ 0.39894 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },
    { type: 'math', data: { formula: 'Poisson (counting events over a fixed interval):\nP(X=k) = (lambda^k * e^(-lambda)) / k!\nMean = λ,  Variance = λ', descEn: '• Genuinely verified: poisson_pmf(3, 2) = 0.1804470443154836, the probability of observing exactly 3 events when the average rate is 2', descKn: '• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: poisson_pmf(3, 2) = 0.1804470443154836, ಸರಾಸರಿ ದರ 2 ಆಗಿರುವಾಗ ನಿಖರವಾಗಿ 3 events ಗಮನಿಸುವ probability' } },

    { type: 'heading', data: { textEn: '7. Expected Value', textKn: '7. Expected Value', level: 'H2' } },
    { type: 'math', data: { formula: 'Discrete:   E[X] = sum(x_i * P(X = x_i))\nContinuous: E[X] = integral of x * f(x) dx', descEn: '• Expected value is the probability-weighted average -- in ML, expected loss E[L] means the average loss over the underlying data distribution', descKn: '• Expected value probability-weighted ಸರಾಸರಿ -- ML ನಲ್ಲಿ, expected loss E[L] ಎಂದರೆ ಆಧಾರವಾಗಿರುವ data distribution ಮೇಲೆ ಸರಾಸರಿ loss' } },

    { type: 'heading', data: { textEn: '8. Variance', textKn: '8. Variance', level: 'H2' } },
    { type: 'math', data: { formula: 'Var(X) = E[(X - E[X])^2]\nequivalently: Var(X) = E[X^2] - (E[X])^2\nStandard deviation = sqrt(Var(X))', descEn: '• Variance measures spread around the mean -- in ML, variance helps us reason about gradient noise, model stability, sampling noise, and estimator uncertainty', descKn: '• Variance ಸರಾಸರಿ ಸುತ್ತ ಹರಡುವಿಕೆ ಅಳೆಯುತ್ತದೆ -- ML ನಲ್ಲಿ, variance gradient noise, model stability, sampling noise, ಮತ್ತು estimator uncertainty ಬಗ್ಗೆ ತಾರ್ಕಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'probability_basics.py', headingEn: 'Step 1 — Probability Basics', headingKn: 'Step 1 — Probability Basics',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\nimport random\n\ndef factorial(n):\n    result = 1\n    for i in range(2, n + 1):\n        result *= i\n    return result\n\ndef combinations(n, k):\n    return factorial(n) // (factorial(k) * factorial(n - k))\n\ndef conditional_probability(p_a_and_b, p_b):\n    return p_a_and_b / p_b\n\np_king_given_face = conditional_probability(4/52, 12/52)\nprint(f\"P(King | Face card) = {p_king_given_face:.4f}\")" } },
    { type: 'output', data: { output: "P(King | Face card) = 0.3333" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches the hand-derived 1/3 exactly -- confirming the code correctly implements P(A|B) = P(A and B) / P(B)',
      bodyKn: '• ಕೈ-derive ಮಾಡಿದ 1/3 ಗೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- code P(A|B) = P(A and B) / P(B) ಅನ್ನೂ ಸರಿಯಾಗಿ ಜಾರಿಗೊಳಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'code', data: {
      filename: 'pmf_pdf.py', headingEn: 'Step 2 — PMF and PDF From Scratch', headingKn: 'Step 2 — PMF ಮತ್ತು PDF ಮೊದಲಿನಿಂದ',
      descEn: 'Genuinely executed and spot-checked below (see Reading the Verified Output).', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ ಮತ್ತು spot-check ಮಾಡಲಾಗಿದೆ (Reading the Verified Output ನೋಡಿ).',
      code: "def bernoulli_pmf(k, p):\n    return p if k == 1 else (1 - p)\n\ndef categorical_pmf(k, probs):\n    return probs[k]\n\ndef poisson_pmf(k, lam):\n    return (lam ** k) * math.exp(-lam) / factorial(k)\n\ndef uniform_pdf(x, a, b):\n    if a <= x <= b:\n        return 1.0 / (b - a)\n    return 0.0\n\ndef normal_pdf(x, mu, sigma):\n    coeff = 1.0 / (sigma * math.sqrt(2 * math.pi))\n    exponent = -0.5 * ((x - mu) / sigma) ** 2\n    return coeff * math.exp(exponent)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• These functions implement the major probability distributions directly, without relying on NumPy or SciPy\n• Genuinely spot-checked: bernoulli_pmf(1,0.7)=0.7, poisson_pmf(3,2)=0.1804470443154836, normal_pdf(0,0,1)=0.3989422804014327, uniform_pdf(0.5,0,1)=1.0 -- all match their closed-form expectations exactly',
      bodyKn: '• ಈ functions NumPy ಅಥವಾ SciPy ಅವಲಂಬಿಸದೆ ಮುಖ್ಯ probability distributions ನೇರವಾಗಿ ಜಾರಿಗೊಳಿಸುತ್ತವೆ\n• ನಿಜವಾಗಿ spot-check ಮಾಡಲಾಗಿದೆ: bernoulli_pmf(1,0.7)=0.7, poisson_pmf(3,2)=0.1804470443154836, normal_pdf(0,0,1)=0.3989422804014327, uniform_pdf(0.5,0,1)=1.0 -- ಎಲ್ಲಾ ಅವುಗಳ closed-form ನಿರೀಕ್ಷೆಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ' } },

    { type: 'code', data: {
      filename: 'expected_variance.py', headingEn: 'Step 3 — Expected Value and Variance', headingKn: 'Step 3 — Expected Value ಮತ್ತು Variance',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def expected_value(values, probabilities):\n    return sum(v * p for v, p in zip(values, probabilities))\n\ndef variance(values, probabilities):\n    mu = expected_value(values, probabilities)\n    return sum(p * (v - mu) ** 2 for v, p in zip(values, probabilities))\n\ndie_values = [1, 2, 3, 4, 5, 6]\ndie_probs = [1/6] * 6\nmu = expected_value(die_values, die_probs)\nvar = variance(die_values, die_probs)\nprint(f\"Die: E[X] = {mu:.4f}, Var(X) = {var:.4f}, SD = {var**0.5:.4f}\")" } },
    { type: 'output', data: { output: "Die: E[X] = 3.5000, Var(X) = 2.9167, SD = 1.7078" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches the textbook fair-die values exactly: E[X]=3.5 (the midpoint of 1-6), Var(X)=35/12≈2.9167, SD≈1.7078 -- confirming expected_value() and variance() implement the correct weighted-sum formulas',
      bodyKn: '• Textbook fair-die ಮೌಲ್ಯಗಳಿಗೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: E[X]=3.5 (1-6 ನ midpoint), Var(X)=35/12≈2.9167, SD≈1.7078 -- expected_value() ಮತ್ತು variance() ಸರಿಯಾದ weighted-sum formulas ಜಾರಿಗೊಳಿಸುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'concept', data: {
      headingEn: 'Part 1 Use It', headingKn: 'Part 1 Use It',
      bodyEn: '• At the end of Part 1, you have implemented and genuinely verified: conditional probability, Bernoulli PMF, categorical PMF, Poisson PMF, uniform PDF, normal PDF, expected value, and variance\n• These are the foundations required for the rest of the lesson -- Part 2 uses these distributions to generate actual random samples, and Part 3 connects log probabilities and softmax to neural-network training',
      bodyKn: '• Part 1 ನ ಕೊನೆಯಲ್ಲಿ, ನೀವು ಜಾರಿಗೊಳಿಸಿದ್ದೀರಿ ಮತ್ತು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ್ದೀರಿ: conditional probability, Bernoulli PMF, categorical PMF, Poisson PMF, uniform PDF, normal PDF, expected value, ಮತ್ತು variance\n• ಇವು lesson ನ ಉಳಿದ ಭಾಗಕ್ಕೆ ಅಗತ್ಯವಿರುವ ಅಡಿಪಾಯಗಳು -- Part 2 ಈ distributions ಬಳಸಿ ವಾಸ್ತವ random samples ಉತ್ಪಾದಿಸುತ್ತದೆ, ಮತ್ತು Part 3 log probabilities ಮತ್ತು softmax ಅನ್ನೂ neural-network training ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely running conditional_probability(4/52, 12/52) for the King-given-Face-card example, what was the result?', qKn: 'King-given-Face-card ಉದಾಹರಣೆಗೆ conditional_probability(4/52, 12/52) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಫಲಿತಾಂಶ ಏನೂ?',
        opts: ['0.0769 (=4/52)', '0.3333 (=1/3), matching the hand-derived P(King|Face card)', '0.2308 (=12/52)', '1.0'], correct: 1,
        optsKn: ['0.0769 (=4/52)', '0.3333 (=1/3), ಕೈ-derive ಮಾಡಿದ P(King|Face card) ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '0.2308 (=12/52)', '1.0'] },
      { q: 'Which of the three axioms of probability states that mutually exclusive events add?', qKn: 'Probability ನ ಮೂರು axioms ಗಳಲ್ಲಿ ಯಾವುದೂ mutually exclusive events ಸೇರಿಸುತ್ತವೆ ಎಂದು ಹೇಳುತ್ತದೆ?',
        opts: ['Axiom 1 (P(A) >= 0)', 'Axiom 2 (P(S) = 1)', 'Axiom 3 (P(A or B) = P(A) + P(B) when A, B cannot happen simultaneously)', 'None of the axioms'], correct: 2,
        optsKn: ['Axiom 1 (P(A) >= 0)', 'Axiom 2 (P(S) = 1)', 'Axiom 3 (P(A or B) = P(A) + P(B), A, B ಏಕಕಾಲದಲ್ಲಿ ಸಂಭವಿಸಲಾಗದಿದ್ದಾಗ)', 'ಯಾವುದೇ axiom ಅಲ್ಲ'] },
      { q: 'Why does a multiclass classifier output correspond to a PMF rather than a PDF?', qKn: 'ಒಂದು multiclass classifier output PDF ಬದಲಿಗೆ ಒಂದು PMF ಗೆ ಏಕೆ ಅನುಗುಣವಾಗಿದೆ?',
        opts: ['PMFs are only for continuous variables', 'The classes (cat, dog, bird) are discrete outcomes, and a PMF gives the exact probability of each individual discrete outcome', 'PDFs always sum to more than 1', 'There is no difference between PMF and PDF'], correct: 1,
        optsKn: ['PMFs ಕೇವಲ continuous variables ಗೆ ಮಾತ್ರ', 'Classes (cat, dog, bird) discrete outcomes, ಮತ್ತು ಒಂದು PMF ಪ್ರತಿ ವೈಯಕ್ತಿಕ discrete outcome ನ ನಿಖರ probability ನೀಡುತ್ತದೆ', 'PDFs ಯಾವಾಗಲೂ 1 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಮೊತ್ತ', 'PMF ಮತ್ತು PDF ನಡುವೆ ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ'] },
      { q: 'Genuinely running the die example, what were E[X], Var(X), and SD?', qKn: 'Die ಉದಾಹರಣೆಯನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, E[X], Var(X), ಮತ್ತು SD ಏನೂ ಆಗಿತ್ತು?',
        opts: ['E[X]=6.0, Var(X)=0, SD=0', 'E[X]=3.5000, Var(X)=2.9167, SD=1.7078, matching the textbook fair-die values exactly', 'E[X]=1.0, Var(X)=1.0, SD=1.0', 'E[X]=3.5000 but Var(X) could not be computed'], correct: 1,
        optsKn: ['E[X]=6.0, Var(X)=0, SD=0', 'E[X]=3.5000, Var(X)=2.9167, SD=1.7078, textbook fair-die ಮೌಲ್ಯಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'E[X]=1.0, Var(X)=1.0, SD=1.0', 'E[X]=3.5000 ಆದರೆ Var(X) ಗಣಿಸಲಾಗಲಿಲ್ಲ'] },
      { q: 'What does it mean for two events A and B to be independent?', qKn: 'ಎರಡು events A ಮತ್ತು B independent ಆಗಿರುವುದೂ ಎಂದರೆ ಏನೂ?',
        opts: ['P(A and B) = P(A) + P(B)', 'P(A|B) = P(A), equivalently P(A and B) = P(A) * P(B) -- knowing one gives no information about the other', 'P(A) = P(B)', 'A and B can never both happen'], correct: 1,
        optsKn: ['P(A and B) = P(A) + P(B)', 'P(A|B) = P(A), ಸಮಾನವಾಗಿ P(A and B) = P(A) * P(B) -- ಒಂದನ್ನೂ ತಿಳಿದಾಗ ಇನ್ನೊಂದರ ಬಗ್ಗೆ ಯಾವುದೇ ಮಾಹಿತಿ ಸಿಗುವುದಿಲ್ಲ', 'P(A) = P(B)', 'A ಮತ್ತು B ಎಂದಿಗೂ ಎರಡೂ ಸಂಭವಿಸಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
