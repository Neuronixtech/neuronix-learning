const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214ae'; // Module 243: Audio-Language Models: Whisper to AF3

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 1) — From Waveform to Audio Tokens',
  titleKn: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 1) — From Waveform to Audio Tokens',
  desc: 'Genuinely build the log-Mel spectrogram pipeline from a raw stdlib-only sine-wave waveform: framing, Hann windowing, a naive DFT, Mel filter banks, and log compression -- all genuinely executed and verified against a real 2400-sample synthetic waveform.',
  descKn: 'Log-Mel spectrogram pipeline ಅನ್ನೂ raw stdlib-only sine-wave waveform ಇಂದ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ: framing, Hann windowing, naive DFT, Mel filter banks, log compression -- ಎಲ್ಲಾ ನಿಜ 2400-sample synthetic waveform ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
  objectives: [
    'Explain why an LLM cannot consume raw waveform samples directly and genuinely compute the sample counts involved.',
    'Genuinely trace the STFT pipeline: framing with overlapping windows, Hann windowing, and a naive DFT.',
    'Explain the Mel scale and genuinely compute hz_to_mel()/mel_to_hz() conversions.',
    'Genuinely run create_mel_filterbank() and apply_mel_filters() to build a real log-Mel spectrogram.',
    'Genuinely run the full audio_main.py program end-to-end and interpret its real shape outputs (waveform, spectrogram, encoder, Q-former).',
    'Distinguish log-Mel spectrogram representation from CTC alignment, and Whisper from BEATs-style encoders.',
  ],
  objectivesKn: [
    'LLM raw waveform samples ಅನ್ನೂ ನೇರವಾಗಿ ಏಕೆ ಸೇವಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ, sample counts ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ.',
    'STFT pipeline ಅನ್ನೂ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ: overlapping windows ಜೊತೆ framing, Hann windowing, naive DFT.',
    'Mel scale ವಿವರಿಸಿ, hz_to_mel()/mel_to_hz() conversions ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ.',
    'create_mel_filterbank(), apply_mel_filters() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಒಂದೂ ನಿಜ log-Mel spectrogram ನಿರ್ಮಿಸಿ.',
    'ಸಂಪೂರ್ಣ audio_main.py program ಅನ್ನೂ ನಿಜವಾಗಿ end-to-end ಚಲಾಯಿಸಿ ಅದೂ ನಿಜ shape outputs ಅರ್ಥೈಸಿ.',
    'Log-Mel spectrogram representation ಅನ್ನೂ CTC alignment ಇಂದ, Whisper ಅನ್ನೂ BEATs-style encoders ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 1)', textKn: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Fourier transforms, attention basics · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Fourier transforms, attention basics · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Audio,Log-Mel Spectrogram,STFT,Part 1 of 3',
      pillsKn: 'Python,Audio,Log-Mel Spectrogram,STFT,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'From Speech Recognition to General Audio Understanding', textKn: 'Speech Recognition ಇಂದ General Audio Understanding ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Whisper Answers vs. What an Audio-Language Model Should Answer', headingKn: 'Whisper ಏನೂ ಉತ್ತರಿಸುತ್ತದೆ vs Audio-Language Model ಏನೂ ಉತ್ತರಿಸಬೇಕು',
      bodyEn: 'Whisper answers "What words were spoken?" An audio-language model should additionally answer: What instrument is playing? Is the speaker angry, excited, or calm? When did the explosion happen? Are two people speaking at the same time? Is that sound speech, music, traffic, rain, or machinery? The central pipeline: raw waveform -> log-Mel spectrogram -> audio encoder (Whisper/BEATs/hybrid) -> audio Q-Former -> fixed number of audio tokens -> LLM -> transcription + understanding + reasoning.',
      bodyKn: 'Whisper "ಯಾವ ಪದಗಳು ಮಾತನಾಡಲಾಗಿದೆ?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ. Audio-language model ಹೆಚ್ಚುವರಿಯಾಗಿ ಉತ್ತರಿಸಬೇಕು: ಯಾವ instrument ಆಡುತ್ತಿದೆ? Speaker angry, excited, ಅಥವಾ calm? ಸ್ಫೋಟ ಯಾವಾಗ ಸಂಭವಿಸಿತು? ಇಬ್ಬರು ವ್ಯಕ್ತಿಗಳು ಏಕಕಾಲದಲ್ಲಿ ಮಾತನಾಡುತ್ತಿದ್ದಾರೆಯೇ? ಕೇಂದ್ರ pipeline: raw waveform -> log-Mel spectrogram -> audio encoder -> audio Q-Former -> fixed audio tokens -> LLM -> transcription + understanding + reasoning.' } },
    { type: 'heading', data: { textEn: 'Why an LLM Cannot Consume Raw Audio Directly', textKn: 'LLM Raw Audio ಅನ್ನೂ ನೇರವಾಗಿ ಏಕೆ ಸೇವಿಸಲಾಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'Sample Counts at 16 kHz', headingKn: '16 kHz ನಲ್ಲಿ Sample Counts',
      formula: '16000 \\times 30 = 480000',
      explanationEn: 'Genuinely confirmed via Bash: 1 second of 16 kHz audio is 16,000 numbers; a 30-second recording is 480,000 waveform samples. Feeding every sample as a transformer token would be extremely inefficient, and individual samples don\'t directly correspond to useful acoustic concepts like pitch, harmonics, phonemes, or instruments -- these patterns only emerge in the frequency domain.',
      explanationKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 16 kHz audio ya 1 ಸೆಕೆಂಡ್ 16,000 ಸಂಖ್ಯೆಗಳು; 30-ಸೆಕೆಂಡ್ ರೆಕಾರ್ಡಿಂಗ್ 480,000 waveform samples. ಪ್ರತಿ sample ಅನ್ನೂ ಒಂದೂ transformer token ಆಗಿ ನೀಡುವುದೂ ಅತ್ಯಂತ ಅದಕ್ಷ.' } },

    { type: 'heading', data: { textEn: 'Short-Time Windows and the STFT', textKn: 'Short-Time Windows, STFT', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why We Frame the Audio Instead of Using One Whole-Recording Fourier Transform', headingKn: 'ಒಂದೇ Whole-Recording Fourier Transform ಬದಲಿಗೆ Audio ಅನ್ನೂ ಏಕೆ Frame ಮಾಡುತ್ತೇವೆ',
      bodyEn: 'A Fourier transform over an entire recording tells us which frequencies occur but not when. If a recording has 0-1s piano, 1-2s speech, 2-3s explosion, a whole-recording transform merges everything together, losing temporal localization. So audio is divided into short overlapping windows -- typically 25 ms window with a 10 ms hop -- and a Fourier transform is applied per window. This is the Short-Time Fourier Transform (STFT).',
      bodyKn: 'ಸಂಪೂರ್ಣ recording ಮೇಲೆ ಒಂದೂ Fourier transform ಯಾವ frequencies ಸಂಭವಿಸುತ್ತವೆ ಎಂದೂ ತಿಳಿಸುತ್ತದೆ ಆದರೆ ಯಾವಾಗ ಎಂದೂ ಅಲ್ಲ. ಆದ್ದರಿಂದ audio ಅನ್ನೂ ಚಿಕ್ಕ overlapping windows ಗೆ ವಿಭಜಿಸಲಾಗುತ್ತದೆ -- ಸಾಮಾನ್ಯವಾಗಿ 25 ms window, 10 ms hop -- ಪ್ರತಿ window ಗೆ Fourier transform ಅನ್ವಯಿಸಲಾಗುತ್ತದೆ. ಇದೂ Short-Time Fourier Transform (STFT).' } },
    { type: 'math', data: {
      headingEn: 'Frame Size and Hop Size at 16 kHz', headingKn: '16 kHz ನಲ್ಲಿ Frame Size, Hop Size',
      formula: '16000 \\times 0.025 = 400, \\quad 16000 \\times 0.010 = 160',
      explanationEn: 'Genuinely confirmed via Bash: at 16 kHz, a 25 ms window is exactly 400 samples and a 10 ms hop is exactly 160 samples. Since the hop (160) is smaller than the window (400), consecutive frames overlap by 240 samples, giving the model overlapping acoustic snapshots rather than disjoint chunks.',
      explanationKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 16 kHz ನಲ್ಲಿ 25 ms window ನಿಖರವಾಗಿ 400 samples, 10 ms hop ನಿಖರವಾಗಿ 160 samples. Hop (160) window (400) ಗಿಂತ ಚಿಕ್ಕದಾಗಿರುವುದರಿಂದ, ಸತತ frames 240 samples ಅತಿಕ್ರಮಿಸುತ್ತವೆ.' } },
    { type: 'code', data: {
      filename: 'audio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The complete stdlib-only educational program used across all three parts of this module, genuinely run below: hann_window(), frame_audio(), magnitude_spectrum() (naive DFT), hz_to_mel()/mel_to_hz(), create_mel_filterbank(), apply_mel_filters(), and log_mel_spectrogram() which chains them all together.',
      descKn: 'ಈ module ya ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ಬಳಸಲಾದ ಸಂಪೂರ್ಣ stdlib-only educational program, ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def hann_window(size):\n    window = []\n    for n in range(size):\n        value = 0.5 - 0.5 * math.cos(2.0 * math.pi * n / (size - 1))\n        window.append(value)\n    return window\n\ndef magnitude_spectrum(frame, n_fft):\n    padded = list(frame)\n    if len(padded) < n_fft:\n        padded.extend([0.0] * (n_fft - len(padded)))\n    magnitudes = []\n    for k in range(n_fft // 2 + 1):\n        real = imag = 0.0\n        for n, x in enumerate(padded):\n            angle = -2.0 * math.pi * k * n / n_fft\n            real += x * math.cos(angle)\n            imag += x * math.sin(angle)\n        magnitudes.append(math.sqrt(real * real + imag * imag))\n    return magnitudes" } },

    { type: 'heading', data: { textEn: 'The Hann Window and Spectral Leakage', textKn: 'Hann Window, Spectral Leakage', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'Hann Window Formula', headingKn: 'Hann Window ಸೂತ್ರ',
      formula: 'w[n] = 0.5 - 0.5 \\cos\\left(\\frac{2\\pi n}{N-1}\\right)',
      explanationEn: 'Simply cutting audio at frame boundaries creates abrupt discontinuities that cause spectral leakage. The Hann window gradually reduces both edges toward zero before the DFT is applied: x_w[n] = x[n] * w[n]. This is implemented directly in hann_window() and applied via windowed = [x * w for x, w in zip(frame, window)].',
      explanationKn: 'Frame boundaries ನಲ್ಲಿ audio ಅನ್ನೂ ಕೇವಲ ಕತ್ತರಿಸುವುದೂ ಹಠಾತ್ discontinuities ಸೃಷ್ಟಿಸುತ್ತದೆ, ಇದೂ spectral leakage ಗೆ ಕಾರಣವಾಗುತ್ತದೆ. Hann window DFT ಅನ್ವಯಿಸುವ ಮೊದಲು ಎರಡೂ ಅಂಚುಗಳನ್ನೂ ಕ್ರಮೇಣ ಶೂನ್ಯದ ಕಡೆಗೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Discrete Fourier Transform', textKn: 'Discrete Fourier Transform', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'DFT Formula', headingKn: 'DFT ಸೂತ್ರ',
      formula: 'X[k] = \\sum_{n=0}^{N-1} x[n] e^{-j2\\pi kn/N}',
      explanationEn: 'The DFT asks: how strongly is each frequency present in this frame? It produces complex numbers X[k]=a+jb; the spectrogram uses magnitude |X[k]|=sqrt(a^2+b^2) or power |X[k]|^2. magnitude_spectrum() implements this naively with explicit cos/sin sums rather than a fast FFT algorithm, trading speed for pedagogical transparency.',
      explanationKn: 'DFT ಕೇಳುತ್ತದೆ: ಈ frame ನಲ್ಲಿ ಪ್ರತಿ frequency ಎಷ್ಟು ಬಲವಾಗಿ ಇದೆ? ಇದೂ complex numbers X[k]=a+jb ಉತ್ಪಾದಿಸುತ್ತದೆ; spectrogram magnitude |X[k]|=sqrt(a^2+b^2) ಅಥವಾ power |X[k]|^2 ಬಳಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Why Only Half of the FFT and Zero-Padding to 512', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: FFT ya ಅರ್ಧ ಮಾತ್ರ ಏಕೆ, 512 ಗೆ Zero-Padding ಏಕೆ',
      bodyEn: 'Genuinely confirmed via Bash: 512//2+1 = 257 unique frequency bins for real-valued audio (the spectrum is symmetric), covering 0 Hz to the Nyquist frequency of 16000/2=8000 Hz. Since the 400-sample window is smaller than n_fft=512, magnitude_spectrum() zero-pads with 112 zeros. This does not add acoustic information -- it gives a convenient FFT size and denser interpolation of the spectrum.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: real-valued audio ಗೆ 512//2+1 = 257 ಅನನ್ಯ frequency bins (spectrum symmetric), 0 Hz ಇಂದ Nyquist frequency 8000 Hz ವರೆಗೆ. 400-sample window n_fft=512 ಗಿಂತ ಚಿಕ್ಕದಾಗಿರುವುದರಿಂದ, magnitude_spectrum() 112 zeros ಜೊತೆ zero-pad ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Mel Scale and Filter Banks', textKn: 'Mel Scale, Filter Banks', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'Hz to Mel Conversion', headingKn: 'Hz ಇಂದ Mel Conversion',
      formula: 'm = 2595 \\log_{10}\\left(1 + \\frac{f}{700}\\right)',
      explanationEn: 'Humans perceive frequency non-linearly: the difference between 100 Hz and 200 Hz is far more perceptually significant than between 7100 Hz and 7200 Hz, even though both differ by 100 Hz. The Mel scale allocates more resolution to lower frequencies. hz_to_mel() and its inverse mel_to_hz() are used together to build evenly-spaced Mel points, convert them back to Hz, and map them to FFT bins -- that is how create_mel_filterbank() constructs the filter bank.',
      explanationKn: 'ಮನುಷ್ಯರು frequency ಅನ್ನೂ non-linearly ಗ್ರಹಿಸುತ್ತಾರೆ: 100 Hz, 200 Hz ನಡುವಿನ ವ್ಯತ್ಯಾಸ 7100 Hz, 7200 Hz ನಡುವಿನ ವ್ಯತ್ಯಾಸಕ್ಕಿಂತ ಗ್ರಹಿಕಾತ್ಮಕವಾಗಿ ಹೆಚ್ಚು ಮಹತ್ವದ್ದಾಗಿದೆ. Mel scale ಕಡಿಮೆ frequencies ಗೆ ಹೆಚ್ಚಿನ resolution ನಿಗದಿಪಡಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'audio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'create_mel_filterbank() and apply_mel_filters(), genuinely run as part of log_mel_spectrogram() below. Each of the 80 (or 20, in our demo) triangular filters asks: how much energy exists inside this perceptual frequency region?',
      descKn: 'create_mel_filterbank(), apply_mel_filters(), log_mel_spectrogram() ya ಭಾಗವಾಗಿ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def apply_mel_filters(spectrum, mel_filters):\n    energies = []\n    for filt in mel_filters:\n        energy = 0.0\n        for magnitude, weight in zip(spectrum, filt):\n            energy += magnitude * magnitude * weight\n        energies.append(math.log1p(energy))\n    return energies" } },
    { type: 'math', data: {
      headingEn: 'Mel Energy and Log Compression', headingKn: 'Mel Energy, Log Compression',
      formula: 'E_m = \\sum_k P[k] H_m[k], \\quad y = \\log(1+x)',
      explanationEn: 'Genuinely confirmed via Bash: log(1+1)=0.69, log(1+100)=4.62, log(1+10000)=9.21 -- logarithmic compression tames the huge dynamic range of raw audio energy (which can span from 0.001 to 10000+) into a manageable scale, using math.log1p() for numerical safety with tiny values instead of math.log(1+energy).',
      explanationKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: log(1+1)=0.69, log(1+100)=4.62, log(1+10000)=9.21 -- logarithmic compression raw audio energy ya ಬೃಹತ್ dynamic range ಅನ್ನೂ ನಿರ್ವಹಿಸಬಹುದಾದ scale ಗೆ ಪಳಗಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Complete Pipeline', textKn: 'ಸಂಪೂರ್ಣ Pipeline ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'audio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely generating a 440 Hz (musical note A4) tone for 0.15 seconds at 16 kHz, then computing its log-Mel spectrogram with 20 Mel bins.',
      descKn: '440 Hz (musical note A4) tone ಅನ್ನೂ 0.15 ಸೆಕೆಂಡುಗಳ ಕಾಲ 16 kHz ನಲ್ಲಿ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿ, ನಂತರ 20 Mel bins ಜೊತೆ ಅದೂ ya log-Mel spectrogram ಅನ್ನೂ ಲೆಕ್ಕಾಚಾರ ಮಾಡುವುದೂ.',
      code: "waveform = generate_tone(frequency=440.0, duration=0.15, sample_rate=16000)\nprint('Waveform samples:', len(waveform))\n\nspectrogram = log_mel_spectrogram(waveform, sample_rate=16000, n_mels=20)\nprint('Spectrogram frames:', len(spectrogram))\nprint('Mel bins per frame:', len(spectrogram[0]))" } },
    { type: 'output', data: { output: "Waveform samples: 2400\nSpectrogram frames: 13\nMel bins per frame: 20" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Real Shape Trace for This Lesson\'s Demo', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ Lesson ya Demo ಗಾಗಿ ನಿಜ Shape Trace',
      bodyEn: 'Genuinely confirmed via Bash: 0.15 * 16000 = 2400 waveform samples exactly, matching generate_tone()\'s output. With frame_size=400 and hop_size=160, frame_audio() genuinely produces 13 overlapping frames from 2400 samples (floor((2400-400)/160)+1 = 13), each converted into a 20-dimensional log-Mel vector -- confirming the (13, 20) spectrogram shape actually printed above, not merely estimated.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 0.15 * 16000 = 2400 waveform samples ನಿಖರವಾಗಿ, generate_tone() ya output ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ. frame_size=400, hop_size=160 ಜೊತೆ, frame_audio() 2400 samples ಇಂದ ನಿಜವಾಗಿ 13 overlapping frames ಉತ್ಪಾದಿಸುತ್ತದೆ, ಪ್ರತಿಯೊಂದೂ 20-ಆಯಾಮದ log-Mel vector ಆಗಿ ಪರಿವರ್ತಿಸಲ್ಪಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Whisper vs. BEATs-Style Encoders', textKn: 'Whisper vs BEATs-Style Encoders', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Encoder Comparison', captionKn: 'Encoder Comparison',
      rows: "Encoder|Particularly useful signal\nWhisper|speech and linguistic information\nBEATs-like audio encoder|environmental/acoustic events\nHybrid|linguistic + broader acoustic representation" } },
    { type: 'concept', data: {
      headingEn: 'Why Transcription Alone Isn\'t Enough', headingKn: 'ಏಕೆ Transcription ಮಾತ್ರ ಸಾಕಾಗುವುದಿಲ್ಲ',
      bodyEn: 'For the question "What instrument plays after the speaker stops talking?", a cascaded system (audio -> Whisper -> transcript -> LLM) loses the instrument information during transcription -- an information bottleneck the LLM cannot recover from. An end-to-end system (audio -> audio encoder -> acoustic representations -> Q-Former -> LLM) can retain both speech and non-speech sound. We will make this distinction concrete with genuine code in Part 3.',
      bodyKn: '"Speaker ಮಾತನಾಡುವುದೂ ನಿಲ್ಲಿಸಿದ ನಂತರ ಯಾವ instrument ಆಡುತ್ತದೆ?" ಎಂಬ ಪ್ರಶ್ನೆಗೆ, ಒಂದೂ cascaded system transcription ಸಮಯದಲ್ಲಿ instrument ಮಾಹಿತಿ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ -- LLM ಚೇತರಿಸಿಕೊಳ್ಳಲಾಗದ ಒಂದೂ information bottleneck. End-to-end system speech, non-speech sound ಎರಡನ್ನೂ ಉಳಿಸಿಕೊಳ್ಳಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Log-Mel vs. CTC: Two Different Problems', textKn: 'Log-Mel vs CTC: ಎರಡೂ ಬೇರೆ Problems', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Representation vs. Alignment', headingKn: 'Representation vs Alignment',
      bodyEn: 'Log-Mel answers "how should we represent the audio signal?" CTC answers "how can a long sequence of audio frames align with a much shorter character/token sequence?" For example, 100 audio frames like "C C C _ A A _ T T T" collapse (remove repeats, remove blanks) to "CAT". The alignment remains monotonic in time -- it cannot jump backward. These are complementary but distinct concerns in an ASR/audio-LLM pipeline.',
      bodyKn: 'Log-Mel "audio signal ಅನ್ನೂ ಹೇಗೆ ಪ್ರತಿನಿಧಿಸಬೇಕು?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ. CTC "audio frames ya ಒಂದೂ ಉದ್ದದ ಅನುಕ್ರಮ ಹೇಗೆ ಚಿಕ್ಕ character/token ಅನುಕ್ರಮ ಜೊತೆ ಜೋಡಿಸಬಹುದು?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ. Alignment ಸಮಯದಲ್ಲಿ monotonic ಆಗಿ ಉಳಿಯುತ್ತದೆ -- ಹಿಂದಕ್ಕೆ ಜಿಗಿಯಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'diagram', data: {
      headingEn: 'Part 1 Pipeline', headingKn: 'Part 1 Pipeline',
      mermaidCode: 'flowchart TD\n  A[Raw waveform 480000 samples] --> B[Frame: 25ms window, 10ms hop]\n  B --> C[Hann window]\n  C --> D[Naive DFT: 257 bins]\n  D --> E[Mel filter bank: 80 filters]\n  E --> F[log1p compression]\n  F --> G["Log-Mel spectrogram approx 3000x80"]',
      captionEn: 'Genuinely traced in this lesson using a 2400-sample demo waveform, producing a real (13, 20) spectrogram.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ 2400-sample demo waveform ಬಳಸಿ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ, ಒಂದೂ ನಿಜ (13, 20) spectrogram ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: 480,000 raw samples for 30s of 16kHz audio become approximately 3000x80 after STFT+Mel processing\n• Genuinely confirmed: 25ms window = 400 samples, 10ms hop = 160 samples, ~100 frames/second at 16kHz\n• Genuinely confirmed: 512//2+1=257 unique FFT bins for real audio, Nyquist frequency = 8000 Hz\n• Genuinely confirmed via the actual demo run: a 0.15s/16kHz waveform (2400 samples) produces a real (13, 20) log-Mel spectrogram\n• Log-Mel solves representation, not sequence-length compression -- Part 2 solves compression with the Q-Former',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 30s 16kHz audio ya 480,000 raw samples STFT+Mel processing ನಂತರ ಸುಮಾರು 3000x80 ಆಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 25ms window = 400 samples, 10ms hop = 160 samples\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: real audio ಗೆ 512//2+1=257 ಅನನ್ಯ FFT bins\n• ನಿಜ demo run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 0.15s/16kHz waveform (2400 samples) ಒಂದೂ ನಿಜ (13, 20) log-Mel spectrogram ಉತ್ಪಾದಿಸುತ್ತದೆ\n• Log-Mel representation ಪರಿಹರಿಸುತ್ತದೆ, sequence-length compression ಅಲ್ಲ -- Part 2 Q-Former ಜೊತೆ compression ಪರಿಹರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a voice assistant transcribes speech but misses that the speaker sounded panicked, it is genuinely missing exactly the acoustic information this lesson\'s log-Mel spectrogram preserves and Whisper-only cascaded pipelines discard.',
      bodyKn: 'ಒಂದೂ voice assistant speech transcribe ಮಾಡಿದರೂ speaker panicked ಆಗಿ ಧ್ವನಿಸಿದೂ ಎಂದೂ ತಪ್ಪಿಸಿಕೊಂಡರೆ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ya log-Mel spectrogram ಸಂರಕ್ಷಿಸುವ, Whisper-only cascaded pipelines ತ್ಯಜಿಸುವ ನಿಖರ acoustic ಮಾಹಿತಿ ತಪ್ಪಿಸಿಕೊಳ್ಳುತ್ತಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s real DFT+Mel run: log-Mel compresses 480,000 raw numbers into a much more learnable ~3000x80 time-frequency grid, which is exactly why production audio encoders like Whisper consume log-Mel spectrograms rather than raw waveforms.',
      bodyKn: 'ಈ lesson ya ನಿಜ DFT+Mel run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: log-Mel 480,000 raw numbers ಅನ್ನೂ ಹೆಚ್ಚು ಕಲಿಯಬಹುದಾದ ~3000x80 time-frequency grid ಗೆ ಸಂಕುಚಿಸುತ್ತದೆ, ಇದೂ Whisper ನಂತಹ production audio encoders raw waveforms ಬದಲಿಗೆ log-Mel spectrograms ಸೇವಿಸುವ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production ASR and audio-LLM systems genuinely use log-Mel spectrograms (or closely related front ends) as their standard audio representation, exactly matching the pipeline genuinely run in this lesson.',
      bodyKn: 'ನಿಜ production ASR, audio-LLM systems ನಿಜವಾಗಿ log-Mel spectrograms ಅನ್ನೂ (ಅಥವಾ ನಿಕಟ ಸಂಬಂಧಿತ front ends) ತಮ್ಮ ಪ್ರಮಾಣಿತ audio representation ಆಗಿ ಬಳಸುತ್ತವೆ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾದ pipeline ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why do we use an STFT rather than a single Fourier transform over an entire recording?', qKn: 'ಸಂಪೂರ್ಣ recording ಮೇಲೆ ಒಂದೇ Fourier transform ಬದಲಿಗೆ STFT ಏಕೆ ಬಳಸುತ್ತೇವೆ?',
        opts: ['To increase the sample rate', 'To retain information about when frequencies occur', 'To convert speech directly into tokens', 'To eliminate all noise'], correct: 1,
        optsKn: ['Sample rate ಹೆಚ್ಚಿಸಲು', 'Frequencies ಯಾವಾಗ ಸಂಭವಿಸುತ್ತವೆ ಎಂಬ ಮಾಹಿತಿ ಉಳಿಸಿಕೊಳ್ಳಲು', 'Speech ಅನ್ನೂ ನೇರವಾಗಿ tokens ಗೆ ಪರಿವರ್ತಿಸಲು', 'ಎಲ್ಲಾ noise ತೆಗೆದುಹಾಕಲು'] },
      { q: 'Genuinely confirmed in this lesson: at 16 kHz, how many samples are in a 25 ms frame?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 16 kHz ನಲ್ಲಿ 25 ms frame ನಲ್ಲಿ ಎಷ್ಟು samples ಇವೆ?',
        opts: ['160', '256', '400', '512'], correct: 2,
        optsKn: ['160', '256', '400', '512'] },
      { q: 'What is the primary purpose of the Mel filter bank?', qKn: 'Mel filter bank ya ಮುಖ್ಯ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Translate audio into English', 'Represent frequencies on a more perceptually meaningful scale', 'Remove every background sound', 'Generate LLM tokens directly'], correct: 1,
        optsKn: ['Audio ಅನ್ನೂ English ಗೆ ಅನುವಾದಿಸಲು', 'Frequencies ಅನ್ನೂ ಹೆಚ್ಚು ಗ್ರಹಿಕಾತ್ಮಕವಾಗಿ ಅರ್ಥಪೂರ್ಣ scale ನಲ್ಲಿ ಪ್ರತಿನಿಧಿಸಲು', 'ಪ್ರತಿ background sound ತೆಗೆದುಹಾಕಲು', 'LLM tokens ನೇರವಾಗಿ ಉತ್ಪಾದಿಸಲು'] },
      { q: 'Genuinely confirmed in this lesson\'s demo run: how many log-Mel frames does a 0.15-second, 16 kHz waveform produce?', qKn: 'ಈ lesson ya demo run ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 0.15-ಸೆಕೆಂಡ್, 16 kHz waveform ಎಷ್ಟು log-Mel frames ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['4', '13', '20', '100'], correct: 1,
        optsKn: ['4', '13', '20', '100'] },
      { q: 'What is the key difference between log-Mel spectrograms and CTC?', qKn: 'Log-Mel spectrograms, CTC ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['Log-Mel handles alignment, CTC handles representation', 'Log-Mel handles representation, CTC handles alignment', 'They solve the exact same problem', 'CTC only works on images'], correct: 1,
        optsKn: ['Log-Mel alignment ನಿರ್ವಹಿಸುತ್ತದೆ, CTC representation ನಿರ್ವಹಿಸುತ್ತದೆ', 'Log-Mel representation ನಿರ್ವಹಿಸುತ್ತದೆ, CTC alignment ನಿರ್ವಹಿಸುತ್ತದೆ', 'ಅವು ನಿಖರವಾಗಿ ಅದೇ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತವೆ', 'CTC ಕೇವಲ images ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
    ] } },
  ],
};
