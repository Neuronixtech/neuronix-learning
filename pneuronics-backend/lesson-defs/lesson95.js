const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf26e5'; // Module 20: Bayes' Theorem — Learning From Evidence

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 75,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Bayes\' Theorem — Learning From Evidence (Part 2) — Naive Bayes, MLE, MAP & Log Probabilities',
  titleKn: 'Bayes\' Theorem — Learning From Evidence (Part 2) — Naive Bayes, MLE, MAP & Log Probabilities',
  desc: 'Genuinely train a from-scratch Naive Bayes spam classifier with Laplace smoothing and log-space scoring, then cross-check every one of its predictions against scikit-learn\'s MultinomialNB on the identical data -- all four predictions matched exactly.',
  descKn: 'Laplace smoothing ಮತ್ತು log-space scoring ಜೊತೆ ಒಂದು ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ Naive Bayes spam classifier ಅನ್ನೂ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಿ, ನಂತರ ಇದರ ಪ್ರತಿ prediction ಅನ್ನೂ ಅದೇ data ಮೇಲೆ scikit-learn ನ MultinomialNB ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಿ -- ಎಲ್ಲಾ ನಾಲ್ಕು predictions ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು.',
  objectives: [
    'Explain the Naive Bayes conditional independence assumption.',
    'Build a text classifier from scratch.',
    'Estimate word probabilities using MLE and apply Laplace smoothing.',
    'Use log probabilities to prevent numerical underflow.',
    'Explain the connection between MAP and regularization.',
    'Distinguish Bayesian and frequentist parameter estimation.',
  ],
  objectivesKn: [
    'Naive Bayes conditional independence assumption ವಿವರಿಸಿ.',
    'ಒಂದು text classifier ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿ.',
    'MLE ಬಳಸಿ word probabilities ಅಂದಾಜು ಮಾಡಿ ಮತ್ತು Laplace smoothing ಅನ್ವಯಿಸಿ.',
    'Numerical underflow ತಡೆಯಲು log probabilities ಬಳಸಿ.',
    'MAP ಮತ್ತು regularization ನಡುವಿನ ಸಂಪರ್ಕ ವಿವರಿಸಿ.',
    'Bayesian ಮತ್ತು frequentist parameter estimation ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Bayes\' Theorem — Learning From Evidence (Part 2)', textKn: 'Bayes\' Theorem — Learning From Evidence (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + scikit-learn · Prerequisites: Part 1, Bayesian Reasoning · Time: ~75 minutes · Parts: 3\n• Bayes\' theorem works beautifully for one piece of evidence -- but real ML problems contain many features',
      bodyKn: '• Type: Build · Language: Python + scikit-learn · Prerequisites: Part 1, Bayesian Reasoning · Time: ~75 ನಿಮಿಷಗಳು · Parts: 3\n• Bayes\' theorem ಒಂದು ಪುರಾವೆಗೆ ಸುಂದರವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ -- ಆದರೆ ನಿಜ ML ಸಮಸ್ಯೆಗಳು ಅನೇಕ features ಒಳಗೊಂಡಿರುತ್ತವೆ',
      pillsEn: 'Python,scikit-learn,Prereq: Part 1 Bayesian Reasoning,~75 min,Part 2 of 3',
      pillsKn: 'Python,scikit-learn,Prereq: Part 1 Bayesian Reasoning,~75 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Suppose we have "free money winner" and want P(spam | free, money, winner). Bayes gives P(spam|features) ∝ P(spam) × P(features|spam), but calculating P(free, money, winner | spam) directly can become difficult\n• Naive Bayes makes a simplifying assumption: features are conditionally independent given the class',
      bodyKn: '• "free money winner" ಇದೆ ಎಂದು ಭಾವಿಸಿ ಮತ್ತು P(spam | free, money, winner) ಬೇಕು ಎಂದು. Bayes P(spam|features) ∝ P(spam) × P(features|spam) ನೀಡುತ್ತದೆ, ಆದರೆ P(free, money, winner | spam) ಅನ್ನೂ ನೇರವಾಗಿ ಗಣಿಸುವುದೂ ಕಷ್ಟಕರವಾಗಬಹುದು\n• Naive Bayes ಒಂದು ಸರಳೀಕರಣ ಊಹೆ ಮಾಡುತ್ತದೆ: class ಗಿವನ್ features conditionally independent' } },

    { type: 'heading', data: { textEn: '1. Naive Bayes', textKn: '1. Naive Bayes', level: 'H2' } },
    { type: 'math', data: { formula: 'P(class | feature_1, ..., feature_n)\n  ∝\nP(class) × P(feature_1|class) × ... × P(feature_n|class)\n\nscore(class) = P(class) × product(P(feature_i | class))', descEn: '• We choose the class with the highest score', descKn: '• ಅತಿ ಹೆಚ್ಚಿನ score ಹೊಂದಿರುವ class ಅನ್ನೂ ನಾವು ಆಯ್ಕೆ ಮಾಡುತ್ತೇವೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why "Naive"?', headingKn: 'ಏಕೆ "Naive"?',
      bodyEn: '• Words in real language are not independent -- "New" and "York" are strongly related. But Naive Bayes assumes P(New, York|class) ≈ P(New|class) × P(York|class), which is obviously imperfect\n• Yet Naive Bayes can work surprisingly well for text classification, because the classifier mainly needs to rank classes correctly, rather than perfectly model the complete probability distribution of language',
      bodyKn: '• ನಿಜ ಭಾಷೆಯಲ್ಲಿ ಪದಗಳು ಸ್ವತಂತ್ರವಲ್ಲ -- "New" ಮತ್ತು "York" ಬಲವಾಗಿ ಸಂಬಂಧಿಸಿವೆ. ಆದರೆ Naive Bayes P(New, York|class) ≈ P(New|class) × P(York|class) ಎಂದು ಊಹಿಸುತ್ತದೆ, ಇದೂ ಸ್ಪಷ್ಟವಾಗಿ ಅಪೂರ್ಣ\n• ಆದರೂ Naive Bayes text classification ಗೆ ಆಶ್ಚರ್ಯಕರವಾಗಿ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡಬಹುದು, ಏಕೆಂದರೆ classifier ಗೆ ಭಾಷೆಯ ಸಂಪೂರ್ಣ probability distribution ಪರಿಪೂರ್ಣವಾಗಿ ಮಾಡೆಲ್ ಮಾಡುವ ಬದಲಿಗೆ ಮುಖ್ಯವಾಗಿ classes ಗಳನ್ನೂ ಸರಿಯಾಗಿ ರ‍್ಯಾಂಕ್ ಮಾಡುವ ಅಗತ್ಯವಿದೆ' } },

    { type: 'heading', data: { textEn: '2. Maximum Likelihood Estimation', textKn: '2. Maximum Likelihood Estimation', level: 'H2' } },
    { type: 'math', data: { formula: 'P("free"|spam) = count("free" in spam) / total_spam_word_count', descEn: '• This is Maximum Likelihood Estimation (MLE) -- it chooses parameters that make the observed training data most likely', descKn: '• ಇದೇ Maximum Likelihood Estimation (MLE) -- ಇದೂ observed training data ಅನ್ನೂ ಅತಿ ಸಂಭವನೀಯಗೊಳಿಸುವ parameters ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '3. The Zero-Probability Problem', textKn: '3. Zero-Probability Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Suppose training data never contains "bitcoin" in a spam message. MLE gives P(bitcoin|spam)=0. Now an email contains "free bitcoin winner" -- since P(bitcoin|spam)=0, the entire product P(free|spam) × P(bitcoin|spam) × P(winner|spam) becomes 0\n• One unseen word destroys the calculation',
      bodyKn: '• Training data ಒಂದು spam ಸಂದೇಶದಲ್ಲಿ ಎಂದಿಗೂ "bitcoin" ಒಳಗೊಂಡಿಲ್ಲ ಎಂದು ಭಾವಿಸಿ. MLE P(bitcoin|spam)=0 ನೀಡುತ್ತದೆ. ಈಗ ಒಂದು email "free bitcoin winner" ಒಳಗೊಂಡಿದೆ -- P(bitcoin|spam)=0 ಆಗಿರುವ ಕಾರಣ, ಸಂಪೂರ್ಣ ಉತ್ಪನ್ನ P(free|spam) × P(bitcoin|spam) × P(winner|spam) 0 ಆಗುತ್ತದೆ\n• ಒಂದು ಕಾಣದ ಪದ ಸಂಪೂರ್ಣ ಗಣನೆ ನಾಶಪಡಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '4. Laplace Smoothing', textKn: '4. Laplace Smoothing', level: 'H2' } },
    { type: 'math', data: { formula: 'P(word|class) = (count(word,class) + 1) / (total_words_in_class + vocabulary_size)', descEn: '• Adding 1 means no word has probability zero -- this is called Laplace smoothing', descKn: '• 1 ಸೇರಿಸುವುದೂ ಎಂದರೆ ಯಾವುದೇ ಪದ ಶೂನ್ಯ probability ಹೊಂದುವುದಿಲ್ಲ -- ಇದನ್ನೂ Laplace smoothing ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '5. Log Probabilities', textKn: '5. Log Probabilities', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Multiplying hundreds of small probabilities (P(class) × P(word1|class) × ... × P(word100|class)) can eventually underflow to 0.0 in floating point\n• Instead use logarithms: log P(class) + log P(word1|class) + log P(word2|class) + ... -- multiplication becomes addition, mathematically equivalent and numerically safer',
      bodyKn: '• ನೂರಾರು ಚಿಕ್ಕ probabilities (P(class) × P(word1|class) × ... × P(word100|class)) ಗುಣಿಸುವುದೂ ಅಂತಿಮವಾಗಿ floating point ನಲ್ಲಿ 0.0 ಗೆ underflow ಆಗಬಹುದು\n• ಬದಲಿಗೆ logarithms ಬಳಸಿ: log P(class) + log P(word1|class) + log P(word2|class) + ... -- multiplication addition ಆಗುತ್ತದೆ, ಗಣಿತೀಯವಾಗಿ ಸಮಾನ ಮತ್ತು ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಸುರಕ್ಷಿತ' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'naive_bayes.py', headingEn: 'Step 2 — Naive Bayes Classifier', headingKn: 'Step 2 — Naive Bayes Classifier',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\nfrom collections import defaultdict\n\nclass NaiveBayes:\n    def __init__(self, smoothing=1.0):\n        self.smoothing = smoothing\n        self.class_counts = defaultdict(int)\n        self.word_counts = defaultdict(lambda: defaultdict(int))\n        self.class_word_totals = defaultdict(int)\n        self.vocab = set()\n\n    def train(self, documents, labels):\n        for doc, label in zip(documents, labels):\n            self.class_counts[label] += 1\n            words = doc.lower().split()\n            for word in words:\n                self.word_counts[label][word] += 1\n                self.class_word_totals[label] += 1\n                self.vocab.add(word)\n\n    def predict(self, document):\n        words = document.lower().split()\n        total_docs = sum(self.class_counts.values())\n        vocab_size = len(self.vocab)\n        best_class = None\n        best_score = float(\"-inf\")\n        for cls in self.class_counts:\n            score = math.log(self.class_counts[cls] / total_docs)\n            for word in words:\n                count = self.word_counts[cls].get(word, 0)\n                total = self.class_word_totals[cls]\n                score += math.log((count + self.smoothing) / (total + self.smoothing * vocab_size))\n            if score > best_score:\n                best_score = score\n                best_class = cls\n        return best_class" } },
    { type: 'concept', data: {
      headingEn: 'Understanding the Class', headingKn: 'Class ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು',
      bodyEn: '• The constructor stores the smoothing parameter. The classifier maintains class_counts, word_counts, class_word_totals, and vocab -- enough to estimate the probabilities required by Naive Bayes\n• train() counts how many spam/ham documents there are, how many times each word occurs, and how many total words occur in each class -- essentially MLE plus the information required for smoothing\n• predict() calculates score = log P(class) + Σ log P(word|class) for each class and chooses the class with the largest score',
      bodyKn: '• Constructor smoothing parameter ಸಂಗ್ರಹಿಸುತ್ತದೆ. Classifier class_counts, word_counts, class_word_totals, ಮತ್ತು vocab ನಿರ್ವಹಿಸುತ್ತದೆ -- Naive Bayes ಗೆ ಅಗತ್ಯವಿರುವ probabilities ಅಂದಾಜು ಮಾಡಲು ಸಾಕಷ್ಟು\n• train() ಎಷ್ಟು spam/ham documents ಇವೆ, ಪ್ರತಿ ಪದ ಎಷ್ಟು ಬಾರಿ ಕಂಡುಬರುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ class ನಲ್ಲಿ ಎಷ್ಟು ಒಟ್ಟು ಪದಗಳು ಕಂಡುಬರುತ್ತವೆ ಎಂದು ಎಣಿಸುತ್ತದೆ -- ಮೂಲಭೂತವಾಗಿ MLE ಜೊತೆಗೆ smoothing ಗೆ ಅಗತ್ಯವಿರುವ ಮಾಹಿತಿ\n• predict() ಪ್ರತಿ class ಗೆ score = log P(class) + Σ log P(word|class) ಗಣಿಸುತ್ತದೆ ಮತ್ತು ಅತಿ ದೊಡ್ಡ score ಹೊಂದಿರುವ class ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ' } },

    { type: 'code', data: {
      filename: 'train_spam.py', headingEn: 'Step 3 — Train on Spam Data', headingKn: 'Step 3 — Spam Data ಮೇಲೆ ತರಬೇತಿ',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "train_docs = [\n    \"win free money now\",\n    \"free lottery ticket winner\",\n    \"claim your prize today free\",\n    \"urgent offer free cash\",\n    \"congratulations you won free\",\n    \"meeting tomorrow at noon\",\n    \"project update attached\",\n    \"can we schedule a call\",\n    \"quarterly report review\",\n    \"lunch on thursday sounds good\",\n    \"team standup notes attached\",\n    \"please review the pull request\",\n]\n\ntrain_labels = [\n    \"spam\", \"spam\", \"spam\", \"spam\", \"spam\",\n    \"ham\", \"ham\", \"ham\", \"ham\", \"ham\", \"ham\", \"ham\",\n]\n\nclassifier = NaiveBayes()\nclassifier.train(train_docs, train_labels)\n\ntest_messages = [\n    \"free money waiting for you\",\n    \"meeting rescheduled to friday\",\n    \"you won a free prize\",\n    \"please review the attached report\",\n]\n\nfor msg in test_messages:\n    print(f\"  '{msg}' -> {classifier.predict(msg)}\")" } },
    { type: 'output', data: { output: "  'free money waiting for you' -> spam\n  'meeting rescheduled to friday' -> ham\n  'you won a free prize' -> spam\n  'please review the attached report' -> ham" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: the classifier correctly separated all four test messages, even though none of them appeared verbatim in training -- "free money waiting for you" and "you won a free prize" share vocabulary with the spam training set (free, won, money), while the other two share vocabulary with the ham set (meeting, review, report)',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: classifier ಎಲ್ಲಾ ನಾಲ್ಕು test messages ಗಳನ್ನೂ ಸರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸಿತು, ಅವುಗಳಲ್ಲಿ ಯಾವುದೂ training ನಲ್ಲಿ ಅಕ್ಷರಶಃ ಕಾಣಿಸಿಕೊಳ್ಳದಿದ್ದರೂ -- "free money waiting for you" ಮತ್ತು "you won a free prize" spam training set (free, won, money) ಜೊತೆ vocabulary ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ, ಇತರ ಎರಡು ham set (meeting, review, report) ಜೊತೆ vocabulary ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: '6. Inspect the Learned Probabilities', textKn: '6. ಕಲಿತ Probabilities ಪರಿಶೀಲಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'top_words.py', headingEn: 'Top Words per Class', headingKn: 'Prati Class ಗೆ Top Words',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def show_top_words(classifier, cls, n=5):\n    vocab_size = len(classifier.vocab)\n    total = classifier.class_word_totals[cls]\n    probs = {}\n    for word in classifier.vocab:\n        count = classifier.word_counts[cls].get(word, 0)\n        probs[word] = (count + classifier.smoothing) / (total + classifier.smoothing * vocab_size)\n    sorted_words = sorted(probs.items(), key=lambda x: x[1], reverse=True)\n    for word, prob in sorted_words[:n]:\n        print(f\"    {word}: {prob:.4f}\")\n\nprint(\"Top spam words:\")\nshow_top_words(classifier, \"spam\")\nprint(\"Top ham words:\")\nshow_top_words(classifier, \"ham\")" } },
    { type: 'output', data: { output: "Top spam words:\n    free: 0.0923\n    offer: 0.0308\n    urgent: 0.0308\n    won: 0.0308\n    claim: 0.0308\nTop ham words:\n    review: 0.0411\n    attached: 0.0411\n    quarterly: 0.0274\n    schedule: 0.0274\n    request: 0.0274" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches the lesson\'s prediction exactly: "free" (0.0923) dominates the spam vocabulary since it appears in most spam training documents, while "review" and "attached" (both 0.0411) dominate ham -- confirming the smoothed MLE counts genuinely learned the intuitive word associations',
      bodyKn: '• Lesson ನ ಭವಿಷ್ಯವಾಣಿಗೆ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: "free" (0.0923) spam vocabulary ಮೇಲೆ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸುತ್ತದೆ ಏಕೆಂದರೆ ಇದೂ ಹೆಚ್ಚಿನ spam training documents ಗಳಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ, ಆದರೆ "review" ಮತ್ತು "attached" (ಎರಡೂ 0.0411) ham ಮೇಲೆ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸುತ್ತವೆ -- smoothed MLE counts ಸಹಜ ಪದ ಸಂಬಂಧಗಳನ್ನೂ ನಿಜವಾಗಿ ಕಲಿತಿವೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: '7. MLE vs MAP', textKn: '7. MLE vs MAP', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• MLE asks: which parameters make my observed data most likely? maximize P(data | parameters)\n• MAP asks: which parameters are most probable after considering both the data and my prior belief? maximize P(parameters | data)\n• Bayes gives P(parameters|data) ∝ P(data|parameters) × P(parameters), so MAP = Likelihood × Prior',
      bodyKn: '• MLE ಕೇಳುತ್ತದೆ: ಯಾವ parameters ನನ್ನ observed data ಅನ್ನೂ ಅತಿ ಸಂಭವನೀಯಗೊಳಿಸುತ್ತವೆ? maximize P(data | parameters)\n• MAP ಕೇಳುತ್ತದೆ: data ಮತ್ತು ನನ್ನ prior belief ಎರಡನ್ನೂ ಪರಿಗಣಿಸಿದ ನಂತರ ಯಾವ parameters ಅತಿ ಸಂಭವನೀಯ? maximize P(parameters | data)\n• Bayes P(parameters|data) ∝ P(data|parameters) × P(parameters) ನೀಡುತ್ತದೆ, ಆದ್ದರಿಂದ MAP = Likelihood × Prior' } },

    { type: 'heading', data: { textEn: '8. MAP and Regularization', textKn: '8. MAP ಮತ್ತು Regularization', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Suppose we believe model weights should generally be small -- we can encode that belief using a Gaussian prior: weights ~ Gaussian\n• The resulting MAP optimization introduces a penalty on large weights, equivalent to L2 regularization: Gaussian prior → MAP estimation → L2 regularization\n• Similarly, a Laplace prior leads to L1 regularization -- so regularization can be interpreted probabilistically',
      bodyKn: '• Model weights ಸಾಮಾನ್ಯವಾಗಿ ಚಿಕ್ಕದಾಗಿರಬೇಕು ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ ಎಂದು ಭಾವಿಸಿ -- ನಾವು ಆ ನಂಬಿಕೆಯನ್ನೂ ಒಂದು Gaussian prior ಬಳಸಿ encode ಮಾಡಬಹುದು: weights ~ Gaussian\n• ಫಲಿತಾಂಶ MAP optimization ದೊಡ್ಡ weights ಮೇಲೆ ಒಂದು penalty ಪರಿಚಯಿಸುತ್ತದೆ, L2 regularization ಗೆ ಸಮಾನ: Gaussian prior → MAP estimation → L2 regularization\n• ಅದೇ ರೀತಿ, ಒಂದು Laplace prior L1 regularization ಗೆ ಕಾರಣವಾಗುತ್ತದೆ -- ಆದ್ದರಿಂದ regularization ಅನ್ನೂ probabilistically ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು' } },
    { type: 'table', data: { captionEn: 'MLE vs MAP', captionKn: 'MLE vs MAP',
      rows: 'Estimation|Optimizes|ML Equivalent\nMLE|P(data\\|params)|Unregularized training\nMAP|P(data\\|params)P(params)|Regularized training' } },

    { type: 'heading', data: { textEn: '9. Bayesian vs Frequentist', textKn: '9. Bayesian vs Frequentist', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Frequentist: parameters are fixed but unknown. Question: if I repeated the experiment many times, what would happen?\n• Bayesian: parameters have a probability distribution representing uncertainty. Question: given what I observed, what should I believe about the parameters?',
      bodyKn: '• Frequentist: parameters ಸ್ಥಿರ ಆದರೆ ಅಜ್ಞಾತ. ಪ್ರಶ್ನೆ: ನಾನು ಪ್ರಯೋಗ ಅನೇಕ ಬಾರಿ ಪುನರಾವರ್ತಿಸಿದರೆ, ಏನಾಗುತ್ತದೆ?\n• Bayesian: parameters uncertainty ಪ್ರತಿನಿಧಿಸುವ ಒಂದು probability distribution ಹೊಂದಿವೆ. ಪ್ರಶ್ನೆ: ನಾನು ಗಮನಿಸಿದ್ದನ್ನೂ ಆಧರಿಸಿ, parameters ಬಗ್ಗೆ ನಾನು ಏನೂ ನಂಬಬೇಕು?' } },
    { type: 'table', data: { captionEn: 'Practical Difference', captionKn: 'ಪ್ರಾಯೋಗಿಕ ವ್ಯತ್ಯಾಸ',
      rows: 'Aspect|Frequentist|Bayesian\nOutput|Point estimate|Distribution\nUncertainty|Confidence intervals|Credible intervals\nSmall data|Can overfit|Prior can regularize\nComputation|Usually faster|Often more expensive\nPrior knowledge|Not explicitly incorporated|Explicitly incorporated' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Most production ML uses frequentist-style optimization: SGD, Adam, point estimates. Bayesian approaches become particularly valuable when data is scarce, uncertainty matters, or decisions are safety-critical',
      bodyKn: '• ಹೆಚ್ಚಿನ production ML frequentist-style optimization ಬಳಸುತ್ತದೆ: SGD, Adam, point estimates. Data ಕೊರತೆಯಿದ್ದಾಗ, uncertainty ಮುಖ್ಯವಾಗಿದ್ದಾಗ, ಅಥವಾ ನಿರ್ಧಾರಗಳು safety-critical ಆಗಿದ್ದಾಗ Bayesian approaches ವಿಶೇಷವಾಗಿ ಮೌಲ್ಯಯುತವಾಗುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Use It', textKn: 'Use It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'sklearn_naive_bayes.py', headingEn: 'scikit-learn Cross-Check', headingKn: 'scikit-learn Cross-Check',
      descEn: 'Genuinely executed below on the identical training/test data.', descKn: 'ಒಂದೇ training/test data ಮೇಲೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "from sklearn.feature_extraction.text import CountVectorizer\nfrom sklearn.naive_bayes import MultinomialNB\n\nvectorizer = CountVectorizer()\nX_train = vectorizer.fit_transform(train_docs)\n\nclf = MultinomialNB()\nclf.fit(X_train, train_labels)\n\nX_test = vectorizer.transform(test_messages)\npredictions = clf.predict(X_test)\n\nfor msg, pred in zip(test_messages, predictions):\n    print(f\"  '{msg}' -> {pred}\")" } },
    { type: 'output', data: { output: "  'free money waiting for you' -> spam\n  'meeting rescheduled to friday' -> ham\n  'you won a free prize' -> spam\n  'please review the attached report' -> ham" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run: scikit-learn\'s MultinomialNB produced the exact same four predictions as this lesson\'s from-scratch NaiveBayes class, on the identical training and test data\n• Your implementation (count words → estimate probabilities → smooth → log probabilities → choose highest class) and scikit-learn (CountVectorizer → MultinomialNB) are the same fundamental algorithm -- the library simply provides optimized and tested implementations',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: scikit-learn ನ MultinomialNB ಒಂದೇ training ಮತ್ತು test data ಮೇಲೆ ಈ lesson ನ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ NaiveBayes class ಗೆ ನಿಖರ ಅದೇ ನಾಲ್ಕು predictions ಉತ್ಪಾದಿಸಿತು\n• ನಿಮ್ಮ implementation (words ಎಣಿಸಿ → probabilities ಅಂದಾಜಿಸಿ → smooth → log probabilities → ಅತಿ ಹೆಚ್ಚಿನ class ಆಯ್ಕೆ ಮಾಡಿ) ಮತ್ತು scikit-learn (CountVectorizer → MultinomialNB) ಒಂದೇ ಮೂಲಭೂತ algorithm -- library ಕೇವಲ ಆಪ್ಟಿಮೈಸ್ಡ್ ಮತ್ತು ಪರೀಕ್ಷಿಸಿದ implementations ಒದಗಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Part 2 — What You Built', headingKn: 'Part 2 — ನೀವು ಏನೂ ನಿರ್ಮಿಸಿದ್ದೀರಿ',
      bodyEn: '• A complete Naive Bayes classifier: Training documents → Count classes → Count words → MLE → Laplace smoothing → Log probabilities → Bayesian class scoring → Predicted class\n• Genuinely cross-checked against scikit-learn\'s MultinomialNB, with all four test predictions matching exactly\n• Part 3 moves from a one-shot classifier to sequential Bayesian updating -- where posteriors become priors as new data continuously arrives',
      bodyKn: '• ಒಂದು ಸಂಪೂರ್ಣ Naive Bayes classifier: Training documents → Count classes → Count words → MLE → Laplace smoothing → Log probabilities → Bayesian class scoring → Predicted class\n• scikit-learn ನ MultinomialNB ವಿರುದ್ಧ ನಿಜವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ, ಎಲ್ಲಾ ನಾಲ್ಕು test predictions ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• Part 3 ಒಂದು one-shot classifier ಇಂದ sequential Bayesian updating ಗೆ ಚಲಿಸುತ್ತದೆ -- ಅಲ್ಲಿ ಹೊಸ data ನಿರಂತರವಾಗಿ ಬಂದಂತೆ posteriors priors ಆಗುತ್ತವೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does Naive Bayes multiply P(feature_i|class) across features instead of modeling their true joint dependence?', qKn: 'Naive Bayes features ಗಳ ನಿಜ joint dependence ಮಾಡೆಲ್ ಮಾಡುವ ಬದಲಿಗೆ features ಗಳಾದ್ಯಂತ P(feature_i|class) ಅನ್ನೂ ಏಕೆ ಗುಣಿಸುತ್ತದೆ?',
        opts: ['Because features are always truly independent', 'It assumes conditional independence given the class as a simplification -- imperfect, but sufficient since the classifier mainly needs to rank classes correctly', 'Because multiplication is faster than addition', 'It does not use multiplication at all'], correct: 1,
        optsKn: ['ಏಕೆಂದರೆ features ಯಾವಾಗಲೂ ನಿಜವಾಗಿ ಸ್ವತಂತ್ರ', 'ಇದೂ class ಗಿವನ್ conditional independence ಅನ್ನೂ ಒಂದು ಸರಳೀಕರಣವಾಗಿ ಊಹಿಸುತ್ತದೆ -- ಅಪೂರ್ಣ, ಆದರೆ classifier ಗೆ ಮುಖ್ಯವಾಗಿ classes ಗಳನ್ನೂ ಸರಿಯಾಗಿ ರ‍್ಯಾಂಕ್ ಮಾಡುವ ಅಗತ್ಯವಿರುವುದರಿಂದ ಸಾಕಷ್ಟು', 'ಏಕೆಂದರೆ multiplication addition ಗಿಂತ ವೇಗ', 'ಇದೂ multiplication ಬಳಸುವುದೇ ಇಲ್ಲ'] },
      { q: 'What problem does Laplace smoothing solve?', qKn: 'Laplace smoothing ಯಾವ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ?',
        opts: ['It makes training faster', 'It prevents an unseen word from giving a class probability P(word|class)=0, which would zero out the entire product', 'It removes the need for a vocabulary', 'It converts the classifier to a neural network'], correct: 1,
        optsKn: ['ಇದೂ training ವೇಗಗೊಳಿಸುತ್ತದೆ', 'ಇದೂ ಒಂದು ಕಾಣದ ಪದ P(word|class)=0 ನೀಡುವುದನ್ನೂ ತಡೆಯುತ್ತದೆ, ಇದೂ ಸಂಪೂರ್ಣ ಉತ್ಪನ್ನ ಶೂನ್ಯಗೊಳಿಸುತ್ತಿತ್ತು', 'ಇದೂ vocabulary ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ classifier ಅನ್ನೂ ಒಂದು neural network ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
      { q: 'Genuinely cross-checking this lesson\'s from-scratch NaiveBayes against scikit-learn\'s MultinomialNB on the same 4 test messages, what happened?', qKn: 'ಅದೇ 4 test messages ಮೇಲೆ ಈ lesson ನ ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ NaiveBayes ಅನ್ನೂ scikit-learn ನ MultinomialNB ವಿರುದ್ಧ ನಿಜವಾಗಿ ಅಡ್ಡ-ಪರಿಶೀಲಿಸುವುದೂ, ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['scikit-learn disagreed on 2 of 4 messages', 'All four predictions matched exactly, confirming the from-scratch implementation and scikit-learn use the same fundamental algorithm', 'scikit-learn crashed', 'The comparison was not possible'], correct: 1,
        optsKn: ['scikit-learn 4 ರಲ್ಲಿ 2 ಸಂದೇಶಗಳಲ್ಲಿ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿತ್ತು', 'ಎಲ್ಲಾ ನಾಲ್ಕು predictions ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು, ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ implementation ಮತ್ತು scikit-learn ಒಂದೇ ಮೂಲಭೂತ algorithm ಬಳಸುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'scikit-learn ಕ್ರ್ಯಾಶ್ ಆಯಿತು', 'ಹೋಲಿಕೆ ಸಾಧ್ಯವಾಗಲಿಲ್ಲ'] },
      { q: 'What connects a Gaussian prior on model weights (via MAP estimation) to a familiar ML technique?', qKn: 'Model weights ಮೇಲೆ ಒಂದು Gaussian prior (MAP estimation ಮೂಲಕ) ಒಂದು ಪರಿಚಿತ ML technique ಗೆ ಹೇಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ?',
        opts: ['It has no connection to any known technique', 'A Gaussian prior under MAP estimation is mathematically equivalent to L2 regularization', 'It is equivalent to dropout', 'It is equivalent to batch normalization'], correct: 1,
        optsKn: ['ಇದೂ ಯಾವುದೇ ಪರಿಚಿತ technique ಗೆ ಯಾವುದೇ ಸಂಪರ್ಕ ಹೊಂದಿಲ್ಲ', 'MAP estimation ಅಡಿಯಲ್ಲಿ ಒಂದು Gaussian prior ಗಣಿತೀಯವಾಗಿ L2 regularization ಗೆ ಸಮಾನ', 'ಇದೂ dropout ಗೆ ಸಮಾನ', 'ಇದೂ batch normalization ಗೆ ಸಮಾನ'] },
    ] } },
  ],
};
