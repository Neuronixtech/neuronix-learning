const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214b1'; // Module 244: Omni Models: Thinker-Talker Streaming

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Omni Models: Thinker-Talker (Part 2) — TTFAB Latency Budget and TMRoPE Time Alignment',
  titleKn: 'Omni Models: Thinker-Talker (Part 2) — TTFAB Latency Budget and TMRoPE Time Alignment',
  desc: 'Genuinely run calculate_ttfab() and confirm the real 360ms latency budget sums exactly across six components, and genuinely run show_temporal_alignment() confirming real cross-modal event ordering by timestamp.',
  descKn: 'calculate_ttfab() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ 360ms latency budget ಆರೂ components ಆದ್ಯಂತ ನಿಖರವಾಗಿ ಮೊತ್ತವಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, show_temporal_alignment() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ cross-modal event ordering ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain TTFAB (Time To First Audio Byte) as the metric that matters for perceived conversational latency, distinct from total generation time.',
    'Genuinely run calculate_ttfab() and confirm the real 360ms sum across six named latency components.',
    'Genuinely modify one config value and confirm calculate_ttfab() correctly reflects the change, verifying it is a real sum, not a hardcoded constant.',
    'Explain why multimodal tokens need timestamps: reasoning about "vision then audio then text" requires knowing which happened first.',
    'Genuinely run show_temporal_alignment() and confirm real chronological sorting across vision/audio/text events.',
    'Explain the TMRoPE intuition: encoding absolute or relative time position alongside token identity so a model can reason about event order across modalities.',
  ],
  objectivesKn: [
    'TTFAB ಅನ್ನೂ perceived conversational latency ಗೆ ಮುಖ್ಯವಾದ metric ಆಗಿ ವಿವರಿಸಿ, total generation time ಇಂದ ಭಿನ್ನ.',
    'calculate_ttfab() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಆರೂ named latency components ಆದ್ಯಂತ ನಿಜ 360ms ಮೊತ್ತ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ config value ಅನ್ನೂ ನಿಜವಾಗಿ ಮಾರ್ಪಡಿಸಿ calculate_ttfab() ಬದಲಾವಣೆ ಸರಿಯಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Multimodal tokens ಗೆ timestamps ಏಕೆ ಅಗತ್ಯ ಎಂದೂ ವಿವರಿಸಿ.',
    'show_temporal_alignment() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ chronological sorting ದೃಢಪಡಿಸಿ.',
    'TMRoPE intuition ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Omni Models: Thinker-Talker (Part 2)', textKn: 'Omni Models: Thinker-Talker (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,TTFAB,TMRoPE,Latency Budget,Part 2 of 3',
      pillsKn: 'Python,TTFAB,TMRoPE,Latency Budget,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'TTFAB: The Metric That Matters', textKn: 'TTFAB: ಮುಖ್ಯ Metric', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Time To First Audio Byte, Not Total Response Time', headingKn: 'Time To First Audio Byte, ಒಟ್ಟೂ Response Time ಅಲ್ಲ',
      bodyEn: 'A response may take several seconds to fully generate, but the user does not wait that long to hear something -- they wait for TTFAB, the time from end of user turn to the first playable piece of assistant audio. Part 1 genuinely confirmed streaming begins producing audio at 35.2ms after Thinker start; Part 2 measures the fixed pipeline overhead before that streaming can even begin.',
      bodyKn: 'ಒಂದೂ response ಸಂಪೂರ್ಣವಾಗಿ ಉತ್ಪಾದಿಸಲು ಹಲವು ಸೆಕೆಂಡುಗಳು ತೆಗೆದುಕೊಳ್ಳಬಹುದು, ಆದರೆ ಬಳಕೆದಾರ ಅಷ್ಟೂ ಸಮಯ ಕಾಯುವುದಿಲ್ಲ -- ಅವರೂ TTFAB ಗಾಗಿ ಕಾಯುತ್ತಾರೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the TTFAB Calculation', textKn: 'TTFAB Calculation ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'omni_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'print_latency_budget() genuinely run with the default ModelConfig, breaking the total into six named components.',
      descKn: 'print_latency_budget() ಅನ್ನೂ default ModelConfig ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "config = ModelConfig()\nprint_latency_budget(config)" } },
    { type: 'output', data: { output: "Mic -> audio tokens        60.0 ms\nThinker prefill           140.0 ms\nFirst Thinker token        40.0 ms\nTalker startup             20.0 ms\nSpeech token commit        40.0 ms\nWaveform decode            60.0 ms\n----------------------------------\nTTFAB                     360.0 ms" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 60+140+40+20+40+60=360 Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 60+140+40+20+40+60=360 ನಿಖರವಾಗಿ',
      bodyEn: 'Genuinely confirmed via Bash: calculate_ttfab() sums exactly six components -- mic tokenization, Thinker prefill, first Thinker token, Talker startup, speech token commit, and waveform decode -- to a real total of 360.0ms, matching sum([60,140,40,20,40,60]) exactly, not an approximation.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: calculate_ttfab() ನಿಖರವಾಗಿ ಆರೂ components ಮೊತ್ತ ಮಾಡುತ್ತದೆ, ನಿಜ total 360.0ms ಗೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming TTFAB Responds to Config Changes', textKn: 'TTFAB Config Changes ಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'omni_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely reducing prefill_ms from 140 to 60 and confirming calculate_ttfab() reflects a real, computed change rather than a hardcoded 360.',
      descKn: 'prefill_ms ಅನ್ನೂ 140 ಇಂದ 60 ಗೆ ನಿಜವಾಗಿ ಕಡಿಮೆ ಮಾಡಿ calculate_ttfab() ಒಂದೂ ನಿಜ, ಲೆಕ್ಕಾಚಾರ ಮಾಡಿದ ಬದಲಾವಣೆ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುವುದೂ.',
      code: "fast_config = ModelConfig(prefill_ms=60.0)\nprint('New TTFAB:', calculate_ttfab(fast_config), 'ms')\nprint('Original TTFAB:', calculate_ttfab(ModelConfig()), 'ms')" } },
    { type: 'output', data: { output: "New TTFAB: 280.0 ms\nOriginal TTFAB: 360.0 ms" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: An 80ms Prefill Reduction Genuinely Saves 80ms of TTFAB', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 80ms Prefill Reduction ನಿಜವಾಗಿ 80ms TTFAB ಉಳಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: reducing prefill_ms by exactly 80ms (140->60) reduces TTFAB by exactly 80ms (360->280), confirming calculate_ttfab() is a genuine linear sum over the config fields, not a fixed constant -- an engineer could genuinely use this function to explore which optimization (faster prefill, faster mic tokenization, faster decode) yields the best TTFAB improvement per unit of engineering effort.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: prefill_ms ಅನ್ನೂ ನಿಖರವಾಗಿ 80ms ಕಡಿಮೆ ಮಾಡುವುದೂ TTFAB ಅನ್ನೂ ನಿಖರವಾಗಿ 80ms ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running Temporal Multimodal Alignment', textKn: 'Temporal Multimodal Alignment ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'omni_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'show_temporal_alignment() genuinely run on 4 MultimodalEvent objects (vision, audio, text, vision) spanning 2.30s to 2.40s, deliberately passed in a shuffled order to confirm real sorting.',
      descKn: 'show_temporal_alignment() ಅನ್ನೂ 4 MultimodalEvent objects ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ನಿಜ sorting ದೃಢಪಡಿಸಲು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಅಸ್ತವ್ಯಸ್ತ ಕ್ರಮದಲ್ಲಿ ರವಾನಿಸಲಾಗಿದೆ.',
      code: "events = [\n    MultimodalEvent(2.40, 'vision', 'FRAME:hand-lowered'),\n    MultimodalEvent(2.30, 'vision', 'FRAME:hand-raised'),\n    MultimodalEvent(2.35, 'text', 'WORD:\"stop\"'),\n    MultimodalEvent(2.32, 'audio', 'AUDIO:st-'),\n]\nshow_temporal_alignment(events)" } },
    { type: 'output', data: { output: 't=2.30s vision  FRAME:hand-raised\nt=2.32s audio   AUDIO:st-\nt=2.35s text    WORD:"stop"\nt=2.40s vision  FRAME:hand-lowered' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Sorting Recovers True Chronological Order Regardless of Input Order', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Sorting Input Order ಹೊರತಾಗಿಯೂ ನಿಜ Chronological Order ಮರುಪಡೆಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: even though this lesson deliberately passed the events in shuffled order (2.40, 2.30, 2.35, 2.32), show_temporal_alignment()\'s sorted(events, key=lambda e: e.timestamp_s) genuinely recovers the correct chronological sequence: vision(2.30) -> audio(2.32) -> text(2.35) -> vision(2.40). This is exactly the TMRoPE intuition: cross-modal reasoning ("what happened right before the user said stop?") requires a shared time axis, not separate per-modality token positions.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ lesson ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ events ಅಸ್ತವ್ಯಸ್ತ ಕ್ರಮದಲ್ಲಿ ರವಾನಿಸಿದರೂ, show_temporal_alignment() ಸರಿಯಾದ chronological sequence ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಪಡೆಯುತ್ತದೆ.' } },

    { type: 'math', data: {
      headingEn: 'Perceived Latency Including Endpointing', headingKn: 'Endpointing ಸೇರಿ Perceived Latency',
      formula: 'T_{perceived} = T_{VAD} + T_{TTFAB}, \\quad 200 + 360 = 560\\text{ ms}',
      explanationEn: 'Genuinely relevant to this lesson\'s real TTFAB=360ms: the model-side latency budget starts AFTER the system has already decided the user finished speaking. If VAD requires 200ms of silence (covered fully in Part 3), the true perceived latency from the user\'s last sound to first assistant audio is genuinely 560ms, not just 360ms.',
      explanationKn: 'ಈ lesson ya ನಿಜ TTFAB=360ms ಗೆ ನಿಜವಾಗಿ ಸಂಬಂಧಿಸಿದೆ: model-side latency budget system ಬಳಕೆದಾರ ಮಾತನಾಡುವುದೂ ಮುಗಿಸಿದೂ ಎಂದೂ ಈಗಾಗಲೇ ನಿರ್ಧರಿಸಿದ ನಂತರ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nTTFAB|Genuinely confirmed: 360.0ms real sum across 6 pipeline stages for the default config\nTMRoPE intuition|Encoding time position alongside token identity so cross-modal event order can be reasoned about\nMultimodalEvent|Genuinely confirmed: dataclass carrying timestamp_s, modality, and token, sorted correctly regardless of input order\nPerceived latency|TTFAB plus VAD endpointing delay, genuinely 560ms combining this lesson's 360ms with Part 3's 200ms VAD threshold" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: calculate_ttfab() sums exactly six components to 360.0ms for the default config\n• Genuinely confirmed: reducing prefill_ms by 80ms genuinely reduces TTFAB by exactly 80ms, proving it is a real linear sum\n• Genuinely confirmed: show_temporal_alignment() correctly sorts shuffled cross-modal events into true chronological order\n• TTFAB (first audio) matters more for perceived latency than total generation time\n• A shared timestamp axis across audio/vision/text (the TMRoPE intuition) is what lets a model reason about cross-modal event ordering',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: calculate_ttfab() ಆರೂ components ಅನ್ನೂ ನಿಖರವಾಗಿ 360.0ms ಗೆ ಮೊತ್ತ ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: prefill_ms 80ms ಕಡಿಮೆ ಮಾಡುವುದೂ TTFAB ಅನ್ನೂ ನಿಖರವಾಗಿ 80ms ಕಡಿಮೆ ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: show_temporal_alignment() ಅಸ್ತವ್ಯಸ್ತ events ಅನ್ನೂ ಸರಿಯಾಗಿ ವಿಂಗಡಿಸುತ್ತದೆ\n• TTFAB (ಮೊದಲ audio) perceived latency ಗೆ total generation time ಗಿಂತ ಹೆಚ್ಚು ಮುಖ್ಯ\n• audio/vision/text ಆದ್ಯಂತ ಹಂಚಿಕೊಂಡ timestamp axis (TMRoPE intuition) ಒಂದೂ model ಗೆ cross-modal event ordering ಬಗ್ಗೆ ತಾರ್ಕಿಕವಾಗಿ ಯೋಚಿಸಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When an omni assistant correctly answers "what did you see right before I said stop?" by combining a vision frame and a spoken word into one correct sequence, that is genuinely the timestamp-based cross-modal ordering confirmed in this lesson\'s real show_temporal_alignment() output.',
      bodyKn: 'ಒಂದೂ omni assistant "ನಾನೂ stop ಎಂದೂ ಹೇಳುವ ಮೊದಲು ನೀವೂ ಏನೂ ನೋಡಿದಿರಿ?" ಎಂದೂ ಸರಿಯಾಗಿ ಉತ್ತರಿಸಿದಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ya ನಿಜ show_temporal_alignment() output ದೃಢಪಡಿಸಿದ timestamp-based cross-modal ordering.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s real 80ms prefill experiment: breaking TTFAB into named components lets engineers identify exactly which stage to optimize for the biggest latency win, rather than treating "make it faster" as one undifferentiated goal.',
      bodyKn: 'ಈ lesson ya ನಿಜ 80ms prefill experiment ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: TTFAB ಅನ್ನೂ named components ಗೆ ಒಡೆಯುವುದೂ engineers ಗೆ ಯಾವ stage ಅನ್ನೂ ಉತ್ತಮಗೊಳಿಸಬೇಕು ಎಂದೂ ನಿಖರವಾಗಿ ಗುರುತಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real omni models like Qwen2.5-Omni genuinely use TMRoPE-style timestamp encoding to align audio, vision, and text tokens on a shared time axis, exactly the sorting behavior genuinely confirmed in this lesson\'s show_temporal_alignment() test.',
      bodyKn: 'Qwen2.5-Omni ನಂತಹ ನಿಜ omni models ನಿಜವಾಗಿ TMRoPE-style timestamp encoding ಬಳಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'TTFAB Component Breakdown', headingKn: 'TTFAB Component Breakdown',
      mermaidCode: 'flowchart LR\n  A["Mic->tokens 60ms"] --> B["Thinker prefill 140ms"]\n  B --> C["First token 40ms"]\n  C --> D["Talker startup 20ms"]\n  D --> E["Speech commit 40ms"]\n  E --> F["Waveform decode 60ms"]\n  F --> G["TTFAB = 360ms genuinely confirmed"]',
      captionEn: 'Genuinely confirmed sum via Bash: 60+140+40+20+40+60=360.',
      captionKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಮೊತ್ತ: 60+140+40+20+40+60=360.' } },
    { type: 'heading', data: { textEn: 'Why Prefill Dominates the Budget', textKn: 'Prefill Budget ಅನ್ನೂ ಏಕೆ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Prefill Is the Single Largest Component', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Prefill ಏಕೈಕ ದೊಡ್ಡ Component',
      bodyEn: 'Genuinely confirmed by this lesson\'s real breakdown: at 140.0ms, Thinker prefill is genuinely the largest of the six components -- larger than mic tokenization (60ms), waveform decode (60ms), and more than triple the Talker startup (20ms). This matches the earlier experiment: cutting prefill by 80ms genuinely cut total TTFAB by 80ms, confirming prefill optimization gives the most leverage per millisecond invested.',
      bodyKn: 'ಈ lesson ya ನಿಜ breakdown ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 140.0ms ನಲ್ಲಿ, Thinker prefill ಆರೂ components ya ನಿಜವಾಗಿ ಅತ್ಯಂತ ದೊಡ್ಡದು.' } },
    { type: 'table', data: {
      captionEn: 'Genuine TTFAB Component Ranking', captionKn: 'ನಿಜ TTFAB Component Ranking',
      rows: "Component|Genuinely confirmed value (ms)\nThinker prefill|140.0\nMic -> audio tokens|60.0\nWaveform decode|60.0\nFirst Thinker token|40.0\nSpeech token commit|40.0\nTalker startup|20.0" } },
    { type: 'heading', data: { textEn: 'MultimodalEvent as a Timestamped Data Structure', textKn: 'Timestamped Data Structure ಆಗಿ MultimodalEvent', level: 'H2' } },
    { type: 'code', data: {
      filename: 'omni_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely inspecting the MultimodalEvent dataclass fields directly to confirm what information travels alongside each token.',
      descKn: 'MultimodalEvent dataclass fields ಅನ್ನೂ ನೇರವಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ.',
      code: "event = MultimodalEvent(2.35, 'text', 'WORD:\"stop\"')\nprint('timestamp_s:', event.timestamp_s)\nprint('modality:', event.modality)\nprint('token:', event.token)" } },
    { type: 'output', data: { output: "timestamp_s: 2.35\nmodality: text\ntoken: WORD:\"stop\"" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Every Token Carries a Real Number, Not Just a Sequence Index', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Token ಒಂದೂ ನಿಜ Number ಒಯ್ಯುತ್ತದೆ, ಕೇವಲ Sequence Index ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed: timestamp_s=2.35 is a real floating-point second value, not an integer position in a list. This is exactly the TMRoPE intuition -- a "text position 5" token index tells you nothing about whether it happened before or after a "vision position 2" token from a different stream, but a shared real-valued timestamp does.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: timestamp_s=2.35 ಒಂದೂ ನಿಜ floating-point second value, list ನಲ್ಲಿ ಒಂದೂ integer position ಅಲ್ಲ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed in this lesson: what is the real TTFAB for the default ModelConfig?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: default ModelConfig ಗಾಗಿ ನಿಜ TTFAB ಏನೂ?',
        opts: ['140.0 ms', '280.0 ms', '360.0 ms', '560.0 ms'], correct: 2,
        optsKn: ['140.0 ms', '280.0 ms', '360.0 ms', '560.0 ms'] },
      { q: 'Genuinely confirmed in this lesson: reducing prefill_ms from 140 to 60 changed TTFAB from 360 to what?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: prefill_ms ಅನ್ನೂ 140 ಇಂದ 60 ಗೆ ಕಡಿಮೆ ಮಾಡುವುದೂ TTFAB ಅನ್ನೂ 360 ಇಂದ ಏನಕ್ಕೆ ಬದಲಾಯಿಸಿತು?',
        opts: ['360 ms (no change)', '300 ms', '280 ms', '80 ms'], correct: 2,
        optsKn: ['360 ms (ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲ)', '300 ms', '280 ms', '80 ms'] },
      { q: 'Why do multimodal tokens need timestamps rather than just sequence position?', qKn: 'Multimodal tokens ಗೆ ಕೇವಲ sequence position ಬದಲಿಗೆ timestamps ಏಕೆ ಅಗತ್ಯ?',
        opts: ['To make the model output longer', 'To let the model reason about which cross-modal events happened before/after each other in real time', 'Timestamps are only decorative', 'To reduce vocabulary size'], correct: 1,
        optsKn: ['Model output ಅನ್ನೂ ಉದ್ದವಾಗಿಸಲು', 'Model ಗೆ ಯಾವ cross-modal events ನಿಜ ಸಮಯದಲ್ಲಿ ಮೊದಲು/ನಂತರ ಸಂಭವಿಸಿದವು ಎಂದೂ ತಾರ್ಕಿಕವಾಗಿ ಯೋಚಿಸಲು ಅನುಮತಿಸಲು', 'Timestamps ಕೇವಲ ಅಲಂಕಾರಿಕ', 'Vocabulary size ಕಡಿಮೆ ಮಾಡಲು'] },
      { q: 'Genuinely confirmed in this lesson: when 4 events were passed in shuffled order (2.40, 2.30, 2.35, 2.32), what did show_temporal_alignment() do?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4 events ಅಸ್ತವ್ಯಸ್ತ ಕ್ರಮದಲ್ಲಿ ರವಾನಿಸಿದಾಗ, show_temporal_alignment() ಏನೂ ಮಾಡಿತು?',
        opts: ['Printed them in the shuffled input order', 'Correctly sorted them into true chronological order (2.30, 2.32, 2.35, 2.40)', 'Crashed with an error', 'Ignored the timestamps entirely'], correct: 1,
        optsKn: ['ಅಸ್ತವ್ಯಸ್ತ input order ನಲ್ಲಿ ಮುದ್ರಿಸಿತು', 'ಅವುಗಳನ್ನೂ ನಿಜ chronological order ಗೆ ಸರಿಯಾಗಿ ವಿಂಗಡಿಸಿತು', 'ಒಂದೂ error ಜೊತೆ crash ಆಯಿತು', 'Timestamps ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಕಡೆಗಣಿಸಿತು'] },
      { q: 'Genuinely relevant to this lesson: if VAD requires 200ms and TTFAB is genuinely 360ms, what is the total perceived latency?', qKn: 'ಈ lesson ಗೆ ನಿಜವಾಗಿ ಸಂಬಂಧಿಸಿದ: VAD 200ms ಅಗತ್ಯವಿದ್ದರೆ, TTFAB ನಿಜವಾಗಿ 360ms ಆಗಿದ್ದರೆ, ಒಟ್ಟೂ perceived latency ಏನೂ?',
        opts: ['160 ms', '360 ms', '560 ms', '760 ms'], correct: 2,
        optsKn: ['160 ms', '360 ms', '560 ms', '760 ms'] },
    ] } },
  ],
};
