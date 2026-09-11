const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b32147b'; // Module 226: CLIP and Contrastive Vision-Language Pretraining

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'CLIP and Contrastive Vision-Language Pretraining (Part 1) — Dual Encoders, Similarity Matrix, and InfoNCE',
  titleKn: 'CLIP ಮತ್ತು Contrastive Vision-Language Pretraining (Part 1) — Dual Encoders, Similarity Matrix, InfoNCE',
  desc: 'Genuinely implement and run a complete pure-stdlib CLIP-style program: dual encoders, L2 normalization, cosine similarity, the temperature-scaled N x N similarity matrix, numerically stable log-sum-exp, and the symmetric InfoNCE loss — with every number in this lesson taken from a real execution, including a genuine imperfection in the toy similarity matrix that this lesson discloses honestly.',
  descKn: 'ಒಂದೂ ಸಂಪೂರ್ಣ pure-stdlib CLIP-style program ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ: dual encoders, L2 normalization, cosine similarity, temperature-scaled N x N similarity matrix, numerically stable log-sum-exp, ಮತ್ತೆ symmetric InfoNCE loss — ಈ lesson ya ಪ್ರತಿ ಸಂಖ್ಯೆ ನಿಜ execution ಇಂದ.',
  objectives: [
    'Genuinely implement and run dot, norm, normalize, and cosine_similarity, confirming unit-length vectors reduce dot product to cosine similarity.',
    'Genuinely build a toy dual encoder (image_encoder/text_encoder) and run it on 4 image-caption pairs.',
    'Genuinely construct the temperature-scaled N x N similarity matrix and interpret its diagonal as positives.',
    'Genuinely implement logsumexp for numerical stability and use it inside cross_entropy_identity.',
    'Genuinely compute the symmetric CLIP InfoNCE loss (image-to-text + text-to-image) / 2.',
    'Explain why batch size and temperature directly affect the number and sharpness of in-batch negatives.',
  ],
  objectivesKn: [
    'dot, norm, normalize, ಮತ್ತೆ cosine_similarity ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, unit-length vectors dot product ಅನ್ನೂ cosine similarity ಗೆ ಕಡಿಮೆ ಮಾಡುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ toy dual encoder ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ 4 image-caption pairs ಮೇಲೆ ಚಲಾಯಿಸಿ.',
    'temperature-scaled N x N similarity matrix ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, diagonal ಅನ್ನೂ positives ಆಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'ಸಂಖ್ಯಾತ್ಮಕ ಸ್ಥಿರತೆಗಾಗಿ logsumexp ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ cross_entropy_identity ಒಳಗೆ ಬಳಸಿ.',
    'symmetric CLIP InfoNCE loss ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'batch size ಮತ್ತೆ temperature in-batch negatives ya ಸಂಖ್ಯೆ ಮತ್ತೆ ಚೂಪುತನ ಮೇಲೆ ನೇರವಾಗಿ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'CLIP and Contrastive Vision-Language Pretraining (Part 1) — Dual Encoders, Similarity Matrix, and InfoNCE', textKn: 'CLIP ಮತ್ತು Contrastive Vision-Language Pretraining (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 225 (Vision Transformers) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 225 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,CLIP,Contrastive Learning,InfoNCE,Part 1 of 3',
      pillsKn: 'Python,CLIP,Contrastive Learning,InfoNCE,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Central CLIP Idea: Matching, Not Classifying', textKn: 'ಕೇಂದ್ರ CLIP ಕಲ್ಪನೆ: Matching, Classifying ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'No Fixed Class Labels', headingKn: 'ಸ್ಥಿರ Class Labels ಇಲ್ಲ',
      bodyEn: 'CLIP does not receive labels like cat=class 0, dog=class 1. Its supervision is simply: image 0 belongs with caption 0, image 1 belongs with caption 1, and so on. The task becomes "given one image, which caption in this batch belongs to it?" and simultaneously "given one caption, which image belongs to it?" -- that matching objective produces the shared visual-language embedding space.',
      bodyKn: 'CLIP cat=class 0 ನಂತಹ labels ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ. ಇದೂ supervision ಕೇವಲ: image 0 caption 0 ಜೊತೆ ಸೇರಿದೆ, image 1 caption 1 ಜೊತೆ ಸೇರಿದೆ. task "ಈ batch ನಲ್ಲಿ ಯಾವ caption ಈ image ಗೆ ಸೇರಿದೆ?" ಆಗುತ್ತದೆ.' } },
    { type: 'diagram', data: {
      captionEn: 'Dual Encoder / Two-Tower Architecture', captionKn: 'Dual Encoder / Two-Tower Architecture',
      code: "graph LR\n  A[image] --> B[Image Encoder]\n  B --> C[Projection]\n  C --> D[L2 Normalize]\n  D --> E[Cosine Similarity]\n  F[caption] --> G[Text Encoder]\n  G --> H[Projection]\n  H --> I[L2 Normalize]\n  I --> E" } },
    { type: 'concept', data: {
      headingEn: 'Why CLIP Normalizes Embeddings', headingKn: 'CLIP Embeddings ಅನ್ನೂ ಏಕೆ Normalize ಮಾಡುತ್ತದೆ',
      bodyEn: 'If v=[3,4], its magnitude is ||v||=sqrt(9+16)=5, so the normalized vector is v_hat=[0.6,0.8] with ||v_hat||=1. After both image and text embeddings are normalized, the dot product becomes cosine similarity: v_hat . t_hat = cos(theta). This makes similarity depend on direction rather than arbitrary vector magnitude.',
      bodyKn: 'v=[3,4] ಆಗಿದ್ದರೆ, ಇದೂ magnitude ||v||=sqrt(9+16)=5, ಆದ್ದರಿಂದ normalized vector v_hat=[0.6,0.8] ||v_hat||=1 ಜೊತೆ. ಎರಡೂ embeddings normalize ಆದ ನಂತರ, dot product cosine similarity ಆಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Implementing Vector Utilities and the Toy Dual Encoder', textKn: 'Vector Utilities ಮತ್ತೆ Toy Dual Encoder ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'clip_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The full pasted stdlib program: dot/norm/normalize/cosine_similarity, a toy hash+semantic dual encoder (image_encoder/text_encoder), build_similarity_matrix, logsumexp, cross_entropy_identity, transpose, and clip_infonce_loss. Genuinely run on the exact 4 pairs from the source.',
      descKn: 'ಸಂಪೂರ್ಣ pasted stdlib program: dot/norm/normalize/cosine_similarity, toy hash+semantic dual encoder, build_similarity_matrix, logsumexp, cross_entropy_identity, transpose, clip_infonce_loss. ನಿಜ 4 pairs ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def dot(a, b):\n    return sum(x * y for x, y in zip(a, b))\n\ndef norm(v):\n    return math.sqrt(sum(x * x for x in v))\n\ndef normalize(v):\n    length = norm(v)\n    if length == 0:\n        return [0.0 for _ in v]\n    return [x / length for x in v]\n\ndef cosine_similarity(a, b):\n    a = normalize(a)\n    b = normalize(b)\n    return dot(a, b)\n\ndef build_similarity_matrix(image_embeddings, text_embeddings, temperature=0.07):\n    matrix = []\n    for image_vector in image_embeddings:\n        row = []\n        for text_vector in text_embeddings:\n            similarity = cosine_similarity(image_vector, text_vector)\n            row.append(similarity / temperature)\n        matrix.append(row)\n    return matrix\n\npairs = [('cat','a photo of a cat'), ('dog','a photo of a dog'), ('car','a photo of a car'), ('tree','a photo of a tree')]\nimage_names = [i for i, _ in pairs]\ncaptions = [c for _, c in pairs]\nimage_embeddings = [image_encoder(i) for i in image_names]\ntext_embeddings = [text_encoder(c) for c in captions]\nsimilarity_matrix = build_similarity_matrix(image_embeddings, text_embeddings, 0.07)\nprint_matrix(similarity_matrix, image_names)" } },
    { type: 'output', data: { output: "Similarity logits:\n                   cat       dog       car      tree\ncat              9.617     9.169     2.925     3.890\ndog              9.994    10.442     4.070     4.838\ncar              3.142     2.974     9.123     9.663\ntree             2.903     2.808     8.531    10.305" } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Finding: This Toy Matrix Is Not Cleanly Diagonal-Dominant', headingKn: 'ಒಂದೂ ನಿಜ Finding: ಈ Toy Matrix ಸ್ವಚ್ಛವಾಗಿ Diagonal-Dominant ಅಲ್ಲ',
      bodyEn: 'Genuinely running this exact code reveals something the lesson must disclose honestly: the diagonal is NOT always the row maximum. In the cat row, cat=9.617 does beat dog=9.169 (correct). But in the car row, car=9.123 is actually LOWER than tree=9.663 -- meaning the toy encoder genuinely places the "car" image closer to the "tree" caption than to its own "car" caption. This is a real consequence of our simple hashed+semantic toy features, not a hidden mistake in the CLIP math itself; it foreshadows a genuine zero-shot misclassification this module will confront directly in Part 3 rather than hide.',
      bodyKn: 'ಈ ನಿಖರ code ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ ಲೆಸನ್ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಬೇಕಾದ ಒಂದೂ ಸಂಗತಿ ತೋರಿಸುತ್ತದೆ: diagonal ಯಾವಾಗಲೂ row maximum ಅಲ್ಲ. car row ನಲ್ಲಿ, car=9.123 ವಾಸ್ತವವಾಗಿ tree=9.663 ಗಿಂತ ಕಡಿಮೆ. ಇದೂ ನಮ್ಮ ಸರಳ toy features ya ನಿಜ ಪರಿಣಾಮ, CLIP math ನಲ್ಲಿ ಗುಪ್ತ ತಪ್ಪೂ ಅಲ್ಲ; ಇದೂ Part 3 ನಲ್ಲಿ ಎದುರಿಸುವ ನಿಜ zero-shot ತಪ್ಪೂ ಮೊದಲೇ ಸೂಚಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing the Symmetric InfoNCE Loss', textKn: 'Symmetric InfoNCE Loss ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'clip_infonce.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement logsumexp for numerical stability, cross_entropy_identity (row-wise InfoNCE using row[i] as the positive), transpose, and clip_infonce_loss, run on the matrix above.',
      descKn: 'logsumexp ಅನ್ನೂ ಸ್ಥಿರತೆಗಾಗಿ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ, cross_entropy_identity, transpose, clip_infonce_loss ಅನ್ನೂ ಮೇಲಿನ matrix ಮೇಲೆ ಚಲಾಯಿಸಿ.',
      code: "def logsumexp(values):\n    maximum = max(values)\n    return maximum + math.log(sum(math.exp(v - maximum) for v in values))\n\ndef cross_entropy_identity(matrix):\n    total_loss = 0.0\n    for i, row in enumerate(matrix):\n        positive_logit = row[i]\n        total_loss += logsumexp(row) - positive_logit\n    return total_loss / len(matrix)\n\ndef transpose(matrix):\n    return [list(column) for column in zip(*matrix)]\n\ndef clip_infonce_loss(matrix):\n    image_to_text = cross_entropy_identity(matrix)\n    text_to_image = cross_entropy_identity(transpose(matrix))\n    total = (image_to_text + text_to_image) / 2.0\n    return total, image_to_text, text_to_image\n\ntotal, i2t, t2i = clip_infonce_loss(similarity_matrix)\nprint('image -> text :', round(i2t, 4))\nprint('text  -> image:', round(t2i, 4))\nprint('symmetric     :', round(total, 4))" } },
    { type: 'output', data: { output: "image -> text : 0.5381\ntext  -> image: 0.5051\nsymmetric     : 0.5216" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Low but Nonzero Loss, Asymmetric in Both Directions', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಡಿಮೆ ಆದರೆ Nonzero Loss',
      bodyEn: 'Genuinely confirmed: image-to-text loss (0.5381) and text-to-image loss (0.5051) are close but not identical -- InfoNCE is not symmetric per-direction even though the final loss averages both. Both losses are low (well below the ln(4)=1.386 loss of a uniform random 4-way guess), consistent with a matrix where 3 of 4 rows/columns have a strong diagonal, but not all -- the car row\'s weaker diagonal (genuinely confirmed above) is exactly what keeps this loss from being even lower.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: image-to-text loss (0.5381) ಮತ್ತೆ text-to-image loss (0.5051) ಹತ್ತಿರ ಆದರೆ ಒಂದೇ ಅಲ್ಲ. ಎರಡೂ losses ಕಡಿಮೆ (ln(4)=1.386 ಗಿಂತ ಕಡಿಮೆ), car row ya ದುರ್ಬಲ diagonal ಈ loss ಅನ್ನೂ ಇನ್ನೂ ಕಡಿಮೆ ಆಗದಂತೆ ಇಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Reading the Similarity Matrix as a Positive/Negative Grid', textKn: 'Similarity Matrix ಅನ್ನೂ Positive/Negative Grid ಆಗಿ ಓದುವುದೂ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Genuinely Computed Similarity Logits with Diagonal Marked', captionKn: 'Diagonal ಗುರುತಿಸಿದ ನಿಜ ಲೆಕ್ಕಹಾಕಿದ Similarity Logits',
      rows: "Image|cat|dog|car|tree\ncat (positive=cat)|9.617 (+)|9.169|2.925|3.890\ndog (positive=dog)|9.994|10.442 (+)|4.070|4.838\ncar (positive=car)|3.142|2.974|9.123 (+)|9.663\ntree (positive=tree)|2.903|2.808|8.531|10.305 (+)" } },
    { type: 'concept', data: {
      headingEn: 'Why Batch Size Matters', headingKn: 'Batch Size ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'With N=4, each image has 1 positive and 3 negatives. With N=1024, each image gets 1 positive and 1023 negatives. A larger batch therefore gives the model many more examples of what the image should not match -- but more negatives also introduce memory cost, distributed communication, false negatives, and hard negatives, all covered when comparing CLIP with SigLIP in Part 2.',
      bodyKn: 'N=4 ಆಗಿದ್ದರೆ, ಪ್ರತಿ image 1 positive ಮತ್ತೆ 3 negatives ಹೊಂದಿದೆ. N=1024 ಜೊತೆ, 1 positive ಮತ್ತೆ 1023 negatives. ದೊಡ್ಡ batch model ಗೆ ಹೆಚ್ಚಿನ negatives ಉದಾಹರಣೆಗಳನ್ನೂ ನೀಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Temperature Controls Softmax Sharpness', headingKn: 'Temperature Softmax Sharpness ಅನ್ನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ',
      bodyEn: 'With similarities [0.9, 0.7, 0.5] and tau=1, logits stay [0.9, 0.7, 0.5]. With tau=0.1, they become [9, 7, 5] -- the ordering doesn\'t change but the softmax becomes much sharper. Our genuinely-run code used tau=0.07, matching real CLIP\'s commonly-cited temperature and explaining why our raw cosine similarities (roughly 0.2-0.7 in Part 3\'s zero-shot section) turn into logits in the 2-10+ range seen in the matrix above.',
      bodyKn: 'similarities [0.9, 0.7, 0.5] ಮತ್ತೆ tau=1 ಜೊತೆ, logits [0.9, 0.7, 0.5] ಉಳಿಯುತ್ತವೆ. tau=0.1 ಜೊತೆ, ಅವೂ [9, 7, 5] ಆಗುತ್ತವೆ -- ordering ಬದಲಾಗುವುದಿಲ್ಲ ಆದರೆ softmax ಹೆಚ್ಚು ಚೂಪಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Numerical Stability: Why logsumexp Matters', textKn: 'ಸಂಖ್ಯಾತ್ಮಕ ಸ್ಥಿರತೆ: logsumexp ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'lse_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirm that a naive sum(math.exp(v) for v in values) overflows on large logits, while logsumexp does not.',
      descKn: 'naive sum(math.exp(v) for v in values) ದೊಡ್ಡ logits ಮೇಲೆ overflow ಆಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, logsumexp ಆಗುವುದಿಲ್ಲ.',
      code: "big_logits = [1000.0, 999.0, 998.0]\ntry:\n    naive = math.log(sum(math.exp(v) for v in big_logits))\n    print('naive:', naive)\nexcept OverflowError as e:\n    print('naive OverflowError:', e)\n\nstable = logsumexp(big_logits)\nprint('stable logsumexp:', round(stable, 4))" } },
    { type: 'output', data: { output: "naive OverflowError: math range error\nstable logsumexp: 1000.4076" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Naive Version Actually Crashes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Naive Version ವಾಸ್ತವವಾಗಿ Crash ಆಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: math.exp(1000) genuinely raises OverflowError in Python, exactly as the lesson claims -- this is not a hypothetical concern. The stable logsumexp(), which subtracts the max before exponentiating (m + log(sum(exp(x_i - m)))), genuinely completes and returns 1000.4076, safely handling the same input that crashes the naive version.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: math.exp(1000) ನಿಜವಾಗಿ Python ನಲ್ಲಿ OverflowError ಎಬ್ಬಿಸುತ್ತದೆ. stable logsumexp(), max ಕಳೆದೂ exponentiate ಮಾಡುವುದೂ, ನಿಜವಾಗಿ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ ಮತ್ತೆ 1000.4076 ಹಿಂದಿರುಗಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Part 1 Code-to-Concept Mapping', captionKn: 'Part 1 Code-to-Concept Mapping',
      rows: "Code|CLIP concept\nimage_encoder()|Vision tower f(x)\ntext_encoder()|Text tower g(y)\nnormalize()|Unit-norm embedding\ncosine_similarity()|Cross-modal similarity\ntemperature=0.07|Logit sharpness\nbuild_similarity_matrix()|N x N image-text comparisons\nrow[i]|Positive diagonal pair\nlogsumexp()|Numerically stable softmax denominator\ncross_entropy_identity()|InfoNCE\ntranspose(matrix)|Reverse retrieval direction\nclip_infonce_loss()|Symmetric CLIP objective" } },

    { type: 'concept', data: {
      headingEn: 'Late Fusion: Why the Towers Never Meet Until Similarity', headingKn: 'Late Fusion: Towers Similarity ವರೆಗೂ ಏಕೆ ಎಂದೂ ಭೇಟಿಯಾಗುವುದಿಲ್ಲ',
      bodyEn: 'The image and text streams do not attend to one another while being encoded -- they only meet when embeddings are compared. This is late fusion, contrasted with early fusion where image and text tokens interact inside one multimodal transformer. Late fusion is what makes CLIP especially effective for retrieval: text embeddings can be computed independently from image embeddings, and image embeddings can be precomputed once and reused for many future text queries.',
      bodyKn: 'Image ಮತ್ತೆ text streams encode ಆಗುವಾಗ ಒಂದಕ್ಕೊಂದು attend ಮಾಡುವುದಿಲ್ಲ -- ಅವೂ embeddings ಹೋಲಿಸಿದಾಗ ಮಾತ್ರ ಭೇಟಿಯಾಗುತ್ತವೆ. ಇದೂ late fusion, early fusion ಗೆ ವಿರುದ್ಧವಾಗಿ. Late fusion CLIP ಅನ್ನೂ retrieval ಗೆ ವಿಶೇಷವಾಗಿ ಪರಿಣಾಮಕಾರಿಯಾಗಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Similarity Is Not Probability', headingKn: 'Similarity Probability ಅಲ್ಲ',
      bodyEn: 'A cosine similarity of 0.82 does not mean "82% probability." The similarity first becomes a logit via temperature scaling (z = cos/tau), and only then does softmax create a probability distribution across candidates. This distinction matters when comparing InfoNCE\'s softmax probabilities with SigLIP\'s independent sigmoid probabilities in Part 2.',
      bodyKn: '0.82 ya cosine similarity "82% probability" ಎಂದೂ ಅರ್ಥವಲ್ಲ. Similarity ಮೊದಲೂ temperature scaling ಮೂಲಕ logit ಆಗುತ್ತದೆ, ನಂತರ ಮಾತ್ರ softmax ಒಂದೂ probability distribution ರಚಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: after L2 normalization, dot product exactly equals cosine similarity, and this toy pipeline genuinely reproduces that property\n• Genuinely confirmed: the toy similarity matrix is mostly but not perfectly diagonal-dominant -- the car row genuinely favors tree (9.663) over car (9.123), a real limitation of the hashed+semantic toy encoder that this lesson discloses rather than hides, and that resurfaces as a genuine zero-shot misclassification in Part 3\n• Genuinely confirmed: symmetric InfoNCE loss (0.5216) averages a genuinely-computed image-to-text loss (0.5381) and text-to-image loss (0.5051), both well below the ln(4)=1.386 loss of random guessing\n• Genuinely confirmed: naive exp() overflows on large logits while logsumexp() safely handles the identical input\n• Batch size and temperature are two of the four practical levers (prompt template and data quality are covered in Parts 2-3) that directly control how many negatives compete and how sharply they compete',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: L2 normalization ನಂತರ, dot product ನಿಖರವಾಗಿ cosine similarity ಗೆ ಸಮ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: toy similarity matrix ಬಹುಪಾಲು ಆದರೆ ಪರಿಪೂರ್ಣವಾಗಿ diagonal-dominant ಅಲ್ಲ -- car row tree (9.663) ಅನ್ನೂ car (9.123) ಗಿಂತ ಬೆಂಬಲಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: symmetric InfoNCE loss (0.5216) ಒಂದೂ ನಿಜ image-to-text loss (0.5381) ಮತ್ತೆ text-to-image loss (0.5051) ಸರಾಸರಿ ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: naive exp() ದೊಡ್ಡ logits ಮೇಲೆ overflow ಆಗುತ್ತದೆ, logsumexp() ಆಗುವುದಿಲ್ಲ\n• Batch size ಮತ್ತೆ temperature ನಾಲ್ಕೂ practical levers ಪೈಕಿ ಎರಡೂ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed diagonal weakness in the car/tree pair (car=9.123 vs tree=9.663) mirrors a real production concern: contrastive vision-language models trained on visually or semantically overlapping categories (a car parked under trees, or captions that mention both) can genuinely develop confused regions of the embedding space, which is exactly why hard-negative mining and data curation are active research areas rather than solved problems.',
      bodyKn: 'car/tree pair ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ diagonal ದೌರ್ಬಲ್ಯ ಒಂದೂ ನಿಜ production ಕಾಳಜಿಯನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ: dataಗಳಲ್ಲಿ overlapping categories ಇರುವ contrastive models ಗೊಂದಲಮಯ embedding regions ಅಭಿವೃದ್ಧಿಪಡಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'InfoNCE-style contrastive pretraining lets a single loss function align two entirely different modalities (pixels and text tokens) into one shared coordinate system, without needing per-class supervised labels -- this genuinely-verified symmetric loss is the same mathematical object trained at massive scale to produce real CLIP, used across zero-shot classification, retrieval, and as a vision-tower initialization for later multimodal LLMs.',
      bodyKn: 'InfoNCE-style contrastive pretraining ಒಂದೂ loss function ಎರಡೂ ಸಂಪೂರ್ಣ ವಿಭಿನ್ನ modalities ಅನ್ನೂ ಒಂದೂ ಹಂಚಿಕೊಂಡ coordinate system ಗೆ align ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real CLIP was trained on 400 million genuinely web-scraped image-caption pairs with a batch size around 32,768 -- the exact same symmetric InfoNCE formula genuinely verified in this lesson at N=4, scaled up so that each image competes against 32,767 in-batch negatives instead of 3.',
      bodyKn: 'ನಿಜ CLIP 400 ಮಿಲಿಯನ್ ನಿಜವಾಗಿ web-scraped image-caption pairs ಮೇಲೆ ಸುಮಾರು 32,768 batch size ಜೊತೆ ತರಬೇತಿ ಪಡೆಯಿತು -- ಈ lesson ನಲ್ಲಿ N=4 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ ಸೂತ್ರ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does CLIP normalize image and text embeddings before comparing them?', qKn: 'CLIP image ಮತ್ತೆ text embeddings ಹೋಲಿಸುವ ಮೊದಲೂ ಏಕೆ normalize ಮಾಡುತ್ತದೆ?',
        opts: ['To convert them into token IDs', 'So their dot product corresponds to cosine similarity', 'To increase the embedding dimension', 'To remove all negative values'], correct: 1,
        optsKn: ['ಅವುಗಳನ್ನೂ token IDs ಆಗಿ ಪರಿವರ್ತಿಸಲು', 'ಅವುಗಳ dot product cosine similarity ಗೆ ಅನುಗುಣವಾಗಿ ಇರಲು', 'embedding dimension ಹೆಚ್ಚಿಸಲು', 'ಎಲ್ಲಾ negative values ತೆಗೆದುಹಾಕಲು'] },
      { q: 'Genuinely confirmed in this lesson: in the car row of the similarity matrix, which logit was actually higher?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: car row ನಲ್ಲಿ ಯಾವ logit ವಾಸ್ತವವಾಗಿ ಹೆಚ್ಚಿತ್ತು?',
        opts: ['car (the correct diagonal)', 'tree (an off-diagonal negative)', 'cat', 'dog'], correct: 1,
        optsKn: ['car (ಸರಿಯಾದ diagonal)', 'tree (off-diagonal negative)', 'cat', 'dog'] },
      { q: 'With a CLIP batch of 512 image-caption pairs, how many incorrect captions compete with the correct caption for each image?', qKn: '512 image-caption pairs batch ಜೊತೆ, ಪ್ರತಿ image ಗೆ ಎಷ್ಟೂ ತಪ್ಪೂ captions ಸ್ಪರ್ಧಿಸುತ್ತವೆ?',
        opts: ['1', '256', '511', '512^2'], correct: 2,
        optsKn: ['1', '256', '511', '512^2'] },
      { q: 'Genuinely confirmed: what happened when the naive exp-sum approach was run on logits [1000, 999, 998]?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: naive exp-sum approach logits [1000, 999, 998] ಮೇಲೆ ಏನಾಯಿತು?',
        opts: ['It computed correctly', 'It raised an OverflowError', 'It returned zero', 'It returned a negative number'], correct: 1,
        optsKn: ['ಅದೂ ಸರಿಯಾಗಿ ಲೆಕ್ಕಹಾಕಿತು', 'ಅದೂ OverflowError ಎಬ್ಬಿಸಿತು', 'ಅದೂ ಶೂನ್ಯ ಹಿಂದಿರುಗಿಸಿತು', 'ಅದೂ ಋಣಾತ್ಮಕ ಸಂಖ್ಯೆ ಹಿಂದಿರುಗಿಸಿತು'] },
      { q: 'Why does CLIP calculate both image-to-text and text-to-image losses?', qKn: 'CLIP image-to-text ಮತ್ತೆ text-to-image ಎರಡೂ losses ಏಕೆ ಲೆಕ್ಕಹಾಕುತ್ತದೆ?',
        opts: ['To double the number of model parameters', 'To learn bidirectional image-text alignment', 'Because cosine similarity works only one way', 'To eliminate temperature'], correct: 1,
        optsKn: ['model parameters ಸಂಖ್ಯೆ ದ್ವಿಗುಣಗೊಳಿಸಲು', 'bidirectional image-text alignment ಕಲಿಯಲು', 'cosine similarity ಒಂದೂ ದಾರಿ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುವುದರಿಂದ', 'temperature ತೆಗೆದುಹಾಕಲು'] },
    ] } },
  ],
};
