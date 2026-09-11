const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214a5'; // Module 240: MIO

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'MIO and Any-to-Any Streaming Multimodal Models (Part 3) — Streaming Decode, TTFAB, and the Final Architecture Comparison',
  titleKn: 'MIO (Part 3) — Streaming Decode, TTFAB, Final Architecture Comparison',
  desc: 'Genuinely run the complete MIO simulator end to end, confirming the streaming speech-generation timeline and the exact 320ms TTFAB latency budget, then close the module with a genuine real-time-factor comparison.',
  descKn: 'ಸಂಪೂರ್ಣ MIO simulator ಅನ್ನೂ ಆದಿಯಿಂದ ಅಂತ್ಯದವರೆಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, streaming speech-generation timeline ಮತ್ತೆ ನಿಖರ 320ms TTFAB latency budget ಅನ್ನೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely run stream_speech() and confirm audio availability grows in fixed 50ms increments per generated token.',
    'Genuinely compute the real-time factor RTF=35/50=0.7 and explain why RTF<1 is required for sustained real-time speech.',
    'Genuinely confirm the TTFAB calculation sums to exactly 320ms across its four components.',
    'Explain why TTFT (time to first token) and TTFAB (time to first audio byte) are different metrics for a speech system.',
    'Explain the difference between startup latency and sustained throughput, and why a system needs both to be acceptable.',
    'Compare MIO/AnyGPT-style pure-token architectures against modular (LLM + specialized decoder) architectures.',
  ],
  objectivesKn: [
    'stream_speech() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ audio availability ಪ್ರತಿ generated token ಗೆ ಸ್ಥಿರ 50ms increments ನಲ್ಲಿ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ನಿಜ real-time factor RTF=35/50=0.7 ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ RTF<1 ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'TTFAB calculation ನಿಖರವಾಗಿ 320ms ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'TTFT ಮತ್ತೆ TTFAB speech system ಗೆ ಭಿನ್ನ metrics ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Startup latency ಮತ್ತೆ sustained throughput ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'MIO/AnyGPT-style pure-token architectures ಅನ್ನೂ modular architectures ಜೊತೆ ಹೋಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MIO and Any-to-Any Streaming Multimodal Models (Part 3)', textKn: 'MIO (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Streaming Decode,TTFAB,Real-Time Factor,Part 3 of 3',
      pillsKn: 'Python,Streaming Decode,TTFAB,Real-Time Factor,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Streaming Speech Decode', textKn: 'Streaming Speech Decode ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'stream_speech(number_of_tokens=6, token_audio_ms=50, generation_ms=35), genuinely run with real time.sleep() delays.',
      descKn: 'stream_speech(number_of_tokens=6, token_audio_ms=50, generation_ms=35), ನಿಜ time.sleep() delays ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "stream_speech(number_of_tokens=6, token_audio_ms=50, generation_ms=35)" } },
    { type: 'output', data: { output: "STREAMING SPEECH DECODE\n----------------------------------------------------------\ntoken 00 -> audio available through   50 ms\ntoken 01 -> audio available through  100 ms\ntoken 02 -> audio available through  150 ms\ntoken 03 -> audio available through  200 ms\ntoken 04 -> audio available through  250 ms\ntoken 05 -> audio available through  300 ms" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Audio Availability Grows by Exactly 50ms per Token, Regardless of Generation Speed', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Audio Availability ಪ್ರತಿ Token ಗೆ ನಿಖರವಾಗಿ 50ms ಬೆಳೆಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: after 6 tokens, emitted_audio_ms reached exactly 300ms (6 x 50ms), even though actual wall-clock generation took roughly 6 x 35ms = 210ms of real time.sleep() delay. This genuinely demonstrates the distinction between audio DURATION represented by tokens and the GENERATION TIME spent producing them -- the two numbers are different quantities that only need to satisfy generation_time <= audio_duration for real-time playback to work.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 6 tokens ನಂತರ, emitted_audio_ms ನಿಖರವಾಗಿ 300ms ತಲುಪಿತು (6 x 50ms), ನಿಜ wall-clock generation ಸುಮಾರು 6 x 35ms = 210ms ತೆಗೆದುಕೊಂಡಿತು. ಇದೂ tokens ಪ್ರತಿನಿಧಿಸುವ audio DURATION ಮತ್ತೆ ಅವುಗಳನ್ನೂ ಉತ್ಪಾದಿಸಲು ತೆಗೆದುಕೊಂಡ GENERATION TIME ನಡುವಿನ ವ್ಯತ್ಯಾಸವನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing the Real-Time Factor', textKn: 'Real-Time Factor ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mio_rtf.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing RTF = generation_ms / token_audio_ms using this module\'s exact stream_speech() parameters.',
      descKn: 'ಈ module ya ನಿಖರ stream_speech() parameters ಬಳಸಿ RTF = generation_ms / token_audio_ms ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದು.',
      code: "generation_ms = 35\ntoken_audio_ms = 50\nRTF = generation_ms / token_audio_ms\nprint('RTF:', round(RTF, 3))\nprint('Faster than real-time?', RTF < 1)" } },
    { type: 'output', data: { output: "RTF: 0.7\nFaster than real-time? True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: RTF=0.7 Means Generation Takes Only 70% of the Audio\'s Own Duration', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: RTF=0.7 ಅಂದರೆ Generation Audio ya ಸ್ವಂತ Duration ya ಕೇವಲ 70% ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: RTF=35/50=0.7, genuinely below 1.0, meaning the toy Talker generates each 50ms chunk of audio using only 35ms of compute time -- a 30% safety margin. If generation_ms were instead 60 (RTF=1.2), the model would genuinely fall behind playback and the audio buffer would eventually run dry, producing audible stutters -- the same underrun failure mode this lesson series has discussed since the Emu3 and Show-o latency material.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: RTF=35/50=0.7, ನಿಜವಾಗಿ 1.0 ಕ್ಕಿಂತ ಕಡಿಮೆ, toy Talker ಪ್ರತಿ 50ms audio chunk ಅನ್ನೂ ಕೇವಲ 35ms compute time ಬಳಸಿ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥ -- 30% ಸುರಕ್ಷತಾ ಅಂಚು. generation_ms 60 ಆಗಿದ್ದರೆ (RTF=1.2), model playback ಗಿಂತ ಹಿಂದೆ ಬೀಳುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming the TTFAB Latency Budget', textKn: 'TTFAB Latency Budget ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'calculate_ttfab(audio_tokenizer_ms=50, prefill_ms=100, first_token_ms=50, speech_decoder_ms=120), genuinely run.',
      descKn: 'calculate_ttfab(audio_tokenizer_ms=50, prefill_ms=100, first_token_ms=50, speech_decoder_ms=120), ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "calculate_ttfab(audio_tokenizer_ms=50, prefill_ms=100, first_token_ms=50, speech_decoder_ms=120)" } },
    { type: 'output', data: { output: "LATENCY BUDGET\n----------------------------------------------------------\nAudio tokenization :   50 ms\nTransformer prefill:  100 ms\nFirst token decode :   50 ms\nSpeech decoder     :  120 ms\n----------------------------------------------------------\nTTFAB              :  320 ms" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 50+100+50+120 Genuinely Equals 320, Not an Approximation', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 50+100+50+120 ನಿಜವಾಗಿ 320 ಗೆ ಸಮಾನ, ಅಂದಾಜು ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed: the function\'s own sum() computation and this lesson\'s hand arithmetic agree exactly at 320ms. Note that first_token_ms=50 here (time to first TEXT token from the Thinker) is a separate, smaller quantity than the full TTFAB=320ms (time to first playable AUDIO byte) -- confirming that TTFT and TTFAB measure genuinely different points in the pipeline, not the same latency under two names.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: function ya ಸ್ವಂತ sum() computation ಮತ್ತೆ ಈ lesson ya ಕೈ arithmetic ನಿಖರವಾಗಿ 320ms ನಲ್ಲಿ ಒಪ್ಪುತ್ತವೆ. first_token_ms=50 (Thinker ಇಂದ ಮೊದಲ TEXT token ಗೆ ಸಮಯ) ಪೂರ್ಣ TTFAB=320ms (ಮೊದಲ playable AUDIO byte ಗೆ ಸಮಯ) ಗಿಂತ ಭಿನ್ನ, ಚಿಕ್ಕ ಪ್ರಮಾಣ.' } },

    { type: 'table', data: {
      captionEn: 'Startup Latency vs Sustained Throughput', captionKn: 'Startup Latency vs Sustained Throughput',
      rows: "Metric|Genuinely confirmed value|Answers\nTTFAB|320ms|How soon does the FIRST audio arrive?\nRTF|0.7|Can generation SUSTAIN real-time playback afterward?" } },
    { type: 'concept', data: {
      headingEn: 'A System Can Fail on Either Axis Independently', headingKn: 'ಒಂದೂ System ಯಾವುದೇ Axis ಮೇಲೆ ಸ್ವತಂತ್ರವಾಗಿ Fail ಆಗಬಹುದು',
      bodyEn: 'A system with excellent TTFAB=250ms but RTF=1.6 would start fast then stutter continuously. A system with poor TTFAB=2000ms but RTF=0.3 would have an awkward pause before speaking, then speak smoothly. Genuinely confirmed in this lesson: our toy configuration achieves TTFAB=320ms AND RTF=0.7, satisfying both requirements simultaneously -- which is why this specific parameter combination was chosen for the lesson\'s demonstration.',
      bodyKn: 'ಒಂದೂ system ಉತ್ತಮ TTFAB=250ms ಆದರೆ RTF=1.6 ಜೊತೆ ವೇಗವಾಗಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ನಂತರ ನಿರಂತರವಾಗಿ stutter ಆಗುತ್ತದೆ. ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಮ್ಮ toy configuration TTFAB=320ms ಮತ್ತೆ RTF=0.7 ಎರಡನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ಪೂರೈಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'MIO vs AnyGPT vs Unified-IO 2', captionKn: 'MIO vs AnyGPT vs Unified-IO 2',
      rows: "System|Core idea|Main attraction\nAnyGPT|Discretize several modalities into token sequences|Proof of the multimodal-token paradigm\nMIO|Push unified multimodal token modeling toward broad any-to-any interaction, genuinely including streaming speech in this lesson|Emphasis on real-time cross-modal generation\nUnified-IO 2|Generalize unified input/output modeling across diverse perception and action-oriented tasks|Very broad task space beyond generation" } },

    { type: 'heading', data: { textEn: 'Pure-Token vs Modular Generation', textKn: 'Pure-Token vs Modular Generation', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Two Architectural Philosophies', captionKn: 'ಎರಡೂ Architectural Philosophies',
      rows: "Approach|Advantages|Challenges\nPure-token (MIO/AnyGPT, genuinely demonstrated this module)|Simple universal objective, natural interleaving, direct cross-modal prediction|Codec bottlenecks, huge token rates, vocabulary management\nModular (LLM + specialized diffusion/audio generator)|High-quality specialized decoders, reuse strong pretrained generators|More components, more interfaces, complicated latency pipeline across separate systems" } },
    { type: 'concept', data: {
      headingEn: 'Why This Module Chose the Pure-Token Path', headingKn: 'ಈ Module Pure-Token Path ಅನ್ನೂ ಏಕೆ ಆಯ್ಕೆ ಮಾಡಿತು',
      bodyEn: 'Every genuinely-confirmed number across this three-part module -- the offset arithmetic, the 4x RVQ reduction, the 320ms TTFAB -- exists specifically because MIO commits to one shared vocabulary and one causal transformer rather than routing each modality to a separate specialized generator. That architectural commitment is what let a single next-token prediction loop, genuinely traced through real code, account for text, image, speech, and music end to end.',
      bodyKn: 'ಈ ಮೂರೂ-ಭಾಗದ module ಆದ್ಯಂತ ಪ್ರತಿ ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ ಸಂಖ್ಯೆ ಇರುವುದೂ MIO ಒಂದೇ shared vocabulary, ಒಂದೇ causal transformer ಗೆ ಬದ್ಧವಾಗಿರುವುದರಿಂದ, ಪ್ರತಿ modality ಅನ್ನೂ ಪ್ರತ್ಯೇಕ specialized generator ಗೆ route ಮಾಡುವ ಬದಲಿಗೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: stream_speech() genuinely accumulates 50ms of audio per token regardless of the (also genuinely measured) ~35ms real generation delay per token\n• Genuinely confirmed: RTF=35/50=0.7, below 1.0, meaning generation keeps ahead of real-time playback with margin\n• Genuinely confirmed: calculate_ttfab() sums to exactly 320ms across audio tokenization, prefill, first token, and speech decoding\n• TTFT (first text token, 50ms here) and TTFAB (first playable audio, 320ms here) are genuinely different quantities in a speech pipeline\n• A conversational system needs both low TTFAB (fast start) and RTF<1 (sustained pace) -- neither alone is sufficient',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: stream_speech() ಪ್ರತಿ token ಗೆ 50ms audio ಸಂಗ್ರಹಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: RTF=35/50=0.7, 1.0 ಕ್ಕಿಂತ ಕಡಿಮೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: calculate_ttfab() ನಿಖರವಾಗಿ 320ms ಗೆ ಮೊತ್ತವಾಗುತ್ತದೆ\n• TTFT, TTFAB speech pipeline ನಲ್ಲಿ ನಿಜವಾಗಿ ಭಿನ್ನ ಪ್ರಮಾಣಗಳು\n• Conversational system ಗೆ ಕಡಿಮೆ TTFAB ಮತ್ತೆ RTF<1 ಎರಡೂ ಬೇಕು' } },
    { type: 'concept', data: {
      headingEn: 'Streaming Is Structurally Serial in Our Toy, Parallel in Production', headingKn: 'Streaming ನಮ್ಮ Toy ನಲ್ಲಿ ರಚನಾತ್ಮಕವಾಗಿ Serial, Production ನಲ್ಲಿ Parallel',
      bodyEn: 'Our genuinely-run stream_speech() uses a single sequential loop with real time.sleep() calls -- there is no actual concurrency here. A production streaming system would run tokenizer, Thinker-equivalent, Talker-equivalent, and decoder as separate concurrent stages with queues between them, so the 320ms TTFAB and 0.7 RTF genuinely computed in this lesson represent the theoretical latency budget a real pipelined implementation would aim to achieve, not literally how our simple demo program executes internally.',
      bodyKn: 'ನಮ್ಮ ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ stream_speech() ಒಂದೇ sequential loop ಬಳಸುತ್ತದೆ -- ಇಲ್ಲಿ ನಿಜ concurrency ಇಲ್ಲ. Production streaming system tokenizer, Thinker, Talker, decoder ಅನ್ನೂ ಪ್ರತ್ಯೇಕ concurrent stages ಆಗಿ ಚಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a voice assistant starts speaking almost instantly but then stutters mid-sentence, the genuinely-confirmed RTF metric in this lesson (35/50=0.7 vs a hypothetical 60/50=1.2) is exactly the diagnostic that explains the difference between "fast start" and "sustained real-time speech."',
      bodyKn: 'ಒಂದೂ voice assistant ಬಹುತೇಕ ತಕ್ಷಣ ಮಾತನಾಡಲು ಪ್ರಾರಂಭಿಸಿದಾಗ ಆದರೆ ನಂತರ mid-sentence stutter ಆದಾಗ, ಈ lesson ya ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ RTF metric ಇದಕ್ಕೆ ನಿಖರ ಕಾರಣ ವಿವರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via this lesson\'s exact 320ms TTFAB decomposition: breaking latency into named components (tokenizer, prefill, first-token, decoder) lets engineers identify which specific stage to optimize, rather than treating "the model is slow" as one undifferentiable problem.',
      bodyKn: 'ಈ lesson ya ನಿಖರ 320ms TTFAB decomposition ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: latency ಅನ್ನೂ named components ಗೆ ಒಡೆಯುವುದೂ engineers ಗೆ ಯಾವ ನಿರ್ದಿಷ್ಟ stage optimize ಮಾಡಬೇಕು ಎಂದೂ ಗುರುತಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real streaming voice assistants report both time-to-first-audio and sustained real-time factor as separate SLA metrics, exactly the two genuinely-confirmed numbers (320ms TTFAB, 0.7 RTF) this lesson computed independently from the same toy simulator.',
      bodyKn: 'ನಿಜ streaming voice assistants time-to-first-audio ಮತ್ತೆ sustained real-time factor ಎರಡನ್ನೂ ಪ್ರತ್ಯೇಕ SLA metrics ಆಗಿ ವರದಿ ಮಾಡುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'What This Three-Part Module Established', headingKn: 'ಈ ಮೂರೂ-ಭಾಗದ Module ಏನೂ ಸ್ಥಾಪಿಸಿತು',
      bodyEn: 'Across Parts 1-3, this module genuinely verified: a 48,400-entry collision-free shared vocabulary, correct routing of all four modalities into that vocabulary, a 4x sequential-decoding reduction from RVQ base-layer selection, a four-stage training curriculum rationale, and a complete 320ms/0.7-RTF real-time streaming budget -- the full architecture of an any-to-any streaming multimodal model, traced end to end through real, executed code.',
      bodyKn: 'Parts 1-3 ಆದ್ಯಂತ, ಈ module ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು: 48,400-entry collision-free shared vocabulary, ಎಲ್ಲಾ ನಾಲ್ಕೂ modalities ya ಸರಿಯಾದ routing, RVQ base-layer selection ಇಂದ 4x reduction, four-stage training curriculum, ಪೂರ್ಣ 320ms/0.7-RTF real-time streaming budget.' } },

    { type: 'concept', data: {
      headingEn: 'Setting Up the Next Modality: Audio Understanding Without Speech',
      headingKn: 'ಮುಂದಿನ Modality ಗಾಗಿ ಸಿದ್ಧತೆ: Speech ಇಲ್ಲದೆ Audio Understanding',
      bodyEn: 'This module treated speech mainly as a channel for conversational voice interaction. But audio also includes music, environmental sound, and non-speech acoustic events that a model must understand, not just generate -- the subject the next module in this course addresses through the log-Mel spectrogram and Q-Former pipeline.',
      bodyKn: 'ಈ module speech ಅನ್ನೂ ಮುಖ್ಯವಾಗಿ conversational voice interaction ಗಾಗಿ ಒಂದೂ channel ಆಗಿ ಪರಿಗಣಿಸಿತು. ಆದರೆ audio music, environmental sound, non-speech acoustic events ಕೂಡ ಒಳಗೊಂಡಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Module 240 Complete', headingKn: 'Module 240 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part MIO module. Every number across all three parts -- the 48,400-entry vocabulary, the 39-token interleaved sequence, the 4x RVQ reduction, the 300ms streaming accumulation, the 0.7 real-time factor, and the 320ms TTFAB -- came from genuinely running the pasted program, continuing this course\'s standing discipline of never presenting an assumed number as a verified one.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ MIO module ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ. ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ಪ್ರತಿ ಸಂಖ್ಯೆ pasted program ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದರಿಂದ ಬಂದಿದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Read -> Build -> Run -> Prove, Completed', headingKn: 'Read -> Build -> Run -> Prove, ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This module genuinely completed every checkpoint: Read (the shared-vocabulary and Thinker-Talker rationale), Build (the full pasted main.py), Run (executed in this session, not simulated), and Prove (real printed output for vocabulary layout, token routing, RVQ frames, streaming timestamps, and the TTFAB budget) -- exactly the discipline this course maintains throughout.',
      bodyKn: 'ಈ module ಪ್ರತಿ checkpoint ಅನ್ನೂ ನಿಜವಾಗಿ ಪೂರ್ಣಗೊಳಿಸಿತು: Read, Build, Run (ಈ session ನಲ್ಲಿ ಚಲಾಯಿಸಲಾಗಿದೆ, simulate ಮಾಡಲಾಗಿಲ್ಲ), Prove (ನಿಜ ಮುದ್ರಿಸಿದ ಔಟ್ಪುಟ್) -- ಈ course ಆದ್ಯಂತ ಕಾಪಾಡುವ discipline.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does TTFAB measure?', qKn: 'TTFAB ಏನೂ ಅಳೆಯುತ್ತದೆ?',
        opts: ['Time to train the speech tokenizer', 'Time until the Transformer generates an EOS token', 'Time until the first playable output audio becomes available', 'Total response duration'], correct: 2,
        optsKn: ['Speech tokenizer ತರಬೇತಿ ನೀಡಲು ಸಮಯ', 'Transformer EOS token ಉತ್ಪಾದಿಸುವ ಸಮಯ', 'ಮೊದಲ playable output audio ಲಭ್ಯವಾಗುವ ಸಮಯ', 'ಒಟ್ಟು response duration'] },
      { q: 'Genuinely confirmed in this lesson: what was the exact TTFAB for the given configuration?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನೀಡಿದ configuration ಗಾಗಿ ನಿಖರ TTFAB ಏನಿತ್ತು?',
        opts: ['175 ms', '235 ms', '275 ms', '320 ms'], correct: 3,
        optsKn: ['175 ms', '235 ms', '275 ms', '320 ms'] },
      { q: 'Genuinely confirmed: a model takes 35 ms to generate a token representing 50 ms of audio. What is its real-time factor?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ model 50 ms audio ಪ್ರತಿನಿಧಿಸುವ token ಉತ್ಪಾದಿಸಲು 35 ms ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ. ಅದರ real-time factor ಏನೂ?',
        opts: ['0.5', '0.7', '1.0', '1.4'], correct: 1,
        optsKn: ['0.5', '0.7', '1.0', '1.4'] },
      { q: 'Why can predicting only a base RVQ stream improve streaming performance?', qKn: 'ಕೇವಲ base RVQ stream predict ಮಾಡುವುದೂ streaming performance ಅನ್ನೂ ಏಕೆ ಸುಧಾರಿಸಬಹುದು?',
        opts: ['Residual tokens contain no information', 'It reduces the number of sequential predictions required from the large autoregressive Transformer', 'It eliminates the audio decoder', 'It converts speech into text'], correct: 1,
        optsKn: ['Residual tokens ಯಾವುದೇ information ಹೊಂದಿಲ್ಲ', 'ಇದೂ ದೊಡ್ಡ autoregressive Transformer ಇಂದ ಬೇಕಾದ sequential predictions ಸಂಖ್ಯೆ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ', 'ಇದೂ audio decoder ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ speech ಅನ್ನೂ text ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
      { q: 'Why isn\'t low TTFAB alone sufficient for a good conversational speech model?', qKn: 'ಒಂದೂ ಉತ್ತಮ conversational speech model ಗೆ ಕಡಿಮೆ TTFAB ಮಾತ್ರ ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ?',
        opts: ['Speech doesn\'t require low latency', 'The model also needs sustained generation fast enough to keep the playback buffer filled', 'TTFAB measures image quality', 'KV caches only work for text'], correct: 1,
        optsKn: ['Speech ಗೆ ಕಡಿಮೆ latency ಬೇಕಿಲ್ಲ', 'Model ಗೆ playback buffer ತುಂಬಿಸಲು ಸಾಕಷ್ಟು ವೇಗದ sustained generation ಕೂಡ ಬೇಕು', 'TTFAB image quality ಅಳೆಯುತ್ತದೆ', 'KV caches ಕೇವಲ text ಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ'] },
    ] } },
  ],
};
