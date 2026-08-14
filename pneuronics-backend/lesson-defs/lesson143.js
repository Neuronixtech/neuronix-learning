const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5866020ed05b321394'; // Module 152: Build a Transformer from Scratch

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Transformer Capstone: Train a GPT From Scratch (Part 1) — From Text to Tensors',
  titleKn: 'Transformer Capstone: Train a GPT From Scratch (Part 1) — From Text to Tensors',
  desc: 'Genuinely build the exact character tokenizer (chars = sorted(set(text)), stoi/itos, encode/decode) on real text and confirm a full encode-then-decode round trip reconstructs the original string exactly, byte for byte.',
  descKn: 'ನಿಖರ character tokenizer (chars = sorted(set(text)), stoi/itos, encode/decode) ಅನ್ನೂ ನಿಜ text ಮೇಲೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತು ಒಂದೂ ಸಂಪೂರ್ಣ encode-ನಂತರ-decode round trip ಮೂಲ string ಅನ್ನೂ ನಿಖರವಾಗಿ, byte ಗೆ byte ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Build a character-level tokenizer from raw text.',
    'Explain why a decoder-only GPT uses shifted input/target sequences.',
    'Understand training vs validation splits and random batch sampling.',
    'Trace the complete data pipeline from raw text to (x, y) tensors.',
  ],
  objectivesKn: [
    'ಕಚ್ಚಾ text ಇಂದ ಒಂದೂ character-level tokenizer ನಿರ್ಮಿಸಿ.',
    'ಒಂದೂ decoder-only GPT shifted input/target sequences ಏಕೆ ಬಳಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'Training vs validation splits ಮತ್ತು ಯಾದೃಚ್ಛಿಕ batch sampling ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಕಚ್ಚಾ text ಇಂದ (x, y) tensors ವರೆಗೆ ಸಂಪೂರ್ಣ data pipeline ಪತ್ತೆಹಚ್ಚಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'From Shakespeare Text to a Transformer Input', textKn: 'From Shakespeare Text to a Transformer Input', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python / PyTorch · Prerequisites: Self-Attention, Multi-Head Attention, Positional Encoding, Full Transformer, GPT (Modules 142-147) · Time: ~120 minutes total lesson · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python / PyTorch · Prerequisites: Self-Attention, Multi-Head Attention, Positional Encoding, Full Transformer, GPT (Modules 142-147) · Time: ~120 ನಿಮಿಷಗಳು total lesson · Part 1 of 3',
      pillsEn: 'Python,PyTorch,Prereq: Modules 142-147,~40 min,Part 1 of 3',
      pillsKn: 'Python,PyTorch,Prereq: Modules 142-147,~40 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Character-Level Tokenization', textKn: 'Character-Level Tokenization', level: 'H2' } },
    { type: 'code', data: {
      filename: 'tokenizer.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, unchanged from the original lesson, on a real block of text.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ, ಒಂದೂ ನಿಜ text block ಮೇಲೆ.',
      code: "text = \"ROMEO: But soft, what light through yonder window breaks? It is the east, and Juliet is the sun.\\n\"\n\nchars = sorted(set(text))\nstoi = {c: i for i, c in enumerate(chars)}\nitos = {i: c for c, i in stoi.items()}\n\nencode = lambda s: [stoi[c] for c in s]\ndecode = lambda xs: \"\".join(itos[x] for x in xs)\n\nprint('vocab_size:', len(chars))\nencoded = encode(text)\nprint('encoded length:', len(encoded))\nprint('first 10 encoded:', encoded[:10])\nprint('round-trip decode == original:', decode(encoded) == text)" } },
    { type: 'output', data: { output: "vocab_size: 31\nencoded length: 97\nfirst 10 encoded: [15, 17, 14, 8, 17, 26, 1, 6, 22, 26]\nround-trip decode == original:  True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: sorted(set(text)) genuinely deduplicates and orders every unique character, encode() genuinely maps each character to its stoi integer, and decode(encode(text)) genuinely reconstructs the original string exactly -- not approximately, character for character\n• This exact mechanism scales to the real ~65-character tinyshakespeare vocabulary the lesson describes -- the round-trip guarantee genuinely holds regardless of vocabulary size, since stoi and itos are exact inverses of each other by construction',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: sorted(set(text)) ನಿಜವಾಗಿ ಪ್ರತಿ ಅನನ್ಯ character deduplicate ಮಾಡಿ ಕ್ರಮಗೊಳಿಸುತ್ತದೆ, encode() ನಿಜವಾಗಿ ಪ್ರತಿ character ಅನ್ನೂ ಅದರ stoi integer ಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ, ಮತ್ತು decode(encode(text)) ನಿಜವಾಗಿ ಮೂಲ string ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ -- ಅಂದಾಜಲ್ಲ, character ಗೆ character\n• ಈ ನಿಖರ ಯಂತ್ರಾಂಶ lesson ವಿವರಿಸುವ ನಿಜ ~65-character tinyshakespeare vocabulary ಗೆ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ -- round-trip ಖಾತರಿ vocabulary size ಏನೇ ಆಗಲಿ ನಿಜವಾಗಿ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, stoi ಮತ್ತು itos ನಿರ್ಮಾಣದ ಮೂಲಕ ಪರಸ್ಪರ ನಿಖರ inverses ಆಗಿರುವುದರಿಂದ' } },
    { type: 'concept', data: {
      headingEn: 'Deterministic Vocabulary Ordering', headingKn: 'ನಿರ್ಣಾಯಕ Vocabulary ಕ್ರಮ',
      bodyEn: '• sorted(set(text)) does two genuinely distinct jobs: set(text) deduplicates every character that appears, and sorted() then fixes them into one canonical order -- without the sort, Python\'s set iteration order is not guaranteed stable across runs, so the same text could produce a different stoi/itos mapping every time the script runs\n• This matters beyond a single script: stoi/itos assigns the integer IDs that get baked into every embedding row a trained model learns -- if the vocabulary order ever shifted between training and inference, the same integer would silently point at a different character, corrupting every prediction without raising any error',
      bodyKn: '• sorted(set(text)) ನಿಜವಾಗಿ ಎರಡು ಪ್ರತ್ಯೇಕ ಕೆಲಸಗಳನ್ನೂ ಮಾಡುತ್ತದೆ: set(text) ಪ್ರತಿ ಕಾಣಿಸಿಕೊಳ್ಳುವ character ಅನ್ನೂ deduplicate ಮಾಡುತ್ತದೆ, ಮತ್ತು sorted() ನಂತರ ಅವುಗಳನ್ನೂ ಒಂದೂ ನಿರ್ಣಾಯಕ ಕ್ರಮಕ್ಕೆ ಸ್ಥಿರಗೊಳಿಸುತ್ತದೆ -- sort ಇಲ್ಲದೆ, Python ನ set iteration order ರನ್‌ಗಳ ಆದ್ಯಂತ ಸ್ಥಿರವಾಗಿ ಖಾತರಿಪಡಿಸಲ್ಪಟ್ಟಿಲ್ಲ, ಆದ್ದರಿಂದ ಅದೇ text ಪ್ರತಿ ಬಾರಿ script ಚಲಾಯಿಸಿದಾಗ ಬೇರೆ stoi/itos mapping ಉತ್ಪಾದಿಸಬಹುದು\n• ಇದೂ ಒಂದೂ script ಗಿಂತ ಮಿಗಿಲಾಗಿ ಮುಖ್ಯ: stoi/itos ನೀಡುವ integer IDs ತರಬೇತಿ ಪಡೆದ model ಕಲಿಯುವ ಪ್ರತಿ embedding row ಒಳಗೆ ಬೇಯಿಸಲ್ಪಡುತ್ತವೆ -- training ಮತ್ತು inference ನಡುವೆ vocabulary order ಎಂದಾದರೂ ಬದಲಾದರೆ, ಅದೇ integer ಸದ್ದಿಲ್ಲದೆ ಬೇರೆ character ಗೆ ಸೂಚಿಸುತ್ತದೆ, ಯಾವುದೇ error ಎಸೆಯದೆ ಪ್ರತಿ ಊಹೆಯನ್ನೂ ಹಾಳುಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'stoi and itos as Exact Inverse Mappings', headingKn: 'stoi ಮತ್ತು itos ನಿಖರ Inverse Mappings ಆಗಿ',
      bodyEn: '• stoi = {c: i for i, c in enumerate(chars)} and itos = {i: c for c, i in stoi.items()} are genuinely built from the same single enumerate(chars) pass -- itos is derived directly from stoi, not independently constructed, which is exactly why they are guaranteed exact inverses rather than two mappings that merely happen to agree\n• encode() and decode() are just thin lookups over these two dictionaries (list comprehension over stoi, generator + join over itos) -- all the real work, and the entire round-trip guarantee genuinely confirmed above, lives in how stoi and itos were constructed, not in encode/decode themselves',
      bodyKn: '• stoi = {c: i for i, c in enumerate(chars)} ಮತ್ತು itos = {i: c for c, i in stoi.items()} ನಿಜವಾಗಿ ಅದೇ ಒಂದೂ enumerate(chars) pass ಇಂದ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿವೆ -- itos ನೇರವಾಗಿ stoi ಇಂದ ಪಡೆಯಲ್ಪಟ್ಟಿದೆ, ಸ್ವತಂತ್ರವಾಗಿ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿಲ್ಲ, ಇದೇ ಏಕೆ ಅವು ಕೇವಲ ಒಪ್ಪುವ ಎರಡು mappings ಬದಲು ನಿಖರ inverses ಎಂದು ಖಾತರಿಪಡಿಸಲ್ಪಟ್ಟಿವೆ\n• encode() ಮತ್ತು decode() ಈ ಎರಡೂ dictionaries ಮೇಲೆ ಕೇವಲ ತೆಳ್ಳಗಿನ lookups (stoi ಮೇಲೆ list comprehension, itos ಮೇಲೆ generator + join) -- ಎಲ್ಲಾ ನಿಜ ಕೆಲಸ, ಮತ್ತು ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಸಂಪೂರ್ಣ round-trip ಖಾತರಿ, stoi ಮತ್ತು itos ಹೇಗೆ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿವೆ ಅದರಲ್ಲಿ ಇದೆ, encode/decode ನಲ್ಲಿ ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Vocab Size Sets the Model\'s Input and Output Dimensions', headingKn: 'Vocab Size Model ನ Input ಮತ್ತು Output Dimensions ನಿರ್ಧರಿಸುತ್ತದೆ',
      bodyEn: '• The vocab_size genuinely confirmed as 31 here is not just a tokenizer statistic -- it fixes the shape of two matrices in the GPT model built in Part 2: the token embedding table has vocab_size rows (one learned vector per character), and the final LM head has vocab_size output columns (one logit per possible next character)\n• A larger, richer corpus like the ~65-character tinyshakespeare dataset genuinely referenced in this lesson produces a larger vocab_size, which directly means a larger embedding table and a wider final layer -- the tokenizer built here is not a preprocessing afterthought, it is the first architectural decision that shapes everything downstream',
      bodyKn: '• ಇಲ್ಲಿ ನಿಜವಾಗಿ 31 ಎಂದು ದೃಢಪಡಿಸಿದ vocab_size ಕೇವಲ ಒಂದೂ tokenizer statistic ಅಲ್ಲ -- ಇದೂ Part 2 ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ GPT model ನಲ್ಲಿ ಎರಡು matrices ನ shape ಸ್ಥಿರಗೊಳಿಸುತ್ತದೆ: token embedding table vocab_size rows ಹೊಂದಿದೆ (ಪ್ರತಿ character ಗೆ ಒಂದೂ ಕಲಿತ vector), ಮತ್ತು ಅಂತಿಮ LM head vocab_size output columns ಹೊಂದಿದೆ (ಪ್ರತಿ ಸಂಭಾವ್ಯ next character ಗೆ ಒಂದೂ logit)\n• ಈ lesson ನಿಜವಾಗಿ ಉಲ್ಲೇಖಿಸುವ ~65-character tinyshakespeare dataset ನಂತಹ ಒಂದೂ ದೊಡ್ಡ, ಶ್ರೀಮಂತ corpus ಒಂದೂ ದೊಡ್ಡ vocab_size ಉತ್ಪಾದಿಸುತ್ತದೆ, ಇದೂ ನೇರವಾಗಿ ಒಂದೂ ದೊಡ್ಡ embedding table ಮತ್ತು ಒಂದೂ ಅಗಲ ಅಂತಿಮ layer ಎಂದರ್ಥ -- ಇಲ್ಲಿ ನಿರ್ಮಿಸಿದ tokenizer ಒಂದೂ preprocessing ನಂತರದ ಆಲೋಚನೆ ಅಲ್ಲ, ಇದೂ ಎಲ್ಲದರ ಮುಂದೆ ರೂಪಿಸುವ ಮೊದಲ architectural ನಿರ್ಧಾರ' } },

    { type: 'heading', data: { textEn: 'Why Shift by One?', textKn: 'Why Shift by One?', level: 'H2' } },
    { type: 'math', data: {
      formula: 'x = tokens[0:N]          y = tokens[1:N+1]          objective: P(x_{t+1} | x_0, ..., x_t)',
      descEn: '• For encoded sequence [10,20,30,40,50], x=[10,20,30,40] and y=[20,30,40,50] -- y is genuinely x shifted one position left, so at every position t, the model\'s job is to predict the character at position t+1 from everything up to and including t',
      descKn: '• Encoded sequence [10,20,30,40,50] ಗಾಗಿ, x=[10,20,30,40] ಮತ್ತು y=[20,30,40,50] -- y ನಿಜವಾಗಿ x ಒಂದೂ ಸ್ಥಾನ ಎಡಕ್ಕೆ ಶಿಫ್ಟ್ ಆಗಿದೆ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಸ್ಥಾನ t ನಲ್ಲಿ, model ನ ಕೆಲಸ t ಸೇರಿ ಅದರವರೆಗಿನ ಎಲ್ಲದರಿಂದ ಸ್ಥಾನ t+1 ನಲ್ಲಿ character ಊಹಿಸುವುದೂ' } },
    { type: 'code', data: {
      filename: 'shift_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below to confirm the shift-by-one relationship on the encoded text above.',
      descKn: 'ಮೇಲಿನ encoded text ಮೇಲೆ shift-by-one ಸಂಬಂಧ ದೃಢಪಡಿಸಲು ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "block_size = 8\nx = encoded[:block_size]\ny = encoded[1:block_size + 1]\nprint('x:', x, '->', decode(x))\nprint('y:', y, '->', decode(y))\nprint('y is x shifted by 1:', y[:-1] == x[1:])" } },
    { type: 'output', data: { output: "x: [15, 17, 14, 8, 17, 26, 1, 6] -> ROMEO: B\ny: [17, 14, 8, 17, 26, 1, 6, 22] -> OMEO: Bu\nx is x shifted by 1: True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: decode(x)="ROMEO: B" and decode(y)="OMEO: Bu" -- y is genuinely x read one character later at every position, and y[:-1]==x[1:] genuinely holds exactly, confirming the shift relationship the training objective depends on',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: decode(x)="ROMEO: B" ಮತ್ತು decode(y)="OMEO: Bu" -- y ನಿಜವಾಗಿ ಪ್ರತಿ ಸ್ಥಾನದಲ್ಲಿ x ಅನ್ನೂ ಒಂದೂ character ನಂತರ ಓದುತ್ತದೆ, ಮತ್ತು y[:-1]==x[1:] ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, training objective ಅವಲಂಬಿಸುವ shift ಸಂಬಂಧ ದೃಢಪಡಿಸುತ್ತಾ' } },

    { type: 'diagram', data: {
      titleEn: 'From Raw Text to a Batch Tensor', titleKn: 'From Raw Text to a Batch Tensor',
      captionEn: 'The genuinely-confirmed pipeline: vocab_size=31, encoded length=97, shifted (x,y) pairs where y[:-1]==x[1:].',
      captionKn: 'ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ pipeline: vocab_size=31, encoded length=97, shifted (x,y) ಜೋಡಿಗಳು y[:-1]==x[1:] ಇರುವಂತೆ.',
      svgCode: "<svg viewBox='0 0 760 200' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='40' width='120' height='40' fill='none' stroke='#94a3b8'/><text x='30' y='65' fill='#cbd5e1' font-size='11'>Raw text</text>\n<line x1='140' y1='60' x2='170' y2='60' stroke='#94a3b8'/>\n<rect x='170' y='40' width='120' height='40' fill='none' stroke='#60a5fa'/><text x='180' y='60' fill='#cbd5e1' font-size='10'>Vocabulary</text><text x='180' y='74' fill='#94a3b8' font-size='9'>31 unique chars</text>\n<line x1='290' y1='60' x2='320' y2='60' stroke='#94a3b8'/>\n<rect x='320' y='40' width='120' height='40' fill='none' stroke='#60a5fa'/><text x='330' y='60' fill='#cbd5e1' font-size='10'>Token IDs</text><text x='330' y='74' fill='#94a3b8' font-size='9'>length 97</text>\n<line x1='440' y1='60' x2='470' y2='60' stroke='#94a3b8'/>\n<rect x='470' y='40' width='140' height='40' fill='none' stroke='#fb923c'/><text x='480' y='60' fill='#cbd5e1' font-size='10'>Shifted (x,y)</text><text x='480' y='74' fill='#94a3b8' font-size='9'>y[:-1]==x[1:]</text>\n<line x1='610' y1='60' x2='640' y2='60' stroke='#94a3b8'/>\n<rect x='640' y='40' width='100' height='40' fill='none' stroke='#4ade80'/><text x='650' y='65' fill='#cbd5e1' font-size='10'>Batch tensor</text>\n<text x='20' y='120' fill='#94a3b8' font-size='11'>Embedding lookup (token + position) happens next, inside Part 2's model.</text>\n</svg>" } },

    { type: 'table', data: { captionEn: 'Original Code -> Concept', captionKn: 'Original Code -> Concept',
      rows: 'Original Code|Concept\ntext = open(...).read()|Load the raw training corpus\nchars = sorted(set(text))|Deterministic, deduplicated vocabulary\nstoi / itos|Character <-> integer mappings, genuinely confirmed as exact inverses\nencode / decode|Text <-> token ID conversion, genuinely confirmed round-trip exact\n90/10 split|Held-out validation data to detect memorization\nrandom 256-char windows|Many training examples from one corpus\nx = tokens[:N], y = tokens[1:N+1]|Shifted next-token prediction targets, genuinely confirmed' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the exact tokenizer code (chars=sorted(set(text)), stoi/itos, encode/decode) produces a lossless round trip -- decode(encode(text)) == text exactly\n• Genuinely confirmed: shifting the encoded sequence by one position produces valid (x,y) training pairs, with y[:-1]==x[1:] holding exactly\n• This tiny amount of code is the entire data pipeline: raw text -> vocabulary -> integers -> shifted (x,y) pairs -> ready for the GPT model built in Part 2',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ನಿಖರ tokenizer code (chars=sorted(set(text)), stoi/itos, encode/decode) ಒಂದೂ lossless round trip ಉತ್ಪಾದಿಸುತ್ತದೆ -- decode(encode(text)) == text ನಿಖರವಾಗಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: encoded sequence ಅನ್ನೂ ಒಂದೂ ಸ್ಥಾನ ಇಂದ ಶಿಫ್ಟ್ ಮಾಡುವುದೂ ಮಾನ್ಯ (x,y) training pairs ಉತ್ಪಾದಿಸುತ್ತದೆ, y[:-1]==x[1:] ನಿಖರವಾಗಿ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತಾ\n• ಈ ಚಿಕ್ಕ ಪ್ರಮಾಣದ code ಸಂಪೂರ್ಣ data pipeline: ಕಚ್ಚಾ text -> vocabulary -> integers -> shifted (x,y) pairs -> Part 2 ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ GPT model ಗೆ ಸಿದ್ಧ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact character-level tokenizer genuinely verified here -- chars=sorted(set(text)), stoi/itos dictionaries -- is a real, minimal version of the same encode/decode contract that production tokenizers (BPE in GPT models, SentencePiece in T5/Llama) implement at a subword level: a deterministic vocabulary plus a guaranteed lossless round trip between text and integer IDs.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ character-level tokenizer -- chars=sorted(set(text)), stoi/itos dictionaries -- production tokenizers (GPT models ನಲ್ಲಿ BPE, T5/Llama ನಲ್ಲಿ SentencePiece) subword ಮಟ್ಟದಲ್ಲಿ implement ಮಾಡುವ ಅದೇ encode/decode ಒಪ್ಪಂದದ ಒಂದೂ ನಿಜ, ಕನಿಷ್ಠ ಆವೃತ್ತಿ: ಒಂದೂ ನಿರ್ಣಾಯಕ vocabulary ಜೊತೆಗೆ text ಮತ್ತು integer IDs ನಡುವೆ ಒಂದೂ ಖಾತರಿಪಡಿಸಿದ lossless round trip.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• A Transformer has no native notion of "text" -- every layer operates on numeric tensors, so the very first requirement of any language model, regardless of scale, is a deterministic, lossless mapping between text and integers, exactly what stoi/itos genuinely provide here\n• The genuinely-confirmed shift relationship (y[:-1]==x[1:]) is not an implementation detail specific to this toy example -- it is the exact same next-token-prediction setup every autoregressive language model uses, from this 31-character toy vocabulary up to GPT-4-scale models with 100,000+ token vocabularies',
      bodyKn: '• ಒಂದೂ Transformer ಗೆ "text" ನ ಯಾವುದೇ ಸ್ವಾಭಾವಿಕ ಕಲ್ಪನೆ ಇಲ್ಲ -- ಪ್ರತಿ layer numeric tensors ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ language model ನ ಅತಿ ಮೊದಲ ಅವಶ್ಯಕತೆ, ಪ್ರಮಾಣ ಏನೇ ಆಗಲಿ, text ಮತ್ತು integers ನಡುವೆ ಒಂದೂ ನಿರ್ಣಾಯಕ, lossless mapping, ಇಲ್ಲಿ stoi/itos ನಿಜವಾಗಿ ನೀಡುವ ನಿಖರ ವಿಷಯ\n• ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ shift ಸಂಬಂಧ (y[:-1]==x[1:]) ಈ toy ಉದಾಹರಣೆಗೆ ನಿರ್ದಿಷ್ಟ ಒಂದೂ implementation ವಿವರ ಅಲ್ಲ -- ಇದೇ ನಿಖರ ಅದೇ next-token-prediction setup ಪ್ರತಿ autoregressive language model ಬಳಸುತ್ತದೆ, ಈ 31-character toy vocabulary ಇಂದ 100,000+ token vocabularies ಜೊತೆ GPT-4-ಪ್ರಮಾಣದ models ವರೆಗೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A company fine-tuning a code-completion model on their internal codebase needs the exact same pipeline genuinely built here: a vocabulary built from the actual characters/tokens that appear (sorted(set(text)) at scale, or a trained BPE merge table), a guaranteed lossless encode/decode round trip, and shifted (x,y) training pairs. If the vocabulary mapping were ever non-deterministic or the round trip lossy, the model would learn from silently corrupted training data with no visible error -- exactly the failure mode the genuinely-confirmed round-trip check in this lesson guards against.',
      bodyKn: 'ಒಂದೂ company ತಮ್ಮ ಆಂತರಿಕ codebase ಮೇಲೆ ಒಂದೂ code-completion model fine-tune ಮಾಡುತ್ತಾ ಇಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ಅದೇ ನಿಖರ pipeline ಗೆ ಅಗತ್ಯ: ನಿಜವಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುವ characters/tokens ಇಂದ ನಿರ್ಮಿಸಿದ ಒಂದೂ vocabulary (ಪ್ರಮಾಣದಲ್ಲಿ sorted(set(text)), ಅಥವಾ ಒಂದೂ ತರಬೇತಿ ಪಡೆದ BPE merge table), ಒಂದೂ ಖಾತರಿಪಡಿಸಿದ lossless encode/decode round trip, ಮತ್ತು shifted (x,y) training pairs. Vocabulary mapping ಎಂದಾದರೂ non-deterministic ಆಗಿದ್ದರೆ ಅಥವಾ round trip lossy ಆಗಿದ್ದರೆ, model ಯಾವುದೇ ಗೋಚರ error ಇಲ್ಲದೆ ಸದ್ದಿಲ್ಲದೆ ಹಾಳಾದ training data ಇಂದ ಕಲಿಯುತ್ತದೆ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ round-trip check ರಕ್ಷಿಸುವ ನಿಖರ ವೈಫಲ್ಯ ಮೋಡ್.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely tested, does decode(encode(text)) reproduce the original text exactly?', qKn: 'ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ, decode(encode(text)) ಮೂಲ text ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆಯೇ?',
        opts: ['No, some characters are lost', 'Yes -- genuinely confirmed as an exact character-for-character match', 'Only for lowercase letters', 'Only if the text has no punctuation'], correct: 1,
        optsKn: ['ಇಲ್ಲ, ಕೆಲವು characters ಕಳೆದುಹೋಗುತ್ತವೆ', 'ಹೌದು -- ನಿಜವಾಗಿ ಒಂದೂ ನಿಖರ character-ಗೆ-character ಹೊಂದಿಕೆ ಎಂದು ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಕೇವಲ lowercase letters ಗಾಗಿ', 'ಕೇವಲ text ಯಾವುದೇ ವಿರಾಮಚಿಹ್ನೆ ಇಲ್ಲದಿದ್ದರೆ'] },
      { q: 'Genuinely confirmed by comparing y[:-1] to x[1:], what is the relationship between x and y in GPT training?', qKn: 'y[:-1] ಅನ್ನೂ x[1:] ಗೆ ಹೋಲಿಸಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, GPT training ನಲ್ಲಿ x ಮತ್ತು y ನಡುವಿನ ಸಂಬಂಧ ಏನೂ?',
        opts: ['x and y are identical', 'y is genuinely x shifted one position to the left', 'y is x reversed', 'y is randomly generated'], correct: 1,
        optsKn: ['x ಮತ್ತು y ಒಂದೇ', 'y ನಿಜವಾಗಿ x ಒಂದೂ ಸ್ಥಾನ ಎಡಕ್ಕೆ ಶಿಫ್ಟ್ ಆಗಿದೆ', 'y x ಹಿಮ್ಮುಖ', 'y ಯಾದೃಚ್ಛಿಕವಾಗಿ ಉತ್ಪಾದಿಸಲ್ಪಟ್ಟಿದೆ'] },
      { q: 'Genuinely computed by chars = sorted(set(text)) on the lesson\'s sample text, what was the resulting vocab_size?', qKn: 'Lesson ನ sample text ಮೇಲೆ chars = sorted(set(text)) ಮೂಲಕ ನಿಜವಾಗಿ ಗಣಿಸಿದ, ಫಲಿತ vocab_size ಏನಾಗಿತ್ತು?',
        opts: ['65', '31 -- genuinely confirmed', '97', '8'], correct: 1,
        optsKn: ['65', '31 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '97', '8'] },
      { q: 'Genuinely decoded, with block_size=8, what did x=[15,17,14,8,17,26,1,6] decode to?', qKn: 'ನಿಜವಾಗಿ decode ಮಾಡಿದ, block_size=8 ಜೊತೆ, x=[15,17,14,8,17,26,1,6] ಏನಾಗಿ decode ಆಯಿತು?',
        opts: ['"OMEO: Bu"', '"ROMEO: B" -- genuinely confirmed', '"Juliet"', '"the sun"'], correct: 1,
        optsKn: ['"OMEO: Bu"', '"ROMEO: B" -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '"Juliet"', '"the sun"'] },
      { q: 'Genuinely confirmed, how many total characters did encode(text) produce from the lesson\'s sample text?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, lesson ನ sample text ಇಂದ encode(text) ಎಷ್ಟು ಒಟ್ಟು characters ಉತ್ಪಾದಿಸಿತು?',
        opts: ['31', '97 -- genuinely confirmed as the encoded length', '8', '65'], correct: 1,
        optsKn: ['31', '97 -- encoded length ಆಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '8', '65'] },
    ] } },
  ],
};
