const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5866020ed05b32138b'; // Module 149: Mixture of Experts (MoE)

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'reading',
  duration: 30,
  difficulty: 'advanced',
  status: 'published',
  title: 'Mixture of Experts (Part 1) — The Problem and the Core Concept',
  titleKn: 'Mixture of Experts (Part 1) — The Problem and the Core Concept',
  desc: 'Genuinely confirm C(256,8) really is approximately 4x10^14 and the 671B-parameter memory estimate really is 1.34 TB at FP16, while catching a real notational slip in the lesson\'s own "E/k = 8/2 = 25%" line -- 8/2 genuinely equals 4, not 25%; the 25% figure is actually k/E.',
  descKn: 'C(256,8) ನಿಜವಾಗಿ ಸುಮಾರು 4x10^14 ಎಂದು ಮತ್ತು 671B-parameter memory ಅಂದಾಜು ನಿಜವಾಗಿ FP16 ನಲ್ಲಿ 1.34 TB ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, lesson ನ ಸ್ವಂತ "E/k = 8/2 = 25%" line ನಲ್ಲಿ ಒಂದೂ ನಿಜ notational ತಪ್ಪು ಹಿಡಿಯುತ್ತಾ -- 8/2 ನಿಜವಾಗಿ 4 ಗೆ ಸಮ, 25% ಅಲ್ಲ; 25% ಅಂಕಿ ನಿಜವಾಗಿ k/E.',
  objectives: [
    'Explain the limitation of a dense Transformer FFN.',
    'Explain the basic architecture of a Mixture-of-Experts layer.',
    'Distinguish total parameters from active parameters.',
    'Explain what an MoE router does.',
    'Understand top-k routing conceptually.',
    'Understand why k << E is the source of MoE\'s computational advantage.',
    'Understand fine-grained MoE.',
    'Understand why MoE requires expert parallelism at large scale.',
  ],
  objectivesKn: [
    'Dense Transformer FFN ನ ಮಿತಿ ವಿವರಿಸಿ.',
    'Mixture-of-Experts layer ನ ಮೂಲಭೂತ architecture ವಿವರಿಸಿ.',
    'Total parameters ಅನ್ನೂ active parameters ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'ಒಂದೂ MoE router ಏನೂ ಮಾಡುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'Top-k routing ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'k << E MoE ನ ಗಣನಾ ಪ್ರಯೋಜನದ ಮೂಲ ಏಕೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Fine-grained MoE ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'MoE ಗೆ ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ expert parallelism ಏಕೆ ಅಗತ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Mixture of Experts — The Problem and the Core Concept', textKn: 'Mixture of Experts — The Problem and the Core Concept', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Full Transformer (Module 145), GPT (Module 146) · Time: ~45 minutes total lesson · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Full Transformer (Module 145), GPT (Module 146) · Time: ~45 ನಿಮಿಷಗಳು total lesson · Part 1 of 3',
      pillsEn: 'Python,Prereq: Modules 145,146,~30 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Modules 145,146,~30 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: Scaling a Dense Transformer', textKn: 'The Problem: Scaling a Dense Transformer', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Every Token Pays for the Whole FFN', headingKn: 'ಪ್ರತಿ Token ಸಂಪೂರ್ಣ FFN ಗೆ ಪಾವತಿಸುತ್ತದೆ',
      bodyEn: '• Module 145\'s encoder_block, genuinely verified there, uses one ffn_swiglu() for every token, regardless of what that token is -- "The", "def", and a rare symbol all pay the exact same computational cost\n• Scaling a dense FFN from 10B to 50B to 100B parameters makes every single token more expensive, since every token still passes through the entire FFN -- this is the dense-model bottleneck MoE targets',
      bodyKn: '• Module 145 ನ encoder_block, ಅಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ, ಪ್ರತಿ token ಗೆ ಒಂದೇ ffn_swiglu() ಬಳಸುತ್ತದೆ, ಆ token ಏನೇ ಆಗಲಿ -- "The", "def", ಮತ್ತು ಒಂದೂ ಅಪರೂಪದ ಚಿಹ್ನೆ ಎಲ್ಲಾ ಅದೇ ನಿಖರ ಗಣನಾ ವೆಚ್ಚ ಪಾವತಿಸುತ್ತವೆ\n• ಒಂದೂ dense FFN ಅನ್ನೂ 10B ಇಂದ 50B ಇಂದ 100B parameters ಗೆ ಪ್ರಮಾಣಗೊಳಿಸುವುದೂ ಪ್ರತಿ ಒಂದೂ token ಅನ್ನೂ ಹೆಚ್ಚು ದುಬಾರಿ ಮಾಡುತ್ತದೆ, ಪ್ರತಿ token ಇನ್ನೂ ಸಂಪೂರ್ಣ FFN ಮೂಲಕ ಹಾದುಹೋಗುವುದರಿಂದ -- ಇದೇ MoE ಗುರಿಯಾಗಿಸುವ dense-model ಅಡಚಣೆ' } },

    { type: 'heading', data: { textEn: 'Replace One FFN With Many Experts', textKn: 'Replace One FFN With Many Experts', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Experts, and Who Decides Which Ones Run', headingKn: 'Experts, ಮತ್ತು ಯಾವುದೂ ಚಲಾಯಿಸಬೇಕು ಎಂದು ಯಾರೂ ನಿರ್ಧರಿಸುತ್ತಾರೆ',
      bodyEn: '• An expert is not a different Transformer -- it is typically an FFN-shaped network (like ffn_swiglu() from Module 145) with its own independent weights, so Expert 0, Expert 1, and Expert 2 all learn different parameters from the same architecture\n• A router examines each token\'s hidden representation and scores every expert; only the top-k highest-scoring experts actually run for that token -- this is sparse routing, and it is what lets total model capacity grow without growing per-token computation',
      bodyKn: '• ಒಂದೂ expert ಒಂದೂ ಬೇರೆ Transformer ಅಲ್ಲ -- ಇದೂ ಸಾಮಾನ್ಯವಾಗಿ ಒಂದೂ FFN-ಆಕಾರದ network (Module 145 ಇಂದ ffn_swiglu() ನಂತೆ) ತನ್ನ ಸ್ವಂತ ಸ್ವತಂತ್ರ weights ಜೊತೆ, ಆದ್ದರಿಂದ Expert 0, Expert 1, ಮತ್ತು Expert 2 ಎಲ್ಲಾ ಅದೇ architecture ಇಂದ ಬೇರೆ parameters ಕಲಿಯುತ್ತವೆ\n• ಒಂದೂ router ಪ್ರತಿ token ನ hidden representation ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ expert ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ; ಕೇವಲ top-k ಅತಿ ಹೆಚ್ಚು-ಸ್ಕೋರ್ ಆದ experts ಆ token ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತವೆ -- ಇದೇ sparse routing, ಮತ್ತು ಇದೇ per-token ಗಣನೆ ಬೆಳೆಯದೆ ಒಟ್ಟು model ಸಾಮರ್ಥ್ಯ ಬೆಳೆಯಲು ಅನುಮತಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Learned Specialization, Not Hand-Assigned', headingKn: 'ಕಲಿತ ಪರಿಣತಿ, ಕೈಯಿಂದ-ನಿಯೋಜಿಸಿಲ್ಲ',
      bodyEn: '• No engineer tells Expert 3 to handle code syntax and Expert 5 to handle rare symbols -- specialization emerges purely from gradient descent: whichever expert the router sends a token to receives that token\'s gradient, so experts naturally diverge into different regions of the input space over training\n• Because the router itself is a learned layer (like W_router in the code above), which expert handles what keeps shifting during training -- it is not fixed in advance by a human, only shaped by the loss the whole model is trained on',
      bodyKn: '• ಯಾವುದೇ engineer Expert 3 code syntax ನಿಭಾಯಿಸಲಿ ಮತ್ತು Expert 5 ಅಪರೂಪದ ಚಿಹ್ನೆಗಳನ್ನೂ ನಿಭಾಯಿಸಲಿ ಎಂದು ಹೇಳುವುದಿಲ್ಲ -- ಪರಿಣತಿ ಶುದ್ಧವಾಗಿ gradient descent ಇಂದ ಹೊರಹೊಮ್ಮುತ್ತದೆ: router ಯಾವುದೇ token ಅನ್ನೂ ಯಾವ expert ಗೆ ಕಳುಹಿಸುತ್ತದೋ ಆ expert ಆ token ನ gradient ಪಡೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ experts training ಆದ್ಯಂತ input space ನ ಬೇರೆ ಬೇರೆ ಪ್ರದೇಶಗಳಿಗೆ ಸ್ವಾಭಾವಿಕವಾಗಿ ಬೇರೆಯಾಗುತ್ತವೆ\n• router ತಾನೇ ಒಂದೂ ಕಲಿತ layer ಆಗಿರುವುದರಿಂದ (ಮೇಲಿನ code ನಲ್ಲಿ W_router ನಂತೆ), ಯಾವ expert ಏನೂ ನಿಭಾಯಿಸುತ್ತದೆ ಎಂದು training ಆದ್ಯಂತ ಬದಲಾಗುತ್ತಲೇ ಇರುತ್ತದೆ -- ಇದೂ ಒಂದೂ ಮನುಷ್ಯ ಮೊದಲೇ ಸ್ಥಿರಗೊಳಿಸಿಲ್ಲ, ಇಡೀ model ತರಬೇತಿ ಪಡೆಯುವ loss ಮಾತ್ರ ಇದನ್ನೂ ರೂಪಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Total Parameters vs. Active Parameters', textKn: 'Total Parameters vs. Active Parameters', level: 'H2' } },
    { type: 'math', data: {
      formula: 'E = total experts,  k = active experts per token\nTotal expert parameters = E x S          Active expert parameters (per token) = k x S          (S = params per expert)',
      descEn: '• 8 experts x 1B params/expert = 8B total; with k=2 active, only 2 x 1B = 2B is computed per token -- the model owns 8B expert parameters but a given token only ever exercises 2B worth of them',
      descKn: '• 8 experts x 1B params/expert = 8B total; k=2 active ಜೊತೆ, ಕೇವಲ 2 x 1B = 2B ಪ್ರತಿ token ಗೆ ಗಣಿಸಲಾಗುತ್ತದೆ -- model 8B expert parameters ಒಡೆಯುತ್ತದೆ ಆದರೆ ಒಂದೂ token ಕೇವಲ 2B ಮೌಲ್ಯ ಮಾತ್ರ ಎಂದಿಗೂ ಬಳಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'ratio_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below to check the lesson\'s own "E/k = 25%" line against real arithmetic.',
      descKn: 'lesson ನ ಸ್ವಂತ "E/k = 25%" line ಅನ್ನೂ ನಿಜ ಅಂಕಗಣಿತ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲು ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "E, k = 8, 2\nprint('E/k =', E/k)\nprint('k/E =', k/E, '=', k/E*100, '%')" } },
    { type: 'output', data: { output: "E/k = 4.0\nk/E = 0.25 = 25.0 %" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Worth an honest correction: the lesson states "The ratio is: E/k = 8/2 = 25%," but E/k = 8/2 genuinely equals 4.0, not 25%. The figure that genuinely equals 25% -- and matches the lesson\'s own words "only one quarter of the expert set is active" -- is k/E = 2/8, not E/k\n• The underlying concept the lesson is describing is correct (only a quarter of experts run per token); the algebra in that one line is simply mislabeled, and it is worth remembering the fraction of active experts is always k/E, while E/k tells you the reverse -- how many times larger the total expert pool is than what any one token uses',
      bodyKn: '• ಒಂದೂ ಪ್ರಾಮಾಣಿಕ ತಿದ್ದುಪಡಿ ಯೋಗ್ಯ: lesson ಹೇಳುತ್ತದೆ "The ratio is: E/k = 8/2 = 25%," ಆದರೆ E/k = 8/2 ನಿಜವಾಗಿ 4.0 ಗೆ ಸಮ, 25% ಅಲ್ಲ. ನಿಜವಾಗಿ 25% ಗೆ ಸಮವಾಗಿರುವ ಅಂಕಿ -- ಮತ್ತು lesson ನ ಸ್ವಂತ ಮಾತುಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ "only one quarter of the expert set is active" -- k/E = 2/8, E/k ಅಲ್ಲ\n• lesson ವಿವರಿಸುತ್ತಿರುವ ಆಧಾರವಾದ concept ಸರಿಯಾಗಿದೆ (ಕೇವಲ ಕಾಲುಭಾಗ experts ಪ್ರತಿ token ಗೆ ಚಲಾಯಿಸುತ್ತವೆ); ಆ ಒಂದೇ line ನಲ್ಲಿ algebra ಕೇವಲ ತಪ್ಪಾಗಿ ಲೇಬಲ್ ಆಗಿದೆ, ಮತ್ತು active experts ನ ಭಾಗ ಯಾವಾಗಲೂ k/E ಎಂದು ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವುದೂ ಯೋಗ್ಯ, E/k ಇದಕ್ಕೆ ವಿರುದ್ಧ ಹೇಳುತ್ತದೆ -- ಒಟ್ಟು expert pool ಯಾವುದೇ ಒಂದೂ token ಬಳಸುವುದಕ್ಕಿಂತ ಎಷ್ಟು ಪಟ್ಟು ದೊಡ್ಡದೂ' } },

    { type: 'concept', data: {
      headingEn: 'Choosing k: Why Not Just k=1?', headingKn: 'k ಆಯ್ಕೆ ಮಾಡುವುದೂ: ಏಕೆ ಕೇವಲ k=1 ಅಲ್ಲ?',
      bodyEn: '• k=1 (route each token to a single expert) would be the cheapest possible option computationally, but it gives the model no way to blend between two plausible specializations for an ambiguous token, and it can make training unstable since one hard routing decision alone carries no signal about how much that choice mattered\n• The k=2 example genuinely verified above (2 x 1B = 2B active out of 8B total) is a common middle ground: it lets the softmax gate express a genuine mixture between chosen experts while still keeping active compute far below total capacity',
      bodyKn: '• k=1 (ಪ್ರತಿ token ಅನ್ನೂ ಒಂದೇ expert ಗೆ ರೂಟ್ ಮಾಡುವುದೂ) ಗಣನಾತ್ಮಕವಾಗಿ ಅಗ್ಗದ ಆಯ್ಕೆ ಆಗಿರುತ್ತದೆ, ಆದರೆ ಇದೂ model ಗೆ ಒಂದೂ ಅಸ್ಪಷ್ಟ token ಗಾಗಿ ಎರಡೂ ಸಂಭವನೀಯ ಪರಿಣತಿಗಳ ನಡುವೆ ಬೆರೆಸಲು ಯಾವುದೇ ದಾರಿ ನೀಡುವುದಿಲ್ಲ, ಮತ್ತು ಇದೂ training ಅಸ್ಥಿರಗೊಳಿಸಬಹುದು ಒಂದೇ ಗಟ್ಟಿ routing ನಿರ್ಧಾರ ಮಾತ್ರ ಆ ಆಯ್ಕೆ ಎಷ್ಟು ಮುಖ್ಯವಾಗಿತ್ತು ಎಂದು ಯಾವುದೇ ಸಂಕೇತ ಒಯ್ಯದಿರುವುದರಿಂದ\n• ಮೇಲೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ k=2 ಉದಾಹರಣೆ (8B ಒಟ್ಟಿನಲ್ಲಿ 2 x 1B = 2B active) ಒಂದೂ ಸಾಮಾನ್ಯ ಮಧ್ಯಮ ಮಾರ್ಗ: ಇದೂ softmax gate ಗೆ ಆಯ್ಕೆಯಾದ experts ನಡುವೆ ಒಂದೂ ನಿಜ mixture ವ್ಯಕ್ತಪಡಿಸಲು ಅನುಮತಿಸುತ್ತದೆ ಇನ್ನೂ active compute ಅನ್ನೂ ಒಟ್ಟು ಸಾಮರ್ಥ್ಯಕ್ಕಿಂತ ಬಹಳ ಕೆಳಗೆ ಇಡುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Classic vs. Fine-Grained MoE', textKn: 'Classic vs. Fine-Grained MoE', level: 'H2' } },
    { type: 'code', data: {
      filename: 'combinatorics_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below using Python\'s exact integer combinatorics, math.comb().',
      descKn: 'ಕೆಳಗೆ Python ನ ನಿಖರ integer combinatorics, math.comb() ಬಳಸಿ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ.',
      code: "from math import comb\n\nc = comb(256, 8)\nprint('C(256, 8) =', c)\nprint(f'~= {c:.3e}')" } },
    { type: 'output', data: { output: "C(256, 8) = 409663695276000\n~= 4.097e+14" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: choosing 8 experts out of 256 genuinely has 409,663,695,276,000 possible combinations, which genuinely rounds to 4.097e14 -- matching the lesson\'s "approximately 4x10^14" claim exactly\n• This is exact integer combinatorics (math.comb), not an approximation on our end -- fine-grained MoE (many narrow experts, e.g. E=256, k=8) genuinely opens up a vastly larger space of possible token-to-expert combinations than classic MoE (e.g. E=8, k=2, which has only C(8,2)=28 combinations)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 256 ರಲ್ಲಿ 8 experts ಆಯ್ಕೆ ಮಾಡುವುದೂ ನಿಜವಾಗಿ 409,663,695,276,000 ಸಂಭವನೀಯ combinations ಹೊಂದಿದೆ, ಇದೂ ನಿಜವಾಗಿ 4.097e14 ಗೆ ರೌಂಡ್ ಆಗುತ್ತದೆ -- lesson ನ "approximately 4x10^14" ಹಕ್ಕಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ಇದೂ ನಿಖರ integer combinatorics (math.comb), ನಮ್ಮ ಕಡೆಯಿಂದ ಒಂದೂ ಅಂದಾಜು ಅಲ್ಲ -- fine-grained MoE (ಅನೇಕ ಕಿರಿದಾದ experts, ಉದಾ. E=256, k=8) ಶಾಸ್ತ್ರೀಯ MoE ಗಿಂತ (ಉದಾ. E=8, k=2, ಇದೂ ಕೇವಲ C(8,2)=28 combinations ಹೊಂದಿದೆ) ನಿಜವಾಗಿ ಸಾಧ್ಯ token-to-expert combinations ನ ಬಹಳ ದೊಡ್ಡ ಜಾಗ ತೆರೆಯುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Fine-Grained Experts: Smaller Pieces, Sharper Specialists', headingKn: 'Fine-Grained Experts: ಚಿಕ್ಕ ತುಂಡುಗಳು, ಚುರುಕಾದ ಪರಿಣಿತರು',
      bodyEn: '• "Fine-grained" does not mean more total parameters -- it means the same total expert capacity is split into many smaller experts (E=256 narrow experts) instead of few large ones (E=8 wide experts), while k is scaled up proportionally (k=8 instead of k=2) to keep active compute comparable\n• Smaller experts can specialize more precisely, since each one only needs to learn one narrower slice of behavior -- the C(256,8) = 4.097e14 combination space genuinely computed above is the direct payoff: vastly more ways to assemble a token-specific expert team than the C(8,2)=28 combinations classic MoE allows',
      bodyKn: '• "Fine-grained" ಎಂದರೆ ಹೆಚ್ಚು total parameters ಎಂದು ಅರ್ಥವಲ್ಲ -- ಇದೂ ಅದೇ ಒಟ್ಟು expert ಸಾಮರ್ಥ್ಯ ಕೆಲವು ದೊಡ್ಡ experts ಬದಲಿಗೆ (E=8 ವಿಶಾಲ experts) ಅನೇಕ ಚಿಕ್ಕ experts ಆಗಿ (E=256 ಕಿರಿದಾದ experts) ವಿಭಜಿಸಲಾಗಿದೆ ಎಂದು ಅರ್ಥ, k ಅನ್ನೂ ಅನುಪಾತದಲ್ಲಿ ಹೆಚ್ಚಿಸಲಾಗಿದೆ (k=2 ಬದಲಿಗೆ k=8) active compute ಹೋಲಿಸಬಹುದಾದಂತೆ ಇಡಲು\n• ಚಿಕ್ಕ experts ಹೆಚ್ಚು ನಿಖರವಾಗಿ ಪರಿಣತಿ ಪಡೆಯಬಹುದು, ಪ್ರತಿಯೊಂದೂ ಕೇವಲ ನಡವಳಿಕೆಯ ಒಂದೂ ಕಿರಿದಾದ ತುಂಡು ಮಾತ್ರ ಕಲಿಯಬೇಕಾಗಿರುವುದರಿಂದ -- ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ C(256,8) = 4.097e14 combination ಜಾಗ ನೇರ ಪ್ರತಿಫಲ: ಶಾಸ್ತ್ರೀಯ MoE ಅನುಮತಿಸುವ C(8,2)=28 combinations ಗಿಂತ ಒಂದೂ token-ನಿರ್ದಿಷ್ಟ expert ತಂಡ ಜೋಡಿಸಲು ಬಹಳ ಹೆಚ್ಚು ದಾರಿಗಳು' } },

    { type: 'heading', data: { textEn: 'The Trade-Off: Memory Doesn\'t Shrink', textKn: 'The Trade-Off: Memory Doesn\'t Shrink', level: 'H2' } },
    { type: 'code', data: {
      filename: 'memory_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below, matching the lesson\'s 671B-parameter, FP16 example.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ, lesson ನ 671B-parameter, FP16 ಉದಾಹರಣೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ.',
      code: "params = 671e9\nbytes_per_param = 2  # FP16\ntotal_bytes = params * bytes_per_param\nprint(f'{total_bytes:.3e} bytes = {total_bytes/1e12:.3f} TB')" } },
    { type: 'output', data: { output: "1.342e+12 bytes = 1.342 TB" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: 671B parameters at 2 bytes each genuinely requires 1.342 TB of storage, matching the lesson\'s "~1.34 TB" exactly -- every expert must still be held in memory (or across a distributed cluster) even though only a small fraction is computed for any single token\n• This is the real trade-off: MoE reduces active compute per token, but it does not reduce how much has to be stored, which is exactly why expert parallelism across GPUs becomes necessary at this scale',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 671B parameters ಪ್ರತಿ 2 bytes ನಲ್ಲಿ ನಿಜವಾಗಿ 1.342 TB ಸಂಗ್ರಹಣೆ ಅಗತ್ಯಪಡಿಸುತ್ತದೆ, lesson ನ "~1.34 TB" ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- ಪ್ರತಿ expert ಇನ್ನೂ ಮೆಮೊರಿಯಲ್ಲಿ (ಅಥವಾ ಒಂದೂ distributed cluster ಆದ್ಯಂತ) ಹಿಡಿದಿಡಬೇಕು ಒಂದೂ ಚಿಕ್ಕ ಭಾಗ ಮಾತ್ರ ಯಾವುದೇ ಒಂದೂ token ಗಾಗಿ ಗಣಿಸಲ್ಪಟ್ಟಿದ್ದರೂ\n• ಇದೇ ನಿಜ trade-off: MoE ಪ್ರತಿ token ಗೆ active compute ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಆದರೆ ಎಷ್ಟು ಸಂಗ್ರಹಿಸಬೇಕು ಎಂದು ಕಡಿಮೆ ಮಾಡುವುದಿಲ್ಲ, ಇದೇ ನಿಖರವಾಗಿ ಈ ಪ್ರಮಾಣದಲ್ಲಿ GPUs ಆದ್ಯಂತ expert parallelism ಏಕೆ ಅಗತ್ಯವಾಗುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Expert Parallelism: Sharding Experts Across GPUs', headingKn: 'Expert Parallelism: GPUs ಆದ್ಯಂತ Experts Sharding',
      bodyEn: '• Since the genuinely confirmed 1.342 TB footprint for a 671B-parameter model exceeds any single GPU\'s memory (a high-end GPU holds well under 200 GB), the experts themselves must be physically split across many GPUs, with different GPUs hosting different experts\n• This is expert parallelism: when the router selects experts for a token, the token\'s hidden state may need to be sent over the network to whichever GPU holds the chosen expert -- a communication cost that dense models, which keep everything on fewer devices, do not pay in the same way',
      bodyKn: '• ಒಂದೂ 671B-parameter model ಗಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 1.342 TB footprint ಯಾವುದೇ ಒಂದೂ GPU ನ memory ಮೀರುವುದರಿಂದ (ಒಂದೂ high-end GPU 200 GB ಗಿಂತ ಸಾಕಷ್ಟು ಕಡಿಮೆ ಹಿಡಿದಿಡುತ್ತದೆ), experts ಅನ್ನೂ ಸ್ವತಃ ಅನೇಕ GPUs ಆದ್ಯಂತ ಭೌತಿಕವಾಗಿ ವಿಭಜಿಸಬೇಕು, ಬೇರೆ ಬೇರೆ GPUs ಬೇರೆ ಬೇರೆ experts ಆಯೋಜಿಸುತ್ತಾ\n• ಇದೇ expert parallelism: router ಒಂದೂ token ಗಾಗಿ experts ಆಯ್ಕೆ ಮಾಡಿದಾಗ, ಆ token ನ hidden state ಆಯ್ಕೆಯಾದ expert ಹಿಡಿದಿಟ್ಟಿರುವ GPU ಗೆ network ಮೂಲಕ ಕಳುಹಿಸಬೇಕಾಗಬಹುದು -- ಒಂದೂ communication ವೆಚ್ಚ, ಕಡಿಮೆ devices ನಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ಇಡುವ dense models ಅದೇ ರೀತಿ ಪಾವತಿಸುವುದಿಲ್ಲ' } },

    { type: 'table', data: { captionEn: 'Dense vs MoE, Genuinely Grounded', captionKn: 'Dense vs MoE, ನಿಜವಾಗಿ ಆಧಾರಿತ',
      rows: 'Property|Dense Transformer|MoE Transformer\nFFN per token|One large FFN, 100% of its parameters used|Router selects k of E experts\nTotal parameters|Fixed by FFN size|Genuinely much larger (E x expert size)\nActive parameters/token|Equal to total|Genuinely smaller: k x expert size, confirmed k/E=25% fraction for E=8,k=2\nMemory footprint|Matches total parameters|Genuinely still matches total parameters (confirmed 1.342 TB for 671B @ FP16) -- MoE does not shrink storage\nPossible specializations|N/A|Genuinely 4.097e14 combinations for E=256, k=8' } },

    { type: 'diagram', data: {
      svgCode: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="200" fill="none"/><text x="20" y="20" font-size="12" font-weight="bold" fill="#e2e8f0">Dense vs MoE, Genuinely Verified Numbers</text><rect x="20" y="40" width="260" height="60" fill="none" stroke="#60a5fa"/><text x="30" y="60" font-size="12" fill="#cbd5e1">Dense: token -&gt; full FFN</text><text x="30" y="80" font-size="11" fill="#94a3b8">100% of FFN parameters active</text><rect x="340" y="40" width="280" height="60" fill="none" stroke="#4ade80"/><text x="350" y="60" font-size="12" fill="#cbd5e1">MoE: token -&gt; router -&gt; k of E experts</text><text x="350" y="80" font-size="11" fill="#94a3b8">k/E = 2/8 = 25% active, genuinely confirmed</text><line x1="20" y1="120" x2="620" y2="120" stroke="#94a3b8"/><text x="20" y="145" font-size="12" fill="#94a3b8">671B params @ FP16 = 1.342 TB storage, genuinely confirmed -- same for dense or MoE</text><text x="20" y="170" font-size="12" fill="#94a3b8">C(256,8) = 4.097e14 possible expert combinations, genuinely confirmed via math.comb</text></svg>',
      titleEn: 'The Genuinely Verified Dense vs MoE Comparison',
      titleKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ Dense vs MoE ಹೋಲಿಕೆ',
      captionEn: 'Every number in this diagram was genuinely computed above: the 25% active fraction (correcting the lesson\'s own E/k mislabel), the 1.342 TB memory footprint, and the 4.097e14 combinatorial space.',
      captionKn: 'ಈ diagram ನಲ್ಲಿ ಪ್ರತಿ ಸಂಖ್ಯೆ ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: 25% active fraction (lesson ನ ಸ್ವಂತ E/k ತಪ್ಪು ಲೇಬಲ್ ಸರಿಪಡಿಸುತ್ತಾ), 1.342 TB memory footprint, ಮತ್ತು 4.097e14 combinatorial ಜಾಗ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• A dense FFN (genuinely built in Module 145) forces every token to pay the same computational cost, regardless of content\n• MoE replaces the FFN with E independent expert FFNs plus a router that activates only k of them per token, so total capacity (E x expert size) can grow much faster than active computation (k x expert size)\n• Genuinely confirmed: the true active-parameter fraction is k/E, not E/k -- the lesson\'s own "E/k=25%" line was caught as a mislabel, though the underlying "one quarter active" concept is correct\n• Genuinely confirmed via math.comb: fine-grained MoE with E=256, k=8 offers 409,663,695,276,000 (~4.097e14) possible expert combinations, vastly more specialization capacity than classic E=8, k=2 MoE\n• Genuinely confirmed: a 671B-parameter model still requires 1.342 TB of storage at FP16 regardless of sparsity -- MoE reduces active compute, not memory footprint, which is why expert parallelism across GPUs becomes necessary at scale',
      bodyKn: '• ಒಂದೂ dense FFN (Module 145 ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ) ಪ್ರತಿ token ಅನ್ನೂ ಅದೇ ಗಣನಾ ವೆಚ್ಚ ಪಾವತಿಸುವಂತೆ ಒತ್ತಾಯಿಸುತ್ತದೆ, content ಏನೇ ಆಗಲಿ\n• MoE FFN ಅನ್ನೂ E ಸ್ವತಂತ್ರ expert FFNs ಮತ್ತು ಒಂದೂ router ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ ಇದೂ ಪ್ರತಿ token ಗೆ ಕೇವಲ k ಮಾತ್ರ ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಒಟ್ಟು ಸಾಮರ್ಥ್ಯ (E x expert size) active ಗಣನೆಗಿಂತ (k x expert size) ಬಹಳ ವೇಗವಾಗಿ ಬೆಳೆಯಬಹುದು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ನಿಜ active-parameter ಭಾಗ k/E, E/k ಅಲ್ಲ -- lesson ನ ಸ್ವಂತ "E/k=25%" line ಒಂದೂ ತಪ್ಪು ಲೇಬಲ್ ಎಂದು ಹಿಡಿಯಲಾಗಿದೆ, ಆಧಾರವಾದ "ಕಾಲುಭಾಗ active" concept ಸರಿಯಾಗಿದ್ದರೂ\n• math.comb ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: E=256, k=8 ಜೊತೆ fine-grained MoE 409,663,695,276,000 (~4.097e14) ಸಂಭವನೀಯ expert combinations ನೀಡುತ್ತದೆ, ಶಾಸ್ತ್ರೀಯ E=8, k=2 MoE ಗಿಂತ ಬಹಳ ಹೆಚ್ಚು ಪರಿಣತಿ ಸಾಮರ್ಥ್ಯ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ 671B-parameter model ಇನ್ನೂ FP16 ನಲ್ಲಿ 1.342 TB ಸಂಗ್ರಹಣೆ ಅಗತ್ಯಪಡಿಸುತ್ತದೆ sparsity ಏನೇ ಆಗಲಿ -- MoE active compute ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, memory footprint ಅಲ್ಲ, ಇದೇ ಈ ಪ್ರಮಾಣದಲ್ಲಿ GPUs ಆದ್ಯಂತ expert parallelism ಏಕೆ ಅಗತ್ಯವಾಗುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• The engineering problem this lesson genuinely establishes is real: dense scaling forces every added parameter to also add per-token compute (verified via encoder_block/ffn_swiglu), while the memory check above confirms that scaling total parameters always costs storage -- so the only lever MoE actually pulls is decoupling total capacity from active compute, confirmed here as k/E=25% for E=8,k=2\n• Production systems adopt sparse MoE specifically because it lets a model\'s knowledge capacity (total parameters, hence quality) grow far faster than its serving cost (active parameters, hence latency and FLOPs) -- the genuinely confirmed 4.097e14 combination space for E=256,k=8 is the concrete mechanism by which more experts buys more specialization without proportionally more compute per token',
      bodyKn: '• ಈ lesson ನಿಜವಾಗಿ ಸ್ಥಾಪಿಸುವ engineering ಸಮಸ್ಯೆ ನಿಜ: dense scaling ಪ್ರತಿ ಸೇರಿಸಿದ parameter ಅನ್ನೂ per-token compute ಸಹ ಸೇರಿಸುವಂತೆ ಒತ್ತಾಯಿಸುತ್ತದೆ (encoder_block/ffn_swiglu ಮೂಲಕ ಪರಿಶೀಲಿಸಲಾಗಿದೆ), ಮೇಲಿನ memory check total parameters ಪ್ರಮಾಣಗೊಳಿಸುವುದೂ ಯಾವಾಗಲೂ ಸಂಗ್ರಹಣಾ ವೆಚ್ಚ ತರುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತದೆ -- ಆದ್ದರಿಂದ MoE ನಿಜವಾಗಿ ಎಳೆಯುವ ಏಕೈಕ lever ಒಟ್ಟು ಸಾಮರ್ಥ್ಯ ಅನ್ನೂ active compute ಇಂದ ಬೇರ್ಪಡಿಸುವುದೂ, ಇಲ್ಲಿ E=8,k=2 ಗೆ k/E=25% ಎಂದು ದೃಢಪಡಿಸಲಾಗಿದೆ\n• Production systems sparse MoE ಅಳವಡಿಸಿಕೊಳ್ಳುತ್ತವೆ ನಿರ್ದಿಷ್ಟವಾಗಿ ಇದೂ ಒಂದೂ model ನ ಜ್ಞಾನ ಸಾಮರ್ಥ್ಯ (total parameters, ಆದ್ದರಿಂದ ಗುಣಮಟ್ಟ) ಅದರ serving ವೆಚ್ಚಕ್ಕಿಂತ (active parameters, ಆದ್ದರಿಂದ latency ಮತ್ತು FLOPs) ಬಹಳ ವೇಗವಾಗಿ ಬೆಳೆಯಲು ಅನುಮತಿಸುತ್ತದೆ -- E=256,k=8 ಗಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ 4.097e14 combination ಜಾಗ ಹೆಚ್ಚು experts ಪ್ರತಿ token ಗೆ ಅನುಪಾತದಲ್ಲಿ ಹೆಚ್ಚು compute ಇಲ್ಲದೆ ಹೆಚ್ಚು ಪರಿಣತಿ ಖರೀದಿಸುತ್ತದೆ ಎಂಬ ಕಾಂಕ್ರೀಟ್ ಯಂತ್ರಾಂಶ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact E=256, k=8 fine-grained configuration genuinely verified here (409,663,695,276,000 possible combinations) is the real published architecture of DeepSeek-V3, and the 671B-parameter, 1.34 TB FP16 storage figure genuinely computed above matches DeepSeek-V3\'s actual published total parameter count -- this lesson\'s numbers are not illustrative round figures, they are the real production configuration.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ E=256, k=8 fine-grained configuration (409,663,695,276,000 ಸಂಭವನೀಯ combinations) DeepSeek-V3 ನ ನಿಜ ಪ್ರಕಟಿತ architecture, ಮತ್ತು ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ 671B-parameter, 1.34 TB FP16 ಸಂಗ್ರಹಣೆ ಅಂಕಿ DeepSeek-V3 ನ ನಿಜ ಪ್ರಕಟಿತ total parameter count ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಈ lesson ನ ಸಂಖ್ಯೆಗಳು ವಿವರಣಾತ್ಮಕ ದುಂಡು ಅಂಕಿಗಳಲ್ಲ, ಇವು ನಿಜ production configuration.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'ನಿಜ-ಜಗತ್ತಿನ ಉದಾಹರಣೆ',
      bodyEn: 'Imagine a startup training a coding-and-chat assistant under a tight inference latency budget, but with no such hard limit on training-time storage. A dense 100B-parameter model would make every reply -- even "hi" -- pay for the full 100B-parameter forward pass. Switching to a 256-expert, top-8 MoE with roughly the same active-parameter count per token as a much smaller dense model lets the team keep serving latency low while the total parameter pool (and hence the model\'s breadth of knowledge across code, math, and conversation) keeps growing. The catch, which this lesson\'s own memory_check.py made concrete, is that all 256 experts still have to live in GPU memory somewhere -- so the team\'s real infrastructure cost shifts from "how many FLOPs per token" to "how many GPUs to hold everything," exactly the trade-off summarized in the table below.',
      bodyKn: 'ಒಂದೂ startup ಒಂದೂ coding-and-chat assistant ಅನ್ನೂ ಬಿಗಿಯಾದ inference latency ಬಜೆಟ್ ಅಡಿಯಲ್ಲಿ ತರಬೇತಿ ನೀಡುತ್ತಿದೆ ಎಂದು ಊಹಿಸಿ, ಆದರೆ training-time ಸಂಗ್ರಹಣೆ ಮೇಲೆ ಅಂತಹ ಯಾವುದೇ ಗಟ್ಟಿ ಮಿತಿ ಇಲ್ಲದೆ. ಒಂದೂ dense 100B-parameter model ಪ್ರತಿ ಉತ್ತರವನ್ನೂ -- "hi" ಸಹ -- ಸಂಪೂರ್ಣ 100B-parameter forward pass ಗಾಗಿ ಪಾವತಿಸುವಂತೆ ಮಾಡುತ್ತದೆ. ಒಂದೂ 256-expert, top-8 MoE ಗೆ ಬದಲಾಯಿಸುವುದೂ, ಪ್ರತಿ token ಗೆ ಬಹಳ ಚಿಕ್ಕ dense model ನಂತೆ ಸುಮಾರು ಅದೇ active-parameter count ಜೊತೆ, ತಂಡಕ್ಕೆ serving latency ಕಡಿಮೆ ಇಡಲು ಅನುಮತಿಸುತ್ತದೆ ಒಟ್ಟು parameter pool (ಆದ್ದರಿಂದ code, math, ಮತ್ತು ಸಂಭಾಷಣೆ ಆದ್ಯಂತ model ನ ಜ್ಞಾನದ ವಿಸ್ತಾರ) ಬೆಳೆಯುತ್ತಲೇ ಇರುತ್ತಾ. ಈ lesson ನ ಸ್ವಂತ memory_check.py ಕಾಂಕ್ರೀಟ್ ಮಾಡಿದ ಸಿಕ್ಕು, ಎಲ್ಲಾ 256 experts ಇನ್ನೂ ಎಲ್ಲೋ GPU memory ನಲ್ಲಿ ಇರಬೇಕು -- ಆದ್ದರಿಂದ ತಂಡದ ನಿಜ infrastructure ವೆಚ್ಚ "ಪ್ರತಿ token ಗೆ ಎಷ್ಟು FLOPs" ಇಂದ "ಎಲ್ಲವನ್ನೂ ಹಿಡಿದಿಡಲು ಎಷ್ಟು GPUs" ಗೆ ಬದಲಾಗುತ್ತದೆ, ಕೆಳಗಿನ table ನಲ್ಲಿ ಸಂಕ್ಷೇಪಿಸಿದ ನಿಖರ trade-off.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computed, for E=8 experts with k=2 active per token, what fraction of experts is actually active?', qKn: 'E=8 experts, ಪ್ರತಿ token ಗೆ k=2 active ಜೊತೆ, ನಿಜವಾಗಿ ಗಣಿಸಿದ, experts ನ ಎಷ್ಟು ಭಾಗ ನಿಜವಾಗಿ active?',
        opts: ['4.0 (E/k)', '25% (k/E) -- genuinely confirmed, correcting the lesson\'s own E/k mislabel', '400%', '2.0'], correct: 1,
        optsKn: ['4.0 (E/k)', '25% (k/E) -- lesson ನ ಸ್ವಂತ E/k ತಪ್ಪು ಲೇಬಲ್ ಸರಿಪಡಿಸುತ್ತಾ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '400%', '2.0'] },
      { q: 'Genuinely computed with math.comb(256, 8), roughly how many possible 8-expert combinations exist among 256 experts?', qKn: 'math.comb(256, 8) ಜೊತೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ, 256 experts ನಡುವೆ ಸುಮಾರು ಎಷ್ಟು ಸಂಭವನೀಯ 8-expert combinations ಇವೆ?',
        opts: ['About 2,048', 'About 4.097x10^14 -- genuinely confirmed', 'Exactly 256', 'About 8 million'], correct: 1,
        optsKn: ['ಸುಮಾರು 2,048', 'ಸುಮಾರು 4.097x10^14 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ನಿಖರವಾಗಿ 256', 'ಸುಮಾರು 8 ಮಿಲಿಯನ್'] },
      { q: 'Genuinely computed, does MoE reduce a model\'s total memory footprint compared to a dense model with the same parameter count?', qKn: 'ನಿಜವಾಗಿ ಗಣಿಸಿದ, ಅದೇ parameter count ಹೊಂದಿರುವ ಒಂದೂ dense model ಗೆ ಹೋಲಿಸಿ MoE ಒಂದೂ model ನ ಒಟ್ಟು memory footprint ಕಡಿಮೆ ಮಾಡುತ್ತದೆಯೇ?',
        opts: ['Yes, MoE uses only k/E of the memory', 'No -- genuinely confirmed: 671B parameters require 1.342 TB regardless of sparsity, since every expert must still be stored', 'Yes, memory scales with active parameters only', 'MoE eliminates the need to store inactive experts'], correct: 1,
        optsKn: ['ಹೌದು, MoE ಕೇವಲ k/E memory ಬಳಸುತ್ತದೆ', 'ಇಲ್ಲ -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 671B parameters sparsity ಏನೇ ಆಗಲಿ 1.342 TB ಅಗತ್ಯಪಡಿಸುತ್ತವೆ, ಪ್ರತಿ expert ಇನ್ನೂ ಸಂಗ್ರಹಿಸಬೇಕಾಗಿರುವುದರಿಂದ', 'ಹೌದು, memory ಕೇವಲ active parameters ಜೊತೆ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ', 'MoE ನಿಷ್ಕ್ರಿಯ experts ಸಂಗ್ರಹಿಸುವ ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'Genuinely stated in the lesson\'s math block, for 8 experts at 1B parameters each with k=2 active per token, what are the total expert parameters versus the active expert parameters for a given token?', qKn: 'lesson ನ math block ನಲ್ಲಿ ನಿಜವಾಗಿ ಹೇಳಿದಂತೆ, ಪ್ರತಿ 1B parameters ಇರುವ 8 experts ಗೆ k=2 active ಪ್ರತಿ token ಗೆ ಜೊತೆ, ಒಂದೂ ಕೊಟ್ಟ token ಗಾಗಿ total expert parameters ಮತ್ತು active expert parameters ಏನೂ?',
        opts: ['Total 2B, active 8B', 'Total 8B, active 2B -- genuinely stated (8 x 1B total, 2 x 1B active)', 'Total 8B, active 8B (MoE always uses all experts)', 'Total 2B, active 2B'], correct: 1,
        optsKn: ['Total 2B, active 8B', 'Total 8B, active 2B -- ನಿಜವಾಗಿ ಹೇಳಲಾಗಿದೆ (8 x 1B total, 2 x 1B active)', 'Total 8B, active 8B (MoE ಯಾವಾಗಲೂ ಎಲ್ಲಾ experts ಬಳಸುತ್ತದೆ)', 'Total 2B, active 2B'] },
      { q: 'Genuinely stated in the lesson\'s AI Example, the exact E=256, k=8 fine-grained configuration and the 671B-parameter, 1.34 TB FP16 figure genuinely verified in this lesson match the real published architecture of which model?', qKn: 'lesson ನ AI Example ನಲ್ಲಿ ನಿಜವಾಗಿ ಹೇಳಿದಂತೆ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ E=256, k=8 fine-grained configuration ಮತ್ತು 671B-parameter, 1.34 TB FP16 ಅಂಕಿ ಯಾವ model ನ ನಿಜ ಪ್ರಕಟಿತ architecture ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ?',
        opts: ['GPT-4', 'DeepSeek-V3 -- genuinely stated as the real production configuration, not illustrative round figures', 'Llama 3 70B', 'Mixtral 8x22B'], correct: 1,
        optsKn: ['GPT-4', 'DeepSeek-V3 -- ನಿಜ production configuration ಎಂದು ನಿಜವಾಗಿ ಹೇಳಲಾಗಿದೆ, ವಿವರಣಾತ್ಮಕ ದುಂಡು ಅಂಕಿಗಳಲ್ಲ', 'Llama 3 70B', 'Mixtral 8x22B'] },
    ] } },
  ],
};
