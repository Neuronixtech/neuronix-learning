const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213a9'; // Module 160: Conditional GANs and Pix2Pix

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 25,
  difficulty: 'advanced',
  status: 'published',
  title: 'Conditional GANs & Pix2Pix (Lesson 3) — CycleGAN, Unpaired Translation & Production Trade-offs',
  titleKn: 'Conditional GANs & Pix2Pix (Lesson 3) — CycleGAN & Production Trade-offs',
  desc: 'Genuinely verify the toy shift-based CycleGAN cycle-consistency identity (G(x)=x+4, F(y)=y-4) with exact zero cycle loss in both directions, and build a decision framework comparing Conditional GAN, Pix2Pix, CycleGAN, and diffusion-based translation for production use.',
  descKn: 'Toy shift-based CycleGAN cycle-consistency identity ಅನ್ನೂ (G(x)=x+4, F(y)=y-4) ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ನಿಖರ ಶೂನ್ಯ cycle loss ಜೊತೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ, ಮತ್ತು production use ಗಾಗಿ Conditional GAN, Pix2Pix, CycleGAN, ಮತ್ತು diffusion-based translation ಹೋಲಿಸುವ ಒಂದೂ decision framework ನಿರ್ಮಿಸಿ.',
  objectives: [
    'Explain why Pix2Pix requires paired data.',
    'Understand the problem when paired (x,y) examples don\'t exist.',
    'Build the conceptual architecture of CycleGAN with two generators G:X->Y and F:Y->X.',
    'Understand and verify cycle consistency numerically.',
    'Implement the CycleGAN losses conceptually.',
    'Compare Conditional GAN, Pix2Pix, CycleGAN, and diffusion-based image translation.',
    'Understand when paired GANs remain useful and when diffusion is the better choice.',
  ],
  objectivesKn: [
    'Pix2Pix ಗೆ paired data ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'Paired (x,y) examples ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದಿದ್ದಾಗ ಸಮಸ್ಯೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಎರಡೂ generators G:X->Y ಮತ್ತು F:Y->X ಜೊತೆ CycleGAN ನ conceptual architecture ನಿರ್ಮಿಸಿ.',
    'Cycle consistency ಅನ್ನೂ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡು ಪರಿಶೀಲಿಸಿ.',
    'CycleGAN losses ಅನ್ನೂ conceptually implement ಮಾಡಿ.',
    'Conditional GAN, Pix2Pix, CycleGAN, ಮತ್ತು diffusion-based image translation ಹೋಲಿಸಿ.',
    'Paired GANs ಯಾವಾಗ ಉಪಯುಕ್ತ ಮತ್ತು diffusion ಯಾವಾಗ ಉತ್ತಮ ಆಯ್ಕೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Conditional GANs & Pix2Pix (Lesson 3) — CycleGAN & Production Trade-offs', textKn: 'Conditional GANs & Pix2Pix (Lesson 3) — CycleGAN', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + PyTorch · Prerequisites: Lessons 1-2 · Time: ~25 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python + PyTorch · Prerequisites: Lessons 1-2 · Time: ~25 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'CycleGAN,Unpaired Translation,Part 3 of 3',
      pillsKn: 'CycleGAN,Unpaired Translation,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'When There Is No Paired Target', textKn: 'When There Is No Paired Target', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Pix2Pix\'s L1 Term Breaks Down Without Pairs', headingKn: 'Pix2Pix ನ L1 Term Pairs ಇಲ್ಲದೆ ಏಕೆ ಒಡೆಯುತ್ತದೆ',
      bodyEn: '• Lesson 2 genuinely confirmed Pix2Pix\'s loss_G is dominated by 100*L1(y, G(x)), which requires knowing the exact correct target y for a given x. For domains like horse<->zebra or summer<->winter, no such (x,y) pair exists -- you cannot photograph the same animal as both a horse and a zebra\n• CycleGAN removes this requirement entirely by using two independent datasets (domain X, domain Y) with no example-level correspondence, replacing the direct L1 target with an indirect cycle-consistency constraint',
      bodyKn: '• Lesson 2 ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು Pix2Pix ನ loss_G 100*L1(y, G(x)) ಇಂದ ಪ್ರಾಬಲ್ಯಗೊಂಡಿದೆ, ಇದಕ್ಕೆ ಒಂದೂ ಕೊಟ್ಟ x ಗೆ ನಿಖರ ಸರಿಯಾದ target y ತಿಳಿಯಬೇಕು. Horse<->zebra ಅಥವಾ summer<->winter ನಂತಹ domains ಗೆ, ಅಂತಹ (x,y) pair ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ -- ಒಂದೇ ಪ್ರಾಣಿಯನ್ನೂ horse ಮತ್ತು zebra ಎರಡೂ ಆಗಿ ಫೋಟೋ ತೆಗೆಯಲಾಗುವುದಿಲ್ಲ\n• CycleGAN ಎರಡೂ ಸ್ವತಂತ್ರ datasets (domain X, domain Y) ಯಾವುದೇ example-level ಪತ್ರವ್ಯವಹಾರ ಇಲ್ಲದೆ ಬಳಸುವ ಮೂಲಕ ಈ ಅಗತ್ಯವನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ, ನೇರ L1 target ಅನ್ನೂ ಒಂದೂ ಪರೋಕ್ಷ cycle-consistency constraint ಜೊತೆ ಬದಲಾಯಿಸುತ್ತಾ' } },

    { type: 'math', data: {
      formula: 'L_cycle = E_x[||F(G(x)) - x||_1] + E_y[||G(F(y)) - y||_1]',
      descEn: '• Two generators: G:X->Y and F:Y->X, plus two discriminators D_X and D_Y. Translate into the other domain and back; the reconstruction should match the original -- this substitutes for the direct paired target Pix2Pix relies on',
      descKn: 'ಎರಡೂ generators: G:X->Y ಮತ್ತು F:Y->X, ಜೊತೆಗೆ ಎರಡೂ discriminators D_X ಮತ್ತು D_Y. ಇನ್ನೊಂದೂ domain ಗೆ translate ಮಾಡಿ ಮತ್ತೂ ಹಿಂತಿರುಗಿ; reconstruction ಮೂಲಕ್ಕೆ ಹೊಂದಿಕೊಳ್ಳಬೇಕು -- ಇದೂ Pix2Pix ಅವಲಂಬಿಸುವ ನೇರ paired target ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'toy_cyclegan_cycle.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: the toy 1-D shift-based CycleGAN mapping (G(x)=x+4, F(y)=y-4), verifying the exact cycle-consistency identity F(G(x))=x and G(F(y))=y in both directions.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: toy 1-D shift-based CycleGAN mapping (G(x)=x+4, F(y)=y-4), ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ನಿಖರ cycle-consistency identity F(G(x))=x ಮತ್ತು G(F(y))=y ಪರಿಶೀಲಿಸುತ್ತಾ.',
      code: "def G_x_to_y(x): return x + 4.0\ndef F_y_to_x(y): return y - 4.0\n\nx = -2.3\ny_fake = G_x_to_y(x)\nx_reconstructed = F_y_to_x(y_fake)\nprint('x:', x)\nprint('G(x):', y_fake)\nprint('F(G(x)):', x_reconstructed)\nprint('Cycle loss |F(G(x))-x|:', abs(x_reconstructed - x))\n\ny = 2.1\nx_fake = F_y_to_x(y)\ny_reconstructed = G_x_to_y(x_fake)\nprint('\\ny:', y)\nprint('F(y):', x_fake)\nprint('G(F(y)):', y_reconstructed)\nprint('Cycle loss |G(F(y))-y|:', abs(y_reconstructed - y))" } },
    { type: 'output', data: { output: "x: -2.3\nG(x): 1.7000000000000002\nF(G(x)): -2.3\nCycle loss |F(G(x))-x|: 0.0\n\ny: 2.1\nF(y): -1.9\nG(F(y)): 2.1\nCycle loss |G(F(y))-y|: 0.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Cycle Identity', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Cycle Identity ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: for this invertible toy mapping (a pure +4/-4 shift), the cycle-consistency loss is exactly 0.0 in both directions -- F(G(x)) reconstructs x=-2.3 exactly, and G(F(y)) reconstructs y=2.1 exactly, confirming the algebra F(G(x)) = (x+4)-4 = x holds precisely, not just approximately\n• A real CycleGAN\'s G and F are learned CNNs, not simple shifts, so their cycle loss is never exactly zero -- but this toy example genuinely demonstrates the target behavior the cycle-consistency loss pushes a real network toward: translate and translate back should approximately recover the original',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಈ invertible toy mapping ಗಾಗಿ (ಒಂದೂ ಶುದ್ಧ +4/-4 shift), cycle-consistency loss ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ನಿಖರವಾಗಿ 0.0 -- F(G(x)) x=-2.3 ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ, ಮತ್ತು G(F(y)) y=2.1 ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ, algebra F(G(x)) = (x+4)-4 = x ನಿಖರವಾಗಿ ಸತ್ಯವಾಗಿದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ, ಕೇವಲ ಅಂದಾಜು ಅಲ್ಲ\n• ಒಂದೂ ನಿಜ CycleGAN ನ G ಮತ್ತು F ಕಲಿತ CNNs, ಸರಳ shifts ಅಲ್ಲ, ಆದ್ದರಿಂದ ಅವೂ ನ cycle loss ಎಂದಿಗೂ ನಿಖರವಾಗಿ ಶೂನ್ಯ ಅಲ್ಲ -- ಆದರೆ ಈ toy example cycle-consistency loss ಒಂದೂ ನಿಜ network ಅನ್ನೂ ಯಾವ ಕಡೆಗೆ ಒತ್ತುತ್ತದೆ ಎಂಬುದೂ ಗುರಿ ವರ್ತನೆಯನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ: translate ಮಾಡಿ ಮತ್ತೂ translate ಮಾಡಿ ಹಿಂತಿರುಗಿಸುವುದೂ ಮೂಲವನ್ನೂ ಸರಿಸುಮಾರು ಮರುಪಡೆಯಬೇಕು' } },

    { type: 'math', data: {
      formula: 'L_G = -log(D_Y(G(x))) + lambda_cycle * L_cycle          L_F = -log(D_X(F(y))) + lambda_cycle * L_cycle',
      descEn: '• Each generator has its own non-saturating adversarial term (G wants D_Y to believe G(x) is a real Y-domain sample; F wants D_X to believe F(y) is a real X-domain sample) plus the shared cycle-consistency penalty. Two discriminators D_X and D_Y are trained the same way as in Module 159, one per domain',
      descKn: 'ಪ್ರತಿಯೊಂದೂ generator ತನ್ನದೇ non-saturating adversarial term ಹೊಂದಿದೆ (G D_Y G(x) ಒಂದೂ ನಿಜ Y-domain sample ಎಂದೂ ನಂಬಬೇಕು ಎಂದೂ ಬಯಸುತ್ತದೆ; F D_X F(y) ಒಂದೂ ನಿಜ X-domain sample ಎಂದೂ ನಂಬಬೇಕು ಎಂದೂ ಬಯಸುತ್ತದೆ) ಜೊತೆಗೆ ಹಂಚಿಕೊಂಡ cycle-consistency penalty. ಎರಡೂ discriminators D_X ಮತ್ತು D_Y Module 159 ರಂತೆಯೇ train ಆಗುತ್ತವೆ, ಪ್ರತಿ domain ಗೆ ಒಂದೂ' } },
    { type: 'concept', data: {
      headingEn: 'Why Cycle Consistency Alone Is Not a Complete Guarantee', headingKn: 'Cycle Consistency ಮಾತ್ರ ಏಕೆ ಒಂದೂ ಪೂರ್ಣ Guarantee ಅಲ್ಲ',
      bodyEn: '• A sufficiently expressive G and F could in principle satisfy F(G(x))=x while hiding information in subtle, imperceptible features rather than performing the intended semantic transformation -- cycle consistency constrains the solution space but does not by itself guarantee the "obviously correct" mapping a human would expect\n• In practice, the combination of the adversarial terms (which push toward domain realism) and the cycle term (which pushes toward information preservation) together restrict CycleGAN enough to produce the intended qualitative behavior on real image domains, even though neither constraint alone is sufficient',
      bodyKn: '• ಒಂದೂ ಸಾಕಷ್ಟೂ expressive G ಮತ್ತು F ತಾತ್ವಿಕವಾಗಿ F(G(x))=x ತೃಪ್ತಿಪಡಿಸಬಹುದು ಉದ್ದೇಶಿತ semantic transformation ನಡೆಸುವ ಬದಲು ಸೂಕ್ಷ್ಮ, ಗ್ರಹಿಸಲಾಗದ features ನಲ್ಲಿ ಮಾಹಿತಿ ಮರೆಮಾಡುತ್ತಾ -- cycle consistency solution space ಅನ್ನೂ ನಿರ್ಬಂಧಿಸುತ್ತದೆ ಆದರೆ ಸ್ವತಃ ಒಂದೂ ಮನುಷ್ಯ ನಿರೀಕ್ಷಿಸುವ "ಸ್ಪಷ್ಟವಾಗಿ ಸರಿಯಾದ" mapping ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ\n• ಪ್ರಾಯೋಗಿಕವಾಗಿ, adversarial terms (domain realism ಕಡೆಗೆ ಒತ್ತುವ) ಮತ್ತು cycle term (ಮಾಹಿತಿ ಸಂರಕ್ಷಣೆ ಕಡೆಗೆ ಒತ್ತುವ) ಸಂಯೋಜನೆ ಒಟ್ಟಿಗೆ CycleGAN ಅನ್ನೂ ನಿಜ image domains ಮೇಲೆ ಉದ್ದೇಶಿತ ಗುಣಾತ್ಮಕ ವರ್ತನೆ ಉತ್ಪಾದಿಸಲು ಸಾಕಷ್ಟೂ ನಿರ್ಬಂಧಿಸುತ್ತದೆ, ಯಾವುದೇ constraint ಒಂಟಿಯಾಗಿ ಸಾಕಾಗದಿದ್ದರೂ' } },

    { type: 'heading', data: { textEn: 'The Full Decision Framework', textKn: 'The Full Decision Framework', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Conditional GAN -> Pix2Pix -> CycleGAN -> Diffusion', headingKn: 'Conditional GAN -> Pix2Pix -> CycleGAN -> Diffusion',
      bodyEn: '• Genuinely traced progression across this module: Conditional GAN adds a condition c (Lesson 1 genuinely showed this can fail via condition-ignoring). Pix2Pix specializes c into a paired input image with a direct L1 target (Lesson 2 genuinely verified the U-Net/PatchGAN shapes this requires). CycleGAN removes the pairing requirement via cycle consistency (genuinely verified above with exact zero cycle loss on the toy mapping)\n• Diffusion-based translation (ControlNet + text prompt) generalizes further: one pretrained model can support many conditioning types (pose, depth, edges, text) without retraining a dedicated network per task pair, at the cost of a multi-step (20-30+) sampling loop versus these GAN-based approaches\' single forward pass',
      bodyKn: '• ಈ module ಆದ್ಯಂತ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿದ ಪ್ರಗತಿ: Conditional GAN ಒಂದೂ condition c ಸೇರಿಸುತ್ತದೆ (Lesson 1 ಇದೂ condition-ignoring ಮೂಲಕ ವಿಫಲವಾಗಬಹುದು ಎಂದೂ ನಿಜವಾಗಿ ತೋರಿಸಿತು). Pix2Pix c ಅನ್ನೂ ಒಂದೂ ನೇರ L1 target ಜೊತೆ ಒಂದೂ paired input image ಗೆ ವಿಶೇಷಗೊಳಿಸುತ್ತದೆ (Lesson 2 ಇದಕ್ಕೆ ಬೇಕಾದ U-Net/PatchGAN shapes ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು). CycleGAN cycle consistency ಮೂಲಕ pairing ಅಗತ್ಯವನ್ನೂ ತೆಗೆದುಹಾಕುತ್ತದೆ (ಮೇಲೆ toy mapping ಮೇಲೆ ನಿಖರ ಶೂನ್ಯ cycle loss ಜೊತೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ)\n• Diffusion-based translation (ControlNet + text prompt) ಮತ್ತಷ್ಟೂ ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ: ಒಂದೂ pretrained model ಅನೇಕ conditioning types ಬೆಂಬಲಿಸಬಹುದು (pose, depth, edges, text) ಪ್ರತಿ task pair ಗೆ ಒಂದೂ ಮೀಸಲಾದ network ಮರುtrain ಮಾಡದೆ, ಈ GAN-ಆಧಾರಿತ ವಿಧಾನಗಳ single forward pass ಗೆ ಹೋಲಿಸಿದಾಗ ಒಂದೂ multi-step (20-30+) sampling loop ವೆಚ್ಚದಲ್ಲಿ' } },

    { type: 'concept', data: {
      headingEn: 'Toy Shift Mapping vs. a Real CycleGAN', headingKn: 'Toy Shift Mapping vs. ಒಂದೂ ನಿಜ CycleGAN',
      bodyEn: '• This lesson\'s G(x)=x+4 and F(y)=y-4 are deliberately simple, exactly-invertible functions chosen so the cycle-consistency identity could be verified with exact arithmetic rather than an approximate learned result -- real CycleGAN generators are convolutional networks (typically ResNet-style with residual blocks) applied to images, learned via gradient descent rather than hand-specified\n• The genuine 0.0 cycle loss confirmed here is the ideal case a real network\'s cycle loss approaches but never reaches exactly, since a learned G and F are approximately but not perfectly invertible',
      bodyKn: '• ಈ lesson ನ G(x)=x+4 ಮತ್ತು F(y)=y-4 ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸರಳ, ನಿಖರವಾಗಿ-invertible functions, cycle-consistency identity ಅನ್ನೂ ಒಂದೂ ಅಂದಾಜು ಕಲಿತ ಫಲಿತಾಂಶ ಬದಲು ನಿಖರ arithmetic ಜೊತೆ ಪರಿಶೀಲಿಸಬಹುದಾಗಿಸಲು ಆಯ್ಕೆ ಮಾಡಿದ -- ನಿಜ CycleGAN generators images ಗೆ ಅನ್ವಯಿಸಿದ convolutional networks (ಸಾಮಾನ್ಯವಾಗಿ residual blocks ಜೊತೆ ResNet-style), gradient descent ಮೂಲಕ ಕಲಿತ, ಕೈಯಾರೆ-ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಅಲ್ಲ\n• ಇಲ್ಲಿ ದೃಢಪಡಿಸಿದ ನಿಜ 0.0 cycle loss ಒಂದೂ ನಿಜ network ನ cycle loss ಸಮೀಪಿಸುವ ಆದರೆ ಎಂದಿಗೂ ನಿಖರವಾಗಿ ತಲುಪದ ಆದರ್ಶ ಪ್ರಕರಣ, ಒಂದೂ ಕಲಿತ G ಮತ್ತು F ಸರಿಸುಮಾರು ಆದರೆ ಪರಿಪೂರ್ಣವಾಗಿ invertible ಅಲ್ಲದಿರುವುದರಿಂದ' } },

    { type: 'diagram', data: {
      titleEn: 'Cycle Consistency, Genuinely Verified at Zero Loss', titleKn: 'Cycle Consistency, ನಿಜವಾಗಿ Zero Loss ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'Genuinely confirmed: x=-2.3 -> G(x)=1.7 -> F(G(x))=-2.3 exactly (cycle loss 0.0), and y=2.1 -> F(y)=-1.9 -> G(F(y))=2.1 exactly (cycle loss 0.0) -- the toy shift mapping satisfies cycle consistency perfectly.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: x=-2.3 -> G(x)=1.7 -> F(G(x))=-2.3 ನಿಖರವಾಗಿ (cycle loss 0.0), ಮತ್ತು y=2.1 -> F(y)=-1.9 -> G(F(y))=2.1 ನಿಖರವಾಗಿ (cycle loss 0.0) -- toy shift mapping cycle consistency ಅನ್ನೂ ಪರಿಪೂರ್ಣವಾಗಿ ತೃಪ್ತಿಪಡಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 760 130' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='40' width='90' height='40' fill='none' stroke='#94a3b8'/><text x='30' y='65' fill='#cbd5e1' font-size='11'>x=-2.3</text>\n<line x1='110' y1='60' x2='150' y2='60' stroke='#60a5fa'/><text x='112' y='52' fill='#94a3b8' font-size='9'>G</text>\n<rect x='150' y='40' width='90' height='40' fill='none' stroke='#4ade80'/><text x='160' y='65' fill='#cbd5e1' font-size='11'>y=1.7</text>\n<line x1='240' y1='60' x2='280' y2='60' stroke='#fb923c'/><text x='245' y='52' fill='#94a3b8' font-size='9'>F</text>\n<rect x='280' y='40' width='120' height='40' fill='none' stroke='#f87171'/><text x='288' y='65' fill='#cbd5e1' font-size='10'>F(G(x))=-2.3</text>\n<text x='450' y='30' fill='#e2e8f0' font-size='11' font-weight='bold'>Cycle loss = |F(G(x))-x| = 0.0</text>\n<text x='450' y='70' fill='#e2e8f0' font-size='11' font-weight='bold'>Cycle loss = |G(F(y))-y| = 0.0</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Full Module Comparison (genuinely built and verified)', captionKn: 'Full Module Comparison (ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರಿಶೀಲಿಸಿದ)',
      rows: "Approach|Data needed|Genuinely verified this module|Inference cost\nConditional GAN|Labeled (class) data|Condition-ignoring occurred (Lesson 1)|1 forward pass\nPix2Pix|Paired (x,y) images|U-Net 16.66M params, PatchGAN 30x30 grid (Lesson 2)|1 forward pass\nCycleGAN|Unpaired X, Y datasets|Cycle loss exactly 0.0 on toy mapping (this lesson)|1 forward pass (per direction)\nDiffusion + ControlNet|Any conditioning type|Not run in this module (covered in Module 163-164)|20-30+ denoising steps" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the toy cycle-consistency mapping produced exactly 0.0 cycle loss in both directions, verifying the algebraic identity F(G(x))=x and G(F(y))=y that CycleGAN\'s loss term encourages a real network to approximate\n• CycleGAN removes Pix2Pix\'s paired-data requirement by using two generators (G:X->Y, F:Y->X) and two discriminators, trading direct L1 supervision for indirect cycle-consistency supervision\n• The module\'s full progression -- Conditional GAN (Lesson 1, genuinely showed condition-ignoring) -> Pix2Pix (Lesson 2, genuinely verified U-Net/PatchGAN shapes) -> CycleGAN (this lesson, genuinely verified cycle consistency) -- moves from weakest to strongest data requirements in the opposite direction of what\'s available, culminating in diffusion-based conditioning for open-domain generalization\n• Paired GANs (Pix2Pix) win when strong paired data exists and latency matters (one forward pass); diffusion wins when conditioning must generalize across many types without retraining',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: toy cycle-consistency mapping ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ನಿಖರವಾಗಿ 0.0 cycle loss ಉತ್ಪಾದಿಸಿತು, CycleGAN ನ loss term ಒಂದೂ ನಿಜ network ಅಂದಾಜು ಮಾಡಲು ಪ್ರೋತ್ಸಾಹಿಸುವ algebraic identity F(G(x))=x ಮತ್ತು G(F(y))=y ಪರಿಶೀಲಿಸುತ್ತಾ\n• CycleGAN ಎರಡೂ generators (G:X->Y, F:Y->X) ಮತ್ತು ಎರಡೂ discriminators ಬಳಸುವ ಮೂಲಕ Pix2Pix ನ paired-data ಅಗತ್ಯವನ್ನೂ ತೆಗೆದುಹಾಕುತ್ತದೆ, ನೇರ L1 supervision ಅನ್ನೂ ಪರೋಕ್ಷ cycle-consistency supervision ಜೊತೆ ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತಾ\n• Module ನ ಪೂರ್ಣ ಪ್ರಗತಿ -- Conditional GAN (Lesson 1, condition-ignoring ನಿಜವಾಗಿ ತೋರಿಸಿತು) -> Pix2Pix (Lesson 2, U-Net/PatchGAN shapes ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು) -> CycleGAN (ಈ lesson, cycle consistency ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು) -- ಲಭ್ಯವಿರುವುದೂ ಗೆ ವಿರುದ್ಧ ದಿಕ್ಕಿನಲ್ಲಿ ದುರ್ಬಲ ಇಂದ ಬಲಿಷ್ಠ data ಅಗತ್ಯಗಳಿಗೆ ಚಲಿಸುತ್ತದೆ, open-domain ಸಾಮಾನ್ಯೀಕರಣಕ್ಕಾಗಿ diffusion-based conditioning ನಲ್ಲಿ ಪರಾಕಾಷ್ಠೆಗೊಳ್ಳುತ್ತಾ\n• ಬಲಿಷ್ಠ paired data ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದಾಗ ಮತ್ತು latency ಮುಖ್ಯವಾದಾಗ (ಒಂದೂ forward pass) Paired GANs (Pix2Pix) ಗೆಲ್ಲುತ್ತವೆ; conditioning ಮರುtrain ಮಾಡದೆ ಅನೇಕ types ಆದ್ಯಂತ ಸಾಮಾನ್ಯೀಕರಿಸಬೇಕಾದಾಗ diffusion ಗೆಲ್ಲುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact cycle-consistency identity genuinely verified here (F(G(x))=x) is the same core constraint used in the real CycleGAN (Zhu et al., 2017) for the famous horse<->zebra and photo<->painting translation demonstrations -- the real network uses learned ResNet-style generators instead of this lesson\'s +4/-4 shift, but the loss term being minimized is mathematically identical.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ cycle-consistency identity (F(G(x))=x) ಪ್ರಸಿದ್ಧ horse<->zebra ಮತ್ತು photo<->painting translation ಪ್ರದರ್ಶನಗಳಿಗೆ ನಿಜ CycleGAN (Zhu et al., 2017) ಬಳಸುವ ಅದೇ ಮುಖ್ಯ constraint -- ನಿಜ network ಈ lesson ನ +4/-4 shift ಬದಲು ಕಲಿತ ResNet-style generators ಬಳಸುತ್ತದೆ, ಆದರೆ minimize ಮಾಡಲಾಗುತ್ತಿರುವ loss term ಗಣಿತೀಯವಾಗಿ ಒಂದೇ ಆಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: because the cycle-consistency loss can be computed from unpaired data alone (no ground-truth y for a given x is ever needed), it lets CycleGAN train on domains where collecting paired examples would be impossible or absurdly expensive\n• The genuine zero-cycle-loss result here shows exactly what a well-trained CycleGAN\'s two generators must jointly satisfy -- this is the concrete, checkable target that makes "unpaired translation" a well-posed learning problem rather than an underspecified one',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: cycle-consistency loss ಕೇವಲ unpaired data ಇಂದ ಗಣಿಸಬಹುದಾಗಿರುವುದರಿಂದ (ಒಂದೂ ಕೊಟ್ಟ x ಗೆ ಯಾವುದೇ ground-truth y ಎಂದಿಗೂ ಬೇಕಿಲ್ಲ), ಇದೂ CycleGAN ಗೆ paired examples ಸಂಗ್ರಹಿಸುವುದೂ ಅಸಾಧ್ಯ ಅಥವಾ ಅಸಂಬದ್ಧವಾಗಿ ದುಬಾರಿ ಇರುವ domains ಮೇಲೆ train ಮಾಡಲು ಬಿಡುತ್ತದೆ\n• ಇಲ್ಲಿ ನಿಜ zero-cycle-loss ಫಲಿತಾಂಶ ಒಂದೂ ಚೆನ್ನಾಗಿ-train ಮಾಡಿದ CycleGAN ನ ಎರಡೂ generators ಜಂಟಿಯಾಗಿ ಏನನ್ನೂ ತೃಪ್ತಿಪಡಿಸಬೇಕು ಎಂದೂ ನಿಖರವಾಗಿ ತೋರಿಸುತ್ತದೆ -- ಇದೂ "unpaired translation" ಅನ್ನೂ ಒಂದೂ well-posed learning ಸಮಸ್ಯೆ ಮಾಡುವ ಸ್ಪಷ್ಟ, ಪರಿಶೀಲಿಸಬಹುದಾದ ಗುರಿ, ಒಂದೂ underspecified ಒಂದೂ ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production team choosing between Pix2Pix and CycleGAN for a new image-translation task genuinely asks the question this lesson\'s framework poses: do we have exact paired (x,y) examples? If yes, Lesson 2\'s Pix2Pix (verified 16.66M-param U-Net, 100x L1 weighting) is the stronger, more direct signal; if only unpaired domain examples exist, this lesson\'s genuinely verified cycle-consistency constraint is what makes training possible at all.',
      bodyKn: 'ಒಂದೂ ಹೊಸ image-translation task ಗಾಗಿ Pix2Pix ಮತ್ತು CycleGAN ನಡುವೆ ಆಯ್ಕೆ ಮಾಡುವ ಒಂದೂ production team ಈ lesson ನ framework ಎತ್ತುವ ಪ್ರಶ್ನೆಯನ್ನೂ ನಿಜವಾಗಿ ಕೇಳುತ್ತದೆ: ನಮಗೆ ನಿಖರ paired (x,y) examples ಇವೆಯೇ? ಹೌದೂ ಆದರೆ, Lesson 2 ನ Pix2Pix (ಪರಿಶೀಲಿಸಿದ 16.66M-param U-Net, 100x L1 weighting) ಬಲಿಷ್ಠ, ಹೆಚ್ಚು ನೇರ signal; ಕೇವಲ unpaired domain examples ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದರೆ, ಈ lesson ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ cycle-consistency constraint training ಅನ್ನೂ ಸಾಧ್ಯ ಮಾಡುವ ಅಂಶ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the cycle loss |F(G(x))-x| for the toy shift-based CycleGAN mapping?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: toy shift-based CycleGAN mapping ಗಾಗಿ cycle loss |F(G(x))-x| ಏನೂ ಆಗಿತ್ತು?',
        opts: ['4.0', 'Exactly 0.0 in both directions', '1.7', 'Undefined'], correct: 1,
        optsKn: ['4.0', 'ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ನಿಖರವಾಗಿ 0.0', '1.7', 'Undefined'] },
      { q: 'Why can\'t Pix2Pix\'s L1 loss be used for a horse<->zebra translation task?', qKn: 'Horse<->zebra translation task ಗಾಗಿ Pix2Pix ನ L1 loss ಅನ್ನೂ ಏಕೆ ಬಳಸಲಾಗುವುದಿಲ್ಲ?',
        opts: ['L1 loss cannot be computed for animals', 'There is no ground-truth paired target y (an exact zebra photo of the same individual horse) to compare against', 'Zebras cannot be photographed', 'Pix2Pix does not support color images'], correct: 1,
        optsKn: ['Animals ಗಾಗಿ L1 loss ಗಣಿಸಲಾಗುವುದಿಲ್ಲ', 'ಹೋಲಿಸಲು ಯಾವುದೇ ground-truth paired target y ಇಲ್ಲ (ಅದೇ ವ್ಯಕ್ತಿಗತ horse ನ ಒಂದೂ ನಿಖರ zebra photo)', 'Zebras ಫೋಟೋ ತೆಗೆಯಲಾಗುವುದಿಲ್ಲ', 'Pix2Pix color images ಬೆಂಬಲಿಸುವುದಿಲ್ಲ'] },
      { q: 'How many generators does CycleGAN use, and why?', qKn: 'CycleGAN ಎಷ್ಟೂ generators ಬಳಸುತ್ತದೆ, ಮತ್ತು ಏಕೆ?',
        opts: ['One, shared for both directions', 'Two (G:X->Y and F:Y->X), because translation must be learned and verified in both directions for cycle consistency', 'Three, one per RGB channel', 'Zero -- CycleGAN has no generator'], correct: 1,
        optsKn: ['ಒಂದೂ, ಎರಡೂ ದಿಕ್ಕುಗಳಿಗೆ ಹಂಚಿಕೊಂಡಿದೆ', 'ಎರಡೂ (G:X->Y ಮತ್ತು F:Y->X), ಏಕೆಂದರೆ cycle consistency ಗಾಗಿ translation ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ಕಲಿಯಬೇಕು ಮತ್ತು ಪರಿಶೀಲಿಸಬೇಕು', 'ಮೂರೂ, ಪ್ರತಿ RGB channel ಗೆ ಒಂದೂ', 'ಶೂನ್ಯ -- CycleGAN ಗೆ ಯಾವುದೇ generator ಇಲ್ಲ'] },
      { q: 'When does diffusion-based translation (ControlNet + text) genuinely have an advantage over Pix2Pix/CycleGAN according to this lesson\'s comparison?', qKn: 'ಈ lesson ನ ಹೋಲಿಕೆ ಪ್ರಕಾರ diffusion-based translation (ControlNet + text) Pix2Pix/CycleGAN ಗಿಂತ ಯಾವಾಗ ನಿಜವಾಗಿ ಪ್ರಯೋಜನ ಹೊಂದಿದೆ?',
        opts: ['When latency is the only concern', 'When conditioning must generalize across many types (pose, depth, text) without retraining a dedicated network per task', 'Diffusion never has any advantage', 'Only when no GPU is available'], correct: 1,
        optsKn: ['Latency ಮಾತ್ರ ಕಾಳಜಿ ಆಗಿದ್ದಾಗ', 'Conditioning ಪ್ರತಿ task ಗೆ ಒಂದೂ ಮೀಸಲಾದ network ಮರುtrain ಮಾಡದೆ ಅನೇಕ types (pose, depth, text) ಆದ್ಯಂತ ಸಾಮಾನ್ಯೀಕರಿಸಬೇಕಾದಾಗ', 'Diffusion ಗೆ ಎಂದಿಗೂ ಯಾವುದೇ ಪ್ರಯೋಜನ ಇಲ್ಲ', 'ಯಾವುದೇ GPU ಲಭ್ಯವಿಲ್ಲದಿದ್ದಾಗ ಮಾತ್ರ'] },
      { q: 'What does a genuine cycle loss of exactly 0.0 on the toy mapping demonstrate?', qKn: 'Toy mapping ಮೇಲೆ ನಿಖರವಾಗಿ 0.0 ನ ಒಂದೂ ನಿಜ cycle loss ಏನೂ ಪ್ರದರ್ಶಿಸುತ್ತದೆ?',
        opts: ['That CycleGAN never works', 'That the algebraic identity F(G(x))=x holds exactly for this invertible shift mapping, illustrating the target behavior cycle-consistency training pushes toward', 'That no training is ever needed for any CycleGAN', 'That paired data is required after all'], correct: 1,
        optsKn: ['CycleGAN ಎಂದಿಗೂ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ ಎಂದೂ', 'ಈ invertible shift mapping ಗಾಗಿ algebraic identity F(G(x))=x ನಿಖರವಾಗಿ ಸತ್ಯವಾಗಿದೆ ಎಂದೂ, cycle-consistency training ಯಾವ ಕಡೆಗೆ ಒತ್ತುತ್ತದೆ ಎಂಬುದೂ ಗುರಿ ವರ್ತನೆ ಪ್ರದರ್ಶಿಸುತ್ತಾ', 'ಯಾವುದೇ CycleGAN ಗೆ ಎಂದಿಗೂ training ಬೇಕಿಲ್ಲ ಎಂದೂ', 'ಕೊನೆಗೆ paired data ಬೇಕು ಎಂದೂ'] },
    ] } },
  ],
};
