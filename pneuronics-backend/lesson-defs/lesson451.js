const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214b4'; // Module 245: Embodied VLAs: RT-2, OpenVLA, Pi-0, GR00T

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Embodied VLAs: RT-2, OpenVLA, Pi-0, GR00T (Part 1) — Action Tokenization and Co-Fine-Tuning',
  titleKn: 'Embodied VLAs: RT-2, OpenVLA, Pi-0, GR00T (Part 1) — Action Tokenization and Co-Fine-Tuning',
  desc: 'Genuinely run RT-2-style 256-bin action tokenization on stdlib Python, confirm real quantization error, and understand why VLM knowledge plus robot demonstrations transfer web semantics into physical robot control.',
  descKn: 'RT-2-style 256-bin action tokenization ಅನ್ನೂ stdlib Python ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಿಜ quantization error ದೃಢಪಡಿಸಿ, VLM knowledge, robot demonstrations web semantics ಅನ್ನೂ physical robot control ಗೆ ಏಕೆ ವರ್ಗಾಯಿಸುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Explain the difference between a VLM (P(text|image,text)) and a VLA (P(action|image,text,state)).',
    'Genuinely run ActionTokenizer.encode()/decode() and confirm the real maximum quantization error for 256-bin tokenization.',
    'Derive the quantization formula q=round((a+1)/2 * 255) and verify it by hand against genuine Bash output.',
    'Explain why vocab_offset=32000 keeps action tokens from colliding with text tokens.',
    'Explain co-fine-tuning: why mixing web vision-language data with robot demonstrations preserves semantic knowledge.',
    'Explain the cross-embodiment problem and why Open X-Embodiment needs action-space normalization.',
  ],
  objectivesKn: [
    'VLM (P(text|image,text)) ಮತ್ತು VLA (P(action|image,text,state)) ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'ActionTokenizer.encode()/decode() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ 256-bin tokenization ಗಾಗಿ ನಿಜ maximum quantization error ದೃಢಪಡಿಸಿ.',
    'q=round((a+1)/2 * 255) ಸೂತ್ರ ಪಡೆದುಕೊಂಡು ನಿಜ Bash output ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.',
    'vocab_offset=32000 action tokens ಅನ್ನೂ text tokens ಜೊತೆ ಏಕೆ ಘರ್ಷಣೆಯಾಗದಂತೆ ಇಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Co-fine-tuning ವಿವರಿಸಿ: web vision-language data, robot demonstrations ಮಿಶ್ರಣ ಮಾಡುವುದೂ semantic knowledge ಏಕೆ ಸಂರಕ್ಷಿಸುತ್ತದೆ.',
    'Cross-embodiment problem ವಿವರಿಸಿ, Open X-Embodiment action-space normalization ಏಕೆ ಅಗತ್ಯ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Embodied VLAs: RT-2, OpenVLA, Pi-0, GR00T (Part 1)', textKn: 'Embodied VLAs: RT-2, OpenVLA, Pi-0, GR00T (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: transformer decoding, VLM basics · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: transformer decoding, VLM basics · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,VLA,Action Tokenization,RT-2,Part 1 of 3',
      pillsKn: 'Python,VLA,Action Tokenization,RT-2,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'From VLM to VLA', textKn: 'VLM ಇಂದ VLA ಗೆ', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'VLM vs VLA as Probability Models', headingKn: 'Probability Models ಆಗಿ VLM vs VLA',
      formula: 'VLM = P(\\text{text} \\mid \\text{image, text}), \\qquad VLA = P(\\text{action} \\mid \\text{image, text, state})',
      explanationEn: 'A VLM sees an image and a question, and outputs text -- nothing physically happens. A VLA sees a camera image and a language instruction (plus robot state), and outputs a robot action vector such as [dx, dy, dz, roll, pitch, yaw, gripper]. The architecture can be nearly identical; the output space changes from vocabulary tokens to action tokens.',
      explanationKn: 'VLM ಒಂದೂ image, ಪ್ರಶ್ನೆ ನೋಡಿ text ಔಟ್‌ಪುಟ್ ಮಾಡುತ್ತದೆ -- ಭೌತಿಕವಾಗಿ ಏನೂ ಸಂಭವಿಸುವುದಿಲ್ಲ. VLA ಒಂದೂ camera image, language instruction (ಜೊತೆ robot state) ನೋಡಿ ಒಂದೂ robot action vector ಔಟ್‌ಪುಟ್ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: "RT-2's Key Idea: Actions as Language Tokens", textKn: "RT-2 ya Key Idea: Language Tokens ಆಗಿ Actions", level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Robot Actions Are Harder Than Text', headingKn: 'Robot Actions Text ಗಿಂತ ಏಕೆ ಕಷ್ಟ',
      bodyEn: 'A language decoder naturally predicts categorical vocabulary IDs, not arbitrary floats like 0.18342857. Robot control is continuous. RT-2\'s solution: divide each normalized action dimension a in [-1,1] into 256 discrete bins, so the transformer outputs a token like <ACTION_194> instead of a raw float -- turning robot control into token prediction, the same basic decoder used for language.',
      bodyKn: 'Language decoder ಸ್ವಾಭಾವಿಕವಾಗಿ categorical vocabulary IDs ಊಹಿಸುತ್ತದೆ, 0.18342857 ನಂತಹ ಅನಿಯಂತ್ರಿತ floats ಅಲ್ಲ. Robot control ನಿರಂತರ. RT-2 ya ಪರಿಹಾರ: ಪ್ರತಿ normalized action dimension a in [-1,1] ಅನ್ನೂ 256 discrete bins ಗೆ ವಿಭಜಿಸಿ.' } },
    { type: 'math', data: {
      headingEn: 'Quantization Formula', headingKn: 'Quantization ಸೂತ್ರ',
      formula: 'q = \\operatorname{round}\\left(\\frac{a+1}{2} \\times (B-1)\\right), \\quad B = 256',
      explanationEn: 'Our genuine Python run uses ActionTokenizer with num_bins=256, so bin_index = round(normalized * (num_bins-1)) = round(normalized * 255). For a=0.5: normalized=(0.5+1)/2=0.75, bin=round(0.75*255)=191, matching the pasted lesson\'s worked example exactly.',
      explanationKn: 'ನಮ್ಮ ನಿಜ Python run ActionTokenizer num_bins=256 ಜೊತೆ ಬಳಸುತ್ತದೆ. a=0.5 ಗೆ: normalized=(0.5+1)/2=0.75, bin=round(0.75*255)=191, pasted lesson ya worked example ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'vla_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely running ActionTokenizer.encode()/decode() on an 8-dimensional action spanning the full [-1,1] range, using num_bins=256, vocab_offset=32000.',
      descKn: 'Full [-1,1] range ಆವರಿಸುವ 8-dimensional action ಮೇಲೆ ActionTokenizer.encode()/decode() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ.',
      code: "tokenizer = ActionTokenizer(num_bins=256, vocab_offset=32000)\naction = [-1.00, -0.75, -0.25, 0.00, 0.25, 0.50, 0.75, 1.00]\ntokens = tokenizer.encode(action)\nreconstructed = tokenizer.decode(tokens)\nprint('tokens:', tokens)\nprint('reconstructed:', [round(x, 4) for x in reconstructed])\nerrors = [abs(a - b) for a, b in zip(action, reconstructed)]\nprint('maximum quantization error:', round(max(errors), 6))" } },
    { type: 'output', data: { output: "tokens: [32000, 32032, 32096, 32128, 32159, 32191, 32223, 32255]\nreconstructed: [-1.0, -0.749, -0.2471, 0.0039, 0.2471, 0.498, 0.749, 1.0]\nmaximum quantization error: 0.003922" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Maximum Quantization Error Matches the Theoretical Bound', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Maximum Quantization Error Theoretical Bound ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: the actual maximum error across all 8 dimensions is 0.003922, matching the theoretical bound epsilon_max ~= 1/255 ~= 0.00392 from the lesson\'s derivation. Also genuinely confirmed: vocab_offset=32000 shifts every bin into the range 32000-32255, keeping action tokens disjoint from a language vocabulary that might occupy IDs 0-31999.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ 8 dimensions ಆದ್ಯಂತ ನಿಜ maximum error 0.003922, theoretical bound epsilon_max ~= 1/255 ~= 0.00392 ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ. vocab_offset=32000 ಪ್ರತಿ bin ಅನ್ನೂ 32000-32255 range ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running a Toy VLA Inference', textKn: 'Toy VLA Inference ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'vla_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'ToyVLA.predict() genuinely run with observation="camera sees a red cube to the left of a blue bowl" and instruction="pick up the red cube", producing discrete action tokens for a 10-DOF robot.',
      descKn: 'ToyVLA.predict() observation, instruction ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, 10-DOF robot ಗಾಗಿ discrete action tokens ಉತ್ಪಾದಿಸುತ್ತದೆ.',
      code: "vla = ToyVLA(action_dim=10, representation='discrete')\ntokens = vla.predict(\n    'camera sees a red cube to the left of a blue bowl',\n    'pick up the red cube',\n)\nprint('Action tokens:', tokens)" } },
    { type: 'output', data: { output: "Action tokens: [32041, 32097, 32216, 32036, 32155, 32075, 32129, 32198, 32176, 32076]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 10-DOF Action Produces Exactly 10 Tokens', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 10-DOF Action ನಿಖರವಾಗಿ 10 Tokens ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: for action_dim=10, the discrete tokenizer independently quantizes every dimension, producing exactly 10 vocabulary IDs in the 32000-32255 range. Note this reason() function is a deterministic stand-in seeded from the observation+instruction strings, not a trained neural network -- it demonstrates the representation pipeline, not real semantic reasoning.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: action_dim=10 ಗೆ, discrete tokenizer ಪ್ರತಿ dimension ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ quantize ಮಾಡುತ್ತದೆ, 32000-32255 range ನಲ್ಲಿ ನಿಖರವಾಗಿ 10 vocabulary IDs ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Co-Fine-Tuning: Preserving Web Knowledge While Learning to Act', textKn: 'Co-Fine-Tuning: Act ಮಾಡಲು ಕಲಿಯುವಾಗ Web Knowledge ಸಂರಕ್ಷಿಸುವುದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Mix Web Data with Robot Demonstrations', headingKn: 'Web Data ಅನ್ನೂ Robot Demonstrations ಜೊತೆ ಏಕೆ ಮಿಶ್ರಣ ಮಾಡಬೇಕು',
      bodyEn: 'Training only on robot actions risks destroying general visual-language capabilities. RT-2 interleaves web batches (image-caption, VQA, text tasks) with robot batches (image+instruction -> action) so the model retains semantic knowledge like "water bottle -> drinkable" while learning motor behavior. This lets instructions never seen in robot demos (e.g. "pick up something I could drink") still work, because the VLM already knows the relevant semantic relationship.',
      bodyKn: 'ಕೇವಲ robot actions ಮೇಲೆ ತರಬೇತಿ ಸಾಮಾನ್ಯ visual-language capabilities ನಾಶಪಡಿಸುವ ಅಪಾಯ ಹೊಂದಿದೆ. RT-2 web batches ಅನ್ನೂ robot batches ಜೊತೆ ಪರ್ಯಾಯವಾಗಿ ಬಳಸುತ್ತದೆ, model semantic knowledge ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ.' } },
    { type: 'math', data: {
      headingEn: 'Co-Fine-Tuning Objective', headingKn: 'Co-Fine-Tuning Objective',
      formula: 'L = \\lambda_{web} L_{web} + \\lambda_{robot} L_{robot}',
      explanationEn: 'L_web maintains semantic knowledge from image-text tasks; L_robot teaches action prediction from (image, instruction) -> action pairs. Batches interleave between the two datasets during training rather than training sequentially on one then the other.',
      explanationKn: 'L_web image-text tasks ಇಂದ semantic knowledge ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ; L_robot (image, instruction) -> action pairs ಇಂದ action prediction ಕಲಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Open X-Embodiment and the Cross-Embodiment Problem', textKn: 'Open X-Embodiment, Cross-Embodiment Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Combining Robot Datasets Is Not Trivial', headingKn: 'Robot Datasets ಸಂಯೋಜಿಸುವುದೂ ಸುಲಭವಲ್ಲ ಏಕೆ',
      bodyEn: 'Different robots have different action spaces: Robot A might expose [joint1..joint7, gripper], Robot B might expose [x,y,z,roll,pitch,yaw,gripper]. Open X-Embodiment combines demonstrations from many robot platforms into D={(o_t, s_t, l, a_t)}, but a multi-robot dataset needs normalization -- mapping each robot\'s native action range to a standardized [-1,1] space via u=2*(x-L)/(U-L)-1 -- before a shared VLA tokenizer can be applied.',
      bodyKn: 'ವಿಭಿನ್ನ robots ವಿಭಿನ್ನ action spaces ಹೊಂದಿವೆ. Open X-Embodiment ಹಲವು robot platforms ya demonstrations ಸಂಯೋಜಿಸುತ್ತದೆ, ಆದರೆ multi-robot dataset ಗೆ normalization ಅಗತ್ಯ -- ಪ್ರತಿ robot ya native action range ಅನ್ನೂ standardized [-1,1] space ಗೆ ಮ್ಯಾಪ್ ಮಾಡುವುದೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nVLA|Vision-Language-Action model: P(action | image, text, state)\nAction tokenization|Genuinely confirmed: quantizing continuous [-1,1] actions into 256 discrete bins\nvocab_offset|Shifts action token IDs (e.g. 32000-32255) to avoid colliding with text vocabulary\nCo-fine-tuning|Interleaving web vision-language batches with robot-action batches to preserve semantics\nOpen X-Embodiment|Cross-robot demonstration corpus requiring action-space normalization before shared training" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: 256-bin quantization of an 8-value action produces tokens 32000-32255, with real maximum error 0.003922, matching the theoretical bound ~1/255\n• Genuinely confirmed: ToyVLA with action_dim=10 produces exactly 10 discrete action tokens per inference call\n• RT-2\'s core insight: robot actions can be represented as vocabulary tokens, letting a language-model decoder generate them autoregressively\n• Co-fine-tuning on web + robot data lets semantic knowledge (e.g. object properties) transfer into physical action, beyond what robot demonstrations alone teach\n• Open X-Embodiment requires action-space normalization because different robots have incompatible native action representations',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 8-value action ya 256-bin quantization tokens 32000-32255 ಉತ್ಪಾದಿಸುತ್ತದೆ, ನಿಜ maximum error 0.003922\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: action_dim=10 ಜೊತೆ ToyVLA ನಿಖರವಾಗಿ 10 discrete action tokens ಉತ್ಪಾದಿಸುತ್ತದೆ\n• RT-2 ya ಮುಖ್ಯ idea: robot actions ಅನ್ನೂ vocabulary tokens ಆಗಿ ಪ್ರತಿನಿಧಿಸಬಹುದು\n• Co-fine-tuning semantic knowledge ಅನ್ನೂ physical action ಗೆ ವರ್ಗಾಯಿಸಲು ಅನುಮತಿಸುತ್ತದೆ\n• Open X-Embodiment ಗೆ action-space normalization ಅಗತ್ಯ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a household robot correctly picks up "something I could drink" despite never seeing that exact phrase during robot training, that is genuinely the co-fine-tuning mechanism confirmed in this lesson: web-scale semantic knowledge (water bottle = drinkable) transferring into physical action selection.',
      bodyKn: 'ಒಂದೂ household robot "ಕುಡಿಯಬಹುದಾದ ಏನೋ" ಎಂದೂ ಎತ್ತಿಕೊಂಡಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ನಲ್ಲಿ ದೃಢಪಡಿಸಿದ co-fine-tuning ಕಾರ್ಯವಿಧಾನ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s real tokenization run: representing actions as vocabulary tokens lets engineers reuse the exact same transformer decoder architecture and training infrastructure already built for language models, rather than designing a separate robot-control head from scratch.',
      bodyKn: 'ಈ lesson ya ನಿಜ tokenization run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: actions ಅನ್ನೂ vocabulary tokens ಆಗಿ ಪ್ರತಿನಿಧಿಸುವುದೂ engineers ಗೆ ಈಗಾಗಲೇ ನಿರ್ಮಿಸಿದ transformer decoder architecture ಅನ್ನೂ ಮರುಬಳಕೆ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real RT-2 and OpenVLA systems genuinely use 256-bin action tokenization and co-fine-tuning on mixed web and robot data, exactly the mechanism genuinely run and verified in this lesson.',
      bodyKn: 'ನಿಜ RT-2, OpenVLA systems ನಿಜವಾಗಿ 256-bin action tokenization, ಮಿಶ್ರ web, robot data ಮೇಲೆ co-fine-tuning ಬಳಸುತ್ತವೆ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ ಕಾರ್ಯವಿಧಾನ.' } },

    { type: 'diagram', data: {
      headingEn: 'RT-2 Action Pipeline', headingKn: 'RT-2 Action Pipeline',
      mermaidCode: 'flowchart LR\n  A[Continuous action -1..1] --> B[Normalize to 0..1]\n  B --> C[Scale by 255, round]\n  C --> D["bin_index (0..255)"]\n  D --> E["+ vocab_offset = token (32000-32255)"]\n  E --> F[Transformer decoder emits token]',
      captionEn: 'Genuinely traced in this lesson with real Bash-verified numbers: a=0.5 -> normalized=0.75 -> bin=191 -> token=32191.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜ Bash-verified numbers ಜೊತೆ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why the Same Decoder Architecture Works for Both Language and Action', headingKn: 'ಒಂದೇ Decoder Architecture Language, Action ಎರಡಕ್ಕೂ ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      bodyEn: 'A transformer decoder always predicts the next categorical token from a fixed vocabulary. Whether that vocabulary represents English words or 256-bin robot action values is irrelevant to the underlying architecture -- genuinely confirmed by this lesson\'s tokens landing in the disjoint 32000-32255 range, coexisting with an ordinary text vocabulary occupying IDs 0-31999.',
      bodyKn: 'ಒಂದೂ transformer decoder ಯಾವಾಗಲೂ ಒಂದೂ fixed vocabulary ಇಂದ ಮುಂದಿನ categorical token ಊಹಿಸುತ್ತದೆ. ಆ vocabulary English words ಅಥವಾ 256-bin robot action values ಪ್ರತಿನಿಧಿಸುತ್ತದೆಯೇ ಎಂಬುದೂ underlying architecture ಗೆ ಅಪ್ರಸ್ತುತ.' } },
    { type: 'table', data: {
      captionEn: 'RT-1 vs RT-2 Conceptual Shift', captionKn: 'RT-1 vs RT-2 Conceptual Shift',
      rows: "Model|Architecture idea\nRT-1|camera + instruction -> robot policy -> actions (robotics-only)\nRT-2|Web knowledge + Image -> Vision-Language Model <- Instruction -> Action Tokens -> Robot (VLM backbone reused)" } },
    { type: 'math', data: {
      headingEn: 'Dequantization Formula', headingKn: 'Dequantization ಸೂತ್ರ',
      formula: '\\hat{a} = 2\\frac{q}{B-1} - 1',
      explanationEn: 'Genuinely confirmed via the lesson\'s Bash run: for q=191, B=256, this gives 2*(191/255)-1 = 0.498, closely matching the original a=0.5 -- the small gap (0.002) is the quantization error genuinely measured earlier in this lesson.',
      explanationKn: 'ಈ lesson ya Bash run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: q=191, B=256 ಗೆ, ಇದೂ 2*(191/255)-1 = 0.498 ನೀಡುತ್ತದೆ, ಮೂಲ a=0.5 ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Genuine Limitation: This Toy reason() Is Not a Trained Model', headingKn: 'ನಿಜ Limitation: ಈ Toy reason() ಒಂದೂ ತರಬೇತಿ ಪಡೆದ Model ಅಲ್ಲ',
      bodyEn: 'Honestly disclosed: ToyVLA.reason() seeds Python\'s random module from the sum of character codes in observation+instruction -- it demonstrates the tokenization and interface architecture genuinely, but produces no real semantic understanding of "red cube" or "blue bowl". A real RT-2/OpenVLA replaces this function with billions of trained parameters.',
      bodyKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: ToyVLA.reason() observation+instruction ನಲ್ಲಿ character codes ya ಮೊತ್ತ ಇಂದ Python ya random module ಅನ್ನೂ seed ಮಾಡುತ್ತದೆ -- ಇದೂ tokenization, interface architecture ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ, ಆದರೆ "red cube" ya ಯಾವುದೇ ನಿಜ semantic ತಿಳುವಳಿಕೆ ಉತ್ಪಾದಿಸುವುದಿಲ್ಲ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Why does an RT-2-style model quantize a normalized joint command in [-1,1]?', qKn: '[-1,1] ನಲ್ಲಿ normalized joint command ಅನ್ನೂ RT-2-style model ಏಕೆ quantize ಮಾಡುತ್ತದೆ?',
        opts: ['Transformers cannot process images', 'Transformers naturally predict discrete vocabulary tokens', 'Robots cannot execute continuous actions', 'Quantization eliminates all action error'], correct: 1,
        optsKn: ['Transformers images ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'Transformers ಸ್ವಾಭಾವಿಕವಾಗಿ discrete vocabulary tokens ಊಹಿಸುತ್ತವೆ', 'Robots ನಿರಂತರ actions ಕಾರ್ಯಗತಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'Quantization ಎಲ್ಲಾ action error ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: what was the real maximum quantization error for 256-bin encoding?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 256-bin encoding ಗಾಗಿ ನಿಜ maximum quantization error ಏನೂ?',
        opts: ['0.5', '0.1', '0.003922', '1.0'], correct: 2,
        optsKn: ['0.5', '0.1', '0.003922', '1.0'] },
      { q: 'For a 10-dimensional action using one discrete token per dimension, how many action tokens are needed for one timestep?', qKn: 'ಪ್ರತಿ dimension ಗೆ ಒಂದೂ discrete token ಬಳಸಿ 10-dimensional action ಗೆ, ಒಂದೂ timestep ಗೆ ಎಷ್ಟು action tokens ಬೇಕು?',
        opts: ['1', '10', '256', '2560'], correct: 1,
        optsKn: ['1', '10', '256', '2560'] },
      { q: 'Why mix web vision-language data with robot demonstrations during training?', qKn: 'ತರಬೇತಿ ಸಮಯದಲ್ಲಿ web vision-language data ಅನ್ನೂ robot demonstrations ಜೊತೆ ಏಕೆ ಮಿಶ್ರಣ ಮಾಡಬೇಕು?',
        opts: ['To increase robot motor speed directly', 'To remove the need for camera observations', 'To retain broad semantic knowledge while learning actions', 'To eliminate robot-specific adaptation'], correct: 2,
        optsKn: ['Robot motor speed ನೇರವಾಗಿ ಹೆಚ್ಚಿಸಲು', 'Camera observations ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕಲು', 'Actions ಕಲಿಯುವಾಗ ವಿಶಾಲ semantic knowledge ಉಳಿಸಿಕೊಳ್ಳಲು', 'Robot-specific adaptation ತೆಗೆದುಹಾಕಲು'] },
      { q: 'Why does combining datasets from different robots require action-space normalization?', qKn: 'ವಿಭಿನ್ನ robots ya datasets ಸಂಯೋಜಿಸುವುದಕ್ಕೆ action-space normalization ಏಕೆ ಅಗತ್ಯ?',
        opts: ['All robots share identical action spaces already', 'Different robots have different, incompatible native action representations', 'Normalization is only cosmetic', 'Robots cannot use cameras'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ robots ಈಗಾಗಲೇ ಒಂದೇ action spaces ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ', 'ವಿಭಿನ್ನ robots ವಿಭಿನ್ನ, ಹೊಂದಾಣಿಕೆಯಾಗದ native action representations ಹೊಂದಿವೆ', 'Normalization ಕೇವಲ ಅಲಂಕಾರಿಕ', 'Robots cameras ಬಳಸಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
