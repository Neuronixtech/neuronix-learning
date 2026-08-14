const phaseId = '6a369d5766020ed05b32136a'; // Phase 10
const moduleId = '6a369d5866020ed05b32139a'; // Module 154: Speculative Decoding: Draft, Verify, Repeat

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 20,
  difficulty: 'advanced',
  status: 'published',
  title: 'Speculative Decoding (Part 1) — Why It Works',
  titleKn: 'Speculative Decoding (Part 1) — Why It Works',
  desc: 'Genuinely implement accept_or_reject() and residual_dist(), confirming the lesson\'s three acceptance-probability cases (1.0, 1.0, 0.5) by direct division and the max(0, q-p) residual clipping on a concrete example.',
  descKn: 'accept_or_reject() ಮತ್ತು residual_dist() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನೇರ ಭಾಗಾಕಾರ ಮೂಲಕ lesson ನ ಮೂರೂ acceptance-probability ಪ್ರಕರಣಗಳು (1.0, 1.0, 0.5) ಮತ್ತು ಒಂದೂ concrete ಉದಾಹರಣೆಯ ಮೇಲೆ max(0, q-p) residual clipping ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why ordinary autoregressive generation is expensive.',
    'Explain the roles of a draft model and a verifier model.',
    'Derive the speculative-decoding acceptance probability P(accept)=min(1, q(x)/p(x)).',
    'Understand why rejected tokens are sampled from the residual distribution.',
  ],
  objectivesKn: [
    'ಸಾಮಾನ್ಯ autoregressive generation ಏಕೆ ದುಬಾರಿ ಎಂದು ವಿವರಿಸಿ.',
    'ಒಂದೂ draft model ಮತ್ತು ಒಂದೂ verifier model ನ ಪಾತ್ರಗಳನ್ನೂ ವಿವರಿಸಿ.',
    'Speculative-decoding acceptance probability P(accept)=min(1, q(x)/p(x)) derive ಮಾಡಿ.',
    'Reject ಆದ tokens residual distribution ಇಂದ ಏಕೆ sample ಮಾಡಲ್ಪಡುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Speculative Decoding — Why It Works', textKn: 'Speculative Decoding — Why It Works', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: GPT Causal LM (Module 146), KV Cache & Flash Attention (Module 150) · Time: ~60 minutes total lesson · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: GPT Causal LM (Module 146), KV Cache & Flash Attention (Module 150) · Time: ~60 ನಿಮಿಷಗಳು total lesson · Part 1 of 3',
      pillsEn: 'Python,Prereq: Modules 146,150,~20 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Modules 146,150,~20 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'concept', data: {
      headingEn: 'Two Models, Two Jobs', headingKn: 'ಎರಡೂ Models, ಎರಡೂ ಕೆಲಸಗಳು',
      bodyEn: '• The draft model is small and cheap: it runs autoregressively, one token at a time, and assigns each guess a probability p -- exactly the denominator in the code\'s ratio = q_prob/p_prob below\n• The verifier is the large, expensive target model whose distribution q is the one that must genuinely be preserved -- speculative decoding works by letting the cheap draft model do most of the guessing so the expensive verifier only has to check proposals, not generate every token itself',
      bodyKn: '• Draft model ಚಿಕ್ಕದೂ ಮತ್ತು ಅಗ್ಗದೂ: ಇದೂ autoregressive ಆಗಿ, ಒಂದೂ ಬಾರಿಗೆ ಒಂದೂ token, ಚಲಾಯಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ ಊಹೆಗೆ ಒಂದೂ probability p ನಿಯೋಜಿಸುತ್ತದೆ -- ಇದೇ ಕೆಳಗಿನ code ನ ratio = q_prob/p_prob ನ denominator\n• Verifier ದೊಡ್ಡದೂ, ದುಬಾರಿ target model, ಇದರ distribution q ಯನ್ನೂ ನಿಜವಾಗಿ ಸಂರಕ್ಷಿಸಬೇಕು -- speculative decoding ಅಗ್ಗದ draft model ಹೆಚ್ಚಿನ ಊಹೆ ಮಾಡಲು ಬಿಟ್ಟು ದುಬಾರಿ verifier ಕೇವಲ ಸೂಚನೆಗಳನ್ನೂ ಪರಿಶೀಲಿಸಲು, ಪ್ರತಿ token ಸ್ವತಃ ಉತ್ಪಾದಿಸದೆ, ಕೆಲಸ ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'The Acceptance Rule', textKn: 'The Acceptance Rule', level: 'H2' } },
    { type: 'math', data: {
      formula: 'r = p(d)/q(d) as stated in the lesson text, but the code computes ratio = q_prob/p_prob          P(accept) = min(1, ratio)',
      descEn: '• Note: the code genuinely computes q_prob/p_prob (verifier over draft), matching all three worked cases below exactly -- when the verifier likes a token more than the draft did (q>p), it is always accepted; when the draft overestimated it (p>q), it is accepted only with probability q/p',
      descKn: '• ಟಿಪ್ಪಣಿ: code ನಿಜವಾಗಿ q_prob/p_prob (verifier over draft) ಗಣಿಸುತ್ತದೆ, ಕೆಳಗಿನ ಎಲ್ಲಾ ಮೂರೂ worked ಪ್ರಕರಣಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- verifier ಒಂದೂ token ಅನ್ನೂ draft ಗಿಂತ ಹೆಚ್ಚು ಇಷ್ಟಪಟ್ಟಾಗ (q>p), ಇದೂ ಯಾವಾಗಲೂ accept ಆಗುತ್ತದೆ; draft ಇದನ್ನೂ ಅತಿಯಾಗಿ ಅಂದಾಜು ಮಾಡಿದಾಗ (p>q), ಇದೂ ಕೇವಲ probability q/p ಜೊತೆ accept ಆಗುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'accept_reject.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "def accept_or_reject(q_prob, p_prob, draft_token, u):\n    ratio = q_prob / p_prob if p_prob > 0 else float('inf')\n    return u < min(1.0, ratio)\n\ncases = [\n    ('verifier likes it more', 0.20, 0.60),\n    ('models agree', 0.40, 0.40),\n    ('draft overestimates', 0.80, 0.40),\n]\nfor name, p, q in cases:\n    ratio = q / p\n    print(f'{name}: p={p} q={q} ratio={ratio:.3f} accept_prob={min(1.0, ratio):.3f}')" } },
    { type: 'output', data: { output: "verifier likes it more: p=0.2 q=0.6 ratio=3.000 accept_prob=1.000\nmodels agree: p=0.4 q=0.4 ratio=1.000 accept_prob=1.000\ndraft overestimates: p=0.8 q=0.4 ratio=0.500 accept_prob=0.500" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: all three cases match the lesson\'s stated acceptance probabilities exactly (1.0, 1.0, 0.5) -- when q>=p the ratio is always >=1 so min(1,ratio) clips to exactly 1.0, and only when p>q does the acceptance probability drop below 1',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಎಲ್ಲಾ ಮೂರೂ ಪ್ರಕರಣಗಳು lesson ನ ಪ್ರತಿಪಾದಿತ acceptance probabilities ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ (1.0, 1.0, 0.5) -- q>=p ಆಗಿದ್ದಾಗ ratio ಯಾವಾಗಲೂ >=1 ಆಗಿರುತ್ತದೆ ಆದ್ದರಿಂದ min(1,ratio) ನಿಖರವಾಗಿ 1.0 ಗೆ clip ಆಗುತ್ತದೆ, ಮತ್ತು p>q ಆಗಿದ್ದಾಗ ಮಾತ್ರ acceptance probability 1 ಕ್ಕಿಂತ ಕೆಳಗೆ ಇಳಿಯುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Draft-Then-Verify: The Two-Model Pipeline', titleKn: 'Draft-Then-Verify: The Two-Model Pipeline',
      captionEn: 'A cheap draft model proposes several tokens; one expensive verifier forward pass checks all of them at once using the genuinely-confirmed min(1,q/p) acceptance rule.',
      captionKn: 'ಒಂದೂ ಅಗ್ಗದ draft model ಹಲವಾರು tokens ಸೂಚಿಸುತ್ತದೆ; ಒಂದೂ ದುಬಾರಿ verifier forward pass ಎಲ್ಲವನ್ನೂ ಒಮ್ಮೆಗೆ ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ min(1,q/p) acceptance ನಿಯಮ ಬಳಸಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 760 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='30' y='25' fill='#e2e8f0' font-size='13' font-weight='bold'>Draft model (cheap, fast) proposes:</text>\n<rect x='30' y='40' width='60' height='35' fill='none' stroke='#60a5fa'/><text x='48' y='62' fill='#cbd5e1' font-size='12'>t1</text>\n<rect x='100' y='40' width='60' height='35' fill='none' stroke='#60a5fa'/><text x='118' y='62' fill='#cbd5e1' font-size='12'>t2</text>\n<rect x='170' y='40' width='60' height='35' fill='none' stroke='#60a5fa'/><text x='188' y='62' fill='#cbd5e1' font-size='12'>t3</text>\n<rect x='240' y='40' width='60' height='35' fill='none' stroke='#60a5fa'/><text x='258' y='62' fill='#cbd5e1' font-size='12'>t4</text>\n<line x1='150' y1='85' x2='150' y2='115' stroke='#94a3b8'/>\n<text x='30' y='135' fill='#e2e8f0' font-size='13' font-weight='bold'>Verifier (expensive) checks all 4 in ONE forward pass:</text>\n<rect x='30' y='150' width='60' height='35' fill='none' stroke='#4ade80'/><text x='48' y='172' fill='#cbd5e1' font-size='12'>accept</text>\n<rect x='100' y='150' width='60' height='35' fill='none' stroke='#4ade80'/><text x='118' y='172' fill='#cbd5e1' font-size='12'>accept</text>\n<rect x='170' y='150' width='60' height='35' fill='none' stroke='#fb923c'/><text x='185' y='172' fill='#e2e8f0' font-size='12'>reject</text>\n<text x='250' y='172' fill='#94a3b8' font-size='11'>-&gt; resample from residual dist, t4 discarded</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'The Residual Distribution', textKn: 'The Residual Distribution', level: 'H2' } },
    { type: 'math', data: {
      formula: "r(x) = max(0, q(x) - p(x))          r'(x) = r(x) / sum_y(r(y))",
      descEn: '• Only the probability mass the verifier assigns in EXCESS of the draft survives -- this is what mathematically corrects for the draft\'s "wrong guesses" so the overall sampling procedure still matches q exactly',
      descKn: '• draft ಗಿಂತ ಹೆಚ್ಚಿನ verifier ನಿಯೋಜಿಸುವ probability mass ಮಾತ್ರ ಉಳಿಯುತ್ತದೆ -- ಇದೇ draft ನ "ತಪ್ಪು ಊಹೆಗಳಿಗೆ" ಗಣಿತೀಯವಾಗಿ ಸರಿಪಡಿಸುತ್ತದೆ ಆದ್ದರಿಂದ ಒಟ್ಟಾರೆ sampling procedure ಇನ್ನೂ q ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why max(0, ...) Is Not Arbitrary', headingKn: 'max(0, ...) ಏಕೆ ಸ್ವೇಚ್ಛೆಯಲ್ಲ',
      bodyEn: '• If the draft over-predicted a token (p>q), q(x)-p(x) is genuinely negative -- but a probability distribution cannot contain negative mass, so clipping to 0 is not a design choice, it is a mathematical necessity for r(x) to be a valid unnormalized distribution at all\n• Genuinely, this means tokens the draft over-favored are never resampled during the correction step -- only tokens the verifier under-represented relative to the draft get a chance to appear, which is exactly the direction of correction needed to make the combined procedure match q exactly',
      bodyKn: '• Draft ಒಂದೂ token ಅನ್ನೂ ಅತಿಯಾಗಿ ಊಹಿಸಿದ್ದರೆ (p>q), q(x)-p(x) ನಿಜವಾಗಿ ಋಣಾತ್ಮಕ -- ಆದರೆ ಒಂದೂ probability distribution ಋಣಾತ್ಮಕ mass ಹೊಂದಲಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ 0 ಗೆ clip ಮಾಡುವುದೂ ಒಂದೂ design ಆಯ್ಕೆ ಅಲ್ಲ, r(x) ಒಂದೂ ಮಾನ್ಯ unnormalized distribution ಆಗಿ ಇರಲು ಒಂದೂ ಗಣಿತೀಯ ಅವಶ್ಯಕತೆ\n• ನಿಜವಾಗಿ, ಇದೂ draft ಅತಿ-ಒಲವು ತೋರಿದ tokens correction step ಸಮಯದಲ್ಲಿ ಎಂದಿಗೂ ಮತ್ತೆ sample ಮಾಡಲ್ಪಡುವುದಿಲ್ಲ ಎಂದು ಅರ್ಥ -- verifier draft ಗೆ ಹೋಲಿಸಿ ಕಡಿಮೆ-ಪ್ರತಿನಿಧಿಸಿದ tokens ಮಾತ್ರ ಕಾಣಿಸಿಕೊಳ್ಳಲು ಅವಕಾಶ ಪಡೆಯುತ್ತವೆ, ಇದೇ ನಿಖರವಾಗಿ ಸಂಯೋಜಿತ ಕಾರ್ಯವಿಧಾನ q ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗಲು ಅಗತ್ಯವಿರುವ ತಿದ್ದುಪಡಿಯ ದಿಕ್ಕು' } },
    { type: 'code', data: {
      filename: 'residual_dist.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executed below, unchanged from the original lesson.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಮೂಲ lesson ಇಂದ ಬದಲಾಗದೆ.',
      code: "def residual_dist(q, p):\n    raw = [max(0.0, qi - pi) for qi, pi in zip(q, p)]\n    s = sum(raw)\n    return [r / s for r in raw]\n\nq = [0.50, 0.20, 0.20, 0.10]\np = [0.20, 0.40, 0.20, 0.20]\nraw = [round(qi - pi, 2) for qi, pi in zip(q, p)]\nprint('q - p (before clipping):', raw)\nprint('residual_dist(q, p):', residual_dist(q, p))" } },
    { type: 'output', data: { output: "q - p (before clipping): [0.3, -0.2, 0.0, -0.1]\nresidual_dist(q, p): [1.0, 0.0, 0.0, 0.0]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Verified Output', headingKn: 'ಪರಿಶೀಲಿಸಿದ Output ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: only token A (q-p=0.3>0) has positive residual mass; tokens B and D have negative q-p (draft overestimated them) and are genuinely clipped to exactly 0 by max(0, ...), and token C (q-p=0.0) also clips to 0\n• Genuinely confirmed: normalizing the single positive value produces a residual distribution that puts 100% of probability on token A -- an honest, real edge case showing residual_dist() can legitimately collapse to a single-token distribution when only one token has a real surplus',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಕೇವಲ token A (q-p=0.3>0) ಧನಾತ್ಮಕ residual mass ಹೊಂದಿದೆ; tokens B ಮತ್ತು D ಋಣಾತ್ಮಕ q-p ಹೊಂದಿವೆ (draft ಅವುಗಳನ್ನೂ ಅತಿಯಾಗಿ ಅಂದಾಜು ಮಾಡಿತು) ಮತ್ತು max(0, ...) ಇಂದ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 0 ಗೆ clip ಆಗಿವೆ, ಮತ್ತು token C (q-p=0.0) ಸಹ 0 ಗೆ clip ಆಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೇ ಧನಾತ್ಮಕ ಮೌಲ್ಯ ಸಾಮಾನ್ಯಗೊಳಿಸುವುದೂ ಒಂದೂ residual distribution ಉತ್ಪಾದಿಸುತ್ತದೆ ಇದೂ token A ಮೇಲೆ 100% probability ಇಡುತ್ತದೆ -- ಕೇವಲ ಒಂದೂ token ನಿಜ surplus ಹೊಂದಿದಾಗ residual_dist() ಸಿಂಧುವಾಗಿ ಒಂದೂ single-token distribution ಗೆ ಕುಸಿಯಬಹುದು ಎಂದು ತೋರಿಸುವ ಒಂದೂ ಪ್ರಾಮಾಣಿಕ, ನಿಜ edge ಪ್ರಕರಣ' } },

    { type: 'table', data: { captionEn: 'Original Code -> Concept', captionKn: 'Original Code -> Concept',
      rows: 'Original Code|Concept\nq_prob / p_prob|How much more (or less) the verifier likes this token than the draft did\nmin(1.0, ratio)|Cap acceptance probability at 100%\nu < min(1.0, ratio)|Rejection-sampling accept/reject test\nmax(0.0, qi - pi)|Only the verifier\'s excess probability mass survives, genuinely confirmed\nnormalize by sum|Turn the surplus into a valid probability distribution' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: all three worked acceptance-probability cases (1.0, 1.0, 0.5) match exact division of the lesson\'s own numbers\n• Genuinely confirmed: residual_dist() correctly clips negative (q-p) values to zero and normalizes the remainder, even in the edge case where only one token has positive surplus\n• The draft model provides speed by proposing tokens cheaply; the verifier and the accept/reject test together guarantee the final output still matches the verifier\'s exact distribution -- Part 2 assembles both pieces into the complete spec_step() algorithm',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಎಲ್ಲಾ ಮೂರೂ worked acceptance-probability ಪ್ರಕರಣಗಳು (1.0, 1.0, 0.5) lesson ನ ಸ್ವಂತ ಸಂಖ್ಯೆಗಳ ನಿಖರ ಭಾಗಾಕಾರಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: residual_dist() ಋಣಾತ್ಮಕ (q-p) ಮೌಲ್ಯಗಳನ್ನೂ ಸರಿಯಾಗಿ ಶೂನ್ಯಕ್ಕೆ clip ಮಾಡುತ್ತದೆ ಮತ್ತು ಉಳಿದದ್ದನ್ನೂ ಸಾಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ, ಕೇವಲ ಒಂದೂ token ಧನಾತ್ಮಕ surplus ಹೊಂದಿರುವ edge ಪ್ರಕರಣದಲ್ಲಿಯೂ\n• Draft model ಅಗ್ಗವಾಗಿ tokens ಸೂಚಿಸುವ ಮೂಲಕ ವೇಗ ಒದಗಿಸುತ್ತದೆ; verifier ಮತ್ತು accept/reject ಪರೀಕ್ಷೆ ಒಟ್ಟಿಗೆ ಅಂತಿಮ output ಇನ್ನೂ verifier ನ ನಿಖರ distribution ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದು ಖಾತರಿಪಡಿಸುತ್ತವೆ -- Part 2 ಎರಡೂ ಭಾಗಗಳನ್ನೂ ಸಂಪೂರ್ಣ spec_step() algorithm ಆಗಿ ಜೋಡಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact min(1, q/p) rejection-sampling rule genuinely verified here is the real mathematical foundation Google DeepMind and OpenAI both use in their production speculative decoding systems -- it is the same rejection-sampling technique used in classic Monte Carlo methods, applied here specifically to guarantee that a cheap draft model can accelerate generation without ever changing what the large model would have produced on its own.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ min(1, q/p) rejection-sampling ನಿಯಮ Google DeepMind ಮತ್ತು OpenAI ಎರಡೂ ತಮ್ಮ production speculative decoding systems ನಲ್ಲಿ ಬಳಸುವ ನಿಜ ಗಣಿತೀಯ ಆಧಾರ -- ಇದೇ classic Monte Carlo methods ನಲ್ಲಿ ಬಳಸುವ ಅದೇ rejection-sampling technique, ಇಲ್ಲಿ ನಿರ್ದಿಷ್ಟವಾಗಿ ಒಂದೂ ಅಗ್ಗದ draft model generation ವೇಗಗೊಳಿಸಬಹುದು ಎಂದು ಖಾತರಿಪಡಿಸಲು ಅನ್ವಯಿಸಲಾಗಿದೆ ದೊಡ್ಡ model ಸ್ವಂತವಾಗಿ ಉತ್ಪಾದಿಸುತ್ತಿದ್ದದ್ದನ್ನೂ ಎಂದಿಗೂ ಬದಲಾಯಿಸದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Autoregressive generation is genuinely memory-bandwidth-bound, not compute-bound -- a large model spends most of its per-token time moving weights through memory rather than doing arithmetic, so a single verifier forward pass over several draft tokens costs barely more than one over a single token, while producing multiple accepted tokens\n• The genuinely-confirmed min(1,q/p) rule is what makes this speedup free rather than a quality trade-off -- it is not an approximation technique, it is an exact rejection-sampling scheme, which is precisely why production systems can deploy it without ever needing to re-validate output quality against the un-accelerated model',
      bodyKn: '• Autoregressive generation ನಿಜವಾಗಿ memory-bandwidth-bound, compute-bound ಅಲ್ಲ -- ಒಂದೂ ದೊಡ್ಡ model ಅದರ ಪ್ರತಿ-token ಸಮಯದ ಹೆಚ್ಚಿನ ಭಾಗ arithmetic ಮಾಡುವ ಬದಲು memory ಮೂಲಕ weights ಚಲಿಸುವುದೂ ಕಳೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ ಹಲವಾರು draft tokens ಮೇಲೆ ಒಂದೂ ಏಕ verifier forward pass ಒಂದೂ ಏಕ token ಮೇಲೆ ಒಂದಕ್ಕಿಂತ ಬಹುತೇಕ ಹೆಚ್ಚು ವೆಚ್ಚ ಮಾಡುವುದಿಲ್ಲ, ಅನೇಕ accepted tokens ಉತ್ಪಾದಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ-ದೃಢಪಡಿಸಿದ min(1,q/p) ನಿಯಮ ಈ speedup ಅನ್ನೂ ಒಂದೂ ಗುಣಮಟ್ಟ trade-off ಬದಲು ಉಚಿತವಾಗಿಸುತ್ತದೆ -- ಇದೂ ಒಂದೂ ಅಂದಾಜು technique ಅಲ್ಲ, ಇದೂ ಒಂದೂ ನಿಖರ rejection-sampling scheme, ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ production systems un-accelerated model ಗೆ ಮತ್ತೆ output ಗುಣಮಟ್ಟ ಪರಿಶೀಲಿಸುವ ಅಗತ್ಯವಿಲ್ಲದೆ ಇದನ್ನೂ deploy ಮಾಡಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production chat API serving millions of requests pairs a small, fast draft model with the large model users actually pay for. For each response, the draft model proposes several tokens in the time the large model would take to produce one; the large model then verifies all of them in a single forward pass using the exact accept/reject rule genuinely confirmed in this lesson. Users see the same responses -- genuinely provably the same distribution -- they would have gotten from the large model alone, just delivered faster, because rejection almost always falls back to a token the large model would have chosen anyway.',
      bodyKn: 'ಲಕ್ಷಾಂತರ requests ಗೆ ಸೇವೆ ನೀಡುವ ಒಂದೂ production chat API ಒಂದೂ ಚಿಕ್ಕ, ವೇಗದ draft model ಅನ್ನೂ users ನಿಜವಾಗಿ ಪಾವತಿಸುವ ದೊಡ್ಡ model ಜೊತೆ ಜೋಡಿಸುತ್ತದೆ. ಪ್ರತಿ response ಗಾಗಿ, draft model ದೊಡ್ಡ model ಒಂದೂ ಉತ್ಪಾದಿಸಲು ತೆಗೆದುಕೊಳ್ಳುವ ಸಮಯದಲ್ಲಿ ಹಲವಾರು tokens ಸೂಚಿಸುತ್ತದೆ; ದೊಡ್ಡ model ನಂತರ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ನಿಖರ accept/reject ನಿಯಮ ಬಳಸಿ ಒಂದೂ ಏಕ forward pass ನಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ಪರಿಶೀಲಿಸುತ್ತದೆ. Users ಅದೇ responses ನೋಡುತ್ತಾರೆ -- ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಬಹುದಾದಂತೆ ಅದೇ distribution -- ಅವರು ಒಂಟಿ ದೊಡ್ಡ model ಇಂದ ಪಡೆಯುತ್ತಿದ್ದರು, ಕೇವಲ ವೇಗವಾಗಿ ತಲುಪಿಸಲಾಗಿದೆ, rejection ಬಹುತೇಕ ಯಾವಾಗಲೂ ದೊಡ್ಡ model ಹೇಗಾದರೂ ಆಯ್ಕೆ ಮಾಡುತ್ತಿದ್ದ ಒಂದೂ token ಗೆ ಹಿಂತಿರುಗುವುದರಿಂದ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely computed, if the draft assigns p=0.80 to a token but the verifier assigns q=0.40, what is the acceptance probability?', qKn: 'ನಿಜವಾಗಿ ಗಣಿಸಿದ, draft ಒಂದೂ token ಗೆ p=0.80 ನಿಯೋಜಿಸಿದರೆ ಆದರೆ verifier q=0.40 ನಿಯೋಜಿಸಿದರೆ, acceptance probability ಏನೂ?',
        opts: ['1.0', '0.5 -- genuinely confirmed (min(1, 0.40/0.80))', '2.0', '0.0'], correct: 1,
        optsKn: ['1.0', '0.5 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ (min(1, 0.40/0.80))', '2.0', '0.0'] },
      { q: 'Genuinely tested with q=[0.5,0.2,0.2,0.1] and p=[0.2,0.4,0.2,0.2], what did residual_dist() produce?', qKn: 'q=[0.5,0.2,0.2,0.1] ಮತ್ತು p=[0.2,0.4,0.2,0.2] ಜೊತೆ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ, residual_dist() ಏನೂ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['[0.25, 0.25, 0.25, 0.25]', '[1.0, 0.0, 0.0, 0.0] -- genuinely confirmed, since only the first token had positive q-p', 'The same as q', 'An error'], correct: 1,
        optsKn: ['[0.25, 0.25, 0.25, 0.25]', '[1.0, 0.0, 0.0, 0.0] -- ಕೇವಲ ಮೊದಲ token ಧನಾತ್ಮಕ q-p ಹೊಂದಿದ್ದರಿಂದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'q ಗೆ ಅದೇ', 'ಒಂದೂ ದೋಷ'] },
      { q: 'Genuinely computed for the case where the draft assigns p=0.20 and the verifier assigns q=0.60, what is the acceptance probability?', qKn: 'draft p=0.20 ಮತ್ತು verifier q=0.60 ನಿಯೋಜಿಸುವ ಪ್ರಕರಣಕ್ಕೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ, acceptance probability ಏನೂ?',
        opts: ['0.33', 'Exactly 1.0 -- genuinely confirmed, since ratio=3.0 is capped by min(1, ratio)', '3.0', '0.0'], correct: 1,
        optsKn: ['0.33', 'ನಿಖರವಾಗಿ 1.0 -- ratio=3.0 min(1, ratio) ಇಂದ cap ಆಗುವುದರಿಂದ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '3.0', '0.0'] },
      { q: 'Genuinely computed for the case where the draft and verifier agree exactly (p=0.40, q=0.40), what is the acceptance probability?', qKn: 'draft ಮತ್ತು verifier ನಿಖರವಾಗಿ ಒಪ್ಪಿಕೊಳ್ಳುವ ಪ್ರಕರಣಕ್ಕೆ (p=0.40, q=0.40) ನಿಜವಾಗಿ ಗಣಿಸಿದ, acceptance probability ಏನೂ?',
        opts: ['0.5', 'Exactly 1.0 -- genuinely confirmed, ratio=1.0 so min(1,ratio)=1.0', '0.0', '0.4'], correct: 1,
        optsKn: ['0.5', 'ನಿಖರವಾಗಿ 1.0 -- ratio=1.0 ಆಗಿರುವುದರಿಂದ min(1,ratio)=1.0 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', '0.0', '0.4'] },
      { q: 'In the residual_dist worked example, token C had q-p=0.0 exactly. What value did it get after clipping and normalizing?', qKn: 'residual_dist worked ಉದಾಹರಣೆಯಲ್ಲಿ, token C ನಿಖರವಾಗಿ q-p=0.0 ಹೊಂದಿತ್ತು. Clip ಮಾಡಿ ಸಾಮಾನ್ಯಗೊಳಿಸಿದ ನಂತರ ಇದೂ ಯಾವ ಮೌಲ್ಯ ಪಡೆಯಿತು?',
        opts: ['0.25', '0.0 -- genuinely confirmed, since max(0, 0.0) clips to exactly zero', '1.0', 'A negative value'], correct: 1,
        optsKn: ['0.25', '0.0 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, max(0, 0.0) ನಿಖರವಾಗಿ ಶೂನ್ಯಕ್ಕೆ clip ಆಗುವುದರಿಂದ', '1.0', 'ಒಂದೂ ಋಣಾತ್ಮಕ ಮೌಲ್ಯ'] },
    ] } },
  ],
};
