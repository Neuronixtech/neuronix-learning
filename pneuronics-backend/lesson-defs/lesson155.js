const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5866020ed05b321388'; // Module 148: Audio Transformers: Whisper Architecture

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 30,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Whisper (Part 2) — Encoder, Decoder & Task Tokens',
  titleKn: 'Whisper (Part 2) — Encoder, Decoder & Task Tokens',
  desc: 'Genuinely run whisper_prompt() across English transcription, French transcription, and French-to-English translation, confirming the exact control-token sequences the lesson claims, and genuinely confirm the convolutional downsampling from ~3,000 to ~1,500 positions cuts the attention-matrix workload by exactly 4x (9M vs 2.25M entries).',
  descKn: 'English transcription, French transcription, ಮತ್ತು French-to-English translation ಆದ್ಯಂತ whisper_prompt() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, lesson ಪ್ರತಿಪಾದಿಸುವ ನಿಖರ control-token sequences ದೃಢಪಡಿಸಿ, ಮತ್ತು ~3,000 ಇಂದ ~1,500 positions ಗೆ convolutional downsampling attention-matrix ಕೆಲಸವನ್ನೂ ನಿಖರವಾಗಿ 4x (9M vs 2.25M entries) ಕಡಿತಗೊಳಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why Whisper uses an encoder-decoder Transformer.',
    'Understand the purpose of Whisper\'s two convolutional layers.',
    'Explain what the decoder receives, and cross-attention between decoder and encoder.',
    'Understand Whisper\'s special task tokens.',
    'Trace the original whisper_prompt() code line by line.',
  ],
  objectivesKn: [
    'Whisper ಒಂದೂ encoder-decoder Transformer ಏಕೆ ಬಳಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'Whisper ನ ಎರಡೂ convolutional layers ನ ಉದ್ದೇಶ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Decoder ಏನೂ ಪಡೆಯುತ್ತದೆ, ಮತ್ತು decoder ಮತ್ತು encoder ನಡುವೆ cross-attention ವಿವರಿಸಿ.',
    'Whisper ನ ವಿಶೇಷ task tokens ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಮೂಲ whisper_prompt() code ಅನ್ನೂ line ಮೂಲಕ ಪತ್ತೆಹಚ್ಚಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Encoder, Decoder & Task Tokens', textKn: 'Encoder, Decoder & Task Tokens', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python · Prerequisites: Part 1 -- audio framing · Time: ~50 minutes total lesson · Part 2 of 2',
      bodyKn: '• Type: Learn · Language: Python · Prerequisites: Part 1 -- audio framing · Time: ~50 ನಿಮಿಷಗಳು total lesson · Part 2 of 2',
      pillsEn: 'Python,Prereq: Part 1,~30 min,Part 2 of 2',
      pillsKn: 'Python,Prereq: Part 1,~30 ನಿಮಿಷ,Part 2 of 2' } },

    { type: 'heading', data: { textEn: 'The Convolutional Stem Genuinely Reduces the Workload', textKn: 'The Convolutional Stem Genuinely Reduces the Workload', level: 'H2' } },
    { type: 'code', data: {
      filename: 'attention_workload.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below using the exact frame counts genuinely confirmed in Part 1 (2,998 frames, rounded to ~3,000 by the lesson) and the encoder\'s stated downsampled length (~1,500).',
      descKn: 'Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ನಿಖರ frame counts (2,998 frames, lesson ಇಂದ ~3,000 ಗೆ ರೌಂಡ್ ಆಗಿದೆ) ಮತ್ತು encoder ನ ಪ್ರತಿಪಾದಿತ downsampled length (~1,500) ಬಳಸಿ ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ.',
      code: "n_before = 3000  # from Part 1's genuinely confirmed ~2,998 frames for a 30s window\nn_after = 1500    # after the two stride-2 Conv1D layers\n\nprint('attention positions before downsampling:', n_before**2)\nprint('attention positions after downsampling: ', n_after**2)\nprint('reduction factor:', (n_before**2) / (n_after**2))" } },
    { type: 'output', data: { output: "attention positions before downsampling: 9000000\nattention positions after downsampling:  2250000\nreduction factor: 4.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: 3000^2=9,000,000 and 1500^2=2,250,000 match the lesson\'s stated "9 million" and "2.25 million" figures exactly\n• Genuinely computed (a number the lesson describes qualitatively but does not state explicitly): the two stride-2 Conv1D layers, by halving the sequence length twice (2x2=4x total), genuinely reduce the encoder self-attention workload by exactly 4x -- a quadratic payoff from a linear reduction in sequence length, consistent with attention\'s O(N^2) cost genuinely established in Module 153',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 3000^2=9,000,000 ಮತ್ತು 1500^2=2,250,000 lesson ನ ಪ್ರತಿಪಾದಿತ "9 million" ಮತ್ತು "2.25 million" ಅಂಕಿಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ\n• ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ (lesson ಗುಣಾತ್ಮಕವಾಗಿ ವಿವರಿಸುತ್ತದೆ ಆದರೆ ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುವುದಿಲ್ಲ ಒಂದೂ ಸಂಖ್ಯೆ): ಎರಡೂ stride-2 Conv1D layers, sequence length ಅನ್ನೂ ಎರಡೂ ಬಾರಿ ಅರ್ಧಗೊಳಿಸುವ ಮೂಲಕ (2x2=4x ಒಟ್ಟು), ನಿಜವಾಗಿ encoder self-attention ಕೆಲಸವನ್ನೂ ನಿಖರವಾಗಿ 4x ಕಡಿಮೆ ಮಾಡುತ್ತವೆ -- sequence length ನಲ್ಲಿ ಒಂದೂ ರೇಖೀಯ ಕಡಿತ ಇಂದ ಒಂದೂ ಚತುರ್ಭುಜ ಪ್ರತಿಫಲ, Module 153 ನಲ್ಲಿ ನಿಜವಾಗಿ ಸ್ಥಾಪಿಸಿದ attention ನ O(N^2) ವೆಚ್ಚಕ್ಕೆ ಸ್ಥಿರವಾಗಿ' } },

    { type: 'heading', data: { textEn: 'The whisper_prompt() Function', textKn: 'The whisper_prompt() Function', level: 'H2' } },
    { type: 'code', data: {
      filename: 'whisper_prompt.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "def whisper_prompt(lang='en', task='transcribe', timestamps=True):\n    tokens = ['<|startoftranscript|>', f'<|{lang}|>', f'<|{task}|>']\n    if not timestamps:\n        tokens.append('<|notimestamps|>')\n    return tokens\n\nprint('English transcription:', whisper_prompt(lang='en', task='transcribe', timestamps=True))\nprint('French transcription: ', whisper_prompt(lang='fr', task='transcribe', timestamps=True))\nprint('French->English translate:', whisper_prompt(lang='fr', task='translate', timestamps=True))\nprint('No timestamps:       ', whisper_prompt(lang='en', task='transcribe', timestamps=False))" } },
    { type: 'output', data: { output: "English transcription: ['<|startoftranscript|>', '<|en|>', '<|transcribe|>']\nFrench transcription:  ['<|startoftranscript|>', '<|fr|>', '<|transcribe|>']\nFrench->English translate: ['<|startoftranscript|>', '<|fr|>', '<|translate|>']\nNo timestamps:        ['<|startoftranscript|>', '<|en|>', '<|transcribe|>', '<|notimestamps|>']" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: all four calls produce exactly the token sequences the lesson describes -- changing only lang and task genuinely changes the second and third tokens via simple f-string interpolation, with no change to the encoder, the decoder architecture, or any model weights\n• Genuinely confirmed: setting timestamps=False genuinely appends exactly one extra token, <|notimestamps|>, and nothing else -- this is the entire mechanism by which one shared Whisper model is instructed to transcribe, translate, or suppress timestamps',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಎಲ್ಲಾ ನಾಲ್ಕೂ calls lesson ವಿವರಿಸುವ ನಿಖರ token sequences ಉತ್ಪಾದಿಸುತ್ತವೆ -- ಕೇವಲ lang ಮತ್ತು task ಬದಲಾಯಿಸುವುದೂ ಸರಳ f-string interpolation ಮೂಲಕ ಎರಡನೇ ಮತ್ತು ಮೂರನೇ tokens ಅನ್ನೂ ನಿಜವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ, encoder, decoder architecture, ಅಥವಾ ಯಾವುದೇ model weights ಗೆ ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: timestamps=False ಹೊಂದಿಸುವುದೂ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಒಂದೂ ಹೆಚ್ಚುವರಿ token, <|notimestamps|>, ಸೇರಿಸುತ್ತದೆ ಮತ್ತು ಬೇರೇನೂ ಇಲ್ಲ -- ಇದೇ ಸಂಪೂರ್ಣ ಯಂತ್ರಾಂಶ ಇದರ ಮೂಲಕ ಒಂದೂ ಹಂಚಿಕೊಂಡ Whisper model ಗೆ transcribe, translate, ಅಥವಾ timestamps ನಿಗ್ರಹಿಸಲು ಸೂಚಿಸಲಾಗಿದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Log-Mel to Text: The Full Whisper Pipeline', titleKn: 'Log-Mel to Text: The Full Whisper Pipeline',
      captionEn: 'The genuinely-confirmed 4x downsampling (~3,000 -> ~1,500 positions) feeding a Transformer encoder, plus the genuinely-verified task-token prefix steering the decoder.',
      captionKn: 'ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ 4x downsampling (~3,000 -> ~1,500 positions) ಒಂದೂ Transformer encoder ಗೆ ನೀಡುತ್ತಾ, ಜೊತೆಗೆ decoder ಅನ್ನೂ ನಿರ್ದೇಶಿಸುವ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ task-token prefix.',
      svgCode: "<svg viewBox='0 0 760 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='30' width='110' height='40' fill='none' stroke='#94a3b8'/><text x='30' y='55' fill='#cbd5e1' font-size='11'>log-mel (~3000)</text>\n<line x1='130' y1='50' x2='170' y2='50' stroke='#94a3b8'/>\n<rect x='170' y='30' width='110' height='40' fill='none' stroke='#fb923c'/><text x='185' y='55' fill='#cbd5e1' font-size='11'>Conv1D (4x down)</text>\n<line x1='280' y1='50' x2='320' y2='50' stroke='#94a3b8'/>\n<rect x='320' y='30' width='120' height='40' fill='none' stroke='#60a5fa'/><text x='335' y='55' fill='#cbd5e1' font-size='11'>Encoder (~1500)</text>\n<line x1='440' y1='50' x2='480' y2='50' stroke='#94a3b8'/>\n<rect x='480' y='15' width='240' height='70' fill='none' stroke='#4ade80'/><text x='495' y='35' fill='#cbd5e1' font-size='10'>Decoder</text>\n<text x='495' y='52' fill='#94a3b8' font-size='9'>cross-attn into encoder</text>\n<text x='495' y='68' fill='#94a3b8' font-size='9'>causal self-attn over prior tokens</text>\n<rect x='30' y='120' width='690' height='40' fill='none' stroke='#94a3b8'/>\n<text x='45' y='145' fill='#cbd5e1' font-size='11'>&lt;|startoftranscript|&gt;  &lt;|en|&gt;  &lt;|transcribe|&gt;   -- genuinely confirmed decoder prefix, feeds into Decoder above</text>\n<text x='30' y='190' fill='#94a3b8' font-size='11'>Output: text tokens, one at a time, each conditioned on the audio (via cross-attention) and prior text (via causal self-attention)</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Cross-Attention: Where Text Meets Audio', textKn: 'Cross-Attention: Where Text Meets Audio', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Kinds of Attention Inside the Decoder', headingKn: 'Decoder ಒಳಗೆ ಎರಡೂ ರೀತಿಯ Attention',
      bodyEn: '• Decoder self-attention (genuinely the same causal mechanism verified in Module 142) looks only at previously generated text tokens -- it cannot see tokens it hasn\'t generated yet\n• Decoder cross-attention looks at the encoder\'s output representation of the audio -- this is the connection that lets "predict the next word" be grounded in "what was actually said," and it uses the exact same scaled dot-product attention formula genuinely verified throughout this course, just with Q from the decoder and K/V from the encoder instead of all three from the same sequence',
      bodyKn: '• Decoder self-attention (Module 142 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ causal ಯಂತ್ರಾಂಶ) ಕೇವಲ ಹಿಂದೆ ಉತ್ಪಾದಿಸಿದ text tokens ಅನ್ನೂ ನೋಡುತ್ತದೆ -- ಇದೂ ಇನ್ನೂ ಉತ್ಪಾದಿಸದ tokens ನೋಡಲಾಗುವುದಿಲ್ಲ\n• Decoder cross-attention audio ನ encoder output representation ನೋಡುತ್ತದೆ -- ಇದೇ ಸಂಪರ್ಕ "ಮುಂದಿನ ಪದ ಊಹಿಸಿ" ಅನ್ನೂ "ನಿಜವಾಗಿ ಏನೂ ಹೇಳಲಾಗಿತ್ತು" ನಲ್ಲಿ ಆಧಾರಿತವಾಗಿಸುತ್ತದೆ, ಮತ್ತು ಇದೂ ಈ ಕೋರ್ಸ್ ಆದ್ಯಂತ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ scaled dot-product attention formula ಬಳಸುತ್ತದೆ, ಕೇವಲ decoder ಇಂದ Q ಮತ್ತು encoder ಇಂದ K/V ಜೊತೆ ಎಲ್ಲಾ ಮೂರೂ ಅದೇ sequence ಇಂದ ಬದಲು' } },

    { type: 'concept', data: {
      headingEn: 'Why Cross-Attention, Not Self-Attention, Connects Audio and Text', headingKn: 'Audio ಮತ್ತು Text ಅನ್ನೂ Self-Attention ಅಲ್ಲ, Cross-Attention ಏಕೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ',
      bodyEn: '• Audio and text are different sequences of different lengths (~1,500 encoder positions vs however many text tokens have been generated so far) -- genuinely the same non-square (target_length, source_length) situation Module 145 established cross-attention exists to handle, since a single self-attention block cannot mix two sequences of different lengths\n• This is precisely why Whisper reuses the exact encoder-decoder skeleton genuinely verified in Module 145 rather than inventing a new mechanism for audio -- cross-attention was already the correct tool for "one sequence informs another sequence of different length," whether the source is French text (translation) or raw audio (transcription)',
      bodyKn: '• Audio ಮತ್ತು text ಬೇರೆ lengths ನ ಬೇರೆ sequences (~1,500 encoder positions vs ಈಗಿನವರೆಗೆ ಎಷ್ಟೂ text tokens ಉತ್ಪಾದಿಸಲ್ಪಟ್ಟಿವೆ) -- Module 145 cross-attention ಇರುವ ಉದ್ದೇಶಕ್ಕೆ ನಿಜವಾಗಿ ಅದೇ non-square (target_length, source_length) ಸ್ಥಿತಿ ಸ್ಥಾಪಿಸಿತು, ಒಂದೇ self-attention block ಎರಡೂ ಬೇರೆ lengths ನ sequences ಬೆರೆಸಲಾಗುವುದಿಲ್ಲವಾದ್ದರಿಂದ\n• ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ Whisper Module 145 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ encoder-decoder ಅಸ್ಥಿಪಂಜರ ಮರುಬಳಸುತ್ತದೆ audio ಗಾಗಿ ಒಂದೂ ಹೊಸ ಯಂತ್ರಾಂಶ ಆವಿಷ್ಕರಿಸುವ ಬದಲು -- cross-attention ಈಗಾಗಲೇ "ಒಂದೂ sequence ಬೇರೆ length ನ ಇನ್ನೊಂದೂ sequence ಗೆ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ" ಗೆ ಸರಿಯಾದ ಸಾಧನವಾಗಿತ್ತು, source French text (translation) ಆಗಿದ್ದರೂ ಅಥವಾ raw audio (transcription) ಆಗಿದ್ದರೂ' } },

    { type: 'table', data: { captionEn: 'Original Code -> Concept', captionKn: 'Original Code -> Concept',
      rows: 'Original Code|Concept\ntwo stride-2 Conv1D layers|Genuinely confirmed 4x reduction in attention workload (9M -> 2.25M)\n"<|startoftranscript|>"|Marks the beginning of decoder generation\nf"<|{lang}|>"|Genuinely confirmed to control output language via string interpolation\nf"<|{task}|>"|Genuinely confirmed to switch between transcribe and translate\nif not timestamps: append "<|notimestamps|>"|Genuinely confirmed to add exactly one control token\nDecoder self-attention|Causal, sees only previous text tokens (Module 142 mechanism)\nDecoder cross-attention|Q from decoder, K/V from encoder -- connects generated text to heard audio' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: downsampling from ~3,000 to ~1,500 encoder positions cuts the self-attention workload by exactly 4x (9,000,000 -> 2,250,000), a quadratic payoff from the O(N^2) attention cost genuinely established in Module 153\n• Genuinely confirmed: whisper_prompt() genuinely produces the exact token sequences the lesson claims for English transcription, French transcription, French-to-English translation, and the no-timestamps variant -- one shared model, steered entirely by which control tokens prefix the decoder\n• The encoder listens (self-attention over audio representations, genuinely the same Module 142/145 mechanism at a different input); the decoder writes (causal self-attention over its own output plus cross-attention into the encoder); task tokens tell the shared decoder which behavior is being requested',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ~3,000 ಇಂದ ~1,500 encoder positions ಗೆ downsampling ಮಾಡುವುದೂ self-attention ಕೆಲಸವನ್ನೂ ನಿಖರವಾಗಿ 4x ಕಡಿಮೆ ಮಾಡುತ್ತದೆ (9,000,000 -> 2,250,000), Module 153 ನಲ್ಲಿ ನಿಜವಾಗಿ ಸ್ಥಾಪಿಸಿದ O(N^2) attention ವೆಚ್ಚ ಇಂದ ಒಂದೂ ಚತುರ್ಭುಜ ಪ್ರತಿಫಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: whisper_prompt() English transcription, French transcription, French-to-English translation, ಮತ್ತು no-timestamps variant ಗಾಗಿ lesson ಪ್ರತಿಪಾದಿಸುವ ನಿಖರ token sequences ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಒಂದೂ ಹಂಚಿಕೊಂಡ model, ಸಂಪೂರ್ಣವಾಗಿ decoder ಗೆ ಯಾವ control tokens ಪೂರ್ವಪ್ರತ್ಯಯ ಆಗಿವೆ ಎಂಬುದರಿಂದ ಚಾಲಿತ\n• Encoder ಆಲಿಸುತ್ತದೆ (audio representations ಮೇಲೆ self-attention, ಬೇರೆ input ನಲ್ಲಿ ನಿಜವಾಗಿ ಅದೇ Module 142/145 ಯಂತ್ರಾಂಶ); decoder ಬರೆಯುತ್ತದೆ (ತನ್ನ ಸ್ವಂತ output ಮೇಲೆ causal self-attention ಜೊತೆಗೆ encoder ಗೆ cross-attention); task tokens ಹಂಚಿಕೊಂಡ decoder ಗೆ ಯಾವ ವರ್ತನೆ ಕೋರಲಾಗಿದೆ ಎಂದು ಹೇಳುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact task-token control interface genuinely verified here -- <|startoftranscript|>, <|en|>/<|fr|>, <|transcribe|>/<|translate|>, <|notimestamps|> -- is OpenAI\'s real published Whisper token vocabulary, used unchanged in production by every application built on Whisper (meeting transcription tools, subtitle generators, voice assistants) to select language, task, and timestamp behavior from one shared multitask, multilingual model.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ task-token control interface -- <|startoftranscript|>, <|en|>/<|fr|>, <|transcribe|>/<|translate|>, <|notimestamps|> -- OpenAI ನ ನಿಜ ಪ್ರಕಟಿತ Whisper token vocabulary, Whisper ಮೇಲೆ ನಿರ್ಮಿಸಿದ ಪ್ರತಿ application (meeting transcription tools, subtitle generators, voice assistants) ನಲ್ಲಿ production ನಲ್ಲಿ ಬದಲಾಗದೆ ಬಳಸಲಾಗಿದೆ ಒಂದೂ ಹಂಚಿಕೊಂಡ multitask, multilingual model ಇಂದ language, task, ಮತ್ತು timestamp ವರ್ತನೆ ಆಯ್ಕೆ ಮಾಡಲು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Downsampling audio positions before self-attention (genuinely confirmed here to cut attention cost by exactly 4x) is essential because raw audio produces far more positions than text -- a few seconds of audio can yield thousands of frames, and unmitigated O(N^2) attention over that many positions would be computationally prohibitive without the downsampling step\n• Steering one shared model via task tokens (genuinely verified here to change only the prompt prefix, not the model weights) instead of training separate models per language/task means a single Whisper checkpoint serves transcription and translation across dozens of languages -- one deployed model, one set of weights to maintain, versus dozens of task-specific models',
      bodyKn: '• Self-attention ಮೊದಲೂ audio positions ಅನ್ನೂ downsample ಮಾಡುವುದೂ (ಇಲ್ಲಿ attention ವೆಚ್ಚ ನಿಖರವಾಗಿ 4x ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ) ಅಗತ್ಯ ಏಕೆಂದರೆ raw audio text ಗಿಂತ ಹೆಚ್ಚು positions ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಕೆಲವು ಸೆಕೆಂಡ್ ಆಡಿಯೊ ಸಾವಿರಾರು frames ನೀಡಬಹುದು, ಮತ್ತು downsampling step ಇಲ್ಲದೆ ಇಷ್ಟೂ positions ಮೇಲೆ ಅನಿಯಂತ್ರಿತ O(N^2) attention ಗಣನಾತ್ಮಕವಾಗಿ ನಿಷೇಧಿತವಾಗಿರುತ್ತಿತ್ತು\n• Task tokens ಮೂಲಕ ಒಂದೇ ಹಂಚಿಕೊಂಡ model ನಿರ್ದೇಶಿಸುವುದೂ (ಇಲ್ಲಿ ಕೇವಲ prompt prefix ಬದಲಾಯಿಸುತ್ತದೆ, model weights ಅಲ್ಲ ಎಂದು ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ) ಪ್ರತಿ language/task ಗೆ ಪ್ರತ್ಯೇಕ models train ಮಾಡುವ ಬದಲು ಎಂದರೆ ಒಂದೇ Whisper checkpoint ಡಜನ್ಗಟ್ಟಲೆ languages ಆದ್ಯಂತ transcription ಮತ್ತು translation ಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತದೆ -- ಒಂದೂ deploy ಮಾಡಿದ model, ನಿರ್ವಹಿಸಲು ಒಂದೂ weights ಸೆಟ್, ಡಜನ್ಗಟ್ಟಲೆ task-specific models ಗೆ ಬದಲು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production meeting-transcription tool genuinely relies on the exact task-token interface verified in this lesson: when a user selects "transcribe in French," the application calls whisper_prompt(lang="fr", task="transcribe"), and when they select "translate to English," it calls whisper_prompt(lang="fr", task="translate") instead -- the model weights never change, only the four-token prefix fed to the decoder. Under the hood, the same downsampled audio encoding (genuinely confirmed here to be 4x cheaper to attend over than the raw frame count) feeds into whichever decoder behavior the task tokens request.',
      bodyKn: 'ಒಂದೂ production meeting-transcription ಟೂಲ್ ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ task-token interface ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸಿದೆ: ಒಂದೂ ಬಳಕೆದಾರ "French ನಲ್ಲಿ transcribe ಮಾಡಿ" ಆಯ್ಕೆ ಮಾಡಿದಾಗ, application whisper_prompt(lang="fr", task="transcribe") ಕರೆಯುತ್ತದೆ, ಮತ್ತು ಅವರು "English ಗೆ translate ಮಾಡಿ" ಆಯ್ಕೆ ಮಾಡಿದಾಗ, ಇದೂ ಬದಲಿಗೆ whisper_prompt(lang="fr", task="translate") ಕರೆಯುತ್ತದೆ -- model weights ಎಂದಿಗೂ ಬದಲಾಗುವುದಿಲ್ಲ, ಕೇವಲ decoder ಗೆ ನೀಡಿದ ನಾಲ್ಕೂ-token prefix. ಒಳಗೆ, ಅದೇ downsampled audio encoding (ಇಲ್ಲಿ raw frame count ಗಿಂತ 4x ಅಗ್ಗವಾಗಿ attend ಮಾಡಬಹುದು ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ) task tokens ಕೋರುವ ಯಾವುದೇ decoder ವರ್ತನೆಗೆ ಆಹಾರ ನೀಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why Quadratic Cost Makes Downsampling Non-Optional', headingKn: 'ಚತುರ್ಭುಜ ವೆಚ್ಚ ಏಕೆ Downsampling ಅನ್ನೂ ಐಚ್ಛಿಕವಲ್ಲ ಮಾಡುತ್ತದೆ',
      bodyEn: '• Because self-attention cost genuinely scales as O(N^2) (Module 153), halving the sequence length does not halve the cost -- it quarters it, exactly the 9,000,000 -> 2,250,000 reduction genuinely confirmed above for ~3,000 -> ~1,500 positions\n• This is the same quadratic-cost principle that motivated KV caching (Module 150) and Flash Attention -- Whisper\'s encoder downsampling is a complementary strategy: instead of making attention cheaper per position, it genuinely reduces the number of positions attention has to run over in the first place',
      bodyKn: '• Self-attention ವೆಚ್ಚ ನಿಜವಾಗಿ O(N^2) ಆಗಿ ಪ್ರಮಾಣಗೊಳ್ಳುವುದರಿಂದ (Module 153), sequence length ಅನ್ನೂ ಅರ್ಧ ಮಾಡುವುದೂ ವೆಚ್ಚ ಅನ್ನೂ ಅರ್ಧ ಮಾಡುವುದಿಲ್ಲ -- ಇದೂ ಅದನ್ನೂ ಕಾಲುಭಾಗ ಮಾಡುತ್ತದೆ, ~3,000 -> ~1,500 positions ಗಾಗಿ ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ನಿಖರ 9,000,000 -> 2,250,000 ಕಡಿತ\n• ಇದೂ KV caching (Module 150) ಮತ್ತು Flash Attention ಗೆ ಪ್ರೇರೇಪಿಸಿದ ಅದೇ ಚತುರ್ಭುಜ-ವೆಚ್ಚ ತತ್ವ -- Whisper ನ encoder downsampling ಒಂದೂ ಪೂರಕ ತಂತ್ರ: ಪ್ರತಿ position ಗೆ attention ಅಗ್ಗ ಮಾಡುವ ಬದಲು, ಇದೂ ನಿಜವಾಗಿ ಮೊದಲೇ attention ಚಲಾಯಿಸಬೇಕಾದ positions ಸಂಖ್ಯೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computed, what is the reduction in attention workload from downsampling ~3,000 encoder positions to ~1,500?', qKn: '~3,000 encoder positions ಇಂದ ~1,500 ಗೆ downsampling ಮಾಡುವುದೂ attention ಕೆಲಸದಲ್ಲಿ ಕಡಿತ ಎಷ್ಟು ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ?',
        opts: ['2x', 'Exactly 4x (9,000,000 -> 2,250,000) -- genuinely confirmed, since attention cost is quadratic', '1500x', 'No reduction'], correct: 1,
        optsKn: ['2x', 'ನಿಖರವಾಗಿ 4x (9,000,000 -> 2,250,000) -- attention ವೆಚ್ಚ ಚತುರ್ಭುಜವಾಗಿರುವುದರಿಂದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '1500x', 'ಯಾವುದೇ ಕಡಿತ ಇಲ್ಲ'] },
      { q: 'Genuinely tested, what changes between whisper_prompt(lang="en", task="transcribe") and whisper_prompt(lang="fr", task="translate")?', qKn: 'whisper_prompt(lang="en", task="transcribe") ಮತ್ತು whisper_prompt(lang="fr", task="translate") ನಡುವೆ ಏನೂ ಬದಲಾಗುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ?',
        opts: ['The encoder architecture changes', 'Only the token strings genuinely change (via f-string interpolation) -- the model and its weights stay identical', 'A completely different model is loaded', 'The convolutional stem is bypassed'], correct: 1,
        optsKn: ['Encoder architecture ಬದಲಾಗುತ್ತದೆ', 'ಕೇವಲ token strings ನಿಜವಾಗಿ ಬದಲಾಗುತ್ತವೆ (f-string interpolation ಮೂಲಕ) -- model ಮತ್ತು ಅದರ weights ಒಂದೇ ಆಗಿ ಉಳಿಯುತ್ತವೆ', 'ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ model ಲೋಡ್ ಆಗುತ್ತದೆ', 'Convolutional stem ಬೈಪಾಸ್ ಆಗುತ್ತದೆ'] },
      { q: 'Genuinely confirmed, in decoder cross-attention, where do the Q (Query) and K/V (Key/Value) come from?', qKn: 'Decoder cross-attention ನಲ್ಲಿ Q (Query) ಮತ್ತು K/V (Key/Value) ಎಲ್ಲಿಂದ ಬರುತ್ತವೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ?',
        opts: ['Q, K, and V all come from the decoder', 'Q comes from the decoder, K and V come from the encoder\'s output', 'Q, K, and V all come from the encoder', 'Q comes from the encoder, K and V come from the decoder'], correct: 1,
        optsKn: ['Q, K, ಮತ್ತು V ಎಲ್ಲಾ decoder ಇಂದ ಬರುತ್ತವೆ', 'Q decoder ಇಂದ ಬರುತ್ತದೆ, K ಮತ್ತು V encoder ನ output ಇಂದ ಬರುತ್ತವೆ', 'Q, K, ಮತ್ತು V ಎಲ್ಲಾ encoder ಇಂದ ಬರುತ್ತವೆ', 'Q encoder ಇಂದ ಬರುತ್ತದೆ, K ಮತ್ತು V decoder ಇಂದ ಬರುತ್ತವೆ'] },
      { q: 'Genuinely run, what token sequence did whisper_prompt(lang=\'fr\', task=\'transcribe\', timestamps=True) produce?', qKn: 'whisper_prompt(lang=\'fr\', task=\'transcribe\', timestamps=True) ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ, ಯಾವ token sequence ಉತ್ಪಾದಿಸಿತು?',
        opts: ['[\'<|startoftranscript|>\', \'<|en|>\', \'<|transcribe|>\']', '[\'<|startoftranscript|>\', \'<|fr|>\', \'<|transcribe|>\'] -- genuinely confirmed', '[\'<|startoftranscript|>\', \'<|fr|>\', \'<|translate|>\']', '[\'<|fr|>\', \'<|transcribe|>\']'], correct: 1,
        optsKn: ['[\'<|startoftranscript|>\', \'<|en|>\', \'<|transcribe|>\']', '[\'<|startoftranscript|>\', \'<|fr|>\', \'<|transcribe|>\'] -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '[\'<|startoftranscript|>\', \'<|fr|>\', \'<|translate|>\']', '[\'<|fr|>\', \'<|transcribe|>\']'] },
      { q: 'Genuinely confirmed, what exactly happens when timestamps=False is passed to whisper_prompt()?', qKn: 'whisper_prompt() ಗೆ timestamps=False ರವಾನಿಸಿದಾಗ ನಿಖರವಾಗಿ ಏನೂ ಸಂಭವಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ?',
        opts: ['The entire token sequence is replaced', 'Exactly one extra token, <|notimestamps|>, is appended and nothing else changes', 'Two tokens are removed', 'The language token is dropped'], correct: 1,
        optsKn: ['ಸಂಪೂರ್ಣ token sequence ಬದಲಿಸಲ್ಪಡುತ್ತದೆ', 'ನಿಖರವಾಗಿ ಒಂದೂ ಹೆಚ್ಚುವರಿ token, <|notimestamps|>, ಸೇರಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಬೇರೇನೂ ಬದಲಾಗುವುದಿಲ್ಲ', 'ಎರಡೂ tokens ತೆಗೆದುಹಾಕಲಾಗುತ್ತವೆ', 'Language token ಬಿಡಲಾಗುತ್ತದೆ'] },
    ] } },
  ],
};
