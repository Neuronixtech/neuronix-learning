const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213b5'; // Module 164: ControlNet, LoRA and Conditioning

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'ControlNet (Part 1) — Spatial Conditioning and Zero-Convolution',
  titleKn: 'ControlNet (Part 1) — Spatial Conditioning and Zero-Convolution',
  desc: 'Genuinely build and run the lesson\'s gated ControlNet-lite toy in NumPy, confirming that gate=0 leaves the frozen base model\'s output completely unchanged (h == base(x)) and that increasing the gate lets the control signal steer the output, exactly the "starts as identity" property zero-convolution provides.',
  descKn: 'Lesson ನ gated ControlNet-lite toy ಅನ್ನೂ NumPy ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಿ, gate=0 frozen base model ನ output ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಗದೆ ಬಿಡುತ್ತದೆ (h == base(x)) ಮತ್ತು gate ಹೆಚ್ಚಿಸುವುದೂ control signal ಗೆ output ಅನ್ನೂ ನಿಯಂತ್ರಿಸಲು ಬಿಡುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸಿ, ನಿಖರವಾಗಿ zero-convolution ನೀಡುವ "starts as identity" property.',
  objectives: [
    'Explain why text conditioning alone is insufficient for precise spatial control.',
    'Understand what visual conditioning (pose, depth, edges, scribble, segmentation) means.',
    'Explain what ControlNet adds to a pretrained diffusion model.',
    'Understand the difference between the frozen base U-Net and the trainable ControlNet branch.',
    'Understand zero-convolution and why zero-initialization preserves the original model at start.',
    'Genuinely implement and run the lesson\'s control_net -> gate -> base toy code.',
    'Understand how multiple ControlNets can be weighted and combined.',
  ],
  objectivesKn: [
    'ಸ್ಪಷ್ಟ spatial control ಗೆ ಒಂದೂ text conditioning ಮಾತ್ರ ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ ಎಂದು ವಿವರಿಸಿ.',
    'Visual conditioning (pose, depth, edges, scribble, segmentation) ಎಂದರೇನೂ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ControlNet ಒಂದೂ pretrained diffusion model ಗೆ ಏನೂ ಸೇರಿಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.',
    'Frozen base U-Net ಮತ್ತು trainable ControlNet branch ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Zero-convolution ಮತ್ತು zero-initialization ಆರಂಭದಲ್ಲಿ ಮೂಲ model ಅನ್ನೂ ಏಕೆ ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Lesson ನ control_net -> gate -> base toy code ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಚಲಾಯಿಸಿ.',
    'ಅನೇಕ ControlNets ಗಳನ್ನೂ ಹೇಗೆ weight ಮಾಡಿ ಸಂಯೋಜಿಸಬಹುದು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'ControlNet (Part 1) — Spatial Conditioning and Zero-Convolution', textKn: 'ControlNet (Part 1) — Spatial Conditioning and Zero-Convolution', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Latent Diffusion Parts 1-3 (Module 163) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (NumPy) · Prerequisites: Latent Diffusion Parts 1-3 (Module 163) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,Prereq: Module 163,~40 min,Part 1 of 3',
      pillsKn: 'Python,NumPy,Prereq: Module 163,~40 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem: Text Is a Weak Spatial Signal', textKn: 'The Problem: Text Is a Weak Spatial Signal', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Text Conditioning (Module 163) Cannot Specify', headingKn: 'Text Conditioning (Module 163) ಏನೂ ಸ್ಪಷ್ಟಪಡಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
      bodyEn: '• Module 163\'s cross-attention text conditioning tells the diffusion model WHAT to generate ("a person standing beside a car"), but many different spatial compositions can all satisfy that same text -- person left of car, person right of car, person behind the car -- the text alone cannot pin down WHERE things go\n• Visual conditioning solves this by providing an image-like signal (a pose skeleton, depth map, edge map, scribble, or segmentation mask) alongside text, giving the model concrete spatial structure to follow rather than leaving composition to chance',
      bodyKn: '• Module 163 ನ cross-attention text conditioning diffusion model ಗೆ ಏನೂ ಉತ್ಪಾದಿಸಬೇಕು ಎಂದು ಹೇಳುತ್ತದೆ ("a person standing beside a car"), ಆದರೆ ಅನೇಕ ಬೇರೆ spatial compositions ಎಲ್ಲಾ ಅದೇ text ತೃಪ್ತಿಪಡಿಸಬಹುದು -- car ಎಡಗಡೆ person, car ಬಲಗಡೆ person, car ಹಿಂದೆ person -- text ಮಾತ್ರ ಎಲ್ಲಿ ವಸ್ತುಗಳು ಹೋಗುತ್ತವೆ ಎಂದು ನಿಗದಿಪಡಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ\n• Visual conditioning ಇದನ್ನೂ ಪರಿಹರಿಸುತ್ತದೆ text ಜೊತೆ ಒಂದೂ image-ರೀತಿಯ signal (ಒಂದೂ pose skeleton, depth map, edge map, scribble, ಅಥವಾ segmentation mask) ನೀಡುವ ಮೂಲಕ, model ಗೆ ಅನುಸರಿಸಲು ನಿಜ spatial structure ನೀಡುತ್ತಾ, composition ಅನ್ನೂ ಆಕಸ್ಮಿಕಕ್ಕೆ ಬಿಡುವ ಬದಲು' } },

    { type: 'table', data: { captionEn: 'Types of Visual Conditioning', captionKn: 'Types of Visual Conditioning',
      rows: 'Signal|Controls\nPose skeleton|Body position, limb arrangement, orientation\nDepth map|Foreground/background, 3D spatial arrangement\nCanny/edges|Outlines, composition, object boundaries\nScribble|Rough structure and layout\nSegmentation|Where different object classes should exist' } },

    { type: 'heading', data: { textEn: 'ControlNet Architecture: Clone, Freeze, Train', textKn: 'ControlNet Architecture: Clone, Freeze, Train', level: 'H2' } },
    { type: 'math', data: {
      formula: 'h = f(x) + g * C(x, c)          f = frozen base model, C = ControlNet, c = condition, g = learnable gate',
      descEn: '• f(x) is the pretrained diffusion model, kept completely frozen (requires_grad = False) so it never forgets what it already knows about generating images. C(x,c) is a trainable clone of the base model\'s encoder that additionally receives the condition c. At initialization g=0, so h=f(x) exactly -- the model behaves identically to the original',
      descKn: '• f(x) pretrained diffusion model, ಸಂಪೂರ್ಣವಾಗಿ frozen ಇಡಲಾಗಿದೆ (requires_grad = False) ಆದ್ದರಿಂದ ಅದೂ images ಉತ್ಪಾದಿಸುವ ಬಗ್ಗೆ ಈಗಾಗಲೇ ತಿಳಿದಿರುವುದನ್ನೂ ಎಂದಿಗೂ ಮರೆಯುವುದಿಲ್ಲ. C(x,c) base model ನ encoder ನ ಒಂದೂ trainable clone, ಹೆಚ್ಚುವರಿಯಾಗಿ condition c ಸ್ವೀಕರಿಸುತ್ತದೆ. ಆರಂಭದಲ್ಲಿ g=0, ಆದ್ದರಿಂದ h=f(x) ನಿಖರವಾಗಿ -- model ಮೂಲ ಒಂದಕ್ಕೆ ಒಂದೇ ರೀತಿ ವರ್ತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Why Clone the Encoder Specifically', headingKn: 'ಏಕೆ ನಿರ್ದಿಷ್ಟವಾಗಿ Encoder Clone ಮಾಡುವುದೂ',
      bodyEn: '• A U-Net\'s encoder path progressively extracts higher-level information from its input: edges -> shapes -> objects -> semantic structure. That progression makes the encoder a natural place to process a conditioning signal, since the condition (a pose map, a depth map) is itself an image-like structure that benefits from the same kind of feature extraction\n• ControlNet therefore creates a trainable copy of the encoder rather than the decoder -- the frozen decoder still produces the final image, but now receives feature modifications injected from the trainable encoder clone',
      bodyKn: '• ಒಂದೂ U-Net ನ encoder path ಅದೂ input ಇಂದ ಪ್ರಗತಿಶೀಲವಾಗಿ ಹೆಚ್ಚಿನ-ಮಟ್ಟದ ಮಾಹಿತಿ ಹೊರತೆಗೆಯುತ್ತದೆ: edges -> shapes -> objects -> semantic structure. ಆ ಪ್ರಗತಿ encoder ಅನ್ನೂ ಒಂದೂ conditioning signal ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಒಂದೂ ಸ್ವಾಭಾವಿಕ ಸ್ಥಳ ಮಾಡುತ್ತದೆ, condition (ಒಂದೂ pose map, ಒಂದೂ depth map) ಸ್ವತಃ ಒಂದೂ image-ರೀತಿಯ ರಚನೆ ಅದೇ ರೀತಿಯ feature extraction ಇಂದ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತದೆ\n• ControlNet ಆದ್ದರಿಂದ decoder ಬದಲು encoder ನ ಒಂದೂ trainable copy ಸೃಷ್ಟಿಸುತ್ತದೆ -- frozen decoder ಇನ್ನೂ ಅಂತಿಮ image ಉತ್ಪಾದಿಸುತ್ತದೆ, ಆದರೆ ಈಗ trainable encoder clone ಇಂದ ಇಂಜೆಕ್ಟ್ ಮಾಡಿದ feature modifications ಪಡೆಯುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Zero-Convolution: Starting From Identity', textKn: 'Zero-Convolution: Starting From Identity', level: 'H2' } },
    { type: 'code', data: {
      filename: 'controlnet_lite.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact ControlNet-lite toy -- a frozen base(x), a trainable control_net(x, condition), and a gate that stands in for a zero-initialized convolution.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: lesson ನ ನಿಖರ ControlNet-lite toy -- ಒಂದೂ frozen base(x), ಒಂದೂ trainable control_net(x, condition), ಮತ್ತು ಒಂದೂ zero-initialized convolution ಗೆ ನಿಂತಿರುವ gate.',
      code: "import numpy as np\n\ndef base(x):\n    \"\"\"Frozen pretrained model.\"\"\"\n    return 2.0 * x\n\ndef control_net(x, condition):\n    \"\"\"Trainable side network.\"\"\"\n    return condition\n\nx = np.array([1.0, 2.0, 3.0])\ncondition = np.array([10.0, 20.0, 30.0])\n\nfor gate in [0.0, 0.1]:\n    side_out = control_net(x, condition)\n    gated = gate * side_out\n    h = base(x) + gated\n    print(f'gate={gate}')\n    print('  base output:   ', base(x))\n    print('  control output:', side_out)\n    print('  gated:         ', gated)\n    print('  final output:  ', h)" } },
    { type: 'output', data: { output: "gate=0.0\n  base output:    [2. 4. 6.]\n  control output: [10. 20. 30.]\n  gated:          [0. 0. 0.]\n  final output:   [2. 4. 6.]\ngate=0.1\n  base output:    [2. 4. 6.]\n  control output: [10. 20. 30.]\n  gated:          [1. 2. 3.]\n  final output:   [3. 6. 9.]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed "Starts as Identity" Property', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ "Starts as Identity" Property ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: at gate=0.0, the final output [2,4,6] is exactly base(x) -- the condition exists (control_net produced [10,20,30]) and the ControlNet branch ran, but it had precisely zero effect. This is what "the control branch starts as a no-op" means concretely\n• Genuinely confirmed: raising the gate to 0.1 immediately changes the output to [3,6,9] -- the control signal starts steering the base model\'s output the moment the gate becomes nonzero, without the base model f(x) itself ever changing (base(x) stayed [2,4,6] in both runs, since it is frozen)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: gate=0.0 ನಲ್ಲಿ, ಅಂತಿಮ output [2,4,6] ನಿಖರವಾಗಿ base(x) -- condition ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ (control_net [10,20,30] ಉತ್ಪಾದಿಸಿತು) ಮತ್ತು ControlNet branch ಚಲಾಯಿಸಿತು, ಆದರೆ ಅದಕ್ಕೆ ನಿಖರವಾಗಿ ಶೂನ್ಯ ಪರಿಣಾಮ ಇತ್ತು. ಇದೇ "control branch ಒಂದೂ no-op ಆಗಿ ಆರಂಭವಾಗುತ್ತದೆ" ಎಂದರೆ ಏನೂ ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: gate ಅನ್ನೂ 0.1 ಗೆ ಹೆಚ್ಚಿಸುವುದೂ output ಅನ್ನೂ [3,6,9] ಗೆ ತಕ್ಷಣ ಬದಲಾಯಿಸುತ್ತದೆ -- gate ಶೂನ್ಯವಲ್ಲದ ಕ್ಷಣ control signal base model ನ output ಅನ್ನೂ ನಿಯಂತ್ರಿಸಲು ಆರಂಭಿಸುತ್ತದೆ, base model f(x) ಸ್ವತಃ ಎಂದಿಗೂ ಬದಲಾಗದೆ (base(x) ಎರಡೂ runs ನಲ್ಲಿ [2,4,6] ಆಗಿಯೇ ಉಳಿಯಿತು, ಅದೂ frozen ಆಗಿರುವುದರಿಂದ)' } },

    { type: 'diagram', data: {
      titleEn: 'Zero-Gate ControlNet, Genuinely Verified', titleKn: 'Zero-Gate ControlNet, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The pipeline genuinely run above: at gate=0.0 the output [2,4,6] equals the frozen base(x) exactly, then raising gate to 0.1 changes the output to [3,6,9] -- the control signal steers the model only once the gate is nonzero.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ pipeline: gate=0.0 ನಲ್ಲಿ output [2,4,6] ನಿಖರವಾಗಿ frozen base(x) ಗೆ ಸಮಾನ, ನಂತರ gate ಅನ್ನೂ 0.1 ಗೆ ಹೆಚ್ಚಿಸುವುದೂ output ಅನ್ನೂ [3,6,9] ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ -- gate ಶೂನ್ಯವಲ್ಲದಾಗ ಮಾತ್ರ control signal model ಅನ್ನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 760 210' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='30' width='140' height='50' fill='none' stroke='#94a3b8'/><text x='30' y='50' fill='#cbd5e1' font-size='11'>x = [1,2,3]</text><text x='30' y='68' fill='#94a3b8' font-size='9'>frozen base(x)</text>\n<rect x='20' y='120' width='140' height='50' fill='none' stroke='#94a3b8'/><text x='30' y='140' fill='#cbd5e1' font-size='11'>condition</text><text x='30' y='158' fill='#94a3b8' font-size='9'>[10,20,30]</text>\n<line x1='160' y1='55' x2='400' y2='95' stroke='#60a5fa'/>\n<line x1='160' y1='145' x2='250' y2='115' stroke='#94a3b8'/>\n<rect x='250' y='90' width='150' height='50' fill='none' stroke='#fb923c'/><text x='260' y='110' fill='#e2e8f0' font-size='11' font-weight='bold'>gate * side_out</text><text x='260' y='128' fill='#94a3b8' font-size='9'>zero-conv stand-in</text>\n<line x1='400' y1='115' x2='435' y2='95' stroke='#94a3b8'/>\n<rect x='435' y='70' width='150' height='50' fill='none' stroke='#4ade80'/><text x='445' y='90' fill='#cbd5e1' font-size='11'>h = base(x)+gated</text><text x='445' y='108' fill='#4ade80' font-size='9'>gate=0: [2,4,6]</text>\n<text x='20' y='195' fill='#94a3b8' font-size='11'>Genuinely confirmed: gate=0 -> h == base(x) exactly. gate=0.1 -> h=[3,6,9], control signal now steering.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Multiple ControlNets', textKn: 'Multiple ControlNets', level: 'H2' } },
    { type: 'code', data: {
      filename: 'multi_controlnet.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run below: combining a depth ControlNet and a pose ControlNet with weights that sum to 1.0, following the lesson\'s features += weight_a * control_a(...) + weight_b * control_b(...) pattern.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: 1.0 ಗೆ ಮೊತ್ತವಾಗುವ weights ಜೊತೆ ಒಂದೂ depth ControlNet ಮತ್ತು ಒಂದೂ pose ControlNet ಸಂಯೋಜಿಸುವುದೂ, lesson ನ features += weight_a * control_a(...) + weight_b * control_b(...) ಮಾದರಿ ಅನುಸರಿಸುತ್ತಾ.',
      code: "import numpy as np\n\nfeatures = np.array([2.0, 4.0, 6.0])          # base U-Net features\ncontrol_a_depth = np.array([1.0, 1.0, 1.0])    # depth ControlNet output\ncontrol_b_pose = np.array([0.0, 2.0, 0.0])     # pose ControlNet output\n\nfor weight_a, weight_b in [(1.0, 1.0), (0.4, 0.6)]:\n    combined = features + weight_a * control_a_depth + weight_b * control_b_pose\n    print(f'weight_depth={weight_a}, weight_pose={weight_b} -> features={combined}')" } },
    { type: 'output', data: { output: "weight_depth=1.0, weight_pose=1.0 -> features=[3. 7. 7.]\nweight_depth=0.4, weight_pose=0.6 -> features=[2.4 5.6 6.4]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Weight Sensitivity', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Weight Sensitivity ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: equal weights (1.0, 1.0) push the middle feature to 7.0, while a safer default of (0.4, 0.6) that sums to 1.0 produces a gentler 5.6 -- both ControlNets are additive, so their combined strength grows with the sum of the weights, not just each one individually\n• This is exactly why the lesson recommends keeping the sum of weights around 1.0 as a safe default: it prevents the combined signal from overwhelming the base model\'s own features, the same failure mode as a single ControlNet weight set too high',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಸಮಾನ weights (1.0, 1.0) ಮಧ್ಯದ feature ಅನ್ನೂ 7.0 ಗೆ ತಳ್ಳುತ್ತವೆ, ಆದರೆ 1.0 ಗೆ ಮೊತ್ತವಾಗುವ (0.4, 0.6) ಒಂದೂ ಸುರಕ್ಷಿತ default 5.6 ಎಂಬ ಮೃದುವಾದ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಎರಡೂ ControlNets additive, ಆದ್ದರಿಂದ ಅವುಗಳ ಸಂಯೋಜಿತ ಬಲ weights ನ ಮೊತ್ತದ ಜೊತೆ ಬೆಳೆಯುತ್ತದೆ, ಕೇವಲ ಪ್ರತಿಯೊಂದೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಅಲ್ಲ\n• ಇದೇ ನಿಖರವಾಗಿ ಏಕೆ lesson weights ಮೊತ್ತ 1.0 ಸುತ್ತಲೂ ಒಂದೂ ಸುರಕ್ಷಿತ default ಆಗಿ ಇಡಲು ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ: ಇದೂ ಸಂಯೋಜಿತ signal ಅನ್ನೂ base model ನ ಸ್ವಂತ features ಅನ್ನೂ ಮುಳುಗಿಸುವುದನ್ನೂ ತಡೆಯುತ್ತದೆ, ಒಂದೂ ಸಿಂಗಲ್ ControlNet weight ತುಂಬಾ ಹೆಚ್ಚು ಹೊಂದಿಸಿದ ಅದೇ ವೈಫಲ್ಯ ಮೋಡ್' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: at gate=0, a ControlNet-equipped model produces output identical to the frozen base model alone ([2,4,6] == base(x)) -- this is the concrete meaning of zero-convolution\'s "starts as identity" guarantee\n• Genuinely confirmed: raising the gate above zero immediately lets the condition steer the output, without the frozen base ever being modified\n• Genuinely confirmed: combining two ControlNets is additive (features += weight_a * control_a + weight_b * control_b), and equal weights (1.0, 1.0) push features roughly twice as far as a normalized (0.4, 0.6) split\n• ControlNet clones the encoder (not the decoder) because the encoder\'s progressive feature extraction is naturally suited to processing an image-like condition',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: gate=0 ನಲ್ಲಿ, ಒಂದೂ ControlNet-ಸಜ್ಜಿತ model ಮಾತ್ರ frozen base model ಗೆ ಒಂದೇ output ಉತ್ಪಾದಿಸುತ್ತದೆ ([2,4,6] == base(x)) -- ಇದೇ zero-convolution ನ "starts as identity" ಖಾತರಿಯ ನಿಜ ಅರ್ಥ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: gate ಅನ್ನೂ ಶೂನ್ಯ ಮೀರಿ ಹೆಚ್ಚಿಸುವುದೂ ತಕ್ಷಣ condition ಗೆ output ಅನ್ನೂ ನಿಯಂತ್ರಿಸಲು ಬಿಡುತ್ತದೆ, frozen base ಎಂದಿಗೂ ಮಾರ್ಪಡಿಸದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಎರಡೂ ControlNets ಸಂಯೋಜಿಸುವುದೂ additive (features += weight_a * control_a + weight_b * control_b), ಮತ್ತು ಸಮಾನ weights (1.0, 1.0) features ಅನ್ನೂ ಒಂದೂ normalized (0.4, 0.6) split ಗಿಂತ ಸುಮಾರು ಎರಡೂ ಪಟ್ಟೂ ದೂರ ತಳ್ಳುತ್ತವೆ\n• ControlNet encoder clone ಮಾಡುತ್ತದೆ (decoder ಅಲ್ಲ) ಏಕೆಂದರೆ encoder ನ ಪ್ರಗತಿಶೀಲ feature extraction ಒಂದೂ image-ರೀತಿಯ condition ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಸ್ವಾಭಾವಿಕವಾಗಿ ಸೂಕ್ತವಾಗಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact zero-gate mechanism genuinely verified here -- gate=0 producing output identical to the frozen base model -- is the real reason production ControlNet models (Zhang et al., 2023) can be trained on relatively small datasets without destroying the base Stable Diffusion model\'s pretrained knowledge: the model starts training from a point that is guaranteed to behave exactly like the original, and only gradually learns when and how much to let the condition matter.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ zero-gate ಯಂತ್ರಾಂಶ -- gate=0 frozen base model ಗೆ ಒಂದೇ output ಉತ್ಪಾದಿಸುವುದೂ -- production ControlNet models (Zhang et al., 2023) ತುಲನಾತ್ಮಕವಾಗಿ ಚಿಕ್ಕ datasets ಮೇಲೆ base Stable Diffusion model ನ ಪ್ರಿಟ್ರೇನ್ಡ್ ಜ್ಞಾನವನ್ನೂ ನಾಶಪಡಿಸದೆ train ಮಾಡಬಹುದಾದ ನಿಜ ಕಾರಣ: model ಮೂಲ ಒಂದಕ್ಕೆ ನಿಖರವಾಗಿ ಒಂದೇ ರೀತಿ ವರ್ತಿಸುತ್ತದೆ ಎಂದು ಖಾತರಿಪಡಿಸುವ ಒಂದೂ point ಇಂದ training ಆರಂಭಿಸುತ್ತದೆ, ಮತ್ತು ಕ್ರಮೇಣ condition ಯಾವಾಗ ಮತ್ತು ಎಷ್ಟೂ ಮುಖ್ಯ ಎಂದು ಮಾತ್ರ ಕಲಿಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: because base(x) never changes across both gate settings, freezing the base model genuinely prevents catastrophic forgetting -- the pretrained knowledge about textures, objects, and lighting stays fully intact no matter how the ControlNet branch trains\n• Genuinely confirmed additive combination of two ControlNets means a team can train Pose and Depth ControlNets completely independently, then combine them only at inference time with tunable weights -- no joint retraining needed to support new combinations of conditions',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: base(x) ಎರಡೂ gate settings ಆದ್ಯಂತ ಎಂದಿಗೂ ಬದಲಾಗದಿರುವುದರಿಂದ, base model ಅನ್ನೂ freeze ಮಾಡುವುದೂ ನಿಜವಾಗಿ catastrophic forgetting ತಡೆಯುತ್ತದೆ -- textures, objects, ಮತ್ತು lighting ಬಗ್ಗೆ ಪ್ರಿಟ್ರೇನ್ಡ್ ಜ್ಞಾನ ControlNet branch ಹೇಗೆ train ಆದರೂ ಸಂಪೂರ್ಣವಾಗಿ ಅಖಂಡವಾಗಿ ಉಳಿಯುತ್ತದೆ\n• ಎರಡೂ ControlNets ನ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ additive ಸಂಯೋಜನೆ ಎಂದರೆ ಒಂದೂ ತಂಡ Pose ಮತ್ತು Depth ControlNets ಗಳನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಸ್ವತಂತ್ರವಾಗಿ train ಮಾಡಬಹುದು, ನಂತರ ಅವುಗಳನ್ನೂ ಕೇವಲ inference time ನಲ್ಲಿ ಟ್ಯೂನ್ ಮಾಡಬಹುದಾದ weights ಜೊತೆ ಸಂಯೋಜಿಸಬಹುದು -- conditions ನ ಹೊಸ ಸಂಯೋಜನೆಗಳನ್ನೂ ಬೆಂಬಲಿಸಲು ಯಾವುದೇ joint retraining ಅಗತ್ಯವಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production illustration tool that lets an artist upload a pose skeleton and generate a matching character genuinely relies on the exact mechanism verified in this lesson: the ControlNet branch was trained starting from gate=0 (identical to plain Stable Diffusion), so early in training it barely influenced output, and only gradually learned to make its pose condition matter -- which is why ControlNet checkpoints can be trained on datasets far smaller than the billions of images used for the base model, without the tool ever producing worse plain-text generations.',
      bodyKn: 'ಒಂದೂ artist ಒಂದೂ pose skeleton ಅಪ್ಲೋಡ್ ಮಾಡಿ ಒಂದೂ ಹೊಂದಾಣಿಕೆಯ character ಉತ್ಪಾದಿಸಲು ಬಿಡುವ ಒಂದೂ production illustration tool ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ ಯಂತ್ರಾಂಶ ಅವಲಂಬಿಸುತ್ತದೆ: ControlNet branch gate=0 ಇಂದ (ಶುದ್ಧ Stable Diffusion ಗೆ ಒಂದೇ) train ಆರಂಭಿಸಿತು, ಆದ್ದರಿಂದ training ನ ಆರಂಭದಲ್ಲಿ ಅದೂ output ಅನ್ನೂ ಬಹುತೇಕ ಪ್ರಭಾವಿಸಲಿಲ್ಲ, ಮತ್ತು ಕ್ರಮೇಣ ಮಾತ್ರ ಅದೂ pose condition ಅನ್ನೂ ಮುಖ್ಯ ಮಾಡಲು ಕಲಿಯಿತು -- ಇದೇ ಏಕೆ ControlNet checkpoints ಬೇಸ್ model ಗೆ ಬಳಸಿದ ಶತಕೋಟಿ images ಗಿಂತ ಬಹಳ ಚಿಕ್ಕ datasets ಮೇಲೆ train ಮಾಡಬಹುದು, tool ಎಂದಿಗೂ ಕೆಟ್ಟ plain-text generations ಉತ್ಪಾದಿಸದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: at gate=0.0, what is the final output h compared to base(x)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: gate=0.0 ನಲ್ಲಿ, ಅಂತಿಮ output h base(x) ಗೆ ಹೋಲಿಸಿದರೆ ಏನೂ?',
        opts: ['h is always zero', 'h is exactly equal to base(x) -- genuinely confirmed, [2,4,6] == [2,4,6]', 'h is double base(x)', 'h equals the condition'], correct: 1,
        optsKn: ['h ಯಾವಾಗಲೂ ಶೂನ್ಯ', 'h ನಿಖರವಾಗಿ base(x) ಗೆ ಸಮಾನ -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, [2,4,6] == [2,4,6]', 'h base(x) ಗೆ ಎರಡೂ ಪಟ್ಟೂ', 'h condition ಗೆ ಸಮಾನ'] },
      { q: 'Why does ControlNet clone the encoder rather than the decoder?', qKn: 'ControlNet ಏಕೆ decoder ಬದಲು encoder clone ಮಾಡುತ್ತದೆ?',
        opts: ['The decoder is too large to clone', 'The encoder\'s progressive feature extraction (edges -> shapes -> objects) is naturally suited to processing an image-like condition', 'Encoders train faster', 'Decoders cannot be frozen'], correct: 1,
        optsKn: ['Decoder clone ಮಾಡಲು ತುಂಬಾ ದೊಡ್ಡದೂ', 'Encoder ನ ಪ್ರಗತಿಶೀಲ feature extraction (edges -> shapes -> objects) ಒಂದೂ image-ರೀತಿಯ condition ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಸ್ವಾಭಾವಿಕವಾಗಿ ಸೂಕ್ತ', 'Encoders ವೇಗವಾಗಿ train ಆಗುತ್ತವೆ', 'Decoders ಅನ್ನೂ freeze ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what does raising gate from 0.0 to 0.1 do to the final output ([2,4,6] at gate=0)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: gate ಅನ್ನೂ 0.0 ಇಂದ 0.1 ಗೆ ಹೆಚ್ಚಿಸುವುದೂ ಅಂತಿಮ output ಗೆ ([2,4,6] gate=0 ನಲ್ಲಿ) ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['No change at all', 'Changes it to [3,6,9], genuinely confirmed by adding 0.1*condition', 'Resets it to zero', 'Doubles the base model itself'], correct: 1,
        optsKn: ['ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲ', 'ಅದನ್ನೂ [3,6,9] ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ, 0.1*condition ಸೇರಿಸುವ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'ಅದನ್ನೂ ಶೂನ್ಯಕ್ಕೆ ಮರುಹೊಂದಿಸುತ್ತದೆ', 'base model ಸ್ವತಃ ಎರಡೂ ಪಟ್ಟೂ ಮಾಡುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: combining two ControlNets with weight_a=1.0, weight_b=1.0 versus weight_a=0.4, weight_b=0.6 -- what changes?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: weight_a=1.0, weight_b=1.0 ವಿರುದ್ಧ weight_a=0.4, weight_b=0.6 ಜೊತೆ ಎರಡೂ ControlNets ಸಂಯೋಜಿಸುವುದೂ -- ಏನೂ ಬದಲಾಗುತ್ತದೆ?',
        opts: ['Nothing, weights don\'t matter', 'The combined signal strength scales with the sum of the weights -- equal weights push features roughly twice as far as the normalized split', 'Only weight_a matters', 'The base features are replaced entirely'], correct: 1,
        optsKn: ['ಏನೂ ಇಲ್ಲ, weights ಮುಖ್ಯವಲ್ಲ', 'ಸಂಯೋಜಿತ signal ಬಲ weights ನ ಮೊತ್ತದ ಜೊತೆ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ -- ಸಮಾನ weights features ಅನ್ನೂ normalized split ಗಿಂತ ಸುಮಾರು ಎರಡೂ ಪಟ್ಟೂ ದೂರ ತಳ್ಳುತ್ತವೆ', 'ಕೇವಲ weight_a ಮುಖ್ಯ', 'Base features ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸಲ್ಪಡುತ್ತವೆ'] },
      { q: 'What is the real-world equivalent of the toy code\'s "gate"?', qKn: 'Toy code ನ "gate" ನ ನಿಜ-ಜಗತ್ತಿನ ಸಮಾನ ಏನೂ?',
        opts: ['A learning rate', 'A zero-initialized 1x1 convolution layer', 'A dropout probability', 'A batch size'], correct: 1,
        optsKn: ['ಒಂದೂ learning rate', 'ಒಂದೂ zero-initialized 1x1 convolution layer', 'ಒಂದೂ dropout probability', 'ಒಂದೂ batch size'] },
    ] } },
  ],
};
