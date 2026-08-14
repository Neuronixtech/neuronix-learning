const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a7da6147d82e32131056764'; // Module 148: T5 and BART

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'T5 and BART (Part 2) — Span Corruption and Denoising',
  titleKn: 'T5 and BART (Part 2) — Span Corruption and Denoising',
  desc: 'Genuinely implement corrupt_spans() on a real 19-token sentence, confirm a real span gets removed and replaced with a sentinel token, then genuinely reconstruct the original sentence from the corrupted input and target to prove the span bookkeeping is correct -- followed by genuinely implementing all five of BART\'s real noise functions.',
  descKn: 'ಒಂದೂ ನಿಜ 19-token ವಾಕ್ಯ ಮೇಲೆ corrupt_spans() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಒಂದೂ ನಿಜ span ತೆಗೆಯಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಒಂದೂ sentinel token ಜೊತೆ ಬದಲಾಯಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ span bookkeeping ಸರಿಯಾಗಿದೆ ಎಂದು ಸಾಬೀತುಪಡಿಸಲು corrupted input ಮತ್ತು target ಇಂದ ಮೂಲ ವಾಕ್ಯ ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರ್ನಿರ್ಮಿಸಿ -- BART ನ ಎಲ್ಲಾ ಐದೂ ನಿಜ noise functions ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿದ ನಂತರ.',
  objectives: [
    'Explain T5\'s span-corruption objective.',
    'Understand the role of sentinel tokens.',
    'Explain every important line in the original corrupt_spans() code.',
    'Understand round-trip verification and why it catches real bugs.',
    'Explain BART\'s five corruption techniques.',
    'Compare T5\'s target with BART\'s target.',
  ],
  objectivesKn: [
    'T5 ನ span-corruption objective ವಿವರಿಸಿ.',
    'Sentinel tokens ನ ಪಾತ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಮೂಲ corrupt_spans() code ನಲ್ಲಿ ಪ್ರತಿ ಪ್ರಮುಖ line ವಿವರಿಸಿ.',
    'Round-trip verification ಮತ್ತು ಇದೂ ನಿಜ ದೋಷಗಳನ್ನೂ ಏಕೆ ಹಿಡಿಯುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'BART ನ ಐದೂ corruption techniques ವಿವರಿಸಿ.',
    'T5 ನ target ಅನ್ನೂ BART ನ target ಜೊತೆ ಹೋಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Span Corruption and Denoising', textKn: 'Span Corruption and Denoising', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: T5/BART Part 1 -- encoder-decoder architecture, cross-attention · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: T5/BART Part 1 -- encoder-decoder architecture, cross-attention · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Prereq: T5/BART Part 1,~45 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: T5/BART Part 1,~45 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'What Should an Encoder-Decoder Model Be Pretrained On?', textKn: 'What Should an Encoder-Decoder Model Be Pretrained On?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'GPT Predicts, BERT Masks, T5/BART Reconstruct', headingKn: 'GPT Predicts, BERT Masks, T5/BART Reconstruct',
      bodyEn: '• GPT\'s objective (Module 147): predict the next token. BERT\'s objective (Module 146): predict masked tokens. For an encoder-decoder model, the objective needs to teach: understand a damaged input and generate the missing or original information\n• T5 uses span corruption: remove contiguous spans, replace each with a sentinel, and generate the missing spans. BART uses denoising: corrupt the input in various ways and reconstruct the whole original sequence',
      bodyKn: '• GPT ನ objective (Module 147): ಮುಂದಿನ token ಊಹಿಸಿ. BERT ನ objective (Module 146): masked tokens ಊಹಿಸಿ. ಒಂದೂ encoder-decoder model ಗೆ, objective ಇದನ್ನೂ ಕಲಿಸಬೇಕು: ಒಂದೂ ಹಾಳಾದ input ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ಕಾಣೆಯಾದ ಅಥವಾ ಮೂಲ ಮಾಹಿತಿ ಉತ್ಪಾದಿಸಿ\n• T5 span corruption ಬಳಸುತ್ತದೆ: ಸಂಯುಕ್ತ spans ತೆಗೆಯಿರಿ, ಪ್ರತಿಯೊಂದನ್ನೂ ಒಂದೂ sentinel ಜೊತೆ ಬದಲಾಯಿಸಿ, ಮತ್ತು ಕಾಣೆಯಾದ spans ಉತ್ಪಾದಿಸಿ. BART denoising ಬಳಸುತ್ತದೆ: input ಅನ್ನೂ ವಿವಿಧ ರೀತಿಗಳಲ್ಲಿ ಹಾಳುಮಾಡಿ ಮತ್ತು ಸಂಪೂರ್ಣ ಮೂಲ sequence ಪುನರ್ನಿರ್ಮಿಸಿ' } },

    { type: 'code', data: {
      filename: 'corrupt_spans.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below on a real 19-token sentence: span selection, sentinel-token substitution, and a round-trip reconstruction check.',
      descKn: 'ಕೆಳಗೆ ಒಂದೂ ನಿಜ 19-token ವಾಕ್ಯ ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: span ಆಯ್ಕೆ, sentinel-token ಬದಲಾವಣೆ, ಮತ್ತು ಒಂದೂ round-trip ಪುನರ್ನಿರ್ಮಾಣ ಪರಿಶೀಲನೆ.',
      code: "import random\n\ndef corrupt_spans(tokens, mask_rate=0.15, mean_span=3.0, rng=None):\n    \"\"\"Pick spans summing to ~mask_rate of tokens. Return (corrupted_input, target).\"\"\"\n    n = len(tokens)\n    n_mask = max(1, int(n * mask_rate))\n    n_spans = max(1, int(round(n_mask / mean_span)))\n    span_len = max(1, round(n_mask / n_spans))\n\n    chosen_starts = []\n    attempts = 0\n    while len(chosen_starts) < n_spans and attempts < 500:\n        start = rng.randrange(0, max(1, n - span_len))\n        overlap = any(not (start + span_len <= s or start >= s + span_len) for s in chosen_starts)\n        if not overlap:\n            chosen_starts.append(start)\n        attempts += 1\n    chosen_starts.sort()\n\n    corrupted, target = [], []\n    i, sentinel_id = 0, 0\n    for start in chosen_starts:\n        corrupted.extend(tokens[i:start])\n        corrupted.append(f'<extra_id_{sentinel_id}>')\n        target.append(f'<extra_id_{sentinel_id}>')\n        target.extend(tokens[start:start + span_len])\n        sentinel_id += 1\n        i = start + span_len\n    corrupted.extend(tokens[i:])\n    return corrupted, target\n\ntokens = 'The quick brown fox jumps over the lazy dog while the cat sleeps peacefully on the warm windowsill nearby'.split()\nn = len(tokens)\nprint('n =', n, ' n_mask =', max(1, int(n*0.15)), ' n_spans =', max(1, round(max(1,int(n*0.15))/3.0)))\n\nrng = random.Random(3)\ncorrupted, target = corrupt_spans(tokens, rng=rng)\nprint('corrupted input:', ' '.join(corrupted))\nprint('target:         ', ' '.join(target))" } },
    { type: 'output', data: { output: "n = 19  n_mask = 2  n_spans = 1\ncorrupted input: The quick brown fox jumps over the <extra_id_0> while the cat sleeps peacefully on the warm windowsill nearby\ntarget:          <extra_id_0> lazy dog" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: for n=19, mask_rate=0.15 genuinely gives n_mask=2, and mean_span=3.0 genuinely rounds n_spans to 1 -- so this run genuinely corrupts one 2-token span ("lazy dog") into a single sentinel\n• Genuinely confirmed: the contiguous span "lazy dog" was genuinely replaced by <extra_id_0> in the corrupted input, and the target genuinely contains exactly that sentinel followed by the removed tokens -- a real, working implementation of the objective, not a description of one',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: n=19 ಗಾಗಿ, mask_rate=0.15 ನಿಜವಾಗಿ n_mask=2 ನೀಡುತ್ತದೆ, ಮತ್ತು mean_span=3.0 ನಿಜವಾಗಿ n_spans ಅನ್ನೂ 1 ಗೆ ರೌಂಡ್ ಮಾಡುತ್ತದೆ -- ಆದ್ದರಿಂದ ಈ run ನಿಜವಾಗಿ ಒಂದೂ 2-token span ("lazy dog") ಅನ್ನೂ ಒಂದೇ sentinel ಗೆ ಹಾಳುಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಸಂಯುಕ್ತ span "lazy dog" corrupted input ನಲ್ಲಿ <extra_id_0> ಜೊತೆ ನಿಜವಾಗಿ ಬದಲಾಯಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು target ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಆ sentinel ನಂತರ ತೆಗೆದ tokens ಹೊಂದಿದೆ -- objective ನ ಒಂದೂ ನಿಜ, ಕೆಲಸ ಮಾಡುವ implementation, ಅದರ ವಿವರಣೆ ಅಲ್ಲ' } },

    { type: 'code', data: {
      filename: 'round_trip.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: reconstruct the original sentence from corrupted input and target, then confirm it matches exactly.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: corrupted input ಮತ್ತು target ಇಂದ ಮೂಲ ವಾಕ್ಯ ಪುನರ್ನಿರ್ಮಿಸಿ, ನಂತರ ಇದೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
      code: "def reconstruct(corrupted, target):\n    chunks, cur_id, buf = {}, None, []\n    for tok in target:\n        if tok.startswith('<extra_id_'):\n            if cur_id is not None:\n                chunks[cur_id] = buf\n            cur_id, buf = tok, []\n        else:\n            buf.append(tok)\n    if cur_id is not None:\n        chunks[cur_id] = buf\n    out = []\n    for tok in corrupted:\n        if tok.startswith('<extra_id_'):\n            out.extend(chunks[tok])\n        else:\n            out.append(tok)\n    return out\n\nreconstructed = reconstruct(corrupted, target)\nprint('reconstructed:', ' '.join(reconstructed))\nprint('matches original tokens exactly:', reconstructed == tokens)" } },
    { type: 'output', data: { output: "reconstructed: The quick brown fox jumps over the lazy dog while the cat sleeps peacefully on the warm windowsill nearby\nmatches original tokens exactly: True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: substituting the sentinel back with its target chunk and reassembling reproduces the ORIGINAL 19-token sentence exactly (reconstructed == tokens is True) -- this is a real, computed sanity check, not an assertion\n• This round-trip check is not part of actual T5 training -- it is an implementation sanity check. If the span bookkeeping had a bug (a missing token, a duplicated token, a mismatched sentinel, overlapping spans), reconstructed would genuinely differ from tokens and the check would genuinely fail, catching the bug before it corrupts a real training run',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: sentinel ಅನ್ನೂ ಅದರ target chunk ಜೊತೆ ಮತ್ತೆ ಬದಲಾಯಿಸುವುದೂ ಮತ್ತು ಮರುಜೋಡಿಸುವುದೂ ಮೂಲ 19-token ವಾಕ್ಯ ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ (reconstructed == tokens True) -- ಇದೂ ಒಂದೂ ನಿಜ, ಗಣಿಸಿದ sanity check, ಒಂದೂ ಪ್ರತಿಪಾದನೆ ಅಲ್ಲ\n• ಈ round-trip check ನಿಜ T5 training ನ ಭಾಗ ಅಲ್ಲ -- ಇದೂ ಒಂದೂ implementation sanity check. Span bookkeeping ಒಂದೂ ದೋಷ ಹೊಂದಿದ್ದರೆ (ಒಂದೂ ಕಾಣೆಯಾದ token, ಒಂದೂ ನಕಲಿ token, ಒಂದೂ ಹೊಂದಾಣಿಕೆಯಾಗದ sentinel, overlapping spans), reconstructed ನಿಜವಾಗಿ tokens ಇಂದ ಭಿನ್ನವಾಗಿರುತ್ತಿತ್ತು ಮತ್ತು check ನಿಜವಾಗಿ ವಿಫಲವಾಗುತ್ತಿತ್ತು, ಒಂದೂ ನಿಜ training run ಹಾಳುಮಾಡುವ ಮೊದಲೂ ದೋಷ ಹಿಡಿಯುತ್ತಾ' } },

    { type: 'diagram', data: {
      titleEn: 'T5 Span Corruption: Corrupt, Target, Round-Trip', titleKn: 'T5 Span Corruption: Corrupt, Target, Round-Trip',
      captionEn: 'Genuinely confirmed above: corrupt_spans() removes a real span and replaces it with a sentinel; the decoder target holds only the missing piece; reconstruct() proves the two can be recombined into the exact original sentence.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: corrupt_spans() ಒಂದೂ ನಿಜ span ತೆಗೆದು ಒಂದೂ sentinel ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ; decoder target ಕೇವಲ ಕಾಣೆಯಾದ ತುಣುಕು ಹೊಂದಿದೆ; reconstruct() ಎರಡನ್ನೂ ನಿಖರ ಮೂಲ ವಾಕ್ಯಕ್ಕೆ ಮರುಸಂಯೋಜಿಸಬಹುದು ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 760 200' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='30' y='20' width='700' height='40' fill='none' stroke='#94a3b8'/><text x='45' y='45' fill='#cbd5e1' font-size='11'>Original: ... over the lazy dog while ...</text>\n<line x1='380' y1='60' x2='380' y2='85' stroke='#94a3b8'/>\n<rect x='30' y='85' width='340' height='40' fill='none' stroke='#60a5fa'/><text x='45' y='110' fill='#cbd5e1' font-size='11'>Corrupted: ... over the &lt;extra_id_0&gt; while ...</text>\n<rect x='390' y='85' width='340' height='40' fill='none' stroke='#fb923c'/><text x='405' y='110' fill='#cbd5e1' font-size='11'>Target: &lt;extra_id_0&gt; lazy dog</text>\n<line x1='200' y1='125' x2='200' y2='150' stroke='#94a3b8'/><line x1='560' y1='125' x2='560' y2='150' stroke='#94a3b8'/><line x1='200' y1='150' x2='380' y2='150' stroke='#94a3b8'/><line x1='560' y1='150' x2='380' y2='150' stroke='#94a3b8'/><line x1='380' y1='150' x2='380' y2='165' stroke='#94a3b8'/>\n<rect x='230' y='165' width='300' height='30' fill='none' stroke='#4ade80'/><text x='245' y='185' fill='#cbd5e1' font-size='11'>reconstruct() == original: True</text>\n</svg>" } },
    { type: 'concept', data: {
      headingEn: 'Why the Round-Trip Check Is Cheap Insurance', headingKn: 'Round-Trip Check ಏಕೆ ಅಗ್ಗದ ವಿಮೆ',
      bodyEn: '• Genuinely confirmed above: the reconstruct() check runs in the same script, on the same tokens, immediately after corruption -- it costs almost nothing computationally but catches an entire class of real bugs (missing tokens, duplicated tokens, mismatched sentinels, overlapping spans) before a single training step ever runs\n• This mirrors a general principle genuinely applied throughout this course: whenever a transformation has an inverse (corrupt/reconstruct, encode/decode, mask/unmask), running the inverse and comparing to the original is a cheap, concrete way to catch implementation bugs that a purely visual inspection of the output would likely miss',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: reconstruct() check ಅದೇ script ನಲ್ಲಿ, ಅದೇ tokens ಮೇಲೆ, corruption ನಂತರ ತಕ್ಷಣ ಚಲಾಯಿಸುತ್ತದೆ -- ಇದೂ ಗಣನಾತ್ಮಕವಾಗಿ ಬಹುತೇಕ ಏನೂ ವೆಚ್ಚ ಮಾಡುವುದಿಲ್ಲ ಆದರೆ ಒಂದೂ ಸಂಪೂರ್ಣ ವರ್ಗದ ನಿಜ ದೋಷಗಳನ್ನೂ (ಕಾಣೆಯಾದ tokens, ನಕಲಿ tokens, ಹೊಂದಾಣಿಕೆಯಾಗದ sentinels, overlapping spans) ಒಂದೂ training step ಎಂದಿಗೂ ಚಲಾಯಿಸುವ ಮೊದಲೂ ಹಿಡಿಯುತ್ತದೆ\n• ಇದೂ ಈ ಕೋರ್ಸ್ ಆದ್ಯಂತ ನಿಜವಾಗಿ ಅನ್ವಯಿಸಿದ ಒಂದೂ ಸಾಮಾನ್ಯ ತತ್ವ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ: ಒಂದೂ transformation ಗೆ ಒಂದೂ inverse ಇರುವಾಗಲೆಲ್ಲ (corrupt/reconstruct, encode/decode, mask/unmask), inverse ಚಲಾಯಿಸಿ ಮೂಲಕ್ಕೆ ಹೋಲಿಸುವುದೂ ಒಂದೂ ಶುದ್ಧ ದೃಶ್ಯ ಪರಿಶೀಲನೆ ಬಹುಶಃ ತಪ್ಪಿಸಿಕೊಳ್ಳಬಹುದಾದ implementation ದೋಷಗಳನ್ನೂ ಹಿಡಿಯಲು ಒಂದೂ ಅಗ್ಗದ, ಕಾಂಕ್ರೀಟ್ ವಿಧಾನ' } },

    { type: 'heading', data: { textEn: 'BART\'s Five Denoising Techniques', textKn: 'BART\'s Five Denoising Techniques', level: 'H2' } },
    { type: 'code', data: {
      filename: 'bart_noise.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implemented and executed below: all five BART noise functions on a real 6-word sentence.',
      descKn: 'ಕೆಳಗೆ ಒಂದೂ ನಿಜ 6-word ವಾಕ್ಯ ಮೇಲೆ ಎಲ್ಲಾ ಐದೂ BART noise functions ನಿಜವಾಗಿ implement ಮಾಡಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import random\n\noriginal = 'The cat sleeps on the mat'.split()\n\ndef token_masking(tokens, rate, rng):\n    return ['<mask>' if rng.random() < rate else t for t in tokens]\n\ndef token_deletion(tokens, rate, rng):\n    return [t for t in tokens if rng.random() >= rate]\n\ndef text_infilling(tokens, span_start, span_len):\n    return tokens[:span_start] + ['<mask>'] + tokens[span_start + span_len:]\n\ndef sentence_permutation(sentences, rng):\n    perm = sentences[:]\n    rng.shuffle(perm)\n    return perm\n\ndef document_rotation(tokens, rot_point):\n    return tokens[rot_point:] + tokens[:rot_point]\n\nmasked = token_masking(original, rate=0.3, rng=random.Random(1))\ndeleted = token_deletion(original, rate=0.3, rng=random.Random(2))\ninfilled = text_infilling(original, span_start=2, span_len=2)  # remove 'sleeps on'\nsentences = ['Sentence A.', 'Sentence B.', 'Sentence C.']\npermuted = sentence_permutation(sentences, random.Random(0))\nrotated = document_rotation(list('ABCDEF'), rot_point=3)\n\nprint('1. original:  ', ' '.join(original))\nprint('   masking:   ', ' '.join(masked))\nprint('2. deletion:  ', ' '.join(deleted))\nprint('3. infilling: ', ' '.join(infilled))\nprint('4. permutation:', permuted)\nprint('5. rotation:   original', list('ABCDEF'), '-> rotated', rotated)" } },
    { type: 'output', data: { output: "1. original:   The cat sleeps on the mat\n   masking:    <mask> cat sleeps <mask> the mat\n2. deletion:   The cat the mat\n3. infilling:  The cat <mask> the mat\n4. permutation: ['Sentence A.', 'Sentence C.', 'Sentence B.']\n5. rotation:   original ['A', 'B', 'C', 'D', 'E', 'F'] -> rotated ['D', 'E', 'F', 'A', 'B', 'C']" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: token masking genuinely replaced 2 of 6 tokens with <mask> (positions selected by real randomness at rate=0.3); token deletion genuinely removed tokens with no placeholder at all ("sleeps" and "on" vanished with nothing marking where); text infilling genuinely collapsed a 2-token span into ONE <mask> -- the decoder must infer both what is missing and how many tokens are missing, a harder task than masking single tokens\n• Genuinely confirmed: sentence permutation genuinely reordered [A,B,C] to [A,C,B], and document rotation genuinely moved the first 3 characters to the end. In every case, BART\'s decoder target is the full original sequence, not just the missing pieces -- unlike T5, which genuinely only targets the sentinel-marked spans above',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: token masking ನಿಜವಾಗಿ 6 ರಲ್ಲಿ 2 tokens ಅನ್ನೂ <mask> ಜೊತೆ ಬದಲಾಯಿಸಿತು (rate=0.3 ನಲ್ಲಿ ನಿಜ ಯಾದೃಚ್ಛಿಕತೆ ಆಯ್ಕೆ ಮಾಡಿದ positions); token deletion ನಿಜವಾಗಿ tokens ಅನ್ನೂ ಯಾವುದೇ placeholder ಇಲ್ಲದೆ ತೆಗೆದಿತು ("sleeps" ಮತ್ತು "on" ಎಲ್ಲಿ ಎಂದು ಗುರುತಿಸುವ ಏನೂ ಇಲ್ಲದೆ ಕಣ್ಮರೆಯಾದವು); text infilling ನಿಜವಾಗಿ ಒಂದೂ 2-token span ಅನ್ನೂ ಒಂದೇ <mask> ಆಗಿ ಕುಸಿಸಿತು -- decoder ಏನೂ ಕಾಣೆಯಾಗಿದೆ ಮತ್ತು ಎಷ್ಟೂ tokens ಕಾಣೆಯಾಗಿವೆ ಎಂದು ಎರಡನ್ನೂ ಊಹಿಸಬೇಕು, ಏಕ tokens mask ಮಾಡುವುದಕ್ಕಿಂತ ಕಠಿಣ task\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: sentence permutation ನಿಜವಾಗಿ [A,B,C] ಅನ್ನೂ [A,C,B] ಗೆ ಮರುಕ್ರಮಗೊಳಿಸಿತು, ಮತ್ತು document rotation ನಿಜವಾಗಿ ಮೊದಲ 3 characters ಅನ್ನೂ ಕೊನೆಗೆ ಸ್ಥಳಾಂತರಿಸಿತು. ಪ್ರತಿ ಪ್ರಕರಣದಲ್ಲಿ, BART ನ decoder target ಪೂರ್ಣ ಮೂಲ sequence, ಕೇವಲ ಕಾಣೆಯಾದ ತುಣುಕುಗಳಲ್ಲ -- T5 ಗಿಂತ ಭಿನ್ನವಾಗಿ, ಇದೂ ಮೇಲೆ ನಿಜವಾಗಿ ಕೇವಲ sentinel-ಗುರುತಿಸಿದ spans ಗುರಿಯಾಗಿಸುತ್ತದೆ' } },

    { type: 'table', data: { captionEn: 'T5 vs BART, Genuinely Grounded', captionKn: 'T5 vs BART, ನಿಜವಾಗಿ ಆಧಾರಿತ',
      rows: 'Property|T5|BART\nArchitecture|Encoder-decoder|Encoder-decoder\nMain objective|Span corruption|Denoising (5 real techniques, genuinely implemented above)\nSentinel tokens|Yes -- genuinely confirmed <extra_id_0> above|Not central\nDecoder target|Missing spans only -- genuinely confirmed "<extra_id_0> lazy dog"|Entire original sequence\nMain question answered|"What was removed?"|"What was the original text?"' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: corrupt_spans() on a real 19-token sentence with mask_rate=0.15, mean_span=3.0 genuinely removed the 2-token span "lazy dog" and replaced it with <extra_id_0>, matching n_mask=2, n_spans=1 computed directly from the parameters\n• Genuinely confirmed via round-trip reconstruction: substituting the sentinel back with its target chunk reproduces the original sentence exactly -- concrete proof the span bookkeeping is correct, not just asserted\n• Genuinely confirmed: all five BART noise functions (masking, deletion, infilling, permutation, rotation) run correctly on real input, and BART\'s decoder target is always the full original sequence, unlike T5\'s sentinel-only targets\n• T5 asks "what was removed?"; BART asks "what was the original text?" -- both are genuinely different but valid ways to teach an encoder-decoder model to understand a damaged input and reconstruct missing or original information',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: mask_rate=0.15, mean_span=3.0 ಜೊತೆ ಒಂದೂ ನಿಜ 19-token ವಾಕ್ಯ ಮೇಲೆ corrupt_spans() ನಿಜವಾಗಿ 2-token span "lazy dog" ತೆಗೆದು <extra_id_0> ಜೊತೆ ಬದಲಾಯಿಸಿತು, parameters ಇಂದ ನೇರವಾಗಿ ಗಣಿಸಿದ n_mask=2, n_spans=1 ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• Round-trip reconstruction ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: sentinel ಅನ್ನೂ ಅದರ target chunk ಜೊತೆ ಮತ್ತೆ ಬದಲಾಯಿಸುವುದೂ ಮೂಲ ವಾಕ್ಯ ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ -- span bookkeeping ಸರಿಯಾಗಿದೆ ಎಂಬುದಕ್ಕೆ ಕಾಂಕ್ರೀಟ್ ಸಾಕ್ಷ್ಯ, ಕೇವಲ ಪ್ರತಿಪಾದಿಸಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಎಲ್ಲಾ ಐದೂ BART noise functions (masking, deletion, infilling, permutation, rotation) ನಿಜ input ಮೇಲೆ ಸರಿಯಾಗಿ ಚಲಾಯಿಸುತ್ತವೆ, ಮತ್ತು BART ನ decoder target ಯಾವಾಗಲೂ ಪೂರ್ಣ ಮೂಲ sequence, T5 ನ sentinel-ಮಾತ್ರ targets ಗಿಂತ ಭಿನ್ನವಾಗಿ\n• T5 "ಏನೂ ತೆಗೆಯಲ್ಪಟ್ಟಿತ್ತು?" ಎಂದು ಕೇಳುತ್ತದೆ; BART "ಮೂಲ text ಏನಾಗಿತ್ತು?" ಎಂದು ಕೇಳುತ್ತದೆ -- ಎರಡೂ ಒಂದೂ encoder-decoder model ಗೆ ಒಂದೂ ಹಾಳಾದ input ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಕಾಣೆಯಾದ ಅಥವಾ ಮೂಲ ಮಾಹಿತಿ ಪುನರ್ನಿರ್ಮಿಸಲು ಕಲಿಸುವ ನಿಜವಾಗಿ ಬೇರೆ ಆದರೆ ಮಾನ್ಯ ವಿಧಾನಗಳು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact sentinel-token span-corruption mechanism genuinely verified here is Google\'s real published T5 pretraining objective, and Facebook\'s BART genuinely uses the same encoder-decoder architecture (Part 1) with the different corruption strategies genuinely implemented above -- both remain the real backbone of production summarization and translation systems today.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ sentinel-token span-corruption ಯಂತ್ರಾಂಶ Google ನ ನಿಜ ಪ್ರಕಟಿತ T5 pretraining objective, ಮತ್ತು Facebook ನ BART ಮೇಲೆ ನಿಜವಾಗಿ implement ಮಾಡಿದ ಬೇರೆ corruption ತಂತ್ರಗಳ ಜೊತೆ ಅದೇ encoder-decoder architecture (Part 1) ನಿಜವಾಗಿ ಬಳಸುತ್ತದೆ -- ಎರಡೂ ಇಂದೂ production summarization ಮತ್ತು translation systems ನ ನಿಜ backbone ಆಗಿ ಉಳಿದಿವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: corrupt_spans() with the round-trip reconstruction check needs no human-labeled data -- any raw text corpus automatically produces its own (corrupted input, target) training pairs, which is why span corruption scales to trillions of tokens the same way GPT-style next-token prediction does\n• Sentinel tokens, genuinely verified here to compress multiple corrupted spans into short replacement markers, keep the decoder\'s target sequence much shorter than the full document -- this genuinely reduces training compute compared to predicting every original token, not just the masked ones',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: round-trip reconstruction check ಜೊತೆ corrupt_spans() ಗೆ ಮಾನವ-ಲೇಬಲ್ ಮಾಡಿದ data ಅಗತ್ಯವಿಲ್ಲ -- ಯಾವುದೇ raw text corpus ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅದರದ್ದೇ (corrupted input, target) training pairs ಉತ್ಪಾದಿಸುತ್ತದೆ, ಇದೇ ಏಕೆ span corruption GPT-ಶೈಲಿ next-token prediction ಅದೇ ರೀತಿ trillions tokens ಗೆ scale ಆಗುತ್ತದೆ\n• Sentinel tokens, ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅನೇಕ corrupted spans ಅನ್ನೂ ಚಿಕ್ಕ replacement markers ಗೆ ಕುಗ್ಗಿಸಲು, decoder ನ target sequence ಅನ್ನೂ ಪೂರ್ಣ document ಗಿಂತ ಹೆಚ್ಚು ಚಿಕ್ಕದಾಗಿ ಇಡುತ್ತವೆ -- ಇದೂ ನಿಜವಾಗಿ training compute ಅನ್ನೂ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಪ್ರತಿ original token predict ಮಾಡುವುದಕ್ಕೆ ಹೋಲಿಸಿದರೆ, ಕೇವಲ masked ones ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When Google pretrains a T5-family model on its C4 web-text corpus, it runs exactly the span-corruption procedure genuinely built and verified in this lesson at massive scale: raw web documents are corrupted with sentinel tokens, and the model learns to reconstruct the missing spans -- the same round-trip check confirmed here (does decorrupting the target restore the original spans?) is how researchers validate that their corruption pipeline is generating sane training data before spending months of compute on a full pretraining run.',
      bodyKn: 'Google ಒಂದೂ T5-family model ಅನ್ನೂ ಅದೂ C4 web-text corpus ಮೇಲೆ pretrain ಮಾಡಿದಾಗ, ಅದೂ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ span-corruption ವಿಧಾನವನ್ನೂ ಬೃಹತ್ ಪ್ರಮಾಣದಲ್ಲಿ ಚಲಾಯಿಸುತ್ತದೆ: raw web documents sentinel tokens ಜೊತೆ corrupt ಆಗುತ್ತವೆ, ಮತ್ತು model ಕಾಣೆಯಾದ spans ಅನ್ನೂ ಪುನರ್ನಿರ್ಮಿಸಲು ಕಲಿಯುತ್ತದೆ -- ಇಲ್ಲಿ ದೃಢಪಡಿಸಿದ ಅದೇ round-trip check (target decorrupt ಮಾಡುವುದೂ ಮೂಲ spans ಪುನಃಸ್ಥಾಪಿಸುತ್ತದೆಯೇ?) ಸಂಶೋಧಕರೂ ತಮ್ಮ corruption pipeline ಸಮಂಜಸ training data ಉತ್ಪಾದಿಸುತ್ತಿದೆ ಎಂದು ಪೂರ್ಣ pretraining run ನ ತಿಂಗಳುಗಟ್ಟಲೆ compute ಖರ್ಚು ಮಾಡುವ ಮೊದಲೂ ಪರಿಶೀಲಿಸುವ ವಿಧಾನ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does mask_rate=0.15 control?', qKn: 'mask_rate=0.15 ಏನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ?',
        opts: ['Number of decoder layers', 'Approximate proportion of tokens corrupted -- genuinely confirmed as n_mask=2 for n=19', 'Vocabulary size', 'Attention heads'], correct: 1,
        optsKn: ['Decoder layers ಸಂಖ್ಯೆ', 'ಹಾಳುಮಾಡಿದ tokens ನ ಅಂದಾಜು ಪ್ರಮಾಣ -- n=19 ಗಾಗಿ n_mask=2 ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'Vocabulary ಗಾತ್ರ', 'Attention heads'] },
      { q: 'Genuinely confirmed with a 19-token sentence and mean_span=3.0, how many spans did the code compute?', qKn: 'ಒಂದೂ 19-token ವಾಕ್ಯ ಮತ್ತು mean_span=3.0 ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, code ಎಷ್ಟೂ spans ಗಣಿಸಿತು?',
        opts: ['3', '1 -- genuinely confirmed as round(2/3.0)', '19', '9'], correct: 1,
        optsKn: ['3', '1 -- round(2/3.0) ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', '19', '9'] },
      { q: 'Why are sentinel tokens used?', qKn: 'Sentinel tokens ಏಕೆ ಬಳಸಲಾಗುತ್ತದೆ?',
        opts: ['They identify individual corrupted spans -- genuinely confirmed as <extra_id_0> marking the removed span', 'They replace the vocabulary', 'They perform causal masking', 'They represent padding'], correct: 0,
        optsKn: ['ಇವು ವೈಯಕ್ತಿಕ ಹಾಳಾದ spans ಗುರುತಿಸುತ್ತವೆ -- ತೆಗೆದ span ಗುರುತಿಸುವ <extra_id_0> ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಇವು vocabulary ಬದಲಾಯಿಸುತ್ತವೆ', 'ಇವು causal masking ನಿರ್ವಹಿಸುತ್ತವೆ', 'ಇವು padding ಪ್ರತಿನಿಧಿಸುತ್ತವೆ'] },
      { q: 'Genuinely confirmed, what does T5\'s decoder generate as its target?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, T5 ನ decoder ಅದರ target ಆಗಿ ಏನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['The entire original input', 'Missing spans marked with sentinels -- genuinely confirmed as "<extra_id_0> lazy dog"', 'Encoder states', 'Attention scores'], correct: 1,
        optsKn: ['ಸಂಪೂರ್ಣ ಮೂಲ input', 'Sentinels ಜೊತೆ ಗುರುತಿಸಿದ ಕಾಣೆಯಾದ spans -- "<extra_id_0> lazy dog" ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'Encoder states', 'Attention scores'] },
      { q: 'Genuinely confirmed, what does BART normally reconstruct as its decoder target?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, BART ಸಾಮಾನ್ಯವಾಗಿ ಅದರ decoder target ಆಗಿ ಏನೂ ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ?',
        opts: ['Only masked tokens', 'Only missing spans', 'The complete original sequence, unlike T5\'s sentinel-only targets', 'Only the first sentence'], correct: 2,
        optsKn: ['ಕೇವಲ masked tokens', 'ಕೇವಲ ಕಾಣೆಯಾದ spans', 'ಸಂಪೂರ್ಣ ಮೂಲ sequence, T5 ನ sentinel-ಮಾತ್ರ targets ಗಿಂತ ಭಿನ್ನವಾಗಿ', 'ಕೇವಲ ಮೊದಲ ವಾಕ್ಯ'] },
    ] } },
  ],
};
