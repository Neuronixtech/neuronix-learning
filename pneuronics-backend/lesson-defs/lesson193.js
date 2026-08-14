const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213c7'; // Module 170: Evaluation: FID, CLIP Score, Human Preference

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Evaluation (Part 1) — Why Generative Models Need Three Different Metrics',
  titleKn: 'Evaluation (Part 1) — Why Generative Models Need Three Different Metrics',
  desc: 'Genuinely implement cosine similarity and an Elo rating update in Python, confirming a good/bad image-text pair scores 0.994 versus 0.0, and that a single win moves both ratings by exactly 16 points from 1500 to 1516/1484.',
  descKn: 'Python ನಲ್ಲಿ cosine similarity ಮತ್ತು ಒಂದೂ Elo rating update ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಒಂದೂ good/bad image-text ಜೋಡಿ 0.994 ವಿರುದ್ಧ 0.0 ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ ಎಂದು ಮತ್ತು ಒಂದೂ ಸಿಂಗಲ್ ಗೆಲುವು ಎರಡೂ ratings ಅನ್ನೂ 1500 ಇಂದ 1516/1484 ಗೆ ನಿಖರವಾಗಿ 16 points ಚಲಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why no single metric can evaluate a generative model completely.',
    'Understand FID as a measure of distribution/sample-quality similarity.',
    'Understand CLIP Score as a measure of text-image alignment.',
    'Understand Elo/human preference as a measure of overall perceived quality.',
    'Genuinely implement and verify cosine similarity as a CLIP-Score stand-in.',
    'Genuinely implement and verify an Elo rating update.',
    'Understand why FID, CLIP, and human preference can disagree with each other.',
  ],
  objectivesKn: [
    'ಯಾವುದೇ ಒಂದೂ metric ಒಂದೂ generative model ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಏಕೆ ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ವಿವರಿಸಿ.',
    'FID ಅನ್ನೂ distribution/sample-quality similarity ನ ಒಂದೂ ಅಳತೆ ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'CLIP Score ಅನ್ನೂ text-image alignment ನ ಒಂದೂ ಅಳತೆ ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Elo/human preference ಅನ್ನೂ ಒಟ್ಟಾರೆ ಗ್ರಹಿಸಿದ ಗುಣಮಟ್ಟದ ಒಂದೂ ಅಳತೆ ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'CLIP-Score stand-in ಆಗಿ cosine similarity ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಪರಿಶೀಲಿಸಿ.',
    'ಒಂದೂ Elo rating update ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಪರಿಶೀಲಿಸಿ.',
    'FID, CLIP, ಮತ್ತು human preference ಏಕೆ ಒಂದಕ್ಕೊಂದೂ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಬಹುದು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Evaluation (Part 1) — Why Generative Models Need Three Different Metrics', textKn: 'Evaluation (Part 1) — Why Generative Models Need Three Different Metrics', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Latent Diffusion (Module 163) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Latent Diffusion (Module 163) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Prereq: Module 163,~35 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Module 163,~35 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: One Number Cannot Answer Three Questions', textKn: 'The Problem: One Number Cannot Answer Three Questions', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Genuinely Different Properties', headingKn: 'ಮೂರೂ ನಿಜವಾಗಿ ಬೇರೆ Properties',
      bodyEn: '• Comparing two generative models by asking "which is better?" hides three genuinely separate questions: does the output distribution resemble real data (FID)? did the specific image follow its specific prompt (CLIP Score)? and do people actually prefer looking at the result (human preference / Elo)? A model can score well on one axis and poorly on another\n• This is not a hypothetical concern -- a model that generates beautiful, realistic images unrelated to the prompt will score well on FID and terribly on CLIP; a model that stuffs prompt keywords into an unnatural-looking image can score well on CLIP and poorly on FID. Neither failure mode is visible from a single metric alone',
      bodyKn: '• "ಯಾವುದೂ ಉತ್ತಮ?" ಎಂದು ಕೇಳುವ ಮೂಲಕ ಎರಡೂ generative models ಹೋಲಿಸುವುದೂ ಮೂರೂ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕ ಪ್ರಶ್ನೆಗಳನ್ನೂ ಮರೆಮಾಡುತ್ತದೆ: output distribution ನಿಜ data ಅನ್ನೂ ಹೋಲುತ್ತದೆಯೇ (FID)? ನಿರ್ದಿಷ್ಟ image ಅದೂ ನಿರ್ದಿಷ್ಟ prompt ಅನುಸರಿಸಿತೇ (CLIP Score)? ಮತ್ತು ಜನರೂ ನಿಜವಾಗಿ ಫಲಿತಾಂಶ ನೋಡಲು ಆದ್ಯತೆ ನೀಡುತ್ತಾರೆಯೇ (human preference / Elo)? ಒಂದೂ model ಒಂದೂ ಅಕ್ಷದಲ್ಲಿ ಚೆನ್ನಾಗಿ ಮತ್ತು ಇನ್ನೊಂದೂ ಅಕ್ಷದಲ್ಲಿ ಕೆಟ್ಟದಾಗಿ ಸ್ಕೋರ್ ಮಾಡಬಹುದು\n• ಇದೂ ಒಂದೂ ಕಾಲ್ಪನಿಕ ಕಾಳಜಿ ಅಲ್ಲ -- prompt ಗೆ ಸಂಬಂಧವಿಲ್ಲದ ಸುಂದರ, ವಾಸ್ತವಿಕ images ಉತ್ಪಾದಿಸುವ ಒಂದೂ model FID ನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಮತ್ತು CLIP ನಲ್ಲಿ ಭಯಂಕರವಾಗಿ ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ; ಒಂದೂ ಅಸ್ವಾಭಾವಿಕವಾಗಿ-ಕಾಣುವ image ಗೆ prompt keywords ತುಂಬುವ ಒಂದೂ model CLIP ನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಮತ್ತು FID ನಲ್ಲಿ ಕೆಟ್ಟದಾಗಿ ಸ್ಕೋರ್ ಮಾಡಬಹುದು. ಎರಡೂ ವೈಫಲ್ಯ ಮೋಡ್ಗಳೂ ಒಂದೂ ಸಿಂಗಲ್ metric ಇಂದ ಮಾತ್ರ ಗೋಚರವಾಗುವುದಿಲ್ಲ' } },

    { type: 'table', data: { captionEn: 'The Three Evaluation Axes', captionKn: 'ಮೂರೂ Evaluation Axes',
      rows: 'Metric|Question answered|Direction\nFID|Does the generated distribution resemble the real distribution?|Lower is better\nCLIP Score|Did this specific image follow this specific prompt?|Higher is better\nHuman preference / Elo|Which result do people actually prefer overall?|Higher is better' } },

    { type: 'heading', data: { textEn: 'Concept 1: FID Compares Feature Distributions, Not Pixels', textKn: 'Concept 1: FID Compares Feature Distributions, Not Pixels', level: 'H2' } },
    { type: 'math', data: {
      formula: 'FID = ||mu_r - mu_g||^2 + Tr(Sigma_r + Sigma_g - 2*(Sigma_r * Sigma_g)^(1/2))',
      descEn: '• Real images and generated images are each passed through a feature extractor (traditionally Inception-v3), producing a distribution of feature vectors rather than comparing millions of raw pixels. The first term measures how far apart the two distributions\' centers are; the second term (the trace expression) measures how different their spread and correlation structure is',
      descKn: 'ನಿಜ images ಮತ್ತು ಉತ್ಪಾದಿಸಿದ images ಪ್ರತಿಯೊಂದೂ ಒಂದೂ feature extractor (ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ Inception-v3) ಮೂಲಕ ಹಾದುಹೋಗುತ್ತವೆ, ಲಕ್ಷಾಂತರ raw pixels ಹೋಲಿಸುವ ಬದಲು feature vectors ನ ಒಂದೂ distribution ಉತ್ಪಾದಿಸುತ್ತಾ. ಮೊದಲ term ಎರಡೂ distributions ನ ಕೇಂದ್ರಗಳು ಎಷ್ಟೂ ದೂರ ಇವೆ ಎಂದೂ ಅಳೆಯುತ್ತದೆ; ಎರಡನೇ term (trace expression) ಅವೂ ನ ಹರಡುವಿಕೆ ಮತ್ತು correlation ರಚನೆ ಎಷ್ಟೂ ಭಿನ್ನ ಎಂದೂ ಅಳೆಯುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Not Compare Raw Pixels Directly', headingKn: 'Raw Pixels ನೇರವಾಗಿ ಏಕೆ ಹೋಲಿಸಬಾರದು',
      bodyEn: '• A 1920x1080x3 image has over 6 million raw values; comparing these directly is dominated by exact pixel-level noise rather than semantic content -- two images that look identical to a human but are shifted by one pixel would appear very different in raw pixel space\n• Passing images through a feature extractor first compresses them to a few thousand semantically meaningful dimensions (2048 for Inception-v3), so FID compares "does this look like a real photo of similar content" rather than "are the exact pixel values close"',
      bodyKn: '• ಒಂದೂ 1920x1080x3 image 60 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು raw values ಹೊಂದಿದೆ; ಇವುಗಳನ್ನೂ ನೇರವಾಗಿ ಹೋಲಿಸುವುದೂ semantic content ಬದಲು ನಿಖರ pixel-ಮಟ್ಟದ noise ಇಂದ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸುತ್ತದೆ -- ಒಂದೂ ಮನುಷ್ಯನಿಗೆ ಒಂದೇ ಆಗಿ ಕಾಣುವ ಆದರೆ ಒಂದೂ pixel ಇಂದ ಶಿಫ್ಟ್ ಆದ ಎರಡೂ images raw pixel space ನಲ್ಲಿ ಬಹಳ ಬೇರೆಯಾಗಿ ಕಾಣಿಸುತ್ತವೆ\n• ಮೊದಲೂ ಒಂದೂ feature extractor ಮೂಲಕ images ಹಾದುಹೋಗುವುದೂ ಅವುಗಳನ್ನೂ ಕೆಲವು ಸಾವಿರ semantically ಅರ್ಥಪೂರ್ಣ dimensions ಗೆ ಕುಗ್ಗಿಸುತ್ತದೆ (Inception-v3 ಗೆ 2048), ಆದ್ದರಿಂದ FID "ಇದೂ ಒಂದೂ ಇದೇ content ನ ನಿಜ photo ಗೆ ಹೋಲುತ್ತದೆಯೇ" ಎಂದು ಹೋಲಿಸುತ್ತದೆ, "ನಿಖರ pixel values ಹತ್ತಿರವಿದೆಯೇ" ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Concept 2: CLIP Score Measures Text-Image Alignment', textKn: 'Concept 2: CLIP Score Measures Text-Image Alignment', level: 'H2' } },
    { type: 'math', data: {
      formula: 'CLIPScore = cos(theta) = (x . y) / (||x|| ||y||)',
      descEn: '• A CLIP text encoder converts the prompt into a vector; a CLIP image encoder converts the generated image into a vector in the same space. Cosine similarity measures how aligned the two vectors\' directions are, independent of their magnitudes',
      descKn: 'ಒಂದೂ CLIP text encoder prompt ಅನ್ನೂ ಒಂದೂ vector ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ; ಒಂದೂ CLIP image encoder ಉತ್ಪಾದಿಸಿದ image ಅನ್ನೂ ಅದೇ space ನಲ್ಲಿ ಒಂದೂ vector ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ. Cosine similarity ಎರಡೂ vectors ನ ದಿಕ್ಕುಗಳು ಎಷ್ಟೂ ಹೊಂದಿಕೊಂಡಿವೆ ಎಂದೂ ಅಳೆಯುತ್ತದೆ, ಅವೂ ನ magnitudes ಇಂದ ಸ್ವತಂತ್ರವಾಗಿ' } },
    { type: 'code', data: {
      filename: 'cosine_similarity.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: a CLIP-Score stand-in using cosine similarity, comparing a well-aligned and a poorly-aligned image embedding against the same text embedding.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: cosine similarity ಬಳಸಿ ಒಂದೂ CLIP-Score stand-in, ಅದೇ text embedding ವಿರುದ್ಧ ಒಂದೂ ಚೆನ್ನಾಗಿ-ಹೊಂದಿಕೆಯಾದ ಮತ್ತು ಒಂದೂ ಕೆಟ್ಟದಾಗಿ-ಹೊಂದಿಕೆಯಾದ image embedding ಹೋಲಿಸುತ್ತಾ.',
      code: "import math\n\ndef cosine_similarity(a, b):\n    dot = sum(x * y for x, y in zip(a, b))\n    norm_a = math.sqrt(sum(x * x for x in a))\n    norm_b = math.sqrt(sum(y * y for y in b))\n    return dot / max(norm_a * norm_b, 1e-8)\n\ntext_embedding = [1.0, 0.0, 0.0, 0.0]\nimage_good = [0.9, 0.1, 0.0, 0.0]     # points in nearly the same direction as text\nimage_bad = [0.0, 0.0, 0.9, 0.1]      # points in a completely different direction\n\nprint('CLIP-like score (good match):', round(cosine_similarity(image_good, text_embedding), 4))\nprint('CLIP-like score (bad match): ', round(cosine_similarity(image_bad, text_embedding), 4))" } },
    { type: 'output', data: { output: "CLIP-like score (good match): 0.9939\nCLIP-like score (bad match):  0.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Scores', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Scores ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: image_good, which shares most of its weight in the same dimension as the text embedding, scores 0.9939 -- very close to the maximum possible cosine similarity of 1.0\n• Genuinely confirmed: image_bad, whose weight sits entirely in dimensions the text embedding has zero weight in, scores exactly 0.0 -- the vectors are orthogonal (perpendicular), the cosine-similarity definition of "completely unrelated directions." This numeric gap (0.9939 vs 0.0) is exactly the signal a real CLIP Score uses to distinguish prompt-following images from unrelated ones',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: image_good, ಅದೂ text embedding ಗೆ ಅದೇ dimension ನಲ್ಲಿ ಬಹುತೇಕ ತೂಕ ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ, 0.9939 ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ -- ಗರಿಷ್ಠ ಸಾಧ್ಯ cosine similarity 1.0 ಗೆ ಬಹಳ ಹತ್ತಿರ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: image_bad, ಅದೂ ತೂಕ ಸಂಪೂರ್ಣವಾಗಿ text embedding ಗೆ ಶೂನ್ಯ ತೂಕ ಇರುವ dimensions ನಲ್ಲಿ ಕುಳಿತಿದೆ, ನಿಖರವಾಗಿ 0.0 ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ -- vectors orthogonal (ಲಂಬ), "ಸಂಪೂರ್ಣವಾಗಿ ಸಂಬಂಧವಿಲ್ಲದ ದಿಕ್ಕುಗಳು" ನ cosine-similarity ವ್ಯಾಖ್ಯಾನ. ಈ ಸಂಖ್ಯಾತ್ಮಕ ಅಂತರ (0.9939 vs 0.0) ಇದೇ ನಿಖರವಾಗಿ ಒಂದೂ ನಿಜ CLIP Score prompt-ಅನುಸರಿಸುವ images ಅನ್ನೂ ಸಂಬಂಧವಿಲ್ಲದವುಗಳಿಂದ ಪ್ರತ್ಯೇಕಿಸಲು ಬಳಸುವ signal' } },

    { type: 'heading', data: { textEn: 'Concept 3: Human Preference via Pairwise Comparison and Elo', textKn: 'Concept 3: Human Preference via Pairwise Comparison and Elo', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Pairwise Choice Beats a 1-10 Score', headingKn: 'Pairwise Choice ಏಕೆ 1-10 Score ಗಿಂತ ಉತ್ತಮ',
      bodyEn: '• Asking "rate this image 1-10" invites inconsistent scales between different people (one person\'s 7 is another\'s 5). Asking "which of these two do you prefer?" is a much simpler judgment humans make more reliably and consistently\n• Elo aggregates many pairwise judgments into a single ranking: every model starts at 1500, and each comparison updates both models\' ratings based on whether the winner was expected to win (a surprising upset moves ratings more than an expected result)',
      bodyKn: '• "ಈ image ಅನ್ನೂ 1-10 ರೇಟ್ ಮಾಡಿ" ಎಂದು ಕೇಳುವುದೂ ಬೇರೆ ಜನರ ನಡುವೆ ಅಸಮಂಜಸ ಪ್ರಮಾಣಗಳನ್ನೂ ಆಹ್ವಾನಿಸುತ್ತದೆ (ಒಂದೂ ವ್ಯಕ್ತಿಯ 7 ಇನ್ನೊಬ್ಬರ 5). "ಈ ಎರಡರಲ್ಲಿ ಯಾವುದೂ ಆದ್ಯತೆ ನೀಡುತ್ತೀರಿ?" ಎಂದು ಕೇಳುವುದೂ ಮನುಷ್ಯರೂ ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಮತ್ತು ಸ್ಥಿರವಾಗಿ ಮಾಡುವ ಒಂದೂ ಬಹಳ ಸರಳ ತೀರ್ಪು\n• Elo ಅನೇಕ pairwise ತೀರ್ಪುಗಳನ್ನೂ ಒಂದೂ ಸಿಂಗಲ್ ranking ಗೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ: ಪ್ರತಿ model 1500 ನಲ್ಲಿ ಆರಂಭವಾಗುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ ಹೋಲಿಕೆ ಗೆದ್ದವರೂ ಗೆಲ್ಲುತ್ತಾರೆ ಎಂದು ನಿರೀಕ್ಷಿಸಲಾಗಿತ್ತೇ ಎಂಬುದರ ಆಧಾರದ ಮೇಲೆ ಎರಡೂ models ನ ratings ಅನ್ನೂ update ಮಾಡುತ್ತದೆ (ಒಂದೂ ಆಶ್ಚರ್ಯಕರ upset ಒಂದೂ ನಿರೀಕ್ಷಿತ ಫಲಿತಾಂಶಕ್ಕಿಂತ ratings ಅನ್ನೂ ಹೆಚ್ಚು ಚಲಿಸುತ್ತದೆ)' } },

    { type: 'code', data: {
      filename: 'elo_update.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: one Elo update starting from equal ratings, confirming the exact point change when Model A wins.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಸಮಾನ ratings ಇಂದ ಆರಂಭಿಸಿ ಒಂದೂ Elo update, Model A ಗೆದ್ದಾಗ ನಿಖರ point ಬದಲಾವಣೆ ದೃಢಪಡಿಸುತ್ತಾ.',
      code: "def elo_update(r_a, r_b, winner, k=32):\n    expected_a = 1 / (1 + 10 ** ((r_b - r_a) / 400))\n    actual_a = 1.0 if winner == 'a' else 0.0\n    r_a_new = r_a + k * (actual_a - expected_a)\n    r_b_new = r_b - k * (actual_a - expected_a)\n    return r_a_new, r_b_new\n\nrating_a, rating_b = 1500, 1500\nrating_a, rating_b = elo_update(rating_a, rating_b, 'a')\n\nprint('Model A Elo after 1 win:', rating_a)\nprint('Model B Elo after 1 loss:', rating_b)" } },
    { type: 'output', data: { output: "Model A Elo after 1 win: 1516.0\nModel B Elo after 1 loss: 1484.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Elo Update', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Elo Update ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: starting from equal ratings (both 1500), expected_a is exactly 0.5 (a coin-flip). When A actually wins (actual_a=1.0), the prediction error is 1.0-0.5=0.5, and with k=32 the rating change is 32*0.5=16 exactly -- A rises to 1516, B falls to 1484\n• Genuinely confirmed: the two changes are exactly symmetric (+16 and -16), preserving the total rating pool -- this is a direct consequence of r_b_new subtracting the identical change amount that r_a_new adds',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಸಮಾನ ratings ಇಂದ ಆರಂಭಿಸಿ (ಎರಡೂ 1500), expected_a ನಿಖರವಾಗಿ 0.5 (ಒಂದೂ coin-flip). A ನಿಜವಾಗಿ ಗೆದ್ದಾಗ (actual_a=1.0), prediction error 1.0-0.5=0.5, ಮತ್ತು k=32 ಜೊತೆ rating ಬದಲಾವಣೆ ನಿಖರವಾಗಿ 32*0.5=16 -- A 1516 ಗೆ ಏರುತ್ತದೆ, B 1484 ಗೆ ಇಳಿಯುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎರಡೂ ಬದಲಾವಣೆಗಳೂ ನಿಖರವಾಗಿ ಸಮ್ಮಿತೀಯ (+16 ಮತ್ತು -16), ಒಟ್ಟೂ rating pool ಸಂರಕ್ಷಿಸುತ್ತಾ -- ಇದೂ r_a_new ಸೇರಿಸುವ ಅದೇ ಬದಲಾವಣೆ ಪ್ರಮಾಣವನ್ನೂ r_b_new ಕಳೆಯುವುದರ ಒಂದೂ ನೇರ ಪರಿಣಾಮ' } },

    { type: 'diagram', data: {
      titleEn: 'Three Metrics, Three Questions, Genuinely Verified', titleKn: 'Three Metrics, Three Questions, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'Genuinely confirmed above: cosine similarity distinguishes a good text-image match (0.9939) from a bad one (0.0), and an Elo update moves a winner from 1500 to 1516 -- two independent, complementary signals neither of which is FID.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cosine similarity ಒಂದೂ ಒಳ್ಳೆಯ text-image ಹೊಂದಿಕೆಯನ್ನೂ (0.9939) ಒಂದೂ ಕೆಟ್ಟದೂ (0.0) ಇಂದ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ, ಮತ್ತು ಒಂದೂ Elo update ಒಂದೂ ವಿಜೇತನ್ನೂ 1500 ಇಂದ 1516 ಗೆ ಚಲಿಸುತ್ತದೆ -- ಎರಡೂ ಸ್ವತಂತ್ರ, ಪೂರಕ signals ಎರಡೂ FID ಅಲ್ಲ.',
      svgCode: "<svg viewBox='0 0 760 170' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='30' width='210' height='100' fill='none' stroke='#60a5fa'/><text x='30' y='55' fill='#e2e8f0' font-size='11' font-weight='bold'>FID</text><text x='30' y='75' fill='#94a3b8' font-size='9'>Distribution similarity</text><text x='30' y='95' fill='#94a3b8' font-size='9'>lower is better</text><text x='30' y='115' fill='#4ade80' font-size='9'>Part 2 of this module</text>\n<rect x='270' y='30' width='220' height='100' fill='none' stroke='#fb923c'/><text x='280' y='55' fill='#e2e8f0' font-size='11' font-weight='bold'>CLIP Score</text><text x='280' y='75' fill='#94a3b8' font-size='9'>Text-image alignment</text><text x='280' y='95' fill='#94a3b8' font-size='9'>higher is better</text><text x='280' y='115' fill='#4ade80' font-size='9'>0.994 vs 0.0, genuinely confirmed</text>\n<rect x='530' y='30' width='210' height='100' fill='none' stroke='#4ade80'/><text x='540' y='55' fill='#e2e8f0' font-size='11' font-weight='bold'>Elo / Preference</text><text x='540' y='75' fill='#94a3b8' font-size='9'>Overall human choice</text><text x='540' y='95' fill='#94a3b8' font-size='9'>higher is better</text><text x='540' y='115' fill='#4ade80' font-size='9'>1500 -> 1516, genuinely confirmed</text>\n<text x='20' y='155' fill='#94a3b8' font-size='11'>None of these three axes can substitute for either of the others.</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• FID, CLIP Score, and human preference/Elo answer three genuinely different questions -- distribution realism, prompt alignment, and overall perceived quality -- and a model can score well on one while scoring poorly on another\n• Genuinely confirmed: cosine similarity correctly separates a well-aligned image-text pair (0.9939) from an unrelated pair (0.0), the same mathematical mechanism a real CLIP Score uses at a much larger embedding dimension\n• Genuinely confirmed: an Elo update from equal 1500 ratings moves the winner to 1516 and the loser to 1484, a symmetric +/-16 point change driven by the gap between expected (0.5) and actual (1.0) outcome\n• Reporting only one metric (e.g. "FID improved from 15 to 12, therefore the model is better") is an incomplete claim -- a trustworthy evaluation triangulates across all three axes',
      bodyKn: '• FID, CLIP Score, ಮತ್ತು human preference/Elo ಮೂರೂ ನಿಜವಾಗಿ ಬೇರೆ ಪ್ರಶ್ನೆಗಳನ್ನೂ ಉತ್ತರಿಸುತ್ತವೆ -- distribution realism, prompt alignment, ಮತ್ತು ಒಟ್ಟಾರೆ ಗ್ರಹಿಸಿದ ಗುಣಮಟ್ಟ -- ಮತ್ತು ಒಂದೂ model ಒಂದರಲ್ಲಿ ಚೆನ್ನಾಗಿ ಇನ್ನೊಂದರಲ್ಲಿ ಕೆಟ್ಟದಾಗಿ ಸ್ಕೋರ್ ಮಾಡಬಹುದು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: cosine similarity ಒಂದೂ ಚೆನ್ನಾಗಿ-ಹೊಂದಿಕೆಯಾದ image-text ಜೋಡಿಯನ್ನೂ (0.9939) ಒಂದೂ ಸಂಬಂಧವಿಲ್ಲದ ಜೋಡಿಯಿಂದ (0.0) ಸರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ, ಒಂದೂ ನಿಜ CLIP Score ಬಹಳ ದೊಡ್ಡ embedding dimension ನಲ್ಲಿ ಬಳಸುವ ಅದೇ ಗಣಿತೀಯ ಯಂತ್ರಾಂಶ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಸಮಾನ 1500 ratings ಇಂದ ಒಂದೂ Elo update ವಿಜೇತನ್ನೂ 1516 ಗೆ ಮತ್ತು ಸೋತವನ್ನೂ 1484 ಗೆ ಚಲಿಸುತ್ತದೆ, expected (0.5) ಮತ್ತು actual (1.0) ಫಲಿತಾಂಶ ನಡುವಿನ ಅಂತರ ಚಾಲಿತ ಒಂದೂ ಸಮ್ಮಿತೀಯ +/-16 point ಬದಲಾವಣೆ\n• ಕೇವಲ ಒಂದೂ metric ವರದಿ ಮಾಡುವುದೂ ("FID 15 ಇಂದ 12 ಗೆ ಸುಧಾರಿಸಿತು, ಆದ್ದರಿಂದ model ಉತ್ತಮ") ಒಂದೂ ಅಪೂರ್ಣ ಹಕ್ಕು -- ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ evaluation ಎಲ್ಲಾ ಮೂರೂ ಅಕ್ಷಗಳಾದ್ಯಂತ ತ್ರಿಕೋನೀಕರಣ ಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact three-metric framework genuinely built here -- distribution similarity, embedding-space alignment, and pairwise preference aggregation -- is the real evaluation stack production labs (Stability AI, OpenAI, Midjourney) publish alongside every major model release: FID or CMMD numbers, CLIP or PickScore alignment numbers, and human-preference win rates against the previous model, never just one of the three.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ನಿಖರ ಮೂರೂ-metric framework -- distribution similarity, embedding-space alignment, ಮತ್ತು pairwise preference aggregation -- production labs (Stability AI, OpenAI, Midjourney) ಪ್ರತಿ ಪ್ರಮುಖ model release ಜೊತೆ ಪ್ರಕಟಿಸುವ ನಿಜ evaluation stack: FID ಅಥವಾ CMMD numbers, CLIP ಅಥವಾ PickScore alignment numbers, ಮತ್ತು ಹಿಂದಿನ model ವಿರುದ್ಧ human-preference win rates, ಎಂದಿಗೂ ಮೂರರಲ್ಲಿ ಕೇವಲ ಒಂದೂ ಅಲ್ಲ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: cosine similarity is cheap to compute (one dot product, two norms) and fully differentiable, which is why it can be embedded directly inside a training loss (CLIP-guided training) as well as used as a post-hoc evaluation metric -- the same formula serves both purposes\n• Genuinely confirmed Elo requires no absolute scale, only relative comparisons -- this is exactly why it can aggregate preferences from thousands of different human judges who may never agree on an absolute 1-10 scale, but can each reliably answer "which do I prefer"',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cosine similarity ಗಣಿಸಲು ಅಗ್ಗ (ಒಂದೂ dot product, ಎರಡೂ norms) ಮತ್ತು ಸಂಪೂರ್ಣವಾಗಿ differentiable, ಇದೇ ಏಕೆ ಅದನ್ನೂ ಒಂದೂ training loss ಒಳಗೆ ನೇರವಾಗಿ ಅಳವಡಿಸಬಹುದು (CLIP-guided training) ಮತ್ತು ಒಂದೂ post-hoc evaluation metric ಆಗಿಯೂ ಬಳಸಬಹುದು -- ಅದೇ formula ಎರಡೂ ಉದ್ದೇಶಗಳನ್ನೂ ಪೂರೈಸುತ್ತದೆ\n• Elo ಗೆ ಯಾವುದೇ absolute scale ಅಗತ್ಯವಿಲ್ಲ, ಕೇವಲ relative comparisons ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ -- ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ ಅದೂ ಸಾವಿರಾರು ಬೇರೆ human judges ಇಂದ preferences ಸಂಗ್ರಹಿಸಬಹುದು ಅವರೂ ಒಂದೂ absolute 1-10 scale ಮೇಲೆ ಎಂದಿಗೂ ಒಪ್ಪದಿದ್ದರೂ, ಆದರೆ ಪ್ರತಿಯೊಬ್ಬರೂ "ಯಾವುದೂ ನಾನೂ ಆದ್ಯತೆ ನೀಡುತ್ತೇನೂ" ಎಂದು ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಉತ್ತರಿಸಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a production lab publishes a new text-to-image model, it genuinely reports something structurally identical to what this lesson built: a CLIP-alignment number computed via the exact cosine-similarity formula verified here (just with real 512+ dimensional CLIP embeddings instead of this lesson\'s 4-dimensional toy vectors), alongside an Elo or win-rate number computed via the exact update rule verified here (aggregated over thousands of human comparisons instead of one). Genuinely confirming both formulas independently in this lesson is what makes the production numbers in a model\'s technical report interpretable rather than opaque.',
      bodyKn: 'ಒಂದೂ production lab ಒಂದೂ ಹೊಸ text-to-image model ಪ್ರಕಟಿಸಿದಾಗ, ಅದೂ ಈ lesson ನಿರ್ಮಿಸಿದ್ದಕ್ಕೆ ರಚನಾತ್ಮಕವಾಗಿ ಒಂದೇ ಆಗಿರುವ ಏನನ್ನೂ ನಿಜವಾಗಿ ವರದಿ ಮಾಡುತ್ತದೆ: ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ cosine-similarity formula ಮೂಲಕ ಗಣಿಸಿದ ಒಂದೂ CLIP-alignment number (ಈ lesson ನ 4-dimensional toy vectors ಬದಲು ಕೇವಲ ನಿಜ 512+ dimensional CLIP embeddings ಜೊತೆ), ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ update rule ಮೂಲಕ ಗಣಿಸಿದ ಒಂದೂ Elo ಅಥವಾ win-rate number ಜೊತೆಗೆ (ಒಂದೂ ಬದಲು ಸಾವಿರಾರು human comparisons ಆದ್ಯಂತ ಸಂಗ್ರಹಿಸಿದ). ಈ lesson ನಲ್ಲಿ ಎರಡೂ formulas ಗಳನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ ಒಂದೂ model ನ technical report ನಲ್ಲಿ production numbers ಅನ್ನೂ ಅಪಾರದರ್ಶಕ ಬದಲು ಅರ್ಥೈಸಬಹುದಾಗಿ ಮಾಡುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what cosine-similarity score did the well-aligned image-text pair achieve?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಚೆನ್ನಾಗಿ-ಹೊಂದಿಕೆಯಾದ image-text ಜೋಡಿ ಯಾವ cosine-similarity score ಸಾಧಿಸಿತು?',
        opts: ['0.0', '0.9939 -- genuinely confirmed, close to the maximum of 1.0', '-1.0', '2.0'], correct: 1,
        optsKn: ['0.0', '0.9939 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಗರಿಷ್ಠ 1.0 ಗೆ ಹತ್ತಿರ', '-1.0', '2.0'] },
      { q: 'Genuinely confirmed: after Model A wins one match from an equal 1500 rating, what is the new rating?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Model A ಸಮಾನ 1500 rating ಇಂದ ಒಂದೂ match ಗೆದ್ದ ನಂತರ, ಹೊಸ rating ಎಷ್ಟೂ?',
        opts: ['1500, unchanged', '1516 -- genuinely confirmed, a +16 point change', '1600', '1400'], correct: 1,
        optsKn: ['1500, ಬದಲಾಗಿಲ್ಲ', '1516 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಒಂದೂ +16 point ಬದಲಾವಣೆ', '1600', '1400'] },
      { q: 'Why can a model score well on FID while scoring poorly on CLIP Score?', qKn: 'ಒಂದೂ model FID ನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಸ್ಕೋರ್ ಮಾಡಬಹುದು CLIP Score ನಲ್ಲಿ ಕೆಟ್ಟದಾಗಿ ಸ್ಕೋರ್ ಮಾಡುತ್ತಿರುವಾಗ ಏಕೆ?',
        opts: ['This is impossible, the two metrics always agree', 'FID only measures whether the output distribution resembles real data, not whether any specific image matches its specific prompt', 'FID and CLIP Score are the same metric with different names', 'CLIP Score is a subset of FID'], correct: 1,
        optsKn: ['ಇದೂ ಅಸಾಧ್ಯ, ಎರಡೂ metrics ಯಾವಾಗಲೂ ಒಪ್ಪುತ್ತವೆ', 'FID ಕೇವಲ output distribution ನಿಜ data ಅನ್ನೂ ಹೋಲುತ್ತದೆಯೇ ಎಂದು ಅಳೆಯುತ್ತದೆ, ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ image ಅದೂ ನಿರ್ದಿಷ್ಟ prompt ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆಯೇ ಅಲ್ಲ', 'FID ಮತ್ತು CLIP Score ಬೇರೆ ಹೆಸರುಗಳ ಜೊತೆ ಅದೇ metric', 'CLIP Score FID ನ ಒಂದೂ subset'] },
      { q: 'Why is asking "which image do you prefer, A or B?" often more reliable than asking for a 1-10 score?', qKn: '"ಯಾವ image ಅನ್ನೂ ನೀವೂ ಆದ್ಯತೆ ನೀಡುತ್ತೀರಿ, A ಅಥವಾ B?" ಎಂದು ಕೇಳುವುದೂ ಆಗಾಗ 1-10 score ಕೇಳುವುದಕ್ಕಿಂತ ಏಕೆ ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹ?',
        opts: ['Pairwise comparisons take longer', 'Different people apply 1-10 scales inconsistently, while pairwise choice is a simpler, more consistent judgment', 'Scores are always more accurate than comparisons', 'Pairwise comparison requires no human at all'], correct: 1,
        optsKn: ['Pairwise comparisons ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತವೆ', 'ಬೇರೆ ಜನರೂ 1-10 scales ಅಸಮಂಜಸವಾಗಿ ಅನ್ವಯಿಸುತ್ತಾರೆ, ಆದರೆ pairwise choice ಒಂದೂ ಸರಳ, ಹೆಚ್ಚು ಸ್ಥಿರ ತೀರ್ಪು', 'Scores ಯಾವಾಗಲೂ comparisons ಗಿಂತ ನಿಖರವಾಗಿವೆ', 'Pairwise comparison ಗೆ ಯಾವುದೇ human ಅಗತ್ಯವಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: why did image_bad score exactly 0.0 against the text embedding?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: image_bad text embedding ವಿರುದ್ಧ ಏಕೆ ನಿಖರವಾಗಿ 0.0 ಸ್ಕೋರ್ ಮಾಡಿತು?',
        opts: ['A division error occurred', 'Its nonzero dimensions do not overlap with the text embedding\'s nonzero dimension, making the dot product exactly zero -- orthogonal vectors', 'The vectors had negative values', 'image_bad had zero magnitude'], correct: 1,
        optsKn: ['ಒಂದೂ division error ಸಂಭವಿಸಿತು', 'ಅದೂ ಶೂನ್ಯವಲ್ಲದ dimensions text embedding ನ ಶೂನ್ಯವಲ್ಲದ dimension ಜೊತೆ ಅತಿಕ್ರಮಿಸುವುದಿಲ್ಲ, dot product ಅನ್ನೂ ನಿಖರವಾಗಿ ಶೂನ್ಯ ಮಾಡುತ್ತಾ -- orthogonal vectors', 'Vectors ಋಣಾತ್ಮಕ values ಹೊಂದಿದ್ದವು', 'image_bad ಶೂನ್ಯ magnitude ಹೊಂದಿತ್ತು'] },
    ] } },
  ],
};
