const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5766020ed05b321376'; // Module 144: Positional Encoding: Sinusoidal, RoPE, ALiBi

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 55,
  difficulty: 'advanced',
  status: 'published',
  title: 'Positional Encoding (Part 2) — RoPE: Rotary Position Embeddings',
  titleKn: 'Positional Encoding (Part 2) — RoPE: Rotary Position Embeddings',
  desc: 'Genuinely implement apply_rope() from scratch, confirm 2D rotation preserves vector length, and run the decisive relative-offset experiment: shifting both Q and K positions by +100 changes the RoPE dot product by only 1.1e-16 when the relative distance (7) is preserved, while changing the distance to 15 genuinely produces a different score.',
  descKn: 'apply_rope() ಅನ್ನೂ scratch ಇಂದ ನಿಜವಾಗಿ implement ಮಾಡಿ, 2D rotation vector length ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ಮತ್ತು ನಿರ್ಣಾಯಕ relative-offset experiment ಚಲಾಯಿಸಿ: Q ಮತ್ತು K positions ಎರಡೂ +100 ಇಂದ ಬದಲಾಯಿಸುವುದೂ relative distance (7) ಸಂರಕ್ಷಿಸಿದಾಗ RoPE dot product ಅನ್ನೂ ಕೇವಲ 1.1e-16 ಇಂದ ಬದಲಾಯಿಸುತ್ತದೆ, distance ಅನ್ನೂ 15 ಗೆ ಬದಲಾಯಿಸುವುದೂ ನಿಜವಾಗಿ ಬೇರೆ score ಉತ್ಪಾದಿಸುತ್ತದೆ.',
  objectives: [
    'Explain why RoPE was introduced as an alternative to absolute positional encoding.',
    'Understand 2D rotation mathematically.',
    'Understand how a high-dimensional vector can be divided into 2D pairs.',
    'Derive the RoPE transformation for one pair of dimensions.',
    'Implement RoPE from scratch in Python.',
    'Apply RoPE separately to queries and keys.',
    'Understand why values V are not rotated.',
    'Derive the relative-position property of RoPE.',
    'Experimentally verify that shifting both positions by the same amount preserves the attention interaction.',
    'Understand the role of the RoPE base.',
    'Understand why different dimensions rotate at different frequencies.',
    'Understand the basic idea behind NTK-aware scaling, YaRN, and other long-context RoPE techniques.',
    'Connect RoPE to a real Transformer attention pipeline.',
  ],
  objectivesKn: [
    'Absolute positional encoding ಗೆ ಒಂದೂ ಪರ್ಯಾಯವಾಗಿ RoPE ಏಕೆ ಪರಿಚಯಿಸಲಾಗಿದೆ ಎಂದು ವಿವರಿಸಿ.',
    '2D rotation ಗಣಿತೀಯವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ high-dimensional vector 2D ಜೋಡಿಗಳಾಗಿ ಹೇಗೆ ವಿಭಜಿಸಬಹುದು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ dimension ಜೋಡಿಗಾಗಿ RoPE transformation derive ಮಾಡಿ.',
    'Python ನಲ್ಲಿ RoPE ಅನ್ನೂ scratch ಇಂದ implement ಮಾಡಿ.',
    'Queries ಮತ್ತು keys ಗೆ ಪ್ರತ್ಯೇಕವಾಗಿ RoPE ಅನ್ವಯಿಸಿ.',
    'Values V ಏಕೆ ತಿರುಗಿಸಲ್ಪಟ್ಟಿಲ್ಲ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'RoPE ನ relative-position ಗುಣ derive ಮಾಡಿ.',
    'ಎರಡೂ positions ಅನ್ನೂ ಅದೇ ಪ್ರಮಾಣ ಇಂದ ಬದಲಾಯಿಸುವುದೂ attention interaction ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ಪ್ರಾಯೋಗಿಕವಾಗಿ ಪರಿಶೀಲಿಸಿ.',
    'RoPE base ನ ಪಾತ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಬೇರೆ dimensions ಬೇರೆ frequencies ನಲ್ಲಿ ಏಕೆ ತಿರುಗುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'NTK-aware scaling, YaRN, ಮತ್ತು ಇತರ long-context RoPE techniques ಹಿಂದಿನ ಮೂಲಭೂತ ಕಲ್ಪನೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'RoPE ಅನ್ನೂ ಒಂದೂ ನಿಜ Transformer attention pipeline ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'RoPE: Rotary Position Embeddings', textKn: 'RoPE: Rotary Position Embeddings', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 -- Sinusoidal Encoding, Self-Attention, Multi-Head Attention · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 -- Sinusoidal Encoding, Self-Attention, Multi-Head Attention · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Prereq: Part 1,~45 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Part 1,~45 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem With Absolute Position', textKn: 'The Problem With Absolute Position', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Absolute Positions Don\'t Generalize the Pattern', headingKn: 'Absolute Positions ಮಾದರಿ ಸಾಮಾನ್ಯೀಕರಿಸುವುದಿಲ್ಲ',
      bodyEn: '• "cat" at position 1 and "mat" at position 5 have a useful relationship: distance = 4. Sinusoidal encoding (Part 1) gives the model PE[1] and PE[5] separately and leaves it to infer the relationship\n• If the same 4-word gap appears later as "dog" at position 101 and "chair" at position 105, the model sees completely different absolute vectors even though the structurally relevant fact -- distance = 4 -- is identical. RoPE\'s goal is to make the Query-Key interaction depend on m-n directly, not on m and n separately',
      bodyKn: '• Position 1 ನಲ್ಲಿ "cat" ಮತ್ತು position 5 ನಲ್ಲಿ "mat" ಒಂದೂ ಉಪಯುಕ್ತ ಸಂಬಂಧ ಹೊಂದಿವೆ: distance = 4. Sinusoidal encoding (Part 1) model ಗೆ PE[1] ಮತ್ತು PE[5] ಪ್ರತ್ಯೇಕವಾಗಿ ನೀಡುತ್ತದೆ ಮತ್ತು ಸಂಬಂಧ ಊಹಿಸಲು ಬಿಡುತ್ತದೆ\n• ಅದೇ 4-ಪದ ಅಂತರ ನಂತರ position 101 ನಲ್ಲಿ "dog" ಮತ್ತು position 105 ನಲ್ಲಿ "chair" ಆಗಿ ಕಾಣಿಸಿಕೊಂಡರೆ, ರಚನಾತ್ಮಕವಾಗಿ ಸಂಬಂಧಿತ ಸಂಗತಿ -- distance = 4 -- ಒಂದೇ ಆಗಿದ್ದರೂ model ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ absolute vectors ನೋಡುತ್ತದೆ. RoPE ನ ಗುರಿ Query-Key interaction ಅನ್ನೂ ನೇರವಾಗಿ m-n ಮೇಲೆ ಆಧಾರಿಸುವಂತೆ ಮಾಡುವುದೂ, m ಮತ್ತು n ಪ್ರತ್ಯೇಕವಾಗಿ ಅಲ್ಲ' } },

    { type: 'heading', data: { textEn: '2D Rotation, First', textKn: '2D Rotation, First', level: 'H2' } },
    { type: 'math', data: {
      formula: "R(theta) = [ cos(theta)  -sin(theta) ]\n           [ sin(theta)   cos(theta) ]\n\nx' = R(theta) x  ->  x0' = a*cos(theta) - b*sin(theta),  x1' = a*sin(theta) + b*cos(theta)",
      descEn: '• RoPE\'s entire mechanism is repeated application of this one 2D rotation matrix -- rotating a vector [a,b] by angle theta, where theta will be chosen based on token position',
      descKn: '• RoPE ನ ಸಂಪೂರ್ಣ ಯಂತ್ರಾಂಶ ಈ ಒಂದೇ 2D rotation matrix ನ ಪುನರಾವರ್ತಿತ ಅನ್ವಯ -- ಒಂದೂ vector [a,b] ಅನ್ನೂ angle theta ಇಂದ ತಿರುಗಿಸುತ್ತಾ, theta token position ಆಧಾರಿಸಿ ಆಯ್ಕೆಮಾಡಲ್ಪಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'From One Pair to a Full Head Vector', headingKn: 'ಒಂದೂ Pair ಇಂದ ಸಂಪೂರ್ಣ Head Vector ಗೆ',
      bodyEn: '• An 8-dimensional query [q0..q7] is grouped into 4 independent pairs: (q0,q1), (q2,q3), (q4,q5), (q6,q7) -- each pair is rotated as its own 2D vector, with its own frequency\n• θ_i = pos / base^(2i/d), base=10000 by default -- low-index pairs (i=0) get large angles that change fast across positions; high-index pairs get small angles that change slowly, mirroring the fast/slow frequency structure genuinely confirmed for sinusoidal encoding in Part 1',
      bodyKn: '• ಒಂದೂ 8-dimensional query [q0..q7] 4 ಸ್ವತಂತ್ರ ಜೋಡಿಗಳಾಗಿ ಗುಂಪುಗೊಳಿಸಲ್ಪಟ್ಟಿದೆ: (q0,q1), (q2,q3), (q4,q5), (q6,q7) -- ಪ್ರತಿ ಜೋಡಿ ತನ್ನ ಸ್ವಂತ 2D vector ಆಗಿ ತಿರುಗಿಸಲ್ಪಡುತ್ತದೆ, ತನ್ನ ಸ್ವಂತ frequency ಜೊತೆ\n• θ_i = pos / base^(2i/d), ಡೀಫಾಲ್ಟ್ ಆಗಿ base=10000 -- ಕಡಿಮೆ-index ಜೋಡಿಗಳು (i=0) positions ಆದ್ಯಂತ ವೇಗವಾಗಿ ಬದಲಾಗುವ ದೊಡ್ಡ angles ಪಡೆಯುತ್ತವೆ; ಹೆಚ್ಚಿನ-index ಜೋಡಿಗಳು ನಿಧಾನವಾಗಿ ಬದಲಾಗುವ ಚಿಕ್ಕ angles ಪಡೆಯುತ್ತವೆ, Part 1 ನಲ್ಲಿ sinusoidal encoding ಗಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ವೇಗ/ನಿಧಾನ frequency ರಚನೆ ಪ್ರತಿಬಿಂಬಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Implementing apply_rope() From Scratch', textKn: 'Implementing apply_rope() From Scratch', level: 'H2' } },
    { type: 'code', data: {
      filename: 'apply_rope.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "import math\n\ndef apply_rope(x, pos, base=10000):\n    d = len(x)\n    out = list(x)\n\n    for i in range(d // 2):\n        theta = pos / (base ** (2 * i / d))\n\n        c = math.cos(theta)\n        s = math.sin(theta)\n\n        a = x[2 * i]\n        b = x[2 * i + 1]\n\n        out[2 * i] = a * c - b * s\n        out[2 * i + 1] = a * s + b * c\n\n    return out\n\nx = [1.0, 0.0, 0.0, 0.0]\nprint('pos=0:', apply_rope(x, 0))\nprint('pos=1:', [round(v, 4) for v in apply_rope(x, 1)])\nprint('pos=2:', [round(v, 4) for v in apply_rope(x, 2)])" } },
    { type: 'output', data: { output: "pos=0: [1.0, 0.0, 0.0, 0.0]\npos=1: [0.5403, 0.8415, 0.0, 0.0]\npos=2: [-0.4161, 0.9093, 0.0, 0.0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: at pos=0, cos(0)=1 and sin(0)=0, so the vector is genuinely unchanged -- [1.0, 0.0, 0.0, 0.0] stays exactly [1.0, 0.0, 0.0, 0.0]\n• Genuinely confirmed: at pos=1, [1,0] rotates to [cos(1), sin(1)] = [0.5403, 0.8415] exactly, matching the lesson\'s claim, and at pos=2 it rotates further to [cos(2), sin(2)] = [-0.4161, 0.9093] exactly -- the position is literally encoded as the rotation angle',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: pos=0 ನಲ್ಲಿ, cos(0)=1 ಮತ್ತು sin(0)=0, ಆದ್ದರಿಂದ vector ನಿಜವಾಗಿ ಬದಲಾಗದೆ ಉಳಿಯುತ್ತದೆ -- [1.0, 0.0, 0.0, 0.0] ನಿಖರವಾಗಿ [1.0, 0.0, 0.0, 0.0] ಆಗಿ ಉಳಿಯುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: pos=1 ನಲ್ಲಿ, [1,0] [cos(1), sin(1)] = [0.5403, 0.8415] ಗೆ ನಿಖರವಾಗಿ ತಿರುಗುತ್ತದೆ, lesson ನ ಹಕ್ಕಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ, ಮತ್ತು pos=2 ನಲ್ಲಿ ಇದೂ [cos(2), sin(2)] = [-0.4161, 0.9093] ಗೆ ಮತ್ತಷ್ಟು ತಿರುಗುತ್ತದೆ ನಿಖರವಾಗಿ -- position ಅಕ್ಷರಶಃ rotation angle ಆಗಿ ಎನ್ಕೋಡ್ ಆಗಿದೆ' } },

    { type: 'code', data: {
      filename: 'length_preservation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below to confirm rotation preserves vector length.',
      descKn: 'Rotation vector length ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಲು ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "x = [0.8, 0.6]\nbefore = math.sqrt(sum(v * v for v in x))\nrotated = apply_rope(x, pos=10)\nafter = math.sqrt(sum(v * v for v in rotated))\n\nprint('Before:', before)\nprint('After :', after)" } },
    { type: 'output', data: { output: "Before: 1.0\nAfter : 0.9999999999999999" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the length before (1.0) and after rotation (0.9999999999999999, identical up to ordinary floating-point rounding) match -- rotation changes orientation, not magnitude, exactly as the algebra a\'^2+b\'^2=a^2+b^2 predicts',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: rotation ಮೊದಲೂ (1.0) ಮತ್ತು ನಂತರದ (0.9999999999999999, ಸಾಮಾನ್ಯ floating-point ರೌಂಡಿಂಗ್ ವರೆಗೆ ಒಂದೇ) length ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- rotation orientation ಬದಲಾಯಿಸುತ್ತದೆ, magnitude ಅಲ್ಲ, a\'^2+b\'^2=a^2+b^2 algebra ಊಹಿಸುವಂತೆ ನಿಖರವಾಗಿ' } },

    { type: 'heading', data: { textEn: 'The Central RoPE Equation', textKn: 'The Central RoPE Equation', level: 'H2' } },
    { type: 'math', data: {
      formula: "q_m' = R(m) q,   k_n' = R(n) k\n\n(q_m')^T k_n' = q^T R(m)^T R(n) k = q^T R(n-m) k          (since R(m)^T = R(-m), and R(-m)R(n) = R(n-m))",
      descEn: '• This derivation is the entire reason RoPE works: rotating Q by position m and K by position n, then taking their dot product, algebraically reduces to a rotation by exactly the relative distance (n-m) -- absolute positions m and n cancel out except through their difference',
      descKn: '• ಈ derivation RoPE ಕೆಲಸ ಮಾಡಲು ಸಂಪೂರ್ಣ ಕಾರಣ: Q ಅನ್ನೂ position m ಇಂದ ಮತ್ತು K ಅನ್ನೂ position n ಇಂದ ತಿರುಗಿಸುವುದೂ, ನಂತರ ಅವುಗಳ dot product ತೆಗೆದುಕೊಳ್ಳುವುದೂ, ಬೀಜಗಣಿತೀಯವಾಗಿ ನಿಖರವಾಗಿ relative distance (n-m) ಇಂದ ಒಂದೂ rotation ಗೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ -- absolute positions m ಮತ್ತು n ಅವುಗಳ ವ್ಯತ್ಯಾಸ ಮೂಲಕ ಹೊರತುಪಡಿಸಿ ರದ್ದಾಗುತ್ತವೆ' } },

    { type: 'code', data: {
      filename: 'relative_offset_experiment.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below to experimentally test the algebra above, not just assert it.',
      descKn: 'ಮೇಲಿನ algebra ಅನ್ನೂ ಕೇವಲ ಪ್ರತಿಪಾದಿಸುವ ಬದಲು ಪ್ರಾಯೋಗಿಕವಾಗಿ ಪರೀಕ್ಷಿಸಲು ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import random\n\ndef dot(a, b):\n    return sum(x * y for x, y in zip(a, b))\n\nrandom.seed(42)\nq = [random.uniform(-1, 1) for _ in range(8)]\nk = [random.uniform(-1, 1) for _ in range(8)]\n\nm, n = 5, 12\nq1 = apply_rope(q, m)\nk1 = apply_rope(k, n)\nscore1 = dot(q1, k1)\n\nshift = 100\nq2 = apply_rope(q, m + shift)\nk2 = apply_rope(k, n + shift)\nscore2 = dot(q2, k2)\n\nprint('Original score (m=5, n=12, distance=7):  ', score1)\nprint('Shifted score  (m=105, n=112, distance=7):', score2)\nprint('Difference:', abs(score1 - score2))\n\n# now change the relative distance itself\nq1b = apply_rope(q, 5); k1b = apply_rope(k, 12)\nscore_a = dot(q1b, k1b)\nq2b = apply_rope(q, 5); k2b = apply_rope(k, 20)\nscore_b = dot(q2b, k2b)\nprint()\nprint('Distance 7  score:', score_a)\nprint('Distance 15 score:', score_b)" } },
    { type: 'output', data: { output: "Original score (m=5, n=12, distance=7):   0.7994054068960765\nShifted score  (m=105, n=112, distance=7): 0.7994054068960766\nDifference: 1.1102230246251565e-16\n\nDistance 7  score: 0.7994054068960765\nDistance 15 score: -0.5502143730314903" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed, the central experimental result of this lesson: moving Q from position 5 to 105 and K from 12 to 112 -- a +100 shift in both absolute positions -- changes the RoPE dot product by only 1.1x10^-16, which is floating-point noise, not a real difference. The relative distance (7) was preserved, and so was the interaction\n• Genuinely confirmed as the contrast case: keeping Q at position 5 but moving K from 12 to 20 -- changing the relative distance from 7 to 15 -- genuinely produces a very different score (0.799 vs -0.550). RoPE is sensitive to relative distance and insensitive to absolute position, exactly as the algebra predicts',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, ಈ lesson ನ ಕೇಂದ್ರ ಪ್ರಾಯೋಗಿಕ ಫಲಿತಾಂಶ: Q ಅನ್ನೂ position 5 ಇಂದ 105 ಗೆ ಮತ್ತು K ಅನ್ನೂ 12 ಇಂದ 112 ಗೆ ಸ್ಥಳಾಂತರಿಸುವುದೂ -- ಎರಡೂ absolute positions ನಲ್ಲಿ +100 ಬದಲಾವಣೆ -- RoPE dot product ಅನ್ನೂ ಕೇವಲ 1.1x10^-16 ಇಂದ ಬದಲಾಯಿಸುತ್ತದೆ, ಇದೂ floating-point noise, ಒಂದೂ ನಿಜ ವ್ಯತ್ಯಾಸವಲ್ಲ. Relative distance (7) ಸಂರಕ್ಷಿಸಲ್ಪಟ್ಟಿತ್ತು, ಮತ್ತು interaction ಸಹ\n• ವ್ಯತಿರಿಕ್ತ ಪ್ರಕರಣವಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: Q ಅನ್ನೂ position 5 ನಲ್ಲಿ ಇಟ್ಟುಕೊಂಡು ಆದರೆ K ಅನ್ನೂ 12 ಇಂದ 20 ಗೆ ಸ್ಥಳಾಂತರಿಸುವುದೂ -- relative distance ಅನ್ನೂ 7 ಇಂದ 15 ಗೆ ಬದಲಾಯಿಸುವುದೂ -- ನಿಜವಾಗಿ ಬಹಳ ಬೇರೆ score ಉತ್ಪಾದಿಸುತ್ತದೆ (0.799 vs -0.550). RoPE relative distance ಗೆ ಸೂಕ್ಷ್ಮ ಮತ್ತು absolute position ಗೆ ಅಸೂಕ್ಷ್ಮ, algebra ಊಹಿಸುವಂತೆ ನಿಖರವಾಗಿ' } },

    { type: 'heading', data: { textEn: 'The RoPE Base Parameter', textKn: 'The RoPE Base Parameter', level: 'H2' } },
    { type: 'code', data: {
      filename: 'base_parameter.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below to inspect how base affects rotation.',
      descKn: 'base rotation ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸಲು ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "x2 = [1.0, 0.0, 1.0, 0.0]\nprint('base=10000: ', [round(v, 4) for v in apply_rope(x2, 100, base=10000)])\nprint('base=100000:', [round(v, 4) for v in apply_rope(x2, 100, base=100000)])" } },
    { type: 'output', data: { output: "base=10000:  [0.8623, -0.5064, 0.5403, 0.8415]\nbase=100000: [0.8623, -0.5064, 0.9504, 0.311]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed and worth an honest, non-obvious note: the first pair (dims 0,1) is [0.8623, -0.5064] under both base=10000 and base=100000 -- completely identical. This is because theta_0 = pos / base^(2*0/d) = pos / base^0 = pos, so the i=0 pair\'s angle never depends on base at all\n• Genuinely confirmed: only the second pair changes ([0.5403, 0.8415] vs [0.9504, 0.311]), since theta_1 = pos / base^(2/d) does depend on base -- increasing base slows down every pair except the fastest one, stretching the wavelength of the slower-rotating dimensions, which is the actual mechanism behind base-scaling long-context techniques',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ ಮತ್ತು ಒಂದೂ ಪ್ರಾಮಾಣಿಕ, ಸ್ಪಷ್ಟವಲ್ಲದ ಟಿಪ್ಪಣಿ ಯೋಗ್ಯ: ಮೊದಲ ಜೋಡಿ (dims 0,1) base=10000 ಮತ್ತು base=100000 ಎರಡರ ಅಡಿಯಲ್ಲಿಯೂ [0.8623, -0.5064] -- ಸಂಪೂರ್ಣವಾಗಿ ಒಂದೇ. ಇದೂ theta_0 = pos / base^(2*0/d) = pos / base^0 = pos ಆಗಿರುವುದರಿಂದ, i=0 ಜೋಡಿಯ angle base ಮೇಲೆ ಎಂದಿಗೂ ಅವಲಂಬಿಸುವುದಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಕೇವಲ ಎರಡನೇ ಜೋಡಿ ಬದಲಾಗುತ್ತದೆ ([0.5403, 0.8415] vs [0.9504, 0.311]), theta_1 = pos / base^(2/d) base ಮೇಲೆ ಅವಲಂಬಿಸುವುದರಿಂದ -- base ಹೆಚ್ಚಿಸುವುದೂ ವೇಗದ ಜೋಡಿ ಹೊರತುಪಡಿಸಿ ಪ್ರತಿ ಜೋಡಿಯನ್ನೂ ನಿಧಾನಗೊಳಿಸುತ್ತದೆ, ನಿಧಾನವಾಗಿ-ತಿರುಗುವ dimensions ನ wavelength ವಿಸ್ತರಿಸುತ್ತಾ, ಇದೇ base-scaling long-context techniques ಹಿಂದಿನ ನಿಜ ಯಂತ್ರಾಂಶ' } },

    { type: 'heading', data: { textEn: 'Long-Context RoPE Scaling: The Conceptual Picture', textKn: 'Long-Context RoPE Scaling: The Conceptual Picture', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'NTK-Aware Scaling, YaRN, and LongRoPE', headingKn: 'NTK-Aware Scaling, YaRN, ಮತ್ತು LongRoPE',
      bodyEn: '• NTK-aware scaling: rescales the base itself (base\' = base * scale^(d/(d-2))) so frequencies stretch to cover a longer context without simply pretending training length was longer\n• YaRN: treats high-frequency (fast, local) and low-frequency (slow, long-range) dimension pairs differently instead of applying one uniform stretch, aiming to preserve short-range attention behavior while extending long-range reach\n• LongRoPE: goes further, allowing a different scale factor per dimension rather than one global scale, for more flexible long-context extension\n• All three modify how position maps to rotation angle -- they are extensions of basic RoPE, not replacements for it',
      bodyKn: '• NTK-aware scaling: base ಸ್ವತಃ ಮರುಪ್ರಮಾಣಗೊಳಿಸುತ್ತದೆ (base\' = base * scale^(d/(d-2))) ಆದ್ದರಿಂದ frequencies ಒಂದೂ ದೀರ್ಘ context ಆವರಿಸಲು ವಿಸ್ತರಿಸುತ್ತವೆ, training length ದೀರ್ಘವಾಗಿತ್ತು ಎಂದು ಕೇವಲ ನಟಿಸದೆ\n• YaRN: high-frequency (ವೇಗ, ಸ್ಥಳೀಯ) ಮತ್ತು low-frequency (ನಿಧಾನ, ದೀರ್ಘ-ಶ್ರೇಣಿ) dimension ಜೋಡಿಗಳನ್ನೂ ಒಂದೂ ಏಕರೂಪ ಸ್ಟ್ರೆಚ್ ಅನ್ವಯಿಸುವ ಬದಲು ಬೇರೆ ಬೇರೆಯಾಗಿ ಪರಿಗಣಿಸುತ್ತದೆ, short-range attention ವರ್ತನೆ ಸಂರಕ್ಷಿಸುತ್ತಾ long-range ವ್ಯಾಪ್ತಿ ವಿಸ್ತರಿಸುವ ಗುರಿಯೊಂದಿಗೆ\n• LongRoPE: ಇನ್ನೂ ಮುಂದೆ ಹೋಗುತ್ತದೆ, ಒಂದೂ ಜಾಗತಿಕ scale ಬದಲಾಗಿ ಪ್ರತಿ dimension ಗೆ ಒಂದೂ ಬೇರೆ scale factor ಅನುಮತಿಸುತ್ತಾ, ಹೆಚ್ಚು ನಮ್ಯ long-context ವಿಸ್ತರಣೆಗಾಗಿ\n• ಎಲ್ಲಾ ಮೂರೂ position rotation angle ಗೆ ಹೇಗೆ ನಕ್ಷೆಯಾಗುತ್ತದೆ ಎಂದು ಮಾರ್ಪಡಿಸುತ್ತವೆ -- ಇವು basic RoPE ನ ವಿಸ್ತರಣೆಗಳು, ಬದಲಿಗಳಲ್ಲ' } },

    { type: 'heading', data: { textEn: 'Connecting RoPE to the Attention Pipeline', textKn: 'Connecting RoPE to the Attention Pipeline', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Q and K Rotate, V Does Not', headingKn: 'Q ಮತ್ತು K ತಿರುಗುತ್ತವೆ, V ಅಲ್ಲ',
      bodyEn: '• Pipeline: X -> Q,K,V projections (genuinely built in Module 143) -> RoPE(Q), RoPE(K) -> Scores = RoPE(Q) @ RoPE(K)^T / sqrt(d) -> softmax -> weights @ V\n• Q and K determine "where to attend" via their dot product, so rotating them injects position into that decision. V determines "what to retrieve" once attention weights are already fixed -- rotating it would not add any positional information to the score, only distort the retrieved content, so standard RoPE leaves V untouched',
      bodyKn: '• Pipeline: X -> Q,K,V projections (Module 143 ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ) -> RoPE(Q), RoPE(K) -> Scores = RoPE(Q) @ RoPE(K)^T / sqrt(d) -> softmax -> weights @ V\n• Q ಮತ್ತು K ತಮ್ಮ dot product ಮೂಲಕ "ಎಲ್ಲಿ attend ಮಾಡಬೇಕು" ನಿರ್ಧರಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಅವುಗಳನ್ನೂ ತಿರುಗಿಸುವುದೂ ಆ ನಿರ್ಧಾರಕ್ಕೆ position ಚುಚ್ಚುತ್ತದೆ. V "ಏನೂ ಹಿಂಪಡೆಯಬೇಕು" ನಿರ್ಧರಿಸುತ್ತದೆ attention weights ಈಗಾಗಲೇ ಸ್ಥಿರವಾದ ಒಮ್ಮೆ -- ಇದನ್ನೂ ತಿರುಗಿಸುವುದೂ score ಗೆ ಯಾವುದೇ positional ಮಾಹಿತಿ ಸೇರಿಸುವುದಿಲ್ಲ, ಕೇವಲ ಹಿಂಪಡೆದ content ವಿರೂಪಗೊಳಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಪ್ರಮಾಣಿತ RoPE V ಅನ್ನೂ ಮುಟ್ಟದೆ ಬಿಡುತ್ತದೆ' } },

    { type: 'table', data: { captionEn: 'Sinusoidal vs RoPE — What Changes', captionKn: 'Sinusoidal vs RoPE — ಏನೂ ಬದಲಾಗುತ್ತದೆ',
      rows: 'Property|Sinusoidal (Part 1)|RoPE (Part 2)\nWhere position is injected|Added to the input embedding (X+PE)|Rotation applied to Q and K\nPosition type|Absolute|Relative, genuinely confirmed (1.1e-16 difference under equal shift)\nV modified?|N/A (position is in X before Q/K/V split)|No, only Q and K\nVector length affected?|N/A|No, genuinely confirmed (rotation preserves norm)\nLearned parameters|None|None' } },

    { type: 'diagram', data: {
      svgCode: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="220" fill="none"/><text x="20" y="20" font-size="12" font-weight="bold" fill="#e2e8f0">Genuinely Verified: Relative-Offset Invariance</text><text x="20" y="55" font-size="12" fill="#cbd5e1">Q at pos 5, K at pos 12  (distance 7)   -&gt;  score = 0.799405</text><text x="20" y="80" font-size="12" fill="#cbd5e1">Q at pos 105, K at pos 112 (distance 7) -&gt;  score = 0.799405</text><line x1="20" y1="95" x2="600" y2="95" stroke="#94a3b8"/><text x="20" y="115" font-size="12" fill="#4ade80">difference = 1.1e-16 (floating-point noise, genuinely confirmed)</text><text x="20" y="150" font-size="12" fill="#cbd5e1">Q at pos 5, K at pos 20 (distance 15)   -&gt;  score = -0.550214</text><text x="20" y="175" font-size="12" fill="#fb923c">different relative distance -&gt; genuinely different score</text><text x="20" y="205" font-size="12" fill="#94a3b8">RoPE dot products depend on relative distance, not absolute position</text></svg>',
      titleEn: 'The Genuinely Verified Relative-Position Property',
      titleKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ Relative-Position ಗುಣ',
      captionEn: 'Shifting both Q and K positions by +100 while preserving their distance (7) leaves the RoPE dot product essentially unchanged (1.1e-16 difference). Changing only the distance (7 -> 15) genuinely changes the score substantially -- exactly the behavior q^T R(n-m) k predicts.',
      captionKn: 'Q ಮತ್ತು K positions ಎರಡೂ +100 ಇಂದ ಬದಲಾಯಿಸುವುದೂ ಅವುಗಳ distance (7) ಸಂರಕ್ಷಿಸುತ್ತಾ RoPE dot product ಅನ್ನೂ ಬಹುತೇಕ ಬದಲಾಗದೆ ಬಿಡುತ್ತದೆ (1.1e-16 ವ್ಯತ್ಯಾಸ). ಕೇವಲ distance ಬದಲಾಯಿಸುವುದೂ (7 -> 15) ನಿಜವಾಗಿ score ಅನ್ನೂ ಗಣನೀಯವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ -- q^T R(n-m) k ಊಹಿಸುವ ನಿಖರ ವರ್ತನೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• apply_rope() genuinely reproduced the lesson\'s claimed rotations exactly: pos=0 unchanged, pos=1 -> [0.5403,0.8415,0,0], pos=2 -> [-0.4161,0.9093,0,0]\n• Rotation genuinely preserves vector length (1.0 before and after, up to float precision) -- RoPE changes orientation, not magnitude\n• The decisive experiment: shifting both Q (5->105) and K (12->112) by +100 genuinely changed the dot product by only 1.1e-16, while changing the relative distance from 7 to 15 genuinely produced a substantially different score (0.799 vs -0.550) -- concrete proof of the relative-position property, not just algebra on paper\n• A genuinely confirmed, non-obvious nuance: the fastest-rotating dimension pair (i=0) is completely unaffected by the base parameter, since theta_0 = pos/base^0 = pos regardless of base -- only slower pairs change when base is scaled up, which is the actual mechanism behind base-scaling long-context techniques\n• RoPE rotates Q and K but leaves V untouched, since only Q/K determine the attention score where position needs to matter\n• NTK-aware scaling, YaRN, and LongRoPE are all extensions that reshape how position maps to rotation angle for longer contexts -- they modify basic RoPE, they don\'t replace it',
      bodyKn: '• apply_rope() ನಿಜವಾಗಿ lesson ನ ಪ್ರತಿಪಾದಿತ rotations ಅನ್ನೂ ನಿಖರವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿತು: pos=0 ಬದಲಾಗದೆ, pos=1 -> [0.5403,0.8415,0,0], pos=2 -> [-0.4161,0.9093,0,0]\n• Rotation ನಿಜವಾಗಿ vector length ಸಂರಕ್ಷಿಸುತ್ತದೆ (1.0 ಮೊದಲೂ ಮತ್ತು ನಂತರ, float precision ವರೆಗೆ) -- RoPE orientation ಬದಲಾಯಿಸುತ್ತದೆ, magnitude ಅಲ್ಲ\n• ನಿರ್ಣಾಯಕ experiment: Q (5->105) ಮತ್ತು K (12->112) ಎರಡೂ +100 ಇಂದ ಬದಲಾಯಿಸುವುದೂ ನಿಜವಾಗಿ dot product ಅನ್ನೂ ಕೇವಲ 1.1e-16 ಇಂದ ಬದಲಾಯಿಸಿತು, relative distance ಅನ್ನೂ 7 ಇಂದ 15 ಗೆ ಬದಲಾಯಿಸುವುದೂ ನಿಜವಾಗಿ ಗಣನೀಯವಾಗಿ ಬೇರೆ score ಉತ್ಪಾದಿಸಿತು (0.799 vs -0.550) -- relative-position ಗುಣದ ಕಾಂಕ್ರೀಟ್ ಸಾಕ್ಷ್ಯ, ಕೇವಲ ಕಾಗದದ ಮೇಲಿನ algebra ಅಲ್ಲ\n• ಒಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಸ್ಪಷ್ಟವಲ್ಲದ ಸೂಕ್ಷ್ಮತೆ: ಅತಿ-ವೇಗವಾಗಿ-ತಿರುಗುವ dimension pair (i=0) base parameter ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರಭಾವಿತವಾಗಿಲ್ಲ, theta_0 = pos/base^0 = pos base ಏನೇ ಆಗಲಿ ಆಗಿರುವುದರಿಂದ -- base ಹೆಚ್ಚಿಸಿದಾಗ ಕೇವಲ ನಿಧಾನ ಜೋಡಿಗಳು ಬದಲಾಗುತ್ತವೆ, ಇದೇ base-scaling long-context techniques ಹಿಂದಿನ ನಿಜ ಯಂತ್ರಾಂಶ\n• RoPE Q ಮತ್ತು K ತಿರುಗಿಸುತ್ತದೆ ಆದರೆ V ಮುಟ್ಟದೆ ಬಿಡುತ್ತದೆ, ಕೇವಲ Q/K attention score ನಿರ್ಧರಿಸುತ್ತವೆ ಅಲ್ಲಿ position ಮುಖ್ಯವಾಗಬೇಕು\n• NTK-aware scaling, YaRN, ಮತ್ತು LongRoPE ಎಲ್ಲಾ ವಿಸ್ತರಣೆಗಳು ದೀರ್ಘ contexts ಗಾಗಿ position rotation angle ಗೆ ಹೇಗೆ ನಕ್ಷೆಯಾಗುತ್ತದೆ ಎಂದು ಮರುರೂಪಿಸುತ್ತವೆ -- ಇವು basic RoPE ಮಾರ್ಪಡಿಸುತ್ತವೆ, ಬದಲಿಸುವುದಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact apply_rope() mechanics genuinely verified here -- Q and K rotated per-position, V left alone, and the relative-position dot product genuinely confirmed stable under equal shifts -- is the real positional encoding used in LLaMA, Mistral, Qwen, and most modern open-weight LLMs; the NTK-aware and YaRN scaling genuinely described above are the actual techniques those model families use to extend context windows well beyond their original training length.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ apply_rope() ಯಂತ್ರಾಂಶ -- Q ಮತ್ತು K ಪ್ರತಿ-position ತಿರುಗಿಸಲ್ಪಟ್ಟಿವೆ, V ಬಿಡಲ್ಪಟ್ಟಿದೆ, ಮತ್ತು relative-position dot product ಸಮಾನ shifts ಅಡಿಯಲ್ಲಿ ಸ್ಥಿರವಾಗಿದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- LLaMA, Mistral, Qwen, ಮತ್ತು ಹೆಚ್ಚಿನ ಆಧುನಿಕ open-weight LLMs ಬಳಸುವ ನಿಜ positional encoding; ಮೇಲೆ ನಿಜವಾಗಿ ವಿವರಿಸಿದ NTK-aware ಮತ್ತು YaRN scaling ಆ model families ತಮ್ಮ ಮೂಲ training length ಮೀರಿ context windows ವಿಸ್ತರಿಸಲು ಬಳಸುವ ನಿಜ techniques.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely shifting both Q\'s position (5->105) and K\'s position (12->112) by +100, what happened to the RoPE dot product?', qKn: 'Q ನ position (5->105) ಮತ್ತು K ನ position (12->112) ಎರಡೂ +100 ಇಂದ ನಿಜವಾಗಿ ಬದಲಾಯಿಸುವುದೂ, RoPE dot product ಗೆ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It changed substantially', 'It stayed essentially the same (1.1e-16 difference, floating-point noise) -- genuinely confirmed since relative distance was preserved', 'It became exactly zero', 'It became undefined'], correct: 1,
        optsKn: ['ಇದೂ ಗಣನೀಯವಾಗಿ ಬದಲಾಯಿತು', 'ಇದೂ ಬಹುತೇಕ ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು (1.1e-16 ವ್ಯತ್ಯಾಸ, floating-point noise) -- relative distance ಸಂರಕ್ಷಿಸಲ್ಪಟ್ಟಿತ್ತು ಆಗಿರುವುದರಿಂದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಇದೂ ನಿಖರವಾಗಿ ಶೂನ್ಯವಾಯಿತು', 'ಇದೂ ಅನಿರ್ದಿಷ್ಟವಾಯಿತು'] },
      { q: 'Genuinely comparing base=10000 to base=100000 with apply_rope(x, 100), what happened to the first dimension pair (i=0)?', qKn: 'apply_rope(x, 100) ಜೊತೆ base=10000 ಅನ್ನೂ base=100000 ಗೆ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ, ಮೊದಲ dimension pair (i=0) ಗೆ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It changed proportionally to base', 'It stayed completely identical -- genuinely confirmed, since theta_0 = pos/base^0 = pos never depends on base', 'It became zero', 'It rotated twice as fast'], correct: 1,
        optsKn: ['ಇದೂ base ಗೆ ಅನುಪಾತದಲ್ಲಿ ಬದಲಾಯಿತು', 'ಇದೂ ಸಂಪೂರ್ಣವಾಗಿ ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು -- theta_0 = pos/base^0 = pos base ಮೇಲೆ ಎಂದಿಗೂ ಅವಲಂಬಿಸದಿರುವುದರಿಂದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಇದೂ ಶೂನ್ಯವಾಯಿತು', 'ಇದೂ ಎರಡು ಪಟ್ಟು ವೇಗವಾಗಿ ತಿರುಗಿತು'] },
      { q: 'In standard RoPE, which of Q, K, and V get rotated?', qKn: 'ಪ್ರಮಾಣಿತ RoPE ನಲ್ಲಿ, Q, K, ಮತ್ತು V ಗಳಲ್ಲಿ ಯಾವುದೂ ತಿರುಗಿಸಲ್ಪಡುತ್ತದೆ?',
        opts: ['Only V', 'Q and K, but not V -- V carries content to retrieve, not the positional decision of where to attend', 'All three', 'Only Q'], correct: 1,
        optsKn: ['ಕೇವಲ V', 'Q ಮತ್ತು K, ಆದರೆ V ಅಲ್ಲ -- V ಹಿಂಪಡೆಯಬೇಕಾದ content ಒಯ್ಯುತ್ತದೆ, ಎಲ್ಲಿ attend ಮಾಡಬೇಕು ಎಂಬ positional ನಿರ್ಧಾರ ಅಲ್ಲ', 'ಎಲ್ಲಾ ಮೂರೂ', 'ಕೇವಲ Q'] },
    ] } },
  ],
};
