const phaseId = '6a369d5666020ed05b321334'; // Phase 9

const m124 = '6a369d5666020ed05b321337'; // Module 124: Audio Fundamentals
const m125 = '6a369d5666020ed05b32133a'; // Module 125: Spectrograms, Mel Scale

const l124_1 = '6a6ce701702dce90a3cce610'; // Waveforms, Sampling, Bit Depth & Fourier Transform
const l124_2 = '6a6ce98fb263412657d1fef0'; // STFT, Windowing, Aliasing, Mel Scale
const l125_1 = '6a6cead7c1c7361220964f55'; // Spectrograms, STFT & Audio Feature Extraction
const l125_2 = '6a6cebff3bc2fd36bbcb0ab9'; // Mel Scale, Mel Filterbank, Log-Mel Spectrogram & MFCC

module.exports = [
  // ── Module 124, Lesson 1: Waveforms, Sampling, Bit Depth & Fourier Transform ──
  { phaseId, moduleId: m124, lessonId: l124_1, order: 1, difficulty: 'beginner',
    title: 'Generating and Inspecting Sine Waves',
    problem: "Use the lesson's sine() function to generate three tones: 220Hz, 440Hz, and 880Hz, each 0.5 seconds at 16kHz.\n1. Print the length of each generated array. Do all three match sr*seconds regardless of frequency?\n2. Print the first 5 samples of each. Which one oscillates fastest, and how can you tell just from the raw sample values?\n3. Compute the RMS (root-mean-square) energy of each: sqrt(mean(x^2)). Do they differ, and should they for a fixed amplitude?\n4. Change amp from 0.5 to 1.0 for the 440Hz tone. What happens to the RMS?" },
  { phaseId, moduleId: m124, lessonId: l124_1, order: 2, difficulty: 'beginner',
    title: 'Saving and Reading Back a WAV File',
    problem: "Using save_wav.py's approach, save a 1-second 440Hz sine as sine.wav (16-bit PCM, 16kHz, mono).\n1. Read it back with soundfile.read() as shown in read_soundfile.py. Does waveform.shape match the number of samples you generated?\n2. Convert 5 known float samples to int16 via int(sample*32767) by hand, then compare to what soundfile reports after the round trip. Are they identical, off by rounding, or off by more?\n3. What is the maximum representable value error you'd expect from this int16 quantization, in terms of amplitude?" },
  { phaseId, moduleId: m124, lessonId: l124_1, order: 3, difficulty: 'intermediate',
    title: 'DFT From Scratch vs. FFT',
    problem: "Take the lesson's dft() function and a short signal: sine(440, 8000, 0.032) (256 samples).\n1. Run dft() and time it with the standard library's time module.\n2. Run np.fft.rfft() on the same signal and time it.\n3. Compare the magnitude of both outputs at the bin closest to 440Hz -- do they agree (within floating-point tolerance)?\n4. Double the signal length to 512 samples and re-time both. How does the DFT's runtime scale compared to the FFT's? What does this tell you about why FFT exists?" },
  { phaseId, moduleId: m124, lessonId: l124_1, order: 4, difficulty: 'intermediate',
    title: 'Peak Frequency Detection',
    problem: "Using fft_and_peak.py's approach: for each of 100Hz, 440Hz, 1000Hz, 4000Hz, 7999Hz, generate a 1-second tone at sr=16000, run np.fft.rfft, and compute the detected peak frequency (peak_bin * sr / len(signal)).\n1. Report the detected frequency for each -- how close is it to the true frequency?\n2. What is the frequency resolution (Hz per bin) at this sample rate and signal length? Does your detection error stay within one bin width?\n3. Try a non-integer frequency like 440.3Hz. What peak do you detect, and why can't the discrete FFT represent it exactly?" },
  { phaseId, moduleId: m124, lessonId: l124_1, order: 5, difficulty: 'advanced',
    title: 'The Nyquist Limit in Practice',
    problem: "The lesson covers the Nyquist-Shannon theorem: a signal must be sampled at more than 2x its highest frequency to be represented without ambiguity.\n1. Generate sine(7000, 16000, 1) (7kHz tone at 16kHz sample rate -- well under Nyquist of 8kHz). Detect its peak frequency via FFT. Is it correct?\n2. Now generate sine(9000, 16000, 1) -- a 9kHz tone, which exceeds the 8kHz Nyquist frequency for a 16kHz sample rate. What peak frequency does the FFT actually report? (Hint: this is aliasing, covered fully in the next lesson -- predict the aliased frequency as sr - true_freq and check your prediction.)\n3. Explain in your own words why generating audio above sr/2 doesn't raise an error but silently produces the wrong frequency instead." },

  // ── Module 124, Lesson 2: STFT, Windowing, Aliasing, Mel Scale ──
  { phaseId, moduleId: m124, lessonId: l124_2, order: 1, difficulty: 'beginner',
    title: 'Building and Inspecting a Hann Window',
    problem: "Use hann_window(N) to generate windows of size 10, 50, and 400.\n1. Print the size-10 window. Confirm the first and last values are both 0 (or very close to it).\n2. What is the value at the exact center of each window? Should it be close to 1.0?\n3. Plot (or print as a list of rounded values) the size-50 window and describe its shape in one sentence." },
  { phaseId, moduleId: m124, lessonId: l124_2, order: 2, difficulty: 'intermediate',
    title: 'STFT From Scratch: Frame Count',
    problem: "Use the lesson's stft() function on a 1-second, 16kHz sine wave with frame_size=400, hop_size=160.\n1. Before running it, predict the number of frames using the formula from Module 125: 1 + (len(signal) - frame_size) // hop\n2. Run stft() and check len(result) against your prediction.\n3. Change hop_size to 400 (no overlap) and re-predict/re-check. How many fewer frames do you get, and why does less overlap always mean fewer frames for the same audio?" },
  { phaseId, moduleId: m124, lessonId: l124_2, order: 3, difficulty: 'advanced',
    title: 'Demonstrating Aliasing Directly',
    problem: "Using aliasing.py's exact pattern: generate sine(7000, sr, 1) at three different sample rates: sr=20000 (well above Nyquist for 7kHz), sr=10000 (Nyquist is exactly 5kHz, so 7kHz aliases), and sr=8000.\n1. For each sample rate, run np.fft.rfft and report the detected peak frequency.\n2. For the sr=10000 case, the aliased frequency should appear at sr - 7000 = 3000Hz. Does your result match?\n3. For the sr=8000 case, compute the expected alias using the general folding formula and verify against your FFT result.\n4. Explain why anti-aliasing (low-pass filtering before downsampling) is necessary in any real audio pipeline that changes sample rate." },
  { phaseId, moduleId: m124, lessonId: l124_2, order: 4, difficulty: 'beginner',
    title: 'Hz-to-Mel Conversion',
    problem: "Use hz_to_mel(hz) = 2595 * log10(1 + hz/700) on 100Hz, 1000Hz, 4000Hz, and 8000Hz.\n1. Report the mel value for each.\n2. Compute the ratio mel(8000)/mel(4000) and the ratio 8000/4000. Are they the same? What does this tell you about how the mel scale treats high frequencies differently from low ones?\n3. In one sentence, explain why this non-linear scale is used instead of raw Hz for audio features intended to model human perception." },
  { phaseId, moduleId: m124, lessonId: l124_2, order: 5, difficulty: 'intermediate',
    title: 'torchaudio.load() and the Missing FFmpeg Dependency',
    problem: "The lesson genuinely found that torchaudio.load('sine.wav') raises a RuntimeError in this course's environment because torchaudio's TorchCodec backend requires FFmpeg, which isn't installed.\n1. Try torchaudio.load() on a WAV file you saved earlier in this module. Do you get the same error, or does it work in your environment?\n2. If it fails, use the lesson's workaround: build the waveform tensor directly with torch.tensor([sine(...)]) instead of loading from a file. Confirm the tensor's shape matches (channels, samples).\n3. Why is 'the library imports fine but a specific method fails at runtime due to a missing system binary' a different category of problem than 'pip install fails'? How would you diagnose which one you're facing?" },

  // ── Module 125, Lesson 1: Spectrograms, STFT & Audio Feature Extraction ──
  { phaseId, moduleId: m125, lessonId: l125_1, order: 1, difficulty: 'beginner',
    title: 'Framing a Signal By Hand',
    problem: "Use the lesson's frame(signal, frame_len, hop) on signal = list(range(1, 21)) (1 through 20) with frame_len=6, hop=3.\n1. Print every frame produced. How many are there?\n2. Verify the count matches 1 + (len(signal) - frame_len) // hop.\n3. Change hop to equal frame_len (hop=6). How does the output change, and what do we call this special case (hint: it's the absence of a certain property between neighboring frames)?" },
  { phaseId, moduleId: m125, lessonId: l125_1, order: 2, difficulty: 'beginner',
    title: 'Windowing a Frame Manually',
    problem: "Using apply_hann.py's pattern: frame = [0.5, 0.8, 0.4, 0.2], window = [0, 0.5, 1, 0].\n1. Compute the element-wise product by hand, then verify with code.\n2. Generate a real 4-point Hann window with hann(4) and apply it to the same frame instead of the toy window given. How do the edge values compare to the toy window's 0s?\n3. Explain why windowing a frame before taking its FFT reduces 'spectral leakage' compared to using a plain rectangular (unwindowed) frame -- referencing what happens at frame boundaries." },
  { phaseId, moduleId: m125, lessonId: l125_1, order: 3, difficulty: 'intermediate',
    title: 'STFT Magnitude and the Time-Frequency Tradeoff',
    problem: "Using the lesson's dft()+magnitudes() approach (or np.fft.rfft + np.abs as a faster equivalent):\n1. Compute frequency resolution for fft_size=400 at sample_rate=16000 using sample_rate/fft_size. \n2. Now compute it for fft_size=1600. Which gives finer frequency resolution?\n3. A larger fft_size needs a longer time window to fill. What happens to *time* resolution as fft_size grows? State the tradeoff in one sentence.\n4. For speech (rapidly changing over ~20-30ms), which end of this tradeoff (fine frequency resolution vs. fine time resolution) usually matters more, and why?" },
  { phaseId, moduleId: m125, lessonId: l125_1, order: 4, difficulty: 'intermediate',
    title: 'Log Magnitude Compression',
    problem: "Use log_magnitude(value) = log(value + 1e-6) on 100000, 100, and 0.001.\n1. Report each output. How much does the huge gap between 100000 and 0.001 shrink after the log transform?\n2. Remove the 1e-6 epsilon and try log_magnitude(0). What happens, and why does the epsilon exist?\n3. Real spectrograms often contain near-silent bins with values very close to 0. Explain why applying log without an epsilon would make production code fragile." },
  { phaseId, moduleId: m125, lessonId: l125_1, order: 5, difficulty: 'advanced',
    title: 'Production STFT: torch.stft vs. librosa.stft',
    problem: "Generate a random signal: torch.randn(16000). Run torch.stft(waveform, n_fft=400, hop_length=160, win_length=400, return_complex=True) and print spec.shape.\n1. What are the two dimensions, and what does each represent (hint: one relates to frequency resolution, the other to how many frames fit)?\n2. Compute the expected number of frequency bins as n_fft//2 + 1 and the expected number of frames using the framing formula from earlier in this module. Do they match torch.stft's output shape?\n3. Load or synthesize an audio array and run librosa.stft(audio, n_fft=400, hop_length=160) on it. Compare spec.shape's convention (frequency bins, frames) to torch.stft's -- are the two libraries consistent in dimension order?" },

  // ── Module 125, Lesson 2: Mel Scale, Mel Filterbank, Log-Mel Spectrogram & MFCC ──
  { phaseId, moduleId: m125, lessonId: l125_2, order: 1, difficulty: 'beginner',
    title: 'Hz/Mel Round-Trip Accuracy',
    problem: "Using hz_to_mel(f) and mel_to_hz(m) from the lesson:\n1. Convert 1000Hz and 4000Hz to mel.\n2. Convert both mel values back to Hz. Do you recover the original frequencies exactly, or is there floating-point drift?\n3. Try the round trip for 0Hz and 20000Hz (edges of typical audio range). Does the round trip still hold at the extremes?" },
  { phaseId, moduleId: m125, lessonId: l125_2, order: 2, difficulty: 'intermediate',
    title: 'Building a Mel Filterbank',
    problem: "Use mel_filterbank(n_mels=10, n_fft=400, sr=16000) (a smaller n_mels than the lesson's 80, to keep the output easy to inspect).\n1. Print the shape of the resulting filterbank -- how many rows and columns, and what does each dimension represent?\n2. Pick filter index 0 (lowest frequency) and filter index 9 (highest). Which one spans more FFT bins? Why does the mel scale make high-frequency filters wider?\n3. Sum each filter's weights across all its bins. Are the sums roughly equal across filters, or does the shape (typically triangular) mean each filter's peak value differs?" },
  { phaseId, moduleId: m125, lessonId: l125_2, order: 3, difficulty: 'intermediate',
    title: 'Applying the Filterbank to Real Spectrogram Magnitudes',
    problem: "Following apply_filterbank.py: load or synthesize audio, compute spec = np.abs(librosa.stft(audio, n_fft=400, hop_length=160)), and matrix-multiply your Module 125 filterbank against it.\n1. Print spec.shape and the resulting mel_manual.shape. How did the frequency-bin dimension change?\n2. Compare your manual mel_manual to librosa.feature.melspectrogram()'s output shape for the same audio and n_mels. Do the shapes agree, even if the exact values differ slightly due to filterbank normalization conventions?\n3. Why is matrix multiplication (filterbank @ spectrogram) an efficient way to apply many overlapping triangular filters at once, compared to looping over each filter separately?" },
  { phaseId, moduleId: m125, lessonId: l125_2, order: 4, difficulty: 'intermediate',
    title: 'Log-Mel and MFCC via DCT',
    problem: "Using log_mel() and dct_ii() from the lesson:\n1. Apply log_mel to a toy mel spectrogram [[10, 100, 1000]]. How much does the log compress this 100x range?\n2. Generate a toy 80-dimensional mel vector (e.g. [float(i+1) for i in range(80)]) and run dct_ii(test_mel, n_coeffs=13) to get 13 MFCCs.\n3. Increase n_coeffs to 40. Do the first 13 coefficients change, or does DCT preserve earlier coefficients as you request more? Why does this matter when people talk about 'the first 13 MFCCs' as a standard feature set?\n4. In one sentence, explain what the DCT step buys you over just using the 80 log-mel values directly as features (hint: think about correlation between neighboring mel bins)." },
  { phaseId, moduleId: m125, lessonId: l125_2, order: 5, difficulty: 'advanced',
    title: 'End-to-End: Waveform to Log-Mel-dB With librosa',
    problem: "Following production_logmel.py: audio, sr = librosa.load(<a wav you saved earlier>, sr=16000); mel = librosa.feature.melspectrogram(y=audio, sr=sr, n_mels=80); log_mel_db = librosa.power_to_db(mel).\n1. Print mel.shape and log_mel_db.shape -- do they match?\n2. Print the min and max values of mel (should be non-negative, spanning a huge range) versus log_mel_db (should be in a much smaller, human-readable dB range).\n3. Regenerate the same audio through your Module 124-125 from-scratch pipeline (frame -> hann window -> DFT/FFT -> magnitude -> your filterbank -> log). Compare shapes at each stage to librosa's single-call output. This is the same pipeline you just built two lessons' worth of pieces for -- confirm you understand which of your functions maps to which part of librosa.feature.melspectrogram()." },
];
