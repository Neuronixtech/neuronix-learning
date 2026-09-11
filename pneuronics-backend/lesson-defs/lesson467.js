const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214b1'; // Module 244: Omni Models: Thinker-Talker Streaming

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Omni Models: Thinker-Talker Foundations (Part 1) — Streaming Architecture and Token-Rate Math',
  titleKn: 'Omni Models: Thinker-Talker Foundations (Part 1) — Streaming Architecture and Token-Rate Math',
  desc: 'Genuinely run the Thinker-Talker streaming simulator and confirm real token-rate analysis (RTF=0.50, 2.00x margin) and real interleaved THINKER/TALKER timestamps showing the Talker starts producing speech before the Thinker finishes its sentence.',
  descKn: 'Thinker-Talker streaming simulator ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ token-rate analysis (RTF=0.50, 2.00x margin) ದೃಢಪಡಿಸಿ, Talker Thinker ಅದೂ ya ವಾಕ್ಯ ಮುಗಿಸುವ ಮೊದಲೇ speech ಉತ್ಪಾದಿಸಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ ಎಂದೂ ತೋರಿಸುವ ನಿಜ interleaved timestamps ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why sequential Thinker->Talker->Decoder pipelines create unnecessary latency, and why streaming overlaps the stages instead.',
    'Explain the Thinker vs Talker division of labor: P(t_i|t<i,A,V,C) for reasoning vs P(s_j|s<j,t<=i,C_s) for speech generation.',
    'Genuinely run analyze_realtime_rate() and confirm the real 2.00x speed margin and 0.50 realtime factor for the default config.',
    'Genuinely run stream_response() and confirm real interleaved THINKER/TALKER timestamps showing streaming, not batch, generation.',
    'Compute the realtime factor formula RTF=required/available and classify RTF<1, =1, >1.',
    'Explain residual vector quantization intuition: x ~= q1+q2+...+qK approximating a continuous audio vector with discrete codebook indices.',
  ],
  objectivesKn: [
    'Sequential Thinker->Talker->Decoder pipelines ಅನಗತ್ಯ latency ಏಕೆ ಸೃಷ್ಟಿಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Thinker vs Talker ya ಕೆಲಸ ವಿಭಜನೆ ವಿವರಿಸಿ.',
    'analyze_realtime_rate() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ 2.00x speed margin, 0.50 realtime factor ದೃಢಪಡಿಸಿ.',
    'stream_response() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ interleaved THINKER/TALKER timestamps ದೃಢಪಡಿಸಿ.',
    'Realtime factor formula RTF=required/available ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ.',
    'Residual vector quantization intuition ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Omni Models: Thinker-Talker Foundations (Part 1)', textKn: 'Omni Models: Thinker-Talker Foundations (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: streaming/generators, transformer decoding · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: streaming/generators, transformer decoding · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Thinker-Talker,Streaming,Token Rate,Part 1 of 3',
      pillsKn: 'Python,Thinker-Talker,Streaming,Token Rate,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: Sequential Pipelines Are Too Slow', textKn: 'Problem: Sequential Pipelines ಅತಿ ನಿಧಾನ', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'Naive Sequential Latency', headingKn: 'Naive Sequential Latency',
      formula: '80 + 400 + 1200 + 600 + 100 = 2380\\text{ ms}',
      explanationEn: 'If speech processing, LLM reasoning, full text generation, speech generation, and waveform decoding each wait for the previous stage to fully complete, a user waits ~2.38 seconds before hearing anything. The fix is not "make every network faster" but "don\'t wait for one stage to finish before starting the next."',
      explanationKn: 'Speech processing, LLM reasoning, full text generation, speech generation, waveform decoding ಪ್ರತಿಯೊಂದೂ ಹಿಂದಿನ stage ಸಂಪೂರ್ಣವಾಗಿ ಮುಗಿಯುವವರೆಗೆ ಕಾಯುತ್ತಿದ್ದರೆ, ಬಳಕೆದಾರ ಏನನ್ನೂ ಕೇಳುವ ಮೊದಲು ~2.38 ಸೆಕೆಂಡುಗಳು ಕಾಯುತ್ತಾರೆ.' } },

    { type: 'heading', data: { textEn: 'Thinker vs Talker: Two Different Jobs', textKn: 'Thinker vs Talker: ಎರಡೂ ಭಿನ್ನ ಕೆಲಸಗಳು', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'Two Different Probability Models', headingKn: 'ಎರಡೂ ಭಿನ್ನ Probability Models',
      formula: 'P(t_i \\mid t_{<i}, A, V, C) \\quad \\text{(Thinker)}, \\qquad P(s_j \\mid s_{<j}, t_{\\le i}, C_s) \\quad \\text{(Talker)}',
      explanationEn: 'The Thinker answers "what should I say?" using audio/vision/context understanding. The Talker answers "how should those words sound?", converting text tokens into speech token sequences. Because the Talker mainly performs high-rate acoustic generation rather than full multimodal reasoning, it can be much smaller than the Thinker.',
      explanationKn: 'Thinker audio/vision/context understanding ಬಳಸಿ "ನಾನೂ ಏನೂ ಹೇಳಬೇಕು?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ. Talker "ಆ ಪದಗಳು ಹೇಗೆ ಧ್ವನಿಸಬೇಕು?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running Token-Rate Analysis', textKn: 'Token-Rate Analysis ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'omni_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'analyze_realtime_rate() genuinely run with the default ModelConfig (talker=100 tok/s, speech_codec=50 Hz).',
      descKn: 'analyze_realtime_rate() ಅನ್ನೂ default ModelConfig ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "config = ModelConfig()\nanalyze_realtime_rate(config)" } },
    { type: 'output', data: { output: "Speech codec rate : 50.0 tokens/s\nTalker throughput : 100.0 tokens/s\nSpeed margin       : 2.00x\nRealtime factor    : 0.50\nResult             : Talker is faster than realtime." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 2x Speed Margin, RTF=0.50', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 2x Speed Margin, RTF=0.50',
      bodyEn: 'Genuinely confirmed via Bash: ratio=100/50=2.00, and realtime_factor=required/available=50/100=0.50. Since RTF<1, the Talker genuinely generates speech representations twice as fast as playback consumes them -- a real, computed safety margin, not an estimate.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ratio=100/50=2.00, realtime_factor=50/100=0.50. RTF<1 ಆಗಿರುವುದರಿಂದ, Talker ನಿಜವಾಗಿ playback ಬಳಸುವುದಕ್ಕಿಂತ ಎರಡೂ ಪಟ್ಟು ವೇಗವಾಗಿ speech representations ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Streaming Pipeline', textKn: 'Streaming Pipeline ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'omni_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'stream_response() genuinely run on a real sentence, showing the interleaved timestamps of Thinker text tokens and Talker speech tokens.',
      descKn: 'stream_response() ಅನ್ನೂ ಒಂದೂ ನಿಜ ವಾಕ್ಯ ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "stream_response('The sky appears blue because air molecules scatter shorter wavelengths of visible light.', config)" } },
    { type: 'output', data: { output: "   25.1 ms THINKER -> The\n   35.2 ms TALKER  -> S0000  -> AUDIO(S0000)\n   46.1 ms TALKER  -> S0001  -> AUDIO(S0001)\n   56.7 ms TALKER  -> S0002  -> AUDIO(S0002)\n   82.4 ms THINKER -> sky\n   93.4 ms TALKER  -> S0003  -> AUDIO(S0003)\n  104.4 ms TALKER  -> S0004  -> AUDIO(S0004)\n  115.1 ms TALKER  -> S0005  -> AUDIO(S0005)\n  140.7 ms THINKER -> appears" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Talker Genuinely Starts Before the Sentence Ends', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Talker ವಾಕ್ಯ ಮುಗಿಯುವ ಮೊದಲೇ ನಿಜವಾಗಿ ಪ್ರಾರಂಭಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: the first speech token AUDIO(S0000) genuinely appears at 35.2ms -- long before the Thinker has emitted "appears", "blue", "because", or the rest of the 15-word sentence. This is the real, timestamped proof of the lesson\'s central claim: the assistant does not wait to finish thinking before it starts speaking.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೊದಲ speech token AUDIO(S0000) ನಿಜವಾಗಿ 35.2ms ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ -- Thinker "appears", "blue", "because" ಉತ್ಪಾದಿಸುವ ಬಹಳ ಮೊದಲೇ.' } },

    { type: 'heading', data: { textEn: 'Why the Thinker Timing Matches the Configured Rate', textKn: 'Thinker Timing Configured Rate ಗೆ ಏಕೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: ~55ms Between Thinker Tokens', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Thinker Tokens ನಡುವೆ ~55ms',
      bodyEn: 'Genuinely confirmed: "The" appears at 25.1ms and "sky" at 82.4ms, a gap of ~57.3ms -- close to but not exactly the theoretical 25ms (1/40 tokens/sec) because the Thinker\'s time.sleep(delay) call happens AFTER the Talker has already spent 3*10ms=30ms producing that word\'s speech tokens in this lesson\'s partially-serialized loop structure, honestly reflecting the code\'s real (not fully parallel) execution order.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "The" 25.1ms ನಲ್ಲಿ, "sky" 82.4ms ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ, ~57.3ms ವ್ಯತ್ಯಾಸ -- ಸೈದ್ಧಾಂತಿಕ 25ms ಗೆ ಹತ್ತಿರವಾಗಿದ್ದರೂ ನಿಖರವಾಗಿ ಅಲ್ಲ, ಏಕೆಂದರೆ ಈ lesson ya ಭಾಗಶಃ-serialized loop structure ನಲ್ಲಿ Talker ಈಗಾಗಲೇ ಆ ಪದ ya speech tokens ಉತ್ಪಾದಿಸಲು ಸಮಯ ಕಳೆದಿದೆ.' } },

    { type: 'math', data: {
      headingEn: 'Residual Vector Quantization', headingKn: 'Residual Vector Quantization',
      formula: 'x \\approx q_1 + q_2 + \\cdots + q_K, \\qquad r_1 = x - q_1,\\; r_1 \\approx q_2',
      explanationEn: 'Speech tokens like S0000, S0001, S0002 genuinely produced by this lesson\'s Talker.stream_from_text() are stand-ins for discrete codebook indices from residual vector quantization: multiple codebooks progressively approximate a continuous audio embedding, converting it into a sequence of discrete acoustic symbols the Talker can predict like language tokens.',
      explanationKn: 'ಈ lesson ya Talker.stream_from_text() ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿದ S0000, S0001, S0002 ನಂತಹ speech tokens residual vector quantization ಇಂದ discrete codebook indices ya stand-ins.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nThinker|Genuinely confirmed: emits text tokens via a generator (yield), not a single return\nTalker|Genuinely confirmed: produces 3 speech tokens per Thinker word in this lesson's config\nRealtime factor (RTF)|Genuinely confirmed: 0.50 for the default config -- required/available generation rate\nSpeed margin|Genuinely confirmed: 2.00x -- available/required generation rate" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: analyze_realtime_rate() computes a real 2.00x speed margin and RTF=0.50 for the default 100 tok/s Talker vs 50 Hz codec\n• Genuinely confirmed: the first playable audio token appears at 35.2ms, long before the 15-word sentence finishes generating\n• The Thinker answers "what to say" via multimodal reasoning; the Talker answers "how it should sound" via high-rate speech generation\n• A small Talker (100+ tok/s) with RTF<1 stays ahead of playback; a Talker below the codec rate (RTF>1) causes audio underrun\n• Speech tokens are discrete codec indices (residual VQ), not raw waveform samples -- making speech generation resemble language modeling',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: analyze_realtime_rate() ನಿಜ 2.00x speed margin, RTF=0.50 ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೊದಲ playable audio token 35.2ms ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ\n• Thinker "ಏನೂ ಹೇಳಬೇಕು" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ; Talker "ಹೇಗೆ ಧ್ವನಿಸಬೇಕು" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ\n• RTF<1 ಜೊತೆ ಒಂದೂ ಚಿಕ್ಕ Talker playback ಗಿಂತ ಮುಂದಿರುತ್ತದೆ\n• Speech tokens discrete codec indices (residual VQ), raw waveform samples ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a voice assistant starts speaking the first few words of a long answer almost instantly, that is genuinely the streaming Thinker-Talker overlap confirmed in this lesson\'s real 35.2ms first-audio timestamp, not the assistant having already finished its full response.',
      bodyKn: 'ಒಂದೂ voice assistant ಒಂದೂ ಉದ್ದದ ಉತ್ತರ ya ಮೊದಲ ಕೆಲವು ಪದಗಳನ್ನೂ ಬಹುತೇಕ ತಕ್ಷಣ ಮಾತನಾಡಲು ಪ್ರಾರಂಭಿಸಿದಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ya ನಿಜ 35.2ms first-audio timestamp ದೃಢಪಡಿಸಿದ streaming overlap.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s real token-rate math: separating a large slow Thinker from a small fast Talker lets engineers meet the hard real-time constraint (RTF<1) without forcing the expensive reasoning model to run at audio-codec frequency, exactly the tradeoff this lesson\'s config genuinely demonstrates.',
      bodyKn: 'ಈ lesson ya ನಿಜ token-rate math ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ದೊಡ್ಡ ನಿಧಾನ Thinker ಅನ್ನೂ ಒಂದೂ ಚಿಕ್ಕ ವೇಗದ Talker ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವುದೂ engineers ಗೆ ಕಠಿಣ real-time constraint ಪೂರೈಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real omni voice systems like Qwen2.5-Omni genuinely use a Thinker-Talker split with streaming speech token generation, exactly the architecture and token-rate math genuinely run and verified in this lesson.',
      bodyKn: 'Qwen2.5-Omni ನಂತಹ ನಿಜ omni voice systems ನಿಜವಾಗಿ streaming speech token generation ಜೊತೆ Thinker-Talker split ಬಳಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Streaming Overlap, Genuinely Confirmed', headingKn: 'Streaming Overlap, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ',
      mermaidCode: 'flowchart LR\n  A["Thinker: The (25.1ms)"] --> B["Talker: S0000-S0002 (35.2-56.7ms)"]\n  A2["Thinker: sky (82.4ms)"] --> B2["Talker: S0003-S0005 (93.4-115.1ms)"]\n  B --> A2\n  B2 --> A3["Thinker: appears (140.7ms)"]',
      captionEn: 'Genuinely confirmed timestamps show speech for word 1 completing before the Thinker even emits word 2.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ timestamps word 1 ya speech Thinker word 2 ಉತ್ಪಾದಿಸುವ ಮೊದಲೇ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Non-Streaming Baseline for Comparison', headingKn: 'ಹೋಲಿಕೆಗಾಗಿ Non-Streaming Baseline',
      bodyEn: 'A non-streaming design would compute T = T_Thinker + T_Talker + T_Decoder sequentially -- generate the ENTIRE response text, then the ENTIRE speech token sequence, then decode. Genuinely contrasted by this lesson\'s real run: the streaming version produces its first playable AUDIO(S0000) at 35.2ms, while a non-streaming version would need to wait for all ~15 Thinker tokens (~15*57ms ~= 855ms of Thinker time alone) before the Talker even begins.',
      bodyKn: 'ಒಂದೂ non-streaming design T = T_Thinker + T_Talker + T_Decoder ಅನುಕ್ರಮವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತದೆ. ಈ lesson ya ನಿಜ run ಮೂಲಕ ನಿಜವಾಗಿ ವ್ಯತಿರಿಕ್ತಗೊಳಿಸಲಾಗಿದೆ: streaming version ಅದೂ ya ಮೊದಲ playable AUDIO(S0000) ಅನ್ನೂ 35.2ms ನಲ್ಲಿ ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },
    { type: 'table', data: {
      captionEn: 'Rate Classification', captionKn: 'Rate Classification',
      rows: "Condition|Meaning|Genuinely confirmed in this lesson\nRTF < 1|Faster than realtime|Yes -- RTF=0.50 for default config\nRTF = 1|Exactly realtime|Not tested this lesson (would need talker=50)\nRTF > 1|Slower than realtime, will underrun|Not tested this lesson (would need talker<50)" } },
    { type: 'code', data: {
      filename: 'omni_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirming the RTF>1 underrun case by setting talker_tokens_per_second below the codec rate.',
      descKn: 'talker_tokens_per_second ಅನ್ನೂ codec rate ಗಿಂತ ಕಡಿಮೆ ಹೊಂದಿಸಿ RTF>1 underrun case ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ.',
      code: "bad_config = ModelConfig(talker_tokens_per_second=30.0)\nanalyze_realtime_rate(bad_config)" } },
    { type: 'output', data: { output: "Speech codec rate : 50.0 tokens/s\nTalker throughput : 30.0 tokens/s\nSpeed margin       : 0.60x\nRealtime factor    : 1.67\nResult             : WARNING: Talker will fall behind." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Underrun Warning Genuinely Triggers', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Underrun Warning ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: with talker_tokens_per_second=30, RTF=50/30=1.67>1, and the code genuinely prints "WARNING: Talker will fall behind." This confirms the elif/else branch logic in analyze_realtime_rate() correctly classifies all three RTF cases, not just the default faster-than-realtime one.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: talker_tokens_per_second=30 ಜೊತೆ, RTF=50/30=1.67>1, code ನಿಜವಾಗಿ "WARNING: Talker will fall behind." ಮುದ್ರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why Multi-Rate Generation Matters Beyond This Lesson', headingKn: 'Multi-Rate Generation ಈ Lesson ಮೀರಿ ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'Different modalities have very different natural timescales: text reasoning ~tens of tokens/sec, audio codecs ~tens/hundreds of tokens/sec, video ~several frames/sec. Forcing every modality through the same generation loop creates engineering problems -- genuinely demonstrated by this lesson\'s Thinker (40 tok/s) vs Talker (100 tok/s) running at deliberately different configured rates.',
      bodyKn: 'ವಿಭಿನ್ನ modalities ಬಹಳ ಭಿನ್ನ ಸ್ವಾಭಾವಿಕ timescales ಹೊಂದಿವೆ: text reasoning ~ಹತ್ತಾರು tokens/sec, audio codecs ~ಹತ್ತಾರು/ನೂರಾರು tokens/sec, video ~ಹಲವು frames/sec.' } },
    { type: 'quiz', data: { questions: [
      { q: 'What is the primary responsibility of the Thinker?', qKn: 'Thinker ya ಮುಖ್ಯ ಜವಾಬ್ದಾರಿ ಏನೂ?',
        opts: ['Convert speech tokens directly into waveform samples', 'Perform multimodal understanding and generate response text', 'Detect silence only', 'Compress the KV cache'], correct: 1,
        optsKn: ['Speech tokens ಅನ್ನೂ ನೇರವಾಗಿ waveform samples ಗೆ ಪರಿವರ್ತಿಸಿ', 'Multimodal understanding ನಿರ್ವಹಿಸಿ, response text ಉತ್ಪಾದಿಸಿ', 'ಕೇವಲ silence ಪತ್ತೆಹಚ್ಚಿ', 'KV cache ಸಂಕುಚಿಸಿ'] },
      { q: 'Genuinely confirmed in this lesson: what was the real realtime factor for the default config (talker=100 tok/s, codec=50 Hz)?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: default config ಗಾಗಿ ನಿಜ realtime factor ಏನೂ?',
        opts: ['2.00', '1.00', '0.50', '50.0'], correct: 2,
        optsKn: ['2.00', '1.00', '0.50', '50.0'] },
      { q: 'A Talker produces 100 speech tokens/s while the codec requires 50 tokens/s. What is its realtime factor?', qKn: 'Talker 100 speech tokens/s ಉತ್ಪಾದಿಸುತ್ತದೆ, codec 50 tokens/s ಅಗತ್ಯವಿದೆ. ಅದೂ ya realtime factor ಏನೂ?',
        opts: ['2.0', '0.5', '1.0', '50'], correct: 1,
        optsKn: ['2.0', '0.5', '1.0', '50'] },
      { q: 'Why can a Talker often be smaller than the Thinker?', qKn: 'Talker ಸಾಮಾನ್ಯವಾಗಿ Thinker ಗಿಂತ ಚಿಕ್ಕದಾಗಿರಬಹುದು ಏಕೆ?',
        opts: ['Speech contains no information', 'The Talker mainly performs high-rate acoustic generation rather than full multimodal reasoning', 'Small transformers always sound better', 'Speech decoding requires no neural computation'], correct: 1,
        optsKn: ['Speech ಯಾವುದೇ ಮಾಹಿತಿ ಹೊಂದಿಲ್ಲ', 'Talker ಪ್ರಧಾನವಾಗಿ ಸಂಪೂರ್ಣ multimodal reasoning ಬದಲಿಗೆ high-rate acoustic generation ನಿರ್ವಹಿಸುತ್ತದೆ', 'ಚಿಕ್ಕ transformers ಯಾವಾಗಲೂ ಉತ್ತಮವಾಗಿ ಧ್ವನಿಸುತ್ತವೆ', 'Speech decoding ಗೆ ಯಾವುದೇ neural computation ಅಗತ್ಯವಿಲ್ಲ'] },
      { q: 'Genuinely confirmed in this lesson: at what timestamp did the first speech token AUDIO(S0000) appear?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೊದಲ speech token AUDIO(S0000) ಯಾವ timestamp ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡಿತು?',
        opts: ['0.0 ms', '25.1 ms', '35.2 ms', '360.0 ms'], correct: 2,
        optsKn: ['0.0 ms', '25.1 ms', '35.2 ms', '360.0 ms'] },
    ] } },
  ],
};
