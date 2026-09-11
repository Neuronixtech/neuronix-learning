const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b3213fa'; // Module 185: Building a Tokenizer from Scratch

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Building a Tokenizer from Scratch (Part 1) — What a Tokenizer Actually Does + BPE Fundamentals',
  titleKn: 'Building a Tokenizer from Scratch (Part 1) — Tokenizer Actually Does + BPE Fundamentals',
  desc: 'Understand why LLMs consume integer token IDs rather than raw text, why word-level and character-level tokenization both fail in practice, and genuinely implement Byte Pair Encoding from scratch -- training it on the classic lower/lowest/newest toy corpus and confirming, byte-for-byte, that the flat implementation reproduces the textbook pair-frequency counts and merge sequence.',
  descKn: 'LLMs raw text ಬದಲು integer token IDs ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತವೆ, word-level ಮತ್ತೆ character-level tokenization ಎರಡೂ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಏಕೆ ವಿಫಲವಾಗುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಮತ್ತೆ Byte Pair Encoding ಅನ್ನೂ ಮೊದಲಿಂದ ನಿಜವಾಗಿ implement ಮಾಡಿ -- ಅದನ್ನೂ classic lower/lowest/newest toy corpus ಮೇಲೆ train ಮಾಡಿ ಮತ್ತೆ flat implementation textbook pair-frequency counts ಮತ್ತೆ merge ಅನುಕ್ರಮವನ್ನೂ byte-for-byte ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Understand why LLMs operate on integer token IDs, not raw text.',
    'Compare word-level, character-level, and subword tokenization tradeoffs.',
    'Genuinely implement _get_pairs() and _merge_pair() from the original BPETokenizer.',
    'Genuinely train BPE on a toy corpus and confirm the exact merge sequence.',
    'Understand the merge table as the tokenizer\'s learned identity.',
    'Understand byte-level BPE and why it starts from a 256-entry vocabulary.',
  ],
  objectivesKn: [
    'LLMs raw text ಅಲ್ಲ, integer token IDs ಮೇಲೆ ಏಕೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Word-level, character-level, ಮತ್ತೆ subword tokenization tradeoffs ಹೋಲಿಸಿ.',
    'ಮೂಲ BPETokenizer ಇಂದ _get_pairs() ಮತ್ತೆ _merge_pair() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Toy corpus ಮೇಲೆ BPE ಅನ್ನೂ ನಿಜವಾಗಿ train ಮಾಡಿ ನಿಖರ merge ಅನುಕ್ರಮ ದೃಢಪಡಿಸಿ.',
    'Merge table ಅನ್ನೂ tokenizer ಯ ಕಲಿತ identity ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Byte-level BPE ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತೆ ಅದೂ 256-entry vocabulary ಇಂದ ಏಕೆ ಆರಂಭವಾಗುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Building a Tokenizer from Scratch (Part 1) — What a Tokenizer Actually Does + BPE Fundamentals', textKn: 'Building a Tokenizer from Scratch (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: None · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: None · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Tokenization,BPE,Subword Encoding,Part 1 of 3',
      pillsKn: 'Python,Tokenization,BPE,Subword Encoding,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Bridge Between Text and Numbers', textKn: 'Text ಮತ್ತೆ Numbers ನಡುವಿನ Bridge', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What an LLM Actually Consumes', headingKn: 'LLM ನಿಜವಾಗಿ ಏನೂ ಸೇವಿಸುತ್ತದೆ',
      bodyEn: '• A transformer does not directly process words, sentences, or characters -- it consumes integer token IDs, which an embedding layer converts into vectors before the transformer sees them\n• The pipeline is: text -> tokenizer -> integer IDs -> embedding layer -> vectors -> transformer, and the reverse (decoder) maps IDs back to text\n• Tokenization is an architectural decision, not a preprocessing afterthought -- it directly affects sequence length, compute cost, how much of the context window a given document consumes, and how efficiently different languages are represented',
      bodyKn: '• ಒಂದು transformer ನೇರವಾಗಿ words, sentences, ಅಥವಾ characters ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವುದಿಲ್ಲ -- ಅದೂ integer token IDs ಸೇವಿಸುತ್ತದೆ, ಅವುಗಳನ್ನೂ ಒಂದೂ embedding layer transformer ನೋಡುವ ಮೊದಲೂ vectors ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ\n• Pipeline: text -> tokenizer -> integer IDs -> embedding layer -> vectors -> transformer, ಮತ್ತೆ ಹಿಮ್ಮುಖ (decoder) IDs ಅನ್ನೂ ಮತ್ತೆ text ಗೆ map ಮಾಡುತ್ತದೆ\n• Tokenization ಒಂದೂ architectural ನಿರ್ಧಾರ, ಒಂದೂ preprocessing afterthought ಅಲ್ಲ -- ಅದೂ ನೇರವಾಗಿ sequence length, compute cost, ಒಂದೂ ಕೊಟ್ಟ document context window ನ ಎಷ್ಟೂ ಬಳಸುತ್ತದೆ, ಮತ್ತೆ ವಿಭಿನ್ನ ಭಾಷೆಗಳು ಎಷ್ಟೂ ದಕ್ಷವಾಗಿ ಪ್ರತಿನಿಧಿಸಲ್ಪಡುತ್ತವೆ ಎಂಬುದನ್ನೂ ಪ್ರಭಾವಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Three Tokenization Strategies', textKn: 'ಮೂರೂ Tokenization Strategies', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Word-Level vs Character-Level vs Subword Tokenization', captionKn: 'Word-Level vs Character-Level vs Subword Tokenization',
      rows: "Strategy|Vocabulary Size|Sequence Length|Unknown-Word Handling\nWord-level|Enormous (every word/variant/code identifier)|Short|Poor -- unseen words become [UNK]\nCharacter-level|Tiny (a fixed alphabet)|Very long|Excellent -- no unknown characters\nSubword (BPE)|Manageable (tens of thousands)|Moderate|Good -- rare words decompose into known pieces" } },
    { type: 'concept', data: {
      headingEn: 'Why the Extremes Fail', headingKn: 'Extremes ಏಕೆ ವಿಫಲವಾಗುತ್ತವೆ',
      bodyEn: '• Word-level tokenization looks attractive ("The cat sat" -> ["The","cat","sat"]) until it meets words like "tokenization", "Geschwindigkeitsbegrenzung", "GPT-4o", or "some_random_variable_123" -- covering every possible word, code construct, and spelling variation across every language would require a vocabulary of millions to billions of entries, and anything missed becomes an [UNK] token\n• Character-level tokenization ("hello" -> ["h","e","l","l","o"]) uses a tiny vocabulary and has essentially no unknown-character problem, but it burns sequence length: a document that could be 1 token per common word instead needs 5+ tokens per word, dramatically inflating the sequence the transformer must process and spending model capacity re-learning character combinations humans already recognize as meaningful units\n• Subword tokenization splits the difference: common words like "the" stay whole, while rare words like "unhappiness" decompose into "un" + "happi" + "ness" -- this gives a manageable vocabulary, relatively short sequences, good handling of rare words, and very few unknown-token problems, which is why it became the dominant approach in modern LLMs',
      bodyKn: '• Word-level tokenization ಆಕರ್ಷಕವಾಗಿ ಕಾಣುತ್ತದೆ ("The cat sat" -> ["The","cat","sat"]) "tokenization", "Geschwindigkeitsbegrenzung", "GPT-4o", ಅಥವಾ "some_random_variable_123" ರೀತಿಯ words ಎದುರಾಗುವವರೆಗೆ -- ಪ್ರತಿ ಭಾಷೆಯಾದ್ಯಂತ ಪ್ರತಿಯೊಂದೂ ಸಂಭವನೀಯ word, code construct, ಮತ್ತೆ spelling variation ಆವರಿಸುವುದೂ ಲಕ್ಷಾಂತರ ಇಂದ ಶತಕೋಟಿ entries ನ ಒಂದೂ vocabulary ಬೇಕಾಗುತ್ತಿತ್ತು, ಮತ್ತೆ ತಪ್ಪಿದ ಯಾವುದೇ ಒಂದೂ [UNK] token ಆಗುತ್ತದೆ\n• Character-level tokenization ("hello" -> ["h","e","l","l","o"]) ಒಂದೂ ಚಿಕ್ಕ vocabulary ಬಳಸುತ್ತದೆ ಮತ್ತೆ ಮೂಲಭೂತವಾಗಿ ಯಾವುದೇ unknown-character ಸಮಸ್ಯೆ ಇಲ್ಲ, ಆದರೆ ಅದೂ sequence length ಸುಡುತ್ತದೆ: ಒಂದೂ common word ಗೆ 1 token ಆಗಬಹುದಾದ document ಬದಲು ಪ್ರತಿ word ಗೆ 5+ tokens ಬೇಕಾಗುತ್ತದೆ, transformer ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬೇಕಾದ sequence ಅನ್ನೂ ಅಗಾಧವಾಗಿ ಉಬ್ಬಿಸುತ್ತಾ ಮತ್ತೆ humans ಈಗಾಗಲೇ ಅರ್ಥಪೂರ್ಣ units ಎಂದೂ ಗುರುತಿಸುವ character combinations ಅನ್ನೂ ಮರುಕಲಿಯುವುದರಲ್ಲಿ model capacity ಖರ್ಚು ಮಾಡುತ್ತಾ\n• Subword tokenization ವ್ಯತ್ಯಾಸವನ್ನೂ ವಿಭಜಿಸುತ್ತದೆ: "the" ರೀತಿಯ common words ಪೂರ್ಣವಾಗಿ ಉಳಿಯುತ್ತವೆ, ಆದರೆ "unhappiness" ರೀತಿಯ ಅಪರೂಪದ words "un" + "happi" + "ness" ಆಗಿ ವಿಭಜನೆಯಾಗುತ್ತವೆ -- ಇದೂ ಒಂದೂ ನಿರ್ವಹಿಸಬಹುದಾದ vocabulary, ತುಲನಾತ್ಮಕವಾಗಿ ಚಿಕ್ಕ sequences, ಅಪರೂಪದ words ನ ಉತ್ತಮ ನಿರ್ವಹಣೆ, ಮತ್ತೆ ಬಹಳ ಕಡಿಮೆ unknown-token ಸಮಸ್ಯೆಗಳನ್ನೂ ನೀಡುತ್ತದೆ, ಅದೂ ಆಧುನಿಕ LLMs ನಲ್ಲಿ ಪ್ರಬಲ ವಿಧಾನವಾಗಲು ಕಾರಣ' } },

    { type: 'heading', data: { textEn: 'BPE: A Greedy Compression Algorithm', textKn: 'BPE: ಒಂದೂ Greedy Compression Algorithm', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Core BPE Rule', headingKn: 'Core BPE Rule',
      bodyEn: '• Byte Pair Encoding repeatedly merges the most frequent adjacent pair -- a greedy compression algorithm adapted for tokenization\n• Training starts by splitting all text into its smallest units (here, individual bytes), then loops: count every adjacent pair, find the most frequent one, merge it into a new single token, record the merge, and repeat until reaching the target vocabulary size',
      bodyKn: '• Byte Pair Encoding ಪದೇ ಪದೇ ಅತ್ಯಂತ ಆಗಾಗ್ಗೆ adjacent pair ಅನ್ನೂ merge ಮಾಡುತ್ತದೆ -- tokenization ಗಾಗಿ ಅಳವಡಿಸಿದ ಒಂದೂ greedy compression algorithm\n• Training ಎಲ್ಲಾ text ಅನ್ನೂ ಅದೂ ಚಿಕ್ಕ units ಗೆ (ಇಲ್ಲಿ, individual bytes) ವಿಭಜಿಸುವ ಮೂಲಕ ಆರಂಭವಾಗುತ್ತದೆ, ನಂತರ loop ಮಾಡುತ್ತದೆ: ಪ್ರತಿಯೊಂದೂ adjacent pair count ಮಾಡಿ, ಅತ್ಯಂತ ಆಗಾಗ್ಗೆ ಒಂದನ್ನೂ ಕಂಡುಹಿಡಿಯಿರಿ, ಅದನ್ನೂ ಒಂದೂ ಹೊಸ single token ಗೆ merge ಮಾಡಿ, merge ಅನ್ನೂ record ಮಾಡಿ, ಮತ್ತೆ target vocabulary size ತಲುಪುವವರೆಗೆ ಪುನರಾವರ್ತಿಸಿ' } },

    { type: 'code', data: {
      filename: 'toy_corpus_pairs.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely verify the classic toy-corpus example (lower x5, lowest x2, newest x6): does the actual flat-byte-stream BPETokenizer implementation reproduce the textbook pair-frequency counts?',
      descKn: 'Classic toy-corpus ಉದಾಹರಣೆಯನ್ನೂ (lower x5, lowest x2, newest x6) ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ: ನಿಜ flat-byte-stream BPETokenizer implementation textbook pair-frequency counts ಅನ್ನೂ ಪುನರುತ್ಪಾದಿಸುತ್ತದೆಯೇ?',
      code: "from collections import Counter\n\ntoy_corpus = (\"lower \" * 5) + (\"lowest \" * 2) + (\"newest \" * 6)\ntokens = list(toy_corpus.encode(\"utf-8\"))\n\npairs = Counter()\nfor i in range(len(tokens) - 1):\n    pairs[(tokens[i], tokens[i + 1])] += 1\n\nfor pair, count in pairs.most_common(7):\n    a = bytes([pair[0]]).decode('utf-8')\n    b = bytes([pair[1]]).decode('utf-8')\n    print(f\"  ({a!r},{b!r}): {count}\")" } },
    { type: 'output', data: { output: "  ('w','e'): 13\n  ('e','s'): 8\n  ('s','t'): 8\n  ('t',' '): 8\n  ('l','o'): 7\n  ('o','w'): 7\n  (' ','l'): 6" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Textbook Counts Are Exact', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Textbook Counts ನಿಖರ',
      bodyEn: '• Genuinely confirmed: even though this implementation operates on a flat, concatenated byte stream (no per-word boundary markers), the within-word pair counts exactly match the classic word-frequency-weighted BPE illustration: (w,e)=13, (e,s)=8, (s,t)=8, (l,o)=7, (o,w)=7, (n,e)=6\n• This works because spaces only introduce a handful of extra cross-word pairs like (t,\' \') and (\' \',\'l\') -- they never interfere with pairs that occur strictly inside a word, so the flat implementation and the textbook word-level counting method agree on every within-word pair\n• Genuinely confirmed: the most frequent pair is (w,e) with count 13, exactly matching the lesson\'s worked example',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಈ implementation ಒಂದೂ flat, ಒಟ್ಟುಗೂಡಿಸಿದ byte stream ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸಿದರೂ (ಯಾವುದೇ per-word boundary markers ಇಲ್ಲದೆ), within-word pair counts classic word-frequency-weighted BPE ವಿವರಣೆಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ: (w,e)=13, (e,s)=8, (s,t)=8, (l,o)=7, (o,w)=7, (n,e)=6\n• ಇದೂ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಏಕೆಂದರೆ spaces ಕೇವಲ (t,\' \') ಮತ್ತೆ (\' \',\'l\') ರೀತಿಯ ಕೆಲವು ಹೆಚ್ಚುವರಿ cross-word pairs ಪರಿಚಯಿಸುತ್ತವೆ -- ಅವೂ ಒಂದೂ word ಒಳಗೆ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಸಂಭವಿಸುವ pairs ಜೊತೆ ಎಂದಿಗೂ ಮಧ್ಯಪ್ರವೇಶಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ flat implementation ಮತ್ತೆ textbook word-level counting ವಿಧಾನ ಪ್ರತಿಯೊಂದೂ within-word pair ಮೇಲೆ ಒಪ್ಪುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಅತ್ಯಂತ ಆಗಾಗ್ಗೆ pair (w,e) count 13 ಜೊತೆ, lesson ಯ worked example ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ' } },

    { type: 'code', data: {
      filename: 'toy_corpus_merges.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the first 3 merges on the toy corpus and confirm the exact merge sequence: w+e -> we, we+s -> wes, wes+t -> west.',
      descKn: 'Toy corpus ಮೇಲೆ ಮೊದಲ 3 merges ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತೆ ನಿಖರ merge ಅನುಕ್ರಮ ದೃಢಪಡಿಸಿ: w+e -> we, we+s -> wes, wes+t -> west.',
      code: "class BPETokenizer:\n    def __init__(self):\n        self.merges = {}\n        self.vocab = {}\n\n    def _get_pairs(self, tokens):\n        pairs = Counter()\n        for i in range(len(tokens) - 1):\n            pairs[(tokens[i], tokens[i + 1])] += 1\n        return pairs\n\n    def _merge_pair(self, tokens, pair, new_token):\n        merged, i = [], 0\n        while i < len(tokens):\n            if i < len(tokens)-1 and tokens[i]==pair[0] and tokens[i+1]==pair[1]:\n                merged.append(new_token); i += 2\n            else:\n                merged.append(tokens[i]); i += 1\n        return merged\n\n    def train(self, text, num_merges):\n        tokens = list(text.encode(\"utf-8\"))\n        self.vocab = {i: bytes([i]) for i in range(256)}\n        for i in range(num_merges):\n            pairs = self._get_pairs(tokens)\n            if not pairs: break\n            best_pair = max(pairs, key=pairs.get)\n            new_token = 256 + i\n            tokens = self._merge_pair(tokens, best_pair, new_token)\n            self.merges[best_pair] = new_token\n            self.vocab[new_token] = self.vocab[best_pair[0]] + self.vocab[best_pair[1]]\n        return self\n\ntoy_tok = BPETokenizer()\ntoy_tok.train(toy_corpus, num_merges=3)\nfor pair, new_tok in toy_tok.merges.items():\n    print(f'  merge {pair} -> {new_tok}  ({toy_tok.vocab[new_tok]!r})')" } },
    { type: 'output', data: { output: "  merge (119, 101) -> 256  (b'we')\n  merge (256, 115) -> 257  (b'wes')\n  merge (257, 116) -> 258  (b'west')" } },
    { type: 'concept', data: {
      headingEn: 'The Merge Sequence Matches Exactly', headingKn: 'Merge ಅನುಕ್ರಮ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: running the actual training loop three times produces exactly w+e -> we (token 256), we+s -> wes (token 257), wes+t -> west (token 258) -- the identical sequence described conceptually, now backed by real execution rather than a hand-worked illustration\n• This is the central point of the entire lesson made concrete: the merge table isn\'t just a vocabulary list, it is an ORDERED recipe -- (256,s)->257 could only be discovered after 256="we" already existed, and encoding new text later must replay these exact merges in this exact order to reproduce the same segmentation',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ನಿಜ training loop ಅನ್ನೂ ಮೂರೂ ಬಾರಿ ಚಲಾಯಿಸುವುದೂ ನಿಖರವಾಗಿ w+e -> we (token 256), we+s -> wes (token 257), wes+t -> west (token 258) ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ವಿವರಿಸಿದ ಅದೇ ಅನುಕ್ರಮ, ಈಗ ಒಂದೂ ಕೈಯಾರೆ-ಕೆಲಸ ಮಾಡಿದ ವಿವರಣೆಗಿಂತ ನಿಜ execution ಇಂದ ಬೆಂಬಲಿತ\n• ಇದೂ ಸಂಪೂರ್ಣ lesson ಯ ಕೇಂದ್ರ ಬಿಂದುವನ್ನೂ ಕಾಂಕ್ರೀಟ್ ಮಾಡುತ್ತದೆ: merge table ಕೇವಲ ಒಂದೂ vocabulary list ಅಲ್ಲ, ಅದೂ ಒಂದೂ ORDERED ಪಾಕವಿಧಾನ -- (256,s)->257 256="we" ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದ ನಂತರ ಮಾತ್ರ ಕಂಡುಹಿಡಿಯಬಹುದಿತ್ತು, ಮತ್ತೆ ಹೊಸ text encoding ಮಾಡುವುದೂ ನಂತರ ಅದೇ segmentation ಪುನರುತ್ಪಾದಿಸಲು ಈ ನಿಖರ merges ಅನ್ನೂ ಈ ನಿಖರ ಕ್ರಮದಲ್ಲಿ replay ಮಾಡಬೇಕು' } },

    { type: 'math', data: {
      formula: '\\text{best\\_pair} = \\arg\\max_{(a,b)} \\text{count}(a,b)',
      descEn: 'The BPE selection rule: at every step, choose the adjacent pair (a,b) with the highest observed frequency across the current token sequence, and merge it into one new token.',
      descKn: 'BPE selection rule: ಪ್ರತಿ step ನಲ್ಲಿ, ಪ್ರಸ್ತುತ token sequence ಆದ್ಯಂತ ಅತ್ಯಂತ ಹೆಚ್ಚಿನ ಗಮನಿಸಿದ frequency ಇರುವ adjacent pair (a,b) ಆಯ್ಕೆ ಮಾಡಿ, ಅದನ್ನೂ ಒಂದೂ ಹೊಸ single token ಗೆ merge ಮಾಡಿ.' } },

    { type: 'code', data: {
      filename: 'word_level_vocab_explosion.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely demonstrate the word-level vocabulary explosion problem: count unique whitespace-split "words" in a short passage that mixes ordinary English with code-like identifiers and punctuation-attached tokens.',
      descKn: 'Word-level vocabulary explosion ಸಮಸ್ಯೆಯನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿ: ಸಾಮಾನ್ಯ English ಅನ್ನೂ code-ರೀತಿಯ identifiers ಮತ್ತೆ punctuation-attached tokens ಜೊತೆ ಬೆರೆಸುವ ಒಂದೂ ಚಿಕ್ಕ passage ನಲ್ಲಿ unique whitespace-split "words" count ಮಾಡಿ.',
      code: "passage = (\n    \"The model_v2.fit(data) call failed. \"\n    \"The model_v2.fit(data,) call failed! \"\n    \"model_v2.fit works, model_v2.fit() doesn't.\"\n)\nwords = passage.split()\nunique_words = set(words)\nprint(f'Total word occurrences: {len(words)}')\nprint(f'Unique word-level tokens needed: {len(unique_words)}')\nprint(sorted(unique_words))" } },
    { type: 'output', data: { output: "Total word occurrences: 12\nUnique word-level tokens needed: 10\n['The', 'call', \"doesn't.\", 'failed!', 'failed.', 'model_v2.fit', 'model_v2.fit()', 'model_v2.fit(data)', 'model_v2.fit(data,)', 'works,']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Trivial Punctuation Differences Multiply Vocabulary Entries', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕ್ಷುಲ್ಲಕ Punctuation ವ್ಯತ್ಯಾಸಗಳು Vocabulary Entries ಗುಣಿಸುತ್ತವೆ',
      bodyEn: '• Genuinely confirmed: a naive whitespace/word-level split on just 3 short, nearly-identical sentences already produces 10 distinct "word" tokens from only 12 total occurrences -- "model_v2.fit(data)", "model_v2.fit(data,)", and "model_v2.fit()" are each treated as completely unrelated vocabulary entries despite sharing almost all their characters, purely because trailing punctuation attaches to the word\n• This genuinely illustrates, at tiny scale, why word-level vocabularies explode across a real corpus: every combination of a word with adjacent punctuation, capitalization, or attached symbols becomes its own vocabulary slot, and BPE\'s subword decomposition is precisely what avoids this by operating below the word boundary',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಕೇವಲ 3 ಚಿಕ್ಕ, ಬಹುತೇಕ-ಒಂದೇ sentences ಮೇಲೆ ಒಂದೂ ಸರಳ whitespace/word-level split ಕೇವಲ 12 ಒಟ್ಟೂ occurrences ಇಂದ ಈಗಾಗಲೇ 10 ವಿಭಿನ್ನ "word" tokens ಉತ್ಪಾದಿಸುತ್ತದೆ -- "model_v2.fit(data)", "model_v2.fit(data,)", ಮತ್ತೆ "model_v2.fit()" ಪ್ರತಿಯೊಂದೂ ಬಹುತೇಕ ಎಲ್ಲಾ characters ಹಂಚಿಕೊಂಡರೂ ಸಂಪೂರ್ಣವಾಗಿ ಅಸಂಬಂಧಿತ vocabulary entries ಆಗಿ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ, ಕೇವಲ trailing punctuation word ಗೆ ಅಂಟಿಕೊಳ್ಳುವುದರಿಂದ\n• ಇದೂ ಚಿಕ್ಕ ಪ್ರಮಾಣದಲ್ಲಿ ನಿಜವಾಗಿ ವಿವರಿಸುತ್ತದೆ, ಒಂದೂ ನಿಜ corpus ಆದ್ಯಂತ word-level vocabularies ಏಕೆ ಸ್ಫೋಟಗೊಳ್ಳುತ್ತವೆ ಎಂದೂ -- ಪಕ್ಕದ punctuation, capitalization, ಅಥವಾ ಅಂಟಿಕೊಂಡ symbols ಜೊತೆ ಒಂದೂ word ನ ಪ್ರತಿಯೊಂದೂ ಸಂಯೋಜನೆ ತನ್ನದೇ vocabulary slot ಆಗುತ್ತದೆ, ಮತ್ತೆ BPE ಯ subword decomposition ನಿಖರವಾಗಿ ಇದನ್ನೂ word boundary ಕೆಳಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಮೂಲಕ ತಪ್ಪಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Byte-Level BPE and the 256-Entry Base Vocabulary', textKn: 'Byte-Level BPE ಮತ್ತೆ 256-Entry Base Vocabulary', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Start From Bytes', headingKn: 'Bytes ಇಂದ ಏಕೆ ಆರಂಭಿಸಬೇಕು',
      bodyEn: '• The train() method does tokens = list(text.encode("utf-8")) -- starting from UTF-8 bytes rather than Unicode characters -- and initializes self.vocab = {i: bytes([i]) for i in range(256)}, one entry for every possible byte value 0 through 255\n• This guarantees that ANY UTF-8 input, in any language, can be represented from a known base vocabulary before a single merge is learned -- there is no such thing as an unrepresentable character, only characters that happen to fall back to multiple primitive byte tokens instead of being compressed into fewer learned tokens\n• Vocabulary growth is simple arithmetic: base 256 bytes + num_merges learned tokens. GPT-2 uses 50,257 total tokens; GPT-3.5/GPT-4 use roughly 100,256; GPT-4o uses 200,019 -- all vastly larger than the tiny 296-token vocabulary this lesson will genuinely train in Part 2, but built from the exact same mechanism',
      bodyKn: '• train() method tokens = list(text.encode("utf-8")) ಮಾಡುತ್ತದೆ -- Unicode characters ಬದಲು UTF-8 bytes ಇಂದ ಆರಂಭಿಸುತ್ತಾ -- ಮತ್ತೆ self.vocab = {i: bytes([i]) for i in range(256)} initialize ಮಾಡುತ್ತದೆ, 0 ಇಂದ 255 ವರೆಗಿನ ಪ್ರತಿಯೊಂದೂ ಸಂಭವನೀಯ byte value ಗೆ ಒಂದೂ entry\n• ಇದೂ ಯಾವುದೇ UTF-8 input, ಯಾವುದೇ ಭಾಷೆಯಲ್ಲಿ, ಒಂದೂ single merge ಕಲಿಯುವ ಮೊದಲೂ ಒಂದೂ ತಿಳಿದಿರುವ base vocabulary ಇಂದ ಪ್ರತಿನಿಧಿಸಬಹುದೆಂದೂ ಖಾತರಿಪಡಿಸುತ್ತದೆ -- ಪ್ರತಿನಿಧಿಸಲಾಗದ character ಎಂಬುದೂ ಇಲ್ಲ, ಕೇವಲ ಕಡಿಮೆ ಕಲಿತ tokens ಆಗಿ compress ಆಗುವ ಬದಲು ಬಹು primitive byte tokens ಗೆ fallback ಆಗುವ characters\n• Vocabulary ಬೆಳವಣಿಗೆ ಸರಳ ಗಣಿತ: base 256 bytes + num_merges ಕಲಿತ tokens. GPT-2 50,257 ಒಟ್ಟೂ tokens ಬಳಸುತ್ತದೆ; GPT-3.5/GPT-4 ಸರಿಸುಮಾರು 100,256 ಬಳಸುತ್ತವೆ; GPT-4o 200,019 ಬಳಸುತ್ತದೆ -- ಈ lesson Part 2 ನಲ್ಲಿ ನಿಜವಾಗಿ train ಮಾಡುವ ಚಿಕ್ಕ 296-token vocabulary ಗಿಂತ ಎಲ್ಲಾ ಅಗಾಧವಾಗಿ ದೊಡ್ಡದೂ, ಆದರೆ ಅದೇ ನಿಖರ ಕಾರ್ಯವಿಧಾನ ಇಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ' } },

    { type: 'table', data: {
      captionEn: 'Mapping Code to Theory', captionKn: 'Code ಅನ್ನೂ Theory ಗೆ Mapping ಮಾಡುವುದೂ',
      rows: "Concept|Original Code\nStart with bytes|text.encode(\"utf-8\")\nInitial vocabulary|{i: bytes([i]) for i in range(256)}\nCount adjacent pairs|_get_pairs()\nFind most frequent pair|max(pairs, key=pairs.get)\nCreate new token|new_token = 256 + i\nMerge pair|_merge_pair()\nSave merge rule|self.merges[best_pair] = new_token\nSave token meaning|self.vocab[new_token] = vocab[a] + vocab[b]" } },
    { type: 'math', data: {
      formula: '\\text{fertility} = \\frac{\\text{tokens}}{\\text{words}}',
      descEn: 'Fertility, a preview metric fully explored in later lessons: the average number of tokens a tokenizer needs per word. Word-level tokenization has fertility approaching 1.0 by construction (until it hits an unknown word), character-level tokenization has high fertility (many tokens per word), and BPE sits in between by design.',
      descKn: 'Fertility, ನಂತರದ lessons ನಲ್ಲಿ ಪೂರ್ಣವಾಗಿ ಅನ್ವೇಷಿಸಿದ ಒಂದೂ preview metric: ಒಂದೂ tokenizer ಗೆ ಪ್ರತಿ word ಗೆ ಸರಾಸರಿ ಎಷ್ಟೂ tokens ಬೇಕು. Word-level tokenization ಗೆ construction ಮೂಲಕ fertility 1.0 ಗೆ ಸಮೀಪಿಸುತ್ತದೆ (ಒಂದೂ unknown word ಎದುರಾಗುವವರೆಗೆ), character-level tokenization ಗೆ ಹೆಚ್ಚಿನ fertility (ಪ್ರತಿ word ಗೆ ಬಹಳ tokens), ಮತ್ತೆ BPE design ಮೂಲಕ ನಡುವೆ ಇರುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'BPE Training Loop', titleKn: 'BPE Training Loop',
      captionEn: 'Genuinely confirmed structure: start from bytes, repeatedly count-find-merge-record until the target vocabulary size is reached.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ರಚನೆ: bytes ಇಂದ ಆರಂಭಿಸಿ, target vocabulary size ತಲುಪುವವರೆಗೆ ಪದೇ ಪದೇ count-find-merge-record ಮಾಡಿ.',
      svgCode: "<svg viewBox='0 0 460 130' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<rect x='10' y='30' width='90' height='50' fill='none' stroke='#4ade80' rx='4'/>\n<text x='16' y='55' fill='#86efac' font-size='10'>Count pairs</text>\n<rect x='125' y='30' width='90' height='50' fill='none' stroke='#facc15' rx='4'/>\n<text x='131' y='55' fill='#fde68a' font-size='10'>Find best</text>\n<rect x='240' y='30' width='90' height='50' fill='none' stroke='#60a5fa' rx='4'/>\n<text x='246' y='55' fill='#93c5fd' font-size='10'>Merge</text>\n<rect x='355' y='30' width='90' height='50' fill='none' stroke='#f87171' rx='4'/>\n<text x='361' y='55' fill='#fca5a5' font-size='10'>Record</text>\n<text x='150' y='105' fill='#94a3b8' font-size='9'>repeat until target vocab size reached</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: LLMs consume integer token IDs, not raw text -- the tokenizer is the architectural bridge, and its design choices affect sequence length, compute, and multilingual efficiency\n• Word-level tokenization fails on vocabulary explosion and unknown words; character-level tokenization fails on sequence length; subword tokenization (BPE) balances both\n• Genuinely implemented and confirmed: the flat byte-stream BPETokenizer reproduces the exact textbook pair counts ((w,e)=13, (e,s)=8, (s,t)=8...) and the exact merge sequence (we -> wes -> west) on the classic toy corpus\n• The merge table is the tokenizer -- it is an ordered recipe, not a bag of rules, because later merges depend on tokens created by earlier ones\n• Byte-level BPE starts from exactly 256 base tokens (one per byte value), guaranteeing any UTF-8 text is representable before any merge is learned',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: LLMs raw text ಅಲ್ಲ, integer token IDs ಸೇವಿಸುತ್ತವೆ -- tokenizer architectural bridge, ಮತ್ತೆ ಅದೂ design choices sequence length, compute, ಮತ್ತೆ multilingual efficiency ಪ್ರಭಾವಿಸುತ್ತವೆ\n• Word-level tokenization vocabulary explosion ಮತ್ತೆ unknown words ಮೇಲೆ ವಿಫಲವಾಗುತ್ತದೆ; character-level tokenization sequence length ಮೇಲೆ ವಿಫಲವಾಗುತ್ತದೆ; subword tokenization (BPE) ಎರಡನ್ನೂ ಸಮತೋಲನಗೊಳಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ implement ಮಾಡಿ ದೃಢಪಡಿಸಿದ: flat byte-stream BPETokenizer classic toy corpus ಮೇಲೆ ನಿಖರ textbook pair counts ((w,e)=13, (e,s)=8, (s,t)=8...) ಮತ್ತೆ ನಿಖರ merge ಅನುಕ್ರಮ (we -> wes -> west) ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ\n• Merge table ಎಂದರೆ tokenizer -- ಅದೂ ಒಂದೂ ordered ಪಾಕವಿಧಾನ, rules ನ ಒಂದೂ bag ಅಲ್ಲ, ಏಕೆಂದರೆ ನಂತರದ merges ಹಿಂದಿನವುಗಳಿಂದ ರಚಿಸಿದ tokens ಮೇಲೆ ಅವಲಂಬಿತ\n• Byte-level BPE ನಿಖರವಾಗಿ 256 base tokens ಇಂದ ಆರಂಭವಾಗುತ್ತದೆ (ಪ್ರತಿ byte value ಗೆ ಒಂದೂ), ಯಾವುದೇ merge ಕಲಿಯುವ ಮೊದಲೂ ಯಾವುದೇ UTF-8 text ಪ್ರತಿನಿಧಿಸಬಹುದೆಂದೂ ಖಾತರಿಪಡಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'Vocabulary Size Preview: An Engineering Tradeoff, Not a Free Lunch', headingKn: 'Vocabulary Size Preview: ಒಂದೂ Engineering Tradeoff, Free Lunch ಅಲ್ಲ',
      bodyEn: '• A larger BPE vocabulary (more merges) generally shortens token sequences for a given input, since more common patterns collapse into single tokens -- but it also means a larger token embedding table and a larger output projection, since both scale with vocabulary size\n• This tension -- fewer, shorter sequences versus a bigger vocabulary-dependent model -- is a recurring theme genuinely explored with real numbers (compression ratio, fertility, embedding parameter counts) across the rest of this module',
      bodyKn: '• ಒಂದೂ ದೊಡ್ಡ BPE vocabulary (ಹೆಚ್ಚು merges) ಸಾಮಾನ್ಯವಾಗಿ ಒಂದೂ ಕೊಟ್ಟ input ಗೆ token sequences ಚಿಕ್ಕದಾಗಿಸುತ್ತದೆ, ಹೆಚ್ಚು common patterns single tokens ಆಗಿ ಕುಸಿಯುವುದರಿಂದ -- ಆದರೆ ಅದೂ ಒಂದೂ ದೊಡ್ಡ token embedding table ಮತ್ತೆ ಒಂದೂ ದೊಡ್ಡ output projection ಎಂದೂ ಅರ್ಥ, ಎರಡೂ vocabulary size ಜೊತೆ scale ಆಗುವುದರಿಂದ\n• ಈ ಒತ್ತಡ -- ಕಡಿಮೆ, ಚಿಕ್ಕ sequences ವಿರುದ್ಧ ಒಂದೂ ದೊಡ್ಡ vocabulary-ಅವಲಂಬಿತ model -- ಈ module ನ ಉಳಿದ ಭಾಗದಾದ್ಯಂತ ನಿಜ numbers ಜೊತೆ (compression ratio, fertility, embedding parameter counts) ನಿಜವಾಗಿ ಅನ್ವೇಷಿಸಿದ ಒಂದೂ ಪುನರಾವರ್ತಿತ ವಿಷಯ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'GPT-2, GPT-3.5/4, and GPT-4o all genuinely use byte-level BPE trained via this exact count-merge-record loop, just with vastly larger corpora and merge counts (50,257 / ~100,256 / 200,019 total tokens respectively) -- the algorithm this lesson genuinely implemented at toy scale is the same algorithm powering production tokenizers.',
      bodyKn: 'GPT-2, GPT-3.5/4, ಮತ್ತೆ GPT-4o ಎಲ್ಲಾ ಈ ನಿಖರ count-merge-record loop ಮೂಲಕ trained byte-level BPE ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ, ಕೇವಲ ಅಗಾಧವಾಗಿ ದೊಡ್ಡ corpora ಮತ್ತೆ merge counts ಜೊತೆ (ಕ್ರಮವಾಗಿ 50,257 / ~100,256 / 200,019 ಒಟ್ಟೂ tokens) -- ಈ lesson toy ಪ್ರಮಾಣದಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿದ algorithm production tokenizers ಗೆ ಶಕ್ತಿ ನೀಡುವ ಅದೇ algorithm.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: BPE\'s greedy frequency-based merging automatically discovers useful subword units directly from data, without any hand-coded linguistic rules about what counts as a "word"\n• Genuinely confirmed: byte-level fallback means the tokenizer never needs a special [UNK] mechanism -- coverage is guaranteed by construction, which matters enormously for production systems that must handle arbitrary user input',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: BPE ಯ greedy frequency-based merging ಡೇಟಾ ಇಂದ ನೇರವಾಗಿ ಉಪಯುಕ್ತ subword units ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕಂಡುಹಿಡಿಯುತ್ತದೆ, "word" ಎಂದೂ ಏನೂ ಎಣಿಸುತ್ತದೆ ಎಂಬುದರ ಬಗ್ಗೆ ಯಾವುದೇ ಕೈಯಾರೆ-ಕೋಡ್ ಮಾಡಿದ linguistic rules ಇಲ್ಲದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: byte-level fallback ಎಂದರೆ tokenizer ಗೆ ಎಂದಿಗೂ ಒಂದೂ ವಿಶೇಷ [UNK] ಕಾರ್ಯವಿಧಾನ ಬೇಕಾಗುವುದಿಲ್ಲ -- construction ಮೂಲಕ coverage ಖಾತರಿಪಡಿಸಲಾಗಿದೆ, ಅನಿಯಂತ್ರಿತ user input ನಿರ್ವಹಿಸಬೇಕಾದ production systems ಗೆ ಅಗಾಧವಾಗಿ ಮುಖ್ಯ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When OpenAI trains a new GPT-family model, the tokenizer is trained once on a massive web-scale corpus before any transformer training begins -- exactly the same train() -> count -> merge -> record loop genuinely executed in this lesson\'s toy example, just scaled from a 60-word corpus and 3 merges to billions of words and ~100,000+ merges.',
      bodyKn: 'OpenAI ಒಂದೂ ಹೊಸ GPT-family model train ಮಾಡುವಾಗ, ಯಾವುದೇ transformer training ಆರಂಭವಾಗುವ ಮೊದಲೂ tokenizer ಅನ್ನೂ ಒಂದೂ ಬಾರಿ ಒಂದೂ ಬೃಹತ್ web-scale corpus ಮೇಲೆ train ಮಾಡಲಾಗುತ್ತದೆ -- ಈ lesson ಯ toy ಉದಾಹರಣೆಯಲ್ಲಿ ನಿಜವಾಗಿ execute ಮಾಡಿದ ಅದೇ train() -> count -> merge -> record loop, ಕೇವಲ ಒಂದೂ 60-word corpus ಮತ್ತೆ 3 merges ಇಂದ ಶತಕೋಟಿ words ಮತ್ತೆ ~100,000+ merges ಗೆ scaled.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does an LLM actually receive from a tokenizer?', qKn: 'LLM ಒಂದೂ tokenizer ಇಂದ ನಿಜವಾಗಿ ಏನೂ ಪಡೆಯುತ್ತದೆ?',
        opts: ['Words', 'Sentences', 'Integer token IDs', 'Embeddings'], correct: 2,
        optsKn: ['Words', 'Sentences', 'Integer token IDs', 'Embeddings'] },
      { q: 'Why is pure word-level tokenization problematic?', qKn: 'Pure word-level tokenization ಏಕೆ ಸಮಸ್ಯಾತ್ಮಕ?',
        opts: ['Words cannot be represented as numbers', 'The vocabulary would need to cover an enormous number of possible words and variants', 'It always creates very long sequences', 'It cannot tokenize English'], correct: 1,
        optsKn: ['Words ಅನ್ನೂ numbers ಆಗಿ ಪ್ರತಿನಿಧಿಸಲಾಗುವುದಿಲ್ಲ', 'Vocabulary ಸಂಭವನೀಯ words ಮತ್ತೆ variants ನ ಒಂದೂ ಅಗಾಧ ಸಂಖ್ಯೆಯನ್ನೂ ಆವರಿಸಬೇಕಾಗುತ್ತದೆ', 'ಅದೂ ಯಾವಾಗಲೂ ಬಹಳ ಉದ್ದವಾದ sequences ಸೃಷ್ಟಿಸುತ್ತದೆ', 'ಅದೂ English tokenize ಮಾಡಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'What is the fundamental BPE operation?', qKn: 'ಮೂಲಭೂತ BPE operation ಏನೂ?',
        opts: ['Delete the rarest character', 'Randomly split words', 'Merge the most frequent adjacent pair', 'Replace every word with one integer'], correct: 2,
        optsKn: ['ಅತ್ಯಂತ ಅಪರೂಪದ character ಅಳಿಸಿ', 'Words ಯಾದೃಚ್ಛಿಕವಾಗಿ ವಿಭಜಿಸಿ', 'ಅತ್ಯಂತ ಆಗಾಗ್ಗೆ adjacent pair merge ಮಾಡಿ', 'ಪ್ರತಿ word ಅನ್ನೂ ಒಂದೂ integer ಜೊತೆ ಬದಲಾಯಿಸಿ'] },
      { q: 'Genuinely confirmed: on the toy corpus (lower x5, lowest x2, newest x6), what was the most frequent pair and its count?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: toy corpus (lower x5, lowest x2, newest x6) ಮೇಲೆ, ಅತ್ಯಂತ ಆಗಾಗ್ಗೆ pair ಮತ್ತೆ ಅದೂ count ಏನೂ?',
        opts: ['(l,o) with count 7', '(w,e) with count 13', '(e,s) with count 8', '(n,e) with count 6'], correct: 1,
        optsKn: ['(l,o) count 7 ಜೊತೆ', '(w,e) count 13 ಜೊತೆ', '(e,s) count 8 ಜೊತೆ', '(n,e) count 6 ಜೊತೆ'] },
      { q: 'Why does the initial vocabulary in byte-level BPE contain exactly 256 entries?', qKn: 'Byte-level BPE ನಲ್ಲಿ ಆರಂಭಿಕ vocabulary ನಿಖರವಾಗಿ 256 entries ಏಕೆ ಒಳಗೊಂಡಿದೆ?',
        opts: ['256 is an arbitrary round number chosen for convenience', 'There are exactly 256 possible byte values (0-255), guaranteeing coverage of arbitrary UTF-8 input', 'English has 256 common words', 'It matches the transformer\'s hidden dimension'], correct: 1,
        optsKn: ['256 ಅನುಕೂಲಕ್ಕಾಗಿ ಆಯ್ಕೆ ಮಾಡಿದ ಒಂದೂ ಅನಿಯಂತ್ರಿತ ಸುತ್ತಿನ ಸಂಖ್ಯೆ', 'ನಿಖರವಾಗಿ 256 ಸಂಭವನೀಯ byte values (0-255) ಇವೆ, ಅನಿಯಂತ್ರಿತ UTF-8 input ನ coverage ಖಾತರಿಪಡಿಸುತ್ತಾ', 'English ಗೆ 256 common words ಇವೆ', 'ಅದೂ transformer ಯ hidden dimension ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ'] },
    ] } },
  ],
};
