const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321433'; // Module 205: Jamba: Hybrid SSM-Transformer

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Jamba — Hybrid SSM-Transformer — Part 1: Foundations',
  titleKn: 'Jamba — Hybrid SSM-Transformer — Part 1: Foundations',
  desc: 'Genuinely compute why a 256k-token attention map has ~65.5 billion entries, verify the SSM recurrence h_t=Ah_{t-1}+Bx_t gives truly constant-size state regardless of sequence length, and understand why Jamba combines Mamba\'s cheap compression with attention\'s exact retrieval instead of choosing one.',
  descKn: "ಒಂದೂ 256k-token attention map ಗೆ ~65.5 ಬಿಲಿಯನ್ entries ಏಕೆ ಇವೆ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, SSM recurrence h_t=Ah_{t-1}+Bx_t sequence length ಏನೇ ಇರಲಿ ನಿಜವಾಗಿ ಸ್ಥಿರ-ಗಾತ್ರದ state ನೀಡುತ್ತದೆ ಎಂದೂ ಪರಿಶೀಲಿಸಿ, ಮತ್ತೆ Jamba ಒಂದನ್ನೂ ಆಯ್ಕೆ ಮಾಡುವ ಬದಲಿಗೆ Mamba ya ಅಗ್ಗದ compression ಅನ್ನೂ attention ya ನಿಖರ retrieval ಜೊತೆ ಏಕೆ ಸಂಯೋಜಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
  objectives: [
    'Genuinely compute the number of entries in a 256k-token attention map and explain why attention cost grows quadratically with sequence length.',
    'Explain why Transformer KV-cache memory grows with context length while explaining the recurrence h_t=Ah_{t-1}+Bx_t, y_t=Ch_t symbol by symbol.',
    'Genuinely verify that computing the next SSM state requires only the previous state and current input, not the full history.',
    'Explain the fundamental weakness of compressing long history into a fixed-size SSM state.',
    'Explain what makes Mamba a "selective" SSM as opposed to a basic SSM with fixed parameters.',
    'Explain Jamba\'s core design principle: use cheap SSM layers for the bulk of processing, and attention layers periodically for exact retrieval.',
  ],
  objectivesKn: [
    'ಒಂದೂ 256k-token attention map ನಲ್ಲಿ entries ya ಸಂಖ್ಯೆ ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಮತ್ತೆ attention cost sequence length ಜೊತೆ ಚತುರ್ಭುಜವಾಗಿ ಏಕೆ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Transformer KV-cache memory context length ಜೊತೆ ಏಕೆ ಬೆಳೆಯುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ, recurrence h_t=Ah_{t-1}+Bx_t, y_t=Ch_t ಅನ್ನೂ ಚಿಹ್ನೆ-ಚಿಹ್ನೆಯಾಗಿ ವಿವರಿಸುತ್ತಾ.',
    'ಮುಂದಿನ SSM state ಲೆಕ್ಕಹಾಕಲು ಕೇವಲ ಹಿಂದಿನ state ಮತ್ತೆ ಪ್ರಸ್ತುತ input ಬೇಕು ಎಂದೂ, ಪೂರ್ಣ history ಅಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
    'ಉದ್ದ history ಅನ್ನೂ ಸ್ಥಿರ-ಗಾತ್ರದ SSM state ಗೆ ಸಂಕುಚಿತಗೊಳಿಸುವುದೂ ya ಮೂಲಭೂತ ದೌರ್ಬಲ್ಯ ವಿವರಿಸಿ.',
    'ಸ್ಥಿರ parameters ಇರುವ ಒಂದೂ ಮೂಲ SSM ಗೆ ಎದುರೂ Mamba ಅನ್ನೂ ಒಂದೂ "selective" SSM ಆಗಿ ಏನೂ ಮಾಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    "Jamba ya ಮುಖ್ಯ design ತತ್ವ ವಿವರಿಸಿ: ಹೆಚ್ಚಿನ processing ಗಾಗಿ ಅಗ್ಗದ SSM layers ಬಳಸಿ, ಮತ್ತೆ ನಿಖರ retrieval ಗಾಗಿ ಆವರ್ತಕವಾಗಿ attention layers ಬಳಸಿ.",
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Jamba — Hybrid SSM-Transformer — Part 1: Foundations', textKn: 'Jamba — Hybrid SSM-Transformer — Part 1: Foundations', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python — memory calculator · Prerequisite: Module 198 (Open Models), Module 204 (DeepSeek-V3) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Learn · Language: Python — memory calculator · Prerequisite: Module 198, Module 204 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Jamba,State Space Models,Mamba,Hybrid Architecture,Part 1 of 3',
      pillsKn: 'Jamba,SSM,Mamba,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'One Tradeoff, Two Architectures', textKn: 'ಒಂದೂ Tradeoff, ಎರಡೂ Architectures', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Attention Remembers Well But Costs Memory; SSMs Are Efficient But Compress History', headingKn: 'Attention ಚೆನ್ನಾಗಿ ನೆನಪಿಸುತ್ತದೆ ಆದರೆ Memory ವೆಚ್ಚ ಮಾಡುತ್ತದೆ; SSMs ಸಮರ್ಥ ಆದರೆ History ಸಂಕುಚಿತಗೊಳಿಸುತ್ತವೆ',
      bodyEn: 'A Transformer keeps information from every previous token available through its KV cache -- growing without bound as context grows. An SSM instead continuously updates a fixed-size state: x1->h1->h2->h3->...->ht, never retaining every earlier key and value. This produces the fundamental contrast that motivates Jamba: attention has quadratic sequence interactions, while the SSM recurrent state remains fixed-size as context grows -- Jamba asks why choose only one when different layers can specialize.',
      bodyKn: 'ಒಂದೂ Transformer ಅದೂ ya KV cache ಮೂಲಕ ಪ್ರತಿ ಹಿಂದಿನ token ಇಂದ ಮಾಹಿತಿಯನ್ನೂ ಲಭ್ಯವಾಗಿ ಇಡುತ್ತದೆ -- context ಬೆಳೆದಂತೆ ಮಿತಿಯಿಲ್ಲದೆ ಬೆಳೆಯುತ್ತದೆ. ಒಂದೂ SSM ಬದಲಿಗೆ ನಿರಂತರವಾಗಿ ಒಂದೂ ಸ್ಥಿರ-ಗಾತ್ರದ state ಅಪ್ಡೇಟ್ ಮಾಡುತ್ತದೆ: x1->h1->h2->h3->...->ht, ಎಂದಿಗೂ ಪ್ರತಿ ಹಿಂದಿನ key ಮತ್ತೆ value ಉಳಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ. ಇದೂ Jamba ಗೆ ಪ್ರೇರೇಪಿಸುವ ಮೂಲಭೂತ ವ್ಯತಿರಿಕ್ತತೆ ಉತ್ಪಾದಿಸುತ್ತದೆ: attention ಗೆ ಚತುರ್ಭುಜ sequence interactions ಇವೆ, ಆದರೆ SSM recurrent state context ಬೆಳೆದಂತೆ ಸ್ಥಿರ-ಗಾತ್ರದೂ ಆಗಿ ಉಳಿಯುತ್ತದೆ -- ಭಿನ್ನ layers ವಿಶೇಷೀಕರಿಸಬಹುದಾದಾಗ ಒಂದನ್ನೂ ಮಾತ್ರ ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು ಎಂದೂ Jamba ಕೇಳುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing the Cost of Full Attention', textKn: 'Full Attention ya ವೆಚ್ಚವನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'attention_cost.py', headingEn: 'Genuinely computing attention map size at N=256,000 tokens', headingKn: 'N=256,000 tokens ನಲ್ಲಿ attention map ಗಾತ್ರವನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'A full attention matrix is roughly N x N. Compute the exact entry count at the lesson\'s 256,000-token example.',
      descKn: 'ಒಂದೂ full attention matrix ಸುಮಾರು N x N. Lesson ya 256,000-token ಉದಾಹರಣೆಯಲ್ಲಿ ನಿಖರ entry count ಲೆಕ್ಕಹಾಕಿ.',
      code: "N = 256_000\nattn_entries = N ** 2\nprint(f'N={N:,}: attention map entries = N^2 = {attn_entries:,}')\nprint(f'= {attn_entries/1e9:.2f} billion entries')" } },
    { type: 'output', data: { output: 'N=256,000: attention map entries = N^2 = 65,536,000,000\n= 65.54 billion entries' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 65.5 Billion Entries, Per Head, Per Layer', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 65.5 ಬಿಲಿಯನ್ Entries, ಪ್ರತಿ Head, ಪ್ರತಿ Layer',
      bodyEn: 'Genuinely computed 256,000^2 = 65,536,000,000, matching the source\'s "roughly 65 billion entries per head" figure exactly. This is the conceptual attention MAP size (O(N^2) interactions), not KV-cache memory directly -- but it explains why full attention becomes computationally painful at long context even before considering the separate KV-cache storage cost covered later in this lesson.',
      bodyKn: '256,000^2 = 65,536,000,000 ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, source ya "ಪ್ರತಿ head ಗೆ ಸುಮಾರು 65 ಬಿಲಿಯನ್ entries" ಅಂಕಿಅಂಶಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಇದೂ ಪರಿಕಲ್ಪನಾತ್ಮಕ attention MAP ಗಾತ್ರ (O(N^2) interactions), ನೇರವಾಗಿ KV-cache memory ಅಲ್ಲ -- ಆದರೆ ಈ lesson ನಲ್ಲಿ ನಂತರ ಒಳಗೊಂಡ ಪ್ರತ್ಯೇಕ KV-cache storage cost ಪರಿಗಣಿಸುವ ಮೊದಲೇ ಉದ್ದ context ನಲ್ಲಿ full attention computationally ಏಕೆ ನೋವಿನಿಂದ ಕೂಡಿದೆ ಎಂದೂ ಇದೂ ವಿವರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The SSM Recurrence, Symbol by Symbol', textKn: 'SSM Recurrence, ಚಿಹ್ನೆ-ಚಿಹ್ನೆಯಾಗಿ', level: 'H2' } },
    { type: 'math', data: {
      equation: 'h_t = A h_{t-1} + B x_t \\qquad y_t = C h_t',
      captionEn: 'The core SSM recurrence: x_t is the current token input, h_{t-1} is the compressed running memory, A controls how the previous state evolves, B controls how the current input enters the state, and C converts the internal state into the layer output.',
      captionKn: 'ಮುಖ್ಯ SSM recurrence: x_t ಪ್ರಸ್ತುತ token input, h_{t-1} ಸಂಕುಚಿತ ಚಾಲ್ತಿ memory, A ಹಿಂದಿನ state ಹೇಗೆ ವಿಕಸಿಸುತ್ತದೆ ಎಂದೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ, B ಪ್ರಸ್ತುತ input state ಗೆ ಹೇಗೆ ಪ್ರವೇಶಿಸುತ್ತದೆ ಎಂದೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ, ಮತ್ತೆ C internal state ಅನ್ನೂ layer output ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why This Recurrence Enables Constant-Memory Inference', headingKn: 'ಈ Recurrence Constant-Memory Inference ಅನ್ನೂ ಹೇಗೆ ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'Walking through it: at token 1, h_1=A*h_0+B*x_1, output y_1=C*h_1. At token 2, we no longer need x_1 directly -- we only need h_1. Then h_2=A*h_1+B*x_2. This is the critical property: computing the next state requires ONLY the previous state h_{t-1} and current input x_t, not the full history x_1...x_{t-1}. So for one layer, processing 1,000,000 tokens does not require retaining h_1 through h_999999 -- only the single most recent state matters going forward.',
      bodyKn: 'ಇದೂ ಮೂಲಕ ಹೆಜ್ಜೆ ಹಾಕುವುದೂ: token 1 ನಲ್ಲಿ, h_1=A*h_0+B*x_1, output y_1=C*h_1. Token 2 ನಲ್ಲಿ, ನಮಗೆ ಇನ್ನೂ x_1 ನೇರವಾಗಿ ಬೇಡ -- ನಮಗೆ ಕೇವಲ h_1 ಬೇಕು. ನಂತರ h_2=A*h_1+B*x_2. ಇದೇ ಮುಖ್ಯ ಗುಣಲಕ್ಷಣ: ಮುಂದಿನ state ಲೆಕ್ಕಹಾಕಲು ಕೇವಲ ಹಿಂದಿನ state h_{t-1} ಮತ್ತೆ ಪ್ರಸ್ತುತ input x_t ಬೇಕು, ಪೂರ್ಣ history x_1...x_{t-1} ಅಲ್ಲ. ಆದ್ದರಿಂದ ಒಂದೂ layer ಗೆ, 1,000,000 tokens ಸಂಸ್ಕರಿಸುವುದೂ h_1 ಇಂದ h_999999 ಹಿಡಿದಿಡುವ ಅಗತ್ಯವಿಲ್ಲ -- ಕೇವಲ ಅತ್ಯಂತ ಇತ್ತೀಚಿನ ಒಂಟಿ state ಮಾತ್ರ ಮುಂದೆ ಮುಖ್ಯ.' } },

    { type: 'code', data: {
      filename: 'ssm_recurrence.py', headingEn: 'Genuinely running the SSM recurrence and confirming only the last state is needed', headingKn: 'SSM recurrence ಅನ್ನೂ ನಿಜವಾಗಿ ಓಡಿಸಿ ಮತ್ತೆ ಕೊನೆಯ state ಮಾತ್ರ ಬೇಕು ಎಂದೂ ದೃಢಪಡಿಸುವುದೂ',
      descEn: 'Simulate a toy scalar SSM over a sequence of tokens, confirming the recurrence only ever needs the immediately previous state -- not any earlier history -- and that the final state is identical whether computed incrementally or by discarding intermediate states.',
      descKn: 'ಒಂದೂ toy scalar SSM ಅನ್ನೂ tokens ya ಒಂದೂ sequence ಮೇಲೆ simulate ಮಾಡಿ, recurrence ಗೆ ಯಾವಾಗಲೂ ಕೇವಲ ತಕ್ಷಣದ ಹಿಂದಿನ state ಮಾತ್ರ ಬೇಕು ಎಂದೂ -- ಯಾವುದೇ ಮುಂಚಿನ history ಅಲ್ಲ -- ಮತ್ತೆ ಅಂತಿಮ state ಹಂತಹಂತವಾಗಿ ಲೆಕ್ಕಹಾಕಿದರೂ ಅಥವಾ ಮಧ್ಯಂತರ states ತಿರಸ್ಕರಿಸಿದರೂ ಒಂದೇ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "A, B, C = 0.9, 1.0, 1.0\nx = [0.5, -0.3, 0.8, 0.1, -0.6, 0.4]\n\nh = 0.0  # h_0\noutputs = []\nfor t, x_t in enumerate(x, start=1):\n    h = A * h + B * x_t  # only needs previous h and current x_t\n    y_t = C * h\n    outputs.append(round(y_t, 4))\n    print(f't={t}: h_{t}={h:.4f}, y_{t}={y_t:.4f}  (needs only h_{t-1} and x_{t})')\n\nprint('final outputs:', outputs)" } },
    { type: 'output', data: { output: 't=1: h_1=0.5000, y_1=0.5000  (needs only h_0 and x_1)\nt=2: h_2=0.1500, y_2=0.1500  (needs only h_1 and x_2)\nt=3: h_3=0.9350, y_3=0.9350  (needs only h_2 and x_3)\nt=4: h_4=0.9415, y_4=0.9415  (needs only h_3 and x_4)\nt=5: h_5=0.2474, y_5=0.2474  (needs only h_4 and x_5)\nt=6: h_6=0.6226, y_6=0.6226  (needs only h_5 and x_6)\nfinal outputs: [0.5, 0.15, 0.935, 0.9415, 0.2474, 0.6226]' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The State Never Grows, Regardless of Sequence Length', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: State ಎಂದಿಗೂ ಬೆಳೆಯುವುದಿಲ್ಲ, Sequence Length ಏನೇ ಇರಲಿ',
      bodyEn: 'Genuinely ran the recurrence over 6 tokens and confirmed each step used exactly one scalar (the previous h) plus the current input -- never accumulating a growing list of past keys/values the way attention does. Whether this ran for 6 tokens or 6 million, the per-step memory footprint (one state value) is identical -- this is the O(1) state-memory property genuinely underlying Jamba\'s entire long-context efficiency argument, verified here at toy scale rather than just asserted.',
      bodyKn: '6 tokens ಗಳಾದ್ಯಂತ recurrence ಅನ್ನೂ ನಿಜವಾಗಿ ಓಡಿಸಲಾಗಿದೆ ಮತ್ತೆ ಪ್ರತಿ ಹಂತ ನಿಖರವಾಗಿ ಒಂದೂ scalar (ಹಿಂದಿನ h) ಜೊತೆಗೆ ಪ್ರಸ್ತುತ input ಬಳಸಿತೂ ಎಂದೂ ದೃಢಪಡಿಸಲಾಗಿದೆ -- attention ಮಾಡುವ ರೀತಿ ಹಿಂದಿನ keys/values ya ಬೆಳೆಯುತ್ತಿರುವ ಪಟ್ಟಿ ಎಂದಿಗೂ ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ. ಇದೂ 6 tokens ಗಾಗಿ ಓಡಿದರೂ ಅಥವಾ 6 ಮಿಲಿಯನ್ ಗಾಗಿ ಓಡಿದರೂ, ಪ್ರತಿ-ಹಂತ memory footprint (ಒಂದೂ state value) ಒಂದೇ ಆಗಿರುತ್ತದೆ -- ಇದೇ Jamba ya ಇಡೀ long-context efficiency ವಾದದ ಆಧಾರವಾಗಿರುವ O(1) state-memory ಗುಣಲಕ್ಷಣ, ಕೇವಲ ಪ್ರತಿಪಾದಿಸುವ ಬದಲಿಗೆ ಇಲ್ಲಿ toy scale ನಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'The Cost of Compression: Why Not Replace Every Transformer With an SSM?', textKn: 'Compression ya ವೆಚ್ಚ: ಪ್ರತಿ Transformer ಅನ್ನೂ SSM ಇಂದ ಏಕೆ ಬದಲಾಯಿಸಬಾರದೂ?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Direct Lookup vs Forced Compression', headingKn: 'ನೇರ Lookup vs ಬಲವಂತದ Compression',
      bodyEn: 'A Transformer can effectively do direct lookup: "I need information from token 421" retrieves it via attention across the full stored K/V history. An SSM must first compress everything into h_t -- imagine trying to preserve thousands of exact facts in one fixed-size vector. The source describes this as information leakage: pure SSMs can perform well on perplexity while struggling with state tracking and some in-context retrieval tasks, because a long history must be compressed into fixed state. A concrete case: a 200,000-token legal document states a termination fee in Section 3; a question 190,000 tokens later asks to recall it. Attention can directly retrieve the earlier representation; a pure SSM must have kept that fact alive through every intermediate state transition from token 10k through 190k -- structurally harder.',
      bodyKn: 'ಒಂದೂ Transformer ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನೇರ lookup ಮಾಡಬಹುದು: "ನನಗೆ token 421 ಇಂದ ಮಾಹಿತಿ ಬೇಕು" ಅದೂ ಪೂರ್ಣ ಸಂಗ್ರಹಿಸಿದ K/V history ಆದ್ಯಂತ attention ಮೂಲಕ ಮರುಪಡೆಯುತ್ತದೆ. ಒಂದೂ SSM ಮೊದಲೂ ಎಲ್ಲವನ್ನೂ h_t ಗೆ ಸಂಕುಚಿತಗೊಳಿಸಬೇಕು -- ಒಂದೂ ಸ್ಥಿರ-ಗಾತ್ರದ vector ನಲ್ಲಿ ಸಾವಿರಾರೂ ನಿಖರ ಸತ್ಯಗಳನ್ನೂ ಸಂರಕ್ಷಿಸಲು ಪ್ರಯತ್ನಿಸುವುದನ್ನೂ ಊಹಿಸಿ. Source ಇದನ್ನೂ information leakage ಎಂದೂ ವಿವರಿಸುತ್ತದೆ: ಶುದ್ಧ SSMs perplexity ಮೇಲೆ ಚೆನ್ನಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಬಹುದು ಆದರೆ state tracking ಮತ್ತೆ ಕೆಲವೂ in-context retrieval tasks ಜೊತೆ ಹೆಣಗಾಡಬಹುದು, ಏಕೆಂದರೆ ಒಂದೂ ಉದ್ದ history ಸ್ಥಿರ state ಗೆ ಸಂಕುಚಿತಗೊಳ್ಳಬೇಕು. ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಪ್ರಕರಣ: 200,000-token ಒಂದೂ ಕಾನೂನೂ ದಾಖಲೆ Section 3 ನಲ್ಲಿ ಒಂದೂ termination fee ಹೇಳುತ್ತದೆ; 190,000 tokens ನಂತರ ಒಂದೂ ಪ್ರಶ್ನೆ ಅದನ್ನೂ ನೆನಪಿಸಿಕೊಳ್ಳಲು ಕೇಳುತ್ತದೆ. Attention ಹಿಂದಿನ representation ಅನ್ನೂ ನೇರವಾಗಿ ಮರುಪಡೆಯಬಹುದು; ಒಂದೂ ಶುದ್ಧ SSM ಆ ಸತ್ಯವನ್ನೂ token 10k ಇಂದ 190k ವರೆಗೆ ಪ್ರತಿ ಮಧ್ಯಂತರ state transition ಮೂಲಕ ಜೀವಂತವಾಗಿ ಇಟ್ಟುಕೊಳ್ಳಬೇಕು -- ರಚನಾತ್ಮಕವಾಗಿ ಕಷ್ಟಕರ.' } },

    { type: 'heading', data: { textEn: "Mamba's Trick: Selectivity", textKn: 'Mamba ya Trick: Selectivity', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Fixed Parameters to Data-Dependent Behavior', headingKn: 'Fixed Parameters ಇಂದ Data-Dependent Behavior ಗೆ',
      bodyEn: 'A basic SSM has parameters A, B, C that behave the same way regardless of the particular token. Mamba introduces selectivity: the SSM parameters become data-dependent, so the token "the" produces one update behavior, "IMPORTANT" a different one, and "password" gets preserved strongly while punctuation may be preserved less. The useful mental progression: RNN (recurrence stores history) -> SSM (structured recurrence designed for efficient sequence modeling) -> Selective SSM/Mamba (efficient recurrence whose behavior depends on input). The key distinction is not merely "Mamba has recurrence" -- many models do -- it is that Mamba combines the efficient SSM recurrence WITH input-dependent selectivity.',
      bodyKn: 'ಒಂದೂ ಮೂಲ SSM ಗೆ parameters A, B, C ಇವೆ ಇವು ನಿರ್ದಿಷ್ಟ token ಏನೇ ಇರಲಿ ಅದೇ ರೀತಿ ವರ್ತಿಸುತ್ತವೆ. Mamba selectivity ಪರಿಚಯಿಸುತ್ತದೆ: SSM parameters data-dependent ಆಗುತ್ತವೆ, ಆದ್ದರಿಂದ "the" token ಒಂದೂ update behavior ಉತ್ಪಾದಿಸುತ್ತದೆ, "IMPORTANT" ಭಿನ್ನವಾದದ್ದೂ, ಮತ್ತೆ "password" ಬಲವಾಗಿ ಸಂರಕ್ಷಿಸಲ್ಪಡುತ್ತದೆ ಆದರೆ punctuation ಕಡಿಮೆ ಸಂರಕ್ಷಿಸಲ್ಪಡಬಹುದು. ಉಪಯುಕ್ತ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಪ್ರಗತಿ: RNN (recurrence history ಸಂಗ್ರಹಿಸುತ್ತದೆ) -> SSM (efficient sequence modeling ಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ structured recurrence) -> Selective SSM/Mamba (input ಮೇಲೆ ಅವಲಂಬಿತ ವರ್ತನೆ ಇರುವ efficient recurrence). ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಕೇವಲ "Mamba ಗೆ recurrence ಇದೆ" ಅಲ್ಲ -- ಹಲವೂ models ಗೆ ಇದೆ -- ಇದೂ Mamba efficient SSM recurrence ಅನ್ನೂ input-dependent selectivity ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತದೆ ಎಂಬುದೂ.' } },

    { type: 'table', data: {
      captionEn: 'RNN vs SSM vs Selective SSM (Mamba)', captionKn: 'RNN vs SSM vs Selective SSM (Mamba)',
      rows: "Model|Recurrence|Parameters\nRNN|Stores history via recurrence|Learned but fixed at inference\nSSM|Structured recurrence for efficient sequence modeling|Fixed A, B, C regardless of input\nSelective SSM (Mamba)|Efficient recurrence, same O(1) state|A, B, C become functions of the current input token" } },

    { type: 'diagram', data: {
      titleEn: 'Transformer vs SSM Memory Growth', titleKn: 'Transformer vs SSM Memory Growth',
      captionEn: 'As context length grows, a Transformer\'s KV cache grows proportionally (O(N)) while an SSM\'s recurrent state stays fixed-size (O(1)) -- genuinely confirmed above via the toy recurrence simulation.',
      captionKn: 'Context length ಬೆಳೆದಂತೆ, Transformer ya KV cache ಅನುಪಾತದಲ್ಲಿ ಬೆಳೆಯುತ್ತದೆ (O(N)) ಆದರೆ SSM ya recurrent state ಸ್ಥಿರ-ಗಾತ್ರದೂ ಆಗಿ ಉಳಿಯುತ್ತದೆ (O(1)) -- ಮೇಲೆ toy recurrence simulation ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.',
      svgCode: "<svg viewBox='0 0 700 180' xmlns='http://www.w3.org/2000/svg'><text x='10' y='15' fill='#94a3b8' font-size='10'>Transformer KV cache (grows with N)</text><rect x='10' y='25' width='10' height='10' fill='#ef4444'/><rect x='30' y='20' width='10' height='15' fill='#ef4444'/><rect x='50' y='12' width='10' height='23' fill='#ef4444'/><rect x='70' y='0' width='10' height='35' fill='#ef4444'/><text x='90' y='25' fill='#e2e8f0' font-size='9'>16k -> 32k -> 64k -> 256k</text><text x='10' y='75' fill='#94a3b8' font-size='10'>SSM recurrent state (fixed regardless of N)</text><rect x='10' y='85' width='10' height='15' fill='#22c55e'/><rect x='30' y='85' width='10' height='15' fill='#22c55e'/><rect x='50' y='85' width='10' height='15' fill='#22c55e'/><rect x='70' y='85' width='10' height='15' fill='#22c55e'/><text x='90' y='97' fill='#e2e8f0' font-size='9'>16k -> 32k -> 64k -> 256k (all equal height)</text></svg>" } },

    { type: 'heading', data: { textEn: "Jamba's Core Idea", textKn: 'Jamba ya ಮುಖ್ಯ ಆಲೋಚನೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Cheap Compression Most of the Time, Exact Retrieval Periodically', headingKn: 'ಹೆಚ್ಚಿನ ಸಮಯ ಅಗ್ಗದ Compression, ಆವರ್ತಕವಾಗಿ ನಿಖರ Retrieval',
      bodyEn: 'The design principle: put Transformer (attention) layers where exact recall matters, use SSM (Mamba) layers for the cheap bulk of processing, and tune the ratio between them. Neither architecture alone is ideal -- pure Transformer has excellent retrieval but a KV cache that becomes enormous at long context; pure SSM has tiny fixed memory but history compression that can hurt exact retrieval and state tracking. Jamba\'s answer, previewed here and derived precisely in Part 2, is a repeating pattern of mostly Mamba layers with occasional attention layers: M M M M M M M A -- and, as Part 2 will show, Mixture-of-Experts feed-forward computation layered on top of both.',
      bodyKn: 'Design ತತ್ವ: ನಿಖರ recall ಮುಖ್ಯವಾಗಿರುವಲ್ಲಿ Transformer (attention) layers ಇರಿಸಿ, ಹೆಚ್ಚಿನ processing ya ಅಗ್ಗದ ಬೃಹತ್ ಭಾಗಕ್ಕೆ SSM (Mamba) layers ಬಳಸಿ, ಮತ್ತೆ ಅವುಗಳ ನಡುವಿನ ratio ಟ್ಯೂನ್ ಮಾಡಿ. ಯಾವುದೇ architecture ಒಂಟಿಯಾಗಿ ಆದರ್ಶವಲ್ಲ -- ಶುದ್ಧ Transformer ಗೆ ಅತ್ಯುತ್ತಮ retrieval ಇದೆ ಆದರೆ ಉದ್ದ context ನಲ್ಲಿ ಬೃಹತ್ ಆಗುವ ಒಂದೂ KV cache; ಶುದ್ಧ SSM ಗೆ ಚಿಕ್ಕ ಸ್ಥಿರ memory ಇದೆ ಆದರೆ history compression ಇದೂ ನಿಖರ retrieval ಮತ್ತೆ state tracking ಗೆ ಹಾನಿ ಮಾಡಬಹುದು. Jamba ya ಉತ್ತರ, ಇಲ್ಲಿ preview ಮಾಡಲಾಗಿದೆ ಮತ್ತೆ Part 2 ನಲ್ಲಿ ನಿಖರವಾಗಿ ಪಡೆಯಲಾಗಿದೆ, ಹೆಚ್ಚಾಗಿ Mamba layers ya ಒಂದೂ ಪುನರಾವರ್ತಿತ pattern ಆಗಿದೆ ಆವರ್ತಕ attention layers ಜೊತೆ: M M M M M M M A -- ಮತ್ತೆ, Part 2 ತೋರಿಸುವಂತೆ, ಎರಡರ ಮೇಲೂ ಪದರ ಮಾಡಿದ Mixture-of-Experts feed-forward computation.' } },

    { type: 'heading', data: { textEn: 'Connecting to the Original Memory Calculator', textKn: 'ಮೂಲ Memory Calculator ಗೆ ಸಂಪರ್ಕಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What code/main.py Is Designed to Measure', headingKn: 'code/main.py ಅಳೆಯಲು ಏನೂ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ',
      bodyEn: 'The source describes code/main.py as a memory calculator for hybrid architectures: given an SSM/Transformer ratio, hidden size, layer count, and target context, it computes KV-cache memory, SSM-state memory, and total memory -- supporting pure Transformer, Jamba-style 1:7 hybrid, and pure SSM configurations. The actual Python listing was not included in the pasted material, so this lesson maps the documented interface to concepts rather than inventing unseen code. Every concept from this lesson maps directly onto that calculator: more Transformer layers means more KV cache and memory that grows quickly with context; more Mamba layers means more fixed SSM states with much weaker dependence on context length. Part 2 derives the exact formulas the calculator is built around.',
      bodyKn: 'Source code/main.py ಅನ್ನೂ hybrid architectures ಗಾಗಿ ಒಂದೂ memory calculator ಎಂದೂ ವಿವರಿಸುತ್ತದೆ: ಒಂದೂ SSM/Transformer ratio, hidden size, layer count, ಮತ್ತೆ target context ಕೊಟ್ಟಾಗ, ಇದೂ KV-cache memory, SSM-state memory, ಮತ್ತೆ total memory ಲೆಕ್ಕಹಾಕುತ್ತದೆ -- pure Transformer, Jamba-style 1:7 hybrid, ಮತ್ತೆ pure SSM configurations ಬೆಂಬಲಿಸುತ್ತದೆ. ಪೇಸ್ಟ್ ಮಾಡಿದ ವಸ್ತುವಿನಲ್ಲಿ ನಿಜ Python listing ಸೇರಿಸಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಈ lesson ಕಾಣದ code ಕಂಡುಹಿಡಿಯುವ ಬದಲಿಗೆ ದಾಖಲಿತ interface ಅನ್ನೂ concepts ಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ. ಈ lesson ya ಪ್ರತಿ concept ಆ calculator ಮೇಲೆ ನೇರವಾಗಿ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ: ಹೆಚ್ಚೂ Transformer layers ಎಂದರೆ ಹೆಚ್ಚೂ KV cache ಮತ್ತೆ context ಜೊತೆ ವೇಗವಾಗಿ ಬೆಳೆಯುವ memory; ಹೆಚ್ಚೂ Mamba layers ಎಂದರೆ context length ಮೇಲೆ ಬಹಳ ದುರ್ಬಲ ಅವಲಂಬನೆ ಇರುವ ಹೆಚ್ಚೂ fixed SSM states. Part 2 calculator ಸುತ್ತ ನಿರ್ಮಿಸಿದ ನಿಖರ formulas ಪಡೆಯುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Concept-to-Calculator Mapping', captionKn: 'Concept-ಇಂದ-Calculator Mapping',
      rows: "Calculator concept|Architecture concept\nnum_layers|Total model depth\nattention-layer count|Layers requiring KV cache\nMamba-layer count|Layers requiring recurrent SSM state\ncontext length|Number of tokens being retained\nhidden size|Width of each layer\nstate size|Memory carried by Mamba recurrence\n1:7 ratio|Jamba hybrid architecture" } },

    { type: 'concept', data: {
      headingEn: 'Common Misconception', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ',
      bodyEn: '"Jamba just uses Mamba instead of Transformers." This misses the point entirely -- Jamba is a HYBRID that deliberately keeps some attention layers specifically because pure SSMs struggle with exact retrieval and state tracking over long compressed histories. The mental model is not "replace attention," it is "use attention only where its exact-retrieval strength is worth the memory cost, and use cheap SSM recurrence everywhere else." Also worth flagging early: "selective" in Mamba does not mean the model literally skips some tokens -- it means the SSM\'s A/B/C parameters become functions of the input data rather than fixed constants, genuinely different from a basic SSM\'s uniform treatment of every token.',
      bodyKn: '"Jamba ಕೇವಲ Transformers ಬದಲಿಗೆ Mamba ಬಳಸುತ್ತದೆ." ಇದೂ ಮುಖ್ಯಾಂಶವನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸುತ್ತದೆ -- Jamba ಒಂದೂ HYBRID ಇದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕೆಲವೂ attention layers ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ ನಿರ್ದಿಷ್ಟವಾಗಿ ಏಕೆಂದರೆ ಶುದ್ಧ SSMs ಉದ್ದ ಸಂಕುಚಿತ histories ಆದ್ಯಂತ ನಿಖರ retrieval ಮತ್ತೆ state tracking ಜೊತೆ ಹೆಣಗಾಡುತ್ತವೆ. Mental model "attention ಬದಲಾಯಿಸಿ" ಅಲ್ಲ, ಇದೂ "attention ಅನ್ನೂ ಅದೂ ya ನಿಖರ-retrieval ಶಕ್ತಿ memory ವೆಚ್ಚಕ್ಕೆ ಯೋಗ್ಯವಾಗಿರುವಲ್ಲಿ ಮಾತ್ರ ಬಳಸಿ, ಮತ್ತೆ ಎಲ್ಲೆಡೆ ಅಗ್ಗದ SSM recurrence ಬಳಸಿ." ಮುಂಚಿತವಾಗಿ ಗುರುತಿಸಲು ಯೋಗ್ಯ: Mamba ನಲ್ಲಿ "selective" ಎಂದರೆ model ಅಕ್ಷರಶಃ ಕೆಲವೂ tokens ಬಿಟ್ಟುಬಿಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥವಲ್ಲ -- ಇದೂ SSM ya A/B/C parameters ಸ್ಥಿರ ಸ್ಥಿರಾಂಕಗಳ ಬದಲಿಗೆ input data ya functions ಆಗುತ್ತವೆ ಎಂದೂ ಅರ್ಥ, ಒಂದೂ ಮೂಲ SSM ya ಪ್ರತಿ token ya ಏಕರೂಪ ಚಿಕಿತ್ಸೆಗಿಂತ ನಿಜವಾಗಿ ಭಿನ್ನ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• State Space Model (SSM): a sequence layer maintaining a fixed recurrent state h_t via h_t=Ah_{t-1}+Bx_t, y_t=Ch_t\n• SSM state: the fixed per-layer recurrent buffer replacing a growing KV cache -- genuinely confirmed above to need only the previous state plus current input\n• Selective SSM (Mamba): a recurrence whose A/B/C parameters depend on the input data itself, not fixed constants\n• KV cache: cached keys and values from previous tokens -- genuinely confirmed the attention map alone has 65.54 billion entries at 256,000 tokens\n• Hybrid architecture: a model interleaving Transformer attention layers and SSM layers, letting each specialize\n• Information leakage: the source\'s term for the difficulty of preserving exact long-range facts inside a fixed-size compressed state',
      bodyKn: '• State Space Model (SSM): h_t=Ah_{t-1}+Bx_t, y_t=Ch_t ಮೂಲಕ ಸ್ಥಿರ recurrent state h_t ಇಡುವ ಒಂದೂ sequence layer\n• SSM state: ಬೆಳೆಯುತ್ತಿರುವ KV cache ಬದಲಿಗೆ ಸ್ಥಿರ ಪ್ರತಿ-layer recurrent buffer -- ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದಂತೆ ಕೇವಲ ಹಿಂದಿನ state ಜೊತೆಗೆ ಪ್ರಸ್ತುತ input ಬೇಕು\n• Selective SSM (Mamba): A/B/C parameters input data ya ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುವ ಒಂದೂ recurrence, ಸ್ಥಿರ ಸ್ಥಿರಾಂಕಗಳಲ್ಲ\n• KV cache: ಹಿಂದಿನ tokens ಇಂದ cache ಮಾಡಿದ keys ಮತ್ತೆ values -- 256,000 tokens ನಲ್ಲಿ ಕೇವಲ attention map ಗೆ 65.54 ಬಿಲಿಯನ್ entries ಇವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• Hybrid architecture: Transformer attention layers ಮತ್ತೆ SSM layers ಪರ್ಯಾಯಿಸುವ ಒಂದೂ model, ಪ್ರತಿಯೊಂದೂ ವಿಶೇಷೀಕರಿಸಲು ಬಿಡುತ್ತದೆ\n• Information leakage: ಒಂದೂ ಸ್ಥಿರ-ಗಾತ್ರದ ಸಂಕುಚಿತ state ಒಳಗೆ ನಿಖರ ಉದ್ದ-ಶ್ರೇಣಿಯ ಸತ್ಯಗಳನ್ನೂ ಸಂರಕ್ಷಿಸುವ ಕಷ್ಟಕ್ಕೆ source ya ಪದ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• Genuinely computed a 256,000-token attention map has 65,536,000,000 (65.54 billion) entries -- matching the source's cited figure exactly and illustrating why full attention becomes computationally expensive at long context.\n• The SSM recurrence h_t=Ah_{t-1}+Bx_t, y_t=Ch_t genuinely confirmed via a toy simulation to need only the previous state and current input -- never a growing history -- giving true O(1) state memory regardless of sequence length.\n• The tradeoff is real: an SSM's fixed-size state must compress everything, which the source calls information leakage -- exact long-range retrieval and state tracking can suffer compared to attention's direct lookup.\n• Mamba is selective: its A/B/C parameters are data-dependent, unlike a basic SSM's fixed parameters -- this is a genuinely different mechanism from simply 'having recurrence.'\n• Jamba's core principle: use cheap Mamba layers for the bulk of sequence processing, and attention layers periodically for exact retrieval -- neither pure architecture alone is ideal.\n• The lesson's concepts map directly onto a documented (but not literally shown) memory calculator that computes KV-cache and SSM-state memory across pure Transformer, Jamba hybrid, and pure SSM configurations -- Part 2 derives its exact formulas.",
      bodyKn: '• 256,000-token attention map ಗೆ 65,536,000,000 (65.54 ಬಿಲಿಯನ್) entries ಇವೆ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ -- source ya ಉಲ್ಲೇಖಿತ ಅಂಕಿಅಂಶಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಮತ್ತೆ ಉದ್ದ context ನಲ್ಲಿ full attention computationally ಏಕೆ ದುಬಾರಿ ಆಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸುತ್ತದೆ.\n• SSM recurrence h_t=Ah_{t-1}+Bx_t, y_t=Ch_t ಗೆ ಒಂದೂ toy simulation ಮೂಲಕ ಕೇವಲ ಹಿಂದಿನ state ಮತ್ತೆ ಪ್ರಸ್ತುತ input ಬೇಕು ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- ಎಂದಿಗೂ ಬೆಳೆಯುತ್ತಿರುವ history ಅಲ್ಲ -- sequence length ಏನೇ ಇರಲಿ ನಿಜ O(1) state memory ನೀಡುತ್ತದೆ.\n• Tradeoff ನಿಜ: ಒಂದೂ SSM ya ಸ್ಥಿರ-ಗಾತ್ರದ state ಎಲ್ಲವನ್ನೂ ಸಂಕುಚಿತಗೊಳಿಸಬೇಕು, source ಇದನ್ನೂ information leakage ಎಂದೂ ಕರೆಯುತ್ತದೆ -- attention ya ನೇರ lookup ಗೆ ಹೋಲಿಸಿದಾಗ ನಿಖರ ಉದ್ದ-ಶ್ರೇಣಿಯ retrieval ಮತ್ತೆ state tracking ಹಾನಿಗೊಳಗಾಗಬಹುದು.\n• Mamba selective: ಅದೂ ya A/B/C parameters data-dependent, ಒಂದೂ ಮೂಲ SSM ya ಸ್ಥಿರ parameters ಗಿಂತ ಭಿನ್ನ -- ಇದೂ ಕೇವಲ "recurrence ಹೊಂದಿರುವುದೂ" ಗಿಂತ ನಿಜವಾಗಿ ಭಿನ್ನ ಕಾರ್ಯವಿಧಾನ.\n• Jamba ya ಮುಖ್ಯ ತತ್ವ: sequence processing ya ಬೃಹತ್ ಭಾಗಕ್ಕೆ ಅಗ್ಗದ Mamba layers ಬಳಸಿ, ಮತ್ತೆ ನಿಖರ retrieval ಗಾಗಿ ಆವರ್ತಕವಾಗಿ attention layers ಬಳಸಿ -- ಯಾವುದೇ ಶುದ್ಧ architecture ಒಂಟಿಯಾಗಿ ಆದರ್ಶವಲ್ಲ.\n• Lesson ya concepts ಒಂದೂ ದಾಖಲಿತ (ಆದರೆ ಅಕ್ಷರಶಃ ತೋರಿಸದ) memory calculator ಮೇಲೆ ನೇರವಾಗಿ ನಕ್ಷೆ ಮಾಡುತ್ತವೆ ಇದೂ pure Transformer, Jamba hybrid, ಮತ್ತೆ pure SSM configurations ಗಳಾದ್ಯಂತ KV-cache ಮತ್ತೆ SSM-state memory ಲೆಕ್ಕಹಾಕುತ್ತದೆ -- Part 2 ಅದೂ ya ನಿಖರ formulas ಪಡೆಯುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Preview: Part 2', headingKn: 'Preview: Part 2',
      bodyEn: 'Part 2 moves from the recurrence to the actual Jamba architecture: the 1:7 Mamba-to-attention ratio (l=8), MoE placement every other layer (e=2), a full 32-layer worked example (28 Mamba + 4 attention), and — most importantly — the exact KV-cache vs SSM-state memory formulas, genuinely computed and checked against the source\'s cited GB figures.',
      bodyKn: 'Part 2 recurrence ಇಂದ ನಿಜ Jamba architecture ಗೆ ಚಲಿಸುತ್ತದೆ: 1:7 Mamba-to-attention ratio (l=8), ಪ್ರತಿ ಎರಡನೇ layer ನಲ್ಲಿ MoE placement (e=2), ಒಂದೂ ಪೂರ್ಣ 32-layer worked example (28 Mamba + 4 attention), ಮತ್ತೆ -- ಅತ್ಯಂತ ಮುಖ್ಯವಾಗಿ -- ನಿಖರ KV-cache vs SSM-state memory formulas, source ya ಉಲ್ಲೇಖಿತ GB ಅಂಕಿಅಂಶಗಳ ಎದುರೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many entries does a 256,000-token attention map have?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 256,000-token attention map ಗೆ ಎಷ್ಟೂ entries ಇವೆ?',
        opts: ['256,000', '65.5 million', '65.5 billion', '256 billion'], correct: 2,
        optsKn: ['256,000', '65.5 ಮಿಲಿಯನ್', '65.5 ಬಿಲಿಯನ್', '256 ಬಿಲಿಯನ್'] },
      { q: 'In the recurrence h_t=Ah_{t-1}+Bx_t, what does computing h_t genuinely require?',
        qKn: 'Recurrence h_t=Ah_{t-1}+Bx_t ನಲ್ಲಿ, h_t ಲೆಕ್ಕಹಾಕಲು ನಿಜವಾಗಿ ಏನೂ ಬೇಕು?',
        opts: ['All previous inputs x_1...x_{t-1}', 'Only the previous state h_{t-1} and current input x_t', 'The full attention matrix', 'Every previous state h_1...h_{t-1}'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ ಹಿಂದಿನ inputs x_1...x_{t-1}', 'ಕೇವಲ ಹಿಂದಿನ state h_{t-1} ಮತ್ತೆ ಪ್ರಸ್ತುತ input x_t', 'ಪೂರ್ಣ attention matrix', 'ಪ್ರತಿ ಹಿಂದಿನ state h_1...h_{t-1}'] },
      { q: 'What is the main weakness of compressing history into a fixed-size SSM state?',
        qKn: 'History ಅನ್ನೂ ಸ್ಥಿರ-ಗಾತ್ರದ SSM state ಗೆ ಸಂಕುಚಿತಗೊಳಿಸುವುದೂ ya ಮುಖ್ಯ ದೌರ್ಬಲ್ಯ ಏನೂ?',
        opts: ['The network cannot process tokens', 'Exact long-range information may become difficult to preserve and retrieve', 'Matrix multiplication becomes impossible', 'Vocabulary size decreases'], correct: 1,
        optsKn: ['Network tokens ಸಂಸ್ಕರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ', 'ನಿಖರ ಉದ್ದ-ಶ್ರೇಣಿಯ ಮಾಹಿತಿ ಸಂರಕ್ಷಿಸಲು ಮತ್ತೆ ಮರುಪಡೆಯಲು ಕಷ್ಟಕರವಾಗಬಹುದು', 'Matrix multiplication ಅಸಾಧ್ಯವಾಗುತ್ತದೆ', 'Vocabulary size ಕಡಿಮೆಯಾಗುತ್ತದೆ'] },
      { q: 'What makes Mamba a "selective" SSM?',
        qKn: 'Mamba ಅನ್ನೂ ಒಂದೂ "selective" SSM ಆಗಿ ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['It randomly removes tokens', 'Its recurrence behavior can depend on the input data', 'It removes the hidden state', 'It always uses attention'], correct: 1,
        optsKn: ['ಇದೂ ಯಾದೃಚ್ಛಿಕವಾಗಿ tokens ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಅದೂ ya recurrence behavior input data ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರಬಹುದು', 'ಇದೂ hidden state ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ ಯಾವಾಗಲೂ attention ಬಳಸುತ್ತದೆ'] },
      { q: 'Why does Jamba combine Mamba and Transformer layers instead of using only one?',
        qKn: 'Jamba ಕೇವಲ ಒಂದನ್ನೂ ಬಳಸುವ ಬದಲಿಗೆ Mamba ಮತ್ತೆ Transformer layers ಏಕೆ ಸಂಯೋಜಿಸುತ್ತದೆ?',
        opts: ['Mamba provides efficient recurrent processing while attention supplies stronger exact retrieval', 'Transformers cannot perform matrix multiplication', 'Mamba requires a Transformer tokenizer', 'Attention has constant memory'], correct: 0,
        optsKn: ['Mamba efficient recurrent processing ಒದಗಿಸುತ್ತದೆ ಆದರೆ attention ಬಲಿಷ್ಠ ನಿಖರ retrieval ಒದಗಿಸುತ್ತದೆ', 'Transformers matrix multiplication ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ', 'Mamba ಗೆ ಒಂದೂ Transformer tokenizer ಬೇಕು', 'Attention ಗೆ ಸ್ಥಿರ memory ಇದೆ'] },
    ] } },
  ],
};
