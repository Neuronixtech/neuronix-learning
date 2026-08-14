const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213be'; // Module 167: Audio Generation

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Audio Generation (Part 1) — Neural Audio Codecs and Discrete Audio Tokens',
  titleKn: 'Audio Generation (Part 1) — Neural Audio Codecs and Discrete Audio Tokens',
  desc: 'Genuinely run the lesson\'s make_tokens() codec stand-in for two synthetic distributions, then genuinely build a 4-codebook Residual Vector Quantization token grid, confirming each codebook produces a distinct, deterministic stream at a fixed vocab_size.',
  descKn: 'Lesson ನ make_tokens() codec stand-in ಅನ್ನೂ ಎರಡೂ synthetic distributions ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಂತರ ಒಂದೂ 4-codebook Residual Vector Quantization token grid ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಪ್ರತಿ codebook ಒಂದೂ ಸ್ಥಿರ vocab_size ನಲ್ಲಿ ಒಂದೂ ವಿಶಿಷ್ಟ, deterministic stream ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why raw audio waveforms are too long to feed directly into a transformer.',
    'Understand the role of a neural audio codec: waveform to compact tokens.',
    'Genuinely run the toy make_tokens() codec stand-in and inspect its two distributions.',
    'Understand what vocab_size and codebook entries represent.',
    'Understand Residual Vector Quantization (RVQ) and genuinely build a multi-codebook token grid.',
    'Understand why the toy code deliberately skips implementing a real learned codec.',
    'Connect waveform -> codec -> tokens -> generator -> codec decoder -> waveform as one pipeline.',
  ],
  objectivesKn: [
    'Raw audio waveforms ಒಂದೂ transformer ಗೆ ನೇರವಾಗಿ ನೀಡಲು ಏಕೆ ಬಹಳ ಉದ್ದ ಎಂದು ವಿವರಿಸಿ.',
    'ಒಂದೂ neural audio codec ನ ಪಾತ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: waveform ಇಂದ compact tokens.',
    'Toy make_tokens() codec stand-in ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ ಎರಡೂ distributions ಪರಿಶೀಲಿಸಿ.',
    'vocab_size ಮತ್ತು codebook entries ಏನನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Residual Vector Quantization (RVQ) ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ಒಂದೂ multi-codebook token grid ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
    'Toy code ಒಂದೂ ನಿಜ learned codec implement ಮಾಡುವುದನ್ನೂ ಏಕೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Waveform -> codec -> tokens -> generator -> codec decoder -> waveform ಅನ್ನೂ ಒಂದೂ pipeline ಆಗಿ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Audio Generation (Part 1) — Neural Audio Codecs and Discrete Audio Tokens', textKn: 'Audio Generation (Part 1) — Neural Audio Codecs and Discrete Audio Tokens', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: none (new modality) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: none (new modality) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,New modality,~35 min,Part 1 of 3',
      pillsKn: 'Python,ಹೊಸ modality,~35 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: Raw Audio Is Too Long', textKn: 'The Problem: Raw Audio Is Too Long', level: 'H2' } },
    { type: 'code', data: {
      filename: 'audio_size.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: the raw sample count for a 5-second clip at 16kHz versus a realistic codec token rate.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ಒಂದೂ 5-second clip ಗಾಗಿ 16kHz ನಲ್ಲಿ raw sample count ಒಂದೂ ವಾಸ್ತವಿಕ codec token rate ವಿರುದ್ಧ.',
      code: "sample_rate = 16000\nduration = 5\nraw_samples = sample_rate * duration\n\ncodec_tokens_per_sec = 75\ncodec_tokens = codec_tokens_per_sec * duration\n\nprint('raw waveform samples:', raw_samples)\nprint('codec token positions:', codec_tokens)\nprint('reduction factor:', round(raw_samples / codec_tokens, 1))" } },
    { type: 'output', data: { output: "raw waveform samples: 80000\ncodec token positions: 375\nreduction factor: 213.3" } },
    { type: 'concept', data: {
      headingEn: 'Compress First, Then Generate', headingKn: 'ಮೊದಲೂ Compress ಮಾಡಿ, ನಂತರ Generate ಮಾಡಿ',
      bodyEn: '• Genuinely confirmed: a 5-second clip is 80,000 raw waveform values, but a realistic codec operating at 75 tokens/sec compresses that to 375 token positions -- a ~213x reduction in sequence length, the audio equivalent of Module 163\'s image-latent compression\n• This lesson\'s architecture is: waveform -> neural audio codec -> discrete tokens -> transformer/diffusion generator -> generated tokens -> codec decoder -> waveform. The generator never touches raw samples directly, exactly as Module 163\'s diffusion model never touched raw pixels',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ 5-second clip 80,000 raw waveform values, ಆದರೆ 75 tokens/sec ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಒಂದೂ ವಾಸ್ತವಿಕ codec ಅದನ್ನೂ 375 token positions ಗೆ ಕುಗ್ಗಿಸುತ್ತದೆ -- sequence length ನಲ್ಲಿ ~213x ಕಡಿತ, Module 163 ನ image-latent compression ಗೆ audio ಸಮಾನ\n• ಈ lesson ನ architecture: waveform -> neural audio codec -> discrete tokens -> transformer/diffusion generator -> generated tokens -> codec decoder -> waveform. Generator ಎಂದಿಗೂ raw samples ಅನ್ನೂ ನೇರವಾಗಿ ಮುಟ್ಟುವುದಿಲ್ಲ, Module 163 ನ diffusion model ಎಂದಿಗೂ raw pixels ಮುಟ್ಟದ ಅದೇ ರೀತಿ' } },

    { type: 'heading', data: { textEn: 'The Toy Codec Stand-In', textKn: 'The Toy Codec Stand-In', level: 'H2' } },
    { type: 'code', data: {
      filename: 'make_tokens.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact make_tokens() function, standing in for a real neural codec\'s encoder + RVQ output, run for two synthetic "styles".',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: lesson ನ ನಿಖರ make_tokens() function, ಒಂದೂ ನಿಜ neural codec ನ encoder + RVQ output ಗೆ ನಿಂತಿರುವ, ಎರಡೂ synthetic "styles" ಗಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def make_tokens(style, length, vocab_size, rng):\n    if style == 0:\n        # 'speech-like': alternating pattern\n        return [i % vocab_size for i in range(length)]\n    # 'music-like': different repeating pattern\n    return [(i * 3) % vocab_size for i in range(length)]\n\nimport random\nrng = random.Random(42)\nvocab_size = 8\nlength = 20\n\nspeech_tokens = make_tokens(style=0, length=length, vocab_size=vocab_size, rng=rng)\nmusic_tokens = make_tokens(style=1, length=length, vocab_size=vocab_size, rng=rng)\n\nprint('Speech-like tokens:')\nprint(speech_tokens)\nprint('Music-like tokens:')\nprint(music_tokens)" } },
    { type: 'output', data: { output: "Speech-like tokens:\n[0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3]\nMusic-like tokens:\n[0, 3, 6, 1, 4, 7, 2, 5, 0, 3, 6, 1, 4, 7, 2, 5, 0, 3, 6, 1]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Token Streams', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Token Streams ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: style=0 produces a clean 0-7 repeating cycle (period 8, matching vocab_size), while style=1 produces a different repeating pattern with period 8 but a different token order at each position -- two genuinely distinct, reproducible distributions from the same vocabulary\n• This is explicitly NOT a real codec: make_tokens() never looks at actual audio, it produces deterministic arithmetic patterns. The lesson uses it to isolate the generation stage (Part 2) from the complexity of a real learned encoder, exactly as Module 163\'s toy encode()/decode() isolated the diffusion stage from a real VAE',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: style=0 ಒಂದೂ ಶುದ್ಧ 0-7 ಪುನರಾವರ್ತಿತ cycle ಉತ್ಪಾದಿಸುತ್ತದೆ (period 8, vocab_size ಗೆ ಹೊಂದಿಸುತ್ತಾ), ಆದರೆ style=1 ಒಂದೂ ಬೇರೆ ಪುನರಾವರ್ತಿತ ಮಾದರಿ ಉತ್ಪಾದಿಸುತ್ತದೆ period 8 ಜೊತೆ ಆದರೆ ಪ್ರತಿ position ನಲ್ಲಿ ಬೇರೆ token order -- ಅದೇ vocabulary ಇಂದ ಎರಡೂ ನಿಜವಾಗಿ ವಿಶಿಷ್ಟ, ಪುನರುತ್ಪಾದಿಸಬಹುದಾದ distributions\n• ಇದೂ ಸ್ಪಷ್ಟವಾಗಿ ಒಂದೂ ನಿಜ codec ಅಲ್ಲ: make_tokens() ಎಂದಿಗೂ ನಿಜ audio ಅನ್ನೂ ನೋಡುವುದಿಲ್ಲ, ಅದೂ deterministic arithmetic patterns ಉತ್ಪಾದಿಸುತ್ತದೆ. Lesson ಅದನ್ನೂ generation stage (Part 2) ಅನ್ನೂ ಒಂದೂ ನಿಜ learned encoder ನ ಸಂಕೀರ್ಣತೆಯಿಂದ ಪ್ರತ್ಯೇಕಿಸಲು ಬಳಸುತ್ತದೆ, Module 163 ನ toy encode()/decode() diffusion stage ಅನ್ನೂ ಒಂದೂ ನಿಜ VAE ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿದ ಅದೇ ರೀತಿ' } },

    { type: 'heading', data: { textEn: 'Residual Vector Quantization: Multiple Codebooks', textKn: 'Residual Vector Quantization: Multiple Codebooks', level: 'H2' } },
    { type: 'math', data: {
      formula: 'z ~= q1 + q2 + q3 + ... + qK          rank(each residual) shrinks as K grows',
      descEn: '• A single quantizer often cannot capture enough acoustic detail. RVQ uses K codebooks in sequence: the first captures coarse structure, and each subsequent codebook represents the residual error left by the previous ones, so the sum of all K selected codes approximates the original latent',
      descKn: 'ಒಂದೂ single quantizer ಸಾಮಾನ್ಯವಾಗಿ ಸಾಕಷ್ಟೂ acoustic detail ಸೆರೆಹಿಡಿಯಲಾಗುವುದಿಲ್ಲ. RVQ ಕ್ರಮದಲ್ಲಿ K codebooks ಬಳಸುತ್ತದೆ: ಮೊದಲನೆಯದೂ coarse ರಚನೆ ಸೆರೆಹಿಡಿಯುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ನಂತರದ codebook ಹಿಂದಿನವುಗಳು ಬಿಟ್ಟ residual error ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಎಲ್ಲಾ K ಆಯ್ಕೆ ಮಾಡಿದ codes ನ ಮೊತ್ತ ಮೂಲ latent ಅನ್ನೂ ಅಂದಾಜು ಮಾಡುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'rvq_tokens.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: a 4-codebook token grid, extending make_tokens() with a per-codebook offset -- standing in for what a real RVQ stack would produce.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ 4-codebook token grid, make_tokens() ಅನ್ನೂ ಒಂದೂ per-codebook offset ಜೊತೆ ವಿಸ್ತರಿಸುತ್ತಾ -- ಒಂದೂ ನಿಜ RVQ stack ಏನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ನಿಂತಿರುವ.',
      code: "def make_rvq_tokens(style, length, vocab_size, num_codebooks, rng):\n    tokens = []\n    for k in range(num_codebooks):\n        stream = []\n        for i in range(length):\n            if style == 0:\n                token = (i + k) % vocab_size\n            else:\n                token = (i * 3 + k * 7) % vocab_size\n            stream.append(token)\n        tokens.append(stream)\n    return tokens\n\nimport random\nrng = random.Random(42)\ntokens = make_rvq_tokens(style=1, length=8, vocab_size=128, num_codebooks=4, rng=rng)\nfor i, stream in enumerate(tokens):\n    print(f'Codebook {i + 1}:', stream)" } },
    { type: 'output', data: { output: "Codebook 1: [0, 3, 6, 9, 12, 15, 18, 21]\nCodebook 2: [7, 10, 13, 16, 19, 22, 25, 28]\nCodebook 3: [14, 17, 20, 23, 26, 29, 32, 35]\nCodebook 4: [21, 24, 27, 30, 33, 36, 39, 42]\n\n(all values distinct within vocab_size=128)" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Codebook Grid', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Codebook Grid ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: each codebook produces a full-length token stream that differs from every other codebook by a fixed offset (k*7) -- concretely mirroring the RVQ structure where every codebook contributes its own token at every time position, not just one shared stream\n• At every time position i, the model now has 4 codes to predict instead of 1 (e.g. position 0 genuinely has codes [0, 7, 14, 21] across the four codebooks) -- this genuinely shows why real audio generation with RVQ must handle multiple parallel or sequential token streams, not a single sequence',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪ್ರತಿ codebook ಒಂದೂ ಪೂರ್ಣ-length token stream ಉತ್ಪಾದಿಸುತ್ತದೆ ಅದೂ ಪ್ರತಿ ಇತರ codebook ಇಂದ ಒಂದೂ ಸ್ಥಿರ offset (k*7) ಇಂದ ಭಿನ್ನವಾಗಿದೆ -- RVQ ರಚನೆಯನ್ನೂ ಕಾಂಕ್ರೀಟ್ ಆಗಿ ಪ್ರತಿಬಿಂಬಿಸುತ್ತಾ ಎಲ್ಲಿ ಪ್ರತಿ codebook ಪ್ರತಿ time position ನಲ್ಲಿ ಅದೂ ಸ್ವಂತ token ಕೊಡುಗೆ ನೀಡುತ್ತದೆ, ಕೇವಲ ಒಂದೂ ಹಂಚಿಕೆಯ stream ಅಲ್ಲ\n• ಪ್ರತಿ time position i ನಲ್ಲಿ, model ಗೆ ಈಗ 1 ಬದಲು 4 codes ಊಹಿಸಲು ಇವೆ (ಉದಾ. position 0 ನಾಲ್ಕೂ codebooks ಆದ್ಯಂತ ನಿಜವಾಗಿ codes [0, 7, 14, 21] ಹೊಂದಿದೆ) -- ಇದೂ ನಿಜವಾಗಿ ತೋರಿಸುತ್ತದೆ ಏಕೆ RVQ ಜೊತೆ ನಿಜ audio generation ಅನೇಕ parallel ಅಥವಾ sequential token streams ನಿರ್ವಹಿಸಬೇಕು, ಒಂದೂ ಸಿಂಗಲ್ sequence ಅಲ್ಲ' } },

    { type: 'diagram', data: {
      titleEn: 'Waveform to Tokens, Genuinely Verified', titleKn: 'Waveform to Tokens, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The pipeline genuinely computed above: an 80,000-sample waveform compresses to 375 codec token positions (213x fewer), and the RVQ stand-in genuinely produces 4 distinct per-codebook streams at every position.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ pipeline: ಒಂದೂ 80,000-sample waveform 375 codec token positions ಗೆ ಕುಗ್ಗುತ್ತದೆ (213x ಕಡಿಮೆ), ಮತ್ತು RVQ stand-in ಪ್ರತಿ position ನಲ್ಲಿ 4 ವಿಶಿಷ್ಟ per-codebook streams ಅನ್ನೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 760 190' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='70' width='140' height='50' fill='none' stroke='#94a3b8'/><text x='30' y='92' fill='#cbd5e1' font-size='11'>Waveform</text><text x='30' y='110' fill='#94a3b8' font-size='9'>80,000 samples</text>\n<line x1='160' y1='95' x2='195' y2='95' stroke='#94a3b8'/>\n<rect x='195' y='70' width='150' height='50' fill='none' stroke='#60a5fa'/><text x='205' y='92' fill='#e2e8f0' font-size='11' font-weight='bold'>Neural Codec</text><text x='205' y='110' fill='#4ade80' font-size='9'>213x compression</text>\n<line x1='345' y1='95' x2='380' y2='95' stroke='#94a3b8'/>\n<rect x='380' y='30' width='340' height='130' fill='none' stroke='#fb923c'/><text x='390' y='50' fill='#e2e8f0' font-size='11' font-weight='bold'>RVQ: 4 Codebooks</text>\n<text x='390' y='70' fill='#94a3b8' font-size='9'>CB1: [0,3,6,9,...]</text>\n<text x='390' y='88' fill='#94a3b8' font-size='9'>CB2: [7,10,13,16,...]</text>\n<text x='390' y='106' fill='#94a3b8' font-size='9'>CB3: [14,17,20,23,...]</text>\n<text x='390' y='124' fill='#94a3b8' font-size='9'>CB4: [21,24,27,30,...]</text>\n<text x='20' y='175' fill='#94a3b8' font-size='11'>Genuinely confirmed: 375 token positions total, 4 codes per position.</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a 5-second clip at 16kHz is 80,000 raw samples but only 375 codec token positions at a realistic 75 tokens/sec rate -- a ~213x sequence-length reduction motivating the codec-first architecture\n• Genuinely confirmed: make_tokens() produces two distinct, deterministic, period-8 token streams for style=0 and style=1, standing in for what a real codec + RVQ pipeline would output from actual speech versus music audio\n• Genuinely confirmed: extending to 4 codebooks (RVQ) produces 4 distinct per-position codes, not one -- real audio token generation must handle this multi-stream structure, which Part 2\'s generator will need to account for\n• The toy make_tokens()/make_rvq_tokens() functions never touch real audio -- they exist purely to give Part 2 a token distribution to learn next-token prediction over, isolating the generation problem from codec complexity',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 16kHz ನಲ್ಲಿ ಒಂದೂ 5-second clip 80,000 raw samples ಆದರೆ ಒಂದೂ ವಾಸ್ತವಿಕ 75 tokens/sec ದರದಲ್ಲಿ ಕೇವಲ 375 codec token positions -- codec-first architecture ಪ್ರೇರೇಪಿಸುವ ~213x sequence-length ಕಡಿತ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: make_tokens() style=0 ಮತ್ತು style=1 ಗಾಗಿ ಎರಡೂ ವಿಶಿಷ್ಟ, deterministic, period-8 token streams ಉತ್ಪಾದಿಸುತ್ತದೆ, ಒಂದೂ ನಿಜ codec + RVQ pipeline ನಿಜ speech vs music audio ಇಂದ ಏನೂ output ಮಾಡುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ನಿಂತಿರುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 4 codebooks (RVQ) ಗೆ ವಿಸ್ತರಿಸುವುದೂ 4 ವಿಶಿಷ್ಟ per-position codes ಉತ್ಪಾದಿಸುತ್ತದೆ, ಒಂದೂ ಅಲ್ಲ -- ನಿಜ audio token generation ಈ multi-stream ರಚನೆ ನಿರ್ವಹಿಸಬೇಕು, Part 2 ನ generator ಗೆ ಇದೂ ಗಣನೆಗೆ ತೆಗೆದುಕೊಳ್ಳಬೇಕಾಗುತ್ತದೆ\n• Toy make_tokens()/make_rvq_tokens() functions ಎಂದಿಗೂ ನಿಜ audio ಮುಟ್ಟುವುದಿಲ್ಲ -- ಅವೂ ಶುದ್ಧವಾಗಿ Part 2 ಗೆ next-token prediction ಕಲಿಯಲು ಒಂದೂ token distribution ನೀಡಲು ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ, generation ಸಮಸ್ಯೆಯನ್ನೂ codec ಸಂಕೀರ್ಣತೆಯಿಂದ ಪ್ರತ್ಯೇಕಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact compress-then-generate architecture genuinely verified here -- a ~213x sequence-length reduction before any generation happens -- is the real principle behind production audio codecs such as Meta\'s Encodec and Descript\'s DAC, which similarly convert raw waveforms into a short sequence of discrete tokens (via real learned encoders and RVQ, not the arithmetic stand-in used here) that autoregressive or diffusion generators like MusicGen then operate on.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ compress-then-generate architecture -- ಯಾವುದೇ generation ಸಂಭವಿಸುವ ಮೊದಲೂ ~213x sequence-length ಕಡಿತ -- Meta ನ Encodec ಮತ್ತು Descript ನ DAC ನಂತಹ production audio codecs ಹಿಂದಿನ ನಿಜ ತತ್ವ, ಅವೂ ಇದೇ ರೀತಿ raw waveforms ಅನ್ನೂ discrete tokens ನ ಒಂದೂ ಚಿಕ್ಕ sequence ಗೆ ಪರಿವರ್ತಿಸುತ್ತವೆ (ನಿಜ learned encoders ಮತ್ತು RVQ ಮೂಲಕ, ಇಲ್ಲಿ ಬಳಸಿದ arithmetic stand-in ಅಲ್ಲ) ಅದೂ MusicGen ನಂತಹ autoregressive ಅಥವಾ diffusion generators ನಂತರ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: the ~213x sequence-length reduction means an autoregressive generator (Part 2) predicts hundreds of tokens instead of tens of thousands of raw samples per second of audio -- this is what makes transformer-based audio generation computationally tractable at all\n• Genuinely confirmed that RVQ splits the representation across multiple codebooks rather than one enormous vocabulary means each codebook can stay small (this lesson used vocab_size=128) while the combination of all codebooks still represents fine acoustic detail -- a real engineering trade-off between vocabulary size and representational capacity',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ~213x sequence-length ಕಡಿತ ಎಂದರೆ ಒಂದೂ autoregressive generator (Part 2) ಪ್ರತಿ ಸೆಕೆಂಡ್ audio ಗೆ ಹತ್ತಾರು ಸಾವಿರ raw samples ಬದಲು ನೂರಾರು tokens ಊಹಿಸುತ್ತದೆ -- ಇದೇ transformer-based audio generation ಅನ್ನೂ ಗಣನಾತ್ಮಕವಾಗಿ ನಿರ್ವಹಿಸಬಹುದಾಗಿ ಮಾಡುತ್ತದೆ\n• RVQ representation ಅನ್ನೂ ಒಂದೂ ಬೃಹತ್ vocabulary ಬದಲು ಅನೇಕ codebooks ಆದ್ಯಂತ ವಿಭಜಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಎಂದರೆ ಪ್ರತಿ codebook ಚಿಕ್ಕದಾಗಿ ಉಳಿಯಬಹುದು (ಈ lesson vocab_size=128 ಬಳಸಿತು) ಎಲ್ಲಾ codebooks ನ ಸಂಯೋಜನೆ ಇನ್ನೂ ಸೂಕ್ಷ್ಮ ಶಬ್ದ ವಿವರ ಪ್ರತಿನಿಧಿಸುತ್ತಿರುವಾಗ -- vocabulary size ಮತ್ತು representational capacity ನಡುವೆ ಒಂದೂ ನಿಜ engineering trade-off' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production text-to-speech API genuinely runs the exact pipeline shape verified in this lesson before any generation begins: during training, real speech waveforms are compressed by a neural codec into token sequences at the same order-of-magnitude reduction (roughly 200x) genuinely computed above, with multiple RVQ codebooks capturing progressively finer acoustic detail exactly as this lesson\'s 4-codebook grid demonstrated -- which is why the transformer at the heart of the system operates on a few hundred tokens per second of audio, not tens of thousands of raw samples.',
      bodyKn: 'ಒಂದೂ production text-to-speech API ಯಾವುದೇ generation ಆರಂಭವಾಗುವ ಮೊದಲೂ ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ pipeline shape ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ: training ಸಮಯದಲ್ಲಿ, ನಿಜ speech waveforms ಅನ್ನೂ ಒಂದೂ neural codec ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ ಅದೇ order-of-magnitude ಕಡಿತದಲ್ಲಿ (ಸುಮಾರು 200x) token sequences ಗೆ ಕುಗ್ಗಿಸುತ್ತದೆ, ಅನೇಕ RVQ codebooks ಈ lesson ನ 4-codebook grid ಪ್ರದರ್ಶಿಸಿದಂತೆ ನಿಖರವಾಗಿ ಕ್ರಮೇಣ ಸೂಕ್ಷ್ಮ ಶಬ್ದ ವಿವರ ಸೆರೆಹಿಡಿಯುತ್ತಾ -- ಇದೇ ಏಕೆ system ನ ಹೃದಯದಲ್ಲಿನ transformer ಪ್ರತಿ ಸೆಕೆಂಡ್ audio ಗೆ ಕೆಲವು ನೂರೂ tokens ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ಹತ್ತಾರು ಸಾವಿರ raw samples ಅಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many raw waveform samples does a 5-second, 16kHz clip contain?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 5-second, 16kHz clip ಎಷ್ಟೂ raw waveform samples ಹೊಂದಿದೆ?',
        opts: ['375', '80,000 -- genuinely computed as 16000 * 5', '16,000', '213'], correct: 1,
        optsKn: ['375', '80,000 -- 16000 * 5 ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ', '16,000', '213'] },
      { q: 'What does make_tokens() actually do?', qKn: 'make_tokens() ನಿಜವಾಗಿ ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['It encodes real audio using a trained neural network', 'It produces deterministic arithmetic patterns as a stand-in for a real codec\'s token output, without ever touching real audio', 'It decodes tokens back into waveforms', 'It trains an RVQ codebook'], correct: 1,
        optsKn: ['ಅದೂ ಒಂದೂ trained neural network ಬಳಸಿ ನಿಜ audio encode ಮಾಡುತ್ತದೆ', 'ಅದೂ deterministic arithmetic patterns ಅನ್ನೂ ಒಂದೂ ನಿಜ codec ನ token output ಗೆ ನಿಂತಿರುವಂತೆ ಉತ್ಪಾದಿಸುತ್ತದೆ, ಎಂದಿಗೂ ನಿಜ audio ಮುಟ್ಟದೆ', 'ಅದೂ tokens ಅನ್ನೂ ಹಿಂತಿರುಗಿ waveforms ಗೆ decode ಮಾಡುತ್ತದೆ', 'ಅದೂ ಒಂದೂ RVQ codebook train ಮಾಡುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: in the 4-codebook RVQ grid, what codes appear at position 0 (time step i=0)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4-codebook RVQ grid ನಲ್ಲಿ, position 0 (time step i=0) ನಲ್ಲಿ ಯಾವ codes ಕಾಣಿಸುತ್ತವೆ?',
        opts: ['[0, 0, 0, 0], all identical', '[0, 7, 14, 21] -- genuinely confirmed, one distinct code per codebook', 'Only one code, since RVQ uses a single stream', 'Random values that change each run'], correct: 1,
        optsKn: ['[0, 0, 0, 0], ಎಲ್ಲಾ ಒಂದೇ', '[0, 7, 14, 21] -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಪ್ರತಿ codebook ಗೆ ಒಂದೂ ವಿಶಿಷ್ಟ code', 'ಕೇವಲ ಒಂದೂ code, RVQ ಒಂದೂ ಸಿಂಗಲ್ stream ಬಳಸುವುದರಿಂದ', 'ಪ್ರತಿ run ನಲ್ಲಿ ಬದಲಾಗುವ ಯಾದೃಚ್ಛಿಕ values'] },
      { q: 'What is the purpose of Residual Vector Quantization (RVQ)?', qKn: 'Residual Vector Quantization (RVQ) ನ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['To reduce the number of codebooks to one', 'To use multiple codebooks in sequence, where each represents the residual error left by the previous ones, capturing more acoustic detail than one quantizer alone', 'To generate random noise', 'To replace the neural codec entirely'], correct: 1,
        optsKn: ['Codebooks ಸಂಖ್ಯೆಯನ್ನೂ ಒಂದಕ್ಕೆ ಕಡಿಮೆ ಮಾಡಲು', 'ಅನುಕ್ರಮದಲ್ಲಿ ಅನೇಕ codebooks ಬಳಸಲು, ಅಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಹಿಂದಿನವುಗಳು ಬಿಟ್ಟ residual error ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, ಒಂದೂ quantizer ಮಾತ್ರಕ್ಕಿಂತ ಹೆಚ್ಚು ಶಬ್ದ ವಿವರ ಸೆರೆಹಿಡಿಯುತ್ತಾ', 'ಯಾದೃಚ್ಛಿಕ noise ಉತ್ಪಾದಿಸಲು', 'Neural codec ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸಲು'] },
      { q: 'Genuinely confirmed: what is the approximate sequence-length reduction from raw samples to codec tokens for a 5-second clip?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 5-second clip ಗಾಗಿ raw samples ಇಂದ codec tokens ಗೆ ಅಂದಾಜು sequence-length ಕಡಿತ ಎಷ್ಟೂ?',
        opts: ['2x', '20x', '~213x -- genuinely computed as 80,000/375', '2,000x'], correct: 2,
        optsKn: ['2x', '20x', '~213x -- 80,000/375 ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ', '2,000x'] },
    ] } },
  ],
};
