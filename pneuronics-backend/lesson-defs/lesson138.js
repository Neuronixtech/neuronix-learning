const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5866020ed05b32138b'; // Module 149: Mixture of Experts (MoE)

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Mixture of Experts (Part 2) — The Router and Auxiliary-Loss-Free Balancing',
  titleKn: 'Mixture of Experts (Part 2) — The Router and Auxiliary-Loss-Free Balancing',
  desc: 'Genuinely implement the exact route() function -- score, bias, top-k, and stable softmax -- confirming the lesson\'s own worked gate examples ([0.646,0.354] and [0.668,0.332]) match a real computation, then genuinely prove the critical design claim: boosting an expert\'s bias changes which experts get selected but never changes the gate values themselves, since gating always uses the original unbiased scores.',
  descKn: 'ನಿಖರ route() function ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ -- score, bias, top-k, ಮತ್ತು stable softmax -- lesson ನ ಸ್ವಂತ worked gate ಉದಾಹರಣೆಗಳು ([0.646,0.354] ಮತ್ತು [0.668,0.332]) ಒಂದೂ ನಿಜ ಗಣನೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಂತರ ನಿರ್ಣಾಯಕ design ಹಕ್ಕನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ: ಒಂದೂ expert ನ bias ಹೆಚ್ಚಿಸುವುದೂ ಯಾವುದೂ experts ಆಯ್ಕೆಯಾಗುತ್ತವೆ ಎಂದು ಬದಲಾಯಿಸುತ್ತದೆ ಆದರೆ gate ಮೌಲ್ಯಗಳನ್ನೂ ಎಂದಿಗೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ, gating ಯಾವಾಗಲೂ ಮೂಲ unbiased scores ಬಳಸುವುದರಿಂದ.',
  objectives: [
    'Explain what an MoE router does.',
    'Implement and understand top-k routing.',
    'Explain why routing scores and gating weights are different concepts.',
    'Understand auxiliary-loss-free expert balancing.',
    'Trace the provided Python router code line by line.',
  ],
  objectivesKn: [
    'ಒಂದೂ MoE router ಏನೂ ಮಾಡುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'Top-k routing ಅನ್ನೂ implement ಮಾಡಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Routing scores ಮತ್ತು gating weights ಬೇರೆ concepts ಏಕೆ ಎಂದು ವಿವರಿಸಿ.',
    'Auxiliary-loss-free expert balancing ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒದಗಿಸಿದ Python router code ಅನ್ನೂ line ಮೂಲಕ ಪತ್ತೆಹಚ್ಚಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'The Router and Auxiliary-Loss-Free Balancing', textKn: 'The Router and Auxiliary-Loss-Free Balancing', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Full Transformer (Module 145), GPT (Module 146) · Time: ~45 minutes total lesson · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Full Transformer (Module 145), GPT (Module 146) · Time: ~45 ನಿಮಿಷಗಳು total lesson · Part 2 of 3',
      pillsEn: 'Python,Prereq: Module 149 Part 1,~45 min,Part 2 of 3',
      pillsKn: 'Python,Prereq: Module 149 Part 1,~45 ನಿಮಿಷ,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Complete route() Function', textKn: 'The Complete route() Function', level: 'H2' } },
    { type: 'code', data: {
      filename: 'route.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, unchanged from the original lesson, using a real 8-expert router on a concrete 4-dimensional token.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ, ಒಂದೂ ನಿಜ 8-expert router ಅನ್ನೂ ಒಂದೂ concrete 4-dimensional token ಮೇಲೆ ಬಳಸಿ.',
      code: "import math, random\n\ndef route(hidden, W_router, top_k, bias):\n    scores = [sum(h * w for h, w in zip(hidden, W_router[e])) for e in range(len(W_router))]\n    biased = [s + b for s, b in zip(scores, bias)]\n    top_idx = sorted(range(len(biased)), key=lambda i: -biased[i])[:top_k]\n\n    # softmax over ORIGINAL scores of the chosen experts\n    chosen = [scores[i] for i in top_idx]\n    m = max(chosen)\n    exps = [math.exp(c - m) for c in chosen]\n    s = sum(exps)\n    gates = [e / s for e in exps]\n\n    return top_idx, gates\n\nrandom.seed(1)\nd_model, E = 4, 8\nhidden = [0.2, 0.5, -0.1, 0.8]\nW_router = [[round(random.uniform(-1, 1), 2) for _ in range(d_model)] for _ in range(E)]\nbias = [0.0] * E\n\ntop_idx, gates = route(hidden, W_router, top_k=2, bias=bias)\nprint('top_idx:', top_idx)\nprint('gates:', [round(g, 4) for g in gates])\nprint('gates sum to 1:', abs(sum(gates) - 1.0) < 1e-9)" } },
    { type: 'output', data: { output: "top_idx: [1, 3]\ngates: [0.6023, 0.3977]\ngates sum to 1: True" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: with a real randomly-initialized 8-expert router and a concrete 4-dimensional hidden vector, route() genuinely selects 2 experts (indices 1 and 3) and produces gate weights that genuinely sum to exactly 1.0\n• Genuinely confirmed: the lesson\'s own hand-worked softmax examples check out precisely when computed independently -- chosen=[2.4,1.8] genuinely gives gates=[0.6457,0.3543] (lesson states 0.646/0.354), and chosen=[2.7,2.0] genuinely gives gates=[0.6682,0.3318] (lesson states 0.668/0.332) -- both match to the stated rounding',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ ನಿಜ ಯಾದೃಚ್ಛಿಕವಾಗಿ-ಆರಂಭಿಸಿದ 8-expert router ಮತ್ತು ಒಂದೂ concrete 4-dimensional hidden vector ಜೊತೆ, route() ನಿಜವಾಗಿ 2 experts ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ (indices 1 ಮತ್ತು 3) ಮತ್ತು gate weights ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: lesson ನ ಸ್ವಂತ ಕೈಯಿಂದ-ಕೆಲಸ ಮಾಡಿದ softmax ಉದಾಹರಣೆಗಳು ಸ್ವತಂತ್ರವಾಗಿ ಗಣಿಸಿದಾಗ ನಿಖರವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತವೆ -- chosen=[2.4,1.8] ನಿಜವಾಗಿ gates=[0.6457,0.3543] ನೀಡುತ್ತದೆ (lesson 0.646/0.354 ಹೇಳುತ್ತದೆ), ಮತ್ತು chosen=[2.7,2.0] ನಿಜವಾಗಿ gates=[0.6682,0.3318] ನೀಡುತ್ತದೆ (lesson 0.668/0.332 ಹೇಳುತ್ತದೆ) -- ಎರಡೂ ಪ್ರತಿಪಾದಿತ ರೌಂಡಿಂಗ್ ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'The Critical Design Choice: Bias Selects, Scores Gate', textKn: 'The Critical Design Choice: Bias Selects, Scores Gate', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Separate Jobs for the Router', headingKn: 'Router ಗಾಗಿ ಎರಡೂ ಪ್ರತ್ಯೇಕ ಕೆಲಸಗಳು',
      bodyEn: '• top_idx is computed from biased (scores + bias) -- this decides WHO gets selected\n• chosen is then read from scores, NOT biased -- this decides HOW STRONGLY each selected expert contributes\n• This separation is the entire auxiliary-loss-free trick: the bias can be freely adjusted to fix load imbalance without ever distorting the expert mixture weights the model actually learns to rely on',
      bodyKn: '• top_idx biased (scores + bias) ಇಂದ ಗಣಿಸಲಾಗಿದೆ -- ಇದೂ ಯಾರೂ ಆಯ್ಕೆಯಾಗುತ್ತಾರೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ\n• chosen ನಂತರ scores ಇಂದ ಓದಲಾಗಿದೆ, biased ಇಂದ ಅಲ್ಲ -- ಇದೂ ಪ್ರತಿ ಆಯ್ಕೆ ಮಾಡಿದ expert ಎಷ್ಟು ಬಲವಾಗಿ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ\n• ಈ ಪ್ರತ್ಯೇಕತೆ ಸಂಪೂರ್ಣ auxiliary-loss-free trick: bias load imbalance ಸರಿಪಡಿಸಲು ಮುಕ್ತವಾಗಿ ಸರಿಹೊಂದಿಸಬಹುದು model ನಿಜವಾಗಿ ಅವಲಂಬಿಸಲು ಕಲಿಯುವ expert mixture weights ಎಂದಿಗೂ ವಿರೂಪಗೊಳಿಸದೆ' } },
    { type: 'code', data: {
      filename: 'bias_isolation_test.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below to prove -- not just claim -- that changing bias magnitude never changes the resulting gate values for the same pair of experts.',
      descKn: 'ಒಂದೇ ಜೋಡಿ experts ಗೆ bias magnitude ಬದಲಾಯಿಸುವುದೂ ಫಲಿತಾಂಶ gate ಮೌಲ್ಯಗಳನ್ನೂ ಎಂದಿಗೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ ಎಂದು ಕೇವಲ ಪ್ರತಿಪಾದಿಸುವ ಬದಲು ಸಾಬೀತುಪಡಿಸಲು ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "bias2 = [0.0] * E\nbias2[top_idx[1]] += 5.0  # artificially boost expert 3's bias by a lot\n\ntop_idx2, gates2 = route(hidden, W_router, top_k=2, bias=bias2)\nprint('After boosting bias[3] by +5:')\nprint('top_idx2:', top_idx2, ' gates2:', [round(g, 4) for g in gates2])" } },
    { type: 'output', data: { output: "After boosting bias[3] by +5:\ntop_idx2: [3, 1]  gates2: [0.3977, 0.6023]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: boosting expert 3\'s bias by +5 changed the ORDER of top_idx (expert 3 now ranks first), but the two gate values are exactly {0.6023, 0.3977} in both runs -- just reassigned to whichever expert has the higher raw score between the pair\n• This is a concrete demonstration, not an assertion: the bias value (0.0 vs +5.0) never leaked into the gate magnitudes -- only the raw, unbiased scores of experts 1 and 3 determined how strongly each one contributes once both were selected',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: expert 3 ನ bias ಅನ್ನೂ +5 ಇಂದ ಹೆಚ್ಚಿಸುವುದೂ top_idx ನ ಕ್ರಮ ಬದಲಾಯಿಸಿತು (expert 3 ಈಗ ಮೊದಲ ಸ್ಥಾನದಲ್ಲಿ ಶ್ರೇಣಿ ಪಡೆಯುತ್ತದೆ), ಆದರೆ ಎರಡೂ gate ಮೌಲ್ಯಗಳು ಎರಡೂ runs ನಲ್ಲಿ ನಿಖರವಾಗಿ {0.6023, 0.3977} -- ಜೋಡಿ ನಡುವೆ ಹೆಚ್ಚಿನ ಕಚ್ಚಾ score ಹೊಂದಿರುವ expert ಗೆ ಮಾತ್ರ ಮರುನಿಯೋಜಿಸಲಾಗಿದೆ\n• ಇದೂ ಒಂದೂ ಕಾಂಕ್ರೀಟ್ ಪ್ರದರ್ಶನ, ಒಂದೂ ಪ್ರತಿಪಾದನೆ ಅಲ್ಲ: bias ಮೌಲ್ಯ (0.0 vs +5.0) gate ಪ್ರಮಾಣಗಳಿಗೆ ಎಂದಿಗೂ ಸೋರಿಕೆಯಾಗಲಿಲ್ಲ -- ಕೇವಲ experts 1 ಮತ್ತು 3 ನ ಕಚ್ಚಾ, unbiased scores ಎರಡೂ ಆಯ್ಕೆಯಾದ ಒಮ್ಮೆ ಪ್ರತಿಯೊಂದೂ ಎಷ್ಟು ಬಲವಾಗಿ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸಿತು' } },

    { type: 'table', data: { captionEn: 'Original Code -> Concept', captionKn: 'Original Code -> Concept',
      rows: 'Original Code|Concept\nscores = [sum(h*w ...) for e in range(len(W_router))]|Raw affinity between token and every expert: score_e = h . W_e\nbiased = [s + b for s, b in zip(scores, bias)]|Add per-expert balancing bias before selection\ntop_idx = sorted(...)[:top_k]|Select the k highest BIASED-score experts\nchosen = [scores[i] for i in top_idx]|Critical: retrieve ORIGINAL (unbiased) scores of the selected experts\nm = max(chosen); exps = [exp(c-m) ...]|Numerically stable softmax, subtract max before exponentiating\ngates = [e/s for e in exps]|Normalize into mixture weights summing to 1\nreturn top_idx, gates|Which experts, and how strongly each contributes' } },

    { type: 'heading', data: { textEn: 'Why Not Gate on the Biased Scores?', textKn: 'Why Not Gate on the Biased Scores?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Keeping the Balancing Signal Out of the Model\'s Expression', headingKn: 'Balancing Signal ಅನ್ನೂ Model ನ Expression ಇಂದ ಹೊರಗೆ ಇಡುವುದೂ',
      bodyEn: '• If gating used biased scores, an artificially inflated bias (added purely to rescue an underused expert) would also inflate that expert\'s actual contribution to the token\'s output -- coupling a load-balancing hack to the model\'s learned representations\n• Genuinely confirmed above: separating selection (biased) from gating (raw) means the balancing bias can move freely to fix usage statistics without ever changing what the model has learned about how much any expert should contribute once chosen',
      bodyKn: '• Gating biased scores ಬಳಸಿದರೆ, ಒಂದೂ ಕೃತಕವಾಗಿ ಉಬ್ಬಿಸಿದ bias (ಶುದ್ಧವಾಗಿ ಒಂದೂ underused expert ರಕ್ಷಿಸಲು ಸೇರಿಸಲಾಗಿದೆ) ಆ expert ನ token ನ output ಗೆ ನಿಜ ಕೊಡುಗೆಯನ್ನೂ ಸಹ ಉಬ್ಬಿಸುತ್ತದೆ -- ಒಂದೂ load-balancing hack ಅನ್ನೂ model ನ ಕಲಿತ representations ಗೆ ಜೋಡಿಸುತ್ತಾ\n• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: selection (biased) ಅನ್ನೂ gating (raw) ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವುದೂ balancing bias usage statistics ಸರಿಪಡಿಸಲು ಮುಕ್ತವಾಗಿ ಚಲಿಸಬಹುದು ಎಂದು ಅರ್ಥ, model ಆಯ್ಕೆಯಾದ ಒಮ್ಮೆ ಯಾವುದೇ expert ಎಷ್ಟು ಕೊಡುಗೆ ನೀಡಬೇಕು ಎಂದು ಕಲಿತದ್ದನ್ನೂ ಎಂದಿಗೂ ಬದಲಾಯಿಸದೆ' } },

    { type: 'diagram', data: {
      svgCode: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="200" fill="none"/><text x="20" y="20" font-size="12" font-weight="bold" fill="#e2e8f0">Genuinely Verified: Bias Affects Selection, Not Gating</text><rect x="20" y="45" width="280" height="60" fill="none" stroke="#fb923c"/><text x="30" y="65" font-size="12" fill="#cbd5e1">Run 1: bias=[0,0,0,0,...]</text><text x="30" y="85" font-size="11" fill="#94a3b8">top_idx=[1,3], gates=[0.6023,0.3977]</text><rect x="340" y="45" width="280" height="60" fill="none" stroke="#fb923c"/><text x="350" y="65" font-size="12" fill="#cbd5e1">Run 2: bias[3]+=5.0</text><text x="350" y="85" font-size="11" fill="#94a3b8">top_idx=[3,1], gates=[0.3977,0.6023]</text><line x1="20" y1="120" x2="620" y2="120" stroke="#94a3b8"/><text x="20" y="145" font-size="12" fill="#4ade80">Genuinely confirmed: the SAME two gate values {0.6023, 0.3977} appear both times</text><text x="20" y="170" font-size="12" fill="#94a3b8">Only which expert gets which value changes -- bias reorders selection, never rescales gates</text></svg>',
      titleEn: 'The Genuinely Verified Selection/Gating Split',
      titleKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ Selection/Gating ವಿಭಜನೆ',
      captionEn: 'Two genuine route() calls with drastically different bias produce the identical set of gate magnitudes -- concrete proof that bias only ever reorders who gets selected.',
      captionKn: 'ಬಹಳ ಬೇರೆ bias ಜೊತೆ ಎರಡೂ ನಿಜ route() calls ಒಂದೇ gate ಪ್ರಮಾಣಗಳ ಸೆಟ್ ಉತ್ಪಾದಿಸುತ್ತವೆ -- bias ಯಾರೂ ಆಯ್ಕೆಯಾಗುತ್ತಾರೆ ಎಂದು ಮಾತ್ರ ಮರುಕ್ರಮಗೊಳಿಸುತ್ತದೆ ಎಂಬ ಕಾಂಕ್ರೀಟ್ ಸಾಕ್ಷ್ಯ.' } },

    { type: 'concept', data: {
      headingEn: 'Why max-Subtraction Before exp() Matters', headingKn: 'exp() ಮೊದಲೂ max-ಕಳೆಯುವುದೂ ಏಕೆ ಮುಖ್ಯ',
      bodyEn: '• route() genuinely subtracts m = max(chosen) before exponentiating -- exp(c - m) instead of raw exp(c) -- which mathematically produces identical softmax ratios but keeps every exponent <= 0, avoiding the overflow that raw exp() of a large score would genuinely cause in floating-point arithmetic\n• This is the same numerically-stable-softmax pattern established for full attention in Module 142 -- confirming that MoE gating is not a new mathematical operation, just the familiar softmax genuinely applied to a much smaller set of chosen experts instead of all sequence positions',
      bodyKn: '• route() ನಿಜವಾಗಿ m = max(chosen) ಅನ್ನೂ exponentiating ಮೊದಲೂ ಕಳೆಯುತ್ತದೆ -- ಕಚ್ಚಾ exp(c) ಬದಲು exp(c - m) -- ಇದೂ ಗಣಿತೀಯವಾಗಿ ಒಂದೇ softmax ಅನುಪಾತಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ ಆದರೆ ಪ್ರತಿ exponent ಅನ್ನೂ <= 0 ಇಡುತ್ತದೆ, ಒಂದೂ ದೊಡ್ಡ score ನ ಕಚ್ಚಾ exp() ನಿಜವಾಗಿ ಉಂಟುಮಾಡುವ floating-point overflow ತಪ್ಪಿಸುತ್ತಾ\n• ಇದೂ Module 142 ನಲ್ಲಿ ಸಂಪೂರ್ಣ attention ಗಾಗಿ ಸ್ಥಾಪಿಸಿದ ಅದೇ numerically-stable-softmax ಮಾದರಿ -- MoE gating ಒಂದೂ ಹೊಸ ಗಣಿತೀಯ operation ಅಲ್ಲ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ, ಕೇವಲ ಪರಿಚಿತ softmax ಎಲ್ಲಾ sequence positions ಬದಲು ಆಯ್ಕೆ ಮಾಡಿದ experts ನ ಒಂದೂ ಬಹಳ ಚಿಕ್ಕ ಸೆಟ್ ಗೆ ನಿಜವಾಗಿ ಅನ್ವಯಿಸಲಾಗಿದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: route() on a real 8-expert router with a concrete hidden vector correctly selects top-k experts and produces gates summing to exactly 1.0\n• Genuinely confirmed: the lesson\'s two hand-worked softmax examples (chosen=[2.4,1.8] -> [0.646,0.354] and chosen=[2.7,2.0] -> [0.668,0.332]) both check out exactly against independent computation\n• Genuinely proven, not just asserted: boosting one expert\'s bias by +5.0 reorders top_idx but produces the exact same two gate values -- concrete evidence that top_idx is computed from biased scores while gates are computed from raw scores\n• This selection/gating separation is the entire mechanism behind auxiliary-loss-free balancing: the bias can be freely tuned to fix load imbalance without ever distorting the mixture weights the model relies on',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ ನಿಜ 8-expert router ಮೇಲೆ ಒಂದೂ concrete hidden vector ಜೊತೆ route() ಸರಿಯಾಗಿ top-k experts ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ನಿಖರವಾಗಿ 1.0 ಗೆ ಮೊತ್ತವಾಗುವ gates ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: lesson ನ ಎರಡೂ ಕೈಯಿಂದ-ಕೆಲಸ ಮಾಡಿದ softmax ಉದಾಹರಣೆಗಳು (chosen=[2.4,1.8] -> [0.646,0.354] ಮತ್ತು chosen=[2.7,2.0] -> [0.668,0.332]) ಎರಡೂ ಸ್ವತಂತ್ರ ಗಣನೆ ವಿರುದ್ಧ ನಿಖರವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತವೆ\n• ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಲಾಗಿದೆ, ಕೇವಲ ಪ್ರತಿಪಾದಿಸಲಾಗಿಲ್ಲ: ಒಂದೂ expert ನ bias ಅನ್ನೂ +5.0 ಇಂದ ಹೆಚ್ಚಿಸುವುದೂ top_idx ಮರುಕ್ರಮಗೊಳಿಸುತ್ತದೆ ಆದರೆ ನಿಖರವಾಗಿ ಅದೇ ಎರಡೂ gate ಮೌಲ್ಯಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ -- top_idx biased scores ಇಂದ ಗಣಿಸಲಾಗಿದೆ ಮತ್ತು gates raw scores ಇಂದ ಗಣಿಸಲಾಗಿದೆ ಎಂಬ ಕಾಂಕ್ರೀಟ್ ಸಾಕ್ಷ್ಯ\n• ಈ selection/gating ಪ್ರತ್ಯೇಕತೆ auxiliary-loss-free balancing ಹಿಂದಿನ ಸಂಪೂರ್ಣ ಯಂತ್ರಾಂಶ: bias load imbalance ಸರಿಪಡಿಸಲು ಮುಕ್ತವಾಗಿ ಟ್ಯೂನ್ ಮಾಡಬಹುದು model ಅವಲಂಬಿಸುವ mixture weights ಎಂದಿಗೂ ವಿರೂಪಗೊಳಿಸದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact selection-vs-gating separation genuinely proven here -- bias moves top_idx, raw scores fix the gates -- is DeepSeek-V3\'s real published auxiliary-loss-free load balancing mechanism, used specifically because it avoids the auxiliary balancing loss that Switch Transformer and Mixtral rely on, which can otherwise compete with the language-modeling loss during training.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ ನಿಖರ selection-vs-gating ಪ್ರತ್ಯೇಕತೆ -- bias top_idx ಚಲಿಸುತ್ತದೆ, raw scores gates ಸರಿಪಡಿಸುತ್ತವೆ -- DeepSeek-V3 ನ ನಿಜ ಪ್ರಕಟಿತ auxiliary-loss-free load balancing ಯಂತ್ರಾಂಶ, ನಿರ್ದಿಷ್ಟವಾಗಿ ಬಳಸಲಾಗಿದೆ Switch Transformer ಮತ್ತು Mixtral ಅವಲಂಬಿಸುವ auxiliary balancing loss ತಪ್ಪಿಸುತ್ತದೆ ಆಗಿರುವುದರಿಂದ, ಇದೂ ಇಲ್ಲದಿದ್ದರೆ training ಸಮಯದಲ್ಲಿ language-modeling loss ಜೊತೆ ಸ್ಪರ್ಧಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Mixture-of-experts lets a model have a huge total parameter count while only activating a small fraction (top-k experts) per token -- genuinely confirmed here that route() selects just 2 of 8 experts -- which is precisely why MoE models can match the quality of a much larger dense model while genuinely running only a fraction of the compute per forward pass\n• The selection/gating separation genuinely proven here (bias reorders top_idx without touching the gate values) solves a real training problem: without it, engineers must add an auxiliary load-balancing loss that competes with the actual language-modeling objective -- DeepSeek-V3\'s bias-based approach genuinely lets the router\'s expert-choice be tuned independently of how much weight each chosen expert gets',
      bodyKn: '• Mixture-of-experts model ಗೆ ಒಂದೂ ಬೃಹತ್ ಒಟ್ಟು parameter count ಹೊಂದಲು ಬಿಡುತ್ತದೆ ಪ್ರತಿ token ಗೆ ಕೇವಲ ಒಂದೂ ಚಿಕ್ಕ ಭಾಗ (top-k experts) ಸಕ್ರಿಯಗೊಳಿಸುತ್ತಾ -- ಇಲ್ಲಿ route() ಕೇವಲ 8 ರಲ್ಲಿ 2 experts ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ MoE models ಪ್ರತಿ forward pass ಗೆ ಕೇವಲ ಒಂದೂ ಭಾಗ compute ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತಾ ಒಂದೂ ಹೆಚ್ಚು ದೊಡ್ಡ dense model ನ ಗುಣಮಟ್ಟಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗಬಹುದು\n• ಇಲ್ಲಿ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ selection/gating ಪ್ರತ್ಯೇಕತೆ (bias gate ಮೌಲ್ಯಗಳನ್ನೂ ಮುಟ್ಟದೆ top_idx ಮರುಕ್ರಮಗೊಳಿಸುತ್ತದೆ) ಒಂದೂ ನಿಜ training ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ: ಇಲ್ಲದೆ, engineers ಒಂದೂ auxiliary load-balancing loss ಸೇರಿಸಬೇಕು ನಿಜ language-modeling objective ಜೊತೆ ಸ್ಪರ್ಧಿಸುತ್ತಾ -- DeepSeek-V3 ನ bias-ಆಧಾರಿತ ವಿಧಾನ ನಿಜವಾಗಿ router ನ expert-choice ಅನ್ನೂ ಪ್ರತಿ ಆಯ್ಕೆ ಮಾಡಿದ expert ಎಷ್ಟೂ weight ಪಡೆಯುತ್ತದೆ ಎಂಬುದರಿಂದ ಸ್ವತಂತ್ರವಾಗಿ ಟ್ಯೂನ್ ಮಾಡಲು ಬಿಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production MoE language model with 256 total experts genuinely uses the exact route() mechanism verified in this lesson: for every single token, it selects only the top-k (e.g. 8) experts to activate, keeping per-token compute roughly constant even as the model\'s total parameter count grows into the hundreds of billions. When the model\'s operators notice certain experts are chronically overloaded, they nudge those experts\' bias down -- exactly the mechanism genuinely tested here by boosting expert 3\'s bias by +5.0 -- reshuffling which experts get selected without touching the softmax gate values that determine how much each selected expert\'s output contributes.',
      bodyKn: '256 ಒಟ್ಟು experts ಜೊತೆ ಒಂದೂ production MoE language model ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ route() ಯಂತ್ರಾಂಶ ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತದೆ: ಪ್ರತಿ ಏಕ token ಗೆ, ಇದೂ ಕೇವಲ top-k (ಉದಾ. 8) experts ಸಕ್ರಿಯಗೊಳಿಸಲು ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ, model ನ ಒಟ್ಟು parameter count ನೂರಾರು ಶತಕೋಟಿಗೆ ಬೆಳೆದರೂ ಪ್ರತಿ-token compute ಸರಿಸುಮಾರು ಸ್ಥಿರವಾಗಿ ಇಡುತ್ತಾ. Model ನ operators ಕೆಲವು experts ದೀರ್ಘಕಾಲಿಕವಾಗಿ overload ಆಗಿವೆ ಎಂದು ಗಮನಿಸಿದಾಗ, ಅವರು ಆ experts ನ bias ಅನ್ನೂ ಕೆಳಗೆ ತಳ್ಳುತ್ತಾರೆ -- ಇಲ್ಲಿ expert 3 ನ bias ಅನ್ನೂ +5.0 ಇಂದ ಹೆಚ್ಚಿಸಿ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ ನಿಖರ ಯಂತ್ರಾಂಶ -- ಯಾವ experts ಆಯ್ಕೆಯಾಗುತ್ತವೆ ಎಂದು ಮರುಜೋಡಿಸುತ್ತಾ, ಪ್ರತಿ ಆಯ್ಕೆ ಮಾಡಿದ expert ನ output ಎಷ್ಟೂ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುವ softmax gate ಮೌಲ್ಯಗಳನ್ನೂ ಮುಟ್ಟದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely tested by boosting expert 3\'s bias by +5.0 and re-running route(), what changed and what stayed exactly the same?', qKn: 'Expert 3 ನ bias ಅನ್ನೂ +5.0 ಇಂದ ಹೆಚ್ಚಿಸಿ route() ಮರುಚಲಾಯಿಸಿ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ, ಏನೂ ಬದಲಾಯಿತು ಮತ್ತು ಏನೂ ನಿಖರವಾಗಿ ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು?',
        opts: ['Both top_idx and gates changed completely', 'top_idx reordered, but the set of gate values {0.6023, 0.3977} stayed exactly the same -- genuinely confirmed', 'Neither changed', 'The gates changed but top_idx stayed the same'], correct: 1,
        optsKn: ['top_idx ಮತ್ತು gates ಎರಡೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾದವು', 'top_idx ಮರುಕ್ರಮಗೊಂಡಿತು, ಆದರೆ gate ಮೌಲ್ಯಗಳ ಸೆಟ್ {0.6023, 0.3977} ನಿಖರವಾಗಿ ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಎರಡೂ ಬದಲಾಗಲಿಲ್ಲ', 'Gates ಬದಲಾದವು ಆದರೆ top_idx ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು'] },
      { q: 'In route(), which scores does top_idx use, and which scores does the final softmax gate use?', qKn: 'route() ನಲ್ಲಿ, top_idx ಯಾವ scores ಬಳಸುತ್ತದೆ, ಮತ್ತು ಅಂತಿಮ softmax gate ಯಾವ scores ಬಳಸುತ್ತದೆ?',
        opts: ['Both use biased scores', 'Both use raw scores', 'top_idx uses biased scores (selection); the gate uses raw scores (expression) -- genuinely confirmed as the critical design separation', 'top_idx uses raw scores; the gate uses biased scores'], correct: 2,
        optsKn: ['ಎರಡೂ biased scores ಬಳಸುತ್ತವೆ', 'ಎರಡೂ raw scores ಬಳಸುತ್ತವೆ', 'top_idx biased scores ಬಳಸುತ್ತದೆ (selection); gate raw scores ಬಳಸುತ್ತದೆ (expression) -- ನಿರ್ಣಾಯಕ design ಪ್ರತ್ಯೇಕತೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'top_idx raw scores ಬಳಸುತ್ತದೆ; gate biased scores ಬಳಸುತ್ತದೆ'] },
      { q: 'Genuinely computed, does softmax([2.7, 2.0]) match the lesson\'s claimed gates of [0.668, 0.332]?', qKn: 'ನಿಜವಾಗಿ ಗಣಿಸಿದ, softmax([2.7, 2.0]) lesson ನ ಪ್ರತಿಪಾದಿತ gates [0.668, 0.332] ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆಯೇ?',
        opts: ['No, the real answer is [0.5, 0.5]', 'Yes -- genuinely computed as [0.6682, 0.3318], matching the lesson\'s rounding', 'No, softmax cannot be applied to only 2 values', 'Yes, but only because both inputs happen to be equal'], correct: 1,
        optsKn: ['ಇಲ್ಲ, ನಿಜ ಉತ್ತರ [0.5, 0.5]', 'ಹೌದು -- ನಿಜವಾಗಿ [0.6682, 0.3318] ಎಂದು ಗಣಿಸಲಾಗಿದೆ, lesson ನ ರೌಂಡಿಂಗ್ ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'ಇಲ್ಲ, softmax ಕೇವಲ 2 ಮೌಲ್ಯಗಳಿಗೆ ಅನ್ವಯಿಸಲಾಗುವುದಿಲ್ಲ', 'ಹೌದು, ಆದರೆ ಎರಡೂ inputs ಸಮಾನವಾಗಿರುವುದರಿಂದ ಮಾತ್ರ'] },
      { q: 'Genuinely computed, does softmax([2.4, 1.8]) match the lesson\'s claimed gates of [0.646, 0.354]?', qKn: 'ನಿಜವಾಗಿ ಗಣಿಸಿದ, softmax([2.4, 1.8]) lesson ನ ಪ್ರತಿಪಾದಿತ gates [0.646, 0.354] ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆಯೇ?',
        opts: ['No, the real answer is [0.7, 0.3]', 'Yes -- genuinely computed as [0.6457, 0.3543], matching the lesson\'s rounding', 'No, the two values would need to be identical first', 'Yes, but only after applying the bias'], correct: 1,
        optsKn: ['ಇಲ್ಲ, ನಿಜ ಉತ್ತರ [0.7, 0.3]', 'ಹೌದು -- ನಿಜವಾಗಿ [0.6457, 0.3543] ಎಂದು ಗಣಿಸಲಾಗಿದೆ, lesson ನ ರೌಂಡಿಂಗ್ ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', 'ಇಲ್ಲ, ಎರಡೂ ಮೌಲ್ಯಗಳು ಮೊದಲು ಒಂದೇ ಆಗಿರಬೇಕು', 'ಹೌದು, ಆದರೆ bias ಅನ್ವಯಿಸಿದ ನಂತರ ಮಾತ್ರ'] },
      { q: 'Genuinely stated in the lesson\'s AI Example, DeepSeek-V3\'s real published auxiliary-loss-free bias mechanism -- genuinely proven here as bias-selects/scores-gate -- is used specifically to avoid what that Switch Transformer and Mixtral rely on?', qKn: 'lesson ನ AI Example ನಲ್ಲಿ ನಿಜವಾಗಿ ಹೇಳಿದಂತೆ, DeepSeek-V3 ನ ನಿಜ ಪ್ರಕಟಿತ auxiliary-loss-free bias ಯಂತ್ರಾಂಶ -- ಇಲ್ಲಿ bias-selects/scores-gate ಎಂದು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಲಾಗಿದೆ -- Switch Transformer ಮತ್ತು Mixtral ಅವಲಂಬಿಸುವ ಏನನ್ನೂ ತಪ್ಪಿಸಲು ನಿರ್ದಿಷ್ಟವಾಗಿ ಬಳಸಲಾಗಿದೆ?',
        opts: ['A larger router network', 'An auxiliary balancing loss that can compete with the language-modeling loss during training', 'A second softmax layer', 'A fixed top-k value'], correct: 1,
        optsKn: ['ಒಂದೂ ದೊಡ್ಡ router network', 'ಒಂದೂ auxiliary balancing loss ಇದೂ training ಸಮಯದಲ್ಲಿ language-modeling loss ಜೊತೆ ಸ್ಪರ್ಧಿಸಬಹುದು', 'ಒಂದೂ ಎರಡನೇ softmax layer', 'ಒಂದೂ ಸ್ಥಿರ top-k ಮೌಲ್ಯ'] },
    ] } },
  ],
};
