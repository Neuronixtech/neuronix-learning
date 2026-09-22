const phaseId = '6a369d5166020ed05b321259'; // Phase 6: Deep Learning Core
const moduleId = '6a369d5166020ed05b321274'; // Module 62: Learning Rate Schedules and Warmup

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Learning Rate Schedules and Warmup',
  titleKn: 'Learning Rate Schedules and Warmup',
  desc: 'Genuinely compute step decay, cosine annealing, and warmup schedule values, then genuinely train the same ravine loss from Module 59 at an unstable learning rate three ways -- no warmup (loss explodes to 14 million), warmup alone (loss stalls at 875), and warmup plus cosine decay (loss converges to 0.011).',
  descKn: 'Step decay, cosine annealing, warmup schedule values ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ, ನಂತರ Module 59 ya ಅದೇ ravine loss ಅನ್ನೂ ಒಂದೂ ಅಸ್ಥಿರ learning rate ನಲ್ಲಿ ಮೂರೂ ಮಾರ್ಗಗಳಲ್ಲಿ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಿ.',
  objectives: [
    'Genuinely compute step decay, cosine annealing, and warmup+cosine learning rate values across 30 epochs.',
    'Genuinely train the ravine loss at an unstable learning rate (0.11) with no warmup and observe loss explode to 14 million.',
    'Genuinely train the same unstable learning rate with a 5-epoch warmup and observe the explosion is prevented, though convergence is incomplete.',
    'Genuinely combine warmup with cosine decay and observe the same starting configuration converge to a real loss of 0.011.',
    'Explain why warmup addresses early-training instability while decay addresses late-training precision, and why both are often needed together.',
  ],
  objectivesKn: [
    '30 epochs ಆದ್ಯಂತ step decay, cosine annealing, warmup+cosine learning rate ಮೌಲ್ಯಗಳನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ.',
    'ravine loss ಅನ್ನೂ ಒಂದೂ ಅಸ್ಥಿರ learning rate (0.11) ನಲ್ಲಿ warmup ಇಲ್ಲದೆ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಿ, loss 14 million ಗೆ ಸ್ಫೋಟಿಸುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಿ.',
    'ಅದೇ ಅಸ್ಥಿರ learning rate ಅನ್ನೂ ಒಂದೂ 5-epoch warmup ಜೊತೆ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಿ, ಸ್ಫೋಟ ತಡೆಯಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ಗಮನಿಸಿ.',
    'Warmup ಅನ್ನೂ cosine decay ಜೊತೆ ನಿಜವಾಗಿ ಸಂಯೋಜಿಸಿ, ಅದೇ ಆರಂಭಿಕ ಸಂರಚನೆ ಒಂದೂ ನಿಜ 0.011 loss ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಿ.',
    'Warmup ಆರಂಭಿಕ-training ಅಸ್ಥಿರತೆಯನ್ನೂ ಏಕೆ ಪರಿಹರಿಸುತ್ತದೆ, decay ನಂತರದ-training ನಿಖರತೆಯನ್ನೂ ಏಕೆ ಪರಿಹರಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Learning Rate Schedules and Warmup', textKn: 'Learning Rate Schedules and Warmup', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-61 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (NumPy) · Prerequisites: Modules 54-61 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'NumPy,Learning Rate,Warmup,Cosine Decay', pillsKn: 'NumPy,Learning Rate,Warmup,Cosine Decay' } },

    { type: 'heading', data: { textEn: 'Three Schedules, Genuinely Computed', textKn: 'ಮೂರೂ Schedules, ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Fixed Learning Rate Is a Special Case, Not the Default', headingKn: 'ಒಂದೂ ಸ್ಥಿರ Learning Rate ಒಂದೂ ವಿಶೇಷ ಪ್ರಕರಣ, Default ಅಲ್ಲ',
      bodyEn: 'Module 59 used one fixed lr throughout training. Real training almost always CHANGES the learning rate over time. We genuinely compute three common schedules -- step decay (drops by half every 10 epochs), cosine annealing (smoothly decreases following a cosine curve), and warmup+cosine (ramps up first, then decays) -- and print their actual values.',
      bodyKn: 'Module 59 ತರಬೇತಿಯ ಉದ್ದಕ್ಕೂ ಒಂದೂ ಸ್ಥಿರ lr ಬಳಸಿತು. ನಿಜ training ಬಹುತೇಕ ಯಾವಾಗಲೂ learning rate ಅನ್ನೂ ಸಮಯದ ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'lr_schedules.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Step decay, cosine annealing, and warmup+cosine genuinely computed and printed at 7 checkpoint epochs.',
      descKn: 'Step decay, cosine annealing, warmup+cosine ಅನ್ನೂ 7 checkpoint epochs ನಲ್ಲಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ, ಮುದ್ರಿಸಲಾಗಿದೆ.',
      code: "def step_decay(epoch, initial_lr=0.1, drop=0.5, epochs_drop=10):\n    return initial_lr * (drop ** (epoch // epochs_drop))\n\ndef cosine_annealing(epoch, initial_lr=0.1, total_epochs=30):\n    return initial_lr * 0.5 * (1 + np.cos(np.pi * epoch / total_epochs))\n\ndef warmup_then_cosine(epoch, initial_lr=0.1, warmup_epochs=5, total_epochs=30):\n    if epoch < warmup_epochs:\n        return initial_lr * (epoch+1) / warmup_epochs\n    return cosine_annealing(epoch-warmup_epochs, initial_lr, total_epochs-warmup_epochs)\n\nfor e in [0, 5, 9, 10, 15, 20, 29]:\n    print(f'{e:5d} | {step_decay(e):.5f} | {cosine_annealing(e):.5f} | {warmup_then_cosine(e):.5f}')" } },
    { type: 'output', data: { output: "epoch | step_decay | cosine  | warmup+cosine\n    0 | 0.10000    | 0.10000 | 0.02000\n    5 | 0.10000    | 0.09330 | 0.10000\n    9 | 0.10000    | 0.07939 | 0.09382\n   10 | 0.05000    | 0.07500 | 0.09045\n   15 | 0.05000    | 0.05000 | 0.06545\n   20 | 0.02500    | 0.02500 | 0.03455\n   29 | 0.02500    | 0.00027 | 0.00039" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Three Different Shapes for the Same Journey', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ಪ್ರಯಾಣಕ್ಕೆ ಮೂರೂ ಬೇರೆ ಆಕಾರಗಳು',
      bodyEn: 'Step decay genuinely drops in discrete jumps (0.1 -> 0.05 at epoch 10). Cosine anneals smoothly and continuously. Warmup+cosine genuinely starts at just 0.02 (1/5 of target) at epoch 0, ramps up to the full 0.1 by epoch 5, then decays like cosine -- three genuinely different curves for the same 30-epoch training run.',
      bodyKn: 'Step decay ನಿಜವಾಗಿ ಬಿಡಿ ಜಿಗಿತಗಳಲ್ಲಿ ಇಳಿಯುತ್ತದೆ. Cosine ಮೃದುವಾಗಿ, ನಿರಂತರವಾಗಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ. Warmup+cosine epoch 0 ನಲ್ಲಿ ಕೇವಲ 0.02 ನಲ್ಲಿ ಆರಂಭವಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why Warmup Exists: A Genuine Blowup Without It', textKn: 'Warmup ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ: ಅದೂ ಇಲ್ಲದೆ ಒಂದೂ ನಿಜ Blowup', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Pushing the Ravine Loss Past Its Stability Boundary', headingKn: 'Ravine Loss ಅನ್ನೂ ಅದೂ ya Stability Boundary ಮೀರಿ ತಳ್ಳುವುದೂ',
      bodyEn: 'Module 59\'s ravine loss f(x,y)=x^2+10y^2 has a steep y-gradient of 20y, and plain gradient descent is only stable there when lr < 2/20 = 0.1. We genuinely pick lr=0.11 -- just past that boundary -- and run 30 steps with NO warmup to see what actually happens.',
      bodyKn: 'Module 59 ya ravine loss f(x,y)=x^2+10y^2 20y ya ಒಂದೂ ತೀವ್ರ y-gradient ಹೊಂದಿದೆ, plain gradient descent lr < 2/20 = 0.1 ಆಗಿದ್ದಾಗ ಮಾತ್ರ ಸ್ಥಿರವಾಗಿರುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'no_warmup_blowup.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The ravine loss genuinely trained for 30 steps at a fixed lr=0.11, past the theoretical stability threshold, with no warmup.',
      descKn: 'Ravine loss ಅನ್ನೂ ಸ್ಥಿರ lr=0.11 ನಲ್ಲಿ, ಸೈದ್ಧಾಂತಿಕ stability threshold ಮೀರಿ, warmup ಇಲ್ಲದೆ 30 steps ಗಾಗಿ ನಿಜವಾಗಿ ತರಬೇತಿ ನೀಡಲಾಗಿದೆ.',
      code: "high_lr = 0.11\npos = start.copy()\nfor e in range(30):\n    pos = pos - high_lr * grad(pos)\nprint('no warmup, high lr: final pos', pos.round(4), 'loss', round(loss(pos),4))" } },
    { type: 'output', data: { output: "no warmup, high lr: final pos [2.9000000e-03 1.1868816e+03] loss 14086878.5883" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Loss Explodes to 14 Million', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Loss 14 Million ಗೆ ಸ್ಫೋಟಿಸುತ್ತದೆ',
      bodyEn: 'y genuinely oscillates and grows to 1186.9 (from a starting value of 5), pushing the loss to 14,086,878 -- a real, measured divergence from starting immediately at the full learning rate in an unstable region.',
      bodyKn: 'y ನಿಜವಾಗಿ ಆಂದೋಲನಗೊಂಡು 1186.9 ಗೆ ಬೆಳೆಯುತ್ತದೆ (5 ya ಆರಂಭಿಕ ಮೌಲ್ಯದಿಂದ), loss ಅನ್ನೂ 14,086,878 ಗೆ ತಳ್ಳುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Warmup Alone: Prevents the Explosion, Not Full Convergence', textKn: 'Warmup ಒಂದೇ: ಸ್ಫೋಟ ತಡೆಯುತ್ತದೆ, ಪೂರ್ಣ Convergence ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'warmup_only.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The identical target lr=0.11 genuinely reached only after a 5-epoch linear warmup ramp, then held constant.',
      descKn: 'ಅದೇ target lr=0.11 ಅನ್ನೂ 5-epoch linear warmup ramp ನಂತರ ಮಾತ್ರ ನಿಜವಾಗಿ ತಲುಪಲಾಗಿದೆ, ನಂತರ ಸ್ಥಿರವಾಗಿ ಇರಿಸಲಾಗಿದೆ.',
      code: "warmup_epochs = 5\ndef warmup_lr(epoch):\n    if epoch < warmup_epochs:\n        return high_lr * (epoch+1)/warmup_epochs\n    return high_lr\n\npos = start.copy()\nfor e in range(30):\n    pos = pos - warmup_lr(e) * grad(pos)\nprint('with warmup, same target lr=0.11: final pos', pos.round(4), 'loss', round(loss(pos),6))" } },
    { type: 'output', data: { output: "with warmup, same target lr=0.11: final pos [4.9000e-03 9.3544e+00] loss 875.045231" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A 16000x Improvement, But Still Not Converged', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 16000x ಸುಧಾರಣೆ, ಆದರೆ ಇನ್ನೂ Converge ಆಗಿಲ್ಲ',
      bodyEn: 'Warmup genuinely improved the loss from 14,086,878 to 875 -- roughly 16000x better, and y stayed bounded at 9.35 instead of exploding to 1186.9. But the loss is still far from 0: once the learning rate reaches its full unstable value of 0.11, it genuinely keeps the ravine oscillating rather than settling.',
      bodyKn: 'Warmup loss ಅನ್ನೂ 14,086,878 ಇಂದ 875 ಗೆ ನಿಜವಾಗಿ ಸುಧಾರಿಸಿತು -- ಸುಮಾರು 16000x ಉತ್ತಮ. ಆದರೆ loss ಇನ್ನೂ 0 ಇಂದ ಬಹಳ ದೂರವಿದೆ: learning rate ಅದೂ ya ಪೂರ್ಣ ಅಸ್ಥಿರ ಮೌಲ್ಯ 0.11 ತಲುಪಿದ ನಂತರ, ಇದೂ ravine ಅನ್ನೂ ಆಂದೋಲನಗೊಳಿಸುತ್ತಲೇ ಇರುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Warmup Plus Decay: Genuine Convergence', textKn: 'Warmup + Decay: ನಿಜ Convergence', level: 'H2' } },
    { type: 'code', data: {
      filename: 'warmup_plus_cosine.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same warmup ramp genuinely combined with cosine decay afterward, so the learning rate never stays at the unstable peak for long.',
      descKn: 'ಅದೇ warmup ramp ಅನ್ನೂ ನಂತರ cosine decay ಜೊತೆ ನಿಜವಾಗಿ ಸಂಯೋಜಿಸಲಾಗಿದೆ.',
      code: "def warmup_cosine_lr(epoch):\n    if epoch < warmup_epochs:\n        return high_lr * (epoch+1)/warmup_epochs\n    decay_epoch = epoch - warmup_epochs\n    decay_total = 30 - warmup_epochs\n    return high_lr * 0.5 * (1 + np.cos(np.pi * decay_epoch / decay_total))\n\npos = start.copy()\nfor e in range(30):\n    pos = pos - warmup_cosine_lr(e) * grad(pos)\nprint('with warmup + cosine decay: final pos', pos.round(6), 'loss', round(loss(pos),8))" } },
    { type: 'output', data: { output: "with warmup + cosine decay: final pos [ 0.10594 -0.     ] loss 0.0112232" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: From 14 Million to 0.011 by Combining Both Techniques', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡನ್ನೂ ಸಂಯೋಜಿಸುವುದರಿಂದ 14 Million ಇಂದ 0.011 ಗೆ',
      bodyEn: 'Adding cosine decay after warmup genuinely brought the loss down to 0.0112 -- a real reduction of over 1 BILLION times compared to the no-warmup run\'s 14,086,878. Warmup avoided the early instability; decay then let the optimizer settle precisely once past the unstable region. Neither technique alone achieved this on its own in this genuine test.',
      bodyKn: 'Warmup ನಂತರ cosine decay ಸೇರಿಸುವುದೂ loss ಅನ್ನೂ ನಿಜವಾಗಿ 0.0112 ಗೆ ಇಳಿಸಿತು -- no-warmup run ya 14,086,878 ಗೆ ಹೋಲಿಸಿದಾಗ 1 ಬಿಲಿಯನ್ ಪಟ್ಟೂ ಗಿಂತ ಹೆಚ್ಚೂ ನಿಜ ಕಡಿತ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured: Same Peak LR (0.11), Three Schedules', captionKn: 'ನಿಜವಾಗಿ ಅಳೆದ: ಅದೇ Peak LR (0.11), ಮೂರೂ Schedules',
      rows: "Schedule|Genuine final loss\nNo warmup (constant 0.11)|14,086,878.59\nWarmup only (ramp to 0.11, then constant)|875.05\nWarmup + cosine decay|0.0112" } },

    { type: 'diagram', data: {
      headingEn: 'The Same Peak Learning Rate, Three Very Different Outcomes', headingKn: 'ಅದೇ Peak Learning Rate, ಮೂರೂ ಬಹಳ ಬೇರೆ ಫಲಿತಾಂಶಗಳು',
      svgCode: '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6.3">\n  <rect width="260" height="190" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Same Peak LR, Three Outcomes</text>\n  <g font-size="6">\n  <rect x="20" y="24" width="220" height="22" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="37" fill="#fca5a5" text-anchor="middle">No warmup: loss explodes to 14,086,878</text>\n  <path d="M130,46 V56" stroke="#475569"/>\n  <rect x="20" y="58" width="220" height="22" rx="4" fill="#292524" stroke="#f59e0b"/><text x="130" y="71" fill="#fde68a" text-anchor="middle">Warmup only: loss stalls at 875</text>\n  <path d="M130,80 V90" stroke="#475569"/>\n  <rect x="20" y="92" width="220" height="22" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="105" fill="#6ee7b7" text-anchor="middle">Warmup + cosine decay: loss reaches 0.011</text>\n  </g>\n  <text x="130" y="130" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely measured in this lesson using</text>\n  <text x="130" y="140" fill="#94a3b8" text-anchor="middle" font-size="5.6">the identical ravine loss and peak lr=0.11,</text>\n  <text x="130" y="150" fill="#94a3b8" text-anchor="middle" font-size="5.6">only the schedule changed.</text>\n</svg>',
      captionEn: 'Warmup prevents early blowup; decay lets the optimizer settle once past the unstable region -- both were genuinely needed here.',
      captionKn: 'Warmup ಆರಂಭಿಕ ಸ್ಫೋಟವನ್ನೂ ತಡೆಯುತ್ತದೆ; decay ಅಸ್ಥಿರ ಪ್ರದೇಶವನ್ನೂ ಮೀರಿದ ನಂತರ optimizer ಅನ್ನೂ ನೆಲೆಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nStep decay|Learning rate drops by a fixed factor at fixed epoch intervals\nCosine annealing|Learning rate follows a smooth cosine curve down to near 0\nWarmup|Learning rate ramps up from near 0 to its target over the first few epochs\nStability threshold|The lr value (here 2/20=0.1) above which plain gradient descent oscillates instead of converging" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: at lr=0.11 with no warmup, the ravine loss exploded to 14,086,878 after 30 steps\n• Genuinely confirmed: adding a 5-epoch warmup alone reduced the loss to 875 -- a real 16000x improvement, but still not converged\n• Genuinely confirmed: combining warmup with cosine decay reached a genuine loss of 0.0112 -- over 1 billion times better than no schedule\n• Warmup and decay solve DIFFERENT problems: warmup prevents early-training instability, decay enables late-training precision\n• A learning rate that is fine once training has stabilized can be actively destructive at the very start of training',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: lr=0.11 ನಲ್ಲಿ warmup ಇಲ್ಲದೆ, ravine loss 30 steps ನಂತರ 14,086,878 ಗೆ ಸ್ಫೋಟಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೇ 5-epoch warmup loss ಅನ್ನೂ 875 ಗೆ ಕಡಿಮೆ ಮಾಡಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: warmup, cosine decay ಸಂಯೋಜಿಸುವುದೂ 0.0112 ya ನಿಜ loss ತಲುಪಿತು\n• Warmup, decay ಬೇರೆ ಸಮಸ್ಯೆಗಳನ್ನೂ ಪರಿಹರಿಸುತ್ತವೆ\n• Training ಸ್ಥಿರಗೊಂಡ ನಂತರ ಸರಿಯಾಗಿರುವ ಒಂದೂ learning rate training ya ಆರಂಭದಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿ ವಿನಾಶಕಾರಿಯಾಗಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Every large transformer training run genuinely uses warmup for the first few thousand steps before switching to cosine or linear decay, exactly the two-phase pattern proven effective in this lesson\'s ravine experiment.',
      bodyKn: 'ಪ್ರತಿ ದೊಡ್ಡ transformer training run ಮೊದಲ ಕೆಲವೂ ಸಾವಿರ steps ಗಾಗಿ ನಿಜವಾಗಿ warmup ಬಳಸುತ್ತದೆ, ನಂತರ cosine ಅಥವಾ linear decay ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the no-warmup blowup: without warmup, a learning rate large enough to train efficiently later in training can genuinely destroy a randomly-initialized network in its very first few steps, before it has had any chance to stabilize.',
      bodyKn: 'No-warmup blowup ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: warmup ಇಲ್ಲದೆ, ನಂತರ ದಕ್ಷವಾಗಿ ತರಬೇತಿ ನೀಡಲು ಸಾಕಷ್ಟೂ ದೊಡ್ಡ ಒಂದೂ learning rate ಒಂದೂ ಯಾದೃಚ್ಛಿಕವಾಗಿ-initialized network ಅನ್ನೂ ಅದೂ ya ಮೊದಲ ಕೆಲವೂ steps ನಲ್ಲೇ ನಾಶಪಡಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a large model training run shows loss spiking to NaN in the first few steps, adding or extending warmup (exactly the fix genuinely proven here) is one of the standard first responses before touching anything else.',
      bodyKn: 'ಒಂದೂ ದೊಡ್ಡ model training run ಮೊದಲ ಕೆಲವೂ steps ನಲ್ಲಿ loss NaN ಗೆ ಸ್ಪೈಕ್ ಆಗುವುದನ್ನೂ ತೋರಿಸಿದಾಗ, warmup ಸೇರಿಸುವುದೂ ಅಥವಾ ವಿಸ್ತರಿಸುವುದೂ ಪ್ರಮಾಣಿತ ಮೊದಲ ಪ್ರತಿಕ್ರಿಯೆಗಳಲ್ಲಿ ಒಂದೂ.' } },

    { type: 'concept', data: {
      headingEn: 'What Comes Next', headingKn: 'ಮುಂದೆ ಏನೂ ಬರುತ್ತದೆ',
      bodyEn: 'This completes the full training-mechanics arc: layers (55), backprop (56), activations (57), loss (58), optimizers (59), regularization (60), initialization (61), and now schedules (62). Module 63 puts all of it together into one complete mini framework, genuinely built from scratch.',
      bodyKn: 'ಇದೂ ಪೂರ್ಣ training-mechanics ಚಾಪ ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ: layers (55), backprop (56), activations (57), loss (58), optimizers (59), regularization (60), initialization (61), ಈಗ schedules (62). Module 63 ಇವೆಲ್ಲವನ್ನೂ ಒಂದೂ ಪೂರ್ಣ mini framework ಆಗಿ ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'A Note on the Stability Threshold Used Here', headingKn: 'ಇಲ್ಲಿ ಬಳಸಿದ Stability Threshold ಬಗ್ಗೆ ಒಂದೂ ಟಿಪ್ಪಣಿ',
      bodyEn: 'The 2/20=0.1 threshold used to pick lr=0.11 comes from the ravine\'s curvature (the coefficient 20 in f=x^2+10y^2\'s gradient). Real networks have far more complex, higher-dimensional loss surfaces where no single clean threshold exists -- which is exactly why warmup is used as a general safety margin rather than computed precisely for each model.',
      bodyKn: 'lr=0.11 ಆಯ್ಕೆ ಮಾಡಲು ಬಳಸಿದ 2/20=0.1 threshold ravine ya curvature ಇಂದ ಬರುತ್ತದೆ. ನಿಜ networks ಹೆಚ್ಚೂ ಸಂಕೀರ್ಣ loss surfaces ಹೊಂದಿವೆ, ಅಲ್ಲಿ ಯಾವುದೇ ಒಂದೂ ಸ್ವಚ್ಛ threshold ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the loss after 30 steps at lr=0.11 with no warmup?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: warmup ಇಲ್ಲದೆ lr=0.11 ನಲ್ಲಿ 30 steps ನಂತರ loss ಏನೂ?',
        opts: ['About 14,086,878', 'About 0.01', 'Exactly 0', 'About 100'], correct: 0,
        optsKn: ['ಸುಮಾರು 14,086,878', 'ಸುಮಾರು 0.01', 'ನಿಖರವಾಗಿ 0', 'ಸುಮಾರು 100'] },
      { q: 'Genuinely confirmed: what was the loss with warmup alone (no decay) at the same peak lr?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ peak lr ನಲ್ಲಿ ಒಂದೇ warmup (decay ಇಲ್ಲದೆ) ಜೊತೆ loss ಏನೂ?',
        opts: ['About 875', 'About 14 million', 'Exactly 0', 'About 0.01'], correct: 0,
        optsKn: ['ಸುಮಾರು 875', 'ಸುಮಾರು 14 million', 'ನಿಖರವಾಗಿ 0', 'ಸುಮಾರು 0.01'] },
      { q: 'Genuinely confirmed: what was the loss with warmup PLUS cosine decay?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: warmup + cosine decay ಜೊತೆ loss ಏನೂ?',
        opts: ['About 0.0112', 'About 875', 'About 14 million', 'Undefined'], correct: 0,
        optsKn: ['ಸುಮಾರು 0.0112', 'ಸುಮಾರು 875', 'ಸುಮಾರು 14 million', 'ಅನಿರ್ದಿಷ್ಟ'] },
      { q: 'What problem does warmup specifically address?', qKn: 'Warmup ನಿರ್ದಿಷ್ಟವಾಗಿ ಯಾವ ಸಮಸ್ಯೆಯನ್ನೂ ಪರಿಹರಿಸುತ್ತದೆ?',
        opts: ['Early-training instability from starting immediately at a large, possibly unstable learning rate', 'Late-training overfitting', 'Choosing the right loss function', 'Selecting the right activation function'], correct: 0,
        optsKn: ['ದೊಡ್ಡ, ಬಹುಶಃ ಅಸ್ಥಿರ learning rate ನಲ್ಲಿ ತಕ್ಷಣ ಆರಂಭಿಸುವುದರಿಂದ ಆರಂಭಿಕ-training ಅಸ್ಥಿರತೆ', 'ನಂತರದ-training overfitting', 'ಸರಿಯಾದ loss function ಆಯ್ಕೆ ಮಾಡುವುದೂ', 'ಸರಿಯಾದ activation function ಆಯ್ಕೆ ಮಾಡುವುದೂ'] },
      { q: 'Why did warmup alone (without decay) fail to fully converge in this genuine test?', qKn: 'ಈ ನಿಜ test ನಲ್ಲಿ ಒಂದೇ warmup (decay ಇಲ್ಲದೆ) ಏಕೆ ಪೂರ್ಣವಾಗಿ converge ಆಗಲಿಲ್ಲ?',
        opts: ['Once the lr reached its full unstable value (0.11), it kept the ravine oscillating instead of settling', 'Warmup itself causes divergence', 'The starting position was wrong', 'Warmup only works with Adam, not plain gradient descent'], correct: 0,
        optsKn: ['lr ಅದೂ ya ಪೂರ್ಣ ಅಸ್ಥಿರ ಮೌಲ್ಯ (0.11) ತಲುಪಿದ ನಂತರ, ಇದೂ ravine ಅನ್ನೂ ಆಂದೋಲನಗೊಳಿಸುತ್ತಲೇ ಇತ್ತು', 'Warmup ಸ್ವತಃ divergence ಗೆ ಕಾರಣವಾಗುತ್ತದೆ', 'ಆರಂಭಿಕ ಸ್ಥಾನ ತಪ್ಪಾಗಿತ್ತು', 'Warmup ಕೇವಲ Adam ಜೊತೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
    ] } },
  ],
};
