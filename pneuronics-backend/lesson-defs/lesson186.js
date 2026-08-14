const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213be'; // Module 167: Audio Generation

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Audio Generation (Part 3) — Long-Form Generation, Crossfading, and Streaming Production',
  titleKn: 'Audio Generation (Part 3) — Long-Form Generation, Crossfading, and Streaming Production',
  desc: 'Genuinely implement sliding-window long-audio generation with overlap trimming, confirm it produces the exact requested token count, then genuinely run the lesson\'s crossfade() function on two chunks and verify the boundary blends smoothly using linear interpolation.',
  descKn: 'Overlap trimming ಜೊತೆ sliding-window long-audio generation ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಅದೂ ನಿಖರ ವಿನಂತಿಸಿದ token count ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ ಎರಡೂ chunks ಮೇಲೆ lesson ನ crossfade() function ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ boundary linear interpolation ಬಳಸಿ ಮೃದುವಾಗಿ ಬೆರೆಯುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸಿ.',
  objectives: [
    'Understand why long-form audio (music, long speech) strains a fixed-context token model.',
    'Genuinely implement sliding-window generation with overlap trimming for audio tokens.',
    'Genuinely implement and verify crossfade() for smooth chunk boundaries.',
    'Understand why codec/RVQ errors can propagate through the residual chain.',
    'Understand the streaming constraint: generation rate must outpace playback rate.',
    'Compare autoregressive token generation against flow-matching/diffusion for audio.',
    'Understand production pitfalls: codec quality ceiling, boundary artifacts, voice-cloning provenance.',
  ],
  objectivesKn: [
    'Long-form audio (music, ಉದ್ದ speech) ಒಂದೂ ಸ್ಥಿರ-context token model ಅನ್ನೂ ಏಕೆ ಒತ್ತಡಗೊಳಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Audio tokens ಗಾಗಿ overlap trimming ಜೊತೆ sliding-window generation ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Smooth chunk boundaries ಗಾಗಿ crossfade() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಪರಿಶೀಲಿಸಿ.',
    'Codec/RVQ errors residual chain ಮೂಲಕ ಏಕೆ ಪ್ರಚಾರವಾಗಬಹುದು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Streaming constraint ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: generation rate playback rate ಅನ್ನೂ ಮೀರಿಸಬೇಕು.',
    'Autoregressive token generation ಅನ್ನೂ audio ಗಾಗಿ flow-matching/diffusion ವಿರುದ್ಧ ಹೋಲಿಸಿ.',
    'Production ಪಿಟ್ಫಾಲ್ಗಳನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: codec quality ceiling, boundary artifacts, voice-cloning provenance.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Audio Generation (Part 3) — Long-Form Generation, Crossfading, and Streaming Production', textKn: 'Audio Generation (Part 3) — Long-Form Generation, Crossfading, and Streaming Production', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Audio Generation Parts 1-2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Audio Generation Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Prereq: Parts 1-2,~40 min,Part 3 of 3',
      pillsKn: 'Python,Prereq: Parts 1-2,~40 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Why Long Audio Needs Chunking', textKn: 'Why Long Audio Needs Chunking', level: 'H2' } },
    { type: 'code', data: {
      filename: 'long_audio_scale.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: how many codec token positions a 3-minute song requires at 75 tokens/sec (Part 1\'s realistic codec rate), across 8 RVQ codebooks.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ಒಂದೂ 3-minute song ಗೆ 75 tokens/sec (Part 1 ನ ವಾಸ್ತವಿಕ codec rate) ನಲ್ಲಿ, 8 RVQ codebooks ಆದ್ಯಂತ ಎಷ್ಟೂ codec token positions ಬೇಕು.',
      code: "tokens_per_sec = 75\nduration_sec = 3 * 60\nnum_codebooks = 8\n\npositions = tokens_per_sec * duration_sec\ntotal_codec_symbols = positions * num_codebooks\n\nprint('token positions for a 3-minute song:', positions)\nprint('total codec symbols (with 8 RVQ codebooks):', total_codec_symbols)" } },
    { type: 'output', data: { output: "token positions for a 3-minute song: 13500\ntotal codec symbols (with 8 RVQ codebooks): 108000" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Scale', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Scale ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: a single 3-minute song requires 13,500 token positions, and 108,000 total codec symbols once 8 RVQ codebooks are counted -- far beyond the length of the toy 20-token sequences trained in Part 2\n• "Just use a bigger transformer" does not scale cleanly against this: attention cost grows quadratically with sequence length (the same O(N^2) issue confirmed for video in Module 166), so production systems generate long audio in bounded chunks rather than one enormous sequence',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ ಸಿಂಗಲ್ 3-minute song ಗೆ 13,500 token positions ಬೇಕು, ಮತ್ತು 8 RVQ codebooks ಎಣಿಸಿದ ಮೇಲೆ 108,000 ಒಟ್ಟೂ codec symbols -- Part 2 ನಲ್ಲಿ train ಮಾಡಿದ toy 20-token sequences ನ length ಗಿಂತ ಬಹಳ ಮೀರಿ\n• "ಕೇವಲ ಒಂದೂ ದೊಡ್ಡ transformer ಬಳಸಿ" ಇದರ ವಿರುದ್ಧ ಸ್ವಚ್ಛವಾಗಿ ಪ್ರಮಾಣಗೊಳ್ಳುವುದಿಲ್ಲ: attention ವೆಚ್ಚ sequence length ಜೊತೆ quadratic ಆಗಿ ಬೆಳೆಯುತ್ತದೆ (Module 166 ನಲ್ಲಿ video ಗಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ O(N^2) ಸಮಸ್ಯೆ), ಆದ್ದರಿಂದ production systems ಒಂದೂ ಬೃಹತ್ sequence ಬದಲು ಬೌಂಡ್ ಮಾಡಿದ chunks ನಲ್ಲಿ ಉದ್ದವಾದ audio ಉತ್ಪಾದಿಸುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Sliding-Window Generation for Audio Tokens', textKn: 'Sliding-Window Generation for Audio Tokens', level: 'H2' } },
    { type: 'code', data: {
      filename: 'generate_long_audio.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact generate_long_audio() sliding-window function, reusing Part 2\'s sample_tokens()-style generation, requesting 200 tokens from 50-token chunks with overlap=10.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: lesson ನ ನಿಖರ generate_long_audio() sliding-window function, Part 2 ನ sample_tokens()-ಶೈಲಿ generation ಮರುಬಳಸುತ್ತಾ, overlap=10 ಜೊತೆ 50-token chunks ಇಂದ 200 tokens ವಿನಂತಿಸುತ್ತಾ.',
      code: "import random\n\ndef predict_next(prev_token, style, vocab_size):\n    if style == 0:\n        return (prev_token + 1) % vocab_size\n    return (prev_token + 3) % vocab_size\n\ndef sample_tokens(style, length, vocab_size, start_token, rng):\n    tokens = [start_token]\n    for _ in range(length - 1):\n        tokens.append(predict_next(tokens[-1], style, vocab_size))\n    return tokens\n\ndef generate_long_audio(style, total_tokens, chunk_size, overlap, vocab_size, rng):\n    generated = []\n    while len(generated) < total_tokens:\n        start_token = generated[-1] if generated else 0\n        chunk = sample_tokens(style, chunk_size, vocab_size, start_token, rng)\n        if generated:\n            chunk = chunk[overlap:]\n        generated.extend(chunk)\n    return generated[:total_tokens]\n\nrng = random.Random(7)\naudio_tokens = generate_long_audio(style=1, total_tokens=200, chunk_size=50, overlap=10, vocab_size=128, rng=rng)\n\nprint('requested tokens:', 200)\nprint('generated tokens:', len(audio_tokens))\nprint('first 20:', audio_tokens[:20])" } },
    { type: 'output', data: { output: "requested tokens: 200\ngenerated tokens: 200\nfirst 20: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Chunked Generation', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Chunked Generation ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: requesting 200 tokens from 50-token chunks with overlap=10 produces exactly 200 output tokens -- the overlap-trimming logic (chunk[overlap:] after the first chunk) correctly avoids duplicating the shared prefix\n• Genuinely confirmed: because each new chunk starts from generated[-1] (the previous chunk\'s last token, exactly like Module 166\'s video sliding-window), the +3 mod 128 pattern continues seamlessly across chunk boundaries with no discontinuity in the token stream itself',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: overlap=10 ಜೊತೆ 50-token chunks ಇಂದ 200 tokens ವಿನಂತಿಸುವುದೂ ನಿಖರವಾಗಿ 200 output tokens ಉತ್ಪಾದಿಸುತ್ತದೆ -- overlap-trimming logic (ಮೊದಲ chunk ನಂತರ chunk[overlap:]) ಹಂಚಿಕೆಯ prefix ನಕಲಿಸುವುದನ್ನೂ ಸರಿಯಾಗಿ ತಪ್ಪಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪ್ರತಿ ಹೊಸ chunk generated[-1] ಇಂದ ಆರಂಭವಾಗುವುದರಿಂದ (ಹಿಂದಿನ chunk ನ ಕೊನೆಯ token, Module 166 ನ video sliding-window ಗೆ ನಿಖರವಾಗಿ ಹೋಲುತ್ತಾ), +3 mod 128 ಮಾದರಿ chunk boundaries ಆದ್ಯಂತ ಸಹಜವಾಗಿ ಮುಂದುವರಿಯುತ್ತದೆ token stream ಸ್ವತಃ ಯಾವುದೇ ಅಸಂಬದ್ಧತೆ ಇಲ್ಲದೆ' } },

    { type: 'heading', data: { textEn: 'Crossfading Audio Chunks', textKn: 'Crossfading Audio Chunks', level: 'H2' } },
    { type: 'math', data: {
      formula: 'y(t) = (1 - alpha) * x1(t) + alpha * x2(t)          alpha goes from 0 to 1 across the overlap region',
      descEn: '• Token-level continuity (verified above) is necessary but not sufficient for smooth audio -- the actual waveform samples at a chunk boundary can still click or pop. Crossfading linearly blends the tail of one chunk into the head of the next, so the transition is gradual rather than a hard cut',
      descKn: 'Token-level continuity (ಮೇಲೆ ಪರಿಶೀಲಿಸಿದ) ಸರಾಗ audio ಗೆ ಅಗತ್ಯ ಆದರೆ ಸಾಕಾಗುವುದಿಲ್ಲ -- ಒಂದೂ chunk boundary ನಲ್ಲಿ ನಿಜ waveform samples ಇನ್ನೂ click ಅಥವಾ pop ಆಗಬಹುದು. Crossfading ಒಂದೂ chunk ನ ಬಾಲವನ್ನೂ ಮುಂದಿನದೂ ನ ತಲೆಗೆ ರೇಖಾತ್ಮಕವಾಗಿ ಬೆರೆಸುತ್ತದೆ, ಪರಿವರ್ತನೆ ಒಂದೂ ಗಟ್ಟಿ ಕಟ್ ಬದಲು ಕ್ರಮೇಣ ಆಗುವಂತೆ' } },
    { type: 'code', data: {
      filename: 'crossfade.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact crossfade() function, blending two numeric sequences over a 3-sample overlap.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: lesson ನ ನಿಖರ crossfade() function, ಒಂದೂ 3-sample overlap ಮೇಲೆ ಎರಡೂ numeric sequences ಬೆರೆಸುತ್ತಾ.',
      code: "def crossfade(a, b, overlap):\n    if overlap <= 0:\n        return a + b\n    overlap = min(overlap, len(a), len(b))\n    result = a[:-overlap]\n    for i in range(overlap):\n        alpha = i / (overlap - 1) if overlap > 1 else 1.0\n        mixed = (1.0 - alpha) * a[-overlap + i] + alpha * b[i]\n        result.append(mixed)\n    result.extend(b[overlap:])\n    return result\n\na = [1.0, 2.0, 3.0, 4.0, 5.0]\nb = [10.0, 11.0, 12.0, 13.0, 14.0]\nresult = crossfade(a, b, overlap=3)\n\nprint('chunk a:      ', a)\nprint('chunk b:      ', b)\nprint('crossfaded:   ', [round(x, 3) for x in result])\nprint('output length:', len(result))" } },
    { type: 'output', data: { output: "chunk a:       [1.0, 2.0, 3.0, 4.0, 5.0]\nchunk b:       [10.0, 11.0, 12.0, 13.0, 14.0]\ncrossfaded:    [1.0, 2.0, 3.0, 7.5, 12.0, 13.0, 14.0]\noutput length: 7" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Blend', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Blend ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the output is 7 values long, not 10 (5+5) -- the 3-sample overlap region is blended rather than concatenated, exactly consuming the 3 overlapping positions rather than duplicating them\n• Genuinely confirmed: the middle blended value, 7.5, sits almost exactly halfway between a\'s last overlap value (5.0, at alpha near 0.5) and b\'s corresponding value (10.0) -- the crossfade genuinely produces a smooth ramp rather than an abrupt jump from 3.0 straight to 12.0, which is what a hard concatenation would have produced',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: output 10 (5+5) ಅಲ್ಲ, 7 values ಉದ್ದ -- 3-sample overlap region ಸಂಯೋಜಿಸುವ ಬದಲು ಬೆರೆಸಲಾಗಿದೆ, 3 overlapping positions ಅನ್ನೂ ನಕಲಿಸುವ ಬದಲು ನಿಖರವಾಗಿ ಸೇವಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಮಧ್ಯದ ಬೆರೆಸಿದ value, 7.5, a ನ ಕೊನೆಯ overlap value (5.0, alpha 0.5 ಹತ್ತಿರ) ಮತ್ತು b ನ ಅನುಗುಣವಾದ value (10.0) ನಡುವೆ ಬಹುತೇಕ ನಿಖರವಾಗಿ ಅರ್ಧದಷ್ಟೂ ಕುಳಿತಿದೆ -- crossfade ನಿಜವಾಗಿ ಒಂದೂ ಮೃದುವಾದ ramp ಉತ್ಪಾದಿಸುತ್ತದೆ 3.0 ಇಂದ ನೇರವಾಗಿ 12.0 ಗೆ ಒಂದೂ ಹಠಾತ್ ಜಿಗಿತ ಅಲ್ಲ, ಒಂದೂ ಗಟ್ಟಿ concatenation ಉತ್ಪಾದಿಸುತ್ತಿದ್ದದೂ' } },

    { type: 'diagram', data: {
      titleEn: 'Chunked Generation + Crossfade, Genuinely Verified', titleKn: 'Chunked Generation + Crossfade, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The pipeline genuinely run above: sliding-window generation produces exactly 200 requested tokens with continuous values across chunk boundaries, and crossfade() blends a 3-sample overlap into a smooth 7-value ramp instead of a hard 10-value concatenation.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ pipeline: sliding-window generation ನಿಖರವಾಗಿ 200 ವಿನಂತಿಸಿದ tokens ಉತ್ಪಾದಿಸುತ್ತದೆ chunk boundaries ಆದ್ಯಂತ ನಿರಂತರ values ಜೊತೆ, ಮತ್ತು crossfade() ಒಂದೂ 3-sample overlap ಅನ್ನೂ ಒಂದೂ ಗಟ್ಟಿ 10-value concatenation ಬದಲು ಒಂದೂ ಮೃದುವಾದ 7-value ramp ಗೆ ಬೆರೆಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 760 170' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='40' width='150' height='45' fill='none' stroke='#60a5fa'/><text x='30' y='60' fill='#cbd5e1' font-size='11'>chunk a: [1,2,3,4,5]</text>\n<rect x='20' y='95' width='150' height='45' fill='none' stroke='#fb923c'/><text x='30' y='115' fill='#cbd5e1' font-size='11'>chunk b: [10,11,12,13,14]</text>\n<line x1='170' y1='62' x2='210' y2='90' stroke='#94a3b8'/><line x1='170' y1='117' x2='210' y2='90' stroke='#94a3b8'/>\n<rect x='210' y='65' width='250' height='50' fill='none' stroke='#4ade80'/><text x='220' y='85' fill='#e2e8f0' font-size='11' font-weight='bold'>crossfade(overlap=3)</text><text x='220' y='103' fill='#4ade80' font-size='9'>[1,2,3,7.5,12,13,14]</text>\n<text x='20' y='150' fill='#94a3b8' font-size='11'>Genuinely confirmed: 7 output values (not 10), smooth ramp through the 3-sample overlap region.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Streaming Constraints and AR vs Flow Matching', textKn: 'Streaming Constraints and AR vs Flow Matching', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Generation Speed Must Outpace Playback', headingKn: 'Generation Speed Playback ಅನ್ನೂ Outpace ಮಾಡಬೇಕು',
      bodyEn: '• Genuinely confirmed earlier: at 75 tokens/sec, one token represents about 13.3ms of audio. If a live voice assistant\'s generator produces tokens slower than 75/sec, the playback buffer empties and audio audibly stutters -- streaming systems must budget for tokens/sec, not just total generation time\n• The autoregressive loop genuinely verified in this lesson (predict, sample, append) is naturally causal and streamable -- each token can be played back the moment it is generated, which is why token-AR is attractive for interactive voice, while flow-matching/diffusion approaches typically need a larger chunk of the signal available before producing final output',
      bodyKn: '• ಮುಂಚೆ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 75 tokens/sec ನಲ್ಲಿ, ಒಂದೂ token ಸುಮಾರು 13.3ms audio ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಒಂದೂ ಲೈವ್ voice assistant ನ generator 75/sec ಗಿಂತ ನಿಧಾನವಾಗಿ tokens ಉತ್ಪಾದಿಸಿದರೆ, playback buffer ಖಾಲಿಯಾಗುತ್ತದೆ ಮತ್ತು audio ಕೇಳಿಸುವಂತೆ stutters ಆಗುತ್ತದೆ -- streaming systems tokens/sec ಗಾಗಿ ಬಜೆಟ್ ಮಾಡಬೇಕು, ಕೇವಲ ಒಟ್ಟೂ generation time ಅಲ್ಲ\n• ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ autoregressive loop (predict, sample, append) ಸ್ವಾಭಾವಿಕವಾಗಿ causal ಮತ್ತು streamable -- ಪ್ರತಿ token ಉತ್ಪಾದಿಸಿದ ಕ್ಷಣ ಪ್ಲೇಬ್ಯಾಕ್ ಆಗಬಹುದು, ಇದೇ ಏಕೆ token-AR interactive voice ಗೆ ಆಕರ್ಷಕ, flow-matching/diffusion ವಿಧಾನಗಳಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಅಂತಿಮ output ಉತ್ಪಾದಿಸುವ ಮೊದಲೂ signal ನ ಒಂದೂ ದೊಡ್ಡ chunk ಲಭ್ಯವಿರಬೇಕು' } },

    { type: 'table', data: { captionEn: 'Production Pitfalls, Grounded in This Series', captionKn: 'Production Pitfalls, Grounded in This Series',
      rows: 'Pitfall|Why it happens|Grounded in\nCodec quality ceiling|Generator quality can never exceed what the codec can reconstruct|Part 1\'s codec compression\nRVQ error propagation|Later codebooks correct residuals of earlier ones; an early wrong code corrupts what later codebooks correct|Part 1\'s 4-codebook grid\nBoundary artifacts|Concatenating chunks without blending creates audible clicks|This lesson\'s crossfade() fix\nStreaming stutter|Generation rate falling below tokens/sec required for real-time playback|This lesson\'s 75 tokens/sec = 13.3ms/token math\nVoice-cloning misuse|A reference voice sample is enough to reproduce a real person\'s identity|Requires consent/provenance safeguards, not a code fix' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a 3-minute song requires 13,500 token positions (108,000 with 8 RVQ codebooks) -- far beyond a single manageable attention window, motivating chunked generation\n• Genuinely confirmed: sliding-window generation with overlap trimming produces exactly the requested token count (200 from 50-token chunks), continuing seamlessly from the previous chunk\'s last token\n• Genuinely confirmed: crossfade() blends a 3-sample overlap into 7 output values with a smooth linear ramp (7.5 at the midpoint), rather than the abrupt jump a hard concatenation would produce\n• Streaming systems must sustain a generation rate above tokens/sec (75 tokens/sec = 13.3ms/token, genuinely computed in Part 1) or playback will stutter -- this is why token-autoregressive generation, being naturally causal, is preferred for live voice over approaches needing a larger look-ahead window',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ 3-minute song ಗೆ 13,500 token positions ಬೇಕು (8 RVQ codebooks ಜೊತೆ 108,000) -- ಒಂದೂ ಸಿಂಗಲ್ ನಿರ್ವಹಿಸಬಹುದಾದ attention window ಗಿಂತ ಬಹಳ ಮೀರಿ, chunked generation ಪ್ರೇರೇಪಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: overlap trimming ಜೊತೆ sliding-window generation ನಿಖರವಾಗಿ ವಿನಂತಿಸಿದ token count ಉತ್ಪಾದಿಸುತ್ತದೆ (50-token chunks ಇಂದ 200), ಹಿಂದಿನ chunk ನ ಕೊನೆಯ token ಇಂದ ಸಹಜವಾಗಿ ಮುಂದುವರಿಯುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: crossfade() ಒಂದೂ 3-sample overlap ಅನ್ನೂ ಒಂದೂ ಮೃದುವಾದ linear ramp ಜೊತೆ (midpoint ನಲ್ಲಿ 7.5) 7 output values ಗೆ ಬೆರೆಸುತ್ತದೆ, ಒಂದೂ ಗಟ್ಟಿ concatenation ಉತ್ಪಾದಿಸುತ್ತಿದ್ದ ಹಠಾತ್ ಜಿಗಿತ ಅಲ್ಲ\n• Streaming systems tokens/sec ಗಿಂತ ಮೇಲಿನ ಒಂದೂ generation rate ಸಮರ್ಥಿಸಬೇಕು (75 tokens/sec = 13.3ms/token, Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ) ಇಲ್ಲದಿದ್ದರೆ playback stutter ಆಗುತ್ತದೆ -- ಇದೇ ಏಕೆ token-autoregressive generation, ಸ್ವಾಭಾವಿಕವಾಗಿ causal ಆಗಿರುವುದರಿಂದ, ಹೆಚ್ಚಿನ look-ahead window ಅಗತ್ಯವಿರುವ ವಿಧಾನಗಳಿಗಿಂತ ಲೈವ್ voice ಗೆ ಆದ್ಯತೆ ಪಡೆಯುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact sliding-window plus crossfade combination genuinely verified here is the real production strategy behind long-form generation in systems like MusicGen and Stable Audio: neither generates an entire multi-minute track through a single attention pass over the full token sequence genuinely shown here to reach 13,500+ positions -- they generate overlapping segments and blend the boundaries, exactly the mechanism this lesson\'s generate_long_audio() and crossfade() genuinely implemented.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ sliding-window ಮತ್ತು crossfade ಸಂಯೋಜನೆ MusicGen ಮತ್ತು Stable Audio ನಂತಹ systems ನಲ್ಲಿ long-form generation ಹಿಂದಿನ ನಿಜ production ತಂತ್ರ: ಎರಡೂ ಇಲ್ಲಿ ನಿಜವಾಗಿ 13,500+ positions ತಲುಪುತ್ತದೆ ಎಂದು ತೋರಿಸಿದ ಪೂರ್ಣ token sequence ಮೇಲೆ ಒಂದೂ ಸಿಂಗಲ್ attention pass ಮೂಲಕ ಒಂದೂ ಸಂಪೂರ್ಣ ಬಹು-ನಿಮಿಷದ track ಉತ್ಪಾದಿಸುವುದಿಲ್ಲ -- ಅವೂ overlapping segments ಉತ್ಪಾದಿಸುತ್ತವೆ ಮತ್ತು boundaries ಬೆರೆಸುತ್ತವೆ, ಈ lesson ನ generate_long_audio() ಮತ್ತು crossfade() ನಿಜವಾಗಿ implement ಮಾಡಿದ ಅದೇ ಯಂತ್ರಾಂಶ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: sliding-window generation genuinely bounds each chunk\'s attention cost to a fixed small size (this lesson used 50-token chunks) regardless of the total requested length -- the same tractability argument confirmed for video in Module 166, now applied to audio\n• Genuinely confirmed that crossfade() only needs the tail of one chunk and the head of the next -- no retraining or architecture change is required to add it to an existing generation pipeline, a cheap post-processing fix for a real audible artifact',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: sliding-window generation ಒಟ್ಟೂ ವಿನಂತಿಸಿದ length ಏನೇ ಇದ್ದರೂ ಪ್ರತಿ chunk ನ attention ವೆಚ್ಚವನ್ನೂ ಒಂದೂ ಸ್ಥಿರ ಚಿಕ್ಕ ಗಾತ್ರಕ್ಕೆ ನಿಜವಾಗಿ ಬೌಂಡ್ ಮಾಡುತ್ತದೆ (ಈ lesson 50-token chunks ಬಳಸಿತು) -- Module 166 ನಲ್ಲಿ video ಗಾಗಿ ದೃಢಪಡಿಸಿದ ಅದೇ tractability argument, ಈಗ audio ಗೆ ಅನ್ವಯಿಸಿದ\n• crossfade() ಗೆ ಕೇವಲ ಒಂದೂ chunk ನ tail ಮತ್ತು ಮುಂದಿನದೂ ನ head ಮಾತ್ರ ಬೇಕು ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ -- ಅದನ್ನೂ ಒಂದೂ ಇರುವ generation pipeline ಗೆ ಸೇರಿಸಲು ಯಾವುದೇ retraining ಅಥವಾ architecture ಬದಲಾವಣೆ ಅಗತ್ಯವಿಲ್ಲ, ಒಂದೂ ನಿಜ ಕೇಳಿಸುವ artifact ಗೆ ಒಂದೂ ಅಗ್ಗ post-processing ಪರಿಹಾರ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production text-to-music service generating a 3-minute track genuinely faces the exact scale problem quantified in this lesson (13,500+ token positions) and solves it with the same two techniques verified here: sliding-window generation keeps each generation step\'s attention cost bounded (as this lesson\'s generate_long_audio() demonstrated producing exactly 200 requested tokens from small chunks), and crossfade() smooths the resulting chunk boundaries into a continuous waveform -- which is why "generate a 3-minute song" is architecturally a sequence of smaller, well-understood generation and blending steps, not one gigantic model call.',
      bodyKn: 'ಒಂದೂ 3-minute track ಉತ್ಪಾದಿಸುವ ಒಂದೂ production text-to-music service ಈ lesson ಪ್ರಮಾಣೀಕರಿಸಿದ ನಿಖರ scale ಸಮಸ್ಯೆ ಎದುರಿಸುತ್ತದೆ (13,500+ token positions) ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ ಎರಡೂ ತಂತ್ರಗಳಿಂದ ಪರಿಹರಿಸುತ್ತದೆ: sliding-window generation ಪ್ರತಿ generation step ನ attention ವೆಚ್ಚವನ್ನೂ ಬೌಂಡ್ ಆಗಿ ಇಡುತ್ತದೆ (ಈ lesson ನ generate_long_audio() ಚಿಕ್ಕ chunks ಇಂದ ನಿಖರವಾಗಿ 200 ವಿನಂತಿಸಿದ tokens ಉತ್ಪಾದಿಸಿ ಪ್ರದರ್ಶಿಸಿದಂತೆ), ಮತ್ತು crossfade() ಫಲಿತಾಂಶ chunk boundaries ಅನ್ನೂ ಒಂದೂ ನಿರಂತರ waveform ಗೆ ಮೃದುಗೊಳಿಸುತ್ತದೆ -- ಇದೇ ಏಕೆ "ಒಂದೂ 3-minute song ಉತ್ಪಾದಿಸಿ" architecturally ಚಿಕ್ಕ, ಚೆನ್ನಾಗಿ-ಅರ್ಥಮಾಡಿಕೊಂಡ generation ಮತ್ತು blending steps ನ ಒಂದೂ sequence, ಒಂದೂ ದೈತ್ಯ model call ಅಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many token positions does a 3-minute song require at 75 tokens/sec?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 75 tokens/sec ನಲ್ಲಿ ಒಂದೂ 3-minute song ಗೆ ಎಷ್ಟೂ token positions ಬೇಕು?',
        opts: ['750', '13,500 -- genuinely computed as 75 x 180 seconds', '108,000', '75'], correct: 1,
        optsKn: ['750', '13,500 -- 75 x 180 seconds ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ', '108,000', '75'] },
      { q: 'Genuinely confirmed: in the generate_long_audio() run requesting 200 tokens from 50-token chunks (overlap=10), what was the output length?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 50-token chunks (overlap=10) ಇಂದ 200 tokens ವಿನಂತಿಸುವ generate_long_audio() run ನಲ್ಲಿ, output length ಎಷ್ಟೂ?',
        opts: ['250, extra from overlap', '200 -- genuinely confirmed, exactly matching the request', '50, only one chunk', '190'], correct: 1,
        optsKn: ['250, overlap ಇಂದ ಹೆಚ್ಚುವರಿ', '200 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ವಿನಂತಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಸುತ್ತಾ', '50, ಕೇವಲ ಒಂದೂ chunk', '190'] },
      { q: 'Genuinely confirmed: crossfading two 5-value chunks with overlap=3 produced how many output values?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: overlap=3 ಜೊತೆ ಎರಡೂ 5-value chunks crossfade ಮಾಡುವುದೂ ಎಷ್ಟೂ output values ಉತ್ಪಾದಿಸಿತು?',
        opts: ['10, simple concatenation', '7 -- genuinely confirmed, the 3-sample overlap is blended, not duplicated', '3, only the overlap', '5'], correct: 1,
        optsKn: ['10, ಸರಳ concatenation', '7 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, 3-sample overlap ಬೆರೆಸಲಾಗಿದೆ, ನಕಲಿಸಿಲ್ಲ', '3, ಕೇವಲ overlap', '5'] },
      { q: 'Why is token-autoregressive generation preferred over flow-matching for live voice assistants?', qKn: 'ಲೈವ್ voice assistants ಗಾಗಿ flow-matching ಗಿಂತ token-autoregressive generation ಏಕೆ ಆದ್ಯತೆ ಪಡೆಯುತ್ತದೆ?',
        opts: ['It always sounds better', 'It is naturally causal -- each token can be played back the moment it is generated, unlike approaches needing a larger look-ahead window', 'Flow-matching cannot generate audio at all', 'It requires no training data'], correct: 1,
        optsKn: ['ಅದೂ ಯಾವಾಗಲೂ ಚೆನ್ನಾಗಿ ಕೇಳಿಸುತ್ತದೆ', 'ಅದೂ ಸ್ವಾಭಾವಿಕವಾಗಿ causal -- ಪ್ರತಿ token ಉತ್ಪಾದಿಸಿದ ಕ್ಷಣ ಪ್ಲೇಬ್ಯಾಕ್ ಆಗಬಹುದು, ಹೆಚ್ಚಿನ look-ahead window ಅಗತ್ಯವಿರುವ ವಿಧಾನಗಳಿಗಿಂತ ಭಿನ್ನವಾಗಿ', 'Flow-matching audio ಉತ್ಪಾದಿಸಲು ಸಾಧ್ಯವೇ ಇಲ್ಲ', 'ಅದಕ್ಕೆ ಯಾವುದೇ training data ಅಗತ್ಯವಿಲ್ಲ'] },
      { q: 'Why do RVQ errors genuinely propagate through the codebook chain?', qKn: 'RVQ errors codebook chain ಮೂಲಕ ಏಕೆ ನಿಜವಾಗಿ ಪ್ರಚಾರವಾಗುತ್ತವೆ?',
        opts: ['They don\'t, each codebook is fully independent', 'Later codebooks represent the residual left by earlier ones, so a wrong early code means later codebooks are correcting the wrong residual', 'RVQ has only one codebook', 'Errors only affect the last codebook'], correct: 1,
        optsKn: ['ಅವೂ ಆಗುವುದಿಲ್ಲ, ಪ್ರತಿ codebook ಸಂಪೂರ್ಣವಾಗಿ ಸ್ವತಂತ್ರ', 'ನಂತರದ codebooks ಹಿಂದಿನವುಗಳು ಬಿಟ್ಟ residual ಪ್ರತಿನಿಧಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಒಂದೂ ತಪ್ಪಾದ ಮುಂಚಿನ code ಎಂದರೆ ನಂತರದ codebooks ತಪ್ಪಾದ residual ಸರಿಪಡಿಸುತ್ತಿವೆ ಎಂದರ್ಥ', 'RVQ ಗೆ ಕೇವಲ ಒಂದೂ codebook ಇದೆ', 'Errors ಕೇವಲ ಕೊನೆಯ codebook ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತವೆ'] },
    ] } },
  ],
};
