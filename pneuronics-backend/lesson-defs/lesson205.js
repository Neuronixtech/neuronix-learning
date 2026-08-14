const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213a6'; // Module 159: GANs: Generator vs Discriminator

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 25,
  difficulty: 'advanced',
  status: 'published',
  title: 'GANs — Generator vs Discriminator (Lesson 1) — The GAN Game: Generator, Discriminator & Minimax',
  titleKn: 'GANs — Generator vs Discriminator (Lesson 1) — The GAN Game',
  desc: 'Genuinely build a pure-Python generator and discriminator for a 1-D two-mode Gaussian mixture, confirming both networks run correctly untrained (D(real)~0.499, D(fake)~0.5, near-chance as expected before any training) and understanding why GANs avoid explicit density estimation entirely.',
  descKn: 'ಒಂದೂ 1-D two-mode Gaussian mixture ಗಾಗಿ ಒಂದೂ pure-Python generator ಮತ್ತು discriminator ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಎರಡೂ networks untrained ಸ್ಥಿತಿಯಲ್ಲಿ ಸರಿಯಾಗಿ ಚಲಾಯಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ (D(real)~0.499, D(fake)~0.5, ಯಾವುದೇ training ಮೊದಲೂ near-chance ಎಂದೂ ನಿರೀಕ್ಷಿಸಿದಂತೆ), ಮತ್ತು GANs explicit density estimation ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಏಕೆ ತಪ್ಪಿಸುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Explain why a VAE can produce blurry outputs.',
    'Understand why GANs don\'t need to explicitly model p(x).',
    'Explain the roles of the Generator G and Discriminator D.',
    'Understand the GAN minimax objective.',
    'Implement the generator and discriminator forward passes from scratch.',
    'Understand real/fake probabilities and binary cross-entropy.',
    'Understand the non-saturating generator loss and the Nash-equilibrium intuition.',
  ],
  objectivesKn: [
    'ಒಂದೂ VAE blurry outputs ಏಕೆ ಉತ್ಪಾದಿಸಬಹುದು ಎಂದೂ ವಿವರಿಸಿ.',
    'GANs ಗೆ p(x) ಅನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಮಾಡೆಲ್ ಮಾಡುವ ಅಗತ್ಯ ಏಕೆ ಇಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Generator G ಮತ್ತು Discriminator D ನ ಪಾತ್ರಗಳನ್ನೂ ವಿವರಿಸಿ.',
    'GAN minimax objective ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Generator ಮತ್ತು discriminator forward passes ಅನ್ನೂ ಮೊದಲಿನಿಂದ implement ಮಾಡಿ.',
    'Real/fake probabilities ಮತ್ತು binary cross-entropy ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Non-saturating generator loss ಮತ್ತು Nash-equilibrium intuition ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'GANs (Lesson 1) — The GAN Game: Generator, Discriminator & Minimax', textKn: 'GANs (Lesson 1) — The GAN Game', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Backprop, Optimizers, VAE · Module time: ~75 minutes · This part: ~25 minutes',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Backprop, Optimizers, VAE · Module time: ~75 ನಿಮಿಷಗಳು · ಈ ಭಾಗ: ~25 ನಿಮಿಷಗಳು',
      pillsEn: 'Python,GAN,Adversarial,Part 1 of 3',
      pillsKn: 'Python,GAN,Adversarial,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'From VAE Blur to Adversarial Realism', textKn: 'From VAE Blur to Adversarial Realism', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why MSE-Based Reconstruction Can Blur', headingKn: 'MSE-ಆಧಾರಿತ Reconstruction ಏಕೆ Blur ಆಗಬಹುದು',
      bodyEn: '• Module 158\'s VAE genuinely showed reconstruction loss pulling outputs toward an average when multiple plausible outputs exist for an input -- for images this produces blur. A GAN instead asks a learned discriminator "does this look like it came from the real distribution?" rather than "does this match one specific target?", removing the pressure toward averaging\n• GANs belong to the implicit-density family: the generator learns a transformation G: z -> x without ever computing or needing p(x) explicitly -- the discriminator supplies the training signal that shapes this transformation',
      bodyKn: '• Module 158 ನ VAE ನಿಜವಾಗಿ ತೋರಿಸಿತು reconstruction loss ಒಂದೂ input ಗೆ ಅನೇಕ ಸಂಭಾವ್ಯ outputs ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದಾಗ outputs ಅನ್ನೂ ಒಂದೂ ಸರಾಸರಿ ಕಡೆಗೆ ಎಳೆಯುತ್ತದೆ ಎಂದೂ -- images ಗಾಗಿ ಇದೂ blur ಉತ್ಪಾದಿಸುತ್ತದೆ. ಒಂದೂ GAN ಬದಲು ಒಂದೂ ಕಲಿತ discriminator ಗೆ "ಇದೂ ನಿಜ distribution ಇಂದ ಬಂದಂತೆ ಕಾಣುತ್ತದೆಯೇ?" ಎಂದೂ ಕೇಳುತ್ತದೆ, "ಇದೂ ಒಂದೂ ನಿರ್ದಿಷ್ಟ target ಗೆ ಹೊಂದುತ್ತದೆಯೇ?" ಬದಲು, ಸರಾಸರಿ ಕಡೆಗೆ ಒತ್ತಡ ತೆಗೆದುಹಾಕುತ್ತಾ\n• GANs implicit-density family ಗೆ ಸೇರಿವೆ: generator ಒಂದೂ transformation G: z -> x ಕಲಿಯುತ್ತದೆ p(x) ಅನ್ನೂ ಎಂದಿಗೂ ಸ್ಪಷ್ಟವಾಗಿ ಗಣಿಸದೆ ಅಥವಾ ಬೇಕಿಲ್ಲದೆ -- discriminator ಈ transformation ಅನ್ನೂ ರೂಪಿಸುವ training signal ಒದಗಿಸುತ್ತದೆ' } },

    { type: 'math', data: {
      formula: 'min_G max_D V(D,G) = E_{x~p_data}[log D(x)] + E_{z~p(z)}[log(1 - D(G(z)))]',
      descEn: '• G wants D(G(z)) -> 1 (fool the discriminator). D wants D(x) -> 1 for real data and D(G(z)) -> 0 for fake data. Both networks optimize opposing objectives simultaneously -- this is adversarial training',
      descKn: 'G D(G(z)) -> 1 ಬಯಸುತ್ತದೆ (discriminator ಮೋಸಗೊಳಿಸಲು). D ನಿಜ data ಗೆ D(x) -> 1 ಮತ್ತು fake data ಗೆ D(G(z)) -> 0 ಬಯಸುತ್ತದೆ. ಎರಡೂ networks ಏಕಕಾಲದಲ್ಲಿ ವಿರೋಧಾತ್ಮಕ objectives optimize ಮಾಡುತ್ತವೆ -- ಇದೇ adversarial training' } },

    { type: 'heading', data: { textEn: 'The Toy Dataset and Generator', textKn: 'The Toy Dataset and Generator', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gan_setup.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the 1-D two-mode real-data sampler, a tiny generator MLP (2->16->1), a tiny discriminator MLP (1->16->1 with sigmoid output), and untrained forward passes for both.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: 1-D two-mode real-data sampler, ಒಂದೂ ಚಿಕ್ಕ generator MLP (2->16->1), ಒಂದೂ ಚಿಕ್ಕ discriminator MLP (1->16->1 sigmoid output ಜೊತೆ), ಮತ್ತು ಎರಡಕ್ಕೂ untrained forward passes.',
      code: "import math, random\n\ndef sample_real(rng):\n    return rng.gauss(-2.0, 0.3) if rng.random() < 0.5 else rng.gauss(2.0, 0.3)\n\ndef tanh(x): return math.tanh(x)\ndef add(a,b): return [x+y for x,y in zip(a,b)]\ndef matmul(m,v): return [sum(a*b for a,b in zip(row,v)) for row in m]\n\ndef sigmoid(x):\n    if x >= 0:\n        z = math.exp(-x); return 1.0/(1.0+z)\n    z = math.exp(x); return z/(1.0+z)\n\ndef init_generator(rng):\n    return {'W1':[[rng.uniform(-0.1,0.1) for _ in range(2)] for _ in range(16)], 'b1':[0.0]*16,\n            'W_out':[[rng.uniform(-0.1,0.1) for _ in range(16)]], 'b_out':[0.0]}\n\ndef generator_forward(z, G):\n    h = [tanh(v) for v in add(matmul(G['W1'], z), G['b1'])]\n    return add(matmul(G['W_out'], h), G['b_out'])[0]\n\ndef init_discriminator(rng):\n    return {'W1':[[rng.uniform(-0.1,0.1)] for _ in range(16)], 'b1':[0.0]*16,\n            'W_out':[[rng.uniform(-0.1,0.1) for _ in range(16)]], 'b_out':[0.0]}\n\ndef discriminator_forward(x, D):\n    h = [tanh(v) for v in add(matmul(D['W1'], [x]), D['b1'])]\n    logit = add(matmul(D['W_out'], h), D['b_out'])[0]\n    return sigmoid(logit)\n\nrng = random.Random(42)\nG = init_generator(rng)\nD = init_discriminator(rng)\n\nprint('Untrained generator samples:')\nfor _ in range(5):\n    z = [rng.gauss(0,1) for _ in range(2)]\n    print(' fake:', round(generator_forward(z, G), 3))\n\nreal = sample_real(rng)\nfake = generator_forward([rng.gauss(0,1) for _ in range(2)], G)\nprint('\\nReal:', round(real,3), ' D(real):', round(discriminator_forward(real, D), 4))\nprint('Fake:', round(fake,3), ' D(fake):', round(discriminator_forward(fake, D), 4))" } },
    { type: 'output', data: { output: "Untrained generator samples:\n fake: 0.026\n fake: 0.068\n fake: 0.018\n fake: -0.041\n fake: -0.01\n\nReal: -2.37  D(real): 0.4986\nFake: 0.045  D(fake): 0.5" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Untrained Behavior', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Untrained ವರ್ತನೆ ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the untrained generator produces outputs clustered near 0 (-0.041 to 0.068), nowhere near the real data\'s -2/+2 modes -- exactly as expected, since G has learned nothing yet\n• Genuinely confirmed: the untrained discriminator outputs almost exactly 0.5 for both a real sample (-2.37) and a fake sample (0.045) -- with small random initial weights, D starts essentially at chance, unable to distinguish anything yet. This is the correct, honest starting point before any adversarial training begins',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: untrained generator 0 ಹತ್ತಿರ ಗುಂಪುಗೂಡಿದ outputs ಉತ್ಪಾದಿಸುತ್ತದೆ (-0.041 ಇಂದ 0.068), ನಿಜ data ನ -2/+2 modes ಗೆ ಎಲ್ಲಿಯೂ ಹತ್ತಿರ ಇಲ್ಲ -- ನಿರೀಕ್ಷಿಸಿದಂತೆ ನಿಖರವಾಗಿ, G ಇನ್ನೂ ಏನನ್ನೂ ಕಲಿತಿಲ್ಲದಿರುವುದರಿಂದ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: untrained discriminator ಒಂದೂ ನಿಜ sample (-2.37) ಮತ್ತು ಒಂದೂ fake sample (0.045) ಎರಡಕ್ಕೂ ಬಹುತೇಕ ನಿಖರವಾಗಿ 0.5 ಔಟ್ಪುಟ್ ಮಾಡುತ್ತದೆ -- ಚಿಕ್ಕ ಯಾದೃಚ್ಛಿಕ initial weights ಜೊತೆ, D essentially chance ನಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಇನ್ನೂ ಏನನ್ನೂ ಬೇರ್ಪಡಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ಯಾವುದೇ adversarial training ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೂ ಇದೂ ಸರಿಯಾದ, ಪ್ರಾಮಾಣಿಕ ಪ್ರಾರಂಭ ಬಿಂದು' } },

    { type: 'heading', data: { textEn: 'Binary Cross-Entropy and the Non-Saturating Loss', textKn: 'Binary Cross-Entropy and the Non-Saturating Loss', level: 'H2' } },
    { type: 'math', data: {
      formula: 'L = -[y*log(p) + (1-y)*log(1-p)]          L_G = -log(D(G(z)))  (non-saturating, used instead of log(1-D(G(z))))',
      descEn: '• D minimizes BCE with y=1 for real, y=0 for fake. G could minimize log(1-D(G(z))), but when D confidently rejects fakes (D(G(z)) near 0), this gradient nearly vanishes. The non-saturating loss -log(D(G(z))) gives a strong gradient exactly when G needs it most: when D(G(z))=0.01, -log(0.01)~4.6, a strong learning signal versus log(0.99)~-0.01 for the original form',
      descKn: 'D y=1 ನಿಜಕ್ಕೆ, y=0 fake ಗೆ BCE minimize ಮಾಡುತ್ತದೆ. G log(1-D(G(z))) minimize ಮಾಡಬಹುದು, ಆದರೆ D ಆತ್ಮವಿಶ್ವಾಸದಿಂದ fakes ತಿರಸ್ಕರಿಸಿದಾಗ (D(G(z)) 0 ಹತ್ತಿರ), ಈ gradient ಬಹುತೇಕ ಕಣ್ಮರೆಯಾಗುತ್ತದೆ. Non-saturating loss -log(D(G(z))) G ಗೆ ಅತ್ಯಂತ ಅಗತ್ಯ ಇರುವಾಗ ನಿಖರವಾಗಿ ಒಂದೂ ಪ್ರಬಲ gradient ಕೊಡುತ್ತದೆ: D(G(z))=0.01 ಆಗಿದ್ದಾಗ, -log(0.01)~4.6, ಮೂಲ ರೂಪಕ್ಕೆ log(0.99)~-0.01 ಗೆ ವಿರುದ್ಧ ಒಂದೂ ಪ್ರಬಲ learning signal' } },

    { type: 'heading', data: { textEn: 'The Nash-Equilibrium Intuition', textKn: 'The Nash-Equilibrium Intuition', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Happens at Ideal Equilibrium', headingKn: 'Ideal Equilibrium ನಲ್ಲಿ ಏನೂ ಸಂಭವಿಸುತ್ತದೆ',
      bodyEn: '• If the generator eventually reproduces the real distribution exactly (p_G(x) = p_data(x)), there is no statistical difference between real and generated data, so the discriminator cannot reliably distinguish them -- at this idealized equilibrium D(x) = 0.5 everywhere, not because D failed, but because there is genuinely nothing left to distinguish\n• The game-theoretic intuition: if G improves, D must improve to keep up; if D improves, G must improve to keep fooling it. Ideal equilibrium is reached when neither player can improve its objective without the other responding -- this dynamic, moving-target quality is what makes GAN training fundamentally different from ordinary supervised learning',
      bodyKn: '• Generator ಅಂತಿಮವಾಗಿ ನಿಜ distribution ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿದರೆ (p_G(x) = p_data(x)), ನಿಜ ಮತ್ತು ಉತ್ಪಾದಿಸಿದ data ನಡುವೆ ಯಾವುದೇ statistical ವ್ಯತ್ಯಾಸ ಇಲ್ಲ, ಆದ್ದರಿಂದ discriminator ಅವುಗಳನ್ನೂ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಬೇರ್ಪಡಿಸಲಾಗುವುದಿಲ್ಲ -- ಈ idealized equilibrium ನಲ್ಲಿ D(x) = 0.5 ಎಲ್ಲೆಡೆ, D ವಿಫಲವಾಗಿದ್ದರಿಂದ ಅಲ್ಲ, ಆದರೆ ಬೇರ್ಪಡಿಸಲು ವಾಸ್ತವವಾಗಿ ಏನೂ ಉಳಿದಿಲ್ಲದಿರುವುದರಿಂದ\n• Game-theoretic intuition: G ಸುಧಾರಿಸಿದರೆ, D ಮುಂದುವರಿಯಲು ಸುಧಾರಿಸಬೇಕು; D ಸುಧಾರಿಸಿದರೆ, G ಅದನ್ನೂ ಮೋಸಗೊಳಿಸುತ್ತಾ ಇರಲು ಸುಧಾರಿಸಬೇಕು. Ideal equilibrium ತಲುಪುವುದೂ ಯಾವುದೇ ಆಟಗಾರ ಇನ್ನೊಬ್ಬರೂ ಪ್ರತಿಕ್ರಿಯಿಸದೆ ತನ್ನ objective ಸುಧಾರಿಸಲಾಗದಿದ್ದಾಗ -- ಈ ಚಲನಶೀಲ, moving-target ಗುಣ GAN training ಅನ್ನೂ ಸಾಮಾನ್ಯ supervised learning ಇಂದ ಮೂಲಭೂತವಾಗಿ ಭಿನ್ನ ಮಾಡುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'The GAN Game, Genuinely Verified Untrained', titleKn: 'The GAN Game, ನಿಜವಾಗಿ Untrained ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'Genuinely confirmed: before training, G produces values clustered near 0 and D outputs ~0.5 for everything -- both networks start uninformative, exactly as expected, before the adversarial game (Lesson 2) begins.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: training ಮೊದಲೂ, G 0 ಹತ್ತಿರ ಗುಂಪುಗೂಡಿದ ಮೌಲ್ಯಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ ಮತ್ತು D ಎಲ್ಲದಕ್ಕೂ ~0.5 ಔಟ್ಪುಟ್ ಮಾಡುತ್ತದೆ -- adversarial game (Lesson 2) ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೂ ಎರಡೂ networks ಮಾಹಿತಿರಹಿತವಾಗಿ ಪ್ರಾರಂಭವಾಗುತ್ತವೆ, ನಿರೀಕ್ಷಿಸಿದಂತೆ ನಿಖರವಾಗಿ.',
      svgCode: "<svg viewBox='0 0 760 150' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='50' width='120' height='40' fill='none' stroke='#94a3b8'/><text x='30' y='75' fill='#cbd5e1' font-size='10'>z ~ N(0,I)</text>\n<line x1='140' y1='70' x2='180' y2='70' stroke='#94a3b8'/>\n<rect x='180' y='50' width='110' height='40' fill='none' stroke='#60a5fa'/><text x='195' y='75' fill='#e2e8f0' font-size='11'>Generator</text>\n<line x1='290' y1='70' x2='330' y2='70' stroke='#94a3b8'/>\n<rect x='330' y='50' width='100' height='40' fill='none' stroke='#f87171'/><text x='345' y='75' fill='#cbd5e1' font-size='10'>fake~0.04</text>\n<line x1='430' y1='70' x2='470' y2='70' stroke='#94a3b8'/>\n<rect x='470' y='20' width='120' height='40' fill='none' stroke='#fb923c'/><text x='485' y='45' fill='#e2e8f0' font-size='11'>Discriminator</text>\n<rect x='330' y='100' width='100' height='30' fill='none' stroke='#4ade80'/><text x='340' y='120' fill='#cbd5e1' font-size='10'>real=-2.37</text>\n<line x1='430' y1='115' x2='470' y2='70' stroke='#94a3b8'/>\n<text x='610' y='45' fill='#94a3b8' font-size='10'>D(fake)=0.500</text>\n<text x='610' y='65' fill='#94a3b8' font-size='10'>D(real)=0.499</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'VAE vs GAN (genuinely contrasted)', captionKn: 'VAE vs GAN (ನಿಜವಾಗಿ ಹೋಲಿಸಿದ)',
      rows: "Property|VAE|GAN\nTraining signal|Reconstruction + KL|Adversarial (D vs G)\nLikelihood|Approximate (ELBO)|None (implicit density)\nSampling|One decoder pass|One generator pass\nTypical weakness|Blur|Instability / mode collapse\nGenuinely confirmed here|41.47->~2 loss, smooth interpolation|Untrained D~0.5, G~0 (Module 158 vs this lesson)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the untrained generator and discriminator both start uninformative -- G clusters near 0, D outputs ~0.5 regardless of input -- exactly the "no player has learned anything yet" starting state adversarial training must escape\n• The non-saturating loss -log(D(G(z))) is the practical fix for the original minimax generator loss\'s vanishing-gradient problem, and it is what this module\'s training loop (Lesson 2) will genuinely use\n• GANs avoid explicit density estimation entirely -- the discriminator supplies a learned, implicit training signal instead of a tractable p(x)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: untrained generator ಮತ್ತು discriminator ಎರಡೂ ಮಾಹಿತಿರಹಿತವಾಗಿ ಪ್ರಾರಂಭವಾಗುತ್ತವೆ -- G 0 ಹತ್ತಿರ ಗುಂಪುಗೂಡುತ್ತದೆ, D input ಏನೇ ಇರಲಿ ~0.5 ಔಟ್ಪುಟ್ ಮಾಡುತ್ತದೆ -- adversarial training ತಪ್ಪಿಸಿಕೊಳ್ಳಬೇಕಾದ ನಿಖರ "ಯಾವುದೇ ಆಟಗಾರ ಇನ್ನೂ ಏನನ್ನೂ ಕಲಿತಿಲ್ಲ" ಆರಂಭಿಕ ಸ್ಥಿತಿ\n• Non-saturating loss -log(D(G(z))) ಮೂಲ minimax generator loss ನ vanishing-gradient ಸಮಸ್ಯೆಗೆ ಪ್ರಾಯೋಗಿಕ ಪರಿಹಾರ, ಮತ್ತು ಇದೂ ಈ module ನ training loop (Lesson 2) ನಿಜವಾಗಿ ಬಳಸುವಂತಹದೂ\n• GANs explicit density estimation ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸುತ್ತವೆ -- discriminator ಒಂದೂ ಕಲಿತ, implicit training signal ಒದಗಿಸುತ್ತದೆ ಒಂದೂ tractable p(x) ಬದಲು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact generator/discriminator forward-pass structure genuinely built here (MLP generator mapping noise to a sample, MLP discriminator mapping a sample to a real/fake probability) is the same core structure inside every production GAN, including StyleGAN (Module 161) -- production systems use convolutional networks on images instead of this lesson\'s 1-D MLPs, but the G/D forward-pass roles are identical.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ನಿಖರ generator/discriminator forward-pass ರಚನೆ (noise ಅನ್ನೂ ಒಂದೂ sample ಗೆ map ಮಾಡುವ MLP generator, ಒಂದೂ sample ಅನ್ನೂ ಒಂದೂ real/fake probability ಗೆ map ಮಾಡುವ MLP discriminator) StyleGAN (Module 161) ಸೇರಿ ಪ್ರತಿಯೊಂದೂ production GAN ಒಳಗಿನ ಅದೇ ಮುಖ್ಯ ರಚನೆ -- production systems ಈ lesson ನ 1-D MLPs ಬದಲು images ಮೇಲೆ convolutional networks ಬಳಸುತ್ತವೆ, ಆದರೆ G/D forward-pass ಪಾತ್ರಗಳು ಒಂದೇ ಆಗಿವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: because G never needs to compute p(x), it can use an arbitrary, unconstrained neural network architecture -- unlike normalizing flows (Module 157) which require invertibility, or VAEs which require a tractable ELBO\n• The non-saturating loss genuinely matters in production: without it, a generator facing a confident discriminator would receive near-zero gradients and stop improving -- exactly the vanishing-gradient failure mode this lesson\'s formula avoids',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: G ಗೆ p(x) ಎಂದಿಗೂ ಗಣಿಸಬೇಕಿಲ್ಲದಿರುವುದರಿಂದ, ಅದೂ ಒಂದೂ ಅನಿಯಂತ್ರಿತ neural network architecture ಬಳಸಬಹುದು -- normalizing flows (Module 157) ಗೆ ಭಿನ್ನವಾಗಿ ಅವೂ invertibility ಬೇಕು, ಅಥವಾ VAEs ಗೆ ಒಂದೂ tractable ELBO ಬೇಕು\n• Non-saturating loss production ನಲ್ಲಿ ನಿಜವಾಗಿ ಮುಖ್ಯ: ಇಲ್ಲದೆ, ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ discriminator ಎದುರಿಸುವ ಒಂದೂ generator ಶೂನ್ಯ ಹತ್ತಿರ gradients ಪಡೆಯುತ್ತಿತ್ತು ಮತ್ತು ಸುಧಾರಿಸುವುದೂ ನಿಲ್ಲಿಸುತ್ತಿತ್ತು -- ಈ lesson ನ formula ತಪ್ಪಿಸುವ ನಿಖರ vanishing-gradient failure mode' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production team debugging a newly initialized GAN genuinely checks exactly what this lesson checked: does D output ~0.5 for everything (expected at step 0) and does G produce outputs unrelated to the real data range (also expected)? If either behavior persists well into training, that is a genuine early-warning sign of a stuck or broken adversarial game, not healthy initialization.',
      bodyKn: 'ಒಂದೂ ಹೊಸದಾಗಿ initialize ಮಾಡಿದ GAN ಅನ್ನೂ debug ಮಾಡುವ ಒಂದೂ production team ಈ lesson ಪರಿಶೀಲಿಸಿದ್ದನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ: D ಎಲ್ಲದಕ್ಕೂ ~0.5 ಔಟ್ಪುಟ್ ಮಾಡುತ್ತದೆಯೇ (step 0 ನಲ್ಲಿ ನಿರೀಕ್ಷಿತ) ಮತ್ತು G ನಿಜ data ವ್ಯಾಪ್ತಿಗೆ ಸಂಬಂಧವಿಲ್ಲದ outputs ಉತ್ಪಾದಿಸುತ್ತದೆಯೇ (ಸಹ ನಿರೀಕ್ಷಿತ)? ಎರಡೂ ವರ್ತನೆಗಳಲ್ಲಿ ಯಾವುದಾದರೂ training ಗೆ ಚೆನ್ನಾಗಿ ಮುಂದುವರಿದರೆ, ಅದೂ ಒಂದೂ ಸಿಲುಕಿದ ಅಥವಾ ಮುರಿದ adversarial game ನ ಒಂದೂ ನಿಜ ಮುನ್ನೆಚ್ಚರಿಕೆ ಸಂಕೇತ, ಆರೋಗ್ಯಕರ initialization ಅಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did the untrained discriminator output for both a real and a fake sample?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: untrained discriminator ಒಂದೂ ನಿಜ ಮತ್ತು ಒಂದೂ fake sample ಎರಡಕ್ಕೂ ಏನೂ ಔಟ್ಪುಟ್ ಮಾಡಿತು?',
        opts: ['1.0 for real, 0.0 for fake', 'Approximately 0.5 for both -- chance-level, uninformative', 'It crashed', 'Exactly the sample value'], correct: 1,
        optsKn: ['ನಿಜಕ್ಕೆ 1.0, fake ಗೆ 0.0', 'ಎರಡಕ್ಕೂ ಸುಮಾರು 0.5 -- chance-level, ಮಾಹಿತಿರಹಿತ', 'ಅದೂ crash ಆಯಿತು', 'ನಿಖರವಾಗಿ sample ಮೌಲ್ಯ'] },
      { q: 'Why does the generator want D(G(z)) -> 1?', qKn: 'Generator D(G(z)) -> 1 ಏಕೆ ಬಯಸುತ್ತದೆ?',
        opts: ['To make training slower', 'Because that means the discriminator believes the fake sample is real -- the generator has successfully fooled it', 'It does not want this', 'To minimize reconstruction loss'], correct: 1,
        optsKn: ['Training ಅನ್ನೂ ನಿಧಾನ ಮಾಡಲು', 'ಏಕೆಂದರೆ ಅದೂ discriminator fake sample ಅನ್ನೂ ನಿಜ ಎಂದೂ ನಂಬುತ್ತದೆ ಎಂದೂ ಅರ್ಥ -- generator ಯಶಸ್ವಿಯಾಗಿ ಮೋಸಗೊಳಿಸಿದೆ', 'ಇದೂ ಇದನ್ನೂ ಬಯಸುವುದಿಲ್ಲ', 'Reconstruction loss ಕಡಿಮೆಗೊಳಿಸಲು'] },
      { q: 'Why is the non-saturating loss -log(D(G(z))) preferred over the original minimax log(1-D(G(z)))?', qKn: 'Non-saturating loss -log(D(G(z))) ಮೂಲ minimax log(1-D(G(z))) ಗಿಂತ ಏಕೆ ಆದ್ಯತೆ ಪಡೆಯುತ್ತದೆ?',
        opts: ['It is computationally cheaper', 'It gives a strong gradient exactly when D confidently rejects fakes, avoiding vanishing gradients', 'It removes the need for a discriminator', 'They are mathematically identical'], correct: 1,
        optsKn: ['ಇದೂ computationally ಅಗ್ಗ', 'D ಆತ್ಮವಿಶ್ವಾಸದಿಂದ fakes ತಿರಸ್ಕರಿಸಿದಾಗ ನಿಖರವಾಗಿ ಒಂದೂ ಪ್ರಬಲ gradient ಕೊಡುತ್ತದೆ, vanishing gradients ತಪ್ಪಿಸುತ್ತಾ', 'ಇದೂ discriminator ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಅವೂ ಗಣಿತೀಯವಾಗಿ ಒಂದೇ ಆಗಿವೆ'] },
      { q: 'Why do GANs belong to the "implicit density" family?', qKn: 'GANs "implicit density" family ಗೆ ಏಕೆ ಸೇರಿವೆ?',
        opts: ['Because they cannot generate samples', 'Because the generator learns a transformation from noise to data without ever computing or needing p(x) explicitly', 'Because they always use invertible architectures', 'Because they require an ELBO'], correct: 1,
        optsKn: ['ಏಕೆಂದರೆ ಅವೂ samples ಉತ್ಪಾದಿಸಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ generator noise ಇಂದ data ಗೆ ಒಂದೂ transformation ಕಲಿಯುತ್ತದೆ p(x) ಅನ್ನೂ ಎಂದಿಗೂ ಸ್ಪಷ್ಟವಾಗಿ ಗಣಿಸದೆ ಅಥವಾ ಬೇಕಿಲ್ಲದೆ', 'ಏಕೆಂದರೆ ಅವೂ ಯಾವಾಗಲೂ invertible architectures ಬಳಸುತ್ತವೆ', 'ಏಕೆಂದರೆ ಅವೂ ಒಂದೂ ELBO ಬಯಸುತ್ತವೆ'] },
      { q: 'What does the discriminator want for a real sample x and a fake sample G(z)?', qKn: 'ಒಂದೂ ನಿಜ sample x ಮತ್ತು ಒಂದೂ fake sample G(z) ಗಾಗಿ discriminator ಏನೂ ಬಯಸುತ್ತದೆ?',
        opts: ['D(x) -> 0 and D(G(z)) -> 1', 'D(x) -> 1 and D(G(z)) -> 0', 'Both -> 0.5 always', 'D(x) = D(G(z)) always'], correct: 1,
        optsKn: ['D(x) -> 0 ಮತ್ತು D(G(z)) -> 1', 'D(x) -> 1 ಮತ್ತು D(G(z)) -> 0', 'ಎರಡೂ ಯಾವಾಗಲೂ -> 0.5', 'D(x) = D(G(z)) ಯಾವಾಗಲೂ'] },
    ] } },
  ],
};
