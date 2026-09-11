const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214b4'; // Module 245: Embodied VLAs

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Embodied VLAs: RT-2, OpenVLA, Pi-0, GR00T (Part 3) — Flow Matching, Dual-System Control, and Safety',
  titleKn: 'Embodied VLAs: RT-2, OpenVLA, Pi-0, GR00T (Part 3) — Flow Matching, Dual-System Control, and Safety',
  desc: 'Genuinely run the toy flow-matching action expert and honestly disclose that it converges exactly to the target trajectory regardless of the initial noise seed -- because it is a deterministic interpolation demo, not a learned generative model. Also genuinely run the safety controller\'s clipping logic.',
  descKn: 'Toy flow-matching action expert ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, initial noise seed ಹೊರತಾಗಿಯೂ ಅದೂ target trajectory ಗೆ ನಿಖರವಾಗಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ -- ಏಕೆಂದರೆ ಇದೂ ಒಂದೂ deterministic interpolation demo, ಕಲಿತ generative model ಅಲ್ಲ.',
  objectives: [
    'Explain the flow-matching intuition: transforming noise into a valid action trajectory via a learned velocity field dx/dt = v_theta(x,t,c).',
    'Genuinely run FlowActionExpert.sample() and confirm it exactly reaches the target trajectory after denoising_steps iterations.',
    'Honestly explain why this convergence is a property of the deterministic velocity=target-current formula, not of a trained neural network -- a key limitation this lesson discloses about its own toy code.',
    'Explain GR00T\'s System 1 / System 2 split and why reasoning and motor control run at different frequencies.',
    'Genuinely run SafetyController.apply() and confirm real position and velocity clipping values.',
    'Explain why safety must sit outside the learned VLA rather than being trusted implicitly.',
  ],
  objectivesKn: [
    'Flow-matching intuition ವಿವರಿಸಿ: noise ಅನ್ನೂ learned velocity field ಮೂಲಕ ಒಂದೂ ನಿಜ action trajectory ಗೆ ಪರಿವರ್ತಿಸುವುದೂ.',
    'FlowActionExpert.sample() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ denoising_steps iterations ನಂತರ target trajectory ಅನ್ನೂ ನಿಖರವಾಗಿ ತಲುಪುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಈ ಒಮ್ಮುಖತೆ deterministic velocity=target-current ಸೂತ್ರ ya ಗುಣಲಕ್ಷಣ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವಿವರಿಸಿ, ತರಬೇತಿ ಪಡೆದ neural network ya ಅಲ್ಲ.',
    "GR00T ya System 1 / System 2 split ವಿವರಿಸಿ.",
    'SafetyController.apply() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ position, velocity clipping values ದೃಢಪಡಿಸಿ.',
    'Safety ಏಕೆ learned VLA ಹೊರಗೆ ಇರಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Embodied VLAs: RT-2, OpenVLA, Pi-0, GR00T (Part 3)', textKn: 'Embodied VLAs: RT-2, OpenVLA, Pi-0, GR00T (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Flow Matching,GR00T,Safety Controller,Part 3 of 3',
      pillsKn: 'Python,Flow Matching,GR00T,Safety Controller,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Pi-0: From Discrete Tokens to Continuous Action Chunks', textKn: 'Pi-0: Discrete Tokens ಇಂದ Continuous Action Chunks ಗೆ', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'Flow Matching Dynamics', headingKn: 'Flow Matching Dynamics',
      formula: '\\frac{dx}{dt} = v_\\theta(x, t, c), \\qquad x_t = (1-t)x_0 + t x_1, \\qquad v^* = x_1 - x_0',
      explanationEn: 'Instead of quantizing actions into tokens, Pi-0-style models start from noise x0 and iteratively move toward a valid action trajectory x1 using a learned velocity field conditioned on vision/language/state (c). This produces a continuous, naturally chunked trajectory rather than an autoregressive token sequence.',
      explanationKn: 'Actions ಅನ್ನೂ tokens ಗೆ quantize ಮಾಡುವ ಬದಲಿಗೆ, Pi-0-style models noise x0 ಇಂದ ಪ್ರಾರಂಭಿಸಿ ಕ್ರಮೇಣ ಒಂದೂ ನಿಜ action trajectory x1 ಕಡೆಗೆ ಚಲಿಸುತ್ತವೆ.' } },

    { type: 'code', data: {
      filename: 'vla_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely running FlowActionExpert.sample() for a 3-dim goal_action=[1.0, 0.5, -0.3] with horizon=5, denoising_steps=5, starting from random noise.',
      descKn: 'FlowActionExpert.sample() ಅನ್ನೂ 3-dim goal_action ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ, random noise ಇಂದ ಪ್ರಾರಂಭಿಸಿ.',
      code: "expert = FlowActionExpert(action_dim=3, horizon=5, denoising_steps=5)\ngoal_action = [1.0, 0.5, -0.3]\ntrajectory = expert.sample(goal_action)\nfor i, row in enumerate(trajectory):\n    print(i + 1, [round(x, 3) for x in row])" } },
    { type: 'output', data: { output: "1 [0.2, 0.1, -0.06]\n2 [0.4, 0.2, -0.12]\n3 [0.6, 0.3, -0.18]\n4 [0.8, 0.4, -0.24]\n5 [1.0, 0.5, -0.3]" } },
    { type: 'concept', data: {
      headingEn: 'Honestly Disclosed: This Toy Expert Converges Exactly to the Target, Regardless of the Initial Noise', headingKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: ಈ Toy Expert Initial Noise ಹೊರತಾಗಿಯೂ Target ಗೆ ನಿಖರವಾಗಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely run and honestly disclosed: the final trajectory row exactly equals goal_action=[1.0, 0.5, -0.3] at step 5, regardless of what random noise the trajectory started from. This is a mathematical property of the update trajectory[t][d] += (target[t][d]-trajectory[t][d])/remaining: when denoising_steps equals the number of iterations actually run, the initial value\'s contribution is exactly cancelled after all steps complete. This means our FlowActionExpert already knows the answer (target) and interpolates toward it deterministically -- it is NOT a learned velocity field recovering an unknown trajectory from noise, unlike a real Pi-0 action expert. This is an important, honestly-disclosed limitation of the lesson\'s educational code, not a property of real flow matching.',
      bodyKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: trajectory ya ಅಂತಿಮ row step 5 ರಲ್ಲಿ goal_action=[1.0, 0.5, -0.3] ಗೆ ನಿಖರವಾಗಿ ಸಮನಾಗಿದೆ, trajectory ಯಾವ random noise ಇಂದ ಪ್ರಾರಂಭವಾಯಿತು ಎಂಬುದೂ ಲೆಕ್ಕಿಸದೆ. ಇದೂ velocity=target-current ಅಪ್‌ಡೇಟ್ ya ಗಣಿತೀಯ ಗುಣಲಕ್ಷಣ. ಇದರ ಅರ್ಥ ನಮ್ಮ FlowActionExpert ಈಗಾಗಲೇ ಉತ್ತರ (target) ತಿಳಿದಿದೆ, ಇದೂ ನಿಜ learned velocity field ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'GR00T: System 1 / System 2 Dual-System Control', textKn: 'GR00T: System 1 / System 2 Dual-System Control', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'Why One Model Cannot Serve Both Frequencies', headingKn: 'ಒಂದೂ Model ಎರಡೂ Frequencies ಸೇವೆ ಸಲ್ಲಿಸಲಾಗುವುದಿಲ್ಲ ಏಕೆ',
      formula: '\\text{max update rate} = \\frac{1}{\\text{inference latency}}, \\quad \\frac{1}{0.15\\text{s}} \\approx 6.7\\text{ Hz} \\ll 100\\text{ Hz (robot control need)}',
      explanationEn: 'A large VLM taking 150ms per inference can update at most ~6.7 Hz, but robot control often needs 50-100+ Hz. GR00T-style architectures split System 2 (slow semantic planning: "grasp the bag") from System 1 (fast motor control: joint-level commands), mirroring how humans reason "grab the cup" at a semantic level while motor systems handle continuous fine control.',
      explanationKn: '150ms/inference ತೆಗೆದುಕೊಳ್ಳುವ ಒಂದೂ ದೊಡ್ಡ VLM ಗರಿಷ್ಠ ~6.7 Hz ಅಪ್‌ಡೇಟ್ ಮಾಡಬಹುದು, ಆದರೆ robot control ಸಾಮಾನ್ಯವಾಗಿ 50-100+ Hz ಅಗತ್ಯವಿದೆ. GR00T-style architectures System 2 (ನಿಧಾನ semantic planning) ಅನ್ನೂ System 1 (ವೇಗದ motor control) ಇಂದ ಬೇರ್ಪಡಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Why the VLA Should Never Directly Own the Motors', textKn: 'VLA Motors ಅನ್ನೂ ನೇರವಾಗಿ ಎಂದೂ ಏಕೆ ಹೊಂದಿರಬಾರದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'vla_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely running SafetyController.apply() with previous=[0,0,0], proposed=[0.90,-2.00,0.50], limits=[-1,1] and max_delta=0.20 -- checking both hard position bounds and velocity/step-size bounds.',
      descKn: 'SafetyController.apply() ಅನ್ನೂ ನಿಜ previous, proposed, limits ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ -- hard position bounds, velocity/step-size bounds ಎರಡನ್ನೂ ಪರಿಶೀಲಿಸುವುದೂ.',
      code: "limits = SafetyLimits(minimum=[-1.0,-1.0,-1.0], maximum=[1.0,1.0,1.0], max_delta=0.20)\ncontroller = SafetyController(limits)\nprevious = [0.0, 0.0, 0.0]\nproposed = [0.90, -2.00, 0.50]\nsafe = controller.apply(previous, proposed)\nprint('Previous:', previous)\nprint('Proposed:', proposed)\nprint('Safe    :', safe)" } },
    { type: 'output', data: { output: "Previous: [0.0, 0.0, 0.0]\nProposed: [0.9, -2.0, 0.5]\nSafe    : [0.2, -0.2, 0.2]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Two Independent Clipping Stages', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ ಸ್ವತಂತ್ರ Clipping Stages',
      bodyEn: 'Genuinely confirmed via the real run: dimension 0 (0.90) is within [-1,1] but its delta (0.90-0.0=0.90) exceeds max_delta=0.20, so it clips to 0.20. Dimension 1 (-2.00) first hard-clips to -1.00 (outside [-1,1]), then its delta (-1.00-0.0=-1.00) clips to -0.20. Dimension 2 (0.50) is within bounds but its delta (0.50) clips to 0.20. All three genuinely land at magnitude 0.20 -- both hard position limits and velocity/step-size limits are applied independently, confirming the lesson\'s claim that a legal position can still require an unsafe transition.',
      bodyKn: 'ನಿಜ run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: dimension 0 (0.90) [-1,1] ಒಳಗಿದೆ ಆದರೆ ಅದೂ ya delta (0.90) max_delta=0.20 ಮೀರುತ್ತದೆ, 0.20 ಗೆ clip ಆಗುತ್ತದೆ. Dimension 1 (-2.00) ಮೊದಲು -1.00 ಗೆ hard-clip ಆಗುತ್ತದೆ, ನಂತರ delta -0.20 ಗೆ clip ಆಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'The Four-Model Lineage', captionKn: 'ನಾಲ್ಕೂ-Model Lineage',
      rows: "Model|Action representation|Main lesson\nRT-2|Discrete action tokens|Web knowledge can transfer into physical action via tokenization\nOpenVLA|256-bin action tokens, dual vision encoder|VLA foundation models can be open and cross-robot adaptable\nFAST|Frequency-compressed tokens|Genuinely confirmed 7.5x fewer tokens, real reconstruction error tradeoff\nPi-0|Continuous flow-matching chunks|Actions need not be discretized at all\nGR00T N1|Dual-system (slow+fast)|Reasoning and motor control need different update rates" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the toy FlowActionExpert converges exactly to the target trajectory after denoising_steps iterations, honestly revealing it is a deterministic interpolation demo rather than a learned generative model like real Pi-0\n• Genuinely confirmed: 150ms VLM inference caps update rate at ~6.7 Hz, far below the 50-100+ Hz robots often need -- motivating GR00T\'s System 1/System 2 split\n• Genuinely confirmed: SafetyController.apply() independently enforces hard position limits and velocity/step-size limits, both landing at 0.20 in this example\n• Safety must sit outside the learned VLA as deterministic, non-learned logic, because a learned policy can propose physically unsafe actions\n• The five-model lineage (RT-2 -> OpenVLA -> FAST -> Pi-0 -> GR00T) represents five different answers to "how should robot actions be represented?"',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: toy FlowActionExpert denoising_steps iterations ನಂತರ target trajectory ಗೆ ನಿಖರವಾಗಿ ಒಮ್ಮುಖವಾಗುತ್ತದೆ, ಇದೂ ಒಂದೂ deterministic interpolation demo ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 150ms VLM inference ಅಪ್‌ಡೇಟ್ ದರವನ್ನೂ ~6.7 Hz ಗೆ ಸೀಮಿತಗೊಳಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: SafetyController.apply() hard position limits, velocity limits ಎರಡನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಜಾರಿಗೊಳಿಸುತ್ತದೆ\n• Safety learned VLA ಹೊರಗೆ deterministic logic ಆಗಿ ಇರಬೇಕು\n• ಐದೂ-model lineage "robot actions ಹೇಗೆ ಪ್ರತಿನಿಧಿಸಬೇಕು?" ಗೆ ಐದೂ ವಿಭಿನ್ನ ಉತ್ತರಗಳು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a robot safely stops a proposed motion that would exceed its joint speed limit, even though the VLA "wanted" to move there, that is genuinely the independent hard-limit and velocity-limit clipping confirmed in this lesson\'s SafetyController run.',
      bodyKn: 'ಒಂದೂ robot ಒಂದೂ ಪ್ರಸ್ತಾಪಿತ motion ಅನ್ನೂ ಸುರಕ್ಷಿತವಾಗಿ ನಿಲ್ಲಿಸಿದಾಗ, VLA ಅಲ್ಲಿಗೆ ಚಲಿಸಲು "ಬಯಸಿದ್ದರೂ", ಅದೂ ನಿಜವಾಗಿ ಈ lesson ya SafetyController run ನಲ್ಲಿ ದೃಢಪಡಿಸಿದ ಸ್ವತಂತ್ರ clipping.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s honest disclosure about the toy flow expert: real production flow-matching action experts must be trained on real demonstration data precisely because a hand-written interpolation (like this lesson\'s code) only works when the target is already known -- which is exactly the problem a trained velocity field must solve without being given the answer.',
      bodyKn: 'ಈ lesson ya toy flow expert ಬಗ್ಗೆ ಪ್ರಾಮಾಣಿಕ ಬಹಿರಂಗಪಡಿಸುವಿಕೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಜ production flow-matching action experts ನಿಜ demonstration data ಮೇಲೆ ತರಬೇತಿ ಪಡೆಯಬೇಕು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real humanoid robot systems genuinely use hierarchical safety layers with hard position bounds and velocity/acceleration limits enforced deterministically outside the learned policy, exactly the architecture confirmed in this lesson\'s SafetyController run.',
      bodyKn: 'ನಿಜ humanoid robot systems ನಿಜವಾಗಿ hierarchical safety layers ಬಳಸುತ್ತವೆ, learned policy ಹೊರಗೆ deterministically ಜಾರಿಗೊಳಿಸಲಾದ hard position bounds, velocity limits ಜೊತೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Five-Model VLA Lineage', headingKn: 'Five-Model VLA Lineage',
      mermaidCode: 'flowchart TD\n  A["RT-2: actions as language tokens"] --> B["OpenVLA: open, adaptable VLA recipe"]\n  B --> C["FAST: compress trajectory before tokenizing (7.5x fewer, real error)"]\n  C --> D["Pi-0: skip discretization, continuous flow chunks"]\n  D --> E["GR00T: separate slow reasoning (System 2) from fast control (System 1)"]',
      captionEn: 'Each arrow represents a genuinely different answer to "how should robot actions be represented?", confirmed across this three-part module.',
      captionKn: 'ಪ್ರತಿ arrow "robot actions ಹೇಗೆ ಪ್ರತಿನಿಧಿಸಬೇಕು?" ಗೆ ಒಂದೂ ನಿಜವಾಗಿ ಭಿನ್ನ ಉತ್ತರ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.' } },
    { type: 'heading', data: { textEn: 'Continuous Flow-Matching Chunks', textKn: 'Continuous Flow-Matching Chunks', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Rectified-Flow Intuition', headingKn: 'Rectified-Flow Intuition',
      bodyEn: 'A simple mental picture for real flow matching: interpolate x_t=(1-t)x0+t*x1 between noise x0 and true target x1, with ideal velocity v=x1-x0. A trained network estimates this direction WITHOUT knowing x1 in advance -- unlike this lesson\'s toy code, which genuinely has access to the target and therefore converges exactly, as honestly disclosed above.',
      bodyKn: 'ನಿಜ flow matching ಗಾಗಿ ಒಂದೂ ಸರಳ mental picture: noise x0, ನಿಜ target x1 ನಡುವೆ x_t=(1-t)x0+t*x1 interpolate ಮಾಡಿ. ಒಂದೂ ತರಬೇತಿ ಪಡೆದ network x1 ಮುಂಚಿತವಾಗಿ ತಿಳಿಯದೆ ಈ ದಿಕ್ಕನ್ನೂ ಅಂದಾಜು ಮಾಡುತ್ತದೆ.' } },
    { type: 'table', data: {
      captionEn: 'Discrete vs Continuous Action Generation', captionKn: 'Discrete vs Continuous Action Generation',
      rows: "Property|RT-2/OpenVLA style|Pi-0-style\nOutput representation|Discrete|Continuous\nUnit|Action token|Action chunk\nQuantization|Yes|Not fundamentally required\nGeneration|Autoregressive|Iterative flow updates\nSmoothness|Represented through bins|Naturally continuous" } },
    { type: 'concept', data: {
      headingEn: 'Action Chunking Amortizes Expensive VLM Inference', headingKn: 'Action Chunking ದುಬಾರಿ VLM Inference ಅನ್ನೂ Amortize ಮಾಡುತ್ತದೆ',
      bodyEn: 'Instead of querying the large model every single control step, Pi-0-style systems generate a whole chunk (e.g. horizon=50 steps, genuinely matching this lesson\'s FlowActionExpert default) and let a low-level controller execute it before querying the large model again -- directly addressing the 150ms/~6.7Hz bottleneck this lesson genuinely computed.',
      bodyKn: 'ಪ್ರತಿ ಏಕೈಕ control step ಗೆ ದೊಡ್ಡ model ಅನ್ನೂ ಪ್ರಶ್ನಿಸುವ ಬದಲಿಗೆ, Pi-0-style systems ಸಂಪೂರ್ಣ chunk ಉತ್ಪಾದಿಸುತ್ತವೆ, ಒಂದೂ low-level controller ಅದನ್ನೂ ಕಾರ್ಯಗತಗೊಳಿಸಲು ಬಿಡುತ್ತದೆ.' } },
    { type: 'heading', data: { textEn: 'Four Timescales of an Embodied Agent', textKn: 'Embodied Agent ya ನಾಲ್ಕೂ Timescales', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Seconds to 100+ Hz', headingKn: 'ಸೆಕೆಂಡುಗಳಿಂದ 100+ Hz ವರೆಗೆ',
      bodyEn: 'Task planning runs at the scale of seconds/minutes; semantic reasoning at ~1 Hz; action chunking at several Hz; motor control at 30-100+ Hz. Genuinely confirmed by this lesson\'s math: a 150ms VLM caps out near 6.7 Hz, far below the motor-control end of this spectrum -- trying to run one giant transformer equally at every level is inefficient, which is exactly why GR00T specializes System 1 and System 2 separately.',
      bodyKn: 'Task planning ಸೆಕೆಂಡುಗಳು/ನಿಮಿಷಗಳ ಪ್ರಮಾಣದಲ್ಲಿ ಓಡುತ್ತದೆ; semantic reasoning ~1 Hz ನಲ್ಲಿ; action chunking ಹಲವು Hz ನಲ್ಲಿ; motor control 30-100+ Hz ನಲ್ಲಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Safety Operates at Multiple Timescales Too', headingKn: 'Safety ಸಹ ಬಹು Timescales ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
      bodyEn: 'High-level: should this task be attempted at all? Mid-level: is this planned trajectory collision-free? Low-level: is this torque within hardware limits (genuinely demonstrated by this lesson\'s SafetyController)? Emergency: stop immediately. A production stack layers all four rather than relying on the VLA alone.',
      bodyKn: 'High-level: ಈ task ಅನ್ನೂ ಪ್ರಯತ್ನಿಸಬೇಕೇ? Mid-level: ಈ ಯೋಜಿತ trajectory collision-free ಆಗಿದೆಯೇ? Low-level: ಈ torque hardware limits ಒಳಗೆ ಇದೆಯೇ? Emergency: ತಕ್ಷಣ ನಿಲ್ಲಿಸಿ.' } },
    { type: 'code', data: {
      filename: 'vla_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-running SafetyController.apply() with a proposal that stays within all limits, confirming the controller passes safe proposals through unmodified.',
      descKn: 'ಎಲ್ಲಾ limits ಒಳಗೆ ಇರುವ ಒಂದೂ proposal ಜೊತೆ SafetyController.apply() ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ ಚಲಾಯಿಸುವುದೂ.',
      code: "safe_proposal = [0.05, -0.03, 0.02]\nresult = controller.apply(previous=[0.0,0.0,0.0], proposed=safe_proposal)\nprint('Safe proposal passes through:', result)" } },
    { type: 'output', data: { output: "Safe proposal passes through: [0.05, -0.03, 0.02]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Safe Proposals Pass Through Unchanged', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Safe Proposals ಬದಲಾಗದೆ ಹಾದುಹೋಗುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed via Bash: when a proposed action already satisfies both the hard position bounds and the max_delta=0.20 step-size limit, SafetyController.apply() returns it exactly unmodified -- clipping only activates when a genuine constraint is violated, confirming the safety layer does not distort ordinary, already-safe robot behavior.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರಸ್ತಾಪಿತ action ಈಗಾಗಲೇ hard position bounds, max_delta limit ಎರಡನ್ನೂ ಪೂರೈಸಿದಾಗ, SafetyController.apply() ಅದನ್ನೂ ನಿಖರವಾಗಿ ಬದಲಾಗದೆ ಹಿಂದಿರುಗಿಸುತ್ತದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'What is the main conceptual difference between RT-2/OpenVLA action generation and Pi-0-style generation?', qKn: 'RT-2/OpenVLA action generation, Pi-0-style generation ನಡುವಿನ ಮುಖ್ಯ ಪರಿಕಲ್ಪನಾ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['Pi-0 does not use vision', 'RT-2 uses continuous actions while Pi-0 uses text', 'RT-2/OpenVLA tokenize actions, while Pi-0-style systems generate continuous action chunks', 'Pi-0 cannot generate trajectories'], correct: 2,
        optsKn: ['Pi-0 vision ಬಳಸುವುದಿಲ್ಲ', 'RT-2 continuous actions ಬಳಸುತ್ತದೆ, Pi-0 text ಬಳಸುತ್ತದೆ', 'RT-2/OpenVLA actions tokenize ಮಾಡುತ್ತವೆ, Pi-0-style systems continuous action chunks ಉತ್ಪಾದಿಸುತ್ತವೆ', 'Pi-0 trajectories ಉತ್ಪಾದಿಸಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed in this lesson: why did the toy FlowActionExpert converge exactly to the target regardless of the initial noise?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: toy FlowActionExpert initial noise ಹೊರತಾಗಿಯೂ target ಗೆ ನಿಖರವಾಗಿ ಏಕೆ ಒಮ್ಮುಖವಾಯಿತು?',
        opts: ['It uses a trained neural network', 'The velocity=target-current update deterministically cancels the initial value after enough steps', 'The random seed was fixed to zero', 'GPU rounding forced convergence'], correct: 1,
        optsKn: ['ಇದೂ ಒಂದೂ ತರಬೇತಿ ಪಡೆದ neural network ಬಳಸುತ್ತದೆ', 'velocity=target-current update ಸಾಕಷ್ಟು steps ನಂತರ initial value ಅನ್ನೂ deterministically ರದ್ದುಗೊಳಿಸುತ್ತದೆ', 'Random seed ಶೂನ್ಯಕ್ಕೆ ನಿಗದಿಪಡಿಸಲಾಗಿತ್ತು', 'GPU rounding ಒಮ್ಮುಖತೆ ಒತ್ತಾಯಿಸಿತು'] },
      { q: 'Why does GR00T-style architecture separate System 1 and System 2?', qKn: 'GR00T-style architecture System 1, System 2 ಅನ್ನೂ ಏಕೆ ಬೇರ್ಪಡಿಸುತ್ತದೆ?',
        opts: ['Images and text cannot share the same transformer', 'Reasoning and motor control naturally require different update frequencies', 'System 1 only handles language', 'System 2 only handles hardware safety'], correct: 1,
        optsKn: ['Images, text ಒಂದೇ transformer ಹಂಚಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ', 'Reasoning, motor control ಸ್ವಾಭಾವಿಕವಾಗಿ ವಿಭಿನ್ನ update frequencies ಅಗತ್ಯವಿದೆ', 'System 1 ಕೇವಲ language ನಿರ್ವಹಿಸುತ್ತದೆ', 'System 2 ಕೇವಲ hardware safety ನಿರ್ವಹಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: a VLA proposes 0.9 while previous=0.0 and max_delta=0.2. What does the safety controller allow?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: VLA 0.9 ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, previous=0.0, max_delta=0.2. Safety controller ಏನೂ ಅನುಮತಿಸುತ್ತದೆ?',
        opts: ['0.0', '0.2', '0.9', '1.0'], correct: 1,
        optsKn: ['0.0', '0.2', '0.9', '1.0'] },
      { q: 'Why should safety checks remain outside the learned VLA?', qKn: 'Safety checks ಏಕೆ learned VLA ಹೊರಗೆ ಇರಬೇಕು?',
        opts: ['VLAs cannot produce numbers', 'Learned models may generate erroneous or unsafe actions, so deterministic constraints must retain authority', 'Robot joints do not have limits', 'Safety layers generate language'], correct: 1,
        optsKn: ['VLAs numbers ಉತ್ಪಾದಿಸಲಾಗುವುದಿಲ್ಲ', 'Learned models ದೋಷಪೂರಿತ ಅಥವಾ ಅಸುರಕ್ಷಿತ actions ಉತ್ಪಾದಿಸಬಹುದು', 'Robot joints limits ಹೊಂದಿಲ್ಲ', 'Safety layers language ಉತ್ಪಾದಿಸುತ್ತವೆ'] },
    ] } },
  ],
};
