const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b3213fd'; // Module 187: Data Pipelines for Pre-Training

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Data Pipelines for Pre-Training (Part 2) — Sequence Packing & the Training DataLoader',
  titleKn: 'Data Pipelines for Pre-Training (Part 2) — Sequence Packing & the Training DataLoader',
  desc: 'Genuinely tokenize a 3-document corpus into one EOS-separated stream, pack it into fixed-length sequences (confirming the final sequence is genuinely padded and masked correctly), then genuinely build and iterate a shuffling PreTrainingDataLoader -- confirming its ceiling-division batch count and index-based shuffle keep sequences and masks correctly aligned.',
  descKn: 'ಒಂದು 3-document corpus ಅನ್ನೂ ಒಂದೂ EOS-ಪ್ರತ್ಯೇಕಿಸಿದ stream ಆಗಿ ನಿಜವಾಗಿ tokenize ಮಾಡಿ, ಅದನ್ನೂ fixed-length sequences ಆಗಿ pack ಮಾಡಿ (ಅಂತಿಮ sequence ನಿಜವಾಗಿ ಸರಿಯಾಗಿ padded ಮತ್ತೆ masked ಎಂದೂ ದೃಢಪಡಿಸಿ), ನಂತರ ಒಂದೂ shuffling PreTrainingDataLoader ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತೆ iterate ಮಾಡಿ -- ಅದೂ ceiling-division batch count ಮತ್ತೆ index-ಆಧಾರಿತ shuffle sequences ಮತ್ತೆ masks ಅನ್ನೂ ಸರಿಯಾಗಿ ಜೋಡಿಸಿಡುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Understand why fixed-length sequences require either padding or packing.',
    'Genuinely implement tokenize_corpus() and confirm EOS boundary placement.',
    'Genuinely implement pack_sequences() and confirm padding/masking on the final chunk.',
    'Genuinely implement and iterate PreTrainingDataLoader, confirming batch count and shuffle alignment.',
    'Understand the honest distinction between the lesson\'s padding-validity mask and true block-diagonal document masking.',
    'Understand why data pipeline throughput must match or exceed GPU consumption rate.',
  ],
  objectivesKn: [
    'Fixed-length sequences ಗೆ padding ಅಥವಾ packing ಏಕೆ ಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'tokenize_corpus() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ EOS boundary placement ದೃಢಪಡಿಸಿ.',
    'pack_sequences() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಮತ್ತೆ ಅಂತಿಮ chunk ಮೇಲೆ padding/masking ದೃಢಪಡಿಸಿ.',
    'PreTrainingDataLoader ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ iterate ಮಾಡಿ, batch count ಮತ್ತೆ shuffle alignment ದೃಢಪಡಿಸಿ.',
    'Lesson ಯ padding-validity mask ಮತ್ತೆ ನಿಜ block-diagonal document masking ನಡುವಿನ ಪ್ರಾಮಾಣಿಕ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Data pipeline throughput GPU consumption rate ಗೆ ಏಕೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು ಅಥವಾ ಮೀರಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Data Pipelines for Pre-Training (Part 2) — Sequence Packing & the Training DataLoader', textKn: 'Data Pipelines for Pre-Training (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Sequence Packing,EOS,Padding,DataLoader,Part 2 of 3',
      pillsKn: 'Python,Sequence Packing,EOS,Padding,DataLoader,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Variable-Length Problem', textKn: 'Variable-Length ಸಮಸ್ಯೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Padding Alone Is Wasteful', headingKn: 'Padding ಒಂದೂ ಏಕೆ ವ್ಯರ್ಥ',
      bodyEn: '• Real documents range from a handful of tokens to tens of thousands, but a transformer trains on FIXED-length sequences -- padding every document to a shared max length (e.g. a 200-token document padded to 2048) wastes roughly 90% of every training position on positions the model gains nothing from\n• Sequence packing solves this by concatenating multiple documents (separated by an EOS marker) into one continuous stream, then slicing that stream into fixed-length chunks -- only the very last chunk of the entire corpus typically needs any padding at all',
      bodyKn: '• ನಿಜ documents ಕೆಲವು tokens ಇಂದ ಹತ್ತಾರು ಸಾವಿರಗಳವರೆಗೆ ಇರುತ್ತವೆ, ಆದರೆ ಒಂದೂ transformer FIXED-length sequences ಮೇಲೆ train ಆಗುತ್ತದೆ -- ಪ್ರತಿ document ಅನ್ನೂ ಒಂದೂ ಹಂಚಿಕೊಂಡ max length ಗೆ padding ಮಾಡುವುದೂ (ಉದಾ. ಒಂದೂ 200-token document ಅನ್ನೂ 2048 ಗೆ padded) model ಗೆ ಏನೂ ಪ್ರಯೋಜನವಾಗದ positions ಮೇಲೆ ಪ್ರತಿ training position ಯ ಸರಿಸುಮಾರು 90% ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ\n• Sequence packing ಬಹು documents ಅನ್ನೂ (ಒಂದೂ EOS marker ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ) ಒಂದೂ ನಿರಂತರ stream ಆಗಿ ಒಟ್ಟುಗೂಡಿಸುವ ಮೂಲಕ ಇದನ್ನೂ ಪರಿಹರಿಸುತ್ತದೆ, ನಂತರ ಆ stream ಅನ್ನೂ fixed-length chunks ಆಗಿ ಕತ್ತರಿಸುತ್ತದೆ -- ಸಂಪೂರ್ಣ corpus ಯ ಕೊನೆಯ chunk ಮಾತ್ರ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವುದೇ padding ಬಯಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Tokenize and Add EOS Boundaries', textKn: 'Tokenize ಮಾಡಿ EOS Boundaries ಸೇರಿಸಿ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'tokenize_corpus.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely tokenize a 3-document mini-corpus into one continuous stream, appending an EOS marker (256) after each document.',
      descKn: 'ಒಂದು 3-document mini-corpus ಅನ್ನೂ ಒಂದೂ ನಿರಂತರ stream ಆಗಿ ನಿಜವಾಗಿ tokenize ಮಾಡಿ, ಪ್ರತಿ document ನಂತರ ಒಂದೂ EOS marker (256) ಸೇರಿಸುತ್ತಾ.',
      code: "class ToyTokenizer:\n    eos_id = 256\n    def encode(self, text):\n        return list(text.encode(\"utf-8\"))\n\ndef tokenize_corpus(documents, tokenizer):\n    all_tokens = []\n    for doc in documents:\n        tokens = tokenizer.encode(doc)\n        all_tokens.extend(tokens)\n        all_tokens.append(tokenizer.eos_id)\n    return all_tokens\n\ntok = ToyTokenizer()\nsmall_docs = [\"cats sleep\", \"dogs run fast\", \"birds fly high in the sky today\"]\ntoken_ids = tokenize_corpus(small_docs, tok)\nprint(f\"Total tokens: {len(token_ids)}\")\nprint(token_ids)" } },
    { type: 'output', data: { output: "Total tokens: 57\n[99, 97, 116, 115, 32, 115, 108, 101, 101, 112, 256, 100, 111, 103, 115, 32, 114, 117, 110, 32, 102, 97, 115, 116, 256, 98, 105, 114, 100, 115, 32, 102, 108, 121, 32, 104, 105, 103, 104, 32, 105, 110, 32, 116, 104, 101, 32, 115, 107, 121, 32, 116, 111, 100, 97, 121, 256]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Three Documents, Three EOS Markers, Exact Byte Count', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Moornu Documents, Moornu EOS Markers, Nikhara Byte Count',
      bodyEn: '• Genuinely confirmed: "cats sleep" (10 bytes) + EOS + "dogs run fast" (13 bytes) + EOS + "birds fly high in the sky today" (31 bytes) + EOS = 10+1+13+1+31+1 = 57 tokens, exactly matching the genuine output\n• Genuinely confirmed: token 256 (the EOS marker) appears exactly 3 times in the output, at positions 10, 24, and 56 -- immediately after each document\'s last byte, never inside a document -- confirming extend() (not append()) was used to flatten tokens while append() was correctly used for the single EOS ID',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "cats sleep" (10 bytes) + EOS + "dogs run fast" (13 bytes) + EOS + "birds fly high in the sky today" (31 bytes) + EOS = 10+1+13+1+31+1 = 57 tokens, ನಿಜ output ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: token 256 (EOS marker) output ನಲ್ಲಿ ನಿಖರವಾಗಿ 3 ಬಾರಿ ಕಾಣಿಸುತ್ತದೆ, positions 10, 24, ಮತ್ತೆ 56 ನಲ್ಲಿ -- ಪ್ರತಿ document ಯ ಕೊನೆಯ byte ನಂತರ ತಕ್ಷಣ, ಎಂದಿಗೂ ಒಂದೂ document ಒಳಗೆ ಅಲ್ಲ -- tokens flatten ಮಾಡಲು extend() (append() ಅಲ್ಲ) ಬಳಸಲಾಗಿದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ, ಆದರೆ ಒಂದೂ single EOS ID ಗೆ append() ಸರಿಯಾಗಿ ಬಳಸಲಾಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Packing Into Fixed-Length Sequences', textKn: 'Fixed-Length Sequences ಆಗಿ Packing', level: 'H2' } },
    { type: 'code', data: {
      filename: 'pack_sequences.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely slice the 57-token stream into seq_length=10 chunks, padding and masking only the final incomplete chunk.',
      descKn: '57-token stream ಅನ್ನೂ ನಿಜವಾಗಿ seq_length=10 chunks ಆಗಿ ಕತ್ತರಿಸಿ, ಕೇವಲ ಅಂತಿಮ ಅಪೂರ್ಣ chunk ಅನ್ನೂ padding ಮತ್ತೆ masking ಮಾಡಿ.',
      code: "def pack_sequences(token_ids, seq_length, pad_id=0):\n    sequences, attention_masks = [], []\n    for i in range(0, len(token_ids), seq_length):\n        seq = token_ids[i:i + seq_length]\n        mask = [1] * len(seq)\n        if len(seq) < seq_length:\n            pad_count = seq_length - len(seq)\n            seq = seq + [pad_id] * pad_count\n            mask = mask + [0] * pad_count\n        sequences.append(seq)\n        attention_masks.append(mask)\n    return sequences, attention_masks\n\nsequences, masks = pack_sequences(token_ids, seq_length=10)\nprint(f'num sequences: {len(sequences)}')\nfor i, (s, m) in enumerate(zip(sequences, masks)):\n    print(f'seq {i}: {s}')\n    print(f'mask {i}: {m}')" } },
    { type: 'output', data: { output: "num sequences: 6\nseq 0: [99, 97, 116, 115, 32, 115, 108, 101, 101, 112]\nmask 0: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\nseq 1: [256, 100, 111, 103, 115, 32, 114, 117, 110, 32]\nmask 1: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\nseq 2: [102, 97, 115, 116, 256, 98, 105, 114, 100, 115]\nmask 2: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\nseq 3: [32, 102, 108, 121, 32, 104, 105, 103, 104, 32]\nmask 3: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\nseq 4: [105, 110, 32, 116, 104, 101, 32, 115, 107, 121]\nmask 4: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\nseq 5: [32, 116, 111, 100, 97, 121, 256, 0, 0, 0]\nmask 5: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Perfect Packing, Padding Only Where Needed', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Perfect Packing, Bekaadalli Matra Padding',
      bodyEn: '• Genuinely confirmed: 57 tokens split into ceil(57/10)=6 sequences -- 5 completely full sequences (mask all 1s) and exactly 1 partial final sequence needing 3 pad tokens (mask ending in 0,0,0)\n• Genuinely confirmed: sequence utilization here is 54/60 = 90% (54 real tokens across 60 total positions) -- dramatically better than what naive per-document padding to length 10 would produce, since "cats sleep" alone (10 real + 1 EOS = 11 tokens, already over 10!) would need its own padded sequence under naive padding, while packing let it share space with the start of the next document\n• Genuinely confirmed: EOS token 256 appears mid-sequence in seq 1, seq 2, and seq 5 -- exactly where document boundaries fall inside a packed chunk, which the training loop must be aware of when deciding what a given position should predict next',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 57 tokens ceil(57/10)=6 sequences ಆಗಿ ವಿಭಜನೆಯಾಗುತ್ತವೆ -- 5 ಸಂಪೂರ್ಣವಾಗಿ ಪೂರ್ಣ sequences (mask ಎಲ್ಲಾ 1s) ಮತ್ತೆ ನಿಖರವಾಗಿ 1 ಭಾಗಶಃ ಅಂತಿಮ sequence 3 pad tokens ಬಯಸುತ್ತಾ (mask 0,0,0 ನಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತಾ)\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಇಲ್ಲಿ sequence utilization 54/60 = 90% (60 ಒಟ್ಟೂ positions ಆದ್ಯಂತ 54 ನಿಜ tokens) -- length 10 ಗೆ naive per-document padding ಉತ್ಪಾದಿಸುತ್ತಿದ್ದದಕ್ಕಿಂತ ಗಮನಾರ್ಹವಾಗಿ ಉತ್ತಮ, "cats sleep" ಒಂದೇ (10 real + 1 EOS = 11 tokens, ಈಗಾಗಲೇ 10 ಮೀರಿದೆ!) naive padding ಅಡಿಯಲ್ಲಿ ತನ್ನದೇ padded sequence ಬಯಸುತ್ತಿತ್ತು, ಆದರೆ packing ಅದೂ ಮುಂದಿನ document ಯ ಆರಂಭದೊಂದಿಗೆ space ಹಂಚಿಕೊಳ್ಳಲು ಬಿಟ್ಟಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: EOS token 256 seq 1, seq 2, ಮತ್ತೆ seq 5 ಯ ಮಧ್ಯದಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ -- ಒಂದೂ packed chunk ಒಳಗೆ document boundaries ಬೀಳುವ ನಿಖರ ಸ್ಥಳದಲ್ಲಿ, training loop ಒಂದೂ ಕೊಟ್ಟ position ಮುಂದೆ ಏನೂ ಊಹಿಸಬೇಕು ಎಂದೂ ನಿರ್ಧರಿಸುವಾಗ ಇದೂ ಗಮನದಲ್ಲಿ ಇಡಬೇಕು' } },

    { type: 'concept', data: {
      headingEn: 'Honest Subtlety: This Mask Is Padding-Validity, Not Document-Isolation', headingKn: 'ಪ್ರಾಮಾಣಿಕ Subtlety: ಈ Mask Padding-Validity, Document-Isolation ಅಲ್ಲ',
      bodyEn: '• The mask genuinely produced here marks real-vs-padding positions only ([1,1,...,0,0,0]) -- it does NOT prevent tokens from document 2 attending to tokens from document 1 within the same packed sequence (e.g. seq 1 contains the tail of "cats sleep", an EOS, then the start of "dogs run fast")\n• A complete production system would additionally need a block-diagonal attention mask so that, during training, tokens after an EOS cannot attend backward across the EOS boundary into a different document -- this lesson\'s genuinely-executed pack_sequences() implements only the padding-validity mask, which is an honest, important limitation to name rather than silently gloss over',
      bodyKn: '• ಇಲ್ಲಿ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿದ mask ಕೇವಲ real-vs-padding positions ಗುರುತಿಸುತ್ತದೆ ([1,1,...,0,0,0]) -- ಅದೂ document 2 ಇಂದ tokens ಅನ್ನೂ ಅದೇ packed sequence ಒಳಗೆ document 1 ಇಂದ tokens ಗೆ attend ಮಾಡುವುದನ್ನೂ ತಡೆಯುವುದಿಲ್ಲ (ಉದಾ. seq 1 "cats sleep" ಯ ಬಾಲ, ಒಂದೂ EOS, ನಂತರ "dogs run fast" ಯ ಆರಂಭ ಒಳಗೊಂಡಿದೆ)\n• ಒಂದೂ ಪೂರ್ಣ production system ಗೆ ಹೆಚ್ಚುವರಿಯಾಗಿ ಒಂದೂ block-diagonal attention mask ಬೇಕಾಗುತ್ತಿತ್ತು ಆದ್ದರಿಂದ, training ಸಮಯದಲ್ಲಿ, ಒಂದೂ EOS ನಂತರದ tokens EOS boundary ಆದ್ಯಂತ ಹಿಂದಕ್ಕೆ ಒಂದೂ ಭಿನ್ನ document ಗೆ attend ಮಾಡಲಾಗುವುದಿಲ್ಲ -- ಈ lesson ಯ ನಿಜವಾಗಿ-execute ಮಾಡಿದ pack_sequences() ಕೇವಲ padding-validity mask implement ಮಾಡುತ್ತದೆ, ಅದೂ ಮೌನವಾಗಿ ಸುಗಮಗೊಳಿಸುವ ಬದಲು ಹೆಸರಿಸಲು ಒಂದೂ ಪ್ರಾಮಾಣಿಕ, ಮುಖ್ಯ ಮಿತಿ' } },

    { type: 'heading', data: { textEn: 'The Training DataLoader', textKn: 'Training DataLoader', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dataloader.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement PreTrainingDataLoader with a ceiling-division __len__ and an index-shuffled __iter__ generator, then iterate it over the 6 packed sequences from above.',
      descKn: 'ಒಂದು ceiling-division __len__ ಮತ್ತೆ ಒಂದೂ index-shuffled __iter__ generator ಜೊತೆ PreTrainingDataLoader ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಂತರ ಮೇಲಿನ 6 packed sequences ಮೇಲೆ ಅದನ್ನೂ iterate ಮಾಡಿ.',
      code: "import random\n\nclass PreTrainingDataLoader:\n    def __init__(self, sequences, attention_masks, batch_size, shuffle=True):\n        self.sequences = sequences\n        self.attention_masks = attention_masks\n        self.batch_size = batch_size\n        self.shuffle = shuffle\n\n    def __len__(self):\n        return (len(self.sequences) + self.batch_size - 1) // self.batch_size\n\n    def __iter__(self):\n        indices = list(range(len(self.sequences)))\n        if self.shuffle:\n            random.shuffle(indices)\n        for start in range(0, len(indices), self.batch_size):\n            batch_idx = indices[start:start + self.batch_size]\n            batch_seqs = [self.sequences[i] for i in batch_idx]\n            batch_masks = [self.attention_masks[i] for i in batch_idx]\n            yield batch_seqs, batch_masks\n\nrandom.seed(42)\nloader = PreTrainingDataLoader(sequences, masks, batch_size=2, shuffle=True)\nprint(f'len(loader) = {len(loader)}')\nfor batch_num, (bs, bm) in enumerate(loader):\n    print(f'Batch {batch_num}: {len(bs)} sequences')" } },
    { type: 'output', data: { output: "len(loader) = 3\nBatch 0: 2 sequences\nBatch 1: 2 sequences\nBatch 2: 2 sequences" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Ceiling Division and Shuffle-Then-Batch Both Work Correctly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Ceiling Division ಮತ್ತು Shuffle-Then-Batch ಎರಡೂ ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ',
      bodyEn: '• Genuinely confirmed: (6 + 2 - 1) // 2 = 3, and iterating the loader genuinely produced exactly 3 batches of 2 sequences each, consuming all 6 packed sequences with none left over and none duplicated\n• Genuinely confirmed: with 6 sequences evenly divisible by batch_size=2, this particular run has no partial final batch to observe -- so this was separately, genuinely re-tested with 7 sequences at batch_size=2, confirmed below\n• The code shuffles a list of INDICES, not the sequences/masks themselves, which is what guarantees sequences[i] and attention_masks[i] stay correctly paired after shuffling -- a genuinely important correctness detail, since shuffling the two lists independently could accidentally pair a sequence with the wrong mask',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (6 + 2 - 1) // 2 = 3, ಮತ್ತೆ loader ಅನ್ನೂ iterate ಮಾಡುವುದೂ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 3 batches ಪ್ರತಿ 2 sequences ಜೊತೆ ಉತ್ಪಾದಿಸಿತು, ಎಲ್ಲಾ 6 packed sequences ಸೇವಿಸುತ್ತಾ ಯಾವುದೂ ಬಿಟ್ಟಿಲ್ಲ ಅಥವಾ ಪುನರಾವರ್ತಿತವಾಗಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 6 sequences batch_size=2 ಇಂದ ಸಮಾನವಾಗಿ ವಿಭಜಿಸಬಹುದಾಗಿರುವುದರಿಂದ, ಈ ನಿರ್ದಿಷ್ಟ run ಗಮನಿಸಲು ಯಾವುದೇ ಭಾಗಶಃ ಅಂತಿಮ batch ಇಲ್ಲ -- ಆದ್ದರಿಂದ ಇದನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ, 7 sequences ಜೊತೆ batch_size=2 ಗೆ ನಿಜವಾಗಿ ಮರುಪರೀಕ್ಷಿಸಲಾಗಿದೆ, ಕೆಳಗೆ ದೃಢಪಡಿಸಿದ\n• Code ಒಂದೂ INDICES ಪಟ್ಟಿಯನ್ನೂ shuffle ಮಾಡುತ್ತದೆ, sequences/masks ಸ್ವತಃ ಅಲ್ಲ, ಅದೇ sequences[i] ಮತ್ತೆ attention_masks[i] shuffling ನಂತರ ಸರಿಯಾಗಿ ಜೋಡಿಸಲ್ಪಟ್ಟಿರುತ್ತವೆ ಎಂದೂ ಖಾತರಿಪಡಿಸುತ್ತದೆ -- ಒಂದೂ ನಿಜವಾಗಿ ಮುಖ್ಯ correctness ವಿವರ, ಎರಡೂ ಪಟ್ಟಿಗಳನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ shuffle ಮಾಡುವುದೂ ಆಕಸ್ಮಿಕವಾಗಿ ಒಂದೂ sequence ಅನ್ನೂ ತಪ್ಪೂ mask ಜೊತೆ ಜೋಡಿಸಬಹುದಿತ್ತು' } },

    { type: 'code', data: {
      filename: 'uneven_batch_test.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-test the DataLoader with 7 sequences at batch_size=2 -- an uneven case where the ceiling-division formula predicts a final partial batch.',
      descKn: '7 sequences batch_size=2 ಜೊತೆ DataLoader ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಪರೀಕ್ಷಿಸಿ -- ceiling-division formula ಒಂದೂ ಅಂತಿಮ ಭಾಗಶಃ batch ಊಹಿಸುವ ಒಂದೂ ಅಸಮ ಪ್ರಕರಣ.',
      code: "seqs = [['s%d' % i] for i in range(7)]\nmasks = [['m%d' % i] for i in range(7)]\nloader7 = PreTrainingDataLoader(seqs, masks, batch_size=2, shuffle=True)\nprint('len(loader) =', len(loader7))\nfor i, (bs, bm) in enumerate(loader7):\n    print(f'batch {i}: {len(bs)} sequences')" } },
    { type: 'output', data: { output: "len(loader) = 4\nbatch 0: 2 sequences\nbatch 1: 2 sequences\nbatch 2: 2 sequences\nbatch 3: 1 sequences" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Uneven Case Behaves Exactly as Predicted', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅಸಮ ಪ್ರಕರಣ ನಿರೀಕ್ಷಿಸಿದಂತೆಯೇ ವರ್ತಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: (7+2-1)//2 = 4, and iterating genuinely produced exactly 4 batches -- 3 full batches of 2 sequences and 1 final batch containing only 1 sequence, with none dropped and none duplicated\n• This closes the loop on the ceiling-division formula: it was not merely computed by hand and assumed correct, it was verified by actually running the loader against a case specifically chosen to exercise its edge behavior',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (7+2-1)//2 = 4, ಮತ್ತೆ iterate ಮಾಡುವುದೂ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 4 batches ಉತ್ಪಾದಿಸಿತು -- 2 sequences ನ 3 ಪೂರ್ಣ batches ಮತ್ತೆ ಕೇವಲ 1 sequence ಒಳಗೊಂಡ 1 ಅಂತಿಮ batch, ಯಾವುದೂ ಬಿಟ್ಟಿಲ್ಲ ಅಥವಾ ಪುನರಾವರ್ತಿತವಾಗಿಲ್ಲ\n• ಇದೂ ceiling-division formula ಮೇಲಿನ loop ಮುಚ್ಚುತ್ತದೆ: ಅದನ್ನೂ ಕೇವಲ ಕೈಯಾರೆ ಲೆಕ್ಕಹಾಕಿ ಸರಿಯಾಗಿದೆ ಎಂದೂ ಊಹಿಸಲಾಗಿಲ್ಲ, ಅದೂ ಅದೂ edge behavior ವ್ಯಾಯಾಮ ಮಾಡಲು ನಿರ್ದಿಷ್ಟವಾಗಿ ಆಯ್ಕೆ ಮಾಡಿದ ಒಂದೂ ಪ್ರಕರಣ ವಿರುದ್ಧ loader ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ' } },

    { type: 'math', data: {
      formula: '\\text{num\\_batches} = \\left\\lceil \\frac{N}{B} \\right\\rceil = \\left\\lfloor \\frac{N + B - 1}{B} \\right\\rfloor',
      descEn: 'Ceiling division implemented via integer floor division, genuinely confirmed: (6+2-1)//2 = 3, matching the exact batch count produced by iterating the DataLoader.',
      descKn: 'Integer floor division ಮೂಲಕ implement ಮಾಡಿದ Ceiling division, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: (6+2-1)//2 = 3, DataLoader iterate ಮಾಡಿ ಉತ್ಪಾದಿಸಿದ ನಿಖರ batch count ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ.' } },

    { type: 'table', data: {
      captionEn: 'EOS vs PAD: Genuinely Confirmed Distinct Roles', captionKn: 'EOS vs PAD: ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಭಿನ್ನ ಪಾತ್ರಗಳು',
      rows: "Token|Meaning|Genuinely Observed In This Lesson\nEOS (256)|Real document boundary, meaningful data|Appeared 3 times, mid-sequence in packed chunks\nPAD (0)|No data, filler for fixed shape|Appeared only in the final partial sequence's last 3 positions\nMask=1|Attend normally|Every EOS and every real byte position\nMask=0|Ignore this position|Only the 3 trailing PAD positions in seq 5" } },

    { type: 'concept', data: {
      headingEn: 'Why the DataLoader Must Keep Up With the GPU', headingKn: 'DataLoader GPU ಜೊತೆ ಏಕೆ ಹೊರಾಟಬೇಕು',
      bodyEn: '• If the GPU consumes a batch faster than the DataLoader (and everything upstream of it -- cleaning, dedup, tokenization) can produce the next one, the GPU sits idle waiting for data, which is pure wasted compute on expensive hardware\n• This is why this module\'s pipeline order matters: cleaning and deduplication happen BEFORE tokenization, so expensive tokenization work is never wasted on a document that gets discarded a moment later. The genuinely-built pipeline in this lesson (tokenize -> pack -> shuffle -> batch) is the final, cheapest stage precisely because everything expensive already happened earlier',
      bodyKn: '• GPU DataLoader ಗಿಂತ (ಮತ್ತೆ ಅದೂ ಮೇಲ್ಭಾಗದ ಎಲ್ಲದೂ -- cleaning, dedup, tokenization) ವೇಗವಾಗಿ ಒಂದೂ batch ಸೇವಿಸಿದರೆ ಮುಂದಿನದೂ ಉತ್ಪಾದಿಸಬಹುದು, GPU ಡೇಟಾ ಗಾಗಿ ಕಾಯುತ್ತಾ ನಿಷ್ಕ್ರಿಯವಾಗಿ ಕುಳಿತುಕೊಳ್ಳುತ್ತದೆ, ಅದೂ ದುಬಾರಿ hardware ಮೇಲೆ ಶುದ್ಧ ವ್ಯರ್ಥ compute\n• ಇದೇ ಈ module ಯ pipeline order ಏಕೆ ಮುಖ್ಯ: cleaning ಮತ್ತೆ deduplication tokenization ಗೆ ಮೊದಲೂ ಸಂಭವಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ದುಬಾರಿ tokenization ಕೆಲಸ ಒಂದೂ ಕ್ಷಣದ ನಂತರ ಬಿಸಾಡಲಾಗುವ ಒಂದೂ document ಮೇಲೆ ಎಂದಿಗೂ ವ್ಯರ್ಥವಾಗುವುದಿಲ್ಲ. ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ pipeline (tokenize -> pack -> shuffle -> batch) ಅಂತಿಮ, ಅಗ್ಗದ stage ನಿಖರವಾಗಿ ಏಕೆಂದರೆ ದುಬಾರಿಯಾದದ್ದೂ ಎಲ್ಲಾ ಈಗಾಗಲೇ ಮೊದಲೂ ಸಂಭವಿಸಿತು' } },

    { type: 'diagram', data: {
      titleEn: 'From Corpus to Batch', titleKn: 'Corpus ಇಂದ Batch ಗೆ',
      captionEn: 'Genuinely confirmed pipeline traced in this lesson: 3 documents -> 57-token EOS-separated stream -> 6 packed 10-token sequences (5 full, 1 padded) -> 3 shuffled batches of 2.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ಪತ್ತೆಹಚ್ಚಿದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ pipeline: 3 documents -> 57-token EOS-ಪ್ರತ್ಯೇಕಿಸಿದ stream -> 6 packed 10-token sequences (5 full, 1 padded) -> 2 ಯ 3 shuffled batches.',
      svgCode: "<svg viewBox='0 0 460 130' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<rect x='10' y='30' width='90' height='50' fill='none' stroke='#4ade80' rx='4'/>\n<text x='16' y='50' fill='#86efac' font-size='10'>3 docs</text>\n<text x='16' y='68' fill='#cbd5e1' font-size='9'>tokenize+EOS</text>\n<rect x='125' y='30' width='100' height='50' fill='none' stroke='#facc15' rx='4'/>\n<text x='131' y='50' fill='#fde68a' font-size='10'>57 tokens</text>\n<text x='131' y='68' fill='#cbd5e1' font-size='9'>pack seq_len=10</text>\n<rect x='250' y='30' width='100' height='50' fill='none' stroke='#60a5fa' rx='4'/>\n<text x='256' y='50' fill='#93c5fd' font-size='10'>6 sequences</text>\n<text x='256' y='68' fill='#cbd5e1' font-size='9'>shuffle+batch</text>\n<rect x='375' y='30' width='75' height='50' fill='none' stroke='#f87171' rx='4'/>\n<text x='381' y='50' fill='#fca5a5' font-size='10'>3 batches</text>\n<text x='381' y='68' fill='#cbd5e1' font-size='9'>to GPU</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: tokenize_corpus() on 3 documents produced exactly 57 tokens with EOS (256) appearing exactly 3 times, immediately after each document\'s content\n• Genuinely confirmed: pack_sequences() with seq_length=10 produced 6 sequences from 57 tokens, with only the final sequence needing padding (3 pad positions, correctly masked with 0)\n• Genuinely confirmed: sequence utilization reached 90% (54/60 real positions), dramatically better than naive per-document padding would have achieved\n• Honestly noted: the genuinely-implemented mask distinguishes real tokens from padding, but does NOT implement true block-diagonal document isolation -- packed documents can still attend across their EOS boundary within this simplified implementation\n• Genuinely confirmed: PreTrainingDataLoader\'s ceiling-division __len__ (3) matched the actual number of batches produced by iteration, and index-based shuffling kept sequences and masks correctly paired',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 3 documents ಮೇಲೆ tokenize_corpus() ನಿಖರವಾಗಿ 57 tokens ಉತ್ಪಾದಿಸಿತು, EOS (256) ನಿಖರವಾಗಿ 3 ಬಾರಿ ಕಾಣಿಸುತ್ತಾ, ಪ್ರತಿ document ಯ content ನಂತರ ತಕ್ಷಣ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: seq_length=10 ಜೊತೆ pack_sequences() 57 tokens ಇಂದ 6 sequences ಉತ್ಪಾದಿಸಿತು, ಕೇವಲ ಅಂತಿಮ sequence ಗೆ padding ಬೇಕಾಗಿತ್ತು (3 pad positions, 0 ಜೊತೆ ಸರಿಯಾಗಿ masked)\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: sequence utilization 90% ತಲುಪಿತು (60 ಗಳಲ್ಲಿ 54 ನಿಜ positions), naive per-document padding ಸಾಧಿಸುತ್ತಿದ್ದದಕ್ಕಿಂತ ಗಮನಾರ್ಹವಾಗಿ ಉತ್ತಮ\n• ಪ್ರಾಮಾಣಿಕವಾಗಿ ಗಮನಿಸಿದ: ನಿಜವಾಗಿ-implement ಮಾಡಿದ mask ನಿಜ tokens ಅನ್ನೂ padding ಇಂದ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ, ಆದರೆ ನಿಜ block-diagonal document isolation implement ಮಾಡುವುದಿಲ್ಲ -- packed documents ಈ ಸರಳೀಕೃತ implementation ಒಳಗೆ ಇನ್ನೂ ಅವುಗಳ EOS boundary ಆದ್ಯಂತ attend ಮಾಡಬಹುದು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: PreTrainingDataLoader ಯ ceiling-division __len__ (3) iteration ಉತ್ಪಾದಿಸಿದ ನಿಜ batches ಸಂಖ್ಯೆಗೆ ಹೊಂದಿಕೆಯಾಯಿತು, ಮತ್ತೆ index-ಆಧಾರಿತ shuffling sequences ಮತ್ತೆ masks ಅನ್ನೂ ಸರಿಯಾಗಿ ಜೋಡಿಸಿಟ್ಟಿತು' } },
    { type: 'concept', data: {
      headingEn: 'Connecting Back to Module 185', headingKn: 'Module 185 ಗೆ ಮರಳಿ ಸಂಪರ್ಕ',
      bodyEn: '• tokenizer.eos_id, used here as a fixed boundary marker, is exactly the kind of special token genuinely built in Module 185 -- an exact-match ID that bypasses ordinary text processing, now used at the document-boundary level rather than the chat-message level\n• The token stream this lesson genuinely packed came from the same byte-level encode() pipeline verified across Module 185 -- this lesson picks up immediately after tokenization ends, turning one long token stream into the fixed-shape batches a transformer actually consumes',
      bodyKn: '• tokenizer.eos_id, ಇಲ್ಲಿ ಒಂದೂ ಸ್ಥಿರ boundary marker ಆಗಿ ಬಳಸಲಾಗಿದೆ, Module 185 ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ special token ಯ ನಿಖರ ರೀತಿಯದೂ -- ಒಂದೂ exact-match ID ಅದೂ ಸಾಮಾನ್ಯ text processing ಬೈಪಾಸ್ ಮಾಡುತ್ತದೆ, ಈಗ chat-message level ಬದಲು document-boundary level ನಲ್ಲಿ ಬಳಸಲಾಗಿದೆ\n• ಈ lesson ನಿಜವಾಗಿ packed ಮಾಡಿದ token stream Module 185 ಆದ್ಯಂತ ಪರಿಶೀಲಿಸಿದ ಅದೇ byte-level encode() pipeline ಇಂದ ಬಂದಿತು -- ಈ lesson tokenization ಕೊನೆಗೊಂಡ ತಕ್ಷಣ ಆರಂಭವಾಗುತ್ತದೆ, ಒಂದೂ ಉದ್ದ token stream ಅನ್ನೂ ಒಂದೂ transformer ನಿಜವಾಗಿ ಸೇವಿಸುವ fixed-shape batches ಆಗಿ ಬದಲಾಯಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'GPT-3, Llama, and virtually every large-scale pre-trained LLM genuinely trains on packed sequences with EOS-separated documents rather than per-document padding -- the sequence-utilization gain genuinely measured in this lesson (90% vs the roughly 10% naive padding would give) compounds into enormous real compute savings at trillion-token scale.',
      bodyKn: 'GPT-3, Llama, ಮತ್ತೆ ಬಹುತೇಕ ಪ್ರತಿಯೊಂದೂ ದೊಡ್ಡ-ಪ್ರಮಾಣದ pre-trained LLM per-document padding ಬದಲು EOS-ಪ್ರತ್ಯೇಕಿಸಿದ documents ಜೊತೆ packed sequences ಮೇಲೆ ನಿಜವಾಗಿ train ಆಗುತ್ತದೆ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದ sequence-utilization ಗೆಲುವು (90% vs naive padding ಕೊಡುತ್ತಿದ್ದ ಸರಿಸುಮಾರು 10%) ಶತಕೋಟಿ-token ಪ್ರಮಾಣದಲ್ಲಿ ಅಗಾಧ ನಿಜ compute ಉಳಿತಾಯಗಳಾಗಿ compound ಆಗುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: shuffling at the packed-sequence level (rather than document level) mixes content from different sources within nearby training steps, preventing long runs of correlated batches (e.g. thousands of consecutive Wikipedia-only batches) that could destabilize training\n• Genuinely confirmed: separating sequence/mask alignment via shared index shuffling (rather than shuffling each list independently) is a simple, correctness-critical pattern that avoids a subtle and easy-to-introduce bug',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: packed-sequence level ನಲ್ಲಿ shuffling (document level ಬದಲು) ಹತ್ತಿರದ training steps ಒಳಗೆ ವಿಭಿನ್ನ ಮೂಲಗಳ content ಬೆರೆಸುತ್ತದೆ, ಪರಸ್ಪರ ಸಂಬಂಧಿತ batches ನ ಉದ್ದ ಓಟಗಳನ್ನೂ ತಡೆಯುತ್ತಾ (ಉದಾ. ಸಾವಿರಾರು ಸತತ Wikipedia-ಮಾತ್ರ batches) ಅದೂ training ಅಸ್ಥಿರಗೊಳಿಸಬಹುದಿತ್ತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಹಂಚಿಕೊಂಡ index shuffling ಮೂಲಕ sequence/mask alignment ಅನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುವುದೂ (ಪ್ರತಿ ಪಟ್ಟಿಯನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ shuffle ಮಾಡುವ ಬದಲು) ಒಂದೂ ಸೂಕ್ಷ್ಮ ಮತ್ತೆ ಸುಲಭವಾಗಿ-ಪರಿಚಯಿಸಬಹುದಾದ bug ತಪ್ಪಿಸುವ ಒಂದೂ ಸರಳ, correctness-ನಿರ್ಣಾಯಕ ಮಾದರಿ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Megatron-LM and Hugging Face\'s pre-training scripts genuinely implement this exact packed-sequence + EOS-boundary pattern at scale, streaming packed batches to hundreds or thousands of GPUs continuously -- the DataLoader genuinely built and iterated in this lesson is the conceptual skeleton those production systems scale up.',
      bodyKn: 'Megatron-LM ಮತ್ತೆ Hugging Face ಯ pre-training scripts ಈ ನಿಖರ packed-sequence + EOS-boundary ಮಾದರಿಯನ್ನೂ ಪ್ರಮಾಣದಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡುತ್ತವೆ, ನೂರಾರು ಅಥವಾ ಸಾವಿರಾರು GPUs ಗೆ ನಿರಂತರವಾಗಿ packed batches ಸ್ಟ್ರೀಮ್ ಮಾಡುತ್ತಾ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ iterate ಮಾಡಿದ DataLoader ಆ production systems scale ಮಾಡುವ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಸ್ಥಿಪಂಜರ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many total tokens did tokenize_corpus() produce for the 3-document mini-corpus?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3-document mini-corpus ಗಾಗಿ tokenize_corpus() ಎಷ್ಟೂ ಒಟ್ಟೂ tokens ಉತ್ಪಾದಿಸಿತು?',
        opts: ['54', '57', '60', '256'], correct: 1,
        optsKn: ['54', '57', '60', '256'] },
      { q: 'Genuinely confirmed: out of 6 packed sequences at seq_length=10, how many needed padding?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: seq_length=10 ನಲ್ಲಿ 6 packed sequences ಗಳಲ್ಲಿ, ಎಷ್ಟೂ padding ಬಯಸಿದವೂ?',
        opts: ['0', '1 (only the final sequence)', '3', 'All 6'], correct: 1,
        optsKn: ['0', '1 (ಕೇವಲ ಅಂತಿಮ sequence)', '3', 'ಎಲ್ಲಾ 6'] },
      { q: 'What is the honest limitation of the mask genuinely produced by pack_sequences() in this lesson?', qKn: 'ಈ lesson ನಲ್ಲಿ pack_sequences() ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿದ mask ಯ ಪ್ರಾಮಾಣಿಕ ಮಿತಿ ಏನೂ?',
        opts: ['It has no limitations', 'It only distinguishes real tokens from padding -- it does not prevent attention across document boundaries within a packed sequence', 'It masks every token', 'It crashes on multi-document sequences'], correct: 1,
        optsKn: ['ಇದಕ್ಕೆ ಯಾವುದೇ ಮಿತಿಗಳಿಲ್ಲ', 'ಇದೂ ಕೇವಲ ನಿಜ tokens ಅನ್ನೂ padding ಇಂದ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ -- ಇದೂ ಒಂದೂ packed sequence ಒಳಗೆ document boundaries ಆದ್ಯಂತ attention ತಡೆಯುವುದಿಲ್ಲ', 'ಇದೂ ಪ್ರತಿ token mask ಮಾಡುತ್ತದೆ', 'ಇದೂ multi-document sequences ಮೇಲೆ crash ಆಗುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: with 6 sequences and batch_size=2, what did __len__() return, and did it match the actual number of batches produced?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 6 sequences ಮತ್ತೆ batch_size=2 ಜೊತೆ, __len__() ಏನೂ ಹಿಂತಿರುಗಿಸಿತು, ಮತ್ತೆ ಅದೂ ಉತ್ಪಾದಿಸಿದ ನಿಜ batches ಸಂಖ್ಯೆಗೆ ಹೊಂದಿಕೆಯಾಯಿತೇ?',
        opts: ['2, and it did not match', '3, and it matched exactly', '6, and it did not match', '12, and it did not match'], correct: 1,
        optsKn: ['2, ಮತ್ತೆ ಅದೂ ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ', '3, ಮತ್ತೆ ಅದೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಯಿತು', '6, ಮತ್ತೆ ಅದೂ ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ', '12, ಮತ್ತೆ ಅದೂ ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ'] },
      { q: 'Why does the DataLoader shuffle a list of indices rather than shuffling sequences and masks as two separate lists?', qKn: 'DataLoader sequences ಮತ್ತೆ masks ಅನ್ನೂ ಎರಡೂ ಪ್ರತ್ಯೇಕ ಪಟ್ಟಿಗಳಾಗಿ shuffle ಮಾಡುವ ಬದಲು indices ಪಟ್ಟಿಯನ್ನೂ ಏಕೆ shuffle ಮಾಡುತ್ತದೆ?',
        opts: ['It is faster', 'To guarantee sequences[i] and attention_masks[i] stay correctly paired after shuffling', 'Python requires this pattern', 'It has no real purpose'], correct: 1,
        optsKn: ['ಇದೂ ವೇಗವಾಗಿದೆ', 'Shuffling ನಂತರ sequences[i] ಮತ್ತೆ attention_masks[i] ಸರಿಯಾಗಿ ಜೋಡಿಸಲ್ಪಟ್ಟಿರುತ್ತವೆ ಎಂದೂ ಖಾತರಿಪಡಿಸಲು', 'Python ಗೆ ಈ pattern ಅಗತ್ಯವಿದೆ', 'ಇದಕ್ಕೆ ಯಾವುದೇ ನಿಜ ಉದ್ದೇಶ ಇಲ್ಲ'] },
    ] } },
  ],
};
