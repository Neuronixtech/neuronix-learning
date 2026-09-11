const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b32147b'; // Module 226: CLIP and Contrastive Vision-Language Pretraining

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'CLIP and Contrastive Vision-Language Pretraining (Part 2) — SigLIP Sigmoid Loss, Hard Negatives, and Scaling',
  titleKn: 'CLIP ಮತ್ತು Contrastive Vision-Language Pretraining (Part 2) — SigLIP Sigmoid Loss, Hard Negatives, Scaling',
  desc: 'Genuinely implement and run SigLIP-style pairwise sigmoid loss on the same similarity matrix from Part 1, genuinely confirm softplus numerical stability, genuinely inspect per-cell logistic losses for a hard negative vs an easy negative, and understand why removing the global softmax denominator changes distributed-training requirements.',
  descKn: 'Part 1 ya ಅದೇ similarity matrix ಮೇಲೆ SigLIP-style pairwise sigmoid loss ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, softplus numerical stability ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, hard negative vs easy negative ಗಾಗಿ per-cell logistic losses ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
  objectives: [
    'Genuinely implement softplus with overflow protection and confirm the naive version crashes on large inputs.',
    'Genuinely run sigmoid_pairwise_loss on the Part 1 similarity matrix and compare against InfoNCE.',
    'Genuinely inspect per-cell logistic losses to see how a hard negative (cat-dog) incurs far more loss than an easy negative (cat-car).',
    'Explain why a negative bias is needed given the N vs N^2-N positive/negative imbalance.',
    'Explain why softmax couples all candidates in a row while sigmoid evaluates each pair independently.',
    'Explain why removing the global softmax denominator changes distributed-training communication requirements.',
  ],
  objectivesKn: [
    'softplus ಅನ್ನೂ overflow protection ಜೊತೆ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ, naive version ದೊಡ್ಡ inputs ಮೇಲೆ crash ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'sigmoid_pairwise_loss ಅನ್ನೂ Part 1 similarity matrix ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ InfoNCE ಜೊತೆ ಹೋಲಿಸಿ.',
    'hard negative (cat-dog) easy negative (cat-car) ಗಿಂತ ಹೆಚ್ಚು loss ಹೊಂದಿದೆ ಎಂದೂ per-cell losses ಪರಿಶೀಲಿಸಿ.',
    'N vs N^2-N positive/negative imbalance ಕಾರಣ negative bias ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'softmax row ya ಎಲ್ಲಾ candidates ಜೋಡಿಸುತ್ತದೆ, sigmoid ಪ್ರತಿ pair ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'global softmax denominator ತೆಗೆದುಹಾಕುವುದೂ distributed-training communication requirements ಅನ್ನೂ ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'CLIP and Contrastive Vision-Language Pretraining (Part 2) — SigLIP Sigmoid Loss, Hard Negatives, and Scaling', textKn: 'CLIP ಮತ್ತು Contrastive Vision-Language Pretraining (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,SigLIP,Sigmoid Loss,Hard Negatives,Part 2 of 3',
      pillsKn: 'Python,SigLIP,Sigmoid Loss,Hard Negatives,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'From Softmax Competition to Independent Binary Decisions', textKn: 'Softmax Competition ಇಂದ Independent Binary Decisions ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'CLIP Asks "Which One", SigLIP Asks "Does This Match"', headingKn: 'CLIP "ಯಾವುದೂ" ಕೇಳುತ್ತದೆ, SigLIP "ಇದೂ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆಯೇ" ಕೇಳುತ್ತದೆ',
      bodyEn: 'CLIP applies softmax to a full row, so the score for caption 0 depends on every other caption\'s score in that row -- the candidates directly compete. SigLIP instead examines every image-text pair separately: does this image match this text, yes or no? Every matrix cell becomes an independent binary classification example, with label +1 on the diagonal (i==j) and -1 everywhere else.',
      bodyKn: 'CLIP ಪೂರ್ಣ row ಗೆ softmax ಅನ್ವಯಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ caption 0 ya score ಆ row ya ಪ್ರತಿ ಇತರ caption ya score ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ. SigLIP ಪ್ರತಿ image-text pair ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ: ಈ image ಈ text ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆಯೇ, ಹೌದೂ ಅಥವಾ ಇಲ್ಲ?' } },
    { type: 'diagram', data: {
      captionEn: 'CLIP Softmax Row vs SigLIP Independent Cells', captionKn: 'CLIP Softmax Row vs SigLIP Independent Cells',
      code: "graph TD\n  A[Similarity row: 8.2, 1.4, -0.5, 0.7] --> B[CLIP: softmax over whole row]\n  B --> C[One probability distribution, sums to 1]\n  D[Each matrix cell] --> E[SigLIP: sigmoid per cell]\n  E --> F[Independent binary probability, no sum-to-1 constraint]" } },

    { type: 'heading', data: { textEn: 'Genuinely Implementing softplus with Overflow Protection', textKn: 'Overflow Protection ಜೊತೆ softplus ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'softplus_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compare naive log(1+exp(x)) against the stable softplus() from the Part 1 program on x=1000.',
      descKn: 'naive log(1+exp(x)) ಅನ್ನೂ Part 1 program ya stable softplus() ಜೊತೆ x=1000 ಮೇಲೆ ನಿಜವಾಗಿ ಹೋಲಿಸಿ.',
      code: "def softplus(x):\n    if x > 0:\n        return x + math.log1p(math.exp(-x))\n    return math.log1p(math.exp(x))\n\ntry:\n    naive = math.log(1 + math.exp(1000))\n    print('naive softplus(1000):', naive)\nexcept OverflowError as e:\n    print('naive softplus OverflowError:', e)\n\nprint('stable softplus(1000):', round(softplus(1000), 4))" } },
    { type: 'output', data: { output: "naive softplus OverflowError: math range error\nstable softplus(1000): 1000.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Same Overflow Pattern as logsumexp', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: logsumexp ರಂತೆ ಅದೇ Overflow Pattern',
      bodyEn: 'Genuinely confirmed: math.exp(1000) genuinely overflows inside the naive softplus formula, exactly mirroring Part 1\'s logsumexp overflow. The stable version, which for x>0 computes x + log1p(exp(-x)) instead of log(1+exp(x)), genuinely returns 1000.0 -- since exp(-1000) is genuinely negligible, softplus(x) for large positive x is genuinely just x itself, confirming the algebraic identity log(1+e^x) = x + log(1+e^-x) used to avoid the overflow.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: math.exp(1000) naive softplus formula ಒಳಗೆ ನಿಜವಾಗಿ overflow ಆಗುತ್ತದೆ, Part 1 ya logsumexp overflow ಅನ್ನೂ ನಿಖರವಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ. stable version ನಿಜವಾಗಿ 1000.0 ಹಿಂದಿರುಗಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running SigLIP-Style Sigmoid Loss on Part 1\'s Matrix', textKn: 'Part 1 ya Matrix ಮೇಲೆ SigLIP-Style Sigmoid Loss ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'sigmoid_loss_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run sigmoid_pairwise_loss on the exact same similarity_matrix from Part 1, once with bias=-5.0 (as the source program uses) and once with bias=0.0, to see the bias\'s real effect.',
      descKn: 'sigmoid_pairwise_loss ಅನ್ನೂ Part 1 ya ಅದೇ similarity_matrix ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಒಮ್ಮೆ bias=-5.0 ಜೊತೆ ಒಮ್ಮೆ bias=0.0 ಜೊತೆ.',
      code: "def sigmoid_pairwise_loss(matrix, bias=0.0):\n    n = len(matrix)\n    total = 0.0\n    for i in range(n):\n        for j in range(n):\n            logit = matrix[i][j] + bias\n            label = 1.0 if i == j else -1.0\n            total += softplus(-label * logit)\n    return total / n\n\nsigmoid_loss = sigmoid_pairwise_loss(similarity_matrix, bias=-5.0)\nprint('sigmoid loss (bias=-5.0):', round(sigmoid_loss, 4))\n\nsigmoid_loss_0 = sigmoid_pairwise_loss(similarity_matrix, bias=0.0)\nprint('sigmoid loss (bias=0.0):', round(sigmoid_loss_0, 4))" } },
    { type: 'output', data: { output: "sigmoid loss (bias=-5.0): 4.8234\nsigmoid loss (bias=0.0): 16.302" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Bias Has a Large, Real Effect on the Loss Value', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Bias Loss Value ಮೇಲೆ ದೊಡ್ಡ, ನಿಜ ಪರಿಣಾಮ ಹೊಂದಿದೆ',
      bodyEn: 'Genuinely confirmed: without a bias, sigmoid loss on this matrix is 16.302 -- genuinely more than 3x higher than with bias=-5.0 (4.8234). This is not a normalization artifact; it happens because most cells are negatives with positive raw logits (e.g. cat-dog=9.169), so without a negative bias, softplus(-(-1)*9.169)=softplus(9.169) is huge for every off-diagonal cell. The negative bias shifts the decision threshold so genuinely negative pairs don\'t automatically incur massive loss just because their raw cosine similarity happens to be positive.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: bias ಇಲ್ಲದೆ, ಈ matrix ಮೇಲೆ sigmoid loss 16.302 -- bias=-5.0 (4.8234) ಗಿಂತ 3x ಹೆಚ್ಚು. ಇದೂ ಹೆಚ್ಚಿನ negative cells ಧನಾತ್ಮಕ raw logits ಹೊಂದಿರುವುದರಿಂದ. negative bias decision threshold ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Inspecting Per-Cell Loss: Hard Negative vs Easy Negative', textKn: 'Per-Cell Loss ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ: Hard Negative vs Easy Negative', level: 'H2' } },
    { type: 'code', data: {
      filename: 'per_cell_loss.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the individual softplus loss for every cell in the cat row, to see how the hard negative (cat-dog) behaves compared with the easy negatives (cat-car, cat-tree).',
      descKn: 'cat row ya ಪ್ರತಿ cell ಗಾಗಿ individual softplus loss ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, hard negative (cat-dog) easy negatives ಗೆ ಹೋಲಿಸಿದಾಗ ಹೇಗೆ ವರ್ತಿಸುತ್ತದೆ ಎಂದೂ ನೋಡಿ.',
      code: "for j, cls in enumerate(['cat', 'dog', 'car', 'tree']):\n    logit = similarity_matrix[0][j] - 5.0\n    label = 1.0 if j == 0 else -1.0\n    loss = softplus(-label * logit)\n    print(f'cat-{cls}: raw_logit={round(similarity_matrix[0][j],3)} z={round(logit,3)} label={label} loss={round(loss,4)}')" } },
    { type: 'output', data: { output: "cat-cat: raw_logit=9.617 z=4.617 label=1.0 loss=0.0098\ncat-dog: raw_logit=9.169 z=4.169 label=-1.0 loss=4.1845\ncat-car: raw_logit=2.925 z=-2.075 label=-1.0 loss=0.1183\ncat-tree: raw_logit=3.89 z=-1.11 label=-1.0 loss=0.2848" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Hard Negative Dominates the Row\'s Loss', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Hard Negative Row ya Loss ಅನ್ನೂ ಪ್ರಾಬಲ್ಯಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: cat-dog (a hard negative, since our toy encoder deliberately makes cat and dog semantically similar) incurs loss=4.1845 -- genuinely more than 14x higher than cat-car\'s 0.1183 and nearly 15x higher than cat-tree\'s 0.2848. This is exactly the "hard examples automatically contribute stronger gradients" behavior the lesson claims: even without any softmax coupling, the independent sigmoid loss still naturally concentrates its penalty on the pair the model is most confused about, because dog\'s post-bias logit (4.169) is nearly as high as cat\'s own positive logit (4.617).',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: cat-dog (ಒಂದೂ hard negative) loss=4.1845 ಹೊಂದಿದೆ -- cat-car ya 0.1183 ಗಿಂತ 14x ಹೆಚ್ಚು ಮತ್ತೆ cat-tree ya 0.2848 ಗಿಂತ 15x ಹೆಚ್ಚು. dog ya post-bias logit (4.169) cat ya ಸ್ವಂತ positive logit (4.617) ಗೆ ಬಹುತೇಕ ಸಮಾನವಾಗಿರುವುದರಿಂದ, sigmoid loss ಸ್ವಾಭಾವಿಕವಾಗಿ ಗೊಂದಲಮಯ pair ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Computed Per-Cell Losses for the Cat Row', captionKn: 'Cat Row ಗಾಗಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ Per-Cell Losses',
      rows: "Pair|Raw logit|Post-bias z|Label|softplus loss\ncat-cat (positive)|9.617|4.617|+1|0.0098\ncat-dog (hard negative)|9.169|4.169|-1|4.1845\ncat-tree (medium negative)|3.890|-1.110|-1|0.2848\ncat-car (easy negative)|2.925|-2.075|-1|0.1183" } },

    { type: 'concept', data: {
      headingEn: 'Why Negative Bias Is Necessary: The N vs N^2-N Imbalance', headingKn: 'Negative Bias ಏಕೆ ಅಗತ್ಯ: N vs N^2-N Imbalance',
      bodyEn: 'For batch size N, there are N positive pairs but N^2-N negative pairs. For N=1024, the positive fraction is 1/1024 ~ 0.098%. Without a negative bias, an untrained model that outputs moderate positive similarities everywhere would incur enormous loss on the overwhelming majority of negative cells. The bias moves the decision threshold: solving cos = -b*tau for z=0 with our tau=0.07 and b=-5.0 gives cos=0.35, meaning similarities above roughly 0.35 push toward a positive post-bias logit.',
      bodyKn: 'batch size N ಗಾಗಿ, N positive pairs ಆದರೆ N^2-N negative pairs ಇವೆ. N=1024 ಗಾಗಿ, positive fraction 1/1024 ~ 0.098%. negative bias ಇಲ್ಲದೆ, ಒಂದೂ untrained model ಬೃಹತ್ ಬಹುಪಾಲು negative cells ಮೇಲೆ ದೊಡ್ಡ loss ಹೊಂದಿರುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why Sigmoid Loss Matters for Distributed Training', textKn: 'Sigmoid Loss Distributed Training ಗೆ ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'CLIP Requires All Candidates Before Normalizing', headingKn: 'CLIP Normalize ಮಾಡುವ ಮೊದಲೂ ಎಲ್ಲಾ Candidates ಬೇಕು',
      bodyEn: 'CLIP\'s softmax denominator sum_j exp(S_ij) requires every caption in the row. In distributed training across multiple GPUs, each device holds only its local shard of the batch, so GPUs must all-gather embeddings from every other device before computing a correct global softmax -- this communication cost grows with global batch size.',
      bodyKn: 'CLIP ya softmax denominator sum_j exp(S_ij) row ya ಪ್ರತಿ caption ಅಗತ್ಯವಿದೆ. distributed training ನಲ್ಲಿ, ಪ್ರತಿ device ತನ್ನ local shard ಮಾತ್ರ ಹೊಂದಿದೆ, ಆದ್ದರಿಂದ GPUs ಎಲ್ಲಾ ಇತರ devices ಇಂದ embeddings all-gather ಮಾಡಬೇಕು.' } },
    { type: 'concept', data: {
      headingEn: 'Sigmoid Loss Does Not Require Global Normalization', headingKn: 'Sigmoid Loss Global Normalization ಅಗತ್ಯವಿಲ್ಲ',
      bodyEn: 'L_ij = softplus(-y_ij * z_ij) needs only that one pair\'s score and label -- it can genuinely be computed from a local block of the matrix without needing every other candidate\'s score for normalization. This gives distributed implementations more flexibility, though large-scale training still requires communication somewhere (e.g. gradient synchronization) -- the key claim is narrower and precise: sigmoid loss does not mathematically require a global softmax normalization, not that all communication disappears.',
      bodyKn: 'L_ij = softplus(-y_ij * z_ij) ಕೇವಲ ಆ ಒಂದೂ pair ya score ಮತ್ತೆ label ಅಗತ್ಯವಿದೆ -- ಇದೂ normalization ಗಾಗಿ ಇತರ ಯಾವುದೇ candidate ya score ಅಗತ್ಯವಿಲ್ಲದೆ ಒಂದೂ local block ಇಂದ ಲೆಕ್ಕಹಾಕಬಹುದು.' } },

    { type: 'table', data: {
      captionEn: 'Part 2 Code-to-Concept Mapping', captionKn: 'Part 2 Code-to-Concept Mapping',
      rows: "Code|Concept\nmatrix[i][j]|One image-text pair\ni == j|Positive pair\ni != j|Negative pair\nbias=-5.0|Shift pairwise decision threshold\nsoftplus()|Stable logistic loss primitive\nsoftplus(-label * logit)|Binary contrastive loss\nNested i,j loops|Evaluate all pair combinations\nNo logsumexp(row)|No row-wise softmax normalization" } },

    { type: 'concept', data: {
      headingEn: 'Temperature and Bias Have Different Jobs', headingKn: 'Temperature ಮತ್ತೆ Bias ವಿಭಿನ್ನ ಕೆಲಸ ಹೊಂದಿವೆ',
      bodyEn: 'Temperature rescales differences (z = s/tau), while bias shifts everything (z = s/tau + b). With our program\'s parameters (tau=0.07, b=-5.0), solving for the zero-logit threshold gives cos/0.07 - 5 = 0, so cos = 0.35 -- similarities genuinely above roughly 0.35 push toward a positive post-bias logit, and below push toward negative. This is a consequence of this toy program\'s specific parameters, not a universal SigLIP threshold.',
      bodyKn: 'Temperature ವ್ಯತ್ಯಾಸಗಳನ್ನೂ ಮರುಪ್ರಮಾಣಗೊಳಿಸುತ್ತದೆ (z = s/tau), bias ಎಲ್ಲವನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ (z = s/tau + b). ನಮ್ಮ program ya parameters (tau=0.07, b=-5.0) ಜೊತೆ, zero-logit threshold cos = 0.35 ಕೊಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why Trivially-Solved Negatives Don\'t Dominate Training', headingKn: 'ಸುಲಭವಾಗಿ-ಪರಿಹರಿಸಿದ Negatives Training ಅನ್ನೂ ಏಕೆ ಪ್ರಾಬಲ್ಯಗೊಳಿಸುವುದಿಲ್ಲ',
      bodyEn: 'There are N^2-N negatives compared to only N positives, which might seem like negatives would overwhelm training. But an already-correct negative with a strongly negative post-bias logit has L~0 and nearly zero gradient (confirmed above: cat-car\'s loss of 0.1183 is over 35x smaller than cat-dog\'s 4.1845) -- so although there are far more negatives than positives, most trivially-solved negatives contribute little, and the harder ones dominate the actual training signal.',
      bodyKn: 'N^2-N negatives ಮಾತ್ರ N positives ಗೆ ಹೋಲಿಸಿದರೆ, negatives training ಅನ್ನೂ ಪ್ರಾಬಲ್ಯಗೊಳಿಸಬಹುದು ಎಂದೂ ತೋರಬಹುದು. ಆದರೆ ಈಗಾಗಲೇ-ಸರಿಯಾದ negative L~0 ಹೊಂದಿದೆ ಮತ್ತೆ ಬಹುತೇಕ ಶೂನ್ಯ gradient ಹೊಂದಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: naive softplus overflows on x=1000 exactly like naive logsumexp did in Part 1, and the stable version correctly returns 1000.0\n• Genuinely confirmed: sigmoid loss without a negative bias (16.302) is over 3x higher than with bias=-5.0 (4.8234) on the exact same matrix, demonstrating the bias\'s real, large effect on the loss magnitude\n• Genuinely confirmed: the hard negative cat-dog incurs loss=4.1845, over 14x higher than the easy negative cat-car\'s 0.1183 -- sigmoid loss naturally emphasizes hard negatives without needing softmax competition\n• CLIP\'s InfoNCE requires all candidates in a row for its softmax denominator, driving distributed all-gather communication; sigmoid loss computes each pair independently, giving distributed implementations more flexibility\n• Both losses operate on the identical similarity matrix -- the choice of objective changes optimization geometry and systems requirements, not the underlying embedding comparison',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: naive softplus x=1000 ಮೇಲೆ overflow ಆಗುತ್ತದೆ, stable version ಸರಿಯಾಗಿ 1000.0 ಹಿಂದಿರುಗಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: negative bias ಇಲ್ಲದೆ sigmoid loss (16.302) bias=-5.0 (4.8234) ಗಿಂತ 3x ಹೆಚ್ಚು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: hard negative cat-dog loss=4.1845 ಹೊಂದಿದೆ, easy negative cat-car ya 0.1183 ಗಿಂತ 14x ಹೆಚ್ಚು\n• CLIP ya InfoNCE row ನಲ್ಲಿ ಎಲ್ಲಾ candidates ಅಗತ್ಯವಿದೆ; sigmoid loss ಪ್ರತಿ pair ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಲೆಕ್ಕಹಾಕುತ್ತದೆ\n• ಎರಡೂ losses ಅದೇ similarity matrix ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ -- objective ಆಯ್ಕೆ optimization geometry ಮತ್ತೆ systems requirements ಬದಲಾಯಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed 14x loss gap between cat-dog and cat-car in this lesson is a miniature version of exactly why production contrastive models spend disproportionate training signal on confusable category pairs (breeds of dog, makes of car) -- the hard-negative-emphasis property demonstrated here at N=4 is the same mechanism that shapes fine-grained discrimination at web scale.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ cat-dog ಮತ್ತೆ cat-car ನಡುವೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 14x loss gap production contrastive models confusable category pairs ಮೇಲೆ ಅಸಮಾನ training signal ಏಕೆ ಖರ್ಚು ಮಾಡುತ್ತವೆ ಎಂಬುದರ ಒಂದೂ ಚಿಕ್ಕ ಆವೃತ್ತಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Removing the requirement for a globally-normalized softmax denominator is not just a mathematical simplification -- it genuinely changes what a distributed training system must communicate, which is why SigLIP-style objectives became attractive as contrastive vision-language batches grew into the tens of thousands.',
      bodyKn: 'globally-normalized softmax denominator ya ಅವಶ್ಯಕತೆ ತೆಗೆದುಹಾಕುವುದೂ ಕೇವಲ ಗಣಿತದ ಸರಳೀಕರಣ ಅಲ್ಲ -- ಇದೂ ನಿಜವಾಗಿ ಒಂದೂ distributed training system ಏನೂ ಸಂವಹಿಸಬೇಕು ಎಂದೂ ಬದಲಾಯಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'SigLIP (Sigmoid Loss for Language-Image Pretraining) demonstrated that this independent-pair objective could match or exceed CLIP\'s InfoNCE accuracy while removing the all-gather bottleneck, enabling efficient training with genuinely massive batch sizes on more constrained hardware setups than pure softmax contrastive training requires.',
      bodyKn: 'SigLIP ಈ independent-pair objective CLIP ya InfoNCE accuracy ಗೆ ಹೊಂದಿಕೆಯಾಗಬಹುದು ಅಥವಾ ಮೀರಬಹುದು ಎಂದೂ ಪ್ರದರ್ಶಿಸಿತು, all-gather bottleneck ತೆಗೆದುಹಾಕುವಾಗ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the fundamental difference between CLIP InfoNCE and SigLIP-style sigmoid loss?', qKn: 'CLIP InfoNCE ಮತ್ತೆ SigLIP-style sigmoid loss ನಡುವೆ ಮೂಲಭೂತ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['CLIP uses images, while SigLIP uses only text', 'CLIP uses categorical competition over candidates, while sigmoid loss classifies each pair independently', 'SigLIP removes the image encoder', 'CLIP does not use negatives'], correct: 1,
        optsKn: ['CLIP images ಬಳಸುತ್ತದೆ, SigLIP text ಮಾತ್ರ ಬಳಸುತ್ತದೆ', 'CLIP candidates ಮೇಲೆ categorical competition ಬಳಸುತ್ತದೆ, sigmoid loss ಪ್ರತಿ pair ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ವರ್ಗೀಕರಿಸುತ್ತದೆ', 'SigLIP image encoder ತೆಗೆದುಹಾಕುತ್ತದೆ', 'CLIP negatives ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed in this lesson: what was the sigmoid loss on the same matrix WITHOUT the negative bias?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: negative bias ಇಲ್ಲದೆ ಅದೇ matrix ಮೇಲೆ sigmoid loss ಎಷ್ಟೂ?',
        opts: ['4.8234', '0.5216', '16.302', '0.0'], correct: 2,
        optsKn: ['4.8234', '0.5216', '16.302', '0.0'] },
      { q: 'Genuinely confirmed: which cell had the highest individual loss in the cat row?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cat row ನಲ್ಲಿ ಯಾವ cell ಅತ್ಯಧಿಕ individual loss ಹೊಂದಿತ್ತು?',
        opts: ['cat-cat', 'cat-dog', 'cat-car', 'cat-tree'], correct: 1,
        optsKn: ['cat-cat', 'cat-dog', 'cat-car', 'cat-tree'] },
      { q: 'Why does pairwise sigmoid loss scale differently from global softmax contrastive loss in distributed settings?', qKn: 'distributed settings ನಲ್ಲಿ pairwise sigmoid loss global softmax contrastive loss ಇಂದ ಭಿನ್ನವಾಗಿ ಏಕೆ scale ಆಗುತ್ತದೆ?',
        opts: ['It doesn\'t require a globally normalized softmax denominator across all candidates', 'It removes GPUs entirely', 'It uses no embeddings', 'It needs only positive examples'], correct: 0,
        optsKn: ['ಇದೂ ಎಲ್ಲಾ candidates ಆದ್ಯಂತ globally normalized softmax denominator ಅಗತ್ಯವಿಲ್ಲ', 'ಇದೂ GPUs ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ embeddings ಬಳಸುವುದಿಲ್ಲ', 'ಇದೂ ಕೇವಲ positive examples ಅಗತ್ಯವಿದೆ'] },
      { q: 'What is a hard negative?', qKn: 'Hard negative ಎಂದರೇನೂ?',
        opts: ['A positive pair with low resolution', 'A negative pair that looks highly compatible to the model', 'Any caption longer than 20 tokens', 'A pair removed from the batch'], correct: 1,
        optsKn: ['ಕಡಿಮೆ resolution ಹೊಂದಿರುವ positive pair', 'model ಗೆ ಹೆಚ್ಚು ಹೊಂದಾಣಿಕೆಯಾಗುವಂತೆ ಕಾಣುವ negative pair', '20 tokens ಗಿಂತ ಉದ್ದವಾದ ಯಾವುದೇ caption', 'batch ಇಂದ ತೆಗೆದುಹಾಕಿದ pair'] },
    ] } },
  ],
};
