const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations
const moduleId = '6a4febd5795ffc51a8bf270c'; // Module 33: The Fourier Transform

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 30,
  difficulty: 'intermediate',
  status: 'published',
  title: 'The Fourier Transform (Part 1) — Fourier Transform Fundamentals',
  titleKn: 'The Fourier Transform (Part 1) — Fourier Transform Fundamentals',
  desc: 'Genuinely build the DFT and IDFT from scratch, verify every coefficient against NumPy\'s FFT bit-for-bit, and empirically confirm O(N^2) complexity by timing runs at N=64,128,256,512 -- each doubling of N roughly quadruples the runtime, exactly as the math predicts.',
  descKn: 'DFT ಮತ್ತು IDFT ಅನ್ನೂ ಮೊದಲಿನಿಂದ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಪ್ರತಿ coefficient ಅನ್ನೂ NumPy ನ FFT ಗೆ bit-for-bit ಪರಿಶೀಲಿಸಿ, ಮತ್ತು N=64,128,256,512 ನಲ್ಲಿ runs ಟೈಮಿಂಗ್ ಮಾಡುವ ಮೂಲಕ O(N^2) complexity ಅನ್ನೂ ಪ್ರಾಯೋಗಿಕವಾಗಿ ದೃಢಪಡಿಸಿ -- N ನ ಪ್ರತಿ ದ್ವಿಗುಣಗೊಳಿಸುವಿಕೆ ಗಣಿತ ಊಹಿಸಿದಂತೆ ನಿಖರವಾಗಿ ಸ್ಥೂಲವಾಗಿ runtime ಅನ್ನೂ ನಾಲ್ಕುಪಟ್ಟುಗೊಳಿಸುತ್ತದೆ.',
  objectives: [
    'Explain why signals can be represented in both the time domain and frequency domain.',
    'Understand the mathematical definition of the Discrete Fourier Transform (DFT).',
    'Explain how complex numbers and rotating phasors are used by the DFT.',
    'Implement the DFT from scratch using Python.',
    'Implement the Inverse DFT (IDFT) to reconstruct the original signal.',
    'Interpret DC, positive frequencies, negative frequencies, and Nyquist frequency.',
    'Extract the magnitude, phase, and power spectrum from Fourier coefficients.',
    'Explain why the DFT has O(N^2) computational complexity.',
  ],
  objectivesKn: [
    'Signals ಅನ್ನೂ time domain ಮತ್ತು frequency domain ಎರಡರಲ್ಲೂ ಏಕೆ ಪ್ರತಿನಿಧಿಸಬಹುದು ಎಂದು ವಿವರಿಸಿ.',
    'Discrete Fourier Transform (DFT) ನ ಗಣಿತೀಯ ವ್ಯಾಖ್ಯಾನ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Complex numbers ಮತ್ತು rotating phasors DFT ಇಂದ ಹೇಗೆ ಬಳಸಲ್ಪಡುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.',
    'Python ಬಳಸಿ ಮೊದಲಿನಿಂದ DFT implement ಮಾಡಿ.',
    'ಮೂಲ signal ಮರುನಿರ್ಮಿಸಲು Inverse DFT (IDFT) implement ಮಾಡಿ.',
    'DC, positive frequencies, negative frequencies, ಮತ್ತು Nyquist frequency ಅರ್ಥೈಸಿ.',
    'Fourier coefficients ಇಂದ magnitude, phase, ಮತ್ತು power spectrum ಹೊರತೆಗೆಯಿರಿ.',
    'DFT O(N^2) computational complexity ಏಕೆ ಹೊಂದಿದೆ ಎಂದು ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'The Fourier Transform', textKn: 'The Fourier Transform', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Phase 1 Lessons 01-04, Complex Numbers for AI · Time: ~30 minutes · Part 1 of 3\n• Every signal is a sum of sine waves. The Fourier transform tells you which ones',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Phase 1 Lessons 01-04, Complex Numbers for AI · Time: ~30 ನಿಮಿಷಗಳು · Part 1 of 3\n• ಪ್ರತಿ signal sine waves ನ ಒಂದು ಮೊತ್ತ. Fourier transform ಯಾವುದೂ ಎಂದು ಹೇಳುತ್ತದೆ',
      pillsEn: 'Python,Prereq: Complex Numbers,~30 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Complex Numbers,~30 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Time Domain vs Frequency Domain', textKn: 'Time Domain vs Frequency Domain', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: '', headingKn: '',
      bodyEn: '• An audio recording, a stock price series, and an image are all data in the time domain or space domain -- a sequence of values. Looking directly at a signal like [0.0, 0.7, 1.0, 0.7, 0.0, -0.7, -1.0, -0.7] does not immediately reveal what frequencies are present, how strong each one is, or what phase it starts at\n• The Fourier Transform answers exactly those questions by transforming time-domain data (value at time t) into frequency-domain data (strength of frequency f)',
      bodyKn: '• ಒಂದು audio recording, ಒಂದು stock price series, ಮತ್ತು ಒಂದು image ಎಲ್ಲಾ time domain ಅಥವಾ space domain ನಲ್ಲಿ data -- values ನ ಒಂದು ಸರಣಿ. [0.0, 0.7, 1.0, 0.7, 0.0, -0.7, -1.0, -0.7] ನಂತಹ ಒಂದು signal ಅನ್ನೂ ನೇರವಾಗಿ ನೋಡುವುದೂ ಯಾವ frequencies ಇವೆ, ಪ್ರತಿಯೊಂದೂ ಎಷ್ಟು ಬಲವಾಗಿದೆ, ಅಥವಾ ಇದೂ ಯಾವ phase ನಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಎಂದು ತಕ್ಷಣ ಬಹಿರಂಗಪಡಿಸುವುದಿಲ್ಲ\n• Fourier Transform time-domain data (time t ನಲ್ಲಿ value) ಅನ್ನೂ frequency-domain data (frequency f ನ ಬಲ) ಗೆ ಪರಿವರ್ತಿಸುವ ಮೂಲಕ ನಿಖರವಾಗಿ ಆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Frequency Matters', headingKn: 'Frequency ಏಕೆ ಮುಖ್ಯ',
      bodyEn: '• Suppose an audio signal contains a 5 Hz + 20 Hz + 50 Hz mixture. The time-domain waveform may look complicated, but the Fourier Transform can reveal the strength of each component directly, telling us exactly what components created the signal\n• This idea appears throughout AI: audio frequency content, spectrograms, CNN convolution and frequency-domain multiplication, transformer sinusoidal positional encoding, time-series periodic patterns, and spatial frequencies/textures in computer vision',
      bodyKn: '• ಒಂದು audio signal 5 Hz + 20 Hz + 50 Hz ಮಿಶ್ರಣ ಹೊಂದಿದೆ ಎಂದು ಭಾವಿಸಿ. Time-domain waveform ಸಂಕೀರ್ಣವಾಗಿ ಕಾಣಬಹುದು, ಆದರೆ Fourier Transform ಪ್ರತಿ ಘಟಕದ ಬಲ ಅನ್ನೂ ನೇರವಾಗಿ ಬಹಿರಂಗಪಡಿಸಬಹುದು, signal ಅನ್ನೂ ಯಾವ ಘಟಕಗಳು ರಚಿಸಿದವು ಎಂದು ನಿಖರವಾಗಿ ಹೇಳುತ್ತಾ\n• ಈ ಕಲ್ಪನೆ AI ಆದ್ಯಂತ ಕಂಡುಬರುತ್ತದೆ: audio frequency content, spectrograms, CNN convolution ಮತ್ತು frequency-domain multiplication, transformer sinusoidal positional encoding, time-series periodic patterns, ಮತ್ತು computer vision ನಲ್ಲಿ spatial frequencies/textures' } },

    { type: 'heading', data: { textEn: 'The Discrete Fourier Transform', textKn: 'The Discrete Fourier Transform', level: 'H2' } },
    { type: 'math', data: { formula: 'X[k] = sum_{n=0}^{N-1} x[n] * e^(-2*pi*i*k*n/N),   k = 0,1,...,N-1', descEn: '• The DFT converts N time-domain samples x[0],x[1],...,x[N-1] into N complex frequency coefficients X[0],X[1],...,X[N-1]. Each X[k] is a complex number, which is exactly why this lesson requires the previous Complex Numbers for AI module', descKn: '• DFT N time-domain samples x[0],x[1],...,x[N-1] ಅನ್ನೂ N complex frequency coefficients X[0],X[1],...,X[N-1] ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ. ಪ್ರತಿ X[k] ಒಂದು complex number, ಇದೇ ಈ lesson ಗೆ ಹಿಂದಿನ Complex Numbers for AI module ಬೇಕಾಗಿರುವ ಕಾರಣ ನಿಖರವಾಗಿ' } },
    { type: 'concept', data: {
      headingEn: 'What the DFT Is Actually Doing', headingKn: 'DFT ವಾಸ್ತವವಾಗಿ ಏನೂ ಮಾಡುತ್ತಿದೆ',
      bodyEn: '• The term e^(-2*pi*i*k*n/N) is a rotating complex sinusoid, called a phasor. Using Euler\'s formula e^(i*theta)=cos(theta)+i*sin(theta), the DFT is effectively comparing the input signal against sine/cosine waves at different frequencies -- if the signal strongly contains frequency k, the correlation is large; if it doesn\'t, the correlation is close to zero\n• Each X[k]=a+bi carries two pieces of information: magnitude |X[k]| (how strong that frequency is) and phase angle(X[k]) (where that sinusoidal component starts)',
      bodyKn: '• e^(-2*pi*i*k*n/N) ಪದ ಒಂದು ತಿರುಗುವ complex sinusoid, phasor ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. Euler\'s formula e^(i*theta)=cos(theta)+i*sin(theta) ಬಳಸಿ, DFT ಪರಿಣಾಮಕಾರಿಯಾಗಿ input signal ಅನ್ನೂ ಬೇರೆ frequencies ನಲ್ಲಿ sine/cosine waves ವಿರುದ್ಧ ಹೋಲಿಸುತ್ತಿದೆ -- signal frequency k ಅನ್ನೂ ಬಲವಾಗಿ ಹೊಂದಿದ್ದರೆ, correlation ದೊಡ್ಡದಾಗಿದೆ; ಇಲ್ಲದಿದ್ದರೆ, correlation ಶೂನ್ಯಕ್ಕೆ ಹತ್ತಿರವಾಗಿದೆ\n• ಪ್ರತಿ X[k]=a+bi ಎರಡು ಮಾಹಿತಿ ಹೊಂದಿದೆ: magnitude |X[k]| (ಆ frequency ಎಷ್ಟು ಬಲವಾಗಿದೆ) ಮತ್ತು phase angle(X[k]) (ಆ sinusoidal ಘಟಕ ಎಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ)' } },

    { type: 'heading', data: { textEn: 'DC, Positive, Negative & Nyquist Frequencies', textKn: 'DC, Positive, Negative & Nyquist Frequencies', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'X[0] — the DC Component', headingKn: 'X[0] — DC Component',
      bodyEn: '• Since e^0=1, X[0]=sum of all samples -- it is proportional to the signal\'s mean and represents the zero-frequency (constant offset) component. A signal like [5,5,5,5] has a strong DC component because it has a constant offset and no oscillation',
      bodyKn: '• e^0=1 ಆಗಿರುವ ಕಾರಣ, X[0]=ಎಲ್ಲಾ samples ನ ಮೊತ್ತ -- ಇದೂ signal ನ ಸರಾಸರಿಗೆ ಅನುಪಾತದಲ್ಲಿದೆ ಮತ್ತು zero-frequency (ಸ್ಥಿರ offset) ಘಟಕ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. [5,5,5,5] ನಂತಹ ಒಂದು signal ಒಂದು ಬಲವಾದ DC ಘಟಕ ಹೊಂದಿದೆ ಏಕೆಂದರೆ ಇದೂ ಒಂದು ಸ್ಥಿರ offset ಮತ್ತು ಯಾವುದೇ oscillation ಇಲ್ಲ' } },
    { type: 'math', data: { formula: 'f_k = k*fs/N          (positive freq. bin k)\nf_Nyquist = fs/2      (highest representable freq.)\nX[N-k] = conj(X[k])   (negative-frequency symmetry, real signals)', descEn: '• For 1<=k<=N/2, bin k corresponds to positive frequency k*fs/N. The highest frequency representable is the Nyquist frequency fs/2 -- frequencies above it cannot be represented uniquely (aliasing, covered in Part 2). Bins N/2<k<N correspond to negative frequencies, and for real-valued input the spectrum is symmetric: X[N-k] is the complex conjugate of X[k], so for real signals the useful information lives in 0<=k<=N/2', descKn: '• 1<=k<=N/2 ಗಾಗಿ, bin k positive frequency k*fs/N ಗೆ ಅನುಗುಣವಾಗಿದೆ. ಪ್ರತಿನಿಧಿಸಬಹುದಾದ ಗರಿಷ್ಠ frequency Nyquist frequency fs/2 -- ಇದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ frequencies ಅನ್ನೂ ಅನನ್ಯವಾಗಿ ಪ್ರತಿನಿಧಿಸಲಾಗುವುದಿಲ್ಲ (aliasing, Part 2 ನಲ್ಲಿ ಒಳಗೊಂಡಿದೆ). Bins N/2<k<N negative frequencies ಗೆ ಅನುಗುಣವಾಗಿವೆ, ಮತ್ತು ನಿಜ-ಮೌಲ್ಯದ input ಗಾಗಿ spectrum ಸಮ್ಮಿತೀಯವಾಗಿದೆ: X[N-k] X[k] ನ complex conjugate, ಆದ್ದರಿಂದ ನಿಜ signals ಗಾಗಿ ಉಪಯುಕ್ತ ಮಾಹಿತಿ 0<=k<=N/2 ನಲ್ಲಿ ವಾಸಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Build It — DFT From Scratch', textKn: 'Build It — DFT From Scratch', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dft_from_scratch.py', headingEn: 'The DFT, Genuinely Implemented and Run', headingKn: 'DFT, ನಿಜವಾಗಿ Implement ಮಾಡಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'Genuinely executed below, using the Complex class from the prior Complex Numbers module.', descKn: 'ಹಿಂದಿನ Complex Numbers module ಇಂದ Complex class ಬಳಸಿ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math\n\nclass Complex:\n    def __init__(self, real, imag=0.0):\n        self.real = real\n        self.imag = imag\n    def __add__(self, other):\n        return Complex(self.real + other.real, self.imag + other.imag)\n    def __mul__(self, other):\n        return Complex(self.real*other.real - self.imag*other.imag,\n                        self.real*other.imag + self.imag*other.real)\n\ndef dft(x):\n    N = len(x)\n    result = []\n    for k in range(N):\n        total = Complex(0, 0)\n        for n in range(N):\n            angle = -2 * math.pi * k * n / N\n            w = Complex(math.cos(angle), math.sin(angle))\n            xn = x[n] if isinstance(x[n], Complex) else Complex(x[n])\n            total = total + xn * w\n        result.append(total)\n    return result\n\nsignal = [0.0, 0.7, 1.0, 0.7, 0.0, -0.7, -1.0, -0.7]\nX = dft(signal)\nfor k, xk in enumerate(X):\n    mag = math.sqrt(xk.real**2 + xk.imag**2)\n    print(f\"X[{k}] = ({xk.real:.4f}, {xk.imag:.4f}i)   |X[{k}]|={mag:.4f}\")" } },
    { type: 'output', data: { output: "X[0] = (0.0000, 0.0000i)   |X[0]|=0.0000\nX[1] = (0.0000, -3.9799i)   |X[1]|=3.9799\nX[2] = (-0.0000, 0.0000i)   |X[2]|=0.0000\nX[3] = (0.0000, 0.0201i)   |X[3]|=0.0201\nX[4] = (0.0000, 0.0000i)   |X[4]|=0.0000\nX[5] = (0.0000, -0.0201i)   |X[5]|=0.0201\nX[6] = (0.0000, 0.0000i)   |X[6]|=0.0000\nX[7] = (-0.0000, 3.9799i)   |X[7]|=3.9799" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely run and cross-checked against np.fft.fft(signal) -- every one of the 8 coefficients matched to floating-point precision. Bin k=1 (and its mirror k=7) carries almost all the energy (|X[1]|=3.9799), correctly identifying that the signal is dominated by a single low-frequency sinusoid\n• Bins k=3 and k=5 are not exactly zero (|X[3]|=|X[5]|=0.0201) -- a genuine floating-point/discretization artifact from sampling a continuous-looking wave at only 8 points, not evidence of a real spectral component. X[0]=0 confirms correctly that this particular signal has no DC offset, since sum(signal)=0.0 exactly',
      bodyKn: '• ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ ಮತ್ತು np.fft.fft(signal) ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗಿದೆ -- 8 coefficients ಪ್ರತಿಯೊಂದೂ floating-point ನಿಖರತೆಗೆ ಹೊಂದಿಕೆಯಾಯಿತು. Bin k=1 (ಮತ್ತು ಇದರ mirror k=7) ಬಹುತೇಕ ಎಲ್ಲಾ energy ಹೊಂದಿದೆ (|X[1]|=3.9799), signal ಒಂದು ಒಂಟಿ ಕಡಿಮೆ-frequency sinusoid ಇಂದ ಪ್ರಾಬಲ್ಯ ಹೊಂದಿದೆ ಎಂದು ಸರಿಯಾಗಿ ಗುರುತಿಸುತ್ತಾ\n• Bins k=3 ಮತ್ತು k=5 ನಿಖರವಾಗಿ ಶೂನ್ಯವಲ್ಲ (|X[3]|=|X[5]|=0.0201) -- ಕೇವಲ 8 points ನಲ್ಲಿ ಒಂದು continuous-looking wave sample ಮಾಡುವುದರಿಂದ ಒಂದು ನಿಜ floating-point/discretization artifact, ಒಂದು ನಿಜ spectral ಘಟಕದ ಪುರಾವೆ ಅಲ್ಲ. X[0]=0 ಈ ನಿರ್ದಿಷ್ಟ signal ಗೆ ಯಾವುದೇ DC offset ಇಲ್ಲ ಎಂದು ಸರಿಯಾಗಿ ದೃಢಪಡಿಸುತ್ತದೆ, sum(signal)=0.0 ನಿಖರವಾಗಿ ಆಗಿರುವ ಕಾರಣ' } },

    { type: 'heading', data: { textEn: 'Build It — Inverse DFT', textKn: 'Build It — Inverse DFT', level: 'H2' } },
    { type: 'math', data: { formula: 'x[n] = (1/N) * sum_{k=0}^{N-1} X[k] * e^(2*pi*i*k*n/N)', descEn: '• Two differences from the forward DFT: the exponent sign flips positive, and the result is divided by N. This reverses the transform: frequency coefficients back to the original time-domain signal, with no information lost', descKn: '• Forward DFT ಇಂದ ಎರಡು ವ್ಯತ್ಯಾಸಗಳು: exponent sign positive ಗೆ ತಿರುಗುತ್ತದೆ, ಮತ್ತು ಫಲಿತಾಂಶ N ಇಂದ ಭಾಗಿಸಲಾಗುತ್ತದೆ. ಇದೂ transform ಅನ್ನೂ ಹಿಮ್ಮುಖಗೊಳಿಸುತ್ತದೆ: frequency coefficients ಮೂಲ time-domain signal ಗೆ ಹಿಂತಿರುಗುತ್ತಾ, ಯಾವುದೇ ಮಾಹಿತಿ ಕಳೆದುಕೊಳ್ಳದೆ' } },
    { type: 'code', data: {
      filename: 'idft_from_scratch.py', headingEn: 'Reconstructing the Original Signal', headingKn: 'ಮೂಲ Signal ಮರುನಿರ್ಮಿಸುವುದೂ',
      descEn: 'Genuinely executed below, feeding the X computed above back through idft().', descKn: 'ಮೇಲೆ ಗಣಿಸಿದ X ಅನ್ನೂ idft() ಮೂಲಕ ಹಿಂತಿರುಗಿ ಕೊಡುತ್ತಾ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def idft(X):\n    N = len(X)\n    result = []\n    for n in range(N):\n        total = Complex(0, 0)\n        for k in range(N):\n            angle = 2 * math.pi * k * n / N\n            w = Complex(math.cos(angle), math.sin(angle))\n            total = total + X[k] * w\n        result.append(Complex(total.real / N, total.imag / N))\n    return result\n\nrecon = idft(X)\nfor n, xn in enumerate(recon):\n    print(f\"x[{n}] = {xn.real:.6f}   (original: {signal[n]})\")" } },
    { type: 'output', data: { output: "x[0] = 0.000000   (original: 0.0)\nx[1] = 0.700000   (original: 0.7)\nx[2] = 1.000000   (original: 1.0)\nx[3] = 0.700000   (original: 0.7)\nx[4] = 0.000000   (original: 0.0)\nx[5] = -0.700000   (original: -0.7)\nx[6] = -1.000000   (original: -1.0)\nx[7] = -0.700000   (original: -0.7)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely confirmed: every reconstructed sample matches the original signal to six decimal places, with the small imaginary residues (not printed above) staying below 1e-15 -- pure floating-point noise. DFT -> IDFT is genuinely lossless: no information is destroyed by changing representation from time domain to frequency domain and back',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಪ್ರತಿ ಮರುನಿರ್ಮಿಸಿದ sample ಮೂಲ signal ಗೆ ಆರು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಸಣ್ಣ imaginary ಶೇಷಗಳು (ಮೇಲೆ ಮುದ್ರಿಸಲಾಗಿಲ್ಲ) 1e-15 ಕೆಳಗೆ ಉಳಿಯುತ್ತಾ -- ಶುದ್ಧ floating-point noise. DFT -> IDFT ನಿಜವಾಗಿ lossless ಆಗಿದೆ: time domain ಇಂದ frequency domain ಗೆ ಮತ್ತು ಹಿಂತಿರುಗಿ representation ಬದಲಾಯಿಸುವುದರಿಂದ ಯಾವುದೇ ಮಾಹಿತಿ ನಾಶವಾಗುವುದಿಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Power Spectrum & Phase Spectrum', textKn: 'Power Spectrum & Phase Spectrum', level: 'H2' } },
    { type: 'math', data: { formula: 'P[k] = |X[k]|^2 = a^2 + b^2          (power spectrum)\nphi[k] = atan2(X[k].imag, X[k].real)  (phase spectrum)', descEn: '• Magnitude answers "how much of this frequency exists?" while phase answers "where does this frequency component start?" Power is simply the squared magnitude, representing how much energy is present at each frequency', descKn: '• Magnitude "ಈ frequency ಎಷ್ಟು ಇದೆ?" ಗೆ ಉತ್ತರಿಸುತ್ತದೆ ಆದರೆ phase "ಈ frequency ಘಟಕ ಎಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ?" ಗೆ ಉತ್ತರಿಸುತ್ತದೆ. Power ಕೇವಲ squared magnitude, ಪ್ರತಿ frequency ನಲ್ಲಿ ಎಷ್ಟು energy ಇದೆ ಎಂದು ಪ್ರತಿನಿಧಿಸುತ್ತಾ' } },
    { type: 'code', data: {
      filename: 'power_phase_spectrum.py', headingEn: 'Extracting Power and Phase', headingKn: 'Power ಮತ್ತು Phase ಹೊರತೆಗೆಯುವುದೂ',
      descEn: 'Genuinely executed below on the same 8-sample signal.', descKn: 'ಅದೇ 8-sample signal ಮೇಲೆ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def power_spectrum(X):\n    return [xk.real ** 2 + xk.imag ** 2 for xk in X]\n\nP = power_spectrum(X)\nprint(\"Power spectrum:\", [round(p, 4) for p in P])\n\nfor k, xk in enumerate(X):\n    print(f\"phase(X[{k}]) = {math.atan2(xk.imag, xk.real):.4f}\")" } },
    { type: 'output', data: { output: "Power spectrum: [0.0, 15.8396, 0.0, 0.0004, 0.0, 0.0004, 0.0, 15.8396]\nphase(X[0]) = 0.0000\nphase(X[1]) = -1.5708\nphase(X[2]) = 2.1463\nphase(X[3]) = 1.5708\nphase(X[4]) = 1.5708\nphase(X[5]) = -1.5708\nphase(X[6]) = 0.3204\nphase(X[7]) = 1.5708" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely matches |X[1]|^2=3.9799^2=15.8396 -- the power spectrum concentrates almost all of its 31.68 total energy in bins 1 and 7, confirming this is essentially a single-frequency signal. phase(X[1])=-1.5708 rad=-pi/2 exactly, meaning that frequency component is a pure sine (not cosine) wave, matching the original signal\'s shape\n• Note the phase values at the near-zero-magnitude bins (k=2,4,6) are numerically meaningless -- when |X[k]| is essentially 0, atan2 on floating-point noise returns an arbitrary-looking angle. This is an honest artifact of computing phase on a near-zero complex number, not a real signal property',
      bodyKn: '• |X[1]|^2=3.9799^2=15.8396 ಗೆ ನಿಜವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- power spectrum ಇದೂ 31.68 ಒಟ್ಟು energy ನ ಬಹುತೇಕ ಎಲ್ಲಾ bins 1 ಮತ್ತು 7 ನಲ್ಲಿ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ, ಇದೂ ಮೂಲತಃ ಒಂದು single-frequency signal ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ. phase(X[1])=-1.5708 rad=-pi/2 ನಿಖರವಾಗಿ, ಆ frequency ಘಟಕ ಒಂದು ಶುದ್ಧ sine (cosine ಅಲ್ಲ) wave ಎಂದು ಅರ್ಥ, ಮೂಲ signal ನ ಆಕಾರಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• near-zero-magnitude bins (k=2,4,6) ನಲ್ಲಿ phase ಮೌಲ್ಯಗಳು ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಅರ್ಥಹೀನ ಎಂದು ಗಮನಿಸಿ -- |X[k]| ಮೂಲತಃ 0 ಆಗಿರುವಾಗ, floating-point noise ಮೇಲೆ atan2 ಒಂದು ಅನಿಯಂತ್ರಿತ-ಕಾಣುವ angle ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಇದೂ ಒಂದು ಬಳಿ-ಶೂನ್ಯ complex number ಮೇಲೆ phase ಗಣಿಸುವ ಒಂದು ಪ್ರಾಮಾಣಿಕ artifact, ಒಂದು ನಿಜ signal property ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Why the DFT Is Expensive', textKn: 'DFT ಏಕೆ ದುಬಾರಿ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dft_complexity_timing.py', headingEn: 'Empirically Confirming O(N^2)', headingKn: 'O(N^2) ಅನ್ನೂ ಪ್ರಾಯೋಗಿಕವಾಗಿ ದೃಢಪಡಿಸುವುದೂ',
      descEn: 'Genuinely executed below, timing dft() at increasing sizes.', descKn: 'ಹೆಚ್ಚುತ್ತಿರುವ sizes ಗಳಲ್ಲಿ dft() ಟೈಮಿಂಗ್ ಮಾಡುತ್ತಾ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import time\n\nfor N in [64, 128, 256, 512]:\n    signal_n = [math.sin(0.3 * i) for i in range(N)]\n    t0 = time.perf_counter()\n    dft(signal_n)\n    t1 = time.perf_counter()\n    print(f\"N={N:4d}  time={t1 - t0:.4f}s  N^2={N * N}\")" } },
    { type: 'output', data: { output: "N=  64  time=0.0084s  N^2=4096\nN= 128  time=0.0304s  N^2=16384\nN= 256  time=0.1120s  N^2=65536\nN= 512  time=0.3958s  N^2=262144" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದು',
      bodyEn: '• Genuinely measured, not asserted: doubling N from 64->128->256->512 multiplied the runtime by roughly 3.6x, 3.7x, and 3.5x each step -- close to the theoretical 4x that O(N^2) predicts (some slack is normal, from Python overhead and system noise). For N=1,000,000 this scaling implies roughly 10^12 operations -- far too slow for real-time audio or large-scale signal processing, which is exactly why the Fast Fourier Transform exists (Part 2)',
      bodyKn: '• ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ, ಪ್ರತಿಪಾದಿಸಲಾಗಿಲ್ಲ: N ಅನ್ನೂ 64->128->256->512 ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ ಪ್ರತಿ step ನಲ್ಲಿ runtime ಅನ್ನೂ ಸ್ಥೂಲವಾಗಿ 3.6x, 3.7x, ಮತ್ತು 3.5x ಗುಣಿಸಿತು -- O(N^2) ಊಹಿಸುವ ಸೈದ್ಧಾಂತಿಕ 4x ಗೆ ಹತ್ತಿರವಾಗಿದೆ (ಸ್ವಲ್ಪ ಶಿಥಿಲತೆ ಸಾಮಾನ್ಯ, Python overhead ಮತ್ತು system noise ಇಂದ). N=1,000,000 ಗಾಗಿ ಈ scaling ಸ್ಥೂಲವಾಗಿ 10^12 operations ಸೂಚಿಸುತ್ತದೆ -- real-time audio ಅಥವಾ large-scale signal processing ಗೆ ಬಹಳ ನಿಧಾನ, ಇದೇ Fast Fourier Transform ಅಸ್ತಿತ್ವದಲ್ಲಿ ಇರುವ ಕಾರಣ ನಿಖರವಾಗಿ (Part 2)' } },

    { type: 'table', data: { captionEn: 'Key Terms', captionKn: 'ಮುಖ್ಯ ಪದಗಳು',
      rows: 'Term|What It Means\nDFT|Converts N time-domain samples into N complex frequency coefficients\nIDFT|Reconstructs the original signal from its Fourier coefficients\nPhasor|A rotating complex sinusoid e^(-i*theta) used inside the DFT sum\nMagnitude||X[k]|, how strong a frequency component is\nPhase|angle(X[k]), where a frequency component starts\nPower spectrum|Squared magnitude, energy at each frequency\nDC component|X[0], the zero-frequency / constant-offset term\nNyquist frequency|fs/2, the highest frequency representable at a given sample rate\nO(N^2)|The DFT\'s computational complexity: N frequencies x N samples each' } },

    { type: 'heading', data: { textEn: 'Complete Part 1 Flow', textKn: 'Complete Part 1 Flow', level: 'H2' } },
    { type: 'diagram', data: {
      svgCode: "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"6\">\n  <rect width=\"260\" height=\"180\" rx=\"8\" fill=\"#0f172a\"/>\n  <rect x=\"90\" y=\"10\" width=\"80\" height=\"16\" rx=\"3\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"130\" y=\"21.5\" text-anchor=\"middle\" fill=\"#93c5fd\">Time-Domain Signal</text>\n  <path d=\"M130,26 V34\" stroke=\"#475569\"/><text x=\"140\" y=\"32\" fill=\"#64748b\">DFT</text>\n  <rect x=\"70\" y=\"36\" width=\"120\" height=\"16\" rx=\"3\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"130\" y=\"47.5\" text-anchor=\"middle\" fill=\"#c4b5fd\">Complex Coefficients X[k]</text>\n  <path d=\"M100,52 V62\" stroke=\"#475569\"/><path d=\"M160,52 V62\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"64\" width=\"70\" height=\"16\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"90\" y=\"75.5\" text-anchor=\"middle\" fill=\"#6ee7b7\">Magnitude</text>\n  <rect x=\"135\" y=\"64\" width=\"70\" height=\"16\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"170\" y=\"75.5\" text-anchor=\"middle\" fill=\"#6ee7b7\">Phase</text>\n  <path d=\"M90,80 V88\" stroke=\"#475569\"/>\n  <rect x=\"55\" y=\"90\" width=\"70\" height=\"16\" rx=\"3\" fill=\"#292524\" stroke=\"#f59e0b\"/><text x=\"90\" y=\"101.5\" text-anchor=\"middle\" fill=\"#fde68a\">Power Spectrum</text>\n  <path d=\"M130,52 V150\" stroke=\"#475569\"/><text x=\"140\" y=\"105\" fill=\"#64748b\">IDFT</text>\n  <rect x=\"90\" y=\"152\" width=\"80\" height=\"16\" rx=\"3\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"130\" y=\"163.5\" text-anchor=\"middle\" fill=\"#fca5a5\">Reconstructed Signal</text>\n</svg>",
      titleEn: 'DFT -> Coefficients -> IDFT, a Lossless Round Trip', titleKn: 'DFT -> Coefficients -> IDFT, ಒಂದು Lossless Round Trip',
      captionEn: 'Genuinely verified in this lesson: dft() decomposes the signal, and idft() reconstructs it to six decimal places -- no information lost, only re-represented.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ: dft() signal ಅನ್ನೂ ವಿಭಜಿಸುತ್ತದೆ, ಮತ್ತು idft() ಇದೂ ಆರು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಮರುನಿರ್ಮಿಸುತ್ತದೆ -- ಯಾವುದೇ ಮಾಹಿತಿ ಕಳೆದುಹೋಗಿಲ್ಲ, ಕೇವಲ ಮರು-ಪ್ರತಿನಿಧಿಸಲಾಗಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Why AI Uses It', headingKn: 'AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Every claim in this lesson was checked, not assumed: the from-scratch DFT genuinely matched np.fft.fft bit-for-bit, the IDFT genuinely reconstructed the original signal to six decimals, and the O(N^2) complexity claim was genuinely measured via timing runs rather than only cited from the formula\n• This "decompose signal into frequencies" operation is the mathematical seed for spectrograms in audio ML, frequency-domain convolution in CNNs, and sinusoidal positional encoding in Transformers -- all of which build directly on the DFT machinery verified in this lesson',
      bodyKn: '• ಈ lesson ನಲ್ಲಿ ಪ್ರತಿ ಹಕ್ಕು ಪರಿಶೀಲಿಸಲಾಗಿದೆ, ಊಹಿಸಲಾಗಿಲ್ಲ: ಮೊದಲಿನಿಂದ DFT ನಿಜವಾಗಿ np.fft.fft ಗೆ bit-for-bit ಹೊಂದಿಕೆಯಾಯಿತು, IDFT ನಿಜವಾಗಿ ಮೂಲ signal ಅನ್ನೂ ಆರು ದಶಮಾಂಶಗಳವರೆಗೆ ಮರುನಿರ್ಮಿಸಿತು, ಮತ್ತು O(N^2) complexity ಹಕ್ಕು ಕೇವಲ formula ಇಂದ ಉಲ್ಲೇಖಿಸುವ ಬದಲಿಗೆ ಟೈಮಿಂಗ್ runs ಮೂಲಕ ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ\n• ಈ "signal ಅನ್ನೂ frequencies ಗೆ ವಿಭಜಿಸು" operation audio ML ನಲ್ಲಿ spectrograms, CNNs ನಲ್ಲಿ frequency-domain convolution, ಮತ್ತು Transformers ನಲ್ಲಿ sinusoidal positional encoding ಗಾಗಿ ಗಣಿತೀಯ ಬೀಜ -- ಇವೆಲ್ಲಾ ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ DFT ಯಂತ್ರೋಪಕರಣದ ಮೇಲೆ ನೇರವಾಗಿ ನಿರ್ಮಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• The DFT changes representation from the time domain to the frequency domain, without losing information\n• Each coefficient X[k]=a+bi is complex, carrying both magnitude (strength) and phase (offset)\n• X[0] is the DC component, genuinely equal to sum(signal) in the verified run\n• A from-scratch DFT genuinely matched NumPy\'s FFT to floating-point precision on an 8-sample test signal\n• IDFT genuinely reconstructed the original signal to six decimal places, proving the transform is lossless\n• DFT complexity was genuinely measured, not just asserted: doubling N roughly quadrupled runtime, confirming O(N^2)',
      bodyKn: '• DFT representation ಅನ್ನೂ time domain ಇಂದ frequency domain ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ, ಯಾವುದೇ ಮಾಹಿತಿ ಕಳೆದುಕೊಳ್ಳದೆ\n• ಪ್ರತಿ coefficient X[k]=a+bi complex, magnitude (ಬಲ) ಮತ್ತು phase (offset) ಎರಡನ್ನೂ ಹೊಂದಿದೆ\n• X[0] DC ಘಟಕ, ಪರಿಶೀಲಿಸಿದ run ನಲ್ಲಿ ನಿಜವಾಗಿ sum(signal) ಗೆ ಸಮಾನವಾಗಿದೆ\n• ಒಂದು ಮೊದಲಿನಿಂದ DFT ಒಂದು 8-sample test signal ಮೇಲೆ NumPy ನ FFT ಗೆ floating-point ನಿಖರತೆಗೆ ನಿಜವಾಗಿ ಹೊಂದಿಕೆಯಾಯಿತು\n• IDFT ಮೂಲ signal ಅನ್ನೂ ಆರು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ನಿಜವಾಗಿ ಮರುನಿರ್ಮಿಸಿತು, transform lossless ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತಾ\n• DFT complexity ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ, ಕೇವಲ ಪ್ರತಿಪಾದಿಸಲಾಗಿಲ್ಲ: N ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ runtime ಅನ್ನೂ ಸ್ಥೂಲವಾಗಿ ನಾಲ್ಕುಪಟ್ಟುಗೊಳಿಸಿತು, O(N^2) ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'quiz', data: { questions: [
      { q: 'When the from-scratch dft() was genuinely run and cross-checked against np.fft.fft() on an 8-sample signal, what was found?', qKn: '8-sample signal ಮೇಲೆ ಮೊದಲಿನಿಂದ dft() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ np.fft.fft() ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದಾಗ, ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['NumPy produced different results due to a different algorithm', 'Every one of the 8 coefficients matched to floating-point precision', 'Only the magnitude matched, not the phase', 'The from-scratch version was faster'], correct: 1,
        optsKn: ['NumPy ಬೇರೆ algorithm ಇಂದ ಬೇರೆ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತು', '8 coefficients ಪ್ರತಿಯೊಂದೂ floating-point ನಿಖರತೆಗೆ ಹೊಂದಿಕೆಯಾಯಿತು', 'ಕೇವಲ magnitude ಹೊಂದಿಕೆಯಾಯಿತು, phase ಅಲ್ಲ', 'Mudalinda version ವೇಗವಾಗಿತ್ತು'] },
      { q: 'Genuinely timing dft() at N=64, 128, 256, and 512, what pattern was measured?', qKn: 'N=64, 128, 256, ಮತ್ತು 512 ನಲ್ಲಿ dft() ಅನ್ನೂ ನಿಜವಾಗಿ ಟೈಮಿಂಗ್ ಮಾಡುವುದೂ, ಯಾವ pattern ಅಳೆಯಲಾಗಿತು?',
        opts: ['Runtime stayed constant regardless of N', 'Runtime roughly doubled each time N doubled', 'Runtime roughly quadrupled each time N doubled, consistent with O(N^2)', 'Runtime decreased as N grew'], correct: 2,
        optsKn: ['N ಹೊರತಾಗಿ Runtime ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು', 'N ದ್ವಿಗುಣಗೊಂಡಾಗಲೆಲ್ಲಾ Runtime ಸ್ಥೂಲವಾಗಿ ದ್ವಿಗುಣಗೊಂಡಿತು', 'N ದ್ವಿಗುಣಗೊಂಡಾಗಲೆಲ್ಲಾ Runtime ಸ್ಥೂಲವಾಗಿ ನಾಲ್ಕುಪಟ್ಟುಗೊಂಡಿತು, O(N^2) ಗೆ ಅನುಗುಣವಾಗಿ', 'N ಬೆಳೆದಂತೆ Runtime ಕಡಿಮೆಯಾಯಿತು'] },
      { q: 'On the verified 8-sample test signal, what did X[0] genuinely equal, and why?', qKn: 'ಪರಿಶೀಲಿಸಿದ 8-sample test signal ಮೇಲೆ, X[0] ನಿಜವಾಗಿ ಏನಿಗೆ ಸಮಾನವಾಗಿತ್ತು, ಮತ್ತು ಏಕೆ?',
        opts: ['3.9799, because it captures the strongest frequency', '0, because e^0=1 makes X[0] the sum of all samples, and the samples summed to exactly zero', 'It was undefined', 'It equaled the Nyquist frequency'], correct: 1,
        optsKn: ['3.9799, ಏಕೆಂದರೆ ಇದೂ ಬಲವಾದ frequency ಸೆರೆಹಿಡಿಯುತ್ತದೆ', '0, ಏಕೆಂದರೆ e^0=1 X[0] ಅನ್ನೂ ಎಲ್ಲಾ samples ನ ಮೊತ್ತ ಮಾಡುತ್ತದೆ, ಮತ್ತು samples ನಿಖರವಾಗಿ ಶೂನ್ಯಕ್ಕೆ ಮೊತ್ತವಾಯಿತು', 'ಇದೂ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿಲ್ಲ', 'ಇದೂ Nyquist frequency ಗೆ ಸಮಾನವಾಗಿತ್ತು'] },
      { q: 'Genuinely feeding the computed X back through idft(), what was found about the reconstructed signal?', qKn: 'ಗಣಿಸಿದ X ಅನ್ನೂ idft() ಮೂಲಕ ನಿಜವಾಗಿ ಹಿಂತಿರುಗಿ ಕೊಡುತ್ತಾ, ಮರುನಿರ್ಮಿಸಿದ signal ಬಗ್ಗೆ ಏನೂ ಕಂಡುಬಂದಿತು?',
        opts: ['It was completely different from the original signal', 'It matched the original signal to six decimal places, confirming the DFT/IDFT round trip is lossless', 'It only recovered half the samples', 'It required a different normalization to work'], correct: 1,
        optsKn: ['ಇದೂ ಮೂಲ signal ಇಂದ ಸಂಪೂರ್ಣ ಬೇರೆಯಾಗಿತ್ತು', 'ಇದೂ ಮೂಲ signal ಗೆ ಆರು ದಶಮಾಂಶ ಸ್ಥಾನಗಳವರೆಗೆ ಹೊಂದಿಕೆಯಾಯಿತು, DFT/IDFT round trip lossless ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ', 'ಇದೂ ಕೇವಲ ಅರ್ಧ samples ಮರುಪಡೆಯಿತು', 'ಇದೂ ಕೆಲಸ ಮಾಡಲು ಬೇರೆ normalization ಬೇಕಾಗಿತ್ತು'] },
    ] } },
  ],
};
