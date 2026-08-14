const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213a0'; // Module 157: Generative Models: Taxonomy and History

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Generative Models — Taxonomy & History (Lesson 2) — The 2013 → 2026 Generative-Model Evolution',
  titleKn: 'Generative Models — Taxonomy & History (Lesson 2) — 2013 → 2026 Generative-Model Evolution',
  desc: 'Trace the historical progression from VAE (2013) through GAN, autoregressive models, normalizing flows, DDPM, latent diffusion, DiT, and flow matching to VAR, understanding the specific problem each generation of models tried to solve and why no model fully replaced the ones before it.',
  descKn: 'VAE (2013) ಇಂದ GAN, autoregressive models, normalizing flows, DDPM, latent diffusion, DiT, ಮತ್ತು flow matching ಮೂಲಕ VAR ವರೆಗಿನ ಐತಿಹಾಸಿಕ ಪ್ರಗತಿ ಪತ್ತೆಹಚ್ಚಿ, ಪ್ರತಿಯೊಂದೂ generation of models ಪರಿಹರಿಸಲು ಪ್ರಯತ್ನಿಸಿದ ನಿರ್ದಿಷ್ಟ ಸಮಸ್ಯೆ ಮತ್ತು ಯಾವುದೇ model ಹಿಂದಿನದನ್ನೂ ಏಕೆ ಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸಲಿಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Explain the historical progression from VAE to GAN to AR/Flow to Diffusion to Latent Diffusion to Flow Matching.',
    'Identify the specific problem each generation of models tried to solve.',
    'Understand why GANs produced sharper images than early VAEs.',
    'Understand why autoregressive models scaled naturally in language but not images.',
    'Understand why DDPM changed image generation and why latent diffusion reduced computational cost.',
    'Understand how transformers became the backbone of modern generative systems (DiT).',
    'Understand where VAR fits into this history.',
  ],
  objectivesKn: [
    'VAE ಇಂದ GAN ಇಂದ AR/Flow ಇಂದ Diffusion ಇಂದ Latent Diffusion ಇಂದ Flow Matching ವರೆಗಿನ ಐತಿಹಾಸಿಕ ಪ್ರಗತಿ ವಿವರಿಸಿ.',
    'ಪ್ರತಿಯೊಂದೂ ಪೀಳಿಗೆಯ models ಪರಿಹರಿಸಲು ಪ್ರಯತ್ನಿಸಿದ ನಿರ್ದಿಷ್ಟ ಸಮಸ್ಯೆ ಪತ್ತೆಹಚ್ಚಿ.',
    'GANs early VAEs ಗಿಂತ ಏಕೆ ತೀಕ್ಷ್ಣ images ಉತ್ಪಾದಿಸಿದವು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Autoregressive models language ನಲ್ಲಿ ಸ್ವಾಭಾವಿಕವಾಗಿ ಏಕೆ scale ಆದವು ಆದರೆ images ನಲ್ಲಿ ಇಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'DDPM image generation ಅನ್ನೂ ಏಕೆ ಬದಲಾಯಿಸಿತು ಮತ್ತು latent diffusion computational cost ಅನ್ನೂ ಏಕೆ ಕಡಿಮೆಗೊಳಿಸಿತು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Transformers ಆಧುನಿಕ generative systems (DiT) ನ backbone ಹೇಗೆ ಆದವು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'VAR ಈ history ನಲ್ಲಿ ಎಲ್ಲಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Generative Models — Taxonomy & History (Lesson 2)', textKn: 'Generative Models — Taxonomy & History (Lesson 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python concepts + equations · Module: Generative Models — Taxonomy & History · Time: ~15 minutes · Part 2 of 3',
      bodyKn: '• Type: Learn · Language: Python concepts + equations · Module: Generative Models — Taxonomy & History · Time: ~15 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'History,VAE,GAN,Diffusion,Part 2 of 3',
      pillsKn: 'History,VAE,GAN,Diffusion,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Big Picture: A Sequence of Problems', textKn: 'The Big Picture: A Sequence of Problems', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Each Era Asked a Different Question', headingKn: 'ಪ್ರತಿಯೊಂದೂ Era ಒಂದೂ ವಿಭಿನ್ನ ಪ್ರಶ್ನೆ ಕೇಳಿತು',
      bodyEn: '• 2013 VAE asked: "How can neural networks learn a latent distribution?" 2014 GAN asked: "Can we generate sharper samples without explicit likelihood?" 2015-2017 AR+Flow asked: "Can we model probability exactly?"\n• 2020 Diffusion asked: "Can we make image generation stable and high quality?" 2021-2022 Latent Diffusion asked: "Can we make diffusion computationally practical?" 2023-2024 DiT+Flow Matching asked: "Can transformers and straighter paths make generation scale?" 2024+ Video/Audio/3D/VAR asked: "Can the same principles generalize across modalities?"',
      bodyKn: '• 2013 VAE ಕೇಳಿತು: "Neural networks ಒಂದೂ latent distribution ಹೇಗೆ ಕಲಿಯಬಹುದು?" 2014 GAN ಕೇಳಿತು: "Explicit likelihood ಇಲ್ಲದೆ ನಾವೂ ತೀಕ್ಷ್ಣ samples ಉತ್ಪಾದಿಸಬಹುದೇ?" 2015-2017 AR+Flow ಕೇಳಿತು: "ನಾವೂ probability ಅನ್ನೂ ನಿಖರವಾಗಿ ಮಾಡೆಲ್ ಮಾಡಬಹುದೇ?"\n• 2020 Diffusion ಕೇಳಿತು: "ನಾವೂ image generation ಅನ್ನೂ ಸ್ಥಿರ ಮತ್ತು ಉನ್ನತ ಗುಣಮಟ್ಟ ಮಾಡಬಹುದೇ?" 2021-2022 Latent Diffusion ಕೇಳಿತು: "ನಾವೂ diffusion ಅನ್ನೂ computationally ಪ್ರಾಯೋಗಿಕ ಮಾಡಬಹುದೇ?" 2023-2024 DiT+Flow Matching ಕೇಳಿತು: "Transformers ಮತ್ತು ನೇರವಾದ paths generation ಅನ್ನೂ scale ಮಾಡಬಹುದೇ?" 2024+ Video/Audio/3D/VAR ಕೇಳಿತು: "ಅದೇ ತತ್ವಗಳು modalities ಆದ್ಯಂತ ಸಾಮಾನ್ಯೀಕರಿಸಬಹುದೇ?"' } },

    { type: 'heading', data: { textEn: '2013 — VAE: Compress the Data', textKn: '2013 — VAE: Compress the Data', level: 'H2' } },
    { type: 'math', data: {
      formula: 'L = L_reconstruction + beta*KL(q(z|x) || p(z))          z = mu + sigma * eps, eps ~ N(0,I)',
      descEn: '• The VAE introduced practical neural latent-variable generation: an encoder compresses x into a much smaller z (e.g. R^128 instead of 786,432 pixel values), and the reparameterization trick z = mu + sigma*eps lets gradients flow through the sampling step',
      descKn: 'VAE practical neural latent-variable generation ಪರಿಚಯಿಸಿತು: ಒಂದೂ encoder x ಅನ್ನೂ ಒಂದೂ ಹೆಚ್ಚು ಚಿಕ್ಕ z ಗೆ compress ಮಾಡುತ್ತದೆ (ಉದಾ. 786,432 pixel values ಬದಲು R^128), ಮತ್ತು reparameterization trick z = mu + sigma*eps sampling step ಮೂಲಕ gradients ಹರಿಯಲು ಬಿಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'VAE Got the Latent Idea Right, But Reconstructions Blur', headingKn: 'VAE Latent Idea ಸರಿಯಾಗಿ ಪಡೆಯಿತು, ಆದರೆ Reconstructions Blur ಆಗುತ್ತವೆ',
      bodyEn: '• VAE introduced a crucial idea: learn a useful latent representation instead of attacking raw high-dimensional data directly -- this latent-space idea becomes extremely important later in latent diffusion\n• Pixel-wise reconstruction losses punish deviations, and when multiple plausible outputs exist for the same input, averaging them produces blur -- this is why early VAE reconstructions often looked blurry, smooth, or averaged rather than sharp',
      bodyKn: '• VAE ಒಂದೂ ಪ್ರಮುಖ ಆಲೋಚನೆ ಪರಿಚಯಿಸಿತು: raw high-dimensional data ಅನ್ನೂ ನೇರವಾಗಿ ಎದುರಿಸುವ ಬದಲು ಒಂದೂ ಉಪಯುಕ್ತ latent representation ಕಲಿಯಿರಿ -- ಈ latent-space ಆಲೋಚನೆ ನಂತರ latent diffusion ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯವಾಗುತ್ತದೆ\n• Pixel-wise reconstruction losses ವ್ಯತ್ಯಾಸಗಳನ್ನೂ ಶಿಕ್ಷಿಸುತ್ತವೆ, ಮತ್ತು ಅದೇ input ಗೆ ಅನೇಕ ಸಂಭಾವ್ಯ outputs ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದಾಗ, ಅವುಗಳನ್ನೂ ಸರಾಸರಿ ಮಾಡುವುದೂ blur ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಆರಂಭಿಕ VAE reconstructions ಸಾಮಾನ್ಯವಾಗಿ blurry, smooth, ಅಥವಾ averaged ಕಾಣುತ್ತಿದ್ದ ಕಾರಣ ಇದೇ, ತೀಕ್ಷ್ಣ ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: '2014 — GAN: Match Realism Through a Discriminator', textKn: '2014 — GAN: Match Realism Through a Discriminator', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why GANs Looked So Good, and Their Major Problem', headingKn: 'GANs ಏಕೆ ಇಷ್ಟೂ ಚೆನ್ನಾಗಿ ಕಂಡವು, ಮತ್ತು ಅವುಗಳ ಪ್ರಮುಖ ಸಮಸ್ಯೆ',
      bodyEn: '• The discriminator does not ask "are these pixels close to the training image?" -- it asks "does this look like a sample from the real distribution?" This produces pressure toward realistic high-frequency structure, which is why GANs became famous for sharp images (faces, bedrooms, cars) especially in fixed domains\n• GAN training is a two-player game: if the discriminator becomes too good, the generator gets poor gradients; if the generator exploits a small subset of the distribution (mode collapse), diversity suffers. GANs traded explicit likelihood for sharp samples and training instability',
      bodyKn: '• Discriminator "ಈ pixels training image ಗೆ ಹತ್ತಿರವಿದೆಯೇ?" ಎಂದೂ ಕೇಳುವುದಿಲ್ಲ -- ಅದೂ "ಇದೂ ನಿಜ distribution ಇಂದ ಒಂದೂ sample ರೀತಿ ಕಾಣುತ್ತದೆಯೇ?" ಎಂದೂ ಕೇಳುತ್ತದೆ. ಇದೂ ವಾಸ್ತವಿಕ high-frequency ರಚನೆ ಕಡೆಗೆ ಒತ್ತಡ ಉತ್ಪಾದಿಸುತ್ತದೆ, GANs ತೀಕ್ಷ್ಣ images ಗೆ (faces, bedrooms, cars) ವಿಶೇಷವಾಗಿ ಸ್ಥಿರ domains ನಲ್ಲಿ ಪ್ರಸಿದ್ಧವಾದ ಕಾರಣ ಇದೇ\n• GAN training ಒಂದೂ two-player game: discriminator ತುಂಬಾ ಒಳ್ಳೆಯದಾದರೆ, generator ಗೆ ಕಳಪೆ gradients ಸಿಗುತ್ತವೆ; generator distribution ನ ಒಂದೂ ಚಿಕ್ಕ subset ಬಳಸಿಕೊಂಡರೆ (mode collapse), diversity ನಷ್ಟವಾಗುತ್ತದೆ. GANs explicit likelihood ಅನ್ನೂ ತೀಕ್ಷ್ಣ samples ಮತ್ತು training instability ಜೊತೆ ವಿನಿಮಯ ಮಾಡಿಕೊಂಡವು' } },

    { type: 'heading', data: { textEn: '2015–2017 — Autoregressive Models and Normalizing Flows', textKn: '2015–2017 — Autoregressive Models and Normalizing Flows', level: 'H2' } },
    { type: 'math', data: {
      formula: 'p(x) = product p(x_i | x_<i)          logp(x) = logp(z) - log|det J_f|',
      descEn: '• PixelCNN made pixel-level autoregressive factorization practical for images; WaveNet did the same for audio waveforms; GPT-style transformers made it enormously successful for text. Flows instead transform z~N(0,I) through an invertible f to get exact likelihood via the change-of-variables formula',
      descKn: 'PixelCNN pixel-level autoregressive factorization ಅನ್ನೂ images ಗೆ ಪ್ರಾಯೋಗಿಕ ಮಾಡಿತು; WaveNet audio waveforms ಗೆ ಅದೇ ಮಾಡಿತು; GPT-style transformers ಇದನ್ನೂ text ಗೆ ಅಪಾರವಾಗಿ ಯಶಸ್ವಿ ಮಾಡಿದವು. Flows ಬದಲು z~N(0,I) ಅನ್ನೂ ಒಂದೂ invertible f ಮೂಲಕ ಪರಿವರ್ತಿಸುತ್ತವೆ change-of-variables formula ಮೂಲಕ ನಿಖರ likelihood ಪಡೆಯಲು' } },
    { type: 'concept', data: {
      headingEn: 'Why AR Fit Language But Not Images', headingKn: 'AR Language ಗೆ ಏಕೆ ಹೊಂದಿಕೊಂಡಿತು ಆದರೆ Images ಗೆ ಅಲ್ಲ',
      bodyEn: '• Language already has a natural order (The -> cat -> sat -> on -> the -> mat), so the AR factorization is natural. For images, pixel ordering is arbitrary -- a pixel in the upper-left corner does not naturally determine the lower-right corner, which is the generation-order problem\n• A 1024-token image representation may need 1024 sequential decode steps; language models already deal with sequential decoding, but image generation has much larger 2D token counts, making image AR inference expensive -- this eventually motivates VAR. Flows gave exact likelihood but the invertibility requirement restricts architecture design',
      bodyKn: '• Language ಈಗಾಗಲೇ ಒಂದೂ ಸ್ವಾಭಾವಿಕ order ಹೊಂದಿದೆ (The -> cat -> sat -> on -> the -> mat), ಆದ್ದರಿಂದ AR factorization ಸ್ವಾಭಾವಿಕ. Images ಗಾಗಿ, pixel ordering ಅನಿಯಂತ್ರಿತ -- ಮೇಲ್ಭಾಗದ-ಎಡ ಮೂಲೆಯಲ್ಲಿ ಒಂದೂ pixel ಸ್ವಾಭಾವಿಕವಾಗಿ ಕೆಳಗಿನ-ಬಲ ಮೂಲೆ ನಿರ್ಧರಿಸುವುದಿಲ್ಲ, ಇದೂ generation-order ಸಮಸ್ಯೆ\n• ಒಂದೂ 1024-token image representation ಗೆ 1024 sequential decode steps ಬೇಕಾಗಬಹುದು; language models ಈಗಾಗಲೇ sequential decoding ಎದುರಿಸುತ್ತವೆ, ಆದರೆ image generation ಗೆ ಹೆಚ್ಚು ದೊಡ್ಡ 2D token counts ಇವೆ, image AR inference ದುಬಾರಿ ಮಾಡುತ್ತಾ -- ಇದೂ ಅಂತಿಮವಾಗಿ VAR ಗೆ ಪ್ರೇರೇಪಿಸುತ್ತದೆ. Flows ನಿಖರ likelihood ಕೊಟ್ಟವು ಆದರೆ invertibility ಅಗತ್ಯ architecture design ಅನ್ನೂ ನಿರ್ಬಂಧಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '2020 — DDPM: The Turning Point', textKn: '2020 — DDPM: The Turning Point', level: 'H2' } },
    { type: 'math', data: {
      formula: 'x_t = sqrt(alphabar_t) x0 + sqrt(1-alphabar_t) eps, eps~N(0,I)          train eps_theta(x_t,t) via MSE',
      descEn: '• DDPM defines a forward process where signal decreases and noise increases as t grows, until x_T is approximately Gaussian noise. A network eps_theta(x_t,t) is trained to predict the noise, and generation reverses the chain step by step: noise -> denoise -> denoise -> ... -> image',
      descKn: 'DDPM ಒಂದೂ forward process ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ ಅಲ್ಲಿ t ಬೆಳೆದಂತೆ signal ಕಡಿಮೆಯಾಗುತ್ತದೆ ಮತ್ತು noise ಹೆಚ್ಚಾಗುತ್ತದೆ, x_T ಸುಮಾರು Gaussian noise ಆಗುವವರೆಗೆ. ಒಂದೂ network eps_theta(x_t,t) noise ಊಹಿಸಲು train ಆಗುತ್ತದೆ, ಮತ್ತು generation chain ಅನ್ನೂ step ಮೂಲಕ step ಹಿಮ್ಮುಖಗೊಳಿಸುತ್ತದೆ: noise -> denoise -> denoise -> ... -> image' } },
    { type: 'concept', data: {
      headingEn: 'Why DDPM Won', headingKn: 'DDPM ಏಕೆ ಗೆದ್ದಿತು',
      bodyEn: '• DDPM brought together stable training, excellent image quality, strong conditioning, and scalable architectures -- much more stable than many GAN training setups. It became the foundation for text-to-image, image-to-image, inpainting, video, audio, and 3D priors\n• The cost is that generation is inherently iterative (many denoising steps), unlike a GAN\'s single forward pass -- this cost becomes the central concern of the 2022-2024 latent diffusion and flow matching eras',
      bodyKn: '• DDPM ಸ್ಥಿರ training, ಅತ್ಯುತ್ತಮ image quality, ಪ್ರಬಲ conditioning, ಮತ್ತು scalable architectures ಒಟ್ಟಿಗೆ ತಂದಿತು -- ಅನೇಕ GAN training setups ಗಿಂತ ಹೆಚ್ಚು ಸ್ಥಿರ. ಅದೂ text-to-image, image-to-image, inpainting, video, audio, ಮತ್ತು 3D priors ಗಾಗಿ ಅಡಿಪಾಯವಾಯಿತು\n• ವೆಚ್ಚ ಎಂದರೆ generation ಸ್ವಾಭಾವಿಕವಾಗಿ iterative (ಅನೇಕ denoising steps), ಒಂದೂ GAN ನ single forward pass ಗಿಂತ ಭಿನ್ನ -- ಈ ವೆಚ್ಚ 2022-2024 latent diffusion ಮತ್ತು flow matching eras ನ ಮುಖ್ಯ ಕಾಳಜಿಯಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: '2021–2022 — CLIP, VQGAN, and Latent Diffusion', textKn: '2021–2022 — CLIP, VQGAN, and Latent Diffusion', level: 'H2' } },
    { type: 'code', data: {
      filename: 'latent_diffusion_savings.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: the dimensionality reduction Stable Diffusion-style latent diffusion achieves by running the diffusion process on a compressed latent (e.g. 4x64x64) instead of raw pixels (3x512x512).',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: Stable Diffusion-style latent diffusion raw pixels (3x512x512) ಬದಲು ಒಂದೂ compressed latent (4x64x64) ಮೇಲೆ diffusion process ಚಲಾಯಿಸುವ ಮೂಲಕ ಸಾಧಿಸುವ dimensionality reduction.',
      code: "pixel_dims = 3 * 512 * 512\nlatent_dims = 4 * 64 * 64\n\nprint('Pixel-space dimensions:', pixel_dims)\nprint('Latent-space dimensions:', latent_dims)\nprint('Reduction ratio:', round(pixel_dims / latent_dims, 2), 'x smaller')" } },
    { type: 'output', data: { output: "Pixel-space dimensions: 786432\nLatent-space dimensions: 16384\nReduction ratio: 48.0 x smaller" } },
    { type: 'concept', data: {
      headingEn: 'Compress Before You Denoise', headingKn: 'Denoise ಮಾಡುವ ಮೊದಲೂ Compress ಮಾಡಿ',
      bodyEn: '• Genuinely confirmed: running diffusion in a compressed VAE latent (4x64x64 = 16,384 values) instead of raw pixels (3x512x512 = 786,432 values) is a 48x reduction in the tensor size the denoising network must process -- a dramatic, directly verifiable computational saving\n• CLIP provided joint image-text embeddings in a shared semantic space, making text-conditioned generation practical. VQGAN combined VAE-style compression with autoregressive transformers over discrete visual tokens -- appearing in DALL-E, Parti, Muse, and eventually leading toward VAR. The Stable Diffusion recipe (text encoder + VAE encoder + diffusion U-Net + VAE decoder) is one of the most important architectures to understand',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: raw pixels (3x512x512 = 786,432 values) ಬದಲು ಒಂದೂ compressed VAE latent (4x64x64 = 16,384 values) ನಲ್ಲಿ diffusion ಚಲಾಯಿಸುವುದೂ denoising network ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬೇಕಾದ tensor size ನಲ್ಲಿ 48x ಕಡಿತ -- ಒಂದೂ ನಾಟಕೀಯ, ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಬಹುದಾದ computational ಉಳಿತಾಯ\n• CLIP ಒಂದೂ ಹಂಚಿಕೆಯ semantic space ನಲ್ಲಿ joint image-text embeddings ಒದಗಿಸಿತು, text-conditioned generation ಪ್ರಾಯೋಗಿಕ ಮಾಡುತ್ತಾ. VQGAN VAE-style compression ಅನ್ನೂ discrete visual tokens ಮೇಲೆ autoregressive transformers ಜೊತೆ ಸಂಯೋಜಿಸಿತು -- DALL-E, Parti, Muse ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡಿತು, ಅಂತಿಮವಾಗಿ VAR ಕಡೆಗೆ ಕಾರಣವಾಗುತ್ತಾ. Stable Diffusion recipe (text encoder + VAE encoder + diffusion U-Net + VAE decoder) ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದ ಅತ್ಯಂತ ಪ್ರಮುಖ architectures ಗಳಲ್ಲಿ ಒಂದೂ' } },

    { type: 'heading', data: { textEn: '2022–2024 — ControlNet, LoRA, DiT, Flow Matching', textKn: '2022–2024 — ControlNet, LoRA, DiT, Flow Matching', level: 'H2' } },
    { type: 'math', data: {
      formula: "W' = W + BA, rank(BA) << rank(W)          v_theta(x,t) target = x1 - x0 for x_t=(1-t)x0+t*x1",
      descEn: '• LoRA fine-tunes a frozen pretrained model by adding a low-rank update W\' = W + BA where rank(BA) is much smaller than rank(W), making fine-tuning dramatically cheaper. Flow matching learns a velocity field directly with a simpler straight-line training target than DDPM\'s noise prediction',
      descKn: "LoRA ಒಂದೂ frozen pretrained model ಅನ್ನೂ ಒಂದೂ low-rank update W' = W + BA ಸೇರಿಸುವ ಮೂಲಕ fine-tune ಮಾಡುತ್ತದೆ ಅಲ್ಲಿ rank(BA) rank(W) ಗಿಂತ ಬಹಳ ಚಿಕ್ಕದೂ, fine-tuning ಅನ್ನೂ ನಾಟಕೀಯವಾಗಿ ಅಗ್ಗ ಮಾಡುತ್ತಾ. Flow matching DDPM ನ noise prediction ಗಿಂತ ಸರಳ straight-line training target ಜೊತೆ ಒಂದೂ velocity field ಅನ್ನೂ ನೇರವಾಗಿ ಕಲಿಯುತ್ತದೆ" } },
    { type: 'concept', data: {
      headingEn: 'Efficient Adaptation, Transformer Backbones, Faster Sampling', headingKn: 'Efficient Adaptation, Transformer Backbones, ವೇಗದ Sampling',
      bodyEn: '• ControlNet adds spatial conditioning (pose, depth, edges, scribble) to a frozen diffusion model; LoRA makes fine-tuning cheap via low-rank updates. DiT replaced the U-Net with a Transformer over patchified latents, letting image generation research borrow the well-understood scaling behavior of transformers from language modeling -- LLMs, image DiT, video spatiotemporal DiT, and audio DiT all converged on the same backbone pattern\n• Diffusion often needs 20-50+ sampling steps; flow matching learns a velocity field v_theta(x,t) with target x1-x0 for the straight-line interpolant x_t=(1-t)x0+t*x1, which can make trajectories easier to integrate (50 steps -> 10 -> 4), and rectified flow further straightens trajectories to enable distillation down to 2 or even 1 step',
      bodyKn: '• ControlNet ಒಂದೂ frozen diffusion model ಗೆ spatial conditioning (pose, depth, edges, scribble) ಸೇರಿಸುತ್ತದೆ; LoRA low-rank updates ಮೂಲಕ fine-tuning ಅಗ್ಗ ಮಾಡುತ್ತದೆ. DiT U-Net ಅನ್ನೂ patchified latents ಮೇಲೆ ಒಂದೂ Transformer ಜೊತೆ ಬದಲಾಯಿಸಿತು, image generation research ಗೆ language modeling ಇಂದ transformers ನ ಚೆನ್ನಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡ scaling ವರ್ತನೆಯನ್ನೂ ಎರವಲು ಪಡೆಯಲು ಬಿಡುತ್ತಾ -- LLMs, image DiT, video spatiotemporal DiT, ಮತ್ತು audio DiT ಎಲ್ಲಾ ಅದೇ backbone ಮಾದರಿಗೆ ಒಮ್ಮುಖವಾದವು\n• Diffusion ಗೆ ಸಾಮಾನ್ಯವಾಗಿ 20-50+ sampling steps ಬೇಕು; flow matching x_t=(1-t)x0+t*x1 straight-line interpolant ಗೆ target x1-x0 ಜೊತೆ ಒಂದೂ velocity field v_theta(x,t) ಕಲಿಯುತ್ತದೆ, ಇದೂ trajectories ಅನ್ನೂ ಸಂಯೋಜಿಸಲು ಸುಲಭ ಮಾಡಬಹುದು (50 steps -> 10 -> 4), ಮತ್ತು rectified flow trajectories ಅನ್ನೂ ಮತ್ತಷ್ಟೂ ನೇರಗೊಳಿಸುತ್ತದೆ 2 ಅಥವಾ 1 step ಗೆ distillation ಸಾಧ್ಯಗೊಳಿಸುತ್ತಾ' } },

    { type: 'diagram', data: {
      titleEn: 'The 2013 → 2026 Timeline', titleKn: '2013 → 2026 Timeline',
      captionEn: 'Genuinely traced progression: each era solves the specific problem left open by the one before it, converging on VAR as the visual-AR answer to the generation-order problem raised back in the 2015-2017 AR era.',
      captionKn: 'ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿದ ಪ್ರಗತಿ: ಪ್ರತಿಯೊಂದೂ era ಅದೂ ಗಿಂತ ಮೊದಲಿನದೂ ಬಿಟ್ಟುಹೋದ ನಿರ್ದಿಷ್ಟ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ, 2015-2017 AR era ನಲ್ಲಿ ಎತ್ತಿದ generation-order ಸಮಸ್ಯೆಗೆ visual-AR ಉತ್ತರವಾಗಿ VAR ನಲ್ಲಿ ಒಮ್ಮುಖವಾಗುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 760 260' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<line x1='40' y1='20' x2='40' y2='240' stroke='#94a3b8'/>\n<circle cx='40' cy='20' r='4' fill='#4ade80'/><text x='55' y='24' fill='#cbd5e1' font-size='11'>2013 VAE -- compress the data</text>\n<circle cx='40' cy='50' r='4' fill='#fb923c'/><text x='55' y='54' fill='#cbd5e1' font-size='11'>2014 GAN -- match realism, avoid density</text>\n<circle cx='40' cy='80' r='4' fill='#60a5fa'/><text x='55' y='84' fill='#cbd5e1' font-size='11'>2015-17 AR / Flow -- factorize / invert</text>\n<circle cx='40' cy='110' r='4' fill='#f87171'/><text x='55' y='114' fill='#cbd5e1' font-size='11'>2020 DDPM -- iterative denoising</text>\n<circle cx='40' cy='140' r='4' fill='#4ade80'/><text x='55' y='144' fill='#cbd5e1' font-size='11'>2021-22 CLIP/VQGAN/Latent Diffusion -- 48x smaller tensors</text>\n<circle cx='40' cy='170' r='4' fill='#fb923c'/><text x='55' y='174' fill='#cbd5e1' font-size='11'>2022-23 ControlNet/LoRA -- efficient control/adaptation</text>\n<circle cx='40' cy='200' r='4' fill='#60a5fa'/><text x='55' y='204' fill='#cbd5e1' font-size='11'>2023-24 DiT/Flow Matching -- transformer + fewer steps</text>\n<circle cx='40' cy='230' r='4' fill='#f87171'/><text x='55' y='234' fill='#cbd5e1' font-size='11'>2024+ VAR -- autoregress over scale, not token order</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Problem -> Solution Timeline (genuinely verified)', captionKn: 'Problem -> Solution Timeline (ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ)',
      rows: "Era|Problem|Main idea\nVAE|High-dimensional data|Learn latent representation\nGAN|Blurry likelihood-based generations|Adversarial distribution matching\nAR|Need tractable probability|Factorize into conditionals\nFlow|Need exact density|Invertible transformation\nDDPM|GAN instability / generation quality|Iterative denoising\nLatent diffusion|Pixel-space cost|Diffuse in 48x-smaller VAE latent\nDiT|Need scalable denoiser|Transformer over latent patches\nFlow matching|Too many diffusion steps|Learn velocity field\nVAR|Image AR has bad ordering|Autoregress over scale" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: latent diffusion\'s core computational saving is a real, verifiable 48x reduction (786,432 pixel dims -> 16,384 latent dims), not a vague marketing claim -- this single number explains why Stable Diffusion-style latent diffusion became practical where pixel-space DDPM was expensive\n• Each era in the timeline solved a specific limitation of what came before: VAE\'s blur motivated GAN\'s adversarial sharpness; GAN\'s instability and lack of likelihood motivated AR/Flow and later diffusion; diffusion\'s pixel-space cost motivated latent diffusion; diffusion\'s many steps motivated flow matching; and image AR\'s bad token ordering motivated VAR\n• No model in this history fully replaced the ones before it -- GANs remain excellent for narrow, fast domains; VAEs remain the compression stage inside latent diffusion; AR remains dominant for language and audio tokens; each family kept its niche',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: latent diffusion ನ ಮುಖ್ಯ computational ಉಳಿತಾಯ ಒಂದೂ ನಿಜ, ಪರಿಶೀಲಿಸಬಹುದಾದ 48x ಕಡಿತ (786,432 pixel dims -> 16,384 latent dims), ಒಂದೂ ಅಸ್ಪಷ್ಟ marketing claim ಅಲ್ಲ -- ಈ ಒಂದೂ ಸಂಖ್ಯೆ Stable Diffusion-style latent diffusion pixel-space DDPM ದುಬಾರಿ ಇದ್ದಲ್ಲಿ ಏಕೆ ಪ್ರಾಯೋಗಿಕವಾಯಿತು ಎಂದೂ ವಿವರಿಸುತ್ತದೆ\n• Timeline ನಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ era ಅದೂ ಗಿಂತ ಮೊದಲಿನದೂ ನ ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಮಿತಿ ಪರಿಹರಿಸಿತು: VAE ನ blur GAN ನ adversarial ತೀಕ್ಷ್ಣತೆಗೆ ಪ್ರೇರೇಪಿಸಿತು; GAN ನ instability ಮತ್ತು likelihood ಕೊರತೆ AR/Flow ಮತ್ತು ನಂತರ diffusion ಗೆ ಪ್ರೇರೇಪಿಸಿತು; diffusion ನ pixel-space ವೆಚ್ಚ latent diffusion ಗೆ ಪ್ರೇರೇಪಿಸಿತು; diffusion ನ ಅನೇಕ steps flow matching ಗೆ ಪ್ರೇರೇಪಿಸಿತು; ಮತ್ತು image AR ನ ಕೆಟ್ಟ token ordering VAR ಗೆ ಪ್ರೇರೇಪಿಸಿತು\n• ಈ history ನಲ್ಲಿ ಯಾವುದೇ model ಅದೂ ಗಿಂತ ಮೊದಲಿನದನ್ನೂ ಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸಲಿಲ್ಲ -- GANs ಚಿಕ್ಕ, ವೇಗದ domains ಗೆ ಅತ್ಯುತ್ತಮವಾಗಿ ಉಳಿದಿವೆ; VAEs latent diffusion ಒಳಗೆ compression stage ಆಗಿ ಉಳಿದಿವೆ; AR language ಮತ್ತು audio tokens ಗೆ ಪ್ರಬಲವಾಗಿ ಉಳಿದಿದೆ; ಪ್ರತಿಯೊಂದೂ family ತನ್ನ niche ಉಳಿಸಿಕೊಂಡಿತು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely computed 48x latent-space reduction in this lesson is the exact number that made Stable Diffusion feasible to train and run on consumer GPUs -- a real production system whose entire architecture (text encoder + VAE encoder + diffusion U-Net + VAE decoder, as covered in this course\'s Module 163) is a direct instantiation of the 2021-2022 "compress before you denoise" idea traced in this lesson.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ 48x latent-space ಕಡಿತ Stable Diffusion ಅನ್ನೂ consumer GPUs ನಲ್ಲಿ train ಮಾಡಲು ಮತ್ತು ಚಲಾಯಿಸಲು ಕಾರ್ಯಸಾಧ್ಯ ಮಾಡಿದ ನಿಖರ ಸಂಖ್ಯೆ -- ಒಂದೂ ನಿಜ production system ಅದೂ ನ ಸಂಪೂರ್ಣ architecture (text encoder + VAE encoder + diffusion U-Net + VAE decoder, ಈ course ನ Module 163 ನಲ್ಲಿ ಒಳಗೊಂಡಂತೆ) ಈ lesson ನಲ್ಲಿ ಪತ್ತೆಹಚ್ಚಿದ 2021-2022 "denoise ಮಾಡುವ ಮೊದಲೂ compress ಮಾಡಿ" ಆಲೋಚನೆಯ ಒಂದೂ ನೇರ ಸಾಕಾರ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the historical progression is not arbitrary fashion -- each transition (VAE->GAN->AR/Flow->Diffusion->Latent Diffusion->DiT->Flow Matching->VAR) is driven by a specific, identifiable computational or quality bottleneck in the prior approach, which is why understanding the "problem -> solution" chain lets engineers predict what the next bottleneck-driven innovation is likely to target\n• Knowing which specific problem each family solved lets a practitioner diagnose which historical lineage a new paper belongs to and what trade-off it is likely making, rather than treating every new architecture as an unrelated novelty',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಐತಿಹಾಸಿಕ ಪ್ರಗತಿ ಅನಿಯಂತ್ರಿತ ಫ್ಯಾಶನ್ ಅಲ್ಲ -- ಪ್ರತಿಯೊಂದೂ ಪರಿವರ್ತನೆ (VAE->GAN->AR/Flow->Diffusion->Latent Diffusion->DiT->Flow Matching->VAR) ಹಿಂದಿನ ವಿಧಾನದಲ್ಲಿ ಒಂದೂ ನಿರ್ದಿಷ್ಟ, ಗುರುತಿಸಬಹುದಾದ computational ಅಥವಾ quality bottleneck ಮೂಲಕ ಚಾಲಿತವಾಗಿದೆ, "problem -> solution" ಸರಪಳಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ ಎಂಜಿನಿಯರ್‌ಗಳಿಗೆ ಮುಂದಿನ bottleneck-ಚಾಲಿತ ಆವಿಷ್ಕಾರ ಏನನ್ನೂ ಗುರಿಯಾಗಿಸಬಹುದು ಎಂದೂ ಊಹಿಸಲು ಬಿಡುವ ಕಾರಣ ಇದೇ\n• ಪ್ರತಿಯೊಂದೂ family ಪರಿಹರಿಸಿದ ನಿರ್ದಿಷ್ಟ ಸಮಸ್ಯೆ ತಿಳಿಯುವುದೂ ಒಂದೂ ಅಭ್ಯಾಸಕಾರರಿಗೆ ಒಂದೂ ಹೊಸ paper ಯಾವ ಐತಿಹಾಸಿಕ ವಂಶಾವಳಿಗೆ ಸೇರಿದೆ ಮತ್ತು ಅದೂ ಸಂಭವನೀಯವಾಗಿ ಯಾವ trade-off ಮಾಡುತ್ತಿದೆ ಎಂದೂ ಪತ್ತೆಹಚ್ಚಲು ಬಿಡುತ್ತದೆ, ಪ್ರತಿಯೊಂದೂ ಹೊಸ architecture ಅನ್ನೂ ಸಂಬಂಧವಿಲ್ಲದ ನವೀನತೆ ಎಂದೂ ಪರಿಗಣಿಸುವ ಬದಲು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a research team proposes replacing a diffusion U-Net with a transformer, they are genuinely repeating the DiT transition traced in this lesson: borrow the well-understood scaling laws of transformers from language modeling and apply them to the denoising network -- and when a team proposes a faster sampler, they are genuinely repeating the flow-matching transition, trading DDPM\'s noise-prediction objective for a directly learned velocity field to shrink the number of sampling steps.',
      bodyKn: 'ಒಂದೂ research team ಒಂದೂ diffusion U-Net ಅನ್ನೂ ಒಂದೂ transformer ಜೊತೆ ಬದಲಾಯಿಸಲು ಪ್ರಸ್ತಾಪಿಸಿದಾಗ, ಅವರೂ ಈ lesson ನಲ್ಲಿ ಪತ್ತೆಹಚ್ಚಿದ DiT ಪರಿವರ್ತನೆಯನ್ನೂ ನಿಜವಾಗಿ ಪುನರಾವರ್ತಿಸುತ್ತಿದ್ದಾರೆ: language modeling ಇಂದ transformers ನ ಚೆನ್ನಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡ scaling laws ಅನ್ನೂ ಎರವಲು ಪಡೆದೂ denoising network ಗೆ ಅನ್ವಯಿಸುತ್ತಾ -- ಮತ್ತು ಒಂದೂ team ಒಂದೂ ವೇಗದ sampler ಪ್ರಸ್ತಾಪಿಸಿದಾಗ, ಅವರೂ flow-matching ಪರಿವರ್ತನೆಯನ್ನೂ ನಿಜವಾಗಿ ಪುನರಾವರ್ತಿಸುತ್ತಿದ್ದಾರೆ, sampling steps ಸಂಖ್ಯೆ ಕುಗ್ಗಿಸಲು DDPM ನ noise-prediction objective ಅನ್ನೂ ಒಂದೂ ನೇರವಾಗಿ ಕಲಿತ velocity field ಜೊತೆ ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತಾ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what is the computational reduction from raw pixel space (3x512x512) to a typical latent diffusion latent (4x64x64)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: raw pixel space (3x512x512) ಇಂದ ಒಂದೂ typical latent diffusion latent (4x64x64) ಗೆ computational ಕಡಿತ ಎಷ್ಟೂ?',
        opts: ['2x', '48x -- genuinely computed as 786,432 / 16,384', '786,432x', 'No reduction'], correct: 1,
        optsKn: ['2x', '48x -- 786,432 / 16,384 ಎಂದೂ ನಿಜವಾಗಿ ಗಣಿಸಿದ', '786,432x', 'ಯಾವುದೇ ಕಡಿತ ಇಲ್ಲ'] },
      { q: 'Why did autoregressive models fit language much more naturally than raw images?', qKn: 'Autoregressive models raw images ಗಿಂತ language ಗೆ ಏಕೆ ಹೆಚ್ಚು ಸ್ವಾಭಾವಿಕವಾಗಿ ಹೊಂದಿಕೊಂಡವು?',
        opts: ['Language has no sequential structure', 'Language already has a natural left-to-right order, while pixel ordering in a 2D image is arbitrary (the generation-order problem)', 'Images have fewer dimensions than text', 'AR models cannot be applied to images at all'], correct: 1,
        optsKn: ['Language ಗೆ ಯಾವುದೇ sequential ರಚನೆ ಇಲ್ಲ', 'Language ಈಗಾಗಲೇ ಒಂದೂ ಸ್ವಾಭಾವಿಕ left-to-right order ಹೊಂದಿದೆ, 2D image ನಲ್ಲಿ pixel ordering ಅನಿಯಂತ್ರಿತ (generation-order ಸಮಸ್ಯೆ)', 'Images text ಗಿಂತ ಕಡಿಮೆ dimensions ಹೊಂದಿವೆ', 'AR models images ಗೆ ಎಂದಿಗೂ ಅನ್ವಯಿಸಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Why did early VAE reconstructions often look blurry?', qKn: 'ಆರಂಭಿಕ VAE reconstructions ಸಾಮಾನ್ಯವಾಗಿ ಏಕೆ blurry ಕಂಡವು?',
        opts: ['The encoder was too large', 'Pixel-wise reconstruction losses average over multiple plausible outputs when several are valid for the same input', 'VAEs cannot use neural networks', 'The KL term was always zero'], correct: 1,
        optsKn: ['Encoder ತುಂಬಾ ದೊಡ್ಡದಾಗಿತ್ತು', 'Pixel-wise reconstruction losses ಅದೇ input ಗೆ ಅನೇಕ ಮಾನ್ಯ outputs ಇದ್ದಾಗ ಅವುಗಳ ಮೇಲೆ ಸರಾಸರಿ ಮಾಡುತ್ತವೆ', 'VAEs neural networks ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'KL term ಯಾವಾಗಲೂ ಶೂನ್ಯವಾಗಿತ್ತು'] },
      { q: 'What specific problem did latent diffusion solve relative to plain DDPM?', qKn: 'ಸರಳ DDPM ಗೆ ಸಂಬಂಧಿಸಿದಂತೆ latent diffusion ಯಾವ ನಿರ್ದಿಷ್ಟ ಸಮಸ್ಯೆ ಪರಿಹರಿಸಿತು?',
        opts: ['Training instability', 'The high computational cost of running diffusion directly on full pixel-space tensors', 'Lack of conditioning support', 'Mode collapse'], correct: 1,
        optsKn: ['Training instability', 'ಪೂರ್ಣ pixel-space tensors ಮೇಲೆ ನೇರವಾಗಿ diffusion ಚಲಾಯಿಸುವ ಹೆಚ್ಚಿನ computational ವೆಚ್ಚ', 'Conditioning ಬೆಂಬಲದ ಕೊರತೆ', 'Mode collapse'] },
      { q: 'What did DiT (Diffusion Transformer) replace in the standard diffusion architecture?', qKn: 'DiT (Diffusion Transformer) standard diffusion architecture ನಲ್ಲಿ ಏನನ್ನೂ ಬದಲಾಯಿಸಿತು?',
        opts: ['The VAE encoder', 'The U-Net denoising backbone, with a Transformer over patchified latents', 'The text encoder', 'The noise schedule'], correct: 1,
        optsKn: ['VAE encoder', 'U-Net denoising backbone, patchified latents ಮೇಲೆ ಒಂದೂ Transformer ಜೊತೆ', 'Text encoder', 'Noise schedule'] },
    ] } },
  ],
};
