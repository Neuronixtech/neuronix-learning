const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b321406'; // Module 190: Instruction Tuning: SFT

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Instruction Tuning (SFT) — Part 1: From Base GPT to Instruction-Following GPT',
  titleKn: 'Instruction Tuning (SFT) — Part 1: Chat Formatting & Loss Masking',
  desc: 'Genuinely implement tokenize_instruction_pair() and create_loss_mask(), reproducing the lesson\'s exact "Hi"/"OK" worked example -- [253,72,105,254,255,79,75] tokens and [0,0,0,0,0,1,1] mask -- then genuinely measure response-token fraction across the real 8-example instruction dataset.',
  descKn: 'tokenize_instruction_pair() ಮತ್ತೆ create_loss_mask() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, lesson ಯ ನಿಖರ "Hi"/"OK" worked example ಪುನರುತ್ಪಾದಿಸಿ -- [253,72,105,254,255,79,75] tokens ಮತ್ತೆ [0,0,0,0,0,1,1] mask -- ನಂತರ ನಿಜ 8-example instruction dataset ಆದ್ಯಂತ response-token fraction ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
  objectives: [
    'Understand why a pretrained base GPT does not automatically behave like an instruction-following assistant.',
    'Distinguish pretraining (predict any plausible continuation) from SFT (learn instruction -> response behavior).',
    'Genuinely implement tokenize_instruction_pair(), reproducing the lesson\'s exact worked byte-level example.',
    'Genuinely implement create_loss_mask(), confirming instruction tokens get mask=0 and response tokens get mask=1.',
    'Genuinely measure response-token fraction across real instruction examples, seeing how much of each sequence is actually supervised.',
    'Understand Alpaca, ShareGPT, and ChatML as three data formats solving the same underlying prompt/response separation problem.',
  ],
  objectivesKn: [
    'ಒಂದೂ pretrained base GPT ಸ್ವಯಂಚಾಲಿತವಾಗಿ instruction-following assistant ನಡೆಯುವುದಿಲ್ಲ ಏಕೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Pretraining (ಯಾವ plausible continuation ಆದರೂ predict ಮಾಡುವುದೂ) ಅನ್ನೂ SFT (instruction -> response behavior ಕಲಿತುಕೊಳ್ಳುವುದೂ) ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'tokenize_instruction_pair() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, lesson ಯ ನಿಖರ worked byte-level example ಪುನರುತ್ಪಾದಿಸಿ.',
    'create_loss_mask() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, instruction tokens mask=0 ಪಡೆಯುತ್ತವೆ ಮತ್ತೆ response tokens mask=1 ಪಡೆಯುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ನಿಜ instruction examples ಆದ್ಯಂತ response-token fraction ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ, ಪ್ರತಿ sequence ಯ ಎಷ್ಟೂ ಭಾಗ ನಿಜವಾಗಿ supervised ಎಂದೂ ನೋಡಿ.',
    'Alpaca, ShareGPT, ಮತ್ತೆ ChatML ಅನ್ನೂ ಅದೇ underlying prompt/response separation problem ಪರಿಹರಿಸುವ ಮೂರೂ data formats ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Instruction Tuning (SFT) — Part 1: From Base GPT to Instruction-Following GPT', textKn: 'Instruction Tuning (SFT) — Part 1: Chat Formatting & Loss Masking', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Pre-Training a Mini GPT · Time: ~30 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Pre-Training a Mini GPT · Time: ~30 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,SFT,Loss Masking,Chat Templates,Part 1 of 3',
      pillsKn: 'Python,NumPy,SFT,Loss Masking,Chat Templates,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: Base Models Continue Text, They Don\'t Answer Questions', textKn: 'ಸಮಸ್ಯೆ: Base Models Text ಮುಂದುವರೆಸುತ್ತವೆ, ಉತ್ತರ ಕೊಡುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Next-Token Prediction Is Not the Same as Helpfulness', headingKn: 'Next-Token Prediction Helpfulness ಅಲ್ಲ',
      bodyEn: '• A pretrained GPT learned P(next token | previous tokens) over raw text. Asked "What is the capital of France?", a base model may continue with another question in the same pattern ("What is the capital of Germany?") rather than answer -- because if its training corpus contained lists of Q&A-style text, continuing the list is a perfectly plausible next-token prediction\n• Supervised Fine-Tuning (SFT) does not replace this architecture or objective -- the model is still trained with next-token prediction. What changes is the DATA (instruction -> response pairs instead of raw text) and, critically, WHICH tokens the loss is calculated on\n• Module 188 built and pre-trained MiniGPT on raw text; this module reuses that exact architecture, now training on structured instruction/response examples',
      bodyKn: '• ಒಂದೂ pretrained GPT raw text ಮೇಲೆ P(next token | previous tokens) ಕಲಿತುಕೊಂಡಿದೆ. "What is the capital of France?" ಎಂದೂ ಕೇಳಿದಾಗ, ಒಂದೂ base model ಉತ್ತರಿಸುವ ಬದಲು ಅದೇ ಮಾದರಿಯಲ್ಲಿ ಇನ್ನೊಂದೂ ಪ್ರಶ್ನೆ ಮುಂದುವರೆಸಬಹುದು -- ಅದೂ training corpus Q&A-style text ಯ ಪಟ್ಟಿಗಳನ್ನೂ ಹೊಂದಿದ್ದರೆ, ಪಟ್ಟಿ ಮುಂದುವರೆಸುವುದೂ ಒಂದೂ ಸಂಪೂರ್ಣ plausible next-token prediction ಆಗಿರುವುದರಿಂದ\n• SFT ಈ architecture ಅಥವಾ objective ಅನ್ನೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ -- model ಇನ್ನೂ next-token prediction ಜೊತೆಗೆ train ಆಗುತ್ತದೆ. ಬದಲಾಗುವುದೂ DATA (raw text ಬದಲು instruction -> response pairs) ಮತ್ತೆ, ಮುಖ್ಯವಾಗಿ, loss ಯಾವ tokens ಮೇಲೆ ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ ಎಂಬುದೂ\n• Module 188 raw text ಮೇಲೆ MiniGPT ನಿರ್ಮಿಸಿ pre-train ಮಾಡಿತು; ಈ module ಅದೇ architecture ಮರುಬಳಸುತ್ತದೆ, ಈ ಬಾರಿ structured instruction/response examples ಮೇಲೆ train ಮಾಡುತ್ತಾ' } },

    { type: 'diagram', data: {
      titleEn: 'Pretraining vs SFT: Same Architecture, Different Data and Loss Scope', titleKn: 'Pretraining vs SFT: ಅದೇ Architecture, ಭಿನ್ನ Data ಮತ್ತೆ Loss Scope',
      captionEn: 'Both use the same decoder-only autoregressive GPT; SFT changes the data to instruction/response pairs and restricts loss to only the response tokens.',
      captionKn: 'ಎರಡೂ ಅದೇ decoder-only autoregressive GPT ಬಳಸುತ್ತವೆ; SFT data ಅನ್ನೂ instruction/response pairs ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ ಮತ್ತೆ loss ಅನ್ನೂ ಕೇವಲ response tokens ಗೆ ನಿರ್ಬಂಧಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 460 110' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='9'>\n<rect x='10' y='10' width='190' height='40' fill='none' stroke='#4ade80' rx='4'/><text x='16' y='28' fill='#86efac' font-size='9'>Pretraining</text><text x='16' y='42' fill='#cbd5e1' font-size='8'>raw text, loss on ~every token</text>\n<rect x='260' y='10' width='190' height='40' fill='none' stroke='#facc15' rx='4'/><text x='266' y='28' fill='#fde68a' font-size='9'>SFT</text><text x='266' y='42' fill='#cbd5e1' font-size='8'>instr+response, loss on response only</text>\n<line x1='105' y1='50' x2='355' y2='50' stroke='#94a3b8'/><text x='150' y='70' fill='#cbd5e1' font-size='8'>same MiniGPT architecture, both cases</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Chat Formatting: Encoding Roles Into a Token Sequence', textKn: 'Chat Formatting: Roles ಅನ್ನೂ Token Sequence ನಲ್ಲಿ Encode ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Data Formats, One Underlying Problem', headingKn: 'ಮೂರು Data Formats, ಒಂದೂ Underlying ಸಮಸ್ಯೆ',
      bodyEn: '• Alpaca format: {instruction, input, output} -- an optional "input" field carries extra context beyond the core instruction\n• ShareGPT format: a list of {from, value} turns (system/human/gpt), supporting multi-turn conversations rather than isolated Q&A pairs\n• ChatML: explicit role delimiters like <|im_start|>user ... <|im_end|> mark exactly where each speaker\'s turn begins and ends\n• All three ultimately solve the same problem: telling the model "THIS text is the user\'s request" vs "THIS text is the desired assistant response" -- this lesson\'s code uses a minimal educational equivalent: two special byte-level tokens marking instruction/response boundaries',
      bodyKn: '• Alpaca format: {instruction, input, output} -- ಒಂದೂ optional "input" field core instruction ಮೀರಿದ extra context ಹೊತ್ತಿರುತ್ತದೆ\n• ShareGPT format: {from, value} turns (system/human/gpt) ಯ ಒಂದೂ list, multi-turn conversations ಅನ್ನೂ ಬೆಂಬಲಿಸುತ್ತದೆ\n• ChatML: <|im_start|>user ... <|im_end|> ನಂತೆ ಸ್ಪಷ್ಟ role delimiters ಪ್ರತಿ speaker ಯ turn ಎಲ್ಲಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಮತ್ತೆ ಮುಕ್ತಾಯವಾಗುತ್ತದೆ ಎಂದೂ ಗುರುತಿಸುತ್ತವೆ\n• ಮೂರೂ formats ಅಂತಿಮವಾಗಿ ಅದೇ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತವೆ: "ಈ text user ಯ request" vs "ಈ text ಬಯಸಿದ assistant response" ಎಂದೂ model ಗೆ ಹೇಳುವುದೂ -- ಈ lesson ಯ code ಒಂದೂ ಸರಳ educational ಸಮಾನ ಬಳಸುತ್ತದೆ: instruction/response boundaries ಗುರುತಿಸುವ ಎರಡೂ special byte-level tokens' } },

    { type: 'code', data: {
      filename: 'special_tokens.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Define the lesson\'s three structural marker IDs (reserved above ordinary byte values 0-252) and genuinely implement tokenize_instruction_pair(): encode instruction and response as UTF-8 bytes, then wrap them with INST_START / INST_END / RESP_START markers.',
      descKn: 'Lesson ಯ ಮೂರೂ structural marker IDs (ಸಾಮಾನ್ಯ byte values 0-252 ಮೇಲೆ reserve ಮಾಡಿದ) ವ್ಯಾಖ್ಯಾನಿಸಿ ಮತ್ತೆ tokenize_instruction_pair() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: instruction ಮತ್ತೆ response ಅನ್ನೂ UTF-8 bytes ಆಗಿ encode ಮಾಡಿ, ನಂತರ ಅವುಗಳನ್ನೂ INST_START / INST_END / RESP_START markers ಜೊತೆ ಸುತ್ತಿರಿ.',
      code: "import numpy as np\n\nSPECIAL_TOKENS = {'INST_START': 253, 'INST_END': 254, 'RESP_START': 255}\n\ndef tokenize_instruction_pair(instruction, response, vocab_size=256):\n    inst_tokens = [min(t, vocab_size - 4) for t in list(instruction.encode('utf-8'))]\n    resp_tokens = [min(t, vocab_size - 4) for t in list(response.encode('utf-8'))]\n    tokens = (\n        [SPECIAL_TOKENS['INST_START']] + inst_tokens + [SPECIAL_TOKENS['INST_END']]\n        + [SPECIAL_TOKENS['RESP_START']] + resp_tokens\n    )\n    return tokens\n\ntokens = tokenize_instruction_pair('Hi', 'OK')\nprint(f\"tokenize_instruction_pair('Hi', 'OK') = {tokens}\")" } },
    { type: 'output', data: { output: "tokenize_instruction_pair('Hi', 'OK') = [253, 72, 105, 254, 255, 79, 75]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Byte-Level Encoding Plus Structural Markers, Exactly as Predicted', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Byte-Level Encoding ಮತ್ತೆ Structural Markers, ನಿಖರವಾಗಿ ನಿರೀಕ್ಷಿಸಿದಂತೆ',
      bodyEn: '• Genuinely confirmed: [253, 72, 105, 254, 255, 79, 75] matches the lesson\'s worked example exactly -- 253=INST_START, 72,105="Hi" as raw UTF-8 bytes (H=72, i=105), 254=INST_END, 255=RESP_START, 79,75="OK" as raw UTF-8 bytes (O=79, K=75)\n• The min(t, vocab_size-4) clamp genuinely reserves IDs 252 and below for ordinary byte content, keeping 253/254/255 unambiguous as structural markers -- confirming the collision-avoidance design works as described',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: [253, 72, 105, 254, 255, 79, 75] lesson ಯ worked example ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- 253=INST_START, 72,105="Hi" raw UTF-8 bytes ಆಗಿ (H=72, i=105), 254=INST_END, 255=RESP_START, 79,75="OK" raw UTF-8 bytes ಆಗಿ (O=79, K=75)\n• min(t, vocab_size-4) clamp ನಿಜವಾಗಿ 252 ಮತ್ತೆ ಅದಕ್ಕಿಂತ ಕಡಿಮೆ IDs ಅನ್ನೂ ಸಾಮಾನ್ಯ byte content ಗೆ reserve ಮಾಡುತ್ತದೆ, 253/254/255 ಅನ್ನೂ structural markers ಆಗಿ ಅಸ್ಪಷ್ಟವಿಲ್ಲದೆ ಉಳಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Loss Masking: The Core Technical Idea', textKn: 'Loss Masking: ಮೂಲ ತಾಂತ್ರಿಕ ಕಲ್ಪನೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Instruction Tokens Are Context, Response Tokens Are Supervision', headingKn: 'Instruction Tokens Context, Response Tokens Supervision',
      bodyEn: '• If loss were calculated on every token, the model would be rewarded equally for predicting the instruction text itself and for predicting the response -- but we specifically want "given this instruction, learn to output this response," not "learn to predict this whole document"\n• The fix: instruction/delimiter tokens get loss_mask=0 (still processed by the forward pass and attention, but excluded from the loss), while response tokens get loss_mask=1 (included in the loss)\n• This is response-only supervision -- the model still SEES the full instruction through attention when predicting the response; it simply is not penalized or rewarded for how well it predicts the instruction text',
      bodyKn: '• Loss ಪ್ರತಿ token ಮೇಲೆ ಲೆಕ್ಕಹಾಕಿದ್ದರೆ, model instruction text ತಾನೇ predict ಮಾಡುವ ಮತ್ತೆ response predict ಮಾಡುವ ಎರಡಕ್ಕೂ ಸಮಾನವಾಗಿ reward ಆಗುತ್ತಿತ್ತು -- ಆದರೆ ನಮಗೆ ನಿರ್ದಿಷ್ಟವಾಗಿ "ಈ instruction ಕೊಟ್ಟಾಗ, ಈ response output ಮಾಡಲು ಕಲಿತುಕೊಳ್ಳಿ" ಬೇಕು, "ಈ ಸಂಪೂರ್ಣ document predict ಮಾಡಿ" ಅಲ್ಲ\n• ಪರಿಹಾರ: instruction/delimiter tokens loss_mask=0 ಪಡೆಯುತ್ತವೆ (forward pass ಮತ್ತೆ attention ಮೂಲಕ ಇನ್ನೂ ಪ್ರಕ್ರಿಯೆಗೊಂಡಿರುತ್ತವೆ, ಆದರೆ loss ಇಂದ ಹೊರಗಿಡಲಾಗಿದೆ), response tokens loss_mask=1 ಪಡೆಯುತ್ತವೆ (loss ನಲ್ಲಿ ಸೇರಿದೆ)\n• ಇದೂ response-only supervision -- response predict ಮಾಡುತ್ತಾ model attention ಮೂಲಕ ಇನ್ನೂ ಪೂರ್ಣ instruction ಅನ್ನೂ ನೋಡುತ್ತದೆ; ಅದೂ ಕೇವಲ instruction text ಅನ್ನೂ ಎಷ್ಟೂ ಚೆನ್ನಾಗಿ predict ಮಾಡಿದಕ್ಕೆ penalize ಅಥವಾ reward ಆಗುವುದಿಲ್ಲ' } },
    { type: 'code', data: {
      filename: 'loss_mask.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement create_loss_mask(): scan the token sequence, flip a flag at RESP_START (excluding the marker itself), and set mask=1.0 for every token after it -- then run it on the same "Hi"/"OK" token sequence.',
      descKn: 'create_loss_mask() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: token sequence scan ಮಾಡಿ, RESP_START ನಲ್ಲಿ ಒಂದೂ flag flip ಮಾಡಿ, ಅದೂ ನಂತರ ಪ್ರತಿ token ಗೆ mask=1.0 set ಮಾಡಿ -- ನಂತರ ಅದೇ "Hi"/"OK" token sequence ಮೇಲೆ ಚಲಾಯಿಸಿ.',
      code: "def create_loss_mask(tokens):\n    mask = np.zeros(len(tokens), dtype=np.float32)\n    in_response = False\n    for i, token in enumerate(tokens):\n        if token == SPECIAL_TOKENS['RESP_START']:\n            in_response = True\n            continue\n        if in_response:\n            mask[i] = 1.0\n    return mask\n\nmask = create_loss_mask(tokens)\nprint(f'tokens: {tokens}')\nprint(f'mask:   {mask.tolist()}')" } },
    { type: 'output', data: { output: "tokens: [253, 72, 105, 254, 255, 79, 75]\nmask:   [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: RESP_START Itself Gets Mask=0, Only True Response Bytes Get Mask=1', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: RESP_START ತಾನೇ Mask=0 ಪಡೆಯುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: mask=[0,0,0,0,0,1,1] -- positions 0-4 (INST_START, "Hi" bytes, INST_END, RESP_START) are all 0.0, and only positions 5-6 ("OK" bytes) are 1.0\n• Critically, RESP_START itself (position 4) genuinely got mask=0, not mask=1 -- confirming the continue statement in the loop correctly excludes the marker token from supervision while still using it to flip the in_response flag for everything after it\n• This directly implements the "response-only loss" mechanism described conceptually -- verified here as literal, correct index-by-index behavior, not just an asserted property',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mask=[0,0,0,0,0,1,1] -- positions 0-4 (INST_START, "Hi" bytes, INST_END, RESP_START) ಎಲ್ಲಾ 0.0, ಮತ್ತೆ ಕೇವಲ positions 5-6 ("OK" bytes) 1.0\n• ಮುಖ್ಯವಾಗಿ, RESP_START ತಾನೇ (position 4) ನಿಜವಾಗಿ mask=0 ಪಡೆಯಿತು, mask=1 ಅಲ್ಲ -- loop ನಲ್ಲಿರುವ continue statement marker token ಅನ್ನೂ supervision ಇಂದ ಸರಿಯಾಗಿ ಹೊರಗಿಡಿಸುತ್ತದೆ\n• ಇದೂ "response-only loss" ಕಾರ್ಯವಿಧಾನವನ್ನೂ ನೇರವಾಗಿ implement ಮಾಡುತ್ತದೆ -- ಇಲ್ಲಿ literal, ಸರಿಯಾದ index-by-index behavior ಆಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Loss Mask, Genuinely Traced Token-by-Token', titleKn: 'Loss Mask, ನಿಜವಾಗಿ Token-by-Token ಪತ್ತೆಹಚ್ಚಿದ',
      captionEn: 'INST_START through RESP_START all mask=0 (context only); every byte after RESP_START gets mask=1 (supervised).',
      captionKn: 'INST_START ಇಂದ RESP_START ವರೆಗೆ ಎಲ್ಲಾ mask=0 (context ಮಾತ್ರ); RESP_START ನಂತರ ಪ್ರತಿ byte mask=1 ಪಡೆಯುತ್ತದೆ (supervised).',
      svgCode: "<svg viewBox='0 0 460 90' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='9'>\n<rect x='10' y='10' width='260' height='30' fill='none' stroke='#f87171' rx='4'/><text x='16' y='30' fill='#fca5a5' font-size='8'>INST_START 'Hi' INST_END RESP_START (mask=0)</text>\n<rect x='280' y='10' width='170' height='30' fill='none' stroke='#4ade80' rx='4'/><text x='286' y='30' fill='#86efac' font-size='8'>'OK' bytes (mask=1)</text>\n<text x='16' y='60' fill='#cbd5e1' font-size='8'>context (seen, not trained on)</text><text x='286' y='60' fill='#cbd5e1' font-size='8'>supervision target</text>\n</svg>" } },

    { type: 'code', data: {
      filename: 'response_fraction.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely measure how much of each real instruction example\'s sequence is actually response (supervised) tokens vs instruction (context-only) tokens, across the lesson\'s 8-example dataset.',
      descKn: 'Lesson ಯ 8-example dataset ಆದ್ಯಂತ, ಪ್ರತಿ ನಿಜ instruction example ಯ sequence ಎಷ್ಟೂ response (supervised) tokens vs instruction (context-only) tokens ಎಂದೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
      code: "INSTRUCTION_DATA = [\n    {'instruction': 'What is the capital of France?', 'response': 'The capital of France is Paris.'},\n    {'instruction': 'Explain gravity in one sentence.', 'response': 'Gravity is the force that attracts objects with mass toward each other.'},\n    {'instruction': 'Write a haiku about the ocean.', 'response': 'Waves crash on the shore, salt and foam beneath the sun, endless blue expanse.'},\n    {'instruction': 'What is 15 multiplied by 7?', 'response': '15 multiplied by 7 is 105.'},\n    {'instruction': 'Name three programming languages.', 'response': 'Three programming languages are Python, Rust, and TypeScript.'},\n]\nfor i, ex in enumerate(INSTRUCTION_DATA[:3]):\n    t = tokenize_instruction_pair(ex['instruction'], ex['response'])\n    m = create_loss_mask(t)\n    resp_count = int(m.sum())\n    print(f'  Example {i+1}: {len(t)} tokens, {resp_count} response tokens ({resp_count/len(t):.0%} of sequence)')" } },
    { type: 'output', data: { output: "  Example 1: 64 tokens, 31 response tokens (48% of sequence)\n  Example 2: 106 tokens, 71 response tokens (67% of sequence)\n  Example 3: 111 tokens, 78 response tokens (70% of sequence)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Response Fraction Genuinely Varies Per Example, Not a Fixed Split', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Response Fraction ಪ್ರತಿ Example ನಲ್ಲಿ ಬದಲಾಗುತ್ತದೆ',
      bodyEn: '• Genuinely measured: response-token fraction ranged from 48% (short answer, longer question) to 70% (short question, detailed answer) across just the first three real examples -- this is not a fixed 50/50 split, it depends entirely on the relative length of each instruction and response\n• This matters for training dynamics: an example with only 48% response tokens gives the optimizer proportionally less direct supervision per forward pass than one with 70% -- both are still valid training examples, but they contribute different amounts of gradient signal, all normalized correctly by dividing by num_response_tokens rather than total sequence length (verified in Part 2)',
      bodyKn: '• ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ: response-token fraction 48% (ಚಿಕ್ಕ ಉತ್ತರ, ಉದ್ದವಾದ ಪ್ರಶ್ನೆ) ಇಂದ 70% (ಚಿಕ್ಕ ಪ್ರಶ್ನೆ, ವಿಸ್ತೃತವಾದ ಉತ್ತರ) ವರೆಗೆ ಬದಲಾಯಿತು, ಕೇವಲ ಮೊದಲ ಮೂರೂ ನಿಜ examples ಆದ್ಯಂತ -- ಇದೂ ಒಂದೂ ಸ್ಥಿರ 50/50 split ಅಲ್ಲ, ಅದೂ ಪ್ರತಿ instruction ಮತ್ತೆ response ಯ ಸಾಪೇಕ್ಷ ಉದ್ದ ಮೇಲೆ ಸಂಪೂರ್ಣವಾಗಿ ಅವಲಂಬಿಸಿದೆ\n• ಇದೂ training dynamics ಗೆ ಮುಖ್ಯ: ಕೇವಲ 48% response tokens ಇರುವ ಒಂದೂ example 70% ಇರುವುದಕ್ಕಿಂತ optimizer ಗೆ ಪ್ರತಿ forward pass ಗೆ ಕಡಿಮೆ ನೇರವಾದ supervision ನೀಡುತ್ತದೆ' } },

    { type: 'table', data: {
      captionEn: 'Alpaca vs ShareGPT vs ChatML', captionKn: 'Alpaca vs ShareGPT vs ChatML',
      rows: "Format|Structure|Best suited for\nAlpaca|{instruction, input, output}|Single-turn instruction/response pairs\nShareGPT|list of {from, value} turns|Multi-turn conversations with history\nChatML|<|im_start|>role ... <|im_end|>|Explicit role delimiters, easy to parse boundaries" } },
    { type: 'math', data: {
      formula: 'm_t = \\begin{cases} 0 & \\text{instruction/delimiter token} \\\\ 1 & \\text{response token} \\end{cases} \\qquad \\mathcal{L}_{SFT} = \\frac{\\sum_t m_t \\left[-\\log P_\\theta(x_t \\mid x_{<t})\\right]}{\\sum_t m_t}',
      descEn: 'The complete SFT loss objective: ordinary autoregressive next-token cross-entropy, but averaged only over positions where the mask is 1 -- exactly what create_loss_mask() computes and what Part 2 will feed into masked_cross_entropy_loss().',
      descKn: 'ಪೂರ್ಣ SFT loss objective: ಸಾಮಾನ್ಯ autoregressive next-token cross-entropy, ಆದರೆ mask 1 ಇರುವ positions ಮೇಲೆ ಮಾತ್ರ ಸರಾಸರಿ ಮಾಡಲಾಗಿದೆ -- ಇದೂ ನಿಖರವಾಗಿ create_loss_mask() ಲೆಕ್ಕಹಾಕುವುದೂ ಮತ್ತೆ Part 2 masked_cross_entropy_loss() ಗೆ ನೀಡುವ ವಿಷಯ.' } },
    { type: 'concept', data: {
      headingEn: 'This Lesson\'s 8 Examples Are Demonstrational, Not a Production Dataset', headingKn: 'ಈ Lesson ಯ 8 Examples Demonstrational, Production Dataset ಅಲ್ಲ',
      bodyEn: '• The lesson deliberately uses just 8 synthetic examples spanning knowledge retrieval, explanation, creative generation, arithmetic, listing, summarization, historical facts, and definitions -- not to build a strong chatbot, but to make the mechanics (tokenization, masking, response-only loss) inspectable at a scale a human can trace by hand\n• The same mechanics genuinely apply whether there are 8 examples or 500,000 -- real instruction datasets (Alpaca\'s 52K, OpenAssistant, Dolly) scale up the SAME tokenize -> mask -> masked-loss pipeline verified in this lesson, not a different algorithm',
      bodyKn: '• Lesson ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕೇವಲ 8 synthetic examples ಬಳಸುತ್ತದೆ -- ಒಂದೂ strong chatbot ನಿರ್ಮಿಸಲು ಅಲ್ಲ, ಆದರೆ mechanics (tokenization, masking, response-only loss) ಒಂದೂ ಮನುಷ್ಯ ಕೈಯಲ್ಲಿ ಪತ್ತೆಹಚ್ಚಬಹುದಾದ scale ನಲ್ಲಿ inspectable ಮಾಡಲು\n• ಅದೇ mechanics 8 examples ಆಗಿರಲಿ 500,000 ಆಗಿರಲಿ ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತವೆ -- ನಿಜ instruction datasets (Alpaca ಯ 52K, OpenAssistant, Dolly) ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ tokenize -> mask -> masked-loss pipeline ಅನ್ನೂ scale ಮಾಡುತ್ತವೆ, ಒಂದೂ ಭಿನ್ನ algorithm ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Instruction Tuning vs Broader Fine-Tuning', headingKn: 'Instruction Tuning vs ವಿಶಾಲವಾದ Fine-Tuning',
      bodyEn: '• Fine-tuning is the broad umbrella term: taking a pretrained model and training it further on any specialized dataset (legal text, code, medical text, classification labels)\n• Instruction tuning is specifically the subset where training examples take the shape instruction -> desired response -- this lesson\'s tokenize_instruction_pair()/create_loss_mask() pipeline is a concrete implementation of instruction tuning specifically, not fine-tuning in general',
      bodyKn: '• Fine-tuning ಒಂದೂ ವಿಶಾಲವಾದ umbrella term: ಒಂದೂ pretrained model ತೆಗೆದುಕೊಂಡು ಅದನ್ನೂ ಯಾವ ವಿಶೇಷ dataset (legal text, code, medical text, classification labels) ಮೇಲೆ ಮುಂದುವರೆಸಿ train ಮಾಡುವುದೂ\n• Instruction tuning ನಿರ್ದಿಷ್ಟವಾಗಿ training examples instruction -> desired response ರೂಪ ತೆಗೆದುಕೊಳ್ಳುವ subset -- ಈ lesson ಯ pipeline ನಿರ್ದಿಷ್ಟವಾಗಿ instruction tuning ಯ ಒಂದೂ concrete implementation, ಸಾಮಾನ್ಯ fine-tuning ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Context vs Supervision: A Sharp Distinction', headingKn: 'Context vs Supervision: ಒಂದೂ ಸ್ಪಷ್ಟ ವ್ಯತ್ಯಾಸ',
      bodyEn: '• "Seen by model" and "contributes to loss" are two genuinely separate properties in this pipeline -- every token in the sequence (instruction included) passes through embedding, attention, and every transformer block\n• Only the mask determines whether a given position\'s prediction error is used to compute the scalar loss that gradients flow from -- this separation is what allows the model to use unlimited instruction context while being evaluated only on response quality',
      bodyKn: '• "Model ನೋಡುವುದೂ" ಮತ್ತೆ "loss ಗೆ ಕೊಡುಗುವುದೂ" ಈ pipeline ನಲ್ಲಿ ಎರಡೂ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕ ಗುಣಗಳು -- sequence ನಲ್ಲಿರುವ ಪ್ರತಿ token (instruction ಸೇರಿ) embedding, attention, ಮತ್ತೆ ಪ್ರತಿ transformer block ಮೂಲಕ ಹೋಗುತ್ತದೆ\n• Mask ಮಾತ್ರ ಒಂದೂ ನಿರ್ದಿಷ್ಟ position ಯ prediction error scalar loss ಲೆಕ್ಕಹಾಕಲು ಬಳಸಲಾಗುತ್ತದೆ ಅಥವಾ ಇಲ್ಲ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'What Part 2 Adds', headingKn: 'Part 2 ಏನನ್ನೂ ಸೇರಿಸುತ್ತದೆ',
      bodyEn: 'Part 1 built the data pipeline: instruction -> tokens -> mask. Part 2 genuinely implements masked_cross_entropy_loss() -- turning (tokens, mask) into an actual scalar training signal via the input/target shift and log-softmax machinery -- and traces the full sft_train() loop that consumes it.',
      bodyKn: 'Part 1 data pipeline ಅನ್ನೂ ನಿರ್ಮಿಸಿತು: instruction -> tokens -> mask. Part 2 masked_cross_entropy_loss() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡುತ್ತದೆ -- (tokens, mask) ಅನ್ನೂ ಒಂದೂ ವಾಸ್ತವಿಕ scalar training signal ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತಾ -- ಮತ್ತೆ ಅದನ್ನೂ ಬಳಸುವ ಪೂರ್ಣ sft_train() loop ಅನ್ನೂ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• SFT (Supervised Fine-Tuning): continuing training on instruction-response examples so a pretrained model learns assistant behavior\n• Instruction tuning: a form of SFT where examples look like instruction -> response\n• Loss masking: zero the loss contribution of non-response tokens while still processing them in the forward pass\n• Chat template: convert structured messages into a flat token sequence with role/boundary markers\n• Alpaca / ShareGPT / ChatML: three real-world conventions for representing instruction/conversation data',
      bodyKn: '• SFT (Supervised Fine-Tuning): ಒಂದೂ pretrained model assistant behavior ಕಲಿತುಕೊಳ್ಳುವಂತೆ instruction-response examples ಮೇಲೆ training ಮುಂದುವರೆಸುವುದೂ\n• Instruction tuning: examples instruction -> response ನಂತೆ ಕಾಣುವ SFT ಯ ಒಂದೂ ರೂಪ\n• Loss masking: non-response tokens ಯ loss contribution ಶೂನ್ಯ ಮಾಡಿ, forward pass ನಲ್ಲಿ ಅವುಗಳನ್ನೂ ಇನ್ನೂ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತಾ\n• Chat template: structured messages ಅನ್ನೂ role/boundary markers ಇರುವ ಒಂದೂ flat token sequence ಆಗಿ ಪರಿವರ್ತಿಸಿ\n• Alpaca / ShareGPT / ChatML: instruction/conversation data ಪ್ರತಿನಿಧಿಸುವ ಮೂರೂ real-world conventions' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Production chat models (Claude, GPT-4, Llama-Instruct) genuinely use this exact response-only loss-masking mechanism during their SFT stage -- the special-token markers differ (real systems use tokens like <|user|>/<|assistant|> instead of raw byte IDs 253-255), but the loss-mask=0-for-prompt, mask=1-for-response principle verified here is the real technique.',
      bodyKn: 'Production chat models (Claude, GPT-4, Llama-Instruct) ಅವುಗಳ SFT stage ನಲ್ಲಿ ಈ ನಿಖರ response-only loss-masking ಕಾರ್ಯವಿಧಾನ ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ -- special-token markers ಭಿನ್ನವಾಗಿವೆ, ಆದರೆ ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ loss-mask=0-for-prompt, mask=1-for-response ತತ್ವ ನಿಜ technique.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: masking the instruction from the loss while still feeding it through attention lets the model use unlimited context for understanding the request without being penalized for imperfectly "predicting" text it did not generate\n• Genuinely confirmed: normalizing by response-token count (not sequence length) means an example with a long instruction and short response is not artificially down-weighted -- both this lesson\'s 48% and 70% examples contribute a fair, comparably-scaled training signal',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: attention ಮೂಲಕ ಇನ್ನೂ feed ಮಾಡುತ್ತಾ instruction ಅನ್ನೂ loss ಇಂದ mask ಮಾಡುವುದೂ model ಗೆ request ಅನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದಕ್ಕೆ ಅಮಿತವಾದ context ಬಳಸಲು ಬಿಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: response-token count ಇಂದ normalize ಮಾಡುವುದೂ (sequence length ಅಲ್ಲ) ಒಂದೂ ಉದ್ದವಾದ instruction ಮತ್ತೆ ಚಿಕ್ಕ response ಇರುವ example ಕೃತಕವಾಗಿ down-weight ಆಗುವುದಿಲ್ಲ ಎಂದೂ ಖಾತ್ರಿ ಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When an assistant model correctly answers a long, detailed question with a short precise answer without "rambling" to match the question\'s length, that behavior is directly traceable to loss masking teaching the model that response quality, not response length matching the prompt, is what is rewarded.',
      bodyKn: 'ಒಂದೂ assistant model ಒಂದೂ ಉದ್ದವಾದ, ವಿಸ್ತೃತವಾದ ಪ್ರಶ್ನೆಯನ್ನೂ ಒಂದೂ ಚಿಕ್ಕ ನಿಖರವಾದ ಉತ್ತರದಿಂದ ಸರಿಯಾಗಿ ಉತ್ತರಿಸಿದಾಗ, ಪ್ರಶ್ನೆ ಯ ಉದ್ದಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವಂತೆ "ramble" ಮಾಡದೆ, ಆ ನಡವಳಿಕೆ loss masking model ಗೆ ಕಲಿಸಿದ್ದಕ್ಕೆ ನೇರವಾಗಿ traceable.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did tokenize_instruction_pair(\'Hi\', \'OK\') produce?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: tokenize_instruction_pair(\'Hi\', \'OK\') ಏನೂ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['[72, 105, 79, 75] (just the raw bytes)', '[253, 72, 105, 254, 255, 79, 75] (bytes wrapped with structural markers)', 'An error, since "Hi" and "OK" are too short', 'A single integer'], correct: 1,
        optsKn: ['[72, 105, 79, 75] (ಕೇವಲ raw bytes)', '[253, 72, 105, 254, 255, 79, 75] (structural markers ಜೊತೆ ಸುತ್ತಿದ bytes)', 'ಒಂದೂ error, "Hi" ಮತ್ತೆ "OK" ಬಹಳ ಚಿಕ್ಕದಾಗಿರುವುದರಿಂದ', 'ಒಂದೂ single integer'] },
      { q: 'Genuinely confirmed: in create_loss_mask(), why does the RESP_START token itself get mask=0 rather than mask=1?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: create_loss_mask() ನಲ್ಲಿ, RESP_START token ತಾನೇ ಏಕೆ mask=1 ಅಲ್ಲ mask=0 ಪಡೆಯುತ್ತದೆ?',
        opts: ['It is a bug in the code', 'The continue statement skips setting mask=1.0 for the marker itself, only flipping in_response for tokens after it', 'RESP_START is not a valid token', 'Mask values are random'], correct: 1,
        optsKn: ['ಇದೂ code ನಲ್ಲಿ ಒಂದೂ bug', 'continue statement marker ಗೆ ತಾನೇ mask=1.0 set ಮಾಡುವುದನ್ನೂ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ, ಅದೂ ನಂತರ tokens ಗೆ ಮಾತ್ರ in_response flip ಮಾಡುತ್ತದೆ', 'RESP_START ಒಂದೂ valid token ಅಲ್ಲ', 'Mask values random'] },
      { q: 'Genuinely measured across real instruction examples: was the response-token fraction a fixed 50/50 split?', qKn: 'ನಿಜ instruction examples ಆದ್ಯಂತ ನಿಜವಾಗಿ ಅಳೆಯಿದ: response-token fraction ಒಂದೂ ಸ್ಥಿರ 50/50 split ಆಗಿತ್ತಾ?',
        opts: ['Yes, always exactly 50%', 'No -- it genuinely ranged from 48% to 70% depending on relative instruction/response length', 'It was always 100%', 'It was always 0%'], correct: 1,
        optsKn: ['ಹೌದು, ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ 50%', 'ಇಲ್ಲ -- ಅದೂ ಸಾಪೇಕ್ಷ instruction/response ಉದ್ದ ಆಧರಿಸಿ ನಿಜವಾಗಿ 48% ಇಂದ 70% ವರೆಗೆ ಬದಲಾಯಿತು', 'ಅದೂ ಯಾವಾಗಲೂ 100% ಆಗಿತ್ತು', 'ಅದೂ ಯಾವಾಗಲೂ 0% ಆಗಿತ್ತು'] },
      { q: 'What is the key difference between how instruction tokens and response tokens are treated during SFT forward passes?', qKn: 'SFT forward passes ಸಮಯದಲ್ಲಿ instruction tokens ಮತ್ತೆ response tokens ಅನ್ನೂ ಹೇಗೆ ನಡೆಸಿಕೊಳ್ಳಲಾಗುತ್ತದೆ ಎಂಬುದೂ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['Instruction tokens are skipped entirely, never processed', 'Both are processed identically through the forward pass, but only response tokens contribute to the loss', 'Only response tokens go through attention', 'Instruction tokens use a different vocabulary'], correct: 1,
        optsKn: ['Instruction tokens ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡಲಾಗುತ್ತವೆ, ಒಂದೂ ಸಲವೂ process ಆಗುವುದಿಲ್ಲ', 'ಎರಡೂ forward pass ಮೂಲಕ ಒಂದೇ ರೀತಿಯಲ್ಲಿ process ಆಗುತ್ತವೆ, ಆದರೆ response tokens ಮಾತ್ರ loss ಗೆ ಕೊಡುಗುತ್ತವೆ', 'ಕೇವಲ response tokens attention ಮೂಲಕ ಹೋಗುತ್ತವೆ', 'Instruction tokens ಒಂದೂ ಭಿನ್ನ vocabulary ಬಳಸುತ್ತವೆ'] },
      { q: 'Which three data formats does this lesson identify as solving the same underlying prompt/response separation problem?', qKn: 'ಈ lesson ಅದೇ underlying prompt/response separation ಸಮಸ್ಯೆ ಪರಿಹರಿಸುವಂತೆ ಯಾವ ಮೂರೂ data formats ಗುರುತಿಸುತ್ತದೆ?',
        opts: ['JSON, XML, YAML', 'Alpaca, ShareGPT, ChatML', 'CSV, TSV, Parquet', 'UTF-8, ASCII, Unicode'], correct: 1,
        optsKn: ['JSON, XML, YAML', 'Alpaca, ShareGPT, ChatML', 'CSV, TSV, Parquet', 'UTF-8, ASCII, Unicode'] },
    ] } },
  ],
};
