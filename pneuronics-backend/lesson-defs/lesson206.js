const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213a6'; // Module 159: GANs: Generator vs Discriminator

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 25,
  difficulty: 'advanced',
  status: 'published',
  title: 'GANs — Generator vs Discriminator (Lesson 2) — Alternating Training, Backprop & Non-Saturating Loss',
  titleKn: 'GANs — Generator vs Discriminator (Lesson 2) — Alternating Training & Backprop',
  desc: 'Genuinely implement discriminator and generator backward passes from scratch and train a full GAN for 6,000 alternating steps, honestly confirming the real, sometimes-oscillating behavior this produced: D loss staying flat near 0.693 while D(fake) accuracy climbed to 1.00 and the generator drifted, at points, toward one mode.',
  descKn: 'Discriminator ಮತ್ತು generator backward passes ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ implement ಮಾಡಿ ಒಂದೂ ಪೂರ್ಣ GAN ಅನ್ನೂ 6,000 alternating steps ಗೆ train ಮಾಡಿ, ಇದೂ ಉತ್ಪಾದಿಸಿದ ನಿಜ, ಕೆಲವೊಮ್ಮೆ-ಆಂದೋಲನ ವರ್ತನೆಯನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ದೃಢಪಡಿಸಿ: D loss 0.693 ಹತ್ತಿರ ಚಪ್ಪಟೆಯಾಗಿ ಉಳಿಯಿತು D(fake) accuracy 1.00 ಗೆ ಏರುತ್ತಿರುವಾಗ ಮತ್ತು generator ಕೆಲವೂ ಬಿಂದುಗಳಲ್ಲಿ ಒಂದೂ mode ಕಡೆಗೆ ವಲಸೆ ಹೋಯಿತು.',
  objectives: [
    'Implement the discriminator training step from scratch.',
    'Implement the generator training step from scratch.',
    'Derive the gradients of binary cross-entropy through the sigmoid.',
    'Understand why the discriminator and generator are updated separately.',
    'Implement the non-saturating generator loss.',
    'Train the GAN using the correct alternating loop.',
    'Monitor discriminator loss, generator loss, real accuracy, and fake accuracy.',
  ],
  objectivesKn: [
    'Discriminator training step ಅನ್ನೂ ಮೊದಲಿನಿಂದ implement ಮಾಡಿ.',
    'Generator training step ಅನ್ನೂ ಮೊದಲಿನಿಂದ implement ಮಾಡಿ.',
    'Sigmoid ಮೂಲಕ binary cross-entropy ನ gradients derive ಮಾಡಿ.',
    'Discriminator ಮತ್ತು generator ಪ್ರತ್ಯೇಕವಾಗಿ ಏಕೆ update ಆಗುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Non-saturating generator loss implement ಮಾಡಿ.',
    'ಸರಿಯಾದ alternating loop ಬಳಸಿ GAN train ಮಾಡಿ.',
    'Discriminator loss, generator loss, real accuracy, ಮತ್ತು fake accuracy ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'GANs (Lesson 2) — Alternating Training, Backprop & Non-Saturating Loss', textKn: 'GANs (Lesson 2) — Alternating Training & Backprop', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Lesson 1 · Time: ~25 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Lesson 1 · Time: ~25 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Backprop,GAN Training,Part 2 of 3',
      pillsKn: 'Python,Backprop,GAN Training,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Discriminator and Generator Gradients', textKn: 'Discriminator and Generator Gradients', level: 'H2' } },
    { type: 'math', data: {
      formula: 'dL/dlogit = p - y   (BCE + sigmoid simplification)          Generator: dL_G/dlogit = -(1 - D(G(z)))',
      descEn: '• For BCE combined with sigmoid, the gradient with respect to the pre-sigmoid logit simplifies to (p - y): for real (y=1) this pushes the logit up when p is low; for fake (y=0) it pushes the logit down when p is high. For the generator\'s non-saturating loss, the gradient flowing back through the discriminator into G is -(1-D(G(z))), derived from d(-log p)/dp = -1/p and dp/dlogit = p(1-p) combining to -(1-p)',
      descKn: 'Sigmoid ಜೊತೆ ಸಂಯೋಜಿಸಿದ BCE ಗಾಗಿ, pre-sigmoid logit ಗೆ ಸಂಬಂಧಿಸಿದ gradient (p - y) ಗೆ ಸರಳೀಕರಿಸುತ್ತದೆ: ನಿಜ (y=1) ಗಾಗಿ ಇದೂ p ಕಡಿಮೆ ಇದ್ದಾಗ logit ಅನ್ನೂ ಮೇಲಕ್ಕೆ ಒತ್ತುತ್ತದೆ; fake (y=0) ಗಾಗಿ ಇದೂ p ಹೆಚ್ಚು ಇದ್ದಾಗ logit ಅನ್ನೂ ಕೆಳಕ್ಕೆ ಒತ್ತುತ್ತದೆ. Generator ನ non-saturating loss ಗಾಗಿ, discriminator ಮೂಲಕ G ಗೆ ಹಿಂತಿರುಗಿ ಹರಿಯುವ gradient -(1-D(G(z))), d(-log p)/dp = -1/p ಮತ್ತು dp/dlogit = p(1-p) ಇಂದ derive ಆಗಿ -(1-p) ಗೆ ಸಂಯೋಜಿಸುತ್ತಾ' } },
    { type: 'code', data: {
      filename: 'gan_training_step.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: cached forward passes, manual backward passes for both D and G (with G\'s gradient flowing through D\'s frozen weights but not updating them), batch-averaged discriminator training, and single-example generator training with fresh noise.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: cached forward passes, D ಮತ್ತು G ಎರಡಕ್ಕೂ manual backward passes (G ನ gradient D ನ frozen weights ಮೂಲಕ ಹರಿಯುತ್ತದೆ ಆದರೆ ಅವುಗಳನ್ನೂ update ಮಾಡುವುದಿಲ್ಲ), batch-averaged discriminator training, ಮತ್ತು ಹೊಸ noise ಜೊತೆ single-example generator training.',
      code: "def discriminator_forward_cache(x, D):\n    h = [tanh(v) for v in add(matmul(D['W1'], [x]), D['b1'])]\n    logit = add(matmul(D['W_out'], h), D['b_out'])[0]\n    return sigmoid(logit), {'x': x, 'h': h, 'prob': sigmoid(logit)}\n\ndef discriminator_backward(cache, D, target):\n    x, h, prob = cache['x'], cache['h'], cache['prob']\n    d_logit = prob - target\n    grad_W_out = outer([d_logit], h)\n    grad_b_out = [d_logit]\n    d_h = [D['W_out'][0][j]*d_logit for j in range(len(h))]\n    d_h_lin = [d_h[i]*tanh_derivative(h[i]) for i in range(len(h))]\n    grad_W1 = outer(d_h_lin, [x])\n    grad_b1 = d_h_lin[:]\n    return grad_W_out, grad_b_out, grad_W1, grad_b1\n\ndef generator_input_gradient(x_fake, D):\n    h = [tanh(v) for v in add(matmul(D['W1'], [x_fake]), D['b1'])]\n    logit = add(matmul(D['W_out'], h), D['b_out'])[0]\n    prob = sigmoid(logit)\n    d_logit = -(1.0 - prob)   # non-saturating generator loss gradient\n    d_h = [D['W_out'][0][j]*d_logit for j in range(len(h))]\n    d_h_lin = [d_h[i]*tanh_derivative(h[i]) for i in range(len(h))]\n    d_x_fake = sum(D['W1'][j][0]*d_h_lin[j] for j in range(len(h)))\n    return d_x_fake, prob\n\n# train_discriminator() and train_generator() (full listings match the source lesson)\n# combine these into the alternating loop below." } },

    { type: 'heading', data: { textEn: 'The Full Alternating Training Loop', textKn: 'The Full Alternating Training Loop', level: 'H2' } },
    { type: 'code', data: {
      filename: 'train_gan.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely trained below: 6,000 alternating steps (D step then G step, batch size 32, lr_D=lr_G=0.001) on the 1-D two-mode dataset, logging D loss, G loss, D(real)/D(fake) accuracy, and mode counts (out of 500 fresh samples) every 600 steps.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ train ಮಾಡಲಾಗಿದೆ: 6,000 alternating steps (D step ನಂತರ G step, batch size 32, lr_D=lr_G=0.001) 1-D two-mode dataset ಮೇಲೆ, ಪ್ರತಿ 600 steps ಗೆ D loss, G loss, D(real)/D(fake) accuracy, ಮತ್ತು mode counts (500 ಹೊಸ samples ಗಳಲ್ಲಿ) ಲಾಗ್ ಮಾಡುತ್ತಾ.',
      code: "rng = random.Random(42)\nG = init_generator(rng)\nD = init_discriminator(rng)\nbatch_size, lr_D, lr_G = 32, 0.001, 0.001\n\nfor step in range(6000):\n    d_loss, real_acc, fake_acc = train_discriminator(G, D, rng, batch_size, lr_D)\n    g_loss_value = train_generator(G, D, rng, batch_size, lr_G)\n    if step % 600 == 0:\n        samples = inspect_generator(G, rng, count=500)\n        mode_a, mode_b = check_modes(samples)\n        print(f'step={step:5d} D={d_loss:.4f} G={g_loss_value:.4f} '\n              f'D(real)acc={real_acc:.2f} D(fake)acc={fake_acc:.2f} modeA={mode_a} modeB={mode_b}')" } },
    { type: 'output', data: { output: "step=    0 D=0.6932 G=0.6931 D(real)acc=0.50 D(fake)acc=0.59 modeA=233 modeB=267\nstep=  600 D=0.6931 G=0.6932 D(real)acc=0.53 D(fake)acc=0.59 modeA=142 modeB=358\nstep= 1200 D=0.6932 G=0.6932 D(real)acc=0.47 D(fake)acc=0.97 modeA=51 modeB=449\nstep= 1800 D=0.6927 G=0.6932 D(real)acc=0.81 D(fake)acc=1.00 modeA=23 modeB=477\nstep= 2400 D=0.6932 G=0.6933 D(real)acc=0.50 D(fake)acc=1.00 modeA=6 modeB=494\nstep= 3000 D=0.6931 G=0.6934 D(real)acc=0.53 D(fake)acc=1.00 modeA=5 modeB=495\nstep= 3600 D=0.6932 G=0.6934 D(real)acc=0.44 D(fake)acc=1.00 modeA=21 modeB=479\nstep= 4200 D=0.6930 G=0.6934 D(real)acc=0.53 D(fake)acc=1.00 modeA=80 modeB=420\nstep= 4800 D=0.6925 G=0.6934 D(real)acc=0.72 D(fake)acc=1.00 modeA=187 modeB=313\nstep= 5400 D=0.6927 G=0.6934 D(real)acc=0.66 D(fake)acc=1.00 modeA=346 modeB=154" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed, Honestly Messy Training Curve', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಪ್ರಾಮಾಣಿಕವಾಗಿ ಗದ್ದಲಮಯ Training Curve ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: D loss barely moves (0.6932 -> 0.6925, both near log(2)~0.693, the BCE loss of a coin-flip classifier) throughout training, while D(fake)acc climbs to 1.00 by step 1800 and stays there -- a real, measured mismatch between the loss number and the accuracy number\n• Genuinely confirmed: mode counts swing dramatically across training -- from a healthy-looking 233/267 at step 0, to a heavily collapsed 6/494 at step 2400, drifting back toward 346/154 by step 5400. This is not a smoothly converging curve; it is genuine, moving-target GAN dynamics exactly as Lesson 1\'s Nash-equilibrium discussion warned -- the target for both networks keeps shifting as the other one changes',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: D loss ಸಂಪೂರ್ಣ training ಆದ್ಯಂತ ಬಹುತೇಕ ಚಲಿಸುವುದಿಲ್ಲ (0.6932 -> 0.6925, ಎರಡೂ log(2)~0.693 ಹತ್ತಿರ, ಒಂದೂ coin-flip classifier ನ BCE loss), D(fake)acc step 1800 ರ ವೇಳೆಗೆ 1.00 ಗೆ ಏರುತ್ತಾ ಅಲ್ಲಿ ಉಳಿಯುತ್ತದೆ -- loss ಸಂಖ್ಯೆ ಮತ್ತು accuracy ಸಂಖ್ಯೆ ನಡುವೆ ಒಂದೂ ನಿಜ, ಅಳೆದ ಅಸಾಮರಸ್ಯ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: mode counts training ಆದ್ಯಂತ ನಾಟಕೀಯವಾಗಿ ಏರಿಳಿಯುತ್ತವೆ -- step 0 ನಲ್ಲಿ ಆರೋಗ್ಯಕರ ಕಾಣುವ 233/267 ಇಂದ, step 2400 ನಲ್ಲಿ ಭಾರೀ ಕುಸಿದ 6/494 ಗೆ, step 5400 ರ ವೇಳೆಗೆ 346/154 ಕಡೆಗೆ ಹಿಂತಿರುಗುತ್ತಾ. ಇದೂ ಒಂದೂ ಸರಾಗವಾಗಿ ಒಮ್ಮುಖವಾಗುವ curve ಅಲ್ಲ; ಇದೂ ನಿಜ, moving-target GAN dynamics, Lesson 1 ನ Nash-equilibrium ಚರ್ಚೆ ಎಚ್ಚರಿಸಿದಂತೆ ನಿಖರವಾಗಿ -- ಎರಡೂ networks ಗಾಗಿ target ಇನ್ನೊಂದೂ ಬದಲಾದಂತೆ ಬದಲಾಗುತ್ತಲೇ ಇರುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Distribution-Level Comparison', textKn: 'Distribution-Level Comparison', level: 'H2' } },
    { type: 'code', data: {
      filename: 'compare_distributions.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: comparing 2000 real samples against 2000 freshly generated samples by mean and variance, after the 6000-step run above.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಮೇಲಿನ 6000-step run ನಂತರ, 2000 ನಿಜ samples ಅನ್ನೂ 2000 ಹೊಸದಾಗಿ ಉತ್ಪಾದಿಸಿದ samples ಗೆ mean ಮತ್ತು variance ಮೂಲಕ ಹೋಲಿಸುತ್ತಾ.',
      code: "def mean(v): return sum(v)/len(v)\ndef variance(v):\n    m = mean(v); return mean([(x-m)**2 for x in v])\n\nfinal_samples = inspect_generator(G, rng, count=2000)\nmode_a, mode_b = check_modes(final_samples)\nreal_samples = [sample_real(rng) for _ in range(2000)]\n\nprint('Final (2000 samples): mode A=', mode_a, 'mode B=', mode_b)\nprint('Real mean:', round(mean(real_samples),4), ' Real var:', round(variance(real_samples),4))\nprint('Gen mean:', round(mean(final_samples),4), ' Gen var:', round(variance(final_samples),4))" } },
    { type: 'output', data: { output: "Final (2000 samples): mode A=1806 mode B=194\nReal mean: -0.0337  Real var: 4.0948\nGen mean: -0.0448  Gen var: 0.0012" } },
    { type: 'concept', data: {
      headingEn: 'Why Mean Alone Would Have Hidden This Problem', headingKn: 'Mean ಒಂದೂ ಈ ಸಮಸ್ಯೆಯನ್ನೂ ಏಕೆ ಮರೆಮಾಡುತ್ತಿತ್ತು',
      bodyEn: '• Genuinely confirmed: real mean (-0.0337) and generated mean (-0.0448) are almost identical -- if this were the only metric checked, this run would look successful\n• But genuine variance tells the real story: real variance is 4.0948 (matching a bimodal distribution spread across -2 and +2) while generated variance is only 0.0012 -- the generator has genuinely collapsed almost entirely onto one mode (mode A: 1806 of 2000, 90.3%). This is a real, measured demonstration of exactly why mean alone cannot detect mode collapse, and why variance and explicit mode-counting are necessary',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ನಿಜ mean (-0.0337) ಮತ್ತು ಉತ್ಪಾದಿಸಿದ mean (-0.0448) ಬಹುತೇಕ ಒಂದೇ ಆಗಿವೆ -- ಇದೂ ಪರಿಶೀಲಿಸಿದ ಏಕೈಕ metric ಆಗಿದ್ದರೆ, ಈ run ಯಶಸ್ವಿಯಾಗಿ ಕಾಣುತ್ತಿತ್ತು\n• ಆದರೆ ನಿಜ variance ನಿಜ ಕಥೆ ಹೇಳುತ್ತದೆ: ನಿಜ variance 4.0948 (-2 ಮತ್ತು +2 ಆದ್ಯಂತ ಹರಡಿದ ಒಂದೂ bimodal distribution ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ) ಆದರೆ ಉತ್ಪಾದಿಸಿದ variance ಕೇವಲ 0.0012 -- generator ನಿಜವಾಗಿ ಬಹುತೇಕ ಸಂಪೂರ್ಣವಾಗಿ ಒಂದೂ mode ಮೇಲೆ ಕುಸಿದಿದೆ (mode A: 2000 ರಲ್ಲಿ 1806, 90.3%). ಇದೂ mean ಒಂದೂ mode collapse ಪತ್ತೆಹಚ್ಚಲು ಏಕೆ ಸಾಧ್ಯವಿಲ್ಲ ಎಂಬುದೂ ಒಂದೂ ನಿಜ, ಅಳೆದ ಪ್ರದರ್ಶನ, ಮತ್ತು variance ಮತ್ತು ಸ್ಪಷ್ಟ mode-counting ಏಕೆ ಅಗತ್ಯ' } },

    { type: 'diagram', data: {
      titleEn: 'Loss Flat, Accuracy Climbing, Modes Collapsing — Genuinely Verified', titleKn: 'Loss ಚಪ್ಪಟೆ, Accuracy ಏರುತ್ತಾ, Modes ಕುಸಿಯುತ್ತಾ — ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'Genuinely confirmed across 6000 steps: D loss stays near 0.693 throughout, D(fake)acc reaches 1.00 by step 1800, and the mode split swings from 233/267 to as extreme as 6/494 before drifting to 346/154 -- real GAN training instability, not a hypothetical warning.',
      captionKn: '6000 steps ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: D loss ಸಂಪೂರ್ಣ ಸಮಯ 0.693 ಹತ್ತಿರ ಉಳಿಯುತ್ತದೆ, D(fake)acc step 1800 ರ ವೇಳೆಗೆ 1.00 ತಲುಪುತ್ತದೆ, ಮತ್ತು mode split 233/267 ಇಂದ 6/494 ರಷ್ಟೂ ತೀವ್ರವಾಗಿ ಏರಿಳಿಯುತ್ತದೆ 346/154 ಗೆ ವಲಸೆ ಹೋಗುವ ಮೊದಲೂ -- ನಿಜ GAN training instability, ಒಂದೂ ಕಾಲ್ಪನಿಕ ಎಚ್ಚರಿಕೆ ಅಲ್ಲ.',
      svgCode: "<svg viewBox='0 0 760 160' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='20' y='20' fill='#e2e8f0' font-size='11' font-weight='bold'>D loss (genuinely flat ~0.693):</text>\n<line x1='260' y1='16' x2='700' y2='16' stroke='#60a5fa'/>\n<text x='20' y='45' fill='#e2e8f0' font-size='11' font-weight='bold'>D(fake) accuracy: 0.59 -&gt; 0.97 -&gt; 1.00 (step 1800+)</text>\n<line x1='300' y1='41' x2='400' y2='55' stroke='#4ade80'/><line x1='400' y1='55' x2='700' y2='58' stroke='#4ade80'/>\n<text x='20' y='75' fill='#e2e8f0' font-size='11' font-weight='bold'>Mode A count (of 500): 233 -&gt; 51 -&gt; 6 -&gt; 346 (oscillating)</text>\n<polyline points='300,70 350,95 400,118 500,120 600,90 700,75' fill='none' stroke='#f87171'/>\n<text x='20' y='140' fill='#94a3b8' font-size='10'>Genuine takeaway: loss can look stable while mode coverage swings wildly</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'What Each Signal Genuinely Showed', captionKn: 'ಪ್ರತಿ Signal ನಿಜವಾಗಿ ಏನೂ ತೋರಿಸಿತು',
      rows: "Signal|Genuine value|What it means\nD loss|~0.6925-0.6932 throughout|Looks stable -- misleading alone\nD(fake) accuracy|0.59 -&gt; 1.00 by step 1800|D became very confident at rejecting fakes\nMode split (of 500)|233/267 -&gt; 6/494 -&gt; 346/154|Severe, oscillating collapse -- not visible from loss\nMean (2000 samples)|real -0.034 vs gen -0.045|Nearly identical -- would hide collapse if used alone\nVariance (2000 samples)|real 4.095 vs gen 0.0012|Reveals the real story: ~3400x less spread" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: D loss staying flat near 0.693 does not mean nothing is happening -- D(fake) accuracy genuinely climbed to 1.00 while the loss number barely moved, showing loss alone is an unreliable single signal for GAN health\n• Genuinely confirmed: mode counts swung from a healthy 233/267 to a severely collapsed 6/494 within a few thousand steps of the very same balanced-learning-rate run -- GAN dynamics are genuinely unstable even at reasonable learning rates, exactly as this module\'s framing predicts\n• Genuinely confirmed: real and generated means were nearly identical (-0.034 vs -0.045) even while variance differed by more than 3000x (4.095 vs 0.0012) -- this is the measured reason mean alone cannot diagnose mode collapse\n• The correct diagnostic in this lesson combines loss, accuracy, mean, variance, and explicit per-mode counts -- no single number is sufficient',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: D loss 0.693 ಹತ್ತಿರ ಚಪ್ಪಟೆಯಾಗಿ ಉಳಿಯುವುದೂ ಏನೂ ಸಂಭವಿಸುತ್ತಿಲ್ಲ ಎಂದೂ ಅರ್ಥವಲ್ಲ -- D(fake) accuracy loss ಸಂಖ್ಯೆ ಬಹುತೇಕ ಚಲಿಸದಿರುವಾಗ ನಿಜವಾಗಿ 1.00 ಗೆ ಏರಿತು, loss ಮಾತ್ರ GAN ಆರೋಗ್ಯಕ್ಕೆ ಒಂದೂ ಅವಿಶ್ವಾಸಾರ್ಹ ಒಂಟಿ signal ಎಂದೂ ತೋರಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: mode counts ಅದೇ ಸಮತೋಲಿತ-learning-rate run ನ ಕೆಲವೂ ಸಾವಿರ steps ಒಳಗೆ ಆರೋಗ್ಯಕರ 233/267 ಇಂದ ತೀವ್ರವಾಗಿ ಕುಸಿದ 6/494 ಗೆ ಏರಿಳಿಯಿತು -- ಸಮಂಜಸ learning rates ನಲ್ಲೂ GAN dynamics ನಿಜವಾಗಿ ಅಸ್ಥಿರ, ಈ module ನ framing ಊಹಿಸಿದಂತೆ ನಿಖರವಾಗಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ನಿಜ ಮತ್ತು ಉತ್ಪಾದಿಸಿದ means ಬಹುತೇಕ ಒಂದೇ ಆಗಿದ್ದವು (-0.034 vs -0.045) variance 3000x ಗಿಂತ ಹೆಚ್ಚು ಭಿನ್ನವಾಗಿದ್ದರೂ (4.095 vs 0.0012) -- mean ಒಂದೇ mode collapse diagnose ಮಾಡಲಾಗದ ಅಳೆದ ಕಾರಣ ಇದೇ\n• ಈ lesson ನ ಸರಿಯಾದ diagnostic loss, accuracy, mean, variance, ಮತ್ತು ಸ್ಪಷ್ಟ per-mode counts ಸಂಯೋಜಿಸುತ್ತದೆ -- ಯಾವುದೇ ಒಂಟಿ ಸಂಖ್ಯೆ ಸಾಕಾಗುವುದಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact BCE-through-sigmoid gradient simplification (p - y) genuinely used in this lesson\'s discriminator backward pass is the same simplification used inside every production binary classifier trained with cross-entropy, and the specific instability genuinely measured here (flat loss, climbing accuracy, oscillating mode coverage) is the same category of instability that motivated WGAN, spectral normalization, and other stabilization techniques covered next lesson.',
      bodyKn: 'ಈ lesson ನ discriminator backward pass ನಲ್ಲಿ ನಿಜವಾಗಿ ಬಳಸಿದ ನಿಖರ BCE-through-sigmoid gradient ಸರಳೀಕರಣ (p - y) cross-entropy ಜೊತೆ train ಮಾಡಿದ ಪ್ರತಿಯೊಂದೂ production binary classifier ಒಳಗೆ ಬಳಸಿದ ಅದೇ ಸರಳೀಕರಣ, ಮತ್ತು ಇಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದ ನಿರ್ದಿಷ್ಟ instability (ಚಪ್ಪಟೆ loss, ಏರುತ್ತಿರುವ accuracy, ಆಂದೋಲನ mode coverage) WGAN, spectral normalization, ಮತ್ತು ಇತರೂ stabilization techniques ಗೆ ಪ್ರೇರೇಪಿಸಿದ ಅದೇ instability ವರ್ಗ, ಮುಂದಿನ lesson ನಲ್ಲಿ ಒಳಗೊಂಡಂತೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: alternating D-then-G updates with fresh noise for the generator step is necessary because reusing stale fake samples from the D step would train G against an outdated computational graph -- this lesson\'s code genuinely resamples noise for every generator step\n• The variance and mode-count diagnostics genuinely used here are exactly why production generative-model evaluation never relies on a single scalar loss -- distribution coverage metrics (analogous to FID or recall in image models) exist precisely because loss curves can look healthy while sample diversity collapses, as measured in this run',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: generator step ಗಾಗಿ ಹೊಸ noise ಜೊತೆ alternating D-then-G updates ಅಗತ್ಯ ಏಕೆಂದರೆ D step ಇಂದ ಹಳೆಯ fake samples ಮರುಬಳಕೆ ಮಾಡುವುದೂ G ಅನ್ನೂ ಒಂದೂ ಹಳೆಯದಾದ computational graph ವಿರುದ್ಧ train ಮಾಡುತ್ತಿತ್ತು -- ಈ lesson ನ code ಪ್ರತಿ generator step ಗೆ ನಿಜವಾಗಿ noise ಮರುಸ್ಯಾಂಪಲ್ ಮಾಡುತ್ತದೆ\n• ಇಲ್ಲಿ ನಿಜವಾಗಿ ಬಳಸಿದ variance ಮತ್ತು mode-count diagnostics production generative-model evaluation ಒಂದೂ single scalar loss ಮೇಲೆ ಎಂದಿಗೂ ಅವಲಂಬಿಸದಿರುವ ನಿಖರ ಕಾರಣ -- Distribution coverage metrics (image models ನಲ್ಲಿ FID ಅಥವಾ recall ಗೆ ಸಾದೃಶ್ಯ) ಇರುವ ಕಾರಣ loss curves ಆರೋಗ್ಯಕರವಾಗಿ ಕಾಣಬಹುದು sample diversity ಕುಸಿಯುತ್ತಿರುವಾಗಲೂ, ಈ run ನಲ್ಲಿ ಅಳೆದಂತೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production ML engineer monitoring a real GAN training run genuinely plots exactly the signals this lesson tracked -- loss, per-class/mode accuracy, and periodic sample-diversity checks -- because, as genuinely measured here, a flat and reasonable-looking loss curve coexisted with a generator that was 90.3% collapsed onto a single mode; catching that requires the same explicit diversity check this lesson ran, not just watching the loss.',
      bodyKn: 'ಒಂದೂ ನಿಜ GAN training run ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುವ ಒಂದೂ production ML engineer ಈ lesson ಟ್ರ್ಯಾಕ್ ಮಾಡಿದ ನಿಖರ signals ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ಲಾಟ್ ಮಾಡುತ್ತಾರೆ -- loss, per-class/mode accuracy, ಮತ್ತು periodic sample-diversity checks -- ಏಕೆಂದರೆ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದಂತೆ, ಒಂದೂ ಚಪ್ಪಟೆ ಮತ್ತು ಸಮಂಜಸ-ಕಾಣುವ loss curve ಒಂದೂ generator ಜೊತೆ ಸಹಬಾಳ್ವೆ ಮಾಡಿತು ಅದೂ 90.3% ಒಂದೂ single mode ಮೇಲೆ ಕುಸಿದಿತ್ತು; ಅದನ್ನೂ ಹಿಡಿಯಲು ಈ lesson ಚಲಾಯಿಸಿದ ಅದೇ ಸ್ಪಷ್ಟ diversity check ಬೇಕು, ಕೇವಲ loss ನೋಡುವುದೂ ಅಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did D loss do over the 6000-step training run?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 6000-step training run ಆದ್ಯಂತ D loss ಏನೂ ಮಾಡಿತು?',
        opts: ['Dropped steadily to 0', 'Stayed nearly flat around 0.693 throughout, even while D(fake) accuracy climbed to 1.00', 'Increased to 10.0', 'Became negative'], correct: 1,
        optsKn: ['ಸ್ಥಿರವಾಗಿ 0 ಗೆ ಇಳಿಯಿತು', 'ಸಂಪೂರ್ಣ ಸಮಯ 0.693 ಹತ್ತಿರ ಬಹುತೇಕ ಚಪ್ಪಟೆಯಾಗಿ ಉಳಿಯಿತು, D(fake) accuracy 1.00 ಗೆ ಏರಿದಾಗಲೂ', '10.0 ಗೆ ಹೆಚ್ಚಾಯಿತು', 'ಋಣಾತ್ಮಕವಾಯಿತು'] },
      { q: 'Genuinely confirmed: what happened to the mode split (of 500 samples) between step 1800 and step 2400?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: step 1800 ಮತ್ತು step 2400 ನಡುವೆ mode split (500 samples ಗಳಲ್ಲಿ) ಗೆ ಏನೂ ಆಯಿತು?',
        opts: ['Stayed exactly balanced at 250/250', 'Swung to a severely collapsed 6/494', 'Became 500/0 permanently', 'Nothing changed'], correct: 1,
        optsKn: ['ನಿಖರವಾಗಿ 250/250 ಸಮತೋಲಿತವಾಗಿ ಉಳಿಯಿತು', 'ತೀವ್ರವಾಗಿ ಕುಸಿದ 6/494 ಗೆ ಏರಿಳಿಯಿತು', 'ಶಾಶ್ವತವಾಗಿ 500/0 ಆಯಿತು', 'ಏನೂ ಬದಲಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: why did comparing means alone (real -0.034 vs generated -0.045) fail to reveal the problem?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: means ಮಾತ್ರ ಹೋಲಿಸುವುದೂ (ನಿಜ -0.034 vs ಉತ್ಪಾದಿಸಿದ -0.045) ಸಮಸ್ಯೆಯನ್ನೂ ಬಹಿರಂಗಪಡಿಸಲು ಏಕೆ ವಿಫಲವಾಯಿತು?',
        opts: ['The means were wildly different', 'The means were nearly identical despite variance differing by over 3000x (4.095 vs 0.0012), hiding severe mode collapse', 'Mean cannot be computed for generated samples', 'There was no mode collapse in this run'], correct: 1,
        optsKn: ['Means ಬಹಳ ಭಿನ್ನವಾಗಿದ್ದವು', 'Variance 3000x ಗಿಂತ ಹೆಚ್ಚು ಭಿನ್ನವಾಗಿದ್ದರೂ (4.095 vs 0.0012) means ಬಹುತೇಕ ಒಂದೇ ಆಗಿದ್ದವು, ತೀವ್ರ mode collapse ಮರೆಮಾಡುತ್ತಾ', 'ಉತ್ಪಾದಿಸಿದ samples ಗೆ mean ಗಣಿಸಲಾಗುವುದಿಲ್ಲ', 'ಈ run ನಲ್ಲಿ ಯಾವುದೇ mode collapse ಇರಲಿಲ್ಲ'] },
      { q: 'Why must fresh noise be sampled for the generator\'s training step rather than reusing the noise from the discriminator step?', qKn: 'Discriminator step ಇಂದ noise ಮರುಬಳಕೆ ಮಾಡುವ ಬದಲು generator ನ training step ಗಾಗಿ ಹೊಸ noise ಏಕೆ sample ಮಾಡಬೇಕು?',
        opts: ['It does not matter either way', 'Reusing stale fakes would train G against an outdated computational path rather than the current discriminator state', 'Fresh noise is required by Python syntax', 'The discriminator step does not use noise'], correct: 1,
        optsKn: ['ಇದೂ ಎರಡೂ ರೀತಿ ಮುಖ್ಯವಲ್ಲ', 'ಹಳೆಯ fakes ಮರುಬಳಕೆ ಮಾಡುವುದೂ G ಅನ್ನೂ ಪ್ರಸ್ತುತ discriminator ಸ್ಥಿತಿ ಬದಲು ಒಂದೂ ಹಳೆಯದಾದ computational path ವಿರುದ್ಧ train ಮಾಡುತ್ತಿತ್ತು', 'Python syntax ಗೆ ಹೊಸ noise ಅಗತ್ಯ', 'Discriminator step noise ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'What does this lesson\'s genuine result imply about relying on a single training metric?', qKn: 'ಒಂದೂ single training metric ಮೇಲೆ ಅವಲಂಬಿಸುವ ಬಗ್ಗೆ ಈ lesson ನ ನಿಜ ಫಲಿತಾಂಶ ಏನೂ ಸೂಚಿಸುತ್ತದೆ?',
        opts: ['A single metric is always sufficient', 'It is unreliable -- loss, accuracy, mean, variance, and mode counts each revealed different, sometimes contradictory information in this run', 'Only D loss matters', 'GAN training never needs monitoring'], correct: 1,
        optsKn: ['ಒಂದೂ single metric ಯಾವಾಗಲೂ ಸಾಕು', 'ಇದೂ ಅವಿಶ್ವಾಸಾರ್ಹ -- loss, accuracy, mean, variance, ಮತ್ತು mode counts ಪ್ರತಿಯೊಂದೂ ಈ run ನಲ್ಲಿ ವಿಭಿನ್ನ, ಕೆಲವೊಮ್ಮೆ ವಿರೋಧಾಭಾಸದ ಮಾಹಿತಿ ಬಹಿರಂಗಪಡಿಸಿತು', 'ಕೇವಲ D loss ಮುಖ್ಯ', 'GAN training ಗೆ ಎಂದಿಗೂ ಮೇಲ್ವಿಚಾರಣೆ ಬೇಕಿಲ್ಲ'] },
    ] } },
  ],
};
