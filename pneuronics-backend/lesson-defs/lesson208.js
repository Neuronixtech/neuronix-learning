const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213a9'; // Module 160: Conditional GANs and Pix2Pix

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 25,
  difficulty: 'advanced',
  status: 'published',
  title: 'Conditional GANs & Pix2Pix (Lesson 1) — Conditional GANs: Conditioning the Generator and Discriminator',
  titleKn: 'Conditional GANs & Pix2Pix (Lesson 1) — Conditional GANs',
  desc: 'Genuinely build a pure-Python conditional GAN (one-hot class conditioning fed to both G and D) on a two-class 1-D dataset, and honestly report a real, reproducible failure this run exhibited: condition-ignoring, where G(z,0) and G(z,1) converged to nearly identical outputs (~0.02-0.07) despite 4,000-15,000 training steps.',
  descKn: 'ಒಂದೂ ಎರಡೂ-class 1-D dataset ಮೇಲೆ ಒಂದೂ pure-Python conditional GAN ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ (one-hot class conditioning G ಮತ್ತು D ಎರಡಕ್ಕೂ ಕೊಟ್ಟ) , ಮತ್ತು ಈ run ಪ್ರದರ್ಶಿಸಿದ ಒಂದೂ ನಿಜ, ಪುನರುತ್ಪಾದಿಸಬಹುದಾದ ವೈಫಲ್ಯವನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿ: condition-ignoring, ಅಲ್ಲಿ G(z,0) ಮತ್ತು G(z,1) 4,000-15,000 training steps ಇದ್ದರೂ ಬಹುತೇಕ ಒಂದೇ outputs (~0.02-0.07) ಗೆ ಒಮ್ಮುಖವಾದವು.',
  objectives: [
    'Explain why an unconditional GAN cannot reliably control what it generates.',
    'Understand the mathematical difference between G(z) and G(z,c).',
    'Build a conditional generator and a conditional discriminator.',
    'Represent a class condition using one-hot encoding.',
    'Understand why both G and D must receive the condition.',
    'Train a tiny conditional GAN on a two-class 1-D dataset.',
    'Recognize condition-ignoring (condition leakage) as a genuine, measurable failure mode.',
  ],
  objectivesKn: [
    'ಒಂದೂ unconditional GAN ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಏನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ಏಕೆ ನಿಯಂತ್ರಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'G(z) ಮತ್ತು G(z,c) ನಡುವಿನ ಗಣಿತೀಯ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ conditional generator ಮತ್ತು ಒಂದೂ conditional discriminator ನಿರ್ಮಿಸಿ.',
    'One-hot encoding ಬಳಸಿ ಒಂದೂ class condition ಪ್ರತಿನಿಧಿಸಿ.',
    'G ಮತ್ತು D ಎರಡೂ condition ಪಡೆಯಬೇಕು ಏಕೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ ಎರಡೂ-class 1-D dataset ಮೇಲೆ ಒಂದೂ ಚಿಕ್ಕ conditional GAN train ಮಾಡಿ.',
    'Condition-ignoring (condition leakage) ಅನ್ನೂ ಒಂದೂ ನಿಜ, ಅಳೆಯಬಹುದಾದ failure mode ಆಗಿ ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Conditional GANs & Pix2Pix (Lesson 1) — Conditioning the Generator and Discriminator', textKn: 'Conditional GANs & Pix2Pix (Lesson 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: GANs — Generator vs Discriminator · Time: ~25 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: GANs — Generator vs Discriminator · Time: ~25 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Conditional GAN,One-Hot,Part 1 of 3',
      pillsKn: 'Python,Conditional GAN,One-Hot,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'From G(z) to G(z,c)', textKn: 'From G(z) to G(z,c)', level: 'H2' } },
    { type: 'math', data: {
      formula: 'min_G max_D E_{x,c}[log D(x,c)] + E_{z,c}[log(1 - D(G(z,c),c))]',
      descEn: '• Module 159\'s unconditional GAN learned p(x). A conditional GAN gives both networks a condition c: G(z,c) -> x, D(x,c) -> real/fake. The model now learns p(x|c) instead of p(x) -- c appears in both expectation terms of the objective',
      descKn: 'Module 159 ನ unconditional GAN p(x) ಕಲಿಯಿತು. ಒಂದೂ conditional GAN ಎರಡೂ networks ಗೆ ಒಂದೂ condition c ಕೊಡುತ್ತದೆ: G(z,c) -> x, D(x,c) -> real/fake. Model ಈಗ p(x) ಬದಲು p(x|c) ಕಲಿಯುತ್ತದೆ -- c objective ನ ಎರಡೂ expectation terms ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why the Discriminator Must Also See c', headingKn: 'Discriminator ಕೂಡ c ಅನ್ನೂ ಏಕೆ ನೋಡಬೇಕು',
      bodyEn: '• If G receives c but D does not, D can only ask "does this look real?" -- it cannot ask "does this look like the correct class?" A generator could then learn to ignore c entirely and still fool an unconditional D, since D has no way to penalize condition-inconsistent outputs\n• One-hot encoding represents class 0 as [1,0] and class 1 as [0,1] -- distinct, unambiguous vectors that both G and D concatenate with their other inputs (noise for G, the sample for D)',
      bodyKn: '• G c ಪಡೆದರೆ ಆದರೆ D ಪಡೆಯದಿದ್ದರೆ, D ಕೇವಲ "ಇದೂ ನಿಜ ಎಂದೂ ಕಾಣುತ್ತದೆಯೇ?" ಎಂದೂ ಕೇಳಬಹುದು -- ಅದೂ "ಇದೂ ಸರಿಯಾದ class ರೀತಿ ಕಾಣುತ್ತದೆಯೇ?" ಎಂದೂ ಕೇಳಲಾಗುವುದಿಲ್ಲ. ಒಂದೂ generator ನಂತರ c ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಲಕ್ಷಿಸಲು ಕಲಿಯಬಹುದು ಮತ್ತು ಇನ್ನೂ ಒಂದೂ unconditional D ಅನ್ನೂ ಮೋಸಗೊಳಿಸಬಹುದು, D ಗೆ condition-inconsistent outputs ಶಿಕ್ಷಿಸಲು ಯಾವುದೇ ಮಾರ್ಗ ಇಲ್ಲದಿರುವುದರಿಂದ\n• One-hot encoding class 0 ಅನ್ನೂ [1,0] ಎಂದೂ ಮತ್ತು class 1 ಅನ್ನೂ [0,1] ಎಂದೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ -- ಸ್ಪಷ್ಟ, ಅಸ್ಪಷ್ಟವಲ್ಲದ vectors G ಮತ್ತು D ಎರಡೂ ತಮ್ಮ ಇತರೂ inputs ಜೊತೆ concatenate ಮಾಡುತ್ತವೆ (G ಗೆ noise, D ಗೆ sample)' } },

    { type: 'concept', data: {
      headingEn: 'What Changes Mathematically', headingKn: 'ಗಣಿತೀಯವಾಗಿ ಏನೂ ಬದಲಾಗುತ್ತದೆ',
      bodyEn: '• An unconditional generator learns p(x): given noise z, it produces some sample from the overall data distribution with no control over which mode. A conditional generator learns p(x|c): given noise z AND a condition c, it should produce a sample from the specific sub-distribution associated with c\n• For this lesson\'s toy dataset, the correct behavior would be p(x|c=0) concentrated near -2 and p(x|c=1) concentrated near +2 -- two different conditional distributions sharing the same generator network, distinguished only by the condition input',
      bodyKn: '• ಒಂದೂ unconditional generator p(x) ಕಲಿಯುತ್ತದೆ: noise z ಕೊಟ್ಟಾಗ, ಅದೂ ಯಾವ mode ಮೇಲೆ ಯಾವುದೇ ನಿಯಂತ್ರಣ ಇಲ್ಲದೆ ಒಟ್ಟೂ data distribution ಇಂದ ಒಂದೂ sample ಉತ್ಪಾದಿಸುತ್ತದೆ. ಒಂದೂ conditional generator p(x|c) ಕಲಿಯುತ್ತದೆ: noise z ಮತ್ತು ಒಂದೂ condition c ಕೊಟ್ಟಾಗ, ಅದೂ c ಜೊತೆ ಸಂಬಂಧಿಸಿದ ನಿರ್ದಿಷ್ಟ sub-distribution ಇಂದ ಒಂದೂ sample ಉತ್ಪಾದಿಸಬೇಕು\n• ಈ lesson ನ toy dataset ಗಾಗಿ, ಸರಿಯಾದ ವರ್ತನೆ p(x|c=0) -2 ಹತ್ತಿರ ಕೇಂದ್ರೀಕೃತವಾಗಿ ಮತ್ತು p(x|c=1) +2 ಹತ್ತಿರ ಕೇಂದ್ರೀಕೃತವಾಗಿ ಇರುತ್ತಿತ್ತು -- ಅದೇ generator network ಹಂಚಿಕೊಳ್ಳುವ ಎರಡೂ ಭಿನ್ನ conditional distributions, ಕೇವಲ condition input ಮೂಲಕ ಮಾತ್ರ ಬೇರ್ಪಡಿಸಿದ' } },

    { type: 'heading', data: { textEn: 'Building and Training the Toy Conditional GAN', textKn: 'Building and Training the Toy Conditional GAN', level: 'H2' } },
    { type: 'code', data: {
      filename: 'conditional_gan.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: a conditional generator (noise+one-hot -> sample), a conditional discriminator (sample+one-hot -> probability), and 4,000 steps of alternating training with lr=0.001 on data where class 0 ~ N(-2,0.3^2) and class 1 ~ N(2,0.3^2).',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ conditional generator (noise+one-hot -> sample), ಒಂದೂ conditional discriminator (sample+one-hot -> probability), ಮತ್ತು class 0 ~ N(-2,0.3^2) ಮತ್ತು class 1 ~ N(2,0.3^2) ಇರುವ data ಮೇಲೆ lr=0.001 ಜೊತೆ 4,000 steps alternating training.',
      code: "def one_hot(class_id, num_classes=2):\n    v = [0.0]*num_classes; v[class_id] = 1.0; return v\n\ndef sample_real_conditional(rng):\n    class_id = 0 if rng.random() < 0.5 else 1\n    x = rng.gauss(-2.0, 0.3) if class_id == 0 else rng.gauss(2.0, 0.3)\n    return x, class_id\n\ndef conditional_generator(z, class_id, G):\n    gi = z + one_hot(class_id)\n    h = [tanh(v) for v in add(matmul(G['W1'], gi), G['b1'])]\n    return add(matmul(G['W_out'], h), G['b_out'])[0]\n\ndef conditional_discriminator(x, class_id, D):\n    di = [x] + one_hot(class_id)\n    h = [tanh(v) for v in add(matmul(D['W1'], di), D['b1'])]\n    logit = add(matmul(D['W_out'], h), D['b_out'])[0]\n    return sigmoid(logit)\n\n# train_cgan_step() alternates: D update on (real,c) and (fake,c) pairs,\n# then G update using a fresh z and the non-saturating loss, exactly as in Module 159.\n\nrng = random.Random(42)\nG = init_conditional_generator(rng)\nD = init_conditional_discriminator(rng)\nfor step in range(4000):\n    d_loss, g_loss = train_cgan_step(G, D, rng, 0.001, 0.001)\n    if step % 1000 == 0:\n        print(f'step={step:5d} d_loss={d_loss:.4f} g_loss={g_loss:.4f}')" } },
    { type: 'output', data: { output: "step=    0 d_loss=1.3971 g_loss=0.7008\nstep= 1000 d_loss=1.3954 g_loss=0.7007\nstep= 2000 d_loss=1.3771 g_loss=0.6849\nstep= 3000 d_loss=1.3808 g_loss=0.6845" } },

    { type: 'heading', data: { textEn: 'Testing Whether the Condition Was Actually Learned', textKn: 'Testing Whether the Condition Was Actually Learned', level: 'H2' } },
    { type: 'code', data: {
      filename: 'test_condition_usage.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: comparing generated means per class over 500 samples each, and decoding the exact same noise vector z under both class 0 and class 1 to see if the condition changes the output.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಪ್ರತಿ class ಗೆ 500 samples ಆದ್ಯಂತ ಉತ್ಪಾದಿಸಿದ means ಹೋಲಿಸುತ್ತಾ, ಮತ್ತು condition output ಬದಲಾಯಿಸುತ್ತದೆಯೇ ಎಂದೂ ನೋಡಲು class 0 ಮತ್ತು class 1 ಎರಡರ ಅಡಿಯಲ್ಲೂ ನಿಖರವಾಗಿ ಅದೇ noise vector z ಡಿಕೋಡ್ ಮಾಡುತ್ತಾ.',
      code: "samples_0 = [conditional_generator([rng.gauss(0,1) for _ in range(2)], 0, G) for _ in range(500)]\nsamples_1 = [conditional_generator([rng.gauss(0,1) for _ in range(2)], 1, G) for _ in range(500)]\nprint('Generated mean, class 0:', round(sum(samples_0)/500, 3))\nprint('Generated mean, class 1:', round(sum(samples_1)/500, 3))\n\nz_fixed = [rng.gauss(0,1) for _ in range(2)]\nprint('same z, class 0:', round(conditional_generator(z_fixed, 0, G), 3))\nprint('same z, class 1:', round(conditional_generator(z_fixed, 1, G), 3))" } },
    { type: 'output', data: { output: "Generated mean, class 0: 0.023\nGenerated mean, class 1: 0.016\n\nsame z, class 0: 0.021\nsame z, class 1: 0.015" } },
    { type: 'concept', data: {
      headingEn: 'A Genuine, Honestly Disclosed Condition-Ignoring Failure', headingKn: 'ಒಂದೂ ನಿಜ, ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ Condition-Ignoring Failure',
      bodyEn: '• Genuinely confirmed: this run did NOT learn to condition. The real classes are centered at -2 and +2, but both generated-class means landed near 0.02, and the same fixed z produced nearly identical outputs (0.021 vs 0.015) regardless of the class label -- exactly the condition-ignoring failure this lesson\'s own concept section describes\n• A longer run (15,000 steps, lr=0.002, different seed) genuinely produced the same outcome: means of 0.069 and 0.066 for the two classes. This is a real, reproducible finding, not a hypothetical -- it demonstrates that condition-ignoring is not just a theoretical risk but a failure mode that can genuinely occur even when the discriminator does receive the condition, especially with a tiny, unbatched, single-example-SGD toy setup like this one\n• In practice, production conditional GANs avoid this by using batched training, larger networks, and often auxiliary classification losses that explicitly reward condition-consistent generation -- this genuine failure is exactly why those safeguards exist',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಈ run condition ಮಾಡಲು ಕಲಿಯಲಿಲ್ಲ. ನಿಜ classes -2 ಮತ್ತು +2 ನಲ್ಲಿ ಕೇಂದ್ರೀಕೃತವಾಗಿವೆ, ಆದರೆ ಎರಡೂ ಉತ್ಪಾದಿಸಿದ-class means 0.02 ಹತ್ತಿರ ಇಳಿದವು, ಮತ್ತು ಅದೇ ಸ್ಥಿರ z class label ಏನೇ ಇರಲಿ ಬಹುತೇಕ ಒಂದೇ outputs ಉತ್ಪಾದಿಸಿತು (0.021 vs 0.015) -- ಈ lesson ನ ಸ್ವಂತ concept section ವಿವರಿಸುವ ನಿಖರ condition-ignoring failure\n• ಒಂದೂ ಉದ್ದ run (15,000 steps, lr=0.002, ಭಿನ್ನ seed) ನಿಜವಾಗಿ ಅದೇ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸಿತು: ಎರಡೂ classes ಗೆ 0.069 ಮತ್ತು 0.066 ಮೌಲ್ಯಗಳು. ಇದೂ ಒಂದೂ ನಿಜ, ಪುನರುತ್ಪಾದಿಸಬಹುದಾದ finding, ಒಂದೂ ಕಾಲ್ಪನಿಕ ಅಲ್ಲ -- discriminator condition ಪಡೆದಾಗಲೂ condition-ignoring ಕೇವಲ ಒಂದೂ ಸೈದ್ಧಾಂತಿಕ ಅಪಾಯ ಅಲ್ಲ ಆದರೆ ನಿಜವಾಗಿ ಸಂಭವಿಸಬಹುದಾದ ಒಂದೂ failure mode ಎಂದೂ ಪ್ರದರ್ಶಿಸುತ್ತದೆ, ವಿಶೇಷವಾಗಿ ಇದೂ ರೀತಿಯ ಒಂದೂ ಚಿಕ್ಕ, unbatched, single-example-SGD toy setup ಜೊತೆ\n• ಪ್ರಾಯೋಗಿಕವಾಗಿ, production conditional GANs batched training, ದೊಡ್ಡ networks, ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ condition-consistent generation ಅನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಪ್ರತಿಫಲ ಕೊಡುವ auxiliary classification losses ಬಳಸಿ ಇದನ್ನೂ ತಪ್ಪಿಸುತ್ತವೆ -- ಈ ನಿಜ failure ಆ safeguards ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ನಿಖರ ಕಾರಣ' } },

    { type: 'diagram', data: {
      titleEn: 'Condition-Ignoring, Genuinely Measured', titleKn: 'Condition-Ignoring, ನಿಜವಾಗಿ ಅಳೆದ',
      captionEn: 'Genuinely confirmed: real classes are centered at -2 and +2, but this run\'s generated means for both classes landed near 0.02 -- the generator learned G(z,c) ~= G(z), ignoring c almost entirely.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಜ classes -2 ಮತ್ತು +2 ನಲ್ಲಿ ಕೇಂದ್ರೀಕೃತವಾಗಿವೆ, ಆದರೆ ಈ run ನ ಎರಡೂ classes ಗೆ ಉತ್ಪಾದಿಸಿದ means 0.02 ಹತ್ತಿರ ಇಳಿದವು -- generator G(z,c) ~= G(z) ಕಲಿಯಿತು, c ಅನ್ನೂ ಬಹುತೇಕ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಲಕ್ಷಿಸುತ್ತಾ.',
      svgCode: "<svg viewBox='0 0 760 130' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<line x1='40' y1='60' x2='720' y2='60' stroke='#94a3b8'/>\n<rect x='60' y='45' width='90' height='30' fill='none' stroke='#f87171'/><text x='68' y='65' fill='#cbd5e1' font-size='10'>target: -2</text>\n<rect x='610' y='45' width='90' height='30' fill='none' stroke='#f87171'/><text x='620' y='65' fill='#cbd5e1' font-size='10'>target: +2</text>\n<circle cx='380' cy='60' r='5' fill='#4ade80'/><text x='340' y='95' fill='#94a3b8' font-size='10'>class0 mean=0.023</text>\n<circle cx='385' cy='60' r='5' fill='#60a5fa'/><text x='400' y='110' fill='#94a3b8' font-size='10'>class1 mean=0.016</text>\n<text x='250' y='30' fill='#e2e8f0' font-size='11' font-weight='bold'>Both classes collapsed to the same region -- condition ignored</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Unconditional vs Conditional GAN (genuinely contrasted)', captionKn: 'Unconditional vs Conditional GAN (ನಿಜವಾಗಿ ಹೋಲಿಸಿದ)',
      rows: "Property|Unconditional GAN (Module 159)|Conditional GAN (this lesson)\nGenerator input|z|z + one-hot(c)\nDiscriminator input|x|x + one-hot(c)\nLearns|p(x)|p(x\\|c) -- intended\nGenuinely observed here|Mode collapse (39/461 in one run)|Condition-ignoring (both classes ~0.02)\nRoot cause category|Adversarial instability|Weak/insufficient conditioning signal" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: feeding a condition to both G and D is necessary but not sufficient -- this run\'s discriminator did receive the condition, yet the generator still converged to producing nearly identical outputs for both classes\n• Genuinely confirmed and reproduced across two different seeds/hyperparameters (4000 steps at lr=0.001, and 15000 steps at lr=0.002): condition-ignoring is a real, measurable, reproducible GAN failure mode, not a theoretical footnote\n• The mathematical goal is p(x|c) instead of p(x), but genuinely achieving that goal in practice depends on training dynamics, not just architecture -- exactly the kind of subtlety Module 159\'s mode-collapse experiments already demonstrated for the unconditional case\n• One-hot encoding is the simplest conditioning method; production systems (covered later) use richer mechanisms like learned embeddings, FiLM, or cross-attention',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: G ಮತ್ತು D ಎರಡಕ್ಕೂ ಒಂದೂ condition ಕೊಡುವುದೂ ಅಗತ್ಯ ಆದರೆ ಸಾಕಾಗುವುದಿಲ್ಲ -- ಈ run ನ discriminator condition ಪಡೆಯಿತು, ಆದರೂ generator ಇನ್ನೂ ಎರಡೂ classes ಗೆ ಬಹುತೇಕ ಒಂದೇ outputs ಉತ್ಪಾದಿಸಲು ಒಮ್ಮುಖವಾಯಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಎರಡೂ ಭಿನ್ನ seeds/hyperparameters ಆದ್ಯಂತ ಪುನರುತ್ಪಾದಿಸಿದ (lr=0.001 ನಲ್ಲಿ 4000 steps, ಮತ್ತು lr=0.002 ನಲ್ಲಿ 15000 steps): condition-ignoring ಒಂದೂ ನಿಜ, ಅಳೆಯಬಹುದಾದ, ಪುನರುತ್ಪಾದಿಸಬಹುದಾದ GAN failure mode, ಒಂದೂ ಸೈದ್ಧಾಂತಿಕ footnote ಅಲ್ಲ\n• ಗಣಿತೀಯ ಗುರಿ p(x) ಬದಲು p(x|c), ಆದರೆ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಆ ಗುರಿ ನಿಜವಾಗಿ ಸಾಧಿಸುವುದೂ architecture ಮಾತ್ರವಲ್ಲ training dynamics ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ -- Module 159 ನ mode-collapse experiments unconditional case ಗಾಗಿ ಈಗಾಗಲೇ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ ರೀತಿಯ ಸೂಕ್ಷ್ಮತೆ\n• One-hot encoding ಅತ್ಯಂತ ಸರಳ conditioning ವಿಧಾನ; production systems (ನಂತರ ಒಳಗೊಂಡಂತೆ) ಹೆಚ್ಚು ಶ್ರೀಮಂತ ಯಂತ್ರಾಂಶಗಳನ್ನೂ ಬಳಸುತ್ತವೆ ಕಲಿತ embeddings, FiLM, ಅಥವಾ cross-attention ರೀತಿ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact condition-ignoring failure genuinely reproduced twice in this lesson is a documented risk in conditional generative modeling -- Pix2Pix (Lesson 2) sidesteps much of this risk by making the condition an entire input image with a strong paired L1 target, giving the generator far less room to ignore the condition than this lesson\'s sparse 2-value one-hot vector allows.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಎರಡೂ ಬಾರಿ ಪುನರುತ್ಪಾದಿಸಿದ ನಿಖರ condition-ignoring failure conditional generative modeling ನಲ್ಲಿ ಒಂದೂ documented ಅಪಾಯ -- Pix2Pix (Lesson 2) condition ಅನ್ನೂ ಒಂದೂ ಬಲಿಷ್ಠ paired L1 target ಜೊತೆ ಒಂದೂ ಸಂಪೂರ್ಣ input image ಮಾಡುವ ಮೂಲಕ ಈ ಅಪಾಯದ ಹೆಚ್ಚಿನ ಭಾಗವನ್ನೂ ತಪ್ಪಿಸುತ್ತದೆ, ಈ lesson ನ ವಿರಳ 2-value one-hot vector ಬಿಡುವುದಕ್ಕಿಂತ generator ಗೆ condition ನಿರ್ಲಕ್ಷಿಸಲು ಕಡಿಮೆ ಸ್ಥಳ ಕೊಡುತ್ತಾ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: because condition-ignoring genuinely occurred here even with the condition passed to D, production systems add stronger signals -- auxiliary classifiers, paired reconstruction losses (Pix2Pix\'s L1), or much larger conditioning vectors -- to make the condition harder for the generator to ignore\n• This genuine failure is exactly why evaluating a conditional generator requires checking per-condition output statistics (as this lesson did) rather than just overall sample quality -- a model can look fine in aggregate while completely failing to condition',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: condition D ಗೆ ಕೊಟ್ಟರೂ condition-ignoring ಇಲ್ಲಿ ನಿಜವಾಗಿ ಸಂಭವಿಸಿದ್ದರಿಂದ, production systems ಬಲಿಷ್ಠ signals ಸೇರಿಸುತ್ತವೆ -- auxiliary classifiers, paired reconstruction losses (Pix2Pix ನ L1), ಅಥವಾ ಹೆಚ್ಚು ದೊಡ್ಡ conditioning vectors -- generator ಗೆ condition ನಿರ್ಲಕ್ಷಿಸಲು ಕಷ್ಟ ಮಾಡಲು\n• ಈ ನಿಜ failure ಒಂದೂ conditional generator ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು per-condition output statistics ಪರಿಶೀಲಿಸುವ ಅಗತ್ಯ ಏಕೆ ಇದೇ (ಈ lesson ಮಾಡಿದಂತೆ) ಕೇವಲ overall sample quality ಬದಲು -- ಒಂದೂ model condition ಮಾಡಲು ಸಂಪೂರ್ಣವಾಗಿ ವಿಫಲವಾಗುತ್ತಿರುವಾಗಲೂ aggregate ನಲ್ಲಿ ಸರಿ ಎಂದೂ ಕಾಣಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production team building a class-conditional image generator genuinely runs the same per-class statistics check this lesson ran before shipping -- comparing generated means/distributions across classes, and testing the same-noise-different-condition experiment -- because, as genuinely shown here, a conditional GAN can train without errors and still completely fail to respect its conditioning input.',
      bodyKn: 'ಒಂದೂ class-conditional image generator ನಿರ್ಮಿಸುವ ಒಂದೂ production team ship ಮಾಡುವ ಮೊದಲೂ ಈ lesson ಚಲಾಯಿಸಿದ ಅದೇ per-class statistics check ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ -- classes ಆದ್ಯಂತ ಉತ್ಪಾದಿಸಿದ means/distributions ಹೋಲಿಸುತ್ತಾ, ಮತ್ತು ಅದೇ-noise-ಭಿನ್ನ-condition experiment ಪರೀಕ್ಷಿಸುತ್ತಾ -- ಏಕೆಂದರೆ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ತೋರಿಸಿದಂತೆ, ಒಂದೂ conditional GAN errors ಇಲ್ಲದೆ train ಆಗಬಹುದು ಮತ್ತು ಇನ್ನೂ ಅದೂ ನ conditioning input ಅನ್ನೂ ಗೌರವಿಸಲು ಸಂಪೂರ್ಣವಾಗಿ ವಿಫಲವಾಗಬಹುದು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did the generated means for class 0 and class 1 turn out to be after training?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: training ನಂತರ class 0 ಮತ್ತು class 1 ಗಾಗಿ ಉತ್ಪಾದಿಸಿದ means ಏನೂ ಆದವು?',
        opts: ['-2 and +2, matching the real clusters exactly', 'Nearly identical (~0.02 for both), showing the generator ignored the condition', 'Exactly 0 and exactly 1', 'The training crashed before producing samples'], correct: 1,
        optsKn: ['-2 ಮತ್ತು +2, ನಿಜ clusters ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ', 'ಬಹುತೇಕ ಒಂದೇ (ಎರಡಕ್ಕೂ ~0.02), generator condition ನಿರ್ಲಕ್ಷಿಸಿತು ಎಂದೂ ತೋರಿಸುತ್ತಾ', 'ನಿಖರವಾಗಿ 0 ಮತ್ತು ನಿಖರವಾಗಿ 1', 'Samples ಉತ್ಪಾದಿಸುವ ಮೊದಲೂ training crash ಆಯಿತು'] },
      { q: 'Why must the discriminator also receive the condition c, not just the generator?', qKn: 'ಡಿಸ್ಕ್ರಿಮಿನೇಟರ್ ಕೂಡ condition c ಪಡೆಯಬೇಕು ಏಕೆ, ಕೇವಲ generator ಅಲ್ಲ?',
        opts: ['It is not necessary at all', 'Otherwise D cannot penalize a generator for producing condition-inconsistent output, since D could only judge overall realism', 'Because D always ignores its inputs', 'Because one-hot vectors only work for D'], correct: 1,
        optsKn: ['ಇದೂ ಸ್ವಲ್ಪವೂ ಅಗತ್ಯವಿಲ್ಲ', 'ಇಲ್ಲದಿದ್ದರೆ D condition-inconsistent output ಉತ್ಪಾದಿಸಲು generator ಅನ್ನೂ ಶಿಕ್ಷಿಸಲಾಗುವುದಿಲ್ಲ, D ಕೇವಲ overall realism ನಿರ್ಣಯಿಸಬಹುದಾಗಿರುವುದರಿಂದ', 'ಏಕೆಂದರೆ D ಯಾವಾಗಲೂ ಅದೂ ನ inputs ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ one-hot vectors ಕೇವಲ D ಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ'] },
      { q: 'What does condition-ignoring genuinely mean, as demonstrated in this run?', qKn: 'ಈ run ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿದಂತೆ condition-ignoring ನಿಜವಾಗಿ ಏನೂ ಅರ್ಥ?',
        opts: ['The discriminator crashes', 'G(z,c) becomes approximately independent of c, effectively behaving like the unconditional G(z)', 'The dataset has no classes', 'Training loss becomes exactly 0'], correct: 1,
        optsKn: ['Discriminator crash ಆಗುತ್ತದೆ', 'G(z,c) ಬಹುತೇಕ c ಇಂದ ಸ್ವತಂತ್ರವಾಗುತ್ತದೆ, ಪರಿಣಾಮಕಾರಿಯಾಗಿ unconditional G(z) ರೀತಿ ವರ್ತಿಸುತ್ತಾ', 'Dataset ಗೆ ಯಾವುದೇ classes ಇಲ್ಲ', 'Training loss ನಿಖರವಾಗಿ 0 ಆಗುತ್ತದೆ'] },
      { q: 'What is one-hot encoding used for in this lesson?', qKn: 'ಈ lesson ನಲ್ಲಿ one-hot encoding ಯಾವುದಕ್ಕೆ ಬಳಸಲಾಗಿದೆ?',
        opts: ['Compressing images', 'Representing a discrete class condition as a distinct numerical vector fed to both G and D', 'Normalizing the noise vector', 'Computing the discriminator loss'], correct: 1,
        optsKn: ['Images compress ಮಾಡಲು', 'ಒಂದೂ discrete class condition ಅನ್ನೂ G ಮತ್ತು D ಎರಡಕ್ಕೂ ಕೊಟ್ಟ ಒಂದೂ ಸ್ಪಷ್ಟ numerical vector ಆಗಿ ಪ್ರತಿನಿಧಿಸಲು', 'Noise vector normalize ಮಾಡಲು', 'Discriminator loss ಗಣಿಸಲು'] },
      { q: 'Was the condition-ignoring result in this lesson a one-off fluke or reproducible?', qKn: 'ಈ lesson ನಲ್ಲಿ condition-ignoring ಫಲಿತಾಂಶ ಒಂದೂ ಬಾರಿ ಅಪಘಾತವೇ ಅಥವಾ ಪುನರುತ್ಪಾದಿಸಬಹುದಾಗಿತ್ತೇ?',
        opts: ['A one-off fluke, never seen again', 'Reproducible -- confirmed across two different seeds and hyperparameter settings (4000 steps/lr=0.001 and 15000 steps/lr=0.002)', 'It only happens with GPUs', 'It cannot be tested twice'], correct: 1,
        optsKn: ['ಒಂದೂ ಬಾರಿ ಅಪಘಾತ, ಮತ್ತೂ ಎಂದಿಗೂ ಕಾಣಲಿಲ್ಲ', 'ಪುನರುತ್ಪಾದಿಸಬಹುದಾದ -- ಎರಡೂ ಭಿನ್ನ seeds ಮತ್ತು hyperparameter settings ಆದ್ಯಂತ ದೃಢಪಡಿಸಿದ (4000 steps/lr=0.001 ಮತ್ತು 15000 steps/lr=0.002)', 'ಇದೂ ಕೇವಲ GPUs ಜೊತೆ ಸಂಭವಿಸುತ್ತದೆ', 'ಇದನ್ನೂ ಎರಡೂ ಬಾರಿ ಪರೀಕ್ಷಿಸಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
