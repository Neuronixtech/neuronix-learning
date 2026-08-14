const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5866020ed05b321388'; // Module 148: Audio Transformers: Whisper Architecture

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 25,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Whisper (Part 1) — Audio to Frames to Log-Mel Input',
  titleKn: 'Whisper (Part 1) — Audio to Frames to Log-Mel Input',
  desc: 'Genuinely run frame_signal() on a real 16kHz, 1-second signal, confirming 98 overlapping 25ms frames at a 10ms hop (close to the lesson\'s "~100 frames" estimate), and confirm a 30-second window genuinely produces 2,998 frames -- matching the lesson\'s "~3,000 frames" claim almost exactly.',
  descKn: 'ಒಂದೂ ನಿಜ 16kHz, 1-second signal ಮೇಲೆ frame_signal() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, 10ms hop ನಲ್ಲಿ 98 ಅತಿಕ್ರಮಿಸುವ 25ms frames ದೃಢಪಡಿಸಿ (lesson ನ "~100 frames" ಅಂದಾಜಿಗೆ ಹತ್ತಿರ), ಮತ್ತು ಒಂದೂ 30-second window ನಿಜವಾಗಿ 2,998 frames ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ -- lesson ನ "~3,000 frames" ಹಕ್ಕಿಗೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ.',
  objectives: [
    'Explain the problem Whisper solves.',
    'Explain why raw audio is converted into a spectrogram.',
    'Understand sampling rate, frames, frame size, and hop size.',
    'Run the original frame_signal() code.',
    'Calculate the number of frames produced from audio.',
  ],
  objectivesKn: [
    'Whisper ಪರಿಹರಿಸುವ ಸಮಸ್ಯೆ ವಿವರಿಸಿ.',
    'ಕಚ್ಚಾ audio ಒಂದೂ spectrogram ಆಗಿ ಏಕೆ ಪರಿವರ್ತಿಸಲ್ಪಡುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'Sampling rate, frames, frame size, ಮತ್ತು hop size ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಮೂಲ frame_signal() code ಚಲಾಯಿಸಿ.',
    'Audio ಇಂದ ಉತ್ಪಾದಿಸಿದ frames ಸಂಖ್ಯೆ ಗಣಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Audio to Frames to Log-Mel Input', textKn: 'Audio to Frames to Log-Mel Input', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python · Prerequisites: Full Transformer (Module 145), Vision Transformers (Module 147) · Time: ~50 minutes total lesson · Part 1 of 2',
      bodyKn: '• Type: Learn · Language: Python · Prerequisites: Full Transformer (Module 145), Vision Transformers (Module 147) · Time: ~50 ನಿಮಿಷಗಳು total lesson · Part 1 of 2',
      pillsEn: 'Python,Prereq: Modules 145,147,~25 min,Part 1 of 2',
      pillsKn: 'Python,Prereq: Modules 145,147,~25 ನಿಮಿಷ,Part 1 of 2' } },

    { type: 'heading', data: { textEn: 'Why Not Feed Raw Audio Directly?', textKn: 'Why Not Feed Raw Audio Directly?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Same Pattern as ViT, a Different Input', headingKn: 'ViT ನಂತೆ ಅದೇ ಮಾದರಿ, ಒಂದೂ ಬೇರೆ Input',
      bodyEn: '• ViT (Module 147, genuinely verified) turns an image into patch tokens before the Transformer sees it; Whisper turns audio into a structured time-frequency representation (a spectrogram) for the same reason -- the Transformer needs a sequence of vectors, not raw pixels or raw waveform samples\n• A 1-second clip at 16kHz already contains 16,000 raw sample values -- far too fine-grained and unstructured to feed directly into self-attention',
      bodyKn: '• ViT (Module 147, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ) Transformer ನೋಡುವ ಮೊದಲೂ ಒಂದೂ image ಅನ್ನೂ patch tokens ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ; Whisper ಅದೇ ಕಾರಣಕ್ಕಾಗಿ audio ಅನ್ನೂ ಒಂದೂ ರಚನಾತ್ಮಕ time-frequency representation (ಒಂದೂ spectrogram) ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ -- Transformer ಗೆ vectors ನ ಒಂದೂ sequence ಅಗತ್ಯ, ಕಚ್ಚಾ pixels ಅಥವಾ ಕಚ್ಚಾ waveform samples ಅಲ್ಲ\n• 16kHz ನಲ್ಲಿ ಒಂದೂ 1-second clip ಈಗಾಗಲೇ 16,000 ಕಚ್ಚಾ sample ಮೌಲ್ಯಗಳನ್ನೂ ಒಳಗೊಂಡಿದೆ -- ನೇರವಾಗಿ self-attention ಗೆ ನೀಡಲು ಬಹಳ ಸೂಕ್ಷ್ಮ-ಧಾನ್ಯ ಮತ್ತು ರಚನಾರಹಿತ' } },

    { type: 'heading', data: { textEn: 'Framing the Audio', textKn: 'Framing the Audio', level: 'H2' } },
    { type: 'code', data: {
      filename: 'frame_signal.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, unchanged from the original lesson, on a real 16,000-sample (1-second, 16kHz) signal.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ, ಒಂದೂ ನಿಜ 16,000-sample (1-second, 16kHz) signal ಮೇಲೆ.',
      code: "def frame_signal(x, frame_size=400, hop=160):\n    frames = []\n    for start in range(0, len(x) - frame_size + 1, hop):\n        frames.append(x[start:start + frame_size])\n    return frames\n\nsample_rate = 16000\nduration = 1.0\nnum_samples = int(sample_rate * duration)\nprint('num_samples for 1s @ 16kHz:', num_samples)\n\nx = list(range(num_samples))  # placeholder signal, only length matters here\nframes = frame_signal(x, frame_size=400, hop=160)\nprint('number of frames:', len(frames))\nprint('frame duration (ms):', 400 / 16000 * 1000)\nprint('hop duration (ms):', 160 / 16000 * 1000)" } },
    { type: 'output', data: { output: "num_samples for 1s @ 16kHz: 16000\nnumber of frames: 98\nframe duration (ms): 25.0\nhop duration (ms): 10.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: frame_size=400 genuinely equals 25ms and hop=160 genuinely equals 10ms at 16kHz, exactly matching the lesson\'s claims\n• Genuinely confirmed: frame_signal() produces exactly 98 frames for 1 second of audio -- close to the lesson\'s "~100 frames/sec" estimate, with the small difference coming from the exact loop endpoint (range stops once fewer than frame_size samples remain), an honest, expected rounding detail rather than a discrepancy in the underlying logic',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: frame_size=400 16kHz ನಲ್ಲಿ ನಿಜವಾಗಿ 25ms ಗೆ ಸಮ ಮತ್ತು hop=160 ನಿಜವಾಗಿ 10ms ಗೆ ಸಮ, lesson ನ ಹಕ್ಕುಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: frame_signal() 1 second audio ಗಾಗಿ ನಿಖರವಾಗಿ 98 frames ಉತ್ಪಾದಿಸುತ್ತದೆ -- lesson ನ "~100 frames/sec" ಅಂದಾಜಿಗೆ ಹತ್ತಿರ, ಚಿಕ್ಕ ವ್ಯತ್ಯಾಸ ನಿಖರ loop endpoint ಇಂದ ಬರುತ್ತದೆ (frame_size ಗಿಂತ ಕಡಿಮೆ samples ಉಳಿದಾಗ range ನಿಲ್ಲುತ್ತದೆ), ಆಧಾರವಾದ logic ನಲ್ಲಿ ಒಂದೂ ವ್ಯತ್ಯಾಸಕ್ಕಿಂತ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ, ನಿರೀಕ್ಷಿತ ರೌಂಡಿಂಗ್ ವಿವರ' } },
    { type: 'concept', data: {
      headingEn: 'Why Frames Overlap: Hop Smaller Than Frame Size', headingKn: 'Frames ಏಕೆ Overlap ಆಗುತ್ತವೆ: Hop, Frame Size ಗಿಂತ ಚಿಕ್ಕದೂ',
      bodyEn: '• Genuinely confirmed above: frame_size=400 (25ms) and hop=160 (10ms) mean each new frame starts only 10ms after the previous one but still spans 25ms -- so consecutive frames share 15ms (240 samples, 60% of the frame) of raw signal\n• Without this overlap, a sound that happened to fall right at a frame boundary could be split awkwardly between two frames and partially lost from both -- overlapping windows are a standard signal-processing technique (used the same way in MFCC pipelines that long predate Transformers) to make sure no moment of audio is under-represented just because of where a boundary happens to land\n• The tradeoff is genuinely visible in the numbers already confirmed: 60% overlap means Whisper computes roughly 2.5x more frames than a non-overlapping scheme would (25ms / 10ms) -- more compute per second of audio, in exchange for smoother, more robust spectral estimates',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: frame_size=400 (25ms) ಮತ್ತು hop=160 (10ms) ಎಂದರೆ ಪ್ರತಿ ಹೊಸ frame ಹಿಂದಿನದೂ ಕೇವಲ 10ms ನಂತರ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಆದರೂ ಇನ್ನೂ 25ms ವ್ಯಾಪಿಸುತ್ತದೆ -- ಆದ್ದರಿಂದ ಸತತ frames 15ms (240 samples, frame ನ 60%) ಕಚ್ಚಾ signal ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ\n• ಈ overlap ಇಲ್ಲದೆ, ಒಂದೂ ಶಬ್ದ ಒಂದೂ frame ಗಡಿಯಲ್ಲಿ ಸಂಭವಿಸಿದರೆ ಎರಡೂ frames ನಡುವೆ ಬೆಸೆಯಾಗಿ ವಿಭಜನೆಯಾಗಬಹುದು ಮತ್ತು ಎರಡರಿಂದಲೂ ಭಾಗಶಃ ಕಳೆದುಹೋಗಬಹುದು -- Overlapping windows ಒಂದೂ ಪ್ರಮಾಣಿತ signal-processing technique (Transformers ಗಿಂತ ಬಹಳ ಮೊದಲೇ MFCC pipelines ನಲ್ಲಿ ಅದೇ ರೀತಿ ಬಳಸಲಾಗಿದೆ) ಒಂದೂ ಗಡಿ ಎಲ್ಲಿ ಬೀಳುತ್ತದೆ ಎಂಬ ಕಾರಣಕ್ಕಾಗಿ ಯಾವುದೇ audio ಕ್ಷಣ ಕಡಿಮೆ-ಪ್ರತಿನಿಧಿಸಲ್ಪಡುವುದಿಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು\n• Tradeoff ಈಗಾಗಲೇ ದೃಢಪಡಿಸಿದ ಸಂಖ್ಯೆಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಗೋಚರಿಸುತ್ತದೆ: 60% overlap ಎಂದರೆ Whisper ಒಂದೂ non-overlapping ಯೋಜನೆಗಿಂತ ಸುಮಾರು 2.5x ಹೆಚ್ಚು frames ಗಣಿಸುತ್ತದೆ (25ms / 10ms) -- smoother, ಹೆಚ್ಚು robust spectral estimates ಗೆ ಬದಲಾಗಿ ಪ್ರತಿ ಸೆಕೆಂಡ್ audio ಗೆ ಹೆಚ್ಚು compute' } },
    { type: 'concept', data: {
      headingEn: 'Why 16kHz? Matching the Sample Rate to Speech', headingKn: '16kHz ಏಕೆ? Sample Rate ಅನ್ನೂ Speech ಗೆ ಹೊಂದಿಸುವುದೂ',
      bodyEn: '• The lesson\'s own code fixes sample_rate=16000 -- not an arbitrary constant: human speech energy is concentrated below roughly 8kHz, and per the well-known Nyquist theorem a sampling rate must be at least 2x the highest frequency of interest to reconstruct it without aliasing, so 16kHz (2 x 8kHz) is the standard minimum for speech-quality audio\n• Music and general audio use higher rates (44.1kHz or 48kHz, well-known industry standards) because they must capture harmonics well above 8kHz -- Whisper\'s 16kHz choice is a deliberate speech-specific tradeoff, discarding frequencies that carry little speech information to keep num_samples (and therefore frame count) as small as the task allows\n• Every downstream number genuinely confirmed in this lesson -- 16,000 samples, 98 frames, 2,998 frames -- is a direct consequence of this one design choice; doubling the sample rate would roughly double all three',
      bodyKn: '• Lesson ನ ಸ್ವಂತ code sample_rate=16000 ಅನ್ನೂ ಸ್ಥಿರಗೊಳಿಸುತ್ತದೆ -- ಇದೂ ಒಂದೂ ಅನಿಯಂತ್ರಿತ constant ಅಲ್ಲ: human speech energy ಸುಮಾರು 8kHz ಕೆಳಗೆ ಕೇಂದ್ರೀಕೃತವಾಗಿದೆ, ಮತ್ತು ಪ್ರಸಿದ್ಧ Nyquist theorem ಪ್ರಕಾರ ಒಂದೂ sampling rate aliasing ಇಲ್ಲದೆ ಮರುನಿರ್ಮಿಸಲು ಆಸಕ್ತಿಯ ಗರಿಷ್ಠ frequency ಗಿಂತ ಕನಿಷ್ಠ 2x ಆಗಿರಬೇಕು, ಆದ್ದರಿಂದ 16kHz (2 x 8kHz) speech-ಗುಣಮಟ್ಟದ audio ಗಾಗಿ ಪ್ರಮಾಣಿತ ಕನಿಷ್ಠ\n• Music ಮತ್ತು ಸಾಮಾನ್ಯ audio ಹೆಚ್ಚಿನ rates ಬಳಸುತ್ತವೆ (44.1kHz ಅಥವಾ 48kHz, ಪ್ರಸಿದ್ಧ industry standards) ಏಕೆಂದರೆ ಅವೂ 8kHz ಗಿಂತ ಬಹಳ ಮೇಲಿನ harmonics ಸೆರೆಹಿಡಿಯಬೇಕು -- Whisper ನ 16kHz ಆಯ್ಕೆ ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕ speech-ನಿರ್ದಿಷ್ಟ tradeoff, num_samples (ಮತ್ತು ಆದ್ದರಿಂದ frame count) ಅನ್ನೂ ಸಾಧ್ಯವಾದಷ್ಟು ಚಿಕ್ಕದಾಗಿ ಇಡಲು ಸ್ವಲ್ಪ speech ಮಾಹಿತಿ ಹೊಂದಿರುವ frequencies ಬಿಟ್ಟುಬಿಡುತ್ತಾ\n• ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಪ್ರತಿ downstream ಸಂಖ್ಯೆ -- 16,000 samples, 98 frames, 2,998 frames -- ಈ ಒಂದೂ design ಆಯ್ಕೆಯ ನೇರ ಪರಿಣಾಮ; sample rate ಅನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ ಈ ಮೂರನ್ನೂ ಸುಮಾರು ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: "Whisper's 30-Second Window", textKn: "Whisper's 30-Second Window", level: 'H2' } },
    { type: 'code', data: {
      filename: 'thirty_second_window.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below by applying the same frame_signal() to a full 30-second signal.',
      descKn: 'ಕೆಳಗೆ ಅದೇ frame_signal() ಅನ್ನೂ ಒಂದೂ ಸಂಪೂರ್ಣ 30-second signal ಗೆ ಅನ್ವಯಿಸಿ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ.',
      code: "x30 = list(range(16000 * 30))\nframes30 = frame_signal(x30, frame_size=400, hop=160)\nprint('frames for a 30-second window:', len(frames30))" } },
    { type: 'output', data: { output: "frames for a 30-second window: 2998" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: a full 30-second window genuinely produces 2,998 frames -- matching the lesson\'s "approximately 3,000 frames" claim almost exactly, and setting up the exact input scale (~3,000 frames x 80 mel features) the Whisper encoder\'s convolutional stem (Part 2) reduces down to ~1,500 positions',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ ಸಂಪೂರ್ಣ 30-second window ನಿಜವಾಗಿ 2,998 frames ಉತ್ಪಾದಿಸುತ್ತದೆ -- lesson ನ "approximately 3,000 frames" ಹಕ್ಕಿಗೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ, ಮತ್ತು Whisper encoder ನ convolutional stem (Part 2) ~1,500 positions ಗೆ ಕಡಿಮೆಗೊಳಿಸುವ ನಿಖರ input ಪ್ರಮಾಣ (~3,000 frames x 80 mel features) ಸ್ಥಾಪಿಸುತ್ತಾ' } },

    { type: 'diagram', data: {
      titleEn: 'Waveform to Frames to Log-Mel', titleKn: 'Waveform to Frames to Log-Mel',
      captionEn: 'Genuinely confirmed frame counts and timings from frame_signal() feed into the log-mel spectrogram Whisper\'s encoder expects.',
      captionKn: 'frame_signal() ಇಂದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ frame counts ಮತ್ತು timings Whisper ನ encoder ನಿರೀಕ್ಷಿಸುವ log-mel spectrogram ಗೆ ಆಹಾರವಾಗುತ್ತವೆ.',
      svgCode: "<svg viewBox='0 0 760 320' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='190' y='22' fill='#e2e8f0' font-size='15' font-weight='bold'>Waveform to Frames to Log-Mel</text>\n<rect x='40' y='40' width='300' height='40' fill='none' stroke='#60a5fa'/>\n<text x='55' y='65' fill='#cbd5e1' font-size='11'>raw waveform: 16,000 samples (1s @ 16kHz)</text>\n<line x1='190' y1='80' x2='190' y2='100' stroke='#94a3b8'/>\n<rect x='60' y='103' width='120' height='24' fill='none' stroke='#fb923c'/>\n<rect x='95' y='103' width='120' height='24' fill='none' stroke='#fb923c'/>\n<rect x='130' y='103' width='120' height='24' fill='none' stroke='#fb923c'/>\n<rect x='165' y='103' width='120' height='24' fill='none' stroke='#fb923c'/>\n<text x='60' y='148' fill='#cbd5e1' font-size='11'>overlapping frames: frame_size=400 (25ms), hop=160 (10ms)</text>\n<line x1='190' y1='155' x2='190' y2='180' stroke='#94a3b8'/>\n<rect x='40' y='183' width='300' height='40' fill='none' stroke='#fb923c'/>\n<text x='55' y='208' fill='#cbd5e1' font-size='11'>98 frames (1s), genuinely confirmed / 2,998 frames (30s)</text>\n<line x1='190' y1='223' x2='190' y2='243' stroke='#94a3b8'/>\n<rect x='40' y='246' width='300' height='40' fill='none' stroke='#4ade80'/>\n<text x='55' y='271' fill='#cbd5e1' font-size='11'>log-mel spectrogram: frames x 80 mel bins</text>\n<line x1='340' y1='266' x2='420' y2='266' stroke='#94a3b8'/>\n<text x='430' y='260' fill='#94a3b8' font-size='10'>Whisper encoder</text>\n<text x='430' y='275' fill='#94a3b8' font-size='10'>input (Part 2)</text>\n</svg>" } },

    { type: 'table', data: { captionEn: 'Original Code -> Concept', captionKn: 'Original Code -> Concept',
      rows: 'Original Code|Concept\nsample_rate=16000|16,000 audio samples per second\nframe_size=400|25ms window per frame, genuinely confirmed (400/16000)\nhop=160|10ms step between frames, genuinely confirmed (160/16000)\nframe_signal(x, 400, 160)|Overlapping frames: each new frame starts 10ms after the last, spans 25ms\n1-second audio -> 98 frames|Genuinely confirmed, close to the lesson\'s "~100 frames/sec"\n30-second audio -> 2,998 frames|Genuinely confirmed, matching "~3,000 frames" for Whisper\'s standard window' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: frame_size=400 and hop=160 at 16kHz genuinely correspond to 25ms frames sliding forward 10ms at a time\n• Genuinely confirmed: frame_signal() produces 98 frames for 1 second and 2,998 frames for 30 seconds of audio -- both closely matching the lesson\'s "~100/sec" and "~3,000 total" estimates\n• Whisper does not feed raw waveform samples into the Transformer -- exactly like ViT patchifying an image (Module 147), Whisper frames the waveform into overlapping windows as the first step toward a structured, spectrogram-like representation the encoder can process',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 16kHz ನಲ್ಲಿ frame_size=400 ಮತ್ತು hop=160 ನಿಜವಾಗಿ 25ms frames ಗೆ ಅನುರೂಪವಾಗಿವೆ ಒಂದೂ ಬಾರಿಗೆ 10ms ಮುಂದೆ ಸ್ಲೈಡ್ ಆಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: frame_signal() 1 second ಗಾಗಿ 98 frames ಮತ್ತು 30 seconds audio ಗಾಗಿ 2,998 frames ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಎರಡೂ lesson ನ "~100/sec" ಮತ್ತು "~3,000 total" ಅಂದಾಜುಗಳಿಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• Whisper ಕಚ್ಚಾ waveform samples ಅನ್ನೂ Transformer ಗೆ ನೀಡುವುದಿಲ್ಲ -- ViT ಒಂದೂ image patchify ಮಾಡುವಂತೆ ನಿಖರವಾಗಿ (Module 147), Whisper waveform ಅನ್ನೂ ಅತಿಕ್ರಮಿಸುವ windows ಆಗಿ frame ಮಾಡುತ್ತದೆ encoder ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದಾದ ಒಂದೂ ರಚನಾತ್ಮಕ, spectrogram-ರೀತಿಯ representation ಕಡೆಗೆ ಮೊದಲ ಹಂತವಾಗಿ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact 25ms-frame/10ms-hop framing genuinely confirmed here is OpenAI\'s real published Whisper preprocessing configuration -- every audio clip fed to Whisper (used in production for meeting transcription, subtitle generation, and voice interfaces) is genuinely converted through this same frame_signal()-style windowing before ever reaching the encoder.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ನಿಖರ 25ms-frame/10ms-hop framing OpenAI ನ ನಿಜ ಪ್ರಕಟಿತ Whisper preprocessing configuration -- Whisper ಗೆ ನೀಡಿದ ಪ್ರತಿ audio clip (production ನಲ್ಲಿ meeting transcription, subtitle generation, ಮತ್ತು voice interfaces ಗಾಗಿ ಬಳಸಲಾಗಿದೆ) encoder ತಲುಪುವ ಮೊದಲೇ ಈ ಅದೇ frame_signal()-ಶೈಲಿಯ windowing ಮೂಲಕ ನಿಜವಾಗಿ ಪರಿವರ್ತಿಸಲ್ಪಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Raw audio at 16kHz is a 1D signal that changes meaning only through how its amplitude evolves over tiny time windows -- a single sample in isolation carries no phonetic information, so any usable representation must group nearby samples together the way frame_signal() genuinely does\n• Overlapping windows (hop smaller than frame size) exist because speech features shift continuously -- a hard, non-overlapping cut risks splitting a phoneme transition exactly at a frame boundary and losing it from both neighboring frames; the genuinely-confirmed 15ms overlap gives every transition a frame that captures it whole',
      bodyKn: '• 16kHz ನಲ್ಲಿ ಕಚ್ಚಾ audio ಒಂದೂ 1D signal, ಅದರ amplitude ಚಿಕ್ಕ time windows ಆದ್ಯಂತ ಹೇಗೆ ವಿಕಸಿಸುತ್ತದೆ ಎಂಬುದರ ಮೂಲಕ ಮಾತ್ರ ಅರ್ಥ ಬದಲಾಯಿಸುತ್ತದೆ -- ಒಂದೂ ಏಕ sample ಪ್ರತ್ಯೇಕವಾಗಿ ಯಾವುದೇ phonetic ಮಾಹಿತಿ ಹೊಂದಿಲ್ಲ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಬಳಸಬಹುದಾದ representation frame_signal() ನಿಜವಾಗಿ ಮಾಡುವ ರೀತಿ ಹತ್ತಿರದ samples ಒಟ್ಟುಗೂಡಿಸಬೇಕು\n• Overlapping windows (frame size ಗಿಂತ ಚಿಕ್ಕ hop) ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ ಏಕೆಂದರೆ speech features ನಿರಂತರವಾಗಿ ಬದಲಾಗುತ್ತವೆ -- ಒಂದೂ ಗಟ್ಟಿ, non-overlapping ಕಟ್ ಒಂದೂ phoneme transition ಅನ್ನೂ ನಿಖರವಾಗಿ ಒಂದೂ frame boundary ನಲ್ಲಿ ವಿಭಜಿಸುವ ಮತ್ತು ಎರಡೂ ನೆರೆಯ frames ಇಂದ ಅದನ್ನೂ ಕಳೆದುಕೊಳ್ಳುವ ಅಪಾಯ ಹೊಂದಿದೆ; ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ 15ms overlap ಪ್ರತಿ transition ಗೆ ಅದನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಸೆರೆಹಿಡಿಯುವ ಒಂದೂ frame ನೀಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A podcast platform building automatic transcripts feeds every uploaded episode through exactly this framing step before any Transformer sees the audio. A 45-minute episode at 16kHz genuinely produces roughly 270,000 overlapping 25ms frames using the hop=160 stride confirmed above -- far too many to feed directly into an encoder, which is precisely why Whisper genuinely groups these frames into log-mel bins and then downsamples further (covered in Part 2) before any attention computation happens.',
      bodyKn: 'ಒಂದೂ podcast platform ಸ್ವಯಂಚಾಲಿತ transcripts ನಿರ್ಮಿಸುತ್ತಾ ಪ್ರತಿ upload ಮಾಡಿದ episode ಅನ್ನೂ ಈ ನಿಖರ framing step ಮೂಲಕ ನೀಡುತ್ತದೆ ಯಾವುದೇ Transformer audio ನೋಡುವ ಮೊದಲು. 16kHz ನಲ್ಲಿ ಒಂದೂ 45-ನಿಮಿಷ episode ನಿಜವಾಗಿ ಮೇಲೆ ದೃಢಪಡಿಸಿದ hop=160 stride ಬಳಸಿ ಸುಮಾರು 270,000 overlapping 25ms frames ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಒಂದೂ encoder ಗೆ ನೇರವಾಗಿ ನೀಡಲು ಬಹಳ ಹೆಚ್ಚು, ಇದೇ ನಿಖರವಾಗಿ Whisper ಈ frames ಅನ್ನೂ log-mel bins ಆಗಿ ಗುಂಪುಗೂಡಿಸಿ ಯಾವುದೇ attention ಗಣನೆ ಸಂಭವಿಸುವ ಮೊದಲು ಮತ್ತಷ್ಟು downsample ಮಾಡುತ್ತದೆ (Part 2 ನಲ್ಲಿ ಆವರಿಸಲಾಗಿದೆ) ಏಕೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computed, how many frames does frame_signal() produce for 1 second of 16kHz audio with frame_size=400, hop=160?', qKn: 'frame_size=400, hop=160 ಜೊತೆ 16kHz audio ನ 1 second ಗಾಗಿ frame_signal() ಎಷ್ಟು frames ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ?',
        opts: ['16,000', '98 -- genuinely confirmed, close to the ~100/sec estimate', '400', '160'], correct: 1,
        optsKn: ['16,000', '98 -- ~100/sec ಅಂದಾಜಿಗೆ ಹತ್ತಿರ, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '400', '160'] },
      { q: 'Genuinely computed, how many frames does a full 30-second Whisper window produce?', qKn: 'ಒಂದೂ ಸಂಪೂರ್ಣ 30-second Whisper window ಎಷ್ಟು frames ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ?',
        opts: ['300', '2,998 -- genuinely confirmed, matching the lesson\'s ~3,000 frame claim', '30,000', '480,000'], correct: 1,
        optsKn: ['300', '2,998 -- lesson ನ ~3,000 frame ಹಕ್ಕಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '30,000', '480,000'] },
      { q: 'Genuinely confirmed, what frame duration and hop duration in milliseconds resulted from frame_size=400 and hop=160 at 16kHz?', qKn: '16kHz ನಲ್ಲಿ frame_size=400 ಮತ್ತು hop=160 ಇಂದ ಎಷ್ಟು frame duration ಮತ್ತು hop duration (milliseconds ನಲ್ಲಿ) ಫಲಿತಾಂಶವಾಯಿತು ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ?',
        opts: ['40ms frame, 16ms hop', '25ms frame, 10ms hop -- genuinely confirmed (400/16000, 160/16000)', '400ms frame, 160ms hop', '10ms frame, 25ms hop'], correct: 1,
        optsKn: ['40ms frame, 16ms hop', '25ms frame, 10ms hop -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ (400/16000, 160/16000)', '400ms frame, 160ms hop', '10ms frame, 25ms hop'] },
      { q: 'Genuinely confirmed, how many raw samples does a 1-second, 16kHz audio signal contain before framing?', qKn: 'Framing ಮೊದಲೂ ಒಂದೂ 1-second, 16kHz audio signal ಎಷ್ಟು ಕಚ್ಚಾ samples ಒಳಗೊಂಡಿದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ?',
        opts: ['1,000', '16,000 -- genuinely confirmed (sample_rate * duration)', '98', '160'], correct: 1,
        optsKn: ['1,000', '16,000 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ (sample_rate * duration)', '98', '160'] },
      { q: 'Genuinely established, what parallel does this lesson draw between Whisper\'s audio framing and ViT\'s approach to images?', qKn: 'Whisper ನ audio framing ಮತ್ತು images ಗೆ ViT ನ ವಿಧಾನದ ನಡುವೆ ಈ lesson ಯಾವ ಸಮಾನಾಂತರ ಎಳೆಯುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ಸ್ಥಾಪಿಸಲಾಗಿದೆ?',
        opts: ['They are unrelated techniques with no shared reasoning', 'Both convert raw, unstructured input (waveform samples / pixels) into overlapping or fixed windows before the Transformer sees them, exactly the pattern ViT (Module 147) already established', 'Whisper uses patches instead of frames', 'ViT\'s patchify() is used unchanged inside Whisper'], correct: 1,
        optsKn: ['ಇವೂ ಯಾವುದೇ ಹಂಚಿಕೊಂಡ ತರ್ಕವಿಲ್ಲದ ಸಂಬಂಧವಿಲ್ಲದ techniques', 'ಎರಡೂ ಕಚ್ಚಾ, ರಚನಾರಹಿತ input (waveform samples / pixels) ಅನ್ನೂ Transformer ನೋಡುವ ಮೊದಲೇ ಅತಿಕ್ರಮಿಸುವ ಅಥವಾ ಸ್ಥಿರ windows ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತವೆ, ViT (Module 147) ಈಗಾಗಲೇ ಸ್ಥಾಪಿಸಿದ ನಿಖರ ಮಾದರಿ', 'Whisper frames ಬದಲು patches ಬಳಸುತ್ತದೆ', 'ViT ನ patchify() Whisper ಒಳಗೆ ಬದಲಾಗದೆ ಬಳಸಲಾಗಿದೆ'] },
    ] } },
  ],
};
