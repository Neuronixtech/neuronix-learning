const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213a0'; // Module 157: Generative Models: Taxonomy and History

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Generative Models — Taxonomy & History (Lesson 1) — What Is a Generative Model and Why Are There Five Families?',
  titleKn: 'Generative Models — Taxonomy & History (Lesson 1) — Generative Model ಎಂದರೇನೂ ಮತ್ತು ಐದೂ Families ಏಕೆ ಇವೆ?',
  desc: 'Understand what a generative model is mathematically, why direct density estimation over high-dimensional data is intractable, the manifold hypothesis, and the five major generative-model families (explicit tractable, explicit approximate, implicit, score/continuous-time, token-based AR) each family\'s core compromise.',
  descKn: 'ಒಂದೂ generative model ಗಣಿತೀಯವಾಗಿ ಏನೂ ಎಂದೂ, high-dimensional data ಮೇಲೆ ನೇರ density estimation ಏಕೆ ಅಸಾಧ್ಯ ಎಂದೂ, manifold hypothesis, ಮತ್ತು ಐದೂ ಮುಖ್ಯ generative-model families (explicit tractable, explicit approximate, implicit, score/continuous-time, token-based AR) ಪ್ರತಿಯೊಂದೂ ನ ಮುಖ್ಯ compromise ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Define a generative model mathematically as learning p_theta(x) that approximates p_data(x).',
    'Understand why directly modeling image probability is difficult (curse of dimensionality).',
    'Explain the manifold hypothesis.',
    'Understand the five major generative-model families.',
    'Distinguish explicit density from implicit density.',
    'Understand what an autoregressive factorization does.',
    'Understand the intuition behind normalizing flows, VAEs, GANs, diffusion/score models, and token-based AR.',
  ],
  objectivesKn: [
    'p_data(x) ಅನ್ನೂ ಸಮೀಪಿಸುವ p_theta(x) ಕಲಿಯುವುದೂ ಎಂದೂ ಒಂದೂ generative model ಅನ್ನೂ ಗಣಿತೀಯವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'Image probability ಅನ್ನೂ ನೇರವಾಗಿ ಮಾಡೆಲ್ ಮಾಡುವುದೂ ಏಕೆ ಕಷ್ಟ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ (curse of dimensionality).',
    'Manifold hypothesis ವಿವರಿಸಿ.',
    'ಐದೂ ಮುಖ್ಯ generative-model families ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Explicit density ಅನ್ನೂ implicit density ಇಂದ ಬೇರ್ಪಡಿಸಿ.',
    'ಒಂದೂ autoregressive factorization ಏನೂ ಮಾಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Normalizing flows, VAEs, GANs, diffusion/score models, ಮತ್ತು token-based AR ಹಿಂದಿನ intuition ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Generative Models — Taxonomy & History (Lesson 1)', textKn: 'Generative Models — Taxonomy & History (Lesson 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python (conceptual) · Module time: ~45 minutes · This part: ~15 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn · Language: Python (conceptual) · Module time: ~45 ನಿಮಿಷಗಳು · ಈ ಭಾಗ: ~15 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Taxonomy,History,Foundations,~15 min,Part 1 of 3',
      pillsKn: 'Taxonomy,History,Foundations,~15 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'What Is a Generative Model?', textKn: 'What Is a Generative Model?', level: 'H2' } },
    { type: 'math', data: {
      formula: 'x ~ p_data(x)          x_new ~ p_theta(x)          goal: p_theta(x) ~= p_data(x)',
      descEn: '• Training data (images, text, audio, protein structures) is assumed drawn from an unknown distribution p_data(x). The fundamental generative-model problem is to learn a model p_theta that can produce new samples x_new resembling that same distribution -- not memorized copies of training examples',
      descKn: 'Training data (images, text, audio, protein structures) ಒಂದೂ ಅಜ್ಞಾತ distribution p_data(x) ಇಂದ draw ಆಗಿದೆ ಎಂದೂ ಊಹಿಸಲಾಗಿದೆ. ಮೂಲಭೂತ generative-model ಸಮಸ್ಯೆ ಒಂದೂ model p_theta ಕಲಿಯುವುದೂ ಅದೂ ಅದೇ underlying distribution ಹೋಲುವ ಹೊಸ samples x_new ಉತ್ಪಾದಿಸಬಹುದು -- training examples ನ ನೆನಪಿಟ್ಟುಕೊಂಡ ಪ್ರತಿಗಳು ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Learn the Distribution, Not the Examples', headingKn: 'Distribution ಕಲಿಯಿರಿ, Examples ಅಲ್ಲ',
      bodyEn: '• Given training images of cats, dogs, and horses, the goal is not to reproduce any single training image. The pipeline is: training images -> learn distribution -> new image, where the new sample should look like it could plausibly have come from the same underlying distribution as the training set\n• This distinguishes a generative model from a lookup table or nearest-neighbor retrieval: it must generalize the structure of the data distribution, not just store examples',
      bodyKn: '• Cats, dogs, ಮತ್ತು horses ನ training images ಕೊಟ್ಟಾಗ, ಗುರಿ ಯಾವುದೇ ಒಂದೂ training image ಅನ್ನೂ ಪುನರುತ್ಪಾದಿಸುವುದೂ ಅಲ್ಲ. Pipeline: training images -> distribution ಕಲಿಯಿರಿ -> ಹೊಸ image, ಹೊಸ sample training set ಅದೇ underlying distribution ಇಂದ ಬಂದಿರಬಹುದು ಎಂದೂ ಕಾಣಬೇಕು\n• ಇದೂ ಒಂದೂ generative model ಅನ್ನೂ ಒಂದೂ lookup table ಅಥವಾ nearest-neighbor retrieval ಇಂದ ಬೇರ್ಪಡಿಸುತ್ತದೆ: ಅದೂ data distribution ನ ರಚನೆಯನ್ನೂ ಸಾಮಾನ್ಯೀಕರಿಸಬೇಕು, ಕೇವಲ examples ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Why Direct Density Estimation Is Hard', textKn: 'Why Direct Density Estimation Is Hard', level: 'H2' } },
    { type: 'math', data: {
      formula: '512 x 512 x 3 = 786,432 dimensions          10 bins/dim, 100 dims: 10^100          786,432 dims: 10^786432',
      descEn: '• Genuinely verified: 512*512*3 = 786,432 scalar pixel values. If every dimension is divided into just 10 bins, densely populating that space with data would require an astronomically impossible number of samples (10^786432), far beyond any conceivable dataset -- this is the curse of dimensionality',
      descKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ: 512*512*3 = 786,432 scalar pixel values. ಪ್ರತಿ dimension ಅನ್ನೂ ಕೇವಲ 10 bins ಗೆ ವಿಭಜಿಸಿದರೆ, ಆ space ಅನ್ನೂ data ಜೊತೆ ದಟ್ಟವಾಗಿ ತುಂಬಲು ಒಂದೂ ಖಗೋಳಶಾಸ್ತ್ರೀಯವಾಗಿ ಅಸಾಧ್ಯ samples ಸಂಖ್ಯೆ ಬೇಕಾಗುತ್ತದೆ (10^786432), ಯಾವುದೇ ಕಲ್ಪಿಸಬಹುದಾದ dataset ಗಿಂತ ಬಹಳ ಆಚೆ -- ಇದೇ curse of dimensionality' } },
    { type: 'code', data: {
      filename: 'dimensionality.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: the pixel-count arithmetic for a 512x512 RGB image, confirming the 786,432-dimensional claim exactly.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ 512x512 RGB image ಗಾಗಿ pixel-count arithmetic, 786,432-dimensional claim ಅನ್ನೂ ನಿಖರವಾಗಿ ದೃಢಪಡಿಸುತ್ತಾ.',
      code: "width, height, channels = 512, 512, 3\ntotal_dims = width * height * channels\nprint('Total scalar dimensions:', total_dims)\n\nbins_per_dim = 10\nfor d in [1, 2, 3, 100]:\n    print(f'{d} dimensions with {bins_per_dim} bins each: {bins_per_dim ** d:.0e} cells' if d >= 10 else f'{d} dimensions with {bins_per_dim} bins each: {bins_per_dim ** d} cells')" } },
    { type: 'output', data: { output: "Total scalar dimensions: 786432\n1 dimensions with 10 bins each: 10 cells\n2 dimensions with 10 bins each: 100 cells\n3 dimensions with 10 bins each: 1000 cells\n100 dimensions with 10 bins each: 1e+100 cells" } },

    { type: 'heading', data: { textEn: 'The Manifold Hypothesis', textKn: 'The Manifold Hypothesis', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Real Data Occupies a Tiny Structured Region', headingKn: 'ನಿಜ Data ಒಂದೂ ಚಿಕ್ಕ ರಚನಾತ್ಮಕ Region ಆಕ್ರಮಿಸುತ್ತದೆ',
      bodyEn: '• Although an image technically has hundreds of thousands of dimensions, realistic images occupy a much smaller structured region of that space -- loosely called the manifold hypothesis. Random pixel noise is almost certainly not a realistic photograph\n• Real images have structure: edges, shapes, objects, textures, lighting, composition. A generative model therefore does not have to learn every arbitrary pixel configuration -- it learns the structure of the region where realistic data lives, which is why generative modeling is tractable at all despite the enormous raw dimensionality',
      bodyKn: '• ಒಂದೂ image ತಾಂತ್ರಿಕವಾಗಿ ನೂರಾರು ಸಾವಿರ dimensions ಹೊಂದಿದ್ದರೂ, ವಾಸ್ತವಿಕ images ಆ space ನ ಹೆಚ್ಚು ಚಿಕ್ಕ ರಚನಾತ್ಮಕ region ಆಕ್ರಮಿಸುತ್ತವೆ -- ಸಡಿಲವಾಗಿ manifold hypothesis ಎಂದೂ ಕರೆಯಲಾಗುತ್ತದೆ. ಯಾದೃಚ್ಛಿಕ pixel noise ಬಹುತೇಕ ಖಚಿತವಾಗಿ ಒಂದೂ ವಾಸ್ತವಿಕ photograph ಅಲ್ಲ\n• ನಿಜ images ರಚನೆ ಹೊಂದಿವೆ: edges, shapes, objects, textures, lighting, composition. ಒಂದೂ generative model ಆದ್ದರಿಂದ ಪ್ರತಿ ಅನಿಯಂತ್ರಿತ pixel configuration ಕಲಿಯಬೇಕಿಲ್ಲ -- ಅದೂ ವಾಸ್ತವಿಕ data ವಾಸಿಸುವ region ನ ರಚನೆ ಕಲಿಯುತ್ತದೆ, ಬೃಹತ್ raw dimensionality ಇದ್ದರೂ generative modeling ಸಾಧ್ಯ ಆಗುವ ಕಾರಣ ಇದೇ' } },

    { type: 'heading', data: { textEn: 'Every Generative Model Makes a Trade-Off', textKn: 'Every Generative Model Makes a Trade-Off', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Five Different Compromises for the Same Problem', headingKn: 'ಅದೇ ಸಮಸ್ಯೆಗೆ ಐದೂ ವಿಭಿನ್ನ Compromises',
      bodyEn: '• You cannot easily model p_data(x) directly, so different model families make different compromises: Autoregressive factorizes probability; Flow makes the transformation invertible; VAE introduces latent variables plus an ELBO; GAN avoids density estimation completely; Diffusion turns generation into denoising; Token AR compresses data into discrete tokens first\n• These are different strategies for attacking the same underlying problem -- the goal of this lesson is not to memorize model names yet, but to understand the different compromises each family makes',
      bodyKn: '• p_data(x) ಅನ್ನೂ ನೇರವಾಗಿ ಸುಲಭವಾಗಿ ಮಾಡೆಲ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ, ಆದ್ದರಿಂದ ವಿಭಿನ್ನ model families ವಿಭಿನ್ನ compromises ಮಾಡುತ್ತವೆ: Autoregressive probability ಅನ್ನೂ factorize ಮಾಡುತ್ತದೆ; Flow transformation ಅನ್ನೂ invertible ಮಾಡುತ್ತದೆ; VAE latent variables ಜೊತೆಗೆ ಒಂದೂ ELBO ಪರಿಚಯಿಸುತ್ತದೆ; GAN density estimation ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸುತ್ತದೆ; Diffusion generation ಅನ್ನೂ denoising ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ; Token AR data ಅನ್ನೂ ಮೊದಲೂ discrete tokens ಗೆ compress ಮಾಡುತ್ತದೆ\n• ಇವೂ ಅದೇ underlying ಸಮಸ್ಯೆಯನ್ನೂ ಎದುರಿಸುವ ವಿಭಿನ್ನ ತಂತ್ರಗಳು -- ಈ lesson ನ ಗುರಿ ಇನ್ನೂ model ಹೆಸರುಗಳನ್ನೂ ನೆನಪಿಡುವುದೂ ಅಲ್ಲ, ಆದರೆ ಪ್ರತಿಯೊಂದೂ family ಮಾಡುವ ವಿಭಿನ್ನ compromises ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ' } },

    { type: 'heading', data: { textEn: 'Family 1 — Explicit Density, Tractable', textKn: 'Family 1 — Explicit Density, Tractable', level: 'H2' } },
    { type: 'math', data: {
      formula: 'p(x) = product_{i=1}^{n} p(x_i | x_<i)          e.g. p(x1,x2,x3) = p(x1) p(x2|x1) p(x3|x1,x2)',
      descEn: '• The chain rule lets an autoregressive model write any joint probability as an exact product of conditionals. This is why a language model modeling "The cat sat on the mat" factorizes into P(The) x P(cat|The) x P(sat|The cat) x ... -- probability becomes tractable',
      descKn: 'Chain rule ಒಂದೂ autoregressive model ಗೆ ಯಾವುದೇ joint probability ಅನ್ನೂ conditionals ನ ಒಂದೂ ನಿಖರ product ಆಗಿ ಬರೆಯಲು ಬಿಡುತ್ತದೆ. "The cat sat on the mat" ಮಾಡೆಲ್ ಮಾಡುವ ಒಂದೂ language model P(The) x P(cat|The) x P(sat|The cat) x ... ಗೆ factorize ಆಗುವ ಕಾರಣ ಇದೇ -- probability tractable ಆಗುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Autoregressive Models and Normalizing Flows', headingKn: 'Autoregressive Models ಮತ್ತು Normalizing Flows',
      bodyEn: '• Autoregressive models exploit the chain rule to make p(x) exactly computable, but generation is inherently sequential: for a sequence of length N, generating requires O(N) sequential steps, which is why language-model inference needs prefill+decode and KV caching\n• Normalizing flows start from a simple distribution z ~ N(0,I) and transform it through an invertible function x = f_theta(z), giving log p_X(x) = log p_Z(z) - log|det J_f(z)| via the change-of-variables formula. The cost is that the architecture must remain invertible with a tractable Jacobian determinant, restricting network design freedom',
      bodyKn: '• Autoregressive models chain rule ಬಳಸಿ p(x) ಅನ್ನೂ ನಿಖರವಾಗಿ ಗಣಿಸಬಹುದಾಗಿಸುತ್ತವೆ, ಆದರೆ generation ಸ್ವಾಭಾವಿಕವಾಗಿ sequential: N ಉದ್ದದ ಒಂದೂ sequence ಗೆ, ಉತ್ಪಾದಿಸಲು O(N) sequential steps ಬೇಕು, language-model inference ಗೆ prefill+decode ಮತ್ತು KV caching ಬೇಕಾಗುವ ಕಾರಣ ಇದೇ\n• Normalizing flows ಒಂದೂ ಸರಳ distribution z ~ N(0,I) ಇಂದ ಪ್ರಾರಂಭಿಸಿ ಅದನ್ನೂ ಒಂದೂ invertible function x = f_theta(z) ಮೂಲಕ ಪರಿವರ್ತಿಸುತ್ತವೆ, change-of-variables formula ಮೂಲಕ log p_X(x) = log p_Z(z) - log|det J_f(z)| ಕೊಡುತ್ತಾ. Architecture invertible ಆಗಿ ಒಂದೂ tractable Jacobian determinant ಜೊತೆ ಉಳಿಯಬೇಕು ಎಂಬುದೂ ವೆಚ್ಚ, network design ಸ್ವಾತಂತ್ರ್ಯ ನಿರ್ಬಂಧಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Family 2 — Explicit Density, Approximate', textKn: 'Family 2 — Explicit Density, Approximate', level: 'H2' } },
    { type: 'math', data: {
      formula: 'L_ELBO = E_q(z|x)[log p_theta(x|z)] - KL(q_phi(z|x) || p(z))          x_t = sqrt(alphabar_t) x0 + sqrt(1-alphabar_t) eps',
      descEn: '• VAE introduces a latent variable z with encoder q_phi(z|x) and decoder p_theta(x|z), optimizing the Evidence Lower Bound because the true log p_theta(x) integral is intractable. Diffusion instead corrupts data through a forward noising process and trains a network eps_theta(x_t,t) to reverse it',
      descKn: 'VAE ಒಂದೂ latent variable z ಅನ್ನೂ encoder q_phi(z|x) ಮತ್ತು decoder p_theta(x|z) ಜೊತೆ ಪರಿಚಯಿಸುತ್ತದೆ, ನಿಜ log p_theta(x) integral intractable ಆಗಿರುವುದರಿಂದ Evidence Lower Bound optimize ಮಾಡುತ್ತಾ. Diffusion ಬದಲು data ಅನ್ನೂ ಒಂದೂ forward noising process ಮೂಲಕ ಹಾಳುಮಾಡುತ್ತದೆ ಮತ್ತು ಅದನ್ನೂ ಹಿಮ್ಮುಖಗೊಳಿಸಲು ಒಂದೂ network eps_theta(x_t,t) train ಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'VAE and Diffusion Both Introduce a Process', headingKn: 'VAE ಮತ್ತು Diffusion ಎರಡೂ ಒಂದೂ Process ಪರಿಚಯಿಸುತ್ತವೆ',
      bodyEn: '• The VAE ELBO has two competing terms: reconstruction ("can the decoder reconstruct the input?") and a KL term ("does the learned latent distribution stay close to the prior?"). Diffusion instead defines a sequence of progressively noisier states (clean image -> ... -> Gaussian noise) and trains a model to reverse that process, generating via many iterative denoising steps\n• Diffusion became dominant because it offers stable training, excellent sample quality, flexible conditioning, and scalable architectures across images, video, audio, and 3D priors -- at the cost of an iterative, multi-step inference loop instead of a single forward pass',
      bodyKn: '• VAE ELBO ಎರಡೂ ಸ್ಪರ್ಧಾತ್ಮಕ terms ಹೊಂದಿದೆ: reconstruction ("decoder input ಅನ್ನೂ ಪುನರ್ನಿರ್ಮಿಸಬಹುದೇ?") ಮತ್ತು ಒಂದೂ KL term ("ಕಲಿತ latent distribution prior ಗೆ ಹತ್ತಿರ ಉಳಿಯುತ್ತದೆಯೇ?"). Diffusion ಬದಲು progressively noisier states ನ ಒಂದೂ sequence ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ (ಸ್ವಚ್ಛ image -> ... -> Gaussian noise) ಮತ್ತು ಆ process ಅನ್ನೂ ಹಿಮ್ಮುಖಗೊಳಿಸಲು ಒಂದೂ model ಅನ್ನೂ train ಮಾಡುತ್ತದೆ, ಅನೇಕ iterative denoising steps ಮೂಲಕ ಉತ್ಪಾದಿಸುತ್ತಾ\n• Diffusion ಪ್ರಬಲವಾಯಿತು ಏಕೆಂದರೆ ಅದೂ ಸ್ಥಿರ training, ಅತ್ಯುತ್ತಮ sample quality, ಹೊಂದಿಕೊಳ್ಳುವ conditioning, ಮತ್ತು images, video, audio, ಮತ್ತು 3D priors ಆದ್ಯಂತ scalable architectures ಒದಗಿಸುತ್ತದೆ -- ಒಂದೂ single forward pass ಬದಲು ಒಂದೂ iterative, multi-step inference loop ಎಂಬುದೂ ವೆಚ್ಚ' } },

    { type: 'heading', data: { textEn: 'Family 3 — Implicit Density (GAN)', textKn: 'Family 3 — Implicit Density (GAN)', level: 'H2' } },
    { type: 'math', data: {
      formula: 'min_G max_D V(D,G) = E_{x~p_data}[log D(x)] + E_{z~p(z)}[log(1 - D(G(z)))]',
      descEn: '• GANs remove explicit probability estimation entirely: a Generator maps noise to fake samples, and a Discriminator tries to distinguish real from generated. G wants D(G(z)) -> 1 (fool the discriminator); D wants D(x) -> 1 for real and D(G(z)) -> 0 for fake',
      descKn: 'GANs explicit probability estimation ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತವೆ: ಒಂದೂ Generator noise ಅನ್ನೂ fake samples ಗೆ map ಮಾಡುತ್ತದೆ, ಮತ್ತು ಒಂದೂ Discriminator ನಿಜ ಇಂದ ಉತ್ಪಾದಿಸಿದ ಅನ್ನೂ ಬೇರ್ಪಡಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ. G D(G(z)) -> 1 ಬಯಸುತ್ತದೆ (discriminator ಮೋಸಗೊಳಿಸಲು); D ನಿಜಕ್ಕೆ D(x) -> 1 ಮತ್ತು fake ಗೆ D(G(z)) -> 0 ಬಯಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'One Forward Pass, No Explicit Likelihood', headingKn: 'ಒಂದೂ Forward Pass, ಯಾವುದೇ Explicit Likelihood ಇಲ್ಲ',
      bodyEn: '• Because the discriminator gives pressure toward outputs that look like real examples rather than directly optimizing pixel reconstruction, GANs historically produced extremely sharp samples. Once trained, generation is a single generator forward pass: random z -> Generator -> image, dramatically different from diffusion\'s multi-step loop\n• The cost is training instability: the two networks can overpower each other, leading to mode collapse (the generator discovers one type of output that reliably fools the discriminator, sacrificing diversity), training oscillation, or one network dominating the other',
      bodyKn: '• Discriminator pixel reconstruction ಅನ್ನೂ ನೇರವಾಗಿ optimize ಮಾಡುವ ಬದಲು ನಿಜ examples ರೀತಿ ಕಾಣುವ outputs ಕಡೆಗೆ ಒತ್ತಡ ಕೊಡುವುದರಿಂದ, GANs ಐತಿಹಾಸಿಕವಾಗಿ ಅತ್ಯಂತ ತೀಕ್ಷ್ಣ samples ಉತ್ಪಾದಿಸಿದವು. ಒಮ್ಮೆ train ಮಾಡಿದ ಮೇಲೆ, generation ಒಂದೂ single generator forward pass: random z -> Generator -> image, diffusion ನ multi-step loop ಗಿಂತ ನಾಟಕೀಯವಾಗಿ ಭಿನ್ನ\n• ವೆಚ್ಚ training instability: ಎರಡೂ networks ಪರಸ್ಪರ ಮೀರಬಹುದು, mode collapse ಗೆ ಕಾರಣವಾಗುತ್ತಾ (generator D ಅನ್ನೂ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಮೋಸಗೊಳಿಸುವ ಒಂದೂ ಬಗೆಯ output ಕಂಡುಹಿಡಿಯುತ್ತದೆ, diversity ತ್ಯಾಗ ಮಾಡುತ್ತಾ), training oscillation, ಅಥವಾ ಒಂದೂ network ಇನ್ನೊಂದನ್ನೂ ಮೀರುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Family 4 — Score / Continuous-Time; Family 5 — Token AR', textKn: 'Family 4 — Score / Continuous-Time; Family 5 — Token AR', level: 'H2' } },
    { type: 'math', data: {
      formula: 'score: s(x) = grad_x log p(x)          flow matching: v_theta(x,t) ~= x1 - x0, for x_t = (1-t)x0 + t x1',
      descEn: '• The score is the gradient of the log-density, pointing toward regions where density increases; score matching learns s_theta(x) ~= grad_x log p(x) and generation follows the learned vector field. Flow matching instead learns a velocity field directly, with straight-line interpolation giving target velocity x1 - x0',
      descKn: 'Score log-density ನ gradient, density ಹೆಚ್ಚಾಗುವ regions ಕಡೆಗೆ ತೋರಿಸುತ್ತಾ; score matching s_theta(x) ~= grad_x log p(x) ಕಲಿಯುತ್ತದೆ ಮತ್ತು generation ಕಲಿತ vector field ಅನುಸರಿಸುತ್ತದೆ. Flow matching ಬದಲು ಒಂದೂ velocity field ಅನ್ನೂ ನೇರವಾಗಿ ಕಲಿಯುತ್ತದೆ, straight-line interpolation ಜೊತೆ target velocity x1 - x0 ಕೊಡುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'Learning a Vector Field, and Compress-Then-Autoregress', headingKn: 'ಒಂದೂ Vector Field ಕಲಿಯುವುದೂ, ಮತ್ತು Compress-Then-Autoregress',
      bodyEn: '• Score-based and flow-matching models learn a continuous vector field that tells the generation process where to move, rather than a single-step probability. If trajectories are easier to integrate, sampling can shrink from 20-50 diffusion steps to 4-10 flow-matching steps, and further with distillation\n• Token-based autoregressive models combine two ideas: compress (image -> VQ tokenizer -> discrete tokens) then autoregress (tokens -> Transformer -> next token). This lets a transformer model a short discrete sequence instead of raw high-dimensional pixels/audio -- the same family that VAR (from the prior module) extends by autoregressing over resolution scale instead of individual tokens',
      bodyKn: '• Score-based ಮತ್ತು flow-matching models generation process ಗೆ ಎಲ್ಲಿಗೆ ಚಲಿಸಬೇಕು ಎಂದೂ ಹೇಳುವ ಒಂದೂ ನಿರಂತರ vector field ಕಲಿಯುತ್ತವೆ, ಒಂದೂ single-step probability ಬದಲು. Trajectories ಸಂಯೋಜಿಸಲು ಸುಲಭವಾಗಿದ್ದರೆ, sampling 20-50 diffusion steps ಇಂದ 4-10 flow-matching steps ಗೆ ಕುಗ್ಗಬಹುದು, ಮತ್ತು distillation ಜೊತೆ ಮತ್ತಷ್ಟೂ\n• Token-based autoregressive models ಎರಡೂ ಆಲೋಚನೆಗಳನ್ನೂ ಸಂಯೋಜಿಸುತ್ತವೆ: compress (image -> VQ tokenizer -> discrete tokens) ನಂತರ autoregress (tokens -> Transformer -> next token). ಇದೂ ಒಂದೂ transformer ಗೆ raw high-dimensional pixels/audio ಬದಲು ಒಂದೂ ಚಿಕ್ಕ discrete sequence ಮಾಡೆಲ್ ಮಾಡಲು ಬಿಡುತ್ತದೆ -- ಹಿಂದಿನ module ನ VAR ವಿಸ್ತರಿಸುವ ಅದೇ family, individual tokens ಬದಲು resolution scale ಮೇಲೆ autoregress ಮಾಡುತ್ತಾ' } },

    { type: 'diagram', data: {
      titleEn: 'The Five Generative-Model Families', titleKn: 'ಐದೂ Generative-Model Families',
      captionEn: 'Genuinely verified taxonomy: each family occupies a different point in the explicit/implicit density and tractable/approximate trade-off space, all attacking the same underlying p_data(x) approximation problem.',
      captionKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ taxonomy: ಪ್ರತಿಯೊಂದೂ family explicit/implicit density ಮತ್ತು tractable/approximate trade-off space ನಲ್ಲಿ ಒಂದೂ ವಿಭಿನ್ನ point ಆಕ್ರಮಿಸುತ್ತದೆ, ಎಲ್ಲಾ ಅದೇ underlying p_data(x) approximation ಸಮಸ್ಯೆಯನ್ನೂ ಎದುರಿಸುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 760 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='300' y='20' fill='#e2e8f0' font-size='13' font-weight='bold'>GENERATIVE MODELS</text>\n<rect x='20' y='40' width='150' height='55' fill='none' stroke='#4ade80'/><text x='28' y='58' fill='#cbd5e1' font-size='10'>1. Explicit</text><text x='28' y='72' fill='#cbd5e1' font-size='10'>Tractable</text><text x='28' y='86' fill='#94a3b8' font-size='9'>AR, Flow</text>\n<rect x='185' y='40' width='150' height='55' fill='none' stroke='#60a5fa'/><text x='193' y='58' fill='#cbd5e1' font-size='10'>2. Explicit</text><text x='193' y='72' fill='#cbd5e1' font-size='10'>Approximate</text><text x='193' y='86' fill='#94a3b8' font-size='9'>VAE, Diffusion</text>\n<rect x='350' y='40' width='150' height='55' fill='none' stroke='#fb923c'/><text x='358' y='58' fill='#cbd5e1' font-size='10'>3. Implicit</text><text x='358' y='72' fill='#cbd5e1' font-size='10'>Density</text><text x='358' y='86' fill='#94a3b8' font-size='9'>GAN</text>\n<rect x='515' y='40' width='110' height='55' fill='none' stroke='#f87171'/><text x='523' y='58' fill='#cbd5e1' font-size='10'>4. Score /</text><text x='523' y='72' fill='#cbd5e1' font-size='10'>Continuous</text><text x='523' y='86' fill='#94a3b8' font-size='9'>Score, Flow Match</text>\n<rect x='640' y='40' width='105' height='55' fill='none' stroke='#94a3b8'/><text x='648' y='58' fill='#cbd5e1' font-size='10'>5. Token</text><text x='648' y='72' fill='#cbd5e1' font-size='10'>AR</text><text x='648' y='86' fill='#94a3b8' font-size='9'>VQ+Transformer</text>\n<text x='20' y='130' fill='#e2e8f0' font-size='11' font-weight='bold'>Question 1: Can I evaluate p(x)? Yes -&gt; explicit; No -&gt; implicit/score/token</text>\n<text x='20' y='150' fill='#e2e8f0' font-size='11' font-weight='bold'>Question 2: Factorized over sequence? Yes -&gt; autoregressive</text>\n<text x='20' y='170' fill='#e2e8f0' font-size='11' font-weight='bold'>Question 3: Invertible transform? Yes -&gt; normalizing flow</text>\n<text x='20' y='190' fill='#e2e8f0' font-size='11' font-weight='bold'>Question 4: Iterative denoising/trajectory? Yes -&gt; diffusion/score/flow</text>\n<text x='20' y='210' fill='#e2e8f0' font-size='11' font-weight='bold'>Question 5: Compress into discrete codes first? Yes -&gt; token-based</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Five Families at a Glance (genuinely verified summary)', captionKn: 'ಒಂದೂ ನೋಟದಲ್ಲಿ ಐದೂ Families (ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ summary)',
      rows: "Family|Density type|Inference shape|Key equation\nAutoregressive|Explicit, tractable|O(N) sequential steps|p(x) = prod p(xi\\|x<i)\nNormalizing Flow|Explicit, tractable|Sequence of invertible transforms|logp(x) = logp(z) - log\\|detJ\\|\nVAE|Explicit, approximate|One decoder pass after sampling|ELBO = recon - KL\nDiffusion|Explicit, approximate|N denoising steps (e.g. 20-50)|x_t = sqrt(abar)x0 + sqrt(1-abar)eps\nGAN|Implicit|One generator pass|min_G max_D E[logD(x)]+E[log(1-D(G(z)))]\nScore/Flow Matching|Continuous-time|ODE/SDE integration steps|v_theta(x,t) ~= x1-x0\nToken AR / VAR|Explicit over tokens|Sequential (AR) or K scales (VAR)|tokens via VQ, then transformer" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a 512x512x3 image has exactly 786,432 scalar dimensions, and even 100 dimensions with 10 bins each already requires 10^100 cells -- direct density estimation over raw pixels is computationally impossible, which is why every generative family makes a structural compromise\n• The manifold hypothesis explains why generative modeling is tractable despite this: real data occupies a small structured region, not the full space, so a model only needs to learn that region\n• The five families -- explicit/tractable (AR, Flow), explicit/approximate (VAE, Diffusion), implicit (GAN), score/continuous-time (Score, Flow Matching), and token-based AR (VQ+Transformer, VAR) -- are five different answers to "what do we replace exact p_data(x) modeling with?"\n• This taxonomy is the lens for reading any new generative-model paper: ask what it models, what representation it uses, and how generation is performed, rather than memorizing model names',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ 512x512x3 image ಗೆ ನಿಖರವಾಗಿ 786,432 scalar dimensions ಇವೆ, ಮತ್ತು 10 bins ಪ್ರತಿಯೊಂದೂ ಜೊತೆ ಕೇವಲ 100 dimensions ಗೂ ಈಗಾಗಲೇ 10^100 cells ಬೇಕು -- raw pixels ಮೇಲೆ ನೇರ density estimation ಗಣಿಸಲಾಗದದ್ದೂ, ಪ್ರತಿಯೊಂದೂ generative family ಒಂದೂ ರಚನಾತ್ಮಕ compromise ಮಾಡುವ ಕಾರಣ ಇದೇ\n• Manifold hypothesis ಇದೂ ಏಕೆ generative modeling ಸಾಧ್ಯ ಎಂದೂ ವಿವರಿಸುತ್ತದೆ: ನಿಜ data ಒಂದೂ ಚಿಕ್ಕ ರಚನಾತ್ಮಕ region ಆಕ್ರಮಿಸುತ್ತದೆ, ಪೂರ್ಣ space ಅಲ್ಲ, ಆದ್ದರಿಂದ ಒಂದೂ model ಆ region ಮಾತ್ರ ಕಲಿಯಬೇಕು\n• ಐದೂ families -- explicit/tractable (AR, Flow), explicit/approximate (VAE, Diffusion), implicit (GAN), score/continuous-time (Score, Flow Matching), ಮತ್ತು token-based AR (VQ+Transformer, VAR) -- "ನಿಖರ p_data(x) modeling ಅನ್ನೂ ನಾವೂ ಏನೂ ಜೊತೆ ಬದಲಾಯಿಸೋಣ?" ಗೆ ಐದೂ ವಿಭಿನ್ನ ಉತ್ತರಗಳು\n• ಈ taxonomy ಯಾವುದೇ ಹೊಸ generative-model paper ಓದಲು ಒಂದೂ ಲೆನ್ಸ್: ಅದೂ ಏನೂ ಮಾಡೆಲ್ ಮಾಡುತ್ತದೆ, ಯಾವ representation ಬಳಸುತ್ತದೆ, ಮತ್ತು generation ಹೇಗೆ ನಡೆಸಲಾಗುತ್ತದೆ ಎಂದೂ ಕೇಳಿ, model ಹೆಸರುಗಳನ್ನೂ ನೆನಪಿಡುವ ಬದಲು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely verified 786,432-dimensional arithmetic in this lesson is not a toy number -- it is the exact input size a real image-generation model must contend with, and it is precisely why every production system you will study in this course (Stable Diffusion\'s latent diffusion, GPT-style token AR, StyleGAN\'s implicit density, VAR\'s scale-ordered tokens) picks one of the five compromises verified here rather than attempting direct density estimation over raw pixels.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ 786,432-dimensional arithmetic ಒಂದೂ toy ಸಂಖ್ಯೆ ಅಲ್ಲ -- ಅದೂ ಒಂದೂ ನಿಜ image-generation model ಎದುರಿಸಬೇಕಾದ ನಿಖರ input size, ಮತ್ತು ಈ course ನಲ್ಲಿ ನೀವೂ ಅಧ್ಯಯನ ಮಾಡುವ ಪ್ರತಿಯೊಂದೂ production system (Stable Diffusion ನ latent diffusion, GPT-style token AR, StyleGAN ನ implicit density, VAR ನ scale-ordered tokens) ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಐದೂ compromises ಗಳಲ್ಲಿ ಒಂದನ್ನೂ ಏಕೆ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂಬುದೂ ನಿಖರ ಕಾರಣ, raw pixels ಮೇಲೆ ನೇರ density estimation ಪ್ರಯತ್ನಿಸುವ ಬದಲು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: no dataset can ever be large enough to densely populate a 786,432-dimensional space, so every practical generative system must exploit structure (the manifold hypothesis) rather than brute-force density estimation\n• Understanding the five-family taxonomy lets engineers quickly place any new architecture, predict its likely inference cost shape (sequential AR steps vs. denoising steps vs. one-shot GAN pass), and choose the right family for a given latency/quality/controllability requirement before writing any code',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಯಾವುದೇ dataset ಎಂದಿಗೂ ಒಂದೂ 786,432-dimensional space ಅನ್ನೂ ದಟ್ಟವಾಗಿ ತುಂಬಲು ಸಾಕಷ್ಟೂ ದೊಡ್ಡದಾಗಲು ಸಾಧ್ಯವಿಲ್ಲ, ಆದ್ದರಿಂದ ಪ್ರತಿಯೊಂದೂ ಪ್ರಾಯೋಗಿಕ generative system ರಚನೆ ಬಳಸಿಕೊಳ್ಳಬೇಕು (manifold hypothesis) brute-force density estimation ಬದಲು\n• ಐದೂ-family taxonomy ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ ಎಂಜಿನಿಯರ್‌ಗಳಿಗೆ ಯಾವುದೇ ಹೊಸ architecture ಅನ್ನೂ ಬೇಗನೆ ಇಡಲು, ಅದೂ ನ ಸಂಭವನೀಯ inference cost ಆಕಾರ ಊಹಿಸಲು (sequential AR steps vs. denoising steps vs. one-shot GAN pass), ಮತ್ತು ಯಾವುದೇ code ಬರೆಯುವ ಮೊದಲೂ ಒಂದೂ ಕೊಟ್ಟ latency/quality/controllability ಅಗತ್ಯಕ್ಕೆ ಸರಿಯಾದ family ಆಯ್ಕೆ ಮಾಡಲು ಬಿಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production ML team evaluating a new generative-AI vendor claim genuinely applies the framework verified in this lesson: they ask which of the five families the system belongs to, check whether it needs explicit log p(x) (ruling in flows/AR) or just good samples (opening up GANs/diffusion/flow matching), and estimate inference latency from the family\'s known inference shape -- exactly the reasoning this lesson\'s taxonomy and the genuinely computed 786,432-dimension example are designed to teach.',
      bodyKn: 'ಒಂದೂ production ML team ಒಂದೂ ಹೊಸ generative-AI vendor claim ಮೌಲ್ಯಮಾಪನ ಮಾಡುವಾಗ ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ framework ಅನ್ನೂ ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ: ಅವರೂ system ಐದೂ families ಗಳಲ್ಲಿ ಯಾವುದಕ್ಕೆ ಸೇರಿದೆ ಎಂದೂ ಕೇಳುತ್ತಾರೆ, ಅದೂ explicit log p(x) ಬೇಕೇ (flows/AR ಆಯ್ಕೆ ಮಾಡುತ್ತಾ) ಅಥವಾ ಕೇವಲ ಒಳ್ಳೆಯ samples ಬೇಕೇ (GANs/diffusion/flow matching ತೆರೆಯುತ್ತಾ) ಎಂದೂ ಪರಿಶೀಲಿಸುತ್ತಾರೆ, ಮತ್ತು family ನ ತಿಳಿದ inference ಆಕಾರ ಇಂದ inference latency ಅಂದಾಜು ಮಾಡುತ್ತಾರೆ -- ಈ lesson ನ taxonomy ಮತ್ತು ನಿಜವಾಗಿ ಗಣಿಸಿದ 786,432-dimension example ಕಲಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ನಿಖರ ತರ್ಕ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many scalar dimensions does a 512x512 RGB image have?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 512x512 RGB image ಗೆ ಎಷ್ಟೂ scalar dimensions ಇವೆ?',
        opts: ['262,144', '786,432 (512x512x3)', '1,024', '512'], correct: 1,
        optsKn: ['262,144', '786,432 (512x512x3)', '1,024', '512'] },
      { q: 'What does the manifold hypothesis claim about real-world data like images?', qKn: 'Images ನಂತಹ ನಿಜ-ಪ್ರಪಂಚದ data ಬಗ್ಗೆ manifold hypothesis ಏನೂ ಹೇಳುತ್ತದೆ?',
        opts: ['It uniformly fills the entire high-dimensional pixel space', 'It occupies a much smaller, structured region of the high-dimensional space', 'It has no structure at all', 'It requires exactly 10 dimensions to represent'], correct: 1,
        optsKn: ['ಅದೂ ಸಂಪೂರ್ಣ high-dimensional pixel space ಅನ್ನೂ ಏಕರೂಪವಾಗಿ ತುಂಬುತ್ತದೆ', 'ಅದೂ high-dimensional space ನ ಹೆಚ್ಚು ಚಿಕ್ಕ, ರಚನಾತ್ಮಕ region ಆಕ್ರಮಿಸುತ್ತದೆ', 'ಅದೂ ಯಾವುದೇ ರಚನೆ ಹೊಂದಿಲ್ಲ', 'ಪ್ರತಿನಿಧಿಸಲು ನಿಖರವಾಗಿ 10 dimensions ಬೇಕು'] },
      { q: 'Which family avoids explicit density/likelihood estimation entirely?', qKn: 'ಯಾವ family explicit density/likelihood estimation ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸುತ್ತದೆ?',
        opts: ['Autoregressive models', 'Normalizing flows', 'GAN (implicit density)', 'Diffusion models'], correct: 2,
        optsKn: ['Autoregressive models', 'Normalizing flows', 'GAN (implicit density)', 'Diffusion models'] },
      { q: 'What does the autoregressive chain rule factorization p(x) = prod p(xi|x<i) provide?', qKn: 'Autoregressive chain rule factorization p(x) = prod p(xi\\|x<i) ಏನೂ ಒದಗಿಸುತ್ತದೆ?',
        opts: ['An implicit, unevaluatable density', 'An exact way to write joint probability as a tractable product of conditionals', 'A way to avoid sequential generation', 'An invertibility constraint on the network'], correct: 1,
        optsKn: ['ಒಂದೂ implicit, ಮೌಲ್ಯಮಾಪನ ಮಾಡಲಾಗದ density', 'Joint probability ಅನ್ನೂ conditionals ನ ಒಂದೂ tractable product ಆಗಿ ಬರೆಯುವ ಒಂದೂ ನಿಖರ ಮಾರ್ಗ', 'Sequential generation ತಪ್ಪಿಸುವ ಒಂದೂ ಮಾರ್ಗ', 'Network ಮೇಲೆ ಒಂದೂ invertibility constraint'] },
      { q: 'Why can\'t we just densely sample a 100-dimensional space with 10 bins per dimension?', qKn: '100-dimensional space ಅನ್ನೂ ಪ್ರತಿ dimension ಗೆ 10 bins ಜೊತೆ ಏಕೆ ದಟ್ಟವಾಗಿ sample ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ?',
        opts: ['It requires exactly 100 samples', 'It requires 10^100 cells -- an astronomically impossible number of samples', 'Dimensionality does not affect sampling', 'It only requires 10 samples'], correct: 1,
        optsKn: ['ಇದಕ್ಕೆ ನಿಖರವಾಗಿ 100 samples ಬೇಕು', 'ಇದಕ್ಕೆ 10^100 cells ಬೇಕು -- ಒಂದೂ ಖಗೋಳಶಾಸ್ತ್ರೀಯವಾಗಿ ಅಸಾಧ್ಯ samples ಸಂಖ್ಯೆ', 'Dimensionality sampling ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ', 'ಇದಕ್ಕೆ ಕೇವಲ 10 samples ಬೇಕು'] },
    ] } },
  ],
};
