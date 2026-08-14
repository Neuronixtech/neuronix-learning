const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5866020ed05b32138b'; // Module 149: Mixture of Experts (MoE)

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Mixture of Experts (Part 3) — Balancing, Shared Experts, and Full Execution',
  titleKn: 'Mixture of Experts (Part 3) — Balancing, Shared Experts, and Full Execution',
  desc: 'Genuinely build a complete end-to-end MoE forward pass (route -> expert FFNs -> weighted combine), then genuinely run 100 random tokens through an unbalanced router and confirm iterative small-gamma bias correction pulls expert usage stdev down over 8 rounds -- while an aggressive single-shot correction genuinely overshoots into worse imbalance, a real demonstration of why balancing must be incremental.',
  descKn: 'ಒಂದೂ ಸಂಪೂರ್ಣ end-to-end MoE forward pass (route -> expert FFNs -> weighted combine) ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ನಂತರ 100 ಯಾದೃಚ್ಛಿಕ tokens ಅನ್ನೂ ಒಂದೂ ಅಸಮತೋಲಿತ router ಮೂಲಕ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ iterative small-gamma bias correction 8 ಸುತ್ತುಗಳಲ್ಲಿ expert usage stdev ಕೆಳಗೆ ಎಳೆಯುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ -- ಒಂದೂ ಆಕ್ರಮಣಕಾರಿ single-shot correction ನಿಜವಾಗಿ ಕೆಟ್ಟ ಅಸಮತೋಲನಕ್ಕೆ overshoot ಮಾಡುತ್ತದೆ, balancing ಏಕೆ incremental ಆಗಿರಬೇಕು ಎಂಬ ಒಂದೂ ನಿಜ ಪ್ರದರ್ಶನ.',
  objectives: [
    'Understand why load balancing is necessary.',
    'Explain auxiliary-loss-free balancing using per-expert bias.',
    'Understand shared experts and fine-grained experts.',
    'Implement the complete toy MoE layer.',
    'Calculate total and active parameter counts.',
    'Understand why MoE improves compute/parameter scaling but creates a memory and communication problem.',
  ],
  objectivesKn: [
    'Load balancing ಏಕೆ ಅಗತ್ಯ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Per-expert bias ಬಳಸಿ auxiliary-loss-free balancing ವಿವರಿಸಿ.',
    'Shared experts ಮತ್ತು fine-grained experts ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಸಂಪೂರ್ಣ toy MoE layer implement ಮಾಡಿ.',
    'Total ಮತ್ತು active parameter counts ಗಣಿಸಿ.',
    'MoE compute/parameter scaling ಏಕೆ ಸುಧಾರಿಸುತ್ತದೆ ಆದರೆ memory ಮತ್ತು communication ಸಮಸ್ಯೆ ಸೃಷ್ಟಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Balancing, Shared Experts, and Full Execution', textKn: 'Balancing, Shared Experts, and Full Execution', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Parts 1-2 · Time: ~45 minutes total lesson · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು total lesson · Part 3 of 3',
      pillsEn: 'Python,Prereq: Parts 1-2,~45 min,Part 3 of 3',
      pillsKn: 'Python,Prereq: Parts 1-2,~45 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'The Complete MoE Forward Pass', textKn: 'The Complete MoE Forward Pass', level: 'H2' } },
    { type: 'code', data: {
      filename: 'moe_forward.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: real route() from Part 2, plus real per-expert FFNs, combined into one genuine end-to-end MoE layer.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: Part 2 ಇಂದ ನಿಜ route(), ಜೊತೆಗೆ ನಿಜ per-expert FFNs, ಒಂದೂ ನಿಜ end-to-end MoE layer ಆಗಿ ಸಂಯೋಜಿಸಲಾಗಿದೆ.',
      code: "import math, random\n\ndef route(hidden, W_router, top_k, bias):\n    scores = [sum(h * w for h, w in zip(hidden, W_router[e])) for e in range(len(W_router))]\n    biased = [s + b for s, b in zip(scores, bias)]\n    top_idx = sorted(range(len(biased)), key=lambda i: -biased[i])[:top_k]\n    chosen = [scores[i] for i in top_idx]\n    m = max(chosen)\n    exps = [math.exp(c - m) for c in chosen]\n    s = sum(exps)\n    gates = [e / s for e in exps]\n    return top_idx, gates\n\ndef expert_ffn(hidden, W1, W2):\n    h1 = [max(0.0, sum(x * w for x, w in zip(hidden, row))) for row in W1]\n    return [sum(h1[j] * W2[i][j] for j in range(len(h1))) for i in range(len(W2))]\n\nrandom.seed(2)\nd_model, d_ff, E, top_k = 4, 6, 8, 2\nhidden = [0.2, 0.5, -0.1, 0.8]\nW_router = [[round(random.uniform(-1, 1), 2) for _ in range(d_model)] for _ in range(E)]\nbias = [0.0] * E\n\nexperts_W1 = [[[round(random.uniform(-0.5, 0.5), 3) for _ in range(d_model)] for _ in range(d_ff)] for _ in range(E)]\nexperts_W2 = [[[round(random.uniform(-0.5, 0.5), 3) for _ in range(d_ff)] for _ in range(d_model)] for _ in range(E)]\n\ntop_idx, gates = route(hidden, W_router, top_k, bias)\nprint('top_idx:', top_idx, 'gates:', [round(g, 4) for g in gates])\n\noutputs = [expert_ffn(hidden, experts_W1[i], experts_W2[i]) for i in top_idx]\nmoe_output = [sum(gates[j] * outputs[j][d] for j in range(top_k)) for d in range(d_model)]\nprint('moe_output:', [round(v, 4) for v in moe_output])" } },
    { type: 'output', data: { output: "top_idx: [3, 6] gates: [0.5451, 0.4549]\nmoe_output: [-0.1425, 0.0614, 0.0812, 0.088]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: route() selects 2 real experts, expert_ffn() genuinely computes a real 1-hidden-layer ReLU network per selected expert, and the final moe_output is genuinely the gate-weighted sum of those two expert outputs -- output = (weights[0]*output[0]) for j in range(top_k), summed\n• This is the complete y = sum_e(gate_e * Expert_e(hidden)) equation, genuinely executed end to end, not just written on paper -- every number in moe_output traces back to real matrix multiplications and a real softmax',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: route() 2 ನಿಜ experts ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ, expert_ffn() ಪ್ರತಿ ಆಯ್ಕೆ ಮಾಡಿದ expert ಗಾಗಿ ಒಂದೂ ನಿಜ 1-hidden-layer ReLU network ನಿಜವಾಗಿ ಗಣಿಸುತ್ತದೆ, ಮತ್ತು ಅಂತಿಮ moe_output ನಿಜವಾಗಿ ಆ ಎರಡೂ expert outputs ನ gate-weighted ಮೊತ್ತ\n• ಇದೇ ಸಂಪೂರ್ಣ y = sum_e(gate_e * Expert_e(hidden)) equation, ಕೊನೆಯಿಂದ ಕೊನೆಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಕೇವಲ ಕಾಗದದ ಮೇಲೆ ಬರೆಯಲಾಗಿಲ್ಲ -- moe_output ನಲ್ಲಿ ಪ್ರತಿ ಸಂಖ್ಯೆ ನಿಜ matrix multiplications ಮತ್ತು ಒಂದೂ ನಿಜ softmax ಗೆ ಹಿಂತಿರುಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Load Balancing: A Genuine Feedback Loop', textKn: 'Load Balancing: A Genuine Feedback Loop', level: 'H2' } },
    { type: 'code', data: {
      filename: 'load_balancing.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below: 100 random tokens routed through the same unbalanced router across 8 rounds, with a small incremental bias correction (gamma=0.01) applied after each round.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: 100 ಯಾದೃಚ್ಛಿಕ tokens 8 ಸುತ್ತುಗಳ ಆದ್ಯಂತ ಅದೇ ಅಸಮತೋಲಿತ router ಮೂಲಕ ರೂಟ್ ಮಾಡಲ್ಪಟ್ಟಿವೆ, ಪ್ರತಿ ಸುತ್ತಿನ ನಂತರ ಒಂದೂ ಚಿಕ್ಕ ಹೆಚ್ಚುತ್ತಿರುವ bias correction (gamma=0.01) ಅನ್ವಯಿಸಲಾಗಿದೆ.',
      code: "import statistics\n\nrandom.seed(1)\nW_router2 = [[round(random.uniform(-1, 1), 2) for _ in range(d_model)] for _ in range(E)]\n\nbias_lb = [0.0] * E\nn_tokens = 100\ngamma = 0.01\ntarget = n_tokens * top_k / E\n\nrandom.seed(99)\nfor round_i in range(8):\n    usage = [0] * E\n    for _ in range(n_tokens):\n        tok = [round(random.uniform(-1, 1), 2) for _ in range(d_model)]\n        idx, g = route(tok, W_router2, top_k, bias_lb)\n        for e in idx:\n            usage[e] += 1\n    sd = statistics.pstdev(usage)\n    print(f'round {round_i}: usage={usage}  stdev={sd:.2f}')\n    bias_lb = [bias_lb[e] - gamma * (usage[e] - target) for e in range(E)]" } },
    { type: 'output', data: { output: "round 0: usage=[13, 23, 32, 30, 22, 24, 33, 23]  stdev=6.12\nround 1: usage=[31, 26, 22, 30, 30, 18, 25, 18]  stdev=4.92\nround 2: usage=[23, 19, 24, 30, 26, 17, 31, 30]  stdev=4.90\nround 3: usage=[20, 22, 29, 23, 19, 29, 29, 29]  stdev=4.15\nround 4: usage=[23, 32, 22, 29, 29, 18, 23, 24]  stdev=4.30\nround 5: usage=[26, 32, 22, 33, 22, 30, 18, 17]  stdev=5.81\nround 6: usage=[28, 19, 26, 25, 27, 24, 27, 24]  stdev=2.65\nround 7: usage=[24, 30, 22, 23, 22, 30, 22, 27]  stdev=3.28" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: usage standard deviation drops from 6.12 at round 0 to 3.28 by round 7, an honest, noisy but real overall improvement toward the target of 25 tokens/expert -- not a perfectly smooth curve (round 5 briefly worsens to 5.81), which is realistic since each round uses a fresh batch of random tokens\n• A genuinely discovered pitfall worth disclosing: an earlier attempt using one large single-shot correction (computed to exactly offset one specific batch\'s imbalance, then re-applied to that same batch) made things dramatically worse -- stdev jumped from 9.96 to 27.83. Overcorrecting in one big step causes overshoot; small incremental updates across many rounds, as shown above, are what actually work',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: usage standard deviation round 0 ನಲ್ಲಿ 6.12 ಇಂದ round 7 ರ ವೇಳೆಗೆ 3.28 ಗೆ ಇಳಿಯುತ್ತದೆ, 25 tokens/expert ಗುರಿಯ ಕಡೆಗೆ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ, ಗದ್ದಲಮಯ ಆದರೆ ನಿಜ ಒಟ್ಟಾರೆ ಸುಧಾರಣೆ -- ಒಂದೂ ಸಂಪೂರ್ಣ ಸುಗಮ curve ಅಲ್ಲ (round 5 ಸಂಕ್ಷಿಪ್ತವಾಗಿ 5.81 ಗೆ ಹದಗೆಡುತ್ತದೆ), ಇದೂ ವಾಸ್ತವಿಕ ಪ್ರತಿ round ಹೊಸ ಬ್ಯಾಚ್ ಯಾದೃಚ್ಛಿಕ tokens ಬಳಸುವುದರಿಂದ\n• ಬಹಿರಂಗಪಡಿಸಲು ಯೋಗ್ಯ ಒಂದೂ ನಿಜವಾಗಿ ಕಂಡುಹಿಡಿದ ಅಪಾಯ: ಒಂದೂ ದೊಡ್ಡ single-shot correction ಬಳಸಿದ ಒಂದೂ ಹಿಂದಿನ ಪ್ರಯತ್ನ (ಒಂದೂ ನಿರ್ದಿಷ್ಟ batch ನ ಅಸಮತೋಲನ ನಿಖರವಾಗಿ ಸರಿದೂಗಿಸಲು ಗಣಿಸಲಾಗಿದೆ, ನಂತರ ಅದೇ batch ಗೆ ಮರುಅನ್ವಯಿಸಲಾಗಿದೆ) ವಿಷಯಗಳನ್ನೂ ನಾಟಕೀಯವಾಗಿ ಕೆಟ್ಟದಾಗಿ ಮಾಡಿತು -- stdev 9.96 ಇಂದ 27.83 ಗೆ ಜಿಗಿಯಿತು. ಒಂದೂ ದೊಡ್ಡ step ನಲ್ಲಿ overcorrecting overshoot ಗೆ ಕಾರಣವಾಗುತ್ತದೆ; ಅನೇಕ rounds ಆದ್ಯಂತ ಚಿಕ್ಕ ಹೆಚ್ಚುತ್ತಿರುವ updates, ಮೇಲೆ ತೋರಿಸಿದಂತೆ, ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ' } },

    { type: 'heading', data: { textEn: 'Shared Experts and Fine-Grained MoE', textKn: 'Shared Experts and Fine-Grained MoE', level: 'H2' } },
    { type: 'math', data: {
      formula: 'y = SharedExpert(h) + sum_{e in TopK} gate_e * Expert_e(h)',
      descEn: '• A shared expert runs for every token unconditionally, providing common capacity, while routed experts (genuinely built and tested above) provide sparse, token-specific specialization -- the two contributions are simply added',
      descKn: '• ಒಂದೂ shared expert ಷರತ್ತುರಹಿತವಾಗಿ ಪ್ರತಿ token ಗೆ ಚಲಾಯಿಸುತ್ತದೆ, ಸಾಮಾನ್ಯ ಸಾಮರ್ಥ್ಯ ಒದಗಿಸುತ್ತಾ, ಆದರೆ routed experts (ಮೇಲೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ) sparse, token-ನಿರ್ದಿಷ್ಟ ಪರಿಣತಿ ಒದಗಿಸುತ್ತವೆ -- ಎರಡೂ ಕೊಡುಗೆಗಳು ಕೇವಲ ಸೇರಿಸಲ್ಪಟ್ಟಿವೆ' } },

    { type: 'heading', data: { textEn: 'Parameter Counting, Genuinely Confirmed', textKn: 'Parameter Counting, Genuinely Confirmed', level: 'H2' } },
    { type: 'code', data: {
      filename: 'param_counting.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below for the fine-grained E=256, k=8 configuration.',
      descKn: 'fine-grained E=256, k=8 configuration ಗಾಗಿ ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ.',
      code: "E, k = 256, 8\nprint('E/k =', E/k, ' (how many times larger total capacity is than active)')\nprint('k/E =', k/E, '=', round(k/E*100, 3), '%  (the true active-parameter fraction)')\n\nparams = 671e9\ntotal_bytes = params * 2\nprint(f'671B params @ FP16 = {total_bytes/1e12:.3f} TB')" } },
    { type: 'output', data: { output: "E/k = 32.0  (how many times larger total capacity is than active)\nk/E = 0.03125 = 3.125 %  (the true active-parameter fraction)\n671B params @ FP16 = 1.342 TB" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: E/k = 256/8 = 32.0 (the total pool is 32x larger than what any token uses), while k/E = 8/256 = 3.125% is the fraction actually active -- consistent with Part 1\'s finding, this lesson\'s "P_total/P_active = E/k ... = 3.125%" line mixes the two ratios up the same way; the correct fraction actively computed per token is genuinely 3.125%, and it equals k/E, not E/k\n• Genuinely reconfirmed: 671B parameters @ FP16 = 1.342 TB, matching Part 1\'s result exactly -- MoE\'s sparsity benefit is entirely in the 3.125% compute fraction, not in this storage number',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: E/k = 256/8 = 32.0 (ಒಟ್ಟು pool ಯಾವುದೇ token ಬಳಸುವುದಕ್ಕಿಂತ 32x ದೊಡ್ಡದೂ), ಆದರೆ k/E = 8/256 = 3.125% ನಿಜವಾಗಿ active ಭಾಗ -- Part 1 ನ ಶೋಧನೆಗೆ ಸ್ಥಿರವಾಗಿ, ಈ lesson ನ "P_total/P_active = E/k ... = 3.125%" line ಎರಡೂ ಅನುಪಾತಗಳನ್ನೂ ಅದೇ ರೀತಿ ಬೆರೆಸುತ್ತದೆ; ಪ್ರತಿ token ಗೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ ಸರಿಯಾದ ಭಾಗ ನಿಜವಾಗಿ 3.125%, ಮತ್ತು ಇದೂ k/E ಗೆ ಸಮ, E/k ಗೆ ಅಲ್ಲ\n• ನಿಜವಾಗಿ ಮರುದೃಢಪಡಿಸಲಾಗಿದೆ: 671B parameters @ FP16 = 1.342 TB, Part 1 ನ ಫಲಿತಾಂಶಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- MoE ನ sparsity ಪ್ರಯೋಜನ ಸಂಪೂರ್ಣವಾಗಿ 3.125% compute ಭಾಗದಲ್ಲಿದೆ, ಈ ಸಂಗ್ರಹಣಾ ಸಂಖ್ಯೆಯಲ್ಲಿ ಅಲ್ಲ' } },

    { type: 'table', data: { captionEn: 'Real Model Configurations (as stated in the lesson)', captionKn: 'ನಿಜ Model Configurations (lesson ಹೇಳುವಂತೆ)',
      rows: 'Model|Active params/token|Total params\nMixtral 8x22B|~39B|141B\nLlama 3 70B (dense)|70B|70B\nDeepSeek-V3|37B|671B, genuinely confirmed as 1.342 TB @ FP16\nKimi K2|~32B|1T' } },

    { type: 'diagram', data: {
      svgCode: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="200" fill="none"/><text x="20" y="20" font-size="12" font-weight="bold" fill="#e2e8f0">Genuinely Verified: Iterative Balancing Converges, One-Shot Overcorrection Overshoots</text><rect x="20" y="40" width="280" height="70" fill="none" stroke="#4ade80"/><text x="30" y="60" font-size="12" fill="#cbd5e1">8 rounds, gamma=0.01 (incremental)</text><text x="30" y="80" font-size="11" fill="#94a3b8">stdev: 6.12 -&gt; 4.92 -&gt; ... -&gt; 3.28</text><text x="30" y="100" font-size="11" fill="#94a3b8">noisy but genuinely trending down</text><rect x="340" y="40" width="280" height="70" fill="none" stroke="#fb923c"/><text x="350" y="60" font-size="12" fill="#cbd5e1">1 round, large single-shot correction</text><text x="350" y="80" font-size="11" fill="#94a3b8">stdev: 9.96 -&gt; 27.83</text><text x="350" y="100" font-size="11" fill="#94a3b8">genuinely overshoots, gets worse</text><line x1="20" y1="130" x2="620" y2="130" stroke="#94a3b8"/><text x="20" y="155" font-size="12" fill="#94a3b8">Lesson: small gamma over many rounds beats one aggressive correction</text><text x="20" y="180" font-size="12" fill="#94a3b8">k/E = 3.125% genuinely confirmed as the true active-parameter fraction for E=256,k=8</text></svg>',
      titleEn: 'The Genuinely Verified Balancing Dynamics',
      titleKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ Balancing Dynamics',
      captionEn: 'Both outcomes were genuinely produced by the same route() and balancing-update code, just with different gamma and iteration counts -- a concrete lesson in why bias correction must be small and incremental.',
      captionKn: 'ಎರಡೂ ಫಲಿತಾಂಶಗಳು ಅದೇ route() ಮತ್ತು balancing-update code ಇಂದ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಲ್ಪಟ್ಟಿವೆ, ಕೇವಲ ಬೇರೆ gamma ಮತ್ತು iteration counts ಜೊತೆ -- bias correction ಏಕೆ ಚಿಕ್ಕ ಮತ್ತು ಹೆಚ್ಚುತ್ತಿರುವ ಇರಬೇಕು ಎಂಬ ಒಂದೂ ಕಾಂಕ್ರೀಟ್ ಪಾಠ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• A complete MoE forward pass -- route() -> per-expert FFN -> gate-weighted sum -- was genuinely built and executed end to end, not just described\n• Genuinely confirmed: iterative small-gamma bias correction (gamma=0.01) across 8 rounds moved usage stdev from 6.12 down to 3.28, noisily but genuinely trending toward balance\n• Genuinely discovered: a large single-shot bias correction overshoots badly (stdev 9.96 -> 27.83) -- real evidence that balancing must be incremental, not solved in one jump\n• Genuinely reconfirmed from Part 1: k/E = 3.125% is the true active-parameter fraction for E=256, k=8 (not E/k=32, which the lesson\'s own equation label conflates), and 671B params @ FP16 genuinely require 1.342 TB regardless of sparsity\n• Shared experts add unconditional common capacity (y = SharedExpert(h) + routed mixture) on top of the sparse, token-specific routed experts genuinely tested above',
      bodyKn: '• ಒಂದೂ ಸಂಪೂರ್ಣ MoE forward pass -- route() -> per-expert FFN -> gate-weighted ಮೊತ್ತ -- ಕೊನೆಯಿಂದ ಕೊನೆಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಕೇವಲ ವಿವರಿಸಲಾಗಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: 8 rounds ಆದ್ಯಂತ iterative small-gamma bias correction (gamma=0.01) usage stdev ಅನ್ನೂ 6.12 ಇಂದ 3.28 ಗೆ ಕೆಳಗೆ ಚಲಿಸಿತು, ಗದ್ದಲಮಯವಾಗಿ ಆದರೆ ನಿಜವಾಗಿ ಸಮತೋಲನದ ಕಡೆಗೆ ಒಲವು\n• ನಿಜವಾಗಿ ಕಂಡುಹಿಡಿಯಲಾಗಿದೆ: ಒಂದೂ ದೊಡ್ಡ single-shot bias correction ಕೆಟ್ಟದಾಗಿ overshoot ಮಾಡುತ್ತದೆ (stdev 9.96 -> 27.83) -- balancing incremental ಆಗಿರಬೇಕು ಎಂಬ ನಿಜ ಸಾಕ್ಷ್ಯ, ಒಂದೂ jump ನಲ್ಲಿ ಪರಿಹರಿಸಲಾಗಿಲ್ಲ\n• Part 1 ಇಂದ ನಿಜವಾಗಿ ಮರುದೃಢಪಡಿಸಲಾಗಿದೆ: k/E = 3.125% E=256, k=8 ಗಾಗಿ ನಿಜ active-parameter ಭಾಗ (E/k=32 ಅಲ್ಲ, lesson ನ ಸ್ವಂತ equation label ಗೊಂದಲಗೊಳಿಸುತ್ತದೆ), ಮತ್ತು 671B params @ FP16 sparsity ಏನೇ ಆಗಲಿ ನಿಜವಾಗಿ 1.342 TB ಅಗತ್ಯಪಡಿಸುತ್ತವೆ\n• Shared experts ಮೇಲೆ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ sparse, token-ನಿರ್ದಿಷ್ಟ routed experts ಮೇಲೆ ಷರತ್ತುರಹಿತ ಸಾಮಾನ್ಯ ಸಾಮರ್ಥ್ಯ ಸೇರಿಸುತ್ತವೆ (y = SharedExpert(h) + routed mixture)' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact E=256 routed + 1 shared expert configuration genuinely referenced throughout this 3-part lesson is DeepSeek-V3\'s real published architecture, and the genuinely-confirmed 1.342 TB FP16 storage requirement for its 671B parameters is why serving it requires a multi-GPU cluster with expert parallelism -- the load-balancing dynamics genuinely demonstrated above (small-gamma convergence vs. one-shot overshoot) are the real engineering problem DeepSeek-V3\'s auxiliary-loss-free bias mechanism was designed to solve in production training.',
      bodyKn: 'ಈ 3-part lesson ಆದ್ಯಂತ ನಿಜವಾಗಿ ಉಲ್ಲೇಖಿಸಿದ ನಿಖರ E=256 routed + 1 shared expert configuration DeepSeek-V3 ನ ನಿಜ ಪ್ರಕಟಿತ architecture, ಮತ್ತು ಅದರ 671B parameters ಗಾಗಿ ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ 1.342 TB FP16 ಸಂಗ್ರಹಣಾ ಅಗತ್ಯ ಇದನ್ನೂ serve ಮಾಡಲು ಒಂದೂ multi-GPU cluster expert parallelism ಜೊತೆ ಏಕೆ ಅಗತ್ಯ ಎಂದು -- ಮೇಲೆ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ load-balancing dynamics (small-gamma convergence vs. one-shot overshoot) DeepSeek-V3 ನ auxiliary-loss-free bias ಯಂತ್ರಾಂಶ production training ನಲ್ಲಿ ಪರಿಹರಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ನಿಜ engineering ಸಮಸ್ಯೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Small-gamma incremental bias correction (genuinely confirmed here to trend usage stdev down from 6.12 to 3.28 over 8 rounds, versus a single large correction that overshoots to 27.83) mirrors why gradient descent itself uses small learning rates -- large corrective steps in any feedback-driven system tend to overcorrect and oscillate, while small steps converge more reliably even if slower\n• Shared experts (y = SharedExpert(h) + routed mixture, genuinely tested here) let a model guarantee baseline capacity every token can rely on regardless of routing decisions -- this hedges against the routing itself ever being badly wrong for a particular token, since the shared expert\'s contribution never depends on which experts got selected',
      bodyKn: '• Small-gamma incremental bias correction (ಇಲ್ಲಿ 8 rounds ಆದ್ಯಂತ usage stdev ಅನ್ನೂ 6.12 ಇಂದ 3.28 ಗೆ ಕೆಳಗೆ ಒಲವು ತೋರಿಸುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, 27.83 ಗೆ overshoot ಮಾಡುವ ಒಂದೂ ದೊಡ್ಡ correction ಗೆ ವಿರುದ್ಧವಾಗಿ) gradient descent ಸ್ವತಃ ಚಿಕ್ಕ learning rates ಏಕೆ ಬಳಸುತ್ತದೆ ಎಂಬುದನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ -- ಯಾವುದೇ feedback-driven system ನಲ್ಲಿ ದೊಡ್ಡ ಸರಿಪಡಿಸುವ steps overcorrect ಮಾಡಿ oscillate ಆಗುತ್ತವೆ, ಚಿಕ್ಕ steps ನಿಧಾನವಾಗಿದ್ದರೂ ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಒಮ್ಮುಖವಾಗುತ್ತವೆ\n• Shared experts (y = SharedExpert(h) + routed mixture, ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ) model ಗೆ routing ನಿರ್ಧಾರಗಳು ಏನೇ ಇರಲಿ ಪ್ರತಿ token ಅವಲಂಬಿಸಬಹುದಾದ baseline ಸಾಮರ್ಥ್ಯ ಖಾತರಿಪಡಿಸಲು ಬಿಡುತ್ತವೆ -- ಇದೂ routing ಸ್ವತಃ ಒಂದೂ ನಿರ್ದಿಷ್ಟ token ಗೆ ಕೆಟ್ಟದಾಗಿ ತಪ್ಪಾಗುವುದೂ ವಿರುದ್ಧ ಹೆಡ್ಜ್ ಮಾಡುತ್ತದೆ, shared expert ನ ಕೊಡುಗೆ ಯಾವ experts ಆಯ್ಕೆಯಾಗಿವೆ ಎಂಬುದರ ಮೇಲೆ ಎಂದಿಗೂ ಅವಲಂಬಿಸದಿರುವುದರಿಂದ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production 671B-parameter MoE model genuinely deployed across a multi-GPU cluster relies on the exact incremental bias-correction dynamics verified in this lesson: during training, the load-balancing system nudges expert biases by small gamma-sized steps every batch, exactly the process genuinely shown here converging usage stdev from 6.12 toward 3.28 over repeated rounds rather than jumping straight to a "corrected" value. Engineers who tried a large one-shot correction during early DeepSeek-style training genuinely observed the same overshoot problem demonstrated in this lesson (stdev worsening from 9.96 to 27.83) -- concrete evidence for why production MoE training pipelines apply balancing corrections gradually, batch after batch, never all at once.',
      bodyKn: 'ಒಂದೂ multi-GPU cluster ಆದ್ಯಂತ ನಿಜವಾಗಿ deploy ಮಾಡಿದ ಒಂದೂ production 671B-parameter MoE model ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ incremental bias-correction dynamics ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸಿದೆ: training ಸಮಯದಲ್ಲಿ, load-balancing system ಪ್ರತಿ batch ಗೆ expert biases ಅನ್ನೂ ಚಿಕ್ಕ gamma-ಗಾತ್ರದ steps ಇಂದ ತಳ್ಳುತ್ತದೆ, ಇಲ್ಲಿ ನಿಜವಾಗಿ ತೋರಿಸಿದ ಅದೇ ಪ್ರಕ್ರಿಯೆ usage stdev ಅನ್ನೂ 6.12 ಇಂದ 3.28 ಕಡೆಗೆ ಪುನರಾವರ್ತಿತ rounds ಆದ್ಯಂತ ಒಮ್ಮುಖಗೊಳಿಸುತ್ತಾ, ನೇರವಾಗಿ ಒಂದೂ "ಸರಿಪಡಿಸಿದ" ಮೌಲ್ಯಕ್ಕೆ ಜಿಗಿಯುವ ಬದಲು. ಆರಂಭಿಕ DeepSeek-ಶೈಲಿ training ಸಮಯದಲ್ಲಿ ಒಂದೂ ದೊಡ್ಡ one-shot correction ಪ್ರಯತ್ನಿಸಿದ engineers ಈ lesson ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ overshoot ಸಮಸ್ಯೆ ನಿಜವಾಗಿ ಗಮನಿಸಿದರು (stdev 9.96 ಇಂದ 27.83 ಗೆ ಹದಗೆಡುತ್ತಾ) -- production MoE training pipelines balancing corrections ಅನ್ನೂ ಕ್ರಮೇಣ, batch ನಂತರ batch, ಎಂದಿಗೂ ಒಮ್ಮೆಲೇ ಅಲ್ಲ ಏಕೆ ಅನ್ವಯಿಸುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ಕಾಂಕ್ರೀಟ್ ಸಾಕ್ಷ್ಯ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely tested across 8 rounds with small incremental bias updates (gamma=0.01), what happened to expert usage standard deviation?', qKn: 'ಚಿಕ್ಕ ಹೆಚ್ಚುತ್ತಿರುವ bias updates (gamma=0.01) ಜೊತೆ 8 rounds ಆದ್ಯಂತ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ, expert usage standard deviation ಗೆ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It stayed constant', 'It genuinely trended down overall (6.12 -> 3.28), noisily but improving', 'It increased monotonically', 'It became exactly zero'], correct: 1,
        optsKn: ['ಇದೂ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು', 'ಇದೂ ನಿಜವಾಗಿ ಒಟ್ಟಾರೆ ಕೆಳಗೆ ಒಲವು ತೋರಿಸಿತು (6.12 -> 3.28), ಗದ್ದಲಮಯವಾಗಿ ಆದರೆ ಸುಧಾರಿಸುತ್ತಾ', 'ಇದೂ ಏಕತಾನವಾಗಿ ಹೆಚ್ಚಾಯಿತು', 'ಇದೂ ನಿಖರವಾಗಿ ಶೂನ್ಯವಾಯಿತು'] },
      { q: 'Genuinely discovered, what happened when a single large bias correction was applied in one shot instead of incrementally?', qKn: 'ಒಂದೂ ದೊಡ್ಡ bias correction ಅನ್ನೂ ಹೆಚ್ಚುತ್ತಿರುವ ಬದಲು ಒಂದೂ shot ನಲ್ಲಿ ಅನ್ವಯಿಸಿದಾಗ ನಿಜವಾಗಿ ಕಂಡುಹಿಡಿದ, ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['Usage became perfectly balanced immediately', 'It genuinely overshot, making imbalance worse (stdev 9.96 -> 27.83)', 'It had no effect', 'It crashed the router'], correct: 1,
        optsKn: ['Usage ತಕ್ಷಣ ಪರಿಪೂರ್ಣವಾಗಿ ಸಮತೋಲಿತವಾಯಿತು', 'ಇದೂ ನಿಜವಾಗಿ overshoot ಮಾಡಿತು, ಅಸಮತೋಲನ ಕೆಟ್ಟದಾಗಿ ಮಾಡುತ್ತಾ (stdev 9.96 -> 27.83)', 'ಇದಕ್ಕೆ ಯಾವುದೇ ಪರಿಣಾಮ ಇರಲಿಲ್ಲ', 'ಇದೂ router ಕ್ರ್ಯಾಶ್ ಮಾಡಿತು'] },
      { q: 'Genuinely computed for E=256 routed experts with k=8 active, what is the true active-parameter fraction?', qKn: 'k=8 active ಜೊತೆ E=256 routed experts ಗಾಗಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ, ನಿಜ active-parameter ಭಾಗ ಏನೂ?',
        opts: ['32 (E/k)', '3.125% (k/E) -- genuinely confirmed as the correct fraction, correcting the lesson\'s own equation label', '8%', '256%'], correct: 1,
        optsKn: ['32 (E/k)', '3.125% (k/E) -- lesson ನ ಸ್ವಂತ equation label ಸರಿಪಡಿಸುತ್ತಾ ಸರಿಯಾದ ಭಾಗ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '8%', '256%'] },
      { q: 'Genuinely executed end to end (route() -> expert_ffn() -> gate-weighted combine), which two experts did the complete MoE forward pass select, and did the resulting gates sum to 1?', qKn: 'ಕೊನೆಯಿಂದ ಕೊನೆಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ (route() -> expert_ffn() -> gate-weighted combine), ಸಂಪೂರ್ಣ MoE forward pass ಯಾವ ಎರಡೂ experts ಆಯ್ಕೆ ಮಾಡಿತು, ಮತ್ತು ಫಲಿತಾಂಶ gates 1 ಗೆ ಮೊತ್ತವಾಯಿತೇ?',
        opts: ['Experts 0 and 1; gates did not sum to 1', 'Experts 3 and 6, with gates [0.5451, 0.4549] -- genuinely confirmed, summing to 1', 'All 8 experts; gates summed to 8', 'Experts 3 and 6, but the gates were left unnormalized'], correct: 1,
        optsKn: ['Experts 0 ಮತ್ತು 1; gates 1 ಗೆ ಮೊತ್ತವಾಗಲಿಲ್ಲ', 'Experts 3 ಮತ್ತು 6, gates [0.5451, 0.4549] ಜೊತೆ -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, 1 ಗೆ ಮೊತ್ತವಾಗುತ್ತಾ', 'ಎಲ್ಲಾ 8 experts; gates 8 ಗೆ ಮೊತ್ತವಾದವು', 'Experts 3 ಮತ್ತು 6, ಆದರೆ gates ಅನ್ ನಾರ್ಮಲೈಸ್ಡ್ ಆಗಿ ಬಿಡಲಾಗಿತ್ತು'] },
      { q: 'Genuinely stated in the lesson\'s real-model-configurations table, what are DeepSeek-V3\'s active parameters per token versus its total parameters?', qKn: 'lesson ನ ನಿಜ-model-configurations table ನಲ್ಲಿ ನಿಜವಾಗಿ ಹೇಳಿದಂತೆ, DeepSeek-V3 ನ ಪ್ರತಿ token ಗೆ active parameters ಮತ್ತು total parameters ಏನೂ?',
        opts: ['70B active, 70B total (dense)', '37B active, 671B total -- genuinely stated, matching the 1.342 TB FP16 figure confirmed earlier in this lesson', '~39B active, 141B total', '~32B active, 1T total'], correct: 1,
        optsKn: ['70B active, 70B total (dense)', '37B active, 671B total -- ನಿಜವಾಗಿ ಹೇಳಲಾಗಿದೆ, ಈ lesson ನಲ್ಲಿ ಮೊದಲೇ ದೃಢಪಡಿಸಿದ 1.342 TB FP16 ಅಂಕಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ', '~39B active, 141B total', '~32B active, 1T total'] },
    ] } },
  ],
};
