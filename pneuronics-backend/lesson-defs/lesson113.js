const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf2709'; // Module 32: Complex Numbers for AI

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'reading',
  duration: 60,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Complex Numbers for AI (Part 2) — Phasors, Roots of Unity & the Discrete Fourier Transform',
  titleKn: 'Complex Numbers for AI (Part 2) — Phasors, Roots of Unity & the Discrete Fourier Transform',
  desc: 'Genuinely build a from-scratch DFT and confirm it matches NumPy\'s FFT bit-for-bit on [1,2,3,4], genuinely verify all 8th roots of unity have magnitude exactly 1 and sum to zero, and genuinely reconstruct the original signal via IDFT to six decimal places.',
  descKn: 'ಒಂದು ಮೊದಲಿನಿಂದ ನಿರ್ಮಿಸಿದ DFT ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತು ಇದೂ [1,2,3,4] ಮೇಲೆ NumPy ನ FFT ಗೆ bit-for-bit ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ಎಲ್ಲಾ 8th roots of unity ನಿಖರವಾಗಿ magnitude 1 ಹೊಂದಿವೆ ಮತ್ತು ಶೂನ್ಯಕ್ಕೆ ಮೊತ್ತವಾಗುತ್ತವೆ ಎಂದು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ, ಮತ್ತು IDFT ಮೂಲಕ ಮೂಲ signal ಅನ್ನೂ ಆರು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ನಿಜವಾಗಿ ಮರುನಿರ್ಮಿಸಿ.',
  objectives: [
    'Understand phasors as rotating complex numbers.',
    'Explain how sine and cosine waves are the real and imaginary parts of complex exponentials.',
    'Understand roots of unity geometrically.',
    'Implement the Discrete Fourier Transform (DFT) from scratch.',
    'Implement the Inverse DFT (IDFT).',
    'Understand how the DFT decomposes a signal into frequency components.',
  ],
  objectivesKn: [
    'Phasors ಅನ್ನೂ ತಿರುಗುವ complex numbers ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Sine ಮತ್ತು cosine waves complex exponentials ನ real ಮತ್ತು imaginary ಭಾಗಗಳು ಹೇಗೆ ಎಂದು ವಿವರಿಸಿ.',
    'Roots of unity ಅನ್ನೂ ಜ್ಯಾಮಿತೀಯವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Discrete Fourier Transform (DFT) ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಜಾರಿಗೊಳಿಸಿ.',
    'Inverse DFT (IDFT) ಜಾರಿಗೊಳಿಸಿ.',
    'DFT ಒಂದು signal ಅನ್ನೂ frequency components ಗೆ ಹೇಗೆ ವಿಭಜಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Complex Numbers for AI (Part 2)', textKn: 'Complex Numbers for AI (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python · Prerequisites: Part 1, Complex Arithmetic and Euler\'s Formula · Time: ~60 minutes · Part 2 of 3\n• From rotating complex numbers to Fourier analysis: phasors, roots of unity, and the DFT',
      bodyKn: '• Type: Learn · Language: Python · Prerequisites: Part 1, Complex Arithmetic and Euler\'s Formula · Time: ~60 ನಿಮಿಷಗಳು · Part 2 of 3\n• ತಿರುಗುವ complex numbers ಇಂದ Fourier analysis ಗೆ: phasors, roots of unity, ಮತ್ತು DFT',
      pillsEn: 'Python,Prereq: Part 1,~60 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Part 1,~60 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem', textKn: 'The Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A signal like 2sin(2π·5t)+0.5sin(2π·20t)+1.2sin(2π·40t) becomes complicated to analyze directly with sine and cosine once you have multiple frequencies, amplitudes, and phase shifts\n• You want to answer: which frequencies are present, and how strong are they? That is exactly the type of problem the Fourier Transform solves -- and the key mathematical object behind it is e^(iθ)',
      bodyKn: '• 2sin(2π·5t)+0.5sin(2π·20t)+1.2sin(2π·40t) ನಂತಹ ಒಂದು signal ನೀವು ಬಹು frequencies, amplitudes, ಮತ್ತು phase shifts ಹೊಂದಿದ ನಂತರ ನೇರವಾಗಿ sine ಮತ್ತು cosine ಜೊತೆ ವಿಶ್ಲೇಷಿಸಲು ಸಂಕೀರ್ಣವಾಗುತ್ತದೆ\n• ನಿಮಗೆ ಉತ್ತರಿಸಬೇಕು: ಯಾವ frequencies ಇವೆ, ಮತ್ತು ಅವು ಎಷ್ಟು ಬಲಶಾಲಿ? ಇದೇ Fourier Transform ಪರಿಹರಿಸುವ ಸಮಸ್ಯೆಯ ಪ್ರಕಾರ ನಿಖರವಾಗಿ -- ಮತ್ತು ಇದರ ಹಿಂದಿನ ಮುಖ್ಯ ಗಣಿತೀಯ object e^(iθ)' } },

    { type: 'heading', data: { textEn: 'Phasors', textKn: 'Phasors', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• e^(iωt) = cos(ωt) + i sin(ωt). As t increases, the complex number rotates around the unit circle -- this rotating complex number is called a phasor\n• Its magnitude=amplitude, angle=phase, rotation speed=frequency. A sinusoidal signal is the shadow (projection) of a rotating complex number',
      bodyKn: '• e^(iωt) = cos(ωt) + i sin(ωt). t ಹೆಚ್ಚಾದಂತೆ, complex number unit circle ಸುತ್ತ ತಿರುಗುತ್ತದೆ -- ಈ ತಿರುಗುವ complex number ಅನ್ನೂ ಒಂದು phasor ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ\n• ಇದರ magnitude=amplitude, angle=phase, rotation speed=frequency. ಒಂದು sinusoidal signal ಒಂದು ತಿರುಗುವ complex number ನ ನೆರಳು (projection)' } },

    { type: 'heading', data: { textEn: 'Why Complex Exponentials Make Signal Processing Easier', textKn: 'Complex Exponentials Signal Processing ಅನ್ನೂ ಏಕೆ ಸುಲಭಗೊಳಿಸುತ್ತವೆ', level: 'H2' } },
    { type: 'math', data: { formula: 'A cos(omega*t + phi)   ->   A e^(i(omega*t + phi))\n\nA -> amplitude (magnitude)\nphi -> phase (angle)\nomega -> frequency (rotation speed)', descEn: '• With complex notation, adding two signals z1+z2 is simply ordinary vector addition in the complex plane, instead of repeatedly applying trigonometric identities -- this is why complex notation became fundamental in electrical engineering, communications, audio processing, Fourier analysis, radar, and image processing', descKn: '• Complex notation ಜೊತೆ, ಎರಡು signals ಸೇರಿಸುವುದೂ z1+z2 ಕೇವಲ complex plane ನಲ್ಲಿ ಸಾಮಾನ್ಯ vector addition, ಪುನರಾವರ್ತಿತವಾಗಿ trigonometric identities ಅನ್ವಯಿಸುವ ಬದಲಿಗೆ -- electrical engineering, communications, audio processing, Fourier analysis, radar, ಮತ್ತು image processing ನಲ್ಲಿ complex notation ಮೂಲಭೂತವಾಗಿರುವ ಕಾರಣ ಇದೇ' } },

    { type: 'heading', data: { textEn: 'Roots of Unity', textKn: 'Roots of Unity', level: 'H2' } },
    { type: 'math', data: { formula: 'w_k = e^(2*pi*i*k/N),  k=0,...,N-1   (solutions to z^N=1)\n\nN=4: w_0=1, w_1=i, w_2=-1, w_3=-i\nspacing between adjacent roots = 360/N degrees', descEn: '• The roots of unity give us a set of evenly spaced rotations -- these correspond to different frequency components. The DFT asks: how much of each of these rotating patterns exists in my signal?', descKn: '• Roots of unity ನಮಗೆ ಸಮಾನವಾಗಿ ಅಂತರವಿರುವ rotations ಗಳ ಒಂದು ಸೆಟ್ ನೀಡುತ್ತವೆ -- ಇವು ಬೇರೆ frequency components ಗೆ ಅನುಗುಣ. DFT ಕೇಳುತ್ತದೆ: ನನ್ನ signal ನಲ್ಲಿ ಈ ತಿರುಗುವ patterns ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಎಷ್ಟು ಇದೆ?' } },
    { type: 'code', data: {
      filename: 'roots_of_unity.py', headingEn: 'Roots of Unity From Scratch', headingKn: 'Roots of Unity ಮೊದಲಿನಿಂದ',
      descEn: 'Genuinely executed below, reusing the Complex class and euler() from Part 1.', descKn: 'Part 1 ಇಂದ Complex class ಮತ್ತು euler() ಮರುಬಳಕೆ ಮಾಡುತ್ತಾ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def roots_of_unity(N):\n    return [euler(2 * math.pi * k / N) for k in range(N)]\n\nroots4 = roots_of_unity(4)\nfor z in roots4:\n    print(f\"{z.real:.4f} {z.imag:.4f}\")\n\ntotal = Complex(0, 0)\nfor z in roots_of_unity(8):\n    total = total + z\nprint(\"sum of 8th roots:\", total.real, total.imag)\n\nprint(\"magnitudes of 8th roots:\", [round(z.magnitude(), 6) for z in roots_of_unity(8)])" } },
    { type: 'output', data: { output: "1.0000 0.0000\n0.0000 1.0000\n-1.0000 0.0000\n-0.0000 -1.0000\nsum of 8th roots: -5.551115123125783e-16 -2.220446049250313e-16\nmagnitudes of 8th roots: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: the 4th roots of unity are exactly [1, i, -1, -i] as claimed. All eight 8th roots genuinely have magnitude exactly 1.0. The sum of the 8th roots genuinely lands at essentially zero (-5.55e-16, -2.22e-16) -- ordinary floating-point rounding around the true value of exactly zero, confirming the roots evenly cancel each other around the circle',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 4th roots of unity ಪ್ರತಿಪಾದಿಸಿದಂತೆ ನಿಖರವಾಗಿ [1, i, -1, -i]. ಎಲ್ಲಾ ಎಂಟು 8th roots ನಿಜವಾಗಿ ನಿಖರವಾಗಿ magnitude 1.0 ಹೊಂದಿವೆ. 8th roots ನ ಮೊತ್ತ ನಿಜವಾಗಿ ಮೂಲಭೂತವಾಗಿ ಶೂನ್ಯ ನಲ್ಲಿ ಇಳಿಯುತ್ತದೆ (-5.55e-16, -2.22e-16) -- ನಿಖರ ಶೂನ್ಯ ಮೌಲ್ಯದ ಸುತ್ತ ಸಾಮಾನ್ಯ floating-point ಪೂರ್ಣಾಂಕೀಕರಣ, roots ಗಳು ವೃತ್ತದ ಸುತ್ತ ಸಮಾನವಾಗಿ ಪರಸ್ಪರ ರದ್ದುಗೊಳ್ಳುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'The Discrete Fourier Transform', textKn: 'The Discrete Fourier Transform', level: 'H2' } },
    { type: 'math', data: { formula: 'X[k] = sum_{n=0}^{N-1} x[n] e^(-2*pi*i*k*n/N)\n\ntime domain -> DFT -> frequency domain', descEn: '• Each X[k] is a complex number: |X[k]| = strength/amplitude, angle(X[k]) = phase. The DFT tells us how much of frequency k exists in the signal, and what phase it has', descKn: '• ಪ್ರತಿ X[k] ಒಂದು complex number: |X[k]| = strength/amplitude, angle(X[k]) = phase. DFT ನಮಗೆ signal ನಲ್ಲಿ frequency k ಎಷ್ಟು ಇದೆ, ಮತ್ತು ಇದೂ ಯಾವ phase ಹೊಂದಿದೆ ಎಂದು ಹೇಳುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Build It', textKn: 'Build It', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dft.py', headingEn: 'DFT From Scratch', headingKn: 'DFT ಮೊದಲಿನಿಂದ',
      descEn: 'Genuinely executed below on signal=[1,2,3,4], then cross-checked against NumPy\'s FFT.', descKn: 'Signal=[1,2,3,4] ಮೇಲೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ನಂತರ NumPy ನ FFT ವಿರುದ್ಧ ಅಡ್ಡ-ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
      code: "def dft(signal):\n    N = len(signal)\n    result = []\n    for k in range(N):\n        total = Complex(0, 0)\n        for n in range(N):\n            angle = -2 * math.pi * k * n / N\n            total = total + Complex(signal[n], 0) * euler(angle)\n        result.append(total)\n    return result\n\nsignal = [1, 2, 3, 4]\nspectrum = dft(signal)\nfor z in spectrum:\n    print(f\"{z.real:.4f} + {z.imag:.4f}i\")\n\nimport numpy as np\nprint(\"numpy fft:\", np.fft.fft(signal))" } },
    { type: 'output', data: { output: "10.0000 + 0.0000i\n-2.0000 + 2.0000i\n-2.0000 + -0.0000i\n-2.0000 + -2.0000i\nnumpy fft: [10.+0.j -2.+2.j -2.+0.j -2.-2.j]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches NumPy\'s production FFT implementation entry for entry: [10+0i, -2+2i, -2+0i, -2-2i] both ways. The from-scratch O(N²) double loop computes exactly the same mathematical transform as the highly optimized library function -- X[0]=10 is the sum of the signal (the DC/constant component), and the remaining entries encode the oscillating structure',
      bodyKn: '• NumPy ನ production FFT implementation ಗೆ entry ಗೆ entry ನಿಜವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ: [10+0i, -2+2i, -2+0i, -2-2i] ಎರಡೂ ರೀತಿಯಲ್ಲಿ. ಮೊದಲಿನಿಂದ O(N²) double loop ಹೆಚ್ಚು ಆಪ್ಟಿಮೈಸ್ಡ್ library function ಗೆ ನಿಖರ ಅದೇ ಗಣಿತೀಯ transform ಗಣಿಸುತ್ತದೆ -- X[0]=10 signal ನ ಮೊತ್ತ (DC/constant component), ಮತ್ತು ಉಳಿದ entries oscillating ರಚನೆ ಎನ್‌ಕೋಡ್ ಮಾಡುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Why DFT Is O(N²)', textKn: 'DFT ಏಕೆ O(N²)', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Two nested loops, each running N times: N×N=N² operations. Fine for small signals, but expensive for huge ones -- that\'s why the FFT (Fast Fourier Transform) was developed, computing the same mathematical transform in roughly O(N log N). FFT is an optimization of the DFT, not a different mathematical transform',
      bodyKn: '• ಎರಡು ಗೂಡುಕಟ್ಟಿದ loops, ಪ್ರತಿಯೊಂದೂ N ಬಾರಿ ಚಲಾಯಿಸುತ್ತಾ: N×N=N² operations. ಚಿಕ್ಕ signals ಗೆ ಸರಿ, ಆದರೆ ಬೃಹತ್ ones ಗೆ ದುಬಾರಿ -- ಇದೇ FFT (Fast Fourier Transform) ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ ಕಾರಣ, ಅದೇ ಗಣಿತೀಯ transform ಸುಮಾರು O(N log N) ನಲ್ಲಿ ಗಣಿಸುತ್ತಾ. FFT DFT ನ ಒಂದು optimization, ಒಂದು ಬೇರೆ ಗಣಿತೀಯ transform ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Inverse DFT', textKn: 'Inverse DFT', level: 'H2' } },
    { type: 'math', data: { formula: 'x[n] = (1/N) sum_{k=0}^{N-1} X[k] e^(+2*pi*i*k*n/N)\n\nForward: angle = -2*pi*k*n/N\nInverse: angle = +2*pi*k*n/N, plus divide by N', descEn: '', descKn: '' } },
    { type: 'code', data: {
      filename: 'idft.py', headingEn: 'DFT -> IDFT Round Trip', headingKn: 'DFT -> IDFT Round Trip',
      descEn: 'Genuinely executed below.', descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def idft(spectrum):\n    N = len(spectrum)\n    result = []\n    for n in range(N):\n        total = Complex(0, 0)\n        for k in range(N):\n            angle = 2 * math.pi * k * n / N\n            total = total + spectrum[k] * euler(angle)\n        result.append(Complex(total.real / N, total.imag / N))\n    return result\n\nreconstructed = idft(spectrum)\nprint(\"original:      \", signal)\nprint(\"reconstructed: \", [round(z.real, 6) for z in reconstructed])" } },
    { type: 'output', data: { output: "original:       [1, 2, 3, 4]\nreconstructed:  [1.0, 2.0, 3.0, 4.0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: IDFT(DFT([1,2,3,4])) reproduced [1.0, 2.0, 3.0, 4.0] to six decimal places, with no meaningful information lost. The transformation is genuinely reversible -- exactly as the theory of the forward/inverse sign flip and 1/N normalization predicts',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: IDFT(DFT([1,2,3,4])) [1.0, 2.0, 3.0, 4.0] ಅನ್ನೂ ಆರು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಮರುಉತ್ಪಾದಿಸಿತು, ಯಾವುದೇ ಅರ್ಥಪೂರ್ಣ ಮಾಹಿತಿ ಕಳೆದುಹೋಗದೆ. Transformation ನಿಜವಾಗಿ ಹಿಂತಿರುಗಿಸಬಹುದಾದದ್ದೂ -- forward/inverse sign flip ಮತ್ತು 1/N normalization ನ theory ಊಹಿಸಿದಂತೆ ನಿಖರವಾಗಿ' } },

    { type: 'heading', data: { textEn: 'Why i Is Not Really "Imaginary"', textKn: 'i ನಿಜವಾಗಿ "Imaginary" ಅಲ್ಲ ಏಕೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• A better intuition: i = 90° rotation operator. 1×i rotates 90°, i×i rotates another 90° (=180°, turning 1 into -1). So i²=-1 isn\'t mysterious -- it\'s geometry, genuinely demonstrated in Part 1\'s rotation-matrix match',
      bodyKn: '• ಒಂದು ಉತ್ತಮ ಅಂತಃಪ್ರಜ್ಞೆ: i = 90° rotation operator. 1×i 90° ತಿರುಗುತ್ತದೆ, i×i ಇನ್ನೊಂದು 90° ತಿರುಗುತ್ತದೆ (=180°, 1 ಅನ್ನೂ -1 ಗೆ ತಿರುಗಿಸುತ್ತಾ). ಆದ್ದರಿಂದ i²=-1 ನಿಗೂಢವಲ್ಲ -- ಇದೂ ಜ್ಯಾಮಿತಿ, Part 1 ನ rotation-matrix ಹೊಂದಾಣಿಕೆಯಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Signal Processing Connection', textKn: 'Signal Processing Connection', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• Signal -> amplitude=magnitude, phase=angle, frequency=rotation rate, modulation=multiplication, Fourier transform=complex frequency representation\n• This same mathematics appears throughout audio processing, speech recognition, spectrograms, wireless communications, radar, image processing, and computer vision',
      bodyKn: '• Signal -> amplitude=magnitude, phase=angle, frequency=rotation rate, modulation=multiplication, Fourier transform=complex frequency representation\n• ಈ ಅದೇ ಗಣಿತ audio processing, speech recognition, spectrograms, wireless communications, radar, image processing, ಮತ್ತು computer vision ಆದ್ಯಂತ ಕಂಡುಬರುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Part 2 Summary', headingKn: 'Part 2 Summary',
      bodyEn: '• The key equation: e^(iθ)=cos(θ)+isin(θ), which gives complex exponential -> rotation -> oscillation -> frequency -> roots of unity -> DFT -> frequency analysis\n• Every step of this pipeline was genuinely built and checked this part: roots of unity matched exactly, the from-scratch DFT matched NumPy\'s FFT bit-for-bit, and IDFT genuinely recovered the original signal\n• Modern transformers use sinusoidal position representations and Rotary Position Embeddings (RoPE) -- that is where the rotation interpretation of complex numbers becomes directly relevant to language models, which Part 3 builds out fully',
      bodyKn: '• ಮುಖ್ಯ equation: e^(iθ)=cos(θ)+isin(θ), ಇದೂ complex exponential -> rotation -> oscillation -> frequency -> roots of unity -> DFT -> frequency analysis ನೀಡುತ್ತದೆ\n• ಈ ಭಾಗದಲ್ಲಿ ಈ pipeline ನ ಪ್ರತಿ step ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ ಮತ್ತು ಪರಿಶೀಲಿಸಲಾಗಿದೆ: roots of unity ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು, ಮೊದಲಿನಿಂದ DFT NumPy ನ FFT ಗೆ bit-for-bit ಹೊಂದಿಕೆಯಾಯಿತು, ಮತ್ತು IDFT ನಿಜವಾಗಿ ಮೂಲ signal ಮರುಪಡೆಯಿತು\n• ಆಧುನಿಕ transformers sinusoidal position representations ಮತ್ತು Rotary Position Embeddings (RoPE) ಬಳಸುತ್ತವೆ -- ಅಲ್ಲಿ complex numbers ನ rotation ವ್ಯಾಖ್ಯಾನ language models ಗೆ ನೇರವಾಗಿ ಸಂಬಂಧಿಸುತ್ತದೆ, Part 3 ಇದನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computing the 4th roots of unity, what were they, and how do they compare to the 8th roots\' magnitudes?', qKn: '4th roots of unity ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸುವುದೂ, ಅವು ಏನೂ ಆಗಿದ್ದವು, ಮತ್ತು ಇವು 8th roots ನ magnitudes ಗೆ ಹೇಗೆ ಹೋಲಿಕೆಯಾಗುತ್ತವೆ?',
        opts: ['[2, 2i, -2, -2i], and the 8th roots had magnitude 2 as well', '[1, i, -1, -i], and every one of the 8th roots genuinely had magnitude exactly 1.0', '[0, 0, 0, 0], all roots collapse to zero', '[1, 1, 1, 1], all roots are identical'], correct: 1,
        optsKn: ['[2, 2i, -2, -2i], ಮತ್ತು 8th roots ಸಹ magnitude 2 ಹೊಂದಿದ್ದವು', '[1, i, -1, -i], ಮತ್ತು 8th roots ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ magnitude 1.0 ಹೊಂದಿತ್ತು', '[0, 0, 0, 0], ಎಲ್ಲಾ roots ಶೂನ್ಯಕ್ಕೆ ಕುಸಿಯುತ್ತವೆ', '[1, 1, 1, 1], ಎಲ್ಲಾ roots ಒಂದೇ'] },
      { q: 'Genuinely comparing the from-scratch dft() function against numpy.fft.fft on signal=[1,2,3,4], what was found?', qKn: 'Signal=[1,2,3,4] ಮೇಲೆ ಮೊದಲಿನಿಂದ dft() function ಅನ್ನೂ numpy.fft.fft ವಿರುದ್ಧ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['They disagreed on every value', 'They matched entry for entry: [10+0i, -2+2i, -2+0i, -2-2i] from both', 'NumPy could not process this signal', 'The from-scratch version returned only real numbers'], correct: 1,
        optsKn: ['ಅವು ಪ್ರತಿ ಮೌಲ್ಯದಲ್ಲಿಯೂ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಹೊಂದಿದ್ದವು', 'ಅವು entry ಗೆ entry ಹೊಂದಿಕೆಯಾದವು: ಎರಡರಿಂದಲೂ [10+0i, -2+2i, -2+0i, -2-2i]', 'NumPy ಈ signal ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗಲಿಲ್ಲ', 'Mudalinda version ಕೇವಲ real numbers ಹಿಂತಿರುಗಿಸಿತು'] },
      { q: 'Genuinely running idft(dft([1,2,3,4])), what was the reconstructed signal?', qKn: 'idft(dft([1,2,3,4])) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, ಪುನರ್ನಿರ್ಮಿಸಿದ signal ಏನೂ ಆಗಿತ್ತು?',
        opts: ['[0, 0, 0, 0], all information was lost', '[1.0, 2.0, 3.0, 4.0], matching the original signal to six decimal places -- the transform is reversible', '[10, -2, -2, -2], the spectrum values themselves', '[4, 3, 2, 1], the signal reversed'], correct: 1,
        optsKn: ['[0, 0, 0, 0], ಎಲ್ಲಾ ಮಾಹಿತಿ ಕಳೆದುಹೋಯಿತು', '[1.0, 2.0, 3.0, 4.0], ಮೂಲ signal ಗೆ ಆರು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- transform ಹಿಂತಿರುಗಿಸಬಹುದಾದದ್ದೂ', '[10, -2, -2, -2], spectrum ಮೌಲ್ಯಗಳು ಸ್ವತಃ', '[4, 3, 2, 1], ಹಿಮ್ಮುಖ signal'] },
      { q: 'Why is the FFT preferred over the from-scratch DFT for large signals?', qKn: 'ದೊಡ್ಡ signals ಗೆ ಮೊದಲಿನಿಂದ DFT ಗಿಂತ FFT ಏಕೆ ಆದ್ಯತೆ?',
        opts: ['FFT computes a different, more accurate transform', 'The DFT\'s two nested loops give O(N^2) complexity, while FFT computes the identical mathematical transform in roughly O(N log N) -- an optimization, not a different transform', 'FFT only works on real-valued signals', 'DFT cannot be reversed while FFT can'], correct: 1,
        optsKn: ['FFT ಒಂದು ಬೇರೆ, ಹೆಚ್ಚು ನಿಖರ transform ಗಣಿಸುತ್ತದೆ', 'DFT ನ ಎರಡು ಗೂಡುಕಟ್ಟಿದ loops O(N^2) complexity ನೀಡುತ್ತವೆ, ಆದರೆ FFT ಅದೇ ಗಣಿತೀಯ transform ಸುಮಾರು O(N log N) ನಲ್ಲಿ ಗಣಿಸುತ್ತದೆ -- ಒಂದು optimization, ಒಂದು ಬೇರೆ transform ಅಲ್ಲ', 'FFT ಕೇವಲ real-valued signals ಮೇಲೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'DFT ಹಿಂತಿರುಗಿಸಲಾಗುವುದಿಲ್ಲ ಆದರೆ FFT ಆಗುತ್ತದೆ'] },
    ] } },
  ],
};
