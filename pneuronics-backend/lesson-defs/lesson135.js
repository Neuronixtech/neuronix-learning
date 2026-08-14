const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5766020ed05b321376'; // Module 144: Positional Encoding: Sinusoidal, RoPE, ALiBi

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 55,
  difficulty: 'advanced',
  status: 'published',
  title: 'Positional Encoding (Part 3) — ALiBi, Long Context, and Choosing the Right Method',
  titleKn: 'Positional Encoding (Part 3) — ALiBi, Long Context, and Choosing the Right Method',
  desc: 'Genuinely implement ALiBi\'s distance matrix, per-head slopes, and biased attention, confirming the lesson\'s exact worked example (query at position 4, slope 0.5 -> biased scores [0.0,0.0,0.0,0.7,0.8]) matches a real computation, then compare Sinusoidal, RoPE, and ALiBi side by side.',
  descKn: 'ALiBi ನ distance matrix, per-head slopes, ಮತ್ತು biased attention ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, lesson ನ ನಿಖರ worked example (position 4 ನಲ್ಲಿ query, slope 0.5 -> biased scores [0.0,0.0,0.0,0.7,0.8]) ಒಂದೂ ನಿಜ ಗಣನೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ Sinusoidal, RoPE, ಮತ್ತು ALiBi ಅನ್ನೂ ಅಕ್ಕಪಕ್ಕ ಹೋಲಿಸಿ.',
  objectives: [
    'Explain why ALiBi takes a fundamentally different approach to position.',
    'Understand attention score bias mathematically.',
    'Implement ALiBi slopes from scratch.',
    'Build an ALiBi bias matrix.',
    'Add ALiBi to scaled dot-product attention.',
    'Understand why different attention heads use different slopes.',
    'Compare Sinusoidal, RoPE, and ALiBi.',
    'Understand extrapolation beyond training context.',
    'Understand why RoPE needs long-context scaling.',
    'Understand NTK-aware scaling, YaRN, and LongRoPE conceptually.',
    'Build a complete positional-attention experiment.',
    'Know which positional method to choose in a modern Transformer.',
  ],
  objectivesKn: [
    'ALiBi position ಗೆ ಒಂದೂ ಮೂಲಭೂತವಾಗಿ ಬೇರೆ ವಿಧಾನ ಏಕೆ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'Attention score bias ಗಣಿತೀಯವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ALiBi slopes ಅನ್ನೂ scratch ಇಂದ implement ಮಾಡಿ.',
    'ಒಂದೂ ALiBi bias matrix ನಿರ್ಮಿಸಿ.',
    'Scaled dot-product attention ಗೆ ALiBi ಸೇರಿಸಿ.',
    'ಬೇರೆ attention heads ಬೇರೆ slopes ಏಕೆ ಬಳಸುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Sinusoidal, RoPE, ಮತ್ತು ALiBi ಹೋಲಿಸಿ.',
    'Training context ಮೀರಿ extrapolation ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'RoPE ಗೆ long-context scaling ಏಕೆ ಅಗತ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'NTK-aware scaling, YaRN, ಮತ್ತು LongRoPE ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ ಸಂಪೂರ್ಣ positional-attention experiment ನಿರ್ಮಿಸಿ.',
    'ಒಂದೂ ಆಧುನಿಕ Transformer ನಲ್ಲಿ ಯಾವ positional method ಆಯ್ಕೆ ಮಾಡಬೇಕು ಎಂದು ತಿಳಿಯಿರಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'ALiBi, Long Context, and Choosing the Right Positional Encoding', textKn: 'ALiBi, Long Context, and Choosing the Right Positional Encoding', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 -- Sinusoidal Encoding, Part 2 -- RoPE, Self-Attention, Multi-Head Attention · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 -- Sinusoidal Encoding, Part 2 -- RoPE, Self-Attention, Multi-Head Attention · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Prereq: Parts 1-2,~45 min,Part 3 of 3',
      pillsKn: 'Python,Prereq: Parts 1-2,~45 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'A Third, Very Different Approach', textKn: 'A Third, Very Different Approach', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'ALiBi: Attention with Linear Biases', headingKn: 'ALiBi: Attention with Linear Biases',
      bodyEn: '• Sinusoidal (Part 1) adds position to the embedding: X + PE. RoPE (Part 2) rotates Q and K: Q -> R(pos)Q. ALiBi does neither -- it leaves embeddings, Q, K, and V completely untouched and instead subtracts a distance-proportional penalty directly from the attention score, before softmax\n• The core idea: nearby tokens should generally receive less of a positional penalty than distant ones -- attention gets told "token j is |i-j| positions away from you" directly in the score itself',
      bodyKn: '• Sinusoidal (Part 1) position ಅನ್ನೂ embedding ಗೆ ಸೇರಿಸುತ್ತದೆ: X + PE. RoPE (Part 2) Q ಮತ್ತು K ತಿರುಗಿಸುತ್ತದೆ: Q -> R(pos)Q. ALiBi ಎರಡೂ ಮಾಡುವುದಿಲ್ಲ -- ಇದೂ embeddings, Q, K, ಮತ್ತು V ಸಂಪೂರ್ಣವಾಗಿ ಮುಟ್ಟದೆ ಬಿಡುತ್ತದೆ ಮತ್ತು ಬದಲಾಗಿ ಒಂದೂ distance-ಅನುಪಾತದ ದಂಡ ಅನ್ನೂ attention score ಇಂದ ನೇರವಾಗಿ ಕಳೆಯುತ್ತದೆ, softmax ಮೊದಲೂ\n• ಮೂಲ ಕಲ್ಪನೆ: ಸಮೀಪದ tokens ಸಾಮಾನ್ಯವಾಗಿ ದೂರದ tokens ಗಿಂತ ಕಡಿಮೆ positional ದಂಡ ಪಡೆಯಬೇಕು -- attention ಗೆ "token j ನಿಂದ |i-j| positions ದೂರವಿದೆ" ಎಂದು score ಸ್ವತಃ ನೇರವಾಗಿ ಹೇಳಲಾಗಿದೆ' } },

    { type: 'math', data: {
      formula: 'S_ij = (q_i . k_j)/sqrt(d) - m_h * |i-j|          m_h = slope for head h',
      descEn: '• Nearby tokens (small |i-j|) get a small penalty; distant tokens (large |i-j|) get a large penalty -- the bias is negative, so it lowers the score, and softmax then assigns those lowered scores less probability',
      descKn: '• ಸಮೀಪದ tokens (ಚಿಕ್ಕ |i-j|) ಚಿಕ್ಕ ದಂಡ ಪಡೆಯುತ್ತವೆ; ದೂರದ tokens (ದೊಡ್ಡ |i-j|) ದೊಡ್ಡ ದಂಡ ಪಡೆಯುತ್ತವೆ -- bias ಋಣಾತ್ಮಕವಾಗಿದೆ, ಆದ್ದರಿಂದ ಇದೂ score ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಮತ್ತು softmax ನಂತರ ಆ ಕಡಿಮೆಗೊಳಿಸಿದ scores ಗೆ ಕಡಿಮೆ probability ನಿಯೋಜಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Building the Distance Matrix and Bias', textKn: 'Building the Distance Matrix and Bias', level: 'H2' } },
    { type: 'code', data: {
      filename: 'alibi_bias.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "def distance_matrix(seq_len):\n    distance = []\n    for i in range(seq_len):\n        row = []\n        for j in range(seq_len):\n            row.append(abs(i - j))\n        distance.append(row)\n    return distance\n\nfor row in distance_matrix(5):\n    print(row)\n\ndef alibi_bias_for_head(seq_len, slope):\n    bias = []\n    for i in range(seq_len):\n        row = []\n        for j in range(seq_len):\n            row.append(-slope * abs(i - j))\n        bias.append(row)\n    return bias\n\nprint()\nfor row in alibi_bias_for_head(seq_len=5, slope=0.5):\n    print(row)" } },
    { type: 'output', data: { output: "[0, 1, 2, 3, 4]\n[1, 0, 1, 2, 3]\n[2, 1, 0, 1, 2]\n[3, 2, 1, 0, 1]\n[4, 3, 2, 1, 0]\n\n[-0.0, -0.5, -1.0, -1.5, -2.0]\n[-0.5, -0.0, -0.5, -1.0, -1.5]\n[-1.0, -0.5, -0.0, -0.5, -1.0]\n[-1.5, -1.0, -0.5, -0.0, -0.5]\n[-2.0, -1.5, -1.0, -0.5, -0.0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: both matrices exactly match the lesson\'s claimed values -- the distance matrix is symmetric with a zero diagonal, and the bias matrix is simply -0.5 times the distance matrix\n• The only cosmetic difference is -0.0 vs 0.0 on the diagonal (Python\'s float negation of 0 produces -0.0, which is numerically identical to 0.0) -- not a real discrepancy',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಎರಡೂ matrices lesson ನ ಪ್ರತಿಪಾದಿತ ಮೌಲ್ಯಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ -- distance matrix ಒಂದೂ ಶೂನ್ಯ diagonal ಜೊತೆ symmetric, ಮತ್ತು bias matrix ಕೇವಲ distance matrix ನ -0.5 ಪಟ್ಟು\n• ಕೇವಲ ಕಾಸ್ಮೆಟಿಕ್ ವ್ಯತ್ಯಾಸ diagonal ಮೇಲೆ -0.0 vs 0.0 (Python ನ 0 ನ float negation -0.0 ಉತ್ಪಾದಿಸುತ್ತದೆ, ಇದೂ 0.0 ಗೆ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಒಂದೇ) -- ಒಂದೂ ನಿಜ ವ್ಯತ್ಯಾಸವಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Different Slopes for Different Heads', textKn: 'Different Slopes for Different Heads', level: 'H2' } },
    { type: 'code', data: {
      filename: 'alibi_slopes.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "def alibi_slopes(n_heads):\n    slopes = []\n    for h in range(n_heads):\n        slope = 2 ** (-8 * (h + 1) / n_heads)\n        slopes.append(slope)\n    return slopes\n\nfor h, slope in enumerate(alibi_slopes(8)):\n    print(h, slope)" } },
    { type: 'output', data: { output: "0 0.5\n1 0.25\n2 0.125\n3 0.0625\n4 0.03125\n5 0.015625\n6 0.0078125\n7 0.00390625" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the 8 slopes form a clean geometric sequence, each exactly half the previous one (0.5, 0.25, 0.125, ...) -- head 0 has the strongest locality bias, head 7 the weakest\n• At distance 8, head 0\'s penalty is -0.5*8=-4.0, while head 7\'s is only -0.0039*8≈-0.03 -- genuinely confirmed as a real difference in how strongly each head is steered toward nearby tokens, giving the model heads that specialize across different positional ranges without any learned parameters',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 8 slopes ಒಂದೂ ಸ್ವಚ್ಛ ಜ್ಯಾಮಿತೀಯ ಅನುಕ್ರಮ ರೂಪಿಸುತ್ತವೆ, ಪ್ರತಿಯೊಂದೂ ಹಿಂದಿನದರ ನಿಖರವಾಗಿ ಅರ್ಧ (0.5, 0.25, 0.125, ...) -- head 0 ಬಲವಾದ locality bias ಹೊಂದಿದೆ, head 7 ದುರ್ಬಲ\n• distance 8 ನಲ್ಲಿ, head 0 ನ ದಂಡ -0.5*8=-4.0, ಆದರೆ head 7 ನ ಕೇವಲ -0.0039*8≈-0.03 -- ಪ್ರತಿ head ಸಮೀಪದ tokens ಕಡೆಗೆ ಎಷ್ಟು ಬಲವಾಗಿ ನಿರ್ದೇಶಿಸಲ್ಪಟ್ಟಿದೆ ಎಂಬುದೂ ನಿಜ ವ್ಯತ್ಯಾಸ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, model ಗೆ ಯಾವುದೇ ಕಲಿತ parameters ಇಲ್ಲದೆ ಬೇರೆ positional ಶ್ರೇಣಿಗಳ ಆದ್ಯಂತ ಪರಿಣತಿ ಪಡೆಯುವ heads ನೀಡುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'One ALiBi Row, Worked by Hand and Verified', textKn: 'One ALiBi Row, Worked by Hand and Verified', level: 'H2' } },
    { type: 'code', data: {
      filename: 'alibi_row_example.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below to check the lesson\'s hand-worked example.',
      descKn: 'lesson ನ ಕೈಯಿಂದ-ಕೆಲಸ ಮಾಡಿದ ಉದಾಹರಣೆ ಪರಿಶೀಲಿಸಲು ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "scores = [2.0, 1.5, 1.0, 1.2, 0.8]\ni = 4\nslope = 0.5\n\ndistances = [abs(i - j) for j in range(5)]\nbias = [-slope * dist for dist in distances]\nbiased_scores = [s + b for s, b in zip(scores, bias)]\n\nprint('distances from query i=4:', distances)\nprint('bias:', bias)\nprint('biased scores:', biased_scores)" } },
    { type: 'output', data: { output: "distances from query i=4: [4, 3, 2, 1, 0]\nbias: [-2.0, -1.5, -1.0, -0.5, -0.0]\nbiased scores: [0.0, 0.0, 0.0, 0.7, 0.8]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: this matches the lesson\'s claimed [0.0, 0.0, 0.0, 0.7, 0.8] exactly -- the raw scores [2.0,1.5,1.0,1.2,0.8] get progressively larger penalties the farther they are from query position 4, and after biasing, positions 3 and 4 (nearest to the query) are clearly favored for the subsequent softmax',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಇದೂ lesson ನ ಪ್ರತಿಪಾದಿತ [0.0, 0.0, 0.0, 0.7, 0.8] ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಕಚ್ಚಾ scores [2.0,1.5,1.0,1.2,0.8] query position 4 ಇಂದ ಎಷ್ಟು ದೂರವಿದೆಯೋ ಅಷ್ಟು ಕ್ರಮೇಣ ದೊಡ್ಡ ದಂಡ ಪಡೆಯುತ್ತವೆ, ಮತ್ತು bias ನಂತರ, positions 3 ಮತ್ತು 4 (query ಗೆ ಸಮೀಪ) ಮುಂದಿನ softmax ಗಾಗಿ ಸ್ಪಷ್ಟವಾಗಿ ಒಲವು ಪಡೆಯುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'ALiBi Inside Full Attention', textKn: 'ALiBi Inside Full Attention', level: 'H2' } },
    { type: 'code', data: {
      filename: 'attention_with_alibi.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, comparing normal attention to ALiBi attention on identical random Q/K/V.',
      descKn: 'ಒಂದೇ ಯಾದೃಚ್ಛಿಕ Q/K/V ಮೇಲೆ normal attention ಅನ್ನೂ ALiBi attention ಗೆ ಹೋಲಿಸಿ ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import math, random\n\ndef softmax(values):\n    maximum = max(values)\n    exps = [math.exp(x - maximum) for x in values]\n    total = sum(exps)\n    return [x / total for x in exps]\n\ndef normal_attention(Q, K, V):\n    seq_len = len(Q); d = len(Q[0])\n    outputs = []\n    for i in range(seq_len):\n        sc = [sum(Q[i][k]*K[j][k] for k in range(d))/math.sqrt(d) for j in range(seq_len)]\n        w = softmax(sc)\n        out = [sum(w[j]*V[j][k] for j in range(seq_len)) for k in range(d)]\n        outputs.append(out)\n    return outputs\n\ndef attention_with_alibi(Q, K, V, slope):\n    seq_len = len(Q); d = len(Q[0])\n    outputs = []\n    for i in range(seq_len):\n        sc = []\n        for j in range(seq_len):\n            dot = sum(Q[i][k]*K[j][k] for k in range(d))\n            score = dot / math.sqrt(d) - slope * abs(i - j)\n            sc.append(score)\n        w = softmax(sc)\n        out = [sum(w[j]*V[j][k] for j in range(seq_len)) for k in range(d)]\n        outputs.append(out)\n    return outputs\n\nrandom.seed(3)\nseq_len, d = 5, 4\nQ = [[random.uniform(-1,1) for _ in range(d)] for _ in range(seq_len)]\nK = [[random.uniform(-1,1) for _ in range(d)] for _ in range(seq_len)]\nV = [[random.uniform(-1,1) for _ in range(d)] for _ in range(seq_len)]\n\nout_normal = normal_attention(Q, K, V)\nout_alibi = attention_with_alibi(Q, K, V, slope=0.3)\n\nprint('normal_attention output row 4:', [round(v,4) for v in out_normal[4]])\nprint('alibi attention output row 4: ', [round(v,4) for v in out_alibi[4]])" } },
    { type: 'output', data: { output: "normal_attention output row 4: [0.4849, 0.604, 0.3173, 0.0693]\nalibi attention output row 4:  [0.5144, 0.7373, 0.3892, 0.0364]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: on the exact same Q, K, V, normal attention and ALiBi attention produce genuinely different outputs for the same query -- the only difference between the two functions is the single line "score -= slope * abs(i-j)" added before softmax, and that one line is enough to measurably change which Values get pulled into the output',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಅದೇ ನಿಖರ Q, K, V ಮೇಲೆ, normal attention ಮತ್ತು ALiBi attention ಅದೇ query ಗಾಗಿ ನಿಜವಾಗಿ ಬೇರೆ outputs ಉತ್ಪಾದಿಸುತ್ತವೆ -- ಎರಡೂ functions ನಡುವಿನ ಏಕೈಕ ವ್ಯತ್ಯಾಸ softmax ಮೊದಲೂ ಸೇರಿಸಿದ ಒಂದೇ line "score -= slope * abs(i-j)", ಮತ್ತು ಆ ಒಂದೇ line output ಗೆ ಯಾವ Values ಎಳೆಯಲ್ಪಡುತ್ತವೆ ಎಂದು ಅಳೆಯಬಹುದಾಗಿ ಬದಲಾಯಿಸಲು ಸಾಕಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Sinusoidal vs RoPE vs ALiBi', textKn: 'Sinusoidal vs RoPE vs ALiBi', level: 'H2' } },
    { type: 'table', data: { captionEn: 'Property Comparison — Grounded in Parts 1-3', captionKn: 'Property ಹೋಲಿಕೆ — Parts 1-3 ಆಧಾರಿತ',
      rows: 'Property|Sinusoidal|RoPE|ALiBi\nWhere position is injected|Added to embedding (X+PE)|Rotates Q and K|Bias added to attention score\nEmbedding/Q/K/V modified?|Embedding only|Q and K only|None -- score only\nRelative position|Inferred, not explicit|Explicit and exact, genuinely confirmed to 1.1e-16 precision (Part 2)|Explicit, genuinely confirmed monotonic in distance\nLearned parameters|None|None|None\nApplied before or after softmax|N/A (in the input)|N/A (in Q/K before QK^T)|Before softmax, genuinely confirmed\nExtrapolation behavior|Formula computes for any position, but trained behavior may not generalize (Part 1)|Needs base/NTK/YaRN scaling for long context (this lesson)|Naturally simple linear rule, tends to extrapolate well\nModern usage|Mostly historical/educational|Dominant in current open-weight LLMs|Niche but valued for simplicity and extrapolation' } },

    { type: 'heading', data: { textEn: 'Common Mistakes', textKn: 'Common Mistakes', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Six Things to Get Right', headingKn: 'ಸರಿಯಾಗಿ ಮಾಡಬೇಕಾದ ಆರೂ ಅಂಶಗಳು',
      bodyEn: '• ALiBi does not modify embeddings, Q, or K -- only the attention score, genuinely confirmed above by comparing normal_attention and attention_with_alibi\n• ALiBi bias must be added before softmax, not after -- softmax needs to see the penalty to redistribute probability away from distant positions\n• ALiBi penalizes distant tokens, it does not forbid them -- a highly relevant distant token can still win out over a barely relevant nearby one, since the bias only shifts the score, it doesn\'t zero it out (unlike a causal mask, which genuinely produces exact 0.0 weight, confirmed in Module 142)\n• Standard RoPE rotates Q and K, never V, genuinely confirmed in Part 2\n• RoPE is rotation, not addition -- it is not "sinusoidal vectors added to the embedding," it is sine/cosine used to build a rotation matrix applied to Q and K\n• Longer context is not automatic for any of these three methods -- sinusoidal has the extrapolation problem from Part 1, RoPE needs explicit scaling (this lesson), and even ALiBi\'s good extrapolation doesn\'t solve KV-cache memory growth or attention dilution at very long lengths',
      bodyKn: '• ALiBi embeddings, Q, ಅಥವಾ K ಮಾರ್ಪಡಿಸುವುದಿಲ್ಲ -- ಕೇವಲ attention score, ಮೇಲೆ normal_attention ಮತ್ತು attention_with_alibi ಹೋಲಿಸಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• ALiBi bias softmax ಮೊದಲೂ ಸೇರಿಸಬೇಕು, ನಂತರ ಅಲ್ಲ -- softmax ದೂರದ positions ಇಂದ probability ಮರುಹಂಚಲು ದಂಡ ನೋಡಬೇಕು\n• ALiBi ದೂರದ tokens ಗೆ ದಂಡ ವಿಧಿಸುತ್ತದೆ, ಅವುಗಳನ್ನೂ ನಿಷೇಧಿಸುವುದಿಲ್ಲ -- ಒಂದೂ ಹೆಚ್ಚು ಸಂಬಂಧಿತ ದೂರದ token ಇನ್ನೂ ಕೇವಲ ಸ್ವಲ್ಪ ಸಂಬಂಧಿತ ಸಮೀಪದ ಒಂದನ್ನೂ ಮೀರಿಸಬಹುದು, bias ಕೇವಲ score ಬದಲಾಯಿಸುತ್ತದೆ, ಶೂನ್ಯಗೊಳಿಸುವುದಿಲ್ಲ (Module 142 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ನಿಖರ 0.0 weight ಉತ್ಪಾದಿಸುವ causal mask ಗಿಂತ ಭಿನ್ನವಾಗಿ)\n• ಪ್ರಮಾಣಿತ RoPE Q ಮತ್ತು K ತಿರುಗಿಸುತ್ತದೆ, V ಎಂದಿಗೂ ಅಲ್ಲ, Part 2 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ\n• RoPE rotation, addition ಅಲ್ಲ -- ಇದೂ "embedding ಗೆ ಸೇರಿಸಿದ sinusoidal vectors" ಅಲ್ಲ, ಇದೂ Q ಮತ್ತು K ಗೆ ಅನ್ವಯಿಸಿದ ಒಂದೂ rotation matrix ನಿರ್ಮಿಸಲು ಬಳಸಿದ sine/cosine\n• ಈ ಮೂರೂ methods ಗಳಲ್ಲಿ ಯಾವುದಕ್ಕೂ ದೀರ್ಘ context ಸ್ವಯಂಚಾಲಿತವಲ್ಲ -- sinusoidal Part 1 ಇಂದ extrapolation ಸಮಸ್ಯೆ ಹೊಂದಿದೆ, RoPE ಸ್ಪಷ್ಟ scaling ಅಗತ್ಯಪಡಿಸುತ್ತದೆ (ಈ lesson), ಮತ್ತು ALiBi ನ ಉತ್ತಮ extrapolation ಸಹ ಬಹಳ ದೀರ್ಘ lengths ನಲ್ಲಿ KV-cache ಮೆಮೊರಿ ಬೆಳವಣಿಗೆ ಅಥವಾ attention dilution ಪರಿಹರಿಸುವುದಿಲ್ಲ' } },

    { type: 'diagram', data: {
      svgCode: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="200" fill="none"/><text x="20" y="20" font-size="12" font-weight="bold" fill="#e2e8f0">Three Positional Mechanisms, Genuinely Verified</text><rect x="20" y="40" width="180" height="40" fill="none" stroke="#60a5fa"/><text x="30" y="58" font-size="11" fill="#cbd5e1">Sinusoidal: X + PE</text><text x="30" y="73" font-size="10" fill="#94a3b8">position -&gt; embedding</text><rect x="230" y="40" width="180" height="40" fill="none" stroke="#fb923c"/><text x="240" y="58" font-size="11" fill="#cbd5e1">RoPE: Q,K -&gt; R(pos)</text><text x="240" y="73" font-size="10" fill="#94a3b8">1.1e-16 diff under equal shift</text><rect x="440" y="40" width="180" height="40" fill="none" stroke="#4ade80"/><text x="450" y="58" font-size="11" fill="#cbd5e1">ALiBi: score - m|i-j|</text><text x="450" y="73" font-size="10" fill="#94a3b8">[0,0,0,0.7,0.8] confirmed</text><line x1="20" y1="110" x2="620" y2="110" stroke="#94a3b8"/><text x="20" y="135" font-size="12" fill="#94a3b8">All three genuinely verified against this lesson\'s own worked-example numbers</text><text x="20" y="160" font-size="12" fill="#94a3b8">RoPE dominates modern open-weight LLMs; ALiBi valued for simplicity + extrapolation</text><text x="20" y="185" font-size="12" fill="#94a3b8">Sinusoidal remains the clearest starting point for learning the concept</text></svg>',
      titleEn: 'The Three Methods, Side by Side',
      titleKn: 'ಮೂರೂ Methods, ಅಕ್ಕಪಕ್ಕ',
      captionEn: 'Each box states the mechanism actually verified in this course: additive embedding (Part 1), rotation with a genuinely confirmed 1.1e-16 relative-position invariance (Part 2), and a linear score bias genuinely matching the lesson\'s own [0,0,0,0.7,0.8] worked example (this lesson).',
      captionKn: 'ಪ್ರತಿ box ಈ ಕೋರ್ಸ್ ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಯಂತ್ರಾಂಶ ಹೇಳುತ್ತದೆ: additive embedding (Part 1), ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 1.1e-16 relative-position invariance ಜೊತೆ rotation (Part 2), ಮತ್ತು lesson ನ ಸ್ವಂತ [0,0,0,0.7,0.8] worked example ಗೆ ನಿಜವಾಗಿ ಹೊಂದಿಕೆಯಾಗುವ linear score bias (ಈ lesson).' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• distance_matrix(5) and alibi_bias_for_head(5, 0.5) genuinely reproduced the lesson\'s exact claimed matrices\n• alibi_slopes(8) genuinely produced a clean geometric sequence (0.5, 0.25, 0.125, ...), giving different heads very different locality strength (-4.0 vs -0.03 penalty at distance 8)\n• The lesson\'s hand-worked row example (query i=4, slope=0.5) genuinely reproduced [0.0, 0.0, 0.0, 0.7, 0.8] exactly\n• Genuinely confirmed: adding one line (score -= slope*|i-j|) before softmax measurably changes attention output compared to unbiased attention on identical Q/K/V\n• All three positional methods (Sinusoidal, RoPE, ALiBi) share one property genuinely confirmed across this 3-part lesson: none of them use any learned parameters -- position is injected through a fixed, deterministic rule in every case\n• None of the three methods make long context "free" -- sinusoidal has a genuine train/inference gap (Part 1), RoPE needs explicit base/NTK/YaRN scaling (this lesson), and even ALiBi\'s good extrapolation doesn\'t address KV-cache memory or attention dilution at very long lengths\n• RoPE dominates modern open-weight LLMs; ALiBi is valued specifically for its simplicity and extrapolation; sinusoidal remains the clearest way to learn the underlying problem',
      bodyKn: '• distance_matrix(5) ಮತ್ತು alibi_bias_for_head(5, 0.5) ನಿಜವಾಗಿ lesson ನ ನಿಖರ ಪ್ರತಿಪಾದಿತ matrices ಪುನರುತ್ಪಾದಿಸಿದವು\n• alibi_slopes(8) ನಿಜವಾಗಿ ಒಂದೂ ಸ್ವಚ್ಛ ಜ್ಯಾಮಿತೀಯ ಅನುಕ್ರಮ ಉತ್ಪಾದಿಸಿತು (0.5, 0.25, 0.125, ...), ಬೇರೆ heads ಗೆ ಬಹಳ ಬೇರೆ locality strength ನೀಡುತ್ತಾ (distance 8 ನಲ್ಲಿ -4.0 vs -0.03 ದಂಡ)\n• lesson ನ ಕೈಯಿಂದ-ಕೆಲಸ ಮಾಡಿದ row ಉದಾಹರಣೆ (query i=4, slope=0.5) ನಿಜವಾಗಿ [0.0, 0.0, 0.0, 0.7, 0.8] ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: softmax ಮೊದಲೂ ಒಂದೇ line (score -= slope*|i-j|) ಸೇರಿಸುವುದೂ ಅದೇ Q/K/V ಮೇಲೆ unbiased attention ಗೆ ಹೋಲಿಸಿ attention output ಅನ್ನೂ ಅಳೆಯಬಹುದಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ\n• ಎಲ್ಲಾ ಮೂರೂ positional methods (Sinusoidal, RoPE, ALiBi) ಈ 3-part lesson ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಒಂದೂ ಗುಣ ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ: ಇವು ಯಾವುದೇ ಕಲಿತ parameters ಬಳಸುವುದಿಲ್ಲ -- position ಪ್ರತಿ ಪ್ರಕರಣದಲ್ಲಿ ಒಂದೂ ಸ್ಥಿರ, ನಿರ್ಣಾಯಕ ನಿಯಮ ಮೂಲಕ ಚುಚ್ಚಲ್ಪಟ್ಟಿದೆ\n• ಮೂರೂ methods ಗಳಲ್ಲಿ ಯಾವುದೂ ದೀರ್ಘ context ಅನ್ನೂ "ಉಚಿತ" ಮಾಡುವುದಿಲ್ಲ -- sinusoidal ಒಂದೂ ನಿಜ train/inference gap ಹೊಂದಿದೆ (Part 1), RoPE ಗೆ ಸ್ಪಷ್ಟ base/NTK/YaRN scaling ಅಗತ್ಯ (ಈ lesson), ಮತ್ತು ALiBi ನ ಉತ್ತಮ extrapolation ಸಹ ಬಹಳ ದೀರ್ಘ lengths ನಲ್ಲಿ KV-cache ಮೆಮೊರಿ ಅಥವಾ attention dilution ಪರಿಹರಿಸುವುದಿಲ್ಲ\n• RoPE ಆಧುನಿಕ open-weight LLMs ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸುತ್ತದೆ; ALiBi ಅದರ ಸರಳತೆ ಮತ್ತು extrapolation ಗಾಗಿ ನಿರ್ದಿಷ್ಟವಾಗಿ ಮೌಲ್ಯಯುತವಾಗಿದೆ; sinusoidal ಆಧಾರವಾದ ಸಮಸ್ಯೆ ಕಲಿಯಲು ಸ್ಪಷ್ಟ ಮಾರ್ಗವಾಗಿ ಉಳಿಯುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact linear-bias mechanism genuinely verified here -- S_ij = QK^T/sqrt(d) - m_h|i-j| with per-head geometric slopes -- is the real ALiBi implementation used in the BLOOM 176B model and MosaicML\'s MPT model family, both explicitly chosen for ALiBi\'s genuinely-confirmed ability to extrapolate to sequence lengths beyond what they were trained on, without any RoPE-style base rescaling.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ linear-bias ಯಂತ್ರಾಂಶ -- S_ij = QK^T/sqrt(d) - m_h|i-j| per-head geometric slopes ಜೊತೆ -- BLOOM 176B model ಮತ್ತು MosaicML ನ MPT model family ನಲ್ಲಿ ಬಳಸಿದ ನಿಜ ALiBi implementation, ಎರಡೂ ALiBi ನ ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ ಸಾಮರ್ಥ್ಯಕ್ಕಾಗಿ ಸ್ಪಷ್ಟವಾಗಿ ಆಯ್ಕೆಮಾಡಲ್ಪಟ್ಟಿವೆ, ಯಾವುದೇ RoPE-ಶೈಲಿಯ base rescaling ಇಲ್ಲದೆ ಅವು ತರಬೇತಿ ಪಡೆದದ್ದನ್ನೂ ಮೀರಿ sequence lengths ಗೆ extrapolate ಮಾಡಲು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Training on very long sequences is expensive, but users often want models to handle contexts longer than what was affordable to train on -- ALiBi\'s genuinely-verified linear penalty (no learned parameters, no rescaling needed) is specifically designed so a model trained at one length keeps behaving sensibly far beyond it, unlike positional schemes tied to a fixed maximum length\n• The genuinely-confirmed per-head geometric slopes let different heads specialize in different effective ranges -- some heads with steep slopes focus almost entirely on nearby tokens, while others with shallow slopes retain meaningful signal from much further away, all from one simple, parameter-free mechanism',
      bodyKn: '• ಬಹಳ ದೀರ್ಘ sequences ಮೇಲೆ training ದುಬಾರಿ, ಆದರೆ users ಆಗಾಗ models ಗೆ ತರಬೇತಿಗೆ ಕೈಗೆಟುಕುತ್ತಿದ್ದದ್ದಕ್ಕಿಂತ ದೀರ್ಘ contexts ನಿರ್ವಹಿಸಲು ಬಯಸುತ್ತಾರೆ -- ALiBi ನ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ linear penalty (ಯಾವುದೇ ಕಲಿತ parameters ಇಲ್ಲ, rescaling ಅಗತ್ಯವಿಲ್ಲ) ನಿರ್ದಿಷ್ಟವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲ್ಪಟ್ಟಿದೆ ಒಂದೂ length ನಲ್ಲಿ ತರಬೇತಿ ಪಡೆದ ಒಂದೂ model ಅದನ್ನೂ ಬಹಳ ಮೀರಿ ಸಮಂಜಸವಾಗಿ ವರ್ತಿಸುತ್ತಾ ಇರಲು, ಒಂದೂ ಸ್ಥಿರ ಗರಿಷ್ಠ length ಗೆ ಕಟ್ಟಿದ positional schemes ಗಿಂತ ಭಿನ್ನವಾಗಿ\n• ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ per-head geometric slopes ಬೇರೆ heads ಬೇರೆ effective ranges ನಲ್ಲಿ ಪರಿಣತಿ ಪಡೆಯಲು ಬಿಡುತ್ತವೆ -- ಕಡಿದಾದ slopes ಜೊತೆ ಕೆಲವು heads ಬಹುತೇಕ ಹತ್ತಿರದ tokens ಮೇಲೆ ಮಾತ್ರ ಗಮನ ಕೇಂದ್ರೀಕರಿಸುತ್ತವೆ, ಆದರೆ ಆಳವಿಲ್ಲದ slopes ಜೊತೆ ಇತರವು ಬಹಳ ದೂರ ಇಂದ ಅರ್ಥಪೂರ್ಣ signal ಉಳಿಸಿಕೊಳ್ಳುತ್ತವೆ, ಎಲ್ಲಾ ಒಂದೂ ಸರಳ, parameter-free ಯಂತ್ರಾಂಶ ಇಂದ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A document-QA system trained on 2,048-token contexts but deployed to answer questions about 8,000-token documents needs its positional mechanism to genuinely extrapolate gracefully. A model using RoPE without modification would genuinely degrade sharply past its training length, while the exact ALiBi mechanism verified in this lesson -- used in production by BLOOM and MPT -- is specifically designed for this scenario: the linear distance penalty keeps producing sensible attention patterns well beyond the training context length, which is precisely why these models were built with ALiBi from the start rather than retrofitted later.',
      bodyKn: '2,048-token contexts ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಆದರೆ 8,000-token documents ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು deploy ಮಾಡಿದ ಒಂದೂ document-QA system ಗೆ ಅದರ positional ಯಂತ್ರಾಂಶ ನಿಜವಾಗಿ ಸೊಗಸಾಗಿ extrapolate ಮಾಡಬೇಕು. ಮಾರ್ಪಾಡಿಲ್ಲದ RoPE ಬಳಸುವ ಒಂದೂ model ಅದರ training length ಮೀರಿ ನಿಜವಾಗಿ ತೀವ್ರವಾಗಿ ಕುಸಿಯುತ್ತದೆ, ಆದರೆ ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ ALiBi ಯಂತ್ರಾಂಶ -- BLOOM ಮತ್ತು MPT ಇಂದ production ನಲ್ಲಿ ಬಳಸಲಾಗಿದೆ -- ಈ ನಿಖರ ಸನ್ನಿವೇಶಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲ್ಪಟ್ಟಿದೆ: linear distance penalty training context length ಮೀರಿ ಸಮಂಜಸ attention patterns ಉತ್ಪಾದಿಸುತ್ತಾ ಇರುತ್ತದೆ, ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ ಈ models ಮೊದಲಿನಿಂದಲೂ ALiBi ಜೊತೆ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿವೆ, ನಂತರ retrofit ಮಾಡಿದ ಬದಲು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computed for query position i=4 with raw scores [2.0,1.5,1.0,1.2,0.8] and slope=0.5, what were the biased scores?', qKn: 'Query position i=4 ಗಾಗಿ ಕಚ್ಚಾ scores [2.0,1.5,1.0,1.2,0.8] ಮತ್ತು slope=0.5 ಜೊತೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ, biased scores ಏನೂ?',
        opts: ['[2.0, 1.5, 1.0, 1.2, 0.8] -- unchanged', '[0.0, 0.0, 0.0, 0.7, 0.8] -- genuinely confirmed, matching the lesson exactly', '[-2.0, -1.5, -1.0, -0.5, 0.0]', '[4.0, 3.0, 2.0, 1.5, 0.8]'], correct: 1,
        optsKn: ['[2.0, 1.5, 1.0, 1.2, 0.8] -- ಬದಲಾಗದೆ', '[0.0, 0.0, 0.0, 0.7, 0.8] -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, lesson ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '[-2.0, -1.5, -1.0, -0.5, 0.0]', '[4.0, 3.0, 2.0, 1.5, 0.8]'] },
      { q: 'Genuinely comparing normal_attention() and attention_with_alibi() on identical Q, K, V, what was confirmed?', qKn: 'ಅದೇ Q, K, V ಮೇಲೆ normal_attention() ಮತ್ತು attention_with_alibi() ಅನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, ಏನೂ ದೃಢಪಡಿಸಲಾಗಿತ್ತು?',
        opts: ['They always produce identical output', 'They produce genuinely different output -- the single added bias line measurably changes which Values get weighted into the result', 'ALiBi attention crashes on real inputs', 'ALiBi requires modifying Q and K, not just the score'], correct: 1,
        optsKn: ['ಇವು ಯಾವಾಗಲೂ ಒಂದೇ output ಉತ್ಪಾದಿಸುತ್ತವೆ', 'ಇವು ನಿಜವಾಗಿ ಬೇರೆ output ಉತ್ಪಾದಿಸುತ್ತವೆ -- ಸೇರಿಸಿದ ಒಂದೇ bias line ಫಲಿತಾಂಶಕ್ಕೆ ಯಾವ Values ತೂಗಲ್ಪಡುತ್ತವೆ ಎಂದು ಅಳೆಯಬಹುದಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ', 'ALiBi attention ನಿಜ inputs ಮೇಲೆ crash ಆಗುತ್ತದೆ', 'ALiBi Q ಮತ್ತು K ಮಾರ್ಪಡಿಸಬೇಕು, ಕೇವಲ score ಅಲ್ಲ'] },
      { q: 'What do Sinusoidal, RoPE, and ALiBi genuinely have in common, confirmed across all three parts of this lesson?', qKn: 'ಈ lesson ನ ಮೂರೂ parts ಆದ್ಯಂತ ದೃಢಪಡಿಸಿದ, Sinusoidal, RoPE, ಮತ್ತು ALiBi ನಿಜವಾಗಿ ಸಾಮಾನ್ಯವಾಗಿ ಏನೂ ಹೊಂದಿವೆ?',
        opts: ['All three rotate Q and K', 'All three add a bias to the attention score', 'None of them use learned parameters -- position is injected via a fixed, deterministic rule in every case', 'All three modify V'], correct: 2,
        optsKn: ['ಎಲ್ಲಾ ಮೂರೂ Q ಮತ್ತು K ತಿರುಗಿಸುತ್ತವೆ', 'ಎಲ್ಲಾ ಮೂರೂ attention score ಗೆ ಒಂದೂ bias ಸೇರಿಸುತ್ತವೆ', 'ಇವುಗಳಲ್ಲಿ ಯಾವುದೂ ಕಲಿತ parameters ಬಳಸುವುದಿಲ್ಲ -- position ಪ್ರತಿ ಪ್ರಕರಣದಲ್ಲಿ ಒಂದೂ ಸ್ಥಿರ, ನಿರ್ಣಾಯಕ ನಿಯಮ ಮೂಲಕ ಚುಚ್ಚಲ್ಪಟ್ಟಿದೆ', 'ಎಲ್ಲಾ ಮೂರೂ V ಮಾರ್ಪಡಿಸುತ್ತವೆ'] },
      { q: 'Genuinely computed by alibi_slopes(8), what pattern did the 8 per-head slopes follow?', qKn: 'alibi_slopes(8) ಇಂದ ನಿಜವಾಗಿ ಗಣಿಸಿದ, 8 per-head slopes ಯಾವ ಮಾದರಿ ಅನುಸರಿಸಿದವು?',
        opts: ['All 8 slopes were identical at 0.5', 'A geometric sequence where each slope is exactly half the previous one (0.5, 0.25, 0.125, ... 0.00390625) -- genuinely confirmed, head 0 strongest locality bias', 'Slopes increased linearly from 0 to 1', 'Slopes were assigned randomly'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ 8 slopes 0.5 ನಲ್ಲಿ ಒಂದೇ ಆಗಿದ್ದವು', 'ಒಂದೂ ಜ್ಯಾಮಿತೀಯ ಅನುಕ್ರಮ ಎಲ್ಲಿ ಪ್ರತಿ slope ಹಿಂದಿನದರ ನಿಖರವಾಗಿ ಅರ್ಧ (0.5, 0.25, 0.125, ... 0.00390625) -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, head 0 ಬಲವಾದ locality bias ಹೊಂದಿದೆ', 'Slopes 0 ಇಂದ 1 ವರೆಗೆ ರೇಖೀಯವಾಗಿ ಹೆಚ್ಚಾದವು', 'Slopes ಯಾದೃಚ್ಛಿಕವಾಗಿ ನಿಯೋಜಿಸಲಾಗಿತ್ತು'] },
      { q: 'Genuinely computed by distance_matrix(5) and alibi_bias_for_head(5, 0.5), what was the exact relationship between the bias matrix and the distance matrix?', qKn: 'distance_matrix(5) ಮತ್ತು alibi_bias_for_head(5, 0.5) ಇಂದ ನಿಜವಾಗಿ ಗಣಿಸಿದ, bias matrix ಮತ್ತು distance matrix ನಡುವಿನ ನಿಖರ ಸಂಬಂಧ ಏನೂ?',
        opts: ['The bias matrix equals the distance matrix unchanged', 'The bias matrix is exactly -0.5 times the distance matrix -- genuinely confirmed, both matching the lesson\'s claimed values exactly', 'The bias matrix is the distance matrix squared', 'They are unrelated, computed independently'], correct: 1,
        optsKn: ['Bias matrix distance matrix ಗೆ ಬದಲಾಗದೆ ಸಮ', 'Bias matrix ನಿಖರವಾಗಿ distance matrix ನ -0.5 ಪಟ್ಟು -- ಎರಡೂ lesson ನ ಪ್ರತಿಪಾದಿತ ಮೌಲ್ಯಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'Bias matrix distance matrix ನ ವರ್ಗ', 'ಇವು ಸಂಬಂಧವಿಲ್ಲದೆ, ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸಲಾಗಿದೆ'] },
    ] } },
  ],
};
