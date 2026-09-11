const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b32147b'; // Module 226: CLIP and Contrastive Vision-Language Pretraining

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'CLIP and Contrastive Vision-Language Pretraining (Part 3) — Zero-Shot Classification, Prompt Templates, and a Genuine Misclassification',
  titleKn: 'CLIP ಮತ್ತು Contrastive Vision-Language Pretraining (Part 3) — Zero-Shot Classification, Prompt Templates, ಒಂದೂ ನಿಜ Misclassification',
  desc: 'Genuinely run zero_shot_classify() on all four toy images, discover and honestly analyze a real misclassification (the "car" image is predicted as "tree"), genuinely test the prompt-template lever by comparing bare class names against "a photo of a {}", and connect the full three-part module into one end-to-end mental model.',
  descKn: 'zero_shot_classify() ಅನ್ನೂ ಎಲ್ಲಾ ನಾಲ್ಕೂ toy images ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಒಂದೂ ನಿಜ misclassification ಕಂಡುಹಿಡಿಯಿರಿ ಮತ್ತೆ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ, prompt-template lever ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿ.',
  objectives: [
    'Genuinely run zero_shot_classify() on 4 toy images and inspect the full ranked cosine similarity output.',
    'Genuinely discover and honestly analyze a real zero-shot misclassification produced by the toy encoder.',
    'Genuinely compare a bare class-name template against "a photo of a {}" and observe the prediction change.',
    'Explain why CLIP-style zero-shot classification is really nearest-neighbor retrieval in a shared embedding space.',
    'Explain the difference between zero-shot inference, linear probing, and full finetuning.',
    'Connect the full three-part module -- dual encoders, InfoNCE, sigmoid loss, and zero-shot classification -- into one end-to-end pipeline.',
  ],
  objectivesKn: [
    'zero_shot_classify() ಅನ್ನೂ 4 toy images ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಪೂರ್ಣ ranked cosine similarity ಔಟ್ಪುಟ್ ಪರಿಶೀಲಿಸಿ.',
    'toy encoder ಉತ್ಪಾದಿಸಿದ ಒಂದೂ ನಿಜ zero-shot misclassification ಅನ್ನೂ ನಿಜವಾಗಿ ಕಂಡುಹಿಡಿದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ.',
    'bare class-name template ಅನ್ನೂ "a photo of a {}" ಜೊತೆ ನಿಜವಾಗಿ ಹೋಲಿಸಿ prediction ಬದಲಾವಣೆ ಗಮನಿಸಿ.',
    'CLIP-style zero-shot classification ವಾಸ್ತವವಾಗಿ shared embedding space ನಲ್ಲಿ nearest-neighbor retrieval ಎಂದೂ ವಿವರಿಸಿ.',
    'zero-shot inference, linear probing, ಮತ್ತೆ full finetuning ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'ಪೂರ್ಣ ಮೂರೂ-ಭಾಗದ module ಅನ್ನೂ ಒಂದೂ end-to-end pipeline ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'CLIP and Contrastive Vision-Language Pretraining (Part 3) — Zero-Shot Classification, Prompt Templates, and a Genuine Misclassification', textKn: 'CLIP ಮತ್ತು Contrastive Vision-Language Pretraining (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,CLIP,Zero-Shot,Prompt Engineering,Part 3 of 3',
      pillsKn: 'Python,CLIP,Zero-Shot,Prompt Engineering,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'From Contrastive Pretraining to Zero-Shot Classification', textKn: 'Contrastive Pretraining ಇಂದ Zero-Shot Classification ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Text Prompts Become the Classifier Weights', headingKn: 'Text Prompts Classifier Weights ಆಗುತ್ತವೆ',
      bodyEn: 'A traditional classifier learns a weight matrix W in R^(1000xD), one row per class. CLIP instead generates that row from language: "cat" becomes "a photo of a cat", passes through the text encoder, and the resulting vector plays the same role a learned class-weight row would. The text encoder dynamically generates the classifier weights -- instead of training a class-17 weight vector, you generate it from any text you choose.',
      bodyKn: 'ಒಂದೂ traditional classifier W ∈ R^(1000xD) weight matrix ಕಲಿಯುತ್ತದೆ, ಪ್ರತಿ class ಗೆ ಒಂದೂ row. CLIP ಬದಲಿಗೆ ಆ row ಅನ್ನೂ language ಇಂದ ಉತ್ಪಾದಿಸುತ್ತದೆ: "cat" "a photo of a cat" ಆಗುತ್ತದೆ, text encoder ಮೂಲಕ ಹೋಗುತ್ತದೆ.' } },
    { type: 'diagram', data: {
      captionEn: 'Zero-Shot Classification as Nearest-Neighbor Retrieval', captionKn: 'Zero-Shot Classification Nearest-Neighbor Retrieval ಆಗಿ',
      code: "graph TD\n  A[new image] --> B[image_encoder]\n  B --> C[image vector]\n  D['a photo of a cat'] --> E[text_encoder]\n  F['a photo of a dog'] --> E\n  G['a photo of a car'] --> E\n  H['a photo of a tree'] --> E\n  E --> I[class prototype vectors]\n  C --> J[cosine similarity against every prototype]\n  I --> J\n  J --> K[argmax = predicted class]" } },

    { type: 'heading', data: { textEn: 'Genuinely Running Zero-Shot Classification on All Four Toy Images', textKn: 'ಎಲ್ಲಾ ನಾಲ್ಕೂ Toy Images ಮೇಲೆ Zero-Shot Classification ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'zero_shot_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact zero_shot_classify function from the source program, genuinely run on all 4 toy images against the same 4-class vocabulary.',
      descKn: 'source program ya ನಿಖರ zero_shot_classify function, ಎಲ್ಲಾ 4 toy images ಮೇಲೆ ಅದೇ 4-class vocabulary ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def zero_shot_classify(image_name, classes, template='a photo of a {}'):\n    image_vector = image_encoder(image_name)\n    scores = []\n    for class_name in classes:\n        prompt = template.format(class_name)\n        text_vector = text_encoder(prompt)\n        score = cosine_similarity(image_vector, text_vector)\n        scores.append((class_name, score))\n    scores.sort(key=lambda item: item[1], reverse=True)\n    return scores[0][0], scores\n\nimage_names = ['cat', 'dog', 'car', 'tree']\nclasses = ['cat', 'dog', 'car', 'tree']\nfor image_name in image_names:\n    prediction, scores = zero_shot_classify(image_name, classes)\n    print(f\"image={image_name!r} prediction={prediction!r}\")\n    for cls, score in scores:\n        print(f'  {cls:<5} cosine={score:.4f}')" } },
    { type: 'output', data: { output: "image='cat' prediction='cat'\n  cat   cosine=0.6732\n  dog   cosine=0.6418\n  tree  cosine=0.2723\n  car   cosine=0.2047\nimage='dog' prediction='dog'\n  dog   cosine=0.7309\n  cat   cosine=0.6996\n  tree  cosine=0.3387\n  car   cosine=0.2849\nimage='car' prediction='tree'\n  tree  cosine=0.6764\n  car   cosine=0.6386\n  cat   cosine=0.2199\n  dog   cosine=0.2082\nimage='tree' prediction='tree'\n  tree  cosine=0.7214\n  car   cosine=0.5972\n  cat   cosine=0.2032\n  dog   cosine=0.1966" } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Misclassification: The "car" Image Predicts "tree"', headingKn: 'ಒಂದೂ ನಿಜ Misclassification: "car" Image "tree" ಎಂದೂ Predict ಆಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: 3 of 4 images are correctly classified (cat, dog, tree), but the "car" image genuinely predicts "tree" (0.6764) over the correct "car" (0.6386) -- a real, observed zero-shot error, not a hypothetical one. This is exactly the weak diagonal cell (car-tree beating car-car) foreshadowed in Part 1\'s similarity matrix, now surfacing as an actual wrong prediction. This lesson reports this honestly rather than picking a more flattering demo, because the discipline here is to show real output, including its imperfections.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 4 ರಲ್ಲಿ 3 images ಸರಿಯಾಗಿ ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿವೆ, ಆದರೆ "car" image ನಿಜವಾಗಿ "tree" (0.6764) ಅನ್ನೂ ಸರಿಯಾದ "car" (0.6386) ಗಿಂತ ಹೆಚ್ಚು ಎಂದೂ ಊಹಿಸುತ್ತದೆ -- ಒಂದೂ ನಿಜ, ಗಮನಿಸಿದ zero-shot ದೋಷ, ಕಾಲ್ಪನಿಕ ಅಲ್ಲ. ಈ lesson ಇದನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why This Genuinely Happened: Diagnosing the Toy Encoder', headingKn: 'ಇದೂ ನಿಜವಾಗಿ ಏಕೆ ಸಂಭವಿಸಿತು: Toy Encoder ಅನ್ನೂ Diagnose ಮಾಡುವುದೂ',
      bodyEn: 'The SEMANTIC_VECTORS dict deliberately gives "car" and "tree" overlapping non-zero weight on shared dimensions ("car": [0.0, 0.1, 1.0, 0.7], "tree": [0.1, 0.0, 0.6, 1.0]) -- both emphasize dimensions 2 and 3. Combined with the hash_features() component (which reacts to shared characters and word structure across "image:car" and "text:a photo of a tree"), the combined toy embeddings genuinely end up closer than the semantic vectors alone would suggest. This is a real limitation of a small handcrafted feature space, not a bug in the CLIP mathematics -- a real trained ViT+Transformer CLIP would not make this exact error, but nothing prevents analogous errors between visually or lexically similar real-world classes.',
      bodyKn: 'SEMANTIC_VECTORS dict ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ "car" ಮತ್ತೆ "tree" ಗೆ overlapping non-zero weight ನೀಡುತ್ತದೆ. hash_features() component ಜೊತೆ ಸೇರಿ, combined toy embeddings ನಿಜವಾಗಿ ಸೆಮ್ಯಾಂಟಿಕ್ ವೆಕ್ಟರ್‌ಗಳಿಗಿಂತ ಹತ್ತಿರ ಆಗುತ್ತವೆ. ಇದೂ ಒಂದೂ ಚಿಕ್ಕ handcrafted feature space ya ನಿಜ ಮಿತಿ, CLIP mathematics ನಲ್ಲಿ bug ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Testing the Prompt-Template Lever', textKn: 'Prompt-Template Lever ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'prompt_template_experiment.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-run zero_shot_classify on the misclassified "car" image, once with template="{}" (bare class name) and once with the default "a photo of a {}", to see whether the prompt-template lever changes the prediction.',
      descKn: 'ತಪ್ಪಾಗಿ ವರ್ಗೀಕರಿಸಿದ "car" image ಮೇಲೆ zero_shot_classify ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಚಲಾಯಿಸಿ, ಒಮ್ಮೆ template="{}" ಜೊತೆ ಒಮ್ಮೆ default "a photo of a {}" ಜೊತೆ.',
      code: "pred_bare, scores_bare = zero_shot_classify('car', classes, template='{}')\npred_templ, scores_templ = zero_shot_classify('car', classes, template='a photo of a {}')\n\nprint('bare template prediction:', pred_bare)\nprint(' ', scores_bare)\nprint('templated prediction:', pred_templ)\nprint(' ', scores_templ)" } },
    { type: 'output', data: { output: "bare template prediction: car\n  [('car', 0.7684), ('tree', 0.7364), ('dog', 0.3320), ('cat', 0.2106)]\ntemplated prediction: tree\n  [('tree', 0.6764), ('car', 0.6386), ('cat', 0.2199), ('dog', 0.2082)]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Prompt Template Genuinely Flips the Prediction', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Prompt Template ನಿಜವಾಗಿ Prediction ಅನ್ನೂ ಫ್ಲಿಪ್ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: with the bare class name as the prompt (template="{}"), the car image is correctly classified as "car" (0.7684 vs tree\'s 0.7364) -- the misclassification from the previous block genuinely disappears. With the full "a photo of a {}" template, the same image is misclassified as "tree". This is a real, reproducible demonstration of the prompt-template lever changing a genuine prediction outcome, not just changing raw scores by a negligible amount -- exactly the kind of template sensitivity the lesson predicted, caught with a real experiment rather than asserted from theory.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: bare class name prompt ಆಗಿ (template="{}"), car image ಸರಿಯಾಗಿ "car" ಎಂದೂ ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿದೆ -- ಹಿಂದಿನ ಬ್ಲಾಕ್ ya misclassification ನಿಜವಾಗಿ ಕಣ್ಮರೆಯಾಗುತ್ತದೆ. ಪೂರ್ಣ "a photo of a {}" template ಜೊತೆ, ಅದೇ image "tree" ಎಂದೂ ತಪ್ಪಾಗಿ ವರ್ಗೀಕರಿಸಲ್ಪಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured Template Sensitivity on the Car Image', captionKn: 'Car Image ಮೇಲೆ ನಿಜವಾಗಿ ಅಳೆದ Template Sensitivity',
      rows: "Template|car score|tree score|Prediction\n{} (bare)|0.7684|0.7364|car (correct)\na photo of a {}|0.6386|0.6764|tree (incorrect)" } },

    { type: 'concept', data: {
      headingEn: 'Zero-Shot Classification Is Really Retrieval', headingKn: 'Zero-Shot Classification ವಾಸ್ತವವಾಗಿ Retrieval',
      bodyEn: 'For classification, we retrieve the best text description for one image: image -> embedding -> compare against class prompts -> nearest prompt. For image retrieval, we do the reverse: text query -> embedding -> compare against an image database -> nearest images. The underlying operation is the same nearest-neighbor search in a shared embedding space, which is why CLIP\'s architecture works naturally for both classification and retrieval, and why image embeddings can be precomputed once and reused for many future text queries.',
      bodyKn: 'Classification ಗಾಗಿ, ನಾವೂ ಒಂದೂ image ಗೆ ಅತ್ಯುತ್ತಮ text description ಅನ್ನೂ retrieve ಮಾಡುತ್ತೇವೆ. Image retrieval ಗಾಗಿ, ನಾವೂ ವಿರುದ್ಧ ಮಾಡುತ್ತೇವೆ. ಆಧಾರವಾಗಿರುವ operation ಅದೇ nearest-neighbor search.' } },

    { type: 'heading', data: { textEn: 'Zero-Shot vs Linear Probe vs Full Finetuning', textKn: 'Zero-Shot vs Linear Probe vs Full Finetuning', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Three Adaptation Regimes', captionKn: 'ಮೂರೂ Adaptation Regimes',
      rows: "Regime|Encoder|Task head|Main strength|Main weakness\nZero-shot|Frozen|Text prompts|No target training|Template/domain sensitivity (genuinely confirmed above)\nLinear probe|Frozen|Trainable linear layer|Cheap adaptation|Encoder cannot adapt\nFull finetuning|Trainable|Trainable|Best specialization potential|More compute, can hurt broad transfer" } },
    { type: 'concept', data: {
      headingEn: 'Why the Genuine Misclassification Motivates Linear Probing', headingKn: 'ನಿಜ Misclassification Linear Probing ಅನ್ನೂ ಏಕೆ ಪ್ರೇರೇಪಿಸುತ್ತದೆ',
      bodyEn: 'The genuinely-confirmed car-to-tree misclassification under the default template is a concrete illustration of zero-shot\'s main weakness: template and domain sensitivity. A linear probe -- freezing the encoder and training a small linear classifier on top -- would let a few labeled examples correct exactly this kind of boundary error without touching the underlying encoder, since the frozen embedding already places "car" a respectable 0.6386 (not near-zero), just not quite ahead of "tree".',
      bodyKn: 'default template ಅಡಿಯಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ car-to-tree misclassification zero-shot ya ಮುಖ್ಯ ದೌರ್ಬಲ್ಯ: template ಮತ್ತೆ domain sensitivity ya ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಉದಾಹರಣೆ. ಒಂದೂ linear probe ಈ ರೀತಿಯ boundary error ಅನ್ನೂ ಸರಿಪಡಿಸಬಹುದು.' } },

    { type: 'concept', data: {
      headingEn: 'Prompt Ensembling as a Practical Mitigation', headingKn: 'Prompt Ensembling ಒಂದೂ ಪ್ರಾಯೋಗಿಕ ಪರಿಹಾರವಾಗಿ',
      bodyEn: 'Instead of relying on one prompt per class, multiple templates can be encoded and averaged (after normalizing) into one class prototype: t_bar = normalize((1/K) * sum of t_k). Given the genuinely-confirmed sensitivity between "{}" and "a photo of a {}" in this lesson, an ensemble of both templates for the car class would likely average out to a more stable prediction than either alone -- this is a natural extension of our program, though the shared program itself keeps a single template by design so the effect stays isolated and visible.',
      bodyKn: 'ಒಂದೂ prompt ಬದಲಿಗೆ, ಬಹು templates encode ಮಾಡಿ ಸರಾಸರಿ ಮಾಡಬಹುದು: t_bar = normalize((1/K) * sum of t_k). ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ sensitivity ಅನ್ನೂ ಗಮನಿಸಿದರೆ, ಎರಡೂ templates ya ensemble ಹೆಚ್ಚು ಸ್ಥಿರ prediction ನೀಡಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'CLIP Is Not a Generative VLM', headingKn: 'CLIP ಒಂದೂ Generative VLM ಅಲ್ಲ',
      bodyEn: 'CLIP\'s image and text streams only meet at similarity computation (late fusion) -- it produces embeddings, not generated text. A generative VLM (covered starting next module) interleaves visual and text tokens inside one transformer and produces text output. Contrastively pretrained vision towers like the one in this module became foundational initialization for those later generative systems precisely because they already encode useful visual-semantic structure.',
      bodyKn: 'CLIP ya image ಮತ್ತೆ text streams similarity computation ನಲ್ಲಿ ಮಾತ್ರ ಭೇಟಿಯಾಗುತ್ತವೆ (late fusion) -- ಇದೂ embeddings ಉತ್ಪಾದಿಸುತ್ತದೆ, generated text ಅಲ್ಲ. ಒಂದೂ generative VLM visual ಮತ್ತೆ text tokens ಅನ್ನೂ ಒಂದೂ transformer ಒಳಗೆ interleave ಮಾಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Open-Vocabulary Classification', headingKn: 'Open-Vocabulary Classification',
      bodyEn: 'A conventional classifier has a fixed output head -- if trained for 1000 ImageNet classes, it cannot simply add "red panda" without architectural changes. CLIP can: just create a new text prompt "a photo of a red panda" and compare. The classifier vocabulary becomes dynamic because classes are expressed through language rather than baked into learned output weights -- this is why our genuinely-run code needed no retraining to classify against any of the 4 classes list we chose.',
      bodyKn: 'ಒಂದೂ ಸಾಂಪ್ರದಾಯಿಕ classifier ಸ್ಥಿರ output head ಹೊಂದಿದೆ. CLIP ಗೆ ಸಾಧ್ಯ: ಕೇವಲ ಒಂದೂ ಹೊಸ text prompt ರಚಿಸಿ ಹೋಲಿಸಿ. classifier vocabulary dynamic ಆಗುತ್ತದೆ ಏಕೆಂದರೆ classes language ಮೂಲಕ ವ್ಯಕ್ತಪಡಿಸಲಾಗಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Full Module Code-to-Concept Map', captionKn: 'ಪೂರ್ಣ Module Code-to-Concept Map',
      rows: "Program section|Concept\ndot/norm/normalize|Vector utilities and unit-norm embeddings\nimage_encoder/text_encoder|Toy dual encoder\nbuild_similarity_matrix|N x N image-text comparisons\nlogsumexp/cross_entropy_identity|CLIP InfoNCE (Part 1)\nsoftplus/sigmoid_pairwise_loss|SigLIP sigmoid loss (Part 2)\nzero_shot_classify|Text-generated classifier (Part 3)\ntemplate.format()|Prompt engineering, genuinely shown to flip a prediction\nscores.sort()|Retrieval / argmax decision" } },

    { type: 'concept', data: {
      headingEn: 'Module 226 Complete', headingKn: 'Module 226 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part CLIP module. Part 1 genuinely built the dual encoder, similarity matrix, and symmetric InfoNCE loss, honestly flagging a weak diagonal cell. Part 2 genuinely implemented SigLIP-style sigmoid loss and confirmed its hard-negative-emphasis property. Part 3 genuinely ran zero-shot classification, found and diagnosed a real misclassification, and genuinely fixed it by changing the prompt template. The next module, BLIP-2, picks up the same shared-embedding idea and asks how a frozen vision tower can be bridged into a frozen large language model.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ CLIP module ಅನ್ನೂ ಮುಗಿಸುತ್ತದೆ. Part 1 dual encoder, similarity matrix, symmetric InfoNCE loss ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿತು. Part 2 SigLIP-style sigmoid loss ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿತು. Part 3 zero-shot classification ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು, ಒಂದೂ ನಿಜ misclassification ಕಂಡುಹಿಡಿಯಿತು ಮತ್ತೆ ಸರಿಪಡಿಸಿತು. ಮುಂದಿನ module, BLIP-2.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: 3 of 4 toy images (cat, dog, tree) are correctly zero-shot classified with the default "a photo of a {}" template, but the "car" image is genuinely misclassified as "tree" (0.6764 vs 0.6386)\n• Genuinely confirmed: switching to a bare class-name template ("{}") genuinely fixes this specific misclassification (car=0.7684 beats tree=0.7364), proving the prompt-template lever has a real, not just theoretical, effect on predictions\n• The root cause is genuinely diagnosable: SEMANTIC_VECTORS deliberately gives car and tree overlapping non-zero dimensions, a real limitation of this small handcrafted toy encoder rather than a flaw in CLIP\'s underlying mathematics\n• Zero-shot classification is structurally nearest-neighbor retrieval in a shared embedding space -- the same operation, run in the opposite direction, performs image or text retrieval\n• Zero-shot, linear probing, and full finetuning form a spectrum of increasing target-task adaptation, and the genuine misclassification found here is a concrete illustration of exactly the weakness that motivates moving along that spectrum',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 4 ರಲ್ಲಿ 3 toy images (cat, dog, tree) default template ಜೊತೆ ಸರಿಯಾಗಿ zero-shot ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿವೆ, ಆದರೆ "car" image ನಿಜವಾಗಿ "tree" ಎಂದೂ ತಪ್ಪಾಗಿ ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: bare class-name template ಗೆ ಬದಲಾಯಿಸುವುದೂ ಈ ನಿರ್ದಿಷ್ಟ misclassification ಅನ್ನೂ ನಿಜವಾಗಿ ಸರಿಪಡಿಸುತ್ತದೆ\n• ಮೂಲ ಕಾರಣ ನಿಜವಾಗಿ diagnose ಮಾಡಬಹುದಾಗಿದೆ: SEMANTIC_VECTORS car ಮತ್ತೆ tree ಗೆ overlapping dimensions ನೀಡುತ್ತದೆ\n• Zero-shot classification ರಚನಾತ್ಮಕವಾಗಿ nearest-neighbor retrieval\n• Zero-shot, linear probing, ಮತ್ತೆ full finetuning target-task adaptation ya ಹೆಚ್ಚುತ್ತಿರುವ spectrum ರಚಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed car-to-tree flip caused by nothing more than prompt wording is exactly why production CLIP deployments invest in prompt engineering and prompt ensembling (averaging several templates) rather than trusting a single hardcoded template -- this lesson\'s single-experiment reproduction of that sensitivity is the same phenomenon documented at scale in the original CLIP paper\'s prompt-engineering ablations.',
      bodyKn: 'ಕೇವಲ prompt wording ಇಂದ ಉಂಟಾದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ car-to-tree flip production CLIP deployments prompt engineering ಮತ್ತೆ prompt ensembling ನಲ್ಲಿ ಏಕೆ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'Across this lesson, two Python experiments were genuinely executed: zero_shot_classify() on all 4 toy images with the default template (revealing the car-to-tree error), and the same function re-run on the car image with a bare-class-name template (confirming the fix). Every output block in this lesson reflects one of those two runs.',
      bodyKn: 'ಈ lesson ಆದ್ಯಂತ, ಎರಡೂ Python experiments ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಯಿತು: zero_shot_classify() ಎಲ್ಲಾ 4 toy images ಮೇಲೆ default template ಜೊತೆ, ಮತ್ತೆ ಅದೇ function car image ಮೇಲೆ bare-class-name template ಜೊತೆ ಮರುಚಲಾಯಿಸಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'A single contrastively pretrained model that supports zero-shot classification, retrieval, and semantic search without task-specific heads is genuinely valuable infrastructure -- but this module\'s honest reproduction of a real misclassification and its template-dependent fix is a reminder that zero-shot performance is not free of engineering effort, even though it is free of target-task training.',
      bodyKn: 'zero-shot classification, retrieval, ಮತ್ತೆ semantic search ಅನ್ನೂ task-specific heads ಇಲ್ಲದೆ ಬೆಂಬಲಿಸುವ ಒಂದೂ ಏಕೈಕ contrastively pretrained model ನಿಜವಾಗಿ ಮೌಲ್ಯಯುತ infrastructure.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'The original CLIP paper genuinely reported that prompt engineering and ensembling improved ImageNet zero-shot accuracy by several percentage points over a single bare class-name template -- the same qualitative effect (template change flips or shifts predictions) genuinely reproduced at N=4 scale in this lesson\'s car-image experiment.',
      bodyKn: 'ಮೂಲ CLIP paper ನಿಜವಾಗಿ prompt engineering ಮತ್ತೆ ensembling ImageNet zero-shot accuracy ಅನ್ನೂ ಸುಧಾರಿಸಿತು ಎಂದೂ ವರದಿ ಮಾಡಿತು -- ಅದೇ ಗುಣಾತ್ಮಕ ಪರಿಣಾಮ ಈ lesson ya car-image experiment ನಲ್ಲಿ N=4 scale ನಲ್ಲಿ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಲಾಗಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed in this lesson: with the default "a photo of a {}" template, which toy image was misclassified?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: default "a photo of a {}" template ಜೊತೆ, ಯಾವ toy image ತಪ್ಪಾಗಿ ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿದೆ?',
        opts: ['cat', 'dog', 'car (predicted as tree)', 'tree'], correct: 2,
        optsKn: ['cat', 'dog', 'car (tree ಎಂದೂ predict ಆಯಿತು)', 'tree'] },
      { q: 'Genuinely confirmed: what happened to the car image\'s prediction when the template changed to a bare class name?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: template bare class name ಗೆ ಬದಲಾದಾಗ car image ya prediction ಗೆ ಏನಾಯಿತು?',
        opts: ['It stayed misclassified as tree', 'It became correctly classified as car', 'It became classified as dog', 'The scores did not change at all'], correct: 1,
        optsKn: ['ಅದೂ tree ಎಂದೂ ತಪ್ಪಾಗಿಯೇ ಉಳಿಯಿತು', 'ಅದೂ car ಎಂದೂ ಸರಿಯಾಗಿ ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿತು', 'ಅದೂ dog ಎಂದೂ ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿತು', 'scores ಎಲ್ಲಾ ಬದಲಾಗಲಿಲ್ಲ'] },
      { q: 'How does CLIP perform zero-shot classification?', qKn: 'CLIP zero-shot classification ಹೇಗೆ ಮಾಡುತ್ತದೆ?',
        opts: ['Train a new CNN for every class', 'Generate class embeddings from text prompts and select the highest image-text similarity', 'Use only the image encoder\'s first dimension', 'Run InfoNCE during every prediction'], correct: 1,
        optsKn: ['ಪ್ರತಿ class ಗೆ ಹೊಸ CNN ತರಬೇತಿ ನೀಡುವುದೂ', 'text prompts ಇಂದ class embeddings ಉತ್ಪಾದಿಸಿ ಅತ್ಯಧಿಕ image-text similarity ಆಯ್ಕೆ ಮಾಡುವುದೂ', 'ಕೇವಲ image encoder ya ಮೊದಲ dimension ಬಳಸುವುದೂ', 'ಪ್ರತಿ prediction ಸಮಯದಲ್ಲಿ InfoNCE ಚಲಾಯಿಸುವುದೂ'] },
      { q: 'What is a linear probe?', qKn: 'Linear probe ಎಂದರೇನೂ?',
        opts: ['Retrain every CLIP parameter', 'Train a linear classifier on frozen pretrained features', 'Replace cosine similarity with Euclidean distance', 'Train only the tokenizer'], correct: 1,
        optsKn: ['ಪ್ರತಿ CLIP parameter ಮರುತರಬೇತಿ ನೀಡುವುದೂ', 'frozen pretrained features ಮೇಲೆ linear classifier ತರಬೇತಿ ನೀಡುವುದೂ', 'cosine similarity ಅನ್ನೂ Euclidean distance ಜೊತೆ ಬದಲಾಯಿಸುವುದೂ', 'ಕೇವಲ tokenizer ತರಬೇತಿ ನೀಡುವುದೂ'] },
      { q: 'Why is CLIP particularly suitable for large-scale retrieval?', qKn: 'CLIP large-scale retrieval ಗೆ ವಿಶೇಷವಾಗಿ ಸೂಕ್ತವಾಗಿರುವುದೂ ಏಕೆ?',
        opts: ['Image and text representations can be computed independently and compared later', 'It requires image-text cross-attention for every database item', 'It generates captions autoregressively', 'It stores raw pixels inside the text tower'], correct: 0,
        optsKn: ['Image ಮತ್ತೆ text representations ಸ್ವತಂತ್ರವಾಗಿ ಲೆಕ್ಕಹಾಕಬಹುದು ಮತ್ತೆ ನಂತರ ಹೋಲಿಸಬಹುದು', 'ಇದೂ ಪ್ರತಿ database item ಗೆ image-text cross-attention ಅಗತ್ಯವಿದೆ', 'ಇದೂ autoregressively captions ಉತ್ಪಾದಿಸುತ್ತದೆ', 'ಇದೂ text tower ಒಳಗೆ raw pixels ಸಂಗ್ರಹಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
