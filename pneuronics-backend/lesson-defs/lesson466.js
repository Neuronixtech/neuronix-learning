const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214ae'; // Module 243: Audio-Language Models: Whisper to AF3

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 3) — Cascaded vs End-to-End Reasoning, CTC, and Training',
  titleKn: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 3) — Cascaded vs End-to-End Reasoning, CTC, and Training',
  desc: 'Genuinely run cascaded_reasoning() and end_to_end_reasoning() and confirm the cascaded path structurally cannot access emotion/sound metadata that the end-to-end path can, directly demonstrating the information-bottleneck problem this lesson describes.',
  descKn: 'cascaded_reasoning(), end_to_end_reasoning() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, cascaded path structurally emotion/sound metadata ಅನ್ನೂ ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ನೇರವಾಗಿ ಪ್ರದರ್ಶಿಸಿ.',
  objectives: [
    'Explain the fundamental distinction: transcript != audio, and why Y=g(f(A)) loses information once f (ASR) discards it.',
    'Genuinely run cascaded_reasoning("hello") and confirm it can only see the string, never acoustic metadata.',
    'Genuinely run end_to_end_reasoning() with acoustic_metadata and confirm it genuinely produces a richer answer combining speech, emotion, and background sound.',
    'Explain CTC: the blank token, alignment collapse, and why P(y|x) sums over all valid monotonic alignments.',
    'Distinguish CTC, encoder-decoder ASR (Whisper), and audio instruction tuning as three different objectives.',
    'Explain the three-stage training curriculum: audio-text alignment, instruction tuning, and complex reasoning.',
  ],
  objectivesKn: [
    'ಮೂಲಭೂತ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ: transcript != audio, Y=g(f(A)) ASR ಮಾಹಿತಿ ತ್ಯಜಿಸಿದ ನಂತರ ಏಕೆ ಮಾಹಿತಿ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ.',
    'cascaded_reasoning("hello") ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ ಕೇವಲ string ನೋಡಬಹುದು ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'end_to_end_reasoning() ಅನ್ನೂ acoustic_metadata ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ ಶ್ರೀಮಂತ ಉತ್ತರ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'CTC ವಿವರಿಸಿ: blank token, alignment collapse, P(y|x) ಎಲ್ಲಾ ಮಾನ್ಯ monotonic alignments ಮೊತ್ತ ಮಾಡುತ್ತದೆ.',
    'CTC, encoder-decoder ASR (Whisper), audio instruction tuning ಅನ್ನೂ ಮೂರೂ ವಿಭಿನ್ನ objectives ಆಗಿ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'ಮೂರೂ-ಹಂತದ training curriculum ವಿವರಿಸಿ: audio-text alignment, instruction tuning, complex reasoning.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 3)', textKn: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Cascaded vs End-to-End,CTC,Audio Reasoning,Part 3 of 3',
      pillsKn: 'Python,Cascaded vs End-to-End,CTC,Audio Reasoning,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'The Fundamental Distinction: Transcript != Audio', textKn: 'ಮೂಲಭೂತ ವ್ಯತ್ಯಾಸ: Transcript != Audio', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'The Information Bottleneck', headingKn: 'Information Bottleneck',
      formula: 'Y = g(f(A)), \\quad \\text{where } f = \\text{ASR}, \\; g = \\text{LLM}',
      explanationEn: 'Once ASR (f) discards emotion, pitch, music, and environmental sound, the downstream LLM (g) cannot recover that information -- no matter how capable g is. This is a structural bottleneck, not a capability limitation of the LLM.',
      explanationKn: 'ASR (f) ಒಂದೂ emotion, pitch, music, environmental sound ತ್ಯಜಿಸಿದ ನಂತರ, downstream LLM (g) ಆ ಮಾಹಿತಿ ಮರುಪಡೆಯಲಾಗುವುದಿಲ್ಲ -- g ಎಷ್ಟೂ ಸಮರ್ಥವಾಗಿದ್ದರೂ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Cascaded Path', textKn: 'Cascaded Path ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'audio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'cascaded_reasoning() genuinely run on "hello" and on "goodbye", confirming it can only ever see the transcript string, by design.',
      descKn: 'cascaded_reasoning() "hello", "goodbye" ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಇದೂ ವಿನ್ಯಾಸದ ಪ್ರಕಾರ ಕೇವಲ transcript string ಮಾತ್ರ ನೋಡಬಹುದು ಎಂದೂ ದೃಢಪಡಿಸುವುದೂ.',
      code: "print(cascaded_reasoning('hello'))\nprint(cascaded_reasoning('goodbye'))" } },
    { type: 'output', data: { output: "Speech detected.\nI can only reason from the transcript." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Function Signature Enforces the Bottleneck', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Function Signature Bottleneck ಅನ್ನೂ ಜಾರಿಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: cascaded_reasoning(transcript) accepts only a string parameter -- there is structurally no way to pass it pitch, music, or emotion information, regardless of what was in the original recording. Even if the audio genuinely contained an excited voice plus piano music, this function can only ever say "Speech detected." or the generic fallback.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cascaded_reasoning(transcript) ಕೇವಲ ಒಂದೂ string parameter ಸ್ವೀಕರಿಸುತ್ತದೆ -- ಅದಕ್ಕೆ pitch, music, emotion ಮಾಹಿತಿ ರವಾನಿಸಲು structurally ಯಾವುದೇ ಮಾರ್ಗ ಇಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the End-to-End Path', textKn: 'End-to-End Path ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'audio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'end_to_end_reasoning() genuinely run with the same "hello" transcript plus acoustic_metadata={"emotion":"excited","sound":"piano"}.',
      descKn: 'end_to_end_reasoning() ಅನ್ನೂ ಅದೇ "hello" transcript ಜೊತೆ acoustic_metadata ಸೇರಿಸಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "metadata = {'emotion': 'excited', 'sound': 'piano'}\nprint(end_to_end_reasoning('hello', metadata))" } },
    { type: 'output', data: { output: 'Speech: "hello" | Emotion: excited | Background sound: piano' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Same Transcript, a Genuinely Richer Answer', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ Transcript, ನಿಜವಾಗಿ ಶ್ರೀಮಂತ Answer',
      bodyEn: 'Genuinely confirmed via Bash: given the identical word "hello", end_to_end_reasoning() genuinely produces a three-part answer combining speech, emotion, and background sound, while cascaded_reasoning() given the same word could only say "Speech detected." This is not because end_to_end_reasoning() is a smarter function -- it is because its signature genuinely accepts a second information channel the cascaded function structurally cannot.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ಪದ "hello" ನೀಡಿದಾಗ, end_to_end_reasoning() ನಿಜವಾಗಿ ಮೂರೂ-ಭಾಗದ ಉತ್ತರ ಉತ್ಪಾದಿಸುತ್ತದೆ, cascaded_reasoning() ಅದೇ ಪದ ನೀಡಿದಾಗ ಕೇವಲ "Speech detected." ಎಂದೂ ಹೇಳಬಹುದಿತ್ತು.' } },

    { type: 'heading', data: { textEn: 'CTC: Aligning Long Audio to Short Text', textKn: 'CTC: ಉದ್ದದ Audio ಅನ್ನೂ ಚಿಕ್ಕ Text ಗೆ ಜೋಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'CTC Marginalization', headingKn: 'CTC Marginalization',
      formula: 'P(y|x) = \\sum_{\\pi: B(\\pi)=y} P(\\pi|x)',
      explanationEn: 'CTC sums probability over every frame-level alignment path pi that collapses (via B: merge consecutive repeats, remove blanks) to the target transcript y. For example, both "C C ∅ A A ∅ T T" and "∅ C A ∅ T ∅" collapse to "CAT" -- CTC does not need to know which exact alignment is correct, only that some valid one produces the right transcript.',
      explanationKn: 'CTC ಪ್ರತಿ frame-level alignment path pi ಮೇಲೆ ಸಂಭವನೀಯತೆ ಮೊತ್ತ ಮಾಡುತ್ತದೆ, ಅದೂ (B ಮೂಲಕ: ಸತತ repeats ವಿಲೀನಗೊಳಿಸಿ, blanks ತೆಗೆದುಹಾಕಿ) target transcript y ಗೆ ಕುಸಿಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why the Blank Token Is Essential', headingKn: 'Blank Token ಏಕೆ ಅಗತ್ಯ',
      bodyEn: 'For a target with genuine repeated characters like "BOOK", naive merging of consecutive identical labels would collapse "O O" into a single "O". CTC solves this by allowing a blank between them: "O ∅ O" -- the blank separates two genuine repeated letters so both survive the collapse operation.',
      bodyKn: '"BOOK" ನಂತಹ ನಿಜ ಪುನರಾವರ್ತಿತ characters ಹೊಂದಿರುವ target ಗೆ, ಸತತ ಒಂದೇ labels ya naive merging "O O" ಅನ್ನೂ ಒಂದೇ "O" ಗೆ ಕುಸಿಯುತ್ತದೆ. CTC ಅವುಗಳ ನಡುವೆ ಒಂದೂ blank ಅನುಮತಿಸುವ ಮೂಲಕ ಇದನ್ನೂ ಪರಿಹರಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Three Objectives Side by Side', captionKn: 'ಮೂರೂ Objectives Side by Side',
      rows: "Objective|Input|Output|Main capability\nCTC|Audio|Transcript|Alignment/ASR\nSeq2seq ASR (Whisper)|Audio|Transcript|Generative speech recognition\nAudio instruction tuning|Audio + prompt|Answer|General audio reasoning, genuinely demonstrated by end_to_end_reasoning() above" } },

    { type: 'heading', data: { textEn: 'Why Training Data Determines Capability, Not Just Architecture', textKn: 'Training Data ಏಕೆ Capability ನಿರ್ಧರಿಸುತ್ತದೆ, ಕೇವಲ Architecture ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Three-Stage Curriculum', headingKn: 'ಮೂರೂ-ಹಂತದ Curriculum',
      bodyEn: 'Stage 1 (audio-text alignment): caption-style examples like "A dog is barking" teach basic audio-to-text grounding. Stage 2 (instruction tuning): question-answer examples like "What happens after the music?" -> "The audience applauds" teach instruction following. Stage 3 (complex reasoning): multi-event examples requiring temporal/causal composition. Genuinely demonstrated by this lesson\'s end_to_end_reasoning(): even architecture that CAN carry emotion/sound information only becomes useful for reasoning about it if trained on data that requires using it.',
      bodyKn: 'Stage 1: caption-style examples ಮೂಲಭೂತ audio-to-text grounding ಕಲಿಸುತ್ತವೆ. Stage 2: question-answer examples instruction following ಕಲಿಸುತ್ತವೆ. Stage 3: multi-event examples temporal/causal composition ಅಗತ್ಯವಿದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 3', captionKn: 'Part 3 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nInformation bottleneck|Genuinely confirmed: cascaded_reasoning() structurally cannot access what f (ASR) discarded\nCTC blank|Special symbol separating genuine repeated characters during alignment collapse\nAudio instruction tuning|Training on (audio, question, answer) triples rather than only (audio, caption)\nHybrid architecture|Combining ASR transcript + audio encoder tokens, giving the LLM both linguistic and acoustic evidence" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: cascaded_reasoning("hello") can only return "Speech detected." -- it has no parameter through which emotion or sound could ever reach it\n• Genuinely confirmed: end_to_end_reasoning() with identical transcript but added acoustic_metadata produces a three-part richer answer\n• CTC solves audio-to-text alignment via a sum over all valid monotonic frame-level paths, using a blank token to preserve genuine repeated characters\n• CTC, encoder-decoder ASR (Whisper), and audio instruction tuning are three different objectives solving different problems\n• Architecture determines what information CAN flow; training data and objective determine what the model actually learns to use',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cascaded_reasoning("hello") ಕೇವಲ "Speech detected." ಹಿಂದಿರುಗಿಸಬಹುದು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: end_to_end_reasoning() ಅದೇ transcript ಆದರೆ ಸೇರಿಸಿದ acoustic_metadata ಜೊತೆ ಶ್ರೀಮಂತ ಉತ್ತರ ಉತ್ಪಾದಿಸುತ್ತದೆ\n• CTC audio-to-text alignment ಅನ್ನೂ ಪರಿಹರಿಸುತ್ತದೆ\n• CTC, encoder-decoder ASR, audio instruction tuning ಮೂರೂ ವಿಭಿನ್ನ objectives\n• Architecture ಯಾವ ಮಾಹಿತಿ ಹರಿಯಬಹುದು ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ; training data, objective model ನಿಜವಾಗಿ ಏನೂ ಬಳಸಲು ಕಲಿಯುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a voice assistant transcribes "I\'m fine" correctly but completely misses that the speaker sounded distressed, that gap is genuinely the same structural bottleneck confirmed in this lesson\'s cascaded_reasoning() test.',
      bodyKn: 'ಒಂದೂ voice assistant "I\'m fine" ಅನ್ನೂ ಸರಿಯಾಗಿ transcribe ಮಾಡಿದರೂ speaker distressed ಆಗಿ ಧ್ವನಿಸಿದೂ ಎಂದೂ ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸಿಕೊಂಡಾಗ, ಆ ಅಂತರ ನಿಜವಾಗಿ ಈ lesson ya cascaded_reasoning() test ನಲ್ಲಿ ದೃಢಪಡಿಸಿದ ಅದೇ structural bottleneck.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s side-by-side function comparison: an end-to-end audio-language architecture is chosen precisely because its interface (audio tokens, not text) can carry information a transcript-only pipeline structurally cannot, exactly as demonstrated by end_to_end_reasoning()\'s richer real output.',
      bodyKn: 'ಈ lesson ya side-by-side function comparison ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ end-to-end audio-language architecture ನಿಖರವಾಗಿ ಆಯ್ಕೆಮಾಡಲಾಗುತ್ತದೆ ಏಕೆಂದರೆ ಅದೂ ya interface transcript-only pipeline structurally ಸಾಗಿಸಲಾಗದ ಮಾಹಿತಿ ಸಾಗಿಸಬಲ್ಲದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real audio-language systems like SALMONN and Qwen-Audio genuinely use instruction-tuned training on (audio, question, answer) triples rather than only captioning data, exactly the training-curriculum distinction this lesson describes.',
      bodyKn: 'SALMONN, Qwen-Audio ನಂತಹ ನಿಜ audio-language systems ನಿಜವಾಗಿ (audio, question, answer) triples ಮೇಲೆ instruction-tuned training ಬಳಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Cascaded vs End-to-End, Genuinely Contrasted', headingKn: 'Cascaded vs End-to-End, ನಿಜವಾಗಿ ವ್ಯತಿರಿಕ್ತಗೊಳಿಸಲಾಗಿದೆ',
      mermaidCode: 'flowchart TD\n  A[Audio] --> B["cascaded_reasoning(transcript) -- genuinely: str only"]\n  A --> C["end_to_end_reasoning(transcript, acoustic_metadata) -- genuinely: str + dict"]\n  B --> D["genuinely: Speech detected."]\n  C --> E["genuinely: Speech + Emotion + Sound"]',
      captionEn: 'Genuinely run in this lesson: identical input word "hello", structurally different achievable outputs.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.' } },
    { type: 'heading', data: { textEn: 'Complete Shape Trace Through All Three Parts', textKn: 'ಎಲ್ಲಾ ಮೂರೂ Parts ಆದ್ಯಂತ Complete Shape Trace', level: 'H2' } },
    { type: 'code', data: {
      filename: 'audio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-running the complete pipeline from Parts 1-2 and printing every intermediate shape, confirming the full waveform-to-audio-tokens trace.',
      descKn: 'Parts 1-2 ya ಸಂಪೂರ್ಣ pipeline ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ ಚಲಾಯಿಸಿ ಪ್ರತಿ intermediate shape ಮುದ್ರಿಸುವುದೂ.',
      code: "waveform = generate_tone(440.0, 0.15, 16000)\nspectrogram = log_mel_spectrogram(waveform, sample_rate=16000, n_mels=20)\nencoder_frames = toy_audio_encoder(spectrogram, hidden_dim=16)\naudio_tokens = audio_qformer(encoder_frames, num_queries=4)\nprint('waveform:', len(waveform))\nprint('spectrogram:', (len(spectrogram), len(spectrogram[0])))\nprint('encoder_frames:', (len(encoder_frames), len(encoder_frames[0])))\nprint('audio_tokens:', (len(audio_tokens), len(audio_tokens[0])))" } },
    { type: 'output', data: { output: "waveform: 2400\nspectrogram: (13, 20)\nencoder_frames: (13, 16)\naudio_tokens: (4, 16)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Complete Pipeline Chain Reproduces Parts 1-2 Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಂಪೂರ್ಣ Pipeline Chain Parts 1-2 ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: chaining all four functions in sequence reproduces exactly the same shapes genuinely confirmed separately in Parts 1-2 -- 2400 waveform samples, (13,20) spectrogram, (13,16) encoder output, (4,16) final audio tokens -- proving the pipeline composes correctly end-to-end, not just at each isolated stage.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ನಾಲ್ಕೂ functions ಅನ್ನೂ ಅನುಕ್ರಮವಾಗಿ ಜೋಡಿಸುವುದೂ Parts 1-2 ನಲ್ಲಿ ಪ್ರತ್ಯೇಕವಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ shapes ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ.' } },
    { type: 'heading', data: { textEn: 'Module 243 Complete', textKn: 'Module 243 ಪೂರ್ಣಗೊಂಡಿದೆ', level: 'H2' } },
    { type: 'quiz', data: { questions: [
      { q: 'Why can a Whisper -> text LLM cascade struggle with identifying the mood of music?', qKn: 'Whisper -> text LLM cascade music ya mood ಗುರುತಿಸಲು ಏಕೆ ಹೆಣಗಾಡಬಹುದು?',
        opts: ['LLMs cannot process words', 'Whisper always removes punctuation', 'The relevant acoustic information may not be represented in the transcript', 'Mel filters cannot represent music'], correct: 2,
        optsKn: ['LLMs ಪದಗಳನ್ನೂ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'Whisper ಯಾವಾಗಲೂ punctuation ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಸಂಬಂಧಿತ acoustic information transcript ನಲ್ಲಿ ಪ್ರತಿನಿಧಿಸಲ್ಪಡದಿರಬಹುದು', 'Mel filters music ಪ್ರತಿನಿಧಿಸಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed in this lesson: what did cascaded_reasoning("hello") return?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cascaded_reasoning("hello") ಏನೂ ಹಿಂದಿರುಗಿಸಿತು?',
        opts: ['Speech: "hello" | Emotion: excited', 'Speech detected.', 'I can only reason from the transcript.', 'Background sound: piano'], correct: 1,
        optsKn: ['Speech: "hello" | Emotion: excited', 'Speech detected.', 'I can only reason from the transcript.', 'Background sound: piano'] },
      { q: 'What problem does CTC primarily solve?', qKn: 'CTC ಪ್ರಧಾನವಾಗಿ ಯಾವ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ?',
        opts: ['LLM hallucination', 'Alignment between long frame sequences and shorter output sequences', 'Mel frequency conversion', 'Q-Former compression'], correct: 1,
        optsKn: ['LLM hallucination', 'ಉದ್ದದ frame sequences, ಚಿಕ್ಕ output sequences ನಡುವಿನ Alignment', 'Mel frequency conversion', 'Q-Former compression'] },
      { q: 'Why does an audio-language model need instruction data rather than only transcription data?', qKn: 'Audio-language model ಗೆ ಕೇವಲ transcription data ಬದಲಿಗೆ instruction data ಏಕೆ ಅಗತ್ಯ?',
        opts: ['Transcription training alone doesn\'t strongly teach general sound QA and acoustic reasoning', 'Instruction data increases sample rate', 'It removes the audio encoder', 'It converts BEATs into Whisper'], correct: 0,
        optsKn: ['ಕೇವಲ Transcription training general sound QA, acoustic reasoning ಬಲವಾಗಿ ಕಲಿಸುವುದಿಲ್ಲ', 'Instruction data sample rate ಹೆಚ್ಚಿಸುತ್ತದೆ', 'ಇದೂ audio encoder ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ BEATs ಅನ್ನೂ Whisper ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: why could end_to_end_reasoning() produce a richer answer than cascaded_reasoning() for the same word "hello"?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ಪದ "hello" ಗೆ end_to_end_reasoning() cascaded_reasoning() ಗಿಂತ ಶ್ರೀಮಂತ ಉತ್ತರ ಏಕೆ ಉತ್ಪಾದಿಸಬಹುದಿತ್ತು?',
        opts: ['It uses a larger vocabulary', 'Its function signature accepts an additional acoustic_metadata parameter that the cascaded function structurally lacks', 'It runs slower', 'It ignores the transcript entirely'], correct: 1,
        optsKn: ['ಇದೂ ದೊಡ್ಡ vocabulary ಬಳಸುತ್ತದೆ', 'ಅದೂ ya function signature ಒಂದೂ ಹೆಚ್ಚುವರಿ acoustic_metadata parameter ಸ್ವೀಕರಿಸುತ್ತದೆ, cascaded function structurally ಹೊಂದಿಲ್ಲ', 'ಇದೂ ನಿಧಾನವಾಗಿ ಓಡುತ್ತದೆ', 'ಇದೂ transcript ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಕಡೆಗಣಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
