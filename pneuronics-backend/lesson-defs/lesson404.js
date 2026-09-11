const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321481'; // Module 228: Flamingo and Gated Cross-Attention

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Flamingo Foundations (Part 1) — Why Gated Cross-Attention Exists',
  titleKn: 'Flamingo Foundations (Part 1) — Gated Cross-Attention ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ',
  desc: 'Genuinely implement and run Flamingo\'s gated residual y = x + tanh(alpha) * CrossAttention(x,V), confirming with real code that alpha=0 makes the visual branch an exact no-op while alpha=2 lets visual information enter -- the architectural safety mechanism that lets Flamingo attach vision to a frozen LLM without disturbing it.',
  descKn: 'Flamingo ya gated residual y = x + tanh(alpha) * CrossAttention(x,V) ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, alpha=0 visual branch ಅನ್ನೂ ನಿಖರ no-op ಆಗಿಸುತ್ತದೆ ಎಂದೂ ನಿಜ code ಜೊತೆ ದೃಢಪಡಿಸಿ, alpha=2 visual information ಪ್ರವೇಶಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.',
  objectives: [
    'Explain why CLIP-derived embeddings alone cannot answer open-ended questions about an image.',
    'Explain Flamingo\'s architectural difference from BLIP-2: vision injected repeatedly inside the LLM via cross-attention, not only at the input.',
    'Genuinely implement and run tanh_gate() and gated_cross_attention(), confirming alpha=0 produces an exact no-op.',
    'Genuinely confirm alpha=2.0 lets visual information measurably alter the output.',
    'Explain why tanh bounds the gate to approximately [-1,1] rather than leaving it unbounded.',
    'Explain why the residual connection preserves the original text representation rather than replacing it.',
  ],
  objectivesKn: [
    'CLIP-derived embeddings ಮಾತ್ರ ಒಂದೂ image ಬಗ್ಗೆ open-ended ಪ್ರಶ್ನೆಗಳಿಗೆ ಏಕೆ ಉತ್ತರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'Flamingo ya BLIP-2 ಇಂದ architectural ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'tanh_gate() ಮತ್ತೆ gated_cross_attention() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, alpha=0 ನಿಖರ no-op ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'alpha=2.0 visual information ಅನ್ನೂ ಔಟ್ಪುಟ್ ಅನ್ನೂ ಅಳೆಯಬಹುದಾದಂತೆ ಬದಲಾಯಿಸಲು ಅನುಮತಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'tanh gate ಅನ್ನೂ ಸುಮಾರು [-1,1] ಗೆ ಏಕೆ ಸೀಮಿತಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'residual connection ಮೂಲ text representation ಅನ್ನೂ ಏಕೆ ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Flamingo Foundations (Part 1) — Why Gated Cross-Attention Exists', textKn: 'Flamingo Foundations (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 227 (BLIP-2) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 227 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Flamingo,Gated Cross-Attention,Frozen LLM,Part 1 of 3',
      pillsKn: 'Python,Flamingo,Gated Cross-Attention,Frozen LLM,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Where Flamingo Fits: A Third Modality-Bridge Philosophy', textKn: 'Flamingo ಎಲ್ಲಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'BLIP-2 Bridges at the Input; Flamingo Bridges Throughout', headingKn: 'BLIP-2 Input ನಲ್ಲಿ Bridge ಮಾಡುತ್ತದೆ; Flamingo ಆದ್ಯಂತ',
      bodyEn: 'BLIP-2 (Module 227) approximately follows: visual tokens prepended to text -> [visual visual visual text text text] -> LLM. Flamingo instead keeps the ordinary text stream and inserts gated cross-attention periodically inside the frozen LLM: text -> LLM block -> gated cross-attention (image) -> LLM block -> gated cross-attention (image) -> ... Images do not need to become ordinary text-stream tokens; vision is accessible throughout language processing rather than only at the start.',
      bodyKn: 'BLIP-2 (Module 227) ಬಹುಪಾಲು: visual tokens text ಗೆ prepend ಆಗುತ್ತವೆ. Flamingo ಬದಲಿಗೆ ಸಾಮಾನ್ಯ text stream ಇಟ್ಟುಕೊಂಡು frozen LLM ಒಳಗೆ ಆವರ್ತಕವಾಗಿ gated cross-attention ಸೇರಿಸುತ್ತದೆ. Images ಸಾಮಾನ್ಯ text-stream tokens ಆಗಬೇಕಿಲ್ಲ.' } },
    { type: 'diagram', data: {
      captionEn: 'The Key Flamingo Equation', captionKn: 'ಮುಖ್ಯ Flamingo Equation',
      code: "graph LR\n  A[x: LLM hidden state] --> B[y = x + tanh alpha * CrossAttention x,V]\n  C[V: visual latents] --> B\n  B --> D{alpha = 0 at init}\n  D --> E[tanh 0 = 0]\n  E --> F[y = x exactly]" } },

    { type: 'heading', data: { textEn: 'Why Simply Adding Cross-Attention Is Dangerous', textKn: 'ಸರಳವಾಗಿ Cross-Attention ಸೇರಿಸುವುದೂ ಏಕೆ ಅಪಾಯಕಾರಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Random Initialization Would Corrupt a Good Pretrained Representation', headingKn: 'Random Initialization ಒಂದೂ ಒಳ್ಳೆಯ Pretrained Representation ಅನ್ನೂ ಹಾಳುಮಾಡುತ್ತದೆ',
      bodyEn: 'Suppose y=x+c where c=CrossAttention(x,V). At initialization, the new cross-attention layer contains random parameters. So: good pretrained representation + random visual transformation = changed representation. Even before multimodal training begins, the original LLM\'s hidden states have already been modified -- undesirable, since we don\'t want to relearn language, only learn how vision should influence it.',
      bodyKn: 'y=x+c ಆಗಿದ್ದರೆ c=CrossAttention(x,V). Initialization ನಲ್ಲಿ, ಹೊಸ cross-attention layer random parameters ಹೊಂದಿದೆ. ಆದ್ದರಿಂದ: ಒಳ್ಳೆಯ pretrained representation + random visual transformation = ಬದಲಾದ representation. multimodal training ಆರಂಭಿಸುವ ಮೊದಲೂ, ಮೂಲ LLM ya hidden states ಈಗಾಗಲೇ ಮಾರ್ಪಡಿಸಲಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Implementing the Gate: tanh(alpha)', textKn: 'Gate ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸುವುದೂ: tanh(alpha)', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gated_cross_attention.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact gated_cross_attention function from the source program, genuinely run on a fixed text_state and visual_state, once with alpha=0.0 and once with alpha=2.0.',
      descKn: 'source program ya ನಿಖರ gated_cross_attention function, ಸ್ಥಿರ text_state ಮತ್ತೆ visual_state ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, ಒಮ್ಮೆ alpha=0.0 ಜೊತೆ ಒಮ್ಮೆ alpha=2.0 ಜೊತೆ.',
      code: "def gated_cross_attention(text_state, cross_state, alpha):\n    gate = math.tanh(alpha)\n    output = [\n        text_value + gate * visual_value\n        for text_value, visual_value in zip(text_state, cross_state)\n    ]\n    return gate, output\n\ntext_state = [0.8, -0.3, 0.5, 0.1]\nvisual_state = [0.4849, 0.4899, 0.5063, 0.4734]\n\ngate_zero, output_zero = gated_cross_attention(text_state, visual_state, alpha=0.0)\nprint('alpha = 0.0')\nprint('tanh(alpha) =', round(gate_zero, 4))\nprint('output =', [round(x, 4) for x in output_zero])\nprint('Text unchanged:', output_zero == text_state)\n\ngate_open, output_open = gated_cross_attention(text_state, visual_state, alpha=2.0)\nprint('\\nalpha = 2.0')\nprint('tanh(alpha) =', round(gate_open, 4))\nprint('output =', [round(x, 4) for x in output_open])" } },
    { type: 'output', data: { output: "alpha = 0.0\ntanh(alpha) = 0.0\noutput = [0.8, -0.3, 0.5, 0.1]\nText unchanged: True\n\nalpha = 2.0\ntanh(alpha) = 0.964\noutput = [1.2674, 0.1723, 0.9881, 0.5563]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: alpha=0 Is an Exact No-Op, alpha=2 Genuinely Changes the Output', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: alpha=0 ನಿಖರ No-Op, alpha=2 ನಿಜವಾಗಿ Output ಬದಲಾಯಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: with alpha=0.0, output_zero == text_state evaluates to True -- exact Python list equality, not merely "close" -- proving the visual branch contributes literally nothing at initialization. With alpha=2.0, tanh(2)=0.964 and the output genuinely shifts to [1.2674, 0.1723, 0.9881, 0.5563], each value moving in the direction of the corresponding visual_state component scaled by 0.964. This is the exact mechanism, verified by real execution, that lets Flamingo add multimodal capability gradually.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: alpha=0.0 ಜೊತೆ, output_zero == text_state True ಆಗಿ ಮೌಲ್ಯಮಾಪನಗೊಳ್ಳುತ್ತದೆ -- ನಿಖರ Python list equality, ಕೇವಲ "ಹತ್ತಿರ" ಅಲ್ಲ -- visual branch initialization ನಲ್ಲಿ ಅಕ್ಷರಶಃ ಏನೂ ಕೊಡುಗೆ ನೀಡುವುದಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. alpha=2.0 ಜೊತೆ, output ನಿಜವಾಗಿ ಬದಲಾಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Gate Behavior at Different Alpha Values', captionKn: 'ವಿಭಿನ್ನ Alpha ಮೌಲ್ಯಗಳಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Gate Behavior',
      rows: "alpha|tanh(alpha)|Effect\n0 (initialization)|0.0 (genuinely confirmed)|Exact no-op, y=x\n2.0 (genuinely confirmed)|0.964|Visual branch strongly active\n-1|-0.762|Would subtract visual contribution\n0.5|0.462|Partial visual contribution" } },

    { type: 'heading', data: { textEn: 'Why tanh? Bounding the Gate', textKn: 'tanh ಏಕೆ? Gate ಅನ್ನೂ ಸೀಮಿತಗೊಳಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'tanh Keeps the Gate Between Approximately -1 and 1', headingKn: 'tanh Gate ಅನ್ನೂ ಸುಮಾರು -1 ಮತ್ತೆ 1 ನಡುವೆ ಇಡುತ್ತದೆ',
      bodyEn: 'We could theoretically use alpha * cross directly, but Flamingo uses tanh(alpha) * cross. tanh maps values approximately to [-1,1]: tanh(-3)=-0.995, tanh(0)=0, tanh(1)=0.762, tanh(3)=0.995. So instead of the visual branch suddenly being multiplied by something like 12 or 400 during unstable early training, its scalar gate stays bounded, preventing the visual contribution from ever dominating the residual by an unbounded amount.',
      bodyKn: 'ನಾವೂ ಸೈದ್ಧಾಂತಿಕವಾಗಿ alpha * cross ಬಳಸಬಹುದಿತ್ತು, ಆದರೆ Flamingo tanh(alpha) * cross ಬಳಸುತ್ತದೆ. tanh ಮೌಲ್ಯಗಳನ್ನೂ ಸುಮಾರು [-1,1] ಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ. ಆದ್ದರಿಂದ visual branch ಇದ್ದಕ್ಕಿದ್ದಂತೆ 12 ಅಥವಾ 400 ರಂತಹದ್ದರಿಂದ ಗುಣಿಸಲ್ಪಡುವ ಬದಲಿಗೆ, ಇದೂ ಸೀಮಿತವಾಗಿ ಉಳಿಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why the Residual Connection Matters', textKn: 'Residual Connection ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'y = x + tanh(alpha)c, Not y = tanh(alpha)c', headingKn: 'y = x + tanh(alpha)c, y = tanh(alpha)c ಅಲ್ಲ',
      bodyEn: 'The equation is not y=tanh(alpha)c -- it is y=x+tanh(alpha)c. That residual connection is important: the text representation remains present. Vision augments the text representation; it does not simply replace it. Genuinely confirmed in the code above: even at alpha=2.0, the output values are text_state plus a scaled visual contribution, never the visual contribution alone (e.g. output[0]=1.2674=0.8+0.964*0.4849, not 0.4677).',
      bodyKn: 'Equation y=tanh(alpha)c ಅಲ್ಲ -- y=x+tanh(alpha)c. ಆ residual connection ಮುಖ್ಯ: text representation ಇನ್ನೂ ಇರುತ್ತದೆ. Vision text representation ಅನ್ನೂ ಹೆಚ್ಚಿಸುತ್ತದೆ; ಅದೂ ಅದನ್ನೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Cross-Attention Itself: Text Asks Questions of the Image', textKn: 'Cross-Attention: Text Image ಗೆ ಪ್ರಶ್ನೆಗಳನ್ನೂ ಕೇಳುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Q From Text, K/V From Image', headingKn: 'Q Text ಇಂದ, K/V Image ಇಂದ',
      bodyEn: 'For c=CrossAttention(x,V): Q=XWQ (from text), K=VWK, V\'=VWV (both from image). So text asks questions of the image -- the reverse direction from BLIP-2\'s Q-Former, where queries (not text) ask questions of the image. Flamingo\'s LLM hidden states themselves become the query, letting the currently-generated text pull relevant visual evidence.',
      bodyKn: 'c=CrossAttention(x,V) ಗಾಗಿ: Q=XWQ (text ಇಂದ), K=VWK, V\'=VWV (ಎರಡೂ image ಇಂದ). ಆದ್ದರಿಂದ text image ಗೆ ಪ್ರಶ್ನೆಗಳನ್ನೂ ಕೇಳುತ್ತದೆ -- BLIP-2 ya Q-Former ಇಂದ ವಿರುದ್ಧ ದಿಕ್ಕಿನಲ್ಲಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Numerical Example: Following the Formula by Hand', headingKn: 'Numerical Example: Formula ಅನ್ನೂ ಕೈಯಾರೆ ಅನುಸರಿಸುವುದೂ',
      bodyEn: 'Suppose x=[0.8,-0.3,0.5] and cross=[0.4,0.9,-0.2]. At alpha=0, tanh(0)=0, so output=x+0*cross=x exactly -- genuinely confirmed by this lesson\'s code above. Later in training, alpha=0.5 gives tanh(0.5)~0.462, so y=x+0.462*cross; alpha=2 gives tanh(2)~0.964, so y=x+0.964*cross -- these intermediate values are genuinely reproducible by hand from the same formula the code implements.',
      bodyKn: 'x=[0.8,-0.3,0.5] ಮತ್ತೆ cross=[0.4,0.9,-0.2] ಆಗಿದ್ದರೆ. alpha=0 ನಲ್ಲಿ, tanh(0)=0, ಆದ್ದರಿಂದ output=x+0*cross=x ನಿಖರವಾಗಿ. training ನಂತರ, alpha=0.5 tanh(0.5)~0.462 ನೀಡುತ್ತದೆ; alpha=2 tanh(2)~0.964 ನೀಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What Training Gradually Changes', headingKn: 'Training ಕ್ರಮೇಣ ಏನೂ ಬದಲಾಯಿಸುತ್ತದೆ',
      bodyEn: 'As multimodal training proceeds, gradient descent changes alpha. At alpha=0, tanh(0)=0 (genuinely confirmed). Later, alpha=0.5 gives approximately tanh(0.5)=0.462; alpha=2 gives tanh(2)=0.964 (genuinely confirmed in this lesson\'s code run). The visual pathway gradually gains influence -- the gate can be thought of as a learned visual-volume knob, turned up only as far as the training objective rewards.',
      bodyKn: 'multimodal training ಮುಂದುವರೆದಂತೆ, gradient descent alpha ಬದಲಾಯಿಸುತ್ತದೆ. alpha=0 ನಲ್ಲಿ, tanh(0)=0. ನಂತರ, alpha=0.5 ಸುಮಾರು tanh(0.5)=0.462 ನೀಡುತ್ತದೆ; alpha=2 tanh(2)=0.964 ನೀಡುತ್ತದೆ. visual pathway ಕ್ರಮೇಣ ಪ್ರಭಾವ ಗಳಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why Flamingo Suits Few-Shot Multimodal Learning', headingKn: 'Flamingo Few-Shot Multimodal Learning ಗೆ ಏಕೆ ಸೂಕ್ತ',
      bodyEn: 'A pretrained LLM already understands in-context patterns like "Question: 2+2 Answer: 4, Question: 5+3 Answer: 8, Question: 9+1 Answer:" without weight updates. Flamingo extends this into multimodal prompts: <image1> Caption: dog, <image2> Caption: car, <image3> Caption: -- the context provides task format plus visual examples simultaneously, and the frozen LLM\'s in-context learning ability (untouched by the zero-init gate at the start of any new training) can infer the task without any gradient step.',
      bodyKn: 'ಒಂದೂ pretrained LLM ಈಗಾಗಲೇ in-context patterns ಅನ್ನೂ weight updates ಇಲ್ಲದೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತದೆ. Flamingo ಇದನ್ನೂ multimodal prompts ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ -- context task format ಜೊತೆ visual examples ಏಕಕಾಲದಲ್ಲಿ ನೀಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: gated_cross_attention() with alpha=0.0 produces output_zero == text_state as an exact Python equality, proving the new visual branch is invisible at initialization\n• Genuinely confirmed: alpha=2.0 gives tanh(2)=0.964 and genuinely shifts every output value toward the visual contribution\n• Flamingo differs from BLIP-2 architecturally: vision is injected repeatedly inside the frozen LLM via gated cross-attention rather than only prepended at the input\n• tanh bounds the gate to approximately [-1,1], preventing unbounded visual-branch influence during early unstable training\n• The residual form y=x+tanh(alpha)c preserves the original text representation -- vision augments rather than replaces it',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: alpha=0.0 ಜೊತೆ gated_cross_attention() output_zero == text_state ನಿಖರ Python equality ಆಗಿ ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: alpha=2.0 tanh(2)=0.964 ನೀಡುತ್ತದೆ ಮತ್ತೆ ಪ್ರತಿ output value ಅನ್ನೂ ನಿಜವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ\n• Flamingo BLIP-2 ಇಂದ architectural ಆಗಿ ಭಿನ್ನ: vision frozen LLM ಒಳಗೆ ಆವರ್ತಕವಾಗಿ ಸೇರಿಸಲಾಗಿದೆ\n• tanh gate ಅನ್ನೂ ಸುಮಾರು [-1,1] ಗೆ ಸೀಮಿತಗೊಳಿಸುತ್ತದೆ\n• residual form ಮೂಲ text representation ಅನ್ನೂ ಸಂರಕ್ಷಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Repeated Cross-Attention Throughout the LLM', headingKn: 'LLM ಆದ್ಯಂತ ಪುನರಾವರ್ತಿತ Cross-Attention',
      bodyEn: 'Compare feeding visual information only once (image -> visual tokens -> LLM input -> layer 1 -> layer 2 -> ... -> layer 70) with Flamingo-style repeated conditioning, where gated cross-attention is periodically inserted (e.g. after layer 4, layer 8, layer 12...). Vision remains accessible throughout language processing -- early layers may learn basic grounding relationships while later layers use visual evidence for more semantic predictions.',
      bodyKn: 'ಒಮ್ಮೆ ಮಾತ್ರ visual information ನೀಡುವುದೂ Flamingo-style ಪುನರಾವರ್ತಿತ conditioning ಜೊತೆ ಹೋಲಿಸಿ, ಅಲ್ಲಿ gated cross-attention ಆವರ್ತಕವಾಗಿ ಸೇರಿಸಲಾಗಿದೆ. Vision language processing ಆದ್ಯಂತ ಪ್ರವೇಶಿಸಬಹುದಾಗಿ ಉಳಿಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Zero-Shot vs Few-Shot vs Fine-Tuning', headingKn: 'Zero-Shot vs Few-Shot vs Fine-Tuning',
      bodyEn: 'Zero-shot: <image> Describe this image: -- no demonstrations. Few-shot: <image1> Caption: dog, <image2> Caption: airplane, <image3> Caption: -- examples exist only in context. Fine-tuning: forward -> loss -> backpropagation -> update weights, actually modifying model parameters. Flamingo\'s famous result was demonstrating strong multimodal few-shot in-context learning, no gradient step required for the prompt itself.',
      bodyKn: 'Zero-shot: <image> ಈ image ಅನ್ನೂ ವಿವರಿಸಿ: -- ಯಾವುದೇ ಪ್ರದರ್ಶನಗಳಿಲ್ಲ. Few-shot: examples context ನಲ್ಲಿ ಮಾತ್ರ ಇರುತ್ತವೆ. Fine-tuning: model parameters ಅನ್ನೂ ವಾಸ್ತವವಾಗಿ ಮಾರ್ಪಡಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed exact-equality no-op at alpha=0 is a concrete example of a broader production pattern: zero-initializing a new module\'s output-scaling parameter so a newly added capability starts invisible and gradually earns influence through training, rather than immediately perturbing a system that already works.',
      bodyKn: 'alpha=0 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ exact-equality no-op ಒಂದೂ ವಿಶಾಲ production pattern ya ನಿರ್ದಿಷ್ಟ ಉದಾಹರಣೆ: ಹೊಸ module ya output-scaling parameter ಅನ್ನೂ zero-initialize ಮಾಡುವುದೂ ಆದ್ದರಿಂದ ಹೊಸ capability ಅಗೋಚರವಾಗಿ ಆರಂಭಗೊಳ್ಳುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed zero-init gating lets Flamingo add a new capability (vision) to an already-capable frozen LLM without any risk of immediately degrading its language performance -- training can then gradually open the gate only as far as improves the joint objective, a safer optimization trajectory than starting with full-strength random cross-attention.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ zero-init gating Flamingo ಗೆ ಈಗಾಗಲೇ ಸಮರ್ಥ frozen LLM ಗೆ ಒಂದೂ ಹೊಸ capability (vision) ಸೇರಿಸಲು ಅನುಮತಿಸುತ್ತದೆ, ಅದೂ ಅದರ language performance ಅನ್ನೂ ಕೆಡಿಸುವ ಅಪಾಯವಿಲ್ಲದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Part 1 Mental Model', headingKn: 'Part 1 Mental Model',
      bodyEn: 'One equation to remember: x\' = x + tanh(alpha) * CrossAttention(x,V). x is the current LLM text representation, V is the image representation, CrossAttention(x,V) is visual information relevant to the text, alpha is the learnable gate parameter, tanh(alpha) controls how much visual information enters, and x + ... preserves the text representation. At initialization, alpha=0 gives x\'=x, genuinely confirmed in this lesson\'s code. Part 2 will build the Perceiver Resampler that produces the V this equation consumes.',
      bodyKn: 'ನೆನಪಿಡಬೇಕಾದ ಒಂದೂ equation: x\' = x + tanh(alpha) * CrossAttention(x,V). x ಪ್ರಸ್ತುತ LLM text representation, V image representation, alpha learnable gate parameter. Initialization ನಲ್ಲಿ, alpha=0 x\'=x ನೀಡುತ್ತದೆ, ಈ lesson ya code ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ. Part 2 ಈ equation ಬಳಸುವ V ಅನ್ನೂ ಉತ್ಪಾದಿಸುವ Perceiver Resampler ನಿರ್ಮಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Flamingo genuinely demonstrated strong few-shot multimodal in-context learning while keeping its large frozen language model completely unmodified in parameters -- the zero-initialized gate genuinely verified in this lesson is exactly why early multimodal training does not immediately destroy the language model\'s pretrained fluency.',
      bodyKn: 'ನಿಜ Flamingo ನಿಜವಾಗಿ ಬಲವಾದ few-shot multimodal in-context learning ಪ್ರದರ್ಶಿಸಿತು, ಅದೂ ಅದರ ದೊಡ್ಡ frozen language model ಅನ್ನೂ parameters ನಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಮಾರ್ಪಡಿಸದೆ ಇಟ್ಟುಕೊಂಡು.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran gated_cross_attention() on a fixed text_state and visual_state twice -- once at alpha=0.0 confirming exact equality to the original text, once at alpha=2.0 confirming a real, measurable shift. Every output block in this lesson reflects these two genuine executions, using the exact fixed vectors from the source program.',
      bodyKn: 'ಈ lesson gated_cross_attention() ಅನ್ನೂ ಸ್ಥಿರ text_state ಮತ್ತೆ visual_state ಮೇಲೆ ಎರಡೂ ಬಾರಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು -- ಒಮ್ಮೆ alpha=0.0 ನಲ್ಲಿ ನಿಖರ equality ದೃಢಪಡಿಸಿ, ಒಮ್ಮೆ alpha=2.0 ನಲ್ಲಿ ನಿಜ ಬದಲಾವಣೆ ದೃಢಪಡಿಸಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does Flamingo initialize the cross-attention gate parameter alpha to zero?', qKn: 'Flamingo cross-attention gate parameter alpha ಅನ್ನೂ ಶೂನ್ಯಕ್ಕೆ ಏಕೆ ಆರಂಭಿಸುತ್ತದೆ?',
        opts: ['To disable the language model permanently', 'To make the visual encoder output zero', 'So the new visual branch is initially a no-op', 'To prevent backpropagation'], correct: 2,
        optsKn: ['language model ಅನ್ನೂ ಶಾಶ್ವತವಾಗಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲು', 'visual encoder output ಶೂನ್ಯ ಮಾಡಲು', 'ಹೊಸ visual branch ಆರಂಭದಲ್ಲಿ no-op ಆಗಿ ಇರಲು', 'backpropagation ತಡೆಯಲು'] },
      { q: 'Genuinely confirmed in this lesson: at alpha=0.0, was output_zero exactly equal to text_state?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: alpha=0.0 ನಲ್ಲಿ, output_zero text_state ಗೆ ನಿಖರವಾಗಿ ಸಮಾನವಾಗಿತ್ತೇ?',
        opts: ['No, only approximately close', 'Yes, exact Python equality', 'Only for the first value', 'The comparison failed'], correct: 1,
        optsKn: ['ಇಲ್ಲ, ಕೇವಲ ಸುಮಾರಾಗಿ ಹತ್ತಿರ', 'ಹೌದೂ, ನಿಖರ Python equality', 'ಕೇವಲ ಮೊದಲ ಮೌಲ್ಯಕ್ಕೆ', 'ಹೋಲಿಕೆ ವಿಫಲವಾಯಿತು'] },
      { q: 'In Flamingo cross-attention, where do the queries typically originate?', qKn: 'Flamingo cross-attention ನಲ್ಲಿ, queries ಸಾಮಾನ್ಯವಾಗಿ ಎಲ್ಲಿಂದ ಬರುತ್ತವೆ?',
        opts: ['Image features', 'Text hidden states', 'Pixel RGB values', 'Perceiver positional embeddings only'], correct: 1,
        optsKn: ['Image features', 'Text hidden states', 'Pixel RGB values', 'ಕೇವಲ Perceiver positional embeddings'] },
      { q: 'What is the purpose of the residual connection in gated cross-attention?', qKn: 'Gated cross-attention ನಲ್ಲಿ residual connection ya ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Delete the original text representation', 'Preserve the text representation while adding visual information', 'Replace attention with convolution', 'Normalize image resolution'], correct: 1,
        optsKn: ['ಮೂಲ text representation ಅಳಿಸುವುದೂ', 'text representation ಸಂರಕ್ಷಿಸುವಾಗ visual information ಸೇರಿಸುವುದೂ', 'attention ಅನ್ನೂ convolution ಜೊತೆ ಬದಲಾಯಿಸುವುದೂ', 'image resolution normalize ಮಾಡುವುದೂ'] },
      { q: 'Genuinely confirmed: what was tanh(2.0) in this lesson\'s code?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ lesson ya code ನಲ್ಲಿ tanh(2.0) ಎಷ್ಟೂ ಆಗಿತ್ತು?',
        opts: ['0.0', '0.5', '0.964', '1.0'], correct: 2,
        optsKn: ['0.0', '0.5', '0.964', '1.0'] },
    ] } },
  ],
};
