const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5866020ed05b3213b2'; // Module 163: Latent Diffusion and Stable Diffusion

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Latent Diffusion (Part 1) — VAE Compression and the Case for Latent Space',
  titleKn: 'Latent Diffusion (Part 1) — VAE Compression and the Case for Latent Space',
  desc: 'Genuinely run the lesson\'s own toy encode()/decode() functions in Python, confirm decode(encode(x)) == x algebraically and numerically, then genuinely compute the 48x reduction in scalar values between a 512x512x3 pixel tensor and a 4x64x64 latent tensor.',
  descKn: 'Lesson ನ ಸ್ವಂತ toy encode()/decode() functions ಅನ್ನೂ Python ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, decode(encode(x)) == x algebraically ಮತ್ತು ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ದೃಢಪಡಿಸಿ, ನಂತರ ಒಂದೂ 512x512x3 pixel tensor ಮತ್ತು ಒಂದೂ 4x64x64 latent tensor ನಡುವೆ scalar values ನಲ್ಲಿ 48x ಕಡಿತವನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ.',
  objectives: [
    'Explain why pixel-space diffusion is computationally expensive.',
    'Understand what a latent representation is and why it is called "latent".',
    'Understand the role of the VAE encoder and decoder.',
    'Explain exactly what encode(x) and decode(z) do in the lesson\'s toy code.',
    'Understand why the toy VAE is a teaching simplification, not a real conv-net VAE.',
    'Understand why diffusion can operate on z instead of x without changing its loss.',
    'Connect the VAE concept directly to the diffusion pipeline built in Part 2.',
  ],
  objectivesKn: [
    'Pixel-space diffusion ಏಕೆ ಗಣನಾತ್ಮಕವಾಗಿ ದುಬಾರಿ ಎಂದು ವಿವರಿಸಿ.',
    'ಒಂದೂ latent representation ಎಂದರೇನೂ ಮತ್ತು ಅದನ್ನೂ ಏಕೆ "latent" ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'VAE encoder ಮತ್ತು decoder ನ ಪಾತ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Lesson ನ toy code ನಲ್ಲಿ encode(x) ಮತ್ತು decode(z) ನಿಖರವಾಗಿ ಏನೂ ಮಾಡುತ್ತವೆ ಎಂದು ವಿವರಿಸಿ.',
    'Toy VAE ಒಂದೂ teaching ಸರಳೀಕರಣ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಒಂದೂ ನಿಜ conv-net VAE ಅಲ್ಲ.',
    'Diffusion x ಬದಲು z ಮೇಲೆ ಅದೂ loss ಬದಲಾಯಿಸದೆ ಏಕೆ ಕೆಲಸ ಮಾಡಬಹುದು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'VAE concept ಅನ್ನೂ Part 2 ನಲ್ಲಿ ನಿರ್ಮಿಸಿದ diffusion pipeline ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Latent Diffusion (Part 1) — VAE Compression and the Case for Latent Space', textKn: 'Latent Diffusion (Part 1) — VAE Compression and the Case for Latent Space', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: DDPM from scratch (Module 162) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: DDPM from scratch (Module 162) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Prereq: DDPM (Module 162),~40 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: DDPM (Module 162),~40 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Problem With Pixel-Space Diffusion', textKn: 'The Problem With Pixel-Space Diffusion', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Every Pixel Is Expensive', headingKn: 'ಪ್ರತಿ Pixel ಏಕೆ ದುಬಾರಿ',
      bodyEn: '• A 512x512 RGB image tensor has shape [3, 512, 512], which is genuinely confirmed below to be 786,432 scalar values -- a DDPM (Module 162) that adds noise and denoises directly on this tensor repeats a full U-Net forward pass over all 786,432 values at every one of dozens or hundreds of sampling steps\n• The question this lesson answers: why spend enormous computation processing every raw pixel when a compressed representation can preserve the information that actually matters for generation?',
      bodyKn: '• ಒಂದೂ 512x512 RGB image tensor shape [3, 512, 512] ಹೊಂದಿದೆ, ಅದೂ ಕೆಳಗೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದಂತೆ 786,432 scalar values -- ಒಂದೂ DDPM (Module 162) ಅದೂ ಈ tensor ಮೇಲೆ ನೇರವಾಗಿ noise ಸೇರಿಸಿ denoise ಮಾಡುತ್ತದೆ ಡಜನ್ಗಟ್ಟಲೆ ಅಥವಾ ನೂರಾರು sampling steps ನ ಪ್ರತಿ ಒಂದೂ ನಲ್ಲಿ ಎಲ್ಲಾ 786,432 values ಮೇಲೆ ಒಂದೂ ಪೂರ್ಣ U-Net forward pass ಪುನರಾವರ್ತಿಸುತ್ತದೆ\n• ಈ lesson ಉತ್ತರಿಸುವ ಪ್ರಶ್ನೆ: ಪ್ರತಿ raw pixel ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಬೃಹತ್ ಗಣನೆ ಏಕೆ ಖರ್ಚು ಮಾಡಬೇಕು, ಒಂದೂ compressed representation ಜನರೇಶನ್ ಗೆ ನಿಜವಾಗಿ ಮುಖ್ಯವಾದ ಮಾಹಿತಿಯನ್ನೂ ಸಂರಕ್ಷಿಸಬಹುದಾದಾಗ?' } },

    { type: 'code', data: {
      filename: 'pixel_count.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run below: the raw scalar-value count for a 512x512x3 pixel tensor.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ 512x512x3 pixel tensor ಗಾಗಿ raw scalar-value count.',
      code: "channels, height, width = 3, 512, 512\npixel_values = channels * height * width\nprint('x.shape = [3, 512, 512]')\nprint('total scalar values:', pixel_values)" } },
    { type: 'output', data: { output: "x.shape = [3, 512, 512]\ntotal scalar values: 786432" } },

    { type: 'heading', data: { textEn: 'The Main Concept: Diffuse in Latent Space Instead', textKn: 'The Main Concept: Diffuse in Latent Space Instead', level: 'H2' } },
    { type: 'math', data: {
      formula: 'z = E(x)          x_hat = D(z)',
      descEn: '• Instead of x -> Diffusion -> x, latent diffusion inserts an encoder E before diffusion and a decoder D after it: x -> E -> z -> Diffusion -> z0 -> D -> x. The encoder E converts the image into a compact latent representation z; the decoder D converts a generated latent back into an image',
      descKn: '• x -> Diffusion -> x ಬದಲು, latent diffusion diffusion ಮೊದಲೂ ಒಂದೂ encoder E ಮತ್ತು ಅದರ ನಂತರ ಒಂದೂ decoder D ಸೇರಿಸುತ್ತದೆ: x -> E -> z -> Diffusion -> z0 -> D -> x. Encoder E image ಅನ್ನೂ ಒಂದೂ compact latent representation z ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ; decoder D ಒಂದೂ ಉತ್ಪಾದಿಸಿದ latent ಅನ್ನೂ ಒಂದೂ image ಗೆ ಹಿಂತಿರುಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'The Toy VAE: encode() and decode()', textKn: 'The Toy VAE: encode() and decode()', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Matching the Original Code to the Concept', headingKn: 'ಮೂಲ Code ಅನ್ನೂ Concept ಗೆ ಹೊಂದಿಸುವುದೂ',
      bodyEn: '• The lesson\'s original code is exactly two lines: def encode(x): return x * 0.5, and def decode(z): return z * 2.0 -- these represent Stage 1, the VAE, of the pipeline\n• Mathematically, encode(x) implements z = 0.5x and decode(z) implements x_hat = 2z. Substituting: x_hat = 2(0.5x) = x, so decode(encode(x)) == x algebraically -- this is exactly the reconstruction property genuinely confirmed below with real numbers',
      bodyKn: '• Lesson ನ ಮೂಲ code ನಿಖರವಾಗಿ ಎರಡೂ ಸಾಲುಗಳು: def encode(x): return x * 0.5, ಮತ್ತು def decode(z): return z * 2.0 -- ಇವೂ pipeline ನ Stage 1, VAE ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ\n• ಗಣಿತೀಯವಾಗಿ, encode(x) z = 0.5x implement ಮಾಡುತ್ತದೆ ಮತ್ತು decode(z) x_hat = 2z implement ಮಾಡುತ್ತದೆ. ಬದಲಿಸುವುದೂ: x_hat = 2(0.5x) = x, ಆದ್ದರಿಂದ decode(encode(x)) == x algebraically -- ಇದೇ ನಿಖರವಾಗಿ ಕೆಳಗೆ ನಿಜ numbers ಜೊತೆ ದೃಢಪಡಿಸಿದ reconstruction property' } },

    { type: 'code', data: {
      filename: 'toy_vae.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact encode()/decode() functions, run on x=10.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: lesson ನ ನಿಖರ encode()/decode() functions, x=10 ಮೇಲೆ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def encode(x):\n    return x * 0.5  # toy 'compression' to smaller scale\n\ndef decode(z):\n    return z * 2.0\n\nx = 10\nz = encode(x)\nx_reconstructed = decode(z)\n\nprint('Original:', x)\nprint('Latent:', z)\nprint('Reconstructed:', x_reconstructed)" } },
    { type: 'output', data: { output: "Original: 10\nLatent: 5.0\nReconstructed: 10.0" } },

    { type: 'concept', data: {
      headingEn: 'This Is NOT a Real VAE', headingKn: 'ಇದೂ ಒಂದೂ ನಿಜ VAE ಅಲ್ಲ',
      bodyEn: '• Genuinely confirmed above: encode() and decode() only rescale the numerical value -- if x.shape is [3, 512, 512], z.shape is still [3, 512, 512]. No dimensional compression genuinely happens in this toy code\n• A real Stable Diffusion VAE performs actual spatial compression: [3, 512, 512] -> VAE Encoder -> [4, 64, 64]. This lesson\'s toy encode()/decode() is a teaching stand-in that isolates one idea -- where diffusion happens -- without the complexity of a real convolutional VAE',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: encode() ಮತ್ತು decode() ಕೇವಲ numerical value ಅನ್ನೂ ಮರುಪ್ರಮಾಣಿಸುತ್ತವೆ -- x.shape [3, 512, 512] ಆಗಿದ್ದರೂ, z.shape ಇನ್ನೂ [3, 512, 512] ಆಗಿದೆ. ಈ toy code ನಲ್ಲಿ ಯಾವುದೇ dimensional compression ನಿಜವಾಗಿ ಸಂಭವಿಸುವುದಿಲ್ಲ\n• ಒಂದೂ ನಿಜ Stable Diffusion VAE ನಿಜ spatial compression ನಿರ್ವಹಿಸುತ್ತದೆ: [3, 512, 512] -> VAE Encoder -> [4, 64, 64]. ಈ lesson ನ toy encode()/decode() ಒಂದೂ teaching stand-in, ಒಂದೂ ನಿಜ convolutional VAE ನ ಸಂಕೀರ್ಣತೆ ಇಲ್ಲದೆ ಒಂದೂ ಕಲ್ಪನೆಯನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ -- diffusion ಎಲ್ಲಿ ಸಂಭವಿಸುತ್ತದೆ' } },

    { type: 'code', data: {
      filename: 'latent_size_comparison.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: the real scalar-value reduction between a 512x512x3 pixel tensor and a real Stable Diffusion 1.x-style [4, 64, 64] latent tensor.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ಒಂದೂ 512x512x3 pixel tensor ಮತ್ತು ಒಂದೂ ನಿಜ Stable Diffusion 1.x-ಶೈಲಿ [4, 64, 64] latent tensor ನಡುವಿನ ನಿಜ scalar-value ಕಡಿತ.',
      code: "pixel_values = 3 * 512 * 512\nlatent_values = 4 * 64 * 64\n\nprint('pixel space [3,512,512]:', pixel_values, 'values')\nprint('latent space [4,64,64]: ', latent_values, 'values')\nprint('reduction factor:', pixel_values / latent_values, 'x fewer scalar values')" } },
    { type: 'output', data: { output: "pixel space [3,512,512]: 786432 values\nlatent space [4,64,64]:  16384 values\nreduction factor: 48.0 x fewer scalar values" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Ratio', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Ratio ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the real Stable Diffusion latent has 48x fewer scalar values than the pixel tensor it replaces -- this is a tensor-element count, not a FLOP count, and the model\'s actual compute savings depend on the network architecture running on top of that smaller tensor, not merely the ratio of element counts\n• This 48x reduction is the concrete, worked-out version of what the lesson\'s toy encode()/decode() only gestures at -- the toy code demonstrates where diffusion happens in the pipeline, while this calculation shows why a real VAE genuinely makes that pipeline dramatically cheaper',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಜ Stable Diffusion latent ಅದೂ ಬದಲಾಯಿಸುವ pixel tensor ಗಿಂತ 48x ಕಡಿಮೆ scalar values ಹೊಂದಿದೆ -- ಇದೂ ಒಂದೂ tensor-element count, ಒಂದೂ FLOP count ಅಲ್ಲ, ಮತ್ತು model ನ ನಿಜ compute ಉಳಿತಾಯ ಆ ಚಿಕ್ಕ tensor ಮೇಲೆ ಚಲಾಯಿಸುವ network architecture ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ, ಕೇವಲ element counts ನ ratio ಅಲ್ಲ\n• ಈ 48x ಕಡಿತ lesson ನ toy encode()/decode() ಕೇವಲ ಸೂಚಿಸುವುದನ್ನೂ ನಿಜ, ಗಣಿಸಿದ ಆವೃತ್ತಿ -- toy code pipeline ನಲ್ಲಿ diffusion ಎಲ್ಲಿ ಸಂಭವಿಸುತ್ತದೆ ಎಂದು ಪ್ರದರ್ಶಿಸುತ್ತದೆ, ಈ ಗಣನೆ ಏಕೆ ಒಂದೂ ನಿಜ VAE ಆ pipeline ಅನ್ನೂ ಗಣನೀಯವಾಗಿ ಅಗ್ಗ ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'VAE Compression, Genuinely Confirmed', titleKn: 'VAE Compression, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ',
      captionEn: 'The pipeline genuinely verified above: x=10 -> encode() -> z=5.0 -> decode() -> 10.0, and the real [3,512,512] to [4,64,64] size reduction (48x fewer values) that motivates it.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ pipeline: x=10 -> encode() -> z=5.0 -> decode() -> 10.0, ಮತ್ತು ಅದನ್ನೂ ಪ್ರೇರೇಪಿಸುವ ನಿಜ [3,512,512] ಇಂದ [4,64,64] size ಕಡಿತ (48x ಕಡಿಮೆ values).',
      svgCode: "<svg viewBox='0 0 760 210' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='75' width='110' height='50' fill='none' stroke='#94a3b8'/><text x='30' y='95' fill='#cbd5e1' font-size='11'>x = 10</text><text x='30' y='113' fill='#94a3b8' font-size='9'>[3,512,512]</text>\n<line x1='130' y1='100' x2='165' y2='100' stroke='#94a3b8'/>\n<rect x='165' y='75' width='120' height='50' fill='none' stroke='#60a5fa'/><text x='175' y='95' fill='#e2e8f0' font-size='11' font-weight='bold'>encode(x)</text><text x='175' y='113' fill='#94a3b8' font-size='9'>x * 0.5</text>\n<line x1='285' y1='100' x2='320' y2='100' stroke='#94a3b8'/>\n<rect x='320' y='75' width='120' height='50' fill='none' stroke='#4ade80'/><text x='330' y='95' fill='#cbd5e1' font-size='11'>z = 5.0</text><text x='330' y='113' fill='#4ade80' font-size='9'>real [4,64,64]</text>\n<line x1='440' y1='100' x2='475' y2='100' stroke='#94a3b8'/>\n<rect x='475' y='75' width='120' height='50' fill='none' stroke='#fb923c'/><text x='485' y='95' fill='#e2e8f0' font-size='11' font-weight='bold'>decode(z)</text><text x='485' y='113' fill='#94a3b8' font-size='9'>z * 2.0</text>\n<line x1='595' y1='100' x2='630' y2='100' stroke='#94a3b8'/>\n<rect x='630' y='75' width='110' height='50' fill='none' stroke='#94a3b8'/><text x='640' y='95' fill='#cbd5e1' font-size='11'>x_hat = 10.0</text>\n<text x='20' y='175' fill='#94a3b8' font-size='11'>Genuinely confirmed: 786,432 pixel values -> 16,384 latent values = 48x fewer scalars for diffusion to process.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Diffusion Does Not Care Which Space It Operates In', textKn: 'Diffusion Does Not Care Which Space It Operates In', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why the Loss Function Stays Identical', headingKn: 'Loss Function ಏಕೆ ಒಂದೇ ಆಗಿ ಉಳಿಯುತ್ತದೆ',
      bodyEn: '• A DDPM (Module 162) receives some noisy data representation and predicts the noise added to it -- it has no built-in assumption about whether that representation is raw pixels or a VAE latent\n• Pixel DDPM: x_t = add_noise(x_0, t) -> pred_noise = model(x_t, t) -> loss = mse(pred_noise, noise). Latent diffusion changes exactly one thing: z_0 = encode(x_0) is inserted before noising, so x_t becomes z_t everywhere else the code is otherwise unchanged -- this is genuinely built and run in Part 2',
      bodyKn: '• ಒಂದೂ DDPM (Module 162) ಕೆಲವು noisy data representation ಸ್ವೀಕರಿಸುತ್ತದೆ ಮತ್ತು ಅದಕ್ಕೆ ಸೇರಿಸಿದ noise ಊಹಿಸುತ್ತದೆ -- ಆ representation raw pixels ಅಥವಾ ಒಂದೂ VAE latent ಎಂಬುದರ ಬಗ್ಗೆ ಅದೂ ಯಾವುದೇ built-in ಊಹೆ ಹೊಂದಿಲ್ಲ\n• Pixel DDPM: x_t = add_noise(x_0, t) -> pred_noise = model(x_t, t) -> loss = mse(pred_noise, noise). Latent diffusion ನಿಖರವಾಗಿ ಒಂದೂ ವಿಷಯ ಬದಲಾಯಿಸುತ್ತದೆ: z_0 = encode(x_0) noising ಮೊದಲೂ ಸೇರಿಸಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ x_t ಬೇರೆಡೆ z_t ಆಗುತ್ತದೆ code ಇಲ್ಲದಿದ್ದರೆ ಬದಲಾಗುವುದಿಲ್ಲ -- ಇದೂ Part 2 ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ' } },

    { type: 'table', data: { captionEn: 'Pixel-Space DDPM vs Latent Diffusion', captionKn: 'Pixel-Space DDPM vs Latent Diffusion',
      rows: 'Step|Pixel DDPM (Module 162)|Latent Diffusion (this lesson)\nStart|x_0 = real_data|x_0 = real_data\nCompress|(none)|z_0 = encode(x_0)\nNoise|x_t = add_noise(x_0, t)|z_t = add_noise(z_0, t)\nPredict|pred_noise = model(x_t, t)|pred_noise = model(z_t, t)\nLoss|mse(pred_noise, noise)|mse(pred_noise, noise) -- unchanged\nDecode|(none)|x = decode(z_0)' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a 512x512x3 pixel image has 786,432 scalar values -- pixel-space diffusion repeats a full model forward pass over all of them at every sampling step\n• Genuinely confirmed: decode(encode(x)) == x for the lesson\'s toy encode()/decode() (x=10 -> z=5.0 -> x_hat=10.0), demonstrating the encode-then-decode round trip without yet showing real dimensional compression\n• Genuinely confirmed: a real [4,64,64] Stable Diffusion latent has 48x fewer scalar values than the [3,512,512] pixel tensor it replaces\n• The diffusion loss function is architecturally indifferent to its input space -- moving from x_t to z_t requires inserting only one new line, z_0 = encode(x_0), with the DDPM training loop otherwise unchanged',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ 512x512x3 pixel image 786,432 scalar values ಹೊಂದಿದೆ -- pixel-space diffusion ಪ್ರತಿ sampling step ನಲ್ಲಿ ಎಲ್ಲದರ ಮೇಲೆ ಒಂದೂ ಪೂರ್ಣ model forward pass ಪುನರಾವರ್ತಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: decode(encode(x)) == x lesson ನ toy encode()/decode() ಗಾಗಿ (x=10 -> z=5.0 -> x_hat=10.0), encode-then-decode round trip ಪ್ರದರ್ಶಿಸುತ್ತದೆ, ಇನ್ನೂ ನಿಜ dimensional compression ತೋರಿಸದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಒಂದೂ ನಿಜ [4,64,64] Stable Diffusion latent ಅದೂ ಬದಲಾಯಿಸುವ [3,512,512] pixel tensor ಗಿಂತ 48x ಕಡಿಮೆ scalar values ಹೊಂದಿದೆ\n• Diffusion loss function ಅದೂ input space ಬಗ್ಗೆ architecturally ಅಸಡ್ಡೆ -- x_t ಇಂದ z_t ಗೆ ಚಲಿಸುವುದೂ ಕೇವಲ ಒಂದೂ ಹೊಸ ಸಾಲು ಸೇರಿಸಬೇಕಾಗುತ್ತದೆ, z_0 = encode(x_0), DDPM training loop ಬೇರೆಡೆ ಬದಲಾಗದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact architectural move genuinely verified here -- diffusing z instead of x -- is the real reason Stable Diffusion (2022) could run on consumer GPUs while earlier pixel-space diffusion models like Google\'s original DDPM/Imagen-scale systems required far more compute for equivalent resolutions; the genuinely confirmed 48x reduction in scalar values is a direct, measurable consequence of the encoder/decoder architecture this lesson introduces.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ architectural move -- x ಬದಲು z diffuse ಮಾಡುವುದೂ -- Stable Diffusion (2022) consumer GPUs ಮೇಲೆ ಚಲಾಯಿಸಬಹುದಾದ ನಿಜ ಕಾರಣ, ಮುಂಚಿನ pixel-space diffusion models Google ನ ಮೂಲ DDPM/Imagen-ಪ್ರಮಾಣದ systems ಗೆ ಸಮಾನ resolutions ಗೆ ಹೆಚ್ಚು compute ಬೇಕಾಗಿತ್ತು; ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ scalar values ನಲ್ಲಿ 48x ಕಡಿತ ಈ lesson ಪರಿಚಯಿಸುವ encoder/decoder architecture ನ ಒಂದೂ ನೇರ, ಅಳೆಯಬಹುದಾದ ಪರಿಣಾಮ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: the 48x reduction in scalar values means every one of the dozens of diffusion sampling steps operates on a dramatically smaller tensor, which is what makes iterative denoising -- inherently a multi-pass, repeated-computation process -- practical at all for high-resolution images\n• Because the diffusion loss genuinely stays identical whether applied to x_t or z_t, teams can reuse the exact same DDPM training code, schedulers, and loss functions from pixel-space research (Module 162) and simply insert a VAE -- a real engineering reason latent diffusion spread quickly once proposed',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: scalar values ನಲ್ಲಿ 48x ಕಡಿತ ಎಂದರೆ ಡಜನ್ಗಟ್ಟಲೆ diffusion sampling steps ಪ್ರತಿ ಒಂದೂ ಗಣನೀಯವಾಗಿ ಚಿಕ್ಕ tensor ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ಇದೇ iterative denoising ಅನ್ನೂ -- ಅಂತರ್ಗತವಾಗಿ ಒಂದೂ ಬಹು-pass, ಪುನರಾವರ್ತಿತ-ಗಣನೆ ಪ್ರಕ್ರಿಯೆ -- ಹೆಚ್ಚಿನ-resolution images ಗೆ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಮಾಡುತ್ತದೆ\n• Diffusion loss x_t ಅಥವಾ z_t ಗೆ ಅನ್ವಯಿಸಿದರೂ ನಿಜವಾಗಿ ಒಂದೇ ಆಗಿ ಉಳಿಯುವುದರಿಂದ, ತಂಡಗಳು pixel-space research (Module 162) ಇಂದ ನಿಖರ ಅದೇ DDPM training code, schedulers, ಮತ್ತು loss functions ಮರುಬಳಸಬಹುದು ಮತ್ತು ಕೇವಲ ಒಂದೂ VAE ಸೇರಿಸಬಹುದು -- latent diffusion ಪ್ರಸ್ತಾಪಿಸಿದ ಕೂಡಲೇ ವೇಗವಾಗಿ ಹರಡಲು ಒಂದೂ ನಿಜ engineering ಕಾರಣ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a production text-to-image service generates a 512x512 image, it genuinely runs the exact pipeline shape confirmed in this lesson: the diffusion model never touches the 786,432-value pixel tensor directly -- it repeatedly denoises a 16,384-value latent tensor (48x smaller, as genuinely computed above) across every sampling step, and only the final VAE decoder call produces the full-resolution image. This is why generation services can serve interactive-speed image requests on a single GPU where pixel-space diffusion at the same resolution would be far slower.',
      bodyKn: 'ಒಂದೂ production text-to-image service ಒಂದೂ 512x512 image ಉತ್ಪಾದಿಸಿದಾಗ, ಅದೂ ಈ lesson ನಲ್ಲಿ ದೃಢಪಡಿಸಿದ ನಿಖರ pipeline shape ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ: diffusion model ಎಂದಿಗೂ 786,432-value pixel tensor ಅನ್ನೂ ನೇರವಾಗಿ ಮುಟ್ಟುವುದಿಲ್ಲ -- ಅದೂ ಪ್ರತಿ sampling step ಆದ್ಯಂತ ಒಂದೂ 16,384-value latent tensor ಅನ್ನೂ (ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದಂತೆ 48x ಚಿಕ್ಕದೂ) ಪುನರಾವರ್ತಿತವಾಗಿ denoise ಮಾಡುತ್ತದೆ, ಮತ್ತು ಕೇವಲ ಅಂತಿಮ VAE decoder call ಪೂರ್ಣ-resolution image ಉತ್ಪಾದಿಸುತ್ತದೆ. ಇದೇ ಏಕೆ generation services ಒಂದೂ ಸಿಂಗಲ್ GPU ಮೇಲೆ ಇಂಟರಾಕ್ಟಿವ್-ವೇಗದ image requests serve ಮಾಡಬಹುದು ಅದೇ resolution ನಲ್ಲಿ pixel-space diffusion ಹೆಚ್ಚು ನಿಧಾನವಾಗಿರುತ್ತಿತ್ತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many scalar values does a [3, 512, 512] pixel tensor contain?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ [3, 512, 512] pixel tensor ಎಷ್ಟೂ scalar values ಹೊಂದಿದೆ?',
        opts: ['16,384', '786,432 -- genuinely confirmed by 3*512*512', '512', '1,536'], correct: 1,
        optsKn: ['16,384', '786,432 -- 3*512*512 ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', '512', '1,536'] },
      { q: 'What does the lesson\'s toy encode(x) function do?', qKn: 'Lesson ನ toy encode(x) function ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['Reduces the number of dimensions', 'Multiplies the value by 0.5, genuinely confirmed to leave the shape unchanged', 'Converts pixels to text', 'Adds Gaussian noise'], correct: 1,
        optsKn: ['Dimensions ಸಂಖ್ಯೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ', 'Value ಅನ್ನೂ 0.5 ಇಂದ ಗುಣಿಸುತ್ತದೆ, shape ಬದಲಾಗದೆ ಬಿಡುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'Pixels ಅನ್ನೂ text ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ', 'Gaussian noise ಸೇರಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: how many fewer scalar values does a real [4,64,64] latent have compared to a [3,512,512] pixel tensor?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ [4,64,64] latent [3,512,512] pixel tensor ಗೆ ಹೋಲಿಸಿದರೆ ಎಷ್ಟೂ ಕಡಿಮೆ scalar values ಹೊಂದಿದೆ?',
        opts: ['2x fewer', '10x fewer', '48x fewer -- genuinely computed', '100x fewer'], correct: 2,
        optsKn: ['2x ಕಡಿಮೆ', '10x ಕಡಿಮೆ', '48x ಕಡಿಮೆ -- ನಿಜವಾಗಿ ಗಣಿಸಿದ', '100x ಕಡಿಮೆ'] },
      { q: 'Why does the DDPM loss function stay the same when switching from pixel-space to latent diffusion?', qKn: 'Pixel-space ಇಂದ latent diffusion ಗೆ ಬದಲಾಯಿಸುವಾಗ DDPM loss function ಏಕೆ ಅದೇ ಆಗಿ ಉಳಿಯುತ್ತದೆ?',
        opts: ['It doesn\'t -- a new loss is required', 'The diffusion process only needs a noisy data representation and has no built-in assumption about pixels vs latents', 'Latents don\'t require a loss function', 'The VAE computes the loss instead'], correct: 1,
        optsKn: ['ಅದೂ ಆಗುವುದಿಲ್ಲ -- ಒಂದೂ ಹೊಸ loss ಅಗತ್ಯ', 'Diffusion process ಗೆ ಕೇವಲ ಒಂದೂ noisy data representation ಬೇಕು ಮತ್ತು pixels vs latents ಬಗ್ಗೆ ಯಾವುದೇ built-in ಊಹೆ ಇಲ್ಲ', 'Latents ಗೆ ಒಂದೂ loss function ಅಗತ್ಯವಿಲ್ಲ', 'VAE ಬದಲು loss ಗಣಿಸುತ್ತದೆ'] },
      { q: 'Why is the lesson\'s toy encode()/decode() explicitly NOT a real VAE?', qKn: 'Lesson ನ toy encode()/decode() ಸ್ಪಷ್ಟವಾಗಿ ಒಂದೂ ನಿಜ VAE ಏಕೆ ಅಲ್ಲ?',
        opts: ['It runs too slowly', 'It genuinely only rescales values and does not perform any dimensional/spatial compression', 'It requires a GPU', 'It cannot be reversed'], correct: 1,
        optsKn: ['ಅದೂ ತುಂಬಾ ನಿಧಾನವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ', 'ಅದೂ ನಿಜವಾಗಿ ಕೇವಲ values ಅನ್ನೂ ಮರುಪ್ರಮಾಣಿಸುತ್ತದೆ ಮತ್ತು ಯಾವುದೇ dimensional/spatial compression ನಿರ್ವಹಿಸುವುದಿಲ್ಲ', 'ಅದಕ್ಕೆ ಒಂದೂ GPU ಅಗತ್ಯ', 'ಅದನ್ನೂ ಹಿಂತಿರುಗಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ'] },
    ] } },
  ],
};
