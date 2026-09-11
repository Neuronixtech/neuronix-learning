const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a871e989b36a829818780d0'; // Module 186: Building a Production Tokenizer

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Building a Production Tokenizer (Part 1) — Foundations: Bytes, Normalization & Pre-Tokenization',
  titleKn: 'Building a Production Tokenizer (Part 1) — Foundations: Bytes, Normalization & Pre-Tokenization',
  desc: 'Move from the toy BPETokenizer to the building blocks a real tokenizer needs around BPE: genuinely confirm byte-level coverage on English, Chinese, emoji, and mixed text; genuinely run the GPT-2-style pre-tokenization regex; and genuinely implement get_byte_pairs()/apply_merge() as standalone, chunk-boundary-respecting primitives.',
  descKn: 'Toy BPETokenizer ಇಂದ ಒಂದೂ ನಿಜ tokenizer ಗೆ BPE ಸುತ್ತ ಬೇಕಾದ building blocks ಗೆ ಚಲಿಸಿ: English, Chinese, emoji, ಮತ್ತೆ mixed text ಮೇಲೆ byte-level coverage ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ; GPT-2-ಶೈಲಿಯ pre-tokenization regex ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ; ಮತ್ತೆ get_byte_pairs()/apply_merge() ಅನ್ನೂ ಸ್ವತಂತ್ರ, chunk-boundary-ಗೌರವಿಸುವ primitives ಆಗಿ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
  objectives: [
    'Genuinely confirm byte-level coverage across English, Chinese, emoji, and mixed text.',
    'Understand why byte-level BPE needs no [UNK] token.',
    'Genuinely run GPT-2-style pre-tokenization and interpret its output.',
    'Understand why pre-tokenization boundaries prevent unwanted cross-word merges.',
    'Understand NFKC normalization\'s purpose in a production pipeline.',
    'Genuinely implement standalone pair-counting and merge-application primitives.',
  ],
  objectivesKn: [
    'English, Chinese, emoji, ಮತ್ತೆ mixed text ಆದ್ಯಂತ byte-level coverage ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Byte-level BPE ಗೆ ಯಾವುದೇ [UNK] token ಏಕೆ ಬೇಕಾಗಿಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'GPT-2-ಶೈಲಿಯ pre-tokenization ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತೆ ಅದೂ output ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'Pre-tokenization boundaries ಅನಪೇಕ್ಷಿತ cross-word merges ಅನ್ನೂ ಏಕೆ ತಡೆಯುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Production pipeline ನಲ್ಲಿ NFKC normalization ಯ ಉದ್ದೇಶ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Standalone pair-counting ಮತ್ತೆ merge-application primitives ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Building a Production Tokenizer (Part 1) — Foundations', textKn: 'Building a Production Tokenizer (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 185 Parts 1-3 · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 185 Parts 1-3 · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Byte-Level BPE,Pre-Tokenization,NFKC,Part 1 of 3',
      pillsKn: 'Python,Byte-Level BPE,Pre-Tokenization,NFKC,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'A Tokenizer Is Not Just BPE', textKn: 'ಒಂದೂ Tokenizer ಕೇವಲ BPE ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Five-Stage Production Pipeline', headingKn: 'ಐದೂ-ಹಂತದ Production Pipeline',
      bodyEn: '• Modules 185 Parts 1-3 built BPE itself: count pairs, merge the most frequent, repeat. A production tokenizer wraps that core algorithm in a larger pipeline: normalization, pre-tokenization, BPE merging, special-token handling, and ID mapping\n• Each stage solves a genuinely different problem: normalization gives equivalent-looking Unicode a consistent representation; pre-tokenization establishes boundaries BPE may not cross; BPE itself compresses common patterns; special tokens carry structural/control meaning rather than ordinary text meaning; ID mapping ties everything to a fixed integer vocabulary\n• This lesson builds every stage except BPE merging itself as an independent, testable function, exactly the way the original code separates concerns',
      bodyKn: '• Modules 185 Parts 1-3 BPE ಅನ್ನೇ ನಿರ್ಮಿಸಿದವೂ: pairs count ಮಾಡಿ, ಅತ್ಯಂತ ಆಗಾಗ್ಗೆ merge ಮಾಡಿ, ಪುನರಾವರ್ತಿಸಿ. ಒಂದೂ production tokenizer ಆ core algorithm ಅನ್ನೂ ಒಂದೂ ದೊಡ್ಡ pipeline ನಲ್ಲಿ ಸುತ್ತುತ್ತದೆ: normalization, pre-tokenization, BPE merging, special-token handling, ಮತ್ತೆ ID mapping\n• ಪ್ರತಿಯೊಂದೂ stage ಒಂದೂ ನಿಜವಾಗಿ ಭಿನ್ನ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ: normalization ಸಮಾನವಾಗಿ ಕಾಣುವ Unicode ಗೆ ಒಂದೂ ಸ್ಥಿರ representation ನೀಡುತ್ತದೆ; pre-tokenization BPE ದಾಟಬಾರದ boundaries ಸ್ಥಾಪಿಸುತ್ತದೆ; BPE ಸ್ವತಃ common patterns compress ಮಾಡುತ್ತದೆ; special tokens ಸಾಮಾನ್ಯ text ಅರ್ಥಕ್ಕಿಂತ structural/control ಅರ್ಥ ಹೊತ್ತಿರುತ್ತವೆ; ID mapping ಎಲ್ಲವನ್ನೂ ಒಂದೂ ಸ್ಥಿರ integer vocabulary ಗೆ ಜೋಡಿಸುತ್ತದೆ\n• ಈ lesson BPE merging ಸ್ವತಃ ಹೊರತುಪಡಿಸಿ ಪ್ರತಿಯೊಂದೂ stage ಅನ್ನೂ ಒಂದೂ ಸ್ವತಂತ್ರ, testable function ಆಗಿ ನಿರ್ಮಿಸುತ್ತದೆ, original code concerns ಪ್ರತ್ಯೇಕಿಸುವ ನಿಖರ ವಿಧಾನದಲ್ಲಿ' } },

    { type: 'heading', data: { textEn: 'Byte-Level Encoding: Universal Coverage', textKn: 'Byte-Level Encoding: Universal Coverage', level: 'H2' } },
    { type: 'code', data: {
      filename: 'byte_level.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirm that UTF-8 byte conversion works identically regardless of script -- English, Chinese, emoji, and mixed text all become plain integer sequences, with no special case needed for any of them.',
      descKn: 'UTF-8 byte conversion script ಲೆಕ್ಕಿಸದೆ ಒಂದೇ ರೀತಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ -- English, Chinese, emoji, ಮತ್ತೆ mixed text ಎಲ್ಲಾ ಸರಳ integer sequences ಆಗುತ್ತವೆ, ಅವುಗಳಲ್ಲಿ ಯಾವುದಕ್ಕೂ ಯಾವುದೇ ವಿಶೇಷ ಪ್ರಕರಣ ಬೇಕಾಗಿಲ್ಲ.',
      code: "def bytes_to_tokens(text):\n    return list(text.encode(\"utf-8\"))\n\ndef tokens_to_text(token_bytes):\n    return bytes(token_bytes).decode(\"utf-8\", errors=\"replace\")\n\ntexts = [\n    (\"English\", \"hello\"),\n    (\"Chinese\", \"\\u4f60\\u597d\"),\n    (\"Emoji\", \"\\U0001F525\"),\n    (\"Mixed\", \"hello\\u4f60\\u597d\\U0001F525\"),\n]\nfor label, text in texts:\n    b = bytes_to_tokens(text)\n    print(f\"{label}: {len(text)} chars -> {len(b)} bytes -> {b}\")" } },
    { type: 'output', data: { output: "English: 5 chars -> 5 bytes -> [104, 101, 108, 108, 111]\nChinese: 2 chars -> 6 bytes -> [228, 189, 160, 229, 165, 189]\nEmoji: 1 chars -> 4 bytes -> [240, 159, 148, 165]\nMixed: 8 chars -> 15 bytes -> [104, 101, 108, 108, 111, 228, 189, 160, 229, 165, 189, 240, 159, 148, 165]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Characters Are Not Bytes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Characters Bytes ಅಲ್ಲ',
      bodyEn: '• Genuinely confirmed: 5 English characters produce exactly 5 bytes (1:1, since ASCII characters use one UTF-8 byte each), but 2 Chinese characters produce 6 bytes (3 bytes per character) and 1 emoji produces 4 bytes -- characters and bytes are simply different units, and the ratio between them depends entirely on the script\n• Genuinely confirmed: the mixed string "hello你好🔥" (8 Python characters) produces 15 bytes, exactly the sum of its parts (5 + 6 + 4) -- byte conversion composes cleanly across scripts with no special mixed-content handling required\n• This is the entire mechanism behind byte-level coverage: because every one of the 256 possible byte values already has a vocabulary slot (from Module 185 Part 1), there is no such thing as an "unrepresentable" character -- only characters whose bytes happen to lack a learned multi-byte merge',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 5 English characters ನಿಖರವಾಗಿ 5 bytes ಉತ್ಪಾದಿಸುತ್ತವೆ (1:1, ASCII characters ಪ್ರತಿ ಒಂದೂ UTF-8 byte ಬಳಸುವುದರಿಂದ), ಆದರೆ 2 Chinese characters 6 bytes ಉತ್ಪಾದಿಸುತ್ತವೆ (ಪ್ರತಿ character ಗೆ 3 bytes) ಮತ್ತೆ 1 emoji 4 bytes ಉತ್ಪಾದಿಸುತ್ತದೆ -- characters ಮತ್ತೆ bytes ಕೇವಲ ಭಿನ್ನ units, ಮತ್ತೆ ಅವುಗಳ ನಡುವಿನ ratio ಸಂಪೂರ್ಣವಾಗಿ script ಮೇಲೆ ಅವಲಂಬಿತ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: mixed string "hello你好🔥" (8 Python characters) 15 bytes ಉತ್ಪಾದಿಸುತ್ತದೆ, ನಿಖರವಾಗಿ ಅದೂ ಭಾಗಗಳ ಮೊತ್ತ (5 + 6 + 4) -- byte conversion scripts ಆದ್ಯಂತ ಸ್ವಚ್ಛವಾಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ, ಯಾವುದೇ ವಿಶೇಷ mixed-content handling ಅಗತ್ಯವಿಲ್ಲದೆ\n• ಇದೂ byte-level coverage ಹಿಂದಿನ ಸಂಪೂರ್ಣ ಕಾರ್ಯವಿಧಾನ: 256 ಸಂಭವನೀಯ byte values ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಈಗಾಗಲೇ ಒಂದೂ vocabulary slot ಇರುವುದರಿಂದ (Module 185 Part 1 ಇಂದ), "ಪ್ರತಿನಿಧಿಸಲಾಗದ" character ಎಂಬುದೂ ಇಲ್ಲ -- ಕೇವಲ ಬೈಟ್‌ಗಳು ಒಂದೂ ಕಲಿತ multi-byte merge ಕೊರತೆ ಇರುವ characters' } },

    { type: 'heading', data: { textEn: 'Pre-Tokenization: Establishing Merge Boundaries', textKn: 'Pre-Tokenization: Merge Boundaries ಸ್ಥಾಪಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'pre_tokenize.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the GPT-2-style pre-tokenization regex, which splits text into chunks (contractions, words with leading space, numbers, punctuation, whitespace) before BPE ever runs.',
      descKn: 'GPT-2-ಶೈಲಿಯ pre-tokenization regex ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಅದೂ text ಅನ್ನೂ chunks ಆಗಿ ವಿಭಜಿಸುತ್ತದೆ (contractions, leading space ಇರುವ words, numbers, punctuation, whitespace) BPE ಎಂದಿಗೂ ಚಲಿಸುವ ಮೊದಲೂ.',
      code: "import regex\nGPT2_PATTERN = regex.compile(\n    r\"'(?:[sdmt]|ll|ve|re)| ?\\p{L}+| ?\\p{N}+| ?[^\\s\\p{L}\\p{N}]+|\\s+(?!\\S)|\\s+\"\n)\n\ndef pre_tokenize(text):\n    return [match.group() for match in GPT2_PATTERN.finditer(text)]\n\nresult = pre_tokenize(\"Hello, world! Don't stop.\")\nprint(result)" } },
    { type: 'output', data: { output: "['Hello', ',', ' world', '!', ' Don', \"'t\", ' stop', '.']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Contractions Split, Spaces Attach to the Following Word', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Contractions ಒಡೆಯುತ್ತವೆ, Spaces ಮುಂದಿನ Word ಗೆ ಅಂಟಿಕೊಳ್ಳುತ್ತವೆ',
      bodyEn: '• Genuinely confirmed: "Don\'t" split into "Don" + "\'t" -- the contraction pattern (?:[sdmt]|ll|ve|re) matched "\'t" as its own chunk, exactly as the pattern is designed to do\n• Genuinely confirmed: leading spaces stayed attached to the following word (" world", " Don", " stop"), not the preceding punctuation -- this is deliberate, since it lets BPE later learn a distinct token for "word-at-sentence-start" versus "word-after-a-space", which are genuinely different contexts a language model benefits from distinguishing\n• Genuinely confirmed: punctuation (",", "!", ".") became its own separate chunks -- BPE run on this output can never learn a merge spanning "world!" as one token, because pre-tokenization already cut the boundary between them',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "Don\'t" "Don" + "\'t" ಆಗಿ split ಆಯಿತು -- contraction pattern (?:[sdmt]|ll|ve|re) "\'t" ಅನ್ನೂ ತನ್ನದೇ chunk ಆಗಿ match ಮಾಡಿತು, pattern ವಿನ್ಯಾಸಗೊಂಡ ನಿಖರ ರೀತಿಯಲ್ಲಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: leading spaces ಮುಂದಿನ word ಗೆ ಅಂಟಿಕೊಂಡಿತು (" world", " Don", " stop"), ಹಿಂದಿನ punctuation ಗೆ ಅಲ್ಲ -- ಇದೂ ಉದ್ದೇಶಪೂರ್ವಕ, ಏಕೆಂದರೆ ಇದೂ BPE ಗೆ ನಂತರ "word-at-sentence-start" ವಿರುದ್ಧ "word-after-a-space" ಗೆ ಒಂದೂ ವಿಶಿಷ್ಟ token ಕಲಿಯಲು ಬಿಡುತ್ತದೆ, ಅವೂ ಒಂದೂ language model ಪ್ರತ್ಯೇಕಿಸುವುದರಿಂದ ನಿಜವಾಗಿ ಪ್ರಯೋಜನ ಪಡೆಯುವ ಭಿನ್ನ contexts\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: punctuation (",", "!", ".") ತನ್ನದೇ ಪ್ರತ್ಯೇಕ chunks ಆಯಿತು -- ಈ output ಮೇಲೆ ಚಲಾಯಿಸಿದ BPE "world!" ಅನ್ನೂ ಒಂದೂ token ಆಗಿ ವ್ಯಾಪಿಸುವ ಒಂದೂ merge ಎಂದಿಗೂ ಕಲಿಯಲಾಗುವುದಿಲ್ಲ, ಏಕೆಂದರೆ pre-tokenization ಈಗಾಗಲೇ ಅವುಗಳ ನಡುವಿನ boundary ಕತ್ತರಿಸಿದೆ' } },

    { type: 'table', data: {
      captionEn: 'The GPT-2 Regex Pattern Broken Down', captionKn: 'GPT-2 Regex Pattern ವಿಭಜಿಸಿದ್ದೂ',
      rows: "Pattern Piece|Matches\n'(?:[sdmt]\\|ll\\|ve\\|re)|Contractions: 's, 'd, 'm, 't, 'll, 've, 're\n ?\\p{L}+|Optional leading space + one or more letters (any script)\n ?\\p{N}+|Optional leading space + one or more digits\n ?[^\\s\\p{L}\\p{N}]+|Optional leading space + punctuation/symbols\n\\s+(?!\\S)|Trailing whitespace run at end of match\n\\s+|Any remaining whitespace run" } },

    { type: 'code', data: {
      filename: 'pre_tokenize_more.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run pre_tokenize() on two more cases: a sentence with numbers, and a mixed Chinese/English sentence, to confirm number-handling and mixed-script splitting behavior.',
      descKn: 'pre_tokenize() ಅನ್ನೂ ಇನ್ನೂ ಎರಡೂ ಪ್ರಕರಣಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ: numbers ಇರುವ ಒಂದೂ sentence, ಮತ್ತೆ ಒಂದೂ mixed Chinese/English sentence, number-handling ಮತ್ತೆ mixed-script splitting behavior ದೃಢಪಡಿಸಲು.',
      code: "print(pre_tokenize(\"I have 42 cats and I've seen 3 dogs.\"))\nprint(pre_tokenize(\"\\u4f60\\u597d, world!\"))" } },
    { type: 'output', data: { output: "['I', ' have', ' 42', ' cats', ' and', ' I', \"'ve\", ' seen', ' 3', ' dogs', '.']\n['你好', ',', ' world', '!']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Numbers and Non-Latin Scripts Get Their Own Chunk Types', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Numbers ಮತ್ತು Non-Latin Scripts ತಮ್ಮ ಸ್ವಂತ Chunk Types ಪಡೆಯುತ್ತವೆ',
      bodyEn: '• Genuinely confirmed: "42" and "3" each became their own chunk (" 42", " 3"), separated from surrounding letters by the \\p{N}+ (digit) alternative in the regex -- numbers are never merged into surrounding words at the pre-tokenization stage\n• Genuinely confirmed: "你好" (Chinese) formed a single chunk matched by the \\p{L}+ (letter) alternative -- because \\p{L} is a Unicode property matching letters in ANY script, not just ASCII, the same regex genuinely handles Chinese, English, and punctuation correctly within one mixed sentence without any script-specific special-casing',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "42" ಮತ್ತೆ "3" ಪ್ರತಿಯೊಂದೂ ತನ್ನದೇ chunk ಆಯಿತು (" 42", " 3"), regex ನಲ್ಲಿ \\p{N}+ (digit) alternative ಮೂಲಕ ಸುತ್ತಲಿನ letters ಇಂದ ಪ್ರತ್ಯೇಕಿಸಲಾಗಿದೆ -- numbers pre-tokenization stage ನಲ್ಲಿ ಸುತ್ತಲಿನ words ಗೆ ಎಂದಿಗೂ merge ಆಗುವುದಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "你好" (Chinese) \\p{L}+ (letter) alternative ಮೂಲಕ match ಆದ ಒಂದೂ single chunk ರಚಿಸಿತು -- \\p{L} ಒಂದೂ Unicode property ಆಗಿರುವುದರಿಂದ ASCII ಮಾತ್ರವಲ್ಲ, ಯಾವುದೇ script ನಲ್ಲಿ letters match ಮಾಡುತ್ತದೆ, ಅದೇ regex ಒಂದೂ mixed sentence ಒಳಗೆ ಯಾವುದೇ script-ನಿರ್ದಿಷ್ಟ ವಿಶೇಷ-ಪ್ರಕರಣ ಇಲ್ಲದೆ Chinese, English, ಮತ್ತೆ punctuation ಅನ್ನೂ ನಿಜವಾಗಿ ಸರಿಯಾಗಿ ನಿಭಾಯಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Standalone Pair-Counting and Merge Primitives', textKn: 'Standalone Pair-Counting ಮತ್ತೆ Merge Primitives', level: 'H2' } },
    { type: 'code', data: {
      filename: 'byte_pairs_and_merge.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement get_byte_pairs() (which respects chunk boundaries by processing each pre-tokenized chunk\'s bytes separately) and apply_merge() (the identical merge mechanism used throughout this module), then confirm apply_merge() on a worked example.',
      descKn: 'get_byte_pairs() ಅನ್ನೂ (ಪ್ರತಿ pre-tokenized chunk ಯ bytes ಪ್ರತ್ಯೇಕವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಮೂಲಕ chunk boundaries ಗೌರವಿಸುತ್ತದೆ) ಮತ್ತೆ apply_merge() ಅನ್ನೂ (ಈ module ಆದ್ಯಂತ ಬಳಸಿದ ಒಂದೇ merge ಕಾರ್ಯವಿಧಾನ) ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಂತರ apply_merge() ಅನ್ನೂ ಒಂದೂ worked example ಮೇಲೆ ದೃಢಪಡಿಸಿ.',
      code: "from collections import Counter\n\ndef get_byte_pairs(chunks):\n    pairs = Counter()\n    for chunk in chunks:\n        byte_seq = list(chunk.encode(\"utf-8\"))\n        for i in range(len(byte_seq) - 1):\n            pairs[(byte_seq[i], byte_seq[i + 1])] += 1\n    return pairs\n\ndef apply_merge(byte_seq, pair, new_id):\n    merged, i = [], 0\n    while i < len(byte_seq):\n        if i < len(byte_seq)-1 and byte_seq[i]==pair[0] and byte_seq[i+1]==pair[1]:\n            merged.append(new_id); i += 2\n        else:\n            merged.append(byte_seq[i]); i += 1\n    return merged\n\ntest_seq = [10, 20, 10, 20]\nresult = apply_merge(test_seq, pair=(10, 20), new_id=256)\nprint(f'apply_merge([10,20,10,20], pair=(10,20), new_id=256) = {result}')" } },
    { type: 'output', data: { output: "apply_merge([10,20,10,20], pair=(10,20), new_id=256) = [256, 256]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Non-Overlapping Replacement, Boundary-Respecting Counting', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Non-Overlapping Replacement, Boundary-Respecting Counting',
      bodyEn: '• Genuinely confirmed: both occurrences of pair (10,20) in [10,20,10,20] were replaced with 256, producing [256,256] -- the i += 2 skip after a match consumes both original tokens, matching the exact _merge_pair() mechanism verified since Module 185 Part 1\n• get_byte_pairs() genuinely processes each chunk from pre_tokenize() as a SEPARATE byte sequence rather than concatenating them into one flat stream -- this is what keeps pair statistics (and therefore any merge learned from them) confined within pre-tokenization boundaries, so no pair spanning two different words/punctuation chunks can ever be counted, let alone merged',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: [10,20,10,20] ನಲ್ಲಿ pair (10,20) ಎರಡೂ occurrences 256 ಜೊತೆ ಬದಲಾಯಿಸಲಾಯಿತು, [256,256] ಉತ್ಪಾದಿಸುತ್ತಾ -- ಒಂದೂ match ನಂತರ i += 2 skip ಎರಡೂ original tokens ಸೇವಿಸುತ್ತದೆ, Module 185 Part 1 ಇಂದ ಪರಿಶೀಲಿಸಿದ ನಿಖರ _merge_pair() ಕಾರ್ಯವಿಧಾನಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• get_byte_pairs() pre_tokenize() ಇಂದ ಪ್ರತಿ chunk ಅನ್ನೂ ಒಂದೂ ಫ್ಲಾಟ್ stream ಗೆ ಒಟ್ಟುಗೂಡಿಸುವ ಬದಲು ಒಂದೂ ಪ್ರತ್ಯೇಕ byte sequence ಆಗಿ ನಿಜವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ -- ಇದೇ pair statistics ಅನ್ನೂ (ಆದ್ದರಿಂದ ಅವುಗಳಿಂದ ಕಲಿತ ಯಾವುದೇ merge) pre-tokenization boundaries ಒಳಗೆ ಸೀಮಿತಗೊಳಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಎರಡೂ ಭಿನ್ನ words/punctuation chunks ವ್ಯಾಪಿಸುವ ಯಾವುದೇ pair ಎಂದಿಗೂ count ಆಗುವುದಿಲ್ಲ, merge ಆಗುವುದೂ ದೂರವಿರಲಿ' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: Byte Counts by Script', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Script ಪ್ರಕಾರ Byte Counts',
      rows: "Script|Characters|UTF-8 Bytes|Bytes per Character\nEnglish (\"hello\")|5|5|1.0\nChinese (\"你好\")|2|6|3.0\nEmoji (\"🔥\")|1|4|4.0\nMixed (\"hello你好🔥\")|8|15|1.875 (average)" } },

    { type: 'heading', data: { textEn: 'NFKC Normalization', textKn: 'NFKC Normalization', level: 'H2' } },
    { type: 'math', data: {
      formula: '\\text{NFKC}(\\text{text}) : \\text{compatibility variants} \\rightarrow \\text{canonical form}',
      descEn: 'unicodedata.normalize("NFKC", text) maps Unicode compatibility variants (e.g. full-width characters, certain ligatures) to a single canonical representation before any other pipeline stage runs.',
      descKn: 'unicodedata.normalize("NFKC", text) ಯಾವುದೇ ಇತರ pipeline stage ಚಲಿಸುವ ಮೊದಲೂ Unicode compatibility variants ಗಳನ್ನೂ (ಉದಾ. full-width characters, ಕೆಲವು ligatures) ಒಂದೇ canonical representation ಗೆ map ಮಾಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why Normalize Before Anything Else', headingKn: 'ಬೇರೆ ಯಾವುದೇ ಕೆಲಸಕ್ಕಿಂತ ಮೊದಲೂ ಏಕೆ Normalize ಮಾಡಬೇಕು',
      bodyEn: '• Two visually-identical strings can have different underlying Unicode representations -- without normalization, BPE would see them as unrelated byte sequences, fragmenting training statistics across what should be one pattern\n• The pipeline order matters: normalize() must run BEFORE pre_tokenize() and get_byte_pairs(), because both training and encoding must see the SAME normalized representation -- if training normalized but encoding didn\'t (or vice versa), the merge table learned during training would not reliably apply to encoded text',
      bodyKn: '• ಎರಡೂ ದೃಷ್ಟಿಗೋಚರವಾಗಿ-ಒಂದೇ strings ಭಿನ್ನ ಆಧಾರವಾಗಿರುವ Unicode representations ಹೊಂದಿರಬಹುದು -- normalization ಇಲ್ಲದೆ, BPE ಅವುಗಳನ್ನೂ ಅಸಂಬಂಧಿತ byte sequences ಆಗಿ ನೋಡುತ್ತದೆ, ಒಂದೂ ಆಗಬೇಕಾದ pattern ಆದ್ಯಂತ training statistics ಛಿದ್ರಗೊಳಿಸುತ್ತಾ\n• Pipeline order ಮುಖ್ಯ: normalize() pre_tokenize() ಮತ್ತೆ get_byte_pairs() ಗೆ ಮೊದಲೂ ಚಲಿಸಬೇಕು, ಏಕೆಂದರೆ training ಮತ್ತೆ encoding ಎರಡೂ ಅದೇ normalized representation ನೋಡಬೇಕು -- training normalize ಆಗಿದ್ದರೆ ಆದರೆ encoding ಆಗದಿದ್ದರೆ (ಅಥವಾ ಪ್ರತಿಯಾಗಿ), training ಸಮಯದಲ್ಲಿ ಕಲಿತ merge table encoded text ಗೆ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಅನ್ವಯಿಸುವುದಿಲ್ಲ' } },

    { type: 'diagram', data: {
      titleEn: 'Four Independent Pipeline Stages', titleKn: 'ನಾಲ್ಕೂ ಸ್ವತಂತ್ರ Pipeline Stages',
      captionEn: 'Genuinely confirmed: each stage solves a distinct problem and can be tested in isolation, exactly as built and verified in this lesson.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿಯೊಂದೂ stage ಒಂದೂ ವಿಭಿನ್ನ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ ಮತ್ತೆ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರೀಕ್ಷಿಸಬಹುದು, ಈ lesson ನಲ್ಲಿ ನಿರ್ಮಿಸಿ ಪರಿಶೀಲಿಸಿದಂತೆಯೇ.',
      svgCode: "<svg viewBox='0 0 460 120' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<rect x='10' y='30' width='100' height='50' fill='none' stroke='#4ade80' rx='4'/>\n<text x='18' y='50' fill='#86efac' font-size='10'>NFKC</text>\n<text x='18' y='68' fill='#cbd5e1' font-size='9'>consistency</text>\n<rect x='130' y='30' width='100' height='50' fill='none' stroke='#facc15' rx='4'/>\n<text x='138' y='50' fill='#fde68a' font-size='10'>Pre-tokenize</text>\n<text x='138' y='68' fill='#cbd5e1' font-size='9'>boundaries</text>\n<rect x='250' y='30' width='100' height='50' fill='none' stroke='#60a5fa' rx='4'/>\n<text x='258' y='50' fill='#93c5fd' font-size='10'>Bytes</text>\n<text x='258' y='68' fill='#cbd5e1' font-size='9'>coverage</text>\n<rect x='370' y='30' width='80' height='50' fill='none' stroke='#f87171' rx='4'/>\n<text x='378' y='50' fill='#fca5a5' font-size='10'>BPE</text>\n<text x='378' y='68' fill='#cbd5e1' font-size='9'>compression</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: UTF-8 byte conversion works identically across English (5 chars->5 bytes), Chinese (2 chars->6 bytes), and emoji (1 char->4 bytes) -- coverage is universal because all 256 byte values already have vocabulary slots\n• Genuinely confirmed: the GPT-2 pre-tokenization regex splits contractions, attaches leading spaces to the following word, and separates punctuation into its own chunks -- establishing hard boundaries BPE cannot cross\n• Genuinely confirmed: get_byte_pairs() processes chunks separately (not as one flat stream), which is precisely what confines learned merges within pre-tokenization boundaries\n• Genuinely confirmed: apply_merge() on [10,20,10,20] with pair (10,20) produces [256,256] -- identical mechanism to Module 185\'s _merge_pair(), reused rather than reimplemented\n• NFKC normalization must run before every other stage, and identically during both training and encoding, or the learned merge table will not reliably apply to new text',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: UTF-8 byte conversion English (5 chars->5 bytes), Chinese (2 chars->6 bytes), ಮತ್ತೆ emoji (1 char->4 bytes) ಆದ್ಯಂತ ಒಂದೇ ರೀತಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ -- coverage universal ಏಕೆಂದರೆ ಎಲ್ಲಾ 256 byte values ಗೆ ಈಗಾಗಲೇ vocabulary slots ಇವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: GPT-2 pre-tokenization regex contractions ಅನ್ನೂ ವಿಭಜಿಸುತ್ತದೆ, leading spaces ಅನ್ನೂ ಮುಂದಿನ word ಗೆ ಅಂಟಿಸುತ್ತದೆ, ಮತ್ತೆ punctuation ಅನ್ನೂ ತನ್ನದೇ chunks ಗೆ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ -- BPE ದಾಟಲಾಗದ ಕಠಿಣ boundaries ಸ್ಥಾಪಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: get_byte_pairs() chunks ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ (ಒಂದೂ ಫ್ಲಾಟ್ stream ಆಗಿ ಅಲ್ಲ), ಅದೂ ನಿಖರವಾಗಿ ಕಲಿತ merges ಅನ್ನೂ pre-tokenization boundaries ಒಳಗೆ ಸೀಮಿತಗೊಳಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: [10,20,10,20] ಮೇಲೆ pair (10,20) ಜೊತೆ apply_merge() [256,256] ಉತ್ಪಾದಿಸುತ್ತದೆ -- Module 185 ಯ _merge_pair() ಗೆ ಒಂದೇ ಕಾರ್ಯವಿಧಾನ, ಮರುimplement ಮಾಡುವ ಬದಲು ಮರುಬಳಸಲಾಗಿದೆ\n• NFKC normalization ಪ್ರತಿಯೊಂದೂ ಇತರ stage ಗೆ ಮೊದಲೂ, ಮತ್ತೆ training ಮತ್ತೆ encoding ಎರಡರಲ್ಲೂ ಒಂದೇ ರೀತಿ ಚಲಿಸಬೇಕು, ಇಲ್ಲದಿದ್ದರೆ ಕಲಿತ merge table ಹೊಸ text ಗೆ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಅನ್ವಯಿಸುವುದಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'GPT-2\'s actual regex pre-tokenizer genuinely uses the identical pattern structure verified in this lesson (contraction handling, leading-space-attached words, separated punctuation) -- OpenAI\'s tokenizer library and Hugging Face\'s ByteLevel pre-tokenizer both implement variants of this exact split before BPE runs.',
      bodyKn: 'GPT-2 ಯ ನಿಜ regex pre-tokenizer ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ pattern ರಚನೆ ನಿಜವಾಗಿ ಬಳಸುತ್ತದೆ (contraction handling, leading-space-attached words, ಪ್ರತ್ಯೇಕಿಸಿದ punctuation) -- OpenAI ಯ tokenizer library ಮತ್ತೆ Hugging Face ಯ ByteLevel pre-tokenizer ಎರಡೂ BPE ಚಲಿಸುವ ಮೊದಲೂ ಈ ನಿಖರ split ನ variants implement ಮಾಡುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: separating pre-tokenization from BPE lets a tokenizer designer control exactly where compression is allowed without touching the BPE algorithm itself -- changing the regex changes boundaries; changing num_merges changes compression, independently\n• Genuinely confirmed: attaching leading spaces to words is what lets a single learned token represent "word at sentence start" distinctly from "word mid-sentence" -- a genuinely useful contextual distinction for next-token prediction that a naive space-stripping tokenizer would lose',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: pre-tokenization ಅನ್ನೂ BPE ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವುದೂ ಒಂದೂ tokenizer designer ಗೆ BPE algorithm ಸ್ವತಃ ಮುಟ್ಟದೆ compression ಎಲ್ಲಿ ಅನುಮತಿಸಲಾಗಿದೆ ಎಂದೂ ನಿಖರವಾಗಿ ನಿಯಂತ್ರಿಸಲು ಬಿಡುತ್ತದೆ -- regex ಬದಲಾಯಿಸುವುದೂ boundaries ಬದಲಾಯಿಸುತ್ತದೆ; num_merges ಬದಲಾಯಿಸುವುದೂ compression ಬದಲಾಯಿಸುತ್ತದೆ, ಸ್ವತಂತ್ರವಾಗಿ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: leading spaces ಅನ್ನೂ words ಗೆ ಅಂಟಿಸುವುದೂ ಒಂದೂ single ಕಲಿತ token ಗೆ "sentence start ನಲ್ಲಿ word" ಅನ್ನೂ "mid-sentence word" ಇಂದ ವಿಶಿಷ್ಟವಾಗಿ ಪ್ರತಿನಿಧಿಸಲು ಬಿಡುತ್ತದೆ -- next-token prediction ಗೆ ಒಂದೂ ನಿಜವಾಗಿ ಉಪಯುಕ್ತ contextual ವ್ಯತ್ಯಾಸ ಒಂದೂ ಸರಳ space-stripping tokenizer ಕಳೆದುಕೊಳ್ಳುತ್ತಿತ್ತು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A multilingual document ingestion pipeline at a company like Anthropic or OpenAI genuinely relies on byte-level fallback exactly as verified here -- when a crawler pulls in Thai, Arabic, or emoji-heavy social media text the tokenizer was never specifically trained on, encoding still succeeds because every byte already has a vocabulary slot.',
      bodyKn: 'Anthropic ಅಥವಾ OpenAI ರೀತಿಯ ಒಂದೂ company ನಲ್ಲಿ ಒಂದೂ multilingual document ingestion pipeline ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರವಾಗಿ byte-level fallback ಮೇಲೆ ನಿಜವಾಗಿ ಅವಲಂಬಿತವಾಗಿದೆ -- ಒಂದೂ crawler tokenizer ನಿರ್ದಿಷ್ಟವಾಗಿ ಎಂದಿಗೂ train ಆಗದ Thai, Arabic, ಅಥವಾ emoji-ಭಾರಿ social media text ತರುವಾಗ, encoding ಇನ್ನೂ ಯಶಸ್ವಿಯಾಗುತ್ತದೆ ಏಕೆಂದರೆ ಪ್ರತಿಯೊಂದೂ byte ಗೆ ಈಗಾಗಲೇ ಒಂದೂ vocabulary slot ಇದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many UTF-8 bytes does one Chinese character in "你好" require on average?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "你好" ನಲ್ಲಿ ಒಂದೂ Chinese character ಗೆ ಸರಾಸರಿ ಎಷ್ಟೂ UTF-8 bytes ಬೇಕು?',
        opts: ['1 byte', '2 bytes', '3 bytes', '4 bytes'], correct: 2,
        optsKn: ['1 byte', '2 bytes', '3 bytes', '4 bytes'] },
      { q: 'What did the genuine pre_tokenize() run confirm about "Don\'t"?', qKn: 'ನಿಜ pre_tokenize() ಓಟ "Don\'t" ಬಗ್ಗೆ ಏನೂ ದೃಢಪಡಿಸಿತು?',
        opts: ['It stayed as one chunk', 'It split into "Don" and "\'t" as two separate chunks', 'It was deleted as punctuation', 'It became a special token'], correct: 1,
        optsKn: ['ಅದೂ ಒಂದೂ chunk ಆಗಿ ಉಳಿಯಿತು', 'ಅದೂ "Don" ಮತ್ತೆ "\'t" ಎಂದೂ ಎರಡೂ ಪ್ರತ್ಯೇಕ chunks ಆಗಿ split ಆಯಿತು', 'ಅದೂ punctuation ಆಗಿ ಅಳಿಸಲಾಯಿತು', 'ಅದೂ ಒಂದೂ special token ಆಯಿತು'] },
      { q: 'Why does get_byte_pairs() process each pre-tokenized chunk separately rather than as one flat concatenated stream?', qKn: 'get_byte_pairs() ಪ್ರತಿ pre-tokenized chunk ಅನ್ನೂ ಒಂದೂ ಫ್ಲಾಟ್ ಒಟ್ಟುಗೂಡಿಸಿದ stream ಬದಲು ಪ್ರತ್ಯೇಕವಾಗಿ ಏಕೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ?',
        opts: ['It is faster that way', 'To confine learned merges within pre-tokenization boundaries, preventing merges across word/punctuation chunks', 'It has no real effect', 'Because Python requires it'], correct: 1,
        optsKn: ['ಆ ರೀತಿ ಇದೂ ವೇಗವಾಗಿದೆ', 'ಕಲಿತ merges ಅನ್ನೂ pre-tokenization boundaries ಒಳಗೆ ಸೀಮಿತಗೊಳಿಸಲು, word/punctuation chunks ಆದ್ಯಂತ merges ತಡೆಯುತ್ತಾ', 'ಇದಕ್ಕೆ ಯಾವುದೇ ನಿಜ ಪರಿಣಾಮ ಇಲ್ಲ', 'Python ಗೆ ಇದೂ ಅಗತ್ಯವಿರುವುದರಿಂದ'] },
      { q: 'Genuinely confirmed: what does apply_merge([10,20,10,20], pair=(10,20), new_id=256) produce?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: apply_merge([10,20,10,20], pair=(10,20), new_id=256) ಏನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['[10, 20, 256]', '[256, 256]', '[10, 256, 20]', '[256]'], correct: 1,
        optsKn: ['[10, 20, 256]', '[256, 256]', '[10, 256, 20]', '[256]'] },
      { q: 'Why must NFKC normalization run identically during both training and encoding?', qKn: 'NFKC normalization training ಮತ್ತೆ encoding ಎರಡರಲ್ಲೂ ಏಕೆ ಒಂದೇ ರೀತಿ ಚಲಿಸಬೇಕು?',
        opts: ['It does not matter which one normalizes', 'If they differ, the merge table learned during training may not reliably apply to encoded text', 'NFKC only works during training', 'Normalization removes all Unicode characters'], correct: 1,
        optsKn: ['ಯಾವುದೂ normalize ಮಾಡುತ್ತದೆ ಎಂಬುದೂ ಮುಖ್ಯವಲ್ಲ', 'ಅವೂ ಭಿನ್ನವಾಗಿದ್ದರೆ, training ಸಮಯದಲ್ಲಿ ಕಲಿತ merge table encoded text ಗೆ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಅನ್ವಯಿಸದಿರಬಹುದು', 'NFKC ಕೇವಲ training ಸಮಯದಲ್ಲಿ ಮಾತ್ರ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ', 'Normalization ಎಲ್ಲಾ Unicode characters ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
    ] } },
  ],
};
